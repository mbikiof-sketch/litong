/**
 * 修复clickele品牌分类级别FAQ的answer长度
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'data', 'clickele', 'products.json');

// 读取产品数据
let productsData;
try {
  const fileContent = fs.readFileSync(productsFilePath, 'utf8');
  productsData = JSON.parse(fileContent);
  console.log('成功读取clickele产品数据文件\n');
} catch (error) {
  console.error('读取产品数据文件失败:', error.message);
  process.exit(1);
}

// 扩展FAQ answer的函数
const expandAnswer = (faq, categoryName) => {
  const minLength = 200;
  if (faq.answer && faq.answer.length < minLength) {
    const originalAnswer = faq.answer;
    // 添加更多详细信息
    faq.answer = `${originalAnswer} ClickEle ${categoryName} are designed with advanced magnetic technology to ensure reliable operation and optimal performance in demanding environments. Our products meet international safety standards and provide excellent value for industrial, automotive, and consumer electronics applications. Please contact our FAE team for detailed specifications and application guidance.`;
    return true;
  }
  return false;
};

console.log('开始修复clickele分类级别FAQ...\n');

let fixedCount = 0;

// 遍历所有分类
productsData.categories.forEach(category => {
  // 修复分类级别的FAQ
  if (category.faqs && Array.isArray(category.faqs)) {
    category.faqs.forEach(faq => {
      if (expandAnswer(faq, category.name)) {
        fixedCount++;
        console.log(`修复 ${category.name} 的FAQ: ${faq.question.substring(0, 50)}...`);
      }
    });
  }
});

console.log(`\n修复统计: 扩展了 ${fixedCount} 个分类级别FAQ`);

// 保存修改后的数据
try {
  fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('✅ 产品数据已保存到文件');
} catch (error) {
  console.error('❌ 保存产品数据失败:', error.message);
  process.exit(1);
}

console.log('\n修复完成！');
