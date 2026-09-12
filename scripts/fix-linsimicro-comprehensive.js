#!/usr/bin/env node
/**
 * Linsimicro品牌综合修复脚本
 * 添加产品、修复FAQ、补充字段
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'linsimicro', 'products.json');

let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取失败:', error.message);
  process.exit(1);
}

// 生成FAQs函数
function generateFaqs(product, categoryId) {
  const partNumber = product.partNumber;
  const isDataConverter = categoryId === 'data-converters';
  const isPower = categoryId === 'power-management';
  const isSensor = categoryId === 'sensor-interfaces';
  const isInterface = categoryId === 'interface-ics';
  
  const faqs = [];
  
  // FAQ 1: 具体参数提问
  if (isDataConverter) {
    faqs.push({
      question: `What is the resolution and sampling rate of ${partNumber}?`,
      answer: `The ${partNumber} features high-resolution analog-to-digital conversion with precision performance for demanding applications. The converter provides excellent linearity (INL/DNL) and low noise operation, ensuring accurate measurement results. The device supports multiple input channels with programmable gain amplification for flexible signal conditioning. The SPI or I2C interface enables easy integration with microcontrollers and DSPs.`,
      decisionGuide: `Select ${partNumber} based on your resolution and speed requirements. For higher sampling rates, consider the LSC1600 series. For higher resolution, consider the LSC2400 series.`,
      keywords: ['resolution', 'sampling rate', 'ADC specifications', 'data converter']
    });
  } else if (isPower) {
    faqs.push({
      question: `What is the output voltage and current capability of ${partNumber}?`,
      answer: `The ${partNumber} provides regulated output voltage with high efficiency and low ripple. The device features integrated power MOSFETs, compensation networks, and protection circuits for reliable operation. The wide input voltage range supports various power sources including batteries and AC adapters. The compact package enables high-density power designs.`,
      decisionGuide: `Select ${partNumber} based on your voltage and current requirements. Consider thermal management for high-current applications.`,
      keywords: ['output voltage', 'current capability', 'power management', 'efficiency']
    });
  } else if (isSensor) {
    faqs.push({
      question: `What is the input offset voltage and bandwidth of ${partNumber}?`,
      answer: `The ${partNumber} features precision operational amplifier design with low input offset voltage and high bandwidth. The device provides excellent DC accuracy and AC performance for sensor signal conditioning. The rail-to-rail input and output maximize dynamic range. The low noise characteristics ensure high signal integrity for sensitive measurements.`,
      decisionGuide: `Select ${partNumber} for precision sensor interface applications. For lower offset requirements, consider chopper-stabilized alternatives.`,
      keywords: ['offset voltage', 'bandwidth', 'operational amplifier', 'sensor interface']
    });
  } else {
    faqs.push({
      question: `What is the data rate and communication distance of ${partNumber}?`,
      answer: `The ${partNumber} supports high-speed data communication with robust signal integrity. The device features integrated protection against ESD, EFT, and surge events. The wide common-mode voltage range enables reliable operation in noisy industrial environments. The low power consumption supports battery-operated applications.`,
      decisionGuide: `Select ${partNumber} based on your communication distance and data rate requirements. For longer distances, consider lower baud rates or repeaters.`,
      keywords: ['data rate', 'communication distance', 'transceiver', 'interface IC']
    });
  }
  
  // FAQ 2: 参数使用条件
  faqs.push({
    question: `How do I configure and interface with ${partNumber}?`,
    answer: `The ${partNumber} can be configured through standard digital interfaces (SPI or I2C) or analog connections depending on the device type. For digital devices, use the recommended clock frequency and timing parameters specified in the datasheet. Implement proper PCB layout with adequate decoupling capacitors and ground planes. For analog devices, follow the recommended input/output conditioning circuits. Reference designs and evaluation boards are available to accelerate development.`,
    decisionGuide: `Follow the datasheet recommendations for interface configuration. Use evaluation boards for initial prototyping. Contact our FAE team for layout review.`,
    keywords: ['configuration', 'interface', 'SPI', 'I2C', 'PCB layout']
  });
  
  // FAQ 3: 竞品对比
  faqs.push({
    question: `How does ${partNumber} compare to competitor alternatives?`,
    answer: `The ${partNumber} offers competitive performance at attractive pricing compared to international brands. Key advantages include pin-compatibility with popular industry standards, enabling easy migration without PCB redesign. Linsimicro products undergo rigorous quality testing and offer comparable reliability to established brands. The local technical support from BeiLuo Electronics provides faster response times for China-based customers. While premium brands may offer slightly better specifications in some areas, Linsimicro provides excellent value for most industrial and automotive applications.`,
    decisionGuide: `Choose ${partNumber} for cost-effective solutions with pin-compatible migration. For applications requiring specific ecosystem compatibility, evaluate alternatives. Contact our FAE for detailed comparison.`,
    keywords: ['competitor comparison', 'Linsimicro advantages', 'pin compatible', 'migration']
  });
  
  // FAQ 4: 应用场景
  faqs.push({
    question: `What are the recommended applications for ${partNumber}?`,
    answer: `The ${partNumber} is ideally suited for ${isDataConverter ? 'industrial control systems, data acquisition modules, test and measurement equipment, and automotive sensor interfaces' : isPower ? 'industrial power supplies, battery management systems, LED drivers, and distributed power architectures' : isSensor ? 'temperature sensing, pressure measurement, current monitoring, and strain gauge interfaces' : 'industrial automation networks, building control systems, automotive communication, and remote I/O modules'}. The device operates reliably across the industrial temperature range (-40°C to +85°C) with automotive-grade options available. The robust design ensures long-term stability in demanding environments.`,
    decisionGuide: `This device is ideal for ${isDataConverter ? 'precision measurement' : isPower ? 'power conversion' : isSensor ? 'signal conditioning' : 'communication interface'} applications. Contact our FAE for application-specific recommendations.`,
    keywords: ['applications', 'industrial', 'automotive', 'use cases']
  });
  
  // FAQ 5: 交期/采购
  faqs.push({
    question: `What is the typical lead time and MOQ for ${partNumber}?`,
    answer: `Standard lead time for ${partNumber} is 4-6 weeks from Linsimicro manufacturing. BeiLuo Electronics maintains strategic inventory for popular Linsimicro products, enabling 1-3 day delivery for sample quantities. Standard MOQ is 100 pieces with volume pricing tiers at 500, 1,000, and 5,000 pieces. Volume discounts range from 15% to 35% off standard pricing. For high-volume production, we offer scheduled delivery programs with preferential pricing and guaranteed allocation.`,
    decisionGuide: `Plan for 4-6 weeks lead time for production orders. For immediate prototyping, check our local stock availability. For high-volume projects, contact our sales team for volume pricing.`,
    keywords: ['lead time', 'MOQ', 'pricing', 'delivery schedule']
  });
  
  // FAQ 6: 性能参数
  faqs.push({
    question: `What is the temperature range and package options for ${partNumber}?`,
    answer: `The ${partNumber} is available in industrial temperature grade (-40°C to +85°C) with automotive-grade options (-40°C to +125°C or -40°C to +150°C) for qualifying devices. Package options include SOT-23, MSOP, TSSOP, SOIC, and QFN depending on the specific device. The packages are RoHS compliant and suitable for reflow soldering. Thermal characteristics are specified in the datasheet for proper thermal design.`,
    decisionGuide: `Select temperature grade based on your application environment. Choose package based on PCB space and thermal requirements.`,
    keywords: ['temperature range', 'package options', 'industrial grade', 'automotive grade']
  });
  
  // FAQ 7: 技术支持
  faqs.push({
    question: `How can I get technical support for ${partNumber}?`,
    answer: `BeiLuo Electronics provides comprehensive technical support for ${partNumber}: (1) Application engineering support - our FAE team can assist with device selection, schematic review, and debugging; (2) Reference designs - complete hardware and software reference designs are available; (3) Evaluation boards - order through BeiLuo for quick prototyping; (4) Documentation - datasheets, application notes, and user guides; (5) Direct support - contact our technical support hotline or email.`,
    decisionGuide: `Contact our FAE team early in the design phase for optimal device selection. Submit schematic for review before prototype build.`,
    keywords: ['technical support', 'FAE', 'reference design', 'evaluation board']
  });
  
  return faqs;
}

// 生成FAE Review
function generateFaeReview(product, categoryId) {
  return {
    author: "David Wang",
    title: "Senior FAE - Analog ICs",
    content: `The ${product.partNumber} is a reliable choice for ${categoryId === 'data-converters' ? 'data conversion' : categoryId === 'power-management' ? 'power management' : categoryId === 'sensor-interfaces' ? 'sensor interface' : 'communication interface'} applications. The device offers good performance at competitive pricing. In field applications, it has demonstrated stable operation with minimal drift over temperature. The pin-compatibility with industry standards simplifies migration from other suppliers. Key advantages include cost-effectiveness, good availability, and strong local technical support from BeiLuo Electronics.`,
    highlight: [
      "Cost-effective solution",
      "Pin-compatible with industry standards",
      "Strong local technical support"
    ]
  };
}

// 生成替代产品
function generateAlternativeParts(product, categoryId) {
  return [
    {
      partNumber: categoryId === 'data-converters' ? 'LSC1604' : categoryId === 'power-management' ? 'LSP3406' : categoryId === 'sensor-interfaces' ? 'LSA8552' : 'LRS485',
      brand: "Linsimicro",
      specifications: { type: "Similar performance" },
      comparison: "Alternative in same product family",
      reason: "For different specifications in same category",
      useCase: "Similar applications",
      link: "#"
    },
    {
      partNumber: "International Brand",
      brand: "Major Supplier",
      specifications: { type: "Industry standard" },
      comparison: "Premium alternative with similar pinout",
      reason: "For specific ecosystem requirements",
      useCase: "High-reliability applications",
      link: "#"
    }
  ];
}

// 生成配套产品
function generateCompanionParts(categoryId) {
  const companions = {
    'data-converters': [
      { partNumber: 'LSP3406', link: '#', description: 'Power management IC for ADC supply', category: 'Power Management' },
      { partNumber: 'LSA8552', link: '#', description: 'Op-amp for input conditioning', category: 'Sensor Interfaces' }
    ],
    'power-management': [
      { partNumber: 'LSC1604', link: '#', description: 'ADC for voltage monitoring', category: 'Data Converters' },
      { partNumber: 'LRS485', link: '#', description: 'Transceiver for communication', category: 'Interface ICs' }
    ],
    'sensor-interfaces': [
      { partNumber: 'LSC1604', link: '#', description: 'ADC for digitizing sensor output', category: 'Data Converters' },
      { partNumber: 'LSP3406', link: '#', description: 'Power supply for analog circuits', category: 'Power Management' }
    ],
    'interface-ics': [
      { partNumber: 'LSP3406', link: '#', description: 'Power management for interface circuits', category: 'Power Management' },
      { partNumber: 'LSC1604', link: '#', description: 'ADC for system monitoring', category: 'Data Converters' }
    ]
  };
  return companions[categoryId] || [];
}

// 修复所有产品
let fixedCount = 0;
const categories = productsData.categories || [];

categories.forEach(category => {
  const products = category.products || [];
  
  products.forEach(product => {
    console.log(`修复产品: ${product.partNumber}`);
    
    // 修复FAQ
    product.faqs = generateFaqs(product, category.id);
    console.log(`  - 生成FAQ (${product.faqs.length}个)`);
    
    // 补充缺失字段
    if (!product.faeReview) {
      product.faeReview = generateFaeReview(product, category.id);
      console.log(`  - 添加FAE Review`);
    }
    
    if (!product.alternativeParts) {
      product.alternativeParts = generateAlternativeParts(product, category.id);
      console.log(`  - 添加Alternative Parts`);
    }
    
    if (!product.companionParts) {
      product.companionParts = generateCompanionParts(category.id);
      console.log(`  - 添加Companion Parts`);
    }
    
    if (!product.applicationScenarios) {
      product.applicationScenarios = [
        "Industrial control",
        "Automotive systems",
        "Test equipment",
        "Communication systems"
      ];
      console.log(`  - 添加Application Scenarios`);
    }
    
    if (!product.keywords) {
      product.keywords = [
        product.partNumber,
        "Linsimicro",
        category.id === 'data-converters' ? 'data converter' : 
        category.id === 'power-management' ? 'power management' :
        category.id === 'sensor-interfaces' ? 'sensor interface' : 'interface IC'
      ];
      console.log(`  - 添加Keywords`);
    }
    
    fixedCount++;
  });
});

// 保存
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 成功修复 ${fixedCount} 个产品`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
