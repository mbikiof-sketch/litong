const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'liteon', 'products.json');
const raw = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(raw);

let fixCount = 0;

// Fix additional typo: "Managementt" / "Managementtt"
function fixDeep(obj) {
  if (typeof obj === 'string') {
    const fixed = obj.replace(/Managementt/g, 'Management');
    if (fixed !== obj) fixCount++;
    return fixed;
  }
  if (Array.isArray(obj)) return obj.map(fixDeep);
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      obj[k] = fixDeep(v);
    }
    return obj;
  }
  return obj;
}

// Missing companion parts
const extraCompanion = {
  'LTV-356T': [
    { partNumber: 'Resistor 1k', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Decoupling capacitor for power supply', category: 'Passives' },
    { partNumber: 'TVS Diode', link: '#', description: 'Protection diode for input/output', category: 'Protection' }
  ],
  'LTV-814': [
    { partNumber: 'Resistor 1k', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Decoupling capacitor for power supply', category: 'Passives' },
    { partNumber: 'TVS Diode', link: '#', description: 'Protection diode for input/output', category: 'Protection' }
  ],
  'LTV-354T': [
    { partNumber: 'Resistor 1k', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Decoupling capacitor for power supply', category: 'Passives' },
    { partNumber: 'TVS Diode', link: '#', description: 'Protection diode for input/output', category: 'Protection' }
  ],
  'PSE-5V': [
    { partNumber: 'Input Filter', link: '#', description: 'EMC input filter module', category: 'Passives' },
    { partNumber: 'Output Capacitor', link: '#', description: 'Output smoothing capacitor', category: 'Passives' },
    { partNumber: 'Thermal Pad', link: '#', description: 'Thermal interface material for heatsink', category: 'Thermal' }
  ],
  'LTR-558ALS': [
    { partNumber: 'Microcontroller', link: '#', description: 'I2C host controller for sensor readout', category: 'IC' },
    { partNumber: 'Pull-up Resistor', link: '#', description: 'I2C pull-up resistors 4.7kΩ', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Power supply decoupling capacitor', category: 'Passives' }
  ],
  'LTR-659PS': [
    { partNumber: 'Microcontroller', link: '#', description: 'I2C host controller for sensor readout', category: 'IC' },
    { partNumber: 'VCSEL Driver', link: '#', description: 'VCSEL driver for proximity measurement', category: 'IC' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Power supply decoupling capacitor', category: 'Passives' }
  ],
  'LTR-303ALS': [
    { partNumber: 'Microcontroller', link: '#', description: 'I2C host controller for sensor readout', category: 'IC' },
    { partNumber: 'Pull-up Resistor', link: '#', description: 'I2C pull-up resistors 4.7kΩ', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Power supply decoupling capacitor', category: 'Passives' }
  ],
  'LTR-329ALS': [
    { partNumber: 'Microcontroller', link: '#', description: 'I2C host controller for sensor readout', category: 'IC' },
    { partNumber: 'Pull-up Resistor', link: '#', description: 'I2C pull-up resistors 4.7kΩ', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Power supply decoupling capacitor', category: 'Passives' }
  ],
  'LTR-507ALS': [
    { partNumber: 'Microcontroller', link: '#', description: 'I2C host controller for sensor readout', category: 'IC' },
    { partNumber: 'Pull-up Resistor', link: '#', description: 'I2C pull-up resistors 4.7kΩ', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Power supply decoupling capacitor', category: 'Passives' }
  ]
};

// Missing alternative parts
const extraAlt = {
  'LTV-356T': [
    { partNumber: 'LTV-354T', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'High-speed alternative', reason: 'Darlington output option', useCase: 'High-current output', link: '#' },
    { partNumber: 'LTV-817', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Standard phototransistor option', reason: 'Cost-effective option', useCase: 'Standard isolation', link: '#' }
  ],
  'LTV-814': [
    { partNumber: 'LTV-817', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Single-channel alternative', reason: 'Wider availability', useCase: 'Single-channel isolation', link: '#' },
    { partNumber: 'LTV-827', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Dual-channel alternative', reason: 'Multi-channel option', useCase: 'Multi-channel isolation', link: '#' }
  ],
  'LTV-354T': [
    { partNumber: 'LTV-356T', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Standard high-speed alternative', reason: 'Standard speed option', useCase: 'Digital isolation', link: '#' },
    { partNumber: 'LTV-817', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Phototransistor alternative', reason: 'Cost-effective option', useCase: 'Slow signal isolation', link: '#' }
  ],
  'PSE-5V': [
    { partNumber: 'PSL-12V', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: '12V higher power option', reason: 'Higher voltage option', useCase: '12V systems', link: '#' },
    { partNumber: 'PSL-24V', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: '24V higher power option', reason: 'Higher voltage option', useCase: '24V systems', link: '#' }
  ],
  'LTR-558ALS': [
    { partNumber: 'LTR-506ALS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Standard ALS alternative', reason: 'Similar performance', useCase: 'General ALS applications', link: '#' },
    { partNumber: 'Vishay VEML7700', brand: 'Vishay', specifications: { type: 'Similar' }, comparison: 'Competitive ALS alternative', reason: 'Competitive alternative', useCase: 'High-sensitivity applications', link: '#' }
  ],
  'LTR-659PS': [
    { partNumber: 'LTR-507ALS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Combined ALS alternative', reason: 'ALS-only option', useCase: 'Ambient light sensing only', link: '#' },
    { partNumber: 'Broadcom APDS-9960', brand: 'Broadcom', specifications: { type: 'Similar' }, comparison: 'Multi-function sensor alternative', reason: 'Competitive alternative', useCase: 'Gesture + proximity', link: '#' }
  ],
  'LTR-303ALS': [
    { partNumber: 'LTR-329ALS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Higher resolution alternative', reason: 'Extended range option', useCase: 'Wide dynamic range', link: '#' },
    { partNumber: 'LTR-506ALS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'High-performance ALS', reason: 'Better accuracy option', useCase: 'Precision sensing', link: '#' }
  ],
  'LTR-329ALS': [
    { partNumber: 'LTR-303ALS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Standard resolution alternative', reason: 'Cost-effective option', useCase: 'Basic ALS', link: '#' },
    { partNumber: 'LTR-506ALS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'High-performance ALS', reason: 'Better accuracy option', useCase: 'Precision sensing', link: '#' }
  ],
  'LTR-507ALS': [
    { partNumber: 'LTR-659PS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Proximity + ALS alternative', reason: 'Multi-function option', useCase: 'Combined sensing', link: '#' },
    { partNumber: 'LTR-506ALS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'ALS-only alternative', reason: 'ALS-only option', useCase: 'Ambient light only', link: '#' }
  ]
};

// Product features
const extraFeatures = {
  'LTV-356T': ['High-speed logic gate optocoupler', 'Fast switching 0.5-4μs', 'High noise immunity', 'UL, VDE, CQC certified'],
  'LTV-814': ['Darlington output optocoupler', 'High current transfer ratio', 'High isolation voltage 5000Vrms', 'UL, VDE, CQC certified'],
  'LTV-354T': ['High-speed Darlington optocoupler', 'Fast switching with high gain', 'High isolation voltage 3750Vrms', 'UL, VDE, CQC certified'],
  'PSE-5V': ['5V DC-DC converter module', 'Wide input voltage range', 'High efficiency up to 90%', 'Compact SMD package'],
  'LTR-558ALS': ['Dual-channel ambient light sensor', 'I2C interface up to 400kHz', 'Independent channel operation', 'Ultra-low power consumption'],
  'LTR-659PS': ['Integrated proximity + ALS sensor', 'VCSEL-based proximity detection', 'I2C digital interface', 'Ultra-low standby current'],
  'LTR-303ALS': ['Low-power ambient light sensor', 'I2C interface', 'Compact 6-pin package', 'Wide dynamic range'],
  'LTR-329ALS': ['High-resolution ambient light sensor', 'I2C interface', 'Extended dynamic range', 'Ultra-low power operation'],
  'LTR-507ALS': ['High-accuracy ambient light sensor', 'I2C digital output', '16-bit resolution', 'Factory calibrated lux output']
};

// Product descriptions
const extraDescriptions = {
  'LTV-356T': [
    'The LTV-356T is a high-speed logic gate optocoupler with 3750Vrms isolation voltage.',
    'Fast switching time of 0.5-4μs enables reliable digital signal isolation.',
    'Ideal for PLC interfaces, motor drive control, and industrial communication.'
  ],
  'LTV-814': [
    'The LTV-814 is a Darlington output optocoupler with 5000Vrms high isolation voltage.',
    'High current transfer ratio enables low LED drive current requirements.',
    'Suitable for high-voltage industrial isolation and power supply feedback applications.'
  ],
  'LTV-354T': [
    'The LTV-354T is a high-speed Darlington optocoupler combining fast switching with high gain.',
    'Ideal for applications requiring both speed and sensitivity in signal isolation.',
    'UL and VDE certified for global industrial applications.'
  ],
  'PSE-5V': [
    'The PSE-5V is a compact DC-DC converter providing regulated 5V output from wide input range.',
    'High efficiency up to 90% minimizes power loss and thermal management requirements.',
    'Ideal for embedded systems, IoT devices, and distributed power architectures.'
  ],
  'LTR-558ALS': [
    'The LTR-558ALS is a dual-channel ambient light sensor with independent channel operation.',
    'Each channel provides 16-bit resolution for accurate light measurement in diverse conditions.',
    'Ideal for display brightness control in dual-screen devices and multi-zone lighting.'
  ],
  'LTR-659PS': [
    'The LTR-659PS integrates proximity detection and ambient light sensing in a compact package.',
    'VCSEL-based proximity sensor achieves up to 100mm detection range with excellent sunlight immunity.',
    'Ideal for smartphones, smart home devices, and IoT applications.'
  ],
  'LTR-303ALS': [
    'The LTR-303ALS is a low-power ambient light sensor in compact 6-pin package.',
    'I2C digital interface enables easy integration with standard microcontrollers.',
    'Perfect for battery-powered devices requiring automatic brightness control.'
  ],
  'LTR-329ALS': [
    'The LTR-329ALS offers high-resolution ambient light sensing with extended dynamic range.',
    'Ultra-low power operation makes it ideal for always-on sensing applications.',
    'Suitable for wearable devices, smartphones, and industrial display control.'
  ],
  'LTR-507ALS': [
    'The LTR-507ALS is a high-accuracy ambient light sensor with 16-bit digital output.',
    'Factory calibrated for precise lux measurement across diverse lighting conditions.',
    'Optimized for automotive display dimming and industrial lighting control.'
  ]
};

// FAE highlights
const extraHighlights = {
  'LTV-356T': ['Fast switching', 'High noise immunity', 'Industrial reliability'],
  'LTV-814': ['High isolation', 'Darlington gain', 'Proven reliability'],
  'LTV-354T': ['Fast + high gain', 'Compact package', 'Industrial grade'],
  'PSE-5V': ['Compact size', 'High efficiency', 'Easy integration'],
  'LTR-558ALS': ['Dual channel', 'Low power', 'High accuracy'],
  'LTR-659PS': ['Integrated sensing', 'VCSEL technology', 'Ultra-low power'],
  'LTR-303ALS': ['Low power', 'Compact size', 'Easy integration'],
  'LTR-329ALS': ['High resolution', 'Wide dynamic range', 'Ultra-low power'],
  'LTR-507ALS': ['High accuracy', 'Factory calibrated', 'Automotive grade']
};

for (const category of data.categories) {
  for (const product of category.products) {
    const pn = product.partNumber;

    if (extraCompanion[pn]) {
      product.companionParts = extraCompanion[pn];
      fixCount++;
    }
    if (extraAlt[pn]) {
      product.alternativeParts = extraAlt[pn];
      fixCount++;
    }
    if (extraFeatures[pn]) {
      product.features = extraFeatures[pn];
      fixCount++;
    }
    if (extraDescriptions[pn]) {
      product.descriptionParagraphs = extraDescriptions[pn];
      fixCount++;
    }
    if (extraHighlights[pn] && product.faeReview && product.faeReview.highlight) {
      product.faeReview.highlight = extraHighlights[pn];
      fixCount++;
    }
  }
}

// Fix all "Managementt" typos
fixDeep(data);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Remaining fixes complete. Applied ${fixCount} additional fixes.`);