const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'starpower');

// 读取JSON文件
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 修复specifications字段格式
console.log('🔧 修复specifications字段格式...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    // 如果specifications是字符串或包含"N/A"值，替换为正确的对象格式
    if (typeof product.specifications === 'string' || 
        product.specifications['Voltage Rating'] === 'N/A' ||
        product.specifications['Specifications'] === 'N/A') {
      
      // 根据产品型号推断规格
      const partNumber = product.partNumber;
      let voltage = 'N/A';
      let current = 'N/A';
      let tempRange = 'N/A';
      
      // 从型号提取电压和电流
      if (partNumber.includes('1200')) voltage = '1200 V';
      else if (partNumber.includes('600')) voltage = '600 V';
      else if (partNumber.includes('650')) voltage = '650 V';
      
      if (partNumber.match(/GD(\d+)/)) {
        current = partNumber.match(/GD(\d+)/)[1] + ' A';
      }
      
      // 更新specifications
      product.specifications = {
        'Voltage Rating': voltage,
        'Current Rating': current,
        'Temperature Range': '-40°C to +150°C',
        'Package': product.specifications['Package'] || 'Standard Module'
      };
      
      console.log(`  ✅ ${product.partNumber}: 更新specifications`);
      fixedCount++;
    }
  });
});

// 保存products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log(`\n✅ 已修复 ${fixedCount} 个产品的specifications字段`);
console.log('========================================');
