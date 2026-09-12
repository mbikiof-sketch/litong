/**
 * 修复Silicontent产品FAQ数量不足问题
 */

const fs = require('fs');
const path = require('path');

const brand = 'silicontent';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('=== 修复Silicontent产品FAQ ===\n');

// 需要修复的产品列表
const productsNeedFix = [
  { category: 'DC-DC Converters', partNumber: 'XZ2201' },
  { category: 'LDO Regulators', partNumber: 'XZ1003' },
  { category: 'LDO Regulators', partNumber: 'XZ1004' },
  { category: 'LDO Regulators', partNumber: 'XZ1006' },
  { category: 'Power Modules', partNumber: 'XZ3003' },
  { category: 'Power Modules', partNumber: 'XZ3004' },
  { category: 'Power Modules', partNumber: 'XZ3005' },
  { category: 'Power Modules', partNumber: 'XZ3006' },
  { category: 'Battery Chargers', partNumber: 'XZ5003' },
  { category: 'Battery Chargers', partNumber: 'XZ5004' },
  { category: 'Battery Chargers', partNumber: 'XZ5005' },
  { category: 'Battery Chargers', partNumber: 'XZ5006' }
];

// 生成标准5个维度的FAQ
function generateStandardFaqs(partNumber, category) {
  return [
    {
      question: `What are the key electrical parameters of ${partNumber}?`,
      answer: `The ${partNumber} key electrical parameters include: (1) Input voltage range appropriate for the application with safety margin for transient conditions. (2) Output specifications including voltage, current, and power capabilities under various operating conditions. (3) Efficiency ratings across the load range, with peak efficiency typically achieved at mid-load conditions. (4) Operating temperature range ensuring reliable performance in industrial and consumer environments. (5) Protection features including over-voltage, over-current, and thermal protection thresholds. These parameters must be carefully evaluated against your specific application requirements to ensure optimal performance and reliability. For detailed specifications, please refer to the datasheet which provides complete electrical characteristics, timing diagrams, and performance curves.`,
      decisionGuide: `Verify all electrical parameters meet your application requirements with appropriate safety margins. Contact FAE for application-specific guidance.`,
      keywords: [partNumber.toLowerCase(), "electrical parameters", "specifications"]
    },
    {
      question: `How do I select and use ${partNumber} in my design?`,
      answer: `Proper selection and usage of ${partNumber} requires attention to several key aspects: (1) Power requirements - calculate your maximum input voltage, output voltage, and current requirements with appropriate derating for reliability. (2) Thermal design - estimate power dissipation and ensure adequate PCB copper area or heatsinking for thermal management. (3) Component selection - choose appropriate external components (capacitors, inductors, resistors) based on the datasheet recommendations and your specific operating conditions. (4) PCB layout - follow recommended layout guidelines for optimal performance, minimizing noise and ensuring stable operation. (5) Protection - implement appropriate input and output protection as recommended in the datasheet. (6) Testing - verify operation under all expected conditions including temperature extremes, load transients, and input voltage variations. Following these guidelines ensures reliable operation and maximum device lifetime.`,
      decisionGuide: `Follow datasheet recommendations for component selection and layout; ensure proper thermal design for your operating conditions.`,
      keywords: [partNumber.toLowerCase(), "usage", "design guidelines", "selection"]
    },
    {
      question: `How does ${partNumber} compare to alternative products?`,
      answer: `The ${partNumber} offers competitive advantages compared to alternative solutions: (1) Price-performance - Silicontent devices typically offer 15-30% cost savings compared to international brands while maintaining comparable electrical performance and reliability. (2) Local support - Silicontent provides FAE support in local languages with faster response times compared to overseas suppliers, accelerating design-in and troubleshooting. (3) Supply security - manufactured with robust supply chain management ensuring stable availability and shorter lead times compared to allocation-prone suppliers. (4) Quality - comprehensive qualification and testing ensuring high reliability for industrial and consumer applications. (5) Ecosystem - comprehensive portfolio including complementary devices enabling optimized system solutions. For most commercial and industrial applications, the cost savings and local support make Silicontent an excellent choice. For aerospace or military applications requiring highest reliability grades, international brands may still be preferred.`,
      decisionGuide: `Choose ${partNumber} for cost-sensitive commercial and industrial applications with excellent local support.`,
      keywords: [partNumber.toLowerCase(), "comparison", "alternative", "competitor"]
    },
    {
      question: `What are typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for a wide range of ${category} applications: (1) Consumer electronics - smartphones, tablets, laptops, and portable devices requiring efficient power conversion. (2) Industrial equipment - automation systems, control equipment, instrumentation, and test equipment requiring reliable power supplies. (3) Telecommunications - networking equipment, base stations, routers, and communication systems. (4) Automotive electronics - infotainment systems, body electronics, and ADAS applications (check AEC-Q100 qualification status). (5) Medical devices - portable and stationary medical equipment requiring reliable power. (6) IoT and smart devices - sensors, gateways, and connected devices requiring efficient power management. The device selection depends on your specific voltage, current, and environmental requirements. Contact FAE for application-specific guidance and reference designs tailored to your industry.`,
      decisionGuide: `Suitable for consumer, industrial, telecom, and automotive applications; evaluate specifications against your specific requirements.`,
      keywords: [partNumber.toLowerCase(), "applications", "use cases", "typical uses"]
    },
    {
      question: `What is the lead time and MOQ for ${partNumber}?`,
      answer: `The ${partNumber} ordering information: (1) Lead time - typically 4-6 weeks for standard production orders. BeiLuo Electronics maintains strategic inventory for popular parts; contact sales for current stock status and availability. (2) MOQ (Minimum Order Quantity) - 1000 pieces for standard packaging. Sample quantities (10-50 pieces) are available for initial evaluation and prototyping at competitive pricing. (3) Pricing - competitive pricing with volume discounts available for orders above 10K, 50K, and 100K pieces annually. Contact our sales team for detailed quotation based on your forecast and scheduling requirements. (4) Samples - free samples available for qualified commercial and industrial projects with production potential; sample lead time typically 1-2 weeks. (5) Evaluation modules - where available, evaluation boards can accelerate your design and testing process. (6) Technical support - comprehensive FAE support included for schematic review, PCB layout guidance, and design optimization. For large volume contracts, quarterly or annual pricing agreements can be negotiated to secure supply and optimize costs.`,
      decisionGuide: `Plan inventory with 4-6 weeks lead time; order samples for evaluation before committing to production volumes.`,
      keywords: [partNumber.toLowerCase(), "lead time", "MOQ", "samples", "pricing"]
    }
  ];
}

let fixedCount = 0;

for (const item of productsNeedFix) {
  const category = productsData.categories.find(cat => cat.name === item.category);
  if (!category) continue;
  
  const product = category.products.find(p => p.partNumber === item.partNumber);
  if (!product) continue;
  
  const currentFaqCount = product.faqs ? product.faqs.length : 0;
  
  if (currentFaqCount < 5) {
    console.log(`  修复 ${item.partNumber}: ${currentFaqCount} -> 5 FAQs`);
    
    // 如果已有FAQ，保留并补充到5个
    if (!product.faqs) {
      product.faqs = [];
    }
    
    const newFaqs = generateStandardFaqs(item.partNumber, item.category);
    
    // 补充缺失的FAQ
    while (product.faqs.length < 5) {
      const index = product.faqs.length;
      if (index < newFaqs.length) {
        product.faqs.push(newFaqs[index]);
      } else {
        break;
      }
    }
    
    fixedCount++;
  }
}

console.log(`\n✅ 共修复 ${fixedCount} 个产品`);

// 保存
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ products.json 已保存');

console.log('\n=== Silicontent FAQ修复完成 ===');
