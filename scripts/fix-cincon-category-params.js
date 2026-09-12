/**
 * 修复cincon品牌分类的parameters数组，用于动态表格列显示
 * 替换旧的parameters数组为新的简化版本
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

// 为每个分类定义新的parameters数组（只包含要在表格中显示的5个参数）
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

console.log('开始修复cincon分类的parameters数组...\n');

// 遍历所有分类
productsData.categories.forEach(category => {
  const config = categoryConfig[category.id];
  if (config) {
    console.log(`处理分类: ${category.name}`);
    
    // 替换parameters数组（只保留前5个关键参数）
    const oldParams = category.parameters;
    category.parameters = config.parameters;
    console.log(`  ✅ 替换parameters: ${oldParams ? oldParams.length : 0}个 -> ${config.parameters.length}个`);
    console.log(`     新参数: ${config.parameters.join(', ')}`);
    
    // 更新series字段
    if (!category.series) {
      category.series = config.series;
      console.log(`  ✅ 添加series: ${config.series.join(', ')}`);
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
