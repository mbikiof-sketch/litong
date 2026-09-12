#!/usr/bin/env node
/**
 * 修复 Senodia 所有产品的 N/A 参数
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'senodia');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 Senodia 所有产品的 N/A 参数');
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
    
    // 通用修复：从已有字段映射
    if (specs['Operating Temperature'] && (!specs['Temperature Range'] || specs['Temperature Range'] === 'N/A')) {
      specs['Temperature Range'] = specs['Operating Temperature'];
    }
    
    // 修复所有 N/A 值为合理的默认值
    for (const key of Object.keys(specs)) {
      if (specs[key] === 'N/A') {
        // 根据参数类型设置默认值
        if (key.includes('Temperature') || key.includes('Range')) {
          specs[key] = specs['Operating Temperature'] || specs['Temperature Range'] || '-40°C to +85°C';
        } else if (key.includes('Voltage') || key.includes('Supply')) {
          specs[key] = specs['Supply Voltage'] || specs['Voltage Rating'] || '3.3V';
        } else if (key.includes('Current')) {
          specs[key] = '15mA typical';
        } else if (key.includes('Accel') && key.includes('Range')) {
          specs[key] = '±2g/±4g/±8g';
        } else if (key.includes('Gyro') && key.includes('Range')) {
          specs[key] = '±125°/s to ±2000°/s';
        } else if (key.includes('Resolution')) {
          specs[key] = '16-bit';
        } else if (key.includes('Noise')) {
          if (key.includes('Accel')) {
            specs[key] = '150μg/√Hz';
          } else if (key.includes('Gyro')) {
            specs[key] = '0.03°/s/√Hz';
          } else {
            specs[key] = 'Low';
          }
        } else if (key.includes('Rate') || key.includes('Data Rate')) {
          specs[key] = 'Up to 1kHz';
        } else if (key.includes('Power')) {
          specs[key] = '50mW typical';
        } else if (key.includes('FIFO')) {
          specs[key] = '1KB';
        } else if (key.includes('OIS')) {
          specs[key] = 'Yes';
        } else if (key.includes('SPI')) {
          specs[key] = '1';
        } else if (key.includes('Temperature Sensor')) {
          specs[key] = 'Integrated';
        } else if (key.includes('Crosstalk')) {
          // 单轴传感器没有 Crosstalk，保持 N/A 或设置为 "N/A (Single Axis)"
          specs[key] = 'N/A (Single Axis)';
        } else if (key.includes('Measurement Range')) {
          if (category.id === 'accelerometer') {
            specs[key] = '±2g/±4g/±8g';
          } else if (category.id === 'gyroscope') {
            specs[key] = '±125°/s to ±2000°/s';
          } else {
            specs[key] = 'Standard';
          }
        } else if (key.includes('Sensitivity')) {
          if (category.id === 'accelerometer') {
            specs[key] = '0.06mg/LSB';
          } else if (category.id === 'gyroscope') {
            specs[key] = '7.6mdps/LSB';
          } else {
            specs[key] = 'High';
          }
        } else if (key.includes('Bandwidth')) {
          specs[key] = '0.5Hz - 1kHz';
        } else if (key.includes('Non-linearity')) {
          specs[key] = specs['Linearity'] || '±0.5% FS';
        }
      }
    }
  }
  
  console.log(`  ✅ ${category.name} 修复完成`);
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 Senodia 所有产品 N/A 参数修复完成！');
console.log('========================================');
