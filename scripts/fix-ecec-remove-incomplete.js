/**
 * 删除ECEC品牌中字段不完整的产品
 * 删除通过批量脚本添加的简化产品
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'ecec', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 删除ECEC品牌中字段不完整的产品...\n');

// 需要删除的产品partNumber列表（这些是批量添加的简化产品）
const incompleteProducts = [
  'XO-8MHz-3.3V',
  'XO-12MHz-3.3V', 
  'XO-16MHz-1.8V',
  'XO-24MHz-3.3V',
  'XO-48MHz-3.3V',
  'XO-50MHz-2.5V'
];

let totalRemoved = 0;

// 遍历所有分类，删除不完整的产品
productsData.categories.forEach(category => {
  const originalCount = category.products.length;
  
  // 过滤掉不完整的产品
  category.products = category.products.filter(product => {
    const shouldRemove = incompleteProducts.includes(product.partNumber);
    if (shouldRemove) {
      console.log(`  🗑️ 删除: ${product.partNumber} (${category.name})`);
    }
    return !shouldRemove;
  });
  
  const removedCount = originalCount - category.products.length;
  if (removedCount > 0) {
    console.log(`  📦 ${category.name}: 删除 ${removedCount} 个产品，剩余 ${category.products.length} 个`);
    totalRemoved += removedCount;
  }
});

console.log(`\n✅ 共删除 ${totalRemoved} 个字段不完整的产品`);

// 保存修改后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n💡 现在需要重新添加完整字段的产品');
