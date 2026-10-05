#!/usr/bin/env node
/**
 * generate-redirect-map.js — build the legacy-URL -> canonical 301 map used by
 * functions/_middleware.js on Cloudflare Pages.
 *
 * Entries:
 *   - old flat product URL   /{brand}/products/{slug}    -> /{brand}/products/{category}/{slug}
 *   - removed empty article  /{brand}/support/{articleId} -> /{brand}/support/
 *
 * Pattern-covered cases (dot-html, index-dot-html, brands-prefix) are handled
 * directly in the middleware and are NOT in this map.
 */
const fs = require('fs');
const path = require('path');
const { isEmptySupportArticle } = require('./content-quality');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const OUT_FILE = path.join(ROOT, 'functions', '_redirect-map.json');

function normSlug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function main() {
  const map = {};
  const brands = fs.readdirSync(DATA_DIR).filter(b => {
    try { return fs.statSync(path.join(DATA_DIR, b)).isDirectory(); } catch (e) { return false; }
  }).filter(b => !b.startsWith('.') && !b.startsWith('_'));

  let productRules = 0, articleRules = 0;

  for (const brand of brands) {
    const dir = path.join(DATA_DIR, brand);
    // flat product -> category product
    const pp = path.join(dir, 'products.json');
    if (fs.existsSync(pp)) {
      let d; try { d = JSON.parse(fs.readFileSync(pp, 'utf8')); } catch (e) { d = null; }
      const cats = (d && d.categories) || [];
      const catIds = new Set(cats.map(c => c.id || normSlug(c.slug || c.name || '')));
      for (const c of cats) {
        const catId = c.id || normSlug(c.slug || c.name || '');
        for (const p of (c.products || [])) {
          const slug = p.slug ? normSlug(p.slug) : normSlug(p.partNumber || '');
          if (!slug) continue;
          if (catIds.has(slug)) continue; // avoid shadowing a category URL
          const from = `/${brand}/products/${slug}`;
          const to = `/${brand}/products/${catId}/${slug}`;
          if (from !== to) { map[from] = to; productRules++; }
        }
      }
    }
    // removed empty support article -> support index
    const sp = path.join(dir, 'support.json');
    if (fs.existsSync(sp)) {
      let d; try { d = JSON.parse(fs.readFileSync(sp, 'utf8')); } catch (e) { d = null; }
      const arts = (d && Array.isArray(d.articles)) ? d.articles
        : (d && d.support && Array.isArray(d.support.articles) ? d.support.articles : []);
      for (const a of arts) {
        if (a && a.id && isEmptySupportArticle(a)) {
          map[`/${brand}/support/${a.id}`] = `/${brand}/support/`;
          articleRules++;
        }
      }
    }
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(map, null, 0), 'utf8');
  console.log(`[generate-redirect-map] wrote ${Object.keys(map).length} rules ` +
    `(${productRules} product, ${articleRules} removed-article) -> ${path.relative(ROOT, OUT_FILE)}`);
}

module.exports = { main };

if (require.main === module) main();
