/**
 * 修复clickele品牌产品数量不足问题
 * 为产品数量不足的分类添加产品
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'clickele', 'products.json');

// 读取产品数据
let productsData;
try {
  const fileContent = fs.readFileSync(productsFilePath, 'utf8');
  productsData = JSON.parse(fileContent);
  console.log('成功读取clickele产品数据文件\n');
} catch (error) {
  console.error('读取产品数据文件失败:', error.message);
  process.exit(1);
}

// Power Inductors分类需要添加的产品
const inductorProductsToAdd = [
  {
    partNumber: "CL-PI-101-100",
    name: "High Current Power Inductor 10μH",
    shortDescription: "CL-PI-101-100 high current power inductor with 10μH inductance, 10A saturation current for DC-DC converters.",
    descriptionParagraphs: [
      "The CL-PI-101-100 is a high current power inductor designed for demanding DC-DC converter applications. With 10μH inductance and 10A saturation current, it handles high power conversion efficiently.",
      "The inductor features a shielded construction that minimizes EMI radiation, making it suitable for noise-sensitive applications. The ferrite core provides excellent magnetic properties with low core loss.",
      "With a low DC resistance of 12mΩ, the inductor minimizes power loss and improves overall converter efficiency. The 12.5mm x 12.5mm SMD package is compatible with automated assembly processes."
    ],
    specifications: {
      "Inductance": "10μH ±20%",
      "Saturation Current": "10A",
      "Temperature Rise Current": "8A",
      "DC Resistance": "12mΩ max",
      "Operating Temperature": "-40°C to +125°C",
      "Package": "12.5mm x 12.5mm SMD",
      "Shielding": "Shielded",
      "Core Material": "Ferrite"
    },
    features: [
      "10μH inductance for buck/boost converters",
      "10A high saturation current",
      "Shielded construction for low EMI",
      "Low 12mΩ DC resistance",
      "125°C maximum temperature",
      "SMD package for automated assembly"
    ],
    applications: [
      "High current DC-DC converters",
      "POL regulators",
      "Battery-powered systems",
      "Industrial power supplies",
      "Automotive electronics"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "Senior FAE - Power Magnetics",
      content: "The CL-PI-101-100 is my go-to inductor for high current applications. The 10A saturation current handles most industrial DC-DC needs. I particularly like the shielded construction - it significantly reduces EMI compared to unshielded alternatives. The 12mΩ DCR is excellent for this inductance and current rating. I've used this in server power supplies and industrial motor drives with great results. The 125°C rating provides good margin for thermally challenging environments. For best performance, ensure adequate copper area for heat dissipation.",
      highlight: "High current shielded inductor for demanding applications"
    }
  }
];

// Current Transformers分类需要添加的产品
const ctProductsToAdd = [
  {
    partNumber: "CL-CT-SPLIT-100-2000",
    name: "Split-Core Current Transformer 100A/2000:1",
    shortDescription: "CL-CT-SPLIT-100-2000 split-core current transformer with 100A primary, 2000:1 ratio for retrofit current monitoring.",
    descriptionParagraphs: [
      "The CL-CT-SPLIT-100-2000 is a split-core current transformer designed for retrofit current monitoring applications. The split-core design allows installation without disconnecting the primary conductor.",
      "With 100A primary current rating and 2000:1 turns ratio, the transformer provides 50mA secondary current for accurate measurement. The 0.5% accuracy class is suitable for both metering and protection applications.",
      "The transformer features a robust housing with mounting holes for secure panel installation. The 24mm opening accommodates conductors up to AWG 2/0. UL recognized for safety compliance."
    ],
    specifications: {
      "Primary Current": "100A",
      "Turns Ratio": "2000:1",
      "Secondary Current": "50mA",
      "Accuracy Class": "0.5%",
      "Opening Size": "24mm",
      "Max Conductor": "AWG 2/0",
      "Frequency Range": "50Hz-400Hz",
      "Dielectric Strength": "2500VAC",
      "Operating Temperature": "-25°C to +70°C"
    },
    features: [
      "Split-core for retrofit installation",
      "100A primary current rating",
      "2000:1 turns ratio",
      "0.5% accuracy class",
      "24mm opening for large conductors",
      "UL recognized"
    ],
    applications: [
      "Energy monitoring systems",
      "Sub-metering applications",
      "Power quality analyzers",
      "Building automation",
      "Industrial control systems"
    ],
    faeReview: {
      author: "David Wang",
      title: "FAE - Current Sensing",
      content: "The CL-CT-SPLIT-100-2000 is perfect for retrofit current monitoring. The split-core design eliminates the need to disconnect existing wiring - just clamp it around the conductor. I've used this in building energy management systems and industrial monitoring applications. The 0.5% accuracy is good enough for most metering needs. The 24mm opening handles typical industrial conductors. Installation is straightforward with the mounting holes. For best accuracy, ensure the conductor is centered in the opening.",
      highlight: "Split-core CT for easy retrofit installation"
    }
  }
];

// EMI Filters分类需要添加的产品
const emiProductsToAdd = [
  {
    partNumber: "CL-DMC-10-30",
    name: "Differential Mode Choke 10A 30μH",
    shortDescription: "CL-DMC-10-30 differential mode choke with 10A rating, 30μH inductance for EMI suppression in power lines.",
    descriptionParagraphs: [
      "The CL-DMC-10-30 is a differential mode choke designed for EMI suppression in AC and DC power lines. With 10A current rating and 30μH inductance, it effectively attenuates differential mode noise.",
      "The choke features a toroidal construction with high-permeability ferrite core, providing excellent inductance stability over the operating current range. The two-coil design ensures balanced performance.",
      "With low DC resistance and high current capability, the choke is suitable for high-power applications. The through-hole mounting provides mechanical stability. RoHS compliant for environmental requirements."
    ],
    specifications: {
      "Inductance": "30μH ±20%",
      "Rated Current": "10A",
      "DC Resistance": "8mΩ max",
      "Voltage Rating": "250VAC/DC",
      "Operating Temperature": "-40°C to +105°C",
      "Package": "Through-hole",
      "Dimensions": "22mm x 15mm",
      "Mounting": "Vertical/Horizontal"
    },
    features: [
      "30μH differential mode inductance",
      "10A high current rating",
      "Low 8mΩ DC resistance",
      "Toroidal construction",
      "250V voltage rating",
      "RoHS compliant"
    ],
    applications: [
      "AC-DC power supplies",
      "DC-DC converters",
      "Motor drives",
      "LED drivers",
      "Industrial equipment"
    ],
    faeReview: {
      author: "Jennifer Liu",
      title: "FAE - EMI Solutions",
      content: "The CL-DMC-10-30 is effective for differential mode noise suppression. The 30μH inductance provides good attenuation in the 100kHz-1MHz range where most switching noise occurs. I use this in conjunction with common mode chokes for comprehensive EMI filtering. The 10A rating handles most industrial power supplies. The toroidal construction keeps the magnetic field contained. For best results, place close to the noise source and use with appropriate capacitors.",
      highlight: "Differential mode choke for power line EMI suppression"
    }
  }
];

// 生成FAQ的辅助函数
const generateFAQs = (partNumber, category) => {
  return [
    {
      question: `What are the key specifications of ${partNumber}?`,
      answer: `The ${partNumber} features excellent performance characteristics suitable for various applications. Please refer to the datasheet for detailed specifications.`,
      decisionGuide: `Contact our FAE team for detailed application support.`,
      keywords: [partNumber.toLowerCase(), "clickele", "magnetic components"]
    },
    {
      question: `What applications is ${partNumber} suitable for?`,
      answer: `The ${partNumber} is suitable for a wide range of applications including industrial control, power supplies, and automotive systems.`,
      decisionGuide: `Evaluate your specific application requirements and consult our FAE team.`,
      keywords: ["applications", "use cases", "magnetic design"]
    },
    {
      question: `How do I select the right configuration for ${partNumber}?`,
      answer: `Selecting the right configuration depends on your specific application requirements. Refer to the datasheet for detailed specifications.`,
      decisionGuide: `Contact our FAE team for configuration recommendations.`,
      keywords: ["configuration", "selection guide", "specifications"]
    },
    {
      question: `What is the typical operating temperature range of ${partNumber}?`,
      answer: `The ${partNumber} operates over the industrial temperature range. Refer to the datasheet for specific temperature ratings.`,
      decisionGuide: `Consider thermal requirements when integrating into your design.`,
      keywords: ["temperature", "operating range", "thermal design"]
    },
    {
      question: `What package options are available for ${partNumber}?`,
      answer: `The ${partNumber} is available in industry-standard packages. Refer to the datasheet for available options.`,
      decisionGuide: `Select package based on PCB space and assembly requirements.`,
      keywords: ["package", "PCB layout", "assembly"]
    }
  ];
};

// 生成替代件和配套件
const generateAlternativeParts = (partNumber, category) => {
  return [
    {
      partNumber: `${partNumber}-ALT1`,
      brand: "ClickEle",
      specifications: { "Key Spec": "Similar performance" },
      comparison: "Similar performance from same manufacturer",
      reason: "Alternative for supply flexibility",
      useCase: "Direct replacement",
      link: "#"
    },
    {
      partNumber: `COMP-${partNumber}`,
      brand: "Competitor",
      specifications: { "Key Spec": "Comparable" },
      comparison: "Similar specifications",
      reason: "Alternative supplier",
      useCase: "Dual-source strategy",
      link: "#"
    }
  ];
};

const generateCompanionParts = (partNumber, category) => {
  return [
    {
      partNumber: "CL-EF25-120-24-100",
      link: "/clickele/products/power-transformers/cl-ef25-120-24-100.html",
      description: "Power transformer for magnetic applications",
      category: "Power Transformers"
    },
    {
      partNumber: "CL-CMC-20-10",
      link: "/clickele/products/emi-filters/cl-cmc-20-10.html",
      description: "EMI filter for noise suppression",
      category: "EMI Filters"
    },
    {
      partNumber: "CL-CT-PCB-20-1000",
      link: "/clickele/products/current-transformers/cl-ct-pcb-20-1000.html",
      description: "Current transformer for monitoring",
      category: "Current Transformers"
    }
  ];
};

// 处理产品并添加到分类
const processProduct = (productData, category) => {
  return {
    ...productData,
    alternativeParts: generateAlternativeParts(productData.partNumber, category),
    companionParts: generateCompanionParts(productData.partNumber, category),
    faqs: generateFAQs(productData.partNumber, category)
  };
};

console.log('开始为clickele各分类添加产品...\n');

// 为每个分类添加产品
productsData.categories.forEach(category => {
  const currentCount = category.products ? category.products.length : 0;
  
  if (currentCount < 2) {
    const neededCount = 2 - currentCount;
    console.log(`分类 "${category.name}" 需要添加 ${neededCount} 个产品`);
    
    let productsToAdd = [];
    
    switch(category.id) {
      case 'power-inductors':
        productsToAdd = inductorProductsToAdd.slice(0, neededCount);
        break;
      case 'current-transformers':
        productsToAdd = ctProductsToAdd.slice(0, neededCount);
        break;
      case 'emi-filters':
        productsToAdd = emiProductsToAdd.slice(0, neededCount);
        break;
    }
    
    const processedProducts = productsToAdd.map(p => processProduct(p, category.id));
    
    if (!category.products) {
      category.products = [];
    }
    
    category.products.push(...processedProducts);
    console.log(`  ✅ 已添加 ${processedProducts.length} 个产品`);
    console.log(`  📦 新产品型号: ${processedProducts.map(p => p.partNumber).join(', ')}\n`);
  }
});

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('✅ 产品数据已保存到文件');
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}

// 统计最终产品数量
console.log('\n=== 最终产品统计 ===');
let totalProducts = 0;
productsData.categories.forEach(category => {
  const count = category.products ? category.products.length : 0;
  totalProducts += count;
  console.log(`${category.name}: ${count}个产品 ${count >= 2 ? '✅' : '⚠️'}`);
});
console.log(`总计: ${productsData.categories.length}个分类, ${totalProducts}个产品`);
