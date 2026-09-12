/**
 * Check PineSemi products status
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'pinesemi', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== PineSemi Brand Data Check ===\n');

let totalIssues = 0;

data.categories.forEach((cat, idx) => {
  console.log(`\n${idx + 1}. ${cat.name} (${cat.products?.length || 0} products)`);
  
  if (cat.products) {
    cat.products.forEach((prod, pidx) => {
      const issues = [];
      
      // Check for fake products (unrealistic specs)
      const voltRating = prod.specifications?.['Voltage Rating'] || '';
      const currentRating = prod.specifications?.['Current Rating'] || '';
      
      // Check for fabricated data patterns
      if (voltRating === '25V DC' && currentRating === '1A') {
        issues.push('FAKE_SPECS(25V/1A)');
      }
      
      // Check for generic part numbers
      if (prod.partNumber?.startsWith('ALT-') || prod.partNumber?.startsWith('COMP-')) {
        issues.push('GENERIC_PART_NUMBER');
      }
      
      // Check field completeness
      if (!prod.descriptionParagraphs || prod.descriptionParagraphs.length < 3) issues.push('descriptionParagraphs');
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
console.log(`Total products: ${data.categories.reduce((sum, cat) => sum + (cat.products?.length || 0), 0)}`);
console.log(`Products with issues: ${totalIssues}`);
