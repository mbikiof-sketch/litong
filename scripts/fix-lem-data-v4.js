#!/usr/bin/env node
/**
 * LEM Brand Data Fix Script V4
 * Fixes FAE Review author format for template compatibility
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'lem');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Fixed ${filename}`);
}

// Fix products.json - Fix FAE Review author format
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.faeReview && product.faeReview.author) {
          // Convert author object to string for template compatibility
          if (typeof product.faeReview.author === 'object') {
            product.faeReview.author = product.faeReview.author.name || 'FAE';
          }
        }
      });
    }
  });

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting LEM brand data fix V4...');

try {
  fixProducts();
  console.log('\n✓ All V4 fixes completed successfully!');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
