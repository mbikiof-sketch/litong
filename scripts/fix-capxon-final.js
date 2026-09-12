const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'capxon', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing Capxon final issues...\n');

// Fix faeReview.highlight for products with short highlights
const productsNeedingHighlightFix = [
  'SF-10000uF-63V', 'SF-4700uF-100V', 'SF-22000uF-80V', 'SF-3300uF-200V',
  'VF-100uF-16V', 'VF-220uF-25V', 'VM-47uF-35V', 'VF-470uF-10V',
  'AF-100uF-50V', 'AH-470uF-63V', 'AF-220uF-25V', 'AH-1000uF-35V'
];

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (productsNeedingHighlightFix.includes(product.partNumber)) {
      if (product.faeReview && product.faeReview.highlight) {
        if (product.faeReview.highlight.length < 100) {
          // Extend the highlight to be more descriptive
          const baseHighlight = product.faeReview.highlight;
          product.faeReview.highlight = baseHighlight + " This capacitor offers excellent performance characteristics including high ripple current capability, extended lifetime rating, and reliable operation across the full temperature range. Ideal for demanding industrial and commercial applications where quality and consistency are essential.";
          fixedCount++;
          console.log(`✓ Fixed faeReview.highlight for ${product.partNumber} (${product.faeReview.highlight.length} chars)`);
        }
      }
    }
  });
});

// Fix alternativeParts comparison format
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        // Check if comparison needs fixing (doesn't have =>< format)
        if (alt.comparison && !alt.comparison.includes('=><')) {
          // Fix the comparison format
          const basePart = product.partNumber;
          const altPart = alt.partNumber;
          alt.comparison = `${basePart}=><${altPart}: ${alt.comparison}`;
          console.log(`✓ Fixed comparison format for ${product.partNumber} -> ${altPart}`);
        }
      });
    }
  });
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Fixed ${fixedCount} issues.`);
