/**
 * 测试 paramValues 是否正确传递
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

// 检查第一个产品的 paramValues
const firstCategory = productsData.categories[0];
const firstProduct = firstCategory.products[0];

console.log('产品型号:', firstProduct.partNumber);
console.log('产品 paramValues:', JSON.stringify(firstProduct.paramValues, null, 2));
console.log('');
console.log('分类 parameters:', firstCategory.parameters);
console.log('');

// 测试查找逻辑
const param = 'Input Voltage';
console.log(`测试查找参数: "${param}"`);
console.log(`product["${param}"]:`, firstProduct[param]);
console.log(`product.paramValues["${param}"]:`, firstProduct.paramValues ? firstProduct.paramValues[param] : 'paramValues不存在');
