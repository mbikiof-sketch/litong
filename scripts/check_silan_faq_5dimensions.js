/**
 * 检查Silan产品FAQ是否覆盖5个维度：
 * 1. 具体参数/能不能用
 * 2. 使用条件/怎么选用
 * 3. 竞品/替代对比
 * 4. 应用场景
 * 5. 交期状况
 */

const fs = require('fs');
const path = require('path');

const brand = 'silan';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 检查FAQ覆盖哪些维度
function checkFaqDimensions(faqs, productName, categoryName) {
  const dimensions = {
    parameter: false,      // 具体参数
    usage: false,          // 使用条件
    comparison: false,     // 竞品对比
    application: false,    // 应用场景
    leadtime: false        // 交期状况
  };
  
  const keywords = {
    parameter: ['current', 'voltage', 'rating', 'power', 'temperature', 'specification', 'parameter', 'rating', 'capability'],
    usage: ['use', 'select', 'choose', 'condition', 'operating', 'how to', 'recommendation', 'thermal', 'heatsink', 'layout'],
    comparison: ['compare', 'competitor', 'alternative', 'vs', 'difference', 'similar', 'instead', 'replace'],
    application: ['application', 'use case', 'suitable for', 'used in', 'typical', 'scenario', 'where'],
    leadtime: ['lead time', 'delivery', 'stock', 'inventory', 'moq', 'minimum order', 'ship', 'availability', 'price', 'cost']
  };
  
  for (const faq of faqs) {
    const question = faq.question.toLowerCase();
    
    for (const [dim, words] of Object.entries(keywords)) {
      for (const word of words) {
        if (question.includes(word)) {
          dimensions[dim] = true;
          break;
        }
      }
    }
  }
  
  return dimensions;
}

// 生成交期状况FAQ
function generateLeadTimeFaq(product, categoryName) {
  const moq = product.moq || 1000;
  const leadTime = product.leadTime || '4-6 weeks';
  const stock = product.stock !== false;
  
  return {
    "question": `What is the lead time and MOQ for ${product.partNumber}?`,
    "answer": `The ${product.partNumber} has the following ordering information: (1) Lead time - ${leadTime} for standard orders. Expedited delivery may be available for urgent requirements, subject to factory capacity and current order backlog. (2) MOQ (Minimum Order Quantity) - ${moq} pieces for standard packaging. Sample quantities (10-50 pieces) are available for initial evaluation and prototyping. (3) Stock status - ${stock ? 'Currently available from stock with immediate shipment for sample quantities. Production volumes subject to lead time.' : 'Subject to factory production schedule. Please contact sales for current availability.'} (4) Pricing - volume discounts available for orders above 10K, 50K, and 100K pieces annually. Contact our sales team for detailed pricing based on your forecast. (5) Samples - free samples available for qualified projects with production potential. Sample lead time is typically 1-2 weeks. (6) Payment terms - standard NET 30 for established customers; prepayment or credit card for new customers until credit is established. For large volume contracts, quarterly or annual pricing agreements can be negotiated to secure supply and optimize costs.`,
    "decisionGuide": `Plan inventory with ${leadTime} lead time; order samples for evaluation before committing to production volumes.`,
    "keywords": [
      `${product.partNumber} lead time`,
      "MOQ minimum order",
      "delivery schedule"
    ]
  };
}

console.log('检查Silan产品FAQ 5维度覆盖情况...\n');

let productsNeedFix = [];

for (const category of productsData.categories) {
  console.log(`\n分类: ${category.name}`);
  
  if (!category.products) continue;
  
  for (const product of category.products) {
    if (!product.faqs || product.faqs.length === 0) continue;
    
    const dims = checkFaqDimensions(product.faqs, product.partNumber, category.name);
    
    const missing = [];
    if (!dims.parameter) missing.push('具体参数');
    if (!dims.usage) missing.push('使用条件');
    if (!dims.comparison) missing.push('竞品对比');
    if (!dims.application) missing.push('应用场景');
    if (!dims.leadtime) missing.push('交期状况');
    
    if (missing.length > 0) {
      console.log(`  ${product.partNumber}: 缺少 [${missing.join(', ')}]`);
      productsNeedFix.push({
        product,
        category: category.name,
        missing: missing,
        dimensions: dims
      });
    } else {
      console.log(`  ${product.partNumber}: ✅ 5维度全覆盖`);
    }
  }
}

console.log(`\n\n共 ${productsNeedFix.length} 个产品需要补充FAQ`);

// 为缺少交期状况的产品添加FAQ
let addedCount = 0;
for (const item of productsNeedFix) {
  if (item.missing.includes('交期状况')) {
    const leadTimeFaq = generateLeadTimeFaq(item.product, item.category);
    
    // 检查是否已存在类似问题
    const exists = item.product.faqs.some(f => 
      f.question.toLowerCase().includes('lead time') || 
      f.question.toLowerCase().includes('moq')
    );
    
    if (!exists) {
      item.product.faqs.push(leadTimeFaq);
      console.log(`  已添加 ${item.product.partNumber} 的交期FAQ`);
      addedCount++;
    }
  }
}

if (addedCount > 0) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
  console.log(`\n✅ 已保存，共添加 ${addedCount} 个交期FAQ`);
} else {
  console.log('\n✅ 所有产品已有交期FAQ');
}
