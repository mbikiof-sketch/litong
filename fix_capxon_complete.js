const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'capxon');
const productsPath = path.join(dataDir, 'products.json');

// Read products.json
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix categories and products
products.categories.forEach(category => {
  // Fix selectionGuideLink
  if (category.selectionGuide && category.selectionGuide.articleId) {
    category.selectionGuideLink = `/capxon/support/${category.selectionGuide.articleId}.html`;
  }
  
  // Fix products - remove auto-generated -ALT alternatives
  if (category.products) {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        // Filter out auto-generated -ALT alternatives
        product.alternativeParts = product.alternativeParts.filter(alt => {
          return !(alt.partNumber && alt.partNumber.endsWith('-ALT'));
        });
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed capxon products.json');
console.log('- Fixed selectionGuideLink for all categories');
console.log('- Removed auto-generated -ALT alternatives');
console.log('\nAll fixes completed!');
