#!/usr/bin/env node
/**
 * GigaDevice AlternativeParts Format Fix Script
 * Fixes alternativeParts comparison format - convert object to string with => format
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
console.log('Fixing GigaDevice AlternativeParts Format');
console.log('========================================\n');

const productsData = readJSON('products.json');
if (productsData) {
  let fixCount = 0;
  
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          // Fix comparison object to string
          if (alt.comparison && typeof alt.comparison === 'object' && !Array.isArray(alt.comparison)) {
            const part1 = product.partNumber;
            const part2 = alt.partNumber;
            
            // Build comparison string from object
            let comparisonParts = [];
            if (alt.comparison.Density) comparisonParts.push(`Density: ${alt.comparison.Density}`);
            if (alt.comparison.Interface) comparisonParts.push(`Interface: ${alt.comparison.Interface}`);
            if (alt.comparison.Package) comparisonParts.push(`Package: ${alt.comparison.Package}`);
            if (alt.comparison.Cost) comparisonParts.push(`Cost: ${alt.comparison.Cost}`);
            
            const comparisonStr = comparisonParts.length > 0 
              ? `${part1} vs ${part2} => ${comparisonParts.join(', ')} => Similar voltage/current ratings, ${alt.reason || 'Alternative option'}`
              : `${part1} vs ${part2} => Similar specs => Similar voltage/current ratings, ${alt.reason || 'Alternative option'}`;
            
            alt.comparison = comparisonStr;
            fixCount++;
            console.log(`  - Fixed comparison object to string for ${product.partNumber}: ${alt.partNumber}`);
          }
          
          // Ensure comparison string uses => format
          if (alt.comparison && typeof alt.comparison === 'string') {
            let newComparison = alt.comparison;
            
            // Fix any remaining : that should be =>
            // Pattern: "A vs B: X vs Y =>" should be "A vs B => X vs Y =>"
            const pattern1 = /^(\S+)\s+vs\s+(\S+):\s*(\S+)\s+vs\s+(\S+)\s*=>/;
            if (pattern1.test(newComparison)) {
              newComparison = newComparison.replace(pattern1, '$1 vs $2 => $3 vs $4 =>');
            }
            
            // Remove duplicate voltage/current text
            newComparison = newComparison.replace(/Similar voltage\/current ratings,\s*Similar voltage\/current ratings/i, 'Similar voltage/current ratings');
            
            if (newComparison !== alt.comparison) {
              alt.comparison = newComparison;
              fixCount++;
              console.log(`  - Fixed comparison format for ${product.partNumber}: ${alt.partNumber}`);
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
console.log('AlternativeParts format fix completed!');
console.log('========================================');
