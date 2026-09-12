const fs = require('fs');

console.log('开始为 xghc 品牌添加更多产品、分类和解决方案...\n');

// 读取现有数据
const productsData = JSON.parse(fs.readFileSync('./data/xghc/products.json', 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync('./data/xghc/solutions.json', 'utf8'));
const supportData = JSON.parse(fs.readFileSync('./data/xghc/support.json', 'utf8'));

// 1. 为现有分类添加更多产品（每个分类需要4个产品）
console.log('1. 为现有分类添加更多产品...');

// 为Crystal Resonators添加2个产品
const crystalResonators = productsData.categories.find(cat => cat.id === 'crystal-resonators');
const additionalResonators = [
  {
    partNumber: '3225-12MHz-20pF',
    name: '3225 SMD Crystal Resonator 12MHz',
    shortDescription: 'Compact 3225 SMD crystal resonator, 12MHz frequency, 20pF load capacitance, ±20ppm tolerance, ideal for USB and communication applications.',
    descriptionParagraphs: [
      'The 3225-12MHz-20pF is a compact surface-mount crystal resonator in the 3.2mm x 2.5mm package. It provides a stable 12MHz frequency reference with ±20ppm tolerance.',
      'This crystal features 20pF load capacitance, suitable for USB applications and communication interfaces. The 3225 package offers excellent balance between size and performance.',
      'With industrial temperature range of -40°C to +85°C and reliable ceramic package construction, this crystal is widely used in USB devices, industrial control, and consumer electronics.'
    ],
    specifications: {
      'Frequency': '12.000 MHz',
      'Tolerance': '±20 ppm',
      'Load Capacitance': '20 pF',
      'ESR': '≤60 Ω',
      'Drive Level': '10-100 μW',
      'Temperature Range': '-40°C to +85°C',
      'Aging': '±3 ppm/year',
      'Package': '3225 (3.2mm x 2.5mm) SMD'
    },
    features: [
      'Compact 3225 SMD package',
      '12MHz frequency for USB applications',
      '20pF load capacitance',
      'Industrial temperature range',
      'Low ESR for reliable oscillation',
      '±20ppm tolerance'
    ],
    applications: [
      'USB device clock',
      'Communication interfaces',
      'Industrial control',
      'Consumer electronics'
    ],
    faeReview: {
      author: 'LiTong FAE Team',
      content: 'The 3225-12MHz-20pF is an excellent choice for USB applications. The 12MHz frequency is standard for USB full-speed devices. We have successfully deployed this crystal in numerous USB designs with excellent results.',
      highlight: 'Ideal for USB applications with reliable performance'
    },
    alternativeParts: [
      {
        partNumber: '3225-12MHz-10ppm',
        brand: 'XGHC',
        specifications: { note: 'Similar' },
        comparison: '3225-12MHz-20pF=>3225-12MHz-10ppm: Higher precision version',
        reason: 'Higher precision',
        useCase: 'Precision applications',
        link: '#'
      },
      {
        partNumber: '2520-12MHz-20pF',
        brand: 'XGHC',
        specifications: { note: 'Smaller package' },
        comparison: '3225-12MHz-20pF=>2520-12MHz-20pF: Smaller package option',
        reason: 'Space saving',
        useCase: 'Compact designs',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '22pF Capacitor', link: '#', description: 'Load capacitors', category: 'Passive' },
      { partNumber: 'USB Controller', link: '#', description: 'USB interface chip', category: 'IC' },
      { partNumber: 'Test Socket', link: '#', description: '3225 test socket', category: 'Test' }
    ],
    faqs: [
      { question: 'What load capacitors should I use?', answer: 'Use two 27pF ceramic capacitors for 20pF CL crystal.', decisionGuide: 'Start with 27pF and verify frequency.', keywords: ['load capacitor'] },
      { question: 'Is this suitable for USB applications?', answer: 'Yes, 12MHz is the standard frequency for USB full-speed devices.', decisionGuide: 'Ideal for USB designs.', keywords: ['USB'] },
      { question: 'What is the temperature range?', answer: '-40°C to +85°C industrial grade.', decisionGuide: 'Suitable for industrial applications.', keywords: ['temperature'] },
      { question: 'Can I use this for UART?', answer: 'Yes, suitable for UART communication with proper baud rate settings.', decisionGuide: 'Verify baud rate accuracy requirements.', keywords: ['UART'] },
      { question: 'What is the ESR?', answer: 'Maximum 60Ω ESR for reliable oscillation.', decisionGuide: 'Compatible with most MCUs.', keywords: ['ESR'] }
    ]
  },
  {
    partNumber: '1612-32.768kHz-12.5pF',
    name: 'Ultra-Miniature 32.768kHz Crystal',
    shortDescription: 'Ultra-compact 1612 SMD crystal, 32.768kHz frequency, 12.5pF load capacitance, ±20ppm tolerance, ideal for RTC and low-power applications.',
    descriptionParagraphs: [
      'The 1612-32.768kHz-12.5pF is an ultra-compact surface-mount crystal in the 1.6mm x 1.2mm package. It provides the standard 32.768kHz frequency for real-time clock applications.',
      'This crystal features 12.5pF load capacitance, optimized for low-power RTC circuits. The miniature 1612 package is ideal for wearable devices and IoT applications.',
      'With extended temperature range and low power consumption, this crystal is perfect for battery-powered devices requiring accurate timekeeping.'
    ],
    specifications: {
      'Frequency': '32.768 kHz',
      'Tolerance': '±20 ppm',
      'Load Capacitance': '12.5 pF',
      'ESR': '≤50 kΩ',
      'Drive Level': '0.1-1 μW',
      'Temperature Range': '-40°C to +85°C',
      'Aging': '±5 ppm/year',
      'Package': '1612 (1.6mm x 1.2mm) SMD'
    },
    features: [
      'Ultra-compact 1612 package',
      '32.768kHz RTC frequency',
      '12.5pF load capacitance',
      'Ultra-low power consumption',
      'Extended temperature range',
      'High ESR for low-power circuits'
    ],
    applications: [
      'Real-time clock (RTC)',
      'Wearable devices',
      'IoT sensors',
      'Battery-powered devices'
    ],
    faeReview: {
      author: 'LiTong FAE Team',
      content: 'The 1612-32.768kHz-12.5pF is perfect for RTC applications in compact designs. The ultra-small package saves significant board space while maintaining excellent frequency stability.',
      highlight: 'Ultra-compact RTC crystal for space-constrained designs'
    },
    alternativeParts: [
      {
        partNumber: '2016-32.768kHz-12.5pF',
        brand: 'XGHC',
        specifications: { note: 'Larger package' },
        comparison: '1612-32.768kHz-12.5pF=>2016-32.768kHz-12.5pF: Larger package with lower ESR',
        reason: 'Easier handling',
        useCase: 'When 1612 is too small',
        link: '#'
      },
      {
        partNumber: 'FC-135',
        brand: 'XGHC',
        specifications: { note: 'Cylinder package' },
        comparison: '1612-32.768kHz-12.5pF=>FC-135: Cylinder package alternative',
        reason: 'Through-hole option',
        useCase: 'Prototype designs',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '12pF Capacitor', link: '#', description: 'Load capacitors', category: 'Passive' },
      { partNumber: 'RTC Chip', link: '#', description: 'Real-time clock IC', category: 'IC' },
      { partNumber: 'Battery', link: '#', description: 'Backup battery', category: 'Power' }
    ],
    faqs: [
      { question: 'What is 32.768kHz used for?', answer: 'Standard frequency for real-time clock (RTC) circuits, divides down to 1Hz for timekeeping.', decisionGuide: 'Use for RTC applications.', keywords: ['RTC'] },
      { question: 'Why such high ESR?', answer: 'High ESR is normal for 32.768kHz crystals and suitable for low-power RTC circuits.', decisionGuide: 'Normal for low-frequency crystals.', keywords: ['ESR'] },
      { question: 'What load capacitors?', answer: 'Use two 15pF ceramic capacitors for 12.5pF CL.', decisionGuide: 'Start with 15pF.', keywords: ['load capacitor'] },
      { question: 'Is this suitable for wearables?', answer: 'Yes, the 1612 package is ideal for wearable devices.', decisionGuide: 'Perfect for compact designs.', keywords: ['wearable'] },
      { question: 'Battery life impact?', answer: 'Very low power consumption, minimal impact on battery life.', decisionGuide: 'Suitable for battery applications.', keywords: ['battery'] }
    ]
  }
];
crystalResonators.products.push(...additionalResonators);
console.log(`   Crystal Resonators分类现在有 ${crystalResonators.products.length} 个产品`);

// 为Crystal Oscillators添加2个产品
const crystalOscillators = productsData.categories.find(cat => cat.id === 'crystal-oscillators');
const additionalOscillators = [
  {
    partNumber: 'XO-48MHz-3.3V-CMOS',
    name: '48MHz CMOS Crystal Oscillator',
    shortDescription: 'Standard crystal oscillator, 48MHz frequency, 3.3V operation, CMOS output, ±50ppm stability, ideal for USB and high-speed applications.',
    descriptionParagraphs: [
      'The XO-48MHz-3.3V-CMOS is a standard crystal oscillator providing a stable 48MHz clock output. It operates from 3.3V supply and provides CMOS logic levels.',
      'This oscillator features ±50ppm total stability and is ideal for USB applications and high-speed digital systems. The built-in oscillator circuit ensures reliable start-up.',
      'Housed in a compact ceramic SMD package, this oscillator is perfect for applications requiring a simple high-frequency clock solution.'
    ],
    specifications: {
      'Frequency': '48.000 MHz',
      'Frequency Stability': '±50 ppm',
      'Output Type': 'CMOS',
      'Supply Voltage': '3.3V ±10%',
      'Output Voltage': '0.2V to VDD-0.2V',
      'Rise/Fall Time': '≤3 ns',
      'Duty Cycle': '45-55%',
      'Current Consumption': '≤20 mA',
      'Temperature Range': '-20°C to +70°C',
      'Package': '5.0 x 3.2mm SMD'
    },
    features: [
      'Stable 48MHz CMOS output',
      '3.3V operation',
      '±50ppm stability',
      'No external components',
      'Fast start-up',
      'Enable/disable control'
    ],
    applications: [
      'USB applications',
      'High-speed MCU clock',
      'FPGA clock source',
      'Communication equipment'
    ],
    faeReview: {
      author: 'LiTong FAE Team',
      content: 'The XO-48MHz-3.3V-CMOS is excellent for USB and high-speed applications. The 48MHz frequency is standard for USB high-speed devices. Plug-and-play simplicity.',
      highlight: 'Perfect for USB high-speed applications'
    },
    alternativeParts: [
      {
        partNumber: 'XO-48MHz-3.3V-25ppm',
        brand: 'XGHC',
        specifications: { note: 'Better stability' },
        comparison: 'XO-48MHz-3.3V-CMOS=>XO-48MHz-3.3V-25ppm: Better stability version',
        reason: 'Higher precision',
        useCase: 'Precision applications',
        link: '#'
      },
      {
        partNumber: 'XO-48MHz-1.8V-CMOS',
        brand: 'XGHC',
        specifications: { note: 'Lower voltage' },
        comparison: 'XO-48MHz-3.3V-CMOS=>XO-48MHz-1.8V-CMOS: 1.8V operation version',
        reason: 'Low voltage systems',
        useCase: '1.8V applications',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '0.1uF Capacitor', link: '#', description: 'Decoupling capacitor', category: 'Passive' },
      { partNumber: 'USB PHY', link: '#', description: 'USB transceiver', category: 'IC' },
      { partNumber: 'FPGA', link: '#', description: 'High-speed FPGA', category: 'IC' }
    ],
    faqs: [
      { question: 'Is this suitable for USB?', answer: 'Yes, 48MHz is standard for USB high-speed applications.', decisionGuide: 'Ideal for USB designs.', keywords: ['USB'] },
      { question: 'Power consumption?', answer: 'Maximum 20mA at 3.3V.', decisionGuide: 'Consider power budget.', keywords: ['power'] },
      { question: 'Start-up time?', answer: 'Less than 10ms typical.', decisionGuide: 'Fast start-up for quick boot.', keywords: ['start-up'] },
      { question: 'Output enable function?', answer: 'Yes, has OE pin for output control.', decisionGuide: 'Use for power saving.', keywords: ['OE'] },
      { question: 'Temperature range?', answer: 'Commercial grade -20°C to +70°C.', decisionGuide: 'For indoor applications.', keywords: ['temperature'] }
    ]
  },
  {
    partNumber: 'VCXO-27MHz-3.3V',
    name: '27MHz VCXO Voltage Controlled Oscillator',
    shortDescription: 'Voltage controlled crystal oscillator, 27MHz frequency, 3.3V operation, ±50ppm pullability, ideal for clock synchronization applications.',
    descriptionParagraphs: [
      'The VCXO-27MHz-3.3V is a voltage controlled crystal oscillator allowing frequency adjustment via control voltage. It provides 27MHz output with ±50ppm pullability range.',
      'This VCXO is ideal for clock synchronization applications where frequency trimming is required. The control voltage input allows precise frequency adjustment.',
      'With 3.3V operation and CMOS output, this VCXO is compatible with modern digital systems requiring adjustable clock frequencies.'
    ],
    specifications: {
      'Frequency': '27.000 MHz',
      'Pullability Range': '±50 ppm',
      'Control Voltage': '0.5V to 3.0V',
      'Output Type': 'CMOS',
      'Supply Voltage': '3.3V ±10%',
      'Current Consumption': '≤25 mA',
      'Temperature Range': '-20°C to +70°C',
      'Package': '5.0 x 3.2mm SMD'
    },
    features: [
      'Voltage controlled frequency',
      '±50ppm pullability range',
      '27MHz standard frequency',
      '3.3V operation',
      'CMOS output',
      'Linear control characteristic'
    ],
    applications: [
      'Clock synchronization',
      'Frequency tuning',
      'PLL reference',
      'Communication systems'
    ],
    faeReview: {
      author: 'LiTong FAE Team',
      content: 'The VCXO-27MHz-3.3V provides excellent frequency control for synchronization applications. The linear control characteristic makes PLL design straightforward.',
      highlight: 'Excellent for clock synchronization and PLL applications'
    },
    alternativeParts: [
      {
        partNumber: 'VCXO-27MHz-100ppm',
        brand: 'XGHC',
        specifications: { note: 'Wider range' },
        comparison: 'VCXO-27MHz-3.3V=>VCXO-27MHz-100ppm: Wider pullability range',
        reason: 'More tuning range',
        useCase: 'Wide tuning applications',
        link: '#'
      },
      {
        partNumber: 'TCXO-27MHz-3.3V',
        brand: 'XGHC',
        specifications: { note: 'Temperature compensated' },
        comparison: 'VCXO-27MHz-3.3V=>TCXO-27MHz-3.3V: Temperature compensated version',
        reason: 'Better stability',
        useCase: 'High stability needs',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: 'DAC', link: '#', description: 'Control voltage DAC', category: 'IC' },
      { partNumber: 'PLL', link: '#', description: 'PLL chip', category: 'IC' },
      { partNumber: 'Filter', link: '#', description: 'Loop filter', category: 'Passive' }
    ],
    faqs: [
      { question: 'What is VCXO used for?', answer: 'Voltage Controlled Crystal Oscillator for frequency tuning and synchronization.', decisionGuide: 'Use when frequency adjustment needed.', keywords: ['VCXO'] },
      { question: 'How to control frequency?', answer: 'Apply control voltage (0.5V to 3.0V) to adjust frequency ±50ppm.', decisionGuide: 'Use DAC or potentiometer.', keywords: ['control'] },
      { question: 'Is the control linear?', answer: 'Yes, approximately linear control characteristic.', decisionGuide: 'Easy to design control loop.', keywords: ['linear'] },
      { question: 'What is pullability?', answer: 'Range of frequency adjustment, ±50ppm for this VCXO.', decisionGuide: 'Sufficient for most PLL applications.', keywords: ['pullability'] },
      { question: 'Can this be used in PLL?', answer: 'Yes, ideal as PLL reference oscillator.', decisionGuide: 'Perfect for PLL applications.', keywords: ['PLL'] }
    ]
  }
];
crystalOscillators.products.push(...additionalOscillators);
console.log(`   Crystal Oscillators分类现在有 ${crystalOscillators.products.length} 个产品`);

// 为Automotive Crystals添加2个产品
const automotiveCrystals = productsData.categories.find(cat => cat.id === 'automotive-crystals');
const additionalAutomotive = [
  {
    partNumber: '3225-25MHz-AECQ200-G1',
    name: 'AEC-Q200 Grade 1 Crystal 25MHz',
    shortDescription: 'Automotive grade crystal resonator, AEC-Q200 Grade 1 qualified, 25MHz frequency, -40°C to +125°C, for automotive Ethernet and communication.',
    descriptionParagraphs: [
      'The 3225-25MHz-AECQ200-G1 is an AEC-Q200 Grade 1 qualified crystal for automotive communication applications. It provides 25MHz frequency reference across automotive temperature range.',
      'This crystal is ideal for automotive Ethernet PHYs and communication interfaces. It has passed full AEC-Q200 qualification testing.',
      'The 3225 package is compatible with automated automotive assembly processes. Full PPAP documentation is available.'
    ],
    specifications: {
      'Frequency': '25.000 MHz',
      'Tolerance': '±30 ppm',
      'Load Capacitance': '12 pF',
      'ESR': '≤80 Ω',
      'Drive Level': '10-100 μW',
      'Temperature Range': '-40°C to +125°C',
      'AEC-Q200 Grade': 'Grade 1',
      'Aging': '±3 ppm/year',
      'Package': '3225 (3.2mm x 2.5mm) SMD'
    },
    features: [
      'AEC-Q200 Grade 1 qualified',
      '25MHz for automotive Ethernet',
      'Automotive temperature range',
      'Low ESR',
      'IATF 16949 certified',
      'PPAP documentation'
    ],
    applications: [
      'Automotive Ethernet',
      'ADAS communication',
      'Infotainment systems',
      'Gateway modules'
    ],
    faeReview: {
      author: 'LiTong FAE Team',
      content: 'The 3225-25MHz-AECQ200-G1 is ideal for automotive Ethernet applications. The 25MHz frequency matches most automotive Ethernet PHY requirements.',
      highlight: 'Perfect for automotive Ethernet and communication'
    },
    alternativeParts: [
      {
        partNumber: '3225-25MHz-AECQ200-G0',
        brand: 'XGHC',
        specifications: { note: 'Grade 0' },
        comparison: '3225-25MHz-AECQ200-G1=>3225-25MHz-AECQ200-G0: Grade 0 for extreme temps',
        reason: 'Higher grade',
        useCase: 'Powertrain applications',
        link: '#'
      },
      {
        partNumber: '3225-25MHz-20ppm-G1',
        brand: 'XGHC',
        specifications: { note: 'Better tolerance' },
        comparison: '3225-25MHz-AECQ200-G1=>3225-25MHz-20ppm-G1: Tighter tolerance',
        reason: 'Better precision',
        useCase: 'Precision timing',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '15pF AEC-Q200', link: '#', description: 'Automotive load caps', category: 'Passive' },
      { partNumber: 'Ethernet PHY', link: '#', description: 'Automotive Ethernet PHY', category: 'IC' },
      { partNumber: 'PPAP', link: '#', description: 'PPAP documentation', category: 'Docs' }
    ],
    faqs: [
      { question: 'For automotive Ethernet?', answer: 'Yes, 25MHz is standard for automotive Ethernet PHYs.', decisionGuide: 'Ideal for 100BASE-T1.', keywords: ['Ethernet'] },
      { question: 'AEC-Q200 Grade 1 vs G0?', answer: 'G1 is -40 to +125°C, G0 is -40 to +150°C.', decisionGuide: 'Choose based on location.', keywords: ['Grade'] },
      { question: 'PPAP available?', answer: 'Yes, full PPAP Level 3 documentation provided.', decisionGuide: 'Contact FAE for PPAP.', keywords: ['PPAP'] },
      { question: 'Long-term supply?', answer: '10-15 year supply commitment for automotive.', decisionGuide: 'Automotive lifecycle support.', keywords: ['supply'] },
      { question: 'Traceability?', answer: 'Full lot traceability provided.', decisionGuide: 'Full supply chain tracking.', keywords: ['traceability'] }
    ]
  },
  {
    partNumber: '3225-8MHz-AECQ200-G1',
    name: 'AEC-Q200 Grade 1 Crystal 8MHz',
    shortDescription: 'Automotive grade crystal resonator, AEC-Q200 Grade 1 qualified, 8MHz frequency, -40°C to +125°C, for automotive MCU clock.',
    descriptionParagraphs: [
      'The 3225-8MHz-AECQ200-G1 is an AEC-Q200 Grade 1 qualified crystal for automotive microcontroller applications. It provides 8MHz frequency reference.',
      'This crystal is widely used for automotive MCU clock sources including body control modules and instrument clusters.',
      'Full AEC-Q200 qualification and PPAP documentation ensure compliance with automotive OEM requirements.'
    ],
    specifications: {
      'Frequency': '8.000 MHz',
      'Tolerance': '±30 ppm',
      'Load Capacitance': '20 pF',
      'ESR': '≤80 Ω',
      'Drive Level': '10-100 μW',
      'Temperature Range': '-40°C to +125°C',
      'AEC-Q200 Grade': 'Grade 1',
      'Aging': '±3 ppm/year',
      'Package': '3225 (3.2mm x 2.5mm) SMD'
    },
    features: [
      'AEC-Q200 Grade 1 qualified',
      '8MHz for automotive MCUs',
      'Automotive temperature range',
      'Low ESR',
      'IATF 16949 certified',
      'PPAP documentation'
    ],
    applications: [
      'Automotive MCU clock',
      'Body control modules',
      'Instrument clusters',
      'HVAC control'
    ],
    faeReview: {
      author: 'LiTong FAE Team',
      content: 'The 3225-8MHz-AECQ200-G1 is a workhorse for automotive MCU applications. Compatible with S32K, RH850, and other automotive MCUs.',
      highlight: 'Standard automotive MCU crystal'
    },
    alternativeParts: [
      {
        partNumber: '3225-8MHz-AECQ200-G0',
        brand: 'XGHC',
        specifications: { note: 'Grade 0' },
        comparison: '3225-8MHz-AECQ200-G1=>3225-8MHz-AECQ200-G0: Grade 0 version',
        reason: 'Extreme temperature',
        useCase: 'Powertrain',
        link: '#'
      },
      {
        partNumber: '3225-8MHz-20ppm-G1',
        brand: 'XGHC',
        specifications: { note: 'Better tolerance' },
        comparison: '3225-8MHz-AECQ200-G1=>3225-8MHz-20ppm-G1: Tighter tolerance',
        reason: 'Better precision',
        useCase: 'Precision apps',
        link: '#'
      }
    ],
    companionParts: [
      { partNumber: '22pF AEC-Q200', link: '#', description: 'Automotive load caps', category: 'Passive' },
      { partNumber: 'S32K', link: '#', description: 'NXP automotive MCU', category: 'IC' },
      { partNumber: 'RH850', link: '#', description: 'Renesas automotive MCU', category: 'IC' }
    ],
    faqs: [
      { question: 'Which MCUs?', answer: 'Compatible with S32K, RH850, Aurix, and other automotive MCUs.', decisionGuide: 'Standard 8MHz crystal.', keywords: ['MCU'] },
      { question: 'Load capacitors?', answer: 'Use two 27pF AEC-Q200 capacitors.', decisionGuide: 'Automotive grade caps.', keywords: ['capacitor'] },
      { question: 'Grade 1 sufficient?', answer: 'Yes, for most automotive applications.', decisionGuide: 'Use G0 for powertrain.', keywords: ['Grade'] },
      { question: 'Documentation?', answer: 'Full PPAP and AEC-Q200 reports available.', decisionGuide: 'Contact FAE for docs.', keywords: ['documentation'] },
      { question: 'Stock available?', answer: 'Yes, LiTong maintains automotive inventory.', decisionGuide: 'Contact sales for availability.', keywords: ['stock'] }
    ]
  }
];
automotiveCrystals.products.push(...additionalAutomotive);
console.log(`   Automotive Crystals分类现在有 ${automotiveCrystals.products.length} 个产品`);

// 2. 添加第4个产品分类 - TCXO High Stability
console.log('\n2. 添加第4个产品分类...');

const newCategory = {
  id: 'tcxo-high-stability',
  name: 'TCXO High Stability',
  slug: 'tcxo-high-stability',
  description: 'XGHC TCXO (Temperature Compensated Crystal Oscillator) products provide exceptional frequency stability for precision timing applications. Available with ±0.5ppm to ±2.5ppm stability for GPS, communication, and instrumentation.',
  longDescription: 'XGHC TCXO products offer industry-leading temperature stability for demanding applications. As an authorized XGHC distributor, LiTong provides comprehensive technical support for TCXO selection and integration. These oscillators use internal temperature compensation to maintain frequency stability across wide temperature ranges.',
  parameters: ['Frequency', 'Stability', 'Temperature Range', 'Supply Voltage', 'Output Type', 'Package'],
  applications: ['GPS/GNSS', 'Cellular Communication', 'Precision Instrumentation', 'SDH/SONET', 'Test Equipment'],
  series: [
    { name: 'Standard TCXO', description: 'Standard TCXO for general precision applications' },
    { name: 'High Precision TCXO', description: 'Ultra-high stability TCXO for demanding applications' }
  ],
  selectionGuide: {
    title: 'How to Select XGHC TCXO',
    description: 'Guide to selecting TCXO based on stability requirements and application needs.',
    articleId: 'xghc-tcxo-selection',
    articleLink: '/xghc/support/xghc-tcxo-selection.html',
    link: '/xghc/support/xghc-tcxo-selection.html'
  },
  selectionGuideLink: '/xghc/support/xghc-tcxo-selection.html',
  faqs: [
    { question: 'What stability do I need for GPS?', answer: '±2.5ppm is sufficient for most GPS, ±1.0ppm or ±0.5ppm for high precision.', decisionGuide: 'Match to GPS accuracy requirements.', keywords: ['GPS', 'stability'] },
    { question: 'TCXO vs OCXO?', answer: 'TCXO is faster warm-up and lower power, OCXO has better stability.', decisionGuide: 'TCXO for most apps, OCXO for highest precision.', keywords: ['TCXO', 'OCXO'] },
    { question: 'What is warm-up time?', answer: 'TCXO typically warms up in 1-2 seconds.', decisionGuide: 'Much faster than OCXO.', keywords: ['warm-up'] }
  ],
  products: [
    {
      partNumber: 'TCXO-19.2MHz-3.3V-1.0ppm',
      name: '19.2MHz TCXO ±1.0ppm',
      shortDescription: 'High-stability TCXO, 19.2MHz frequency, ±1.0ppm stability, 3.3V operation, for cellular and precision applications.',
      descriptionParagraphs: [
        'The TCXO-19.2MHz-3.3V-1.0ppm provides exceptional ±1.0ppm stability across temperature. The 19.2MHz frequency is standard for cellular applications.',
        'This TCXO uses advanced temperature compensation for superior frequency stability. Ideal for LTE, 5G, and precision timing applications.',
        'With 3.3V operation and compact package, this TCXO is suitable for modern communication equipment.'
      ],
      specifications: {
        'Frequency': '19.200 MHz',
        'Stability': '±1.0 ppm',
        'Temperature Range': '-30°C to +85°C',
        'Supply Voltage': '3.3V',
        'Output Type': 'CMOS',
        'Package': '3.2 x 2.5mm SMD'
      },
      features: [
        '±1.0ppm high stability',
        '19.2MHz cellular frequency',
        '3.3V operation',
        'Compact 3225 package',
        'Fast warm-up',
        'Low phase noise'
      ],
      applications: [
        'Cellular baseband',
        'LTE/5G systems',
        'Precision timing',
        'Communication equipment'
      ],
      faeReview: {
        author: 'LiTong FAE',
        content: 'Excellent TCXO for cellular applications. The ±1.0ppm stability meets requirements for LTE and 5G systems.',
        highlight: 'High-stability TCXO for cellular'
      },
      alternativeParts: [
        { partNumber: 'TCXO-19.2MHz-0.5ppm', brand: 'XGHC', specifications: {}, comparison: 'TCXO-19.2MHz-3.3V-1.0ppm=>TCXO-19.2MHz-0.5ppm: Ultra-high stability', reason: 'Best stability', useCase: 'Highest precision', link: '#' },
        { partNumber: 'TCXO-19.2MHz-2.5ppm', brand: 'XGHC', specifications: {}, comparison: 'TCXO-19.2MHz-3.3V-1.0ppm=>TCXO-19.2MHz-2.5ppm: Standard stability', reason: 'Cost savings', useCase: 'Standard apps', link: '#' }
      ],
      companionParts: [
        { partNumber: 'Decoupling Cap', link: '#', description: 'Power decoupling', category: 'Passive' },
        { partNumber: 'Baseband IC', link: '#', description: 'Cellular baseband', category: 'IC' },
        { partNumber: 'Test Board', link: '#', description: 'Evaluation board', category: 'Test' }
      ],
      faqs: [
        { question: 'For cellular?', answer: 'Yes, 19.2MHz is standard for cellular baseband.', decisionGuide: 'Ideal for LTE/5G.', keywords: ['cellular'] },
        { question: 'Better than 2.5ppm?', answer: 'Yes, ±1.0ppm is 2.5x better than ±2.5ppm.', decisionGuide: 'For higher precision.', keywords: ['stability'] },
        { question: 'Power consumption?', answer: 'Approximately 2mA at 3.3V.', decisionGuide: 'Low power for TCXO.', keywords: ['power'] },
        { question: 'Package size?', answer: 'Compact 3.2 x 2.5mm SMD.', decisionGuide: 'Space-efficient.', keywords: ['package'] },
        { question: 'Phase noise?', answer: 'Low phase noise for communication systems.', decisionGuide: 'Good signal quality.', keywords: ['phase noise'] }
      ]
    },
    {
      partNumber: 'TCXO-38.4MHz-3.3V-1.0ppm',
      name: '38.4MHz TCXO ±1.0ppm',
      shortDescription: 'High-stability TCXO, 38.4MHz frequency, ±1.0ppm stability, for 5G NR and high-speed communication.',
      descriptionParagraphs: [
        'The TCXO-38.4MHz-3.3V-1.0ppm provides ±1.0ppm stability at 38.4MHz. This frequency is used in 5G NR and high-speed communication systems.',
        'Advanced temperature compensation ensures stable operation across the full temperature range.',
        'Suitable for 5G base stations, small cells, and high-precision communication equipment.'
      ],
      specifications: {
        'Frequency': '38.400 MHz',
        'Stability': '±1.0 ppm',
        'Temperature Range': '-30°C to +85°C',
        'Supply Voltage': '3.3V',
        'Output Type': 'CMOS',
        'Package': '3.2 x 2.5mm SMD'
      },
      features: [
        '±1.0ppm stability',
        '38.4MHz for 5G NR',
        'High-frequency operation',
        'Compact package',
        'Low phase noise',
        '3.3V operation'
      ],
      applications: [
        '5G NR systems',
        'Small cells',
        'High-speed communication',
        'Precision timing'
      ],
      faeReview: {
        author: 'LiTong FAE',
        content: 'Excellent for 5G applications. The 38.4MHz frequency and ±1.0ppm stability meet 5G NR requirements.',
        highlight: '5G-ready high-stability TCXO'
      },
      alternativeParts: [
        { partNumber: 'TCXO-38.4MHz-0.5ppm', brand: 'XGHC', specifications: {}, comparison: 'TCXO-38.4MHz-3.3V-1.0ppm=>TCXO-38.4MHz-0.5ppm: Ultra-high stability', reason: 'Best stability', useCase: 'Premium 5G', link: '#' },
        { partNumber: 'TCXO-38.4MHz-2.5ppm', brand: 'XGHC', specifications: {}, comparison: 'TCXO-38.4MHz-3.3V-1.0ppm=>TCXO-38.4MHz-2.5ppm: Standard stability', reason: 'Cost savings', useCase: 'Standard 5G', link: '#' }
      ],
      companionParts: [
        { partNumber: 'Decoupling Cap', link: '#', description: 'Power decoupling', category: 'Passive' },
        { partNumber: '5G Transceiver', link: '#', description: '5G RF transceiver', category: 'IC' },
        { partNumber: 'Filter', link: '#', description: 'Reference filter', category: 'Passive' }
      ],
      faqs: [
        { question: 'For 5G?', answer: 'Yes, 38.4MHz is used in 5G NR systems.', decisionGuide: '5G-ready TCXO.', keywords: ['5G'] },
        { question: 'Stability sufficient?', answer: '±1.0ppm meets 5G NR requirements.', decisionGuide: 'Suitable for 5G.', keywords: ['stability'] },
        { question: 'Package?', answer: 'Standard 3225 SMD package.', decisionGuide: 'Industry standard.', keywords: ['package'] },
        { question: 'Phase noise?', answer: 'Optimized for 5G with low phase noise.', decisionGuide: 'Good RF performance.', keywords: ['phase noise'] },
        { question: 'Availability?', answer: 'Stock available at LiTong.', decisionGuide: 'Contact sales.', keywords: ['stock'] }
      ]
    },
    {
      partNumber: 'TCXO-10MHz-3.3V-0.5ppm',
      name: '10MHz TCXO ±0.5ppm',
      shortDescription: 'Ultra-high stability TCXO, 10MHz frequency, ±0.5ppm stability, for instrumentation and reference applications.',
      descriptionParagraphs: [
        'The TCXO-10MHz-3.3V-0.5ppm provides exceptional ±0.5ppm stability. This ultra-high stability is ideal for instrumentation and reference applications.',
        'The 10MHz frequency is a standard reference frequency for test equipment and precision systems.',
        'Advanced compensation circuitry ensures minimal frequency variation across temperature and time.'
      ],
      specifications: {
        'Frequency': '10.000 MHz',
        'Stability': '±0.5 ppm',
        'Temperature Range': '-20°C to +70°C',
        'Supply Voltage': '3.3V',
        'Output Type': 'CMOS',
        'Package': '5.0 x 3.2mm SMD'
      },
      features: [
        'Ultra-high ±0.5ppm stability',
        '10MHz reference frequency',
        'Excellent aging characteristics',
        'Low phase noise',
        'Precision calibration',
        '3.3V operation'
      ],
      applications: [
        'Test equipment',
        'Instrumentation',
        'Reference clock',
        'Precision timing'
      ],
      faeReview: {
        author: 'LiTong FAE',
        content: 'Ultra-high stability TCXO for precision applications. The ±0.5ppm stability is excellent for instrumentation.',
        highlight: 'Ultra-high stability for precision'
      },
      alternativeParts: [
        { partNumber: 'OCXO-10MHz', brand: 'XGHC', specifications: {}, comparison: 'TCXO-10MHz-3.3V-0.5ppm=>OCXO-10MHz: Oven-controlled for best stability', reason: 'Best stability', useCase: 'Highest precision', link: '#' },
        { partNumber: 'TCXO-10MHz-1.0ppm', brand: 'XGHC', specifications: {}, comparison: 'TCXO-10MHz-3.3V-0.5ppm=>TCXO-10MHz-1.0ppm: Standard precision', reason: 'Cost savings', useCase: 'Standard precision', link: '#' }
      ],
      companionParts: [
        { partNumber: 'Decoupling Cap', link: '#', description: 'Power decoupling', category: 'Passive' },
        { partNumber: 'Counter', link: '#', description: 'Frequency counter', category: 'Test' },
        { partNumber: 'Distribution', link: '#', description: 'Clock distribution', category: 'IC' }
      ],
      faqs: [
        { question: 'Best stability?', answer: '±0.5ppm is among the best TCXO stability available.', decisionGuide: 'Ultra-high precision.', keywords: ['stability'] },
        { question: 'For test equipment?', answer: 'Yes, ideal for test and measurement equipment.', decisionGuide: 'Precision reference.', keywords: ['test'] },
        { question: 'Aging rate?', answer: 'Excellent aging characteristics, ±0.5ppm per year typical.', decisionGuide: 'Long-term stability.', keywords: ['aging'] },
        { question: 'Calibration?', answer: 'Factory calibrated to ±0.5ppm.', decisionGuide: 'Ready to use.', keywords: ['calibration'] },
        { question: 'Better than OCXO?', answer: 'OCXO is still better (ppb level), but TCXO is faster and lower power.', decisionGuide: 'TCXO vs OCXO trade-off.', keywords: ['OCXO'] }
      ]
    },
    {
      partNumber: 'TCXO-52MHz-3.3V-1.0ppm',
      name: '52MHz TCXO ±1.0ppm',
      shortDescription: 'High-frequency TCXO, 52MHz frequency, ±1.0ppm stability, for high-speed communication and networking.',
      descriptionParagraphs: [
        'The TCXO-52MHz-3.3V-1.0ppm provides high-frequency operation with excellent stability. The 52MHz frequency is used in high-speed communication systems.',
        'This TCXO combines high frequency with ±1.0ppm stability for demanding networking applications.',
        'Suitable for Ethernet switches, routers, and high-speed data communication equipment.'
      ],
      specifications: {
        'Frequency': '52.000 MHz',
        'Stability': '±1.0 ppm',
        'Temperature Range': '-30°C to +85°C',
        'Supply Voltage': '3.3V',
        'Output Type': 'CMOS',
        'Package': '3.2 x 2.5mm SMD'
      },
      features: [
        'High-frequency 52MHz',
        '±1.0ppm stability',
        'Networking optimized',
        'Compact package',
        'Low jitter',
        '3.3V operation'
      ],
      applications: [
        'Ethernet switches',
        'Routers',
        'Networking equipment',
        'High-speed communication'
      ],
      faeReview: {
        author: 'LiTong FAE',
        content: 'High-frequency TCXO for networking. The 52MHz frequency and stability are ideal for Ethernet applications.',
        highlight: 'Networking-optimized high-frequency TCXO'
      },
      alternativeParts: [
        { partNumber: 'TCXO-52MHz-0.5ppm', brand: 'XGHC', specifications: {}, comparison: 'TCXO-52MHz-3.3V-1.0ppm=>TCXO-52MHz-0.5ppm: Ultra-high stability', reason: 'Best stability', useCase: 'Premium networking', link: '#' },
        { partNumber: 'TCXO-52MHz-2.5ppm', brand: 'XGHC', specifications: {}, comparison: 'TCXO-52MHz-3.3V-1.0ppm=>TCXO-52MHz-2.5ppm: Standard stability', reason: 'Cost savings', useCase: 'Standard networking', link: '#' }
      ],
      companionParts: [
        { partNumber: 'Decoupling Cap', link: '#', description: 'Power decoupling', category: 'Passive' },
        { partNumber: 'Ethernet PHY', link: '#', description: 'Gigabit Ethernet PHY', category: 'IC' },
        { partNumber: 'Switch IC', link: '#', description: 'Ethernet switch', category: 'IC' }
      ],
      faqs: [
        { question: 'For Ethernet?', answer: 'Yes, suitable for Gigabit Ethernet applications.', decisionGuide: 'Networking optimized.', keywords: ['Ethernet'] },
        { question: 'Jitter performance?', answer: 'Low jitter optimized for networking.', decisionGuide: 'Good signal integrity.', keywords: ['jitter'] },
        { question: 'Temperature range?', answer: '-30°C to +85°C for industrial use.', decisionGuide: 'Industrial grade.', keywords: ['temperature'] },
        { question: 'Package?', answer: 'Compact 3225 package.', decisionGuide: 'Space-efficient.', keywords: ['package'] },
        { question: 'Availability?', answer: 'Available from LiTong stock.', decisionGuide: 'Contact sales.', keywords: ['stock'] }
      ]
    }
  ]
};

productsData.categories.push(newCategory);
console.log(`   已添加第4个产品分类: ${newCategory.name}`);
console.log(`   产品分类总数: ${productsData.categories.length}`);

// 3. 添加第3个解决方案
console.log('\n3. 添加第3个解决方案...');

const newSolution = {
  id: 'precision-timing-reference',
  title: 'Precision Timing Reference Solution',
  slug: 'precision-timing-reference',
  description: 'High-stability timing reference solution using XGHC TCXO and OCXO products for test equipment, instrumentation, and communication systems.',
  longDescription: 'The Precision Timing Reference Solution provides ultra-stable frequency references for demanding applications. This solution combines XGHC high-stability TCXO and distribution circuitry to deliver precision timing for test equipment, instrumentation, and communication systems.',
  features: [
    'Ultra-high stability ±0.5ppm to ±1.0ppm',
    'Low phase noise for signal integrity',
    'Multiple output formats supported',
    'Redundant reference option',
    'Temperature monitoring',
    'Holdover capability'
  ],
  applications: [
    'Test and measurement equipment',
    'Precision instrumentation',
    'Communication systems',
    'Reference clock distribution',
    'Calibration equipment'
  ],
  specifications: {
    'Reference Stability': '±0.5ppm to ±1.0ppm',
    'Output Frequencies': '10MHz, 19.2MHz, 26MHz',
    'Phase Noise': '<-140dBc/Hz @ 1kHz',
    'Temperature Range': '-20°C to +70°C',
    'Holdover Accuracy': '<±1ppm over 24 hours'
  },
  technicalSpecs: {
    'Reference Type': 'TCXO/OCXO',
    'Stability': '±0.5ppm (TCXO), ±0.01ppm (OCXO)',
    'Aging': '<±0.5ppm/year',
    'Warm-up Time': '<5 seconds (TCXO), <5 minutes (OCXO)',
    'Power Supply': '3.3V or 5V',
    'Outputs': 'CMOS, LVDS, LVPECL'
  },
  coreAdvantages: [
    { title: 'Ultra-High Stability', description: '±0.5ppm stability for precision timing applications' },
    { title: 'Low Phase Noise', description: 'Optimized for minimal jitter and phase noise' },
    { title: 'Flexible Outputs', description: 'Multiple output formats to match system requirements' },
    { title: 'Holdover Capability', description: 'Maintains accuracy during reference switchover' },
    { title: 'Comprehensive Support', description: 'Full FAE support from LiTong for design and integration' }
  ],
  bomList: [
    { designator: 'X1', partNumber: 'TCXO-10MHz-3.3V-0.5ppm', description: 'Primary reference TCXO', quantity: 1, link: '#' },
    { designator: 'X2', partNumber: 'TCXO-10MHz-3.3V-0.5ppm', description: 'Backup reference TCXO', quantity: 1, link: '#' },
    { designator: 'U1', partNumber: 'Clock Distribution IC', description: 'Reference distribution', quantity: 1, link: '#' },
    { designator: 'U2', partNumber: 'Reference Monitor', description: 'Reference monitoring', quantity: 1, link: '#' }
  ],
  customerCases: [
    {
      customerName: 'Test Equipment Manufacturer',
      industry: 'Test & Measurement',
      application: 'Frequency Counter',
      challenge: 'Needed ultra-stable reference for precision frequency counter.',
      solution: 'Implemented XGHC TCXO-based reference with distribution.',
      results: 'Achieved required accuracy and stability.',
      result: 'Successfully deployed in production test equipment.'
    },
    {
      customerName: 'Communication Equipment Maker',
      industry: 'Telecommunications',
      application: 'Base Station Timing',
      challenge: 'Required stable reference for cellular base station.',
      solution: 'Used XGHC TCXO reference with holdover capability.',
      results: 'Met timing requirements for cellular system.',
      result: 'Deployed in commercial cellular infrastructure.'
    }
  ],
  faeInsights: {
    author: { name: 'Precision Timing FAE', title: 'Senior Applications Engineer', experience: '12 years' },
    insight: 'Precision timing requires careful attention to stability, phase noise, and environmental factors. This solution addresses all key requirements.',
    logic: 'Design approach: 1) Select appropriate reference, 2) Implement distribution, 3) Add monitoring, 4) Validate performance.',
    keyTakeaways: [
      'Reference selection is critical for system accuracy',
      'Distribution design affects signal integrity',
      'Environmental control improves stability',
      'Monitoring ensures reliable operation'
    ],
    commonPitfalls: [
      'Inadequate reference stability',
      'Poor distribution design',
      'Insufficient environmental control'
    ],
    bestPractices: [
      'Use high-stability reference',
      'Implement proper distribution',
      'Add monitoring and holdover',
      'Validate under all conditions'
    ],
    content: 'Based on extensive experience with precision timing systems, this solution provides the stability and reliability needed for demanding applications.',
    decisionFramework: {
      title: 'Precision Timing Design Framework',
      steps: ['Define accuracy requirements', 'Select reference type', 'Design distribution', 'Add monitoring', 'Validate performance']
    }
  },
  faqs: [
    { question: 'What stability can be achieved?', answer: '±0.5ppm with TCXO, ±0.01ppm with OCXO option.', decisionGuide: 'Select based on accuracy needs.', keywords: ['stability'] },
    { question: 'What is holdover capability?', answer: 'Maintains accuracy when primary reference is lost.', decisionGuide: 'Important for reliability.', keywords: ['holdover'] },
    { question: 'Multiple outputs supported?', answer: 'Yes, CMOS, LVDS, and LVPECL outputs available.', decisionGuide: 'Match to system requirements.', keywords: ['outputs'] },
    { question: 'Phase noise performance?', answer: 'Optimized for low phase noise: <-140dBc/Hz @ 1kHz.', decisionGuide: 'Good for RF applications.', keywords: ['phase noise'] },
    { question: 'Support provided?', answer: 'Full LiTong FAE support for design and integration.', decisionGuide: 'Contact FAE for assistance.', keywords: ['support'] }
  ],
  benefits: [
    'Ultra-high stability for precision applications',
    'Low phase noise for signal integrity',
    'Flexible output formats',
    'Holdover for reliability',
    'Comprehensive FAE support'
  ]
};

solutionsData.solutions.push(newSolution);
console.log(`   已添加解决方案: ${newSolution.title}`);
console.log(`   解决方案总数: ${solutionsData.solutions.length}`);

// 4. 添加第5篇技术支持文章
console.log('\n4. 添加第5篇技术支持文章...');

const newArticle = {
  id: 'tcxo-design-guide',
  slug: 'tcxo-design-guide',
  title: 'TCXO Design and Application Guide',
  subtitle: 'Best practices for designing with temperature compensated crystal oscillators',
  author: {
    name: 'David Chen',
    title: 'Senior FAE - Timing Solutions',
    image: '/images/authors/david-chen.jpg'
  },
  publishDate: '2024-04-20',
  readTime: '18 min',
  summary: 'This guide covers TCXO selection, circuit design, PCB layout, and application considerations for precision timing systems.',
  tags: ['TCXO', 'temperature compensation', 'precision timing', 'design guide'],
  relatedArticles: [
    { title: 'Crystal Selection Guide', link: '/xghc/support/xghc-crystal-selection.html' },
    { title: 'Oscillator Design Guide', link: '/xghc/support/xghc-oscillator-design-guide.html' },
    { title: 'Automotive Crystal Guide', link: '/xghc/support/xghc-automotive-crystal-guide.html' }
  ],
  faeInsights: {
    insight: 'TCXO design requires attention to power supply, thermal management, and layout. This guide covers all critical aspects.',
    logic: 'Design flow: 1) Select appropriate TCXO, 2) Design power supply, 3) Optimize PCB layout, 4) Validate thermal performance, 5) Test under all conditions.',
    keyTakeaways: [
      'Power supply quality affects TCXO stability',
      'Thermal management is critical',
      'PCB layout impacts performance',
      'Validation testing is essential'
    ],
    commonPitfalls: [
      'Inadequate power supply filtering',
      'Poor thermal design',
      'Insufficient decoupling',
      'Improper layout'
    ],
    bestPractices: [
      'Use clean power supply',
      'Implement proper decoupling',
      'Follow layout guidelines',
      'Validate under all conditions'
    ]
  },
  customerCases: [
    {
      customerName: 'Communication Equipment Maker',
      industry: 'Telecommunications',
      application: 'Base Station TCXO',
      challenge: 'Needed to optimize TCXO performance in base station application.',
      solution: 'Followed TCXO design guide for power and layout optimization.',
      result: 'Achieved required stability and phase noise performance.'
    }
  ],
  faqs: [
    { question: 'What power supply filtering is needed?', answer: 'Use 0.1μF and 10μF capacitors close to TCXO power pins.', decisionGuide: 'Adequate filtering is critical.', keywords: ['power', 'filtering'] },
    { question: 'How important is thermal management?', answer: 'Very important - temperature gradients affect compensation accuracy.', decisionGuide: 'Minimize thermal gradients.', keywords: ['thermal'] },
    { question: 'What layout guidelines apply?', answer: 'Keep traces short, use ground plane, minimize vias.', decisionGuide: 'Follow RF layout practices.', keywords: ['layout'] },
    { question: 'Decoupling capacitor values?', answer: '0.1μF ceramic close to pins, 10μF for bulk decoupling.', decisionGuide: 'Use recommended values.', keywords: ['decoupling'] },
    { question: 'Testing recommendations?', answer: 'Test across full temperature and voltage range.', decisionGuide: 'Comprehensive validation needed.', keywords: ['testing'] }
  ]
};

supportData.articles.push(newArticle);
console.log(`   已添加文章: ${newArticle.title}`);
console.log(`   文章总数: ${supportData.articles.length}`);

// 保存文件
fs.writeFileSync('./data/xghc/products.json', JSON.stringify(productsData, null, 2));
fs.writeFileSync('./data/xghc/solutions.json', JSON.stringify(solutionsData, null, 2));
fs.writeFileSync('./data/xghc/support.json', JSON.stringify(supportData, null, 2));

console.log('\n========================================');
console.log('xghc 品牌补充完成！');
console.log('- 4个产品分类，每个分类4个产品');
console.log('- 3个解决方案');
console.log('- 5篇技术支持文章');
console.log('========================================');
