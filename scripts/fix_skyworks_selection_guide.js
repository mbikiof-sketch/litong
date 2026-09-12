const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing selectionGuideLink format...\n');

// Read products.json
const productsPath = path.join(__dirname, '..', 'data', 'skyworks', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix selectionGuideLink in products.json - 需要包含url和text字段
productsData.categories.forEach(category => {
  const guideTitle = category.selectionGuide?.title || `How to Select ${category.name}`;
  category.selectionGuideLink = {
    url: `/skyworks/support/${category.selectionGuide?.articleId || 'rf-front-end-selection-guide'}.html`,
    text: guideTitle
  };
});

// Save fixed file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ Fixed products.json - selectionGuideLink format');

console.log('\n🎉 Selection guide link fix complete!');
