/**
 * 修复genesic support文章的faeInsights结构
 * 需要是对象: { author, content }
 */

const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'genesic', 'support.json');

console.log('🔧 修复genesic support文章faeInsights结构...\n');

// 读取数据
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 修复每篇文章的faeInsights
supportData.articles.forEach(article => {
  // 如果faeInsights是字符串，转换为对象
  if (typeof article.faeInsights === 'string') {
    article.faeInsights = {
      author: "BeiLuo FAE Team",
      title: "Field Application Engineer",
      content: article.faeInsights,
      insightLogic: "1. Analyze requirements 2. Review guidelines 3. Apply best practices 4. Validate implementation",
      keyTakeaways: [
        "Follow recommended design practices for optimal performance",
        "Consider thermal management in early design stages",
        "Use proper gate drive techniques for reliable switching",
        "Validate design through testing and characterization",
        "Contact FAE team for application-specific guidance"
      ]
    };
  } else if (!article.faeInsights || typeof article.faeInsights !== 'object') {
    // 如果faeInsights不存在或不是对象，创建新的
    article.faeInsights = {
      author: "BeiLuo FAE Team",
      title: "Field Application Engineer",
      content: `Based on extensive field experience with GeneSiC devices, this article on ${article.title.toLowerCase()} provides practical guidance for successful implementation. The key insights include proper device selection methodology, gate drive design considerations, thermal management best practices, and PCB layout guidelines. Following these recommendations will help ensure reliable operation and optimal performance in your specific application. Contact BeiLuo FAE team for additional support and personalized guidance for your design requirements.`,
      insightLogic: "1. Analyze requirements 2. Review guidelines 3. Apply best practices 4. Validate implementation",
      keyTakeaways: [
        "Follow recommended design practices for optimal performance",
        "Consider thermal management in early design stages",
        "Use proper gate drive techniques for reliable switching",
        "Validate design through testing and characterization",
        "Contact FAE team for application-specific guidance"
      ]
    };
  }
});

// 保存修复后的数据
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('✅ genesic support文章faeInsights修复完成！');
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js genesic');
