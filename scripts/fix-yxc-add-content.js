#!/usr/bin/env node
/**
 * YXC Brand Data Completion Script
 * Adds missing products and support articles to meet requirements
 * 
 * Requirements:
 * - 2 secondary product categories with at least 4 products each
 * - At least 3 solution detail pages (already satisfied)
 * - At least 5 technical support articles
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'yxc');

console.log('🔧 YXC Brand Data Completion Script\n');

// Read existing data files
const productsPath = path.join(DATA_DIR, 'products.json');
const supportPath = path.join(DATA_DIR, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('📊 Current Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  console.log(`     - ${cat.name}: ${cat.products.length} products`);
});
console.log(`   Support Articles: ${supportData.articles.length}`);

// ==================== ADD PRODUCTS TO CRYSTAL RESONATORS ====================
console.log('\n📦 Adding products to Crystal Resonators category...');
const resonatorsCategory = productsData.categories.find(cat => cat.id === 'crystal-resonators');
const additionalResonatorProducts = [
  {
    partNumber: "YXC-1612-24M",
    name: "24MHz Crystal Resonator 1.6×1.2mm",
    nameCn: "24MHz无源晶振 1.6×1.2mm",
    shortDescription: "Ultra-compact 24MHz crystal in 1.6×1.2mm package for wearable and IoT applications with ±10ppm stability.",
    description: "Ultra-compact 24MHz quartz crystal resonator in 1.6×1.2mm package, ideal for space-constrained wearable and IoT applications.",
    descriptionParagraphs: [
      "The YXC-1612-24M delivers 24MHz precision timing in an ultra-compact 1.6×1.2mm package, making it ideal for wearable devices, IoT sensors, and other space-constrained applications.",
      "Despite its miniature size, this crystal maintains excellent electrical characteristics with ±10ppm frequency stability and low ESR of ≤100Ω. The optimized electrode design ensures reliable oscillation.",
      "The 0.35mm profile enables ultra-thin product designs. This crystal is particularly popular in Bluetooth applications where 24MHz is commonly used."
    ],
    status: "active",
    isPopular: true,
    keywords: [
      "24MHz crystal",
      "1612 crystal",
      "ultra small crystal",
      "wearable crystal"
    ],
    specifications: {
      "Frequency": "24.000MHz",
      "Package": "1.6×1.2mm SMD",
      "Frequency Stability": "±10ppm",
      "Load Capacitance": "8pF - 12pF",
      "ESR": "≤100Ω",
      "Operating Temperature": "-40°C to +85°C",
      "Storage Temperature": "-55°C to +125°C",
      "Drive Level": "10μW typical",
      "Aging": "±3ppm/year max",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Wearable devices",
      "IoT sensors",
      "Bluetooth modules",
      "Smart cards",
      "Portable devices"
    ],
    features: [
      "Ultra-compact 1.6×1.2mm package",
      "Low profile 0.35mm height",
      "Optimized for low power",
      "Excellent shock resistance",
      "Reflow compatible"
    ],
    pinout: {
      "description": "4-pin SMD package",
      "pins": [
        {"pin": "1", "function": "Crystal", "description": "Crystal connection"},
        {"pin": "2", "function": "GND", "description": "Ground"},
        {"pin": "3", "function": "GND", "description": "Ground"},
        {"pin": "4", "function": "Crystal", "description": "Crystal connection"}
      ]
    },
    package: {
      "type": "SMD Ceramic",
      "dimensions": "1.6mm × 1.2mm × 0.35mm",
      "pinCount": 4
    },
    stock: {
      "status": "in_stock",
      "quantity": 25000,
      "minOrderQty": 1000,
      "leadTime": "Stock available, 2-3 days"
    },
    pricing: {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 1000, "price": 0.105},
        {"minQty": 5000, "price": 0.082},
        {"minQty": 10000, "price": 0.065},
        {"minQty": 50000, "price": 0.048}
      ]
    },
    alternativeParts: [
      {
        "partNumber": "YXC-2016-24M",
        "manufacturer": "YXC",
        "description": "2.0×1.6mm package option with lower ESR",
        "tradeOff": "Slightly larger but easier assembly"
      },
      {
        "partNumber": "YXC-1612-26M",
        "manufacturer": "YXC",
        "description": "26MHz version for Bluetooth applications",
        "tradeOff": "Different frequency for specific applications"
      }
    ],
    companionParts: [
      {
        "partNumber": "YXC-1612-32K768",
        "link": "#",
        "description": "32.768kHz tuning fork for RTC",
        "category": "RTC Crystal"
      },
      {
        "partNumber": "YXO-1612-24M",
        "link": "#",
        "description": "Active oscillator version for easier implementation",
        "category": "Crystal Oscillator"
      }
    ],
    faeReview: {
      "rating": 4.7,
      "summary": "This is an excellent choice for ultra-compact designs where space is absolutely critical. The 1612 package is among the smallest available while still maintaining good electrical characteristics. I've used this in smartwatch and fitness tracker designs with great success. The key consideration is assembly - this requires precise pick-and-place equipment and experienced assembly house. Use a 3-mil stencil aperture and ensure proper solder mask defined pads. Keep traces extremely short (<8mm) due to the small pad size.",
      "author": "Senior FAE Team",
      "date": "2025-01-15",
      "content": "Based on extensive field experience, this product delivers excellent performance across various operating conditions. The design incorporates proven architecture with robust protection features."
    },
    faqs: [
      {
        "question": "Is this crystal suitable for Bluetooth applications?",
        "answer": "Yes, 24MHz is commonly used for Bluetooth applications. Check your specific Bluetooth SoC's crystal requirements for load capacitance and ESR specifications."
      },
      {
        "question": "What are the assembly considerations for this tiny package?",
        "answer": "Use 3-mil stencil thickness with 1:1 aperture opening. Ensure your PCB has proper solder mask defined pads. Requires precise pick-and-place equipment. Avoid hand soldering - use reflow only."
      },
      {
        "question": "Can I use this with a standard microcontroller?",
        "answer": "Yes, but verify your MCU can drive the 100Ω ESR. Some MCUs have weaker oscillator drivers. Check the MCU datasheet's crystal driver specifications."
      },
      {
        "question": "How does the small size affect performance?",
        "answer": "The 1612 package has slightly higher ESR than larger packages, but still provides excellent performance. The frequency stability and aging characteristics are comparable to larger packages."
      },
      {
        "question": "What is the typical current consumption?",
        "answer": "Current depends on your MCU and load capacitors. Typical active current is 100-300μA. Use the lowest drive strength setting that ensures reliable oscillation."
      }
    ],
    resources: {
      "datasheet": "/resources/datasheets/yxc/YXC-1612-series.pdf",
      "applicationNote": "/resources/app-notes/wearable-crystal-design.pdf"
    }
  },
  {
    partNumber: "YXC-5032-8M",
    name: "8MHz Crystal Resonator 5.0×3.2mm",
    nameCn: "8MHz无源晶振 5.0×3.2mm",
    shortDescription: "Low-frequency 8MHz crystal in 5.0×3.2mm package for industrial and cost-sensitive applications with ±20ppm stability.",
    description: "Low-frequency 8MHz quartz crystal resonator in 5.0×3.2mm package, ideal for industrial control and cost-sensitive applications.",
    descriptionParagraphs: [
      "The YXC-5032-8M is a reliable 8MHz quartz crystal resonator packaged in a standard 5.0×3.2mm ceramic SMD package. This larger package size offers excellent ease of handling and robust performance.",
      "With frequency stability of ±20ppm and very low ESR of ≤40Ω, this crystal provides reliable clocking for microcontrollers, industrial control systems, and consumer electronics. The wide operating temperature range makes it suitable for industrial applications.",
      "The 5032 package is widely supported by all major PCB assembly houses and is compatible with standard reflow soldering processes. This crystal is ideal for cost-sensitive designs where ease of assembly is important."
    ],
    status: "active",
    isPopular: true,
    keywords: [
      "8MHz crystal",
      "5032 crystal",
      "industrial crystal",
      "low frequency crystal"
    ],
    specifications: {
      "Frequency": "8.000MHz",
      "Package": "5.0×3.2mm SMD",
      "Frequency Stability": "±20ppm",
      "Load Capacitance": "10pF - 20pF",
      "ESR": "≤40Ω",
      "Operating Temperature": "-40°C to +85°C",
      "Storage Temperature": "-55°C to +125°C",
      "Drive Level": "10μW typical, 100μW max",
      "Aging": "±3ppm/year max",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Industrial control",
      "Microcontroller clock",
      "Consumer electronics",
      "Power supplies",
      "Motor control"
    ],
    features: [
      "Standard 5.0×3.2mm package",
      "Excellent frequency stability ±20ppm",
      "Very low ESR for easy oscillation",
      "RoHS compliant",
      "Cost-effective solution"
    ],
    pinout: {
      "description": "4-pin SMD package",
      "pins": [
        {"pin": "1", "function": "Crystal", "description": "Crystal connection"},
        {"pin": "2", "function": "GND", "description": "Ground"},
        {"pin": "3", "function": "GND", "description": "Ground"},
        {"pin": "4", "function": "Crystal", "description": "Crystal connection"}
      ]
    },
    package: {
      "type": "SMD Ceramic",
      "dimensions": "5.0mm × 3.2mm × 1.0mm",
      "pinCount": 4
    },
    stock: {
      "status": "in_stock",
      "quantity": 40000,
      "minOrderQty": 1000,
      "leadTime": "Stock available, 2-3 days"
    },
    pricing: {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 1000, "price": 0.065},
        {"minQty": 5000, "price": 0.048},
        {"minQty": 10000, "price": 0.038},
        {"minQty": 50000, "price": 0.028}
      ]
    },
    alternativeParts: [
      {
        "partNumber": "YXC-3225-8M",
        "manufacturer": "YXC",
        "description": "Smaller 3.2×2.5mm package version",
        "tradeOff": "Smaller size but slightly higher cost"
      },
      {
        "partNumber": "YXC-5032-12M",
        "manufacturer": "YXC",
        "description": "12MHz version for higher frequency applications",
        "tradeOff": "Higher frequency for different applications"
      }
    ],
    companionParts: [
      {
        "partNumber": "YXC-5032-12M",
        "link": "#",
        "description": "12MHz version for higher frequency needs",
        "category": "Crystal Resonator"
      },
      {
        "partNumber": "YXO-5032-8M",
        "link": "#",
        "description": "Active oscillator version for plug-and-play",
        "category": "Crystal Oscillator"
      }
    ],
    faeReview: {
      "rating": 4.8,
      "summary": "This is an excellent general-purpose crystal for industrial and cost-sensitive applications. The 5032 package is easy to handle and assemble, making it ideal for designs where manufacturing ease is important. The very low ESR of 40Ω ensures reliable start-up with almost any MCU. I've recommended this part for industrial control systems, motor drives, and power supply applications. The ±20ppm stability is sufficient for most industrial applications. For cost-sensitive designs where you don't need the smallest package, this crystal delivers excellent value and reliability.",
      "author": "Senior FAE Team",
      "date": "2025-01-15",
      "content": "Based on extensive field experience, this product delivers excellent performance across various operating conditions. The design incorporates proven architecture with robust protection features."
    },
    faqs: [
      {
        "question": "What load capacitors should I use with this crystal?",
        "answer": "For 12pF load capacitance, use two 18pF capacitors (assuming 3-4pF stray capacitance). Calculate using: CL = (C1 × C2)/(C1 + C2) + Cstray."
      },
      {
        "question": "Is this suitable for industrial applications?",
        "answer": "Yes, the -40°C to +85°C temperature range and robust 5032 package make it ideal for industrial applications. The low ESR ensures reliable operation in harsh environments."
      },
      {
        "question": "Can I use this with 3.3V or 5V microcontrollers?",
        "answer": "Yes, the crystal itself is voltage-agnostic. The drive level from your MCU's oscillator circuit should not exceed 100μW. Most modern MCUs have configurable drive strength."
      },
      {
        "question": "What is the advantage of the larger 5032 package?",
        "answer": "The 5032 package offers: easier handling during assembly, lower ESR (40Ω vs 60-80Ω for smaller packages), better shock resistance, and lower cost. It's ideal for industrial and cost-sensitive applications."
      },
      {
        "question": "Can this crystal be used for USB applications?",
        "answer": "USB requires 48MHz. You would need a 48MHz crystal or use a PLL to generate 48MHz from 8MHz. For USB applications, we recommend using a 48MHz crystal directly."
      }
    ],
    resources: {
      "datasheet": "/resources/datasheets/yxc/YXC-5032-series.pdf",
      "applicationNote": "/resources/app-notes/crystal-selection-guide.pdf"
    }
  }
];
resonatorsCategory.products.push(...additionalResonatorProducts);
console.log(`   Crystal Resonators分类现在有 ${resonatorsCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO CRYSTAL OSCILLATORS ====================
console.log('\n📦 Adding products to Crystal Oscillators category...');
const oscillatorsCategory = productsData.categories.find(cat => cat.id === 'crystal-oscillators');
const additionalOscillatorProducts = [
  {
    partNumber: "YXO-2520-48M",
    name: "48MHz Crystal Oscillator 2.5×2.0mm",
    nameCn: "48MHz有源晶振 2.5×2.0mm",
    shortDescription: "Compact 48MHz CMOS oscillator for USB applications with ±25ppm stability and enable control.",
    description: "Compact 48MHz CMOS output crystal oscillator for USB and high-speed communication applications.",
    descriptionParagraphs: [
      "The YXO-2520-48M is a compact 48MHz crystal oscillator featuring CMOS output and integrated oscillator circuitry. This active oscillator is specifically designed for USB applications requiring 48MHz clock.",
      "With ±25ppm frequency stability and low jitter, this oscillator is well-suited for USB hubs, USB devices, and communication applications. The tri-state output enable feature allows power management.",
      "The 2.5×2.0mm package provides a compact solution while maintaining good handling characteristics. The 3.3V operation is compatible with most modern digital logic families."
    ],
    status: "active",
    isPopular: true,
    keywords: [
      "48MHz oscillator",
      "USB oscillator",
      "2520 oscillator",
      "CMOS oscillator"
    ],
    specifications: {
      "Frequency": "48.000MHz",
      "Package": "2.5×2.0mm SMD",
      "Output Type": "CMOS",
      "Frequency Stability": "±25ppm",
      "Supply Voltage": "3.3V ±10%",
      "Current Consumption": "12mA max",
      "Rise/Fall Time": "4ns max",
      "Duty Cycle": "45% - 55%",
      "Operating Temperature": "-40°C to +85°C",
      "Start-up Time": "5ms max",
      "Jitter": "1.5ps RMS typ",
      "Output Voltage": "N/A",
      "Phase Noise": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "USB devices",
      "USB hubs",
      "Communication modules",
      "Microcontroller clock",
      "FPGA clocking"
    ],
    features: [
      "Standard CMOS output",
      "Enable/Disable function",
      "Low power consumption",
      "Fast startup",
      "USB frequency optimized"
    ],
    pinout: {
      "description": "4-pin SMD package with tri-state control",
      "pins": [
        {"pin": "1", "function": "OE", "description": "Output Enable (High=Active)"},
        {"pin": "2", "function": "GND", "description": "Ground"},
        {"pin": "3", "function": "OUT", "description": "Clock Output"},
        {"pin": "4", "function": "VDD", "description": "Supply Voltage 3.3V"}
      ]
    },
    package: {
      "type": "SMD Ceramic",
      "dimensions": "2.5mm × 2.0mm × 0.8mm",
      "pinCount": 4
    },
    stock: {
      "status": "in_stock",
      "quantity": 20000,
      "minOrderQty": 500,
      "leadTime": "Stock available, 2-3 days"
    },
    pricing: {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 500, "price": 0.75},
        {"minQty": 1000, "price": 0.58},
        {"minQty": 5000, "price": 0.45},
        {"minQty": 10000, "price": 0.32}
      ]
    },
    alternativeParts: [
      {
        "partNumber": "YXO-3225-48M",
        "manufacturer": "YXC",
        "description": "3.2×2.5mm package version with same specs",
        "tradeOff": "Larger package but easier handling"
      },
      {
        "partNumber": "YXO-2520-24M",
        "manufacturer": "YXC",
        "description": "24MHz version for lower frequency applications",
        "tradeOff": "Lower frequency for different applications"
      }
    ],
    companionParts: [
      {
        "partNumber": "YXC-2520-48M",
        "link": "#",
        "description": "48MHz crystal resonator for cost-sensitive designs",
        "category": "Crystal Resonator"
      },
      {
        "partNumber": "YXO-2520-24M",
        "link": "#",
        "description": "24MHz version for lower frequency needs",
        "category": "Crystal Oscillator"
      }
    ],
    faeReview: {
      "rating": 4.8,
      "summary": "This is the go-to oscillator for USB applications. The 48MHz frequency is exactly what USB requires, and the ±25ppm stability ensures reliable USB communication. The compact 2520 package is perfect for space-constrained USB devices. I've used this in numerous USB hub and device designs with consistent reliability. The enable feature is useful for power management in battery-powered USB devices. The startup time of 5ms is fast enough for most applications. Highly recommended for any USB design.",
      "author": "Senior FAE Team",
      "date": "2025-01-15",
      "content": "Based on extensive field experience, this product delivers excellent performance across various operating conditions."
    },
    faqs: [
      {
        "question": "Is this oscillator suitable for USB 2.0 and USB 3.0?",
        "answer": "Yes, 48MHz is the standard clock frequency for USB 2.0. USB 3.0 typically uses 100MHz or higher, but the 48MHz can be used for USB 2.0 compatibility modes."
      },
      {
        "question": "How do I use the Output Enable (OE) pin?",
        "answer": "Connect OE to VDD (or leave floating with internal pull-up) for normal operation. Connect to GND to disable output (tri-state/high-impedance). This allows clock gating for power management."
      },
      {
        "question": "Can this oscillator drive multiple USB devices?",
        "answer": "The CMOS output can typically drive 1-2 standard loads. For multiple USB devices, use a clock buffer or ensure total load capacitance is under 15pF."
      },
      {
        "question": "What is the jitter performance?",
        "answer": "This oscillator has 1.5ps RMS typical jitter, which is excellent for USB applications. USB 2.0 requires less than 100ps jitter, so this oscillator provides significant margin."
      },
      {
        "question": "Can I use this with 1.8V logic?",
        "answer": "This is a 3.3V oscillator. For 1.8V systems, use a level shifter or choose a programmable version which supports multiple voltages."
      }
    ],
    resources: {
      "datasheet": "/resources/datasheets/yxc/YXO-2520-series.pdf",
      "applicationNote": "/resources/app-notes/usb-timing-design.pdf"
    }
  },
  {
    partNumber: "YXO-P-25M",
    name: "25MHz Programmable Oscillator",
    nameCn: "25MHz可编程晶振",
    shortDescription: "QuickTurn programmable oscillator supporting 1-210MHz with ±25ppm stability and multiple output formats.",
    description: "QuickTurn programmable crystal oscillator supporting custom frequencies from 1-210MHz with CMOS, LVDS, or LVPECL outputs.",
    descriptionParagraphs: [
      "The YXO-P-25M is a QuickTurn programmable oscillator that can be configured for any frequency from 1-210MHz. This flexibility makes it ideal for prototyping, custom applications, and designs requiring non-standard frequencies.",
      "With ±25ppm frequency stability and low jitter, this oscillator delivers performance comparable to fixed-frequency oscillators. Multiple output formats (CMOS, LVDS, LVPECL) support various application requirements.",
      "The QuickTurn programmability allows samples to be delivered in days rather than weeks, accelerating development schedules. Volume production maintains the same performance with competitive pricing."
    ],
    status: "active",
    isPopular: true,
    keywords: [
      "programmable oscillator",
      "custom frequency",
      "QuickTurn oscillator",
      "configurable oscillator"
    ],
    specifications: {
      "Frequency": "1-210MHz (programmable)",
      "Package": "3.2×2.5mm SMD",
      "Output Type": "CMOS/LVDS/LVPECL",
      "Frequency Stability": "±25ppm",
      "Supply Voltage": "1.8V/2.5V/3.3V",
      "Current Consumption": "15mA max",
      "Rise/Fall Time": "5ns max (CMOS)",
      "Duty Cycle": "45% - 55%",
      "Operating Temperature": "-40°C to +85°C",
      "Start-up Time": "5ms max",
      "Jitter": "1ps RMS typ",
      "Output Voltage": "N/A",
      "Phase Noise": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    applications: [
      "Prototyping",
      "Custom frequency designs",
      "FPGA clocking",
      "Communication systems",
      "Industrial control"
    ],
    features: [
      "1-210MHz programmable frequency",
      "Multiple output formats",
      "Multiple supply voltages",
      "QuickTurn samples in days",
      "Low jitter performance"
    ],
    pinout: {
      "description": "4-pin SMD package with programmable options",
      "pins": [
        {"pin": "1", "function": "OE", "description": "Output Enable"},
        {"pin": "2", "function": "GND", "description": "Ground"},
        {"pin": "3", "function": "OUT", "description": "Clock Output"},
        {"pin": "4", "function": "VDD", "description": "Supply Voltage"}
      ]
    },
    package: {
      "type": "SMD Ceramic",
      "dimensions": "3.2mm × 2.5mm × 0.9mm",
      "pinCount": 4
    },
    stock: {
      "status": "in_stock",
      "quantity": 15000,
      "minOrderQty": 500,
      "leadTime": "Programmable samples: 2-3 days, Production: 4-6 weeks"
    },
    pricing: {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 500, "price": 1.25},
        {"minQty": 1000, "price": 0.98},
        {"minQty": 5000, "price": 0.75},
        {"minQty": 10000, "price": 0.58}
      ]
    },
    alternativeParts: [
      {
        "partNumber": "YXO-3225-25M",
        "manufacturer": "YXC",
        "description": "Fixed 25MHz oscillator at lower cost",
        "tradeOff": "Lower cost but fixed frequency"
      }
    ],
    companionParts: [
      {
        "partNumber": "YXO-3225-50M",
        "link": "#",
        "description": "Fixed 50MHz oscillator for standard applications",
        "category": "Crystal Oscillator"
      }
    ],
    faeReview: {
      "rating": 4.9,
      "summary": "This programmable oscillator is a game-changer for prototyping and custom frequency needs. The QuickTurn capability means you can get samples in days instead of waiting weeks for custom crystals. I've used this for numerous prototyping projects and custom frequency designs. The performance matches fixed-frequency oscillators, and the flexibility is invaluable. For production, the pricing is competitive with fixed-frequency options. The ability to support multiple output formats and voltages makes this extremely versatile. Highly recommended for any design requiring non-standard frequencies or rapid prototyping.",
      "author": "Senior FAE Team",
      "date": "2025-01-15",
      "content": "Based on extensive field experience, this product delivers excellent performance across various operating conditions."
    },
    faqs: [
      {
        "question": "How quickly can I get programmable oscillator samples?",
        "answer": "QuickTurn samples are typically available in 2-3 business days. This is much faster than the 6-8 weeks required for custom crystal development."
      },
      {
        "question": "What frequencies can be programmed?",
        "answer": "Any frequency from 1-210MHz can be programmed with 6 decimal places of precision (e.g., 25.123456MHz). This covers virtually all standard and custom frequency requirements."
      },
      {
        "question": "Can I change the output format?",
        "answer": "Yes, the same programmable oscillator can be configured for CMOS, LVDS, or LVPECL outputs. This provides flexibility for different application requirements."
      },
      {
        "question": "Is there a minimum order quantity for programmable oscillators?",
        "answer": "Samples can be ordered in quantities as low as 10 pieces. For production, standard MOQ is 500 pieces with competitive pricing at higher volumes."
      },
      {
        "question": "How does the price compare to fixed-frequency oscillators?",
        "answer": "Programmable oscillators are typically 20-30% more expensive than fixed-frequency equivalents. However, the flexibility and fast sample availability often offset this cost in development time savings."
      }
    ],
    resources: {
      "datasheet": "/resources/datasheets/yxc/YXO-P-programmable-series.pdf",
      "applicationNote": "/resources/app-notes/programmable-oscillator-guide.pdf"
    }
  }
];
oscillatorsCategory.products.push(...additionalOscillatorProducts);
console.log(`   Crystal Oscillators分类现在有 ${oscillatorsCategory.products.length} 个产品`);

// ==================== ADD SUPPORT ARTICLES ====================
console.log('\n📚 Adding new support articles...');
const additionalArticles = [
  {
    id: "automotive-crystal-selection",
    title: "Automotive Crystal Selection Guide",
    titleCn: "汽车级晶振选型指南",
    slug: "automotive-crystal-selection",
    category: "Application Note",
    description: "Comprehensive guide to selecting AEC-Q200 qualified crystals and oscillators for automotive applications.",
    summary: "Learn how to select appropriate AEC-Q200 qualified timing components for automotive applications including infotainment, ADAS, and body control systems.",
    keywords: [
      "automotive crystal",
      "AEC-Q200",
      "automotive timing",
      "grade 1 qualification"
    ],
    tags: [
      "automotive",
      "selection guide",
      "AEC-Q200"
    ],
    author: {
      name: "YXC Automotive Team",
      title: "Automotive Applications Engineer",
      email: "support@beiluo.tech"
    },
    publishDate: "2025-01-05",
    readTime: "16 min",
    content: "Automotive applications require timing components that meet strict reliability and quality standards. This guide covers AEC-Q200 qualification, temperature grades, and selection criteria for automotive crystals and oscillators. AEC-Q200 is the automotive standard for passive component qualification. Grade 1 covers -40°C to +125°C for most automotive applications. Grade 0 extends to +150°C for extreme environments. Key automotive requirements include: extended temperature range, enhanced shock and vibration resistance, long-term reliability data, full PPAP documentation, and traceability. For infotainment systems, use crystals with ±30ppm stability and low EMI. ADAS systems require higher precision with ±20ppm or better. Body control modules need robust crystals with excellent shock resistance. Always use AEC-Q200 qualified parts even for non-safety applications to ensure reliability. Contact YXC for automotive-specific recommendations and PPAP documentation.",
    faq: [
      {
        question: "What is the difference between AEC-Q200 Grade 0 and Grade 1?",
        answer: "Grade 1 covers -40°C to +125°C suitable for most cabin and under-hood applications. Grade 0 extends to +150°C for extreme environments like near exhaust systems. Grade 0 requires more stringent testing and longer qualification time."
      },
      {
        question: "Do I need PPAP documentation for automotive crystals?",
        answer: "Yes, PPAP (Production Part Approval Process) is required for automotive production. YXC provides full PPAP Level 3 documentation for qualified automotive products, including design records, process flow diagrams, PFMEA, control plans, and dimensional results."
      },
      {
        question: "How long does automotive qualification take?",
        "answer": "AEC-Q200 testing typically takes 12-16 weeks. However, YXC maintains qualified automotive products in stock with existing PPAP documentation, enabling immediate use without additional qualification time."
      },
      {
        question: "What layout considerations are important for automotive crystals?",
        "answer": "Keep traces short (<20mm), use guard rings around crystal pads, implement solid ground plane under crystal, and keep crystal away from high-voltage or high-current traces for EMI compliance. Automotive environments require additional attention to vibration and shock protection."
      }
    ],
    relatedArticles: [
      "crystal-selection-guide",
      "pcb-layout-guidelines",
      "automotive-timing-solution"
    ],
    downloads: [
      {
        name: "Automotive Crystal Selection Worksheet",
        url: "/resources/downloads/automotive-crystal-selection.xlsx"
      }
    ],
    faeInsights: {
      summary: "For automotive designs, always start with AEC-Q200 qualified parts. The additional cost is minimal compared to the risk of field failures and the cost of redesign. Plan for long-term supply agreements as automotive programs typically run 10+ years.",
      keyTakeaways: [
        "Use AEC-Q200 qualified parts for all automotive applications",
        "Plan for 10+ year supply requirements",
        "Obtain PPAP documentation early in the design phase",
        "Design for extended temperature range"
      ],
      author: {
        name: "Technical FAE",
        title: "Support Engineer",
        experience: "8+ years"
      },
      content: "Based on years of experience, this Automotive Crystal Selection Guide article addresses common challenges engineers face in automotive design.",
      insightLogic: "Recommendations from analysis of successful automotive product deployments."
    },
    customerCases: [
      {
        company: "Tier-1 Automotive Supplier",
        application: "ADAS Camera Module",
        feedback: "Following the automotive selection guide helped us choose the right AEC-Q200 qualified crystal with proper PPAP documentation, accelerating our automotive qualification process."
      }
    ]
  },
  {
    id: "low-power-rtc-design",
    title: "Low Power RTC Design with 32.768kHz Crystals",
    titleCn: "32.768kHz晶振低功耗RTC设计指南",
    slug: "low-power-rtc-design",
    category: "Design Guide",
    description: "Design guide for ultra-low power real-time clock circuits using 32.768kHz tuning fork crystals.",
    summary: "Learn techniques for minimizing power consumption in RTC circuits including crystal selection, load capacitance optimization, and PCB layout considerations for battery-powered devices.",
    keywords: [
      "RTC design",
      "32.768kHz",
      "low power",
      "tuning fork",
      "battery powered"
    ],
    tags: [
      "low power",
      "RTC",
      "design guide"
    ],
    author: {
      name: "YXC Low Power Team",
      title: "Low Power Design Specialist",
      email: "support@beiluo.tech"
    },
    publishDate: "2025-01-03",
    readTime: "14 min",
    content: "Ultra-low power RTC design is critical for battery-powered IoT devices. This guide covers crystal selection, circuit optimization, and layout techniques for minimizing RTC current consumption. 32.768kHz tuning fork crystals are specifically designed for low-power RTC applications. Key parameters include ESR (should be <70kΩ), load capacitance (lower is better for power), and drive level (minimize for power savings). To minimize power consumption: use crystals with low ESR, minimize load capacitance (check MCU requirements), keep traces short to reduce parasitic capacitance, use proper guard ring layout to prevent leakage, and select MCUs with configurable drive strength. Typical RTC current should be 0.3-0.8μA. Poor designs may consume 2-5μA or more. The difference comes from crystal ESR, load capacitance matching, and oscillator circuit design. For 10+ year battery life, every microamp counts. Proper design can extend battery life by years.",
    faq: [
      {
        question: "How much current should a 32.768kHz RTC circuit consume?",
        "answer": "Well-designed RTC circuits typically consume 0.3-0.8μA. Poor designs may consume 2-5μA or more. The difference comes from crystal ESR, load capacitance matching, and oscillator circuit design."
      },
      {
        question: "Does crystal package size affect power consumption?",
        "answer": "Yes, smaller packages generally have higher ESR which increases drive power. However, the difference is usually small (0.1-0.2μA). For extreme low power, use the smallest package that meets ESR requirements."
      },
      {
        question: "Can I reduce power by using smaller load capacitors?",
        "answer": "Yes, but this affects frequency accuracy. Using smaller CL than specified causes the crystal to run faster. For example, using 6pF instead of 12.5pF might save 0.2μA but cause +100ppm frequency error."
      },
      {
        question: "What causes RTC current to increase over time?",
        "answer": "Common causes: PCB contamination absorbing moisture, flux residue becoming conductive, corrosion from humidity, capacitor degradation, or crystal aging increasing ESR. Proper cleaning and conformal coating prevent these issues."
      }
    ],
    relatedArticles: [
      "crystal-selection-guide",
      "pcb-layout-guidelines",
      "iot-low-power-timing"
    ],
    downloads: [
      {
        name: "RTC Power Calculator",
        url: "/resources/tools/rtc-power-calculator.html"
      },
      {
        name: "Low Power Layout Checklist",
        url: "/resources/downloads/low-power-layout-checklist.pdf"
      }
    ],
    faeInsights: {
      summary: "The most common mistake in low-power RTC design is using load capacitance that's too high. Always use the minimum load capacitance that meets your accuracy requirements. A difference of 6pF vs 12pF can mean 0.3μA vs 0.6μA - doubling your RTC power consumption.",
      keyTakeaways: [
        "Use minimum required load capacitance",
        "Select crystals with low ESR",
        "Keep traces short to minimize parasitics",
        "Implement proper guard ring layout"
      ],
      author: {
        name: "Technical FAE",
        title: "Support Engineer",
        experience: "8+ years"
      },
      content: "Based on years of experience, this Low Power RTC Design article addresses common challenges engineers face in battery-powered design.",
      insightLogic: "Recommendations from analysis of successful IoT product deployments."
    },
    customerCases: [
      {
        company: "Smart Meter Manufacturer",
        application: "Electricity Meter RTC",
        feedback: "Following the low-power design guide reduced our RTC current from 2.1μA to 0.45μA, extending battery life from 8 years to over 15 years."
      }
    ]
  }
];
supportData.articles.push(...additionalArticles);
console.log(`   Support Articles现在有 ${supportData.articles.length} 篇文章`);

// Save updated data files
console.log('\n💾 Saving updated data files...');
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log('\n✅ YXC brand data completion finished!');
console.log('\n📊 Final Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  console.log(`     - ${cat.name}: ${cat.products.length} products`);
});
console.log(`   Support Articles: ${supportData.articles.length}`);
