#!/usr/bin/env node
/**
 * Check HGSEMI product count per category
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hgsemi');

function loadJson(filename) {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

console.log('========================================');
console.log('HGSEMI Product Count Check');
console.log('========================================\n');

const products = loadJson('products.json');

products.categories.forEach((cat, idx) => {
  const count = cat.products ? cat.products.length : 0;
  console.log(`${idx + 1}. ${cat.name}: ${count} products ${count >= 6 ? '✓' : '✗ (need 6)'}`);
  
  if (cat.products) {
    cat.products.forEach((p, pidx) => {
      console.log(`   ${pidx + 1}. ${p.partNumber} - ${p.name || 'N/A'}`);
    });
  }
});

const total = products.categories.reduce((sum, cat) => sum + (cat.products ? cat.products.length : 0), 0);
console.log(`\nTotal products: ${total}`);
console.log('========================================');
