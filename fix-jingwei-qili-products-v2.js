const fs = require('fs');

const productsPath = 'data/jingwei-qili/products.json';
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix Category 3: HME-M Series products - add more FAQs and companionParts
const cat3 = products.categories[2];

// Fix HME-M2C10
const m2c10 = cat3.products[0];
m2c10.faqs = [
  {
    question: "What is the logic capacity of HME-M2C10?",
    answer: "The HME-M2C10 provides 10K LUT6 logic cells, offering a balanced capacity for low-power applications requiring moderate logic resources. This capacity is suitable for IoT gateways, sensor fusion, and simple control applications.",
    decisionGuide: "10K LUT6 capacity is ideal for low-power applications requiring moderate logic.",
    keywords: ["10K LUT6", "logic capacity", "M2C10"]
  },
  {
    question: "What is the power consumption of HME-M2C10?",
    answer: "The HME-M2C10 consumes 0.4-1.0W typical power, making it suitable for battery-powered and energy-efficient applications. Static power is approximately 0.15W, enabling long battery life in portable devices.",
    decisionGuide: "Low power consumption enables battery-powered and portable applications.",
    keywords: ["power consumption", "battery life", "low power"]
  },
  {
    question: "What interfaces does HME-M2C10 support?",
    answer: "The HME-M2C10 supports multiple interfaces: I2C, SPI, UART for sensor and peripheral connectivity. GPIO for custom interfaces. PWM outputs for motor control. ADC interfaces for analog sensors. These interfaces enable connection to a wide range of sensors and actuators.",
    decisionGuide: "Multiple interface options for versatile IoT and control applications.",
    keywords: ["interfaces", "I2C", "SPI", "UART", "GPIO"]
  },
  {
    question: "What is the difference between M2C10 and M2C20?",
    answer: "The M2C10 offers 10K LUT6 while the M2C20 provides 20K LUT6. The M2C10 is more cost-effective for simpler applications, while the M2C20 provides additional capacity for more complex designs. Both share the same power characteristics and interface options.",
    decisionGuide: "Choose M2C10 for cost-sensitive simpler designs, M2C20 for more complex applications.",
    keywords: ["comparison", "M2C10 vs M2C20", "selection"]
  },
  {
    question: "What packages are available for HME-M2C10?",
    answer: "The HME-M2C10 is available in QFN64 and QFN80 packages. The QFN64 measures 9x9mm and provides 100 user I/O. The QFN80 measures 10x10mm and provides 120 user I/O. Both packages are compact and suitable for space-constrained designs.",
    decisionGuide: "QFN64 for compact designs, QFN80 for maximum I/O requirements.",
    keywords: ["packages", "QFN64", "QFN80", "compact"]
  },
  {
    question: "What is the typical battery life with HME-M2C10?",
    answer: "Battery life depends on duty cycle and battery capacity. With a 1000mAh Li-Ion battery and 10% duty cycle, expect 6-12 months operation. With AA batteries (2000mAh), operation can exceed 2 years. The device's sleep mode consumes only microwatts when inactive.",
    decisionGuide: "Excellent battery life for long-term remote deployments.",
    keywords: ["battery life", "energy efficiency", "portable"]
  }
];

// Fix HME-M1C05
const m1c05 = cat3.products[1];
m1c05.alternativeParts = [
  {
    partNumber: "HME-M2C10",
    brand: "HME",
    link: "/jingwei-qili/products/hme-m-series/HME-M2C10.html",
    reason: "Higher capacity for more complex designs",
    useCase: "More logic needed",
    specifications: {
      "Logic Capacity": "10K LUT6",
      "Block RAM": "0.6 Mbit",
      "DSP Slices": "40"
    },
    comparison: {
      "Logic Capacity": "10K > 5K",
      "Block RAM": "0.6 > 0.3",
      "DSP Slices": "40 > 20"
    }
  },
  {
    partNumber: "HME-M2C05",
    brand: "HME",
    link: "/jingwei-qili/products/hme-m-series/HME-M2C05.html",
    reason: "Same capacity with different architecture",
    useCase: "Alternative architecture",
    specifications: {
      "Logic Capacity": "5K LUT6",
      "Block RAM": "0.3 Mbit",
      "DSP Slices": "20"
    },
    comparison: {
      "Logic Capacity": "5K = 5K",
      "Architecture": "Different series"
    }
  }
];
m1c05.faqs = [
  {
    question: "What is the logic capacity of HME-M1C05?",
    answer: "The HME-M1C05 provides 5K LUT6 logic cells, making it ideal for simple IoT sensors and basic control applications. This compact capacity is perfect for applications where minimal logic is needed but FPGA flexibility is required.",
    decisionGuide: "5K LUT6 is suitable for simple sensor interfaces and basic control logic.",
    keywords: ["5K LUT6", "logic capacity", "M1C05"]
  },
  {
    question: "What is the power consumption of HME-M1C05?",
    answer: "The HME-M1C05 consumes 0.2-0.6W typical power, making it one of the lowest power FPGAs available. Static power is approximately 0.1W. This ultra-low consumption enables years of operation on small batteries.",
    decisionGuide: "Ultra-low power for maximum battery life in sensor applications.",
    keywords: ["power consumption", "ultra-low power", "battery"]
  },
  {
    question: "What packages are available for HME-M1C05?",
    answer: "The HME-M1C05 is available in QFN48 and QFN64 packages. The QFN48 measures 7x7mm and provides 80 user I/O. The QFN64 measures 9x9mm and provides 100 user I/O. Both are compact packages suitable for miniature designs.",
    decisionGuide: "Compact packages for space-constrained applications.",
    keywords: ["packages", "QFN48", "QFN64", "compact"]
  },
  {
    question: "What is the difference between M1C05 and M2C10?",
    answer: "The M1C05 offers 5K LUT6 while the M2C10 provides 10K LUT6. The M1C05 is more cost-effective and lower power for simple applications. The M2C10 provides additional capacity for more complex designs. Both are optimized for low-power operation.",
    decisionGuide: "Choose M1C05 for simplest designs, M2C10 for more capacity.",
    keywords: ["comparison", "M1C05 vs M2C10", "selection"]
  },
  {
    question: "What is the typical battery life with HME-M1C05?",
    answer: "Battery life is excellent due to ultra-low power consumption. With a CR2032 coin cell (225mAh) and 1% duty cycle, expect 3-5 years operation. With AA batteries (2000mAh), operation can exceed 10 years.",
    decisionGuide: "Longest battery life in the M series for ultra-low power applications.",
    keywords: ["battery life", "CR2032", "energy efficiency"]
  }
];

// Fix HME-M1A10 - add more companionParts and FAQs
const m1a10 = cat3.products[2];
m1a10.companionParts = [
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
  },
  {
    partNumber: "Low-Power Sensor Module",
    category: "Sensors",
    description: "Ultra-low power sensor for IoT",
    link: "#"
  }
];
m1a10.faqs = [
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
  },
  {
    question: "What is the logic capacity of HME-M1A10?",
    answer: "The HME-M1A10 provides 10K LUT6 logic cells, equivalent to approximately 13K LUT4. This capacity is suitable for sensor fusion, simple AI inference, and multiple interface protocols in battery-powered applications.",
    decisionGuide: "10K LUT6 capacity for moderate complexity low-power designs.",
    keywords: ["10K LUT6", "logic capacity", "M1A10"]
  },
  {
    question: "What interfaces does HME-M1A10 support?",
    answer: "The HME-M1A10 supports I2C, SPI, and UART interfaces for sensor and peripheral connectivity. It also includes GPIO for custom interfaces and PWM outputs for motor control. These interfaces enable connection to a wide range of IoT sensors and devices.",
    decisionGuide: "Multiple serial interfaces for versatile IoT connectivity.",
    keywords: ["interfaces", "I2C", "SPI", "UART", "IoT"]
  },
  {
    question: "What is the difference between M1A10 and M1A30?",
    answer: "The M1A10 offers 10K LUT6 while the M1A30 provides 30K LUT6. The M1A10 is more cost-effective for simpler applications and has lower power consumption. The M1A30 provides additional capacity for more complex sensor fusion and AI applications.",
    decisionGuide: "Choose M1A10 for simpler designs, M1A30 for more complex applications.",
    keywords: ["comparison", "M1A10 vs M1A30", "selection"]
  },
  {
    question: "What packages are available for HME-M1A10?",
    answer: "The HME-M1A10 is available in QFN64 and QFN80 packages. The QFN64 measures 9x9mm and provides 100 user I/O. The QFN80 measures 10x10mm and provides 120 user I/O. Both are compact packages suitable for wearable and portable devices.",
    decisionGuide: "Compact packages for space-constrained wearable applications.",
    keywords: ["packages", "QFN64", "QFN80", "wearable"]
  }
];

// Fix HME-M2C05 - add more companionParts and FAQs
const m2c05 = cat3.products[3];
m2c05.alternativeParts = [
  {
    partNumber: "HME-M1A10",
    brand: "HME",
    link: "/jingwei-qili/products/hme-m-series/HME-M1A10.html",
    reason: "Higher capacity with still low power",
    useCase: "More complex low-power designs",
    specifications: {
      "Logic Capacity": "10K LUT6",
      "Block RAM": "0.6 Mbit",
      "Power": "0.3-0.8W"
    },
    comparison: {
      "Logic Capacity": "10K > 5K",
      "Block RAM": "0.6 > 0.3",
      "Power": "Slightly higher"
    }
  },
  {
    partNumber: "HME-M1C05",
    brand: "HME",
    link: "/jingwei-qili/products/hme-m-series/HME-M1C05.html",
    reason: "Same capacity, different architecture",
    useCase: "Alternative architecture option",
    specifications: {
      "Logic Capacity": "5K LUT6",
      "Block RAM": "0.3 Mbit"
    },
    comparison: {
      "Logic Capacity": "5K = 5K",
      "Architecture": "Different series"
    }
  }
];
m2c05.companionParts = [
  {
    partNumber: "HME-M2C05-EVK",
    category: "Development Kits",
    description: "Compact evaluation kit",
    link: "#"
  },
  {
    partNumber: "Coin Cell Battery",
    category: "Power",
    description: "Battery for portable testing",
    link: "#"
  },
  {
    partNumber: "Mini Sensor Board",
    category: "Sensors",
    description: "Compact sensor module",
    link: "#"
  }
];
m2c05.faqs = [
  {
    question: "What is the smallest package for HME-M series?",
    answer: "The HME-M2C05 comes in a tiny QFN48 package measuring just 7x7mm. This is the smallest package in the M series, enabling integration into highly space-constrained designs like wearables and miniature sensors.",
    decisionGuide: "QFN48 package for minimum footprint applications.",
    keywords: ["QFN48", "compact", "small package"]
  },
  {
    question: "What is the logic capacity of HME-M2C05?",
    answer: "The HME-M2C05 provides 5K LUT6 logic cells, making it ideal for the simplest FPGA applications. This capacity is perfect for basic sensor interfaces, LED controllers, and simple control logic in space-constrained designs.",
    decisionGuide: "5K LUT6 for simplest FPGA applications.",
    keywords: ["5K LUT6", "logic capacity", "M2C05"]
  },
  {
    question: "What is the power consumption of HME-M2C05?",
    answer: "The HME-M2C05 consumes under 0.5W typical power, making it ideal for energy-constrained applications. Static power is approximately 0.1W. This ultra-low consumption enables long battery life in miniature devices.",
    decisionGuide: "Ultra-low power for energy-harvesting and battery applications.",
    keywords: ["power consumption", "energy efficiency", "low power"]
  },
  {
    question: "What applications is HME-M2C05 suitable for?",
    answer: "The HME-M2C05 excels in simple IoT sensors, basic motor control, LED controllers, simple protocol converters, and button interfaces. Its tiny size and low power make it ideal for wearable devices and miniature sensors.",
    decisionGuide: "Ideal for simplest control and sensor applications.",
    keywords: ["applications", "IoT sensors", "wearable"]
  },
  {
    question: "What is the price advantage of HME-M2C05?",
    answer: "The HME-M2C05 is the most cost-effective device in the M series due to its minimal capacity. It provides FPGA flexibility at a price point competitive with complex MCUs, making it attractive for high-volume simple applications.",
    decisionGuide: "Most affordable M series device for cost-sensitive applications.",
    keywords: ["price", "cost-effective", "affordable"]
  }
];

// Fix HME-M1A20 - add more companionParts and FAQs
const m1a20 = cat3.products[4];
m1a20.companionParts = [
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
  },
  {
    partNumber: "Sensor Hub Module",
    category: "Sensors",
    description: "Multi-sensor interface board",
    link: "#"
  }
];
m1a20.faqs = [
  {
    question: "What is the power consumption of HME-M1A20?",
    answer: "The HME-M1A20 consumes 0.6-1.5W typical power depending on utilization. Static power is approximately 0.2W. This makes it suitable for portable applications requiring moderate logic capacity while maintaining reasonable battery life.",
    decisionGuide: "Moderate power consumption for portable designs requiring 20K LUT6 capacity.",
    keywords: ["power consumption", "portable", "battery"]
  },
  {
    question: "What is the logic capacity of HME-M1A20?",
    answer: "The HME-M1A20 provides 20K LUT6 logic cells, offering a balance between capacity and energy efficiency. This capacity is suitable for portable test equipment, battery-powered controllers, and medical monitors requiring moderate logic resources.",
    decisionGuide: "20K LUT6 for moderate complexity portable applications.",
    keywords: ["20K LUT6", "logic capacity", "M1A20"]
  },
  {
    question: "What is the difference between M1A20 and M1A30?",
    answer: "The M1A20 offers 20K LUT6 while the M1A30 provides 30K LUT6. The M1A20 consumes less power and is more cost-effective. The M1A30 provides 50% more capacity for complex designs. Both share the same interface options and package choices.",
    decisionGuide: "Choose M1A20 for power/cost optimization, M1A30 for maximum capacity.",
    keywords: ["comparison", "M1A20 vs M1A30", "selection"]
  },
  {
    question: "What packages are available for HME-M1A20?",
    answer: "The HME-M1A20 is available in QFN80 and TQFP144 packages. The QFN80 measures 10x10mm and provides 140 user I/O. The TQFP144 is popular for prototyping and provides 160 user I/O with easy soldering.",
    decisionGuide: "QFN80 for compact designs, TQFP144 for prototyping.",
    keywords: ["packages", "QFN80", "TQFP144"]
  },
  {
    question: "What applications is HME-M1A20 best suited for?",
    answer: "The HME-M1A20 excels in portable test equipment, battery-powered industrial controllers, medical monitors, handheld devices, and smart agriculture sensors. The 20K LUT6 capacity handles sensor fusion and multiple protocols.",
    decisionGuide: "Ideal for portable applications requiring moderate logic capacity.",
    keywords: ["applications", "portable", "medical", "industrial"]
  },
  {
    question: "What is the battery life with HME-M1A20?",
    answer: "Battery life depends on duty cycle and battery capacity. With a 2000mAh Li-Ion battery and 10% duty cycle, expect 1-2 weeks continuous operation. With AA batteries and lower duty cycles, operation can extend to several months.",
    decisionGuide: "Good battery life for rechargeable portable applications.",
    keywords: ["battery life", "Li-Ion", "portable operation"]
  }
];

// Fix HME-M2C15 - add more companionParts and FAQs
const m2c15 = cat3.products[5];
m2c15.alternativeParts = [
  {
    partNumber: "HME-M2C20",
    brand: "HME",
    link: "/jingwei-qili/products/hme-m-series/HME-M2C20.html",
    reason: "Higher capacity for complex gateways",
    useCase: "More complex designs",
    specifications: {
      "Logic Capacity": "20K LUT6",
      "Block RAM": "1.2 Mbit",
      "DSP Slices": "80"
    },
    comparison: {
      "Logic Capacity": "20K > 15K",
      "Block RAM": "1.2 > 0.9",
      "DSP Slices": "80 > 60"
    }
  },
  {
    partNumber: "HME-M1A20",
    brand: "HME",
    link: "/jingwei-qili/products/hme-m-series/HME-M1A20.html",
    reason: "Same capacity, different architecture",
    useCase: "Alternative architecture",
    specifications: {
      "Logic Capacity": "20K LUT6",
      "Block RAM": "1.2 Mbit"
    },
    comparison: {
      "Logic Capacity": "20K > 15K",
      "Architecture": "Different series"
    }
  }
];
m2c15.companionParts = [
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
  },
  {
    partNumber: "Protocol Converter Module",
    category: "Interface",
    description: "Multi-protocol interface board",
    link: "#"
  }
];
m2c15.faqs = [
  {
    question: "Does HME-M2C15 support Ethernet?",
    answer: "Yes, the HME-M2C15 includes hardened Ethernet MAC supporting 10/100 Mbps operation. This enables direct network connectivity for IoT gateway applications without requiring external Ethernet controllers, reducing BOM cost and complexity.",
    decisionGuide: "Built-in Ethernet MAC for cost-effective IoT gateway designs.",
    keywords: ["Ethernet", "MAC", "networking", "IoT gateway"]
  },
  {
    question: "What is the logic capacity of HME-M2C15?",
    answer: "The HME-M2C15 provides 15K LUT6 logic cells, making it ideal for IoT gateways and edge computing devices. This capacity handles multiple sensor interfaces, protocol conversion, and local data processing efficiently.",
    decisionGuide: "15K LUT6 for IoT gateway and edge computing applications.",
    keywords: ["15K LUT6", "logic capacity", "M2C15"]
  },
  {
    question: "What is the power consumption of HME-M2C15?",
    answer: "The HME-M2C15 consumes 0.5-1.2W typical power, making it suitable for always-on IoT gateways. Static power is approximately 0.2W. This enables PoE-powered operation or long battery life in portable gateway applications.",
    decisionGuide: "Low power for always-on IoT gateway applications.",
    keywords: ["power consumption", "PoE", "IoT gateway"]
  },
  {
    question: "What protocols can HME-M2C15 handle?",
    answer: "The HME-M2C15 can handle multiple protocols simultaneously including I2C, SPI, UART for sensors, and Ethernet for network connectivity. The 15K LUT6 capacity enables protocol conversion between different sensor buses and Ethernet.",
    decisionGuide: "Multi-protocol support for complex IoT gateway applications.",
    keywords: ["protocols", "I2C", "SPI", "Ethernet", "gateway"]
  },
  {
    question: "What is the difference between M2C15 and M2C20?",
    answer: "The M2C15 offers 15K LUT6 while the M2C20 provides 20K LUT6. The M2C15 is more cost-effective for standard gateway applications. The M2C20 provides additional capacity for more complex protocol handling or additional features.",
    decisionGuide: "Choose M2C15 for standard gateways, M2C20 for complex multi-protocol designs.",
    keywords: ["comparison", "M2C15 vs M2C20", "gateway selection"]
  }
];

// Fix Category 4: HME-A Series products
const cat4 = products.categories[3];

// Fix HME-A5C300
const a5c300 = cat4.products[0];
a5c300.faqs = [
  {
    question: "What is the logic capacity of HME-A5C300?",
    answer: "The HME-A5C300 provides 300K LUT6 logic cells, the highest capacity in the A5 series. This massive capacity enables the most complex AI models, large-scale networking, and data center acceleration applications.",
    decisionGuide: "300K LUT6 for maximum capacity demanding applications.",
    keywords: ["300K LUT6", "maximum capacity", "A5C300"]
  },
  {
    question: "What is the transceiver speed of HME-A5C300?",
    answer: "The HME-A5C300 features 32 channels of 56Gbps PAM4 transceivers. This cutting-edge technology enables 400G Ethernet and next-generation high-speed interconnects for data center and AI applications.",
    decisionGuide: "56Gbps PAM4 transceivers for next-gen networking.",
    keywords: ["56Gbps", "PAM4", "400G Ethernet", "transceivers"]
  },
  {
    question: "What AI performance does HME-A5C300 offer?",
    answer: "The HME-A5C300 includes hardened AI engines delivering 100+ TOPS for INT8 inference. The 300K LUT6 fabric enables custom AI accelerator implementations for the largest models and highest throughput requirements.",
    decisionGuide: "100+ TOPS AI performance for maximum inference throughput.",
    keywords: ["AI inference", "TOPS", "100 TOPS", "machine learning"]
  },
  {
    question: "What is the power consumption of HME-A5C300?",
    answer: "The HME-A5C300 consumes 60-100W typical power due to its high performance. This requires liquid cooling for sustained operation. Power consumption scales with AI workload and transceiver utilization.",
    decisionGuide: "High power consumption requires liquid cooling infrastructure.",
    keywords: ["power consumption", "liquid cooling", "thermal management"]
  },
  {
    question: "What is the difference between A5C300 and A7C500?",
    answer: "The A5C300 offers 300K LUT6 with 56Gbps PAM4 transceivers optimized for AI. The A7C500 provides 500K LUT6 with 28Gbps NRZ transceivers and HBM2. A5C300 is optimized for AI inference, A7C500 for maximum logic capacity.",
    decisionGuide: "Choose A5C300 for AI/400G networking, A7C500 for maximum logic with HBM.",
    keywords: ["comparison", "A5C300 vs A7C500", "AI vs HPC"]
  },
  {
    question: "What applications need HME-A5C300?",
    answer: "The HME-A5C300 is designed for the most demanding applications: large-scale AI inference engines, 400G networking switches, cloud AI accelerators, high-frequency trading, and massive video analytics systems.",
    decisionGuide: "For maximum performance AI and networking applications.",
    keywords: ["applications", "AI inference", "400G networking", "cloud"]
  }
];

// Fix HME-A7C500
const a7c500 = cat4.products[1];
a7c500.alternativeParts = [
  {
    partNumber: "HME-A5C300",
    brand: "HME",
    link: "/jingwei-qili/products/hme-a-series/HME-A5C300.html",
    reason: "Alternative with higher transceiver speed",
    useCase: "400G networking applications",
    specifications: {
      "Logic Capacity": "300K LUT6",
      "Transceivers": "32 channels, 56Gbps",
      "AI Engines": "Hardened"
    },
    comparison: {
      "Logic Capacity": "300K < 500K",
      "Transceivers": "56Gbps > 28Gbps",
      "AI": "Optimized"
    }
  },
  {
    partNumber: "HME-A7C200",
    brand: "HME",
    link: "/jingwei-qili/products/hme-a-series/HME-A7C200.html",
    reason: "Lower capacity for cost savings",
    useCase: "Cost-sensitive high-performance",
    specifications: {
      "Logic Capacity": "200K LUT6",
      "Transceivers": "24 channels, 28Gbps",
      "HBM2": "8GB"
    },
    comparison: {
      "Logic Capacity": "200K < 500K",
      "Transceivers": "24 < 32",
      "Cost": "Lower"
    }
  }
];
a7c500.faqs = [
  {
    question: "What is the maximum logic capacity of HME-A7C500?",
    answer: "The HME-A7C500 offers 500K LUT6 logic cells, the highest capacity in the entire HME FPGA portfolio. This massive capacity enables the largest designs including complex SoC prototypes, massive HPC applications, and large-scale AI training.",
    decisionGuide: "500K LUT6 for maximum capacity requirements.",
    keywords: ["500K LUT6", "maximum capacity", "A7C500"]
  },
  {
    question: "How many transceivers does HME-A7C500 have?",
    answer: "The HME-A7C500 includes 48 high-speed transceivers, each operating at up to 28Gbps. This provides massive I/O bandwidth for multi-port 100G Ethernet, complex networking topologies, and high-speed cluster interconnects.",
    decisionGuide: "48 transceivers for maximum I/O bandwidth applications.",
    keywords: ["48 transceivers", "maximum I/O", "28Gbps"]
  },
  {
    question: "What is the HBM2 capacity of HME-A7C500?",
    answer: "The HME-A7C500 includes 16GB of HBM2 memory providing 512GB/s bandwidth. This massive memory bandwidth is essential for large-scale AI training, high-performance computing, and data analytics applications.",
    decisionGuide: "16GB HBM2 with 512GB/s bandwidth for memory-intensive applications.",
    keywords: ["HBM2", "16GB", "memory bandwidth", "HPC"]
  },
  {
    question: "What is the power consumption of HME-A7C500?",
    answer: "The HME-A7C500 consumes 80-120W typical power due to its massive capacity and HBM2. This requires liquid cooling for sustained operation. Power scales with logic utilization, transceiver activity, and HBM access patterns.",
    decisionGuide: "High power requires liquid cooling infrastructure.",
    keywords: ["power consumption", "liquid cooling", "thermal design"]
  },
  {
    question: "What applications need HME-A7C500?",
    answer: "The HME-A7C500 is designed for the most demanding applications: large-scale AI training, high-performance computing clusters, complex emulation systems, massive data analytics, and advanced networking equipment.",
    decisionGuide: "For maximum capacity and memory bandwidth applications.",
    keywords: ["applications", "AI training", "HPC", "emulation"]
  }
];

// Fix HME-A7C100
const a7c100 = cat4.products[2];
a7c100.faqs = [
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
  },
  {
    question: "What is the logic capacity of HME-A7C100?",
    answer: "The HME-A7C100 provides 100K LUT6 logic cells, designed for demanding data center and high-performance computing applications. This capacity enables complex AI inference engines, 100G networking, and video processing systems.",
    decisionGuide: "100K LUT6 for data center acceleration applications.",
    keywords: ["100K LUT6", "data center", "HPC"]
  },
  {
    question: "What is the power consumption of HME-A7C100?",
    answer: "The HME-A7C100 consumes 25-40W typical power depending on utilization. The HBM2 and transceivers contribute significantly to power. Proper thermal design with heatsinks and airflow is required for reliable operation.",
    decisionGuide: "Moderate-high power requires proper thermal management.",
    keywords: ["power consumption", "thermal management", "heatsink"]
  },
  {
    question: "What is the difference between A7C100 and A7C200?",
    answer: "The A7C100 offers 100K LUT6 with 16 transceivers and 8GB HBM2. The A7C200 provides 200K LUT6 with 24 transceivers and the same 8GB HBM2. A7C100 is cost-effective for moderate designs, A7C200 for larger applications.",
    decisionGuide: "Choose A7C100 for cost optimization, A7C200 for more capacity.",
    keywords: ["comparison", "A7C100 vs A7C200", "selection"]
  },
  {
    question: "What applications is HME-A7C100 best suited for?",
    answer: "The HME-A7C100 excels in data center acceleration, 100G networking, AI inference, high-frequency trading, and video transcoding. The combination of 100K LUT6, 28Gbps transceivers, and HBM2 handles demanding computational workloads.",
    decisionGuide: "Ideal for data center and high-performance applications.",
    keywords: ["applications", "data center", "AI inference", "networking"]
  }
];

// Fix HME-A5C100
const a5c100 = cat4.products[3];
a5c100.alternativeParts = [
  {
    partNumber: "HME-A5C300",
    brand: "HME",
    link: "/jingwei-qili/products/hme-a-series/HME-A5C300.html",
    reason: "Higher capacity for maximum performance",
    useCase: "Largest AI designs",
    specifications: {
      "Logic Capacity": "300K LUT6",
      "Transceivers": "32 channels, 56Gbps",
      "AI Engines": "More"
    },
    comparison: {
      "Logic Capacity": "300K > 100K",
      "Transceivers": "32 > 16",
      "AI": "More engines"
    }
  },
  {
    partNumber: "HME-A7C100",
    brand: "HME",
    link: "/jingwei-qili/products/hme-a-series/HME-A7C100.html",
    reason: "Alternative with HBM2",
    useCase: "Memory-intensive applications",
    specifications: {
      "Logic Capacity": "100K LUT6",
      "Transceivers": "16 channels, 28Gbps",
      "HBM2": "8GB"
    },
    comparison: {
      "Logic Capacity": "100K = 100K",
      "Transceivers": "28Gbps < 56Gbps",
      "HBM2": "Included"
    }
  }
];
a5c100.companionParts = [
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
  },
  {
    partNumber: "Liquid Cooling Kit",
    category: "Thermal",
    description: "High-performance cooling",
    link: "#"
  }
];
a5c100.faqs = [
  {
    question: "What is PAM4 signaling?",
    answer: "PAM4 (Pulse Amplitude Modulation 4-level) is a signaling technique that transmits 2 bits per symbol by using four voltage levels. This doubles the data rate compared to NRZ signaling at the same baud rate. The HME-A5C100's 56Gbps PAM4 transceivers enable 400G Ethernet.",
    decisionGuide: "PAM4 enables 400G+ networking with superior bandwidth efficiency.",
    keywords: ["PAM4", "56Gbps", "400G Ethernet", "signaling"]
  },
  {
    question: "What is the logic capacity of HME-A5C100?",
    answer: "The HME-A5C100 provides 100K LUT6 logic cells with cutting-edge 56Gbps PAM4 transceivers. This combination enables next-generation networking and AI applications requiring high-speed connectivity with moderate logic capacity.",
    decisionGuide: "100K LUT6 with 56Gbps transceivers for next-gen applications.",
    keywords: ["100K LUT6", "next-gen", "A5C100"]
  },
  {
    question: "What AI performance does HME-A5C100 offer?",
    answer: "The HME-A5C100 includes hardened AI engines optimized for inference acceleration. The 100K LUT6 fabric enables custom AI implementations. Combined with 56Gbps transceivers, it delivers excellent performance for AI at the edge and in the data center.",
    decisionGuide: "Hardened AI engines for optimized inference performance.",
    keywords: ["AI inference", "hardened engines", "edge AI"]
  },
  {
    question: "What is the power consumption of HME-A5C100?",
    answer: "The HME-A5C100 consumes 40-60W typical power due to high-speed PAM4 transceivers and AI engines. This requires liquid cooling for sustained operation. Power scales with AI workload and transceiver utilization.",
    decisionGuide: "High power requires liquid cooling infrastructure.",
    keywords: ["power consumption", "liquid cooling", "PAM4 power"]
  },
  {
    question: "What is the difference between A5C100 and A5C200?",
    answer: "The A5C100 offers 100K LUT6 with 16 transceivers. The A5C200 provides 200K LUT6 with 24 transceivers. Both feature 56Gbps PAM4 and hardened AI engines. A5C100 is cost-effective, A5C200 for larger designs.",
    decisionGuide: "Choose A5C100 for cost optimization, A5C200 for more capacity.",
    keywords: ["comparison", "A5C100 vs A5C200", "selection"]
  }
];

// Fix HME-A7C50
const a7c50 = cat4.products[4];
a7c50.companionParts = [
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
  },
  {
    partNumber: "Heatsink Kit",
    category: "Thermal",
    description: "Air cooling solution",
    link: "#"
  }
];
a7c50.faqs = [
  {
    question: "What is the entry point to A series?",
    answer: "The HME-A7C50 is the entry-level device in the A series, offering 50K LUT6 and 8 channels of 28Gbps transceivers. It provides access to high-end transceiver technology at a more accessible price point.",
    decisionGuide: "Entry point to A series with 28Gbps transceiver technology.",
    keywords: ["entry-level", "A series", "28Gbps", "cost-effective"]
  },
  {
    question: "What is the logic capacity of HME-A7C50?",
    answer: "The HME-A7C50 provides 50K LUT6 logic cells, offering entry-level access to A series features. This capacity is suitable for 50G networking, storage acceleration, and edge AI applications requiring high-speed connectivity.",
    decisionGuide: "50K LUT6 for entry-level high-performance applications.",
    keywords: ["50K LUT6", "entry-level", "A7C50"]
  },
  {
    question: "What Ethernet speeds does HME-A7C50 support?",
    answer: "The HME-A7C50 supports 50G Ethernet through its 28Gbps transceivers. The hardened Ethernet MAC enables high-performance networking. This makes it ideal for SmartNICs, storage controllers, and network appliances.",
    decisionGuide: "50G Ethernet support for high-speed networking applications.",
    keywords: ["50G Ethernet", "networking", "SmartNIC"]
  },
  {
    question: "What is the power consumption of HME-A7C50?",
    answer: "The HME-A7C50 consumes 15-25W typical power, which is manageable with air cooling. This is significantly lower than larger A series devices. The lower power makes it suitable for systems without liquid cooling infrastructure.",
    decisionGuide: "Moderate power enables air-cooled designs.",
    keywords: ["power consumption", "air cooling", "thermal"]
  },
  {
    question: "What is the difference between A7C50 and P3A100?",
    answer: "The A7C50 offers 50K LUT6 with 28Gbps transceivers and PCIe Gen4. The P3A100 provides 100K LUT6 with 12.5Gbps transceivers and PCIe Gen3. A7C50 is for high-speed connectivity, P3A100 for more logic with lower speed.",
    decisionGuide: "Choose A7C50 for speed, P3A100 for more logic capacity.",
    keywords: ["comparison", "A7C50 vs P3A100", "speed vs capacity"]
  },
  {
    question: "What applications is HME-A7C50 best suited for?",
    answer: "The HME-A7C50 excels in 50G networking, storage acceleration, video processing, test equipment, and edge AI. The 28Gbps transceivers enable high-speed connectivity while the 50K LUT6 provides sufficient logic.",
    decisionGuide: "Ideal for high-speed connectivity with moderate logic requirements.",
    keywords: ["applications", "50G networking", "storage", "edge AI"]
  }
];

// Fix HME-A5C200
const a5c200 = cat4.products[5];
a5c200.companionParts = [
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
  },
  {
    partNumber: "QSFP-DD Module",
    category: "Optics",
    description: "400G optical transceiver",
    link: "#"
  }
];
a5c200.faqs = [
  {
    question: "What AI performance does HME-A5C200 offer?",
    answer: "The HME-A5C200 includes hardened AI engines that deliver 50+ TOPS (Tera Operations Per Second) for INT8 inference. The 200K LUT6 fabric enables custom AI accelerator implementations, while the 56Gbps transceivers support high-bandwidth model loading.",
    decisionGuide: "50+ TOPS AI performance with hardened acceleration engines.",
    keywords: ["AI inference", "TOPS", "acceleration", "machine learning"]
  },
  {
    question: "What is the logic capacity of HME-A5C200?",
    answer: "The HME-A5C200 provides 200K LUT6 logic cells with 24 channels of 56Gbps PAM4 transceivers. This balanced configuration enables high-performance AI inference and advanced networking with substantial logic resources.",
    decisionGuide: "200K LUT6 with 56Gbps transceivers for balanced high performance.",
    keywords: ["200K LUT6", "balanced capacity", "A5C200"]
  },
  {
    question: "What networking speeds does HME-A5C200 support?",
    answer: "The HME-A5C200 supports 400G Ethernet through its 56Gbps PAM4 transceivers. With 24 transceivers, it can support multiple 400G ports or numerous lower-speed ports. This enables high-density networking applications.",
    decisionGuide: "400G Ethernet support with multiple high-speed ports.",
    keywords: ["400G Ethernet", "networking", "56Gbps", "PAM4"]
  },
  {
    question: "What is the power consumption of HME-A5C200?",
    answer: "The HME-A5C200 consumes 40-60W typical power due to high-speed transceivers and AI engines. This requires liquid cooling for sustained operation. Power scales with AI workload and transceiver activity.",
    decisionGuide: "High power requires liquid cooling infrastructure.",
    keywords: ["power consumption", "liquid cooling", "thermal"]
  },
  {
    question: "What is the difference between A5C200 and A5C300?",
    answer: "The A5C200 offers 200K LUT6 with 24 transceivers. The A5C300 provides 300K LUT6 with 32 transceivers. Both feature 56Gbps PAM4 and hardened AI engines. A5C200 is cost-effective for mid-range, A5C300 for maximum performance.",
    decisionGuide: "Choose A5C200 for balanced performance, A5C300 for maximum capacity.",
    keywords: ["comparison", "A5C200 vs A5C300", "selection"]
  },
  {
    question: "What applications is HME-A5C200 best suited for?",
    answer: "The HME-A5C200 excels in AI inference acceleration, 400G networking, cloud acceleration, high-performance computing, and video analytics. The combination of 200K LUT6, 24x 56Gbps transceivers, and AI engines handles demanding workloads.",
    decisionGuide: "Ideal for AI inference and advanced networking applications.",
    keywords: ["applications", "AI inference", "400G networking", "cloud"]
  }
];

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Products updated successfully!');
console.log('Fixed FAQs and companionParts for M series and A series products.');
