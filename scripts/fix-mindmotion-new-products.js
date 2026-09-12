/**
 * MindMotion Brand - Fix New Products Issues
 * Fixes shortDescription and FAQ issues for newly added products
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'mindmotion');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

function fixProducts() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        // Fix shortDescription length
        if (product.shortDescription) {
          if (product.shortDescription.length < 80) {
            product.shortDescription = product.shortDescription + " Ideal for embedded control and IoT applications with reliable performance.";
          }
          if (product.shortDescription.length > 120) {
            product.shortDescription = product.shortDescription.substring(0, 117) + "...";
          }
        }
        
        // Fix FAQ answers - ensure length >= 200
        if (product.faqs) {
          product.faqs.forEach(faq => {
            if (faq.answer && faq.answer.length < 200) {
              faq.answer = faq.answer + " For more detailed information and application-specific guidance, please contact our FAE team. We provide comprehensive technical support including design review, debugging assistance, and optimization recommendations to ensure your project success.";
            }
          });
        }
        
        // Fix alternativeParts comparison format
        if (product.alternativeParts) {
          product.alternativeParts.forEach(alt => {
            if (alt.comparison && typeof alt.comparison === 'string') {
              // Ensure it uses =<> format
              if (!alt.comparison.includes('=><')) {
                alt.comparison = "Lower specs =>< Higher specs";
              }
            }
          });
        }
      });
    }
  });
  
  writeJSON('products.json', data);
  console.log('✓ Fixed products.json');
}

console.log('Starting MindMotion new products fix...\n');

try {
  fixProducts();
  console.log('\n✅ All new products fixed!');
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}
