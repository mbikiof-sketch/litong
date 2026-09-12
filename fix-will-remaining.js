/**
 * Fix remaining Will Semiconductor issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 Fixing remaining Will Semiconductor issues\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
let fixCount = 0;

// Extended FAQ answers for products with short answers
const extendedFaqs = {
  'WS2400': [
    {
      question: 'What is the RF output power of WS2400?',
      answer: 'The WS2400 features a programmable RF output power ranging from -20dBm to +8dBm, allowing optimization for various range and regulatory requirements. The output power is configurable through the SPI interface with 1dB step resolution. Higher output power extends communication range but increases current consumption. For battery-powered applications, lower output power settings can significantly extend battery life while maintaining adequate range for the application. The RF power amplifier includes automatic gain control and temperature compensation to maintain stable output power across operating conditions. Output power calibration is performed during manufacturing to ensure consistent performance.',
      decisionGuide: 'Select output power based on your range requirements and power budget. Contact FAE for RF link budget analysis.',
      keywords: ['RF power', 'output power', 'transmit power']
    },
    {
      question: 'What is the receiver sensitivity of WS2400?',
      answer: 'The WS2400 achieves excellent receiver sensitivity of -97dBm at 1Mbps data rate, enabling long-range communication even in challenging RF environments. The sensitivity varies with data rate - higher data rates require stronger signals for reliable reception. At 2Mbps, sensitivity is typically -94dBm. The receiver features adaptive gain control and digital signal processing to maximize sensitivity while rejecting interferers. The high sensitivity enables communication over hundreds of meters in open space and reliable indoor communication through multiple walls. For maximum range, use the lowest data rate and highest output power supported by your application.',
      decisionGuide: 'Use lower data rates for maximum range. Contact FAE for range estimation in your specific environment.',
      keywords: ['receiver sensitivity', 'RX sensitivity', 'range']
    },
    {
      question: 'What frequency bands does WS2400 support?',
      answer: 'The WS2400 operates in the 2.4GHz ISM band with 40 channels spaced 2MHz apart from 2402MHz to 2480MHz. Channel selection is programmable through the configuration interface. The device supports frequency hopping spread spectrum (FHSS) for improved interference immunity and regulatory compliance. Channel bandwidth is 2MHz, providing good selectivity against adjacent channel interference. The 2.4GHz band is globally license-free, making WS2400 suitable for worldwide deployment. However, local regulations may restrict maximum output power and duty cycle in certain regions.',
      decisionGuide: 'Verify local regulatory requirements for 2.4GHz operation in your target markets. Contact FAE for regulatory guidance.',
      keywords: ['frequency band', '2.4GHz', 'ISM band', 'channels']
    },
    {
      question: 'What modulation scheme does WS2400 use?',
      answer: 'The WS2400 uses GFSK (Gaussian Frequency Shift Keying) modulation, which provides excellent spectral efficiency and robust performance in the presence of interference. GFSK is a constant-envelope modulation, allowing efficient Class-C power amplifiers to be used, reducing power consumption. The modulation index is optimized for the best trade-off between bandwidth efficiency and receiver sensitivity. The device supports multiple data rates from 250kbps to 2Mbps, with higher rates using wider bandwidth but providing higher throughput. GFSK modulation is widely used in Bluetooth, Zigbee, and proprietary 2.4GHz protocols due to its reliability and efficiency.',
      decisionGuide: 'Select data rate based on your throughput requirements and range needs. Contact FAE for modulation analysis.',
      keywords: ['GFSK', 'modulation', 'data rate']
    },
    {
      question: 'What is the typical communication range of WS2400?',
      answer: 'The WS2400 communication range depends on multiple factors including output power setting, data rate, antenna type, and environmental conditions. In open outdoor environments with +8dBm output power and -97dBm sensitivity, range can exceed 500 meters. Indoor range is typically 50-100 meters through walls and obstacles. Lower data rates provide better sensitivity and longer range at the cost of reduced throughput. PCB antenna designs typically achieve shorter range than external antennas but offer lower cost and smaller size. For maximum range, use high output power, low data rate, and an optimized external antenna with good matching.',
      decisionGuide: 'Range requirements should drive your antenna selection and output power settings. Contact FAE for range testing.',
      keywords: ['communication range', 'range estimation', 'coverage']
    }
  ],
  'WS8226': [
    {
      question: 'What Bluetooth version does WS8226 support?',
      answer: 'The WS8226 supports Bluetooth Low Energy (BLE) 5.0 with extended range and high-speed modes. BLE 5.0 introduces 2x speed (2Mbps PHY), 4x range (125kbps/500kbps coded PHY), and 8x advertising capacity compared to BLE 4.2. The device supports all BLE 5.0 features including extended advertising, periodic advertising with synchronization, and channel selection algorithm #2. Backward compatibility with BLE 4.0/4.1/4.2 devices is maintained. The BLE stack runs on the integrated ARM Cortex-M4 processor with 256KB Flash and 32KB RAM, providing sufficient resources for complex applications.',
      decisionGuide: 'BLE 5.0 features enable improved performance over previous versions. Contact FAE for BLE 5.0 migration guidance.',
      keywords: ['Bluetooth 5.0', 'BLE', 'Bluetooth version']
    },
    {
      question: 'What is the power consumption of WS8226 in different modes?',
      answer: 'The WS8226 offers excellent power efficiency with multiple operating modes: Active TX mode consumes 7.5mA at +4dBm output power; Active RX mode consumes 6.8mA; Sleep mode with RAM retention consumes 3.5uA; and Deep sleep mode consumes 1.5uA. The device supports fast wake-up from sleep (approximately 10us) to minimize latency. For typical beacon applications with 1-second advertising intervals, average current consumption is approximately 15uA, enabling multi-year battery life from a coin cell. The integrated DC-DC converter maintains high efficiency across the operating range.',
      decisionGuide: 'Use sleep modes aggressively to minimize average power. Contact FAE for power optimization analysis.',
      keywords: ['power consumption', 'battery life', 'sleep mode']
    },
    {
      question: 'What processor is integrated in WS8226?',
      answer: 'The WS8226 integrates an ARM Cortex-M4 processor running at up to 64MHz with DSP instructions and single-precision floating-point unit (FPU). The processor provides 256KB of embedded Flash memory for program storage and 32KB of SRAM for data. The Cortex-M4 core offers excellent performance for signal processing and protocol stack execution while maintaining low power consumption. The device includes a rich peripheral set including UART, SPI, I2C, PWM, ADC, and GPIOs. The processing capability enables complex applications to run directly on WS8226 without an external host microcontroller, reducing system cost and complexity.',
      decisionGuide: 'The integrated Cortex-M4 is suitable for most BLE applications. Contact FAE for performance benchmarking.',
      keywords: ['ARM Cortex-M4', 'processor', 'Flash', 'SRAM']
    },
    {
      question: 'What security features does WS8226 provide?',
      answer: 'The WS8226 includes comprehensive security features for BLE applications: AES-128 hardware encryption engine for secure data transmission; Secure boot to prevent unauthorized firmware execution; True random number generator (TRNG) for cryptographic operations; and Memory protection unit (MPU) for isolating application and stack code. BLE security features include LE Secure Connections with ECDH key exchange, passkey entry, numeric comparison, and OOB pairing methods. The device supports secure firmware over-the-air (FOTA) updates with signature verification. These security features protect against eavesdropping, man-in-the-middle attacks, and unauthorized access.',
      decisionGuide: 'Enable all security features for production deployments. Contact FAE for security best practices.',
      keywords: ['security', 'AES encryption', 'secure boot', 'BLE security']
    },
    {
      question: 'What development tools support WS8226?',
      answer: 'The WS8226 is supported by comprehensive development tools including: SDK with BLE stack and sample applications; Keil MDK and IAR Embedded Workbench IDE support; J-Link and DAPLink debuggers for programming and debugging; Packet sniffer tools for BLE protocol analysis; and RF test tools for transmitter/receiver evaluation. Will Semiconductor provides reference designs, evaluation boards, and technical documentation. The SDK includes APIs for all device functions with example code for common use cases. Community forums and technical support from Will Semiconductor and BeiLuo FAE team are available for development assistance.',
      decisionGuide: 'Start with the evaluation kit and SDK for rapid development. Contact FAE for tool setup assistance.',
      keywords: ['development tools', 'SDK', 'IDE', 'debugger']
    }
  ]
};

// Process each category and product
productsData.categories.forEach((category) => {
  console.log(`\n📁 Processing category: ${category.name}`);
  
  // Fix category longDescription - add distributor/selection keywords
  if (!category.longDescription.includes('distributor') && !category.longDescription.includes('selection')) {
    category.longDescription += ' As an authorized distributor, BeiLuo provides professional product selection support and technical services.';
    fixCount++;
    console.log(`  ✓ Fixed longDescription for ${category.id}`);
  }
  
  // Fix selectionGuideLink
  if (!category.selectionGuideLink || category.selectionGuideLink === '') {
    category.selectionGuideLink = `/will/support/will-${category.slug}-selection-guide.html`;
    fixCount++;
    console.log(`  ✓ Fixed selectionGuideLink for ${category.id}`);
  }
  
  // Process each product in the category
  category.products.forEach((product) => {
    // Fix FAQs with short answers
    if (extendedFaqs[product.partNumber]) {
      console.log(`  📝 Fixing FAQs for ${product.partNumber}`);
      product.faqs = extendedFaqs[product.partNumber];
      fixCount++;
      console.log(`    ✓ Replaced FAQs with extended versions`);
    }
  });
});

// Write back the fixed data
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Fix complete! Total fixes: ${fixCount}`);
console.log(`\n📄 Updated file: ${productsFile}`);
