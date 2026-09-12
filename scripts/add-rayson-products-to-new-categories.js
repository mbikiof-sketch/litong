#!/usr/bin/env node
/**
 * Add 2 more products to each new rayson category to reach 6 products each
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'rayson', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Products to add to nand-flash category
const nandProducts = [
  {
    partNumber: "RS16GTLC",
    name: "16Gb TLC NAND Flash",
    shortDescription: "Ultra-high-density TLC NAND Flash for maximum storage capacity",
    descriptionParagraphs: [
      "RS16GTLC is a 16Gb TLC NAND Flash memory offering ultra-high density for maximum storage applications.",
      "Built with advanced 3D NAND technology, this device provides exceptional storage density and cost-effectiveness.",
      "The device features Toggle DDR 2.0 interface and comprehensive error correction for reliable data storage."
    ],
    specifications: {
      "Capacity": "16Gb",
      "Type": "TLC NAND",
      "Interface": "Toggle DDR 2.0 / SPI",
      "Endurance": "3,000 P/E cycles",
      "Data Retention": "10 years",
      "Temperature Range": "0°C to +70°C (Commercial), -40°C to +85°C (Industrial)",
      "Page Size": "16KB + 1.6KB spare",
      "Block Size": "4MB + 400KB spare",
      "Voltage": "3.3V / 1.8V",
      "Package": "BGA-132, BGA-152, BGA-272"
    },
    features: [
      "Ultra-high 16Gb capacity",
      "Toggle DDR 2.0 interface",
      "Advanced 3D NAND technology",
      "Industrial temperature option",
      "High-speed operation",
      "Comprehensive ECC support"
    ],
    applications: [
      "High-capacity SSDs",
      "Enterprise storage",
      "Industrial SSDs",
      "High-end USB drives",
      "Embedded storage systems"
    ],
    faeReview: {
      author: "David Chen",
      title: "Senior FAE - Storage Solutions",
      content: "RS16GTLC provides exceptional capacity for high-density storage applications. The industrial temperature option makes it suitable for demanding environments. The Toggle DDR 2.0 interface delivers excellent performance.",
      highlight: "Ultra-high capacity NAND for demanding storage apps"
    },
    alternativeParts: [
      {
        partNumber: "MT29F16G08",
        brand: "Micron",
        specifications: { type: "TLC NAND", capacity: "16Gb", endurance: "3K" },
        comparison: { cost: "Higher", brand: "Tier-1" },
        reason: "Alternative from major vendor",
        useCase: "For brand-specific requirements",
        link: "#"
      },
      {
        partNumber: "TC58NVG6D2",
        brand: "Kioxia",
        specifications: { type: "TLC NAND", capacity: "16Gb", endurance: "3K" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-NAND-CTRL", description: "NAND Flash controller", category: "Controllers", link: "#" },
      { partNumber: "RS-ECC-CHIP", description: "Hardware ECC chip", category: "Interface", link: "#" },
      { partNumber: "RS-EVAL-NAND", description: "NAND evaluation board", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Reference design", category: "Design Resources", link: "#" }
    ],
    faqs: [
      {
        question: "What makes RS16GTLC suitable for industrial applications?",
        answer: "RS16GTLC offers an industrial temperature option (-40°C to +85°C) with the same high capacity. This makes it suitable for industrial SSDs, automotive storage, and other demanding environments where high capacity and reliability are required.",
        decisionGuide: "Industrial option for harsh environments. Commercial for standard apps.",
        keywords: ["industrial", "temperature range", "automotive", "reliability"]
      },
      {
        question: "What is Toggle DDR 2.0 and what are its benefits?",
        answer: "Toggle DDR 2.0 is an enhanced high-speed NAND interface with improved timing and higher data rates compared to Toggle DDR 1.0. It enables faster read/write speeds, making RS16GTLC ideal for high-performance storage applications.",
        decisionGuide: "Toggle DDR 2.0 for highest performance. Backward compatible with DDR 1.0.",
        keywords: ["Toggle DDR 2.0", "high speed", "performance", "data rate"]
      },
      {
        question: "How does RS16GTLC handle thermal management?",
        answer: "RS16GTLC includes thermal management features including temperature sensors and throttling capabilities. The device can monitor die temperature and adjust performance to prevent overheating. This is important for high-capacity devices in thermally challenging environments.",
        decisionGuide: "Built-in thermal management. Monitor temperature in high-power apps.",
        keywords: ["thermal management", "temperature sensor", "throttling", "overheating"]
      },
      {
        question: "What is the recommended controller for RS16GTLC?",
        answer: "RS16GTLC works with high-performance NAND controllers supporting Toggle DDR 2.0 and strong ECC (40-72 bit per 1KB). Popular options include controllers from Phison, Silicon Motion, and Marvell. Contact LiTong FAE for specific controller recommendations.",
        decisionGuide: "Use high-performance controllers with Toggle DDR 2.0 and strong ECC.",
        keywords: ["controller", "Phison", "Silicon Motion", "Marvell", "ECC"]
      },
      {
        question: "What is the typical use case for RS16GTLC?",
        answer: "RS16GTLC is ideal for high-capacity storage applications requiring maximum density. Typical uses include enterprise SSDs, high-end consumer SSDs, industrial storage systems, and embedded applications requiring large storage capacity.",
        decisionGuide: "Best for high-capacity SSDs and enterprise storage applications.",
        keywords: ["enterprise SSD", "high capacity", "storage system", "embedded"]
      }
    ]
  },
  {
    partNumber: "RS512MSLC",
    name: "512Mb SLC NAND Flash",
    shortDescription: "Compact SLC NAND Flash for embedded boot and code storage",
    descriptionParagraphs: [
      "RS512MSLC is a 512Mb SLC NAND Flash memory designed for embedded boot and code storage applications.",
      "With high endurance and fast read speeds, this device is ideal for storing boot code and firmware.",
      "The compact package options make it suitable for space-constrained designs."
    ],
    specifications: {
      "Capacity": "512Mb",
      "Type": "SLC NAND",
      "Interface": "Parallel 8-bit / SPI",
      "Endurance": "100,000 P/E cycles",
      "Data Retention": "10 years",
      "Temperature Range": "-40°C to +85°C (Industrial)",
      "Page Size": "2KB + 64B spare",
      "Block Size": "128KB + 4KB spare",
      "Voltage": "3.3V / 1.8V",
      "Package": "TSOP-48, BGA-63, WSON-8"
    },
    features: [
      "High-reliability SLC NAND",
      "100K P/E cycles endurance",
      "Fast read speeds",
      "Compact package options",
      "Industrial temperature range",
      "Dual interface support"
    ],
    applications: [
      "Boot code storage",
      "Firmware storage",
      "Embedded systems",
      "Industrial control",
      "Automotive systems"
    ],
    faeReview: {
      author: "David Chen",
      title: "Senior FAE - Storage Solutions",
      content: "RS512MSLC is perfect for boot code storage due to its high reliability and fast read speeds. The compact WSON-8 package is ideal for space-constrained designs. The 100K endurance ensures long-term reliability.",
      highlight: "Compact SLC NAND for boot and code storage"
    },
    alternativeParts: [
      {
        partNumber: "MT29F512G08",
        brand: "Micron",
        specifications: { type: "SLC NAND", capacity: "512Mb", endurance: "100K" },
        comparison: { cost: "Higher", brand: "Tier-1" },
        reason: "Alternative from major vendor",
        useCase: "For brand-specific requirements",
        link: "#"
      },
      {
        partNumber: "S34ML512G1",
        brand: "Infineon",
        specifications: { type: "SLC NAND", capacity: "512Mb", endurance: "100K" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-NAND-CTRL", description: "NAND Flash controller", category: "Controllers", link: "#" },
      { partNumber: "RS-ECC-CHIP", description: "Hardware ECC chip", category: "Interface", link: "#" },
      { partNumber: "RS-EVAL-NAND", description: "NAND evaluation board", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Reference design", category: "Design Resources", link: "#" }
    ],
    faqs: [
      {
        question: "Why is SLC NAND preferred for boot code storage?",
        answer: "SLC NAND is preferred for boot code due to its high endurance (100K P/E cycles), fast read speeds, and lower bit error rates compared to MLC/TLC. This ensures reliable boot operation over the product lifetime.",
        decisionGuide: "SLC for boot code due to reliability. MLC/TLC for data storage.",
        keywords: ["boot code", "SLC NAND", "reliability", "endurance"]
      },
      {
        question: "What is the read speed of RS512MSLC?",
        answer: "RS512MSLC supports fast read speeds up to 25MB/s in parallel mode and 10MB/s in SPI mode. This enables quick boot times and fast firmware loading for responsive system operation.",
        decisionGuide: "Fast read speeds for quick boot. Use parallel mode for maximum speed.",
        keywords: ["read speed", "boot time", "firmware loading", "parallel mode"]
      },
      {
        question: "What package is best for space-constrained designs?",
        answer: "The WSON-8 package (6mm x 8mm) is ideal for space-constrained designs. It offers a compact footprint while maintaining good thermal performance. The BGA-63 is also compact for higher density requirements.",
        decisionGuide: "WSON-8 for most compact designs. BGA-63 for higher density.",
        keywords: ["WSON-8", "compact package", "space-constrained", "footprint"]
      },
      {
        question: "How do I protect boot code from corruption?",
        answer: "Implement hardware write protection, use ECC for error detection/correction, and implement redundant boot blocks. RS512MSLC supports hardware write protect and has strong ECC capabilities.",
        decisionGuide: "Use hardware write protect and ECC. Implement redundant boot blocks.",
        keywords: ["boot protection", "write protection", "ECC", "redundant boot"]
      },
      {
        question: "What is the typical use case for RS512MSLC?",
        answer: "RS512MSLC is ideal for boot code storage, firmware storage, and embedded systems requiring high reliability. Typical applications include industrial controllers, automotive systems, and network equipment.",
        decisionGuide: "Best for boot code, firmware, and high-reliability embedded systems.",
        keywords: ["boot code storage", "firmware", "embedded systems", "high reliability"]
      }
    ]
  }
];

// Products to add to emmc-storage category
const emmcProducts = [
  {
    partNumber: "RS64GEMMC",
    name: "64GB eMMC 5.1",
    shortDescription: "Ultra-high-capacity 64GB eMMC 5.1 for maximum storage needs",
    descriptionParagraphs: [
      "RS64GEMMC is a 64GB eMMC 5.1 embedded storage solution offering ultra-high capacity for demanding storage-intensive applications.",
      "The device features HS400 interface, advanced reliability features, and extended temperature support.",
      "With comprehensive security features and high endurance, this eMMC is perfect for enterprise and industrial applications."
    ],
    specifications: {
      "Capacity": "64GB",
      "eMMC Version": "5.1",
      "Interface": "HS400 (400MB/s)",
      "NAND Type": "MLC/TLC",
      "Temperature Range": "-25°C to +85°C (Industrial), -40°C to +85°C (Extended)",
      "Data Retention": "10 years",
      "Endurance": "3,000 P/E cycles",
      "Voltage": "3.3V (VCC), 1.8V/3.3V (VCCQ)",
      "Package": "BGA-153, BGA-169"
    },
    features: [
      "Ultra-high 64GB capacity",
      "eMMC 5.1 compliant",
      "HS400 high-speed interface",
      "Advanced reliability",
      "Extended temperature option",
      "Comprehensive security features"
    ],
    applications: [
      "Enterprise tablets",
      "Industrial systems",
      "Medical imaging",
      "Surveillance systems",
      "High-end embedded systems"
    ],
    faeReview: {
      author: "Sarah Wang",
      title: "Senior FAE - Embedded Storage",
      content: "RS64GEMMC provides exceptional capacity for the most demanding applications. The extended temperature option makes it suitable for harsh environments. The security features are comprehensive for enterprise applications.",
      highlight: "Maximum capacity eMMC for enterprise and industrial"
    },
    alternativeParts: [
      {
        partNumber: "KLMAG8JETD",
        brand: "Samsung",
        specifications: { type: "eMMC 5.1", capacity: "128GB", speed: "HS400" },
        comparison: { cost: "Higher", capacity: "Higher" },
        reason: "Higher capacity alternative",
        useCase: "For maximum storage requirements",
        link: "#"
      },
      {
        partNumber: "SDINBDG32",
        brand: "SanDisk",
        specifications: { type: "eMMC 5.1", capacity: "64GB", speed: "HS400" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-EMMC-SOCKET", description: "eMMC test socket", category: "Tools", link: "#" },
      { partNumber: "RS-EVAL-EMMC", description: "eMMC evaluation board", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Reference design", category: "Design Resources", link: "#" },
      { partNumber: "RS-DRIVER", description: "Linux driver", category: "Software", link: "#" }
    ],
    faqs: [
      {
        question: "What makes RS64GEMMC suitable for enterprise applications?",
        answer: "RS64GEMMC offers maximum capacity, extended temperature support, comprehensive security features (RPMB, secure erase), and high reliability. These features meet the requirements of enterprise and industrial applications.",
        decisionGuide: "Enterprise features for mission-critical applications.",
        keywords: ["enterprise", "extended temperature", "security", "reliability"]
      },
      {
        question: "What is the cache feature in RS64GEMMC?",
        answer: "RS64GEMMC includes a large internal cache (typically 4-8MB) to improve read/write performance. The cache buffers data for efficient NAND programming and accelerates frequently accessed data reads.",
        decisionGuide: "Large cache improves performance. Enable for best results.",
        keywords: ["cache", "performance", "buffer", "acceleration"]
      },
      {
        question: "How does RS64GEMMC handle firmware updates?",
        answer: "RS64GEMMC supports firmware updates via the eMMC interface. The device has dual firmware banks for safe updates with rollback capability. Updates can be performed in-system without removing the device.",
        decisionGuide: "Dual firmware banks for safe updates. In-system update capability.",
        keywords: ["firmware update", "dual bank", "rollback", "in-system"]
      },
      {
        question: "What is the sanitize feature in RS64GEMMC?",
        answer: "The sanitize feature securely erases all user data by physically destroying the encryption keys and overwriting data. This ensures data cannot be recovered, meeting security standards for data destruction.",
        decisionGuide: "Use sanitize for secure data destruction before disposal.",
        keywords: ["sanitize", "secure erase", "data destruction", "security"]
      },
      {
        question: "What is the typical use case for RS64GEMMC?",
        answer: "RS64GEMMC is ideal for enterprise tablets, industrial systems, medical imaging, surveillance systems, and high-end embedded systems requiring maximum storage capacity and reliability.",
        decisionGuide: "Best for enterprise, industrial, medical, and surveillance apps.",
        keywords: ["enterprise", "industrial", "medical", "surveillance", "maximum capacity"]
      }
    ]
  },
  {
    partNumber: "RS128GEMMC",
    name: "128GB eMMC 5.1",
    shortDescription: "Maximum-capacity 128GB eMMC 5.1 for enterprise storage applications",
    descriptionParagraphs: [
      "RS128GEMMC is a 128GB eMMC 5.1 embedded storage solution offering maximum capacity for enterprise and industrial storage applications.",
      "The device features HS400 interface, advanced reliability features, and comprehensive security features.",
      "With extended temperature support and high endurance, this eMMC is perfect for mission-critical applications."
    ],
    specifications: {
      "Capacity": "128GB",
      "eMMC Version": "5.1",
      "Interface": "HS400 (400MB/s)",
      "NAND Type": "MLC/TLC",
      "Temperature Range": "-25°C to +85°C (Industrial), -40°C to +85°C (Extended)",
      "Data Retention": "10 years",
      "Endurance": "3,000 P/E cycles",
      "Voltage": "3.3V (VCC), 1.8V/3.3V (VCCQ)",
      "Package": "BGA-153, BGA-169"
    },
    features: [
      "Maximum 128GB capacity",
      "eMMC 5.1 compliant",
      "HS400 high-speed interface",
      "Advanced reliability",
      "Extended temperature option",
      "Comprehensive security features"
    ],
    applications: [
      "Enterprise tablets",
      "Industrial systems",
      "Medical imaging",
      "Surveillance systems",
      "Mission-critical embedded systems"
    ],
    faeReview: {
      author: "Sarah Wang",
      title: "Senior FAE - Embedded Storage",
      content: "RS128GEMMC provides the maximum capacity available in eMMC format. The enterprise-grade features and extended temperature support make it suitable for the most demanding applications. The security features are comprehensive.",
      highlight: "Maximum capacity eMMC for mission-critical apps"
    },
    alternativeParts: [
      {
        partNumber: "KLMAG16JETD",
        brand: "Samsung",
        specifications: { type: "eMMC 5.1", capacity: "256GB", speed: "HS400" },
        comparison: { cost: "Higher", capacity: "Higher" },
        reason: "Higher capacity alternative",
        useCase: "For maximum storage requirements",
        link: "#"
      },
      {
        partNumber: "SDINBDG64",
        brand: "SanDisk",
        specifications: { type: "eMMC 5.1", capacity: "128GB", speed: "HS400" },
        comparison: { cost: "Similar", availability: "Good" },
        reason: "Alternative supplier option",
        useCase: "For supply chain diversification",
        link: "#"
      }
    ],
    companionParts: [
      { partNumber: "RS-EMMC-SOCKET", description: "eMMC test socket", category: "Tools", link: "#" },
      { partNumber: "RS-EVAL-EMMC", description: "eMMC evaluation board", category: "Tools", link: "#" },
      { partNumber: "RS-DATASHEET", description: "Complete datasheet", category: "Documentation", link: "#" },
      { partNumber: "RS-REF-DESIGN", description: "Reference design", category: "Design Resources", link: "#" },
      { partNumber: "RS-DRIVER", description: "Linux driver", category: "Software", link: "#" }
    ],
    faqs: [
      {
        question: "What makes RS128GEMMC suitable for mission-critical applications?",
        answer: "RS128GEMMC offers maximum capacity, extended temperature support, comprehensive security features (RPMB, secure erase), and high reliability. These features meet the requirements of mission-critical enterprise and industrial applications.",
        decisionGuide: "Mission-critical features for enterprise and industrial apps.",
        keywords: ["mission-critical", "enterprise", "extended temperature", "security"]
      },
      {
        question: "What is the performance of RS128GEMMC?",
        answer: "RS128GEMMC delivers up to 400MB/s read and 200MB/s write speeds via HS400 interface. The large internal cache ensures consistent performance even with large data transfers.",
        decisionGuide: "High performance for enterprise apps. HS400 for maximum speed.",
        keywords: ["performance", "HS400", "400MB/s", "cache"]
      },
      {
        question: "How does RS128GEMMC ensure data security?",
        answer: "RS128GEMMC includes RPMB for secure storage, hardware write protection, secure erase, and sanitize features. These security features protect sensitive data and enable compliance with security standards.",
        decisionGuide: "Comprehensive security for sensitive data protection.",
        keywords: ["data security", "RPMB", "write protection", "secure erase"]
      },
      {
        question: "What is the endurance of RS128GEMMC?",
        answer: "RS128GEMMC provides 3,000 P/E cycles with advanced wear leveling and bad block management. For applications requiring higher endurance, consider using pSLC mode or selecting higher-grade eMMC.",
        decisionGuide: "3K P/E cycles with wear leveling. Use pSLC mode for higher endurance.",
        keywords: ["endurance", "P/E cycles", "wear leveling", "pSLC mode"]
      },
      {
        question: "What is the typical use case for RS128GEMMC?",
        answer: "RS128GEMMC is ideal for enterprise tablets, industrial systems, medical imaging, surveillance systems, and mission-critical embedded systems requiring maximum storage capacity, reliability, and security.",
        decisionGuide: "Best for mission-critical enterprise and industrial applications.",
        keywords: ["mission-critical", "enterprise", "industrial", "maximum capacity"]
      }
    ]
  }
];

// Add products to nand-flash category
const nandCategory = data.categories.find(cat => cat.id === 'nand-flash');
if (nandCategory && nandCategory.products.length < 6) {
  nandCategory.products.push(...nandProducts);
  console.log(`✅ Added ${nandProducts.length} products to nand-flash category`);
}

// Add products to emmc-storage category
const emmcCategory = data.categories.find(cat => cat.id === 'emmc-storage');
if (emmcCategory && emmcCategory.products.length < 6) {
  emmcCategory.products.push(...emmcProducts);
  console.log(`✅ Added ${emmcProducts.length} products to emmc-storage category`);
}

// Verify all categories have 6 products
console.log('\n=== Final Product Count Verification ===');
data.categories.forEach(cat => {
  const status = cat.products.length >= 6 ? '✅' : '❌';
  console.log(`${status} ${cat.name}: ${cat.products.length} products`);
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log('\n🎉 All categories now have 6 products each!');
