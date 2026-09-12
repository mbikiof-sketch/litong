/**
 * 检查awinic品牌各分类的产品数量
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'awinic', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Awinic品牌产品分类统计:\n');
console.log('='.repeat(60));

productsData.categories.forEach(category => {
  const productCount = category.products ? category.products.length : 0;
  const status = productCount >= 6 ? '✓' : '✗';
  console.log(`${status} ${category.name}: ${productCount}/6 个产品`);
  
  if (category.products && productCount < 6) {
    console.log(`  现有产品:`);
    category.products.forEach((p, i) => {
      console.log(`    ${i+1}. ${p.partNumber} - ${p.name}`);
    });
    console.log(`  需要补充: ${6 - productCount} 个产品\n`);
  }
});

console.log('='.repeat(60));
