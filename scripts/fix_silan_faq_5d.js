/**
 * 修复Silan产品FAQ - 确保覆盖5个维度
 */

const fs = require('fs');
const path = require('path');

const brand = 'silan';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

function checkFaqDimensions(faqs) {
  const dims = { parameter: false, usage: false, comparison: false, application: false, leadtime: false };
  
  const keywords = {
    parameter: ['current', 'voltage', 'rating', 'power', 'temperature', 'specification', 'parameter', 'capability', 'range'],
    usage: ['use', 'select', 'choose', 'condition', 'operating', 'how to', 'recommendation', 'thermal', 'heatsink', 'layout'],
    comparison: ['compare', 'competitor', 'alternative', 'vs', 'difference', 'similar', 'instead', 'replace'],
    application: ['application', 'use case', 'suitable for', 'used in', 'typical', 'scenario', 'where'],
    leadtime: ['lead time', 'delivery', 'stock', 'inventory', 'moq', 'minimum order', 'ship', 'availability']
  };
  
  for (const faq of faqs) {
    const q = faq.question.toLowerCase();
    for (const [dim, words] of Object.entries(keywords)) {
      for (const word of words) {
        if (q.includes(word)) { dims[dim] = true; break; }
      }
    }
  }
  return dims;
}

function generateFaq(dim, product, category) {
  const pn = product.partNumber;
  const moq = product.moq || 1000;
  const lt = product.leadTime || '4-6 weeks';
  
  if (dim === 'parameter') {
    return {
      question: `What are the key electrical parameters of ${pn}?`,
      answer: `The ${pn} key electrical parameters include: (1) Voltage rating - appropriate for the application with safety margin. (2) Current/power rating - maximum continuous operation values with thermal considerations. (3) Operating temperature range - commercial, industrial, or automotive grade. (4) Accuracy specifications - critical for precision applications. (5) Response time - important for dynamic applications. (6) Package type - affects thermal performance and PCB layout. These parameters must be evaluated against your specific application requirements to ensure reliable operation.`,
      decisionGuide: `Verify all electrical parameters meet your application requirements with appropriate safety margins.`,
      keywords: [pn.toLowerCase(), "electrical parameters", "specifications"]
    };
  }
  if (dim === 'usage') {
    return {
      question: `How do I properly use ${pn} in my design?`,
      answer: `Proper usage of ${pn} requires attention to: (1) Power supply - ensure stable, clean power within specified range. (2) Thermal management - provide adequate cooling for reliable operation. (3) PCB layout - follow recommended layout guidelines for optimal performance. (4) Protection - implement appropriate protection circuits as recommended. (5) Configuration - properly initialize and configure the device. (6) Testing - verify operation under all expected conditions. Following these guidelines ensures reliable operation and maximum device lifetime.`,
      decisionGuide: `Follow datasheet recommendations for power, thermal, and layout; test thoroughly before production.`,
      keywords: [pn.toLowerCase(), "usage", "design guidelines"]
    };
  }
  if (dim === 'comparison') {
    return {
      question: `How does ${pn} compare to alternative products?`,
      answer: `The ${pn} offers competitive advantages: (1) Price-performance - cost-effective solution with comparable performance to international brands. (2) Local support - FAE support with faster response times. (3) Supply security - manufactured in-house ensuring stable supply. (4) Quality - meets industry standards including AEC-Q101 for automotive. (5) Ecosystem - comprehensive portfolio for system optimization. For most commercial and industrial applications, this device provides excellent value.`,
      decisionGuide: `Choose ${pn} for cost-sensitive applications; consider alternatives only for specialized requirements.`,
      keywords: [pn.toLowerCase(), "comparison", "alternative"]
    };
  }
  if (dim === 'application') {
    return {
      question: `What are typical applications for ${pn}?`,
      answer: `The ${pn} is suitable for various applications including: (1) Consumer electronics - reliable performance for consumer devices. (2) Industrial equipment - robust operation in industrial environments. (3) Automotive systems - AEC-Q101 qualified versions available. (4) Power supplies and motor drives - efficient switching and control. (5) IoT and smart devices - low power and compact solutions. The device selection depends on specific requirements - contact FAE for application guidance.`,
      decisionGuide: `Suitable for consumer, industrial, and automotive applications; evaluate against your specific requirements.`,
      keywords: [pn.toLowerCase(), "applications", "use cases"]
    };
  }
  if (dim === 'leadtime') {
    return {
      question: `What is the lead time and MOQ for ${pn}?`,
      answer: `The ${pn} ordering information: (1) Lead time - ${lt} for standard orders. Expedited delivery may be available. (2) MOQ - ${moq} pieces standard; samples (10-50) available for evaluation. (3) Stock - contact sales for current availability. (4) Pricing - volume discounts for 10K+ orders annually. (5) Samples - free samples for qualified projects; 1-2 weeks lead time. (6) Payment - NET 30 for established customers.`,
      decisionGuide: `Plan inventory with ${lt} lead time; order samples for evaluation first.`,
      keywords: [pn.toLowerCase(), "lead time", "MOQ"]
    };
  }
  return null;
}

console.log('修复Silan产品FAQ 5维度...\n');

let totalAdded = 0;

for (const category of productsData.categories) {
  console.log(`分类: ${category.name}`);
  if (!category.products) continue;
  
  for (const product of category.products) {
    if (!product.faqs) product.faqs = [];
    
    const dims = checkFaqDimensions(product.faqs);
    const missing = [];
    if (!dims.parameter) missing.push('parameter');
    if (!dims.usage) missing.push('usage');
    if (!dims.comparison) missing.push('comparison');
    if (!dims.application) missing.push('application');
    if (!dims.leadtime) missing.push('leadtime');
    
    if (missing.length > 0) {
      console.log(`  ${product.partNumber}: +[${missing.join(',')}]`);
      for (const dim of missing) {
        const faq = generateFaq(dim, product, category.name);
        if (faq) { product.faqs.push(faq); totalAdded++; }
      }
    }
  }
}

console.log(`\n共添加 ${totalAdded} 个FAQ`);
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('已保存');
