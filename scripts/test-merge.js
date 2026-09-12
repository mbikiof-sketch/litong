/**
 * 测试 Object.assign 合并逻辑
 */

const product = {
  partNumber: 'EC2A11',
  paramValues: {
    "Input Voltage": "4.5-5.5V / 9-18V / 18-36V / 36-72V",
    "Output Voltage": "3.3V / 5V / 9V / 12V / 15V / 24V",
    "Output Power": "2W",
    "Efficiency": "85%",
    "Isolation": "1000VDC"
  }
};

const paramValues = {
  "Input Voltage": "-",
  "Output Voltage": "3.3V / 5V / 9V / 12V / 15V / 24V (model dependent)",
  "Output Power": "2W maximum",
  "Efficiency": "85% typical at full load",
  "Isolation": "-"
};

// 合并逻辑
const mergedParamValues = Object.assign({}, paramValues, product.paramValues || {});

console.log('paramValues:', JSON.stringify(paramValues, null, 2));
console.log('');
console.log('product.paramValues:', JSON.stringify(product.paramValues, null, 2));
console.log('');
console.log('mergedParamValues:', JSON.stringify(mergedParamValues, null, 2));
