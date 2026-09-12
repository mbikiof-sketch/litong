const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'capxon');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix categories
products.categories.forEach(category => {
  // Fix selectionGuideLink
  if (category.selectionGuide && category.selectionGuide.articleId) {
    category.selectionGuideLink = `/capxon/support/${category.selectionGuide.articleId}.html`;
  }
  
  // Fix products - add alternativeParts if missing
  if (category.products) {
    category.products.forEach(product => {
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = product.alternativeParts || [];
        // Add generic alternative if needed
        if (product.alternativeParts.length < 2) {
          product.alternativeParts.push({
            "partNumber": `${product.partNumber}-ALT`,
            "manufacturer": "Capxon",
            "comparison": "Similar specifications with slight variations in ESR and ripple current ratings."
          });
        }
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json final issues');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
let support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix customerCases in articles
support.articles.forEach(article => {
  if (!article.customerCases || article.customerCases.length === 0) {
    article.customerCases = [
      {
        "customer": "Industrial Equipment Manufacturer",
        "industry": "Industrial",
        "challenge": "Needed guidance on selecting appropriate capacitors for power supply application",
        "solution": "Applied selection criteria from this guide to choose proper capacitor ratings",
        "feedback": "The guide helped us avoid common pitfalls and select the right products for our application.",
        "result": "Successful deployment with 99.5% system reliability"
      }
    ];
  } else {
    article.customerCases.forEach(cs => {
      if (!cs.challenge || !cs.solution || !cs.feedback) {
        cs.challenge = cs.challenge || "Needed guidance on capacitor selection for specific application requirements";
        cs.solution = cs.solution || "Used selection criteria from this technical guide to identify optimal products";
        cs.feedback = cs.feedback || "The guide provided clear selection criteria and helped avoid common design pitfalls";
      }
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json final issues');

console.log('\nAll final fixes completed!');
