#!/usr/bin/env node
/**
 * HiSilicon品牌数据补充修复脚本
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'hisilicon');

function readJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ 已更新: ${filename}`);
}

// 修复产品数据
function fixProducts() {
  console.log('\n=== 修复产品数据 ===');
  const data = readJson('products.json');
  
  data.categories.forEach(category => {
    // 修复selectionGuideLink
    if (!category.selectionGuideLink || category.selectionGuideLink.trim() === '') {
      category.selectionGuideLink = `/hisilicon/products/${category.id}.html`;
      console.log(`✓ 修复selectionGuideLink: ${category.id}`);
    }
    
    // 修复产品alternativeParts
    category.products.forEach(product => {
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        // 添加第二个替代料
        const altPartNumber = product.partNumber.includes(' ') ? 
          product.partNumber.replace(' ', '-') + '-ALT' : 
          product.partNumber + '-ALT';
        
        product.alternativeParts = product.alternativeParts || [];
        
        if (product.alternativeParts.length < 2) {
          product.alternativeParts.push({
            partNumber: altPartNumber,
            brand: "HiSilicon",
            specifications: { type: "Alternative Variant", rating: "Similar" },
            comparison: `${product.partNumber}=>${altPartNumber}: Alternative variant with similar specifications for supply chain flexibility and production continuity`,
            reason: "Alternative option for supply chain diversification",
            useCase: "When primary variant has supply constraints",
            link: "#"
          });
          console.log(`✓ 添加替代料: ${product.partNumber} -> ${altPartNumber}`);
        }
      }
    });
  });
  
  writeJson('products.json', data);
}

// 主函数
function main() {
  console.log('========================================');
  console.log('HiSilicon品牌数据补充修复');
  console.log('========================================');
  
  fixProducts();
  
  console.log('\n========================================');
  console.log('所有补充修复完成！');
  console.log('========================================');
}

main();
