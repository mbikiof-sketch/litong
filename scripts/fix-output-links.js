#!/usr/bin/env node
/**
 * fix-output-links.js — build-time internal link normalizer / neutralizer.
 *
 * Runs AFTER pages are generated + components inlined. Walks every generated
 * HTML file and repairs internal anchors so Google Search Console sees no
 * "Page with redirect" or "Not found (404)" for on-site links.
 *
 * Rules (Cloudflare Pages resolution):
 *   - OK ............................... leave as-is
 *   - "/x.html" where /x resolves ....... rewrite to /x (removes 308 redirect)
 *   - broken internal href .............. drop the href attribute (no 404, markup kept)
 *   - broken internal src (assets) ...... drop the src attribute
 *
 * Usage: node scripts/fix-output-links.js [outputDir]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
let OUT = path.join(ROOT, 'output');
let existsCache = new Map();

function reset(outDir) {
  OUT = outDir ? path.resolve(outDir) : path.join(ROOT, 'output');
  existsCache = new Map();
}
function exists(p) {
  if (!existsCache.has(p)) existsCache.set(p, fs.existsSync(p));
  return existsCache.get(p);
}
function toFs(p) {
  return path.join(OUT, p.replace(/^\//, '').replace(/\//g, path.sep));
}
// Only these extensions mark a real static asset. Product slugs may contain
// dots (e.g. "snubber-0.47uf-1200v") and must NOT be treated as assets.
const ASSET_RE = /\.(?:css|js|mjs|json|xml|txt|svg|png|jpe?g|gif|webp|avif|ico|pdf|woff2?|ttf|otf|eot|mp4|webm|mp3|zip|gz|docx?|xlsx?|pptx?)$/i;
function classify(raw) {
  if (typeof raw !== 'string' || raw === '' || raw === '#') return 'EXTERNAL';
  if (/^(mailto:|tel:|javascript:|data:)/i.test(raw)) return 'EXTERNAL';
  if (!raw.startsWith('/') || raw.startsWith('//')) return 'EXTERNAL';
  const p = raw.split('?')[0].split('#')[0];
  if (p === '' || p === '/') return 'HTTP_OK';
  if (/\.html$/i.test(p)) return exists(toFs(p)) ? 'REDIRECT_TARGET' : 'BROKEN';
  if (ASSET_RE.test(p)) return exists(toFs(p)) ? 'ASSET' : 'BROKEN';
  if (p.endsWith('/')) {
    if (exists(path.join(toFs(p), 'index.html'))) return 'HTTP_OK';
    if (exists(toFs(p.slice(0, -1)) + '.html')) return 'REDIRECT_TARGET';
    return 'BROKEN';
  }
  if (exists(toFs(p) + '.html')) return 'HTTP_OK';
  if (exists(path.join(toFs(p), 'index.html'))) return 'HTTP_OK';
  return 'BROKEN';
}
function rewrite(target) {
  const cls = classify(target);
  if (cls === 'EXTERNAL' || cls === 'HTTP_OK' || cls === 'ASSET') return { value: target, changed: false, dropped: false };
  const p = target.split('?')[0].split('#')[0];
  if (cls === 'REDIRECT_TARGET') {
    const nv = /\.html$/i.test(p) ? p.slice(0, -5) : p.replace(/\/$/, '');
    return { value: nv, changed: true, dropped: false };
  }
  return { value: null, changed: true, dropped: true };
}

const stats = { files: 0, rewritten: 0, droppedHref: 0, droppedSrc: 0, srcBrokenExamples: new Set() };

function processFile(file) {
  let html;
  try { html = fs.readFileSync(file, 'utf8'); } catch (e) { return; }
  let changed = false;

  html = html.replace(/(\shref=")([^"]*)(")/g, (m, pre, val, post) => {
    if (/^(mailto:|tel:|javascript:|data:|#)/i.test(val)) return m;
    if (/^https?:\/\//i.test(val)) return m;
    if (val === '') { changed = true; stats.droppedHref++; return ''; } // empty href -> inert
    const r = rewrite(val);
    if (!r.changed) return m;
    changed = true;
    if (r.dropped) {
      const p = val.split('?')[0].split('#')[0];
      // Keep document buttons functional: point missing datasheets/downloads to contact.
      if (/\.pdf$/i.test(p) || /^\/(datasheets|downloads)\//i.test(p)) {
        stats.droppedHref++;
        return pre + '/about/contact/' + post;
      }
      stats.droppedHref++;
      return '';
    }
    stats.rewritten++;
    return pre + r.value + post;
  });

  html = html.replace(/(\ssrc=")([^"]*)(")/g, (m, pre, val, post) => {
    if (!val.startsWith('/') || val.startsWith('//')) return m;
    if (classify(val) === 'BROKEN') {
      changed = true;
      stats.droppedSrc++;
      if (stats.srcBrokenExamples.size < 20) stats.srcBrokenExamples.add(val);
      return '';
    }
    return m;
  });

  if (changed) { fs.writeFileSync(file, html, 'utf8'); stats.files++; }
}

function walk(dir) {
  let items; try { items = fs.readdirSync(dir); } catch (e) { return; }
  for (const item of items) {
    const full = path.join(dir, item);
    let st; try { st = fs.statSync(full); } catch (e) { continue; }
    if (st.isDirectory()) { walk(full); continue; }
    if (item.endsWith('.html')) processFile(full);
  }
}

function run(outputDir) {
  reset(outputDir);
  stats.files = 0; stats.rewritten = 0; stats.droppedHref = 0; stats.droppedSrc = 0; stats.srcBrokenExamples = new Set();
  if (!fs.existsSync(OUT)) { console.error('[fix-output-links] output dir not found: ' + OUT); return; }
  walk(OUT);
  console.log(`[fix-output-links] files changed: ${stats.files}`);
  console.log(`[fix-output-links] href normalized (.html -> clean): ${stats.rewritten}`);
  console.log(`[fix-output-links] broken href attributes dropped: ${stats.droppedHref}`);
  console.log(`[fix-output-links] broken src attributes dropped: ${stats.droppedSrc}`);
  if (stats.srcBrokenExamples.size) {
    console.log('[fix-output-links] broken src examples:');
    [...stats.srcBrokenExamples].forEach(s => console.log('   ' + s));
  }
}

module.exports = { run };

if (require.main === module) {
  run(process.argv[2]);
}
