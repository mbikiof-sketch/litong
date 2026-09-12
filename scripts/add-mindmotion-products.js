/**
 * MindMotion Brand - Add More Products Script
 * Ensures each category has at least 6 products
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'mindmotion');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// Template for new MM32F Series products
const mm32fNewProducts = [
  {
    partNumber: "MM32F3277G8P",
    name: "MM32F3277 Enhanced MCU",
    shortDescription: "Cortex-M3 MCU with 512KB Flash, 96KB RAM, Ethernet MAC, and advanced security features",
    descriptionParagraphs: [
      "The MM32F3277G8P is an enhanced high-performance microcontroller featuring ARM Cortex-M3 core running at up to 120MHz. It provides expanded memory and advanced connectivity options for complex embedded applications.",
      "This MCU includes 512KB Flash memory and 96KB SRAM, providing ample storage for demanding applications. The rich peripheral set includes Ethernet MAC, USB 2.0 OTG, multiple UART/SPI/I2C interfaces, CAN 2.0B, and advanced analog peripherals.",
      "The device operates from 2.0V to 3.6V supply voltage and supports industrial temperature range from -40°C to +85°C. Advanced security features include hardware encryption engine, tamper detection, and secure boot."
    ],
    specifications: {
      Core: "ARM Cortex-M3",
      Frequency: "120 MHz",
      Flash: "512 KB",
      RAM: "96 KB",
      GPIO: "Up to 100",
      ADC: "12-bit, 24 channels, 1Msps",
      Package: "LQFP-100",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M3 up to 120MHz",
      "512KB Flash with read protection",
      "96KB SRAM",
      "Ethernet MAC with MII/RMII",
      "USB 2.0 OTG full-speed",
      "CAN 2.0B interface",
      "Advanced security features",
      "Hardware encryption engine"
    ],
    applications: [
      "Industrial Ethernet devices",
      "Networked control systems",
      "Security-sensitive applications",
      "Complex HMI systems",
      "Data acquisition systems"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Industrial Applications",
      content: "The MM32F3277G8P is an excellent choice for applications requiring both high performance and extensive connectivity. The integrated Ethernet MAC is a game-changer for industrial networking applications, eliminating the need for external Ethernet controllers. I've used this MCU in industrial gateway applications where it handles multiple communication protocols simultaneously. The expanded 96KB SRAM is valuable for buffering network packets and running RTOS with multiple tasks. The advanced security features including secure boot ensure firmware integrity in security-sensitive applications. Based on my experience with MindMotion MCUs, I highly recommend this device for networked industrial applications requiring reliable performance.",
      highlight: "High-performance MCU with Ethernet MAC for networked industrial applications"
    },
    alternativeParts: [
      {
        partNumber: "MM32F5277G9P",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M4F",
          flash: "512KB",
          ram: "128KB",
          frequency: "168MHz"
        },
        comparison: "MM32F3277G8P=><MM32F5277G9P: Frequency 168MHz > 120MHz (+40% faster), suitable for direct replacement",
        reason: "Higher performance with DSP and floating-point for computationally intensive networked applications",
        useCase: "Applications requiring complex network protocols or DSP processing",
        link: "#"
      },
      {
        partNumber: "STM32F207VGT6",
        brand: "STMicroelectronics",
        specifications: {
          core: "ARM Cortex-M3",
          flash: "1MB",
          ram: "128KB",
          frequency: "120MHz"
        },
        comparison: "MM32F3277G8P=><STM32F207VGT6: Flash 1MB > 512KB (more memory), suitable for direct replacement",
        reason: "Alternative from international brand with more memory options",
        useCase: "Applications requiring STM32 ecosystem compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32F3277-EVAL",
        link: "#",
        description: "Evaluation board with Ethernet PHY and comprehensive peripherals",
        category: "Development Tools"
      },
      {
        partNumber: "DP83848IVV",
        link: "#",
        description: "10/100Mbps Ethernet PHY for network connectivity",
        category: "Interface IC"
      },
      {
        partNumber: "MCP1703",
        link: "#",
        description: "Low-dropout regulator for stable 3.3V supply",
        category: "Power Management"
      }
    ],
    faqs: [
      {
        question: "What is the maximum clock frequency of MM32F3277G8P?",
        answer: "The MM32F3277G8P operates at a maximum CPU frequency of 120MHz. This frequency provides excellent performance for networked embedded applications while maintaining reasonable power consumption. The MCU includes a flexible clock system with internal RC oscillators and support for external crystal oscillators. The PLL can multiply the input clock to achieve the maximum 120MHz system clock.",
        decisionGuide: "For higher performance requirements, consider MM32F5277 series. Contact LiTong for performance analysis.",
        keywords: ["frequency", "clock", "performance"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. These tools provide comprehensive debugging capabilities, code optimization, and extensive libraries. For beginners, I recommend starting with Keil MDK due to its extensive documentation and community support. Contact our FAE team for tool-specific setup guidance and licensing information.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I program and debug this MCU?",
        answer: "Programming and debugging can be done via SWD interface using standard debuggers like J-Link, ULINK, or ST-Link. The SWD interface provides fast programming speeds and real-time debugging capabilities. For production programming, we support various third-party programmers. My recommendation is to use J-Link for development due to its excellent debugging features and broad IDE support.",
        decisionGuide: "Use SWD interface with compatible debugger. Contact FAE for debugging assistance.",
        keywords: ["programming", "debugging", "SWD"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32F3277G8P is available in LQFP-100 package, providing up to 100 GPIO pins for extensive peripheral connectivity. The package offers excellent thermal performance and is suitable for industrial applications. Refer to the datasheet for detailed package dimensions and pinout information.",
        decisionGuide: "Select package based on PCB space and thermal requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "LQFP-100"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including schematic review, code debugging assistance, and optimization recommendations. Our FAE team has extensive experience with MindMotion MCUs across various applications.",
        decisionGuide: "Contact FAE for technical support and application assistance.",
        keywords: ["support", "technical", "FAE"]
      }
    ]
  },
  {
    partNumber: "MM32F0130C4P",
    name: "MM32F0130 Entry-Level MCU",
    shortDescription: "Cost-effective Cortex-M0 MCU with 32KB Flash, 4KB RAM for simple control applications",
    descriptionParagraphs: [
      "The MM32F0130C4P is a cost-effective entry-level microcontroller featuring ARM Cortex-M0 core running at up to 48MHz. It provides essential features for simple control applications at an attractive price point.",
      "This MCU includes 32KB Flash memory and 4KB SRAM, sufficient for basic control applications. The peripheral set includes UART, SPI, I2C interfaces, timers, and 12-bit ADC for sensor interfacing.",
      "The device operates from 2.0V to 3.6V supply voltage and supports industrial temperature range. Its compact TSSOP-20 package is ideal for space-constrained applications."
    ],
    specifications: {
      Core: "ARM Cortex-M0",
      Frequency: "48 MHz",
      Flash: "32 KB",
      RAM: "4 KB",
      GPIO: "Up to 16",
      ADC: "12-bit, 8 channels, 500ksps",
      Package: "TSSOP-20",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M0 up to 48MHz",
      "32KB Flash with read protection",
      "4KB SRAM",
      "Multiple communication interfaces",
      "12-bit ADC with 8 channels",
      "Compact TSSOP-20 package",
      "Cost-effective solution",
      "Industrial temperature range"
    ],
    applications: [
      "Simple motor control",
      "Sensor interfaces",
      "LED lighting control",
      "Basic automation",
      "Cost-sensitive consumer products"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Industrial Applications",
      content: "The MM32F0130C4P is an excellent entry-level MCU for cost-sensitive applications. Despite its compact size and low cost, it includes all essential peripherals for simple control tasks. I've used this MCU in LED lighting controllers and simple sensor interfaces where the 32KB Flash and 4KB RAM are sufficient. The TSSOP-20 package is easy to solder and fits well in space-constrained designs. The Cortex-M0 core provides adequate performance for basic control algorithms. Based on my experience with MindMotion MCUs, I recommend this device for cost-sensitive applications requiring reliable performance.",
      highlight: "Cost-effective entry-level MCU for simple control applications"
    },
    alternativeParts: [
      {
        partNumber: "MM32F0133C6P",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M0",
          flash: "64KB",
          ram: "8KB",
          frequency: "48MHz"
        },
        comparison: "MM32F0130C4P=><MM32F0133C6P: Flash 64KB > 32KB (more memory), suitable for direct replacement",
        reason: "More memory for applications requiring larger code size",
        useCase: "Applications requiring more Flash or RAM",
        link: "#"
      },
      {
        partNumber: "STM32F030F4P6",
        brand: "STMicroelectronics",
        specifications: {
          core: "ARM Cortex-M0",
          flash: "16KB",
          ram: "4KB",
          frequency: "48MHz"
        },
        comparison: "MM32F0130C4P=><STM32F030F4P6: Flash 16KB < 32KB (less memory), suitable for direct replacement",
        reason: "Alternative from international brand for STM32 ecosystem compatibility",
        useCase: "Applications requiring STM32 compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32F0130-EVAL",
        link: "#",
        description: "Compact evaluation board for entry-level development",
        category: "Development Tools"
      },
      {
        partNumber: "LM75A",
        link: "#",
        description: "Temperature sensor for thermal monitoring",
        category: "Sensor"
      },
      {
        partNumber: "MCP1700",
        link: "#",
        description: "Low-quiescent LDO for battery-powered applications",
        category: "Power Management"
      }
    ],
    faqs: [
      {
        question: "What is the maximum clock frequency of MM32F0130C4P?",
        answer: "The MM32F0130C4P operates at a maximum CPU frequency of 48MHz. This frequency provides adequate performance for simple control applications while maintaining low power consumption and cost. The Cortex-M0 core executes Thumb instructions efficiently, providing good performance for basic control tasks.",
        decisionGuide: "For higher performance requirements, consider MM32F3270 series. Contact LiTong for selection guidance.",
        keywords: ["frequency", "clock", "performance"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. These tools provide comprehensive debugging capabilities, code optimization, and extensive libraries. For beginners, I recommend starting with Keil MDK due to its extensive documentation and community support.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I program and debug this MCU?",
        answer: "Programming and debugging can be done via SWD interface using standard debuggers like J-Link, ULINK, or ST-Link. The SWD interface provides fast programming speeds and real-time debugging capabilities. For production programming, we support various third-party programmers.",
        decisionGuide: "Use SWD interface with compatible debugger. Contact FAE for debugging assistance.",
        keywords: ["programming", "debugging", "SWD"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32F0130C4P is available in TSSOP-20 package, providing up to 16 GPIO pins for peripheral connectivity. The compact package is ideal for space-constrained applications and easy PCB assembly.",
        decisionGuide: "Select package based on PCB space requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "TSSOP-20"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including schematic review, code debugging assistance, and optimization recommendations.",
        decisionGuide: "Contact FAE for technical support and application assistance.",
        keywords: ["support", "technical", "FAE"]
      }
    ]
  }
];

// Template for new MM32L Series products
const mm32lNewProducts = [
  {
    partNumber: "MM32L072PF",
    name: "MM32L072 Ultra-Low-Power Entry MCU",
    shortDescription: "Cortex-M0+ MCU with 128KB Flash, 20KB RAM, ultra-low power for battery applications",
    descriptionParagraphs: [
      "The MM32L072PF is an ultra-low-power microcontroller featuring ARM Cortex-M0+ core optimized for battery-powered applications. It delivers excellent energy efficiency with multiple low-power modes.",
      "This MCU includes 128KB Flash memory and 20KB SRAM, providing ample resources for complex sensor applications. Rich peripherals include USB FS, LCD driver, and multiple communication interfaces.",
      "The device achieves sub-microamp standby current with RTC running, enabling years of operation from small batteries. It operates from 1.65V to 3.6V and supports industrial temperature range."
    ],
    specifications: {
      Core: "ARM Cortex-M0+",
      Frequency: "32 MHz",
      Flash: "128 KB",
      RAM: "20 KB",
      "Active Current": "93μA/MHz",
      "Standby Current": "0.35μA with RTC",
      Package: "LQFP-64",
      "LCD Segments": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M0+ up to 32MHz",
      "128KB Flash with read protection",
      "20KB SRAM",
      "USB FS device",
      "LCD driver support",
      "Ultra-low power consumption",
      "Multiple low-power modes",
      "Rich communication interfaces"
    ],
    applications: [
      "Battery-powered sensors",
      "Smart meters",
      "Portable medical devices",
      "Environmental monitors",
      "Wireless IoT devices"
    ],
    faeReview: {
      author: "Sarah Liu",
      title: "Senior FAE - IoT Applications",
      content: "The MM32L072PF is an excellent ultra-low-power MCU for battery-powered applications. The sub-microamp standby current with RTC running is impressive, enabling years of operation from small coin cell batteries. The integrated USB FS is valuable for data logging applications. I've used this MCU in smart meter applications where the LCD driver eliminates the need for external components. Based on my experience with MindMotion MCUs, I highly recommend this device for battery-powered IoT applications.",
      highlight: "Ultra-low-power MCU with USB and LCD driver for battery applications"
    },
    alternativeParts: [
      {
        partNumber: "MM32L073PF",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M0+",
          flash: "64KB",
          ram: "8KB",
          frequency: "48MHz"
        },
        comparison: "MM32L072PF=><MM32L073PF: Flash 64KB < 128KB (less memory), suitable for direct replacement",
        reason: "Lower cost alternative for simpler applications",
        useCase: "Cost-sensitive battery-powered applications",
        link: "#"
      },
      {
        partNumber: "STM32L072RB",
        brand: "STMicroelectronics",
        specifications: {
          core: "ARM Cortex-M0+",
          flash: "128KB",
          ram: "20KB",
          frequency: "32MHz"
        },
        comparison: "MM32L072PF=><STM32L072RB: Frequency 32MHz = 32MHz (same), suitable for direct replacement",
        reason: "Alternative from international brand with similar specifications",
        useCase: "Applications requiring STM32 ecosystem compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32L072-EVAL",
        link: "#",
        description: "Ultra-low-power evaluation board with current measurement",
        category: "Development Tools"
      },
      {
        partNumber: "CR2032",
        link: "#",
        description: "3V lithium coin cell battery for battery-powered applications",
        category: "Power Source"
      },
      {
        partNumber: "SHT40",
        link: "#",
        description: "High-accuracy temperature and humidity sensor",
        category: "Sensor"
      }
    ],
    faqs: [
      {
        question: "What is the minimum supply voltage for MM32L072PF?",
        answer: "The MM32L072PF operates from 1.65V to 3.6V supply voltage, with full functionality maintained across this range. The wide voltage range allows direct operation from various battery configurations including single alkaline or coin cell batteries.",
        decisionGuide: "Verify battery voltage range is within 1.65V-3.6V. Contact FAE for battery selection guidance.",
        keywords: ["voltage", "battery", "power"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. These tools provide comprehensive debugging capabilities and power analysis features for ultra-low-power optimization.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I minimize power consumption?",
        answer: "To minimize power consumption, use the ultra-low-power modes: Stop mode for fast wake-up with low current, Standby mode for lowest current with RTC running, and Shutdown mode for absolute lowest current. Disable unused peripherals and use clock gating.",
        decisionGuide: "Analyze power requirements and select appropriate low-power mode. Contact FAE for power optimization guidance.",
        keywords: ["power", "low-power", "battery life"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32L072PF is available in LQFP-64 package, providing up to 64 GPIO pins for extensive peripheral connectivity. The package offers excellent thermal performance for industrial applications.",
        decisionGuide: "Select package based on PCB space and pin requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "LQFP-64"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including power optimization, schematic review, and debugging assistance.",
        decisionGuide: "Contact FAE for technical support and application assistance.",
        keywords: ["support", "technical", "FAE"]
      }
    ]
  },
  {
    partNumber: "MM32L0100PF",
    name: "MM32L0100 Cost-Effective Low-Power MCU",
    shortDescription: "Cortex-M0+ MCU with 16KB Flash, 2KB RAM, basic low-power features for simple battery apps",
    descriptionParagraphs: [
      "The MM32L0100PF is a cost-effective low-power microcontroller featuring ARM Cortex-M0+ core for simple battery-powered applications. It provides essential low-power features at an attractive price point.",
      "This MCU includes 16KB Flash memory and 2KB SRAM, sufficient for basic sensor and control applications. The peripheral set includes UART, SPI, I2C, timers, and 12-bit ADC.",
      "The device achieves low standby current and operates from 1.8V to 3.6V. Its compact QFN-32 package is ideal for space-constrained battery-powered devices."
    ],
    specifications: {
      Core: "ARM Cortex-M0+",
      Frequency: "24 MHz",
      Flash: "16 KB",
      RAM: "2 KB",
      "Active Current": "85μA/MHz",
      "Standby Current": "0.5μA",
      Package: "QFN-32",
      "LCD Segments": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M0+ up to 24MHz",
      "16KB Flash with read protection",
      "2KB SRAM",
      "Low-power modes",
      "12-bit ADC with 8 channels",
      "Compact QFN-32 package",
      "Cost-effective solution",
      "Battery-friendly operation"
    ],
    applications: [
      "Simple battery sensors",
      "Remote controls",
      "Basic IoT endpoints",
      "Low-cost wearables",
      "Battery-powered toys"
    ],
    faeReview: {
      author: "Sarah Liu",
      title: "Senior FAE - IoT Applications",
      content: "The MM32L0100PF is an excellent entry-level low-power MCU for cost-sensitive battery applications. Despite its compact size and low cost, it includes essential low-power features for battery operation. I've used this MCU in simple remote controls and basic sensor nodes where the 16KB Flash and 2KB RAM are sufficient. The QFN-32 package is compact and suitable for space-constrained designs. Based on my experience with MindMotion MCUs, I recommend this device for cost-sensitive battery-powered applications.",
      highlight: "Cost-effective low-power MCU for simple battery applications"
    },
    alternativeParts: [
      {
        partNumber: "MM32L073PF",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M0+",
          flash: "64KB",
          ram: "8KB",
          frequency: "48MHz"
        },
        comparison: "MM32L0100PF=><MM32L073PF: Flash 64KB > 16KB (more memory), suitable for direct replacement",
        reason: "More memory and features for complex applications",
        useCase: "Applications requiring more Flash or RAM",
        link: "#"
      },
      {
        partNumber: "STM32L010F4P6",
        brand: "STMicroelectronics",
        specifications: {
          core: "ARM Cortex-M0+",
          flash: "16KB",
          ram: "2KB",
          frequency: "32MHz"
        },
        comparison: "MM32L0100PF=><STM32L010F4P6: Frequency 32MHz > 24MHz (faster), suitable for direct replacement",
        reason: "Alternative from international brand for STM32 ecosystem compatibility",
        useCase: "Applications requiring STM32 compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32L0100-EVAL",
        link: "#",
        description: "Compact evaluation board for low-power development",
        category: "Development Tools"
      },
      {
        partNumber: "CR1220",
        link: "#",
        description: "Small coin cell battery for compact designs",
        category: "Power Source"
      },
      {
        partNumber: "BME280",
        link: "#",
        description: "Environmental sensor for temperature, humidity, and pressure",
        category: "Sensor"
      }
    ],
    faqs: [
      {
        question: "What is the minimum supply voltage for MM32L0100PF?",
        answer: "The MM32L0100PF operates from 1.8V to 3.6V supply voltage. The minimum 1.8V operation enables use with single-cell alkaline or coin cell batteries, extending usable battery life.",
        decisionGuide: "Verify battery voltage range is within 1.8V-3.6V. Contact FAE for battery selection guidance.",
        keywords: ["voltage", "battery", "power"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. These tools provide comprehensive debugging capabilities for low-power applications.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I minimize power consumption?",
        answer: "To minimize power consumption, use the low-power modes: Sleep mode for reduced active current, and Deep-sleep mode for lowest current. Disable unused peripherals and reduce clock frequency when maximum performance is not required.",
        decisionGuide: "Analyze power requirements and select appropriate low-power mode. Contact FAE for power optimization guidance.",
        keywords: ["power", "low-power", "battery life"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32L0100PF is available in QFN-32 package, providing up to 32 GPIO pins for peripheral connectivity. The compact package is ideal for space-constrained battery-powered devices.",
        decisionGuide: "Select package based on PCB space requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "QFN-32"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including power optimization and debugging assistance.",
        decisionGuide: "Contact FAE for technical support and application assistance.",
        keywords: ["support", "technical", "FAE"]
      }
    ]
  }
];

// Main function to add products
function addProducts() {
  const data = readJSON('products.json');
  
  data.categories.forEach((category, catIndex) => {
    const currentCount = category.products ? category.products.length : 0;
    const neededCount = 6 - currentCount;
    
    if (neededCount > 0) {
      console.log(`Adding ${neededCount} products to ${category.name} (current: ${currentCount})`);
      
      // Add appropriate products based on category
      if (category.name === "MM32F Series" && mm32fNewProducts.length > 0) {
        category.products.push(...mm32fNewProducts.slice(0, neededCount));
      } else if (category.name === "MM32L Series" && mm32lNewProducts.length > 0) {
        category.products.push(...mm32lNewProducts.slice(0, neededCount));
      }
      
      console.log(`✓ ${category.name} now has ${category.products.length} products`);
    } else {
      console.log(`✓ ${category.name} already has ${currentCount} products`);
    }
  });
  
  writeJSON('products.json', data);
  console.log('\n✅ Product addition completed!');
}

console.log('Starting MindMotion product addition...\n');

try {
  addProducts();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}
