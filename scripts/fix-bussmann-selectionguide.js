const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'bussmann', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix selectionGuideLink for all categories
const categoryMappings = {
  'Low Voltage Fuses': {
    url: '/bussmann/support/low-voltage-fuse-selection.html',
    text: 'View Low Voltage Fuse Selection Guide'
  },
  'Semiconductor Fuses': {
    url: '/bussmann/support/semiconductor-fuse-selection.html',
    text: 'View Semiconductor Fuse Selection Guide'
  },
  'EV Fuses': {
    url: '/bussmann/support/ev-fuse-selection.html',
    text: 'View EV Fuse Selection Guide'
  },
  'Solar Fuses': {
    url: '/bussmann/support/solar-fuse-selection.html',
    text: 'View Solar Fuse Selection Guide'
  }
};

let fixedCount = 0;

productsData.categories.forEach(category => {
  const mapping = categoryMappings[category.name];
  if (mapping) {
    category.selectionGuideLink = {
      url: mapping.url,
      text: mapping.text
    };
    fixedCount++;
    console.log(`✓ Fixed selectionGuideLink for ${category.name}`);
  }
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Fixed selectionGuideLink for ${fixedCount} categories.`);
