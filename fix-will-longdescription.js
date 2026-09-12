/**
 * Fix Will Semiconductor longDescription - add selection keyword
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 Fixing Will Semiconductor longDescription\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
let fixCount = 0;

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📁 Processing category: ${category.name}`);
  
  const hasDistributor = category.longDescription.toLowerCase().includes('distributor');
  const hasSelection = category.longDescription.toLowerCase().includes('selection') || 
                       category.longDescription.includes('选型');
  
  // Fix category longDescription - add distributor/selection keywords
  if (!hasDistributor || !hasSelection) {
    if (!hasDistributor && !hasSelection) {
      category.longDescription += ' As an authorized distributor, BeiLuo provides professional product selection support and technical services.';
    } else if (!hasDistributor) {
      category.longDescription += ' As an authorized distributor, BeiLuo provides comprehensive technical support.';
    } else if (!hasSelection) {
      category.longDescription += ' Contact us for product selection guidance and technical support.';
    }
    fixCount++;
    console.log(`  ✓ Fixed longDescription for ${category.id}`);
    console.log(`     Has distributor: ${hasDistributor}, Has selection: ${hasSelection}`);
  }
});

// Write back the fixed data
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Fix complete! Total fixes: ${fixCount}`);
console.log(`\n📄 Updated file: ${productsFile}`);
