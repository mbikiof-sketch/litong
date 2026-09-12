/**
 * 检查cmsemicor产品详情页FAQ是否符合要求
 * 要求：
 * 1. 每个产品至少有5个FAQ
 * 2. 每个FAQ包含question, answer, decisionGuide, keywords
 * 3. answer长度≥200字
 * 4. decisionGuide长度≥30字
 * 5. keywords至少有3个
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'cmsemicor');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function checkFAQs() {
  console.log('========================================');
  console.log('🔍 检查cmsemicor产品FAQ合规性');
  console.log('========================================\n');
  
  const products = readJSON('products.json');
  let totalProducts = 0;
  let productsWithIssues = 0;
  let totalIssues = 0;
  
  products.categories.forEach(category => {
    console.log(`\n📁 ${category.name}`);
    console.log('='.repeat(50));
    
    if (category.products) {
      category.products.forEach(product => {
        totalProducts++;
        const issues = [];
        
        // 检查FAQ数量
        if (!product.faqs || product.faqs.length === 0) {
          issues.push('❌ 缺少FAQs');
        } else if (product.faqs.length < 5) {
          issues.push(`⚠️ FAQ数量不足: ${product.faqs.length}个 (需要≥5个)`);
        }
        
        // 检查每个FAQ的字段
        if (product.faqs) {
          product.faqs.forEach((faq, index) => {
            // 检查必需字段
            if (!faq.question) issues.push(`❌ FAQ${index+1}缺少question`);
            if (!faq.answer) issues.push(`❌ FAQ${index+1}缺少answer`);
            if (!faq.decisionGuide) issues.push(`❌ FAQ${index+1}缺少decisionGuide`);
            if (!faq.keywords || faq.keywords.length === 0) issues.push(`❌ FAQ${index+1}缺少keywords`);
            
            // 检查answer长度
            if (faq.answer && faq.answer.length < 200) {
              issues.push(`⚠️ FAQ${index+1} answer太短: ${faq.answer.length}字 (需要≥200字)`);
            }
            
            // 检查decisionGuide长度
            if (faq.decisionGuide && faq.decisionGuide.length < 30) {
              issues.push(`⚠️ FAQ${index+1} decisionGuide太短: ${faq.decisionGuide.length}字 (需要≥30字)`);
            }
            
            // 检查keywords数量
            if (faq.keywords && faq.keywords.length < 3) {
              issues.push(`⚠️ FAQ${index+1} keywords太少: ${faq.keywords.length}个 (需要≥3个)`);
            }
          });
        }
        
        if (issues.length > 0) {
          productsWithIssues++;
          totalIssues += issues.length;
          console.log(`\n🔴 ${product.partNumber}:`);
          issues.forEach(issue => console.log(`   ${issue}`));
        } else {
          console.log(`✅ ${product.partNumber}: 所有FAQ符合要求 (${product.faqs.length}个FAQ)`);
        }
      });
    }
  });
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 检查结果汇总');
  console.log('='.repeat(50));
  console.log(`总产品数: ${totalProducts}`);
  console.log(`问题产品数: ${productsWithIssues}`);
  console.log(`总问题数: ${totalIssues}`);
  
  if (productsWithIssues === 0) {
    console.log('\n✅ 所有产品FAQ符合要求！');
  } else {
    console.log(`\n⚠️ 发现${productsWithIssues}个产品存在问题，需要修复`);
  }
}

checkFAQs();
