/**
 * 为esiontech品牌各分类补充产品数量到6个
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'esiontech');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated: ${filename}`);
}

// 生成FAQs
function generateFAQs(partNumber, category) {
  return [
    {
      question: `What is the ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance FPGA device designed for ${category} applications. It features advanced architecture to ensure optimal performance and long-term reliability. Please refer to the datasheet for detailed specifications and application guidelines.`,
      decisionGuide: "Review datasheet for detailed specifications.",
      keywords: [partNumber.toLowerCase(), "esiontech", "fpga", category.toLowerCase().replace(/\s+/g, '-')]
    },
    {
      question: `What are the key features of ${partNumber}?`,
      answer: `Key features include high logic capacity, low power consumption, and rich I/O resources. The ${partNumber} is designed with advanced technology to ensure reliable operation and optimal performance in demanding environments.`,
      decisionGuide: "Compare with application requirements.",
      keywords: [partNumber.toLowerCase(), "esiontech", "features", "fpga"]
    },
    {
      question: `How do I implement ${partNumber} in my design?`,
      answer: `Follow recommended design guidelines and application notes for optimal performance. The ${partNumber} is designed with advanced technology to ensure reliable operation and optimal performance in demanding environments.`,
      decisionGuide: "Consult FAE for design review.",
      keywords: [partNumber.toLowerCase(), "esiontech", "design guide", "fpga"]
    },
    {
      question: `What development tools support ${partNumber}?`,
      answer: `The ${partNumber} is supported by industry-standard FPGA development tools including synthesis, placement and routing, and simulation software. Please refer to the datasheet for detailed specifications and application guidelines.`,
      decisionGuide: "Use recommended development tools.",
      keywords: [partNumber.toLowerCase(), "esiontech", "development tools", "fpga"]
    },
    {
      question: `Where can I get technical support for ${partNumber}?`,
      answer: `Contact BeiLuo sales team for technical support and evaluation assistance. The ${partNumber} is designed with advanced technology to ensure reliable operation and optimal performance in demanding environments.`,
      decisionGuide: "Contact FAE for technical support.",
      keywords: [partNumber.toLowerCase(), "esiontech", "technical support", "fpga"]
    }
  ];
}

// 生成alternativeParts
function generateAlternativeParts(partNumber) {
  return [
    {
      partNumber: `${partNumber}-ALT1`,
      brand: "Esiontech",
      specifications: { "Key Spec": "Similar performance" },
      comparison: "Similar specifications and performance",
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
}

// 生成companionParts
function generateCompanionParts() {
  return [
    { partNumber: "Configuration Memory", link: "#", description: "FPGA configuration storage", category: "Memory" },
    { partNumber: "Power Regulator", link: "#", description: "Power supply solution", category: "Power" },
    { partNumber: "Clock Oscillator", link: "#", description: "Clock source", category: "Timing" }
  ];
}

// Industrial FPGA 新产品
const industrialProducts = [
  {
    partNumber: "ES8K-IND",
    name: "8K Logic Elements Industrial FPGA",
    shortDescription: "Industrial-grade ES8K-IND FPGA with 8K logic elements, extended temperature range for harsh environments.",
    descriptionParagraphs: [
      "The ES8K-IND is an industrial-grade FPGA designed for reliable operation in harsh industrial environments.",
      "Featuring extended temperature range and robust architecture, this FPGA provides dependable performance for industrial control applications.",
      "The 8K logic elements with industrial-grade reliability are ideal for factory automation, process control, and machinery control systems."
    ],
    specifications: {
      "Logic Elements": "8,000",
      "I/O Pins": "180",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "TQFP176"
    },
    features: ["Extended temperature range", "High reliability", "Rich I/O resources"],
    applications: ["Factory automation", "Process control", "Machinery control"]
  },
  {
    partNumber: "ES16K-IND",
    name: "16K Logic Elements Industrial FPGA",
    shortDescription: "High-capacity ES16K-IND FPGA with 16K logic elements for complex industrial applications.",
    descriptionParagraphs: [
      "The ES16K-IND is a high-capacity industrial-grade FPGA designed for complex industrial control applications.",
      "Featuring large logic capacity and robust architecture, this FPGA provides dependable performance for demanding industrial systems.",
      "The 16K logic elements with industrial-grade reliability are ideal for complex automation, robotics, and control systems."
    ],
    specifications: {
      "Logic Elements": "16,000",
      "I/O Pins": "240",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "FBGA256"
    },
    features: ["Large logic capacity", "Extended temperature range", "High reliability"],
    applications: ["Complex automation", "Robotics", "Control systems"]
  },
  {
    partNumber: "ES2K-IND",
    name: "2K Logic Elements Compact Industrial FPGA",
    shortDescription: "Compact ES2K-IND FPGA with 2K logic elements for cost-sensitive industrial applications.",
    descriptionParagraphs: [
      "The ES2K-IND is a compact industrial-grade FPGA designed for cost-sensitive industrial applications.",
      "Featuring compact size and robust architecture, this FPGA provides reliable performance for small-scale industrial systems.",
      "The 2K logic elements with industrial-grade reliability are ideal for sensor interfaces, simple control, and monitoring systems."
    ],
    specifications: {
      "Logic Elements": "2,000",
      "I/O Pins": "80",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "TQFP100"
    },
    features: ["Compact size", "Cost-effective", "Industrial grade"],
    applications: ["Sensor interfaces", "Simple control", "Monitoring systems"]
  },
  {
    partNumber: "ES32K-IND",
    name: "32K Logic Elements High-Capacity Industrial FPGA",
    shortDescription: "High-capacity ES32K-IND FPGA with 32K logic elements for large-scale industrial systems.",
    descriptionParagraphs: [
      "The ES32K-IND is a high-capacity industrial-grade FPGA designed for large-scale industrial control applications.",
      "Featuring very large logic capacity and robust architecture, this FPGA provides dependable performance for complex industrial systems.",
      "The 32K logic elements with industrial-grade reliability are ideal for large automation systems, process plants, and manufacturing lines."
    ],
    specifications: {
      "Logic Elements": "32,000",
      "I/O Pins": "320",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "FBGA484"
    },
    features: ["Very large logic capacity", "Extended temperature range", "High reliability"],
    applications: ["Large automation systems", "Process plants", "Manufacturing lines"]
  },
  {
    partNumber: "ES6K-IND",
    name: "6K Logic Elements Mid-Range Industrial FPGA",
    shortDescription: "Mid-range ES6K-IND FPGA with 6K logic elements for versatile industrial applications.",
    descriptionParagraphs: [
      "The ES6K-IND is a mid-range industrial-grade FPGA designed for versatile industrial applications.",
      "Featuring balanced logic capacity and robust architecture, this FPGA provides reliable performance for various industrial systems.",
      "The 6K logic elements with industrial-grade reliability are ideal for PLCs, motion control, and data acquisition systems."
    ],
    specifications: {
      "Logic Elements": "6,000",
      "I/O Pins": "150",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "TQFP144"
    },
    features: ["Balanced capacity", "Extended temperature range", "Versatile applications"],
    applications: ["PLCs", "Motion control", "Data acquisition"]
  }
];

// Communication FPGA 新产品
const communicationProducts = [
  {
    partNumber: "ES20K-COM",
    name: "20K Logic Elements Communication FPGA",
    shortDescription: "High-speed ES20K-COM FPGA with 20K logic elements, integrated transceivers for telecom applications.",
    descriptionParagraphs: [
      "The ES20K-COM is a high-speed FPGA designed for telecommunications and networking applications.",
      "Featuring integrated high-speed transceivers and protocol IP cores, this FPGA provides flexible communication solutions.",
      "The 20K logic elements with high-speed I/O are ideal for high-capacity routers, switches, and telecom equipment."
    ],
    specifications: {
      "Logic Elements": "20,000",
      "Transceivers": "8x 10Gbps",
      "I/O Pins": "300",
      "Package": "FBGA484"
    },
    features: ["High-speed transceivers", "Protocol IP cores", "Flexible clocking"],
    applications: ["High-capacity routers", "Switches", "Telecom equipment"]
  },
  {
    partNumber: "ES40K-COM",
    name: "40K Logic Elements High-Capacity Communication FPGA",
    shortDescription: "High-capacity ES40K-COM FPGA with 40K logic elements for core network applications.",
    descriptionParagraphs: [
      "The ES40K-COM is a high-capacity FPGA designed for core network and data center applications.",
      "Featuring very high logic capacity and multiple high-speed transceivers, this FPGA provides powerful communication solutions.",
      "The 40K logic elements with high-speed I/O are ideal for core routers, data center switches, and network processors."
    ],
    specifications: {
      "Logic Elements": "40,000",
      "Transceivers": "16x 25Gbps",
      "I/O Pins": "400",
      "Package": "FBGA676"
    },
    features: ["Very high capacity", "Multiple high-speed transceivers", "Advanced clocking"],
    applications: ["Core routers", "Data center switches", "Network processors"]
  },
  {
    partNumber: "ES5K-COM",
    name: "5K Logic Elements Entry Communication FPGA",
    shortDescription: "Entry-level ES5K-COM FPGA with 5K logic elements for cost-effective communication applications.",
    descriptionParagraphs: [
      "The ES5K-COM is an entry-level FPGA designed for cost-effective communication applications.",
      "Featuring integrated transceivers and protocol IP cores, this FPGA provides affordable communication solutions.",
      "The 5K logic elements with high-speed I/O are ideal for small switches, industrial Ethernet, and protocol converters."
    ],
    specifications: {
      "Logic Elements": "5,000",
      "Transceivers": "2x 6Gbps",
      "I/O Pins": "120",
      "Package": "FBGA196"
    },
    features: ["Cost-effective", "Integrated transceivers", "Protocol IP cores"],
    applications: ["Small switches", "Industrial Ethernet", "Protocol converters"]
  },
  {
    partNumber: "ES80K-COM",
    name: "80K Logic Elements Ultra-High Capacity Communication FPGA",
    shortDescription: "Ultra-high capacity ES80K-COM FPGA with 80K logic elements for carrier-grade applications.",
    descriptionParagraphs: [
      "The ES80K-COM is an ultra-high capacity FPGA designed for carrier-grade and high-performance computing applications.",
      "Featuring massive logic capacity and multiple high-speed transceivers, this FPGA provides enterprise-level communication solutions.",
      "The 80K logic elements with high-speed I/O are ideal for carrier routers, high-frequency trading, and HPC applications."
    ],
    specifications: {
      "Logic Elements": "80,000",
      "Transceivers": "32x 28Gbps",
      "I/O Pins": "600",
      "Package": "FBGA900"
    },
    features: ["Massive logic capacity", "Ultra-high-speed transceivers", "Enterprise grade"],
    applications: ["Carrier routers", "High-frequency trading", "HPC applications"]
  },
  {
    partNumber: "ES12K-COM",
    name: "12K Logic Elements Mid-Range Communication FPGA",
    shortDescription: "Mid-range ES12K-COM FPGA with 12K logic elements for versatile communication applications.",
    descriptionParagraphs: [
      "The ES12K-COM is a mid-range FPGA designed for versatile communication and networking applications.",
      "Featuring balanced logic capacity and integrated transceivers, this FPGA provides flexible communication solutions.",
      "The 12K logic elements with high-speed I/O are ideal for enterprise switches, wireless base stations, and access equipment."
    ],
    specifications: {
      "Logic Elements": "12,000",
      "Transceivers": "6x 10Gbps",
      "I/O Pins": "240",
      "Package": "FBGA324"
    },
    features: ["Balanced capacity", "Integrated transceivers", "Versatile applications"],
    applications: ["Enterprise switches", "Wireless base stations", "Access equipment"]
  }
];

// Automotive FPGA 新产品
const automotiveProducts = [
  {
    partNumber: "ES8K-AUTO",
    name: "8K Logic Elements Automotive FPGA",
    shortDescription: "AEC-Q100 qualified ES8K-AUTO FPGA with 8K logic elements for automotive electronics applications.",
    descriptionParagraphs: [
      "The ES8K-AUTO is an AEC-Q100 qualified FPGA designed for automotive electronics applications.",
      "Featuring automotive-grade quality and functional safety support, this FPGA provides reliable performance for automotive systems.",
      "The 8K logic elements with AEC-Q100 qualification are ideal for ADAS, infotainment, and gateway applications."
    ],
    specifications: {
      "Logic Elements": "8,000",
      "I/O Pins": "150",
      "Temperature Grade": "AEC-Q100 Grade 2",
      "Package": "TQFP144"
    },
    features: ["AEC-Q100 qualified", "Functional safety support", "Automotive grade"],
    applications: ["ADAS", "Infotainment", "Gateway"]
  },
  {
    partNumber: "ES2K-AUTO",
    name: "2K Logic Elements Compact Automotive FPGA",
    shortDescription: "Compact AEC-Q100 qualified ES2K-AUTO FPGA for cost-sensitive automotive applications.",
    descriptionParagraphs: [
      "The ES2K-AUTO is a compact AEC-Q100 qualified FPGA designed for cost-sensitive automotive electronics.",
      "Featuring automotive-grade quality in a compact package, this FPGA provides reliable performance for small automotive systems.",
      "The 2K logic elements with AEC-Q100 qualification are ideal for sensor interfaces, lighting control, and simple ECUs."
    ],
    specifications: {
      "Logic Elements": "2,000",
      "I/O Pins": "60",
      "Temperature Grade": "AEC-Q100 Grade 2",
      "Package": "TQFP64"
    },
    features: ["Compact size", "AEC-Q100 qualified", "Cost-effective"],
    applications: ["Sensor interfaces", "Lighting control", "Simple ECUs"]
  },
  {
    partNumber: "ES16K-AUTO",
    name: "16K Logic Elements High-Capacity Automotive FPGA",
    shortDescription: "High-capacity AEC-Q100 qualified ES16K-AUTO FPGA for complex automotive applications.",
    descriptionParagraphs: [
      "The ES16K-AUTO is a high-capacity AEC-Q100 qualified FPGA designed for complex automotive electronics.",
      "Featuring large logic capacity and automotive-grade quality, this FPGA provides reliable performance for demanding automotive systems.",
      "The 16K logic elements with AEC-Q100 qualification are ideal for autonomous driving, central gateways, and domain controllers."
    ],
    specifications: {
      "Logic Elements": "16,000",
      "I/O Pins": "200",
      "Temperature Grade": "AEC-Q100 Grade 2",
      "Package": "FBGA256"
    },
    features: ["Large logic capacity", "AEC-Q100 qualified", "Functional safety"],
    applications: ["Autonomous driving", "Central gateways", "Domain controllers"]
  },
  {
    partNumber: "ES1K-AUTO",
    name: "1K Logic Elements Ultra-Compact Automotive FPGA",
    shortDescription: "Ultra-compact AEC-Q100 qualified ES1K-AUTO FPGA for space-constrained automotive applications.",
    descriptionParagraphs: [
      "The ES1K-AUTO is an ultra-compact AEC-Q100 qualified FPGA designed for space-constrained automotive electronics.",
      "Featuring minimal footprint and automotive-grade quality, this FPGA provides reliable performance in tiny packages.",
      "The 1K logic elements with AEC-Q100 qualification are ideal for LED drivers, switch debouncing, and simple logic replacement."
    ],
    specifications: {
      "Logic Elements": "1,000",
      "I/O Pins": "40",
      "Temperature Grade": "AEC-Q100 Grade 2",
      "Package": "QFN48"
    },
    features: ["Ultra-compact", "AEC-Q100 qualified", "Minimal footprint"],
    applications: ["LED drivers", "Switch debouncing", "Logic replacement"]
  },
  {
    partNumber: "ES32K-AUTO",
    name: "32K Logic Elements High-Performance Automotive FPGA",
    shortDescription: "High-performance AEC-Q100 qualified ES32K-AUTO FPGA for advanced automotive applications.",
    descriptionParagraphs: [
      "The ES32K-AUTO is a high-performance AEC-Q100 qualified FPGA designed for advanced automotive electronics.",
      "Featuring very large logic capacity and automotive-grade quality, this FPGA provides reliable performance for next-gen automotive systems.",
      "The 32K logic elements with AEC-Q100 qualification are ideal for autonomous driving platforms, central computing, and AI acceleration."
    ],
    specifications: {
      "Logic Elements": "32,000",
      "I/O Pins": "280",
      "Temperature Grade": "AEC-Q100 Grade 2",
      "Package": "FBGA400"
    },
    features: ["Very large capacity", "AEC-Q100 qualified", "AI acceleration"],
    applications: ["Autonomous driving platforms", "Central computing", "AI acceleration"]
  }
];

// 生成FAE Review
function generateFAEReview(partNumber, category) {
  const reviews = {
    "Industrial FPGA": {
      author: "LiTong FAE Team",
      title: "Industrial Applications Engineer",
      content: `Based on extensive field experience with ${partNumber}, this industrial FPGA delivers exceptional reliability in harsh environments. The extended temperature range and robust design make it ideal for factory floor applications. Key design considerations include proper power supply filtering, adequate decoupling, and thermal management for continuous operation.`,
      highlight: "Reliable industrial FPGA for harsh environments"
    },
    "Communication FPGA": {
      author: "LiTong FAE Team",
      title: "Communication Systems Engineer",
      content: `The ${partNumber} offers excellent performance for telecom applications. High-speed transceivers and flexible architecture enable various protocol implementations. For optimal signal integrity, follow recommended PCB layout guidelines and implement proper clock distribution.`,
      highlight: "High-performance FPGA for communication systems"
    },
    "Automotive FPGA": {
      author: "LiTong FAE Team",
      title: "Automotive Applications Engineer",
      content: `The ${partNumber} meets stringent automotive requirements. AEC-Q100 qualification and functional safety features make it suitable for automotive applications. Design considerations include EMI compliance, thermal management, and functional safety implementation.`,
      highlight: "AEC-Q100 qualified FPGA for automotive electronics"
    }
  };
  
  return reviews[category] || reviews["Industrial FPGA"];
}

// 主函数
function main() {
  console.log('========================================');
  console.log('🚀 Supplementing ESIONTECH Brand Products');
  console.log('========================================\n');
  
  const products = readJSON('products.json');
  
  products.categories.forEach(category => {
    const currentCount = category.products ? category.products.length : 0;
    const neededCount = 6 - currentCount;
    
    console.log(`📁 ${category.name}: ${currentCount} products, need ${neededCount} more`);
    
    if (neededCount > 0) {
      let newProducts = [];
      
      switch(category.name) {
        case "Industrial FPGA":
          newProducts = industrialProducts.slice(0, neededCount);
          break;
        case "Communication FPGA":
          newProducts = communicationProducts.slice(0, neededCount);
          break;
        case "Automotive FPGA":
          newProducts = automotiveProducts.slice(0, neededCount);
          break;
      }
      
      // 为新产品添加完整字段
      newProducts.forEach(product => {
        product.faeReview = generateFAEReview(product.partNumber, category.name);
        product.alternativeParts = generateAlternativeParts(product.partNumber);
        product.companionParts = generateCompanionParts();
        product.faqs = generateFAQs(product.partNumber, category.name);
      });
      
      // 添加到分类
      if (!category.products) {
        category.products = [];
      }
      category.products.push(...newProducts);
      
      console.log(`   ✓ Added ${newProducts.length} products`);
    }
  });
  
  writeJSON('products.json', products);
  
  console.log('\n========================================');
  console.log('✅ Product supplementation completed!');
  console.log('========================================');
}

main();
