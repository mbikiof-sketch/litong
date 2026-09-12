const fs = require('fs');
const path = require('path');

// 读取vanchip产品数据
const productsPath = path.join(__dirname, 'data', 'vanchip', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要修复的shortDescription (必须在80-120字符之间)
const shortDescFixes = {
  'VC7643-61': 'Multi-mode multi-band PA module for 3G/4G LTE with integrated switch, supporting bands 1/2/3/4/5/7/8/12/13.',
  'VC7916-62': 'High-performance multi-band PA module for 4G LTE with integrated switch and filter, supporting global bands.',
  'VC1616': 'High-isolation SPDT RF switch for antenna switching with excellent insertion loss and fast switching time.',
  'VC1623': 'SP3T multi-throw RF switch for complex antenna routing with high linearity and low insertion loss.',
  'VC7643-26': 'Compact multi-band PA module for 4G LTE with integrated SOI switch, supporting major global bands.',
  'VC7643-13': 'Cost-effective multi-band PA module for 4G LTE with integrated switch for emerging market devices.'
};

let updatedCount = 0;

// 查找并更新产品
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (shortDescFixes[product.partNumber]) {
      const oldDesc = product.shortDescription;
      const newDesc = shortDescFixes[product.partNumber];
      product.shortDescription = newDesc;
      console.log(`✅ Updated ${product.partNumber}:`);
      console.log(`   Old: ${oldDesc.length} chars`);
      console.log(`   New: ${newDesc.length} chars - "${newDesc}"`);
      updatedCount++;
    }
  });
});

if (updatedCount > 0) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
  console.log(`\n✅ Updated ${updatedCount} products successfully!`);
} else {
  console.log('⚠️ No products found to update');
}
