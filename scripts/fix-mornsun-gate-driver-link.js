/**
 * Fix Gate Driver selectionGuideLink
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'mornsun');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// Fix selectionGuideLink for Gate Driver category
function fixGateDriverSelectionGuideLink() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    if (category.id === 'gate-driver-power-supplies') {
      category.selectionGuideLink = {
        'url': '/support/gate-driver-power-supply-selection-guide',
        'text': 'Gate Driver Power Supply Selection Guide - Technical guide for selecting gate driver power supplies for IGBT and SiC MOSFET applications'
      };
      console.log(`✓ Fixed selectionGuideLink for ${category.id}`);
    }
  });
  
  writeJSON('products.json', data);
}

// Main execution
console.log('Starting Gate Driver selectionGuideLink fix...\n');

fixGateDriverSelectionGuideLink();

console.log('\n✅ Gate Driver selectionGuideLink fix completed successfully!');
