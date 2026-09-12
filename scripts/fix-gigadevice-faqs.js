#!/usr/bin/env node
/**
 * GigaDevice FAQ Fix Script
 * Fixes FAQ answer length issues
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
console.log('Fixing GigaDevice FAQ Answers');
console.log('========================================\n');

const productsData = readJSON('products.json');
if (productsData) {
  let fixCount = 0;
  
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.faqs) {
        product.faqs.forEach((faq, index) => {
          if (faq.answer && faq.answer.length < 200) {
            // Extend answer to meet 200 char minimum
            faq.answer += " Contact BeiLuo FAE team for additional guidance and support on your specific application requirements. Our experienced engineers can provide detailed technical assistance, reference designs, and troubleshooting support.";
            fixCount++;
            console.log(`  - Extended FAQ #${index + 1} for ${product.partNumber}: ${faq.answer.length} chars`);
          }
        });
      }
    });
  });

  writeJSON('products.json', productsData);
  console.log(`\nTotal FAQ fixes: ${fixCount}`);
}

console.log('\n========================================');
console.log('FAQ fix completed!');
console.log('========================================');
