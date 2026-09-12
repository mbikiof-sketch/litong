const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'chipanalog', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Chipanalog品牌产品分类统计：\n');

productsData.categories.forEach((category, index) => {
  console.log(`${index + 1}. ${category.name} (${category.slug})`);
  console.log(`   产品数量: ${category.products.length}`);
  
  if (category.products.length < 6) {
    console.log(`   ⚠️ 需要添加 ${6 - category.products.length} 个产品`);
  } else {
    console.log(`   ✓ 产品数量达标`);
  }
  
  // 列出所有产品型号
  const partNumbers = category.products.map(p => p.partNumber).join(', ');
  console.log(`   产品型号: ${partNumbers}\n`);
});
