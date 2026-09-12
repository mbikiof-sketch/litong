const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'bussmann');

// Fix brand.json
const brandPath = path.join(dataDir, 'brand.json');
let brand = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

// Add distributor/selection to seoKeywords
if (!brand.seoKeywords.some(k => k.includes('distributor') || k.includes('selection') || k.includes('选型'))) {
  brand.seoKeywords.push('Bussmann distributor', 'fuse selection guide', '熔断器选型');
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2));
console.log('Fixed brand.json');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix categories
products.categories.forEach(category => {
  // Fix selectionGuideLink
  if (category.selectionGuide && category.selectionGuide.articleId) {
    category.selectionGuideLink = `/bussmann/support/${category.selectionGuide.articleId}.html`;
  }
  
  // Fix product FAQ decisionGuide
  if (category.products) {
    category.products.forEach(product => {
      if (product.faqs) {
        product.faqs.forEach(faq => {
          if (faq.decisionGuide && faq.decisionGuide.length < 30) {
            faq.decisionGuide = "Contact LiTong FAE team for personalized fuse selection guidance based on your application requirements.";
          }
        });
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json');

console.log('\nAll final fixes completed!');
