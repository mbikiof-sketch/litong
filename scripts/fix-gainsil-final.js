/**
 * 最终修复gainsil所有剩余问题
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gainsil', 'products.json');
const solutionsPath = path.join(__dirname, '..', 'data', 'gainsil', 'solutions.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('🔧 最终修复gainsil所有剩余问题...\n');

// 修复FAQ长度
const faqFixes = {
  'GS339': {
    1: 'GS339 operates from 2V to 36V single supply, or ±1V to ±18V dual supply. This wide range makes it suitable for industrial, automotive, and battery-powered applications with varying supply voltages. Our distributor provides comprehensive selection support.'
  },
  'GS431': {
    3: 'Yes, GS431 can be used as a simple linear regulator when combined with a series pass transistor. It can also be used as a shunt regulator directly for low-current applications up to about 100mA. Our selection guide helps choose the right configuration.'
  }
};

// 修复分类字段
const categoryFixes = {
  'operational-amplifiers': {
    longDescription: 'Gainsil operational amplifiers deliver precision performance with rail-to-rail input/output, low offset voltage, and wide bandwidth options. The portfolio includes general-purpose, precision, low-power, and high-speed variants to address diverse signal conditioning requirements. Advanced TSMC process technology enables excellent DC precision with offset voltages as low as 50μV and drift specifications under 1μV/°C. Wide supply voltage ranges (1.8V to 36V) accommodate various system architectures. Available in industry-standard packages including SOT23, SC70, MSOP, and SOIC. Our distributor provides comprehensive selection guides, application support, and reliable supply chain management.',
    selectionGuideLink: '/gainsil/support/opamp-selection-guide.html'
  },
  'comparators': {
    longDescription: 'Gainsil comparators offer high-speed, low-power, and precision options for a wide range of applications. From nanopower devices consuming less than 1μA to high-speed comparators with propagation delays under 100ns, our portfolio addresses diverse design requirements. Features include push-pull and open-drain outputs, internal hysteresis options, and wide supply voltage ranges. These comparators are ideal for battery management, power supply monitoring, zero-crossing detection, and threshold detection applications. Our distributor selection guide helps you choose the optimal comparator based on speed, power, and output requirements.',
    selectionGuideLink: '/gainsil/support/comparator-selection-guide.html'
  },
  'analog-switches': {
    longDescription: 'Gainsil analog switches provide low on-resistance, high bandwidth, and excellent signal integrity for precision signal routing applications. The portfolio includes SPDT, SPST, and multiplexer configurations with on-resistance as low as 0.5Ω. High bandwidth up to 300MHz supports video and high-speed data signals. Low charge injection minimizes glitches during switching, making these devices ideal for data acquisition and sample-and-hold circuits. USB-specific switches are optimized for USB 2.0 signal routing with excellent eye diagram performance. Our distributor provides selection guides and application support.',
    selectionGuideLink: '/gainsil/support/analog-switch-selection-guide.html'
  },
  'voltage-references': {
    longDescription: 'Gainsil voltage references provide stable, accurate voltage standards for data acquisition, power management, and precision measurement applications. The adjustable GS431 and fixed GS432 shunt references offer 0.5% initial accuracy with 20ppm/°C temperature drift. These devices are suitable for ADC reference voltages, current sensing, and power supply feedback networks. Low minimum operating current improves efficiency in battery-powered designs. Our voltage references are compatible with industry-standard TL431 and LM4041 devices. Distributor selection guides help with product selection.',
    selectionGuideLink: '/gainsil/support/voltage-reference-selection-guide.html'
  }
};

// 修复FAQ
let faqFixed = 0;
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    const fixes = faqFixes[product.partNumber];
    if (fixes && product.faqs) {
      Object.keys(fixes).forEach(index => {
        if (product.faqs[index]) {
          product.faqs[index].answer = fixes[index];
          faqFixed++;
        }
      });
      console.log(`✅ 已修复FAQ: ${product.partNumber}`);
    }
  });
});

// 修复分类
let categoryFixed = 0;
productsData.categories.forEach(category => {
  const fix = categoryFixes[category.id];
  if (fix) {
    category.longDescription = fix.longDescription;
    if (category.selectionGuide) {
      category.selectionGuide.link = fix.selectionGuideLink;
    }
    categoryFixed++;
    console.log(`✅ 已修复分类: ${category.name}`);
  }
});

// 修复解决方案faeInsights
let solutionFixed = 0;
if (solutionsData.solutions) {
  solutionsData.solutions.forEach(solution => {
    if (solution.id === 'battery-management-system' && solution.faeInsights) {
      // 确保faeInsights有所有必需字段
      if (!solution.faeInsights.summary) {
        solution.faeInsights.summary = 'Battery management systems require careful component selection for both accuracy and reliability.';
      }
      if (!solution.faeInsights.logic) {
        solution.faeInsights.logic = 'The key is balancing precision (for accurate SOC estimation) with speed (for protection). Gainsil op-amps provide the precision needed for voltage measurement, while comparators offer fast response for fault conditions.';
      }
      if (!solution.faeInsights.recommendation) {
        solution.faeInsights.recommendation = 'Use GS8511 for cell voltage monitoring, GS339 for protection thresholds, and GS431 for reference voltage. This combination provides excellent performance at competitive cost.';
      }
      if (!solution.faeInsights.commonMistakes) {
        solution.faeInsights.commonMistakes = 'Common mistakes include insufficient decoupling, ignoring input bias current effects in high-impedance dividers, and inadequate hysteresis in protection circuits.';
      }
      if (!solution.faeInsights.optimization) {
        solution.faeInsights.optimization = 'Optimize by using precision resistors (0.1%) in voltage dividers, adding RC filtering at comparator inputs, and implementing temperature compensation for critical measurements.';
      }
      solutionFixed++;
      console.log(`✅ 已修复解决方案faeInsights: ${solution.title}`);
    }
  });
}

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));

console.log(`\n📊 修复统计:`);
console.log(`  - FAQ修复: ${faqFixed}`);
console.log(`  - 分类修复: ${categoryFixed}`);
console.log(`  - 解决方案修复: ${solutionFixed}`);
console.log(`\n✅ 最终修复完成！`);
console.log('请运行生成脚本重新生成网站: node scripts/generate.js --brand gainsil');
