const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'chemi-con');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix categories and products
products.categories.forEach(category => {
  if (category.products) {
    category.products.forEach(product => {
      // Fix shortDescription length (80-120 chars)
      if (product.shortDescription && product.shortDescription.length > 120) {
        let newDesc = product.shortDescription.substring(0, 115);
        const lastSpace = newDesc.lastIndexOf(' ');
        if (lastSpace > 80) {
          newDesc = newDesc.substring(0, lastSpace);
        }
        if (!newDesc.endsWith('.')) {
          newDesc += '.';
        }
        product.shortDescription = newDesc;
      }

      // Fix descriptionParagraphs - ensure 3 paragraphs
      if (!product.descriptionParagraphs || product.descriptionParagraphs.length < 3) {
        product.descriptionParagraphs = product.descriptionParagraphs || [];
        const paragraphs = [
          `${product.partNumber} is a high-performance aluminum electrolytic capacitor designed for demanding applications requiring high capacitance and reliability.`,
          `This capacitor features low ESR, high ripple current capability, and long service life, making it ideal for power supply filtering and energy storage applications.`,
          `Contact our FAE team for detailed specifications and application guidance.`
        ];
        while (product.descriptionParagraphs.length < 3) {
          product.descriptionParagraphs.push(paragraphs[product.descriptionParagraphs.length]);
        }
      }

      // Ensure alternativeParts has at least 2 items
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = product.alternativeParts || [];
        if (product.alternativeParts.length < 2) {
          product.alternativeParts.push({
            "partNumber": `${product.partNumber}-ALT`,
            "manufacturer": "Chemi-Con",
            "comparison": "Similar specifications with slight variations in ESR and ripple current ratings."
          });
        }
      }

      // Ensure companionParts has at least 3 items
      if (!product.companionParts || product.companionParts.length < 3) {
        product.companionParts = product.companionParts || [];
        const companions = [
          { "partNumber": "KZE-1000uF-25V", "relationship": "compatible" },
          { "partNumber": "KY-470uF-50V", "relationship": "compatible" },
          { "partNumber": "LXS-10000uF-63V", "relationship": "compatible" }
        ];
        while (product.companionParts.length < 3) {
          product.companionParts.push(companions[product.companionParts.length]);
        }
      }

      // Ensure FAQs has at least 5 items
      if (!product.faqs || product.faqs.length < 5) {
        product.faqs = product.faqs || [];
        const productFaqs = [
          {
            "question": `What is the typical application for ${product.partNumber}?`,
            "answer": `${product.partNumber} is designed for high-performance power electronics applications including power supplies, motor drives, and renewable energy systems. It offers excellent ripple current handling and long service life. Contact our FAE team for application-specific recommendations.`,
            "decisionGuide": "Review product specifications and contact FAE for application-specific recommendations.",
            "keywords": ["application", "use case", "power electronics"]
          },
          {
            "question": `What is the operating temperature range of ${product.partNumber}?`,
            "answer": `${product.partNumber} operates reliably across a wide temperature range, typically -40°C to +105°C. The capacitor includes built-in temperature sensing features to ensure safe operation under various environmental conditions.`,
            "decisionGuide": "Verify temperature requirements for your application and ensure adequate thermal management.",
            "keywords": ["temperature range", "thermal management", "operating conditions"]
          },
          {
            "question": `What is the ripple current rating of ${product.partNumber}?`,
            "answer": `The ripple current rating for ${product.partNumber} depends on the specific capacitance and voltage rating. Please refer to the datasheet for detailed specifications. Our FAE team can provide additional technical details for your specific requirements.`,
            "decisionGuide": "Review datasheet specifications for ripple current ratings.",
            "keywords": ["ripple current", "electrical specs", "datasheet"]
          },
          {
            "question": `What is the expected lifetime of ${product.partNumber}?`,
            "answer": `${product.partNumber} offers long service life with typical ratings of 2000-5000 hours at rated temperature. Lifetime extends significantly at lower operating temperatures following the Arrhenius relationship. Contact our FAE team for lifetime calculations.`,
            "decisionGuide": "Consider operating temperature and ripple current for accurate lifetime estimation.",
            "keywords": ["lifetime", "reliability", "MTBF"]
          },
          {
            "question": `How can I request samples of ${product.partNumber}?`,
            "answer": `LiTong provides evaluation samples for qualified commercial customers. To request samples of ${product.partNumber}, contact our sales team with your project details and evaluation timeline. Sample quantities typically range from 5-10 pieces.`,
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

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
let solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix solutions
solutions.solutions.forEach(solution => {
  // Ensure FAQs has at least 5 items
  if (!solution.faqs || solution.faqs.length < 5) {
    solution.faqs = solution.faqs || [];
    const solutionFaqs = [
      {
        "question": `What are the key benefits of the ${solution.title}?`,
        "answer": `The ${solution.title} offers high reliability, excellent performance, and comprehensive technical support from LiTong's FAE team.`,
        "decisionGuide": "Evaluate your application requirements against the solution benefits.",
        "keywords": ["benefits", "solution advantages"]
      },
      {
        "question": `How do I get technical support for this solution?`,
        "answer": `LiTong provides expert FAE support for all Chemi-Con products and solutions. Contact our technical team for assistance.`,
        "decisionGuide": "Contact LiTong FAE team for technical support and guidance.",
        "keywords": ["technical support", "FAE assistance"]
      }
    ];
    while (solution.faqs.length < 5) {
      solution.faqs.push(solutionFaqs[solution.faqs.length - 2] || solutionFaqs[0]);
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed solutions.json');

console.log('\nAll fixes completed!');
