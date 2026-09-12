#!/usr/bin/env node
/**
 * Final fix for Rivotek validation errors
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
  
  // Fix SEO keywords to include distributor/selection
  products.seoKeywords = [
    "Rivotek distributor",
    "Rivotek computing platform selection",
    "Rivotek AIOS distributor",
    "Rivotek AI hardware selection guide",
    "Rivotek automotive solution distributor"
  ];
  
  // Fix each category - add selectionGuideLink at category level
  products.categories.forEach(cat => {
    // Add selectionGuideLink at category level if missing
    if (!cat.selectionGuideLink) {
      cat.selectionGuideLink = `/rivotek/products/${cat.slug}.html`;
    }
    
    // Ensure selectionGuide is an object with proper structure
    if (typeof cat.selectionGuide === 'object' && cat.selectionGuide !== null) {
      // Keep the object but ensure it has the link
      if (!cat.selectionGuide.link && !cat.selectionGuide.articleLink) {
        cat.selectionGuide.link = `/rivotek/products/${cat.slug}.html`;
      }
    }
  });
  
  saveJson('products.json', products);
  console.log('✓ products.json fixed');
}

// Main execution
console.log('========================================');
console.log('Final Fix for Rivotek');
console.log('========================================');

try {
  fixProducts();
  
  console.log('\n========================================');
  console.log('Final fixes completed!');
  console.log('Run: node scripts/brand-master-checklist.js rivotek');
  console.log('========================================');
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
