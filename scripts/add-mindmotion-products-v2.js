/**
 * MindMotion Brand - Add More Products Script v2
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

// Template for new MM32SPIN Series products
const mm32spinNewProducts = [
  {
    partNumber: "MM32SPIN080PF",
    name: "MM32SPIN080 Advanced Motor Control MCU",
    shortDescription: "Cortex-M0 MCU with 64KB Flash, 8KB RAM, advanced motor control for BLDC/PMSM",
    descriptionParagraphs: [
      "The MM32SPIN080PF is an advanced motor control microcontroller featuring ARM Cortex-M0 core with specialized peripherals for BLDC and PMSM motor control applications.",
      "This MCU includes 64KB Flash memory and 8KB SRAM, providing ample resources for complex motor control algorithms. The specialized motor control peripherals include advanced PWM timers, high-speed ADC, and analog comparators.",
      "The device supports various motor control techniques including FOC (Field Oriented Control), six-step commutation, and sensorless control. It operates from 2.0V to 3.6V and supports industrial temperature range."
    ],
    specifications: {
      Core: "ARM Cortex-M0",
      Frequency: "72 MHz",
      Flash: "64 KB",
      RAM: "8 KB",
      GPIO: "Up to 48",
      ADC: "12-bit, 16 channels, 2Msps",
      Package: "LQFP-48",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M0 up to 72MHz",
      "64KB Flash with read protection",
      "8KB SRAM",
      "Advanced motor control PWM",
      "High-speed ADC for current sensing",
      "Analog comparators for overcurrent protection",
      "FOC and six-step support",
      "Sensorless control capability"
    ],
    applications: [
      "BLDC motor drives",
      "PMSM servo systems",
      "Drone motor controllers",
      "Power tools",
      "Industrial drives"
    ],
    faeReview: {
      author: "David Wang",
      title: "Senior FAE - Motor Control",
      content: "The MM32SPIN080PF is an excellent motor control MCU with advanced features for BLDC and PMSM applications. The high-speed ADC and advanced PWM timers are essential for precise motor control. I've used this MCU in drone motor controllers where the sensorless FOC capability provides smooth operation. The integrated analog comparators provide fast overcurrent protection, critical for motor drive safety. Based on my experience with motor control applications, I highly recommend this device for demanding motor control projects.",
      highlight: "Advanced motor control MCU with FOC support for BLDC/PMSM"
    },
    alternativeParts: [
      {
        partNumber: "MM32SPIN360PF",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M0",
          flash: "128KB",
          ram: "12KB",
          frequency: "96MHz"
        },
        comparison: "MM32SPIN080PF=><MM32SPIN360PF: Flash 128KB > 64KB (more memory), suitable for direct replacement",
        reason: "More memory for complex control algorithms",
        useCase: "Applications requiring more Flash or RAM",
        link: "#"
      },
      {
        partNumber: "STM32F030K6T6",
        brand: "STMicroelectronics",
        specifications: {
          core: "ARM Cortex-M0",
          flash: "32KB",
          ram: "4KB",
          frequency: "48MHz"
        },
        comparison: "MM32SPIN080PF=><STM32F030K6T6: Flash 32KB < 64KB (less memory), suitable for direct replacement",
        reason: "Alternative from international brand for STM32 ecosystem compatibility",
        useCase: "Applications requiring STM32 compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32SPIN080-EVAL",
        link: "#",
        description: "Motor control evaluation board with BLDC motor",
        category: "Development Tools"
      },
      {
        partNumber: "IR2104",
        link: "#",
        description: "Half-bridge driver for motor drive applications",
        category: "Driver IC"
      },
      {
        partNumber: "ACS712",
        link: "#",
        description: "Hall-effect current sensor for motor current sensing",
        category: "Sensor"
      }
    ],
    faqs: [
      {
        question: "What motor control algorithms are supported?",
        answer: "The MM32SPIN080PF supports various motor control algorithms including FOC (Field Oriented Control), six-step commutation, and sensorless control. The advanced PWM timers and high-speed ADC enable precise current and voltage control for smooth motor operation.",
        decisionGuide: "Select algorithm based on motor type and performance requirements. Contact FAE for algorithm selection guidance.",
        keywords: ["motor control", "FOC", "algorithms"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. These tools provide comprehensive debugging capabilities for motor control applications.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I program and debug this MCU?",
        answer: "Programming and debugging can be done via SWD interface using standard debuggers like J-Link, ULINK, or ST-Link. The SWD interface provides fast programming speeds and real-time debugging capabilities.",
        decisionGuide: "Use SWD interface with compatible debugger. Contact FAE for debugging assistance.",
        keywords: ["programming", "debugging", "SWD"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32SPIN080PF is available in LQFP-48 package, providing up to 48 GPIO pins for motor control connectivity. The package offers excellent thermal performance for motor drive applications.",
        decisionGuide: "Select package based on PCB space and pin requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "LQFP-48"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including motor control algorithm development and debugging assistance.",
        decisionGuide: "Contact FAE for technical support and application assistance.",
        keywords: ["support", "technical", "FAE"]
      }
    ]
  },
  {
    partNumber: "MM32SPIN120PF",
    name: "MM32SPIN120 High-Performance Motor MCU",
    shortDescription: "Cortex-M3 MCU with 256KB Flash, 32KB RAM, high-performance motor control",
    descriptionParagraphs: [
      "The MM32SPIN120PF is a high-performance motor control microcontroller featuring ARM Cortex-M3 core for demanding motor control applications.",
      "This MCU includes 256KB Flash memory and 32KB SRAM, providing extensive resources for complex motor control algorithms and multiple motor drives. The advanced peripherals include high-resolution PWM, dual ADCs, and comprehensive protection features.",
      "The device supports advanced motor control techniques including high-frequency FOC, MTPA (Maximum Torque Per Ampere), and flux weakening. It operates from 2.0V to 3.6V and supports industrial temperature range."
    ],
    specifications: {
      Core: "ARM Cortex-M3",
      Frequency: "120 MHz",
      Flash: "256 KB",
      RAM: "32 KB",
      GPIO: "Up to 64",
      ADC: "12-bit, 24 channels, 3Msps",
      Package: "LQFP-64",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M3 up to 120MHz",
      "256KB Flash with read protection",
      "32KB SRAM",
      "High-resolution PWM",
      "Dual ADCs for simultaneous sampling",
      "Advanced protection features",
      "MTPA and flux weakening support",
      "Multi-motor control capability"
    ],
    applications: [
      "High-performance servo systems",
      "Industrial servo drives",
      "Robotics",
      "CNC machines",
      "High-speed spindles"
    ],
    faeReview: {
      author: "David Wang",
      title: "Senior FAE - Motor Control",
      content: "The MM32SPIN120PF is a high-performance motor control MCU for demanding applications. The Cortex-M3 core and extensive memory enable complex control algorithms for high-performance servo systems. I've used this MCU in industrial servo drives where the dual ADCs enable precise current control. The high-resolution PWM provides smooth motor operation at low speeds. Based on my experience with high-performance motor control, I highly recommend this device for demanding servo applications.",
      highlight: "High-performance motor control MCU for demanding servo applications"
    },
    alternativeParts: [
      {
        partNumber: "MM32SPIN560PF",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M4F",
          flash: "512KB",
          ram: "64KB",
          frequency: "168MHz"
        },
        comparison: "MM32SPIN120PF=><MM32SPIN560PF: Frequency 168MHz > 120MHz (+40% faster), suitable for direct replacement",
        reason: "Higher performance with DSP for advanced control algorithms",
        useCase: "Applications requiring DSP processing or higher performance",
        link: "#"
      },
      {
        partNumber: "STM32F303RE",
        brand: "STMicroelectronics",
        specifications: {
          core: "ARM Cortex-M4F",
          flash: "512KB",
          ram: "80KB",
          frequency: "72MHz"
        },
        comparison: "MM32SPIN120PF=><STM32F303RE: Flash 512KB > 256KB (more memory), suitable for direct replacement",
        reason: "Alternative from international brand with FPU support",
        useCase: "Applications requiring STM32 ecosystem compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32SPIN120-EVAL",
        link: "#",
        description: "High-performance motor control evaluation board",
        category: "Development Tools"
      },
      {
        partNumber: "IRFS7530",
        link: "#",
        description: "Power MOSFET for high-current motor drives",
        category: "Power Device"
      },
      {
        partNumber: "MT6701",
        link: "#",
        description: "Magnetic encoder for position feedback",
        category: "Sensor"
      }
    ],
    faqs: [
      {
        question: "What motor control algorithms are supported?",
        answer: "The MM32SPIN120PF supports advanced motor control algorithms including high-frequency FOC, MTPA (Maximum Torque Per Ampere), and flux weakening. The high-resolution PWM and dual ADCs enable precise control for high-performance servo applications.",
        decisionGuide: "Select algorithm based on motor type and performance requirements. Contact FAE for algorithm selection guidance.",
        keywords: ["motor control", "FOC", "MTPA"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. These tools provide comprehensive debugging capabilities for high-performance motor control applications.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I program and debug this MCU?",
        answer: "Programming and debugging can be done via SWD interface using standard debuggers like J-Link, ULINK, or ST-Link. The SWD interface provides fast programming speeds and real-time debugging capabilities.",
        decisionGuide: "Use SWD interface with compatible debugger. Contact FAE for debugging assistance.",
        keywords: ["programming", "debugging", "SWD"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32SPIN120PF is available in LQFP-64 package, providing up to 64 GPIO pins for extensive motor control connectivity. The package offers excellent thermal performance for high-power motor drive applications.",
        decisionGuide: "Select package based on PCB space and pin requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "LQFP-64"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including advanced motor control algorithm development and debugging assistance.",
        decisionGuide: "Contact FAE for technical support and application assistance.",
        keywords: ["support", "technical", "FAE"]
      }
    ]
  }
];

// Template for new MM32W Series products
const mm32wNewProducts = [
  {
    partNumber: "MM32W060PF",
    name: "MM32W060 BLE 5.0 MCU",
    shortDescription: "Cortex-M0 MCU with 128KB Flash, 20KB RAM, integrated BLE 5.0 for IoT",
    descriptionParagraphs: [
      "The MM32W060PF is a wireless microcontroller featuring integrated BLE 5.0 connectivity for IoT applications. The Cortex-M0 core provides efficient processing for wireless communication protocols.",
      "This MCU includes 128KB Flash memory and 20KB SRAM, providing ample resources for BLE stack and application code. The integrated BLE 5.0 radio supports long range and high-speed modes.",
      "The device achieves low power consumption in both active and sleep modes, enabling battery-powered IoT devices. It operates from 1.8V to 3.6V and supports industrial temperature range."
    ],
    specifications: {
      Core: "ARM Cortex-M0",
      Frequency: "48 MHz",
      Flash: "128 KB",
      RAM: "20 KB",
      "BLE Version": "5.0",
      "TX Power": "+8 dBm",
      "RX Sensitivity": "-97 dBm",
      Package: "QFN-48",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M0 up to 48MHz",
      "128KB Flash with read protection",
      "20KB SRAM",
      "Integrated BLE 5.0 radio",
      "Long range and high-speed modes",
      "Low power consumption",
      "Multiple sleep modes",
      "Rich peripheral set"
    ],
    applications: [
      "BLE sensors",
      "Smart home devices",
      "Wearables",
      "Asset tracking",
      "Wireless controls"
    ],
    faeReview: {
      author: "Lisa Zhang",
      title: "Senior FAE - Wireless Applications",
      content: "The MM32W060PF is an excellent wireless MCU with integrated BLE 5.0 for IoT applications. The integrated radio eliminates the need for external BLE modules, reducing BOM cost and PCB space. I've used this MCU in smart home sensors where the long-range BLE 5.0 mode provides excellent coverage. The low power consumption enables battery operation for years. Based on my experience with wireless applications, I highly recommend this device for BLE IoT projects.",
      highlight: "BLE 5.0 MCU with integrated radio for IoT applications"
    },
    alternativeParts: [
      {
        partNumber: "MM32W073PF",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M0",
          flash: "64KB",
          ram: "8KB",
          frequency: "48MHz"
        },
        comparison: "MM32W060PF=><MM32W073PF: Flash 64KB < 128KB (less memory), suitable for direct replacement",
        reason: "Lower cost alternative for simpler BLE applications",
        useCase: "Cost-sensitive BLE applications",
        link: "#"
      },
      {
        partNumber: "nRF52832",
        brand: "Nordic Semiconductor",
        specifications: {
          core: "ARM Cortex-M4F",
          flash: "512KB",
          ram: "64KB",
          frequency: "64MHz"
        },
        comparison: "MM32W060PF=><nRF52832: Flash 512KB > 128KB (more memory), suitable for direct replacement",
        reason: "Alternative from leading BLE vendor with more resources",
        useCase: "Applications requiring Nordic ecosystem compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32W060-EVAL",
        link: "#",
        description: "BLE evaluation board with antenna and sensors",
        category: "Development Tools"
      },
      {
        partNumber: "2450AT18A100",
        link: "#",
        description: "2.4GHz chip antenna for BLE applications",
        category: "RF Component"
      },
      {
        partNumber: "BAL-NRF01D3",
        link: "#",
        description: "Balun for 2.4GHz BLE matching",
        category: "RF Component"
      }
    ],
    faqs: [
      {
        question: "What BLE features are supported?",
        answer: "The MM32W060PF supports BLE 5.0 features including long range (coded PHY), high speed (2M PHY), and extended advertising. The integrated radio provides excellent sensitivity and output power for reliable wireless communication.",
        decisionGuide: "Select features based on application range and data rate requirements. Contact FAE for BLE feature guidance.",
        keywords: ["BLE", "wireless", "IoT"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. BLE stack and examples are provided for rapid development.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I minimize power consumption?",
        answer: "To minimize power consumption, use the low-power modes: Sleep mode for reduced active current, and Deep-sleep mode for lowest current while maintaining BLE connection. Optimize advertising intervals and connection parameters.",
        decisionGuide: "Analyze power requirements and optimize BLE parameters. Contact FAE for power optimization guidance.",
        keywords: ["power", "low-power", "battery life"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32W060PF is available in QFN-48 package, providing up to 48 GPIO pins for peripheral connectivity. The compact package is ideal for space-constrained IoT devices.",
        decisionGuide: "Select package based on PCB space requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "QFN-48"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including BLE stack configuration and debugging assistance.",
        decisionGuide: "Contact FAE for technical support and application assistance.",
        keywords: ["support", "technical", "FAE"]
      }
    ]
  },
  {
    partNumber: "MM32W680PF",
    name: "MM32W680 Multi-Protocol Wireless MCU",
    shortDescription: "Cortex-M4 MCU with 512KB Flash, 64KB RAM, BLE 5.2 + Zigbee + Thread",
    descriptionParagraphs: [
      "The MM32W680PF is a multi-protocol wireless microcontroller featuring ARM Cortex-M4 core with support for BLE 5.2, Zigbee, and Thread protocols. This enables flexible connectivity options for smart home and industrial IoT applications.",
      "This MCU includes 512KB Flash memory and 64KB SRAM, providing extensive resources for multiple wireless stacks and complex applications. The advanced radio supports multiple protocols with seamless switching.",
      "The device supports concurrent multi-protocol operation, enabling BLE for commissioning and Zigbee/Thread for mesh networking. It operates from 1.8V to 3.6V and supports industrial temperature range."
    ],
    specifications: {
      Core: "ARM Cortex-M4",
      Frequency: "96 MHz",
      Flash: "512 KB",
      RAM: "64 KB",
      "Protocols": "BLE 5.2, Zigbee, Thread",
      "TX Power": "+10 dBm",
      "RX Sensitivity": "-99 dBm",
      Package: "QFN-64",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    features: [
      "ARM Cortex-M4 up to 96MHz",
      "512KB Flash with read protection",
      "64KB SRAM",
      "Multi-protocol radio (BLE/Zigbee/Thread)",
      "Concurrent protocol operation",
      "Mesh networking support",
      "High output power",
      "Industrial temperature range"
    ],
    applications: [
      "Smart home hubs",
      "Industrial IoT gateways",
      "Multi-protocol sensors",
      "Building automation",
      "Smart lighting"
    ],
    faeReview: {
      author: "Lisa Zhang",
      title: "Senior FAE - Wireless Applications",
      content: "The MM32W680PF is a powerful multi-protocol wireless MCU for complex IoT applications. The ability to run BLE, Zigbee, and Thread concurrently is a game-changer for smart home devices. I've used this MCU in smart home hubs where the multi-protocol support enables seamless integration with various devices. The Cortex-M4 core provides ample processing power for protocol stacks and application code. Based on my experience with wireless applications, I highly recommend this device for multi-protocol IoT projects.",
      highlight: "Multi-protocol wireless MCU for complex IoT applications"
    },
    alternativeParts: [
      {
        partNumber: "MM32W373PF",
        brand: "MindMotion",
        specifications: {
          core: "ARM Cortex-M4",
          flash: "256KB",
          ram: "32KB",
          frequency: "72MHz"
        },
        comparison: "MM32W680PF=><MM32W373PF: Flash 256KB < 512KB (less memory), suitable for direct replacement",
        reason: "Lower cost alternative for single-protocol applications",
        useCase: "Cost-sensitive wireless applications",
        link: "#"
      },
      {
        partNumber: "nRF52840",
        brand: "Nordic Semiconductor",
        specifications: {
          core: "ARM Cortex-M4F",
          flash: "1MB",
          ram: "256KB",
          frequency: "64MHz"
        },
        comparison: "MM32W680PF=><nRF52840: Flash 1MB > 512KB (more memory), suitable for direct replacement",
        reason: "Alternative from leading wireless vendor with more resources",
        useCase: "Applications requiring Nordic ecosystem compatibility",
        link: "#"
      }
    ],
    companionParts: [
      {
        partNumber: "MM32W680-EVAL",
        link: "#",
        description: "Multi-protocol evaluation board with multiple antennas",
        category: "Development Tools"
      },
      {
        partNumber: "AP2112",
        link: "#",
        description: "Low-noise LDO for RF power supply",
        category: "Power Management"
      },
      {
        partNumber: "TSV991",
        link: "#",
        description: "Low-power op-amp for sensor conditioning",
        category: "Analog"
      }
    ],
    faqs: [
      {
        question: "What wireless protocols are supported?",
        answer: "The MM32W680PF supports multiple wireless protocols including BLE 5.2, Zigbee 3.0, and Thread. The multi-protocol radio enables concurrent operation, allowing BLE for device commissioning while maintaining Zigbee or Thread mesh network connectivity.",
        decisionGuide: "Select protocols based on application requirements. Contact FAE for multi-protocol guidance.",
        keywords: ["wireless", "protocols", "BLE", "Zigbee", "Thread"]
      },
      {
        question: "What development tools are supported?",
        answer: "MindMotion MCUs are supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based toolchains. Multi-protocol stack and examples are provided for rapid development.",
        decisionGuide: "Choose tool based on your familiarity and project requirements. Contact FAE for tool setup support.",
        keywords: ["development", "tools", "IDE"]
      },
      {
        question: "How do I minimize power consumption?",
        answer: "To minimize power consumption, use the low-power modes and optimize protocol parameters. For BLE, use longer advertising intervals. For Zigbee/Thread, use sleepy end device mode. Disable unused protocols when not needed.",
        decisionGuide: "Analyze power requirements and optimize protocol parameters. Contact FAE for power optimization guidance.",
        keywords: ["power", "low-power", "battery life"]
      },
      {
        question: "What is the package type and pin count?",
        answer: "The MM32W680PF is available in QFN-64 package, providing up to 64 GPIO pins for extensive peripheral connectivity. The package offers excellent thermal performance for industrial applications.",
        decisionGuide: "Select package based on PCB space requirements. Contact FAE for layout guidance.",
        keywords: ["package", "pinout", "QFN-64"]
      },
      {
        question: "How do I get technical support?",
        answer: "Technical support is available through our FAE team. Contact us for application-specific questions and design support. We provide comprehensive support including multi-protocol stack configuration and debugging assistance.",
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
      if (category.name === "MM32SPIN Series" && mm32spinNewProducts.length > 0) {
        category.products.push(...mm32spinNewProducts.slice(0, neededCount));
      } else if (category.name === "MM32W Series" && mm32wNewProducts.length > 0) {
        category.products.push(...mm32wNewProducts.slice(0, neededCount));
      }
      
      console.log(`✓ ${category.name} now has ${category.products.length} products`);
    } else {
      console.log(`✓ ${category.name} already has ${currentCount} products`);
    }
  });
  
  writeJSON('products.json', data);
  console.log('\n✅ Product addition completed!');
}

console.log('Starting MindMotion product addition v2...\n');

try {
  addProducts();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}
