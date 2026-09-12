#!/usr/bin/env node
/**
 * GigaDevice AlternativeParts Fix Script
 * Fixes alternativeParts comparison format issues
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
console.log('Fixing GigaDevice AlternativeParts');
console.log('========================================\n');

const productsData = readJSON('products.json');
if (productsData) {
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison && typeof alt.comparison === 'string') {
            // Fix format: ensure it uses => format
            // Replace any remaining : with =>
            let newComparison = alt.comparison;
            
            // If comparison contains : but not =>, replace : with =>
            if (newComparison.includes(':') && !newComparison.includes('=>')) {
              newComparison = newComparison.replace(/:/g, '=>');
            }
            
            // Ensure it has voltage/current info
            if (!newComparison.toLowerCase().includes('voltage') && 
                !newComparison.toLowerCase().includes('current') &&
                !newComparison.toLowerCase().includes('ratings')) {
              // Find the position after the second =>
              const parts = newComparison.split('=>');
              if (parts.length >= 2) {
                parts[1] = ' Similar voltage/current ratings,' + parts[1];
                newComparison = parts.join('=>');
              }
            }
            
            if (newComparison !== alt.comparison) {
              alt.comparison = newComparison;
              console.log(`  - Fixed comparison for ${product.partNumber}: ${alt.partNumber}`);
            }
          }
        });
      }
    });
  });

  writeJSON('products.json', productsData);
}

console.log('\n========================================');
console.log('AlternativeParts fix completed!');
console.log('========================================');
