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
      // 检查是否有 index.html
      const indexPath = path.join(productsDir, item.name, 'index.html');
      if (fs.existsSync(indexPath)) {
        categories.push({
          id: item.name,
          slug: item.name,
          hasIndex: true
        });
      }
    } else if (item.name.endsWith('.html') && item.name !== 'index.html') {
      // 独立的分类页面
      const slug = item.name.replace('.html', '');
      categories.push({
        id: slug,
        slug: slug,
        hasIndex: false
      });
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

// 写入 brand.json
function writeBrandJson(brandName, data) {
  const filePath = path.join(DATA_DIR, brandName, 'brand.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Updated: ${brandName}/brand.json`);
}

// 转换分类名称为显示名称
function formatCategoryName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// 修复单个品牌
function fixBrand(brandName) {
  const brandData = readBrandJson(brandName);
  if (!brandData) {
    console.log(`  ❌ No brand.json for ${brandName}`);
    return false;
  }
  
  const existingCategories = getExistingProductCategories(brandName);
  if (existingCategories.length === 0) {
    console.log(`  ⚠️ No product categories found for ${brandName}`);
    return false;
  }
  
  // 更新 coreProducts
  const newCoreProducts = existingCategories.slice(0, 5).map(cat => formatCategoryName(cat.slug));
  
  if (JSON.stringify(brandData.coreProducts) !== JSON.stringify(newCoreProducts)) {
    console.log(`  📝 ${brandName}:`);
    console.log(`     Old: ${JSON.stringify(brandData.coreProducts)}`);
    console.log(`     New: ${JSON.stringify(newCoreProducts)}`);
    brandData.coreProducts = newCoreProducts;
    writeBrandJson(brandName, brandData);
    return true;
  }
  
  return false;
}

// 主函数
function main() {
  console.log('=== Fixing Core Products for All Brands ===\n');
  
  const brands = getBrandDirs();
  console.log(`Found ${brands.length} brand data directories\n`);
  
  let fixedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const brand of brands) {
    try {
      const fixed = fixBrand(brand);
      if (fixed) {
        fixedCount++;
      } else {
        skippedCount++;
      }
    } catch (error) {
      console.log(`  ❌ Error fixing ${brand}: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n=== Summary ===`);
  console.log(`Total brands: ${brands.length}`);
  console.log(`Fixed: ${fixedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
}

main();
