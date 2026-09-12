/**
 * Verify Panasonic products have all required fields per BRAND_DATA_COMPLETE_GUIDE.md
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'panasonic', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== Verifying Panasonic Product Fields ===\n');

let totalProducts = 0;
let completeProducts = 0;
let issuesFound = [];

data.categories.forEach(category => {
  console.log(`\n📂 ${category.name}`);
  
  category.products.forEach((prod, index) => {
    totalProducts++;
    const issues = [];
    
    // Check all required fields
    if (!prod.partNumber || prod.partNumber.length < 3) issues.push('partNumber');
    if (!prod.name || prod.name.length < 5) issues.push('name');
    if (!prod.description || prod.description.length < 50) issues.push('description');
    if (!prod.descriptionParagraphs || prod.descriptionParagraphs.length < 3) issues.push('descriptionParagraphs');
    if (!prod.specifications || Object.keys(prod.specifications).length < 5) issues.push('specifications');
    if (!prod.features || prod.features.length < 5) issues.push('features');
    if (!prod.applications || prod.applications.length < 3) issues.push('applications');
    if (!prod.faeReview || !prod.faeReview.content) issues.push('faeReview');
    if (!prod.alternativeParts || prod.alternativeParts.length < 1) issues.push('alternativeParts');
    if (!prod.companionParts || prod.companionParts.length < 4) issues.push('companionParts');
    if (!prod.faqs || prod.faqs.length < 5) issues.push(`faqs(${prod.faqs?.length || 0})`);
    
    // Check FAQ fields
    if (prod.faqs) {
      prod.faqs.forEach((faq, i) => {
        if (!faq.question) issues.push(`faq${i}.question`);
        if (!faq.answer) issues.push(`faq${i}.answer`);
        if (!faq.decisionGuide) issues.push(`faq${i}.decisionGuide`);
        if (!faq.keywords || faq.keywords.length === 0) issues.push(`faq${i}.keywords`);
      });
    }
    
    if (issues.length === 0) {
      completeProducts++;
      console.log(`  ✅ ${prod.partNumber}`);
    } else {
      console.log(`  ❌ ${prod.partNumber}: ${issues.join(', ')}`);
      issuesFound.push(`${category.name}/${prod.partNumber}: ${issues.join(', ')}`);
    }
  });
});

console.log(`\n=== Summary ===`);
console.log(`Total Products: ${totalProducts}`);
console.log(`Complete: ${completeProducts}`);
console.log(`With Issues: ${totalProducts - completeProducts}`);

if (issuesFound.length > 0) {
  console.log(`\n=== Issues Detail ===`);
  issuesFound.slice(0, 10).forEach(issue => console.log(`  ${issue}`));
  if (issuesFound.length > 10) {
    console.log(`  ... and ${issuesFound.length - 10} more`);
  }
}
