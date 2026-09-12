const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'rubycon');

// 读取数据文件
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

console.log('=== Rubycon Data Verification ===\n');

let totalProducts = 0;
let issues = [];

productsData.categories.forEach(category => {
  console.log(`Category: ${category.name} (${category.products.length} products)`);
  
  category.products.forEach(product => {
    totalProducts++;
    const productIssues = [];
    
    // 检查FAQ
    if (!product.faqs || product.faqs.length < 8) {
      productIssues.push(`FAQ count: ${product.faqs?.length || 0} (expected 8)`);
    } else {
      // 检查每个FAQ的字段
      product.faqs.forEach((faq, idx) => {
        if (!faq.question) productIssues.push(`FAQ ${idx+1}: missing question`);
        if (!faq.answer) productIssues.push(`FAQ ${idx+1}: missing answer`);
        else if (faq.answer.length < 200) productIssues.push(`FAQ ${idx+1}: answer too short (${faq.answer.length} chars)`);
        if (!faq.decisionGuide) productIssues.push(`FAQ ${idx+1}: missing decisionGuide`);
        if (!faq.keywords || !Array.isArray(faq.keywords)) productIssues.push(`FAQ ${idx+1}: missing keywords`);
      });
    }
    
    // 检查替代型号
    if (!product.alternativeParts || product.alternativeParts.length === 0) {
      productIssues.push('Missing alternativeParts');
    } else {
      product.alternativeParts.forEach((alt, idx) => {
        if (!alt.partNumber) productIssues.push(`Alt ${idx+1}: missing partNumber`);
        if (!alt.brand) productIssues.push(`Alt ${idx+1}: missing brand`);
        if (!alt.reason) productIssues.push(`Alt ${idx+1}: missing reason`);
        if (!alt.useCase) productIssues.push(`Alt ${idx+1}: missing useCase`);
        if (!alt.specifications) productIssues.push(`Alt ${idx+1}: missing specifications`);
        if (!alt.comparison) productIssues.push(`Alt ${idx+1}: missing comparison`);
      });
    }
    
    // 检查配套型号
    if (!product.companionParts || product.companionParts.length === 0) {
      productIssues.push('Missing companionParts');
    } else {
      product.companionParts.forEach((comp, idx) => {
        if (!comp.partNumber) productIssues.push(`Comp ${idx+1}: missing partNumber`);
        if (!comp.description) productIssues.push(`Comp ${idx+1}: missing description`);
        if (!comp.category) productIssues.push(`Comp ${idx+1}: missing category`);
        if (!comp.link) productIssues.push(`Comp ${idx+1}: missing link`);
      });
    }
    
    // 检查faeReview
    if (!product.faeReview) {
      productIssues.push('Missing faeReview');
    } else {
      if (!product.faeReview.author) productIssues.push('faeReview: missing author');
      if (!product.faeReview.title) productIssues.push('faeReview: missing title');
      if (!product.faeReview.content) productIssues.push('faeReview: missing content');
      if (!product.faeReview.highlight) productIssues.push('faeReview: missing highlight');
    }
    
    if (productIssues.length > 0) {
      issues.push({
        product: product.partNumber,
        category: category.name,
        issues: productIssues
      });
    }
  });
});

console.log(`\nTotal products checked: ${totalProducts}`);
console.log(`Products with issues: ${issues.length}`);

if (issues.length > 0) {
  console.log('\n=== Issues Found ===');
  issues.forEach(item => {
    console.log(`\n${item.product} (${item.category}):`);
    item.issues.forEach(issue => console.log(`  - ${issue}`));
  });
} else {
  console.log('\n✅ All products passed verification!');
}
