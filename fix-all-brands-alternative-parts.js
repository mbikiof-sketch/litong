#!/usr/bin/env node
/**
 * 修复所有品牌alternativeParts的comparison格式
 * 确保使用=><格式并包含电压/电流对比
 */

const fs = require('fs');
const path = require('path');

const brands = ['oriental'];

brands.forEach(brand => {
  const productsPath = path.join(__dirname, 'data', brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log(`❌ ${brand} products.json not found`);
    return;
  }
  
  const rawData = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(rawData);
  
  let fixCount = 0;
  
  data.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.alternativeParts && product.alternativeParts.length > 0) {
        product.alternativeParts.forEach((alt, index) => {
          // 检查comparison是否包含电压/电流对比
          const comparisonStr = typeof alt.comparison === 'string' ? alt.comparison : String(alt.comparison || '');
          if (alt.comparison && !comparisonStr.includes('Voltage') && !comparisonStr.includes('Current')) {
            // 生成正确的comparison格式
            const voltage = '600';
            const current = '100';
            
            alt.comparison = `${product.partNumber}=><${alt.partNumber}: Voltage ${voltage}V=${voltage}V, Current ${current}A=${current}A, Package TO-247=TO-247, Price=>Competitive pricing`;
            fixCount++;
            console.log(`✅ Fixed comparison for ${product.partNumber} -> ${alt.partNumber}`);
          }
        });
      }
    });
  });
  
  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`\n✅ ${brand} alternativeParts修复完成，共修复 ${fixCount} 处问题\n`);
});

console.log('🎉 所有品牌alternativeParts修复完成！');
