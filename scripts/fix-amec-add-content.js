#!/usr/bin/env node
/**
 * AMEC Brand Data Completion Script
 * Adds missing products, solutions, and support articles to meet requirements
 * 
 * Requirements:
 * - 4 secondary product categories with at least 4 products each
 * - At least 3 solution detail pages
 * - At least 5 technical support articles
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'amec');

console.log('🔧 AMEC Brand Data Completion Script\n');

// Read existing data files
const productsPath = path.join(DATA_DIR, 'products.json');
const solutionsPath = path.join(DATA_DIR, 'solutions.json');
const supportPath = path.join(DATA_DIR, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('📊 Current Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name}: ${productCount} products`);
});
console.log(`   Solutions: ${solutionsData.solutions.length}`);
console.log(`   Support Articles: ${supportData.articles.length}`);

// ==================== ADD PRODUCTS TO ETCHING EQUIPMENT ====================
console.log('\n📦 Adding products to Etching Equipment category...');
const etchingCategory = productsData.categories.find(cat => cat.id === 'etching-equipment');
const additionalEtchingProducts = [
  {
    partNumber: "Primo AD-RIE-2",
    name: "Advanced Dielectric Etching System Gen2",
    shortDescription: "Next-generation dual-frequency CCP etcher for 3nm and below with enhanced process control and productivity.",
    description: "The Primo AD-RIE-2 represents the next generation of AMEC's dielectric etching technology, designed for advanced logic manufacturing at 3nm and below.",
    descriptionParagraphs: [
      "The Primo AD-RIE-2 builds on the proven Primo AD-RIE platform with enhanced capabilities for sub-3nm manufacturing. The system features improved plasma uniformity and advanced process control algorithms.",
      "Key enhancements include: enhanced RF delivery system for better plasma stability, advanced temperature control for improved CD uniformity, and intelligent process control with machine learning optimization.",
      "The Gen2 system maintains the same footprint as the original while delivering 15% higher productivity and improved process performance for the most demanding applications."
    ],
    specifications: {
      "Wafer Size": "300mm",
      "Technology Node": "3nm and below",
      "Plasma Source": "Dual-frequency CCP",
      "RF Configuration": "60MHz + 2MHz",
      "Uniformity": "< ±2% (3σ)",
      "Selectivity": "> 30:1 (oxide to silicon)",
      "Throughput": "> 120 wafers/hour",
      "Footprint": "3.2m x 3.8m",
      "Source RF": "60MHz, 5kW",
      "Bias RF": "2MHz, 10kW",
      "Aspect Ratio": "Up to 80:1",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "3nm Logic Manufacturing",
      "Advanced Contact Etching",
      "Ultra-low k Dielectric Etching",
      "High Aspect Ratio Via Etching"
    ],
    features: [
      "Enhanced plasma uniformity",
      "Machine learning process optimization",
      "15% higher productivity",
      "Sub-3nm capability",
      "Advanced temperature control"
    ],
    stock: {
      status: "in_stock",
      quantity: 3,
      leadTime: "6-9 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$3.5M - $4.2M"
    }
  },
  {
    partNumber: "Primo SSC-M",
    name: "Mid-Range Silicon Etching System",
    shortDescription: "Cost-effective ICP etcher for silicon applications in mature nodes with excellent performance and reliability.",
    description: "The Primo SSC-M provides cost-effective silicon etching capability for mature node manufacturing, offering excellent performance at competitive pricing.",
    descriptionParagraphs: [
      "The Primo SSC-M is designed for cost-sensitive applications in mature node manufacturing (28nm and above). It provides the same core ICP technology as the flagship Primo SSC but optimized for cost-effectiveness.",
      "Key features include: proven ICP source technology for reliable operation, simplified configuration for lower cost, and compatibility with standard process recipes from the Primo SSC.",
      "This system is ideal for memory manufacturing, power devices, and other applications where extreme precision is not required but reliability and productivity remain important."
    ],
    specifications: {
      "Wafer Size": "300mm",
      "Technology Node": "28nm - 90nm",
      "Plasma Source": "ICP",
      "RF Configuration": "13.56MHz + 400kHz",
      "Uniformity": "< ±3% (3σ)",
      "Selectivity": "> 15:1 (silicon to oxide)",
      "Throughput": "> 80 wafers/hour",
      "Footprint": "2.8m x 3.2m",
      "Source RF": "13.56MHz, 3kW",
      "Bias RF": "400kHz, 5kW",
      "Aspect Ratio": "Up to 40:1",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "Memory Device Manufacturing",
      "Power Device Etching",
      "MEMS Fabrication",
      "Mature Node Logic"
    ],
    features: [
      "Cost-effective design",
      "Proven ICP technology",
      "Recipe compatibility with Primo SSC",
      "Compact footprint",
      "High reliability"
    ],
    stock: {
      status: "in_stock",
      quantity: 5,
      leadTime: "4-6 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$1.8M - $2.2M"
    }
  }
];
etchingCategory.products.push(...additionalEtchingProducts);
console.log(`   Etching Equipment分类现在有 ${etchingCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO THIN FILM DEPOSITION ====================
console.log('\n📦 Adding products to Thin Film Deposition category...');
const depositionCategory = productsData.categories.find(cat => cat.id === 'thin-film-deposition');
const additionalDepositionProducts = [
  {
    partNumber: "Primo iDEA-HT",
    name: "High-Temperature CVD System",
    shortDescription: "Thermal CVD system for high-temperature dielectric deposition with excellent film quality and step coverage.",
    description: "The Primo iDEA-HT extends AMEC's CVD capability to high-temperature applications requiring the highest film quality.",
    descriptionParagraphs: [
      "The Primo iDEA-HT is optimized for high-temperature CVD processes (600-900°C) where film quality is paramount. It provides excellent step coverage and film density for demanding applications.",
      "Key capabilities include: high-temperature susceptor design with excellent uniformity, advanced gas delivery for precise composition control, and low particle generation for high-yield manufacturing.",
      "This system is ideal for gate oxide deposition, spacer formation, and other applications where high-temperature processing delivers superior results."
    ],
    specifications: {
      "Wafer Size": "300mm",
      "Deposition Type": "Thermal CVD",
      "Temperature Range": "600°C - 900°C",
      "Film Types": "Oxide, Nitride, Poly-Si",
      "Uniformity": "< ±2% (3σ)",
      "Step Coverage": "> 95%",
      "Throughput": "> 60 wafers/hour",
      "Footprint": "3.0m x 3.5m",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "Gate Oxide Deposition",
      "Spacer Formation",
      "High-Quality Nitride",
      "Polysilicon Deposition"
    ],
    features: [
      "High-temperature capability",
      "Excellent film quality",
      "Superior step coverage",
      "Low particle generation",
      "Advanced gas delivery"
    ],
    stock: {
      status: "in_stock",
      quantity: 2,
      leadTime: "5-7 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$2.2M - $2.8M"
    }
  },
  {
    partNumber: "Primo PVD-Ultra",
    name: "Ultra-High Vacuum PVD System",
    shortDescription: "Advanced sputtering system with ultra-high vacuum capability for demanding metal deposition applications.",
    description: "The Primo PVD-Ultra delivers ultra-high vacuum sputtering capability for applications requiring the highest film purity and interface quality.",
    descriptionParagraphs: [
      "The Primo PVD-Ultra features base pressure capabilities below 10^-8 Torr, enabling deposition of ultra-pure metal films with excellent interface properties.",
      "Key features include: advanced cryo-pumping system for rapid pump-down, multiple target configurations for flexibility, and precise thickness control for advanced interconnects.",
      "This system is ideal for copper interconnect seed layers, barrier metal deposition, and other applications where film purity directly impacts device performance."
    ],
    specifications: {
      "Wafer Size": "300mm",
      "Deposition Type": "DC Magnetron Sputtering",
      "Base Pressure": "< 1×10^-8 Torr",
      "Target Configuration": "4-target system",
      "Uniformity": "< ±3% (3σ)",
      "Film Types": "Al, Cu, Ti, TiN, Ta, TaN",
      "Throughput": "> 50 wafers/hour",
      "Footprint": "2.8m x 3.2m",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "Copper Interconnect",
      "Barrier Metal Deposition",
      "Contact Metal",
      "Advanced Packaging"
    ],
    features: [
      "Ultra-high vacuum capability",
      "Ultra-pure film deposition",
      "Multi-target configuration",
      "Excellent interface quality",
      "Precise thickness control"
    ],
    stock: {
      status: "in_stock",
      quantity: 3,
      leadTime: "5-7 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$2.5M - $3.2M"
    }
  }
];
depositionCategory.products.push(...additionalDepositionProducts);
console.log(`   Thin Film Deposition分类现在有 ${depositionCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO MOCVD SYSTEMS ====================
console.log('\n📦 Adding products to MOCVD Systems category...');
const mocvdCategory = productsData.categories.find(cat => cat.id === 'mocvd-systems');
const additionalMOCVDProducts = [
  {
    partNumber: "Prismo SD-6",
    name: "Large-Scale MOCVD System",
    shortDescription: "High-capacity MOCVD system for large-scale LED manufacturing with 69 x 2-inch wafer capacity.",
    description: "The Prismo SD-6 provides maximum productivity for high-volume LED manufacturing with industry-leading capacity and uniformity.",
    descriptionParagraphs: [
      "The Prismo SD-6 is AMEC's largest MOCVD system, designed for maximum productivity in high-volume LED manufacturing. The system accommodates 69 x 2-inch equivalent wafers per run.",
      "Key features include: advanced planetary reactor design for exceptional uniformity, high precursor efficiency for low operating costs, and automated wafer handling for high throughput.",
      "This system is ideal for large-scale LED manufacturers requiring maximum output with consistent quality and low cost per wafer."
    ],
    specifications: {
      "Wafer Capacity": "69 x 2-inch equivalent",
      "Reactor Type": "Planetary",
      "Temperature Range": "500°C - 1100°C",
      "Material Systems": "GaN, AlGaN, InGaN",
      "Wavelength Uniformity": "< 2nm (1σ)",
      "Precursor Efficiency": "> 35%",
      "Throughput": "> 8 runs/day",
      "Footprint": "4.2m x 5.5m",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "High-Volume LED Production",
      "Power Electronics",
      "UV LED Manufacturing",
      "Large-Scale Epitaxy"
    ],
    features: [
      "Maximum wafer capacity",
      "Industry-leading uniformity",
      "High precursor efficiency",
      "Automated wafer handling",
      "Low cost per wafer"
    ],
    stock: {
      status: "in_stock",
      quantity: 2,
      leadTime: "8-12 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$4.5M - $5.5M"
    }
  },
  {
    partNumber: "Prismo HiT3-UV",
    name: "UV LED MOCVD System",
    shortDescription: "Specialized MOCVD system for UV LED manufacturing with high-temperature AlN capability.",
    description: "The Prismo HiT3-UV is specifically designed for UV LED manufacturing, featuring high-temperature capability for AlN and AlGaN deposition.",
    descriptionParagraphs: [
      "The Prismo HiT3-UV extends AMEC's MOCVD technology to UV applications requiring high-temperature AlN buffer layers and Al-rich AlGaN quantum wells.",
      "Key capabilities include: susceptor temperatures up to 1300°C for high-quality AlN, specialized gas delivery for aluminum precursors, and optimized reactor design for UV material systems.",
      "This system enables manufacturing of UVA, UVB, and UVC LEDs for applications including curing, sterilization, and medical devices."
    ],
    specifications: {
      "Wafer Capacity": "42 x 2-inch equivalent",
      "Reactor Type": "Planetary",
      "Temperature Range": "500°C - 1300°C",
      "Material Systems": "AlN, AlGaN, GaN",
      "Wavelength Range": "265nm - 410nm",
      "Precursor Efficiency": "> 30%",
      "Throughput": "> 6 runs/day",
      "Footprint": "3.8m x 4.8m",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "UVC LED Manufacturing",
      "UVA/UVB LED Production",
      "AlN Template Growth",
      "UV Photodetectors"
    ],
    features: [
      "High-temperature AlN capability",
      "1300°C susceptor temperature",
      "Specialized for UV materials",
      "Optimized for Al-rich compounds",
      "Multi-wavelength capability"
    ],
    stock: {
      status: "in_stock",
      quantity: 2,
      leadTime: "8-12 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$4.8M - $5.8M"
    }
  },
  {
    partNumber: "Prismo D-Blue-X",
    name: "Enhanced LED MOCVD System",
    shortDescription: "Enhanced version of Prismo D-Blue with improved precursor efficiency and advanced process control.",
    description: "The Prismo D-Blue-X delivers enhanced performance for LED manufacturing with improved efficiency and advanced automation.",
    descriptionParagraphs: [
      "The Prismo D-Blue-X builds on the proven Prismo D-Blue platform with enhanced precursor efficiency (>40%) and advanced process control capabilities.",
      "Key enhancements include: improved gas injection design for better uniformity, advanced temperature control for improved wavelength repeatability, and predictive maintenance capabilities.",
      "This system is ideal for LED manufacturers seeking maximum productivity with lowest operating costs and highest yield."
    ],
    specifications: {
      "Wafer Capacity": "54 x 2-inch equivalent",
      "Reactor Type": "Planetary",
      "Temperature Range": "500°C - 1100°C",
      "Material Systems": "GaN, InGaN, AlGaN",
      "Wavelength Uniformity": "< 2.5nm (1σ)",
      "Precursor Efficiency": "> 40%",
      "Throughput": "> 8 runs/day",
      "Footprint": "3.5m x 4.5m",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "High-Brightness LED Production",
      "Display Backlighting",
      "General Lighting LEDs",
      "Automotive Lighting"
    ],
    features: [
      ">40% precursor efficiency",
      "Advanced process control",
      "Predictive maintenance",
      "Improved wavelength control",
      "Lowest cost per wafer"
    ],
    stock: {
      status: "in_stock",
      quantity: 4,
      leadTime: "6-9 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$3.8M - $4.5M"
    }
  }
];
mocvdCategory.products.push(...additionalMOCVDProducts);
console.log(`   MOCVD Systems分类现在有 ${mocvdCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO PROCESS SOLUTIONS ====================
console.log('\n📦 Adding products to Process Solutions category...');
const solutionsCategory = productsData.categories.find(cat => cat.id === 'process-solutions');
const additionalSolutionProducts = [
  {
    partNumber: "LED-Turnkey-Package",
    name: "Complete LED Manufacturing Solution",
    shortDescription: "Turnkey solution for LED manufacturing including MOCVD, etching, and deposition equipment with full process support.",
    description: "The LED-Turnkey-Package provides a complete manufacturing solution for LED production, from epitaxy to device completion.",
    descriptionParagraphs: [
      "This comprehensive solution includes all equipment and process support needed for LED manufacturing: MOCVD systems for epitaxial growth, etching equipment for mesa formation, and deposition systems for contact metallization.",
      "The package includes: equipment supply and installation, process development and optimization, operator training, and ongoing technical support.",
      "This turnkey approach minimizes integration risk and accelerates time to production for new LED manufacturers or capacity expansions."
    ],
    specifications: {
      "Solution Type": "Turnkey Manufacturing",
      "Equipment Included": "MOCVD + Etch + Deposition",
      "Wafer Size": "2-inch to 6-inch",
      "Applications": "LED Manufacturing",
      "Support Level": "Full Lifecycle",
      "Training Included": "Yes",
      "Process Development": "Included",
      "Footprint": "Custom Layout",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "New LED Fab Setup",
      "LED Capacity Expansion",
      "Technology Transfer",
      "Product Line Extension"
    ],
    features: [
      "Complete equipment set",
      "Full process support",
      "Turnkey delivery",
      "Performance guarantees",
      "Comprehensive training"
    ],
    stock: {
      status: "made_to_order",
      quantity: 0,
      leadTime: "12-18 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$15M - $25M"
    }
  },
  {
    partNumber: "Memory-Fab-Solution",
    name: "Memory Manufacturing Solution",
    shortDescription: "Integrated solution for memory device manufacturing with etching and deposition equipment optimized for 3D NAND and DRAM.",
    description: "The Memory-Fab-Solution provides optimized equipment and process solutions for memory device manufacturing.",
    descriptionParagraphs: [
      "This specialized solution addresses the unique requirements of memory manufacturing, including high aspect ratio etching for 3D NAND and precise patterning for DRAM.",
      "The solution includes: high aspect ratio etching systems, deposition equipment for multiple film types, and process integration support.",
      "AMEC's experience in memory manufacturing ensures proven processes and rapid ramp to production."
    ],
    specifications: {
      "Solution Type": "Integrated Manufacturing",
      "Equipment Included": "Etch + CVD + PVD",
      "Wafer Size": "300mm",
      "Applications": "3D NAND, DRAM",
      "Support Level": "Full Lifecycle",
      "Training Included": "Yes",
      "Process Development": "Included",
      "Footprint": "Custom Layout",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-"
    },
    applications: [
      "3D NAND Manufacturing",
      "DRAM Production",
      "Memory Technology Development",
      "Memory Capacity Expansion"
    ],
    features: [
      "Memory-optimized processes",
      "High aspect ratio capability",
      "Proven production solutions",
      "Comprehensive integration support",
      "Yield improvement programs"
    ],
    stock: {
      status: "made_to_order",
      quantity: 0,
      leadTime: "12-18 months"
    },
    pricing: {
      currency: "USD",
      priceRange: "$20M - $35M"
    }
  }
];
solutionsCategory.products.push(...additionalSolutionProducts);
console.log(`   Process Solutions分类现在有 ${solutionsCategory.products.length} 个产品`);

// ==================== ADD SOLUTION ====================
console.log('\n💡 Adding new solution...');
const newSolution = {
  id: "led-manufacturing-solution",
  title: "LED Manufacturing Solution",
  slug: "led-manufacturing-solution",
  name: "LED Manufacturing Solution",
  description: "Complete turnkey solution for LED manufacturing from epitaxy to final device with equipment, process development, and full support.",
  longDescription: "The LED Manufacturing Solution provides a comprehensive turnkey approach to LED production. This solution integrates AMEC's industry-leading MOCVD systems with complementary etching and deposition equipment to provide complete manufacturing capability.\n\nThe solution includes equipment supply, installation, process development, and ongoing support. AMEC's experienced team works closely with customers to develop optimized processes for their specific LED products, whether for general lighting, displays, automotive, or specialty applications.\n\nKey benefits include reduced integration risk, accelerated time to production, and optimized manufacturing costs. The solution is scalable from pilot production to high-volume manufacturing, with equipment configurations matched to production requirements.",
  benefits: [
    "Complete manufacturing solution from single supplier",
    "Proven processes accelerate time to production",
    "Optimized equipment configuration for LED manufacturing",
    "Comprehensive training and knowledge transfer",
    "Ongoing technical support throughout lifecycle"
  ],
  features: [
    "Integrated MOCVD, etching, and deposition equipment",
    "Customized process development for your products",
    "Turnkey installation and commissioning",
    "Comprehensive operator and maintenance training",
    "Performance guarantees and ongoing optimization"
  ],
  applications: [
    "General Lighting LEDs",
    "Display Backlighting",
    "Automotive Lighting",
    "UV LEDs",
    "High-Power LEDs"
  ],
  keyComponents: [
    {
      partNumber: "Prismo D-Blue",
      description: "High-productivity MOCVD system for LED epitaxy",
      link: "/amec/products/mocvd-systems/prismo-d-blue.html"
    },
    {
      partNumber: "Primo SSC",
      description: "Silicon etching system for mesa formation",
      link: "/amec/products/etching-equipment/primo-ssc.html"
    },
    {
      partNumber: "Primo PVD",
      description: "PVD system for contact metallization",
      link: "/amec/products/thin-film-deposition/primo-pvd.html"
    }
  ],
  specifications: {
    "Solution Type": "Turnkey Manufacturing",
    "Equipment Scope": "MOCVD + Etch + Deposition",
    "Wafer Size": "2-inch to 6-inch",
    "Capacity Range": "Pilot to High-Volume",
    "Support Level": "Full Lifecycle"
  },
  technicalSpecs: {
    "MOCVD Capacity": "Up to 69 x 2-inch wafers",
    "Wavelength Uniformity": "< 3nm (1σ)",
    "Process Development Time": "3-6 months",
    "Training Duration": "4-8 weeks",
    "Warranty": "12 months standard"
  },
  coreAdvantages: [
    {
      title: "Single Supplier Integration",
      description: "All equipment from AMEC ensures seamless integration and single point of responsibility"
    },
    {
      title: "Proven LED Processes",
      description: "Production-proven processes developed with leading LED manufacturers worldwide"
    },
    {
      title: "Accelerated Ramp",
      description: "Turnkey approach reduces time from equipment delivery to production by 30-50%"
    },
    {
      title: "Optimized Cost Structure",
      description: "Equipment configuration and processes optimized for lowest cost per wafer"
    },
    {
      title: "Comprehensive Support",
      description: "Full lifecycle support from installation through production optimization"
    }
  ],
  bomList: [
    {
      designator: "M1-M4",
      partNumber: "Prismo D-Blue",
      description: "MOCVD systems for epitaxial growth",
      quantity: 4
    },
    {
      designator: "E1-E2",
      partNumber: "Primo SSC",
      description: "Etching systems for mesa formation",
      quantity: 2
    },
    {
      designator: "D1",
      partNumber: "Primo PVD",
      description: "PVD system for metallization",
      quantity: 1
    }
  ],
  customerCases: [
    {
      customerName: "LED Startup Company",
      industry: "LED Manufacturing",
      application: "General Lighting LED Production",
      challenge: "New company needed to establish LED manufacturing capability quickly with limited internal process expertise.",
      solution: "AMEC provided complete LED Manufacturing Solution including equipment, process development, and comprehensive training.",
      results: "Achieved first production in 8 months from order. Yield reached 85% within 12 months. Company successfully established as LED supplier.",
      feedback: "The turnkey solution was exactly what we needed. AMEC's support throughout the process was exceptional.",
      result: "Successful establishment of LED manufacturing capability with rapid time to market."
    }
  ],
  faeInsights: {
    author: {
      name: "Dr. Lisa Huang",
      title: "Senior FAE - LED Technology",
      experience: "15 years",
      expertise: ["MOCVD", "LED Manufacturing", "Process Development"]
    },
    insight: "LED manufacturing requires close integration between epitaxy and device processing. The turnkey approach ensures this integration is optimized from the start.",
    logic: "The LED Manufacturing Solution addresses the complete manufacturing flow, ensuring optimal integration between process steps.",
    keyTakeaways: [
      "Turnkey approach reduces integration risk",
      "Single supplier simplifies support and accountability",
      "Proven processes accelerate production ramp",
      "Comprehensive training builds internal capability"
    ],
    commonPitfalls: [
      "Underestimating process development time",
      "Insufficient training for operations team",
      "Not planning for yield improvement phase"
    ],
    bestPractices: [
      "Engage early in planning phase",
      "Invest in comprehensive training",
      "Plan for ongoing process optimization"
    ],
    content: "Based on extensive experience supporting LED manufacturing customers, this solution provides proven path to production.",
    decisionFramework: {
      title: "LED Manufacturing Solution Selection",
      steps: ["Define product requirements", "Assess internal capabilities", "Evaluate timeline constraints", "Select appropriate solution scope"]
    }
  },
  faqs: [
    {
      question: "What is included in the LED Manufacturing Solution?",
      answer: "The solution includes: MOCVD systems for epitaxial growth, etching equipment for device formation, deposition systems for contacts, process development for your specific products, installation and commissioning, comprehensive training, and ongoing technical support.",
      decisionGuide: "Complete turnkey solution covers all aspects of LED manufacturing.",
      keywords: ["LED solution", "turnkey", "manufacturing"]
    },
    {
      question: "How long does it take to achieve production?",
      answer: "Typical timeline from order to production: 6-9 months for equipment delivery and installation, 3-6 months for process development and qualification, 2-4 weeks for production ramp. Total time is typically 12-18 months depending on scope and complexity.",
      decisionGuide: "Plan for 12-18 months from order to full production.",
      keywords: ["timeline", "production ramp", "schedule"]
    }
  ]
};
solutionsData.solutions.push(newSolution);
console.log(`   Solutions现在有 ${solutionsData.solutions.length} 个解决方案`);

// ==================== ADD SUPPORT ARTICLE ====================
console.log('\n📚 Adding new support article...');
const newArticle = {
  id: "amec-equipment-maintenance-guide",
  title: "AMEC Equipment Maintenance Best Practices",
  category: "Maintenance Guide",
  author: {
    name: "James Wilson",
    title: "Senior Service Engineer",
    experience: "18 years",
    expertise: ["Equipment Maintenance", "Preventive Maintenance", "System Reliability"]
  },
  publishDate: "2026-03-20",
  lastUpdated: "2026-03-20",
  summary: "Comprehensive guide to maintaining AMEC equipment for maximum uptime and longevity.",
  tags: ["maintenance", "preventive maintenance", "equipment care", "uptime optimization"],
  content: [
    "Proper maintenance is essential for maximizing equipment uptime and ensuring consistent process performance. This guide covers best practices for maintaining AMEC equipment.",
    "",
    "## Preventive Maintenance Schedule",
    "",
    "Daily maintenance tasks include: visual inspection of chamber components, checking gas pressures and flows, verifying vacuum levels, and reviewing system logs for alarms or warnings.",
    "",
    "Weekly maintenance includes: cleaning chamber viewports, inspecting O-rings and seals, checking RF matching network performance, and verifying temperature calibration.",
    "",
    "Monthly maintenance tasks: detailed chamber inspection, consumable parts inspection, preventive replacement of wear items, and system performance verification.",
    "",
    "Quarterly maintenance: comprehensive chamber cleaning, RF generator calibration, mass flow controller verification, and safety system testing.",
    "",
    "## Key Maintenance Areas",
    "",
    "Chamber Components: Regular inspection and cleaning of chamber walls, electrodes, and shields. Replace consumable liners and shields according to recommended schedules.",
    "",
    "Vacuum System: Maintain pumps according to manufacturer specifications. Check for leaks regularly and address immediately. Monitor pump oil condition and change as needed.",
    "",
    "Gas Delivery: Verify mass flow controller accuracy regularly. Check for gas leaks and ensure proper filtration. Replace filters according to schedule.",
    "",
    "RF Systems: Monitor RF generator performance and matching network efficiency. Keep connections clean and tight. Check for arcing or abnormal behavior.",
    "",
    "## Troubleshooting Common Issues",
    "",
    "Process Drift: Often caused by chamber conditioning changes or consumable wear. Address through chamber cleaning and consumable replacement.",
    "",
    "Particle Issues: Check chamber cleanliness, gas purity, and vacuum integrity. May require more frequent cleaning or component replacement.",
    "",
    "Uniformity Degradation: Often related to electrode condition or gas distribution. Inspect and clean or replace affected components.",
    "",
    "Contact AMEC service for support with complex issues or preventive maintenance planning."
  ],
  relatedArticles: [
    "etching-equipment-selection",
    "mocvd-system-selection",
    "process-solutions-selection"
  ],
  faeInsights: {
    insight: "Consistent preventive maintenance is the key to equipment reliability. Customers who follow recommended maintenance schedules achieve 95%+ uptime.",
    logic: "Preventive maintenance addresses wear before it causes failures, maximizing uptime and process consistency.",
    practicalTips: [
      "Follow recommended maintenance schedules strictly",
      "Keep detailed maintenance records",
      "Train operators to recognize early warning signs",
      "Stock critical spare parts on-site"
    ],
    author: {
      name: "Technical FAE",
      title: "Support Engineer",
      experience: "8+ years"
    },
    content: "Based on years of field service experience, this maintenance guide addresses the most important practices for equipment reliability.",
    keyTakeaways: [
      "Preventive maintenance maximizes uptime",
      "Follow manufacturer recommended schedules",
      "Address issues early before they become failures",
      "Keep spare parts inventory for critical components"
    ]
  },
  faqs: [
    {
      question: "How often should chamber cleaning be performed?",
      answer: "Chamber cleaning frequency depends on process type and usage. Typical intervals: light cleaning weekly, deep cleaning monthly, and comprehensive cleaning quarterly. High-volume production may require more frequent cleaning.",
      decisionGuide: "Adjust cleaning frequency based on process and particle performance.",
      keywords: ["chamber cleaning", "maintenance frequency", "particle control"]
    },
    {
      question: "What spare parts should be kept in inventory?",
      answer: "Recommended spare parts inventory includes: O-rings and seals, consumable chamber components, RF matching network parts, mass flow controller components, and vacuum pump supplies. AMEC can provide specific recommendations based on your equipment configuration.",
      decisionGuide: "Stock critical consumables and components with longest lead times.",
      keywords: ["spare parts", "inventory", "consumables"]
    }
  ]
};
supportData.articles.push(newArticle);
console.log(`   Support Articles现在有 ${supportData.articles.length} 篇文章`);

// Save updated data files
console.log('\n💾 Saving updated data files...');
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('\n✅ AMEC brand data completion finished!');
console.log('\n📊 Final Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name}: ${productCount} products`);
});
console.log(`   Solutions: ${solutionsData.solutions.length}`);
console.log(`   Support Articles: ${supportData.articles.length}`);
