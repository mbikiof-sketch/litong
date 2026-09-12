#!/usr/bin/env node

/**
 * 修复Guanxi品牌数据问题
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'guanxi');
const productsFile = path.join(dataDir, 'products.json');

// 读取产品数据
const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// 修复shortDescription长度
function fixShortDescription() {
  const fixes = [
    { partNumber: 'KAQY217', newDesc: '400V 100mA MOSFET output SSR with 2500V isolation, high voltage capability, SOP-4 for HV DC switching.' },
    { partNumber: 'KAQY414', newDesc: '600V 400mA triac output SSR with 2500V isolation, zero-cross switching, DIP-4 for AC loads.' },
    { partNumber: 'KAQY6N1', newDesc: 'Dual channel 60V 200mA MOSFET SSR with 2500V isolation, SOP-8 for multi-channel DC switching.' }
  ];

  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      const fix = fixes.find(f => f.partNumber === product.partNumber);
      if (fix) {
        product.shortDescription = fix.newDesc;
        console.log(`✅ Fixed shortDescription for ${product.partNumber}`);
      }
    });
  });
}

// 修复series数量
function fixSeries() {
  productsData.categories.forEach(category => {
    if (category.id === 'reed-relays') {
      category.series = ['KRE-A Series', 'KRE-C Series'];
      console.log(`✅ Fixed series for ${category.name}`);
    }
    if (category.id === 'automotive-photocouplers') {
      category.series = ['KAQ Standard Series', 'KAQ High-Speed Series'];
      console.log(`✅ Fixed series for ${category.name}`);
    }
  });
}

// 修复alternativeParts对比格式
function fixAlternativeParts() {
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          // 确保comparison使用 => 格式
          if (alt.comparison && !alt.comparison.includes('=>')) {
            // 如果格式不对，修复它
            const oldComparison = alt.comparison;
            alt.comparison = `${product.partNumber} => ${alt.partNumber} => ${alt.reason}`;
            console.log(`✅ Fixed comparison for ${product.partNumber} -> ${alt.partNumber}`);
          }
        });
      }
    });
  });
}

// 主函数
function main() {
  console.log('Fixing Guanxi data issues...\n');
  
  fixShortDescription();
  fixSeries();
  fixAlternativeParts();
  
  // 保存更新后的文件
  fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');
  
  console.log('\n✅ All fixes applied successfully!');
}

main();
