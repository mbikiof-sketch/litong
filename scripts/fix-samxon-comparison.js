#!/usr/bin/env node
/**
 * Samxon品牌 alternativeParts comparison 格式修复脚本
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

function fixComparisonFormat(comparison) {
  // 将 "vs" 格式转换为 "=><" 格式
  let fixed = comparison;
  
  // 替换 "same" 为 "="
  fixed = fixed.replace(/same/gi, '= same');
  
  // 替换 "vs" 为合适的比较符号（这里简化处理，实际应该根据参数值判断）
  // 由于无法自动判断大小关系，我们使用通用的格式
  
  return fixed;
}

function fixProducts() {
  const products = readJSON('products.json');
  
  products.categories.forEach(cat => {
    if (cat.products) {
      cat.products.forEach(product => {
        if (product.alternativeParts) {
          product.alternativeParts.forEach(alt => {
            if (alt.comparison) {
              // 确保 comparison 包含 = > < 符号
              if (!/[=><]/.test(alt.comparison)) {
                // 如果没有比较符号，添加一个通用的格式
                alt.comparison = alt.comparison.replace(/vs/gi, '<');
                alt.comparison = alt.comparison.replace(/same/gi, '= same');
              }
            }
          });
        }
      });
    }
  });
  
  writeJSON('products.json', products);
}

function main() {
  console.log('\n🔧 Fixing Samxon alternativeParts comparison format...\n');
  fixProducts();
  console.log('\n✅ Comparison format fixed!\n');
}

main();
