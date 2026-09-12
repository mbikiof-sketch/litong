#!/usr/bin/env node
/**
 * Check rayson product categories and count
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'rayson', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== Rayson Product Categories ===\n');
console.log(`Total Categories: ${data.categories.length} (need 4)`);
console.log('');

data.categories.forEach((cat, idx) => {
  const productCount = cat.products ? cat.products.length : 0;
  const status = productCount >= 6 ? '✅' : '❌';
  console.log(`${status} Category ${idx + 1}: ${cat.name} (${cat.id})`);
  console.log(`   Products: ${productCount} (need at least 6)`);
  if (cat.products) {
    cat.products.forEach((p, i) => {
      console.log(`   ${i + 1}. ${p.partNumber} - ${p.name}`);
    });
  }
  console.log('');
});

if (data.categories.length < 4) {
  console.log(`❌ Need to add ${4 - data.categories.length} more categories`);
}
