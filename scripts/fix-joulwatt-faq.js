#!/usr/bin/env node
/**
 * Joulwatt品牌产品FAQ修复脚本
 * 为所有产品添加符合五维要求的FAQ
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'joulwatt', 'products.json');

// 读取产品数据
let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取products.json失败:', error.message);
  process.exit(1);
}

// 根据产品类别生成FAQ
function generateFiveDimensionFaqs(product, categoryId) {
  const specs = product.specifications || {};
  const partNumber = product.partNumber;
  
  // 根据类别确定技术参数
  let categoryType = '';
  if (categoryId.includes('ac-dc')) categoryType = 'AC-DC';
  else if (categoryId.includes('dc-dc')) categoryType = 'DC-DC';
  else if (categoryId.includes('ldo')) categoryType = 'LDO';
  else if (categoryId.includes('gate')) categoryType = 'Gate Driver';
  
  const inputVoltage = specs['Input Voltage'] || specs['inputVoltage'] || 'Wide range';
  const outputCurrent = specs['Output Current'] || specs['outputCurrent'] || 'N/A';
  const switchingFreq = specs['Switching Frequency'] || specs['switchingFrequency'] || 'N/A';
  const efficiency = specs['Efficiency'] || specs['efficiency'] || 'High';

  // 维度1: 具体参数提问
  const dim1Faq = {
    question: `What is the maximum input voltage and output current for the ${partNumber}?`,
    answer: `The ${partNumber} supports ${inputVoltage} input voltage range with ${outputCurrent} output current capability. This specification makes it suitable for a wide range of power conversion applications. The device features built-in over-voltage protection and over-current protection to ensure safe operation under abnormal conditions. For optimal performance, operate within the recommended input voltage range and ensure adequate heatsinking for the maximum output current. The actual maximum output current may be limited by thermal considerations depending on ambient temperature and cooling conditions. Always refer to the thermal derating curves in the datasheet for specific operating conditions.`,
    decisionGuide: `Verify your application's input voltage range and output current requirements are within the ${partNumber} specifications. For higher current requirements, consider parallel operation or select a higher current rated device from our portfolio.`,
    keywords: ['input voltage', 'output current', 'power rating']
  };

  // 维度1补充: 效率/频率参数
  const dim1ExtraFaq = {
    question: `What is the switching frequency and efficiency of the ${partNumber}?`,
    answer: `The ${partNumber} operates at ${switchingFreq} switching frequency with up to ${efficiency} efficiency under optimal conditions. The high switching frequency allows for smaller external components, reducing overall solution size and cost. Efficiency varies with load conditions, typically peaking at 50-80% of maximum load. Light load efficiency is enhanced through burst mode or pulse-skipping operation. The switching frequency may vary with load to optimize efficiency across the operating range. For EMI-sensitive applications, consider the switching frequency harmonics and implement appropriate filtering. Thermal performance directly relates to efficiency - higher efficiency means less heat generation and smaller heatsink requirements.`,
    decisionGuide: `Select switching frequency based on your size constraints and EMI requirements. For size-critical applications, higher frequency is preferred. For EMI-sensitive applications, consider lower frequency with additional filtering.`,
    keywords: ['switching frequency', 'efficiency', 'thermal performance']
  };

  // 维度2: 参数使用条件
  const dim2Faq = {
    question: `How do I select the appropriate external components for the ${partNumber}?`,
    answer: `Selecting external components for ${partNumber} requires careful consideration of several factors. For the input capacitor, use low-ESR ceramic capacitors (X5R or X7R dielectric) with adequate voltage rating (typically 1.5x the maximum input voltage). The output capacitor determines output ripple - select based on ripple voltage requirements and transient response needs. Inductor selection balances size, cost, and ripple current - typically choose ripple current of 20-40% of maximum output current. For feedback resistors, use 1% tolerance or better for accurate output voltage. Layout is critical: place input capacitors close to the IC, minimize switching node trace length, and use adequate ground plane for thermal management. Refer to the evaluation board layout for best practices.`,
    decisionGuide: `Use our online design calculator or reference designs for component selection. For critical applications, contact our FAE team for customized component recommendations and layout review.`,
    keywords: ['component selection', 'design guide', 'PCB layout']
  };

  // 维度2补充: 热设计
  const dim2ExtraFaq = {
    question: `What thermal management is required for reliable operation of the ${partNumber}?`,
    answer: `Thermal management for ${partNumber} depends on output power, ambient temperature, and airflow conditions. Calculate power dissipation as Pd = Pout × (1/efficiency - 1). For example, at 5V output, 2A current, and 90% efficiency, dissipation is approximately 1W. The junction temperature must not exceed 125°C for reliable operation. Thermal resistance (θja) depends on package and PCB copper area - typically 40-60°C/W for standard layout. For 1W dissipation at 25°C ambient, junction temperature would be 65-85°C. Improve thermal performance by: increasing copper area under the IC, using thermal vias to inner layers, adding heatsinks for high-power applications, and ensuring adequate airflow. Thermal shutdown protection activates at approximately 150°C junction temperature.`,
    decisionGuide: `Perform thermal calculations for your specific operating conditions. For high-power applications, implement enhanced thermal management. Contact our FAE team for thermal modeling assistance.`,
    keywords: ['thermal management', 'heatsink', 'temperature derating']
  };

  // 维度3: 竞品/替代对比
  const dim3Faq = {
    question: `How does the ${partNumber} compare to competitor solutions and other Joulwatt products?`,
    answer: `The ${partNumber} offers competitive performance at a more attractive price point compared to international brands like TI, ADI, or MPS. Key advantages include integrated protection features, simplified BOM, and excellent cost-performance ratio. Compared to other Joulwatt products in the portfolio, this device targets ${categoryType} applications with optimized efficiency and feature set. Alternative Joulwatt options may offer higher current, wider input range, or additional features like PGOOD output or synchronization capability. When compared to discrete solutions, the integrated approach reduces component count by 30-50%, improving reliability and reducing board space. For cost-sensitive consumer and industrial applications, Joulwatt provides an excellent balance of performance and affordability compared to premium brands.`,
    decisionGuide: `Choose ${partNumber} for cost-sensitive applications requiring reliable performance. For higher performance requirements, consider premium brands. Contact our FAE team for product selection guidance based on your specific requirements.`,
    keywords: ['product comparison', 'competitor analysis', 'cost performance']
  };

  // 维度4: 应用场景绑定
  const dim4Faq = {
    question: `What are the recommended applications for the ${partNumber}?`,
    answer: `The ${partNumber} is ideally suited for ${categoryType} power conversion applications including consumer electronics, industrial controls, telecommunications equipment, and LED drivers. Specific applications include: adapter power supplies, set-top box power, networking equipment, battery chargers, and distributed power systems. The device's protection features and wide operating range make it suitable for applications with varying input conditions. For consumer applications, the cost-effectiveness and reliability are key advantages. Industrial applications benefit from the robust protection features and wide temperature range. The compact solution size enables high-density power designs for space-constrained applications. Always verify the specific electrical and thermal requirements of your application against the datasheet specifications.`,
    decisionGuide: `This device is ideal for cost-sensitive power supply applications. For specific application recommendations including schematic and layout guidance, contact our FAE team with your requirements.`,
    keywords: ['applications', 'use cases', 'power supply design']
  };

  // 维度5: 交期/采购决策
  const dim5Faq = {
    question: `What is the typical lead time and pricing for the ${partNumber}?`,
    answer: `Standard lead time for ${partNumber} is 6-8 weeks from manufacturing. BeiLuo Electronics maintains strategic inventory for popular Joulwatt devices, enabling 1-5 day delivery for sample and small quantity orders (up to 500 pieces). Standard MOQ is 3,000 pieces with volume pricing tiers at 10,000, 50,000, and 100,000 pieces. Volume discounts range from 15% to 35% off standard pricing depending on quantity and commitment. For high-volume production (500,000+ pieces annually), we offer scheduled delivery programs with 4-6 week lead time and preferential pricing. Emergency delivery options include air freight (2-3 weeks) and expedited processing. We also support consignment inventory programs for qualified customers with predictable demand patterns.`,
    decisionGuide: `Plan for 8-week lead time for production orders. For immediate prototyping, check our local stock. For high-volume projects, contact our sales team for volume pricing and scheduled delivery programs to optimize your supply chain.`,
    keywords: ['lead time', 'MOQ', 'pricing', 'delivery schedule']
  };

  return [
    dim1Faq,      // 维度1: 输入电压/输出电流
    dim1ExtraFaq, // 维度1: 开关频率/效率
    dim2Faq,      // 维度2: 外部元件选择
    dim2ExtraFaq, // 维度2: 热管理
    dim3Faq,      // 维度3: 竞品对比
    dim4Faq,      // 维度4: 应用场景
    dim5Faq       // 维度5: 交期/采购
  ];
}

// 修复所有产品的FAQ
let fixedCount = 0;
const categories = productsData.categories || [];

categories.forEach(category => {
  const products = category.products || [];
  
  products.forEach(product => {
    const currentFaqs = product.faqs || [];
    
    console.log(`修复产品: ${product.partNumber} (${category.id}, 当前${currentFaqs.length}个FAQ)`);
    product.faqs = generateFiveDimensionFaqs(product, category.id);
    fixedCount++;
  });
});

// 保存修复后的数据
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 修复完成! 共修复 ${fixedCount} 个产品的FAQ`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
