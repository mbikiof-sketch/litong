// SEO Readiness Report Generator
// Usage: node scripts/seo-readiness-report.js
// Scans all outputs and ranks SEO element presence

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const brands = fs.readdirSync(OUTPUT_DIR).filter(d => fs.statSync(path.join(OUTPUT_DIR, d)).isDirectory() && !d.startsWith('_'));

const reports = [];

for (const brand of brands) {
  const dir = path.join(OUTPUT_DIR, brand);
  const index = path.join(dir, 'index.html');
  if (!fs.existsSync(index)) continue;

  const html = fs.readFileSync(index, 'utf-8');
  const lc = html.toLowerCase();

  const checks = {
    brand,
    hasTitle: lc.includes('<title>'),
    hasMetaDesc: lc.includes('meta name="description"') || lc.includes("meta name='description'"),
    hasCanonical: lc.includes('canonical'),
    hasOgTitle: lc.includes('og:title'),
    hasOgDesc: lc.includes('og:description'),
    hasSchema: lc.includes('application/ld+json') || lc.includes('json-ld'),
    hasBreadcrumb: lc.includes('breadcrumb'),
    hasH1: lc.includes('<h1'),
    hasNav: lc.includes('</nav>'),
    hasFooter: lc.includes('</footer>'),
    hasProducts: fs.existsSync(path.join(dir, 'products', 'index.html')),
    hasSolutions: fs.existsSync(path.join(dir, 'solutions', 'index.html')),
    hasSupport: fs.existsSync(path.join(dir, 'support', 'index.html')),
    hasNews: fs.existsSync(path.join(dir, 'news', 'index.html')),
  };

  const score = Object.values(checks).filter(v => v === true).length;
  reports.push({ ...checks, score, total: Object.keys(checks).length - 1 }); // -1 for 'brand'
}

reports.sort((a, b) => a.score - b.score);

console.log('\n==================================================');
console.log('  SEO Readiness Report — All Brands');
console.log('==================================================\n');
console.log(`  Total brands: ${reports.length}\n`);

// Grades
const grades = { A: [], B: [], C: [], D: [], F: [] };
for (const r of reports) {
  const pct = r.score / r.total;
  if (pct >= 0.9) grades.A.push(r.brand);
  else if (pct >= 0.7) grades.B.push(r.brand);
  else if (pct >= 0.5) grades.C.push(r.brand);
  else if (pct >= 0.3) grades.D.push(r.brand);
  else grades.F.push(r.brand);
}

console.log(`  A (90%+): ${grades.A.length}`);
console.log(`  B (70-89%): ${grades.B.length}`);
console.log(`  C (50-69%): ${grades.C.length}`);
console.log(`  D (30-49%): ${grades.D.length}`);
console.log(`  F (<30%): ${grades.F.length}`);

if (grades.F.length > 0) {
  console.log(`\n  ⚠️  Brands needing immediate attention (F):`);
  for (const b of grades.F) console.log(`    - ${b}`);
}

console.log(`\n  Bottom 10:`);
reports.slice(0, 10).forEach(r => {
  const pct = Math.round(r.score / r.total * 100);
  const missing = [];
  if (!r.hasTitle) missing.push('title');
  if (!r.hasMetaDesc) missing.push('meta');
  if (!r.hasCanonical) missing.push('canonical');
  if (!r.hasSchema) missing.push('schema');
  if (!r.hasProducts) missing.push('products');
  console.log(`    ${r.brand}: ${r.score}/${r.total} (${pct}%) — missing: ${missing.join(', ')}`);
});

fs.writeFileSync(path.join(__dirname, '..', 'seo-readiness-report.json'), JSON.stringify({ generated: new Date().toISOString(), total: reports.length, grades: { A: grades.A.length, B: grades.B.length, C: grades.C.length, D: grades.D.length, F: grades.F.length }, bottom10: reports.slice(0, 10).map(r => ({ brand: r.brand, score: r.score, total: r.total })) }, null, 2));
console.log('\nReport saved to: seo-readiness-report.json\n');
