#!/usr/bin/env node
/**
 * Count Gowin products per category
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'gowin');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return null;
  }
}

function main() {
  const data = readJSON('products.json');
  if (!data) return;
  
  console.log('Gowin Product Categories:\n');
  
  for (const category of data.categories) {
    const productCount = category.products ? category.products.length : 0;
    console.log(`${category.name}:`);
    console.log(`  Products: ${productCount}`);
    
    if (category.products) {
      for (let i = 0; i < category.products.length; i++) {
        const p = category.products[i];
        console.log(`    ${i + 1}. ${p.partNumber} - ${p.name}`);
      }
    }
    
    if (productCount < 6) {
      console.log(`  ⚠️ WARNING: Need ${6 - productCount} more products (minimum 6 required)`);
    } else {
      console.log(`  ✓ OK: Minimum 6 products met`);
    }
    console.log('');
  }
}

main();
