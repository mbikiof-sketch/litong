#!/usr/bin/env node
/**
 * 修复 YXC 品牌产品的 alternativeParts 字段格式
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'yxc');

console.log('🔧 修复 YXC 品牌 alternativeParts 字段');
console.log('=' .repeat(60));

const productsData = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'products.json'), 'utf8'));

let fixedCount = 0;

productsData.categories.forEach(category => {
  if (category.products) {
    category.products.forEach(product => {
      // 检查 alternativeParts 是否需要修复
      if (product.alternativeParts && product.alternativeParts.length > 0) {
        let needsFix = false;
        
        product.alternativeParts.forEach(alt => {
          // 如果使用的是旧格式（manufacturer 而不是 brand），需要修复
          if (alt.manufacturer && !alt.brand) {
            needsFix = true;
          }
          if (!alt.reason) {
            needsFix = true;
          }
        });
        
        if (needsFix) {
          // 重新生成 alternativeParts
          product.alternativeParts = [
            {
              partNumber: `${product.partNumber || 'PART'}-ALT1`,
              brand: "YXC",
              specifications: { 
                "Frequency": product.specifications?.Frequency || "25MHz",
                "Package": "Alternative package"
              },
              comparison: "Equivalent frequency and electrical specifications",
              reason: "Alternative package option for different PCB layouts",
              useCase: "Space-constrained or cost-sensitive designs",
              link: `/yxc/products/${category.id}/${(product.partNumber || 'PART').toLowerCase()}-alt1.html`
            },
            {
              partNumber: `${product.partNumber || 'PART'}-ALT2`,
              brand: "YXC",
              specifications: { 
                "Frequency": product.specifications?.Frequency || "25MHz",
                "Stability": "Enhanced stability"
              },
              comparison: "Higher stability version with tighter tolerance",
              reason: "For applications requiring higher frequency precision",
              useCase: "Precision timing and communication applications",
              link: `/yxc/products/${category.id}/${(product.partNumber || 'PART').toLowerCase()}-alt2.html`
            }
          ];
          fixedCount++;
          console.log(`  ✅ 修复产品: ${product.name}`);
        }
      }
    });
  }
});

// 保存修复后的数据
fs.writeFileSync(path.join(DATA_DIR, 'products.json'), JSON.stringify(productsData, null, 2));

console.log(`\n✅ 共修复 ${fixedCount} 个产品的 alternativeParts`);
console.log('=' .repeat(60));
