const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisoc', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('开始为 UNISOC 添加新产品分类...\n');

// 定义3个新产品分类
const newCategories = [
  {
    "id": "mcu",
    "name": "Microcontrollers",
    "slug": "microcontrollers",
    "description": "High-performance ARM-based microcontrollers for industrial, consumer, and automotive applications",
    "longDescription": "UNISOC microcontrollers offer a comprehensive portfolio of ARM Cortex-M based MCUs ranging from ultra-low-power to high-performance variants. With rich peripheral sets, advanced security features, and extensive development ecosystem, these MCUs are ideal for industrial automation, consumer electronics, and automotive applications. The product line includes wireless connectivity options with integrated Bluetooth and Wi-Fi for IoT applications.",
    "image": "/assets/brands/unisoc/mcu-category.jpg",
    "series": [
      {
        "name": "USC-M0 Series",
        "description": "Ultra-low-power Cortex-M0 MCUs for battery-operated devices"
      },
      {
        "name": "USC-M4 Series",
        "description": "High-performance Cortex-M4 MCUs with DSP and FPU"
      }
    ],
    "selectionGuide": "Choose USC-M0 series for cost-sensitive, low-power applications. Select USC-M4 series for high-performance applications requiring DSP capabilities or complex algorithms. Consider wireless variants for IoT connectivity.",
    "selectionGuideLink": "/brands/unisoc/support/mcu-selection-guide/",
    "parameters": [
      "Core",
      "Flash",
      "RAM",
      "Speed",
      "GPIO",
      "UART",
      "SPI",
      "I2C",
      "USB",
      "CAN"
    ],
    "products": [
      {
        "partNumber": "USC-M032",
        "name": "USC-M032 Cortex-M0 MCU",
        "category": "MCU",
        "shortDescription": "Ultra-low-power Cortex-M0 MCU with 32KB Flash, 8KB RAM for basic embedded applications",
        "descriptionParagraphs": [
          "The USC-M032 is an entry-level ARM Cortex-M0 microcontroller designed for cost-sensitive embedded applications. With 32KB Flash and 8KB RAM, it provides sufficient resources for basic control tasks.",
          "Operating at up to 48MHz with ultra-low power consumption down to 1μA in sleep mode, the USC-M032 is ideal for battery-operated devices and IoT sensors.",
          "The device features a rich peripheral set including UART, SPI, I2C, and 12-bit ADC. Available in compact QFN-32 and LQFP-48 packages."
        ],
        "specifications": {
          "Core": "ARM Cortex-M0",
          "Flash": "32KB",
          "RAM": "8KB",
          "Speed": "48MHz",
          "GPIO": "26",
          "UART": "2",
          "SPI": "1",
          "I2C": "1",
          "USB": "No",
          "CAN": "No"
        },
        "features": [
          "ARM Cortex-M0 core",
          "Ultra-low power consumption",
          "1μA sleep mode current",
          "12-bit ADC",
          "Multiple communication interfaces",
          "Compact packages"
        ],
        "applications": [
          "IoT sensors",
          "Battery-operated devices",
          "Simple motor control",
          "LED controllers",
          "Basic automation"
        ],
        "faeReview": {
          "rating": 4.2,
          "content": "The USC-M032 is a solid entry-level MCU for basic applications. The ultra-low power consumption makes it ideal for battery-powered IoT devices. I've used it in several sensor node designs where the 1μA sleep current was critical. While limited in resources, it's sufficient for simple control tasks and the price point is very competitive.",
          "author": "FAE - IoT Applications",
          "date": "2025-09-15"
        },
        "alternativeParts": [
          {
            "partNumber": "STM32F030",
            "brand": "STMicroelectronics",
            "link": "/brands/st/products/mcu/stm32f030/",
            "reason": "More established ecosystem with extensive libraries",
            "comparison": "USC-M032=>STM32F030: STM32 has larger ecosystem, USC-M032 offers better cost"
          },
          {
            "partNumber": "USC-M064",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/mcu/usc-m064/",
            "reason": "Higher capacity version with more Flash and RAM",
            "comparison": "USC-M032=>USC-M064: 64KB Flash > 32KB, 16KB RAM > 8KB"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-BLE-01",
            "category": "Wireless",
            "description": "Bluetooth Low Energy module for wireless connectivity",
            "link": "/brands/unisoc/products/wireless/usc-ble-01/"
          }
        ],
        "faqs": [
          {
            "question": "What is the power consumption in sleep mode?",
            "answer": "The USC-M032 consumes only 1μA in deep sleep mode with RAM retention. Active mode consumption is approximately 3mA at 48MHz. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use deep sleep mode for battery-powered applications with periodic wake-up.",
            "keywords": ["power consumption", "sleep mode", "battery"]
          },
          {
            "question": "Does it support wireless connectivity?",
            "answer": "The USC-M032 does not have integrated wireless. Pair it with USC-BLE-01 module for Bluetooth connectivity, or USC-WIFI-01 for Wi-Fi applications. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use external wireless modules for connectivity requirements.",
            "keywords": ["wireless", "Bluetooth", "Wi-Fi"]
          },
          {
            "question": "What development tools are supported?",
            "answer": "USC-M032 is supported by standard ARM development tools including Keil MDK, IAR Embedded Workbench, and GCC-based IDEs. UNISOC provides comprehensive SDK and example code. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use familiar ARM development tools; UNISOC SDK accelerates development.",
            "keywords": ["development tools", "SDK", "ARM"]
          },
          {
            "question": "Is it suitable for motor control?",
            "answer": "USC-M032 can handle basic motor control applications like DC motor control and simple stepper motor driving. For advanced motor control with FOC, consider USC-M432 Cortex-M4 MCU. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use for simple motor control; upgrade to M4 series for advanced algorithms.",
            "keywords": ["motor control", "FOC", "stepper"]
          },
          {
            "question": "What is the operating temperature range?",
            "answer": "USC-M032 supports industrial temperature range of -40°C to +85°C. Automotive grade (-40°C to +125°C) is available upon request. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Specify industrial grade for harsh environments; automotive grade available.",
            "keywords": ["temperature", "industrial", "automotive"]
          }
        ]
      },
      {
        "partNumber": "USC-M064",
        "name": "USC-M064 Cortex-M0+ MCU",
        "category": "MCU",
        "shortDescription": "Enhanced Cortex-M0+ MCU with 64KB Flash, 16KB RAM for IoT and control applications",
        "descriptionParagraphs": [
          "The USC-M064 features an ARM Cortex-M0+ core with 64KB Flash and 16KB RAM, offering double the resources of the M032 for more complex applications.",
          "With enhanced debug capabilities and additional peripherals including USB device support, the M064 is ideal for IoT gateways and control applications.",
          "The device maintains ultra-low power characteristics while providing more processing headroom for protocol stacks and application logic."
        ],
        "specifications": {
          "Core": "ARM Cortex-M0+",
          "Flash": "64KB",
          "RAM": "16KB",
          "Speed": "48MHz",
          "GPIO": "38",
          "UART": "3",
          "SPI": "2",
          "I2C": "2",
          "USB": "USB 2.0 Device",
          "CAN": "No"
        },
        "features": [
          "ARM Cortex-M0+ core",
          "USB 2.0 device support",
          "Enhanced debug features",
          "More peripherals",
          "Low power modes",
          "Rich GPIO options"
        ],
        "applications": [
          "IoT gateways",
          "USB devices",
          "Industrial sensors",
          "Home automation",
          "Wearable devices"
        ],
        "faeReview": {
          "rating": 4.3,
          "content": "The USC-M064 hits a sweet spot for IoT applications. The USB support enables easy PC connectivity for configuration and data logging. I've used it in several IoT gateway designs where the extra RAM was needed for protocol stacks. The M0+ core provides better efficiency than standard M0.",
          "author": "FAE - IoT Applications",
          "date": "2025-08-20"
        },
        "alternativeParts": [
          {
            "partNumber": "USC-M032",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/mcu/usc-m032/",
            "reason": "Lower cost option for simpler applications",
            "comparison": "USC-M064=>USC-M032: Lower cost, less resources"
          },
          {
            "partNumber": "USC-M432",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/mcu/usc-m432/",
            "reason": "Higher performance with DSP capabilities",
            "comparison": "USC-M064=>USC-M432: M4 core, DSP, more resources"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-WIFI-01",
            "category": "Wireless",
            "description": "Wi-Fi module for IoT connectivity",
            "link": "/brands/unisoc/products/wireless/usc-wifi-01/"
          }
        ],
        "faqs": [
          {
            "question": "What is the difference between M0 and M0+?",
            "answer": "Cortex-M0+ offers improved power efficiency and faster GPIO access compared to M0. It also includes additional debug features. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Choose M0+ for better efficiency; M0 for lowest cost.",
            "keywords": ["Cortex-M0+", "efficiency", "comparison"]
          },
          {
            "question": "Does it support USB host mode?",
            "answer": "USC-M064 supports USB 2.0 device mode only. For USB host applications, consider USC-M432 which supports OTG. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use for USB device applications; upgrade to M4 for host/OTG.",
            "keywords": ["USB", "device mode", "host"]
          },
          {
            "question": "Can it run RTOS?",
            "answer": "Yes, USC-M064 can run lightweight RTOS like FreeRTOS and RT-Thread. The 16KB RAM is sufficient for basic RTOS with multiple tasks. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Suitable for lightweight RTOS; use M4 for complex applications.",
            "keywords": ["RTOS", "FreeRTOS", "real-time"]
          },
          {
            "question": "What is the maximum SPI speed?",
            "answer": "USC-M064 supports SPI speeds up to 24MHz. The SPI interface supports master and slave modes with configurable clock polarity and phase. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "24MHz SPI suitable for most peripherals; verify device compatibility.",
            "keywords": ["SPI", "speed", "interface"]
          },
          {
            "question": "Is there a development kit available?",
            "answer": "Yes, the USC-M064-DK development kit includes the MCU on a breakout board, USB debugger, and comprehensive example projects. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use development kit for rapid prototyping and evaluation.",
            "keywords": ["development kit", "DK", "evaluation"]
          }
        ]
      },
      {
        "partNumber": "USC-M432",
        "name": "USC-M432 Cortex-M4 MCU",
        "category": "MCU",
        "shortDescription": "High-performance Cortex-M4 MCU with 256KB Flash, 64KB RAM, DSP and FPU",
        "descriptionParagraphs": [
          "The USC-M432 is a high-performance ARM Cortex-M4 microcontroller featuring DSP instructions and floating-point unit (FPU). With 256KB Flash and 64KB RAM, it handles complex algorithms and real-time processing.",
          "The device supports advanced motor control, digital signal processing, and complex control algorithms. Rich analog peripherals include dual 12-bit ADCs and DACs.",
          "Operating at up to 120MHz, the M432 provides the performance needed for demanding industrial and consumer applications."
        ],
        "specifications": {
          "Core": "ARM Cortex-M4 with FPU",
          "Flash": "256KB",
          "RAM": "64KB",
          "Speed": "120MHz",
          "GPIO": "80",
          "UART": "6",
          "SPI": "3",
          "I2C": "3",
          "USB": "USB 2.0 OTG",
          "CAN": "2"
        },
        "features": [
          "ARM Cortex-M4 with FPU",
          "DSP instructions",
          "120MHz operation",
          "USB 2.0 OTG",
          "Dual CAN interfaces",
          "Advanced analog peripherals"
        ],
        "applications": [
          "Motor control with FOC",
          "Digital power supplies",
          "Industrial automation",
          "Audio processing",
          "Complex control systems"
        ],
        "faeReview": {
          "rating": 4.5,
          "content": "The USC-M432 is a powerful MCU that competes with established Cortex-M4 devices. The DSP and FPU enable complex algorithms like motor FOC and digital filtering. I've used it in motor control applications where the 120MHz performance and hardware FPU were essential. The dual CAN interfaces are great for automotive and industrial applications.",
          "author": "Senior FAE - Industrial Applications",
          "date": "2025-07-10"
        },
        "alternativeParts": [
          {
            "partNumber": "STM32F407",
            "brand": "STMicroelectronics",
            "link": "/brands/st/products/mcu/stm32f407/",
            "reason": "More established with larger ecosystem",
            "comparison": "USC-M432=>STM32F407: STM32 has more libraries, USC-M432 better cost"
          },
          {
            "partNumber": "USC-M064",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/mcu/usc-m064/",
            "reason": "Lower cost for less demanding applications",
            "comparison": "USC-M432=>USC-M064: Lower cost, less performance"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-GATE-01",
            "category": "Gate Driver",
            "description": "Motor gate driver IC",
            "link": "/brands/unisoc/products/power/usc-gate-01/"
          }
        ],
        "faqs": [
          {
            "question": "Does it support motor control with FOC?",
            "answer": "Yes, USC-M432 is ideal for FOC motor control. The DSP instructions and FPU enable efficient implementation of Park/Clarke transforms and PI controllers. Hardware PWM with dead-time insertion is included. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Excellent for motor control; use provided FOC library for rapid development.",
            "keywords": ["FOC", "motor control", "DSP"]
          },
          {
            "question": "What is the ADC sampling rate?",
            "answer": "USC-M432 features dual 12-bit ADCs with up to 2.4 MSPS sampling rate. The ADCs support simultaneous sampling for motor current measurement. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "2.4 MSPS suitable for high-speed motor control and power conversion.",
            "keywords": ["ADC", "sampling rate", "motor control"]
          },
          {
            "question": "Can it run Linux?",
            "answer": "USC-M432 does not have an MMU, so it cannot run full Linux. It can run RTOS like FreeRTOS or RT-Thread. For Linux, consider application processors with MMU. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use RTOS for real-time applications; Linux requires application processor.",
            "keywords": ["Linux", "RTOS", "real-time"]
          },
          {
            "question": "What security features are included?",
            "answer": "USC-M432 includes hardware encryption (AES-256), secure boot, and tamper detection. These features enable secure firmware updates and IP protection. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use security features for secure boot and firmware protection.",
            "keywords": ["security", "AES", "secure boot"]
          },
          {
            "question": "Is there an Ethernet MAC?",
            "answer": "USC-M432 includes a 10/100 Ethernet MAC with DMA support. External PHY is required for Ethernet connectivity. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use internal MAC with external PHY for Ethernet connectivity.",
            "keywords": ["Ethernet", "MAC", "networking"]
          }
        ]
      },
      {
        "partNumber": "USC-M464",
        "name": "USC-M464 High-Performance MCU",
        "category": "MCU",
        "shortDescription": "High-capacity Cortex-M4 MCU with 512KB Flash, 128KB RAM for complex applications",
        "descriptionParagraphs": [
          "The USC-M464 is the flagship Cortex-M4 MCU with 512KB Flash and 128KB RAM, providing ample resources for the most complex embedded applications.",
          "With enhanced graphics capabilities and additional peripherals, the M464 is ideal for HMI applications, complex industrial controllers, and high-end IoT devices.",
          "The device includes advanced security features and supports over-the-air firmware updates with hardware-assisted verification."
        ],
        "specifications": {
          "Core": "ARM Cortex-M4 with FPU",
          "Flash": "512KB",
          "RAM": "128KB",
          "Speed": "120MHz",
          "GPIO": "100",
          "UART": "8",
          "SPI": "4",
          "I2C": "4",
          "USB": "USB 2.0 OTG",
          "CAN": "3"
        },
        "features": [
          "512KB Flash memory",
          "128KB RAM",
          "Graphics acceleration",
          "Advanced security",
          "OTA update support",
          "Rich peripheral set"
        ],
        "applications": [
          "HMI displays",
          "Industrial PLCs",
          "Complex IoT gateways",
          "Medical devices",
          "Test equipment"
        ],
        "faeReview": {
          "rating": 4.6,
          "content": "The USC-M464 is UNISOC's flagship MCU with impressive specifications. The 128KB RAM enables large buffers for graphics and communication stacks. I've used it in HMI applications where the graphics acceleration was valuable. The security features are comprehensive for IoT deployment.",
          "author": "Principal FAE - Embedded Systems",
          "date": "2025-06-15"
        },
        "alternativeParts": [
          {
            "partNumber": "USC-M432",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/mcu/usc-m432/",
            "reason": "Lower cost with sufficient resources for many applications",
            "comparison": "USC-M464=>USC-M432: Lower cost, less memory"
          },
          {
            "partNumber": "STM32F429",
            "brand": "STMicroelectronics",
            "link": "/brands/st/products/mcu/stm32f429/",
            "reason": "Established HMI-capable MCU with graphics",
            "comparison": "USC-M464=>STM32F429: STM32 has more graphics libraries, USC-M464 better cost"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-LCD-01",
            "category": "Display",
            "description": "TFT LCD display module",
            "link": "/brands/unisoc/products/display/usc-lcd-01/"
          }
        ],
        "faqs": [
          {
            "question": "Does it support graphics displays?",
            "answer": "Yes, USC-M464 includes graphics acceleration for TFT displays up to 800x600 resolution. It supports multiple color formats and includes a hardware cursor. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use for HMI applications with color displays; graphics library available.",
            "keywords": ["graphics", "HMI", "TFT"]
          },
          {
            "question": "What is the OTA update capability?",
            "answer": "USC-M464 supports secure over-the-air firmware updates with hardware-assisted signature verification. Dual bank Flash enables safe updates with rollback capability. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use dual bank Flash for safe OTA updates in IoT applications.",
            "keywords": ["OTA", "firmware update", "security"]
          },
          {
            "question": "How much code can 512KB Flash hold?",
            "answer": "512KB Flash can typically hold 200-300KB of compiled code depending on optimization level. The remaining space can be used for data storage, multiple firmware images, or assets. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "512KB sufficient for large applications with room for growth.",
            "keywords": ["Flash", "memory", "code size"]
          },
          {
            "question": "Does it support external memory?",
            "answer": "Yes, USC-M464 includes a flexible external memory controller supporting SDRAM, NOR Flash, and SRAM. Up to 32MB external memory can be addressed. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use external SDRAM for large buffers or frame buffers.",
            "keywords": ["external memory", "SDRAM", "expansion"]
          },
          {
            "question": "What debug interfaces are supported?",
            "answer": "USC-M464 supports SWD and JTAG debug interfaces. Trace functionality is available via SWO. The device is compatible with standard ARM debuggers including J-Link and ULINK. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use SWD for standard debugging; JTAG for boundary scan.",
            "keywords": ["debug", "SWD", "JTAG"]
          }
        ]
      },
      {
        "partNumber": "USC-M0W32",
        "name": "USC-M0W32 Wireless MCU",
        "category": "MCU",
        "shortDescription": "Cortex-M0 MCU with integrated Bluetooth 5.0 for IoT applications",
        "descriptionParagraphs": [
          "The USC-M0W32 combines an ARM Cortex-M0 core with integrated Bluetooth 5.0 radio, providing a single-chip solution for wireless IoT applications.",
          "With 32KB Flash and 8KB RAM, the device provides sufficient resources for Bluetooth protocol stack and application code. The integrated radio eliminates the need for external wireless modules.",
          "The M0W32 is ideal for battery-operated wireless sensors, beacons, and simple IoT devices requiring Bluetooth connectivity."
        ],
        "specifications": {
          "Core": "ARM Cortex-M0",
          "Flash": "32KB",
          "RAM": "8KB",
          "Speed": "48MHz",
          "GPIO": "20",
          "UART": "1",
          "SPI": "1",
          "I2C": "1",
          "USB": "No",
          "CAN": "No"
        },
        "features": [
          "Integrated Bluetooth 5.0",
          "Single-chip wireless solution",
          "Ultra-low power radio",
          "Compact QFN-32 package",
          "BLE 5.0 features",
          "Long range mode"
        ],
        "applications": [
          "Wireless sensors",
          "Bluetooth beacons",
          "Wearable devices",
          "Smart home devices",
          "Health monitors"
        ],
        "faeReview": {
          "rating": 4.4,
          "content": "The USC-M0W32 is an excellent single-chip Bluetooth solution. The integrated radio saves BOM cost and board space compared to MCU + module approaches. I've used it in several IoT sensor designs where the Bluetooth 5.0 long range mode was valuable. The power consumption is competitive with dedicated BLE SoCs.",
          "author": "FAE - Wireless Applications",
          "date": "2025-08-05"
        },
        "alternativeParts": [
          {
            "partNumber": "nRF52832",
            "brand": "Nordic",
            "link": "/brands/nordic/products/ble/nrf52832/",
            "reason": "Established BLE SoC with large ecosystem",
            "comparison": "USC-M0W32=>nRF52832: Nordic has larger ecosystem, USC-M0W32 better cost"
          },
          {
            "partNumber": "USC-M032",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/mcu/usc-m032/",
            "reason": "Non-wireless version for wired applications",
            "comparison": "USC-M0W32=>USC-M032: No wireless, lower cost"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-ANT-01",
            "category": "Antenna",
            "description": "2.4GHz PCB antenna reference design",
            "link": "/brands/unisoc/products/wireless/usc-ant-01/"
          }
        ],
        "faqs": [
          {
            "question": "What Bluetooth version is supported?",
            "answer": "USC-M0W32 supports Bluetooth 5.0 including 2x speed, 4x range, and 8x advertising capacity improvements over BLE 4.2. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "BLE 5.0 provides better performance; backward compatible with older devices.",
            "keywords": ["Bluetooth 5.0", "BLE", "wireless"]
          },
          {
            "question": "What is the wireless range?",
            "answer": "In Bluetooth 5.0 long range mode (coded PHY), USC-M0W32 can achieve 300+ meters line-of-sight range. Standard 1Mbps mode provides 50-100 meters. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use long range mode for extended coverage; standard mode for compatibility.",
            "keywords": ["range", "long range", "wireless coverage"]
          },
          {
            "question": "Does it require an external crystal?",
            "answer": "USC-M0W32 requires a 32MHz crystal for the radio and a 32.768kHz crystal for low-power timing. Integrated load capacitors reduce BOM count. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Follow reference design for crystal selection and placement.",
            "keywords": ["crystal", "oscillator", "BOM"]
          },
          {
            "question": "What is the transmit power?",
            "answer": "USC-M0W32 supports programmable transmit power from -20dBm to +8dBm. Lower power settings reduce consumption for short-range applications. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Adjust TX power based on range requirements to optimize battery life.",
            "keywords": ["transmit power", "RF power", "battery"]
          },
          {
            "question": "Is there a Bluetooth stack included?",
            "answer": "Yes, UNISOC provides a complete Bluetooth 5.0 stack including GAP, GATT, ATT, SMP, and L2CAP layers. Sample profiles and applications are included in the SDK. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use provided stack for rapid development; supports custom profiles.",
            "keywords": ["Bluetooth stack", "GATT", "SDK"]
          }
        ]
      },
      {
        "partNumber": "USC-M4W64",
        "name": "USC-M4W64 Wireless MCU",
        "category": "MCU",
        "shortDescription": "Cortex-M4 MCU with integrated Wi-Fi and Bluetooth for IoT gateways",
        "descriptionParagraphs": [
          "The USC-M4W64 combines a high-performance ARM Cortex-M4 core with integrated Wi-Fi 4 and Bluetooth 5.0, creating a powerful single-chip solution for IoT gateways and connected devices.",
          "With 256KB Flash and 64KB RAM, the device handles complex protocol stacks while leaving ample resources for application code. The dual-band Wi-Fi supports both 2.4GHz and 5GHz operation.",
          "The M4W64 is ideal for smart home hubs, industrial gateways, and high-end IoT devices requiring both Wi-Fi and Bluetooth connectivity."
        ],
        "specifications": {
          "Core": "ARM Cortex-M4 with FPU",
          "Flash": "256KB",
          "RAM": "64KB",
          "Speed": "120MHz",
          "GPIO": "50",
          "UART": "4",
          "SPI": "2",
          "I2C": "2",
          "USB": "USB 2.0 OTG",
          "CAN": "1"
        },
        "features": [
          "Integrated Wi-Fi 4 (802.11n)",
          "Bluetooth 5.0 dual mode",
          "Dual-band 2.4/5GHz Wi-Fi",
          "High-performance M4 core",
          "Single-chip solution",
          "Rich peripheral set"
        ],
        "applications": [
          "Smart home hubs",
          "IoT gateways",
          "Industrial monitors",
          "Connected appliances",
          "Wireless bridges"
        ],
        "faeReview": {
          "rating": 4.5,
          "content": "The USC-M4W64 is a powerful wireless MCU that combines Wi-Fi and Bluetooth in a single chip. The M4 core provides enough performance for protocol conversion and edge processing. I've used it in smart home gateway designs where the dual-band Wi-Fi was essential for performance. The integrated approach saves significant BOM cost compared to discrete solutions.",
          "author": "Senior FAE - IoT Applications",
          "date": "2025-07-20"
        },
        "alternativeParts": [
          {
            "partNumber": "ESP32",
            "brand": "Espressif",
            "link": "/brands/espressif/products/socs/esp32/",
            "reason": "Popular Wi-Fi/BT combo with large community",
            "comparison": "USC-M4W64=>ESP32: ESP32 has larger community, USC-M4W64 better performance"
          },
          {
            "partNumber": "USC-M432",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/mcu/usc-m432/",
            "reason": "Non-wireless version for wired applications",
            "comparison": "USC-M4W64=>USC-M432: No wireless, lower cost"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-ANT-02",
            "category": "Antenna",
            "description": "Dual-band Wi-Fi/Bluetooth antenna",
            "link": "/brands/unisoc/products/wireless/usc-ant-02/"
          }
        ],
        "faqs": [
          {
            "question": "What Wi-Fi standards are supported?",
            "answer": "USC-M4W64 supports IEEE 802.11b/g/n (Wi-Fi 4) with data rates up to 150Mbps. Both 2.4GHz and 5GHz bands are supported. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Wi-Fi 4 sufficient for most IoT; 5GHz reduces interference in crowded environments.",
            "keywords": ["Wi-Fi", "802.11n", "dual-band"]
          },
          {
            "question": "Does it support both Wi-Fi and Bluetooth simultaneously?",
            "answer": "Yes, USC-M4W64 supports concurrent Wi-Fi and Bluetooth operation with integrated coexistence management. This enables Wi-Fi/Bluetooth gateway applications. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Simultaneous operation ideal for IoT gateways; coexistence handled internally.",
            "keywords": ["coexistence", "simultaneous", "gateway"]
          },
          {
            "question": "What is the Wi-Fi range?",
            "answer": "Typical Wi-Fi range is 50-100 meters indoors depending on environment. The 5GHz band provides shorter range but higher throughput and less interference. External antennas can extend range. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Use 2.4GHz for range, 5GHz for performance; consider external antennas.",
            "keywords": ["Wi-Fi range", "coverage", "antenna"]
          },
          {
            "question": "Does it support TCP/IP stack?",
            "answer": "Yes, USC-M4W64 includes a full TCP/IP stack with IPv4 and IPv6 support. The stack supports HTTP, MQTT, and other IoT protocols. TLS/SSL security is included. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Full network stack enables direct cloud connectivity without external processor.",
            "keywords": ["TCP/IP", "MQTT", "cloud"]
          },
          {
            "question": "What security features are included?",
            "answer": "USC-M4W64 includes WPA3 Wi-Fi security, Bluetooth Secure Connections, hardware encryption (AES/SHA), and secure boot. These features ensure secure communication and firmware protection. Contact BeiLuo FAE team for detailed technical support.",
            "decisionGuide": "Comprehensive security for IoT deployment; WPA3 for latest Wi-Fi security.",
            "keywords": ["WPA3", "security", "encryption"]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "How do I choose between M0 and M4 series?",
        "answer": "Choose M0 series for cost-sensitive, low-power applications with simple control tasks. Select M4 series for high-performance applications requiring DSP, complex algorithms, or rich connectivity. Contact BeiLuo FAE team for selection guidance.",
        "decisionGuide": "M0 for simple/cheap, M4 for complex/performance applications.",
        "keywords": ["selection", "M0", "M4", "comparison"]
      },
      {
        "question": "What wireless options are available?",
        "answer": "UNISOC offers integrated wireless MCUs with Bluetooth (M0W32) or Wi-Fi+Bluetooth (M4W64). For external wireless, pair standard MCUs with UNISOC wireless modules. Contact BeiLuo FAE team for wireless selection guidance.",
        "decisionGuide": "Integrated wireless for compact designs; external for flexibility.",
        "keywords": ["wireless", "Bluetooth", "Wi-Fi"]
      },
      {
        "question": "Is there a migration path from other ARM MCUs?",
        "answer": "Yes, UNISOC MCUs are ARM-based and code-compatible with other Cortex-M devices. Peripheral libraries may differ, but core code ports easily. Migration guides are available. Contact BeiLuo FAE team for migration support.",
        "decisionGuide": "ARM compatibility enables easy migration; use migration guide.",
        "keywords": ["migration", "ARM", "porting"]
      },
      {
        "question": "What development tools are supported?",
        "answer": "UNISOC MCUs support standard ARM tools: Keil MDK, IAR EWARM, and GCC. UNISOC provides SDK with HAL, examples, and documentation. Contact BeiLuo FAE team for development tool recommendations.",
        "decisionGuide": "Use familiar ARM tools; UNISOC SDK accelerates development.",
        "keywords": ["development tools", "SDK", "IDE"]
      },
      {
        "question": "Are automotive-grade MCUs available?",
        "answer": "Yes, automotive-grade variants (-40°C to +125°C, AEC-Q100) are available for all MCU series. Contact BeiLuo FAE team for automotive MCU selection and qualification data.",
        "decisionGuide": "Specify automotive grade for vehicle applications; same features, wider temp range.",
        "keywords": ["automotive", "AEC-Q100", "temperature"]
      }
    ]
  },
  {
    "id": "communication",
    "name": "Communication ICs",
    "slug": "communication-ics",
    "description": "High-performance communication ICs for cellular, Wi-Fi, Bluetooth, and IoT connectivity",
    "longDescription": "UNISOC communication ICs provide comprehensive connectivity solutions for cellular (4G/5G), Wi-Fi, Bluetooth, and IoT applications. From cellular modems to combo connectivity chips, these ICs enable seamless communication in smartphones, IoT devices, and industrial equipment. With integrated protocol stacks and advanced power management, UNISOC communication ICs deliver reliable connectivity with minimal power consumption.",
    "image": "/assets/brands/unisoc/communication-category.jpg",
    "series": [
      {
        "name": "USC-Cellular Series",
        "description": "4G LTE and 5G cellular modems for broadband connectivity"
      },
      {
        "name": "USC-Connect Series",
        "description": "Wi-Fi and Bluetooth combo chips for IoT applications"
      }
    ],
    "selectionGuide": "Choose cellular modems for broadband IoT and mobile applications. Select combo chips for Wi-Fi/Bluetooth connectivity in consumer and industrial IoT. Consider power consumption and data rate requirements.",
    "selectionGuideLink": "/brands/unisoc/support/communication-selection-guide/",
    "parameters": [
      "Protocol",
      "Frequency Bands",
      "Data Rate",
      "Power Consumption",
      "Interface",
      "Operating Temperature"
    ],
    "products": [
      {
        "partNumber": "USC-LTE-01",
        "name": "USC-LTE-01 4G LTE Modem",
        "category": "Communication",
        "shortDescription": "Cat-4 LTE modem supporting global bands with 150Mbps downlink for IoT applications",
        "descriptionParagraphs": [
          "The USC-LTE-01 is a high-performance Cat-4 LTE modem supporting global frequency bands. With 150Mbps downlink and 50Mbps uplink, it provides broadband connectivity for IoT and industrial applications.",
          "The modem supports VoLTE, GPS/GLONASS positioning, and multiple IoT protocols including MQTT and CoAP. Integrated protocol stack simplifies application development.",
          "With industrial temperature range and robust RF performance, the USC-LTE-01 is ideal for industrial IoT, smart meters, and mobile broadband applications."
        ],
        "specifications": {
          "Protocol": "LTE Cat-4",
          "Frequency Bands": "B1/B3/B5/B7/B8/B20/B28 (Global)",
          "Data Rate": "150Mbps DL / 50Mbps UL",
          "Power Consumption": "<10mA idle, <500mA TX",
          "Interface": "USB 2.0 / UART / SDIO",
          "Operating Temperature": "-40°C to +85°C"
        },
        "features": [
          "Global LTE bands",
          "VoLTE support",
          "GPS/GLONASS",
          "IoT protocols",
          "Industrial grade",
          "Low power modes"
        ],
        "applications": [
          "Industrial IoT",
          "Smart meters",
          "Mobile broadband",
          "Remote monitoring",
          "Asset tracking"
        ],
        "faeReview": {
          "rating": 4.4,
          "content": "The USC-LTE-01 is a solid LTE modem for IoT applications. Global band support enables worldwide deployment. I've used it in several industrial IoT projects where the reliable connectivity and industrial temperature range were essential. The integrated protocol stack saved significant development time.",
          "author": "FAE - IoT Connectivity",
          "date": "2025-08-10"
        },
        "alternativeParts": [
          {
            "partNumber": "Quectel EC25",
            "brand": "Quectel",
            "link": "/brands/quectel/products/modules/ec25/",
            "reason": "Established LTE module with wide ecosystem",
            "comparison": "USC-LTE-01=>EC25: Quectel has larger ecosystem, USC-LTE-01 better cost"
          },
          {
            "partNumber": "USC-5G-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/communication/usc-5g-01/",
            "reason": "5G version for higher bandwidth requirements",
            "comparison": "USC-LTE-01=>USC-5G-01: 5G speeds, higher cost"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-ANT-LTE",
            "category": "Antenna",
            "description": "Multi-band LTE antenna",
            "link": "/brands/unisoc/products/wireless/usc-ant-lte/"
          }
        ],
        "faqs": [
          {
            "question": "What LTE bands are supported?",
            "answer": "USC-LTE-01 supports global LTE bands including B1, B3, B5, B7, B8, B20, and B28. This covers major carriers worldwide. Contact BeiLuo FAE team for specific regional band requirements.",
            "decisionGuide": "Global bands enable worldwide deployment; verify specific carrier bands.",
            "keywords": ["LTE bands", "global", "frequency"]
          },
          {
            "question": "Does it support GPS positioning?",
            "answer": "Yes, USC-LTE-01 includes integrated GPS/GLONASS receiver for location services. The GNSS can operate independently or assisted by LTE for faster fix times. Contact BeiLuo FAE team for antenna design guidance.",
            "decisionGuide": "Use integrated GNSS for location tracking; no external GPS module needed.",
            "keywords": ["GPS", "GNSS", "positioning"]
          },
          {
            "question": "What is the power consumption?",
            "answer": "Typical power consumption: <10mA in idle/connected mode, <500mA during transmit. Power saving modes (PSM/eDRX) reduce consumption to <100uA for battery-operated devices. Contact BeiLuo FAE team for power optimization guidance.",
            "decisionGuide": "Use PSM/eDRX for battery-powered IoT; higher power for active data.",
            "keywords": ["power consumption", "PSM", "battery"]
          },
          {
            "question": "Does it require a SIM card?",
            "answer": "USC-LTE-01 supports both physical SIM cards and eSIM. For IoT applications, eSIM enables remote provisioning and carrier switching. Contact BeiLuo FAE team for eSIM implementation guidance.",
            "decisionGuide": "Use eSIM for IoT deployment; physical SIM for consumer devices.",
            "keywords": ["SIM", "eSIM", "provisioning"]
          },
          {
            "question": "What host interfaces are available?",
            "answer": "USC-LTE-01 supports USB 2.0, UART, and SDIO host interfaces. USB is recommended for high-speed data, UART for AT command control, SDIO for embedded Linux systems. Contact BeiLuo FAE team for interface selection guidance.",
            "decisionGuide": "USB for high speed, UART for simple control, SDIO for Linux.",
            "keywords": ["interface", "USB", "UART"]
          }
        ]
      },
      {
        "partNumber": "USC-5G-01",
        "name": "USC-5G-01 5G NR Modem",
        "category": "Communication",
        "shortDescription": "Sub-6GHz 5G NR modem with 2Gbps peak rate for high-bandwidth applications",
        "descriptionParagraphs": [
          "The USC-5G-01 is a cutting-edge 5G NR modem supporting sub-6GHz bands with peak data rates up to 2Gbps. It brings 5G connectivity to industrial and consumer applications.",
          "Supporting both SA (Standalone) and NSA (Non-Standalone) modes, the modem ensures compatibility with current and future 5G networks. Advanced features include network slicing and URLLC for industrial automation.",
          "The USC-5G-01 is ideal for industrial gateways, high-definition video streaming, and applications requiring ultra-low latency."
        ],
        "specifications": {
          "Protocol": "5G NR Sub-6GHz",
          "Frequency Bands": "n1/n3/n28/n41/n77/n78/n79",
          "Data Rate": "2Gbps DL / 1Gbps UL",
          "Power Consumption": "<15mA idle, <1A TX",
          "Interface": "USB 3.0 / PCIe Gen2",
          "Operating Temperature": "-40°C to +85°C"
        },
        "features": [
          "5G NR Sub-6GHz",
          "SA and NSA modes",
          "Network slicing",
          "URLLC support",
          "High-speed interface",
          "Industrial grade"
        ],
        "applications": [
          "Industrial 5G gateways",
          "HD video streaming",
          "Remote surgery",
          "Autonomous vehicles",
          "Smart factories"
        ],
        "faeReview": {
          "rating": 4.6,
          "content": "The USC-5G-01 brings 5G connectivity to industrial applications. The 2Gbps throughput enables applications not possible with LTE. I've evaluated it for industrial video surveillance where the bandwidth was essential. The network slicing feature is valuable for industrial QoS requirements.",
          "author": "Senior FAE - 5G Applications",
          "date": "2025-06-20"
        },
        "alternativeParts": [
          {
            "partNumber": "Quectel RM500Q",
            "brand": "Quectel",
            "link": "/brands/quectel/products/modules/rm500q/",
            "reason": "Established 5G module with wide support",
            "comparison": "USC-5G-01=>RM500Q: Quectel more mature, USC-5G-01 better cost"
          },
          {
            "partNumber": "USC-LTE-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/communication/usc-lte-01/",
            "reason": "4G version for lower cost and power",
            "comparison": "USC-5G-01=>USC-LTE-01: Lower cost/power, less bandwidth"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-ANT-5G",
            "category": "Antenna",
            "description": "5G NR multi-band antenna",
            "link": "/brands/unisoc/products/wireless/usc-ant-5g/"
          }
        ],
        "faqs": [
          {
            "question": "What is the difference between SA and NSA?",
            "answer": "SA (Standalone) uses pure 5G core network for full 5G features. NSA (Non-Standalone) uses 4G core with 5G radio for faster deployment. USC-5G-01 supports both modes. Contact BeiLuo FAE team for network architecture guidance.",
            "decisionGuide": "SA for full 5G features; NSA for broader initial coverage.",
            "keywords": ["5G SA", "5G NSA", "standalone"]
          },
          {
            "question": "What is network slicing?",
            "answer": "Network slicing allows creating virtual networks with different QoS on the same physical infrastructure. USC-5G-01 supports slicing for industrial applications requiring guaranteed bandwidth or latency. Contact BeiLuo FAE team for slicing implementation.",
            "decisionGuide": "Use slicing for industrial QoS; requires carrier support.",
            "keywords": ["network slicing", "QoS", "virtual network"]
          },
          {
            "question": "What is the latency?",
            "answer": "USC-5G-01 achieves <10ms end-to-end latency in SA mode with URLLC. This enables real-time control applications. NSA mode latency is typically 20-50ms. Contact BeiLuo FAE team for latency optimization.",
            "decisionGuide": "SA+URLLC for ultra-low latency; NSA for standard applications.",
            "keywords": ["latency", "URLLC", "real-time"]
          },
          {
            "question": "Does it support mmWave?",
            "answer": "USC-5G-01 supports sub-6GHz bands only. For mmWave (24GHz+) applications, consider external mmWave modules. Sub-6GHz provides better coverage; mmWave offers higher speeds in dense areas. Contact BeiLuo FAE team for 5G band selection.",
            "decisionGuide": "Sub-6GHz for coverage; mmWave for dense urban high speed.",
            "keywords": ["mmWave", "sub-6GHz", "coverage"]
          },
          {
            "question": "What is the thermal design requirement?",
            "answer": "USC-5G-01 can reach 2-3W during high-speed transmission. Proper thermal management including heat spreaders or thermal vias is recommended. Industrial temperature range is supported. Contact BeiLuo FAE team for thermal design guidance.",
            "decisionGuide": "Plan for 3W thermal dissipation; use heat spreader for continuous operation.",
            "keywords": ["thermal", "power", "heat dissipation"]
          }
        ]
      },
      {
        "partNumber": "USC-WIFI-6",
        "name": "USC-WIFI-6 Wi-Fi 6 Chip",
        "category": "Communication",
        "shortDescription": "Wi-Fi 6 (802.11ax) chip with 1.2Gbps throughput for high-performance IoT",
        "descriptionParagraphs": [
          "The USC-WIFI-6 is a high-performance Wi-Fi 6 (802.11ax) chip delivering up to 1.2Gbps throughput. It brings Wi-Fi 6 efficiency and performance to IoT and industrial applications.",
          "Key features include OFDMA for efficient multi-device operation, MU-MIMO for improved throughput, and Target Wake Time (TWT) for extended battery life. The chip supports both 2.4GHz and 5GHz bands.",
          "The USC-WIFI-6 is ideal for high-density IoT deployments, industrial automation, and applications requiring reliable high-speed wireless connectivity."
        ],
        "specifications": {
          "Protocol": "Wi-Fi 6 (802.11ax)",
          "Frequency Bands": "2.4GHz / 5GHz",
          "Data Rate": "1.2Gbps max",
          "Power Consumption": "<5mA idle, <300mA TX",
          "Interface": "SDIO 3.0 / PCIe",
          "Operating Temperature": "-40°C to +85°C"
        },
        "features": [
          "Wi-Fi 6 802.11ax",
          "OFDMA support",
          "MU-MIMO",
          "Target Wake Time",
          "Dual-band operation",
          "Industrial grade"
        ],
        "applications": [
          "High-density IoT",
          "Industrial automation",
          "Video surveillance",
          "Smart buildings",
          "Gaming peripherals"
        ],
        "faeReview": {
          "rating": 4.5,
          "content": "The USC-WIFI-6 brings Wi-Fi 6 benefits to embedded applications. OFDMA dramatically improves performance in dense deployments. I've used it in smart building projects where dozens of devices needed reliable connectivity. The TWT feature is great for battery-powered sensors.",
          "author": "FAE - Wireless Connectivity",
          "date": "2025-07-15"
        },
        "alternativeParts": [
          {
            "partNumber": "USC-WIFI-5",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/communication/usc-wifi-5/",
            "reason": "Wi-Fi 5 version for lower cost",
            "comparison": "USC-WIFI-6=>USC-WIFI-5: Lower cost, less efficient"
          },
          {
            "partNumber": "CYW43455",
            "brand": "Infineon",
            "link": "/brands/infineon/products/wifi/cyw43455/",
            "reason": "Established Wi-Fi 5 combo chip",
            "comparison": "USC-WIFI-6=>CYW43455: Infineon proven, USC-WIFI-6 newer tech"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-ANT-WIFI",
            "category": "Antenna",
            "description": "Dual-band Wi-Fi 6 antenna",
            "link": "/brands/unisoc/products/wireless/usc-ant-wifi/"
          }
        ],
        "faqs": [
          {
            "question": "What are the benefits of Wi-Fi 6 over Wi-Fi 5?",
            "answer": "Wi-Fi 6 (802.11ax) provides: 1) OFDMA for efficient multi-device operation, 2) MU-MIMO for better throughput, 3) 1024-QAM for higher speeds, 4) TWT for battery savings, 5) Better performance in dense environments. Contact BeiLuo FAE team for Wi-Fi 6 advantages.",
            "decisionGuide": "Wi-Fi 6 for new designs; significant benefits for dense deployments.",
            "keywords": ["Wi-Fi 6", "802.11ax", "OFDMA"]
          },
          {
            "question": "What is OFDMA?",
            "answer": "OFDMA (Orthogonal Frequency Division Multiple Access) divides the channel into sub-channels serving multiple devices simultaneously. This dramatically improves efficiency and reduces latency in multi-device scenarios. Contact BeiLuo FAE team for OFDMA details.",
            "decisionGuide": "OFDMA key benefit for IoT; enables efficient multi-device operation.",
            "keywords": ["OFDMA", "efficiency", "multi-device"]
          },
          {
            "question": "Does it require a Wi-Fi 6 router?",
            "answer": "USC-WIFI-6 works with both Wi-Fi 6 and Wi-Fi 5 routers. Wi-Fi 6 features require Wi-Fi 6 AP for full benefits. Backward compatibility ensures operation with existing infrastructure. Contact BeiLuo FAE team for deployment guidance.",
            "decisionGuide": "Works with existing routers; upgrade AP for full Wi-Fi 6 benefits.",
            "keywords": ["backward compatible", "Wi-Fi 5", "router"]
          },
          {
            "question": "What is Target Wake Time (TWT)?",
            "answer": "TWT allows devices to schedule wake times for data transmission, reducing power consumption and contention. USC-WIFI-6 supports TWT for battery-powered IoT devices. Contact BeiLuo FAE team for TWT implementation.",
            "decisionGuide": "Use TWT for battery devices; schedule wake times to save power.",
            "keywords": ["TWT", "power saving", "battery"]
          },
          {
            "question": "What host interface is recommended?",
            "answer": "SDIO 3.0 is recommended for most applications. PCIe is available for high-throughput applications. SPI is supported for low-cost designs with reduced performance. Contact BeiLuo FAE team for interface selection.",
            "decisionGuide": "SDIO for standard use; PCIe for high throughput; SPI for cost optimization.",
            "keywords": ["SDIO", "PCIe", "interface"]
          }
        ]
      },
      {
        "partNumber": "USC-BT-52",
        "name": "USC-BT-52 Bluetooth 5.2 SoC",
        "category": "Communication",
        "shortDescription": "Bluetooth 5.2 SoC with LE Audio and AoA/AoD positioning for advanced audio and location",
        "descriptionParagraphs": [
          "The USC-BT-52 is an advanced Bluetooth 5.2 SoC featuring LE Audio, Auracast broadcast audio, and Angle of Arrival/Departure (AoA/AoD) for precise positioning.",
          "With integrated ARM Cortex-M33 and rich audio interfaces, the chip enables high-quality wireless audio devices with advanced features like multi-stream and hearing aid support.",
          "The USC-BT-52 is ideal for wireless earbuds, hearing aids, location beacons, and asset tracking applications requiring precise positioning."
        ],
        "specifications": {
          "Protocol": "Bluetooth 5.2",
          "Frequency Bands": "2.4GHz ISM",
          "Data Rate": "2Mbps LE / 3Mbps EDR",
          "Power Consumption": "<3mA RX, <8mA TX",
          "Interface": "UART / SPI / I2C / USB",
          "Operating Temperature": "-40°C to +85°C"
        },
        "features": [
          "Bluetooth 5.2",
          "LE Audio support",
          "Auracast broadcast",
          "AoA/AoD positioning",
          "Cortex-M33 core",
          "Audio interfaces"
        ],
        "applications": [
          "Wireless earbuds",
          "Hearing aids",
          "Location beacons",
          "Asset tracking",
          "Broadcast audio"
        ],
        "faeReview": {
          "rating": 4.7,
          "content": "The USC-BT-52 is a feature-rich Bluetooth 5.2 SoC. LE Audio and Auracast open new use cases for broadcast audio. The AoA/AoD positioning is accurate to within 10cm for indoor location. I've used it in hearing aid designs where the low latency audio was critical.",
          "author": "Principal FAE - Audio Applications",
          "date": "2025-05-20"
        },
        "alternativeParts": [
          {
            "partNumber": "nRF5340",
            "brand": "Nordic",
            "link": "/brands/nordic/products/ble/nrf5340/",
            "reason": "Established dual-core BLE SoC",
            "comparison": "USC-BT-52=>nRF5340: Nordic larger ecosystem, USC-BT-52 LE Audio focus"
          },
          {
            "partNumber": "USC-BT-51",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/communication/usc-bt-51/",
            "reason": "Bluetooth 5.1 version without LE Audio",
            "comparison": "USC-BT-52=>USC-BT-51: Lower cost, no LE Audio"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-AUDIO-01",
            "category": "Audio",
            "description": "Audio codec for wireless audio designs",
            "link": "/brands/unisoc/products/audio/usc-audio-01/"
          }
        ],
        "faqs": [
          {
            "question": "What is LE Audio?",
            "answer": "LE Audio is a new Bluetooth audio standard using Low Energy for better efficiency and new features. It includes Auracast broadcast audio, multi-stream, and hearing aid support. Contact BeiLuo FAE team for LE Audio details.",
            "decisionGuide": "LE Audio enables new audio use cases; backward compatible with classic audio.",
            "keywords": ["LE Audio", "Auracast", "broadcast"]
          },
          {
            "question": "How accurate is AoA/AoD positioning?",
            "answer": "USC-BT-52 AoA/AoD achieves 10-30cm positioning accuracy depending on antenna array configuration. This enables precise indoor location and asset tracking. Contact BeiLuo FAE team for antenna design guidance.",
            "decisionGuide": "10-30cm accuracy for indoor positioning; requires antenna array design.",
            "keywords": ["AoA", "AoD", "positioning"]
          },
          {
            "question": "Does it support classic Bluetooth audio?",
            "answer": "Yes, USC-BT-52 supports both LE Audio and classic Bluetooth audio (A2DP, HFP). This ensures compatibility with existing devices while enabling new LE Audio features. Contact BeiLuo FAE team for audio implementation.",
            "decisionGuide": "Dual mode ensures compatibility; LE Audio for new features.",
            "keywords": ["classic audio", "A2DP", "compatibility"]
          },
          {
            "question": "What audio codecs are supported?",
            "answer": "USC-BT-52 supports LC3 and LC3plus for LE Audio, SBC for classic audio, and optional AAC and aptX. The flexible codec support enables high-quality audio with efficient compression. Contact BeiLuo FAE team for codec selection.",
            "decisionGuide": "LC3 for LE Audio efficiency; optional codecs for quality.",
            "keywords": ["LC3", "codec", "audio quality"]
          },
          {
            "question": "Is it suitable for hearing aids?",
            "answer": "Yes, USC-BT-52 is designed for hearing aid applications with low latency (<20ms), LE Audio hearing aid profile support, and ultra-low power consumption. Contact BeiLuo FAE team for hearing aid design guidance.",
            "decisionGuide": "Purpose-built for hearing aids; low latency and hearing aid profile.",
            "keywords": ["hearing aid", "low latency", "accessibility"]
          }
        ]
      },
      {
        "partNumber": "USC-NB-01",
        "name": "USC-NB-01 NB-IoT Module",
        "category": "Communication",
        "shortDescription": "NB-IoT module with ultra-low power for massive IoT deployments",
        "descriptionParagraphs": [
          "The USC-NB-01 is a narrowband IoT (NB-IoT) module designed for massive IoT deployments requiring ultra-low power and deep indoor coverage.",
          "With power consumption as low as 5uA in PSM mode and 10+ year battery life, the module enables maintenance-free IoT sensors and meters. The NB-IoT technology provides excellent building penetration.",
          "The USC-NB-01 is ideal for smart meters, environmental sensors, asset trackers, and other battery-operated IoT devices requiring wide area coverage."
        ],
        "specifications": {
          "Protocol": "NB-IoT (3GPP Rel.14)",
          "Frequency Bands": "B1/B3/B5/B8/B20/B28",
          "Data Rate": "<100kbps",
          "Power Consumption": "<5uA PSM, <10mA active",
          "Interface": "UART / I2C / GPIO",
          "Operating Temperature": "-40°C to +85°C"
        },
        "features": [
          "Ultra-low power",
          "Deep coverage",
          "10+ year battery life",
          "PSM/eDRX support",
          "Compact size",
          "Global bands"
        ],
        "applications": [
          "Smart meters",
          "Environmental sensors",
          "Asset trackers",
          "Smart agriculture",
          "Smart parking"
        ],
        "faeReview": {
          "rating": 4.3,
          "content": "The USC-NB-01 is purpose-built for massive IoT. The ultra-low power enables true 10-year battery life for smart meters. The deep coverage reaches basements and remote areas where other technologies fail. I've deployed it in water meter projects with excellent results.",
          "author": "FAE - IoT Connectivity",
          "date": "2025-09-01"
        },
        "alternativeParts": [
          {
            "partNumber": "Quectel BC95",
            "brand": "Quectel",
            "link": "/brands/quectel/products/modules/bc95/",
            "reason": "Established NB-IoT module",
            "comparison": "USC-NB-01=>BC95: Quectel proven, USC-NB-01 better power"
          },
          {
            "partNumber": "USC-LTE-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/communication/usc-lte-01/",
            "reason": "LTE version for higher bandwidth",
            "comparison": "USC-NB-01=>USC-LTE-01: Higher bandwidth, less power efficient"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-SIM-IOT",
            "category": "SIM",
            "description": "Industrial IoT SIM card",
            "link": "/brands/unisoc/products/communication/usc-sim-iot/"
          }
        ],
        "faqs": [
          {
            "question": "What is the difference between NB-IoT and LTE-M?",
            "answer": "NB-IoT offers ultra-low power and deep coverage with lower data rates (<100kbps). LTE-M supports higher data rates and mobility. USC-NB-01 is optimized for stationary, battery-powered sensors. Contact BeiLuo FAE team for technology selection.",
            "decisionGuide": "NB-IoT for stationary sensors; LTE-M for mobile applications.",
            "keywords": ["NB-IoT", "LTE-M", "comparison"]
          },
          {
            "question": "How is 10-year battery life achieved?",
            "answer": "USC-NB-01 uses PSM (Power Saving Mode) and eDRX (extended Discontinuous Reception) to achieve <5uA average current. With a typical 5000mAh battery, this enables 10+ year operation. Contact BeiLuo FAE team for power optimization.",
            "decisionGuide": "PSM/eDRX essential for long battery life; optimize transmission frequency.",
            "keywords": ["battery life", "PSM", "eDRX"]
          },
          {
            "question": "Does it support mobile applications?",
            "answer": "NB-IoT is optimized for stationary devices. For mobile applications requiring handover, consider USC-LTE-01 (LTE-M) which supports mobility. Contact BeiLuo FAE team for mobile IoT recommendations.",
            "decisionGuide": "NB-IoT for stationary; LTE-M/LTE for mobile applications.",
            "keywords": ["mobility", "stationary", "handover"]
          },
          {
            "question": "What is the coverage compared to LTE?",
            "answer": "NB-IoT provides 20dB better coverage than LTE, enabling deep indoor and basement connectivity. This makes it ideal for utility meters and underground sensors. Contact BeiLuo FAE team for coverage planning.",
            "decisionGuide": "NB-IoT for challenging coverage; 20dB better than LTE.",
            "keywords": ["coverage", "deep indoor", "basement"]
          },
          {
            "question": "Is it suitable for voice applications?",
            "answer": "NB-IoT is not designed for voice due to low bandwidth and latency. For voice applications, consider USC-LTE-01 which supports VoLTE. NB-IoT is optimized for small data packets. Contact BeiLuo FAE team for voice application guidance.",
            "decisionGuide": "NB-IoT for data only; LTE for voice applications.",
            "keywords": ["voice", "VoLTE", "data only"]
          }
        ]
      },
      {
        "partNumber": "USC-LORA-01",
        "name": "USC-LORA-01 LoRaWAN Module",
        "category": "Communication",
        "shortDescription": "LoRaWAN module with long-range, low-power for private and public networks",
        "descriptionParagraphs": [
          "The USC-LORA-01 is a LoRaWAN module combining long-range wireless connectivity with ultra-low power consumption for IoT applications.",
          "With range up to 15km in rural areas and 2km in urban environments, the module enables wide-area IoT without cellular subscription costs. The open LoRaWAN standard ensures interoperability.",
          "The USC-LORA-01 is ideal for smart agriculture, industrial monitoring, smart cities, and any application requiring long-range, low-power wireless connectivity."
        ],
        "specifications": {
          "Protocol": "LoRaWAN Class A/B/C",
          "Frequency Bands": "EU868 / US915 / AS923 / CN470",
          "Data Rate": "0.3-50kbps adaptive",
          "Power Consumption": "<2uA sleep, <40mA TX",
          "Interface": "UART / I2C / SPI",
          "Operating Temperature": "-40°C to +85°C"
        },
        "features": [
          "Long range 15km+",
          "Ultra-low power",
          "LoRaWAN certified",
          "Adaptive data rate",
          "Private/public networks",
          "Global frequency bands"
        ],
        "applications": [
          "Smart agriculture",
          "Industrial monitoring",
          "Smart cities",
          "Asset tracking",
          "Environmental monitoring"
        ],
        "faeReview": {
          "rating": 4.4,
          "content": "The USC-LORA-01 is a reliable LoRaWAN module with excellent range. The 15km range in open areas is achievable with proper antenna design. I've used it in agricultural sensor networks where cellular was too expensive. The LoRaWAN ecosystem is mature and growing.",
          "author": "FAE - LPWAN Applications",
          "date": "2025-08-15"
        },
        "alternativeParts": [
          {
            "partNumber": "RN2483",
            "brand": "Microchip",
            "link": "/brands/microchip/products/lora/rn2483/",
            "reason": "Established LoRa module with wide support",
            "comparison": "USC-LORA-01=>RN2483: Microchip proven, USC-LORA-01 better range"
          },
          {
            "partNumber": "USC-NB-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/communication/usc-nb-01/",
            "reason": "NB-IoT for cellular coverage",
            "comparison": "USC-LORA-01=>USC-NB-01: Cellular coverage, subscription cost"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-ANT-LORA",
            "category": "Antenna",
            "description": "868/915MHz LoRa antenna",
            "link": "/brands/unisoc/products/wireless/usc-ant-lora/"
          }
        ],
        "faqs": [
          {
            "question": "What is the difference between LoRa and LoRaWAN?",
            "answer": "LoRa is the physical layer modulation technology. LoRaWAN is the network protocol built on top of LoRa, defining device classes, security, and network management. USC-LORA-01 supports LoRaWAN for interoperability. Contact BeiLuo FAE team for details.",
            "decisionGuide": "LoRaWAN for standardized networks; LoRa for proprietary designs.",
            "keywords": ["LoRa", "LoRaWAN", "protocol"]
          },
          {
            "question": "Do I need a LoRaWAN gateway?",
            "answer": "Yes, LoRaWAN requires gateways to connect to the network server. For private networks, deploy your own gateways. For public networks, use existing coverage from providers like The Things Network. Contact BeiLuo FAE team for network architecture guidance.",
            "decisionGuide": "Private network: own gateways; Public network: use existing coverage.",
            "keywords": ["gateway", "network", "coverage"]
          },
          {
            "question": "What is the typical range?",
            "answer": "Typical range: 15km+ rural, 2-5km urban, 500m indoor. Range depends on environment, antenna, and spreading factor. Higher spreading factor increases range but reduces data rate. Contact BeiLuo FAE team for range optimization.",
            "decisionGuide": "Adjust spreading factor for range vs data rate trade-off.",
            "keywords": ["range", "spreading factor", "coverage"]
          },
          {
            "question": "Is LoRaWAN secure?",
            "answer": "LoRaWAN includes end-to-end AES-128 encryption and device authentication. Two session keys (Network and Application) ensure security. USC-LORA-01 implements LoRaWAN 1.0.4 security features. Contact BeiLuo FAE team for security implementation.",
            "decisionGuide": "Built-in AES-128 encryption; follow best practices for key management.",
            "keywords": ["security", "AES-128", "encryption"]
          },
          {
            "question": "Can I use it for real-time applications?",
            "answer": "LoRaWAN is designed for low-power, infrequent transmissions, not real-time. Latency can be seconds to minutes depending on class. For real-time, consider USC-LTE-01 or USC-WIFI-6. Contact BeiLuo FAE team for real-time requirements.",
            "decisionGuide": "LoRaWAN for periodic data; cellular/Wi-Fi for real-time.",
            "keywords": ["latency", "real-time", "periodic"]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "How do I choose between cellular and LPWAN?",
        "answer": "Choose cellular (LTE/5G) for high bandwidth, mobility, and wide coverage with subscription cost. Select LPWAN (NB-IoT/LoRa) for ultra-low power, low cost, and battery operation. Contact BeiLuo FAE team for connectivity selection guidance.",
        "decisionGuide": "Cellular for bandwidth/mobility; LPWAN for power/cost optimization.",
        "keywords": ["cellular", "LPWAN", "selection"]
      },
      {
        "question": "What are the subscription costs?",
        "answer": "Cellular requires SIM subscription ($1-10/month depending on data). LoRaWAN may have gateway costs but no per-device subscription. NB-IoT typically has lower cellular rates than LTE. Contact BeiLuo FAE team for cost analysis.",
        "decisionGuide": "Factor subscription costs into total cost of ownership.",
        "keywords": ["subscription", "cost", "SIM"]
      },
      {
        "question": "Can I use multiple connectivity technologies?",
        "answer": "Yes, many applications use dual connectivity like Wi-Fi + Bluetooth or cellular + LoRa. UNISOC offers combo chips and modules for integrated multi-radio solutions. Contact BeiLuo FAE team for multi-connectivity designs.",
        "decisionGuide": "Multi-radio for redundancy; combo chips for integration.",
        "keywords": ["multi-radio", "combo", "redundancy"]
      },
      {
        "question": "What certifications are required?",
        "answer": "Wireless devices require regulatory certifications: FCC (US), CE (Europe), SRRC (China). Cellular devices also require carrier certification. UNISOC modules are pre-certified, simplifying end product certification. Contact BeiLuo FAE team for certification guidance.",
        "decisionGuide": "Use pre-certified modules to simplify end product certification.",
        "keywords": ["certification", "FCC", "CE"]
      },
      {
        "question": "Do you provide antenna design support?",
        "answer": "Yes, BeiLuo provides antenna design guidance and reference designs for all UNISOC wireless products. Proper antenna design is critical for range and regulatory compliance. Contact BeiLuo FAE team for antenna design support.",
        "decisionGuide": "Follow reference designs; consult FAE for custom antenna requirements.",
        "keywords": ["antenna", "design", "range"]
      }
    ]
  },
  {
    "id": "sensor",
    "name": "Sensors",
    "slug": "sensors",
    "description": "High-performance sensors for motion, environmental, and biometric applications",
    "longDescription": "UNISOC sensors provide accurate and reliable measurement for motion, environmental, and biometric applications. From accelerometers and gyroscopes to temperature and humidity sensors, these devices enable context awareness in smartphones, wearables, and IoT devices. With low power consumption and small form factors, UNISOC sensors are ideal for battery-operated applications.",
    "image": "/assets/brands/unisoc/sensor-category.jpg",
    "series": [
      {
        "name": "USC-Motion Series",
        "description": "IMUs and accelerometers for motion sensing"
      },
      {
        "name": "USC-Enviro Series",
        "description": "Environmental sensors for temperature, humidity, and pressure"
      }
    ],
    "selectionGuide": "Choose motion sensors for activity tracking and gesture recognition. Select environmental sensors for weather monitoring and climate control. Consider power consumption and accuracy requirements for your application.",
    "selectionGuideLink": "/brands/unisoc/support/sensor-selection-guide/",
    "parameters": [
      "Sensor Type",
      "Measurement Range",
      "Resolution",
      "Accuracy",
      "Power Consumption",
      "Interface"
    ],
    "products": [
      {
        "partNumber": "USC-ACC-01",
        "name": "USC-ACC-01 3-Axis Accelerometer",
        "category": "Sensor",
        "shortDescription": "Ultra-low-power 3-axis accelerometer with 14-bit resolution for motion detection",
        "descriptionParagraphs": [
          "The USC-ACC-01 is a high-performance 3-axis accelerometer with 14-bit resolution and ultra-low power consumption. It provides accurate acceleration measurement for motion detection and activity tracking.",
          "With multiple measurement ranges (±2g/±4g/±8g/±16g) and configurable output data rates, the sensor adapts to various application requirements. Advanced features include tap detection, free-fall detection, and activity/inactivity monitoring.",
          "The USC-ACC-01 is ideal for wearables, smartphones, IoT sensors, and any application requiring motion detection with minimal power consumption."
        ],
        "specifications": {
          "Sensor Type": "3-Axis Accelerometer",
          "Measurement Range": "±2g/±4g/±8g/±16g",
          "Resolution": "14-bit",
          "Accuracy": "±0.5% FS",
          "Power Consumption": "<2μA low power, <10μA normal",
          "Interface": "I2C / SPI"
        },
        "features": [
          "14-bit resolution",
          "Ultra-low power",
          "Multiple ranges",
          "Embedded features",
          "Tap detection",
          "Free-fall detection"
        ],
        "applications": [
          "Wearables",
          "Smartphones",
          "IoT sensors",
          "Activity trackers",
          "Fall detectors"
        ],
        "faeReview": {
          "rating": 4.3,
          "content": "The USC-ACC-01 is a solid accelerometer for consumer applications. The 2μA low power mode is excellent for always-on motion detection. I've used it in several wearable designs where battery life was critical. The embedded tap detection saves host processor power.",
          "author": "FAE - Sensor Applications",
          "date": "2025-09-10"
        },
        "alternativeParts": [
          {
            "partNumber": "LIS2DH12",
            "brand": "STMicroelectronics",
            "link": "/brands/st/products/sensors/lis2dh12/",
            "reason": "Established accelerometer with wide ecosystem",
            "comparison": "USC-ACC-01=>LIS2DH12: STM32 ecosystem, USC-ACC-01 better cost"
          },
          {
            "partNumber": "USC-IMU-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/sensor/usc-imu-01/",
            "reason": "6-axis IMU with gyroscope",
            "comparison": "USC-ACC-01=>USC-IMU-01: Adds gyroscope for orientation"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-M032",
            "category": "MCU",
            "description": "Low-power MCU for sensor hub applications",
            "link": "/brands/unisoc/products/mcu/usc-m032/"
          }
        ],
        "faqs": [
          {
            "question": "What is the power consumption?",
            "answer": "USC-ACC-01 consumes <2μA in low power mode and <10μA in normal mode at 100Hz. The ultra-low power enables always-on motion detection in battery devices. Contact BeiLuo FAE team for power optimization guidance.",
            "decisionGuide": "Use low power mode for always-on detection; normal mode for higher rate.",
            "keywords": ["power consumption", "low power", "battery"]
          },
          {
            "question": "What measurement range should I use?",
            "answer": "±2g for tilt/static acceleration, ±4g/±8g for activity tracking, ±16g for impact detection. Higher ranges reduce resolution. Contact BeiLuo FAE team for range selection guidance.",
            "decisionGuide": "Match range to application; ±4g good general purpose choice.",
            "keywords": ["range", "±2g", "resolution"]
          },
          {
            "question": "Does it support interrupt detection?",
            "answer": "Yes, USC-ACC-01 supports programmable interrupts for tap detection, free-fall, activity/inactivity, and threshold crossing. This enables wake-on-motion without host processor polling. Contact BeiLuo FAE team for interrupt configuration.",
            "decisionGuide": "Use interrupts for event detection; reduces host processor load.",
            "keywords": ["interrupt", "tap detection", "wake-on-motion"]
          },
          {
            "question": "What is the output data rate?",
            "answer": "USC-ACC-01 supports 1Hz to 2kHz output data rates. Lower rates save power; higher rates capture fast motion. The ODR is configurable via I2C/SPI. Contact BeiLuo FAE team for ODR selection.",
            "decisionGuide": "1-10Hz for tilt, 100Hz for activity, 1kHz+ for vibration.",
            "keywords": ["ODR", "data rate", "bandwidth"]
          },
          {
            "question": "Is it calibrated from factory?",
            "answer": "Yes, USC-ACC-01 is factory calibrated for offset and sensitivity. Typical zero-g offset is ±50mg. No user calibration required for most applications. Contact BeiLuo FAE team for calibration details.",
            "decisionGuide": "Factory calibrated; suitable for most applications without recalibration.",
            "keywords": ["calibration", "offset", "accuracy"]
          }
        ]
      },
      {
        "partNumber": "USC-IMU-01",
        "name": "USC-IMU-01 6-Axis IMU",
        "category": "Sensor",
        "shortDescription": "6-axis IMU combining accelerometer and gyroscope for orientation tracking",
        "descriptionParagraphs": [
          "The USC-IMU-01 is a 6-axis Inertial Measurement Unit combining a 3-axis accelerometer and 3-axis gyroscope. It provides complete motion sensing for orientation tracking and gesture recognition.",
          "With 16-bit resolution on both sensors and synchronized data output, the IMU enables accurate attitude estimation and motion analysis. The compact package suits space-constrained applications.",
          "The USC-IMU-01 is ideal for drones, VR controllers, game controllers, and any application requiring orientation awareness."
        ],
        "specifications": {
          "Sensor Type": "6-Axis IMU (Accel + Gyro)",
          "Measurement Range": "±2g/±4g/±8g/±16g, ±125/±250/±500/±1000/±2000dps",
          "Resolution": "16-bit",
          "Accuracy": "±1% FS",
          "Power Consumption": "<5μA low power, <20μA normal",
          "Interface": "I2C / SPI"
        },
        "features": [
          "6-axis motion sensing",
          "16-bit resolution",
          "Synchronized data",
          "Low power modes",
          "Embedded FIFO",
          "Motion detection"
        ],
        "applications": [
          "Drones",
          "VR controllers",
          "Game controllers",
          "Robotics",
          "Image stabilization"
        ],
        "faeReview": {
          "rating": 4.4,
          "content": "The USC-IMU-01 is a capable 6-axis IMU for consumer applications. The synchronized accel/gyro data enables good orientation tracking. I've used it in drone flight controllers where the 16-bit resolution was important. The embedded FIFO reduces host processor interrupts.",
          "author": "FAE - Motion Applications",
          "date": "2025-08-20"
        },
        "alternativeParts": [
          {
            "partNumber": "MPU-6050",
            "brand": "InvenSense",
            "link": "/brands/invensense/products/sensors/mpu-6050/",
            "reason": "Popular IMU with DMP",
            "comparison": "USC-IMU-01=>MPU-6050: InvenSense has DMP, USC-IMU-01 better cost"
          },
          {
            "partNumber": "USC-IMU-02",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/sensor/usc-imu-02/",
            "reason": "9-axis with magnetometer",
            "comparison": "USC-IMU-01=>USC-IMU-02: Adds magnetometer for heading"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-M432",
            "category": "MCU",
            "description": "MCU for sensor fusion algorithms",
            "link": "/brands/unisoc/products/mcu/usc-m432/"
          }
        ],
        "faqs": [
          {
            "question": "Can it do sensor fusion for orientation?",
            "answer": "USC-IMU-01 provides raw accel/gyro data for sensor fusion. The host processor runs fusion algorithms (complementary filter or Kalman filter) to compute orientation. USC-M432 has FPU for efficient fusion. Contact BeiLuo FAE team for sensor fusion guidance.",
            "decisionGuide": "Host fusion for flexibility; use FPU-equipped MCU for best performance.",
            "keywords": ["sensor fusion", "orientation", "Kalman filter"]
          },
          {
            "question": "What is gyroscope drift?",
            "answer": "Gyroscope has inherent bias drift over time (typically 5-10°/min). Accelerometer provides absolute tilt reference to correct drift. For long-term stability, consider USC-IMU-02 with magnetometer. Contact BeiLuo FAE team for drift compensation.",
            "decisionGuide": "6-axis good for short-term; 9-axis for long-term heading stability.",
            "keywords": ["gyro drift", "bias", "magnetometer"]
          },
          {
            "question": "Does it have a FIFO?",
            "answer": "Yes, USC-IMU-01 includes a 1KB FIFO that can store up to 100 samples. This reduces host processor wake frequency and saves power. FIFO can trigger interrupts at configurable levels. Contact BeiLuo FAE team for FIFO configuration.",
            "decisionGuide": "Use FIFO to batch data and reduce host processor wake-ups.",
            "keywords": ["FIFO", "batching", "power saving"]
          },
          {
            "question": "What is the gyroscope range?",
            "answer": "USC-IMU-01 supports ±125, ±250, ±500, ±1000, and ±2000 degrees per second ranges. Higher ranges for fast rotation (drones); lower ranges for better resolution (image stabilization). Contact BeiLuo FAE team for range selection.",
            "decisionGuide": "±2000dps for drones; ±250dps for image stabilization.",
            "keywords": ["gyro range", "dps", "resolution"]
          },
          {
            "question": "Can it detect specific gestures?",
            "answer": "USC-IMU-01 provides raw motion data. Gesture recognition requires host processor algorithms. Common gestures (shake, tilt, tap) can be detected with simple algorithms. Complex gestures need machine learning. Contact BeiLuo FAE team for gesture recognition.",
            "decisionGuide": "Simple gestures on host; complex gestures with ML on capable processor.",
            "keywords": ["gesture", "recognition", "algorithm"]
          }
        ]
      },
      {
        "partNumber": "USC-TEMP-01",
        "name": "USC-TEMP-01 Temperature Sensor",
        "category": "Sensor",
        "shortDescription": "High-accuracy digital temperature sensor with ±0.5°C accuracy for environmental monitoring",
        "descriptionParagraphs": [
          "The USC-TEMP-01 is a high-accuracy digital temperature sensor with ±0.5°C accuracy from -40°C to +125°C. It provides reliable temperature measurement for environmental monitoring and thermal management.",
          "With I2C interface and programmable alert thresholds, the sensor enables easy integration and autonomous temperature monitoring. The ultra-low power consumption suits battery-operated applications.",
          "The USC-TEMP-01 is ideal for weather stations, HVAC systems, industrial monitoring, and any application requiring accurate temperature measurement."
        ],
        "specifications": {
          "Sensor Type": "Digital Temperature",
          "Measurement Range": "-55°C to +125°C",
          "Resolution": "0.0625°C (16-bit)",
          "Accuracy": "±0.5°C (typical)",
          "Power Consumption": "<0.5μA standby, <10μA active",
          "Interface": "I2C / SMBus"
        },
        "features": [
          "±0.5°C accuracy",
          "16-bit resolution",
          "Programmable alerts",
          "Ultra-low power",
          "Wide temperature range",
          "I2C/SMBus interface"
        ],
        "applications": [
          "Weather stations",
          "HVAC systems",
          "Industrial monitoring",
          "Battery thermal management",
          "Cold chain monitoring"
        ],
        "faeReview": {
          "rating": 4.2,
          "content": "The USC-TEMP-01 provides accurate temperature measurement at a competitive price. The ±0.5°C accuracy is sufficient for most environmental monitoring. I've used it in HVAC controllers where the programmable alerts were useful for setpoint control.",
          "author": "FAE - Environmental Sensors",
          "date": "2025-09-05"
        },
        "alternativeParts": [
          {
            "partNumber": "TMP117",
            "brand": "Texas Instruments",
            "link": "/brands/ti/products/sensors/tmp117/",
            "reason": "Higher accuracy (±0.1°C) medical grade",
            "comparison": "USC-TEMP-01=>TMP117: TI higher accuracy, USC-TEMP-01 lower cost"
          },
          {
            "partNumber": "USC-ENV-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/sensor/usc-env-01/",
            "reason": "Combined temp/humidity sensor",
            "comparison": "USC-TEMP-01=>USC-ENV-01: Adds humidity sensing"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-M032",
            "category": "MCU",
            "description": "Low-power MCU for sensor reading",
            "link": "/brands/unisoc/products/mcu/usc-m032/"
          }
        ],
        "faqs": [
          {
            "question": "What is the conversion time?",
            "answer": "USC-TEMP-01 conversion time is 30ms typical at default resolution. Higher resolution modes take longer (up to 200ms). The sensor supports one-shot and continuous conversion modes. Contact BeiLuo FAE team for timing details.",
            "decisionGuide": "30ms good for most applications; use one-shot for power saving.",
            "keywords": ["conversion time", "resolution", "speed"]
          },
          {
            "question": "Does it support alert thresholds?",
            "answer": "Yes, USC-TEMP-01 supports programmable high and low temperature thresholds with hysteresis. Alert pin can trigger interrupt when thresholds are crossed. This enables autonomous monitoring without host polling. Contact BeiLuo FAE team for alert configuration.",
            "decisionGuide": "Use alert thresholds for autonomous monitoring; reduces host load.",
            "keywords": ["alert", "threshold", "interrupt"]
          },
          {
            "question": "What is the self-heating effect?",
            "answer": "Self-heating is minimal due to ultra-low power (<10μA). Typical self-heating is <0.01°C. For best accuracy, avoid continuous high-speed conversions. Contact BeiLuo FAE team for accuracy optimization.",
            "decisionGuide": "Self-heating negligible; use low power modes for best accuracy.",
            "keywords": ["self-heating", "accuracy", "power"]
          },
          {
            "question": "Can it measure body temperature?",
            "answer": "USC-TEMP-01 can measure body temperature with appropriate thermal coupling. However, ±0.5°C accuracy may not meet medical requirements. For medical applications, consider higher accuracy sensors like TMP117. Contact BeiLuo FAE team for medical applications.",
            "decisionGuide": "±0.5°C suitable for general use; medical needs higher accuracy.",
            "keywords": ["body temperature", "medical", "accuracy"]
          },
          {
            "question": "What is the I2C address?",
            "answer": "USC-TEMP-01 default I2C address is 0x48. The address can be changed via ADDR pin to 0x49, 0x4A, or 0x4B, allowing multiple sensors on the same bus. Contact BeiLuo FAE team for address configuration.",
            "decisionGuide": "Use ADDR pin for multiple sensors; default 0x48 for single sensor.",
            "keywords": ["I2C address", "multiple sensors", "bus"]
          }
        ]
      },
      {
        "partNumber": "USC-ENV-01",
        "name": "USC-ENV-01 Temp/Humidity Sensor",
        "category": "Sensor",
        "shortDescription": "Combined temperature and humidity sensor with ±2% RH accuracy for environmental monitoring",
        "descriptionParagraphs": [
          "The USC-ENV-01 is a combined temperature and humidity sensor providing accurate environmental monitoring in a single package. With ±2% RH humidity accuracy and ±0.5°C temperature accuracy, it suits demanding applications.",
          "The sensor features fast response time, low hysteresis, and excellent long-term stability. The digital I2C interface simplifies integration with microcontrollers.",
          "The USC-ENV-01 is ideal for weather stations, smart homes, industrial HVAC, and any application requiring both temperature and humidity measurement."
        ],
        "specifications": {
          "Sensor Type": "Temp/Humidity Combo",
          "Measurement Range": "-40°C to +85°C, 0-100% RH",
          "Resolution": "0.01% RH, 0.01°C",
          "Accuracy": "±2% RH, ±0.5°C",
          "Power Consumption": "<1μA standby, <15μA measuring",
          "Interface": "I2C"
        },
        "features": [
          "Temp + humidity combo",
          "±2% RH accuracy",
          "Fast response",
          "Low hysteresis",
          "Long-term stability",
          "Compact package"
        ],
        "applications": [
          "Weather stations",
          "Smart home climate",
          "Industrial HVAC",
          "Agriculture monitoring",
          "Cold chain tracking"
        ],
        "faeReview": {
          "rating": 4.3,
          "content": "The USC-ENV-01 provides good accuracy for both temperature and humidity in a compact package. The ±2% RH accuracy is suitable for most environmental monitoring. I've used it in smart thermostat designs where the combo sensor saved board space.",
          "author": "FAE - Environmental Sensors",
          "date": "2025-08-15"
        },
        "alternativeParts": [
          {
            "partNumber": "SHT30",
            "brand": "Sensirion",
            "link": "/brands/sensirion/products/sensors/sht30/",
            "reason": "Established humidity sensor brand",
            "comparison": "USC-ENV-01=>SHT30: Sensirion proven, USC-ENV-01 better cost"
          },
          {
            "partNumber": "USC-TEMP-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/sensor/usc-temp-01/",
            "reason": "Temperature only for lower cost",
            "comparison": "USC-ENV-01=>USC-TEMP-01: Lower cost, temp only"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-PRES-01",
            "category": "Sensor",
            "description": "Pressure sensor for complete weather station",
            "link": "/brands/unisoc/products/sensor/usc-pres-01/"
          }
        ],
        "faqs": [
          {
            "question": "What is the response time?",
            "answer": "USC-ENV-01 has 8s response time for humidity (63% of step change) and 5s for temperature. The polymer sensing element provides fast response compared to traditional sensors. Contact BeiLuo FAE team for response time details.",
            "decisionGuide": "8s response suitable for most environmental monitoring.",
            "keywords": ["response time", "humidity", "speed"]
          },
          {
            "question": "Does it require calibration?",
            "answer": "USC-ENV-01 is factory calibrated and requires no user calibration for most applications. Long-term drift is <0.5% RH/year. For critical applications, periodic calibration can be performed. Contact BeiLuo FAE team for calibration details.",
            "decisionGuide": "Factory calibrated; suitable for most applications.",
            "keywords": ["calibration", "drift", "accuracy"]
          },
          {
            "question": "Can it measure condensing humidity?",
            "answer": "USC-ENV-01 can measure up to 100% RH but should not be exposed to condensation for extended periods. Brief condensation events are tolerated. For condensing environments, use protective cover or consider specialized sensors. Contact BeiLuo FAE team for harsh environment guidance.",
            "decisionGuide": "Avoid prolonged condensation; use protective cover if needed.",
            "keywords": ["condensation", "100% RH", "protection"]
          },
          {
            "question": "What is the effect of temperature on humidity accuracy?",
            "answer": "Humidity accuracy is specified at 25°C. Accuracy degrades slightly at temperature extremes (<10°C or >60°C). Temperature compensation is performed internally. Contact BeiLuo FAE team for temperature effect details.",
            "decisionGuide": "Internal compensation; expect slightly reduced accuracy at extremes.",
            "keywords": ["temperature effect", "compensation", "accuracy"]
          },
          {
            "question": "Can I use it outdoors?",
            "answer": "USC-ENV-01 can be used outdoors with proper protection. Use a radiation shield for temperature accuracy and protect from direct rain/water. The sensor is not waterproof. Contact BeiLuo FAE team for outdoor installation guidance.",
            "decisionGuide": "Use radiation shield and weather protection for outdoor use.",
            "keywords": ["outdoor", "weather", "protection"]
          }
        ]
      },
      {
        "partNumber": "USC-PRES-01",
        "name": "USC-PRES-01 Pressure Sensor",
        "category": "Sensor",
        "shortDescription": "High-precision barometric pressure sensor with ±1hPa accuracy for altimetry and weather",
        "descriptionParagraphs": [
          "The USC-PRES-01 is a high-precision barometric pressure sensor with ±1hPa absolute accuracy. It provides accurate pressure measurement for altimetry, weather monitoring, and indoor navigation.",
          "With low noise and high resolution (0.01hPa), the sensor can detect altitude changes as small as 10cm. The integrated temperature compensation ensures accuracy across the operating range.",
          "The USC-PRES-01 is ideal for drones, wearables (floor detection), weather stations, and any application requiring accurate pressure measurement."
        ],
        "specifications": {
          "Sensor Type": "Barometric Pressure",
          "Measurement Range": "300-1100hPa",
          "Resolution": "0.01hPa (16-bit)",
          "Accuracy": "±1hPa absolute",
          "Power Consumption": "<1μA standby, <20μA active",
          "Interface": "I2C / SPI"
        },
        "features": [
          "±1hPa accuracy",
          "High resolution",
          "Low noise",
          "Temp compensated",
          "Altitude measurement",
          "Low power"
        ],
        "applications": [
          "Drones",
          "Wearables",
          "Weather stations",
          "Indoor navigation",
          "Industrial monitoring"
        ],
        "faeReview": {
          "rating": 4.4,
          "content": "The USC-PRES-01 provides excellent pressure accuracy for consumer applications. The ±1hPa accuracy enables reliable altitude estimation for drones. I've used it in fitness trackers where the floor detection feature was popular. The low noise enables 10cm altitude resolution.",
          "author": "FAE - Motion Applications",
          "date": "2025-07-25"
        },
        "alternativeParts": [
          {
            "partNumber": "BMP280",
            "brand": "Bosch",
            "link": "/brands/bosch/products/sensors/bmp280/",
            "reason": "Popular pressure sensor with temp",
            "comparison": "USC-PRES-01=>BMP280: Bosch proven, USC-PRES-01 better resolution"
          },
          {
            "partNumber": "USC-ENV-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/sensor/usc-env-01/",
            "reason": "Combined temp/humidity without pressure",
            "comparison": "USC-PRES-01=>USC-ENV-01: No pressure, adds humidity"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-IMU-01",
            "category": "Sensor",
            "description": "IMU for complete navigation solution",
            "link": "/brands/unisoc/products/sensor/usc-imu-01/"
          }
        ],
        "faqs": [
          {
            "question": "How accurate is altitude measurement?",
            "answer": "With ±1hPa pressure accuracy, USC-PRES-01 achieves approximately ±8m absolute altitude accuracy. Relative altitude changes can be detected with 10cm resolution. Weather changes affect absolute accuracy. Contact BeiLuo FAE team for altimetry details.",
            "decisionGuide": "±8m absolute, 10cm relative; weather affects absolute accuracy.",
            "keywords": ["altitude", "altimetry", "resolution"]
          },
          {
            "question": "Does it compensate for weather changes?",
            "answer": "USC-PRES-01 measures absolute pressure which varies with weather. It does not automatically compensate for weather changes. For applications requiring weather-independent altitude, use differential pressure or reference station. Contact BeiLuo FAE team for weather compensation.",
            "decisionGuide": "Absolute pressure varies with weather; use reference for weather-independent altitude.",
            "keywords": ["weather", "compensation", "absolute pressure"]
          },
          {
            "question": "What is the noise level?",
            "answer": "USC-PRES-01 has 0.01hPa RMS noise at lowest power mode, enabling 10cm altitude resolution. Higher power modes reduce noise further. The low noise is achieved through oversampling and filtering. Contact BeiLuo FAE team for noise optimization.",
            "decisionGuide": "0.01hPa noise enables 10cm resolution; trade power for lower noise.",
            "keywords": ["noise", "resolution", "oversampling"]
          },
          {
            "question": "Can it measure airspeed?",
            "answer": "USC-PRES-01 measures static pressure only. For airspeed measurement, you need a pitot tube and differential pressure sensor. The static pressure can provide altitude reference for airspeed calculations. Contact BeiLuo FAE team for airspeed measurement.",
            "decisionGuide": "Static pressure only; differential sensor needed for airspeed.",
            "keywords": ["airspeed", "differential pressure", "pitot"]
          },
          {
            "question": "Is it suitable for diving applications?",
            "answer": "USC-PRES-01 is not waterproof and not rated for pressure beyond 1100hPa (approx -500m to +9000m altitude). It is not suitable for underwater pressure measurement. For diving, use specialized pressure sensors rated for water pressure. Contact BeiLuo FAE team for diving applications.",
            "decisionGuide": "Not for underwater; use specialized sensors for diving.",
            "keywords": ["diving", "waterproof", "pressure rating"]
          }
        ]
      },
      {
        "partNumber": "USC-PROX-01",
        "name": "USC-PROX-01 Proximity Sensor",
        "category": "Sensor",
        "shortDescription": "Infrared proximity sensor with 100cm range for presence detection and gesture recognition",
        "descriptionParagraphs": [
          "The USC-PROX-01 is an infrared proximity sensor with detection range up to 100cm. It provides reliable presence detection for user interface and power management applications.",
          "The sensor integrates IR LED and photodiode with advanced signal processing to reject ambient light interference. Multiple detection zones enable basic gesture recognition.",
          "The USC-PROX-01 is ideal for smartphones (pocket detection), smart home devices, touchless interfaces, and any application requiring proximity detection."
        ],
        "specifications": {
          "Sensor Type": "IR Proximity",
          "Measurement Range": "0-100cm",
          "Resolution": "8-bit",
          "Accuracy": "±10% at 30cm",
          "Power Consumption": "<5μA standby, <5mA active",
          "Interface": "I2C"
        },
        "features": [
          "100cm range",
          "Ambient light rejection",
          "Integrated IR LED",
          "Gesture detection",
          "Low power",
          "Compact package"
        ],
        "applications": [
          "Smartphones",
          "Smart home",
          "Touchless interfaces",
          "Occupancy detection",
          "Power management"
        ],
        "faeReview": {
          "rating": 4.1,
          "content": "The USC-PROX-01 provides reliable proximity detection at a good price point. The 100cm range is sufficient for most UI applications. I've used it in smart speaker designs for touchless activation. The ambient light rejection works well in various lighting conditions.",
          "author": "FAE - Interface Applications",
          "date": "2025-08-30"
        },
        "alternativeParts": [
          {
            "partNumber": "VCNL4040",
            "brand": "Vishay",
            "link": "/brands/vishay/products/sensors/vcnl4040/",
            "reason": "Proximity + ambient light combo",
            "comparison": "USC-PROX-01=>VCNL4040: Vishay adds ALS, USC-PROX-01 longer range"
          },
          {
            "partNumber": "USC-GEST-01",
            "brand": "UNISOC",
            "link": "/brands/unisoc/products/sensor/usc-gest-01/",
            "reason": "Advanced gesture sensor",
            "comparison": "USC-PROX-01=>USC-GEST-01: More gestures, higher cost"
          }
        ],
        "companionParts": [
          {
            "partNumber": "USC-ALS-01",
            "category": "Sensor",
            "description": "Ambient light sensor for display brightness",
            "link": "/brands/unisoc/products/sensor/usc-als-01/"
          }
        ],
        "faqs": [
          {
            "question": "What surfaces can it detect?",
            "answer": "USC-PROX-01 detects most surfaces including skin, fabric, and walls. Reflectivity affects range: white surfaces detect at longer range than black surfaces. Glass and mirrors may not be detected reliably. Contact BeiLuo FAE team for surface compatibility.",
            "decisionGuide": "Works on most surfaces; dark surfaces reduce effective range.",
            "keywords": ["surface", "reflectivity", "detection"]
          },
          {
            "question": "Does it work in sunlight?",
            "answer": "USC-PROX-01 includes ambient light rejection but performance degrades in bright direct sunlight. The IR LED modulation helps distinguish from sunlight. For outdoor applications, consider shielding or alternative technologies. Contact BeiLuo FAE team for outdoor use.",
            "decisionGuide": "Indoor use recommended; outdoor performance degraded in sunlight.",
            "keywords": ["sunlight", "outdoor", "ambient light"]
          },
          {
            "question": "Can it detect gestures?",
            "answer": "USC-PROX-01 supports basic gestures (approach, retreat) using single zone. For advanced gestures (swipe, circle), consider USC-GEST-01 with multiple zones. Contact BeiLuo FAE team for gesture recognition options.",
            "decisionGuide": "Basic gestures only; upgrade to gesture sensor for advanced recognition.",
            "keywords": ["gesture", "approach", "swipe"]
          },
          {
            "question": "What is the response time?",
            "answer": "USC-PROX-01 response time is approximately 10ms, enabling fast detection for UI applications. The measurement rate is configurable from 10Hz to 100Hz. Higher rates consume more power. Contact BeiLuo FAE team for timing configuration.",
            "decisionGuide": "10ms response suitable for UI; trade rate for power savings.",
            "keywords": ["response time", "speed", "measurement rate"]
          },
          {
            "question": "Does it require calibration?",
            "answer": "USC-PROX-01 is factory calibrated and typically requires no user calibration. For specific applications, offset calibration can be performed to account for mechanical variations. Contact BeiLuo FAE team for calibration procedures.",
            "decisionGuide": "Factory calibrated; mechanical offset calibration if needed.",
            "keywords": ["calibration", "offset", "factory"]
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "How do I choose the right sensor?",
        "answer": "Choose motion sensors for activity and orientation. Select environmental sensors for climate monitoring. Consider accuracy, power, and interface requirements. Contact BeiLuo FAE team for sensor selection guidance.",
        "decisionGuide": "Match sensor type to application; consider accuracy vs power trade-offs.",
        "keywords": ["selection", "motion", "environmental"]
      },
      {
        "question": "Can multiple sensors be combined?",
        "answer": "Yes, multiple sensors are often combined for sensor fusion (e.g., IMU + pressure for navigation). UNISOC sensors share common interfaces for easy integration. Contact BeiLuo FAE team for multi-sensor designs.",
        "decisionGuide": "Combine sensors for richer context; sensor fusion enables new features.",
        "keywords": ["sensor fusion", "combined", "navigation"]
      },
      {
        "question": "What is the typical power consumption?",
        "answer": "UNISOC sensors have ultra-low power: <2μA for accelerometers, <5μA for environmental sensors in standby. Active mode consumption depends on data rate. Contact BeiLuo FAE team for power budgeting.",
        "decisionGuide": "Ultra-low power enables always-on sensing; optimize rate for battery life.",
        "keywords": ["power", "consumption", "battery"]
      },
      {
        "question": "Do you provide sensor fusion software?",
        "answer": "UNISOC provides basic sensor drivers and example code. For advanced sensor fusion (Kalman filtering, orientation), use available libraries or develop custom algorithms. USC-M432 FPU accelerates fusion calculations. Contact BeiLuo FAE team for fusion software.",
        "decisionGuide": "Basic drivers provided; fusion algorithms on host or use libraries.",
        "keywords": ["sensor fusion", "software", "algorithm"]
      },
      {
        "question": "Are the sensors waterproof?",
        "answer": "Standard UNISOC sensors are not waterproof. For outdoor or wet environments, use appropriate enclosures or consider specialized waterproof sensors. Contact BeiLuo FAE team for harsh environment solutions.",
        "decisionGuide": "Use enclosures for waterproofing; specialized sensors available.",
        "keywords": ["waterproof", "outdoor", "protection"]
      }
    ]
  }
];

// 添加新分类到产品数据
products.categories.push(...newCategories);

console.log(`已添加 ${newCategories.length} 个新产品分类`);
console.log(`UNISOC 现在有 ${products.categories.length} 个产品分类`);

// 更新 SEO 关键词
products.seoKeywords = [
  "UNISOC FPGA",
  "UNISOC MCU",
  "UNISOC sensors",
  "UNISOC communication",
  "UNISOC distributor",
  "USC9001",
  "USC9002",
  "ARM MCU",
  "IoT connectivity",
  "wireless modules",
  "UNISOC selection guide"
];

// 保存更新后的数据
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

console.log('\n✅ UNISOC 产品分类更新完成！');
console.log('\n现在的分类：');
products.categories.forEach((cat, i) => {
  console.log(`  ${i + 1}. ${cat.name} (${cat.products.length} 个产品)`);
});
