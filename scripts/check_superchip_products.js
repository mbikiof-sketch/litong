const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'superchip');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

console.log('Superchip Product Categories:');
console.log('============================');

productsData.categories.forEach((category, index) => {
  const productCount = category.products ? category.products.length : 0;
  console.log(`${index + 1}. ${category.name} (${category.id}): ${productCount} products`);
  
  if (category.products) {
    category.products.forEach((product, pIndex) => {
      console.log(`   ${pIndex + 1}. ${product.partNumber} - ${product.name}`);
    });
  }
  console.log('');
});
