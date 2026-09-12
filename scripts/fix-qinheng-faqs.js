#!/usr/bin/env node
/**
 * Fix FAQ counts for new qinheng products - need 5-8 FAQs per product
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'qinheng', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Additional FAQs for each product type
const additionalFaqs = {
  'CH340E': [
    {
      question: "What is the package size of CH340E?",
      answer: "CH340E comes in a compact MSOP-10 package measuring just 3mm x 3mm. This is significantly smaller than the SOP-16 package used by CH340C, making it ideal for space-constrained designs like wearables and portable devices. The smaller package reduces PCB area by approximately 60% compared to SOP-16.",
      decisionGuide: "Choose CH340E when PCB space is critical. Use CH340C when you need full handshake signals.",
      keywords: ["MSOP-10", "package size", "compact", "PCB area"]
    },
    {
      question: "Can I use CH340E for battery-powered applications?",
      answer: "Yes, CH340E is suitable for battery-powered applications due to its low power consumption. The chip draws minimal current in suspend mode and has efficient power management. The built-in oscillator also eliminates the power consumption of an external crystal. For ultra-low-power designs, consider implementing USB suspend mode and disabling unused features.",
      decisionGuide: "Suitable for battery-powered designs. Implement power management for best results.",
      keywords: ["battery powered", "low power", "suspend mode", "power consumption"]
    },
    {
      question: "What are the key differences between CH340E and CP2102?",
      answer: "CH340E offers similar functionality to CP2102 but at a lower cost. CH340E uses MSOP-10 package vs CP2102's QFN-28. Both support up to 2Mbps baud rate. CH340E has built-in oscillator while CP2102 requires external crystal. CH340E drivers are built into Linux kernel, while CP2102 requires proprietary drivers. For cost-sensitive designs, CH340E is the better choice.",
      decisionGuide: "CH340E for cost-sensitive compact designs. CP2102 for Silicon Labs ecosystem compatibility.",
      keywords: ["CP2102", "comparison", "cost advantage", "Silicon Labs"]
    },
    {
      question: "How do I layout the PCB for CH340E?",
      answer: "For optimal CH340E performance: 1) Place 100nF decoupling capacitor close to VCC pin; 2) Keep USB D+/D- traces short and matched (within 2mm length difference); 3) Use solid ground plane under USB signals; 4) Connect VCC to desired IO voltage (3.3V or 5V); 5) Keep crystal pads unconnected (no external crystal needed); 6) Add 22-27Ω series resistors on USB lines for EMI reduction.",
      decisionGuide: "Follow reference layout. Keep decoupling capacitor close. Match USB trace lengths.",
      keywords: ["PCB layout", "decoupling capacitor", "USB traces", "ground plane"]
    },
    {
      question: "Where can I get technical support for CH340E?",
      answer: "LiTong Electronics provides comprehensive technical support for CH340E including datasheet, application notes, reference designs, and driver downloads. Our FAE team can assist with schematic review, PCB layout optimization, and driver integration. Contact us via email, phone, or through our website support portal. We also offer sample kits for evaluation.",
      decisionGuide: "Contact LiTong FAE for technical support, samples, and design review services.",
      keywords: ["technical support", "FAE", "samples", "design review"]
    },
    {
      question: "What is the lead time and MOQ for CH340E?",
      answer: "CH340E typically has stock available with lead times of 2-4 weeks for large orders. MOQ (Minimum Order Quantity) varies by package type - typically 100 pieces for sample orders and 1000+ pieces for production. Contact LiTong sales for current stock status, pricing, and delivery schedules. We support both small sample orders and large production volumes.",
      decisionGuide: "Contact LiTong sales for current lead times, MOQ, and pricing information.",
      keywords: ["lead time", "MOQ", "minimum order", "stock", "pricing"]
    }
  ],
  'CH340T': [
    {
      question: "What certifications does CH340T have?",
      answer: "CH340T is AEC-Q100 qualified for automotive applications, ensuring reliability in harsh environments. It also meets industrial standards for extended temperature operation. The chip has RoHS compliance certification and WHQL-certified Windows drivers. These certifications make it suitable for automotive, medical, and industrial applications requiring high reliability.",
      decisionGuide: "CH340T for applications requiring automotive or industrial certifications.",
      keywords: ["AEC-Q100", "automotive", "certification", "RoHS", "WHQL"]
    },
    {
      question: "How does CH340T handle ESD protection?",
      answer: "CH340T features enhanced ESD protection with 8kV contact discharge and 15kV air discharge ratings per IEC 61000-4-2. The USB interface has integrated protection diodes, and the chip includes latch-up immunity for robust operation. For additional protection in harsh environments, external TVS diodes can be added to USB lines. This makes CH340T ideal for industrial and outdoor applications.",
      decisionGuide: "Built-in ESD protection sufficient for most apps. Add external TVS for extreme environments.",
      keywords: ["ESD protection", "IEC 61000-4-2", "TVS diode", "latch-up immunity"]
    },
    {
      question: "Can CH340T operate in high-temperature environments?",
      answer: "Yes, CH340T is rated for extended temperature range from -40°C to +125°C, making it suitable for automotive under-hood applications, industrial equipment, and outdoor systems. The chip maintains stable operation across the full temperature range with consistent USB performance. For thermal management, ensure adequate PCB copper area for heat dissipation in high-temperature applications.",
      decisionGuide: "Suitable for high-temperature applications up to +125°C. Ensure proper PCB thermal design.",
      keywords: ["high temperature", "automotive", "thermal management", "extended range"]
    },
    {
      question: "What is the difference between CH340T and FT232RL for industrial use?",
      answer: "CH340T and FT232RL both support industrial temperature ranges. CH340T offers AEC-Q100 qualification and better ESD protection at lower cost. FT232RL supports higher baud rates (3Mbps vs 2Mbps) and has more advanced features. For most industrial applications, CH340T provides the best value with adequate performance. Choose FT232RL only if you need 3Mbps+ baud rates.",
      decisionGuide: "CH340T for cost-effective industrial apps. FT232RL for 3Mbps+ requirements.",
      keywords: ["FT232RL", "industrial", "comparison", "baud rate", "cost"]
    },
    {
      question: "How do I qualify CH340T for my automotive application?",
      answer: "To qualify CH340T for automotive applications: 1) Review AEC-Q100 qualification documents; 2) Conduct environmental testing (temperature cycling, humidity, vibration); 3) Perform EMC testing per automotive standards; 4) Validate long-term reliability with accelerated life testing; 5) Document PPAP (Production Part Approval Process) if required. LiTong FAE can provide support documentation and testing guidance.",
      decisionGuide: "Work with LiTong FAE for automotive qualification support and documentation.",
      keywords: ["automotive qualification", "AEC-Q100", "PPAP", "EMC testing"]
    },
    {
      question: "What is the long-term availability of CH340T?",
      answer: "CH340T is a standard product in QinHeng's portfolio with guaranteed long-term availability. QinHeng provides product lifecycle management with end-of-life notifications. As an authorized distributor, LiTong maintains safety stock and can support long-term supply agreements. Contact our sales team for supply chain planning and LTSA (Long Term Supply Agreement) options.",
      decisionGuide: "Contact LiTong sales for LTSA and long-term supply planning.",
      keywords: ["long-term availability", "lifecycle", "LTSA", "supply chain"]
    }
  ],
  'CH32V103': [
    {
      question: "What is the difference between CH32V103 and STM32F103?",
      answer: "CH32V103 uses RISC-V architecture while STM32F103 uses ARM Cortex-M3. Both have similar performance (72MHz) and peripheral sets. CH32V103 offers lower cost and open-source toolchain advantages. STM32F103 has a larger ecosystem and more third-party libraries. For new designs, CH32V103 provides better value. For existing STM32 codebases, migration requires porting but is straightforward.",
      decisionGuide: "CH32V103 for new cost-sensitive designs. STM32F103 for existing ARM ecosystems.",
      keywords: ["STM32F103", "RISC-V", "ARM", "comparison", "migration"]
    },
    {
      question: "Can I use Arduino with CH32V103?",
      answer: "Yes, CH32V103 supports Arduino through the Arduino Core for RISC-V. The core provides familiar Arduino functions and libraries. Installation is done through Arduino IDE Boards Manager. Most basic Arduino sketches work with minimal or no modification. Advanced features may require direct register access. The WCH community provides examples and support for Arduino development.",
      decisionGuide: "Use Arduino Core for RISC-V. Most sketches work with minimal modifications.",
      keywords: ["Arduino", "Arduino Core", "RISC-V", "IDE", "sketch"]
    },
    {
      question: "What debug tools work with CH32V103?",
      answer: "CH32V103 supports debugging with WCH-Link (official debugger), J-Link with RISC-V support, and DAP-Link compatible debuggers. WCH-Link is the most cost-effective option and integrates well with MounRiver Studio. J-Link provides advanced features like trace and profiling. OpenOCD supports CH32V103 for command-line debugging and CI/CD integration.",
      decisionGuide: "WCH-Link for cost-effective debugging. J-Link for advanced features.",
      keywords: ["WCH-Link", "J-Link", "debug", "OpenOCD", "MounRiver"]
    },
    {
      question: "How much Flash and SRAM does CH32V103 have?",
      answer: "CH32V103 comes in multiple memory configurations: Flash options include 64KB, 128KB, and 256KB variants. SRAM is typically 20KB across all variants. The memory is sufficient for most USB peripheral applications, RTOS implementations, and moderate complexity algorithms. For applications requiring more memory, consider CH32V203 or CH32V307 with larger memory options.",
      decisionGuide: "Choose memory variant based on application needs. Contact FAE for selection guidance.",
      keywords: ["Flash", "SRAM", "memory", "64KB", "128KB", "256KB"]
    },
    {
      question: "What USB classes does CH32V103 support?",
      answer: "CH32V103 supports USB 2.0 Full Speed device mode with multiple USB classes including CDC (Virtual COM), HID (Keyboard/Mouse), MSC (Mass Storage), and custom device classes. The chip includes built-in USB PHY and supports remote wakeup. Example code is provided for each class. For USB Host mode, consider CH32V307 which supports OTG.",
      decisionGuide: "Supports CDC, HID, MSC device classes. Use CH32V307 for USB Host/OTG.",
      keywords: ["USB class", "CDC", "HID", "MSC", "device mode"]
    },
    {
      question: "Where can I find CH32V103 example code?",
      answer: "QinHeng provides comprehensive example code for CH32V103 including: peripheral examples (GPIO, UART, SPI, I2C, ADC, TIM), USB device examples (CDC, HID, MSC), RTOS examples (FreeRTOS, RT-Thread), and application examples. Code is available in the WCH SDK, MounRiver Studio examples, and GitHub repositories. LiTong FAE can provide additional application-specific examples.",
      decisionGuide: "Download WCH SDK and MounRiver Studio for comprehensive examples.",
      keywords: ["example code", "SDK", "GitHub", "peripheral", "USB examples"]
    }
  ],
  'CH32X033': [
    {
      question: "What is the lowest cost application for CH32X033?",
      answer: "CH32X033 is ideal for the most cost-sensitive USB applications including: USB dongles for software protection, simple USB-to-GPIO bridges, basic HID devices (custom keyboards, button boxes), USB sensors, and LED controllers. The ultra-low cost makes it suitable for high-volume consumer products, promotional items, and disposable USB devices where every cent matters.",
      decisionGuide: "Best for high-volume, cost-sensitive USB applications under $0.50 target.",
      keywords: ["low cost", "USB dongle", "HID device", "high volume", "consumer"]
    },
    {
      question: "Can CH32X033 run FreeRTOS?",
      answer: "Yes, CH32X033 can run FreeRTOS with limited features due to its 32KB Flash and 10KB SRAM. A minimal FreeRTOS configuration fits comfortably, leaving room for application code. However, complex applications with many tasks may be constrained by memory. For RTOS applications, keep task count low and stack sizes minimal. Consider CH32V103 for more complex RTOS applications.",
      decisionGuide: "Can run FreeRTOS with minimal config. Use CH32V103 for complex RTOS apps.",
      keywords: ["FreeRTOS", "RTOS", "real-time", "memory constraint", "task"]
    },
    {
      question: "What is the power consumption of CH32X033?",
      answer: "CH32X033 has very low power consumption typical of simple RISC-V cores. Active mode current is approximately 5-10mA at 48MHz. Sleep modes reduce consumption significantly. The chip supports various low-power modes for battery-powered applications. For ultra-low-power designs, use sleep modes extensively and minimize peripheral usage. The USB interface can be disabled when not needed.",
      decisionGuide: "Low power suitable for battery apps. Use sleep modes for best efficiency.",
      keywords: ["power consumption", "low power", "sleep mode", "battery", "current"]
    },
    {
      question: "How do I program CH32X033?",
      answer: "CH32X033 is programmed via SWD interface using WCH-Link or compatible debuggers. The chip has built-in bootloader supporting USB and UART programming. For production, WCH-LinkUtility or command-line tools can be used. The programming process is straightforward: connect SWD pins, power the device, and use the programming software to flash the binary. No special unlock sequence is required.",
      decisionGuide: "Use WCH-Link with SWD interface. USB/UART bootloader also available.",
      keywords: ["programming", "SWD", "WCH-Link", "bootloader", "flash"]
    },
    {
      question: "What package options are available for CH32X033?",
      answer: "CH32X033 is available in compact packages including TSSOP20 (6.5mm x 4.4mm) and QFN28 (5mm x 5mm). The TSSOP20 is easy to solder and suitable for prototyping. The QFN28 offers smaller size for space-constrained designs. Both packages have the same pinout and functionality. Choose based on your PCB space and manufacturing capabilities.",
      decisionGuide: "TSSOP20 for easy soldering. QFN28 for compact designs.",
      keywords: ["TSSOP20", "QFN28", "package", "soldering", "compact"]
    },
    {
      question: "Is CH32X033 suitable for learning RISC-V?",
      answer: "CH32X033 is an excellent choice for learning RISC-V due to its low cost and simplicity. The straightforward architecture makes it easy to understand RISC-V fundamentals. Abundant documentation, examples, and community support are available. The chip is used in educational kits and development boards. For advanced RISC-V learning, you can later migrate to more complex chips like CH32V307.",
      decisionGuide: "Excellent for RISC-V learning due to low cost and simplicity.",
      keywords: ["RISC-V learning", "education", "development board", "beginner"]
    }
  ],
  'CH573': [
    {
      question: "What BLE profiles does CH573 support?",
      answer: "CH573 supports standard BLE profiles including HID (Human Interface Device for keyboards, mice, remotes), SPP (Serial Port Profile for transparent data transfer), Beacon (iBeacon and Eddystone formats), and custom GATT profiles. The complete BLE 5.0 protocol stack is included royalty-free. Example code is provided for each profile. For advanced audio profiles, consider CH585 with LE Audio support.",
      decisionGuide: "Supports HID, SPP, Beacon profiles. Use CH585 for audio applications.",
      keywords: ["BLE profile", "HID", "SPP", "Beacon", "iBeacon", "GATT"]
    },
    {
      question: "How do I update firmware on CH573 over BLE?",
      answer: "CH573 supports Over-The-Air (OTA) firmware updates via BLE. The OTA service is included in the SDK with example code. The process involves: 1) Implement OTA service in your application; 2) Use mobile app or PC tool to send new firmware; 3) Device receives firmware in chunks and writes to Flash; 4) Device reboots into new firmware. The SDK provides secure OTA with CRC verification.",
      decisionGuide: "Use SDK OTA example. Implement secure update with verification.",
      keywords: ["OTA", "Over-The-Air", "firmware update", "BLE", "secure"]
    },
    {
      question: "What is the range of CH573 BLE?",
      answer: "CH573 has typical BLE range of 50-100 meters in open space at 0dBm transmit power. Range depends on environment, antenna design, and interference. Using +4dBm maximum power extends range. For longer range, BLE 5.0 Coded PHY (125kbps/500kbps) can be used, though CH573 basic support may vary. For extended range requirements, consider CH585 with better RF performance.",
      decisionGuide: "50-100m typical range. Use max TX power and good antenna for best range.",
      keywords: ["range", "distance", "transmit power", "antenna", "Coded PHY"]
    },
    {
      question: "Can CH573 connect to iOS and Android devices?",
      answer: "Yes, CH573 connects to both iOS and Android devices as a BLE peripheral. The chip is compatible with standard BLE protocols used by mobile devices. iOS and Android apps can scan, connect, and communicate with CH573 using standard BLE APIs. Example mobile apps are provided in the SDK. No special certification is required for basic BLE connectivity.",
      decisionGuide: "Compatible with iOS and Android. Use standard BLE APIs.",
      keywords: ["iOS", "Android", "mobile", "compatibility", "BLE"]
    },
    {
      question: "What development board is available for CH573?",
      answer: "QinHeng provides the CH573F evaluation board featuring the CH573F chip, USB connector for power/programming, GPIO headers, and antenna. The board includes example firmware pre-loaded. Third-party development boards are also available from various vendors. LiTong Electronics can provide evaluation boards and starter kits with documentation and example code.",
      decisionGuide: "Use official CH573F evaluation board or contact LiTong for starter kits.",
      keywords: ["development board", "evaluation kit", "starter kit", "CH573F"]
    },
    {
      question: "How do I optimize power consumption for CH573 battery applications?",
      answer: "To optimize CH573 power for battery applications: 1) Use advertising intervals of 1 second or longer; 2) Implement sleep mode between advertising/connection events; 3) Disable unused peripherals; 4) Use +0dBm or lower TX power if range permits; 5) Implement connection parameter negotiation for longer intervals; 6) Use deep sleep when not active. With optimization, CR2032 battery can last 1-2 years.",
      decisionGuide: "Optimize advertising intervals, use sleep modes, minimize TX power.",
      keywords: ["power optimization", "battery life", "sleep mode", "advertising interval"]
    }
  ],
  'CH585': [
    {
      question: "What is LE Audio and how does it work with CH585?",
      answer: "LE Audio is the next-generation Bluetooth audio standard built on BLE. CH585 supports LE Audio with features like Auracast (broadcast audio), multiple simultaneous audio streams, and improved audio quality with LC3 codec. LE Audio enables new use cases like public venue broadcasting, audio sharing between devices, and better hearing aid support. CH585's 80MHz RISC-V core handles audio processing efficiently.",
      decisionGuide: "Use CH585 for LE Audio applications. Supports Auracast and multi-stream.",
      keywords: ["LE Audio", "Auracast", "LC3 codec", "broadcast audio", "multi-stream"]
    },
    {
      question: "How many BLE connections can CH585 handle simultaneously?",
      answer: "CH585 supports up to 20 concurrent BLE connections when acting as a central device (master). It can simultaneously act as peripheral and central, enabling complex multi-device scenarios like connecting to multiple sensors while being connected to a phone. The 1MB Flash and 64KB SRAM provide sufficient resources for managing multiple connections with application logic.",
      decisionGuide: "Supports 20+ concurrent connections. Ideal for IoT gateways and hubs.",
      keywords: ["concurrent connections", "multi-connection", "central", "peripheral", "gateway"]
    },
    {
      question: "What audio codecs does CH585 support?",
      answer: "CH585 supports LE Audio's mandatory LC3 (Low Complexity Communication Codec) which offers better audio quality than classic SBC at lower bitrates. The chip can also support vendor-specific codecs. LC3 provides high-quality audio at 16-32kbps for voice and 64-128kbps for music. The codec is optimized for low power consumption, making it ideal for wireless earbuds and hearing aids.",
      decisionGuide: "Supports LC3 codec. Optimized for low power and high quality.",
      keywords: ["LC3", "codec", "audio quality", "bitrate", "low power"]
    },
    {
      question: "Can CH585 be used for wireless earbuds?",
      answer: "Yes, CH585 is well-suited for true wireless stereo (TWS) earbuds. The chip supports LE Audio with Auracast, has sufficient processing power for audio processing, and includes low-power modes for extended battery life. The small QFN32/QFN48 packages fit compact earbud designs. Dual-mode operation allows earbuds to connect to each other and to a phone simultaneously.",
      decisionGuide: "Excellent for TWS earbuds. Supports LE Audio and dual-mode operation.",
      keywords: ["TWS", "earbuds", "true wireless", "Auracast", "dual-mode"]
    },
    {
      question: "What security features does CH585 offer?",
      answer: "CH585 includes advanced security features for BLE 5.3: AES-128 encryption, secure boot, firmware protection, and pairing methods including LE Secure Connections. The chip supports various pairing modes (Just Works, Passkey Entry, Numeric Comparison, OOB). For IoT applications, secure provisioning and encrypted communication ensure data protection. Regular security updates are provided through SDK.",
      decisionGuide: "Comprehensive security for IoT. Use LE Secure Connections for best security.",
      keywords: ["security", "AES-128", "secure boot", "pairing", "encryption"]
    },
    {
      question: "How do I develop audio applications with CH585?",
      answer: "Developing audio applications with CH585 involves: 1) Set up MounRiver Studio with CH585 SDK; 2) Study LE Audio examples in SDK; 3) Implement audio pipeline with LC3 codec; 4) Configure BLE audio profiles (BAP, PBP, CAP); 5) Optimize for low latency and power. The SDK includes complete audio examples. LiTong FAE can provide audio application guidance and design review.",
      decisionGuide: "Use CH585 SDK with LE Audio examples. Contact FAE for audio app support.",
      keywords: ["audio development", "LE Audio", "LC3", "SDK", "low latency"]
    }
  ],
  'CH9325': [
    {
      question: "What SPI modes does CH9325 support?",
      answer: "CH9325 supports all four SPI modes (Mode 0, 1, 2, 3) with configurable clock polarity (CPOL) and clock phase (CPHA). The chip can communicate with virtually any SPI device regardless of its mode requirements. SPI speed is configurable up to 30MHz. The API allows easy mode selection and speed configuration. This flexibility makes CH9325 compatible with a wide range of SPI sensors, memory, and peripheral chips.",
      decisionGuide: "Supports all SPI modes. Compatible with any SPI device.",
      keywords: ["SPI mode", "CPOL", "CPHA", "clock polarity", "clock phase"]
    },
    {
      question: "Can CH9325 be used as a Flash programmer?",
      answer: "Yes, CH9325 is excellent for Flash memory programming with its 30MHz SPI speed and dedicated programming features. The chip supports standard SPI Flash commands (Read, Page Program, Sector Erase, Chip Erase). The 4KB buffer allows efficient page programming. Example code is provided for common Flash chips (W25Q series, GD25Q series). The GPIO pins can control Flash write-protect and hold signals.",
      decisionGuide: "Excellent for Flash programming. Supports common SPI Flash chips.",
      keywords: ["Flash programmer", "SPI Flash", "W25Q", "GD25Q", "memory"]
    },
    {
      question: "What is the API interface for CH9325?",
      answer: "CH9325 provides a DLL/API interface for Windows and library for Linux. The API includes functions for: device open/close, SPI configuration (mode, speed), SPI read/write, I2C read/write, GPIO control, and interrupt handling. The API is straightforward and similar to other USB bridge chips. Example code is provided in C/C++, C#, and Python. Documentation includes complete function reference.",
      decisionGuide: "Simple DLL API for Windows. Library available for Linux.",
      keywords: ["API", "DLL", "library", "C++", "Python", "interface"]
    },
    {
      question: "How do I use CH9325 for I2C communication?",
      answer: "CH9325 supports I2C master mode with speeds up to 1MHz (Fast Mode+). The API provides functions for I2C device detection, read, write, and combined transactions. The chip handles I2C start/stop conditions and ACK/NACK automatically. 7-bit and 10-bit device addressing are supported. The 4KB buffer allows efficient block transfers. Example code covers common I2C sensors and EEPROMs.",
      decisionGuide: "Supports I2C master up to 1MHz. API handles protocol details.",
      keywords: ["I2C", "master mode", "Fast Mode+", "device address", "EEPROM"]
    },
    {
      question: "What is the difference between CH9325 and FT2232H?",
      answer: "CH9325 is a cost-effective USB to SPI/I2C bridge with 30MHz SPI speed. FT2232H is a high-end USB 2.0 HS bridge with more features and 60MHz SPI. CH9325 is ideal for cost-sensitive applications requiring basic SPI/I2C. FT2232H is better for high-speed or complex multi-protocol applications. For most embedded development and programming tasks, CH9325 provides excellent value.",
      decisionGuide: "CH9325 for cost-effective SPI/I2C. FT2232H for high-speed/multi-protocol.",
      keywords: ["FT2232H", "comparison", "USB HS", "cost-effective", "high-speed"]
    },
    {
      question: "Where can I get CH9325 drivers and examples?",
      answer: "CH9325 drivers and examples are available from: 1) QinHeng official website (drivers, SDK, API documentation); 2) LiTong Electronics support portal (application notes, reference designs); 3) GitHub community repositories (open-source examples). Drivers support Windows 7/8/10/11 (32/64-bit) and Linux (kernel 2.6+). macOS drivers are also available. All downloads are free.",
      decisionGuide: "Download from QinHeng website or LiTong support portal.",
      keywords: ["drivers", "SDK", "examples", "download", "Windows", "Linux"]
    }
  ],
  'CH9340': [
    {
      question: "How are the two UARTs on CH9340 addressed separately?",
      answer: "CH9340 presents two independent virtual COM ports to the operating system. In Windows, they appear as separate COM ports (e.g., COM3 and COM4). In Linux, they appear as /dev/ttyUSB0 and /dev/ttyUSB1. Each port has its own device handle and can be opened and configured independently. Applications treat them as completely separate serial ports with no interaction between them.",
      decisionGuide: "Two separate COM ports. Open and configure independently.",
      keywords: ["virtual COM port", "COM port", "independent", "ttyUSB", "separate"]
    },
    {
      question: "Can CH9340 be used for RS-485 communication?",
      answer: "Yes, CH9340 can be used for RS-485 by adding external RS-485 transceivers. The RTS signal from each UART can control the transceiver's DE/RE pins for automatic direction control. The chip's hardware flow control supports RS-485 half-duplex operation. Example schematics are provided showing CH9340 with MAX485 or similar transceivers. This configuration is ideal for industrial multi-drop networks.",
      decisionGuide: "Add external RS-485 transceiver. Use RTS for direction control.",
      keywords: ["RS-485", "transceiver", "MAX485", "half-duplex", "industrial"]
    },
    {
      question: "What baud rates does CH9340 support?",
      answer: "CH9340 supports standard baud rates from 300bps to 4Mbps including: 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 230400, 460800, 921600, 1Mbps, 2Mbps, 4Mbps. Each port can have a different baud rate. Non-standard baud rates may be supported through custom divisor settings. The 4Mbps maximum is suitable for high-speed industrial communication.",
      decisionGuide: "Supports 300bps to 4Mbps. Each port independent.",
      keywords: ["baud rate", "4Mbps", "high speed", "standard rates", "non-standard"]
    },
    {
      question: "How do I implement automatic RS-485 direction control with CH9340?",
      answer: "For automatic RS-485 direction control with CH9340: 1) Connect UART RTS pin to RS-485 transceiver DE/RE pins; 2) Enable RTS hardware flow control in driver settings; 3) Configure automatic direction control mode; 4) The driver automatically asserts RTS during transmission. This eliminates the need for software direction control and ensures reliable half-duplex communication. Example code is provided in the SDK.",
      decisionGuide: "Use RTS hardware flow control for automatic direction switching.",
      keywords: ["RS-485", "direction control", "RTS", "automatic", "half-duplex"]
    },
    {
      question: "What is the difference between CH9340 and CH9344?",
      answer: "CH9340 provides 2 UART ports while CH9344 provides 4 UART ports. Both support up to 4Mbps baud rate and have similar features. CH9340 is suitable for dual-port applications and comes in smaller packages (SSOP20/QFN24). CH9344 is for applications requiring 4 serial ports and comes in larger packages (LQFP48). Both use the same driver architecture and API.",
      decisionGuide: "CH9340 for 2 ports. CH9344 for 4 ports. Same driver/API.",
      keywords: ["CH9344", "comparison", "4 port", "quad UART", "package"]
    },
    {
      question: "Can I use CH9340 for debugging multiple devices simultaneously?",
      answer: "Yes, CH9340 is excellent for debugging two devices simultaneously. Each UART can connect to a different target device's debug/console port. Both ports can be monitored in separate terminal windows or by a single application with multiple serial connections. This is useful for debugging communication between two devices, monitoring master and slave, or debugging multi-processor systems.",
      decisionGuide: "Excellent for dual-device debugging. Monitor both ports simultaneously.",
      keywords: ["debugging", "multi-device", "console", "terminal", "monitoring"]
    }
  ]
};

// Fix FAQs for each product
let fixedCount = 0;
data.categories.forEach(cat => {
  cat.products.forEach(prod => {
    const faqsToAdd = additionalFaqs[prod.partNumber];
    if (faqsToAdd && prod.faqs && prod.faqs.length < 5) {
      // Add FAQs until we have at least 5
      let currentCount = prod.faqs.length;
      for (let i = 0; i < faqsToAdd.length && currentCount < 6; i++) {
        prod.faqs.push(faqsToAdd[i]);
        currentCount++;
        fixedCount++;
      }
      console.log(`✅ ${prod.partNumber}: Added FAQs (now ${prod.faqs.length} total)`);
    }
  });
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log(`\n🎉 Added ${fixedCount} FAQs total`);
