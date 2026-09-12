/**
 * Check Panasonic products - find products at index 5 and 6 (positions 5,6)
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'panasonic', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== Checking Panasonic Products at positions 5 and 6 ===\n');

data.categories.forEach(category => {
  console.log(`\n📂 ${category.name} (${category.products.length} products)`);
  
  // Check products at index 4 and 5 (positions 5 and 6)
  const product5 = category.products[4]; // Position 5
  const product6 = category.products[5]; // Position 6
  
  if (product5) {
    console.log(`  Position 5: ${product5.partNumber} - ${product5.name}`);
    if (product5.partNumber && product5.partNumber.startsWith('PAN-')) {
      console.log(`    ❌ FAKE PRODUCT`);
    }
  }
  
  if (product6) {
    console.log(`  Position 6: ${product6.partNumber} - ${product6.name}`);
    if (product6.partNumber && product6.partNumber.startsWith('PAN-')) {
      console.log(`    ❌ FAKE PRODUCT`);
    }
  }
});
