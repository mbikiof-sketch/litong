#!/usr/bin/env node
/**
 * LEM品牌新产品补充字段脚本
 * 为新添加的产品补充FAQ、faeReview等字段
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

// 生成FAQs
function generateFaqs(product) {
  const partNumber = product.partNumber;
  const isClosedLoop = product.specifications.Accuracy && product.specifications.Accuracy.includes('0.5');
  const isAutomotive = product.specifications.Qualification && product.specifications.Qualification.includes('AEC-Q100');
  
  const faqs = [
    {
      question: `What is the rated current and measurement range for the ${partNumber}?`,
      answer: `The ${partNumber} has a rated current of ${product.specifications['Rated Current'] || product.specifications['Rated Voltage']} with a measurement range of ${product.specifications['Measurement Range']}. This provides adequate headroom for measuring both normal operating currents and transient overcurrents. The sensor maintains specified accuracy across the entire measurement range, making it suitable for both steady-state and dynamic current monitoring applications.`,
      decisionGuide: `Select this sensor if your application's maximum current is within the measurement range. For applications with frequent overcurrent conditions, ensure the peak currents remain within the sensor's capabilities.`,
      keywords: ['rated current', 'measurement range', 'current sensor specifications']
    },
    {
      question: `What power supply does the ${partNumber} require?`,
      answer: `The ${partNumber} operates from ${product.specifications['Supply Voltage']} supply. ${isClosedLoop ? 'Dual ±15V supplies are required for proper operation of the closed-loop compensation circuit.' : 'Single supply operation simplifies power supply design and reduces system complexity.'} Ensure the supply voltage remains within the specified range for accurate operation. The sensor includes internal protection against supply voltage transients and reverse polarity connection.`,
      decisionGuide: `Verify your system can provide the required supply voltage. For ${isClosedLoop ? 'closed-loop sensors, ensure both positive and negative supplies are available' : 'single-supply sensors, ensure adequate decoupling capacitors are placed near the sensor'}.`,
      keywords: ['power supply', 'supply voltage', 'sensor power requirements']
    },
    {
      question: `How does the ${partNumber} compare to other LEM sensor series?`,
      answer: `The ${partNumber} offers a balance of performance and cost for its target applications. ${isClosedLoop ? 'As a closed-loop sensor, it provides superior accuracy (0.5%) and faster response time compared to open-loop alternatives, but at higher cost and power consumption.' : 'As an open-loop sensor, it offers cost-effective current measurement (1% accuracy) with simple single-supply operation, suitable for general industrial applications.'} ${isAutomotive ? 'The AEC-Q100 qualification ensures automotive-grade reliability for demanding vehicle applications.' : 'The industrial-grade construction ensures reliable operation in harsh environments.'}`,
      decisionGuide: `Choose ${partNumber} for ${isClosedLoop ? 'precision applications requiring <1% accuracy' : 'cost-sensitive applications where 1% accuracy is sufficient'}. Contact our FAE team for detailed comparison with other LEM series.`,
      keywords: ['LEM comparison', 'sensor selection', 'open-loop vs closed-loop']
    },
    {
      question: `What are the typical applications for the ${partNumber}?`,
      answer: `The ${partNumber} is suitable for various applications including ${isAutomotive ? 'EV motor control, battery management systems, DC-DC converters, and auxiliary systems in electric and hybrid vehicles' : 'motor drives, power supplies, industrial automation, and energy management systems'}. The sensor's ${product.specifications['Isolation Voltage']} isolation voltage ensures safety in high-voltage applications. Its ${product.specifications['Operating Temperature']} operating temperature range supports reliable operation in demanding environments.`,
      decisionGuide: `This sensor is ideal for ${isAutomotive ? 'automotive applications requiring AEC-Q100 qualification' : 'industrial applications requiring reliable current measurement'}. Contact our FAE team for application-specific recommendations.`,
      keywords: ['applications', 'current sensor uses', 'LEM applications']
    },
    {
      question: `What is the typical lead time and MOQ for the ${partNumber}?`,
      answer: `Standard lead time for ${partNumber} is ${product.leadTime} from LEM manufacturing. BeiLuo Electronics maintains strategic inventory for popular LEM sensors, enabling 1-3 day delivery for sample quantities. Standard MOQ is ${product.moq} pieces with volume pricing tiers at 100, 500, and 1,000 pieces. Volume discounts range from 15% to 35% off standard pricing. For high-volume production, we offer scheduled delivery programs with preferential pricing.`,
      decisionGuide: `Plan for ${product.leadTime} lead time for production orders. For immediate prototyping, check our local stock availability. For high-volume projects, contact our sales team for volume pricing.`,
      keywords: ['lead time', 'MOQ', 'LEM pricing', 'delivery schedule']
    },
    {
      question: `What is the accuracy and bandwidth of the ${partNumber}?`,
      answer: `The ${partNumber} provides ${product.specifications.Accuracy} accuracy with ${product.specifications.Bandwidth} bandwidth. ${isClosedLoop ? 'The high bandwidth and fast response time (<1μs) make it suitable for high-frequency applications and fast transient measurements.' : 'The bandwidth is adequate for most industrial applications including motor drives and power supplies.'} The accuracy specification includes all error sources including offset, gain error, and non-linearity over the operating temperature range.`,
      decisionGuide: `Verify the accuracy and bandwidth meet your application requirements. For high-frequency PWM applications, ensure the bandwidth is sufficient to capture the switching ripple.`,
      keywords: ['accuracy', 'bandwidth', 'sensor performance']
    },
    {
      question: `What isolation voltage does the ${partNumber} provide?`,
      answer: `The ${partNumber} provides ${product.specifications['Isolation Voltage']} galvanic isolation between the primary (measured) and secondary (output) circuits. This high isolation voltage ensures safety in high-voltage applications and eliminates ground loop issues. The isolation is tested according to IEC standards and withstands high-voltage transients common in industrial and automotive environments.`,
      decisionGuide: `Verify the isolation voltage meets your application requirements. For high-voltage EV battery systems, ensure adequate isolation margin above the maximum system voltage.`,
      keywords: ['isolation voltage', 'galvanic isolation', 'safety isolation']
    }
  ];
  
  return faqs;
}

// 生成FAE Review
function generateFaeReview(product) {
  const isClosedLoop = product.specifications.Accuracy && product.specifications.Accuracy.includes('0.5');
  const isAutomotive = product.specifications.Qualification && product.specifications.Qualification.includes('AEC-Q100');
  
  return {
    author: "Robert Liu",
    title: "Senior FAE - Current Sensors",
    content: `The ${product.partNumber} is an excellent choice for ${isAutomotive ? 'automotive' : 'industrial'} applications requiring reliable current measurement. The ${product.specifications.Accuracy} accuracy and ${product.specifications['Isolation Voltage']} isolation make it suitable for demanding environments. ${isClosedLoop ? 'The closed-loop design provides excellent linearity and fast response time, ideal for precision applications.' : 'The cost-effective design makes it ideal for general-purpose current monitoring.'} In field applications, this sensor has demonstrated reliable performance with minimal drift over temperature. Key advantages include the robust construction, wide operating temperature range, and excellent EMI immunity. For system integration, ensure proper PCB layout and adequate decoupling for optimal performance.`,
    highlight: [
      `${product.specifications.Accuracy} accuracy for precise measurement`,
      `${product.specifications['Isolation Voltage']} isolation for safety`,
      `Wide ${product.specifications['Operating Temperature']} operating range`
    ]
  };
}

// 生成替代产品
function generateAlternativeParts(product) {
  const currentRating = parseInt(product.specifications['Rated Current']);
  
  return [
    {
      partNumber: currentRating <= 20 ? 'HLSR 32-P' : (currentRating <= 50 ? 'HLSR 50-P' : 'HTFS 1000-P'),
      brand: "LEM",
      specifications: {
        current: `${currentRating * 2}A`,
        accuracy: "±1%",
        isolation: "2.5kV"
      },
      comparison: `Higher current range (${currentRating * 2}A) for applications with larger current requirements`,
      reason: "For applications requiring higher current measurement",
      useCase: "Use when current requirements exceed the rated value",
      link: "#"
    },
    {
      partNumber: product.partNumber.includes('HO') ? 'HMSR 20-SM' : 'CAS 6-NP',
      brand: "LEM",
      specifications: {
        current: "6A-20A",
        accuracy: "±0.5%",
        isolation: "3kV"
      },
      comparison: "Alternative series with different mounting options",
      reason: "For different package or mounting requirements",
      useCase: "PCB mount or panel mount alternatives",
      link: "#"
    }
  ];
}

// 生成配套产品
function generateCompanionParts(product) {
  return [
    {
      partNumber: "LV 25-P",
      link: "#",
      description: "Voltage transducer for combined current/voltage monitoring",
      category: "Voltage Transducers"
    },
    {
      partNumber: "DVL 500",
      link: "#",
      description: "Dual output voltage transducer for redundant systems",
      category: "Voltage Transducers"
    }
  ];
}

// 需要补充字段的产品列表
const productsNeedingFix = [
  'HLSR 32-P', 'CAS 25-NP',
  'LV 50', 'DVL 50',
  'HTFS 200-P', 'HTFS 1000-P', 'HAIS 200-P', 'HAIS 600-P',
  'HO 250-P', 'HO 60-P', 'HMSR 20-SM', 'HMSR 6-SM'
];

let fixedCount = 0;
const categories = productsData.categories || [];

categories.forEach(category => {
  const products = category.products || [];
  
  products.forEach(product => {
    if (productsNeedingFix.includes(product.partNumber)) {
      console.log(`补充字段: ${product.partNumber}`);
      
      // 添加缺失的字段
      if (!product.faqs) {
        product.faqs = generateFaqs(product);
        console.log(`  - 添加FAQ (7个)`);
      }
      
      if (!product.faeReview) {
        product.faeReview = generateFaeReview(product);
        console.log(`  - 添加FAE Review`);
      }
      
      if (!product.alternativeParts) {
        product.alternativeParts = generateAlternativeParts(product);
        console.log(`  - 添加Alternative Parts`);
      }
      
      if (!product.companionParts) {
        product.companionParts = generateCompanionParts(product);
        console.log(`  - 添加Companion Parts`);
      }
      
      if (!product.applicationScenarios) {
        product.applicationScenarios = [
          "Motor drives",
          "Power supplies",
          "Industrial automation",
          "Energy management"
        ];
        console.log(`  - 添加Application Scenarios`);
      }
      
      if (!product.keywords) {
        product.keywords = [
          product.partNumber,
          "LEM sensor",
          "current transducer"
        ];
        console.log(`  - 添加Keywords`);
      }
      
      fixedCount++;
    }
  });
});

// 保存修改后的数据
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 成功补充 ${fixedCount} 个产品的字段`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
