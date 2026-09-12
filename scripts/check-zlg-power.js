/**
 * Check ZLG Power products status
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'zlg-power', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== ZLG Power Brand Data Check ===\n');

let totalIssues = 0;
let totalProducts = 0;

data.categories.forEach((cat, idx) => {
  console.log(`\n${idx + 1}. ${cat.name} (${cat.products?.length || 0} products)`);
  
  if (cat.products) {
    cat.products.forEach((prod, pidx) => {
      totalProducts++;
      const issues = [];
      
      // Check field completeness
      if (!prod.description || prod.description.length < 50) issues.push('description');
      if (!prod.descriptionParagraphs || prod.descriptionParagraphs.length < 3) issues.push('descriptionParagraphs');
      if (!prod.specifications || Object.keys(prod.specifications).length < 5) issues.push('specifications');
      if (!prod.features || prod.features.length < 5) issues.push('features');
      if (!prod.applications || prod.applications.length < 3) issues.push('applications');
      if (!prod.faeReview || !prod.faeReview.content) issues.push('faeReview');
      if (!prod.alternativeParts || prod.alternativeParts.length < 1) issues.push('alternativeParts');
      if (!prod.companionParts || prod.companionParts.length < 3) issues.push('companionParts');
      if (!prod.faqs || prod.faqs.length < 5) issues.push(`faqs(${prod.faqs?.length || 0})`);
      
      // Check for generic FAE review
      if (prod.faeReview?.content?.includes('excellent performance across various operating conditions') ||
          prod.faeReview?.content?.includes('Based on extensive field experience')) {
        issues.push('GENERIC_FAE_REVIEW');
      }
      
      if (issues.length > 0) {
        console.log(`   ${pidx + 1}. ${prod.partNumber} - ❌ ${issues.join(', ')}`);
        totalIssues++;
      } else {
        console.log(`   ${pidx + 1}. ${prod.partNumber} - ✅`);
      }
    });
  }
});

console.log(`\n\n=== Summary ===`);
console.log(`Total categories: ${data.categories.length}`);
console.log(`Total products: ${totalProducts}`);
console.log(`Products with issues: ${totalIssues}`);
