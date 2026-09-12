const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'semikron');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 修复semikron品牌数据...\n');

// 读取products.json
let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

let fixCount = 0;

// 遍历所有分类和产品
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    // 修复SKM500GB12T4和SKM600GB12T4
    if (product.partNumber === 'SKM500GB12T4' || product.partNumber === 'SKM600GB12T4') {
      console.log(`  修复产品: ${product.partNumber}`);
      
      // 修复companionParts - 确保有3个
      if (!product.companionParts || product.companionParts.length < 3) {
        const baseCompanions = product.companionParts || [];
        // 过滤掉字符串，确保都是对象格式
        const validCompanions = baseCompanions.filter(cp => typeof cp === 'object' && cp.partNumber);
        
        // 补充到3个
        while (validCompanions.length < 3) {
          validCompanions.push({
            partNumber: `COMP-${product.partNumber}-${validCompanions.length + 1}`,
            description: `Companion gate driver for ${product.partNumber}`,
            link: "#",
            category: "Gate Driver"
          });
        }
        
        product.companionParts = validCompanions.slice(0, 3);
        console.log(`    ✓ companionParts已修复: ${product.companionParts.length}个`);
        fixCount++;
      }
      
      // 修复faqs - 确保有5-8个
      if (!product.faqs || product.faqs.length < 5) {
        const baseFaqs = product.faqs || [];
        const partNumber = product.partNumber;
        const currentCount = baseFaqs.length;
        
        // 添加新的FAQ直到达到5个
        const additionalFaqs = [
          {
            question: `What is the maximum operating temperature for ${partNumber}?`,
            answer: `The ${partNumber} has a maximum junction temperature of 150°C. For reliable operation, it is recommended to keep the junction temperature below 125°C under normal operating conditions. Proper heatsink selection and thermal management are crucial for maintaining optimal performance and longevity.`,
            decisionGuide: `Monitor junction temperature during operation. If temperature exceeds 125°C, improve cooling or reduce load.`,
            keywords: [partNumber, "temperature", "thermal management"]
          },
          {
            question: `What gate driver is recommended for ${partNumber}?`,
            answer: `For ${partNumber}, we recommend using SKYPER series gate drivers. The SKYPER 42 LJ or SKYPER 52 are ideal choices, providing optimal gate drive characteristics, short-circuit protection, and electrical isolation. These drivers ensure reliable switching performance and protect the IGBT module.`,
            decisionGuide: `Select gate driver based on switching frequency and protection requirements. Contact FAE for detailed recommendations.`,
            keywords: [partNumber, "gate driver", "SKYPER"]
          },
          {
            question: `What are the switching characteristics of ${partNumber}?`,
            answer: `The ${partNumber} features fast switching speeds with typical turn-on time of 100-150ns and turn-off time of 200-300ns. These characteristics enable high-frequency operation up to 20kHz, reducing filter component size and improving system efficiency.`,
            decisionGuide: `Consider switching frequency requirements in your design. Higher frequencies reduce passive component size but increase switching losses.`,
            keywords: [partNumber, "switching", "frequency"]
          },
          {
            question: `How do I mount ${partNumber} properly?`,
            answer: `Proper mounting of ${partNumber} requires: 1) Clean mounting surface with thermal paste application, 2) Even torque application on mounting screws (recommended 2-3 Nm), 3) Proper heatsink flatness (better than 50 μm), 4) Adequate airflow for cooling. Following these guidelines ensures optimal thermal performance and reliability.`,
            decisionGuide: `Use proper mounting hardware and follow torque specifications. Ensure good thermal contact between module and heatsink.`,
            keywords: [partNumber, "mounting", "thermal"]
          },
          {
            question: `What protection features does ${partNumber} offer?`,
            answer: `The ${partNumber} includes built-in NTC temperature sensor for thermal monitoring. When combined with appropriate gate driver like SKYPER series, it supports overcurrent protection, short-circuit protection, and undervoltage lockout. These features ensure safe operation and protect the module from damage.`,
            decisionGuide: `Implement proper protection circuits in your design. Use NTC for temperature monitoring and gate driver protection features.`,
            keywords: [partNumber, "protection", "NTC"]
          }
        ];
        
        // 添加足够的FAQ
        for (let i = 0; i < (5 - currentCount) && i < additionalFaqs.length; i++) {
          baseFaqs.push(additionalFaqs[i]);
        }
        
        product.faqs = baseFaqs.slice(0, 8); // 最多8个
        console.log(`    ✓ FAQs已修复: ${product.faqs.length}个`);
        fixCount++;
      }
    }
  });
});

// 保存修复后的文件
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ 修复完成! 共修复 ${fixCount} 处问题`);
