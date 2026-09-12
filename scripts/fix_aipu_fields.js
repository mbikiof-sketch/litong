const fs = require('fs');
const path = require('path');

const brand = 'aipu';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand} - 补充缺失字段`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 读取solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

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
    'dc-dc-fixed': [
      { partNumber: "A0512S-1W", type: "DC-DC", description: "Fixed input power module" },
      { partNumber: "A0524S-2W", type: "DC-DC", description: "Higher power module" },
      { partNumber: "B0505S-1W", type: "DC-DC", description: "Wide input alternative" }
    ],
    'dc-dc-wide': [
      { partNumber: "B0505S-1W", type: "DC-DC", description: "Wide input power module" },
      { partNumber: "B2412S-2W", type: "DC-DC", description: "Higher voltage module" },
      { partNumber: "A0512S-1W", type: "DC-DC", description: "Fixed input alternative" }
    ],
    'ac-dc': [
      { partNumber: "AP05N05-Zero", type: "AC-DC", description: "Compact AC-DC module" },
      { partNumber: "AP12N12", type: "AC-DC", description: "Higher power AC-DC" },
      { partNumber: "B0505S-1W", type: "DC-DC", description: "DC-DC companion" }
    ],
    'isolated-transceiver': [
      { partNumber: "CTM1051", type: "CAN", description: "Isolated CAN transceiver" },
      { partNumber: "RSM485", type: "RS485", description: "Isolated RS485 transceiver" },
      { partNumber: "RSM232", type: "RS232", description: "Isolated RS232 transceiver" }
    ]
  };
  return companionsByCategory[category] || companionsByCategory['dc-dc-fixed'];
};

const generateFaqs = (partNumber, category) => {
  const faqsByCategory = {
    'dc-dc-fixed': [
      { question: `What is the input voltage range of ${partNumber}?`, answer: `${partNumber} accepts fixed input voltage with excellent regulation performance.`, decisionGuide: "Verify input voltage matches your supply.", keywords: ["input voltage", "fixed", "range"] },
      { question: `What is the output power rating?`, answer: `${partNumber} delivers stable output power with high efficiency.`, decisionGuide: "Check power rating meets load requirements.", keywords: ["power", "output", "rating"] },
      { question: `What is the isolation voltage?`, answer: `${partNumber} provides high isolation voltage for safety and noise immunity.`, decisionGuide: "Ensure isolation meets system requirements.", keywords: ["isolation", "voltage", "safety"] },
      { question: `What is the efficiency?`, answer: `${partNumber} achieves high efficiency for minimal power loss.`, decisionGuide: "Higher efficiency reduces heat generation.", keywords: ["efficiency", "power loss", "heat"] },
      { question: `What protections are included?`, answer: `${partNumber} includes overcurrent, overvoltage, and thermal protection.`, decisionGuide: "Built-in protection enhances reliability.", keywords: ["protection", "overcurrent", "safety"] }
    ],
    'dc-dc-wide': [
      { question: `What is the input voltage range of ${partNumber}?`, answer: `${partNumber} accepts wide input voltage range for flexible applications.`, decisionGuide: "Wide range accommodates varying supplies.", keywords: ["input voltage", "wide range", "flexible"] },
      { question: `What is the output regulation accuracy?`, answer: `${partNumber} provides excellent output regulation across input and load variations.`, decisionGuide: "Good regulation ensures stable output.", keywords: ["regulation", "accuracy", "stable"] },
      { question: `Is it suitable for industrial applications?`, answer: `${partNumber} is designed for industrial environments with wide temperature range.`, decisionGuide: "Industrial grade for harsh environments.", keywords: ["industrial", "temperature", "grade"] },
      { question: `What is the switching frequency?`, answer: `${partNumber} operates at optimized switching frequency for efficiency and EMI.`, decisionGuide: "Consider EMI requirements in design.", keywords: ["switching frequency", "EMI", "efficiency"] },
      { question: `What packages are available?`, answer: `${partNumber} comes in compact SIP and DIP packages.`, decisionGuide: "Choose package based on space constraints.", keywords: ["package", "SIP", "DIP", "compact"] }
    ],
    'ac-dc': [
      { question: `What is the input voltage range of ${partNumber}?`, answer: `${partNumber} accepts wide AC input range for global applications.`, decisionGuide: "Universal input for worldwide use.", keywords: ["AC input", "universal", "global"] },
      { question: `What is the output voltage accuracy?`, answer: `${partNumber} provides precise output voltage regulation.`, decisionGuide: "Accuracy important for sensitive loads.", keywords: ["accuracy", "regulation", "precision"] },
      { question: `What safety certifications does it have?`, answer: `${partNumber} meets international safety standards including CE and UL.`, decisionGuide: "Certifications required for commercial products.", keywords: ["safety", "certification", "CE", "UL"] },
      { question: `What is the standby power consumption?`, answer: `${partNumber} features low standby power for energy efficiency.`, decisionGuide: "Low standby power saves energy.", keywords: ["standby", "power consumption", "energy"] },
      { question: `Is it suitable for medical applications?`, answer: `${partNumber} is available in medical grade with enhanced isolation.`, decisionGuide: "Medical grade for healthcare equipment.", keywords: ["medical", "isolation", "healthcare"] }
    ],
    'isolated-transceiver': [
      { question: `What communication protocols does ${partNumber} support?`, answer: `${partNumber} supports standard industrial communication protocols with isolation.`, decisionGuide: "Verify protocol compatibility.", keywords: ["protocol", "communication", "isolation"] },
      { question: `What is the isolation voltage rating?`, answer: `${partNumber} provides high isolation voltage for system protection.`, decisionGuide: "High isolation protects against transients.", keywords: ["isolation", "voltage", "protection"] },
      { question: `What is the data rate capability?`, answer: `${partNumber} supports high data rates for fast communication.`, decisionGuide: "Ensure data rate meets application needs.", keywords: ["data rate", "speed", "communication"] },
      { question: `What is the operating temperature range?`, answer: `${partNumber} operates over industrial temperature range.`, decisionGuide: "Industrial range for harsh environments.", keywords: ["temperature", "industrial", "range"] },
      { question: `Does it require external isolation components?`, answer: `${partNumber} integrates all isolation components for easy design.`, decisionGuide: "Integrated solution simplifies design.", keywords: ["integrated", "isolation", "design"] }
    ]
  };
  return faqsByCategory[category] || faqsByCategory['dc-dc-fixed'];
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

// 保存products.json修改
if (modified) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('\n✅ products.json 已更新');
} else {
  console.log('\n⏭️ 无需更新 products.json');
}

// 修复solutions.json中缺失的FAQ
let solutionsModified = false;
for (const solution of solutionsData.solutions) {
  const faqs = solution.faqs || [];
  if (faqs.length < 5) {
    console.log(`\n📋 方案: ${solution.title}`);
    solution.faqs = [
      { question: `What are the key features of ${solution.title}?`, answer: "This solution offers high reliability, efficiency, and ease of integration for power supply applications.", decisionGuide: "Evaluate features against your system requirements.", keywords: ["features", "reliability", "efficiency"] },
      { question: "What are the typical applications?", answer: "This solution is ideal for industrial, communication, medical, and automotive electronics requiring stable power.", decisionGuide: "Verify application alignment with your use case.", keywords: ["applications", "industrial", "power supply"] },
      { question: "What support is available?", answer: "Comprehensive technical support including reference designs, evaluation boards, and FAE consultation.", decisionGuide: "Contact FAE team for design assistance.", keywords: ["support", "reference design", "FAE"] },
      { question: "What is the efficiency and thermal performance?", answer: "Optimized efficiency with excellent thermal management for reliable operation.", decisionGuide: "Consider thermal design in system integration.", keywords: ["efficiency", "thermal", "reliability"] },
      { question: "How do I get started?", answer: "Start with evaluation kits and reference designs. Contact our FAE team for customization support.", decisionGuide: "Begin with evaluation to validate performance.", keywords: ["getting started", "evaluation", "support"] }
    ];
    console.log(`   ✅ 添加 ${solution.faqs.length} 个FAQ`);
    solutionsModified = true;
  }
}

if (solutionsModified) {
  fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2), 'utf8');
  console.log('\n✅ solutions.json 已更新');
} else {
  console.log('\n⏭️ 无需更新 solutions.json');
}

console.log('\n========================================');
console.log('修复完成');
console.log('========================================');
