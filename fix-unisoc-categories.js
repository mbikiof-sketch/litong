const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisoc', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('修复 UNISOC 产品分类...\n');
console.log(`当前有 ${products.categories.length} 个分类`);

// 只保留前4个唯一的分类（FPGA, MCU, Communication, Sensors）
const uniqueCategories = products.categories.slice(0, 4);

console.log('\n保留的分类：');
uniqueCategories.forEach((cat, i) => {
  console.log(`  ${i + 1}. ${cat.name} (${cat.products.length} 个产品)`);
});

// 更新分类
products.categories = uniqueCategories;

// 保存更新后的数据
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

console.log('\n✅ UNISOC 产品分类修复完成！');
console.log(`现在共有 ${products.categories.length} 个产品分类`);
