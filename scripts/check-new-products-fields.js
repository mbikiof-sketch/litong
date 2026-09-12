#!/usr/bin/env node
/**
 * Check new products for missing fields
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'qinheng', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// New products added
const newProductModels = ['CH340E', 'CH340T', 'CH32V103', 'CH32X033', 'CH573', 'CH585', 'CH9325', 'CH9340'];

console.log('=== Checking New Products Fields ===\n');

let hasErrors = false;

data.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (newProductModels.includes(prod.partNumber)) {
      console.log(`\n📦 ${prod.partNumber} (${cat.name})`);
      
      // Check required fields
      const checks = [
        { name: 'shortDescription', exists: !!prod.shortDescription },
        { name: 'descriptionParagraphs', exists: !!(prod.descriptionParagraphs && prod.descriptionParagraphs.length >= 3), count: prod.descriptionParagraphs?.length },
        { name: 'faeReview', exists: !!(prod.faeReview && prod.faeReview.content), hasHighlight: !!prod.faeReview?.highlight },
        { name: 'alternativeParts', exists: !!(prod.alternativeParts && prod.alternativeParts.length >= 2), count: prod.alternativeParts?.length },
        { name: 'companionParts', exists: !!(prod.companionParts && prod.companionParts.length >= 3), count: prod.companionParts?.length },
        { name: 'faqs', exists: !!(prod.faqs && prod.faqs.length >= 5), count: prod.faqs?.length },
        { name: 'specifications', exists: !!prod.specifications },
        { name: 'features', exists: !!(prod.features && prod.features.length > 0) },
        { name: 'applications', exists: !!(prod.applications && prod.applications.length > 0) }
      ];
      
      checks.forEach(check => {
        const status = check.exists ? '✅' : '❌';
        const count = check.count !== undefined ? ` (${check.count})` : '';
        console.log(`   ${status} ${check.name}${count}`);
        if (!check.exists) hasErrors = true;
      });
      
      // Check FAQ structure
      if (prod.faqs) {
        prod.faqs.forEach((faq, idx) => {
          const hasQuestion = !!faq.question;
          const hasAnswer = !!faq.answer;
          const hasDecisionGuide = !!faq.decisionGuide;
          const hasKeywords = !!(faq.keywords && faq.keywords.length > 0);
          
          if (!hasQuestion || !hasAnswer || !hasDecisionGuide || !hasKeywords) {
            console.log(`   ❌ FAQ ${idx + 1} missing fields:`);
            if (!hasQuestion) console.log(`      - question`);
            if (!hasAnswer) console.log(`      - answer`);
            if (!hasDecisionGuide) console.log(`      - decisionGuide`);
            if (!hasKeywords) console.log(`      - keywords`);
            hasErrors = true;
          }
        });
      }
    }
  });
});

console.log('\n' + (hasErrors ? '❌ Found missing fields!' : '✅ All fields complete!'));
