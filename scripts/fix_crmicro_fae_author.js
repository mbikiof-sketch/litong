#!/usr/bin/env node
/**
 * 修复 CR Micro 产品 faeReview.author 字段格式
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'crmicro');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 CR Micro FAE Author 字段');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 遍历所有分类和产品
for (const category of productsData.categories) {
  console.log(`📦 检查 ${category.name}...`);
  let fixedCount = 0;
  
  for (const product of category.products) {
    if (product.faeReview && product.faeReview.author) {
      // 如果 author 是字符串，转换为对象
      if (typeof product.faeReview.author === 'string') {
        const authorName = product.faeReview.author;
        product.faeReview.author = {
          name: authorName,
          title: "Senior FAE",
          experience: "10+ years"
        };
        fixedCount++;
      }
      // 如果 author 是对象但没有 name 字段
      else if (typeof product.faeReview.author === 'object' && !product.faeReview.author.name) {
        product.faeReview.author.name = "LiTong FAE";
        product.faeReview.author.title = product.faeReview.author.title || "Senior FAE";
        product.faeReview.author.experience = product.faeReview.author.experience || "10+ years";
        fixedCount++;
      }
    }
  }
  
  if (fixedCount > 0) {
    console.log(`  ✅ 修复了 ${fixedCount} 个产品的 author 字段`);
  } else {
    console.log(`  ✅ 无需修复`);
  }
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 CR Micro FAE Author 字段修复完成！');
console.log('========================================');
