#!/usr/bin/env node
/**
 * Check all products have required fields
 * Verifies all products have: alternativeParts, companionParts, faqs
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

console.log('🔍 Checking Product Fields in All Brands\n');

// Get all brand directories
const brands = fs.readdirSync(DATA_DIR).filter(item => {
  const itemPath = path.join(DATA_DIR, item);
  return fs.statSync(itemPath).isDirectory();
}).sort();

let totalProducts = 0;
let productsWithAllFields = 0;
let productsMissingFields = [];

brands.forEach(brand => {
  const productsPath = path.join(DATA_DIR, brand, 'products.json');
  
  if (fs.existsSync(productsPath)) {
    try {
      const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      
      if (productsData.categories) {
        productsData.categories.forEach(cat => {
          if (cat.products) {
            cat.products.forEach(prod => {
              totalProducts++;
              
              const hasAlternativeParts = !!prod.alternativeParts && prod.alternativeParts.length > 0;
              const hasCompanionParts = !!prod.companionParts && prod.companionParts.length > 0;
              const hasFaqs = !!prod.faqs && prod.faqs.length > 0;
              
              if (hasAlternativeParts && hasCompanionParts && hasFaqs) {
                productsWithAllFields++;
              } else {
                productsMissingFields.push({
                  brand: brand,
                  category: cat.name,
                  product: prod.partNumber || prod.name,
                  missingAlternativeParts: !hasAlternativeParts,
                  missingCompanionParts: !hasCompanionParts,
                  missingFaqs: !hasFaqs
                });
              }
            });
          }
        });
      }
    } catch (e) {
      console.log(`   Error reading ${brand}/products.json: ${e.message}`);
    }
  }
});

console.log(`📊 Results:`);
console.log(`   Total Products: ${totalProducts}`);
console.log(`   Products with all fields: ${productsWithAllFields}`);
console.log(`   Products missing fields: ${productsMissingFields.length}`);
console.log(`   Coverage: ${((productsWithAllFields / totalProducts) * 100).toFixed(1)}%`);

if (productsMissingFields.length > 0) {
  console.log(`\n❌ Products missing fields (showing first 20):`);
  productsMissingFields.slice(0, 20).forEach(item => {
    const missing = [];
    if (item.missingAlternativeParts) missing.push('alternativeParts');
    if (item.missingCompanionParts) missing.push('companionParts');
    if (item.missingFaqs) missing.push('faqs');
    console.log(`   - ${item.brand}/${item.product}: missing ${missing.join(', ')}`);
  });
  
  if (productsMissingFields.length > 20) {
    console.log(`   ... and ${productsMissingFields.length - 20} more`);
  }
}

// Save report
const reportPath = path.join(__dirname, '..', 'product-fields-report.json');
fs.writeFileSync(reportPath, JSON.stringify({
  totalProducts,
  productsWithAllFields,
  productsMissingFields,
  coverage: ((productsWithAllFields / totalProducts) * 100).toFixed(1) + '%'
}, null, 2));
console.log(`\n💾 Report saved to: ${reportPath}`);
