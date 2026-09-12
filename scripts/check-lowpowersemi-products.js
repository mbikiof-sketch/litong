#!/usr/bin/env node
/**
 * 检查lowpowersemi产品数量
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'lowpowersemi', 'products.json');

let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error(`❌ 解析失败: ${error.message}`);
  process.exit(1);
}

const categories = productsData.categories || [];

console.log('\n📊 Lowpowersemi 产品数量检查\n');
console.log('=' .repeat(50));

let totalProducts = 0;

categories.forEach(category => {
  const products = category.products || [];
  const count = products.length;
  totalProducts += count;

  const status = count >= 6 ? '✅' : '❌';
  console.log(`${status} ${category.name}: ${count} 个产品`);

  if (count < 6) {
    console.log(`   ⚠️ 需要补充 ${6 - count} 个产品`);
  }

  // 显示产品列表
  products.forEach((p, idx) => {
    console.log(`   ${idx + 1}. ${p.partNumber} - ${p.name}`);
  });
  console.log('');
});

console.log('=' .repeat(50));
console.log(`总计: ${totalProducts} 个产品`);
console.log(`分类数: ${categories.length} 个`);
