const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/infineon/products.json', 'utf8'));
const igbtCategory = data.categories.find(c => c.id === 'igbt');
const product = igbtCategory.products.find(p => p.partNumber === 'FF300R12ME4_B11');

console.log('longDescription:');
console.log(product.longDescription);
console.log('\n--- Split result ---');

const paragraphs = product.longDescription.split(/\n\n+/).map(p => p.trim()).filter(p => p.length > 0);
console.log('Number of paragraphs:', paragraphs.length);
paragraphs.forEach((p, i) => {
  console.log(`Paragraph ${i + 1} (${p.length} chars):`, p.substring(0, 100) + '...');
});
