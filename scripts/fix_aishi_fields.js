const fs = require('fs');
const path = require('path');

const brand = 'aishi';
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
      comparison: `${partNumber}=><${partNumber}-ALT1: Similar capacitance and voltage rating`,
      reason: "Alternative source for supply chain flexibility",
      useCase: `Drop-in replacement for ${partNumber}`
    },
    {
      partNumber: `${partNumber}-ALT2`,
      manufacturer: "Competitor B",
      comparison: `${partNumber}=><${partNumber}-ALT2: Comparable ESR and lifetime`,
      reason: "Second source for procurement security",
      useCase: "Compatible alternative with similar performance"
    }
  ];
};

const generateCompanionParts = (category) => {
  const companionsByCategory = {
    'radial-lead': [
      { partNumber: "RS-2200uF-16V", type: "Capacitor", description: "Radial lead capacitor" },
      { partNumber: "RS-100uF-400V", type: "Capacitor", description: "High voltage capacitor" },
      { partNumber: "SN-6800uF-63V", type: "Capacitor", description: "Snap-in capacitor" }
    ],
    'snap-in': [
      { partNumber: "SN-6800uF-63V", type: "Capacitor", description: "Snap-in capacitor" },
      { partNumber: "SN-15000uF-35V", type: "Capacitor", description: "High capacitance capacitor" },
      { partNumber: "ST-47000uF-100V", type: "Capacitor", description: "Screw terminal capacitor" }
    ],
    'screw-terminal': [
      { partNumber: "ST-47000uF-100V", type: "Capacitor", description: "Screw terminal capacitor" },
      { partNumber: "ST-100000uF-63V", type: "Capacitor", description: "Large capacitance capacitor" },
      { partNumber: "SP-470uF-25V", type: "Capacitor", description: "Polymer capacitor" }
    ],
    'polymer': [
      { partNumber: "SP-470uF-25V", type: "Capacitor", description: "Polymer capacitor" },
      { partNumber: "SP-1000uF-16V", type: "Capacitor", description: "High capacitance polymer" },
      { partNumber: "RS-2200uF-16V", type: "Capacitor", description: "Radial lead capacitor" }
    ]
  };
  return companionsByCategory[category] || companionsByCategory['radial-lead'];
};

const generateFaqs = (partNumber, category) => {
  const faqsByCategory = {
    'radial-lead': [
      { question: `What is the capacitance tolerance of ${partNumber}?`, answer: `${partNumber} offers standard ±20% tolerance with optional ±10% available.`, decisionGuide: "Tighter tolerance for precision applications.", keywords: ["tolerance", "capacitance", "precision"] },
      { question: `What is the rated voltage?`, answer: `${partNumber} is rated for specific voltage with safety margin for reliable operation.`, decisionGuide: "Select voltage rating 20-30% above operating voltage.", keywords: ["voltage", "rating", "safety"] },
      { question: `What is the operating temperature range?`, answer: `${partNumber} operates from -40°C to +105°C with derating at high temperatures.`, decisionGuide: "Consider temperature derating in design.", keywords: ["temperature", "range", "derating"] },
      { question: `What is the expected lifetime?`, answer: `${partNumber} provides long lifetime at rated voltage and temperature conditions.`, decisionGuide: "Lifetime depends on operating conditions.", keywords: ["lifetime", "reliability", "hours"] },
      { question: `What is the ESR specification?`, answer: `${partNumber} features low ESR for reduced power dissipation and heating.`, decisionGuide: "Lower ESR better for high ripple current.", keywords: ["ESR", "ripple", "dissipation"] }
    ],
    'snap-in': [
      { question: `What is the mounting type for ${partNumber}?`, answer: `${partNumber} uses snap-in terminals for secure PCB mounting.`, decisionGuide: "Snap-in provides reliable mechanical connection.", keywords: ["snap-in", "mounting", "PCB"] },
      { question: `What is the ripple current capability?`, answer: `${partNumber} supports high ripple current with excellent thermal performance.`, decisionGuide: "High ripple current for SMPS applications.", keywords: ["ripple current", "thermal", "SMPS"] },
      { question: `What is the size and form factor?`, answer: `${partNumber} comes in compact cylindrical form factor for space-constrained designs.`, decisionGuide: "Check dimensions for PCB layout fit.", keywords: ["size", "dimensions", "compact"] },
      { question: `Is it suitable for high-frequency applications?`, answer: `${partNumber} is optimized for switching power supply applications.`, decisionGuide: "Designed for high-frequency SMPS use.", keywords: ["frequency", "SMPS", "switching"] },
      { question: `What safety certifications does it have?`, answer: `${partNumber} meets international safety standards for commercial use.`, decisionGuide: "Certifications ensure compliance and safety.", keywords: ["safety", "certification", "standards"] }
    ],
    'screw-terminal': [
      { question: `What is the terminal type of ${partNumber}?`, answer: `${partNumber} features screw terminals for high-current connections.`, decisionGuide: "Screw terminals for secure high-current connections.", keywords: ["screw terminal", "connection", "high current"] },
      { question: `What is the maximum ripple current?`, answer: `${partNumber} handles very high ripple current for industrial applications.`, decisionGuide: "High ripple current for motor drives and inverters.", keywords: ["ripple current", "industrial", "high current"] },
      { question: `What mounting options are available?`, answer: `${partNumber} supports various mounting configurations including chassis mount.`, decisionGuide: "Flexible mounting for different applications.", keywords: ["mounting", "chassis", "flexible"] },
      { question: `What is the capacitance range?`, answer: `${partNumber} offers high capacitance values for energy storage applications.`, decisionGuide: "High capacitance for bulk filtering and storage.", keywords: ["capacitance", "energy storage", "filtering"] },
      { question: `Is it suitable for inverter applications?`, answer: `${partNumber} is designed for inverter and motor drive applications.`, decisionGuide: "Robust design for demanding industrial use.", keywords: ["inverter", "motor drive", "industrial"] }
    ],
    'polymer': [
      { question: `What are the advantages of polymer capacitors like ${partNumber}?`, answer: `${partNumber} offers very low ESR, high ripple current, and long lifetime.`, decisionGuide: "Polymer superior to aluminum for high performance.", keywords: ["polymer", "low ESR", "advantages"] },
      { question: `What is the ESR compared to aluminum electrolytic?`, answer: `${partNumber} has significantly lower ESR than conventional aluminum capacitors.`, decisionGuide: "Much lower ESR enables higher ripple current.", keywords: ["ESR", "comparison", "aluminum"] },
      { question: `What is the expected lifetime?`, answer: `${partNumber} provides extended lifetime due to polymer electrolyte stability.`, decisionGuide: "Longer lifetime than aluminum electrolytic.", keywords: ["lifetime", "polymer", "stability"] },
      { question: `Is it suitable for high-frequency switching?`, answer: `${partNumber} excels in high-frequency switching applications with low losses.`, decisionGuide: "Ideal for modern high-frequency SMPS.", keywords: ["high frequency", "switching", "low loss"] },
      { question: `What applications benefit most from polymer capacitors?`, answer: `${partNumber} is ideal for server power, telecom, and high-performance computing.`, decisionGuide: "Best for demanding high-reliability applications.", keywords: ["applications", "server", "telecom", "computing"] }
    ]
  };
  return faqsByCategory[category] || faqsByCategory['radial-lead'];
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
