#!/usr/bin/env node
/**
 * 补充 Sikor Power Management ICs 产品到6个
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'sikor');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 补充 Sikor Power Management ICs 产品');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 找到 Power Management ICs 分类
const pmicCategory = productsData.categories.find(cat => cat.id === 'power-management');
if (!pmicCategory) {
  console.log('❌ 未找到 Power Management ICs 分类');
  process.exit(1);
}

console.log(`📦 当前 Power Management ICs 有 ${pmicCategory.products.length} 个产品`);

// 补充2个新产品
if (pmicCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "SL27511",
      "name": "Single Low-Side Gate Driver",
      "shortDescription": "Single-channel low-side gate driver with 4A peak current and fast propagation delay",
      "descriptionParagraphs": [
        "SL27511 is a single-channel low-side gate driver designed for driving MOSFETs and IGBTs.",
        "Features 4A peak drive current and fast propagation delay for efficient switching.",
        "The SOT-23-5 package provides a compact solution for space-constrained designs."
      ],
      "specifications": {
        "Output Peak Current": "4A source/sink",
        "Propagation Delay": "25ns typical",
        "Rise Time": "12ns typical",
        "Fall Time": "10ns typical",
        "Supply Voltage": "4.5V to 20V",
        "Package": "SOT-23-5",
        "Voltage Rating": "20V",
        "Current Rating": "4A",
        "Temperature Range": "-40°C to +125°C"
      },
      "features": [
        "4A peak drive current",
        "Fast switching with low delay",
        "Wide supply voltage range",
        "Low power consumption",
        "Under-voltage lockout",
        "RoHS compliant"
      ],
      "applications": [
        "MOSFET/IGBT driving",
        "DC-DC converters",
        "Motor drives",
        "Power supplies",
        "SMPS"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Power Electronics",
        "content": "SL27511 is a versatile gate driver for low-side applications. The 4A drive capability ensures fast switching.",
        "highlight": "Versatile low-side driver"
      },
      "alternativeParts": [
        {"partNumber": "SL27517", "brand": "Sikor", "reason": "Similar performance"},
        {"partNumber": "UCC27511", "brand": "TI", "reason": "Industry reference"}
      ],
      "companionParts": [
        {"partNumber": "SL3407", "description": "MOSFET"},
        {"partNumber": "SL20T65F", "description": "IGBT"},
        {"partNumber": "SL6206", "description": "LDO regulator"}
      ],
      "faqs": [
        {"question": "What is the drive current capability?", "answer": "4A peak source and sink current", "decisionGuide": "Good drive capability", "keywords": ["drive current", "peak"]},
        {"question": "What is the propagation delay?", "answer": "25ns typical propagation delay", "decisionGuide": "Fast response", "keywords": ["propagation", "delay"]},
        {"question": "Can it drive SiC MOSFETs?", "answer": "Yes, suitable for SiC devices", "decisionGuide": "SiC compatible", "keywords": ["SiC", "MOSFET"]},
        {"question": "What is the supply voltage range?", "answer": "4.5V to 20V supply range", "decisionGuide": "Wide voltage range", "keywords": ["supply", "voltage"]},
        {"question": "Does it have UVLO?", "answer": "Yes, under-voltage lockout included", "decisionGuide": "Built-in protection", "keywords": ["UVLO", "protection"]}
      ]
    },
    {
      "partNumber": "SL3401",
      "name": "30V P-Channel MOSFET",
      "shortDescription": "30V P-channel MOSFET with 4.2A continuous drain current in SOT-23 package",
      "descriptionParagraphs": [
        "SL3401 is a 30V P-channel enhancement-mode MOSFET for load switching applications.",
        "Features low RDS(on) and logic-level gate drive compatibility.",
        "The SOT-23 package provides a compact footprint for portable designs."
      ],
      "specifications": {
        "Drain-Source Voltage": "-30V",
        "Continuous Drain Current": "-4.2A @ 25°C",
        "RDS(on) max": "50mΩ @ VGS=-10V",
        "Gate Threshold Voltage": "-1.0V to -3.0V",
        "Total Gate Charge": "10nC typical",
        "Package": "SOT-23",
        "Voltage Rating": "30V",
        "Current Rating": "4.2A",
        "Temperature Range": "-55°C to +150°C"
      },
      "features": [
        "Low RDS(on) for minimal losses",
        "Logic-level gate drive",
        "Fast switching characteristics",
        "Compact SOT-23 package",
        "Avalanche rated",
        "RoHS compliant"
      ],
      "applications": [
        "Load switching",
        "Power management",
        "Battery protection",
        "DC-DC converters",
        "H-bridge designs"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Power Electronics",
        "content": "SL3401 is the complementary P-channel to SL3407, ideal for H-bridge and high-side switching.",
        "highlight": "Complementary to SL3407"
      },
      "alternativeParts": [
        {"partNumber": "SL4435", "brand": "Sikor", "reason": "Higher current option"},
        {"partNumber": "SI2301", "brand": "Vishay", "reason": "Industry standard"}
      ],
      "companionParts": [
        {"partNumber": "SL3407", "description": "N-channel MOSFET"},
        {"partNumber": "SL27517", "description": "Gate driver"},
        {"partNumber": "SL6206", "description": "LDO regulator"}
      ],
      "faqs": [
        {"question": "What is the RDS(on)?", "answer": "50mΩ at VGS=-10V", "decisionGuide": "Low resistance", "keywords": ["RDS(on)", "resistance"]},
        {"question": "Is it complementary to SL3407?", "answer": "Yes, P-channel complement to SL3407", "decisionGuide": "Good for H-bridge", "keywords": ["complementary", "H-bridge"]},
        {"question": "What is the gate voltage?", "answer": "-1.0V to -3.0V threshold", "decisionGuide": "Negative gate drive", "keywords": ["gate", "threshold"]},
        {"question": "Can it be used for high-side switching?", "answer": "Yes, ideal for high-side applications", "decisionGuide": "High-side capable", "keywords": ["high-side", "switching"]},
        {"question": "What is the package?", "answer": "SOT-23 compact package", "decisionGuide": "Space-saving", "keywords": ["package", "SOT-23"]}
      ]
    }
  ];
  
  pmicCategory.products.push(...newProducts);
  console.log(`✅ Power Management ICs: ${pmicCategory.products.length} 个产品`);
  
  // 保存 products.json
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
  console.log('\n✅ products.json 更新完成');
} else {
  console.log('✅ Power Management ICs 已有6个产品');
}

console.log('\n========================================');
console.log('🎉 Sikor Power Management ICs 产品补充完成！');
console.log('========================================');
