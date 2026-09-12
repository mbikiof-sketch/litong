/**
 * Fix Will Semiconductor Final Issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 Fixing Will Semiconductor Final Issues\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
let fixCount = 0;

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📁 Processing category: ${category.name}`);
  
  // Fix category longDescription - add distributor/selection keywords
  if (!category.longDescription.includes('distributor') && !category.longDescription.includes('selection')) {
    category.longDescription += ' As an authorized distributor, BeiLuo provides professional product selection support and technical services.';
    fixCount++;
    console.log(`  ✓ Fixed longDescription for ${category.id}`);
  }
  
  // Fix selectionGuideLink - ensure it's not empty
  if (!category.selectionGuideLink || category.selectionGuideLink === '' || category.selectionGuideLink === '#') {
    category.selectionGuideLink = `/will/support/will-${category.slug}-selection-guide.html`;
    fixCount++;
    console.log(`  ✓ Fixed selectionGuideLink for ${category.id}`);
  }
});

// Write back the fixed data
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Fix complete! Total fixes: ${fixCount}`);
console.log(`\n📄 Updated file: ${productsFile}`);
