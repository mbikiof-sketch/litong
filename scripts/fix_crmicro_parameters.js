#!/usr/bin/env node
/**
 * 修复 CR Micro 产品参数映射
 * 将产品字段映射到 specifications 中，以便表格正确显示
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'crmicro');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 CR Micro 产品参数映射');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 参数映射规则
const paramMapping = {
  'Power MOSFETs': {
    'Voltage Rating': ['voltage', 'VDSS'],
    'Current Rating': ['current', 'ID'],
    'Temperature Range': ['temperature', 'tempRange'],
    'VDSS': ['voltage', 'VDSS'],
    'RDS(on)': ['rdsOn', 'rds', 'RDS'],
    'ID': ['current', 'ID'],
    'Qg': ['qg', 'gateCharge', 'Qg'],
    'VGS(th)': ['vgs', 'VGS', 'VGS(th)'],
    'Technology': ['technology', 'tech']
  },
  'IGBTs': {
    'Voltage Rating': ['voltage', 'VCE', 'VCES'],
    'Current Rating': ['current', 'IC', 'ICM'],
    'Temperature Range': ['temperature', 'tempRange'],
    'VCES': ['voltage', 'VCES'],
    'IC': ['current', 'IC'],
    'VCE(sat)': ['vcesat', 'VCE(sat)'],
    'Qg': ['qg', 'gateCharge'],
    'Technology': ['technology', 'tech']
  },
  'Protection Devices': {
    'Working Voltage': ['voltage', 'VWM'],
    'Breakdown Voltage': ['breakdownVoltage', 'VBR'],
    'Clamping Voltage': ['clampingVoltage', 'VC'],
    'Peak Pulse Power': ['power', 'PPPM'],
    'Package': ['package']
  },
  'Power Management ICs': {
    'Input Voltage': ['inputVoltage', 'Vin'],
    'Output Power': ['power', 'Pout'],
    'Switching Frequency': ['frequency', 'fsw'],
    'Topology': ['topology'],
    'Package': ['package']
  }
};

// 遍历所有分类
for (const category of productsData.categories) {
  console.log(`📦 处理 ${category.name}...`);
  const mapping = paramMapping[category.name];
  
  if (!mapping) {
    console.log(`  ⚠️ 没有参数映射规则，跳过`);
    continue;
  }
  
  let fixedCount = 0;
  
  // 遍历所有产品
  for (const product of category.products) {
    // 确保 specifications 存在
    if (!product.specifications) {
      product.specifications = {};
    }
    
    // 根据映射规则填充 specifications
    for (const [specKey, possibleKeys] of Object.entries(mapping)) {
      // 如果 specifications 中已经有值，跳过
      if (product.specifications[specKey] && product.specifications[specKey] !== 'N/A') {
        continue;
      }
      
      // 查找可能的字段值
      for (const key of possibleKeys) {
        if (product[key] && product[key] !== 'N/A') {
          product.specifications[specKey] = product[key];
          fixedCount++;
          break;
        }
      }
    }
  }
  
  console.log(`  ✅ 修复了 ${fixedCount} 个参数映射`);
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 CR Micro 产品参数映射修复完成！');
console.log('========================================');
