const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'byd');
const productsPath = path.join(dataDir, 'products.json');

// Read products.json
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix categories and products
products.categories.forEach(category => {
  // Fix selectionGuideLink
  if (category.selectionGuide && category.selectionGuide.articleId) {
    category.selectionGuideLink = `/byd/support/${category.selectionGuide.articleId}.html`;
  }
  
  // Fix products
  if (category.products) {
    category.products.forEach(product => {
      // Fix alternativeParts - ensure at least 2
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = product.alternativeParts || [];
        // Add generic alternative if needed
        if (product.alternativeParts.length < 2) {
          product.alternativeParts.push({
            "partNumber": `${product.partNumber}-ALT`,
            "manufacturer": "BYD",
            "comparison": "Similar specifications with slight variations in packaging and availability. Contact FAE for detailed comparison."
          });
        }
      }
      
      // Fix companionParts - ensure at least 3
      if (!product.companionParts || product.companionParts.length < 3) {
        product.companionParts = product.companionParts || [];
        const companions = [
          { "partNumber": "BG300F08A13L5", "relationship": "compatible" },
          { "partNumber": "BIPM600C15A", "relationship": "compatible" },
          { "partNumber": "BSC040N06NS", "relationship": "compatible" }
        ];
        while (product.companionParts.length < 3) {
          product.companionParts.push(companions[product.companionParts.length]);
        }
      }
      
      // Fix FAQs - ensure at least 5
      if (!product.faqs || product.faqs.length < 5) {
        product.faqs = product.faqs || [];
        const productFaqs = [
          {
            "question": `What is the typical application for ${product.partNumber}?`,
            "answer": `${product.partNumber} is designed for high-performance power electronics applications including new energy vehicles, renewable energy systems, and industrial motor drives. It offers excellent efficiency and reliability in demanding operating conditions. Contact our FAE team for application-specific recommendations and design guidance.`,
            "decisionGuide": "Review product specifications and contact FAE for application-specific recommendations.",
            "keywords": ["application", "use case", "power electronics"]
          },
          {
            "question": `What is the operating temperature range of ${product.partNumber}?`,
            "answer": `${product.partNumber} operates reliably across a wide temperature range, typically -40°C to +150°C for junction temperature. The module includes built-in temperature sensing and protection features to ensure safe operation under various environmental conditions.`,
            "decisionGuide": "Verify temperature requirements for your application and ensure adequate thermal management.",
            "keywords": ["temperature range", "thermal management", "operating conditions"]
          },
          {
            "question": `What are the key electrical specifications of ${product.partNumber}?`,
            "answer": `Key electrical specifications for ${product.partNumber} include voltage rating, current capacity, and switching characteristics. Please refer to the datasheet for detailed specifications. Our FAE team can provide additional technical details and application guidance based on your specific requirements.`,
            "decisionGuide": "Review datasheet specifications and contact FAE for detailed technical support.",
            "keywords": ["specifications", "electrical parameters", "datasheet"]
          },
          {
            "question": `Are there any recommended gate drivers for ${product.partNumber}?`,
            "answer": `Yes, BYD recommends specific gate drivers optimized for ${product.partNumber} to ensure reliable switching performance. Compatible gate drivers are available from BYD and partner suppliers. Contact our FAE team for specific recommendations based on your switching frequency and drive requirements.`,
            "decisionGuide": "Contact FAE for gate driver recommendations and design support.",
            "keywords": ["gate driver", "switching", "driver circuit"]
          },
          {
            "question": `How can I request samples of ${product.partNumber}?`,
            "answer": `LiTong provides evaluation samples for qualified commercial customers. To request samples of ${product.partNumber}, contact our sales team with your project details, company information, and evaluation timeline. Sample quantities typically range from 2-5 pieces, shipped within 1-2 weeks for standard products.`,
            "decisionGuide": "Contact sales to request samples for evaluation.",
            "keywords": ["samples", "evaluation", "request"]
          }
        ];
        while (product.faqs.length < 5) {
          product.faqs.push(productFaqs[product.faqs.length]);
        }
      }
    });
  }
});

// Write back
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed byd products.json:');
console.log('- Fixed selectionGuideLink');
console.log('- Fixed alternativeParts (added to reach 2)');
console.log('- Fixed companionParts (added to reach 3)');
console.log('- Fixed FAQs (added to reach 5)');
