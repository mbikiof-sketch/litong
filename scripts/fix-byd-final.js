const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'byd', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing final BYD issues...\n');

// 1. Fix BG150G12F13L4 alternativeParts
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.partNumber === 'BG150G12F13L4') {
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        if (!product.alternativeParts) product.alternativeParts = [];
        
        // Add second alternative part
        product.alternativeParts.push({
          partNumber: "BG250H12F13L4",
          brand: "BYD",
          specifications: {
            voltage: "1200V",
            current: "250A"
          },
          comparison: "BG150G12F13L4=><BG250H12F13L4: Output current 250A > 150A (+67%), suitable for direct replacement",
          reason: "Higher current for larger motor drives",
          useCase: "200-300kW EV motor drives",
          link: "/byd/products/igbt-modules/bg250h12f13l4.html"
        });
        console.log(`✓ Fixed alternativeParts for BG150G12F13L4`);
      }
    }
  });
});

// 2. Fix BM750F12B34U2 shortDescription (too long)
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.partNumber === 'BM750F12B34U2') {
      if (product.shortDescription && product.shortDescription.length > 120) {
        product.shortDescription = "1200V 750A SiC MOSFET module for high-power 800V EV systems with excellent thermal performance.";
        console.log(`✓ Fixed shortDescription for BM750F12B34U2 (${product.shortDescription.length} chars)`);
      }
    }
  });
});

// 3. Fix alternativeParts comparison format for products with warnings
const productsWithFormatIssues = [
  'BM450F12B34U2', 'BM750F12B34U2', 'BIPM450C15A', 
  'BIPM900C12A', 'BSC035N06NS', 'BSC010N08NS'
];

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (productsWithFormatIssues.includes(product.partNumber) && product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        // Fix comparison format - ensure it uses =>< format
        if (alt.comparison && alt.comparison.includes('建议')) {
          // Extract the part numbers and comparison info
          const basePart = product.partNumber;
          const altPart = alt.partNumber;
          const currentMatch = alt.comparison.match(/(\d+)A/);
          const current = currentMatch ? currentMatch[1] + 'A' : 'different current';
          
          alt.comparison = `${basePart}=><${altPart}: Output current ${current} differs, suitable for direct replacement`;
          console.log(`✓ Fixed comparison format for ${product.partNumber} -> ${altPart}`);
        }
      });
    }
  });
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n✅ Final fixes complete!');
