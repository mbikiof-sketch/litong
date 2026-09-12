/**
 * Fix PrideSilicon alternativeParts - replace placeholders with real products
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'pridesilicon', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Define real alternative parts for each product
const alternativePartsMap = {
  // Data Converters
  'PSA1604': [
    { partNumber: 'PSA1204', brand: 'PrideSilicon', specifications: { resolution: '12 bit', samplingRate: '4 MSPS' }, comparison: 'Lower resolution but higher speed', reason: 'For higher speed applications', useCase: 'High-speed data acquisition' },
    { partNumber: 'PSA1208', brand: 'PrideSilicon', specifications: { resolution: '12 bit', samplingRate: '1 MSPS' }, comparison: 'Lower resolution, similar speed', reason: 'Cost-effective alternative', useCase: 'General-purpose data acquisition' }
  ],
  'PSS2416': [
    { partNumber: 'PSS1620', brand: 'PrideSilicon', specifications: { resolution: '16 bit', dataRate: '20 kSPS' }, comparison: 'Lower resolution but faster', reason: 'For faster precision measurement', useCase: 'Industrial sensor interfaces' },
    { partNumber: 'PSA1604', brand: 'PrideSilicon', specifications: { resolution: '16 bit', samplingRate: '1 MSPS' }, comparison: 'SAR architecture vs sigma-delta', reason: 'For high-speed applications', useCase: 'Fast data acquisition systems' }
  ],
  'PSA1204': [
    { partNumber: 'PSA1604', brand: 'PrideSilicon', specifications: { resolution: '16 bit', samplingRate: '1 MSPS' }, comparison: 'Higher resolution', reason: 'For higher precision needs', useCase: 'Precision measurement systems' },
    { partNumber: 'PSA1208', brand: 'PrideSilicon', specifications: { resolution: '12 bit', samplingRate: '1 MSPS' }, comparison: 'Lower speed', reason: 'Cost savings for slower apps', useCase: 'General data logging' }
  ],
  'PSA1208': [
    { partNumber: 'PSA1204', brand: 'PrideSilicon', specifications: { resolution: '12 bit', samplingRate: '4 MSPS' }, comparison: 'Higher speed', reason: 'For faster acquisition', useCase: 'High-speed signal capture' },
    { partNumber: 'PSA1604', brand: 'PrideSilicon', specifications: { resolution: '16 bit', samplingRate: '1 MSPS' }, comparison: 'Higher resolution', reason: 'For precision applications', useCase: 'Precision instrumentation' }
  ],
  'PSD1612': [
    { partNumber: 'PSA1604', brand: 'PrideSilicon', specifications: { resolution: '16 bit', samplingRate: '1 MSPS' }, comparison: 'SAR vs DAC architecture', reason: 'For ADC applications', useCase: 'Data acquisition systems' },
    { partNumber: 'PSS2416', brand: 'PrideSilicon', specifications: { resolution: '24 bit' }, comparison: 'Higher resolution ADC', reason: 'For ultra-precision measurement', useCase: 'Precision sensor interfaces' }
  ],
  'PSS1620': [
    { partNumber: 'PSS2416', brand: 'PrideSilicon', specifications: { resolution: '24 bit' }, comparison: 'Higher resolution', reason: 'For higher precision needs', useCase: 'High-precision measurement' },
    { partNumber: 'PSA1604', brand: 'PrideSilicon', specifications: { resolution: '16 bit', samplingRate: '1 MSPS' }, comparison: 'Faster SAR architecture', reason: 'For speed over resolution', useCase: 'Fast control systems' }
  ],
  
  // Power Management
  'PSP3406': [
    { partNumber: 'PSP2405', brand: 'PrideSilicon', specifications: { current: '2.4A', inputVoltage: '4.5V-28V' }, comparison: 'Lower current, wider input', reason: 'For lower current needs', useCase: 'Medium power industrial' },
    { partNumber: 'PSP1203', brand: 'PrideSilicon', specifications: { current: '3A', inputVoltage: '4.5V-17V' }, comparison: 'Higher current, lower voltage', reason: 'For higher current at lower voltage', useCase: 'High current applications' }
  ],
  'PSLDO50': [
    { partNumber: 'PSLDO33L', brand: 'PrideSilicon', specifications: { voltage: '3.3V', current: '300mA' }, comparison: 'Lower noise, fixed 3.3V', reason: 'For sensitive analog circuits', useCase: 'Precision analog power' },
    { partNumber: 'PSLDO18', brand: 'PrideSilicon', specifications: { voltage: '1.8V', current: '300mA' }, comparison: 'Lower output voltage', reason: 'For 1.8V digital systems', useCase: 'Low voltage digital power' }
  ],
  'PSP1203': [
    { partNumber: 'PSP3406', brand: 'PrideSilicon', specifications: { current: '3A', inputVoltage: '4.5V-17V' }, comparison: 'Similar specs', reason: 'Alternative sourcing', useCase: 'General buck converter apps' },
    { partNumber: 'PSP2405', brand: 'PrideSilicon', specifications: { current: '2.4A', inputVoltage: '4.5V-28V' }, comparison: 'Lower current, wider range', reason: 'For wider input range', useCase: 'Industrial power systems' }
  ],
  'PSLDO18': [
    { partNumber: 'PSLDO50', brand: 'PrideSilicon', specifications: { voltage: '5V', current: '500mA' }, comparison: 'Higher voltage and current', reason: 'For 5V systems', useCase: '5V analog/digital power' },
    { partNumber: 'PSLDO33L', brand: 'PrideSilicon', specifications: { voltage: '3.3V', current: '300mA' }, comparison: '3.3V output', reason: 'For 3.3V systems', useCase: '3.3V microcontroller power' }
  ],
  'PSP2405': [
    { partNumber: 'PSP3406', brand: 'PrideSilicon', specifications: { current: '3A', inputVoltage: '4.5V-17V' }, comparison: 'Higher current', reason: 'For higher current needs', useCase: 'High current industrial' },
    { partNumber: 'PSP1203', brand: 'PrideSilicon', specifications: { current: '3A', inputVoltage: '4.5V-17V' }, comparison: 'Similar current, lower voltage', reason: 'For lower voltage systems', useCase: 'Low voltage high current' }
  ],
  'PSLDO33L': [
    { partNumber: 'PSLDO50', brand: 'PrideSilicon', specifications: { voltage: '5V', current: '500mA' }, comparison: 'Higher voltage and current', reason: 'For 5V systems', useCase: '5V analog power' },
    { partNumber: 'PSLDO18', brand: 'PrideSilicon', specifications: { voltage: '1.8V', current: '300mA' }, comparison: 'Lower voltage', reason: 'For 1.8V digital systems', useCase: 'Low voltage digital power' }
  ],
  
  // Motor Drivers
  'PSD8826': [
    { partNumber: 'PSD8836', brand: 'PrideSilicon', specifications: { voltage: '36V', current: '3A' }, comparison: 'Higher voltage and current', reason: 'For larger motors', useCase: 'High voltage stepper motors' },
    { partNumber: 'PSB8060', brand: 'PrideSilicon', specifications: { voltage: '60V', current: '6A' }, comparison: 'Higher voltage BLDC driver', reason: 'For BLDC applications', useCase: 'Brushless DC motor control' }
  ],
  'PSB8060': [
    { partNumber: 'PSB8040', brand: 'PrideSilicon', specifications: { voltage: '40V', current: '5A' }, comparison: 'Lower voltage', reason: 'For lower voltage BLDC', useCase: 'Medium voltage BLDC motors' },
    { partNumber: 'PSD8836', brand: 'PrideSilicon', specifications: { voltage: '36V', current: '3A' }, comparison: 'Stepper vs BLDC', reason: 'For stepper motor applications', useCase: 'Stepper motor control' }
  ],
  'PSD6204': [
    { partNumber: 'PSD8826', brand: 'PrideSilicon', specifications: { voltage: '35V', current: '2.6A' }, comparison: 'Higher voltage stepper', reason: 'For higher voltage steppers', useCase: 'High voltage stepper control' },
    { partNumber: 'PSB4010', brand: 'PrideSilicon', specifications: { voltage: '40V', current: '10A' }, comparison: 'Higher current BLDC', reason: 'For high current BLDC', useCase: 'High current motor control' }
  ],
  'PSB4010': [
    { partNumber: 'PSB8060', brand: 'PrideSilicon', specifications: { voltage: '60V', current: '6A' }, comparison: 'Higher voltage', reason: 'For higher voltage motors', useCase: 'High voltage BLDC control' },
    { partNumber: 'PSB8040', brand: 'PrideSilicon', specifications: { voltage: '40V', current: '5A' }, comparison: 'Lower current', reason: 'For medium current motors', useCase: 'Medium power BLDC control' }
  ],
  'PSD8836': [
    { partNumber: 'PSD8826', brand: 'PrideSilicon', specifications: { voltage: '35V', current: '2.6A' }, comparison: 'Lower voltage and current', reason: 'For smaller stepper motors', useCase: 'Small stepper motor control' },
    { partNumber: 'PSB8040', brand: 'PrideSilicon', specifications: { voltage: '40V', current: '5A' }, comparison: 'BLDC vs stepper', reason: 'For BLDC applications', useCase: 'Brushless DC motor control' }
  ],
  'PSB8040': [
    { partNumber: 'PSB8060', brand: 'PrideSilicon', specifications: { voltage: '60V', current: '6A' }, comparison: 'Higher voltage and current', reason: 'For larger BLDC motors', useCase: 'High power BLDC control' },
    { partNumber: 'PSB4010', brand: 'PrideSilicon', specifications: { voltage: '40V', current: '10A' }, comparison: 'Higher current', reason: 'For high current applications', useCase: 'High current motor control' }
  ],
  
  // Sensor Interfaces
  'PSA2001': [
    { partNumber: 'PSA2002', brand: 'PrideSilicon', specifications: { type: 'Precision op-amp' }, comparison: 'Lower noise', reason: 'For lower noise applications', useCase: 'Ultra-low noise amplification' },
    { partNumber: 'PSA2003', brand: 'PrideSilicon', specifications: { type: 'Zero-drift op-amp' }, comparison: 'Zero drift architecture', reason: 'For precision DC applications', useCase: 'Precision DC measurement' }
  ],
  'PSA2002': [
    { partNumber: 'PSA2001', brand: 'PrideSilicon', specifications: { type: 'Precision op-amp' }, comparison: 'General precision', reason: 'For general precision apps', useCase: 'General analog conditioning' },
    { partNumber: 'PSA2003', brand: 'PrideSilicon', specifications: { type: 'Zero-drift op-amp' }, comparison: 'Zero drift', reason: 'For ultra-precision DC', useCase: 'High precision DC systems' }
  ],
  'PSA3001': [
    { partNumber: 'PSI8200', brand: 'PrideSilicon', specifications: { type: 'Instrumentation amp' }, comparison: 'Higher bandwidth', reason: 'For faster signals', useCase: 'High speed sensor interfaces' },
    { partNumber: 'PSI8400', brand: 'PrideSilicon', specifications: { type: '24-bit INA with ADC' }, comparison: 'Integrated ADC', reason: 'For digital output', useCase: 'Digital sensor systems' }
  ],
  'PSI8200': [
    { partNumber: 'PSA3001', brand: 'PrideSilicon', specifications: { type: 'High-speed op-amp' }, comparison: 'Op-amp vs INA', reason: 'For simpler amplification', useCase: 'Basic analog conditioning' },
    { partNumber: 'PSI8400', brand: 'PrideSilicon', specifications: { type: '24-bit INA with ADC' }, comparison: 'With integrated ADC', reason: 'For digital systems', useCase: 'Digital instrumentation' }
  ],
  'PSA2003': [
    { partNumber: 'PSA2001', brand: 'PrideSilicon', specifications: { type: 'Precision op-amp' }, comparison: 'Standard precision', reason: 'For general applications', useCase: 'General analog circuits' },
    { partNumber: 'PSA2002', brand: 'PrideSilicon', specifications: { type: 'Low-noise op-amp' }, comparison: 'Lower noise', reason: 'For noise-critical apps', useCase: 'Low noise amplification' }
  ],
  'PSI8400': [
    { partNumber: 'PSI8200', brand: 'PrideSilicon', specifications: { type: 'Instrumentation amp' }, comparison: 'Analog output', reason: 'For analog systems', useCase: 'Analog sensor interfaces' },
    { partNumber: 'PSS2416', brand: 'PrideSilicon', specifications: { type: '24-bit ADC' }, comparison: 'ADC only', reason: 'For flexible front-end', useCase: 'Custom sensor conditioning' }
  ]
};

let fixedCount = 0;

// Fix alternativeParts for each product
data.categories.forEach(category => {
  category.products.forEach(prod => {
    const realAlternatives = alternativePartsMap[prod.partNumber];
    
    if (realAlternatives) {
      // Check if current alternativeParts are placeholders
      const hasPlaceholder = prod.alternativeParts.some(alt => 
        alt.partNumber === 'ALT-OPTION' || 
        alt.reason === 'Alternative option for different requirements'
      );
      
      if (hasPlaceholder) {
        prod.alternativeParts = realAlternatives.map(alt => ({
          ...alt,
          link: '#'
        }));
        fixedCount++;
        console.log(`Fixed ${prod.partNumber} alternativeParts`);
      }
    }
  });
});

// Save updated file
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log(`\n✅ Fixed ${fixedCount} products with real alternativeParts`);

// Verify
console.log(`\n📊 Verification:`);
data.categories.forEach(cat => {
  let fixedProducts = 0;
  cat.products.forEach(prod => {
    const hasRealAlternatives = prod.alternativeParts.every(alt => 
      alt.partNumber !== 'ALT-OPTION' && 
      alt.reason !== 'Alternative option for different requirements'
    );
    if (hasRealAlternatives) fixedProducts++;
  });
  console.log(`  ${cat.name}: ${fixedProducts}/${cat.products.length} products with real alternatives`);
});
