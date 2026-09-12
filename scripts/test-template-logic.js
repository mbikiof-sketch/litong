/**
 * 测试模板中的查找逻辑
 */

const product = {
  partNumber: 'EC2A11',
  paramValues: {
    "Input Voltage": "4.5-5.5V / 9-18V / 18-36V / 36-72V",
    "Output Voltage": "3.3V / 5V / 9V / 12V / 15V / 24V",
    "Output Power": "2W",
    "Efficiency": "85%",
    "Isolation": "1000VDC"
  },
  specifications: {
    "Output Voltage": "3.3V / 5V / 9V / 12V / 15V / 24V (model dependent)",
    "Output Power": "2W maximum",
    "Efficiency": "85% typical at full load"
  }
};

const parameters = ["Input Voltage", "Output Voltage", "Output Power", "Efficiency", "Isolation"];

parameters.forEach(function(param) {
  var paramValue = null;
  
  // 模板中的查找逻辑
  if (product[param]) {
    paramValue = product[param];
    console.log(`${param}: 从 product["${param}"] 找到: ${paramValue}`);
  } else if (product.specifications && product.specifications[param]) {
    paramValue = product.specifications[param];
    console.log(`${param}: 从 specifications["${param}"] 找到: ${paramValue}`);
  } else if (product.paramValues && product.paramValues[param]) {
    paramValue = product.paramValues[param];
    console.log(`${param}: 从 paramValues["${param}"] 找到: ${paramValue}`);
  } else {
    console.log(`${param}: 未找到 (N/A)`);
  }
});
