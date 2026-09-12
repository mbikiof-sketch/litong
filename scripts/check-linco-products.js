#!/usr/bin/env node
/**
 * Linco品牌产品数量检查脚本
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'linco', 'products.json');

let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取失败:', error.message);
  process.exit(1);
}

const categories = productsData.categories || [];

console.log('============================================================');
console.log('Linco品牌产品数量检查');
console.log('============================================================\n');

categories.forEach(category => {
  const products = category.products || [];
  const count = products.length;
  const status = count >= 6 ? '✅ 符合要求' : `❌ 需要添加 ${6 - count} 个产品`;
  
  console.log(`类别: ${category.name} (${category.id})`);
  console.log(`  产品数量: ${count} / 6 ${status}`);
  
  if (count < 6) {
    console.log(`  现有产品:`);
    products.forEach(p => console.log(`    - ${p.partNumber}`));
  }
  console.log('');
});

console.log('============================================================');
