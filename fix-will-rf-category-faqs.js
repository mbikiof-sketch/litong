/**
 * Fix Will Semiconductor RF and Connectivity Category FAQs
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 Fixing Will Semiconductor RF and Connectivity Category FAQs\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
let fixCount = 0;

// Extended RF and Connectivity category-level FAQs
const rfFaqs = [
  {
    question: 'What wireless connectivity solutions does Will Semiconductor offer?',
    answer: 'Will Semiconductor offers a comprehensive range of wireless connectivity solutions including Bluetooth Low Energy (BLE) SoCs, RF transceivers, and wireless connectivity modules. The BLE portfolio includes devices with integrated ARM Cortex processors, supporting BLE 5.0/5.1 with extended range and high-speed modes. RF transceivers support various protocols including proprietary 2.4GHz, sub-1GHz, and multi-protocol applications. All solutions feature low power consumption, high sensitivity, and robust RF performance. The integrated solutions reduce BOM cost and simplify design with minimal external components required.',
    decisionGuide: 'Select wireless solutions based on your protocol requirements, range needs, and power constraints. Contact FAE for RF link budget analysis.',
    keywords: ['wireless', 'BLE', 'Bluetooth', 'RF transceiver', 'connectivity']
  },
  {
    question: 'What is the RF performance of Will Semiconductor wireless products?',
    answer: 'Will Semiconductor wireless products deliver excellent RF performance with optimized transmitter and receiver characteristics. Transmit power is programmable from -20dBm to +8dBm to meet various regulatory requirements and application needs. Receiver sensitivity ranges from -90dBm to -97dBm depending on data rate, enabling long-range communication. Selectivity and blocking performance ensure reliable operation in the presence of interferers. The RF front-end is designed for minimal current consumption while maintaining performance. Harmonic and spurious emissions are controlled to meet international regulatory standards including FCC, CE, and TELEC.',
    decisionGuide: 'Verify RF specifications meet your range and regulatory requirements. Contact FAE for RF design guidance.',
    keywords: ['RF performance', 'transmit power', 'sensitivity', 'regulatory compliance']
  },
  {
    question: 'What Bluetooth features are supported by Will Semiconductor BLE SoCs?',
    answer: 'Will Semiconductor BLE SoCs support Bluetooth Low Energy 5.0 and 5.1 with advanced features including 2x speed (2Mbps PHY), 4x range (125kbps/500kbps coded PHY), and 8x advertising capacity compared to BLE 4.2. The devices support all BLE 5.0 features including extended advertising, periodic advertising with synchronization, and channel selection algorithm #2. Multiple roles are supported including peripheral, central, broadcaster, and observer. Security features include LE Secure Connections with ECDH key exchange and various pairing methods. The integrated protocol stack simplifies application development.',
    decisionGuide: 'BLE 5.0 features enable improved performance over previous versions. Contact FAE for BLE 5.0 migration guidance.',
    keywords: ['BLE 5.0', 'Bluetooth features', 'extended advertising', 'secure connections']
  },
  {
    question: 'What is the power consumption of Will Semiconductor wireless products?',
    answer: 'Will Semiconductor wireless products offer excellent power efficiency with multiple operating modes. Active TX mode typically consumes 5-10mA depending on output power setting. Active RX mode consumes 5-8mA. Sleep modes with RAM retention consume 1-5uA, enabling years of battery life from coin cells. Deep sleep modes offer the lowest power for extended standby periods. Fast wake-up from sleep (typically 10-100us) minimizes latency for responsive applications. For typical beacon applications with 1-second advertising intervals, average current consumption can be as low as 10-20uA.',
    decisionGuide: 'Use sleep modes aggressively to minimize average power. Contact FAE for power optimization analysis.',
    keywords: ['power consumption', 'battery life', 'sleep mode', 'low power']
  },
  {
    question: 'What development tools are available for Will Semiconductor wireless products?',
    answer: 'Will Semiconductor wireless products are supported by comprehensive development tools including evaluation kits with reference designs, software development kits (SDKs) with protocol stacks and sample applications, and integrated development environments (IDEs) for firmware development. The SDK includes APIs for all device functions with example code for common use cases. RF test modes enable transmitter and receiver evaluation without firmware development. Programming tools support flash programming and debugging. Technical documentation includes user guides, API references, and application notes. Community forums and technical support from Will Semiconductor and BeiLuo FAE team are available.',
    decisionGuide: 'Start with the evaluation kit and SDK for rapid prototyping. Contact FAE for development support.',
    keywords: ['development tools', 'SDK', 'evaluation kit', 'IDE', 'debugging']
  }
];

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📁 Processing category: ${category.name}`);
  
  // Fix RF and Connectivity category - note the id is 'rf-connectivity' not 'rf-and-connectivity'
  if (category.id === 'rf-connectivity') {
    console.log(`  📝 Replacing FAQs for ${category.id}`);
    category.faqs = rfFaqs;
    fixCount++;
    console.log(`    ✓ Replaced with extended FAQs (${category.faqs.length} items)`);
  }
  
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
});

// Write back the fixed data
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Fix complete! Total fixes: ${fixCount}`);
console.log(`\n📄 Updated file: ${productsFile}`);
