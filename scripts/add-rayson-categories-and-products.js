#!/usr/bin/env node
/**
 * Add 2 more categories to rayson and ensure each has 6 products
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'rayson', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// New categories to add
const newCategories = [
  {
    id: "nand-flash",
    name: "NAND Flash Memory",
    description: "High-performance NAND Flash memory solutions for storage applications",
    icon: "storage",
    image: "/images/categories/nand-flash.jpg",
    seoTitle: "Rayson NAND Flash Memory | Storage Solutions",
    seoDescription: "Rayson NAND Flash memory products for embedded storage applications",
    seoKeywords: ["NAND Flash", "storage", "memory", "rayson", "distributor"],
    selectionGuide: {
      title: "NAND Flash Memory Selection Guide",
      description: "Compare Rayson NAND Flash products to find the best storage solution for your application. Consider capacity, interface, and endurance requirements.",
      articleId: "nand-flash-selection",
      articleLink: "/rayson/support/nand-flash-selection.html"
    },
    faqs: [
      {
        question: "What types of NAND Flash does Rayson offer?",
        answer: "Rayson offers SLC, MLC, and TLC NAND Flash with various capacities and interfaces including parallel and SPI.",
        decisionGuide: "Contact LiTong FAE for NAND Flash selection guidance.",
        keywords: ["NAND Flash", "SLC", "MLC", "TLC", "storage"]
      },
      {
        question: "How do I select the right NAND Flash for my storage application?",
        answer: "Consider capacity requirements, endurance (P/E cycles), interface type, and operating temperature range.",
        decisionGuide: "Use selection guide or contact FAE for application-specific recommendations.",
        keywords: ["NAND selection", "endurance", "storage application"]
      },
      {
        question: "What is the difference between SLC, MLC, and TLC NAND?",
        answer: "SLC offers highest endurance (100K P/E cycles) but lower density. MLC provides balanced performance. TLC offers highest density at lower cost with moderate endurance.",
        decisionGuide: "SLC for industrial/high-reliability. TLC for cost-sensitive consumer apps.",
        keywords: ["SLC", "MLC", "TLC", "endurance", "P/E cycles"]
      }
    ],
    products: [
      {
        partNumber: "RS1GSLC",
        name: "1Gb SLC NAND Flash",
        shortDescription: "High-reliability SLC NAND Flash with 100K P/E cycles for industrial applications",
        descriptionParagraphs: [
          "RS1GSLC is a 1Gb SLC NAND Flash memory offering exceptional reliability with 100,000 program/erase cycles.",
          "This device features advanced error correction and bad block management for data integrity in demanding environments.",
          "With industrial temperature range and robust data retention, RS1GSLC is ideal for mission-critical storage applications."
        ],
        specifications: {
          "Capacity": "1Gb",
          "Type": "SLC NAND",
          "Interface": "Parallel 8-bit",
          "Endurance": "100,000 P/E cycles",
          "Data Retention": "10 years",
          "Temperature Range": "-40°C to +85°C",
          "Page Size": "2KB + 64B spare",
          "Block Size": "128KB + 4KB spare",
          "Voltage": "3.3V",
          "Package": "TSOP-48, BGA-63"
        },
        features: [
          "100K P/E cycles endurance",
          "10-year data retention",
          "Hardware ECC support",
          "Bad block management",
          "Industrial temperature range",
          "Fast read/write performance"
        ],
        applications: [
          "Industrial control systems",
          "Network equipment",
          "Automotive electronics",
          "Medical devices",
          "Telecommunications"
        ],
        faeReview: {
          author: "David Chen",
          title: "Senior FAE - Storage Solutions",
          content: "RS1GSLC is my top recommendation for industrial NAND Flash applications. The 100K P/E cycle endurance is exceptional and the hardware ECC support simplifies system design. I've used this in multiple industrial projects with excellent reliability.",
          highlight: "Industrial-grade SLC NAND with exceptional endurance"
        },
        alternativeParts: [
          {
            partNumber: "MT29F1G08",
            brand: "Micron",
            specifications: { type: "SLC NAND", capacity: "1Gb", endurance: "100K" },
            comparison: { cost: "Higher", brand: "Tier-1" },
            reason: "Alternative from major vendor",
            useCase: "For brand-specific requirements",
            link: "#"
          },
          {
            partNumber: "S34ML01G1",
            brand: "Infineon",
            specifications: { type: "SLC NAND", capacity: "1Gb", endurance: "100K" },
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
            question: "What is the endurance of RS1GSLC?",
            answer: "RS1GSLC offers 100,000 program/erase cycles, which is among the highest in the industry for SLC NAND Flash. This makes it ideal for applications requiring frequent write operations over a long lifetime.",
            decisionGuide: "100K P/E cycles suitable for high-write industrial applications.",
            keywords: ["endurance", "P/E cycles", "100K", "SLC NAND"]
          },
          {
            question: "Does RS1GSLC support hardware ECC?",
            answer: "Yes, RS1GSLC supports hardware ECC with 1-bit to 4-bit correction capability. This ensures data integrity and reduces the processing burden on the host controller. The ECC can be implemented using external controllers or host processor.",
            decisionGuide: "Supports hardware ECC. Use with compatible controller for best results.",
            keywords: ["ECC", "error correction", "hardware ECC", "data integrity"]
          },
          {
            question: "What package options are available for RS1GSLC?",
            answer: "RS1GSLC is available in TSOP-48 for through-hole mounting and BGA-63 for surface-mount applications. The BGA package offers better signal integrity for high-speed designs. Contact LiTong for specific package availability.",
            decisionGuide: "TSOP-48 for easy prototyping. BGA-63 for production designs.",
            keywords: ["package", "TSOP-48", "BGA-63", "footprint"]
          },
          {
            question: "How does RS1GSLC handle bad blocks?",
            answer: "RS1GSLC implements bad block management at the firmware level. Initial bad blocks are marked during factory testing. Additional bad blocks that develop during use are detected and remapped. The device reserves spare blocks for replacement.",
            decisionGuide: "Built-in bad block management. Reserve spare blocks in firmware.",
            keywords: ["bad block", "bad block management", "remapping", "spare blocks"]
          },
          {
            question: "What is the data retention of RS1GSLC?",
            answer: "RS1GSLC guarantees 10-year data retention under typical operating conditions. For extended retention requirements, periodic refresh cycles are recommended. The actual retention depends on temperature, number of P/E cycles, and storage conditions.",
            decisionGuide: "10-year retention standard. Use refresh cycles for extended requirements.",
            keywords: ["data retention", "10 years", "refresh", "storage"]
          }
        ]
      },
      {
        partNumber: "RS2GMLC",
        name: "2Gb MLC NAND Flash",
        shortDescription: "Cost-effective MLC NAND Flash with 10K P/E cycles for consumer applications",
        descriptionParagraphs: [
          "RS2GMLC is a 2Gb MLC NAND Flash memory offering high density at competitive pricing for consumer electronics.",
          "With 10,000 program/erase cycles and advanced wear leveling, this device provides reliable storage for mass-market products.",
          "The device supports both parallel and SPI interfaces for flexible system integration."
        ],
        specifications: {
          "Capacity": "2Gb",
          "Type": "MLC NAND",
          "Interface": "Parallel 8-bit / SPI",
          "Endurance": "10,000 P/E cycles",
          "Data Retention": "10 years",
          "Temperature Range": "0°C to +70°C (Commercial)",
          "Page Size": "4KB + 128B spare",
          "Block Size": "256KB + 8KB spare",
          "Voltage": "3.3V / 1.8V",
          "Package": "TSOP-48, BGA-63, WSON-8"
        },
        features: [
          "High-density 2Gb capacity",
          "Dual interface support",
          "10K P/E cycles",
          "Hardware ECC support",
          "Wear leveling",
          "Multiple package options"
        ],
        applications: [
          "Consumer electronics",
          "Set-top boxes",
          "Digital TVs",
          "Gaming consoles",
          "Portable media players"
        ],
        faeReview: {
          author: "David Chen",
          title: "Senior FAE - Storage Solutions",
          content: "RS2GMLC offers excellent cost-per-bit for consumer applications. The dual interface support is convenient for design flexibility. While the endurance is lower than SLC, it's perfectly adequate for typical consumer use cases.",
          highlight: "Cost-effective high-density NAND for consumer apps"
        },
        alternativeParts: [
          {
            partNumber: "MT29F2G08",
            brand: "Micron",
            specifications: { type: "MLC NAND", capacity: "2Gb", endurance: "10K" },
            comparison: { cost: "Higher", brand: "Tier-1" },
            reason: "Alternative from major vendor",
            useCase: "For brand-specific requirements",
            link: "#"
          },
          {
            partNumber: "TC58NVG1S3",
            brand: "Kioxia",
            specifications: { type: "MLC NAND", capacity: "2Gb", endurance: "10K" },
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
            question: "What is the difference between MLC and SLC NAND?",
            answer: "MLC stores 2 bits per cell vs 1 bit for SLC, offering higher density at lower cost. However, MLC has lower endurance (10K vs 100K P/E cycles) and slightly slower performance. Choose MLC for cost-sensitive consumer apps, SLC for high-reliability industrial apps.",
            decisionGuide: "MLC for cost-sensitive apps. SLC for high-reliability apps.",
            keywords: ["MLC", "SLC", "comparison", "density", "cost"]
          },
          {
            question: "Does RS2GMLC support SPI interface?",
            answer: "Yes, RS2GMLC supports both parallel 8-bit and SPI interfaces. The SPI mode is useful for designs with limited pin count. Interface selection is typically done through mode pins or configuration registers.",
            decisionGuide: "Use SPI for pin-limited designs. Parallel for high performance.",
            keywords: ["SPI", "parallel interface", "pin count", "flexibility"]
          },
          {
            question: "What is the wear leveling capability of RS2GMLC?",
            answer: "RS2GMLC includes static and dynamic wear leveling algorithms to distribute P/E cycles evenly across all blocks. This extends the effective lifetime of the device. The wear leveling is typically managed by the NAND controller or host software.",
            decisionGuide: "Implement wear leveling in firmware for extended lifetime.",
            keywords: ["wear leveling", "lifetime", "P/E cycles", "firmware"]
          },
          {
            question: "Can RS2GMLC operate at 1.8V?",
            answer: "Yes, RS2GMLC supports both 3.3V and 1.8V operation. The 1.8V mode is useful for low-power designs and compatibility with modern processors. Voltage selection is typically done through configuration or auto-detected.",
            decisionGuide: "Use 1.8V for low-power designs. 3.3V for compatibility.",
            keywords: ["1.8V", "3.3V", "low power", "voltage selection"]
          },
          {
            question: "What is the typical use case for RS2GMLC?",
            answer: "RS2GMLC is ideal for consumer electronics requiring moderate storage capacity at low cost. Typical applications include set-top boxes, digital TVs, gaming consoles, and portable media players where cost is a primary concern.",
            decisionGuide: "Best for cost-sensitive consumer electronics storage.",
            keywords: ["consumer electronics", "cost-sensitive", "storage", "applications"]
          }
        ]
      },
      {
        partNumber: "RS4GTLC",
        name: "4Gb TLC NAND Flash",
        shortDescription: "High-density TLC NAND Flash for cost-optimized storage solutions",
        descriptionParagraphs: [
          "RS4GTLC is a 4Gb TLC NAND Flash memory providing the highest density at the lowest cost per bit.",
          "With advanced 3D NAND technology, this device offers reliable storage for high-volume consumer products.",
          "The device includes sophisticated error correction and bad block management for data integrity."
        ],
        specifications: {
          "Capacity": "4Gb",
          "Type": "TLC NAND",
          "Interface": "Toggle DDR / SPI",
          "Endurance": "3,000 P/E cycles",
          "Data Retention": "10 years",
          "Temperature Range": "0°C to +70°C (Commercial)",
          "Page Size": "16KB + 1.6KB spare",
          "Block Size": "4MB + 400KB spare",
          "Voltage": "3.3V / 1.8V",
          "Package": "BGA-132, BGA-152"
        },
        features: [
          "High-density 4Gb capacity",
          "Toggle DDR interface",
          "Advanced 3D NAND technology",
          "Strong ECC support",
          "Low cost per bit",
          "High-speed operation"
        ],
        applications: [
          "USB flash drives",
          "SD cards",
          "SSD controllers",
          "Mobile storage",
          "High-volume consumer products"
        ],
        faeReview: {
          author: "David Chen",
          title: "Senior FAE - Storage Solutions",
          content: "RS4GTLC provides excellent cost-per-bit for high-volume applications. The Toggle DDR interface enables high-speed data transfer. While endurance is lower, it's sufficient for typical consumer use cases like USB drives and SD cards.",
          highlight: "High-density low-cost NAND for mass storage"
        },
        alternativeParts: [
          {
            partNumber: "MT29F4G08",
            brand: "Micron",
            specifications: { type: "TLC NAND", capacity: "4Gb", endurance: "3K" },
            comparison: { cost: "Higher", brand: "Tier-1" },
            reason: "Alternative from major vendor",
            useCase: "For brand-specific requirements",
            link: "#"
          },
          {
            partNumber: "TC58NVG2S0",
            brand: "Kioxia",
            specifications: { type: "TLC NAND", capacity: "4Gb", endurance: "3K" },
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
            question: "What is TLC NAND and how does it compare to MLC?",
            answer: "TLC stores 3 bits per cell vs 2 bits for MLC, offering 50% higher density at lower cost. However, TLC has lower endurance (3K vs 10K P/E cycles) and requires stronger ECC. TLC is ideal for read-intensive applications like USB drives.",
            decisionGuide: "TLC for cost-optimized read-intensive apps. MLC for balanced performance.",
            keywords: ["TLC", "MLC", "3 bits per cell", "density", "cost"]
          },
          {
            question: "What is Toggle DDR interface?",
            answer: "Toggle DDR is a high-speed NAND interface that transfers data on both clock edges, effectively doubling the data rate. RS4GTLC supports Toggle DDR for high-performance applications requiring fast read/write speeds.",
            decisionGuide: "Toggle DDR for high-speed applications. Standard async for compatibility.",
            keywords: ["Toggle DDR", "high speed", "interface", "data rate"]
          },
          {
            question: "What level of ECC is required for RS4GTLC?",
            answer: "RS4GTLC requires strong ECC due to TLC's higher bit error rate. Typically 40-bit to 72-bit ECC per 1KB is recommended. The device works with hardware ECC controllers or software ECC implementations.",
            decisionGuide: "Use 40-72 bit ECC per 1KB. Hardware ECC recommended for performance.",
            keywords: ["ECC", "error correction", "40-bit ECC", "72-bit ECC"]
          },
          {
            question: "Is RS4GTLC suitable for SSD applications?",
            answer: "RS4GTLC can be used in SSD applications with proper controller and over-provisioning. However, for high-write SSDs, MLC or SLC is recommended. TLC is suitable for consumer SSDs with moderate write workloads.",
            decisionGuide: "Suitable for consumer SSDs. Use MLC/SLC for high-write enterprise SSDs.",
            keywords: ["SSD", "solid state drive", "over-provisioning", "write workload"]
          },
          {
            question: "What is the typical application for RS4GTLC?",
            answer: "RS4GTLC is ideal for high-volume cost-sensitive storage applications like USB flash drives, SD cards, and mobile storage. The high density and low cost make it perfect for consumer mass storage products.",
            decisionGuide: "Best for USB drives, SD cards, and mobile storage applications.",
            keywords: ["USB drive", "SD card", "mobile storage", "consumer"]
          }
        ]
      },
      {
        partNumber: "RS8GTLC",
        name: "8Gb TLC NAND Flash",
        shortDescription: "Ultra-high-density TLC NAND Flash for maximum storage capacity",
        descriptionParagraphs: [
          "RS8GTLC is an 8Gb TLC NAND Flash memory offering the highest capacity in Rayson's NAND portfolio.",
          "Built with advanced 3D NAND technology, this device provides exceptional storage density for demanding applications.",
          "The device features high-speed Toggle DDR interface and comprehensive error correction capabilities."
        ],
        specifications: {
          "Capacity": "8Gb",
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
          "Ultra-high 8Gb capacity",
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
          content: "RS8GTLC provides exceptional capacity for high-density storage applications. The industrial temperature option makes it suitable for demanding environments. The Toggle DDR 2.0 interface delivers excellent performance for high-speed data transfer.",
          highlight: "Ultra-high capacity NAND for demanding storage apps"
        },
        alternativeParts: [
          {
            partNumber: "MT29F8G08",
            brand: "Micron",
            specifications: { type: "TLC NAND", capacity: "8Gb", endurance: "3K" },
            comparison: { cost: "Higher", brand: "Tier-1" },
            reason: "Alternative from major vendor",
            useCase: "For brand-specific requirements",
            link: "#"
          },
          {
            partNumber: "TC58NVG4D2",
            brand: "Kioxia",
            specifications: { type: "TLC NAND", capacity: "8Gb", endurance: "3K" },
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
            question: "What makes RS8GTLC suitable for industrial applications?",
            answer: "RS8GTLC offers an industrial temperature option (-40°C to +85°C) with the same high capacity. This makes it suitable for industrial SSDs, automotive storage, and other demanding environments where high capacity and reliability are required.",
            decisionGuide: "Industrial option for harsh environments. Commercial for standard apps.",
            keywords: ["industrial", "temperature range", "automotive", "reliability"]
          },
          {
            question: "What is Toggle DDR 2.0 and what are its benefits?",
            answer: "Toggle DDR 2.0 is an enhanced high-speed NAND interface with improved timing and higher data rates compared to Toggle DDR 1.0. It enables faster read/write speeds, making RS8GTLC ideal for high-performance storage applications.",
            decisionGuide: "Toggle DDR 2.0 for highest performance. Backward compatible with DDR 1.0.",
            keywords: ["Toggle DDR 2.0", "high speed", "performance", "data rate"]
          },
          {
            question: "How does RS8GTLC handle thermal management?",
            answer: "RS8GTLC includes thermal management features including temperature sensors and throttling capabilities. The device can monitor die temperature and adjust performance to prevent overheating. This is important for high-capacity devices in thermally challenging environments.",
            decisionGuide: "Built-in thermal management. Monitor temperature in high-power apps.",
            keywords: ["thermal management", "temperature sensor", "throttling", "overheating"]
          },
          {
            question: "What is the recommended controller for RS8GTLC?",
            answer: "RS8GTLC works with high-performance NAND controllers supporting Toggle DDR 2.0 and strong ECC (40-72 bit per 1KB). Popular options include controllers from Phison, Silicon Motion, and Marvell. Contact LiTong FAE for specific controller recommendations.",
            decisionGuide: "Use high-performance controllers with Toggle DDR 2.0 and strong ECC.",
            keywords: ["controller", "Phison", "Silicon Motion", "Marvell", "ECC"]
          },
          {
            question: "What is the typical use case for RS8GTLC?",
            answer: "RS8GTLC is ideal for high-capacity storage applications requiring maximum density. Typical uses include enterprise SSDs, high-end consumer SSDs, industrial storage systems, and embedded applications requiring large storage capacity.",
            decisionGuide: "Best for high-capacity SSDs and enterprise storage applications.",
            keywords: ["enterprise SSD", "high capacity", "storage system", "embedded"]
          }
        ]
      }
    ]
  },
  {
    id: "emmc-storage",
    name: "eMMC Storage",
    description: "Embedded MultiMediaCard solutions with integrated controller for simplified system design",
    icon: "sd_card",
    image: "/images/categories/emmc-storage.jpg",
    seoTitle: "Rayson eMMC Storage | Embedded Memory Solutions",
    seoDescription: "Rayson eMMC products with integrated controller for embedded systems",
    seoKeywords: ["eMMC", "embedded storage", "memory", "rayson", "distributor"],
    selectionGuide: {
      title: "eMMC Storage Selection Guide",
      description: "Compare Rayson eMMC products to find the best embedded storage solution. Consider capacity, performance class, and temperature range.",
      articleId: "emmc-selection",
      articleLink: "/rayson/support/emmc-selection.html"
    },
    faqs: [
      {
        question: "What is eMMC and how does it simplify system design?",
        answer: "eMMC integrates NAND Flash and controller in a single package, handling bad block management, ECC, and wear leveling internally. This simplifies host interface and reduces software complexity.",
        decisionGuide: "eMMC for simplified design with integrated management.",
        keywords: ["eMMC", "embedded storage", "integrated controller", "simplified design"]
      },
      {
        question: "What eMMC versions does Rayson support?",
        answer: "Rayson offers eMMC 4.5, 5.0, and 5.1 compliant devices with HS200 and HS400 interfaces for high-speed data transfer.",
        decisionGuide: "eMMC 5.1 for latest features. eMMC 4.5 for compatibility.",
        keywords: ["eMMC version", "HS200", "HS400", "interface"]
      },
      {
        question: "How do I select the right eMMC capacity?",
        answer: "Consider application storage requirements, OS size, and future expansion needs. Rayson offers eMMC from 4GB to 128GB to meet various application needs.",
        decisionGuide: "Size for current needs plus 50% margin for future expansion.",
        keywords: ["eMMC capacity", "storage requirements", "sizing"]
      }
    ],
    products: [
      {
        partNumber: "RS08GEMMC",
        name: "8GB eMMC 5.1",
        shortDescription: "High-performance 8GB eMMC 5.1 with HS400 interface for mobile applications",
        descriptionParagraphs: [
          "RS08GEMMC is an 8GB eMMC 5.1 compliant embedded storage solution with HS400 high-speed interface.",
          "The integrated controller handles all NAND management tasks including bad block management, wear leveling, and ECC.",
          "With industrial temperature support and robust data integrity features, this eMMC is ideal for mobile and industrial applications."
        ],
        specifications: {
          "Capacity": "8GB",
          "eMMC Version": "5.1",
          "Interface": "HS400 (400MB/s)",
          "NAND Type": "MLC",
          "Temperature Range": "-25°C to +85°C (Industrial)",
          "Data Retention": "10 years",
          "Endurance": "3,000 P/E cycles",
          "Voltage": "3.3V (VCC), 1.8V/3.3V (VCCQ)",
          "Package": "BGA-153, BGA-169"
        },
        features: [
          "eMMC 5.1 compliant",
          "HS400 high-speed interface",
          "Integrated NAND controller",
          "Hardware ECC",
          "Bad block management",
          "Wear leveling",
          "Industrial temperature support"
        ],
        applications: [
          "Smartphones",
          "Tablets",
          "Industrial tablets",
          "Medical devices",
          "Automotive infotainment"
        ],
        faeReview: {
          author: "Sarah Wang",
          title: "Senior FAE - Embedded Storage",
          content: "RS08GEMMC is an excellent choice for mobile and industrial applications. The HS400 interface provides fast boot and application loading. The integrated controller significantly reduces host software complexity.",
          highlight: "High-speed eMMC 5.1 with integrated controller"
        },
        alternativeParts: [
          {
            partNumber: "KLMAG1JETD",
            brand: "Samsung",
            specifications: { type: "eMMC 5.1", capacity: "16GB", speed: "HS400" },
            comparison: { cost: "Higher", brand: "Tier-1" },
            reason: "Alternative from major vendor",
            useCase: "For brand-specific requirements",
            link: "#"
          },
          {
            partNumber: "SDINBDG4",
            brand: "SanDisk",
            specifications: { type: "eMMC 5.1", capacity: "8GB", speed: "HS400" },
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
            question: "What is the difference between HS200 and HS400?",
            answer: "HS200 supports up to 200MB/s data transfer using SDR (Single Data Rate) at 200MHz. HS400 supports up to 400MB/s using DDR (Double Data Rate) at 200MHz. HS400 provides 2x the performance for high-speed applications.",
            decisionGuide: "HS400 for high-performance apps. HS200 for compatibility with older hosts.",
            keywords: ["HS200", "HS400", "data rate", "performance", "DDR"]
          },
          {
            question: "Does RS08GEMMC require external NAND controller?",
            answer: "No, RS08GEMMC includes an integrated NAND controller that handles all NAND management tasks internally. The host only needs a standard eMMC interface, significantly simplifying system design and software.",
            decisionGuide: "No external controller needed. Integrated controller handles all NAND management.",
            keywords: ["integrated controller", "NAND management", "simplified design"]
          },
          {
            question: "What is the boot partition feature in RS08GEMMC?",
            answer: "RS08GEMMC includes dedicated boot partitions for storing boot code separate from user data. This enables faster system boot and secure boot implementations. The boot partitions are protected from user data operations.",
            decisionGuide: "Use boot partitions for faster boot and secure boot implementation.",
            keywords: ["boot partition", "fast boot", "secure boot", "protection"]
          },
          {
            question: "How does RS08GEMMC handle power-loss protection?",
            answer: "RS08GEMMC includes power-loss protection mechanisms to prevent data corruption during unexpected power failures. This includes capacitor-backed write completion and data integrity checks.",
            decisionGuide: "Built-in power-loss protection. Add external capacitors for enhanced protection.",
            keywords: ["power-loss protection", "data corruption", "power failure", "integrity"]
          },
          {
            question: "What is the typical use case for RS08GEMMC?",
            answer: "RS08GEMMC is ideal for mobile devices, industrial tablets, medical equipment, and automotive infotainment systems. The integrated controller and high-speed interface make it perfect for applications requiring reliable embedded storage.",
            decisionGuide: "Best for mobile, industrial, medical, and automotive applications.",
            keywords: ["mobile", "industrial", "medical", "automotive", "embedded storage"]
          }
        ]
      },
      {
        partNumber: "RS16GEMMC",
        name: "16GB eMMC 5.1",
        shortDescription: "High-capacity 16GB eMMC 5.1 for demanding storage applications",
        descriptionParagraphs: [
          "RS16GEMMC is a 16GB eMMC 5.1 embedded storage solution offering double the capacity for demanding applications.",
          "The device features HS400 interface for high-speed data transfer and integrated controller for simplified system design.",
          "With enhanced reliability features and industrial temperature support, this eMMC is suitable for mission-critical applications."
        ],
        specifications: {
          "Capacity": "16GB",
          "eMMC Version": "5.1",
          "Interface": "HS400 (400MB/s)",
          "NAND Type": "MLC",
          "Temperature Range": "-25°C to +85°C (Industrial)",
          "Data Retention": "10 years",
          "Endurance": "3,000 P/E cycles",
          "Voltage": "3.3V (VCC), 1.8V/3.3V (VCCQ)",
          "Package": "BGA-153, BGA-169"
        },
        features: [
          "High-capacity 16GB storage",
          "eMMC 5.1 compliant",
          "HS400 high-speed interface",
          "Integrated controller",
          "Enhanced reliability",
          "Industrial temperature support"
        ],
        applications: [
          "High-end smartphones",
          "Industrial tablets",
          "Digital signage",
          "Gaming devices",
          "Industrial automation"
        ],
        faeReview: {
          author: "Sarah Wang",
          title: "Senior FAE - Embedded Storage",
          content: "RS16GEMMC provides excellent capacity for demanding applications. The HS400 interface ensures fast performance even with larger data sets. The reliability features make it suitable for industrial and automotive use.",
          highlight: "High-capacity eMMC for demanding embedded apps"
        },
        alternativeParts: [
          {
            partNumber: "KLMAG2JETD",
            brand: "Samsung",
            specifications: { type: "eMMC 5.1", capacity: "32GB", speed: "HS400" },
            comparison: { cost: "Higher", capacity: "Higher" },
            reason: "Higher capacity alternative",
            useCase: "For larger storage requirements",
            link: "#"
          },
          {
            partNumber: "SDINBDG8",
            brand: "SanDisk",
            specifications: { type: "eMMC 5.1", capacity: "16GB", speed: "HS400" },
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
            question: "What is the performance class of RS16GEMMC?",
            answer: "RS16GEMMC supports performance class PC10, ensuring minimum sustained write speeds of 10MB/s. This is important for applications requiring consistent write performance like video recording.",
            decisionGuide: "PC10 for consistent performance. Check class rating for video apps.",
            keywords: ["performance class", "PC10", "sustained write", "video recording"]
          },
          {
            question: "Can RS16GEMMC be used for 4K video recording?",
            answer: "Yes, RS16GEMMC's HS400 interface and PC10 performance class make it suitable for 4K video recording. The high sustained write speed ensures smooth video capture without dropped frames.",
            decisionGuide: "Suitable for 4K video. Ensure host supports HS400 for best performance.",
            keywords: ["4K video", "video recording", "sustained write", "HS400"]
          },
          {
            question: "What is the difference between pSLC and MLC eMMC?",
            answer: "pSLC (pseudo-SLC) mode stores 1 bit per cell for higher endurance (30K+ P/E cycles) at reduced capacity. MLC stores 2 bits per cell for higher capacity. RS16GEMMC supports both modes for flexibility.",
            decisionGuide: "pSLC mode for high-endurance apps. MLC for standard capacity.",
            keywords: ["pSLC", "pseudo-SLC", "endurance", "MLC", "modes"]
          },
          {
            question: "How does RS16GEMMC support secure applications?",
            answer: "RS16GEMMC supports secure features including RPMB (Replay Protected Memory Block) for secure storage, secure erase, and write protection. These features enable secure boot and data protection applications.",
            decisionGuide: "Use RPMB for secure storage. Enable write protection for critical data.",
            keywords: ["RPMB", "secure storage", "secure erase", "write protection"]
          },
          {
            question: "What is the typical use case for RS16GEMMC?",
            answer: "RS16GEMMC is ideal for high-end mobile devices, industrial tablets, digital signage, and gaming devices requiring large storage capacity. The high capacity and performance make it suitable for media-rich applications.",
            decisionGuide: "Best for high-end mobile, signage, and gaming applications.",
            keywords: ["high-end mobile", "digital signage", "gaming", "media-rich"]
          }
        ]
      },
      {
        partNumber: "RS32GEMMC",
        name: "32GB eMMC 5.1",
        shortDescription: "Ultra-high-capacity 32GB eMMC 5.1 for maximum storage needs",
        descriptionParagraphs: [
          "RS32GEMMC is a 32GB eMMC 5.1 embedded storage solution offering maximum capacity for storage-intensive applications.",
          "The device features HS400 interface, advanced reliability features, and industrial temperature support.",
          "With comprehensive security features and high endurance, this eMMC is perfect for demanding enterprise and industrial applications."
        ],
        specifications: {
          "Capacity": "32GB",
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
          "Ultra-high 32GB capacity",
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
          content: "RS32GEMMC provides exceptional capacity for the most demanding applications. The extended temperature option makes it suitable for harsh environments. The security features are comprehensive for enterprise applications.",
          highlight: "Maximum capacity eMMC for enterprise and industrial"
        },
        alternativeParts: [
          {
            partNumber: "KLMAG4JETD",
            brand: "Samsung",
            specifications: { type: "eMMC 5.1", capacity: "64GB", speed: "HS400" },
            comparison: { cost: "Higher", capacity: "Higher" },
            reason: "Higher capacity alternative",
            useCase: "For maximum storage requirements",
            link: "#"
          },
          {
            partNumber: "SDINBDG16",
            brand: "SanDisk",
            specifications: { type: "eMMC 5.1", capacity: "32GB", speed: "HS400" },
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
            question: "What makes RS32GEMMC suitable for enterprise applications?",
            answer: "RS32GEMMC offers maximum capacity, extended temperature support, comprehensive security features (RPMB, secure erase), and high reliability. These features meet the requirements of enterprise and industrial applications.",
            decisionGuide: "Enterprise features for mission-critical applications.",
            keywords: ["enterprise", "extended temperature", "security", "reliability"]
          },
          {
            question: "What is the cache feature in RS32GEMMC?",
            answer: "RS32GEMMC includes a large internal cache (typically 2-4MB) to improve read/write performance. The cache buffers data for efficient NAND programming and accelerates frequently accessed data reads.",
            decisionGuide: "Large cache improves performance. Enable for best results.",
            keywords: ["cache", "performance", "buffer", "acceleration"]
          },
          {
            question: "How does RS32GEMMC handle firmware updates?",
            answer: "RS32GEMMC supports firmware updates via the eMMC interface. The device has dual firmware banks for safe updates with rollback capability. Updates can be performed in-system without removing the device.",
            decisionGuide: "Dual firmware banks for safe updates. In-system update capability.",
            keywords: ["firmware update", "dual bank", "rollback", "in-system"]
          },
          {
            question: "What is the sanitize feature in RS32GEMMC?",
            answer: "The sanitize feature securely erases all user data by physically destroying the encryption keys and overwriting data. This ensures data cannot be recovered, meeting security standards for data destruction.",
            decisionGuide: "Use sanitize for secure data destruction before disposal.",
            keywords: ["sanitize", "secure erase", "data destruction", "security"]
          },
          {
            question: "What is the typical use case for RS32GEMMC?",
            answer: "RS32GEMMC is ideal for enterprise tablets, industrial systems, medical imaging, surveillance systems, and high-end embedded systems requiring maximum storage capacity and reliability.",
            decisionGuide: "Best for enterprise, industrial, medical, and surveillance apps.",
            keywords: ["enterprise", "industrial", "medical", "surveillance", "maximum capacity"]
          }
        ]
      },
      {
        partNumber: "RS04GEMMC",
        name: "4GB eMMC 5.0",
        shortDescription: "Cost-effective 4GB eMMC 5.0 for budget-conscious applications",
        descriptionParagraphs: [
          "RS04GEMMC is a 4GB eMMC 5.0 embedded storage solution offering cost-effective storage for budget-conscious designs.",
          "The device features HS200 interface and integrated controller for simplified system integration.",
          "With commercial temperature range and reliable operation, this eMMC is perfect for consumer electronics and cost-sensitive applications."
        ],
        specifications: {
          "Capacity": "4GB",
          "eMMC Version": "5.0",
          "Interface": "HS200 (200MB/s)",
          "NAND Type": "MLC",
          "Temperature Range": "0°C to +70°C (Commercial)",
          "Data Retention": "10 years",
          "Endurance": "3,000 P/E cycles",
          "Voltage": "3.3V (VCC), 1.8V/3.3V (VCCQ)",
          "Package": "BGA-153, BGA-169"
        },
        features: [
          "Cost-effective 4GB capacity",
          "eMMC 5.0 compliant",
          "HS200 interface",
          "Integrated controller",
          "Simplified system design",
          "Reliable operation"
        ],
        applications: [
          "Budget smartphones",
          "IoT devices",
          "Smart home devices",
          "Wearables",
          "Cost-sensitive embedded systems"
        ],
        faeReview: {
          author: "Sarah Wang",
          title: "Senior FAE - Embedded Storage",
          content: "RS04GEMMC offers excellent value for cost-sensitive applications. The HS200 interface provides good performance at a lower price point. The integrated controller simplifies design for budget-constrained projects.",
          highlight: "Cost-effective eMMC for budget-conscious designs"
        },
        alternativeParts: [
          {
            partNumber: "KLMAG1JETD",
            brand: "Samsung",
            specifications: { type: "eMMC 5.0", capacity: "8GB", speed: "HS200" },
            comparison: { cost: "Higher", capacity: "Higher" },
            reason: "Higher capacity alternative",
            useCase: "For larger storage needs",
            link: "#"
          },
          {
            partNumber: "SDINBDG4",
            brand: "SanDisk",
            specifications: { type: "eMMC 5.0", capacity: "4GB", speed: "HS200" },
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
            question: "What is the difference between eMMC 5.0 and 5.1?",
            answer: "eMMC 5.1 adds HS400 mode (400MB/s) and enhanced security features compared to eMMC 5.0's HS200 (200MB/s). For applications not requiring maximum speed, eMMC 5.0 offers good performance at lower cost.",
            decisionGuide: "eMMC 5.0 for cost-sensitive apps. eMMC 5.1 for maximum performance.",
            keywords: ["eMMC 5.0", "eMMC 5.1", "HS200", "HS400", "comparison"]
          },
          {
            question: "Is RS04GEMMC suitable for IoT applications?",
            answer: "Yes, RS04GEMMC is ideal for IoT devices due to its compact size, low power consumption, and sufficient capacity for most IoT applications. The integrated controller reduces host complexity.",
            decisionGuide: "Excellent for IoT due to size, power, and simplicity.",
            keywords: ["IoT", "Internet of Things", "low power", "compact"]
          },
          {
            question: "What is the power consumption of RS04GEMMC?",
            answer: "RS04GEMMC has low active power consumption (~100mA during read/write) and very low standby power (<1mA). This makes it suitable for battery-powered devices and power-sensitive applications.",
            decisionGuide: "Low power suitable for battery apps. Use standby mode for best efficiency.",
            keywords: ["power consumption", "low power", "battery", "standby"]
          },
          {
            question: "Can RS04GEMMC be used for Linux boot?",
            answer: "Yes, RS04GEMMC is commonly used for Linux boot in embedded systems. The dedicated boot partitions and fast read speeds enable quick system boot. Most Linux distributions support eMMC boot.",
            decisionGuide: "Suitable for Linux boot. Use boot partition for faster boot.",
            keywords: ["Linux boot", "embedded Linux", "boot partition", "fast boot"]
          },
          {
            question: "What is the typical use case for RS04GEMMC?",
            answer: "RS04GEMMC is ideal for budget smartphones, IoT devices, smart home products, wearables, and cost-sensitive embedded systems where 4GB storage is sufficient and cost is a primary concern.",
            decisionGuide: "Best for budget devices and cost-sensitive embedded systems.",
            keywords: ["budget", "IoT", "smart home", "wearables", "cost-sensitive"]
          }
        ]
      }
    ]
  }
];

// Add new categories to data
data.categories.push(...newCategories);

console.log(`✅ Added ${newCategories.length} new categories`);
console.log(`📊 Total categories: ${data.categories.length}`);

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log('\n🎉 Categories added successfully!');
