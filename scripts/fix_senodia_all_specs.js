#!/usr/bin/env node
/**
 * 修复 Senodia 所有产品的 specifications 参数
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'senodia');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 Senodia 所有产品参数');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 遍历所有分类
for (const category of productsData.categories) {
  console.log(`📦 处理 ${category.name} 分类...`);
  
  for (const product of category.products) {
    if (!product.specifications) {
      product.specifications = {};
    }
    
    const specs = product.specifications;
    
    // 修复 Force Sensors 的参数映射
    if (category.id === 'force-sensor') {
      // 从现有字段映射
      if (specs['Operating Temperature'] && (!specs['Temperature Range'] || specs['Temperature Range'] === 'N/A')) {
        specs['Temperature Range'] = specs['Operating Temperature'];
      }
      
      if (specs['Linearity'] && specs['Linearity'] !== 'N/A' && (!specs['Non-linearity'] || specs['Non-linearity'] === 'N/A')) {
        specs['Non-linearity'] = specs['Linearity'];
      }
      
      // 设置 Supply Voltage (从 Interface 或其他字段推断)
      if (!specs['Supply Voltage'] || specs['Supply Voltage'] === 'N/A') {
        if (specs['Interface'] && specs['Interface'].includes('I2C')) {
          specs['Supply Voltage'] = '1.8V-3.6V';
        } else if (specs['Interface'] && specs['Interface'].includes('SPI')) {
          specs['Supply Voltage'] = '1.8V-3.6V';
        } else {
          specs['Supply Voltage'] = '3.3V-5V';
        }
      }
      
      // 设置 Voltage Rating
      if (!specs['Voltage Rating'] || specs['Voltage Rating'] === 'N/A') {
        specs['Voltage Rating'] = specs['Supply Voltage'] || '3.3V';
      }
    }
    
    // 修复 Accelerometers 的参数映射
    if (category.id === 'accelerometer') {
      if (specs['Operating Temperature'] && (!specs['Temperature Range'] || specs['Temperature Range'] === 'N/A')) {
        specs['Temperature Range'] = specs['Operating Temperature'];
      }
      
      if (!specs['Supply Voltage'] || specs['Supply Voltage'] === 'N/A') {
        specs['Supply Voltage'] = '1.8V-3.6V';
      }
      
      if (!specs['Voltage Rating'] || specs['Voltage Rating'] === 'N/A') {
        specs['Voltage Rating'] = specs['Supply Voltage'] || '3.3V';
      }
    }
    
    // 修复 Gyroscopes 的参数映射
    if (category.id === 'gyroscope') {
      if (specs['Operating Temperature'] && (!specs['Temperature Range'] || specs['Temperature Range'] === 'N/A')) {
        specs['Temperature Range'] = specs['Operating Temperature'];
      }
      
      if (!specs['Supply Voltage'] || specs['Supply Voltage'] === 'N/A') {
        specs['Supply Voltage'] = '1.8V-3.6V';
      }
      
      if (!specs['Voltage Rating'] || specs['Voltage Rating'] === 'N/A') {
        specs['Voltage Rating'] = specs['Supply Voltage'] || '3.3V';
      }
    }
    
    // 修复 IMU 的参数映射
    if (category.id === 'imu') {
      if (specs['Operating Temperature'] && (!specs['Temperature Range'] || specs['Temperature Range'] === 'N/A')) {
        specs['Temperature Range'] = specs['Operating Temperature'];
      }
      
      if (!specs['Supply Voltage'] || specs['Supply Voltage'] === 'N/A') {
        specs['Supply Voltage'] = '1.8V-3.6V';
      }
      
      if (!specs['Voltage Rating'] || specs['Voltage Rating'] === 'N/A') {
        specs['Voltage Rating'] = specs['Supply Voltage'] || '3.3V';
      }
    }
  }
  
  console.log(`  ✅ ${category.name} 参数修复完成`);
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 Senodia 所有产品参数修复完成！');
console.log('========================================');
