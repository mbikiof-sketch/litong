const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data/unisemicon/products.json', 'utf8'));

console.log('检查每个分类的产品数量:\n');

data.categories.forEach(cat => {
  console.log(`\n${cat.name}: ${cat.products.length} 个产品`);
  
  if (cat.products.length < 6) {
    console.log(`❌ 警告: 只有 ${cat.products.length} 个产品，需要添加!`);
  }
  
  cat.products.forEach((p, i) => {
    console.log(`  ${i+1}. ${p.partNumber}`);
  });
});
