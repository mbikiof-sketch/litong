const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/realtek/products.json');

if (!fs.existsSync(productsFile)) {
  console.error('❌ products.json not found');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== Realtek Products Summary ===\n');

data.categories.forEach((cat, i) => {
  console.log(`${i+1}. ${cat.name}: ${cat.products.length} products`);
});

const totalProducts = data.categories.reduce((sum, c) => sum + c.products.length, 0);
console.log(`\nTotal: ${data.categories.length} categories, ${totalProducts} products`);

// Check each product has required fields
console.log('\n=== Field Completeness Check ===');
let allComplete = true;

data.categories.forEach(cat => {
  cat.products.forEach(prod => {
    const requiredFields = ['partNumber', 'name', 'description', 'descriptionParagraphs', 'specifications', 'features', 'applications', 'faeReview', 'alternativeParts', 'companionParts', 'faqs'];
    const missing = requiredFields.filter(f => !prod[f]);
    
    if (missing.length > 0) {
      console.log(`❌ ${prod.partNumber}: Missing ${missing.join(', ')}`);
      allComplete = false;
    }
    
    if (!prod.faqs || prod.faqs.length < 5) {
      console.log(`❌ ${prod.partNumber}: Only ${prod.faqs ? prod.faqs.length : 0} FAQs (need 5-8)`);
      allComplete = false;
    }
  });
});

if (allComplete) {
  console.log('✅ All products have complete fields');
}

console.log('\n✅ Products.json is ready!');
