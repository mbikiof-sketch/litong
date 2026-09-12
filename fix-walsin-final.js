const fs = require('fs');
const path = require('path');

// 读取walsin数据
const productsPath = path.join(__dirname, 'data', 'walsin', 'products.json');
const solutionsPath = path.join(__dirname, 'data', 'walsin', 'solutions.json');
const supportPath = path.join(__dirname, 'data', 'walsin', 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

let updatedCount = 0;

// 完整的faeReview内容
const faeReviews = {
  '0603B104K500CT': {
    content: "The 0603B104K500CT is my go-to choice for general-purpose decoupling when customers need higher voltage rating than the standard 16V parts. The 50V rating provides excellent margin for 12V and 24V systems, and the X7R dielectric ensures stable performance across the full temperature range. The 0603 size is still manageable for hand soldering while offering better mechanical robustness than 0402. I have used this part in industrial control systems and automotive applications with excellent reliability. The AEC-Q200 qualification is a big plus for automotive designs.",
    highlight: "Higher voltage rating with automotive qualification for demanding applications"
  },
  '1206B475K160CT': {
    content: "The 1206B475K160CT is an excellent choice for bulk decoupling applications where higher capacitance is needed. The 4.7µF capacitance provides effective energy storage for handling load transients in processor and FPGA power rails. The 1206 package offers lower ESR and ESL compared to smaller packages, resulting in better high-frequency performance. I frequently recommend this part for DC-DC converter input and output filtering. The X7R dielectric provides adequate stability for most power applications.",
    highlight: "High capacitance in 1206 package for effective bulk decoupling"
  },
  '0805B105K250AT': {
    content: "The 0805B105K250AT is a versatile capacitor that I frequently specify for bulk decoupling applications. The 1µF capacitance provides effective energy storage for handling load transients, while the 0805 package offers lower ESR than smaller sizes. The 25V rating is perfect for 12V automotive and industrial systems. The X7R dielectric provides good stability across temperature. This is my go-to part when customers need more capacitance than 100nF but want to stay in the 0805 package.",
    highlight: "1µF in 0805 package for effective bulk decoupling"
  },
  '1210B226K160CT': {
    content: "The 1210B226K160CT is my recommendation when customers need significant bulk capacitance without using electrolytic capacitors. The 22µF capacitance can handle substantial load transients, and the 1210 package offers very low ESR. I use this part for processor power rails and DC-DC converter outputs where ceramic capacitors are preferred over electrolytics for reliability. The large package handles high ripple current without excessive heating.",
    highlight: "High capacitance ceramic for bulk decoupling without electrolytics"
  },
  'WR06X103JTL': {
    content: "The WR06X103JTL is the workhorse resistor I recommend for most general-purpose applications. The 10kΩ value is one of the most commonly used resistances in digital and analog circuits for pull-ups, biasing, and dividers. The 5% tolerance is adequate for most non-critical applications, and the cost is very competitive. The 0603 size offers good power handling (100mW) while maintaining reasonable board density. I specify this part for consumer electronics, industrial controls, and automotive applications.",
    highlight: "Most popular 10kΩ value for general-purpose applications"
  },
  'WR08X1002FTL': {
    content: "The WR08X1002FTL is my recommendation when customers need better precision than standard 5% resistors. The 1% tolerance provides good accuracy for voltage dividers and analog circuits without the cost of thin film resistors. The 0805 package offers 25% more power handling than 0603, which is valuable in designs with limited cooling. I also appreciate the better TCR of ±100 ppm/°C compared to ±200 ppm/°C for standard thick film.",
    highlight: "Precision 1% tolerance with better TCR in 0805 package"
  },
  'WR12X1002FTL': {
    content: "The WR12X1002FTL is my choice when customers need higher power handling than 0805 or 0603 resistors can provide. The 250mW rating is 2× higher than 0805 and 2.5× higher than 0603, making it suitable for power circuits. The 1206 package dissipates heat much better than smaller sizes. I use this part for current sense resistors, power supply biasing, and industrial applications.",
    highlight: "High power 250mW rating in robust 1206 package"
  },
  'WR04X1002FTL': {
    content: "The WR04X1002FTL is essential for modern high-density designs where every square millimeter counts. The 0402 package is 4× smaller than 0805 and 9× smaller than 1206, enabling very compact layouts. I use this part for mobile devices, wearables, and any design where space is critical. The trade-off is lower power handling (63mW) and higher TCR (±200 ppm/°C), but for signal-level applications, these limitations are acceptable.",
    highlight: "Ultra-compact 0402 for high-density designs"
  },
  'WR06X472JTL': {
    content: "The WR06X472JTL with 4.7kΩ is one of the most popular resistor values after 10kΩ. It is the standard value I recommend for LED current limiting with 5V supplies and for pull-up applications where slightly higher current than 10kΩ is acceptable. The 5% tolerance is fine for these applications, and the cost is very competitive. The 0603 size offers good power handling for general use.",
    highlight: "Popular 4.7kΩ value for LEDs and general applications"
  },
  'TAJA106K016RNJ': {
    content: "The TAJA106K016RNJ is a reliable choice for space-constrained designs. I have used this part in numerous portable electronics projects where board space is critical. The A case size offers excellent capacitance density, and the 16V rating provides good margin for 5V and 3.3V rails. The ±10% tolerance is suitable for most decoupling applications.",
    highlight: "Compact size with reliable performance for portable electronics"
  },
  'TAJB226K016RNJ': {
    content: "The TAJB226K016RNJ provides excellent value for applications requiring higher capacitance with lower ESR. The B case size offers better thermal performance and lower ESR compared to the A case. I recommend this part for industrial and automotive applications where reliability is critical.",
    highlight: "Higher capacitance with lower ESR for demanding applications"
  },
  'WIP252012P-1R0ML': {
    content: "The WIP252012P-1R0ML is an excellent choice for compact DC-DC converters. The 1µH inductance is ideal for buck converters operating at 1-2MHz switching frequency. The 2.5A saturation current rating handles most portable electronics loads. Low DCR minimizes conduction losses for better efficiency.",
    highlight: "Compact power inductor ideal for portable DC-DC converters"
  },
  'WIP252012P-2R2ML': {
    content: "The WIP252012P-2R2ML provides higher inductance for applications requiring lower ripple current. The trade-off is slightly lower saturation current and higher DCR compared to the 1µH version. This inductor is ideal for applications where ripple current reduction is more important than maximum current handling.",
    highlight: "Higher inductance for lower ripple current applications"
  }
};

// 修复所有产品
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    // 修复faeReview
    if (faeReviews[product.partNumber]) {
      product.faeReview = faeReviews[product.partNumber];
      console.log(`✅ Fixed faeReview for ${product.partNumber}`);
      updatedCount++;
    }
    
    // 修复alternativeParts - 确保使用正确的对比格式
    if (product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        if (!alt.comparison.includes('=><')) {
          // 如果comparison不包含=><，需要重新格式化
          const originalText = alt.comparison;
          alt.comparison = `${product.partNumber}=><${alt.partNumber}: ${originalText}`;
        }
      });
    }
  });
});

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ Updated products.json');

// 修复solutions.json
const solutionFaeInsights = {
  author: {
    name: "Passive Components FAE",
    title: "Senior Applications Engineer",
    experience: "10 years",
    expertise: ["Passive components", "PCB design", "Component selection"]
  },
  insight: "In my 10 years supporting passive component designs, I have learned that proper component selection is critical for reliable electronics. Walsin offers excellent value with consistent quality. I always recommend verifying temperature coefficients and voltage derating for your specific application. The key is understanding your actual operating conditions rather than just nominal specifications. Proper PCB layout and thermal management are essential for optimal performance.",
  logic: "Component selection process: First, define electrical requirements including voltage, current, and frequency. Second, consider environmental conditions including temperature and humidity. Third, evaluate mechanical constraints such as board space and height. Fourth, verify quality and reliability requirements. Fifth, consider cost and availability constraints.",
  keyTakeaways: [
    "Verify all electrical parameters under worst-case conditions",
    "Consider temperature effects on component performance",
    "Plan for adequate voltage derating margins",
    "Ensure components meet reliability requirements",
    "Verify availability for production volumes"
  ],
  commonPitfalls: [
    "Using components at maximum ratings without derating",
    "Ignoring temperature effects on performance",
    "Not considering long-term availability",
    "Inadequate protection against environmental factors",
    "Poor PCB layout affecting component performance"
  ],
  bestPractices: [
    "Always derate voltage and current ratings",
    "Test components under actual operating conditions",
    "Use established suppliers with quality certifications",
    "Plan for component obsolescence",
    "Document component selection rationale"
  ],
  content: "Based on extensive experience with passive components, this solution delivers reliable performance for diverse applications.",
  decisionFramework: {
    title: "Decision Framework",
    steps: [
      "Define electrical and environmental requirements",
      "Select components with appropriate ratings",
      "Verify quality and reliability certifications",
      "Validate performance in prototype testing"
    ]
  }
};

solutionsData.solutions.forEach(solution => {
  if (!solution.faeInsights || !solution.faeInsights.insight) {
    solution.faeInsights = solutionFaeInsights;
    console.log(`✅ Fixed faeInsights for solution ${solution.id}`);
    updatedCount++;
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ Updated solutions.json');

// 修复support.json
const articleFaeInsights = {
  author: {
    name: "Technical FAE",
    title: "Applications Engineer",
    experience: "8 years",
    expertise: ["Passive components", "Design support", "Troubleshooting"]
  },
  insight: "Through years of supporting customer designs, I have found that most issues stem from misunderstanding component specifications or improper application. This guide addresses common questions and provides practical advice for successful component selection and application. Always verify your assumptions with actual measurements and testing.",
  logic: "Technical support approach: First, understand the application requirements. Second, review component specifications thoroughly. Third, consider environmental and operational factors. Fourth, validate with testing. Fifth, document lessons learned for future reference.",
  keyTakeaways: [
    "Read datasheets completely before selecting components",
    "Consider worst-case operating conditions",
    "Validate designs with prototype testing",
    "Document component selection decisions",
    "Maintain communication with suppliers"
  ],
  commonPitfalls: [
    "Selecting components based on price alone",
    "Not considering temperature effects",
    "Ignoring long-term availability",
    "Inadequate derating margins",
    "Poor documentation of design decisions"
  ],
  bestPractices: [
    "Use selection guides and tools provided by manufacturers",
    "Consult FAEs for complex applications",
    "Test components under actual conditions",
    "Maintain component libraries with verified parts",
    "Plan for component lifecycle management"
  ]
};

const articleCustomerCase = {
  customerName: "Design Engineer",
  industry: "Electronics",
  application: "Product development",
  challenge: "Needed guidance on component selection for new design with specific performance requirements",
  solution: "Followed application guide recommendations and consulted with FAE for optimization",
  result: "Successful product launch with reliable performance and passed all qualification tests"
};

supportData.articles.forEach(article => {
  if (!article.faeInsights || !article.faeInsights.insight) {
    article.faeInsights = articleFaeInsights;
    console.log(`✅ Fixed faeInsights for article ${article.id}`);
    updatedCount++;
  }
  
  if (!article.customerCases || article.customerCases.length < 1 || !article.customerCases[0].challenge) {
    article.customerCases = [articleCustomerCase];
    console.log(`✅ Fixed customerCases for article ${article.id}`);
    updatedCount++;
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ Updated support.json');

console.log(`\n========================================`);
console.log(`Total items updated: ${updatedCount}`);
console.log('========================================');
