const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisemicon', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('=== NOR Flash 分类详细检查 ===\n');

const norFlashCategory = products.categories.find(c => c.id === 'nor-flash');

console.log(`分类名称: ${norFlashCategory.name}`);
console.log(`产品数量: ${norFlashCategory.products.length}`);
console.log('\n产品详细列表:');

norFlashCategory.products.forEach((p, i) => {
  console.log(`\n${i + 1}. ${p.partNumber} - ${p.name}`);
});

// 检查是否有重复
const partNumbers = norFlashCategory.products.map(p => p.partNumber);
const uniquePartNumbers = [...new Set(partNumbers)];
console.log(`\n唯一产品数量: ${uniquePartNumbers.length}`);
console.log(`产品列表: ${partNumbers.join(', ')}`);

if (partNumbers.length !== uniquePartNumbers.length) {
  console.log('❌ 发现重复产品!');
} else {
  console.log('✅ 无重复产品');
}
