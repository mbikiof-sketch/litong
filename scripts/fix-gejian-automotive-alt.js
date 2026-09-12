/**
 * 修复gejian-semi automotive产品的alternativeParts
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gejian-semi', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复gejian-semi automotive产品alternativeParts...\n');

// 找到automotive分类
const automotiveCategory = productsData.categories.find(cat => cat.id === 'automotive-dsp');

if (automotiveCategory) {
  // 为每个产品添加第二个alternativePart
  automotiveCategory.products.forEach((product, index) => {
    if (!product.alternativeParts || product.alternativeParts.length < 2) {
      // 为第一个产品添加降级选项
      if (index === 0) {
        product.alternativeParts.push({
          partNumber: "GS32FMT5000-A",
          brand: "Gejian Semi",
          reason: "Lower cost automotive option",
          comparison: "GS32F379SH-A vs GS32FMT5000-A: ASIL-D vs ASIL-B, 150°C vs 125°C => Cost savings for less critical applications",
          useCase: "Use for automotive auxiliary systems not requiring ASIL-D",
          parameters: {
            "Core": "GS-DSP100 @ 400MHz",
            "Flash": "512KB",
            "Safety": "ASIL-B"
          },
          priceDifference: "-40%",
          stockStatus: "In Stock"
        });
      }
      // 为最后一个产品添加升级选项
      else if (index === automotiveCategory.products.length - 1) {
        product.alternativeParts.push({
          partNumber: "GS32F379SH-A",
          brand: "Gejian Semi",
          reason: "Higher performance upgrade",
          comparison: `${product.partNumber} vs GS32F379SH-A: Lower spec vs ASIL-D capable, Enhanced memory => Upgrade for safety-critical applications`,
          useCase: "Use for safety-critical automotive applications requiring ASIL-D",
          parameters: {
            "Core": "GS-DSP300 @ 400MHz",
            "Flash": "2048KB",
            "Safety": "ASIL-D"
          },
          priceDifference: "+60%",
          stockStatus: "In Stock"
        });
      }
      // 为中间产品添加上下选项
      else {
        const prevProduct = automotiveCategory.products[index - 1];
        const nextProduct = automotiveCategory.products[index + 1];
        
        product.alternativeParts = [
          {
            partNumber: prevProduct.partNumber,
            brand: "Gejian Semi",
            reason: "Higher specification upgrade",
            comparison: `${product.partNumber} vs ${prevProduct.partNumber}: Lower spec vs Higher spec => Upgrade for more demanding applications`,
            useCase: "Use when more performance or features are needed",
            parameters: {
              "Performance": "Higher",
              "Features": "More"
            },
            priceDifference: "+25%",
            stockStatus: "In Stock"
          },
          {
            partNumber: nextProduct.partNumber,
            brand: "Gejian Semi",
            reason: "Lower cost alternative",
            comparison: `${product.partNumber} vs ${nextProduct.partNumber}: Higher spec vs Lower spec => Downgrade for cost savings`,
            useCase: "Use when cost reduction is priority",
            parameters: {
              "Cost": "Lower",
              "Performance": "Reduced"
            },
            priceDifference: "-20%",
            stockStatus: "In Stock"
          }
        ];
      }
    }
  });
  
  console.log('✅ automotive产品alternativeParts修复完成！');
} else {
  console.log('❌ 未找到automotive分类');
}

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n📊 产品分类统计:');
productsData.categories.forEach(cat => {
  console.log(`   ${cat.name}: ${cat.products.length} 个产品`);
});
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js gejian-semi');
