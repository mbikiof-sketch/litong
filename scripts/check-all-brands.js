/**
 * Check all brand data for compliance with iron rules
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// Get all brand directories
const brands = fs.readdirSync(dataDir).filter(dir => {
  const stat = fs.statSync(path.join(dataDir, dir));
  return stat.isDirectory() && fs.existsSync(path.join(dataDir, dir, 'products.json'));
});

console.log('=== Brand Data Compliance Check ===\n');

brands.forEach(brand => {
  const productsFile = path.join(dataDir, brand, 'products.json');
  try {
    const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
    
    console.log(`\n📦 ${brand.toUpperCase()}`);
    console.log('='.repeat(50));
    
    // Check categories
    const categories = data.categories || [];
    console.log(`Categories: ${categories.length}`);
    
    if (categories.length < 4) {
      console.log(`  ⚠️  WARNING: Need at least 4 categories (has ${categories.length})`);
    } else {
      console.log(`  ✅ Category count OK`);
    }
    
    // Check products per category
    let totalProducts = 0;
    let productsWithIssues = 0;
    
    categories.forEach(cat => {
      const products = cat.products || [];
      totalProducts += products.length;
      
      if (products.length < 6) {
        console.log(`  ⚠️  ${cat.name}: Only ${products.length} products (need 6)`);
      } else {
        console.log(`  ✅ ${cat.name}: ${products.length} products`);
      }
      
      // Check product fields
      products.forEach(prod => {
        const issues = [];
        if (!prod.partNumber) issues.push('missing partNumber');
        if (!prod.name) issues.push('missing name');
        if (!prod.description || prod.description.length < 50) issues.push('description too short');
        if (!prod.descriptionParagraphs || prod.descriptionParagraphs.length < 2) issues.push('missing descriptionParagraphs');
        if (!prod.specifications || Object.keys(prod.specifications).length < 5) issues.push('insufficient specifications');
        if (!prod.features || prod.features.length < 5) issues.push('insufficient features');
        if (!prod.applications || prod.applications.length < 3) issues.push('insufficient applications');
        if (!prod.faeReview || !prod.faeReview.content) issues.push('missing faeReview');
        if (!prod.alternativeParts || prod.alternativeParts.length < 1) issues.push('missing alternativeParts');
        if (!prod.companionParts || prod.companionParts.length < 4) issues.push('insufficient companionParts');
        if (!prod.faqs || prod.faqs.length < 5) issues.push(`insufficient FAQs (${prod.faqs ? prod.faqs.length : 0})`);
        
        if (issues.length > 0) {
          console.log(`    ❌ ${prod.partNumber}: ${issues.join(', ')}`);
          productsWithIssues++;
        }
      });
    });
    
    console.log(`\n  Total Products: ${totalProducts}`);
    if (productsWithIssues > 0) {
      console.log(`  Products with Issues: ${productsWithIssues}`);
    } else {
      console.log(`  ✅ All products have complete fields`);
    }
    
  } catch (err) {
    console.log(`\n📦 ${brand.toUpperCase()}`);
    console.log(`  ❌ Error reading products.json: ${err.message}`);
  }
});

console.log('\n' + '='.repeat(50));
console.log('Check complete!');
