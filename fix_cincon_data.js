const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'cincon');
const productsPath = path.join(dataDir, 'products.json');

// Read products.json
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix products - fix shortDescription length
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
        console.log(`Fixed shortDescription for ${product.partNumber}: ${product.shortDescription.length} chars`);
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('\nFixed cincon products.json');
