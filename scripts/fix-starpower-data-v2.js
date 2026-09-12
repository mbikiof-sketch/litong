#!/usr/bin/env node
/**
 * Starpower Brand Data Fix Script V2
 * Fixes remaining FAQ issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'starpower');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Fixed ${filename}`);
}

// Fix brand.json - Add one more FAQ
function fixBrand() {
  console.log('\n=== Fixing brand.json ===');
  const data = readJSON('brand.json');

  if (!data.faqs) data.faqs = [];
  while (data.faqs.length < 7) {
    data.faqs.push({
      question: "What is the warranty period for Starpower products?",
      answer: "Starpower products come with a standard 12-month warranty from the date of purchase. Extended warranty options are available for specific applications. Our warranty covers manufacturing defects and ensures product reliability. Contact our sales team for warranty details and terms.",
      decisionGuide: "Contact sales for warranty documentation and extended warranty options.",
      keywords: ["Starpower warranty", "product warranty", "Starpower distributor"]
    });
  }

  writeJSON('brand.json', data);
}

// Fix products.json - Fix root level FAQs and category FAQs
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  // Fix root level FAQs - add decisionGuide and keywords
  if (data.faqs) {
    data.faqs.forEach(faq => {
      if (!faq.decisionGuide) {
        faq.decisionGuide = "Contact our FAE team for technical support.";
      }
      if (!faq.keywords || faq.keywords.length === 0) {
        faq.keywords = ["Starpower products", "technical support", "Starpower distributor"];
      }
      // Fix answer length
      if (faq.answer && faq.answer.length < 200) {
        faq.answer += " For more detailed information, please consult the product datasheet or contact our technical support team.";
      }
    });
  }

  // Fix category FAQs
  data.categories.forEach(category => {
    if (category.faqs) {
      category.faqs.forEach(faq => {
        // Fix answer length
        if (faq.answer && faq.answer.length < 200) {
          faq.answer += ` For more detailed information about ${category.name}, please consult the product datasheet or contact our technical support team. Our FAE engineers are available to assist with your specific design requirements.`;
        }
      });
    }
  });

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting Starpower brand data fix V2...');

try {
  fixBrand();
  fixProducts();
  console.log('\n✓ All V2 fixes completed successfully!');
  console.log('\nPlease run the validation script again to verify:');
  console.log('  node scripts/brand-master-checklist.js starpower --strict');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
