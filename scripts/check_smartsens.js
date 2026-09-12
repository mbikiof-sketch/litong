const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'smartsens', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('SmartSens Products Summary:\n');

productsData.categories.forEach((category, index) => {
  const productCount = category.products ? category.products.length : 0;
  console.log(`Category ${index + 1}: ${category.name}`);
  console.log(`  ID: ${category.id}`);
  console.log(`  Products: ${productCount}`);
  if (category.products && category.products.length > 0) {
    console.log(`  Product List:`);
    category.products.forEach(p => {
      console.log(`    - ${p.partNumber}: ${p.name}`);
    });
  }
  console.log();
});

const totalProducts = productsData.categories.reduce((sum, cat) => sum + (cat.products ? cat.products.length : 0), 0);
console.log(`Total Products: ${totalProducts}`);
console.log(`Total Categories: ${productsData.categories.length}`);
