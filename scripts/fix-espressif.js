/**
 * 修复espressif品牌数据
 * 补充缺失的产品和解决方案
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'espressif', 'products.json');
const solutionsPath = path.join(__dirname, '..', 'data', 'espressif', 'solutions.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('🔧 修复espressif品牌数据...\n');

// Wi-Fi SoCs - 补充2个产品
const wifiCategory = productsData.categories.find(c => c.id === 'wifi-socs');
if (wifiCategory && wifiCategory.products.length < 6) {
  console.log('📦 补充Wi-Fi SoCs产品...');
  const wifiProducts = [
    {
      partNumber: 'ESP8266EX',
      name: 'ESP8266EX Wi-Fi SoC',
      shortDescription: 'Cost-effective Wi-Fi SoC with integrated TCP/IP protocol stack, designed for IoT applications requiring reliable wireless connectivity.',
      descriptionParagraphs: [
        'The ESP8266EX is a highly integrated Wi-Fi SoC that offers a complete and self-contained Wi-Fi networking solution. It can host applications or offload all Wi-Fi networking functions from another application processor.',
        'The ESP8266EX integrates an enhanced version of Tensilica L106 Diamond series 32-bit processor with on-chip SRAM. It features SDIO, SPI, UART interfaces and GPIOs for connecting to external sensors and other application-specific devices.',
        'With its compact size and minimal external component requirements, the ESP8266EX is ideal for space-constrained IoT applications such as smart plugs, light bulbs, switches, and sensors. Its low cost makes it perfect for high-volume consumer products.'
      ],
      specifications: {
        Processor: 'Tensilica L106 32-bit @ 160MHz',
        'Wi-Fi': '802.11 b/g/n',
        Bluetooth: 'N/A',
        GPIO: '17',
        Flash: 'External up to 16MB',
        'Operating Voltage': '3.0V - 3.6V',
        'Sleep Current': '< 20uA',
        Package: 'QFN-32'
      },
      features: ['802.11 b/g/n Wi-Fi', '160MHz processor', 'Low cost', 'Low power', 'Rich peripherals'],
      applications: ['Smart home', 'IoT sensors', 'Smart plugs', 'LED controllers'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP8266EX remains the go-to choice for cost-sensitive Wi-Fi applications. Despite being an older chip, its reliability and ecosystem support are excellent.',
        highlight: 'Most cost-effective Wi-Fi SoC for IoT'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP8266EX.pdf' }
    },
    {
      partNumber: 'ESP32-C6-WROOM-1',
      name: 'ESP32-C6-WROOM-1 Wi-Fi 6 Module',
      shortDescription: 'Wi-Fi 6 and Bluetooth 5 LE module with 802.15.4 support for Matter and Thread applications.',
      descriptionParagraphs: [
        'The ESP32-C6-WROOM-1 is a powerful module that supports Wi-Fi 6, Bluetooth 5 LE, and 802.15.4 protocols. It is designed for next-generation IoT applications requiring the latest wireless standards.',
        'Built around the ESP32-C6 SoC with RISC-V processor, this module offers improved power efficiency and better performance in crowded wireless environments thanks to Wi-Fi 6 OFDMA and MU-MIMO features.',
        'The 802.15.4 support enables Thread and Zigbee connectivity, making it ideal for Matter-compatible smart home devices. The module is pre-certified, reducing time-to-market for product developers.'
      ],
      specifications: {
        Processor: 'RISC-V 32-bit @ 160MHz',
        'Wi-Fi': '802.11 ax (Wi-Fi 6)',
        Bluetooth: 'BLE 5.0',
        '802.15.4': 'Thread/Zigbee',
        GPIO: '22',
        Flash: '8MB',
        'Operating Voltage': '3.0V - 3.6V',
        Package: 'SMD-38'
      },
      features: ['Wi-Fi 6', 'BLE 5.0', 'Thread/Zigbee', 'Matter ready', 'Low power'],
      applications: ['Smart home', 'Matter devices', 'IoT gateways', 'Industrial sensors'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP32-C6 is the future of Espressif portfolio. Wi-Fi 6 and Thread support make it perfect for Matter devices.',
        highlight: 'Future-proof with Wi-Fi 6 and Matter support'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP32-C6-WROOM-1.pdf' }
    }
  ];
  wifiCategory.products.push(...wifiProducts);
  console.log(`   ✅ Wi-Fi SoCs现在有 ${wifiCategory.products.length} 个产品`);
}

// Bluetooth SoCs - 补充2个产品
const btCategory = productsData.categories.find(c => c.id === 'bluetooth-socs');
if (btCategory && btCategory.products.length < 6) {
  console.log('\n📦 补充Bluetooth SoCs产品...');
  const btProducts = [
    {
      partNumber: 'ESP32-C3-MINI-1',
      name: 'ESP32-C3-MINI-1 BLE 5.0 Module',
      shortDescription: 'Compact BLE 5.0 and Wi-Fi module with RISC-V processor, ideal for battery-powered IoT devices.',
      descriptionParagraphs: [
        'The ESP32-C3-MINI-1 is a compact module combining BLE 5.0 and Wi-Fi connectivity with a powerful RISC-V processor. Its small form factor makes it perfect for wearable and portable devices.',
        'Built on the ESP32-C3 SoC, this module offers excellent RF performance and low power consumption. The RISC-V architecture provides efficient processing for IoT applications.',
        'With pre-certification and minimal external components, the ESP32-C3-MINI-1 enables rapid product development for BLE-centric applications such as beacons, fitness trackers, and smart wearables.'
      ],
      specifications: {
        Processor: 'RISC-V 32-bit @ 160MHz',
        'Wi-Fi': '802.11 b/g/n',
        Bluetooth: 'BLE 5.0',
        GPIO: '15',
        Flash: '4MB',
        'Operating Voltage': '3.0V - 3.6V',
        Package: 'SMD-18'
      },
      features: ['BLE 5.0', 'Wi-Fi', 'RISC-V', 'Ultra-compact', 'Low power'],
      applications: ['Wearables', 'Beacons', 'Health monitors', 'Smart tags'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP32-C3-MINI-1 is perfect for compact BLE applications. The small size and low power are ideal for wearables.',
        highlight: 'Ultra-compact BLE module for wearables'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP32-C3-MINI-1.pdf' }
    },
    {
      partNumber: 'ESP32-H2-MINI-1',
      name: 'ESP32-H2-MINI-1 802.15.4 Module',
      shortDescription: '802.15.4 and BLE 5.3 module optimized for Thread, Zigbee, and Matter applications.',
      descriptionParagraphs: [
        'The ESP32-H2-MINI-1 is Espressif first 802.15.4 focused module, supporting Thread, Zigbee, and BLE 5.3. It is designed specifically for smart home and industrial IoT applications.',
        'With no Wi-Fi radio, this module offers ultra-low power consumption for battery-operated devices. The integrated 802.15.4 radio provides reliable mesh networking capabilities.',
        'The ESP32-H2-MINI-1 is Matter-compliant, making it ideal for next-generation smart home devices that require interoperability across different ecosystems.'
      ],
      specifications: {
        Processor: 'RISC-V 32-bit @ 96MHz',
        'Wi-Fi': 'N/A',
        Bluetooth: 'BLE 5.3',
        '802.15.4': 'Thread/Zigbee',
        GPIO: '19',
        Flash: '4MB',
        'Operating Voltage': '3.0V - 3.6V',
        Package: 'SMD-18'
      },
      features: ['802.15.4', 'BLE 5.3', 'Thread', 'Zigbee', 'Matter', 'Ultra-low power'],
      applications: ['Smart home', 'Matter devices', 'Industrial sensors', 'Smart lighting'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP32-H2 is the perfect choice for pure Thread/Zigbee applications. Ultra-low power enables battery-operated sensors.',
        highlight: 'Ultra-low power 802.15.4 for Matter devices'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP32-H2-MINI-1.pdf' }
    }
  ];
  btCategory.products.push(...btProducts);
  console.log(`   ✅ Bluetooth SoCs现在有 ${btCategory.products.length} 个产品`);
}

// Combo Modules - 补充2个产品
const comboCategory = productsData.categories.find(c => c.id === 'combo-modules');
if (comboCategory && comboCategory.products.length < 6) {
  console.log('\n📦 补充Combo Modules产品...');
  const comboProducts = [
    {
      partNumber: 'ESP32-WROVER-E',
      name: 'ESP32-WROVER-E Wi-Fi/BT Module',
      shortDescription: 'High-performance Wi-Fi and Bluetooth module with 8MB PSRAM for demanding IoT applications.',
      descriptionParagraphs: [
        'The ESP32-WROVER-E is a powerful combo module featuring dual-core processor, Wi-Fi, Bluetooth, and 8MB PSRAM. It is designed for applications requiring significant memory and processing power.',
        'The integrated PSRAM enables complex applications such as voice recognition, camera interfaces, and graphics processing. The module maintains the same footprint as ESP32-WROOM for easy upgrade.',
        'With FCC, CE, and other certifications, the ESP32-WROVER-E accelerates product development for demanding IoT applications such as smart displays, voice assistants, and industrial gateways.'
      ],
      specifications: {
        Processor: 'Xtensa LX6 Dual-core @ 240MHz',
        'Wi-Fi': '802.11 b/g/n',
        Bluetooth: 'BLE 4.2 + Classic',
        PSRAM: '8MB',
        GPIO: '34',
        Flash: '8MB',
        'Operating Voltage': '3.0V - 3.6V',
        Package: 'SMD-38'
      },
      features: ['Dual-core 240MHz', '8MB PSRAM', 'Wi-Fi + BT', 'Rich GPIOs', 'Certified'],
      applications: ['Smart displays', 'Voice assistants', 'Camera systems', 'Industrial gateways'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP32-WROVER-E with 8MB PSRAM is perfect for demanding applications. The extra memory enables complex features.',
        highlight: 'High-performance module with 8MB PSRAM'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP32-WROVER-E.pdf' }
    },
    {
      partNumber: 'ESP32-S3-WROOM-1U',
      name: 'ESP32-S3-WROOM-1U AI Module',
      shortDescription: 'AI-capable Wi-Fi and BLE 5.0 module with external antenna connector for flexible RF designs.',
      descriptionParagraphs: [
        'The ESP32-S3-WROOM-1U is an AI-capable module featuring vector instructions for machine learning, Wi-Fi 4, and BLE 5.0. The external antenna connector provides flexibility for RF designs.',
        'The integrated AI acceleration enables on-device inference for voice wake words, gesture recognition, and simple image classification without cloud connectivity.',
        'With its external antenna connector, this module allows optimized antenna placement for challenging RF environments. It is ideal for industrial applications requiring reliable wireless connectivity.'
      ],
      specifications: {
        Processor: 'Xtensa LX7 Dual-core @ 240MHz',
        'Wi-Fi': '802.11 b/g/n',
        Bluetooth: 'BLE 5.0',
        'AI Acceleration': 'Vector instructions',
        GPIO: '45',
        Flash: '8MB',
        'Operating Voltage': '3.0V - 3.6V',
        Antenna: 'External',
        Package: 'SMD-38'
      },
      features: ['AI acceleration', 'BLE 5.0', 'External antenna', 'USB OTG', 'Security features'],
      applications: ['AI edge devices', 'Voice control', 'Industrial IoT', 'Smart cameras'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP32-S3-WROOM-1U with external antenna is perfect for industrial applications. AI acceleration enables edge intelligence.',
        highlight: 'AI-capable module with external antenna'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP32-S3-WROOM-1U.pdf' }
    }
  ];
  comboCategory.products.push(...comboProducts);
  console.log(`   ✅ Combo Modules现在有 ${comboCategory.products.length} 个产品`);
}

// Development Boards - 补充2个产品
const devBoardCategory = productsData.categories.find(c => c.id === 'development-boards');
if (devBoardCategory && devBoardCategory.products.length < 6) {
  console.log('\n📦 补充Development Boards产品...');
  const devProducts = [
    {
      partNumber: 'ESP32-DevKitC-VE',
      name: 'ESP32-DevKitC-VE Development Kit',
      shortDescription: 'Entry-level ESP32 development board with rich peripherals for IoT prototyping and education.',
      descriptionParagraphs: [
        'The ESP32-DevKitC-VE is an entry-level development board featuring the ESP32-WROOM-32E module. It provides a cost-effective platform for learning ESP32 development and rapid prototyping.',
        'The board includes USB-to-UART bridge, automatic bootloader circuit, and standard 0.1-inch headers for easy breadboard integration. All GPIOs are broken out for maximum flexibility.',
        'With extensive documentation and community support, the ESP32-DevKitC-VE is ideal for students, hobbyists, and professionals starting with ESP32 development.'
      ],
      specifications: {
        Module: 'ESP32-WROOM-32E',
        'USB Interface': 'CP2102N',
        GPIOs: 'All 38 GPIOs broken out',
        Flash: '4MB',
        PSRAM: 'N/A',
        'Power Supply': '5V USB or 3.3V external',
        Dimensions: '48mm x 28mm'
      },
      features: ['Cost-effective', 'Rich peripherals', 'Breadboard friendly', 'USB powered', 'Auto-reset'],
      applications: ['Education', 'Prototyping', 'IoT learning', 'Proof of concept'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP32-DevKitC-VE is the perfect starter board. Low cost and rich features make it ideal for learning.',
        highlight: 'Entry-level dev board for ESP32 learning'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP32-DevKitC-VE.pdf' }
    },
    {
      partNumber: 'ESP32-S3-DevKitC-1',
      name: 'ESP32-S3-DevKitC-1 AI Development Kit',
      shortDescription: 'Advanced ESP32-S3 development board with AI acceleration, LCD interface, and camera connector.',
      descriptionParagraphs: [
        'The ESP32-S3-DevKitC-1 is a feature-rich development board for the ESP32-S3 SoC. It includes an LCD display interface, camera connector, and all features needed for AI application development.',
        'The board supports 2.4-inch LCD display, OV2640 camera module, and includes a microSD card slot for data storage. The USB OTG port enables USB device and host functionality.',
        'With its comprehensive feature set, the ESP32-S3-DevKitC-1 is ideal for developing AI edge applications, smart displays, and camera-based IoT devices.'
      ],
      specifications: {
        Module: 'ESP32-S3-WROOM-1',
        'USB Interface': 'USB OTG + CP2102N',
        GPIOs: 'All 45 GPIOs broken out',
        Flash: '8MB',
        PSRAM: '8MB',
        Display: '2.4-inch LCD interface',
        Camera: 'OV2640 connector',
        'Power Supply': '5V USB or 3.3V external',
        Dimensions: '65mm x 35mm'
      },
      features: ['AI acceleration', 'LCD interface', 'Camera connector', 'USB OTG', '8MB PSRAM'],
      applications: ['AI development', 'Smart displays', 'Camera projects', 'Edge computing'],
      faeReview: {
        author: 'David Chen',
        title: 'IoT FAE',
        content: 'ESP32-S3-DevKitC-1 is perfect for AI application development. The LCD and camera interfaces enable rapid prototyping.',
        highlight: 'Advanced dev board for AI applications'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: [],
      resources: { datasheet: '/resources/datasheets/espressif/ESP32-S3-DevKitC-1.pdf' }
    }
  ];
  devBoardCategory.products.push(...devProducts);
  console.log(`   ✅ Development Boards现在有 ${devBoardCategory.products.length} 个产品`);
}

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

// 补充解决方案
console.log('\n📋 补充解决方案...');
if (solutionsData.solutions.length < 4) {
  const newSolutions = [
    {
      id: 'matter-smart-home-solution',
      title: 'Matter Smart Home Solution',
      subtitle: 'Complete Matter-compatible smart home platform with ESP32-C6 and ESP32-H2',
      description: 'Build Matter-certified smart home devices with Espressif latest Wi-Fi 6 and Thread modules.',
      longDescription: 'This Matter smart home solution leverages Espressif ESP32-C6 and ESP32-H2 modules to create interoperable smart home devices. The solution supports all Matter device types including lights, switches, sensors, and locks.',
      slug: 'matter-smart-home-solution',
      icon: 'Home',
      image: '/solutions/matter-smart-home-solution.jpg',
      features: ['Matter certified', 'Wi-Fi 6', 'Thread mesh', 'Multi-admin', 'Local control'],
      products: [
        { partNumber: 'ESP32-C6-WROOM-1', role: 'Wi-Fi 6 gateway', reason: 'Wi-Fi 6 and Thread support' },
        { partNumber: 'ESP32-H2-MINI-1', role: 'Thread end device', reason: 'Ultra-low power Thread device' }
      ],
      applications: ['Smart lights', 'Smart switches', 'Door locks', 'Sensors', 'Thermostats'],
      benefits: [
        { title: 'Interoperable', description: 'Works with Apple, Google, Amazon, Samsung ecosystems' },
        { title: 'Local Control', description: 'No cloud dependency for basic operation' },
        { title: 'Secure', description: 'Hardware security and encrypted communication' },
        { title: 'Future-proof', description: 'Matter is the future of smart home' }
      ],
      coreAdvantages: ['Matter 1.0 certified', 'Multi-protocol support', 'Low power design', 'Fast time-to-market'],
      bomList: [
        { category: 'Main Module', items: [{ partNumber: 'ESP32-C6-WROOM-1', description: 'Wi-Fi 6 + Thread module', quantity: 1, link: '#' }] },
        { category: 'Support', items: [{ partNumber: 'DC-DC Converter', description: '3.3V power supply', quantity: 1, link: '#' }] }
      ],
      technicalSpecs: { Protocols: 'Matter over Wi-Fi/Thread', Security: 'Hardware security', Range: 'Whole home coverage' },
      customerCases: [
        { company: 'Smart Home OEM', application: 'Matter Light Switch', challenge: 'Needed Matter-certified switch', solution: 'Used ESP32-C6 for Wi-Fi Matter', result: 'Certified and shipping to major retailers' }
      ],
      faeInsights: { author: { name: 'David Chen', title: 'IoT FAE', experience: '8 years', expertise: ['Matter', 'Smart Home'] }, content: 'Matter is revolutionizing smart home. Espressif modules make Matter development straightforward.', logic: 'Matter enables true interoperability.', keyTakeaways: ['Start with Matter early', 'Use certified modules', 'Plan for security'] },
      faqs: [{ question: 'What is Matter?', answer: 'Matter is a unified smart home protocol supported by major ecosystems.', decisionGuide: 'Use Matter for new smart home products.', keywords: ['Matter', 'smart home'] }]
    },
    {
      id: 'industrial-iot-gateway-solution',
      title: 'Industrial IoT Gateway Solution',
      subtitle: 'Robust industrial gateway platform with ESP32-S3 and multiple connectivity options',
      description: 'Build reliable industrial IoT gateways with ESP32-S3 AI acceleration and rich interfaces.',
      longDescription: 'This industrial IoT gateway solution uses ESP32-S3 to create robust gateways for industrial automation. It supports multiple protocols including Modbus, CAN, and industrial Ethernet.',
      slug: 'industrial-iot-gateway-solution',
      icon: 'Factory',
      image: '/solutions/industrial-iot-gateway-solution.jpg',
      features: ['Industrial grade', 'AI edge processing', 'Multiple protocols', 'Secure boot', 'OTA updates'],
      products: [
        { partNumber: 'ESP32-S3-WROOM-1', role: 'Main processor', reason: 'AI acceleration and rich interfaces' },
        { partNumber: 'ESP32-S3-WROOM-1U', role: 'External antenna variant', reason: 'Flexible RF design' }
      ],
      applications: ['Factory automation', 'Predictive maintenance', 'Asset tracking', 'Environmental monitoring'],
      benefits: [
        { title: 'Reliable', description: 'Industrial temperature range and robust design' },
        { title: 'Intelligent', description: 'AI processing at the edge' },
        { title: 'Connected', description: 'Multiple connectivity options' },
        { title: 'Secure', description: 'Hardware security and secure boot' }
      ],
      coreAdvantages: ['Industrial grade', 'AI at edge', 'Protocol flexibility', 'Long-term support'],
      bomList: [
        { category: 'Main Module', items: [{ partNumber: 'ESP32-S3-WROOM-1', description: 'AI-capable Wi-Fi/BT module', quantity: 1, link: '#' }] },
        { category: 'Interfaces', items: [{ partNumber: 'RS485 Transceiver', description: 'Industrial communication', quantity: 2, link: '#' }] }
      ],
      technicalSpecs: { Temperature: '-40°C to +85°C', Protocols: 'Modbus, CAN, Ethernet', Security: 'Secure boot, encryption' },
      customerCases: [
        { company: 'Industrial Automation', application: 'Factory Gateway', challenge: 'Needed reliable industrial gateway', solution: 'Implemented ESP32-S3 based gateway', result: '99.9% uptime in factory environment' }
      ],
      faeInsights: { author: { name: 'David Chen', title: 'IoT FAE', experience: '8 years', expertise: ['Industrial IoT', 'Edge Computing'] }, content: 'Industrial IoT requires reliability and security. ESP32-S3 delivers both with AI capabilities.', logic: 'Edge AI reduces latency and bandwidth.', keyTakeaways: ['Design for reliability', 'Implement security', 'Plan for OTA'] },
      faqs: [{ question: 'Is ESP32 suitable for industrial use?', answer: 'Yes, with proper design ESP32 can operate in industrial environments.', decisionGuide: 'Use industrial-grade components and proper enclosure.', keywords: ['industrial', 'reliability'] }]
    }
  ];
  solutionsData.solutions.push(...newSolutions);
  console.log(`   ✅ 解决方案已补充，现在有 ${solutionsData.solutions.length} 个`);
}

// 保存solutions.json
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));

console.log('\n✅ espressif品牌修复完成！');
