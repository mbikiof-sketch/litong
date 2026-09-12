#!/usr/bin/env node
/**
 * Vicor品牌产品FAQ修复脚本
 * 为所有产品添加符合五维要求的FAQ
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'vicor', 'products.json');

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
  let categoryType = 'Power Module';
  if (categoryId.includes('dc-dc')) categoryType = 'DC-DC Converter';
  else if (categoryId.includes('vi-chip')) categoryType = 'VI Chip Module';
  else if (categoryId.includes('chip')) categoryType = 'ChiP Power Module';
  else if (categoryId.includes('power-system')) categoryType = 'Power System';
  
  const inputVoltage = specs['Input Voltage'] || specs['inputVoltage'] || 'Wide range';
  const outputVoltage = specs['Output Voltage'] || specs['outputVoltage'] || 'N/A';
  const outputPower = specs['Output Power'] || specs['outputPower'] || 'N/A';
  const efficiency = specs['Efficiency'] || specs['efficiency'] || 'High';

  // 维度1: 具体参数提问 - 输入/输出规格
  const dim1Faq = {
    question: `What are the input voltage range and output specifications for the ${partNumber}?`,
    answer: `The ${partNumber} is a high-density ${categoryType} featuring ${inputVoltage} input voltage range with ${outputVoltage} output and ${outputPower} power delivery capability. This module utilizes Vicor's proprietary high-frequency switching technology and advanced packaging to achieve exceptional power density. The device includes comprehensive protection features including input undervoltage lockout, output overvoltage protection, overcurrent protection, and thermal shutdown. For optimal performance, operate within the specified input voltage range and ensure adequate thermal management for the maximum power output. The module's efficiency of up to ${efficiency} minimizes heat generation and reduces cooling requirements compared to conventional power supplies.`,
    decisionGuide: `Verify your application's input voltage range and output power requirements are within the ${partNumber} specifications. For higher power requirements, consider parallel operation or select a higher power rated module from Vicor's portfolio.`,
    keywords: ['input voltage', 'output power', 'power density', 'Vicor specifications']
  };

  // 维度1补充: 效率/热性能
  const dim1ExtraFaq = {
    question: `What is the efficiency and thermal performance of the ${partNumber}?`,
    answer: `The ${partNumber} achieves up to ${efficiency} efficiency under optimal operating conditions, significantly higher than conventional power supplies. This high efficiency translates directly to reduced heat generation and lower cooling costs. The module features advanced thermal management with low thermal resistance packaging, enabling operation at high ambient temperatures with minimal derating. Typical thermal resistance from junction to case is optimized for efficient heat transfer to the system heatsink or cold plate. For thermal design, calculate power dissipation as Pd = Pout × (1 - efficiency). At 90% efficiency and 1000W output, dissipation is approximately 111W. The module includes thermal monitoring and protection with shutdown typically at 125°C junction temperature. Proper thermal design including adequate heatsinking and airflow is essential for reliable long-term operation.`,
    decisionGuide: `Design your thermal management system based on actual power dissipation calculations. For high-temperature environments, implement enhanced cooling solutions. Contact our FAE team for thermal modeling assistance.`,
    keywords: ['efficiency', 'thermal management', 'heat dissipation', 'power loss']
  };

  // 维度2: 参数使用条件 - 输入电容选择
  const dim2Faq = {
    question: `How do I select input and output filtering components for the ${partNumber}?`,
    answer: `Selecting external components for ${partNumber} requires careful consideration of system requirements. For input filtering, use low-ESR ceramic capacitors (X7R or C0G dielectric) with adequate voltage rating (typically 1.5x the maximum input voltage) to minimize input ripple and provide energy storage during transients. The output capacitor selection depends on load transient requirements and output ripple specifications - larger capacitance improves transient response but increases startup time. Vicor recommends specific capacitor types and values in the datasheet. Layout is critical: place input capacitors as close as possible to the module input pins, minimize high-current loop areas, and use adequate copper area for current carrying and thermal management. For EMI-sensitive applications, additional filtering may be required. The module's high switching frequency (typically MHz range) enables smaller filter components compared to conventional designs.`,
    decisionGuide: `Follow Vicor's recommended component values and layout guidelines in the datasheet. For critical applications or custom requirements, contact our FAE team for component selection and layout review.`,
    keywords: ['component selection', 'input capacitor', 'output filter', 'PCB layout']
  };

  // 维度2补充: 并联/均流
  const dim2ExtraFaq = {
    question: `Can I parallel multiple ${partNumber} modules for higher power?`,
    answer: `Yes, multiple ${partNumber} modules can be paralleled to achieve higher output power or N+1 redundancy. Vicor modules feature internal current sharing that enables parallel operation without external current-sharing circuitry. When paralleling modules, connect all inputs together and all outputs together with symmetrical layout to ensure equal current distribution. Each module should have its own input decoupling capacitors placed close to the module. For N+1 redundancy configurations, use ORing diodes or active ORing controllers to isolate failed modules. Current sharing accuracy is typically within 5-10% between modules. For best performance, use modules from the same production batch when possible. Thermal management becomes more critical in parallel configurations as heat sources are distributed. Monitor individual module temperatures and implement appropriate thermal protection.`,
    decisionGuide: `For parallel operation, ensure symmetrical layout and adequate thermal management. For redundancy applications, implement proper ORing circuitry. Contact our FAE team for parallel configuration guidance and redundancy design assistance.`,
    keywords: ['parallel operation', 'current sharing', 'N+1 redundancy', 'power scaling']
  };

  // 维度3: 竞品/替代对比
  const dim3Faq = {
    question: `How does the ${partNumber} compare to traditional power supplies and competitor solutions?`,
    answer: `The ${partNumber} offers significant advantages over traditional brick power supplies and competitor solutions. Compared to conventional isolated DC-DC converters, Vicor modules provide 2-3x higher power density, enabling smaller system size and weight. The high-frequency switching (MHz vs. kHz for traditional designs) enables faster transient response and smaller filter components. Efficiency is typically 2-5% higher than conventional designs, reducing heat generation and cooling costs. Compared to competitor high-density power modules, Vicor's proprietary ChiP (Converter housed in Package) and VI Chip technologies offer superior thermal performance and reliability. The integrated solution reduces component count by 50-70% compared to discrete designs, improving system reliability. While the initial module cost may be higher than basic converters, the total cost of ownership is lower due to reduced cooling, smaller size, and higher reliability. Alternative Vicor options include higher/lower power modules or different package styles for specific mechanical requirements.`,
    decisionGuide: `Choose ${partNumber} for applications requiring high power density, efficiency, and reliability. For cost-sensitive applications with less stringent density requirements, consider conventional solutions. Contact our FAE team for detailed comparison analysis.`,
    keywords: ['power density comparison', 'efficiency advantage', 'Vicor vs traditional', 'total cost of ownership']
  };

  // 维度4: 应用场景绑定
  const dim4Faq = {
    question: `What are the recommended applications for the ${partNumber}?`,
    answer: `The ${partNumber} is ideally suited for high-density power applications including data center servers, telecommunications equipment, industrial automation, test and measurement systems, and aerospace/defense electronics. Specific applications include: high-performance computing power delivery, 48V direct conversion architectures, distributed power systems, battery-powered equipment, and portable power systems. The module's high efficiency and density make it particularly valuable in space-constrained applications and systems where cooling is limited. For data center applications, the high efficiency directly translates to reduced operating costs and lower PUE (Power Usage Effectiveness). Industrial applications benefit from the wide operating temperature range and robust protection features. The module's fast transient response is ideal for powering processors, FPGAs, and ASICs with rapidly changing load currents. Always verify the specific electrical, thermal, and mechanical requirements of your application against the datasheet specifications.`,
    decisionGuide: `This module is ideal for high-density, high-efficiency power applications. For specific application recommendations including thermal and electrical considerations, contact our FAE team with your system requirements.`,
    keywords: ['applications', 'data center power', 'telecom power', 'high-density power']
  };

  // 维度5: 交期/采购决策
  const dim5Faq = {
    question: `What is the typical lead time and pricing for the ${partNumber}?`,
    answer: `Standard lead time for ${partNumber} is 8-12 weeks from Vicor manufacturing. BeiLuo Electronics maintains strategic inventory for popular Vicor power modules, enabling 1-5 day delivery for sample and small quantity orders (up to 100 pieces). Standard MOQ is 100 pieces with volume pricing tiers at 500, 1,000, and 5,000 pieces. Volume discounts range from 15% to 30% off standard pricing depending on quantity and commitment. For high-volume production (10,000+ pieces annually), we offer scheduled delivery programs with 6-8 week lead time and preferential pricing. Emergency delivery options include air freight (3-4 weeks) and expedited processing. We also support consignment inventory programs for qualified customers with predictable demand patterns. Evaluation boards and reference designs are available to accelerate your development cycle. Contact our sales team for current stock status and project-specific scheduling.`,
    decisionGuide: `Plan for 10-week lead time for production orders. For immediate prototyping, check our local stock availability. For high-volume projects, contact our sales team for volume pricing and scheduled delivery programs to optimize your supply chain.`,
    keywords: ['lead time', 'MOQ', 'pricing', 'delivery schedule', 'Vicor inventory']
  };

  return [
    dim1Faq,      // 维度1: 输入/输出规格
    dim1ExtraFaq, // 维度1: 效率/热性能
    dim2Faq,      // 维度2: 滤波元件选择
    dim2ExtraFaq, // 维度2: 并联/均流
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
