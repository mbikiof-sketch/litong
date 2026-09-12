/**
 * Check products 5 and 6 (index 4 and 5) in all brands
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const brands = fs.readdirSync(dataDir).filter(f => fs.statSync(path.join(dataDir, f)).isDirectory());

console.log('Checking products 5 and 6 (index 4 and 5) in all brands...\n');

const issues = [];

brands.forEach(brand => {
  const productsFile = path.join(dataDir, brand, 'products.json');
  if (!fs.existsSync(productsFile)) {
    console.log(`❌ ${brand}: No products.json`);
    return;
  }
  
  try {
    const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
    if (!data.categories) {
      console.log(`❌ ${brand}: No categories`);
      return;
    }
    
    data.categories.forEach(cat => {
      if (!cat.products || cat.products.length < 6) {
        console.log(`❌ ${brand}/${cat.id}: Only ${cat.products?.length || 0} products (need 6)`);
        issues.push({ brand, category: cat.id, issue: 'Not enough products', count: cat.products?.length || 0 });
        return;
      }
      
      // Check product 5 (index 4) and product 6 (index 5)
      [4, 5].forEach(idx => {
        const prod = cat.products[idx];
        const prodNum = idx + 1;
        
        if (!prod) {
          console.log(`❌ ${brand}/${cat.id}: Product ${prodNum} missing`);
          issues.push({ brand, category: cat.id, product: prodNum, issue: 'Product missing' });
          return;
        }
        
        const problems = [];
        
        // Check required fields
        if (!prod.shortDescription || prod.shortDescription.length < 10) {
          problems.push('shortDescription missing/too short');
        }
        if (!prod.descriptionParagraphs || prod.descriptionParagraphs.length < 3) {
          problems.push('descriptionParagraphs missing/insufficient');
        }
        if (!prod.faeReview || !prod.faeReview.content || prod.faeReview.content.length < 50) {
          problems.push('faeReview missing/too short');
        }
        if (!prod.alternativeParts || prod.alternativeParts.length < 2) {
          problems.push(`alternativeParts insufficient (${prod.alternativeParts?.length || 0})`);
        }
        if (!prod.companionParts || prod.companionParts.length < 3) {
          problems.push(`companionParts insufficient (${prod.companionParts?.length || 0})`);
        }
        if (!prod.faqs || prod.faqs.length < 5) {
          problems.push(`FAQs insufficient (${prod.faqs?.length || 0})`);
        }
        
        if (problems.length > 0) {
          console.log(`⚠️  ${brand}/${cat.id}/Product ${prodNum} (${prod.partNumber}): ${problems.join(', ')}`);
          issues.push({ 
            brand, 
            category: cat.id, 
            product: prodNum, 
            partNumber: prod.partNumber,
            issues: problems 
          });
        }
      });
    });
  } catch (e) {
    console.log(`❌ ${brand}: Error reading products.json - ${e.message}`);
  }
});

console.log(`\n=== Summary ===`);
console.log(`Total issues found: ${issues.length}`);

// Group by brand
const brandIssues = {};
issues.forEach(issue => {
  if (!brandIssues[issue.brand]) brandIssues[issue.brand] = [];
  brandIssues[issue.brand].push(issue);
});

console.log(`\nBrands with issues:`);
Object.keys(brandIssues).forEach(brand => {
  console.log(`  - ${brand}: ${brandIssues[brand].length} issues`);
});

// Save report
fs.writeFileSync('products-5-6-issues.json', JSON.stringify(brandIssues, null, 2));
console.log(`\nDetailed report saved to: products-5-6-issues.json`);
