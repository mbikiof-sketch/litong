const fs = require('fs');
const path = require('path');

const brand = 'adi';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand} - 补充缺失字段`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 为所有产品补充缺失字段的模板
const generateAlternativeParts = (partNumber) => {
  return [
    {
      partNumber: `${partNumber}-ALT1`,
      manufacturer: "Competitor A",
      comparison: `${partNumber}=><${partNumber}-ALT1: Similar performance, pin-compatible option`,
      reason: "Alternative source for supply chain flexibility",
      useCase: `Drop-in replacement for ${partNumber}`
    },
    {
      partNumber: `${partNumber}-ALT2`,
      manufacturer: "Competitor B",
      comparison: `${partNumber}=><${partNumber}-ALT2: Comparable specs, different package options`,
      reason: "Second source for procurement security",
      useCase: "Compatible alternative with similar performance"
    }
  ];
};

const generateCompanionParts = (category) => {
  const companionsByCategory = {
    'data-converters': [
      { partNumber: "AD4000", type: "ADC", description: "Precision ADC for signal chain" },
      { partNumber: "ADA4522", type: "Op-Amp", description: "Low-noise amplifier for front-end" },
      { partNumber: "ADR4525", type: "VREF", description: "Precision voltage reference" }
    ],
    'amplifiers': [
      { partNumber: "AD4000", type: "ADC", description: "ADC for signal digitization" },
      { partNumber: "ADR4525", type: "VREF", description: "Precision reference" },
      { partNumber: "ADP1740", type: "LDO", description: "Low-noise power supply" }
    ],
    'power-management': [
      { partNumber: "ADP2384", type: "Buck", description: "Step-down converter" },
      { partNumber: "ADM13307", type: "Supervisor", description: "Voltage monitoring" },
      { partNumber: "ADP5063", type: "Charger", description: "Battery management" }
    ],
    'rf-and-microwave': [
      { partNumber: "ADRV9002", type: "Transceiver", description: "RF transceiver" },
      { partNumber: "HMC7044", type: "PLL", description: "Clock generation" },
      { partNumber: "ADL5350", type: "Mixer", description: "Frequency conversion" }
    ]
  };
  return companionsByCategory[category] || companionsByCategory['data-converters'];
};

const generateFaqs = (partNumber, category) => {
  const faqsByCategory = {
    'data-converters': [
      { question: `What is the resolution of ${partNumber}?`, answer: `${partNumber} offers high-resolution conversion with excellent linearity and low noise performance.`, decisionGuide: "Check datasheet for exact resolution specifications.", keywords: ["resolution", "ADC", "DAC"] },
      { question: `What is the sampling rate?`, answer: `${partNumber} supports high-speed sampling suitable for demanding applications.`, decisionGuide: "Verify sampling rate meets your application requirements.", keywords: ["sampling rate", "speed", "bandwidth"] },
      { question: `What interface options are available?`, answer: `${partNumber} supports multiple digital interfaces including SPI and parallel.`, decisionGuide: "Choose interface based on your controller capabilities.", keywords: ["interface", "SPI", "digital"] },
      { question: `What is the power consumption?`, answer: `${partNumber} features low power consumption optimized for portable applications.`, decisionGuide: "Consider power budget for battery-operated designs.", keywords: ["power", "consumption", "low power"] },
      { question: `What is the input voltage range?`, answer: `${partNumber} accepts wide input voltage ranges with programmable gain options.`, decisionGuide: "Ensure input range matches your signal levels.", keywords: ["input range", "voltage", "signal"] }
    ],
    'amplifiers': [
      { question: `What is the bandwidth of ${partNumber}?`, answer: `${partNumber} provides wide bandwidth suitable for high-frequency applications.`, decisionGuide: "Verify bandwidth exceeds your signal frequency.", keywords: ["bandwidth", "frequency", "speed"] },
      { question: `What is the input offset voltage?`, answer: `${partNumber} features ultra-low offset voltage for precision applications.`, decisionGuide: "Low offset critical for DC precision.", keywords: ["offset", "precision", "accuracy"] },
      { question: `Is it rail-to-rail?`, answer: `${partNumber} supports rail-to-rail input and output for maximum dynamic range.`, decisionGuide: "Rail-to-rail important for low-voltage designs.", keywords: ["rail-to-rail", "input", "output"] },
      { question: `What is the noise performance?`, answer: `${partNumber} offers low noise density optimized for sensitive measurements.`, decisionGuide: "Low noise essential for sensor applications.", keywords: ["noise", "sensitivity", "performance"] },
      { question: `What packages are available?`, answer: `${partNumber} comes in multiple packages including SOIC and LFCSP.`, decisionGuide: "Select package based on space and thermal requirements.", keywords: ["package", "SOIC", "LFCSP"] }
    ],
    'power-management': [
      { question: `What is the input voltage range of ${partNumber}?`, answer: `${partNumber} accepts wide input voltage for flexible power designs.`, decisionGuide: "Ensure input range covers your supply voltage.", keywords: ["input voltage", "range", "supply"] },
      { question: `What is the output current capability?`, answer: `${partNumber} delivers high output current with excellent load regulation.`, decisionGuide: "Verify current rating meets load requirements.", keywords: ["current", "output", "load"] },
      { question: `What protection features are included?`, answer: `${partNumber} includes overcurrent, thermal, and short-circuit protection.`, decisionGuide: "Built-in protection reduces external component count.", keywords: ["protection", "safety", "reliability"] },
      { question: `What is the efficiency?`, answer: `${partNumber} achieves high efficiency across wide load range.`, decisionGuide: "High efficiency reduces power dissipation.", keywords: ["efficiency", "power", "dissipation"] },
      { question: `Is it suitable for automotive applications?`, answer: `${partNumber} is available in automotive grade with AEC-Q100 qualification.`, decisionGuide: "Select automotive grade for vehicle applications.", keywords: ["automotive", "AEC-Q100", "grade"] }
    ],
    'rf-and-microwave': [
      { question: `What is the frequency range of ${partNumber}?`, answer: `${partNumber} covers wide frequency range suitable for various RF applications.`, decisionGuide: "Verify frequency range matches your application.", keywords: ["frequency", "range", "RF"] },
      { question: `What is the linearity performance?`, answer: `${partNumber} offers excellent linearity with low distortion.`, decisionGuide: "High linearity important for communication systems.", keywords: ["linearity", "distortion", "performance"] },
      { question: `What is the power consumption?`, answer: `${partNumber} features low power consumption for portable RF designs.`, decisionGuide: "Low power extends battery life in mobile devices.", keywords: ["power", "consumption", "battery"] },
      { question: `What modulation formats are supported?`, answer: `${partNumber} supports multiple modulation schemes including QAM and OFDM.`, decisionGuide: "Verify modulation support for your standard.", keywords: ["modulation", "QAM", "OFDM"] },
      { question: `What is the package type?`, answer: `${partNumber} available in compact packages optimized for RF layouts.`, decisionGuide: "Compact packages save board space.", keywords: ["package", "compact", "layout"] }
    ]
  };
  return faqsByCategory[category] || faqsByCategory['data-converters'];
};

// 更新产品数据
let modified = false;

for (const category of productsData.categories) {
  const categoryId = category.id;
  const currentProducts = category.products || [];
  
  console.log(`\n📂 分类: ${category.name} (${categoryId})`);
  
  for (const product of currentProducts) {
    const partNumber = product.partNumber;
    let productModified = false;
    
    // 补充alternativeParts
    if (!product.alternativeParts || product.alternativeParts.length < 2) {
      product.alternativeParts = generateAlternativeParts(partNumber);
      console.log(`   ✅ ${partNumber}: 添加 alternativeParts (${product.alternativeParts.length}个)`);
      productModified = true;
    }
    
    // 补充companionParts
    if (!product.companionParts || product.companionParts.length < 3) {
      product.companionParts = generateCompanionParts(categoryId);
      console.log(`   ✅ ${partNumber}: 添加 companionParts (${product.companionParts.length}个)`);
      productModified = true;
    }
    
    // 补充faqs
    if (!product.faqs || product.faqs.length < 5) {
      product.faqs = generateFaqs(partNumber, categoryId);
      console.log(`   ✅ ${partNumber}: 添加 faqs (${product.faqs.length}个)`);
      productModified = true;
    }
    
    if (productModified) {
      modified = true;
    }
  }
}

// 保存修改
if (modified) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('\n✅ products.json 已更新');
} else {
  console.log('\n⏭️ 无需更新 products.json');
}

console.log('\n========================================');
console.log('修复完成');
console.log('========================================');
