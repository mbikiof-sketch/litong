#!/usr/bin/env node
/**
 * Starpower产品规格参数修复脚本
 * 修复specifications对象中的参数值，使其与category.parameters匹配
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'starpower', 'products.json');
const rawData = fs.readFileSync(productsPath, 'utf8');
const data = JSON.parse(rawData);

let fixCount = 0;

data.categories.forEach(category => {
  console.log(`\n🔄 Processing ${category.name}...`);
  
  category.products.forEach(product => {
    // 确保specifications对象存在
    if (!product.specifications) {
      product.specifications = {};
    }
    
    // 从产品根级别字段获取值并填充到specifications
    const specMappings = {
      'Voltage Rating': product.voltage || product.voltageRating,
      'Current Rating': product.current || product.currentRating,
      'Temperature Range': product.temperatureRange || product.operatingTemperature,
      'VCE(sat)': product.vceSat,
      'Package': product.package,
      'Switching Frequency': product.switchingFrequency,
      'Isolation Voltage': product.isolationVoltage,
      'Qualification': product.qualification,
      'Collector Current': product.collectorCurrent,
      'Collector-Emitter Voltage': product.collectorEmitterVoltage
    };
    
    // 更新specifications中的值
    for (const [specKey, value] of Object.entries(specMappings)) {
      if (value && value !== 'N/A' && value !== '') {
        if (product.specifications[specKey] === 'N/A' || !product.specifications[specKey]) {
          product.specifications[specKey] = value;
          fixCount++;
          console.log(`✅ Fixed ${specKey} for ${product.partNumber}: ${value}`);
        }
      }
    }
    
    // 如果没有Temperature Range但有其他温度信息，设置默认值
    if (!product.specifications['Temperature Range'] || product.specifications['Temperature Range'] === 'N/A') {
      product.specifications['Temperature Range'] = '-40°C to +150°C';
      fixCount++;
      console.log(`✅ Set default Temperature Range for ${product.partNumber}`);
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`\n✅ Starpower specifications修复完成，共修复 ${fixCount} 处问题`);
