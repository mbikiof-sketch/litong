const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'samyoung');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 修复Samyoung产品shortDescription长度...\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

let fixCount = 0;

// 修复shortDescription长度超过120字符的产品
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.shortDescription && product.shortDescription.length > 120) {
      const oldLength = product.shortDescription.length;
      // 截取到120字符以内，并在末尾添加省略号
      let newDesc = product.shortDescription.substring(0, 117).trim();
      // 确保不以逗号或空格结尾
      newDesc = newDesc.replace(/[\s,]+$/, '');
      newDesc += '...';
      
      product.shortDescription = newDesc;
      console.log(`  ✓ ${product.partNumber}: ${oldLength} → ${newDesc.length} 字符`);
      fixCount++;
    }
  });
});

// 保存修复后的文件
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ 修复完成! 共修复 ${fixCount} 个产品`);
