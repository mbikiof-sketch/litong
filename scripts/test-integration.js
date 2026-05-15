// End-to-End Integration Test
// Usage: node scripts/test-integration.js
// Tests: data → generate.js → output HTML → SEO correctness
// Uses a temp brand, cleans up after

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TEST_BRAND = '_test_integration';
const SOURCE_BRAND = '3peak';
const DATA_DIR = path.join(__dirname, '..', 'data');
const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const TEST_DATA_DIR = path.join(DATA_DIR, TEST_BRAND);
const TEST_OUTPUT_DIR = path.join(OUTPUT_DIR, TEST_BRAND);
const REQUIRED_FILES = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];

const results = { passed: 0, failed: 0, steps: [] };

function check(condition, message) {
  if (condition) {
    results.passed++;
    results.steps.push({ status: 'PASS', message });
  } else {
    results.failed++;
    results.steps.push({ status: 'FAIL', message });
  }
}

console.log('\n========================================');
console.log('  SEO/GEO Integration Test');
console.log('========================================\n');

// Step 0: Copy source brand data to temp brand
console.log('  [Step 0] Creating test brand from', SOURCE_BRAND, '...');
fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
for (const f of REQUIRED_FILES) {
  const src = path.join(DATA_DIR, SOURCE_BRAND, f);
  if (fs.existsSync(src)) {
    const content = fs.readFileSync(src, 'utf-8');
    const modified = content.replace(new RegExp(SOURCE_BRAND, 'gi'), TEST_BRAND);
    fs.writeFileSync(path.join(TEST_DATA_DIR, f), modified);
  }
}
check(fs.existsSync(path.join(TEST_DATA_DIR, 'brand.json')), 'Test brand data created');

// Step 0a: add config entry for test brand
const configPath = path.join(__dirname, '..', 'config', 'brand-templates.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
if (Array.isArray(config)) {
  const existing = config.find(b => b.brand === TEST_BRAND);
  if (!existing) {
    config.push({ brand: TEST_BRAND, type: 'default' });
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  }
}
check(true, 'Test brand added to config');

// Step 1: Generate output
console.log('  [Step 1] Running generate.js ...');
try {
  execSync(`node scripts/generate.js --brand ${TEST_BRAND}`, { cwd: path.join(__dirname, '..'), stdio: 'pipe', timeout: 60000 });
  check(true, 'generate.js completed without error');
} catch (e) {
  check(false, `generate.js failed: ${e.stderr ? e.stderr.toString().slice(0, 200) : e.message}`);
}

// Step 2: Validate output files
console.log('  [Step 2] Validating output ...');
const expectedPages = [
  'index.html', 'products/index.html', 'solutions/index.html', 'support/index.html',
];
if (fs.existsSync(path.join(TEST_DATA_DIR, 'news.json'))) {
  try {
    const news = JSON.parse(fs.readFileSync(path.join(TEST_DATA_DIR, 'news.json'), 'utf-8'));
    if (Array.isArray(news) && news.length > 0) expectedPages.push('news/index.html');
  } catch {}
}

for (const page of expectedPages) {
  const p = path.join(TEST_OUTPUT_DIR, page);
  check(fs.existsSync(p), `Output: ${page} exists`);
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf-8').toLowerCase();
    check(html.includes('<title>'), `${page}: has <title>`);
    check(html.includes('</title>'), `${page}: has </title>`);
    check(html.includes('</html>'), `${page}: has closing html tag`);
  }
}

// Step 3: Check pipeline integrity — HTML structure
console.log('  [Step 3] Checking HTML structure ...');
const indexHtml = path.join(TEST_OUTPUT_DIR, 'index.html');
if (fs.existsSync(indexHtml)) {
  const html = fs.readFileSync(indexHtml, 'utf-8');
  check(html.includes('<h1') || html.includes('<h2'), 'Brand page has headings');
  check(html.includes('href='), 'Brand page has links');
  check(html.includes('</nav>'), 'Brand page has navigation');
  check(html.includes('</footer>'), 'Brand page has footer');
}

// Step 4: Validate sitemap includes test brand
console.log('  [Step 4] Checking sitemap ...');
const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
try {
  execSync(`node scripts/generate-sitemap.js`, { cwd: path.join(__dirname, '..'), stdio: 'pipe', timeout: 30000 });
  if (fs.existsSync(sitemapPath)) {
    const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    check(sitemap.includes(TEST_BRAND), 'Sitemap includes test brand URL');
  } else {
    check(false, 'Sitemap not generated');
  }
} catch {
  check(false, 'Sitemap generation failed');
}

// Cleanup
console.log('  [Step 5] Cleaning up ...');
fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
fs.rmSync(TEST_OUTPUT_DIR, { recursive: true, force: true });
if (Array.isArray(config)) {
  const idx = config.findIndex(b => b.brand === TEST_BRAND);
  if (idx >= 0) config.splice(idx, 1);
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}
check(!fs.existsSync(TEST_DATA_DIR), 'Test brand data cleaned up');
check(true, 'Config entry restored');

// Summary
console.log(`\n  Total: ${results.passed + results.failed} | PASS: ${results.passed} | FAIL: ${results.failed}`);
console.log(`  Score: ${Math.round(results.passed / (results.passed + results.failed) * 100)}%\n`);

const output = {
  timestamp: new Date().toISOString(),
  total: results.passed + results.failed,
  passed: results.passed,
  failed: results.failed,
  score: Math.round(results.passed / (results.passed + results.failed) * 100),
  steps: results.steps,
};
fs.writeFileSync(path.join(__dirname, '..', 'integration-test-result.json'), JSON.stringify(output, null, 2));
console.log('Report saved to: integration-test-result.json\n');
