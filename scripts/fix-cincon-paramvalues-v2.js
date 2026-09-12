/**
 * 为cincon品牌产品添加paramValues字段，用于动态表格列显示
 * 修复查找逻辑，优先精确匹配
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'cincon', 'products.json');

// 读取产品数据
let productsData;
try {
  const fileContent = fs.readFileSync(productsFilePath, 'utf8');
  productsData = JSON.parse(fileContent);
  console.log('成功读取cincon产品数据文件\n');
} catch (error) {
  console.error('读取产品数据文件失败:', error.message);
  process.exit(1);
}

// 参数名称映射表 - 定义精确匹配的键名
const paramMapping = {
  'Input Voltage': {
    exact: ['Input Voltage'],
    productKeys: ['inputVoltage', 'input'],
    skipKeys: ['Input Voltage Range'] // 跳过这些键
  },
  'Output Voltage': {
    exact: ['Output Voltage'],
    productKeys: ['outputVoltage', 'output']
  },
  'Output Power': {
    exact: ['Output Power'],
    productKeys: ['outputPower', 'power']
  },
  'Efficiency': {
    exact: ['Efficiency'],
    productKeys: ['efficiency']
  },
  'Isolation': {
    exact: ['Isolation'],
    productKeys: ['isolation', 'isolationVoltage'],
    skipKeys: ['Isolation Voltage', 'Isolation Resistance']
  },
  'Medical Grade': {
    exact: ['Medical Grade'],
    defaultValue: '2xMOPP'
  },
  'Certification': {
    exact: ['Certification'],
    defaultValue: 'EN 50155'
  },
  'Temperature': {
    exact: ['Temperature', 'Operating Temperature'],
    productKeys: ['operatingTemp', 'temperature']
  }
};

console.log('开始修复cincon产品的paramValues字段...\n');

let fixedCount = 0;

// 遍历所有分类
productsData.categories.forEach(category => {
  console.log(`处理分类: ${category.name}`);
  
  if (category.products && Array.isArray(category.products)) {
    category.products.forEach(product => {
      if (!product.paramValues) {
        product.paramValues = {};
      }
      
      // 获取分类的parameters
      const parameters = category.parameters || [];
      
      parameters.forEach(param => {
        // 如果paramValues中已经有这个参数且不是'-'或'N/A'，跳过
        if (product.paramValues[param] && product.paramValues[param] !== '-' && product.paramValues[param] !== 'N/A') {
          return;
        }
        
        const mapping = paramMapping[param];
        if (!mapping) return;
        
        let value = null;
        
        // 1. 从product根级别查找
        if (mapping.productKeys) {
          for (const key of mapping.productKeys) {
            if (product[key] !== undefined && product[key] !== null && product[key] !== 'N/A') {
              value = product[key];
              break;
            }
          }
        }
        
        // 2. 从specifications中精确匹配查找
        if (!value && product.specifications) {
          // 先尝试精确匹配
          for (const key of mapping.exact) {
            if (product.specifications[key] !== undefined && 
                product.specifications[key] !== null && 
                product.specifications[key] !== 'N/A') {
              value = product.specifications[key];
              break;
            }
          }
        }
        
        // 3. 使用默认值
        if (!value && mapping.defaultValue) {
          value = mapping.defaultValue;
        }
        
        // 设置paramValues
        if (value && value !== 'N/A') {
          product.paramValues[param] = value;
          fixedCount++;
          console.log(`  修复 ${product.partNumber} 的 ${param}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}`);
        }
      });
    });
  }
  
  console.log('');
});

console.log(`总共修复了 ${fixedCount} 个参数值`);

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('\n✅ 产品数据已保存到文件');
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}

console.log('\n修复完成！');
