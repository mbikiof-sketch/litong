const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisplendour', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('检查 Unisplendour 产品分类...\n');
console.log(`共有 ${products.categories.length} 个产品分类\n`);

products.categories.forEach((cat, i) => {
  console.log(`${i + 1}. ${cat.name} (${cat.id})`);
  console.log(`   产品数量: ${cat.products ? cat.products.length : 0}`);
  if (cat.products && cat.products.length > 0) {
    console.log(`   产品型号: ${cat.products.map(p => p.partNumber).join(', ')}`);
  }
  console.log('');
});

// 检查每个产品的完整性
let totalIssues = 0;
products.categories.forEach(cat => {
  if (cat.products) {
    cat.products.forEach(product => {
      const issues = [];
      if (!product.partNumber) issues.push('缺少partNumber');
      if (!product.name) issues.push('缺少name');
      if (!product.shortDescription) issues.push('缺少shortDescription');
      if (!product.specifications) issues.push('缺少specifications');
      if (!product.features) issues.push('缺少features');
      if (!product.applications) issues.push('缺少applications');

      if (issues.length > 0) {
        totalIssues++;
        console.log(`⚠️  ${product.partNumber || '未知产品'}: ${issues.join(', ')}`);
      }
    });
  }
});

if (totalIssues === 0) {
  console.log('\n✅ 所有产品数据完整！');
} else {
  console.log(`\n⚠️  发现 ${totalIssues} 个产品有数据缺失`);
}
