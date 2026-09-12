const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data/unisemicon/products.json', 'utf8'));

console.log('=== 检查产品详情页FAQ ===\n');

let allGood = true;

data.categories.forEach(cat => {
  console.log(`\n【${cat.name}】`);
  
  cat.products.forEach(product => {
    const faqs = product.faqs || [];
    const hasValidFaqs = faqs.length >= 5 && faqs.every(faq => 
      faq.question && 
      faq.answer && 
      faq.decisionGuide && 
      faq.keywords && faq.keywords.length > 0
    );
    
    if (faqs.length < 5) {
      console.log(`  ❌ ${product.partNumber}: 只有 ${faqs.length} 个FAQ (需要5-8个)`);
      allGood = false;
    } else if (!hasValidFaqs) {
      console.log(`  ❌ ${product.partNumber}: FAQ字段不完整`);
      // 检查具体问题
      faqs.forEach((faq, i) => {
        if (!faq.question) console.log(`    FAQ ${i+1} 缺少 question`);
        if (!faq.answer) console.log(`    FAQ ${i+1} 缺少 answer`);
        if (!faq.decisionGuide) console.log(`    FAQ ${i+1} 缺少 decisionGuide`);
        if (!faq.keywords || faq.keywords.length === 0) console.log(`    FAQ ${i+1} 缺少 keywords`);
      });
      allGood = false;
    } else {
      console.log(`  ✅ ${product.partNumber}: ${faqs.length} 个FAQ`);
    }
  });
});

console.log('\n=== 检查结果 ===');
if (allGood) {
  console.log('✅ 所有产品FAQ符合要求');
} else {
  console.log('❌ 部分产品FAQ需要修复');
}
