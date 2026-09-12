/**
 * 检查ELECTRONICON品牌数据
 */

const fs = require('fs');
const path = require('path');

const brandPath = path.join(__dirname, '..', 'data', 'electronicon');

console.log('🔍 检查ELECTRONICON品牌数据...\n');

// 检查文件是否存在
const requiredFiles = ['brand.json', 'products.json', 'solutions.json', 'support.json'];
requiredFiles.forEach(file => {
  const filePath = path.join(brandPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} 存在`);
  } else {
    console.log(`❌ ${file} 不存在`);
  }
});

// 读取产品数据
const productsPath = path.join(brandPath, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('\n📦 产品分类检查:');
let totalProducts = 0;
productsData.categories.forEach(category => {
  const productCount = category.products ? category.products.length : 0;
  totalProducts += productCount;
  const status = productCount >= 6 ? '✅' : '❌';
  console.log(`  ${status} ${category.name}: ${productCount} 个产品`);
  
  if (productCount < 6) {
    console.log(`     ⚠️ 需要补充 ${6 - productCount} 个产品`);
  }
});

console.log(`\n总计: ${totalProducts} 个产品`);

// 检查solutions数量
const solutionsPath = path.join(brandPath, 'solutions.json');
if (fs.existsSync(solutionsPath)) {
  const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  const solutionCount = solutionsData.solutions ? solutionsData.solutions.length : 0;
  const status = solutionCount >= 4 ? '✅' : '❌';
  console.log(`\n📋 解决方案: ${solutionCount} 个 ${status}`);
  if (solutionCount < 4) {
    console.log(`   ⚠️ 需要补充 ${4 - solutionCount} 个解决方案`);
  }
}

// 检查support文章数量
const supportPath = path.join(brandPath, 'support.json');
if (fs.existsSync(supportPath)) {
  const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  const articleCount = supportData.articles ? supportData.articles.length : 0;
  const status = articleCount >= 5 ? '✅' : '❌';
  console.log(`\n📚 支持文章: ${articleCount} 篇 ${status}`);
  if (articleCount < 5) {
    console.log(`   ⚠️ 需要补充 ${5 - articleCount} 篇文章`);
  }
}

console.log('\n✅ ELECTRONICON品牌数据检查完成');
