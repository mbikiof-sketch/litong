const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gowin', 'products.json');
const content = fs.readFileSync(productsPath, 'utf8');
const data = JSON.parse(content);

console.log('Gowin Product Categories:\n');

for (const category of data.categories) {
  const productCount = category.products ? category.products.length : 0;
  console.log(`${category.name} (${category.id}):`);
  console.log(`  Products: ${productCount}`);
  
  if (category.products && category.products.length > 0) {
    category.products.forEach((p, i) => {
      console.log(`    ${i + 1}. ${p.partNumber}`);
    });
  }
  
  if (productCount < 6) {
    console.log(`  ⚠️  WARNING: Need ${6 - productCount} more products (minimum 6 required)`);
  } else {
    console.log(`  ✓ OK: Minimum 6 products met`);
  }
  console.log('');
}
