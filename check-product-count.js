const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisemicon', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('=== UNISEMICON 产品数量统计 ===\n');

for (const category of products.categories) {
  console.log(`\n【${category.name}】`);
  console.log(`分类ID: ${category.id}`);
  console.log(`产品数量: ${category.products.length}`);
  
  if (category.products.length < 6) {
    console.log(`❌ 警告: 产品数量不足6个!`);
  } else {
    console.log(`✅ 产品数量满足要求`);
  }
  
  console.log('\n产品列表:');
  category.products.forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.partNumber} - ${p.name}`);
  });
}

console.log('\n=== 统计完成 ===');
