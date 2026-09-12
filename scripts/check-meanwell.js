#!/usr/bin/env node
/**
 * Check MeanWell Brand Data Status
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'meanwell');

console.log('🔍 Checking MeanWell Brand Data Status\n');
console.log('📋 Requirements:');
console.log('   - Each category: at least 6 products');
console.log('   - Solutions: at least 4');
console.log('   - Support articles: at least 5\n');

// Read data files
const productsData = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'products.json'), 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'solutions.json'), 'utf8'));
const supportData = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'support.json'), 'utf8'));

console.log('📊 Current Data Status:');
console.log(`\n   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name} (${cat.id}): ${productCount} products ${productCount >= 6 ? '✅' : '❌'}`);
});

console.log(`\n   Solutions: ${solutionsData.solutions.length} ${solutionsData.solutions.length >= 4 ? '✅' : '❌'}`);
solutionsData.solutions.forEach((sol, idx) => {
  console.log(`     ${idx + 1}. ${sol.title}`);
});

console.log(`\n   Support Articles: ${supportData.articles.length} ${supportData.articles.length >= 5 ? '✅' : '❌'}`);
supportData.articles.forEach((art, idx) => {
  console.log(`     ${idx + 1}. ${art.title}`);
});

// Check if all requirements are met
const allCategoriesOk = productsData.categories.every(cat => cat.products && cat.products.length >= 6);
const solutionsOk = solutionsData.solutions.length >= 4;
const supportOk = supportData.articles.length >= 5;

console.log('\n' + '='.repeat(50));
if (allCategoriesOk && solutionsOk && supportOk) {
  console.log('✅ All requirements met!');
} else {
  console.log('❌ Some requirements not met:');
  if (!allCategoriesOk) console.log('   - Some categories have fewer than 6 products');
  if (!solutionsOk) console.log(`   - Solutions: ${solutionsData.solutions.length}/4 required`);
  if (!supportOk) console.log(`   - Support articles: ${supportData.articles.length}/5 required`);
}
