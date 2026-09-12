/**
 * 修复gainsil products.json中的selectionGuideLink字段格式
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gainsil', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复gainsil selectionGuideLink字段...\n');

// 修复每个分类的selectionGuideLink
productsData.categories.forEach(category => {
  console.log(`处理分类: ${category.name}`);
  
  if (category.selectionGuide) {
    // 添加selectionGuideLink字段（符合检查清单要求的格式）
    category.selectionGuideLink = {
      url: category.selectionGuide.link || category.selectionGuide.articleLink || `/gainsil/support/${category.id}-selection-guide.html`,
      text: category.selectionGuide.title || 'Selection Guide'
    };
    console.log(`  ✅ 添加selectionGuideLink: ${category.selectionGuideLink.url}`);
  }
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ selectionGuideLink字段修复完成！');
