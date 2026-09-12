// JSON-LD Schema Generator
// Usage: node scripts/add-jsonld-schema.js [brand]
// Generates schema.json in brand's data directory
// Read by the template engine during HTML generation (Step 4.3 Entity Optimization)

const fs = require('fs');
const path = require('path');
const DATA_DIR = path.join(__dirname, '..', 'data');

const brand = process.argv[2];
if (!brand) { console.error('Usage: node scripts/add-jsonld-schema.js [brand|--all]'); process.exit(1); }

if (brand === '--all') {
  const { execSync } = require('child_process');
  const brands = fs.readdirSync(DATA_DIR).filter(d => fs.statSync(path.join(DATA_DIR, d)).isDirectory() && !d.startsWith('.') && d !== '_testdata');
  let ok = 0, fail = 0;
  for (const b of brands) {
    try { execSync(`node "${__filename}" "${b}"`, { stdio: 'pipe' }); ok++; } catch { fail++; }
  }
  console.log(`\nDone. Generated schema for ${ok}/${brands.length} brands (${fail} failed).`);
  process.exit(0);
}

const brandDir = path.join(DATA_DIR, brand);
if (!fs.existsSync(brandDir)) { console.error(`Brand ${brand} not found`); process.exit(1); }

function readJSON(file) {
  const p = path.join(brandDir, file);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf-8')) : null;
}

const b = readJSON('brand.json');
const products = readJSON('products.json');
const solutions = readJSON('solutions.json');
const support = readJSON('support.json');

if (!b) { console.error(`${brand}/brand.json not found`); process.exit(1); }

const site = 'https://ic-distributor.com';
const url = `${site}/${brand}/`;

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${url}#organization`,
  name: b.displayName || b.name,
  alternateName: b.ChineseName,
  description: (b.seoDescription || b.description || '').slice(0, 200),
  url,
  logo: b.logo ? `${site}/assets/images/brands/${b.logo}` : undefined,
  foundingDate: b.foundedYear ? String(b.foundedYear) : undefined,
  address: b.headquarters ? { '@type': 'PostalAddress', addressLocality: b.headquarters } : undefined,
  knowsAbout: b.coreProducts,
};

function extractItems(data, categoryKey, itemKey) {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (data.categories) return data.categories.flatMap(c => c[itemKey] || c[categoryKey] || []);
  if (data[categoryKey]) return data[categoryKey];
  if (data[itemKey]) return data[itemKey];
  return [];
}
const productList = extractItems(products, 'products', 'products');
const productSchemas = productList.slice(0, 10).map(p => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${url}products/#${p.mpn || p.name}`,
  name: p.name || p.mpn,
  description: (p.seo?.seoDescription || p.description || '').slice(0, 200),
  mpn: p.mpn,
  brand: { '@type': 'Brand', name: b.displayName || b.name },
  offers: {
    '@type': 'Offer',
    url: `${url}products/`,
    availability: 'https://schema.org/InStock',
    seller: { '@id': `${url}#organization` },
  },
}));

const solutionList = extractItems(solutions, 'solutions', 'solutions');
const solutionSchemas = solutionList.slice(0, 5).map(s => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  '@id': `${url}solutions/#${encodeURIComponent(s.title || '').slice(0, 40)}`,
  headline: s.title,
  description: (s.seo?.seoDescription || s.description || '').slice(0, 200),
  author: { '@type': 'Organization', name: b.displayName || b.name },
}));

const supportList = extractItems(support, 'support', 'articles');
const supportSchemas = supportList.slice(0, 5).map(s => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${url}support/#${encodeURIComponent(s.title || '').slice(0, 40)}`,
  headline: s.title,
  description: (s.seo?.seoDescription || '').slice(0, 200),
  author: { '@type': 'Organization', name: b.displayName || b.name },
}));

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site },
    { '@type': 'ListItem', position: 2, name: b.displayName || b.name, item: url },
  ],
};

const allSchema = [orgSchema, breadcrumbSchema, ...productSchemas, ...solutionSchemas, ...supportSchemas];

const output = JSON.stringify(allSchema, null, 2);
fs.writeFileSync(path.join(brandDir, 'schema.json'), output);
console.log(`Generated schema.json for ${brand} (${allSchema.length} items)`);
console.log(`  Organization: 1`);
console.log(`  BreadcrumbList: 1`);
console.log(`  Products: ${productSchemas.length}`);
console.log(`  Solutions: ${solutionSchemas.length}`);
console.log(`  Support: ${supportSchemas.length}`);
