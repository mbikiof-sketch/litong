/**
 * IXYS Fix - Parameter Mismatches
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'ixys');

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
  console.log('🔧 IXYS Parameter Fix');
  console.log('========================================\n');

  const products = readJSON('products.json');
  if (!products) return;

  products.categories.forEach(category => {
    console.log(`\n📁 ${category.name}:`);
    
    category.products.forEach(product => {
      // 根据分类修复specifications
      if (category.name === 'Power MOSFETs') {
        product.specifications = {
          "Voltage Rating": product.specifications["Voltage Rating"] || product.specifications["Voltage"] || product.voltage || "600V",
          "Current Rating": product.specifications["Current Rating"] || product.specifications["Current"] || product.current || "40A",
          "Rds(on)": product.specifications["Rds(on)"] || product.specifications["On-Resistance"] || product.rdsOn || "60mΩ",
          "Package": product.specifications["Package"] || product.package || "TO-247",
          "Technology": product.specifications["Technology"] || "HiPerFET"
        };
        console.log(`  ✓ Fixed ${product.partNumber} specs`);
      } else if (category.name === 'IGBT Modules') {
        product.specifications = {
          "Voltage Rating": product.specifications["Voltage Rating"] || product.specifications["Voltage"] || product.voltage || "1200V",
          "Current Rating": product.specifications["Current Rating"] || product.specifications["Current"] || product.current || "60A",
          "Configuration": product.specifications["Configuration"] || product.configuration || "Dual",
          "Package": product.specifications["Package"] || product.package || "Module",
          "Technology": product.specifications["Technology"] || "Trench IGBT"
        };
        console.log(`  ✓ Fixed ${product.partNumber} specs`);
      } else if (category.name === 'Power Diodes') {
        product.specifications = {
          "Voltage Rating": product.specifications["Voltage Rating"] || product.specifications["Voltage"] || product.voltage || "600V",
          "Current Rating": product.specifications["Current Rating"] || product.specifications["Current"] || product.current || "60A",
          "Recovery Time": product.specifications["Recovery Time"] || "35ns",
          "Package": product.specifications["Package"] || product.package || "TO-220AC",
          "Type": product.specifications["Type"] || "Fast Recovery"
        };
        console.log(`  ✓ Fixed ${product.partNumber} specs`);
      } else if (category.name === 'Thyristors') {
        product.specifications = {
          "Voltage Rating": product.specifications["Voltage Rating"] || product.specifications["Voltage"] || product.voltage || "1600V",
          "Current Rating": product.specifications["Current Rating"] || product.specifications["Current"] || product.current || "45A",
          "Package": product.specifications["Package"] || product.package || "TO-220AB",
          "Type": product.specifications["Type"] || "Phase Control"
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
