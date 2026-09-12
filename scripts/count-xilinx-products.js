/**
 * Count Xilinx products per category
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'xilinx', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== Xilinx Product Count ===\n');

data.categories.forEach((cat, idx) => {
  console.log(`${idx + 1}. ${cat.name}: ${cat.products?.length || 0} products`);
  if (cat.products) {
    cat.products.forEach((prod, pidx) => {
      console.log(`   ${pidx + 1}. ${prod.partNumber}`);
    });
  }
});

console.log(`\nTotal: ${data.categories.reduce((sum, cat) => sum + (cat.products?.length || 0), 0)} products`);
