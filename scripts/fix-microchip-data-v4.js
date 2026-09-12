/**
 * Microchip Brand Data Fix Script v4
 * Fixes MCP23017 FAQ issues
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

// Fix MCP23017 FAQs
function fixProducts() {
  const data = readJSON('products.json');
  
  // Find MCP23017 and fix its FAQs
  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.partNumber === 'MCP23017') {
          // Fix FAQs with extended answers
          product.faqs = [
            {
              question: "What is the operating voltage range for this device?",
              answer: "The MCP23017 operates from 1.8V to 5.5V, making it compatible with both 3.3V and 5V systems. This wide voltage range provides flexibility in system design and allows direct interfacing with various microcontrollers. The I2C interface is also voltage-level compatible with the supply voltage. For best performance, ensure proper decoupling capacitors are placed near the power pins.",
              decisionGuide: "Check your system voltage and ensure it falls within 1.8V-5.5V range. Contact FAE for mixed-voltage system designs.",
              keywords: ["voltage", "operating range", "specifications"]
            },
            {
              question: "What development tools are available?",
              answer: "Microchip provides comprehensive development tools for the MCP23017 including MPLAB X IDE for code development, MPLAB Code Configurator (MCC) for peripheral initialization, and various evaluation boards. The MCP23017 can be easily tested using the Curiosity Nano development boards. Application notes and code examples are available for I2C communication and interrupt handling. Contact our FAE team for specific tool recommendations and example code.",
              decisionGuide: "Download MPLAB X IDE and MCC for rapid development. Contact FAE for example code and application support.",
              keywords: ["development", "tools", "MPLAB"]
            },
            {
              question: "What is the package type and pin count?",
              answer: "The MCP23017 is available in multiple package options including 28-pin SPDIP, SOIC, SSOP, and QFN packages. The DIP package is ideal for prototyping, while SOIC and QFN are suitable for production designs with space constraints. All packages provide access to all 16 GPIO pins plus I2C interface pins. The thermal performance varies by package, with QFN offering the best thermal characteristics for high-current applications.",
              decisionGuide: "Select package based on your PCB space and thermal requirements. Contact FAE for package availability and recommendations.",
              keywords: ["package", "pinout", "footprint"]
            },
            {
              question: "How do I get technical support?",
              answer: "Technical support for the MCP23017 is available through multiple channels: 1) Our FAE team provides direct application support and design review; 2) Online resources include datasheets, application notes, and code examples; 3) Microchip's developer forums offer community support; 4) For urgent production issues, contact FAE directly for priority support. We also offer on-site support for large projects and design reviews.",
              decisionGuide: "Start with online resources and datasheets. Contact FAE for application-specific questions and design support.",
              keywords: ["support", "technical", "FAE"]
            },
            {
              question: "What is the operating temperature range?",
              answer: "The MCP23017 supports industrial temperature range of -40°C to +85°C, making it suitable for harsh environments including industrial control, automotive, and outdoor applications. For extended temperature requirements, contact Microchip for availability of automotive-grade versions. Proper PCB layout with adequate copper area helps maintain reliable operation across the temperature range. Thermal testing is recommended for high-temperature applications.",
              decisionGuide: "Verify your application temperature range is within -40°C to +85°C. Contact FAE for extended temperature requirements.",
              keywords: ["temperature", "operating range", "industrial"]
            }
          ];
          
          console.log('✓ Fixed MCP23017 FAQs');
        }
      });
    }
  });
  
  writeJSON('products.json', data);
  console.log('✓ Fixed products.json v4');
}

// Main execution
console.log('Starting Microchip brand data fixes v4...\n');

try {
  fixProducts();
  
  console.log('\n✅ All Microchip data fixes v4 completed successfully!');
} catch (error) {
  console.error('❌ Error fixing Microchip data v4:', error);
  process.exit(1);
}
