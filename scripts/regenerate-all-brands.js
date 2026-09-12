const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
function getBrandDirs() {
  const items = fs.readdirSync(DATA_DIR, { withFileTypes: true });
  return items
    .filter(item => item.isDirectory() && !item.name.startsWith('_') && !['scripts', 'templates', 'docs'].includes(item.name))
    .map(item => item.name);
}

// 重新生成单个品牌
function regenerateBrand(brandName) {
  try {
    console.log(`\n[${brandName}] Regenerating...`);
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
  console.log('=== Batch Regenerating All Brand Websites ===\n');
  
  const brands = getBrandDirs();
  console.log(`Found ${brands.length} brands to regenerate\n`);
  
  const results = {
    success: [],
    failed: []
  };
  
  // 逐个重新生成品牌
  for (let i = 0; i < brands.length; i++) {
    const brand = brands[i];
    console.log(`\n[${i + 1}/${brands.length}] Processing ${brand}...`);
    
    const result = regenerateBrand(brand);
    if (result.success) {
      results.success.push(brand);
    } else {
      results.failed.push({ brand, error: result.error });
    }
  }
  
  console.log(`\n\n=== Summary ===`);
  console.log(`Total: ${brands.length}`);
  console.log(`Success: ${results.success.length}`);
  console.log(`Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log(`\nFailed brands:`);
    results.failed.forEach(f => console.log(`  - ${f.brand}: ${f.error}`));
  }
  
  // 保存结果
  const reportPath = path.join(__dirname, '..', 'regenerate-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nReport saved to: regenerate-report.json`);
}

main();
