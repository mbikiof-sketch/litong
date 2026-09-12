const fs = require('fs');
const path = require('path');

// 读取solutions.json
const solutionsPath = path.join(__dirname, 'data', 'vanchip', 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutionsData.solutions.forEach(solution => {
  if (solution.faeInsights && solution.faeInsights.insight) {
    const insightLength = solution.faeInsights.insight.length;
    console.log(`${solution.id}: insight length = ${insightLength}`);
    if (insightLength < 300) {
      console.log(`  ⚠️ 长度不足(需要≥300)`);
    } else {
      console.log(`  ✅ 长度符合要求`);
    }
  } else {
    console.log(`${solution.id}: 没有faeInsights.insight字段`);
  }
});
