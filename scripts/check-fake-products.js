/**
 * Check all brands for fake product part numbers
 * Fake products typically have patterns like:
 * - REN-XXX (Renesas fake)
 * - QIN-XXX (Qinheng fake)
 * - PAN-XXX (Panjit fake)
 * - etc.
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const brands = fs.readdirSync(dataDir).filter(dir => {
  const stat = fs.statSync(path.join(dataDir, dir));
  return stat.isDirectory() && fs.existsSync(path.join(dataDir, dir, 'products.json'));
});

// Patterns that indicate fake products
const fakePatterns = [
  /^REN-/,      // Renesas fake
  /^QIN-/,      // Qinheng fake
  /^PAN-/,      // Panjit fake
  /^RAY-/,      // Rayson fake
  /^REA-/,      // Realtek fake
  /^REC-/,      // Recom fake
  /^ST-/,       // ST fake
  /^STM-/,      // STM fake (when not real STM part)
  /^LKS-/,      // Linco/LKS fake
  /^SC-/,       // Southchip fake
  /^FM-/,       // Fuman fake
  /^GD/,        // StarPower fake (when not real GD part)
  /^STR-/,      // Starrystone fake
  /^SPC-/,      // Starrystone fake
  /^SDC-/,      // Starrystone fake
  /^SLD-/,      // Starrystone fake
  /^SGD-/,      // Starrystone fake
  /^TC-/,       // Superchip fake
  /^TDK-/,      // TDK fake
];

console.log('=== Checking for Fake Products ===\n');

brands.forEach(brand => {
  const productsFile = path.join(dataDir, brand, 'products.json');
  try {
    const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
    
    let fakeProducts = [];
    
    data.categories.forEach(cat => {
      cat.products.forEach((prod, index) => {
        const partNumber = prod.partNumber || prod.mpn || '';
        
        // Check if part number matches fake patterns
        const isFake = fakePatterns.some(pattern => pattern.test(partNumber));
        
        if (isFake) {
          fakeProducts.push({
            category: cat.name,
            index: index + 1,
            partNumber: partNumber,
            name: prod.name
          });
        }
      });
    });
    
    if (fakeProducts.length > 0) {
      console.log(`\n📦 ${brand.toUpperCase()} - ${fakeProducts.length} fake products found:`);
      fakeProducts.forEach(fp => {
        console.log(`  ❌ [${fp.category}] #${fp.index}: ${fp.partNumber} - ${fp.name}`);
      });
    }
  } catch (err) {
    console.log(`\n📦 ${brand.toUpperCase()} - Error: ${err.message}`);
  }
});

console.log('\n=== Check Complete ===');
