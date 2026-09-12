/**
 * Fix alternativeParts format in autochips products
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'autochips', 'products.json');

console.log('Reading products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixCount = 0;

// Helper function to fix alternative parts format
function fixAlternativeParts(product, category) {
  if (!product.alternativeParts || product.alternativeParts.length === 0) {
    return;
  }
  
  product.alternativeParts.forEach((alt, index) => {
    // Ensure all required fields exist
    if (!alt.partNumber) {
      console.log(`    ⚠ Missing partNumber in alternative ${index} for ${product.partNumber}`);
    }
    if (!alt.link) {
      alt.link = `/${alt.brand?.toLowerCase() || 'brand'}/products/${alt.partNumber?.toLowerCase().replace(/\s+/g, '-')}`;
      fixCount++;
      console.log(`    ✓ Added link for ${alt.partNumber}`);
    }
    if (!alt.reason) {
      alt.reason = 'Alternative with similar specifications and automotive qualification';
      fixCount++;
      console.log(`    ✓ Added reason for ${alt.partNumber}`);
    }
    if (!alt.brand) {
      // Extract brand from partNumber
      if (alt.partNumber.includes(' ')) {
        alt.brand = alt.partNumber.split(' ')[0];
      } else {
        alt.brand = 'Generic';
      }
      fixCount++;
      console.log(`    ✓ Added brand for ${alt.partNumber}`);
    }
    if (!alt.comparison) {
      alt.comparison = `${alt.partNumber}: Similar specifications to ${product.partNumber}. Refer to datasheet for detailed comparison.`;
      fixCount++;
      console.log(`    ✓ Added comparison for ${alt.partNumber}`);
    }
  });
}

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📂 Processing category: ${category.name}`);
  
  category.products.forEach((product) => {
    console.log(`  🔧 Checking: ${product.partNumber}`);
    fixAlternativeParts(product, category.slug);
  });
});

// Write back
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`\n========================================`);
console.log(`Alternative parts fix complete!`);
console.log(`Total fixes: ${fixCount}`);
console.log(`========================================`);
