/**
 * Fix Will Semiconductor Category-level FAQs
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 Fixing Will Semiconductor Category-level FAQs\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
let fixCount = 0;

// Extended category-level FAQs
const categoryFaqs = {
  'power-management-ics': [
    {
      question: 'What types of power management ICs does Will Semiconductor offer?',
      answer: 'Will Semiconductor offers a comprehensive portfolio of power management ICs including low-dropout regulators (LDOs), DC-DC converters, power switches, and battery management solutions. The LDO portfolio covers ultra-low noise devices for sensitive analog circuits, high-current LDOs for digital loads, and wide-input-range LDOs for industrial applications. DC-DC converters include buck, boost, and buck-boost topologies with various current ratings and switching frequencies. Power switches provide load switching and power path management with low on-resistance and protection features. Battery management solutions include charging ICs and fuel gauges for lithium-ion batteries. All products feature high efficiency, small packages, and comprehensive protection features.',
      decisionGuide: 'Select power management ICs based on your input/output voltage requirements, current needs, and efficiency targets. Contact FAE for power architecture recommendations.',
      keywords: ['power management', 'LDO', 'DC-DC converter', 'battery management']
    },
    {
      question: 'What is the efficiency of Will Semiconductor DC-DC converters?',
      answer: 'Will Semiconductor DC-DC converters achieve high efficiency through optimized circuit design and advanced process technology. Peak efficiency typically reaches 90-95% at moderate to heavy loads (50-80% of rated current). Light-load efficiency is maintained through automatic mode switching to minimize quiescent current consumption. The efficiency curve is characterized across the full operating range and provided in the datasheet. For battery-powered applications, high efficiency directly translates to extended battery life. Thermal performance is optimized to minimize power dissipation at full load. Contact our FAE team for efficiency data under your specific operating conditions.',
      decisionGuide: 'Review the efficiency curves in the datasheet for your operating conditions. Contact FAE for thermal analysis.',
      keywords: ['efficiency', 'power dissipation', 'battery life', 'DC-DC']
    },
    {
      question: 'What protection features do Will Semiconductor power ICs include?',
      answer: 'Will Semiconductor power management ICs incorporate comprehensive protection features for robust operation: overcurrent protection (OCP) limits output current during short-circuit conditions; thermal shutdown (TSD) protects the device from excessive temperature; undervoltage lockout (UVLO) prevents operation with insufficient input voltage; and soft-start functionality limits inrush current during power-up. Some variants include additional features like power-good indication and programmable current limit. These protection features ensure reliable operation under abnormal conditions and protect both the IC and the downstream circuitry from damage.',
      decisionGuide: 'Review the protection specifications in the datasheet. All variants include basic protection features suitable for most applications.',
      keywords: ['protection', 'OCP', 'thermal shutdown', 'UVLO', 'soft-start']
    },
    {
      question: 'How do I select external components for Will Semiconductor power ICs?',
      answer: 'External component selection for Will Semiconductor power ICs depends on the specific application requirements. For input capacitors, use ceramic capacitors (10uF or greater) placed close to the input pins to handle transient currents. Output capacitors affect stability and transient response - typically 10uF ceramic with low ESR is recommended. For DC-DC converters, inductor selection involves balancing size, cost, and performance - typically 2.2uH to 10uH depending on switching frequency. All capacitors should be X5R or X7R ceramic types for stability across temperature. Reference designs with recommended component values are available from our FAE team for common applications.',
      decisionGuide: 'Use the recommended values from the datasheet or reference design. Contact FAE for component selection guidance.',
      keywords: ['external components', 'capacitor selection', 'inductor', 'stability']
    },
    {
      question: 'What packages are available for Will Semiconductor power management ICs?',
      answer: 'Will Semiconductor power management ICs are available in a wide range of packages to suit different application requirements. Small packages like SOT-23, DFN, and WLCSP are ideal for space-constrained portable devices. Standard packages like SOP-8, TSSOP, and QFN provide good thermal performance for higher power applications. Some devices are available in multiple package options to provide flexibility in design and manufacturing. All packages are RoHS compliant and suitable for lead-free soldering processes. Package drawings, thermal characteristics, and soldering profiles are available in the datasheets.',
      decisionGuide: 'Select package based on space constraints and thermal requirements. Contact FAE for package recommendations.',
      keywords: ['package', 'SOT-23', 'DFN', 'WLCSP', 'thermal performance']
    }
  ],
  'signal-chain-products': [
    {
      question: 'What types of signal chain products does Will Semiconductor offer?',
      answer: 'Will Semiconductor offers a comprehensive range of signal chain products including analog switches, multiplexers, level shifters, and interface ICs. Analog switches provide signal routing with low on-resistance and wide bandwidth for audio, video, and data applications. Multiplexers enable multiple signal sources to share a common bus or ADC input. Level shifters translate signals between different voltage domains for mixed-voltage systems. Interface ICs include RS-232, RS-485, and CAN transceivers for industrial communication. All products feature low power consumption, wide operating voltage ranges, and robust ESD protection.',
      decisionGuide: 'Select signal chain products based on your signal type, voltage levels, and bandwidth requirements. Contact FAE for signal integrity guidance.',
      keywords: ['signal chain', 'analog switch', 'multiplexer', 'level shifter', 'interface']
    },
    {
      question: 'What is the bandwidth of Will Semiconductor analog switches?',
      answer: 'Will Semiconductor analog switches offer excellent bandwidth performance ranging from 100MHz to over 500MHz depending on the specific device. The wide bandwidth ensures minimal signal attenuation and distortion across the operating frequency range. Bandwidth is specified as -3dB frequency with typical load conditions. For high-frequency applications, careful PCB layout with controlled impedance traces is essential to maintain signal integrity. The switches introduce minimal propagation delay, making them suitable for time-critical applications. Crosstalk between channels is minimized through careful internal design.',
      decisionGuide: 'Verify bandwidth specifications meet your signal frequency requirements. Contact FAE for AC characterization data.',
      keywords: ['bandwidth', 'frequency response', 'signal integrity', 'propagation delay']
    },
    {
      question: 'What is the on-resistance of Will Semiconductor analog switches?',
      answer: 'Will Semiconductor analog switches feature low on-resistance ranging from 0.3Ω to 10Ω depending on the device and supply voltage. Lower on-resistance minimizes signal attenuation and voltage drop when the switch is conducting. The on-resistance varies with supply voltage and temperature - it typically decreases as supply voltage increases. Low on-resistance is critical for maintaining signal integrity, especially in applications with significant load currents or sensitive analog signals. The switches maintain consistent on-resistance across the entire signal range.',
      decisionGuide: 'Select switches with on-resistance appropriate for your signal current and voltage drop requirements.',
      keywords: ['on-resistance', 'RON', 'signal attenuation', 'voltage drop']
    },
    {
      question: 'What voltage levels do Will Semiconductor level shifters support?',
      answer: 'Will Semiconductor level shifters support a wide range of voltage levels to enable communication between devices with different supply voltages. Typical configurations include 1.2V to 5.5V translation, covering all common logic levels from 1.2V to 5V. The devices can translate in either direction (A-to-B or B-to-A) and support both push-pull and open-drain outputs. Some devices feature automatic direction sensing, eliminating the need for a direction control signal. The level shifters maintain signal integrity across voltage domains with minimal propagation delay.',
      decisionGuide: 'Select level shifters based on your specific voltage translation requirements. Contact FAE for multi-voltage system design.',
      keywords: ['level shifter', 'voltage translation', 'logic levels', 'auto-direction']
    },
    {
      question: 'What protection features do Will Semiconductor signal chain products include?',
      answer: 'Will Semiconductor signal chain products include comprehensive protection features for robust operation. ESD protection on all pins guards against electrostatic discharge damage up to specified levels (typically 2kV HBM or higher). Overvoltage protection prevents damage from signal excursions beyond supply rails. Latch-up immunity ensures reliable operation in harsh environments. The protection features are designed to meet or exceed industry standards for reliability. These features ensure reliable operation under abnormal conditions and protect both the IC and the system from damage.',
      decisionGuide: 'All signal chain products include standard protection features. Contact FAE for high-reliability application guidance.',
      keywords: ['protection', 'ESD', 'overvoltage', 'latch-up immunity']
    }
  ],
  'rf-and-connectivity': [
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
  ]
};

// Process each category
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
  
  // Replace category FAQs with extended versions
  if (categoryFaqs[category.id]) {
    console.log(`  📝 Replacing FAQs for ${category.id}`);
    category.faqs = categoryFaqs[category.id];
    fixCount++;
    console.log(`    ✓ Replaced with extended FAQs (${category.faqs.length} items)`);
  }
});

// Write back the fixed data
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Fix complete! Total fixes: ${fixCount}`);
console.log(`\n📄 Updated file: ${productsFile}`);
