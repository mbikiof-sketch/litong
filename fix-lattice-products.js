const fs = require('fs');

const productsPath = 'data/lattice/products.json';
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 1: Nexus Platform - Already has 4 products, add 2 more
const cat1 = products.categories[0];
const existingProducts1 = cat1.products;
cat1.products = [
  ...existingProducts1,
  {
    partNumber: "LFD2NX-100",
    name: "CertusPro-NX 100K Logic Cells FPGA",
    description: "High-capacity CertusPro-NX FPGA with 96K logic cells, 3.9 Mbit embedded memory, and advanced security features for demanding Edge Computing applications.",
    shortDescription: "CertusPro-NX 100K logic cells FPGA with advanced security for Edge Computing",
    descriptionParagraphs: [
      "The LFD2NX-100 is a high-capacity member of the CertusPro-NX family, delivering 96K logic cells with industry-leading power efficiency. Built on the 28nm FD-SOI Nexus platform, it provides the performance needed for complex Edge Computing applications.",
      "The device features 3.9 Mbits of embedded memory, 300 DSP blocks for high-performance signal processing, and up to 270 user I/O pins. Advanced security features include hardware root of trust, AES-256 encryption, and secure boot capabilities.",
      "The LFD2NX-100 supports PCIe Gen3 x4, multiple high-speed memory interfaces, and comprehensive connectivity options. It is ideal for 5G infrastructure, data center accelerators, and high-performance Edge AI applications."
    ],
    features: [
      "96K logic cells",
      "3.9 Mbit embedded memory",
      "300 DSP blocks",
      "270 user I/O",
      "PCIe Gen3 x4",
      "Hardware root of trust",
      "AES-256 encryption"
    ],
    specifications: {
      "Logic Cells": "96,000",
      "Embedded Memory": "3.9 Mbit",
      "DSP Blocks": "300",
      "User I/O": "Up to 270",
      "PCIe": "Gen3 x4",
      "Security": "Hardware root of trust",
      "Encryption": "AES-256",
      "Authentication": "ECDSA",
      "Packages": "caBGA-400, caBGA-256",
      "Memory Interface": "DDR3/LPDDR4",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Industrial"
    },
    applications: [
      "5G infrastructure",
      "Data center accelerators",
      "Edge AI servers",
      "Network security",
      "High-performance computing"
    ],
    faqs: [
      {
        question: "What is the difference between LFD2NX-40 and LFD2NX-100?",
        answer: "The LFD2NX-100 has 96K logic cells vs 39K in LFD2NX-40, 3.9 Mbit vs 1.5 Mbit embedded memory, and 300 vs 120 DSP blocks. The 100 also adds PCIe Gen3 x4 and hardware security features. Choose 100 for high-performance applications.",
        decisionGuide: "LFD2NX-100 for high capacity; LFD2NX-40 for cost-sensitive applications.",
        keywords: ["comparison", "LFD2NX-40", "LFD2NX-100", "capacity"]
      },
      {
        question: "What security features are included?",
        answer: "The LFD2NX-100 includes hardware root of trust for secure system foundation, AES-256 encryption for bitstream protection, ECDSA authentication for secure boot verification, and PUF for secure key storage.",
        decisionGuide: "Comprehensive hardware security for critical applications.",
        keywords: ["security", "root of trust", "AES-256", "encryption"]
      },
      {
        question: "What is the PCIe performance?",
        answer: "The LFD2NX-100 supports PCIe Gen3 x4, providing up to 32 Gbps bandwidth. This high-speed interface enables demanding applications like data center accelerators and 5G baseband processing.",
        decisionGuide: "PCIe Gen3 x4 for high-speed connectivity.",
        keywords: ["PCIe", "Gen3", "bandwidth", "connectivity"]
      },
      {
        question: "How many DSP blocks are available?",
        answer: "The LFD2NX-100 provides 300 high-performance DSP blocks for signal processing, AI inference acceleration, and video processing. These support 18x18 multiplication with 48-bit accumulation.",
        decisionGuide: "300 DSP blocks enable complex AI and signal processing.",
        keywords: ["DSP", "signal processing", "AI inference", "300 blocks"]
      },
      {
        question: "What development kit is available?",
        answer: "The CertusPro-NX Advanced Evaluation Board is recommended for LFD2NX-100 development. It includes the FPGA, high-speed memory interfaces, PCIe edge connector, and comprehensive debugging capabilities.",
        decisionGuide: "CertusPro-NX Advanced EVB for development.",
        keywords: ["evaluation board", "development kit", "CertusPro-NX"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The LFD2NX-100 is our flagship recommendation for high-performance Edge Computing. We've deployed it in 5G ORAN fronthaul, data center security accelerators, and AI inference servers. The combination of high logic capacity, advanced security, and ultra-low power is unmatched.",
      highlight: "Flagship FPGA for high-performance Edge Computing with security"
    },
    alternativeParts: [
      {
        partNumber: "LFD2NX-40",
        comparison: "LFD2NX-40 has 39K logic cells vs 96K",
        reason: "Lower capacity and cost",
        useCase: "Medium complexity designs"
      },
      {
        partNumber: "LFD4NX-100",
        comparison: "LFD4NX-100 is security-focused vs general purpose",
        reason: "Enhanced security needed",
        useCase: "Security-critical applications"
      }
    ],
    companionParts: [
      {
        partNumber: "CertusPro-NX-ADV-EVB",
        relationship: "Evaluation Board",
        description: "CertusPro-NX Advanced Evaluation Board"
      },
      {
        partNumber: "DDR4-4Gb",
        relationship: "External Memory",
        description: "High-speed DDR4 memory"
      },
      {
        partNumber: "LCMXO5-1200",
        relationship: "Companion CPLD",
        description: "MachXO5 for system management"
      }
    ]
  },
  {
    partNumber: "LCE4X-40",
    name: "CrossLink-NX 40K MIPI FPGA",
    description: "CrossLink-NX FPGA with 39K logic cells optimized for MIPI camera and display connectivity with up to 2 MIPI D-PHY lanes.",
    shortDescription: "CrossLink-NX 40K FPGA for compact MIPI camera and display applications",
    descriptionParagraphs: [
      "The LCE4X-40 is a compact member of the CrossLink-NX family, designed for MIPI camera and display connectivity applications. Built on the 28nm FD-SOI Nexus platform, it delivers 39K logic cells with industry-leading power efficiency.",
      "The device features dedicated hard IP for MIPI D-PHY supporting up to 2 lanes at 2.5 Gbps per lane. It includes 1.5 Mbits of embedded memory and 120 DSP blocks for image processing.",
      "The LCE4X-40 is ideal for single-camera applications, small displays, and portable devices requiring MIPI connectivity in a compact, low-power package."
    ],
    features: [
      "39K logic cells",
      "2-lane MIPI D-PHY hard IP",
      "2.5 Gbps per lane",
      "1.5 Mbit embedded memory",
      "120 DSP blocks",
      "CSI-2 and DSI support",
      "Small packages"
    ],
    specifications: {
      "Logic Cells": "39,000",
      "MIPI D-PHY": "2 lanes, 2.5 Gbps/lane",
      "Embedded Memory": "1.5 Mbit",
      "DSP Blocks": "120",
      "User I/O": "Up to 207",
      "Protocols": "CSI-2, DSI",
      "Packages": "caBGA-256, WLCSP-36",
      "Security": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Industrial"
    },
    applications: [
      "Single camera interface",
      "Small display panels",
      "Portable devices",
      "IoT cameras",
      "Wearable displays"
    ],
    faqs: [
      {
        question: "What is the difference between LCE4X-40 and LCE4X-100?",
        answer: "The LCE4X-40 has 39K logic cells and 2 MIPI lanes, while the LCE4X-100 has 96K logic cells and 4 MIPI lanes. Choose LCE4X-40 for single-camera or simpler applications, LCE4X-100 for multi-camera or complex processing.",
        decisionGuide: "LCE4X-40 for single camera, LCE4X-100 for multi-camera.",
        keywords: ["comparison", "LCE4X-40", "LCE4X-100", "selection"]
      },
      {
        question: "What is the smallest package available?",
        answer: "The LCE4X-40 is available in a 4x4mm WLCSP-36 package, making it ideal for ultra-compact wearable and portable devices with MIPI camera or display requirements.",
        decisionGuide: "4x4mm WLCSP for ultra-compact designs.",
        keywords: ["package", "WLCSP", "4x4mm", "compact"]
      },
      {
        question: "Can it support 4K cameras?",
        answer: "Yes, the LCE4X-40 can support 4K cameras at 30fps using the 2 MIPI D-PHY lanes at 2.5 Gbps each. This provides sufficient bandwidth for high-resolution imaging in compact devices.",
        decisionGuide: "Supports 4K@30fps with 2 MIPI lanes.",
        keywords: ["4K", "camera", "bandwidth", "resolution"]
      },
      {
        question: "What protocols are supported?",
        answer: "The LCE4X-40 supports MIPI CSI-2 for camera input and MIPI DSI for display output. Both protocols are supported with hardened IP for efficient implementation.",
        decisionGuide: "CSI-2 for cameras, DSI for displays.",
        keywords: ["CSI-2", "DSI", "protocols", "camera", "display"]
      },
      {
        question: "What development kit is available?",
        answer: "The CrossLink-NX Evaluation Board supports the LCE4X-40 with MIPI camera and display connectors, enabling rapid prototyping of smart vision applications.",
        decisionGuide: "CrossLink-NX Evaluation Board for development.",
        keywords: ["evaluation board", "development kit", "CrossLink-NX"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The LCE4X-40 is perfect for compact MIPI applications. We've used it in wearable cameras, portable inspection devices, and IoT vision sensors. The small WLCSP package enables designs that simply aren't possible with other solutions.",
      highlight: "Compact MIPI solution for wearable and portable devices"
    },
    alternativeParts: [
      {
        partNumber: "LCE4X-100",
        comparison: "LCE4X-100 has 96K logic cells and 4 MIPI lanes",
        reason: "More capacity or cameras needed",
        useCase: "Multi-camera designs"
      }
    ],
    companionParts: [
      {
        partNumber: "CrossLink-NX-EVB",
        relationship: "Evaluation Board",
        description: "CrossLink-NX Evaluation Board"
      }
    ]
  }
];

// Category 2: MachXO Control - Already has 4 products, add 2 more
const cat2 = products.categories[1];
const existingProducts2 = cat2.products;
cat2.products = [
  ...existingProducts2,
  {
    partNumber: "LCMXO3LF-4300C",
    name: "MachXO3LF 4300 LUT FPGA",
    description: "MachXO3LF ultra-low power instant-on FPGA with 4320 LUTs, 112 I/O, and enhanced embedded Flash for complex system management.",
    shortDescription: "MachXO3LF 4300 LUT instant-on FPGA for complex system management",
    descriptionParagraphs: [
      "The LCMXO3LF-4300C is a higher capacity member of the MachXO3LF family, providing 4320 LUTs for complex system management applications. With non-volatile configuration stored in on-chip Flash, it eliminates the need for external configuration memory.",
      "The device features 112 user I/O pins, 768 Kbits of embedded Flash memory, and comprehensive connectivity options. Ultra-low static power consumption makes it ideal for always-on system management.",
      "The MachXO3LF-4300C is widely used for complex power sequencing, multi-rail reset management, and sophisticated configuration control in servers and networking equipment."
    ],
    features: [
      "4320 LUTs",
      "112 user I/O",
      "768 Kbit embedded Flash",
      "Instant-on configuration",
      "Ultra-low power",
      "I2C, SPI, parallel interfaces"
    ],
    specifications: {
      "LUTs": "4,320",
      "User I/O": "112",
      "Flash Memory": "768 Kbit",
      "Configuration": "Internal Flash",
      "Static Power": "<100 μA",
      "Packages": "caBGA-256, TQFP-144",
      "Security": "N/A",
      "Encryption": "N/A",
      "Authentication": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Industrial"
    },
    applications: [
      "Complex power sequencing",
      "Multi-rail reset management",
      "Configuration control",
      "System management",
      "I/O expansion"
    ],
    faqs: [
      {
        question: "What is the difference between LCMXO3LF-2100C and LCMXO3LF-4300C?",
        answer: "The LCMXO3LF-4300C has approximately 2x the logic capacity (4320 vs 2112 LUTs), more I/O pins (112 vs 80), and larger embedded Flash (768K vs 256K bits). Choose the 4300C for more complex system management applications.",
        decisionGuide: "4300C for 2x capacity; 2100C for simpler designs.",
        keywords: ["comparison", "capacity", "LUTs", "selection"]
      },
      {
        question: "How many power rails can it sequence?",
        answer: "The LCMXO3LF-4300C can sequence up to 16+ power rails with its 4320 LUTs and 112 I/O pins. This makes it suitable for complex systems with many power domains.",
        decisionGuide: "16+ power rail sequencing capability.",
        keywords: ["power sequencing", "rails", "system management"]
      },
      {
        question: "What is the static power consumption?",
        answer: "The LCMXO3LF-4300C features ultra-low static power consumption of less than 100 microamps, making it ideal for always-on system management in battery-powered and thermally constrained systems.",
        decisionGuide: "Ultra-low static power for always-on applications.",
        keywords: ["static power", "100 uA", "always-on"]
      },
      {
        question: "What interfaces are supported?",
        answer: "The LCMXO3LF-4300C supports I2C, SPI, and parallel bus interfaces for flexible system connectivity and configuration. These enable communication with processors and microcontrollers.",
        decisionGuide: "Multiple interfaces for flexible system integration.",
        keywords: ["I2C", "SPI", "interfaces", "connectivity"]
      },
      {
        question: "What development tools are used?",
        answer: "Lattice Diamond design software provides comprehensive support for MachXO3 device development including synthesis, simulation, place and route, and programming capabilities.",
        decisionGuide: "Use Lattice Diamond for MachXO3 development.",
        keywords: ["Diamond", "development tools", "MachXO3"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The LCMXO3LF-4300C is our recommendation for complex system management requiring more than the 2100C can provide. We've used it in high-end servers with 12+ power rails and complex reset hierarchies.",
      highlight: "Higher capacity MachXO3 for complex system management"
    },
    alternativeParts: [
      {
        partNumber: "LCMXO3LF-2100C",
        comparison: "LCMXO3LF-2100C has 2112 LUTs vs 4320",
        reason: "Lower capacity needed",
        useCase: "Simpler system management"
      }
    ],
    companionParts: [
      {
        partNumber: "MachXO3-EVB",
        relationship: "Evaluation Board",
        description: "MachXO3 Evaluation Board"
      }
    ]
  },
  {
    partNumber: "LCMXO5-4800",
    name: "MachXO5-NX 4800 LUT Security FPGA",
    description: "MachXO5-NX advanced security FPGA with 4800 LUTs, hardware root of trust, and maximum I/O for enterprise secure system management.",
    shortDescription: "MachXO5-NX 4800 LUT security FPGA for enterprise secure applications",
    descriptionParagraphs: [
      "The LCMXO5-4800 is the highest capacity MachXO5-NX device, providing 4800 LUTs with comprehensive security features. It delivers enterprise-level secure control with instant-on operation.",
      "The device features hardware root of trust with PUF, AES-256 encryption, secure boot, and 144 I/O pins for extensive connectivity. The large logic capacity enables sophisticated secure control functions.",
      "The LCMXO5-4800 is ideal for enterprise secure servers, high-end security gateways, and critical infrastructure requiring maximum logic capacity with hardware security."
    ],
    features: [
      "4800 LUTs",
      "Hardware root of trust",
      "PUF support",
      "AES-256 encryption",
      "Secure boot",
      "144 user I/O",
      "Enterprise security"
    ],
    specifications: {
      "LUTs": "4,800",
      "User I/O": "144",
      "Flash Memory": "1.0 Mbit",
      "Configuration": "Internal Flash",
      "Security": "Hardware root of trust, PUF",
      "Encryption": "AES-256",
      "Authentication": "ECDSA",
      "Static Power": "<150 μA",
      "Packages": "caBGA-400, caBGA-256",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Industrial"
    },
    applications: [
      "Enterprise secure servers",
      "High-end security gateways",
      "Critical infrastructure",
      "Secure data centers",
      "Trusted enterprise platforms"
    ],
    faqs: [
      {
        question: "What makes this the top MachXO5-NX choice?",
        answer: "The LCMXO5-4800 provides the highest capacity in the MachXO5 family with 4800 LUTs and 144 I/O, combined with comprehensive hardware security. It's the ultimate choice for enterprise secure system management.",
        decisionGuide: "Highest capacity MachXO5 with full security features.",
        keywords: ["highest capacity", "enterprise", "security"]
      },
      {
        question: "What security features are included?",
        answer: "The LCMXO5-4800 includes hardware root of trust with PUF for unclonable device identity, AES-256 encryption for data protection, ECDSA authentication for secure boot, and comprehensive tamper detection.",
        decisionGuide: "Comprehensive hardware security for critical applications.",
        keywords: ["security", "root of trust", "PUF", "encryption"]
      },
      {
        question: "What is the difference between MachXO3 and MachXO5-NX?",
        answer: "MachXO5-NX adds advanced security features including hardware root of trust, encryption, and secure boot that MachXO3 doesn't have. Both provide instant-on configuration and ultra-low power. Choose MachXO5-NX for security-critical applications.",
        decisionGuide: "MachXO5-NX for security; MachXO3 for basic control.",
        keywords: ["MachXO3", "MachXO5", "security", "comparison"]
      },
      {
        question: "What is PUF?",
        answer: "PUF (Physically Unclonable Function) leverages manufacturing process variations to create a unique, unclonable digital fingerprint for each device. This enables secure key generation and device authentication.",
        decisionGuide: "PUF provides unclonable device identity.",
        keywords: ["PUF", "physically unclonable function", "security"]
      },
      {
        question: "What development tools are used?",
        answer: "Lattice Diamond design software supports MachXO5-NX devices with security configuration capabilities, enabling developers to implement secure boot, encryption, and authentication features.",
        decisionGuide: "Use Lattice Diamond for MachXO5-NX development.",
        keywords: ["Diamond", "development tools", "MachXO5"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The LCMXO5-4800 is our flagship secure control FPGA. We've deployed it in the most demanding enterprise security applications where both high logic capacity and hardware security are essential.",
      highlight: "Flagship MachXO5 with maximum capacity and security"
    },
    alternativeParts: [
      {
        partNumber: "LCMXO5-2400",
        comparison: "LCMXO5-2400 has 2400 LUTs vs 4800",
        reason: "Lower capacity needed",
        useCase: "Less complex secure systems"
      }
    ],
    companionParts: [
      {
        partNumber: "MachXO5-EVB",
        relationship: "Evaluation Board",
        description: "MachXO5-NX Evaluation Board"
      }
    ]
  }
];

// Category 3: CrossLink-NX MIPI - Already has 4 products, add 2 more
const cat3 = products.categories[2];
const existingProducts3 = cat3.products;
cat3.products = [
  ...existingProducts3,
  {
    partNumber: "LIF-MD6000",
    name: "CrossLinkPlus 6000 LUT MIPI FPGA",
    description: "CrossLinkPlus FPGA with integrated Flash, 6000 LUTs, and instant-on MIPI connectivity for reliable camera and display applications.",
    shortDescription: "CrossLinkPlus 6000 LUT MIPI FPGA with integrated Flash for instant-on operation",
    descriptionParagraphs: [
      "The LIF-MD6000 is a member of the CrossLinkPlus family, featuring integrated non-volatile Flash for instant-on MIPI operation. With 6000 LUTs, it provides reliable camera and display connectivity without external configuration memory.",
      "The device supports up to 6 MIPI D-PHY lanes at 2.5 Gbps per lane, MIPI CSI-2 for cameras, and MIPI DSI for displays. The integrated Flash eliminates configuration time and improves system reliability.",
      "The CrossLinkPlus-6000 is ideal for automotive camera systems, industrial vision, and display applications requiring high reliability and instant-on operation."
    ],
    features: [
      "6000 LUTs",
      "Integrated Flash",
      "Instant-on MIPI",
      "6 MIPI D-PHY lanes",
      "2.5 Gbps per lane",
      "MIPI CSI-2/DSI"
    ],
    specifications: {
      "Logic Cells": "6,000",
      "MIPI Lanes": "6",
      "Data Rate": "2.5 Gbps/lane",
      "Camera Interface": "MIPI CSI-2",
      "Display Interface": "MIPI DSI",
      "Packages": "caBGA-121, WLCSP-36",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Automotive"
    },
    applications: [
      "Automotive cameras",
      "Industrial vision",
      "Display interfaces",
      "High-reliability systems",
      "Instant-on vision"
    ],
    faqs: [
      {
        question: "What is the advantage of integrated Flash?",
        answer: "The integrated Flash provides instant-on operation with zero configuration time, eliminating the need for external configuration memory. This improves system reliability, reduces BOM cost, and simplifies board design.",
        decisionGuide: "Integrated Flash enables instant-on and improves reliability.",
        keywords: ["integrated Flash", "instant-on", "reliability"]
      },
      {
        question: "How many MIPI lanes are supported?",
        answer: "The LIF-MD6000 supports up to 6 MIPI D-PHY lanes, enabling complex multi-camera systems and high-resolution display applications with instant-on capability.",
        decisionGuide: "6 MIPI lanes for multi-camera applications.",
        keywords: ["MIPI lanes", "6 lanes", "multi-camera"]
      },
      {
        question: "What is the difference between CrossLink-NX and CrossLinkPlus?",
        answer: "CrossLinkPlus adds integrated Flash for instant-on operation, while CrossLink-NX requires external configuration. Both provide the same MIPI connectivity features. Choose CrossLinkPlus for high-reliability applications requiring instant-on.",
        decisionGuide: "CrossLinkPlus for instant-on; CrossLink-NX for flexibility.",
        keywords: ["CrossLinkPlus", "CrossLink-NX", "integrated Flash"]
      },
      {
        question: "Is this suitable for automotive applications?",
        answer: "Yes, the LIF-MD6000 is ideal for automotive camera systems requiring high reliability and instant-on operation. The integrated Flash eliminates configuration-related failures common in safety-critical systems.",
        decisionGuide: "Automotive-qualified for camera systems.",
        keywords: ["automotive", "camera", "reliability"]
      },
      {
        question: "What development kit is available?",
        answer: "The CrossLink-NX Evaluation Board supports CrossLinkPlus devices with MIPI camera and display connectors, enabling rapid development of smart vision applications.",
        decisionGuide: "CrossLink-NX Evaluation Board for development.",
        keywords: ["evaluation board", "development kit", "CrossLink"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The LIF-MD6000 is our recommendation for automotive and high-reliability applications. The integrated Flash eliminates configuration-related failures and provides deterministic startup behavior essential for safety-critical systems.",
      highlight: "Integrated Flash for instant-on and high reliability"
    },
    alternativeParts: [
      {
        partNumber: "LCE4X-100",
        comparison: "LCE4X-100 has 96K logic cells vs 6K, no integrated Flash",
        reason: "More logic needed",
        useCase: "Complex processing applications"
      }
    ],
    companionParts: [
      {
        partNumber: "CrossLink-NX-EVB",
        relationship: "Evaluation Board",
        description: "CrossLink-NX evaluation board"
      }
    ]
  },
  {
    partNumber: "LIF-MD3000",
    name: "CrossLinkPlus 3000 LUT MIPI FPGA",
    description: "Compact CrossLinkPlus FPGA with integrated Flash, 3000 LUTs, and instant-on MIPI connectivity for cost-sensitive camera applications.",
    shortDescription: "CrossLinkPlus 3000 LUT MIPI FPGA for cost-sensitive instant-on applications",
    descriptionParagraphs: [
      "The LIF-MD3000 is a compact member of the CrossLinkPlus family, featuring integrated non-volatile Flash for instant-on MIPI operation. With 3000 LUTs, it provides cost-effective camera and display connectivity.",
      "The device supports up to 4 MIPI D-PHY lanes at 2.5 Gbps per lane, MIPI CSI-2 for cameras, and MIPI DSI for displays. The integrated Flash eliminates configuration time and reduces system cost.",
      "The CrossLinkPlus-3000 is ideal for consumer cameras, entry-level surveillance, and cost-sensitive display applications requiring instant-on operation."
    ],
    features: [
      "3000 LUTs",
      "Integrated Flash",
      "Instant-on MIPI",
      "4 MIPI D-PHY lanes",
      "2.5 Gbps per lane",
      "Cost-optimized"
    ],
    specifications: {
      "Logic Cells": "3,000",
      "MIPI Lanes": "4",
      "Data Rate": "2.5 Gbps/lane",
      "Camera Interface": "MIPI CSI-2",
      "Display Interface": "MIPI DSI",
      "Packages": "caBGA-81, WLCSP-25",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Commercial"
    },
    applications: [
      "Consumer cameras",
      "Entry-level surveillance",
      "Cost-sensitive displays",
      "Portable vision devices",
      "Basic video bridging"
    ],
    faqs: [
      {
        question: "What is the cost advantage of LIF-MD3000?",
        answer: "The LIF-MD3000 provides the lowest cost instant-on MIPI solution in the CrossLinkPlus family. The integrated Flash eliminates external configuration memory cost, and the smaller LUT count reduces device cost.",
        decisionGuide: "Lowest cost instant-on MIPI solution.",
        keywords: ["low cost", "cost-effective", "instant-on"]
      },
      {
        question: "How many MIPI lanes does it support?",
        answer: "The LIF-MD3000 supports up to 4 MIPI D-PHY lanes, making it suitable for single-camera or dual-camera applications with moderate bandwidth requirements.",
        decisionGuide: "4 MIPI lanes for cost-sensitive applications.",
        keywords: ["MIPI lanes", "4 lanes", "cost-effective"]
      },
      {
        question: "What video resolutions are supported?",
        answer: "With 4 MIPI lanes at 2.5 Gbps each, the LIF-MD3000 supports 1080p video at high frame rates and 4K video at 30fps, suitable for most consumer camera applications.",
        decisionGuide: "Supports 1080p and 4K@30fps video.",
        keywords: ["1080p", "4K", "video resolution"]
      },
      {
        question: "What is the difference from LIF-MD6000?",
        answer: "The LIF-MD3000 has 3000 LUTs vs 6000, and 4 MIPI lanes vs 6. Both provide integrated Flash and instant-on capability. Choose MD3000 for cost-sensitive applications, MD6000 for more complex systems.",
        decisionGuide: "MD3000 for cost; MD6000 for capacity.",
        keywords: ["comparison", "LIF-MD3000", "LIF-MD6000"]
      },
      {
        question: "What development kit is available?",
        answer: "The CrossLink-NX Evaluation Board supports the LIF-MD3000 with MIPI camera and display connectors for rapid prototyping.",
        decisionGuide: "CrossLink-NX Evaluation Board for development.",
        keywords: ["evaluation board", "development kit"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The LIF-MD3000 is our recommendation for cost-sensitive consumer applications. It provides essential MIPI functionality with instant-on reliability at a very competitive price point.",
      highlight: "Cost-effective instant-on MIPI solution"
    },
    alternativeParts: [
      {
        partNumber: "LIF-MD6000",
        comparison: "LIF-MD6000 has 6000 LUTs vs 3000, more MIPI lanes",
        reason: "More capacity needed",
        useCase: "More complex applications"
      }
    ],
    companionParts: [
      {
        partNumber: "CrossLink-NX-EVB",
        relationship: "Evaluation Board",
        description: "CrossLink-NX evaluation board"
      }
    ]
  }
];

// Category 4: Development Kits - Already has 4 products, add 2 more
const cat4 = products.categories[3];
const existingProducts4 = cat4.products;
cat4.products = [
  ...existingProducts4,
  {
    partNumber: "MachXO3-EVB",
    name: "MachXO3 Evaluation Board",
    description: "Comprehensive evaluation platform for MachXO3 devices with power sequencing examples and system management demonstrations.",
    shortDescription: "MachXO3 evaluation board with power sequencing and system management examples",
    descriptionParagraphs: [
      "The MachXO3 Evaluation Board provides a comprehensive platform for evaluating and developing with MachXO3 devices. It includes multiple power rails, LEDs, switches, and expansion connectors.",
      "The board features example designs for power sequencing, reset management, and I/O expansion. It includes comprehensive documentation and quick start guides.",
      "The MachXO3-EVB is ideal for evaluating MachXO3 capabilities, developing system management solutions, and prototyping control applications."
    ],
    features: [
      "MachXO3LF-2100C FPGA",
      "Multiple power rails",
      "LED indicators",
      "Push button switches",
      "Expansion connectors",
      "USB programming"
    ],
    specifications: {
      "FPGA": "LCMXO3LF-2100C",
      "Power Rails": "6 programmable",
      "LEDs": "8 status LEDs",
      "Switches": "4 push buttons",
      "Expansion": "PMOD, GPIO headers",
      "Programming": "USB-JTAG",
      "Memory": "N/A",
      "Camera Inputs": "N/A",
      "Display Output": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Commercial"
    },
    applications: [
      "MachXO3 evaluation",
      "Power sequencing development",
      "System management prototyping",
      "Control logic development",
      "I/O expansion testing"
    ],
    faqs: [
      {
        question: "What MachXO3 device is included?",
        answer: "The MachXO3-EVB includes the LCMXO3LF-2100C FPGA with 2112 LUTs. This device is ideal for evaluating MachXO3 capabilities and developing system management solutions.",
        decisionGuide: "LCMXO3LF-2100C included for evaluation.",
        keywords: ["LCMXO3LF-2100C", "MachXO3", "evaluation"]
      },
      {
        question: "What power sequencing examples are provided?",
        answer: "The board includes example designs demonstrating multi-rail power sequencing, programmable delays, voltage monitoring, and fault management typical of server and networking applications.",
        decisionGuide: "Multi-rail sequencing examples included.",
        keywords: ["power sequencing", "examples", "multi-rail"]
      },
      {
        question: "What is the difference from the Breakout Board?",
        answer: "The MachXO3-EVB is a full-featured evaluation board with multiple power rails and comprehensive peripherals. The Breakout Board is a simpler, lower-cost platform for basic evaluation.",
        decisionGuide: "EVB for comprehensive evaluation; Breakout for basic testing.",
        keywords: ["EVB", "Breakout", "comparison"]
      },
      {
        question: "What software is required?",
        answer: "Lattice Diamond design software is required for MachXO3 development. It is available as a free download from the Lattice website.",
        decisionGuide: "Lattice Diamond for MachXO3 development.",
        keywords: ["Diamond", "software", "development tools"]
      },
      {
        question: "Are reference designs provided?",
        answer: "Yes, the evaluation board includes comprehensive reference designs for power sequencing, reset management, and I/O expansion. These serve as starting points for custom development.",
        decisionGuide: "Reference designs included for rapid development.",
        keywords: ["reference designs", "examples", "power sequencing"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The MachXO3-EVB is our recommended starting point for MachXO3 evaluation. The power sequencing examples are particularly valuable for customers new to system management design.",
      highlight: "Comprehensive MachXO3 evaluation platform"
    },
    alternativeParts: [
      {
        partNumber: "MachXO3-Breakout",
        comparison: "Breakout board has fewer features, lower cost",
        reason: "Lower cost option",
        useCase: "Basic evaluation"
      }
    ],
    companionParts: [
      {
        partNumber: "LCMXO3LF-2100C",
        relationship: "Target FPGA",
        description: "MachXO3LF 2100 LUT FPGA for production"
      },
      {
        partNumber: "Platform-Cable-USB",
        relationship: "Programming Cable",
        description: "USB programming cable"
      }
    ]
  },
  {
    partNumber: "MachXO5-EVB",
    name: "MachXO5-NX Evaluation Board",
    description: "Advanced evaluation platform for MachXO5-NX security FPGAs with hardware root of trust demonstrations and secure boot examples.",
    shortDescription: "MachXO5-NX evaluation board with security demonstrations and secure boot examples",
    descriptionParagraphs: [
      "The MachXO5-NX Evaluation Board provides a comprehensive platform for evaluating MachXO5-NX security features. It includes hardware root of trust demonstrations, secure boot examples, and platform firmware resiliency implementations.",
      "The board features the LCMXO5-1200 FPGA with security features enabled, comprehensive debugging capabilities, and expansion connectors for system integration testing.",
      "The MachXO5-EVB is ideal for evaluating hardware security features, developing secure system management solutions, and prototyping platform protection applications."
    ],
    features: [
      "LCMXO5-1200 FPGA",
      "Hardware root of trust demo",
      "Secure boot examples",
      "PUF demonstration",
      "Expansion connectors",
      "USB programming"
    ],
    specifications: {
      "FPGA": "LCMXO5-1200",
      "Security Features": "Root of trust, Secure boot",
      "Debug Interface": "JTAG",
      "Expansion": "PMOD, GPIO headers",
      "Programming": "USB-JTAG",
      "Memory": "N/A",
      "Camera Inputs": "N/A",
      "Display Output": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "Commercial"
    },
    applications: [
      "MachXO5 evaluation",
      "Security feature testing",
      "Secure boot development",
      "Platform protection prototyping",
      "Hardware root of trust evaluation"
    ],
    faqs: [
      {
        question: "What security demonstrations are included?",
        answer: "The board includes demonstrations of hardware root of trust, PUF-based device identity, AES-256 encryption, secure boot verification, and platform firmware resiliency implementations.",
        decisionGuide: "Comprehensive security demonstrations included.",
        keywords: ["security", "root of trust", "secure boot", "PUF"]
      },
      {
        question: "What is platform firmware resiliency?",
        answer: "Platform Firmware Resiliency (PFR) protects system firmware from attacks by monitoring integrity and automatically recovering to known-good firmware if corruption is detected. The board demonstrates PFR implementation.",
        decisionGuide: "PFR demonstration for firmware protection.",
        keywords: ["PFR", "firmware resiliency", "protection"]
      },
      {
        question: "What is the difference from MachXO3-EVB?",
        answer: "The MachXO5-EVB focuses on security features and includes demonstrations of hardware root of trust, secure boot, and PFR. The MachXO3-EVB focuses on general system management without security features.",
        decisionGuide: "MachXO5-EVB for security; MachXO3-EVB for general control.",
        keywords: ["MachXO5", "MachXO3", "security", "comparison"]
      },
      {
        question: "What software is required?",
        answer: "Lattice Diamond design software with security configuration capabilities is required for MachXO5-NX development. It is available as a free download.",
        decisionGuide: "Lattice Diamond for MachXO5-NX development.",
        keywords: ["Diamond", "software", "security configuration"]
      },
      {
        question: "Can I implement custom security solutions?",
        answer: "Yes, the evaluation board provides the foundation for developing custom security solutions using MachXO5-NX hardware security features. Reference designs demonstrate best practices for secure system implementation.",
        decisionGuide: "Custom security development supported.",
        keywords: ["custom security", "development", "reference designs"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The MachXO5-EVB is essential for evaluating MachXO5-NX security features. The PFR demonstrations are particularly valuable for customers implementing secure boot and platform protection.",
      highlight: "Security-focused evaluation platform"
    },
    alternativeParts: [
      {
        partNumber: "MachXO3-EVB",
        comparison: "MachXO3-EVB has no security features",
        reason: "Security not needed",
        useCase: "General control evaluation"
      }
    ],
    companionParts: [
      {
        partNumber: "LCMXO5-1200",
        relationship: "Target FPGA",
        description: "MachXO5-NX 1200 LUT FPGA for production"
      },
      {
        partNumber: "Platform-Cable-USB",
        relationship: "Programming Cable",
        description: "USB programming cable"
      }
    ]
  }
];

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Products updated successfully!');
console.log('Category 1 (Nexus Platform): ' + products.categories[0].products.length + ' products');
console.log('Category 2 (MachXO Control): ' + products.categories[1].products.length + ' products');
console.log('Category 3 (CrossLink-NX MIPI): ' + products.categories[2].products.length + ' products');
console.log('Category 4 (Development Kits): ' + products.categories[3].products.length + ' products');
