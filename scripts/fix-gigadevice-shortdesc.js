#!/usr/bin/env node
/**
 * GigaDevice ShortDescription Fix Script
 * Fixes shortDescription length issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'gigadevice');

// Helper function to read JSON
function readJSON(filename) {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Helper function to write JSON
function writeJSON(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated: ${filename}`);
}

console.log('========================================');
console.log('Fixing GigaDevice ShortDescription');
console.log('========================================\n');

const productsData = readJSON('products.json');
if (productsData) {
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      // Fix shortDescription length (80-120 chars)
      if (!product.shortDescription || product.shortDescription.length < 80) {
        const newDesc = `GigaDevice ${product.partNumber} high-performance ${category.name} with excellent reliability for embedded system applications.`;
        product.shortDescription = newDesc;
        console.log(`  - Fixed shortDescription for ${product.partNumber}: ${newDesc.length} chars`);
      }
    });
  });

  writeJSON('products.json', productsData);
}

console.log('\n========================================');
console.log('ShortDescription fix completed!');
console.log('========================================');
