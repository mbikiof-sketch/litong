/**
 * Fix Renesas fake products - replace with real Renesas part numbers
 * Real Renesas MCU part numbers follow patterns like:
 * - R7FAxxxx (RA family)
 * - R5F5xxxx (RX family)
 * - R5F1xxxx (RL78 family)
 * - ISLxxxxx (Analog/Power)
 * - HIPxxxxx (Motor drivers)
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'renesas', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Real Renesas products to replace fake ones
const realRenesasProducts = {
  'microcontrollers': [
    {
      partNumber: 'R7FA4M2AD3CFM',
      name: 'RA4M2 Arm Cortex-M33 MCU',
      description: '100MHz Arm Cortex-M33 MCU with 512KB Flash, 128KB RAM, TrustZone, and USB for IoT applications.',
      features: ['Arm Cortex-M33 with TrustZone', '100 MHz operation', '512KB code flash', '128KB SRAM', 'USB 2.0 Full-Speed', 'SDHI interface', '12-bit ADC', 'CAN FD'],
      applications: ['IoT devices', 'Industrial control', 'Smart home', 'Building automation'],
      specs: { core: 'Arm Cortex-M33', frequency: '100 MHz', flash: '512KB', ram: '128KB', package: 'LQFP-100' }
    },
    {
      partNumber: 'R7FA6M3AH3CFC',
      name: 'RA6M3 Arm Cortex-M33 MCU',
      description: '120MHz Arm Cortex-M33 MCU with 1MB Flash, 256KB RAM, Ethernet, and advanced security features.',
      features: ['Arm Cortex-M33 with TrustZone', '120 MHz operation', '1MB code flash', '256KB SRAM', 'Ethernet MAC', 'USB High-Speed', 'Graphics LCD controller', 'Advanced security'],
      applications: ['HMI systems', 'IoT gateways', 'Industrial automation', 'Medical devices'],
      specs: { core: 'Arm Cortex-M33', frequency: '120 MHz', flash: '1MB', ram: '256KB', package: 'LQFP-176' }
    },
    {
      partNumber: 'R5F52318ADFM',
      name: 'RX231 High-Performance MCU',
      description: '54MHz RXv2 core MCU with 512KB Flash, 96KB RAM, FPU, and advanced analog for industrial control.',
      features: ['RXv2 core with FPU', '54 MHz operation', '512KB flash', '96KB RAM', '12-bit ADC', '12-bit DAC', 'CAN interface', 'Segment LCD controller'],
      applications: ['Industrial control', 'Sensor systems', 'Smart meters', 'Healthcare devices'],
      specs: { core: 'RXv2', frequency: '54 MHz', flash: '512KB', ram: '96KB', package: 'LQFP-100' }
    },
    {
      partNumber: 'R5F51318ADFM',
      name: 'RX130 Ultra-Low-Power MCU',
      description: '32MHz RXv1 core MCU with 256KB Flash, 64KB RAM, capacitive touch sensing for battery-powered applications.',
      features: ['RXv1 core', '32 MHz operation', '256KB flash', '64KB RAM', 'Capacitive touch', '12-bit ADC', 'Low power modes', 'Segment LCD'],
      applications: ['Battery-powered devices', 'Touch interfaces', 'Portable medical', 'Smart meters'],
      specs: { core: 'RXv1', frequency: '32 MHz', flash: '256KB', ram: '64KB', package: 'LQFP-100' }
    }
  ],
  'analog-power': [
    {
      partNumber: 'ISL80102IRAJZ',
      name: 'ISL80102 Low Noise LDO',
      description: '2A low-noise LDO regulator with high PSRR and enable function for RF and noise-sensitive applications.',
      features: ['2A output current', 'Low noise: 40μVRMS', 'High PSRR: 75dB @ 1kHz', 'Enable function', 'Current limit protection', 'Thermal shutdown', '2.5V to 6V input', 'Adjustable output'],
      applications: ['RF power supplies', 'ADC/DAC reference', 'Camera modules', 'Noise-sensitive circuits'],
      specs: { inputVoltage: '2.5V to 6V', outputCurrent: '2A', noise: '40μVRMS', psrr: '75dB @ 1kHz' }
    },
    {
      partNumber: 'ISL80103IRAJZ',
      name: 'ISL80103 Low Noise LDO',
      description: '3A low-noise LDO regulator with excellent transient response for high-current applications.',
      features: ['3A output current', 'Low noise operation', 'Excellent transient response', 'Enable function', 'Power-good indicator', 'Current limit', 'Thermal protection', 'Adjustable output'],
      applications: ['Processor power', 'FPGA power', 'High-current rails', 'Communication systems'],
      specs: { inputVoltage: '2.5V to 6V', outputCurrent: '3A', dropout: '180mV @ 3A', package: 'DFN-10' }
    },
    {
      partNumber: 'ISL8117FRZ',
      name: 'ISL8117 Synchronous Buck Controller',
      description: 'High-performance synchronous buck controller with wide input range for industrial and computing applications.',
      features: ['Wide input: 4.5V to 60V', '0.6V to 54V output', 'Current mode control', 'Adjustable frequency', 'External compensation', 'Pre-bias start-up', 'Power-good output', 'Overcurrent protection'],
      applications: ['Industrial power', 'Telecom systems', 'Computing', 'Battery chargers'],
      specs: { inputVoltage: '4.5V to 60V', outputVoltage: '0.6V to 54V', frequency: '100kHz to 2MHz', package: 'QFN-16' }
    },
    {
      partNumber: 'ISL28133FEZ',
      name: 'ISL28133 Precision Op-Amp',
      description: 'Ultra-low offset, low noise precision operational amplifier for sensor signal conditioning.',
      features: ['Ultra-low offset: 5μV max', 'Low noise: 25nV/√Hz', 'Low bias current: 100pA', 'Rail-to-rail input/output', 'Wide supply: 2.25V to 5.5V', 'High open-loop gain', 'Unity gain stable', 'Low power: 390μA'],
      applications: ['Sensor amplification', 'Precision filtering', 'Data acquisition', 'Medical instruments'],
      specs: { offsetVoltage: '5μV max', noise: '25nV/√Hz', bandwidth: '2.5MHz', supplyVoltage: '2.25V to 5.5V' }
    }
  ],
  'motor-drivers': [
    {
      partNumber: 'HIP2100IBZ',
      name: 'HIP2100 Half-Bridge Driver',
      description: 'High-frequency half-bridge MOSFET driver with independent high and low side outputs for motor control.',
      features: ['Independent H/L drives', 'Bootstrap operation up to 100V', '1.5A peak output current', '50ns propagation delay', '3.3V and 5V logic compatible', 'Shoot-through protection', 'Undervoltage lockout', 'Small package'],
      applications: ['DC motor drives', 'Brushless DC motors', 'Switched-mode power supplies', 'Class D amplifiers'],
      specs: { maxVoltage: '100V', peakCurrent: '1.5A', propagationDelay: '50ns', package: 'SOIC-8' }
    },
    {
      partNumber: 'HIP2103FBZ',
      name: 'HIP2103 Half-Bridge Driver',
      description: 'Compact half-bridge driver with integrated bootstrap diode for space-constrained designs.',
      features: ['Integrated bootstrap diode', '50V max operation', '1A peak output', 'TTL/CMOS compatible', 'Shoot-through protection', 'Low quiescent current', 'Thermal shutdown', 'Small footprint'],
      applications: ['Small motor drives', 'Battery-powered tools', 'Consumer electronics', 'Portable devices'],
      specs: { maxVoltage: '50V', peakCurrent: '1A', operatingTemp: '-40°C to +125°C', package: 'DFN-8' }
    },
    {
      partNumber: 'HIP4086ABZ',
      name: 'HIP4086 Three-Phase MOSFET Driver',
      description: 'High-power three-phase MOSFET driver for brushless DC motor control applications.',
      features: ['Three-phase outputs', 'Bootstrap operation to 80V', '2.5A peak drive current', 'Adjustable dead time', 'Cross-conduction prevention', 'Overcurrent protection', 'Fault reporting', 'Wide temperature range'],
      applications: ['BLDC motor drives', 'Three-phase inverters', 'Fan control', 'Pump controllers'],
      specs: { maxVoltage: '80V', peakCurrent: '2.5A', deadTime: 'Adjustable', package: 'SOIC-20' }
    },
    {
      partNumber: 'ISL8127IRZ',
      name: 'ISL8127 Digital PWM Controller',
      description: 'Dual-channel digital PWM controller with PMBus interface for complex power systems.',
      features: ['Dual independent outputs', 'PMBus interface', 'Digital compensation', 'Adaptive voltage positioning', 'Current sharing', 'Fault logging', 'Real-time monitoring', 'Wide input range'],
      applications: ['Server power', 'Telecom power', 'Storage systems', 'High-current rails'],
      specs: { inputVoltage: '3V to 20V', outputVoltage: '0.5V to 5V', frequency: '200kHz to 1.5MHz', package: 'QFN-32' }
    }
  ],
  'led-drivers': [
    {
      partNumber: 'ISL97634IRZ',
      name: 'ISL97634 LED Driver',
      description: 'High-efficiency 6-channel LED driver with wide dimming range for LCD backlight applications.',
      features: ['6 LED channels', 'Wide dimming range: 1:5000', 'I2C interface', 'Fault detection', 'Overvoltage protection', 'Thermal shutdown', 'Adjustable current', 'High efficiency'],
      applications: ['LCD TV backlight', 'Monitor backlight', 'LED displays', 'Signage lighting'],
      specs: { inputVoltage: '4.5V to 28V', channels: '6', current: '150mA per channel', efficiency: '95%' }
    },
    {
      partNumber: 'ISL97650IRZ',
      name: 'ISL97650 Boost LED Driver',
      description: 'High-voltage boost LED driver with integrated MOSFET for high-power LED strings.',
      features: ['Integrated 60V MOSFET', 'Wide input range: 4.5V to 38V', 'Up to 60V output', 'PWM dimming', 'Analog dimming', 'LED open/short protection', 'Overcurrent protection', 'Thermal shutdown'],
      applications: ['High-power LED', 'Automotive lighting', 'General lighting', 'Flashlight drivers'],
      specs: { inputVoltage: '4.5V to 38V', maxOutput: '60V', switchCurrent: '3.5A', frequency: '1MHz' }
    },
    {
      partNumber: 'ISL78171ARZ',
      name: 'ISL78171 Automotive LED Driver',
      description: 'AEC-Q100 qualified 4-channel LED driver for automotive interior and exterior lighting.',
      features: ['AEC-Q100 qualified', '4 independent channels', '150mA per channel', 'I2C control', 'Fault diagnostics', 'LED open/short detection', 'Thermal management', 'Wide temperature range'],
      applications: ['Automotive interior lighting', 'Dashboard backlight', 'Exterior lighting', 'Center console'],
      specs: { qualification: 'AEC-Q100', channels: '4', current: '150mA per channel', temperature: '-40°C to +125°C' }
    },
    {
      partNumber: 'ISL97645IRZ',
      name: 'ISL97645 Dual LED Driver',
      description: 'Dual-channel synchronous boost LED driver for medium-power applications.',
      features: ['Dual independent channels', 'Synchronous rectification', 'I2C interface', 'Fault protection', 'Adjustable current', 'PWM dimming', 'High efficiency', 'Small package'],
      applications: ['Tablet backlight', 'Notebook backlight', 'Portable devices', 'Small displays'],
      specs: { inputVoltage: '2.7V to 24V', channels: '2', current: '200mA per channel', efficiency: '93%' }
    }
  ]
};

// Replace fake products with real ones
data.categories.forEach(category => {
  const catId = category.id;
  if (realRenesasProducts[catId]) {
    const realProducts = realRenesasProducts[catId];
    
    // Find and replace fake products (those with REN- prefix)
    category.products = category.products.map((prod, index) => {
      if (prod.partNumber && prod.partNumber.startsWith('REN-')) {
        // Replace with real product if available
        const realProdIndex = index % realProducts.length;
        const realProd = realProducts[realProdIndex];
        
        return {
          ...prod,
          partNumber: realProd.partNumber,
          mpn: realProd.partNumber,
          name: realProd.name,
          shortDescription: realProd.description,
          description: realProd.description,
          descriptionParagraphs: [
            realProd.description,
            `The ${realProd.partNumber} features ${realProd.features.slice(0, 3).join(', ')} for reliable operation.`,
            `Ideal for ${realProd.applications.slice(0, 2).join(' and ')} applications.`
          ],
          features: realProd.features,
          applications: realProd.applications,
          specifications: realProd.specs,
          // Keep other fields like faeReview, alternativeParts, companionParts, faqs
        };
      }
      return prod;
    });
  }
});

fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log('✅ Renesas fake products replaced with real part numbers!');

// Verify
let fakeCount = 0;
data.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.partNumber && prod.partNumber.startsWith('REN-')) {
      fakeCount++;
      console.log(`  ❌ Still fake: ${prod.partNumber}`);
    }
  });
});

if (fakeCount === 0) {
  console.log('\n✅ All fake products have been replaced!');
} else {
  console.log(`\n⚠️  ${fakeCount} fake products remain`);
}
