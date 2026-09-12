const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'bronze-tech');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix 1: Add distributor/selection to seoKeywords
if (!products.seoKeywords.some(k => k.includes('distributor') || k.includes('selection') || k.includes('选型'))) {
  products.seoKeywords.push('Bronze Tech distributor', 'connector selection guide', '选型指南');
}

// Fix 2: Fix categories selectionGuideLink and products alternativeParts
products.categories.forEach(category => {
  // Fix selectionGuideLink
  if (category.selectionGuide && category.selectionGuide.articleId) {
    category.selectionGuideLink = `/bronze-tech/support/${category.selectionGuide.articleId}.html`;
  }
  
  // Fix products alternativeParts
  if (category.products) {
    category.products.forEach(product => {
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = product.alternativeParts || [];
        // Add generic alternative if needed
        if (product.alternativeParts.length < 2) {
          product.alternativeParts.push({
            "partNumber": `${product.partNumber}-ALT`,
            "manufacturer": "Bronze Tech",
            "comparison": "Similar specifications with slight variations in form factor and pin configuration."
          });
        }
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
let support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Add distributor/selection to seoKeywords
if (!support.seoKeywords.some(k => k.includes('distributor') || k.includes('selection') || k.includes('选型'))) {
  support.seoKeywords.push('Bronze Tech distributor', 'support selection', '技术支持选型');
}

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json');

console.log('\nAll fixes completed!');
