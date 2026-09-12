/**
 * 检查cincon品牌各分类产品数量
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'cincon', 'products.json');

// 读取产品数据
let productsData;
try {
  const fileContent = fs.readFileSync(productsFilePath, 'utf8');
  productsData = JSON.parse(fileContent);
  console.log('成功读取cincon产品数据文件\n');
} catch (error) {
  console.error('读取产品数据文件失败:', error.message);
  process.exit(1);
}

console.log('=== Cincon品牌产品分类统计 ===\n');

let totalProducts = 0;

productsData.categories.forEach((category, index) => {
  const productCount = category.products ? category.products.length : 0;
  totalProducts += productCount;
  
  console.log(`分类 ${index + 1}: ${category.name}`);
  console.log(`  - ID: ${category.id}`);
  console.log(`  - 产品数量: ${productCount}个`);
  
  if (productCount < 6) {
    console.log(`  ⚠️ 警告: 产品数量不足6个(铁律1)，需要添加${6 - productCount}个产品`);
  } else {
    console.log(`  ✅ 产品数量符合要求(≥6个)`);
  }
  
  if (category.products && category.products.length > 0) {
    console.log(`  - 产品型号列表:`);
    category.products.forEach((product, pIndex) => {
      const faqCount = product.faqs ? product.faqs.length : 0;
      const altCount = product.alternativeParts ? product.alternativeParts.length : 0;
      const compCount = product.companionParts ? product.companionParts.length : 0;
      
      let issues = [];
      if (faqCount < 5) issues.push(`FAQ不足(${faqCount}个)`);
      if (altCount < 2) issues.push(`替代件不足(${altCount}个)`);
      if (compCount < 3) issues.push(`配套件不足(${compCount}个)`);
      
      const status = issues.length > 0 ? '⚠️' : '✅';
      console.log(`    ${pIndex + 1}. ${product.partNumber} - FAQ:${faqCount} 替代件:${altCount} 配套件:${compCount} ${status}`);
      
      if (issues.length > 0) {
        console.log(`       问题: ${issues.join(', ')}`);
      }
    });
  }
  
  console.log('');
});

console.log(`总计: ${productsData.categories.length}个分类, ${totalProducts}个产品`);

// 检查根级别FAQ
const rootFaqCount = productsData.faqs ? productsData.faqs.length : 0;
console.log(`\n根级别FAQ: ${rootFaqCount}个 ${rootFaqCount >= 5 ? '✅' : '⚠️ 不足5个'}`);
