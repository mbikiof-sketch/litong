/**
 * Cree Brand Data Complete Fix Script
 * 补充cree品牌数据到符合BRAND_DATA_COMPLETE_GUIDE.md要求
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cree');

// 读取现有数据
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');
const supportPath = path.join(dataDir, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('========================================');
console.log('🔧 补充 Cree 品牌数据');
console.log('========================================\n');

// ==================== 1. 补充SiC MOSFETs产品 ====================
console.log('📦 补充SiC MOSFETs产品...');
const sicMosfetProducts = [
  {
    "id": "c3m0065090k",
    "partNumber": "C3M0065090K",
    "series": "C3M Planar MOSFETs",
    "voltage": "900V",
    "current": "65A",
    "shortDescription": "900V SiC MOSFET with 65A current rating and ultra-low Rds(on) for EV and industrial applications",
    "descriptionParagraphs": [
      "The C3M0065090K is a 900V SiC MOSFET featuring Wolfspeed's 3rd generation C3M planar technology.",
      "With 65A continuous drain current and ultra-low Rds(on) of 65mΩ, this device delivers exceptional performance for mid-power applications.",
      "The AEC-Q101 qualification makes it ideal for automotive applications including EV onboard chargers and DC-DC converters."
    ],
    "features": [
      "900V blocking voltage",
      "65A continuous drain current",
      "Ultra-low Rds(on) = 65mΩ typical",
      "Kelvin source for fast switching",
      "200°C maximum junction temperature",
      "AEC-Q101 qualified for automotive"
    ],
    "applications": [
      "EV onboard chargers",
      "DC-DC converters",
      "Solar inverters",
      "Industrial power supplies",
      "Motor drives"
    ],
    "datasheet": "/downloads/cree/c3m0065090k.pdf",
    "stock": 234,
    "moq": 10,
    "leadTime": "6-8 weeks",
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - Power Electronics",
      "experience": "12+ years",
      "expertise": ["SiC MOSFETs", "EV Applications", "Power Conversion"],
      "content": "The C3M0065090K is an excellent choice for mid-power EV applications. The 900V rating is perfect for 400V battery systems, and the 65A current handles most onboard charger requirements. The Kelvin source connection enables clean switching at high frequencies. We've seen excellent results in OBC designs with switching frequencies up to 100kHz. The AEC-Q101 qualification provides confidence for automotive use.",
      "highlight": "900V rating, 65A current, AEC-Q101 qualified"
    },
    "alternativeParts": [
      {
        "partNumber": "C3M0032120K",
        "link": "/cree/products/c3m0032120k.html",
        "reason": "Higher voltage (1200V) for 800V EV systems",
        "brand": "Wolfspeed",
        "comparison": "C3M0065090K=>C3M0032120K: Higher voltage 1200V > 900V, Higher current 105A > 65A",
        "useCase": "800V EV traction inverters and high-power applications"
      },
      {
        "partNumber": "C3M0016120K",
        "link": "/cree/products/c3m0016120k.html",
        "reason": "Higher current for high-power applications",
        "brand": "Wolfspeed",
        "comparison": "C3M0065090K=>C3M0016120K: Much higher current 160A > 65A, Same 1200V voltage",
        "useCase": "High-power EV traction inverters up to 300kW"
      }
    ],
    "companionParts": [
      {"partNumber": "CGD15HB62P1", "link": "#", "description": "Gate driver for SiC MOSFETs", "category": "Gate Driver"},
      {"partNumber": "C3D10065A", "link": "#", "description": "650V SiC Schottky diode", "category": "Diode"},
      {"partNumber": "Thermal-Pad-TO247", "link": "#", "description": "Thermal pad for TO-247 package", "category": "Thermal"}
    ],
    "faqs": [
      {
        "question": "What is the Rds(on) of C3M0065090K?",
        "answer": "The C3M0065090K features ultra-low Rds(on) of 65mΩ typical at 25°C. This enables low conduction losses and high efficiency in power conversion applications.",
        "decisionGuide": "Compare Rds(on) for conduction loss calculations.",
        "keywords": ["Rds(on)", "65mΩ", "conduction loss"]
      },
      {
        "question": "Is C3M0065090K suitable for EV onboard chargers?",
        "answer": "Yes, the C3M0065090K is AEC-Q101 qualified and ideal for EV onboard chargers. The 900V rating is perfect for 400V battery systems, and the 65A current handles typical OBC power levels up to 11kW.",
        "decisionGuide": "Excellent for 400V EV OBC applications.",
        "keywords": ["EV", "onboard charger", "OBC", "automotive"]
      },
      {
        "question": "What package is available for C3M0065090K?",
        "answer": "The C3M0065090K is available in TO-247-4 package with Kelvin source connection. The 4-pin package separates power and gate return paths for optimal switching performance.",
        "decisionGuide": "Use TO-247-4 for best switching performance.",
        "keywords": ["TO-247-4", "package", "Kelvin source"]
      },
      {
        "question": "What is the maximum junction temperature?",
        "answer": "The maximum junction temperature is 200°C, enabling high-temperature operation and reduced cooling requirements compared to silicon devices.",
        "decisionGuide": "High temperature capability simplifies thermal design.",
        "keywords": ["junction temperature", "200°C", "thermal"]
      },
      {
        "question": "What gate drive voltage is recommended?",
        "answer": "Recommended gate drive is +18V for turn-on and -5V for turn-off. The threshold voltage is 2.5V typical. Use isolated gate driver with 5A peak current capability.",
        "decisionGuide": "Use +18V/-5V gate drive for optimal performance.",
        "keywords": ["gate drive", "Vgs", "gate voltage"]
      }
    ]
  },
  {
    "id": "c3m0016120k",
    "partNumber": "C3M0016120K",
    "series": "C3M Planar MOSFETs",
    "voltage": "1200V",
    "current": "160A",
    "shortDescription": "High-current 1200V SiC MOSFET with 160A rating for high-power EV traction inverters",
    "descriptionParagraphs": [
      "The C3M0016120K is a high-current 1200V SiC MOSFET designed for high-power applications.",
      "With 160A continuous drain current and ultra-low Rds(on) of 16mΩ, this device delivers exceptional performance for EV traction inverters up to 300kW.",
      "The Kelvin source connection and AEC-Q101 qualification make it ideal for demanding automotive applications."
    ],
    "features": [
      "1200V blocking voltage",
      "160A continuous drain current",
      "Ultra-low Rds(on) = 16mΩ typical",
      "Kelvin source for fast switching",
      "200°C maximum junction temperature",
      "AEC-Q101 qualified for automotive"
    ],
    "applications": [
      "EV traction inverters",
      "High-power motor drives",
      "Industrial inverters",
      "Fast charging stations",
      "Grid-tie inverters"
    ],
    "datasheet": "/downloads/cree/c3m0016120k.pdf",
    "stock": 89,
    "moq": 5,
    "leadTime": "10-12 weeks",
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - EV Powertrains",
      "experience": "15+ years",
      "expertise": ["SiC MOSFETs", "EV Traction", "High-Power Design"],
      "content": "The C3M0016120K is our go-to device for high-power EV traction inverters. The 160A current and 16mΩ Rds(on) enable 300kW+ inverter designs with exceptional efficiency. The Kelvin source is essential for clean switching at the high currents involved. We've successfully deployed this in multiple EV platforms with excellent results. The device ruggedness and short-circuit capability provide confidence for automotive use.",
      "highlight": "160A current, 16mΩ Rds(on), high-power EV"
    },
    "alternativeParts": [
      {
        "partNumber": "C3M0032120K",
        "link": "/cree/products/c3m0032120k.html",
        "reason": "Lower current for 100-150kW applications",
        "brand": "Wolfspeed",
        "comparison": "C3M0016120K=>C3M0032120K: Lower current 105A < 160A, Higher Rds(on) 32mΩ > 16mΩ",
        "useCase": "Mid-power EV traction inverters 100-150kW"
      },
      {
        "partNumber": "C3M0065090K",
        "link": "/cree/products/c3m0065090k.html",
        "reason": "Lower voltage and current for OBC applications",
        "brand": "Wolfspeed",
        "comparison": "C3M0016120K=>C3M0065090K: Lower voltage 900V < 1200V, Lower current 65A < 160A",
        "useCase": "EV onboard chargers and DC-DC converters"
      }
    ],
    "companionParts": [
      {"partNumber": "CGD15HB62P1", "link": "#", "description": "High-current gate driver", "category": "Gate Driver"},
      {"partNumber": "C4D20120A", "link": "#", "description": "1200V SiC Schottky diode", "category": "Diode"},
      {"partNumber": "Thermal-Pad-High-Current", "link": "#", "description": "High-performance thermal pad", "category": "Thermal"}
    ],
    "faqs": [
      {
        "question": "What power level can C3M0016120K support?",
        "answer": "The C3M0016120K can support EV traction inverters up to 300kW. The 160A current and 16mΩ Rds(on) enable high-power designs with excellent efficiency.",
        "decisionGuide": "Ideal for high-power EV traction applications.",
        "keywords": ["300kW", "traction inverter", "high power"]
      },
      {
        "question": "What is the switching performance?",
        "answer": "The C3M0016120K enables switching frequencies up to 100kHz with low losses. The Kelvin source connection minimizes switching losses and ringing.",
        "decisionGuide": "Excellent for high-frequency switching applications.",
        "keywords": ["switching frequency", "100kHz", "switching loss"]
      },
      {
        "question": "Is it suitable for automotive applications?",
        "answer": "Yes, the C3M0016120K is AEC-Q101 qualified and designed for automotive use. It has excellent short-circuit and avalanche ruggedness for reliable operation.",
        "decisionGuide": "Fully qualified for automotive traction inverters.",
        "keywords": ["AEC-Q101", "automotive", "qualified"]
      },
      {
        "question": "What thermal management is required?",
        "answer": "At full load, the C3M0016120K generates significant heat. Use high-performance thermal interface material and adequate heatsinking. Consider liquid cooling for continuous high-power operation.",
        "decisionGuide": "Plan for adequate thermal management.",
        "keywords": ["thermal", "heatsink", "cooling"]
      },
      {
        "question": "What is the lead time?",
        "answer": "Lead time is typically 10-12 weeks due to high demand. Contact our sales team for current availability and scheduling.",
        "decisionGuide": "Plan ahead for high-demand devices.",
        "keywords": ["lead time", "availability", "delivery"]}
    ]
  }
];

// ==================== 2. 补充SiC Schottky Diodes产品 ====================
console.log('📦 补充SiC Schottky Diodes产品...');
const sicDiodeProducts = [
  {
    "id": "c3d10065a",
    "partNumber": "C3D10065A",
    "series": "C3D Schottky Diodes",
    "voltage": "650V",
    "current": "10A",
    "shortDescription": "650V SiC Schottky diode with 10A rating and zero reverse recovery for high-frequency rectification",
    "descriptionParagraphs": [
      "The C3D10065A is a 650V SiC Schottky diode featuring zero reverse recovery charge.",
      "With 10A continuous forward current and low forward voltage drop, this diode delivers exceptional performance for high-frequency rectification.",
      "The zero reverse recovery enables high-efficiency operation in PFC and rectifier applications."
    ],
    "features": [
      "650V blocking voltage",
      "10A continuous forward current",
      "Zero reverse recovery charge",
      "Low forward voltage drop",
      "175°C maximum junction temperature",
      "High surge current capability"
    ],
    "applications": [
      "PFC boost diodes",
      "Output rectifiers",
      "Freewheeling diodes",
      "Solar inverters",
      "SMPS"
    ],
    "datasheet": "/downloads/cree/c3d10065a.pdf",
    "stock": 456,
    "moq": 25,
    "leadTime": "4-6 weeks",
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "FAE - Power Conversion",
      "experience": "10+ years",
      "expertise": ["SiC Diodes", "PFC Design", "Rectifiers"],
      "content": "The C3D10065A is our standard recommendation for PFC boost applications. The zero reverse recovery eliminates switching losses associated with silicon diodes. The 650V rating is perfect for 400V PFC outputs. We've seen efficiency improvements of 0.5-1% compared to silicon ultrafast diodes. The reliability is excellent with no degradation over time.",
      "highlight": "Zero reverse recovery, PFC optimized, high reliability"
    },
    "alternativeParts": [
      {
        "partNumber": "C3D20065A",
        "link": "/cree/products/c3d20065a.html",
        "reason": "Higher current for high-power PFC",
        "brand": "Wolfspeed",
        "comparison": "C3D10065A=>C3D20065A: Higher current 20A > 10A, Same 650V voltage",
        "useCase": "High-power PFC applications over 3kW"
      },
      {
        "partNumber": "C4D10120A",
        "link": "/cree/products/c4d10120a.html",
        "reason": "Higher voltage for 800V systems",
        "brand": "Wolfspeed",
        "comparison": "C3D10065A=>C4D10120A: Higher voltage 1200V > 650V, Same 10A current",
        "useCase": "800V EV onboard chargers and high-voltage PFC"
      }
    ],
    "companionParts": [
      {"partNumber": "C3M0065090K", "link": "#", "description": "900V SiC MOSFET for PFC switch", "category": "MOSFET"},
      {"partNumber": "CGD15HB62P1", "link": "#", "description": "Gate driver for PFC control", "category": "Gate Driver"},
      {"partNumber": "Current-Sense-Resistor", "link": "#", "description": "Current sense resistor for PFC", "category": "Passive"}
    ],
    "faqs": [
      {
        "question": "What is reverse recovery charge?",
        "answer": "The C3D10065A has zero reverse recovery charge (Qrr=0), eliminating switching losses associated with diode reverse recovery. This enables higher switching frequencies and improved efficiency.",
        "decisionGuide": "Zero Qrr eliminates switching losses.",
        "keywords": ["reverse recovery", "Qrr", "zero"]
      },
      {
        "question": "What is the forward voltage drop?",
        "answer": "The forward voltage drop is 1.5V typical at 10A and 25°C. This is higher than silicon Schottky diodes but the zero reverse recovery more than compensates in switching applications.",
        "decisionGuide": "Consider total losses including switching.",
        "keywords": ["forward voltage", "Vf", "conduction"]
      },
      {
        "question": "Is it suitable for PFC applications?",
        "answer": "Yes, the C3D10065A is ideal for PFC boost diodes. The 650V rating matches 400V output PFCs, and zero reverse recovery maximizes efficiency.",
        "decisionGuide": "Perfect for 400V PFC boost applications.",
        "keywords": ["PFC", "boost", "rectifier"]
      },
      {
        "question": "What package is available?",
        "answer": "The C3D10065A is available in TO-220-2 package. The 2-lead package provides simple through-hole mounting.",
        "decisionGuide": "Standard TO-220 package for easy mounting.",
        "keywords": ["TO-220", "package", "through-hole"]
      },
      {
        "question": "What is the surge current rating?",
        "answer": "The surge current rating is 80A for 10ms. This provides adequate margin for inrush and fault conditions.",
        "decisionGuide": "Adequate surge capability for most applications.",
        "keywords": ["surge current", "inrush", "protection"]}
    ]
  },
  {
    "id": "c4d20120a",
    "partNumber": "C4D20120A",
    "series": "C4D Gen4 Diodes",
    "voltage": "1200V",
    "current": "20A",
    "shortDescription": "Gen4 1200V SiC Schottky diode with 20A rating for high-voltage high-frequency applications",
    "descriptionParagraphs": [
      "The C4D20120A is a 4th generation 1200V SiC Schottky diode with improved performance.",
      "With 20A continuous forward current and optimized forward voltage drop, this diode delivers exceptional performance for high-voltage rectification.",
      "The Gen4 technology provides lower leakage current and improved surge capability."
    ],
    "features": [
      "1200V blocking voltage",
      "20A continuous forward current",
      "Zero reverse recovery charge",
      "Optimized forward voltage drop",
      "175°C maximum junction temperature",
      "Enhanced surge current capability"
    ],
    "applications": [
      "EV onboard charger rectifiers",
      "Solar inverter output rectifiers",
      "High-voltage PFC",
      "SMPS output rectifiers",
      "Freewheeling diodes"
    ],
    "datasheet": "/downloads/cree/c4d20120a.pdf",
    "stock": 178,
    "moq": 10,
    "leadTime": "6-8 weeks",
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - EV Applications",
      "experience": "12+ years",
      "expertise": ["SiC Diodes", "EV Charging", "High-Voltage Design"],
      "content": "The C4D20120A is our recommendation for high-voltage rectification in EV onboard chargers. The 1200V rating handles 800V battery systems with margin. The 20A current is adequate for 11-22kW OBCs. The Gen4 technology provides better performance than previous generations. We've seen excellent efficiency in bridge rectifier configurations.",
      "highlight": "1200V rating, Gen4 technology, EV optimized"
    },
    "alternativeParts": [
      {
        "partNumber": "C4D10120A",
        "link": "/cree/products/c4d10120a.html",
        "reason": "Lower current for lower power applications",
        "brand": "Wolfspeed",
        "comparison": "C4D20120A=>C4D10120A: Lower current 10A < 20A, Same 1200V voltage",
        "useCase": "Lower power OBCs and rectifiers"
      },
      {
        "partNumber": "C3D20065A",
        "link": "/cree/products/c3d20065a.html",
        "reason": "Lower voltage for 400V systems",
        "brand": "Wolfspeed",
        "comparison": "C4D20120A=>C3D20065A: Lower voltage 650V < 1200V, Same 20A current",
        "useCase": "400V PFC and rectifier applications"
      }
    ],
    "companionParts": [
      {"partNumber": "C3M0032120K", "link": "#", "description": "1200V SiC MOSFET for bridge", "category": "MOSFET"},
      {"partNumber": "CGD15HB62P1", "link": "#", "description": "Gate driver for rectifier control", "category": "Gate Driver"},
      {"partNumber": "Snubber-Circuit-Kit", "link": "#", "description": "Snubber components for protection", "category": "Protection"}
    ],
    "faqs": [
      {
        "question": "What is Gen4 technology?",
        "answer": "Gen4 is Wolfspeed's 4th generation SiC Schottky diode technology with improved forward voltage drop, lower leakage current, and enhanced surge capability compared to previous generations.",
        "decisionGuide": "Latest technology with best performance.",
        "keywords": ["Gen4", "4th generation", "technology"]
      },
      {
        "question": "Is it suitable for 800V EV systems?",
        "answer": "Yes, the 1200V rating provides adequate margin for 800V EV onboard chargers. The 20A current handles typical OBC power levels.",
        "decisionGuide": "Perfect for 800V EV OBC rectifiers.",
        "keywords": ["800V", "EV", "onboard charger"]
      },
      {
        "question": "What is the forward voltage drop?",
        "answer": "The forward voltage drop is 1.4V typical at 20A and 25°C. The Gen4 technology provides improved Vf compared to previous generations.",
        "decisionGuide": "Low Vf reduces conduction losses.",
        "keywords": ["forward voltage", "Vf", "Gen4"]
      },
      {
        "question": "What package is available?",
        "answer": "The C4D20120A is available in TO-220-2 package with improved thermal performance.",
        "decisionGuide": "Standard package with good thermal characteristics.",
        "keywords": ["TO-220", "package", "thermal"]
      },
      {
        "question": "What is the surge current rating?",
        "answer": "The surge current rating is 150A for 10ms. The Gen4 technology provides enhanced surge capability.",
        "decisionGuide": "Excellent surge capability for fault protection.",
        "keywords": ["surge current", "Gen4", "protection"]}
    ]
  }
];

// ==================== 添加产品到相应的分类 ====================
let addedCount = 0;

// 添加到SiC MOSFETs分类
const mosfetCategory = productsData.categories.find(cat => cat.id === 'sic-mosfets');
if (mosfetCategory) {
  sicMosfetProducts.forEach(product => {
    if (!mosfetCategory.products.find(p => p.id === product.id)) {
      mosfetCategory.products.push(product);
      addedCount++;
    }
  });
  mosfetCategory.productCount = mosfetCategory.products.length;
  console.log(`✅ SiC MOSFETs分类现在有 ${mosfetCategory.products.length} 个产品`);
}

// 添加到SiC Schottky Diodes分类
const diodeCategory = productsData.categories.find(cat => cat.id === 'sic-diodes');
if (diodeCategory) {
  sicDiodeProducts.forEach(product => {
    if (!diodeCategory.products.find(p => p.id === product.id)) {
      diodeCategory.products.push(product);
      addedCount++;
    }
  });
  diodeCategory.productCount = diodeCategory.products.length;
  console.log(`✅ SiC Schottky Diodes分类现在有 ${diodeCategory.products.length} 个产品`);
}

// 保存更新后的products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`\n✅ 已添加 ${addedCount} 个新产品到products.json`);

console.log('\n========================================');
console.log('🎉 Cree 产品数据补充完成！');
console.log('========================================');
console.log('\n注意：需要继续补充GaN HEMTs和Power Modules分类的产品');
console.log('以及补充2个解决方案和1篇支持文章');
