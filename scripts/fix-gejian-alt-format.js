/**
 * 修复gejian-semi alternativeParts格式
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gejian-semi', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复gejian-semi alternativeParts格式...\n');

// 修复所有产品的alternativeParts格式
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        // 确保comparison使用=>格式
        if (alt.comparison && !alt.comparison.includes('=>')) {
          // 将现有的:格式改为=>格式
          alt.comparison = alt.comparison.replace(/:/g, '=>');
        }
      });
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('✅ alternativeParts格式修复完成！');
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js gejian-semi');
