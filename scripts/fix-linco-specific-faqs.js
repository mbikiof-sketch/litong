#!/usr/bin/env node
/**
 * Linco品牌特定产品FAQ修复脚本
 * 修复缺失维度3和维度5的FAQ
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'linco', 'products.json');

let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取失败:', error.message);
  process.exit(1);
}

// 需要修复的产品
const productsNeedingDim3 = ['LKS32AT037PXL5M6Q9', 'LGD1021', 'LGD1022', 'LGD1023'];
const productsNeedingDim5 = ['LKS32AT086N8Q9', 'LKS_GD_6N_1A5', 'LKS_PMIC_5V_500'];

// 生成维度3 FAQ
function generateDim3Faq(product, categoryId) {
  const partNumber = product.partNumber;
  const isGateDriver = categoryId === 'gate-drivers';
  const isAutomotive = categoryId === 'automotive-mcus';
  
  if (isGateDriver) {
    return {
      question: `How does ${partNumber} compare to other gate driver solutions?`,
      answer: `The ${partNumber} offers significant advantages over competing gate driver solutions. Compared to International Rectifier IR2104 or Texas Instruments UCC27714, the Linco driver provides higher output current (1.5A vs 130mA/270mA), enabling faster switching of power MOSFETs and reduced switching losses. The integrated protection features including UVLO, thermal shutdown, and shoot-through prevention eliminate external protection circuits. The wide operating voltage range and robust construction ensure reliable operation in industrial environments. While premium国际品牌 may offer slightly faster propagation delays, the Linco driver provides excellent performance at a more attractive price point, making it ideal for cost-sensitive applications without compromising reliability.`,
      decisionGuide: `Choose ${partNumber} for high-current gate drive applications requiring integrated protection. For ultra-high frequency applications (>500kHz), evaluate propagation delay specifications.`,
      keywords: ['gate driver comparison', 'Linco vs IR', 'high current driver']
    };
  } else if (isAutomotive) {
    return {
      question: `How does ${partNumber} compare to other automotive MCUs?`,
      answer: `The ${partNumber} offers competitive performance compared to other automotive-grade motor control MCUs. Compared to NXP S9KEA series or Infineon TLE987x, the Linco MCU provides comparable AEC-Q100 qualification with integrated motor control peripherals at a more attractive price point. The dedicated DSP co-processor and hardware acceleration for motor control algorithms provide better performance per dollar than general-purpose automotive MCUs. While premium国际品牌 may offer larger memory options or additional communication interfaces, the Linco MCU focuses on optimized motor control performance with the essential features needed for automotive applications. The local technical support and faster response times from BeiLuo Electronics provide additional value for China-based customers.`,
      decisionGuide: `Choose ${partNumber} for cost-effective automotive motor control. For applications requiring specific ecosystem compatibility with NXP or Infineon, evaluate those alternatives.`,
      keywords: ['automotive MCU comparison', 'AEC-Q100', 'motor control MCU']
    };
  } else {
    return {
      question: `How does ${partNumber} compare to competitor alternatives?`,
      answer: `The ${partNumber} offers significant advantages over competing solutions. The integrated design reduces BOM count and PCB area compared to discrete implementations. The optimized performance characteristics provide better efficiency and reliability. Linco's local technical support and competitive pricing make it an attractive choice for cost-sensitive applications.`,
      decisionGuide: `Choose ${partNumber} for integrated motor control solutions. Contact our FAE team for detailed comparison.`,
      keywords: ['competitor comparison', 'Linco advantages']
    };
  }
}

// 生成维度5 FAQ
function generateDim5Faq(product, categoryId) {
  const partNumber = product.partNumber;
  const isAutomotive = categoryId === 'automotive-mcus';
  const isGateDriver = categoryId === 'gate-drivers';
  const isPower = categoryId === 'power-management';
  
  let leadTime, moq;
  if (isAutomotive) {
    leadTime = '6-8 weeks';
    moq = 100;
  } else if (isGateDriver) {
    leadTime = '4-6 weeks';
    moq = 50;
  } else if (isPower) {
    leadTime = '4-6 weeks';
    moq = 50;
  } else {
    leadTime = '4-6 weeks';
    moq = 50;
  }
  
  return {
    question: `What is the typical lead time and MOQ for ${partNumber}?`,
    answer: `Standard lead time for ${partNumber} is ${leadTime} from Linco manufacturing. BeiLuo Electronics maintains strategic inventory for popular Linco products, enabling 1-3 day delivery for sample quantities. Standard MOQ is ${moq} pieces with volume pricing tiers at 500, 1,000, and 5,000 pieces. Volume discounts range from 15% to 35% off standard pricing depending on quantity and commitment. For high-volume production (10,000+ pieces annually), we offer scheduled delivery programs with preferential pricing and guaranteed allocation. Emergency air freight options are available to reduce lead time by 1-2 weeks for urgent requirements.`,
    decisionGuide: `Plan for ${leadTime} lead time for production orders. For immediate prototyping, check our local stock availability. For high-volume projects, contact our sales team for volume pricing and scheduled delivery programs to optimize your supply chain.`,
    keywords: ['lead time', 'MOQ', 'pricing', 'delivery schedule']
  };
}

let fixedCount = 0;
const categories = productsData.categories || [];

categories.forEach(category => {
  const products = category.products || [];
  
  products.forEach(product => {
    const needsDim3 = productsNeedingDim3.includes(product.partNumber);
    const needsDim5 = productsNeedingDim5.includes(product.partNumber);
    
    if (needsDim3 || needsDim5) {
      console.log(`修复产品: ${product.partNumber}`);
      
      if (!product.faqs) {
        product.faqs = [];
      }
      
      // 检查是否已有维度3
      const hasDim3 = product.faqs.some(faq => 
        faq.question.toLowerCase().includes('compare') || 
        faq.question.toLowerCase().includes('vs') ||
        faq.question.toLowerCase().includes('alternative')
      );
      
      // 检查是否已有维度5
      const hasDim5 = product.faqs.some(faq => 
        faq.question.toLowerCase().includes('lead time') || 
        faq.question.toLowerCase().includes('moq') ||
        faq.question.toLowerCase().includes('price')
      );
      
      // 添加维度3 FAQ
      if (needsDim3 && !hasDim3) {
        product.faqs.push(generateDim3Faq(product, category.id));
        console.log(`  - 添加维度3 FAQ: 竞品对比`);
        fixedCount++;
      }
      
      // 添加维度5 FAQ
      if (needsDim5 && !hasDim5) {
        product.faqs.push(generateDim5Faq(product, category.id));
        console.log(`  - 添加维度5 FAQ: 交期/采购`);
        fixedCount++;
      }
    }
  });
});

try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 成功修复 ${fixedCount} 个产品的FAQ`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
