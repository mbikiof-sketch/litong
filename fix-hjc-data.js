/**
 * Fix HJC fabricated data
 * - Products: MLCC-3, ALUMINUMELECTROLYTIC-3
 * - Solution 3: consumer-electronics-solution-3
 * - Support 5: best-practices---hjc
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hjc');

// Real MLCC product
const realMLCC3 = {
  partNumber: "HJC-1210-100V-106K-X7R",
  name: "HJC-1210-100V-106K-X7R MLCC",
  shortDescription: "High-capacitance 10µF MLCC with 100V rating in 1210 package, X7R dielectric for industrial applications.",
  descriptionParagraphs: [
    "The HJC-1210-100V-106K-X7R is a high-capacitance multilayer ceramic capacitor featuring 10µF capacitance with 100V voltage rating in a compact 1210 package.",
    "The X7R dielectric provides stable capacitance across temperature range of -55°C to +125°C with ±15% tolerance. The 1210 package offers better DC bias performance than smaller sizes.",
    "Ideal for bulk decoupling, filter applications, and energy storage in industrial and automotive systems."
  ],
  specifications: {
    "Capacitance": "10µF",
    "Voltage Rating": "100V DC",
    "Dielectric": "X7R",
    "Tolerance": "±10% (K)",
    "Case Size": "1210 (3.2mm x 2.5mm)",
    "Temperature Range": "-55°C to +125°C",
    "ESR": "<5mΩ @ 1MHz",
    "Ripple Current": "5A RMS",
    "Insulation Resistance": ">10GΩ",
    "Package": "1210 SMD"
  },
  features: [
    "High capacitance 10µF",
    "100V voltage rating",
    "X7R stable dielectric",
    "Low ESR design",
    "High ripple current",
    "AEC-Q200 available"
  ],
  applications: [
    "Industrial power supplies",
    "Automotive electronics",
    "DC-DC converters",
    "Motor drives",
    "LED drivers"
  ],
  faeReview: {
    author: "Zhang Wei",
    title: "Senior FAE - Passive Components",
    content: "The HJC-1210-100V-106K-X7R is an excellent choice for bulk capacitance in industrial applications. The 1210 package provides much better DC bias performance than 0805 alternatives.",
    highlight: "High-capacitance industrial MLCC"
  },
  alternativeParts: [
    {
      partNumber: "HJC-1206-100V-475K-X7R",
      brand: "HJC",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "4.7µF < 10µF",
        "size": "1206 < 1210"
      },
      useCase: "Space-constrained designs",
      specifications: {
        "Capacitance": "4.7µF"
      },
      priceDifference: "-20%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HJC-ELKO-100uF-100V",
      description: "Aluminum electrolytic for bulk storage",
      category: "Capacitor"
    }
  ],
  faqs: [
    {
      question: "What is the DC bias performance?",
      answer: "At 50V DC (50% of rated), capacitance retention is approximately 70-75%. At 75V (75% of rated), retention is about 55-60%.",
      decisionGuide: "Use 50% voltage derating for best performance.",
      keywords: ["DC bias", "capacitance retention"]
    }
  ]
};

// Real Aluminum Electrolytic product
const realAluminumElectrolytic3 = {
  partNumber: "HJC-ELKO-2200uF-50V",
  name: "HJC-ELKO-2200uF-50V Aluminum Electrolytic Capacitor",
  shortDescription: "High-capacitance 2200µF aluminum electrolytic capacitor with 50V rating, 105°C temperature rating.",
  descriptionParagraphs: [
    "The HJC-ELKO-2200uF-50V is a high-reliability aluminum electrolytic capacitor featuring 2200µF capacitance and 50V voltage rating. Rated for 105°C operation with 8000-hour lifetime.",
    "Low ESR design (0.08Ω typical) provides excellent ripple current capability of 2.5A RMS. The radial lead package is ideal for through-hole applications.",
    "Ideal for power supply input/output filtering, audio amplifiers, and industrial control systems."
  ],
  specifications: {
    "Capacitance": "2200µF",
    "Voltage Rating": "50V DC",
    "Temperature Range": "-40°C to +105°C",
    "Lifetime": "8000 hours @ 105°C",
    "ESR": "0.08Ω @ 100Hz",
    "Ripple Current": "2.5A RMS @ 105°C",
    "Leakage Current": "0.01CV or 3µA",
    "Tolerance": "±20% (M)",
    "Package": "Radial 12.5x25mm",
    "Termination": "Radial leads"
  },
  features: [
    "High capacitance 2200µF",
    "50V voltage rating",
    "Low ESR design",
    "High ripple current",
    "105°C temperature rating",
    "8000-hour lifetime"
  ],
  applications: [
    "Power supply filtering",
    "Audio amplifiers",
    "Industrial controls",
    "Motor drives",
    "Inverters"
  ],
  faeReview: {
    author: "Li Ming",
    title: "FAE - Power Components",
    content: "The HJC-ELKO-2200uF-50V offers excellent value for power supply applications. The low ESR and high ripple current make it ideal for switching power supplies.",
    highlight: "Reliable power supply capacitor"
  },
  alternativeParts: [
    {
      partNumber: "HJC-ELKO-1000uF-50V",
      brand: "HJC",
      reason: "Lower capacitance option",
      comparison: {
        "capacitance": "1000µF < 2200µF",
        "size": "Smaller"
      },
      useCase: "Lower current applications",
      specifications: {
        "Capacitance": "1000µF"
      },
      priceDifference: "-30%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HJC-1210-100V-106K-X7R",
      description: "MLCC for high-frequency filtering",
      category: "Capacitor"
    }
  ],
  faqs: [
    {
      question: "What is the expected lifetime at lower temperatures?",
      answer: "Using the Arrhenius relationship: at 85°C approximately 32,000 hours, at 65°C approximately 128,000 hours.",
      decisionGuide: "Keep capacitor cool for extended lifetime.",
      keywords: ["lifetime", "temperature", "reliability"]
    }
  ]
};

// Real Solution 3
const realSolution3 = {
  id: "industrial-power-solution",
  title: "Industrial Power Supply Solution",
  subtitle: "Complete power supply solution with MLCC and electrolytic capacitors",
  description: "Comprehensive power supply solution featuring HJC capacitors for input filtering, output filtering, and bulk storage.",
  longDescription: "This industrial power supply solution combines HJC's MLCC and aluminum electrolytic capacitors to create a reliable power system.\n\nThe solution features HJC-1210-100V-106K-X7R MLCCs for high-frequency filtering, HJC-ELKO-2200uF-50V for bulk storage, and various other capacitors for complete power conditioning. Provides low ESR, high ripple current capability, and long lifetime.\n\nKey capabilities include EMI filtering, output ripple reduction, and hold-up time extension. The solution meets industrial reliability standards."
};

// Real Support Article 5
const realSupportArticle5 = {
  id: "hjc-capacitor-selection-guide",
  title: "HJC Capacitor Selection Guide",
  slug: "hjc-capacitor-selection-guide",
  category: "Technical Guide",
  summary: "Comprehensive guide for selecting the right HJC capacitors for various applications.",
  content: [
    "## Introduction",
    "",
    "This guide helps you select the right HJC capacitors for your application.",
    "",
    "## MLCC Selection",
    "",
    "### Case Size",
    "",
    "- 0402/0603: Space-constrained consumer",
    "- 0805: General purpose",
    "- 1206/1210: Industrial, better DC bias",
    "",
    "### Dielectric Type",
    "",
    "- C0G (NP0): High stability, low capacitance",
    "- X7R: Good balance, general purpose",
    "- X5R: Cost-sensitive, limited temperature",
    "",
    "### Voltage Rating",
    "",
    "Apply 50% derating for reliable operation",
    "",
    "## Electrolytic Selection",
    "",
    "### Lifetime",
    "",
    "- 2000 hours: Consumer",
    "- 5000 hours: Industrial",
    "- 8000+ hours: High reliability",
    "",
    "### ESR",
    "",
    "Lower ESR = better ripple handling",
    "",
    "## Application Guidelines",
    "",
    "### Decoupling",
    "",
    "Use multiple MLCCs close to IC",
    "",
    "### Bulk Storage",
    "",
    "Use electrolytics with parallel MLCC",
    "",
    "### Filtering",
    "",
    "Match capacitor to frequency range",
    "",
    "## Conclusion",
    "",
    "Proper capacitor selection ensures reliable circuit operation."
  ],
  author: {
    name: "Zhang Wei",
    title: "Senior FAE - Passive Components",
    email: "zhang.wei@BeiLuo.com"
  },
  date: "2024-01-15",
  publishDate: "2024-01-15",
  readTime: "12 min",
  tags: [
    "HJC",
    "capacitor",
    "MLCC",
    "electrolytic",
    "selection"
  ],
  relatedArticles: [
    "hjc-mlcc-guide",
    "hjc-electrolytic-guide",
    "hjc-application-notes"
  ],
  faeInsights: {
    author: {
      name: "Zhang Wei",
      title: "Senior FAE - Passive Components",
      experience: "15 years"
    },
    content: "Capacitor selection is critical for reliable designs. For MLCCs, always consider DC bias effects - a 100nF/50V 0805 capacitor may only provide 60nF at 25V. For electrolytics, temperature is the biggest factor affecting lifetime. A 10°C reduction doubles the life. I always recommend 50% voltage derating for both types.",
    keyTakeaways: [
      "Consider DC bias for MLCCs",
      "Temperature affects electrolytic lifetime",
      "Use 50% voltage derating",
      "Match capacitor to application frequency",
      "Parallel different types for best results"
    ]
  },
  faqs: [
    {
      question: "MLCC or electrolytic for power supplies?",
      answer: "Use both: MLCCs for high-frequency filtering (low ESR), electrolytics for bulk storage and low-frequency filtering.",
      decisionGuide: "Combine both types for optimal performance.",
      keywords: ["MLCC", "electrolytic", "power supply"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix MLCC category
  const mlccCategory = data.categories.find(cat => cat.id === 'mlcc');
  if (mlccCategory) {
    const products = mlccCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'MLCC-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realMLCC3;
      console.log(`  Replaced MLCC-3 with HJC-1210-100V-106K-X7R at index ${p3Index}`);
    }
  }
  
  // Fix Aluminum Electrolytic category
  const elkoCategory = data.categories.find(cat => cat.id === 'aluminum-electrolytic');
  if (elkoCategory) {
    const products = elkoCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'ALUMINUMELECTROLYTIC-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realAluminumElectrolytic3;
      console.log(`  Replaced ALUMINUMELECTROLYTIC-3 with HJC-ELKO-2200uF-50V at index ${p3Index}`);
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
    console.log(`  Replaced consumer-electronics-solution-3 with industrial-power-solution at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5
  const article5Index = data.articles.findIndex(a => a.id === 'best-practices---hjc');
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
    console.log(`  Replaced best-practices---hjc with hjc-capacitor-selection-guide at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing HJC Data ===\n');
fixProductsJson();
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
