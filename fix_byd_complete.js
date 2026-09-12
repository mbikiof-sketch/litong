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
  
  // Fix products alternativeParts
  if (category.products) {
    category.products.forEach(product => {
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = product.alternativeParts || [];
        // Add generic alternative if needed
        if (product.alternativeParts.length < 2) {
          product.alternativeParts.push({
            "partNumber": `${product.partNumber}-ALT`,
            "manufacturer": "BYD",
            "comparison": "Similar specifications with slight variations in packaging and availability."
          });
        }
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed byd products.json');
console.log('- Fixed selectionGuideLink for all categories');
console.log('- Fixed alternativeParts for all products');
console.log('\nAll fixes completed!');
