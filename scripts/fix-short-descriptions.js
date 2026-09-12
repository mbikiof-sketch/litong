#!/usr/bin/env node

/**
 * Fix shortDescription length issues for HCI products
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hci');
const productsFile = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('Fixing shortDescription lengths...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  console.log(`Processing ${category.name}...`);
  
  category.products.forEach(product => {
    const desc = product.shortDescription;
    const len = desc.length;
    
    if (len > 120) {
      // Truncate to 115 characters and add ellipsis if needed
      let newDesc = desc.substring(0, 115).trim();
      if (!newDesc.endsWith('.')) {
        newDesc += '.';
      }
      product.shortDescription = newDesc;
      console.log(`  ✓ Fixed ${product.partNumber}: ${len} -> ${newDesc.length} chars`);
      fixedCount++;
    }
  });
  
  console.log('');
});

// Save updated file
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`✅ Successfully fixed ${fixedCount} short descriptions!`);
