const fs = require('fs');
const path = require('path');

const brand = '3peak';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔍 检查品牌: ${brand}`);
console.log(`========================================\n`);

// 检查文件完整性
const requiredFiles = ['brand.json', 'products.json', 'solutions.json', 'support.json'];
console.log('📁 文件完整性检查:');
let allFilesExist = true;
for (const file of requiredFiles) {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - 缺失`);
    allFilesExist = false;
  }
}

if (!allFilesExist) {
  console.log('\n❌ 有文件缺失，停止检查');
  process.exit(1);
}

// 读取并检查products.json
console.log('\n📊 products.json 检查:');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 检查产品分类数量
const categories = productsData.categories || [];
console.log(`  产品分类数量: ${categories.length}`);

// 检查每个分类的产品数量
let allCategoriesHaveEnoughProducts = true;
for (const category of categories) {
  const products = category.products || [];
  const productCount = products.length;
  const status = productCount >= 6 ? '✅' : '❌';
  console.log(`  ${status} ${category.name}: ${productCount} 个产品 (需要≥6)`);
  
  if (productCount < 6) {
    allCategoriesHaveEnoughProducts = false;
  }
  
  // 检查每个产品的字段完整性
  for (const product of products) {
    const missingFields = [];
    if (!product.shortDescription) missingFields.push('shortDescription');
    if (!product.descriptionParagraphs || product.descriptionParagraphs.length < 3) missingFields.push('descriptionParagraphs(3段)');
    if (!product.faeReview) missingFields.push('faeReview');
    if (!product.alternativeParts || product.alternativeParts.length < 2) missingFields.push('alternativeParts(≥2)');
    if (!product.companionParts || product.companionParts.length < 3) missingFields.push('companionParts(≥3)');
    if (!product.faqs || product.faqs.length < 5) missingFields.push('faqs(5-8)');
    
    if (missingFields.length > 0) {
      console.log(`    ❌ ${product.partNumber} 缺失字段: ${missingFields.join(', ')}`);
    }
  }
}

// 检查solutions.json
console.log('\n📋 solutions.json 检查:');
const solutionsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'solutions.json'), 'utf8'));
const solutions = solutionsData.solutions || [];
console.log(`  方案数量: ${solutions.length} (需要≥4)`);
if (solutions.length < 4) {
  console.log('  ❌ 方案数量不足');
}

for (const solution of solutions) {
  const customerCases = solution.customerCases || [];
  const faeInsights = solution.faeInsights || {};
  const faqs = solution.faqs || [];
  
  console.log(`  ${solution.title}:`);
  console.log(`    客户案例: ${customerCases.length} (需要≥1)`);
  console.log(`    FAE见解: ${faeInsights.content ? '✅' : '❌'}`);
  console.log(`    FAQ: ${faqs.length} (需要5-6)`);
}

// 检查support.json
console.log('\n📚 support.json 检查:');
const supportData = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));
const articles = supportData.articles || [];
console.log(`  文章数量: ${articles.length} (需要≥5)`);
if (articles.length < 5) {
  console.log('  ❌ 文章数量不足');
}

for (const article of articles) {
  const hasAuthor = article.author && article.author.name;
  const hasPublishDate = article.publishDate || article.date;
  const hasFaeInsights = article.faeInsights && article.faeInsights.content;
  const hasCustomerCases = article.customerCases && article.customerCases.length >= 1;
  const faqs = article.faqs || [];
  
  console.log(`  ${article.title}:`);
  console.log(`    作者: ${hasAuthor ? '✅' : '❌'}`);
  console.log(`    发布日期: ${hasPublishDate ? '✅' : '❌'}`);
  console.log(`    FAE见解: ${hasFaeInsights ? '✅' : '❌'}`);
  console.log(`    客户案例: ${hasCustomerCases ? '✅' : '❌'}`);
  console.log(`    FAQ: ${faqs.length} (需要5-8)`);
}

console.log('\n========================================');
console.log('检查完成');
console.log('========================================');
