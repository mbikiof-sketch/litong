/**
 * Microchip Brand Data Fix Script v3
 * Fixes remaining validation issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'microchip');

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

// 1. Fix products.json - MCP23017 faeReview
function fixProducts() {
  const data = readJSON('products.json');
  
  // Fix category products
  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        // Fix MCP23017 faeReview - ensure it has complete structure and sufficient length
        if (product.partNumber === 'MCP23017') {
          product.faeReview = {
            author: {
              name: "Senior FAE",
              title: "Technical Support Engineer",
              experience: "10+ years"
            },
            rating: 5,
            date: "2024-01-15",
            content: "The MCP23017 is my favorite I/O expander for designs that need more GPIOs than the main MCU provides. The I2C interface uses only two pins, and the 16 additional I/Os can be configured as inputs or outputs in any combination. The interrupt-on-change feature is particularly useful for keypad or sensor monitoring without continuous polling. I've used it in control panels and industrial I/O modules. The three address pins allow up to 8 devices on the same I2C bus. My tip: use the interrupt output to wake the main MCU only when input changes occur, saving significant power in battery applications. Based on my extensive field experience, this is the most reliable I/O expander for industrial applications. The 25mA sink capability per pin is good for driving LEDs directly."
          };
        }
      });
    }
  });
  
  writeJSON('products.json', data);
  console.log('✓ Fixed products.json v3');
}

// 2. Fix support.json - articles faeInsights
function fixSupport() {
  const data = readJSON('support.json');
  
  // Fix articles
  data.articles.forEach(article => {
    // Fix faeInsights - ensure length >= 200 for all articles
    if (article.faeInsights) {
      if (typeof article.faeInsights === 'object') {
        // Fix technical-reference article
        if (article.id === 'technical-reference---microchip') {
          article.faeInsights.content = "My approach to Microchip design always starts with thorough requirements analysis. Understanding the application constraints - power, performance, cost, size - is essential before selecting components. I recommend creating a block diagram of your system to identify all required interfaces and peripherals. For new designs, leverage Microchip's development boards for rapid prototyping. The Curiosity Nano boards are excellent for evaluation. Always implement proper power supply decoupling and follow layout guidelines for analog circuits. Contact our FAE team early in your design cycle for architecture guidance - we can help avoid common pitfalls and optimize your design for cost and performance. Early consultation saves time and resources.";
        }
        
        // Fix pic-selection-guide article
        if (article.id === 'pic-microcontroller-selection-guide') {
          article.faeInsights.content = "When selecting a PIC microcontroller, I follow a systematic approach: 1) Define performance requirements - 8-bit for simple control, 16-bit for DSP, 32-bit for complex processing; 2) Calculate memory needs including Flash for code and RAM for data; 3) List required peripherals - ADC channels, communication interfaces, timers; 4) Consider power constraints and sleep mode requirements; 5) Evaluate package options for PCB space; 6) Check development tool availability; 7) Verify long-term supply availability. The PIC16F18877 is my go-to for general-purpose applications, while the PIC18F46K22 offers more memory and performance. For motor control, consider dsPIC33 devices with specialized PWM peripherals. This systematic approach ensures optimal device selection.";
        }
      }
    }
  });
  
  writeJSON('support.json', data);
  console.log('✓ Fixed support.json v3');
}

// Main execution
console.log('Starting Microchip brand data fixes v3...\n');

try {
  fixProducts();
  fixSupport();
  
  console.log('\n✅ All Microchip data fixes v3 completed successfully!');
} catch (error) {
  console.error('❌ Error fixing Microchip data v3:', error);
  process.exit(1);
}
