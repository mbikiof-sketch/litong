#!/usr/bin/env node
/**
 * On-Bright faeReview highlight修复脚本
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', 'on-bright', 'products.json');
const rawData = fs.readFileSync(productsPath, 'utf8');
const data = JSON.parse(rawData);

// 处理每个产品
let fixCount = 0;
data.categories.forEach(category => {
  category.products.forEach(product => {
    // 检查faeReview是否缺少highlight字段
    if (product.faeReview) {
      if (!product.faeReview.highlight) {
        product.faeReview.highlight = 'High efficiency and reliable performance for power applications';
        fixCount++;
        console.log(`✅ Added highlight to faeReview for ${product.partNumber}`);
      }
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`\n✅ On-Bright faeReview highlight修复完成，共修复 ${fixCount} 处问题`);
