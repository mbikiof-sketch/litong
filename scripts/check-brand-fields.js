#!/usr/bin/env node
/**
 * 检查品牌字段是否符合 BRAND_DATA_COMPLETE_GUIDE.md 要求
 */

const fs = require('fs');
const path = require('path');

const brands = ['xinbole', 'xinleineng', 'ymtc', 'yxc', 'zlg-power'];

console.log('🔍 品牌字段完整性检查');
console.log('=' .repeat(60));

brands.forEach(brand => {
  console.log(`\n📋 检查品牌: ${brand}`);
  console.log('-'.repeat(60));
  
  const dataDir = path.join(__dirname, '..', 'data', brand);
  
  // 检查文件是否存在
  const productsPath = path.join(dataDir, 'products.json');
  const solutionsPath = path.join(dataDir, 'solutions.json');
  const supportPath = path.join(dataDir, 'support.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log(`  ❌ products.json 不存在`);
    return;
  }
  
  const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  const solutionsData = fs.existsSync(solutionsPath) ? JSON.parse(fs.readFileSync(solutionsPath, 'utf8')) : { solutions: [] };
  const supportData = fs.existsSync(supportPath) ? JSON.parse(fs.readFileSync(supportPath, 'utf8')) : { articles: [] };
  
  let issues = [];
  
  // 检查产品分类
  if (!productsData.categories || productsData.categories.length < 4) {
    issues.push(`❌ 产品分类数量不足: ${productsData.categories ? productsData.categories.length : 0}/4`);
  } else {
    console.log(`  ✅ 产品分类: ${productsData.categories.length}个`);
  }
  
  // 检查每个分类的产品
  let totalProducts = 0;
  productsData.categories.forEach((cat, idx) => {
    if (!cat.products || cat.products.length < 6) {
      issues.push(`❌ 分类 "${cat.name}" 产品数量不足: ${cat.products ? cat.products.length : 0}/6`);
    }
    if (cat.products) {
      totalProducts += cat.products.length;
      
      // 检查每个产品的字段
      cat.products.forEach((product, pIdx) => {
        // 检查必填字段
        if (!product.partNumber) issues.push(`❌ 分类${idx}产品${pIdx}: 缺少 partNumber`);
        if (!product.name) issues.push(`❌ 分类${idx}产品${pIdx}: 缺少 name`);
        if (!product.shortDescription) issues.push(`❌ 分类${idx}产品${pIdx}: 缺少 shortDescription`);
        
        // 检查 descriptionParagraphs
        if (!product.descriptionParagraphs || product.descriptionParagraphs.length < 3) {
          issues.push(`❌ 产品 "${product.name || pIdx}": descriptionParagraphs 不足3段`);
        }
        
        // 检查 faeReview
        if (!product.faeReview) {
          issues.push(`❌ 产品 "${product.name || pIdx}": 缺少 faeReview`);
        } else {
          if (!product.faeReview.author) issues.push(`❌ 产品 "${product.name || pIdx}": faeReview 缺少 author`);
          if (!product.faeReview.content) issues.push(`❌ 产品 "${product.name || pIdx}": faeReview 缺少 content`);
        }
        
        // 检查 alternativeParts
        if (!product.alternativeParts || product.alternativeParts.length < 2) {
          issues.push(`❌ 产品 "${product.name || pIdx}": alternativeParts 不足2个`);
        } else {
          product.alternativeParts.forEach((alt, aIdx) => {
            if (!alt.partNumber) issues.push(`❌ 产品 "${product.name || pIdx}" 替代料${aIdx}: 缺少 partNumber`);
            if (!alt.brand) issues.push(`❌ 产品 "${product.name || pIdx}" 替代料${aIdx}: 缺少 brand`);
            if (!alt.reason) issues.push(`❌ 产品 "${product.name || pIdx}" 替代料${aIdx}: 缺少 reason`);
          });
        }
        
        // 检查 companionParts
        if (!product.companionParts || product.companionParts.length < 3) {
          issues.push(`❌ 产品 "${product.name || pIdx}": companionParts 不足3个`);
        } else {
          product.companionParts.forEach((comp, cIdx) => {
            if (!comp.partNumber) issues.push(`❌ 产品 "${product.name || pIdx}" 配套料${cIdx}: 缺少 partNumber`);
            if (!comp.description) issues.push(`❌ 产品 "${product.name || pIdx}" 配套料${cIdx}: 缺少 description`);
          });
        }
        
        // 检查产品FAQ
        if (!product.faqs || product.faqs.length < 5) {
          issues.push(`❌ 产品 "${product.name || pIdx}": FAQs 不足5个`);
        } else {
          product.faqs.forEach((faq, fIdx) => {
            if (!faq.question) issues.push(`❌ 产品 "${product.name || pIdx}" FAQ${fIdx}: 缺少 question`);
            if (!faq.answer) issues.push(`❌ 产品 "${product.name || pIdx}" FAQ${fIdx}: 缺少 answer`);
            if (!faq.decisionGuide) issues.push(`❌ 产品 "${product.name || pIdx}" FAQ${fIdx}: 缺少 decisionGuide`);
            if (!faq.keywords || faq.keywords.length === 0) issues.push(`❌ 产品 "${product.name || pIdx}" FAQ${fIdx}: 缺少 keywords`);
          });
        }
      });
    }
  });
  
  console.log(`  ✅ 总产品数: ${totalProducts}`);
  
  // 检查 solutions
  if (!solutionsData.solutions || solutionsData.solutions.length < 4) {
    issues.push(`❌ Solutions 数量不足: ${solutionsData.solutions ? solutionsData.solutions.length : 0}/4`);
  } else {
    console.log(`  ✅ Solutions: ${solutionsData.solutions.length}个`);
    
    solutionsData.solutions.forEach((sol, sIdx) => {
      if (!sol.customerCases || sol.customerCases.length < 1) {
        issues.push(`❌ Solution "${sol.name || sIdx}": 缺少 customerCases`);
      }
      if (!sol.faeInsights) {
        issues.push(`❌ Solution "${sol.name || sIdx}": 缺少 faeInsights`);
      }
      if (!sol.technicalSpecs) {
        issues.push(`❌ Solution "${sol.name || sIdx}": 缺少 technicalSpecs`);
      }
      if (!sol.bomList) {
        issues.push(`❌ Solution "${sol.name || sIdx}": 缺少 bomList`);
      }
    });
  }
  
  // 检查 support articles
  if (!supportData.articles || supportData.articles.length < 5) {
    issues.push(`❌ Support Articles 数量不足: ${supportData.articles ? supportData.articles.length : 0}/5`);
  } else {
    console.log(`  ✅ Support Articles: ${supportData.articles.length}篇`);
    
    supportData.articles.forEach((art, aIdx) => {
      if (!art.author) issues.push(`❌ Article "${art.title || aIdx}": 缺少 author`);
      if (!art.publishDate) issues.push(`❌ Article "${art.title || aIdx}": 缺少 publishDate`);
      if (!art.faeInsights) issues.push(`❌ Article "${art.title || aIdx}": 缺少 faeInsights`);
    });
  }
  
  // 输出问题
  if (issues.length > 0) {
    console.log(`\n  ⚠️  发现问题 (${issues.length}个):`);
    issues.forEach(issue => console.log(`     ${issue}`));
  } else {
    console.log(`  ✅ 所有字段符合要求！`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('✅ 字段检查完成');
