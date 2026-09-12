const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisemicon', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('=== NAND Flash 分类详细检查 ===\n');

const nandFlashCategory = products.categories.find(c => c.id === 'nand-flash');

console.log(`分类名称: ${nandFlashCategory.name}`);
console.log(`产品数量: ${nandFlashCategory.products.length}`);
console.log('\n产品详细列表:');

nandFlashCategory.products.forEach((p, i) => {
  console.log(`\n${i + 1}. ${p.partNumber}`);
  console.log(`   名称: ${p.name}`);
  console.log(`   状态: ${p.status}`);
  if (p.alternativeParts) {
    console.log(`   替代料号数量: ${p.alternativeParts.length}`);
    p.alternativeParts.forEach((alt, idx) => {
      console.log(`     ${idx + 1}. ${alt.partNumber}`);
    });
  }
});

// 检查是否有重复
const partNumbers = nandFlashCategory.products.map(p => p.partNumber);
const uniquePartNumbers = [...new Set(partNumbers)];
console.log(`\n唯一产品数量: ${uniquePartNumbers.length}`);

if (partNumbers.length !== uniquePartNumbers.length) {
  console.log('❌ 发现重复产品!');
  const duplicates = partNumbers.filter((item, index) => partNumbers.indexOf(item) !== index);
  console.log(`重复产品: ${duplicates.join(', ')}`);
} else {
  console.log('✅ 无重复产品');
}
