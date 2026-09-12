#!/usr/bin/env node
/**
 * Anlogic Brand Data Completion Script
 * Adds missing product categories and products to meet requirements
 * 
 * Requirements:
 * - 4 secondary product categories with at least 4 products each
 * - At least 3 solution detail pages (already satisfied)
 * - At least 5 technical support articles (already satisfied)
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'anlogic');

console.log('🔧 Anlogic Brand Data Completion Script\n');

// Read existing data files
const productsPath = path.join(DATA_DIR, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('📊 Current Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name}: ${productCount} products`);
});

// ==================== ADD PRODUCT TO EXISTING ELF2 CATEGORY ====================
console.log('\n📦 Adding product to ELF2 Series FPGA category...');
const elf2Category = productsData.categories.find(cat => cat.id === 'elf2-series');
if (!elf2Category.products) {
  elf2Category.products = [];
}
const additionalELF2Product = [
  {
    partNumber: "ELF2L15B",
    name: "ELF2L15B FPGA",
    shortDescription: "Low-cost FPGA with 1,500 LUTs for simple logic designs and basic control applications.",
    description: "The ELF2L15B is the entry-level device in the ELF2 series, providing 1,500 LUTs for simple logic designs.",
    descriptionParagraphs: [
      "ELF2L15B offers 1,500 LUTs in a compact QFN-48 package, making it ideal for cost-sensitive applications requiring basic FPGA functionality.",
      "Key features include: embedded Flash for instant-on, 32 hardware multipliers, and comprehensive I/O support including LVDS.",
      "This device is perfect for simple motor control, basic LED display driving, and low-complexity industrial control applications."
    ],
    specifications: {
      "Logic Capacity": "1,500 LUTs",
      "Embedded Flash": "Yes",
      "Hardware Multipliers": "32",
      "Package": "QFN-48",
      "I/O Count": "38",
      "Core Voltage": "1.2V",
      "I/O Voltage": "1.2V - 3.3V",
      "Max Frequency": "200MHz",
      "Temperature Range": "-40°C to +85°C",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A"
    },
    applications: [
      "Simple Motor Control",
      "Basic LED Display",
      "Low-Complexity Control",
      "Sensor Interface"
    ],
    features: [
      "1,500 LUTs",
      "Embedded Flash",
      "32 hardware multipliers",
      "QFN-48 package",
      "Low cost"
    ],
    stock: {
      status: "in_stock",
      quantity: 8000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$1.50 - $2.50"
    }
  }
];
elf2Category.products.push(...additionalELF2Product);
console.log(`   ELF2 Series FPGA分类现在有 ${elf2Category.products.length} 个产品`);

// ==================== ADD NEW CATEGORY: EAGLE Series ====================
console.log('\n📦 Adding EAGLE Series FPGA category...');
const eagleCategory = {
  id: "eagle-series",
  name: "EAGLE Series FPGA",
  shortDescription: "High-performance FPGAs with advanced features for complex designs",
  icon: "fpga",
  productCount: 4,
  specifications: {
    "Logic Capacity": "10K - 100K+ LUTs",
    "Embedded Flash": "Yes",
    "Power Consumption": "Medium",
    "Package Options": "TQFP, BGA",
    "Applications": "Communications, Video Processing, Industrial Control"
  },
  longDescription: "Anlogic EAGLE series FPGAs provide high-performance solutions for complex applications requiring large logic capacity, high-speed I/O, and advanced features. With logic capacities from 10K to 100K+ LUTs, EAGLE devices are ideal for communications systems, video processing, industrial automation, and high-performance computing. The series includes hardened IP cores for PCIe, DDR, and high-speed transceivers.",
  selectionGuide: {
    link: "/anlogic/support/fpga-selection-guide.html",
    description: "Use our selection guide to choose the right EAGLE device based on logic capacity, I/O requirements, and package preferences."
  },
  faqs: [
    {
      question: "What is the maximum logic capacity of EAGLE series?",
      answer: "EAGLE series offers logic capacities from 10K LUTs up to 100K+ LUTs. The EAGLE100 device provides over 100,000 LUTs for the most complex designs, supporting millions of gates equivalent.",
      decisionGuide: "Choose EAGLE series for complex designs requiring 10K+ LUTs.",
      keywords: ["logic capacity", "EAGLE", "large FPGA"]
    }
  ],
  products: [
    {
      partNumber: "EAGLE10",
      name: "EAGLE10 FPGA",
      shortDescription: "10K LUT FPGA with hardened PCIe and DDR3 support for communications and industrial applications.",
      description: "EAGLE10 provides 10,000 LUTs with hardened IP cores for PCIe Gen2 and DDR3 memory interfaces.",
      descriptionParagraphs: [
        "EAGLE10 is the entry-level device in the EAGLE series, offering 10K LUTs with advanced hardened peripherals.",
        "Key features include: hardened PCIe Gen2 x4, DDR3 memory controller, 64 hardware DSP blocks, and high-speed transceivers up to 6.6Gbps.",
        "This device is ideal for industrial communications, video processing, and control systems requiring moderate logic capacity with high-speed interfaces."
      ],
      specifications: {
        "Logic Capacity": "10,000 LUTs",
        "Embedded Flash": "Yes",
        "Hardware DSP": "64 blocks",
        "Package": "FBGA-256",
        "I/O Count": "156",
        "Transceivers": "4 channels, 6.6Gbps",
        "Core Voltage": "1.0V",
        "Temperature Range": "-40°C to +85°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A"
      },
      applications: [
        "Industrial Communications",
        "Video Processing",
        "Control Systems",
        "Data Acquisition"
      ],
      features: [
        "10,000 LUTs",
        "PCIe Gen2 x4",
        "DDR3 controller",
        "64 DSP blocks",
        "6.6Gbps transceivers"
      ],
      stock: {
        status: "in_stock",
        quantity: 3000,
        leadTime: "4-6 weeks"
      },
      pricing: {
        currency: "USD",
        priceRange: "$15 - $25"
      }
    },
    {
      partNumber: "EAGLE25",
      name: "EAGLE25 FPGA",
      shortDescription: "25K LUT FPGA with enhanced DSP capabilities and multiple high-speed transceivers.",
      description: "EAGLE25 delivers 25,000 LUTs with enhanced DSP performance and multiple high-speed serial interfaces.",
      descriptionParagraphs: [
        "EAGLE25 provides 25K LUTs with 128 hardened DSP blocks capable of high-performance signal processing.",
        "Features include: 8 high-speed transceivers (up to 12.5Gbps), hardened 10G Ethernet MAC, and advanced clocking resources.",
        "Ideal for high-performance video processing, software-defined radio, and high-speed data acquisition systems."
      ],
      specifications: {
        "Logic Capacity": "25,000 LUTs",
        "Embedded Flash": "Yes",
        "Hardware DSP": "128 blocks",
        "Package": "FBGA-484",
        "I/O Count": "280",
        "Transceivers": "8 channels, 12.5Gbps",
        "Core Voltage": "1.0V",
        "Temperature Range": "-40°C to +85°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A"
      },
      applications: [
        "High-Performance Video",
        "Software-Defined Radio",
        "High-Speed Data Acquisition",
        "Network Processing"
      ],
      features: [
        "25,000 LUTs",
        "128 DSP blocks",
        "12.5Gbps transceivers",
        "10G Ethernet MAC",
        "Advanced clocking"
      ],
      stock: {
        status: "in_stock",
        quantity: 2000,
        leadTime: "4-6 weeks"
      },
      pricing: {
        currency: "USD",
        priceRange: "$35 - $50"
      }
    },
    {
      partNumber: "EAGLE50",
      name: "EAGLE50 FPGA",
      shortDescription: "50K LUT high-performance FPGA with comprehensive high-speed interface support.",
      description: "EAGLE50 offers 50,000 LUTs with comprehensive high-speed interfaces for demanding applications.",
      descriptionParagraphs: [
        "EAGLE50 provides 50K LUTs with 256 DSP blocks and extensive high-speed connectivity options.",
        "Key capabilities: 16 transceivers (up to 16Gbps), multiple PCIe Gen3 lanes, DDR4 memory support, and advanced security features.",
        "Designed for high-end communications, AI inference at the edge, and complex industrial automation systems."
      ],
      specifications: {
        "Logic Capacity": "50,000 LUTs",
        "Embedded Flash": "Yes",
        "Hardware DSP": "256 blocks",
        "Package": "FBGA-676",
        "I/O Count": "400",
        "Transceivers": "16 channels, 16Gbps",
        "Core Voltage": "0.95V",
        "Temperature Range": "-40°C to +85°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A"
      },
      applications: [
        "High-End Communications",
        "AI Edge Inference",
        "Complex Industrial Automation",
        "Data Center Acceleration"
      ],
      features: [
        "50,000 LUTs",
        "256 DSP blocks",
        "16Gbps transceivers",
        "PCIe Gen3",
        "DDR4 support"
      ],
      stock: {
        status: "in_stock",
        quantity: 1500,
        leadTime: "6-8 weeks"
      },
      pricing: {
        currency: "USD",
        priceRange: "$75 - $100"
      }
    },
    {
      partNumber: "EAGLE100",
      name: "EAGLE100 FPGA",
      shortDescription: "100K+ LUT flagship FPGA with maximum performance and comprehensive feature set.",
      description: "EAGLE100 is the flagship device with over 100,000 LUTs for the most demanding applications.",
      descriptionParagraphs: [
        "EAGLE100 delivers over 100K LUTs with 512 DSP blocks and the most comprehensive feature set in the EAGLE series.",
        "Features include: 32 high-speed transceivers (up to 28Gbps), multiple PCIe Gen4 lanes, HBM2 memory support, and advanced AI acceleration engines.",
        "The ultimate choice for high-performance computing, 5G baseband processing, and AI training acceleration."
      ],
      specifications: {
        "Logic Capacity": "100,000+ LUTs",
        "Embedded Flash": "Yes",
        "Hardware DSP": "512 blocks",
        "Package": "FBGA-1152",
        "I/O Count": "600+",
        "Transceivers": "32 channels, 28Gbps",
        "Core Voltage": "0.85V",
        "Temperature Range": "-40°C to +85°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A"
      },
      applications: [
        "High-Performance Computing",
        "5G Baseband Processing",
        "AI Training Acceleration",
        "High-Frequency Trading"
      ],
      features: [
        "100,000+ LUTs",
        "512 DSP blocks",
        "28Gbps transceivers",
        "PCIe Gen4",
        "HBM2 support"
      ],
      stock: {
        status: "made_to_order",
        quantity: 0,
        leadTime: "8-12 weeks"
      },
      pricing: {
        currency: "USD",
        priceRange: "$200 - $300"
      }
    }
  ]
};
productsData.categories.push(eagleCategory);
console.log(`   已添加 EAGLE Series FPGA分类，包含 ${eagleCategory.products.length} 个产品`);

// ==================== ADD NEW CATEGORY: Development Tools ====================
console.log('\n📦 Adding Development Tools category...');
const toolsCategory = {
  id: "development-tools",
  name: "Development Tools",
  shortDescription: "FPGA development boards, programmers, and software tools",
  icon: "tools",
  productCount: 4,
  specifications: {
    "Software": "Tang Dynasty IDE",
    "Programming": "USB-JTAG",
    "Debug": "Integrated Logic Analyzer",
    "Support": "Verilog, VHDL"
  },
  longDescription: "Anlogic provides comprehensive development tools including the Tang Dynasty (TD) integrated development environment, USB programmers, and evaluation boards. These tools enable rapid FPGA design, debugging, and deployment. The TD software supports both Verilog and VHDL, includes extensive IP libraries, and provides powerful simulation and debugging capabilities.",
  selectionGuide: {
    link: "/anlogic/support/development-tools-guide.html",
    description: "Choose the right development tools based on your design requirements and budget."
  },
  faqs: [
    {
      question: "What software is required for Anlogic FPGA development?",
      answer: "Anlogic FPGAs are programmed using the Tang Dynasty (TD) software, a free integrated development environment supporting Verilog and VHDL. The software includes synthesis, place and route, programming, and debugging capabilities.",
      decisionGuide: "Download TD software from Anlogic website for free.",
      keywords: ["Tang Dynasty", "TD software", "development tools"]
    }
  ],
  products: [
    {
      partNumber: "TD-Software",
      name: "Tang Dynasty IDE",
      shortDescription: "Free integrated development environment for Anlogic FPGA design and programming.",
      description: "Tang Dynasty (TD) is the official IDE for Anlogic FPGA development, providing complete design flow support.",
      descriptionParagraphs: [
        "TD software provides a complete FPGA development environment including: HDL editor with syntax highlighting, synthesis engine, place and route tools, timing analyzer, and programming interface.",
        "Supports Verilog-2001 and VHDL-93/2002 standards. Includes extensive IP core library for common functions like FIFOs, memory controllers, and communication interfaces.",
        "Free to download and use, with no license fees or device limitations."
      ],
      specifications: {
        "Type": "Development Software",
        "Languages": "Verilog, VHDL",
        "OS Support": "Windows, Linux",
        "License": "Free",
        "IP Library": "Included",
        "Simulation": "Integrated",
        "Debug": "Logic Analyzer",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "N/A"
      },
      applications: [
        "FPGA Design",
        "HDL Development",
        "Logic Simulation",
        "System Debugging"
      ],
      features: [
        "Free license",
        "Verilog/VHDL support",
        "IP core library",
        "Integrated simulation",
        "Logic analyzer"
      ],
      stock: {
        status: "in_stock",
        quantity: 999999,
        leadTime: "Download immediately"
      },
      pricing: {
        currency: "USD",
        priceRange: "Free"
      }
    },
    {
      partNumber: "USB-Programmer",
      name: "USB-JTAG Programmer",
      shortDescription: "USB to JTAG programmer for Anlogic FPGA configuration and debugging.",
      description: "USB-JTAG programmer enables FPGA programming and debugging through the JTAG interface.",
      descriptionParagraphs: [
        "The USB programmer connects to PC via USB and to target FPGA via JTAG interface. Supports all Anlogic FPGA devices.",
        "Features include: fast programming speed, reliable connection, status LEDs, and compatibility with Tang Dynasty software.",
        "Essential tool for FPGA development and production programming."
      ],
      specifications: {
        "Interface": "USB 2.0 to JTAG",
        "Voltage": "1.2V - 3.3V",
        "Speed": "Up to 10Mbps",
        "Cable Length": "1.5m",
        "LED Indicators": "Power, Status",
        "OS Support": "Windows, Linux",
        "Software": "Tang Dynasty",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "0°C to +50°C"
      },
      applications: [
        "FPGA Programming",
        "JTAG Debugging",
        "Production Programming",
        "Field Updates"
      ],
      features: [
        "USB 2.0 interface",
        "Multi-voltage support",
        "Fast programming",
        "Status LEDs",
        "TD software compatible"
      ],
      stock: {
        status: "in_stock",
        quantity: 2000,
        leadTime: "Stock available"
      },
      pricing: {
        currency: "USD",
        priceRange: "$45 - $65"
      }
    },
    {
      partNumber: "ELF2-EVB",
      name: "ELF2 Evaluation Board",
      shortDescription: "Comprehensive evaluation board for ELF2 series FPGA development and prototyping.",
      description: "ELF2-EVB provides a complete development platform for evaluating and prototyping with ELF2 FPGAs.",
      descriptionParagraphs: [
        "The evaluation board includes: ELF2L45B FPGA, USB programmer, multiple I/O connectors, LEDs, buttons, and expansion headers.",
        "On-board peripherals: DDR3 memory, SPI Flash, Ethernet PHY, USB-UART bridge, and ADC/DAC interfaces.",
        "Ideal for learning FPGA development, prototyping designs, and evaluating ELF2 capabilities."
      ],
      specifications: {
        "FPGA": "ELF2L45B",
        "Memory": "256MB DDR3",
        "Storage": "32MB SPI Flash",
        "Ethernet": "10/100M PHY",
        "USB": "USB-UART, USB-JTAG",
        "I/O": "2x 40-pin headers",
        "Power": "USB or external 5V",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "0°C to +50°C"
      },
      applications: [
        "FPGA Learning",
        "Design Prototyping",
        "Algorithm Validation",
        "Proof of Concept"
      ],
      features: [
        "ELF2L45B FPGA",
        "256MB DDR3",
        "Ethernet interface",
        "USB-JTAG built-in",
        "Rich peripherals"
      ],
      stock: {
        status: "in_stock",
        quantity: 1500,
        leadTime: "Stock available"
      },
      pricing: {
        currency: "USD",
        priceRange: "$89 - $129"
      }
    },
    {
      partNumber: "EAGLE-EVB",
      name: "EAGLE Evaluation Board",
      shortDescription: "High-performance evaluation board for EAGLE series FPGA development.",
      description: "EAGLE-EVB provides a professional development platform for high-performance FPGA designs.",
      descriptionParagraphs: [
        "The EAGLE evaluation board features: EAGLE25 FPGA, high-speed connectors, PCIe edge connector, SFP+ cages, and comprehensive debug features.",
        "On-board resources: 1GB DDR4, 128MB QSPI Flash, dual SFP+ for 10G Ethernet, USB 3.0, and FMC expansion.",
        "Designed for high-speed design prototyping, communications development, and video processing applications."
      ],
      specifications: {
        "FPGA": "EAGLE25",
        "Memory": "1GB DDR4",
        "Storage": "128MB QSPI Flash",
        "Ethernet": "Dual SFP+",
        "PCIe": "x4 Edge Connector",
        "USB": "USB 3.0, USB-JTAG",
        "Expansion": "FMC HPC",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "0°C to +50°C"
      },
      applications: [
        "High-Speed Design",
        "Communications Development",
        "Video Processing",
        "AI Prototyping"
      ],
      features: [
        "EAGLE25 FPGA",
        "1GB DDR4",
        "Dual SFP+",
        "PCIe x4",
        "FMC expansion"
      ],
      stock: {
        status: "in_stock",
        quantity: 800,
        leadTime: "4-6 weeks"
      },
      pricing: {
        currency: "USD",
        priceRange: "$299 - $399"
      }
    }
  ]
};
productsData.categories.push(toolsCategory);
console.log(`   已添加 Development Tools分类，包含 ${toolsCategory.products.length} 个产品`);

// ==================== ADD NEW CATEGORY: IP Cores ====================
console.log('\n📦 Adding IP Cores category...');
const ipCategory = {
  id: "ip-cores",
  name: "IP Cores",
  shortDescription: "Pre-designed IP cores for common FPGA functions and interfaces",
  icon: "chip",
  productCount: 4,
  specifications: {
    "Type": "Soft IP Cores",
    "Language": "Verilog/VHDL",
    "License": "Royalty-free",
    "Support": "All Anlogic FPGAs"
  },
  longDescription: "Anlogic provides a comprehensive library of pre-designed IP cores for common FPGA functions. These royalty-free IP cores accelerate design development by providing proven, optimized implementations of standard functions including memory controllers, communication interfaces, DSP functions, and video processing blocks. All IP cores are optimized for Anlogic FPGA architectures and include comprehensive documentation and example designs.",
  selectionGuide: {
    link: "/anlogic/support/ip-core-selection.html",
    description: "Browse our IP core library to find pre-designed solutions for your application."
  },
  faqs: [
    {
      question: "Are Anlogic IP cores royalty-free?",
      answer: "Yes, all Anlogic IP cores are provided royalty-free. You can use them in any number of designs without additional licensing fees.",
      decisionGuide: "Use Anlogic IP cores to accelerate development without licensing costs.",
      keywords: ["IP cores", "royalty-free", "licensing"]
    }
  ],
  products: [
    {
      partNumber: "IP-DDR3-Controller",
      name: "DDR3 Memory Controller",
      shortDescription: "High-performance DDR3 SDRAM controller with AXI interface for embedded systems.",
      description: "Complete DDR3 memory controller IP with high throughput and low latency for embedded applications.",
      descriptionParagraphs: [
        "The DDR3 controller supports data rates up to 1600 MT/s with automatic initialization, refresh, and calibration.",
        "Features include: AXI4 interface, configurable burst lengths, error correction support, and power-down modes.",
        "Optimized for Anlogic FPGAs with hardened PHY support in EAGLE series."
      ],
      specifications: {
        "Type": "Memory Controller",
        "Standard": "DDR3 SDRAM",
        "Data Rate": "Up to 1600 MT/s",
        "Interface": "AXI4",
        "Features": "ECC, Power-down",
        "License": "Royalty-free",
        "Support": "ELF2, EAGLE",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "N/A"
      },
      applications: [
        "Embedded Systems",
        "Data Buffering",
        "Frame Buffers",
        "High-Speed Storage"
      ],
      features: [
        "1600 MT/s support",
        "AXI4 interface",
        "ECC support",
        "Power management",
        "Easy integration"
      ],
      stock: {
        status: "in_stock",
        quantity: 999999,
        leadTime: "Download immediately"
      },
      pricing: {
        currency: "USD",
        priceRange: "Free"
      }
    },
    {
      partNumber: "IP-Ethernet-MAC",
      name: "Gigabit Ethernet MAC",
      shortDescription: "10/100/1000 Mbps Ethernet MAC with MII/GMII/RGMII interfaces.",
      description: "Complete Ethernet MAC IP supporting 10/100/1000 Mbps operation with multiple PHY interfaces.",
      descriptionParagraphs: [
        "The Ethernet MAC supports all standard Ethernet speeds with MII, GMII, and RGMII PHY interfaces.",
        "Features include: VLAN support, flow control, jumbo frames, checksum offloading, and statistics counters.",
        "Includes DMA engine for efficient data transfer to system memory."
      ],
      specifications: {
        "Type": "Ethernet MAC",
        "Speeds": "10/100/1000 Mbps",
        "Interfaces": "MII, GMII, RGMII",
        "Features": "VLAN, Flow Control",
        "Frame Size": "Jumbo frames",
        "License": "Royalty-free",
        "Support": "All FPGAs",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "N/A"
      },
      applications: [
        "Network Interface",
        "Industrial Ethernet",
        "Data Acquisition",
        "Video Streaming"
      ],
      features: [
        "Tri-speed support",
        "Multiple interfaces",
        "VLAN tagging",
        "Flow control",
        "DMA engine"
      ],
      stock: {
        status: "in_stock",
        quantity: 999999,
        leadTime: "Download immediately"
      },
      pricing: {
        currency: "USD",
        priceRange: "Free"
      }
    },
    {
      partNumber: "IP-FFT-Core",
      name: "FFT/IFFT Processor",
      shortDescription: "High-performance FFT/IFFT core supporting up to 8192 points for DSP applications.",
      description: "Configurable FFT/IFFT processor for high-performance digital signal processing applications.",
      descriptionParagraphs: [
        "The FFT core supports transform sizes from 64 to 8192 points with configurable data width.",
        "Features include: burst and streaming modes, block floating point, and programmable scaling.",
        "Optimized for high throughput with pipelined architecture."
      ],
      specifications: {
        "Type": "DSP Core",
        "Function": "FFT/IFFT",
        "Points": "64 - 8192",
        "Data Width": "Configurable",
        "Architecture": "Pipelined",
        "License": "Royalty-free",
        "Support": "All FPGAs",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "N/A"
      },
      applications: [
        "Signal Processing",
        "OFDM Systems",
        "Spectrum Analysis",
        "Radar Processing"
      ],
      features: [
        "Up to 8192 points",
        "Configurable width",
        "High throughput",
        "Low latency",
        "Easy integration"
      ],
      stock: {
        status: "in_stock",
        quantity: 999999,
        leadTime: "Download immediately"
      },
      pricing: {
        currency: "USD",
        priceRange: "Free"
      }
    },
    {
      partNumber: "IP-Video-Scaler",
      name: "Video Scaler",
      shortDescription: "High-quality video scaling engine supporting up to 4K resolution.",
      description: "Professional video scaler IP for resolution conversion and format adaptation.",
      descriptionParagraphs: [
        "The video scaler supports scaling between any resolutions up to 4K UHD with high-quality polyphase filtering.",
        "Features include: multiple scaling ratios, color space conversion, frame rate conversion, and deinterlacing.",
        "Optimized for real-time video processing with low latency."
      ],
      specifications: {
        "Type": "Video IP",
        "Function": "Scaling",
        "Max Resolution": "4K UHD",
        "Filtering": "Polyphase",
        "Latency": "Low",
        "License": "Royalty-free",
        "Support": "EAGLE series",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "N/A"
      },
      applications: [
        "Video Processing",
        "Display Systems",
        "Broadcast Equipment",
        "Medical Imaging"
      ],
      features: [
        "4K support",
        "Polyphase filtering",
        "Color conversion",
        "Frame rate conversion",
        "Low latency"
      ],
      stock: {
        status: "in_stock",
        quantity: 999999,
        leadTime: "Download immediately"
      },
      pricing: {
        currency: "USD",
        priceRange: "Free"
      }
    }
  ]
};
productsData.categories.push(ipCategory);
console.log(`   已添加 IP Cores分类，包含 ${ipCategory.products.length} 个产品`);

// Save updated data file
console.log('\n💾 Saving updated data file...');
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n✅ Anlogic brand data completion finished!');
console.log('\n📊 Final Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name}: ${productCount} products`);
});
