const fs = require('fs');
const path = require('path');

// 读取数据文件
const solutionsPath = path.join(__dirname, 'data', 'unisplendour', 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('修复 customerCases 字段名...\n');

// 修复solutions.json中的customerCases (需要将results改为result)
solutions.solutions.forEach(sol => {
  if (sol.customerCases && Array.isArray(sol.customerCases)) {
    sol.customerCases.forEach(caseItem => {
      // 将results改为result
      if (caseItem.results && !caseItem.result) {
        caseItem.result = caseItem.results;
        delete caseItem.results;
        console.log(`✅ 修复方案 ${sol.title} 的客户案例 ${caseItem.customerName} 的字段名`);
      }
    });
  }
});

// 保存solutions.json
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));

console.log('\n✅ customerCases 字段名修复完成！');
