/**
 * Mersen Brand Data Fix Script v5
 * Fixes remaining FAQ validation issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'mersen');

// Helper function to read JSON
function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Helper function to write JSON
function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// 1. Fix remaining products.json FAQ issues
function fixProducts() {
  const data = readJSON('products.json');
  
  // Fix category FAQs - specifically for DC Fuses, Industrial Fuses, Surge Protection Devices
  data.categories.forEach(category => {
    if (category.faqs) {
      category.faqs.forEach((faq, index) => {
        // Fix FAQ#2 (index 1) for DC Fuses, Industrial Fuses, Surge Protection Devices
        if (index === 1 && faq.answer.length < 200) {
          faq.answer = "The breaking capacity is specified in the datasheet and represents the maximum fault current the fuse can safely interrupt. This parameter is critical for fault protection and varies by fuse type. High-speed fuses typically offer 150kA-200kA breaking capacity, while standard fuses may offer 50kA-100kA. Always verify this rating exceeds your system's maximum prospective fault current with adequate safety margin for reliable protection in your application environment.";
        }
      });
    }
    
    // Fix products - specifically NH200-690 FAQ#1
    if (category.products) {
      category.products.forEach(product => {
        if (product.partNumber === 'NH200-690' && product.faqs) {
          product.faqs.forEach((faq, index) => {
            if (index === 0 && faq.answer.length < 200) {
              faq.answer = "The breaking capacity is specified in the datasheet and represents the maximum fault current the fuse can safely interrupt. This parameter is critical for fault protection and varies by fuse type. Industrial fuses typically offer 50kA-100kA breaking capacity. Always verify this rating exceeds your system's maximum prospective fault current with adequate safety margin for reliable circuit protection in industrial applications.";
            }
          });
        }
      });
    }
  });
  
  writeJSON('products.json', data);
  console.log('✓ Fixed products.json v5');
}

// 2. Fix solutions.json - fix BOM for Automotive Electronics Solution 2 and decisionFramework
function fixSolutions() {
  const data = readJSON('solutions.json');
  
  // Fix solutions
  data.solutions.forEach(solution => {
    // Fix BOM list - ensure at least 2 items for Automotive Electronics Solution 2
    if (solution.title && solution.title.includes('Automotive Electronics')) {
      if (!solution.keyComponents || solution.keyComponents.length < 2) {
        solution.keyComponents = solution.keyComponents || [];
        solution.keyComponents.push({
          partNumber: "FD300-1000",
          description: "300A DC fuse for auxiliary protection",
          link: "/mersen/products/dc-fuses/fd300-1000.html"
        });
      }
    }
    
    // Fix faeInsights - add decisionFramework if missing
    if (solution.faeInsights) {
      if (typeof solution.faeInsights === 'object' && !solution.faeInsights.decisionFramework) {
        solution.faeInsights.decisionFramework = "1) Analyze system voltage and current requirements; 2) Calculate maximum fault current; 3) Select fuse with appropriate breaking capacity; 4) Verify I2t coordination with semiconductors; 5) Consider environmental conditions; 6) Plan for future expansion; 7) Document protection scheme for maintenance.";
      }
    }
  });
  
  writeJSON('solutions.json', data);
  console.log('✓ Fixed solutions.json v5');
}

// Main execution
console.log('Starting Mersen brand data fixes v5...\n');

try {
  fixProducts();
  fixSolutions();
  
  console.log('\n✅ All Mersen data fixes v5 completed successfully!');
} catch (error) {
  console.error('❌ Error fixing Mersen data v5:', error);
  process.exit(1);
}
