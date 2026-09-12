/**
 * 修复cincon品牌产品中alternativeParts的comparison格式
 * 将对比信息转换为使用=>格式的字符串
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

console.log('开始修复alternativeParts comparison格式...\n');

let fixedCount = 0;

// 遍历所有分类和产品
productsData.categories.forEach(category => {
  if (category.products && Array.isArray(category.products)) {
    category.products.forEach(product => {
      const partNumber = product.partNumber;
      
      // 检查并修复 alternativeParts
      if (product.alternativeParts && product.alternativeParts.length > 0) {
        product.alternativeParts.forEach((alt, index) => {
          // 检查comparison是否包含规格对比（包含:或vs等）
          if (alt.comparison && alt.specifications) {
            // 构建新的comparison格式
            const specs = alt.specifications;
            let specComparisons = [];
            
            for (const [key, value] of Object.entries(specs)) {
              if (value.includes('vs') || value.includes('=>')) {
                specComparisons.push(`${key}: ${value}`);
              }
            }
            
            // 如果原comparison没有使用=>格式，则更新
            if (!alt.comparison.includes('=>') && specComparisons.length > 0) {
              console.log(`修复 ${partNumber} 的 alternativeParts[${index}] comparison格式`);
              
              // 保留原有的描述，添加规格对比
              const originalDesc = alt.comparison.split('.')[0]; // 取第一句话
              alt.comparison = `${originalDesc}. Specifications => ${specComparisons.join('; ')}`;
              fixedCount++;
            }
          }
        });
      }
    });
  }
});

console.log(`\n修复统计: ${fixedCount} 个comparison格式已更新`);

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('✅ 产品数据已保存到文件');
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}

console.log('\n修复完成！');
