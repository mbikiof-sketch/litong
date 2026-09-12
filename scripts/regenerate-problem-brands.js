const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const OUTPUT_DIR = path.join(__dirname, '..', 'output');

// 获取所有品牌目录
function getBrandDirs() {
  const items = fs.readdirSync(DATA_DIR, { withFileTypes: true });
  return items
    .filter(item => item.isDirectory() && !item.name.startsWith('_') && !['scripts', 'templates', 'docs'].includes(item.name))
    .map(item => item.name);
}

// 获取品牌实际存在的产品分类页面
function getExistingProductCategories(brandName) {
  const productsDir = path.join(OUTPUT_DIR, brandName, 'products');
  if (!fs.existsSync(productsDir)) {
    return [];
  }
  
  const items = fs.readdirSync(productsDir, { withFileTypes: true });
  const categories = [];
  
  for (const item of items) {
    if (item.isDirectory()) {
      const indexPath = path.join(productsDir, item.name, 'index.html');
      if (fs.existsSync(indexPath)) {
        categories.push(item.name);
      }
    } else if (item.name.endsWith('.html') && item.name !== 'index.html') {
      categories.push(item.name.replace('.html', ''));
    }
  }
  
  return categories;
}

// 读取 brand.json
function readBrandJson(brandName) {
  const filePath = path.join(DATA_DIR, brandName, 'brand.json');
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// 检查品牌是否需要重新生成
function needsRegeneration(brandName) {
  const brandData = readBrandJson(brandName);
  if (!brandData || !brandData.coreProducts) {
    return false;
  }
  
  const existingCategories = getExistingProductCategories(brandName);
  if (existingCategories.length === 0) {
    return false;
  }
  
  // 检查 coreProducts 是否匹配实际存在的分类
  const coreProducts = brandData.coreProducts.map(p => {
    if (typeof p === 'string') return p.toLowerCase().replace(/\s+/g, '-');
    if (typeof p === 'object' && p.name) return p.name.toLowerCase().replace(/\s+/g, '-');
    return String(p).toLowerCase().replace(/\s+/g, '-');
  });
  
  // 检查是否有任何 coreProduct 对应的页面不存在
  for (const product of coreProducts) {
    const productPage = path.join(OUTPUT_DIR, brandName, 'products', `${product}.html`);
    const productIndex = path.join(OUTPUT_DIR, brandName, 'products', product, 'index.html');
    
    if (!fs.existsSync(productPage) && !fs.existsSync(productIndex)) {
      return true;
    }
  }
  
  return false;
}

// 重新生成单个品牌
function regenerateBrand(brandName) {
  try {
    console.log(`[${brandName}] Regenerating...`);
    execSync(`npm run generate:brand ${brandName}`, {
      cwd: path.join(__dirname, '..'),
      stdio: 'pipe',
      timeout: 60000
    });
    console.log(`[${brandName}] ✅ Done`);
    return { success: true };
  } catch (error) {
    console.log(`[${brandName}] ❌ Failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// 主函数
function main() {
  console.log('=== Regenerating Problem Brands ===\n');
  
  const brands = getBrandDirs();
  console.log(`Found ${brands.length} brand data directories\n`);
  
  // 找出需要重新生成的品牌
  const problemBrands = brands.filter(needsRegeneration);
  console.log(`Found ${problemBrands.length} brands with broken links:\n`);
  console.log(problemBrands.join(', '));
  console.log('\n');
  
  const results = {
    success: [],
    failed: []
  };
  
  // 逐个重新生成品牌
  for (let i = 0; i < problemBrands.length; i++) {
    const brand = problemBrands[i];
    console.log(`\n[${i + 1}/${problemBrands.length}] Processing ${brand}...`);
    
    const result = regenerateBrand(brand);
    if (result