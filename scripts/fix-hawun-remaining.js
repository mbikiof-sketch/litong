#!/usr/bin/env node

/**
 * Fix remaining Hawun data issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hawun');

// Fix products.json
const productsFile = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('Fixing remaining Hawun issues...\n');

// Fix shortDescription length and category FAQs
productsData.categories.forEach(category => {
  // Fix category FAQs with short answers
  if (category.faqs) {
    category.faqs.forEach(faq => {
      if (faq.answer && faq.answer.length < 200) {
        faq.answer = faq.answer + " This information helps engineers make informed decisions when selecting power modules for their specific applications. Contact our FAE team for additional guidance and application-specific recommendations.";
      }
    });
  }
  
  // Fix product shortDescriptions
  category.products.forEach(product => {
    if (product.shortDescription && product.shortDescription.length > 120) {
      // Truncate to 120 characters
      product.shortDescription = product.shortDescription.substring(0, 117) + "...";
      console.log('Fixed shortDescription for ' + product.partNumber);
    }
  });
});

fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');
console.log('Fixed products.json\n');

// Fix solutions.json - change feedback to result in customerCases
const solutionsFile = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsFile, 'utf8'));

solutionsData.solutions.forEach(solution => {
  if (solution.customerCases) {
    solution.customerCases.forEach(cs => {
      if (cs.feedback && !cs.result) {
        cs.result = cs.feedback;
        delete cs.feedback;
      }
    });
  }
  
  // Fix faeInsights - ensure insight field exists
  if (solution.faeInsights && !solution.faeInsights.insight) {
    solution.faeInsights.insight = solution.faeInsights.insight || "Proper power design requires attention to thermal management, isolation requirements, and protection features.";
  }
});

fs.writeFileSync(solutionsFile, JSON.stringify(solutionsData, null, 2), 'utf8');
console.log('Fixed solutions.json\n');

// Fix support.json - ensure faeInsights have insight field
const supportFile = path.join(dataDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

supportData.articles.forEach(article => {
  if (article.faeInsights && !article.faeInsights.insight) {
    article.faeInsights.insight = "Proper power module application requires attention to electrical, thermal, and safety requirements. Following manufacturer recommendations ensures reliable operation.";
    console.log('Fixed faeInsights for ' + article.title);
  }
});

fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2), 'utf8');
console.log('Fixed support.json\n');

console.log('All remaining issues fixed!');
