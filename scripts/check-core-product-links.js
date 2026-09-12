const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'output');

// 获取所有品牌目录
function getBrandDirs() {
  const items = fs.readdirSync(OUTPUT_DIR, { withFileTypes: true });
  return items
    .filter(item => item.isDirectory() && !item.name.startsWith('_') && !['assets', 'brands', 'news', 'about'].includes(item.name))
    .map(item => item.name);
}

// 检查品牌的 Core Product Areas 链接
function checkBrandCoreProducts(brandName) {
  const indexPath = path.join(OUTPUT_DIR, brandName, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    return { brand: brandName, error: 'No index.html' };
  }
  
  const content = fs.readFileSync(indexPath, 'utf8');
  
  // 检查是否有 Core Product Areas 部分
  if (!content.includes('Core Product Areas') && !content.includes('core-products')) {
    return { brand: brandName, hasCoreProducts: false };
  }
  
  // 提取所有 product-category 链接
  const linkRegex = /<a[^>]*href="([^"]+)"[^>]*class="product-category"[^>]*>/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  // 检查每个链接对应的文件是否存在
  const brokenLinks = [];
  for (const link of links) {
    // 移除开头的 /
    const relativePath = link.startsWith('/') ? link.slice(1) : link;
    const filePath = path.join(OUTPUT_DIR, relativePath);
    
    if (!fs.existsSync(filePath)) {
      brokenLinks.push({
        link: link,
        expectedPath: relativePath
      });
    }
  }
  
  return {
    brand: brandName,
    hasCoreProducts: true,
    totalLinks: links.length,
    brokenLinks: brokenLinks,
    allLinks: links
  };
}

// 主函数
function main() {
  const brands = getBrandDirs();
  console.log(`Found ${brands.length} brand directories\n`);
  
  const results = [];
  const brandsWithBrokenLinks = [];
  
  for (const brand of brands) {
    const result = checkBrandCoreProducts(brand);
    results.push(result);
    
    if (result.brokenLinks && result.brokenLinks.length > 0) {
      brandsWithBrokenLinks.push(result);
    }
  }
  
  // 输出结果
  console.log('=== Brands with Broken Core Product Links ===\n');
  
  if (brandsWithBrokenLinks.length === 0) {
    console.log('✅ All brands have valid Core Product Areas links!');
  } else {
    for (const result of brandsWithBrokenLinks) {
      console.log(`\n❌ ${result.brand}:`);
      console.log(`   Total links: ${result.totalLinks}`);
      console.log(`   Broken links: ${result.brokenLinks.length}`);
      for (const broken of result.brokenLinks) {
        console.log(`     - ${broken.link}`);
        console.log(`       (Expected: ${broken.expectedPath})`);
      }
    }
  }
  
  // 输出没有 Core Product Areas 的品牌
  const brandsWithoutCoreProducts = results.filter(r => r.hasCoreProducts === false);
  if (brandsWithoutCoreProducts.length > 0) {
    console.log(`\n\n=== Brands without Core Product Areas (${brandsWithoutCoreProducts.length}) ===`);
    console.log(brandsWithoutCoreProducts.map(r => r.brand).join(', '));
  }
  
  // 输出统计
  console.log(`\n\n=== Summary ===`);
  console.log(`Total brands checked: ${brands.length}`);
  console.log(`Brands with Core Product Areas: ${results.filter(r => r.hasCoreProducts).length}`);
  console.log(`Brands with broken links: ${brandsWithBrokenLinks.length}`);
}

main();
