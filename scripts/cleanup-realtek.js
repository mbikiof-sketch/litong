/**
 * Clean up old realtek product pages that are not in the current 4 categories
 */

const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '..', 'output', 'realtek', 'products');

// Current valid categories
const validCategories = [
  'ethernet-controllers',
  'wireless-network',
  'audio-codecs',
  'card-readers'
];

// Valid category HTML files
const validCategoryFiles = validCategories.map(cat => `${cat}.html`);

// Get all files in products directory
const files = fs.readdirSync(productsDir);

let deletedCount = 0;

files.forEach(file => {
  const filePath = path.join(productsDir, file);
  const stat = fs.statSync(filePath);
  
  if (stat.isDirectory()) {
    // Check if directory is a valid category
    if (!validCategories.includes(file)) {
      // Remove old category directory
      fs.rmSync(filePath, { recursive: true, force: true });
      console.log(`❌ Deleted old category directory: ${file}`);
      deletedCount++;
    } else {
      // Clean up old product files in valid categories
      const productFiles = fs.readdirSync(filePath);
      const validProducts = getValidProductsForCategory(file);
      
      productFiles.forEach(prodFile => {
        if (prodFile === 'index.html') return;
        
        const prodName = prodFile.replace('.html', '');
        if (!validProducts.includes(prodName)) {
          fs.unlinkSync(path.join(filePath, prodFile));
          console.log(`  ❌ Deleted old product: ${file}/${prodFile}`);
          deletedCount++;
        }
      });
    }
  } else if (stat.isFile() && file.endsWith('.html')) {
    // Check if file is a valid category page or index
    if (!validCategoryFiles.includes(file) && file !== 'index.html') {
      fs.unlinkSync(filePath);
      console.log(`❌ Deleted old category page: ${file}`);
      deletedCount++;
    }
  }
});

console.log(`\n✅ Cleanup complete! Deleted ${deletedCount} old files/directories.`);

function getValidProductsForCategory(category) {
  const validProducts = {
    'ethernet-controllers': ['rtl8111h', 'rtl8111ep-cg', 'rtl8153b', 'rtl8156b', 'rtl8156bg-s', 'rtl8125b'],
    'wireless-network': ['rtl8821ce', 'rtl8822ce', 'rtl8852ae', 'rtl8811au', 'rtl8812au', 'rtl8723ds'],
    'audio-codecs': ['alc897', 'alc4080', 'alc236', 'alc5616', 'alc662', 'alc269'],
    'card-readers': ['rts5170', 'rts5249', 'rts5261', 'rts525a', 'rts5732', 'rts5711']
  };
  return validProducts[category] || [];
}
