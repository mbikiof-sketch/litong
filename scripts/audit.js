// Master Audit Runner
// Usage: node scripts/audit.js
// Runs all validation checks in sequence, produces unified report

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const RESULTS = [];

function run(step, cmd, timeout = 60000) {
  process.stdout.write(`  [${step}] ${cmd} ... `);
  try {
    const out = execSync(cmd, { cwd: ROOT, stdio: 'pipe', timeout, encoding: 'utf-8' });
    const lines = out.trim().split('\n');
    const scoreLine = lines.find(l => l.includes('Score:') || l.includes('PASS:'));
    const score = scoreLine ? scoreLine.trim() : 'done';
    RESULTS.push({ step, cmd, status: 'PASS', score });
    console.log('✓');
  } catch (e) {
    const msg = (e.stderr || e.stdout || e.message || '').toString().slice(0, 100);
    RESULTS.push({ step, cmd, status: 'FAIL', score: msg });
    console.log('✗');
  }
}

console.log('\n═══════════════════════════════════════');
console.log('  BeiLuo SEO/GEO — Master Audit');
console.log('═══════════════════════════════════════\n');

run('1/5', 'node scripts/validate-skill.js');
run('2/5', 'node scripts/brand-data-check.js');
run('3/5', 'node scripts/seo-readiness-report.js');
run('4/5', 'node scripts/test-integration.js', 120000);

console.log('\n───────────────────────────────────────');
console.log('  Audit Summary');
console.log('───────────────────────────────────────\n');

for (const r of RESULTS) {
  const icon = r.status === 'PASS' ? '✅' : '❌';
  console.log(`  ${icon} ${r.step}: ${r.score}`);
}

const passed = RESULTS.filter(r => r.status === 'PASS').length;
const total = RESULTS.length;

console.log(`\n  Overall: ${passed}/${total} checks passed`);
console.log(`  Timestamp: ${new Date().toISOString()}`);

const report = {
  timestamp: new Date().toISOString(),
  overall: `${passed}/${total}`,
  details: RESULTS,
};
fs.writeFileSync(path.join(ROOT, 'audit-report.json'), JSON.stringify(report, null, 2));
console.log('\n  Report saved to: audit-report.json\n');
