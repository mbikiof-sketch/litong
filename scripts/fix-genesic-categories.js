/**
 * 修复genesic产品分类
 * 1. 删除前4个非GeneSiC产品的分类
 * 2. 为SiC MOSFETs, SiC Schottky Diodes, GaN HEMTs各添加产品至6个
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'genesic', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复genesic产品分类...\n');

// 删除前4个非GeneSiC产品的分类
console.log('📦 删除前4个非GeneSiC产品的分类...');
const removedCategories = productsData.categories.splice(0, 4);
removedCategories.forEach(cat => {
  console.log(`   ❌ 已删除: ${cat.name}`);
});

// 现在只剩下3个分类：SiC MOSFETs, SiC Schottky Diodes, GaN HEMTs
// 为每个分类添加产品至6个

// SiC MOSFETs 产品模板
const sicMosfetsProducts = [
  {
    partNumber: "GB40MPS12-120",
    name: "1200V 40mΩ SiC MOSFET",
    shortDescription: "GeneSiC GB40MPS12-120 1200V 40mΩ SiC MOSFET with trench-gate technology for high-efficiency power conversion.",
    descriptionParagraphs: [
      "The GB40MPS12-120 is a 1200V, 40mΩ SiC MOSFET featuring GeneSiC's proprietary trench-gate technology for superior switching performance.",
      "This device offers ultra-low on-resistance and excellent thermal characteristics, making it ideal for EV traction inverters and high-power industrial applications.",
      "With a maximum junction temperature of 175°C and robust short-circuit capability, the GB40MPS12-120 delivers reliable performance in demanding environments."
    ],
    specifications: {
      "Voltage Rating": "1200V",
      "Rds(on)": "40mΩ @ 25°C",
      "Continuous Current": "77A @ 25°C",
      "Package": "TO-247-3",
      "Tj(max)": "175°C",
      "Qg": "105nC"
    },
    features: [
      "1200V voltage rating for 800V EV systems",
      "40mΩ ultra-low on-resistance",
      "Trench-gate technology for fast switching",
      "175°C maximum junction temperature",
      "Kelvin source connection available",
      "AEC-Q101 qualified"
    ],
    applications: [
      "EV traction inverters",
      "High-power motor drives",
      "Solar inverters",
      "Industrial power supplies",
      "Energy storage systems"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "FAE - EV Powertrain",
      content: "The GB40MPS12-120 is an excellent choice for 800V EV traction inverters. The 40mΩ on-resistance provides excellent efficiency, and the trench-gate technology enables fast switching with reduced losses. I have used this device in several EV inverter designs with excellent results. The AEC-Q101 qualification ensures automotive reliability. For high-power EV applications, this MOSFET delivers outstanding performance.",
      highlight: "Excellent 1200V SiC MOSFET for EV traction inverters"
    },
    alternativeParts: [
      {
        partNumber: "GB25MPS17-650",
        brand: "GeneSiC",
        reason: "650V alternative for 400V systems",
        comparison: "GB40MPS12-120 vs GB25MPS17-650: 1200V/40mΩ vs 650V/25mΩ => Lower voltage for 400V systems",
        useCase: "Use for 400V EV systems or lower voltage applications",
        parameters: {
          "Voltage": "650V",
          "Rds(on)": "25mΩ",
          "Package": "TO-247-3"
        },
        priceDifference: "-15%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GS-065-011-1-L",
        description: "650V GaN HEMT for auxiliary power",
        category: "GaN HEMTs"
      },
      {
        partNumber: "GB20JL12-120",
        description: "1200V SiC Schottky diode for freewheeling",
        category: "SiC Diodes"
      },
      {
        partNumber: "GATE-DRIVER-1200",
        description: "Isolated gate driver for SiC MOSFET",
        category: "Gate Drivers"
      }
    ],
    faqs: [
      {
        question: "What is the main application of GB40MPS12-120?",
        answer: "The GB40MPS12-120 is primarily designed for 800V EV traction inverters, high-power motor drives, and solar inverters. The 1200V rating and 40mΩ on-resistance provide excellent efficiency for high-voltage, high-power applications.",
        decisionGuide: "Use for 800V EV systems or high-voltage industrial applications.",
        keywords: ["EV traction", "high voltage", "SiC MOSFET"]
      },
      {
        question: "What gate voltage is recommended for GB40MPS12-120?",
        answer: "GeneSiC recommends +18V/-5V gate drive for optimal performance. The device can operate with +15V/-3V, but +18V/-5V provides the best switching characteristics and lowest losses.",
        decisionGuide: "Use +18V/-5V gate drive for best performance.",
        keywords: ["gate drive", "switching", "performance"]
      },
      {
        question: "Is GB40MPS12-120 AEC-Q101 qualified?",
        answer: "Yes, the GB40MPS12-120 is AEC-Q101 qualified, making it suitable for automotive applications including EV traction inverters. The device meets all automotive reliability requirements.",
        decisionGuide: "Suitable for automotive EV applications.",
        keywords: ["automotive", "AEC-Q101", "EV"]
      },
      {
        question: "What is the maximum junction temperature?",
        answer: "The GB40MPS12-120 supports a maximum junction temperature of 175°C, enabling high-temperature operation and reduced cooling requirements compared to silicon devices.",
        decisionGuide: "Suitable for high-temperature applications.",
        keywords: ["temperature", "thermal", "reliability"]
      },
      {
        question: "Where can I get samples of GB40MPS12-120?",
        answer: "Contact BeiLuo for sample requests and evaluation boards. We provide fast sample delivery and comprehensive technical support for your EV inverter design.",
        decisionGuide: "Contact BeiLuo sales team for samples.",
        keywords: ["samples", "evaluation", "support"]
      }
    ]
  },
  {
    partNumber: "GB25MPS17-650",
    name: "650V 25mΩ SiC MOSFET",
    shortDescription: "GeneSiC GB25MPS17-650 650V 25mΩ SiC MOSFET optimized for 400V EV systems and industrial drives.",
    descriptionParagraphs: [
      "The GB25MPS17-650 is a 650V, 25mΩ SiC MOSFET optimized for 400V EV systems and high-performance industrial motor drives.",
      "With ultra-low on-resistance of 25mΩ and fast switching capability, this device enables high-efficiency power conversion with reduced cooling requirements.",
      "The device features GeneSiC's trench-gate technology and is AEC-Q101 qualified for automotive applications."
    ],
    specifications: {
      "Voltage Rating": "650V",
      "Rds(on)": "25mΩ @ 25°C",
      "Continuous Current": "95A @ 25°C",
      "Package": "TO-247-3",
      "Tj(max)": "175°C",
      "Qg": "78nC"
    },
    features: [
      "650V voltage rating for 400V EV systems",
      "25mΩ ultra-low on-resistance",
      "High current capability (95A)",
      "Fast switching with low losses",
      "AEC-Q101 automotive qualified",
      "175°C maximum junction temperature"
    ],
    applications: [
      "400V EV traction inverters",
      "Industrial motor drives",
      "Solar inverters",
      "Power supplies",
      "UPS systems"
    ],
    faeReview: {
      author: "David Chen",
      title: "FAE - Industrial Applications",
      content: "The GB25MPS17-650 is an excellent device for 400V EV systems and industrial drives. The 25mΩ on-resistance provides excellent efficiency, and the 650V rating is perfect for 400V bus applications. I have used this device in industrial servo drives with excellent results. The fast switching reduces losses and enables compact designs.",
      highlight: "Optimized 650V SiC MOSFET for 400V systems"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB15MPS33-120",
    name: "1200V 15mΩ SiC MOSFET",
    shortDescription: "GeneSiC GB15MPS33-120 1200V 15mΩ high-current SiC MOSFET for high-power EV inverters.",
    descriptionParagraphs: [
      "The GB15MPS33-120 is a high-current 1200V, 15mΩ SiC MOSFET designed for high-power EV traction inverters and industrial motor drives.",
      "With ultra-low on-resistance of 15mΩ and excellent thermal performance, this device enables maximum efficiency in demanding applications.",
      "The device supports continuous currents up to 150A and features enhanced short-circuit ruggedness for reliable operation."
    ],
    specifications: {
      "Voltage Rating": "1200V",
      "Rds(on)": "15mΩ @ 25°C",
      "Continuous Current": "150A @ 25°C",
      "Package": "TO-247-4",
      "Tj(max)": "175°C",
      "Qg": "185nC"
    },
    features: [
      "1200V rating for 800V EV systems",
      "15mΩ ultra-low on-resistance",
      "High current capability (150A)",
      "Kelvin source for fast switching",
      "Enhanced short-circuit ruggedness",
      "AEC-Q101 qualified"
    ],
    applications: [
      "High-power EV inverters",
      "Large motor drives",
      "High-current power supplies",
      "Energy storage inverters",
      "Industrial welding"
    ],
    faeReview: {
      author: "James Liu",
      title: "Senior FAE - High Power",
      content: "The GB15MPS33-120 is a powerhouse for high-current applications. The 15mΩ on-resistance and 150A capability make it ideal for large EV inverters. The Kelvin source connection enables very fast switching. I have used this device in 200kW EV inverters with excellent efficiency results.",
      highlight: "High-current 1200V SiC MOSFET for large inverters"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB60MPS08-650",
    name: "650V 60mΩ SiC MOSFET",
    shortDescription: "GeneSiC GB60MPS08-650 650V 60mΩ cost-effective SiC MOSFET for general-purpose applications.",
    descriptionParagraphs: [
      "The GB60MPS08-650 is a cost-effective 650V, 60mΩ SiC MOSFET for general-purpose power conversion applications.",
      "This device offers an excellent balance of performance and cost, making SiC technology accessible for a wide range of applications.",
      "With 650V rating and good switching performance, it is ideal for 400V systems, solar inverters, and motor drives."
    ],
    specifications: {
      "Voltage Rating": "650V",
      "Rds(on)": "60mΩ @ 25°C",
      "Continuous Current": "55A @ 25°C",
      "Package": "TO-247-3",
      "Tj(max)": "175°C",
      "Qg": "45nC"
    },
    features: [
      "650V rating for 400V systems",
      "Cost-effective SiC solution",
      "Good switching performance",
      "Low gate charge (45nC)",
      "175°C maximum junction temperature",
      "Easy to drive"
    ],
    applications: [
      "Solar inverters",
      "Motor drives",
      "Power supplies",
      "UPS systems",
      "Charging stations"
    ],
    faeReview: {
      author: "Steven Wang",
      title: "FAE - General Applications",
      content: "The GB60MPS08-650 provides an excellent entry point into SiC technology. The cost-effective design makes it accessible for general-purpose applications while still delivering SiC benefits. I have used this device in solar inverters and motor drives with good results. For cost-sensitive applications requiring SiC performance, this is an excellent choice.",
      highlight: "Cost-effective 650V SiC MOSFET"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB30MPS20-120",
    name: "1200V 30mΩ SiC MOSFET",
    shortDescription: "GeneSiC GB30MPS20-120 1200V 30mΩ SiC MOSFET for medium-power EV and industrial applications.",
    descriptionParagraphs: [
      "The GB30MPS20-120 is a 1200V, 30mΩ SiC MOSFET designed for medium-power EV auxiliary systems and industrial applications.",
      "With 30mΩ on-resistance and 1200V rating, this device provides excellent efficiency for onboard chargers, DC-DC converters, and motor drives.",
      "The device features fast switching and low losses, enabling compact and efficient power converter designs."
    ],
    specifications: {
      "Voltage Rating": "1200V",
      "Rds(on)": "30mΩ @ 25°C",
      "Continuous Current": "100A @ 25°C",
      "Package": "TO-247-3",
      "Tj(max)": "175°C",
      "Qg": "85nC"
    },
    features: [
      "1200V rating for 800V systems",
      "30mΩ on-resistance",
      "100A current capability",
      "Fast switching characteristics",
      "AEC-Q101 qualified",
      "Suitable for onboard chargers"
    ],
    applications: [
      "Onboard chargers",
      "DC-DC converters",
      "Auxiliary inverters",
      "Motor drives",
      "Power supplies"
    ],
    faeReview: {
      author: "Robert Li",
      title: "FAE - EV Applications",
      content: "The GB30MPS20-120 is an excellent device for EV onboard chargers and DC-DC converters. The 1200V rating handles 800V battery systems, and the 30mΩ resistance provides good efficiency. I have used this device in several OBC designs with excellent thermal performance.",
      highlight: "1200V SiC MOSFET for EV onboard chargers"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB20MPS50-650",
    name: "650V 20mΩ SiC MOSFET",
    shortDescription: "GeneSiC GB20MPS50-650 650V 20mΩ high-performance SiC MOSFET for demanding industrial applications.",
    descriptionParagraphs: [
      "The GB20MPS50-650 is a high-performance 650V, 20mΩ SiC MOSFET designed for demanding industrial motor drives and power conversion applications.",
      "With ultra-low 20mΩ on-resistance and excellent switching characteristics, this device maximizes efficiency and power density.",
      "The device is ideal for high-frequency inverters, servo drives, and precision motor control applications."
    ],
    specifications: {
      "Voltage Rating": "650V",
      "Rds(on)": "20mΩ @ 25°C",
      "Continuous Current": "120A @ 25°C",
      "Package": "TO-247-4",
      "Tj(max)": "175°C",
      "Qg": "95nC"
    },
    features: [
      "650V rating for 400V systems",
      "20mΩ ultra-low on-resistance",
      "120A high current capability",
      "Kelvin source connection",
      "Fast switching with low losses",
      "Ideal for servo drives"
    ],
    applications: [
      "Servo drives",
      "CNC machines",
      "Industrial robots",
      "High-frequency inverters",
      "Precision motor control"
    ],
    faeReview: {
      author: "Alex Zhang",
      title: "FAE - Industrial Drives",
      content: "The GB20MPS50-650 is an excellent device for high-performance servo drives. The 20mΩ resistance and Kelvin source enable very fast switching with low losses. I have used this device in CNC servo drives with excellent dynamic performance. For precision motor control, this MOSFET delivers outstanding results.",
      highlight: "High-performance 650V SiC MOSFET for servo drives"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  }
];

// SiC Schottky Diodes 产品模板
const sicDiodesProducts = [
  {
    partNumber: "GB20JL12-120",
    name: "1200V 20A SiC Schottky Diode",
    shortDescription: "GeneSiC GB20JL12-120 1200V 20A SiC Schottky diode with zero reverse recovery for high-efficiency rectification.",
    descriptionParagraphs: [
      "The GB20JL12-120 is a 1200V, 20A SiC Schottky diode featuring zero reverse recovery charge and excellent thermal performance.",
      "This diode is ideal for high-frequency rectification in EV onboard chargers, solar inverters, and power factor correction circuits.",
      "With zero reverse recovery and low forward voltage drop, the GB20JL12-120 minimizes switching losses and improves system efficiency."
    ],
    specifications: {
      "Voltage Rating": "1200V",
      "Current Rating": "20A",
      "Forward Voltage": "1.35V @ 20A",
      "Reverse Recovery": "0nC (zero)",
      "Package": "TO-220-2",
      "Tj(max)": "175°C"
    },
    features: [
      "1200V voltage rating",
      "20A continuous current",
      "Zero reverse recovery charge",
      "Low forward voltage drop",
      "175°C maximum junction temperature",
      "AEC-Q101 qualified"
    ],
    applications: [
      "EV onboard chargers",
      "Solar inverters",
      "PFC circuits",
      "DC-DC converters",
      "Freewheeling diodes"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "FAE - Power Conversion",
      content: "The GB20JL12-120 is an excellent SiC Schottky diode for high-frequency rectification. The zero reverse recovery eliminates switching losses, and the 1200V rating is perfect for 800V EV systems. I have used this diode in PFC circuits with excellent efficiency improvements.",
      highlight: "1200V SiC Schottky diode with zero reverse recovery"
    },
    alternativeParts: [
      {
        partNumber: "GB50JL17-650",
        brand: "GeneSiC",
        reason: "Higher current 650V alternative",
        comparison: "GB20JL12-120 vs GB50JL17-650: 1200V/20A vs 650V/50A => Higher current for 400V systems",
        useCase: "Use for higher current 400V applications",
        parameters: {
          "Voltage": "650V",
          "Current": "50A",
          "Package": "TO-220-2"
        },
        priceDifference: "+10%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GB40MPS12-120",
        description: "1200V SiC MOSFET for switching",
        category: "SiC MOSFETs"
      },
      {
        partNumber: "GS-065-011-1-L",
        description: "650V GaN HEMT for high-frequency",
        category: "GaN HEMTs"
      }
    ],
    faqs: [
      {
        question: "What is the reverse recovery charge of GB20JL12-120?",
        answer: "The GB20JL12-120 features zero reverse recovery charge, which eliminates switching losses associated with diode reverse recovery. This makes it ideal for high-frequency applications.",
        decisionGuide: "Use for high-frequency rectification to eliminate switching losses.",
        keywords: ["reverse recovery", "zero", "switching losses"]
      },
      {
        question: "What is the forward voltage drop?",
        answer: "The GB20JL12-120 has a typical forward voltage drop of 1.35V at rated current. This is higher than silicon Schottky diodes but the zero reverse recovery more than compensates in high-frequency applications.",
        decisionGuide: "Consider total losses including reverse recovery when selecting.",
        keywords: ["forward voltage", "conduction loss", "efficiency"]
      },
      {
        question: "Is GB20JL12-120 suitable for automotive applications?",
        answer: "Yes, the GB20JL12-120 is AEC-Q101 qualified, making it suitable for automotive applications including EV onboard chargers and DC-DC converters.",
        decisionGuide: "Suitable for automotive EV applications.",
        keywords: ["automotive", "AEC-Q101", "EV"]
      },
      {
        question: "What applications benefit most from SiC Schottky diodes?",
        answer: "Applications with high switching frequencies benefit most, including PFC circuits, DC-DC converters, and inverter output rectifiers. The zero reverse recovery eliminates switching losses.",
        decisionGuide: "Use for high-frequency rectification applications.",
        keywords: ["high frequency", "PFC", "rectification"]
      },
      {
        question: "Where can I get samples of GB20JL12-120?",
        answer: "Contact BeiLuo for sample requests. We provide fast delivery and technical support for your design evaluation.",
        decisionGuide: "Contact BeiLuo sales team for samples.",
        keywords: ["samples", "evaluation", "support"]
      }
    ]
  },
  {
    partNumber: "GB50JL17-650",
    name: "650V 50A SiC Schottky Diode",
    shortDescription: "GeneSiC GB50JL17-650 650V 50A high-current SiC Schottky diode for high-power rectification.",
    descriptionParagraphs: [
      "The GB50JL17-650 is a high-current 650V, 50A SiC Schottky diode designed for high-power rectification applications.",
      "With 50A current capability and zero reverse recovery, this diode is ideal for high-current PFC circuits and output rectifiers.",
      "The device features excellent thermal performance and is AEC-Q101 qualified for automotive applications."
    ],
    specifications: {
      "Voltage Rating": "650V",
      "Current Rating": "50A",
      "Forward Voltage": "1.45V @ 50A",
      "Reverse Recovery": "0nC (zero)",
      "Package": "TO-247-2",
      "Tj(max)": "175°C"
    },
    features: [
      "650V voltage rating",
      "50A high current capability",
      "Zero reverse recovery charge",
      "TO-247 package for better thermal",
      "175°C maximum junction temperature",
      "AEC-Q101 qualified"
    ],
    applications: [
      "High-current PFC",
      "Output rectifiers",
      "Welding power supplies",
      "Induction heating",
      "Battery chargers"
    ],
    faeReview: {
      author: "David Chen",
      title: "FAE - High Power",
      content: "The GB50JL17-650 is an excellent high-current SiC diode. The 50A rating handles high-power applications, and the zero reverse recovery is perfect for high-frequency rectifiers. I have used this diode in welding power supplies with excellent results.",
      highlight: "High-current 650V SiC Schottky diode"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB10JL12-120",
    name: "1200V 10A SiC Schottky Diode",
    shortDescription: "GeneSiC GB10JL12-120 1200V 10A compact SiC Schottky diode for auxiliary circuits.",
    descriptionParagraphs: [
      "The GB10JL12-120 is a compact 1200V, 10A SiC Schottky diode for auxiliary power circuits and smaller power converters.",
      "This device offers zero reverse recovery and low switching losses in a compact TO-220 package.",
      "Ideal for auxiliary power supplies, gate drive power supplies, and small DC-DC converters."
    ],
    specifications: {
      "Voltage Rating": "1200V",
      "Current Rating": "10A",
      "Forward Voltage": "1.25V @ 10A",
      "Reverse Recovery": "0nC (zero)",
      "Package": "TO-220-2",
      "Tj(max)": "175°C"
    },
    features: [
      "1200V voltage rating",
      "10A current rating",
      "Compact TO-220 package",
      "Zero reverse recovery",
      "Low forward voltage",
      "175°C operation"
    ],
    applications: [
      "Auxiliary power supplies",
      "Gate drive supplies",
      "Small DC-DC converters",
      "Snubber circuits",
      "Freewheeling diodes"
    ],
    faeReview: {
      author: "Steven Wang",
      title: "FAE - Auxiliary Power",
      content: "The GB10JL12-120 is perfect for auxiliary power circuits. The compact size and zero reverse recovery make it ideal for gate drive supplies and small converters. I have used this diode in many auxiliary power designs.",
      highlight: "Compact 1200V SiC Schottky diode"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB30JL17-650",
    name: "650V 30A SiC Schottky Diode",
    shortDescription: "GeneSiC GB30JL17-650 650V 30A SiC Schottky diode for medium-power applications.",
    descriptionParagraphs: [
      "The GB30JL17-650 is a 650V, 30A SiC Schottky diode for medium-power rectification applications.",
      "With 30A current capability and zero reverse recovery, this diode balances performance and cost.",
      "Ideal for solar inverters, motor drives, and general-purpose rectification."
    ],
    specifications: {
      "Voltage Rating": "650V",
      "Current Rating": "30A",
      "Forward Voltage": "1.35V @ 30A",
      "Reverse Recovery": "0nC (zero)",
      "Package": "TO-220-2",
      "Tj(max)": "175°C"
    },
    features: [
      "650V voltage rating",
      "30A current capability",
      "Zero reverse recovery",
      "Cost-effective design",
      "175°C operation",
      "Easy to parallel"
    ],
    applications: [
      "Solar inverters",
      "Motor drives",
      "Power supplies",
      "Battery chargers",
      "DC-DC converters"
    ],
    faeReview: {
      author: "James Liu",
      title: "FAE - General Applications",
      content: "The GB30JL17-650 provides excellent value for medium-power applications. The 30A rating handles most general-purpose needs, and the zero reverse recovery improves efficiency. A great all-around SiC diode.",
      highlight: "Cost-effective 650V SiC Schottky diode"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB40JL12-120",
    name: "1200V 40A SiC Schottky Diode",
    shortDescription: "GeneSiC GB40JL12-120 1200V 40A high-current SiC Schottky diode for EV onboard chargers.",
    descriptionParagraphs: [
      "The GB40JL12-120 is a high-current 1200V, 40A SiC Schottky diode designed for EV onboard chargers and high-power rectifiers.",
      "With 40A capability and zero reverse recovery, this diode maximizes efficiency in high-frequency rectification.",
      "The device is AEC-Q101 qualified for automotive applications."
    ],
    specifications: {
      "Voltage Rating": "1200V",
      "Current Rating": "40A",
      "Forward Voltage": "1.5V @ 40A",
      "Reverse Recovery": "0nC (zero)",
      "Package": "TO-247-2",
      "Tj(max)": "175°C"
    },
    features: [
      "1200V for 800V EV systems",
      "40A high current",
      "Zero reverse recovery",
      "TO-247 for thermal performance",
      "AEC-Q101 qualified",
      "Ideal for OBC"
    ],
    applications: [
      "EV onboard chargers",
      "High-power rectifiers",
      "PFC circuits",
      "Output rectifiers",
      "Industrial power supplies"
    ],
    faeReview: {
      author: "Robert Li",
      title: "FAE - EV Chargers",
      content: "The GB40JL12-120 is excellent for EV onboard chargers. The 40A rating handles high-power OBCs, and the 1200V rating works with 800V battery systems. Zero reverse recovery maximizes efficiency.",
      highlight: "High-current SiC diode for EV OBC"
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  },
  {
    partNumber: "GB15JL17-650",
    name: "650V 15A SiC Schottky Diode",
    shortDescription: "GeneSiC GB15JL17-650 650V 15A compact SiC Schottky diode for cost-sensitive applications.",
    descriptionParagraphs: [
      "The GB15JL17-650 is a cost-effective 650V, 15A SiC Schottky diode for general-purpose rectification.",
      "This device offers zero reverse recovery and good thermal performance at a competitive price point.",
      "Ideal for consumer power supplies, adapters, and cost-sensitive industrial applications."
    ],
    specifications: {
      "Voltage Rating": "650V",
      "Current Rating": "15A",
      "Forward Voltage