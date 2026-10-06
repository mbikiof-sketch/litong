#!/usr/bin/env node
/**
 * gsc.js — Google Search Console tooling (dependency-free, service-account auth).
 *
 * Auth: a service-account JSON key. Path via env GSC_SA or default
 *       ./.gsc-service-account.json  (gitignored).
 *       The service-account email MUST be added as a user in GSC.
 *
 * Network: honours HTTPS_PROXY / HTTP_PROXY env vars; on Windows falls back to
 *          the system (WinINET) proxy automatically.
 *
 * Usage:
 *   node scripts/gsc.js sites
 *   node scripts/gsc.js sitemaps  ["https://ic-distributor.com/"]
 *   node scripts/gsc.js queries   ["sc-domain:ic-distributor.com"] [days]
 *   node scripts/gsc.js opportunities ["sc-domain:ic-distributor.com"] [days]
 *   node scripts/gsc.js inspect   <pageUrl> ["sc-domain:ic-distributor.com"]
 *   node scripts/gsc.js submit    ["sc-domain:ic-distributor.com"] ["https://ic-distributor.com/sitemap.xml"]
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const http = require('http');
const https = require('https');
const tls = require('tls');
const { execSync } = require('child_process');
const { URL } = require('url');

const ROOT = path.join(__dirname, '..');
const SA_PATH = process.env.GSC_SA || path.join(ROOT, '.gsc-service-account.json');
const DEFAULT_SITE = process.env.GSC_SITE || 'sc-domain:ic-distributor.com';
const SCOPE = 'https://www.googleapis.com/auth/webmasters';

function detectProxy() {
  const env = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
  if (env) return env;
  if (process.platform === 'win32') {
    try {
      const out = execSync('reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyServer', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
      const m = out.match(/ProxyServer\s+REG_SZ\s+(\S+)/);
      if (m) return 'http://' + m[1];
    } catch (e) { /* ignore */ }
  }
  return null;
}
const PROXY = detectProxy();

function rawRequest(urlStr, { method = 'GET', headers = {}, body = null } = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const isHttps = u.protocol === 'https:';
    const port = u.port || (isHttps ? 443 : 80);
    const opts = { method, host: u.hostname, port, path: u.pathname + u.search, headers: { ...headers } };
    if (body) opts.headers['Content-Length'] = Buffer.byteLength(body);

    const doReq = (createConnection) => {
      if (createConnection) opts.createConnection = createConnection;
      const mod = isHttps ? https : http;
      const req = mod.request(opts, res => {
        let data = '';
        res.on('data', c => (data += c));
        res.on('end', () => resolve({ status: res.statusCode, body: data }));
      });
      req.on('error', reject);
      req.setTimeout(30000, () => req.destroy(new Error('request timeout')));
      if (body) req.write(body);
      req.end();
    };

    if (!PROXY) { doReq(); return; }
    const p = new URL(PROXY);
    const connectReq = http.request({
      host: p.hostname, port: p.port || 80, method: 'CONNECT',
      path: `${u.hostname}:${port}`, headers: { Host: `${u.hostname}:${port}`, 'Proxy-Connection': 'keep-alive' }
    });
    connectReq.on('connect', (res, socket) => {
      if (res.statusCode !== 200) { reject(new Error('proxy CONNECT failed: ' + res.statusCode)); return; }
      if (isHttps) {
        const tlsSock = tls.connect({ socket, servername: u.hostname }, () => doReq(() => tlsSock));
        tlsSock.on('error', reject);
      } else {
        doReq(() => socket);
      }
    });
    connectReq.on('error', reject);
    connectReq.setTimeout(30000, () => connectReq.destroy(new Error('proxy timeout')));
    connectReq.end();
  });
}

async function httpJson(url, opts) {
  const r = await rawRequest(url, opts);
  let json; try { json = JSON.parse(r.body); } catch (e) { json = r.body; }
  return { ok: r.status >= 200 && r.status < 300, status: r.status, json };
}

function b64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function getAccessToken() {
  if (!fs.existsSync(SA_PATH)) throw new Error(`Service-account JSON not found at ${SA_PATH}. Set GSC_SA or place it there.`);
  const sa = JSON.parse(fs.readFileSync(SA_PATH, 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: sa.client_email, scope: SCOPE, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600
  }));
  const signingInput = `${header}.${claim}`;
  const signature = b64url(crypto.createSign('RSA-SHA256').update(signingInput).sign(sa.private_key));
  const jwt = `${signingInput}.${signature}`;
  const r = await httpJson('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });
  if (!r.json.access_token) throw new Error('Token error: ' + JSON.stringify(r.json));
  return r.json.access_token;
}

const S = s => encodeURIComponent(s);

async function api(token, method, url, body) {
  return httpJson(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : null
  });
}

async function main() {
  const [cmd, a1, a2] = process.argv.slice(2);
  console.error(`(proxy: ${PROXY || 'direct'})`);
  const token = await getAccessToken();

  if (cmd === 'sites') {
    const r = await api(token, 'GET', 'https://searchconsole.googleapis.com/webmasters/v3/sites');
    console.log(JSON.stringify(r.json, null, 2));
    return;
  }
  if (cmd === 'sitemaps') {
    const site = a1 || DEFAULT_SITE;
    const r = await api(token, 'GET', `https://searchconsole.googleapis.com/webmasters/v3/sites/${S(site)}/sitemaps`);
    console.log(JSON.stringify(r.json, null, 2));
    return;
  }
  if (['queries', 'opportunities', 'pages', 'dates'].includes(cmd)) {
    const site = a1 || DEFAULT_SITE;
    const days = parseInt(a2 || '28', 10);
    const dim = cmd === 'pages' ? 'page' : cmd === 'dates' ? 'date' : 'query';
    const fmt = d => d.toISOString().slice(0, 10);
    const body = { startDate: fmt(new Date(Date.now() - days * 864e5)), endDate: fmt(new Date()), dimensions: [dim], rowLimit: 1000 };
    const r = await api(token, 'POST', `https://searchconsole.googleapis.com/webmasters/v3/sites/${S(site)}/searchAnalytics/query`, body);
    if (!r.ok) { console.log(JSON.stringify(r.json, null, 2)); return; }
    let rows = (r.json.rows || []).map(x => ({ k: x.keys[0], clicks: x.clicks, impressions: x.impressions, ctr: x.ctr, position: x.position }));
    if (cmd === 'opportunities') {
      rows = rows.filter(x => x.impressions >= 1 && x.position > 5 && x.position <= 50).sort((a, b) => b.impressions - a.impressions);
      console.log('Winnable queries (impressions>=1, ranking 6-50) — optimize these next:\n');
    }
    console.log([dim, 'clicks', 'impr', 'ctr', 'pos'].join('\t'));
    rows.slice(0, 300).forEach(x => console.log([x.k, x.clicks, x.impressions, (x.ctr * 100).toFixed(1) + '%', x.position.toFixed(1)].join('\t')));
    console.log(`\n(${rows.length} rows, dimension=${dim})`);
    return;
  }
  if (cmd === 'inspect') {
    const url = a1; const site = a2 || DEFAULT_SITE;
    if (!url) { console.error('usage: inspect <pageUrl> [siteUrl]'); process.exit(1); }
    const r = await api(token, 'POST', 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', { inspectionUrl: url, siteUrl: site });
    const idx = r.json && r.json.inspectionResult && r.json.inspectionResult.indexStatusResult;
    if (idx) console.log(JSON.stringify({ verdict: idx.verdict, coverageState: idx.coverageState, robotsTxtState: idx.robotsTxtState, indexingState: idx.indexingState, googleCanonical: idx.googleCanonical, userCanonical: idx.userCanonical, lastCrawlTime: idx.lastCrawlTime }, null, 2));
    else console.log(JSON.stringify(r.json, null, 2));
    return;
  }
  if (cmd === 'submit') {
    const site = a1 || DEFAULT_SITE; const sm = a2 || 'https://ic-distributor.com/sitemap.xml';
    const r = await api(token, 'PUT', `https://searchconsole.googleapis.com/webmasters/v3/sites/${S(site)}/sitemaps/${S(sm)}`);
    console.log('submit status:', r.status, r.ok ? 'OK' : JSON.stringify(r.json));
    return;
  }
  console.log('Commands: sites | sitemaps | queries | opportunities | inspect | submit');
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
