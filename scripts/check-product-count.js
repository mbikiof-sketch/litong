const fs = require('fs');
const path = require('path');

const brand = process.argv[2];
if (!brand) {
  console.log('Usage: node check-product-count.js <brand-name>');
  process.exit(1);
}

const productsFile = path.join(__dirname, '..', 'data', brand, 'products.json');

if (!fs.existsSync(productsFile)) {
  console.log(`❌ products.json not found for brand: ${brand}`);
  process.exit(1);
}

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log(`\n========================================`);
console.log(`📊 ${brand} 产品分类统计`);
console.log(`========================================\n`);

let totalProducts = 0;
let categoriesWithLessThan6 = [];

productsData.categories.forEach((category, index) => {
  const productCount = category.products ? category.products.length : 0;
  totalProducts += productCount;
  
  const status = productCount >= 6 ? '✅' : '❌';
  console.log(`${status} 分类 ${index + 1}: ${category.name}`);
  console.log(`   产品数量: ${productCount} ${productCount < 6 ? '(需要至少6个)' : ''}`);
  
  if (productCount < 6) {
    categoriesWithLessThan6.push({
      name: category.name,
      current: productCount,
      needed: 6 - productCount
    });
  }
  
  // 列出产品型号
  if (category.products && category.products.length > 0) {
    console.log(`   产品型号:`);
    category.products.forEach((p, i) => {
      console.log(`     ${i + 1}. ${p.partNumber}`);
    });
  }
  console.log('');
});

console.log(`========================================`);
console.log(`总计: ${productsData.categories.length} 个分类, ${totalProducts} 个产品`);
console.log(`========================================\n`);

if (categoriesWithLessThan6.length > 0) {
  console.log('❌ 以下分类产品数量不足6个，需要补充:\n');
  categoriesWithLessThan6.forEach(cat => {
    console.log(`   - ${cat.name}: 当前 ${cat.current} 个，需要补充 ${cat.needed} 个`);
  });
  console.log('');
  process.exit(1);
} else {
  console.log('✅ 所有分类都有至少6个产品！\n');
  process.exit(0);
}
