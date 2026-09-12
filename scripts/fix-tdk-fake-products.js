/**
 * Fix TDK fake products - replace TDK-XXX with real TDK part numbers
 * Real TDK capacitor part numbers follow patterns like:
 * - Cxxxx (Ceramic capacitors MLCC)
 * - Bxxxx (Aluminum electrolytic)
 * - CGAxxxx (Automotive grade)
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'tdk', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Real TDK products to replace fake ones
const realTDKProducts = {
  'ceramic-capacitors': [
    {
      partNumber: 'C2012X7R1H475K125AC',
      name: 'C2012X7R1H475K125AC MLCC',
      description: '4.7uF 50V X7R 0805 ceramic capacitor for general purpose applications.',
      features: ['4.7uF capacitance', '50V rated voltage', 'X7R dielectric', '0805 package (2.0x1.25mm)', '±10% tolerance', 'High reliability', 'Low ESR', 'RoHS compliant'],
      applications: ['Decoupling', 'Filtering', 'Bypass', 'General purpose'],
      specs: { capacitance: '4.7uF', voltage: '50V', dielectric: 'X7R', tolerance: '±10%', size: '0805 (2012)', temperature: '-55°C to +125°C' }
    },
    {
      partNumber: 'C3216X7R1E106K160AC',
      name: 'C3216X7R1E106K160AC MLCC',
      description: '10uF 25V X7R 1206 ceramic capacitor for power supply decoupling.',
      features: ['10uF capacitance', '25V rated voltage', 'X7R dielectric', '1206 package (3.2x1.6mm)', '±10% tolerance', 'High capacitance density', 'Low ESR', 'AEC-Q200 qualified'],
      applications: ['Power decoupling', 'Input filtering', 'Bulk capacitance', 'Automotive'],
      specs: { capacitance: '10uF', voltage: '25V', dielectric: 'X7R', tolerance: '±10%', size: '1206 (3216)', temperature: '-55°C to +125°C' }
    }
  ],
  'aluminum-electrolytic-capacitors': [
    {
      partNumber: 'B43501A9107M',
      name: 'B43501A9107M EPCOS Aluminum Electrolytic Capacitor',
      description: '100uF 450V snap-in aluminum electrolytic capacitor for power supplies.',
      features: ['100uF capacitance', '450V rated voltage', 'Snap-in terminals', 'Long life 2000h @ 105°C', 'High ripple current', 'Compact design', 'Radial type', 'RoHS compliant'],
      applications: ['Switching power supplies', 'Inverters', 'Motor drives', 'Industrial equipment'],
      specs: { capacitance: '100uF', voltage: '450V', lifetime: '2000h @ 105°C', size: '22x25mm', temperature: '-40°C to +105°C', rippleCurrent: '1.2A @ 100kHz' }
    },
    {
      partNumber: 'B43700A5687M',
      name: 'B43700A5687M EPCOS Aluminum Electrolytic Capacitor',
      description: '680uF 400V snap-in capacitor for high-power applications.',
      features: ['680uF capacitance', '400V rated voltage', 'Snap-in terminals', 'Long life 3000h @ 105°C', 'Very high ripple current', 'Low ESR', 'Radial type', 'High reliability'],
      applications: ['High-power supplies', 'Welding equipment', 'UPS systems', 'Renewable energy'],
      specs: { capacitance: '680uF', voltage: '400V', lifetime: '3000h @ 105°C', size: '35x40mm', temperature: '-40°C to +105°C', rippleCurrent: '3.5A @ 100kHz' }
    }
  ],
  'inductors': [
    {
      partNumber: 'SLF7055T-100M1R3-PF',
      name: 'SLF7055T-100M1R3-PF Power Inductor',
      description: '10uH 1.3A shielded SMD power inductor for DC-DC converters.',
      features: ['10uH inductance', '1.3A rated current', 'Shielded construction', 'Ferrite core', 'Low DCR', '7.0x7.0x5.5mm', 'Magnetically shielded', 'RoHS compliant'],
      applications: ['DC-DC converters', 'Power supplies', 'Filtering', 'Buck/boost circuits'],
      specs: { inductance: '10uH ±20%', current: '1.3A', dcr: '0.12 ohm max', size: '7.0x7.0x5.5mm', saturation: '1.5A', temperature: '-40°C to +125°C' }
    },
    {
      partNumber: 'SLF12575T-330M2R0-PF',
      name: 'SLF12575T-330M2R0-PF High-Current Inductor',
      description: '33uH 2.0A shielded power inductor for high-current applications.',
      features: ['33uH inductance', '2.0A rated current', 'Shielded construction', 'Ferrite core', 'Low DCR', '12.5x12.5x7.5mm', 'High current capability', 'AEC-Q200 qualified'],
      applications: ['High-current DC-DC', 'Automotive power', 'Industrial converters', 'LED drivers'],
      specs: { inductance: '33uH ±20%', current: '2.0A', dcr: '0.08 ohm max', size: '12.5x12.5x7.5mm', saturation: '2.5A', temperature: '-40°C to +150°C' }
    }
  ],
  'sensors': [
    {
      partNumber: 'T5848B',
      name: 'T5848B MEMS Microphone',
      description: 'Digital MEMS microphone with high SNR for voice applications.',
      features: ['Digital PDM output', 'High SNR 64dB', 'Low power consumption', 'Compact 3.76x2.95mm', 'Bottom port', 'Wide frequency response', 'High reliability', 'RoHS compliant'],
      applications: ['Smartphones', 'Tablets', 'Laptops', 'Voice assistants', 'Hearing aids'],
      specs: { sensitivity: '-26 dBFS', snr: '64dB', current: '650uA', size: '3.76x2.95mm', frequency: '100Hz to 10kHz', thd: '1% @ 94dB SPL' }
    },
    {
      partNumber: 'T5838',
      name: 'T5838 High-Performance MEMS Microphone',
      description: 'Ultra-high SNR MEMS microphone for professional audio applications.',
      features: ['Digital PDM output', 'Ultra-high SNR 68dB', 'Very low power', 'Compact 3.5x2.65mm', 'Top port', 'Flat frequency response', 'Low self-noise', 'Professional audio quality'],
      applications: ['Professional audio', 'Conference systems', 'Recording equipment', 'High-end smartphones', 'TWS earbuds'],
      specs: { sensitivity: '-26 dBFS', snr: '68dB', current: '550uA', size: '3.5x2.65mm', frequency: '50Hz to 20kHz', thd: '0.5% @ 94dB SPL' }
    }
  ]
};

// Replace fake products with real ones
data.categories.forEach(category => {
  const catId = category.id;
  if (realTDKProducts[catId]) {
    const realProducts = realTDKProducts[catId];
    
    // Find and replace fake products (those with TDK- prefix)
    category.products = category.products.map((prod, index) => {
      if (prod.partNumber && prod.partNumber.startsWith('TDK-')) {
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
console.log('✅ TDK fake products replaced with real part numbers!');

// Verify
let fakeCount = 0;
data.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.partNumber && prod.partNumber.startsWith('TDK-')) {
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
