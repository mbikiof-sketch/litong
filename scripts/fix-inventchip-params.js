/**
 * INVENTCHIP Fix - Parameter Mismatches
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'inventchip');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) { return null; }
}

function writeJSON(filename, data) {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2), 'utf8');
  console.log(`  ✓ Updated ${filename}`);
}

function main() {
  console.log('========================================');
  console.log('🔧 INVENTCHIP Parameter Fix');
  console.log('========================================\n');

  const products = readJSON('products.json');
  if (!products) return;

  products.categories.forEach(category => {
    console.log(`\n📁 ${category.name}:`);
    
    category.products.forEach(product => {
      // 根据分类修复specifications
      if (category.name === 'SiC MOSFETs') {
        product.specifications = {
          "Voltage Rating": product.specifications["Voltage Rating"] || product.voltage || "1200V",
          "Current Rating": product.specifications["Current Rating"] || product.current || "40A",
          "On-Resistance": product.specifications["On-Resistance"] || product.specifications["Rds(on)"] || product.rdsOn || "40mΩ",
          "Package": product.specifications["Package"] || product.package || "TO-247-3",
          "Temperature Range": product.specifications["Temperature Range"] || "-55°C to +175°C"
        };
        console.log(`  ✓ Fixed ${product.partNumber} specs`);
      } else if (category.name === 'SiC Power Modules') {
        product.specifications = {
          "Voltage Rating": product.specifications["Voltage Rating"] || product.voltage || "1200V",
          "Current Rating": product.specifications["Current Rating"] || product.current || "400A",
          "Configuration": product.specifications["Configuration"] || product.configuration || "Half-Bridge",
          "Package": product.specifications["Package"] || product.package || "62mm",
          "Temperature Range": product.specifications["Temperature Range"] || "-40°C to +150°C"
        };
        console.log(`  ✓ Fixed ${product.partNumber} specs`);
      } else if (category.name === 'Gate Drivers') {
        product.specifications = {
          "Channels": product.specifications["Channels"] || product.channels || "Single",
          "Isolation": product.specifications["Isolation"] || product.isolation || "Reinforced",
          "Output Current": product.specifications["Output Current"] || product.outputCurrent || "6A",
          "Package": product.specifications["Package"] || product.package || "SOIC-16",
          "Temperature Range": product.specifications["Temperature Range"] || "-40°C to +125°C"
        };
        console.log(`  ✓ Fixed ${product.partNumber} specs`);
      } else if (category.name === 'SiC Bare Die') {
        product.specifications = {
          "Voltage Rating": product.specifications["Voltage Rating"] || product.voltage || "1200V",
          "Current Rating": product.specifications["Current Rating"] || product.current || "40A",
          "Die Size": product.specifications["Die Size"] || product.dieSize || "3.5mm x 3.5mm",
          "Configuration": product.specifications["Configuration"] || product.configuration || "Single",
          "Temperature Range": product.specifications["Temperature Range"] || "-55°C to +175°C"
        };
        console.log(`  ✓ Fixed ${product.partNumber} specs`);
      }
    });
  });

  writeJSON('products.json', products);

  console.log('\n========================================');
  console.log('✅ Parameter fix completed!');
  console.log('========================================');
}

main();
