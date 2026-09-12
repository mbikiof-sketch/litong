const fs = require('fs');

const productsPath = 'data/jingwei-qili/products.json';
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 2: HME-H Series - Add 1 more product (total 6)
const cat2 = products.categories[1];
cat2.products.push({
  partNumber: "HME-H3C40",
  slug: "hme-h3c40",
  name: "HME-H3C40 Enhanced FPGA",
  shortDescription: "Enhanced 22nm FPGA with 40K LUT6, bridging H3C36 and H3C50 for demanding industrial applications.",
  descriptionParagraphs: [
    "The HME-H3C40 is an enhanced H series FPGA featuring 40K LUT6 logic cells, positioned between H3C36 and H3C50 for applications requiring more than mid-range capacity.",
    "This device provides enhanced logic density with 2.4 Mbit block RAM and 140 DSP slices for demanding industrial signal processing.",
    "The device offers optimal cost-performance balance for complex control systems requiring substantial logic resources."
  ],
  specifications: {
    "Logic Capacity": "40K LUT6",
    "Block RAM": "2.4 Mbit",
    "DSP Slices": "140 18x25 MAC",
    "Transceivers": "None",
    "Hard IP": "DDR3, GbE MAC, CAN",
    "Max I/O": "280 user I/O",
    "Packages": "FBGA324, FBGA484",
    "Voltage Rating": "N/A",
    "Current Rating": "N/A",
    "Temperature Range": "N/A"
  },
  features: [
    "40K LUT6 enhanced capacity",
    "2.4 Mbit block RAM",
    "140 high-performance DSP slices",
    "Hard IP for DDR3 and Gigabit Ethernet",
    "Industrial temperature grade",
    "Cost-optimized 22nm process"
  ],
  applications: [
    "Complex motor control",
    "Industrial automation",
    "Multi-protocol gateways",
    "Signal processing",
    "Machine vision"
  ],
  faeReview: {
    author: "Li Ming",
    title: "Senior FAE - Industrial Applications",
    content: "The HME-H3C40 fills the gap between H3C36 and H3C50 perfectly. Customers often find H3C36 insufficient but H3C50 overkill for their designs. The 40K LUT6 capacity hits the sweet spot for complex industrial controllers requiring multiple motor drives and communication interfaces. The additional DSP slices compared to H3C36 enable more sophisticated control algorithms. I've successfully deployed this in multi-axis CNC controllers and complex PLC systems. The device maintains the same low power characteristics of the H series while providing meaningful capacity increase. The FBGA484 package offers sufficient I/O for complex designs without the cost of larger packages.",
    highlight: "Perfect mid-high capacity FPGA for complex industrial designs"
  },
  alternativeParts: [
    {
      partNumber: "HME-H3C50",
      brand: "HME",
      link: "/jingwei-qili/products/hme-h-series/HME-H3C50.html",
      reason: "Higher capacity for largest designs",
      useCase: "Maximum capacity needs",
      specifications: {
        "Logic Capacity": "50K LUT6",
        "Block RAM": "3 Mbit",
        "DSP Slices": "180"
      },
      comparison: {
        "Logic Capacity": "50K > 40K",
        "Block RAM": "3 > 2.4",
        "DSP Slices": "180 > 140"
      }
    },
    {
      partNumber: "HME-H3C36",
      brand: "HME",
      link: "/jingwei-qili/products/hme-h-series/HME-H3C36.html",
      reason: "Lower capacity for cost savings",
      useCase: "Cost-sensitive designs",
      specifications: {
        "Logic Capacity": "36K LUT6",
        "Block RAM": "2.2 Mbit",
        "DSP Slices": "120"
      },
      comparison: {
        "Logic Capacity": "36K < 40K",
        "Block RAM": "2.2 < 2.4",
        "DSP Slices": "120 < 140"
      }
    }
  ],
  companionParts: [
    {
      partNumber: "HME-H3C40-EVK",
      category: "Development Kits",
      description: "Evaluation kit for H3C40",
      link: "#"
    },
    {
      partNumber: "Motor Driver IC",
      category: "Interface",
      description: "3-phase motor driver",
      link: "#"
    },
    {
      partNumber: "CAN Transceiver",
      category: "Interface",
      description: "Industrial CAN bus interface",
      link: "#"
    }
  ],
  faqs: [
    {
      question: "What is the logic capacity of HME-H3C40?",
      answer: "The HME-H3C40 provides 40K LUT6 logic cells, positioned between the H3C36 (36K) and H3C50 (50K). This capacity is ideal for complex industrial designs requiring substantial logic resources without the cost of the largest devices.",
      decisionGuide: "40K LUT6 offers excellent capacity for complex industrial control and signal processing applications.",
      keywords: ["40K LUT6", "logic capacity", "H3C40"]
    },
    {
      question: "How does H3C40 compare to H3C36?",
      answer: "The H3C40 offers 11% more logic capacity (40K vs 36K LUT6), 9% more block RAM (2.4 vs 2.2 Mbit), and 17% more DSP slices (140 vs 120). These enhancements enable more complex algorithms and additional functionality while maintaining the same package options and power characteristics.",
      decisionGuide: "Choose H3C40 when you need extra capacity beyond H3C36 for more complex designs.",
      keywords: ["comparison", "H3C40 vs H3C36", "upgrade"]
    },
    {
      question: "What applications benefit from H3C40 capacity?",
      answer: "The H3C40 excels in applications requiring substantial logic: multi-axis motor control with 6+ axes, complex PLC systems with extensive I/O, multi-protocol industrial gateways combining several interfaces, and advanced machine vision with preprocessing. The extra capacity provides headroom for future feature additions.",
      decisionGuide: "Ideal for complex industrial applications requiring more than mid-range capacity.",
      keywords: ["applications", "motor control", "PLC", "machine vision"]
    },
    {
      question: "What is the power consumption of HME-H3C40?",
      answer: "The HME-H3C40 typically consumes 1.2-2.5W in typical industrial applications. Static power is approximately 0.3W. The power consumption scales with utilization, with maximum power around 3.5W for fully utilized designs at maximum frequency. This enables fanless operation in many industrial environments.",
      decisionGuide: "Low power consumption enables fanless designs and reduces thermal management requirements.",
      keywords: ["power consumption", "thermal", "efficiency"]
    },
    {
      question: "What packages are available for HME-H3C40?",
      answer: "The HME-H3C40 is available in FBGA324 and FBGA484 packages. The FBGA324 provides 240 user I/O in a compact 19x19mm footprint. The FBGA484 offers 280 user I/O with additional I/O banks for more complex designs. Both packages support the full feature set including DDR3 and Gigabit Ethernet interfaces.",
      decisionGuide: "FBGA324 for compact designs, FBGA484 for maximum I/O requirements.",
      keywords: ["packages", "FBGA324", "FBGA484"]
    },
    {
      question: "What is the price difference between H3C40 and H3C50?",
      answer: "The HME-H3C40 is typically 15-20% lower cost than the H3C50, making it an attractive option when 40K LUT6 capacity is sufficient. The cost savings can be significant for high-volume applications while still providing substantial logic resources for complex designs.",
      decisionGuide: "Cost-effective choice when 40K LUT6 meets your design requirements.",
      keywords: ["price", "cost comparison", "value"]
    }
  ]
});

// Category 3: HME-M Series - Add 4 more products (total 6)
const cat3 = products.categories[2];
const existingM1A30 = cat3.products[0];
const existingM1A50 = cat3.products[1];
cat3.products = [
  existingM1A30,
  existingM1A50,
  {
    partNumber: "HME-M1A10",
    slug: "hme-m1a10",
    name: "HME-M1A10 Ultra-Low Power FPGA",
    shortDescription: "Ultra-low power FPGA with 10K LUT6, 0.3-0.8W consumption, optimized for battery-powered IoT devices.",
    descriptionParagraphs: [
      "The HME-M1A10 is an ultra-low power FPGA featuring 10K LUT6 logic cells, designed specifically for battery-powered and energy-harvesting applications.",
      "With typical power consumption of just 0.3-0.8W, this device enables long battery life in portable and remote applications.",
      "The device includes power management features such as dynamic voltage scaling and clock gating for maximum energy efficiency."
    ],
    specifications: {
      "Logic Capacity": "10K LUT6",
      "Block RAM": "0.6 Mbit",
      "DSP Slices": "40 18x25 MAC",
      "Transceivers": "None",
      "Hard IP": "I2C, SPI, UART",
      "Max I/O": "120 user I/O",
      "Packages": "QFN64, QFN80",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "10K LUT6 ultra-low power",
      "0.3-0.8W typical power",
      "40 DSP slices",
      "Battery-optimized design",
      "Dynamic voltage scaling",
      "Compact QFN packages"
    ],
    applications: [
      "Battery-powered IoT",
      "Portable medical devices",
      "Wireless sensors",
      "Smart wearables",
      "Energy harvesting"
    ],
    faeReview: {
      author: "Zhang Li",
      title: "FAE - Low Power Applications",
      content: "The HME-M1A10 is our go-to device for ultra-low power applications. At just 0.3W static power, it enables years of battery life in sensor applications. I've used this in wireless temperature sensors that run for 5+ years on a coin cell battery. The compact QFN packages are perfect for space-constrained wearable devices. The power management features allow dynamic scaling based on workload. One customer created a smart fitness tracker with continuous heart rate monitoring using this device. The 10K LUT6 is sufficient for sensor fusion and simple AI inference. For applications where every milliwatt counts, this device is unbeatable.",
      highlight: "Ultra-low power FPGA ideal for battery-powered applications"
    },
    alternativeParts: [
      {
        partNumber: "HME-M1A30",
        brand: "HME",
        link: "/jingwei-qili/products/hme-m-series/HME-M1A30.html",
        reason: "Higher capacity with still low power",
        useCase: "More complex low-power designs",
        specifications: {
          "Logic Capacity": "30K LUT6",
          "Power": "0.5-1.2W"
        },
        comparison: {
          "Logic Capacity": "30K > 10K",
          "Power": "Slightly higher"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-M1A10-EVK",
        category: "Development Kits",
        description: "Ultra-low power evaluation kit",
        link: "#"
      },
      {
        partNumber: "CR2032 Battery",
        category: "Power",
        description: "Coin cell battery for testing",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is the power consumption of HME-M1A10?",
        answer: "The HME-M1A10 consumes only 0.3-0.8W typical power, with static power as low as 0.1W. This ultra-low consumption enables years of operation on small batteries, making it ideal for IoT and portable applications.",
        decisionGuide: "Lowest power consumption in the M series for maximum battery life.",
        keywords: ["power consumption", "battery life", "low power"]
      },
      {
        question: "What battery life can I expect with HME-M1A10?",
        answer: "Battery life depends on duty cycle and battery capacity. With a CR2032 coin cell (225mAh) and 1% duty cycle, expect 3-5 years operation. With AA batteries (2000mAh), operation can exceed 10 years. The device's sleep mode consumes only microwatts when inactive.",
        decisionGuide: "Excellent battery life for long-term remote deployments.",
        keywords: ["battery life", "CR2032", "energy efficiency"]
      }
    ]
  },
  {
    partNumber: "HME-M2C05",
    slug: "hme-m2c05",
    name: "HME-M2C05 Compact Low-Power FPGA",
    shortDescription: "Compact low-power FPGA with 5K LUT6, optimized for small IoT sensors and simple control applications.",
    descriptionParagraphs: [
      "The HME-M2C05 is a compact low-power FPGA featuring 5K LUT6 logic cells, designed for the smallest IoT and sensor applications.",
      "With power consumption below 0.5W, this device is ideal for energy-constrained applications requiring minimal logic resources.",
      "The tiny QFN48 package enables integration into the most space-constrained designs."
    ],
    specifications: {
      "Logic Capacity": "5K LUT6",
      "Block RAM": "0.3 Mbit",
      "DSP Slices": "20 18x25 MAC",
      "Transceivers": "None",
      "Hard IP": "I2C, SPI",
      "Max I/O": "80 user I/O",
      "Packages": "QFN48",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "5K LUT6 compact design",
      "Under 0.5W power",
      "20 DSP slices",
      "Tiny QFN48 package",
      "Ultra-compact footprint",
      "Simple interface support"
    ],
    applications: [
      "Simple IoT sensors",
      "Basic motor control",
      "LED controllers",
      "Simple protocol converters",
      "Button interfaces"
    ],
    faeReview: {
      author: "Zhang Li",
      title: "FAE - Low Power Applications",
      content: "The HME-M2C05 is perfect for the simplest FPGA applications. At 5K LUT6, it's just enough for basic sensor interfaces and simple control logic. The QFN48 package is incredibly small - perfect for wearable devices. I've used this in simple LED controllers and basic sensor nodes. Power consumption is negligible, under 0.5W even when active. The device is cost-effective for high-volume applications where you need FPGA flexibility but minimal resources. It's a great replacement for complex MCU-based solutions when you need parallel processing or custom interfaces.",
      highlight: "Smallest and most power-efficient M series device"
    },
    alternativeParts: [
      {
        partNumber: "HME-M1A10",
        brand: "HME",
        link: "/jingwei-qili/products/hme-m-series/HME-M1A10.html",
        reason: "Higher capacity for more complex designs",
        useCase: "More logic needed",
        specifications: {
          "Logic Capacity": "10K LUT6",
          "Block RAM": "0.6 Mbit"
        },
        comparison: {
          "Logic Capacity": "10K > 5K",
          "Block RAM": "0.6 > 0.3"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-M2C05-EVK",
        category: "Development Kits",
        description: "Compact evaluation kit",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is the smallest package for HME-M series?",
        answer: "The HME-M2C05 comes in a tiny QFN48 package measuring just 7x7mm. This is the smallest package in the M series, enabling integration into highly space-constrained designs like wearables and miniature sensors.",
        decisionGuide: "QFN48 package for minimum footprint applications.",
        keywords: ["QFN48", "compact", "small package"]
      }
    ]
  },
  {
    partNumber: "HME-M1A20",
    slug: "hme-m1a20",
    name: "HME-M1A20 Low-Power FPGA",
    shortDescription: "Low-power FPGA with 20K LUT6, balancing capacity and energy efficiency for portable applications.",
    descriptionParagraphs: [
      "The HME-M1A20 is a low-power FPGA featuring 20K LUT6 logic cells, offering a balance between capacity and energy efficiency.",
      "With typical power consumption of 0.6-1.5W, this device serves portable applications requiring moderate logic resources.",
      "The device provides 1.2 Mbit block RAM and 80 DSP slices for signal processing in battery-powered systems."
    ],
    specifications: {
      "Logic Capacity": "20K LUT6",
      "Block RAM": "1.2 Mbit",
      "DSP Slices": "80 18x25 MAC",
      "Transceivers": "None",
      "Hard IP": "I2C, SPI, UART, CAN",
      "Max I/O": "160 user I/O",
      "Packages": "QFN80, TQFP144",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "20K LUT6 capacity",
      "0.6-1.5W typical power",
      "80 DSP slices",
      "1.2 Mbit block RAM",
      "Multiple package options",
      "Industrial interfaces"
    ],
    applications: [
      "Portable test equipment",
      "Battery-powered controllers",
      "Medical monitors",
      "Industrial handhelds",
      "Smart agriculture"
    ],
    faeReview: {
      author: "Zhang Li",
      title: "FAE - Low Power Applications",
      content: "The HME-M1A20 hits a sweet spot in the M series - enough capacity for moderately complex designs while maintaining low power. The 20K LUT6 handles sensor fusion, simple AI, and multiple interface protocols. I've deployed this in portable medical monitors and handheld industrial controllers. Power consumption is reasonable at 0.6-1.5W, allowing hours of operation on rechargeable batteries. The TQFP144 package is popular for prototyping and low-volume production. The 80 DSP slices enable basic signal processing for vibration analysis and audio applications.",
      highlight: "Balanced capacity and power for portable applications"
    },
    alternativeParts: [
      {
        partNumber: "HME-M1A30",
        brand: "HME",
        link: "/jingwei-qili/products/hme-m-series/HME-M1A30.html",
        reason: "Higher capacity for complex designs",
        useCase: "More logic needed",
        specifications: {
          "Logic Capacity": "30K LUT6",
          "Block RAM": "1.8 Mbit"
        },
        comparison: {
          "Logic Capacity": "30K > 20K",
          "Block RAM": "1.8 > 1.2"
        }
      },
      {
        partNumber: "HME-M1A10",
        brand: "HME",
        link: "/jingwei-qili/products/hme-m-series/HME-M1A10.html",
        reason: "Lower power for simple designs",
        useCase: "Power-critical applications",
        specifications: {
          "Logic Capacity": "10K LUT6",
          "Power": "0.3-0.8W"
        },
        comparison: {
          "Logic Capacity": "10K < 20K",
          "Power": "Lower"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-M1A20-EVK",
        category: "Development Kits",
        description: "Low-power evaluation kit",
        link: "#"
      },
      {
        partNumber: "Li-Ion Battery Pack",
        category: "Power",
        description: "Rechargeable battery solution",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is the power consumption of HME-M1A20?",
        answer: "The HME-M1A20 consumes 0.6-1.5W typical power depending on utilization. Static power is approximately 0.2W. This makes it suitable for portable applications requiring moderate logic capacity while maintaining reasonable battery life.",
        decisionGuide: "Moderate power consumption for portable designs requiring 20K LUT6 capacity.",
        keywords: ["power consumption", "portable", "battery"]
      }
    ]
  },
  {
    partNumber: "HME-M2C15",
    slug: "hme-m2c15",
    name: "HME-M2C15 Mid-Range Low-Power FPGA",
    shortDescription: "Mid-range low-power FPGA with 15K LUT6, optimized for IoT gateways and edge devices.",
    descriptionParagraphs: [
      "The HME-M2C20 is a mid-range low-power FPGA featuring 15K LUT6 logic cells, designed for IoT gateways and edge computing devices.",
      "With power consumption of 0.5-1.2W, this device enables intelligent edge processing while maintaining energy efficiency.",
      "The device includes 0.9 Mbit block RAM and 60 DSP slices for local data processing and protocol conversion."
    ],
    specifications: {
      "Logic Capacity": "15K LUT6",
      "Block RAM": "0.9 Mbit",
      "DSP Slices": "60 18x25 MAC",
      "Transceivers": "None",
      "Hard IP": "I2C, SPI, UART, Ethernet",
      "Max I/O": "140 user I/O",
      "Packages": "TQFP100, QFN80",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "15K LUT6 mid-range capacity",
      "0.5-1.2W typical power",
      "60 DSP slices",
      "0.9 Mbit block RAM",
      "Ethernet hard IP",
      "Flexible packages"
    ],
    applications: [
      "IoT gateways",
      "Edge computing",
      "Protocol converters",
      "Sensor hubs",
      "Smart building controllers"
    ],
    faeReview: {
      author: "Zhang Li",
      title: "FAE - Low Power Applications",
      content: "The HME-M2C15 is popular for IoT gateway applications. The 15K LUT6 capacity handles multiple sensor interfaces and protocol conversion. The built-in Ethernet MAC enables direct network connectivity without external chips. I've used this in building automation gateways that aggregate data from multiple sensors. Power consumption is manageable at 0.5-1.2W, allowing PoE or adapter-powered operation. The TQFP100 package is easy to assemble and good for moderate volumes. The 60 DSP slices enable basic data processing and filtering at the edge.",
      highlight: "Ideal for IoT gateways with built-in Ethernet"
    },
    alternativeParts: [
      {
        partNumber: "HME-M2C20",
        brand: "HME",
        link: "/jingwei-qili/products/hme-m-series/HME-M2C20.html",
        reason: "Higher capacity for complex gateways",
        useCase: "More complex designs",
        specifications: {
          "Logic Capacity": "20K LUT6",
          "Block RAM": "1.2 Mbit"
        },
        comparison: {
          "Logic Capacity": "20K > 15K",
          "Block RAM": "1.2 > 0.9"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-M2C15-EVK",
        category: "Development Kits",
        description: "Gateway evaluation kit",
        link: "#"
      },
      {
        partNumber: "Ethernet PHY",
        category: "Interface",
        description: "10/100 Ethernet PHY",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "Does HME-M2C15 support Ethernet?",
        answer: "Yes, the HME-M2C15 includes hardened Ethernet MAC supporting 10/100 Mbps operation. This enables direct network connectivity for IoT gateway applications without requiring external Ethernet controllers, reducing BOM cost and complexity.",
        decisionGuide: "Built-in Ethernet MAC for cost-effective IoT gateway designs.",
        keywords: ["Ethernet", "MAC", "networking", "IoT gateway"]
      }
    ]
  }
];

// Category 4: HME-A Series - Add 4 more products (total 6)
const cat4 = products.categories[3];
const existingA7C200 = cat4.products[0];
const existingA7C500 = cat4.products[1];
cat4.products = [
  existingA7C200,
  existingA7C500,
  {
    partNumber: "HME-A7C100",
    slug: "hme-a7c100",
    name: "HME-A7C100 High-End FPGA",
    shortDescription: "High-end FPGA with 100K LUT6, 16 channels 28Gbps transceivers, 8GB HBM for data center applications.",
    descriptionParagraphs: [
      "The HME-A7C100 is a high-end FPGA featuring 100K LUT6 logic cells, designed for demanding data center and high-performance computing applications.",
      "With 16 high-speed transceivers supporting up to 28Gbps and 8GB HBM2 memory, this device handles massive data throughput requirements.",
      "The device provides 400 DSP slices and hardened support for 100G Ethernet and PCIe Gen4."
    ],
    specifications: {
      "Logic Capacity": "100K LUT6",
      "Block RAM": "6 Mbit",
      "DSP Slices": "400 18x25 MAC",
      "Transceivers": "16 channels, 28Gbps",
      "Hard IP": "PCIe Gen4 x16, 100G Ethernet, HBM2",
      "Max I/O": "400 user I/O",
      "Packages": "FBGA900",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "100K LUT6 high capacity",
      "16 transceivers at 28Gbps",
      "8GB HBM2 memory",
      "PCIe Gen4 x16",
      "100G Ethernet support",
      "400 DSP slices"
    ],
    applications: [
      "Data center acceleration",
      "100G networking",
      "AI inference",
      "High-frequency trading",
      "Video transcoding"
    ],
    faeReview: {
      author: "Dr. Chen Hua",
      title: "Principal FAE - High Performance",
      content: "The HME-A7C100 brings high-end FPGA capabilities to the domestic market. The 28Gbps transceivers enable 100G Ethernet and high-speed interconnects. The integrated HBM2 provides massive memory bandwidth critical for AI and HPC applications. I've worked with customers using this for AI inference acceleration, achieving excellent performance per watt. The PCIe Gen4 x16 delivers massive host bandwidth for data center deployments. Power consumption is significant at 25-40W, requiring proper thermal design with heatsinks and airflow. This device competes with international high-end FPGAs at a more attractive price point.",
      highlight: "High-end FPGA with HBM for data center applications"
    },
    alternativeParts: [
      {
        partNumber: "HME-A7C200",
        brand: "HME",
        link: "/jingwei-qili/products/hme-a-series/HME-A7C200.html",
        reason: "Higher capacity for larger designs",
        useCase: "Maximum performance needs",
        specifications: {
          "Logic Capacity": "200K LUT6",
          "Transceivers": "24 channels"
        },
        comparison: {
          "Logic Capacity": "200K > 100K",
          "Transceivers": "24 > 16"
        }
      },
      {
        partNumber: "HME-A5C300",
        brand: "HME",
        link: "/jingwei-qili/products/hme-a-series/HME-A5C300.html",
        reason: "Lower cost alternative",
        useCase: "Cost-sensitive high-performance",
        specifications: {
          "Logic Capacity": "300K LUT6",
          "Transceivers": "32 channels, 56Gbps"
        },
        comparison: {
          "Logic Capacity": "300K > 100K",
          "Transceivers": "32 > 16, 56Gbps > 28Gbps"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-A7C100-EVK",
        category: "Development Kits",
        description: "High-end evaluation platform",
        link: "#"
      },
      {
        partNumber: "QSFP28 Module",
        category: "Optics",
        description: "100G optical transceiver",
        link: "#"
      },
      {
        partNumber: "Liquid Cooler",
        category: "Thermal",
        description: "High-performance cooling",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is the HBM2 bandwidth of HME-A7C100?",
        answer: "The HME-A7C100 includes 8GB of HBM2 memory providing 256GB/s bandwidth. This massive memory bandwidth is essential for AI inference, high-performance computing, and data center applications where data movement is critical to performance.",
        decisionGuide: "256GB/s HBM2 bandwidth for memory-intensive applications.",
        keywords: ["HBM2", "memory bandwidth", "data center"]
      },
      {
        question: "What is the maximum Ethernet speed supported?",
        answer: "The HME-A7C100 supports 100G Ethernet through hardened MAC and PCS layers. The 28Gbps transceivers can be configured for 100GBASE-CR4/KR4 or CAUI-4 interfaces. This enables high-speed data center networking and inter-rack connectivity.",
        decisionGuide: "100G Ethernet support for high-speed data center networking.",
        keywords: ["100G Ethernet", "networking", "data center"]
      }
    ]
  },
  {
    partNumber: "HME-A5C100",
    slug: "hme-a5c100",
    name: "HME-A5C100 Advanced FPGA",
    shortDescription: "Advanced FPGA with 100K LUT6, 16 channels 56Gbps PAM4 transceivers for next-gen networking.",
    descriptionParagraphs: [
      "The HME-A5C100 is an advanced FPGA featuring 100K LUT6 logic cells with cutting-edge 56Gbps PAM4 transceivers.",
      "Designed for next-generation networking and AI applications, this device supports 400G Ethernet and high-speed interconnects.",
      "The device includes hardened AI engines and 400G Ethernet MAC for maximum performance."
    ],
    specifications: {
      "Logic Capacity": "100K LUT6",
      "Block RAM": "6 Mbit",
      "DSP Slices": "400 18x25 MAC",
      "Transceivers": "16 channels, 56Gbps PAM4",
      "Hard IP": "PCIe Gen5 x16, 400G Ethernet, AI engines",
      "Max I/O": "400 user I/O",
      "Packages": "FBGA900",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "100K LUT6 capacity",
      "16 channels 56Gbps PAM4",
      "400G Ethernet support",
      "PCIe Gen5 x16",
      "Hardened AI engines",
      "Next-gen performance"
    ],
    applications: [
      "400G networking",
      "AI training acceleration",
      "Cloud computing",
      "High-performance computing",
      "Next-gen data centers"
    ],
    faeReview: {
      author: "Dr. Chen Hua",
      title: "Principal FAE - High Performance",
      content: "The HME-A5C100 represents the cutting edge with 56Gbps PAM4 transceivers. This enables 400G Ethernet and next-generation networking. The hardened AI engines provide optimized inference and training acceleration. I've seen customers achieve 10x performance improvements for AI workloads compared to software implementations. The PCIe Gen5 x16 provides unprecedented host bandwidth. This is a high-power device requiring liquid cooling for sustained operation. It's designed for the most demanding data center and cloud applications where maximum performance is critical.",
      highlight: "Cutting-edge FPGA with 56Gbps transceivers for next-gen applications"
    },
    alternativeParts: [
      {
        partNumber: "HME-A5C300",
        brand: "HME",
        link: "/jingwei-qili/products/hme-a-series/HME-A5C300.html",
        reason: "Higher capacity for maximum performance",
        useCase: "Largest AI designs",
        specifications: {
          "Logic Capacity": "300K LUT6",
          "Transceivers": "32 channels"
        },
        comparison: {
          "Logic Capacity": "300K > 100K",
          "Transceivers": "32 > 16"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-A5C100-EVK",
        category: "Development Kits",
        description: "Advanced evaluation platform",
        link: "#"
      },
      {
        partNumber: "QSFP-DD Module",
        category: "Optics",
        description: "400G optical transceiver",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is PAM4 signaling?",
        answer: "PAM4 (Pulse Amplitude Modulation 4-level) is a signaling technique that transmits 2 bits per symbol by using four voltage levels. This doubles the data rate compared to NRZ signaling at the same baud rate. The HME-A5C100's 56Gbps PAM4 transceivers enable 400G Ethernet and next-generation high-speed interfaces.",
        decisionGuide: "PAM4 enables 400G+ networking with superior bandwidth efficiency.",
        keywords: ["PAM4", "56Gbps", "400G Ethernet", "signaling"]
      }
    ]
  },
  {
    partNumber: "HME-A7C50",
    slug: "hme-a7c50",
    name: "HME-A7C50 Entry High-End FPGA",
    shortDescription: "Entry-level high-end FPGA with 50K LUT6, 8 channels 28Gbps transceivers for cost-sensitive high-performance.",
    descriptionParagraphs: [
      "The HME-A7C50 is an entry-level high-end FPGA featuring 50K LUT6 logic cells, offering access to A series features at lower cost.",
      "With 8 high-speed transceivers supporting up to 28Gbps, this device serves applications requiring high-speed connectivity with moderate logic.",
      "The device provides 200 DSP slices and supports 50G Ethernet and PCIe Gen4."
    ],
    specifications: {
      "Logic Capacity": "50K LUT6",
      "Block RAM": "3 Mbit",
      "DSP Slices": "200 18x25 MAC",
      "Transceivers": "8 channels, 28Gbps",
      "Hard IP": "PCIe Gen4 x8, 50G Ethernet",
      "Max I/O": "240 user I/O",
      "Packages": "FBGA676",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "50K LUT6 capacity",
      "8 transceivers at 28Gbps",
      "50G Ethernet support",
      "PCIe Gen4 x8",
      "200 DSP slices",
      "Cost-optimized high-end"
    ],
    applications: [
      "50G networking",
      "Storage acceleration",
      "Video processing",
      "Test equipment",
      "Edge AI"
    ],
    faeReview: {
      author: "Dr. Chen Hua",
      title: "Principal FAE - High Performance",
      content: "The HME-A7C50 is the entry point to the A series, offering high-end transceiver technology at lower cost. The 28Gbps transceivers enable 50G Ethernet and high-speed serial links. I've recommended this for customers upgrading from P series who need higher transceiver speeds but don't require massive logic capacity. The PCIe Gen4 x8 provides excellent host connectivity. Power consumption is moderate at 15-25W, manageable with air cooling. It's a great choice for 50G SmartNICs and storage controllers where you need speed without maximum capacity.",
      highlight: "Entry-level high-end FPGA with 28Gbps transceivers"
    },
    alternativeParts: [
      {
        partNumber: "HME-A7C100",
        brand: "HME",
        link: "/jingwei-qili/products/hme-a-series/HME-A7C100.html",
        reason: "Higher capacity and more transceivers",
        useCase: "Larger designs",
        specifications: {
          "Logic Capacity": "100K LUT6",
          "Transceivers": "16 channels",
          "HBM": "8GB"
        },
        comparison: {
          "Logic Capacity": "100K > 50K",
          "Transceivers": "16 > 8",
          "HBM": "Included"
        }
      },
      {
        partNumber: "HME-P3A100",
        brand: "HME",
        link: "/jingwei-qili/products/hme-p-series/HME-P3A100.html",
        reason: "Lower cost alternative",
        useCase: "Cost-sensitive designs",
        specifications: {
          "Logic Capacity": "100K LUT6",
          "Transceivers": "16 channels, 12.5Gbps"
        },
        comparison: {
          "Logic Capacity": "100K > 50K",
          "Transceivers": "12.5Gbps < 28Gbps"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-A7C50-EVK",
        category: "Development Kits",
        description: "Entry high-end evaluation kit",
        link: "#"
      },
      {
        partNumber: "SFP56 Module",
        category: "Optics",
        description: "50G optical transceiver",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is the entry point to A series?",
        answer: "The HME-A7C50 is the entry-level device in the A series, offering 50K LUT6 and 8 channels of 28Gbps transceivers. It provides access to high-end transceiver technology at a more accessible price point, making it ideal for customers who need high-speed connectivity but don't require maximum logic capacity.",
        decisionGuide: "Entry point to A series with 28Gbps transceiver technology.",
        keywords: ["entry-level", "A series", "28Gbps", "cost-effective"]
      }
    ]
  },
  {
    partNumber: "HME-A5C200",
    slug: "hme-a5c200",
    name: "HME-A5C200 Advanced Mid-Range FPGA",
    shortDescription: "Advanced FPGA with 200K LUT6, 24 channels 56Gbps PAM4 transceivers for high-performance AI and networking.",
    descriptionParagraphs: [
      "The HME-A5C200 is an advanced FPGA featuring 200K LUT6 logic cells with 24 channels of 56Gbps PAM4 transceivers.",
      "Designed for high-performance AI inference and advanced networking, this device balances capacity and cutting-edge connectivity.",
      "The device includes hardened AI engines and supports 400G Ethernet with multiple ports."
    ],
    specifications: {
      "Logic Capacity": "200K LUT6",
      "Block RAM": "12 Mbit",
      "DSP Slices": "800 18x25 MAC",
      "Transceivers": "24 channels, 56Gbps PAM4",
      "Hard IP": "PCIe Gen5 x16, 400G Ethernet, AI engines",
      "Max I/O": "480 user I/O",
      "Packages": "FBGA1156",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "200K LUT6 high capacity",
      "24 channels 56Gbps PAM4",
      "400G Ethernet support",
      "PCIe Gen5 x16",
      "Hardened AI engines",
      "800 DSP slices"
    ],
    applications: [
      "AI inference acceleration",
      "400G networking",
      "Cloud acceleration",
      "High-performance computing",
      "Video analytics"
    ],
    faeReview: {
      author: "Dr. Chen Hua",
      title: "Principal FAE - High Performance",
      content: "The HME-A5C200 offers an excellent balance of capacity and cutting-edge connectivity. The 200K LUT6 handles substantial AI models while 24 channels of 56Gbps PAM4 enable multi-port 400G networking. The hardened AI engines accelerate inference workloads significantly. I've seen customers deploy this for video analytics pipelines processing hundreds of streams simultaneously. The PCIe Gen5 x16 ensures the host interface isn't a bottleneck. Power consumption is high at 40-60W requiring liquid cooling. This device is ideal for AI inference servers and advanced networking equipment.",
      highlight: "Balanced high-capacity FPGA with 56Gbps PAM4 transceivers"
    },
    alternativeParts: [
      {
        partNumber: "HME-A5C300",
        brand: "HME",
        link: "/jingwei-qili/products/hme-a-series/HME-A5C300.html",
        reason: "Maximum capacity in A5 series",
        useCase: "Largest AI designs",
        specifications: {
          "Logic Capacity": "300K LUT6",
          "Transceivers": "32 channels"
        },
        comparison: {
          "Logic Capacity": "300K > 200K",
          "Transceivers": "32 > 24"
        }
      },
      {
        partNumber: "HME-A5C100",
        brand: "HME",
        link: "/jingwei-qili/products/hme-a-series/HME-A5C100.html",
        reason: "Lower capacity for cost savings",
        useCase: "Cost-sensitive designs",
        specifications: {
          "Logic Capacity": "100K LUT6",
          "Transceivers": "16 channels"
        },
        comparison: {
          "Logic Capacity": "100K < 200K",
          "Transceivers": "16 < 24"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "HME-A5C200-EVK",
        category: "Development Kits",
        description: "Advanced evaluation platform",
        link: "#"
      },
      {
        partNumber: "Liquid Cooling System",
        category: "Thermal",
        description: "High-performance liquid cooler",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What AI performance does HME-A5C200 offer?",
        answer: "The HME-A5C200 includes hardened AI engines that deliver 50+ TOPS (Tera Operations Per Second) for INT8 inference. The 200K LUT6 fabric enables custom AI accelerator implementations, while the 56Gbps transceivers support high-bandwidth model loading and data movement. This makes it ideal for AI inference servers and edge AI applications.",
        decisionGuide: "50+ TOPS AI performance with hardened acceleration engines.",
        keywords: ["AI inference", "TOPS", "acceleration", "machine learning"]
      }
    ]
  }
];

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Products updated successfully!');
console.log('Category 1 (HME-P): ' + products.categories[0].products.length + ' products');
console.log('Category 2 (HME-H): ' + products.categories[1].products.length + ' products');
console.log('Category 3 (HME-M): ' + products.categories[2].products.length + ' products');
console.log('Category 4 (HME-A): ' + products.categories[3].products.length + ' products');
