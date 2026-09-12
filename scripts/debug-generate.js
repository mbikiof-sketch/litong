const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('data/infineon/products.json', 'utf8'));
const igbtCategory = data.categories.find(c => c.id === 'igbt');
const product = igbtCategory.products.find(p => p.partNumber === 'FF300R12ME4_B11');

console.log('Original product has descriptionParagraphs:', !!product.descriptionParagraphs);
console.log('Original product has longDescription:', !!product.longDescription);

// 模拟生成脚本中的处理
const processedProduct = { ...product };
if (product.longDescription && !product.descriptionParagraphs) {
  processedProduct.descriptionParagraphs = product.longDescription
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(p => p.length > 0);
}

console.log('\nProcessed product has descriptionParagraphs:', !!processedProduct.descriptionParagraphs);
console.log('Number of paragraphs:', processedProduct.descriptionParagraphs?.length || 0);

if (processedProduct.descriptionParagraphs) {
  processedProduct.descriptionParagraphs.forEach((p, i) => {
    console.log(`Paragraph ${i + 1} (${p.length} chars):`, p.substring(0, 80) + '...');
  });
}
