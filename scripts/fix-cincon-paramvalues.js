/**
 * 为cincon品牌产品添加paramValues字段，用于动态表格列显示
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

// 参数名称映射表
const paramMapping = {
  'Input Voltage': ['inputVoltage', 'input', 'Input Voltage Range', 'Input Voltage'],
  'Output Voltage': ['outputVoltage', 'output', 'Output Voltage', 'voltageOutput'],
  'Output Power': ['outputPower', 'power', 'Output Power', 'powerRating'],
  'Efficiency': ['efficiency', 'Efficiency'],
  'Isolation': ['isolation', 'isolationVoltage', 'Isolation Voltage', 'isolation voltage'],
  'Medical Grade': ['medicalGrade', 'medical', 'Medical Grade'],
  'Certification': ['certification', 'certifications', 'Certification'],
  'Temperature': ['operatingTemp', 'temperature', 'operatingTemperature', 'Temperature', 'Operating Temperature']
};

console.log('开始为cincon产品添加paramValues字段...\n');

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
        // 如果paramValues中已经有这个参数，跳过
        if (product.paramValues[param]) {
          return;
        }
        
        // 查找参数值
        const possibleKeys = paramMapping[param] || [param.toLowerCase().replace(/[^a-z0-9]/g, '')];
        let value = null;
        
        // 1. 从product根级别查找
        for (const key of possibleKeys) {
          if (product[key] !== undefined && product[key] !== null) {
            value = product[key];
            break;
          }
        }
        
        // 2. 从specifications中查找
        if (!value && product.specifications) {
          for (const key of possibleKeys) {
            if (product.specifications[key] !== undefined && product.specifications[key] !== null) {
              value = product.specifications[key];
              break;
            }
          }
          
          // 3. 大小写不敏感匹配specifications字段
          if (!value) {
            const specKeys = Object.keys(product.specifications);
            const paramLower = param.toLowerCase().replace(/[^a-z0-9]/g, '');
            for (const specKey of specKeys) {
              const specKeyLower = specKey.toLowerCase().replace(/[^a-z0-9]/g, '');
              if (specKeyLower === paramLower || specKeyLower.includes(paramLower)) {
                value = product.specifications[specKey];
                break;
              }
            }
          }
        }
        
        // 设置paramValues
        if (value) {
          product.paramValues[param] = value;
        } else {
          // 如果找不到值，使用占位符
          product.paramValues[param] = '-';
        }
      });
    });
    
    console.log(`  ✅ 已为${category.products.length}个产品添加paramValues`);
  }
  
  console.log('');
});

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('✅ 产品数据已保存到文件');
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}

console.log('\n修复完成！');
