#!/usr/bin/env node
/**
 * Fix NXP alternativeParts comparison format
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'nxp');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

console.log('\n=== Fixing NXP Alternative Parts Format ===\n');

const productsData = readJSON('products.json');

// Fix alternativeParts comparison format
productsData.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.alternativeParts && prod.alternativeParts.length > 0) {
      prod.alternativeParts.forEach(alt => {
        // Ensure comparison uses => format
        if (alt.comparison && !alt.comparison.includes('=>')) {
          alt.comparison = `${prod.partNumber}=><${alt.partNumber}: ${alt.comparison}`;
        }
      });
      console.log(`  ✓ Fixed alternativeParts for ${prod.partNumber}`);
    }
  });
});

writeJSON('products.json', productsData);

console.log('\n=== Alternative Parts Format Fixed ===');
