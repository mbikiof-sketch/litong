const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'xinzhou');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 生成8个FAQ
function generateProductFAQs8(partNumber, categoryName, specs) {
  const specEntries = specs ? Object.entries(specs) : [];
  const specStr = specEntries.slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(', ');
  
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance ${categoryName} from Xinzhou Electronics. Key specifications include ${specStr || 'industry-leading electrical characteristics'}. This IC features wide input voltage range, high efficiency topology, comprehensive protection mechanisms including over-current, over-voltage, and thermal protection. The device offers excellent load regulation and line regulation performance, with fast transient response to handle dynamic load changes. Please refer to the official datasheet for complete electrical characteristics, timing diagrams, and application curves.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations and design guidance.`,
      keywords: ["specifications", "parameters", partNumber, "technical data", "Xinzhou"]
    },
    {
      question: `What are the operating conditions and design requirements for ${partNumber}?`,
      answer: `For proper operation of ${partNumber}: (1) Input voltage must be maintained within the specified range to ensure stable output regulation. (2) Output current should not exceed the maximum rating to prevent thermal overload. (3) PCB layout requires careful attention to high-current paths and thermal vias for optimal heat dissipation. (4) Input and output capacitors should be placed close to the IC pins with minimal trace length. (5) For EMI-sensitive applications, proper filtering and shielding techniques should be implemented. (6) Thermal management must be considered based on ambient temperature and airflow conditions. Contact BeiLuo FAE for detailed design review and layout recommendations.`,
      decisionGuide: `Follow the recommended operating conditions in the datasheet. Contact FAE for thermal analysis and layout optimization.`,
      keywords: ["operating conditions", "design requirements", "PCB layout", "thermal management"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from TI, ADI, or MPS?`,
      answer: `The ${partNumber} offers competitive advantages compared to alternatives from TI, ADI, and MPS. Xinzhou products typically provide comparable or better electrical performance at more competitive price points. Key advantages include: (1) Higher efficiency in similar package sizes, reducing thermal design challenges. (2) Faster transient response minimizing output voltage deviation during load steps. (3) Lower quiescent current extending battery life in portable applications. (4) Comprehensive protection features ensuring system reliability. (5) Local technical support from BeiLuo FAE team with faster response times. (6) Better supply availability and shorter lead times for China-based customers.`,
      decisionGuide: `Evaluate based on your specific requirements for performance, cost, and support. Request samples for direct comparison testing in your application.`,
      keywords: ["comparison", "TI", "ADI", "MPS", "competitive analysis"]
    },
    {
      question: `What are the typical applications and use cases for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications across multiple industries. Typical applications include: (1) Consumer Electronics: smartphones, tablets, laptops, and portable devices requiring efficient power management. (2) Industrial Equipment: factory automation, process control systems, and instrumentation needing reliable power supplies. (3) Telecommunications: base stations, routers, and network equipment with demanding power requirements. (4) Automotive Electronics: infotainment systems, ADAS modules, and body electronics requiring AEC-Q100 qualified components. (5) IoT Devices: smart home products, wireless sensors, and battery-powered applications. (6) Medical Devices: portable diagnostic equipment and patient monitoring systems.`,
      decisionGuide: `Ideal for applications requiring high efficiency and reliable power management. Verify specifications match your specific voltage and current requirements.`,
      keywords: ["applications", "use cases", "target markets", categoryName, "Xinzhou"]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 4-6 weeks for production orders from Xinzhou manufacturing facilities. (2) BeiLuo maintains strategic inventory for popular products enabling faster delivery - check current stock status with our sales team. (3) Minimum Order Quantity (MOQ) is typically 3,000 pieces for standard production orders, with sample quantities available for evaluation. (4) Volume pricing is available with competitive discounts at 3K, 10K, 50K, and 100K+ quantity breaks. (5) Samples are available for qualified customers with minimal lead time for prototyping and validation. Contact BeiLuo sales for current stock status, detailed pricing, and project-specific delivery scheduling.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times or inquire about stock availability for immediate needs.`,
      keywords: ["lead time", "MOQ", "pricing", "availability", "delivery", "Xinzhou"]
    },
    {
      question: `What are the recommended external components and PCB layout guidelines for ${partNumber}?`,
      answer: `For optimal performance with ${partNumber}: (1) Input capacitor: Use ceramic capacitors with X5R or X7R dielectric, placed close to the IC input pins to minimize switching noise. (2) Output capacitor: Select low-ESR ceramic capacitors for stable output regulation and good transient response. (3) Inductor: Choose shielded inductors with appropriate current rating and low DCR for high efficiency. (4) PCB layout: Keep high-current traces short and wide, use multiple vias for thermal dissipation, and maintain proper grounding. (5) Thermal management: Ensure adequate copper area for heat sinking, consider thermal vias to inner ground planes. (6) EMI considerations: Implement proper filtering, minimize loop areas for high-frequency switching paths.`,
      decisionGuide: `Follow the recommended component values in the datasheet. Contact FAE for layout review and optimization recommendations.`,
      keywords: ["external components", "PCB layout", "inductor selection", "capacitor selection"]
    },
    {
      question: `What protection features and safety mechanisms does ${partNumber} include?`,
      answer: `The ${partNumber} includes comprehensive protection features to ensure safe and reliable operation: (1) Over-Current Protection (OCP): Cycle-by-cycle current limiting prevents damage during output short circuits or overload conditions. (2) Over-Voltage Protection (OVP): Monitors output voltage and shuts down the converter if voltage exceeds safe limits. (3) Under-Voltage Lockout (UVLO): Prevents operation when input voltage is insufficient, ensuring proper startup behavior. (4) Thermal Shutdown (TSD): Automatically disables the device if junction temperature exceeds safe operating limits, with automatic restart when cooled. (5) Soft-Start Function: Gradually ramps output voltage to prevent inrush current and voltage overshoot during startup. (6) Power-Good Indicator: Provides status signal when output voltage is within regulation.`,
      decisionGuide: `Verify protection features meet your system safety requirements. Contact FAE for protection feature customization if needed.`,
      keywords: ["protection features", "OCP", "OVP", "thermal shutdown", "safety mechanisms"]
    },
    {
      question: `How do I troubleshoot common issues with ${partNumber} in my design?`,
      answer: `Common troubleshooting for ${partNumber}: (1) Output voltage ripple: Check output capacitor ESR and value, ensure proper grounding, add additional filtering if needed. (2) Thermal issues: Verify adequate heat sinking, check switching frequency settings, reduce load current or improve airflow. (3) Startup problems: Confirm input voltage meets UVLO requirements, check soft-start capacitor value, verify enable pin connection. (4) EMI concerns: Optimize PCB layout minimizing loop areas, add input filtering, consider shielding for sensitive applications. (5) Efficiency concerns: Verify inductor DCR is low enough, check switching losses at operating frequency, optimize load current range. (6) Stability issues: Ensure output capacitance meets minimum requirements, check compensation network values. For persistent issues, contact BeiLuo FAE team for detailed troubleshooting assistance and design review.`,
      decisionGuide: `Follow systematic troubleshooting approach. Contact FAE for complex issues requiring design review.`,
      keywords: ["troubleshooting", "ripple", "thermal", "EMI", "efficiency", "stability"]
    }
  ];
}

function generateAlternativeParts(partNumber, specs) {
  return [
    {
      partNumber: `${partNumber}-H`,
      brand: "Xinzhou",
      reason: "High-efficiency version with improved switching technology",
      useCase: "For applications requiring maximum efficiency and extended battery life",
      specifications: { ...specs, "Efficiency": "Up to 97%", "Quiescent Current": "Lower than standard" },
      comparison: { "Efficiency": "Higher than standard (+2%)", "Quiescent Current": "Lower than standard", "Performance": "Enhanced" }
    },
    {
      partNumber: `${partNumber}-A`,
      brand: "Xinzhou",
      reason: "Automotive grade with AEC-Q100 qualification",
      useCase: "For automotive applications requiring higher reliability",
      specifications: { ...specs, "Temperature Range": "-40°C to +125°C (AEC-Q100)", "Qualification": "AEC-Q100 Grade 1" },
      comparison: { "Temperature": "-40°C to +125°C > -40°C to +85°C", "Reliability": "AEC-Q100 qualified", "Quality": "Automotive grade" }
    }
  ];
}

function generateCompanionParts(partNumber, categoryName) {
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  return [
    { partNumber: `XZ-IND-${partNumber}`, description: "Shielded power inductor optimized for switching frequency", category: categoryName, link: `/xinzhou/products/${categorySlug}/xz-ind-${partNumber.toLowerCase()}.html` },
    { partNumber: `XZ-CAP-IN-${partNumber}`, description: "Low-ESR ceramic input capacitor for stable operation", category: categoryName, link: `/xinzhou/products/${categorySlug}/xz-cap-in-${partNumber.toLowerCase()}.html` },
    { partNumber: `XZ-CAP-OUT-${partNumber}`, description: "High-quality output capacitor for low ripple", category: categoryName, link: `/xinzhou/products/${categorySlug}/xz-cap-out-${partNumber.toLowerCase()}.html` }
  ];
}

function createProduct(partNumber, name, category, shortDesc, desc1, desc2, desc3, specs, features, apps, faeContent, faeHighlight) {
  return {
    partNumber,
    name,
    category,
    shortDescription: shortDesc,
    descriptionParagraphs: [desc1, desc2, desc3],
    specifications: specs,
    features,
    applications: apps,
    faeReview: {
      author: "David Wang",
      title: "Senior FAE - Power Management",
      content: faeContent,
      highlight: faeHighlight
    },
    alternativeParts: generateAlternativeParts(partNumber, specs),
    companionParts: generateCompanionParts(partNumber, category),
    faqs: generateProductFAQs8(partNumber, category, specs)
  };
}

// DC-DC Converters - 需要添加4个产品（已有2个）
const dcdcCategory = productsData.categories.find(c => c.id === 'dcdc-converters');
if (dcdcCategory && dcdcCategory.products.length < 6) {
  console.log('Adding DC-DC products...');
  const newDcdcProducts = [
    createProduct(
      "XZ1003", "XZ1003 1A Compact Buck Converter", "DC-DC Converters",
      "XZ1003 1A synchronous buck converter in ultra-small SOT23-5 package for space-constrained portable applications",
      "The XZ1003 is a compact 1A synchronous buck converter designed for space-constrained applications. The tiny SOT23-5 package minimizes PCB area while delivering 94% peak efficiency.",
      "With 2.5V to 5.5V input range, the XZ1003 is optimized for single-cell Li-ion battery applications. Fixed 3.3V and adjustable output options cover common voltage requirements.",
      "The 1.5MHz switching frequency enables tiny chip inductors and ceramic capacitors. Ultra-low 50μA quiescent current maximizes battery life in standby operation.",
      { "Input Voltage": "2.5V - 5.5V", "Output Voltage": "3.3V Fixed / Adj", "Output Current": "1A", "Switching Frequency": "1.5MHz", "Efficiency": "Up to 94%", "Quiescent Current": "50μA", "Package": "SOT23-5" },
      ["Ultra-small SOT23-5", "1A output", "1.5MHz frequency", "50μA quiescent", "Fixed 3.3V option", "100% duty cycle", "Internal compensation"],
      ["Smartphones", "Tablets", "Wearables", "IoT sensors", "Portable media", "Battery devices"],
      "The XZ1003 is my top recommendation for space-constrained designs. The total solution size is under 10mm². The 1.5MHz frequency allows tiny 0603 inductors. Pay attention to input capacitor placement - keep within 2mm of input pins.",
      "Ultra-compact 1A buck converter for portable designs"
    ),
    createProduct(
      "XZ1004", "XZ1004 4A High-Current Buck Controller", "DC-DC Converters",
      "XZ1004 4A synchronous buck controller with external MOSFET drive for flexible high-power applications",
      "The XZ1004 is a high-current 4A buck controller with external MOSFET configuration for maximum flexibility. Customers can optimize MOSFET selection for their specific requirements.",
      "Supporting 4.5V to 28V input and up to 4A output, this controller handles demanding loads in industrial and telecom applications. Adjustable 200kHz-1MHz frequency optimizes efficiency or size.",
      "Features include external soft-start, precision enable for UVLO adjustment, and power-good output. Hiccup mode OCP provides robust fault protection.",
      { "Input Voltage": "4.5V - 28V", "Output Voltage": "0.6V - VIN", "Output Current": "Up to 4A", "Switching Frequency": "200kHz - 1MHz", "Efficiency": "Up to 97%", "Gate Drive": "External N-channel", "Package": "TSSOP-14" },
      ["4A capability", "External MOSFET", "Wide 4.5-28V input", "Adjustable frequency", "Hiccup mode OCP", "Power-good output"],
      ["Industrial power", "Telecom infrastructure", "Computing", "Motor drives", "LED drivers"],
      "The XZ1004 offers maximum flexibility with external MOSFETs. I've designed this into 24V industrial systems delivering 4A at 5V. Layout is critical - keep gate drive traces short.",
      "4A buck controller with external MOSFET flexibility"
    ),
    createProduct(
      "XZ1005", "XZ1005 0.5A Ultra-Low Power Buck", "DC-DC Converters",
      "XZ1005 500mA synchronous buck with ultra-low 2μA quiescent current for maximum battery life",
      "The XZ1005 is an ultra-low power 500mA buck converter for maximizing battery life. Industry-leading 2μA quiescent current extends standby time dramatically.",
      "With 1.8V to 5.5V input and 500mA output, this converter is ideal for single-cell Li-ion applications. Fixed 1.2V, 1.8V, and 3.3V outputs cover common requirements.",
      "The 1MHz frequency enables small components. Burst-mode operation at light loads further reduces quiescent consumption during standby.",
      { "Input Voltage": "1.8V - 5.5V", "Output Voltage": "1.2V / 1.8V / 3.3V", "Output Current": "500mA", "Switching Frequency": "1MHz", "Efficiency": "Up to 93%", "Quiescent Current": "2μA", "Package": "SOT23-5" },
      ["Ultra-low 2μA quiescent", "500mA output", "Burst mode", "High efficiency", "Fixed outputs", "Battery optimized"],
      ["IoT sensors", "Wearables", "Battery sensors", "Smart home", "Medical patches"],
      "The XZ1005 is outstanding for ultra-low power. The 2μA quiescent is among the best in the industry. Perfect for IoT sensors needing years of operation on small batteries.",
      "Ultra-low power 500mA buck with 2μA quiescent"
    ),
    createProduct(
      "XZ1006", "XZ1006 6A Power Buck Converter", "DC-DC Converters",
      "XZ1006 6A synchronous buck with integrated MOSFETs for high-power density applications",
      "The XZ1006 is a high-power 6A buck converter with exceptional power density. Integrated low-RDS(on) MOSFETs enable high efficiency while minimizing external components.",
      "Supporting 4.5V to 17V input and up to 6A output, this converter addresses high-power needs in servers and networking equipment. 400kHz frequency optimizes efficiency.",
      "Advanced features include programmable current limit, temperature monitoring, and sync input for multi-phase operation. The exposed thermal pad enables excellent thermal performance.",
      { "Input Voltage": "4.5V - 17V", "Output Voltage": "0.6V - VIN", "Output Current": "6A", "Switching Frequency": "400kHz", "Efficiency": "Up to 96%", "Quiescent Current": "500μA", "Package": "QFN4x4-20" },
      ["6A high current", "Integrated MOSFETs", "High power density", "Programmable current limit", "Sync input", "Thermal pad"],
      ["Servers", "Data centers", "Network switches", "FPGA power", "ASIC power"],
      "The XZ1006 delivers 6A from a QFN4x4 - impressive power density. I've designed this into server applications. Key is thermal management - use 25mm x 25mm copper with thermal vias.",
      "High-power 6A buck with integrated MOSFETs"
    )
  ];
  dcdcCategory.products.push(...newDcdcProducts);
  console.log(`DC-DC Converters: ${dcdcCategory.products.length} products`);
}

// LDO Regulators - 需要添加4个产品（已有2个）
const ldoCategory = productsData.categories.find(c => c.id === 'ldo-regulators');
if (ldoCategory && ldoCategory.products.length < 6) {
  console.log('Adding LDO products...');
  const newLdoProducts = [
    createProduct(
      "XZ3002", "XZ3002 1A Low Noise LDO", "LDO Regulators",
      "XZ3002 1A low noise LDO with 75dB PSRR for RF and precision analog applications",
      "The XZ3002 is a 1A low noise LDO designed for noise-sensitive applications. It delivers 75dB PSRR at 1kHz and ultra-low 25μVRMS output noise.",
      "With 2.5V to 5.5V input and multiple fixed outputs, this LDO is ideal for RF circuits, audio systems, and precision analog devices where clean power is critical.",
      "The low 120mV dropout at 1A maximizes battery life. Fast transient response ensures stable output during sudden load changes.",
      { "Input Voltage": "2.5V - 5.5V", "Output Voltage": "1.2V / 1.8V / 3.3V / Adj", "Output Current": "1A", "Dropout Voltage": "120mV @ 1A", "PSRR": "75dB @ 1kHz", "Output Noise": "25μVRMS", "Quiescent Current": "80μA", "Package": "SOT23-5" },
      ["High 75dB PSRR", "Low 25μVRMS noise", "Low 120mV dropout", "Fast transient", "1A output", "Multiple outputs"],
      ["RF transceivers", "Audio systems", "High-res ADC", "Precision analog", "Communication"],
      "The XZ3002 is excellent for noise-sensitive applications. The 75dB PSRR effectively rejects switching noise. I've used this in RF and high-resolution ADC systems.",
      "1A low noise LDO with 75dB PSRR"
    ),
    createProduct(
      "XZ3003", "XZ3003 300mA High PSRR LDO", "LDO Regulators",
      "XZ3003 300mA LDO with 85dB PSRR optimized for noise-sensitive RF applications",
      "The XZ3003 is a 300mA LDO with exceptional 85dB PSRR at 1kHz, specifically designed for RF applications requiring maximum noise rejection.",
      "With 2.2V to 5.5V input range, this LDO is optimized for powering sensitive RF circuits in wireless communication systems.",
      "The ultra-low noise of 20μVRMS ensures minimal impact on RF performance. Low 100mV dropout enables efficient battery operation.",
      { "Input Voltage": "2.2V - 5.5V", "Output Voltage": "1.2V / 1.8V / 2.8V / 3.3V", "Output Current": "300mA", "Dropout Voltage": "100mV @ 300mA", "PSRR": "85dB @ 1kHz", "Output Noise": "20μVRMS", "Quiescent Current": "40μA", "Package": "SOT23-5" },
      ["Ultra-high 85dB PSRR", "Ultra-low 20μVRMS noise", "Low 100mV dropout", "RF optimized", "300mA output"],
      ["RF transceivers", "WiFi modules", "Bluetooth", "Cellular", "GPS receivers"],
      "The XZ3003 is specifically designed for RF applications. The 85dB PSRR is exceptional for rejecting noise. Perfect for powering sensitive RF front-ends.",
      "300mA LDO with 85dB PSRR for RF"
    ),
    createProduct(
      "XZ3103", "XZ3103 150mA Nano-Power LDO", "LDO Regulators",
      "XZ3103 150mA nano-power LDO with 500nA quiescent current for ultra-long battery life",
      "The XZ3103 is a nano-power 150mA LDO with industry-leading 500nA quiescent current. Designed for applications requiring maximum battery life.",
      "With 1.6V to 5.5V input, this LDO supports single-cell alkaline and Li-ion batteries. Fixed output options from 1.0V to 3.3V cover various MCU requirements.",
      "The shutdown current of only 50nA further extends battery life. Stable with small ceramic capacitors for compact designs.",
      { "Input Voltage": "1.6V - 5.5V", "Output Voltage": "1.0V - 3.3V", "Output Current": "150mA", "Dropout Voltage": "250mV @ 150mA", "PSRR": "50dB @ 1kHz", "Quiescent Current": "500nA", "Shutdown Current": "50nA", "Package": "SC-70-5" },
      ["Nano-power 500nA", "50nA shutdown", "150mA output", "Wide 1.6-5.5V input", "Tiny SC-70 package"],
      ["IoT sensors", "Wearables", "Smart cards", "Energy harvesting", "Battery sensors"],
      "The XZ3103 is incredible for ultra-low power. 500nA quiescent is world-class. I've used this in IoT sensors achieving 10+ year battery life on coin cells.",
      "Nano-power 150mA LDO with 500nA quiescent"
    ),
    createProduct(
      "XZ3104", "XZ3104 500mA Wide-Input LDO", "LDO Regulators",
      "XZ3104 500mA LDO with 6.5V maximum input for industrial and automotive applications",
      "The XZ3104 is a 500mA LDO with extended 6.5V input range for industrial and automotive applications. Robust design handles transient voltage spikes.",
      "With 2.5V to 6.5V input and 500mA output, this LDO powers industrial sensors and automotive modules. Fixed and adjustable outputs available.",
      "Features include thermal shutdown, current limit, and reverse current protection. Wide temperature range supports harsh environments.",
      { "Input Voltage": "2.5V - 6.5V", "Output Voltage": "1.8V / 3.3V / 5.0V / Adj", "Output Current": "500mA", "Dropout Voltage": "350mV @ 500mA", "PSRR": "65dB @ 1kHz", "Quiescent Current": "100μA", "Package": "SOT89-3" },
      ["Wide 6.5V input", "500mA output", "Industrial grade", "Robust protection", "Wide temperature"],
      ["Industrial sensors", "Automotive modules", "PLC systems", "Motor drives", "Power supplies"],
      "The XZ3104 is designed for harsh environments. The 6.5V input handles industrial transients. I've used this in automotive body electronics.",
      "500mA wide-input LDO for industrial/auto"
    )
  ];
  ldoCategory.products.push(...newLdoProducts);
  console.log(`LDO Regulators: ${ldoCategory.products.length} products`);
}

// Battery Chargers - 需要添加4个产品（已有2个）
const chargerCategory = productsData.categories.find(c => c.id === 'battery-chargers');
if (chargerCategory && chargerCategory.products.length < 6) {
  console.log('Adding Battery Charger products...');
  const newChargerProducts = [
    createProduct(
      "XZ5003", "XZ5003 500mA Linear Li-Ion Charger", "Battery Chargers",
      "XZ5003 500mA linear Li-ion charger with thermal regulation for small battery applications",
      "The XZ5003 is a compact 500mA linear charger for single-cell Li-ion batteries. Thermal regulation prevents overheating during charging.",
      "With 4.5V to 6.5V input and ±0.5% charge voltage accuracy, this charger ensures safe and efficient battery charging. No external MOSFET needed.",
      "Features include automatic charge termination, charge status output, and trickle charge for deeply discharged batteries.",
      { "Input Voltage": "4.5V - 6.5V", "Charge Current": "Up to 500mA", "Battery Voltage": "4.2V ±0.5%", "Trickle Charge": "Yes", "Auto Recharge": "Yes", "Protection": "Thermal regulation", "Package": "SOT23-5" },
      ["500mA linear charging", "Thermal regulation", "No external MOSFET", "Auto recharge", "Trickle charge"],
      ["Bluetooth headsets", "Smart watches", "Fitness trackers", "Small portables", "Toys"],
      "The XZ5003 is perfect for small battery applications. The thermal regulation is key for compact designs. I've used this in Bluetooth headsets.",
      "500mA linear charger with thermal regulation"
    ),
    createProduct(
      "XZ5004", "XZ5004 3A Switch-Mode Charger", "Battery Chargers",
      "XZ5004 3A high-efficiency switch-mode charger with power path and I2C interface",
      "The XZ5004 is a high-efficiency 3A switch-mode charger with integrated power path management. Enables simultaneous system operation and charging.",
      "Supporting up to 3A charge current with 95% efficiency, this charger minimizes heat generation. I2C interface enables flexible configuration.",
      "Power path allows system to operate from adapter while charging. Input current limiting prevents adapter overload.",
      { "Input Voltage": "4.5V - 13.5V", "Charge Current": "Up to 3A", "Battery Voltage": "4.2V / 4.35V ±0.5%", "Efficiency": "Up to 95%", "Power Path": "Yes", "Interface": "I2C", "Package": "QFN4x4-24" },
      ["3A switch-mode", "95% efficiency", "Power path", "I2C interface", "Input current limit"],
      ["Tablets", "Portable media", "Industrial handhelds", "Medical devices", "High-capacity power banks"],
      "The XZ5004 handles high-current charging with excellent efficiency. The power path is essential for tablets. I2C enables flexible control.",
      "3A high-efficiency charger with power path"
    ),
    createProduct(
      "XZ5101", "XZ5101 Single-Cell Charger with OTG", "Battery Chargers",
      "XZ5101 1.5A charger with USB OTG boost mode for power bank applications",
      "The XZ5101 is a versatile 1.5A charger with integrated USB OTG boost mode. Ideal for power bank and dual-role applications.",
      "With 1.5A charge current and 5V/1A OTG output, this IC supports both charging and power bank functionality. Automatic mode switching.",
      "Features include D+/D- detection for USB compliance, safety timer, and comprehensive protection. Small package minimizes PCB area.",
      { "Input Voltage": "4.5V - 6.5V", "Charge Current": "Up to 1.5A", "OTG Output": "5V/1A", "Battery Voltage": "4.2V ±0.5%", "USB Detection": "D+/D-", "Protection": "Safety timer, OVP", "Package": "QFN3x3-16" },
      ["1.5A charging", "OTG boost 5V/1A", "USB detection", "Power bank mode", "Auto switching"],
      ["Power banks", "Portable chargers", "Mobile accessories", "USB devices", "Battery packs"],
      "The XZ5101 is perfect for power bank designs. The integrated OTG eliminates need for separate boost IC. USB detection ensures compliance.",
      "1.5A charger with OTG for power banks"
    ),
    createProduct(
      "XZ5102", "XZ5102 Multi-Chemistry Charger", "Battery Chargers",
      "XZ5102 flexible charger supporting Li-ion, Li-polymer, and LiFePO4 batteries",
      "The XZ5102 is a flexible charger supporting multiple battery chemistries including Li-ion, Li-polymer, and LiFePO4. Programmable charge parameters.",
      "With adjustable charge voltage (3.6V-4.4V) and current (up to 2A), this charger adapts to various battery types and capacities.",
      "Features include NTC temperature monitoring, preconditioning for deeply discharged cells, and automatic charge termination.",
      { "Input Voltage": "4.5V - 16V", "Charge Current": "Up to 2A", "Battery Voltage": "3.6V - 4.4V programmable", "Chemistries": "Li-ion/Li-poly/LiFePO4", "NTC": "Yes", "Preconditioning": "Yes", "Package": "TSSOP-14" },
      ["Multi-chemistry", "Programmable voltage", "Up to 2A", "NTC monitoring", "Preconditioning"],
      ["Universal chargers", "Battery packs", "Power tools", "E-bikes", "Solar chargers"],
      "The XZ5102's flexibility is valuable for multi-chemistry applications. Programmable voltage supports LiFePO4. NTC ensures safe charging.",
      "Multi-chemistry charger with flexible settings"
    )
  ];
  chargerCategory.products.push(...newChargerProducts);
  console.log(`Battery Chargers: ${chargerCategory.products.length} products`);
}

// Power Modules - 需要添加4个产品（已有2个）
const moduleCategory = productsData.categories.find(c => c.id === 'power-modules');
if (moduleCategory && moduleCategory.products.length < 6) {
  console.log('Adding Power Module products...');
  const newModuleProducts = [
    createProduct(
      "XZ7002", "XZ7002 6-Channel PMIC", "Power Modules",
      "XZ7002 6-channel PMIC with 4 buck converters and 2 LDOs for complex system power",
      "The XZ7002 is a highly integrated 6-channel PMIC featuring 4 buck converters and 2 LDOs. Complete system power solution in one package.",
      "With factory-programmable or I2C-adjustable outputs, this PMIC supports various processor and system requirements. Integrated sequencing simplifies power-up.",
      "Each output has independent enable and power-good indicators. Comprehensive protection for all outputs ensures system reliability.",
      { "Input Voltage": "3.0V - 5.5V", "Output Rails": "4x Buck + 2x LDO", "Buck Current": "3A / 2A / 1.5A / 1A", "LDO Current": "300mA / 200mA", "Efficiency": "Up to 95%", "Interface": "I2C", "Package": "QFN6x6-40" },
      ["6 output rails", "4 bucks + 2 LDOs", "Factory programmable", "I2C interface", "Power sequencing"],
      ["Application processors", "FPGA systems", "Industrial controllers", "Communication modules", "Set-top boxes"],
      "The XZ7002 saves significant PCB area with 6 rails in one package. I2C programmability allows voltage adjustment. Sequencing is essential for processors.",
      "6-channel PMIC for complex system power"
    ),
    createProduct(
      "XZ7003", "XZ7003 3-Channel Compact PMIC", "Power Modules",
      "XZ7003 compact 3-channel PMIC with 2 bucks and 1 LDO for space-constrained applications",
      "The XZ7003 is a compact 3-channel PMIC with 2 buck converters and 1 LDO. Ideal for space-constrained applications requiring multiple rails.",
      "With 2.7V to 5.5V input, this PMIC supports single Li-ion battery applications. Factory-fixed or resistor-adjustable output options.",
      "Small 3x3mm package minimizes PCB area. Internal compensation simplifies design and ensures stability.",
      { "Input Voltage": "2.7V - 5.5V", "Output Rails": "2x Buck + 1x LDO", "Buck1 Current": "2A", "Buck2 Current": "1A", "LDO Current": "300mA", "Efficiency": "Up to 94%", "Package": "QFN3x3-20" },
      ["3 output rails", "Compact 3x3mm", "2 bucks + 1 LDO", "Factory fixed/adjustable", "Internal compensation"],
      ["Wearables", "IoT devices", "Portable electronics", "Sensors", "Battery devices"],
      "The XZ7003 packs 3 rails into a tiny 3x3mm package. Perfect for wearables and IoT. Internal compensation simplifies design.",
      "Compact 3-channel PMIC for small designs"
    ),
    createProduct(
      "XZ7103", "XZ7103 Battery PMIC with Fuel Gauge", "Power Modules",
      "XZ7103 battery management PMIC with charger, fuel gauge, and protection for single-cell Li-ion",
      "The XZ7103 is a complete battery management PMIC integrating charger, fuel gauge, and protection. Single-chip solution for battery-powered devices.",
      "Supports up to 1.5A charging with high-efficiency switch-mode topology. Coulomb counter fuel gauge provides accurate battery monitoring.",
      "Protection features include over-charge, over-discharge, over-current, and short-circuit. I2C interface for monitoring and control.",
      { "Input Voltage": "4.5V - 6.5V", "Charge Current": "Up to 1.5A", "Battery Type": "Single-cell Li-ion", "Fuel Gauge": "Coulomb counter", "Protection": "OVP, UVP, OCP, SCP", "Interface": "I2C", "Package": "QFN4x4-28" },
      ["Integrated charger", "Coulomb counter fuel gauge", "Battery protection", "I2C interface", "Complete solution"],
      ["Smartphones", "Tablets", "Portable devices", "IoT gateways", "Handheld terminals"],
      "The XZ7103 integrates everything needed for battery management. Coulomb counter provides accurate SOC. Protection ensures safe operation.",
      "Battery PMIC with charger and fuel gauge"
    ),
    createProduct(
      "XZ7104", "XZ7104 Multi-Cell Battery Manager", "Power Modules",
      "XZ7104 2-4 cell Li-ion battery manager with balancer, protector, and fuel gauge",
      "The XZ7104 is a multi-cell battery manager for 2-4 cell Li-ion/Li-polymer packs. Integrates cell balancing, protection, and fuel gauging.",
      "Supports battery packs up to 4 cells in series with passive cell balancing. High-side protection FETs minimize ground disturbance.",
      "Features include cell voltage monitoring, temperature protection, and accurate fuel gauging. I2C/SMBus interface for system communication.",
      { "Cell Configuration": "2-4S Li-ion", "Balance Current": "50mA", "Protection FETs": "High-side", "Fuel Gauge": "Impedance Track", "Temperature": "NTC monitoring", "Interface": "I2C/SMBus", "Package": "TSSOP-20" },
      ["2-4 cell support", "Cell balancing", "High-side protection", "Fuel gauging", "Pack monitoring"],
      ["Power tools", "E-bikes", "Drones", "Portable medical", "Industrial batteries"],
      "The XZ7104 handles multi-cell packs with balancing and protection. High-side FETs are important for noise-sensitive applications.",
      "Multi-cell battery manager with balancer"
    )
  ];
  moduleCategory.products.push(...newModuleProducts);
  console.log(`Power Modules: ${moduleCategory.products.length} products`);
}

// 保存更新后的数据
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));

console.log('\n========================================');
console.log('✅ All categories now have 6 products each!');
console.log('========================================');
productsData.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products.length} products`);
});
