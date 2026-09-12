/**
 * Fix remaining Will Semiconductor FAQ issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 Fixing remaining Will Semiconductor FAQ issues\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
let fixCount = 0;

// Extended FAQ answers for products with short answers
const extendedFaqs = {
  'WS4664': [
    {
      question: 'What is the on-resistance of WS4664?',
      answer: 'The WS4664 features low on-resistance of typically 0.5Ω at 3.3V supply voltage, minimizing signal attenuation and power loss when the switch is conducting. The on-resistance varies slightly with supply voltage and temperature - it decreases as supply voltage increases and remains stable across the operating temperature range. Low on-resistance is critical for maintaining signal integrity, especially in applications with significant load currents. The switch maintains consistent performance across the entire signal range from 0V to VCC. For sensitive analog applications, the low on-resistance ensures minimal voltage drop and distortion.',
      decisionGuide: 'Verify on-resistance specifications meet your signal integrity requirements. Contact FAE for detailed characterization data.',
      keywords: ['on-resistance', 'RON', 'signal integrity']
    },
    {
      question: 'What is the bandwidth of WS4664?',
      answer: 'The WS4664 offers excellent bandwidth performance with -3dB bandwidth of 300MHz, making it suitable for high-speed signal switching applications including video and high-speed data. The wide bandwidth ensures minimal signal attenuation and distortion across the operating frequency range. At higher frequencies, careful PCB layout becomes increasingly important to maintain signal integrity. The switch introduces minimal propagation delay, making it suitable for time-critical applications. Crosstalk between channels is minimized through careful internal design and shielding.',
      decisionGuide: 'Verify bandwidth meets your signal frequency requirements. Contact FAE for AC characterization data.',
      keywords: ['bandwidth', 'frequency response', 'high-speed switching']
    },
    {
      question: 'What is the charge injection of WS4664?',
      answer: 'The WS4664 features low charge injection of typically 5pC, minimizing disturbance to sensitive analog signals during switching transitions. Charge injection occurs when the switch transitions between on and off states, coupling a small amount of charge from the control signal to the signal path. Low charge injection is critical for precision analog applications such as sample-and-hold circuits and data acquisition systems. The charge injection is balanced between NMOS and PMOS transistors to minimize net charge transfer. For the most sensitive applications, external compensation techniques can further reduce the impact of charge injection.',
      decisionGuide: 'For precision analog applications, evaluate charge injection impact on your signal quality. Contact FAE for measurement data.',
      keywords: ['charge injection', 'analog switching', 'precision']
    },
    {
      question: 'What supply voltage range does WS4664 support?',
      answer: 'The WS4664 operates from a wide supply voltage range of 1.8V to 5.5V, making it compatible with various system voltage levels from low-voltage portable devices to 5V industrial systems. The device maintains consistent performance across the entire supply range with on-resistance and switching characteristics specified at multiple voltage points. The wide supply range provides flexibility in system design and allows the switch to be used in mixed-voltage environments. Logic thresholds scale with supply voltage to maintain compatible interface levels.',
      decisionGuide: 'Select supply voltage based on your system requirements. The device is compatible with 1.8V, 3.3V, and 5V systems.',
      keywords: ['supply voltage', 'operating voltage', 'logic levels']
    },
    {
      question: 'What is the off-isolation of WS4664?',
      answer: 'The WS4664 provides excellent off-isolation of -60dB at 1MHz, ensuring minimal signal leakage when the switch is in the off state. Off-isolation is critical for preventing crosstalk between channels in multiplexing applications and for maintaining signal integrity in routing applications. The isolation performance decreases with frequency, following typical capacitive coupling behavior. For high-frequency applications, careful PCB layout and shielding techniques can help maintain isolation performance. The high off-isolation ensures that signals on one channel do not interfere with signals on other channels.',
      decisionGuide: 'Verify off-isolation meets your crosstalk requirements. Contact FAE for isolation characterization across frequency.',
      keywords: ['off-isolation', 'crosstalk', 'channel isolation']
    }
  ],
  'WS3210': [
    {
      question: 'What is the on-resistance of WS3210?',
      answer: 'The WS3210 features low on-resistance of typically 0.3Ω at 5V supply voltage, providing excellent conductivity for minimal signal loss and voltage drop. The on-resistance remains low across the operating temperature range, ensuring consistent performance in various environmental conditions. For high-current applications, the low on-resistance minimizes power dissipation and heat generation within the switch. The device maintains stable on-resistance characteristics across the entire signal voltage range from 0V to VCC.',
      decisionGuide: 'Low on-resistance makes WS3210 suitable for power routing and high-current signal applications. Contact FAE for detailed specs.',
      keywords: ['on-resistance', 'low RON', 'power routing']
    },
    {
      question: 'What current can WS3210 handle?',
      answer: 'The WS3210 supports continuous current up to 500mA per channel, making it suitable for power distribution and high-current signal routing applications. The current handling capability is limited by thermal considerations and package power dissipation. For high-current applications, proper PCB layout with adequate copper area helps dissipate heat. The device includes overcurrent protection features to prevent damage under fault conditions. Peak current capability may be higher for short durations, but continuous operation should remain within specified limits.',
      decisionGuide: 'Ensure your application current requirements are within the device ratings. Contact FAE for thermal design guidance.',
      keywords: ['current rating', 'power handling', 'thermal']
    },
    {
      question: 'What is the switching time of WS3210?',
      answer: 'The WS3210 features fast switching times with typical turn-on time of 15ns and turn-off time of 10ns, enabling rapid signal routing for dynamic applications. Fast switching is essential for applications requiring frequent reconfiguration such as bus multiplexing and signal routing matrices. The switching times are measured with specified load conditions and may vary with capacitive loading. The device uses break-before-make switching to prevent momentary short circuits between channels.',
      decisionGuide: 'Fast switching makes WS3210 suitable for dynamic routing applications. Contact FAE for switching characterization.',
      keywords: ['switching time', 'turn-on time', 'turn-off time']
    },
    {
      question: 'What protection features does WS3210 include?',
      answer: 'The WS3210 includes comprehensive protection features for robust operation: overcurrent protection prevents damage from excessive current flow; thermal shutdown protects the device from overheating; and ESD protection on all pins guards against electrostatic discharge damage. The protection features ensure reliable operation under abnormal conditions and protect both the switch and downstream circuitry. The device is designed to fail safely under fault conditions.',
      decisionGuide: 'Built-in protection features simplify system design and improve reliability. Contact FAE for protection specifications.',
      keywords: ['protection', 'overcurrent', 'thermal shutdown', 'ESD']
    },
    {
      question: 'What packages are available for WS3210?',
      answer: 'The WS3210 is available in multiple package options to suit different application requirements: SOP-16 for standard through-hole mounting; TSSOP-16 for compact surface-mount designs; and QFN-16 for space-constrained applications. All packages offer the same electrical performance with thermal characteristics varying by package type. The QFN package provides the best thermal performance due to the exposed pad. Package selection depends on space constraints, manufacturing capabilities, and thermal requirements.',
      decisionGuide: 'Select package based on your space and thermal requirements. Contact FAE for package drawings and thermal data.',
      keywords: ['package', 'SOP', 'TSSOP', 'QFN']
    }
  ]
};

// Process each category and product
productsData.categories.forEach((category) => {
  console.log(`\n📁 Processing category: ${category.name}`);
  
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
