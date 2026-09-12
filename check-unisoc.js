const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data/unisoc/products.json', 'utf8'));

console.log('=== UNISOC 产品分类统计 ===\n');

data.categories.forEach(cat => {
  console.log(`\n【${cat.name}】`);
  console.log(`产品数量: ${cat.products.length}`);
  
  if (cat.products.length < 6) {
    console.log(`❌ 警告: 产品数量不足6个!`);
  } else {
    console.log(`✅ 产品数量满足要求`);
  }
  
  console.log('产品列表:');
  cat.products.forEach((p, i) => {
    console.log(`  ${i+1}. ${p.partNumber} - ${p.name}`);
  });
  
  // 检查FAQ
  let faqIssues = 0;
  cat.products.forEach(product => {
    const faqs = product.faqs || [];
    if (faqs.length < 5) {
      console.log(`  ❌ ${product.partNumber}: 只有 ${faqs.length} 个FAQ`);
      faqIssues++;
    }
  });
  
  if (faqIssues === 0) {
    console.log('  ✅ 所有产品FAQ数量符合要求');
  }
});

console.log('\n=== 统计完成 ===');
