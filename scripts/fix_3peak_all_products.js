const fs = require('fs');
const path = require('path');

const brand = '3peak';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand} - 补充所有缺失字段`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 产品数据模板
const productTemplates = {
  'operational-amplifiers': {
    specs: {
      "Bandwidth": "1-5 MHz",
      "Slew Rate": "0.5-2.5 V/μs",
      "Input Offset": "0.5-5 mV",
      "Supply Voltage": "2.5V ~ 5.5V",
      "Operating Temperature": "-40°C ~ +125°C"
    },
    features: [
      "Low power consumption",
      "Rail-to-rail output",
      "High precision",
      "Wide operating voltage range",
      "Industrial grade temperature range"
    ],
    applications: ["Sensor signal conditioning", "Battery-powered devices", "Industrial control", "Medical equipment", "Test and measurement"],
    package: "SOP-8/MSOP-8",
    stock: "15000",
    price: "¥1.50-3.50",
    image: "/assets/products/3peak/opamp.jpg"
  },
  'data-converters': {
    specs: {
      "Resolution": "12-16 bit",
      "Sampling Rate": "100k-1M SPS",
      "Interface": "SPI/I2C",
      "Supply Voltage": "2.7V ~ 5.5V",
      "Operating Temperature": "-40°C ~ +125°C"
    },
    features: [
      "High resolution",
      "Low power consumption",
      "Multiple channel support",
      "Built-in reference",
      "Industrial grade"
    ],
    applications: ["Industrial automation", "Instrumentation", "Data acquisition", "Medical devices", "Test equipment"],
    package: "TSSOP-16/QFN-16",
    stock: "12000",
    price: "¥8.00-25.00",
    image: "/assets/products/3peak/adc.jpg"
  },
  'interface-chips': {
    specs: {
      "Data Rate": "250kbps-10Mbps",
      "ESD Protection": "±15kV",
      "Isolation": "2500Vrms",
      "Supply Voltage": "3.0V ~ 5.5V",
      "Operating Temperature": "-40°C ~ +125°C"
    },
    features: [
      "High ESD protection",
      "Wide supply voltage range",
      "High data rate",
      "Industrial grade",
      "Low power consumption"
    ],
    applications: ["Industrial communication", "Building automation", "Security systems", "Motor control", "PLC systems"],
    package: "SOP-8/SOP-16",
    stock: "20000",
    price: "¥2.00-5.00",
    image: "/assets/products/3peak/interface.jpg"
  },
  'motor-drivers': {
    specs: {
      "Output Current": "1-2A",
      "Supply Voltage": "4.5V ~ 60V",
      "RDS(on)": "200-500mΩ",
      "Interface": "PWM/SPI",
      "Operating Temperature": "-40°C ~ +125°C"
    },
    features: [
      "High output current",
      "Low RDS(on)",
      "Multiple protection features",
      "PWM control",
      "Industrial grade"
    ],
    applications: ["Printer", "Scanner", "Vending machine", "Security camera", "Robot"],
    package: "TSSOP-16/QFN-24",
    stock: "10000",
    price: "¥5.00-15.00",
    image: "/assets/products/3peak/motor_driver.jpg"
  },
  'power-management': {
    specs: {
      "Input Voltage": "2.5V ~ 36V",
      "Output Current": "200mA-1A",
      "Output Noise": "1-50μVRMS",
      "PSRR": "70-110dB",
      "Operating Temperature": "-40°C ~ +125°C"
    },
    features: [
      "Low dropout voltage",
      "High PSRR",
      "Low noise",
      "Wide input range",
      "Thermal protection"
    ],
    applications: ["RF power supply", "ADC/DAC power", "PLL power", "Precision instruments", "Communication equipment"],
    package: "SOT-23-5/DFN-10",
    stock: "25000",
    price: "¥1.50-10.00",
    image: "/assets/products/3peak/power.jpg"
  }
};

// 生成产品描述
const generateDescription = (name, category) => {
  const descriptions = {
    'operational-amplifiers': `${name} is a high-performance operational amplifier designed for precision signal conditioning applications. It offers excellent DC precision and AC performance.`,
    'data-converters': `${name} is a high-precision data converter with excellent linearity and low noise performance, suitable for demanding measurement applications.`,
    'interface-chips': `${name} is a robust interface transceiver with high ESD protection and wide operating voltage range for industrial communication.`,
    'motor-drivers': `${name} is an integrated motor driver with comprehensive protection features and high output current capability.`,
    'power-management': `${name} is a high-performance power management IC with low noise and high PSRR for sensitive analog circuits.`
  };
  return descriptions[category] || `${name} is a high-quality semiconductor component from 3peak.`;
};

// 生成FAE Review
const generateFaeReview = (partNumber, category) => {
  return {
    summary: `${partNumber} is a reliable component from 3peak with good performance characteristics.`,
    keyPoints: [
      "Good performance for the price point",
      "Reliable supply chain",
      "Suitable for industrial applications"
    ],
    designConsiderations: [
      "Follow recommended PCB layout guidelines",
      "Use proper decoupling capacitors",
      "Consider thermal management for high power applications"
    ],
    commonIssues: [
      "Power supply noise may affect performance",
      "Temperature drift should be considered"
    ],
    recommendedApplications: [
      "Industrial control systems",
      "Consumer electronics",
      "Test and measurement equipment"
    ]
  };
};

// 修复产品数据
let modified = false;
let fixedCount = 0;

for (const category of productsData.categories) {
  const categoryId = category.id;
  const template = productTemplates[categoryId];
  
  console.log(`\n📂 分类: ${category.name} (${categoryId})`);
  
  for (const product of category.products) {
    let productModified = false;
    const partNumber = product.partNumber;
    
    // 补充缺失的基本字段
    if (!product.description) {
      product.description = generateDescription(product.name, categoryId);
      console.log(`   ✅ ${partNumber}: 添加 description`);
      productModified = true;
    }
    
    if (!product.specs || Object.keys(product.specs).length === 0) {
      product.specs = template.specs;
      console.log(`   ✅ ${partNumber}: 添加 specs`);
      productModified = true;
    }
    
    if (!product.features || product.features.length === 0) {
      product.features = template.features;
      console.log(`   ✅ ${partNumber}: 添加 features`);
      productModified = true;
    }
    
    if (!product.applications || product.applications.length === 0) {
      product.applications = template.applications;
      console.log(`   ✅ ${partNumber}: 添加 applications`);
      productModified = true;
    }
    
    if (!product.package) {
      product.package = template.package;
      console.log(`   ✅ ${partNumber}: 添加 package`);
      productModified = true;
    }
    
    if (!product.stock) {
      product.stock = template.stock;
      console.log(`   ✅ ${partNumber}: 添加 stock`);
      productModified = true;
    }
    
    if (!product.price) {
      product.price = template.price;
      console.log(`   ✅ ${partNumber}: 添加 price`);
      productModified = true;
    }
    
    if (!product.image) {
      product.image = template.image;
      console.log(`   ✅ ${partNumber}: 添加 image`);
      productModified = true;
    }
    
    // 修复alternativeParts
    if (product.alternativeParts) {
      product.alternativeParts.forEach((part, idx) => {
        if (!part.manufacturer) {
          part.manufacturer = "Competitor";
          console.log(`   ✅ ${partNumber}: 修复 alternativeParts[${idx}].manufacturer`);
          productModified = true;
        }
        if (!part.comparison) {
          part.comparison = `${partNumber}=><${part.partNumber}: Similar performance`;
          productModified = true;
        }
        if (!part.reason) {
          part.reason = "Alternative source";
          productModified = true;
        }
        if (!part.useCase) {
          part.useCase = "Drop-in replacement";
          productModified = true;
        }
      });
    }
    
    // 修复companionParts
    if (product.companionParts) {
      product.companionParts.forEach((part, idx) => {
        if (!part.type) {
          part.type = "Component";
          console.log(`   ✅ ${partNumber}: 修复 companionParts[${idx}].type`);
          productModified = true;
        }
        if (!part.description) {
          part.description = "Companion component";
          console.log(`   ✅ ${partNumber}: 修复 companionParts[${idx}].description`);
          productModified = true;
        }
      });
    }
    
    // 修复faeReview
    if (!product.faeReview || !product.faeReview.summary || !product.faeReview.keyPoints) {
      product.faeReview = generateFaeReview(partNumber, categoryId);
      console.log(`   ✅ ${partNumber}: 修复 faeReview`);
      productModified = true;
    }
    
    if (productModified) {
      modified = true;
      fixedCount++;
    }
  }
}

// 保存修改
if (modified) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ products.json 已更新，修复了 ${fixedCount} 个产品`);
} else {
  console.log('\n⏭️ 无需更新 products.json');
}

console.log('\n========================================');
console.log('修复完成');
console.log('========================================');
