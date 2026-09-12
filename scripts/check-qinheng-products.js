#!/usr/bin/env node
/**
 * Check qinheng product count per category
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'qinheng', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== QinHeng Product Count by Category ===\n');

data.categories.forEach((cat, idx) => {
  const productCount = cat.products ? cat.products.length : 0;
  const status = productCount >= 6 ? '✅' : '❌';
  console.log(`${status} Category ${idx + 1}: ${cat.name}`);
  console.log(`   Products: ${productCount} (need at least 6)`);
  if (cat.products) {
    cat.products.forEach((p, i) => {
      console.log(`   ${i + 1}. ${p.partNumber} - ${p.name}`);
    });
  }
  console.log('');
});
