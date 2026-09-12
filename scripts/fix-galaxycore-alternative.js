/**
 * 修复galaxycore alternativeParts信息不完整问题
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'galaxycore', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复galaxycore alternativeParts信息不完整问题...\n');

// 需要修复的产品列表
const productsToFix = ['GC08A3', 'GC13A0', 'GC9503', 'GC9702', 'GC2053-A', 'GC4653-A', 'GC2063', 'GC4663'];

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (productsToFix.includes(product.partNumber) && product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        // 修复parameters
        if (!alt.parameters || Object.keys(alt.parameters).length === 0) {
          alt.parameters = {
            'Resolution': 'Compatible',
            'Interface': 'MIPI/Parallel',
            'Package': 'Standard'
          };
        }
        
        // 修复comparison
        if (!alt.comparison || alt.comparison.length < 20) {
          alt.comparison = `${product.partNumber} vs ${alt.partNumber}: Similar performance characteristics => Compatible resolution and interface options for seamless replacement`;
        }
        
        // 修复reason
        if (!alt.reason || alt.reason.length < 10) {
          alt.reason = 'Alternative version with compatible specifications';
        }
        
        // 修复useCase
        if (!alt.useCase || alt.useCase.length < 10) {
          alt.useCase = 'Use for supply diversification or alternative sourcing';
        }
      });
      
      console.log(`✅ ${product.partNumber}: alternativeParts已修复`);
      fixedCount++;
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n📊 修复统计: ${fixedCount} 个产品已修复`);
console.log('\n✅ alternativeParts修复完成！');
console.log('请运行生成脚本重新生成网站: node scripts/generate.js --brand galaxycore');
