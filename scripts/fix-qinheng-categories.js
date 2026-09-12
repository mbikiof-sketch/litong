#!/usr/bin/env node
/**
 * Fix qinheng categories - longDescription and FAQs
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'qinheng', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Generate category FAQs
function generateCategoryFAQs(categoryName) {
  return [
    {
      question: `What are the key features of ${categoryName}?`,
      answer: `${categoryName} from QinHeng offer reliable performance, cost-effective solutions, and comprehensive driver support. LiTong Electronics provides full technical support and distribution services for these products.`,
      decisionGuide: "Contact LiTong for product selection assistance.",
      keywords: ["features", "performance", "support"]
    },
    {
      question: `How do I select the right ${categoryName} for my application?`,
      answer: `Consider your interface requirements, data rate needs, and power consumption. LiTong FAE team can help you select the optimal product from QinHeng's portfolio.`,
      decisionGuide: "Contact FAE for selection guidance.",
      keywords: ["selection", "application", "requirements"]
    },
    {
      question: `What development tools are available for ${categoryName}?`,
      answer: `QinHeng provides SDKs, drivers, and evaluation boards. LiTong Electronics can supply development kits and provide technical support for your projects.`,
      decisionGuide: "Order evaluation kits through LiTong sales.",
      keywords: ["development tools", "SDK", "evaluation"]
    },
    {
      question: `Where can I buy ${categoryName} products?`,
      answer: `LiTong Electronics is an authorized distributor of QinHeng products. Contact our sales team for pricing, availability, and technical support.`,
      decisionGuide: "Contact LiTong sales for quotations.",
      keywords: ["purchase", "distributor", "availability"]
    },
    {
      question: `What technical support does LiTong provide for ${categoryName}?`,
      answer: `LiTong provides comprehensive technical support including product selection, driver installation, application design, and troubleshooting. Our FAE team has extensive experience with QinHeng products.`,
      decisionGuide: "Contact FAE team for technical assistance.",
      keywords: ["technical support", "FAE", "design assistance"]
    },
    {
      question: `Are ${categoryName} products compatible with my existing design?`,
      answer: `QinHeng products are designed to be compatible with industry standards. Most products offer drop-in replacement capability for popular alternatives. Contact LiTong FAE for compatibility verification.`,
      decisionGuide: "Verify compatibility with FAE before design commitment.",
      keywords: ["compatibility", "replacement", "standards"]
    }
  ];
}

// Fix each category
let fixedCount = 0;
data.categories.forEach(category => {
  // Fix longDescription
  if (!category.longDescription || category.longDescription.length < 300) {
    category.longDescription = `LiTong Electronics is an authorized distributor of QinHeng ${category.name} products. ${category.name} provide reliable connectivity solutions for embedded systems, industrial applications, and consumer electronics. QinHeng's product portfolio includes cost-effective alternatives to popular interface chips while maintaining compatibility and performance. These products feature comprehensive driver support for Windows, Linux, and macOS platforms, making them ideal for various applications. LiTong provides full technical support, product selection guidance, and development tools to help customers integrate these solutions into their designs. Contact our FAE team for application-specific recommendations and evaluation samples.`;
    fixedCount++;
  }
  
  // Ensure longDescription contains distributor/selection keywords
  if (!category.longDescription.includes('distributor') && !category.longDescription.includes('LiTong')) {
    category.longDescription += ' LiTong Electronics provides distribution and technical support for these products.';
    fixedCount++;
  }
  
  // Fix FAQs
  if (!category.faqs || category.faqs.length < 5) {
    category.faqs = generateCategoryFAQs(category.name);
    fixedCount++;
  }
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));

console.log(`✅ Fixed ${fixedCount} category issues`);
data.categories.forEach((cat, i) => {
  console.log(`${i + 1}. ${cat.name}`);
  console.log(`   - longDescription: ${cat.longDescription.length} chars`);
  console.log(`   - FAQs: ${cat.faqs.length}`);
});
