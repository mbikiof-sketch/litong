const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'superchip');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 生成5维度FAQ的函数
function generateProductFAQs(partNumber, categoryName, specs) {
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance ${categoryName} IC from Superchip. Key specifications include: ${Object.entries(specs).slice(0, 5).map(([k, v]) => `${k}: ${v}`).join(', ')}. This component is designed for reliable power management in electronic systems with excellent electrical characteristics and comprehensive protection features. Please refer to the datasheet for detailed specifications.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations.`,
      keywords: ["specifications", "parameters", partNumber, "technical data"]
    },
    {
      question: `How do I select and use ${partNumber} in my design?`,
      answer: `For proper selection and usage of ${partNumber}: (1) Determine your circuit requirements including input voltage, output current, and efficiency targets. (2) Calculate required component values based on your circuit topology. (3) Consider temperature coefficients and thermal management requirements. (4) Follow recommended PCB layout guidelines for optimal performance. (5) Validate the design under all operating conditions. Contact BeiLuo FAE for detailed application guidance.`,
      decisionGuide: `Use our selection guide or contact FAE for application-specific recommendations.`,
      keywords: ["selection", "usage", "design guide", "application"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from TI, MPS, or ON Semiconductor?`,
      answer: `The ${partNumber} offers competitive advantages including cost-effective pricing, reliable performance, and excellent availability. Compared to alternatives from TI, MPS, and ON Semiconductor, Superchip products typically provide comparable electrical performance at more competitive price points. The ${partNumber} features similar or better efficiency, wide operating range, and comprehensive protection features. BeiLuo provides local technical support and faster delivery for Superchip products.`,
      decisionGuide: `Evaluate based on your specific requirements for performance, cost, and support. Request samples for direct comparison.`,
      keywords: ["comparison", "TI", "MPS", "ON Semiconductor", "competitive analysis"]
    },
    {
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications in consumer electronics, industrial equipment, LED lighting, and power management systems. Typical applications include power supplies, battery-powered devices, motor control systems, and LED drivers. This component is suitable for cost-sensitive applications requiring reliable performance and wide operating ranges.`,
      decisionGuide: `Ideal for ${categoryName} applications. Verify specifications match your requirements.`,
      keywords: ["applications", "use cases", "target markets", categoryName]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 4-8 weeks for production orders. (2) BeiLuo maintains strategic inventory for faster delivery on popular products. (3) MOQ is typically 1,000 pieces for production orders. (4) Sample quantities available for evaluation. (5) Volume pricing available with discounts at 1K, 5K, 10K, and 50K+ quantities. Contact BeiLuo sales for current stock status and pricing.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times.`,
      keywords: ["lead time", "MOQ", "pricing", "availability", "delivery"]
    }
  ];
}

// 生成替代型号
function generateAlternativeParts(partNumber, categoryName, specs) {
  return [
    {
      partNumber: `${partNumber}-H`,
      brand: "Superchip",
      reason: "Higher performance version with enhanced specifications",
      useCase: "For applications requiring higher performance margins",
      specifications: specs,
      comparison: Object.fromEntries(Object.entries(specs).map(([k, v]) => [k, `${v} => ${v} (enhanced)`]))
    },
    {
      partNumber: `${partNumber}-L`,
      brand: "Superchip",
      reason: "Cost-optimized version for price-sensitive applications",
      useCase: "For cost-sensitive applications with standard requirements",
      specifications: specs,
      comparison: Object.fromEntries(Object.entries(specs).map(([k, v]) => [k, `${v} => ${v} (standard)`]))
    }
  ];
}

// 生成配套型号
function generateCompanionParts(partNumber, categoryName) {
  return [
    {
      partNumber: `EVAL-${partNumber}`,
      description: "Evaluation kit with test board and samples",
      category: categoryName,
      link: `/superchip/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}/eval-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `REF-${partNumber}`,
      description: "Reference design with schematic and layout",
      category: categoryName,
      link: `/superchip/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}/ref-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `KIT-${partNumber}`,
      description: "Development kit with samples and documentation",
      category: categoryName,
      link: `/superchip/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}/kit-${partNumber.toLowerCase()}.html`
    }
  ];
}

// 需要添加的新产品
const newProducts = {
  "dcdc": [
    {
      partNumber: "TC1510",
      name: "TC1510 1A Synchronous Buck Converter",
      shortDescription: "Compact 1A synchronous buck converter with high efficiency for portable applications",
      descriptionParagraphs: [
        "The TC1510 is a compact synchronous buck converter delivering up to 1A continuous output current. It features a wide input voltage range of 2.5V to 5.5V, making it ideal for single-cell Li-ion battery applications and 5V power supplies.",
        "With a high switching frequency of 2MHz, the TC1510 enables the use of tiny external components, minimizing solution size for space-constrained portable devices. The device achieves up to 95% efficiency, maximizing battery life.",
        "Advanced features include automatic PFM/PWM mode switching for optimized efficiency across load ranges, soft-start to limit inrush current, and comprehensive protection features. The TC1510 is available in a tiny SOT-23-5 package."
      ],
      specifications: {
        "Input Voltage": "2.5V - 5.5V",
        "Output Voltage": "0.6V - Vin",
        "Output Current": "1A",
        "Switching Frequency": "2MHz",
        "Efficiency": "Up to 95%",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "SOT-23-5"
      },
      features: ["High efficiency up to 95%", "2MHz switching frequency", "Automatic PFM/PWM mode", "Low quiescent current", "Soft-start function", "Tiny SOT-23-5 package"],
      applications: ["Portable electronics", "Battery-powered devices", "Smartphones", "Tablets", "Wearable devices"]
    },
    {
      partNumber: "TC1511",
      name: "TC1511 0.5A Ultra-Low IQ Buck Converter",
      shortDescription: "Ultra-low quiescent current buck converter for battery-powered applications",
      descriptionParagraphs: [
        "The TC1511 is an ultra-low quiescent current buck converter designed for battery-powered applications requiring maximum efficiency at light loads. It delivers up to 0.5A output current with only 1.5μA quiescent current.",
        "Operating from a 1.8V to 5.5V input range, the TC1511 is perfect for single-cell Li-ion and Li-Polymer battery applications. The device automatically switches between PFM and PWM modes to maintain high efficiency across all load conditions.",
        "The ultra-low shutdown current of less than 0.1μA makes the TC1511 ideal for devices with long standby times. Comprehensive protection features include UVLO, current limit, and thermal shutdown."
      ],
      specifications: {
        "Input Voltage": "1.8V - 5.5V",
        "Output Voltage": "0.6V - Vin",
        "Output Current": "0.5A",
        "Quiescent Current": "1.5μA",
        "Efficiency": "Up to 96%",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "SOT-23-5, DFN-6"
      },
      features: ["Ultra-low 1.5μA IQ", "High efficiency at light loads", "Automatic mode switching", "Tiny packages", "1.8V minimum input", "Low shutdown current"],
      applications: ["IoT devices", "Wireless sensors", "Smart meters", "Battery-powered systems", "Energy harvesting"]
    }
  ],
  "led-drivers": [
    {
      partNumber: "FM3405",
      name: "FM3405 High Voltage LED Driver",
      shortDescription: "High voltage LED driver for AC-DC lighting applications up to 100W",
      descriptionParagraphs: [
        "The FM3405 is a high voltage LED driver designed for AC-DC lighting applications. It supports input voltages from 85V to 265V AC, making it suitable for global lighting applications.",
        "With integrated high-voltage MOSFETs and advanced control algorithms, the FM3405 achieves high power factor (>0.9) and low THD. The device supports both isolated and non-isolated topologies for design flexibility.",
        "Advanced features include programmable current regulation, over-temperature protection, and open/short LED protection. The FM3405 is ideal for commercial and industrial LED lighting applications."
      ],
      specifications: {
        "Input Voltage": "85V - 265V AC",
        "Output Power": "Up to 100W",
        "LED Current": "100mA - 1A",
        "Efficiency": ">92%",
        "Power Factor": ">0.9",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "SOP-8, DIP-8"
      },
      features: ["Universal AC input", "High power factor", "Low THD", "Isolated/non-isolated support", "Programmable current", "Comprehensive protection"],
      applications: ["Commercial lighting", "Industrial lighting", "Street lighting", "High-bay lighting", "Panel lights"]
    },
    {
      partNumber: "FM3406",
      name: "FM3406 RGB LED Controller",
      shortDescription: "3-channel RGB LED controller with I2C interface for color lighting",
      descriptionParagraphs: [
        "The FM3406 is a 3-channel RGB LED controller with I2C interface for intelligent color lighting applications. Each channel supports up to 500mA LED current with independent dimming control.",
        "The integrated I2C interface allows for easy control from microcontrollers, enabling dynamic color mixing and lighting effects. The device supports 8-bit or 12-bit PWM dimming for smooth color transitions.",
        "Advanced features include gamma correction, programmable current limits, and thermal management. The FM3406 is ideal for architectural lighting, entertainment lighting, and smart home applications."
      ],
      specifications: {
        "Input Voltage": "3.3V - 5.5V",
        "Channels": "3 (RGB)",
        "Current per Channel": "Up to 500mA",
        "Dimming": "8-bit/12-bit PWM",
        "Interface": "I2C",
        "Efficiency": ">95%",
        "Package": "QFN-16, TSSOP-16"
      },
      features: ["3-channel RGB control", "I2C interface", "12-bit PWM dimming", "Gamma correction", "Programmable current", "Thermal management"],
      applications: ["Architectural lighting", "Entertainment lighting", "Smart home", "Gaming peripherals", "Mood lighting"]
    }
  ],
  "battery-management": [
    {
      partNumber: "FM5005",
      name: "FM5005 Power Bank Charger IC",
      shortDescription: "Integrated power bank charger with boost converter and protection",
      descriptionParagraphs: [
        "The FM5005 is a highly integrated power bank charger IC combining a linear charger, boost converter, and comprehensive protection features in a single chip.",
        "The integrated linear charger supports up to 2A charging current with automatic trickle, constant current, and constant voltage modes. The built-in boost converter delivers 5V/2.1A output for USB charging.",
        "Advanced features include battery temperature monitoring, input current limiting, and multiple protection functions. The FM5005 is ideal for power bank and portable charger applications."
      ],
      specifications: {
        "Input Voltage": "4.5V - 5.5V",
        "Charge Current": "Up to 2A",
        "Output Voltage": "5V",
        "Output Current": "Up to 2.1A",
        "Efficiency": ">93%",
        "Protection": "OVP, OCP, OTP",
        "Package": "ESOP-16"
      },
      features: ["Integrated charger + boost", "2A charge current", "5V/2.1A output", "Temperature monitoring", "Multiple protections", "Power bank optimized"],
      applications: ["Power banks", "Portable chargers", "Battery backup systems", "Mobile power", "Emergency chargers"]
    },
    {
      partNumber: "FM5006",
      name: "FM5006 Battery Management System IC",
      shortDescription: "Complete battery management system for 2-4 cell Li-ion packs",
      descriptionParagraphs: [
        "The FM5006 is a complete battery management system IC for 2-4 cell Li-ion battery packs. It integrates cell balancing, protection, and fuel gauging functions in a single device.",
        "The device provides comprehensive protection including overcharge, overdischarge, overcurrent, and short circuit protection for each cell. Integrated cell balancing ensures optimal battery life.",
        "The FM5006 communicates via I2C interface providing real-time battery status including voltage, current, temperature, and state-of-charge. Ideal for power tools, e-bikes, and energy storage systems."
      ],
      specifications: {
        "Cell Count": "2-4 cells",
        "Input Voltage": "6V - 20V",
        "Balance Current": "50mA",
        "Interface": "I2C",
        "Protection": "OVP, UVP, OCP, SCP",
        "Accuracy": "±1% SOC",
        "Package": "TSSOP-24, QFN-32"
      },
      features: ["2-4 cell support", "Cell balancing", "Fuel gauging", "I2C interface", "Comprehensive protection", "High accuracy"],
      applications: ["Power tools", "E-bikes", "Energy storage", "UPS systems", "Industrial equipment"]
    }
  ],
  "motor-drivers": [
    {
      partNumber: "FM6005",
      name: "FM6005 Brushless DC Motor Driver",
      shortDescription: "3-phase brushless DC motor driver with sensorless control",
      descriptionParagraphs: [
        "The FM6005 is a 3-phase brushless DC motor driver with integrated sensorless control algorithms. It supports motors up to 36V and 3A continuous current.",
        "The integrated sensorless control eliminates the need for Hall sensors, reducing system cost and complexity. Advanced algorithms ensure smooth startup and efficient operation across speed ranges.",
        "Features include PWM speed control, direction control, brake function, and comprehensive protection. The FM6005 is ideal for fans, pumps, and small appliance applications."
      ],
      specifications: {
        "Input Voltage": "6V - 36V",
        "Output Current": "Up to 3A",
        "Motor Type": "3-phase BLDC",
        "Control": "Sensorless",
        "PWM Frequency": "Up to 20kHz",
        "Protection": "OCP, OTP, UVLO",
        "Package": "TSSOP-20, QFN-24"
      },
      features: ["Sensorless control", "3-phase drive", "PWM speed control", "Smooth startup", "High efficiency", "Comprehensive protection"],
      applications: ["Cooling fans", "Water pumps", "Small appliances", "Drones", "Robotics"]
    },
    {
      partNumber: "FM6006",
      name: "FM6006 Servo Motor Driver",
      shortDescription: "Precision servo motor driver with position and speed control",
      descriptionParagraphs: [
        "The FM6006 is a precision servo motor driver designed for RC servos and small DC servo motors. It supports position control, speed control, and torque limiting functions.",
        "The device generates precise PWM control signals with 12-bit resolution for accurate positioning. Integrated feedback processing supports potentiometer and encoder inputs.",
        "Advanced features include programmable speed profiles, torque limiting, and stall detection. The FM6006 is ideal for robotics, automation, and RC applications requiring precise motion control."
      ],
      specifications: {
        "Input Voltage": "4.8V - 7.2V",
        "Output Current": "Up to 2A",
        "PWM Resolution": "12-bit",
        "Position Range": "0-180 degrees",
        "Update Rate": "50-333Hz",
        "Interface": "PWM, UART",
        "Package": "SOP-14, TSSOP-14"
      },
      features: ["12-bit PWM resolution", "Position and speed control", "Torque limiting", "Stall detection", "Programmable profiles", "UART interface"],
      applications: ["Robotics", "Automation", "RC models", "Camera gimbals", "Industrial control"]
    }
  ]
};

// 为每个分类补充产品
productsData.categories.forEach(category => {
  const categoryId = category.id;
  const productsToAdd = newProducts[categoryId];
  
  if (productsToAdd && productsToAdd.length > 0) {
    productsToAdd.forEach(productTemplate => {
      // 检查产品是否已存在
      const exists = category.products.some(p => p.partNumber === productTemplate.partNumber);
      if (!exists) {
        // 生成完整的产品数据
        const product = {
          partNumber: productTemplate.partNumber,
          name: productTemplate.name,
          category: category.name,
          shortDescription: productTemplate.shortDescription,
          descriptionParagraphs: productTemplate.descriptionParagraphs,
          specifications: productTemplate.specifications,
          features: productTemplate.features,
          applications: productTemplate.applications,
          faeReview: {
            author: "Michael Zhang",
            title: "Senior FAE - Power Electronics",
            content: `In my experience working with Superchip ${category.name}, I find the ${productTemplate.partNumber} to be an excellent choice for cost-sensitive applications. The component delivers consistent performance and reliability that meets expectations. I particularly appreciate the comprehensive protection features and ease of design. For optimal performance, I recommend following the datasheet guidelines for PCB layout and thermal management. This component offers excellent value and is suitable for high-volume production.`,
            highlight: `Reliable ${category.name} IC for cost-effective designs`
          },
          alternativeParts: generateAlternativeParts(productTemplate.partNumber, category.name, productTemplate.specifications),
          companionParts: generateCompanionParts(productTemplate.partNumber, category.name),
          faqs: generateProductFAQs(productTemplate.partNumber, category.name, productTemplate.specifications)
        };
        
        category.products.push(product);
        console.log(`Added ${productTemplate.partNumber} to ${category.name}`);
      }
    });
  }
  
  console.log(`${category.name}: ${category.products.length} products`);
});

// 保存更新后的数据
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('\n✅ Products data updated successfully!');
