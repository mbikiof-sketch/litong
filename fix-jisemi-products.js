const fs = require('fs');

const productsPath = 'data/jisemi/products.json';
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 1: Automotive Ethernet PHY - Add 4 more products (total 6)
const cat1 = products.categories[0];
const existingJL1001 = cat1.products[0];
const existingJL5001 = cat1.products[1];
cat1.products = [
  existingJL1001,
  existingJL5001,
  {
    partNumber: "JL1002",
    name: "100BASE-T1 Enhanced Automotive Ethernet PHY",
    shortDescription: "Enhanced 100Mbps automotive Ethernet PHY with advanced diagnostics and improved EMC performance for body electronics.",
    descriptionParagraphs: [
      "The JL1002 is an enhanced version of the JL1001, featuring advanced diagnostic capabilities and improved EMC performance for demanding automotive applications.",
      "With comprehensive cable diagnostics, eye diagram monitoring, and enhanced BIST features, the JL1002 enables predictive maintenance and improved manufacturing yield.",
      "The device maintains the same low power consumption and AEC-Q100 Grade 1 qualification as the JL1001, making it an excellent upgrade path for existing designs."
    ],
    specifications: {
      "Data Rate": "100 Mbps",
      "Standard": "IEEE 802.3bw (100BASE-T1)",
      "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
      "Power Consumption": "<100mW (active)",
      "Cable Reach": "Up to 15m",
      "MAC Interface": "MII/RMII/RGMII",
      "Supply Voltage": "3.3V/1.8V",
      "Package": "QFN-32 (5x5mm)",
      "ASIL Support": "ASIL-B capable",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "Enhanced cable diagnostics with eye diagram",
      "Advanced BIST capabilities",
      "Improved EMC performance",
      "AEC-Q100 Grade 1 qualified",
      "Pin-compatible with JL1001",
      "Comprehensive link monitoring"
    ],
    applications: [
      "Body electronics modules",
      "Diagnostic interfaces",
      "Infotainment systems",
      "Telematics units",
      "Gateway modules"
    ],
    faeReview: {
      author: "David Zhang",
      title: "Senior FAE - Automotive Connectivity",
      content: "The JL1002 is my recommendation for customers who need enhanced diagnostics without changing their hardware design. The eye diagram feature is particularly valuable for identifying marginal cable installations before they cause field failures. I've seen customers reduce warranty returns by 30% after implementing the advanced diagnostics. The pin compatibility with JL1001 makes it an easy upgrade path.",
      highlight: "Enhanced diagnostics with eye diagram monitoring for predictive maintenance"
    },
    alternativeParts: [
      {
        partNumber: "JL1001",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl1001.html",
        reason: "Basic version for cost-sensitive applications",
        useCase: "Cost optimization",
        specifications: {
          "Data Rate": "100 Mbps",
          "Temperature": "-40°C to +125°C"
        },
        comparison: {
          "Data Rate": "100 Mbps = 100 Mbps",
          "Diagnostics": "Basic < Enhanced",
          "Price": "Lower"
        }
      },
      {
        partNumber: "JL1010",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl1010.html",
        reason: "Dual-port version for gateway applications",
        useCase: "Multi-port designs",
        specifications: {
          "Data Rate": "100 Mbps per port",
          "Ports": "2"
        },
        comparison: {
          "Ports": "2 > 1",
          "Integration": "Higher for gateways"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL2001",
        category: "SerDes",
        description: "Camera SerDes for video connectivity",
        link: "/jisemi/products/serdes/jl2001.html"
      },
      {
        partNumber: "JL5001",
        category: "Automotive Ethernet",
        description: "1Gbps PHY for higher bandwidth",
        link: "/jisemi/products/automotive-ethernet/jl5001.html"
      },
      {
        partNumber: "JL9001",
        category: "Interface ICs",
        description: "Ethernet switch with integrated PHYs",
        link: "/jisemi/products/interface-ics/jl9001.html"
      }
    ],
    faqs: [
      {
        question: "What is the difference between JL1001 and JL1002?",
        answer: "The JL1002 is an enhanced version of JL1001 with advanced diagnostic features including eye diagram monitoring and improved BIST capabilities. Both devices are pin-compatible and share the same electrical specifications, making JL1002 an easy upgrade path.",
        decisionGuide: "Choose JL1002 for enhanced diagnostics; JL1001 for basic requirements.",
        keywords: ["JL1001", "JL1002", "comparison", "enhanced"]
      },
      {
        question: "What diagnostic features does JL1002 offer?",
        answer: "JL1002 provides comprehensive diagnostics: Eye diagram monitoring for signal quality assessment, advanced cable fault detection with 0.5m resolution, link quality trending for predictive maintenance, comprehensive BIST with loopback modes, and temperature/voltage monitoring.",
        decisionGuide: "Use eye diagram for signal quality assessment and trending for predictive maintenance.",
        keywords: ["diagnostics", "eye diagram", "predictive maintenance"]
      },
      {
        question: "Is JL1002 pin-compatible with JL1001?",
        answer: "Yes, JL1002 is fully pin-compatible with JL1001. Existing designs can upgrade to JL1002 without PCB changes. The enhanced features are accessed through additional register bits that are ignored by JL1001, ensuring backward compatibility.",
        decisionGuide: "Direct replacement for JL1001 with enhanced capabilities.",
        keywords: ["pin-compatible", "upgrade", "backward compatible"]
      },
      {
        question: "How does eye diagram monitoring work?",
        answer: "The JL1002 eye diagram feature samples the received signal at multiple points within the bit period to create a visual representation of signal quality. This helps identify issues like cable degradation, connector problems, or EMI interference before they cause link failures.",
        decisionGuide: "Use eye diagram for troubleshooting and quality monitoring.",
        keywords: ["eye diagram", "signal quality", "troubleshooting"]
      },
      {
        question: "What is the price difference between JL1001 and JL1002?",
        answer: "The JL1002 is typically 10-15% higher cost than JL1001 due to enhanced features. However, the improved diagnostics can reduce field failures and warranty costs, often providing overall cost savings in high-reliability applications.",
        decisionGuide: "Cost-effective upgrade for applications requiring enhanced diagnostics.",
        keywords: ["price", "cost", "value"]
      },
      {
        question: "What applications benefit most from JL1002?",
        answer: "Applications that benefit most include: Safety-critical systems requiring predictive maintenance, High-volume production where diagnostics improve yield, Remote or difficult-to-service installations, Systems requiring detailed failure analysis, Applications with long design lifecycles.",
        decisionGuide: "Ideal for safety-critical and high-reliability applications.",
        keywords: ["applications", "safety-critical", "high-reliability"]
      }
    ]
  },
  {
    partNumber: "JL1010",
    name: "Dual-Port 100BASE-T1 Automotive Ethernet PHY",
    shortDescription: "Dual-port 100Mbps automotive Ethernet PHY with integrated switch features for gateway and domain controller applications.",
    descriptionParagraphs: [
      "The JL1010 is a dual-port 100BASE-T1 automotive Ethernet PHY designed for gateway and domain controller applications. It integrates two independent PHYs in a single package, reducing BOM cost and PCB area.",
      "With built-in layer-2 switching capabilities, the JL1010 can forward traffic between ports without host processor intervention, reducing latency and CPU load.",
      "The device supports AEC-Q100 Grade 1 qualification and ASIL-B functional safety, making it suitable for safety-critical gateway applications."
    ],
    specifications: {
      "Data Rate": "100 Mbps per port",
      "Ports": "2",
      "Standard": "IEEE 802.3bw (100BASE-T1)",
      "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
      "Power Consumption": "<150mW (active)",
      "Cable Reach": "Up to 15m per port",
      "MAC Interface": "RMII/RGMII",
      "Supply Voltage": "3.3V/1.8V",
      "Package": "QFN-48 (7x7mm)",
      "ASIL Support": "ASIL-B",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "Dual 100BASE-T1 PHYs in single package",
      "Integrated layer-2 switching",
      "AEC-Q100 Grade 1 qualified",
      "ASIL-B functional safety support",
      "Low latency port-to-port forwarding",
      "Comprehensive diagnostics per port"
    ],
    applications: [
      "Central gateways",
      "Domain controllers",
      "Zone controllers",
      "Switch modules",
      "Network aggregation"
    ],
    faeReview: {
      author: "Sarah Chen",
      title: "Senior FAE - Gateway Applications",
      content: "The JL1010 is perfect for gateway applications where space and cost are critical. The integrated switch capability eliminates the need for a separate switch IC in small gateway designs. I've used this in domain controllers where the two ports handle different network segments. The port-to-port forwarding latency is under 10 microseconds, excellent for real-time applications. The single-package solution also simplifies thermal management.",
      highlight: "Dual-port integration reduces BOM cost and PCB area for gateways"
    },
    alternativeParts: [
      {
        partNumber: "JL1001",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl1001.html",
        reason: "Single-port version for simpler designs",
        useCase: "Single-port applications",
        specifications: {
          "Data Rate": "100 Mbps",
          "Ports": "1"
        },
        comparison: {
          "Ports": "1 < 2",
          "Cost": "Lower per single port"
        }
      },
      {
        partNumber: "JL1020",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl1020.html",
        reason: "Quad-port version for larger switches",
        useCase: "Multi-port switches",
        specifications: {
          "Data Rate": "100 Mbps per port",
          "Ports": "4"
        },
        comparison: {
          "Ports": "4 > 2",
          "Integration": "Higher for large switches"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL5001",
        category: "Automotive Ethernet",
        description: "1Gbps PHY for backbone connectivity",
        link: "/jisemi/products/automotive-ethernet/jl5001.html"
      },
      {
        partNumber: "JL9002",
        category: "Interface ICs",
        description: "Multi-port Ethernet switch",
        link: "/jisemi/products/interface-ics/jl9002.html"
      },
      {
        partNumber: "JL2001",
        category: "SerDes",
        description: "Camera SerDes for video connectivity",
        link: "/jisemi/products/serdes/jl2001.html"
      }
    ],
    faqs: [
      {
        question: "What is the advantage of JL1010 over two JL1001 devices?",
        answer: "The JL1010 offers several advantages: Reduced PCB area (single package vs two), Lower BOM cost (typically 20-30% savings), Integrated switching (no external switch needed), Simplified thermal management, Better port-to-port latency, Reduced power consumption.",
        decisionGuide: "Cost-effective solution for dual-port gateway applications.",
        keywords: ["dual-port", "integration", "cost savings"]
      },
      {
        question: "Does JL1010 support switching between ports?",
        answer: "Yes, JL1010 includes integrated layer-2 switching capabilities. It can forward frames between ports based on MAC address learning without host processor intervention. This reduces CPU load and forwarding latency compared to using separate PHYs with external switch.",
        decisionGuide: "Built-in switching reduces external component count.",
        keywords: ["switching", "layer-2", "forwarding"]
      },
      {
        question: "What is the port-to-port forwarding latency?",
        answer: "The JL1010 achieves port-to-port forwarding latency of less than 10 microseconds. This low latency makes it suitable for real-time applications and time-sensitive networking (TSN) implementations where deterministic performance is required.",
        decisionGuide: "Low latency suitable for real-time and TSN applications.",
        keywords: ["latency", "real-time", "TSN"]
      },
      {
        question: "Can JL1010 operate as two independent PHYs?",
        answer: "Yes, JL1010 can operate in two modes: Switch mode (ports forward between each other) or Independent mode (each port connects to host separately). The mode is configurable through register settings, providing flexibility for different application architectures.",
        decisionGuide: "Flexible operation modes for different architectures.",
        keywords: ["operation modes", "independent", "switch mode"]
      },
      {
        question: "What safety features does JL1010 include?",
        answer: "JL1010 supports ASIL-B functional safety with features including: Built-in self-test (BIST) for each port, CRC checking on configuration registers, Watchdog timer for switch function, Error counters for fault detection, Safe state configuration, Comprehensive diagnostic coverage.",
        decisionGuide: "ASIL-B support for safety-critical gateway applications.",
        keywords: ["ASIL-B", "functional safety", "BIST"]
      }
    ]
  },
  {
    partNumber: "JL5002",
    name: "1000BASE-T1 ASIL-D Automotive Ethernet PHY",
    shortDescription: "High-safety 1Gbps automotive Ethernet PHY with ASIL-D support for autonomous driving and safety-critical applications.",
    descriptionParagraphs: [
      "The JL5002 is a high-safety 1000BASE-T1 automotive Ethernet PHY designed for autonomous driving and safety-critical applications requiring ASIL-D functional safety.",
      "With comprehensive safety mechanisms including redundant data paths, extensive error detection, and fault injection capabilities, the JL5002 meets the stringent requirements of ISO 26262 ASIL-D.",
      "The device provides the same 1 Gbps performance as JL5001 while adding the safety features necessary for autonomous driving systems and ADAS applications."
    ],
    specifications: {
      "Data Rate": "1 Gbps",
      "Standard": "IEEE 802.3bp (1000BASE-T1)",
      "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
      "Power Consumption": "<350mW (active)",
      "Cable Reach": "Up to 15m",
      "MAC Interface": "RGMII/SGMII",
      "Supply Voltage": "3.3V/1.8V/1.0V",
      "Package": "QFN-48 (7x7mm)",
      "ASIL Support": "ASIL-D",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "ASIL-D functional safety support",
      "IEEE 802.3bp 1000BASE-T1 compliant",
      "Redundant data paths",
      "Extensive error detection",
      "Fault injection capabilities",
      "AEC-Q100 Grade 1 qualified",
      "Comprehensive safety documentation"
    ],
    applications: [
      "Autonomous driving systems",
      "ADAS domain controllers",
      "Safety-critical sensors",
      "High-availability gateways",
      "Redundant network paths"
    ],
    faeReview: {
      author: "Dr. James Wang",
      title: "Principal FAE - Functional Safety",
      content: "The JL5002 is essential for autonomous driving applications requiring ASIL-D. The safety mechanisms are comprehensive - redundant data paths, extensive error detection, and fault injection for testing. I've worked with OEMs to achieve ASIL-D certification using this device. The safety documentation including FMEDA is thorough and has passed multiple third-party assessments. The performance is identical to JL5001, so you get safety without sacrificing bandwidth.",
      highlight: "ASIL-D support for autonomous driving and safety-critical systems"
    },
    alternativeParts: [
      {
        partNumber: "JL5001",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl5001.html",
        reason: "ASIL-B version for less critical applications",
        useCase: "Non-safety-critical designs",
        specifications: {
          "Data Rate": "1 Gbps",
          "ASIL": "ASIL-B"
        },
        comparison: {
          "Data Rate": "1 Gbps = 1 Gbps",
          "ASIL": "ASIL-B < ASIL-D",
          "Cost": "Lower"
        }
      },
      {
        partNumber: "JL5010",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl5010.html",
        reason: "Multi-gigabit version for higher bandwidth",
        useCase: "Higher bandwidth needs",
        specifications: {
          "Data Rate": "2.5/5/10 Gbps",
          "ASIL": "ASIL-D"
        },
        comparison: {
          "Data Rate": "2.5/5/10 Gbps > 1 Gbps",
          "ASIL": "ASIL-D = ASIL-D"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL2002",
        category: "SerDes",
        description: "High-speed SerDes for camera connectivity",
        link: "/jisemi/products/serdes/jl2002.html"
      },
      {
        partNumber: "JL9003",
        category: "Interface ICs",
        description: "Safety Ethernet switch with redundancy",
        link: "/jisemi/products/interface-ics/jl9003.html"
      },
      {
        partNumber: "JL4001",
        category: "SerDes",
        description: "4Gbps SerDes for high-res cameras",
        link: "/jisemi/products/serdes/jl4001.html"
      }
    ],
    faqs: [
      {
        question: "What is the difference between ASIL-B and ASIL-D?",
        answer: "ASIL-D is the highest automotive safety integrity level per ISO 26262, requiring more stringent safety measures than ASIL-B. Key differences: Single-point fault coverage: ASIL-D requires >99% vs >90% for ASIL-B. Latent fault coverage: ASIL-D requires >90% vs >60% for ASIL-B. Documentation: ASIL-D requires more extensive safety analysis. JL5002 includes additional hardware safety mechanisms to achieve ASIL-D.",
        decisionGuide: "Use ASIL-D for autonomous driving; ASIL-B for ADAS and less critical systems.",
        keywords: ["ASIL-D", "ASIL-B", "functional safety", "ISO 26262"]
      },
      {
        question: "What safety mechanisms does JL5002 include?",
        answer: "JL5002 includes comprehensive safety mechanisms: Redundant data paths with comparison, Extensive error detection (CRC, parity, timeout), Fault injection for testing diagnostic coverage, Safe state on fault detection, Comprehensive BIST with high coverage, Temperature and voltage monitoring, Error counters for fault logging, Watchdog timer.",
        decisionGuide: "Comprehensive safety mechanisms achieve ASIL-D requirements.",
        keywords: ["safety mechanisms", "redundancy", "error detection"]
      },
      {
        question: "Is JL5002 pin-compatible with JL5001?",
        answer: "JL5002 is largely pin-compatible with JL5001 with some additional pins for safety features. The main data and control interfaces are identical, allowing design reuse. Additional pins support: Safety monitoring outputs, Fault injection control, Extended diagnostics, Redundancy status.",
        decisionGuide: "Mostly pin-compatible with additional safety pins.",
        keywords: ["pin-compatible", "upgrade", "safety pins"]
      },
      {
        question: "What documentation is provided for ASIL-D certification?",
        answer: "Jisemi provides comprehensive safety documentation including: Safety Manual with safety requirements, FMEDA (Failure Modes Effects and Diagnostics Analysis), Safety Case template, Fault injection test procedures, Diagnostic coverage analysis, Dependent failure analysis. This documentation supports ISO 26262 certification efforts.",
        decisionGuide: "Complete safety documentation package for ASIL-D certification.",
        keywords: ["safety documentation", "FMEDA", "ISO 26262", "certification"]
      },
      {
        question: "What is the power consumption difference vs JL5001?",
        answer: "JL5002 consumes approximately 15-20% more power than JL5001 due to redundant circuits and additional safety logic. Typical active power is <350mW vs <300mW for JL5001. This is a reasonable trade-off for the safety benefits in critical applications.",
        decisionGuide: "Moderate power increase for ASIL-D safety features.",
        keywords: ["power consumption", "trade-off", "safety"]
      }
    ]
  },
  {
    partNumber: "JL5010",
    name: "MultiGBASE-T1 10Gbps Automotive Ethernet PHY",
    shortDescription: "High-speed 10Gbps automotive Ethernet PHY for next-generation autonomous driving and high-bandwidth backbone applications.",
    descriptionParagraphs: [
      "The JL5010 is a cutting-edge MultiGBASE-T1 automotive Ethernet PHY supporting 2.5/5/10 Gbps data rates per IEEE 802.3ch standard. It enables high-bandwidth connectivity for next-generation autonomous driving systems.",
      "With support for 10 Gbps over single-pair cabling, the JL5010 provides the bandwidth necessary for high-resolution sensor fusion, multiple 4K cameras, and high-speed backbone networks.",
      "The device includes advanced signal processing for robust operation over automotive cables and supports ASIL-B functional safety for safety-critical applications."
    ],
    specifications: {
      "Data Rate": "2.5/5/10 Gbps",
      "Standard": "IEEE 802.3ch (MultiGBASE-T1)",
      "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
      "Power Consumption": "<800mW (10G active)",
      "Cable Reach": "Up to 15m (10G)",
      "MAC Interface": "XFI/USXGMII",
      "Supply Voltage": "3.3V/1.8V/1.0V",
      "Package": "QFN-56 (8x8mm)",
      "ASIL Support": "ASIL-B",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "2.5/5/10 Gbps data rates",
      "IEEE 802.3ch compliant",
      "AEC-Q100 Grade 1 qualified",
      "ASIL-B functional safety support",
      "Advanced signal processing",
      "XFI/USXGMII MAC interfaces",
      "Low latency design",
      "Comprehensive diagnostics"
    ],
    applications: [
      "Autonomous driving backbone",
      "High-resolution camera arrays",
      "LiDAR connectivity",
      "Sensor fusion systems",
      "High-bandwidth gateways"
    ],
    faeReview: {
      author: "Dr. Robert Liu",
      title: "Principal FAE - High-Speed Networking",
      content: "The JL5010 represents the cutting edge of automotive Ethernet technology. The 10 Gbps capability enables next-generation autonomous driving systems with massive sensor data requirements. I've worked with OEMs designing backbone networks that aggregate data from 20+ sensors. The signal processing is impressive - maintaining 10 Gbps over 15m of automotive cable is no small feat. The power consumption is higher than lower-speed PHYs, but the bandwidth is essential for L4/L5 autonomous driving.",
      highlight: "10 Gbps capability for next-gen autonomous driving systems"
    },
    alternativeParts: [
      {
        partNumber: "JL5001",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl5001.html",
        reason: "1Gbps version for lower bandwidth needs",
        useCase: "Standard ADAS applications",
        specifications: {
          "Data Rate": "1 Gbps",
          "Power": "<300mW"
        },
        comparison: {
          "Data Rate": "1 Gbps < 10 Gbps",
          "Power": "Lower",
          "Cost": "Significantly lower"
        }
      },
      {
        partNumber: "JL5002",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl5002.html",
        reason: "ASIL-D 1Gbps for safety-critical",
        useCase: "Safety-critical lower bandwidth",
        specifications: {
          "Data Rate": "1 Gbps",
          "ASIL": "ASIL-D"
        },
        comparison: {
          "Data Rate": "1 Gbps < 10 Gbps",
          "ASIL": "ASIL-D > ASIL-B"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL4001",
        category: "SerDes",
        description: "4Gbps SerDes for camera connectivity",
        link: "/jisemi/products/serdes/jl4001.html"
      },
      {
        partNumber: "JL9004",
        category: "Interface ICs",
        description: "10G Ethernet switch for aggregation",
        link: "/jisemi/products/interface-ics/jl9004.html"
      },
      {
        partNumber: "JL6001",
        category: "SerDes",
        description: "12Gbps SerDes for LiDAR",
        link: "/jisemi/products/serdes/jl6001.html"
      }
    ],
    faqs: [
      {
        question: "What applications need 10 Gbps automotive Ethernet?",
        answer: "10 Gbps is needed for: High-resolution camera arrays (8+ 4K cameras), LiDAR point cloud data (high-resolution units), Sensor fusion systems combining multiple high-bandwidth sources, Backbone networks aggregating zone data, 4K/8K display connectivity, Raw sensor data for AI processing. Current ADAS typically uses 1 Gbps; L4/L5 autonomous driving requires 10 Gbps.",
        decisionGuide: "10 Gbps essential for L4/L5 autonomous driving and massive sensor arrays.",
        keywords: ["10 Gbps", "autonomous driving", "sensor fusion", "backbone"]
      },
      {
        question: "What cable is required for 10 Gbps?",
        answer: "10 Gbps requires high-quality cable: Recommended: High-grade coaxial cable (RG-174 or better), Alternative: High-quality shielded twisted pair (STP) for shorter runs. Cable quality significantly affects reach and reliability. Use certified automotive-grade cables for production.",
        decisionGuide: "High-quality coaxial cable recommended for 10 Gbps operation.",
        keywords: ["cable", "coaxial", "10 Gbps", "signal quality"]
      },
      {
        question: "What is the power consumption at different speeds?",
        answer: "JL5010 power consumption scales with data rate: 2.5 Gbps: ~300mW, 5 Gbps: ~500mW, 10 Gbps: ~800mW. Lower speeds can be used to reduce power when full bandwidth isn't needed. The device supports dynamic rate switching.",
        decisionGuide: "Power scales with speed; use lowest speed that meets bandwidth needs.",
        keywords: ["power consumption", "data rate", "scaling"]
      },
      {
        question: "Is 10 Gbps backward compatible with 1 Gbps?",
        answer: "Yes, JL5010 supports auto-negotiation and can operate at 2.5/5/10 Gbps. It can interoperate with 1 Gbps devices through switch infrastructure. The device supports rate adaptation for power savings and compatibility.",
        decisionGuide: "Flexible rate selection for compatibility and power optimization.",
        keywords: ["backward compatible", "auto-negotiation", "rate adaptation"]
      },
      {
        question: "What MAC interface does JL5010 use?",
        answer: "JL5010 supports XFI (10 Gigabit Serial Interface) and USXGMII (Universal Serial 10GE MII) MAC interfaces. These high-speed serial interfaces reduce pin count and enable efficient PCB routing for 10 Gbps operation.",
        decisionGuide: "XFI/USXGMII interfaces for high-speed serial connectivity.",
        keywords: ["XFI", "USXGMII", "MAC interface", "serial"]
      }
    ]
  }
];

// Category 2: High-Speed SerDes - Add 4 more products (total 6)
const cat2 = products.categories[1];
const existingJL2001 = cat2.products[0];
const existingJL4001 = cat2.products[1];
cat2.products = [
  existingJL2001,
  existingJL4001,
  {
    partNumber: "JL2002",
    name: "2Gbps Enhanced Camera SerDes",
    shortDescription: "Enhanced 2Gbps SerDes with improved equalization and extended cable reach for challenging automotive camera installations.",
    descriptionParagraphs: [
      "The JL2002 is an enhanced version of the JL2001 SerDes pair, featuring improved equalization and signal processing for extended cable reach and better performance in challenging environments.",
      "With advanced adaptive equalization, the JL2002 can achieve reliable transmission over 20+ meters of coaxial cable, enabling flexible camera placement in large vehicles.",
      "The device maintains MIPI CSI-2 compatibility and power-over-coax capability while adding enhanced diagnostics and link quality monitoring."
    ],
    specifications: {
      "Data Rate": "Up to 2 Gbps",
      "Input Interface": "MIPI CSI-2",
      "Output Interface": "MIPI CSI-2",
      "Cable Type": "Coaxial or STP",
      "Cable Reach": "Up to 20m (coaxial)",
      "Power-over-Coax": "Supported",
      "Temperature Range": "-40°C to +125°C",
      "Package": "QFN-32 (Serializer), QFN-48 (Deserializer)",
      "ASIL Support": "ASIL-B",
      "Equalization": "Adaptive",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "Extended cable reach up to 20m",
      "Advanced adaptive equalization",
      "MIPI CSI-2 interface support",
      "Power-over-coax capability",
      "AEC-Q100 Grade 1 qualified",
      "Enhanced diagnostics",
      "Link quality monitoring",
      "Pin-compatible with JL2001"
    ],
    applications: [
      "Large vehicle camera systems",
      "Truck surround-view cameras",
      "Bus rear-view cameras",
      "Long-reach camera installations",
      "Challenging environment cameras"
    ],
    faeReview: {
      author: "Michael Liu",
      title: "Senior FAE - Camera Systems",
      content: "The JL2002 is my go-to recommendation for large vehicles like trucks and buses where cable runs exceed 15 meters. The adaptive equalization really makes a difference - I've seen reliable operation at 22 meters with quality coaxial cable. The enhanced diagnostics help identify cable quality issues during installation. It's pin-compatible with JL2001, so customers can upgrade without PCB changes when they need extended reach.",
      highlight: "Extended 20m+ reach for large vehicle camera applications"
    },
    alternativeParts: [
      {
        partNumber: "JL2001",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl2001.html",
        reason: "Standard version for shorter cable runs",
        useCase: "Standard reach applications",
        specifications: {
          "Data Rate": "2 Gbps",
          "Cable Reach": "15m"
        },
        comparison: {
          "Data Rate": "2 Gbps = 2 Gbps",
          "Cable Reach": "15m < 20m",
          "Cost": "Lower"
        }
      },
      {
        partNumber: "JL4001",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl4001.html",
        reason: "Higher bandwidth for 4K cameras",
        useCase: "High-resolution cameras",
        specifications: {
          "Data Rate": "4 Gbps",
          "Cable Reach": "15m"
        },
        comparison: {
          "Data Rate": "4 Gbps > 2 Gbps",
          "Resolution": "4K > 1080p"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL1001",
        category: "Automotive Ethernet",
        description: "100Mbps Ethernet for camera config",
        link: "/jisemi/products/automotive-ethernet/jl1001.html"
      },
      {
        partNumber: "JL5001",
        category: "Automotive Ethernet",
        description: "1Gbps PHY for backbone",
        link: "/jisemi/products/automotive-ethernet/jl5001.html"
      },
      {
        partNumber: "Coaxial Cable",
        category: "Cables",
        description: "High-quality coaxial for extended reach",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is the maximum cable length for JL2002?",
        answer: "JL2002 supports up to 20 meters of high-quality coaxial cable at 2 Gbps, compared to 15m for JL2001. The actual maximum depends on cable quality, with premium cables achieving 22+ meters. The adaptive equalization automatically optimizes for cable length and quality.",
        decisionGuide: "20m+ reach for large vehicle applications.",
        keywords: ["cable length", "20m", "extended reach", "coaxial"]
      },
      {
        question: "Is JL2002 pin-compatible with JL2001?",
        answer: "Yes, JL2002 is fully pin-compatible with JL2001. The enhanced features are accessed through additional register settings. This allows direct replacement in existing designs when extended reach is needed.",
        decisionGuide: "Direct replacement for JL2001 with extended reach.",
        keywords: ["pin-compatible", "replacement", "upgrade"]
      },
      {
        question: "What cable quality is needed for 20m operation?",
        answer: "For 20m operation, use high-quality coaxial cable: RG-174 or better, Automotive-grade construction, Quality connectors, Proper shielding. Lower quality cables may limit maximum reach or require lower data rates.",
        decisionGuide: "High-quality coaxial cable essential for maximum reach.",
        keywords: ["cable quality", "coaxial", "RG-174"]
      },
      {
        question: "Does JL2002 support the same cameras as JL2001?",
        answer: "Yes, JL2002 supports the same MIPI CSI-2 cameras as JL2001. The interface and protocols are identical. The only difference is the extended cable reach capability.",
        decisionGuide: "Same camera compatibility with extended reach.",
        keywords: ["camera compatibility", "MIPI CSI-2", "interface"]
      },
      {
        question: "What is the price difference vs JL2001?",
        answer: "JL2002 is typically 15-20% higher cost than JL2001 due to enhanced equalization circuitry. However, for applications requiring extended reach, it eliminates the need for signal conditioning or repeaters, often providing overall cost savings.",
        decisionGuide: "Cost-effective for extended reach applications.",
        keywords: ["price", "cost", "value"]
      }
    ]
  },
  {
    partNumber: "JL6001",
    name: "12Gbps High-Speed SerDes",
    shortDescription: "Ultra-high-speed 12Gbps SerDes for LiDAR, high-resolution displays, and advanced sensor applications.",
    descriptionParagraphs: [
      "The JL6001 is a high-performance 12 Gbps SerDes pair designed for demanding applications requiring ultra-high bandwidth. It supports transmission of high-resolution LiDAR data, 8K video, and multi-gigabit sensor streams.",
      "With support for both MIPI CSI-2/DSI and raw data modes, the JL6001 provides flexible connectivity for various high-bandwidth sources including LiDAR, high-res displays, and advanced sensors.",
      "The device includes advanced signal processing for reliable operation over automotive cables and comprehensive diagnostics for production testing and field monitoring."
    ],
    specifications: {
      "Data Rate": "Up to 12 Gbps",
      "Input Interface": "MIPI CSI-2/DSI, Raw",
      "Output Interface": "MIPI CSI-2/DSI, Raw",
      "Cable Type": "Coaxial (recommended)",
      "Cable Reach": "Up to 15m (coaxial)",
      "Power-over-Coax": "Supported",
      "Temperature Range": "-40°C to +125°C",
      "Package": "QFN-40 (Serializer), QFN-56 (Deserializer)",
      "ASIL Support": "ASIL-B",
      "Equalization": "Advanced",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "Up to 12 Gbps data rate",
      "MIPI CSI-2/DSI support",
      "Raw data mode",
      "Power-over-coax capability",
      "AEC-Q100 Grade 1 qualified",
      "Advanced signal processing",
      "Comprehensive diagnostics",
      "Low latency design"
    ],
    applications: [
      "High-resolution LiDAR",
      "8K display connectivity",
      "Advanced radar systems",
      "Multi-gigabit sensors",
      "High-bandwidth data links"
    ],
    faeReview: {
      author: "Dr. Kevin Zhang",
      title: "Principal FAE - High-Speed Interfaces",
      content: "The JL6001 addresses the growing need for ultra-high bandwidth in autonomous driving systems. 12 Gbps enables transmission of high-resolution LiDAR point clouds and 8K video. I've worked with LiDAR manufacturers who need every bit of this bandwidth. The signal processing is impressive - maintaining 12 Gbps over automotive coaxial cable requires sophisticated equalization. The flexibility to support both MIPI and raw data modes is valuable for different sensor types.",
      highlight: "12 Gbps for LiDAR and ultra-high bandwidth applications"
    },
    alternativeParts: [
      {
        partNumber: "JL4001",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl4001.html",
        reason: "4Gbps version for lower bandwidth",
        useCase: "4K camera applications",
        specifications: {
          "Data Rate": "4 Gbps",
          "Cable Reach": "15m"
        },
        comparison: {
          "Data Rate": "4 Gbps < 12 Gbps",
          "Cost": "Lower",
          "Power": "Lower"
        }
      },
      {
        partNumber: "JL8001",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl8001.html",
        reason: "8Gbps mid-range option",
        useCase: "Mid-range bandwidth needs",
        specifications: {
          "Data Rate": "8 Gbps",
          "Cable Reach": "15m"
        },
        comparison: {
          "Data Rate": "8 Gbps < 12 Gbps",
          "Cost": "Mid-range"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL5010",
        category: "Automotive Ethernet",
        description: "10Gbps PHY for backbone",
        link: "/jisemi/products/automotive-ethernet/jl5010.html"
      },
      {
        partNumber: "High-Speed Cable",
        category: "Cables",
        description: "Premium coaxial for 12Gbps",
        link: "#"
      },
      {
        partNumber: "LiDAR Module",
        category: "Sensors",
        description: "High-res LiDAR sensor",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What applications need 12 Gbps SerDes?",
        answer: "12 Gbps is needed for: High-resolution LiDAR (300+ line units), 8K video displays, Advanced imaging radar, Multi-sensor aggregation, Ultra-high bandwidth data links. Standard ADAS cameras use 2-4 Gbps; advanced autonomous driving sensors need 12 Gbps.",
        decisionGuide: "12 Gbps for advanced sensors and ultra-high bandwidth.",
        keywords: ["12 Gbps", "LiDAR", "8K", "advanced sensors"]
      },
      {
        question: "What cable is recommended for 12 Gbps?",
        answer: "12 Gbps requires premium coaxial cable: High-grade RG-174 or RG-316, Quality dielectric material, Proper shielding, Quality connectors. Cable quality significantly affects performance at 12 Gbps. Use certified automotive-grade cables.",
        decisionGuide: "Premium coaxial cable essential for 12 Gbps operation.",
        keywords: ["cable", "coaxial", "12 Gbps", "premium"]
      },
      {
        question: "Does JL6001 support power-over-coax?",
        answer: "Yes, JL6001 supports power-over-coax for remote device powering. However, at 12 Gbps, power delivery may be limited compared to lower-speed SerDes. Consider local power for high-power sensors.",
        decisionGuide: "Power-over-coax supported; consider power requirements.",
        keywords: ["power-over-coax", "PoC", "power delivery"]
      },
      {
        question: "What is the latency of JL6001?",
        answer: "JL6001 features low latency design with typical end-to-end latency of less than 50 nanoseconds. This deterministic low latency is important for real-time sensor applications like LiDAR.",
        decisionGuide: "Ultra-low latency for real-time sensor applications.",
        keywords: ["latency", "real-time", "LiDAR", "nanoseconds"]
      },
      {
        question: "Is JL6001 backward compatible with lower speeds?",
        answer: "Yes, JL6001 supports rate adaptation and can operate at lower speeds (8/4/2 Gbps) for compatibility and power savings. The speed is configurable through register settings.",
        decisionGuide: "Flexible speed selection for compatibility and optimization.",
        keywords: ["backward compatible", "rate adaptation", "flexible"]
      }
    ]
  },
  {
    partNumber: "JL8001",
    name: "8Gbps Mid-Range SerDes",
    shortDescription: "8Gbps SerDes for 4K/8K video, high-resolution cameras, and mid-range sensor applications requiring high bandwidth.",
    descriptionParagraphs: [
      "The JL8001 is an 8 Gbps SerDes pair providing high bandwidth for demanding video and sensor applications. It bridges the gap between 4 Gbps and 12 Gbps solutions.",
      "Supporting 4K/8K video transmission and high-resolution sensor data, the JL8001 is ideal for premium infotainment systems and advanced ADAS cameras.",
      "The device maintains the same reliability and automotive qualification as other Jisemi SerDes while providing cost-effective high-bandwidth connectivity."
    ],
    specifications: {
      "Data Rate": "Up to 8 Gbps",
      "Input Interface": "MIPI CSI-2/DSI",
      "Output Interface": "MIPI CSI-2/DSI",
      "Cable Type": "Coaxial or STP",
      "Cable Reach": "Up to 15m (coaxial)",
      "Power-over-Coax": "Supported",
      "Temperature Range": "-40°C to +125°C",
      "Package": "QFN-40 (Serializer), QFN-48 (Deserializer)",
      "ASIL Support": "ASIL-B",
      "Equalization": "Advanced",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "Up to 8 Gbps data rate",
      "MIPI CSI-2/DSI support",
      "4K/8K video capable",
      "Power-over-coax capability",
      "AEC-Q100 Grade 1 qualified",
      "Cost-effective high bandwidth",
      "Comprehensive diagnostics"
    ],
    applications: [
      "Premium infotainment displays",
      "High-resolution ADAS cameras",
      "4K/8K video systems",
      "Advanced sensors",
      "High-bandwidth data links"
    ],
    faeReview: {
      author: "Michael Liu",
      title: "Senior FAE - Camera Systems",
      content: "The JL8001 hits a sweet spot for premium infotainment and high-res camera applications. 8 Gbps handles 4K60 video comfortably and provides headroom for 8K. I've used this in premium vehicle infotainment systems with multiple high-res displays. The cost is reasonable compared to 12 Gbps solutions while providing significantly more bandwidth than 4 Gbps. It's a good middle-ground solution.",
      highlight: "Cost-effective 8 Gbps for premium video applications"
    },
    alternativeParts: [
      {
        partNumber: "JL4001",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl4001.html",
        reason: "4Gbps for standard 4K",
        useCase: "Standard 4K cameras",
        specifications: {
          "Data Rate": "4 Gbps",
          "Cable Reach": "15m"
        },
        comparison: {
          "Data Rate": "4 Gbps < 8 Gbps",
          "Cost": "Lower"
        }
      },
      {
        partNumber: "JL6001",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl6001.html",
        reason: "12Gbps for maximum bandwidth",
        useCase: "LiDAR and 8K",
        specifications: {
          "Data Rate": "12 Gbps",
          "Cable Reach": "15m"
        },
        comparison: {
          "Data Rate": "12 Gbps > 8 Gbps",
          "Cost": "Higher"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL5001",
        category: "Automotive Ethernet",
        description: "1Gbps PHY for control",
        link: "/jisemi/products/automotive-ethernet/jl5001.html"
      },
      {
        partNumber: "4K Camera Module",
        category: "Sensors",
        description: "High-res camera sensor",
        link: "#"
      },
      {
        partNumber: "8K Display",
        category: "Displays",
        description: "Ultra-high-res display panel",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What video formats does JL8001 support?",
        answer: "JL8001 supports: 4K60 (3840x2160 at 60fps), 4K120 (with compression), 8K30 (7680x4320 at 30fps), Various RAW formats. The 8 Gbps bandwidth provides flexibility for different video formats and frame rates.",
        decisionGuide: "8 Gbps supports 4K60 and 8K30 video formats.",
        keywords: ["4K", "8K", "video formats", "bandwidth"]
      },
      {
        question: "Is JL8001 suitable for ADAS cameras?",
        answer: "Yes, JL8001 is excellent for high-resolution ADAS cameras requiring 4K or higher resolution. It provides sufficient bandwidth for high-quality video with headroom for future resolution increases.",
        decisionGuide: "Ideal for high-resolution ADAS camera applications.",
        keywords: ["ADAS", "cameras", "high-resolution"]
      },
      {
        question: "What is the power consumption of JL8001?",
        answer: "JL8001 power consumption is moderate: Active mode: ~400mW (serializer + deserializer), Standby mode: ~50mW, Sleep mode: <5mW. Power scales with data rate and can be optimized for specific applications.",
        decisionGuide: "Moderate power consumption for high bandwidth.",
        keywords: ["power consumption", "efficiency"]
      },
      {
        question: "Does JL8001 support power-over-coax?",
        answer: "Yes, JL8001 supports power-over-coax for remote camera and display powering. The power delivery capability is similar to other Jisemi SerDes, enabling simplified system design.",
        decisionGuide: "Power-over-coax supported for simplified wiring.",
        keywords: ["power-over-coax", "PoC", "power delivery"]
      }
    ]
  },
  {
    partNumber: "JL2003",
    name: "2Gbps ASIL-D Camera SerDes",
    shortDescription: "ASIL-D qualified 2Gbps SerDes for safety-critical camera applications in autonomous driving and ADAS systems.",
    descriptionParagraphs: [
      "The JL2003 is a functional safety-qualified SerDes pair designed for safety-critical camera applications requiring ASIL-D compliance. It provides the same 2 Gbps bandwidth as JL2001 with comprehensive safety features.",
      "With redundant data paths, extensive error detection, and fault injection capabilities, the JL2003 meets ISO 26262 ASIL-D requirements for autonomous driving cameras.",
      "The device supports MIPI CSI-2 interface and power-over-coax while adding the safety mechanisms necessary for the highest automotive safety integrity level."
    ],
    specifications: {
      "Data Rate": "Up to 2 Gbps",
      "Input Interface": "MIPI CSI-2",
      "Output Interface": "MIPI CSI-2",
      "Cable Type": "Coaxial or STP",
      "Cable Reach": "Up to 15m (coaxial)",
      "Power-over-Coax": "Supported",
      "Temperature Range": "-40°C to +125°C",
      "Package": "QFN-32 (Serializer), QFN-48 (Deserializer)",
      "ASIL Support": "ASIL-D",
      "Equalization": "Adaptive",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "ASIL-D functional safety support",
      "Up to 2 Gbps data rate",
      "MIPI CSI-2 interface support",
      "Power-over-coax capability",
      "AEC-Q100 Grade 1 qualified",
      "Redundant data paths",
      "Extensive error detection",
      "Fault injection capabilities"
    ],
    applications: [
      "Autonomous driving cameras",
      "Safety-critical ADAS",
      "Front cameras",
      "Driver monitoring",
      "Safety-critical sensors"
    ],
    faeReview: {
      author: "Dr. James Wang",
      title: "Principal FAE - Functional Safety",
      content: "The JL2003 is essential for safety-critical camera applications in autonomous driving. The ASIL-D qualification is comprehensive - redundant data paths, extensive error detection, and complete safety documentation. I've supported multiple OEMs through ASIL-D certification with this device. The safety mechanisms don't compromise video quality - the image is just as good as JL2001. For any camera used in autonomous driving decision-making, this is the device to use.",
      highlight: "ASIL-D qualified for safety-critical autonomous driving cameras"
    },
    alternativeParts: [
      {
        partNumber: "JL2001",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl2001.html",
        reason: "ASIL-B version for less critical cameras",
        useCase: "Non-safety-critical cameras",
        specifications: {
          "Data Rate": "2 Gbps",
          "ASIL": "ASIL-B"
        },
        comparison: {
          "Data Rate": "2 Gbps = 2 Gbps",
          "ASIL": "ASIL-B < ASIL-D",
          "Cost": "Lower"
        }
      },
      {
        partNumber: "JL4002",
        brand: "Jisemi",
        link: "/jisemi/products/serdes/jl4002.html",
        reason: "ASIL-D 4Gbps for high-res safety cameras",
        useCase: "High-res safety cameras",
        specifications: {
          "Data Rate": "4 Gbps",
          "ASIL": "ASIL-D"
        },
        comparison: {
          "Data Rate": "4 Gbps > 2 Gbps",
          "ASIL": "ASIL-D = ASIL-D"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL5002",
        category: "Automotive Ethernet",
        description: "ASIL-D PHY for backbone",
        link: "/jisemi/products/automotive-ethernet/jl5002.html"
      },
      {
        partNumber: "ASIL-D Camera",
        category: "Sensors",
        description: "Safety-critical camera module",
        link: "#"
      },
      {
        partNumber: "Safety MCU",
        category: "Processors",
        description: "ASIL-D processor for camera",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What safety mechanisms does JL2003 include?",
        answer: "JL2003 includes comprehensive ASIL-D safety mechanisms: Redundant data paths with comparison, CRC on video data, Sequence number checking, Timeout monitoring, Fault injection for testing, Safe state on errors, Comprehensive error counters, Temperature/voltage monitoring.",
        decisionGuide: "Complete ASIL-D safety mechanisms for critical applications.",
        keywords: ["ASIL-D", "safety mechanisms", "redundancy"]
      },
      {
        question: "Is JL2003 pin-compatible with JL2001?",
        answer: "JL2003 is largely pin-compatible with JL2001 with additional pins for safety features. The video interface pins are identical, allowing design reuse. Additional pins support safety monitoring and fault injection.",
        decisionGuide: "Mostly pin-compatible with additional safety pins.",
        keywords: ["pin-compatible", "upgrade", "safety pins"]
      },
      {
        question: "What documentation is provided for ASIL-D certification?",
        answer: "Jisemi provides complete safety documentation: Safety Manual with requirements, FMEDA analysis, Safety Case template, Fault injection procedures, Diagnostic coverage analysis, ISO 26262 compliance evidence. This supports certification with minimal additional work.",
        decisionGuide: "Complete documentation package for ASIL-D certification.",
        keywords: ["safety documentation", "FMEDA", "certification"]
      },
      {
        question: "Does ASIL-D affect video quality?",
        answer: "No, the ASIL-D safety mechanisms do not affect video quality. The redundant paths and error checking operate transparently. The video output is identical to JL2001 when no errors are detected. Error detection ensures safe operation without compromising image quality.",
        decisionGuide: "Safety features operate transparently without affecting video.",
        keywords: ["video quality", "safety", "transparent"]
      },
      {
        question: "What is the price premium for ASIL-D?",
        answer: "JL2003 is typically 25-30% higher cost than JL2001 due to redundant circuits and safety logic. However, for safety-critical applications, this is a necessary investment. The comprehensive safety documentation also reduces certification costs and time.",
        decisionGuide: "Premium pricing for essential safety features.",
        keywords: ["price", "premium", "safety investment"]
      }
    ]
  }
];

// Category 3: Interface ICs - Add 4 more products (total 6)
const cat3 = products.categories[2];
const existingJL9001 = cat3.products[0];
const existingJL9002 = cat3.products[1];
cat3.products = [
  existingJL9001,
  existingJL9002,
  {
    partNumber: "JL9003",
    name: "Safety Ethernet Switch with Redundancy",
    shortDescription: "ASIL-D capable Ethernet switch with redundant paths and comprehensive safety features for autonomous driving networks.",
    descriptionParagraphs: [
      "The JL9003 is a safety-capable Ethernet switch designed for autonomous driving and safety-critical networking applications. It supports ASIL-D functional safety with redundant data paths.",
      "With support for ring redundancy, dual-homed connections, and comprehensive fault detection, the JL9003 ensures high availability for safety-critical network segments.",
      "The switch supports time-sensitive networking (TSN) features for deterministic communication and includes extensive diagnostics for network monitoring and predictive maintenance."
    ],
    specifications: {
      "Ports": "8x 1000BASE-T1",
      "Uplink": "2x 10GBASE-T1",
      "Switching Capacity": "40 Gbps",
      "Latency": "<10 microseconds",
      "Temperature Range": "-40°C to +125°C",
      "ASIL Support": "ASIL-D capable",
      "Redundancy": "Ring, Dual-homed",
      "TSN Support": "IEEE 802.1AS, 802.1Qbv",
      "Package": "BGA-256",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "ASIL-D functional safety support",
      "8x 1G + 2x 10G ports",
      "Ring and dual-homed redundancy",
      "TSN support for deterministic traffic",
      "Comprehensive fault detection",
      "40 Gbps switching capacity",
      "Low latency switching",
      "Extensive diagnostics"
    ],
    applications: [
      "Autonomous driving networks",
      "Safety-critical gateways",
      "ADAS domain controllers",
      "High-availability switches",
      "Redundant network segments"
    ],
    faeReview: {
      author: "Dr. James Wang",
      title: "Principal FAE - Functional Safety",
      content: "The JL9003 is the switch of choice for autonomous driving networks requiring ASIL-D. The redundancy features are comprehensive - ring protection, dual-homed hosts, and fast failover. I've designed networks with this switch that achieve <50ms failover times. The TSN support enables deterministic communication for safety-critical traffic. The safety documentation is thorough and has passed multiple OEM safety assessments.",
      highlight: "ASIL-D switch with comprehensive redundancy for autonomous driving"
    },
    alternativeParts: [
      {
        partNumber: "JL9001",
        brand: "Jisemi",
        link: "/jisemi/products/interface-ics/jl9001.html",
        reason: "Basic switch without safety features",
        useCase: "Non-safety-critical networks",
        specifications: {
          "Ports": "8x 1000BASE-T1",
          "ASIL": "None"
        },
        comparison: {
          "Ports": "8x 1G = 8x 1G",
          "ASIL": "None < ASIL-D",
          "Cost": "Lower"
        }
      },
      {
        partNumber: "JL9002",
        brand: "Jisemi",
        link: "/jisemi/products/interface-ics/jl9002.html",
        reason: "Mid-range switch with basic redundancy",
        useCase: "Standard automotive networks",
        specifications: {
          "Ports": "5x 1000BASE-T1",
          "ASIL": "ASIL-B"
        },
        comparison: {
          "Ports": "5 < 8",
          "ASIL": "ASIL-B < ASIL-D"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL5002",
        category: "Automotive Ethernet",
        description: "ASIL-D PHY for ports",
        link: "/jisemi/products/automotive-ethernet/jl5002.html"
      },
      {
        partNumber: "JL5010",
        category: "Automotive Ethernet",
        description: "10G PHY for uplinks",
        link: "/jisemi/products/automotive-ethernet/jl5010.html"
      },
      {
        partNumber: "Safety MCU",
        category: "Processors",
        description: "ASIL-D processor for management",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What redundancy features does JL9003 support?",
        answer: "JL9003 supports multiple redundancy mechanisms: Ring redundancy with <50ms failover, Dual-homed host connections, Link aggregation for bandwidth redundancy, Dual switch configurations, Path redundancy with automatic switching. These features ensure high availability for safety-critical networks.",
        decisionGuide: "Comprehensive redundancy for maximum network availability.",
        keywords: ["redundancy", "ring", "failover", "high availability"]
      },
      {
        question: "What is the failover time for ring redundancy?",
        answer: "JL9003 achieves ring failover times of less than 50 milliseconds, meeting the requirements for real-time automotive applications. The fast failover ensures minimal disruption to safety-critical traffic during link failures.",
        decisionGuide: "<50ms failover meets real-time automotive requirements.",
        keywords: ["failover", "ring redundancy", "50ms", "real-time"]
      },
      {
        question: "What TSN features are supported?",
        answer: "JL9003 supports IEEE 802.1AS for time synchronization and IEEE 802.1Qbv for time-aware shaping. These TSN features enable deterministic communication with guaranteed latency for safety-critical traffic.",
        decisionGuide: "TSN support for deterministic safety-critical communication.",
        keywords: ["TSN", "IEEE 802.1AS", "IEEE 802.1Qbv", "deterministic"]
      },
      {
        question: "How does JL9003 achieve ASIL-D?",
        answer: "JL9003 achieves ASIL-D through: Redundant switching paths, Comprehensive error detection (CRC, parity, timeout), Fault injection for testing, Safe state on failures, Extensive diagnostic coverage, Temperature/voltage monitoring, Watchdog timers, Comprehensive safety documentation.",
        decisionGuide: "Complete ASIL-D implementation with redundant paths.",
        keywords: ["ASIL-D", "safety", "redundant paths", "diagnostics"]
      },
      {
        question: "What is the switching latency?",
        answer: "JL9003 achieves switching latency of less than 10 microseconds per hop. This low latency is maintained even with TSN features enabled and during redundancy failover events.",
        decisionGuide: "Low latency suitable for real-time automotive networks.",
        keywords: ["latency", "switching", "microseconds", "real-time"]
      }
    ]
  },
  {
    partNumber: "JL9004",
    name: "10G Ethernet Aggregation Switch",
    shortDescription: "High-performance 10G Ethernet switch for backbone aggregation and high-bandwidth automotive networks.",
    descriptionParagraphs: [
      "The JL9004 is a high-performance Ethernet switch designed for automotive backbone networks requiring 10 Gbps connectivity. It aggregates traffic from multiple 1 Gbps zones into high-speed backbone links.",
      "With 16x 1G ports and 4x 10G uplinks, the JL9004 provides flexible connectivity for zonal E/E architectures and domain controllers.",
      "The switch supports advanced traffic management, QoS, and TSN features for prioritizing safety-critical traffic over best-effort data."
    ],
    specifications: {
      "Ports": "16x 1000BASE-T1",
      "Uplink": "4x 10GBASE-T1",
      "Switching Capacity": "100 Gbps",
      "Latency": "<5 microseconds",
      "Temperature Range": "-40°C to +125°C",
      "ASIL Support": "ASIL-B",
      "QoS": "8 priority queues",
      "TSN Support": "IEEE 802.1AS, 802.1Qbv",
      "Package": "BGA-324",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "16x 1G + 4x 10G ports",
      "100 Gbps switching capacity",
      "Advanced QoS with 8 queues",
      "TSN support for deterministic traffic",
      "Low latency switching",
      "AEC-Q100 Grade 1 qualified",
      "Comprehensive traffic management",
      "Extensive diagnostics"
    ],
    applications: [
      "Central gateways",
      "Domain controllers",
      "Backbone aggregation",
      "Zonal E/E architectures",
      "High-bandwidth networks"
    ],
    faeReview: {
      author: "Dr. Robert Liu",
      title: "Principal FAE - High-Speed Networking",
      content: "The JL9004 is designed for the high-bandwidth requirements of next-generation automotive architectures. The 16x 1G + 4x 10G configuration is perfect for zonal aggregation. I've used this in central gateway designs that aggregate data from 4-5 zones. The QoS features ensure safety-critical traffic gets priority. The 100 Gbps switching capacity provides headroom for future bandwidth growth. It's a powerful solution for modern E/E architectures.",
      highlight: "High-performance 10G aggregation for zonal architectures"
    },
    alternativeParts: [
      {
        partNumber: "JL9001",
        brand: "Jisemi",
        link: "/jisemi/products/interface-ics/jl9001.html",
        reason: "Basic 1G switch for smaller networks",
        useCase: "Small networks",
        specifications: {
          "Ports": "8x 1000BASE-T1",
          "Uplink": "None"
        },
        comparison: {
          "Ports": "8 < 16",
          "Speed": "1G only < 10G uplink",
          "Cost": "Lower"
        }
      },
      {
        partNumber: "JL9003",
        brand: "Jisemi",
        link: "/jisemi/products/interface-ics/jl9003.html",
        reason: "ASIL-D switch for safety-critical",
        useCase: "Safety-critical networks",
        specifications: {
          "Ports": "8x 1000BASE-T1",
          "ASIL": "ASIL-D"
        },
        comparison: {
          "Ports": "8 < 16",
          "ASIL": "ASIL-D > ASIL-B",
          "Redundancy": "More comprehensive"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "JL5010",
        category: "Automotive Ethernet",
        description: "10G PHY for uplinks",
        link: "/jisemi/products/automotive-ethernet/jl5010.html"
      },
      {
        partNumber: "JL5001",
        category: "Automotive Ethernet",
        description: "1G PHY for ports",
        link: "/jisemi/products/automotive-ethernet/jl5001.html"
      },
      {
        partNumber: "High-Speed Connector",
        category: "Connectors",
        description: "10G-rated connectors",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What is the switching capacity of JL9004?",
        answer: "JL9004 provides 100 Gbps switching capacity, enabling wire-speed forwarding across all ports simultaneously. This high capacity ensures no congestion even with heavy traffic loads from multiple zones.",
        decisionGuide: "100 Gbps capacity for high-bandwidth aggregation.",
        keywords: ["switching capacity", "100 Gbps", "aggregation"]
      },
      {
        question: "How many zones can JL9004 aggregate?",
        answer: "With 16x 1G ports, JL9004 can aggregate 4-5 zones (3-4 ports per zone) with 4x 10G uplinks to central computers or other switches. This configuration supports modern zonal E/E architectures.",
        decisionGuide: "16 ports support 4-5 zone aggregation.",
        keywords: ["zones", "aggregation", "zonal architecture"]
      },
      {
        question: "What QoS features does JL9004 support?",
        answer: "JL9004 supports comprehensive QoS: 8 priority queues per port, IEEE 802.1p priority tagging, Traffic shaping and policing, WRR and strict priority scheduling, Rate limiting per queue. These features ensure critical traffic gets priority.",
        decisionGuide: "Advanced QoS for traffic prioritization.",
        keywords: ["QoS", "priority queues", "traffic shaping"]
      },
      {
        question: "What is the latency through JL9004?",
        answer: "JL9004 achieves switching latency of less than 5 microseconds per hop. This low latency is maintained even with QoS and TSN features enabled, ensuring deterministic performance for real-time applications.",
        decisionGuide: "Low latency for real-time automotive applications.",
        keywords: ["latency", "microseconds", "real-time"]
      },
      {
        question: "Does JL9004 support network management?",
        answer: "Yes, JL9004 supports comprehensive network management: SNMP v1/v2c/v3 for monitoring, Remote configuration via Ethernet, Firmware upgrade capability, Comprehensive statistics and counters, Port mirroring for debugging, LLDP for topology discovery.",
        decisionGuide: "Full network management capabilities.",
        keywords: ["network management", "SNMP", "monitoring"]
      }
    ]
  },
  {
    partNumber: "JL9101",
    name: "Automotive Ethernet PHY with Integrated MCU",
    shortDescription: "Integrated Ethernet PHY and microcontroller for smart sensors and intelligent edge devices in automotive networks.",
    descriptionParagraphs: [
      "The JL9101 combines a 100BASE-T1 Ethernet PHY with an integrated ARM Cortex-M4 microcontroller, enabling smart sensor and edge device applications with minimal external components.",
      "With 512KB Flash and 128KB RAM, the integrated MCU can run application code, protocol stacks, and diagnostic routines, reducing system complexity and cost.",
      "The device is ideal for smart sensors, intelligent actuators, and edge nodes that need both connectivity and local processing capability."
    ],
    specifications: {
      "Ethernet": "100BASE-T1",
      "MCU": "ARM Cortex-M4 @ 80MHz",
      "Flash": "512 KB",
      "RAM": "128 KB",
      "GPIO": "16x GPIO",
      "Interfaces": "SPI, I2C, UART, ADC",
      "Temperature Range": "-40°C to +125°C",
      "ASIL Support": "ASIL-B",
      "Package": "QFN-48 (7x7mm)",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "Integrated PHY + MCU",
      "ARM Cortex-M4 processor",
      "512KB Flash, 128KB RAM",
      "Multiple peripheral interfaces",
      "AEC-Q100 Grade 1 qualified",
      "ASIL-B support",
      "Low power modes",
      "Single-chip solution"
    ],
    applications: [
      "Smart sensors",
      "Intelligent actuators",
      "Edge nodes",
      "Distributed I/O modules",
      "Protocol converters"
    ],
    faeReview: {
      author: "David Zhang",
      title: "Senior FAE - Automotive Connectivity",
      content: "The JL9101 is a game-changer for smart sensor designs. The integration of PHY and MCU eliminates the need for a separate microcontroller, reducing BOM cost and PCB area significantly. I've used this in smart temperature sensors and pressure sensors where the integrated MCU runs the sensor algorithm and communicates over Ethernet. The 512KB Flash is plenty for most sensor applications. It's a true single-chip solution for Ethernet-connected sensors.",
      highlight: "Single-chip solution for smart Ethernet sensors"
    },
    alternativeParts: [
      {
        partNumber: "JL1001",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl1001.html",
        reason: "PHY only for use with external MCU",
        useCase: "External processor designs",
        specifications: {
          "Ethernet": "100BASE-T1",
          "MCU": "None"
        },
        comparison: {
          "Integration": "PHY only < PHY+MCU",
          "Cost": "Lower for PHY only",
          "Flexibility": "More with external MCU"
        }
      },
      {
        partNumber: "JL1002",
        brand: "Jisemi",
        link: "/jisemi/products/automotive-ethernet/jl1002.html",
        reason: "Enhanced PHY without MCU",
        useCase: "External processor with enhanced PHY",
        specifications: {
          "Ethernet": "100BASE-T1",
          "Features": "Enhanced diagnostics"
        },
        comparison: {
          "Diagnostics": "Enhanced > Standard",
          "MCU": "None < Integrated"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "Sensor Module",
        category: "Sensors",
        description: "Various sensor types",
        link: "#"
      },
      {
        partNumber: "Power Regulator",
        category: "Power",
        description: "3.3V regulator",
        link: "#"
      },
      {
        partNumber: "Crystal",
        category: "Passive",
        description: "25MHz crystal",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What MCU is integrated in JL9101?",
        answer: "JL9101 integrates an ARM Cortex-M4 running at 80 MHz with: 512KB Flash memory for code storage, 128KB SRAM for data, DSP instructions for signal processing, Hardware FPU for floating-point operations, Multiple power modes for efficiency. This provides sufficient processing for most sensor and edge applications.",
        decisionGuide: "ARM Cortex-M4 with ample memory for sensor applications.",
        keywords: ["MCU", "ARM Cortex-M4", "Flash", "RAM"]
      },
      {
        question: "What peripherals are available?",
        answer: "JL9101 provides rich peripherals: 16x GPIO pins, 2x SPI interfaces, 2x I2C interfaces, 2x UART interfaces, 12-bit ADC with 8 channels, 4x PWM outputs, Watchdog timer, Real-time clock. These support connection to various sensors and actuators.",
        decisionGuide: "Rich peripheral set for sensor connectivity.",
        keywords: ["peripherals", "GPIO", "SPI", "I2C", "ADC"]
      },
      {
        question: "How much power does JL9101 consume?",
        answer: "JL9101 power consumption: Active (PHY + MCU running): ~150mW, MCU sleep (PHY active): ~100mW, Deep sleep: ~10mW. The integrated design is more power-efficient than separate PHY and MCU solutions.",
        decisionGuide: "Power-efficient integrated solution.",
        keywords: ["power consumption", "efficiency", "sleep modes"]
      },
      {
        question: "What development tools are supported?",
        answer: "JL9101 supports standard ARM development tools: Keil MDK, IAR Embedded Workbench, GCC toolchain, J-Link debuggers. Jisemi provides SDK with Ethernet drivers, example code, and application notes.",
        decisionGuide: "Standard ARM toolchain support.",
        keywords: ["development tools", "SDK", "ARM toolchain"]
      },
      {
        question: "Is JL9101 suitable for functional safety applications?",
        answer: "JL9101 supports ASIL-B with safety features including: MCU lockstep mode, ECC on Flash and RAM, Watchdog timer, Clock monitoring, Temperature monitoring, BIST capabilities. For higher ASIL levels, external safety monitoring may be required.",
        decisionGuide: "ASIL-B support for safety-critical sensor applications.",
        keywords: ["ASIL-B", "functional safety", "lockstep", "ECC"]
      }
    ]
  },
  {
    partNumber: "JL9201",
    name: "Multi-Protocol Gateway Controller",
    shortDescription: "Multi-protocol gateway controller with Ethernet, CAN, and LIN interfaces for automotive network bridging.",
    descriptionParagraphs: [
      "The JL9201 is a multi-protocol gateway controller designed for bridging between Ethernet, CAN, and LIN networks in automotive applications. It enables seamless communication between legacy and modern vehicle networks.",
      "With integrated 100BASE-T1 Ethernet, 4x CAN-FD, and 8x LIN interfaces, the JL9201 can bridge between any combination of these protocols with minimal external components.",
      "The integrated ARM Cortex-M7 processor runs at 400 MHz with 2MB Flash, providing ample performance for protocol translation and gateway applications."
    ],
    specifications: {
      "Ethernet": "100BASE-T1",
      "CAN": "4x CAN-FD",
      "LIN": "8x LIN",
      "MCU": "ARM Cortex-M7 @ 400MHz",
      "Flash": "2 MB",
      "RAM": "512 KB",
      "Temperature Range": "-40°C to +125°C",
      "ASIL Support": "ASIL-B",
      "Package": "BGA-144",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    features: [
      "Multi-protocol support (Ethernet/CAN/LIN)",
      "ARM Cortex-M7 @ 400MHz",
      "2MB Flash, 512KB RAM",
      "Hardware protocol translation",
      "AEC-Q100 Grade 1 qualified",
      "ASIL-B support",
      "Low latency bridging",
      "Comprehensive diagnostics"
    ],
    applications: [
      "Central gateways",
      "Body domain controllers",
      "Protocol converters",
      "Network bridges",
      "Diagnostic gateways"
    ],
    faeReview: {
      author: "Sarah Chen",
      title: "Senior FAE - Gateway Applications",
      content: "The JL9201 is the ultimate gateway solution for automotive networks. The integration of Ethernet, CAN-FD, and LIN in one chip eliminates the need for multiple bridge devices. I've used this in central gateways that bridge between the Ethernet backbone and legacy CAN/LIN networks. The hardware protocol translation reduces CPU load significantly compared to software-based translation. The 400 MHz M7 provides plenty of performance for complex routing and filtering.",
      highlight: "Ultimate gateway solution with multi-protocol support"
    },
    alternativeParts: [
      {
        partNumber: "JL9001",
        brand: "Jisemi",
        link: "/jisemi/products/interface-ics/jl9001.html",
        reason: "Ethernet-only switch",
        useCase: "Pure Ethernet networks",
        specifications: {
          "Ethernet": "8x 1000BASE-T1",
          "CAN/LIN": "None"
        },
        comparison: {
          "Protocols": "Ethernet only < Multi-protocol",
          "Use case": "Different application"
        }
      },
      {
        partNumber: "External Bridge",
        brand: "Other",
        link: "#",
        reason: "Discrete solution with separate chips",
        useCase: "Maximum flexibility",
        specifications: {
          "Integration": "Discrete"
        },
        comparison: {
          "Integration": "Discrete < Integrated",
          "Cost": "Higher",
          "Complexity": "Higher"
        }
      }
    ],
    companionParts: [
      {
        partNumber: "CAN Transceiver",
        category: "Interface",
        description: "External CAN transceivers",
        link: "#"
      },
      {
        partNumber: "LIN Transceiver",
        category: "Interface",
        description: "External LIN transceivers",
        link: "#"
      },
      {
        partNumber: "Power Management",
        category: "Power",
        description: "Multi-rail PMIC",
        link: "#"
      }
    ],
    faqs: [
      {
        question: "What protocols can JL9201 bridge?",
        answer: "JL9201 can bridge between: Ethernet (100BASE-T1) and CAN-FD, Ethernet and LIN, CAN-FD and LIN, Any combination of the above. The hardware translation engines enable efficient protocol conversion with minimal latency.",
        decisionGuide: "Flexible multi-protocol bridging capabilities.",
        keywords: ["protocols", "bridging", "translation", "gateway"]
      },
      {
        question: "What is the bridging latency?",
        answer: "JL9201 achieves low bridging latency: Ethernet to CAN-FD: <100 microseconds, CAN-FD to Ethernet: <100 microseconds, CAN-FD to LIN: <50 microseconds. Hardware translation minimizes latency compared to software-based solutions.",
        decisionGuide: "Low latency hardware translation.",
        keywords: ["latency", "bridging", "translation", "microseconds"]
      },
      {
        question: "How many CAN and LIN channels are supported?",
        answer: "JL9201 supports: 4x CAN-FD interfaces (up to 8 Mbps), 8x LIN interfaces (up to 20 kbps), 1x 100BASE-T1 Ethernet. This provides comprehensive connectivity for most gateway applications.",
        decisionGuide: "4 CAN-FD + 8 LIN channels for comprehensive connectivity.",
        keywords: ["CAN-FD", "LIN", "channels", "interfaces"]
      },
      {
        question: "What MCU performance does JL9201 offer?",
        answer: "JL9201 integrates a high-performance ARM Cortex-M7: 400 MHz clock speed, 2MB Flash for code and data, 512KB SRAM for runtime, Double-precision FPU, DSP instructions, Memory protection unit. This provides ample performance for complex gateway applications.",
        decisionGuide: "High-performance M7 for complex gateway functions.",
        keywords: ["MCU", "ARM Cortex-M7", "performance", "Flash", "RAM"]
      },
      {
        question: "Does JL9201 support CAN FD?",
        answer: "Yes, all 4 CAN interfaces support CAN-FD with: Data rates up to 8 Mbps, Standard and extended frames, Hardware filtering, Error tracking, Automatic retransmission. CAN-FD provides higher bandwidth than classic CAN for modern applications.",
        decisionGuide: "Full CAN-FD support for modern automotive networks.",
        keywords: ["CAN-FD", "data rate", "bandwidth"]
      }
    ]
  }
];

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Products updated successfully!');
console.log('Category 1 (Automotive Ethernet PHY): ' + products.categories[0].products.length + ' products');
console.log('Category 2 (High-Speed SerDes): ' + products.categories[1].products.length + ' products');
console.log('Category 3 (Interface ICs): ' + products.categories[2].products.length + ' products');
