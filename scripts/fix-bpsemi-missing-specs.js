/**
 * Fix missing specifications in bpsemi products
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'bpsemi', 'products.json');

console.log('Reading products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixCount = 0;

// Get parameters for each category
const categoryParams = {};
productsData.categories.forEach(cat => {
  if (cat.parameters) {
    categoryParams[cat.id] = cat.parameters;
  }
});

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📂 Processing category: ${category.name}`);
  const params = categoryParams[category.id] || [];
  
  category.products.forEach((product) => {
    console.log(`  🔧 Checking: ${product.partNumber}`);
    
    if (!product.specifications) {
      product.specifications = {};
    }
    
    const specs = product.specifications;
    let productFixed = false;
    
    // Check each required parameter
    params.forEach(param => {
      if (!specs[param] || specs[param] === '-' || specs[param] === '') {
        // Add default value based on parameter name and product type
        let defaultValue = '-';
        
        if (category.id === 'led-lighting-drivers') {
          if (param === 'Input Voltage') defaultValue = '85V-265V AC';
          else if (param === 'Output Power') {
            if (product.partNumber.includes('BP2861XJ')) defaultValue = 'Up to 10W';
            else if (product.partNumber.includes('BP2865XJ')) defaultValue = 'Up to 15W';
            else if (product.partNumber.includes('BP3236C')) defaultValue = 'Up to 12W';
            else if (product.partNumber.includes('BP2836D')) defaultValue = 'Up to 18W';
            else defaultValue = 'See datasheet';
          }
          else if (param === 'Current Accuracy') defaultValue = '±5%';
          else if (param === 'Switching Frequency') defaultValue = 'Critical conduction mode';
          else if (param === 'Integrated MOSFET') {
            if (product.partNumber.includes('BP2861XJ') || product.partNumber.includes('BP2865XJ')) defaultValue = '500V/600V';
            else if (product.partNumber.includes('BP3236C')) defaultValue = '500V';
            else if (product.partNumber.includes('BP2836D')) defaultValue = '500V';
            else defaultValue = 'External';
          }
          else if (param === 'Efficiency') defaultValue = '>90%';
          else if (param === 'Power Factor') defaultValue = '>0.9';
          else if (param === 'THD') defaultValue = '<15%';
          else if (param === 'Topology') defaultValue = 'Non-isolated buck';
          else if (param === 'Voltage Rating') defaultValue = '500V';
          else if (param === 'Current Rating') defaultValue = 'See datasheet';
          else if (param === 'Temperature Range') defaultValue = '-40°C to +105°C';
        }
        else if (category.id === 'acdc-power-management') {
          if (param === 'Input Voltage') defaultValue = '85V-265V AC';
          else if (param === 'Output Power') defaultValue = 'Up to 12W';
          else if (param === 'Integrated MOSFET') defaultValue = '650V';
          else if (param === 'Switching Frequency') defaultValue = '65kHz';
          else if (param === 'Standby Power') defaultValue = '<75mW';
          else if (param === 'CV Accuracy') defaultValue = '±5%';
          else if (param === 'CC Accuracy') defaultValue = '±5%';
          else if (param === 'Efficiency') defaultValue = '>85%';
          else if (param === 'MOSFET Drive') defaultValue = 'Integrated';
          else if (param === 'Voltage Rating') defaultValue = '650V';
          else if (param === 'Current Rating') defaultValue = 'See datasheet';
          else if (param === 'Temperature Range') defaultValue = '-40°C to +105°C';
        }
        else if (category.id === 'dcdc-converters') {
          if (param === 'Input Voltage') defaultValue = '4.5V-60V';
          else if (param === 'Output Current') defaultValue = 'Up to 3A';
          else if (param === 'Output Voltage') defaultValue = '0.8V-5.5V';
          else if (param === 'Switching Frequency') defaultValue = '500kHz';
          else if (param === 'Efficiency') defaultValue = '>90%';
          else if (param === 'Quiescent Current') defaultValue = '<100μA';
          else if (param === 'Voltage Rating') defaultValue = '60V';
          else if (param === 'Current Rating') defaultValue = '3A';
          else if (param === 'Temperature Range') defaultValue = '-40°C to +85°C';
        }
        else if (category.id === 'motor-drivers') {
          if (param === 'Motor Supply Voltage') defaultValue = '6V-60V';
          else if (param === 'Logic Supply Voltage') defaultValue = '3.3V-5V';
          else if (param === 'Peak Current') defaultValue = '2A';
          else if (param === 'Continuous Current') defaultValue = '1.5A';
          else if (param === 'Rds(on)') defaultValue = '<300mΩ';
          else if (param === 'Control Interface') defaultValue = 'PWM';
          else if (param === 'Microstepping') defaultValue = 'N/A';
          else if (param === 'Voltage Rating') defaultValue = '60V';
          else if (param === 'Current Rating') defaultValue = '2A';
          else if (param === 'Temperature Range') defaultValue = '-40°C to +85°C';
        }
        
        specs[param] = defaultValue;
        fixCount++;
        productFixed = true;
        console.log(`    ✓ Added ${param}: ${defaultValue}`);
      }
    });
    
    if (productFixed) {
      console.log(`    ✓ Fixed ${product.partNumber}`);
    }
  });
});

// Write back
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`\n========================================`);
console.log(`Missing specifications fix complete!`);
console.log(`Total fixes: ${fixCount}`);
console.log(`========================================`);
