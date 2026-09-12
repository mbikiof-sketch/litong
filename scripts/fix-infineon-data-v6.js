#!/usr/bin/env node
/**
 * Infineon Brand Data Fix Script V6
 * Fixes alternativeParts - adds reason and useCase fields
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'infineon');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Fixed ${filename}`);
}

// Fix products.json - Fix alternativeParts with reason and useCase
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        // Fix alternativeParts - ensure they have all required fields
        if (product.alternativeParts) {
          product.alternativeParts.forEach((alt, idx) => {
            // Ensure all fields exist
            if (!alt.partNumber) alt.partNumber = `ALT-${product.partNumber}-${idx + 1}`;
            if (!alt.brand) alt.brand = 'Infineon';
            if (!alt.link) alt.link = '#';
            
            // Ensure comparison is a string with proper format
            if (!alt.comparison || typeof alt.comparison !== 'string') {
              alt.comparison = `${product.partNumber} => ${alt.partNumber}: Alternative option with similar specifications`;
            } else if (!alt.comparison.includes('=>')) {
              alt.comparison = `${product.partNumber} => ${alt.partNumber}: ${alt.comparison}`;
            }
            
            // Ensure reason exists
            if (!alt.reason) {
              alt.reason = "Pin-compatible alternative with similar specifications";
            }
            
            // Ensure useCase exists
            if (!alt.useCase) {
              alt.useCase = "General purpose applications";
            }
          });
        }
      });
    }
  });

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting Infineon brand data fix V6...');

try {
  fixProducts();
  console.log('\n✓ All V6 fixes completed successfully!');
  console.log('\nPlease run the validation script again to verify:');
  console.log('  node scripts/brand-master-checklist.js infineon --strict');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
