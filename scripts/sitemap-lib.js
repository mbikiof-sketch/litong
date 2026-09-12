const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://ic-distributor.com';

function shouldSkip(item) {
  return item.startsWith('_') || item.startsWith('.');
}

function getPagePriority(rel) {
  if (rel === 'index.html') return { priority: '1.0', changefreq: 'daily' };
  if (rel === 'brands/index.html') return { priority: '0.9', changefreq: 'weekly' };
  if (rel.split('/').length === 2 && rel.endsWith('/index.html')) return { priority: '0.8', changefreq: 'weekly' };
  if (/\/(products|solutions|support|news)\/index\.html$/.test(rel)) return { priority: '0.7', changefreq: 'weekly' };
  if (rel.startsWith('about/')) return { priority: '0.6', changefreq: 'monthly' };
  if (/\/(products|solutions)\//.test(rel)) return { priority: '0.6', changefreq: 'monthly' };
  if (/\/support\//.test(rel)) return { priority: '0.5', changefreq: 'monthly' };
  if (rel.startsWith('news/')) return { priority: '0.5', changefreq: 'weekly' };
  return { priority: '0.5', changefreq: 'monthly' };
}

function formatDate(d) {
  const date = new Date(d);
  return isNaN(date.getTime()) ? new Date().toISOString().split('T')[0] : date.toISOString().split('T')[0];
}

// Canonical URL rules (must match the rel="canonical" emitted in each page):
//  - directory index page  -> /path/          (trailing slash)
//  - leaf .html page       -> /path/name      (no .html, no trailing slash)
//  - stub .html that has a sibling directory of the same name is a duplicate -> skipped
//  - 404.html and underscore/dot entries are skipped
function collectUrls(rootDir) {
  const urls = [];
  const seen = new Set();

  function walk(dir, relBase) {
    let items;
    try { items = fs.readdirSync(dir); } catch (e) { return; }
    for (const item of items) {
      if (shouldSkip(item)) continue;
      const full = path.join(dir, item);
      const rel = relBase ? `${relBase}/${item}` : item;
      let stat;
      try { stat = fs.statSync(full); } catch (e) { continue; }
      if (stat.isDirectory()) {
        walk(full, rel);
        continue;
      }
      if (!item.endsWith('.html')) continue;
      if (item === '404.html') continue;
      if (/^google[0-9a-f]+\.html$/i.test(item)) continue; // Google site-verification file

      let loc;
      if (item === 'index.html') {
        loc = relBase ? `/${relBase}/` : '/';
      } else {
        const base = item.slice(0, -'.html'.length);
        const sibling = path.join(dir, base);
        if (fs.existsSync(sibling) && fs.statSync(sibling).isDirectory()) continue;
        loc = `/${rel.replace(/\\/g, '/').replace(/\.html$/, '')}`;
      }

      if (seen.has(loc)) continue;
      seen.add(loc);
      const meta = getPagePriority(rel);
      urls.push({ loc, priority: meta.priority, changefreq: meta.changefreq, lastmod: formatDate(stat.mtime) });
    }
  }

  walk(rootDir, '');
  urls.sort((a, b) => {
    if (a.loc === '/') return -1;
    if (b.loc === '/') return 1;
    return a.loc.localeCompare(b.loc);
  });
  return urls;
}

function generateSitemapXml(rootDir, domain = DOMAIN) {
  const urls = collectUrls(rootDir);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${domain}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
  return { xml, urls };
}

module.exports = { DOMAIN, collectUrls, generateSitemapXml };
