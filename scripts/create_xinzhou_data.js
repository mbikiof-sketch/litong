const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'xinzhou');

// 创建目录
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 生成5维度FAQ的函数
function generateProductFAQs(partNumber, categoryName, specs) {
  const specStr = specs ? Object.entries(specs).slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(', ') : 'various specifications';
  
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance ${categoryName} from Xinzhou Electronics. Key specifications include ${specStr}. This IC is designed for efficient power management with excellent thermal characteristics, comprehensive protection features, and wide operating voltage range. The device offers industry-leading performance with low quiescent current for battery-powered applications. Please refer to the datasheet for complete specifications and characteristic curves.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations and design guidance.`,
      keywords: ["specifications", "parameters", partNumber, "technical data", "Xinzhou"]
    },
    {
      question: `How do I select and use ${partNumber} in my design?`,
      answer: `For proper selection and usage of ${partNumber}: (1) Determine your power requirements including input/output voltage and current. (2) Select appropriate package based on thermal and space constraints. (3) Consider PCB layout guidelines for optimal thermal performance and EMI reduction. (4) Evaluate the IC in your actual application circuit under all operating conditions. (5) Contact BeiLuo FAE for detailed application guidance and design review services to ensure optimal performance.`,
      decisionGuide: `Use our selection guide or contact FAE for application-specific recommendations and comprehensive design support.`,
      keywords: ["selection", "usage", "design guide", "application", "Xinzhou"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from TI, ADI, or MPS?`,
      answer: `The ${partNumber} offers competitive advantages when compared to alternatives from TI, ADI, and MPS. Xinzhou Electronics products are known for excellent cost-performance ratio, fast transient response, and comprehensive protection features. The ${partNumber} typically provides comparable or better efficiency, lower quiescent current, and competitive pricing. Xinzhou's local technical support ensures faster response times and better service for China-based customers. BeiLuo provides local inventory and technical support as an authorized Xinzhou distributor.`,
      decisionGuide: `Evaluate based on your specific requirements for performance, cost, and support. Request samples for direct comparison testing in your application.`,
      keywords: ["comparison", "TI", "ADI", "MPS", "competitive analysis"]
    },
    {
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications across multiple industries including consumer electronics, industrial control, automotive electronics, telecommunications, and IoT devices. Typical applications include power supply systems, battery management, motor drivers, and portable devices. The IC's comprehensive protection features and wide operating range make it suitable for both consumer and industrial environments where reliability and efficiency are critical requirements.`,
      decisionGuide: `Ideal for ${categoryName} applications across consumer, industrial, and automotive markets. Verify specifications match your specific requirements.`,
      keywords: ["applications", "use cases", "target markets", categoryName, "Xinzhou"]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 4-6 weeks for production orders from Xinzhou manufacturing. (2) BeiLuo maintains strategic inventory for faster delivery on popular products - check current stock status. (3) MOQ is typically 3,000 pieces for standard production orders. (4) Sample quantities available for evaluation with minimal lead time. (5) Volume pricing available with competitive discounts at 3K, 10K, 50K, and 100K+ quantity breaks. Contact BeiLuo sales for current stock status, pricing, and project-specific delivery scheduling.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times or check stock for immediate needs.`,
      keywords: ["lead time", "MOQ", "pricing", "availability", "delivery", "Xinzhou"]
    }
  ];
}

// 生成替代型号
function generateAlternativeParts(partNumber, categoryName, specs) {
  return [
    {
      partNumber: `${partNumber}-A`,
      brand: "Xinzhou",
      reason: "Automotive grade version with AEC-Q100 qualification",
      useCase: "For automotive applications requiring higher reliability",
      specifications: specs || {},
      comparison: specs ? Object.fromEntries(Object.entries(specs).map(([k, v]) => [k, `${v} => ${v} (automotive grade)`])) : {}
    },
    {
      partNumber: `${partNumber}-H`,
      brand: "Xinzhou",
      reason: "High efficiency version with lower power consumption",
      useCase: "For battery-powered applications requiring maximum efficiency",
      specifications: specs || {},
      comparison: specs ? Object.fromEntries(Object.entries(specs).map(([k, v]) => [k, `${v} => ${v} (high efficiency)`])) : {}
    }
  ];
}

// 生成配套型号
function generateCompanionParts(partNumber, categoryName) {
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  return [
    {
      partNumber: `XZ-IND-${partNumber}`,
      description: "Inductor optimized for this IC",
      category: categoryName,
      link: `/xinzhou/products/${categorySlug}/xz-ind-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `XZ-CAP-${partNumber}`,
      description: "Capacitor set for input/output filtering",
      category: categoryName,
      link: `/xinzhou/products/${categorySlug}/xz-cap-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `XZ-DIODE-${partNumber}`,
      description: "Schottky diode for rectification",
      category: categoryName,
      link: `/xinzhou/products/${categorySlug}/xz-diode-${partNumber.toLowerCase()}.html`
    }
  ];
}

// 创建 brand.json
const brandData = {
  id: "xinzhou",
  name: "Xinzhou",
  fullName: "Xinzhou Microelectronics",
  chineseName: "芯洲科技",
  description: "Leading provider of high-performance power management ICs for consumer, industrial, and automotive applications.",
  longDescription: "Xinzhou Microelectronics is a professional designer and manufacturer of power management integrated circuits, specializing in DC-DC converters, LDO regulators, battery chargers, and power modules. With advanced design capabilities and comprehensive quality control, Xinzhou provides efficient power solutions for consumer electronics, industrial equipment, and automotive applications.",
  logo: "/assets/brands/xinzhou/logo.svg",
  website: "https://www.xinzhou-ic.com",
  founded: "2015",
  headquarters: "Shenzhen, China",
  employees: "300+",
  revenue: "$50M+",
  certifications: ["ISO9001", "ISO14001", "AEC-Q100"],
  displayName: "Xinzhou",
  tagline: "Powering Innovation with Efficient Solutions",
  yearFounded: 2015,
  distributorStatus: "Authorized Distributor",
  coreProducts: [
    { "name": "DC-DC Converters", "description": "High-efficiency buck and boost converters", "keywords": ["DC-DC", "buck converter", "boost converter", "power management"] },
    { "name": "LDO Regulators", "description": "Low dropout regulators with low noise", "keywords": ["LDO", "linear regulator", "low noise", "low dropout"] },
    { "name": "Battery Chargers", "description": "Li-ion and Li-polymer battery charging ICs", "keywords": ["battery charger", "Li-ion", "Li-polymer", "charging IC"] },
    { "name": "Power Modules", "description": "Integrated power module solutions", "keywords": ["power module", "integrated solution", "compact design"] }
  ],
  industries: [
    { "name": "Consumer Electronics", "description": "Smartphones, tablets, wearables", "keywords": ["consumer", "mobile", "portable"] },
    { "name": "Industrial Control", "description": "Factory automation and control systems", "keywords": ["industrial", "automation", "control"] },
    { "name": "Automotive", "description": "Vehicle electronics and control systems", "keywords": ["automotive", "vehicle", "AEC-Q100"] },
    { "name": "IoT Devices", "description": "Internet of Things and smart devices", "keywords": ["IoT", "smart home", "wireless"] }
  ],
  certifications: [
    { "name": "ISO9001", "description": "Quality Management System" },
    { "name": "ISO14001", "description": "Environmental Management System" },
    { "name": "AEC-Q100", "description": "Automotive Grade Qualification" }
  ],
  seoTitle: "Xinzhou Power Management ICs | DC-DC | LDO | Charger | BeiLuo",
  seoDescription: "Authorized distributor of Xinzhou power management ICs including DC-DC converters, LDO regulators, battery chargers. Technical support and fast delivery.",
  seoKeywords: ["Xinzhou distributor", "Xinzhou power IC", "DC-DC converter distributor", "LDO regulator selection", "battery charger IC", "power management"],
  faqs: [
    {
      question: "Is BeiLuo an authorized distributor of Xinzhou power management ICs?",
      answer: "Yes, BeiLuo is an authorized distributor of Xinzhou Microelectronics power management ICs. We maintain direct relationships with Xinzhou and offer their complete portfolio of DC-DC converters, LDO regulators, battery chargers, and power modules. As an authorized distributor, we provide genuine products with full manufacturer warranty, technical support from both Xinzhou and our experienced FAE team, competitive pricing, and reliable supply chain management.",
      decisionGuide: "Contact our sales team for a copy of our distributor authorization certificate or visit our website to verify our partnership status.",
      keywords: ["Xinzhou distributor", "authorized distributor", "genuine products"]
    },
    {
      question: "What power management products does Xinzhou offer?",
      answer: "Xinzhou offers a comprehensive portfolio of power management ICs: (1) DC-DC Converters: High-efficiency buck and boost converters with various input/output voltage ranges. (2) LDO Regulators: Low dropout regulators featuring low noise, high PSRR, and fast transient response. (3) Battery Chargers: Li-ion and Li-polymer battery charging ICs with comprehensive protection features. (4) Power Modules: Integrated power solutions combining multiple functions in compact packages. All products feature advanced protection mechanisms and are available in industrial and automotive grades.",
      decisionGuide: "Browse our product categories or contact FAE to find the right power management solution for your application.",
      keywords: ["Xinzhou products", "power management ICs", "DC-DC converter", "LDO regulator"]
    },
    {
      question: "What are the key advantages of Xinzhou power management ICs?",
      answer: "Xinzhou power management ICs offer several competitive advantages: (1) High Efficiency: Advanced switching technology minimizes power loss and extends battery life. (2) Compact Size: High integration reduces external component count and PCB area. (3) Comprehensive Protection: Built-in over-current, over-voltage, over-temperature, and short-circuit protection. (4) Fast Transient Response: Quick response to load changes ensures stable output voltage. (5) Low Quiescent Current: Ideal for battery-powered applications. (6) Cost-Effective: Competitive pricing without compromising performance. (7) Local Support: Fast technical support and shorter lead times for China-based customers.",
      decisionGuide: "Evaluate based on your efficiency, size, and cost requirements. Request samples for performance validation.",
      keywords: ["Xinzhou advantages", "high efficiency", "compact size", "protection features"]
    },
    {
      question: "Does Xinzhou provide automotive-grade power management ICs?",
      answer: "Yes, Xinzhou offers AEC-Q100 qualified automotive-grade power management ICs designed for vehicle electronics applications. These products undergo rigorous qualification testing including high temperature operating life (HTOL), temperature cycling, and ESD testing. Automotive-grade products feature enhanced reliability, wider operating temperature ranges (-40°C to +125°C), and comprehensive documentation for automotive system design. Popular automotive applications include infotainment systems, ADAS, body electronics, and powertrain control modules.",
      decisionGuide: "For automotive applications, specify AEC-Q100 qualified variants and verify temperature range requirements.",
      keywords: ["automotive grade", "AEC-Q100", "vehicle electronics", "automotive ICs"]
    },
    {
      question: "What technical support does BeiLuo provide for Xinzhou products?",
      answer: "BeiLuo provides comprehensive technical support for Xinzhou power management ICs: (1) Product Selection: Assistance in selecting the optimal IC for your application requirements. (2) Design Review: Schematic and PCB layout review to ensure optimal performance. (3) Application Notes: Detailed documentation for common applications and design guidelines. (4) Evaluation Boards: Available for performance testing and validation. (5) FAE Support: Direct access to experienced field application engineers. (6) Sample Program: Quick sample delivery for prototyping and evaluation. (7) Custom Solutions: Collaboration on specialized power management requirements.",
      decisionGuide: "Contact our FAE team early in your design cycle for optimal results and fastest time-to-market.",
      keywords: ["technical support", "FAE support", "design review", "application notes"]
    }
  ],
  featured: true,
  status: "active",
  supportEmail: "support@xinzhou-ic.com",
  supportPhone: "+86-755-8888-8888"
};

fs.writeFileSync(path.join(dataDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('✅ brand.json created');

// 创建 products.json
const productsData = {
  seoTitle: "Xinzhou Power Management ICs | DC-DC | LDO | Charger | BeiLuo",
  seoDescription: "Authorized distributor of Xinzhou power management ICs. DC-DC converters, LDO regulators, battery chargers with technical support.",
  seoKeywords: ["Xinzhou distributor", "Xinzhou power IC", "DC-DC converter", "LDO regulator", "battery charger"],
  faqs: [
    {
      question: "What power management IC categories does Xinzhou offer?",
      answer: "Xinzhou offers four main power management IC categories: (1) DC-DC Converters: High-efficiency buck and boost converters for voltage regulation. (2) LDO Regulators: Low dropout linear regulators for noise-sensitive applications. (3) Battery Chargers: Li-ion and Li-polymer battery charging solutions. (4) Power Modules: Integrated power solutions for compact designs. Each category includes multiple series with various voltage, current, and package options.",
      decisionGuide: "Browse our product categories or contact FAE to find the right power management IC for your application.",
      keywords: ["Xinzhou product categories", "power management ICs", "product selection"]
    },
    {
      question: "How do I select the right Xinzhou power management IC?",
      answer: "Selecting the right Xinzhou power management IC involves: (1) Define electrical requirements: input/output voltage, current, efficiency targets. (2) Consider package constraints: thermal requirements, PCB space availability. (3) Evaluate protection needs: over-current, over-voltage, thermal protection. (4) Check special features: enable pin, power-good indicator, soft-start. (5) Review automotive requirements: AEC-Q100 qualification if needed. Contact BeiLuo FAE for detailed selection guidance and design support.",
      decisionGuide: "Use our online selection tools or contact FAE for personalized recommendations.",
      keywords: ["IC selection", "power management selection", "design guide"]
    }
  ],
  categories: [
    {
      id: "dcdc-converters",
      name: "DC-DC Converters",
      slug: "dcdc-converters",
      description: "High-efficiency DC-DC buck and boost converters for voltage regulation.",
      longDescription: "Xinzhou DC-DC converters provide efficient voltage regulation for a wide range of applications. These ICs feature high switching frequency, synchronous rectification, and advanced control algorithms to maximize efficiency and minimize external component size. Available in various input/output voltage ranges and current ratings to meet diverse application requirements.",
      icon: "/assets/icons/dcdc-converter.svg",
      image: "/assets/images/xinzhou/dcdc-converters.jpg",
      series: [
        { name: "XZ1000 Series", description: "2A synchronous buck converter with 4.5-18V input" },
        { name: "XZ2000 Series", description: "3A high-efficiency buck converter with integrated switches" }
      ],
      parameters: ["Input Voltage", "Output Voltage", "Output Current", "Switching Frequency", "Efficiency"],
      selectionGuide: "Choose based on input/output voltage requirements, current rating, and efficiency targets.",
      selectionGuideLink: {
        url: "/xinzhou/support/dcdc-selection-guide.html",
        text: "DC-DC Converter Selection Guide"
      },
      keywords: ["DC-DC converter", "buck converter", "voltage regulator", "synchronous rectification"],
      faqs: [
        {
          question: "What are the key features of Xinzhou DC-DC converters?",
          answer: "Xinzhou DC-DC converters feature: (1) High efficiency up to 95% with synchronous rectification. (2) Wide input voltage range from 2.5V to 36V. (3) Adjustable output voltage with external resistors. (4) High switching frequency up to 2MHz for compact designs. (5) Comprehensive protection including OCP, OVP, OTP. (6) Low quiescent current for battery applications. (7) Small packages including SOT23, QFN, and DFN.",
          decisionGuide: "Select DC-DC converters based on voltage, current, and efficiency requirements.",
          keywords: ["DC-DC features", "high efficiency", "synchronous rectification"]
        }
      ],
      products: [
        {
          partNumber: "XZ1001",
          name: "XZ1001 2A Synchronous Buck Converter",
          category: "DC-DC Converters",
          shortDescription: "XZ1001 2A synchronous buck converter with 4.5-18V input and adjustable output",
          descriptionParagraphs: [
            "The XZ1001 is a 2A synchronous buck converter featuring high efficiency and wide input voltage range. It integrates high-side and low-side power MOSFETs for optimal performance.",
            "With 4.5V to 18V input range and adjustable output down to 0.6V, this converter is ideal for 12V industrial and consumer applications. The 500kHz switching frequency enables compact external components.",
            "Built-in protection features include cycle-by-cycle current limit, thermal shutdown, and short-circuit protection, ensuring reliable operation in demanding environments."
          ],
          specifications: {
            "Input Voltage": "4.5V - 18V",
            "Output Voltage": "0.6V - VIN",
            "Output Current": "2A",
            "Switching Frequency": "500kHz",
            "Efficiency": "Up to 95%",
            "Quiescent Current": "200μA",
            "Package": "SOT23-6"
          },
          features: ["Synchronous rectification", "High efficiency", "Wide input range", "Adjustable output", "Internal compensation", "Soft-start"],
          applications: ["Industrial equipment", "Consumer electronics", "Network equipment", "Set-top boxes", "Printers"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "The XZ1001 is an excellent choice for 12V to low voltage conversion. I've used this part in numerous industrial designs with excellent results. The integrated synchronous rectification eliminates the need for external diodes, reducing BOM cost and improving efficiency. The internal compensation simplifies design and ensures stability across the operating range.",
            highlight: "High-efficiency 2A buck converter"
          },
          alternativeParts: generateAlternativeParts("XZ1001", "DC-DC Converters", {}),
          companionParts: generateCompanionParts("XZ1001", "DC-DC Converters"),
          faqs: generateProductFAQs("XZ1001", "DC-DC Converters", {})
        },
        {
          partNumber: "XZ1002",
          name: "XZ1002 3A High-Efficiency Buck Converter",
          category: "DC-DC Converters",
          shortDescription: "XZ1002 3A synchronous buck converter with enhanced efficiency for high-current applications",
          descriptionParagraphs: [
            "The XZ1002 is a 3A synchronous buck converter optimized for high-current applications requiring maximum efficiency. Advanced control algorithms minimize switching losses.",
            "Supporting 4.5V to 20V input and delivering up to 3A output current, this converter handles demanding loads while maintaining high efficiency across the operating range.",
            "Features include programmable soft-start, power-good indicator, and enable pin for power sequencing. Comprehensive protection ensures reliable operation."
          ],
          specifications: {
            "Input Voltage": "4.5V - 20V",
            "Output Voltage": "0.6V - VIN",
            "Output Current": "3A",
            "Switching Frequency": "600kHz",
            "Efficiency": "Up to 96%",
            "Quiescent Current": "250μA",
            "Package": "DFN3x3-10"
          },
          features: ["3A output current", "Enhanced efficiency", "Power-good indicator", "Programmable soft-start", "Enable pin", "Thermal protection"],
          applications: ["High-current industrial", "Telecom equipment", "Servers", "Storage systems", "Medical devices"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "For high-current applications, the XZ1002 delivers exceptional performance. The 3A rating with 96% peak efficiency makes it ideal for power-hungry industrial equipment. I particularly appreciate the power-good indicator which simplifies power sequencing in multi-rail systems. The thermal performance in the DFN package is excellent with proper layout.",
            highlight: "3A high-efficiency buck converter"
          },
          alternativeParts: generateAlternativeParts("XZ1002", "DC-DC Converters", {}),
          companionParts: generateCompanionParts("XZ1002", "DC-DC Converters"),
          faqs: generateProductFAQs("XZ1002", "DC-DC Converters", {})
        }
      ]
    },
    {
      id: "ldo-regulators",
      name: "LDO Regulators",
      slug: "ldo-regulators",
      description: "Low dropout linear regulators with low noise and high PSRR for sensitive applications.",
      longDescription: "Xinzhou LDO regulators provide clean, stable output voltage with minimal dropout and low noise. These linear regulators feature high PSRR, fast transient response, and low quiescent current, making them ideal for noise-sensitive applications such as RF, audio, and precision analog circuits.",
      icon: "/assets/icons/ldo-regulator.svg",
      image: "/assets/images/xinzhou/ldo-regulators.jpg",
      series: [
        { name: "XZ3000 Series", description: "Low noise LDO with high PSRR for RF applications" },
        { name: "XZ3100 Series", description: "Ultra-low power LDO for battery applications" }
      ],
      parameters: ["Input Voltage", "Output Voltage", "Output Current", "Dropout Voltage", "PSRR", "Noise"],
      selectionGuide: "Select based on noise requirements, dropout voltage, PSRR, and current rating.",
      selectionGuideLink: {
        url: "/xinzhou/support/ldo-selection-guide.html",
        text: "LDO Regulator Selection Guide"
      },
      keywords: ["LDO regulator", "linear regulator", "low noise", "high PSRR", "low dropout"],
      faqs: [
        {
          question: "What are the key features of Xinzhou LDO regulators?",
          answer: "Xinzhou LDO regulators feature: (1) Low dropout voltage down to 100mV at full load. (2) High PSRR up to 80dB at 1kHz for noise rejection. (3) Low output noise for sensitive applications. (4) Fast transient response to load changes. (5) Low quiescent current for battery life extension. (6) Multiple fixed and adjustable output options. (7) Small packages for space-constrained designs.",
          decisionGuide: "Select LDO regulators based on noise, dropout, and PSRR requirements.",
          keywords: ["LDO features", "low noise", "high PSRR", "low dropout"]
        }
      ],
      products: [
        {
          partNumber: "XZ3001",
          name: "XZ3001 Low Noise LDO Regulator",
          category: "LDO Regulators",
          shortDescription: "XZ3001 500mA low noise LDO with high PSRR for RF and analog applications",
          descriptionParagraphs: [
            "The XZ3001 is a 500mA low noise LDO regulator designed for noise-sensitive applications. It delivers exceptional PSRR performance and ultra-low output noise.",
            "With 2.5V to 5.5V input range and fixed/adjustable output options, this LDO is ideal for powering RF circuits, audio systems, and precision analog devices.",
            "The high PSRR of 80dB at 1kHz effectively rejects input noise, while the low dropout voltage of 150mV at 500mA maximizes battery life."
          ],
          specifications: {
            "Input Voltage": "2.5V - 5.5V",
            "Output Voltage": "1.2V / 1.8V / 3.3V / Adj",
            "Output Current": "500mA",
            "Dropout Voltage": "150mV @ 500mA",
            "PSRR": "80dB @ 1kHz",
            "Output Noise": "30μVRMS",
            "Quiescent Current": "50μA",
            "Package": "SOT23-5"
          },
          features: ["High PSRR", "Low noise", "Low dropout", "Fast transient", "Current limit", "Thermal protection"],
          applications: ["RF circuits", "Audio systems", "Camera modules", "Precision analog", "Communication equipment"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "The XZ3001 is my go-to LDO for noise-sensitive applications. The 80dB PSRR at 1kHz is excellent for rejecting switching noise from upstream DC-DC converters. I've used this extensively in RF and camera applications where clean power is critical. The dropout voltage is impressively low, maximizing battery life in portable devices.",
            highlight: "Low noise LDO with high PSRR"
          },
          alternativeParts: generateAlternativeParts("XZ3001", "LDO Regulators", {}),
          companionParts: generateCompanionParts("XZ3001", "LDO Regulators"),
          faqs: generateProductFAQs("XZ3001", "LDO Regulators", {})
        },
        {
          partNumber: "XZ3102",
          name: "XZ3102 Ultra-Low Power LDO",
          category: "LDO Regulators",
          shortDescription: "XZ3102 200mA ultra-low power LDO optimized for battery-powered applications",
          descriptionParagraphs: [
            "The XZ3102 is an ultra-low power LDO regulator designed to maximize battery life in portable devices. It features industry-leading quiescent current consumption.",
            "With only 1μA quiescent current and 200mA output capability, this LDO extends battery life in IoT devices, wearables, and other battery-powered applications.",
            "Despite the ultra-low power consumption, the XZ3102 maintains good transient response and stable operation across the operating range."
          ],
          specifications: {
            "Input Voltage": "1.8V - 5.5V",
            "Output Voltage": "1.0V - 3.3V",
            "Output Current": "200mA",
            "Dropout Voltage": "200mV @ 200mA",
            "PSRR": "60dB @ 1kHz",
            "Quiescent Current": "1μA",
            "Shutdown Current": "0.1μA",
            "Package": "SOT23-5"
          },
          features: ["Ultra-low quiescent current", "Low shutdown current", "Stable with ceramic caps", "Current limit", "Thermal protection", "Small package"],
          applications: ["IoT devices", "Wearables", "Battery-powered sensors", "Smart home devices", "Portable medical"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "For battery-powered applications, the XZ3102 is outstanding. The 1μA quiescent current is among the best in the industry. I've specified this for IoT sensor nodes that need to operate for years on small batteries. The trade-off is slightly higher dropout and lower PSRR compared to the XZ3001, but for always-on battery applications, the power savings are worth it.",
            highlight: "Ultra-low power LDO for battery applications"
          },
          alternativeParts: generateAlternativeParts("XZ3102", "LDO Regulators", {}),
          companionParts: generateCompanionParts("XZ3102", "LDO Regulators"),
          faqs: generateProductFAQs("XZ3102", "LDO Regulators", {})
        }
      ]
    },
    {
      id: "battery-chargers",
      name: "Battery Chargers",
      slug: "battery-chargers",
      description: "Li-ion and Li-polymer battery charging ICs with comprehensive protection features.",
      longDescription: "Xinzhou battery charger ICs provide complete charging solutions for single and multi-cell Li-ion/Li-polymer batteries. These ICs feature constant-current/constant-voltage charging profiles, automatic charge termination, and comprehensive safety protection for reliable battery charging.",
      icon: "/assets/icons/battery-charger.svg",
      image: "/assets/images/xinzhou/battery-chargers.jpg",
      series: [
        { name: "XZ5000 Series", description: "Single-cell Li-ion charger with 1A charge current" },
        { name: "XZ5100 Series", description: "Linear charger with power path management" }
      ],
      parameters: ["Input Voltage", "Charge Current", "Battery Voltage", "Charge Accuracy", "Protection Features"],
      selectionGuide: "Select based on battery type, charge current, and protection requirements.",
      selectionGuideLink: {
        url: "/xinzhou/support/battery-charger-selection-guide.html",
        text: "Battery Charger Selection Guide"
      },
      keywords: ["battery charger", "Li-ion charger", "Li-polymer charger", "charging IC"],
      faqs: [
        {
          question: "What are the key features of Xinzhou battery chargers?",
          answer: "Xinzhou battery chargers feature: (1) CC/CV charging profile for optimal battery life. (2) Automatic charge termination with safety timer. (3) Comprehensive protection: over-voltage, over-current, thermal protection. (4) Charge status indicators. (5) Power path management options. (6) High charge accuracy within ±0.5%. (7) Small packages for portable applications.",
          decisionGuide: "Select battery chargers based on battery type, capacity, and charge current requirements.",
          keywords: ["battery charger features", "Li-ion charging", "CC/CV profile"]
        }
      ],
      products: [
        {
          partNumber: "XZ5001",
          name: "XZ5001 Single-Cell Li-Ion Charger",
          category: "Battery Chargers",
          shortDescription: "XZ5001 1A linear Li-ion battery charger with comprehensive protection",
          descriptionParagraphs: [
            "The XZ5001 is a complete constant-current/constant-voltage linear charger for single-cell lithium-ion batteries. It provides a simple, low-cost charging solution.",
            "With up to 1A programmable charge current and ±0.5% charge voltage accuracy, this charger ensures safe and efficient battery charging. No external MOSFET or blocking diode is required.",
            "Safety features include automatic charge termination, charge status output, thermal regulation, and multiple protection mechanisms for reliable operation."
          ],
          specifications: {
            "Input Voltage": "4.5V - 6.5V",
            "Charge Current": "Programmable up to 1A",
            "Battery Voltage": "4.2V ±0.5%",
            "Charge Accuracy": "±0.5%",
            "Trickle Charge": "Yes",
            "Auto Recharge": "Yes",
            "Protection": "OVP, OCP, OTP",
            "Package": "SOT23-5"
          },
          features: ["CC/CV charging", "No external MOSFET needed", "Charge status indicator", "Thermal regulation", "Auto recharge", "Soft-start"],
          applications: ["Portable devices", "Bluetooth headsets", "Power banks", "Handheld instruments", "Toys"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "The XZ5001 is a straightforward, reliable Li-ion charger that I've used in many consumer products. The linear topology keeps the design simple with minimal external components. The ±0.5% charge voltage accuracy is excellent for battery life. For applications up to 1A where efficiency isn't critical, this is a cost-effective and reliable choice.",
            highlight: "Reliable 1A Li-ion battery charger"
          },
          alternativeParts: generateAlternativeParts("XZ5001", "Battery Chargers", {}),
          companionParts: generateCompanionParts("XZ5001", "Battery Chargers"),
          faqs: generateProductFAQs("XZ5001", "Battery Chargers", {})
        },
        {
          partNumber: "XZ5002",
          name: "XZ5002 Switch-Mode Battery Charger",
          category: "Battery Chargers",
          shortDescription: "XZ5002 2A switch-mode Li-ion charger with high efficiency and power path",
          descriptionParagraphs: [
            "The XZ5002 is a high-efficiency switch-mode battery charger with integrated power path management. It enables simultaneous system operation and battery charging.",
            "Supporting up to 2A charge current with 95% efficiency, this charger minimizes heat generation and enables faster charging compared to linear solutions.",
            "The power path management allows the system to operate from the adapter while charging the battery, or seamlessly switch to battery power when adapter is removed."
          ],
          specifications: {
            "Input Voltage": "4.5V - 13.5V",
            "Charge Current": "Programmable up to 2A",
            "Battery Voltage": "4.2V / 4.35V ±0.5%",
            "Efficiency": "Up to 95%",
            "Power Path": "Yes",
            "Input Current Limit": "Yes",
            "Protection": "OVP, OCP, OTP, short circuit",
            "Package": "QFN4x4-16"
          },
          features: ["High efficiency", "Power path management", "2A charge current", "Input current limiting", "System power management", "I2C interface"],
          applications: ["Tablets", "Portable media players", "Industrial handhelds", "Medical devices", "High-capacity power banks"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "For high-current charging applications, the XZ5002 is excellent. The switch-mode topology with 95% efficiency significantly reduces heat compared to linear chargers. The power path management is a key feature that allows the system to operate while charging, with seamless power switching. I recommend this for any application requiring 1A+ charge current or where thermal management is critical.",
            highlight: "High-efficiency switch-mode charger with power path"
          },
          alternativeParts: generateAlternativeParts("XZ5002", "Battery Chargers", {}),
          companionParts: generateCompanionParts("XZ5002", "Battery Chargers"),
          faqs: generateProductFAQs("XZ5002", "Battery Chargers", {})
        }
      ]
    },
    {
      id: "power-modules",
      name: "Power Modules",
      slug: "power-modules",
      description: "Integrated power module solutions combining multiple functions in compact packages.",
      longDescription: "Xinzhou power modules integrate DC-DC converters, LDOs, battery chargers, and power management functions in compact, easy-to-use packages. These modules simplify power system design, reduce time-to-market, and minimize PCB area requirements.",
      icon: "/assets/icons/power-module.svg",
      image: "/assets/images/xinzhou/power-modules.jpg",
      series: [
        { name: "XZ7000 Series", description: "PMIC with multiple buck converters and LDOs" },
        { name: "XZ7100 Series", description: "Battery management module with charger and fuel gauge" }
      ],
      parameters: ["Input Voltage", "Output Rails", "Output Current", "Efficiency", "Package Size"],
      selectionGuide: "Select based on number of output rails, current requirements, and integration level needed.",
      selectionGuideLink: {
        url: "/xinzhou/support/power-module-selection-guide.html",
        text: "Power Module Selection Guide"
      },
      keywords: ["power module", "PMIC", "integrated power", "multi-output"],
      faqs: [
        {
          question: "What are the key features of Xinzhou power modules?",
          answer: "Xinzhou power modules feature: (1) High integration combining multiple power functions. (2) Pre-optimized design for fast time-to-market. (3) Compact packages minimizing PCB area. (4) Simplified BOM with fewer external components. (5) Factory-configured or programmable output voltages. (6) Comprehensive protection for all outputs. (7) I2C interface for monitoring and control.",
          decisionGuide: "Select power modules based on integration requirements and output rail specifications.",
          keywords: ["power module features", "high integration", "PMIC", "compact design"]
        }
      ],
      products: [
        {
          partNumber: "XZ7001",
          name: "XZ7001 Multi-Output PMIC",
          category: "Power Modules",
          shortDescription: "XZ7001 4-channel PMIC with 3 buck converters and 1 LDO for system power",
          descriptionParagraphs: [
            "The XZ7001 is a highly integrated power management IC (PMIC) featuring three synchronous buck converters and one LDO regulator. It provides a complete system power solution.",
            "With factory-programmable or I2C-adjustable output voltages, this PMIC can be configured for various processor and system power requirements. The integrated sequencing simplifies power-up control.",
            "Each output has independent enable control and power-good indicators, allowing flexible power management for complex systems."
          ],
          specifications: {
            "Input Voltage": "3.0V - 5.5V",
            "Output Rails": "3x Buck + 1x LDO",
            "Buck Current": "2A / 1.5A / 1A",
            "LDO Current": "300mA",
            "Efficiency": "Up to 95%",
            "Interface": "I2C",
            "Package": "QFN5x5-32"
          },
          features: ["4 output rails", "Factory programmable", "I2C interface", "Power sequencing", "Individual enables", "Power-good indicators"],
          applications: ["Application processors", "FPGA systems", "Industrial controllers", "Communication modules", "Set-top boxes"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "The XZ7001 is an excellent PMIC for applications requiring multiple power rails. The integration of three bucks and one LDO in a single package saves significant PCB area and simplifies design. I particularly like the I2C programmability which allows voltage adjustment without hardware changes. The power sequencing feature is essential for proper processor startup.",
            highlight: "4-channel PMIC for system power"
          },
          alternativeParts: generateAlternativeParts("XZ7001", "Power Modules", {}),
          companionParts: generateCompanionParts("XZ7001", "Power Modules"),
          faqs: generateProductFAQs("XZ7001", "Power Modules", {})
        },
        {
          partNumber: "XZ7102",
          name: "XZ7102 Battery Management Module",
          category: "Power Modules",
          shortDescription: "XZ7102 integrated battery management module with charger, fuel gauge, and protection",
          descriptionParagraphs: [
            "The XZ7102 is a complete battery management solution integrating charger, fuel gauge, and protection functions in a single package. It simplifies battery-powered system design.",
            "The module supports single-cell Li-ion batteries with up to 2A charge current and provides accurate battery monitoring through the integrated coulomb counter fuel gauge.",
            "Safety features include over-charge, over-discharge, over-current, and short-circuit protection, ensuring safe battery operation in all conditions."
          ],
          specifications: {
            "Input Voltage": "4.5V - 6.5V",
            "Charge Current": "Up to 2A",
            "Battery Type": "Single-cell Li-ion",
            "Fuel Gauge": "Coulomb counter",
            "Protection": "OVP, UVP, OCP, SCP",
            "Interface": "I2C",
            "Package": "QFN4x4-24"
          },
          features: ["Integrated charger", "Fuel gauge", "Battery protection", "I2C interface", "Accurate SOC", "Compact package"],
          applications: ["Smartphones", "Tablets", "Portable devices", "IoT gateways", "Handheld terminals"],
          faeReview: {
            author: "David Wang",
            title: "Senior FAE - Power Management",
            content: "The XZ7102 is a comprehensive battery management solution that significantly reduces design complexity. The integration of charger, fuel gauge, and protection eliminates the need for multiple ICs. The coulomb counter fuel gauge provides much better accuracy than voltage-based methods. For any single-cell Li-ion application, this module accelerates time-to-market while ensuring safe, reliable battery operation.",
            highlight: "Complete battery management solution"
          },
          alternativeParts: generateAlternativeParts("XZ7102", "Power Modules", {}),
          companionParts: generateCompanionParts("XZ7102", "Power Modules"),
          faqs: generateProductFAQs("XZ7102", "Power Modules", {})
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ products.json created');

// 创建 solutions.json
const solutionsData = {
  seoTitle: "Xinzhou Power Solutions | Battery | Industrial | IoT | BeiLuo",
  seoDescription: "Complete power management solutions from Xinzhou for battery-powered devices, industrial systems, and IoT applications.",
  seoKeywords: ["Xinzhou solutions", "power solutions", "battery solution", "industrial power"],
  faqs: [
    {
      question: "What complete solutions does Xinzhou offer?",
      answer: "Xinzhou provides comprehensive power management solutions for: (1) Battery-Powered Devices: Complete power solutions including charging, regulation, and battery management. (2) Industrial Systems: Robust power solutions with wide input range and high reliability. (3) IoT Applications: Ultra-low power solutions maximizing battery life. Each solution includes optimized IC selection, reference designs, and technical support.",
      decisionGuide: "Select the solution matching your application area.",
      keywords: ["Xinzhou solutions", "power solutions", "complete solutions"]
    }
  ],
  solutions: [
    {
      id: "battery-powered-device-solution",
      title: "Battery-Powered Device Power Solution",
      slug: "battery-powered-device-solution",
      description: "Complete power solution for portable and battery-operated devices.",
      longDescription: "The Battery-Powered Device Power Solution provides a complete power management system for portable electronics. This solution combines high-efficiency DC-DC conversion, low-noise LDO regulation, and intelligent battery charging to maximize battery life and system performance.",
      image: "/assets/images/solutions/xinzhou/battery-device.jpg",
      applications: ["Smartphones", "Tablets", "Wearables", "Portable Medical", "IoT Devices"],
      benefits: [
        { title: "Extended Battery Life", description: "Ultra-low quiescent current and high efficiency" },
        { title: "Fast Charging", description: "High-efficiency switch-mode charging up to 2A" },
        { title: "Compact Design", description: "High integration reduces PCB area" }
      ],
      coreAdvantages: [
        { title: "High Efficiency", description: "Up to 96% efficiency minimizes power loss" },
        { title: "Low Power", description: "1μA quiescent current extends standby time" },
        { title: "Complete Integration", description: "Single-chip battery management solution" }
      ],
      bomList: [
        { partNumber: "XZ5002", quantity: 1, description: "2A Switch-Mode Charger", link: "/xinzhou/products/battery-chargers/xz5002.html" },
        { partNumber: "XZ3102", quantity: 1, description: "Ultra-Low Power LDO", link: "/xinzhou/products/ldo-regulators/xz3102.html" },
        { partNumber: "XZ7102", quantity: 1, description: "Battery Management Module", link: "/xinzhou/products/power-modules/xz7102.html" }
      ],
      technicalSpecs: { "Input Voltage": "4.5V - 13.5V", "Charge Current": "Up to 2A", "System Current": "Up to 3A" },
      customerCases: [
        { customer: "Wearable Device Maker", industry: "Consumer", application: "Smart Watch", challenge: "Battery life", solution: "Low power solution", result: "7-day battery life" }
      ],
      faeInsights: {
        author: { name: "David Wang", title: "Senior FAE - Power", experience: "10 years", expertise: ["Battery Management", "Low Power Design"] },
        content: "Battery-powered devices require careful power management to achieve optimal battery life. The combination of high-efficiency charging and ultra-low power regulation is key.",
        keyTakeaways: ["Minimize quiescent current", "Use high-efficiency charging", "Optimize power sequencing"]
      },
      faqs: [
        { question: "How do I maximize battery life?", answer: "Use ultra-low power LDOs and efficient DC-DC converters with proper power sequencing.", decisionGuide: "Select components based on quiescent current and efficiency.", keywords: ["battery life", "low power"] }
      ]
    },
    {
      id: "industrial-power-solution",
      title: "Industrial Power System Solution",
      slug: "industrial-power-solution",
      description: "Robust power solution for industrial control and automation systems.",
      longDescription: "The Industrial Power System Solution provides reliable power management for industrial applications. This solution features wide input voltage range, high current capability, and comprehensive protection for operation in harsh industrial environments.",
      image: "/assets/images/solutions/xinzhou/industrial-power.jpg",
      applications: ["Factory Automation", "Process Control", "Test Equipment", "Robotics", "Motor Drives"],
      benefits: [
        { title: "Wide Input Range", description: "4.5V to 36V input accommodates various sources" },
        { title: "High Reliability", description: "Comprehensive protection and thermal management" },
        { title: "High Current", description: "Up to 3A output for demanding loads" }
      ],
      coreAdvantages: [
        { title: "Industrial Grade", description: "Designed for harsh environments" },
        { title: "Robust Protection", description: "OVP, OCP, OTP, and short-circuit protection" },
        { title: "High Efficiency", description: "Synchronous rectification up to 96%" }
      ],
      bomList: [
        { partNumber: "XZ1002", quantity: 2, description: "3A Buck Converter", link: "/xinzhou/products/dcdc-converters/xz1002.html" },
        { partNumber: "XZ3001", quantity: 1, description: "Low Noise LDO", link: "/xinzhou/products/ldo-regulators/xz3001.html" },
        { partNumber: "XZ7001", quantity: 1, description: "Multi-Output PMIC", link: "/xinzhou/products/power-modules/xz7001.html" }
      ],
      technicalSpecs: { "Input Voltage": "4.5V - 36V", "Output Current": "Up to 6A total", "Temperature": "-40°C to +85°C" },
      customerCases: [
        { customer: "Automation Company", industry: "Industrial", application: "PLC System", challenge: "Reliable power", solution: "Industrial power solution", result: "99.9% uptime" }
      ],
      faeInsights: {
        author: { name: "David Wang", title: "Senior FAE - Industrial", experience: "10 years", expertise: ["Industrial Power", "Reliability Design"] },
        content: "Industrial applications require power solutions that can handle wide input variations and provide reliable operation. Protection features and thermal management are critical.",
        keyTakeaways: ["Design for wide input range", "Implement comprehensive protection", "Consider thermal management"]
      },
      faqs: [
        { question: "What makes a power solution industrial grade?", answer: "Wide input range, comprehensive protection, and operation over extended temperature range.", decisionGuide: "Verify industrial temperature rating and protection features.", keywords: ["industrial grade", "reliability"] }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json created');

// 创建 support.json
const supportData = {
  seoTitle: "Xinzhou Technical Support | Power IC Selection | BeiLuo",
  seoDescription: "Technical support resources for Xinzhou power management ICs including selection guides, application notes, and design resources.",
  seoKeywords: ["Xinzhou support", "power IC guide", "selection guide", "application support"],
  faqs: [
    {
      question: "What technical resources are available for Xinzhou power management ICs?",
      answer: "Available resources include datasheets, application notes, reference designs, and evaluation boards. Contact BeiLuo FAE for additional support.",
      decisionGuide: "Start with datasheets and selection guides.",
      keywords: ["technical resources", "documentation", "support"]
    }
  ],
  articles: [
    {
      id: "dcdc-selection-guide",
      title: "DC-DC Converter Selection Guide",
      category: "Selection Guide",
      slug: "dcdc-selection-guide",
      author: { name: "David Wang", title: "Senior FAE - Power Management", experience: "10 years", expertise: ["DC-DC Design", "Power Systems"] },
      publishDate: "2024-01-15",
      lastUpdated: "2024-01-15",
      summary: "Comprehensive guide for selecting DC-DC converters for various applications.",
      content: ["DC-DC converter selection requires consideration of input/output voltage, current, efficiency, and package constraints..."],
      tags: ["DC-DC", "converter", "selection", "guide"],
      relatedArticles: ["ldo-selection-guide", "thermal-design-guide"],
      faeInsights: { content: "Proper DC-DC selection is critical for system efficiency.", keyTakeaways: ["Match voltage and current", "Consider efficiency", "Check thermal requirements"] },
      customerCases: [{ customerName: "Industrial Co", industry: "Industrial", application: "Power Supply", problem: "Poor efficiency", solution: "Proper DC-DC selection", results: "15% efficiency improvement" }],
      faqs: [{ question: "How do I select a DC-DC converter?", answer: "Consider voltage, current, efficiency, and thermal requirements.", decisionGuide: "Follow selection criteria.", keywords: ["DC-DC selection", "guide"] }]
    },
    {
      id: "ldo-selection-guide",
      title: "LDO Regulator Selection Guide",
      category: "Selection Guide",
      slug: "ldo-selection-guide",
      author: { name: "David Wang", title: "Senior FAE - Power Management", experience: "10 years", expertise: ["LDO Design", "Analog Power"] },
      publishDate: "2024-01-20",
      lastUpdated: "2024-01-20",
      summary: "Guide for selecting LDO regulators based on noise, dropout, and PSRR requirements.",
      content: ["LDO selection requires understanding of noise requirements, dropout voltage, PSRR, and power dissipation..."],
      tags: ["LDO", "regulator", "selection", "guide"],
      relatedArticles: ["dcdc-selection-guide", "thermal-design-guide"],
      faeInsights: { content: "LDO selection balances noise performance with power dissipation.", keyTakeaways: ["Check PSRR requirements", "Calculate power dissipation", "Consider thermal constraints"] },
      customerCases: [{ customerName: "RF Co", industry: "Telecom", application: "RF Power", problem: "Noise issues", solution: "High PSRR LDO", results: "Clean power supply" }],
      faqs: [{ question: "When should I use an LDO vs DC-DC?", answer: "Use LDO for noise-sensitive apps with small voltage drop; use DC-DC for high efficiency with large drops.", decisionGuide: "Evaluate noise vs efficiency trade-offs.", keywords: ["LDO selection", "DC-DC comparison"] }]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ support.json created');

// 创建 news.json
const newsData = {
  seoTitle: "Xinzhou News | Product Updates | BeiLuo",
  seoDescription: "Latest news and updates from Xinzhou Microelectronics including new power IC releases and company updates.",
  seoKeywords: ["Xinzhou news", "product updates", "new products", "company news"],
  news: [
    {
      id: "xinzhou-releases-xz7000-series",
      title: "Xinzhou Releases XZ7000 Series PMICs",
      date: "2024-03-15",
      category: "Product News",
      summary: "Xinzhou announces new XZ7000 series PMICs with multi-output power management for complex systems.",
      content: "Xinzhou Microelectronics has released the XZ7000 series of power management ICs (PMICs) designed for complex system power requirements. The new PMICs integrate multiple buck converters and LDOs in compact packages, simplifying power system design for application processors and FPGAs.",
      image: "/assets/images/news/xinzhou-pmic-release.jpg",
      tags: ["PMIC", "new product", "power management", "multi-output"]
    },
    {
      id: "xinzhou-achieves-aec-q100",
      title: "Xinzhou Achieves AEC-Q100 Automotive Qualification",
      date: "2024-02-28",
      category: "Certification",
      summary: "Key power management products receive AEC-Q100 qualification for automotive applications.",
      content: "Xinzhou Microelectronics is pleased to announce that its key power management ICs have achieved AEC-Q100 automotive qualification. This certification enables automotive manufacturers to use Xinzhou components with confidence in critical vehicle applications requiring extended temperature range and enhanced reliability.",
      image: "/assets/images/news/xinzhou-automotive-cert.jpg",
      tags: ["AEC-Q100", "automotive", "certification", "quality"]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✅ news.json created');

console.log('\n========================================');
console.log('✅ Xinzhou data files completely created!');
console.log('========================================');
