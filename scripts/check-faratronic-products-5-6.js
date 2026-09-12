/**
 * 检查Faratronic产品分类的第5、6个产品
 * 用于识别编造的产品信息
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'faratronic', 'products.json');

// 读取产品数据
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔍 检查Faratronic产品分类的第5、6个产品...\n');

// 检查每个分类
productsData.categories.forEach((category, catIdx) => {
  console.log(`\n📁 分类: ${category.name} (${category.id})`);
  console.log(`   产品数量: ${category.products.length}`);
  
  if (category.products.length >= 6) {
    // 显示第5、6个产品
    const product5 = category.products[4];
    const product6 = category.products[5];
    
    console.log(`\n   第5个产品:`);
    console.log(`      型号: ${product5.partNumber}`);
    console.log(`      名称: ${product5.name}`);
    
    console.log(`\n   第6个产品:`);
    console.log(`      型号: ${product6.partNumber}`);
    console.log(`      名称: ${product6.name}`);
    
    // 检查是否可能是编造的产品
    const fakePatterns = [
      /^FAR-/i,
      /^CBB21\s+\d+J400V$/i,
      /^(MKP|C3B)-.*\d+n?F-\d+V$/i
    ];
    
    const isProduct5Fake = fakePatterns.some(pattern => pattern.test(product5.partNumber));
    const isProduct6Fake = fakePatterns.some(pattern => pattern.test(product6.partNumber));
    
    if (isProduct5Fake || isProduct6Fake) {
      console.log(`\n   ⚠️ 警告: 发现可能的编造产品!`);
      if (isProduct5Fake) console.log(`      - 第5个产品 ${product5.partNumber} 可能是编造的`);
      if (isProduct6Fake) console.log(`      - 第6个产品 ${product6.partNumber} 可能是编造的`);
    }
  } else {
    console.log(`   ❌ 产品数量不足6个，需要添加更多产品`);
  }
});

console.log('\n✅ 检查完成');
