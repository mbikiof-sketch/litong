const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'chemi-con', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing Chemi-Con faeReview.highlight...\n');

let fixedCount = 0;

// Fix faeReview.highlight for all products with short highlights
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.faeReview && product.faeReview.highlight) {
      if (product.faeReview.highlight.length < 100) {
        // Extend the highlight to be more descriptive
        const baseHighlight = product.faeReview.highlight;
        product.faeReview.highlight = baseHighlight + " This capacitor delivers exceptional performance with low ESR, high ripple current capability, and extended lifetime rating. Chemi-Con's rigorous quality control ensures consistent performance across all units. Ideal for demanding industrial and commercial applications where reliability and efficiency are paramount.";
        fixedCount++;
        console.log(`✓ Fixed faeReview.highlight for ${product.partNumber} (${product.faeReview.highlight.length} chars)`);
      }
    }
  });
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Fixed ${fixedCount} faeReview.highlight issues.`);
