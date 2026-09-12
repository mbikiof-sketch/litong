#!/usr/bin/env node
/**
 * GigaDevice Comparison Fix Script 2
 * Fixes alternativeParts comparison format - replace : with =>
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
console.log('Fixing GigaDevice Comparison Format 2');
console.log('========================================\n');

const productsData = readJSON('products.json');
if (productsData) {
  let fixCount = 0;
  
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison && typeof alt.comparison === 'string') {
            let newComparison = alt.comparison;
            
            // Fix pattern like "A vs B: X vs Y =>" to "A vs B => X vs Y =>"
            // Replace the : between the two vs patterns
            const pattern = /^(\w+(?:-\w+)*)\s+vs\s+(\w+(?:-\w+)*):\s*(\w+)\s+vs\s+(\w+)\s*=>/i;
            if (pattern.test(newComparison)) {
              newComparison = newComparison.replace(pattern, '$1 vs $2 => $3 vs $4 =>');
            }
            
            // Remove duplicate "similar voltage/current ratings"
            newComparison = newComparison.replace(/Similar voltage\/current ratings,\s*Similar voltage\/current ratings/i, 'Similar voltage/current ratings');
            newComparison = newComparison.replace(/similar voltage\/current ratings,\s*similar voltage\/current ratings/i, 'similar voltage/current ratings');
            
            if (newComparison !== alt.comparison) {
              alt.comparison = newComparison;
              fixCount++;
              console.log(`  - Fixed comparison for ${product.partNumber}: ${alt.partNumber}`);
            }
          }
        });
      }
    });
  });

  writeJSON('products.json', productsData);
  console.log(`\nTotal fixes: ${fixCount}`);
}

console.log('\n========================================');
console.log('Comparison format fix 2 completed!');
console.log('========================================');
