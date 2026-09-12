const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'liteon', 'products.json');
const raw = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(raw);

// Fix typo in descriptionParagraphs
const fixTypo = (s) => {
  if (typeof s === 'string') return s.replace('Power Managemen', 'Power Management');
  return s;
};

// Recursively fix strings
function fixStrings(obj) {
  if (typeof obj === 'string') return fixTypo(obj);
  if (Array.isArray(obj)) return obj.map(fixStrings);
  if (obj && typeof obj === 'object') {
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
      result[k] = fixStrings(v);
    }
    return result;
  }
  return obj;
}

// Fix 1: Fix all "Power Managemen" typos
let fixCount = 0;

// Fix 2: Fix companionParts - replace 3x duplicates with unique meaningful parts
const ledCompanionMap = {
  'LTST-C190KGKT': [
    { partNumber: 'LED Driver IC', link: '#', description: 'Constant current LED driver', category: 'Power Management' },
    { partNumber: 'LTST-C191KRKT', link: '#', description: 'Red SMD LED for status indication', category: 'LED Components' },
    { partNumber: 'Current Limiting Resistor', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' }
  ],
  'LTST-C191KRKT': [
    { partNumber: 'LED Driver IC', link: '#', description: 'Constant current LED driver', category: 'Power Management' },
    { partNumber: 'LTST-C190KGKT', link: '#', description: 'Green SMD LED for multi-color indication', category: 'LED Components' },
    { partNumber: 'Current Limiting Resistor', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' }
  ],
  'LTPL-C036UVG375': [
    { partNumber: 'Aluminum PCB', link: '#', description: 'Metal-core PCB for thermal management', category: 'Thermal' },
    { partNumber: 'Thermal Pad', link: '#', description: 'Thermal interface material', category: 'Thermal' },
    { partNumber: 'Constant Current Driver', link: '#', description: 'High-current LED driver IC', category: 'Power Management' }
  ],
  'LTVR-C173IR1-25A': [
    { partNumber: 'LTR-506ALS', link: '#', description: 'Ambient light sensor for ambient compensation', category: 'Optical Sensors' },
    { partNumber: 'MOSFET Switch', link: '#', description: 'Power MOSFET for pulsed operation', category: 'Power Management' },
    { partNumber: 'IR Pass Filter', link: '#', description: 'IR pass filter for improved SNR', category: 'Passives' }
  ],
  'LTST-C195KSKT': [
    { partNumber: 'LED Driver IC', link: '#', description: 'Constant current LED driver', category: 'Power Management' },
    { partNumber: 'LTST-C190KGKT', link: '#', description: 'Green SMD LED for bi-color indication', category: 'LED Components' },
    { partNumber: 'Current Limiting Resistor', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' }
  ],
  'LTST-C194TBKT': [
    { partNumber: 'LED Driver IC', link: '#', description: 'Constant current LED driver', category: 'Power Management' },
    { partNumber: 'LTST-C191KRKT', link: '#', description: 'Red SMD LED for bi-color indication', category: 'LED Components' },
    { partNumber: 'Current Limiting Resistor', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' }
  ]
};

const optoAltFix = {
  'LTV-817': [
    { partNumber: 'LTV-356T', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'High-speed logic gate alternative', reason: 'Higher speed option', useCase: 'Digital isolation', link: '#' },
    { partNumber: 'LTV-827', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Dual-channel alternative', reason: 'Dual channel option', useCase: 'Multi-channel isolation', link: '#' }
  ],
  'LTV-827': [
    { partNumber: 'LTV-817', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Single-channel alternative', reason: 'Single channel option', useCase: 'Single-channel isolation', link: '#' },
    { partNumber: 'LTV-847', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Quad-channel alternative', reason: 'Higher channel count', useCase: 'Multi-channel isolation', link: '#' }
  ],
  'LTV-847': [
    { partNumber: 'LTV-817', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Single-channel alternative', reason: 'Single channel option', useCase: 'Simple isolation', link: '#' },
    { partNumber: 'LTV-827', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Dual-channel alternative', reason: 'Dual channel option', useCase: 'Multi-channel isolation', link: '#' }
  ]
};

const powerAltFix = {
  'PSL-12V': [
    { partNumber: 'PSL-24V', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: '24V output alternative', reason: 'Higher voltage option', useCase: '24V systems', link: '#' },
    { partNumber: 'PSE-5V', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: '5V low-power alternative', reason: 'Lower power option', useCase: 'Low-power applications', link: '#' }
  ],
  'PSL-24V': [
    { partNumber: 'PSL-12V', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: '12V output alternative', reason: 'Lower voltage option', useCase: '12V systems', link: '#' },
    { partNumber: 'PSE-5V', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: '5V low-power alternative', reason: 'Lower power option', useCase: 'Low-power applications', link: '#' }
  ]
};

const sensorAltFix = {
  'LTR-506ALS': [
    { partNumber: 'LTR-659PS', brand: 'Lite-On', specifications: { type: 'Similar' }, comparison: 'Integrated proximity + ALS', reason: 'Multi-function option', useCase: 'Space-constrained designs', link: '#' },
    { partNumber: 'Vishay VEML7700', brand: 'Vishay', specifications: { type: 'Similar' }, comparison: 'High-sensitivity ALS alternative', reason: 'Competitive alternative', useCase: 'High-sensitivity applications', link: '#' }
  ]
};

const optoCompanionFix = {
  'LTV-817': [
    { partNumber: 'Resistor 1k', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Decoupling capacitor for power supply', category: 'Passives' },
    { partNumber: 'TVS Diode', link: '#', description: 'Protection diode for input/output', category: 'Protection' }
  ],
  'LTV-827': [
    { partNumber: 'Resistor 1k', link: '#', description: 'Current limiting resistor for LED drive', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Decoupling capacitor for power supply', category: 'Passives' },
    { partNumber: 'TVS Diode', link: '#', description: 'Protection diode for input/output', category: 'Protection' }
  ],
  'LTV-847': [
    { partNumber: 'Resistor 1k', link: '#', description: 'Current limiting resistors for LED drive', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Decoupling capacitor for power supply', category: 'Passives' },
    { partNumber: 'TVS Diode', link: '#', description: 'Protection diode for input/output', category: 'Protection' }
  ]
};

const powerCompanionFix = {
  'PSL-12V': [
    { partNumber: 'Input Filter', link: '#', description: 'EMC input filter module', category: 'Passives' },
    { partNumber: 'Output Capacitor', link: '#', description: 'Output smoothing capacitor', category: 'Passives' },
    { partNumber: 'Thermal Pad', link: '#', description: 'Thermal interface material for heatsink', category: 'Thermal' }
  ],
  'PSL-24V': [
    { partNumber: 'Input Filter', link: '#', description: 'EMC input filter module', category: 'Passives' },
    { partNumber: 'Output Capacitor', link: '#', description: 'Output smoothing capacitor', category: 'Passives' },
    { partNumber: 'Thermal Pad', link: '#', description: 'Thermal interface material for heatsink', category: 'Thermal' }
  ]
};

const sensorCompanionFix = {
  'LTR-506ALS': [
    { partNumber: 'Microcontroller', link: '#', description: 'I2C host controller for sensor readout', category: 'IC' },
    { partNumber: 'Pull-up Resistor', link: '#', description: 'I2C pull-up resistors 4.7kΩ', category: 'Passives' },
    { partNumber: 'Capacitor 100nF', link: '#', description: 'Power supply decoupling capacitor', category: 'Passives' }
  ]
};

// Product-specific feature sets
const productFeatures = {
  'LTST-C190KGKT': ['High brightness green LED (570nm)', 'Compact 0603 SMD package', 'Wide 130° viewing angle', 'RoHS compliant and lead-free'],
  'LTST-C191KRKT': ['High-efficiency red LED (625nm)', 'Low forward voltage (1.6-2.0V)', 'Compact 0603 SMD package', 'RoHS compliant and lead-free'],
  'LTPL-C036UVG375': ['3W high-power white LED', 'AEC-Q101 automotive qualified', '3535 ceramic package for thermal performance', 'High luminous flux 120-150 lm'],
  'LTVR-C173IR1-25A': ['850nm high-power IR LED 1W', 'High radiant flux 450-550 mW', '3535 ceramic package', 'Wide operating temperature -40°C to +100°C'],
  'LTST-C195KSKT': ['Yellow SMD LED (590nm)', 'Standard 0603 package', 'Reliable performance for indicators', 'RoHS compliant and lead-free'],
  'LTST-C194TBKT': ['Blue SMD LED (470nm)', 'Compact 0603 SMD package', 'Wide 130° viewing angle', 'RoHS compliant and lead-free']
};

const optoProductFeatures = {
  'LTV-817': ['Standard phototransistor optocoupler', 'High isolation voltage 3750Vrms', 'Wide CTR range 50-600%', 'UL, VDE, CQC certified'],
  'LTV-827': ['Dual-channel phototransistor optocoupler', 'High isolation voltage 3750Vrms', 'Compact DIP-8 package', 'UL, VDE, CQC certified'],
  'LTV-847': ['Quad-channel phototransistor optocoupler', 'High isolation voltage 3750Vrms', 'Space-saving DIP-16 package', 'UL, VDE, CQC certified']
};

const powerProductFeatures = {
  'PSL-12V': ['12V output AC-DC power module', 'Universal input 85-264VAC', 'High efficiency up to 90%', 'Comprehensive protection OVP/OCP/OTP'],
  'PSL-24V': ['24V output AC-DC power module', 'Universal input 85-264VAC', 'High efficiency up to 92%', 'Comprehensive protection OVP/OCP/OTP']
};

const sensorProductFeatures = {
  'LTR-506ALS': ['16-bit ambient light sensor', 'I2C interface up to 400kHz', 'Ultra-low power <100μA typical', 'Factory calibrated lux output']
};

// Product-specific descriptionParagraphs
const productDescriptions = {
  'LTST-C190KGKT': [
    'The LTST-C190KGKT is a high brightness green SMD LED in compact 0603 package with 570nm wavelength.',
    'Delivering 35-71 mcd luminous intensity at 20mA, it is ideal for status indicators and backlighting.',
    'The wide 130° viewing angle ensures excellent visibility from multiple directions.'
  ],
  'LTST-C191KRKT': [
    'The LTST-C191KRKT is a high-efficiency red SMD LED in 0603 package with 625nm peak wavelength.',
    'With low forward voltage of 1.6-2.0V and 45-90 mcd output, it is optimized for power indicators.',
    'Reliable performance over -40°C to +85°C makes it suitable for industrial and consumer applications.'
  ],
  'LTPL-C036UVG375': [
    'The LTPL-C036UVG375 is a 3W high-power white LED with AEC-Q101 qualification for automotive use.',
    'Delivering 120-150 lm luminous flux in a compact 3535 ceramic package with low 8°C/W thermal resistance.',
    'Ideal for automotive exterior lighting including DRL, fog lamps, and general illumination.'
  ],
  'LTVR-C173IR1-25A': [
    'The LTVR-C173IR1-25A is a 1W high-power 850nm infrared LED in robust 3535 ceramic package.',
    'Offering 450-550 mW radiant flux and 6°C/W thermal resistance for efficient IR illumination.',
    'Optimized for security cameras, proximity sensors, and night vision systems.'
  ],
  'LTST-C195KSKT': [
    'The LTST-C195KSKT is a yellow SMD LED in 0603 package with 590nm wavelength.',
    'Ideal for warning indicators and status display applications in industrial equipment.',
    'Consistent brightness and color performance across the full operating temperature range.'
  ],
  'LTST-C194TBKT': [
    'The LTST-C194TBKT is a blue SMD LED in 0603 package with 470nm wavelength.',
    'Suitable for consumer electronics indicators and modern equipment status displays.',
    'RoHS compliant and compatible with standard SMD assembly processes.'
  ]
};

const optoProductDescriptions = {
  'LTV-817': [
    'The LTV-817 is a standard phototransistor optocoupler with 3750Vrms isolation voltage.',
    'CTR range of 50-600% provides flexibility for various drive and load requirements.',
    'UL, VDE, and CQC certified for global industrial and consumer applications.'
  ],
  'LTV-827': [
    'The LTV-827 is a dual-channel phototransistor optocoupler in space-saving DIP-8 package.',
    'Each channel provides 3750Vrms isolation with independent inputs and outputs.',
    'Ideal for multi-channel isolation in PLC I/O modules and industrial controllers.'
  ],
  'LTV-847': [
    'The LTV-847 is a quad-channel phototransistor optocoupler in compact DIP-16 package.',
    'Four independent isolation channels with 3750Vrms rating per channel.',
    'Perfect for high-density isolation applications in industrial automation.'
  ]
};

const powerProductDescriptions = {
  'PSL-12V': [
    'The PSL-12V is a high-efficiency AC-DC power module providing regulated 12V output.',
    'Universal input range 85-264VAC with efficiency up to 90% for reduced power loss.',
    'Built-in OVP, OCP, and OTP protection for reliable operation in industrial environments.'
  ],
  'PSL-24V': [
    'The PSL-24V is a high-efficiency AC-DC power module providing regulated 24V output.',
    'Universal input range 85-264VAC with efficiency up to 92% for industrial applications.',
    'Compact form factor with comprehensive protection and UL/CE safety certifications.'
  ]
};

const sensorProductDescriptions = {
  'LTR-506ALS': [
    'The LTR-506ALS is a high-precision 16-bit ambient light sensor with I2C digital output.',
    'Ultra-low power consumption of <100μA typical makes it ideal for battery-powered devices.',
    'Factory calibrated for accurate lux output across diverse lighting conditions.'
  ]
};

// Fix companionParts: deduplicate and use meaningful parts
for (const category of data.categories) {
  for (const product of category.products) {
    const pn = product.partNumber;

    // Fix companionParts
    if (ledCompanionMap[pn]) {
      product.companionParts = ledCompanionMap[pn];
      fixCount++;
    } else if (optoCompanionFix[pn]) {
      product.companionParts = optoCompanionFix[pn];
      fixCount++;
    } else if (powerCompanionFix[pn]) {
      product.companionParts = powerCompanionFix[pn];
      fixCount++;
    } else if (sensorCompanionFix[pn]) {
      product.companionParts = sensorCompanionFix[pn];
      fixCount++;
    }

    // Fix alternativeParts
    if (optoAltFix[pn]) {
      product.alternativeParts = optoAltFix[pn];
      fixCount++;
    } else if (powerAltFix[pn]) {
      product.alternativeParts = powerAltFix[pn];
      fixCount++;
    } else if (sensorAltFix[pn]) {
      product.alternativeParts = sensorAltFix[pn];
      fixCount++;
    }

    // Fix features
    if (productFeatures[pn]) {
      product.features = productFeatures[pn];
      fixCount++;
    } else if (optoProductFeatures[pn]) {
      product.features = optoProductFeatures[pn];
      fixCount++;
    } else if (powerProductFeatures[pn]) {
      product.features = powerProductFeatures[pn];
      fixCount++;
    } else if (sensorProductFeatures[pn]) {
      product.features = sensorProductFeatures[pn];
      fixCount++;
    }

    // Fix descriptionParagraphs
    if (productDescriptions[pn]) {
      product.descriptionParagraphs = productDescriptions[pn];
      fixCount++;
    } else if (optoProductDescriptions[pn]) {
      product.descriptionParagraphs = optoProductDescriptions[pn];
      fixCount++;
    } else if (powerProductDescriptions[pn]) {
      product.descriptionParagraphs = powerProductDescriptions[pn];
      fixCount++;
    } else if (sensorProductDescriptions[pn]) {
      product.descriptionParagraphs = sensorProductDescriptions[pn];
      fixCount++;
    }

    // Fix "undefined" placeholders and templated text in FAQs
    if (product.faqs) {
      for (const faq of product.faqs) {
        const leadTime = product.leadTime || '6-8 weeks';
        const moq = product.moq ? product.moq.toLocaleString() : '1,000';
        if (faq.answer) {
          faq.answer = faq.answer
            .replace(/Standard lead time is undefined\./g, `Standard lead time is ${leadTime}.`)
            .replace(/Standard MOQ is undefined pieces/g, `Standard MOQ is ${moq} pieces`)
            .replace(/ This (LED|optocoupler|sensor) offers reliable performance and is suitable for various applications\. The [A-Z0-9-]+ is manufactured to high quality standards ensuring consistent operation\./g, '')
            .replace(/ This (LED|optocoupler|sensor) offers reliable performance and is suitable for various applications\./g, '');
        }
        if (faq.decisionGuide) {
          faq.decisionGuide = faq.decisionGuide.replace(/Plan for undefined lead time/g, `Plan for ${leadTime} lead time`);
        }
      }
    }

    // Fix generic faeReview
    if (product.faeReview && product.faeReview.highlight) {
      const oldHighlight = product.faeReview.highlight;
      if (oldHighlight.length === 3 &&
          ((oldHighlight[0] === 'Reliable performance' || oldHighlight[0] === 'Reliable') &&
           (oldHighlight[2] === 'Good value' || oldHighlight[2] === 'Cost-effective'))) {
        // Custom FAE highlights based on product
        const faeHighlights = {
          'LTST-C190KGKT': ['Proven reliability', 'Excellent brightness', 'Cost-effective'],
          'LTST-C191KRKT': ['Low power operation', 'High efficiency', 'Mass production ready'],
          'LTPL-C036UVG375': ['Automotive qualified', 'Excellent thermal performance', 'High lumen output'],
          'LTVR-C173IR1-25A': ['High IR output', 'Reliable ceramic package', 'Good thermal performance'],
          'LTST-C195KSKT': ['Consistent color', 'Good brightness', 'Cost-effective'],
          'LTST-C194TBKT': ['Vibrant blue color', 'Reliable performance', 'SMT compatible'],
          'LTV-817': ['Industry standard', 'Proven reliability', 'Cost-effective'],
          'LTV-827': ['Dual-channel savings', 'High isolation', 'Compact package'],
          'LTV-847': ['Quad-channel density', 'Space saving', 'Proven reliability'],
          'PSL-12V': ['High efficiency', 'Compact design', 'Global certifications'],
          'PSL-24V': ['High efficiency', 'Industrial grade', 'Comprehensive protection'],
          'LTR-506ALS': ['Ultra-low power', 'High accuracy', 'Easy I2C interface']
        };
        if (faeHighlights[pn]) {
          product.faeReview.highlight = faeHighlights[pn];
          fixCount++;
        }
      }
    }
  }

  // Fix category series names
  if (category.series) {
    const seriesMap = {
      'led-components': [
        { name: 'LTST-C Standard Series', description: 'Standard SMD LEDs for indicators and displays' },
        { name: 'LTPL-C High-Power Series', description: 'High-power LEDs for automotive and illumination' },
        { name: 'LTVR-C Infrared Series', description: 'Infrared LEDs for sensing and night vision' }
      ],
      'optocouplers': [
        { name: 'LTV-8xx Standard Series', description: 'Standard phototransistor optocouplers' },
        { name: 'LTV-3xx High-Speed Series', description: 'High-speed logic gate optocouplers for digital isolation' }
      ],
      'power-management': [
        { name: 'PSL AC-DC Series', description: 'AC-DC power modules for industrial applications' },
        { name: 'PSE DC-DC Series', description: 'DC-DC converters for embedded systems' }
      ],
      'optical-sensors': [
        { name: 'LTR-5xx ALS Series', description: 'Ambient light sensors for brightness control' },
        { name: 'LTR-6xx Proximity Series', description: 'Proximity sensors with VCSEL for object detection' }
      ]
    };
    if (seriesMap[category.id]) {
      category.series = seriesMap[category.id];
      fixCount++;
    }
  }

  // Fix category-level FAQs
  const catFaqMap = {
    'led-components': [
      { question: 'What is the color temperature range available?', answer: 'Lite-On LED Components are available from warm white 2700K to cool white 6500K, plus full color options including red (625nm), green (570nm), blue (470nm), and yellow (590nm).', decisionGuide: 'Select color temperature based on application environment and regulatory requirements.', keywords: ['color temperature', 'wavelength', 'color options', 'white LED'] },
      { question: 'Are automotive-grade LEDs available?', answer: 'Yes, Lite-On offers AEC-Q101 certified LEDs for automotive applications including exterior lighting, interior lighting, and indicators. These meet stringent automotive reliability standards.', decisionGuide: 'Use AEC-Q101 certified LEDs for all automotive designs. Standard LEDs are suitable for consumer and industrial applications.', keywords: ['automotive LED', 'AEC-Q101', 'automotive grade', 'LED reliability'] },
      { question: 'How do I select the right LED package?', answer: 'Package selection depends on application: 0603/0805 SMD for compact indicators, 3535 ceramic for high-power applications, and through-hole for legacy designs. Consider thermal requirements and assembly process.', decisionGuide: 'Use 0603 for space-constrained designs. Use 3535 ceramic for high-power applications requiring thermal management.', keywords: ['LED package', 'SMD', '0603', '3535 ceramic'] },
      { question: 'What is the typical lead time?', answer: 'Standard lead time is 4-6 weeks for most LED products. Popular part numbers are available from stock for 1-3 day sample delivery. Production orders should be planned 8-12 weeks ahead.', decisionGuide: 'Check BeiLuo stock for immediate needs. Plan production orders with adequate lead time for volume requirements.', keywords: ['lead time', 'LED delivery', 'stock', 'production planning'] },
      { question: 'How do I ensure uniform LED appearance?', answer: 'For consistent visual appearance, specify tight binning for color coordinates and luminous intensity. Lite-On offers various binning options to match your uniformity requirements.', decisionGuide: 'Standard binning is sufficient for most indicators. Tight binning recommended for display backlighting and automotive lighting.', keywords: ['LED binning', 'uniformity', 'color consistency', 'visual matching'] }
    ],
    'optocouplers': [
      { question: 'What isolation voltage do I need?', answer: 'Basic insulation requires 2500Vrms minimum, reinforced insulation requires 5000Vrms. Lite-On optocouplers offer 3750-5000Vrms isolation for industrial and consumer applications.', decisionGuide: 'Determine required isolation level from safety standards. Use 3750Vrms for general industrial, 5000Vrms for reinforced insulation.', keywords: ['isolation voltage', 'basic insulation', 'reinforced insulation', 'safety standards'] },
      { question: 'How do I select between phototransistor and logic gate types?', answer: 'Phototransistor optocouplers (LTV-8xx) are economical for slow signals. Logic gate types (LTV-3xx) offer faster switching and better noise immunity for digital communication.', decisionGuide: 'Use phototransistor for DC signals and power isolation. Use logic gate for PWM, digital communication, and noisy environments.', keywords: ['phototransistor', 'logic gate', 'switching speed', 'noise immunity'] },
      { question: 'What certifications do Lite-On optocouplers have?', answer: 'Lite-On optocouplers are certified to UL1577, VDE0884, and CQC standards. These cover isolation voltage, creepage, clearance, and safety requirements for global markets.', decisionGuide: 'Verify required certifications for target market. Certificates available upon request from BeiLuo Electronics.', keywords: ['certifications', 'UL', 'VDE', 'CQC', 'safety approval'] },
      { question: 'How is CTR affected by temperature?', answer: 'CTR varies with temperature - typically increasing at lower temperatures and decreasing at higher temperatures. Design for worst-case CTR over the full operating temperature range with adequate margin.', decisionGuide: 'Design with 50-100% safety margin on CTR for reliable operation across temperature. Contact FAE for detailed CTR curves.', keywords: ['CTR', 'temperature effect', 'current transfer ratio', 'design margin'] },
      { question: 'What are typical applications for optocouplers?', answer: 'Common applications include PLC I/O isolation, motor drive signal isolation, power supply feedback, industrial communication interfaces, and automotive signal isolation.', decisionGuide: 'Select optocoupler type based on signal speed and isolation requirements for your specific application.', keywords: ['applications', 'PLC isolation', 'motor drive', 'industrial automation'] }
    ],
    'power-management': [
      { question: 'What power levels are available?', answer: 'Lite-On power management solutions cover 5W to 150W output power. This includes AC-DC modules for industrial applications and DC-DC converters for embedded systems.', decisionGuide: 'Select power rating with 20-30% margin above actual load requirements for optimal reliability.', keywords: ['power rating', 'AC-DC', 'DC-DC', 'output power'] },
      { question: 'What efficiency can I expect?', answer: 'AC-DC modules achieve 85-92% efficiency depending on load. DC-DC converters achieve 90-95% at full load. Efficiency curves are provided in datasheets for accurate thermal design.', decisionGuide: 'Consider typical operating load for efficiency optimization. Design thermal management for worst-case dissipation.', keywords: ['efficiency', 'power conversion', 'thermal design', 'load regulation'] },
      { question: 'What protection features are included?', answer: 'Standard protections include over-voltage (OVP), over-current (OCP), over-temperature (OTP), and short-circuit (SCP). Some models include power-good signal and remote on/off control.', decisionGuide: 'Verify protection features match application safety requirements. Additional external protection may be needed for specific applications.', keywords: ['protection', 'OVP', 'OCP', 'OTP', 'safety'] },
      { question: 'Are medical-grade power supplies available?', answer: 'Yes, Lite-On offers medical-grade power modules with appropriate safety certifications including 2xMOPP isolation and low leakage current for medical applications.', decisionGuide: 'Use medical-grade modules for patient-contact applications. Standard industrial modules for non-medical applications.', keywords: ['medical grade', 'MOPP', 'leakage current', 'medical safety'] },
      { question: 'What is the operating temperature range?', answer: 'Industrial grade modules operate from -25°C to +70°C with derating above 50°C. Extended temperature options are available for automotive and outdoor applications.', decisionGuide: 'Consider ambient temperature and enclosure heating. Apply derating for high-temperature operation.', keywords: ['temperature range', 'derating', 'industrial', 'operating temperature'] }
    ],
    'optical-sensors': [
      { question: 'What types of optical sensors are available?', answer: 'Lite-On offers ambient light sensors (ALS) for brightness control, proximity sensors for object detection, and integrated multi-function sensors combining both functions in compact packages.', decisionGuide: 'Select ALS for display brightness control. Select proximity for user presence detection. Integrated sensors for space-constrained designs.', keywords: ['sensor types', 'ALS', 'proximity', 'integrated sensor'] },
      { question: 'How do I interface with Lite-On sensors?', answer: 'All Lite-On optical sensors use standard I2C interface (100-400kHz) for communication. Interrupt pins enable event-driven operation for low-power applications.', decisionGuide: 'Use standard I2C controller with pull-up resistors. Reference driver code available from BeiLuo FAE.', keywords: ['I2C interface', 'communication', 'interrupt', 'digital interface'] },
      { question: 'What is the power consumption?', answer: 'ALS only mode: 50-100μA typical. Proximity measurement: 1-3mA (pulsed). Standby mode: <1μA. Average power depends on measurement duty cycle.', decisionGuide: 'Optimize measurement rate for battery-powered applications. Use interrupt-driven operation for lowest power consumption.', keywords: ['power consumption', 'low power', 'battery', 'standby current'] },
      { question: 'How accurate are the sensors?', answer: 'Ambient light sensors provide 16-bit resolution with factory calibration for accurate lux output. Proximity sensors achieve mm-level accuracy depending on target reflectivity and mechanical design.', decisionGuide: 'Factory calibration provides good accuracy. Application-specific calibration may improve performance for critical applications.', keywords: ['accuracy', 'resolution', 'calibration', 'lux accuracy'] },
      { question: 'What mechanical design considerations are important?', answer: 'Critical factors include window material IR transmission, air gap between sensor and window, optical isolation between TX and RX, and protection from dust and moisture.', decisionGuide: 'Follow mechanical design guidelines in datasheets. Prototype early to validate optical performance with production mechanical design.', keywords: ['mechanical design', 'window material', 'optical isolation', 'air gap'] }
    ]
  };
  if (catFaqMap[category.id]) {
    category.faqs = catFaqMap[category.id];
    fixCount++;
  }
}

// Fix top-level FAQs in data
const topFaqFix = [
  {
    question: 'What product categories does Lite-On offer?',
    answer: 'Lite-On offers four main product categories: LED Components (standard and high-power LEDs for automotive, display, and general lighting), Optocouplers (isolation solutions with 3750-5000Vrms rating), Power Management (AC-DC and DC-DC converters from 5W to 150W), and Optical Sensors (ambient light, proximity, and integrated sensors with I2C interface).',
    decisionGuide: 'Browse categories based on your application needs. Contact our FAE team for cross-category system design assistance.',
    keywords: ['product categories', 'LEDs', 'optocouplers', 'power management', 'optical sensors']
  },
  {
    question: 'How do I select the right Lite-On product for my application?',
    answer: 'Product selection depends on your specific requirements. For lighting applications, choose LED Components based on brightness, color, and package. For isolation, select Optocouplers based on isolation voltage and speed. For power conversion, choose Power Management based on input/output requirements. For sensing applications, select Optical Sensors based on detection range and environment.',
    decisionGuide: 'Use our online selection tools or contact FAE for personalized recommendations based on your specifications.',
    keywords: ['product selection', 'application requirements', 'selection guide', 'FAE support']
  },
  {
    question: 'What is the typical lead time for Lite-On products?',
    answer: 'Standard lead times vary by product family: LED Components 4-6 weeks, Optocouplers 6-8 weeks, Power Management 6-10 weeks, Optical Sensors 6-8 weeks. BeiLuo Electronics maintains strategic inventory for popular products, enabling 1-3 day delivery for samples. Volume production orders should be planned with 8-12 week lead time.',
    decisionGuide: 'Check BeiLuo stock for immediate needs. Plan production orders 8-12 weeks ahead. Contact sales for scheduling programs.',
    keywords: ['lead time', 'delivery', 'inventory', 'production planning']
  },
  {
    question: 'Does Lite-On provide automotive-grade products?',
    answer: 'Yes, Lite-On offers AEC-Q100 and AEC-Q101 qualified products across all categories. Automotive-grade LEDs, optocouplers, power modules, and sensors are available with extended temperature ranges and enhanced reliability testing for automotive OEM and Tier 1 applications.',
    decisionGuide: 'Look for AEC-Q certification in product specifications. Contact FAE for automotive qualification support and PPAP documentation.',
    keywords: ['automotive grade', 'AEC-Q100', 'AEC-Q101', 'automotive qualification']
  },
  {
    question: 'What technical support does BeiLuo Electronics provide for Lite-On products?',
    answer: 'BeiLuo Electronics provides comprehensive technical support: application engineering for product selection and circuit design, reference designs and evaluation boards, optical and thermal simulation services, failure analysis and reliability testing, and custom solution development. Our FAE team has deep expertise in Lite-On products.',
    decisionGuide: 'Contact FAE early in your design phase for optimal product selection and design support. Request reference designs for faster time-to-market.',
    keywords: ['technical support', 'FAE', 'application engineering', 'reference designs']
  }
];
data.faqs = topFaqFix;

// Apply typo fix to all strings
const fixedData = fixStrings(data);

fs.writeFileSync(filePath, JSON.stringify(fixedData, null, 2), 'utf-8');
console.log(`Fix complete. Applied ${fixCount} targeted fixes.`);