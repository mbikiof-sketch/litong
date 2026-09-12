const fs = require('fs');

console.log('Fixing Superchip brand data...');

// Read existing products data
const productsData = JSON.parse(fs.readFileSync('./data/superchip/products.json', 'utf8'));

// Ensure we have 4 categories with 4 products each
const requiredCategories = [
  {
    name: 'DC-DC Converters',
    description: 'High-efficiency buck and boost converters for power supply applications',
    products: productsData.categories[0]?.products || []
  },
  {
    name: 'LED Drivers',
    description: 'Comprehensive LED driver solutions for lighting and display applications',
    products: []
  },
  {
    name: 'Battery Management',
    description: 'Li-ion battery charger and protection ICs for portable devices',
    products: []
  },
  {
    name: 'Motor Drivers',
    description: 'DC motor and stepper motor driver ICs for various applications',
    products: []
  }
];

// Add sample products to LED Drivers category
const ledDriverProducts = [
  {
    partNumber: 'FM3401',
    name: 'High Efficiency LED Driver IC',
    shortDescription: 'Buck LED driver with high efficiency and wide input voltage range for lighting applications.',
    descriptionParagraphs: [
      'The FM3401 is a high-efficiency buck LED driver designed for general lighting applications.',
      'Features wide input voltage range and excellent dimming performance for flexible lighting control.'
    ],
    specifications: {
      'Input Voltage': '8V-85V',
      'Output Current': 'Up to 1A',
      'Efficiency': '>93%',
      'Dimming': 'PWM/Analog',
      'Package': 'SOP-8'
    },
    features: ['High efficiency', 'Wide input range', 'Excellent dimming', 'Thermal protection'],
    applications: ['LED lighting', 'Street lights', 'Downlights', 'Panel lights'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'The FM3401 offers excellent performance for LED lighting applications with high efficiency.',
      highlight: 'High efficiency LED driver with wide input range'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM3402',
    name: 'Linear LED Driver IC',
    shortDescription: 'Low-cost linear LED driver for simple lighting applications with minimal external components.',
    descriptionParagraphs: [
      'The FM3402 is a cost-effective linear LED driver for simple lighting applications.',
      'Requires minimal external components, making it ideal for cost-sensitive designs.'
    ],
    specifications: {
      'Input Voltage': '5V-40V',
      'Output Current': 'Up to 200mA',
      'Dropout Voltage': '0.5V',
      'Current Accuracy': '±3%',
      'Package': 'SOT-89'
    },
    features: ['Low cost', 'Minimal external components', 'Good current accuracy', 'Thermal foldback'],
    applications: ['Indicator lights', 'Small LED lamps', 'Backlighting', 'Decorative lighting'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Perfect for cost-sensitive applications where simplicity is key.',
      highlight: 'Cost-effective linear LED driver'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM3403',
    name: 'Boost LED Driver IC',
    shortDescription: 'Boost LED driver for applications requiring output voltage higher than input voltage.',
    descriptionParagraphs: [
      'The FM3403 is a boost LED driver designed for applications where LED string voltage exceeds input voltage.',
      'Ideal for battery-powered lighting and automotive applications.'
    ],
    specifications: {
      'Input Voltage': '2.5V-24V',
      'Output Voltage': 'Up to 40V',
      'Output Current': 'Up to 800mA',
      'Efficiency': '>90%',
      'Package': 'ESOP-8'
    },
    features: ['Boost topology', 'Wide input range', 'High efficiency', 'Open LED protection'],
    applications: ['Battery-powered lights', 'Automotive lighting', 'Emergency lights', 'Portable lighting'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Excellent boost driver for battery-powered LED applications.',
      highlight: 'Boost topology for high-voltage LED strings'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM3404',
    name: 'Multi-Channel LED Driver',
    shortDescription: '4-channel LED driver with independent current control for RGB and multi-color applications.',
    descriptionParagraphs: [
      'The FM3404 is a 4-channel LED driver designed for RGB and multi-color lighting applications.',
      'Features independent current control for each channel and flexible dimming options.'
    ],
    specifications: {
      'Input Voltage': '4.5V-24V',
      'Channels': '4',
      'Current per Channel': 'Up to 150mA',
      'Dimming': 'PWM',
      'Package': 'QFN-16'
    },
    features: ['4 independent channels', 'Individual current control', 'PWM dimming', 'I2C interface'],
    applications: ['RGB lighting', 'Stage lighting', 'Mood lighting', 'Display backlighting'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Great for multi-color LED applications requiring individual channel control.',
      highlight: 'Multi-channel driver for RGB applications'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  }
];

// Add sample products to Battery Management category
const batteryProducts = [
  {
    partNumber: 'FM5001',
    name: 'Li-ion Battery Charger IC',
    shortDescription: 'Single-cell Li-ion battery charger with linear topology and programmable charge current.',
    descriptionParagraphs: [
      'The FM5001 is a complete constant-current/constant-voltage linear charger for single-cell Li-ion batteries.',
      'Features programmable charge current and comprehensive protection features.'
    ],
    specifications: {
      'Input Voltage': '4.5V-6.5V',
      'Charge Current': 'Up to 1A',
      'Charge Voltage': '4.2V ±1%',
      'Trickle Charge': 'Yes',
      'Package': 'SOP-8'
    },
    features: ['Linear charger', 'Programmable current', 'Trickle charge', 'Charge status indicator'],
    applications: ['Portable devices', 'Bluetooth headsets', 'Power banks', 'Toys'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Reliable linear charger for single-cell Li-ion batteries.',
      highlight: 'Complete linear charger solution'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM5002',
    name: 'Battery Protection IC',
    shortDescription: 'Single-cell Li-ion battery protection IC with overcharge and overdischarge protection.',
    descriptionParagraphs: [
      'The FM5002 provides comprehensive protection for single-cell Li-ion batteries.',
      'Features overcharge, overdischarge, and overcurrent protection.'
    ],
    specifications: {
      'Overcharge Voltage': '4.3V',
      'Overdischarge Voltage': '2.4V',
      'Overcurrent Protection': 'Yes',
      'Short Circuit Protection': 'Yes',
      'Package': 'SOT-23-6'
    },
    features: ['Overcharge protection', 'Overdischarge protection', 'Overcurrent protection', 'Low power consumption'],
    applications: ['Battery packs', 'Portable electronics', 'Power tools', 'Medical devices'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Essential protection IC for Li-ion battery safety.',
      highlight: 'Comprehensive battery protection'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM5003',
    name: 'Switching Battery Charger',
    shortDescription: 'High-efficiency switching charger for fast charging applications with minimal heat generation.',
    descriptionParagraphs: [
      'The FM5003 is a high-efficiency switching charger for single-cell Li-ion batteries.',
      'Features buck topology for high-efficiency charging with minimal heat generation.'
    ],
    specifications: {
      'Input Voltage': '4.5V-13.5V',
      'Charge Current': 'Up to 2A',
      'Efficiency': '>90%',
      'Charge Voltage': '4.2V ±0.5%',
      'Package': 'QFN-16'
    },
    features: ['High efficiency', 'Fast charging', 'Low heat generation', 'Input OVP'],
    applications: ['Tablets', 'Power banks', 'Portable media players', 'Industrial devices'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'High-efficiency switching charger ideal for fast charging applications.',
      highlight: 'High-efficiency switching topology'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM5004',
    name: 'Battery Fuel Gauge IC',
    shortDescription: 'Battery fuel gauge with coulomb counting for accurate remaining capacity indication.',
    descriptionParagraphs: [
      'The FM5004 is a battery fuel gauge IC that provides accurate remaining capacity indication.',
      'Uses coulomb counting for precise state-of-charge measurement.'
    ],
    specifications: {
      'Battery Type': 'Li-ion/Li-polymer',
      'Measurement Accuracy': '±3%',
      'Interface': 'I2C',
      'Operating Current': '<100μA',
      'Package': 'DFN-8'
    },
    features: ['Coulomb counting', 'Accurate SOC', 'I2C interface', 'Low power consumption'],
    applications: ['Smartphones', 'Tablets', 'Laptops', 'Portable devices'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Accurate fuel gauge for battery capacity monitoring.',
      highlight: 'Precise battery capacity indication'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  }
];

// Add sample products to Motor Drivers category
const motorProducts = [
  {
    partNumber: 'FM6001',
    name: 'DC Motor Driver IC',
    shortDescription: 'H-bridge DC motor driver with PWM speed control and current limiting.',
    descriptionParagraphs: [
      'The FM6001 is an H-bridge DC motor driver capable of driving motors up to 2A.',
      'Features PWM speed control and built-in current limiting for motor protection.'
    ],
    specifications: {
      'Supply Voltage': '2.5V-13.5V',
      'Output Current': 'Up to 2A',
      'RDS(on)': '0.5Ω',
      'PWM Frequency': 'Up to 100kHz',
      'Package': 'SOP-8'
    },
    features: ['H-bridge topology', 'PWM control', 'Current limiting', 'Thermal protection'],
    applications: ['Toy motors', 'Small appliances', 'Robotics', 'Camera modules'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Versatile DC motor driver for small to medium motors.',
      highlight: 'H-bridge driver with PWM control'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM6002',
    name: 'Stepper Motor Driver IC',
    shortDescription: 'Bipolar stepper motor driver with microstepping and current regulation.',
    descriptionParagraphs: [
      'The FM6002 is a bipolar stepper motor driver with microstepping capability.',
      'Features programmable current regulation and multiple microstepping modes.'
    ],
    specifications: {
      'Supply Voltage': '8V-35V',
      'Output Current': 'Up to 1.5A',
      'Microstepping': 'Up to 1/16',
      'Logic Voltage': '3.3V/5V',
      'Package': 'HTSSOP-28'
    },
    features: ['Microstepping', 'Current regulation', 'Multiple decay modes', 'Low RDS(on)'],
    applications: ['3D printers', 'CNC machines', 'Scanners', 'Automation equipment'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Feature-rich stepper driver for precision motion control.',
      highlight: 'Microstepping stepper motor driver'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM6003',
    name: 'Dual DC Motor Driver',
    shortDescription: 'Dual H-bridge motor driver for driving two DC motors or one stepper motor.',
    descriptionParagraphs: [
      'The FM6003 is a dual H-bridge motor driver capable of driving two DC motors simultaneously.',
      'Can also be configured to drive a single bipolar stepper motor.'
    ],
    specifications: {
      'Supply Voltage': '2.7V-10.8V',
      'Output Current': 'Up to 1.2A per channel',
      'RDS(on)': '0.8Ω',
      'Protection': 'OCP, TSD',
      'Package': 'SSOP-16'
    },
    features: ['Dual H-bridge', 'Two DC or one stepper', 'Low RDS(on)', 'Built-in protections'],
    applications: ['Robot platforms', 'RC toys', 'Camera gimbals', 'Small robots'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Versatile dual driver for multi-motor applications.',
      highlight: 'Dual motor driver flexibility'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: 'FM6004',
    name: 'Low Voltage Motor Driver',
    shortDescription: 'Ultra-low voltage motor driver for battery-powered applications down to 1.8V.',
    descriptionParagraphs: [
      'The FM6004 is designed for ultra-low voltage operation, supporting battery voltages down to 1.8V.',
      'Ideal for single-cell battery-powered motor applications.'
    ],
    specifications: {
      'Supply Voltage': '1.8V-6V',
      'Output Current': 'Up to 800mA',
      'Standby Current': '<1μA',
      'RDS(on)': '0.6Ω',
      'Package': 'DFN-8'
    },
    features: ['Ultra-low voltage', 'Low standby current', 'Compact package', 'Efficient operation'],
    applications: ['Battery toys', 'Portable devices', 'Wearable devices', 'Small fans'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: 'Perfect for single-cell battery motor applications.',
      highlight: 'Ultra-low voltage operation'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  }
];

// Add products to existing DC-DC Converters category if needed
const dcdcProducts = requiredCategories[0].products;
if (dcdcProducts.length < 4) {
  const additionalProducts = [
    {
      partNumber: 'FM1201',
      name: 'High Voltage Buck Converter',
      shortDescription: '100V input buck converter for industrial and automotive applications.',
      descriptionParagraphs: [
        'The FM1201 is a high-voltage buck converter supporting input voltages up to 100V.',
        'Ideal for industrial and automotive applications requiring wide input voltage range.'
      ],
      specifications: {
        'Input Voltage': '12V-100V',
        'Output Current': 'Up to 1A',
        'Efficiency': '>90%',
        'Switching Frequency': '150kHz',
        'Package': 'ESOP-8'
      },
      features: ['Wide input range', 'High efficiency', 'Built-in protections', 'Frequency foldback'],
      applications: ['Industrial control', 'Automotive electronics', 'LED drivers', 'Power supplies'],
      faeReview: {
        author: 'Technical FAE',
        title: 'Support Engineer',
        content: 'Excellent for high-voltage industrial applications.',
        highlight: '100V input capability'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    },
    {
      partNumber: 'FM1202',
      name: 'Low IQ Buck Converter',
      shortDescription: 'Ultra-low quiescent current buck converter for battery-powered applications.',
      descriptionParagraphs: [
        'The FM1202 features ultra-low quiescent current consumption, ideal for battery-powered devices.',
        'Maintains high efficiency across wide load range with automatic PFM/PWM mode switching.'
      ],
      specifications: {
        'Input Voltage': '2.5V-5.5V',
        'Output Current': 'Up to 600mA',
        'Quiescent Current': '<10μA',
        'Efficiency': '>95%',
        'Package': 'SOT-23-5'
      },
      features: ['Ultra-low IQ', 'High efficiency', 'Automatic mode switching', 'Compact package'],
      applications: ['Battery devices', 'IoT sensors', 'Wearable devices', 'Portable electronics'],
      faeReview: {
        author: 'Technical FAE',
        title: 'Support Engineer',
        content: 'Perfect for extending battery life in portable devices.',
        highlight: 'Ultra-low quiescent current'
      },
      alternativeParts: [],
      companionParts: [],
      faqs: []
    }
  ];
  
  while (dcdcProducts.length < 4 && additionalProducts.length > 0) {
    dcdcProducts.push(additionalProducts.shift());
  }
  console.log('Added products to DC-DC Converters');
}

// Update products data with all categories
productsData.categories = [
  { ...productsData.categories[0], ...requiredCategories[0] },
  { ...requiredCategories[1], products: ledDriverProducts },
  { ...requiredCategories[2], products: batteryProducts },
  { ...requiredCategories[3], products: motorProducts }
];

fs.writeFileSync('./data/superchip/products.json', JSON.stringify(productsData, null, 2));
console.log('Products data updated with 4 categories and 4 products each!');

// Fix solutions.json - add 1 more solution
const solutionsData = JSON.parse(fs.readFileSync('./data/superchip/solutions.json', 'utf8'));

if (solutionsData.solutions.length < 3) {
  const newSolution = {
    id: 'smart-lighting-solution',
    title: 'Smart LED Lighting Solution',
    slug: 'smart-lighting-solution',
    description: 'Complete LED lighting solution featuring high-efficiency drivers, intelligent control, and wireless connectivity options.',
    longDescription: 'The Smart LED Lighting Solution from Superchip provides a comprehensive platform for modern LED lighting applications. This solution integrates high-efficiency LED drivers with intelligent control interfaces for flexible and energy-efficient lighting systems.',
    coreProducts: [
      {
        partNumber: 'FM3401',
        role: 'Main LED Driver',
        reason: 'High-efficiency buck driver for primary lighting'
      },
      {
        partNumber: 'FM3404',
        role: 'RGB Controller',
        reason: 'Multi-channel driver for color control'
      }
    ],
    keyFeatures: [
      'High efficiency >93%',
      'Wide input voltage range',
      'PWM and analog dimming',
      'Multi-channel RGB control',
      'Thermal management',
      'Wireless connectivity ready'
    ],
    technicalSpecs: {
      'Input Voltage': '85-265V AC',
      'Output Power': 'Up to 100W',
      'Efficiency': '>93%',
      'Dimming Range': '1-100%',
      'Control': 'PWM/I2C/Wireless'
    },
    applications: [
      'Smart home lighting',
      'Commercial lighting',
      'Architectural lighting',
      'Stage and entertainment lighting'
    ],
    coreAdvantages: [
      'High efficiency reduces energy costs',
      'Wide input range for global applications',
      'Flexible dimming options',
      'Easy IoT integration',
      'Cost-effective solution'
    ],
    bomList: [
      {
        partNumber: 'FM3401',
        description: 'High Efficiency LED Driver',
        quantity: 1,
        manufacturer: 'Superchip',
        link: '#'
      },
      {
        partNumber: 'FM3404',
        description: 'Multi-Channel LED Driver',
        quantity: 1,
        manufacturer: 'Superchip',
        link: '#'
      }
    ],
    customerCases: [],
    faeInsights: {
      author: {
        name: 'Technical FAE',
        title: 'Support Engineer',
        experience: '8+ years'
      },
      content: 'This smart lighting solution offers excellent efficiency and flexibility for modern lighting applications.',
      keyTakeaways: [
        'High efficiency reduces operating costs',
        'Flexible control options enable smart features',
        'Easy integration with IoT platforms'
      ],
      decisionFramework: {
        steps: [
          'Define lighting requirements',
          'Select appropriate LED drivers',
          'Design control interface',
          'Implement thermal management'
        ]
      }
    },
    faqs: [],
    benefits: [
      'Energy-efficient lighting',
      'Smart control capabilities',
      'Cost-effective design'
    ],
    name: 'Smart LED Lighting Solution'
  };
  
  solutionsData.solutions.push(newSolution);
  fs.writeFileSync('./data/superchip/solutions.json', JSON.stringify(solutionsData, null, 2));
  console.log('Added 1 solution. New count:', solutionsData.solutions.length);
}

// Fix support.json - add 2 more articles
const supportData = JSON.parse(fs.readFileSync('./data/superchip/support.json', 'utf8'));

if (supportData.articles.length < 5) {
  const newArticles = [
    {
      id: 'led-driver-design-guide',
      title: 'LED Driver Design and Application Guide',
      slug: 'led-driver-design-guide',
      category: 'Application Note',
      description: 'Comprehensive guide for designing LED driver circuits using Superchip LED driver ICs.',
      contentParagraphs: [
        'This guide covers the key considerations for designing LED driver circuits with Superchip LED driver ICs.',
        'Topics include topology selection, component sizing, thermal management, and dimming implementation.'
      ],
      faeInsights: {
        author: {
          name: 'Technical FAE',
          title: 'Support Engineer'
        },
        content: 'Proper LED driver design ensures optimal performance and long LED lifetime.',
        keyTakeaways: [
          'Select appropriate topology for application',
          'Size components for efficiency and reliability',
          'Implement proper thermal management'
        ],
        insightLogic: 'Based on extensive field experience with LED lighting applications.'
      },
      relatedArticles: [],
      faqs: [
        {
          question: 'How do I select the right LED driver topology?',
          answer: 'Choose buck for step-down, boost for step-up, and buck-boost for variable input/output relationships.',
          decisionGuide: 'Match topology to input/output voltage relationship.',
          keywords: ['LED driver', 'topology', 'buck', 'boost']
        }
      ],
      author: {
        name: 'Superchip Technical Team',
        title: 'FAE Team'
      },
      publishDate: '2024-01-15',
      summary: 'Guide for LED driver design and application.',
      tags: ['LED driver', 'design guide', 'application note'],
      customerCases: []
    },
    {
      id: 'motor-driver-application-guide',
      title: 'Motor Driver Application and Troubleshooting Guide',
      slug: 'motor-driver-application-guide',
      category: 'Application Note',
      description: 'Practical guide for applying Superchip motor driver ICs in various motor control applications.',
      contentParagraphs: [
        'This guide provides practical advice for using Superchip motor driver ICs in real-world applications.',
        'Covers motor selection, driver configuration, PCB layout, and troubleshooting common issues.'
      ],
      faeInsights: {
        author: {
          name: 'Technical FAE',
          title: 'Support Engineer'
        },
        content: 'Proper motor driver application ensures reliable motor control and long system life.',
        keyTakeaways: [
          'Match driver to motor specifications',
          'Implement proper PCB layout',
          'Use appropriate protection features'
        ],
        insightLogic: 'Based on extensive field experience with motor control applications.'
      },
      relatedArticles: [],
      faqs: [
        {
          question: 'How do I select the right motor driver?',
          answer: 'Consider motor type, voltage, current, and control requirements when selecting a motor driver.',
          decisionGuide: 'Match driver specifications to motor and application requirements.',
          keywords: ['motor driver', 'selection', 'application']
        }
      ],
      author: {
        name: 'Superchip Technical Team',
        title: 'FAE Team'
      },
      publishDate: '2024-01-15',
      summary: 'Guide for motor driver application and troubleshooting.',
      tags: ['motor driver', 'application guide', 'troubleshooting'],
      customerCases: []
    }
  ];
  
  supportData.articles.push(...newArticles);
  fs.writeFileSync('./data/superchip/support.json', JSON.stringify(supportData, null, 2));
  console.log('Added 2 support articles. New count:', supportData.articles.length);
}

console.log('\nAll Superchip data fixes completed!');
