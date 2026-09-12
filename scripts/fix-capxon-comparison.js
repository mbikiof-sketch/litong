const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'capxon', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing Capxon alternativeParts comparison...\n');

let fixedCount = 0;

// Fix alternativeParts comparison format
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.alternativeParts && Array.isArray(product.alternativeParts)) {
      product.alternativeParts.forEach(alt => {
        // Check if comparison exists and is a string
        if (alt.comparison && typeof alt.comparison === 'string') {
          // Check if comparison needs fixing (doesn't have =>< format)
          if (!alt.comparison.includes('=><')) {
            // Fix the comparison format
            const basePart = product.partNumber;
            const altPart = alt.partNumber;
            alt.comparison = `${basePart}=><${altPart}: ${alt.comparison}`;
            fixedCount++;
            console.log(`✓ Fixed comparison for ${product.partNumber} -> ${altPart}`);
          }
        }
      });
    }
  });
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Fixed ${fixedCount} comparison formats.`);
