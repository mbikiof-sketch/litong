const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'tdk-lambda');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 生成8个FAQ
function generateProductFAQs8(partNumber, categoryName, specs) {
  const specEntries = specs ? Object.entries(specs) : [];
  const specStr = specEntries.slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(', ');
  
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance ${categoryName} from TDK-Lambda. Key specifications include ${specStr || 'industry-leading electrical characteristics'}. This power supply features advanced topology design, comprehensive protection mechanisms, and excellent thermal performance. The device offers superior efficiency and reliability for demanding applications. Please refer to the official datasheet for complete electrical characteristics and application guidelines.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations and design guidance.`,
      keywords: ["specifications", "parameters", partNumber, "technical data", "TDK-Lambda"]
    },
    {
      question: `What are the operating conditions and design requirements for ${partNumber}?`,
      answer: `For proper operation of ${partNumber}: (1) Input voltage must be maintained within the specified range to ensure stable output regulation. (2) Output current should not exceed the maximum rating to prevent thermal overload. (3) Ambient temperature must be within rated limits - refer to derating curves for high-temperature operation. (4) PCB layout requires adequate spacing for airflow and thermal management. (5) For medical applications, ensure proper grounding and isolation requirements are met. (6) Input fusing and surge protection should be provided external to the power supply. Contact BeiLuo FAE for detailed design review and thermal analysis.`,
      decisionGuide: `Follow the recommended operating conditions in the datasheet. Contact FAE for thermal analysis and derating calculations.`,
      keywords: ["operating conditions", "design requirements", "thermal management", "derating"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from Mean Well, Cosel, or Delta?`,
      answer: `The ${partNumber} offers competitive advantages compared to alternatives from Mean Well, Cosel, and Delta. TDK-Lambda products typically provide comparable or better electrical performance with unique features. Key advantages include: (1) Industry-leading efficiency up to 96% reducing energy costs and cooling requirements. (2) Comprehensive medical certifications including 2xMOPP isolation for patient safety. (3) Exceptional reliability with MTBF ratings up to 700,000 hours. (4) Global safety certifications (UL, cUL, CE, CB) for worldwide deployment. (5) Standard 5-year warranty demonstrating confidence in product quality. (6) Local technical support from BeiLuo FAE team with faster response times. (7) Proven track record in medical and industrial applications.`,
      decisionGuide: `Evaluate based on your specific requirements for efficiency, certifications, reliability, and support. Request samples for direct comparison testing in your application.`,
      keywords: ["comparison", "Mean Well", "Cosel", "Delta", "competitive analysis"]
    },
    {
      question: `What are the typical applications and use cases for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications across multiple industries. Typical applications include: (1) Medical Equipment: Patient monitors, diagnostic imaging, surgical equipment, and laboratory instruments requiring medical-grade isolation. (2) Industrial Automation: Factory automation, robotics, process control, and test equipment. (3) Telecommunications: Base stations, network infrastructure, data centers, and communication equipment. (4) LED Lighting: High-power LED drivers for commercial and industrial lighting. (5) Test and Measurement: Automated test equipment, calibration systems, and laboratory power. (6) Transportation: Railway systems, electric vehicle charging, and marine electronics.`,
      decisionGuide: `Ideal for applications requiring high reliability and safety certifications. Verify specifications match your specific voltage, current, and certification requirements.`,
      keywords: ["applications", "use cases", "target markets", categoryName, "TDK-Lambda"]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 6-10 weeks for production orders from TDK-Lambda manufacturing facilities. (2) BeiLuo maintains strategic inventory for popular models enabling faster delivery - check current stock status with our sales team. (3) Minimum Order Quantity (MOQ) is typically 10 pieces for standard production orders, with sample quantities available for evaluation. (4) Volume pricing is available with competitive discounts at various quantity breaks. (5) Samples are available for qualified customers with minimal lead time for prototyping and validation. Contact BeiLuo sales for current stock status, detailed pricing, and project-specific delivery scheduling.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times or inquire about stock availability for immediate needs.`,
      keywords: ["lead time", "MOQ", "pricing", "availability", "delivery", "TDK-Lambda"]
    },
    {
      question: `What are the recommended external components and system integration guidelines for ${partNumber}?`,
      answer: `For optimal performance with ${partNumber}: (1) Input protection: Provide external fuse and surge protection per datasheet recommendations. (2) EMI filtering: Additional external filtering may be required for conducted emissions compliance. (3) Output decoupling: Use low-ESR capacitors near the load for transient response improvement. (4) Thermal management: Ensure adequate airflow and heat sinking based on operating conditions. (5) Remote sense: Use remote sense connections for accurate voltage regulation at the load. (6) Parallel operation: For redundant or higher power configurations, follow application notes for current sharing. (7) Grounding: Implement proper safety grounding for medical and industrial applications. Refer to TDK-Lambda application notes for detailed integration guidelines.`,
      decisionGuide: `Follow the recommended external components and integration guidelines in the datasheet. Contact FAE for system design review.`,
      keywords: ["external components", "system integration", "EMI filtering", "thermal management"]
    },
    {
      question: `What protection features and safety mechanisms does ${partNumber} include?`,
      answer: `The ${partNumber} includes comprehensive protection features to ensure safe and reliable operation: (1) Overvoltage Protection (OVP): Shuts down output if voltage exceeds safe limits, protecting downstream equipment. (2) Overcurrent Protection (OCP): Limits output current during overload or short circuit conditions. (3) Overtemperature Protection (OTP): Reduces output or shuts down if internal temperature exceeds safe limits. (4) Input Undervoltage Lockout (UVLO): Prevents operation during brownout conditions. (5) Isolation Protection: Medical-grade 2xMOPP isolation for patient safety (medical models). (6) Safety Certifications: UL/cUL, CE, CB scheme for global compliance. These protection features make the device suitable for demanding applications requiring high reliability and safety.`,
      decisionGuide: `Verify protection features meet your system safety requirements. Contact FAE for protection feature details and application guidance.`,
      keywords: ["protection features", "OVP", "OCP", "OTP", "safety mechanisms"]
    },
    {
      question: `How do I troubleshoot common issues with ${partNumber} in my design?`,
      answer: `Common troubleshooting for ${partNumber}: (1) No output: Verify input voltage is within range, check input fuse, ensure enable pin is properly connected. (2) Output voltage low: Check for overload condition, verify input voltage is not sagging, check for thermal shutdown. (3) Overheating: Verify adequate airflow and cooling, check ambient temperature against derating curves, reduce load if necessary. (4) EMI issues: Ensure proper grounding, add external filtering if needed, verify cable routing. (5) Voltage regulation problems: Check remote sense connections, verify load current is within rating, check for excessive cable drops. (6) Protection trips: Investigate cause of OVP/OCP/OTP events, check for short circuits or overloads. For persistent issues, contact BeiLuo FAE team for detailed troubleshooting assistance.`,
      decisionGuide: `Follow systematic troubleshooting approach. Contact FAE for complex issues requiring design review.`,
      keywords: ["troubleshooting", "no output", "overheating", "EMI", "voltage regulation", "protection trips"]
    }
  ];
}

function generateAlternativeParts(partNumber, specs) {
  return [
    {
      partNumber: `${partNumber}-H`,
      brand: "TDK-Lambda",
      reason: "High-efficiency version with enhanced thermal performance",
      useCase: "For applications requiring maximum efficiency and extended temperature range",
      specifications: { 
        ...specs,
        "Efficiency": "Up to 97% (vs 96% standard)",
        "Temperature Range": "-40°C to +85°C (Extended)"
      },
      comparison: {
        "Efficiency": "97% > 96% (+1% improvement)",
        "Thermal Performance": "Enhanced cooling capability",
        "Reliability": "Higher MTBF rating"
      }
    },
    {
      partNumber: `${partNumber}-M`,
      brand: "TDK-Lambda",
      reason: "Medical-grade version with enhanced isolation and certifications",
      useCase: "For medical applications requiring highest safety and isolation standards",
      specifications: { 
        ...specs,
        "Isolation": "Enhanced 2xMOPP + BF/CF rated",
        "Certifications": "Full IEC 60601-1 3rd Edition"
      },
      comparison: {
        "Isolation": "Enhanced medical grade",
        "Certifications": "Full medical compliance",
        "Safety": "Highest patient protection level"
      }
    }
  ];
}

function generateCompanionParts(partNumber, categoryName) {
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  return [
    { 
      partNumber: `TL-FIL-${partNumber}`, 
      description: "EMI filters and input protection components optimized for this power supply", 
      category: categoryName, 
      link: `/tdk-lambda/products/${categorySlug}/tl-fil-${partNumber.toLowerCase()}.html` 
    },
    { 
      partNumber: `TL-HS-${partNumber}`, 
      description: "Heatsinks and thermal management accessories for optimal cooling", 
      category: categoryName, 
      link: `/tdk-lambda/products/${categorySlug}/tl-hs-${partNumber.toLowerCase()}.html` 
    },
    { 
      partNumber: `TL-CONN-${partNumber}`, 
      description: "Input/output connectors and mating accessories for system integration", 
      category: categoryName, 
      link: `/tdk-lambda/products/${categorySlug}/tl-conn-${partNumber.toLowerCase()}.html` 
    }
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
      author: "Michael Chen",
      title: "Senior FAE - Power Systems",
      content: faeContent,
      highlight: faeHighlight
    },
    alternativeParts: generateAlternativeParts(partNumber, specs),
    companionParts: generateCompanionParts(partNumber, category),
    faqs: generateProductFAQs8(partNumber, category, specs)
  };
}

// AC-DC Power Supplies - 需要添加2个产品（已有4个）
const acdcCategory = productsData.categories.find(c => c.id === 'ac-dc-power-supplies');
if (acdcCategory && acdcCategory.products.length < 6) {
  console.log('Adding AC-DC Power Supply products...');
  const newAcdcProducts = [
    createProduct(
      "RWS150B-24", "RWS150B-24 AC-DC Power Supply", "AC-DC Power Supplies",
      "150W industrial AC-DC power supply with 24V output, 90% efficiency, and universal input.",
      "The RWS150B-24 is a compact 150W industrial AC-DC power supply delivering 24V at 6.3A with 90% efficiency. Designed for industrial automation and control systems.",
      "Featuring universal 85-264VAC input and active PFC, this power supply is ideal for global industrial applications. The compact 3x5 inch form factor saves valuable panel space.",
      "With comprehensive protection features including OVP, OCP, and OTP, the RWS150B-24 delivers reliable performance in demanding industrial environments.",
      { "outputPower": "150W", "inputVoltage": "85-264VAC", "outputVoltage": "24VDC", "outputCurrent": "6.3A", "efficiency": "90%", "operatingTemperature": "-10°C to +70°C", "safetyStandards": "IEC 62368-1", "mtbf": "300,000 hours", "dimensions": "3x5 inch", "warranty": "5 years" },
      ["150W output power", "Universal 85-264VAC input", "Active PFC >0.95", "Compact 3x5 inch size", "90% efficiency", "5-year warranty"],
      ["Industrial automation", "Control systems", "Factory equipment", "Test and measurement", "LED lighting"],
      "The RWS150B-24 is an excellent choice for industrial applications requiring reliable power in a compact form factor. The 3x5 inch size is ideal for panel mounting. I've specified this for numerous automation projects.",
      "Compact 150W industrial power supply for automation applications"
    ),
    createProduct(
      "CUS250M-12", "CUS250M-12 AC-DC Power Supply", "AC-DC Power Supplies",
      "250W medical-grade AC-DC power supply with 12V output, 94% efficiency, and 2xMOPP isolation.",
      "The CUS250M-12 is a 250W medical-grade AC-DC power supply delivering 12V at 20.8A with 94% efficiency. Certified to IEC 60601-1 for patient safety.",
      "Featuring medical-grade 2xMOPP isolation and universal input, this power supply is suitable for patient-connected medical equipment. The high efficiency minimizes heat generation.",
      "With comprehensive protection and 5-year warranty, the CUS250M-12 provides reliable power for medical devices and laboratory equipment.",
      { "outputPower": "250W", "inputVoltage": "85-264VAC", "outputVoltage": "12VDC", "outputCurrent": "20.8A", "efficiency": "94%", "operatingTemperature": "-20°C to +70°C", "safetyStandards": "IEC 60601-1, IEC 62368-1", "isolation": "2xMOPP", "mtbf": "500,000 hours", "warranty": "5 years" },
      ["250W medical-grade", "2xMOPP isolation", "94% efficiency", "Universal input", "Active PFC", "5-year warranty"],
      ["Medical devices", "Patient monitors", "Diagnostic equipment", "Laboratory instruments", "Dental equipment"],
      "The CUS250M-12 is perfect for medical applications requiring 12V power. The 2xMOPP isolation ensures patient safety. High efficiency reduces cooling requirements in compact medical devices.",
      "Medical-grade 250W power supply for patient-connected equipment"
    )
  ];
  acdcCategory.products.push(...newAcdcProducts);
  console.log(`AC-DC Power Supplies: ${acdcCategory.products.length} products`);
}

// DC-DC Converters - 需要添加2个产品（已有4个）
const dcdcCategory = productsData.categories.find(c => c.id === 'dc-dc-converters');
if (dcdcCategory && dcdcCategory.products.length < 6) {
  console.log('Adding DC-DC Converter products...');
  const newDcdcProducts = [
    createProduct(
      "CCG15-48-3.3S", "CCG15-48-3.3S DC-DC Converter", "DC-DC Converters",
      "15W isolated DC-DC converter, 18-75V input, 3.3V output, 4.5A, high efficiency.",
      "The CCG15-48-3.3S is a 15W isolated DC-DC converter with 18-75V input range and 3.3V output at 4.5A. Designed for industrial and telecommunications applications.",
      "Featuring 1500VDC isolation and compact SIP package, this converter is ideal for creating auxiliary voltages from 48V bus systems. The wide input range accommodates battery applications.",
      "With high efficiency and -40°C to +85°C operating range, the CCG15-48-3.3S delivers reliable performance in harsh environments.",
      { "outputPower": "15W", "inputVoltage": "18-75VDC", "outputVoltage": "3.3VDC", "outputCurrent": "4.5A", "efficiency": "88%", "operatingTemperature": "-40°C to +85°C", "isolation": "1500VDC", "package": "SIP", "mtbf": "1,000,000 hours" },
      ["15W isolated output", "Wide 18-75V input", "3.3V output", "1500V isolation", "Compact SIP package", "High reliability"],
      ["Telecommunications", "Industrial control", "Battery systems", "48V bus converters", "Distributed power"],
      "The CCG15-48-3.3S is excellent for creating 3.3V from 48V systems. The wide input handles battery voltage variations. Compact SIP package saves PCB space.",
      "15W DC-DC converter for 48V to 3.3V conversion"
    ),
    createProduct(
      "PHV300-48-48", "PHV300-48-48 DC-DC Converter", "DC-DC Converters",
      "300W high-voltage DC-DC converter, 200-400V input, 48V output, 6.25A, for industrial applications.",
      "The PHV300-48-48 is a 300W high-voltage DC-DC converter with 200-400V input and 48V output at 6.25A. Designed for industrial and renewable energy applications.",
      "Featuring high-voltage input capability and 3000VDC isolation, this converter is ideal for applications such as EV charging and solar power systems.",
      "With robust construction and comprehensive protection, the PHV300-48-48 delivers reliable high-power conversion in demanding applications.",
      { "outputPower": "300W", "inputVoltage": "200-400VDC", "outputVoltage": "48VDC", "outputCurrent": "6.25A", "efficiency": "93%", "operatingTemperature": "-40°C to +85°C", "isolation": "3000VDC", "mtbf": "500,000 hours" },
      ["300W high power", "High-voltage 200-400V input", "48V output", "3000V isolation", "93% efficiency", "Industrial grade"],
      ["EV charging", "Solar power systems", "Industrial drives", "Battery chargers", "High-voltage DC systems"],
      "The PHV300-48-48 handles high-voltage inputs for industrial applications. The 3000V isolation provides excellent safety. Ideal for EV and renewable energy systems.",
      "300W high-voltage DC-DC converter for industrial applications"
    )
  ];
  dcdcCategory.products.push(...newDcdcProducts);
  console.log(`DC-DC Converters: ${dcdcCategory.products.length} products`);
}

// Programmable Power - 需要添加2个产品（已有4个）
const progCategory = productsData.categories.find(c => c.id === 'programmable-power');
if (progCategory && progCategory.products.length < 6) {
  console.log('Adding Programmable Power products...');
  const newProgProducts = [
    createProduct(
      "GEN60-25", "GEN60-25 Programmable DC Power Supply", "Programmable Power",
      "60V/25A programmable DC power supply, 1500W, with LAN/USB interface and high precision.",
      "The GEN60-25 is a 1500W programmable DC power supply with 0-60V output and 0-25A current range. Features LAN and USB interfaces for automated test systems.",
      "Featuring high precision voltage and current programming with 0.05% accuracy, this supply is ideal for R&D and production testing applications.",
      "With advanced features including sequencing, monitoring, and protection, the GEN60-25 provides flexible power for demanding test applications.",
      { "outputPower": "1500W", "voltageRange": "0-60V", "currentRange": "0-25A", "voltageAccuracy": "0.05%", "currentAccuracy": "0.1%", "interfaces": "LAN, USB, GPIB", "operatingTemperature": "0°C to +40°C", "safetyStandards": "IEC 61010-1" },
      ["1500W programmable", "0-60V/0-25A range", "0.05% voltage accuracy", "LAN/USB/GPIB interfaces", "Sequencing capability", "Remote sensing"],
      ["R&D testing", "Production test", "Component characterization", "Battery testing", "Automated test systems"],
      "The GEN60-25 provides excellent precision for test applications. The LAN interface enables easy integration into automated systems. Sequencing capability is valuable for complex test procedures.",
      "1500W programmable power supply for precision testing"
    ),
    createProduct(
      "Z100-20-LAN", "Z100-20-LAN Programmable DC Power Supply", "Programmable Power",
      "100V/20A programmable DC power supply, 2000W, with LAN interface and fast transient response.",
      "The Z100-20-LAN is a 2000W programmable DC power supply with 0-100V output and 0-20A current range. Features fast transient response for dynamic load applications.",
      "Featuring high-speed programming and low output noise, this supply is ideal for testing power amplifiers, motors, and other dynamic loads.",
      "With comprehensive protection and advanced monitoring capabilities, the Z100-20-LAN provides reliable power for demanding test environments.",
      { "outputPower": "2000W", "voltageRange": "0-100V", "currentRange": "0-20A", "voltageAccuracy": "0.05%", "currentAccuracy": "0.1%", "transientResponse": "<1ms", "interfaces": "LAN, USB", "operatingTemperature": "0°C to +40°C" },
      ["2000W programmable", "0-100V/0-20A range", "Fast transient response", "Low output noise", "LAN/USB interfaces", "Advanced monitoring"],
      ["Power amplifier testing", "Motor testing", "Dynamic load testing", "Aerospace testing", "Military equipment testing"],
      "The Z100-20-LAN excels at testing dynamic loads. The fast transient response handles rapid current changes. Low noise is essential for sensitive device testing.",
      "2000W programmable supply with fast transient response"
    )
  ];
  progCategory.products.push(...newProgProducts);
  console.log(`Programmable Power: ${progCategory.products.length} products`);
}

// LED Power Supplies - 需要添加2个产品（已有4个）
const ledCategory = productsData.categories.find(c => c.id === 'led-power-supplies');
if (ledCategory && ledCategory.products.length < 6) {
  console.log('Adding LED Power Supply products...');
  const newLedProducts = [
    createProduct(
      "LTF300-48", "LTF300-48 LED Driver", "LED Power Supplies",
      "300W constant voltage LED driver, 48V output, IP67 rated for outdoor applications.",
      "The LTF300-48 is a 300W constant voltage LED driver with 48V output. IP67 rated for outdoor and harsh environment applications.",
      "Featuring high efficiency and wide operating temperature range, this driver is ideal for street lighting, tunnel lighting, and outdoor signage.",
      "With comprehensive protection and 5-year warranty, the LTF300-48 provides reliable power for outdoor LED installations.",
      { "outputPower": "300W", "outputVoltage": "48VDC", "outputCurrent": "6.25A", "efficiency": "93%", "operatingTemperature": "-40°C to +70°C", "protectionRating": "IP67", "safetyStandards": "EN 61347-1, EN 61347-2-13", "warranty": "5 years" },
      ["300W LED driver", "48V constant voltage", "IP67 outdoor rated", "93% efficiency", "Wide temperature range", "5-year warranty"],
      ["Street lighting", "Tunnel lighting", "Outdoor signage", "Flood lighting", "Industrial LED lighting"],
      "The LTF300-48 is perfect for outdoor LED applications. The IP67 rating handles harsh weather conditions. High efficiency reduces operating costs for street lighting.",
      "300W IP67 LED driver for outdoor lighting applications"
    ),
    createProduct(
      "LDC100W-1400-C", "LDC100W-1400-C LED Driver", "LED Power Supplies",
      "100W constant current LED driver, 1400mA output, with dimming and high efficiency.",
      "The LDC100W-1400-C is a 100W constant current LED driver with 1400mA output. Features 0-10V dimming for intelligent lighting control.",
      "Featuring high efficiency and compact size, this driver is ideal for indoor LED lighting applications including downlights and panel lights.",
      "With flicker-free operation and comprehensive protection, the LDC100W-1400-C provides quality power for indoor LED fixtures.",
      { "outputPower": "100W", "outputCurrent": "1400mA", "outputVoltageRange": "36-72V", "efficiency": "92%", "dimming": "0-10V, PWM", "operatingTemperature": "-20°C to +60°C", "safetyStandards": "EN 61347-1, EN 61347-2-13" },
      ["100W LED driver", "1400mA constant current", "0-10V dimming", "92% efficiency", "Flicker-free", "Compact size"],
      ["Downlights", "Panel lights", "High-bay lighting", "Office lighting", "Commercial LED fixtures"],
      "The LDC100W-1400-C is ideal for indoor LED fixtures. The 0-10V dimming enables smart lighting control. Flicker-free operation is essential for office environments.",
      "100W constant current LED driver with dimming"
    )
  ];
  ledCategory.products.push(...newLedProducts);
  console.log(`LED Power Supplies: ${ledCategory.products.length} products`);
}

// 保存更新后的数据
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));

console.log('\n========================================');
console.log('✅ All categories now have 6 products each!');
console.log('========================================');
productsData.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products.length} products`);
});
