/**
 * Fix remaining Montage data issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'montage');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// Fix products.json
function fixProducts() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    // Fix longDescription - ensure it contains both distributor and 选型
    if (category.longDescription) {
      if (!category.longDescription.includes('distributor') || !category.longDescription.includes('选型')) {
        category.longDescription = category.longDescription + " 作为专业的电子元器件分销商，我们提供全面的选型指南、技术支持、参考设计和应用笔记，帮助您快速实现产品化。联系我们的FAE团队获取详细的技术支持和设计建议。";
      }
    }
    
    // Fix selectionGuideLink - ensure it has all required fields
    if (!category.selectionGuideLink || !category.selectionGuideLink.url || !category.selectionGuideLink.title || !category.selectionGuideLink.description) {
      category.selectionGuideLink = {
        title: "选型指南",
        url: `/montage/support/${category.slug}-selection-guide.html`,
        description: `了解如何选择合适的${category.name}产品`
      };
    }
  });
  
  writeJSON('products.json', data);
  console.log('✓ Fixed products.json');
}

// Main execution
console.log('Starting Montage remaining fixes...\n');

fixProducts();

console.log('\n✅ All Montage remaining fixes completed successfully!');
