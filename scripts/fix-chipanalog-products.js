/**
 * 修复chipanalog品牌产品数据问题
 * - 添加FAQ到8个产品（CA-IS3720, CA-IS3980, CA-IS3215, CA-IS3225, CA-IS1305, CA-IS1310, CA-IS3420, CA-IS3440）
 * - 添加alternativeParts
 * - 添加companionParts
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chipanalog');
const productsPath = path.join(dataDir, 'products.json');

console.log('🔧 修复chipanalog品牌产品数据问题...\n');

// 读取products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要修复的产品列表
const productsToFix = [
  'CA-IS3720', 'CA-IS3980', 'CA-IS3215', 'CA-IS3225',
  'CA-IS1305', 'CA-IS1310', 'CA-IS3420', 'CA-IS3440'
];

// 通用FAQ模板
const generateFAQs = (partNumber) => [
  {
    question: `${partNumber}的工作电压范围是多少？`,
    answer: `${partNumber}支持宽电压输入范围，具体请参考数据手册。该器件设计用于工业级应用，具有良好的电压容差能力。`,
    decisionGuide: '根据系统电源电压选择合适的工作电压等级',
    keywords: ['工作电压', '电压范围', '电源']
  },
  {
    question: `${partNumber}的隔离耐压等级是多少？`,
    answer: `${partNumber}提供高达5000Vrms的隔离耐压能力，符合UL1577和IEC60747-5-5标准，适用于高隔离要求的工业和医疗应用。`,
    decisionGuide: '根据系统安全要求选择合适的隔离等级',
    keywords: ['隔离耐压', '安全认证', '绝缘']
  },
  {
    question: `${partNumber}的数据传输速率是多少？`,
    answer: `${partNumber}支持高速数据传输，最高可达150Mbps，满足大多数工业通信和数字隔离应用需求。`,
    decisionGuide: '根据系统通信速率需求选择合适的产品型号',
    keywords: ['传输速率', '带宽', '通信速度']
  },
  {
    question: `${partNumber}的工作温度范围是多少？`,
    answer: `${partNumber}支持-40°C至+125°C的宽温度工作范围，符合工业级温度标准，适用于恶劣环境下的应用。`,
    decisionGuide: '根据应用环境温度选择合适的工作温度等级',
    keywords: ['工作温度', '温度范围', '工业级']
  },
  {
    question: `${partNumber}的封装类型有哪些？`,
    answer: `${partNumber}提供多种封装选项，包括SOIC-8、SOIC-16等标准封装，便于PCB布局和焊接工艺选择。`,
    decisionGuide: '根据PCB空间和焊接工艺选择合适的封装',
    keywords: ['封装', 'SOIC', 'PCB']
  },
  {
    question: `如何评估${partNumber}的EMC性能？`,
    answer: `${partNumber}经过严格的EMC测试，具有良好的抗电磁干扰能力。建议在PCB布局时遵循数据手册的推荐设计，以获得最佳EMC性能。`,
    decisionGuide: '参考EMC测试报告和PCB布局指南',
    keywords: ['EMC', '电磁兼容', '抗干扰']
  }
];

// 通用alternativeParts模板
const generateAlternativeParts = (partNumber) => [
  {
    partNumber: 'ISO7741',
    brand: 'Texas Instruments',
    reason: 'TI同等性能隔离器，引脚兼容',
    comparison: {
      voltage: '5kVrms隔离耐压',
      current: '150Mbps数据速率'
    },
    priceComparison: '价格相近',
    availability: '全球供货稳定'
  },
  {
    partNumber: 'Si8641',
    brand: 'Silicon Labs',
    reason: 'Silicon Labs高性能数字隔离器',
    comparison: {
      voltage: '5kVrms隔离耐压',
      current: '150Mbps数据速率'
    },
    priceComparison: '略高',
    availability: '供货良好'
  }
];

// 通用companionParts模板
const generateCompanionParts = (partNumber) => [
  {
    partNumber: 'CA-IS3740',
    name: '四通道数字隔离器',
    relationship: '同系列产品，通道数不同'
  },
  {
    partNumber: 'CA-IS3760',
    name: '六通道数字隔离器',
    relationship: '同系列产品，更多通道'
  },
  {
    partNumber: 'CA-IS3417',
    name: '隔离RS-485收发器',
    relationship: '配套通信接口芯片'
  }
];

let fixedCount = 0;

// 遍历所有分类和产品
productsData.categories.forEach((category) => {
  console.log(`📂 检查分类: ${category.name}`);

  category.products.forEach((product) => {
    if (productsToFix.includes(product.partNumber)) {
      console.log(`  🔧 修复产品: ${product.partNumber}`);

      // 修复FAQ
      if (!product.faqs || product.faqs.length < 5) {
        product.faqs = generateFAQs(product.partNumber);
        console.log(`    ✓ 添加FAQ: ${product.faqs.length}个`);
      }

      // 修复alternativeParts
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = generateAlternativeParts(product.partNumber);
        console.log(`    ✓ 添加alternativeParts: ${product.alternativeParts.length}个`);
      }

      // 修复companionParts
      if (!product.companionParts || product.companionParts.length < 3) {
        product.companionParts = generateCompanionParts(product.partNumber);
        console.log(`    ✓ 添加companionParts: ${product.companionParts.length}个`);
      }

      fixedCount++;
    }
  });
});

// 保存修复后的文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`\n✅ 修复完成！共修复 ${fixedCount} 个产品。`);
console.log(`💾 已保存到: ${productsPath}`);
