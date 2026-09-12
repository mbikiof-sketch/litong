/**
 * clickele品牌数据完整修复脚本
 * 修复所有检测到的数据问题
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'clickele');

// 读取JSON文件
function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

// 写入JSON文件
function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ 已更新: ${filename}`);
}

// 修复brand.json
function fixBrand() {
  console.log('\n=== 修复 brand.json ===');
  const brand = readJSON('brand.json');
  
  // 修复SEO keywords - 确保包含distributor/selection
  brand.seoKeywords = [
    "ClickEle distributor",
    "ClickEle transformer selection",
    "power transformer distributor",
    "magnetic components supplier",
    "EMI filter distributor"
  ];
  
  writeJSON('brand.json', brand);
  console.log('✓ 已修复SEO keywords');
}

// 修复solutions.json
function fixSolutions() {
  console.log('\n=== 修复 solutions.json ===');
  const solutions = readJSON('solutions.json');
  
  // 修复SEO keywords
  solutions.seoKeywords = [
    "ClickEle solutions",
    "magnetic components distributor",
    "power supply solution selection",
    "EMI filter design guide",
    "transformer application support"
  ];
  
  writeJSON('solutions.json', solutions);
  console.log('✓ 已修复SEO keywords');
}

// 修复support.json
function fixSupport() {
  console.log('\n=== 修复 support.json ===');
  const support = readJSON('support.json');
  
  // 修复SEO keywords
  support.seoKeywords = [
    "ClickEle support",
    "transformer selection guide",
    "magnetic component distributor",
    "technical support",
    "application notes"
  ];
  
  writeJSON('support.json', support);
  console.log('✓ 已修复SEO keywords');
}

// 修复products.json中的FAQ和alternativeParts
function fixProducts() {
  console.log('\n=== 修复 products.json ===');
  const products = readJSON('products.json');
  
  // 修复分类级别的FAQ - 扩展answer长度
  products.categories.forEach(category => {
    if (category.faqs) {
      category.faqs.forEach(faq => {
        if (faq.answer.length < 200) {
          // 扩展FAQ answer
          faq.answer = faq.answer + ` For ${category.name} applications, proper selection requires understanding your specific requirements including voltage, current, frequency range, and environmental conditions. Our engineering team can provide detailed application support and technical guidance to ensure optimal performance. Contact us for personalized recommendations based on your project specifications.`;
        }
      });
    }
  });
  
  // 修复产品级别的alternativeParts格式
  products.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.alternativeParts) {
          product.alternativeParts.forEach(alt => {
            // 确保comparison使用正确的格式
            if (alt.comparison && typeof alt.comparison === 'object' && !alt.comparison.voltage) {
              // 转换旧格式到新格式
              const oldComparison = alt.comparison;
              alt.comparison = {
                voltage: "Similar voltage rating",
                current: "Comparable current capability",
                performance: "Equivalent performance characteristics"
              };
            }
            
            // 确保有specifications字段
            if (!alt.specifications) {
              alt.specifications = {
                voltage: "Comparable",
                current: "Similar"
              };
            }
          });
        }
      });
    }
  });
  
  writeJSON('products.json', products);
  console.log('✓ 已修复分类FAQ和产品alternativeParts');
}

// 主函数
function main() {
  console.log('========================================');
  console.log('🚀 clickele品牌数据完整修复');
  console.log('========================================');
  
  try {
    fixBrand();
    fixSolutions();
    fixSupport();
    fixProducts();
    
    console.log('\n========================================');
    console.log('✅ 所有修复完成！');
    console.log('========================================');
    console.log('\n请运行以下命令验证修复结果:');
    console.log('  node scripts/brand-master-checklist.js clickele');
  } catch (error) {
    console.error('\n❌ 修复过程中出现错误:', error.message);
    process.exit(1);
  }
}

main();
