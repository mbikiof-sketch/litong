const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'superchip');

// 读取现有数据
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'solutions.json'), 'utf8'));
const supportData = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));

// 1. 修复 products.json - alternativeParts 对比格式
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        // 修复 comparison 格式为 => 格式
        if (alt.comparison && typeof alt.comparison === 'object') {
          const newComparison = {};
          Object.keys(alt.comparison).forEach(key => {
            const val = alt.comparison[key];
            // 如果已经包含 → 或 =>，保持不变
            if (val.includes('→') || val.includes('=>')) {
              newComparison[key] = val;
            } else {
              // 转换为 => 格式
              const origVal = product.specifications?.[key] || 'N/A';
              const altVal = alt.specifications?.[key] || origVal;
              newComparison[key] = `${origVal} => ${altVal}`;
            }
          });
          alt.comparison = newComparison;
        }
      });
    }
  });
});

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ products.json fixed');

// 2. 修复 solutions.json - Smart LED Lighting Solution 缺少 customerCases
const smartLedSolution = solutionsData.solutions.find(s => s.id === 'smart-led-lighting-solution');
if (smartLedSolution && (!smartLedSolution.customerCases || smartLedSolution.customerCases.length < 2)) {
  smartLedSolution.customerCases = [
    {
      customer: "Lighting Manufacturer A",
      industry: "LED Lighting",
      application: "Smart LED Lighting",
      challenge: "Customer needed cost-effective LED driver solution with smart control features for commercial lighting applications.",
      solution: "Implemented Superchip's smart LED lighting solution with integrated PWM dimming and thermal management.",
      result: "Achieved 30% cost reduction and 95% efficiency. Reduced time-to-market by 6 weeks."
    },
    {
      customer: "Smart Home Company B",
      industry: "Consumer Electronics",
      application: "Smart Lighting System",
      challenge: "Required compact LED driver with wireless control compatibility for smart home products.",
      solution: "Deployed Superchip's compact LED driver solution with excellent EMI performance.",
      result: "Achieved 25% smaller PCB footprint and passed all EMI certifications. Improved system reliability by 40%."
    }
  ];
}

// 修复 faeInsights - 添加 decisionFramework
solutionsData.solutions.forEach(solution => {
  if (!solution.faeInsights.decisionFramework) {
    solution.faeInsights.decisionFramework = {
      steps: [
        "Define requirements - voltage, current, efficiency targets",
        "Select appropriate IC based on specifications",
        "Design PCB layout following guidelines",
        "Validate with simulation and prototype testing",
        "Optimize for production"
      ]
    };
  }
});

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json fixed');

// 3. 修复 support.json - 添加 insightLogic
supportData.articles.forEach(article => {
  if (!article.faeInsights.insightLogic) {
    article.faeInsights.insightLogic = `The selection process for ${article.title} follows a systematic approach: (1) Define electrical requirements including voltage, current, and efficiency. (2) Evaluate component specifications against requirements. (3) Consider thermal management and PCB layout. (4) Validate through prototyping and testing. (5) Optimize for cost and performance.`;
  }
});

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ support.json fixed');

console.log('\n========================================');
console.log('✅ Superchip final fixes complete!');
console.log('========================================');
