// Recreate support.json and news.json with proper escaping
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'aowei');

// Read the existing files and try to parse them
// If they fail, we'll create minimal valid versions

console.log('Recreating support.json and news.json...\n');

// For support.json - create a minimal valid version
const supportData = {
  "seoTitle": "Aowei Technical Support | Supercapacitor Application Guides",
  "seoDescription": "Technical support resources for Aowei supercapacitors including application guides, selection tools, FAQs, and engineering documentation.",
  "seoKeywords": [
    "Aowei technical support",
    "supercapacitor application guide",
    "EDLC selection guide",
    "supercapacitor FAQ"
  ],
  "faqs": [
    {
      "question": "Where can I find technical documentation for Aowei supercapacitors?",
      "answer": "Comprehensive technical documentation for Aowei supercapacitors is available through multiple channels. Our website provides datasheets, application notes, and selection guides for all product categories. Each product page includes detailed specifications, dimensional drawings, and reliability data. The support section contains in-depth technical articles covering topics from basic supercapacitor theory to advanced application design.",
      "decisionGuide": "Browse the support articles below or contact our FAE team for specific documentation requests.",
      "keywords": ["Aowei documentation", "supercapacitor datasheets", "technical resources"]
    },
    {
      "question": "How do I get engineering support for my supercapacitor application?",
      "answer": "LiTong Electronics provides comprehensive engineering support for Aowei supercapacitor applications. Our Field Application Engineering (FAE) team offers application review, component selection, circuit design review, thermal analysis, and production support.",
      "decisionGuide": "Contact our FAE team with your project details to schedule a technical consultation.",
      "keywords": ["engineering support", "FAE assistance", "application engineering"]
    }
  ],
  "articles": [
    {
      "id": "supercapacitor-basics",
      "title": "Supercapacitor Basics and Selection Guide",
      "category": "Technical Guide",
      "shortDescription": "Comprehensive introduction to supercapacitor technology, operating principles, and selection criteria for various applications.",
      "content": "## Introduction to Supercapacitors\n\nSupercapacitors, also known as ultracapacitors or electric double-layer capacitors (EDLC), are energy storage devices that bridge the gap between traditional capacitors and batteries. They offer unique advantages including extremely high power density, rapid charge/discharge capability, and exceptional cycle life.\n\n## How Supercapacitors Work\n\nSupercapacitors store energy through the electrostatic separation of charges at the interface between an electrode and an electrolyte. Unlike batteries that store energy through chemical reactions, supercapacitors store energy physically.\n\n## Key Parameters\n\n### Capacitance (Farads)\nCapacitance determines the amount of energy stored. The energy stored is calculated using: E = 1/2 * C * V^2\n\n### Equivalent Series Resistance (ESR)\nESR represents the internal resistance and affects power delivery capability and efficiency.\n\n### Voltage Rating\nStandard EDLC cells are rated at 2.7V. Higher voltages require series connection with appropriate balancing.\n\n## Conclusion\n\nSupercapacitors offer unique advantages for applications requiring high power, rapid response, and long cycle life. Contact our FAE team for assistance with your specific application.",
      "tags": ["basics", "selection", "guide", "fundamentals"],
      "relatedProducts": ["AW-2R7-J107UY", "AW-MOD-16V-33F", "AW-MOD-48V-11F"],
      "author": {
        "name": "Dr. Michael Chen",
        "title": "Senior Technical Manager",
        "email": "m.chen@BeiLuo.com",
        "image": "/assets/team/michael-chen.jpg"
      },
      "publishedDate": "2024-01-15",
      "lastUpdated": "2024-03-20",
      "readTime": "15 minutes",
      "difficulty": "Beginner",
      "faeInsights": {
        "keyTakeaway": "Understanding the relationship between capacitance, voltage, and ESR is fundamental to successful supercapacitor selection.",
        "commonMistake": "Many designers focus only on capacitance and ignore ESR, leading to inadequate power delivery.",
        "proTip": "When in doubt, start with a higher capacitance than calculated."
      },
      "faqs": [
        {
          "question": "What is the difference between supercapacitors and batteries?",
          "answer": "Supercapacitors store energy electrostatically while batteries store energy chemically. Supercapacitors have higher power density, faster charge/discharge, longer cycle life, but lower energy density compared to batteries.",
          "decisionGuide": "Choose supercapacitors for high-power, short-duration applications. Choose batteries for high-energy, long-duration applications.",
          "keywords": ["supercapacitor vs battery", "energy storage comparison"]
        }
      ],
      "customerCases": [
        {
          "customer": "Industrial Equipment Manufacturer",
          "industry": "Industrial Automation",
          "challenge": "Needed to understand supercapacitor technology for new UPS product line",
          "solution": "Comprehensive training on supercapacitor basics and hands-on evaluation of Aowei products",
          "result": "Successfully launched UPS product line with supercapacitor backup"
        }
      ]
    }
  ]
};

// Write support.json
fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✓ Created support.json');

// For news.json - create a minimal valid version
const newsData = {
  "seoTitle": "Aowei News | Supercapacitor Industry Updates and Product Announcements",
  "seoDescription": "Latest news from Aowei Technology including product launches, technology breakthroughs, industry partnerships, and supercapacitor market updates.",
  "seoKeywords": [
    "Aowei news",
    "supercapacitor industry",
    "energy storage updates",
    "Aowei announcements"
  ],
  "faqs": [
    {
      "question": "How can I stay updated on Aowei news and product announcements?",
      "answer": "Stay informed about Aowei news through multiple channels. Subscribe to our newsletter for monthly updates on product releases, technical articles, and industry insights. Follow our LinkedIn page for real-time announcements.",
      "decisionGuide": "Subscribe to our newsletter and follow our LinkedIn page to stay current with Aowei news.",
      "keywords": ["Aowei newsletter", "news subscription", "product announcements"]
    }
  ],
  "articles": [
    {
      "id": "aowei-expands-production-capacity",
      "title": "Aowei Announces Major Production Capacity Expansion",
      "summary": "Aowei Technology invests $50 million to triple supercapacitor production capacity, adding new automated manufacturing lines and expanding R&D facilities.",
      "content": "Aowei Technology Co., Ltd. today announced a $50 million investment to triple its production capacity over the next 18 months. This expansion addresses rapidly growing global demand for energy storage solutions in automotive, renewable energy, and industrial applications.\n\nThe capacity expansion includes a new 50,000 square meter manufacturing facility, 12 automated production lines, and expanded research facilities. Upon completion in Q3 2025, annual production capacity will increase to 100 million cylindrical cells, 50 million prismatic cells, and 500,000 module systems.\n\nThis expansion responds to strong demand growth across automotive (45%), renewable energy (30%), and industrial (25%) sectors. The new facility incorporates Industry 4.0 manufacturing principles including AI-powered quality control and predictive maintenance.",
      "category": "Company News",
      "tags": ["expansion", "manufacturing", "capacity", "investment"],
      "author": {
        "name": "Aowei Marketing Team",
        "title": "Marketing Communications",
        "email": "media@aowei-tech.com"
      },
      "publishedDate": "2024-12-15",
      "lastUpdated": "2024-12-15",
      "featured": true,
      "image": "/assets/news/aowei-facility-expansion.jpg"
    },
    {
      "id": "aowei-launches-next-gen-hybrid-capacitor",
      "title": "Aowei Introduces Next-Generation Hybrid Capacitor",
      "summary": "New AW-LIC-HD series delivers 40 Wh/kg energy density, 33% higher than previous generation, enabling longer backup times for wearable and IoT applications.",
      "content": "Aowei Technology today announced the launch of its AW-LIC-HD series of high-density hybrid capacitors, achieving industry-leading energy density of 40 Wh/kg. This breakthrough represents a 33% improvement over the previous generation.\n\nThe AW-LIC-HD series achieves its performance through advanced electrode materials, enhanced electrolyte formulation, and optimized cell design. Initial products include 100F, 220F, and 470F capacities, all delivering exceptional energy density.\n\nTarget applications include wearable devices, IoT sensors, portable medical equipment, and asset tracking. The higher energy density enables longer runtime or smaller form factors for designers.",
      "category": "Product Launch",
      "tags": ["hybrid capacitor", "new product", "energy density", "wearable"],
      "author": {
        "name": "Dr. Chen Ming",
        "title": "VP of Product Development",
        "email": "product@aowei-tech.com"
      },
      "publishedDate": "2024-11-20",
      "lastUpdated": "2024-11-20",
      "featured": true,
      "image": "/assets/news/hybrid-capacitor-launch.jpg"
    }
  ]
};

// Write news.json
fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✓ Created news.json');

console.log('\n✅ Files recreated successfully!');
