const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'starpower');

// 读取JSON文件
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 修复series字段以匹配过滤器选项
console.log('🔧 修复series字段以匹配过滤器选项...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    // 根据分类和电压等级设置正确的series值
    if (category.id === 'igbt-modules') {
      if (product.voltage?.includes('1200') || product.specifications?.['Collector-Emitter Voltage']?.includes('1200')) {
        product.series = '1200V IGBT Modules';
        fixedCount++;
      } else if (product.voltage?.includes('600') || product.voltage?.includes('650') || 
                 product.specifications?.['Collector-Emitter Voltage']?.includes('600') ||
                 product.specifications?.['Collector-Emitter Voltage']?.includes('650')) {
        product.series = '600V-650V IGBT Modules';
        fixedCount++;
      }
    } else if (category.id === 'sic-modules') {
      if (product.voltage?.includes('1200') || product.specifications?.['Drain-Source Voltage']?.includes('1200')) {
        product.series = '1200V SiC';
        fixedCount++;
      } else if (product.voltage?.includes('650') || product.specifications?.['Drain-Source Voltage']?.includes('650')) {
        product.series = '650V SiC';
        fixedCount++;
      }
    } else if (category.id === 'mosfet-modules') {
      if (product.voltage?.includes('60') || product.specifications?.['Drain-Source Voltage']?.includes('60')) {
        product.series = '60V';
        fixedCount++;
      } else if (product.voltage?.includes('80') || product.specifications?.['Drain-Source Voltage']?.includes('80')) {
        product.series = '80V';
        fixedCount++;
      } else if (product.voltage?.includes('100') || product.specifications?.['Drain-Source Voltage']?.includes('100')) {
        product.series = '100V';
        fixedCount++;
      } else if (product.voltage?.includes('120') || product.specifications?.['Drain-Source Voltage']?.includes('120')) {
        product.series = '120V';
        fixedCount++;
      }
    } else if (category.id === 'rectifier-modules') {
      if (product.specifications?.['Reverse Voltage']?.includes('1200')) {
        product.series = '1200V Diode';
        fixedCount++;
      } else if (product.specifications?.['Reverse Voltage']?.includes('1600') || product.specifications?.['Reverse Voltage']?.includes('2000')) {
        product.series = '1600V-2000V Diode/Thyristor';
        fixedCount++;
      }
    }
    
    console.log(`  ✅ ${product.partNumber}: series -> ${product.series}`);
  });
});

// 保存products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log(`\n✅ 已修复 ${fixedCount} 个产品的series字段`);
console.log('========================================');
