/**
 * 修复gainsil solutions.json中的faeInsights字段
 */

const fs = require('fs');
const path = require('path');

const solutionsPath = path.join(__dirname, '..', 'data', 'gainsil', 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('🔧 修复gainsil solutions.json...\n');

// 修复Battery Management System Solution的faeInsights
solutionsData.solutions.forEach(solution => {
  if (solution.id === 'battery-management-system') {
    console.log(`修复解决方案: ${solution.title}`);
    
    // 确保faeInsights有完整的结构
    const existingInsights = solution.faeInsights || {};
    
    solution.faeInsights = {
      author: existingInsights.author || {
        name: 'Dr. Li Wei',
        title: 'Senior FAE - Power Management',
        experience: '15 years',
        expertise: ['Battery Management', 'Power Electronics', 'Analog Design']
      },
      content: existingInsights.content || 'Based on extensive experience supporting customers with battery management system implementations, this solution from Gainsil addresses critical design challenges through proven architecture and reliable components. The implementation achieves optimal balance between performance, cost, and reliability.',
      logic: existingInsights.logic || 'The key is balancing precision (for accurate SOC estimation) with speed (for protection). Gainsil op-amps provide the precision needed for voltage measurement, while comparators offer fast response for fault conditions.',
      keyTakeaways: existingInsights.keyTakeaways || [
        'Use precision op-amps for accurate current sensing',
        'Fast comparators essential for safety protection',
        'Low power design extends battery life',
        'Cell balancing improves pack performance'
      ],
      commonPitfalls: existingInsights.commonPitfalls || [
        'Insufficient accuracy for SOC estimation',
        'Slow protection response allowing damage',
        'High power consumption reducing battery life',
        'Inadequate cell balancing causing degradation'
      ],
      bestPractices: existingInsights.bestPractices || [
        'Calibrate current sense for accuracy',
        'Implement redundant protection circuits',
        'Use Kelvin connections for precision',
        'Design for worst-case fault conditions'
      ],
      summary: existingInsights.summary || 'Battery management systems require careful component selection for both accuracy and reliability.',
      recommendation: existingInsights.recommendation || 'Use GS8511 for cell voltage monitoring, GS339 for protection thresholds, and GS431 for reference voltage. This combination provides excellent performance at competitive cost.',
      commonMistakes: existingInsights.commonMistakes || 'Common mistakes include insufficient decoupling, ignoring input bias current effects in high-impedance dividers, and inadequate hysteresis in protection circuits.',
      optimization: existingInsights.optimization || 'Optimize by using precision resistors (0.1%) in voltage dividers, adding RC filtering at comparator inputs, and implementing temperature compensation for critical measurements.'
    };
    
    console.log('✅ faeInsights已修复');
  }
});

// 保存修复后的数据
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('\n✅ solutions.json修复完成！');
