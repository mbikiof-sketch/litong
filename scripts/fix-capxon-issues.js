const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'capxon', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing Capxon issues...\n');

// 1. Fix selectionGuideLink for all categories
const categoryMappings = {
  'Radial Lead Capacitors': {
    url: '/capxon/support/how-to-select-radial-capacitors.html',
    text: 'View Radial Capacitor Selection Guide'
  },
  'Snap-in Capacitors': {
    url: '/capxon/support/how-to-select-snap-in-capacitors.html',
    text: 'View Snap-in Capacitor Selection Guide'
  },
  'SMD Capacitors': {
    url: '/capxon/support/how-to-select-smd-capacitors.html',
    text: 'View SMD Capacitor Selection Guide'
  },
  'Automotive Capacitors': {
    url: '/capxon/support/how-to-select-automotive-capacitors.html',
    text: 'View Automotive Capacitor Selection Guide'
  }
};

let fixedSelectionGuide = 0;

productsData.categories.forEach(category => {
  const mapping = categoryMappings[category.name];
  if (mapping) {
    category.selectionGuideLink = {
      url: mapping.url,
      text: mapping.text
    };
    fixedSelectionGuide++;
    console.log(`✓ Fixed selectionGuideLink for ${category.name}`);
  }
});

// 2. Fix alternativeParts for products with insufficient quantity
const productsNeedingAlternativeParts = [
  { partNumber: 'AF-220uF-25V', category: 'Automotive Capacitors' },
  { partNumber: 'AH-1000uF-35V', category: 'Automotive Capacitors' }
];

let fixedAlternativeParts = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    const needsFix = productsNeedingAlternativeParts.find(p => p.partNumber === product.partNumber);
    if (needsFix && (!product.alternativeParts || product.alternativeParts.length < 2)) {
      if (!product.alternativeParts) product.alternativeParts = [];
      
      // Add second alternative part based on product type
      if (product.partNumber === 'AF-220uF-25V') {
        product.alternativeParts.push({
          partNumber: "AH-220uF-25V",
          brand: "Capxon",
          specifications: {
            capacitance: "220uF",
            voltage: "25V"
          },
          comparison: "AF-220uF-25V=><AH-220uF-25V: Same capacitance/voltage, higher temperature rating, suitable for direct replacement",
          reason: "Higher temperature rating for demanding applications",
          useCase: "High-temperature automotive applications",
          link: "/capxon/products/automotive-capacitors/ah-220uf-25v.html"
        });
      } else if (product.partNumber === 'AH-1000uF-35V') {
        product.alternativeParts.push({
          partNumber: "AF-1000uF-35V",
          brand: "Capxon",
          specifications: {
            capacitance: "1000uF",
            voltage: "35V"
          },
          comparison: "AH-1000uF-35V=><AF-1000uF-35V: Same capacitance/voltage, standard temperature rating, suitable for direct replacement",
          reason: "Standard temperature rating for cost-sensitive applications",
          useCase: "General automotive applications",
          link: "/capxon/products/automotive-capacitors/af-1000uf-35v.html"
        });
      }
      
      fixedAlternativeParts++;
      console.log(`✓ Fixed alternativeParts for ${product.partNumber}`);
    }
  });
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete!`);
console.log(`  - Fixed selectionGuideLink for ${fixedSelectionGuide} categories`);
console.log(`  - Fixed alternativeParts for ${fixedAlternativeParts} products`);
