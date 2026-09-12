const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisemicon', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('=== UNISEMICON 最终检查 ===\n');

let allGood = true;

for (const category of products.categories) {
  console.log(`\n【${category.name}】`);
  console.log(`产品数量: ${category.products.length}`);
  
  if (category.products.length < 6) {
    console.log('❌ 产品数量不足6个!');
    allGood = false;
  } else {
    console.log('✅ 产品数量满足要求');
  }
  
  // 列出所有产品
  console.log('产品列表:');
  category.products.forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.partNumber}`);
  });
  
  // 检查重复
  const partNumbers = category.products.map(p => p.partNumber);
  const uniquePartNumbers = [...new Set(partNumbers)];
  if (partNumbers.length !== uniquePartNumbers.length) {
    console.log('❌ 发现重复产品!');
    allGood = false;
  } else {
    console.log('✅ 无重复产品');
  }
}

console.log('\n=== 最终结论 ===');
if (allGood) {
  console.log('✅ 所有分类都有6个或更多产品，且无重复!');
} else {
  console.log('❌ 存在问题需要修复');
}
