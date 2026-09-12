/**
 * 为cincon品牌分类添加parameters字段，用于动态表格列显示
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

// 为每个分类定义parameters和series
const categoryConfig = {
  'dc-dc-converters': {
    parameters: ['Input Voltage', 'Output Voltage', 'Output Power', 'Efficiency', 'Isolation'],
    series: ['EC2A', 'EC3A', 'EC4A', 'EC6A', 'EC2M', 'EC3M', 'EC4M', 'EC6M', 'EC7A']
  },
  'ac-dc-power-modules': {
    parameters: ['Input Voltage', 'Output Voltage', 'Output Power', 'Efficiency', 'Isolation'],
    series: ['CFM05', 'CFM10', 'CFM20', 'CFM30', 'CFM40', 'CFM60']
  },
  'medical-power-solutions': {
    parameters: ['Input Voltage', 'Output Voltage', 'Output Power', 'Isolation', 'Medical Grade'],
    series: ['EC2M', 'EC3M', 'EC4M', 'EC6M', 'CFM20M']
  },
  'railway-industrial-power': {
    parameters: ['Input Voltage', 'Output Voltage', 'Output Power', 'Certification', 'Temperature'],
    series: ['EC7A', 'CFM40R']
  }
};

console.log('开始为cincon分类添加parameters字段...\n');

// 遍历所有分类
productsData.categories.forEach(category => {
  const config = categoryConfig[category.id];
  if (config) {
    console.log(`处理分类: ${category.name}`);
    
    // 添加parameters字段
    if (!category.parameters) {
      category.parameters = config.parameters;
      console.log(`  ✅ 添加parameters: ${config.parameters.join(', ')}`);
    }
    
    // 添加series字段
    if (!category.series) {
      category.series = config.series;
      console.log(`  ✅ 添加series: ${config.series.join(', ')}`);
    }
    
    // 为每个产品添加parameters字段
    if (category.products && Array.isArray(category.products)) {
      category.products.forEach(product => {
        if (!product.parameters) {
          product.parameters = {};
          
          // 根据产品类型映射规格到parameters
          const specs = product.specifications || {};
          
          // 映射Input Voltage
          if (specs['Input Voltage'] || product.inputVoltage) {
            product.parameters['Input Voltage'] = specs['Input Voltage'] || product.inputVoltage || '-';
          }
          
          // 映射Output Voltage
          if (specs['Output Voltage'] || product.outputVoltage) {
            product.parameters['Output Voltage'] = specs['Output Voltage'] || product.outputVoltage || '-';
          }
          
          // 映射Output Power
          if (specs['Output Power'] || product.outputPower) {
            product.parameters['Output Power'] = specs['Output Power'] || product.outputPower || '-';
          }
          
          // 映射Efficiency
          if (specs['Efficiency'] || product.efficiency) {
            product.parameters['Efficiency'] = specs['Efficiency'] || product.efficiency || '-';
          }
          
          // 映射Isolation
          if (specs['Isolation'] || product.isolation) {
            product.parameters['Isolation'] = specs['Isolation'] || product.isolation || '-';
          }
          
          // 映射Medical Grade (医疗专用)
          if (category.id === 'medical-power-solutions') {
            product.parameters['Medical Grade'] = '2xMOPP';
          }
          
          // 映射Certification (铁路专用)
          if (category.id === 'railway-industrial-power') {
            product.parameters['Certification'] = 'EN 50155';
          }
          
          // 映射Temperature
          if (specs['Temperature'] || product.operatingTemp) {
            product.parameters['Temperature'] = specs['Temperature'] || product.operatingTemp || '-';
          }
        }
      });
      console.log(`  ✅ 已为${category.products.length}个产品添加parameters`);
    }
    
    console.log('');
  }
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
