const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'starpower');

// 读取JSON文件
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 为缺少slug的产品添加slug
console.log('🔧 添加缺失的slug字段...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (!product.slug) {
      // 从partNumber生成slug
      product.slug = product.partNumber.toLowerCase();
      console.log(`  ✅ ${product.partNumber}: 添加 slug -> ${product.slug}`);
      fixedCount++;
    }
  });
});

// 保存products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log(`\n✅ 已修复 ${fixedCount} 个产品的slug字段`);
console.log('========================================');
