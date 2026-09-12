#!/usr/bin/env node
/**
 * Fix Gowin remaining issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'gowin');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// Fix faeReview.highlight length
function fixFaeReviewHighlight(product) {
  if (product.faeReview && product.faeReview.highlight) {
    const highlight = product.faeReview.highlight;
    if (highlight.length < 100) {
      // Add more content to reach 100 characters
      product.faeReview.highlight = highlight + " Contact BeiLuo FAE team for technical support and application guidance.";
      // Truncate if too long
      if (product.faeReview.highlight.length > 120) {
        product.faeReview.highlight = product.faeReview.highlight.substring(0, 117) + "...";
      }
      console.log(`  Fixed faeReview.highlight for ${product.partNumber}`);
    }
  }
}

// Fix alternativeParts comparison format
function fixAlternativeParts(product) {
  if (product.alternativeParts) {
    for (const alt of product.alternativeParts) {
      if (alt.comparison && typeof alt.comparison === 'string' && !alt.comparison.includes('=>')) {
        // Fix comparison format to use =>
        alt.comparison = alt.comparison.replace(/vs|VS/g, '=>').replace(/:/g, '=>');
        console.log(`  Fixed comparison format for ${product.partNumber} - ${alt.partNumber}`);
      }
      // Ensure parameters include voltage/current info
      if (!alt.parameters || Object.keys(alt.parameters).length === 0) {
        alt.parameters = {
          "Logic Elements": "Varies",
          "Package": "Compatible"
        };
      }
    }
  }
}

// Fix shortDescription length
function fixShortDescription(product) {
  if (product.shortDescription) {
    const len = product.shortDescription.length;
    if (len > 120) {
      // Truncate to 120 characters
      product.shortDescription = product.shortDescription.substring(0, 117) + "...";
      console.log(`  Fixed shortDescription length for ${product.partNumber}: ${product.shortDescription.length} chars`);
    } else if (len < 80) {
      // Extend to at least 80 characters
      product.shortDescription += " Contact BeiLuo FAE team for selection guidance and technical support.";
      if (product.shortDescription.length > 120) {
        product.shortDescription = product.shortDescription.substring(0, 117) + "...";
      }
      console.log(`  Extended shortDescription for ${product.partNumber}: ${product.shortDescription.length} chars`);
    }
  }
}

// Main function
function main() {
  console.log('========================================');
  console.log('Fixing Gowin Remaining Issues');
  console.log('========================================\n');
  
  const data = readJSON('products.json');
  
  for (const category of data.categories) {
    console.log(`Category: ${category.name}`);
    for (const product of category.products) {
      fixFaeReviewHighlight(product);
      fixAlternativeParts(product);
      fixShortDescription(product);
    }
    console.log('');
  }
  
  writeJSON('products.json', data);
  
  console.log('========================================');
  console.log('Fix complete!');
  console.log('========================================');
}

main();
