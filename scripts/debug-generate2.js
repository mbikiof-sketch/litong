const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/infineon/products.json', 'utf8'));
const igbtCategory = data.categories.find(c => c.id === 'igbt');
const product = igbtCategory.products.find(p => p.partNumber === 'FF300R12ME4_B11');

console.log('Product keys:', Object.keys(product));
console.log('\nHas descriptionParagraphs:', 'descriptionParagraphs' in product);

if (product.descriptionParagraphs) {
  console.log('descriptionParagraphs length:', product.descriptionParagraphs.length);
  product.descriptionParagraphs.forEach((p, i) => {
    console.log(`Paragraph ${i + 1} (${p.length} chars):`, p.substring(0, 100));
  });
}

console.log('\nHas longDescription:', 'longDescription' in product);
if (product.longDescription) {
  console.log('longDescription length:', product.longDescription.length);
  console.log('First 200 chars:', product.longDescription.substring(0, 200));
}
