/**
 * 测试产品字段
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

// 测试第一个产品 (EC2A11)
const product = productsData.categories[0].products[0];
console.log('产品型号:', product.partNumber);
console.log('');

// 检查 product["Input Voltage"]
console.log('product["Input Voltage"]:', product["Input Voltage"]);

// 检查 product["inputVoltage"]
console.log('product["inputVoltage"]:', product["inputVoltage"]);

// 检查 product.paramValues["Input Voltage"]
console.log('product.paramValues["Input Voltage"]:', product.paramValues ? product.paramValues["Input Voltage"] : 'paramValues不存在');

// 检查 product.specifications["Input Voltage"]
console.log('product.specifications["Input Voltage"]:', product.specifications ? product.specifications["Input Voltage"] : 'specifications不存在');

// 检查 product.specifications["Input Voltage Range"]
console.log('product.specifications["Input Voltage Range"]:', product.specifications ? product.specifications["Input Voltage Range"] : 'specifications不存在');
