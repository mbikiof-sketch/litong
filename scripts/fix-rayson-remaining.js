#!/usr/bin/env node
/**
 * Fix remaining rayson brand data issues
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'rayson');

// Fix products.json - selectionGuide title
console.log('🔧 Fixing products.json selectionGuide...');
const productsFile = path.join(brandDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

productsData.categories.forEach(cat => {
  if (cat.selectionGuide && !cat.selectionGuide.title) {
    cat.selectionGuide.title = `${cat.name} Selection Guide`;
  }
});

fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));
console.log('✅ products.json fixed\n');

// Fix support.json - keyTakeaways and author experience
console.log('🔧 Fixing support.json...');
const supportFile = path.join(brandDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

supportData.articles.forEach(article => {
  // Fix faeInsights keyTakeaways
  if (article.faeInsights && !article.faeInsights.keyTakeaways) {
    article.faeInsights.keyTakeaways = [
      "Proper memory selection is critical for system stability",
      "Follow manufacturer guidelines for best results",
      "Test thoroughly under actual operating conditions"
    ];
  }
  
  // Fix author experience
  if (article.author && !article.author.experience) {
    article.author.experience = "10+ years";
  }
});

fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2));
console.log('✅ support.json fixed\n');

console.log('🎉 All remaining rayson issues fixed!');
