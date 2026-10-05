#!/usr/bin/env node
/**
 * Fix internal links in data/*.json so they match the canonical output URLs.
 *
 * Problems solved (from Google Search Console "Page indexing" report):
 *   1. "/{brand}/products/{slug}.html"          -> 404 (missing category segment)
 *   2. "/{brand}/products/{category}/{slug}.html" -> 308 redirect (.html stripped by Cloudflare)
 *   3. "/{brand}/{solutions|support|news}/{slug}.html" -> 308 redirect
 *
 * Canonical rules (see scripts/sitemap-lib.js):
 *   - product detail : /{brand}/products/{category}/{slug}   (no .html)
 *   - other leaf page: /{brand}/{section}/{slug}             (no .html)
 *   - directory page : /{brand}/{section}/
 *
 * Usage:
 *   node scripts/fix-internal-links.js            # dry run (report only)
 *   node scripts/fix-internal-links.js --apply    # write changes
 *   node scripts/fix-internal-links.js --brand aishi
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const APPLY = process.argv.includes('--apply');
const BRAND_FILTER = (() => {
  const i = process.argv.indexOf('--brand');
  return i !== -1 ? process.argv[i + 1] : null;
})();

function normSlug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// ---------------------------------------------------------------------------
// 1. Build product index: "{brand}/{slug}" -> category id
// ---------------------------------------------------------------------------
function buildProductIndex() {
  const index = new Map();       // "brand/slug" -> Set(categoryId)
  const catIndex = new Set();    // "brand/categoryId"
  const allBrands = fs.readdirSync(DATA_DIR).filter(b => {
    try { return fs.statSync(path.join(DATA_DIR, b)).isDirectory(); } catch (e) { return false; }
  }).filter(b => !b.startsWith('.') && !b.startsWith('_'));

  for (const brand of allBrands) {
    const productsPath = path.join(DATA_DIR, brand, 'products.json');
    if (!fs.existsSync(productsPath)) continue;
    let data;
    try { data = JSON.parse(fs.readFileSync(productsPath, 'utf8')); } catch (e) { continue; }
    const categories = (data && data.categories) || [];
    for (const cat of categories) {
      const catId = cat.id || normSlug(cat.slug || cat.name || '');
      if (catId) catIndex.add(brand.toLowerCase() + '/' + catId);
      const products = cat.products || [];
      for (const p of products) {
        const slug = p.slug ? normSlug(p.slug) : normSlug(p.partNumber || '');
        if (!slug) continue;
        const key = brand.toLowerCase() + '/' + slug;
        if (!index.has(key)) index.set(key, new Set());
        index.get(key).add(catId);
      }
    }
  }
  return { index, catIndex };
}

// ---------------------------------------------------------------------------
// 2. URL fixer
// ---------------------------------------------------------------------------
function makeFixer(index, catIndex, stats) {
  return function fixUrl(url) {
    if (typeof url !== 'string') return url;
    if (!url.startsWith('/') || url.startsWith('//')) return url;

    // split off query / fragment
    const m = url.match(/^([^?#]*)([?#].*)?$/);
    let p = m[1];
    const suffix = m[2] || '';
    const hadHtml = /\.html$/.test(p);
    if (/\.html$/.test(p)) p = p.slice(0, -5);

    // product path repair: /{brand}/products/{...}
    const pm = p.match(/^\/([a-z0-9-]+)\/products\/(.+)$/);
    if (pm) {
      const brand = pm[1];
      const rest = pm[2].replace(/\/+$/, '');
      const parts = rest.split('/').filter(Boolean);
      if (parts.length === 1) {
        const slug = parts[0];
        // old flat category URL: /{brand}/products/{category}.html -> /{brand}/products/{category}/
        if (catIndex.has(brand.toLowerCase() + '/' + slug)) {
          stats.fixedHtml++;
          return `/${brand}/products/${slug}/` + suffix;
        }
        const key = brand.toLowerCase() + '/' + slug;
        const cats = index.get(key);
        if (cats && cats.size === 1) {
          const cat = [...cats][0];
          stats.fixedNoCat++;
          p = `/${brand}/products/${cat}/${slug}`;
        } else if (cats && cats.size > 1) {
          stats.ambiguous++;
          stats.ambiguousEx.push(url + ' -> [' + [...cats].join(', ') + ']');
          stats.unresolved++;
          stats.unresolvedEx.push(url + ' (ambiguous category)');
          return `/${brand}/products/` + suffix;
        } else {
          stats.unresolved++;
          if (stats.unresolvedEx.length < 40) stats.unresolvedEx.push(url);
          return `/${brand}/products/` + suffix;
        }
      } else {
        if (hadHtml) stats.fixedHtml++;
        p = `/${brand}/products/${parts.join('/')}`;
      }
      return p + suffix;
    }

    if (hadHtml) {
      stats.fixedHtml++;
      return p + suffix;
    }
    return url;
  };
}

// ---------------------------------------------------------------------------
// 3. Walk JSON files and rewrite string values
// ---------------------------------------------------------------------------
function transformValue(value, fixUrl) {
  if (typeof value === 'string') return fixUrl(value);
  if (Array.isArray(value)) return value.map(v => transformValue(v, fixUrl));
  if (value && typeof value === 'object') {
    const out = {};
    for (const k of Object.keys(value)) out[k] = transformValue(value[k], fixUrl);
    return out;
  }
  return value;
}

function main() {
  const index = buildProductIndex();
  console.log(`Product index entries: ${index.index.size}, categories: ${index.catIndex.size}`);
  console.log(`Mode: ${APPLY ? 'APPLY' : 'DRY RUN'}${BRAND_FILTER ? ' (brand: ' + BRAND_FILTER + ')' : ''}\n`);

  const stats = { fixedNoCat: 0, fixedHtml: 0, unresolved: 0, ambiguous: 0, filesChanged: 0, unresolvedEx: [], ambiguousEx: [] };
  const fixUrl = makeFixer(index.index, index.catIndex, stats);

  const brands = fs.readdirSync(DATA_DIR).filter(b => {
    try { return fs.statSync(path.join(DATA_DIR, b)).isDirectory(); } catch (e) { return false; }
  }).filter(b => !b.startsWith('.') && !b.startsWith('_'));

  for (const brand of brands) {
    if (BRAND_FILTER && brand !== BRAND_FILTER) continue;
    const dir = path.join(DATA_DIR, brand);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      const full = path.join(dir, f);
      let raw, parsed;
      try { raw = fs.readFileSync(full, 'utf8'); parsed = JSON.parse(raw); } catch (e) {
        console.log(`  ! skip (invalid JSON): ${brand}/${f}`);
        continue;
      }
      const before = stats.fixedNoCat + stats.fixedHtml;
      const transformed = transformValue(parsed, fixUrl);
      const after = stats.fixedNoCat + stats.fixedHtml;
      if (after > before) {
        stats.filesChanged++;
        if (APPLY) {
          fs.writeFileSync(full, JSON.stringify(transformed, null, 2) + '\n', 'utf8');
        }
        console.log(`  ${APPLY ? 'wrote' : 'would fix'}: ${brand}/${f} (+${after - before})`);
      }
    }
  }

  console.log('\n=== Summary ===');
  console.log(`Fixed (missing category -> canonical): ${stats.fixedNoCat}`);
  console.log(`Fixed (.html stripped):                ${stats.fixedHtml}`);
  console.log(`Files changed:                         ${stats.filesChanged}`);
  console.log(`Ambiguous slug (multiple categories):  ${stats.ambiguous}`);
  console.log(`Unresolved (target not found):         ${stats.unresolved}`);
  if (stats.ambiguousEx.length) {
    console.log('\n--- ambiguous examples ---');
    stats.ambiguousEx.slice(0, 20).forEach(e => console.log('  ' + e));
  }
  if (stats.unresolvedEx.length) {
    console.log('\n--- unresolved examples ---');
    stats.unresolvedEx.slice(0, 30).forEach(e => console.log('  ' + e));
  }
  if (!APPLY) console.log('\n(dry run — re-run with --apply to write changes)');
}

main();
