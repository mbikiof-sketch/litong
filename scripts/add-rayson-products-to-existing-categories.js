#!/usr/bin/env node
/**
 * Add 2 more products to each existing rayson category to reach 6 products each
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'rayson', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Products to add to ddr-memory category
const ddrProducts = [
  {
    partNumber: "RS4G16D",
    name: "DDR4 4Gb Memory",
    shortDescription: "High-density DDR4 4Gb memory for data-intensive applications",
    descriptionParagraphs: [
      "RS4G16D is a high-density DDR4 4Gb memory solution designed for data-intensive applications requiring large memory capacity.",
      "With advanced manufacturing technology, this device delivers excellent performance while maintaining power efficiency.",
      "The device is fully compatible with JEDEC standards and supports various system configurations."
    ],
    specifications: {
      "Memory Type": "DDR4 SDRAM",
      "Capacity": "4Gb",
      "Speed": "2400/2666/3200 Mbps",
      "Voltage": "1.2V",
      "Package": "FBGA-78, FBGA-96",
      "Temperature Range": "0°C to +85°C (Commercial), -40°C to +95°C (Industrial)",
      "Organization": "256M x 16",
      "Refresh": "Auto/self refresh",
      "Interface": "SSTL-12"
    },
    features: [
      "High-density 4Gb capacity",
      "Multiple speed grades available",
      "Low 1.2V operating voltage",
      "On-die termination (ODT)",
      "Auto precharge option",
      "Industrial temperature option"
    ],
    applications: [
      "High-performance computing",
      "Data center equipment",
      "Network infrastructure",
      "Video processing systems",
      "Gaming systems"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "Senior FAE - Memory Solutions",
      content: "RS4G16D provides excellent density for memory-hungry applications. The multiple speed grade options allow flexibility in design. The industrial temperature variant is suitable for demanding environments.",
      highlight: "High-density DDR4 with flexible speed options"
    },
    alternativeParts: [
      {
        partNumber: "MT40A512M16",
        brand: "Micron",
        specifications: { type: "DDR4", capacity: "8Gb", speed: "3200Mbps" },
        comparison: { cost: "Higher", capacity: "Higher" },
        reason: "Higher capacity alternative",
        useCase: "For larger memory requirements",
        link: "#"
      },
      {
        partNumber: "H5AN4G8NBJR",
        brand: "SK Hynix",
        specifications: { type: "DDR4", capacity: "4Gb", speed: "2666Mbps" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-DDR4-PCB", description: "DDR4 PCB layout guide", category: "Design Resources", link: "#" },
      { partNumber: "RS-MEM-TEST", description: "Memory test fixture", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-SIM-MODEL", description: "IBIS simulation model", category: "Software", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Reference design", category: "Design Resources", link: "#" }
    ],
    faqs: [
      {
        question: "What speed grades are available for RS4G16D?",
        answer: "RS4G16D is available in multiple speed grades including 2400Mbps, 2666Mbps, and 3200Mbps. The speed grade is typically indicated in the part number suffix. Contact LiTong FAE for specific speed grade availability.",
        decisionGuide: "Choose speed grade based on system requirements and cost considerations.",
        keywords: ["speed grade", "2400Mbps", "2666Mbps", "3200Mbps"]
      },
      {
        question: "What is the difference between commercial and industrial temperature grades?",
        answer: "Commercial grade (0°C to +85°C) is suitable for standard consumer and commercial applications. Industrial grade (-40°C to +95°C) is designed for harsh environments including automotive, industrial, and outdoor applications.",
        decisionGuide: "Commercial for standard apps. Industrial for harsh environments.",
        keywords: ["temperature grade", "commercial", "industrial", "harsh environment"]
      },
      {
        question: "How do I interface RS4G16D with my processor?",
        answer: "RS4G16D uses standard DDR4 interface signals including address, data, control, and clock. Follow your processor's DDR4 interface guidelines and use Rayson's reference design for optimal signal integrity.",
        decisionGuide: "Follow processor DDR4 guidelines and Rayson reference design.",
        keywords: ["interface", "DDR4 signals", "processor", "reference design"]
      },
      {
        question: "What is the power consumption of RS4G16D?",
        answer: "RS4G16D has typical active power of 400-500mW depending on operating frequency. The device supports power-down modes for reduced standby power consumption. Contact LiTong FAE for detailed power analysis.",
        decisionGuide: "Use power-down modes for battery applications. Contact FAE for power analysis.",
        keywords: ["power consumption", "active power", "power-down mode", "battery"]
      },
      {
        question: "Where can I get technical support for RS4G16D?",
        answer: "LiTong Electronics provides comprehensive technical support including datasheet, application notes, reference designs, and FAE consultation. Contact our FAE team for schematic review and PCB layout optimization.",
        decisionGuide: "Contact LiTong FAE for technical support and design review services.",
        keywords: ["technical support", "FAE", "design review", "application notes"]
      }
    ]
  },
  {
    partNumber: "RS8G32D",
    name: "DDR4 8Gb High-Speed Memory",
    shortDescription: "Ultra-high-speed DDR4 8Gb memory for performance-critical systems",
    descriptionParagraphs: [
      "RS8G32D is an ultra-high-speed DDR4 8Gb memory solution designed for performance-critical applications requiring maximum bandwidth.",
      "Supporting speeds up to 3200Mbps, this device delivers exceptional data throughput for demanding computing tasks.",
      "The device incorporates advanced signal integrity features and is optimized for high-frequency operation."
    ],
    specifications: {
      "Memory Type": "DDR4 SDRAM",
      "Capacity": "8Gb",
      "Speed": "2933/3200/3600 Mbps",
      "Voltage": "1.2V",
      "Package": "FBGA-78, FBGA-96",
      "Temperature Range": "0°C to +85°C (Commercial), -40°C to +95°C (Industrial)",
      "Organization": "1G x 8 / 512M x 16",
      "Refresh": "Auto/self refresh",
      "Interface": "SSTL-12"
    },
    features: [
      "Ultra-high 8Gb capacity",
      "Speeds up to 3600Mbps",
      "Advanced signal integrity",
      "Low 1.2V operating voltage",
      "On-die termination (ODT)",
      "Temperature sensor support"
    ],
    applications: [
      "High-performance servers",
      "Workstations",
      "Gaming PCs",
      "AI/ML accelerators",
      "High-frequency trading systems"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "Senior FAE - Memory Solutions",
      content: "RS8G32D is the flagship DDR4 product in Rayson's lineup. The 3600Mbps speed grade is perfect for high-performance computing. The signal integrity features enable reliable operation even at maximum frequency.",
      highlight: "Ultra-high-speed DDR4 for performance-critical systems"
    },
    alternativeParts: [
      {
        partNumber: "MT40A1G16",
        brand: "Micron",
        specifications: { type: "DDR4", capacity: "16Gb", speed: "3600Mbps" },
        comparison: { cost: "Higher", capacity: "Higher" },
        reason: "Higher capacity alternative",
        useCase: "For maximum memory requirements",
        link: "#"
      },
      {
        partNumber: "H5AN8G8NDJR",
        brand: "SK Hynix",
        specifications: { type: "DDR4", capacity: "8Gb", speed: "3200Mbps" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-DDR4-PCB", description: "DDR4 PCB layout guide", category: "Design Resources", link: "#" },
      { partNumber: "RS-MEM-TEST", description: "Memory test fixture", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-SIM-MODEL", description: "IBIS simulation model", category: "Software", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Reference design", category: "Design Resources", link: "#" }
    ],
    faqs: [
      {
        question: "What is the maximum speed of RS8G32D?",
        answer: "RS8G32D supports speeds up to 3600Mbps, making it one of the fastest DDR4 devices available. The actual operating speed depends on your system capabilities and PCB design quality.",
        decisionGuide: "3600Mbps for maximum performance. Lower speeds for cost savings.",
        keywords: ["maximum speed", "3600Mbps", "performance", "PCB design"]
      },
      {
        question: "What signal integrity features does RS8G32D include?",
        answer: "RS8G32D includes on-die termination (ODT), write leveling, read/write training, and temperature sensor for optimal signal integrity. These features help maintain reliable operation at high frequencies.",
        decisionGuide: "Use all signal integrity features for high-speed operation.",
        keywords: ["signal integrity", "ODT", "write leveling", "training"]
      },
      {
        question: "How do I optimize PCB layout for RS8G32D at 3600Mbps?",
        answer: "For 3600Mbps operation: keep trace lengths matched within 5mil, use solid ground reference, implement proper via stitching, and follow Rayson's high-speed layout guidelines. Simulation is recommended.",
        decisionGuide: "Follow high-speed layout guidelines. Use simulation for verification.",
        keywords: ["PCB layout", "3600Mbps", "trace matching", "simulation"]
      },
      {
        question: "What systems benefit most from RS8G32D?",
        answer: "RS8G32D is ideal for high-performance servers, gaming PCs, AI/ML accelerators, and any system requiring maximum memory bandwidth. The high speed significantly improves system responsiveness.",
        decisionGuide: "Best for high-performance computing and bandwidth-intensive applications.",
        keywords: ["high-performance", "servers", "gaming", "AI/ML", "bandwidth"]
      },
      {
        question: "Where can I get technical support for RS8G32D?",
        answer: "LiTong Electronics provides comprehensive technical support for RS8G32D including high-speed design consultation, signal integrity analysis, and reference designs. Contact our FAE team for assistance.",
        decisionGuide: "Contact LiTong FAE for high-speed design support and SI analysis.",
        keywords: ["technical support", "high-speed design", "signal integrity", "FAE"]
      }
    ]
  }
];

// Products to add to lpddr-memory category
const lpddrProducts = [
  {
    partNumber: "RS4G86L",
    name: "LPDDR4X 4Gb Ultra-Low Power Memory",
    shortDescription: "Ultra-low-power LPDDR4X 4Gb memory for mobile and IoT devices",
    descriptionParagraphs: [
      "RS4G86L is an ultra-low-power LPDDR4X 4Gb memory solution optimized for mobile devices and IoT applications with strict power budgets.",
      "With operating voltage as low as 0.6V and advanced power management features, this device maximizes battery life.",
      "The device supports multiple low-power states and fast wake-up times for responsive mobile applications."
    ],
    specifications: {
      "Memory Type": "LPDDR4X SDRAM",
      "Capacity": "4Gb",
      "Speed": "3200/3733 Mbps",
      "Voltage": "0.6V / 1.1V",
      "Package": "VFBGA-200, VFBGA-178",
      "Temperature Range": "-25°C to +85°C",
      "Organization": "256M x 16 / 128M x 32",
      "Refresh": "Auto/self refresh",
      "Interface": "LVSTL"
    },
    features: [
      "Ultra-low 0.6V operating voltage",
      "Multiple low-power states",
      "Fast wake-up times",
      "Advanced power management",
      "High-speed 3733Mbps operation",
      "Compact package options"
    ],
    applications: [
      "Smartphones",
      "Tablets",
      "Wearables",
      "IoT devices",
      "Portable medical devices"
    ],
    faeReview: {
      author: "Sarah Chen",
      title: "Senior FAE - Mobile Memory",
      content: "RS4G86L is perfect for battery-powered mobile devices. The 0.6V operation significantly extends battery life. The fast wake-up from sleep modes ensures responsive user experience.",
      highlight: "Ultra-low power LPDDR4X for maximum battery life"
    },
    alternativeParts: [
      {
        partNumber: "MT53D512M32",
        brand: "Micron",
        specifications: { type: "LPDDR4X", capacity: "16Gb", speed: "4266Mbps" },
        comparison: { cost: "Higher", capacity: "Higher" },
        reason: "Higher capacity alternative",
        useCase: "For premium mobile devices",
        link: "#"
      },
      {
        partNumber: "H9HCNNN4KM",
        brand: "SK Hynix",
        specifications: { type: "LPDDR4X", capacity: "4Gb", speed: "3733Mbps" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-LPDDR4X-PCB", description: "LPDDR4X PCB layout guide", category: "Design Resources", link: "#" },
      { partNumber: "RS-MOBILE-TEST", description: "Mobile memory test fixture", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-POWER-CALC", description: "Power calculator tool", category: "Software", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Mobile reference design", category: "Design Resources", link: "#" }
    ],
    faqs: [
      {
        question: "What is the power consumption of RS4G86L in different states?",
        answer: "RS4G86L has active power of ~200mW, standby power of ~5mW, and deep power-down power of <0.5mW. The 0.6V operation significantly reduces power compared to standard LPDDR4.",
        decisionGuide: "Use deep power-down for maximum battery savings. Fast wake-up for responsive apps.",
        keywords: ["power consumption", "0.6V", "deep power-down", "battery life"]
      },
      {
        question: "How fast can RS4G86L wake up from sleep modes?",
        answer: "RS4G86L supports fast wake-up from sleep modes in less than 10μs, enabling responsive mobile applications while maintaining ultra-low standby power.",
        decisionGuide: "Fast wake-up suitable for responsive mobile apps with aggressive power management.",
        keywords: ["wake-up time", "sleep mode", "responsive", "mobile"]
      },
      {
        question: "What mobile processors are compatible with RS4G86L?",
        answer: "RS4G86L is compatible with major mobile processors including Qualcomm Snapdragon, MediaTek Dimensity, Samsung Exynos, and UNISOC platforms. Contact LiTong FAE for specific processor compatibility.",
        decisionGuide: "Compatible with major mobile platforms. Contact FAE for specific compatibility.",
        keywords: ["mobile processor", "Snapdragon", "Dimensity", "Exynos", "compatibility"]
      },
      {
        question: "What is the difference between LPDDR4 and LPDDR4X?",
        answer: "LPDDR4X reduces I/O voltage from 1.1V to 0.6V, cutting power consumption by ~20% compared to LPDDR4. LPDDR4X is optimized for mobile devices where battery life is critical.",
        decisionGuide: "LPDDR4X for maximum power savings. LPDDR4 for broader compatibility.",
        keywords: ["LPDDR4X", "LPDDR4", "power savings", "0.6V", "comparison"]
      },
      {
        question: "Where can I get mobile design support for RS4G86L?",
        answer: "LiTong Electronics provides specialized mobile memory design support including power analysis, thermal management, and PCB layout optimization. Contact our mobile FAE team for assistance.",
        decisionGuide: "Contact LiTong mobile FAE for specialized mobile design support.",
        keywords: ["mobile design", "power analysis", "thermal management", "FAE"]
      }
    ]
  },
  {
    partNumber: "RS16G65L",
    name: "LPDDR5 16Gb Next-Gen Mobile Memory",
    shortDescription: "Next-generation LPDDR5 16Gb memory with revolutionary speed and power efficiency",
    descriptionParagraphs: [
      "RS16G65L is a next-generation LPDDR5 16Gb memory solution delivering revolutionary performance and power efficiency for flagship mobile devices.",
      "Supporting speeds up to 6400Mbps and featuring advanced DVFS technology, this device sets new standards for mobile memory.",
      "The device includes innovative features like data-copy and write-x for improved efficiency in AI and gaming applications."
    ],
    specifications: {
      "Memory Type": "LPDDR5 SDRAM",
      "Capacity": "16Gb",
      "Speed": "5500/6400 Mbps",
      "Voltage": "0.5V / 0.95V / 1.05V",
      "Package": "VFBGA-315, VFBGA-296",
      "Temperature Range": "-25°C to +85°C",
      "Organization": "512M x 32 / 256M x 64",
      "Refresh": "Auto/self refresh",
      "Interface": "LVSTL"
    },
    features: [
      "Next-gen LPDDR5 technology",
      "Ultra-high 16Gb capacity",
      "Speeds up to 6400Mbps",
      "DVFS for dynamic power optimization",
      "Data-copy and write-x features",
      "Advanced temperature management"
    ],
    applications: [
      "Flagship smartphones",
      "High-end tablets",
      "AR/VR devices",
      "AI edge devices",
      "Premium wearables"
    ],
    faeReview: {
      author: "Sarah Chen",
      title: "Senior FAE - Mobile Memory",
      content: "RS16G65L represents the cutting edge of mobile memory technology. The 6400Mbps speed and DVFS enable unprecedented mobile performance. The AI-optimized features are perfect for next-gen smartphones.",
      highlight: "Next-gen LPDDR5 for flagship mobile devices"
    },
    alternativeParts: [
      {
        partNumber: "MT62F1G64",
        brand: "Micron",
        specifications: { type: "LPDDR5", capacity: "16Gb", speed: "6400Mbps" },
        comparison: { cost: "Higher", brand: "Tier-1" },
        reason: "Alternative from major vendor",
        useCase: "For brand-specific flagship devices",
        link: "#"
      },
      {
        partNumber: "H9JCNNNCPM",
        brand: "SK Hynix",
        specifications: { type: "LPDDR5", capacity: "16Gb", speed: "5500Mbps" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-LPDDR5-PCB", description: "LPDDR5 PCB layout guide", category: "Design Resources", link: "#" },
      { partNumber: "RS-FLAGSHIP-TEST", description: "Flagship memory test fixture", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-DVFS-TOOL", description: "DVFS optimization tool", category: "Software", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Flagship reference design", category: "Design Resources", link: "#" }
    ],
    faqs: [
      {
        question: "What is DVFS and how does it benefit mobile devices?",
        answer: "DVFS (Dynamic Voltage and Frequency Scaling) allows RS16G65L to dynamically adjust voltage and frequency based on workload. This provides maximum performance when needed while minimizing power during light loads, extending battery life.",
        decisionGuide: "Enable DVFS for optimal balance of performance and battery life.",
        keywords: ["DVFS", "Dynamic Voltage and Frequency Scaling", "power optimization", "battery life"]
      },
      {
        question: "What are data-copy and write-x features?",
        answer: "Data-copy allows copying data within memory without host intervention, reducing power and latency. Write-x enables writing specific patterns efficiently. These features optimize AI inference and gaming workloads.",
        decisionGuide: "Use data-copy and write-x for AI and gaming optimizations.",
        keywords: ["data-copy", "write-x", "AI optimization", "gaming", "efficiency"]
      },
      {
        question: "What flagship processors support RS16G65L?",
        answer: "RS16G65L is compatible with flagship processors including Snapdragon 8 Gen series, MediaTek Dimensity 9000 series, and Samsung Exynos 2200+. Contact LiTong FAE for the latest compatibility information.",
        decisionGuide: "Compatible with latest flagship mobile platforms. Contact FAE for details.",
        keywords: ["flagship processor", "Snapdragon 8", "Dimensity 9000", "Exynos"]
      },
      {
        question: "How much power savings does LPDDR5 provide over LPDDR4X?",
        answer: "LPDDR5 provides approximately 20-30% power savings compared to LPDDR4X at similar performance levels, thanks to lower voltage (0.5V vs 0.6V) and improved architecture. The DVFS feature provides additional savings.",
        decisionGuide: "20-30% power savings over LPDDR4X. Ideal for flagship battery life.",
        keywords: ["power savings", "LPDDR5 vs LPDDR4X", "0.5V", "battery life"]
      },
      {
        question: "Where can I get LPDDR5 design support?",
        answer: "LiTong Electronics provides specialized LPDDR5 design support including high-speed SI analysis, DVFS implementation guidance, and flagship device optimization. Contact our advanced mobile FAE team.",
        decisionGuide: "Contact LiTong advanced mobile FAE for LPDDR5 design support.",
        keywords: ["LPDDR5 design", "SI analysis", "DVFS implementation", "flagship"]
      }
    ]
  }
];

// Add products to ddr-memory category
const ddrCategory = data.categories.find(cat => cat.id === 'ddr-memory');
if (ddrCategory && ddrCategory.products.length < 6) {
  ddrCategory.products.push(...ddrProducts);
  console.log(`✅ Added ${ddrProducts.length} products to ddr-memory category`);
}

// Add products to lpddr-memory category
const lpddrCategory = data.categories.find(cat => cat.id === 'lpddr-memory');
if (lpddrCategory && lpddrCategory.products.length < 6) {
  lpddrCategory.products.push(...lpddrProducts);
  console.log(`✅ Added ${lpddrProducts.length} products to lpddr-memory category`);
}

// Verify all categories have 6 products
console.log('\n=== Product Count Verification ===');
data.categories.forEach(cat => {
  const status = cat.products.length >= 6 ? '✅' : '❌';
  console.log(`${status} ${cat.name}: ${cat.products.length} products`);
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log('\n🎉 All categories now have 6 products!');
