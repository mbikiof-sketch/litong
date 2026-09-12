/**
 * Fix Will Semiconductor selectionGuideLink format
 * Convert string to object with url and text properties
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 Fixing Will Semiconductor selectionGuideLink format\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
let fixCount = 0;

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📁 Processing category: ${category.name}`);
  
  // Fix selectionGuideLink - convert string to object
  if (typeof category.selectionGuideLink === 'string') {
    const url = category.selectionGuideLink;
    category.selectionGuideLink = {
      url: url,
      text: `View ${category.name} Selection Guide`
    };
    fixCount++;
    console.log(`  ✓ Fixed selectionGuideLink format for ${category.id}`);
  }
  
  // Fix category longDescription - add distributor/selection keywords
  if (!category.longDescription.includes('distributor') && !category.longDescription.includes('selection')) {
    category.longDescription += ' As an authorized distributor, BeiLuo provides professional product selection support and technical services.';
    fixCount++;
    console.log(`  ✓ Fixed longDescription for ${category.id}`);
  }
});

// Write back the fixed data
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Fix complete! Total fixes: ${fixCount}`);
console.log(`\n📄 Updated file: ${productsFile}`);
