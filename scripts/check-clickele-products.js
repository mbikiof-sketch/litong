/**
 * 检查clickele品牌各分类产品数量
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'clickele', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('========================================');
console.log('🔍 ClickEle品牌产品数量检查');
console.log('========================================\n');

let totalProducts = 0;

products.categories.forEach(category => {
  const productCount = category.products ? category.products.length : 0;
  totalProducts += productCount;
  
  console.log(`📁 ${category.name}`);
  console.log(`   产品数量: ${productCount}`);
  
  if (category.products) {
    category.products.forEach((product, index) => {
      console.log(`   ${index + 1}. ${product.partNumber}`);
      
      // 检查关键字段
      const checks = {
        shortDescription: product.shortDescription ? (product.shortDescription.length >= 80 ? '✅' : '⚠️太短') : '❌缺失',
        descriptionParagraphs: product.descriptionParagraphs ? (product.descriptionParagraphs.length === 3 ? '✅' : `⚠️${product.descriptionParagraphs.length}段`) : '❌缺失',
        faeReview: product.faeReview ? '✅' : '❌缺失',
        alternativeParts: product.alternativeParts ? (product.alternativeParts.length >= 2 ? '✅' : `⚠️${product.alternativeParts.length}个`) : '❌缺失',
        companionParts: product.companionParts ? (product.companionParts.length >= 3 ? '✅' : `⚠️${product.companionParts.length}个`) : '❌缺失',
        faqs: product.faqs ? (product.faqs.length >= 5 ? '✅' : `⚠️${product.faqs.length}个`) : '❌缺失'
      };
      
      console.log(`      shortDescription: ${checks.shortDescription}, descriptionParagraphs: ${checks.descriptionParagraphs}`);
      console.log(`      faeReview: ${checks.faeReview}, alternativeParts: ${checks.alternativeParts}`);
      console.log(`      companionParts: ${checks.companionParts}, faqs: ${checks.faqs}`);
    });
  }
  
  // 检查是否需要补充产品
  if (productCount < 6) {
    console.log(`   ⚠️ 需要补充: ${6 - productCount} 个产品`);
  } else {
    console.log(`   ✅ 产品数量满足要求`);
  }
  console.log('');
});

console.log('========================================');
console.log(`总计产品数: ${totalProducts}`);
console.log('========================================');
