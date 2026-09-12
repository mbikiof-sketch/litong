/**
 * 检查esiontech品牌各分类产品数量
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'esiontech', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('========================================');
console.log('🔍 ESIONTECH品牌产品数量检查');
console.log('========================================\n');

let totalProducts = 0;

products.categories.forEach(category => {
  const productCount = category.products ? category.products.length : 0;
  totalProducts += productCount;
  
  console.log(`📁 ${category.name}`);
  console.log(`   产品数量: ${productCount}`);
  
  if (category.products) {
    category.products.forEach((product, index) => {
      console.log(`   ${index + 1}. ${product.partNumber}`);
    });
  }
  
  // 检查是否需要补充产品
  if (productCount < 6) {
    console.log(`   ⚠️ 需要补充: ${6 - productCount} 个产品`);
  } else {
    console.log(`   ✅ 产品数量满足要求`);
  }
  console.log('');
});

console.log('========================================');
console.log(`总计产品数: ${totalProducts}`);
console.log('========================================');
