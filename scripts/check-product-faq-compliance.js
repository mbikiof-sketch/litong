#!/usr/bin/env node
/**
 * 产品详情页FAQ合规检查脚本
 * 检查产品详情页FAQ是否符合铁律27s的五维要求
 *
 * 五维要求：
 * 1. 具体参数提问（能不能用）
 * 2. 参数使用条件（怎么选/怎么用）
 * 3. 竞品/替代对比
 * 4. 应用场景绑定
 * 5. 交期/采购决策
 *
 * 使用: node scripts/check-product-faq-compliance.js [brand-name]
 *       node scripts/check-product-faq-compliance.js --all
 */

const fs = require('fs');
const path = require('path');

// 五维关键词映射 - 用于检测FAQ覆盖的维度
const dimensionKeywords = {
  dimension1: {
    name: '维度1：具体参数提问（能不能用）',
    keywords: [
      'maximum', 'minimum', 'rating', 'specification', 'parameter', 'value',
      'voltage', 'current', 'capacitance', 'resistance', 'power', 'frequency',
      'temperature', 'ripple current', 'ESR', 'lifetime', 'range', 'limit',
      'rated', 'capability', 'capacity', 'tolerance', 'what is the', 'how much'
    ]
  },
  dimension2: {
    name: '维度2：参数使用条件（怎么选/怎么用）',
    keywords: [
      'how do i', 'how to', 'how should', 'calculate', 'select', 'choose',
      'determine', 'recommend', 'guideline', 'best practice', 'derating',
      'design', 'configure', 'set up', 'adjust', 'optimize', 'usage',
      'condition', 'operating', 'application', 'implementation', 'method'
    ]
  },
  dimension3: {
    name: '维度3：竞品/替代对比',
    keywords: [
      'compare', 'comparison', 'versus', 'vs', 'difference', 'alternative',
      'substitute', 'replace', 'instead', 'better than', 'similar to',
      'equivalent', 'competitor', 'other brand', 'series', 'model',
      'previous generation', 'upgrade', 'downgrade', 'trade-off'
    ]
  },
  dimension4: {
    name: '维度4：应用场景绑定',
    keywords: [
      'application', 'use case', 'suitable for', 'used in', 'scenario',
      'where', 'when to use', 'recommended for', 'ideal for', 'best for',
      'industry', 'market', 'field', 'environment', 'condition',
      'power supply', 'driver', 'converter', 'inverter', 'lighting',
      'automotive', 'industrial', 'consumer', 'telecom', 'medical'
    ]
  },
  dimension5: {
    name: '维度5：交期/采购决策',
    keywords: [
      'lead time', 'delivery', 'stock', 'availability', 'MOQ', 'price',
      'cost', 'purchase', 'order', 'buy', 'quote', 'quotation',
      'minimum order', 'bulk', 'volume', 'discount', 'schedule',
      'inventory', 'in stock', 'out of stock', 'backorder', 'urgent'
    ]
  }
};

// 检查单个FAQ覆盖哪些维度
function checkFaqDimensions(faq) {
  const question = faq.question?.toLowerCase() || '';
  const answer = faq.answer?.toLowerCase() || '';
  const text = question + ' ' + answer;

  const coveredDimensions = [];

  for (const [dimKey, dimData] of Object.entries(dimensionKeywords)) {
    const hasKeyword = dimData.keywords.some(keyword =>
      text.includes(keyword.toLowerCase())
    );
    if (hasKeyword) {
      coveredDimensions.push(dimKey);
    }
  }

  return coveredDimensions;
}

// 检查产品FAQ是否符合要求
function checkProductFaqs(product, categoryName, brandName) {
  const issues = [];
  const faqs = product.faqs || [];

  // 检查FAQ数量
  if (faqs.length < 5) {
    issues.push(`❌ FAQ数量不足: 只有${faqs.length}个，需要5-8个`);
  } else if (faqs.length > 8) {
    issues.push(`⚠️ FAQ数量过多: 有${faqs.length}个，建议5-8个`);
  }

  // 检查每个FAQ的字段完整性
  faqs.forEach((faq, index) => {
    if (!faq.question || faq.question.trim().length < 10) {
      issues.push(`❌ FAQ ${index + 1} 问题过短或缺失`);
    }
    if (!faq.answer || faq.answer.length < 200) {
      issues.push(`❌ FAQ ${index + 1} 答案过短(${faq.answer?.length || 0}字符)，需要≥200字`);
    }
    if (!faq.decisionGuide || faq.decisionGuide.trim().length < 10) {
      issues.push(`❌ FAQ ${index + 1} 缺少decisionGuide`);
    }
    if (!faq.keywords || faq.keywords.length === 0) {
      issues.push(`❌ FAQ ${index + 1} 缺少keywords`);
    }
  });

  // 检查五维覆盖
  const dimensionCoverage = {
    dimension1: false,
    dimension2: false,
    dimension3: false,
    dimension4: false,
    dimension5: false
  };

  faqs.forEach(faq => {
    const dims = checkFaqDimensions(faq);
    dims.forEach(dim => {
      dimensionCoverage[dim] = true;
    });
  });

  const missingDimensions = [];
  for (const [dim, covered] of Object.entries(dimensionCoverage)) {
    if (!covered) {
      missingDimensions.push(dimensionKeywords[dim].name);
    }
  }

  return {
    productName: product.partNumber || product.name,
    categoryName,
    faqCount: faqs.length,
    issues,
    dimensionCoverage,
    missingDimensions,
    isCompliant: issues.length === 0 && missingDimensions.length === 0 && faqs.length >= 5 && faqs.length <= 8
  };
}

// 检查品牌的产品FAQ
function checkBrandProductFaqs(brandName) {
  const dataPath = path.join(__dirname, '..', 'data', brandName, 'products.json');

  if (!fs.existsSync(dataPath)) {
    console.log(`❌ 品牌 ${brandName} 的products.json不存在`);
    return null;
  }

  let productsData;
  try {
    productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (error) {
    console.log(`❌ 解析 ${brandName}/products.json 失败: ${error.message}`);
    return null;
  }

  const results = {
    brandName,
    totalProducts: 0,
    compliantProducts: 0,
    nonCompliantProducts: 0,
    productResults: []
  };

  const categories = productsData.categories || [];

  categories.forEach(category => {
    const products = category.products || [];
    products.forEach(product => {
      results.totalProducts++;
      const productResult = checkProductFaqs(product, category.name, brandName);
      results.productResults.push(productResult);

      if (productResult.isCompliant) {
        results.compliantProducts++;
      } else {
        results.nonCompliantProducts++;
      }
    });
  });

  return results;
}

// 打印检查结果
function printResults(results) {
  console.log(`\n============================================================`);
  console.log(`📋 产品详情页FAQ合规检查报告: ${results.brandName}`);
  console.log(`============================================================\n`);

  console.log(`📊 统计信息:`);
  console.log(`   总产品数: ${results.totalProducts}`);
  console.log(`   ✅ 合规产品: ${results.compliantProducts}`);
  console.log(`   ❌ 不合规产品: ${results.nonCompliantProducts}`);
  console.log(`   合规率: ${((results.compliantProducts / results.totalProducts) * 100).toFixed(1)}%\n`);

  // 显示不合规产品详情
  const nonCompliant = results.productResults.filter(r => !r.isCompliant);

  if (nonCompliant.length > 0) {
    console.log(`❌ 不合规产品详情:\n`);

    nonCompliant.forEach((product, idx) => {
      console.log(`\n${idx + 1}. ${product.productName} (${product.categoryName})`);
      console.log(`   FAQ数量: ${product.faqCount}`);

      if (product.issues.length > 0) {
        console.log(`   问题列表:`);
        product.issues.forEach(issue => {
          console.log(`     ${issue}`);
        });
      }

      if (product.missingDimensions.length > 0) {
        console.log(`   缺失维度:`);
        product.missingDimensions.forEach(dim => {
          console.log(`     - ${dim}`);
        });
      }
    });
  } else {
    console.log(`🎉 所有产品FAQ均符合五维要求！\n`);
  }

  // 显示维度覆盖统计
  console.log(`\n📈 五维覆盖统计:`);
  const dimensionStats = {
    dimension1: 0,
    dimension2: 0,
    dimension3: 0,
    dimension4: 0,
    dimension5: 0
  };

  results.productResults.forEach(product => {
    for (const [dim, covered] of Object.entries(product.dimensionCoverage)) {
      if (covered) dimensionStats[dim]++;
    }
  });

  for (const [dim, count] of Object.entries(dimensionStats)) {
    const percentage = ((count / results.totalProducts) * 100).toFixed(1);
    const status = count === results.totalProducts ? '✅' : '⚠️';
    console.log(`   ${status} ${dimensionKeywords[dim].name}: ${count}/${results.totalProducts} (${percentage}%)`);
  }

  console.log(`\n============================================================`);
}

// 主函数
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('用法:');
    console.log('  node scripts/check-product-faq-compliance.js [brand-name]  检查指定品牌');
    console.log('  node scripts/check-product-faq-compliance.js --all          检查所有品牌');
    process.exit(1);
  }

  if (args[0] === '--all') {
    // 检查所有品牌
    const dataDir = path.join(__dirname, '..', 'data');
    const brands = fs.readdirSync(dataDir).filter(item => {
      const itemPath = path.join(dataDir, item);
      return fs.statSync(itemPath).isDirectory() &&
             fs.existsSync(path.join(itemPath, 'products.json'));
    });

    console.log(`🔍 检查 ${brands.length} 个品牌的产品FAQ...\n`);

    let totalProducts = 0;
    let totalCompliant = 0;

    brands.forEach(brand => {
      const results = checkBrandProductFaqs(brand);
      if (results) {
        printResults(results);
        totalProducts += results.totalProducts;
        totalCompliant += results.compliantProducts;
      }
    });

    console.log(`\n============================================================`);
    console.log(`📊 所有品牌汇总:`);
    console.log(`   总产品数: ${totalProducts}`);
    console.log(`   合规产品: ${totalCompliant}`);
    console.log(`   整体合规率: ${((totalCompliant / totalProducts) * 100).toFixed(1)}%`);
    console.log(`============================================================`);
  } else {
    // 检查指定品牌
    const brandName = args[0];
    const results = checkBrandProductFaqs(brandName);
    if (results) {
      printResults(results);
    }
  }
}

main();
