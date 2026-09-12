/**
 * Fix 3peak alternativeParts - replace placeholders with real products
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', '3peak', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Define real alternative parts for each product
const alternativePartsMap = {
  // Operational Amplifiers
  'TP1561': [
    { partNumber: 'TP1562', brand: '3peak', specifications: { channels: 'Dual', offset: '50μV' }, comparison: 'Dual channel version', reason: 'For dual channel applications', useCase: 'Multi-channel designs' },
    { partNumber: 'TP1564', brand: '3peak', specifications: { channels: 'Quad', offset: '50μV' }, comparison: 'Quad channel version', reason: 'For quad channel needs', useCase: 'High channel count designs' }
  ],
  'TP1562': [
    { partNumber: 'TP1561', brand: '3peak', specifications: { channels: 'Single', offset: '50μV' }, comparison: 'Single channel version', reason: 'For single channel applications', useCase: 'Space-constrained single channel' },
    { partNumber: 'TP1564', brand: '3peak', specifications: { channels: 'Quad', offset: '50μV' }, comparison: 'Quad channel version', reason: 'More channels in one package', useCase: 'High density designs' }
  ],
  'TP1671': [
    { partNumber: 'TP1672', brand: '3peak', specifications: { channels: 'Dual', bandwidth: '100MHz' }, comparison: 'Dual high-speed op-amp', reason: 'For dual high-speed needs', useCase: 'Dual high-speed signal processing' },
    { partNumber: 'TP1561', brand: '3peak', specifications: { bandwidth: '2.5MHz', offset: '50μV' }, comparison: 'Lower bandwidth, higher precision', reason: 'For precision over speed', useCase: 'Precision DC applications' }
  ],
  'TP1564': [
    { partNumber: 'TP1562', brand: '3peak', specifications: { channels: 'Dual', offset: '50μV' }, comparison: 'Dual channel version', reason: 'Fewer channels if needed', useCase: 'Medium channel count' },
    { partNumber: 'TP1561', brand: '3peak', specifications: { channels: 'Single', offset: '50μV' }, comparison: 'Single channel version', reason: 'Single channel flexibility', useCase: 'Distributed single channels' }
  ],
  'TP1581': [
    { partNumber: 'TP1582', brand: '3peak', specifications: { channels: 'Dual', power: 'Low' }, comparison: 'Dual low-power op-amp', reason: 'Dual low-power option', useCase: 'Dual battery-powered apps' },
    { partNumber: 'TP1561', brand: '3peak', specifications: { power: 'Standard', offset: '50μV' }, comparison: 'Standard power, higher precision', reason: 'Precision over power savings', useCase: 'Precision battery apps' }
  ],
  'TP1592': [
    { partNumber: 'TP1591', brand: '3peak', specifications: { channels: 'Single', power: 'Ultra-low' }, comparison: 'Single ultra-low power', reason: 'Single channel ultra-low power', useCase: 'Single battery-powered sensor' },
    { partNumber: 'TP1581', brand: '3peak', specifications: { power: 'Low' }, comparison: 'Low power alternative', reason: 'Low power vs ultra-low power', useCase: 'Moderate battery applications' }
  ],
  // ADCs and DACs
  'TPC1610': [
    { partNumber: 'TPC1210', brand: '3peak', specifications: { resolution: '12-bit', speed: '1MSPS' }, comparison: '12-bit version', reason: 'Lower resolution, lower cost', useCase: 'General purpose ADC' },
    { partNumber: 'TPC1816', brand: '3peak', specifications: { resolution: '18-bit', speed: '500kSPS' }, comparison: 'Higher resolution', reason: 'More precision needed', useCase: 'Precision measurement' }
  ],
  'TPC1210': [
    { partNumber: 'TPC1610', brand: '3peak', specifications: { resolution: '16-bit', speed: '1MSPS' }, comparison: '16-bit version', reason: 'Higher resolution', useCase: 'Higher precision apps' },
    { partNumber: 'TPC1012', brand: '3peak', specifications: { resolution: '10-bit', speed: '2MSPS' }, comparison: 'Lower resolution, higher speed', reason: 'Speed over resolution', useCase: 'High-speed acquisition' }
  ],
  'TPC5121Q': [
    { partNumber: 'TPC5122', brand: '3peak', specifications: { channels: 'Dual', resolution: '12-bit' }, comparison: 'Dual channel DAC', reason: 'Dual output needed', useCase: 'Dual waveform generation' },
    { partNumber: 'TPC5141', brand: '3peak', specifications: { resolution: '14-bit' }, comparison: 'Higher resolution DAC', reason: 'More precision needed', useCase: 'Precision analog output' }
  ],
  'TPC5173': [
    { partNumber: 'TPC5172', brand: '3peak', specifications: { channels: '2', resolution: '24-bit' }, comparison: '2-channel version', reason: 'Fewer channels', useCase: 'Dual precision measurement' },
    { partNumber: 'TPC5174', brand: '3peak', specifications: { channels: '4', resolution: '24-bit' }, comparison: '4-channel version', reason: 'More channels', useCase: 'Multi-channel precision' }
  ],
  // Interface Chips
  'TPT485': [
    { partNumber: 'TPT485E', brand: '3peak', specifications: { protection: 'Enhanced' }, comparison: 'Enhanced protection', reason: 'Better ESD protection', useCase: 'Harsh environments' },
    { partNumber: 'TPT3485', brand: '3peak', specifications: { speed: 'High', esd: '15kV' }, comparison: 'High speed RS485', reason: 'Higher data rates', useCase: 'Fast communication' }
  ],
  'TPT3232': [
    { partNumber: 'TPT3232E', brand: '3peak', specifications: { esd: '±15kV' }, comparison: 'Enhanced ESD protection', reason: 'Better ESD protection', useCase: 'Industrial RS232' },
    { partNumber: 'TPT2132', brand: '3peak', specifications: { channels: '2', speed: 'High' }, comparison: 'Dual driver/receiver', reason: 'Standard RS232', useCase: 'General RS232 apps' }
  ],
  'TPT75176': [
    { partNumber: 'TPT75176B', brand: '3peak', specifications: { speed: 'High', fault: 'Protected' }, comparison: 'High speed CAN', reason: 'CAN FD support', useCase: 'Modern CAN systems' },
    { partNumber: 'TPT1050', brand: '3peak', specifications: { isolation: 'Isolated' }, comparison: 'Isolated CAN', reason: 'Galvanic isolation needed', useCase: 'Isolated CAN networks' }
  ],
  'TPT75176HL1': [
    { partNumber: 'TPT75176', brand: '3peak', specifications: { temp: 'Standard' }, comparison: 'Standard temperature', reason: 'Standard temp range', useCase: 'Commercial CAN apps' },
    { partNumber: 'TPT1042', brand: '3peak', specifications: { fault: 'Protected' }, comparison: 'Fault-protected CAN', reason: 'Robust protection', useCase: 'Harsh CAN environments' }
  ],
  // Motor Drivers
  'TPM8837': [
    { partNumber: 'TPM8838', brand: '3peak', specifications: { current: '1.5A', voltage: '12V' }, comparison: 'Higher current', reason: 'More motor current', useCase: 'Larger DC motors' },
    { partNumber: 'TPM8836', brand: '3peak', specifications: { current: '0.8A', voltage: '8V' }, comparison: 'Lower current', reason: 'Smaller motors', useCase: 'Small DC motors' }
  ],
  'TPM8838': [
    { partNumber: 'TPM8837', brand: '3peak', specifications: { current: '1A', voltage: '12V' }, comparison: 'Lower current', reason: 'Less current needed', useCase: 'Medium DC motors' },
    { partNumber: 'TPM8840', brand: '3peak', specifications: { current: '2A', voltage: '24V' }, comparison: 'Higher voltage/current', reason: '24V systems', useCase: 'Industrial 24V motors' }
  ],
  'TPM8840': [
    { partNumber: 'TPM8842', brand: '3peak', specifications: { channels: 'Dual', current: '1.5A' }, comparison: 'Dual H-bridge', reason: 'Dual motor control', useCase: 'Two motor systems' },
    { partNumber: 'TPM8838', brand: '3peak', specifications: { current: '1.5A', voltage: '12V' }, comparison: '12V version', reason: '12V systems', useCase: '12V motor apps' }
  ],
  'TPM8842': [
    { partNumber: 'TPM8840', brand: '3peak', specifications: { channels: 'Single', current: '2A' }, comparison: 'Single H-bridge', reason: 'Single motor control', useCase: 'Single motor systems' },
    { partNumber: 'TPM8847', brand: '3peak', specifications: { current: '3A', voltage: '36V' }, comparison: 'Higher power', reason: 'More power needed', useCase: 'High power motors' }
  ],
  // Power Management ICs
  'TPR1025': [
    { partNumber: 'TPR1033', brand: '3peak', specifications: { voltage: '3.3V', precision: 'High' }, comparison: '3.3V reference', reason: '3.3V systems', useCase: '3.3V analog systems' },
    { partNumber: 'TPR1050', brand: '3peak', specifications: { voltage: '5V', precision: 'High' }, comparison: '5V reference', reason: '5V systems', useCase: '5V analog systems' }
  ],
  'TPR1033': [
    { partNumber: 'TPR1025', brand: '3peak', specifications: { voltage: '2.5V', precision: 'High' }, comparison: '2.5V reference', reason: '2.5V systems', useCase: '2.5V analog systems' },
    { partNumber: 'TPR1041', brand: '3peak', specifications: { voltage: '4.096V', precision: 'High' }, comparison: '4.096V reference', reason: 'ADC reference', useCase: 'Precision ADC reference' }
  ],
  'TPR1050': [
    { partNumber: 'TPR1033', brand: '3peak', specifications: { voltage: '3.3V', precision: 'High' }, comparison: '3.3V reference', reason: 'Lower voltage', useCase: '3.3V systems' },
    { partNumber: 'TPR1010', brand: '3peak', specifications: { voltage: '1.024V', precision: 'High' }, comparison: '1.024V reference', reason: 'Low voltage reference', useCase: 'Low voltage systems' }
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
        alt.partNumber?.includes('ALT') || 
        alt.manufacturer?.includes('Competitor')
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
      !alt.partNumber?.includes('ALT') && 
      !alt.manufacturer?.includes('Competitor')
    );
    if (hasRealAlternatives) fixedProducts++;
  });
  console.log(`  ${cat.name}: ${fixedProducts}/${cat.products.length} products with real alternatives`);
});
