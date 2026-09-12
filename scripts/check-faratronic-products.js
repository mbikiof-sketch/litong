#!/usr/bin/env node
/**
 * 检查 Faratronic 品牌所有产品分类的第3、4个产品
 */

const fs = require('fs');
const path = require('path');

const brand = 'faratronic';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`🔍 检查 Faratronic 品牌所有产品分类的第3、4个产品`);
console.log('=' .repeat(80));

// 读取数据文件
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 检查每个分类
productsData.categories.forEach((category, catIdx) => {
  console.log(`\n📁 分类: ${category.name} (${category.id})`);
  console.log(`   产品数量: ${category.products.length}`);
  
  if (category.products.length >= 6) {
    // 显示第3、4个产品
    const product3 = category.products[2];
    const product4 = category.products[3];
    
    console.log(`\n   第3个产品:`);
    console.log(`      型号: ${product3.partNumber}`);
    console.log(`      名称: ${product3.name}`);
    
    console.log(`\n   第4个产品:`);
    console.log(`      型号: ${product4.partNumber}`);
    console.log(`      名称: ${product4.name}`);
    
    // 检查是否可能是编造的产品
    const fakePatterns = [
      /^FAR-/i,
      /^CBB21\s+\d+J400V$/i,
      /^(MKP|C3B)-.*\d+n?F-\d+V$/i
    ];
    
    const isProduct3Fake = fakePatterns.some(pattern => pattern.test(product3.partNumber));
    const isProduct4Fake = fakePatterns.some(pattern => pattern.test(product4.partNumber));
    
    if (isProduct3Fake || isProduct4Fake) {
      console.log(`\n   ⚠️ 警告: 发现可能的编造产品!`);
      if (isProduct3Fake) console.log(`      - 第3个产品 ${product3.partNumber} 可能是编造的`);
      if (isProduct4Fake) console.log(`      - 第4个产品 ${product4.partNumber} 可能是编造的`);
    }
  } else {
    console.log(`   ❌ 产品数量不足6个，需要添加更多产品`);
  }
});

console.log('\n' + '=' .repeat(80));
