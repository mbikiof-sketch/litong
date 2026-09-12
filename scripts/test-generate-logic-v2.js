/**
 * 测试生成脚本的逻辑
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

// 模拟生成脚本的逻辑
const firstCategory = productsData.categories[0];
const parameters = firstCategory.parameters || [];

// 模拟 paramMapping
const paramMapping = {};
parameters.forEach(function(param) {
  var fieldKey = param.toLowerCase().replace(/[^a-z0-9]/g, '');
  paramMapping[param] = fieldKey;
});

console.log('paramMapping:', paramMapping);
console.log('');

// 测试第一个产品 (EC2A11)
const product = firstCategory.products[0];
console.log('产品型号:', product.partNumber);
console.log('产品原有的 paramValues:', JSON.stringify(product.paramValues, null, 2));
console.log('');

// 模拟生成脚本的逻辑
var paramValues = {};
parameters.forEach(function(param) {
  console.log(`处理参数: "${param}"`);
  
  // 优先使用产品中已有的 paramValues
  if (product.paramValues && product.paramValues[param]) {
    paramValues[param] = product.paramValues[param];
    console.log(`  使用产品 paramValues["${param}"]: ${product.paramValues[param]}`);
    return;
  }
  
  var fieldKey = paramMapping[param];
  var value = product[fieldKey];
  console.log(`  查找 product["${fieldKey}"]: ${value}`);
  
  if (!value && product.specifications) {
    value = product.specifications[fieldKey];
    console.log(`  查找 specifications["${fieldKey}"]: ${value}`);
  }
  
  paramValues[param] = value || '-';
  console.log(`  设置 paramValues["${param}"]: ${paramValues[param]}`);
});

console.log('');
console.log('新生成的 paramValues:', JSON.stringify(paramValues, null, 2));
console.log('');

// 合并逻辑
var mergedParamValues = Object.assign({}, paramValues, product.paramValues || {});
console.log('合并后的 mergedParamValues:', JSON.stringify(mergedParamValues, null, 2));
