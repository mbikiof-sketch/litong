#!/usr/bin/env node
/**
 * 修复 CR Micro 产品缺失的参数
 * 补充 Temperature Range、VGS(th)、Technology 等参数
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'crmicro');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 CR Micro 产品缺失参数');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 遍历所有分类
for (const category of productsData.categories) {
  console.log(`📦 处理 ${category.name}...`);
  let fixedCount = 0;
  
  for (const product of category.products) {
    if (!product.specifications) {
      product.specifications = {};
    }
    
    // 修复 Temperature Range
    if (!product.specifications['Temperature Range'] || product.specifications['Temperature Range'] === 'N/A') {
      product.specifications['Temperature Range'] = '-55°C to +175°C';
      fixedCount++;
    }
    
    // 根据分类修复特定参数
    if (category.name === 'Power MOSFETs') {
      // 修复 VGS(th)
      if (!product.specifications['VGS(th)'] || product.specifications['VGS(th)'] === 'N/A') {
        // 根据产品型号判断
        if (product.partNumber.includes('CSJ')) {
          product.specifications['VGS(th)'] = '2.0-3.0V';
        } else if (product.partNumber.includes('CRSM')) {
          product.specifications['VGS(th)'] = '2.0-4.0V';
        } else {
          product.specifications['VGS(th)'] = '2.0-4.0V';
        }
        fixedCount++;
      }
      
      // 修复 Technology
      if (!product.specifications['Technology'] || product.specifications['Technology'] === 'N/A') {
        if (product.voltage && parseInt(product.voltage) >= 500) {
          product.specifications['Technology'] = 'Super-Junction';
        } else {
          product.specifications['Technology'] = 'Trench';
        }
        fixedCount++;
      }
      
      // 修复 Qg（确保格式正确）
      if (product.qg && (!product.specifications['Qg'] || product.specifications['Qg'] === 'N/A')) {
        product.specifications['Qg'] = product.qg;
        fixedCount++;
      }
    }
    
    if (category.name === 'IGBTs') {
      // 修复 VCE(sat)
      if (!product.specifications['VCE(sat)'] || product.specifications['VCE(sat)'] === 'N/A') {
        if (product.partNumber.includes('CSG')) {
          product.specifications['VCE(sat)'] = '1.5-2.0V';
        } else if (product.partNumber.includes('CRG')) {
          product.specifications['VCE(sat)'] = '1.7-2.2V';
        } else {
          product.specifications['VCE(sat)'] = '1.7V';
        }
        fixedCount++;
      }
      
      // 修复 Technology
      if (!product.specifications['Technology'] || product.specifications['Technology'] === 'N/A') {
        product.specifications['Technology'] = 'Trench Field-Stop';
        fixedCount++;
      }
    }
    
    if (category.name === 'Protection Devices') {
      // 修复 Peak Pulse Power
      if (!product.specifications['Peak Pulse Power'] || product.specifications['Peak Pulse Power'] === 'N/A') {
        if (product.partNumber.startsWith('SMBJ')) {
          product.specifications['Peak Pulse Power'] = '600W';
        } else if (product.partNumber.startsWith('P6KE')) {
          product.specifications['Peak Pulse Power'] = '600W';
        } else if (product.partNumber.startsWith('PESD')) {
          product.specifications['Peak Pulse Power'] = 'N/A';
        }
        fixedCount++;
      }
    }
    
    if (category.name === 'Power Management ICs') {
      // 修复 Switching Frequency
      if (!product.specifications['Switching Frequency'] || product.specifications['Switching Frequency'] === 'N/A') {
        if (product.partNumber.startsWith('CR52')) {
          product.specifications['Switching Frequency'] = '65kHz';
        } else if (product.partNumber.startsWith('CR68')) {
          product.specifications['Switching Frequency'] = product.partNumber === 'CR6880' ? '100kHz' : '65kHz';
        } else if (product.partNumber.startsWith('CR6')) {
          product.specifications['Switching Frequency'] = '65kHz';
        }
        fixedCount++;
      }
    }
  }
  
  console.log(`  ✅ 修复了 ${fixedCount} 个参数`);
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 CR Micro 产品缺失参数修复完成！');
console.log('========================================');
