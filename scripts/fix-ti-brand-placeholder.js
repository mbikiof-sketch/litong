#!/usr/bin/env node
/**
 * 修复TI品牌的brand字段占位符
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'ti', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const realBrands = ['STMicroelectronics', 'NXP', 'Renesas', 'Microchip', 'Cypress', 'Maxim'];

let fixed = 0;

productsData.categories.forEach(category => {
  if (category.products) {
    category.products.forEach(product => {
      // 修复Alternative Parts中的brand字段
      if (product.alternativeParts) {
        product.alternativeParts = product.alternativeParts.map((alt, idx) => {
          if (alt.brand === 'Competitor Alternative' || alt.brand === 'Alternative Brand') {
            fixed++;
            const selectedBrand = realBrands[idx % realBrands.length];
            return {
              ...alt,
              brand: selectedBrand
            };
          }
          return alt;
        });
      }
    });
  }
});

if (fixed > 0) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`✅ TI: Fixed ${fixed} brand placeholders`);
} else {
  console.log('✅ TI: No brand placeholders found');
}
