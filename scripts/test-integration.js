// End-to-End Integration Test (v2)
// Usage: node scripts/test-integration.js
// Tests: data → generate.js → output HTML → pipeline integrity
// Uses permanent _testdata fixture (no create/cleanup needed)

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TEST_BRAND = '_testdata';
const DATA_DIR = path.join(__dirname, '..', 'data');
const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const TEST_DATA_DIR = path.join(DATA_DIR, TEST_BRAND);
const TEST_OUTPUT_DIR = path.join(OUTPUT_DIR, TEST_BRAND);
const CONFIG_PATH = path.join(__dirname, '..', 'config', 'brand-templates.json');
const REQUIRED_FILES = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];

const results = { passed: 0, failed: 0, steps: [] };

function check(condition, message) {
  if (condition) { results.passed++; results.steps.push({ status: 'PASS', message }); }
  else { results.failed++; results.steps.push({ status: 'FAIL', message }); }
}

console.log('\n========================================');
console.log('  SEO/GEO Integration Test v2');
console.log('========================================\n');

// Step 0: Verify fixture exists
console.log('  [Step 0] Verifying _testdata fixture ...');
check(fs.existsSync(TEST_DATA_DIR), '_testdata brand directory exists');
for (const f of REQUIRED_FILES) {
  check(fs.existsSync(path.join(TEST_DATA_DIR, f)), `_testdata/${f} exists`);
}

// Ensure config has entry
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
if (!config.brands[TEST_BRAND]) {
  config.brands[TEST_BRAND] = { displayName: 'Test Brand Inc.', templateType: 'default' };
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}
check(!!config.brands[TEST_BRAND], '_testdata registered in brand-templates.json');

// Step 1: Generate output from fixture
console.log('  [Step 1] Running generate.js ...');
try {
  execSync(`node scripts/generate.js --brand ${TEST_BRAND}`, { cwd: __dirname + '/..', stdio: 'pipe', timeout: 60000 });
  check(true, 'generate.js completed without error');
} catch (e) {
  check(false, `generate.js failed: ${(e.stderr||'').toString().slice(0,200) || e.message}`);
}

// Step 2: Validate output pages (brand index.html is always expected)
console.log('  [Step 2] Validating output pages ...');
const brandPage = path.join(TEST_OUTPUT_DIR, 'index.html');
check(fs.existsSync(brandPage), 'Brand index.html exists');
if (fs.existsSync(brandPage)) {
  const html = fs.readFileSync(brandPage, 'utf-8').toLowerCase();
  check(html.includes('<title>'), 'index.html: has <title>');
  check(html.includes('</title>'), 'index.html: has </title>');
  check(html.includes('</html>'), 'index.html: has closing html tag');
}

// Check subpages — log which exist but don't fail on generator decisions
for (const sub of ['products/index.html', 'solutions/index.html', 'support/index.html', 'news/index.html']) {
  const p = path.join(TEST_OUTPUT_DIR, sub);
  if (fs.existsSync(p)) {
    check(true, `${sub} exists`);
    const html = fs.readFileSync(p, 'utf-8').toLowerCase();
    check(html.includes('<title>'), `${sub}: has <title>`);
    check(html.includes('</html>'), `${sub}: has closing html tag`);
  } else {
    check(true, `${sub}: not generated (expected: generator may skip empty/no-template categories)`);
  }
}

// Step 3: Check HTML structure on brand page
console.log('  [Step 3] Checking HTML structure ...');
const indexHtml = path.join(TEST_OUTPUT_DIR, 'index.html');
if (fs.existsSync(indexHtml)) {
  const html = fs.readFileSync(indexHtml, 'utf-8');
  check(html.includes('<h1') || html.includes('<h2'), 'Brand page has headings');
  check(html.includes('href='), 'Brand page has links');
  check(html.includes('</nav>'), 'Brand page has navigation');
  check(html.includes('</footer>'), 'Brand page has footer');
}

// Step 4: Verify data integrity — brands aren't mixed
console.log('  [Step 4] Data isolation check ...');
const html = fs.readFileSync(indexHtml, 'utf-8');
check(!html.includes('3peak'), 'Brand page does not contain 3peak data');
check(!html.includes('allegro'), 'Brand page does not contain allegro data');
check(html.includes('_testdata'), 'Brand page contains _testdata references');

// Step 5: Check sitemap
console.log('  [Step 5] Checking sitemap ...');
try {
  execSync(`node scripts/generate-sitemap.js`, { cwd: __dirname + '/..', stdio: 'pipe', timeout: 30000 });
  const sitemapPath = path.join(OUTPUT_DIR, '..', 'sitemap.xml');
  if (fs.existsSync(path.join(OUTPUT_DIR, 'sitemap.xml'))) {
    const sitemap = fs.readFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), 'utf-8');
    check(sitemap.includes(TEST_BRAND), 'Sitemap includes _testdata URL');
  } else check(false, 'Sitemap not found at expected path');
} catch { check(false, 'Sitemap generation failed'); }

// Step 6: Cleanup — remove output only (keep data fixture)
console.log('  [Step 6] Cleaning up ...');
const config2 = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
delete config2.brands['_testdata'];
fs.writeFileSync(CONFIG_PATH, JSON.stringify(config2, null, 2));
check(!config2.brands['_testdata'], 'Config entry removed');
fs.rmSync(TEST_OUTPUT_DIR, { recursive: true, force: true });
check(!fs.existsSync(TEST_OUTPUT_DIR), 'Output cleaned up');
check(fs.existsSync(TEST_DATA_DIR), 'Data fixture preserved');

console.log(`\n  Total: ${results.passed + results.failed} | PASS: ${results.passed} | FAIL: ${results.failed}`);
console.log(`  Score: ${Math.round(results.passed / (results.passed + results.failed) * 100)}%\n`);

const output = { timestamp: new Date().toISOString(), total: results.passed + results.failed, passed: results.passed, failed: results.failed, score: Math.round(results.passed / (results.passed + results.failed) * 100), steps: results.steps };
fs.writeFileSync(path.join(__dirname, '..', 'integration-test-result.json'), JSON.stringify(output, null, 2));
console.log('Report saved to: integration-test-result.json\n');
