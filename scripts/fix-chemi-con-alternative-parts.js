/**
 * 修复chemi-con品牌alternativeParts格式问题
 * 将 => 格式改为 >< 格式
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chemi-con');
const productsPath = path.join(dataDir, 'products.json');

console.log('🔧 修复chemi-con alternativeParts格式问题...\n');

// 读取products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixCount = 0;

// 遍历所有分类和产品
productsData.categories.forEach((category) => {
  console.log(`📂 检查分类: ${category.name}`);

  category.products.forEach((product) => {
    if (product.alternativeParts && Array.isArray(product.alternativeParts)) {
      product.alternativeParts.forEach((alt) => {
        // 检查comparison字段是否为字符串且包含=>
        if (typeof alt.comparison === 'string' && alt.comparison.includes('=>')) {
          const oldComparison = alt.comparison;
          // 替换 => 为 ><
          alt.comparison = alt.comparison.replace(/=>/g, '><');
          console.log(`  ✓ 修复产品 ${product.partNumber}: ${oldComparison} -> ${alt.comparison}`);
          fixCount++;
        }
      });
    }
  });
});

// 保存修复后的文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`\n✅ 修复完成！共修复 ${fixCount} 处格式问题。`);
console.log(`💾 已保存到: ${productsPath}`);
