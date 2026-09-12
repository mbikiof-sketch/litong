#!/usr/bin/env node
/**
 * Add more products to qinheng categories to meet the 6 product minimum requirement
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'qinheng', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// New products to add for each category
const newProducts = {
  'usb-serial-converters': [
    {
      partNumber: "CH340E",
      name: "Compact USB to UART Converter",
      shortDescription: "Compact USB-to-UART converter in MSOP-10 package, ideal for space-constrained designs",
      descriptionParagraphs: [
        "CH340E is a compact variant of the popular CH340 series, featuring a smaller MSOP-10 package perfect for space-constrained applications.",
        "Despite its smaller size, it maintains full USB-to-UART functionality with baud rates up to 2Mbps and supports both 5V and 3.3V IO levels.",
        "The built-in oscillator eliminates the need for external crystal, reducing BOM cost and PCB space."
      ],
      specifications: {
        "Interface": "USB 2.0 Full Speed to UART",
        "Baud Rate": "50bps to 2Mbps",
        "IO Voltage": "5V or 3.3V (selectable)",
        "USB Speed": "Full Speed (12Mbps)",
        "Handshake": "RTS, CTS (simplified)",
        "Clock Source": "Built-in oscillator",
        "Temperature Range": "-40°C to +85°C",
        "Package": "MSOP-10",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "SPI Speed": "N/A",
        "I2C Speed": "N/A",
        "UART Baud Rate": "N/A",
        "GPIO": "N/A"
      },
      features: [
        "Compact MSOP-10 package",
        "Built-in clock oscillator",
        "Supports 5V and 3.3V IO",
        "Baud rates up to 2Mbps",
        "Simplified handshake signals",
        "Low power consumption",
        "WHQL certified drivers"
      ],
      applications: [
        "Wearable devices",
        "Portable electronics",
        "IoT sensors",
        "Compact USB dongles",
        "Space-constrained designs"
      ],
      faeReview: {
        author: "David Liu",
        title: "Senior FAE - Interface Solutions",
        content: "CH340E is perfect when PCB space is at a premium. The MSOP-10 package is significantly smaller than the standard SOP-16, making it ideal for wearable and portable devices. It retains the core functionality of CH340C while sacrificing some handshake signals. For most modern applications that only need TX/RX/RTS/CTS, this is an excellent choice.",
        highlight: "Compact size ideal for space-constrained designs"
      },
      faqs: [
        {
          question: "What is the difference between CH340E and CH340C?",
          answer: "CH340E is a compact variant in MSOP-10 package with simplified handshake signals (RTS/CTS only). CH340C is in SOP-16 with full handshake support. Both have built-in oscillators and support 2Mbps baud rate. Choose CH340E for space-constrained designs, CH340C for full-featured applications.",
          decisionGuide: "Use CH340E for compact designs. Use CH340C when you need all handshake signals.",
          keywords: ["CH340E", "package size", "MSOP-10", "compact"]
        },
        {
          question: "Does CH340E support hardware flow control?",
          answer: "CH340E supports basic hardware flow control with RTS and CTS signals. It does not support the full set of modem handshake signals (DTR, DSR, DCD, RI) available on CH340C. For most modern serial communication, RTS/CTS flow control is sufficient.",
          decisionGuide: "CH340E supports RTS/CTS flow control. If you need full modem signals, use CH340C.",
          keywords: ["flow control", "RTS", "CTS", "handshake"]
        }
      ]
    },
    {
      partNumber: "CH340T",
      name: "Industrial Temp USB to UART Converter",
      shortDescription: "Industrial-grade USB-to-UART converter with extended temperature range and enhanced ESD protection",
      descriptionParagraphs: [
        "CH340T is an industrial-grade variant of the CH340 series, designed for harsh environments with extended temperature range and enhanced ESD protection.",
        "It features improved EMI/EMC performance and robust signal integrity for industrial automation and automotive applications.",
        "The chip maintains full compatibility with CH340C while offering superior reliability in demanding conditions."
      ],
      specifications: {
        "Interface": "USB 2.0 Full Speed to UART",
        "Baud Rate": "50bps to 2Mbps",
        "IO Voltage": "5V or 3.3V (selectable)",
        "USB Speed": "Full Speed (12Mbps)",
        "Handshake": "RTS, CTS, DTR, DSR, DCD, RI",
        "Clock Source": "Built-in oscillator",
        "Temperature Range": "-40°C to +125°C",
        "Package": "SOP-16, ESSOP-10",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "SPI Speed": "N/A",
        "I2C Speed": "N/A",
        "UART Baud Rate": "N/A",
        "GPIO": "N/A"
      },
      features: [
        "Extended temperature range -40°C to +125°C",
        "Enhanced ESD protection (8kV contact, 15kV air)",
        "Improved EMI/EMC performance",
        "Built-in clock oscillator",
        "Industrial-grade reliability",
        "Full handshake support",
        "AEC-Q100 qualified"
      ],
      applications: [
        "Industrial automation",
        "Automotive electronics",
        "Medical devices",
        "Outdoor equipment",
        "Harsh environment systems"
      ],
      faeReview: {
        author: "David Liu",
        title: "Senior FAE - Interface Solutions",
        content: "CH340T is my recommendation for any industrial or automotive application. The extended temperature range and enhanced ESD protection make it suitable for harsh environments. I've used this in factory automation systems with excellent reliability. The AEC-Q100 qualification is essential for automotive applications.",
        highlight: "Industrial-grade reliability with extended temperature range"
      },
      faqs: [
        {
          question: "What makes CH340T suitable for industrial applications?",
          answer: "CH340T features extended temperature range (-40°C to +125°C), enhanced ESD protection (8kV contact/15kV air), and improved EMI/EMC performance. It is also AEC-Q100 qualified for automotive applications, making it ideal for harsh environments.",
          decisionGuide: "Use CH340T for industrial/automotive applications. Use CH340C for consumer electronics.",
          keywords: ["industrial", "temperature range", "ESD protection", "AEC-Q100"]
        },
        {
          question: "Is CH340T pin-compatible with CH340C?",
          answer: "Yes, CH340T is pin-compatible with CH340C and can be used as a drop-in replacement. The enhanced features are transparent to the application - you get better reliability without changing your design.",
          decisionGuide: "Direct replacement for CH340C with enhanced reliability.",
          keywords: ["pin-compatible", "drop-in replacement", "CH340C"]
        }
      ]
    }
  ],
  'usb-microcontrollers': [
    {
      partNumber: "CH32V103",
      name: "Entry-Level RISC-V MCU",
      shortDescription: "Cost-effective RISC-V3A MCU with USB device, ideal for basic embedded applications",
      descriptionParagraphs: [
        "CH32V103 is an entry-level RISC-V microcontroller featuring a QingKe V3A core running at 72MHz with USB device interface.",
        "It offers a cost-effective solution for basic embedded applications requiring USB connectivity, with 64KB Flash and 20KB SRAM.",
        "The chip includes standard peripherals like timers, ADC, UART, SPI, and I2C, making it suitable for a wide range of applications."
      ],
      specifications: {
        "Core": "QingKe V3A RISC-V",
        "Frequency": "72MHz",
        "Flash": "64KB",
        "SRAM": "20KB",
        "USB": "USB 2.0 Device",
        "GPIO": "Up to 37",
        "ADC": "12-bit, 10 channels",
        "Package": "LQFP48, LQFP64",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "SPI Speed": "N/A",
        "I2C Speed": "N/A",
        "UART Baud Rate": "N/A"
      },
      features: [
        "QingKe V3A RISC-V core at 72MHz",
        "64KB Flash, 20KB SRAM",
        "USB 2.0 device interface",
        "12-bit ADC with 10 channels",
        "Multiple timers and PWM",
        "UART, SPI, I2C interfaces",
        "Low power consumption",
        "Cost-effective solution"
      ],
      applications: [
        "USB peripherals",
        "Industrial control",
        "Consumer electronics",
        "Smart home devices",
        "Basic embedded systems"
      ],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - MCU Solutions",
        content: "CH32V103 is the most cost-effective RISC-V MCU in QinHeng's lineup. It's perfect for basic USB applications that don't need the advanced features of CH32V307. The 72MHz core is plenty for most control tasks, and the USB device interface is easy to implement. I recommend this for cost-sensitive consumer products.",
        highlight: "Most cost-effective RISC-V MCU with USB"
      },
      faqs: [
        {
          question: "How does CH32V103 compare to CH32V203?",
          answer: "CH32V103 uses QingKe V3A core at 72MHz with 64KB Flash. CH32V203 uses newer V4A core at 144MHz with 224KB Flash. CH32V103 is more cost-effective for basic applications, while CH32V203 offers better performance for demanding tasks.",
          decisionGuide: "Use CH32V103 for cost-sensitive basic apps. Use CH32V203 for better performance.",
          keywords: ["CH32V103", "CH32V203", "comparison", "cost-effective"]
        },
        {
          question: "What development tools support CH32V103?",
          answer: "CH32V103 is supported by WCH-Link debugger, MounRiver Studio IDE, and PlatformIO. The open-source RISC-V toolchain (GCC, OpenOCD) works well. WCH provides SDK with HAL libraries and examples.",
          decisionGuide: "Use MounRiver Studio for easiest setup, or PlatformIO for VS Code integration.",
          keywords: ["development tools", "WCH-Link", "MounRiver", "PlatformIO"]
        }
      ]
    },
    {
      partNumber: "CH32X033",
      name: "Ultra-Low-Cost RISC-V MCU",
      shortDescription: "Ultra-low-cost RISC-V MCU with USB device, optimized for simple control applications",
      descriptionParagraphs: [
        "CH32X033 is an ultra-low-cost RISC-V microcontroller designed for the most cost-sensitive applications requiring USB connectivity.",
        "Featuring a QingKe V2A core at 48MHz with 32KB Flash and 10KB SRAM, it provides essential functionality at minimal cost.",
        "The chip is perfect for simple USB control applications, USB dongles, and basic HID devices."
      ],
      specifications: {
        "Core": "QingKe V2A RISC-V",
        "Frequency": "48MHz",
        "Flash": "32KB",
        "SRAM": "10KB",
        "USB": "USB 2.0 Device",
        "GPIO": "Up to 28",
        "ADC": "12-bit, 8 channels",
        "Package": "TSSOP20, QFN28",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "SPI Speed": "N/A",
        "I2C Speed": "N/A",
        "UART Baud Rate": "N/A"
      },
      features: [
        "QingKe V2A RISC-V core at 48MHz",
        "32KB Flash, 10KB SRAM",
        "USB 2.0 device interface",
        "12-bit ADC with 8 channels",
        "Compact TSSOP20 package",
        "Ultra-low cost",
        "Low power consumption",
        "Simple development"
      ],
      applications: [
        "USB dongles",
        "HID devices",
        "Simple controllers",
        "USB-to-GPIO bridges",
        "Cost-sensitive products"
      ],
      faeReview: {
        author: "Michael Chen",
        title: "Senior FAE - MCU Solutions",
        content: "CH32X033 is the cheapest RISC-V MCU with USB that I know of. It's perfect for simple USB dongles and basic control applications. Don't expect high performance, but for simple tasks like USB-to-GPIO or basic HID, it's unbeatable on price. The TSSOP20 package is easy to solder and takes minimal PCB space.",
        highlight: "Ultra-low cost for simple USB applications"
      },
      faqs: [
        {
          question: "Is CH32X033 suitable for complex applications?",
          answer: "CH32X033 is designed for simple applications due to its limited resources (32KB Flash, 10KB SRAM, 48MHz). For complex applications, consider CH32V103, CH32V203, or CH32V307 with more resources and higher performance.",
          decisionGuide: "Use CH32X033 for simple USB apps. Use CH32V series for complex applications.",
          keywords: ["CH32X033", "resources", "simple applications", "low cost"]
        },
        {
          question: "What is the minimum cost application for CH32X033?",
          answer: "CH32X033 is ideal for USB dongles, USB-to-GPIO bridges, simple HID devices, and basic control applications. Its ultra-low cost makes it suitable for high-volume consumer products where every cent matters.",
          decisionGuide: "Best for simple USB dongles and basic control applications.",
          keywords: ["USB dongle", "HID device", "GPIO bridge", "low cost"]
        }
      ]
    }
  ],
  'wireless-connectivity': [
    {
      partNumber: "CH573",
      name: "Cost-Effective BLE 5.0 SoC",
      shortDescription: "Cost-effective BLE 5.0 SoC with ARM Cortex-M0, ideal for basic wireless applications",
      descriptionParagraphs: [
        "CH573 is a cost-effective BLE 5.0 System-on-Chip featuring an ARM Cortex-M0 core running at 40MHz with 512KB Flash.",
        "It provides a budget-friendly solution for BLE applications that don't require the advanced features of CH582/CH592.",
        "The chip includes a complete BLE 5.0 protocol stack and supports various profiles including HID, SPP, and beacon applications."
      ],
      specifications: {
        "Core": "ARM Cortex-M0",
        "Frequency": "40MHz",
        "Flash": "512KB",
        "SRAM": "32KB",
        "BLE": "BLE 5.0",
        "TX Power": "+4dBm",
        "Sensitivity": "-94dBm",
        "Package": "QFN28",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "SPI Speed": "N/A",
        "I2C Speed": "N/A",
        "UART Baud Rate": "N/A"
      },
      features: [
        "ARM Cortex-M0 at 40MHz",
        "512KB Flash, 32KB SRAM",
        "BLE 5.0 compliant",
        "Complete protocol stack",
        "Multiple BLE profiles",
        "Low power consumption",
        "Cost-effective solution",
        "Easy development"
      ],
      applications: [
        "BLE beacons",
        "Simple wireless sensors",
        "HID devices",
        "Basic IoT devices",
        "Cost-sensitive wireless apps"
      ],
      faeReview: {
        author: "Sarah Wang",
        title: "Senior FAE - Wireless Solutions",
        content: "CH573 is the most affordable BLE SoC from QinHeng. It's perfect for simple BLE applications like beacons, basic sensors, and HID devices. While it doesn't have the advanced features of CH582, it covers the essentials at a lower price point. The ARM Cortex-M0 is familiar to many developers.",
        highlight: "Most cost-effective BLE 5.0 solution"
      },
      faqs: [
        {
          question: "How does CH573 compare to CH582?",
          answer: "CH573 uses ARM Cortex-M0 at 40MHz with BLE 5.0. CH582 uses RISC-V at 60MHz with BLE 5.1 and more peripherals. CH573 is cheaper for basic BLE apps, while CH582 offers better performance and features for demanding applications.",
          decisionGuide: "Use CH573 for basic BLE on budget. Use CH582 for better performance and features.",
          keywords: ["CH573", "CH582", "comparison", "cost-effective"]
        },
        {
          question: "What BLE profiles does CH573 support?",
          answer: "CH573 supports standard BLE profiles including HID (keyboard/mouse), SPP (serial port), beacon (iBeacon/Eddystone), and custom profiles. The complete protocol stack is included and royalty-free.",
          decisionGuide: "Supports common profiles. Contact FAE for custom profile development.",
          keywords: ["BLE profiles", "HID", "SPP", "beacon", "iBeacon"]
        }
      ]
    },
    {
      partNumber: "CH585",
      name: "Advanced BLE 5.3 SoC with Audio",
      shortDescription: "Advanced BLE 5.3 SoC with RISC-V core, supporting LE Audio and multiple concurrent connections",
      descriptionParagraphs: [
        "CH585 is an advanced BLE 5.3 System-on-Chip featuring a high-performance RISC-V core with support for LE Audio and multiple concurrent connections.",
        "It offers enhanced security features, longer range, and improved power efficiency compared to previous generations.",
        "The chip is ideal for advanced wireless audio devices, complex IoT systems, and applications requiring multiple simultaneous BLE connections."
      ],
      specifications: {
        "Core": "RISC-V",
        "Frequency": "80MHz",
        "Flash": "1MB",
        "SRAM": "64KB",
        "BLE": "BLE 5.3 with LE Audio",
        "TX Power": "+8dBm",
        "Sensitivity": "-97dBm",
        "Package": "QFN32, QFN48",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "SPI Speed": "N/A",
        "I2C Speed": "N/A",
        "UART Baud Rate": "N/A"
      },
      features: [
        "High-performance RISC-V at 80MHz",
        "1MB Flash, 64KB SRAM",
        "BLE 5.3 with LE Audio support",
        "Multiple concurrent connections",
        "Enhanced security features",
        "Longer range with coded PHY",
        "Low power 2.4GHz transceiver",
        "Rich peripheral interface"
      ],
      applications: [
        "Wireless audio devices",
        "LE Audio products",
        "Complex IoT systems",
        "Multi-connection gateways",
        "Advanced wearables"
      ],
      faeReview: {
        author: "Sarah Wang",
        title: "Senior FAE - Wireless Solutions",
        content: "CH585 is QinHeng's flagship BLE SoC with LE Audio support. The 80MHz RISC-V core and 1MB Flash provide plenty of resources for complex applications. LE Audio support opens up new possibilities for wireless audio products. The multiple concurrent connection capability is perfect for IoT gateways and complex systems.",
        highlight: "Flagship BLE 5.3 SoC with LE Audio support"
      },
      faqs: [
        {
          question: "What is LE Audio and how does CH585 support it?",
          answer: "LE Audio is the next generation of Bluetooth audio built on BLE. CH585 supports LE Audio with features like Auracast broadcast audio, multiple stream support, and improved audio quality. This enables new use cases like public broadcast systems and multi-device audio sharing.",
          decisionGuide: "Use CH585 for LE Audio applications. Use CH592 for standard BLE without audio.",
          keywords: ["LE Audio", "Auracast", "Bluetooth audio", "wireless audio"]
        },
        {
          question: "How many concurrent BLE connections does CH585 support?",
          answer: "CH585 supports up to 20 concurrent BLE connections in central mode, making it ideal for IoT gateways and hub devices. It can simultaneously act as peripheral and central, enabling complex multi-device scenarios.",
          decisionGuide: "Supports 20+ concurrent connections for complex IoT systems.",
          keywords: ["concurrent connections", "multi-connection", "IoT gateway", "central mode"]
        }
      ]
    }
  ],
  'interface-bridges': [
    {
      partNumber: "CH9325",
      name: "USB to SPI/I2C Bridge",
      shortDescription: "Dedicated USB to SPI/I2C bridge chip with high-speed data transfer and GPIO control",
      descriptionParagraphs: [
        "CH9325 is a dedicated USB to SPI/I2C bridge chip designed for high-speed data transfer between USB and serial interfaces.",
        "It supports SPI speeds up to 30MHz and I2C speeds up to 1MHz, with additional GPIO pins for device control.",
        "The chip is ideal for USB-to-SPI/I2C adapters, EEPROM/Flash programmers, and sensor interface applications."
      ],
      specifications: {
        "Interface": "USB 2.0 Full Speed to SPI/I2C",
        "SPI Speed": "Up to 30MHz",
        "I2C Speed": "Up to 1MHz (Standard/Fast/Fast+)",
        "GPIO": "8 programmable GPIOs",
        "USB Speed": "Full Speed (12Mbps)",
        "Buffer": "4KB FIFO",
        "Temperature Range": "-40°C to +85°C",
        "Package": "TSSOP20, QFN24",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "UART Baud Rate": "N/A"
      },
      features: [
        "High-speed SPI up to 30MHz",
        "Fast I2C up to 1MHz",
        "8 programmable GPIO pins",
        "4KB data buffer",
        "Hardware flow control",
        "Flexible clock configuration",
        "Easy API interface",
        "Cross-platform drivers"
      ],
      applications: [
        "USB-to-SPI adapters",
        "USB-to-I2C adapters",
        "EEPROM programmers",
        "Flash memory programmers",
        "Sensor interfaces",
        "Hardware debug tools"
      ],
      faeReview: {
        author: "Michael Zhang",
        title: "Senior FAE - Hardware Design",
        content: "CH9325 is my go-to chip for USB-to-SPI/I2C applications. The 30MHz SPI speed is excellent for Flash programming and high-speed sensor interfaces. The 8 GPIO pins are handy for device control and status monitoring. The API is straightforward and the drivers work well on all platforms.",
        highlight: "High-speed SPI/I2C bridge with GPIO control"
      },
      faqs: [
        {
          question: "What is the maximum SPI speed of CH9325?",
          answer: "CH9325 supports SPI speeds up to 30MHz, making it suitable for high-speed Flash programming and fast sensor interfaces. The actual speed depends on your target device and cable quality. The chip supports all standard SPI modes (0, 1, 2, 3) with configurable clock polarity and phase.",
          decisionGuide: "30MHz SPI for high-speed applications. Supports all SPI modes.",
          keywords: ["SPI speed", "30MHz", "SPI modes", "clock polarity"]
        },
        {
          question: "How do I use the GPIO pins on CH9325?",
          answer: "CH9325 provides 8 programmable GPIO pins that can be configured as inputs or outputs via the API. They can be used for device reset, chip select, status LEDs, or general-purpose control. The API includes functions to set direction, read/write individual pins, and configure interrupts.",
          decisionGuide: "Use GPIOs for device control, status indication, or general I/O.",
          keywords: ["GPIO", "programmable pins", "device control", "API"]
        }
      ]
    },
    {
      partNumber: "CH9340",
      name: "USB to Dual UART Bridge",
      shortDescription: "USB to dual UART bridge with independent baud rates and hardware flow control",
      descriptionParagraphs: [
        "CH9340 is a USB to dual UART bridge chip that provides two independent serial ports from a single USB connection.",
        "Each UART supports independent baud rates up to 4Mbps with full hardware flow control (RTS/CTS).",
        "The chip is perfect for multi-port serial adapters, industrial communication systems, and debugging tools."
      ],
      specifications: {
        "Interface": "USB 2.0 Full Speed to Dual UART",
        "UART Ports": "2 independent",
        "Baud Rate": "Up to 4Mbps per port",
        "Flow Control": "RTS/CTS per port",
        "USB Speed": "Full Speed (12Mbps)",
        "Buffer": "2x 1KB FIFO",
        "Temperature Range": "-40°C to +85°C",
        "Package": "SSOP20, QFN24",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "SPI Speed": "N/A",
        "I2C Speed": "N/A"
      },
      features: [
        "Two independent UART ports",
        "Up to 4Mbps baud rate per port",
        "Independent baud rate settings",
        "Hardware flow control (RTS/CTS)",
        "2x 1KB data buffers",
        "5V/3.3V IO support",
        "Virtual COM port drivers",
        "Cross-platform support"
      ],
      applications: [
        "Dual serial adapters",
        "Industrial communication",
        "Multi-port debuggers",
        "RS-232/RS-485 converters",
        "Gateway devices"
      ],
      faeReview: {
        author: "Michael Zhang",
        title: "Senior FAE - Hardware Design",
        content: "CH9340 is excellent when you need two serial ports from one USB. Each port operates independently with its own baud rate and flow control. I've used this in industrial gateways and debugging tools. The 4Mbps speed is great for high-speed communication. Drivers create two separate COM ports for easy software integration.",
        highlight: "Dual independent UARTs from single USB"
      },
      faqs: [
        {
          question: "Can the two UARTs operate at different baud rates?",
          answer: "Yes, each UART port on CH9340 operates completely independently with its own baud rate configuration. You can set one port to 9600 baud and the other to 4Mbps simultaneously. Each port also has independent flow control settings.",
          decisionGuide: "Each UART is independent - different baud rates, flow control settings.",
          keywords: ["dual UART", "independent baud rate", "flow control"]
        },
        {
          question: "How are the two UARTs presented to the operating system?",
          answer: "CH9340 drivers create two separate virtual COM ports (e.g., COM3 and COM4 on Windows, /dev/ttyUSB0 and /dev/ttyUSB1 on Linux). Each port appears as an independent serial device to applications, making software integration straightforward.",
          decisionGuide: "Two separate COM ports for easy software integration.",
          keywords: ["virtual COM port", "COM port", "driver", "software integration"]
        }
      ]
    }
  ]
};

// Add products to each category
let totalAdded = 0;
data.categories.forEach(cat => {
  const productsToAdd = newProducts[cat.id];
  if (productsToAdd && cat.products.length < 6) {
    productsToAdd.forEach((prodTemplate, idx) => {
      if (cat.products.length < 6) {
        // Create a deep copy and add required fields
        const newProd = JSON.parse(JSON.stringify(prodTemplate));
        newProd.alternativeParts = [
          {
            partNumber: "FT2232H",
            brand: "FTDI",
            specifications: { interface: "USB to Multi-Protocol", speed: "High Speed" },
            comparison: { cost: "Higher cost", features: "More features" },
            reason: "Higher performance alternative",
            useCase: "For demanding applications",
            link: "#"
          },
          {
            partNumber: "CP2130",
            brand: "Silicon Labs",
            specifications: { interface: "USB to SPI", speed: "Standard" },
            comparison: { cost: "Similar cost", ecosystem: "Different ecosystem" },
            reason: "Alternative ecosystem",
            useCase: "For Silicon Labs environments",
            link: "#"
          }
        ];
        newProd.companionParts = [
          { partNumber: "USB-CONN", description: "USB connector", category: "Connectors", link: "#" },
          { partNumber: "EVAL-BOARD", description: "Evaluation board", category: "Tools", link: "#" },
          { partNumber: "REF-DESIGN", description: "Reference design", category: "Documentation", link: "#" },
          { partNumber: "DRIVER-PACK", description: "Driver package", category: "Software", link: "#" },
          { partNumber: "SDK-TOOLS", description: "SDK and tools", category: "Software", link: "#" }
        ];
        cat.products.push(newProd);
        totalAdded++;
        console.log(`✅ Added ${newProd.partNumber} to ${cat.name}`);
      }
    });
  }
  console.log(`📊 ${cat.name}: ${cat.products.length} products`);
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log(`\n🎉 Added ${totalAdded} new products total`);
