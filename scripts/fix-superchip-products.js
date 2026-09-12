const fs = require('fs');

console.log('Fixing Superchip products structure...');

const productsData = JSON.parse(fs.readFileSync('./data/superchip/products.json', 'utf8'));

// Add series field to each category
productsData.categories.forEach((category, index) => {
  if (!category.series) {
    category.series = [];
    console.log(`Added empty series array to category ${index + 1}: ${category.name}`);
  }
  
  // Ensure slug/id is set for each category
  if (!category.slug) {
    category.slug = category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    console.log(`Added slug to category: ${category.slug}`);
  }
  
  // Ensure id is set
  if (!category.id) {
    category.id = category.slug || category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    console.log(`Added id to category: ${category.id}`);
  }
});

fs.writeFileSync('./data/superchip/products.json', JSON.stringify(productsData, null, 2));
console.log('\nSuperchip products structure fixed!');
