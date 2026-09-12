/**
 * 修复chipsea品牌产品shortDescription长度超限问题 - CS1240
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'chipsea', 'products.json');

// 读取产品数据
let productsData;
try {
  const fileContent = fs.readFileSync(productsFilePath, 'utf8');
  productsData = JSON.parse(fileContent);
  console.log('成功读取chipsea产品数据文件\n');
} catch (error) {
  console.error('读取产品数据文件失败:', error.message);
  process.exit(1);
}

// 修复CS1240的shortDescription
const newShortDesc = 'CS1240 industrial 24-bit ADC with noise immunity, wide temperature range, and SPI interface.';

console.log('开始修复CS1240的shortDescription...\n');

productsData.categories.forEach(category => {
  if (category.products && Array.isArray(category.products)) {
    category.products.forEach(product => {
      if (product.partNumber === 'CS1240') {
        const oldLength = product.shortDescription ? product.shortDescription.length : 0;
        const newLength = newShortDesc.length;
        
        console.log(`修复 ${product.partNumber}:`);
        console.log(`  原长度: ${oldLength}字符`);
        console.log(`  新长度: ${newLength}字符`);
        
        product.shortDescription = newShortDesc;
        
        console.log(`  ✅ 已修复\n`);
      }
    });
  }
});

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('✅ 数据已保存');
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}
