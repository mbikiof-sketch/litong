/**
 * Add highlight field to all faeReview entries in Mornsun products
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

// Highlights for each product
const highlights = {
  "LM150-23B24": "High-efficiency 150W industrial power supply with universal input and excellent reliability for PLC applications",
  "LM100-23B12": "Reliable 12V 100W supply with 91% efficiency, ideal for industrial displays and control systems",
  "LM200-23B24": "High-power 200W supply with active PFC and parallel operation capability for demanding applications",
  "LM50-23B05": "Compact 5V 50W supply with low standby power, perfect for IoT and embedded systems",
  "LM75-23B15": "Mid-power 15V 75W supply with comprehensive protection for industrial control systems",
  "LM35-23B05": "Compact 5V 35W supply with ultra-small footprint for space-constrained designs",
  "URB2412YMD-20WR3": "Reliable 24V to 12V isolated converter with wide input range for industrial bus systems",
  "K7805-2000R3": "High-efficiency non-isolated 5V regulator, drop-in replacement for linear 7805",
  "URB2415YMD-20WR3": "Isolated 15V converter from 24V bus, ideal for analog circuits and industrial interfaces",
  "K7803-1000R3": "Efficient 3.3V regulator for microcontroller applications, no heatsink required",
  "URB2405YMD-20WR3": "20W isolated 5V converter for 24V industrial systems with excellent efficiency",
  "URB4812YMD-20WR3": "48V to 12V converter designed for telecom and industrial battery systems",
  "LI120-20B24": "Reliable 120W DIN rail supply with DC OK relay for PLC monitoring applications",
  "LI60-20B12": "Compact 60W 12V DIN rail supply, slim 32mm width saves panel space",
  "LI240-20B24": "High-capacity 240W DIN rail supply with active PFC and parallel operation support",
  "LI60-20B24": "Versatile 60W 24V DIN rail supply with universal input for global deployments",
  "LI480-20B24": "High-power 480W three-phase DIN rail supply for large industrial control systems",
  "LI30-20B12": "Ultra-slim 30W 12V DIN rail supply, only 22.5mm wide for compact panels",
  "QA151C3": "Reliable IGBT gate driver supply with 3000V isolation and high dv/dt immunity",
  "QA-R4G0315T": "High-isolation 4000V gate driver supply for demanding high-voltage applications",
  "QA152C3": "Asymmetric ±15V/-8V output optimized for modern IGBT modules with noise immunity",
  "QA-R3G0315T": "High-isolation version of QA151C3 with 4000V rating for extra safety margin",
  "QA153C3": "Dual ±15V gate driver supply for high-power IGBTs with excellent noise immunity",
  "QA-R5G0515T": "Ultra-high isolation 5000V supply optimized for SiC MOSFET applications"
};

function fixFAEReviewHighlights() {
  const data = readJSON('products.json');
  
  let fixedCount = 0;
  data.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.faeReview && highlights[product.partNumber]) {
        product.faeReview.highlight = highlights[product.partNumber];
        fixedCount++;
        console.log(`✓ Added highlight for ${product.partNumber}`);
      } else if (!product.faeReview) {
        console.log(`⚠ No faeReview found for ${product.partNumber}`);
      }
    });
  });
  
  writeJSON('products.json', data);
  console.log(`\n✅ Fixed ${fixedCount} products`);
}

// Main execution
console.log('Starting faeReview highlight fix for Mornsun...\n');

fixFAEReviewHighlights();

console.log('\n✅ All faeReview highlights added successfully!');
