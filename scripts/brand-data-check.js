// Brand Data Completeness Checker
// Usage: node scripts/brand-data-check.js [--json]
// Scans all brands and reports SEO field completeness

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const REQUIRED = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];
const SEO_FIELDS = ['seoTitle', 'seoDescription', 'seoKeywords'];

const brands = fs.readdirSync(DATA_DIR).filter(d => {
  const p = path.join(DATA_DIR, d);
  return fs.statSync(p).isDirectory() && !d.startsWith('.');
}).sort();

const results = [];

for (const brand of brands) {
  const dir = path.join(DATA_DIR, brand);
  const filesPresent = REQUIRED.filter(f => fs.existsSync(path.join(dir, f)));
  const missingFiles = REQUIRED.filter(f => !fs.existsSync(path.join(dir, f)));

  let seoIssues = [];
  let productCount = 0;
  let hasFaq = false;

  const brandJsonPath = path.join(dir, 'brand.json');
  if (fs.existsSync(brandJsonPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(brandJsonPath, 'utf-8'));
      for (const f of SEO_FIELDS) {
        if (!data[f]) seoIssues.push(`brand.json missing ${f}`);
      }
    } catch { seoIssues.push('brand.json invalid JSON'); }
  }

  const productsPath = path.join(dir, 'products.json');
  if (fs.existsSync(productsPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
      const products = Array.isArray(data) ? data : (data.products || []);
      productCount = products.length;
      hasFaq = products.some(p => p.faqs && p.faqs.length > 0);
      for (const p of products) {
        if (p.seo) {
          if (!p.seo.seoTitle) seoIssues.push(`product ${p.name || p.mpn} missing seoTitle`);
          if (!p.seo.seoDescription) seoIssues.push(`product ${p.name || p.mpn} missing seoDescription`);
        }
      }
    } catch { seoIssues.push('products.json invalid JSON'); }
  }

  results.push({
    brand, filesPresent: filesPresent.length, missingFiles, productCount, hasFaq,
    seoIssues: seoIssues.length > 0 ? seoIssues : null,
    score: seoIssues.length === 0 && filesPresent.length === 5 ? '✅' : '⚠️',
  });
}

const fullScore = results.filter(r => r.score === '✅').length;
const issues = results.filter(r => r.score !== '✅');

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ total: brands.length, fullScore, issues: issues.length, brands: results }, null, 2));
} else {
  console.log(`\n  Brand Data Completeness: ${fullScore}/${brands.length} (${Math.round(fullScore/brands.length*100)}%)`);
  console.log(`  Issues found: ${issues.length} brands\n`);
  for (const r of issues) {
    console.log(`  ${r.score} ${r.brand} (${r.filesPresent}/5 files, ${r.productCount} products)`);
    if (r.missingFiles.length > 0) console.log(`     Missing files: ${r.missingFiles.join(', ')}`);
    if (r.seoIssues) console.log(`     SEO issues: ${r.seoIssues.length}`);
  }
  console.log(`\n  Full compliance: ${fullScore}/${brands.length}\n`);
}
