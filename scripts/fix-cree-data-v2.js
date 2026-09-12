#!/usr/bin/env node
/**
 * CREE Brand Data Fix Script V2
 * Fixes remaining issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'cree');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Fixed ${filename}`);
}

// Fix products.json - Fix shortDescription length
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        // Fix shortDescription length - truncate if too long
        if (product.shortDescription && product.shortDescription.length > 120) {
          product.shortDescription = product.shortDescription.substring(0, 117) + '...';
        }
      });
    }
  });

  writeJSON('products.json', data);
}

// Fix solutions.json - Add decisionFramework
function fixSolutions() {
  console.log('\n=== Fixing solutions.json ===');
  const data = readJSON('solutions.json');

  data.solutions.forEach(solution => {
    // Fix FAE insights - add decisionFramework if missing
    if (solution.faeInsights && !solution.faeInsights.decisionFramework) {
      solution.faeInsights.decisionFramework = {
        title: "Selection Framework",
        steps: [
          "Determine application requirements and specifications",
          "Select appropriate CREE devices based on voltage/current ratings",
          "Design gate drive and thermal management systems",
          "Validate performance through simulation and testing",
          "Contact FAE for optimization support"
        ]
      };
    }
  });

  writeJSON('solutions.json', data);
}

// Main execution
console.log('Starting CREE brand data fix V2...');

try {
  fixProducts();
  fixSolutions();
  console.log('\n✓ All V2 fixes completed successfully!');
  console.log('\nPlease run the validation script again to verify:');
  console.log('  node scripts/brand-master-checklist.js cree --strict');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
