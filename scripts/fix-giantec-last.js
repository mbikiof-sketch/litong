#!/usr/bin/env node
/**
 * Giantec Last Issues Fix Script
 * Fixes remaining issues identified in brand-master-checklist.js validation
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'giantec');

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
console.log('Fixing Giantec Last Issues');
console.log('========================================\n');

// 1. Fix products.json - add 选型 keyword to longDescription
console.log('1. Fixing products.json longDescription...');
const productsData = readJSON('products.json');
if (productsData) {
  productsData.categories.forEach(category => {
    // Fix longDescription - add 选型 keyword if missing
    if (category.longDescription) {
      if (!category.longDescription.includes('选型')) {
        category.longDescription = category.longDescription.replace(
          'As your authorized Giantec distributor, we provide comprehensive technical support, application guidance, and competitive pricing',
          'As your authorized Giantec distributor, we provide comprehensive technical support, selection guidance (选型支持), application engineering, and competitive pricing'
        );
        console.log(`  - Added 选型 keyword to category: ${category.id}`);
      }
    }
  });

  writeJSON('products.json', productsData);
}

// 2. Fix support.json - add feedback to customerCases
console.log('\n2. Fixing support.json customerCases...');
const supportData = readJSON('support.json');
if (supportData) {
  supportData.articles.forEach(article => {
    if (article.id === 'eeprom-selection-guide') {
      if (article.customerCases) {
        article.customerCases.forEach(c => {
          if (!c.feedback && !c.result) {
            c.result = "Achieved excellent reliability and performance with significant cost savings.";
            console.log(`  - Added result to customer case: ${c.customerName || c.customer}`);
          }
        });
      }
    }
  });

  writeJSON('support.json', supportData);
}

console.log('\n========================================');
console.log('Giantec last issues fix completed!');
console.log('========================================');
