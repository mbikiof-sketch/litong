/**
 * 测试 EJS 模板渲染
 */

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'cincon', 'products.json');

// 读取产品数据
let productsData;
try {
  const fileContent = fs.readFileSync(productsFilePath, 'utf8');
  productsData = JSON.parse(fileContent);
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

// 模拟生成 productsWithParamValues
var productsWithParamValues = firstCategory.products.map(function(product) {
  var paramValues = {};
  parameters.forEach(function(param) {
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
  
  var mergedParamValues = Object.assign({}, paramValues, product.paramValues || {});
  return Object.assign({}, product, { paramValues: mergedParamValues });
});

// 测试模板渲染
const template = `
<% products.forEach(function(product) { %>
  Product: <%= product.partNumber %>
  paramValues: <%= JSON.stringify(product.paramValues) %>
  Input Voltage: <%= product.paramValues ? product.paramValues['Input Voltage'] : 'N/A' %>
  ---
<% }); %>
`;

const data = {
  products: productsWithParamValues
};

try {
  const result = ejs.render(template, data);
  console.log(result);
} catch (error) {
  console.error('渲染失败:', error.message);
}
