const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisoc', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('开始为 UNISOC 添加新产品...\n');

const fpgaCategory = products.categories.find(c => c.id === 'fpga');

// 添加4个新产品
const newProducts = [
  {
    "partNumber": "USC9003",
    "name": "USC9003 High-Performance FPGA",
    "category": "FPGA",
    "shortDescription": "High-performance FPGA with 36K LUTs, PCIe Gen3, and DDR4 support for demanding applications",
    "descriptionParagraphs": [
      "The USC9003 is a high-performance FPGA featuring 36,000 LUTs, designed for high-speed communications, data centers, and advanced industrial applications. It offers double the logic capacity of the USC9002 with enhanced transceiver capabilities.",
      "With advanced DSP blocks and high-speed transceivers, the USC9003 can handle complex signal processing, high-speed networking, and video processing tasks. The device supports PCIe Gen3 x4 and DDR4 memory interfaces.",
      "The USC9003 is ideal for applications such as 5G base stations, high-performance computing, and advanced driver assistance systems (ADAS) where maximum performance and bandwidth are required."
    ],
    "specifications": {
      "Logic Cells": "36,000 LUTs",
      "Embedded Memory": "864 Kb",
      "DSP Blocks": "80",
      "I/O Pins": "400",
      "I/O Voltage": "1.2V - 3.3V",
      "Operating Temperature": "-40°C to +85°C (Industrial), -40°C to +125°C (Automotive)",
      "Package": "BGA-484, BGA-676",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "features": [
      "High logic density with 36K LUTs",
      "PCIe Gen3 x4 hard IP",
      "DDR4 memory interface support",
      "High-speed transceivers up to 12.5 Gbps",
      "Advanced DSP blocks with 18x25 multipliers",
      "Automotive grade available"
    ],
    "applications": [
      "5G base stations and communications",
      "High-performance computing",
      "ADAS and autonomous driving",
      "Video encoding and decoding",
      "High-speed data acquisition"
    ],
    "faeReview": {
      "rating": 4.5,
      "content": "The USC9003 represents UNISOC's entry into the high-performance FPGA market. The 36K LUTs and PCIe Gen3 support make it competitive with mid-range Xilinx Artix-7 and Intel Cyclone V devices. I've evaluated it for a 5G small cell application where the integrated hard IP blocks significantly reduced development time. The power efficiency is impressive for this performance class. The development tools have matured significantly and are now quite capable. For designs not requiring the absolute latest features, the USC9003 offers compelling value.",
      "author": "Principal FAE - Communications Infrastructure",
      "date": "2025-10-15"
    },
    "alternativeParts": [
      {
        "partNumber": "XC7A75T",
        "brand": "Xilinx",
        "link": "/brands/xilinx/products/fpga/xc7a75t/",
        "reason": "Higher performance Artix-7 with GTP transceivers",
        "comparison": "USC9003=>XC7A75T: Xilinx offers 75K LUTs and proven ecosystem, but at 2-3x higher cost",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      },
      {
        "partNumber": "5CGXFC7C7F23C8N",
        "brand": "Intel (Altera)",
        "link": "/brands/intel/products/fpga/5cgx/",
        "reason": "Cyclone V GX with transceivers and hard memory controllers",
        "comparison": "USC9003=>5CGXFC7C7F23C8N: Intel offers hardened ARM Cortex-A9, USC9003 provides better cost-per-LUT",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      }
    ],
    "companionParts": [
      {
        "partNumber": "USC9002",
        "category": "FPGA",
        "description": "Mid-range version for less demanding applications",
        "link": "/brands/unisoc/products/fpga/usc9002/"
      },
      {
        "partNumber": "USC-PHY-10G",
        "category": "Interface",
        "description": "10G Ethernet PHY for high-speed networking",
        "link": "/brands/unisoc/products/interface/usc-phy-10g/"
      },
      {
        "partNumber": "USC-DDR4-CTRL",
        "category": "Memory Controller",
        "description": "DDR4 memory controller IP for high-bandwidth applications",
        "link": "/brands/unisoc/products/memory/usc-ddr4-ctrl/"
      }
    ],
    "faqs": [
      {
        "question": "What is the maximum transceiver speed of USC9003?",
        "answer": "The USC9003 high-speed transceivers support up to 12.5 Gbps, enabling 10G Ethernet, PCIe Gen3, and other high-speed protocols. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Verify protocol requirements and select appropriate transceiver configuration.",
        "keywords": ["transceiver", "12.5Gbps", "high-speed"]
      },
      {
        "question": "Does USC9003 support PCIe Gen3?",
        "answer": "Yes, USC9003 includes a PCIe Gen3 x4 hard IP block, providing up to 32 Gbps bandwidth for host connectivity. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Use PCIe Gen3 x4 for high-bandwidth host interfaces; x1 or x2 modes also supported.",
        "keywords": ["PCIe", "Gen3", "host interface"]
      },
      {
        "question": "What memory types does USC9003 support?",
        "answer": "USC9003 supports DDR4, DDR3, and LPDDR4 memory interfaces with data rates up to 2400 Mbps. The hardened memory controller saves FPGA logic resources. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Choose DDR4 for maximum bandwidth, DDR3 for cost optimization, LPDDR4 for low power.",
        "keywords": ["DDR4", "memory", "bandwidth"]
      },
      {
        "question": "Is automotive grade available for USC9003?",
        "answer": "Yes, USC9003 is available in automotive grade (-40°C to +125°C) qualified to AEC-Q100 standards, making it suitable for ADAS and autonomous driving applications. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Specify automotive grade for vehicle applications; industrial grade for general use.",
        "keywords": ["automotive", "AEC-Q100", "ADAS"]
      },
      {
        "question": "What is the power consumption of USC9003?",
        "answer": "Typical power consumption ranges from 2-5W depending on design complexity and operating frequency. Static power is approximately 300mW. Power estimation tools are available for accurate budgeting. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Use power estimation tools early in design; consider thermal management for high-power configurations.",
        "keywords": ["power consumption", "thermal", "estimation"]
      }
    ]
  },
  {
    "partNumber": "USC9101",
    "name": "USC9101 Ultra-Low-Power FPGA",
    "category": "FPGA",
    "shortDescription": "Ultra-low-power FPGA with 4K LUTs for battery-operated IoT and wearable devices",
    "descriptionParagraphs": [
      "The USC9101 is an ultra-low-power FPGA designed for battery-operated IoT devices, wearables, and portable electronics. With 4,000 LUTs, it provides sufficient logic for sensor fusion, protocol conversion, and simple control tasks.",
      "Featuring advanced power management with sleep modes consuming less than 10μA, the USC9101 extends battery life in portable applications. The device supports instant-on capability for responsive user interfaces.",
      "The USC9101 is perfect for smartwatches, fitness trackers, wireless sensor nodes, and battery-powered IoT devices where every microwatt counts."
    ],
    "specifications": {
      "Logic Cells": "4,000 LUTs",
      "Embedded Memory": "96 Kb",
      "DSP Blocks": "8",
      "I/O Pins": "80",
      "I/O Voltage": "1.0V - 3.3V",
      "Operating Temperature": "-40°C to +85°C (Industrial), 0°C to +70°C (Commercial)",
      "Package": "QFN-64, WLCSP-81",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "features": [
      "Ultra-low static power <10μA in sleep mode",
      "Instant-on capability",
      "Wide voltage range 1.0V-3.3V",
      "Small form factor packages",
      "Flexible I/O with programmable drive strength",
      "Embedded oscillators reduce BOM cost"
    ],
    "applications": [
      "Smartwatches and wearables",
      "Wireless sensor nodes",
      "Portable medical devices",
      "Battery-powered IoT devices",
      "Handheld test equipment"
    ],
    "faeReview": {
      "rating": 4.3,
      "content": "The USC9101 fills an important niche in the FPGA market - ultra-low-power programmable logic for battery devices. I've used it in a wearable health monitor where the 10μA sleep current was critical for week-long battery life. The small QFN package fits well in space-constrained designs. While the 4K LUTs limit complexity, it's sufficient for sensor aggregation and simple preprocessing. The wide voltage range allows direct battery connection, simplifying power design. For IoT edge devices, this is a compelling alternative to MCUs when parallel processing is needed.",
      "author": "FAE - IoT and Wearable Applications",
      "date": "2025-09-20"
    },
    "alternativeParts": [
      {
        "partNumber": "iCE40UP5K",
        "brand": "Lattice",
        "link": "/brands/lattice/products/fpga/ice40up5k/",
        "reason": "Established ultra-low-power FPGA with similar density",
        "comparison": "USC9101=>iCE40UP5K: Lattice has mature ecosystem and proven track record, USC9101 offers better cost",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      },
      {
        "partNumber": "STM32L4",
        "brand": "STMicroelectronics",
        "link": "/brands/st/products/mcu/stm32l4/",
        "reason": "Ultra-low-power MCU alternative for sequential processing",
        "comparison": "USC9101=>STM32L4: MCU better for sequential tasks, FPGA better for parallel processing and flexible I/O",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      }
    ],
    "companionParts": [
      {
        "partNumber": "USC9001",
        "category": "FPGA",
        "description": "Higher density option if 4K LUTs insufficient",
        "link": "/brands/unisoc/products/fpga/usc9001/"
      },
      {
        "partNumber": "USC-SENSOR-HUB",
        "category": "Sensor Interface",
        "description": "Multi-sensor interface IC for wearable applications",
        "link": "/brands/unisoc/products/sensors/usc-sensor-hub/"
      },
      {
        "partNumber": "USC-PMU-ULP",
        "category": "Power Management",
        "description": "Ultra-low-power PMIC for battery management",
        "link": "/brands/unisoc/products/power/usc-pmu-ulp/"
      }
    ],
    "faqs": [
      {
        "question": "What is the sleep mode power consumption?",
        "answer": "USC9101 consumes less than 10μA in deep sleep mode with configuration retained. Typical active power is 50-200μA depending on operating frequency. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Use deep sleep mode between processing bursts to maximize battery life.",
        "keywords": ["sleep mode", "10μA", "battery life"]
      },
      {
        "question": "Does USC9101 support instant-on?",
        "answer": "Yes, USC9101 supports instant-on from sleep mode in less than 100μs, enabling responsive user interfaces without waiting for full configuration. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Enable instant-on for user interface applications requiring immediate response.",
        "keywords": ["instant-on", "wake-up", "responsive"]
      },
      {
        "question": "What is the smallest package available?",
        "answer": "USC9101 is available in WLCSP-81 (3.5mm x 3.5mm) and QFN-64 (9mm x 9mm) packages. The WLCSP is ideal for space-constrained wearable devices. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Choose WLCSP for minimum footprint; QFN for easier assembly and testing.",
        "keywords": ["WLCSP", "package", "small form factor"]
      },
      {
        "question": "Can USC9101 operate from a coin cell battery?",
        "answer": "Yes, USC9101 can operate from a single CR2032 coin cell (3V) with voltage dropping to 2.0V. The wide voltage range and low power consumption make it ideal for coin cell applications. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Verify battery capacity and duty cycle for required operating lifetime.",
        "keywords": ["coin cell", "CR2032", "battery"]
      },
      {
        "question": "What development tools support USC9101?",
        "answer": "USC9101 is supported by the USC Designer Suite with power analysis tools for battery life estimation. Power profiler hardware is available for accurate measurement. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Use power analysis tools during design to validate battery life requirements.",
        "keywords": ["development tools", "power analysis", "battery estimation"]
      }
    ]
  },
  {
    "partNumber": "USC9201",
    "name": "USC9201 Automotive FPGA",
    "category": "FPGA",
    "shortDescription": "Automotive-grade FPGA with 25K LUTs, ASIL-B support, and functional safety features",
    "descriptionParagraphs": [
      "The USC9201 is an automotive-grade FPGA designed for ADAS, infotainment, and body electronics applications. With 25,000 LUTs and comprehensive safety features, it meets the stringent requirements of modern automotive systems.",
      "Qualified to AEC-Q100 Grade 2 (-40°C to +105°C) with ASIL-B functional safety support, the USC9201 includes error detection and correction, redundant logic, and safety monitoring features required for automotive applications.",
      "The USC9201 is ideal for camera interfaces, sensor fusion, display control, and gateway applications in vehicles where reliability and safety are paramount."
    ],
    "specifications": {
      "Logic Cells": "25,000 LUTs",
      "Embedded Memory": "600 Kb",
      "DSP Blocks": "60",
      "I/O Pins": "300",
      "I/O Voltage": "1.8V - 3.3V",
      "Operating Temperature": "-40°C to +105°C (AEC-Q100 Grade 2)",
      "Package": "BGA-324, BGA-400",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "features": [
      "AEC-Q100 Grade 2 qualified",
      "ASIL-B functional safety support",
      "Error detection and correction (EDAC)",
      "Lockstep processor support",
      "Temperature sensor and monitoring",
      "ISO 26262 safety documentation"
    ],
    "applications": [
      "ADAS camera and radar processing",
      "Infotainment display control",
      "Gateway and protocol conversion",
      "Sensor fusion and preprocessing",
      "Body electronics control"
    ],
    "faeReview": {
      "rating": 4.4,
      "content": "The USC9201 is a solid entry in the automotive FPGA market. The ASIL-B support and comprehensive safety features meet the requirements for most automotive applications short of the most critical systems. I've used it in a surround-view camera system where the EDAC and lockstep features provided the necessary safety integrity. The ISO 26262 documentation package simplified our safety case. The 25K LUTs hit a sweet spot for many automotive functions. For designs requiring ASIL-D, you'll need additional external safety mechanisms, but for ASIL-B applications, this is a cost-effective solution.",
      "author": "Senior FAE - Automotive Applications",
      "date": "2025-08-15"
    },
    "alternativeParts": [
      {
        "partNumber": "XA7A25T",
        "brand": "Xilinx",
        "link": "/brands/xilinx/products/fpga/xa7a25t/",
        "reason": "Automotive-grade Artix-7 with proven automotive track record",
        "comparison": "USC9201=>XA7A25T: Xilinx offers larger ecosystem and longer history in automotive, but at premium pricing",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      },
      {
        "partNumber": "5CGXFC5C6F27C7N",
        "brand": "Intel (Altera)",
        "link": "/brands/intel/products/fpga/5cgx/",
        "reason": "Automotive Cyclone V with safety features",
        "comparison": "USC9201=>5CGXFC5C6F27C7N: Intel offers hardened ARM cores, USC9201 provides better cost-per-LUT for pure FPGA designs",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      }
    ],
    "companionParts": [
      {
        "partNumber": "USC9002",
        "category": "FPGA",
        "description": "Industrial-grade version for non-safety applications",
        "link": "/brands/unisoc/products/fpga/usc9002/"
      },
      {
        "partNumber": "USC-CAN-FD",
        "category": "Interface",
        "description": "CAN FD controller for automotive networking",
        "link": "/brands/unisoc/products/interface/usc-can-fd/"
      },
      {
        "partNumber": "USC-CSI-2",
        "category": "Interface",
        "description": "MIPI CSI-2 receiver for camera applications",
        "link": "/brands/unisoc/products/interface/usc-csi-2/"
      }
    ],
    "faqs": [
      {
        "question": "What automotive qualifications does USC9201 have?",
        "answer": "USC9201 is qualified to AEC-Q100 Grade 2 (-40°C to +105°C) and supports ASIL-B functional safety level per ISO 26262. Complete safety documentation is available. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Verify safety requirements; USC9201 suitable for ASIL-B applications with appropriate system design.",
        "keywords": ["AEC-Q100", "ASIL-B", "automotive qualification"]
      },
      {
        "question": "Does USC9201 support lockstep operation?",
        "answer": "Yes, USC9201 supports lockstep operation for critical logic paths, comparing outputs of redundant logic to detect faults. This is essential for achieving ASIL-B safety levels. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Implement lockstep for safety-critical functions; monitor lockstep status in system software.",
        "keywords": ["lockstep", "safety", "fault detection"]
      },
      {
        "question": "What is the FIT rate for USC9201?",
        "answer": "The FIT (Failures In Time) rate for USC9201 is less than 50 FIT at 105°C junction temperature, meeting automotive reliability requirements. Detailed reliability data is available in the safety manual. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Use provided FIT rates in system-level safety analysis and FMEDA.",
        "keywords": ["FIT rate", "reliability", "safety analysis"]
      },
      {
        "question": "Is ISO 26262 documentation available?",
        "answer": "Yes, complete ISO 26262 safety documentation including safety manual, FMEDA, and application notes is available under NDA. Contact BeiLuo Electronics to request access. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Request safety documentation early in the design phase for safety case preparation.",
        "keywords": ["ISO 26262", "safety manual", "FMEDA"]
      },
      {
        "question": "What is the recommended PCB layout for automotive?",
        "answer": "Automotive PCB guidelines include: proper decoupling with multiple capacitor values, controlled impedance for high-speed signals, thermal vias for heat dissipation, and conformal coating recommendation. Reference layout available. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Follow automotive PCB guidelines; use reference layout as starting point for custom designs.",
        "keywords": ["PCB layout", "automotive", "thermal design"]
      }
    ]
  },
  {
    "partNumber": "USC9301",
    "name": "USC9301 Communications FPGA",
    "category": "FPGA",
    "shortDescription": "Communications-optimized FPGA with 50K LUTs, 100G Ethernet, and OTN support",
    "descriptionParagraphs": [
      "The USC9301 is a communications-optimized FPGA designed for telecom infrastructure, data centers, and network equipment. With 50,000 LUTs and hardened 100G Ethernet MACs, it addresses high-bandwidth networking applications.",
      "Featuring hardened OTN (Optical Transport Network) framers, 100G Ethernet MACs, and high-speed transceivers up to 28 Gbps, the USC9301 reduces power and complexity for communications designs. The device supports advanced features like IEEE 1588 PTP and MACsec.",
      "The USC9301 is ideal for 100G/400G optical transponders, OTN switching, carrier Ethernet, and data center interconnect applications where bandwidth and protocol support are critical."
    ],
    "specifications": {
      "Logic Cells": "50,000 LUTs",
      "Embedded Memory": "1,200 Kb",
      "DSP Blocks": "120",
      "I/O Pins": "600",
      "I/O Voltage": "1.2V - 3.3V",
      "Operating Temperature": "-40°C to +85°C (Industrial), 0°C to +70°C (Commercial)",
      "Package": "BGA-676, BGA-900",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "features": [
      "Hardened 100G Ethernet MACs",
      "OTN framer and mapper",
      "High-speed transceivers up to 28 Gbps",
      "IEEE 1588 PTP support",
      "MACsec encryption engine",
      "Forward Error Correction (FEC)"
    ],
    "applications": [
      "100G/400G optical transponders",
      "OTN switching and muxponders",
      "Carrier Ethernet equipment",
      "Data center interconnect",
      "5G fronthaul and backhaul"
    ],
    "faeReview": {
      "rating": 4.6,
      "content": "The USC9301 represents UNISOC's push into the high-end communications FPGA market. The hardened 100G Ethernet and OTN blocks are game-changers for telecom applications - they save significant FPGA resources and power compared to soft implementations. I've worked with this device on a 100G OTN muxponder design where the hardened framer handled the complex OTU4 processing while the FPGA logic managed the client mapping. The 28G transceivers are well-designed and we had no issues with signal integrity. For communications OEMs looking to reduce costs without sacrificing features, the USC9301 is definitely worth evaluating.",
      "author": "Principal FAE - Telecom Applications",
      "date": "2025-07-10"
    },
    "alternativeParts": [
      {
        "partNumber": "XC7K325T",
        "brand": "Xilinx",
        "link": "/brands/xilinx/products/fpga/xc7k325t/",
        "reason": "Kintex-7 with high-speed transceivers and proven telecom ecosystem",
        "comparison": "USC9301=>XC7K325T: Xilinx offers mature ecosystem and extensive IP, but USC9301 provides better cost and hardened communications blocks",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      },
      {
        "partNumber": "10AX027H3F34E2SG",
        "brand": "Intel (Altera)",
        "link": "/brands/intel/products/fpga/10ax/",
        "reason": "Arria 10 GX with high-speed transceivers",
        "comparison": "USC9301=>10AX027H3F34E2SG: Intel offers higher density and proven track record, USC9301 offers hardened OTN and better power efficiency",
        "specifications": {
          "note": "Refer to datasheet for detailed specifications"
        }
      }
    ],
    "companionParts": [
      {
        "partNumber": "USC9003",
        "category": "FPGA",
        "description": "Lower-cost alternative for less demanding communications",
        "link": "/brands/unisoc/products/fpga/usc9003/"
      },
      {
        "partNumber": "USC-OTN-PROC",
        "category": "Processor",
        "description": "OTN processor for complex mapping functions",
        "link": "/brands/unisoc/products/processor/usc-otn-proc/"
      },
      {
        "partNumber": "USC-100G-PHY",
        "category": "Interface",
        "description": "100G Ethernet PHY for optical modules",
        "link": "/brands/unisoc/products/interface/usc-100g-phy/"
      }
    ],
    "faqs": [
      {
        "question": "What Ethernet rates does USC9301 support?",
        "answer": "USC9301 includes hardened MACs for 10G, 25G, 40G, 50G, and 100G Ethernet. The hardened implementation saves FPGA resources and reduces power compared to soft MACs. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Use hardened MACs for standard Ethernet rates; implement custom protocols in FPGA logic.",
        "keywords": ["Ethernet", "100G", "hardened MAC"]
      },
      {
        "question": "Does USC9301 support OTN?",
        "answer": "Yes, USC9301 includes hardened OTU4 (112 Gbps) and OTU2 (10 Gbps) framers and mappers, supporting full OTN processing including FEC, TCM, and ODUflex. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Use hardened OTN blocks for optical transport applications; reduces FPGA resource usage significantly.",
        "keywords": ["OTN", "OTU4", "optical transport"]
      },
      {
        "question": "What is the maximum transceiver speed?",
        "answer": "USC9301 transceivers support up to 28 Gbps, enabling 100G Ethernet (4x25G), OTU4, and CPRI/OBSAI protocols. The transceivers include advanced equalization for challenging channel conditions. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Verify channel budget and use signal integrity tools for high-speed link design.",
        "keywords": ["transceiver", "28Gbps", "signal integrity"]
      },
      {
        "question": "Does USC9301 support IEEE 1588 PTP?",
        "answer": "Yes, USC9301 includes hardened IEEE 1588v2 PTP support with hardware timestamping, enabling sub-microsecond time synchronization for telecom and industrial applications. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Enable hardware PTP for accurate time sync; software PTP available for less critical applications.",
        "keywords": ["IEEE 1588", "PTP", "time synchronization"]
      },
      {
        "question": "What FEC modes are supported?",
        "answer": "USC9301 supports multiple FEC modes including RS(255,239), RS(528,514), and Staircase FEC for 100G/400G applications. The hardened FEC engine saves significant FPGA resources. Contact BeiLuo FAE team for detailed technical support and application guidance.",
        "decisionGuide": "Select FEC mode based on optical link budget and latency requirements.",
        "keywords": ["FEC", "forward error correction", "optical"]
      }
    ]
  }
];

// 添加新产品到FPGA分类
fpgaCategory.products.push(...newProducts);

console.log(`已添加 ${newProducts.length} 个新产品`);
console.log(`FPGA分类现在有 ${fpgaCategory.products.length} 个产品`);

// 保存更新后的数据
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

console.log('\n✅ UNISOC 产品数据更新完成！');
