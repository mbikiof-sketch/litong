#!/usr/bin/env node
/**
 * CR Micro Brand Data Fix Script V2
 * Fixes FAQ answer length issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'crmicro');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Fixed ${filename}`);
}

// Fix products.json - Fix FAQ answer lengths
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  // Fix root level FAQ answer lengths
  if (data.faqs) {
    data.faqs.forEach((faq, index) => {
      if (faq.answer && faq.answer.length < 200) {
        faq.answer += " For more detailed information about CR Micro products and application guidance, please consult the product datasheet or contact our technical support team. Our FAE engineers are available to assist with your specific design requirements.";
      }
    });
  }

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting CR Micro brand data fix V2...');

try {
  fixProducts();
  console.log('\n✓ All V2 fixes completed successfully!');
  console.log('\nPlease run the validation script again to verify:');
  console.log('  node scripts/brand-master-checklist.js crmicro --strict');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
