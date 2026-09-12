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
          slug: item.name
        });
      }
    } else if (item.name.endsWith('.html') && item.name !== 'index.html') {
      // 独立的分类页面
      const slug = item.name.replace('.html', '');
      categories.push({
        id: slug,
        slug: slug
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
    return { status: 'no-brand-json' };
  }
  
  const existingCategories = getExistingProductCategories(brandName);
  if (existingCategories.length === 0) {
    return { status: 'no-categories' };
  }
  
  // 获取现有的 coreProducts（处理对象数组或字符串数组）
  const oldCoreProducts = brandData.coreProducts || [];
  const oldNames = oldCoreProducts.map(p => {
    if (typeof p === 'string') return p;
    if (typeof p === 'object' && p.name) return p.name;
    return String(p);
  });
  
  // 生成新的 coreProducts（只取字符串名称）
  const newCoreProducts = existingCategories.slice(0, 5).map(cat => formatCategoryName(cat.slug));
  
  // 检查是否需要更新
  const needsUpdate = JSON.stringify(oldNames) !== JSON.stringify(newCoreProducts);
  
  if (needsUpdate) {
    brandData.coreProducts = newCoreProducts;
    writeBrandJson(brandName, brandData);
    return {
      status: 'fixed',
      old: oldNames,
      new: newCoreProducts
    };
  }
  
  return { status: 'ok' };
}

// 主函数
function main() {
  console.log('=== Fixing Core Products v2 ===\n');
  
  const brands = getBrandDirs();
  console.log(`Found ${brands.length} brand data directories\n`);
  
  const results = {
    fixed: [],
    ok: [],
    noBrandJson: [],
    noCategories: [],
    errors: []
  };
  
  for (const brand of brands) {
    try {
      const result = fixBrand(brand);
      
      switch (result.status) {
        case 'fixed':
          results.fixed.push({ brand, ...result });
          console.log(`📝 ${brand}`);
          console.log(`   Old: ${JSON.stringify(result.old)}`);
          console.log(`   New: ${JSON.stringify(result.new)}`);
          break;
        case 'ok':
          results.ok.push(brand);
          break;
        case 'no-brand-json':
          results.noBrandJson.push(brand);
          break;
        case 'no-categories':
          results.noCategories.push(brand);
          break;
      }
    } catch (error) {
      results.errors.push({ brand, error: error.message });
      console.log(`❌ Error fixing ${brand}: ${error.message}`);
    }
  }
  
  console.log(`\n=== Summary ===`);
  console.log(`Total brands: ${brands.length}`);
  console.log(`Fixed: ${results.fixed.length}`);
  console.log(`Already OK: ${results.ok.length}`);
  console.log(`No brand.json: ${results.noBrandJson.length}`);
  console.log(`No categories: ${results.noCategories.length}`);
  console.log(`Errors: ${results.errors.length}`);
  
  // 保存详细结果
  const reportPath = path.join(__dirname, '..', 'core-products-fix-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nDetailed report saved to: core-products-fix-report.json`);
}

main();
