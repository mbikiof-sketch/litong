#!/usr/bin/env node
/**
 * Generate Espressif brand pages with full template
 */

const fs = require('fs');
const path = require('path');

const config = {
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data'),
  templatesDir: path.join(__dirname, '..', 'templates')
};

const brand = 'espressif';

console.log(`🔧 Generating ${brand} brand pages with full template...\n`);

// Load brand data
const brandData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'brand.json'), 'utf8'));
const productsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'products.json'), 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'solutions.json'), 'utf8'));

const brandOutputDir = path.join(config.outputDir, brand);

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Load template components
const navbarHtml = fs.readFileSync(path.join(config.templatesDir, 'components', 'navbar.html'), 'utf8');
const footerHtml = fs.readFileSync(path.join(config.templatesDir, 'components', 'footer.html'), 'utf8');
const brandTabNavHtml = fs.readFileSync(path.join(config.templatesDir, 'components', 'brand-tab-nav.html'), 'utf8');
const breadcrumbHtml = fs.readFileSync(path.join(config.templatesDir, 'components', 'breadcrumb.html'), 'utf8');
const floatingContactHtml = fs.readFileSync(path.join(config.templatesDir, 'components', 'floating-contact.html'), 'utf8');

// Generate product pages
function generateProductPages() {
  console.log('📦 Generating product pages...');
  
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      const productHtml = generateProductHtml(product, category, brandData);
      
      const catDir = path.join(brandOutputDir, 'products', category.slug);
      ensureDir(catDir);
      
      const fileName = `${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.html`;
      fs.writeFileSync(path.join(catDir, fileName), productHtml);
      console.log(`✅ Generated: products/${category.slug}/${fileName}`);
    });
  });
}

// Generate product HTML with full template
function generateProductHtml(product, category, brand) {
  const cssPath = '../../../../assets/css';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.partNumber} | ${brand.displayName} | Core Distributor</title>
  <meta name="description" content="${product.shortDescription || product.descriptionParagraphs[0]} - In stock at BeiLuo. Authorized core distributor.">
  <meta name="keywords" content="${product.partNumber}, ${category.name}, ${brand.displayName}, distributor, datasheet">
  <meta name="robots" content="index, follow">
  <meta name="author" content="BeiLuo">
  <link rel="canonical" href="https://ic-distributor.com/${brand.name.toLowerCase()}/products/${product.partNumber.toLowerCase()}.html">
  
  <!-- Product Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "${product.partNumber}",
    "description": "${product.shortDescription || product.descriptionParagraphs[0]}",
    "brand": { "@type": "Brand", "name": "${brand.name}" },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  }
  </script>
  
  <link rel="stylesheet" href="${cssPath}/style.css">
  <link rel="stylesheet" href="${cssPath}/navbar.css">
  <link rel="stylesheet" href="${cssPath}/footer.css">
  <link rel="stylesheet" href="${cssPath}/breadcrumb.css">
  <link rel="stylesheet" href="${cssPath}/brand-tab-nav.css">
  <link rel="stylesheet" href="${cssPath}/floating-contact.css">
  
  <style>
    .product-detail { padding: var(--space-16) 0; }
    .product-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-12);
      margin-bottom: var(--space-12);
    }
    
    .product-image {
      background: var(--bg-light);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
    }
    
    .product-info h1 { font-size: 2.5rem; color: var(--primary-blue); margin-bottom: var(--space-4); }
    
    .product-short-desc {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--text-medium);
      margin-bottom: var(--space-6);
      max-width: 600px;
    }
    
    .product-description { font-size: 1.125rem; line-height: 1.8; color: var(--text-medium); margin-bottom: var(--space-6); }
    
    .specs-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: var(--space-8);
    }
    
    .specs-table th,
    .specs-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid var(--border-light);
    }
    
    .specs-table th {
      background: var(--bg-light);
      font-weight: 600;
      color: var(--text-dark);
      width: 30%;
    }
    
    .features-list, .applications-list {
      list-style: none;
      padding: 0;
      margin-bottom: var(--space-8);
    }
    
    .features-list li, .applications-list li {
      padding: 8px 0;
      padding-left: 28px;
      position: relative;
    }
    
    .features-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--success-green);
      font-weight: bold;
    }
    
    .applications-list li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--primary-blue);
    }
    
    .fae-review {
      background: var(--bg-light);
      border-radius: var(--radius-lg);
      padding: var(--space-8);
      margin-bottom: var(--space-8);
    }
    
    .fae-review h3 {
      color: var(--primary-blue);
      margin-bottom: var(--space-4);
    }
    
    .fae-review .author {
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: var(--space-2);
    }
    
    .fae-review .title {
      color: var(--text-medium);
      font-size: 0.9rem;
      margin-bottom: var(--space-4);
    }
    
    .faq-section {
      margin-top: var(--space-8);
    }
    
    .faq-item {
      border-bottom: 1px solid var(--border-light);
      padding: var(--space-4) 0;
    }
    
    .faq-item h4 {
      color: var(--text-dark);
      margin-bottom: var(--space-2);
    }
    
    .faq-item p {
      color: var(--text-medium);
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .product-hero {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  ${navbarHtml}
  
  <main class="product-detail">
    <div class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
            <meta itemprop="position" content="1">
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/brands/" itemprop="item"><span itemprop="name">Brands</span></a>
            <meta itemprop="position" content="2">
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/${brand.name}/" itemprop="item"><span itemprop="name">${brand.displayName}</span></a>
            <meta itemprop="position" content="3">
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/${brand.name}/products/" itemprop="item"><span itemprop="name">Products</span></a>
            <meta itemprop="position" content="4">
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name">${product.partNumber}</span>
            <meta itemprop="position" content="5">
          </li>
        </ol>
      </nav>
      
      <!-- Brand Tab Navigation -->
      <div class="brand-tab-nav">
        <a href="/${brand.name}/" class="tab-item">About Brand</a>
        <a href="/${brand.name}/products/" class="tab-item active">Products</a>
        <a href="/${brand.name}/solutions/" class="tab-item">Solutions</a>
        <a href="/${brand.name}/support/" class="tab-item">Support</a>
      </div>
      
      <!-- Product Hero -->
      <div class="product-hero">
        <div class="product-image">
          <div style="text-align: center; color: var(--text-light);">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <p style="margin-top: 16px;">${product.partNumber}</p>
          </div>
        </div>
        
        <div class="product-info">
          <h1>${product.partNumber}</h1>
          <p class="product-short-desc">${product.shortDescription}</p>
          
          <div class="product-cta-group" style="display: flex; gap: 16px; margin-bottom: 24px;">
            <a href="/contact/?product=${product.partNumber}" class="btn-primary" style="background: var(--cta-orange); color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 500;">Request Quote</a>
            <a href="/contact/?inquiry=samples&product=${product.partNumber}" class="btn-secondary" style="background: transparent; color: var(--primary-blue); border: 2px solid var(--primary-blue); padding: 10px 30px; border-radius: 8px; text-decoration: none; font-weight: 500;">Request Samples</a>
          </div>
          
          <div class="stock-badge in-stock" style="display: inline-flex; align-items: center; padding: 6px 16px; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; background: #d4edda; color: #155724;">
            <span style="margin-right: 6px;">●</span> In Stock
          </div>
        </div>
      </div>
      
      <!-- Product Description -->
      <div class="product-description">
        ${product.descriptionParagraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
      
      <!-- Specifications -->
      <section class="specs-section" style="margin-bottom: 48px;">
        <h2 style="color: var(--primary-blue); margin-bottom: 24px;">Specifications</h2>
        <table class="specs-table">
          <tbody>
            ${Object.entries(product.specifications || {}).map(([key, value]) => `
              <tr>
                <th>${key}</th>
                <td>${value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
      
      <!-- Features -->
      <section class="features-section" style="margin-bottom: 48px;">
        <h2 style="color: var(--primary-blue); margin-bottom: 24px;">Features</h2>
        <ul class="features-list">
          ${(product.features || []).map(f => `<li>${f}</li>`).join('')}
        </ul>
      </section>
      
      <!-- Applications -->
      <section class="applications-section" style="margin-bottom: 48px;">
        <h2 style="color: var(--primary-blue); margin-bottom: 24px;">Applications</h2>
        <ul class="applications-list">
          ${(product.applications || []).map(a => `<li>${a}</li>`).join('')}
        </ul>
      </section>
      
      <!-- FAE Review -->
      <section class="fae-review">
        <h3>FAE Review</h3>
        <div class="author">${product.faeReview?.author || 'FAE'}</div>
        <div class="title">${product.faeReview?.title || ''}</div>
        <p>${product.faeReview?.content || ''}</p>
      </section>
      
      <!-- FAQs -->
      <section class="faq-section">
        <h2 style="color: var(--primary-blue); margin-bottom: 24px;">Frequently Asked Questions</h2>
        ${(product.faqs || []).map(faq => `
          <div class="faq-item">
            <h4>${faq.question}</h4>
            <p>${faq.answer}</p>
          </div>
        `).join('')}
      </section>
    </div>
  </main>
  
  ${footerHtml}
  ${floatingContactHtml}
  
  <script src="${cssPath}/../js/main.js"></script>
</body>
</html>`;
}

// Main execution
console.log('🚀 Starting Espressif brand page generation...\n');

ensureDir(brandOutputDir);
ensureDir(path.join(brandOutputDir, 'products'));
ensureDir(path.join(brandOutputDir, 'solutions'));
ensureDir(path.join(brandOutputDir, 'support'));

generateProductPages();

console.log('\n✅ Espressif brand pages generated successfully!');
