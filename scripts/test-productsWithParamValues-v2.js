/**
 * 测试 productsWithParamValues 是否正确生成
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

// 模拟生成 productsWithParamValues
var productsWithParamValues = firstCategory.products.map(function(product) {
  var paramValues = {};
  parameters.forEach(function(param) {
    // 优先使用产品中已有的 paramValues
    if (product.paramValues && product.paramValues[param]) {
      paramValues[param] = product.paramValues[param];
      return;
    }
    
    var fieldKey = paramMapping[param];
    var value = product[fieldKey];
    if (!value && product.specifications) {
      value = product.specifications[fieldKey];
    }
    
    paramValues[param] = value || '-';
  });
  
  // 合并新生成的 paramValues 和产品中已有的 paramValues
  var mergedParamValues = Object.assign({}, paramValues, product.paramValues || {});
  return Object.assign({}, product, { paramValues: mergedParamValues });
});

console.log('productsWithParamValues 数量:', productsWithParamValues.length);
console.log('');

// 检查第一个产品
const firstProduct = productsWithParamValues[0];
console.log('第一个产品的 partNumber:', firstProduct.partNumber);
console.log('第一个产品的 paramValues:', JSON.stringify(firstProduct.paramValues, null, 2));
console.log('');

// 检查 paramValues 是否正确合并
console.log('检查 paramValues["Input Voltage"]:', firstProduct.paramValues['Input Voltage']);
console.log('检查 paramValues["Isolation"]:', firstProduct.paramValues['Isolation']);
console.log('');

// 检查第二个产品（新增的产品）
const secondProduct = productsWithParamValues[3];
console.log('第四个产品的 partNumber:', secondProduct.partNumber);
console.log('第四个产品的 paramValues:', JSON.stringify(secondProduct.paramValues, null, 2));
