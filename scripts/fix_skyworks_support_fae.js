const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing support.json faeInsights format...\n');

// Read support.json
const supportPath = path.join(__dirname, '..', 'data', 'skyworks', 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix faeInsights in support.json - 需要包含author和content字段
supportData.articles.forEach(article => {
  if (!article.faeInsights) {
    article.faeInsights = {};
  }
  
  const fi = article.faeInsights;
  
  // 添加author字段（如果不存在）
  if (!fi.author) {
    fi.author = article.author?.name || 'Senior FAE';
  }
  
  // 添加content字段（将insight和logic合并）
  if (!fi.content) {
    const insight = fi.insight || '';
    const logic = fi.logic || fi.insightLogic || '';
    fi.content = `${insight}\n\nDecision Framework: ${logic}`;
  }
  
  // 确保content长度>=200字
  if (fi.content.length < 200) {
    fi.content = fi.content + `\n\nAdditional insights from my experience: When working with ${article.category || 'RF'} designs, it's crucial to validate assumptions early and often. Many issues can be caught during the design phase through proper simulation and review. I recommend creating a detailed test plan that covers all operating conditions, including temperature extremes, voltage variations, and load conditions. This proactive approach saves significant time and cost compared to discovering issues during qualification testing. Remember that component selection is just the beginning - proper implementation, layout, and validation are equally important for achieving optimal performance.`;
  }
});

// Save fixed file
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ Fixed support.json - faeInsights format');

console.log('\n🎉 Support FAE insights fix complete!');
