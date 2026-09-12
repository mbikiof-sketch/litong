/**
 * 修复chipanalog品牌alternativeParts缺少useCase字段的问题
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chipanalog');
const productsPath = path.join(dataDir, 'products.json');

console.log('🔧 修复chipanalog品牌alternativeParts缺少useCase字段...\n');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要修复的产品列表
const productsToFix = [
  'CA-IS3720', 'CA-IS3980', 'CA-IS3215', 'CA-IS3225',
  'CA-IS1305', 'CA-IS1310', 'CA-IS3420', 'CA-IS3440'
];

let fixedCount = 0;

productsData.categories.forEach((category) => {
  category.products.forEach((product) => {
    if (productsToFix.includes(product.partNumber)) {
      console.log(`🔧 修复产品: ${product.partNumber}`);
      
      if (product.alternativeParts && Array.isArray(product.alternativeParts)) {
        product.alternativeParts.forEach((alt) => {
          if (!alt.useCase) {
            alt.useCase = '适用于工业自动化、通信设备、医疗设备等需要高隔离性能的应用场景';
            console.log(`  ✓ 添加useCase到替代料号: ${alt.partNumber}`);
          }
        });
      }
      
      fixedCount++;
    }
  });
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`\n✅ alternativeParts修复完成！共修复 ${fixedCount} 个产品。`);
console.log(`💾 已保存到: ${productsPath}`);
