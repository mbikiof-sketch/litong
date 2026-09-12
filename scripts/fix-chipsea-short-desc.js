/**
 * 修复chipsea品牌产品shortDescription长度超限问题
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

// 需要修复的shortDescription
const fixes = {
  'CS1241': 'CS1241 ultra-low-power 24-bit ADC with 0.3mA consumption, power-down mode, and I2C interface.',
  'CS5091': 'CS5091 dual-channel buck converter with 2A+1A outputs, independent regulation for multi-rail systems.',
  'CS6002': 'CS6002 50MHz high-speed op-amp with 100V/us slew rate, low distortion for video processing.'
};

console.log('开始修复shortDescription长度问题...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  if (category.products && Array.isArray(category.products)) {
    category.products.forEach(product => {
      const partNumber = product.partNumber;
      
      if (fixes[partNumber]) {
        const oldLength = product.shortDescription ? product.shortDescription.length : 0;
        const newLength = fixes[partNumber].length;
        
        console.log(`修复 ${partNumber}:`);
        console.log(`  原长度: ${oldLength}字符`);
        console.log(`  新长度: ${newLength}字符`);
        
        product.shortDescription = fixes[partNumber];
        fixedCount++;
        
        console.log(`  ✅ 已修复\n`);
      }
    });
  }
});

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`✅ 已修复 ${fixedCount} 个产品，数据已保存`);
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}
