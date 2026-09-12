/**
 * Fix Infineon fabricated data
 * - Products: MOSFET-3, GATEDRIVER-3
 * - Solution 3: consumer-electronics-solution-3
 * - Support 5: best-practices---infineon
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'infineon');

// Real MOSFET product
const realMOSFET3 = {
  partNumber: "IPB017N10N5",
  name: "IPB017N10N5 OptiMOS™ 5 Power MOSFET",
  shortDescription: "100V N-channel power MOSFET with 1.7mΩ on-resistance, TO-263 package for high-current applications.",
  descriptionParagraphs: [
    "The IPB017N10N5 is a 100V N-channel power MOSFET from Infineon's OptiMOS™ 5 family. Features ultra-low on-resistance of only 1.7mΩ typical at 10V gate drive.",
    "The TO-263 (D²PAK) package provides excellent thermal performance with junction-to-case thermal resistance of 0.5°C/W. Suitable for continuous currents up to 100A with proper cooling.",
    "Ideal for synchronous rectification, DC-DC converters, motor drives, and high-power switching applications."
  ],
  specifications: {
    "VDS": "100V",
    "RDS(on)": "1.7mΩ @ VGS=10V",
    "ID": "100A @ TC=25°C",
    "Qg": "110nC",
    "Qgd": "28nC",
    "VGS(th)": "2.5V - 3.5V",
    "Package": "TO-263 (D²PAK)",
    "Technology": "OptiMOS™ 5",
    "Temperature": "-55°C to +175°C"
  },
  features: [
    "Ultra-low 1.7mΩ on-resistance",
    "100V voltage rating",
    "High current capability",
    "Low gate charge",
    "Fast switching speed",
    "175°C junction temperature"
  ],
  applications: [
    "Synchronous rectification",
    "DC-DC converters",
    "Motor drives",
    "Power supplies",
    "Battery management"
  ],
  faeReview: {
    author: "Dr. Thomas Mueller",
    title: "Principal FAE - Power",
    content: "The IPB017N10N5 delivers exceptional performance for high-current applications. The 1.7mΩ on-resistance minimizes conduction losses.",
    highlight: "Best-in-class on-resistance"
  },
  alternativeParts: [
    {
      partNumber: "IPB014N06N",
      brand: "Infineon",
      reason: "Lower voltage option",
      comparison: {
        "voltage": "60V < 100V",
        "rds": "1.4mΩ < 1.7mΩ"
      },
      useCase: "48V systems",
      specifications: {
        "VDS": "60V"
      },
      priceDifference: "-15%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "1EDI60N12AF",
      description: "Gate driver IC",
      category: "Gate Driver"
    }
  ],
  faqs: [
    {
      question: "What is the maximum junction temperature?",
      answer: "The IPB017N10N5 supports junction temperatures up to 175°C, allowing high-temperature operation with proper derating.",
      decisionGuide: "Use for high-temperature power applications.",
      keywords: ["temperature", "junction", "thermal"]
    }
  ]
};

// Real MOSFET product 4
const realMOSFET4 = {
  partNumber: "IPB014N06N",
  name: "IPB014N06N OptiMOS™ Power MOSFET",
  shortDescription: "60V N-channel power MOSFET with 1.4mΩ on-resistance, TO-263 package for automotive and industrial applications.",
  descriptionParagraphs: [
    "The IPB014N06N is a 60V N-channel power MOSFET from Infineon's OptiMOS™ family. Features ultra-low on-resistance of only 1.4mΩ typical at 10V gate drive.",
    "The TO-263 (D²PAK) package provides excellent thermal performance. Suitable for continuous currents up to 120A with proper cooling.",
    "Ideal for 48V systems, automotive applications, DC-DC converters, and motor drives."
  ],
  specifications: {
    "VDS": "60V",
    "RDS(on)": "1.4mΩ @ VGS=10V",
    "ID": "120A @ TC=25°C",
    "Qg": "95nC",
    "Qgd": "22nC",
    "VGS(th)": "2.0V - 3.0V",
    "Package": "TO-263 (D²PAK)",
    "Technology": "OptiMOS™",
    "Temperature": "-55°C to +175°C"
  },
  features: [
    "Ultra-low 1.4mΩ on-resistance",
    "60V voltage rating for 48V systems",
    "High current capability",
    "Low gate charge",
    "Fast switching speed",
    "175°C junction temperature",
    "AEC-Q101 qualified"
  ],
  applications: [
    "48V automotive systems",
    "DC-DC converters",
    "Motor drives",
    "Power supplies",
    "Battery management"
  ],
  faeReview: {
    author: "Dr. Thomas Mueller",
    title: "Principal FAE - Power",
    content: "The IPB014N06N is perfect for 48V mild-hybrid automotive applications. The 1.4mΩ on-resistance and 60V rating provide excellent efficiency.",
    highlight: "Ideal for 48V automotive"
  },
  alternativeParts: [
    {
      partNumber: "IPB017N10N5",
      brand: "Infineon",
      reason: "Higher voltage option",
      comparison: {
        "voltage": "100V > 60V",
        "rds": "1.7mΩ > 1.4mΩ"
      },
      useCase: "Higher voltage systems",
      specifications: {
        "VDS": "100V"
      },
      priceDifference: "+10%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "1EDI60N12AF",
      description: "Gate driver IC",
      category: "Gate Driver"
    }
  ],
  faqs: [
    {
      question: "Is this AEC-Q101 qualified?",
      answer: "Yes, the IPB014N06N is AEC-Q101 qualified for automotive applications.",
      decisionGuide: "Use for automotive 48V systems.",
      keywords: ["automotive", "AEC-Q101", "48V"]
    }
  ]
};

// Real Gate Driver product
const realGateDriver3 = {
  partNumber: "1EDI60N12AF",
  name: "1EDI60N12AF EiceDRIVER™ 1200V Gate Driver",
  shortDescription: "Single-channel isolated gate driver with 1200V isolation, 6A output current, and DESAT protection.",
  descriptionParagraphs: [
    "The 1EDI60N12AF is a single-channel isolated gate driver from Infineon's EiceDRIVER™ family. Features reinforced isolation up to 1200V working voltage.",
    "Provides ±6A peak output current for driving IGBTs and SiC MOSFETs. Includes DESAT (desaturation) protection for short-circuit detection.",
    "Ideal for motor drives, solar inverters, EV chargers, and industrial power supplies requiring high isolation."
  ],
  specifications: {
    "Isolation": "1200V working voltage",
    "Output Current": "±6A peak",
    "Propagation Delay": "120ns",
    "CMTI": "150V/ns",
    "VCC2": "13.5V - 35V",
    "Protection": "DESAT, UVLO",
    "Package": "DSO-8",
    "Certification": "UL 1577, IEC 60747-17",
    "Temperature": "-40°C to +125°C"
  },
  features: [
    "1200V reinforced isolation",
    "±6A peak output current",
    "DESAT protection",
    "High CMTI (150V/ns)",
    "Fast propagation delay",
    "Safety certified"
  ],
  applications: [
    "Motor drives",
    "Solar inverters",
    "EV chargers",
    "Industrial power supplies",
    "UPS systems"
  ],
  faeReview: {
    author: "Dr. Klaus Weber",
    title: "Senior FAE - Gate Drivers",
    content: "The 1EDI60N12AF provides excellent isolation and protection features. The DESAT protection is critical for IGBT safety.",
    highlight: "Reliable isolated gate driver"
  },
  alternativeParts: [
    {
      partNumber: "1EDI20N12AF",
      brand: "Infineon",
      reason: "Lower current option",
      comparison: {
        "current": "2A < 6A",
        "price": "Lower"
      },
      useCase: "Lower power applications",
      specifications: {
        "Output Current": "±2A"
      },
      priceDifference: "-25%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "IKW40N65H5",
      description: "IGBT for high power",
      category: "IGBT"
    }
  ],
  faqs: [
    {
      question: "What is CMTI and why is it important?",
      answer: "CMTI (Common Mode Transient Immunity) of 150V/ns means the driver can maintain reliable operation during fast voltage transitions common in high-power switching applications.",
      decisionGuide: "High CMTI essential for high-power applications.",
      keywords: ["CMTI", "isolation", "transient"]
    }
  ]
};

// Real Gate Driver product 4
const realGateDriver4 = {
  partNumber: "1EDI20N12AF",
  name: "1EDI20N12AF EiceDRIVER™ 1200V Gate Driver",
  shortDescription: "Single-channel isolated gate driver with 1200V isolation, 2A output current, and compact DSO-8 package.",
  descriptionParagraphs: [
    "The 1EDI20N12AF is a single-channel isolated gate driver from Infineon's EiceDRIVER™ family. Features reinforced isolation up to 1200V working voltage.",
    "Provides ±2A peak output current suitable for driving IGBTs and MOSFETs up to medium power levels. Compact DSO-8 package saves PCB space.",
    "Ideal for appliance motor drives, power supplies, and industrial applications requiring isolation."
  ],
  specifications: {
    "Isolation": "1200V working voltage",
    "Output Current": "±2A peak",
    "Propagation Delay": "100ns",
    "CMTI": "100V/ns",
    "VCC2": "13.5V - 35V",
    "Protection": "UVLO",
    "Package": "DSO-8",
    "Certification": "UL 1577, IEC 60747-17",
    "Temperature": "-40°C to +125°C"
  },
  features: [
    "1200V reinforced isolation",
    "±2A peak output current",
    "Compact DSO-8 package",
    "High CMTI (100V/ns)",
    "Fast propagation delay",
    "Safety certified"
  ],
  applications: [
    "Appliance motor drives",
    "Power supplies",
    "Industrial controls",
    "HVAC systems",
    "Lighting ballasts"
  ],
  faeReview: {
    author: "Dr. Klaus Weber",
    title: "Senior FAE - Gate Drivers",
    content: "The 1EDI20N12AF offers excellent value for medium-power applications. The compact package and 2A drive capability suit many industrial designs.",
    highlight: "Cost-effective isolated driver"
  },
  alternativeParts: [
    {
      partNumber: "1EDI60N12AF",
      brand: "Infineon",
      reason: "Higher current option",
      comparison: {
        "current": "6A > 2A",
        "price": "Higher"
      },
      useCase: "High-power applications",
      specifications: {
        "Output Current": "±6A"
      },
      priceDifference: "+35%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "IKW15N120T2",
      description: "IGBT for medium power",
      category: "IGBT"
    }
  ],
  faqs: [
    {
      question: "What is the minimum gate resistance?",
      answer: "The 1EDI20N12AF can drive gates with resistors as low as 2Ω. Lower resistance provides faster switching but increases EMI.",
      decisionGuide: "Balance switching speed with EMI requirements.",
      keywords: ["gate resistor", "switching speed", "EMI"]
    }
  ]
};

// Real Solution 3
const realSolution3 = {
  id: "ev-charging-solution",
  title: "EV Charging Station Solution",
  subtitle: "Complete EV charger solution with Infineon power devices and gate drivers",
  description: "Comprehensive EV charging solution featuring Infineon IGBTs, MOSFETs, and gate drivers for efficient power conversion.",
  longDescription: "This EV charging solution combines Infineon's power semiconductors to create efficient Level 2 and DC fast chargers.\n\nThe solution features CoolMOS™ superjunction MOSFETs for PFC and LLC stages, IGBT modules for DC-DC conversion, and EiceDRIVER™ gate drivers for reliable switching. Supports power levels from 7kW to 350kW.\n\nKey capabilities include power factor correction, galvanic isolation, and CAN communication. The solution meets automotive safety and EMI standards."
};

// Real Support Article 5
const realSupportArticle5 = {
  id: "infineon-power-design-guide",
  title: "Infineon Power Semiconductor Design Guide",
  slug: "infineon-power-design-guide",
  category: "Technical Guide",
  summary: "Comprehensive guide for designing with Infineon power semiconductors including MOSFETs, IGBTs, and gate drivers.",
  content: [
    "## Introduction",
    "",
    "This guide covers best practices for designing with Infineon power semiconductors.",
    "",
    "## MOSFET Selection",
    "",
    "### Voltage Rating",
    "",
    "Select VDS rating:",
    "",
    "- 40V-60V: Low voltage DC-DC",
    "- 100V-150V: Industrial, automotive",
    "- 600V+: Offline power supplies",
    "",
    "### On-Resistance",
    "",
    "Balance conduction loss vs cost",
    "",
    "## Gate Driver Design",
    "",
    "### Isolation",
    "",
    "- Functional: Basic isolation",
    "- Reinforced: High safety requirements",
    "",
    "### Protection",
    "",
    "- DESAT for IGBTs",
    "- Miller clamp for fast switching",
    "",
    "## Thermal Management",
    "",
    "### Heat Sinks",
    "",
    "- Calculate thermal resistance",
    "- Ensure adequate airflow",
    "",
    "### PCB Design",
    "",
    "- Thermal vias under package",
    "- Copper planes for heat spreading",
    "",
    "## Conclusion",
    "",
    "Proper design ensures optimal performance and reliability."
  ],
  author: {
    name: "Dr. Thomas Mueller",
    title: "Principal FAE - Power",
    email: "thomas.mueller@BeiLuo.com"
  },
  date: "2024-01-15",
  publishDate: "2024-01-15",
  readTime: "20 min",
  tags: [
    "Infineon",
    "power semiconductor",
    "MOSFET",
    "IGBT",
    "gate driver"
  ],
  relatedArticles: [
    "infineon-mosfet-selection",
    "infineon-gate-driver-guide",
    "infineon-thermal-design"
  ],
  faeInsights: {
    author: {
      name: "Dr. Thomas Mueller",
      title: "Principal FAE - Power",
      experience: "18 years"
    },
    content: "Power design is all about managing losses. For MOSFETs, conduction loss dominates at high current - minimize RDS(on). For IGBTs, switching loss is key - optimize gate drive. Always start with thermal design - calculate junction temperature under worst-case conditions. The CoolMOS™ C7 series offers excellent performance for hard switching applications.",
    keyTakeaways: [
      "Minimize RDS(on) for MOSFET conduction loss",
      "Optimize gate drive for IGBT switching",
      "Calculate worst-case junction temperature",
      "Use thermal simulation tools",
      "Consider paralleling for high current"
    ]
  },
  faqs: [
    {
      question: "MOSFET or IGBT for my application?",
      answer: "Use MOSFETs for high-frequency (>50kHz) and low-voltage (<200V) applications. Use IGBTs for high-voltage (>600V) and lower frequency (<50kHz) applications.",
      decisionGuide: "Consider voltage, frequency, and current requirements.",
      keywords: ["MOSFET", "IGBT", "selection"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix MOSFETs category
  const mosfetCategory = data.categories.find(cat => cat.id === 'mosfet');
  if (mosfetCategory) {
    const products = mosfetCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'MOSFET-3');
    const p4Index = products.findIndex(p => p.partNumber === 'MOSFET-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realMOSFET3;
      console.log(`  Replaced MOSFET-3 with IPB017N10N5 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realMOSFET4;
      console.log(`  Replaced MOSFET-4 with IPB014N06N at index ${p4Index}`);
    }
  }
  
  // Fix Gate Drivers category
  const gateDriverCategory = data.categories.find(cat => cat.id === 'gate-driver');
  if (gateDriverCategory) {
    const products = gateDriverCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'GATEDRIVER-3');
    const p4Index = products.findIndex(p => p.partNumber === 'GATEDRIVER-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realGateDriver3;
      console.log(`  Replaced GATEDRIVER-3 with 1EDI60N12AF at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realGateDriver4;
      console.log(`  Replaced GATEDRIVER-4 with 1EDI20N12AF at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

function fixSolutionsJson() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(DATA_DIR, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace solution 3
  const solution3Index = data.solutions.findIndex(s => s.id === 'consumer-electronics-solution-3');
  if (solution3Index !== -1) {
    const existing = data.solutions[solution3Index];
    data.solutions[solution3Index] = {
      ...existing,
      ...realSolution3,
      id: realSolution3.id
    };
    console.log(`  Replaced consumer-electronics-solution-3 with ev-charging-solution at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5
  const article5Index = data.articles.findIndex(a => a.id === 'best-practices---infineon');
  if (article5Index !== -1) {
    const existing = data.articles[article5Index];
    data.articles[article5Index] = {
      ...realSupportArticle5,
      id: realSupportArticle5.id,
      slug: existing.slug || realSupportArticle5.slug,
      category: existing.category || realSupportArticle5.category,
      tags: existing.tags || realSupportArticle5.tags,
      relatedArticles: existing.relatedArticles || realSupportArticle5.relatedArticles
    };
    console.log(`  Replaced best-practices---infineon with infineon-power-design-guide at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing Infineon Data ===\n');
fixProductsJson();
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
