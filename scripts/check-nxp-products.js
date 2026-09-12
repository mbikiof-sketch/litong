#!/usr/bin/env node
/**
 * Check NXP product count per category
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'nxp');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

console.log('\n=== NXP Product Count Check ===\n');

const productsData = readJSON('products.json');

productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  const status = productCount >= 6 ? '✅' : '❌';
  console.log(`${status} ${cat.name}: ${productCount} products`);
  
  if (cat.products && cat.products.length > 0) {
    console.log('   Products:');
    cat.products.forEach((prod, idx) => {
      const faqCount = prod.faqs ? prod.faqs.length : 0;
      const hasFaeReview = prod.faeReview && prod.faeReview.content ? '✓' : '✗';
      const hasAltParts = prod.alternativeParts && prod.alternativeParts.length > 0 ? '✓' : '✗';
      const hasCompParts = prod.companionParts && prod.companionParts.length > 0 ? '✓' : '✗';
      console.log(`     ${idx + 1}. ${prod.partNumber} - FAQs:${faqCount} FAE:${hasFaeReview} Alt:${hasAltParts} Comp:${hasCompParts}`);
    });
  }
  console.log('');
});

console.log('=== Check Complete ===');
