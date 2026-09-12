#!/usr/bin/env node
/**
 * Semikron Brand Data Fix Script V3
 * Fixes products.json seoKeywords
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'semikron');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Fixed ${filename}`);
}

// Fix products.json - Add seoKeywords with distributor/选型
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  // Fix seoKeywords
  if (!data.seoKeywords) {
    data.seoKeywords = [];
  }
  
  // Check if distributor or 选型 is in keywords
  const hasDistributor = data.seoKeywords.some(kw => 
    kw.toLowerCase().includes('distributor') || kw.includes('选型')
  );
  
  if (!hasDistributor) {
    data.seoKeywords.push('Semikron distributor', 'Semikron 选型');
  }

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting Semikron brand data fix V3...');

try {
  fixProducts();
  console.log('\n✓ All V3 fixes completed successfully!');
  console.log('\nPlease run the validation script again to verify:');
  console.log('  node scripts/brand-master-checklist.js semikron --strict');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
