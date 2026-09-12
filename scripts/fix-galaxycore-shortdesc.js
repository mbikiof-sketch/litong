/**
 * 修复galaxycore shortDescription过长问题
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'galaxycore', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复galaxycore shortDescription过长问题...\n');

// 修复shortDescription过长 - 缩短到80-120字符
const shortDescFixes = {
  'GC9503': 'High-performance Display Driver IC GC9503 with excellent image quality for mobile and automotive displays.',
  'GC9A01': 'High-performance Display Driver IC GC9A01 with excellent image quality for mobile and automotive displays.',
  'GC2093': 'Automotive-grade Image Sensor GC2093 with AEC-Q100 qualification for ADAS and surround view systems.',
  'GC0329': 'Security & IoT Image Sensor GC0329 with low power consumption for surveillance and IoT applications.'
};

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (shortDescFixes[product.partNumber]) {
      product.shortDescription = shortDescFixes[product.partNumber];
      console.log(`✅ ${product.partNumber}: shortDescription已修复 (${product.shortDescription.length}字符)`);
      fixedCount++;
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n📊 修复统计: ${fixedCount} 个产品已修复`);
console.log('\n✅ shortDescription修复完成！');
