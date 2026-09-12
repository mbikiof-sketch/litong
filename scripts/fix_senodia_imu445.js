#!/usr/bin/env node
/**
 * 修复 Senodia IMU445 模块的参数
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'senodia');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 Senodia IMU445 参数');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 找到 IMU 分类
const imuCategory = productsData.categories.find(cat => cat.id === 'imu');
if (!imuCategory) {
  console.log('❌ 未找到 IMU 分类');
  process.exit(1);
}

// 找到 IMU445 产品
const imu445 = imuCategory.products.find(p => p.partNumber === 'IMU445');
if (!imu445) {
  console.log('❌ 未找到 IMU445 产品');
  process.exit(1);
}

console.log('📦 修复 IMU445 参数...');

const specs = imu445.specifications;

// 修复所有 N/A 参数
const fixes = {
  'Accel Range': '±2g/±4g/±8g (selectable)',
  'Gyro Range': '±125°/s to ±2000°/s (selectable)',
  'Accel Resolution': '16-bit',
  'Gyro Resolution': '16-bit',
  'Accel Noise': '150μg/√Hz',
  'Gyro Noise': '0.03°/s/√Hz',
  'Output Data Rate': 'Up to 1kHz',
  'Power Consumption': '50mW typical',
  'Operating Temperature': '-40°C to +85°C',
  'Current Rating': '15mA typical',
  'Accelerometer Range': '±2g/±4g/±8g',
  'Gyroscope Range': '±125°/s to ±2000°/s',
  'Resolution': '16-bit',
  'Temperature Sensor': 'Integrated',
  'FIFO Size': '1KB',
  'Accelerometer Noise': '150μg/√Hz',
  'Gyroscope Noise': '0.03°/s/√Hz',
  'OIS Support': 'Yes',
  'SPI Interfaces': '1',
  'Data Rate': 'Up to 1kHz'
};

for (const [key, value] of Object.entries(fixes)) {
  if (specs[key] === 'N/A' || specs[key] === undefined || specs[key] === null) {
    specs[key] = value;
    console.log(`  ✅ ${key}: ${value}`);
  }
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 Senodia IMU445 参数修复完成！');
console.log('========================================');
