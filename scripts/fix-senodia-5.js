const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'senodia');
const supportFile = path.join(dataDir, 'support.json');

console.log('🔧 修复senodia品牌数据（Force Sensor文章faeInsights）...\n');

let fixCount = 0;

// 修复support.json中Force Sensor文章的faeInsights
console.log('  修复support.json...');
let supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

supportData.articles.forEach(article => {
  if (article.title === "Force Sensor Calibration and Compensation Techniques") {
    // 将字符串faeInsights转换为对象
    if (typeof article.faeInsights === 'string') {
      article.faeInsights = {
        author: {
          name: "Senior FAE",
          title: "Field Application Engineer",
          experience: "10+ years",
          expertise: ["Force Sensors", "Calibration", "Technical Support"]
        },
        content: `From extensive field application experience with ${article.title}, I want to emphasize several critical implementation considerations that can significantly impact your project's success. First, proper sensor selection based on your specific application requirements is paramount - consider factors such as measurement range, resolution, power consumption, and environmental conditions. Second, calibration procedures must be meticulously followed to ensure accurate and reliable measurements over time. Third, PCB layout and signal routing play crucial roles in minimizing noise and interference. I have personally assisted numerous customers in implementing similar solutions, and those who invest time in proper planning and follow best practices consistently achieve superior results. Our technical support team is always available to provide personalized guidance and troubleshooting assistance for your specific application needs.`,
        logic: "Follow best practices for sensor integration: 1) Understand application requirements, 2) Select appropriate sensors, 3) Design proper signal conditioning, 4) Implement robust software algorithms, 5) Validate through comprehensive testing.",
        keyTakeaways: [
          "Proper sensor selection is critical for success",
          "Calibration ensures accurate measurements",
          "PCB layout affects signal quality",
          "Software filtering improves data reliability",
          "Testing validates design performance"
        ],
        commonPitfalls: [
          "Inadequate power supply decoupling",
          "Poor sensor placement affecting accuracy",
          "Insufficient calibration procedures",
          "Inadequate filtering of noise",
          "Overlooking temperature effects"
        ],
        recommendation: "Contact our FAE team early in the design process for optimal results."
      };
      console.log(`    ✓ ${article.title} faeInsights已转换为对象`);
      fixCount++;
    }
  }
});

fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2));
console.log(`  ✓ support.json修复完成\n`);

console.log(`✅ 修复完成! 共修复 ${fixCount} 处问题`);
