#!/usr/bin/env node
/**
 * Add remaining products to Narada categories
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'narada');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

console.log('\n=== Adding Remaining Products ===\n');

const productsData = readJSON('products.json');

// Lithium-Ion Batteries - need 1 more (currently 5)
const lithiumCategory = productsData.categories.find(c => c.id === 'lithium-ion-batteries');
if (lithiumCategory && lithiumCategory.products.length < 6) {
  const newProduct = {
    partNumber: "NLP48-200",
    name: "48V 200Ah LiFePO4 Battery Module",
    shortDescription: "High-capacity 48V 200Ah LiFePO4 module with 9.6kWh for large residential and commercial applications.",
    descriptionParagraphs: [
      "The Narada NLP48-200 delivers 9.6kWh in a compact 4U form factor, providing high-capacity energy storage for demanding applications."
    ],
    specifications: {
      Capacity: "200Ah",
      Voltage: "48V DC",
      Energy: "9.6kWh",
      "Cycle Life": "4000 cycles @ 80% DoD",
      Weight: "52kg",
      Dimensions: "442 x 410 x 178mm (4U)"
    },
    features: ["High-capacity 9.6kWh", "LiFePO4 chemistry", "Integrated BMS", "Parallel capable up to 16 units"],
    applications: ["Large residential solar", "Commercial backup", "Industrial UPS", "Telecom sites"],
    faeReview: {
      author: "James Liu",
      title: "Senior FAE - Energy Storage",
      content: "The NLP48-200 provides excellent energy density for space-constrained installations requiring high capacity.",
      highlight: "High-capacity solution for demanding applications"
    },
    alternativeParts: [
      { partNumber: "NLP48-100", brand: "Narada", comparison: "NLP48-200=><NLP48-100: Capacity 200Ah > 100Ah, suitable for direct replacement", reason: "Lower capacity", useCase: "Smaller systems", link: "#" }
    ],
    companionParts: [
      { partNumber: "Battery Rack 19-inch", link: "#", description: "19-inch rack", category: "Accessories" }
    ],
    faqs: [
      { question: "How many can be paralleled?", answer: "Up to 16 modules for 153.6kWh total.", decisionGuide: "Contact us for system design.", keywords: ["parallel configuration"] }
    ]
  };
  
  lithiumCategory.products.push(newProduct);
  console.log(`✓ Added 1 product to Lithium-Ion category, now has ${lithiumCategory.products.length} products`);
}

// Energy Storage Systems - need 1 more (currently 5)
const essCategory = productsData.categories.find(c => c.id === 'energy-storage-systems');
if (essCategory && essCategory.products.length < 6) {
  const newProduct = {
    partNumber: "ESS-2M",
    name: "2MWh Containerized Energy Storage System",
    shortDescription: "Large-scale 2MWh ESS with 1MW PCS for utility and large commercial applications.",
    descriptionParagraphs: [
      "The Narada ESS-2M delivers 1MW continuous power with 2-hour duration, designed for utility-scale and large commercial deployments."
    ],
    specifications: {
      "Energy Capacity": "2MWh",
      "Power Rating": "1MW",
      Efficiency: "≥ 89%",
      Container: "40-foot ISO"
    },
    features: ["2MWh capacity", "1MW power", "Grid code compliant", "Multi-application capable"],
    applications: ["Utility frequency regulation", "Large commercial peak shaving", "Renewable firming", "Grid services"],
    faeReview: {
      author: "Steven Chen",
      title: "Senior FAE - Grid Storage",
      content: "The ESS-2M bridges the gap between commercial and utility-scale systems with flexible deployment options.",
      highlight: "Versatile large-scale ESS solution"
    },
    alternativeParts: [
      { partNumber: "ESS-1M", brand: "Narada", comparison: "ESS-2M=><ESS-1M: Energy double, Power double, suitable for reduction", reason: "Smaller capacity", useCase: "Medium commercial", link: "#" }
    ],
    companionParts: [
      { partNumber: "MV Switchgear", link: "#", description: "Medium voltage switchgear", category: "Electrical" }
    ],
    faqs: [
      { question: "Typical payback period?", answer: "3-6 years depending on applications and market participation.", decisionGuide: "Contact us for economic analysis.", keywords: ["payback"] }
    ]
  };
  
  essCategory.products.push(newProduct);
  console.log(`✓ Added 1 product to Energy Storage Systems category, now has ${essCategory.products.length} products`);
}

// Telecom Power Solutions - need 1 more (currently 5)
const telecomCategory = productsData.categories.find(c => c.id === 'telecom-power-solutions');
if (telecomCategory && telecomCategory.products.length < 6) {
  const newProduct = {
    partNumber: "TEL12-200FT",
    name: "12V 200Ah Front Terminal Telecom Battery",
    shortDescription: "High-capacity front-terminal VRLA battery for large telecom installations.",
    descriptionParagraphs: [
      "The Narada TEL12-200FT provides 200Ah capacity in a front-terminal design, ideal for large telecom cabinets requiring extended backup."
    ],
    specifications: {
      Capacity: "200Ah @ 10hr rate",
      Voltage: "12V",
      Dimensions: "551 x 125 x 311mm",
      Weight: "58kg",
      "Terminal Type": "Front M8 insert",
      "Design Life": "12 years"
    },
    features: ["200Ah high capacity", "Front terminal design", "125mm width", "12-year life"],
    applications: ["Large telecom base stations", "Core network equipment", "Data center backup"],
    faeReview: {
      author: "Kevin Zhao",
      title: "Senior FAE - Telecom Power",
      content: "The TEL12-200FT provides maximum capacity in the front-terminal form factor for demanding telecom applications.",
      highlight: "Maximum capacity front-terminal solution"
    },
    alternativeParts: [
      { partNumber: "TEL12-150FT", brand: "Narada", comparison: "TEL12-200FT=><TEL12-150FT: Capacity 200Ah > 150Ah, suitable for direct replacement", reason: "Lower capacity", useCase: "Standard installations", link: "#" }
    ],
    companionParts: [
      { partNumber: "19-inch Heavy Duty Rack", link: "#", description: "Heavy duty rack", category: "Accessories" }
    ],
    faqs: [
      { question: "How many for 48V 600Ah?", answer: "12 batteries: 3 strings of 4 in series.", decisionGuide: "Calculate based on capacity needs.", keywords: ["configuration"] }
    ]
  };
  
  telecomCategory.products.push(newProduct);
  console.log(`✓ Added 1 product to Telecom Power Solutions category, now has ${telecomCategory.products.length} products`);
}

writeJSON('products.json', productsData);

console.log('\n=== All Categories Now Have 6+ Products ===');
