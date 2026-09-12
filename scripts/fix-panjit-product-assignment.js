#!/usr/bin/env node
/**
 * Fix product assignment to categories
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'panjit', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Get all products from first category
const allProducts = data.categories[0].products;
console.log(`Total products in first category: ${allProducts.length}`);

// Clear all category products
 data.categories.forEach(cat => {
  cat.products = [];
});

// Assign products to correct categories
allProducts.forEach(prod => {
  const pn = prod.partNumber;
  let assigned = false;
  
  // Schottky Diodes
  if (pn.startsWith('SK')) {
    data.categories[0].products.push(prod);
    assigned = true;
  }
  // Fast Recovery Diodes
  else if (pn.startsWith('UF') || pn.startsWith('MUR') || pn.startsWith('RHRP')) {
    data.categories[1].products.push(prod);
    assigned = true;
  }
  // Bridge Rectifiers
  else if (pn.startsWith('MB') || pn.startsWith('GBU') || pn.startsWith('KBPC')) {
    data.categories[2].products.push(prod);
    assigned = true;
  }
  // Protection Devices
  else if (pn.startsWith('P') || pn.startsWith('SM') || pn.startsWith('1.5KE') || pn.startsWith('5KP')) {
    data.categories[3].products.push(prod);
    assigned = true;
  }
  
  if (!assigned) {
    console.log(`Warning: Could not assign ${pn} to any category`);
  }
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));

console.log('\n✅ Products reassigned to correct categories');
data.categories.forEach((cat, i) => {
  console.log(`${i + 1}. ${cat.name}: ${cat.products.length} products`);
  cat.products.forEach(p => console.log(`   - ${p.partNumber}`));
});
