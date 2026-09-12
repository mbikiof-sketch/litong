const fs = require('fs');

// 已修复的品牌列表
const fixedBrands = [
  'st', 'songle', 'southchip', 'starpower', 'starrystonetech', 
  'superchip', 'tdk', 'tdk-lambda'
];

function checkBrand(brand) {
  console.log(`\n========================================`);
  console.log(`检查品牌: ${brand}`);
  console.log(`========================================`);
  
  const issues = [];
  
  // 检查 brand.json
  try {
    const brandData = JSON.parse(fs.readFileSync(`./data/${brand}/brand.json`, 'utf8'));
    
    // 检查必需字段
    const requiredBrandFields = [
      'name', 'displayName', 'description', 'longDescription', 
      'coreProducts', 'industries', 'seoTitle', 'seoDescription', 'seoKeywords', 'faqs'
    ];
    
    requiredBrandFields.forEach(field => {
      if (brandData[field] === undefined) {
        issues.push(`brand.json 缺少字段: ${field}`);
      }
    });
    
    // 检查FAQ数量（铁律12）
    if (brandData.faqs && brandData.faqs.length < 7) {
      issues.push(`brand.json FAQs数量不足: ${brandData.faqs.length} (需要≥7个)`);
    }
    
    // 检查coreProducts数量是否等于分类数量
    const productsData = JSON.parse(fs.readFileSync(`./data/${brand}/products.json`, 'utf8'));
    const categoryCount = productsData.categories ? productsData.categories.length : 0;
    const coreProductCount = brandData.coreProducts ? brandData.coreProducts.length : 0;
    
    if (categoryCount !== coreProductCount) {
      issues.push(`铁律6: coreProducts数量(${coreProductCount}) ≠ 分类数量(${categoryCount})`);
    }
    
  } catch (e) {
    issues.push(`brand.json 错误: ${e.message}`);
  }
  
  // 检查 products.json
  try {
    const productsData = JSON.parse(fs.readFileSync(`./data/${brand}/products.json`, 'utf8'));
    
    // 检查根级别FAQ（铁律13）
    if (!productsData.faqs || productsData.faqs.length < 5) {
      issues.push(`铁律13: products.json 根级别FAQ数量不足: ${productsData.faqs ? productsData.faqs.length : 0} (需要≥5个)`);
    }
    
    // 检查分类
    const categories = productsData.categories || [];
    
    categories.forEach((cat, idx) => {
      // 检查分类FAQ（铁律14）
      if (!cat.faqs || cat.faqs.length < 5) {
        issues.push(`铁律14: 分类 "${cat.name}" FAQ数量不足: ${cat.faqs ? cat.faqs.length : 0} (需要≥5个)`);
      }
      
      // 检查产品
      const products = cat.products || [];
      
      products.forEach((prod, pidx) => {
        // 检查产品必需字段（铁律2）
        const requiredProductFields = [
          'partNumber', 'name', 'shortDescription', 'descriptionParagraphs', 
          'specifications', 'features', 'applications', 'faeReview', 
          'alternativeParts', 'companionParts', 'faqs'
        ];
        
        requiredProductFields.forEach(field => {
          if (prod[field] === undefined) {
            issues.push(`产品 ${prod.partNumber || pidx} 缺少字段: ${field}`);
          }
        });
        
        // 检查产品FAQ数量（铁律15）
        if (prod.faqs && (prod.faqs.length < 5 || prod.faqs.length > 8)) {
          issues.push(`铁律15: 产品 ${prod.partNumber} FAQ数量: ${prod.faqs.length} (需要5-8个)`);
        }
        
        // 检查alternativeParts数量（铁律2）
        if (!prod.alternativeParts || prod.alternativeParts.length < 2) {
          issues.push(`铁律2: 产品 ${prod.partNumber} alternativeParts数量不足: ${prod.alternativeParts ? prod.alternativeParts.length : 0} (需要≥2个)`);
        }
        
        // 检查companionParts数量（铁律2）
        if (!prod.companionParts || prod.companionParts.length < 3) {
          issues.push(`铁律2: 产品 ${prod.partNumber} companionParts数量不足: ${prod.companionParts ? prod.companionParts.length : 0} (需要≥3个)`);
        }
      });
    });
    
  } catch (e) {
    issues.push(`products.json 错误: ${e.message}`);
  }
  
  // 检查 solutions.json
  try {
    const solutionsData = JSON.parse(fs.readFileSync(`./data/${brand}/solutions.json`, 'utf8'));
    const solutions = solutionsData.solutions || [];
    
    // 检查解决方案数量（铁律10）
    if (solutions.length < 3) {
      issues.push(`铁律10: solutions数量不足: ${solutions.length} (需要≥3个)`);
    }
    
    // 检查根级别FAQ（铁律16）
    if (!solutionsData.faqs || solutionsData.faqs.length < 5) {
      issues.push(`铁律16: solutions.json 根级别FAQ数量不足: ${solutionsData.faqs ? solutionsData.faqs.length : 0} (需要≥5个)`);
    }
    
    solutions.forEach((sol, idx) => {
      // 检查客户案例数量（铁律4, 10）
      if (!sol.customerCases || sol.customerCases.length < 1) {
        issues.push(`铁律4/10: 方案 ${sol.id || idx} customerCases数量不足: ${sol.customerCases ? sol.customerCases.length : 0} (需要≥1个)`);
      }
      
      // 检查faeInsights（铁律4）
      if (!sol.faeInsights) {
        issues.push(`铁律4: 方案 ${sol.id || idx} 缺少faeInsights`);
      }
      
      // 检查方案FAQ数量（铁律17）
      if (sol.faqs && (sol.faqs.length < 5 || sol.faqs.length > 6)) {
        issues.push(`铁律17: 方案 ${sol.id || idx} FAQ数量: ${sol.faqs.length} (需要5-6个)`);
      }
    });
    
  } catch (e) {
    issues.push(`solutions.json 错误: ${e.message}`);
  }
  
  // 检查 support.json
  try {
    const supportData = JSON.parse(fs.readFileSync(`./data/${brand}/support.json`, 'utf8'));
    const articles = supportData.articles || [];
    
    // 检查文章数量（铁律11）
    if (articles.length < 5) {
      issues.push(`铁律11: support文章数量不足: ${articles.length} (需要≥5篇)`);
    }
    
    // 检查根级别FAQ（铁律18）
    if (!supportData.faqs || supportData.faqs.length < 8 || supportData.faqs.length > 12) {
      issues.push(`铁律18: support.json 根级别FAQ数量: ${supportData.faqs ? supportData.faqs.length : 0} (需要8-12个)`);
    }
    
    articles.forEach((art, idx) => {
      // 检查必需字段（铁律5）
      const requiredArticleFields = ['author', 'publishDate', 'faeInsights', 'customerCases'];
      requiredArticleFields.forEach(field => {
        if (art[field] === undefined) {
          issues.push(`铁律5: 文章 ${art.id || idx} 缺少字段: ${field}`);
        }
      });
      
      // 检查客户案例数量（铁律5）
      if (!art.customerCases || art.customerCases.length < 1) {
        issues.push(`铁律5: 文章 ${art.id || idx} customerCases数量不足: ${art.customerCases ? art.customerCases.length : 0} (需要≥1个)`);
      }
      
      // 检查文章FAQ数量（铁律19）
      if (art.faqs && (art.faqs.length < 5 || art.faqs.length > 8)) {
        issues.push(`铁律19: 文章 ${art.id || idx} FAQ数量: ${art.faqs.length} (需要5-8个)`);
      }
    });
    
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
console.log('开始全面检查已修复品牌的数据完整性（按照铁律）...\n');

let totalIssues = 0;
fixedBrands.forEach(brand => {
  const issues = checkBrand(brand);
  totalIssues += issues.length;
});

console.log(`\n========================================`);
console.log(`检查完成！总问题数: ${totalIssues}`);
console.log(`========================================`);

if (totalIssues > 0) {
  console.log('\n⚠️  发现大量问题，需要按照铁律修复！');
  console.log('主要遗漏：');
  console.log('  - FAQ数量不足（铁律12-19）');
  console.log('  - alternativeParts/companionParts数量不足（铁律2）');
  console.log('  - customerCases数量不足（铁律4, 5, 10）');
}
