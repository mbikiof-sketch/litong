/**
 * 测试生成脚本的 paramValues 合并逻辑
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
const parameters = firstCategory.parameters;

console.log('分类 parameters:', parameters);
console.log('');

// 模拟 paramMapping
const paramMapping = {};
parameters.forEach(function(param) {
  paramMapping[param] = param.toLowerCase().replace(/[^a-z0-9]/g, '');
});

console.log('paramMapping:', paramMapping);
console.log('');

// 测试第一个产品
const firstProduct = firstCategory.products[0];
console.log('产品型号:', firstProduct.partNumber);
console.log('产品原有的 paramValues:', JSON.stringify(firstProduct.paramValues, null, 2));
console.log('');

// 模拟生成脚本的逻辑
var paramValues = {};
parameters.forEach(function(param) {
  // 优先使用产品中已有的 paramValues
  if (firstProduct.paramValues && firstProduct.paramValues[param]) {
    paramValues[param] = firstProduct.paramValues[param];
    console.log(`使用产品 paramValues["${param}"]:`, firstProduct.paramValues[param]);
    return;
  }
  
  var fieldKey = paramMapping[param];
  var value = firstProduct[fieldKey];
  console.log(`查找 product["${fieldKey}"]:`, value);
  
  if (!value && firstProduct.specifications) {
    value = firstProduct.specifications[fieldKey];
    console.log(`查找 specifications["${fieldKey}"]:`, value);
  }
  
  paramValues[param] = value || '-';
});

console.log('');
console.log('新生成的 paramValues:', JSON.stringify(paramValues, null, 2));
console.log('');

// 合并逻辑
var mergedParamValues = Object.assign({}, paramValues, firstProduct.paramValues || {});
console.log('合并后的 mergedParamValues:', JSON.stringify(mergedParamValues, null, 2));
