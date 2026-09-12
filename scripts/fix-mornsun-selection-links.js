/**
 * Fix selectionGuideLink for all Mornsun categories
 * Must have url and text fields per validation script requirements
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

// Fix selectionGuideLink for all categories
function fixSelectionGuideLinks() {
  const data = readJSON('products.json');
  
  const selectionGuideLinks = {
    'ac-dc-switching-power-supplies': {
      'url': '/support/ac-dc-power-supply-selection-guide',
      'text': 'AC/DC Power Supply Selection Guide - Complete guide for selecting AC/DC power supplies based on power requirements, input voltage, and application needs'
    },
    'dc-dc-converters': {
      'url': '/support/dc-dc-converter-selection-guide',
      'text': 'DC/DC Converter Selection Guide - Guide for selecting isolated and non-isolated DC/DC converters for industrial applications'
    },
    'din-rail-power-supplies': {
      'url': '/support/din-rail-power-supply-selection-guide',
      'text': 'DIN Rail Power Supply Selection Guide - Comprehensive guide for selecting DIN rail power supplies for industrial control panels'
    },
    'igbt-sic-gate-driver-power-supplies': {
      'url': '/support/gate-driver-power-supply-selection-guide',
      'text': 'Gate Driver Power Supply Selection Guide - Technical guide for selecting gate driver power supplies for IGBT and SiC MOSFET applications'
    }
  };
  
  data.categories.forEach(category => {
    if (selectionGuideLinks[category.id]) {
      category.selectionGuideLink = selectionGuideLinks[category.id];
      console.log(`✓ Fixed selectionGuideLink for ${category.id}`);
    }
  });
  
  writeJSON('products.json', data);
}

// Main execution
console.log('Starting selectionGuideLink fix for Mornsun...\n');

fixSelectionGuideLinks();

console.log('\n✅ selectionGuideLink fix completed successfully!');
