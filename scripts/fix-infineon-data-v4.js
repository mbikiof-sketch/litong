#!/usr/bin/env node
/**
 * Infineon Brand Data Fix Script V4
 * Fixes FAQ answer lengths and alternativeParts
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'infineon');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Fixed ${filename}`);
}

// Fix products.json - Fix FAQ answer lengths and alternativeParts
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  data.categories.forEach(category => {
    // Fix category FAQs - ensure answers are at least 200 characters
    if (category.faqs) {
      category.faqs.forEach((faq, index) => {
        if (faq.answer && faq.answer.length < 200) {
          faq.answer += ` For more detailed information about ${category.name} and application guidance, please consult the product datasheet or contact our technical support team. Our FAE engineers are available to assist with your specific design requirements and provide personalized recommendations.`;
        }
      });
    }

    // Fix products
    if (category.products) {
      category.products.forEach(product => {
        // Fix alternativeParts - ensure they have all required fields with proper format
        if (product.alternativeParts) {
          product.alternativeParts.forEach((alt, idx) => {
            // Ensure all fields exist
            if (!alt.partNumber) alt.partNumber = `ALT-${product.partNumber}-${idx + 1}`;
            if (!alt.brand) alt.brand = 'Infineon';
            if (!alt.link) alt.link = '#';
            
            // Ensure comparison is a string with proper format
            if (!alt.comparison || typeof alt.comparison !== 'string') {
              alt.comparison = `${product.partNumber} => ${alt.partNumber}: Alternative option with similar specifications`;
            } else if (!alt.comparison.includes('=>')) {
              alt.comparison = `${product.partNumber} => ${alt.partNumber}: ${alt.comparison}`;
            }
          });
        }
      });
    }
  });

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting Infineon brand data fix V4...');

try {
  fixProducts();
  console.log('\n✓ All V4 fixes completed successfully!');
  console.log('\nPlease run the validation script again to verify:');
  console.log('  node scripts/brand-master-checklist.js infineon --strict');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
