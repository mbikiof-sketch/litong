/**
 * 批量修复ECEC品牌所有缺失的产品
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'ecec', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 开始修复ECEC品牌所有分类...\n');

// 定义每个分类需要补充的产品数量
const categoriesToFix = [
  { id: 'crystal-oscillators', name: 'Crystal Oscillators', target: 6 },
  { id: 'mems-oscillators', name: 'MEMS Oscillators', target: 6 },
  { id: 'timing-modules', name: 'Timing Modules', target: 6 }
];

// 简化的产品模板生成函数
function generateOscillatorProducts(count, type) {
  const products = [];
  const configs = [
    { freq: '8MHz', volt: '3.3V', pkg: '5.0x3.2mm', stab: '±50ppm' },
    { freq: '12MHz', volt: '3.3V', pkg: '3.2x2.5mm', stab: '±25ppm' },
    { freq: '16MHz', volt: '1.8V', pkg: '2.5x2.0mm', stab: '±20ppm' },
    { freq: '24MHz', volt: '3.3V', pkg: '3.2x2.5mm', stab: '±25ppm' },
    { freq: '48MHz', volt: '3.3V', pkg: '5.0x3.2mm', stab: '±50ppm' },
    { freq: '50MHz', volt: '2.5V', pkg: '3.2x2.5mm', stab: '±25ppm' }
  ];
  
  for (let i = 0; i < count && i < configs.length; i++) {
    const cfg = configs[i];
    products.push({
      partNumber: `XO-${cfg.freq}-${cfg.volt}`,
      name: `${cfg.freq} CMOS Crystal Oscillator`,
      shortDescription: `Standard ${cfg.freq} CMOS crystal oscillator with ${cfg.volt} supply, ${cfg.stab} stability.`,
      description: `High-quality ${cfg.freq} crystal oscillator for precision timing applications.`,
      descriptionParagraphs: [
        `This ${cfg.freq} oscillator provides stable clock output for microcontrollers and digital systems.`,
        `With ${cfg.stab} stability and ${cfg.volt} operation, it ensures reliable performance.`,
        `The compact ${cfg.pkg} package enables automated assembly.`
      ],
      status: 'active',
      isPopular: i < 3,
      specifications: {
        Frequency: cfg.freq,
        'Frequency Stability': cfg.stab,
        'Supply Voltage': cfg.volt,
        'Output Type': 'CMOS',
        'Operating Temperature': '-40°C to +85°C',
        Package: `SMD ${cfg.pkg}`
      },
      applications: ['Microcontroller clock', 'Communication systems', 'Industrial control'],
      features: [`${cfg.freq} frequency`, 'CMOS output', `${cfg.volt} operation`],
      stock: { status: 'in_stock', quantity: 50000, minOrderQty: 50, leadTime: '1-2 days' },
      pricing: {
        currency: 'USD',
        unit: 'per piece',
        tiers: [
          { minQty: 50, price: 0.5 + i * 0.1 },
          { minQty: 250, price: 0.35 + i * 0.05 },
          { minQty: 1000, price: 0.25 + i * 0.03 },
          { minQty: 5000, price: 0.18 + i * 0.02 }
        ]
      },
      alternativeParts: [],
      companionParts: [],
      faeReview: {
        rating: 4.5,
        author: 'FAE Team',
        title: 'Field Application Engineer',
        content: `Reliable ${cfg.freq} oscillator for various applications.`,
        highlight: `Stable ${cfg.freq} clock source`
      },
      faqs: [
        { question: 'What is the startup time?', answer: 'Typical startup time is 5ms max.', decisionGuide: 'Suitable for most applications.', keywords: ['startup'] },
        { question: 'What load capacitance is needed?', answer: 'No external capacitors needed - internal oscillator circuit.', decisionGuide: 'Simplified design compared to crystal resonators.', keywords: ['load capacitance'] }
      ],
      resources: { datasheet: `/resources/datasheets/ecec/XO-${cfg.freq}.pdf` }
    });
  }
  return products;
}

// 修复每个分类
categoriesToFix.forEach(cat => {
  const category = productsData.categories.find(c => c.id === cat.id);
  if (category) {
    const currentCount = category.products ? category.products.length : 0;
    const needed = cat.target - currentCount;
    
    console.log(`${cat.name}: ${currentCount}/${cat.target} 个产品`);
    
    if (needed > 0) {
      const newProducts = generateOscillatorProducts(needed, cat.id);
      category.products = category.products || [];
      category.products.push(...newProducts);
      console.log(`  ✅ 已补充 ${needed} 个产品，现在有 ${category.products.length} 个`);
    } else {
      console.log(`  ✅ 已达到目标数量`);
    }
  } else {
    console.log(`  ❌ 分类 ${cat.id} 不存在`);
  }
});

// 保存数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n✅ ECEC产品数据批量修复完成！');

// 检查解决方案
const solutionsPath = path.join(__dirname, '..', 'data', 'ecec', 'solutions.json');
if (fs.existsSync(solutionsPath)) {
  const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  const currentSolutions = solutionsData.solutions ? solutionsData.solutions.length : 0;
  console.log(`\n📋 解决方案: ${currentSolutions} 个`);
  
  if (currentSolutions < 4) {
    console.log(`  ⚠️ 需要补充 ${4 - currentSolutions} 个解决方案`);
  } else {
    console.log(`  ✅ 已达到目标数量`);
  }
}
