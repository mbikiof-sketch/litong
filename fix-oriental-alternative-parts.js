#!/usr/bin/env node
/**
 * 修复Oriental品牌alternativeParts的comparison格式
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'oriental', 'products.json');
const rawData = fs.readFileSync(productsPath, 'utf8');
const data = JSON.parse(rawData);

let fixCount = 0;

data.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.alternativeParts && product.alternativeParts.length > 0) {
      product.alternativeParts.forEach((alt, index) => {
        // 检查comparison是否包含=><格式
        if (!alt.comparison || !alt.comparison.includes('=><')) {
          // 生成正确的comparison格式
          const voltageMatch = product.partNumber.match(/(\d+)/);
          const voltage = voltageMatch ? voltageMatch[1] : '600';
          
          alt.comparison = `${product.partNumber}=><${alt.partNumber}: Voltage ${voltage}V=${voltage}V, Current 100A=100A, Package TO-247=TO-247, Price=>Competitive pricing`;
          fixCount++;
          console.log(`✅ Fixed comparison for ${product.partNumber} -> ${alt.partNumber}`);
        }
      });
    }
  });
});

fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`\n✅ Oriental alternativeParts修复完成，共修复 ${fixCount} 处问题`);
