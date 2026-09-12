const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'chemi-con');
const productsPath = path.join(dataDir, 'products.json');

// Read products.json
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix products - remove auto-generated -ALT alternatives
products.categories.forEach(category => {
  if (category.products) {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        // Filter out auto-generated -ALT alternatives
        product.alternativeParts = product.alternativeParts.filter(alt => {
          return !(alt.partNumber && alt.partNumber.endsWith('-ALT') && alt.comparison && alt.comparison.includes('Similar specifications'));
        });
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed chemi-con products.json final issues');
console.log('\nAll final fixes completed!');
