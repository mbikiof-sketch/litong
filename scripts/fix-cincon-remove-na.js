/**
 * 删除cincon品牌产品specifications中的N/A值
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'cincon', 'products.json');

// 读取产品数据
let productsData;
try {
  const fileContent = fs.readFileSync(productsFilePath, 'utf8');
  productsData = JSON.parse(fileContent);
  console.log('成功读取cincon产品数据文件\n');
} catch (error) {
  console.error('读取产品数据文件失败:', error.message);
  process.exit(1);
}

console.log('开始删除specifications中的N/A值...\n');

let removedCount = 0;

// 遍历所有分类
productsData.categories.forEach(category => {
  if (category.products && Array.isArray(category.products)) {
    category.products.forEach(product => {
      if (product.specifications) {
        // 删除值为"N/A"的键
        Object.keys(product.specifications).forEach(key => {
          if (product.specifications[key] === 'N/A') {
            delete product.specifications[key];
            removedCount++;
            console.log(`删除 ${product.partNumber} 的 ${key}: N/A`);
          }
        });
      }
    });
  }
});

console.log(`\n总共删除了 ${removedCount} 个N/A值`);

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('\n✅ 产品数据已保存到文件');
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}

console.log('\n修复完成！');
