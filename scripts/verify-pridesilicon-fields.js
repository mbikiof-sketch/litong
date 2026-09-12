/**
 * Verify PrideSilicon product fields in detail
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'pridesilicon', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('=== PrideSilicon Product Fields Verification ===\n');

let totalProducts = 0;
let completeProducts = 0;

data.categories.forEach(category => {
  console.log(`\n📁 ${category.name} (${category.products.length} products)`);
  console.log('=' .repeat(60));
  
  category.products.forEach((prod, idx) => {
    totalProducts++;
    const issues = [];
    
    // Check required fields
    if (!prod.partNumber) issues.push('missing partNumber');
    if (!prod.name) issues.push('missing name');
    if (!prod.shortDescription || prod.shortDescription.length < 20) issues.push('shortDescription too short');
    if (!prod.descriptionParagraphs || prod.descriptionParagraphs.length < 3) {
      issues.push(`descriptionParagraphs: ${prod.descriptionParagraphs?.length || 0}/3`);
    }
    if (!prod.specifications || Object.keys(prod.specifications).length < 3) {
      issues.push(`specifications: ${Object.keys(prod.specifications || {}).length}/3 fields`);
    }
    if (!prod.features || prod.features.length < 5) {
      issues.push(`features: ${prod.features?.length || 0}/5`);
    }
    if (!prod.applications || prod.applications.length < 3) {
      issues.push(`applications: ${prod.applications?.length || 0}/3`);
    }
    if (!prod.faeReview || !prod.faeReview.content || prod.faeReview.content.length < 50) {
      issues.push('faeReview missing or too short');
    }
    if (!prod.alternativeParts || prod.alternativeParts.length < 1) {
      issues.push(`alternativeParts: ${prod.alternativeParts?.length || 0}/1`);
    }
    if (!prod.companionParts || prod.companionParts.length < 3) {
      issues.push(`companionParts: ${prod.companionParts?.length || 0}/3`);
    }
    if (!prod.faqs || prod.faqs.length < 5) {
      issues.push(`faqs: ${prod.faqs?.length || 0}/5`);
    } else {
      // Check FAQ fields
      prod.faqs.forEach((faq, fidx) => {
        if (!faq.question) issues.push(`faq[${fidx}].question missing`);
        if (!faq.answer) issues.push(`faq[${fidx}].answer missing`);
        if (!faq.decisionGuide) issues.push(`faq[${fidx}].decisionGuide missing`);
        if (!faq.keywords || faq.keywords.length === 0) issues.push(`faq[${fidx}].keywords missing`);
      });
    }
    
    if (issues.length === 0) {
      console.log(`  ✅ ${idx + 1}. ${prod.partNumber}`);
      completeProducts++;
    } else {
      console.log(`  ❌ ${idx + 1}. ${prod.partNumber}`);
      issues.forEach(issue => console.log(`      - ${issue}`));
    }
  });
});

console.log(`\n${'='.repeat(60)}`);
console.log(`📊 Summary: ${completeProducts}/${totalProducts} products complete`);
console.log(`${'='.repeat(60)}`);

if (completeProducts === totalProducts) {
  console.log('\n✅ All products meet BRAND_DATA_COMPLETE_GUIDE.md requirements!');
} else {
  console.log(`\n⚠️  ${totalProducts - completeProducts} products need fixing`);
}
