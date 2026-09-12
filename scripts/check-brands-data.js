const fs = require('fs');
const path = require('path');

// 已修复的品牌列表
const fixedBrands = [
  'st', 'songle', 'southchip', 'starpower', 'starrystonetech', 
  'superchip', 'tdk', 'tdk-lambda'
];

// 必需字段定义
const requiredProductFields = [
  'partNumber', 'name', 'shortDescription', 'descriptionParagraphs', 
  'specifications', 'features', 'applications', 'faeReview', 
  'alternativeParts', 'companionParts', 'faqs'
];

const requiredSolutionFields = [
  'id', 'title', 'slug', 'description', 'longDescription', 
  'coreProducts', 'keyFeatures', 'technicalSpecs', 'applications',
  'coreAdvantages', 'bomList', 'faeInsights', 'faqs', 'benefits', 'name'
];

const requiredSupportFields = [
  'id', 'title', 'slug', 'category', 'description', 'contentParagraphs',
  'faeInsights', 'faqs', 'author', 'publishDate', 'summary', 'tags'
];

const requiredCategoryFields = ['name', 'description', 'products', 'series', 'slug', 'id'];

function checkBrand(brand) {
  console.log(`\n========================================`);
  console.log(`检查品牌: ${brand}`);
  console.log(`========================================`);
  
  const issues = [];
  
  // 检查 products.json
  try {
    const productsPath = `./data/${brand}/products.json`;
    if (fs.existsSync(productsPath)) {
      const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      
      // 检查分类数量
      const categories = productsData.categories || [];
      console.log(`\n产品分类数量: ${categories.length}`);
      
      if (categories.length < 4) {
        issues.push(`产品分类数量不足: ${categories.length} (需要4个)`);
      }
      
      categories.forEach((cat, idx) => {
        // 检查分类必需字段
        requiredCategoryFields.forEach(field => {
          if (cat[field] === undefined) {
            issues.push(`分类 ${idx + 1} (${cat.name || 'unnamed'}) 缺少字段: ${field}`);
          }
        });
        
        // 检查产品数量
        const products = cat.products || [];
        console.log(`  分类 ${idx + 1} (${cat.name}): ${products.length} 个产品`);
        
        if (products.length < 4) {
          issues.push(`分类 ${cat.name} 产品数量不足: ${products.length} (需要4个)`);
        }
        
        // 检查每个产品的必需字段
        products.forEach((prod, pidx) => {
          requiredProductFields.forEach(field => {
            if (prod[field] === undefined) {
              issues.push(`产品 ${prod.partNumber || pidx} 缺少字段: ${field}`);
            }
          });
        });
      });
    } else {
      issues.push(`缺少 products.json`);
    }
  } catch (e) {
    issues.push(`products.json 错误: ${e.message}`);
  }
  
  // 检查 solutions.json
  try {
    const solutionsPath = `./data/${brand}/solutions.json`;
    if (fs.existsSync(solutionsPath)) {
      const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
      const solutions = solutionsData.solutions || [];
      console.log(`\n解决方案数量: ${solutions.length}`);
      
      if (solutions.length < 3) {
        issues.push(`解决方案数量不足: ${solutions.length} (需要3个)`);
      }
      
      solutions.forEach((sol, idx) => {
        requiredSolutionFields.forEach(field => {
          if (sol[field] === undefined) {
            issues.push(`解决方案 ${idx + 1} (${sol.id || 'unnamed'}) 缺少字段: ${field}`);
          }
        });
      });
    } else {
      issues.push(`缺少 solutions.json`);
    }
  } catch (e) {
    issues.push(`solutions.json 错误: ${e.message}`);
  }
  
  // 检查 support.json
  try {
    const supportPath = `./data/${brand}/support.json`;
    if (fs.existsSync(supportPath)) {
      const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
      const articles = supportData.articles || [];
      console.log(`\n技术支持文章数量: ${articles.length}`);
      
      if (articles.length < 5) {
        issues.push(`技术支持文章数量不足: ${articles.length} (需要5篇)`);
      }
      
      articles.forEach((art, idx) => {
        requiredSupportFields.forEach(field => {
          if (art[field] === undefined) {
            issues.push(`文章 ${idx + 1} (${art.id || 'unnamed'}) 缺少字段: ${field}`);
          }
        });
      });
    } else {
      issues.push(`缺少 support.json`);
    }
  } catch (e) {
    issues.push(`support.json 错误: ${e.message}`);
  }
  
  // 输出结果
  if (issues.length === 0) {
    console.log(`\n✅ ${brand} 品牌数据完整！`);
  } else {
    console.log(`\n❌ ${brand} 品牌发现问题 (${issues.length}个):`);
    issues.forEach(issue => console.log(`   - ${issue}`));
  }
  
  return issues;
}

// 检查所有已修复品牌
console.log('开始检查已修复品牌的数据完整性...\n');

let totalIssues = 0;
fixedBrands.forEach(brand => {
  const issues = checkBrand(brand);
  totalIssues += issues.length;
});

console.log(`\n========================================`);
console.log(`检查完成！总问题数: ${totalIssues}`);
console.log(`========================================`);
