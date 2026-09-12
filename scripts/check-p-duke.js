/**
 * Check P-Duke brand data structure
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'p-duke', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== P-Duke Brand Analysis ===\n');
console.log(`Categories: ${data.categories.length}`);

data.categories.forEach((cat, idx) => {
  console.log(`\n${idx + 1}. ${cat.name} (${cat.products?.length || 0} products)`);
  
  if (cat.products) {
    cat.products.forEach((prod, pidx) => {
      console.log(`   ${pidx + 1}. ${prod.partNumber} - ${prod.name}`);
      
      // Check for fake products (P-DUKE- prefix)
      if (prod.partNumber && prod.partNumber.startsWith('P-DUKE-')) {
        console.log(`      ❌ FAKE PRODUCT`);
      }
      
      // Check field completeness
      const issues = [];
      if (!prod.description || prod.description.length < 50) issues.push('description');
      if (!prod.descriptionParagraphs || prod.descriptionParagraphs.length < 3) issues.push('descriptionParagraphs');
      if (!prod.specifications || Object.keys(prod.specifications).length < 5) issues.push('specifications');
      if (!prod.features || prod.features.length < 5) issues.push('features');
      if (!prod.applications || prod.applications.length < 3) issues.push('applications');
      if (!prod.faeReview || !prod.faeReview.content) issues.push('faeReview');
      if (!prod.alternativeParts || prod.alternativeParts.length < 1) issues.push('alternativeParts');
      if (!prod.companionParts || prod.companionParts.length < 4) issues.push('companionParts');
      if (!prod.faqs || prod.faqs.length < 5) issues.push(`faqs(${prod.faqs?.length || 0})`);
      
      if (issues.length > 0) {
        console.log(`      ⚠️  Missing: ${issues.join(', ')}`);
      }
    });
  }
});
