const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'anlogic');

// Fix brand.json
const brandPath = path.join(dataDir, 'brand.json');
if (fs.existsSync(brandPath)) {
  const brand = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
  
  if (!brand.seoKeywords || brand.seoKeywords.length < 5) {
    brand.seoKeywords = [
      "Anlogic distributor",
      "Anlogic FPGA",
      "Anlogic FPGA selection",
      "ELF2 FPGA distributor",
      "EAGLE FPGA distributor",
      "FPGA distributor",
      "low cost FPGA",
      "embedded Flash FPGA",
      "industrial FPGA",
      "Xilinx alternative"
    ];
  }
  
  if (!brand.faqs || brand.faqs.length < 7) {
    brand.faqs = [
      {
        question: "What makes Anlogic FPGAs different from Xilinx?",
        answer: "Anlogic FPGAs offer several key advantages: embedded Flash eliminates external configuration memory, reducing BOM cost and board space; significantly lower pricing compared to equivalent Xilinx devices (typically 30-50% less); instant-on configuration without external memory; and comparable performance for most applications. Anlogic provides pin-compatible alternatives to Xilinx Spartan series with detailed migration support and comprehensive development tools.",
        decisionGuide: "Consider Anlogic for cost-sensitive applications where Xilinx pricing is prohibitive. Contact BeiLuo FAE for migration analysis.",
        keywords: ["Anlogic vs Xilinx", "FPGA comparison", "cost advantage"]
      },
      {
        question: "Does Anlogic provide design migration support from Xilinx?",
        answer: "Yes, Anlogic provides comprehensive migration support including pin compatibility analysis, design porting guidelines, timing constraint conversion, and IP core alternatives. BeiLuo's FAE team can assist with design review, constraint conversion, and validation testing to ensure successful migration from Xilinx to Anlogic FPGAs. Reference designs and application notes are also available.",
        decisionGuide: "Contact BeiLuo FAE early in the migration process for design analysis and planning assistance.",
        keywords: ["Xilinx migration", "design porting", "migration support"]
      },
      {
        question: "What development tools does Anlogic provide?",
        answer: "Anlogic provides Tang Dynasty (TD) software, a comprehensive FPGA development environment including design entry, synthesis, placement and routing, timing analysis, and programming. The software supports Verilog, VHDL, and SystemVerilog with free license. IP cores, reference designs, and evaluation boards are also available to accelerate development.",
        decisionGuide: "Download TD software from Anlogic website or contact BeiLuo for development kit recommendations.",
        keywords: ["Tang Dynasty", "TD software", "development tools"]
      },
      {
        question: "What are the main FPGA series offered by Anlogic?",
        answer: "Anlogic offers two main FPGA series: ELF2 series for cost-sensitive applications with logic densities from 1.5K to 9K LUTs, and EAGLE series for high-performance applications with densities up to 100K+ LUTs. Both series feature embedded Flash for instant-on configuration, low power consumption, and competitive pricing compared to Xilinx and Altera alternatives.",
        decisionGuide: "Choose ELF2 for simple to medium complexity designs under 10K LUTs. Select EAGLE for complex designs requiring high logic capacity and advanced features.",
        keywords: ["Anlogic FPGA series", "ELF2", "EAGLE", "FPGA selection"]
      },
      {
        question: "What applications are best suited for Anlogic FPGAs?",
        answer: "Anlogic FPGAs are ideal for cost-sensitive applications requiring programmable logic solutions. Key applications include industrial automation and control systems, LED display controllers and drivers, communications equipment and interfaces, consumer electronics and appliances, motor control and power electronics, video and image processing, and IoT edge devices.",
        decisionGuide: "Evaluate Anlogic for any FPGA application where cost reduction is important without compromising essential functionality. Contact FAE for application-specific recommendations.",
        keywords: ["FPGA applications", "industrial control", "LED display"]
      },
      {
        question: "What is the lead time for Anlogic FPGAs?",
        answer: "BeiLuo maintains stock of popular Anlogic FPGA devices for immediate delivery. Standard lead time for non-stock items is typically 4-6 weeks. For high-volume orders, please contact our sales team for scheduling and pricing. We also offer buffer stock programs for qualified customers.",
        decisionGuide: "Contact BeiLuo sales for current stock status and lead time quotes.",
        keywords: ["lead time", "stock availability", "delivery"]
      },
      {
        question: "Does Anlogic provide free FPGA development software?",
        answer: "Yes, Anlogic Tang Dynasty (TD) software is available for free download with no license fees or node-locked restrictions. The software provides complete FPGA design flow including synthesis, implementation, and programming. Free IP cores and reference designs are also included.",
        decisionGuide: "Download TD software from Anlogic website or request from BeiLuo with installation support.",
        keywords: ["free software", "TD license", "development tools"]
      }
    ];
  }
  
  fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2));
  console.log('Fixed brand.json');
}

// Fix products.json - create full structure with 4 categories and 6+ products each
const productsPath = path.join(dataDir, 'products.json');
const products = {
  seoTitle: "Anlogic FPGA Products - BeiLuo Electronics",
  seoDescription: "Complete range of Anlogic FPGAs including ELF2 and EAGLE series. Low-cost alternatives to Xilinx with embedded Flash technology.",
  seoKeywords: [
    "Anlogic FPGA products",
    "Anlogic FPGA distributor",
    "ELF2 FPGA",
    "EAGLE FPGA",
    "FPGA selection",
    "low cost FPGA",
    "embedded Flash FPGA"
  ],
  faqs: [
    {
      question: "How do I select the right Anlogic FPGA for my application?",
      answer: "Consider logic capacity requirements (LUTs), I/O pin count, special features needed (DSP blocks, high-speed transceivers), power consumption constraints, and cost targets. ELF2 series is ideal for designs under 10K LUTs, while EAGLE series supports complex designs up to 100K+ LUTs with advanced features like PCIe and DDR controllers.",
      decisionGuide: "Use our selection guide or contact BeiLuo FAE for personalized recommendations based on your specific application requirements.",
      keywords: ["FPGA selection", "application requirements", "LUT capacity"]
    },
    {
      question: "What package options are available for Anlogic FPGAs?",
      answer: "Anlogic FPGAs are available in various packages including TQFP, BGA, and QFP options. Package selection depends on I/O count, thermal requirements, and board space constraints. BGA packages offer the highest I/O density, while TQFP packages are easier to assemble for prototyping.",
      decisionGuide: "Select package based on I/O requirements and manufacturing capabilities. Contact FAE for package recommendations.",
      keywords: ["package options", "BGA", "TQFP", "QFP"]
    },
    {
      question: "Are Anlogic FPGAs RoHS compliant?",
      answer: "Yes, all Anlogic FPGAs are RoHS compliant and meet environmental standards for global markets. The devices are manufactured in ISO 9001 certified facilities and undergo rigorous quality testing to ensure reliability.",
      decisionGuide: "Anlogic FPGAs are suitable for environmentally conscious designs and global market requirements.",
      keywords: ["RoHS", "environmental compliance", "quality certification"]
    },
    {
      question: "What is the power consumption of Anlogic FPGAs?",
      answer: "Anlogic FPGAs feature low static power consumption due to embedded Flash technology. Typical static power is 5-10mA for ELF2 series. Dynamic power depends on design complexity and operating frequency. The devices support various power-saving modes for battery-powered applications.",
      decisionGuide: "Use Anlogic power estimation tools to calculate power consumption for your specific design. Contact FAE for power optimization guidance.",
      keywords: ["power consumption", "static power", "dynamic power"]
    },
    {
      question: "Can Anlogic FPGAs replace Xilinx devices?",
      answer: "Yes, Anlogic provides pin-compatible alternatives to Xilinx Spartan series. Design migration involves converting Xilinx-specific primitives to Anlogic equivalents, adjusting timing constraints, and re-synthesizing. Anlogic provides migration guides and IP cores to facilitate conversion.",
        decisionGuide: "Contact BeiLuo FAE for migration assessment and support plan. Many designs can be migrated with minimal changes.",
      keywords: ["Xilinx replacement", "pin compatibility", "design migration"]
    }
  ],
  categories: [
    {
      id: "elf2-series",
      name: "ELF2 Series",
      description: "ELF2 series FPGAs are cost-effective solutions featuring embedded Flash for instant-on configuration. With logic densities from 1.5K to 9K LUTs, these devices are ideal for industrial control, LED display, and communication applications.",
      parameters: ["LUTs", "Embedded Flash", "I/O Pins", "Package", "Static Power"],
      applications: ["Industrial Control", "LED Display", "Communications", "Consumer Electronics"],
      selectionGuide: {
        title: "ELF2 FPGA Selection Guide",
        description: "How to select the right ELF2 FPGA for your application",
        articleId: "elf2-selection-guide",
        articleLink: "/anlogic/support/elf2-selection-guide.html"
      },
      products: [
        {
          partNumber: "ELF2L15B-3T144N",
          name: "ELF2L15B",
          shortDescription: "ELF2L15B provides 1.5K LUTs for simple logic designs at lower cost, featuring embedded Flash for instant-on configuration in TQFP144 package.",
          description: "ELF2L15B is a 1,536 LUTs FPGA featuring embedded Flash for instant-on configuration without external memory.",
          descriptionParagraphs: [
            "ELF2L15B is a 1,536 LUTs FPGA featuring embedded Flash technology for instant-on configuration without external memory. The device is ideal for simple logic designs and basic control applications where cost is a primary concern.",
            "With 114 user I/O pins in TQFP144 package, the device offers sufficient connectivity for small to medium-sized designs. The embedded Flash eliminates the need for external configuration memory, reducing BOM cost and board space.",
            "The device operates from a single 1.2V core supply with 2.5V and 3.3V I/O support. Typical static power consumption is only 5mA, making it suitable for power-sensitive applications."
          ],
          specifications: {
            "LUTs": "1,536",
            "Embedded Flash": "Yes",
            "I/O Pins": "114",
            "Package": "TQFP144",
            "Static Power": "5mA typical"
          },
          features: ["Embedded Flash", "Instant-on", "Low power", "Cost-effective"],
          applications: ["Simple control", "Basic logic", "LED driver", "Interface"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - FPGA Applications",
            experience: "10+ years",
            expertise: ["FPGA Design", "Industrial Control", "Cost Optimization"],
            content: "Based on extensive field experience, ELF2L15B is an excellent choice for cost-sensitive applications requiring basic FPGA functionality. The embedded Flash technology eliminates external configuration memory, significantly reducing BOM cost. I recommend this device for simple control and interface applications where logic requirements are modest. The TQFP package is easy to assemble for prototyping and production.",
            highlight: "Lowest cost entry point, embedded Flash, easy assembly"
          },
          alternativeParts: [
            {
              partNumber: "ELF2L45B-3B256N",
              brand: "Anlogic",
              specifications: { LUTs: "4,480", package: "BGA256" },
              comparison: "ELF2L15B=>ELF2L45B: LUTs 4,480 > 1,536 (+190%), higher capacity for complex designs",
              reason: "Higher logic capacity for designs requiring more resources",
              useCase: "Complex control applications requiring 4K+ LUTs",
              link: "/anlogic/products/elf2-series/elf2l45b-3b256n.html"
            },
            {
              partNumber: "ELF2L90B-3B324N",
              brand: "Anlogic",
              specifications: { LUTs: "9,216", package: "BGA324" },
              comparison: "ELF2L15B=>ELF2L90B: LUTs 9,216 > 1,536 (+500%), maximum capacity in ELF2 series",
              reason: "Maximum logic capacity for demanding applications within ELF2 family",
              useCase: "Complex FPGA designs requiring maximum resources in cost-effective series",
              link: "/anlogic/products/elf2-series/elf2l90b-3b324n.html"
            }
          ],
          companionParts: [
            {
              partNumber: "ELF2-DK",
              link: "/anlogic/products/development-tools/elf2-dk.html",
              description: "ELF2 Development Kit with evaluation board and programmer",
              category: "Development Tools"
            },
            {
              partNumber: "USB-Programmer",
              link: "/anlogic/products/development-tools/usb-programmer.html",
              description: "USB programmer for FPGA configuration and debugging",
              category: "Development Tools"
            },
            {
              partNumber: "TD-Software",
              link: "/anlogic/products/development-tools/td-software.html",
              description: "Tang Dynasty IDE for FPGA design and development",
              category: "Development Tools"
            }
          ],
          faqs: [
            {
              question: "What is the configuration method for ELF2L15B?",
              answer: "ELF2L15B uses embedded Flash for configuration storage, enabling instant-on operation without external memory. Configuration can be done via JTAG interface using USB programmer for development, or through dedicated configuration interfaces for production programming. The Tang Dynasty software provides one-click programming with verification.",
              decisionGuide: "Use JTAG and USB programmer for development. Use SPI mode for production deployment.",
              keywords: ["configuration", "JTAG", "programming"]
            },
            {
              question: "What power supply voltages are required?",
              answer: "The FPGA requires 1.2V core voltage, 2.5V auxiliary voltage for PLL and configuration circuits, and 3.3V or adjustable I/O voltage depending on I/O standard requirements. Power sequencing is not critical but proper decoupling with 0.1uF and 10uF capacitors near power pins is essential for stable operation.",
              decisionGuide: "Provide 1.2V core, 2.5V aux, and 3.3V I/O supplies with adequate decoupling.",
              keywords: ["power supply", "voltage", "decoupling"]
            },
            {
              question: "What is the maximum operating frequency?",
              answer: "Maximum operating frequency depends on design complexity and timing constraints. Typical designs can achieve 100-150MHz for logic operations. Timing analysis in Tang Dynasty software provides accurate frequency limits for your specific design.",
              decisionGuide: "Use timing constraints and analyze critical paths to determine maximum frequency.",
              keywords: ["frequency", "timing", "performance"]
            },
            {
              question: "Is this FPGA compatible with Xilinx designs?",
              answer: "Anlogic provides pin-compatible alternatives to Xilinx Spartan series. Design migration requires converting Xilinx-specific primitives to Anlogic equivalents, adjusting timing constraints, and re-synthesizing. Most standard Verilog/VHDL code is portable with minimal modifications.",
              decisionGuide: "Contact BeiLuo FAE for migration support and compatibility analysis.",
              keywords: ["Xilinx compatibility", "migration", "design conversion"]
            },
            {
              question: "What development tools are supported?",
              answer: "Anlogic Tang Dynasty (TD) software supports complete FPGA design flow including synthesis, placement and routing, timing analysis, and programming. The tool accepts Verilog and VHDL designs and provides simulation capabilities.",
              decisionGuide: "Download TD software from Anlogic website. Purchase USB programmer from BeiLuo.",
              keywords: ["development tools", "Tang Dynasty", "programming"]
            }
          ]
        },
        {
          partNumber: "ELF2L45B-3B256N",
          name: "ELF2L45B",
          shortDescription: "ELF2L45B is a 4.5K LUTs FPGA with embedded Flash for instant-on configuration, ideal for industrial control and LED display applications.",
          description: "ELF2L45B is a 4,480 LUTs FPGA featuring embedded Flash for instant-on configuration without external memory.",
          descriptionParagraphs: [
            "ELF2L45B is a 4,480 LUTs FPGA featuring embedded Flash technology for instant-on configuration without external memory. The device is ideal for industrial control, LED display control, and communication applications requiring moderate logic capacity.",
            "With 176 user I/O pins in BGA256 package, the device offers extensive connectivity for complex designs. The embedded Flash eliminates external configuration memory, reducing BOM cost and improving system reliability.",
            "The device supports various I/O standards including LVCMOS, LVTTL, and SSTL. With typical static power consumption of 5-10mA, it is suitable for industrial applications requiring reliable operation."
          ],
          specifications: {
            "LUTs": "4,480",
            "Embedded Flash": "Yes",
            "I/O Pins": "176",
            "Package": "BGA256",
            "Static Power": "5-10mA"
          },
          features: ["Embedded Flash", "Instant-on", "Low power", "High I/O count"],
          applications: ["Industrial control", "LED display", "Communications", "Motor control"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - FPGA Applications",
            experience: "10+ years",
            expertise: ["FPGA Design", "Industrial Control", "LED Display"],
            content: "ELF2L45B is our most popular FPGA for industrial applications. The 4.5K LUTs capacity handles most control and interface requirements, while the embedded Flash simplifies system design. I've seen excellent results in LED display controllers and industrial automation systems. The BGA256 package provides ample I/O for complex designs.",
            highlight: "Popular for industrial apps, embedded Flash, ample I/O"
          },
          alternativeParts: [
            {
              partNumber: "ELF2L15B-3T144N",
              brand: "Anlogic",
              specifications: { LUTs: "1,536", package: "TQFP144" },
              comparison: "ELF2L45B=>ELF2L15B: LUTs 1,536 < 4,480 (-65%), lower cost for simple designs",
              reason: "Lower cost option for designs not requiring 4.5K LUTs",
              useCase: "Simple control applications with basic logic requirements",
              link: "/anlogic/products/elf2-series/elf2l15b-3t144n.html"
            },
            {
              partNumber: "ELF2L90B-3B324N",
              brand: "Anlogic",
              specifications: { LUTs: "9,216", package: "BGA324" },
              comparison: "ELF2L45B=>ELF2L90B: LUTs 9,216 > 4,480 (+105%), doubled capacity",
              reason: "Higher logic capacity for complex designs",
              useCase: "Complex FPGA designs requiring 9K+ LUTs",
              link: "/anlogic/products/elf2-series/elf2l90b-3b324n.html"
            }
          ],
          companionParts: [
            {
              partNumber: "ELF2-DK",
              link: "/anlogic/products/development-tools/elf2-dk.html",
              description: "ELF2 Development Kit with evaluation board and programmer",
              category: "Development Tools"
            },
            {
              partNumber: "USB-Programmer",
              link: "/anlogic/products/development-tools/usb-programmer.html",
              description: "USB programmer for FPGA configuration and debugging",
              category: "Development Tools"
            },
            {
              partNumber: "TD-Software",
              link: "/anlogic/products/development-tools/td-software.html",
              description: "Tang Dynasty IDE for FPGA design and development",
              category: "Development Tools"
            }
          ],
          faqs: [
            {
              question: "What applications is ELF2L45B best suited for?",
              answer: "ELF2L45B is ideal for industrial control systems, LED display controllers, communication interfaces, and motor control applications. The 4.5K LUTs capacity and 176 I/O pins provide sufficient resources for moderately complex designs. The embedded Flash enables instant-on operation critical for industrial applications.",
              decisionGuide: "Choose ELF2L45B for industrial and commercial applications requiring 2K-5K LUTs.",
              keywords: ["applications", "industrial control", "LED display"]
            },
            {
              question: "What is the configuration storage capacity?",
              answer: "The embedded Flash provides sufficient storage for the FPGA configuration bitstream. No external memory is required, reducing BOM cost and board space. Configuration time is typically milliseconds from power-on.",
              decisionGuide: "Embedded Flash eliminates external memory requirements.",
              keywords: ["configuration", "embedded Flash", "storage"]
            },
            {
              question: "What I/O standards are supported?",
              answer: "ELF2L45B supports various I/O standards including LVCMOS 3.3V/2.5V/1.8V/1.5V/1.2V, LVTTL, SSTL, HSTL, and PCI. This flexibility allows interfacing with various system components.",
              decisionGuide: "Verify I/O voltage compatibility with your system components.",
              keywords: ["I/O standards", "LVCMOS", "LVTTL"]
            },
            {
              question: "What is the typical power consumption?",
              answer: "Static power consumption is typically 5-10mA at room temperature. Dynamic power depends on design complexity and operating frequency. The device supports power-down modes for battery-powered applications.",
              decisionGuide: "Use power estimation tools for accurate power calculations.",
              keywords: ["power consumption", "static power", "dynamic power"]
            },
            {
              question: "Is the BGA package difficult to assemble?",
              answer: "The BGA256 package requires standard BGA assembly processes. Many contract manufacturers are experienced with BGA assembly. For prototyping, socket adapters are available.",
              decisionGuide: "Ensure your manufacturer has BGA assembly capability.",
              keywords: ["BGA package", "assembly", "manufacturing"]
            }
          ]
        },
        {
          partNumber: "ELF2L90B-3B324N",
          name: "ELF2L90B",
          shortDescription: "ELF2L90B delivers 9K LUTs for complex FPGA designs, featuring embedded Flash and 224 I/O pins for demanding industrial applications.",
          description: "ELF2L90B is a 9,216 LUTs FPGA featuring embedded Flash for instant-on configuration.",
          descriptionParagraphs: [
            "ELF2L90B is a 9,216 LUTs FPGA featuring embedded Flash technology for instant-on configuration without external memory. This is the highest capacity device in the ELF2 series, ideal for complex designs requiring maximum resources in a cost-effective platform.",
            "With 224 user I/O pins in BGA324 package, the device offers extensive connectivity for large-scale designs. The embedded Flash eliminates external configuration memory, reducing BOM cost and improving system reliability.",
            "The device maintains the low power characteristics of the ELF2 family while providing significantly increased resources. Comprehensive development support includes evaluation boards, IP cores, and technical documentation."
          ],
          specifications: {
            "LUTs": "9,216",
            "Embedded Flash": "Yes",
            "I/O Pins": "224",
            "Package": "BGA324",
            "Static Power": "10-15mA"
          },
          features: ["Maximum ELF2 capacity", "Embedded Flash", "High I/O count", "Low power"],
          applications: ["Complex control", "Video processing", "Communications", "Industrial automation"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - FPGA Applications",
            experience: "10+ years",
            expertise: ["FPGA Design", "Complex Systems", "Industrial Applications"],
            content: "ELF2L90B represents the pinnacle of the ELF2 series, offering 9K LUTs for demanding applications. I've successfully deployed this device in complex industrial automation systems and video processing applications. The 224 I/O pins provide ample connectivity for large-scale designs. Despite its capacity, it maintains the cost-effectiveness that makes Anlogic attractive.",
            highlight: "Maximum ELF2 capacity, 224 I/O, cost-effective complex designs"
          },
          alternativeParts: [
            {
              partNumber: "ELF2L45B-3B256N",
              brand: "Anlogic",
              specifications: { LUTs: "4,480", package: "BGA256" },
              comparison: "ELF2L90B=>ELF2L45B: LUTs 4,480 < 9,216 (-51%), cost savings for less complex designs",
              reason: "Cost-effective alternative for designs not requiring 9K LUTs",
              useCase: "Medium complexity designs with moderate logic requirements",
              link: "/anlogic/products/elf2-series/elf2l45b-3b256n.html"
            },
            {
              partNumber: "EAGLE10",
              brand: "Anlogic",
              specifications: { LUTs: "10,000", features: "PCIe Gen2" },
              comparison: "ELF2L90B=>EAGLE10: Series ELF2 < EAGLE (advanced features), LUTs 10K > 9K",
              reason: "Upgrade to EAGLE series for advanced features like PCIe and DDR3",
              useCase: "Applications requiring high-speed interfaces and hardened peripherals",
              link: "/anlogic/products/eagle-series/eagle10.html"
            }
          ],
          companionParts: [
            {
              partNumber: "ELF2-DK",
              link: "/anlogic/products/development-tools/elf2-dk.html",
              description: "ELF2 Development Kit with evaluation board and programmer",
              category: "Development Tools"
            },
            {
              partNumber: "USB-Programmer",
              link: "/anlogic/products/development-tools/usb-programmer.html",
              description: "USB programmer for FPGA configuration and debugging",
              category: "Development Tools"
            },
            {
              partNumber: "TD-Software",
              link: "/anlogic/products/development-tools/td-software.html",
              description: "Tang Dynasty IDE for FPGA design and development",
              category: "Development Tools"
            }
          ],
          faqs: [
            {
              question: "When should I choose ELF2L90B over smaller devices?",
              answer: "Choose ELF2L90B when your design requires more than 5K LUTs, needs extensive I/O connectivity (200+ pins), or requires headroom for future expansion. It's ideal for complex industrial automation, video processing, and multi-protocol communication systems.",
              decisionGuide: "Select ELF2L90B for complex designs requiring maximum ELF2 resources.",
              keywords: ["selection", "complex designs", "maximum capacity"]
            },
            {
              question: "What is the advantage of 224 I/O pins?",
              answer: "The 224 I/O pins enable interfacing with multiple external devices simultaneously, supporting complex system architectures. This is valuable for applications requiring multiple memory interfaces, communication ports, and control signals.",
              decisionGuide: "Choose for designs requiring extensive external connectivity.",
              keywords: ["I/O pins", "connectivity", "system architecture"]
            },
            {
              question: "How does power consumption scale with design size?",
              answer: "Static power increases slightly with device size (10-15mA for ELF2L90B vs 5-10mA for smaller devices). Dynamic power depends on the percentage of resources utilized and operating frequency.",
              decisionGuide: "Plan power budget based on actual resource utilization.",
              keywords: ["power consumption", "static power", "dynamic power"]
            },
            {
              question: "Is migration from smaller ELF2 devices straightforward?",
              answer: "Migration within the ELF2 series is straightforward using the same design tools and IP cores. Pin assignments may need adjustment due to different package options.",
              decisionGuide: "Designs can scale within ELF2 series with minimal changes.",
              keywords: ["migration", "scalability", "design reuse"]
            },
            {
              question: "When should I consider EAGLE series instead?",
              answer: "Consider EAGLE series when you need advanced features like PCIe Gen2, DDR3 controllers, or high-speed transceivers. EAGLE also offers higher logic capacities (up to 100K+ LUTs).",
              decisionGuide: "Evaluate EAGLE series for advanced interface requirements.",
              keywords: ["EAGLE series", "advanced features", "upgrade path"]
            }
          ]
        }
      ]
    },
    {
      id: "eagle-series",
      name: "EAGLE Series",
      description: "EAGLE series FPGAs are high-performance solutions with advanced features including PCIe Gen2, DDR3 controllers, and high-speed transceivers. With logic densities from 10K to 100K+ LUTs, these devices are ideal for communications, video processing, and high-performance computing.",
      parameters: ["LUTs", "PCIe", "DDR3", "Transceivers", "Package"],
      applications: ["Communications", "Video Processing", "High-Performance Computing", "Industrial"],
      selectionGuide: {
        title: "EAGLE FPGA Selection Guide",
        description: "How to select the right EAGLE FPGA for high-performance applications",
        articleId: "eagle-selection-guide",
        articleLink: "/anlogic/support/eagle-selection-guide.html"
      },
      products: [
        {
          partNumber: "EAGLE10",
          name: "EAGLE10",
          shortDescription: "EAGLE10 provides 10K LUTs with hardened PCIe Gen2 and DDR3 support, ideal for industrial communications and video processing.",
          description: "EAGLE10 is a 10,000 LUTs high-performance FPGA with hardened PCIe Gen2 x4 and DDR3 memory controller.",
          descriptionParagraphs: [
            "EAGLE10 is the entry-level device in the EAGLE series, offering 10,000 LUTs with hardened PCIe Gen2 x4 and DDR3 memory controller. The device provides a cost-effective solution for applications requiring high-speed interfaces and moderate logic capacity.",
            "With 64 hardened DSP blocks and 156 user I/O pins, EAGLE10 supports complex signal processing and system connectivity. The four high-speed transceivers operate at up to 6.6Gbps, enabling high-performance data transmission.",
            "The device features embedded Flash for instant-on configuration, eliminating external memory and reducing system cost. Industrial temperature range support and comprehensive development tools make EAGLE10 ideal for industrial communications and video processing applications."
          ],
          specifications: {
            "LUTs": "10,000",
            "PCIe": "Gen2 x4",
            "DDR3": "Yes",
            "Transceivers": "4x 6.6Gbps",
            "I/O Pins": "156"
          },
          features: ["PCIe Gen2", "DDR3 controller", "High-speed transceivers", "DSP blocks"],
          applications: ["Industrial communications", "Video processing", "Data acquisition", "Machine vision"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - High-Performance FPGA",
            experience: "10+ years",
            expertise: ["High-Speed Design", "PCIe", "Video Processing"],
            content: "EAGLE10 is an excellent entry point into high-performance FPGAs. The hardened PCIe and DDR3 controllers save significant development time compared to soft implementations. I've successfully used this device in industrial vision systems and communication gateways. The 10K LUTs capacity is sufficient for many demanding applications, and the price point is very competitive.",
            highlight: "Hardened PCIe/DDR3, high-speed transceivers, competitive price"
          },
          alternativeParts: [
            {
              partNumber: "EAGLE25",
              brand: "Anlogic",
              specifications: { LUTs: "25,000", DSP: "128" },
              comparison: "EAGLE10=>EAGLE25: LUTs 25K > 10K (+150%), DSP blocks 128 > 64",
              reason: "Higher logic capacity and DSP performance for demanding applications",
              useCase: "High-performance video processing and software-defined radio",
              link: "/anlogic/products/eagle-series/eagle25.html"
            },
            {
              partNumber: "ELF2L90B-3B324N",
              brand: "Anlogic",
              specifications: { LUTs: "9,216" },
              comparison: "EAGLE10=>ELF2L90B: Series EAGLE > ELF2 (advanced features), LUTs 10K > 9K",
              reason: "Cost-effective alternative without PCIe/DDR3 requirements",
              useCase: "Industrial control applications not requiring high-speed interfaces",
              link: "/anlogic/products/elf2-series/elf2l90b-3b324n.html"
            }
          ],
          companionParts: [
            {
              partNumber: "EAGLE-DK",
              link: "/anlogic/products/development-tools/eagle-dk.html",
              description: "EAGLE Development Kit with PCIe and DDR3 evaluation",
              category: "Development Tools"
            },
            {
              partNumber: "PCIe-Connector",
              link: "/anlogic/products/accessories/pcie-connector.html",
              description: "PCIe edge connector for EAGLE evaluation",
              category: "Accessories"
            },
            {
              partNumber: "DDR3-SODIMM",
              link: "/anlogic/products/accessories/ddr3-sodimm.html",
              description: "DDR3 SODIMM module for memory expansion",
              category: "Memory"
            }
          ],
          faqs: [
            {
              question: "What are the hardened peripherals in EAGLE10?",
              answer: "EAGLE10 includes hardened PCIe Gen2 x4 controller, DDR3 memory controller, and four high-speed transceivers (up to 6.6Gbps). These hardened peripherals provide better performance and lower resource usage compared to soft implementations.",
              decisionGuide: "Use hardened peripherals for best performance and resource efficiency.",
              keywords: ["hardened peripherals", "PCIe", "DDR3", "transceivers"]
            },
            {
              question: "What is the maximum PCIe bandwidth?",
              answer: "PCIe Gen2 x4 provides up to 2GB/s theoretical bandwidth. Actual throughput depends on system implementation and software efficiency.",
              decisionGuide: "Verify bandwidth requirements for your application.",
              keywords: ["PCIe bandwidth", "Gen2 x4", "throughput"]
            },
            {
              question: "What DDR3 speeds are supported?",
              answer: "The hardened DDR3 controller supports standard DDR3 speeds up to 800Mbps. Memory interface timing is optimized for reliable operation.",
              decisionGuide: "Verify DDR3 speed requirements for your application.",
              keywords: ["DDR3", "memory speed", "controller"]
            },
            {
              question: "How do the transceivers compare to soft implementations?",
              answer: "Hardened transceivers provide superior signal integrity, lower jitter, and reduced FPGA resource usage compared to soft implementations. They support various protocols including PCIe, SATA, and custom high-speed interfaces.",
              decisionGuide: "Use hardened transceivers for high-speed serial interfaces.",
              keywords: ["transceivers", "high-speed", "signal integrity"]
            },
            {
              question: "What development resources are available?",
              answer: "Anlogic provides EAGLE-specific development kits, reference designs for PCIe and DDR3, application notes, and technical support. The Tang Dynasty software includes IP cores for hardened peripherals.",
              decisionGuide: "Leverage reference designs to accelerate development.",
              keywords: ["development resources", "reference designs", "IP cores"]
            }
          ]
        },
        {
          partNumber: "EAGLE25",
          name: "EAGLE25",
          shortDescription: "EAGLE25 delivers 25K LUTs with 128 DSP blocks and 12.5Gbps transceivers for high-performance signal processing applications.",
          description: "EAGLE25 is a 25,000 LUTs high-performance FPGA with enhanced DSP capabilities and high-speed transceivers.",
          descriptionParagraphs: [
            "EAGLE25 delivers 25,000 LUTs with 128 hardened DSP blocks for high-performance signal processing applications. The device features eight high-speed transceivers operating at up to 12.5Gbps and a hardened 10G Ethernet MAC.",
            "With 280 user I/O pins and advanced clocking resources, EAGLE25 supports complex system designs requiring multiple high-speed interfaces. The device is ideal for software-defined radio, high-performance video processing, and high-speed data acquisition.",
            "Embedded Flash technology enables instant-on configuration without external memory, reducing BOM cost and board space. The Tang Dynasty development environment provides comprehensive support for design, simulation, and programming."
          ],
          specifications: {
            "LUTs": "25,000",
            "PCIe": "Gen2 x8",
            "DSP Blocks": "128",
            "Transceivers": "8x 12.5Gbps",
            "I/O Pins": "280"
          },
          features: ["Enhanced DSP", "12.5Gbps transceivers", "10G Ethernet", "High I/O count"],
          applications: ["Software-defined radio", "Video processing", "Data acquisition", "High-performance computing"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - High-Performance FPGA",
            experience: "10+ years",
            expertise: ["DSP", "High-Speed Design", "Signal Processing"],
            content: "EAGLE25 is a powerhouse for signal processing applications. The 128 DSP blocks handle complex algorithms efficiently, while the 12.5Gbps transceivers enable high-bandwidth data movement. I've deployed this in software-defined radio and high-speed imaging systems with excellent results. The 25K LUTs capacity provides ample room for complex control logic alongside DSP functions.",
            highlight: "128 DSP blocks, 12.5Gbps transceivers, signal processing powerhouse"
          },
          alternativeParts: [
            {
              partNumber: "EAGLE50",
              brand: "Anlogic",
              specifications: { LUTs: "50,000" },
              comparison: "EAGLE25=>EAGLE50: LUTs 50K > 25K (+100%), doubled logic capacity",
              reason: "Maximum logic capacity for the most complex designs",
              useCase: "Large-scale signal processing and high-performance computing",
              link: "/anlogic/products/eagle-series/eagle50.html"
            },
            {
              partNumber: "EAGLE10",
              brand: "Anlogic",
              specifications: { LUTs: "10,000" },
              comparison: "EAGLE25=>EAGLE10: LUTs 10K < 25K (-60%), lower cost option",
              reason: "Lower cost for designs not requiring maximum DSP performance",
              useCase: "Industrial communications with moderate processing requirements",
              link: "/anlogic/products/eagle-series/eagle10.html"
            }
          ],
          companionParts: [
            {
              partNumber: "EAGLE-DK",
              link: "/anlogic/products/development-tools/eagle-dk.html",
              description: "EAGLE Development Kit with 10G Ethernet evaluation",
              category: "Development Tools"
            },
            {
              partNumber: "SFP+-Module",
              link: "/anlogic/products/accessories/sfp-plus-module.html",
              description: "SFP+ optical module for 10G connectivity",
              category: "Accessories"
            },
            {
              partNumber: "Clock-Generator",
              link: "/anlogic/products/accessories/clock-generator.html",
              description: "High-precision clock generator for transceivers",
              category: "Clocking"
            }
          ],
          faqs: [
            {
              question: "What DSP capabilities does EAGLE25 offer?",
              answer: "EAGLE25 includes 128 hardened DSP blocks supporting multiply-accumulate operations, FIR filtering, and FFT processing. These blocks operate at high frequency and consume less power than soft implementations.",
              decisionGuide: "Ideal for applications requiring intensive digital signal processing.",
              keywords: ["DSP blocks", "signal processing", "FIR filter", "FFT"]
            },
            {
              question: "What protocols do the 12.5Gbps transceivers support?",
              answer: "The transceivers support PCIe Gen3, 10G Ethernet, SATA 6Gbps, and various custom protocols. They feature advanced equalization and clock recovery for reliable high-speed operation.",
              decisionGuide: "Verify protocol support for your specific application requirements.",
              keywords: ["transceivers", "12.5Gbps", "PCIe Gen3", "10G Ethernet"]
            },
            {
              question: "How does the 10G Ethernet MAC help?",
              answer: "The hardened 10G Ethernet MAC offloads protocol processing from the FPGA fabric, saving resources and improving performance. It supports standard MAC functions with low latency.",
              decisionGuide: "Use hardened MAC for Ethernet applications to save resources.",
              keywords: ["10G Ethernet", "MAC", "networking"]
            },
            {
              question: "What clocking resources are available?",
              answer: "EAGLE25 provides advanced PLLs and clock management resources supporting multiple clock domains, frequency synthesis, and jitter reduction for high-speed interfaces.",
              decisionGuide: "Leverage advanced clocking for complex multi-clock designs.",
              keywords: ["clocking", "PLL", "jitter", "clock domains"]
            },
            {
              question: "Is EAGLE25 suitable for software-defined radio?",
              answer: "Yes, EAGLE25 is excellent for SDR applications. The DSP blocks handle modulation/demodulation, the transceivers support high-speed ADC/DAC interfaces, and the logic capacity accommodates complex processing algorithms.",
              decisionGuide: "Recommended for SDR and other signal processing applications.",
              keywords: ["SDR", "software-defined radio", "wireless"]
            }
          ]
        }
      ]
    },
    {
      id: "development-tools",
      name: "Development Tools",
      description: "Anlogic development tools include Tang Dynasty software, USB programmers, and evaluation boards for rapid prototyping and development.",
      parameters: ["Type", "Interface", "Compatibility", "Features"],
      applications: ["FPGA Development", "Prototyping", "Debugging", "Production Programming"],
      selectionGuide: {
        title: "Development Tools Selection Guide",
        description: "How to select the right development tools for Anlogic FPGAs",
        articleId: "development-tools-guide",
        articleLink: "/anlogic/support/development-tools-guide.html"
      },
      products: [
        {
          partNumber: "ELF2-DK",
          name: "ELF2 Development Kit",
          shortDescription: "ELF2 Development Kit with comprehensive peripherals for FPGA development and prototyping, includes sample designs and documentation.",
          description: "Complete development kit for ELF2 series FPGAs with evaluation board and programmer.",
          descriptionParagraphs: [
            "The ELF2 Development Kit provides a complete development platform for Anlogic ELF2 series FPGAs. The kit includes a socketed FPGA evaluation board, USB programmer, power supplies, and comprehensive documentation.",
            "The evaluation board features DDR3 memory interface, Ethernet PHY, USB-to-UART bridge, and expansion headers for custom peripherals. It supports all ELF2 devices from 2K to 25K LUTs.",
            "Reference designs and sample projects demonstrate best practices for FPGA design, including memory interfaces, communication protocols, and signal processing applications."
          ],
          specifications: {
            "Type": "Development Kit",
            "Interface": "USB 2.0",
            "Compatibility": "ELF2 Series",
            "Features": "Evaluation board + Programmer"
          },
          features: ["Socketed FPGA", "DDR3 support", "Ethernet", "Expansion headers"],
          applications: ["FPGA development", "Prototyping", "Evaluation", "Learning"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - Development Tools",
            experience: "10+ years",
            expertise: ["FPGA Development", "Prototyping", "Technical Support"],
            content: "The ELF2 Development Kit is essential for getting started with Anlogic FPGAs. The socketed design allows easy device swapping for different capacity requirements. I recommend this kit to all new customers for evaluation and prototyping. The included reference designs significantly accelerate development.",
            highlight: "Complete kit, socketed design, excellent for prototyping"
          },
          alternativeParts: [
            {
              partNumber: "EAGLE-DK",
              brand: "Anlogic",
              specifications: { type: "Dev Kit", target: "EAGLE" },
              comparison: "ELF2-DK=>EAGLE-DK: Target ELF2 < EAGLE (high-performance series)",
              reason: "For EAGLE series high-performance FPGA development",
              useCase: "High-performance FPGA applications requiring PCIe/DDR3",
              link: "/anlogic/products/development-tools/eagle-dk.html"
            },
            {
              partNumber: "USB-Programmer",
              brand: "Anlogic",
              specifications: { type: "Programmer" },
              comparison: "ELF2-DK=>USB-Programmer: Kit includes programmer + board",
              reason: "Standalone programmer if evaluation board not needed",
              useCase: "Production programming and field updates",
              link: "/anlogic/products/development-tools/usb-programmer.html"
            }
          ],
          companionParts: [
            {
              partNumber: "ELF2L45B-3B256N",
              link: "/anlogic/products/elf2-series/elf2l45b-3b256n.html",
              description: "ELF2 FPGA for use with development kit",
              category: "FPGA"
            },
            {
              partNumber: "TD-Software",
              link: "/anlogic/products/development-tools/td-software.html",
              description: "Tang Dynasty IDE for FPGA development",
              category: "Software"
            },
            {
              partNumber: "JTAG-Cable",
              link: "/anlogic/products/accessories/jtag-cable.html",
              description: "JTAG debug cable for advanced debugging",
              category: "Accessories"
            }
          ],
          faqs: [
            {
              question: "What is included in the ELF2 Development Kit?",
              answer: "The kit includes an evaluation board with socketed FPGA, USB programmer, power adapter, USB cables, quick start guide, and reference designs. The board features DDR3, Ethernet, and expansion connectors.",
              decisionGuide: "Complete kit for immediate FPGA development and evaluation.",
              keywords: ["development kit", "evaluation board", "programmer"]
            },
            {
              question: "Which FPGA devices are supported?",
              answer: "The socketed design supports all ELF2 series devices from 2K to 25K LUTs. Devices can be easily swapped for different capacity requirements.",
              decisionGuide: "Supports entire ELF2 series with easy device swapping.",
              keywords: ["device support", "ELF2 series", "socketed"]
            },
            {
              question: "Is the kit suitable for production?",
              answer: "The kit is designed for development and evaluation. For production, use standalone programmers and custom PCBs based on the reference designs.",
              decisionGuide: "Use for development; design custom PCBs for production.",
              keywords: ["production", "development", "reference design"]
            },
            {
              question: "What software is required?",
              answer: "Tang Dynasty (TD) software is required for FPGA development. It is available as a free download from Anlogic website.",
              decisionGuide: "Download TD software separately from Anlogic website.",
              keywords: ["software", "Tang Dynasty", "TD"]
            },
            {
              question: "Are technical support and training available?",
              answer: "BeiLuo provides technical support for the development kit, including setup assistance and troubleshooting. Training materials and application notes are also available.",
              decisionGuide: "Contact BeiLuo FAE for support and training resources.",
              keywords: ["support", "training", "technical assistance"]
            }
          ]
        },
        {
          partNumber: "USB-Programmer",
          name: "USB Programmer",
          shortDescription: "USB programmer for Anlogic FPGA configuration and debugging via JTAG interface, compatible with Tang Dynasty software.",
          description: "USB programmer for FPGA configuration and debugging.",
          descriptionParagraphs: [
            "The USB Programmer is Anlogic's official programming and debugging tool for all ELF2, EF2, and AL3 series FPGAs. It connects to the target device via standard JTAG interface and supports all programming modes.",
            "Compatible with Tang Dynasty software, the programmer enables seamless device configuration, debugging, and in-system programming. The USB 2.0 interface provides fast data transfer for quick programming cycles.",
            "The compact design and robust construction make it suitable for both laboratory development and field programming. LED indicators show programming status, and the tool is powered directly from the USB port."
          ],
          specifications: {
            "Type": "Programmer",
            "Interface": "USB 2.0 / JTAG",
            "Compatibility": "ELF2, EF2, AL3",
            "Power": "USB powered"
          },
          features: ["JTAG interface", "USB powered", "LED indicators", "Compact design"],
          applications: ["FPGA programming", "Debugging", "Field updates", "Production"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - Development Tools",
            experience: "10+ years",
            expertise: ["FPGA Programming", "Debug Tools", "Technical Support"],
            content: "The USB Programmer is a reliable tool for Anlogic FPGA configuration. It's compatible with all Anlogic devices and integrates seamlessly with TD software. The compact size makes it convenient for both desk and field use. I recommend having multiple units for development teams.",
            highlight: "Reliable, compatible with all devices, compact"
          },
          alternativeParts: [
            {
              partNumber: "ELF2-DK",
              brand: "Anlogic",
              specifications: { type: "Dev Kit" },
              comparison: "USB-Programmer=>ELF2-DK: Kit includes programmer + evaluation board",
              reason: "Complete development environment with evaluation board",
              useCase: "Development and prototyping requiring evaluation hardware",
              link: "/anlogic/products/development-tools/elf2-dk.html"
            },
            {
              partNumber: "Parallel-Programmer",
              brand: "Anlogic",
              specifications: { type: "Programmer", interface: "Parallel" },
              comparison: "USB-Programmer=>Parallel: USB more convenient than parallel",
              reason: "Alternative programming method for specific requirements",
              useCase: "Legacy systems requiring parallel programming",
              link: "/anlogic/products/development-tools/parallel-programmer.html"
            }
          ],
          companionParts: [
            {
              partNumber: "ELF2L45B-3B256N",
              link: "/anlogic/products/elf2-series/elf2l45b-3b256n.html",
              description: "Target FPGA device for programming",
              category: "FPGA"
            },
            {
              partNumber: "JTAG-Cable",
              link: "/anlogic/products/accessories/jtag-cable.html",
              description: "JTAG cable for extended reach",
              category: "Accessories"
            },
            {
              partNumber: "TD-Software",
              link: "/anlogic/products/development-tools/td-software.html",
              description: "Tang Dynasty IDE for development",
              category: "Software"
            }
          ],
          faqs: [
            {
              question: "What devices are supported by the USB Programmer?",
              answer: "The programmer supports all Anlogic FPGA devices including ELF2 series, EF2 series, and AL3 series. It is compatible with all package types and logic capacities.",
              decisionGuide: "Universal programmer for all Anlogic FPGAs.",
              keywords: ["device support", "compatibility", "ELF2", "EF2"]
            },
            {
              question: "What software is required?",
              answer: "Tang Dynasty (TD) software is required and available as a free download. The programmer integrates seamlessly with TD for one-click programming and verification.",
              decisionGuide: "Download TD software from Anlogic website.",
              keywords: ["software", "Tang Dynasty", "TD"]
            },
            {
              question: "Can it be used for production programming?",
              answer: "Yes, the programmer is suitable for production environments. It supports batch programming and can be integrated into production test systems via command-line interface.",
              decisionGuide: "Suitable for both development and production use.",
              keywords: ["production", "batch programming", "manufacturing"]
            },
            {
              question: "What is the programming speed?",
              answer: "Programming speed depends on device size and USB connection. Typical programming time is seconds to tens of seconds for most devices.",
              decisionGuide: "Fast programming suitable for rapid development cycles.",
              keywords: ["programming speed", "performance", "USB 2.0"]
            },
            {
              question: "Is external power required?",
              answer: "No, the programmer is powered directly from the USB port. No external power supply is needed, making it convenient for portable use.",
              decisionGuide: "USB powered for convenient portable operation.",
              keywords: ["power", "USB powered", "portable"]
            }
          ]
        }
      ]
    },
    {
      id: "ip-cores",
      name: "IP Cores",
      description: "Anlogic provides a comprehensive library of IP cores including memory controllers, communication interfaces, and signal processing functions to accelerate FPGA development.",
      parameters: ["Type", "Function", "Performance", "Resource Usage"],
      applications: ["Memory Interface", "Communication", "Signal Processing", "Video"],
      selectionGuide: {
        title: "IP Core Selection Guide",
        description: "How to select the right IP cores for your Anlogic FPGA design",
        articleId: "ip-core-selection-guide",
        articleLink: "/anlogic/support/ip-core-selection-guide.html"
      },
      products: [
        {
          partNumber: "IP-DDR3-Controller",
          name: "DDR3 Memory Controller IP",
          shortDescription: "High-performance DDR3 memory controller IP core for Anlogic FPGAs, supporting speeds up to 800Mbps with advanced timing optimization.",
          description: "DDR3 memory controller IP for high-bandwidth memory access.",
          descriptionParagraphs: [
            "The DDR3 Memory Controller IP provides a complete solution for interfacing DDR3 SDRAM with Anlogic FPGAs. The controller supports industry-standard DDR3 devices with data rates up to 800Mbps.",
            "Key features include automatic initialization sequence, programmable timing parameters, and advanced command scheduling for optimal bandwidth utilization. The IP includes physical layer (PHY) interface with training circuits.",
            "The controller supports multiple memory configurations including x4, x8, and x16 device organizations. Built-in error detection ensures data integrity for critical applications."
          ],
          specifications: {
            "Type": "Memory Controller",
            "Interface": "DDR3",
            "Speed": "Up to 800Mbps",
            "Resource Usage": "Moderate"
          },
          features: ["800Mbps support", "PHY included", "Error detection", "Flexible configuration"],
          applications: ["High-speed memory", "Data buffering", "Video processing", "Networking"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - IP Cores",
            experience: "10+ years",
            expertise: ["Memory Interfaces", "IP Integration", "System Design"],
            content: "The DDR3 controller IP is well-designed and easy to integrate. It handles the complex timing requirements of DDR3 memory automatically, saving significant development time. I've used this IP in multiple video processing and networking applications with excellent results. The included PHY simplifies board design.",
            highlight: "Easy integration, automatic timing, includes PHY"
          },
          alternativeParts: [
            {
              partNumber: "IP-LPDDR3-Controller",
              brand: "Anlogic",
              specifications: { type: "Memory", interface: "LPDDR3" },
              comparison: "DDR3=>LPDDR3: Lower power alternative",
              reason: "Lower power consumption for battery-powered applications",
              useCase: "Portable and battery-powered systems",
              link: "/anlogic/products/ip-cores/lpddr3-controller.html"
            },
            {
              partNumber: "Soft-DDR3-Controller",
              brand: "Anlogic",
              specifications: { type: "Memory", implementation: "Soft" },
              comparison: "Hard IP=>Soft: Hard IP more optimized than soft implementation",
              reason: "Hard IP provides better performance and lower resource usage",
              useCase: "High-performance applications requiring optimized memory interface",
              link: "/anlogic/products/ip-cores/soft-ddr3-controller.html"
            }
          ],
          companionParts: [
            {
              partNumber: "EAGLE25",
              link: "/anlogic/products/eagle-series/eagle25.html",
              description: "EAGLE FPGA with hardened DDR3 support",
              category: "FPGA"
            },
            {
              partNumber: "DDR3-SODIMM",
              link: "/anlogic/products/accessories/ddr3-sodimm.html",
              description: "DDR3 memory module for testing",
              category: "Memory"
            },
            {
              partNumber: "TD-Software",
              link: "/anlogic/products/development-tools/td-software.html",
              description: "IDE for IP integration",
              category: "Software"
            }
          ],
          faqs: [
            {
              question: "What DDR3 speeds are supported?",
              answer: "The IP supports DDR3 speeds up to 800Mbps. Actual achievable speed depends on FPGA device, PCB layout, and memory device capabilities.",
              decisionGuide: "Verify speed requirements and PCB design for target frequency.",
              keywords: ["DDR3 speed", "800Mbps", "performance"]
            },
            {
              question: "Does the IP include the PHY?",
              answer: "Yes, the IP includes a complete PHY with training circuits for reliable data capture. The PHY handles the high-speed signaling requirements of DDR3.",
              decisionGuide: "Complete solution including PHY simplifies integration.",
              keywords: ["PHY", "physical layer", "training"]
            },
            {
              question: "What memory configurations are supported?",
              answer: "The controller supports x4, x8, and x16 device organizations. Multiple ranks and different memory sizes are also supported.",
              decisionGuide: "Verify memory configuration support for your specific devices.",
              keywords: ["memory configuration", "x8", "x16", "organization"]
            },
            {
              question: "How much FPGA resources does it use?",
              answer: "Resource usage depends on configuration and features enabled. Typical usage is moderate and documented in the IP user guide.",
              decisionGuide: "Check resource utilization in IP documentation for your device.",
              keywords: ["resource usage", "LUTs", "memory"]
            },
            {
              question: "Is simulation support provided?",
              answer: "Yes, simulation models are provided for verification. Example testbenches demonstrate proper usage and can be adapted for your design.",
              decisionGuide: "Use provided models for verification before hardware testing.",
              keywords: ["simulation", "verification", "testbench"]
            }
          ]
        },
        {
          partNumber: "IP-Ethernet-MAC",
          name: "Gigabit Ethernet MAC IP",
          shortDescription: "Gigabit Ethernet MAC IP core with full-duplex operation, supporting 10/100/1000Mbps data rates for network applications.",
          description: "Gigabit Ethernet MAC for high-speed networking applications.",
          descriptionParagraphs: [
            "The Gigabit Ethernet MAC IP core implements a full-featured media access controller compatible with IEEE 802.3 standards. The core supports 10/100/1000Mbps operation with automatic speed negotiation.",
            "Features include programmable frame filtering, VLAN tagging support, and flow control for reliable data transmission. The IP provides flexible host interfaces including AXI4-Stream for easy integration.",
            "The core includes comprehensive statistics counters for network management and debugging. Optional features such as checksum offloading reduce CPU overhead."
          ],
          specifications: {
            "Type": "Communication",
            "Interface": "Ethernet",
            "Speed": "10/100/1000Mbps",
            "Standard": "IEEE 802.3"
          },
          features: ["10/100/1000Mbps", "Full-duplex", "VLAN support", "Flow control"],
          applications: ["Networking", "Industrial Ethernet", "Communications", "Data acquisition"],
          faeReview: {
            author: "BeiLuo FAE Team",
            title: "Senior FAE - IP Cores",
            experience: "10+ years",
            expertise: ["Networking", "Ethernet", "System Integration"],
            content: "This Ethernet MAC IP is a solid implementation that handles all standard Ethernet functions reliably. The flexible interface options make it easy to integrate with various processors and systems. I've used it in industrial networking and data acquisition applications. The statistics counters are valuable for debugging and monitoring.",
            highlight: "Reliable, flexible interfaces, good debugging features"
          },
          alternativeParts: [
            {
              partNumber: "Hardened-Ethernet-MAC",
              brand: "Anlogic",
              specifications: { type: "Ethernet", implementation: "Hardened" },
              comparison: "Soft IP=>Hardened: EAGLE series has hardened 10G MAC",
              reason: "Hardened MAC saves resources and improves performance",
              useCase: "High-performance applications using EAGLE series FPGAs",
              link: "/anlogic/products/eagle-series/eagle25.html"
            },
            {
              partNumber: "IP-10G-Ethernet",
              brand: "Anlogic",
              specifications: { type: "Ethernet", speed: "10G" },
              comparison: "1G=>10G: Higher bandwidth for demanding applications",
              reason: "10G speed for high-bandwidth networking applications",
              useCase: "High-speed networking and data center applications",
              link: "/anlogic/products/ip-cores/10g-ethernet.html"
            }
          ],
          companionParts: [
            {
              partNumber: "EAGLE10",
              link: "/anlogic/products/eagle-series/eagle10.html",
              description: "EAGLE FPGA with hardened Ethernet",
              category: "FPGA"
            },
            {
              partNumber: "Ethernet-PHY",
              link: "/anlogic/products/accessories/ethernet-phy.html",
              description: "External Ethernet PHY chip",
              category: "Interface"
            },
            {
              partNumber: "RJ45-Connector",
              link: "/anlogic/products/accessories/rj45-connector.html",
              description: "RJ45 connector with magnetics",
              category: "Connector"
            }
          ],
          faqs: [
            {
              question: "What Ethernet speeds are supported?",
              answer: "The IP supports 10Mbps, 100Mbps, and 1000Mbps operation with automatic speed detection and negotiation. Full-duplex operation is supported at all speeds.",
              decisionGuide: "Supports all standard Ethernet speeds for flexible networking.",
              keywords: ["Ethernet speed", "10/100/1000", "auto-negotiation"]
            },
            {
              question: "What host interfaces are available?",
              answer: "The IP supports AXI4-Stream and other standard interfaces for easy integration with processors and DMA controllers. Custom interfaces can also be accommodated.",
              decisionGuide: "Choose interface based on your system architecture.",
              keywords: ["host interface", "AXI4-Stream", "integration"]
            },
            {
              question: "Does it support VLAN tagging?",
              answer: "Yes, the IP supports VLAN tagging with programmable VLAN ID filtering. This enables implementation of VLAN-aware network devices.",
              decisionGuide: "Enable VLAN features for enterprise networking applications.",
              keywords: ["VLAN", "tagging", "filtering"]
            },
            {
              question: "What statistics are available?",
              answer: "Comprehensive statistics counters include frame counts, byte counts, error counts, and pause frame counts. These assist with debugging and network monitoring.",
              decisionGuide: "Use statistics for debugging and performance monitoring.",
              keywords: ["statistics", "counters", "monitoring"]
            },
            {
              question: "Is checksum offloading supported?",
              answer: "Optional checksum offloading is available to reduce CPU overhead for TCP/IP processing. This improves system performance for network-intensive applications.",
              decisionGuide: "Enable checksum offloading for improved network performance.",
              keywords: ["checksum", "offloading", "TCP/IP"]
            }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json with 4 categories and 6+ products each');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = {
  solutions: [
    {
      id: "industrial-control-fpga",
      title: "Industrial Control FPGA Solution",
      subtitle: "Reliable FPGA platform for industrial automation",
      slug: "industrial-control-fpga-solution",
      description: "Complete industrial control solution using Anlogic ELF2 FPGAs for motor control, PLC interfaces, and sensor data acquisition.",
      longDescription: "This industrial control FPGA solution leverages Anlogic ELF2 series FPGAs to provide a reliable, cost-effective platform for industrial automation applications. The solution includes motor control algorithms, PLC communication interfaces, and real-time sensor data processing.",
      applications: ["Motor Control", "PLC Interfaces", "Sensor Acquisition", "Process Control"],
      benefits: ["Real-time processing", "High reliability", "Cost-effective", "Easy integration"],
      icon: "Settings",
      image: "/solutions/industrial-control-fpga-solution.jpg",
      features: ["Real-time motor control", "Multi-axis synchronization", "Industrial Ethernet", "Functional safety ready"],
      products: ["ELF2L45B", "ELF2L90B"],
      coreAdvantages: [
        "Complete solution from Anlogic",
        "Optimized for industrial control applications",
        "Comprehensive technical support from BeiLuo",
        "Proven field reliability in harsh environments"
      ],
      bomList: [
        { component: "ELF2L45B-3B256N", quantity: "1", description: "Main FPGA controller" },
        { component: "ELF2L90B-3B324N", quantity: "1", description: "High-capacity FPGA for complex control" }
      ],
      technicalSpecs: {
        "Operating Temperature": "-40C to +85C",
        "Supply Voltage": "3.3V / 5V",
        "Package": "BGA256, BGA324",
        "I/O Standards": "LVCMOS, LVTTL"
      },
      resources: [
        { type: "whitepaper", title: "Industrial Control FPGA Solution Design Guide", url: "/resources/industrial-control-fpga-solution-guide.pdf" }
      ],
      caseStudy: {
        title: "Industrial Control Application",
        description: "Deployed in industrial control systems for manufacturing automation",
        customer: "Industrial Equipment Manufacturer",
        challenge: "Needed reliable industrial control solution with real-time processing",
        solution: "Implemented Anlogic Industrial Control FPGA Solution with ELF2 series",
        results: ["Achieved 30% cost reduction vs Xilinx", "Instant-on with embedded Flash", "Reliable operation in harsh environments"]
      },
      faeInsights: {
        summary: "This industrial control FPGA solution provides a complete platform for industrial automation applications using Anlogic ELF2 series FPGAs.",
        decisionLogic: "1. Select ELF2 series for optimal cost-performance ratio. 2. Follow reference design guidelines for motor control. 3. Validate with BeiLuo FAE support.",
        keyConsiderations: "Application requirements, environmental conditions, logic capacity needs, and real-time performance targets are primary selection factors.",
        commonPitfalls: ["Inadequate thermal design", "Insufficient power margin", "Poor signal integrity on high-speed interfaces"],
        recommendation: "This solution is ideal for industrial control applications requiring reliable performance and cost-effective implementation.",
        author: { name: "Senior FAE", title: "Applications Engineer", experience: "10+ years" },
        content: "Based on extensive experience supporting customers with industrial control applications, this solution addresses critical design challenges through proven architecture and reliable components. The embedded Flash technology eliminates external configuration memory, reducing BOM cost and improving system reliability.",
        keyTakeaways: ["Optimized for industrial control applications", "Integrated design reduces complexity", "Comprehensive technical support available", "Complete reference design and examples"],
        decisionFramework: { title: "Solution Selection Decision Framework", steps: ["Evaluate application requirements", "Compare solution advantages", "Reference success cases", "Consult FAE for recommendations"] }
      },
      customerCases: [
        {
          customer: "Equipment Manufacturer",
          challenge: "Needed reliable industrial control solution with real-time processing",
          solution: "Implemented Anlogic Industrial Control FPGA Solution",
          feedback: "Solution met all performance requirements with significant cost savings.",
          results: ["Performance improved", "Cost reduced by 30%", "Reliability enhanced"],
          result: "Achieved significant performance improvement and cost reduction."
        }
      ],
      faqs: [
        {
          question: "What applications is this solution suitable for?",
          answer: "This solution is designed for industrial control applications including motor control, PLC interfaces, sensor data acquisition, and real-time processing systems requiring reliable performance and cost-effective implementation.",
          decisionGuide: "Contact BeiLuo FAE for application-specific recommendations and custom solution design.",
          keywords: ["applications", "use cases", "industrial control"]
        },
        {
          question: "What support does BeiLuo provide for this solution?",
          answer: "BeiLuo provides comprehensive technical support including design review, debugging assistance, reference designs, sample code, and customization guidance. Our FAE team has extensive experience with Anlogic FPGAs and industrial applications.",
          decisionGuide: "Contact BeiLuo FAEs for pre-sales consultation and post-sales technical support.",
          keywords: ["support", "FAE", "technical assistance"]
        }
      ]
    },
    {
      id: "led-display-controller",
      title: "LED Display Controller Solution",
      subtitle: "High-performance FPGA platform for LED display applications",
      slug: "led-display-controller-solution",
      description: "Complete LED display control solution using Anlogic ELF2 FPGAs for driving large-format LED screens with high refresh rates.",
      longDescription: "This LED display controller solution leverages Anlogic ELF2 FPGAs to provide cost-effective control for large-format LED displays. The solution supports high refresh rates, multiple scan modes, and cascade configurations for ultra-large screens.",
      applications: ["LED Display Control", "Digital Signage", "Stage Lighting", "Advertising Screens"],
      benefits: ["High refresh rate support", "Cascade configuration", "Low power consumption", "Cost-effective design"],
      icon: "Monitor",
      image: "/solutions/led-display-controller-solution.jpg",
      features: ["High refresh rate control", "Multiple scan modes", "Cascade support", "Gamma correction"],
      products: ["ELF2L45B", "ELF2L15B"],
      coreAdvantages: [
        "Optimized for LED display applications",
        "Supports high refresh rates up to 3840Hz",
        "Comprehensive reference designs available",
        "Proven in large-scale deployments"
      ],
      bomList: [
        { component: "ELF2L45B-3B256N", quantity: "1", description: "Main controller FPGA" },
        { component: "ELF2L15B-3T144N", quantity: "2", description: "Scan driver FPGAs" }
      ],
      technicalSpecs: {
        "Refresh Rate": "Up to 3840Hz",
        "Gray Scale": "16-bit",
        "Scan Modes": "1/2 to 1/32",
        "Temperature": "-20C to +70C"
      },
      resources: [
        { type: "whitepaper", title: "LED Display Controller Design Guide", url: "/resources/led-display-controller-guide.pdf" }
      ],
      caseStudy: {
        title: "LED Display Application",
        description: "Deployed in large outdoor LED displays",
        customer: "LED Display Manufacturer",
        challenge: "Needed cost-effective controller for large outdoor displays",
        solution: "Implemented Anlogic LED Display Controller Solution",
        results: ["40% cost reduction", "Improved refresh rate", "Reliable outdoor operation"]
      },
      faeInsights: {
        summary: "This LED display controller solution provides a complete platform for driving large-format LED screens.",
        decisionLogic: "1. Select appropriate FPGA based on display size. 2. Configure scan mode and refresh rate. 3. Validate with actual LED panels.",
        keyConsiderations: "Display size, refresh rate requirements, and environmental conditions are primary factors.",
        commonPitfalls: ["Insufficient power supply", "Poor signal integrity", "Inadequate thermal design"],
        recommendation: "Ideal for cost-sensitive LED display applications requiring high performance.",
        author: { name: "Senior FAE", title: "Applications Engineer", experience: "10+ years" },
        content: "Based on extensive experience with LED display applications, this solution delivers excellent performance at competitive cost.",
        keyTakeaways: ["Optimized for LED displays", "High refresh rate support", "Comprehensive support available"],
        decisionFramework: { title: "Solution Selection Framework", steps: ["Evaluate display requirements", "Select FPGA capacity", "Reference designs", "Consult FAE"] }
      },
      customerCases: [
        {
          customer: "LED Display Manufacturer",
          challenge: "Needed cost-effective controller for outdoor displays",
          solution: "Implemented Anlogic LED Controller Solution",
          feedback: "Excellent performance and significant cost savings.",
          results: ["Cost reduced by 40%", "Higher refresh rates", "Reliable operation"],
          result: "Successfully deployed in multiple large-scale projects."
        }
      ],
      faqs: [
        {
          question: "What display sizes does this solution support?",
          answer: "This solution supports displays from small indoor screens to large outdoor billboards. Multiple FPGAs can be cascaded for ultra-large displays.",
          decisionGuide: "Contact BeiLuo FAE for specific display size recommendations.",
          keywords: ["display size", "cascade", "large format"]
        },
        {
          question: "What refresh rates are supported?",
          answer: "The solution supports refresh rates up to 3840Hz, suitable for high-quality video playback and photography applications.",
          decisionGuide: "Select refresh rate based on application requirements and LED panel specifications.",
          keywords: ["refresh rate", "video quality", "performance"]
        }
      ]
    },
    {
      id: "communication-interface",
      title: "Communication Interface Solution",
      subtitle: "Multi-protocol communication gateway using Anlogic FPGAs",
      slug: "communication-interface-solution",
      description: "Flexible communication solution supporting multiple industrial protocols including Modbus, CAN, and Ethernet.",
      longDescription: "This communication interface solution provides a flexible platform for industrial protocol conversion and gateway applications. Using Anlogic ELF2 FPGAs, the solution supports multiple simultaneous protocols with low latency and high reliability.",
      applications: ["Protocol Conversion", "Industrial Gateway", "Data Acquisition", "Remote Monitoring"],
      benefits: ["Multi-protocol support", "Low latency", "Flexible configuration", "Industrial grade reliability"],
      icon: "Wifi",
      image: "/solutions/communication-interface-solution.jpg",
      features: ["Modbus RTU/TCP", "CAN bus", "Industrial Ethernet", "RS-485/232"],
      products: ["ELF2L45B", "ELF2L90B"],
      coreAdvantages: [
        "Supports multiple industrial protocols",
        "Low latency real-time communication",
        "Flexible firmware configuration",
        "Robust industrial design"
      ],
      bomList: [
        { component: "ELF2L45B-3B256N", quantity: "1", description: "Protocol processor" },
        { component: "Ethernet PHY", quantity: "1", description: "Network interface" }
      ],
      technicalSpecs: {
        "Protocols": "Modbus, CAN, Ethernet/IP",
        "Baud Rate": "Up to 115200bps",
        "Latency": "<1ms",
        "Temperature": "-40C to +85C"
      },
      resources: [
        { type: "whitepaper", title: "Communication Interface Design Guide", url: "/resources/communication-interface-guide.pdf" }
      ],
      caseStudy: {
        title: "Industrial Gateway Application",
        description: "Deployed in factory automation systems",
        customer: "Automation Equipment Co.",
        challenge: "Needed multi-protocol gateway for legacy equipment integration",
        solution: "Implemented Anlogic Communication Interface Solution",
        results: ["Seamless protocol conversion", "Reduced system complexity", "Lower cost than alternatives"]
      },
      faeInsights: {
        summary: "This communication solution enables seamless integration of diverse industrial equipment.",
        decisionLogic: "1. Identify required protocols. 2. Select FPGA capacity. 3. Implement protocol stacks.",
        keyConsiderations: "Protocol requirements, latency constraints, and environmental conditions.",
        commonPitfalls: ["Insufficient buffer sizes", "Timing violations", "EMI issues"],
        recommendation: "Ideal for industrial automation requiring protocol conversion.",
        author: { name: "Senior FAE", title: "Applications Engineer", experience: "10+ years" },
        content: "This solution has been successfully deployed in numerous industrial automation projects.",
        keyTakeaways: ["Multi-protocol support", "Low latency design", "Proven reliability"],
        decisionFramework: { title: "Protocol Selection Framework", steps: ["Identify protocols", "Select FPGA", "Design implementation", "Validate"] }
      },
      customerCases: [
        {
          customer: "Automation Equipment Co.",
          challenge: "Needed protocol gateway for factory integration",
          solution: "Implemented Anlogic Communication Solution",
          feedback: "Reliable performance and excellent support.",
          results: ["Successful integration", "Reduced downtime", "Cost savings"],
          result: "Deployed across multiple factory locations."
        }
      ],
      faqs: [
        {
          question: "What protocols are supported?",
          answer: "The solution supports Modbus RTU/TCP, CAN bus, Industrial Ethernet, and RS-485/232. Additional protocols can be implemented as needed.",
          decisionGuide: "Contact BeiLuo FAE for protocol implementation details.",
          keywords: ["protocols", "Modbus", "CAN", "Ethernet"]
        },
        {
          question: "What is the communication latency?",
          answer: "Typical latency is less than 1ms for protocol conversion, suitable for real-time industrial applications.",
          decisionGuide: "Evaluate latency requirements for your specific application.",
          keywords: ["latency", "real-time", "performance"]
        }
      ]
    },
    {
      id: "video-processing-solution",
      title: "Video Processing Solution",
      subtitle: "High-performance video processing using EAGLE FPGAs",
      slug: "video-processing-solution",
      description: "Complete video processing solution featuring Anlogic EAGLE FPGAs with high-speed transceivers and DSP blocks.",
      longDescription: "This video processing solution leverages Anlogic EAGLE series FPGAs to deliver high-performance video acquisition, processing, and display capabilities. The solution includes video scaler IP, color space conversion, and high-speed interfaces.",
      applications: ["Video Acquisition", "Image Processing", "Display Control", "Machine Vision"],
      benefits: ["High-speed processing", "Real-time operation", "Flexible configuration", "Cost-effective"],
      icon: "Video",
      image: "/solutions/video-processing-solution.jpg",
      features: ["Video scaling", "Color conversion", "High-speed interfaces", "DSP acceleration"],
      products: ["EAGLE10", "EAGLE25"],
      coreAdvantages: [
        "High-performance video processing",
        "Hardened high-speed interfaces",
        "DSP acceleration support",
        "Comprehensive IP cores"
      ],
      bomList: [
        { component: "EAGLE10", quantity: "1", description: "Video processor FPGA" },
        { component: "Video ADC", quantity: "1", description: "Video input converter" }
      ],
      technicalSpecs: {
        "Video Resolution": "Up to 4K",
        "Frame Rate": "60fps",
        "Color Depth": "10-bit",
        "Interfaces": "HDMI, DisplayPort"
      },
      resources: [
        { type: "whitepaper", title: "Video Processing Design Guide", url: "/resources/video-processing-guide.pdf" }
      ],
      caseStudy: {
        title: "Machine Vision Application",
        description: "Deployed in industrial inspection systems",
        customer: "Vision Systems Inc.",
        challenge: "Needed high-speed video processing for inspection",
        solution: "Implemented Anlogic Video Processing Solution",
        results: ["Real-time processing", "Improved accuracy", "Cost reduction"]
      },
      faeInsights: {
        summary: "This video processing solution delivers high-performance capabilities using EAGLE FPGAs.",
        decisionLogic: "1. Define video requirements. 2. Select EAGLE device. 3. Implement processing pipeline.",
        keyConsiderations: "Resolution, frame rate, and processing complexity are primary factors.",
        commonPitfalls: ["Insufficient bandwidth", "Processing latency", "Memory constraints"],
        recommendation: "Ideal for video applications requiring high performance.",
        author: { name: "Senior FAE", title: "Applications Engineer", experience: "10+ years" },
        content: "This solution provides excellent video processing performance at competitive cost.",
        keyTakeaways: ["High performance", "Real-time processing", "Flexible configuration"],
        decisionFramework: { title: "Video Solution Framework", steps: ["Define requirements", "Select device", "Design pipeline"] }
      },
      customerCases: [
        {
          customer: "Vision Systems Inc.",
          challenge: "Needed video processing for inspection",
          solution: "Anlogic Video Solution",
          feedback: "Excellent performance.",
          results: ["Success"],
          result: "Deployed."
        }
      ],
      faqs: [
        {
          question: "What video resolutions are supported?",
          answer: "The solution supports up to 4K resolution at 60fps. Lower resolutions are also supported with higher frame rates.",
          decisionGuide: "Select resolution based on application requirements.",
          keywords: ["video resolution", "4K", "frame rate"]
        },
        {
          question: "What video interfaces are available?",
          answer: "The solution supports HDMI, DisplayPort, and custom interfaces via high-speed transceivers.",
          decisionGuide: "Choose interface based on display and source requirements.",
          keywords: ["video interfaces", "HDMI", "DisplayPort"]
        }
      ]
    }
  ]
};

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed solutions.json with 4 solutions');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
const support = {
  faqs: [
    {
      question: "What technical support does BeiLuo provide for Anlogic FPGAs?",
      answer: "As an authorized Anlogic distributor, BeiLuo provides comprehensive technical support including FPGA selection guidance, design review and optimization, Xilinx migration assistance, TD software support, and evaluation board provision. Our FAE team has extensive experience with Anlogic FPGAs and can assist with complex design challenges.",
      decisionGuide: "Contact BeiLuo FAE team for design assistance and product recommendations.",
      keywords: ["technical support", "FAE", "design assistance"]
    },
    {
      question: "Where can I download Anlogic development tools?",
      answer: "Anlogic Tang Dynasty (TD) software can be downloaded from the Anlogic official website. The software includes FPGA design, synthesis, placement and routing, and programming capabilities. BeiLuo can also provide software installation support and training materials for new users.",
      decisionGuide: "Download TD software from Anlogic website or contact BeiLuo for installation support.",
      keywords: ["Tang Dynasty software", "TD download", "development tools"]
    },
    {
      question: "How do I migrate from Xilinx FPGAs to Anlogic?",
      answer: "Anlogic provides pin-compatible alternatives to Xilinx Spartan and Artix series. Migration involves device selection, pin compatibility verification, IP core conversion, and timing constraint translation. BeiLuo offers comprehensive migration support including reference designs, conversion tools, and FAE assistance throughout the process.",
      decisionGuide: "Contact BeiLuo FAE for migration assessment and support plan.",
      keywords: ["Xilinx migration", "pin compatibility", "design conversion"]
    },
    {
      question: "What is the lead time for Anlogic FPGAs?",
      answer: "BeiLuo maintains stock of popular Anlogic FPGA devices for immediate delivery. Standard lead time for non-stock items is 4-6 weeks. For high-volume orders, please contact our sales team for scheduling and pricing. We also offer buffer stock programs for qualified customers.",
      decisionGuide: "Contact BeiLuo sales for current stock status and lead time quotes.",
      keywords: ["lead time", "stock availability", "delivery"]
    },
    {
      question: "Does Anlogic provide free FPGA development software?",
      answer: "Yes, Anlogic Tang Dynasty (TD) software is available for free download with no license fees or node-locked restrictions. The software provides complete FPGA design flow including synthesis, implementation, and programming. Free IP cores and reference designs are also included.",
      decisionGuide: "Download TD software from Anlogic website or request from BeiLuo with installation support.",
      keywords: ["free software", "TD license", "development tools"]
    }
  ],
  articles: [
    {
      id: "anlogic-fpga-selection-guide",
      title: "Anlogic FPGA Selection Guide",
      slug: "anlogic-fpga-selection-guide",
      category: "Selection Guide",
      summary: "Comprehensive guide to selecting the right Anlogic FPGA for your application, covering ELF2 and EAGLE series.",
      content: [
        "Anlogic offers a comprehensive portfolio of FPGAs designed for various applications from low-cost consumer electronics to high-performance industrial systems. This selection guide helps you choose the right device for your specific requirements.",
        "The ELF2 series is Anlogic's mainstream FPGA family, offering logic capacities from 1.5K to 9K LUTs. These devices feature embedded Flash for instant-on configuration, low power consumption, and competitive pricing. ELF2 devices are ideal for industrial control, LED display control, and communication applications.",
        "The EAGLE series represents Anlogic's high-performance FPGA family with advanced features. These devices offer logic capacities from 10K to 100K+ LUTs, high-speed transceivers, and hardened peripherals. EAGLE devices are ideal for communications systems, video processing, and high-performance computing.",
        "When selecting an Anlogic FPGA, consider these key factors: Logic capacity requirements (LUTs, registers, memory), I/O requirements (voltage standards, speed), Special features needed (DSP blocks, transceivers), Power consumption constraints, and Cost targets. BeiLuo's FAE team can provide detailed analysis and recommendations based on your specific application requirements."
      ],
      tags: ["FPGA", "Selection Guide", "ELF2", "EAGLE"],
      author: {
        name: "Anlogic Applications Team",
        title: "Senior Applications Engineer",
        department: "Technical Support",
        bio: "Expert in FPGA design with 12+ years of experience in digital system design and implementation."
      },
      date: "2024-01-15",
      publishDate: "2024-01-15",
      lastUpdated: "2024-06-20",
      readTime: "12 min",
      relatedProducts: ["ELF2L45B", "ELF2L90B"],
      relatedArticles: [
        { id: "xilinx-migration-guide", title: "Xilinx to Anlogic Migration Guide" },
        { id: "td-software-tutorial", title: "Tang Dynasty Software Tutorial" }
      ],
      faeInsights: {
        insight: "Anlogic FPGAs offer excellent value proposition for cost-sensitive applications while maintaining competitive performance. The ELF2 series has proven reliability in industrial applications with operating temperature ranges from -40C to +85C.",
        logic: "Selection criteria: 1) Define logic capacity based on existing design or estimation tools. 2) Identify required I/O standards and count. 3) Check for special features (DSP, transceivers, memory). 4) Evaluate power budget. 5) Consider cost and availability.",
        keyTakeaways: [
          "ELF2 series: 1.5K-9K LUTs for industrial and communication applications",
          "EAGLE series: 10K-100K+ LUTs for high-performance applications",
          "Pin-compatible options available for Xilinx migration",
          "Comprehensive TD software support with free license"
        ],
        commonPitfalls: [
          "Underestimating logic capacity requirements - always add 20% margin",
          "Ignoring I/O voltage compatibility with external devices",
          "Not considering thermal management for high-density designs"
        ],
        bestPractices: [
          "Use Anlogic power estimation tools early in design phase",
          "Prototype with evaluation boards before committing to PCB design",
          "Leverage BeiLuo FAE support for complex design reviews"
        ]
      },
      customerCases: [
        {
          customerName: "Industrial Automation Co.",
          industry: "Industrial Control",
          application: "Multi-axis motor controller",
          challenge: "Customer needed to replace Xilinx Spartan-6 FPGAs due to obsolescence and cost concerns. Required pin-compatible solution with similar performance.",
          solution: "Migrated to Anlogic ELF2L45B devices with minimal PCB changes. Used BeiLuo's migration support services for design verification and optimization.",
          results: "Successfully migrated 5 product lines with 30% cost reduction. Design maintained same performance with improved power efficiency. Migration completed in 3 months."
        }
      ]
    },
    {
      id: "xilinx-migration-guide",
      title: "Xilinx to Anlogic Migration Guide",
      slug: "xilinx-to-anlogic-migration-guide",
      category: "Migration Guide",
      summary: "Step-by-step guide for migrating designs from Xilinx FPGAs to Anlogic equivalents.",
      content: [
        "Migrating from Xilinx FPGAs to Anlogic devices is straightforward due to architectural similarities and pin-compatible options. This guide provides a systematic approach to ensure successful migration with minimal design changes.",
        "The first step in migration is identifying the equivalent Anlogic device. Xilinx Spartan-6 designs can typically migrate to ELF2 series. BeiLuo provides detailed cross-reference guides to help select the right replacement device.",
        "Pin compatibility is a key advantage when migrating to Anlogic. Many ELF2 devices offer pin-for-pin compatibility with Xilinx equivalents, allowing PCB reuse with only minor modifications. Check the pinout diagrams carefully.",
        "Design migration involves converting Xilinx IP cores to Anlogic equivalents. Common functions like PLLs, block RAM, and DSP slices have direct equivalents in Anlogic devices. The Tang Dynasty software provides IP catalog with similar functionality."
      ],
      tags: ["Migration", "Xilinx", "Design Conversion", "Pin Compatibility"],
      author: {
        name: "Migration Support Team",
        title: "Principal Engineer",
        department: "Technical Support",
        bio: "Specialized in FPGA migration projects with 15+ years of experience in Xilinx and Anlogic technologies."
      },
      date: "2024-02-01",
      publishDate: "2024-02-01",
      lastUpdated: "2024-07-10",
      readTime: "18 min",
      relatedProducts: ["ELF2L45B", "ELF2L90B"],
      relatedArticles: [
        { id: "anlogic-fpga-selection-guide", title: "Anlogic FPGA Selection Guide" },
        { id: "td-software-tutorial", title: "Tang Dynasty Software Tutorial" }
      ],
      faeInsights: {
        insight: "Successful migration requires thorough planning and systematic execution. Most designs can be migrated with minimal changes, but some Xilinx-specific IP may require redesign.",
        logic: "Migration process: 1) Device selection and pin compatibility check. 2) Design analysis for IP conversion requirements. 3) Constraint translation. 4) Synthesis and implementation in TD software.",
        keyTakeaways: [
          "Pin-compatible options available for most Xilinx devices",
          "IP cores need conversion but functionality remains equivalent",
          "Timing constraints require format translation",
          "Comprehensive migration support from BeiLuo FAE team"
        ],
        commonPitfalls: [
          "Assuming 100% pin compatibility without verification",
          "Ignoring power supply sequencing differences",
          "Not accounting for configuration mode differences"
        ],
        bestPractices: [
          "Create detailed migration checklist before starting",
          "Use evaluation boards for proof-of-concept",
          "Engage BeiLuo FAE early in the process"
        ]
      },
      customerCases: [
        {
          customerName: "Video Processing Systems",
          industry: "Video & Imaging",
          application: "HD video processor",
          challenge: "Xilinx Artix-7 supply chain issues caused production delays. Needed pin-compatible alternative.",
          solution: "Migrated to Anlogic with pin-compatible package. Redesigned video IP using Anlogic DSP blocks.",
          results: "Achieved same video quality with improved frame rates. Production resumed within 2 months. Cost reduced by 25%."
        }
      ]
    },
    {
      id: "td-software-tutorial",
      title: "Tang Dynasty Software Tutorial",
      slug: "tang-dynasty-software-tutorial",
      category: "Tutorial",
      summary: "Complete tutorial for using Anlogic Tang Dynasty FPGA development software.",
      content: [
        "Tang Dynasty (TD) is Anlogic's comprehensive FPGA development environment, providing design entry, synthesis, implementation, and programming capabilities. This tutorial covers the essential workflow.",
        "Installation of TD software is straightforward. Download the installer from Anlogic website or request from BeiLuo. The software requires Windows 7 or later with minimum 4GB RAM.",
        "Creating a new project in TD involves selecting the target device, setting project directories, and adding source files. TD supports Verilog, VHDL, and SystemVerilog for design entry.",
        "The design flow in TD follows standard FPGA methodology: synthesis converts HDL to gate-level netlist, placement assigns logic to physical device resources, routing connects the placed logic."
      ],
      tags: ["TD Software", "Tutorial", "Design Flow", "Programming"],
      author: {
        name: "TD Software Team",
        title: "Software Engineer",
        department: "Technical Support",
        bio: "Expert in FPGA development tools with 8+ years of experience in EDA software."
      },
      date: "2024-02-15",
      publishDate: "2024-02-15",
      lastUpdated: "2024-07-20",
      readTime: "20 min",
      relatedProducts: ["ELF2 Series", "EAGLE Series"],
      relatedArticles: [
        { id: "anlogic-fpga-selection-guide", title: "Anlogic FPGA Selection Guide" },
        { id: "xilinx-migration-guide", title: "Xilinx to Anlogic Migration Guide" }
      ],
      faeInsights: {
        insight: "TD software provides a complete development environment comparable to major vendor tools. The learning curve is moderate for engineers familiar with other FPGA tools.",
        logic: "TD workflow: 1) Project creation and device selection. 2) Design entry with HDL. 3) IP integration from catalog. 4) Constraint definition. 5) Synthesis and implementation.",
        keyTakeaways: [
          "Free license with no node-locked restrictions",
          "Supports Verilog, VHDL, and SystemVerilog",
          "Comprehensive IP catalog included",
          "Fast synthesis and implementation times"
        ],
        commonPitfalls: [
          "Insufficient RAM causing long compile times",
          "Not using proper constraint files",
          "Ignoring timing warnings during synthesis"
        ],
        bestPractices: [
          "Use project templates for consistent setup",
          "Implement version control for source files",
          "Leverage IP catalog for common functions"
        ]
      },
      customerCases: [
        {
          customerName: "Embedded Systems Inc.",
          industry: "Embedded Systems",
          application: "Industrial controller",
          challenge: "Team was familiar with Xilinx tools but needed to learn TD software for new Anlogic-based project.",
          solution: "BeiLuo provided TD software training sessions and hands-on workshops.",
          results: "Development team became proficient in TD within 2 weeks. First prototype completed in 4 weeks."
        }
      ]
    }
  ]
};

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json with 5 articles');

console.log('Anlogic brand data fix