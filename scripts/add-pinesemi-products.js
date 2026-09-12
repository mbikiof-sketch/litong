/**
 * Add missing products to PineSemi categories to reach 6 products each
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'pinesemi', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Define 2 additional products for each category
const additionalProducts = {
  'sic-mosfets': [
    {
      partNumber: 'PSM1-65R020',
      name: '650V 20mΩ SiC MOSFET',
      shortDescription: '650V silicon carbide MOSFET with 20mΩ on-resistance, high-performance option for demanding applications.',
      descriptionParagraphs: [
        'The PSM1-65R020 is a 650V SiC MOSFET featuring 20mΩ typical on-resistance at Vgs=18V.',
        'This high-performance device delivers ultra-low conduction losses for maximum efficiency.',
        'Ideal for high-power onboard chargers and DC-DC converters where efficiency is critical.'
      ],
      specifications: {
        'Voltage Rating': '650V',
        'Rds(on)': '20mΩ @ Vgs=18V, Tj=25°C',
        'Continuous Current': '90A @ Tc=25°C',
        'Package': 'TO-247-4',
        'Gate Charge': '75nC',
        'Switching Energy': 'Eon=120μJ, Eoff=110μJ @ 400V/40A'
      },
      features: [
        'Ultra-low 20mΩ on-resistance',
        'Kelvin-source package for optimal switching',
        'Fast switching with minimal losses',
        'Zero reverse recovery charge',
        'High-temperature operation to 175°C',
        'AEC-Q101 qualified',
        'Excellent for high-power applications',
        'RoHS compliant'
      ],
      applications: [
        'High-power onboard chargers',
        'Traction inverters',
        'DC-DC converters',
        'Solar inverters',
        'EV charging stations'
      ],
      faeReview: {
        author: 'Dr. Zhang Wei',
        title: 'Principal FAE - Power Electronics',
        content: 'The PSM1-65R020 is our highest-performance 650V SiC MOSFET. With only 20mΩ Rds(on), this device delivers exceptional efficiency for high-current applications. I have used this in 22kW onboard charger designs where it achieved 99% peak efficiency in the PFC stage. The Kelvin-source package is essential for achieving maximum switching performance. For customers pushing the boundaries of power density and efficiency, this is the device I recommend.',
        highlight: 'Ultra-low Rds(on) for maximum efficiency applications'
      }
    },
    {
      partNumber: 'PSM2-120R025',
      name: '1200V 25mΩ SiC MOSFET',
      shortDescription: '1200V silicon carbide MOSFET with 25mΩ on-resistance, premium device for high-power traction inverters.',
      descriptionParagraphs: [
        'The PSM2-120R025 is a 1200V SiC MOSFET featuring 25mΩ typical on-resistance for high-power applications.',
        'Designed for 800V EV traction inverters delivering 150kW+ output power.',
        'The Kelvin-source package minimizes switching losses at high currents.'
      ],
      specifications: {
        'Voltage Rating': '1200V',
        'Rds(on)': '25mΩ @ Vgs=18V, Tj=25°C',
        'Continuous Current': '80A @ Tc=25°C',
        'Package': 'TO-247-4',
        'Gate Charge': '95nC',
        'Switching Energy': 'Eon=150μJ, Eoff=140μJ @ 800V/50A'
      },
      features: [
        'Ultra-low 25mΩ on-resistance at 1200V',
        'Kelvin-source TO-247-4 package',
        'Optimized for traction inverters',
        'AEC-Q101 qualified for automotive',
        'High dv/dt capability',
        'Excellent avalanche ruggedness',
        '175°C maximum junction temperature',
        'RoHS compliant'
      ],
      applications: [
        'EV traction inverters',
        'High-power DC-DC converters',
        'Heavy-duty motor drives',
        'Industrial inverters',
        'Grid-tied solar inverters'
      ],
      faeReview: {
        author: 'Li Ming',
        title: 'Senior FAE - Automotive Power',
        content: 'The PSM2-120R025 is our flagship 1200V device for EV traction inverters. In a 200kW inverter design, paralleling two of these per switch position achieved 98.8% peak efficiency. The 25mΩ Rds(on) provides excellent current capability while the Kelvin-source package minimizes switching losses. For premium EV platforms where efficiency and power density are paramount, this device is the optimal choice.',
        highlight: 'Premium 1200V device for high-power traction inverters'
      }
    }
  ],
  'igbt-modules': [
    {
      partNumber: 'PIM-150A-6',
      name: '150A 1200V IGBT Module',
      shortDescription: '150A 1200V 6-pack IGBT module for high-power industrial motor drives and inverters.',
      descriptionParagraphs: [
        'The PIM-150A-6 is a 150A 1200V 6-pack IGBT module for high-power applications.',
        'Designed for 50-75kW motor drives with excellent thermal performance.',
        'Features low Vce(sat) and integrated fast recovery diodes.'
      ],
      specifications: {
        'Voltage Rating': '1200V',
        'Current Rating': '150A',
        'Vce(sat)': '1.8V @ 150A',
        'Package': 'Standard Module',
        'Isolation': '2500V AC',
        'Temperature Range': '-40°C to +150°C'
      },
      features: [
        '150A continuous current capability',
        'Low saturation voltage',
        'Fast recovery anti-parallel diodes',
        'Compact module design',
        'Excellent thermal performance',
        'High reliability construction',
        'Easy mounting',
        'RoHS compliant'
      ],
      applications: [
        'High-power motor drives',
        'Industrial inverters',
        'UPS systems',
        'Wind power converters',
        'Large HVAC systems'
      ],
      faeReview: {
        author: 'Wang Tao',
        title: 'Senior FAE - Power Modules',
        content: 'The PIM-150A-6 is our highest current standard IGBT module. I have specified this for 75kW pump drives and wind power converters with excellent results. The 150A rating provides substantial margin for 100-120A continuous operation. While SiC is gaining traction, this IGBT module remains cost-effective for applications where switching frequency is moderate. The module construction is robust and field-proven.',
        highlight: 'High-current IGBT module for demanding industrial applications'
      }
    },
    {
      partNumber: 'PIM-35A-6',
      name: '35A 1200V IGBT Module',
      shortDescription: '35A 1200V 6-pack IGBT module for small motor drives and cost-sensitive applications.',
      descriptionParagraphs: [
        'The PIM-35A-6 is a 35A 1200V 6-pack IGBT module for small motor drive applications.',
        'Cost-effective solution for 7.5-15kW motor drives.',
        'Compact footprint ideal for space-constrained designs.'
      ],
      specifications: {
        'Voltage Rating': '1200V',
        'Current Rating': '35A',
        'Vce(sat)': '1.5V @ 35A',
        'Package': 'Compact Module',
        'Isolation': '2500V AC',
        'Temperature Range': '-40°C to +150°C'
      },
      features: [
        '35A continuous current',
        'Very low saturation voltage',
        'Compact module footprint',
        'Integrated anti-parallel diodes',
        'Cost-effective design',
        'Good thermal performance',
        'Easy to drive',
        'RoHS compliant'
      ],
      applications: [
        'Small motor drives',
        'Fan and pump controls',
        'Conveyor systems',
        'Machine tools',
        'HVAC fan drives'
      ],
      faeReview: {
        author: 'Wang Tao',
        title: 'Senior FAE - Power Modules',
        content: 'The PIM-35A-6 is perfect for small motor drives where cost matters. I have used this extensively in fan and pump applications from 5-15kW. The compact size saves PCB space and the low Vce(sat) keeps efficiency reasonable. For basic motor control applications without extreme performance requirements, this module delivers excellent value.',
        highlight: 'Cost-effective IGBT module for small motor drives'
      }
    }
  ],
  'intelligent-power-modules': [
    {
      partNumber: 'IPM-S30A-6',
      name: '30A 600V Standard IPM',
      shortDescription: '30A 600V intelligent power module with integrated gate drivers and protection for motor drives.',
      descriptionParagraphs: [
        'The IPM-S30A-6 is a 30A 600V intelligent power module with integrated gate drivers.',
        'Includes built-in protection features: UVLO, OCP, OTP, and fault reporting.',
        'Simplifies motor drive design with single-module solution.'
      ],
      specifications: {
        'Voltage Rating': '600V',
        'Current Rating': '30A',
        'Control Voltage': '15V',
        'Package': 'IPM Module',
        'Isolation': '2500V AC',
        'Temperature Range': '-20°C to +100°C'
      },
      features: [
        '30A IGBTs with integrated drivers',
        'Built-in UVLO protection',
        'Overcurrent protection',
        'Overtemperature protection',
        'Fault status output',
        'Single control supply',
        'Compact design',
        'RoHS compliant'
      ],
      applications: [
        'Home appliances',
        'Small motor drives',
        'Fan controls',
        'Pump drives',
        'Power tools'
      ],
      faeReview: {
        author: 'Chen Hua',
        title: 'FAE - Motor Drive Systems',
        content: 'The IPM-S30A-6 is an excellent integrated solution for small motor drives. The built-in protection features and single-supply operation significantly simplify design. I have used this in washing machine and dishwasher designs with great success. The 30A rating handles typical home appliance motors with ease. For customers new to motor drive design, this IPM accelerates development time.',
        highlight: 'Integrated solution simplifies motor drive design'
      }
    },
    {
      partNumber: 'IPM-A25A-6',
      name: '25A 600V Advanced IPM',
      shortDescription: '25A 600V advanced intelligent power module with enhanced protection and control features.',
      descriptionParagraphs: [
        'The IPM-A25A-6 is a 25A 600V advanced IPM with enhanced features for demanding applications.',
        'Includes advanced protection: desaturation detection, precise current sensing, and temperature monitoring.',
        'Optimized for servo drives and precision motor control.'
      ],
      specifications: {
        'Voltage Rating': '600V',
        'Current Rating': '25A',
        'Control Voltage': '15V',
        'Package': 'Advanced IPM',
        'Isolation': '2500V AC',
        'Temperature Range': '-20°C to +100°C'
      },
      features: [
        '25A IGBTs with advanced drivers',
        'Desaturation protection',
        'Integrated current sensing',
        'Temperature monitoring',
        'Fault diagnostics',
        'Adjustable protection thresholds',
        'High-speed switching',
        'RoHS compliant'
      ],
      applications: [
        'Servo drives',
        'Precision motor control',
        'Industrial automation',
        'Robotics',
        'CNC machines'
      ],
      faeReview: {
        author: 'Chen Hua',
        title: 'FAE - Motor Drive Systems',
        content: 'The IPM-A25A-6 offers advanced features for precision motor control applications. The integrated current sensing and desaturation protection provide excellent fault protection. I have specified this for servo drive applications requiring precise torque control. While the current rating is lower than standard IPMs, the advanced features justify the premium for demanding applications.',
        highlight: 'Advanced IPM with precision control features'
      }
    }
  ],
  'sic-diodes': [
    {
      partNumber: 'PSD1-65H080',
      name: '650V 80A SiC Schottky Diode',
      shortDescription: '650V 80A silicon carbide Schottky diode with zero reverse recovery for high-frequency applications.',
      descriptionParagraphs: [
        'The PSD1-65H080 is a 650V 80A SiC Schottky diode with zero reverse recovery charge.',
        'Ideal for high-frequency PFC and rectifier applications.',
        'Low forward voltage drop minimizes conduction losses.'
      ],
      specifications: {
        'Voltage Rating': '650V',
        'Current Rating': '80A',
        'Vf': '1.5V @ 80A',
        'Package': 'TO-247-2',
        'Qrr': '0nC',
        'Temperature Range': '-55°C to +175°C'
      },
      features: [
        'Zero reverse recovery charge',
        'Low forward voltage drop',
        'High surge current capability',
        'Temperature-independent switching',
        'Low switching losses',
        'High-frequency capability',
        '175°C maximum junction temperature',
        'RoHS compliant'
      ],
      applications: [
        'PFC boost diodes',
        'Output rectifiers',
        'Freewheeling diodes',
        'Solar inverters',
        'SMPS power supplies'
      ],
      faeReview: {
        author: 'Dr. Zhang Wei',
        title: 'Principal FAE - Power Electronics',
        content: 'The PSD1-65H080 is our highest current 650V SiC diode. The zero reverse recovery makes it perfect for PFC applications where switching losses dominate. I have used this in 11kW OBC designs where it eliminated reverse recovery losses completely. The 80A rating provides margin for high-power designs. For any high-frequency rectification application, SiC Schottky diodes are the clear choice over silicon.',
        highlight: 'High-current SiC diode with zero reverse recovery'
      }
    },
    {
      partNumber: 'PSD2-120H060',
      name: '1200V 60A SiC Schottky Diode',
      shortDescription: '1200V 60A silicon carbide Schottky diode for high-voltage rectification applications.',
      descriptionParagraphs: [
        'The PSD2-120H060 is a 1200V 60A SiC Schottky diode for high-voltage applications.',
        'Features zero reverse recovery and low switching losses.',
        'Ideal for 800V EV traction inverter rectifiers and boost stages.'
      ],
      specifications: {
        'Voltage Rating': '1200V',
        'Current Rating': '60A',
        'Vf': '1.6V @ 60A',
        'Package': 'TO-247-2',
        'Qrr': '0nC',
        'Temperature Range': '-55°C to +175°C'
      },
      features: [
        'Zero reverse recovery charge',
        '1200V blocking voltage',
        'Low forward voltage',
        'High surge current',
        'Temperature-stable switching',
        'Low EMI generation',
        '175°C operation',
        'RoHS compliant'
      ],
      applications: [
        'Traction inverter rectifiers',
        'Boost PFC diodes',
        'High-voltage rectifiers',
        'Solar inverters',
        'EV charging stations'
      ],
      faeReview: {
        author: 'Li Ming',
        title: 'Senior FAE - Automotive Power',
        content: 'The PSD2-120H060 is essential for 1200V SiC applications. In 800V traction inverters, this diode eliminates reverse recovery issues that plague silicon diodes. I have used this in both rectifier and freewheeling applications with excellent results. The 60A rating handles most traction inverter needs, and the TO-247 package is easy to work with.',
        highlight: '1200V SiC diode for high-voltage applications'
      }
    }
  ]
};

// Function to generate alternative parts
function generateAlternativeParts(partNumber, category) {
  const alternatives = {
    'PSM1-65R020': [
      { partNumber: 'PSM1-65R035', brand: 'PineSemi', specifications: { voltage: '650V', rdsOn: '35mΩ', current: '60A' }, comparison: 'Higher Rds(on), lower cost', reason: 'Cost savings', useCase: 'Use for moderate current applications', link: '#' },
      { partNumber: 'PSM1-65R060', brand: 'PineSemi', specifications: { voltage: '650V', rdsOn: '60mΩ', current: '40A' }, comparison: 'Much higher Rds(on)', reason: 'Budget option', useCase: 'Use for cost-sensitive designs', link: '#' }
    ],
    'PSM2-120R025': [
      { partNumber: 'PSM2-120R040', brand: 'PineSemi', specifications: { voltage: '1200V', rdsOn: '40mΩ', current: '55A' }, comparison: 'Higher Rds(on), lower cost', reason: 'Cost-performance balance', useCase: 'Use for moderate power applications', link: '#' },
      { partNumber: 'PSM2-120R080', brand: 'PineSemi', specifications: { voltage: '1200V', rdsOn: '80mΩ', current: '30A' }, comparison: 'Much higher Rds(on)', reason: 'Economy option', useCase: 'Use for auxiliary systems', link: '#' }
    ],
    'PIM-150A-6': [
      { partNumber: 'PIM-100A-6', brand: 'PineSemi', specifications: { voltage: '1200V', current: '100A' }, comparison: 'Lower current', reason: 'Lower cost', useCase: 'Use for medium power drives', link: '#' },
      { partNumber: 'PIM-75A-6', brand: 'PineSemi', specifications: { voltage: '1200V', current: '75A' }, comparison: 'Much lower current', reason: 'Budget option', useCase: 'Use for smaller motors', link: '#' }
    ],
    'PIM-35A-6': [
      { partNumber: 'PIM-50A-6', brand: 'PineSemi', specifications: { voltage: '1200V', current: '50A' }, comparison: 'Higher current', reason: 'More margin', useCase: 'Use when more power needed', link: '#' },
      { partNumber: 'PIM-75A-6', brand: 'PineSemi', specifications: { voltage: '1200V', current: '75A' }, comparison: 'Much higher current', reason: 'Upgrade path', useCase: 'Use for larger motors', link: '#' }
    ],
    'IPM-S30A-6': [
      { partNumber: 'IPM-S20A-6', brand: 'PineSemi', specifications: { voltage: '600V', current: '20A' }, comparison: 'Lower current', reason: 'Lower cost', useCase: 'Use for smaller motors', link: '#' },
      { partNumber: 'IPM-S15A-6', brand: 'PineSemi', specifications: { voltage: '600V', current: '15A' }, comparison: 'Much lower current', reason: 'Budget option', useCase: 'Use for light loads', link: '#' }
    ],
    'IPM-A25A-6': [
      { partNumber: 'IPM-A15A-6', brand: 'PineSemi', specifications: { voltage: '600V', current: '15A' }, comparison: 'Lower current', reason: 'Lower cost', useCase: 'Use for smaller servos', link: '#' },
      { partNumber: 'IPM-S30A-6', brand: 'PineSemi', specifications: { voltage: '600V', current: '30A' }, comparison: 'Standard IPM with higher current', reason: 'More power', useCase: 'Use when current is priority', link: '#' }
    ],
    'PSD1-65H080': [
      { partNumber: 'PSD1-65H060', brand: 'PineSemi', specifications: { voltage: '650V', current: '60A' }, comparison: 'Lower current', reason: 'Lower cost', useCase: 'Use for moderate current', link: '#' },
      { partNumber: 'PSD1-65H040', brand: 'PineSemi', specifications: { voltage: '650V', current: '40A' }, comparison: 'Much lower current', reason: 'Budget option', useCase: 'Use for lower power', link: '#' }
    ],
    'PSD2-120H060': [
      { partNumber: 'PSD2-120H040', brand: 'PineSemi', specifications: { voltage: '1200V', current: '40A' }, comparison: 'Lower current', reason: 'Lower cost', useCase: 'Use for moderate current', link: '#' },
      { partNumber: 'PSD1-65H060', brand: 'PineSemi', specifications: { voltage: '650V', current: '60A' }, comparison: 'Lower voltage, higher current', reason: 'Different voltage class', useCase: 'Use for 650V applications', link: '#' }
    ]
  };
  
  return alternatives[partNumber] || [{ partNumber: 'ALT-1', brand: 'PineSemi', specifications: {}, comparison: 'Alternative', reason: 'Alternative option', useCase: 'General purpose', link: '#' }];
}

// Function to generate companion parts
function generateCompanionParts(partNumber, category) {
  const companionMap = {
    'PSM1-65R020': [
      { partNumber: 'PSD1-65H080', link: '#', description: '650V 80A SiC diode', category: 'Companion Diodes' },
      { partNumber: 'PGD-25A', link: '#', description: 'High-current gate driver', category: 'Gate Drivers' },
      { partNumber: 'TIM-PAD-247', link: '#', description: 'Thermal pad TO-247', category: 'Thermal' }
    ],
    'PSM2-120R025': [
      { partNumber: 'PSD2-120H060', link: '#', description: '1200V 60A SiC diode', category: 'Companion Diodes' },
      { partNumber: 'PGD-25A', link: '#', description: 'High-current gate driver', category: 'Gate Drivers' },
      { partNumber: 'TIM-PAD-247', link: '#', description: 'Thermal pad TO-247', category: 'Thermal' }
    ],
    'PIM-150A-6': [
      { partNumber: 'PGD-IGBT-3A', link: '#', description: 'High-current IGBT driver', category: 'Gate Drivers' },
      { partNumber: 'DCB-CAP-600', link: '#', description: 'DC link capacitor 600V', category: 'Passives' },
      { partNumber: 'HEATSINK-150A', link: '#', description: 'Heatsink 150A', category: 'Thermal' }
    ],
    'PIM-35A-6': [
      { partNumber: 'PGD-IGBT-1A', link: '#', description: 'Standard IGBT driver', category: 'Gate Drivers' },
      { partNumber: 'DCB-CAP-450', link: '#', description: 'DC link capacitor 450V', category: 'Passives' },
      { partNumber: 'HEATSINK-35A', link: '#', description: 'Compact heatsink', category: 'Thermal' }
    ],
    'IPM-S30A-6': [
      { partNumber: 'MCU-ARM-M0', link: '#', description: 'Motor control MCU', category: 'Controllers' },
      { partNumber: 'CAP-FILM-DC', link: '#', description: 'Film capacitor', category: 'Passives' },
      { partNumber: 'HEATSINK-IPM-S', link: '#', description: 'IPM heatsink', category: 'Thermal' }
    ],
    'IPM-A25A-6': [
      { partNumber: 'MCU-ARM-M4', link: '#', description: 'Advanced motor control MCU', category: 'Controllers' },
      { partNumber: 'SENSOR-CURRENT', link: '#', description: 'Current sensor', category: 'Sensors' },
      { partNumber: 'HEATSINK-IPM-A', link: '#', description: 'Advanced IPM heatsink', category: 'Thermal' }
    ],
    'PSD1-65H080': [
      { partNumber: 'PSM1-65R020', link: '#', description: 'Matching SiC MOSFET', category: 'Companion MOSFETs' },
      { partNumber: 'TIM-PAD-247', link: '#', description: 'Thermal pad', category: 'Thermal' },
      { partNumber: 'HEATSINK-DIODE', link: '#', description: 'Diode heatsink', category: 'Thermal' }
    ],
    'PSD2-120H060': [
      { partNumber: 'PSM2-120R025', link: '#', description: 'Matching SiC MOSFET', category: 'Companion MOSFETs' },
      { partNumber: 'TIM-PAD-247', link: '#', description: 'Thermal pad', category: 'Thermal' },
      { partNumber: 'HEATSINK-DIODE', link: '#', description: 'Diode heatsink', category: 'Thermal' }
    ]
  };
  
  return companionMap[partNumber] || [
    { partNumber: 'DRIVER-GEN', link: '#', description: 'Gate driver', category: 'Drivers' },
    { partNumber: 'HEATSINK-GEN', link: '#', description: 'Heatsink', category: 'Thermal' },
    { partNumber: 'CAP-GEN', link: '#', description: 'Capacitor', category: 'Passives' }
  ];
}

// Function to generate FAQs
function generateFAQs(partNumber, category) {
  return [
    {
      question: `What is the voltage rating of ${partNumber}?`,
      answer: `${partNumber} is rated for reliable operation in its specified voltage class. Please refer to the datasheet for detailed voltage ratings and derating guidelines.`,
      decisionGuide: 'Ensure voltage rating meets your application requirements with adequate margin.',
      keywords: ['voltage rating', 'breakdown voltage', 'safety margin']
    },
    {
      question: `What is the current capability of ${partNumber}?`,
      answer: `${partNumber} provides excellent current handling with proper thermal management. Continuous and peak current ratings are specified in the datasheet under defined thermal conditions.`,
      decisionGuide: 'Size for continuous operation with adequate thermal margin.',
      keywords: ['current rating', 'continuous current', 'thermal design']
    },
    {
      question: `What thermal management is required for ${partNumber}?`,
      answer: `Proper thermal management is essential for ${partNumber}. Use appropriate heatsinks, thermal interface materials, and ensure adequate cooling for reliable operation.`,
      decisionGuide: 'Contact our FAE team for thermal design support.',
      keywords: ['thermal management', 'heatsink', 'cooling']
    },
    {
      question: `What protection features are recommended with ${partNumber}?`,
      answer: `${partNumber} should be used with appropriate protection circuits. Please refer to the datasheet and application notes for recommended protection schemes.`,
      decisionGuide: 'Implement comprehensive protection for reliable operation.',
      keywords: ['protection', 'safety features', 'fault protection']
    },
    {
      question: `Where can I get technical support for ${partNumber}?`,
      answer: 'BeiLuo Electronics provides comprehensive technical support for PineSemi products including application guidance, schematic review, and debugging assistance. Contact our FAE team for personalized support.',
      decisionGuide: 'Contact our FAE team early in your design cycle.',
      keywords: ['technical support', 'FAE', 'application support']
    }
  ];
}

// Add products to each category
let totalAdded = 0;
data.categories.forEach(category => {
  const categoryId = category.id;
  const newProducts = additionalProducts[categoryId];
  
  if (newProducts) {
    newProducts.forEach(prod => {
      // Generate ID from part number
      prod.id = prod.partNumber.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      // Add category
      prod.category = category.name;
      
      // Add image and datasheet paths
      prod.image = `/assets/brands/pinesemi/${prod.id}.jpg`;
      prod.datasheet = `/assets/brands/pinesemi/datasheets/${prod.partNumber}.pdf`;
      
      // Add alternative parts
      prod.alternativeParts = generateAlternativeParts(prod.partNumber, categoryId);
      
      // Add companion parts
      prod.companionParts = generateCompanionParts(prod.partNumber, categoryId);
      
      // Add FAQs
      prod.faqs = generateFAQs(prod.partNumber, categoryId);
      
      category.products.push(prod);
      totalAdded++;
      console.log(`Added ${prod.partNumber} to ${category.name}`);
    });
    
    // Update productCount
    category.productCount = category.products.length;
  }
});

// Save updated file
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log(`\n✅ Added ${totalAdded} products to PineSemi categories`);
console.log(`\n📊 Updated product counts:`);
data.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products.length} products`);
});
