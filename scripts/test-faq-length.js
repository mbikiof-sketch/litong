const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'chipanalog', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Testing FAQ lengths for CA-IS3720:\n');

productsData.categories.forEach((category) => {
  category.products.forEach((product) => {
    if (product.partNumber === 'CA-IS3720') {
      console.log(`Product: ${product.partNumber}`);
      console.log(`Number of FAQs: ${product.faqs.length}\n`);
      
      product.faqs.forEach((faq, index) => {
        const answerLength = faq.answer ? faq.answer.length : 0;
        const decisionGuideLength = faq.decisionGuide ? faq.decisionGuide.length : 0;
        
        console.log(`FAQ #${index + 1}:`);
        console.log(`  Question: ${faq.question}`);
        console.log(`  Answer: ${faq.answer}`);
        console.log(`  Answer length: ${answerLength} chars ${answerLength >= 200 ? '✓' : '✗ (need >= 200)'}`);
        console.log(`  DecisionGuide: ${faq.decisionGuide}`);
        console.log(`  DecisionGuide length: ${decisionGuideLength} chars ${decisionGuideLength >= 30 ? '✓' : '✗ (need >= 30)'}`);
        console.log('');
      });
    }
  });
});
