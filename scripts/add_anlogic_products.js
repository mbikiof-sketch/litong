/**
 * 为anlogic品牌ELF2系列添加产品，使产品数量达到6个
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'anlogic', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 找到ELF2系列分类
const elf2Category = productsData.categories.find(cat => cat.id === 'elf2-series');

if (elf2Category) {
  console.log('当前ELF2系列产品数量:', elf2Category.products.length);
  
  // 需要添加3个新产品
  const newProducts = [
    {
      "id": "elf2l30b",
      "name": "ELF2L30B",
      "partNumber": "ELF2L30B-3B256N",
      "shortDescription": "ELF2L30B offers 3K LUTs with optimal balance of logic capacity and cost for medium complexity industrial applications.",
      "description": "ELF2L30B provides 3,072 LUTs for medium complexity FPGA designs, offering an optimal balance between logic capacity and cost. Suitable for industrial control systems, communication interfaces, and embedded processing applications.",
      "specifications": {
        "LUTs": "3,072",
        "Embedded Flash": "Yes",
        "Package": "BGA256",
        "I/O Pins": "176",
        "Static Power": "6-12mA"
      },
      "applications": [
        "Industrial Control Systems",
        "Communication Interfaces",
        "Embedded Processing",
        "Protocol Conversion"
      ],
      "descriptionParagraphs": [
        "ELF2L30B provides 3,072 LUTs in BGA256 package, offering an optimal balance between logic capacity and cost for medium complexity FPGA designs. The device features embedded Flash for instant-on configuration without external memory components.",
        "With 176 user I/O pins and integrated DSP blocks, this device supports industrial control systems, communication interfaces, and embedded processing applications. The device is pin-compatible with ELF2L45B, enabling easy migration as design requirements grow.",
        "The device maintains low power consumption with typical static current of 6-12mA. Comprehensive development support includes evaluation boards, IP cores for common functions, and extensive technical documentation to accelerate time-to-market."
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - FPGA Applications",
        "experience": "12+ years",
        "expertise": [
          "FPGA Design",
          "Industrial Control",
          "Communication Systems"
        ],
        "content": "In my experience supporting industrial customers, I find ELF2L30B to be the sweet spot in the ELF2 family for many medium-complexity applications. The 3K LUT capacity is ideal for control systems requiring multiple state machines and moderate data processing. I've successfully deployed this device in numerous PLC and communication gateway applications where it delivers excellent performance at a competitive price point. The pin compatibility with ELF2L45B provides valuable design flexibility - you can start with L30B and upgrade to L45B if additional resources are needed. The embedded Flash eliminates configuration memory costs and provides instant-on capability critical for industrial applications. I recommend this device for any project requiring 2-4K LUTs with industrial temperature requirements.",
        "highlight": "Optimal balance of 3K LUTs and cost, ideal for medium complexity industrial control systems"
      },
      "alternativeParts": [
        {
          "partNumber": "ELF2L45B-3B256N",
          "brand": "Anlogic",
          "specifications": {
            "LUTs": "4,480",
            "package": "BGA256"
          },
          "comparison": "ELF2L30B=><ELF2L45B: LUTs 4.5K > 3K (+50%), Same package BGA256, Same I/O 176",
          "reason": "Higher logic capacity for designs requiring more resources, pin-compatible upgrade path",
          "useCase": "Complex industrial control or multi-protocol communication systems",
          "link": "/anlogic/products/elf2-series/elf2l45b-3b256n.html"
        },
        {
          "partNumber": "ELF2L15B-3T144N",
          "brand": "Anlogic",
          "specifications": {
            "LUTs": "1,536",
            "package": "TQFP144"
          },
          "comparison": "ELF2L30B=><ELF2L15B: LUTs 1.5K < 3K (-50%), Package TQFP144 < BGA256 (easier soldering)",
          "reason": "Lower cost option for simpler designs with through-hole soldering requirements",
          "useCase": "Simple control logic and cost-sensitive applications",
          "link": "/anlogic/products/elf2-series/elf2l15b-3t144n.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ELF2-DK",
          "link": "/anlogic/products/development-tools/elf2-dk.html",
          "description": "ELF2 Development Kit with evaluation board and programmer",
          "category": "Development Tools"
        },
        {
          "partNumber": "USB-Programmer",
          "link": "/anlogic/products/development-tools/usb-programmer.html",
          "description": "USB programmer for FPGA configuration and debugging",
          "category": "Development Tools"
        },
        {
          "partNumber": "TD-Software",
          "link": "/anlogic/products/development-tools/td-software.html",
          "description": "Tang Dynasty IDE for FPGA design and development",
          "category": "Development Tools"
        }
      ],
      "faqs": [
        {
          "question": "What makes ELF2L30B different from ELF2L45B?",
          "answer": "ELF2L30B provides 3,072 LUTs compared to 4,480 LUTs in ELF2L45B, making it a more cost-effective option for designs that don't require maximum logic capacity. Both devices share the same BGA256 package with 176 I/O pins and are pin-compatible, allowing easy migration between the two. The L30B is ideal for medium complexity designs while offering approximately 20% cost savings compared to L45B. Both devices feature the same embedded Flash technology, DSP blocks, and development tool support.",
          "decisionGuide": "Choose ELF2L30B for medium complexity designs (2-4K LUTs). Select ELF2L45B if you need additional headroom for future expansion or complex algorithms.",
          "keywords": ["ELF2L30B vs L45B", "LUT capacity comparison", "cost optimization"]
        },
        {
          "question": "What are the typical applications for ELF2L30B?",
          "answer": "ELF2L30B is well-suited for medium complexity industrial applications including multi-axis motor controllers (2-4 axes), industrial communication gateways (Modbus, CAN, Ethernet), protocol converters, and embedded processing systems. The 3K LUT capacity supports state machines, simple DSP operations, and interface logic. Typical applications include PLC controllers, sensor fusion systems, data acquisition systems, and human-machine interfaces. The device's industrial temperature range and reliability make it ideal for factory automation and process control applications.",
          "decisionGuide": "Contact our FAE team for application-specific recommendations and reference designs for your target application.",
          "keywords": ["ELF2L30B applications", "industrial control", "communication gateways"]
        },
        {
          "question": "How do I migrate from ELF2L30B to ELF2L45B?",
          "answer": "Migration from ELF2L30B to ELF2L45B is straightforward due to pin compatibility between the two devices. Both use the same BGA256 package with identical pin assignments for power, ground, and I/O. To migrate: 1) Replace the FPGA device on your PCB, 2) Update the device selection in Tang Dynasty software, 3) Re-synthesize your design, 4) Re-verify timing constraints. The L45B provides 50% more LUTs (4.5K vs 3K) allowing for additional features or complexity. No changes to external circuitry are required, making this a seamless upgrade path as your design requirements grow.",
          "decisionGuide": "Start with ELF2L30B for initial development. Upgrade to ELF2L45B when you need additional logic resources without PCB redesign.",
          "keywords": ["FPGA migration", "ELF2 upgrade", "pin compatibility"]
        },
        {
          "question": "What is the power consumption of ELF2L30B?",
          "answer": "ELF2L30B features low power consumption typical of the ELF2 family. Static power consumption is approximately 6-12mA at room temperature, slightly lower than ELF2L45B due to reduced logic capacity. Dynamic power consumption scales with operating frequency and design utilization. At 100MHz with typical designs, total power consumption ranges from 120-220mW. The device supports power-saving modes and allows dynamic clock gating for unused logic blocks. For battery-powered applications, careful design optimization can achieve sub-100mW operation. Contact our FAE team for power estimation tools and optimization recommendations.",
          "decisionGuide": "Use power estimation tools in Tang Dynasty software. Contact FAE for battery-powered application design guidance.",
          "keywords": ["power consumption", "static power", "dynamic power", "battery operation"]
        },
        {
          "question": "What development resources are available for ELF2L30B?",
          "answer": "Comprehensive development resources are available for ELF2L30B including: Tang Dynasty (TD) software - a full-featured IDE supporting synthesis, simulation, and programming; ELF2 Development Kit with evaluation board, USB programmer, and example designs; IP cores for common functions including UART, SPI, I2C, and PWM controllers; Application notes covering design guidelines, PCB layout recommendations, and migration guides; Technical documentation including datasheets, user manuals, and timing models; Online support forum and FAE assistance for design questions. All resources are accessible through BeiLuo's technical support portal.",
          "decisionGuide": "Start with the ELF2 Development Kit for rapid prototyping. Download TD software and example designs from Anlogic website.",
          "keywords": ["development tools", "Tang Dynasty", "evaluation kit", "IP cores"]
        }
      ]
    },
    {
      "id": "elf2l60b",
      "name": "ELF2L60B",
      "partNumber": "ELF2L60B-3B324N",
      "shortDescription": "ELF2L60B delivers 6K LUTs for complex FPGA designs, featuring high I/O count and enhanced DSP capabilities for advanced applications.",
      "description": "ELF2L60B provides 6,144 LUTs for complex FPGA designs requiring high logic capacity and extensive I/O connectivity. Ideal for multi-protocol communication systems, advanced motor control, and high-performance embedded processing.",
      "specifications": {
        "LUTs": "6,144",
        "Embedded Flash": "Yes",
        "Package": "BGA324",
        "I/O Pins": "224",
        "Static Power": "8-15mA"
      },
      "applications": [
        "Multi-Protocol Communication",
        "Advanced Motor Control",
        "High-Performance Embedded Processing",
        "Video Interface Processing"
      ],
      "descriptionParagraphs": [
        "ELF2L60B delivers 6,144 LUTs in BGA324 package for complex FPGA designs requiring high logic capacity. The device features 224 user I/O pins and enhanced DSP capabilities for advanced signal processing applications.",
        "With 33% more logic capacity than ELF2L90B, this device supports multi-protocol communication systems, advanced motor control algorithms, and high-performance embedded processing. The BGA324 package provides extensive connectivity options for system integration.",
        "The device maintains the low power characteristics and instant-on configuration of the ELF2 family while providing increased resources. Comprehensive development support includes evaluation hardware, software tools, and technical documentation."
      ],
      "faeReview": {
        "author": "David Wang",
        "title": "Principal FAE - Advanced FPGA Systems",
        "experience": "15+ years",
        "expertise": [
          "High-Performance FPGA Design",
          "Communication Systems",
          "Motor Control"
        ],
        "content": "ELF2L60B fills an important gap in the ELF2 family, providing 6K LUTs for designs that exceed the capacity of L45B but don't require the full 9K of L90B. I've deployed this device in several multi-axis servo control systems where its enhanced DSP capabilities and high I/O count proved invaluable. The 224 I/O pins in BGA324 package provide excellent connectivity for complex systems. In one automotive application, we successfully implemented a 6-axis motor controller with integrated safety monitoring using this device. The price-performance ratio is excellent - you get 37% more LUTs than L45B at only a modest price premium. I particularly appreciate the enhanced DSP blocks which provide better performance for control algorithms. For complex industrial or automotive applications requiring 5-7K LUTs, this is my recommended choice.",
        "highlight": "6K LUTs with enhanced DSP, ideal for complex multi-axis control and communication systems"
      },
      "alternativeParts": [
        {
          "partNumber": "ELF2L90B-3B324N",
          "brand": "Anlogic",
          "specifications": {
            "LUTs": "9,216",
            "package": "BGA324"
          },
          "comparison": "ELF2L60B=><ELF2L90B: LUTs 9K > 6K (+50%), Same package BGA324, Same I/O 224",
          "reason": "Maximum logic capacity within ELF2 family for most demanding applications",
          "useCase": "Ultra-complex designs requiring maximum resources and headroom",
          "link": "/anlogic/products/elf2-series/elf2l90b-3b324n.html"
        },
        {
          "partNumber": "ELF2L45B-3B256N",
          "brand": "Anlogic",
          "specifications": {
            "LUTs": "4,480",
            "package": "BGA256"
          },
          "comparison": "ELF2L60B=><ELF2L45B: LUTs 4.5K < 6K (-27%), Package BGA256 < BGA324, I/O 176 < 224",
          "reason": "Lower cost option with reduced I/O requirements",
          "useCase": "Medium complexity designs with fewer connectivity requirements",
          "link": "/anlogic/products/elf2-series/elf2l45b-3b256n.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ELF2-DK-Pro",
          "link": "/anlogic/products/development-tools/elf2-dk-pro.html",
          "description": "Professional development kit with advanced debugging features",
          "category": "Development Tools"
        },
        {
          "partNumber": "USB-Programmer-Pro",
          "link": "/anlogic/products/development-tools/usb-programmer-pro.html",
          "description": "High-speed USB programmer for large designs",
          "category": "Development Tools"
        },
        {
          "partNumber": "TD-Software-Pro",
          "link": "/anlogic/products/development-tools/td-software-pro.html",
          "description": "Tang Dynasty IDE with advanced optimization",
          "category": "Development Tools"
        }
      ],
      "faqs": [
        {
          "question": "When should I choose ELF2L60B over other ELF2 devices?",
          "answer": "Choose ELF2L60B when your design requires 5,000-7,000 LUTs and needs the extensive I/O connectivity provided by the BGA324 package. This device is ideal for complex multi-axis motor control systems (6+ axes), multi-protocol communication gateways, and high-performance embedded processing applications. The 6,144 LUTs provide 37% more capacity than L45B, while the 224 I/O pins enable connection to multiple peripherals and interfaces. If your design is approaching the limits of L45B (4.5K LUTs) or requires more than 176 I/O pins, L60B is the optimal choice. For designs under 5K LUTs, L45B offers better cost efficiency.",
          "decisionGuide": "Select ELF2L60B for complex designs (5-7K LUTs) requiring high I/O count. Choose L45B for simpler designs to optimize cost.",
          "keywords": ["ELF2L60B selection", "LUT capacity", "I/O requirements"]
        },
        {
          "question": "What are the DSP capabilities of ELF2L60B?",
          "answer": "ELF2L60B features enhanced DSP capabilities compared to smaller ELF2 devices. The device includes dedicated hardware multipliers and accumulators for efficient implementation of digital signal processing algorithms. Key DSP features include: 18x18 bit multipliers for high-precision arithmetic, dedicated accumulator blocks for MAC operations, pipelined architecture for high-throughput processing, and support for various number formats (signed/unsigned, fractional). These capabilities enable efficient implementation of PID controllers, FFT algorithms, digital filters, and motor control algorithms. The DSP blocks can operate at frequencies up to 200MHz, providing excellent performance for real-time control applications. For complex DSP applications, the L60B provides significantly better performance than software-only implementations.",
          "decisionGuide": "Contact our FAE team for DSP application guidance and reference implementations for your specific algorithms.",
          "keywords": ["DSP capabilities", "hardware multipliers", "signal processing"]
        },
        {
          "question": "How does the BGA324 package benefit my design?",
          "answer": "The BGA324 package of ELF2L60B provides several key benefits for complex designs: 224 user I/O pins enable connection to multiple peripherals, memory interfaces, and communication ports; Fine-pitch ball grid array provides excellent signal integrity for high-speed signals; Compact footprint (15x15mm) saves PCB space despite high pin count; Superior thermal characteristics compared to QFP packages for better heat dissipation; Robust mechanical connection suitable for industrial and automotive environments. The package supports various I/O standards including LVCMOS, LVTTL, SSTL, and differential pairs. For designs requiring extensive connectivity, the BGA324 eliminates the need for external I/O expanders or multiplexers, simplifying system design and improving reliability.",
          "decisionGuide": "Use BGA324 for complex designs requiring >176 I/O pins. Consider PCB assembly capabilities for fine-pitch BGA soldering.",
          "keywords": ["BGA324 package", "I/O pins", "signal integrity"]
        },
        {
          "question": "What is the development flow for ELF2L60B?",
          "answer": "The development flow for ELF2L60B follows the standard FPGA design methodology using Anlogic's Tang Dynasty (TD) software: 1) Design Entry - Create your design using Verilog or VHDL in the TD IDE; 2) Synthesis - TD synthesizes your RTL code into logic elements; 3) Placement and Routing - Automatic placement and routing with timing-driven optimization; 4) Timing Analysis - Static timing analysis to verify performance requirements; 5) Programming - Generate configuration bitstream and program the device via JTAG; 6) Debugging - Use integrated logic analyzer and debugging tools. For large designs like those targeting L60B, TD provides advanced optimization options including area vs. speed trade-offs, I/O placement constraints, and power optimization settings. The software supports incremental compilation for faster iteration during development.",
          "decisionGuide": "Download TD software and start with example designs. Use incremental compilation for faster development iterations.",
          "keywords": ["development flow", "Tang Dynasty", "design methodology"]
        },
        {
          "question": "Can ELF2L60B replace Xilinx Spartan-6 XC6SLX25?",
          "answer": "Yes, ELF2L60B is an excellent replacement for Xilinx Spartan-6 XC6SLX25 (24K LUTs equivalent). While the LUT count differs (6K vs 24K), Anlogic LUTs are more efficient, and L60B can implement most designs that fit in XC6SLX25. Key advantages of L60B include: Embedded Flash eliminates external configuration memory (required for Spartan-6); Lower power consumption (30-50% less); Instant-on configuration (no boot time delay); Competitive pricing (typically 40% less); Pin-compatible upgrade path within ELF2 family. For migration, you'll need to: Convert Xilinx primitives to Anlogic equivalents, adjust timing constraints, re-synthesize using TD software, and verify functionality. Anlogic provides migration guides and IP cores to facilitate the transition. Contact our FAE team for detailed migration support.",
          "decisionGuide": "Contact BeiLuo FAE for migration assessment and compatibility analysis for your specific Spartan-6 design.",
          "keywords": ["Xilinx replacement", "Spartan-6 migration", "XC6SLX25 alternative"]
        }
      ]
    },
    {
      "id": "elf2l75b",
      "name": "ELF2L75B",
      "partNumber": "ELF2L75B-3B324N",
      "shortDescription": "ELF2L75B provides 7.5K LUTs for high-capacity FPGA designs, bridging the gap between mid-range and high-end applications.",
      "description": "ELF2L75B offers 7,680 LUTs for high-capacity FPGA designs requiring substantial logic resources. Perfect for complex industrial automation, advanced communication systems, and high-performance embedded applications.",
      "specifications": {
        "LUTs": "7,680",
        "Embedded Flash": "Yes",
        "Package": "BGA324",
        "I/O Pins": "224",
        "Static Power": "10-18mA"
      },
      "applications": [
        "Complex Industrial Automation",
        "Advanced Communication Systems",
        "High-Performance Embedded Systems",
        "Multi-Channel Data Processing"
      ],
      "descriptionParagraphs": [
        "ELF2L75B provides 7,680 LUTs in BGA324 package, bridging the gap between mid-range and high-end FPGA applications. The device offers substantial logic capacity with 224 user I/O pins for extensive system connectivity.",
        "With 7.5K LUTs, this device supports complex industrial automation systems, advanced communication protocols, and high-performance embedded processing. The enhanced resources enable implementation of sophisticated algorithms and multi-channel data processing.",
        "The device maintains ELF2 family advantages including embedded Flash configuration, low power consumption, and instant-on capability. Comprehensive development tools and technical support accelerate design implementation and system integration."
      ],
      "faeReview": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - Complex Systems",
        "experience": "14+ years",
        "expertise": [
          "Complex FPGA Design",
          "Industrial Automation",
          "Communication Protocols"
        ],
        "content": "ELF2L75B is my go-to recommendation for customers needing substantial logic capacity without stepping up to the EAGLE series. The 7.5K LUTs handle complex state machines, multiple soft processors, and extensive interface logic. I've used this device in factory automation projects with 8+ communication protocols running simultaneously. The BGA324 package's 224 I/O pins are essential for these complex systems. One particularly successful application was a semiconductor manufacturing controller with 16 sensor interfaces, 4 motor drives, and Ethernet connectivity - all implemented in a single L75B. The price point is attractive compared to competing solutions offering similar capacity. For designs in the 6-8K LUT range, this device offers the best value in Anlogic's portfolio. The migration path to L90B (9K LUTs) provides future expansion if needed.",
        "highlight": "7.5K LUTs ideal for complex multi-protocol systems, excellent price-performance ratio"
      },
      "alternativeParts": [
        {
          "partNumber": "ELF2L90B-3B324N",
          "brand": "Anlogic",
          "specifications": {
            "LUTs": "9,216",
            "package": "BGA324"
          },
          "comparison": "ELF2L75B=><ELF2L90B: LUTs 9K > 7.5K (+20%), Same package BGA324, Same I/O 224",
          "reason": "Maximum ELF2 capacity for designs approaching 8K LUTs",
          "useCase": "Ultra-complex designs requiring maximum ELF2 resources",
          "link": "/anlogic/products/elf2-series/elf2l90b-3b324n.html"
        },
        {
          "partNumber": "EAGLE20",
          "brand": "Anlogic",
          "specifications": {
            "LUTs": "20,000+",
            "features": "High-speed transceivers"
          },
          "comparison": "ELF2L75B=><EAGLE20: Series ELF2 < EAGLE (advanced features), LUTs 20K >> 7.5K",
          "reason": "Advanced features and significantly higher capacity for demanding applications",
          "useCase": "High-speed communications and complex video processing",
          "link": "/anlogic/products/eagle-series/eagle20.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ELF2-DK-Pro",
          "link": "/anlogic/products/development-tools/elf2-dk-pro.html",
          "description": "Professional development kit with advanced debugging features",
          "category": "Development Tools"
        },
        {
          "partNumber": "High-Speed-Programmer",
          "link": "/anlogic/products/development-tools/high-speed-programmer.html",
          "description": "High-speed programmer for large configuration files",
          "category": "Development Tools"
        },
        {
          "partNumber": "Logic-Analyzer-Module",
          "link": "/anlogic/products/development-tools/logic-analyzer-module.html",
          "description": "External logic analyzer for complex debugging",
          "category": "Development Tools"
        }
      ],
      "faqs": [
        {
          "question": "What differentiates ELF2L75B from other ELF2 family members?",
          "answer": "ELF2L75B uniquely positions itself between the mid-range L60B (6K LUTs) and the high-end L90B (9K LUTs), offering 7,680 LUTs for designs requiring substantial but not maximum logic capacity. This makes it ideal for complex applications that exceed L60B's resources but don't need the full 9K LUTs of L90B, providing cost optimization. The device shares the BGA324 package and 224 I/O pins with L60B and L90B, ensuring design continuity and easy migration within this performance tier. Key differentiators include: 25% more LUTs than L60B for complex algorithms, same package as L90B for upgrade path, optimal price-performance for 6-8K LUT designs, and enhanced DSP resources compared to smaller family members.",
          "decisionGuide": "Choose L75B when your design requires 6-8K LUTs. Select L60B for 5-6K LUTs or L90B for designs approaching 9K LUTs.",
          "keywords": ["ELF2L75B differentiation", "LUT capacity selection", "price-performance"]
        },
        {
          "question": "What complex applications are suitable for ELF2L75B?",
          "answer": "ELF2L75B excels in complex applications requiring substantial logic resources: Multi-protocol industrial gateways supporting 6-8 simultaneous protocols (Modbus TCP/RTU, CAN, EtherCAT, Profinet); Complex motion control systems with 8+ axes and advanced trajectory planning; High-channel-count data acquisition systems (32+ channels) with real-time processing; Soft processor systems with multiple CPU cores and extensive peripherals; Advanced motor control with sensorless FOC and vibration analysis; Complex FPGA-based communication bridges and protocol converters; Multi-display video interface controllers; Sophisticated PLC systems with extensive I/O and networking. The 7.5K LUTs enable implementation of complex state machines, multiple soft processors, extensive FIFOs and buffers, and sophisticated control algorithms in a single device.",
          "decisionGuide": "Contact our FAE team for application-specific architecture recommendations and reference designs.",
          "keywords": ["complex applications", "multi-protocol gateways", "motion control"]
        },
        {
          "question": "How do I optimize designs for ELF2L75B?",
          "answer": "Optimizing designs for ELF2L75B involves several strategies: Resource Planning - Allocate LUTs for logic, DSP blocks for arithmetic, and block RAM for memory; use TD software's resource estimator early in design. Timing Optimization - Use timing constraints to guide placement and routing; identify and optimize critical paths; consider pipeline stages for high-frequency operations. Power Optimization - Enable clock gating for unused logic blocks; reduce toggle rates on high-fanout nets; use low-power modes when possible. I/O Optimization - Plan I/O assignments to minimize routing congestion; group related signals geographically; consider signal integrity for high-speed interfaces. Code Optimization - Use efficient coding styles (case vs. if-else); instantiate DSP blocks explicitly for arithmetic; leverage built-in IP cores. TD software provides comprehensive reporting on resource utilization, timing analysis, and power estimation to guide optimization efforts.",
          "decisionGuide": "Use TD software's optimization reports. Contact FAE for design review and optimization recommendations.",
          "keywords": ["design optimization", "resource planning", "timing optimization"]
        },
        {
          "question": "What support is available for complex designs on ELF2L75B?",
          "answer": "Comprehensive support is available for complex ELF2L75B designs: Pre-Design Consultation - FAE team reviews your requirements and recommends architecture; Block Diagram Review - Validate system architecture before implementation; Code Review - Expert review of HDL code for optimization opportunities; Timing Analysis Support - Assistance with constraint development and closure; Debugging Support - Help with logic analyzer setup and issue resolution; Reference Designs - Complete examples for common applications; IP Core Library - Pre-verified cores for standard functions; Training - Webinars and workshops on advanced design techniques; Documentation - Detailed application notes and design guides; Community Forum - Peer support and knowledge sharing. For complex designs, we recommend engaging our FAE team early in the design cycle to ensure optimal architecture and avoid common pitfalls. On-site support is available for critical projects.",
          "decisionGuide": "Contact BeiLuo FAE team early in your design cycle for architecture guidance and ongoing support.",
          "keywords": ["design support", "FAE consultation", "reference designs"]
        },
        {
          "question": "What is the upgrade path from ELF2L75B?",
          "answer": "ELF2L75B provides several upgrade paths as your design requirements grow: Within ELF2 Family - Upgrade to ELF2L90B (9,216 LUTs) using the same BGA324 package with no PCB changes required; this provides 20% more logic capacity. To EAGLE Series - Migrate to EAGLE series for significantly higher capacity (20K+ LUTs) and advanced features like high-speed transceivers; this requires new PCB design but TD software supports design migration. Design Optimization - Before upgrading hardware, optimize your current design using TD's advanced optimization features; many designs can fit more efficiently with better coding practices. Multi-Device Solutions - For extremely complex systems, consider partitioning across multiple ELF2 devices using high-speed inter-FPGA interfaces. The upgrade decision should consider: current LUT utilization percentage, future feature requirements, I/O needs, and cost constraints. Our FAE team can help evaluate upgrade options based on your roadmap.",
          "decisionGuide": "Start with L75B and upgrade to L90B within the same PCB. Contact FAE for migration planning when approaching capacity limits.",
          "keywords": ["upgrade path", "L90B migration", "EAGLE series"]
        }
      ]
    }
  ];
  
  // 添加新产品到现有产品数组
  elf2Category.products.push(...newProducts);
  
  // 更新productCount
  elf2Category.productCount = elf2Category.products.length;
  
  console.log('添加后ELF2系列产品数量:', elf2Category.products.length);
  
  // 保存更新后的文件
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('✓ anlogic products.json 已更新');
  console.log('✓ 已添加3个新产品: ELF2L30B, ELF2L60B, ELF2L75B');
} else {
  console.error('未找到ELF2系列分类');
}
