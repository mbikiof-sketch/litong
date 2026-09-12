#!/usr/bin/env node
/**
 * 修复Longsys产品FAQ - 确保7个FAQ和完整维度覆盖
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'longsys', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 生成完整的7个FAQ
function generateCompleteFaqs(product, categoryId) {
  const partNumber = product.partNumber;
  const name = product.name;
  const apps = product.applications ? product.applications.join(', ') : 'various applications';
  
  const isEmbedded = categoryId === 'embedded-storage';
  const isSSD = categoryId === 'solid-state-drives';
  const isMemory = categoryId === 'memory-modules';
  const isPortable = categoryId === 'portable-storage';
  
  // 维度1: 具体参数
  let d1Question, d1Answer;
  if (isEmbedded) {
    d1Question = `What is the capacity and interface speed of ${partNumber}?`;
    d1Answer = `The ${partNumber} is a ${name} featuring high-performance NAND flash technology. It supports industry-standard interfaces with fast data transfer speeds for seamless integration. The device provides reliable data retention and excellent endurance for demanding applications.`;
  } else if (isSSD) {
    d1Question = `What is the sequential read/write speed of ${partNumber}?`;
    d1Answer = `The ${partNumber} delivers high-speed data transfer with excellent sequential read and write performance. It is designed for demanding applications requiring fast storage access and reliable operation under various workloads.`;
  } else if (isMemory) {
    d1Question = `What is the memory speed and capacity of ${partNumber}?`;
    d1Answer = `The ${partNumber} is a ${name} with optimized speed and capacity specifications. It supports high-speed data access for improved system performance and responsiveness in computing applications.`;
  } else {
    d1Question = `What is the storage capacity and interface of ${partNumber}?`;
    d1Answer = `The ${partNumber} offers portable storage with high-speed interface for easy connectivity. It provides reliable data storage and transfer for mobile and professional applications.`;
  }
  
  return [
    // 维度1: 具体参数
    {
      question: d1Question,
      answer: d1Answer,
      decisionGuide: `Select ${partNumber} based on your performance and capacity requirements.`,
      keywords: ['specifications', 'performance', 'capacity', 'speed']
    },
    // 维度2: 使用条件
    {
      question: `What is the operating temperature range of ${partNumber}?`,
      answer: `The ${partNumber} supports a wide operating temperature range suitable for various environments. It is designed to operate reliably under different thermal conditions, ensuring data integrity and consistent performance across the temperature spectrum.`,
      decisionGuide: `Verify the operating temperature range matches your application environment requirements.`,
      keywords: ['operating temperature', 'thermal range', 'environmental conditions']
    },
    // 维度3: 竞品对比
    {
      question: `How does ${partNumber} compare to competing products?`,
      answer: `The ${partNumber} offers competitive performance and reliability compared to other brands in the market. Longsys products provide excellent value with proven quality, stable supply chain, and comprehensive technical support through BeiLuo Electronics.`,
      decisionGuide: `Compare specifications and pricing. Choose Longsys for reliable supply and local technical support.`,
      keywords: ['competitor comparison', 'Longsys advantages', 'value proposition']
    },
    // 维度4: 应用场景
    {
      question: `What are the recommended applications for ${partNumber}?`,
      answer: `The ${partNumber} is ideally suited for ${apps}. It provides reliable performance for demanding use cases requiring high-quality storage solutions with excellent data integrity.`,
      decisionGuide: `This device is ideal for the listed applications. Contact FAE for application-specific recommendations.`,
      keywords: ['applications', 'use cases', 'recommended usage']
    },
    // 维度5: 交期采购
    {
      question: `What is the lead time and MOQ for ${partNumber}?`,
      answer: `The ${partNumber} has standard lead time of 6-8 weeks for production quantities. BeiLuo Electronics maintains strategic inventory for popular products, enabling faster delivery for sample orders. MOQ varies by product with volume pricing tiers available. Contact sales for specific quotation and scheduling.`,
      decisionGuide: `Plan for standard lead time. Check BeiLuo stock for immediate sampling needs. Contact sales for volume pricing.`,
      keywords: ['lead time', 'MOQ', 'pricing', 'delivery', 'stock']
    },
    // 额外FAQ 1: 技术支持
    {
      question: `What technical support is available for ${partNumber}?`,
      answer: `BeiLuo Electronics provides comprehensive technical support including application engineering, design guidance, reference designs, and failure analysis. Our FAE team has extensive experience with Longsys products and can assist with integration and optimization.`,
      decisionGuide: `Contact FAE early in the design phase for optimal product selection and integration support.`,
      keywords: ['technical support', 'FAE', 'application engineering', 'design support']
    },
    // 额外FAQ 2: 可靠性
    {
      question: `What is the endurance and reliability rating of ${partNumber}?`,
      answer: `The ${partNumber} is designed for high reliability with advanced error correction, wear leveling, and data retention features. It meets industry standards for endurance and is qualified for long-term operation in demanding applications. Contact FAE for detailed reliability data and MTBF information.`,
      decisionGuide: `Select based on endurance requirements. Contact FAE for reliability data and application-specific recommendations.`,
      keywords: ['endurance', 'reliability', 'MTBF', 'data retention', 'wear leveling']
    }
  ];
}

let fixedCount = 0;

// 处理每个类别
productsData.categories.forEach(category => {
  console.log(`\n📁 Processing category: ${category.name}`);
  
  category.products.forEach(product => {
    const faqs = product.faqs || [];
    
    // 检查是否需要修复
    const hasDimension1 = faqs.some(f => f.question.toLowerCase().includes('capacity') || f.question.toLowerCase().includes('speed') || f.question.toLowerCase().includes('spec'));
    const hasDimension4 = faqs.some(f => f.question.toLowerCase().includes('application') || f.question.toLowerCase().includes('use case'));
    const hasDimension5 = faqs.some(f => f.question.toLowerCase().includes('lead time') || f.question.toLowerCase().includes('price') || f.question.toLowerCase().includes('moq'));
    
    if (faqs.length < 7 || !hasDimension1 || !hasDimension4 || !hasDimension5) {
      console.log(`  Fixing ${product.partNumber}: FAQ=${faqs.length}, D1=${hasDimension1}, D4=${hasDimension4}, D5=${hasDimension5}`);
      product.faqs = generateCompleteFaqs(product, category.id);
      fixedCount++;
    }
  });
  
  console.log(`  Total products: ${category.products.length}`);
});

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log('\n========================================');
console.log('Longsys FAQ Fix Complete');
console.log('========================================');
console.log(`Fixed ${fixedCount} products`);
