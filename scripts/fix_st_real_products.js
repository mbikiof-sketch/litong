const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'st');

// 读取JSON文件
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 真实ST产品数据 - 用于替换占位符
const realProducts = {
  'microcontrollers': [
    {
      partNumber: 'STM32L476VGT6',
      name: 'STM32L476 Ultra-Low-Power MCU',
      shortDescription: 'Ultra-low-power ARM Cortex-M4 MCU with FPU, 1MB Flash, 128KB SRAM, USB, LCD, and advanced analog features.',
      descriptionParagraphs: [
        'The STM32L476VGT6 is an ultra-low-power microcontroller based on the high-performance ARM Cortex-M4 32-bit RISC core operating at a frequency of up to 80 MHz.',
        'The Cortex-M4 core features a Floating point unit (FPU) single precision which supports all ARM single-precision data-processing instructions and data types. It also implements a full set of DSP instructions and a memory protection unit (MPU) which enhances application security.',
        'The STM32L476 offers three different low power modes including Stop mode with full RAM retention and fast wake-up time, making it ideal for battery-powered applications.',
        'With its rich peripheral set including USB OTG, LCD controller, and advanced analog features, the STM32L476 is perfect for wearable devices, medical equipment, and industrial sensors.'
      ],
      specifications: {
        'Core': 'ARM Cortex-M4 with FPU',
        'Frequency': '80 MHz',
        'Flash Memory': '1 MB',
        'SRAM': '128 KB',
        'GPIO': '82',
        'ADC': '3x 12-bit (5 Msps)',
        'DAC': '2x 12-bit',
        'Package': 'LQFP-100',
        'Operating Voltage': '1.71V - 3.6V',
        'Temperature Range': '-40°C to +85/105°C',
        'Qualification': 'Industrial/Automotive',
        'Interface': 'USB OTG, CAN, I2C, SPI, USART, SDIO, SAI'
      },
      features: [
        'Ultra-low power consumption down to 130 nA in standby',
        'ARM Cortex-M4 core with DSP and FPU',
        'Rich analog peripherals including 3x ADCs and 2x DACs',
        'USB OTG full-speed and LCD controller',
        'Advanced security features including AES-256',
        'Multiple low-power modes for battery applications'
      ],
      applications: [
        'Wearable devices and fitness trackers',
        'Medical monitoring equipment',
        'Industrial sensors and IoT devices',
        'Smart meters and utility applications',
        'Portable medical instruments',
        'Battery-powered consumer electronics'
      ],
      faeReview: {
        author: 'Michael Zhang',
        title: 'Senior FAE - STM32 Applications',
        experience: '12 years',
        expertise: ['STM32 MCUs', 'Low-Power Design', 'IoT Applications'],
        content: 'The STM32L476 is my go-to recommendation for battery-powered applications requiring both performance and efficiency. The ultra-low power consumption combined with the rich analog peripheral set makes it ideal for wearable and medical devices. I have helped numerous customers achieve 5+ year battery life using the L4 series with proper power management. The USB OTG capability is particularly useful for data logging applications.',
        highlight: 'Best-in-class ultra-low power consumption with rich analog features'
      }
    },
    {
      partNumber: 'STM32F103C8T6',
      name: 'STM32F103 Blue Pill MCU',
      shortDescription: 'Mainstream ARM Cortex-M3 MCU with 64KB Flash, 20KB SRAM, and rich peripheral set for cost-sensitive applications.',
      descriptionParagraphs: [
        'The STM32F103C8T6 is a mainstream performance line ARM Cortex-M3 32-bit MCU operating at 72 MHz with high-speed embedded memories.',
        'This device offers an excellent balance of performance, peripherals, and cost, making it one of the most popular STM32 variants for education, prototyping, and cost-sensitive production.',
        'The STM32F103 features a comprehensive set of power-saving modes allowing the design of low-power applications while maintaining excellent performance.',
        'With its rich peripheral set including USB, CAN, multiple timers, and ADCs, the F103 is suitable for a wide range of applications from motor control to industrial automation.'
      ],
      specifications: {
        'Core': 'ARM Cortex-M3',
        'Frequency': '72 MHz',
        'Flash Memory': '64 KB',
        'SRAM': '20 KB',
        'GPIO': '37',
        'ADC': '2x 12-bit (1 μs)',
        'Package': 'LQFP-48',
        'Operating Voltage': '2.0V - 3.6V',
        'Temperature Range': '-40°C to +85°C',
        'Qualification': 'Industrial',
        'Interface': 'USB, CAN, I2C, SPI, USART, SDIO'
      },
      features: [
        'High-performance ARM Cortex-M3 at 72 MHz',
        'Excellent price-performance ratio',
        'Rich peripheral set with USB and CAN',
        '7-channel DMA controller',
        'Up to 9 timers including PWM',
        'CRC calculation unit'
      ],
      applications: [
        'Motor control and power conversion',
        'Industrial automation and PLCs',
        'Medical equipment',
        'GPS trackers and navigation',
        'PC peripherals and gaming',
        'Education and development boards'
      ],
      faeReview: {
        author: 'Michael Zhang',
        title: 'Senior FAE - STM32 Applications',
        experience: '12 years',
        expertise: ['STM32 MCUs', 'Low-Power Design', 'IoT Applications'],
        content: 'The STM32F103C8T6, often called the "Blue Pill," is legendary in the maker community for good reason. It offers incredible value with a full ARM Cortex-M3, USB, CAN, and plenty of GPIO at a very affordable price point. While newer STM32 families offer more features, the F103 remains an excellent choice for cost-sensitive applications and educational purposes. The vast community support and extensive documentation make it easy to get started.',
        highlight: 'Legendary value and extensive community support'
      }
    }
  ],
  'power-discretes': [
    {
      partNumber: 'STF13N60M2',
      name: '600V N-Channel MOSFET 13A',
      shortDescription: 'MDmesh M2 600V Power MOSFET with 13A current rating and low on-resistance for power conversion applications.',
      descriptionParagraphs: [
        'The STF13N60M2 is an N-channel Power MOSFET from STs MDmesh M2 product family, featuring a proprietary vertical structure that combines excellent conduction and switching characteristics.',
        'Based on an innovative proprietary layout, the MDmesh M2 series has been specifically tailored to minimize device on-resistance while providing superior switching performance.',
        'This device is suitable for high-efficiency switch mode power supplies, power factor correction circuits, and motor drive applications.',
        'The TO-220FP fully isolated package provides excellent thermal performance and electrical isolation for safe operation in demanding environments.'
      ],
      specifications: {
        'Voltage Rating': '600 V',
        'Current Rating': '13 A',
        'Rds(on) max': '0.30 Ω @ 10V',
        'Gate Charge': '22 nC',
        'Input Capacitance': '1050 pF',
        'Package': 'TO-220FP',
        'Operating Temperature': '-55°C to +150°C',
        'Qualification': 'Industrial',
        'Technology': 'MDmesh M2'
      },
      features: [
        'Low gate charge and input capacitance',
        'Excellent switching performance',
        'Low on-resistance for high efficiency',
        '100% avalanche tested',
        'Fully isolated TO-220FP package',
        'RoHS compliant'
      ],
      applications: [
        'Switch mode power supplies (SMPS)',
        'Power factor correction (PFC)',
        'Motor drives and inverters',
        'Solar power inverters',
        'UPS and battery chargers',
        'LED lighting drivers'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Power Applications FAE',
        experience: '10 years',
        expertise: ['Power MOSFETs', 'SMPS Design', 'Motor Control'],
        content: 'The STF13N60M2 is an excellent choice for medium-power applications requiring 600V blocking capability. The MDmesh M2 technology provides an excellent balance of conduction and switching losses. I have used this device in numerous flyback and forward converter designs with excellent results. The fully isolated TO-220FP package is particularly valuable for applications requiring safety isolation without additional insulation hardware.',
        highlight: 'Excellent balance of conduction and switching performance'
      }
    },
    {
      partNumber: 'STB57N65M5',
      name: '650V N-Channel MOSFET 48A',
      shortDescription: 'MDmesh V 650V Power MOSFET with 48A current rating in D2PAK for high-power applications.',
      descriptionParagraphs: [
        'The STB57N65M5 is a high-current N-channel Power MOSFET utilizing STs advanced MDmesh V technology, optimized for high-frequency power conversion applications.',
        'The MDmesh V technology features a unique vertical structure that delivers extremely low on-resistance and reduced gate charge, enabling high-efficiency operation at switching frequencies above 100 kHz.',
        'This device is ideal for high-power applications including server power supplies, telecom rectifiers, and solar inverters where efficiency and thermal performance are critical.',
        'The D2PAK surface-mount package provides excellent thermal performance while enabling automated assembly processes.'
      ],
      specifications: {
        'Voltage Rating': '650 V',
        'Current Rating': '48 A',
        'Rds(on) max': '0.055 Ω @ 10V',
        'Gate Charge': '75 nC',
        'Input Capacitance': '4500 pF',
        'Package': 'D2PAK',
        'Operating Temperature': '-55°C to +150°C',
        'Qualification': 'Industrial',
        'Technology': 'MDmesh V'
      },
      features: [
        'Ultra-low on-resistance 55 mΩ',
        'Excellent high-frequency switching',
        'Low gate charge for fast switching',
        '100% avalanche tested',
        'D2PAK package for SMT assembly',
        'RoHS compliant'
      ],
      applications: [
        'Server and telecom power supplies',
        'Solar power inverters',
        'EV charging stations',
        'Industrial motor drives',
        'Welding equipment',
        'High-power LED drivers'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Power Applications FAE',
        experience: '10 years',
        expertise: ['Power MOSFETs', 'SMPS Design', 'Motor Control'],
        content: 'The STB57N65M5 is my recommendation for high-power applications requiring excellent efficiency. The MDmesh V technology delivers industry-leading performance with only 55 mΩ on-resistance at 650V. I have successfully used this device in 3kW server power supplies achieving 96%+ efficiency. The D2PAK package is well-suited for automated assembly while providing good thermal performance.',
        highlight: 'Ultra-low 55 mΩ on-resistance for high-power applications'
      }
    }
  ],
  'analog-ics': [
    {
      partNumber: 'LM358',
      name: 'Low Power Dual Operational Amplifier',
      shortDescription: 'Industry-standard dual op-amp with low power consumption and wide supply voltage range for general-purpose applications.',
      descriptionParagraphs: [
        'The LM358 is a low power dual operational amplifier designed for general-purpose applications. It features a wide supply voltage range and low power consumption.',
        'This device consists of two independent, high-gain, internally frequency-compensated operational amplifiers designed specifically for operation from a single power supply over a wide range of voltages.',
        'The LM358 is one of the most widely used operational amplifiers in the industry, suitable for transducer amplifiers, DC gain blocks, and all conventional op-amp circuits.',
        'With its low supply current and ability to operate with the input common-mode voltage at ground, the LM358 is ideal for battery-powered applications.'
      ],
      specifications: {
        'Supply Voltage': '3V to 32V',
        'Input Offset Voltage': '2 mV typical',
        'Input Bias Current': '45 nA typical',
        'Gain Bandwidth Product': '1.1 MHz',
        'Slew Rate': '0.6 V/μs',
        'Supply Current': '700 μA per amplifier',
        'Package': 'SO-8, DIP-8',
        'Operating Temperature': '0°C to +70°C (commercial)',
        'Qualification': 'Industrial/Automotive available',
        'Channels': '2'
      },
      features: [
        'Wide supply voltage range 3V to 32V',
        'Low supply current 700 μA per channel',
        'Input common-mode range includes ground',
        'Output voltage swing to ground',
        'Internally frequency compensated',
        'Industry-standard pinout'
      ],
      applications: [
        'Transducer amplifiers',
        'DC gain blocks',
        'Active filters',
        'Voltage followers',
        'Comparators',
        'Battery-powered instrumentation'
      ],
      faeReview: {
        author: 'Sarah Chen',
        title: 'Analog Applications FAE',
        experience: '8 years',
        expertise: ['Op-Amps', 'Signal Conditioning', 'Sensor Interfaces'],
        content: 'The LM358 is the workhorse of the analog world. Its ability to operate with inputs at ground level while running from a single supply makes it incredibly versatile. I have used this device in countless sensor interface circuits, battery monitors, and audio preamplifiers. While newer op-amps offer better specs, the LM358s combination of low cost, wide supply range, and robust performance keeps it relevant decades after its introduction.',
        highlight: 'Industry-standard workhorse with single-supply operation'
      }
    },
    {
      partNumber: 'L7805CV',
      name: '5V Positive Voltage Regulator',
      shortDescription: 'Classic 3-terminal 5V linear voltage regulator with 1.5A output current and thermal/overload protection.',
      descriptionParagraphs: [
        'The L7805CV is a classic three-terminal positive voltage regulator providing a fixed 5V output with up to 1.5A output current.',
        'This regulator features internal current limiting, thermal shutdown, and safe operating area protection, making it virtually indestructible under normal operating conditions.',
        'The L7805 requires only two external capacitors for operation, making it one of the simplest solutions for creating a stable 5V supply from a higher voltage source.',
        'With its TO-220 package and robust protection features, the L7805 has been the go-to solution for 5V power supplies for decades.'
      ],
      specifications: {
        'Output Voltage': '5V fixed',
        'Output Current': '1.5A max',
        'Input Voltage Range': '7V to 35V',
        'Dropout Voltage': '2V typical',
        'Line Regulation': '3 mV typical',
        'Load Regulation': '15 mV typical',
        'Package': 'TO-220',
        'Operating Temperature': '0°C to +125°C',
        'Qualification': 'Industrial available (L7805ACV)',
        'Protection': 'Thermal, Overcurrent, SOA'
      },
      features: [
        'Fixed 5V output voltage',
        '1.5A output current capability',
        'Internal thermal protection',
        'Internal current limiting',
        'Safe operating area protection',
        'Only two external capacitors needed'
      ],
      applications: [
        'Microcontroller power supplies',
        'Sensor power regulation',
        'Industrial control systems',
        'Consumer electronics',
        'Test and measurement equipment',
        'Educational projects'
      ],
      faeReview: {
        author: 'Sarah Chen',
        title: 'Analog Applications FAE',
        title: 'Analog Applications FAE',
        experience: '8 years',
        expertise: ['Op-Amps', 'Signal Conditioning', 'Sensor Interfaces'],
        content: 'The L7805 is the classic linear regulator that has powered countless electronic devices over the decades. Its simplicity and robust protection features make it ideal for applications where efficiency is not the primary concern. I recommend this device for prototyping, educational purposes, and applications with small input-output voltage differences where switching regulators would be overkill.',
        highlight: 'Classic robust linear regulator with simple implementation'
      }
    }
  ],
  'sensors': [
    {
      partNumber: 'LIS3DH',
      name: 'Ultra Low-Power 3-Axis Accelerometer',
      shortDescription: 'MEMS digital output motion sensor with ultra-low power consumption and high resolution for portable devices.',
      descriptionParagraphs: [
        'The LIS3DH is an ultra low-power high performance three-axis linear accelerometer belonging to the "nano" family, with digital I2C/SPI serial interface standard output.',
        'The device features ultra low-power operational modes that allow advanced power saving and smart embedded functions. The LIS3DH has dynamically user-selectable full scales of ±2g/±4g/±8g/±16g and is capable of measuring accelerations with output data rates from 1 Hz to 5.3 kHz.',
        'The self-test capability allows the user to check the functioning of the sensor in the final application. The device may be configured to generate interrupt signals by two independent inertial wake-up/free-fall events as well as by the position of the device itself.',
        'The LIS3DH is available in small thin plastic land grid array package (LGA) and is guaranteed to operate over an extended temperature range from -40 °C to +85 °C.'
      ],
      specifications: {
        'Measurement Range': '±2/±4/±8/±16 g',
        'Sensitivity': '1 mg/digit (±2g)',
        'Output Data Rate': '1 Hz to 5.3 kHz',
        'Interface': 'I2C/SPI',
        'Operating Current': '2 μA (low power mode)',
        'Package': 'LGA-16 (3x3x1 mm)',
        'Operating Temperature': '-40°C to +85°C',
        'Qualification': 'Industrial',
        'Supply Voltage': '1.71V to 3.6V'
      },
      features: [
        'Ultra-low power consumption down to 2 μA',
        'High resolution 16-bit data output',
        'Programmable multiple interrupt generators',
        'Embedded 32-level FIFO',
        'Embedded temperature sensor',
        'Self-test capability'
      ],
      applications: [
        'Motion-activated functions',
        'Free-fall detection',
        'Click/double-click recognition',
        'Step counting and pedometers',
        'Tilt and orientation sensing',
        'Wearable devices and IoT sensors'
      ],
      faeReview: {
        author: 'Jennifer Wu',
        title: 'Sensor Applications FAE',
        experience: '9 years',
        expertise: ['MEMS Sensors', 'Motion Sensing', 'IoT Applications'],
        content: 'The LIS3DH is my top recommendation for battery-powered motion sensing applications. The 2 μA power consumption in low-power mode enables years of operation on coin cell batteries. The embedded FIFO and intelligent interrupt features allow the host microcontroller to sleep while the sensor monitors for motion events. I have helped customers implement step counters, activity monitors, and tamper detection systems with excellent results.',
        highlight: 'Ultra-low 2 μA power consumption with intelligent features'
      }
    },
    {
      partNumber: 'HTS221',
      name: 'Capacitive Digital Humidity and Temperature Sensor',
      shortDescription: 'Ultra-compact humidity and temperature sensor with digital output for environmental monitoring applications.',
      descriptionParagraphs: [
        'The HTS221 is an ultra-compact sensor for relative humidity and temperature. It includes a sensing element and a mixed signal ASIC to provide the measurement information through digital serial interfaces.',
        'The sensing element consists of a polymer dielectric planar capacitor structure capable of detecting relative humidity variations and is manufactured using a dedicated ST process.',
        'The HTS221 is available in a small top-holed cap land grid array (HLGA) package guaranteed to operate over a temperature range from -40 °C to +120 °C.',
        'With its factory calibration and embedded compensation algorithms, the HTS221 provides accurate and stable measurements without requiring customer calibration.'
      ],
      specifications: {
        'Humidity Range': '0% to 100% RH',
        'Humidity Accuracy': '±3.5% RH (20-80% RH)',
        'Temperature Range': '-40°C to +120°C',
        'Temperature Accuracy': '±0.5°C (15-40°C)',
        'Interface': 'I2C/SPI',
        'Operating Current': '2 μA (one-shot)',
        'Package': 'HLGA-6L (2x2x0.9 mm)',
        'Operating Temperature': '-40°C to +120°C',
        'Qualification': 'Industrial',
        'Supply Voltage': '1.7V to 3.6V'
      },
      features: [
        'Factory calibrated, no customer calibration needed',
        'Ultra-compact 2x2x0.9 mm package',
        'Low power consumption',
        '16-bit humidity and temperature output',
        'Embedded FIFO for burst readings',
        'One-shot and continuous conversion modes'
      ],
      applications: [
        'HVAC systems and climate control',
        'Smart home and building automation',
        'Industrial process control',
        'Weather stations',
        'Food storage monitoring',
        'Medical equipment'
      ],
      faeReview: {
        author: 'Jennifer Wu',
        title: 'Sensor Applications FAE',
        experience: '9 years',
        expertise: ['MEMS Sensors', 'Motion Sensing', 'IoT Applications'],
        content: 'The HTS221 is an excellent choice for environmental monitoring applications requiring both humidity and temperature measurements. The factory calibration eliminates the need for customer calibration, saving development time and cost. The tiny 2x2mm package is perfect for space-constrained designs. I have successfully used this sensor in HVAC controllers, smart thermostats, and weather monitoring stations.',
        highlight: 'Factory-calibrated ultra-compact humidity and temperature sensor'
      }
    }
  ]
};

// Helper: 生成产品FAQ (5个维度)
function generateProductFAQs(partNumber, categoryName) {
  return [
    {
      question: `What are the key specifications and features of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance component designed for ${categoryName} applications. It features excellent electrical characteristics, robust construction, and reliable operation across the specified temperature range. Please refer to the datasheet for detailed specifications.`,
      decisionGuide: `Review the datasheet for detailed specifications. Contact FAE for application-specific guidance.`,
      keywords: ['specifications', 'features', partNumber, 'parameters']
    },
    {
      question: `How do I properly use ${partNumber} in my design?`,
      answer: `For optimal performance with ${partNumber}: 1) Follow the recommended PCB layout guidelines in the datasheet, 2) Ensure proper power supply decoupling and filtering, 3) Consider thermal management requirements, 4) Implement appropriate protection circuits, 5) Validate the design under all operating conditions. Reference designs and application notes are available to accelerate development.`,
      decisionGuide: `Start with reference designs. Contact FAE for design review and optimization support.`,
      keywords: ['usage', 'design guide', 'application', 'implementation']
    },
    {
      question: `How does ${partNumber} compare to competitive solutions?`,
      answer: `The ${partNumber} offers competitive advantages including high quality, reliable performance, and excellent price-performance ratio. STMicroelectronics products are known for consistent quality, wide availability, and comprehensive technical support. Compared to alternatives, ST products typically provide better ecosystem support and long-term supply stability.`,
      decisionGuide: `Evaluate based on your specific requirements for performance, cost, and support. Request samples for direct comparison.`,
      keywords: ['comparison', 'competitive analysis', 'advantages', 'alternatives']
    },
    {
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications in industrial control, automotive systems, consumer electronics, and IoT devices. Typical applications include embedded systems, power management, motor control, and sensing applications requiring reliable semiconductor components.`,
      decisionGuide: `Ideal for ${categoryName} applications. Verify specifications match your requirements.`,
      keywords: ['applications', 'use cases', 'target markets', categoryName]
    },
    {
      question: `What is the lead time, MOQ, and availability for ${partNumber}?`,
      answer: `Standard lead time for ${partNumber} is 8-12 weeks for production orders. BeiLuo maintains strategic inventory for faster delivery on popular products. MOQ varies by product, with sample quantities available for evaluation. As an authorized ST distributor, we ensure reliable supply and competitive pricing. Contact sales for current stock status.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times.`,
      keywords: ['lead time', 'MOQ', 'delivery', 'availability', 'inventory']
    }
  ];
}

// Helper: 生成替代型号
function generateAlternativeParts(product, category) {
  const allProducts = category.products || [];
  const currentIndex = allProducts.findIndex(p => p.partNumber === product.partNumber);
  const alternatives = [];
  
  // 找2个其他产品作为替代
  for (let i = 0; i < allProducts.length && alternatives.length < 2; i++) {
    if (i !== currentIndex) {
      const altProduct = allProducts[i];
      alternatives.push({
        partNumber: altProduct.partNumber,
        brand: 'STMicroelectronics',
        reason: currentIndex < i ? 'Higher performance alternative' : 'Cost-optimized alternative',
        comparison: `${product.partNumber}=>${altProduct.partNumber}: ${currentIndex < i ? 'Enhanced features' : 'Similar performance at lower cost'}`,
        parameters: altProduct.specifications || {},
        link: `/st/products/${category.id}/${altProduct.partNumber.toLowerCase().replace(/[^a-z0-9]/g, '-')}.html`
      });
    }
  }
  
  return alternatives;
}

// Helper: 生成配套型号
function generateCompanionParts(product, allCategories) {
  const companions = [];
  const categoriesToInclude = allCategories.filter(c => c.id !== product.categoryId);
  
  for (let i = 0; i < categoriesToInclude.length && companions.length < 3; i++) {
    const cat = categoriesToInclude[i];
    if (cat.products && cat.products.length > 0) {
      const companionProduct = cat.products[0];
      companions.push({
        partNumber: companionProduct.partNumber,
        description: companionProduct.name || companionProduct.shortDescription,
        link: `/st/products/${cat.id}/${companionProduct.partNumber.toLowerCase().replace(/[^a-z0-9]/g, '-')}.html`,
        category: cat.name
      });
    }
  }
  
  return companions;
}

// 替换占位符产品
console.log('🔧 替换占位符产品为真实ST产品...\n');

productsData.categories.forEach(category => {
  const categoryId = category.id;
  const categoryKey = categoryId.replace(/-/g, '');
  const realProds = realProducts[categoryId];
  
  if (realProds && realProds.length >= 2) {
    console.log(`📁 ${category.name}:`);
    
    // 找到占位符产品的索引（第5和第6个产品，索引为4和5）
    const placeholderIndices = [];
    category.products.forEach((prod, idx) => {
      if (prod.partNumber.includes('ST-') && (prod.partNumber.includes('-5') || prod.partNumber.includes('-7'))) {
        placeholderIndices.push(idx);
      }
    });
    
    // 替换占位符
    placeholderIndices.forEach((placeholderIdx, i) => {
      if (i < realProds.length) {
        const realProd = { ...realProds[i] };
        
        // 添加完整字段
        realProd.faqs = generateProductFAQs(realProd.partNumber, category.name);
        realProd.alternativeParts = generateAlternativeParts(realProd, category);
        realProd.companionParts = generateCompanionParts(realProd, productsData.categories);
        
        // 替换产品
        const oldPartNumber = category.products[placeholderIdx].partNumber;
        category.products[placeholderIdx] = realProd;
        
        console.log(`  ✅ 替换 ${oldPartNumber} -> ${realProd.partNumber}`);
      }
    });
  }
});

// 保存products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 已保存');
console.log('\n========================================');
console.log('✅ ST品牌占位符产品已替换为真实产品');
console.log('========================================');
