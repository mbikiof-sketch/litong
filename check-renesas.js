/**
 * Check Renesas analog-power products
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'data', 'renesas', 'products.json');
const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

const cat = data.categories.find(c => c.id === 'analog-power');
if (!cat) {
  console.log('analog-power category not found');
  process.exit(1);
}

console.log(`Category: ${cat.name}`);
console.log(`Products: ${cat.products.length}`);

[4, 5].forEach(idx => {
  const prod = cat.products[idx];
  if (prod) {
    console.log(`\nProduct ${idx + 1}: ${prod.partNumber}`);
    console.log(`  alternativeParts: ${prod.alternativeParts?.length || 0}`);
    console.log(`  companionParts: ${prod.companionParts?.length || 0}`);
    console.log(`  faqs: ${prod.faqs?.length || 0}`);
    if (prod.alternativeParts) {
      prod.alternativeParts.forEach((alt, i) => {
        console.log(`    alt ${i + 1}: ${alt.partNumber}`);
      });
    }
  }
});
