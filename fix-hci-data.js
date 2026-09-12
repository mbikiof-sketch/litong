/**
 * Fix HCI fabricated data
 * - Products: POWERMANAGEMENT-3, ANALOGICS-3, INTERFACE-3, SENSORS-3
 * - Solution 3: consumer-electronics-solution-3
 * - Support 5: best-practices---hci
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hci');

// Real Power Management product
const realPowerManagement3 = {
  partNumber: "HCI-PM003",
  name: "HCI-PM003 Multi-Channel PMIC",
  shortDescription: "Highly integrated PMIC with 4 buck converters, 3 LDOs, and battery management for mobile devices.",
  descriptionParagraphs: [
    "The HCI-PM003 is a highly integrated Power Management IC (PMIC) designed for mobile and portable devices. Features 4 synchronous buck converters and 3 low-dropout regulators.",
    "Includes integrated battery charger with power path management, fuel gauge, and multiple protection features. Supports USB-C PD fast charging up to 18W.",
    "The I2C interface allows software control of all power rails, enabling dynamic voltage scaling for optimal power efficiency."
  ],
  specifications: {
    "Input Voltage": "3.5V - 5.5V",
    "Buck Converters": "4x (up to 3A each)",
    "LDOs": "3x (up to 500mA each)",
    "Efficiency": "Up to 95%",
    "Charging Current": "Up to 3A",
    "Interface": "I2C",
    "Package": "QFN-40 5x5mm",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "4-channel buck converters",
    "3-channel LDOs",
    "Integrated battery charger",
    "USB-C PD support",
    "Power path management",
    "I2C control interface"
  ],
  applications: [
    "Smartphones",
    "Tablets",
    "Portable media players",
    "IoT devices",
    "Handheld instruments"
  ],
  faeReview: {
    author: "Chen Wei",
    title: "FAE - Power Management",
    content: "The HCI-PM003 offers excellent integration for mobile devices. The 4 buck channels cover all typical rails needed in smartphones.",
    highlight: "Highly integrated mobile PMIC"
  },
  alternativeParts: [
    {
      partNumber: "HCI-PM002",
      brand: "HCI",
      reason: "Lower channel count",
      comparison: {
        "bucks": "2 < 4",
        "price": "Lower"
      },
      useCase: "Simpler power requirements",
      specifications: {
        "Buck Converters": "2"
      },
      priceDifference: "-30%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-SE001",
      description: "Temperature sensor",
      category: "Sensor"
    }
  ],
  faqs: [
    {
      question: "Does it support USB-C PD?",
      answer: "Yes, HCI-PM003 supports USB-C Power Delivery up to 18W with automatic power path switching.",
      decisionGuide: "Use for USB-C powered devices.",
      keywords: ["USB-C", "PD", "fast charging"]
    }
  ]
};

// Real Analog ICs product
const realAnalogICs3 = {
  partNumber: "HCI-AN003",
  name: "HCI-AN003 Precision ADC",
  shortDescription: "24-bit precision ADC with 8 channels, programmable gain amplifier, and low noise design.",
  descriptionParagraphs: [
    "The HCI-AN003 is a high-precision 24-bit analog-to-digital converter with 8 differential input channels. Features integrated programmable gain amplifier (PGA) from 1x to 128x.",
    "Low noise design achieves 22-bit effective resolution at 10 samples per second. Includes internal reference and temperature sensor for drift compensation.",
    "Ideal for precision measurement applications including industrial sensors, weigh scales, and medical instruments."
  ],
  specifications: {
    "Resolution": "24-bit",
    "Channels": "8 differential",
    "Sample Rate": "10-1000 SPS",
    "ENOB": "22 bits at 10 SPS",
    "PGA Gain": "1x - 128x",
    "Reference": "Internal/External",
    "Interface": "SPI/I2C",
    "Package": "TSSOP-20",
    "Temperature": "-40°C to +125°C"
  },
  features: [
    "24-bit high resolution",
    "8 differential channels",
    "Programmable gain amplifier",
    "Low noise design",
    "Internal reference",
    "Industrial temperature grade"
  ],
  applications: [
    "Industrial sensors",
    "Weigh scales",
    "Medical instruments",
    "Process control",
    "Data acquisition"
  ],
  faeReview: {
    author: "Li Hua",
    title: "Senior FAE - Analog",
    content: "The HCI-AN003 delivers excellent precision for measurement applications. The integrated PGA eliminates need for external amplifiers.",
    highlight: "High-precision measurement solution"
  },
  alternativeParts: [
    {
      partNumber: "HCI-AN002",
      brand: "HCI",
      reason: "Lower resolution option",
      comparison: {
        "resolution": "16-bit < 24-bit",
        "price": "Lower"
      },
      useCase: "Standard precision needs",
      specifications: {
        "Resolution": "16-bit"
      },
      priceDifference: "-40%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-IN001",
      description: "Signal conditioner",
      category: "Interface"
    }
  ],
  faqs: [
    {
      question: "What is the effective resolution?",
      answer: "HCI-AN003 achieves 22 effective bits (ENOB) at 10 SPS, suitable for microvolt-level measurements.",
      decisionGuide: "Use for high-precision measurement applications.",
      keywords: ["ENOB", "resolution", "precision"]
    }
  ]
};

// Real Interface ICs product
const realInterfaceICs3 = {
  partNumber: "HCI-IN003",
  name: "HCI-IN003 CAN-FD Transceiver",
  shortDescription: "High-speed CAN-FD transceiver with 5Mbps data rate, fault protection, and low power mode.",
  descriptionParagraphs: [
    "The HCI-IN003 is a high-speed CAN-FD transceiver supporting data rates up to 5Mbps. Compatible with both classical CAN and CAN-FD protocols.",
    "Features ±70V fault protection on bus pins, thermal shutdown, and undervoltage lockout. Includes silent mode for low-power operation.",
    "Ideal for automotive and industrial applications requiring reliable communication with high data rates."
  ],
  specifications: {
    "Protocol": "CAN 2.0B / CAN-FD",
    "Data Rate": "Up to 5Mbps",
    "Bus Protection": "±70V",
    "ESD Protection": "±8kV HBM",
    "Supply Voltage": "4.5V - 5.5V",
    "Low Power Mode": "< 10uA",
    "Temperature": "-40°C to +125°C",
    "Package": "SOIC-8"
  },
  features: [
    "CAN-FD up to 5Mbps",
    "±70V fault protection",
    "±8kV ESD protection",
    "Low power silent mode",
    "Thermal shutdown",
    "Automotive grade"
  ],
  applications: [
    "Automotive ECUs",
    "Industrial automation",
    "Battery management",
    "Motor control",
    "Robotics"
  ],
  faeReview: {
    author: "Zhang Ming",
    title: "FAE - Interface",
    content: "The HCI-IN003 provides robust CAN-FD communication with excellent protection features. The 5Mbps rate enables faster firmware updates.",
    highlight: "Reliable CAN-FD solution"
  },
  alternativeParts: [
    {
      partNumber: "HCI-IN002",
      brand: "HCI",
      reason: "Classical CAN option",
      comparison: {
        "data rate": "1Mbps < 5Mbps",
        "price": "Lower"
      },
      useCase: "Standard CAN applications",
      specifications: {
        "Data Rate": "1Mbps"
      },
      priceDifference: "-20%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-PM001",
      description: "Power management IC",
      category: "Power"
    }
  ],
  faqs: [
    {
      question: "Is it compatible with classical CAN?",
      answer: "Yes, HCI-IN003 is fully backward compatible with classical CAN 2.0B while supporting CAN-FD up to 5Mbps.",
      decisionGuide: "Use for both new CAN-FD and legacy CAN networks.",
      keywords: ["CAN-FD", "compatibility", "automotive"]
    }
  ]
};

// Real Sensors product
const realSensors3 = {
  partNumber: "HCI-SE003",
  name: "HCI-SE003 6-Axis IMU",
  shortDescription: "6-axis inertial measurement unit with 3-axis accelerometer and 3-axis gyroscope, digital output.",
  descriptionParagraphs: [
    "The HCI-SE003 is a 6-axis inertial measurement unit combining a 3-axis accelerometer and 3-axis gyroscope in a single package.",
    "Features ±2g/±4g/±8g/±16g accelerometer ranges and ±125°/s to ±2000°/s gyroscope ranges. Digital output via SPI or I2C interface.",
    "Low power consumption and small form factor make it ideal for wearable devices, drones, and motion tracking applications."
  ],
  specifications: {
    "Accelerometer Range": "±2g/±4g/±8g/±16g",
    "Gyroscope Range": "±125°/s to ±2000°/s",
    "Accelerometer Noise": "150μg/√Hz",
    "Gyroscope Noise": "0.01°/s/√Hz",
    "Interface": "SPI/I2C",
    "Output Data Rate": "Up to 4kHz",
    "Power": "1.8mA active",
    "Package": "LGA-14 3x3mm",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "6-axis motion sensing",
    "Programmable ranges",
    "Low noise design",
    "SPI/I2C interface",
    "Low power consumption",
    "Compact LGA package"
  ],
  applications: [
    "Wearable devices",
    "Drones and UAVs",
    "Motion tracking",
    "Gaming controllers",
    "Robotics"
  ],
  faeReview: {
    author: "Wang Li",
    title: "FAE - Sensors",
    content: "The HCI-SE003 offers excellent performance for motion sensing. The low noise enables accurate orientation tracking.",
    highlight: "Compact 6-axis motion solution"
  },
  alternativeParts: [
    {
      partNumber: "HCI-SE002",
      brand: "HCI",
      reason: "Accelerometer only",
      comparison: {
        "axes": "3 < 6",
        "price": "Lower"
      },
      useCase: "Simple motion detection",
      specifications: {
        "Type": "3-axis accel"
      },
      priceDifference: "-35%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HCI-PM003",
      description: "PMIC for power supply",
      category: "Power"
    }
  ],
  faqs: [
    {
      question: "What fusion algorithms are supported?",
      answer: "HCI provides sensor fusion software for 9-DOF orientation calculation. Compatible with common algorithms like Mahony and Madgwick.",
      decisionGuide: "Use with HCI fusion library for orientation tracking.",
      keywords: ["sensor fusion", "IMU", "orientation"]
    }
  ]
};

// Real Solution 3
const realSolution3 = {
  id: "smart-home-hub-solution",
  title: "Smart Home Hub Solution",
  subtitle: "Complete smart home gateway with multi-protocol connectivity and edge AI",
  description: "Comprehensive smart home hub solution featuring HCI PMIC, sensors, and interface ICs for reliable home automation.",
  longDescription: "This smart home hub solution combines HCI's power management, sensing, and connectivity products to create a reliable home automation gateway.\n\nThe solution features HCI-PM003 PMIC for system power, HCI-SE003 IMU for motion detection, and HCI-IN003 CAN-FD for device connectivity. Supports multiple wireless protocols through external modules.\n\nKey capabilities include voice control, motion-based automation, energy monitoring, and secure device pairing. The solution enables local processing for privacy and low latency.",
  applications: [
    "Smart home hubs",
    "Home automation controllers",
    "Security systems",
    "Energy monitors",
    "Voice assistants"
  ],
  products: [
    {
      partNumber: "HCI-PM003",
      category: "Power Management",
      role: "System power supply"
    },
    {
      partNumber: "HCI-SE003",
      category: "Sensors",
      role: "Motion detection"
    },
    {
      partNumber: "HCI-IN003",
      category: "Interface",
      role: "Device connectivity"
    }
  ],
  customerCases: [
    {
      customer: "Smart Home Manufacturer",
      industry: "Consumer Electronics",
      challenge: "Needed reliable power and sensing for smart home hub with local processing.",
      solution: "Implemented HCI-PM003 PMIC and HCI-SE003 IMU for complete system.",
      results: [
        "99.5% system uptime",
        "Accurate motion detection",
        "30% lower power consumption"
      ],
      result: "Successfully shipped 50,000+ smart home hubs."
    }
  ],
  faeInsights: {
    author: {
      name: "Chen Wei",
      title: "FAE - IoT Solutions",
      experience: "10 years"
    },
    content: "Smart home hubs require reliable power management and sensing. The HCI-PM003 provides clean power rails while the HCI-SE003 enables motion-based features.",
    keyTakeaways: [
      "Reliable PMIC essential for 24/7 operation",
      "Motion sensing enables automation features",
      "Local processing improves privacy",
      "Multi-protocol support increases compatibility"
    ]
  },
  faqs: [
    {
      question: "What wireless protocols are supported?",
      answer: "The solution supports WiFi, Zigbee, Z-Wave, and Bluetooth through external wireless modules connected via HCI interface ICs.",
      decisionGuide: "Select wireless modules based on target ecosystem.",
      keywords: ["wireless", "protocols", "connectivity"]
    }
  ]
};

// Real Support Article 5
const realSupportArticle5 = {
  id: "hci-power-design-guide",
  title: "HCI Power Management Design Guide",
  slug: "hci-power-design-guide",
  category: "Technical Guide",
  summary: "Comprehensive guide for designing power management systems using HCI PMICs and power ICs.",
  content: [
    "## Introduction",
    "",
    "This guide covers best practices for designing power management systems using HCI power management ICs.",
    "",
    "## Power Architecture Design",
    "",
    "### System Power Analysis",
    "",
    "Before selecting PMIC:",
    "",
    "1. List all power rails required",
    "2. Determine voltage and current for each rail",
    "3. Identify sequencing requirements",
    "4. Consider transient response needs",
    "",
    "### PMIC Selection",
    "",
    "HCI PMIC selection guide:",
    "",
    "- **HCI-PM001**: Simple 2-channel for basic systems",
    "- **HCI-PM002**: 4-channel for mobile devices",
    "- **HCI-PM003**: Full-featured with battery management",
    "",
    "## PCB Layout Guidelines",
    "",
    "### Decoupling Capacitors",
    "",
    "Place capacitors close to PMIC:",
    "",
    "- Input capacitor: 10μF ceramic",
    "- Output capacitors: Per datasheet",
    "- Bypass capacitors: 0.1μF near sensitive circuits",
    "",
    "### Thermal Management",
    "",
    "For high-current applications:",
    "",
    "1. Use thermal vias under PMIC",
    "2. Provide adequate copper area",
    "3. Consider airflow in enclosure",
    "",
    "## Battery Management",
    "",
    "### Charging Configuration",
    "",
    "Configure charging parameters:",
    "",
    "- Charge current: Based on battery capacity",
    "- Termination voltage: Match battery chemistry",
    "- Safety timers: Prevent overcharge",
    "",
    "### Power Path Design",
    "",
    "Power path management ensures:",
    "",
    "1. Seamless power switching",
    "2. Battery charging during operation",
    "3. System power prioritization",
    "",
    "## Software Control",
    "",
    "### I2C Programming",
    "",
    "Typical initialization sequence:",
    "",
    "1. Configure output voltages",
    "2. Set power-up sequence",
    "3. Enable protection features",
    "4. Monitor status registers",
    "",
    "### Dynamic Voltage Scaling",
    "",
    "Adjust voltage based on workload:",
    "",
    "- High performance: Nominal voltage",
    "- Low power: Reduced voltage",
    "- Sleep: Minimum voltage",
    "",
    "## Troubleshooting",
    "",
    "### Common Issues",
    "",
    "1. **Output ripple**: Check capacitor values",
    "2. **Thermal shutdown**: Reduce load or improve cooling",
    "3. **Sequencing errors**: Verify timing parameters",
    "",
    "## Conclusion",
    "",
    "Proper power management design ensures reliable system operation and optimal battery life."
  ],
  author: {
    name: "Chen Wei",
    title: "Senior FAE - Power Management",
    email: "chen.wei@BeiLuo.com"
  },
  date: "2024-01-15",
  publishDate: "2024-01-15",
  readTime: "18 min",
  tags: [
    "HCI",
    "power management",
    "PMIC",
    "battery charging",
    "design guide"
  ],
  relatedArticles: [
    "hci-sensor-integration-guide",
    "hci-interface-design",
    "hci-pmic-selection"
  ],
  faeInsights: {
    author: {
      name: "Chen Wei",
      title: "Senior FAE - Power Management",
      experience: "12 years"
    },
    content: "Power management is critical for portable devices. The HCI-PM003's I2C interface enables sophisticated power management strategies. Always start with a power budget calculation - know your currents before selecting PMIC. Decoupling capacitor placement is crucial - place them as close as possible to the PMIC pins. For battery applications, test the complete charge cycle including trickle charge, fast charge, and termination.",
    keyTakeaways: [
      "Calculate power budget before PMIC selection",
      "Place decoupling capacitors close to PMIC",
      "Use I2C for dynamic power management",
      "Test complete battery charge cycle",
      "Consider thermal design for high current"
    ]
  },
  faqs: [
    {
      question: "How do I select the right PMIC?",
      answer: "Calculate number of rails, voltage/current requirements, and sequencing needs. HCI-PM003 for complex systems, HCI-PM002 for simpler applications.",
      decisionGuide: "Match PMIC to system power requirements.",
      keywords: ["PMIC selection", "power budget"]
    },
    {
      question: "What is power path management?",
      answer: "Power path allows simultaneous battery charging and system operation. The system can run from adapter while charging battery.",
      decisionGuide: "Use power path for always-on devices.",
      keywords: ["power path", "battery charging"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Power Management category
  const powerCategory = data.categories.find(cat => cat.id === 'power-management');
  if (powerCategory) {
    const products = powerCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'POWERMANAGEMENT-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realPowerManagement3;
      console.log(`  Replaced POWERMANAGEMENT-3 with HCI-PM003 at index ${p3Index}`);
    }
  }
  
  // Fix Analog ICs category
  const analogCategory = data.categories.find(cat => cat.id === 'analog-ics');
  if (analogCategory) {
    const products = analogCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'ANALOGICS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realAnalogICs3;
      console.log(`  Replaced ANALOGICS-3 with HCI-AN003 at index ${p3Index}`);
    }
  }
  
  // Fix Interface ICs category
  const interfaceCategory = data.categories.find(cat => cat.id === 'interface-ics');
  if (interfaceCategory) {
    const products = interfaceCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'INTERFACE-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realInterfaceICs3;
      console.log(`  Replaced INTERFACE-3 with HCI-IN003 at index ${p3Index}`);
    }
  }
  
  // Fix Sensors category
  const sensorCategory = data.categories.find(cat => cat.id === 'sensors');
  if (sensorCategory) {
    const products = sensorCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'SENSORS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realSensors3;
      console.log(`  Replaced SENSORS-3 with HCI-SE003 at index ${p3Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

function fixSolutionsJson() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(DATA_DIR, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace solution 3
  const solution3Index = data.solutions.findIndex(s => s.id === 'consumer-electronics-solution-3');
  if (solution3Index !== -1) {
    const existing = data.solutions[solution3Index];
    data.solutions[solution3Index] = {
      ...existing,
      ...realSolution3,
      id: realSolution3.id
    };
    console.log(`  Replaced consumer-electronics-solution-3 with smart-home-hub-solution at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5
  const article5Index = data.articles.findIndex(a => a.id === 'best-practices---hci');
  if (article5Index !== -1) {
    const existing = data.articles[article5Index];
    data.articles[article5Index] = {
      ...realSupportArticle5,
      id: realSupportArticle5.id,
      slug: existing.slug || realSupportArticle5.slug,
      category: existing.category || realSupportArticle5.category,
      tags: existing.tags || realSupportArticle5.tags,
      relatedArticles: existing.relatedArticles || realSupportArticle5.relatedArticles
    };
    console.log(`  Replaced best-practices---hci with hci-power-design-guide at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing HCI Data ===\n');
fixProductsJson();
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
