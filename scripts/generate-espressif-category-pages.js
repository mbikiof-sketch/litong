#!/usr/bin/env node
/**
 * Generate Espressif product category list pages with correct product data
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const config = {
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data'),
  templatesDir: path.join(__dirname, '..', 'templates')
};

const brand = 'espressif';

console.log(`🔧 Generating ${brand} product category pages...\n`);

// Load brand data
const brandData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'brand.json'), 'utf8'));
const productsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'products.json'), 'utf8'));

const brandOutputDir = path.join(config.outputDir, brand);

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Load component templates
function loadComponent(componentName) {
  const componentPath = path.join(config.templatesDir, 'components', `${componentName}.html`);
  if (fs.existsSync(componentPath)) {
    return fs.readFileSync(componentPath, 'utf8');
  }
  return '';
}

// Generate category list pages
function generateCategoryPages() {
  console.log('📦 Generating product category list pages...\n');
  
  productsData.categories.forEach(category => {
    const html = generateCategoryHtml(category, brandData, productsData.categories);
    
    const fileName = `${category.slug}.html`;
    fs.writeFileSync(path.join(brandOutputDir, 'products', fileName), html);
    console.log(`✅ Generated: products/${fileName} (${category.products.length} products)`);
  });
}

// Generate category list HTML
function generateCategoryHtml(category, brand, allCategories) {
  const cssPath = '../../assets/css';
  const navbar = loadComponent('navbar');
  const footer = loadComponent('footer');
  const floatingContact = loadComponent('floating-contact');
  
  // Generate table headers from category.parameters
  const tableHeaders = category.parameters.map(param => `<th>${param} <span class="sort-icon">↕</span></th>`).join('');
  
  // Generate table rows from products
  const tableRows = category.products.map(product => {
    const paramCells = category.parameters.map(param => {
      const value = product.specifications && product.specifications[param] ? product.specifications[param] : '-';
      return `<td>${value}</td>`;
    }).join('');
    
    const fileName = `${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.html`;
    
    return `
      <tr data-series="${product.series || ''}">
        <td>
          <a href="/${brand.name}/products/${category.slug}/${fileName}" class="part-number">
            ${product.partNumber}
          </a>
        </td>
        ${paramCells}
        <td>${product.specifications && product.specifications['Package'] ? product.specifications['Package'] : '-'}</td>
        <td><span class="stock-status in-stock">In Stock</span></td>
        <td>
          <a href="/${brand.name}/products/${category.slug}/${fileName}" class="action-btn">View Details</a>
        </td>
      </tr>
    `;
  }).join('');
  
  // Generate category nav
  const categoryNav = allCategories.map(cat => `
    <li><a href="/${brand.name}/products/${cat.slug}.html" ${cat.id === category.id ? 'class="active"' : ''}>${cat.name}</a></li>
  `).join('');
  
  // Generate series filter options
  const seriesOptions = category.series.map(s => `<option value="${s}">${s}</option>`).join('');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brand.displayName} ${category.name} | Product List | Distributor | BeiLuo</title>
  <meta name="description" content="${brand.displayName} ${category.name} distributor. Complete product list with specifications, packages, and parameters. Technical support and fast delivery available.">
  <meta name="keywords" content="${brand.displayName} ${category.name}, ${brand.name} ${category.name} distributor, ${category.name} selection, ${category.name} price, ${brand.name} supplier">
  <meta name="robots" content="index, follow">
  <meta name="author" content="BeiLuo">
  <link rel="canonical" href="https://ic-distributor.com/${brand.name}/products/${category.slug}.html">
  
  <link rel="stylesheet" href="${cssPath}/style.css">
  <link rel="stylesheet" href="${cssPath}/navbar.css">
  <link rel="stylesheet" href="${cssPath}/footer.css">
  <link rel="stylesheet" href="${cssPath}/breadcrumb.css">
  <link rel="stylesheet" href="${cssPath}/brand-tab-nav.css">
  <link rel="stylesheet" href="${cssPath}/floating-contact.css">
  <link rel="stylesheet" href="${cssPath}/icons.css">
  
  <style>
    .category-page { padding: var(--space-16) 0; }
    .category-hero {
      background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
      color: white;
      padding: var(--space-12) 0;
      margin-bottom: var(--space-8);
    }
    .category-hero h1 { font-size: 2.5rem; margin-bottom: var(--space-4); }
    .category-layout {
      display: grid;
      grid-template-columns: 280px minmax(0, 1fr);
      gap: var(--space-8);
      max-width: 100%;
    }
    .main-content { min-width: 0; overflow: hidden; }
    .sidebar { position: sticky; top: 100px; height: fit-content; }
    .category-nav {
      background: var(--bg-light);
      padding: var(--space-5);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }
    .category-nav h3 {
      font-size: 1.125rem;
      margin-bottom: var(--space-4);
      color: var(--text-dark);
      padding-bottom: var(--space-3);
      border-bottom: 2px solid var(--primary-blue);
    }
    .category-nav ul { list-style: none; padding: 0; margin: 0; }
    .category-nav li { margin-bottom: var(--space-2); }
    .category-nav a {
      color: var(--text-medium);
      text-decoration: none;
      font-size: 0.9375rem;
      display: block;
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      transition: all 0.3s ease;
    }
    .category-nav a:hover { background: white; color: var(--primary-blue); box-shadow: var(--shadow-sm); }
    .category-nav a.active { background: var(--primary-blue); color: white; }
    
    .category-description {
      background: var(--bg-light);
      padding: var(--space-8);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-8);
    }
    .category-description h2 { color: var(--primary-blue); margin-bottom: var(--space-4); }
    
    .products-table-section { margin-bottom: var(--space-8); }
    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-4);
      flex-wrap: wrap;
      gap: var(--space-4);
    }
    .table-filters { display: flex; gap: var(--space-3); flex-wrap: wrap; }
    .filter-btn {
      background: white;
      border: 1px solid var(--border-light);
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-md);
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.3s ease;
    }
    .filter-btn:hover, .filter-btn.active { background: var(--primary-blue); color: white; border-color: var(--primary-blue); }
    
    .products-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
      table-layout: auto;
    }
    .products-table th {
      background: var(--primary-blue);
      color: white;
      font-weight: 600;
      padding: 12px 14px;
      text-align: left;
      cursor: pointer;
      transition: background 0.3s ease;
      white-space: nowrap;
    }
    .products-table th:hover { background: var(--primary-blue-dark); }
    .products-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--border-light);
      vertical-align: middle;
    }
    .products-table tr:nth-child(even) { background: #fafafa; }
    .products-table tr:hover { background: #f0f7ff; }
    .table-wrapper { overflow-x: auto; border-radius: var(--radius-md); max-width: 100%; }
    
    .part-number {
      color: var(--primary-blue);
      font-weight: 600;
      text-decoration: none;
      font-family: 'SF Mono', monospace;
      font-size: 0.8125rem;
    }
    .part-number:hover { text-decoration: underline; }
    .stock-status {
      display: inline-block;
      padding: 4px 10px;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 600;
    }
    .stock-status.in-stock { background: #d4edda; color: #155724; }
    .action-btn {
      color: var(--primary-blue);
      text-decoration: none;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: var(--radius-sm);
      transition: all 0.3s ease;
      font-size: 0.8125rem;
      white-space: nowrap;
    }
    .action-btn:hover { background: var(--primary-blue); color: white; }
    
    .series-filter { margin-bottom: var(--space-4); }
    .series-filter select {
      padding: var(--space-2) var(--space-4);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-md);
      font-size: 0.875rem;
      background: white;
      cursor: pointer;
    }
    .product-count { color: var(--text-medium); font-size: 0.875rem; margin-bottom: var(--space-4); }
    
    @media (max-width: 1023px) {
      .category-layout { grid-template-columns: 1fr; }
      .sidebar { position: static; order: -1; }
    }
  </style>
</head>
<body>
  ${navbar}
  
  <main class="category-page">
    <!-- Hero Section -->
    <section class="category-hero">
      <div class="container">
        <div class="breadcrumb-hero">
          <a href="/">Home</a> / <a href="/${brand.name}/">${brand.displayName}</a> / <span>Products</span>
        </div>
        <h1>${category.name}</h1>
        <p style="opacity: 0.9; max-width: 800px;">${category.description}</p>
      </div>
    </section>
    
    <div class="container">
      <div class="category-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="category-nav">
            <h3>Product Categories</h3>
            <ul>
              ${categoryNav}
            </ul>
          </nav>
        </aside>
        
        <!-- Main Content -->
        <div class="main-content">
          <!-- Category Description -->
          <div class="category-description">
            <h2>About ${category.name}</h2>
            <p>${category.longDescription}</p>
            <a href="${category.selectionGuideLink ? category.selectionGuideLink.url : '#'}" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; background: var(--cta-orange); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500; margin-top: 16px;">
              View Selection Guide →
            </a>
          </div>
          
          <!-- Products Table -->
          <div class="products-table-section">
            <div class="table-header">
              <div>
                <h2 style="margin-bottom: 8px;">Product List</h2>
                <p class="product-count">Showing ${category.products.length} products</p>
              </div>
              <div class="series-filter">
                <select id="seriesFilter">
                  <option value="">All Series</option>
                  ${seriesOptions}
                </select>
              </div>
            </div>
            
            <div class="table-wrapper">
              <table class="products-table" id="productsTable">
                <thead>
                  <tr>
                    <th>Part Number <span class="sort-icon">↕</span></th>
                    ${tableHeaders}
                    <th>Package</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRows}
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- CTA Section -->
          <div class="cta-section" style="background: linear-gradient(135deg, var(--cta-orange), #ff8533); color: white; padding: 48px; border-radius: 16px; text-align: center; margin-top: 48px;">
            <h2 style="margin-bottom: 16px;">Need Help Selecting?</h2>
            <p style="margin-bottom: 24px; opacity: 0.9;">Our FAE team can help you choose the right ${category.name} for your application</p>
            <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
              <a href="/contact/" style="background: white; color: var(--cta-orange); padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600;">Contact FAE</a>
              <a href="/contact/?quote=true" style="background: transparent; color: white; border: 2px solid white; padding: 10px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">Request Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  ${footer}
  ${floatingContact}
  
  <script src="${cssPath}/../js/main.js"></script>
</body>
</html>`;
}

// Main execution
console.log('🚀 Starting Espressif category page generation...\n');

ensureDir(path.join(brandOutputDir, 'products'));

generateCategoryPages();

console.log('\n✅ Espressif category pages generated successfully!');
