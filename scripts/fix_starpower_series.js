const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'starpower');

// 读取JSON文件
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 为缺少series的产品添加series字段
console.log('🔧 添加缺失的series字段...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (!product.series) {
      // 根据产品型号或电压等级推断series
      if (product.partNumber.includes('1200') || product.specifications?.['Collector-Emitter Voltage']?.includes('1200')) {
        product.series = '1200V';
      } else if (product.partNumber.includes('650') || product.specifications?.['Collector-Emitter Voltage']?.includes('650')) {
        product.series = '650V';
      } else if (product.partNumber.includes('600') || product.specifications?.['Drain-Source Voltage']?.includes('600')) {
        product.series = '600V';
      } else if (product.specifications?.['Voltage Rating']) {
        product.series = product.specifications['Voltage Rating'];
      } else {
        product.series = 'Standard';
      }
      
      // 添加voltage和current字段（如果缺失）
      if (!product.voltage && product.specifications) {
        product.voltage = product.specifications['Collector-Emitter Voltage'] || 
                          product.specifications['Drain-Source Voltage'] ||
                          product.specifications['Voltage Rating'] ||
                          product.specifications['Reverse Voltage'] ||
                          'N/A';
      }
      
      if (!product.current && product.specifications) {
        product.current = product.specifications['Collector Current'] || 
                          product.specifications['Drain Current'] ||
                          product.specifications['Forward Current'] ||
                          'N/A';
      }
      
      console.log(`  ✅ ${product.partNumber}: 添加 series -> ${product.series}, voltage -> ${product.voltage}, current -> ${product.current}`);
      fixedCount++;
    }
  });
});

// 保存products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log(`\n✅ 已修复 ${fixedCount} 个产品的series字段`);
console.log('========================================');
