/**
 * 修复genuway品牌最后的问题
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'genuway');
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');
const supportPath = path.join(dataDir, 'support.json');

console.log('🔧 修复genuway品牌最后的问题...\n');

// 读取数据
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// ========== 1. 修复solutions.json的seoKeywords ==========
console.log('📦 修复solutions.json的seoKeywords...');

if (!solutionsData.seoKeywords) {
  solutionsData.seoKeywords = [];
}

// 确保包含distributor或选型
if (!solutionsData.seoKeywords.some(kw => kw.includes('distributor') || kw.includes('选型'))) {
  solutionsData.seoKeywords.push('Genuway distributor');
}

// ========== 2. 修复support.json的seoKeywords ==========
console.log('📦 修复support.json的seoKeywords...');

if (!supportData.seoKeywords) {
  supportData.seoKeywords = [];
}

// 确保包含distributor或选型
if (!supportData.seoKeywords.some(kw => kw.includes('distributor') || kw.includes('选型'))) {
  supportData.seoKeywords.push('Genuway distributor');
}

// ========== 3. 修复Automotive Crystals分类的series ==========
console.log('📦 修复Automotive Crystals分类的series...');

const automotiveCategory = productsData.categories.find(cat => cat.id === 'automotive-crystals');
if (automotiveCategory) {
  if (!automotiveCategory.series || automotiveCategory.series.length < 2) {
    automotiveCategory.series = ['GXO-A Series', 'GXR-A Series'];
  }
}

// ========== 4. 保存所有修复的数据 ==========
console.log('💾 保存修复后的数据...');

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('\n✅ genuway品牌最后的问题修复完成！');
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js genuway');
