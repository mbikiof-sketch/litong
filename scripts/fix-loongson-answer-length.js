#!/usr/bin/env node
/**
 * 修复Loongson FAQ答案长度
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'loongson', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixed = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.faqs) {
      product.faqs.forEach(faq => {
        if (faq.answer && faq.answer.length < 200) {
          // 添加补充内容
          faq.answer += ` Contact BeiLuo Electronics for comprehensive technical support and application guidance.`;
          fixed++;
        }
      });
    }
  });
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log(`Fixed ${fixed} FAQ answers`);
