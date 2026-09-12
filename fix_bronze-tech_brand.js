const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'bronze-tech');
const brandPath = path.join(dataDir, 'brand.json');

// Read brand.json
let brand = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

// Fix SEO fields
brand.seoTitle = brand.seoMetaTitle || "Bronze Tech Distributor | Board-to-Board & Circular Connectors | BeiLuo";
brand.seoDescription = brand.seoMetaDescription || "Authorized Bronze Tech distributor offering board-to-board, wire-to-board, and circular connectors. Technical support for industrial and automotive interconnect solutions.";
delete brand.seoMetaTitle;
delete brand.seoMetaDescription;

// Add more FAQs to reach 7
const additionalFaqs = [
  {
    "question": "What is the typical lead time for Bronze Tech connectors?",
    "answer": "Standard lead times for Bronze Tech connectors: (1) Standard products from stock - 1-2 weeks; (2) Standard products not in stock - 4-6 weeks; (3) Custom configurations - 8-12 weeks depending on complexity; (4) High-volume orders - 6-10 weeks for production scheduling. Lead times may vary based on current demand and factory capacity. Contact LiTong sales for current lead time estimates and to discuss expedited delivery options for urgent projects. We maintain safety stock for popular models to support quick-turn requirements.",
    "decisionGuide": "Plan for 4-6 weeks standard lead time; contact sales for expedited options or stock availability.",
    "keywords": ["lead time", "delivery", "stock availability", "production schedule"]
  },
  {
    "question": "Does Bronze Tech offer custom connector solutions?",
    "answer": "Yes, Bronze Tech specializes in custom interconnect solutions for unique application requirements. Custom services include: (1) Modified standard products - pin count variations, plating options, housing colors; (2) Custom cable assemblies - specific lengths, termination types, labeling; (3) Fully custom designs - unique form factors, special materials, integrated electronics; (4) Tooling development - custom molds and fixtures for high-volume production. The custom design process typically involves: requirements analysis, concept design, prototyping, testing, and production. NRE charges may apply for tooling. Contact our FAE team to discuss your custom requirements and feasibility.",
    "decisionGuide": "Contact FAE team to discuss custom requirements; provide detailed specifications for accurate quoting.",
    "keywords": ["custom connector", "custom solution", "special design", "cable assembly"]
  },
  {
    "question": "What quality certifications do Bronze Tech products have?",
    "answer": "Bronze Tech products carry comprehensive quality certifications: (1) ISO 9001 - Quality Management System ensuring consistent manufacturing processes; (2) IATF 16949 - Automotive quality standard for automotive-grade connectors; (3) UL/CSA - Safety certifications for North American markets; (4) CE - European conformity for EMC and safety; (5) RoHS/REACH - Environmental compliance for restricted substances; (6) AEC-Q200 - Automotive electronics council qualification for harsh environments. All products undergo rigorous testing including dimensional verification, electrical testing, environmental testing, and mechanical endurance testing. Certificates of conformance are available upon request.",
    "decisionGuide": "Verify required certifications for your application; request CoC and test reports from LiTong.",
    "keywords": ["quality certification", "ISO 9001", "IATF 16949", "UL certification", "RoHS"]
  }
];

brand.faqs = brand.faqs || [];
brand.faqs.push(...additionalFaqs);

// Write back
fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2));
console.log('Fixed bronze-tech brand.json:');
console.log('- Updated SEO fields (seoTitle, seoDescription)');
console.log(`- Added ${additionalFaqs.length} FAQs (total: ${brand.faqs.length})`);
