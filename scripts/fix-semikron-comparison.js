#!/usr/bin/env node
/**
 * Semikron品牌 alternativeParts comparison 格式修复脚本
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'semikron');

function readJSON(filename) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, filename), 'utf8'));
}

function writeJSON(filename, data) {
  fs.writeFileSync(path.join(dataDir, filename), JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Fixed: ${filename}`);
}

function fixProducts() {
  const products = readJSON('products.json');
  
  products.categories.forEach(cat => {
    if (cat.products) {
      cat.products.forEach(product => {
        if (product.alternativeParts) {
          product.alternativeParts.forEach(alt => {
            if (alt.comparison && !alt.comparison.includes('<') && !alt.comparison.includes('>') && !alt.comparison.includes('=')) {
              alt.comparison = alt.comparison + " < Alternative part";
              console.log(`  Fixed comparison for ${alt.partNumber}`);
            }
          });
        }
      });
    }
  });
  
  writeJSON('products.json', products);
}

function main() {
  console.log('\n🔧 Fixing Semikron comparison format...\n');
  fixProducts();
  console.log('\n✅ Comparison format fixed!\n');
}

main();
