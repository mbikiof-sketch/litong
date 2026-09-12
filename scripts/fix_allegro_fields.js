const fs = require('fs');
const path = require('path');

// 读取products.json
const productsPath = path.join(__dirname, '../data/allegro/products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 定义需要修复的产品和补充的数据
const fixes = {
  'ACS37610': {
    alternativeParts: [
      {
        partNumber: 'ACS37010',
        brand: 'Allegro',
        specifications: { bandwidth: '1MHz', currentRange: '±50A', interface: 'Digital I2C/SPI' },
        comparison: 'ACS37610=>ACS37010: Current 50A < 200A, Interface digital > analog, Package standard > busbar',
        reason: 'Digital interface and standard package for easier integration',
        useCase: 'Applications requiring digital output and easier PCB mounting',
        link: '/allegro/products/current-sensors/acs37010.html'
      },
      {
        partNumber: 'ACS720',
        brand: 'Allegro',
        specifications: { bandwidth: '120kHz', currentRange: '±40A', accuracy: '±1%' },
        comparison: 'ACS37610=>ACS720: Current 40A < 200A, Bandwidth 120kHz < 1MHz, Package SOIC-16',
        reason: 'Lower cost for medium current applications',
        useCase: 'General purpose current sensing up to 40A',
        link: '/allegro/products/current-sensors/acs720.html'
      }
    ],
    companionParts: [
      { partNumber: 'ACS37610-EVAL', link: '#', description: 'Evaluation board for ACS37610', category: 'Development Tools' },
      { partNumber: 'AD620', link: '#', description: 'Instrumentation amplifier for differential output', category: 'Signal Conditioning' },
      { partNumber: 'BUSBAR-CU', link: '#', description: 'Copper busbar for sensor mounting', category: 'Accessories' }
    ],
    faqs: [
      { question: 'What is the maximum current range of ACS37610?', answer: 'The ACS37610 supports current ranges up to ±200A with 10mV/A sensitivity. The actual range depends on the busbar design and thermal management.', decisionGuide: 'Ensure proper thermal design for continuous high-current operation.', keywords: ['ACS37610', 'current range', '200A'] },
      { question: 'How do I interface the differential output?', answer: 'The differential output can be interfaced using a differential ADC or an instrumentation amplifier like AD620. Connect Vout+ and Vout- to the differential inputs.', decisionGuide: 'Use differential ADC for best noise immunity, or instrumentation amp for single-ended systems.', keywords: ['differential output', 'interface', 'ADC'] },
      { question: 'What isolation voltage does ACS37610 provide?', answer: 'The ACS37610 provides 4.8kV isolation voltage, suitable for high-voltage applications up to 800V working voltage in EV systems.', decisionGuide: 'Adequate for most EV and industrial high-voltage applications.', keywords: ['isolation', '4.8kV', 'high voltage'] },
      { question: 'Can I use ACS37610 for three-phase systems?', answer: 'Yes, three ACS37610 sensors can be used for three-phase current measurement. The differential sensing provides excellent rejection of cross-talk from adjacent phases.', decisionGuide: 'Ideal for three-phase motor drives and inverters.', keywords: ['three-phase', 'motor drive', 'inverter'] },
      { question: 'What is the typical accuracy of ACS37610?', answer: 'The ACS37610 provides ±1% typical accuracy at 25°C, with ±2% over the full automotive temperature range (-40°C to 150°C).', decisionGuide: 'Suitable for precision current monitoring and metering applications.', keywords: ['accuracy', 'precision', 'error'] }
    ]
  },
  'ACS37010': {
    alternativeParts: [
      {
        partNumber: 'ACS37610',
        brand: 'Allegro',
        specifications: { bandwidth: '1MHz', currentRange: '±200A', output: 'Analog differential' },
        comparison: 'ACS37010=>ACS37610: Current 200A > 50A, Output analog > digital, Mounting busbar',
        reason: 'Higher current capability and busbar mounting',
        useCase: 'High-current EV and industrial applications',
        link: '/allegro/products/current-sensors/acs37610.html'
      },
      {
        partNumber: 'ACS37800',
        brand: 'Allegro',
        specifications: { bandwidth: '80kHz', currentRange: '±30A', interface: 'I2C/PWM' },
        comparison: 'ACS37010=>ACS37800: Bandwidth 80kHz < 1MHz, Current 30A < 50A, Cost lower',
        reason: 'Lower cost for lower bandwidth requirements',
        useCase: 'Cost-sensitive applications with moderate bandwidth needs',
        link: '/allegro/products/current-sensors/acs37800.html'
      }
    ],
    companionParts: [
      { partNumber: 'ACS37010-EVAL', link: '#', description: 'Evaluation board with I2C/SPI interface', category: 'Development Tools' },
      { partNumber: 'FT232H', link: '#', description: 'USB to I2C/SPI adapter for PC interface', category: 'Interface' },
      { partNumber: 'FERRITE-BEAD', link: '#', description: 'Ferrite beads for noise filtering', category: 'Passives' }
    ],
    faqs: [
      { question: 'What digital interfaces does ACS37010 support?', answer: 'The ACS37010 supports both I2C and SPI digital interfaces. The interface mode is selectable via a configuration pin.', decisionGuide: 'Choose based on your microcontroller interface availability.', keywords: ['I2C', 'SPI', 'digital interface'] },
      { question: 'What is the update rate of the digital output?', answer: 'The ACS37010 provides digital output updates at up to 1MHz, matching the analog bandwidth for real-time monitoring.', decisionGuide: 'Sufficient for high-frequency power converter monitoring.', keywords: ['update rate', 'bandwidth', '1MHz'] },
      { question: 'Does ACS37010 provide diagnostic information?', answer: 'Yes, the digital interface provides diagnostic flags for overcurrent, overtemperature, and fault conditions.', decisionGuide: 'Useful for system health monitoring and predictive maintenance.', keywords: ['diagnostics', 'fault detection', 'health monitoring'] },
      { question: 'What is the resolution of the digital output?', answer: 'The ACS37010 provides 12-bit resolution for current measurement, giving 0.025% theoretical resolution.', decisionGuide: 'Adequate for most precision measurement applications.', keywords: ['resolution', '12-bit', 'precision'] },
      { question: 'Can I use ACS37010 with 3.3V logic?', answer: 'Yes, the ACS37010 supports both 3.3V and 5V logic levels. The I/O voltage is independent of the analog supply voltage.', decisionGuide: 'Compatible with modern 3.3V microcontrollers.', keywords: ['3.3V', 'logic level', 'voltage'] }
    ]
  },
  'A4988': {
    alternativeParts: [
      {
        partNumber: 'DRV8825',
        brand: 'TI',
        specifications: { current: '2.5A', microstepping: '1/32', voltage: '45V' },
        comparison: 'A4988=>DRV8825: Current 2.5A > 2A, Microstepping 1/32 > 1/16, Pin-compatible',
        reason: 'Higher current and finer microstepping',
        useCase: 'Higher power stepper motors requiring more torque',
        link: '/ti/products/motor-drivers/drv8825.html'
      },
      {
        partNumber: 'TMC2209',
        brand: 'Trinamic',
        specifications: { current: '2.8A', features: 'StealthChop', interface: 'UART' },
        comparison: 'A4988=>TMC2209: Current 2.8A > 2A, Features advanced > basic, Cost higher',
        reason: 'Silent operation and advanced features',
        useCase: 'Quiet operation required in 3D printers and CNC',
        link: '/trinamic/products/motor-drivers/tmc2209.html'
      }
    ],
    companionParts: [
      { partNumber: 'A4988-BREAKOUT', link: '#', description: 'Stepstick breakout board for A4988', category: 'Development Tools' },
      { partNumber: 'HEATSINK-TO220', link: '#', description: 'Heatsink for thermal management', category: 'Thermal' },
      { partNumber: 'NEMA17-STEPPER', link: '#', description: 'NEMA17 stepper motor (1.7A)', category: 'Motors' }
    ],
    faqs: [
      { question: 'What is the maximum current for A4988?', answer: 'The A4988 can deliver up to 2A per coil with proper heatsinking. Without heatsink, limit to 1A to prevent overheating.', decisionGuide: 'Use heatsink for currents above 1A.', keywords: ['maximum current', '2A', 'heatsink'] },
      { question: 'What microstepping modes does A4988 support?', answer: 'The A4988 supports full-step, half-step, quarter-step, eighth-step, and sixteenth-step modes, selectable via MS1/MS2/MS3 pins.', decisionGuide: 'Use higher microstepping for smoother motion and less vibration.', keywords: ['microstepping', '1/16', 'smooth motion'] },
      { question: 'How do I adjust the current limit on A4988?', answer: 'Adjust the current limit using the onboard potentiometer. Measure VREF voltage and calculate: I_limit = VREF / (8 × Rsense).', decisionGuide: 'Set VREF based on your motor rated current.', keywords: ['current limit', 'VREF', 'potentiometer'] },
      { question: 'What is the maximum supply voltage for A4988?', answer: 'The A4988 supports 8V to 35V supply voltage. Use appropriate decoupling capacitors near the chip.', decisionGuide: 'Higher voltage allows faster motor speeds.', keywords: ['supply voltage', '35V', 'decoupling'] },
      { question: 'Can I use A4988 with 24V power supply?', answer: 'Yes, the A4988 works well with 24V supplies. Ensure your stepper motor is rated for 24V operation.', decisionGuide: '24V is commonly used in industrial applications.', keywords: ['24V', 'power supply', 'industrial'] }
    ]
  },
  'A4950': {
    alternativeParts: [
      {
        partNumber: 'TB6612FNG',
        brand: 'Toshiba',
        specifications: { current: '1.2A', channels: '2', voltage: '15V' },
        comparison: 'A4950=>TB6612FNG: Dual channel > single, Current 1.2A < 3A, Voltage 15V < 40V',
        reason: 'Dual channel for two motor control',
        useCase: 'Robot applications with multiple DC motors',
        link: '/toshiba/products/motor-drivers/tb6612fng.html'
      },
      {
        partNumber: 'DRV8871',
        brand: 'TI',
        specifications: { current: '3.6A', features: 'Current sense', interface: 'PWM' },
        comparison: 'A4950=>DRV8871: Current 3.6A > 3A, Features current sense, Cost similar',
        reason: 'Integrated current sensing for better control',
        useCase: 'Applications requiring current feedback',
        link: '/ti/products/motor-drivers/drv8871.html'
      }
    ],
    companionParts: [
      { partNumber: 'A4950-EVAL', link: '#', description: 'Evaluation board for A4950', category: 'Development Tools' },
      { partNumber: 'DC-MOTOR-12V', link: '#', description: '12V DC motor for testing', category: 'Motors' },
      { partNumber: 'SCHOTTKY-DIODE', link: '#', description: 'Schottky diodes for protection', category: 'Protection' }
    ],
    faqs: [
      { question: 'What motor types can A4950 drive?', answer: 'The A4950 is a full-bridge driver designed for brushed DC motors. It can control motor speed and direction with PWM inputs.', decisionGuide: 'Use for single DC motor control applications.', keywords: ['DC motor', 'full-bridge', 'brushed'] },
      { question: 'What is the maximum current for A4950?', answer: 'The A4950 supports continuous current up to 3A and peak current up to 3.5A with proper thermal management.', decisionGuide: 'Adequate for most small to medium DC motors.', keywords: ['3A', 'continuous current', 'peak current'] },
      { question: 'How do I control motor speed with A4950?', answer: 'Motor speed is controlled by PWM duty cycle on the enable pin. 100% duty cycle = full speed, 50% = half speed.', decisionGuide: 'Use microcontroller PWM output for speed control.', keywords: ['PWM', 'speed control', 'duty cycle'] },
      { question: 'Does A4950 have protection features?', answer: 'Yes, the A4950 includes overcurrent protection, thermal shutdown, and undervoltage lockout for safe operation.', decisionGuide: 'Built-in protection reduces external component count.', keywords: ['protection', 'overcurrent', 'thermal shutdown'] },
      { question: 'What is the supply voltage range for A4950?', answer: 'The A4950 operates from 8V to 40V supply voltage, suitable for 12V and 24V motor systems.', decisionGuide: 'Compatible with common industrial and automotive voltages.', keywords: ['8V-40V', '12V', '24V'] }
    ]
  },
  'A1335': {
    alternativeParts: [
      {
        partNumber: 'AS5048A',
        brand: 'AMS',
        specifications: { resolution: '14-bit', interface: 'SPI', accuracy: '0.05°' },
        comparison: 'A1335=>AS5048A: Resolution 14-bit > 12-bit, Accuracy 0.05° > 0.5°, Interface SPI',
        reason: 'Higher resolution and accuracy',
        useCase: 'Precision angle measurement applications',
        link: '/ams/products/sensors/as5048a.html'
      },
      {
        partNumber: 'AAS33001',
        brand: 'Allegro',
        specifications: { features: 'CVH', accuracy: '0.1°', automotive: 'AEC-Q100' },
        comparison: 'A1335=>AAS33001: Technology CVH > Hall, Accuracy 0.1° > 0.5°',
        reason: 'Advanced CVH technology for better performance',
        useCase: 'Automotive applications requiring high reliability',
        link: '/allegro/products/magnetic-sensors/aas33001.html'
      }
    ],
    companionParts: [
      { partNumber: 'A1335-EVAL', link: '#', description: 'Evaluation kit for A1335', category: 'Development Tools' },
      { partNumber: 'NEODYMIUM-MAGNET', link: '#', description: 'Neodymium magnet for angle sensing', category: 'Magnets' },
      { partNumber: 'ARDUINO-UNO', link: '#', description: 'Arduino for testing interface', category: 'Development Tools' }
    ],
    faqs: [
      { question: 'What is the resolution of A1335?', answer: 'The A1335 provides 12-bit resolution, giving 0.0879° per LSB (360°/4096).', decisionGuide: 'Sufficient for most angle sensing applications.', keywords: ['12-bit', 'resolution', '0.0879°'] },
      { question: 'What output interfaces does A1335 support?', answer: 'The A1335 supports analog, PWM, and SENT output protocols for flexible system integration.', decisionGuide: 'Choose based on your system interface requirements.', keywords: ['analog', 'PWM', 'SENT', 'interface'] },
      { question: 'What is the accuracy of A1335?', answer: 'The A1335 provides ±0.5° typical accuracy at 25°C, with ±1.5° over the full temperature range.', decisionGuide: 'Adequate for throttle position and general angle sensing.', keywords: ['accuracy', '0.5°', 'angle error'] },
      { question: 'How do I magnetize the A1335?', answer: 'The A1335 requires a diametrically magnetized magnet placed above the sensor. The magnet should be centered over the sensor die.', decisionGuide: 'Proper magnet placement is critical for accurate measurement.', keywords: ['magnet', 'diametric', 'placement'] },
      { question: 'Is A1335 automotive qualified?', answer: 'Yes, the A1335 is AEC-Q100 qualified for automotive applications with operating temperature range of -40°C to 150°C.', decisionGuide: 'Suitable for automotive throttle and pedal position sensing.', keywords: ['AEC-Q100', 'automotive', 'qualified'] }
    ]
  },
  'A1324': {
    alternativeParts: [
      {
        partNumber: 'A1325',
        brand: 'Allegro',
        specifications: { sensitivity: '5mV/G', linearity: '0.1%', temperature: '-40°C to 150°C' },
        comparison: 'A1324=>A1325: Sensitivity 5mV/G > 3.125mV/G, Linearity 0.1% > 0.2%',
        reason: 'Higher sensitivity and better linearity',
        useCase: 'Applications requiring better accuracy',
        link: '/allegro/products/magnetic-sensors/a1325.html'
      },
      {
        partNumber: 'SS49E',
        brand: 'Honeywell',
        specifications: { sensitivity: '1.0mV/G', package: 'TO-92', cost: 'Lower' },
        comparison: 'A1324=>SS49E: Sensitivity 1.0mV/G < 3.125mV/G, Cost lower, Package TO-92',
        reason: 'Lower cost for budget-sensitive applications',
        useCase: 'Cost-sensitive linear position sensing',
        link: '/honeywell/products/sensors/ss49e.html'
      }
    ],
    companionParts: [
      { partNumber: 'A1324-EVAL', link: '#', description: 'Evaluation board for linear sensor', category: 'Development Tools' },
      { partNumber: 'ADC-ARDUINO', link: '#', description: 'Arduino ADC shield for testing', category: 'Development Tools' },
      { partNumber: 'MAGNET-RING', link: '#', description: 'Ring magnet for position sensing', category: 'Magnets' }
    ],
    faqs: [
      { question: 'What is the sensitivity of A1324?', answer: 'The A1324 has a sensitivity of 3.125 mV/G, providing good resolution for linear position sensing applications.', decisionGuide: 'Suitable for most linear position measurement needs.', keywords: ['sensitivity', '3.125mV/G', 'linear'] },
      { question: 'What is the linear range of A1324?', answer: 'The A1324 operates linearly over ±500 Gauss range, suitable for most magnetic position sensing applications.', decisionGuide: 'Adequate for typical magnet-to-sensor distances.', keywords: ['linear range', '±500G', 'operating range'] },
      { question: 'How do I interface A1324 with microcontroller?', answer: 'The A1324 provides analog voltage output proportional to magnetic field. Connect directly to ADC input of microcontroller.', decisionGuide: 'Simple analog interface requires no additional components.', keywords: ['analog output', 'ADC', 'interface'] },
      { question: 'What is the temperature drift of A1324?', answer: 'The A1324 has ±0.03%/°C typical temperature coefficient, providing stable operation over temperature.', decisionGuide: 'Good stability for automotive and industrial applications.', keywords: ['temperature drift', 'stability', 'coefficient'] },
      { question: 'What package options are available for A1324?', answer: 'The A1324 is available in 3-pin SIP (UA) and SOT-23W (LH) packages for through-hole and surface mount applications.', decisionGuide: 'Choose package based on PCB assembly requirements.', keywords: ['package', 'SIP', 'SOT-23W'] }
    ]
  },
  'A6261': {
    alternativeParts: [
      {
        partNumber: 'LT3761',
        brand: 'ADI',
        specifications: { current: '2A', features: 'Boost', voltage: '100V' },
        comparison: 'A6261=>LT3761: Current 2A > 1A, Features boost topology, Voltage 100V > 40V',
        reason: 'Higher power and boost capability',
        useCase: 'High-power LED applications requiring boost topology',
        link: '/adi/products/led-drivers/lt3761.html'
      },
      {
        partNumber: 'AL8862',
        brand: 'Diodes Inc',
        specifications: { current: '2A', topology: 'Buck', cost: 'Lower' },
        comparison: 'A6261=>AL8862: Current 2A > 1A, Topology buck only, Cost lower',
        reason: 'Lower cost for buck-only applications',
        useCase: 'Cost-sensitive LED lighting applications',
        link: '/diodes/products/led-drivers/al8862.html'
      }
    ],
    companionParts: [
      { partNumber: 'A6261-EVAL', link: '#', description: 'Evaluation board for LED driver', category: 'Development Tools' },
      { partNumber: 'LED-COB-10W', link: '#', description: '10W COB LED for testing', category: 'LEDs' },
      { partNumber: 'INDUCTOR-22UH', link: '#', description: '22μH inductor for buck converter', category: 'Passives' }
    ],
    faqs: [
      { question: 'What is the maximum LED current for A6261?', answer: 'The A6261 supports up to 1A LED current with internal MOSFET. External MOSFET can be used for higher currents.', decisionGuide: 'Suitable for LED strings up to 1A.', keywords: ['1A', 'LED current', 'maximum'] },
      { question: 'What topologies does A6261 support?', answer: 'The A6261 supports buck, boost, and buck-boost topologies for flexible LED driving configurations.', decisionGuide: 'Choose topology based on input/output voltage relationship.', keywords: ['topology', 'buck', 'boost', 'buck-boost'] },
      { question: 'Does A6261 support PWM dimming?', answer: 'Yes, the A6261 supports PWM dimming with frequency up to 1kHz for brightness control.', decisionGuide: 'Use PWM input for smooth dimming control.', keywords: ['PWM dimming', 'brightness', 'control'] },
      { question: 'What protection features does A6261 have?', answer: 'The A6261 includes LED open/short protection, overcurrent protection, and thermal shutdown.', decisionGuide: 'Comprehensive protection for reliable LED operation.', keywords: ['protection', 'open LED', 'short'] },
      { question: 'What is the input voltage range for A6261?', answer: 'The A6261 operates from 6V to 40V input, suitable for 12V and 24V automotive systems.', decisionGuide: 'Compatible with standard automotive and industrial voltages.', keywords: ['6V-40V', 'input voltage', 'automotive'] }
    ]
  },
  'A8517': {
    alternativeParts: [
      {
        partNumber: 'A8516',
        brand: 'Allegro',
        specifications: { channels: '4', current: '100mA', features: 'Matrix' },
        comparison: 'A8517=>A8516: Channels 4 < 8, Current 100mA < 150mA, Features matrix capable',
        reason: 'Lower channel count for simpler applications',
        useCase: 'Applications requiring fewer LED channels',
        link: '/allegro/products/led-drivers/a8516.html'
      },
      {
        partNumber: 'TLC5940',
        brand: 'TI',
        specifications: { channels: '16', interface: 'SPI', grayscale: '12-bit' },
        comparison: 'A8517=>TLC5940: Channels 16 > 8, Grayscale 12-bit > 10-bit, Interface SPI',
        reason: 'More channels and higher resolution',
        useCase: 'Complex LED matrix displays',
        link: '/ti/products/led-drivers/tlc5940.html'
      }
    ],
    companionParts: [
      { partNumber: 'A8517-EVAL', link: '#', description: 'Evaluation board for 8-channel driver', category: 'Development Tools' },
      { partNumber: 'LED-RGB-ARRAY', link: '#', description: 'RGB LED array for testing', category: 'LEDs' },
      { partNumber: 'MICROCONTROLLER', link: '#', description: 'MCU for SPI control', category: 'Controllers' }
    ],
    faqs: [
      { question: 'How many LED channels does A8517 support?', answer: 'The A8517 supports up to 8 independent LED channels, each with individual current control.', decisionGuide: 'Suitable for multi-channel LED applications.', keywords: ['8 channels', 'independent', 'multi-channel'] },
      { question: 'What is the maximum current per channel?', answer: 'Each channel supports up to 150mA LED current with programmable current sink.', decisionGuide: 'Adequate for high-brightness LED strings.', keywords: ['150mA', 'per channel', 'current sink'] },
      { question: 'Does A8517 support LED matrix configuration?', answer: 'Yes, multiple A8517 devices can be cascaded for larger LED matrix displays.', decisionGuide: 'Scalable for various display sizes.', keywords: ['matrix', 'cascade', 'scalable'] },
      { question: 'What dimming resolution does A8517 provide?', answer: 'The A8517 provides 10-bit PWM dimming resolution (1024 levels) for smooth brightness control.', decisionGuide: '10-bit resolution provides smooth fading.', keywords: ['10-bit', 'PWM', 'dimming'] },
      { question: 'What interface does A8517 use?', answer: 'The A8517 uses SPI interface for configuration and control from microcontroller.', decisionGuide: 'Standard SPI interface compatible with most microcontrollers.', keywords: ['SPI', 'interface', 'microcontroller'] }
    ]
  }
};

// 遍历所有分类和产品，修复缺失的字段
let fixCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    const partNumber = product.partNumber;
    
    if (fixes[partNumber]) {
      // 检查并添加缺失的字段
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = fixes[partNumber].alternativeParts;
        console.log(`✅ Added alternativeParts for ${partNumber}`);
        fixCount++;
      }
      
      if (!product.companionParts || product.companionParts.length < 3) {
        product.companionParts = fixes[partNumber].companionParts;
        console.log(`✅ Added companionParts for ${partNumber}`);
        fixCount++;
      }
      
      if (!product.faqs || product.faqs.length < 5) {
        product.faqs = fixes[partNumber].faqs;
        console.log(`✅ Added FAQs for ${partNumber}`);
        fixCount++;
      }
    }
  });
});

// 保存更新后的文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n========================================`);
console.log(`✅ Allegro products fixed successfully!`);
console.log(`📊 Total fixes applied: ${fixCount}`);
console.log(`========================================`);
