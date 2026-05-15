// SEO/GEO Optimizer Skill Validation
// Usage: node scripts/validate-skill.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BRANDS = ['3peak', 'allegro', 'xilinx'];
const REQUIRED_FILES = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];
const SKILL_PATH = path.join(__dirname, '..', 'SEO_GEO_OPTIMIZER_SKILL.md');
const CHECKLIST_PATH = path.join(__dirname, '..', 'references', 'checklist.md');
const TEST_PROMPTS_PATH = path.join(__dirname, '..', 'references', 'test-prompts.json');

const results = { passed: 0, failed: 0, checks: [] };

function check(condition, message) {
  if (condition) {
    results.passed++;
    results.checks.push({ status: 'PASS', message });
  } else {
    results.failed++;
    results.checks.push({ status: 'FAIL', message });
  }
}

// 1. SKILL.md exists and has frontmatter
const skillContent = fs.readFileSync(SKILL_PATH, 'utf-8');
check(skillContent.includes('---'), 'SKILL.md has YAML frontmatter');
check(skillContent.includes('name: seo-geo-optimizer'), 'SKILL.md has skill name');
check(skillContent.includes('description: >'), 'SKILL.md has description');

// 2. Bundled resources exist
check(fs.existsSync(CHECKLIST_PATH), 'references/checklist.md exists');
check(fs.existsSync(TEST_PROMPTS_PATH), 'references/test-prompts.json exists');

// 3. SKILL.md references correct paths
check(skillContent.includes('data/[brand]'), 'SKILL.md references data/[brand] correctly');
check(skillContent.includes('output/[brand]'), 'SKILL.md references output/[brand] correctly');
check(skillContent.includes('node scripts/generate.js'), 'SKILL.md references build command');
check(skillContent.includes('core-distributor.com'), 'SKILL.md references correct domain');

// 4. Checklist covers all required areas
const checklistContent = fs.readFileSync(CHECKLIST_PATH, 'utf-8');
check(checklistContent.includes('Title:'), 'Checklist has title check');
check(checklistContent.includes('Meta description'), 'Checklist has meta description check');
check(checklistContent.includes('Canonical URL'), 'Checklist has canonical URL check');
check(checklistContent.includes('JSON-LD'), 'Checklist has schema check');
check(checklistContent.includes('robots.txt'), 'Checklist has robots.txt check');
check(checklistContent.includes('Sitemap.xml'), 'Checklist has sitemap check');
check(checklistContent.includes('CORE-EEAT'), 'Checklist has CORE-EEAT check');
check(checklistContent.includes('CITE'), 'Checklist has CITE check');

// 5. Test prompts reference existing brands
const testPrompts = JSON.parse(fs.readFileSync(TEST_PROMPTS_PATH, 'utf-8'));
check(testPrompts.length >= 2, `Test prompts file has ${testPrompts.length} entries`);

// 6. Check brand data files exist and have valid JSON
for (const brand of BRANDS) {
  const brandDir = path.join(__dirname, '..', 'data', brand);
  const dirExists = fs.existsSync(brandDir);
  check(dirExists, `data/${brand}/ directory exists`);
  if (dirExists) {
    for (const file of REQUIRED_FILES) {
      const filePath = path.join(brandDir, file);
      check(fs.existsSync(filePath), `data/${brand}/${file} exists`);
      if (fs.existsSync(filePath)) {
        try {
          JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          check(true, `data/${brand}/${file} is valid JSON`);
        } catch {
          check(false, `data/${brand}/${file} is valid JSON`);
        }
      }
    }
  }
}

// 7. SKILL.md enforces 7 iron rules
const ruleChecks = [
  ['One brand at a time', 'Rule 1'],
  ['Update memory after', 'Rule 2'],
  ['Save intermediate results', 'Rule 3'],
  ['JSON is the only source', 'Rule 4'],
  ['Regenerate after', 'Rule 5'],
  ['Templates hold structure', 'Rule 6'],
  ['Only modify data', 'Rule 7'],
];
for (const [keyword, rule] of ruleChecks) {
  check(skillContent.includes(keyword), `SKILL.md includes "${rule}: ${keyword}"`);
}

// 8. SKILL.md references all 12 SEO skills
const skills = [
  'keyword-research', 'serp-analysis', 'competitor-analysis', 'content-gap-analysis',
  'content-quality-auditor', 'domain-authority-auditor', 'entity-optimizer',
  'meta-tags-optimizer', 'technical-seo-checker', 'internal-linking-optimizer',
  'content-refresher', 'memory-management',
];
for (const skill of skills) {
  check(skillContent.includes(skill), `SKILL.md references skill "${skill}"`);
}

// 9. Checkpoints present
const checkpoints = ['CP1', 'CP2', 'CP3', 'CP4', 'CP5'];
for (const cp of checkpoints) {
  check(skillContent.includes(cp), `SKILL.md includes ${cp} checkpoint`);
}

// 10. Project memory exists
const memoryPath = path.join(__dirname, '..', 'data', '.project-memory', 'seo-optimization-project.md');
check(fs.existsSync(memoryPath), 'Project memory file exists');

// Summary
console.log('\n========================================');
console.log('  SEO/GEO Optimizer Skill Validation');
console.log('========================================\n');
for (const c of results.checks) {
  console.log(`  [${c.status}] ${c.message}`);
}
console.log(`\n  Total: ${results.passed + results.failed} | PASS: ${results.passed} | FAIL: ${results.failed}`);
console.log(`  Score: ${Math.round(results.passed / (results.passed + results.failed) * 100)}%\n`);

const output = {
  timestamp: new Date().toISOString(),
  total: results.passed + results.failed,
  passed: results.passed,
  failed: results.failed,
  score: Math.round(results.passed / (results.passed + results.failed) * 100),
  checks: results.checks,
};
fs.writeFileSync(path.join(__dirname, '..', 'skill-validation-result.json'), JSON.stringify(output, null, 2));
console.log('Full report saved to: skill-validation-result.json');
