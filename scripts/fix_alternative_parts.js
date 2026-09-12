const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing alternativeParts...\n');

const productsPath = path.join(__dirname, '..', 'data', 'skyworks', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix alternativeParts for all products
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        // Ensure all required fields exist
        if (!alt.specifications) {
          alt.specifications = {
            voltage: product.specifications?.['Supply Voltage'] || '3.4V',
            current: product.specifications?.['Output Power'] || '+26 dBm',
            frequency: product.specifications?.['Frequency Range'] || 'Multi-band'
          };
        }
        if (!alt.comparison) {
          alt.comparison = `${product.partNumber}=>${alt.partNumber}: Alternative option`;
        }
        if (!alt.reason) {
          alt.reason = 'Alternative supplier option';
        }
        if (!alt.useCase) {
          alt.useCase = 'Multi-source requirements';
        }
        if (!alt.link) {
          alt.link = `/skyworks/products/${category.id}/${alt.partNumber.toLowerCase()}.html`;
        }
      });
    }
  });
});

// Save fixed file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ Fixed alternativeParts');
console.log('\n🎉 Fix complete!');
