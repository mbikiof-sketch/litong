const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data/unisemicon/products.json', 'utf8'));

console.log('UNISEMICON 产品分类统计:\n');

data.categories.forEach(cat => {
  console.log(`${cat.name}: ${cat.products.length} 个产品`);
  cat.products.forEach((p, i) => {
    console.log(`  ${i+1}. ${p.partNumber}`);
  });
  console.log('');
});
