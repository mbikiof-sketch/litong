#!/usr/bin/env node
/**
 * Semikron品牌 faeReview 格式修复脚本
 * 将字符串格式的 faeReview 转换为对象格式
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
  
  products.categories.forEach(cat => {
    if (cat.products) {
      cat.products.forEach(product => {
        // 如果 faeReview 是字符串格式，转换为对象格式
        if (typeof product.faeReview === 'string') {
          product.faeReview = {
            author: "Power FAE",
            title: "Power Electronics Specialist",
            content: product.faeReview,
            highlight: "High power, reliable performance"
          };
          console.log(`  Fixed faeReview format for ${product.partNumber}`);
        }
      });
    }
  });
  
  writeJSON('products.json', products);
}

function main() {
  console.log('\n🔧 Fixing Semikron faeReview format...\n');
  fixProducts();
  console.log('\n✅ faeReview format fixed!\n');
}

main();
