#!/usr/bin/env node
/**
 * Check Nichicon product count by category
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'nichicon');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

console.log('\n=== Nichicon Product Count Check ===\n');

const productsData = readJSON('products.json');

productsData.categories.forEach(cat => {
  console.log(`${cat.id}: ${cat.products.length} products`);
  if (cat.products.length < 6) {
    console.log(`  ⚠️ Need ${6 - cat.products.length} more products`);
  }
});

console.log('\n=====================================\n');
