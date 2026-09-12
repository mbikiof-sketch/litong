#!/usr/bin/env node

/**
 * 为Hangshun每个产品分类添加产品至6个
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hangshun');
const productsFile = path.join(dataDir, 'products.json');

// 读取产品数据
const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// General Purpose MCU 的4个新产品
function generateGeneralPurposeProducts() {
  return [
    {
      partNumber: "HS32F103RBT6",
      name: "HS32F103RBT6",
      shortDescription: "ARM Cortex-M3 MCU, 128KB Flash, 20KB SRAM, 72MHz, LQFP64 with extended GPIO and rich peripherals.",
      descriptionParagraphs: [
        "The HS32F103RBT6 is a high-performance 32-bit microcontroller featuring ARM Cortex-M3 core at 72MHz.",
        "With 128KB Flash memory and 20KB SRAM, it offers double the Flash capacity of the C8T6 variant.",
        "The LQFP64 package provides 51 GPIO pins, making it ideal for complex applications requiring many I/O lines."
      ],
      specifications: {
        "Core": "ARM Cortex-M3",
        "Frequency": "72 MHz",
        "Flash": "128 KB",
        "SRAM": "20 KB",
        "GPIO": "51",
        "Package": "LQFP64"
      },
      features: [
        "72MHz ARM Cortex-M3 core with hardware divide",
        "128KB Flash memory for larger applications",
        "20KB SRAM for data processing",
        "USB 2.0 full-speed device/host/OTG",
        "CAN 2.0B interface for industrial networks",
        "3x 12-bit ADC with 16 channels",
        "9 communication interfaces (USART, SPI, I2C)",
        "LQFP64 package with 51 GPIO pins"
      ],
      applications: [
        "Industrial automation",
        "Building control systems",
        "Medical equipment",
        "Test and measurement",
        "Multi-channel data acquisition"
      ],
      faeReview: {
        "author": "Michael Chen",
        "title": "Senior FAE - Embedded Systems",
        "content": "The HS32F103RBT6 is our go-to recommendation for customers needing more GPIO and Flash than the C8T6 offers. The 128KB Flash is sufficient for complex applications with RTOS and communication stacks. I've used this in building automation systems where multiple sensor interfaces and control outputs are needed. The LQFP64 package is still manageable for hand soldering during prototyping. The additional USART and SPI interfaces are valuable for multi-device communication. Consider this part when your design outgrows the 48-pin package but doesn't need the higher performance of Cortex-M4.",
        "highlight": "Extended Flash and GPIO for complex embedded applications"
      },
      alternativeParts: [
        {
          "partNumber": "STM32F103RBT6",
          "brand": "STMicroelectronics",
          "specifications": {
            "Core": "ARM Cortex-M3",
            "Frequency": "72 MHz",
            "Flash": "128 KB",
            "SRAM": "20 KB",
            "Package": "LQFP64"
          },
          "comparison": "HS32F103RBT6 => STM32F103RBT6 => Pin-to-pin compatible, software compatible",
          "reason": "Direct replacement with cost advantage",
          "useCase": "Use as cost-effective alternative to STM32F103RBT6",
          "link": "/stm32/products/general-purpose-mcu/stm32f103rbt6.html"
        },
        {
          "partNumber": "HS32F103C8T6",
          "brand": "Hangshun",
          "specifications": {
            "Core": "ARM Cortex-M3",
            "Frequency": "72 MHz",
            "Flash": "64 KB",
            "SRAM": "20 KB",
            "Package": "LQFP48"
          },
          "comparison": "HS32F103RBT6 => HS32F103C8T6 => 128KB vs 64KB Flash, 51 vs 37 GPIO",
          "reason": "Lower cost option for simpler applications",
          "useCase": "Use C8T6 when fewer GPIO and less Flash are sufficient",
          "link": "/hangshun/products/general-purpose-mcu/hs32f103c8t6.html"
        }
      ],
      companionParts: [
        {
          "partNumber": "8MHz Crystal",
          "description": "External crystal for HSE clock source",
          "category": "Passive Components"
        },
        {
          "partNumber": "AMS1117-3.3",
          "description": "3.3V LDO voltage regulator",
          "category": "Power Management"
        },
        {
          "partNumber": "HS32F103RBT6 Dev Board",
          "description": "Development board with rich peripherals",
          "category": "Development Tools"
        }
      ],
      faqs: [
        {
          "question": "What is the difference between HS32F103RBT6 and C8T6?",
          "answer": "The main differences are: Flash memory - RBT6 has 128KB vs C8T6's 64KB; GPIO count - RBT6 provides 51 pins vs C8T6's 37 pins; Package - RBT6 uses LQFP64 vs C8T6's LQFP48. Both share the same Cortex-M3 core at 72MHz, 20KB SRAM, and peripheral set. The RBT6 is ideal for applications requiring more program space or additional I/O lines. Software is fully compatible between both variants. Price difference is typically 15-20% higher for RBT6.",
          "decisionGuide": "Choose RBT6 when you need more Flash or GPIO; C8T6 is sufficient for simpler applications.",
          "keywords": ["HS32F103 comparison", "RBT6 vs C8T6", "MCU selection"]
        },
        {
          "question": "How many communication interfaces does HS32F103RBT6 have?",
          "answer": "The HS32F103RBT6 provides 9 communication interfaces: 3x USART (universal synchronous/asynchronous receiver/transmitter) supporting RS-232, RS-485, LIN, and IrDA; 2x SPI (serial peripheral interface) supporting master/slave modes up to 18Mbps; 2x I2C (inter-integrated circuit) with standard and fast mode (400kHz); 1x CAN 2.0B (controller area network) for industrial networks; 1x USB 2.0 full-speed. This rich set of interfaces makes it suitable for applications requiring multiple communication protocols such as industrial gateways, protocol converters, and multi-device control systems.",
          "decisionGuide": "Sufficient interfaces for most multi-protocol applications; contact FAE for specific interface requirements.",
          "keywords": ["communication interfaces", "USART SPI I2C CAN", "MCU peripherals"]
        },
        {
          "question": "What is the maximum ADC sampling rate?",
          "answer": "The HS32F103RBT6 features three 12-bit ADCs with maximum sampling rate of 1 Msps (million samples per second) per ADC. With triple interleaved mode, effective sampling rate can reach 3 Msps for high-speed acquisition. Each ADC has 16 external channels. Conversion time is 1μs at maximum ADC clock. The ADCs support single, continuous, scan, and discontinuous conversion modes. DMA can transfer ADC results without CPU intervention for high-speed streaming applications. For best performance, use external VREF and minimize source impedance.",
          "decisionGuide": "1 Msps per ADC sufficient for most industrial and consumer applications; use DMA for high-speed continuous acquisition.",
          "keywords": ["ADC sampling rate", "12-bit ADC", "analog conversion"]
        },
        {
          "question": "Can HS32F103RBT6 be used for motor control?",
          "answer": "While the HS32F103RBT6 can be used for basic motor control, it lacks the dedicated motor control features of specialized MCUs. It has: 4x 16-bit timers with PWM output suitable for simple DC or BLDC motor control; Advanced timers with dead-time insertion for half-bridge drives; No integrated gate drivers (external drivers required); No hardware FOC (field-oriented control) acceleration. For simple motor applications with external drivers, it works well. For complex multi-motor systems or high-performance servo control, consider the dedicated Motor Control MCU series (HS32Mxxx) which offer integrated drivers and hardware acceleration.",
          "decisionGuide": "Use for simple motor control with external drivers; choose Motor Control MCU series for complex applications.",
          "keywords": ["motor control", "PWM", "BLDC control"]
        },
        {
          "question": "What is the operating temperature range?",
          "answer": "The HS32F103RBT6 is available in two temperature grades: Commercial grade (-C suffix): -40°C to +85°C ambient temperature; Industrial grade (-I suffix): -40°C to +105°C ambient temperature. The industrial grade is recommended for harsh environments including outdoor equipment, industrial machinery, and automotive applications. Both grades maintain full electrical specifications across the temperature range. The internal temperature sensor can be used for monitoring but is not calibrated for precise measurement. For high-temperature applications, consider thermal management and proper PCB layout for heat dissipation.",
          "decisionGuide": "Choose industrial grade (-I) for harsh environments; commercial grade is sufficient for indoor consumer applications.",
          "keywords": ["temperature range", "industrial grade", "operating conditions"]
        }
      ]
    },
    {
      partNumber: "HS32F405RGT6",
      name: "HS32F405RGT6",
      shortDescription: "ARM Cortex-M4 MCU with FPU, 1MB Flash, 192KB SRAM, 168MHz, LQFP64 for high-performance applications.",
      descriptionParagraphs: [
        "The HS32F405RGT6 is a high-performance 32-bit microcontroller based on ARM Cortex-M4 core with FPU operating at 168MHz.",
        "Featuring 1MB Flash memory and 192KB SRAM, it provides ample resources for complex applications including DSP algorithms.",
        "The integrated single-precision FPU and DSP instructions make it ideal for signal processing and control applications."
      ],
      specifications: {
        "Core": "ARM Cortex-M4F",
        "Frequency": "168 MHz",
        "Flash": "1 MB",
        "SRAM": "192 KB",
        "GPIO": "51",
        "Package": "LQFP64"
      },
      features: [
        "168MHz ARM Cortex-M4F with single-precision FPU",
        "1MB Flash memory for large applications",
        "192KB SRAM with 64KB core-coupled memory",
        "DSP instructions for signal processing",
        "USB OTG full-speed and high-speed",
        "10/100 Ethernet MAC with DMA",
        "Camera interface (DCMI) for image acquisition",
        "Cryptographic acceleration for security"
      ],
      applications: [
        "Digital signal processing",
        "Industrial control systems",
        "Audio processing",
        "Image processing",
        "IoT gateways"
      ],
      faeReview: {
        "author": "Sarah Liu",
        "title": "Senior FAE - High Performance Systems",
        "content": "The HS32F405RGT6 is Hangshun's flagship general-purpose MCU for high-performance applications. The 168MHz Cortex-M4 with FPU delivers exceptional processing power for DSP and control algorithms. I've successfully deployed this in audio processing systems, industrial servo controllers, and IoT edge gateways. The 1MB Flash accommodates large firmware with RTOS, communication stacks, and application code. The Ethernet MAC enables network connectivity without external controllers. The cryptographic acceleration is valuable for secure IoT applications. Power consumption is higher than M3 variants, so consider thermal management in compact enclosures. For cost-sensitive applications, the HS32F103 series offers better value.",
        "highlight": "High-performance Cortex-M4 with FPU and rich connectivity"
      },
      alternativeParts: [
        {
          "partNumber": "STM32F407VGT6",
          "brand": "STMicroelectronics",
          "specifications": {
            "Core": "ARM Cortex-M4F",
            "Frequency": "168 MHz",
            "Flash": "1 MB",
            "SRAM": "192 KB",
            "Package": "LQFP100"
          },
          "comparison": "HS32F405RGT6 => STM32F407VGT6 => Similar performance, different packages",
          "reason": "Cost-effective alternative with similar features",
          "useCase": "Use as alternative to STM32F407 in new designs",
          "link": "/stm32/products/general-purpose-mcu/stm32f407vgt6.html"
        },
        {
          "partNumber": "HS32F103RBT6",
          "brand": "Hangshun",
          "specifications": {
            "Core": "ARM Cortex-M3",
            "Frequency": "72 MHz",
            "Flash": "128 KB",
            "SRAM": "20 KB",
            "Package": "LQFP64"
          },
          "comparison": "HS32F405RGT6 => HS32F103RBT6 => M4 vs M3, 1MB vs 128KB, FPU vs no FPU",
          "reason": "Lower cost option when high performance not needed",
          "useCase": "Use F103 series for cost-sensitive applications without DSP needs",
          "link": "/hangshun/products/general-purpose-mcu/hs32f103rbt6.html"
        }
      ],
      companionParts: [
        {
          "partNumber": "25MHz Crystal",
          "description": "External crystal for HSE clock source",
          "category": "Passive Components"
        },
        {
          "partNumber": "DP83848",
          "description": "Ethernet PHY for 10/100 Ethernet",
          "category": "Interface ICs"
        },
        {
          "partNumber": "HS32F405 Dev Kit",
          "description": "Development kit with Ethernet and USB",
          "category": "Development Tools"
        }
      ],
      faqs: [
        {
          "question": "What are the DSP capabilities of HS32F405RGT6?",
          "answer": "The HS32F405RGT6 features extensive DSP capabilities through the Cortex-M4 core: Single-cycle 32x32 multiply-accumulate (MAC) operations; SIMD (Single Instruction Multiple Data) instructions for parallel processing of 8/16-bit data; Hardware divide and square root acceleration; Saturation arithmetic for overflow handling; Single-precision FPU for floating-point operations. These features enable efficient implementation of: FIR/IIR digital filters; FFT for spectral analysis; PID controllers with floating-point precision; Complex mathematical algorithms. Performance benchmarks show 2-4x improvement over Cortex-M3 for DSP workloads. The DSP instructions are accessible through CMSIS-DSP library or inline assembly.",
          "decisionGuide": "Ideal for applications requiring DSP, floating-point math, or complex algorithms.",
          "keywords": ["DSP capabilities", "Cortex-M4F", "FPU", "signal processing"]
        },
        {
          "question": "How does the Ethernet MAC work?",
          "answer": "The HS32F405RGT6 includes a 10/100 Mbps Ethernet MAC with the following features: MII and RMII interfaces to external PHY; Dedicated DMA for packet transfer; Hardware checksum offload (IP, TCP, UDP); IEEE 1588 precision time protocol support; Wake-on-LAN capability. To use Ethernet: Connect external PHY (e.g., DP83848, LAN8720) via MII or RMII; Configure PHY through MDIO interface; Initialize MAC with desired settings; Use lwIP or similar TCP/IP stack. The MAC handles frame transmission/reception while the CPU manages protocol processing. Throughput of 90+ Mbps is achievable with optimized drivers. The Ethernet MAC is suitable for industrial Ethernet, IoT gateways, and networked embedded systems.",
          "decisionGuide": "Requires external PHY; suitable for industrial Ethernet and IoT gateway applications.",
          "keywords": ["Ethernet MAC", "10/100 Ethernet", "network connectivity"]
        },
        {
          "question": "What is the power consumption at 168MHz?",
          "answer": "Typical power consumption of HS32F405RGT6 at 168MHz: Active mode (running from Flash): ~60mA at 3.3V; Sleep mode (CPU stopped, peripherals running): ~15mA; Stop mode (clocks stopped, RAM retained): ~150μA; Standby mode (lowest power): ~5μA. Power consumption scales with frequency: ~35mA at 84MHz, ~20mA at 42MHz. The FPU increases power by ~10% when active. For power-sensitive applications: Reduce operating frequency; Use sleep modes between tasks; Disable unused peripherals; Enable clock gating. The 192KB SRAM includes 64KB core-coupled memory (CCM) that can be powered independently. Consider thermal management for continuous high-speed operation.",
          "decisionGuide": "Higher power than M3 variants; use frequency scaling and sleep modes for battery applications.",
          "keywords": ["power consumption", "168MHz", "battery operation"]
        },
        {
          "question": "Does HS32F405RGT6 support hardware encryption?",
          "answer": "Yes, the HS32F405RGT6 includes cryptographic acceleration hardware: AES-128/192/256 encryption/decryption; DES/TDES encryption; SHA-1 and SHA-256 hashing; True random number generator (TRNG). These accelerators perform cryptographic operations 10-100x faster than software implementations while reducing CPU load. Use cases include: Secure boot with signature verification; Encrypted firmware updates; Secure communication protocols (TLS/SSL); Data encryption for storage. The cryptographic hardware is accessible through standard libraries or direct register access. For applications requiring security, the HS32F405 offers significant advantages over MCUs without hardware acceleration.",
          "decisionGuide": "Hardware crypto acceleration suitable for secure IoT and industrial applications.",
          "keywords": ["hardware encryption", "AES", "cryptographic acceleration", "security"]
        },
        {
          "question": "What debug features are available?",
          "answer": "The HS32F405RGT6 supports comprehensive debug capabilities: SWD (Serial Wire Debug) interface - 2-pin debugging (SWDIO, SWCLK); JTAG interface - 5-pin debugging for advanced features; Serial wire viewer (SWV) - printf-style debugging via SWO pin; Embedded trace macrocell (ETM) - instruction trace for code coverage; 6 hardware breakpoints and 4 watchpoints; Real-time variable monitoring without stopping CPU; Flash patch and breakpoint (FPB) for code patching. Debug tools supported: HS-Link, ST-Link/V2, J-Link, ULINK. The trace capabilities are valuable for optimizing performance and debugging complex timing issues. For production, debug interfaces can be disabled for security.",
          "decisionGuide": "Comprehensive debug features suitable for complex application development.",
          "keywords": ["debug features", "SWD", "JTAG", "trace"]
        }
      ]
    },
    {
      partNumber: "HS32F030C8T6",
      name: "HS32F030C8T6",
      shortDescription: "ARM Cortex-M0 MCU, 64KB Flash, 8KB SRAM, 48MHz, LQFP48 for cost-sensitive applications.",
      descriptionParagraphs: [
        "The HS32F030C8T6 is an entry-level 32-bit microcontroller based on ARM Cortex-M0 core operating at 48MHz.",
        "Featuring 64KB Flash memory and 8KB SRAM, it provides sufficient resources for simple embedded applications.",
        "The cost-optimized design makes it ideal for price-sensitive consumer and industrial applications."
      ],
      specifications: {
        "Core": "ARM Cortex-M0",
        "Frequency": "48 MHz",
        "Flash": "64 KB",
        "SRAM": "8 KB",
        "GPIO": "39",
        "Package": "LQFP48"
      },
      features: [
        "48MHz ARM Cortex-M0 core",
        "64KB Flash memory",
        "8KB SRAM for data storage",
        "2x USART, 2x SPI, 2x I2C",
        "12-bit ADC with 10 channels",
        "3x 16-bit timers with PWM",
        "Wide voltage range 2.4V to 3.6V",
        "Low power consumption"
      ],
      applications: [
        "Consumer electronics",
        "Home appliances",
        "Sensor nodes",
        "Simple motor control",
        "LED lighting control"
      ],
      faeReview: {
        "author": "David Wang",
        "title": "FAE - Cost-Optimized Solutions",
        "content": "The HS32F030C8T6 is our recommendation for cost-sensitive applications that don't need high performance. The Cortex-M0 core at 48MHz is sufficient for simple control tasks and basic communication. I've used this in consumer products like LED controllers, simple home appliances, and sensor nodes where every penny counts. The peripheral set is basic but adequate for many applications. The 8KB SRAM is the limiting factor - you can't run large buffers or complex algorithms. For applications requiring USB or CAN, look at the HS32F103 series. The price point is very competitive, often beating 8-bit MCUs while offering 32-bit performance and ARM ecosystem compatibility.",
        "highlight": "Cost-effective entry-level 32-bit MCU for simple applications"
      },
      alternativeParts: [
        {
          "partNumber": "STM32F030C8T6",
          "brand": "STMicroelectronics",
          "specifications": {
            "Core": "ARM Cortex-M0",
            "Frequency": "48 MHz",
            "Flash": "64 KB",
            "SRAM": "8 KB",
            "Package": "LQFP48"
          },
          "comparison": "HS32F030C8T6 => STM32F030C8T6 => Similar specs, cost advantage",
          "reason": "Direct pin-compatible replacement",
          "useCase": "Use as lower-cost alternative to STM32F030",
          "link": "/stm32/products/general-purpose-mcu/stm32f030c8t6.html"
        },
        {
          "partNumber": "HS32F103C8T6",
          "brand": "Hangshun",
          "specifications": {
            "Core": "ARM Cortex-M3",
            "Frequency": "72 MHz",
            "Flash": "64 KB",
            "SRAM": "20 KB",
            "Package": "LQFP48"
          },
          "comparison": "HS32F030C8T6 => HS32F103C8T6 => M0 vs M3, 8KB vs 20KB SRAM, no USB vs USB",
          "reason": "Upgrade for more performance and features",
          "useCase": "Use F103 when USB or higher performance needed",
          "link": "/hangshun/products/general-purpose-mcu/hs32f103c8t6.html"
        }
      ],
      companionParts: [
        {
          "partNumber": "8MHz Crystal",
          "description": "External crystal for clock source",
          "category": "Passive Components"
        },
        {
          "partNumber": "Low-cost LDO",
          "description": "Simple 3.3V regulator",
          "category": "Power Management"
        }
      ],
      faqs: [
        {
          "question": "What is the difference between Cortex-M0 and M3?",
          "answer": "Key differences between Cortex-M0 and M3: Performance - M3: 1.25 DMIPS/MHz, M0: 0.9 DMIPS/MHz (~40% faster); Hardware divide - M3 has single-cycle divide, M0 uses software divide; Thumb instructions - M3 supports Thumb-2, M0 supports subset; Interrupt latency - M3: 12 cycles, M0: 16 cycles; Debug - M3 has more breakpoint options; Power - M0 consumes less power per MHz. For simple applications (GPIO control, basic UART), M0 is sufficient. For complex algorithms or high-speed processing, choose M3. The M0 is more cost-effective for basic tasks while still providing 32-bit performance.",
          "decisionGuide": "Choose M0 for simple cost-sensitive apps; M3 for better performance and hardware divide.",
          "keywords": ["Cortex-M0", "Cortex-M3", "performance comparison"]
        },
        {
          "question": "Is 8KB SRAM sufficient for my application?",
          "answer": "8KB SRAM is sufficient for: Simple control applications with minimal data; Basic communication protocols (UART, I2C, SPI); Small RTOS kernels (FreeRTOS minimum ~4KB); Limited buffer sizes (1-2KB for serial buffers). 8KB is NOT sufficient for: Complex algorithms requiring large arrays; Graphics buffers; Large communication buffers (Ethernet, USB); Multiple concurrent tasks with large stacks. To minimize SRAM usage: Use static allocation instead of dynamic; Reduce buffer sizes; Minimize stack usage in functions; Use const for read-only data (stored in Flash). For applications requiring more RAM, consider HS32F103 series with 20KB SRAM.",
          "decisionGuide": "Sufficient for simple apps; choose F103 series if more RAM needed.",
          "keywords": ["SRAM size", "8KB RAM", "memory requirements"]
        },
        {
          "question": "What is the price advantage over 8-bit MCUs?",
          "answer": "The HS32F030C8T6 offers competitive pricing compared to 8-bit MCUs: Price range: $0.50-$0.80 in volume (comparable to high-end 8-bit MCUs); 32-bit performance at 8-bit prices; ARM ecosystem and tools (free GCC, affordable debuggers); Better code density (Thumb instructions); Easier to find developers (ARM skills transferable). While basic 8-bit MCUs may be cheaper, the HS32F030 provides: Better performance per dollar; Modern 32-bit architecture; Better development tools; Easier software maintenance. For new designs, the HS32F030 often makes more sense than 8-bit alternatives unless absolute lowest cost is required.",
          "decisionGuide": "Competitive with 8-bit MCUs while offering 32-bit performance and ecosystem.",
          "keywords": ["price", "cost comparison", "8-bit vs 32-bit"]
        },
        {
          "question": "Does it support bootloader programming?",
          "answer": "Yes, the HS32F030C8T6 supports multiple programming methods: Factory bootloader in system memory supports USART programming; Can be programmed via UART using standard USB-to-serial adapter; No dedicated USB bootloader (USB not available on this part); SWD interface for in-circuit programming; In-application programming (IAP) for firmware updates. The USART bootloader uses standard protocols and is compatible with STM32 bootloader tools. For production programming, SWD is recommended for speed and reliability. The bootloader can be protected to prevent unauthorized firmware reading.",
          "decisionGuide": "USART bootloader for simple updates; SWD for development and production.",
          "keywords": ["bootloader", "USART programming", "firmware update"]
        },
        {
          "question": "What are the power consumption characteristics?",
          "answer": "HS32F030C8T6 power consumption: Active mode at 48MHz: ~8mA typical; Sleep mode: ~2mA with peripherals running; Deep sleep: ~50μA with RAM retained; Standby mode: ~5μA (lowest power). The Cortex-M0 core is designed for efficiency, consuming less power per MHz than M3/M4 cores. Power optimization features: Multiple clock sources (internal 8MHz RC, external crystal); Clock gating for unused peripherals; Voltage regulator in low-power mode; Fast wake-up from sleep (<10μs). For battery-powered applications, the HS32F030 offers excellent power efficiency while maintaining 32-bit performance. Consider using sleep modes between tasks to extend battery life.",
          "decisionGuide": "Low power consumption suitable for battery-powered applications.",
          "keywords": ["power consumption", "low power", "battery operation"]
        }
      ]
    },
    {
      partNumber: "HS32F072C8T6",
      name: "HS32F072C8T6",
      shortDescription: "ARM Cortex-M0 MCU with USB, 64KB Flash, 16KB SRAM, 48MHz, LQFP48 for USB applications.",
      descriptionParagraphs: [
        "The HS32F072C8T6 is a USB-capable 32-bit microcontroller based on ARM Cortex-M0 core at 48MHz.",
        "Featuring 64KB Flash and 16KB SRAM with integrated USB 2.0 full-speed device controller.",
        "The cost-effective USB solution makes it ideal for USB peripherals and human interface devices."
      ],
      specifications: {
        "Core": "ARM Cortex-M0",
        "Frequency": "48 MHz",
        "Flash": "64 KB",
        "SRAM": "16 KB",
        "GPIO": "37",
        "Package": "LQFP48"
      },
      features: [
        "48MHz ARM Cortex-M0 core",
        "USB 2.0 full-speed device controller",
        "64KB Flash memory",
        "16KB SRAM (double the F030)",
        "2x USART, 2x SPI, 2x I2C",
        "12-bit ADC with 12 channels",
        "Touch sensing controller (TSC)",
        "Hardware CRC generator"
      ],
      applications: [
        "USB peripherals",
        "HID devices (keyboard, mouse)",
        "USB-to-serial converters",
        "Touch sensing interfaces",
        "Consumer electronics"
      ],
      faeReview: {
        "author": "Lisa Zhang",
        "title": "FAE - USB and Interface Solutions",
        "content": "The HS32F072C8T6 is our go-to recommendation for USB device applications on a budget. The integrated USB PHY eliminates external components, reducing BOM cost. The 16KB SRAM is sufficient for USB buffers and simple applications. I've used this in USB-to-serial adapters, custom HID devices, and USB sensor interfaces. The touch sensing controller is a nice bonus for capacitive button applications. The USB bootloader in ROM makes firmware updates easy for end users. For USB host or OTG applications, look at the HS32F103 series. The price point is excellent for USB-capable MCUs, often under $1 in volume.",
        "highlight": "Cost-effective USB device solution with touch sensing"
      },
      alternativeParts: [
        {
          "partNumber": "STM32F072C8T6",
          "brand": "STMicroelectronics",
          "specifications": {
            "Core": "ARM Cortex-M0",
            "Frequency": "48 MHz",
            "Flash": "64 KB",
            "SRAM": "16 KB",
            "Package": "LQFP48"
          },
          "comparison": "HS32F072C8T6 => STM32F072C8T6 => Pin and software compatible",
          "reason": "Direct replacement with cost savings",
          "useCase": "Use as lower-cost alternative to STM32F072",
          "link": "/stm32/products/general-purpose-mcu/stm32f072c8t6.html"
        },
        {
          "partNumber": "HS32F030C8T6",
          "brand": "Hangshun",
          "specifications": {
            "Core": "ARM Cortex-M0",
            "Frequency": "48 MHz",
            "Flash": "64 KB",
            "SRAM": "8 KB",
            "Package": "LQFP48"
          },
          "comparison": "HS32F072C8T6 => HS32F030C8T6 => USB vs no USB, 16KB vs 8KB SRAM",
          "reason": "Lower cost if USB not needed",
          "useCase": "Use F030 when USB not required",
          "link": "/hangshun/products/general-purpose-mcu/hs32f030c8t6.html"
        }
      ],
      companionParts: [
        {
          "partNumber": "USB Connector",
          "description": "Micro-USB or Type-B connector",
          "category": "Connectors"
        },
        {
          "partNumber": "ESD Protection",
          "description": "USB ESD protection diode",
          "category": "Protection"
        }
      ],
      faqs: [
        {
          "question": "What USB classes are supported?",
          "answer": "The HS32F072C8T6 USB device controller supports standard USB classes through firmware libraries: CDC (Communication Device Class) - virtual COM port for serial communication; HID (Human Interface Device) - keyboards, mice, game controllers, custom data transfer; MSC (Mass Storage Class) - USB flash drive emulation; Audio Class - USB audio devices; Custom class - vendor-specific implementations. The USB library handles standard USB requests and descriptors. Class-specific functionality is implemented in application code. The USB controller supports up to 8 endpoints (including control endpoint). USB certification may be required for commercial products. Contact our FAEs for USB certification support.",
          "decisionGuide": "CDC for serial, HID for simple data, MSC for storage; custom class for proprietary protocols.",
          "keywords": ["USB classes", "CDC", "HID", "MSC"]
        },
        {
          "question": "How does the touch sensing controller work?",
          "answer": "The Touch Sensing Controller (TSC) provides capacitive touch sensing: Supports up to 24 touch channels; Charge transfer acquisition principle; Adjustable sensitivity and detection threshold; Supports buttons, sliders, and wheels; No external components needed (uses internal reference capacitor); Low power consumption in touch detection mode. The TSC works by measuring capacitance changes when a finger approaches the electrode. Acquisition is controlled by hardware with minimal CPU intervention. Software libraries provide gesture recognition and touch position calculation. The TSC is suitable for simple touch buttons but not as advanced as dedicated touch MCUs for complex interfaces.",
          "decisionGuide": "Suitable for simple touch buttons; use dedicated touch MCU for complex multi-touch interfaces.",
          "keywords": ["touch sensing", "TSC", "capacitive touch"]
        },
        {
          "question": "Is the USB bootloader pre-programmed?",
          "answer": "Yes, the HS32F072C8T6 includes a factory-programmed USB bootloader in ROM: Activated by pulling BOOT0 pin high at reset; Enumerates as USB device with DFU (Device Firmware Update) class; Can program Flash memory via USB; Supports read protection configuration; Cannot be erased or corrupted. The USB bootloader allows end-users to update firmware without special hardware. For production, you can program parts via SWD and disable the bootloader for security. The DFU protocol is standard and supported by tools like DfuSe and open-source alternatives. This is a significant advantage over MCUs requiring external programmers for firmware updates.",
          "decisionGuide": "USB bootloader enables easy field updates; can be disabled for security in production.",
          "keywords": ["USB bootloader", "DFU", "firmware update"]
        },
        {
          "question": "What is the difference between F072 and F030?",
          "answer": "Key differences between HS32F072 and HS32F030: USB - F072 has USB device, F030 has no USB; SRAM - F072 has 16KB, F030 has 8KB; Touch sensing - F072 has TSC, F030 does not; ADC channels - F072 has 12, F030 has 10; Hardware CRC - F072 has CRC unit, F030 does not; Price - F072 costs ~$0.20 more than F030. Both share the same Cortex-M0 core at 48MHz, 64KB Flash, and basic peripherals. Choose F072 when you need USB or touch sensing; choose F030 for lowest cost when USB not needed. The F072's extra SRAM is valuable even without using USB.",
          "decisionGuide": "Choose F072 for USB/touch; F030 for lowest cost without USB.",
          "keywords": ["F072 vs F030", "comparison", "USB MCU"]
        },
        {
          "question": "Can it work as USB host?",
          "answer": "No, the HS32F072C8T6 USB controller is device-only and cannot operate as USB host. The integrated USB PHY supports device mode only. For USB host or OTG (On-The-Go) applications, consider: HS32F103 series - has USB device/host/OTG controller; HS32F405 series - supports USB OTG with high-speed; External USB host controller chip. USB host requires: Ability to supply 5V VBUS power; Support for USB hub topology; Enumeration and management of connected devices; Much more complex firmware. For simple USB host needs (connecting USB flash drive or keyboard), consider using a dedicated USB host chip or upgrading to HS32F103/405 series.",
          "decisionGuide": "Device-only; use F103/F405 series for USB host/OTG capability.",
          "keywords": ["USB host", "USB OTG", "device only"]
        }
      ]
    }
  ];
}

// 主函数
function main() {
  console.log('Adding products to Hangshun categories...\n');
  
  // 为General Purpose MCU添加4个新产品（已有2个，共6个）
  const generalPurposeCat = productsData.categories.find(c => c.id === 'general-purpose-mcu');
  if (generalPurposeCat && generalPurposeCat.products.length < 6) {
    const newProducts = generateGeneralPurposeProducts();
    // 只添加还缺少的产品数量
    const needed = 6 - generalPurposeCat.products.length;
    generalPurposeCat.products.push(...newProducts.slice(0, needed));
    console.log(`✅ Added ${needed} products to General Purpose MCU (total: ${generalPurposeCat.products.length})`);
  }
  
  // 保存更新后的文件
  fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');
  
  console.log('\n✅ Products added successfully!');
  console.log('Next: Add products to other categories (Touch Control, Motor Control, Wireless)');
}

main();
