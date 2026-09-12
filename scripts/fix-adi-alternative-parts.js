const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'adi', 'products.json');

console.log('🔧 ADI Alternative Parts格式修复工具');
console.log('=====================================\n');

// 读取产品数据
let productsData;
try {
  const content = fs.readFileSync(productsFile, 'utf8');
  productsData = JSON.parse(content);
  console.log('✓ 成功读取产品数据文件\n');
} catch (error) {
  console.error('✗ 读取产品数据失败:', error.message);
  process.exit(1);
}

let fixCount = 0;

// 处理每个产品
productsData.categories.forEach((category) => {
  console.log(`\n📂 ${category.name}:`);

  if (category.products) {
    category.products.forEach((product) => {
      let productFixed = false;

      // 修复alternativeParts格式
      if (product.alternativeParts && product.alternativeParts.length > 0) {
        product.alternativeParts.forEach((alt, idx) => {
          if (alt.comparison) {
            // 检查comparison格式
            Object.keys(alt.comparison).forEach(key => {
              const value = alt.comparison[key];
              if (typeof value === 'string' && value.includes('=>')) {
                // 修复格式
                alt.comparison[key] = value.replace(/=>/g, '>');
                if (!productFixed) {
                  console.log(`  📝 ${product.partNumber}:`);
                  productFixed = true;
                }
                console.log(`    ✓ alternativeParts[${idx}].comparison.${key}: fixed format`);
                fixCount++;
              }
            });
          }
        });
      }
    });
  }
});

// 保存更新后的数据
try {
  fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));
  console.log(`\n✅ 成功修复 ${fixCount} 个格式问题`);
  console.log('💾 数据已保存到 products.json');
} catch (error) {
  console.error('\n✗ 保存数据失败:', error.message);
  process.exit(1);
}
