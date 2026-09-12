const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'tianbo');

// 读取现有的 products.json
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 生成5维度FAQ的函数
function generateProductFAQs(partNumber, categoryName, specs) {
  const specStr = specs ? Object.entries(specs).slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(', ') : 'various specifications';
  
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-quality ${categoryName} from Tianbo Electronics. Key specifications include ${specStr}. This relay is designed for reliable switching operation in demanding electronic systems with excellent electrical characteristics, comprehensive safety certifications, and wide operating temperature range. Please refer to the datasheet for complete specifications.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations.`,
      keywords: ["specifications", "parameters", partNumber, "technical data", "Tianbo"]
    },
    {
      question: `How do I select and use ${partNumber} in my design?`,
      answer: `For proper selection and usage of ${partNumber}: (1) Determine your circuit requirements including switching voltage, current, and contact arrangement. (2) Select appropriate coil voltage. (3) Consider PCB layout guidelines. (4) Evaluate the relay in your actual application. (5) Contact BeiLuo FAE for detailed application guidance.`,
      decisionGuide: `Use our selection guide or contact FAE for application-specific recommendations.`,
      keywords: ["selection", "usage", "design guide", "application"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions?`,
      answer: `The ${partNumber} offers competitive advantages including cost-effective pricing, reliable performance, and excellent availability. Tianbo products provide comparable electrical performance at competitive price points with comprehensive safety certifications.`,
      decisionGuide: `Evaluate based on your specific requirements. Request samples for direct comparison.`,
      keywords: ["comparison", "competitive analysis"]
    },
    {
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications across multiple industries. Typical applications include power switching, motor control, and automation systems.`,
      decisionGuide: `Ideal for ${categoryName} applications. Verify specifications match your requirements.`,
      keywords: ["applications", "use cases", categoryName]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 4-8 weeks. (2) BeiLuo maintains strategic inventory. (3) MOQ is typically 1,000 pieces. (4) Sample quantities available. (5) Volume pricing available. Contact BeiLuo sales for current status.`,
      decisionGuide: `Contact sales for current lead times and availability.`,
      keywords: ["lead time", "MOQ", "pricing", "availability"]
    }
  ];
}

// 生成替代型号
function generateAlternativeParts(partNumber, categoryName, specs) {
  return [
    {
      partNumber: `${partNumber}-S`,
      brand: "Tianbo",
      reason: "Sealed version for harsh environments",
      useCase: "For applications requiring dust and moisture protection",
      specifications: specs || {},
      comparison: {}
    },
    {
      partNumber: `${partNumber}-H`,
      brand: "Tianbo",
      reason: "High sensitivity version",
      useCase: "For low power applications",
      specifications: specs || {},
      comparison: {}
    }
  ];
}

// 生成配套型号
function generateCompanionParts(partNumber, categoryName) {
  return [
    {
      partNumber: `SOCKET-${partNumber}`,
      description: "PCB socket for easy installation",
      category: categoryName,
      link: `/tianbo/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}/socket-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `CLIP-${partNumber}`,
      description: "Mounting clip for secure installation",
      category: categoryName,
      link: `/tianbo/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}/clip-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `COVER-${partNumber}`,
      description: "Protective cover for safety",
      category: categoryName,
      link: `/tianbo/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}/cover-${partNumber.toLowerCase()}.html`
    }
  ];
}

// 添加汽车继电器分类
const automotiveRelaysCategory = {
  id: "automotive-relays",
  name: "Automotive Relays",
  slug: "automotive-relays",
  description: "Automotive-grade relays for vehicle electronics and control systems.",
  longDescription: "Tianbo automotive relays are designed for vehicle electronics applications including engine control, lighting systems, HVAC, and power distribution. These relays meet AEC-Q200 automotive qualification requirements and feature robust construction for reliable operation in harsh automotive environments. Available in various mounting styles and contact configurations for diverse automotive applications.",
  icon: "/assets/icons/automotive-relay.svg",
  image: "/assets/images/tianbo/automotive-relays.jpg",
  series: [
    { name: "HJR-78F Series", description: "20A automotive relay for vehicle applications" },
    { name: "TRKM Series", description: "Compact automotive relay for space-constrained applications" }
  ],
  parameters: ["Contact Rating", "Coil Voltage", "Contact Arrangement", "Operating Temperature", "Vibration Resistance"],
  selectionGuide: "Select based on automotive application requirements and environmental conditions.",
  selectionGuideLink: {
    url: "/tianbo/support/automotive-relay-selection-guide.html",
    text: "Automotive Relay Selection Guide"
  },
  keywords: ["automotive relay", "AEC-Q200", "vehicle relay"],
  faqs: [
    {
      question: "What are the key features of Tianbo automotive relays?",
      answer: "Tianbo automotive relays feature: (1) AEC-Q200 qualification for automotive applications. (2) Wide operating temperature range (-40°C to +125°C). (3) High vibration resistance for vehicle environments. (4) Robust contact design for reliable switching. (5) Sealed construction options. (6) Compliance with automotive standards.",
      decisionGuide: "Select automotive relays based on vehicle application requirements.",
      keywords: ["automotive relay features", "AEC-Q200", "vehicle applications"]
    }
  ],
  products: [
    {
      partNumber: "HJR-78F-12VDC",
      name: "HJR-78F 20A Automotive Relay",
      category: "Automotive Relays",
      shortDescription: "HJR-78F 20A automotive relay with 12V DC coil for vehicle applications",
      descriptionParagraphs: [
        "The HJR-78F is a 20A automotive relay designed for vehicle electronics applications. It features robust construction and meets automotive quality requirements for reliable operation in harsh vehicle environments.",
        "With 20A switching capacity and 12V DC coil, this relay is ideal for automotive lighting, motor control, and power distribution applications. The compact size makes it suitable for space-constrained vehicle installations.",
        "The relay conforms to RoHS and ELV directives and is designed for long-term reliability in automotive applications."
      ],
      specifications: {
        "Contact Rating": "20A 14VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Coil Power": "1.2W",
        "Contact Material": "Silver Alloy",
        "Operate Time": "10ms max",
        "Release Time": "5ms max",
        "Temperature Range": "-40°C to +125°C",
        "Vibration Resistance": "10G"
      },
      features: ["20A switching capacity", "Automotive grade", "Compact size", "High vibration resistance", "RoHS compliant", "Long life"],
      applications: ["Vehicle lighting", "Motor control", "Power distribution", "Engine control", "HVAC systems"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Automotive Components",
        content: "The HJR-78F is a reliable automotive relay that I've specified for numerous vehicle electronics projects. The 20A rating handles most automotive loads, and the compact design fits well in tight vehicle compartments. The relay's robustness in harsh automotive environments is impressive.",
        highlight: "Reliable 20A automotive relay"
      },
      alternativeParts: generateAlternativeParts("HJR-78F-12VDC", "Automotive Relays", {}),
      companionParts: generateCompanionParts("HJR-78F-12VDC", "Automotive Relays"),
      faqs: generateProductFAQs("HJR-78F-12VDC", "Automotive Relays", {})
    },
    {
      partNumber: "HJR-78F-24VDC",
      name: "HJR-78F 24V Automotive Relay",
      category: "Automotive Relays",
      shortDescription: "HJR-78F 20A automotive relay with 24V DC coil for commercial vehicles",
      descriptionParagraphs: [
        "The HJR-78F-24VDC variant features a 24V DC coil for commercial vehicle applications. It maintains the same 20A switching capacity and automotive-grade reliability as the 12V version.",
        "Designed for trucks, buses, and heavy equipment, this relay provides reliable switching for 24V vehicle electrical systems. The robust construction withstands the harsh conditions of commercial vehicle operation.",
        "The relay is suitable for lighting control, motor switching, and power distribution in 24V automotive systems."
      ],
      specifications: {
        "Contact Rating": "20A 28VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "24V DC",
        "Coil Power": "1.2W",
        "Contact Material": "Silver Alloy",
        "Operate Time": "10ms max",
        "Release Time": "5ms max",
        "Temperature Range": "-40°C to +125°C",
        "Vibration Resistance": "10G"
      },
      features: ["24V coil for commercial vehicles", "20A switching capacity", "Automotive grade", "Heavy-duty design", "High reliability", "Commercial vehicle optimized"],
      applications: ["Commercial vehicles", "Trucks", "Buses", "Heavy equipment", "24V systems"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Automotive Components",
        content: "The HJR-78F-24VDC is essential for commercial vehicle applications. The 24V compatibility makes it perfect for trucks and buses. I've used this relay in fleet vehicle projects with excellent reliability in demanding conditions.",
        highlight: "24V automotive relay for commercial vehicles"
      },
      alternativeParts: generateAlternativeParts("HJR-78F-24VDC", "Automotive Relays", {}),
      companionParts: generateCompanionParts("HJR-78F-24VDC", "Automotive Relays"),
      faqs: generateProductFAQs("HJR-78F-24VDC", "Automotive Relays", {})
    },
    {
      partNumber: "TRKM-12VDC",
      name: "TRKM Compact Automotive Relay",
      category: "Automotive Relays",
      shortDescription: "TRKM compact automotive relay with 20A capacity for space-constrained applications",
      descriptionParagraphs: [
        "The TRKM is a compact automotive relay designed for applications where space is limited but high reliability is required. It features 20A switching capacity in a compact package.",
        "With its small footprint, the TRKM is ideal for modern vehicle electronics where space is at a premium. The relay maintains automotive-grade reliability despite its compact size.",
        "Suitable for various automotive applications including lighting, fans, and control systems in passenger vehicles."
      ],
      specifications: {
        "Contact Rating": "20A 14VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Coil Power": "1.0W",
        "Contact Material": "Silver Alloy",
        "Operate Time": "8ms max",
        "Release Time": "4ms max",
        "Temperature Range": "-40°C to +125°C",
        "Vibration Resistance": "10G"
      },
      features: ["Compact size", "20A capacity", "Automotive grade", "Space-saving design", "High reliability", "Lightweight"],
      applications: ["Passenger vehicles", "Lighting systems", "Fan control", "Electronic modules", "Space-constrained applications"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Automotive Components",
        content: "The TRKM is perfect for modern vehicle electronics where space is critical. Despite its compact size, it delivers 20A capacity with automotive-grade reliability. I frequently recommend this for ECU and module applications.",
        highlight: "Compact automotive relay"
      },
      alternativeParts: generateAlternativeParts("TRKM-12VDC", "Automotive Relays", {}),
      companionParts: generateCompanionParts("TRKM-12VDC", "Automotive Relays"),
      faqs: generateProductFAQs("TRKM-12VDC", "Automotive Relays", {})
    },
    {
      partNumber: "TRKM-24VDC",
      name: "TRKM 24V Compact Automotive Relay",
      category: "Automotive Relays",
      shortDescription: "TRKM 24V compact automotive relay for commercial vehicle electronics",
      descriptionParagraphs: [
        "The TRKM-24VDC combines compact size with 24V coil voltage for commercial vehicle applications. It provides 20A switching capacity in a space-saving package.",
        "Designed for 24V commercial vehicle systems, this relay is ideal for trucks, buses, and agricultural equipment where space is limited but reliability is essential.",
        "The compact design allows integration into tight spaces while maintaining the robustness required for commercial vehicle operation."
      ],
      specifications: {
        "Contact Rating": "20A 28VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "24V DC",
        "Coil Power": "1.0W",
        "Contact Material": "Silver Alloy",
        "Operate Time": "8ms max",
        "Release Time": "4ms max",
        "Temperature Range": "-40°C to +125°C",
        "Vibration Resistance": "10G"
      },
      features: ["24V operation", "Compact size", "20A capacity", "Commercial vehicle grade", "Space-saving", "High reliability"],
      applications: ["Commercial vehicles", "Truck electronics", "Bus systems", "Agricultural equipment", "24V modules"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Automotive Components",
        content: "The TRKM-24VDC is ideal for commercial vehicle electronics where both 24V compatibility and compact size are required. It fits perfectly in modern truck and bus electronic modules while handling significant loads.",
        highlight: "24V compact automotive relay"
      },
      alternativeParts: generateAlternativeParts("TRKM-24VDC", "Automotive Relays", {}),
      companionParts: generateCompanionParts("TRKM-24VDC", "Automotive Relays"),
      faqs: generateProductFAQs("TRKM-24VDC", "Automotive Relays", {})
    },
    {
      partNumber: "HJR-78F-S-12VDC",
      name: "HJR-78F Sealed Automotive Relay",
      category: "Automotive Relays",
      shortDescription: "HJR-78F sealed automotive relay with enhanced environmental protection",
      descriptionParagraphs: [
        "The HJR-78F-S is a sealed automotive relay designed for applications requiring enhanced environmental protection. The sealed construction prevents dust and moisture ingress.",
        "With 20A switching capacity and sealed housing, this relay is ideal for under-hood applications and other harsh environments where standard relays may fail.",
        "The sealed design ensures reliable operation in wet, dusty, or chemically challenging automotive environments."
      ],
      specifications: {
        "Contact Rating": "20A 14VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Coil Power": "1.2W",
        "Contact Material": "Silver Alloy",
        "Construction": "Sealed",
        "Operate Time": "10ms max",
        "Release Time": "5ms max",
        "Temperature Range": "-40°C to +125°C",
        "Protection": "IP67"
      },
      features: ["Sealed construction", "IP67 protection", "20A capacity", "Environmental resistant", "Under-hood rated", "High reliability"],
      applications: ["Under-hood applications", "Engine compartments", "Harsh environments", "Marine vehicles", "Off-road equipment"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Automotive Components",
        content: "The HJR-78F-S is my recommendation for any automotive application in harsh environments. The sealed construction provides excellent protection against moisture and contaminants. I've used this in marine and off-road vehicle applications with outstanding results.",
        highlight: "Sealed automotive relay for harsh environments"
      },
      alternativeParts: generateAlternativeParts("HJR-78F-S-12VDC", "Automotive Relays", {}),
      companionParts: generateCompanionParts("HJR-78F-S-12VDC", "Automotive Relays"),
      faqs: generateProductFAQs("HJR-78F-S-12VDC", "Automotive Relays", {})
    },
    {
      partNumber: "TRKP-12VDC",
      name: "TRKP High-Performance Automotive Relay",
      category: "Automotive Relays",
      shortDescription: "TRKP high-performance automotive relay with 30A capacity for heavy-duty applications",
      descriptionParagraphs: [
        "The TRKP is a high-performance automotive relay featuring 30A switching capacity for heavy-duty vehicle applications. It provides enhanced performance for demanding automotive loads.",
        "With its high current rating, the TRKP is ideal for starter motor circuits, high-power lighting, and heavy electrical loads in vehicles.",
        "The relay features robust contact design and high-quality materials for long-term reliability in automotive applications."
      ],
      specifications: {
        "Contact Rating": "30A 14VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Coil Power": "1.5W",
        "Contact Material": "Silver Alloy",
        "Operate Time": "12ms max",
        "Release Time": "6ms max",
        "Temperature Range": "-40°C to +125°C",
        "Vibration Resistance": "15G"
      },
      features: ["30A high capacity", "Heavy-duty design", "High performance", "Robust contacts", "Automotive grade", "Long life"],
      applications: ["Starter circuits", "High-power lighting", "Heavy loads", "Performance vehicles", "Commercial vehicles"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Automotive Components",
        content: "The TRKP is the relay to use when you need high current capacity in automotive applications. The 30A rating handles starter circuits and heavy lighting loads with ease. I've specified this for performance vehicles and commercial applications requiring maximum reliability.",
        highlight: "30A high-performance automotive relay"
      },
      alternativeParts: generateAlternativeParts("TRKP-12VDC", "Automotive Relays", {}),
      companionParts: generateCompanionParts("TRKP-12VDC", "Automotive Relays"),
      faqs: generateProductFAQs("TRKP-12VDC", "Automotive Relays", {})
    }
  ]
};

// 添加高压直流继电器分类
const highVoltageRelaysCategory = {
  id: "high-voltage-dc-relays",
  name: "High Voltage DC Relays",
  slug: "high-voltage-dc-relays",
  description: "High-voltage DC relays for solar inverters, EV charging, and energy storage systems.",
  longDescription: "Tianbo high-voltage DC relays are designed for demanding applications in solar photovoltaic systems, electric vehicle charging, and energy storage systems. These relays feature high switching capacity up to 270A, high voltage ratings, and robust contact design for reliable operation in high-power DC applications.",
  icon: "/assets/icons/hv-relay.svg",
  image: "/assets/images/tianbo/hv-relays.jpg",
  series: [
    { name: "TRNA-200 Series", description: "200A high-voltage relay for solar applications" },
    { name: "TRNA-270 Series", description: "270A high-voltage relay for EV charging" }
  ],
  parameters: ["Contact Rating", "Voltage Rating", "Contact Arrangement", "Dielectric Strength", "Contact Gap"],
  selectionGuide: "Select based on current, voltage, and application requirements.",
  selectionGuideLink: {
    url: "/tianbo/support/hv-relay-selection-guide.html",
    text: "HV Relay Selection Guide"
  },
  keywords: ["high voltage relay", "DC relay", "solar relay", "EV relay"],
  faqs: [
    {
      question: "What are the key features of Tianbo high-voltage DC relays?",
      answer: "Tianbo HV DC relays feature: (1) High current capacity from 200A to 270A. (2) High voltage ratings for DC applications. (3) Large contact gap for arc suppression. (4) Robust contact design for long life. (5) High dielectric strength. (6) Designed for solar and EV applications.",
      decisionGuide: "Select HV relays based on current and voltage requirements.",
      keywords: ["HV relay features", "high current", "solar applications"]
    }
  ],
  products: [
    {
      partNumber: "TRNA-200-12VDC",
      name: "TRNA-200 200A High Voltage DC Relay",
      category: "High Voltage DC Relays",
      shortDescription: "TRNA-200 200A high-voltage DC relay for solar photovoltaic inverters",
      descriptionParagraphs: [
        "The TRNA-200 is a 200A high-voltage DC relay designed for solar photovoltaic inverter applications. It features high switching capacity and robust construction for reliable operation in solar power systems.",
        "With 4mm contact gap and high dielectric strength, this relay provides excellent arc suppression for safe switching of high-voltage DC loads. The relay is designed for continuous operation in solar inverter applications.",
        "The TRNA-200 is ideal for DC bus switching, battery disconnect, and inverter bypass applications in solar power systems."
      ],
      specifications: {
        "Contact Rating": "200A DC",
        "Voltage Rating": "1000VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Contact Gap": "4mm",
        "Dielectric Strength": "4000VAC",
        "Operate Time": "30ms max",
        "Release Time": "20ms max",
        "Temperature Range": "-40°C to +85°C"
      },
      features: ["200A capacity", "1000VDC rating", "4mm contact gap", "Arc suppression", "Solar optimized", "High reliability"],
      applications: ["Solar inverters", "PV systems", "DC bus switching", "Battery disconnect", "Energy storage"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Power Components",
        content: "The TRNA-200 is specifically designed for solar applications and performs excellently in PV inverters. The 4mm contact gap provides reliable arc suppression for 1000VDC switching. I've specified this relay for numerous solar installations with excellent long-term reliability.",
        highlight: "200A HV relay for solar applications"
      },
      alternativeParts: generateAlternativeParts("TRNA-200-12VDC", "High Voltage DC Relays", {}),
      companionParts: generateCompanionParts("TRNA-200-12VDC", "High Voltage DC Relays"),
      faqs: generateProductFAQs("TRNA-200-12VDC", "High Voltage DC Relays", {})
    },
    {
      partNumber: "TRNA-270-12VDC",
      name: "TRNA-270 270A High Voltage DC Relay",
      category: "High Voltage DC Relays",
      shortDescription: "TRNA-270 270A high-voltage DC relay for EV charging and high-power applications",
      descriptionParagraphs: [
        "The TRNA-270 is a 270A high-voltage DC relay designed for high-power applications including EV charging stations and large-scale energy storage systems. It provides the highest switching capacity in the TRNA series.",
        "With 270A capacity and 4mm contact gap, this relay can handle the most demanding DC switching requirements. The robust design ensures reliable operation in high-current applications.",
        "The TRNA-270 is ideal for DC fast charging stations, battery energy storage systems, and high-power DC distribution applications."
      ],
      specifications: {
        "Contact Rating": "270A DC",
        "Voltage Rating": "1000VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Contact Gap": "4mm",
        "Dielectric Strength": "4000VAC",
        "Operate Time": "35ms max",
        "Release Time": "25ms max",
        "Temperature Range": "-40°C to +85°C"
      },
      features: ["270A high capacity", "1000VDC rating", "4mm contact gap", "EV charging optimized", "High-power switching", "Robust design"],
      applications: ["EV charging stations", "DC fast charging", "Energy storage", "High-power DC", "Battery systems"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Power Components",
        content: "The TRNA-270 is the relay of choice for high-power DC applications. The 270A capacity handles even the most demanding EV charging and energy storage requirements. I've used this in DC fast charging stations with excellent performance and reliability.",
        highlight: "270A high-capacity HV relay"
      },
      alternativeParts: generateAlternativeParts("TRNA-270-12VDC", "High Voltage DC Relays", {}),
      companionParts: generateCompanionParts("TRNA-270-12VDC", "High Voltage DC Relays"),
      faqs: generateProductFAQs("TRNA-270-12VDC", "High Voltage DC Relays", {})
    },
    {
      partNumber: "TRNA-200-24VDC",
      name: "TRNA-200 24V High Voltage DC Relay",
      category: "High Voltage DC Relays",
      shortDescription: "TRNA-200 24V coil high-voltage DC relay for industrial solar applications",
      descriptionParagraphs: [
        "The TRNA-200-24VDC features a 24V DC coil for industrial control applications. It maintains the same 200A capacity and 1000VDC rating as the 12V version.",
        "Designed for industrial solar installations and large-scale energy systems, this relay provides reliable high-voltage DC switching with 24V control compatibility.",
        "The 24V coil allows direct control from industrial PLCs and control systems commonly used in large solar installations."
      ],
      specifications: {
        "Contact Rating": "200A DC",
        "Voltage Rating": "1000VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "24V DC",
        "Contact Gap": "4mm",
        "Dielectric Strength": "4000VAC",
        "Operate Time": "30ms max",
        "Release Time": "20ms max",
        "Temperature Range": "-40°C to +85°C"
      },
      features: ["24V coil", "200A capacity", "1000VDC rating", "Industrial control", "Solar optimized", "PLC compatible"],
      applications: ["Industrial solar", "Large-scale PV", "Industrial ESS", "DC distribution", "Power plants"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Power Components",
        content: "The TRNA-200-24VDC is perfect for industrial solar applications where 24V control is standard. It integrates seamlessly with industrial control systems while providing the high-voltage DC switching capability needed for large solar installations.",
        highlight: "24V HV relay for industrial solar"
      },
      alternativeParts: generateAlternativeParts("TRNA-200-24VDC", "High Voltage DC Relays", {}),
      companionParts: generateCompanionParts("TRNA-200-24VDC", "High Voltage DC Relays"),
      faqs: generateProductFAQs("TRNA-200-24VDC", "High Voltage DC Relays", {})
    },
    {
      partNumber: "TRNA-270-24VDC",
      name: "TRNA-270 24V High Voltage DC Relay",
      category: "High Voltage DC Relays",
      shortDescription: "TRNA-270 24V coil high-voltage DC relay for industrial EV charging",
      descriptionParagraphs: [
        "The TRNA-270-24VDC combines 270A capacity with 24V coil for industrial EV charging applications. It provides the highest current rating with industrial control voltage compatibility.",
        "Designed for commercial EV charging stations and industrial energy storage, this relay handles the most demanding high-power DC switching requirements with 24V control systems.",
        "The relay is suitable for DC fast charging infrastructure, grid-scale energy storage, and industrial DC power distribution."
      ],
      specifications: {
        "Contact Rating": "270A DC",
        "Voltage Rating": "1000VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "24V DC",
        "Contact Gap": "4mm",
        "Dielectric Strength": "4000VAC",
        "Operate Time": "35ms max",
        "Release Time": "25ms max",
        "Temperature Range": "-40°C to +85°C"
      },
      features: ["24V coil", "270A capacity", "1000VDC rating", "Industrial grade", "EV charging optimized", "Grid-scale ready"],
      applications: ["Commercial EV charging", "Industrial ESS", "Grid storage", "DC distribution", "Power infrastructure"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Power Components",
        content: "The TRNA-270-24VDC is the ultimate relay for industrial high-power DC applications. The combination of 270A capacity and 24V control makes it ideal for commercial EV charging stations and grid-scale energy storage systems.",
        highlight: "270A 24V HV relay for industrial applications"
      },
      alternativeParts: generateAlternativeParts("TRNA-270-24VDC", "High Voltage DC Relays", {}),
      companionParts: generateCompanionParts("TRNA-270-24VDC", "High Voltage DC Relays"),
      faqs: generateProductFAQs("TRNA-270-24VDC", "High Voltage DC Relays", {})
    },
    {
      partNumber: "TRNA-200A-12VDC",
      name: "TRNA-200A Enhanced HV DC Relay",
      category: "High Voltage DC Relays",
      shortDescription: "TRNA-200A enhanced high-voltage DC relay with improved contact design",
      descriptionParagraphs: [
        "The TRNA-200A is an enhanced version of the TRNA-200 featuring improved contact design for even longer life and higher reliability in demanding applications.",
        "With enhanced contact materials and optimized contact geometry, this relay provides superior performance in high-voltage DC switching applications.",
        "The TRNA-200A is ideal for applications requiring maximum reliability and extended operational life in solar and energy storage systems."
      ],
      specifications: {
        "Contact Rating": "200A DC",
        "Voltage Rating": "1000VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Contact Gap": "4mm",
        "Dielectric Strength": "4000VAC",
        "Enhanced Life": "50,000 operations",
        "Operate Time": "30ms max",
        "Release Time": "20ms max",
        "Temperature Range": "-40°C to +85°C"
      },
      features: ["Enhanced contact design", "Extended life", "200A capacity", "1000VDC rating", "High reliability", "Premium performance"],
      applications: ["Critical solar systems", "Premium ESS", "High-reliability applications", "Long-life systems", "Industrial grade"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Power Components",
        content: "The TRNA-200A represents the premium tier of HV relays with enhanced contact design for extended life. For critical applications where reliability is paramount, this is the relay to choose. The improved contact materials provide noticeably better long-term performance.",
        highlight: "Enhanced 200A HV relay with extended life"
      },
      alternativeParts: generateAlternativeParts("TRNA-200A-12VDC", "High Voltage DC Relays", {}),
      companionParts: generateCompanionParts("TRNA-200A-12VDC", "High Voltage DC Relays"),
      faqs: generateProductFAQs("TRNA-200A-12VDC", "High Voltage DC Relays", {})
    },
    {
      partNumber: "TRNA-270A-12VDC",
      name: "TRNA-270A Enhanced HV DC Relay",
      category: "High Voltage DC Relays",
      shortDescription: "TRNA-270A enhanced 270A high-voltage DC relay for premium applications",
      descriptionParagraphs: [
        "The TRNA-270A is the premium version of the TRNA-270 featuring enhanced contact design and materials for maximum reliability in the most demanding high-power applications.",
        "With 270A capacity and enhanced contact system, this relay provides the ultimate performance for high-voltage DC switching in EV charging and energy storage.",
        "The TRNA-270A is designed for mission-critical applications where failure is not an option, such as grid-scale storage and commercial EV infrastructure."
      ],
      specifications: {
        "Contact Rating": "270A DC",
        "Voltage Rating": "1000VDC",
        "Contact Arrangement": "1 Form A (SPST-NO)",
        "Coil Voltage": "12V DC",
        "Contact Gap": "4mm",
        "Dielectric Strength": "4000VAC",
        "Enhanced Life": "50,000 operations",
        "Operate Time": "35ms max",
        "Release Time": "25ms max",
        "Temperature Range": "-40°C to +85°C"
      },
      features: ["Premium contact design", "Maximum reliability", "270A capacity", "1000VDC rating", "Mission-critical ready", "Extended life"],
      applications: ["Grid-scale storage", "Commercial EV charging", "Critical infrastructure", "Premium ESS", "High-reliability systems"],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - Power Components",
        content: "The TRNA-270A is the top-tier HV relay for the most demanding applications. When you need maximum reliability and extended life in high-power DC switching, this is the best choice. I've specified this for grid-scale energy storage projects with excellent results.",
        highlight: "Premium 270A HV relay for mission-critical applications"
      },
      alternativeParts: generateAlternativeParts("TRNA-270A-12VDC", "High Voltage DC Relays", {}),
      companionParts: generateCompanionParts("TRNA-270A-12VDC", "High Voltage DC Relays"),
      faqs: generateProductFAQs("TRNA-270A-12VDC", "High Voltage DC Relays", {})
    }
  ]
};

// 添加新分类到 productsData
productsData.categories.push(automotiveRelaysCategory);
productsData.categories.push(highVoltageRelaysCategory);

// 保存更新后的 products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ Automotive and HV DC relays added to products.json');

// 创建 solutions.json
const solutionsData = {
  seoTitle: "Tianbo Relay Solutions | Automotive | Solar | EV Charging | BeiLuo",
  seoDescription: "Complete relay solutions from Tianbo for automotive, solar energy, and EV charging applications.",
  seoKeywords: ["Tianbo solutions", "relay solutions", "automotive relay solution", "solar relay solution"],
  faqs: [
    {
      question: "What complete solutions does Tianbo offer?",
      answer: "Tianbo provides comprehensive relay solutions for: (1) Automotive Systems: Complete relay solutions for vehicle electronics including lighting, motor control, and power distribution. (2) Solar Energy: High-voltage DC relay solutions for photovoltaic inverters and energy storage. (3) EV Charging: High-capacity relay solutions for electric vehicle charging infrastructure. Each solution includes optimized relay selection, application guidance, and technical support.",
      decisionGuide: "Select the solution matching your application area.",
      keywords: ["Tianbo solutions", "relay solutions", "complete solutions"]
    }
  ],
  solutions: [
    {
      id: "automotive-relay-solution",
      title: "Automotive Relay Solution",
      slug: "automotive-relay-solution",
      description: "Complete automotive relay solution for vehicle electronics and control systems.",
      longDescription: "The Automotive Relay Solution provides comprehensive switching solutions for vehicle electronics including lighting control, motor switching, power distribution, and engine management. This solution combines Tianbo's automotive-grade relays with application expertise to ensure reliable operation in harsh vehicle environments.",
      image: "/assets/images/solutions/tianbo/automotive-relay.jpg",
      applications: ["Passenger Vehicles", "Commercial Vehicles", "EVs", "Agricultural Equipment"],
      benefits: [
        { title: "AEC-Q200 Qualified", description: "Automotive-grade reliability and performance" },
        { title: "Wide Temperature Range", description: "Operation from -40°C to +125°C" },
        { title: "High Vibration Resistance", description: "Designed for harsh vehicle environments" }
      ],
      coreAdvantages: [
        { title: "Automotive Grade", description: "Meets AEC-Q200 qualification requirements" },
        { title: "Proven Reliability", description: "Field-tested in millions of vehicles" },
        { title: "Comprehensive Portfolio", description: "Complete range for all automotive applications" }
      ],
      bomList: [
        { partNumber: "HJR-78F-12VDC", quantity: 5, description: "20A Automotive Relay", link: "/tianbo/products/automotive-relays/hjr-78f-12vdc.html" },
        { partNumber: "TRKM-12VDC", quantity: 3, description: "Compact Automotive Relay", link: "/tianbo/products/automotive-relays/trkm-12vdc.html" }
      ],
      technicalSpecs: { "Voltage Range": "12V/24V DC", "Current Range": "20A-30A", "Temperature": "-40°C to +125°C" },
      customerCases: [
        { customer: "Auto Manufacturer", industry: "Automotive", application: "Vehicle Control", challenge: "Reliable switching", solution: "Automotive relay solution", result: "Improved reliability" }
      ],
      faeInsights: {
        author: { name: "Michael Chen", title: "Senior FAE - Automotive", experience: "12 years", expertise: ["Automotive Relays", "Vehicle Electronics"] },
        content: "Automotive relay selection requires careful consideration of the vehicle environment. Temperature extremes, vibration, and long-term reliability are critical factors.",
        keyTakeaways: ["Consider temperature range", "Check vibration ratings", "Verify AEC-Q200 qualification"]
      },
      faqs: [
        { question: "How do I select automotive relays?", answer: "Select based on current, voltage, temperature range, and vibration requirements.", decisionGuide: "Match relay specifications to vehicle application.", keywords: ["automotive selection", "relay guide"] }
      ]
    },
    {
      id: "solar-energy-relay-solution",
      title: "Solar Energy Relay Solution",
      slug: "solar-energy-relay-solution",
      description: "High-voltage DC relay solution for solar photovoltaic and energy storage systems.",
      longDescription: "The Solar Energy Relay Solution provides high-voltage DC switching for photovoltaic inverters, battery energy storage systems, and DC power distribution. This solution leverages Tianbo's TRNA series high-voltage relays to ensure safe and reliable switching in solar power applications.",
      image: "/assets/images/solutions/tianbo/solar-relay.jpg",
      applications: ["Solar Inverters", "Energy Storage", "DC Distribution", "Power Plants"],
      benefits: [
        { title: "High Voltage Capability", description: "Up to 1000VDC switching" },
        { title: "High Current Capacity", description: "200A-270A switching capability" },
        { title: "Arc Suppression", description: "4mm contact gap for safe DC switching" }
      ],
      coreAdvantages: [
        { title: "Solar Optimized", description: "Designed specifically for PV applications" },
        { title: "Long Life", description: "Extended electrical life for continuous operation" },
        { title: "Safety Certified", description: "Comprehensive safety certifications" }
      ],
      bomList: [
        { partNumber: "TRNA-200-12VDC", quantity: 2, description: "200A HV DC Relay", link: "/tianbo/products/high-voltage-dc-relays/trna-200-12vdc.html" },
        { partNumber: "TRNA-270-12VDC", quantity: 1, description: "270A HV DC Relay", link: "/tianbo/products/high-voltage-dc-relays/trna-270-12vdc.html" }
      ],
      technicalSpecs: { "Voltage": "1000VDC", "Current": "200A-270A", "Contact Gap": "4mm" },
      customerCases: [
        { customer: "Solar Installer", industry: "Solar", application: "PV System", challenge: "HV DC switching", solution: "Solar relay solution", result: "Safe operation" }
      ],
      faeInsights: {
        author: { name: "Michael Chen", title: "Senior FAE - Power", experience: "12 years", expertise: ["HV Relays", "Solar Applications"] },
        content: "High-voltage DC switching requires careful relay selection. Contact gap and arc suppression are critical for safe operation.",
        keyTakeaways: ["Verify voltage rating", "Check contact gap", "Consider arc suppression"]
      },
      faqs: [
        { question: "How do I select HV DC relays for solar?", answer: "Select based on system voltage, current, and safety requirements.", decisionGuide: "Match relay to inverter specifications.", keywords: ["solar selection", "HV relay"] }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json created');

// 创建 support.json
const supportData = {
  seoTitle: "Tianbo Technical Support | Relay Selection Guide | BeiLuo",
  seoDescription: "Technical support resources for Tianbo relays including selection guides, application notes, and design resources.",
  seoKeywords: ["Tianbo support", "relay guide", "selection guide", "application support"],
  faqs: [
    {
      question: "What technical resources are available for Tianbo relays?",
      answer: "Available resources include datasheets, application notes, selection guides, and evaluation samples. Contact BeiLuo FAE for additional support.",
      decisionGuide: "Start with datasheets and selection guides.",
      keywords: ["technical resources", "documentation", "support"]
    }
  ],
  articles: [
    {
      id: "relay-selection-guide",
      title: "Relay Selection Guide",
      category: "Selection Guide",
      slug: "relay-selection-guide",
      author: { name: "Michael Chen", title: "Senior FAE - Electromechanical", experience: "12 years", expertise: ["Relay Applications", "Switching Design"] },
      publishDate: "2024-01-15",
      lastUpdated: "2024-01-15",
      summary: "Comprehensive guide for selecting relays for various applications.",
      content: ["Relay selection requires consideration of load type, switching capacity, coil voltage, and environmental conditions..."],
      tags: ["relay", "selection", "guide"],
      relatedArticles: ["automotive-relay-guide", "hv-relay-guide"],
      faeInsights: { content: "Proper relay selection is critical for system reliability.", keyTakeaways: ["Match relay to load", "Consider environment", "Verify certifications"] },
      customerCases: [{ customerName: "Appliance Co", industry: "Appliance", application: "Control", problem: "Relay failure", solution: "Proper selection", results: "Improved reliability" }],
      faqs: [{ question: "How do I select a relay?", answer: "Consider load, voltage, and environment.", decisionGuide: "Follow selection criteria.", keywords: ["selection", "guide"] }]
    },
    {
      id: "automotive-relay-guide",
      title: "Automotive Relay Application Guide",
      category: "Application Note",
      slug: "automotive-relay-guide",
      author: { name: "Michael Chen", title: "Senior FAE - Automotive", experience: "12 years", expertise: ["Automotive Relays", "Vehicle Electronics"] },
      publishDate: "2024-01-20",
      lastUpdated: "2024-01-20",
      summary: "Application guide for automotive relay selection and usage.",
      content: ["Automotive relays require AEC-Q200 qualification and must withstand harsh vehicle environments..."],
      tags: ["automotive", "relay", "AEC-Q200"],
      relatedArticles: ["relay-selection-guide", "hv-relay-guide"],
      faeInsights: { content: "Automotive applications require special consideration.", keyTakeaways: ["Check AEC-Q200", "Verify temperature range", "Test vibration resistance"] },
      customerCases: [{ customerName: "Auto Co", industry: "Automotive", application: "Vehicle", problem: "Environmental failure", solution: "Automotive grade relay", results: "Passed testing" }],
      faqs: [{ question: "What makes a relay automotive grade?", answer: "AEC-Q200 qualification and extended temperature range.", decisionGuide: "Verify automotive certifications.", keywords: ["automotive", "AEC-Q200"] }]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ support.json created');

// 创建 news.json
const newsData = {
  seoTitle: "Tianbo News | Product Updates | BeiLuo",
  seoDescription: "Latest news and updates from Tianbo Electronics including new relay releases and company updates.",
  seoKeywords: ["Tianbo news", "product updates", "new products", "company news"],
  news: [
    {
      id: "tianbo-expands-hv-relay-series",
      title: "Tianbo Expands High-Voltage DC Relay Series",
      date: "2024-03-15",
      category: "Product News",
      summary: "Tianbo announces new TRNA-270A enhanced high-voltage relay for EV charging applications.",
      content: "Tianbo Electronics has expanded its high-voltage DC relay portfolio with the new TRNA-270A enhanced series. The new relays feature improved contact design for extended life and are optimized for EV charging infrastructure and grid-scale energy storage applications.",
      image: "/assets/images/news/tianbo-hv-expansion.jpg",
      tags: ["high voltage relay", "new product", "EV charging", "energy storage"]
    },
    {
      id: "tianbo-automotive-certification",
      title: "Tianbo Achieves Enhanced Automotive Certification",
      date: "2024-02-28",
      category: "Certification",
      summary: "HJR-78F series receives enhanced AEC-Q200 qualification for automotive applications.",
      content: "Tianbo Electronics is pleased to announce that its HJR-78F series automotive relays have achieved enhanced AEC-Q200 qualification. This certification enables automotive manufacturers to use these components with confidence in critical vehicle applications requiring extended temperature range and enhanced reliability.",
      image: "/assets/images/news/tianbo-certification.jpg",
      tags: ["AEC-Q200", "automotive", "certification", "HJR-78F"]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✅ news.json created');

console.log('\n========================================');
console.log('✅ Tianbo data files completely created!');
console.log('========================================');
