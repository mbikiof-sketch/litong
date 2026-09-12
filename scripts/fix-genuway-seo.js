/**
 * 修复genuway品牌seoKeywords
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'genuway');
const solutionsPath = path.join(dataDir, 'solutions.json');
const supportPath = path.join(dataDir, 'support.json');

console.log('🔧 修复genuway品牌seoKeywords...\n');

// 读取数据
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 修复solutions.json的seoKeywords
if (!solutionsData.seoKeywords) {
  solutionsData.seoKeywords = [];
}
if (!solutionsData.seoKeywords.includes('distributor') && !solutionsData.seoKeywords.some(kw => kw.includes('选型'))) {
  solutionsData.seoKeywords.push('Genuway distributor');
}

// 修复support.json的seoKeywords
if (!supportData.seoKeywords) {
  supportData.seoKeywords = [];
}
if (!supportData.seoKeywords.includes('distributor') && !supportData.seoKeywords.some(kw => kw.includes('选型'))) {
  supportData.seoKeywords.push('Genuway distributor');
}

// 保存修复后的数据
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('✅ genuway品牌seoKeywords修复完成！');
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js genuway');
