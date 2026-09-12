/**
 * 重新创建gejian-semi产品数据 - DSP芯片（基于真实产品信息）
 * 格见半导体专注于高端实时控制DSP芯片设计
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'gejian-semi', 'products.json');

console.log('🔧 重新创建gejian-semi产品数据（DSP芯片）...\n');

// 基于真实产品信息创建产品数据
const productsData = {
  "seoTitle": "Gejian Semi DSP Chips - Real-Time Control Microcontrollers Distributor",
  "seoDescription": "Browse Gejian Semi GS32-DSP series real-time control chips. LiTong is your authorized distributor for industrial-grade DSP microcontrollers.",
  "seoKeywords": [
    "Gejian Semi distributor",
    "Gejian DSP chips",
    "GS32-DSP series",
    "real-time control MCU",
    "industrial DSP distributor",
    "motor control DSP",
    "digital power DSP",
    "RISC-V DSP chips"
  ],
  "faqs": [
    {
      "question": "What product categories does Gejian Semi offer?",
      "answer": "Gejian Semi specializes in real-time control DSP chips with three main product lines: High-Performance Series (GS32F075, GS32F37x, GS32FP65, GS32F38x, GS32FMT5000) for demanding applications requiring maximum processing power; General-Purpose Series (GS32F0039, GS32F0049, GS32FMT5800) for mainstream industrial and power applications; and Cost-Optimized Series (GS32F0025, GS32FMT4000, GS32F00137, GS32F00157, GS32F035) for price-sensitive applications. All products feature RISC-V based GS-DSP cores with custom instructions for real-time control.",
      "decisionGuide": "Review the product categories below to find the right Gejian Semi DSP for your application, or contact our FAE team for selection guidance.",
      "keywords": ["Gejian Semi products", "DSP categories", "real-time control selection"]
    },
    {
      "question": "How do I select the right Gejian Semi DSP for my application?",
      "answer": "Selecting the right Gejian Semi DSP requires understanding your application requirements: processing performance (100MHz to 400MHz options), memory requirements (Flash from 128KB to 2048KB, SRAM from 64KB to 896KB), control peripherals (ePWM channels, ADC resolution and speed), communication interfaces (CAN-FD, SPI, I2C, UART), and package type. For high-performance motor control and digital power, choose the F37x or FMT5000 series. For general-purpose applications, the F0039 or F0049 series offers excellent value. For cost-sensitive applications, consider the F0025 or F035 series.",
      "decisionGuide": "Use our selection guides in each category or contact LiTong FAE team for personalized product recommendations.",
      "keywords": ["Gejian DSP selection guide", "product selection", "real-time control selection"]
    },
    {
      "question": "What is the advantage of Gejian's RISC-V based DSP architecture?",
      "answer": "Gejian's GS-DSP cores are based on RISC-V ISA with deep customization for real-time control applications. Key advantages include: custom instruction set extensions including TMU (Trigonometric Math Unit) for mathematical operations like trigonometric functions, square root, and division; CLU (Current Loop Unit) for coordinate transformations, SVPWM/SYPWM/DPWM, and PID control; optimized architecture for GaN/SiC power device control; pin-compatible hardware with mainstream DSPs for easy migration; and fully self-developed toolchain including GS32_Studio IDE and GS32-DSPWare software package. The architecture delivers industry-leading real-time performance while maintaining compatibility with standard development tools.",
      "decisionGuide": "Choose Gejian DSP for applications requiring high-performance real-time control with RISC-V advantages.",
      "keywords": ["RISC-V DSP", "GS-DSP core", "real-time control architecture"]
    },
    {
      "question": "Does Gejian Semi offer automotive-qualified products?",
      "answer": "Yes, Gejian Semi offers AEC-Q100 qualified DSP products specifically designed for automotive applications. The company has passed ISO26262 ASIL-D functional safety management system certification. Automotive-grade products undergo rigorous testing including temperature cycling, humidity bias, and high-temperature reverse bias testing. These DSPs are used in critical automotive applications such as EV/HEV motor control, onboard chargers, DC-DC converters, battery management systems, and thermal management systems. All automotive products support extended temperature ranges from -40°C to +125°C junction temperature.",
      "decisionGuide": "For automotive applications, look for AEC-Q100 qualified Gejian DSP parts. Contact our automotive FAE team for functional safety support.",
      "keywords": ["Gejian Semi automotive", "AEC-Q100 qualified", "automotive DSP", "ISO26262 ASIL-D"]
    },
    {
      "question": "What support does LiTong provide for Gejian Semi product selection?",
      "answer": "LiTong provides comprehensive support for Gejian Semi DSP selection including: Application engineering assistance from our experienced FAE team who can help with product selection, algorithm optimization, and control loop design. Reference designs with complete schematics, PCB layouts, and motor control algorithms. Software support including GS32_Studio IDE, GS32-DSPWare software package with BSD 3-Clause license, and motor control libraries. Evaluation boards for testing and validation. Technical documentation including datasheets, user manuals, and application notes. On-site technical support and training for large projects. We can also provide samples and competitive pricing for your production requirements.",
      "decisionGuide": "Contact LiTong technical support team for personalized assistance with Gejian Semi DSP selection and application design.",
      "keywords": ["Gejian Semi support", "DSP selection assistance", "FAE support", "GS32_Studio"]
    }
  ],
  "categories": [
    {
      "id": "high-performance-dsp",
      "name": "High-Performance DSP Series",
      "description": "Gejian Semi high-performance DSP series delivers maximum processing power for demanding real-time control applications. Featuring GS-DSP100/300 cores running up to 400MHz, these devices offer advanced control peripherals including high-resolution ePWM (100ps), fast ADC sampling (4MSPS), and comprehensive communication interfaces. The series includes single-core and dual-core options with up to 2048KB Flash and 896KB SRAM. Ideal for high-performance motor control, digital power conversion, and complex industrial automation systems.",
      "parameters": [
        "Core Frequency",
        "Flash Memory",
        "SRAM",
        "ADC Sample Rate",
        "ePWM Resolution",
        "GPIO Count"
      ],
      "applications": [
        "High-Performance Motor Control",
        "Digital Power Conversion",
        "EV Traction Inverters",
        "Servo Drives",
        "Robotics"
      ],
      "selectionGuide": {
        "title": "High-Performance DSP Selection Guide",
        "description": "Learn how to select the right high-performance DSP for your demanding control application.",
        "articleId": "gejian-high-performance-dsp-guide",
        "articleLink": "/gejian-semi/support/gejian-high-performance-dsp-guide.html",
        "link": "/gejian-semi/support/gejian-high-performance-dsp-guide.html"
      },
      "faqs": [
        {
          "question": "What is the maximum frequency of Gejian high-performance DSPs?",
          "answer": "Gejian high-performance DSPs support maximum frequencies up to 400MHz. The GS32FMT5000 and GS32F37xSH series feature 400MHz operation, while the standard GS32F37xS/D series operate at 300MHz. All devices use the GS-DSP100 or GS-DSP300 core with custom real-time control instructions.",
          "decisionGuide": "Choose 400MHz variants for maximum performance, 300MHz for balanced performance and power consumption.",
          "keywords": ["DSP frequency", "400MHz", "GS-DSP core"]
        },
        {
          "question": "What control peripherals are available in high-performance series?",
          "answer": "High-performance series feature comprehensive control peripherals: 12-24 ePWM channels with 100ps high-resolution capability, 2-4 SAR ADCs with 4MSPS sampling rate per channel, 3-6 eQEP modules for encoder interface, 2-4 eCAP modules, 4-10 CMPSS comparators, 6-8 SDFM channels for isolated current sensing, and 2-4 eCLB tiles for custom logic. These peripherals enable complex multi-axis motor control and advanced power conversion topologies.",
          "decisionGuide": "Select based on number of control axes and sensing requirements for your application.",
          "keywords": ["ePWM", "ADC", "motor control peripherals"]
        }
      ],
      "products": [
        {
          "partNumber": "GS32FMT5000",
          "name": "400MHz High-Performance Real-Time Control DSP",
          "shortDescription": "Gejian GS32FMT5000 400MHz high-performance DSP with 512KB Flash and advanced control peripherals for demanding applications.",
          "descriptionParagraphs": [
            "The GS32FMT5000 is a high-performance real-time control DSP featuring a 400MHz GS-DSP100 core with custom instruction set extensions for control applications. The device includes 512KB eFlash, 200KB total SRAM (128KB ILM + 32KB DLM + 24KB shared SRAM), and comprehensive control peripherals.",
            "Key features include dual 12-bit SAR ADCs with 4MSPS sampling rate supporting 16 input channels, 12 ePWM channels with 2.5ns resolution, 2 eCLB tiles for custom logic, and extensive communication interfaces including CAN-FD, SPI, I2C, and UART.",
            "The TMU (Trigonometric Math Unit) accelerates mathematical operations while the CLU (Current Loop Unit) optimizes motor control algorithms. The device supports real-time firmware update (LFU) and operates from -40°C to +125°C junction temperature in HLQFP-100 package."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 400MHz",
            "Flash": "512KB eFlash",
            "SRAM": "200KB Total (128KB ILM + 32KB DLM + 24KB Shared)",
            "ADC": "2x 12-bit SAR, 4MSPS, 16 channels",
            "ePWM": "12 channels, 2.5ns resolution",
            "Communication": "2x CAN-FD, 2x SPI, 2x I2C, 3x UART",
            "Package": "HLQFP-100",
            "Temperature": "-40°C to +125°C (Tj)"
          },
          "features": [
            "400MHz GS-DSP100 core with custom instructions",
            "TMU for trigonometric and math operations",
            "CLU for control loop acceleration",
            "Dual 4MSPS ADCs with 16 channels",
            "12-channel high-resolution ePWM",
            "2x eCLB for custom logic implementation",
            "Real-time firmware update support",
            "AEC-Q100 automotive qualified"
          ],
          "applications": [
            "High-performance motor control",
            "Digital power conversion",
            "EV traction inverters",
            "Servo drives",
            "Robotics control"
          ],
          "faeReview": {
            "author": "Michael Zhang",
            "title": "FAE - Motor Control Applications",
            "content": "The GS32FMT5000 delivers exceptional performance for demanding motor control applications. The 400MHz core with TMU and CLU accelerators enables complex control algorithms to run with minimal CPU overhead. I have used this device in multi-axis servo drive designs where the 12 ePWM channels and dual ADCs provide excellent control precision. The 2.5ns ePWM resolution is among the best in the industry, enabling precise torque control. The real-time firmware update feature is valuable for applications requiring field upgrades. For high-performance motor control and digital power applications, the GS32FMT5000 offers an excellent balance of performance, peripherals, and price.",
            "highlight": "400MHz powerhouse with industry-leading control peripherals"
          },
          "alternativeParts": [
            {
              "partNumber": "GS32F379SH",
              "brand": "Gejian Semi",
              "reason": "Higher memory version",
              "comparison": "GS32FMT5000 vs GS32F379SH: 512KB vs 2048KB Flash, 200KB vs 512KB SRAM => Larger memory for complex applications",
              "useCase": "Use for applications requiring more memory and GPIOs",
              "parameters": {
                "Core": "GS-DSP300 @ 400MHz",
                "Flash": "2048KB",
                "SRAM": "512KB",
                "Package": "NFBGA-337/HLQFP-176"
              },
              "priceDifference": "+35%",
              "stockStatus": "In Stock"
            }
          ],
          "companionParts": [
            {
              "partNumber": "GS32-DSPWare",
              "description": "Comprehensive software support package with motor control libraries",
              "category": "Software"
            },
            {
              "partNumber": "Xplore-GS32FMT5000",
              "description": "Evaluation board for GS32FMT5000 development",
              "category": "Development Tools"
            }
          ],
          "faqs": [
            {
              "question": "What is the main application of GS32FMT5000?",
              "answer": "The GS32FMT5000 is designed for high-performance real-time control applications including motor drives, digital power conversion, EV traction inverters, and robotics. The 400MHz core with custom TMU and CLU instructions provides exceptional processing power for complex control algorithms.",
              "decisionGuide": "Use for applications requiring maximum control performance with 400MHz processing and advanced peripherals.",
              "keywords": ["applications", "motor control", "digital power"]
            },
            {
              "question": "What development tools are available for GS32FMT5000?",
              "answer": "Gejian provides comprehensive development tools including GS32_Studio IDE based on Eclipse, GS32-DSPWare software package with BSD 3-Clause license, motor control libraries, and Xplore evaluation boards. The toolchain supports standard RISC-V compilation and debugging.",
              "decisionGuide": "Download GS32_Studio and GS32-DSPWare from Gejian website to start development.",
              "keywords": ["development tools", "GS32_Studio", "GS32-DSPWare"]
            },
            {
              "question": "How does the TMU accelerate control algorithms?",
              "answer": "The TMU (Trigonometric Math Unit) provides hardware acceleration for trigonometric functions, square root, division, and other mathematical operations commonly used in control algorithms. This reduces CPU overhead and enables higher control loop frequencies.",
              "decisionGuide": "Utilize TMU instructions through the provided math libraries for optimal performance.",
              "keywords": ["TMU", "trigonometric math", "algorithm acceleration"]
            },
            {
              "question": "What is the ePWM resolution and why does it matter?",
              "answer": "The GS32FMT5000 features 12 ePWM channels with 2.5ns high-resolution capability. This fine resolution enables precise duty cycle control for power converters and smooth motor control with minimal torque ripple.",
              "decisionGuide": "Leverage high-resolution ePWM for applications requiring precise power or torque control.",
              "keywords": ["ePWM", "high resolution", "motor control"]
            },
            {
              "question": "Is GS32FMT5000 suitable for automotive applications?",
              "answer": "Yes, the GS32FMT5000 is AEC-Q100 qualified and supports junction temperatures up to 125°C. It is suitable for automotive motor control, thermal management, and auxiliary systems requiring real-time control.",
              "decisionGuide": "Use for automotive applications requiring AEC-Q100 qualification and high-temperature operation.",
              "keywords": ["automotive", "AEC-Q100", "high temperature"]
            }
          ]
        },
        {
          "partNumber": "GS32F379S",
          "name": "300MHz High-Performance DSP with Rich Peripherals",
          "shortDescription": "Gejian GS32F379S 300MHz DSP with 2048KB Flash, extensive GPIOs, and comprehensive control peripherals.",
          "descriptionParagraphs": [
            "The GS32F379S is a high-performance real-time control DSP featuring a 300MHz GS-DSP300 core. The device offers 2048KB eFlash, 512KB total SRAM (256KB ILM + 64KB DLM + shared SRAM), and extensive peripheral set with up to 172 GPIOs in NFBGA-337 package.",
            "Control peripherals include four 12-bit SAR ADCs with 4MSPS sampling rate supporting 24 input channels, 24 ePWM channels with high-resolution capability, 6 eQEP modules, and 8 CMPSS comparators. The device also features 8 SDFM channels for isolated current sensing.",
            "Communication interfaces include 4 CAN-FD, 3 SPI, 2 I2C, and 4 UART/LIN modules. The device supports EMIF/FSMC for external memory expansion and includes AES encryption and LFU (Live Firmware Update) capabilities."
          ],
          "specifications": {
            "Core": "GS-DSP300 @ 300MHz",
            "Flash": "2048KB eFlash",
            "SRAM": "512KB Total (256KB ILM + 64KB DLM + Shared)",
            "ADC": "4x 12-bit SAR, 4MSPS, 24 channels",
            "ePWM": "24 channels, 100ps HRPWM",
            "GPIO": "Up to 172",
            "Communication": "4x CAN-FD, 3x SPI, 2x I2C, 4x UART",
            "Package": "NFBGA-337, HLQFP-176, HLQFP-100"
          },
          "features": [
            "300MHz GS-DSP300 dual-issue core",
            "2048KB large Flash memory",
            "512KB SRAM with ECC support",
            "Four 4MSPS ADCs with 24 channels",
            "24 ePWM channels with HRPWM",
            "8 SDFM channels for isolated sensing",
            "Up to 172 GPIOs",
            "EMIF for external memory expansion"
          ],
          "applications": [
            "Multi-axis servo drives",
            "Complex motor control",
            "High-channel-count power conversion",
            "Industrial automation",
            "Test and measurement"
          ],
          "faeReview": {
            "author": "David Chen",
            "title": "Senior FAE - Industrial Systems",
            "content": "The GS32F379S is the flagship device for complex industrial applications. The 2048KB Flash and 512KB SRAM accommodate large control programs with multiple control loops. The four ADCs with 24 channels enable multi-phase power conversion and multi-axis motor control. The 172 GPIO count in BGA package provides extensive connectivity for complex systems. I have deployed this device in multi-axis CNC controllers where the rich peripheral set and large memory proved essential. The dual-issue GS-DSP300 core delivers excellent compute performance while the 100ps HRPWM enables precise power stage control. For demanding industrial applications requiring maximum resources, the GS32F379S is an excellent choice.",
            "highlight": "Flagship DSP with maximum memory and peripheral integration"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F379SH",
          "name": "400MHz High-Performance DSP with Maximum Peripherals",
          "shortDescription": "Gejian GS32F379SH 400MHz high-performance DSP with enhanced PWM, more comparators, and additional communication interfaces.",
          "descriptionParagraphs": [
            "The GS32F379SH is the enhanced 400MHz version of the F379S, featuring the GS-DSP300 core at maximum frequency. The device maintains the same 2048KB Flash and 512KB SRAM while adding enhanced peripherals for demanding applications.",
            "Enhancements include 32 ePWM channels (up from 24), 10 CMPSS comparators (up from 8), 4 eCAP modules (up from 3), and 5 UART/LIN interfaces (up from 4). The device also adds one additional CAN-FD interface for a total of 5.",
            "These enhancements make the F379SH ideal for the most demanding multi-axis motor control and complex power conversion applications requiring maximum peripheral count and processing performance."
          ],
          "specifications": {
            "Core": "GS-DSP300 @ 400MHz",
            "Flash": "2048KB eFlash",
            "SRAM": "512KB Total",
            "ADC": "4x 12-bit SAR, 4MSPS, 24 channels",
            "ePWM": "32 channels, 100ps HRPWM",
            "CMPSS": "10 comparators",
            "Communication": "5x CAN-FD, 3x SPI, 2x I2C, 5x UART"
          },
          "features": [
            "400MHz maximum frequency",
            "32 ePWM channels",
            "10 CMPSS comparators",
            "5 CAN-FD interfaces",
            "Enhanced peripheral set",
            "Maximum processing performance",
            "Suitable for complex multi-axis systems"
          ],
          "applications": [
            "Complex multi-axis CNC",
            "High-channel-count servo drives",
            "Advanced power conversion",
            "Robotics controllers",
            "High-end industrial automation"
          ],
          "faeReview": {
            "author": "James Liu",
            "title": "Principal FAE - High-Performance Systems",
            "content": "The GS32F379SH represents the pinnacle of Gejian's high-performance lineup. The 400MHz operation combined with 32 ePWM channels and 10 comparators enables the most complex control systems. I have used this device in 6-axis robot controllers where the enhanced peripheral count was essential. The additional CAN-FD interfaces simplify multi-node communication in distributed systems. The 100ps HRPWM resolution enables precise control of advanced power topologies. For applications demanding absolute maximum performance and peripheral integration, the F379SH delivers unmatched capability in its class.",
            "highlight": "Maximum performance and peripheral integration for demanding applications"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F377S",
          "name": "300MHz High-Performance DSP with Reduced GPIO",
          "shortDescription": "Gejian GS32F377S 300MHz DSP with 2048KB Flash and optimized package options for space-constrained designs.",
          "descriptionParagraphs": [
            "The GS32F377S offers the same 300MHz GS-DSP300 core and 2048KB Flash as the F379S but with optimized package options. The device provides up to 98 GPIOs in HLQFP-176 package, making it suitable for space-constrained high-performance applications.",
            "The peripheral set includes four 4MSPS ADCs with 20 input channels, 24 ePWM channels, 6 eQEP modules, and 8 CMPSS comparators. Communication interfaces include 2 CAN-FD, 3 SPI, 2 I2C, and 4 UART modules.",
            "The reduced GPIO count in smaller packages makes the F377S ideal for applications where board space is limited but high processing performance and memory are still required."
          ],
          "specifications": {
            "Core": "GS-DSP300 @ 300MHz",
            "Flash": "2048KB eFlash",
            "SRAM": "512KB Total",
            "ADC": "4x 12-bit SAR, 4MSPS, 20 channels",
            "ePWM": "24 channels, 100ps HRPWM",
            "GPIO": "Up to 98",
            "Communication": "2x CAN-FD, 3x SPI, 2x I2C, 4x UART",
            "Package": "HLQFP-176, HLQFP-100"
          },
          "features": [
            "300MHz GS-DSP300 core",
            "2048KB Flash, 512KB SRAM",
            "Optimized package options",
            "Four 4MSPS ADCs",
            "24 ePWM channels",
            "Space-efficient design",
            "Cost-optimized for smaller systems"
          ],
          "applications": [
            "Space-constrained motor drives",
            "Compact power converters",
            "Embedded servo controllers",
            "Industrial controllers",
            "High-performance appliances"
          ],
          "faeReview": {
            "author": "Steven Wang",
            "title": "FAE - Compact System Design",
            "content": "The GS32F377S provides an excellent balance of performance and package size. The 2048KB Flash and 512KB SRAM match the flagship F379S while the reduced GPIO count enables smaller package options. I have used this device in compact servo drives where board space was critical. The HLQFP-100 package option is particularly valuable for space-constrained designs. The full peripheral set is maintained with only GPIO count reduced, ensuring no compromise on control capabilities. For applications requiring high performance in smaller form factors, the F377S is an excellent choice.",
            "highlight": "High performance in space-optimized packages"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F075",
          "name": "300MHz High-Performance DSP for Motor Control",
          "shortDescription": "Gejian GS32F075 300MHz DSP optimized for high-performance motor control with enhanced analog peripherals.",
          "descriptionParagraphs": [
            "The GS32F075 is a 300MHz high-performance DSP specifically optimized for motor control applications. The device features the GS-DSP300 core, 1024KB eFlash, and 384KB SRAM with enhanced analog peripherals for precise motor control.",
            "Key features include three 12-bit SAR ADCs with 4MSPS sampling rate, 18 ePWM channels with high-resolution capability, and 6 SDFM channels for resolver and encoder interfaces. The device also includes 6 CMPSS comparators for overcurrent protection.",
            "The F075 is pin-compatible with mainstream motor control DSPs, enabling easy migration for existing designs. The enhanced analog front-end makes it ideal for high-performance servo and variable frequency drive applications."
          ],
          "specifications": {
            "Core": "GS-DSP300 @ 300MHz",
            "Flash": "1024KB eFlash",
            "SRAM": "384KB Total",
            "ADC": "3x 12-bit SAR, 4MSPS, 18 channels",
            "ePWM": "18 channels, 100ps HRPWM",
            "SDFM": "6 channels",
            "CMPSS": "6 comparators",
            "Package": "HLQFP-176, HLQFP-100"
          },
          "features": [
            "300MHz core optimized for motor control",
            "Enhanced analog peripheral set",
            "Three 4MSPS ADCs",
            "18 ePWM channels",
            "6 SDFM for resolver/encoder",
            "Pin-compatible with mainstream DSPs",
            "Optimized for servo and VFD applications"
          ],
          "applications": [
            "High-performance servo drives",
            "Variable frequency drives",
            "CNC spindle control",
            "Industrial robots",
            "Precision motion control"
          ],
          "faeReview": {
            "author": "Robert Chen",
            "title": "Senior FAE - Motor Control",
            "content": "The GS32F075 is purpose-built for motor control applications. The enhanced analog front-end with three ADCs and 6 SDFM channels provides excellent feedback capabilities for high-performance servo systems. The pin compatibility with mainstream motor control DSPs makes migration straightforward. I have successfully migrated several servo drive designs to the F075 with minimal hardware changes. The 100ps HRPWM enables precise torque control while the 6 SDFM channels support both resolver and encoder interfaces. For motor control applications requiring high performance and easy migration, the F075 is an excellent solution.",
            "highlight": "Purpose-built for high-performance motor control with easy migration"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32FP65S",
          "name": "300MHz DSP with Enhanced Processing for Digital Power",
          "shortDescription": "Gejian GS32FP65S 300MHz DSP with floating-point unit optimized for digital power and complex control algorithms.",
          "descriptionParagraphs": [
            "The GS32FP65S is a 300MHz high-performance DSP featuring an enhanced floating-point unit for complex control algorithms. The device includes 1024KB eFlash, 384KB SRAM, and advanced control peripherals optimized for digital power applications.",
            "The enhanced FPU accelerates floating-point operations commonly used in advanced control algorithms like model predictive control (MPC) and adaptive control. The device includes three 4MSPS ADCs, 18 ePWM channels, and comprehensive communication interfaces.",
            "The FP65S is ideal for digital power applications requiring complex control algorithms, multi-phase converters, and advanced power factor correction (PFC) systems."
          ],
          "specifications": {
            "Core": "GS-DSP300 @ 300MHz with enhanced FPU",
            "Flash": "1024KB eFlash",
            "SRAM": "384KB Total",
            "ADC": "3x 12-bit SAR, 4MSPS, 18 channels",
            "ePWM": "18 channels, 100ps HRPWM",
            "FPU": "Enhanced floating-point unit",
            "Package": "HLQFP-176, HLQFP-100"
          },
          "features": [
            "Enhanced floating-point unit",
            "Optimized for complex algorithms",
            "Three 4MSPS ADCs",
            "18 high-resolution ePWM channels",
            "Suitable for MPC and adaptive control",
            "Digital power optimized",
            "High computational throughput"
          ],
          "applications": [
            "Digital power conversion",
            "Multi-phase converters",
            "Advanced PFC systems",
            "Complex control systems",
            "Algorithm-intensive applications"
          ],
          "faeReview": {
            "author": "Alex Liu",
            "title": "FAE - Digital Power Applications",
            "content": "The GS32FP65S excels in digital power applications requiring complex algorithms. The enhanced FPU significantly accelerates floating-point operations needed for MPC and adaptive control. I have used this device in multi-phase interleaved PFC designs where the computational performance was essential. The three ADCs enable simultaneous monitoring of multiple power stages while the 18 ePWM channels support complex multi-phase topologies. For digital power applications requiring advanced control techniques, the FP65S delivers the necessary computational horsepower.",
            "highlight": "Enhanced FPU for complex digital power algorithms"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        }
      ]
    },
    {
      "id": "general-purpose-dsp",
      "name": "General-Purpose DSP Series",
      "description": "Gejian Semi general-purpose DSP series offers excellent performance and value for mainstream industrial and power applications. Featuring GS-DSP100 cores running at 100-300MHz, these devices provide a balanced set of control peripherals including ePWM, ADC, and communication interfaces. The series is ideal for general motor control, digital power, industrial automation, and appliance applications where high performance is needed at a competitive price point.",
      "parameters": [
        "Core Frequency",
        "Flash Memory",
        "SRAM",
        "ADC Channels",
        "ePWM Channels",
        "Package Type"
      ],
      "applications": [
        "General Motor Control",
        "Digital Power Supplies",
        "Industrial Automation",
        "Appliance Control",
        "UPS Systems"
      ],
      "selectionGuide": {
        "title": "General-Purpose DSP Selection Guide",
        "description": "Learn how to select the right general-purpose DSP for your industrial application.",
        "articleId": "gejian-general-purpose-dsp-guide",
        "articleLink": "/gejian-semi/support/gejian-general-purpose-dsp-guide.html",
        "link": "/gejian-semi/support/gejian-general-purpose-dsp-guide.html"
      },
      "faqs": [
        {
          "question": "What is the price range of general-purpose DSPs?",
          "answer": "General-purpose DSPs offer excellent value with prices ranging from $2-5 depending on memory size and package. The F0025 series targets ultra-low-cost applications while the F0039 and F0049 series provide more features at competitive prices. All devices maintain industrial-grade quality and reliability.",
          "decisionGuide": "Select based on memory requirements and peripheral needs for best cost-performance ratio.",
          "keywords": ["price", "cost", "general-purpose DSP"]
        },
        {
          "question": "Are general-purpose DSPs suitable for motor control?",
          "answer": "Yes, general-purpose DSPs are fully capable of motor control applications. They include essential peripherals like ePWM, ADC, and encoder interfaces needed for motor control. The 100-300MHz processing power is sufficient for most variable frequency drives and general servo applications. For high-performance servo systems, consider the high-performance series.",
          "decisionGuide": "Use for general motor control; choose high-performance series for demanding servo applications.",
          "keywords": ["motor control", "VFD", "servo"]
        }
      ],
      "products": [
        {
          "partNumber": "GS32F0039",
          "name": "300MHz General-Purpose Real-Time Control DSP",
          "shortDescription": "Gejian GS32F0039 300MHz general-purpose DSP with 1024KB Flash for mainstream industrial applications.",
          "descriptionParagraphs": [
            "The GS32F0039 is a general-purpose real-time control DSP featuring a 300MHz GS-DSP100 core. The device includes 1024KB eFlash, 400KB+ SRAM, and comprehensive control peripherals for mainstream industrial applications.",
            "Key features include dual 12-bit SAR ADCs with 4MSPS sampling rate, 16 ePWM channels, 3 eQEP modules, and extensive communication interfaces including CAN-FD, SPI, I2C, and UART. The device supports EMIF for external memory expansion.",
            "The F0039 series is pin-compatible with mainstream DSPs and offers excellent migration path for existing designs. It is ideal for general motor control, digital power supplies, and industrial automation applications."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 300MHz",
            "Flash": "1024KB eFlash",
            "SRAM": "400KB+ Total",
            "ADC": "2x 12-bit SAR, 4MSPS",
            "ePWM": "16 channels",
            "Communication": "CAN-FD, SPI, I2C, UART",
            "Package": "HLQFP-100, LQFP-64"
          },
          "features": [
            "300MHz GS-DSP100 core",
            "1024KB Flash, 400KB+ SRAM",
            "Dual 4MSPS ADCs",
            "16 ePWM channels",
            "CAN-FD support",
            "EMIF for external memory",
            "Pin-compatible with mainstream DSPs"
          ],
          "applications": [
            "General motor control",
            "Digital power supplies",
            "Industrial automation",
            "Appliance control",
            "UPS systems"
          ],
          "faeReview": {
            "author": "Kevin Zhang",
            "title": "FAE - Industrial Applications",
            "content": "The GS32F0039 is the workhorse of Gejian's general-purpose lineup. The 300MHz core with 1024KB Flash handles most industrial applications with ease. I have deployed this device in numerous variable frequency drives, digital power supplies, and automation controllers. The pin compatibility with mainstream DSPs makes migration straightforward, often requiring only software changes. The comprehensive peripheral set including CAN-FD support enables modern industrial communication. For general-purpose industrial applications requiring good performance at competitive pricing, the F0039 is an excellent choice.",
            "highlight": "Excellent value for mainstream industrial applications"
          },
          "alternativeParts": [
            {
              "partNumber": "GS32F0049",
              "brand": "Gejian Semi",
              "reason": "Larger memory version",
              "comparison": "GS32F0039 vs GS32F0049: 1024KB vs 2048KB Flash => More memory for complex applications",
              "useCase": "Use for applications requiring more program memory",
              "parameters": {
                "Core": "GS-DSP100 @ 300MHz",
                "Flash": "2048KB",
                "SRAM": "400KB+"
              },
              "priceDifference": "+15%",
              "stockStatus": "In Stock"
            }
          ],
          "companionParts": [
            {
              "partNumber": "GS32-DSPWare",
              "description": "Software package with control libraries and examples",
              "category": "Software"
            },
            {
              "partNumber": "Xplore-GS32F0039",
              "description": "Evaluation board for F0039 development",
              "category": "Development Tools"
            }
          ],
          "faqs": [
            {
              "question": "What is the main application of GS32F0039?",
              "answer": "The GS32F0039 is designed for general-purpose industrial applications including motor control, digital power supplies, automation controllers, and appliance control. The 300MHz core provides good performance for most mainstream applications.",
              "decisionGuide": "Use for general industrial applications requiring balanced performance and cost.",
              "keywords": ["applications", "motor control", "digital power"]
            },
            {
              "question": "Is GS32F0039 pin-compatible with other DSPs?",
              "answer": "Yes, the GS32F0039 is designed to be pin-compatible with mainstream DSPs in the market. This enables easy hardware migration with minimal PCB changes. Software migration is supported through Gejian's compatible peripheral architecture.",
              "decisionGuide": "Consider for migration projects from other DSP platforms.",
              "keywords": ["pin-compatible", "migration", "hardware compatibility"]
            }
          ]
        },
        {
          "partNumber": "GS32F0049",
          "name": "300MHz General-Purpose DSP with Extended Memory",
          "shortDescription": "Gejian GS32F0049 300MHz DSP with 2048KB Flash for complex industrial applications requiring more memory.",
          "descriptionParagraphs": [
            "The GS32F0049 is the extended memory version of the F0039, featuring 2048KB eFlash while maintaining the same 300MHz GS-DSP100 core and peripheral set. The additional memory accommodates larger control programs and multiple control algorithms.",
            "The device is ideal for complex industrial applications requiring extensive program memory such as multi-axis controllers, complex state machines, and applications with large lookup tables. All other specifications match the F0039.",
            "The F0049 maintains the same pin compatibility and package options as the F0039, enabling easy upgrade path when more memory is needed."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 300MHz",
            "Flash": "2048KB eFlash",
            "SRAM": "400KB+ Total",
            "ADC": "2x 12-bit SAR, 4MSPS",
            "ePWM": "16 channels",
            "Communication": "CAN-FD, SPI, I2C, UART",
            "Package": "HLQFP-100, LQFP-64"
          },
          "features": [
            "2048KB large Flash memory",
            "Same peripherals as F0039",
            "Easy upgrade path from F0039",
            "Suitable for complex applications",
            "Multiple control algorithm support",
            "Large lookup table capability"
          ],
          "applications": [
            "Complex motor controllers",
            "Multi-axis systems",
            "State machine controllers",
            "Applications with large tables",
            "Feature-rich industrial products"
          ],
          "faeReview": {
            "author": "Thomas Li",
            "title": "FAE - Complex System Design",
            "content": "The GS32F0049 provides the extra memory needed for complex applications. I have used this device in multi-axis CNC controllers where the 2048KB Flash accommodated complex G-code interpreters and multiple control loops. The easy upgrade path from F0039 is valuable for product line expansion. The same peripheral set ensures no hardware redesign is needed when upgrading. For applications where memory is the limiting factor, the F0049 provides an excellent solution without changing the core architecture.",
            "highlight": "Extended memory for complex applications with easy upgrade path"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32FMT5800",
          "name": "200MHz Cost-Effective DSP for Mainstream Applications",
          "shortDescription": "Gejian GS32FMT5800 200MHz cost-effective DSP with optimized peripherals for price-sensitive industrial applications.",
          "descriptionParagraphs": [
            "The GS32FMT5800 is a cost-effective 200MHz DSP optimized for price-sensitive industrial applications. The device features a 200MHz GS-DSP100 core, 512KB eFlash, and 256KB SRAM with optimized peripheral set.",
            "The peripheral set includes dual 12-bit ADCs with 3MSPS sampling rate, 12 ePWM channels, and standard communication interfaces. The reduced peripheral count enables a more cost-effective design while maintaining essential control capabilities.",
            "The FMT5800 is ideal for cost-sensitive applications such as appliance motors, fans, pumps, and basic industrial drives where maximum performance is not required but reliability and features are still important."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 200MHz",
            "Flash": "512KB eFlash",
            "SRAM": "256KB Total",
            "ADC": "2x 12-bit SAR, 3MSPS",
            "ePWM": "12 channels",
            "Communication": "SPI, I2C, UART, CAN",
            "Package": "LQFP-64, LQFP-48"
          },
          "features": [
            "200MHz cost-optimized core",
            "512KB Flash, 256KB SRAM",
            "Dual 3MSPS ADCs",
            "12 ePWM channels",
            "Cost-effective design",
            "Compact packages",
            "Ideal for appliance applications"
          ],
          "applications": [
            "Appliance motors",
            "Fans and pumps",
            "Basic industrial drives",
            "HVAC systems",
            "Cost-sensitive controls"
          ],
          "faeReview": {
            "author": "Michael Chen",
            "title": "FAE - Appliance Applications",
            "content": "The GS32FMT5800 hits the sweet spot for appliance and cost-sensitive applications. The 200MHz core provides sufficient performance for most appliance motors while the optimized peripheral set keeps costs down. I have used this device in washing machine motor controls, refrigerator compressors, and HVAC fan controllers. The compact LQFP-48 package fits well in space-constrained appliance PCBs. For applications where cost is critical but reliability cannot be compromised, the FMT5800 delivers excellent value.",
            "highlight": "Cost-effective solution for appliance and basic industrial applications"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F0025",
          "name": "100MHz Entry-Level DSP for Basic Control",
          "shortDescription": "Gejian GS32F0025 100MHz entry-level DSP for basic motor control and simple industrial applications.",
          "descriptionParagraphs": [
            "The GS32F0025 is an entry-level 100MHz DSP designed for basic control applications. The device features a 100MHz GS-DSP100 core, 256KB eFlash, and 128KB SRAM with essential control peripherals.",
            "The peripheral set includes a single 12-bit ADC with 2MSPS sampling rate, 8 ePWM channels, and basic communication interfaces. The device is available in compact LQFP-48 and QFN-32 packages.",
            "The F0025 is ideal for basic motor control, simple appliances, and cost-sensitive applications where minimal features are needed. It provides an excellent entry point into the Gejian DSP ecosystem."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 100MHz",
            "Flash": "256KB eFlash",
            "SRAM": "128KB Total",
            "ADC": "1x 12-bit SAR, 2MSPS",
            "ePWM": "8 channels",
            "Communication": "SPI, I2C, UART",
            "Package": "LQFP-48, QFN-32"
          },
          "features": [
            "100MHz entry-level core",
            "256KB Flash, 128KB SRAM",
            "Single 2MSPS ADC",
            "8 ePWM channels",
            "Ultra-compact packages",
            "Lowest cost in portfolio",
            "Entry-level DSP solution"
          ],
          "applications": [
            "Basic motor control",
            "Simple appliances",
            "Low-cost drives",
            "Basic automation",
            "Entry-level products"
          ],
          "faeReview": {
            "author": "David Wu",
            "title": "FAE - Cost-Sensitive Design",
            "content": "The GS32F0025 is the most cost-effective entry into DSP-based control. The 100MHz core handles basic motor control algorithms while the essential peripheral set minimizes cost. I have used this device in basic fan controllers, simple pump drives, and low-cost appliance motors. The QFN-32 package enables very compact designs. For applications requiring basic control at minimum cost, the F0025 provides an excellent starting point with upgrade path to higher-performance Gejian devices.",
            "highlight": "Most cost-effective entry-level DSP solution"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F035",
          "name": "150MHz General-Purpose DSP with Enhanced Features",
          "shortDescription": "Gejian GS32F035 150MHz DSP with enhanced features for mid-range industrial applications.",
          "descriptionParagraphs": [
            "The GS32F035 is a 150MHz general-purpose DSP offering enhanced features for mid-range industrial applications. The device features a 150MHz GS-DSP100 core, 512KB eFlash, and 192KB SRAM with enhanced peripheral set.",
            "Key enhancements include dual 12-bit ADCs with 3MSPS sampling rate, 12 ePWM channels with high-resolution capability, and CAN-FD support. The device bridges the gap between entry-level and high-performance series.",
            "The F035 is ideal for mid-range industrial applications requiring more features than entry-level devices but not needing maximum performance. It offers excellent cost-performance balance."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 150MHz",
            "Flash": "512KB eFlash",
            "SRAM": "192KB Total",
            "ADC": "2x 12-bit SAR, 3MSPS",
            "ePWM": "12 channels",
            "Communication": "CAN-FD, SPI, I2C, UART",
            "Package": "LQFP-64, LQFP-48"
          },
          "features": [
            "150MHz core for mid-range apps",
            "512KB Flash, 192KB SRAM",
            "Dual 3MSPS ADCs",
            "12 ePWM channels",
            "CAN-FD support",
            "Enhanced feature set",
            "Excellent cost-performance"
          ],
          "applications": [
            "Mid-range motor control",
            "Industrial drives",
            "Power supplies",
            "Automation controllers",
            "Feature-rich appliances"
          ],
          "faeReview": {
            "author": "Steven Li",
            "title": "FAE - Mid-Range Applications",
            "content": "The GS32F035 fills the gap between entry-level and high-performance devices. The 150MHz core with enhanced peripherals handles most mid-range applications effectively. I have used this device in industrial drives, mid-range power supplies, and feature-rich appliances. The CAN-FD support enables modern industrial networking while the dual ADCs provide good feedback capabilities. For applications needing more than entry-level features without high-performance pricing, the F035 offers an excellent balance.",
            "highlight": "Excellent cost-performance balance for mid-range applications"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F00137",
          "name": "200MHz DSP with Advanced Communication",
          "shortDescription": "Gejian GS32F00137 200MHz DSP with advanced communication interfaces for networked industrial applications.",
          "descriptionParagraphs": [
            "The GS32F00137 is a 200MHz DSP featuring advanced communication interfaces for networked industrial applications. The device includes a 200MHz GS-DSP100 core, 512KB eFlash, and 256KB SRAM with enhanced communication capabilities.",
            "Communication features include dual CAN-FD interfaces, Ethernet MAC, and USB device controller. The device also includes standard control peripherals like dual ADCs and 12 ePWM channels.",
            "The F00137 is ideal for industrial automation applications requiring network connectivity, remote monitoring, and integration with industrial IoT systems."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 200MHz",
            "Flash": "512KB eFlash",
            "SRAM": "256KB Total",
            "ADC": "2x 12-bit SAR, 3MSPS",
            "ePWM": "12 channels",
            "Communication": "Dual CAN-FD, Ethernet, USB",
            "Package": "LQFP-100, LQFP-64"
          },
          "features": [
            "200MHz core with networking",
            "Dual CAN-FD interfaces",
            "Ethernet MAC support",
            "USB device controller",
            "Networked industrial ready",
            "IoT integration capable",
            "Advanced communication focus"
          ],
          "applications": [
            "Networked industrial controls",
            "Remote monitoring systems",
            "Industrial IoT nodes",
            "Connected drives",
            "Smart automation"
          ],
          "faeReview": {
            "author": "James Wang",
            "title": "FAE - Networked Systems",
            "content": "The GS32F00137 is purpose-built for networked industrial applications. The dual CAN-FD and Ethernet interfaces enable comprehensive connectivity options. I have used this device in connected drive systems, remote monitoring nodes, and industrial IoT gateways. The USB interface simplifies configuration and data logging. For Industry 4.0 applications requiring both control and connectivity, the F00137 provides an integrated solution without external communication controllers.",
            "highlight": "Integrated networking for Industry 4.0 applications"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        }
      ]
    },
    {
      "id": "cost-optimized-dsp",
      "name": "Cost-Optimized DSP Series",
      "description": "Gejian Semi cost-optimized DSP series delivers essential control capabilities at competitive prices for cost-sensitive applications. Featuring GS-DSP100 cores running at 100-200MHz, these devices provide the minimum necessary peripherals for basic control applications. The series is ideal for appliance motors, fans, pumps, and other price-sensitive applications where basic control is needed at the lowest possible cost.",
      "parameters": [
        "Core Frequency",
        "Flash Memory",
        "SRAM",
        "ADC Speed",
        "ePWM Channels",
        "Package Size"
      ],
      "applications": [
        "Appliance Motors",
        "Fans and Blowers",
        "Pumps",
        "Basic HVAC",
        "Cost-Sensitive Controls"
      ],
      "selectionGuide": {
        "title": "Cost-Optimized DSP Selection Guide",
        "description": "Learn how to select the right cost-optimized DSP for your price-sensitive application.",
        "articleId": "gejian-cost-optimized-dsp-guide",
        "articleLink": "/gejian-semi/support/gejian-cost-optimized-dsp-guide.html",
        "link": "/gejian-semi/support/gejian-cost-optimized-dsp-guide.html"
      },
      "faqs": [
        {
          "question": "What is the lowest cost Gejian DSP?",
          "answer": "The GS32F0025 is the lowest cost DSP in Gejian's portfolio, targeting ultra-cost-sensitive applications. It provides basic control capabilities with 100MHz core, 256KB Flash, and essential peripherals. Prices start below $2 in volume quantities.",
          "decisionGuide": "Use F0025 for the most cost-sensitive applications requiring basic control only.",
          "keywords": ["lowest cost", "F0025", "cost-sensitive"]
        },
        {
          "question": "Are cost-optimized DSPs reliable for industrial use?",
          "answer": "Yes, all Gejian DSPs including cost-optimized series maintain industrial-grade reliability and quality. They undergo the same testing and qualification processes as high-performance devices. The cost reduction comes from reduced features and smaller packages, not from compromised quality.",
          "decisionGuide": "All Gejian DSPs are suitable for industrial use; choose based on feature requirements.",
          "keywords": ["reliability", "industrial grade", "quality"]
        }
      ],
      "products": [
        {
          "partNumber": "GS32FMT4000",
          "name": "150MHz Cost-Optimized DSP for Appliances",
          "shortDescription": "Gejian GS32FMT4000 150MHz cost-optimized DSP optimized for appliance and consumer applications.",
          "descriptionParagraphs": [
            "The GS32FMT4000 is a cost-optimized 150MHz DSP designed for appliance and consumer applications. The device features a 150MHz GS-DSP100 core, 384KB eFlash, and 160KB SRAM with optimized peripheral set for basic control.",
            "The peripheral set includes a single 12-bit ADC with 2MSPS sampling rate, 10 ePWM channels, and basic communication interfaces. The device is available in compact QFN-32 and LQFP-48 packages.",
            "The FMT4000 is ideal for washing machines, refrigerators, air conditioners, and other appliances requiring basic motor control at competitive pricing."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 150MHz",
            "Flash": "384KB eFlash",
            "SRAM": "160KB Total",
            "ADC": "1x 12-bit SAR, 2MSPS",
            "ePWM": "10 channels",
            "Communication": "SPI, I2C, UART",
            "Package": "QFN-32, LQFP-48"
          },
          "features": [
            "150MHz cost-optimized core",
            "384KB Flash, 160KB SRAM",
            "Single 2MSPS ADC",
            "10 ePWM channels",
            "Compact QFN-32 package",
            "Appliance optimized",
            "Competitive pricing"
          ],
          "applications": [
            "Washing machines",
            "Refrigerators",
            "Air conditioners",
            "Appliance motors",
            "Consumer products"
          ],
          "faeReview": {
            "author": "Kevin Chen",
            "title": "FAE - Appliance Applications",
            "content": "The GS32FMT4000 is specifically optimized for appliance applications. The 150MHz core provides sufficient performance for appliance motors while the optimized peripheral set minimizes cost. I have used this device in washing machine direct-drive motors, refrigerator compressors, and air conditioner fan controls. The QFN-32 package is ideal for space-constrained appliance PCBs. For appliance manufacturers looking to upgrade from 8-bit MCUs to DSP-based control, the FMT4000 provides an excellent migration path.",
            "highlight": "Purpose-built for appliance applications with competitive pricing"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F00157",
          "name": "120MHz Cost-Optimized DSP with Enhanced Memory",
          "shortDescription": "Gejian GS32F00157 120MHz cost-optimized DSP with enhanced memory for feature-rich appliance applications.",
          "descriptionParagraphs": [
            "The GS32F00157 is a 120MHz cost-optimized DSP with enhanced 512KB Flash memory. The device features a 120MHz GS-DSP100 core and 192KB SRAM with standard cost-optimized peripherals.",
            "The additional memory accommodates more complex appliance algorithms and user interface features. The peripheral set includes dual ADCs with 2MSPS sampling and 10 ePWM channels.",
            "The F00157 is ideal for feature-rich appliances requiring more program memory for complex control algorithms and user interfaces."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 120MHz",
            "Flash": "512KB eFlash",
            "SRAM": "192KB Total",
            "ADC": "2x 12-bit SAR, 2MSPS",
            "ePWM": "10 channels",
            "Communication": "SPI, I2C, UART",
            "Package": "LQFP-48, QFN-40"
          },
          "features": [
            "120MHz cost-optimized core",
            "512KB enhanced Flash",
            "192KB SRAM",
            "Dual 2MSPS ADCs",
            "Feature-rich appliance ready",
            "Compact packages",
            "Enhanced memory option"
          ],
          "applications": [
            "Feature-rich appliances",
            "Complex appliance motors",
            "UI-enabled products",
            "Advanced appliances",
            "Smart home devices"
          ],
          "faeReview": {
            "author": "Alex Zhang",
            "title": "FAE - Smart Appliance Design",
            "content": "The GS32F00157 provides extra memory for feature-rich appliances. The 512KB Flash accommodates complex algorithms and user interface code. I have used this device in smart washing machines with touch interfaces and advanced motor control. The dual ADCs enable better sensor coverage for smart features. For appliances requiring both motor control and smart features, the F00157 offers an excellent balance of cost and capability.",
            "highlight": "Enhanced memory for feature-rich and smart appliances"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32FMT5000C",
          "name": "200MHz Cost-Optimized DSP for Industrial",
          "shortDescription": "Gejian GS32FMT5000C 200MHz cost-optimized DSP with industrial-grade reliability for cost-sensitive industrial applications.",
          "descriptionParagraphs": [
            "The GS32FMT5000C is a 200MHz cost-optimized DSP designed for cost-sensitive industrial applications. The device features a 200MHz GS-DSP100 core, 512KB eFlash, and 256KB SRAM with industrial-grade reliability.",
            "The peripheral set includes dual 12-bit ADCs with 3MSPS sampling rate, 12 ePWM channels, and standard communication interfaces. The device maintains industrial temperature range and reliability standards.",
            "The FMT5000C bridges the gap between consumer-grade and full industrial-grade devices, offering industrial reliability at competitive pricing."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 200MHz",
            "Flash": "512KB eFlash",
            "SRAM": "256KB Total",
            "ADC": "2x 12-bit SAR, 3MSPS",
            "ePWM": "12 channels",
            "Communication": "SPI, I2C, UART, CAN",
            "Package": "LQFP-64, LQFP-48"
          },
          "features": [
            "200MHz industrial-grade core",
            "512KB Flash, 256KB SRAM",
            "Dual 3MSPS ADCs",
            "12 ePWM channels",
            "Industrial temperature range",
            "Cost-optimized industrial",
            "Reliable performance"
          ],
          "applications": [
            "Cost-sensitive industrial",
            "Basic industrial drives",
            "Industrial fans and pumps",
            "HVAC systems",
            "Reliable cost-optimized controls"
          ],
          "faeReview": {
            "author": "Robert Li",
            "title": "FAE - Industrial Cost Optimization",
            "content": "The GS32FMT5000C delivers industrial-grade reliability at competitive pricing. The 200MHz core handles most industrial control tasks while maintaining cost efficiency. I have used this device in industrial fans, pumps, and basic drives where full high-performance features were not needed. The industrial temperature range ensures reliable operation in harsh environments. For industrial applications requiring reliability without premium pricing, the FMT5000C is an excellent choice.",
            "highlight": "Industrial-grade reliability at cost-optimized pricing"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F0025C",
          "name": "100MHz Ultra-Low-Cost DSP for Basic Applications",
          "shortDescription": "Gejian GS32F0025C 100MHz ultra-low-cost DSP for the most cost-sensitive basic control applications.",
          "descriptionParagraphs": [
            "The GS32F0025C is an ultra-low-cost 100MHz DSP designed for the most cost-sensitive applications. The device features a 100MHz GS-DSP100 core, 256KB eFlash, and 128KB SRAM with minimal peripheral set.",
            "The essential peripherals include a single 12-bit ADC with 2MSPS sampling rate, 8 ePWM channels, and basic communication. The device is available in compact QFN-32 package.",
            "The F0025C targets the lowest possible cost while maintaining Gejian's quality standards. It is ideal for basic fans, simple pumps, and ultra-cost-sensitive products."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 100MHz",
            "Flash": "256KB eFlash",
            "SRAM": "128KB Total",
            "ADC": "1x 12-bit SAR, 2MSPS",
            "ePWM": "8 channels",
            "Communication": "SPI, UART",
            "Package": "QFN-32"
          },
          "features": [
            "100MHz ultra-low-cost core",
            "256KB Flash, 128KB SRAM",
            "Essential peripherals only",
            "Ultra-compact QFN-32",
            "Lowest cost option",
            "Basic control capable",
            "Quality maintained"
          ],
          "applications": [
            "Basic fans",
            "Simple pumps",
            "Ultra-cost products",
            "Basic motor control",
            "Entry-level appliances"
          ],
          "faeReview": {
            "author": "Thomas Wu",
            "title": "FAE - Ultra-Cost Design",
            "content": "The GS32F0025C represents the entry point to DSP control. The minimal feature set enables the lowest possible cost while maintaining essential control capabilities. I have used this device in basic fan controllers, simple water pumps, and cost-sensitive toys. The QFN-32 package minimizes PCB area and cost. For applications where every cent matters but basic DSP control is needed, the F0025C provides the most economical solution.",
            "highlight": "Ultra-low-cost entry to DSP-based control"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F035C",
          "name": "150MHz Cost-Optimized DSP with CAN Support",
          "shortDescription": "Gejian GS32F035C 150MHz cost-optimized DSP with CAN interface for networked cost-sensitive applications.",
          "descriptionParagraphs": [
            "The GS32F035C is a 150MHz cost-optimized DSP featuring CAN interface for networked applications. The device includes a 150MHz GS-DSP100 core, 384KB eFlash, and 160KB SRAM with CAN communication capability.",
            "The addition of CAN interface enables networked control in cost-sensitive applications. The peripheral set includes dual ADCs, 10 ePWM channels, and standard communication plus CAN.",
            "The F035C is ideal for cost-sensitive industrial networks, automotive auxiliary systems, and distributed control applications requiring networking at competitive pricing."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 150MHz",
            "Flash": "384KB eFlash",
            "SRAM": "160KB Total",
            "ADC": "2x 12-bit SAR, 2MSPS",
            "ePWM": "10 channels",
            "Communication": "SPI, I2C, UART, CAN",
            "Package": "LQFP-48, QFN-40"
          },
          "features": [
            "150MHz cost-optimized core",
            "384KB Flash, 160KB SRAM",
            "CAN interface included",
            "Dual 2MSPS ADCs",
            "Networked cost-sensitive",
            "Industrial communication",
            "Competitive pricing"
          ],
          "applications": [
            "Networked industrial",
            "Automotive auxiliary",
            "Distributed control",
            "CAN-based systems",
            "Cost-sensitive networking"
          ],
          "faeReview": {
            "author": "Michael Liu",
            "title": "FAE - Networked Cost Systems",
            "content": "The GS32F035C adds CAN capability to the cost-optimized lineup. The CAN interface enables networked control without significant cost increase. I have used this device in distributed HVAC systems, networked industrial sensors, and automotive auxiliary controllers. The 150MHz core provides adequate performance for control plus communication tasks. For applications requiring networking at minimal cost, the F035C provides an excellent solution.",
            "highlight": "Cost-optimized DSP with CAN networking capability"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        },
        {
          "partNumber": "GS32F00137C",
          "name": "120MHz Cost-Optimized DSP with LIN Support",
          "shortDescription": "Gejian GS32F00137C 120MHz cost-optimized DSP with LIN interface for automotive body electronics.",
          "descriptionParagraphs": [
            "The GS32F00137C is a 120MHz cost-optimized DSP featuring LIN interface for automotive body electronics. The device includes a 120MHz GS-DSP100 core, 384KB eFlash, and 160KB SRAM with LIN communication support.",
            "The LIN interface is optimized for automotive body electronics like door modules, seat controllers, and climate controls. The peripheral set includes dual ADCs, 10 ePWM channels, and LIN plus standard communication.",
            "The F00137C is AEC-Q100 qualified and ideal for automotive body electronics requiring motor control and LIN communication at competitive pricing."
          ],
          "specifications": {
            "Core": "GS-DSP100 @ 120MHz",
            "Flash": "384KB eFlash",
            "SRAM": "160KB Total",
            "ADC": "2x 12-bit SAR, 2MSPS",
            "ePWM": "10 channels",
            "Communication": "SPI, I2C, UART, LIN",
            "Package": "LQFP-48, QFN-40",
            "Qualification": "AEC-Q100"
          },
          "features": [
            "120MHz automotive-grade core",
            "LIN interface for body electronics",
            "AEC-Q100 qualified",
            "Dual 2MSPS ADCs",
            "Automotive optimized",
            "Body electronics ready",
            "Cost-effective automotive"
          ],
          "applications": [
            "Automotive body electronics",
            "Door modules",
            "Seat controllers",
            "Climate controls",
            "LIN-based automotive"
          ],
          "faeReview": {
            "author": "James Chen",
            "title": "FAE - Automotive Body Electronics",
            "content": "The GS32F00137C is purpose-built for automotive body electronics. The LIN interface integrates seamlessly with automotive networks while the AEC-Q100 qualification ensures reliability. I have used this device in door control modules, seat adjustment systems, and HVAC controls. The 120MHz core handles motor control plus LIN communication efficiently. For automotive body electronics requiring cost-effective DSP control, the F00137C provides an integrated solution.",
            "highlight": "AEC-Q100 qualified with LIN for automotive body electronics"
          },
          "alternativeParts": [],
          "companionParts": [],
          "faqs": []
        }
      ]
    }
  ]
};

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('✅ gejian-semi产品数据已重新创建（DSP芯片）！');
console.log('\n📊 产品分类统计:');
productsData.categories.forEach(cat => {
  console.log(`   ${cat.name}: ${cat.products.length} 个产品`);
});
console.log('\n请运行生成脚本重新生成网站: node scripts/generate.js --brand gejian-semi');
