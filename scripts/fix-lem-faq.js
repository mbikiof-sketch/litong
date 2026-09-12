#!/usr/bin/env node
/**
 * LEM品牌产品FAQ修复脚本
 * 为所有产品添加符合五维要求的FAQ
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'lem', 'products.json');

// 读取产品数据
let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取products.json失败:', error.message);
  process.exit(1);
}

// 生成维度3 FAQ（竞品/替代对比）
function generateDim3Faq(product) {
  const partNumber = product.partNumber;
  const isClosedLoop = product.specifications.Accuracy && product.specifications.Accuracy.includes('0.5');
  
  if (isClosedLoop) {
    return {
      question: `How does the ${partNumber} compare to open-loop alternatives?`,
      answer: `The ${partNumber} is a closed-loop Hall effect sensor that offers significant advantages over open-loop alternatives like the HLSR series. Closed-loop technology provides superior accuracy (0.5% vs 1%), better linearity (0.1% vs 1%), lower temperature drift, faster response time (<1μs vs 3.5μs), and higher bandwidth (200kHz vs 100kHz). However, closed-loop sensors require dual ±15V supplies, consume more power, and cost approximately 2-3x more than open-loop equivalents. For applications requiring precision better than 1%, the ${partNumber} is essential. For cost-sensitive applications where 1-2% accuracy is acceptable, HLSR series offers a more economical solution. The choice depends on your accuracy requirements, budget constraints, and system complexity tolerance.`,
      decisionGuide: `Choose ${partNumber} for precision applications requiring <1% accuracy. For cost-sensitive applications with 1-2% accuracy tolerance, consider HLSR series. Contact our FAE team for detailed comparison and selection guidance.`,
      keywords: ["closed-loop vs open-loop", "LEM comparison", "sensor selection"]
    };
  } else {
    return {
      question: `How does the ${partNumber} compare to closed-loop alternatives?`,
      answer: `The ${partNumber} is an open-loop Hall effect sensor that offers a cost-effective alternative to closed-loop sensors like the CAS series. Open-loop technology provides adequate accuracy (1%) for most industrial applications at significantly lower cost (typically 1/3 the price of closed-loop). The ${partNumber} operates from a single 5V or 3.3V supply, consumes less power, and has a more compact form factor. However, it has higher temperature drift (0.5% per 10°C), slower response time (3.5μs), and lower bandwidth (100kHz) compared to closed-loop alternatives. For general-purpose current monitoring, motor protection, and cost-sensitive applications, the ${partNumber} is an excellent choice. For precision measurement, servo control, or high-frequency applications, closed-loop sensors are recommended.`,
      decisionGuide: `Choose ${partNumber} for cost-sensitive applications requiring 1% accuracy. For precision applications requiring <1% accuracy, consider CAS series closed-loop sensors. Contact our FAE team for selection guidance.`,
      keywords: ["open-loop vs closed-loop", "LEM comparison", "cost-effective sensor"]
    };
  }
}

// 生成维度5 FAQ（交期/采购决策）
function generateDim5Faq(product) {
  const partNumber = product.partNumber;
  const isAutomotive = partNumber.includes('HO') || partNumber.includes('HMSR');
  const leadTime = isAutomotive ? '6-8 weeks' : '2-4 weeks';
  const moq = isAutomotive ? 50 : 5;
  
  return {
    question: `What is the typical lead time and MOQ for the ${partNumber}?`,
    answer: `Standard lead time for ${partNumber} is ${leadTime} from LEM manufacturing. BeiLuo Electronics maintains strategic inventory for popular LEM sensors, enabling 1-3 day delivery for sample quantities (1-10 pieces). Standard MOQ is ${moq} pieces with volume pricing tiers at 100, 500, and 1,000 pieces. Volume discounts range from 15% to 35% off standard pricing depending on quantity and commitment. For high-volume production (10,000+ pieces annually), we offer scheduled delivery programs with preferential pricing and guaranteed allocation. Emergency air freight options are available to reduce lead time by 1-2 weeks. We also support consignment inventory programs for qualified automotive and industrial customers with predictable demand patterns.`,
    decisionGuide: `Plan for ${leadTime} lead time for production orders. For immediate prototyping, check our local stock availability. For high-volume projects, contact our sales team for volume pricing and scheduled delivery programs to optimize your supply chain.`,
    keywords: ["lead time", "MOQ", "LEM pricing", "delivery schedule"]
  };
}

// 修复所有产品的FAQ
let fixedCount = 0;
const categories = productsData.categories || [];

categories.forEach(category => {
  const products = category.products || [];
  
  products.forEach(product => {
    const currentFaqs = product.faqs || [];
    let needsFix = false;
    
    // 检查是否缺少维度3 FAQ
    const hasDim3 = currentFaqs.some(faq => 
      faq.question.toLowerCase().includes('compare') || 
      faq.question.toLowerCase().includes('vs') ||
      faq.question.toLowerCase().includes('alternative')
    );
    
    // 检查是否缺少维度5 FAQ
    const hasDim5 = currentFaqs.some(faq => 
      faq.question.toLowerCase().includes('lead time') || 
      faq.question.toLowerCase().includes('moq') ||
      faq.question.toLowerCase().includes('price')
    );
    
    // 检查是否有重复的FAQ
    const questions = currentFaqs.map(f => f.question);
    const uniqueQuestions = [...new Set(questions)];
    const hasDuplicates = questions.length !== uniqueQuestions.length;
    
    if (!hasDim3 || !hasDim5 || hasDuplicates) {
      needsFix = true;
      console.log(`修复产品: ${product.partNumber}`);
      
      // 移除重复的FAQ
      const seen = new Set();
      product.faqs = currentFaqs.filter(faq => {
        if (seen.has(faq.question)) {
          return false;
        }
        seen.add(faq.question);
        return true;
      });
      
      // 添加维度3 FAQ（如果不存在）
      if (!hasDim3) {
        product.faqs.push(generateDim3Faq(product));
        console.log(`  添加维度3 FAQ: 竞品对比`);
      }
      
      // 添加维度5 FAQ（如果不存在）
      if (!hasDim5) {
        product.faqs.push(generateDim5Faq(product));
        console.log(`  添加维度5 FAQ: 交期/采购`);
      }
      
      fixedCount++;
    }
  });
});

// 保存修复后的数据
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 修复完成! 共修复 ${fixedCount} 个产品的FAQ`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
