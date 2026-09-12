const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'inventchip', 'products.json'), 'utf8'));

console.log('========================================');
console.log('INVENTCHIP Product Count Check');
console.log('========================================\n');

products.categories.forEach((cat, idx) => {
  const count = cat.products ? cat.products.length : 0;
  console.log(`${idx + 1}. ${cat.name}: ${count} products ${count >= 6 ? '✓' : '✗ (need 6)'}`);
});

const total = products.categories.reduce((sum, cat) => sum + (cat.products ? cat.products.length : 0), 0);
console.log(`\nTotal products: ${total}`);
