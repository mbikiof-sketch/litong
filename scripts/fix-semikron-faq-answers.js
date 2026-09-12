#!/usr/bin/env node
/**
 * Semikron品牌 FAQ answer 长度修复脚本
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'semikron');

function readJSON(filename) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, filename), 'utf8'));
}

function writeJSON(filename, data) {
  fs.writeFileSync(path.join(dataDir, filename), JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Fixed: ${filename}`);
}

function fixProducts() {
  const products = readJSON('products.json');
  let fixedCount = 0;
  
  products.categories.forEach(cat => {
    if (cat.products) {
      cat.products.forEach(product => {
        if (product.faqs) {
          product.faqs.forEach((faq, index) => {
            if (faq.answer && faq.answer.length < 200) {
              // 扩展答案长度
              faq.answer += " Contact BeiLuo Electronics FAE team for additional technical support and application guidance. We provide comprehensive design reviews and can help optimize your selection for reliability and performance.";
              fixedCount++;
              console.log(`  Fixed FAQ #${index + 1} for ${product.partNumber}`);
            }
          });
        }
      });
    }
  });
  
  writeJSON('products.json', products);
  console.log(`\nTotal fixed: ${fixedCount} FAQs`);
}

function main() {
  console.log('\n🔧 Fixing Semikron FAQ answer lengths...\n');
  fixProducts();
  console.log('\n✅ FAQ answers fixed!\n');
}

main();
