/**
 * Cosmo 品牌数据 selectionGuideLink 修复脚本
 * 将字符串格式转换为对象格式
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

// 修复 selectionGuideLink 格式
function fixSelectionGuideLink() {
  console.log('\n=== 修复 selectionGuideLink 格式 ===');
  const products = readJSON('products.json');

  products.categories.forEach(cat => {
    const guideTitle = cat.selectionGuide?.title || `${cat.name} Selection Guide`;
    
    // 将字符串格式转换为对象格式
    if (typeof cat.selectionGuideLink === 'string') {
      cat.selectionGuideLink = {
        url: cat.selectionGuideLink,
        text: `View ${guideTitle}`
      };
    } else if (!cat.selectionGuideLink || !cat.selectionGuideLink.url) {
      // 如果不存在或格式不正确，创建新的
      cat.selectionGuideLink = {
        url: `/cosmo/support/${cat.slug}-guide.html`,
        text: `View ${guideTitle}`
      };
    }
  });

  writeJSON('products.json', products);
  console.log('  已修复所有 selectionGuideLink');
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Cosmo selectionGuideLink 格式修复');
  console.log('========================================');

  try {
    fixSelectionGuideLink();

    console.log('\n========================================');
    console.log('✓ 修复完成！');
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
