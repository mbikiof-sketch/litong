const fs = require('fs');

console.log('开始为 xinleineng 品牌添加更多产品、解决方案和技术支持文章...\n');

// 读取现有数据
const productsData = JSON.parse(fs.readFileSync('./data/xinleineng/products.json', 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync('./data/xinleineng/solutions.json', 'utf8'));
const supportData = JSON.parse(fs.readFileSync('./data/xinleineng/support.json', 'utf8'));

// 1. 为每个分类添加更多产品（每个分类需要4个产品）
console.log('1. 为每个分类添加更多产品...');

// 为IGBT Modules添加2个产品
const igbtModules = productsData.categories.find(cat => cat.id === 'igbt-modules');
const additionalIGBTs = [
  {
    partNumber: 'XLN300T120',
    series: 'XLN Series',
    voltage: '1200V',
    current: '300A',
    package: '62mm',
    vceSat: '1.6V (typ)',
    switchingFrequency: 'Up to 20kHz',
    technology: 'Trench Field-Stop',
    application: 'High Power Motor Drives, Traction',
    datasheet: '/assets/brands/xinleineng/datasheets/xln300t120.pdf',
    stock: 'In Stock',
    leadTime: '4-6 weeks',
    shortDescription: 'Xinleineng XLN300T120 1200V 300A high-power IGBT module with trench field-stop technology. Ideal for 75-132kW motor drives and traction applications.',
    descriptionParagraphs: [
      'The Xinleineng XLN300T120 is a high-performance 1200V 300A IGBT module featuring advanced trench field-stop technology for high-power applications.',
      'With Vce(sat) of 1.6V typical and robust 62mm package, this module delivers reliable performance in demanding traction and industrial drive applications.',
      'The 62mm industry-standard package ensures compatibility with high-power designs while providing excellent thermal performance for continuous operation at rated current.'
    ],
    longDescription: 'The Xinleineng XLN300T120 is a 1200V 300A IGBT module designed for high-power industrial motor drives, traction systems, and heavy-duty power conversion applications.',
    features: [
      'Trench Field-Stop technology for low losses',
      '1200V voltage rating for industrial systems',
      '300A continuous current capability',
      'Low Vce(sat) of 1.6V typical',
      '62mm standard package',
      'RoHS compliant'
    ],
    applications: [
      'High-power motor drives (75-132kW)',
      'Traction systems',
      'Heavy industrial equipment',
      'Grid-tied inverters'
    ],
    specifications: {
      'Collector-Emitter Voltage (Vces)': '1200V',
      'Continuous Collector Current (Ic)': '300A @ 25C',
      'Vce(sat) typical': '1.6V @ 300A, 25C',
      'Switching Frequency': 'Up to 20kHz',
      'Operating Temperature': '-40C to +150C',
      'Package': '62mm',
      'RthJC': '0.18C/W'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Senior Power Applications Engineer',
      content: 'Based on my extensive experience with Xinleineng power modules, the XLN300T120 delivers exceptional performance for high-power applications. This module has been successfully deployed in numerous traction and heavy industrial drive systems. The 300A rating with 1.6V Vce(sat) provides excellent efficiency for megawatt-scale systems. Through BeiLuo, you can access our FAE team\'s full technical support including thermal design and system optimization.',
      highlight: 'High-power IGBT with excellent efficiency for traction applications'
    },
    alternativeParts: [
      {
        partNumber: 'XLN450T120',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '450A' },
        comparison: 'XLN300T120=>XLN450T120: Higher current (450A vs 300A)',
        reason: 'Higher power capability',
        useCase: 'Larger traction systems',
        link: '#'
      },
      {
        partNumber: 'XLN200T120',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '200A' },
        comparison: 'XLN300T120=>XLN200T120: Lower current (200A vs 300A)',
        reason: 'Cost optimization',
        useCase: 'Medium power applications',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '2ED300C17-S', category: 'Gate Driver', description: 'Dual channel gate driver', link: '#' },
      { partNumber: 'TIM-HP800', category: 'Thermal Interface', description: 'High-performance thermal grease', link: '#' },
      { partNumber: 'Heatsink-62mm', category: 'Heatsink', description: '62mm module heatsink', link: '#' }
    ],
    faqs: [
      { question: 'What is the maximum power rating?', answer: 'Suitable for 75-132kW motor drives depending on switching frequency and cooling.', decisionGuide: 'Verify thermal design for your application.', keywords: ['power rating'] },
      { question: 'What gate driver is recommended?', answer: '2ED300C17-S dual channel gate driver with 17A peak current.', decisionGuide: 'Use recommended gate driver for best performance.', keywords: ['gate driver'] },
      { question: 'What heatsink is required?', answer: 'Requires 62mm compatible heatsink with adequate thermal capacity.', decisionGuide: 'Contact FAE for heatsink recommendations.', keywords: ['heatsink'] },
      { question: 'Can modules be paralleled?', answer: 'Yes, with proper gate drive synchronization and current sharing.', decisionGuide: 'Consult FAE for parallel operation guidelines.', keywords: ['parallel'] },
      { question: 'What is the isolation voltage?', answer: '4000V AC isolation rating for high-voltage applications.', decisionGuide: 'Suitable for high-voltage industrial systems.', keywords: ['isolation'] }
    ]
  },
  {
    partNumber: 'XLN50T120',
    series: 'XLN Series',
    voltage: '1200V',
    current: '50A',
    package: 'EconoDUAL',
    vceSat: '1.75V (typ)',
    switchingFrequency: 'Up to 20kHz',
    technology: 'Trench Field-Stop',
    application: 'Small Motor Drives, HVAC',
    datasheet: '/assets/brands/xinleineng/datasheets/xln50t120.pdf',
    stock: 'In Stock',
    leadTime: '2-3 weeks',
    shortDescription: 'Xinleineng XLN50T120 1200V 50A compact IGBT module. Ideal for 3.7-5.5kW motor drives and HVAC applications.',
    descriptionParagraphs: [
      'The Xinleineng XLN50T120 is a compact 1200V 50A IGBT module featuring trench field-stop technology for small motor drive applications.',
      'With Vce(sat) of 1.75V typical, this module offers cost-effective performance for HVAC and small industrial drives.',
      'The EconoDUAL package provides easy integration and reliable thermal performance for continuous operation.'
    ],
    longDescription: 'The Xinleineng XLN50T120 is a 1200V 50A IGBT module designed for small motor drives, HVAC systems, and cost-sensitive power conversion applications.',
    features: [
      'Compact 50A rating',
      '1200V voltage rating',
      'Low Vce(sat) of 1.75V typical',
      'EconoDUAL package',
      'Cost-effective solution'
    ],
    applications: [
      'Small motor drives (3.7-5.5kW)',
      'HVAC systems',
      'Pump drives',
      'Fan controls'
    ],
    specifications: {
      'Collector-Emitter Voltage (Vces)': '1200V',
      'Continuous Collector Current (Ic)': '50A @ 25C',
      'Vce(sat) typical': '1.75V @ 50A, 25C',
      'Switching Frequency': 'Up to 20kHz',
      'Operating Temperature': '-40C to +150C',
      'Package': 'EconoDUAL',
      'RthJC': '0.45C/W'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Power Applications Engineer',
      content: 'The XLN50T120 is an excellent choice for small motor drives and HVAC applications. The compact 50A rating provides the right balance of performance and cost for these applications. Through BeiLuo, you can access our FAE team\'s technical support for your designs.',
      highlight: 'Cost-effective IGBT for small motor drives'
    },
    alternativeParts: [
      {
        partNumber: 'XLN75T120',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '75A' },
        comparison: 'XLN50T120=>XLN75T120: Higher current (75A vs 50A)',
        reason: 'More power headroom',
        useCase: 'Upgrade path',
        link: '#'
      },
      {
        partNumber: 'XLN-IPM15A',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '15A', type: 'IPM' },
        comparison: 'XLN50T120=>XLN-IPM15A: Integrated driver option',
        reason: 'Simplified design',
        useCase: 'When integrated driver preferred',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '1EDI20I12AF', category: 'Gate Driver', description: 'Compact gate driver', link: '#' },
      { partNumber: 'TIM-GD300', category: 'Thermal Interface', description: 'Thermal grease', link: '#' },
      { partNumber: 'Heatsink-ED', category: 'Heatsink', description: 'EconoDUAL heatsink', link: '#' }
    ],
    faqs: [
      { question: 'What motor size is this suitable for?', answer: 'Ideal for 3.7-5.5kW motors depending on application.', decisionGuide: 'Match to your motor power rating.', keywords: ['motor size'] },
      { question: 'Is this suitable for HVAC?', answer: 'Yes, commonly used in HVAC compressor and fan drives.', decisionGuide: 'Proven in HVAC applications.', keywords: ['HVAC'] },
      { question: 'What is the thermal resistance?', answer: '0.45C/W junction-to-case thermal resistance.', decisionGuide: 'Standard thermal performance.', keywords: ['thermal'] },
      { question: 'Cost comparison?', answer: 'Cost-effective solution for small drive applications.', decisionGuide: 'Good value for small drives.', keywords: ['cost'] },
      { question: 'Stock availability?', answer: 'Available from BeiLuo stock with 2-3 week lead time.', decisionGuide: 'Contact sales for current availability.', keywords: ['stock'] }
    ]
  }
];
igbtModules.products.push(...additionalIGBTs);
console.log(`   IGBT Modules分类现在有 ${igbtModules.products.length} 个产品`);

// 为SiC Modules添加2个产品
const sicModules = productsData.categories.find(cat => cat.id === 'sic-modules');
const additionalSiCs = [
  {
    partNumber: 'XLN120M120-SiC',
    series: 'XLN-M Series',
    voltage: '1200V',
    current: '120A',
    rdsOn: '12mΩ',
    switchingFrequency: 'Up to 100kHz',
    technology: 'SiC MOSFET',
    application: 'High-Frequency Inverters, EV Charging',
    datasheet: '/assets/brands/xinleineng/datasheets/xln120m120-sic.pdf',
    stock: 'In Stock',
    leadTime: '4-6 weeks',
    shortDescription: 'Xinleineng XLN120M120-SiC 1200V 120A SiC MOSFET module with 12mΩ on-resistance. Ideal for high-frequency inverters and EV charging stations.',
    descriptionParagraphs: [
      'The Xinleineng XLN120M120-SiC is a high-performance 1200V 120A SiC MOSFET module featuring ultra-low on-resistance of 12mΩ.',
      'With switching frequencies up to 100kHz and 40% lower switching losses than IGBT, this module enables compact, high-efficiency designs.',
      'The SiC technology provides superior thermal performance and enables higher power density for next-generation power electronics.'
    ],
    longDescription: 'The Xinleineng XLN120M120-SiC is a 1200V 120A SiC MOSFET module designed for high-frequency power conversion, EV charging, and renewable energy applications.',
    features: [
      'SiC MOSFET technology',
      'Ultra-low 12mΩ on-resistance',
      '1200V blocking voltage',
      '120A continuous current',
      '100kHz switching capability',
      '40% lower switching losses',
      'High-temperature operation'
    ],
    applications: [
      'EV charging stations',
      'High-frequency solar inverters',
      'UPS systems',
      'DC-DC converters',
      'Traction inverters'
    ],
    specifications: {
      'Drain-Source Voltage (Vds)': '1200V',
      'Continuous Drain Current (Id)': '120A @ 25C',
      'On-Resistance (RdsOn)': '12mΩ @ 25C',
      'Gate Threshold Voltage': '2.5V - 4.0V',
      'Switching Frequency': 'Up to 100kHz',
      'Operating Temperature': '-40C to +175C',
      'Package': 'EconoDUAL'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Senior Power Applications Engineer',
      content: 'The XLN120M120-SiC represents the cutting edge of power semiconductor technology. The 12mΩ on-resistance and ultra-fast switching enable system-level improvements that justify the premium over IGBT. I have seen customers reduce heatsink size by 50% and increase switching frequency from 16kHz to 50kHz, resulting in much smaller magnetics. The 175C maximum junction temperature provides additional design margin. For EV charging applications, this module enables 99%+ efficiency in the power stage.',
      highlight: 'Cutting-edge SiC technology enabling next-generation power density'
    },
    alternativeParts: [
      {
        partNumber: 'XLN80M120-SiC',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '80A', rdsOn: '18mΩ' },
        comparison: 'XLN120M120-SiC=>XLN80M120-SiC: Lower current (80A vs 120A)',
        reason: 'Cost optimization',
        useCase: 'Lower power SiC applications',
        link: '#'
      },
      {
        partNumber: 'XLN200M120-SiC',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '200A', rdsOn: '8mΩ' },
        comparison: 'XLN120M120-SiC=>XLN200M120-SiC: Higher current (200A vs 120A)',
        reason: 'Higher power capability',
        useCase: 'High-power EV charging',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '1EDI60N12AF', category: 'Gate Driver', description: 'SiC optimized gate driver', link: '#' },
      { partNumber: 'SiC-Diode-1200V', category: 'Diode', description: 'SiC Schottky diode', link: '#' },
      { partNumber: 'TIM-SiC', category: 'Thermal Interface', description: 'High-performance thermal material', link: '#' }
    ],
    faqs: [
      { question: 'What are the advantages over IGBT?', answer: '40% lower switching losses, 100kHz vs 20kHz capability, higher temperature operation.', decisionGuide: 'Use SiC for high-frequency or high-efficiency applications.', keywords: ['advantages'] },
      { question: 'What gate voltage is required?', answer: 'Recommended +15V/-4V gate drive for optimal performance.', decisionGuide: 'Use SiC-optimized gate driver.', keywords: ['gate voltage'] },
      { question: 'Is the gate drive critical?', answer: 'Yes, proper gate drive is essential for SiC performance and reliability.', decisionGuide: 'Follow recommended gate drive design.', keywords: ['gate drive'] },
      { question: 'What about body diode?', answer: 'SiC MOSFET has body diode but external SiC Schottky recommended for best performance.', decisionGuide: 'Use external SiC diode for critical apps.', keywords: ['body diode'] },
      { question: 'Cost justification?', answer: 'System-level savings in heatsink, magnetics, and cooling often justify SiC premium.', decisionGuide: 'Evaluate total system cost.', keywords: ['cost'] }
    ]
  },
  {
    partNumber: 'XLN20M120-SiC',
    series: 'XLN-M Series',
    voltage: '1200V',
    current: '20A',
    rdsOn: '60mΩ',
    switchingFrequency: 'Up to 100kHz',
    technology: 'SiC MOSFET',
    application: 'Compact Inverters, DC-DC',
    datasheet: '/assets/brands/xinleineng/datasheets/xln20m120-sic.pdf',
    stock: 'In Stock',
    leadTime: '2-3 weeks',
    shortDescription: 'Xinleineng XLN20M120-SiC 1200V 20A compact SiC MOSFET module. Ideal for compact inverters and DC-DC converters.',
    descriptionParagraphs: [
      'The Xinleineng XLN20M120-SiC is a compact 1200V 20A SiC MOSFET module for space-constrained applications.',
      'With 60mΩ on-resistance and ultra-fast switching, this module enables compact, high-efficiency designs.',
      'The small form factor makes it ideal for embedded power supplies and compact inverters.'
    ],
    longDescription: 'The Xinleineng XLN20M120-SiC is a 1200V 20A SiC MOSFET module designed for compact power conversion, DC-DC converters, and space-constrained applications.',
    features: [
      'Compact 20A SiC MOSFET',
      '1200V blocking voltage',
      '60mΩ on-resistance',
      'Ultra-fast switching',
      'High-temperature operation',
      'Small form factor'
    ],
    applications: [
      'Compact inverters',
      'DC-DC converters',
      'Embedded power supplies',
      'Power factor correction',
      'SMPS'
    ],
    specifications: {
      'Drain-Source Voltage (Vds)': '1200V',
      'Continuous Drain Current (Id)': '20A @ 25C',
      'On-Resistance (RdsOn)': '60mΩ @ 25C',
      'Gate Threshold Voltage': '2.5V - 4.0V',
      'Switching Frequency': 'Up to 100kHz',
      'Operating Temperature': '-40C to +175C',
      'Package': 'EconoDUAL'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Power Applications Engineer',
      content: 'The XLN20M120-SiC is perfect for compact designs where space is at a premium. The small current rating with SiC technology enables very high-frequency operation in a compact package. Through BeiLuo, you can access our FAE team\'s support for compact power supply designs.',
      highlight: 'Compact SiC solution for space-constrained designs'
    },
    alternativeParts: [
      {
        partNumber: 'XLN40M120-SiC',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '40A', rdsOn: '30mΩ' },
        comparison: 'XLN20M120-SiC=>XLN40M120-SiC: Higher current (40A vs 20A)',
        reason: 'More power capability',
        useCase: 'Higher power compact designs',
        link: '#'
      },
      {
        partNumber: 'XLN50T120',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '50A', type: 'IGBT' },
        comparison: 'XLN20M120-SiC=>XLN50T120: IGBT alternative at similar power',
        reason: 'Cost comparison',
        useCase: 'Cost-sensitive compact apps',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '1EDI20N12AF', category: 'Gate Driver', description: 'Compact SiC gate driver', link: '#' },
      { partNumber: 'SiC-Diode-1200V-10A', category: 'Diode', description: 'SiC Schottky diode', link: '#' },
      { partNumber: 'TIM-SiC-Compact', category: 'Thermal Interface', description: 'Compact thermal pad', link: '#' }
    ],
    faqs: [
      { question: 'What applications suit this module?', answer: 'Compact inverters, DC-DC converters, and space-constrained power supplies.', decisionGuide: 'Use where space is limited.', keywords: ['applications'] },
      { question: 'What is the on-resistance?', answer: '60mΩ at 25C, higher than larger modules but suitable for the current rating.', decisionGuide: 'Appropriate for 20A applications.', keywords: ['on-resistance'] },
      { question: 'Gate drive requirements?', answer: 'Same as other SiC: +15V/-4V recommended.', decisionGuide: 'Use SiC-optimized driver.', keywords: ['gate drive'] },
      { question: 'Thermal design?', answer: 'Compact but still requires proper thermal management.', decisionGuide: 'Design adequate cooling.', keywords: ['thermal'] },
      { question: 'Price point?', answer: 'Entry-level SiC pricing for cost-sensitive compact designs.', decisionGuide: 'Affordable SiC option.', keywords: ['price'] }
    ]
  }
];
sicModules.products.push(...additionalSiCs);
console.log(`   SiC Modules分类现在有 ${sicModules.products.length} 个产品`);

// 为Intelligent Power Modules添加2个产品
const ipmModules = productsData.categories.find(cat => cat.id === 'intelligent-power-modules');
const additionalIPMs = [
  {
    partNumber: 'XLN-IPM7A5',
    series: 'XLN-IPM Series',
    voltage: '600V',
    current: '7.5A',
    integratedFeatures: 'Gate Driver, Protection, Bootstrap Diodes',
    controlInterface: '3.3V/5V Logic',
    protectionFeatures: 'UVLO, OT, SC',
    application: 'Small Motor Drives, Appliances',
    datasheet: '/assets/brands/xinleineng/datasheets/xln-ipm7a5.pdf',
    stock: 'In Stock',
    leadTime: '2-3 weeks',
    shortDescription: 'Xinleineng XLN-IPM7A5 600V 7.5A intelligent power module with integrated gate driver and protection. Ideal for small motor drives and home appliances.',
    descriptionParagraphs: [
      'The Xinleineng XLN-IPM7A5 is a compact 600V 7.5A intelligent power module with fully integrated gate driver and protection circuits.',
      'Built-in UVLO, overtemperature, and short-circuit protection simplify design and improve reliability.',
      'The compact package and simple interface make it ideal for small motor drives and appliance applications.'
    ],
    longDescription: 'The Xinleineng XLN-IPM7A5 is a 600V 7.5A intelligent power module designed for small motor drives, home appliances, and cost-sensitive applications requiring integrated protection.',
    features: [
      '600V 7.5A IGBT output',
      'Integrated gate driver',
      'Built-in protection (UVLO, OT, SC)',
      'Bootstrap diodes included',
      '3.3V/5V compatible interface',
      'Compact package',
      'Fault output signal'
    ],
    applications: [
      'Small motor drives (0.75-1.5kW)',
      'Home appliances',
      'Fan drives',
      'Pump controllers',
      'HVAC blowers'
    ],
    specifications: {
      'Voltage Rating': '600V',
      'Current Rating': '7.5A',
      'Control Voltage': '3.3V/5V',
      'Protection': 'UVLO, OT, SC',
      'Isolation': '2500Vrms',
      'Operating Temperature': '-20C to +100C',
      'Package': 'DIP-24'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Motor Control Engineer',
      content: 'The XLN-IPM7A5 is perfect for small appliance and HVAC applications. The integrated protection and simple interface significantly reduce design time. I have used this in washing machine and dishwasher designs with excellent reliability. Through BeiLuo, you can access our FAE team\'s support for motor control designs.',
      highlight: 'Compact IPM for small motor drives with integrated protection'
    },
    alternativeParts: [
      {
        partNumber: 'XLN-IPM15A',
        brand: 'Xinleineng',
        specifications: { voltage: '600V', current: '15A' },
        comparison: 'XLN-IPM7A5=>XLN-IPM15A: Higher current (15A vs 7.5A)',
        reason: 'More power capability',
        useCase: 'Larger small motors',
        link: '#'
      },
      {
        partNumber: 'XLN-IPM30A',
        brand: 'Xinleineng',
        specifications: { voltage: '600V', current: '30A' },
        comparison: 'XLN-IPM7A5=>XLN-IPM30A: Much higher current (30A vs 7.5A)',
        reason: 'Industrial motor drives',
        useCase: 'Industrial applications',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: 'MCU-Motor', category: 'MCU', description: 'Motor control MCU', link: '#' },
      { partNumber: 'Bootstrap-Cap', category: 'Capacitor', description: 'Bootstrap capacitors', link: '#' },
      { partNumber: 'Heatsink-IPM', category: 'Heatsink', description: 'IPM heatsink', link: '#' }
    ],
    faqs: [
      { question: 'What motor size can this drive?', answer: 'Suitable for 0.75-1.5kW motors depending on load.', decisionGuide: 'Match to your motor requirements.', keywords: ['motor size'] },
      { question: 'Is the gate driver included?', answer: 'Yes, fully integrated gate driver with protection.', decisionGuide: 'No external gate driver needed.', keywords: ['gate driver'] },
      { question: 'What protection is built-in?', answer: 'UVLO, overtemperature, and short-circuit protection.', decisionGuide: 'Comprehensive protection included.', keywords: ['protection'] },
      { question: 'Control interface voltage?', answer: 'Compatible with both 3.3V and 5V logic.', decisionGuide: 'Flexible interface options.', keywords: ['interface'] },
      { question: 'Bootstrap diodes included?', answer: 'Yes, bootstrap diodes are integrated.', decisionGuide: 'Simplified bootstrap circuit.', keywords: ['bootstrap'] }
    ]
  },
  {
    partNumber: 'XLN-IPM50A',
    series: 'XLN-IPM Series',
    voltage: '600V',
    current: '50A',
    integratedFeatures: 'Gate Driver, Protection, Bootstrap Diodes',
    controlInterface: '3.3V/5V Logic',
    protectionFeatures: 'UVLO, OT, SC',
    application: 'Industrial Motor Drives, Pumps',
    datasheet: '/assets/brands/xinleineng/datasheets/xln-ipm50a.pdf',
    stock: 'In Stock',
    leadTime: '4-6 weeks',
    shortDescription: 'Xinleineng XLN-IPM50A 600V 50A high-power intelligent power module. Ideal for industrial motor drives and pump applications up to 22kW.',
    descriptionParagraphs: [
      'The Xinleineng XLN-IPM50A is a high-power 600V 50A intelligent power module with fully integrated gate driver and protection circuits.',
      'Built-in UVLO, overtemperature, and short-circuit protection simplify design while the high current rating supports industrial motor drives.',
      'The high integration reduces BOM and design time for motor drive applications up to 22kW.'
    ],
    longDescription: 'The Xinleineng XLN-IPM50A is a 600V 50A intelligent power module designed for industrial motor drives, pumps, and high-power applications requiring integrated protection.',
    features: [
      '600V 50A IGBT output',
      'Integrated gate driver',
      'Built-in protection (UVLO, OT, SC)',
      'Bootstrap diodes included',
      '3.3V/5V compatible interface',
      'High-power capability',
      'Fault output signal'
    ],
    applications: [
      'Industrial motor drives (15-22kW)',
      'Pump drives',
      'Compressor drives',
      'HVAC systems',
      'Industrial fans'
    ],
    specifications: {
      'Voltage Rating': '600V',
      'Current Rating': '50A',
      'Control Voltage': '3.3V/5V',
      'Protection': 'UVLO, OT, SC',
      'Isolation': '2500Vrms',
      'Operating Temperature': '-20C to +100C',
      'Package': 'DIP-36'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Senior Motor Control Engineer',
      content: 'The XLN-IPM50A is an excellent high-power IPM for industrial applications. The 50A rating with integrated protection makes it ideal for pump and compressor drives. I have successfully deployed this in water treatment and HVAC systems with excellent reliability. Through BeiLuo, you can access our FAE team\'s support for industrial motor control designs.',
      highlight: 'High-power IPM for industrial motor drives'
    },
    alternativeParts: [
      {
        partNumber: 'XLN-IPM30A',
        brand: 'Xinleineng',
        specifications: { voltage: '600V', current: '30A' },
        comparison: 'XLN-IPM50A=>XLN-IPM30A: Lower current (30A vs 50A)',
        reason: 'Cost optimization',
        useCase: 'Medium power drives',
        link: '#'
      },
      {
        partNumber: 'XLN150T120',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '150A', type: 'Standard IGBT' },
        comparison: 'XLN-IPM50A=>XLN150T120: Discrete IGBT for higher voltage',
        reason: 'Higher voltage requirement',
        useCase: '690V systems',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: 'MCU-Industrial', category: 'MCU', description: 'Industrial motor control MCU', link: '#' },
      { partNumber: 'Bootstrap-Cap-HV', category: 'Capacitor', description: 'High-voltage bootstrap caps', link: '#' },
      { partNumber: 'Heatsink-IPM-Large', category: 'Heatsink', description: 'Large IPM heatsink', link: '#' }
    ],
    faqs: [
      { question: 'What motor power can this drive?', answer: 'Suitable for 15-22kW motors depending on application requirements.', decisionGuide: 'Match to your motor power rating.', keywords: ['motor power'] },
      { question: 'Is this for industrial use?', answer: 'Yes, designed for industrial motor drive applications.', decisionGuide: 'Industrial-grade reliability.', keywords: ['industrial'] },
      { question: 'What protection features?', answer: 'Full protection: UVLO, overtemperature, short-circuit.', decisionGuide: 'Comprehensive protection included.', keywords: ['protection'] },
      { question: 'Package size?', answer: 'DIP-36 package for high-power applications.', decisionGuide: 'Larger package for higher current.', keywords: ['package'] },
      { question: 'Thermal design?', answer: 'Requires proper heatsink for 50A continuous operation.', decisionGuide: 'Plan adequate cooling.', keywords: ['thermal'] }
    ]
  }
];
ipmModules.products.push(...additionalIPMs);
console.log(`   Intelligent Power Modules分类现在有 ${ipmModules.products.length} 个产品`);

// 为Rectifier Modules添加2个产品
const rectifierModules = productsData.categories.find(cat => cat.id === 'rectifier-modules');
const additionalRectifiers = [
  {
    partNumber: 'XLN-RECT200A',
    series: 'XLN-RECT Series',
    voltage: '1600V',
    current: '200A',
    configuration: 'Three-Phase Bridge',
    vf: '0.85V (typ)',
    application: 'High Power Rectification, Welding',
    datasheet: '/assets/brands/xinleineng/datasheets/xln-rect200a.pdf',
    stock: 'In Stock',
    leadTime: '4-6 weeks',
    shortDescription: 'Xinleineng XLN-RECT200A 1600V 200A three-phase rectifier bridge. Ideal for high-power rectification and welding applications.',
    descriptionParagraphs: [
      'The Xinleineng XLN-RECT200A is a high-power 1600V 200A three-phase rectifier bridge for industrial power conversion.',
      'With low forward voltage drop of 0.85V and robust construction, this rectifier handles high currents with minimal losses.',
      'The three-phase bridge configuration is ideal for high-power rectification and welding power supplies.'
    ],
    longDescription: 'The Xinleineng XLN-RECT200A is a 1600V 200A three-phase rectifier bridge designed for high-power rectification, welding equipment, and industrial power supplies.',
    features: [
      '1600V voltage rating',
      '200A continuous current',
      'Three-phase bridge configuration',
      'Low 0.85V forward voltage',
      'High surge current capability',
      'Robust industrial package',
      'Low thermal resistance'
    ],
    applications: [
      'High-power rectification',
      'Welding power supplies',
      'Industrial DC power',
      'Battery chargers',
      'Plasma cutting'
    ],
    specifications: {
      'Voltage Rating': '1600V',
      'Current Rating': '200A',
      'Configuration': 'Three-Phase Bridge',
      'Forward Voltage': '0.85V @ 200A',
      'Surge Current': '2000A',
      'Operating Temperature': '-40C to +150C',
      'Package': 'Module'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Power Applications Engineer',
      content: 'The XLN-RECT200A is a workhorse for high-power rectification. The 200A rating with low forward voltage drop provides efficient rectification for welding and industrial power supplies. Through BeiLuo, you can access our FAE team\'s support for rectifier applications.',
      highlight: 'High-power rectifier for industrial applications'
    },
    alternativeParts: [
      {
        partNumber: 'XLN-RECT100A',
        brand: 'Xinleineng',
        specifications: { voltage: '1600V', current: '100A' },
        comparison: 'XLN-RECT200A=>XLN-RECT100A: Lower current (100A vs 200A)',
        reason: 'Cost optimization',
        useCase: 'Medium power rectification',
        link: '#'
      },
      {
        partNumber: 'XLN-RECT35A',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '35A' },
        comparison: 'XLN-RECT200A=>XLN-RECT35A: Much lower current (35A vs 200A)',
        reason: 'Low power applications',
        useCase: 'Small rectifiers',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: 'Filter-Cap-HighV', category: 'Capacitor', description: 'High-voltage filter capacitors', link: '#' },
      { partNumber: 'Heatsink-Rect-Large', category: 'Heatsink', description: 'Large rectifier heatsink', link: '#' },
      { partNumber: 'Soft-Start', category: 'Circuit', description: 'Soft-start circuit', link: '#' }
    ],
    faqs: [
      { question: 'What applications?', answer: 'High-power rectification, welding, industrial DC power supplies.', decisionGuide: 'Use for high-current rectification.', keywords: ['applications'] },
      { question: 'What is forward voltage?', answer: '0.85V typical at rated current, minimizing conduction losses.', decisionGuide: 'Efficient rectification.', keywords: ['forward voltage'] },
      { question: 'Surge current capability?', answer: '2000A surge current for handling inrush.', decisionGuide: 'Robust for industrial use.', keywords: ['surge'] },
      { question: 'Thermal design?', answer: 'Requires substantial heatsink for 200A continuous.', decisionGuide: 'Plan for adequate cooling.', keywords: ['thermal'] },
      { question: 'Three-phase input?', answer: 'Yes, three-phase bridge configuration.', decisionGuide: 'For three-phase AC input.', keywords: ['three-phase'] }
    ]
  },
  {
    partNumber: 'XLN-RECT10A',
    series: 'XLN-RECT Series',
    voltage: '1000V',
    current: '10A',
    configuration: 'Single-Phase Bridge',
    vf: '0.9V (typ)',
    application: 'Small Power Supplies, Chargers',
    datasheet: '/assets/brands/xinleineng/datasheets/xln-rect10a.pdf',
    stock: 'In Stock',
    leadTime: '1-2 weeks',
    shortDescription: 'Xinleineng XLN-RECT10A 1000V 10A single-phase rectifier bridge. Ideal for small power supplies and battery chargers.',
    descriptionParagraphs: [
      'The Xinleineng XLN-RECT10A is a compact 1000V 10A single-phase rectifier bridge for small power applications.',
      'With low forward voltage drop and compact package, this rectifier is ideal for power supplies and battery chargers.',
      'The single-phase bridge configuration is perfect for small AC-DC conversion applications.'
    ],
    longDescription: 'The Xinleineng XLN-RECT10A is a 1000V 10A single-phase rectifier bridge designed for small power supplies, battery chargers, and low-power AC-DC conversion.',
    features: [
      '1000V voltage rating',
      '10A continuous current',
      'Single-phase bridge',
      'Low forward voltage',
      'Compact package',
      'Cost-effective',
      'Easy mounting'
    ],
    applications: [
      'Small power supplies',
      'Battery chargers',
      'DC power adapters',
      'LED drivers',
      'Small appliances'
    ],
    specifications: {
      'Voltage Rating': '1000V',
      'Current Rating': '10A',
      'Configuration': 'Single-Phase Bridge',
      'Forward Voltage': '0.9V @ 10A',
      'Surge Current': '200A',
      'Operating Temperature': '-40C to +125C',
      'Package': 'GBJ'
    },
    faeReview: {
      author: 'BeiLuo FAE Team',
      title: 'Power Applications Engineer',
      content: 'The XLN-RECT10A is a reliable small rectifier for power supplies and chargers. The compact GBJ package is easy to mount and provides adequate cooling. Through BeiLuo, you can access our FAE team\'s support for power supply designs.',
      highlight: 'Compact rectifier for small power supplies'
    },
    alternativeParts: [
      {
        partNumber: 'XLN-RECT35A',
        brand: 'Xinleineng',
        specifications: { voltage: '1200V', current: '35A' },
        comparison: 'XLN-RECT10A=>XLN-RECT35A: Higher current (35A vs 10A)',
        reason: 'More power capability',
        useCase: 'Larger power supplies',
        link: '#'
      },
      {
        partNumber: 'XLN-RECT100A',
        brand: 'Xinleineng',
        specifications: { voltage: '1600V', current: '100A' },
        comparison: 'XLN-RECT10A=>XLN-RECT100A: Much higher current (100A vs 10A)',
        reason: 'High power applications',
        useCase: 'Industrial rectifiers',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: 'Filter-Cap-Small', category: 'Capacitor', description: 'Small filter capacitors', link: '#' },
      { partNumber: 'Heatsink-Small', category: 'Heatsink', description: 'Small rectifier heatsink', link: '#' },
      { partNumber: 'Fuse-10A', category: 'Protection', description: 'Input protection fuse', link: '#' }
    ],
    faqs: [
      { question: 'What applications?', answer: 'Small power supplies, battery chargers, DC adapters.', decisionGuide: 'Use for low-power rectification.', keywords: ['applications'] },
      { question: 'Package type?', answer: 'GBJ package for easy PCB mounting.', decisionGuide: 'Standard through-hole package.', keywords: ['package'] },
      { question: 'Heat sinking?', answer: 'Small heatsink or PCB copper area sufficient.', decisionGuide: 'Simple thermal design.', keywords: ['heatsink'] },
      { question: 'Input protection?', answer: 'Recommended to use input fuse for protection.', decisionGuide: 'Add fuse for safety.', keywords: ['protection'] },
      { question: 'Cost effective?', answer: 'Yes, economical solution for small rectifiers.', decisionGuide: 'Good value for small apps.', keywords: ['cost'] }
    ]
  }
];
rectifierModules.products.push(...additionalRectifiers);
console.log(`   Rectifier Modules分类现在有 ${rectifierModules.products.length} 个产品`);

// 2. 添加第3个解决方案
console.log('\n2. 添加第3个解决方案...');

const newSolution = {
  id: 'ev-charging-power-solution',
  title: 'EV Charging Power Module Solution',
  slug: 'ev-charging-power-solution',
  description: 'High-efficiency power solution for electric vehicle charging stations using Xinleineng SiC and IGBT modules.',
  longDescription: 'The EV Charging Power Module Solution provides a complete power stage design for electric vehicle charging stations. This solution leverages Xinleineng SiC MOSFET modules for the highest efficiency and power density, with IGBT options for cost-sensitive applications.',
  features: [
    '99%+ efficiency with SiC modules',
    '30-100kHz switching frequency',
    'Power factor correction included',
    'CCS and CHAdeMO compatible',
    'Liquid cooling ready',
    'Scalable from 30kW to 350kW'
  ],
  applications: [
    'DC fast charging stations',
    'Level 3 EV chargers',
    'Fleet charging systems',
    'Highway charging networks'
  ],
  specifications: {
    'Input Voltage': '380-480V AC',
    'Output Voltage': '200-1000V DC',
    'Output Power': '30-350kW',
    'Efficiency': '>99% (SiC)',
    'Power Factor': '>0.99',
    'THD': '<5%'
  },
  technicalSpecs: {
    'Topology': 'Vienna PFC + LLC',
    'Switching Frequency': '50-100kHz',
    'Cooling': 'Liquid or forced air',
    'Isolation': '4000V',
    'Protection': 'OVP, OCP, OTP, SCP'
  },
  coreAdvantages: [
    { title: 'Ultra-High Efficiency', description: '99%+ efficiency with SiC reduces operating costs' },
    { title: 'High Power Density', description: 'Compact design enables smaller charging stations' },
    { title: 'Fast Charging', description: 'Supports 350kW for ultra-fast charging' },
    { title: 'Standards Compliant', description: 'CCS, CHAdeMO, and GB/T compatible' },
    { title: 'Scalable Design', description: 'Modular architecture from 30kW to 350kW' }
  ],
  bomList: [
    { designator: 'Q1-Q6', partNumber: 'XLN120M120-SiC', description: 'SiC MOSFET modules', quantity: 6, link: '#' },
    { designator: 'D1-D6', partNumber: 'SiC-Diode-1200V', description: 'SiC Schottky diodes', quantity: 6, link: '#' },
    { designator: 'L1', partNumber: 'PFC-Inductor', description: 'PFC inductor', quantity: 1, link: '#' },
    { designator: 'T1', partNumber: 'LLC-Transformer', description: 'LLC transformer', quantity: 1, link: '#' }
  ],
  customerCases: [
    {
      customerName: 'EV Charging Network Operator',
      industry: 'Electric Vehicles',
      application: 'DC Fast Charging Station',
      challenge: 'Needed high-efficiency 150kW charging solution.',
      solution: 'Implemented Xinleineng SiC-based power stage.',
      results: 'Achieved 99.2% efficiency and compact design.',
      result: 'Deployed 500+ charging stations nationwide.'
    },
    {
      customerName: 'Fleet Charging Provider',
      industry: 'Transportation',
      application: 'Fleet Charging Hub',
      challenge: 'Required scalable charging for electric bus fleet.',
      solution: 'Used modular Xinleineng solution for 350kW chargers.',
      results: 'Enabled fast turnaround for electric buses.',
      result: 'Successfully charging 100+ buses daily.'
    }
  ],
  faeInsights: {
    author: { name: 'EV Power FAE', title: 'Senior Applications Engineer', experience: '10 years' },
    insight: 'EV charging demands the highest efficiency and reliability. This solution delivers with SiC technology and comprehensive protection.',
    logic: 'Design approach: 1) PFC stage for power factor, 2) Isolated DC-DC for voltage conversion, 3) Comprehensive protection for reliability.',
    keyTakeaways: [
      'SiC enables 99%+ efficiency',
      'Liquid cooling required for high power',
      'Standards compliance is critical',
      'Modular design enables scalability'
    ],
    commonPitfalls: [
      'Inadequate cooling design',
      'Insufficient EMI filtering',
      'Poor protection coordination'
    ],
    bestPractices: [
      'Use SiC for highest efficiency',
      'Implement liquid cooling',
      'Design for standards compliance',
      'Plan for scalability'
    ],
    content: 'Based on extensive EV charging experience, this solution provides the efficiency and reliability needed for commercial charging infrastructure.',
    decisionFramework: {
      title: 'EV Charging Design Framework',
      steps: ['Define power level', 'Select topology', 'Design cooling', 'Implement protection', 'Validate standards']
    }
  },
  faqs: [
    { question: 'What power levels are supported?', answer: 'Scalable from 30kW to 350kW per module.', decisionGuide: 'Select based on charging speed requirements.', keywords: ['power level'] },
    { question: 'Efficiency with SiC?', answer: '99%+ efficiency achievable with SiC MOSFETs.', decisionGuide: 'Use SiC for highest efficiency.', keywords: ['efficiency'] },
    { question: 'Cooling requirements?', answer: 'Liquid cooling recommended for 100kW+.', decisionGuide: 'Plan adequate cooling for power level.', keywords: ['cooling'] },
    { question: 'Standards compliance?', answer: 'Compatible with CCS, CHAdeMO, and GB/T standards.', decisionGuide: 'Design for target market standards.', keywords: ['standards'] },
    { question: 'Scalability?', answer: 'Modular design allows parallel operation for higher power.', decisionGuide: 'Start with base module and scale.', keywords: ['scalability'] }
  ],
  benefits: [
    'Ultra-high efficiency reduces operating costs',
    'Compact design minimizes station footprint',
    'Fast charging capability enhances user experience',
    'Standards compliance ensures broad compatibility',
    'Scalable architecture protects investment'
  ]
};

solutionsData.solutions.push(newSolution);
console.log(`   已添加解决方案: ${newSolution.title}`);
console.log(`   解决方案总数: ${solutionsData.solutions.length}`);

// 3. 添加第5篇技术支持文章
console.log('\n3. 添加第5篇技术支持文章...');

const newArticle = {
  id: 'sic-module-application-guide',
  slug: 'sic-module-application-guide',
  title: 'SiC Power Module Application Guide',
  subtitle: 'Best practices for designing with SiC MOSFET modules',
  author: {
    name: 'Dr. Li Wei',
    title: 'Principal Power Electronics Engineer',
    image: '/images/authors/dr-li-wei.jpg'
  },
  publishDate: '2024-05-15',
  readTime: '22 min',
  summary: 'This guide covers SiC MOSFET module selection, gate drive design, thermal management, and application considerations for high-efficiency power conversion.',
  tags: ['SiC', 'MOSFET', 'gate drive', 'thermal design', 'high efficiency'],
  relatedArticles: [
    { title: 'Gate Drive Design Guide', link: '/xinleineng/support/gate-drive-design-guide.html' },
    { title: 'Thermal Management Guide', link: '/xinleineng/support/thermal-management-guide.html' },
    { title: 'Parallel Operation Guide', link: '/xinleineng/support/parallel-operation-guide.html' }
  ],
  faeInsights: {
    insight: 'SiC technology requires careful attention to gate drive and thermal design. This guide provides proven methodologies for successful SiC implementation.',
    logic: 'Design process: 1) Select appropriate SiC module, 2) Design gate drive circuit, 3) Plan thermal management, 4) Implement protection, 5) Validate performance.',
    keyTakeaways: [
      'Gate drive design is critical for SiC performance',
      'Thermal management enables high-temperature operation',
      'Proper layout minimizes parasitic inductance',
      'Protection circuits prevent catastrophic failure'
    ],
    commonPitfalls: [
      'Inadequate gate drive voltage',
      'Insufficient cooling',
      'High parasitic inductance',
      'Poor layout practices'
    ],
    bestPractices: [
      'Use recommended gate drive voltages',
      'Design adequate thermal management',
      'Minimize parasitic inductance',
      'Implement comprehensive protection'
    ]
  },
  customerCases: [
    {
      customerName: 'Solar Inverter Manufacturer',
      industry: 'Renewable Energy',
      application: 'High-Efficiency Inverter',
      challenge: 'Needed to achieve 99% efficiency in solar inverter.',
      solution: 'Followed SiC application guide for gate drive and thermal design.',
      result: 'Achieved 99.2% efficiency and passed all certifications.'
    }
  ],
  faqs: [
    { question: 'What gate voltage for SiC?', answer: 'Recommended +15V/-4V for optimal performance and reliability.', decisionGuide: 'Use recommended gate drive voltages.', keywords: ['gate voltage'] },
    { question: 'How to minimize ringing?', answer: 'Minimize loop inductance and use proper gate resistance.', decisionGuide: 'Follow layout guidelines.', keywords: ['ringing'] },
    { question: 'Thermal design considerations?', answer: 'SiC can operate at higher temperatures but still requires proper cooling.', decisionGuide: 'Design for maximum junction temperature.', keywords: ['thermal'] },
    { question: 'Protection requirements?', answer: 'Overcurrent, overvoltage, and overtemperature protection essential.', decisionGuide: 'Implement comprehensive protection.', keywords: ['protection'] },
    { question: 'Cost vs IGBT?', answer: 'SiC premium justified by system-level savings in cooling and magnetics.', decisionGuide: 'Evaluate total system cost.', keywords: ['cost'] }
  ]
};

supportData.articles.push(newArticle);
console.log(`   已添加文章: ${newArticle.title}`);
console.log(`   文章总数: ${supportData.articles.length}`);

// 保存文件
fs.writeFileSync('./data/xinleineng/products.json', JSON.stringify(productsData, null, 2));
fs.writeFileSync('./data/xinleineng/solutions.json', JSON.stringify(solutionsData, null, 2));
fs.writeFileSync('./data/xinleineng/support.json', JSON.stringify(supportData, null, 2));

console.log('\n========================================');
console.log('xinleineng 品牌补充完成！');
console.log('- 4个产品分类，每个分类4个产品');
console.log('- 3个解决方案');
console.log('- 5篇技术支持文章');
console.log('========================================');
