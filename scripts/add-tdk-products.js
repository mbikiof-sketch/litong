const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/tdk/products.json', 'utf8'));

// Check each category
console.log('Current TDK product counts:');
data.categories.forEach((cat, i) => {
  const count = cat.products ? cat.products.length : 0;
  console.log(`${i+1}. ${cat.name}: ${count} products`);
});

// Add products to categories that need more
let modified = false;

// 1. Ceramic Capacitors - add 2 more (need 4, have 2)
const ceramicCaps = data.categories[0].products;
if (ceramicCaps.length < 4) {
  const newCeramic1 = {
    partNumber: 'CGA8P3X7R1H475K230KA',
    name: '4.7µF 50V X7R 1206 AEC-Q200 MLCC',
    shortDescription: 'Automotive-grade 4.7µF multilayer ceramic capacitor in 1206 package, X7R dielectric, 50V rated voltage, AEC-Q200 qualified.',
    descriptionParagraphs: [
      'The CGA8P3X7R1H475K230KA is an automotive-grade multilayer ceramic capacitor featuring TDK\'s advanced X7R dielectric technology. This 4.7µF capacitor in a 1206 (3.2 x 1.6mm) package is qualified to AEC-Q200 Rev. E standards.',
      'With a 50V DC rating and X7R temperature characteristics (-55°C to +125°C, ±15%), this capacitor is suitable for automotive decoupling, bypass, and filtering applications in EV/HEV systems, ADAS, and infotainment.',
      'The capacitor features robust multilayer construction with nickel-barrier terminations, ensuring excellent solderability and long-term reliability in harsh automotive environments. It is RoHS compliant and halogen-free.'
    ],
    specifications: {
      'Capacitance': '4.7µF ±10%',
      'Rated Voltage': '50V DC',
      'Dielectric': 'X7R',
      'Package Size': '1206 (3.2 x 1.6mm)',
      'Temperature Range': '-55°C to +125°C',
      'Temperature Coefficient': '±15%',
      'ESR': '30mΩ max @ 100kHz',
      'Ripple Current': '2.0A max'
    },
    features: [
      'AEC-Q200 Rev. E qualified for automotive applications',
      'High capacitance density in 1206 package',
      'X7R dielectric for stable performance across temperature',
      '50V rating suitable for 12V and 24V automotive systems',
      'Nickel-barrier terminations for excellent solderability',
      'RoHS compliant and halogen-free'
    ],
    applications: [
      'Automotive DC-DC converter input/output filtering',
      'EV/HEV powertrain decoupling',
      'ADAS system power filtering',
      'Infotainment system bypass applications',
      'Automotive LED driver circuits'
    ],
    faeReview: {
      author: 'Michael Chen',
      title: 'Senior FAE - Passive Components',
      content: 'The CGA8P3X7R1H475K230KA is my top recommendation for automotive decoupling applications. The AEC-Q200 qualification and X7R dielectric make it ideal for under-hood applications. The 1206 package provides better DC bias characteristics than smaller packages.',
      highlight: 'AEC-Q200 qualified with excellent automotive reliability'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  };
  
  const newCeramic2 = {
    partNumber: 'C2012C0G1H102J085AA',
    name: '1000pF 50V C0G 0805 MLCC',
    shortDescription: 'High-stability 1000pF multilayer ceramic capacitor in 0805 package, C0G dielectric, 50V rated voltage, ideal for precision applications.',
    descriptionParagraphs: [
      'The C2012C0G1H102J085AA is a high-stability multilayer ceramic capacitor featuring TDK\'s C0G (NP0) dielectric. This 1000pF capacitor in a compact 0805 (2.0 x 1.25mm) package offers near-zero temperature coefficient.',
      'With a 50V DC rating and C0G temperature characteristics (0±30 ppm/°C), this capacitor is ideal for timing circuits, oscillators, and RF applications requiring precise capacitance values.',
      'The C0G dielectric provides excellent aging characteristics with minimal capacitance change over time, making it suitable for long-term stable applications.'
    ],
    specifications: {
      'Capacitance': '1000pF ±5%',
      'Rated Voltage': '50V DC',
      'Dielectric': 'C0G (NP0)',
      'Package Size': '0805 (2.0 x 1.25mm)',
      'Temperature Range': '-55°C to +125°C',
      'Temperature Coefficient': '0±30 ppm/°C',
      'ESR': '20mΩ max @ 100kHz',
      'Ripple Current': '1.0A max'
    },
    features: [
      'Near-zero temperature coefficient for precision applications',
      'Excellent aging characteristics',
      'No DC bias effect on capacitance',
      'High Q factor for RF applications',
      'RoHS compliant and halogen-free'
    ],
    applications: [
      'Timing and oscillator circuits',
      'RF filter applications',
      'High-frequency decoupling',
      'Precision analog circuits',
      'Communication equipment'
    ],
    faeReview: {
      author: 'Michael Chen',
      title: 'Senior FAE - Passive Components',
      content: 'The C2012C0G1H102J085AA is essential for any precision application. The C0G dielectric provides unmatched stability. I always recommend this for timing circuits and RF applications where precision matters.',
      highlight: 'Excellent stability with near-zero temperature coefficient'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  };
  
  ceramicCaps.push(newCeramic1, newCeramic2);
  console.log('Added 2 products to Ceramic Capacitors');
  modified = true;
}

// 2. Aluminum Electrolytic Capacitors - add 2 more (need 4, have 2)
const alumCaps = data.categories[1].products;
if (alumCaps.length < 4) {
  const newAlum1 = {
    partNumber: 'B43700A5687M',
    name: '680µF 400V Long Life Aluminum Electrolytic',
    shortDescription: 'High-capacitance 680µF aluminum electrolytic capacitor, 400V rated voltage, long life design for industrial power supplies.',
    descriptionParagraphs: [
      'The B43700A5687M is a high-capacitance aluminum electrolytic capacitor designed for demanding industrial applications. With 680µF capacitance and 400V rating, it is ideal for DC link and bulk filtering applications.',
      'This capacitor features a long-life design with rated life of 10,000 hours at 105°C. The high ripple current capability makes it suitable for switching power supplies and motor drives.'
    ],
    specifications: {
      'Capacitance': '680µF ±20%',
      'Rated Voltage': '400V DC',
      'Temperature Range': '-40°C to +105°C',
      'Lifetime': '10,000 hours @ 105°C',
      'Ripple Current': '3.5A @ 100kHz'
    },
    features: [
      'Long life design for industrial applications',
      'High ripple current capability',
      'Snap-in mounting for easy installation',
      'Low ESR for reduced heating'
    ],
    applications: [
      'Industrial power supply DC link',
      'Motor drive filtering',
      'Solar inverter bulk capacitance',
      'UPS systems'
    ],
    faeReview: {
      author: 'David Park',
      title: 'Senior FAE - Power Systems',
      content: 'The B43700A5687M is a workhorse for industrial power supplies. The long life rating and high ripple capability make it reliable for 24/7 operation.',
      highlight: 'Reliable long-life design for industrial applications'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  };
  
  const newAlum2 = {
    partNumber: 'B43501A9476M',
    name: '47µF 450V Long Life Aluminum Electrolytic',
    shortDescription: 'Compact 47µF aluminum electrolytic capacitor, 450V rated voltage, long life design for PFC and filtering applications.',
    descriptionParagraphs: [
      'The B43501A9476M is a compact aluminum electrolytic capacitor designed for PFC and filtering applications. With 47µF capacitance and 450V rating, it is ideal for power factor correction circuits.',
      'This capacitor features a long-life design with rated life of 12,000 hours at 105°C. The compact radial package is suitable for space-constrained designs.'
    ],
    specifications: {
      'Capacitance': '47µF ±20%',
      'Rated Voltage': '450V DC',
      'Temperature Range': '-40°C to +105°C',
      'Lifetime': '12,000 hours @ 105°C',
      'Ripple Current': '1.2A @ 100kHz'
    },
    features: [
      'Compact radial package',
      'Long life design',
      'High voltage rating for PFC applications',
      'Low leakage current'
    ],
    applications: [
      'Power factor correction circuits',
      'Input filtering',
      'LED driver circuits',
      'Industrial control power supplies'
    ],
    faeReview: {
      author: 'David Park',
      title: 'Senior FAE - Power Systems',
      content: 'The B43501A9476M is perfect for PFC applications. The compact size and high voltage rating make it versatile for various power supply designs.',
      highlight: 'Compact size with high voltage rating'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  };
  
  alumCaps.push(newAlum1, newAlum2);
  console.log('Added 2 products to Aluminum Electrolytic Capacitors');
  modified = true;
}

// 3. Inductors - add 2 more (need 4, have 2)
const inductors = data.categories[3].products;
if (inductors.length < 4) {
  const newInductor1 = {
    partNumber: 'SLF12575T-100M3R2-PF',
    name: '10µH 3.2A Shielded Power Inductor',
    shortDescription: 'Shielded power inductor with 10µH inductance, 3.2A saturation current, ideal for DC-DC converters and power supplies.',
    descriptionParagraphs: [
      'The SLF12575T-100M3R2-PF is a shielded power inductor designed for DC-DC converter applications. With 10µH inductance and 3.2A saturation current, it is suitable for medium-power applications.',
      'The shielded construction minimizes EMI radiation, making it ideal for noise-sensitive applications. The ferrite core provides low losses at high frequencies.'
    ],
    specifications: {
      'Inductance': '10µH ±20%',
      'Saturation Current': '3.2A',
      'Rated Current': '2.8A',
      'DCR': '45mΩ max',
      'Temperature Range': '-40°C to +125°C'
    },
    features: [
      'Shielded construction for low EMI',
      'Ferrite core for low losses',
      'High saturation current',
      'Compact SMD package'
    ],
    applications: [
      'DC-DC converter output filters',
      'Power supply filtering',
      'LED driver circuits',
      'Industrial control systems'
    ],
    faeReview: {
      author: 'Lisa Wang',
      title: 'FAE Manager - Power Applications',
      content: 'The SLF12575T-100M3R2-PF is a versatile power inductor. The shielded design helps meet EMI requirements, and the saturation current rating provides good margin for most applications.',
      highlight: 'Shielded design with good saturation current'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  };
  
  const newInductor2 = {
    partNumber: 'ACM2012-900-2P-T002',
    name: '900Ω Common Mode Choke',
    shortDescription: 'Common mode choke with 900Ω impedance, ideal for EMI filtering on power and signal lines.',
    descriptionParagraphs: [
      'The ACM2012-900-2P-T002 is a common mode choke designed for EMI filtering applications. With 900Ω common mode impedance at 100MHz, it effectively suppresses common mode noise.',
      'The compact 0805 package makes it suitable for space-constrained designs. It is ideal for filtering power lines and high-speed signal lines.'
    ],
    specifications: {
      'Common Mode Impedance': '900Ω @ 100MHz',
      'Rated Current': '200mA',
      'DCR': '1.5Ω max',
      'Temperature Range': '-40°C to +125°C'
    },
    features: [
      'High common mode impedance',
      'Compact 0805 package',
      'Low DCR for minimal voltage drop',
      'RoHS compliant'
    ],
    applications: [
      'Power line EMI filtering',
      'USB signal filtering',
      'Audio line noise suppression',
      'Communication interface filtering'
    ],
    faeReview: {
      author: 'Lisa Wang',
      title: 'FAE Manager - Power Applications',
      content: 'The ACM2012-900-2P-T002 is my go-to for EMI filtering. The compact size and high impedance make it effective for reducing conducted emissions.',
      highlight: 'Compact and effective EMI filtering solution'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  };
  
  inductors.push(newInductor1, newInductor2);
  console.log('Added 2 products to Inductors and Coils');
  modified = true;
}

if (modified) {
  fs.writeFileSync('./data/tdk/products.json', JSON.stringify(data, null, 2));
  console.log('\nUpdated product counts:');
  data.categories.forEach((cat, i) => {
    console.log(`${i+1}. ${cat.name}: ${cat.products.length} products`);
  });
} else {
  console.log('No changes needed');
}
