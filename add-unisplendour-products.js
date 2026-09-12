const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisplendour', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('为 Unisplendour 添加更多产品...\n');

// 为FPGA分类添加4个新产品
const fpgaNewProducts = [
  {
    "partNumber": "PGL50H",
    "name": "Logos Series High-Capacity FPGA",
    "shortDescription": "Mid-range FPGA with 50K logic elements, 200 DSP blocks for industrial and communications applications.",
    "descriptionParagraphs": [
      "The PGL50H is a high-capacity member of the Logos FPGA family, offering 50,000 logic elements for complex designs.",
      "With 200 DSP blocks and 4.5 Mbit embedded memory, it addresses signal processing and data acceleration applications.",
      "The device features high-speed I/O supporting DDR3 memory interfaces and multiple PCIe Gen2 lanes."
    ],
    "specifications": {
      "Logic Elements": "50,000",
      "DSP Blocks": "200 (18x25 multipliers)",
      "Memory": "4.5 Mbit embedded RAM",
      "Transceivers": "8 channels @ 6.6 Gbps",
      "Processor": "N/A",
      "I/O Pins": "480 (up to 20 banks)",
      "I/O Performance": "N/A",
      "PLLs": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "features": [
      "50K programmable logic elements",
      "8 high-speed transceivers (6.6Gbps)",
      "200 high-performance DSP blocks",
      "PCIe Gen2 x4 hard IP",
      "DDR3 memory controller",
      "Industrial temperature support"
    ],
    "applications": [
      "Industrial automation",
      "Communications infrastructure",
      "Video processing",
      "Test equipment",
      "Medical devices"
    ],
    "faeReview": {
      "author": "Li Ming",
      "title": "FAE - Industrial Applications",
      "content": "The PGL50H hits the sweet spot for industrial applications requiring significant logic capacity without the cost of high-end SoC FPGAs. I've deployed this in several PLC and motion control projects. The 200 DSP blocks handle multi-axis motor control algorithms efficiently. The 6.6Gbps transceivers are sufficient for most industrial Ethernet and vision applications. Development flow is straightforward with Pango Design Suite. For customers transitioning from Xilinx Artix-7 or Intel Cyclone V, the PGL50H offers comparable features at competitive pricing.",
      "highlight": "Excellent capacity for industrial applications"
    },
    "alternativeParts": [
      {
        "partNumber": "XC7A50T",
        "brand": "Xilinx",
        "specifications": {
          "logic_elements": "52K",
          "dsp_blocks": "120",
          "transceivers": "0",
          "processor": "N/A",
          "memory": "2.7 Mbit"
        },
        "comparison": "PGL50H=>XC7A50T: Lower cost, no transceivers",
        "reason": "Lower cost alternative without high-speed transceivers",
        "useCase": "Applications not requiring high-speed serial interfaces",
        "link": "#"
      },
      {
        "partNumber": "PGT180H",
        "brand": "Unisplendour",
        "specifications": {
          "logic_elements": "180K",
          "dsp_blocks": "800",
          "transceivers": "16 @ 12.5Gbps",
          "processor": "Dual-core ARM",
          "memory": "13.5 Mbit"
        },
        "comparison": "PGL50H=>PGT180H: Higher performance with processor",
        "reason": "Upgrade path for processor-intensive applications",
        "useCase": "Applications requiring embedded processing",
        "link": "#"
      }
    ],
    "companionParts": [
      {
        "partNumber": "PGL50H-EVK",
        "category": "Evaluation Board",
        "description": "Development kit for PGL50H FPGA",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between PGL50H and PGT180H?",
        "answer": "PGL50H is a pure FPGA without embedded processor, while PGT180H is an SoC FPGA with dual-core ARM. PGL50H is more cost-effective for applications not requiring embedded processing.",
        "decisionGuide": "Choose PGL50H for pure FPGA applications; PGT180H for SoC requirements.",
        "keywords": ["FPGA", "SoC", "comparison"]
      }
    ]
  },
  {
    "partNumber": "PGL25H",
    "name": "Logos Series Mid-Range FPGA",
    "shortDescription": "Cost-effective FPGA with 25K logic elements for industrial control and communications.",
    "descriptionParagraphs": [
      "The PGL25H provides 25,000 logic elements in a cost-optimized package for medium-complexity designs.",
      "With 100 DSP blocks and support for DDR2/DDR3 memory, it addresses a wide range of industrial applications.",
      "The device offers excellent price-performance for designs transitioning from CPLD or small FPGAs."
    ],
    "specifications": {
      "Logic Elements": "25,000",
      "DSP Blocks": "100 (18x25 multipliers)",
      "Memory": "2.25 Mbit embedded RAM",
      "Transceivers": "4 channels @ 3.125 Gbps",
      "Processor": "N/A",
      "I/O Pins": "320 (up to 16 banks)",
      "I/O Performance": "N/A",
      "PLLs": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "features": [
      "25K programmable logic elements",
      "4 high-speed transceivers (3.125Gbps)",
      "100 DSP blocks",
      "DDR2/DDR3 support",
      "Low power consumption",
      "Multiple package options"
    ],
    "applications": [
      "Industrial control",
      "Communications interfaces",
      "Display control",
      "Protocol conversion",
      "Sensor fusion"
    ],
    "faeReview": {
      "author": "Wang Hua",
      "title": "FAE - Communications",
      "content": "The PGL25H is our go-to recommendation for customers upgrading from CPLD or small FPGAs. It offers enough capacity for most industrial control applications at a very competitive price point. The 3.125Gbps transceivers handle Gigabit Ethernet and CPRI protocols well. I've used this in numerous protocol bridge and interface conversion projects. The power consumption is low enough for thermally constrained designs. For cost-sensitive applications requiring FPGA flexibility, the PGL25H is an excellent choice.",
      "highlight": "Best price-performance for mid-range applications"
    },
    "alternativeParts": [
      {
        "partNumber": "EP4CE22",
        "brand": "Intel",
        "specifications": {
          "logic_elements": "22K",
          "dsp_blocks": "66",
          "transceivers": "0",
          "processor": "N/A",
          "memory": "1.1 Mbit"
        },
        "comparison": "PGL25H=>EP4CE22: Lower cost, no transceivers",
        "reason": "Established Cyclone IV alternative",
        "useCase": "Cost-sensitive applications without high-speed needs",
        "link": "#"
      }
    ],
    "companionParts": [
      {
        "partNumber": "PGL25H-DK",
        "category": "Development Kit",
        "description": "Starter kit for PGL25H evaluation",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "Can PGL25H replace a CPLD in my design?",
        "answer": "Yes, PGL25H can replace large CPLDs while providing room for future expansion. It offers instant-on configuration similar to CPLD and lower power per logic element.",
        "decisionGuide": "Use PGL25H when CPLD capacity is insufficient or FPGA flexibility is needed.",
        "keywords": ["CPLD", "migration", "replacement"]
      }
    ]
  },
  {
    "partNumber": "PGC4KD",
    "name": "Compact Series CPLD",
    "shortDescription": "Low-power CPLD with 4K macrocells for glue logic and simple control applications.",
    "descriptionParagraphs": [
      "The PGC4KD is a high-density CPLD providing 4,000 macrocells for complex combinational logic.",
      "With instant-on configuration and deterministic timing, it's ideal for system boot logic and control applications.",
      "The device offers low static power consumption and wide voltage range operation."
    ],
    "specifications": {
      "Logic Elements": "4,000 macrocells",
      "DSP Blocks": "N/A",
      "Memory": "N/A",
      "Transceivers": "N/A",
      "Processor": "N/A",
      "I/O Pins": "256",
      "I/O Performance": "N/A",
      "PLLs": "N/A",
      "Voltage Rating": "1.8V-3.3V",
      "Current Rating": "N/A",
      "Temperature Range": "-40°C to +85°C"
    },
    "features": [
      "4K macrocells",
      "Instant-on configuration",
      "Deterministic timing",
      "Low static power",
      "Wide voltage range",
      "JTAG ISP support"
    ],
    "applications": [
      "System boot logic",
      "Glue logic",
      "Bus interface",
      "Power sequencing",
      "Configuration control"
    ],
    "faeReview": {
      "author": "Chen Wei",
      "title": "FAE - System Design",
      "content": "The PGC4KD is perfect for system management and boot logic. Unlike FPGAs, it has instant-on capability which is critical for power sequencing and reset control. I've used this in server and telecom designs where deterministic timing is required. The 4K macrocells handle complex state machines and bus arbitration. Power consumption is minimal - typically under 100mW static. For applications that don't need FPGA reconfigurability, the PGC4KD offers a cost-effective, reliable solution.",
      "highlight": "Reliable CPLD for system management"
    },
    "alternativeParts": [
      {
        "partNumber": "EPM570",
        "brand": "Intel",
        "specifications": {
          "logic_elements": "570 macrocells",
          "dsp_blocks": "N/A",
          "transceivers": "N/A",
          "processor": "N/A",
          "memory": "N/A"
        },
        "comparison": "PGC4KD=>EPM570: Smaller capacity",
        "reason": "Established MAX II alternative",
        "useCase": "Smaller CPLD requirements",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "When should I choose CPLD over FPGA?",
        "answer": "Choose CPLD for simple logic (<1000 elements), instant-on requirements, deterministic timing, and lowest cost for small designs. Choose FPGA for complex algorithms, DSP, or high-speed interfaces.",
        "decisionGuide": "CPLD for simple/control logic; FPGA for complex processing.",
        "keywords": ["CPLD", "FPGA", "selection"]
      }
    ]
  },
  {
    "partNumber": "PGT100H",
    "name": "Titan Series Mid-Range SoC FPGA",
    "shortDescription": "SoC FPGA with 100K logic elements, single-core ARM for embedded processing applications.",
    "descriptionParagraphs": [
      "The PGT100H delivers 100,000 logic elements with integrated single-core ARM Cortex-A9 processor.",
      "With 480 DSP blocks and 12 high-speed transceivers at 10Gbps, it balances performance and cost.",
      "The device is ideal for applications requiring both embedded processing and programmable acceleration."
    ],
    "specifications": {
      "Logic Elements": "100,000",
      "DSP Blocks": "480 (18x25 multipliers)",
      "Memory": "7.5 Mbit embedded RAM",
      "Transceivers": "12 channels @ 10 Gbps",
      "Processor": "Single-core ARM Cortex-A9 @ 800MHz",
      "I/O Pins": "672 (up to 28 banks)",
      "I/O Performance": "N/A",
      "PLLs": "N/A",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "features": [
      "Single-core ARM Cortex-A9 processor",
      "100K programmable logic elements",
      "12 high-speed transceivers (10Gbps)",
      "480 DSP blocks",
      "PCIe Gen3 x4 hard IP",
      "DDR3/DDR4 memory controller"
    ],
    "applications": [
      "Industrial control systems",
      "Network appliances",
      "Video analytics",
      "Test and measurement",
      "Medical imaging"
    ],
    "faeReview": {
      "author": "Dr. Liu Yang",
      "title": "Senior FAE - SoC Applications",
      "content": "The PGT100H offers an excellent balance for SoC applications not requiring the full capacity of PGT180H. The single-core ARM is sufficient for many embedded Linux applications, and 100K LE provides ample acceleration fabric. I've deployed this in industrial controllers and network appliances with great success. The 10Gbps transceivers handle most Ethernet and storage protocols. Power consumption is reasonable for the performance level. It's a great stepping stone for customers wanting to evaluate Unisplendour SoC FPGAs before committing to larger designs.",
      "highlight": "Balanced SoC FPGA for mid-range applications"
    },
    "alternativeParts": [
      {
        "partNumber": "XC7Z020",
        "brand": "Xilinx",
        "specifications": {
          "logic_elements": "85K",
          "dsp_blocks": "220",
          "transceivers": "0",
          "processor": "Dual-core ARM",
          "memory": "4.9 Mbit"
        },
        "comparison": "PGT100H=>XC7Z020: Dual-core but no transceivers",
        "reason": "Established Zynq alternative",
        "useCase": "Applications requiring dual-core processing without high-speed IO",
        "link": "#"
      }
    ],
    "companionParts": [
      {
        "partNumber": "PGT100H-EVK",
        "category": "Evaluation Board",
        "description": "Evaluation kit for PGT100H SoC FPGA",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What software runs on the ARM processor?",
        "answer": "The ARM Cortex-A9 can run embedded Linux, FreeRTOS, or bare-metal applications. Unisplendour provides BSP and drivers for Linux development.",
        "decisionGuide": "Use Linux for complex applications; FreeRTOS for real-time control.",
        "keywords": ["ARM", "Linux", "software"]
      }
    ]
  }
];

// 为Smart Card分类添加4个新产品
const smartCardNewProducts = [
  {
    "partNumber": "THD86",
    "name": "THD86 Secure Microcontroller",
    "shortDescription": "High-security dual-interface smart card IC with EAL5+ certification for banking and ID applications.",
    "descriptionParagraphs": [
      "The THD86 is a dual-interface (contact and contactless) secure microcontroller designed for high-security applications.",
      "With Common Criteria EAL5+ certification, it meets the stringent security requirements for financial and government ID applications.",
      "The chip supports Java Card and native operating systems with comprehensive cryptographic acceleration."
    ],
    "specifications": {
      "Flash": "800 KB",
      "RAM": "48 KB",
      "EEPROM": "16 KB",
      "Interfaces": "Contact (ISO 7816) / Contactless (ISO 14443)",
      "Security": "EAL5+ certified",
      "Crypto": "AES, DES, RSA, ECC, SHA",
      "Temperature": "-25°C to +85°C"
    },
    "features": [
      "Dual-interface operation",
      "EAL5+ security certification",
      "Hardware crypto acceleration",
      "Java Card support",
      "Native OS support",
      "Advanced tamper protection"
    ],
    "applications": [
      "Banking cards",
      "National ID",
      "Passports",
      "Health cards",
      "Secure authentication"
    ],
    "faeReview": {
      "author": "Zhang Mei",
      "title": "FAE - Security Products",
      "content": "The THD86 is our flagship secure microcontroller for high-end applications. The dual-interface capability allows seamless migration from contact to contactless systems. EAL5+ certification opens doors to government and financial markets. I've supported several banking card projects with this chip - the performance is excellent for both EMV transactions and Java Card applications. The security features including side-channel attack resistance are comprehensive. For customers needing the highest security level, the THD86 is the clear choice.",
      "highlight": "EAL5+ certified for maximum security"
    },
    "alternativeParts": [
      {
        "partNumber": "THD89",
        "brand": "Unisplendour",
        "specifications": {
          "flash": "1 MB",
          "ram": "64 KB",
          "eeprom": "24 KB"
        },
        "comparison": "THD86=>THD89: Higher capacity",
        "reason": "More memory for complex applications",
        "useCase": "Applications requiring >800KB Flash",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "What is the difference between contact and contactless operation?",
        "answer": "Contact uses physical card reader connection (ISO 7816) while contactless uses RF communication (ISO 14443). Dual-interface cards can work with both types of readers.",
        "decisionGuide": "Dual-interface for maximum compatibility; single interface for cost optimization.",
        "keywords": ["contact", "contactless", "dual-interface"]
      }
    ]
  },
  {
    "partNumber": "THD20",
    "name": "THD20 Entry-Level Secure MCU",
    "shortDescription": "Cost-effective secure microcontroller for transportation and access control applications.",
    "descriptionParagraphs": [
      "The THD20 provides essential security features in a cost-optimized package for high-volume applications.",
      "With 200KB Flash and contactless-only interface, it targets transportation cards and access control systems.",
      "The chip supports MIFARE compatibility and basic cryptographic functions for secure transactions."
    ],
    "specifications": {
      "Flash": "200 KB",
      "RAM": "16 KB",
      "EEPROM": "8 KB",
      "Interfaces": "Contactless (ISO 14443 Type A)",
      "Security": "EAL4+ certified",
      "Crypto": "DES, AES, MIFARE",
      "Temperature": "-25°C to +70°C"
    },
    "features": [
      "Contactless-only interface",
      "EAL4+ security",
      "MIFARE compatible",
      "Low power consumption",
      "Fast transaction time",
      "High-volume optimized"
    ],
    "applications": [
      "Transportation cards",
      "Access control",
      "Loyalty cards",
      "Event ticketing",
      "Campus cards"
    ],
    "faeReview": {
      "author": "Li Jun",
      "title": "FAE - Smart Card",
      "content": "The THD20 is designed for cost-sensitive high-volume applications. It's perfect for transportation cards where every cent matters. The contactless-only design reduces cost while maintaining good security with EAL4+ certification. Transaction times are fast - under 200ms typical. I've deployed this in city transit systems and university campuses. The MIFARE compatibility ensures interoperability with existing infrastructure. For applications not needing banking-level security, the THD20 offers excellent value.",
      "highlight": "Cost-optimized for high-volume deployment"
    },
    "alternativeParts": [
      {
        "partNumber": "MIFARE DESFire",
        "brand": "NXP",
        "specifications": {
          "flash": "2-8 KB",
          "ram": "N/A",
          "eeprom": "N/A"
        },
        "comparison": "THD20=>DESFire: Established ecosystem",
        "reason": "Industry standard for contactless",
        "useCase": "Maximum interoperability requirements",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "Is THD20 compatible with existing MIFARE readers?",
        "answer": "Yes, THD20 supports MIFARE Classic and DESFire emulation modes for compatibility with existing infrastructure.",
        "decisionGuide": "Use MIFARE mode for compatibility; native mode for enhanced security.",
        "keywords": ["MIFARE", "compatibility", "transportation"]
      }
    ]
  },
  {
    "partNumber": "THD50",
    "name": "THD50 IoT Security Chip",
    "shortDescription": "Ultra-low-power secure element for IoT device authentication and secure boot.",
    "descriptionParagraphs": [
      "The THD50 is a compact secure element designed for IoT device security and authentication.",
      "With ultra-low power consumption and small footprint, it enables security in resource-constrained devices.",
      "The chip provides secure key storage, cryptographic acceleration, and device attestation capabilities."
    ],
    "specifications": {
      "Flash": "100 KB",
      "RAM": "8 KB",
      "EEPROM": "4 KB",
      "Interfaces": "I2C, SPI",
      "Security": "EAL4+ certified",
      "Crypto": "ECC, AES, SHA, TRNG",
      "Power": "<1μA standby"
    },
    "features": [
      "Ultra-low power",
      "Small footprint",
      "Secure boot support",
      "Device attestation",
      "Hardware key storage",
      "Multiple host interfaces"
    ],
    "applications": [
      "IoT security",
      "Device authentication",
      "Secure boot",
      "Firmware protection",
      "Cloud connectivity"
    ],
    "faeReview": {
      "author": "Wang Tao",
      "title": "FAE - IoT Security",
      "content": "The THD50 addresses the critical need for hardware security in IoT devices. The sub-1μA standby current is crucial for battery-powered sensors. I2C and SPI interfaces make integration easy with any microcontroller. The secure boot capability protects firmware from tampering. I've used this in smart home devices, industrial sensors, and healthcare wearables. The device attestation feature enables secure cloud onboarding. For any IoT device handling sensitive data, the THD50 provides essential protection.",
      "highlight": "Ultra-low power for IoT security"
    },
    "alternativeParts": [
      {
        "partNumber": "ATECC608A",
        "brand": "Microchip",
        "specifications": {
          "flash": "10.5 KB",
          "ram": "N/A",
          "eeprom": "N/A"
        },
        "comparison": "THD50=>ATECC608A: Smaller capacity",
        "reason": "Established crypto authentication chip",
        "useCase": "Minimal security requirements",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "How does THD50 enable secure boot?",
        "answer": "THD50 stores the root of trust keys and verifies firmware signatures before allowing execution. Tampered firmware is detected and blocked.",
        "decisionGuide": "Implement secure boot to protect against firmware attacks.",
        "keywords": ["secure boot", "firmware", "protection"]
      }
    ]
  },
  {
    "partNumber": "THD99",
    "name": "THD99 High-End Security Controller",
    "shortDescription": "Premium security chip with EAL6+ certification for military and government applications.",
    "descriptionParagraphs": [
      "The THD99 represents the pinnacle of Unisplendour's security technology with EAL6+ certification.",
      "Designed for the most demanding military, government, and critical infrastructure applications.",
      "The chip provides advanced side-channel attack resistance, fault injection protection, and tamper detection."
    ],
    "specifications": {
      "Flash": "2 MB",
      "RAM": "128 KB",
      "EEPROM": "64 KB",
      "Interfaces": "Contact (ISO 7816)",
      "Security": "EAL6+ certified",
      "Crypto": "All standard + post-quantum",
      "Temperature": "-40°C to +105°C"
    },
    "features": [
      "EAL6+ certification",
      "Post-quantum cryptography",
      "Advanced tamper resistance",
      "Side-channel protection",
      "Fault injection defense",
      "Military-grade reliability"
    ],
    "applications": [
      "Military systems",
      "Government ID",
      "Critical infrastructure",
      "Diplomatic communications",
      "High-security facilities"
    ],
    "faeReview": {
      "author": "Col. Chen (Ret.)",
      "title": "Senior Security Consultant",
      "content": "The THD99 is designed for applications where security is paramount. EAL6+ certification requires rigorous evaluation of both hardware and software security. The post-quantum crypto support prepares for future threats. I've consulted on military communication projects using this chip - the security margins are exceptional. Physical tamper resistance includes mesh protection and environmental sensors. For national security applications, the THD99 provides the assurance level required by defense agencies.",
      "highlight": "Maximum security for critical applications"
    },
    "alternativeParts": [
      {
        "partNumber": "SmartMX P60",
        "brand": "NXP",
        "specifications": {
          "flash": "1.5 MB",
          "ram": "96 KB",
          "eeprom": "48 KB"
        },
        "comparison": "THD99=>SmartMX: Similar certification level",
        "reason": "Established high-security platform",
        "useCase": "International government projects",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "What is the difference between EAL5+ and EAL6+?",
        "answer": "EAL6+ requires more rigorous testing including formal verification of security mechanisms. It provides higher assurance against sophisticated attacks.",
        "decisionGuide": "EAL5+ for banking/commercial; EAL6+ for military/government.",
        "keywords": ["EAL6+", "certification", "high security"]
      }
    ]
  }
];

// 为Power Management分类添加4个新产品
const powerManagementNewProducts = [
  {
    "partNumber": "USD3410",
    "name": "USD3410 Synchronous Buck Converter",
    "shortDescription": "High-efficiency 3A synchronous buck converter with wide input range for industrial applications.",
    "descriptionParagraphs": [
      "The USD3410 is a high-efficiency synchronous buck converter delivering up to 3A output current.",
      "With 4.5V to 36V input range and adjustable output, it serves diverse industrial and automotive applications.",
      "The device features peak current mode control for fast transient response and simple compensation."
    ],
    "specifications": {
      "Input Voltage": "4.5V to 36V",
      "Output Voltage": "0.8V to 24V (adjustable)",
      "Output Current": "3A continuous",
      "Switching Frequency": "300kHz to 2.2MHz",
      "Efficiency": "Up to 95%",
      "Features": "Enable, Power Good, Soft-start"
    },
    "features": [
      "Wide input voltage range",
      "High efficiency up to 95%",
      "Adjustable switching frequency",
      "Internal compensation",
      "Power Good indicator",
      "Thermal shutdown protection"
    ],
    "applications": [
      "Industrial control",
      "Automotive electronics",
      "Telecom equipment",
      "Distributed power",
      "Battery-powered systems"
    ],
    "faeReview": {
      "author": "Liu Wei",
      "title": "FAE - Power Management",
      "content": "The USD3410 is a workhorse buck converter for industrial applications. The wide input range handles everything from 5V logic to 24V industrial buses. Efficiency peaks at 95% which minimizes thermal concerns. I've used this in dozens of designs - the internal compensation makes loop stability straightforward. The adjustable frequency allows optimization for EMI or size. At 3A, it covers most microcontroller and FPGA core supplies. For reliable industrial power conversion, the USD3410 is a solid choice.",
      "highlight": "Reliable buck converter for industrial use"
    },
    "alternativeParts": [
      {
        "partNumber": "TPS54331",
        "brand": "TI",
        "specifications": {
          "vin": "3.5V-28V",
          "iout": "3A",
          "efficiency": "95%"
        },
        "comparison": "USD3410=>TPS54331: Similar performance",
        "reason": "Established industrial buck converter",
        "useCase": "Alternative source for supply security",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "What inductor value should I use?",
        "answer": "Recommended inductor range is 4.7μH to 22μH depending on switching frequency. Higher frequency allows smaller inductor but reduces efficiency.",
        "decisionGuide": "Use larger inductor for higher efficiency; smaller for compact size.",
        "keywords": ["inductor", "efficiency", "size"]
      }
    ]
  },
  {
    "partNumber": "USL1801",
    "name": "USL1801 Ultra-Low-IQ LDO",
    "shortDescription": "Ultra-low quiescent current LDO with 1.8V fixed output for battery-powered applications.",
    "descriptionParagraphs": [
      "The USL1801 is an ultra-low-power LDO consuming only 1.5μA quiescent current.",
      "Designed for battery-powered devices requiring always-on power with minimal drain.",
      "The device provides clean 1.8V output from 2.5V to 5.5V input with excellent PSRR."
    ],
    "specifications": {
      "Input Voltage": "2.5V to 5.5V",
      "Output Voltage": "1.8V (fixed)",
      "Output Current": "200mA max",
      "Quiescent Current": "1.5μA typical",
      "Dropout Voltage": "200mV @ 200mA",
      "PSRR": "70dB @ 1kHz"
    },
    "features": [
      "Ultra-low 1.5μA IQ",
      "High PSRR performance",
      "Low dropout voltage",
      "Current limit protection",
      "Thermal shutdown",
      "Small SOT-23 package"
    ],
    "applications": [
      "Battery-powered devices",
      "IoT sensors",
      "Wearable electronics",
      "Medical devices",
      "Always-on supplies"
    ],
    "faeReview": {
      "author": "Zhang Li",
      "title": "FAE - Low Power",
      "content": "The USL1801 is essential for battery-powered designs. The 1.5μA quiescent current is among the best in class - critical for multi-year battery life. I've used this in IoT sensors that run for 5+ years on coin cells. The PSRR is good enough for sensitive analog circuits. Dropout voltage is reasonable for the low current consumption. Fixed 1.8V output covers most modern MCUs and sensors. For any battery application requiring always-on power, the USL1801 should be considered.",
      "highlight": "Ultra-low power for battery applications"
    },
    "alternativeParts": [
      {
        "partNumber": "TPS7A16",
        "brand": "TI",
        "specifications": {
          "vin": "2.5V-5.5V",
          "vout": "1.8V",
          "iq": "1.2μA"
        },
        "comparison": "USL1801=>TPS7A16: Slightly lower IQ",
        "reason": "Ultra-low power alternative",
        "useCase": "Maximum battery life requirements",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "How does quiescent current affect battery life?",
        "answer": "Quiescent current is the continuous drain even at no load. For a 200mAh coin cell, 1.5μA IQ allows 15+ years standby life.",
        "decisionGuide": "Minimize IQ for always-on supplies; less critical for active applications.",
        "keywords": ["quiescent current", "battery life", "IQ"]
      }
    ]
  },
  {
    "partNumber": "USBM4056",
    "name": "USBM4056 Li-Ion Battery Charger",
    "shortDescription": "Linear Li-Ion battery charger with USB compatibility and thermal regulation.",
    "descriptionParagraphs": [
      "The USBM4056 is a complete constant-current/constant-voltage linear charger for single-cell Li-Ion batteries.",
      "With USB input compatibility and programmable charge current up to 1A, it suits portable device charging.",
      "The device includes thermal regulation to maximize charge current while limiting die temperature."
    ],
    "specifications": {
      "Input Voltage": "4.5V to 6.5V (USB compatible)",
      "Charge Current": "Programmable up to 1A",
      "Charge Voltage": "4.2V ±1%",
      "Trickle Charge": "10% of programmed current",
      "Features": "Thermal regulation, Charge status",
      "Package": "SOT-23-5"
    },
    "features": [
      "USB input compatible",
      "Programmable charge current",
      "Thermal regulation",
      "Automatic recharge",
      "Charge status output",
      "Battery temperature monitoring"
    ],
    "applications": [
      "Portable devices",
      "Bluetooth headsets",
      "Power banks",
      "Handheld instruments",
      "Wearable devices"
    ],
    "faeReview": {
      "author": "Chen Ming",
      "title": "FAE - Battery Management",
      "content": "The USBM4056 is a simple, reliable Li-Ion charger for USB-powered devices. The thermal regulation is key - it prevents overheating when charging from weak USB sources. I've used this in Bluetooth devices, power banks, and handheld meters. The charge status output simplifies MCU monitoring. 1A max current charges most small batteries quickly. The SOT-23 package is compact for space-constrained designs. For basic Li-Ion charging from USB, this is a cost-effective solution.",
      "highlight": "Simple USB Li-Ion charging solution"
    },
    "alternativeParts": [
      {
        "partNumber": "MCP73831",
        "brand": "Microchip",
        "specifications": {
          "vin": "3.75V-6V",
          "icharge": "500mA",
          "vcharge": "4.2V"
        },
        "comparison": "USBM4056=>MCP73831: Lower current",
        "reason": "Popular small charger",
        "useCase": "Lower current requirements",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "Can I charge from any USB source?",
        "answer": "Yes, USBM4056 works with standard USB ports. Charge current should be set based on USB source capability (500mA for standard USB, 1A for charging ports).",
        "decisionGuide": "Set charge current to match USB source capability.",
        "keywords": ["USB", "charging", "current"]
      }
    ]
  },
  {
    "partNumber": "USD5020",
    "name": "USD5020 20A Power Module",
    "shortDescription": "Integrated power module with 20A output, inductor included for high-current applications.",
    "descriptionParagraphs": [
      "The USD5020 is a complete DC-DC power module integrating controller, MOSFETs, and inductor in one package.",
      "Delivering up to 20A output current, it powers high-performance processors and FPGAs.",
      "The module simplifies power supply design - just add input/output capacitors.",
    ],
    "specifications": {
      "Input Voltage": "6V to 36V",
      "Output Voltage": "0.6V to 16V (adjustable)",
      "Output Current": "20A continuous",
      "Efficiency": "Up to 94%",
      "Features": "Remote sense, Power Good",
      "Package": "15x15mm QFN"
    },
    "features": [
      "20A output capability",
      "Integrated inductor",
      "High efficiency",
      "Remote voltage sense",
      "Power Good indicator",
      "Overcurrent protection"
    ],
    "applications": [
      "FPGA core supplies",
      "Processor power",
      "Network equipment",
      "Test equipment",
      "Industrial systems"
    ],
    "faeReview": {
      "author": "Dr. Wang",
      "title": "Senior FAE - Power Systems",
      "content": "The USD5020 simplifies high-current power design dramatically. Integrating the inductor eliminates the most challenging component selection and layout task. 20A is sufficient for most FPGAs and high-performance processors. I've used this in telecom equipment and test instruments. Efficiency is good at 94%, keeping thermal management manageable. The remote sense compensates for PCB drops at high current. For designs needing high current without power supply expertise, this module is ideal.",
      "highlight": "Easy high-current power solution"
    },
    "alternativeParts": [
      {
        "partNumber": "LMZ31710",
        "brand": "TI",
        "specifications": {
          "vin": "6V-36V",
          "iout": "10A",
          "efficiency": "92%"
        },
        "comparison": "USD5020=>LMZ31710: Lower current",
        "reason": "Established power module",
        "useCase": "Lower current requirements",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "Do I need external components?",
        "answer": "Only input and output capacitors are needed. The inductor is integrated. Follow the datasheet for capacitor selection.",
        "decisionGuide": "Use recommended capacitors for stable operation.",
        "keywords": ["external components", "capacitors", "design"]
      }
    ]
  }
];

// 为Industrial Control分类添加4个新产品
const industrialControlNewProducts = [
  {
    "partNumber": "USMD2208",
    "name": "USMD2208 Stepper Motor Driver",
    "shortDescription": "Dual H-bridge stepper motor driver with 2A per coil and microstepping support.",
    "descriptionParagraphs": [
      "The USMD2208 is a dual full-bridge driver designed for bipolar stepper motor control.",
      "With 2A per coil capability and up to 1/16 microstepping, it provides smooth, precise motion control.",
      "The device includes overcurrent protection, thermal shutdown, and undervoltage lockout for reliable operation."
    ],
    "specifications": {
      "Motor Type": "Bipolar Stepper",
      "Peak Current": "2A per coil",
      "Logic Voltage": "3.3V-5V",
      "Motor Voltage": "8V-35V",
      "Microstepping": "Full, 1/2, 1/4, 1/8, 1/16",
      "Protection": "OCP, TSD, UVLO"
    },
    "features": [
      "Dual H-bridge design",
      "Up to 1/16 microstepping",
      "2A peak current capability",
      "Low RDS(on) MOSFETs",
      "Multiple decay modes",
      "Comprehensive protection"
    ],
    "applications": [
      "3D printers",
      "CNC machines",
      "Robotics",
      "Automated equipment",
      "Textile machines"
    ],
    "faeReview": {
      "author": "Zhou Jian",
      "title": "FAE - Motor Control",
      "content": "The USMD2208 is a versatile stepper driver for medium-power applications. The 2A capacity handles most NEMA 17 and smaller NEMA 23 motors. Microstepping up to 1/16 provides smooth motion for precision applications. I've used this in 3D printers, CNC controllers, and automated test fixtures. The decay mode selection helps optimize torque and noise. Protection features prevent damage from stalled motors. For stepper applications not needing extreme power, the USMD2208 offers good value.",
      "highlight": "Reliable stepper motor control"
    },
    "alternativeParts": [
      {
        "partNumber": "A4988",
        "brand": "Allegro",
        "specifications": {
          "current": "2A",
          "microstep": "1/16",
          "voltage": "8-35V"
        },
        "comparison": "USMD2208=>A4988: Similar features",
        "reason": "Popular stepper driver",
        "useCase": "Alternative source",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "What is microstepping?",
        "answer": "Microstepping divides each full step into smaller increments (1/2, 1/4, etc.) for smoother motion and finer position control. Higher microstepping reduces torque but improves smoothness.",
        "decisionGuide": "Use 1/16 for smoothness; full step for maximum torque.",
        "keywords": ["microstepping", "smoothness", "torque"]
      }
    ]
  },
  {
    "partNumber": "USPM6530",
    "name": "USPM6530 Three-Phase Metering IC",
    "shortDescription": "High-accuracy three-phase energy metering IC with 0.1% accuracy for smart grid applications.",
    "descriptionParagraphs": [
      "The USPM6530 is a precision three-phase energy metering IC for smart meters and power monitoring.",
      "With 0.1% accuracy across wide dynamic range, it meets utility-grade metering requirements.",
      "The device measures active, reactive, and apparent energy with per-phase and total accumulation."
    ],
    "specifications": {
      "Phases": "Three-phase",
      "Accuracy": "0.1% (Class 0.1)",
      "Dynamic Range": "1000:1",
      "ADC Resolution": "24-bit",
      "Interface": "SPI, UART",
      "Features": "Tamper detection, Temperature compensation"
    },
    "features": [
      "0.1% measurement accuracy",
      "Wide dynamic range",
      "Active/reactive/apparent energy",
      "Per-phase monitoring",
      "Tamper detection",
      "Temperature compensation"
    ],
    "applications": [
      "Smart electricity meters",
      "Power quality monitors",
      "Industrial metering",
      "Solar inverters",
      "EV charging stations"
    ],
    "faeReview": {
      "author": "Li Hua",
      "title": "FAE - Energy Metering",
      "content": "The USPM6530 delivers utility-grade accuracy for smart metering. 0.1% class meets the most stringent utility requirements. The wide dynamic range handles both low standby and high peak loads accurately. I've supported smart meter designs using this IC - calibration is straightforward with the provided software. Tamper detection features help utilities detect fraud. Temperature compensation maintains accuracy across environmental conditions. For smart grid applications requiring precise measurement, the USPM6530 is an excellent choice.",
      "highlight": "Utility-grade metering accuracy"
    },
    "alternativeParts": [
      {
        "partNumber": "ADE7758",
        "brand": "ADI",
        "specifications": {
          "accuracy": "0.1%",
          "phases": "3-phase",
          "interface": "SPI"
        },
        "comparison": "USPM6530=>ADE7758: Similar accuracy",
        "reason": "Established metering IC",
        "useCase": "Alternative source",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "What accuracy class do I need?",
        "answer": "Class 0.1 (0.1%) for utility billing; Class 0.5 or 1.0 for monitoring. Higher accuracy increases cost but ensures fair billing.",
        "decisionGuide": "Use 0.1% for billing; 0.5% or 1% for monitoring applications.",
        "keywords": ["accuracy", "class", "metering"]
      }
    ]
  },
  {
    "partNumber": "USIC1203",
    "name": "USIC1203 BLDC Motor Controller",
    "shortDescription": "Three-phase BLDC motor controller with sensorless FOC and integrated gate drivers.",
    "descriptionParagraphs": [
      "The USIC1203 is a complete BLDC motor controller with sensorless field-oriented control (FOC).",
      "Integrated gate drivers simplify power stage design while advanced algorithms ensure smooth operation.",
      "The device supports speeds up to 100,000 RPM for high-performance applications."
    ],
    "specifications": {
      "Motor Type": "3-phase BLDC/PMSM",
      "Control": "Sensorless FOC",
      "Voltage": "12V-60V",
      "Current": "10A continuous",
      "Speed": "Up to 100,000 RPM",
      "Interface": "PWM, Analog, UART"
    },
    "features": [
      "Sensorless FOC algorithm",
      "Integrated gate drivers",
      "Speed and torque control",
      "Field weakening",
      "Protection features",
      "Configurable parameters"
    ],
    "applications": [
      "Drone motors",
      "Power tools",
      "Fans and blowers",
      "Pumps",
      "Industrial drives"
    ],
    "faeReview": {
      "author": "Wang Feng",
      "title": "FAE - Motor Control",
      "content": "The USIC1203 makes BLDC control accessible without deep motor control expertise. The sensorless FOC runs smoothly from low to high speeds. I've used this in drone ESCs, power tools, and high-speed fans. The integrated gate drivers reduce component count significantly. Field weakening extends the speed range beyond base speed. Parameter configuration allows tuning for different motors. For BLDC applications requiring high performance, the USIC1203 accelerates development considerably.",
      "highlight": "Complete BLDC control solution"
    },
    "alternativeParts": [
      {
        "partNumber": "STSPIN32F0",
        "brand": "STMicroelectronics",
        "specifications": {
          "voltage": "6.7V-45V",
          "current": "10A",
          "control": "FOC"
        },
        "comparison": "USIC1203=>STSPIN32F0: Similar integration",
        "reason": "Integrated BLDC controller",
        "useCase": "Alternative solution",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "What is FOC and why use it?",
        "answer": "Field-Oriented Control (FOC) provides smooth torque and efficient operation across speed range. It's superior to trapezoidal commutation for performance applications.",
        "decisionGuide": "Use FOC for smooth torque and efficiency; trapezoidal for simple applications.",
        "keywords": ["FOC", "field-oriented control", "efficiency"]
      }
    ]
  },
  {
    "partNumber": "USIC0802",
    "name": "USIC0802 DC Motor Driver",
    "shortDescription": "Dual H-bridge DC motor driver with 8A peak current for robotics and automation.",
    "descriptionParagraphs": [
      "The USIC0802 is a robust dual H-bridge driver for DC motor control in industrial and robotics applications.",
      "With 8A peak current capability and wide voltage range, it handles demanding motor loads.",
      "The device includes current sensing, overcurrent protection, and thermal management features."
    ],
    "specifications": {
      "Motor Type": "DC Brushed",
      "Peak Current": "8A per channel",
      "Continuous Current": "4A per channel",
      "Voltage": "6V-40V",
      "Control": "PWM, Direction, Brake",
      "Protection": "OCP, TSD, UVLO"
    },
    "features": [
      "Dual H-bridge configuration",
      "8A peak current",
      "Current sensing output",
      "PWM speed control",
      "Brake/coast modes",
      "Comprehensive protection"
    ],
    "applications": [
      "Robotics",
      "Automated guided vehicles",
      "Industrial automation",
      "Medical equipment",
      "Automotive actuators"
    ],
    "faeReview": {
      "author": "Chen Gang",
      "title": "FAE - Motion Control",
      "content": "The USIC0802 is a workhorse DC motor driver for industrial applications. The 8A peak handles startup and stall currents well. I've used this in AGVs, robotic arms, and industrial actuators. Current sensing enables torque control and stall detection. The protection features prevent damage during fault conditions. Wide voltage range accommodates different motor requirements. For DC motor applications needing reliable performance, the USIC0802 is a solid choice.",
      "highlight": "Robust DC motor control"
    },
    "alternativeParts": [
      {
        "partNumber": "DRV8842",
        "brand": "TI",
        "specifications": {
          "current": "5A",
          "voltage": "8.2V-45V"
        },
        "comparison": "USIC0802=>DRV8842: Lower current",
        "reason": "Single H-bridge alternative",
        "useCase": "Lower current requirements",
        "link": "#"
      }
    ],
    "companionParts": [],
    "faqs": [
      {
        "question": "How do I control motor speed?",
        "answer": "Motor speed is controlled by PWM duty cycle. Higher duty cycle = higher speed. Direction is set by logic levels on direction pins.",
        "decisionGuide": "Use PWM for speed control; direction pins for rotation direction.",
        "keywords": ["PWM", "speed control", "direction"]
      }
    ]
  }
];

// 添加新产品到各个分类
products.categories.forEach(cat => {
  if (cat.id === 'fpga-products') {
    cat.products.push(...fpgaNewProducts);
    console.log(`✅ FPGA Products: 添加 ${fpgaNewProducts.length} 个新产品，现在共 ${cat.products.length} 个`);
  } else if (cat.id === 'smart-card-ics') {
    cat.products.push(...smartCardNewProducts);
    console.log(`✅ Smart Card ICs: 添加 ${smartCardNewProducts.length} 个新产品，现在共 ${cat.products.length} 个`);
  } else if (cat.id === 'power-management') {
    cat.products.push(...powerManagementNewProducts);
    console.log(`✅ Power Management: 添加 ${powerManagementNewProducts.length} 个新产品，现在共 ${cat.products.length} 个`);
  } else if (cat.id === 'industrial-control') {
    cat.products.push(...industrialControlNewProducts);
    console.log(`✅ Industrial Control: 添加 ${industrialControlNewProducts.length} 个新产品，现在共 ${cat.products.length} 个`);
  }
});

// 保存更新后的数据
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

console.log('\n✅ Unisplendour 产品更新完成！');
console.log('\n更新后的产品数量：');
products.categories.forEach((cat, i) => {
  console.log(`  ${i + 1}. ${cat.name}: ${cat.products.length} 个产品`);
});
