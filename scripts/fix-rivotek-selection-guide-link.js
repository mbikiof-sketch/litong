#!/usr/bin/env node
/**
 * Fix Rivotek selectionGuideLink format
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'rivotek');

function loadJson(filename) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, filename), 'utf8'));
}

function saveJson(filename, data) {
  fs.writeFileSync(path.join(dataDir, filename), JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Saved ${filename}`);
}

// Fix products.json
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const products = loadJson('products.json');
  
  // Fix each category - update selectionGuideLink to object format
  products.categories.forEach(cat => {
    // Update selectionGuideLink to object format with url and text
    cat.selectionGuideLink = {
      url: `/rivotek/products/${cat.slug}.html`,
      text: `View ${cat.name} Selection Guide`
    };
    
    console.log(`  Fixed selectionGuideLink for: ${cat.name}`);
  });
  
  saveJson('products.json', products);
  console.log('✓ products.json fixed');
}

// Main execution
console.log('========================================');
console.log('Fix Rivotek selectionGuideLink Format');
console.log('========================================');

try {
  fixProducts();
  
  console.log('\n========================================');
  console.log('Fix completed!');
  console.log('Run: node scripts/brand-master-checklist.js rivotek');
  console.log('========================================');
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
