#!/usr/bin/env node
/**
 * Aowei Brand Data Completion Script
 * Adds missing products, solutions, and support articles to meet requirements
 * 
 * Requirements:
 * - 4 secondary product categories with at least 4 products each
 * - At least 3 solution detail pages
 * - At least 5 technical support articles
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'aowei');

console.log('🔧 Aowei Brand Data Completion Script\n');

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

// ==================== ADD PRODUCTS TO CYLINDRICAL SUPERCAPACITORS ====================
console.log('\n📦 Adding products to Cylindrical Supercapacitors category...');
const cylindricalCategory = productsData.categories.find(cat => cat.id === 'cylindrical-supercapacitors');
const additionalCylindricalProducts = [
  {
    partNumber: "SC-10F-2R7",
    name: "10F 2.7V Cylindrical Supercapacitor",
    shortDescription: "Compact 10F cylindrical EDLC cell for small electronics and IoT applications with low ESR and long cycle life.",
    description: "The SC-10F-2R7 provides 10 Farads of capacitance in a compact cylindrical package, ideal for small electronics and IoT devices.",
    descriptionParagraphs: [
      "This 10F supercapacitor delivers reliable energy storage for backup power, pulse power, and energy harvesting applications in compact devices.",
      "Features include: low ESR of 150mΩ for efficient power delivery, 500,000+ cycle life, and wide temperature range of -40°C to +65°C.",
      "The small 8mm diameter package fits space-constrained designs while providing sufficient energy for short-term backup and burst power needs."
    ],
    specifications: {
      "Capacitance": "10F",
      "Voltage Rating": "2.7V DC",
      "ESR (DC)": "≤150mΩ",
      "Leakage Current": "≤0.03mA",
      "Operating Temperature": "-40°C to +65°C",
      "Cycle Life": ">500,000 cycles",
      "Dimensions": "8mm x 16mm",
      "Weight": "1.2g",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "IoT Devices",
      "Wearable Electronics",
      "Sensor Backup Power",
      "Small Motor Drives"
    ],
    features: [
      "10F capacitance",
      "Low ESR 150mΩ",
      "Compact 8mm package",
      "500,000+ cycles",
      "Wide temperature range"
    ],
    stock: {
      status: "in_stock",
      quantity: 15000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$0.85 - $1.25"
    }
  },
  {
    partNumber: "SC-100F-2R7",
    name: "100F 2.7V Cylindrical Supercapacitor",
    shortDescription: "High-capacity 100F cylindrical EDLC for industrial applications requiring substantial energy storage.",
    description: "The SC-100F-2R7 delivers 100 Farads of capacitance for industrial and automotive applications requiring significant energy storage.",
    descriptionParagraphs: [
      "This 100F supercapacitor provides substantial energy storage for backup power, regenerative braking, and pulse power applications.",
      "Features include: low ESR of 35mΩ for high power delivery, rugged cylindrical construction, and excellent thermal performance.",
      "Ideal for industrial automation, automotive subsystems, and renewable energy applications requiring reliable energy storage."
    ],
    specifications: {
      "Capacitance": "100F",
      "Voltage Rating": "2.7V DC",
      "ESR (DC)": "≤35mΩ",
      "Leakage Current": "≤0.20mA",
      "Operating Temperature": "-40°C to +65°C",
      "Cycle Life": ">500,000 cycles",
      "Dimensions": "22mm x 45mm",
      "Weight": "18g",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Industrial Automation",
      "Automotive Subsystems",
      "Renewable Energy",
      "UPS Systems"
    ],
    features: [
      "100F capacitance",
      "Low ESR 35mΩ",
      "Rugged construction",
      "High power delivery",
      "Long cycle life"
    ],
    stock: {
      status: "in_stock",
      quantity: 8000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$4.50 - $6.50"
    }
  }
];
cylindricalCategory.products.push(...additionalCylindricalProducts);
console.log(`   Cylindrical Supercapacitors分类现在有 ${cylindricalCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO PRISMATIC SUPERCAPACITORS ====================
console.log('\n📦 Adding products to Prismatic Supercapacitors category...');
const prismaticCategory = productsData.categories.find(cat => cat.id === 'prismatic-supercapacitors');
const additionalPrismaticProducts = [
  {
    partNumber: "SP-5F-2R7",
    name: "5F 2.7V Prismatic Supercapacitor",
    shortDescription: "Ultra-thin 5F prismatic supercapacitor for space-constrained applications with excellent volumetric efficiency.",
    description: "The SP-5F-2R7 provides 5 Farads in an ultra-thin prismatic package ideal for wearable and portable electronics.",
    descriptionParagraphs: [
      "This prismatic supercapacitor features a thin 3.5mm profile perfect for space-constrained applications like smart cards and wearables.",
      "Features include: 5F capacitance in compact form factor, low ESR of 200mΩ, and excellent temperature stability.",
      "The rectangular shape enables efficient PCB mounting and optimal use of available space in compact devices."
    ],
    specifications: {
      "Capacitance": "5F",
      "Voltage Rating": "2.7V DC",
      "ESR (DC)": "≤200mΩ",
      "Leakage Current": "≤0.02mA",
      "Operating Temperature": "-40°C to +65°C",
      "Cycle Life": ">500,000 cycles",
      "Dimensions": "12mm x 8mm x 3.5mm",
      "Weight": "0.8g",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Smart Cards",
      "Wearable Devices",
      "Portable Electronics",
      "RFID Tags"
    ],
    features: [
      "5F capacitance",
      "Ultra-thin 3.5mm",
      "Low ESR 200mΩ",
      "Compact prismatic",
      "Lightweight"
    ],
    stock: {
      status: "in_stock",
      quantity: 20000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$0.65 - $0.95"
    }
  },
  {
    partNumber: "SP-50F-2R7",
    name: "50F 2.7V Prismatic Supercapacitor",
    shortDescription: "High-capacity 50F prismatic supercapacitor for industrial and automotive applications requiring compact energy storage.",
    description: "The SP-50F-2R7 delivers 50 Farads in a prismatic package optimized for industrial and automotive applications.",
    descriptionParagraphs: [
      "This 50F prismatic supercapacitor provides high energy density in a compact rectangular form factor suitable for PCB mounting.",
      "Features include: 50F capacitance, low ESR of 50mΩ, and robust construction for demanding environments.",
      "Ideal for industrial control systems, automotive electronics, and applications requiring reliable backup power."
    ],
    specifications: {
      "Capacitance": "50F",
      "Voltage Rating": "2.7V DC",
      "ESR (DC)": "≤50mΩ",
      "Leakage Current": "≤0.15mA",
      "Operating Temperature": "-40°C to +65°C",
      "Cycle Life": ">500,000 cycles",
      "Dimensions": "25mm x 15mm x 8mm",
      "Weight": "5.5g",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Industrial Controls",
      "Automotive Electronics",
      "Backup Power Systems",
      "Energy Harvesting"
    ],
    features: [
      "50F capacitance",
      "Low ESR 50mΩ",
      "Compact prismatic",
      "PCB mountable",
      "Industrial grade"
    ],
    stock: {
      status: "in_stock",
      quantity: 10000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$3.50 - $5.00"
    }
  }
];
prismaticCategory.products.push(...additionalPrismaticProducts);
console.log(`   Prismatic Supercapacitors分类现在有 ${prismaticCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO MODULE SYSTEMS ====================
console.log('\n📦 Adding products to Module Systems category...');
const moduleCategory = productsData.categories.find(cat => cat.id === 'module-systems');
const additionalModuleProducts = [
  {
    partNumber: "SM-16V-10F",
    name: "16V 10F Supercapacitor Module",
    shortDescription: "Compact 16V module with 10F capacitance and active balancing for industrial control applications.",
    description: "The SM-16V-10F provides a complete 16V energy storage solution with integrated balancing and monitoring.",
    descriptionParagraphs: [
      "This compact module integrates 6 cells in series with active balancing circuitry to provide 16V operation from a single unit.",
      "Features include: active cell balancing, overvoltage protection, thermal monitoring, and compact aluminum enclosure.",
      "Ideal for industrial control systems, small UPS applications, and equipment requiring 12V-16V backup power."
    ],
    specifications: {
      "Rated Voltage": "16V DC",
      "Capacitance": "10F",
      "ESR": "≤180mΩ",
      "Max Current": "10A",
      "Operating Temperature": "-40°C to +65°C",
      "Balancing": "Active",
      "Dimensions": "80mm x 40mm x 25mm",
      "Weight": "85g",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Industrial Controls",
      "Small UPS",
      "12V Backup Systems",
      "Automation Equipment"
    ],
    features: [
      "16V rated",
      "10F capacitance",
      "Active balancing",
      "Compact size",
      "Ready to use"
    ],
    stock: {
      status: "in_stock",
      quantity: 3000,
      leadTime: "4-6 weeks"
    },
    pricing: {
      currency: "USD",
      priceRange: "$28 - $38"
    }
  },
  {
    partNumber: "SM-48V-100F",
    name: "48V 100F High-Power Module",
    shortDescription: "High-voltage 48V module with 100F capacitance for electric vehicle and renewable energy applications.",
    description: "The SM-48V-100F delivers high-voltage energy storage for demanding applications in electric vehicles and renewable energy.",
    descriptionParagraphs: [
      "This high-power module combines 18 cells in series with advanced balancing and thermal management for 48V operation.",
      "Features include: 100F capacitance, active balancing with cell monitoring, thermal management system, and CAN bus communication.",
      "Designed for electric vehicle regenerative braking, solar energy storage, and high-power industrial applications."
    ],
    specifications: {
      "Rated Voltage": "48V DC",
      "Capacitance": "100F",
      "ESR": "≤60mΩ",
      "Max Current": "50A",
      "Operating Temperature": "-40°C to +65°C",
      "Balancing": "Active with monitoring",
      "Communication": "CAN bus",
      "Dimensions": "200mm x 150mm x 80mm",
      "Weight": "2.5kg",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Electric Vehicles",
      "Solar Energy Storage",
      "High-Power Industrial",
      "Grid Stabilization"
    ],
    features: [
      "48V rated",
      "100F capacitance",
      "CAN bus interface",
      "Active balancing",
      "Thermal management"
    ],
    stock: {
      status: "made_to_order",
      quantity: 0,
      leadTime: "8-12 weeks"
    },
    pricing: {
      currency: "USD",
      priceRange: "$450 - $650"
    }
  }
];
moduleCategory.products.push(...additionalModuleProducts);
console.log(`   Module Systems分类现在有 ${moduleCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO HYBRID CAPACITORS ====================
console.log('\n📦 Adding products to Hybrid Capacitors category...');
const hybridCategory = productsData.categories.find(cat => cat.id === 'hybrid-capacitors');
const additionalHybridProducts = [
  {
    partNumber: "HC-30F-3R8",
    name: "30F 3.8V Hybrid Capacitor",
    shortDescription: "30F lithium-ion capacitor with 3.8V rating for wearable and portable electronics requiring high energy density.",
    description: "The HC-30F-3R8 combines lithium-ion technology with supercapacitor construction for enhanced energy density.",
    descriptionParagraphs: [
      "This hybrid capacitor delivers 30F capacitance at 3.8V, providing 3-5x higher energy density than standard EDLC cells.",
      "Features include: high energy density up to 25 Wh/kg, low self-discharge, and excellent temperature performance.",
      "Ideal for wearable devices, wireless sensors, and portable medical equipment requiring compact energy storage."
    ],
    specifications: {
      "Capacitance": "30F",
      "Voltage Rating": "3.8V DC",
      "ESR (DC)": "≤80mΩ",
      "Leakage Current": "≤0.05mA",
      "Operating Temperature": "-20°C to +60°C",
      "Cycle Life": ">100,000 cycles",
      "Energy Density": "~25 Wh/kg",
      "Dimensions": "12mm x 8mm x 4mm",
      "Weight": "1.5g",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Wearable Devices",
      "Wireless Sensors",
      "Portable Medical",
      "IoT Applications"
    ],
    features: [
      "30F capacitance",
      "3.8V rated",
      "High energy density",
      "Low self-discharge",
      "Compact size"
    ],
    stock: {
      status: "in_stock",
      quantity: 12000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$2.50 - $3.50"
    }
  },
  {
    partNumber: "HC-200F-3R8",
    name: "200F 3.8V High-Capacity Hybrid Capacitor",
    shortDescription: "200F lithium-ion capacitor with high energy density for industrial and automotive applications.",
    description: "The HC-200F-3R8 delivers 200F capacitance with enhanced energy density for demanding industrial applications.",
    descriptionParagraphs: [
      "This high-capacity hybrid capacitor provides 200F at 3.8V with energy density up to 28 Wh/kg for extended backup times.",
      "Features include: high capacitance with compact size, excellent power density, and robust construction for industrial use.",
      "Ideal for industrial backup systems, automotive applications, and equipment requiring both high energy and power."
    ],
    specifications: {
      "Capacitance": "200F",
      "Voltage Rating": "3.8V DC",
      "ESR (DC)": "≤25mΩ",
      "Leakage Current": "≤0.30mA",
      "Operating Temperature": "-20°C to +60°C",
      "Cycle Life": ">100,000 cycles",
      "Energy Density": "~28 Wh/kg",
      "Dimensions": "25mm x 16mm x 8mm",
      "Weight": "8.5g",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Industrial Backup",
      "Automotive Systems",
      "Energy Storage",
      "Power Tools"
    ],
    features: [
      "200F capacitance",
      "3.8V rated",
      "High energy density",
      "Low ESR 25mΩ",
      "Industrial grade"
    ],
    stock: {
      status: "in_stock",
      quantity: 6000,
      leadTime: "4-6 weeks"
    },
    pricing: {
      currency: "USD",
      priceRange: "$12 - $16"
    }
  }
];
hybridCategory.products.push(...additionalHybridProducts);
console.log(`   Hybrid Capacitors分类现在有 ${hybridCategory.products.length} 个产品`);

// ==================== ADD SOLUTION ====================
console.log('\n💡 Adding new solution...');
const newSolution = {
  id: "renewable-energy-storage",
  title: "Renewable Energy Storage Solution",
  slug: "renewable-energy-storage",
  name: "Renewable Energy Storage Solution",
  description: "Complete supercapacitor-based energy storage solution for solar and wind power applications with long cycle life and rapid response.",
  longDescription: "The Renewable Energy Storage Solution leverages Aowei supercapacitors to provide reliable energy storage for renewable energy systems. Unlike batteries, supercapacitors offer virtually unlimited cycle life, rapid charge/discharge capability, and excellent performance across wide temperature ranges.\n\nThis solution addresses the intermittent nature of renewable energy sources by providing fast-response energy storage that can absorb power fluctuations and deliver stable output. The modular design allows scaling from residential solar systems to utility-scale wind farms.\n\nKey benefits include: 500,000+ cycle life eliminating replacement concerns, -40°C to +65°C operation without performance degradation, rapid response for grid stabilization, and minimal maintenance requirements. The solution integrates seamlessly with existing solar inverters and wind turbine systems.",
  benefits: [
    "Virtually unlimited cycle life (500,000+ cycles)",
    "Rapid charge/discharge for fluctuating power",
    "Wide temperature operation -40°C to +65°C",
    "Minimal maintenance requirements",
    "Environmentally friendly materials"
  ],
  features: [
    "Modular design for easy scaling",
    "Active cell balancing for long life",
    "Integrated monitoring and protection",
    "Grid-tie compatible interface",
    "Weather-resistant enclosure"
  ],
  applications: [
    "Solar Power Systems",
    "Wind Energy Storage",
    "Grid Stabilization",
    "Microgrids",
    "Off-Grid Power"
  ],
  keyComponents: [
    {
      partNumber: "SM-48V-100F",
      description: "High-voltage supercapacitor module",
      link: "/aowei/products/module-systems/sm-48v-100f.html"
    },
    {
      partNumber: "SC-3000F-2R7",
      description: "Large cylindrical cells for high capacity",
      link: "/aowei/products/cylindrical-supercapacitors/sc-3000f-2r7.html"
    },
    {
      partNumber: "Control-System",
      description: "Integrated monitoring and control system",
      link: "#"
    }
  ],
  specifications: {
    "System Voltage": "48V DC (configurable)",
    "Energy Capacity": "100Wh - 10kWh scalable",
    "Response Time": "< 100ms",
    "Cycle Life": ">500,000 cycles",
    "Operating Temperature": "-40°C to +65°C",
    "Efficiency": ">95% round-trip"
  },
  technicalSpecs: {
    "Charge Time": "Minutes to full",
    "Discharge Rate": "Up to 10C continuous",
    "Self-Discharge": "< 5% per day",
    "Monitoring": "Cell-level voltage and temperature",
    "Protection": "Overvoltage, undervoltage, thermal"
  },
  coreAdvantages: [
    {
      title: "Unlimited Cycle Life",
      description: "500,000+ cycles eliminate replacement concerns common with battery systems"
    },
    {
      title: "Rapid Response",
      description: "Sub-100ms response time for grid stabilization and power smoothing"
    },
    {
      title: "Wide Temperature Range",
      description: "Reliable operation from -40°C to +65°C without capacity degradation"
    },
    {
      title: "Maintenance Free",
      description: "No electrolyte replacement or cell balancing maintenance required"
    },
    {
      title: "Environmentally Friendly",
      description: "Non-toxic materials with no hazardous substances, fully recyclable"
    }
  ],
  bomList: [
    {
      designator: "M1-M10",
      partNumber: "SM-48V-100F",
      description: "Supercapacitor modules",
      quantity: 10
    },
    {
      designator: "CTRL1",
      partNumber: "Control-System",
      description: "Monitoring and control unit",
      quantity: 1
    },
    {
      designator: "ENC1",
      partNumber: "Weather-Enclosure",
      description: "IP65 rated enclosure",
      quantity: 1
    }
  ],
  customerCases: [
    {
      customerName: "Solar Farm Operator",
      industry: "Renewable Energy",
      application: "Grid-Scale Solar Storage",
      challenge: "Needed energy storage with long life and rapid response for grid stabilization.",
      solution: "Implemented Aowei supercapacitor storage system with 500kWh capacity.",
      results: "Achieved >99% availability with zero capacity degradation over 3 years.",
      feedback: "The supercapacitor solution eliminated our battery replacement concerns.",
      result: "Successful grid integration with minimal maintenance requirements."
    }
  ],
  faeInsights: {
    author: {
      name: "Dr. Michael Chen",
      title: "Senior FAE - Energy Storage",
      experience: "12 years",
      expertise: ["Energy Storage", "Renewable Energy", "Power Systems"]
    },
    insight: "Supercapacitors excel in renewable energy applications requiring high cycle life and rapid response. The key is proper sizing for the specific application requirements.",
    logic: "The Renewable Energy Storage Solution combines supercapacitor advantages with system-level integration for optimal performance.",
    keyTakeaways: [
      "Size system for power requirements, not just energy capacity",
      "Consider duty cycle and temperature in design",
      "Plan for future expansion with modular architecture"
    ],
    commonPitfalls: [
      "Undersizing for peak power demands",
      "Ignoring temperature effects on performance",
      "Inadequate monitoring and protection"
    ],
    bestPractices: [
      "Conduct thorough load analysis",
      "Include safety margins in design",
      "Implement comprehensive monitoring"
    ],
    content: "Based on extensive experience in renewable energy applications, this solution provides proven performance and reliability.",
    decisionFramework: {
      title: "Renewable Energy Storage Selection",
      steps: ["Analyze power and energy requirements", "Determine duty cycle", "Select appropriate modules", "Design monitoring system"]
    }
  },
  faqs: [
    {
      question: "How does supercapacitor storage compare to batteries for renewable energy?",
      answer: "Supercapacitors offer unlimited cycle life (500,000+ vs 3,000-5,000 for batteries), rapid response (<100ms vs seconds), and wide temperature operation. However, they have lower energy density, making them ideal for short-duration, high-cycle applications rather than long-term energy storage.",
      decisionGuide: "Use supercapacitors for power smoothing and short-term storage; batteries for long-duration energy storage.",
      keywords: ["supercapacitor vs battery", "renewable storage", "comparison"]
    },
    {
      question: "What is the typical payback period for supercapacitor energy storage?",
      answer: "Payback period depends on application and cycling frequency. For high-cycle applications (100+ cycles/day), supercapacitors often achieve payback in 3-5 years due to eliminated replacement costs. Lower cycle applications may have longer payback periods.",
      decisionGuide: "Calculate total cost of ownership including replacement costs for accurate comparison.",
      keywords: ["payback period", "cost analysis", "ROI"]
    }
  ]
};
solutionsData.solutions.push(newSolution);
console.log(`   Solutions现在有 ${solutionsData.solutions.length} 个解决方案`);

// ==================== ADD SUPPORT ARTICLE ====================
console.log('\n📚 Adding new support article...');
const newArticle = {
  id: "supercapacitor-sizing-guide",
  title: "Supercapacitor Sizing and Selection Guide",
  category: "Application Guide",
  author: {
    name: "Dr. Sarah Liu",
    title: "Senior Applications Engineer",
    experience: "10 years",
    expertise: ["Supercapacitor Applications", "Energy Storage", "Power Systems"]
  },
  publishDate: "2026-03-15",
  lastUpdated: "2026-03-15",
  summary: "Comprehensive guide to sizing and selecting supercapacitors for various applications including backup power, pulse power, and energy harvesting.",
  tags: ["sizing", "selection", "application guide", "design"],
  content: [
    "Proper sizing of supercapacitors is critical for achieving optimal performance and cost-effectiveness in your application. This guide provides step-by-step procedures for calculating capacitance, voltage, and other key parameters.",
    "",
    "## Basic Sizing Equations",
    "",
    "The fundamental equation for supercapacitor sizing is: C = 2 × E / (V² - Vmin²)",
    "",
    "Where: C = Capacitance (Farads), E = Energy required (Joules), V = Initial voltage, Vmin = Minimum operating voltage",
    "",
    "For backup power applications, calculate the energy required: E = P × t",
    "",
    "Where: P = Power required (Watts), t = Backup time required (seconds)",
    "",
    "## Step-by-Step Sizing Procedure",
    "",
    "1. Determine Power Requirements: Calculate the average and peak power your application requires.",
    "",
    "2. Define Backup Time: Determine how long the supercapacitor must supply power during outages.",
    "",
    "3. Set Voltage Range: Define the operating voltage range based on your system requirements.",
    "",
    "4. Calculate Required Capacitance: Use the sizing equation to determine minimum capacitance.",
    "",
    "5. Select Cell Configuration: Choose series/parallel configuration to achieve required voltage and capacitance.",
    "",
    "6. Verify Current Capability: Ensure selected cells can deliver required current without excessive voltage drop.",
    "",
    "## Application-Specific Considerations",
    "",
    "Backup Power: Size for energy requirements with margin for end-of-life degradation. Consider 20-30% margin.",
    "",
    "Pulse Power: Size for power delivery capability (low ESR) rather than just energy storage. Peak current capability is critical.",
    "",
    "Energy Harvesting: Size for average power with sufficient buffering for intermittent sources. Self-discharge must be considered.",
    "",
    "## Temperature Effects",
    "",
    "Supercapacitor performance varies with temperature. At low temperatures, ESR increases significantly. At high temperatures, life is reduced. Always design for the worst-case temperature your application will experience.",
    "",
    "Contact Aowei FAE for assistance with complex sizing requirements or custom applications."
  ],
  relatedArticles: [
    "cylindrical-selection-guide",
    "module-systems-guide",
    "hybrid-capacitor-guide"
  ],
  faeInsights: {
    insight: "The most common sizing error is not accounting for voltage drop under load. Always verify that the selected supercapacitor can maintain minimum voltage at peak current draw.",
    logic: "Proper sizing requires balancing energy storage, power delivery, and voltage requirements for the specific application.",
    practicalTips: [
      "Include 20-30% margin for aging and temperature effects",
      "Verify ESR at operating temperature",
      "Consider self-discharge for long backup times"
    ],
    author: {
      name: "Technical FAE",
      title: "Support Engineer",
      experience: "8+ years"
    },
    content: "Based on years of application support experience, this sizing guide addresses the most common design challenges.",
    keyTakeaways: [
      "Size for both energy and power requirements",
      "Include margins for aging and temperature",
      "Verify voltage drop under load conditions"
    ]
  },
  faqs: [
    {
      question: "How much margin should I include in my supercapacitor sizing?",
      answer: "Include 20-30% margin for capacitance to account for: aging over product lifetime (10-20%), temperature effects on performance (10-15%), and manufacturing tolerances (±10%). For critical applications, consider 50% margin.",
      decisionGuide: "Use 20-30% margin for standard applications, 50% for critical systems.",
      keywords: ["sizing margin", "design margin", "capacitance margin"]
    },
    {
      question: "How does temperature affect supercapacitor sizing?",
      answer: "At -40°C, ESR can increase 2-3x compared to 25°C. This affects power delivery capability. At high temperatures (+65°C), leakage current increases, affecting backup time. Always check datasheet specifications at your operating temperature extremes.",
      decisionGuide: "Size for worst-case temperature conditions your application will experience.",
      keywords: ["temperature effects", "ESR temperature", "low temperature"]
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

console.log('\n✅ Aowei brand data completion finished!');
console.log('\n📊 Final Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name}: ${productCount} products`);
});
console.log(`   Solutions: ${solutionsData.solutions.length}`);
console.log(`   Support Articles: ${supportData.articles.length}`);
