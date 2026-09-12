#!/usr/bin/env node
/**
 * Samxon品牌 faeReview 格式修复脚本
 * 将字符串格式的 faeReview 转换为对象格式
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'samxon');

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
        // 如果 faeReview 是字符串格式，转换为对象格式
        if (typeof product.faeReview === 'string') {
          const content = product.faeReview;
          product.faeReview = {
            author: "Capacitor FAE",
            title: "Senior Field Application Engineer",
            content: content,
            highlight: "High reliability, excellent performance"
          };
          fixedCount++;
          console.log(`  Fixed faeReview for ${product.partNumber}`);
        }
      });
    }
  });
  
  writeJSON('products.json', products);
  console.log(`\nTotal fixed: ${fixedCount} products`);
}

function main() {
  console.log('\n🔧 Fixing Samxon faeReview format...\n');
  fixProducts();
  console.log('\n✅ faeReview format fixed!\n');
}

main();
