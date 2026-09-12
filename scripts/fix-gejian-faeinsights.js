/**
 * 修复gejian-semi Solar Inverter Power Solution的faeInsights
 */

const fs = require('fs');
const path = require('path');

const solutionsPath = path.join(__dirname, '..', 'data', 'gejian-semi', 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('🔧 修复 Solar Inverter Power Solution faeInsights...\n');

solutionsData.solutions.forEach(solution => {
  if (solution.id === 'renewable-energy-solution') {
    console.log(`修复解决方案: ${solution.title}`);
    
    if (solution.faeInsights) {
      // 修复content长度不足问题
      solution.faeInsights.content = 'Based on extensive experience supporting customers with solar inverter power solution implementations, this solution from Gejian Semi addresses critical design challenges through proven architecture and reliable components. The implementation achieves optimal balance between performance, cost, and reliability. Our field experience shows that proper implementation of this solution delivers significant improvements in system efficiency and long-term reliability. Key success factors include careful component selection, proper thermal management for outdoor operation, and thorough EMI design validation. I recommend working closely with our FAE team during the design phase to optimize the solution for your specific requirements including power rating, environmental conditions, and grid compliance needs.';
      
      // 添加decisionFramework
      solution.faeInsights.decisionFramework = {
        title: 'Solar Inverter Design Decision Framework',
        steps: [
          'Analyze power requirements and grid connection specifications',
          'Select boost topology (SiC) and inverter topology (IGBT) based on efficiency targets',
          'Design thermal management system with 50% margin for outdoor operation',
          'Implement comprehensive protection including desaturation detection',
          'Design EMI filters early and validate through pre-compliance testing',
          'Optimize PCB layout for minimal stray inductance and proper grounding'
        ]
      };
      
      console.log('  ✅ faeInsights content已修复');
      console.log('  ✅ decisionFramework已添加');
    }
  }
});

// 保存修复后的数据
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));

console.log('\n✅ faeInsights修复完成！');
console.log('请运行生成脚本重新生成网站: node scripts/generate.js --brand gejian-semi');
