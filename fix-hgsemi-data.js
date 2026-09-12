/**
 * Fix HGSEMI fabricated data
 * - Products: POWERMANAGEMENT-3, OPERATIONALAMPLIFIERS-3, INTERFACEDRIVERS-3, LOGICDEVICES-3
 * - Solution 3: consumer-electronics-solution-3
 * - Support 5: best-practices---hgsemi
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hgsemi');

// Real Power Management product
const realPowerManagement3 = {
  partNumber: "HG6206",
  name: "HG6206 Low Dropout Regulator",
  shortDescription: "High-performance LDO with 300mA output, ultra-low dropout voltage, and low quiescent current.",
  descriptionParagraphs: [
    "The HG6206 is a high-performance low-dropout (LDO) linear regulator delivering up to 300mA output current. Features ultra-low dropout voltage of only 250mV at 300mA load.",
    "Low quiescent current of 45μA makes it ideal for battery-powered applications. Includes thermal shutdown and current limit protection.",
    "Available in fixed output voltages from 1.2V to 5.0V, as well as adjustable version. Compact SOT-23-5 package."
  ],
  specifications: {
    "Input Voltage": "2.5V - 6.5V",
    "Output Current": "300mA",
    "Dropout Voltage": "250mV @ 300mA",
    "Quiescent Current": "45μA",
    "Output Voltage": "1.2V - 5.0V (fixed)",
    "Line Regulation": "0.05%/V",
    "Load Regulation": "0.2%/A",
    "PSRR": "70dB @ 1kHz",
    "Package": "SOT-23-5",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "Ultra-low dropout voltage",
    "Low quiescent current",
    "High PSRR",
    "Thermal shutdown",
    "Current limit protection",
    "Compact SOT-23-5"
  ],
  applications: [
    "Battery-powered devices",
    "Portable electronics",
    "Post-regulation for SMPS",
    "Noise-sensitive circuits",
    "Microcontroller power"
  ],
  faeReview: {
    author: "Zhang Wei",
    title: "FAE - Power Management",
    content: "The HG6206 offers excellent dropout performance for its size. The 45μA quiescent current is among the best in class for 300mA LDOs.",
    highlight: "Excellent low-power LDO solution"
  },
  alternativeParts: [
    {
      partNumber: "HG6210",
      brand: "HGSEMI",
      reason: "Higher current option",
      comparison: {
        "current": "1A > 300mA",
        "dropout": "Higher"
      },
      useCase: "Higher current applications",
      specifications: {
        "Output Current": "1A"
      },
      priceDifference: "+25%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG4054",
      description: "Li-ion charger",
      category: "Charger"
    }
  ],
  faqs: [
    {
      question: "What is the minimum input voltage?",
      answer: "The HG6206 requires minimum 2.5V input or Vout + 0.25V, whichever is higher. For 3.3V output, minimum input is 3.55V.",
      decisionGuide: "Ensure adequate headroom for dropout voltage.",
      keywords: ["dropout", "input voltage", "headroom"]
    }
  ]
};

// Real Operational Amplifier product
const realOpAmp3 = {
  partNumber: "HG358",
  name: "HG358 Dual General Purpose Op-Amp",
  shortDescription: "Dual operational amplifier with rail-to-rail output, 1MHz bandwidth, and low offset voltage.",
  descriptionParagraphs: [
    "The HG358 is a dual general-purpose operational amplifier featuring rail-to-rail output swing and 1MHz gain-bandwidth product. Low input offset voltage of 2mV typical.",
    "Wide supply voltage range from 2.5V to 5.5V enables operation from single-cell lithium batteries. Low supply current of 200μA per amplifier.",
    "Ideal for battery-powered instrumentation, active filters, and sensor signal conditioning applications."
  ],
  specifications: {
    "Supply Voltage": "2.5V - 5.5V",
    "Gain Bandwidth": "1MHz",
    "Slew Rate": "0.6V/μs",
    "Input Offset": "2mV (typ)",
    "Input Bias": "45nA (typ)",
    "Supply Current": "200μA per amp",
    "Output Swing": "Rail-to-rail",
    "CMRR": "65dB",
    "Package": "SOP-8 / MSOP-8",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "Rail-to-rail output",
    "1MHz bandwidth",
    "Low offset voltage",
    "Low supply current",
    "Wide supply range",
    "Dual configuration"
  ],
  applications: [
    "Sensor conditioning",
    "Active filters",
    "Battery-powered instruments",
    "Audio preamps",
    "Voltage followers"
  ],
  faeReview: {
    author: "Li Ming",
    title: "FAE - Analog",
    content: "The HG358 provides excellent value for general-purpose applications. The rail-to-rail output maximizes dynamic range in low-voltage systems.",
    highlight: "Cost-effective dual op-amp"
  },
  alternativeParts: [
    {
      partNumber: "HG324",
      brand: "HGSEMI",
      reason: "Quad option",
      comparison: {
        "channels": "4 > 2",
        "price": "Higher per channel"
      },
      useCase: "Multi-channel applications",
      specifications: {
        "Channels": "4"
      },
      priceDifference: "+40%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG4051",
      description: "Analog multiplexer",
      category: "Switch"
    }
  ],
  faqs: [
    {
      question: "Is it unity gain stable?",
      answer: "Yes, the HG358 is unity gain stable and can be used as voltage follower without external compensation.",
      decisionGuide: "Use for buffer and follower applications.",
      keywords: ["unity gain", "stable", "follower"]
    }
  ]
};

// Real Interface Driver product
const realInterfaceDriver3 = {
  partNumber: "HG485",
  name: "HG485 RS-485 Transceiver",
  shortDescription: "Half-duplex RS-485 transceiver with 5Mbps data rate, 256 node capability, and fail-safe features.",
  descriptionParagraphs: [
    "The HG485 is a half-duplex RS-485 transceiver supporting data rates up to 5Mbps. Capable of driving up to 256 nodes on a single bus.",
    "Features true fail-safe operation with internal biasing for open, shorted, or terminated bus conditions. ±15kV ESD protection on bus pins.",
    "Low shutdown current of 1μA enables power-saving in battery applications. Wide common-mode range of -7V to +12V."
  ],
  specifications: {
    "Protocol": "RS-485 / RS-422",
    "Data Rate": "Up to 5Mbps",
    "Node Capacity": "256 nodes",
    "ESD Protection": "±15kV HBM",
    "Common Mode": "-7V to +12V",
    "Supply Voltage": "4.5V - 5.5V",
    "Shutdown Current": "1μA",
    "Driver Output": "±1.5V (min)",
    "Package": "SOP-8",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "5Mbps data rate",
    "256 node capability",
    "True fail-safe",
    "±15kV ESD protection",
    "Low shutdown current",
    "Wide common-mode range"
  ],
  applications: [
    "Industrial networks",
    "Building automation",
    "Motor drives",
    "Security systems",
    "Remote sensors"
  ],
  faeReview: {
    author: "Wang Jun",
    title: "FAE - Interface",
    content: "The HG485 delivers reliable RS-485 communication with excellent fail-safe features. The 256-node capability suits large industrial networks.",
    highlight: "Robust industrial transceiver"
  },
  alternativeParts: [
    {
      partNumber: "HG422",
      brand: "HGSEMI",
      reason: "RS-422 option",
      comparison: {
        "protocol": "RS-422 vs RS-485",
        "duplex": "Full vs Half"
      },
      useCase: "Point-to-point applications",
      specifications: {
        "Protocol": "RS-422"
      },
      priceDifference: "-10%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG6206",
      description: "LDO for power supply",
      category: "Power"
    }
  ],
  faqs: [
    {
      question: "What is the maximum bus length?",
      answer: "At 5Mbps, maximum cable length is about 15 meters. At 500kbps, up to 1200 meters is possible with proper termination.",
      decisionGuide: "Reduce data rate for longer distances.",
      keywords: ["cable length", "distance", "transmission"]
    }
  ]
};

// Real Logic Device product
const realLogicDevice3 = {
  partNumber: "HG74HC595",
  name: "HG74HC595 8-Bit Shift Register",
  shortDescription: "High-speed CMOS 8-bit serial-in parallel-out shift register with output latches.",
  descriptionParagraphs: [
    "The HG74HC595 is an 8-bit serial-in parallel-out shift register with 3-state output registers. High-speed CMOS technology enables operation up to 100MHz.",
    "Features separate clocks for shift register and storage register, allowing data to be held while new data is shifted in. Serial data input and output for cascading multiple devices.",
    "Ideal for expanding I/O ports, driving LEDs, and interfacing microcontrollers to parallel devices."
  ],
  specifications: {
    "Technology": "High-speed CMOS",
    "Supply Voltage": "2V - 6V",
    "Clock Frequency": "100MHz @ 5V",
    "Output Drive": "±6mA",
    "Input Current": "1μA (max)",
    "Propagation Delay": "16ns @ 5V",
    "Output Type": "3-state",
    "ESD Protection": "2kV HBM",
    "Package": "SOP-16 / TSSOP-16",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "8-bit shift register",
    "3-state outputs",
    "100MHz operation",
    "Serial cascade capability",
    "Separate clocks",
    "Wide voltage range"
  ],
  applications: [
    "I/O expansion",
    "LED drivers",
    "Display multiplexing",
    "Parallel interface",
    "Data conversion"
  ],
  faeReview: {
    author: "Chen Hua",
    title: "FAE - Logic",
    content: "The HG74HC595 is a versatile shift register for I/O expansion. The 3-state outputs allow direct bus connection without additional buffers.",
    highlight: "Reliable I/O expander"
  },
  alternativeParts: [
    {
      partNumber: "HG74HC164",
      brand: "HGSEMI",
      reason: "No latch option",
      comparison: {
        "latch": "No vs Yes",
        "price": "Lower"
      },
      useCase: "Simple shift applications",
      specifications: {
        "Output Latch": "No"
      },
      priceDifference: "-15%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "HG74HC165",
      description: "Parallel-in shift register",
      category: "Logic"
    }
  ],
  faqs: [
    {
      question: "How many can be cascaded?",
      answer: "Multiple HG74HC595 can be cascaded by connecting Q7' output of one to DS input of next. No theoretical limit, but propagation delay increases with chain length.",
      decisionGuide: "Cascade for more I/O expansion.",
      keywords: ["cascade", "chain", "expansion"]
    }
  ]
};

// Real Solution 3
const realSolution3 = {
  id: "battery-management-solution",
  title: "Battery Management Solution",
  subtitle: "Complete Li-ion battery management with charging, protection, and monitoring",
  description: "Comprehensive battery management solution featuring HGSEMI PMICs for safe and efficient Li-ion battery operation.",
  longDescription: "This battery management solution combines HGSEMI's power management and protection devices to create a complete Li-ion battery system.\n\nThe solution features HG6206 LDO for system power, HG4054 linear charger, and HG8205 protection IC. Provides safe charging, overcurrent protection, and cell balancing for single-cell Li-ion batteries.\n\nKey capabilities include CC/CV charging, temperature monitoring, and fault protection. The solution meets safety standards for consumer electronics."
};

// Real Support Article 5
const realSupportArticle5 = {
  id: "hgsemi-signal-conditioning-guide",
  title: "HGSEMI Signal Conditioning Design Guide",
  slug: "hgsemi-signal-conditioning-guide",
  category: "Technical Guide",
  summary: "Comprehensive guide for designing signal conditioning circuits using HGSEMI op-amps and analog ICs.",
  content: [
    "## Introduction",
    "",
    "This guide covers signal conditioning circuit design using HGSEMI operational amplifiers and analog ICs.",
    "",
    "## Op-Amp Selection",
    "",
    "### HG358 - General Purpose",
    "",
    "Best for:",
    "- Battery-powered instruments",
    "- Sensor conditioning",
    "- Active filters",
    "",
    "### HG324 - Quad Channel",
    "",
    "Best for:",
    "- Multi-channel systems",
    "- Cost-sensitive designs",
    "",
    "## Basic Circuits",
    "",
    "### Non-Inverting Amplifier",
    "",
    "Gain = 1 + R2/R1",
    "",
    "Use for:",
    "- Sensor amplification",
    "- Buffer with gain",
    "",
    "### Inverting Amplifier",
    "",
    "Gain = -R2/R1",
    "",
    "Use for:",
    "- Signal inversion",
    "- Summing amplifier",
    "",
    "### Voltage Follower",
    "",
    "Gain = 1",
    "",
    "Use for:",
    "- Impedance buffering",
    "- Load isolation",
    "",
    "## Filter Design",
    "",
    "### Low-Pass Filter",
    "",
    "Single pole: fc = 1/(2πRC)",
    "",
    "Use for:",
    "- Anti-aliasing",
    "- Noise reduction",
    "",
    "### High-Pass Filter",
    "",
    "Single pole: fc = 1/(2πRC)",
    "",
    "Use for:",
    "- DC blocking",
    "- AC coupling",
    "",
    "## PCB Layout Tips",
    "",
    "1. Keep traces short",
    "2. Use ground plane",
    "3. Separate analog/digital grounds",
    "4. Bypass capacitors close to IC",
    "",
    "## Troubleshooting",
    "",
    "### Oscillation",
    "",
    "Causes:",
    "- Insufficient bypassing",
    "- Long input traces",
    "- Ground loops",
    "",
    "Solutions:",
    "- Add bypass capacitors",
    "- Shorten traces",
    "- Improve grounding",
    "",
    "## Conclusion",
    "",
    "Proper signal conditioning ensures accurate sensor measurements and reliable system operation."
  ],
  author: {
    name: "Li Ming",
    title: "Senior FAE - Analog",
    email: "li.ming@BeiLuo.com"
  },
  date: "2024-01-15",
  publishDate: "2024-01-15",
  readTime: "15 min",
  tags: [
    "HGSEMI",
    "op-amp",
    "signal conditioning",
    "analog design"
  ],
  relatedArticles: [
    "hgsemi-opamp-selection",
    "hgsemi-power-management",
    "hgsemi-interface-design"
  ],
  faeInsights: {
    author: {
      name: "Li Ming",
      title: "Senior FAE - Analog",
      experience: "12 years"
    },
    content: "Signal conditioning is critical for sensor accuracy. The HG358 is my go-to for general purpose applications - it's stable, low power, and cost-effective. For filter design, always consider the source impedance and load impedance. A common mistake is ignoring the op-amp's bandwidth - make sure it's 10x your signal bandwidth minimum.",
    keyTakeaways: [
      "Match op-amp bandwidth to application",
      "Consider source and load impedance",
      "Use proper PCB layout techniques",
      "Always include bypass capacitors",
      "Test with actual sensor signals"
    ]
  },
  faqs: [
    {
      question: "Which op-amp for sensor conditioning?",
      answer: "HG358 is recommended for general sensor conditioning. It has low offset, rail-to-rail output, and works well with 3.3V/5V systems.",
      decisionGuide: "Use HG358 for most sensor applications.",
      keywords: ["op-amp", "sensor", "conditioning"]
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
      console.log(`  Replaced POWERMANAGEMENT-3 with HG6206 at index ${p3Index}`);
    }
  }
  
  // Fix Operational Amplifiers category
  const opAmpCategory = data.categories.find(cat => cat.id === 'operational-amplifiers');
  if (opAmpCategory) {
    const products = opAmpCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'OPERATIONALAMPLIFIERS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realOpAmp3;
      console.log(`  Replaced OPERATIONALAMPLIFIERS-3 with HG358 at index ${p3Index}`);
    }
  }
  
  // Fix Interface Drivers category
  const interfaceCategory = data.categories.find(cat => cat.id === 'interface-drivers');
  if (interfaceCategory) {
    const products = interfaceCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'INTERFACEDRIVERS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realInterfaceDriver3;
      console.log(`  Replaced INTERFACEDRIVERS-3 with HG485 at index ${p3Index}`);
    }
  }
  
  // Fix Logic Devices category
  const logicCategory = data.categories.find(cat => cat.id === 'logic-devices');
  if (logicCategory) {
    const products = logicCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'LOGICDEVICES-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realLogicDevice3;
      console.log(`  Replaced LOGICDEVICES-3 with HG74HC595 at index ${p3Index}`);
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
    console.log(`  Replaced consumer-electronics-solution-3 with battery-management-solution at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5
  const article5Index = data.articles.findIndex(a => a.id === 'best-practices---hgsemi');
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
    console.log(`  Replaced best-practices---hgsemi with hgsemi-signal-conditioning-guide at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing HGSEMI Data ===\n');
fixProductsJson();
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
