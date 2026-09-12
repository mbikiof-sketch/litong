/**
 * Cosmo 品牌数据链接修复脚本
 * 修复 selectionGuideLink 路径问题
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cosmo');

// 读取 JSON 文件
function readJSON(filename) {
  const filePath = path.join(dataDir, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

// 写入 JSON 文件
function writeJSON(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ 已更新 ${filename}`);
}

// 修复 products.json 中的链接
function fixProductsLinks() {
  console.log('\n=== 修复 products.json 链接 ===');
  const products = readJSON('products.json');

  products.categories.forEach(cat => {
    // 修复 selectionGuideLink - 确保路径正确
    if (cat.selectionGuideLink) {
      // 将 /guanxi/ 路径改为 /cosmo/ 路径
      if (typeof cat.selectionGuideLink === 'string') {
        cat.selectionGuideLink = cat.selectionGuideLink.replace('/guanxi/', '/cosmo/');
      }
    }
    
    // 同时修复 selectionGuide 内部的链接
    if (cat.selectionGuide && cat.selectionGuide.articleLink) {
      cat.selectionGuide.articleLink = cat.selectionGuide.articleLink.replace('/guanxi/', '/cosmo/');
    }

    // 修复产品内部的链接
    cat.products.forEach(prod => {
      if (prod.alternativeParts) {
        prod.alternativeParts.forEach(alt => {
          if (alt.link) {
            alt.link = alt.link.replace('/guanxi/', '/cosmo/');
          }
        });
      }
      if (prod.companionParts) {
        prod.companionParts.forEach(cp => {
          if (cp.link) {
            cp.link = cp.link.replace('/guanxi/', '/cosmo/');
          }
        });
      }
    });
  });

  writeJSON('products.json', products);
  console.log('  已修复所有链接路径');
}

// 修复 solutions.json 中的链接
function fixSolutionsLinks() {
  console.log('\n=== 修复 solutions.json 链接 ===');
  const solutions = readJSON('solutions.json');

  solutions.solutions.forEach(sol => {
    // 修复 BOM list 中的链接
    if (sol.bomList) {
      sol.bomList.forEach(item => {
        if (item.link) {
          item.link = item.link.replace('/guanxi/', '/cosmo/');
        }
      });
    }
  });

  writeJSON('solutions.json', solutions);
  console.log('  已修复解决方案链接');
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Cosmo 品牌数据链接修复');
  console.log('========================================');

  try {
    fixProductsLinks();
    fixSolutionsLinks();

    console.log('\n========================================');
    console.log('✓ 链接修复完成！');
    console.log('========================================');
    console.log('\n请运行以下命令验证修复结果:');
    console.log('  node scripts/brand-master-checklist.js cosmo');
  } catch (error) {
    console.error('\n✗ 修复过程中出错:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
