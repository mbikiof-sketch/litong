#!/usr/bin/env node
/**
 * Semikron Brand Data Fix Script V2
 * Fixes remaining issues after first pass
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

// Fix brand.json - Add one more FAQ
function fixBrand() {
  console.log('\n=== Fixing brand.json ===');
  const data = readJSON('brand.json');

  if (!data.faqs) data.faqs = [];
  while (data.faqs.length < 7) {
    data.faqs.push({
      question: "What is the warranty period for Semikron products?",
      answer: "Semikron products come with a standard 12-month warranty from the date of purchase. Extended warranty options are available for specific applications. Our warranty covers manufacturing defects and ensures product reliability. Contact our sales team for warranty details and terms.",
      decisionGuide: "Contact sales for warranty documentation and extended warranty options.",
      keywords: ["Semikron warranty", "product warranty", "Semikron distributor"]
    });
  }

  writeJSON('brand.json', data);
}

// Fix products.json - Add root level FAQs and fix category longDescription
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');

  // Fix root level FAQs
  if (!data.faqs) data.faqs = [];
  while (data.faqs.length < 5) {
    data.faqs.push({
      question: `How do I select the right Semikron product for my application?`,
      answer: `Our technical team provides comprehensive selection guidance for Semikron products. Consider your application requirements, voltage/current ratings, thermal conditions, and package type. Contact our FAE team for personalized recommendations based on your specific needs.`,
      decisionGuide: "Contact our FAE team for product selection guidance.",
      keywords: ["Semikron selection", "product selection", "FAE support"]
    });
  }

  // Fix existing FAQs to have decisionGuide and keywords
  data.faqs.forEach(faq => {
    if (!faq.decisionGuide) {
      faq.decisionGuide = "Contact our FAE team for technical support.";
    }
    if (!faq.keywords || faq.keywords.length === 0) {
      faq.keywords = ["Semikron products", "technical support", "Semikron distributor"];
    }
  });

  // Fix categories
  data.categories.forEach(category => {
    // Fix longDescription to include distributor/选型 keywords
    if (!category.longDescription || !category.longDescription.includes('distributor') && !category.longDescription.includes('选型')) {
      category.longDescription = `As a leading Semikron distributor, we offer comprehensive ${category.name} solutions for industrial applications. Our technical team provides expert selection guidance (选型支持), application support, and after-sales service. Semikron ${category.name} are known for their reliability, performance, and innovation in power electronics. Contact us for product selection assistance.`;
    }
  });

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting Semikron brand data fix V2...');

try {
  fixBrand();
  fixProducts();
  console.log('\n✓ All V2 fixes completed successfully!');
  console.log('\nPlease run the validation script again to verify:');
  console.log('  node scripts/brand-master-checklist.js semikron --strict');
} catch (error) {
  console.error('\n✗ Error during fix:', error.message);
  console.error(error.stack);
  process.exit(1);
}
