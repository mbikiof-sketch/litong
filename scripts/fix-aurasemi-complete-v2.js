#!/usr/bin/env node
/**
 * Complete fix for aurasemi - add remaining products, solutions, and articles
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'aurasemi');
const productsJson = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));
const solutionsJson = JSON.parse(fs.readFileSync(path.join(dataDir, 'solutions.json'), 'utf8'));
const supportJson = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));

console.log('Completing aurasemi data fix...\n');

// 1. Add more products to Sensor Interface category
console.log('1. Adding products to Sensor Interface...');
const sensorCategory = productsJson.categories.find(c => c.id === 'sensor-interface');
if (sensorCategory) {
  sensorCategory.products.push({
    partNumber: "AU6040",
    name: "Bridge Sensor Signal Conditioner",
    shortDescription: "Complete signal conditioning solution for strain gauge and pressure sensors with integrated excitation and linearization.",
    descriptionParagraphs: [
      "The AU6040 is a complete signal conditioner for bridge-type sensors including strain gauges, load cells, and pressure sensors. It provides integrated excitation, amplification, and linearization in a single device.",
      "With programmable excitation voltage (2.5V to 5V) and gain (up to 128x), the AU6040 can interface with a wide range of bridge sensors. The 24-bit ADC provides high-resolution measurements with excellent noise performance.",
      "Integrated linearization compensates for sensor non-linearity, improving accuracy over the full measurement range. The device supports both 4-wire and 6-wire bridge configurations for lead resistance compensation."
    ],
    specifications: {
      "ADC Resolution": "24-bit",
      "Excitation Voltage": "2.5V to 5V",
      "Gain Range": "1x to 128x",
      "Input Range": "±80mV full scale",
      "Accuracy": "±0.01% FS",
      "Interface": "SPI/I2C",
      "Package": "QFN-24"
    },
    features: [
      "Complete bridge sensor interface",
      "Programmable excitation voltage",
      "24-bit high-resolution ADC",
      "Integrated linearization",
      "4-wire and 6-wire support",
      "Low noise <1μV"
    ],
    applications: [
      "Weighing scales",
      "Pressure sensors",
      "Force measurement",
      "Torque sensors",
      "Industrial automation"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "Senior FAE - Precision Measurement",
      content: "The AU6040 is an excellent bridge sensor interface that I've used in weighing scale applications. The integrated excitation eliminates the need for external reference, saving BOM cost. The linearization feature is valuable - it can improve accuracy by an order of magnitude for some sensors. The 24-bit resolution gives plenty of dynamic range for high-precision scales. One tip: use the 6-wire configuration for long cable runs to eliminate lead resistance errors. Overall, a cost-effective solution for bridge sensor applications.",
      highlight: "Complete bridge sensor interface with linearization and high-resolution ADC"
    },
    alternativeParts: [
      {
        partNumber: "HX711",
        brand: "AVIA",
        specifications: { "Resolution": "24-bit", "Gain": "32/64/128" },
        comparison: { "Integration": "Lower < Higher (Aurasemi more integrated)", "Features": "Basic < Advanced" },
        reason: "Less integrated, fewer features",
        useCase: "Basic weighing applications"
      },
      {
        partNumber: "ADS1232",
        brand: "Texas Instruments",
        specifications: { "Resolution": "24-bit", "PGA": "1-128x" },
        comparison: { "Excitation": "External < Integrated (Aurasemi simpler)", "Price": "Higher > Lower" },
        reason: "Requires external excitation",
        useCase: "Applications requiring TI parts"
      }
    ],
    companionParts: [
      { partNumber: "AU6020", link: "/aurasemi/products/sensor-interface/au6020.html", description: "RTD interface for temperature compensation", category: "Sensor Interface" },
      { partNumber: "AU6030", link: "/aurasemi/products/sensor-interface/au6030.html", description: "TC interface for multi-sensor systems", category: "Sensor Interface" },
      { partNumber: "AU8015", link: "/aurasemi/products/power-management/au8015.html", description: "LDO for clean analog supply", category: "Power Management" }
    ],
    faqs: [
      { question: "What sensors work with AU6040?", answer: "The AU6040 works with any resistive bridge sensor including: strain gauges (quarter, half, and full bridge), load cells (compression and tension), pressure sensors (absolute, gauge, differential), torque sensors, and force sensors. The programmable excitation and gain allow interfacing with sensors from 100Ω to 10kΩ bridge impedance.", decisionGuide: "Works with all resistive bridge sensors from 100Ω to 10kΩ impedance.", keywords: ["bridge sensor", "strain gauge", "load cell"] },
      { question: "How does the linearization work?", answer: "The AU6040 includes polynomial linearization that compensates for sensor non-linearity. It supports 2nd and 3rd order correction based on sensor characterization data. You provide coefficients calculated from sensor calibration data, and the device applies correction in real-time. This can improve accuracy from ±1% to ±0.01% for typical strain gauges.", decisionGuide: "Use polynomial linearization with coefficients from sensor calibration.", keywords: ["linearization", "sensor calibration", "accuracy improvement"] }
    ]
  });
}

// 2. Add more products to Wireless Transceivers category
console.log('2. Adding products to Wireless Transceivers...');
const wirelessCategory = productsJson.categories.find(c => c.id === 'wireless-transceiver');
if (wirelessCategory) {
  wirelessCategory.products.push({
    partNumber: "AU7050",
    name: "Sub-GHz Transceiver with PA",
    shortDescription: "Long-range sub-GHz transceiver with integrated +27dBm power amplifier for extended range IoT applications.",
    descriptionParagraphs: [
      "The AU7050 is a high-power sub-GHz transceiver designed for long-range IoT and industrial applications. It features an integrated +27dBm power amplifier for maximum communication range.",
      "Operating in 433/868/915MHz ISM bands, the AU7050 achieves up to 5km line-of-sight range. The high sensitivity (-120dBm) enables reliable reception at the edge of coverage.",
      "The device supports multiple modulation schemes including FSK, GFSK, MSK, and OOK. Data rates from 0.5kbps to 300kbps accommodate various application requirements."
    ],
    specifications: {
      "Frequency Bands": "433/868/915MHz",
      "Output Power": "+27dBm max",
      "Sensitivity": "-120dBm",
      "Modulation": "FSK/GFSK/MSK/OOK",
      "Data Rate": "0.5-300kbps",
      "Supply": "1.8-3.6V",
      "Package": "QFN-32"
    },
    features: [
      "Integrated +27dBm PA",
      "Long-range 5km+ LOS",
      "High sensitivity -120dBm",
      "Multiple modulation schemes",
      "Frequency hopping support",
      "Low power modes"
    ],
    applications: [
      "Smart metering",
      "Industrial sensors",
      "Agricultural monitoring",
      "Security systems",
      "Remote control"
    ],
    faeReview: {
      author: "Lisa Wang",
      title: "RF Applications Engineer",
      content: "The AU7050 is our long-range workhorse. The +27dBm PA gives serious range - I've seen 3-5km in rural deployments. The integrated PA saves the cost and complexity of external amplifiers. Sensitivity is excellent at -120dBm. One consideration: the higher TX power means higher current consumption (90mA at +27dBm), so plan your power budget accordingly. For battery applications, you can reduce power to +20dBm and still get great range. The frequency hopping works well for interference rejection. A great choice when range is critical.",
      highlight: "Long-range sub-GHz transceiver with +27dBm integrated PA"
    },
    alternativeParts: [
      {
        partNumber: "SX1262",
        brand: "Semtech",
        specifications: { "Power": "+22dBm", "Sensitivity": "-148dBm (LoRa)" },
        comparison: { "Power": "22dBm < 27dBm (Aurasemi higher)", "LoRa": "Yes vs No" },
        reason: "No LoRa support, but higher TX power",
        useCase: "Applications requiring LoRa modulation"
      },
      {
        partNumber: "CC1200",
        brand: "Texas Instruments",
        specifications: { "Power": "+16dBm", "Sensitivity": "-120dBm" },
        comparison: { "Power": "16dBm < 27dBm (Aurasemi higher)", "Range": "Shorter < Longer" },
        reason: "Lower output power, shorter range",
        useCase: "Short-range applications"
      }
    ],
    companionParts: [
      { partNumber: "AU7040", link: "/aurasemi/products/wireless-transceiver/au7040.html", description: "Standard sub-GHz for shorter range", category: "Wireless Transceiver" },
      { partNumber: "AU7140", link: "/aurasemi/products/wireless-transceiver/au7140.html", description: "2.4GHz for dual-band systems", category: "Wireless Transceiver" },
      { partNumber: "AU8015", link: "/aurasemi/products/power-management/au8015.html", description: "LDO for clean RF supply", category: "Power Management" }
    ],
    faqs: [
      { question: "What is the actual range?", answer: "Range depends on environment: (1) Open field/rural - 3-5km with +27dBm; (2) Suburban - 1-2km; (3) Urban - 500m-1km; (4) Indoor - 100-200m through walls. Lower data rates provide longer range. Use lower TX power (+20dBm) for battery savings with reduced range.", decisionGuide: "Expect 3-5km rural, 1-2km suburban; use +27dBm for max range.", keywords: ["communication range", "RF range", "TX power"] },
      { question: "How much current does the PA draw?", answer: "Current consumption at different TX power levels: (1) +27dBm - 90mA; (2) +20dBm - 45mA; (3) +14dBm - 25mA; (4) RX mode - 12mA; (5) Sleep mode - 0.5μA. Plan your power supply and battery capacity accordingly. For battery applications, consider duty cycling or using lower TX power.", decisionGuide: "90mA at +27dBm; 45mA at +20dBm; plan power budget accordingly.", keywords: ["current consumption", "PA power", "battery life"] }
    ]
  });
}

// 3. Add 3rd solution
console.log('3. Adding 3rd solution...');
solutionsJson.solutions.push({
  id: "wireless-iot-solution",
  title: "Wireless IoT Sensor Network Solution",
  slug: "wireless-iot-solution",
  description: "Complete wireless sensor network solution for IoT applications with sub-GHz transceivers, low-power microcontrollers, and sensor interfaces.",
  longDescription: "This wireless IoT sensor network solution provides everything needed to deploy battery-powered sensor nodes with long-range wireless connectivity. The AU7040 sub-GHz transceiver provides reliable communication up to 2km, while the AU6020 sensor interface enables accurate temperature and environmental measurements. The solution includes power management optimized for multi-year battery life on coin cells.",
  applications: [
    "Smart agriculture monitoring",
    "Industrial sensor networks",
    "Environmental monitoring",
    "Smart building automation",
    "Asset tracking systems"
  ],
  benefits: [
    "2km+ wireless range with sub-GHz",
    "5+ year battery life on coin cell",
    "High-precision sensor measurements",
    "Star or mesh network topology",
    "Low-cost sensor node design",
    "Robust interference immunity"
  ],
  coreAdvantages: [
    "Long-range sub-GHz communication",
    "Ultra-low power consumption",
    "Complete sensor interface",
    "Flexible network architecture",
    "Cost-optimized BOM"
  ],
  bomList: [
    { partNumber: "AU7040", description: "Sub-GHz wireless transceiver", quantity: 1, alternatives: ["CC1101"], keyComponent: true },
    { partNumber: "AU6020", description: "RTD-to-digital converter", quantity: 1, alternatives: ["MAX31865"], keyComponent: true },
    { partNumber: "CR2032", description: "Coin cell battery", quantity: 1, alternatives: ["CR2450"], keyComponent: false },
    { partNumber: "Pt1000", description: "Temperature sensor", quantity: 1, alternatives: ["NTC thermistor"], keyComponent: false },
    { partNumber: "PCB Antenna", description: "Integrated PCB antenna", quantity: 1, alternatives: ["Whip antenna"], keyComponent: false }
  ],
  technicalSpecs: {
    "Wireless Range": "2km+ line-of-sight",
    "Frequency Band": "433/868/915MHz",
    "Battery Life": "5+ years (CR2032)",
    "Measurement Accuracy": "±0.1°C (temperature)",
    "Network Topology": "Star or mesh",
    "Max Nodes": "1000+ in mesh"
  },
  customerCases: [
    {
      customerName: "Agricultural Technology Company",
      industry: "Smart Agriculture",
      application: "Soil Monitoring Network",
      challenge: "Needed wireless soil temperature and moisture monitoring across large farm",
      solution: "Deployed 50 AU7040-based sensor nodes with AU6020 for soil temperature",
      result: "Achieved 2-year battery life with 500m range between nodes",
      products: ["AU7040", "AU6020"]
    },
    {
      customerName: "Industrial Equipment Manufacturer",
      industry: "Manufacturing",
      application: "Equipment Health Monitoring",
      challenge: "Required wireless vibration and temperature monitoring on factory floor",
      solution: "Implemented AU7040 wireless nodes with various sensors",
      result: "Reduced wiring costs by 70% and enabled predictive maintenance",
      products: ["AU7040", "AU6040"]
    }
  ],
  faeInsights: {
    author: "Lisa Wang",
    title: "RF Applications Engineer",
    summary: "Successful IoT deployment requires careful attention to power management and RF design.",
    content: "I've helped deploy many IoT sensor networks using the AU7040. The key to long battery life is aggressive power management: keep the radio in sleep mode as much as possible, use short transmission bursts, and optimize the duty cycle. For sensor measurements, the AU6020 provides excellent accuracy while consuming minimal power. Network architecture matters - star topology is simpler but mesh provides better coverage. For agricultural applications, consider environmental sealing as moisture is the enemy of electronics. Always do range testing in the actual deployment environment before finalizing the design.",
    insight: "IoT sensor networks require optimization of both RF performance and power consumption.",
    logic: "The AU7040's low sleep current and fast wake-up enable long battery life while maintaining reliable communication.",
    keyTakeaways: [
      "Minimize radio on-time to extend battery life",
      "Test range in actual deployment environment",
      "Use mesh topology for better coverage",
      "Implement environmental protection for outdoor use"
    ],
    commonPitfalls: [
      "Underestimating power consumption in real deployments",
      "Insufficient range testing before deployment",
      "Missing environmental protection for outdoor nodes",
      "Overly complex network protocols"
    ],
    bestPractices: [
      "Start with star topology, migrate to mesh if needed",
      "Implement adaptive data rate based on link quality",
      "Use redundant nodes for critical measurements",
      "Plan for over-the-air firmware updates"
    ],
    decisionFramework: {
      steps: [
        "Define sensor requirements and measurement frequency",
        "Calculate power budget for target battery life",
        "Determine wireless range and network topology",
        "Design PCB with proper antenna matching",
        "Test and optimize power consumption"
      ],
      decisionMatrix: {
        "Battery life critical": "Use AU7040 with aggressive duty cycling",
        "Long range required": "Consider AU7050 with +27dBm PA",
        "High node density": "Implement mesh routing protocol"
      }
    }
  },
  faqs: [
    {
      question: "What is the actual battery life?",
      answer: "Battery life depends on duty cycle: (1) 1 transmission/hour - 5+ years on CR2032; (2) 1 transmission/minute - 2-3 years; (3) Continuous RX - 1-2 weeks. Optimize by minimizing TX power, using short packets, and maximizing sleep time. The AU7040's 0.5μA sleep current is key to long battery life.",
      decisionGuide: "5+ years at 1 TX/hour; 2-3 years at 1 TX/minute.",
      keywords: ["battery life", "coin cell", "power optimization"]
    },
    {
      question: "Should I use star or mesh topology?",
      answer: "Topology selection depends on your application: (1) Star - simpler, lower latency, requires central gateway within range of all nodes; (2) Mesh - better coverage, self-healing, higher complexity and latency. For small deployments (<50 nodes) with good gateway placement, star is preferred. For large areas or many obstacles, mesh provides better coverage.",
      decisionGuide: "Use star for simple small networks; mesh for large area coverage.",
      keywords: ["network topology", "star vs mesh", "coverage"]
    },
    {
      question: "How many nodes can I have?",
      answer: "Network capacity depends on topology and traffic: (1) Star - limited by channel capacity, typically 100-200 nodes; (2) Mesh - 1000+ nodes possible with proper routing. Limiting factors: channel bandwidth, collision avoidance, gateway processing capacity. For large networks, implement time-division or frequency-division multiplexing.",
      decisionGuide: "100-200 nodes in star; 1000+ in mesh with proper planning.",
      keywords: ["network capacity", "node limit", "scalability"]
    }
  ],
  relatedArticles: [
    "aurasemi-wireless-selection-guide",
    "aurasemi-sensor-selection-guide",
    "aurasemi-power-selection-guide"
  ]
});

// 4. Add 5th support article
console.log('4. Adding 5th support article...');
supportJson.articles.push({
  id: "aurasemi-faq-troubleshooting",
  title: "Aurasemi Products - FAQ and Troubleshooting Guide",
  slug: "aurasemi-faq-troubleshooting",
  author: {
    name: "Aurasemi FAE Team",
    title: "Technical Support Team",
    image: "/images/team/aurasemi-fae.jpg"
  },
  publishDate: "2024-03-25",
  category: "FAQ",
  tags: ["FAQ", "Troubleshooting", "Clock", "Power", "Sensor", "Wireless"],
  summary: "Comprehensive FAQ and troubleshooting guide for Aurasemi clock, power, sensor, and wireless products. Common issues and solutions.",
  content: [
    {
      type: "paragraph",
      text: "This FAQ and troubleshooting guide addresses common questions and issues encountered when using Aurasemi products. If you don't find your answer here, please contact LiTong FAE support."
    },
    {
      type: "heading",
      text: "Clock Products - Common Issues"
    },
    {
      type: "paragraph",
      text: "Clock products are sensitive to power supply noise and PCB layout. Most issues can be resolved by following the datasheet recommendations for power filtering and layout."
    },
    {
      type: "heading",
      text: "Power Management - Common Issues"
    },
    {
      type: "paragraph",
      text: "Power management issues often relate to component selection (inductor, capacitors) or thermal design. Ensure adequate copper area for heat dissipation and use recommended component values."
    }
  ],
  relatedArticles: [
    "aurasemi-clock-selection-guide",
    "aurasemi-power-selection-guide",
    "aurasemi-sensor-selection-guide",
    "aurasemi-wireless-selection-guide"
  ],
  customerCases: [
    {
      customerName: "Various Customers",
      challenge: "Various technical issues during development",
      solution: "Resolved using troubleshooting guide and FAE support",
      feedback: "Comprehensive guide helped resolve issues quickly"
    }
  ],
  faqs: [
    {
      question: "Where can I find the latest datasheet?",
      answer: "Latest datasheets are available on the LiTong website product pages. Always check for the latest revision before starting your design. Contact LiTong FAE if you need assistance locating specific documentation.",
      decisionGuide: "Download latest datasheets from LiTong website.",
      keywords: ["datasheet", "documentation", "product specs"]
    },
    {
      question: "How do I contact technical support?",
      answer: "LiTong provides multiple support channels: (1) Contact your local FAE directly; (2) Email support@BeiLuo.com; (3) Call technical hotline; (4) Submit support request on website. Typical response time is within 24 hours.",
      decisionGuide: "Contact FAE directly or email support for assistance.",
      keywords: ["technical support", "contact FAE", "help"]
    },
    {
      question: "Are evaluation boards available?",
      answer: "Yes, evaluation boards are available for most Aurasemi products. Contact LiTong sales to request evaluation boards. Boards include complete documentation and example software. Evaluation boards are typically provided free to qualified customers.",
      decisionGuide: "Contact LiTong sales to request evaluation boards.",
      keywords: ["evaluation board", "EVB", "development kit"]
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Standard MOQ is 1,000 pieces for production orders. Samples (5-10 pieces) are available for evaluation. Contact LiTong sales for specific volume pricing and flexible ordering arrangements.",
      decisionGuide: "MOQ 1,000 pieces; samples available for evaluation.",
      keywords: ["MOQ", "minimum order", "volume"]
    },
    {
      question: "How do I verify product authenticity?",
      answer: "Purchase only from authorized distributors like LiTong. Verify packaging, part markings, and lot codes. Contact Aurasemi or LiTong if you have any concerns about product authenticity.",
      decisionGuide: "Purchase from authorized distributors; verify markings.",
      keywords: ["authenticity", "genuine", "counterfeit"]
    }
  ],
  faeInsights: {
    keyPoints: [
      "Most issues can be prevented by following datasheet recommendations",
      "Proper PCB layout is critical for high-performance products",
      "Contact FAE early if you encounter issues"
    ],
    designTips: [
      "Read the datasheet thoroughly before starting design",
      "Use evaluation boards to verify performance",
      "Follow reference designs for best results"
    ],
    commonPitfalls: [
      "Insufficient power supply filtering",
      "Inadequate PCB layout",
      "Missing protection circuits"
    ]
  }
});

// Save all files
console.log('\nSaving all files...');
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsJson, null, 2));
fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsJson, null, 2));
fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportJson, null, 2));

console.log('\n✅ Aurasemi data completion finished!');
console.log('\nSummary:');
console.log(`- Product categories: ${productsJson.categories.length}`);
productsJson.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products.length} products`);
});
console.log(`- Solutions: ${solutionsJson.solutions.length}`);
console.log(`- Support articles: ${supportJson.articles.length}`);
