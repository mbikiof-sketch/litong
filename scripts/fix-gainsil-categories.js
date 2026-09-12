/**
 * 修复gainsil products.json中的分类字段
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gainsil', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复gainsil分类字段...\n');

// 修复每个分类的selectionGuideLink
productsData.categories.forEach(category => {
  console.log(`处理分类: ${category.name}`);
  
  if (category.selectionGuide) {
    // 确保link字段存在
    if (!category.selectionGuide.link) {
      category.selectionGuide.link = category.selectionGuide.articleLink || `/gainsil/support/${category.id}-selection-guide.html`;
      console.log(`  ✅ 添加selectionGuide.link: ${category.selectionGuide.link}`);
    }
  }
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json分类字段修复完成！');
