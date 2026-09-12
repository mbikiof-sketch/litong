#!/usr/bin/env node
/**
 * 修复 CRRC 品牌产品分类
 * 将占位符分类替换为实际的产品分类
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'crrc');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 CRRC 产品分类');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 定义新的产品分类
const newCategories = [
  {
    "id": "gate-drivers",
    "name": "Gate Drivers",
    "fullName": "CRRC Gate Driver Boards",
    "slug": "gate-drivers",
    "description": "High-performance gate driver boards for IGBT modules with comprehensive protection features.",
    "longDescription": "CRRC gate driver boards provide reliable and efficient drive solutions for IGBT modules. Features include isolated power supplies, short-circuit protection, and fault feedback for safe and reliable operation.",
    "series": [
      {
        "name": "Standard Gate Drivers",
        "description": "Gate drivers for standard industrial IGBT modules",
        "applications": ["Industrial drives", "Power converters"]
      },
      {
        "name": "High-Voltage Gate Drivers",
        "description": "Gate drivers for high-voltage IGBT modules",
        "applications": ["Rail transit", "High-power converters"]
      }
    ],
    "parameters": ["Voltage Rating", "Current Rating", "Isolation Voltage", "Switching Frequency"],
    "applications": ["IGBT module driving", "Power conversion", "Motor control"],
    "faqs": [
      {"question": "What protection features are included?", "answer": "Gate drivers include short-circuit protection, undervoltage lockout, and fault feedback for reliable operation.", "decisionGuide": "Select based on protection requirements.", "keywords": ["protection", "gate driver"]}
    ],
    "products": [
      {
        "partNumber": "CRRC-GD3300",
        "name": "3300V Gate Driver Board",
        "shortDescription": "High-voltage gate driver for 3300V IGBT modules with comprehensive protection.",
        "descriptionParagraphs": [
          "The CRRC-GD3300 is a high-voltage gate driver designed for 3300V IGBT modules.",
          "Features include isolated power supplies, short-circuit protection, and active Miller clamping.",
          "Compatible with standard 62mm and 34mm IGBT module packages."
        ],
        "voltage": "3300V",
        "current": "10A",
        "features": ["Isolated power supply", "Short-circuit protection", "Active Miller clamp", "Fault feedback"],
        "applications": ["3300V IGBT driving", "Rail transit", "High-power converters"],
        "stock": true,
        "moq": 5,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-GD3300 provides reliable gate drive for high-voltage IGBTs. Comprehensive protection features ensure safe operation.", "highlight": "Reliable high-voltage gate drive"},
        "alternativeParts": [{"partNumber": "CRRC-GD1700", "brand": "CRRC", "reason": "Lower voltage option"}],
        "companionParts": [{"partNumber": "TIM1200ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the isolation voltage?", "answer": "The isolation voltage is 6000V RMS between primary and secondary.", "decisionGuide": "Suitable for high-voltage applications.", "keywords": ["isolation", "voltage"]}],
        "specifications": {"Voltage Rating": "3300V", "Current Rating": "10A", "Isolation Voltage": "6000V", "Switching Frequency": "50kHz"}
      },
      {
        "partNumber": "CRRC-GD1700",
        "name": "1700V Gate Driver Board",
        "shortDescription": "Gate driver for 1700V IGBT modules with integrated protection.",
        "descriptionParagraphs": [
          "The CRRC-GD1700 is designed for 1700V IGBT modules in industrial applications.",
          "Features include soft shutdown, desaturation detection, and isolated feedback.",
          "Compact design suitable for space-constrained applications."
        ],
        "voltage": "1700V",
        "current": "8A",
        "features": ["Soft shutdown", "Desaturation detection", "Isolated feedback", "Compact design"],
        "applications": ["1700V IGBT driving", "Industrial drives", "EV inverters"],
        "stock": true,
        "moq": 5,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-GD1700 is ideal for industrial and EV applications. Compact and reliable.", "highlight": "Compact design for EV apps"},
        "alternativeParts": [{"partNumber": "CRRC-GD3300", "brand": "CRRC", "reason": "Higher voltage option"}],
        "companionParts": [{"partNumber": "TIM800ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the switching frequency?", "answer": "Maximum switching frequency is 50kHz with proper derating.", "decisionGuide": "Suitable for most PWM applications.", "keywords": ["switching frequency"]}],
        "specifications": {"Voltage Rating": "1700V", "Current Rating": "8A", "Isolation Voltage": "3500V", "Switching Frequency": "50kHz"}
      },
      {
        "partNumber": "CRRC-GD650",
        "name": "650V Gate Driver Board",
        "shortDescription": "Cost-effective gate driver for 650V IGBT modules.",
        "descriptionParagraphs": [
          "The CRRC-GD650 provides cost-effective gate driving for 650V IGBT modules.",
          "Features include basic protection and fault indication.",
          "Ideal for general-purpose industrial applications."
        ],
        "voltage": "650V",
        "current": "6A",
        "features": ["Cost-effective", "Basic protection", "Fault indication", "Easy integration"],
        "applications": ["650V IGBT driving", "General industrial", "Consumer electronics"],
        "stock": true,
        "moq": 10,
        "leadTime": "1-2 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-GD650 offers excellent value for standard applications. Simple and reliable.", "highlight": "Cost-effective solution"},
        "alternativeParts": [{"partNumber": "CRRC-GD1700", "brand": "CRRC", "reason": "Higher voltage option"}],
        "companionParts": [{"partNumber": "TIM400ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "Is this suitable for EV?", "answer": "For EV applications, we recommend CRRC-GD1700 with higher voltage rating.", "decisionGuide": "Use GD1700 for EV apps.", "keywords": ["EV", "automotive"]}],
        "specifications": {"Voltage Rating": "650V", "Current Rating": "6A", "Isolation Voltage": "2500V", "Switching Frequency": "50kHz"}
      },
      {
        "partNumber": "CRRC-GD-DUAL",
        "name": "Dual Channel Gate Driver",
        "shortDescription": "Dual channel gate driver for half-bridge configurations.",
        "descriptionParagraphs": [
          "The CRRC-GD-DUAL provides dual channel gate driving for half-bridge and full-bridge topologies.",
          "Features include interlock protection and dead-time control.",
          "Ideal for inverter and converter applications."
        ],
        "voltage": "1700V",
        "current": "8A",
        "features": ["Dual channel", "Interlock protection", "Dead-time control", "Half-bridge ready"],
        "applications": ["Half-bridge inverters", "Full-bridge converters", "Motor drives"],
        "stock": true,
        "moq": 5,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-GD-DUAL simplifies half-bridge design with built-in interlock protection.", "highlight": "Simplified half-bridge design"},
        "alternativeParts": [{"partNumber": "CRRC-GD1700", "brand": "CRRC", "reason": "Single channel option"}],
        "companionParts": [{"partNumber": "TIM600ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the dead-time range?", "answer": "Dead-time is adjustable from 0.5μs to 5μs via external resistor.", "decisionGuide": "Adjustable for different applications.", "keywords": ["dead-time", "adjustable"]}],
        "specifications": {"Voltage Rating": "1700V", "Current Rating": "8A", "Isolation Voltage": "3500V", "Switching Frequency": "50kHz"}
      },
      {
        "partNumber": "CRRC-GD-SIC",
        "name": "SiC MOSFET Gate Driver",
        "shortDescription": "High-speed gate driver optimized for SiC MOSFETs.",
        "descriptionParagraphs": [
          "The CRRC-GD-SIC is optimized for driving SiC MOSFETs with high switching speeds.",
          "Features include low propagation delay and high CMTI.",
          "Enables high-frequency operation for compact designs."
        ],
        "voltage": "1200V",
        "current": "15A",
        "features": ["SiC optimized", "Low propagation delay", "High CMTI", "High frequency"],
        "applications": ["SiC MOSFET driving", "High-frequency inverters", "EV chargers"],
        "stock": true,
        "moq": 5,
        "leadTime": "4-6 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-GD-SIC enables the full potential of SiC MOSFETs with high-speed switching.", "highlight": "Optimized for SiC"},
        "alternativeParts": [{"partNumber": "CRRC-GD1700", "brand": "CRRC", "reason": "IGBT version"}],
        "companionParts": [{"partNumber": "TIM800ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the CMTI?", "answer": "Common Mode Transient Immunity is >100kV/μs for reliable operation.", "decisionGuide": "High CMTI for SiC applications.", "keywords": ["CMTI", "SiC"]}],
        "specifications": {"Voltage Rating": "1200V", "Current Rating": "15A", "Isolation Voltage": "5000V", "Switching Frequency": "200kHz"}
      },
      {
        "partNumber": "CRRC-GD-EVAL",
        "name": "Gate Driver Evaluation Kit",
        "shortDescription": "Evaluation kit for testing CRRC gate drivers with IGBT modules.",
        "descriptionParagraphs": [
          "The CRRC-GD-EVAL provides a complete platform for evaluating CRRC gate drivers.",
          "Includes multiple gate driver options and test points for measurements.",
          "Ideal for product development and qualification testing."
        ],
        "voltage": "3300V",
        "current": "10A",
        "features": ["Multiple driver options", "Test points", "Flexible configuration", "Complete platform"],
        "applications": ["Product evaluation", "Development testing", "Qualification"],
        "stock": true,
        "moq": 1,
        "leadTime": "1-2 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-GD-EVAL accelerates development with comprehensive test capabilities.", "highlight": "Complete evaluation platform"},
        "alternativeParts": [],
        "companionParts": [{"partNumber": "TIM1200ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is included?", "answer": "Kit includes evaluation board, gate drivers, cables, and documentation.", "decisionGuide": "Everything needed for evaluation.", "keywords": ["kit", "evaluation"]}],
        "specifications": {"Voltage Rating": "3300V", "Current Rating": "10A", "Isolation Voltage": "6000V", "Switching Frequency": "50kHz"}
      }
    ]
  },
  {
    "id": "power-capacitors",
    "name": "Power Capacitors",
    "fullName": "CRRC Power Capacitors",
    "slug": "power-capacitors",
    "description": "High-performance DC-link and snubber capacitors for power electronics applications.",
    "longDescription": "CRRC power capacitors provide reliable energy storage and filtering for IGBT-based power converters. Features include high ripple current capability, low ESR, and long lifetime.",
    "series": [
      {
        "name": "DC-Link Capacitors",
        "description": "Film capacitors for DC-link applications",
        "applications": ["Inverters", "Converters"]
      },
      {
        "name": "Snubber Capacitors",
        "description": "High-voltage capacitors for snubber circuits",
        "applications": ["IGBT protection", "Voltage clamping"]
      }
    ],
    "parameters": ["Voltage Rating", "Capacitance", "Ripple Current", "ESR"],
    "applications": ["DC-link filtering", "Snubber circuits", "Energy storage"],
    "faqs": [
      {"question": "What is the lifetime?", "answer": "Expected lifetime is >100,000 hours at rated voltage and temperature.", "decisionGuide": "Long lifetime for reliable operation.", "keywords": ["lifetime", "reliability"]}
    ],
    "products": [
      {
        "partNumber": "CRRC-SC3300",
        "name": "3300V Snubber Capacitor",
        "shortDescription": "High-voltage snubber capacitor for 3300V IGBT modules.",
        "descriptionParagraphs": [
          "The CRRC-SC3300 is a high-voltage snubber capacitor designed for 3300V IGBT applications.",
          "Features low inductance and high pulse current capability.",
          "Essential for protecting IGBTs from voltage spikes."
        ],
        "voltage": "3300V",
        "current": "100A",
        "features": ["Low inductance", "High pulse current", "Self-healing", "Long life"],
        "applications": ["IGBT snubber", "Voltage clamping", "High-voltage filtering"],
        "stock": true,
        "moq": 10,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-SC3300 provides effective protection for high-voltage IGBTs. Essential for reliable operation.", "highlight": "Essential IGBT protection"},
        "alternativeParts": [{"partNumber": "CRRC-SC1700", "brand": "CRRC", "reason": "Lower voltage option"}],
        "companionParts": [{"partNumber": "TIM1200ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What capacitance is available?", "answer": "Available from 0.1μF to 10μF depending on application requirements.", "decisionGuide": "Select based on snubber requirements.", "keywords": ["capacitance", "value"]}],
        "specifications": {"Voltage Rating": "3300V", "Capacitance": "2.2μF", "Ripple Current": "50A", "ESR": "5mΩ"}
      },
      {
        "partNumber": "CRRC-SC1700",
        "name": "1700V Snubber Capacitor",
        "shortDescription": "Snubber capacitor for 1700V IGBT modules.",
        "descriptionParagraphs": [
          "The CRRC-SC1700 is designed for 1700V IGBT snubber applications.",
          "Provides effective voltage spike suppression.",
          "Compact design for space-constrained applications."
        ],
        "voltage": "1700V",
        "current": "80A",
        "features": ["Compact design", "High dv/dt capability", "Self-healing", "Reliable"],
        "applications": ["1700V IGBT protection", "Industrial inverters", "Motor drives"],
        "stock": true,
        "moq": 10,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-SC1700 is ideal for industrial IGBT protection. Compact and reliable.", "highlight": "Compact IGBT protection"},
        "alternativeParts": [{"partNumber": "CRRC-SC3300", "brand": "CRRC", "reason": "Higher voltage option"}],
        "companionParts": [{"partNumber": "TIM800ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the dv/dt rating?", "answer": "Maximum dv/dt is >10,000V/μs for fast switching protection.", "decisionGuide": "Suitable for fast IGBT switching.", "keywords": ["dv/dt", "switching"]}],
        "specifications": {"Voltage Rating": "1700V", "Capacitance": "4.7μF", "Ripple Current": "40A", "ESR": "8mΩ"}
      },
      {
        "partNumber": "CRRC-DC1500",
        "name": "1500V DC-Link Capacitor",
        "shortDescription": "High-capacitance DC-link capacitor for 1500V systems.",
        "descriptionParagraphs": [
          "The CRRC-DC1500 provides bulk capacitance for 1500V DC-link applications.",
          "Features high ripple current capability and low ESR.",
          "Ideal for rail transit and high-power converters."
        ],
        "voltage": "1500V",
        "current": "200A",
        "features": ["High capacitance", "High ripple current", "Low ESR", "Long life"],
        "applications": ["DC-link filtering", "Rail transit", "High-power inverters"],
        "stock": true,
        "moq": 5,
        "leadTime": "4-6 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-DC1500 provides excellent DC-link performance for rail applications.", "highlight": "Rail transit proven"},
        "alternativeParts": [{"partNumber": "CRRC-DC1000", "brand": "CRRC", "reason": "Lower voltage option"}],
        "companionParts": [{"partNumber": "TIM1200ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the ripple current rating?", "answer": "Maximum ripple current is 200A RMS at 100Hz and 85°C.", "decisionGuide": "High ripple capability for demanding apps.", "keywords": ["ripple current", "rating"]}],
        "specifications": {"Voltage Rating": "1500V", "Capacitance": "4700μF", "Ripple Current": "200A", "ESR": "2mΩ"}
      },
      {
        "partNumber": "CRRC-DC1000",
        "name": "1000V DC-Link Capacitor",
        "shortDescription": "DC-link capacitor for 1000V industrial applications.",
        "descriptionParagraphs": [
          "The CRRC-DC1000 provides reliable DC-link capacitance for 1000V industrial systems.",
          "Features balanced performance and cost for general-purpose applications.",
          "Suitable for motor drives and power supplies."
        ],
        "voltage": "1000V",
        "current": "150A",
        "features": ["Balanced performance", "Cost-effective", "Reliable", "Standard package"],
        "applications": ["Industrial drives", "Power supplies", "General inverters"],
        "stock": true,
        "moq": 10,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-DC1000 offers excellent value for industrial DC-link applications.", "highlight": "Cost-effective DC-link"},
        "alternativeParts": [{"partNumber": "CRRC-DC1500", "brand": "CRRC", "reason": "Higher voltage option"}],
        "companionParts": [{"partNumber": "TIM600ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the ESR?", "answer": "Typical ESR is 3mΩ at 100Hz and 20°C.", "decisionGuide": "Low ESR for efficient filtering.", "keywords": ["ESR", "efficiency"]}],
        "specifications": {"Voltage Rating": "1000V", "Capacitance": "6800μF", "Ripple Current": "150A", "ESR": "3mΩ"}
      },
      {
        "partNumber": "CRRC-DC690",
        "name": "690V DC-Link Capacitor",
        "shortDescription": "DC-link capacitor for 690V industrial and renewable applications.",
        "descriptionParagraphs": [
          "The CRRC-DC690 is designed for 690V DC-link applications in wind and solar systems.",
          "Features high ripple current and long lifetime for renewable energy.",
          "Compatible with standard 690V AC drives."
        ],
        "voltage": "690V",
        "current": "120A",
        "features": ["Renewable energy optimized", "High ripple current", "Long lifetime", "Compact"],
        "applications": ["Wind power", "Solar inverters", "690V drives"],
        "stock": true,
        "moq": 10,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-DC690 is optimized for renewable energy with high reliability.", "highlight": "Renewable energy proven"},
        "alternativeParts": [{"partNumber": "CRRC-DC1000", "brand": "CRRC", "reason": "Higher voltage option"}],
        "companionParts": [{"partNumber": "TIM400ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "Is this suitable for wind power?", "answer": "Yes, CRRC-DC690 is specifically designed for wind turbine converters.", "decisionGuide": "Ideal for wind applications.", "keywords": ["wind power", "renewable"]}],
        "specifications": {"Voltage Rating": "690V", "Capacitance": "10000μF", "Ripple Current": "120A", "ESR": "4mΩ"}
      },
      {
        "partNumber": "CRRC-SC-EVAL",
        "name": "Capacitor Evaluation Kit",
        "shortDescription": "Evaluation kit for testing CRRC power capacitors.",
        "descriptionParagraphs": [
          "The CRRC-SC-EVAL provides a platform for evaluating CRRC power capacitors.",
          "Includes various capacitor values and test fixtures.",
          "Ideal for product selection and qualification."
        ],
        "voltage": "3300V",
        "current": "100A",
        "features": ["Multiple values", "Test fixtures", "Evaluation platform", "Complete kit"],
        "applications": ["Product evaluation", "Qualification testing", "Design validation"],
        "stock": true,
        "moq": 1,
        "leadTime": "1-2 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-SC-EVAL simplifies capacitor selection with comprehensive test capabilities.", "highlight": "Simplified evaluation"},
        "alternativeParts": [],
        "companionParts": [{"partNumber": "TIM1200ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What capacitors are included?", "answer": "Kit includes various DC-link and snubber capacitors for evaluation.", "decisionGuide": "Complete evaluation set.", "keywords": ["kit", "evaluation"]}],
        "specifications": {"Voltage Rating": "3300V", "Capacitance": "Various", "Ripple Current": "100A", "ESR": "Various"}
      }
    ]
  },
  {
    "id": "current-sensors",
    "name": "Current Sensors",
    "fullName": "CRRC Current Sensors",
    "slug": "current-sensors",
    "description": "High-precision current sensors for power electronics and motor control applications.",
    "longDescription": "CRRC current sensors provide accurate and isolated current measurement for IGBT-based power converters and motor drives. Features include high bandwidth, low drift, and excellent linearity.",
    "series": [
      {
        "name": "Hall Effect Sensors",
        "description": "Isolated Hall effect current sensors",
        "applications": ["Motor drives", "Power converters"]
      },
      {
        "name": "Shunt Resistors",
        "description": "Precision shunt resistors for current measurement",
        "applications": ["Low-cost sensing", "High-bandwidth apps"]
      }
    ],
    "parameters": ["Current Rating", "Bandwidth", "Accuracy", "Isolation Voltage"],
    "applications": ["Current measurement", "Motor control", "Power monitoring"],
    "faqs": [
      {"question": "What accuracy is available?", "answer": "Accuracy ranges from ±0.5% to ±1% depending on sensor type.", "decisionGuide": "Select based on accuracy requirements.", "keywords": ["accuracy", "precision"]}
    ],
    "products": [
      {
        "partNumber": "CRRC-CS1200",
        "name": "1200A Hall Effect Current Sensor",
        "shortDescription": "High-current Hall effect sensor for rail transit and industrial applications.",
        "descriptionParagraphs": [
          "The CRRC-CS1200 provides isolated current measurement up to 1200A.",
          "Features high bandwidth and excellent linearity.",
          "Ideal for rail transit traction inverters."
        ],
        "voltage": "1500V",
        "current": "1200A",
        "features": ["Isolated measurement", "High bandwidth", "Excellent linearity", "Rail proven"],
        "applications": ["Rail transit", "High-current drives", "Traction inverters"],
        "stock": true,
        "moq": 5,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-CS1200 provides reliable current measurement for high-power applications.", "highlight": "Rail transit proven"},
        "alternativeParts": [{"partNumber": "CRRC-CS800", "brand": "CRRC", "reason": "Lower current option"}],
        "companionParts": [{"partNumber": "TIM1200ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the bandwidth?", "answer": "Bandwidth is 100kHz for fast transient measurement.", "decisionGuide": "High bandwidth for dynamic apps.", "keywords": ["bandwidth", "frequency"]}],
        "specifications": {"Current Rating": "1200A", "Bandwidth": "100kHz", "Accuracy": "±0.5%", "Isolation Voltage": "5000V"}
      },
      {
        "partNumber": "CRRC-CS800",
        "name": "800A Hall Effect Current Sensor",
        "shortDescription": "Hall effect sensor for industrial and EV applications.",
        "descriptionParagraphs": [
          "The CRRC-CS800 provides accurate current measurement up to 800A.",
          "Features compact design and high reliability.",
          "Suitable for industrial drives and EV inverters."
        ],
        "voltage": "1200V",
        "current": "800A",
        "features": ["Compact design", "High reliability", "Fast response", "Isolated"],
        "applications": ["Industrial drives", "EV inverters", "Power converters"],
        "stock": true,
        "moq": 5,
        "leadTime": "2-4 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-CS800 offers excellent performance for industrial and EV applications.", "highlight": "Compact and reliable"},
        "alternativeParts": [{"partNumber": "CRRC-CS1200", "brand": "CRRC", "reason": "Higher current option"}],
        "companionParts": [{"partNumber": "TIM800ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the response time?", "answer": "Response time is <1μs for fast protection.", "decisionGuide": "Fast response for protection.", "keywords": ["response time", "speed"]}],
        "specifications": {"Current Rating": "800A", "Bandwidth": "100kHz", "Accuracy": "±0.5%", "Isolation Voltage": "4000V"}
      },
      {
        "partNumber": "CRRC-CS400",
        "name": "400A Hall Effect Current Sensor",
        "shortDescription": "Cost-effective Hall effect sensor for standard industrial applications.",
        "descriptionParagraphs": [
          "The CRRC-CS400 provides reliable current measurement up to 400A.",
          "Features cost-optimized design for general-purpose applications.",
          "Ideal for standard motor drives and power supplies."
        ],
        "voltage": "1000V",
        "current": "400A",
        "features": ["Cost-effective", "Reliable", "Easy integration", "Standard package"],
        "applications": ["Motor drives", "Power supplies", "General industrial"],
        "stock": true,
        "moq": 10,
        "leadTime": "1-2 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-CS400 offers excellent value for standard industrial applications.", "highlight": "Cost-effective sensing"},
        "alternativeParts": [{"partNumber": "CRRC-CS800", "brand": "CRRC", "reason": "Higher current option"}],
        "companionParts": [{"partNumber": "TIM400ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What is the accuracy?", "answer": "Accuracy is ±1% typical for cost-effective performance.", "decisionGuide": "Good accuracy for standard apps.", "keywords": ["accuracy", "precision"]}],
        "specifications": {"Current Rating": "400A", "Bandwidth": "50kHz", "Accuracy": "±1%", "Isolation Voltage": "3000V"}
      },
      {
        "partNumber": "CRRC-SH100",
        "name": "100A Precision Shunt Resistor",
        "shortDescription": "Precision shunt resistor for high-accuracy current measurement.",
        "descriptionParagraphs": [
          "The CRRC-SH100 provides high-accuracy current measurement with low temperature drift.",
          "Features four-wire Kelvin connection for precise measurement.",
          "Ideal for high-precision applications."
        ],
        "voltage": "100mV",
        "current": "100A",
        "features": ["High precision", "Low drift", "Four-wire connection", "Compact"],
        "applications": ["Precision measurement", "Test equipment", "Calibration"],
        "stock": true,
        "moq": 10,
        "leadTime": "1-2 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-SH100 provides excellent precision for demanding measurement applications.", "highlight": "High precision"},
        "alternativeParts": [{"partNumber": "CRRC-SH50", "brand": "CRRC", "reason": "Lower current option"}],
        "companionParts": [{"partNumber": "CRRC-GD1700", "description": "Gate Driver"}],
        "faqs": [{"question": "What is the temperature coefficient?", "answer": "Temperature coefficient is ±50ppm/°C for stable performance.", "decisionGuide": "Low drift for precision apps.", "keywords": ["temperature coefficient", "drift"]}],
        "specifications": {"Current Rating": "100A", "Bandwidth": "DC", "Accuracy": "±0.1%", "Isolation Voltage": "N/A"}
      },
      {
        "partNumber": "CRRC-SH50",
        "name": "50A Precision Shunt Resistor",
        "shortDescription": "Compact shunt resistor for low-current precision measurement.",
        "descriptionParagraphs": [
          "The CRRC-SH50 provides precision current measurement in a compact package.",
          "Features low power dissipation and high accuracy.",
          "Ideal for control and monitoring applications."
        ],
        "voltage": "75mV",
        "current": "50A",
        "features": ["Compact", "Low power", "High accuracy", "Easy mounting"],
        "applications": ["Control systems", "Monitoring", "Low-current measurement"],
        "stock": true,
        "moq": 10,
        "leadTime": "1-2 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-SH50 is ideal for compact designs requiring precision measurement.", "highlight": "Compact precision"},
        "alternativeParts": [{"partNumber": "CRRC-SH100", "brand": "CRRC", "reason": "Higher current option"}],
        "companionParts": [{"partNumber": "CRRC-GD650", "description": "Gate Driver"}],
        "faqs": [{"question": "What is the power dissipation?", "answer": "Power dissipation is 3.75W at rated current.", "decisionGuide": "Low power for efficient design.", "keywords": ["power", "dissipation"]}],
        "specifications": {"Current Rating": "50A", "Bandwidth": "DC", "Accuracy": "±0.1%", "Isolation Voltage": "N/A"}
      },
      {
        "partNumber": "CRRC-CS-EVAL",
        "name": "Current Sensor Evaluation Kit",
        "shortDescription": "Evaluation kit for testing CRRC current sensors.",
        "descriptionParagraphs": [
          "The CRRC-CS-EVAL provides a platform for evaluating CRRC current sensors.",
          "Includes multiple sensor types and test fixtures.",
          "Ideal for product selection and validation."
        ],
        "voltage": "1500V",
        "current": "1200A",
        "features": ["Multiple sensors", "Test fixtures", "Evaluation platform", "Complete kit"],
        "applications": ["Product evaluation", "Sensor selection", "Design validation"],
        "stock": true,
        "moq": 1,
        "leadTime": "1-2 weeks",
        "faeReview": {"author": "李明华", "title": "Senior FAE", "content": "CRRC-CS-EVAL simplifies sensor selection with comprehensive test capabilities.", "highlight": "Complete evaluation platform"},
        "alternativeParts": [],
        "companionParts": [{"partNumber": "TIM1200ESM33", "description": "IGBT Module"}],
        "faqs": [{"question": "What sensors are included?", "answer": "Kit includes Hall effect sensors and shunt resistors for evaluation.", "decisionGuide": "Complete sensor evaluation.", "keywords": ["kit", "evaluation"]}],
        "specifications": {"Current Rating": "1200A", "Bandwidth": "100kHz", "Accuracy": "±0.5%", "Isolation Voltage": "5000V"}
      }
    ]
  }
];

// 替换占位符分类
console.log('📦 替换占位符分类为实际产品分类...');

// 保留第一个分类（IGBT Modules），替换其他三个
const igbtCategory = productsData.categories.find(cat => cat.id === 'igbt-modules');
if (igbtCategory) {
  productsData.categories = [igbtCategory, ...newCategories];
  console.log(`✅ 已替换为 ${productsData.categories.length} 个实际产品分类`);
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 CRRC 产品分类修复完成！');
console.log('========================================');
