#!/usr/bin/env node
/**
 * gsc.js — Google Search Console tooling (dependency-free, service-account auth).
 *
 * Auth: a service-account JSON key. Path via env GSC_SA or default
 *       ./.gsc-service-account.json  (gitignored).
 *       The service-account email MUST be added as a user in GSC.
 *
 * Setup (one-time):
 *   1. Google Cloud → enable "Search Console API"
 *   2. Create Service Account → Keys → Add key (JSON) → download
 *   3. Copy the service-account email and add it in
 *      GSC → Settings → Users and permissions (permission: Full)
 *   4. Save the JSON as .gsc-service-account.json in the repo root
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

const ROOT = path.join(__dirname, '..');
const SA_PATH = process.env.GSC_SA || path.join(ROOT, '.gsc-service-account.json');
const DEFAULT_SITE = process.env.GSC_SITE || 'sc-domain:ic-distributor.com';
const SCOPE = 'https://www.googleapis.com/auth/webmasters';

function b64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function getAccessToken() {
  if (!fs.existsSync(SA_PATH)) {
    throw new Error(`Service-account JSON not found at ${SA_PATH}. Set GSC_SA or place it there.`);
  }
  const sa = JSON.parse(fs.readFileSync(SA_PATH, 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: SCOPE,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  }));
  const signingInput = `${header}.${claim}`;
  const signature = b64url(crypto.createSign('RSA-SHA256').update(signingInput).sign(sa.private_key));
  const jwt = `${signingInput}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });
  const json = await res.json();
  if (!json.access_token) throw new Error('Token error: ' + JSON.stringify(json));
  return json.access_token;
}

async function api(token, method, url, body) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch (e) { json = text; }
  return { ok: res.ok, status: res.status, json };
}

const S = s => encodeURIComponent(s);

async function main() {
  const [cmd, a1, a2] = process.argv.slice(2);
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
  if (cmd === 'queries' || cmd === 'opportunities') {
    const site = a1 || DEFAULT_SITE;
    const days = parseInt(a2 || '28', 10);
    const end = new Date(); const start = new Date(Date.now() - days * 864e5);
    const fmt = d => d.toISOString().slice(0, 10);
    const body = { startDate: fmt(start), endDate: fmt(end), dimensions: ['query'], rowLimit: 500 };
    const r = await api(token, 'POST', `https://searchconsole.googleapis.com/webmasters/v3/sites/${S(site)}/searchanalytics/query`, body);
    if (!r.ok) { console.log(JSON.stringify(r.json, null, 2)); return; }
    let rows = (r.json.rows || []).map(x => ({ query: x.keys[0], clicks: x.clicks, impressions: x.impressions, ctr: x.ctr, position: x.position }));
    if (cmd === 'opportunities') {
      rows = rows.filter(x => x.impressions >= 1 && x.position > 5 && x.position <= 50)
                 .sort((a, b) => b.impressions - a.impressions);
      console.log('Winnable queries (has impressions, ranking 6-50) — optimize these next:\n');
    }
    console.log(['query', 'clicks', 'impr', 'ctr', 'pos'].join('\t'));
    rows.slice(0, 100).forEach(x => console.log([x.query, x.clicks, x.impressions, (x.ctr * 100).toFixed(1) + '%', x.position.toFixed(1)].join('\t')));
    console.log(`\n(${rows.length} rows)`);
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
