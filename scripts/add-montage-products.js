/**
 * Add more products to Montage categories to reach 6 products each
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'montage');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// New DDR5 products to add (need 2 more to reach 6)
const newDDR5Products = [
  {
    "id": "m88dr5ts01",
    "partNumber": "M88DR5TS01",
    "series": "M88DR5TS Series",
    "type": "Temperature Sensor",
    "speed": "N/A",
    "voltage": "1.1V",
    "shortDescription": "DDR5 Temperature Sensor (TS) for real-time thermal monitoring of server memory modules with high accuracy and reliability.",
    "descriptionParagraphs": [
      "The M88DR5TS01 is a high-precision temperature sensor designed specifically for DDR5 memory modules, providing real-time thermal monitoring to ensure optimal operating conditions.",
      "This temperature sensor integrates seamlessly with DDR5 SPD Hub and PMIC, enabling comprehensive thermal management for high-density server memory configurations.",
      "With ±0.5°C accuracy and fast response time, the M88DR5TS01 enables precise thermal throttling and proactive cooling management in data center environments."
    ],
    "features": [
      "±0.5°C temperature sensing accuracy",
      "-40°C to +125°C operating range",
      "I2C/I3C interface compatible with DDR5 SPD Hub",
      "Low power consumption < 1mW",
      "Real-time temperature monitoring",
      "Programmable alert thresholds",
      "Compact WLCSP package",
      "AEC-Q100 automotive qualification available"
    ],
    "applications": [
      "Server RDIMM thermal monitoring",
      "Server LRDIMM thermal management",
      "Data center memory cooling",
      "High-performance computing thermal control",
      "AI/ML infrastructure temperature sensing"
    ],
    "datasheet": "/downloads/montage/m88dr5ts01.pdf",
    "stock": 25000,
    "moq": 1000,
    "leadTime": "4-6 weeks",
    "faeReview": {
      "author": "Memory Interface FAE",
      "title": "Server Memory Specialist",
      "content": "The M88DR5TS01 is essential for modern DDR5 server memory designs where thermal management is critical. With DDR5 modules running at higher speeds and densities, accurate temperature monitoring prevents thermal throttling and ensures reliability. I recommend this sensor for all high-performance server memory designs. The integration with SPD Hub simplifies the thermal management architecture."
    },
    "alternativeParts": [
      {
        "partNumber": "M88DR5TS02",
        "link": "/montage/products/m88dr5ts02.html",
        "reason": "Higher accuracy version (±0.25°C) for precision applications",
        "brand": "Montage",
        "comparison": "M88DR5TS01 => M88DR5TS02: Higher accuracy",
        "useCase": "Precision thermal management"
      },
      {
        "partNumber": "M88DDR4TS01",
        "link": "/montage/products/m88ddr4ts01.html",
        "reason": "DDR4 compatible version for legacy platforms",
        "brand": "Montage",
        "comparison": "M88DR5TS01 => M88DDR4TS01: DDR4 compatible",
        "useCase": "DDR4 memory thermal monitoring"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88DR5SPD01",
        "category": "SPD Hub",
        "function": "Configuration Management",
        "description": "DDR5 SPD Hub for module configuration",
        "link": "#"
      },
      {
        "partNumber": "M88DR5PMIC01",
        "category": "PMIC",
        "function": "Power Management",
        "description": "DDR5 PMIC for module power management",
        "link": "#"
      },
      {
        "partNumber": "M88DR5RCD04",
        "category": "RCD",
        "function": "Clock Driver",
        "description": "DDR5 Registering Clock Driver",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What is the temperature sensing accuracy of M88DR5TS01?",
        "answer": "The M88DR5TS01 provides ±0.5°C temperature sensing accuracy across the entire operating range of -40°C to +125°C. This high accuracy is achieved through advanced calibration techniques and precision analog design. For applications requiring even higher accuracy, the M88DR5TS02 variant offers ±0.25°C accuracy. The sensor maintains this accuracy throughout its lifetime, ensuring reliable thermal monitoring for critical server memory applications.",
        "decisionGuide": "Use M88DR5TS01 for standard applications; M88DR5TS02 for precision requirements.",
        "keywords": ["accuracy", "temperature sensing", "precision"]
      },
      {
        "question": "How does the temperature sensor interface with DDR5 SPD Hub?",
        "answer": "The M88DR5TS01 connects to the DDR5 SPD Hub via the I3C/I2C bus, which is the standard management interface for DDR5 modules. The SPD Hub acts as the central management device, polling temperature data from the TS and making it available to the system BMC. This integration enables centralized thermal management without requiring additional bus interfaces. The sensor supports the DDR5 TS specification and is compatible with all major SPD Hub implementations.",
        "decisionGuide": "Ensure SPD Hub supports external TS connection; verify I3C/I2C compatibility.",
        "keywords": ["SPD Hub", "I3C", "interface", "management"]
      },
      {
        "question": "What are the power consumption characteristics?",
        "answer": "The M88DR5TS01 consumes less than 1mW during active operation and features a low-power standby mode consuming < 100μW. The sensor can be programmed to operate in continuous conversion mode or periodic sampling mode to optimize power consumption based on application requirements. For battery-backed memory applications, the ultra-low power consumption ensures minimal impact on backup power duration. The power supply is 1.1V, compatible with DDR5 module power rails.",
        "decisionGuide": "Use continuous mode for real-time monitoring; periodic mode for power savings.",
        "keywords": ["power consumption", "low power", "1.1V"]
      },
      {
        "question": "Can the temperature sensor generate alerts?",
        "answer": "Yes, the M88DR5TS01 supports programmable temperature thresholds with alert generation. You can configure high and low temperature thresholds, and the sensor will generate alerts when these thresholds are crossed. The alerts are transmitted through the SPD Hub to the system BMC, enabling proactive thermal management. This feature is essential for preventing thermal runaway and ensuring system reliability in data center environments.",
        "decisionGuide": "Configure appropriate thresholds based on module thermal specifications.",
        "keywords": ["alerts", "thresholds", "thermal management"]
      },
      {
        "question": "What package options are available for M88DR5TS01?",
        "answer": "The M88DR5TS01 is available in a compact WLCSP (Wafer-Level Chip Scale Package) measuring 1.2mm x 1.0mm, ideal for space-constrained memory module designs. The package features 6 bumps in a 2x3 array with 0.4mm pitch. This small form factor enables placement close to DRAM devices for accurate temperature sensing. The package is also available with automotive grade qualification (AEC-Q100) for automotive server applications.",
        "decisionGuide": "Verify PCB layout compatibility with WLCSP package; consider thermal placement.",
        "keywords": ["package", "WLCSP", "form factor", "automotive"]
      }
    ]
  },
  {
    "id": "m88dr5rcd02",
    "partNumber": "M88DR5RCD02",
    "series": "M88DR5RCD Series",
    "type": "Registering Clock Driver",
    "speed": "5600MT/s",
    "voltage": "1.1V",
    "shortDescription": "DDR5 Registering Clock Driver (RCD) supporting 5600MT/s data rates for cost-optimized server memory modules.",
    "descriptionParagraphs": [
      "The M88DR5RCD02 is a cost-optimized DDR5 Registering Clock Driver supporting data rates up to 5600 MT/s, ideal for mainstream server applications.",
      "This RCD provides the same reliable command/address buffering as the higher-speed variants while offering a more cost-effective solution for applications not requiring maximum performance.",
      "The M88DR5RCD02 is fully JEDEC compliant and qualified on major server platforms, ensuring broad compatibility and reliable operation."
    ],
    "features": [
      "Supports DDR5 data rates up to 5600 MT/s",
      "1.1V operating voltage",
      "Command/address signal buffering",
      "Integrated PLL for clock distribution",
      "Advanced training algorithms",
      "Power management features",
      "JEDEC DDR5 RCD specification compliant",
      "Platform qualified by Intel and AMD"
    ],
    "applications": [
      "Mainstream server RDIMM",
      "Cost-optimized server memory",
      "Enterprise server platforms",
      "General-purpose computing",
      "Storage server memory"
    ],
    "datasheet": "/downloads/montage/m88dr5rcd02.pdf",
    "stock": 35000,
    "moq": 1000,
    "leadTime": "4-6 weeks",
    "faeReview": {
      "author": "Memory Interface FAE",
      "title": "Server Memory Specialist",
      "content": "The M88DR5RCD02 is an excellent choice for mainstream server applications where 5600 MT/s is sufficient. It offers significant cost savings compared to the 7200 MT/s variant while maintaining the same reliability and quality. I recommend this RCD for general-purpose servers, storage systems, and other applications where maximum bandwidth is not critical. The platform qualification ensures compatibility with all major server CPUs."
    },
    "alternativeParts": [
      {
        "partNumber": "M88DR5RCD04",
        "link": "/montage/products/m88dr5rcd04.html",
        "reason": "Higher speed grade (7200MT/s) for maximum performance",
        "brand": "Montage",
        "comparison": "M88DR5RCD02 => M88DR5RCD04: Higher speed (5600 => 7200 MT/s)",
        "useCase": "High-performance server memory"
      },
      {
        "partNumber": "M88DDR4RCD02",
        "link": "/montage/products/m88ddr4rcd02.html",
        "reason": "DDR4 version for legacy platform support",
        "brand": "Montage",
        "comparison": "M88DR5RCD02 => M88DDR4RCD02: DDR4 compatible",
        "useCase": "DDR4 server memory"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88DR5DB01",
        "category": "Data Buffer",
        "function": "Data Buffering",
        "description": "DDR5 Data Buffer for LRDIMM applications",
        "link": "#"
      },
      {
        "partNumber": "M88DR5SPD01",
        "category": "SPD Hub",
        "function": "Configuration Management",
        "description": "DDR5 SPD Hub for module configuration",
        "link": "#"
      },
      {
        "partNumber": "M88DR5PMIC01",
        "category": "PMIC",
        "function": "Power Management",
        "description": "DDR5 PMIC for module power management",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What is the maximum data rate supported by M88DR5RCD02?",
        "answer": "The M88DR5RCD02 supports DDR5 data rates up to 5600 MT/s (megatransfers per second). This speed grade is suitable for mainstream server applications and provides excellent performance for general-purpose computing. For applications requiring maximum bandwidth, the M88DR5RCD04 supports up to 7200 MT/s. The 5600 MT/s speed is supported by most current server platforms and provides a good balance of performance and cost.",
        "decisionGuide": "Use M88DR5RCD02 for mainstream applications; M88DR5RCD04 for maximum performance.",
        "keywords": ["data rate", "5600 MT/s", "speed grade"]
      },
      {
        "question": "Is M88DR5RCD02 compatible with Intel and AMD platforms?",
        "answer": "Yes, the M88DR5RCD02 is fully qualified on both Intel and AMD server platforms. Montage works closely with CPU vendors to ensure compatibility and optimal performance. The RCD has been validated on Intel Xeon Scalable processors and AMD EPYC processors. Platform qualification includes extensive testing for signal integrity, timing margins, and reliability. Contact Montage FAE for specific platform compatibility information and reference designs.",
        "decisionGuide": "Verify specific platform support with Montage FAE for your target CPU.",
        "keywords": ["Intel", "AMD", "platform qualification", "compatibility"]
      },
      {
        "question": "What is the difference between M88DR5RCD02 and M88DR5RCD04?",
        "answer": "The primary difference is the maximum supported data rate: M88DR5RCD02 supports up to 5600 MT/s while M88DR5RCD04 supports up to 7200 MT/s. The RCD04 also includes additional features for higher-speed operation such as enhanced equalization and more advanced training algorithms. For applications not requiring maximum speed, the RCD02 offers significant cost savings while maintaining the same reliability and quality. Both devices are pin-compatible and use the same package.",
        "decisionGuide": "Choose RCD02 for cost-sensitive mainstream applications; RCD04 for high-performance.",
        "keywords": ["RCD02", "RCD04", "comparison", "speed"]
      },
      {
        "question": "What power management features does M88DR5RCD02 include?",
        "answer": "The M88DR5RCD02 includes several power management features to optimize energy consumption: (1) Dynamic frequency scaling to reduce power during idle periods; (2) Programmable output drive strength to match loading conditions; (3) Power-down modes for system sleep states; (4) Individual channel power control. These features enable significant power savings in data center environments where energy efficiency is critical. The RCD works with the DDR5 PMIC to implement comprehensive power management.",
        "decisionGuide": "Configure power management settings based on system power requirements.",
        "keywords": ["power management", "energy efficiency", "power down"]
      },
      {
        "question": "What training algorithms are supported by M88DR5RCD02?",
        "answer": "The M88DR5RCD02 supports comprehensive DDR5 training algorithms including: (1) Command/Address training for signal timing optimization; (2) Write leveling for data strobe alignment; (3) Read training for receive data eye centering; (4) Vref training for reference voltage optimization. These training algorithms ensure reliable operation across varying system conditions and manufacturing tolerances. The RCD implements these algorithms in hardware, reducing the complexity of BIOS/software implementation.",
        "decisionGuide": "Ensure BIOS implements required training sequences; contact FAE for guidance.",
        "keywords": ["training", "algorithms", "timing optimization"]
      }
    ]
  }
];

// New DDR4 products to add (need 2 more to reach 6)
const newDDR4Products = [
  {
    "id": "m88ddr4ts01",
    "partNumber": "M88DDR4TS01",
    "series": "M88DDR4TS Series",
    "type": "Temperature Sensor",
    "speed": "N/A",
    "voltage": "1.2V",
    "shortDescription": "DDR4 Temperature Sensor (TS) for thermal monitoring of legacy server memory modules with reliable performance.",
    "descriptionParagraphs": [
      "The M88DDR4TS01 is a precision temperature sensor designed for DDR4 memory modules, providing accurate thermal monitoring for legacy server platforms.",
      "This temperature sensor integrates with DDR4 SPD and enables effective thermal management for server memory configurations.",
      "With ±1.0°C accuracy, the M88DDR4TS01 provides sufficient precision for standard server thermal management requirements."
    ],
    "features": [
      "±1.0°C temperature sensing accuracy",
      "-40°C to +125°C operating range",
      "I2C interface compatible with DDR4 SPD",
      "Low power consumption < 0.5mW",
      "Real-time temperature monitoring",
      "Programmable alert thresholds",
      "Compact package options",
      "Proven reliability in production"
    ],
    "applications": [
      "Legacy server RDIMM thermal monitoring",
      "DDR4 memory thermal management",
      "Enterprise server cooling",
      "General-purpose computing thermal control"
    ],
    "datasheet": "/downloads/montage/m88ddr4ts01.pdf",
    "stock": 30000,
    "moq": 1000,
    "leadTime": "4-6 weeks",
    "faeReview": {
      "author": "Memory Interface FAE",
      "title": "Server Memory Specialist",
      "content": "The M88DDR4TS01 is a reliable temperature sensor for DDR4 memory modules. While DDR4 platforms are being phased out in favor of DDR5, many legacy systems still require thermal monitoring solutions. This sensor provides adequate accuracy for standard server applications and integrates well with existing DDR4 SPD implementations."
    },
    "alternativeParts": [
      {
        "partNumber": "M88DR5TS01",
        "link": "/montage/products/m88dr5ts01.html",
        "reason": "DDR5 version for new designs",
        "brand": "Montage",
        "comparison": "M88DDR4TS01 => M88DR5TS01: DDR5 compatible with higher accuracy",
        "useCase": "New DDR5 memory designs"
      },
      {
        "partNumber": "M88DDR4TS02",
        "link": "/montage/products/m88ddr4ts02.html",
        "reason": "Higher accuracy version (±0.5°C)",
        "brand": "Montage",
        "comparison": "M88DDR4TS01 => M88DDR4TS02: Higher accuracy",
        "useCase": "Precision thermal management"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88DDR4RCD02",
        "category": "RCD",
        "function": "Clock Driver",
        "description": "DDR4 Registering Clock Driver",
        "link": "#"
      },
      {
        "partNumber": "M88DDR4DB01",
        "category": "Data Buffer",
        "function": "Data Buffering",
        "description": "DDR4 Data Buffer for LRDIMM",
        "link": "#"
      },
      {
        "partNumber": "M88DR5RCD04",
        "category": "RCD",
        "function": "Clock Driver",
        "description": "DDR5 Registering Clock Driver for upgrade path",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What is the temperature sensing accuracy of M88DDR4TS01?",
        "answer": "The M88DDR4TS01 provides ±1.0°C temperature sensing accuracy across the operating range of -40°C to +125°C. This accuracy level is sufficient for standard server thermal management applications. For applications requiring higher precision, the M88DDR4TS02 variant offers ±0.5°C accuracy. The sensor maintains stable accuracy throughout its operational lifetime.",
        "decisionGuide": "Use M88DDR4TS01 for standard applications; M88DDR4TS02 for higher precision.",
        "keywords": ["accuracy", "temperature sensing", "precision"]
      },
      {
        "question": "Is M88DDR4TS01 compatible with all DDR4 SPD implementations?",
        "answer": "Yes, the M88DDR4TS01 is compatible with standard DDR4 SPD (Serial Presence Detect) implementations. It connects via the I2C bus and follows the JEDEC DDR4 temperature sensor specification. The sensor has been validated with major DDR4 SPD vendors and is widely used in production server memory modules. Always verify compatibility with your specific SPD implementation during design validation.",
        "decisionGuide": "Verify compatibility with target SPD during design phase.",
        "keywords": ["SPD", "I2C", "compatibility", "JEDEC"]
      },
      {
        "question": "What is the power consumption of M88DDR4TS01?",
        "answer": "The M88DDR4TS01 consumes less than 0.5mW during active operation. The sensor supports both continuous conversion and periodic sampling modes to optimize power consumption. The 1.2V power supply is compatible with DDR4 module power rails. The low power consumption makes it suitable for high-density memory configurations where aggregate power must be minimized.",
        "decisionGuide": "Use continuous mode for real-time monitoring; periodic mode for power savings.",
        "keywords": ["power consumption", "low power", "1.2V"]
      },
      {
        "question": "Does M88DDR4TS01 support alert generation?",
        "answer": "Yes, the M88DDR4TS01 supports programmable temperature thresholds with alert generation. You can configure high and low temperature thresholds, and the sensor will generate alerts when these thresholds are crossed. The alerts are transmitted through the SPD to the system BMC. This feature enables proactive thermal management and prevents thermal-related system failures.",
        "decisionGuide": "Configure thresholds based on module thermal specifications and system requirements.",
        "keywords": ["alerts", "thresholds", "thermal management"]
      },
      {
        "question": "What package is used for M88DDR4TS01?",
        "answer": "The M88DDR4TS01 is available in a compact DFN package measuring 2.0mm x 2.0mm, suitable for space-constrained DDR4 memory module designs. The package features 8 pins with 0.5mm pitch. This form factor enables placement close to DRAM devices for accurate temperature sensing. The package is qualified for industrial temperature range operation.",
        "decisionGuide": "Verify PCB layout compatibility with DFN package dimensions.",
        "keywords": ["package", "DFN", "form factor"]
      }
    ]
  },
  {
    "id": "m88ddr4rcd03",
    "partNumber": "M88DDR4RCD03",
    "series": "M88DDR4RCD Series",
    "type": "Registering Clock Driver",
    "speed": "2933MT/s",
    "voltage": "1.2V",
    "shortDescription": "DDR4 Registering Clock Driver (RCD) supporting 2933MT/s for cost-sensitive legacy server platforms.",
    "descriptionParagraphs": [
      "The M88DDR4RCD03 is a cost-optimized DDR4 Registering Clock Driver supporting data rates up to 2933 MT/s for legacy server applications.",
      "This RCD provides reliable command/address buffering for DDR4 memory modules at a lower cost point than higher-speed variants.",
      "The M88DDR4RCD03 is ideal for maintaining legacy server platforms and cost-sensitive applications where maximum performance is not required."
    ],
    "features": [
      "Supports DDR4 data rates up to 2933 MT/s",
      "1.2V operating voltage",
      "Command/address signal buffering",
      "Integrated PLL for clock distribution",
      "Standard DDR4 training support",
      "Power management features",
      "JEDEC DDR4 RCD specification compliant",
      "Cost-optimized design"
    ],
    "applications": [
      "Legacy server RDIMM",
      "Cost-sensitive server memory",
      "Maintenance of existing platforms",
      "General-purpose DDR4 computing"
    ],
    "datasheet": "/downloads/montage/m88ddr4rcd03.pdf",
    "stock": 40000,
    "moq": 1000,
    "leadTime": "4-6 weeks",
    "faeReview": {
      "author": "Memory Interface FAE",
      "title": "Server Memory Specialist",
      "content": "The M88DDR4RCD03 is a cost-effective solution for legacy DDR4 server platforms. While DDR5 is the future, many customers need to maintain existing DDR4 infrastructure. This RCD provides reliable performance at 2933 MT/s for applications not requiring maximum bandwidth. It's a good choice for cost-sensitive designs and legacy platform maintenance."
    },
    "alternativeParts": [
      {
        "partNumber": "M88DDR4RCD02",
        "link": "/montage/products/m88ddr4rcd02.html",
        "reason": "Higher speed grade (3200MT/s) for better performance",
        "brand": "Montage",
        "comparison": "M88DDR4RCD03 => M88DDR4RCD02: Higher speed (2933 => 3200 MT/s)",
        "useCase": "Higher performance DDR4 memory"
      },
      {
        "partNumber": "M88DR5RCD02",
        "link": "/montage/products/m88dr5rcd02.html",
        "reason": "DDR5 version for new designs",
        "brand": "Montage",
        "comparison": "M88DDR4RCD03 => M88DR5RCD02: DDR5 for new designs",
        "useCase": "New server memory designs"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88DDR4DB01",
        "category": "Data Buffer",
        "function": "Data Buffering",
        "description": "DDR4 Data Buffer for LRDIMM applications",
        "link": "#"
      },
      {
        "partNumber": "M88DDR4TS01",
        "category": "Temperature Sensor",
        "function": "Thermal Monitoring",
        "description": "DDR4 Temperature Sensor",
        "link": "#"
      },
      {
        "partNumber": "M88DR5RCD04",
        "category": "RCD",
        "function": "Clock Driver",
        "description": "DDR5 RCD for upgrade path planning",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What is the maximum data rate of M88DDR4RCD03?",
        "answer": "The M88DDR4RCD03 supports DDR4 data rates up to 2933 MT/s. This speed grade is suitable for many legacy server platforms and provides adequate performance for general-purpose computing. For applications requiring higher performance, the M88DDR4RCD02 supports up to 3200 MT/s. The 2933 MT/s speed is widely supported by existing DDR4 platforms and offers a cost-effective solution.",
        "decisionGuide": "Use M88DDR4RCD03 for cost-sensitive applications; M88DDR4RCD02 for maximum DDR4 performance.",
        "keywords": ["data rate", "2933 MT/s", "speed grade"]
      },
      {
        "question": "Is M88DDR4RCD03 compatible with existing DDR4 platforms?",
        "answer": "Yes, the M88DDR4RCD03 is compatible with existing DDR4 server platforms. It follows the JEDEC DDR4 RCD specification and has been validated on major server platforms. The 2933 MT/s speed is supported by most DDR4-capable CPUs including Intel Xeon and AMD EPYC processors. Contact Montage FAE for specific platform compatibility information.",
        "decisionGuide": "Verify platform support with Montage FAE for your specific CPU and chipset.",
        "keywords": ["compatibility", "platform", "JEDEC", "Intel", "AMD"]
      },
      {
        "question": "How does M88DDR4RCD03 compare to M88DDR4RCD02?",
        "answer": "The main difference is the maximum supported data rate: M88DDR4RCD03 supports up to 2933 MT/s while M88DDR4RCD02 supports up to 3200 MT/s. The RCD02 may also include additional features for higher-speed operation. The RCD03 is cost-optimized for applications not requiring maximum performance. Both devices are pin-compatible and use the same package, allowing for flexible sourcing.",
        "decisionGuide": "Choose RCD03 for cost-sensitive applications; RCD02 for maximum DDR4 performance.",
        "keywords": ["comparison", "RCD02", "RCD03", "cost optimization"]
      },
      {
        "question": "What power management features does M88DDR4RCD03 include?",
        "answer": "The M88DDR4RCD03 includes standard DDR4 power management features: (1) Power-down modes for system sleep states; (2) Programmable output drive strength; (3) Clock gating for power savings. These features help reduce power consumption in data center environments. The RCD works with the DDR4 power delivery network to implement comprehensive power management.",
        "decisionGuide": "Configure power management based on system power requirements and thermal constraints.",
        "keywords": ["power management", "power down", "energy efficiency"]
      },
      {
        "question": "Should I use M88DDR4RCD03 for new designs?",
        "answer": "For new designs, we generally recommend moving to DDR5 with M88DR5RCD02 or M88DR5RCD04 for better performance and future-proofing. However, if you must use DDR4 due to platform constraints or cost requirements, the M88DDR4RCD03 offers a cost-effective solution. Consider your performance requirements, platform roadmap, and total cost of ownership when making this decision.",
        "decisionGuide": "Use DDR5 for new designs; use M88DDR4RCD03 only for legacy platform maintenance or specific cost constraints.",
        "keywords": ["new designs", "DDR5 migration", "legacy support"]
      }
    ]
  }
];

// New PCIe Retimer products to add (need 2 more to reach 6)
const newPCIeProducts = [
  {
    "id": "m88rt40416",
    "partNumber": "M88RT40416",
    "series": "M88RT Series",
    "type": "PCIe Retimer",
    "speed": "16GT/s",
    "voltage": "0.9V/1.8V",
    "shortDescription": "16-lane PCIe Gen4 retimer supporting 16GT/s for high-density server backplane applications with advanced signal conditioning.",
    "descriptionParagraphs": [
      "The M88RT40416 is a 16-lane PCIe Gen4 retimer providing signal conditioning for high-density server backplanes and complex interconnect topologies.",
      "This retimer supports data rates up to 16 GT/s per lane, enabling reliable PCIe Gen4 communication over challenging channel conditions.",
      "With advanced equalization and jitter cleaning capabilities, the M88RT40416 extends PCIe reach while maintaining signal integrity."
    ],
    "features": [
      "16 lanes of PCIe Gen4 retiming",
      "Supports 2.5/5/8/16 GT/s data rates",
      "Advanced CTLE and DFE equalization",
      "Jitter cleaning and clock data recovery",
      "Protocol-aware power management",
      "Comprehensive diagnostics and monitoring",
      "Low power consumption",
      "Industrial temperature range support"
    ],
    "applications": [
      "Server backplane signal conditioning",
      "High-density PCIe switching",
      "Data center interconnect",
      "Storage system PCIe extension",
      "Network equipment signal integrity"
    ],
    "datasheet": "/downloads/montage/m88rt40416.pdf",
    "stock": 15000,
    "moq": 500,
    "leadTime": "6-8 weeks",
    "faeReview": {
      "author": "Signal Integrity FAE",
      "title": "High-Speed Interconnect Specialist",
      "content": "The M88RT40416 is ideal for high-density server applications requiring many PCIe lanes. The 16-lane configuration supports complex backplane designs and high port count PCIe switches. I recommend this retimer for enterprise servers, storage systems, and networking equipment where signal integrity is critical across multiple lanes."
    },
    "alternativeParts": [
      {
        "partNumber": "M88RT41632",
        "link": "/montage/products/m88rt41632.html",
        "reason": "32-lane version for maximum density applications",
        "brand": "Montage",
        "comparison": "M88RT40416 => M88RT41632: More lanes (16 => 32 lanes)",
        "useCase": "Maximum density server backplanes"
      },
      {
        "partNumber": "M88RT40816",
        "link": "/montage/products/m88rt40816.html",
        "reason": "8-lane version for lower density requirements",
        "brand": "Montage",
        "comparison": "M88RT40416 => M88RT40816: Fewer lanes (16 => 8 lanes)",
        "useCase": "Lower density applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88RT41632",
        "category": "PCIe Retimer",
        "function": "Signal Conditioning",
        "description": "32-lane PCIe Gen4 retimer for maximum density",
        "link": "#"
      },
      {
        "partNumber": "M88DR5RCD04",
        "category": "Memory Interface",
        "function": "Memory Clocking",
        "description": "DDR5 RCD for system memory",
        "link": "#"
      },
      {
        "partNumber": "Jintide-C6P",
        "category": "Server CPU",
        "function": "Processing",
        "description": "Jintide server platform for secure computing",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "How many lanes does M88RT40416 support?",
        "answer": "The M88RT40416 supports 16 lanes of PCIe Gen4 retiming. Each lane can operate independently at speeds from 2.5 GT/s (Gen1) up to 16 GT/s (Gen4). The 16-lane configuration is ideal for high-density server backplanes, PCIe switches, and applications requiring multiple x4 or x8 connections. For applications requiring more lanes, the M88RT41632 provides 32 lanes in a single device.",
        "decisionGuide": "Use M88RT40416 for 16-lane requirements; M88RT41632 for 32-lane applications.",
        "keywords": ["lanes", "16-lane", "PCIe Gen4"]
      },
      {
        "question": "What equalization capabilities does M88RT40416 provide?",
        "answer": "The M88RT40416 includes advanced equalization capabilities: Continuous Time Linear Equalizer (CTLE) for pre-cursor ISI compensation, Decision Feedback Equalizer (DFE) for post-cursor ISI cancellation, and adaptive equalization that automatically optimizes settings based on channel characteristics. These features enable the retimer to compensate for significant channel loss, extending PCIe reach over long traces, connectors, and backplanes.",
        "decisionGuide": "Use channel simulation tools to verify equalization adequacy for your specific channel.",
        "keywords": ["equalization", "CTLE", "DFE", "adaptive"]
      },
      {
        "question": "Does M88RT40416 support PCIe Gen3 and Gen2?",
        "answer": "Yes, the M88RT40416 supports all PCIe generations from Gen1 (2.5 GT/s) through Gen4 (16 GT/s). The retimer automatically detects the link speed and configures its equalization and retiming circuits accordingly. This backward compatibility ensures the device can be used in mixed-generation systems and provides flexibility for system designers supporting multiple PCIe speeds.",
        "decisionGuide": "M88RT40416 is suitable for multi-generation PCIe systems; configure based on target link speed.",
        "keywords": ["backward compatibility", "Gen3", "Gen2", "Gen1"]
      },
      {
        "question": "What diagnostics capabilities are available?",
        "answer": "The M88RT40416 provides comprehensive diagnostics including: eye margin monitoring for each lane, error counters for tracking retimer performance, temperature monitoring, and voltage monitoring. These diagnostics can be accessed via the I2C management interface and are valuable for system bring-up, debugging, and monitoring in production environments. The diagnostic data helps identify signal integrity issues and optimize system performance.",
        "decisionGuide": "Use diagnostics during system bring-up and for ongoing health monitoring in production.",
        "keywords": ["diagnostics", "monitoring", "eye margin", "error counters"]
      },
      {
        "question": "What is the typical power consumption?",
        "answer": "The M88RT40416 consumes approximately 100-150mW per active lane at 16 GT/s, with total device power depending on the number of active lanes and link speed. The device includes power management features such as lane power-down for unused lanes and dynamic power scaling based on link utilization. These features enable significant power savings in systems where not all lanes are active simultaneously.",
        "decisionGuide": "Calculate power budget based on number of active lanes and expected link utilization.",
        "keywords": ["power consumption", "power management", "thermal design"]
      }
    ]
  },
  {
    "id": "m88rt50208",
    "partNumber": "M88RT50208",
    "series": "M88RT Series",
    "type": "PCIe Retimer",
    "speed": "32GT/s",
    "voltage": "0.9V/1.8V",
    "shortDescription": "8-lane PCIe Gen5 retimer supporting 32GT/s for next-generation high-speed interconnect applications.",
    "descriptionParagraphs": [
      "The M88RT50208 is an 8-lane PCIe Gen5 retimer supporting data rates up to 32 GT/s, enabling next-generation high-speed interconnect applications.",
      "This retimer provides advanced signal conditioning for PCIe Gen5 links, compensating for channel loss and ensuring reliable communication.",
      "With support for the latest PCIe Gen5 specification, the M88RT50208 is ideal for cutting-edge server and storage designs requiring maximum bandwidth."
    ],
    "features": [
      "8 lanes of PCIe Gen5 retiming",
      "Supports 2.5/5/8/16/32 GT/s data rates",
      "Advanced signal conditioning for Gen5",
      "Low latency retiming architecture",
      "Comprehensive diagnostics",
      "Thermal monitoring and management",
      "Small form factor package",
      "Backward compatible with Gen4/Gen3"
    ],
    "applications": [
      "Next-generation server platforms",
      "High-speed storage systems",
      "AI/ML accelerator cards",
      "High-performance computing",
      "Advanced networking equipment"
    ],
    "datasheet": "/downloads/montage/m88rt50208.pdf",
    "stock": 8000,
    "moq": 500,
    "leadTime": "8-10 weeks",
    "faeReview": {
      "author": "Signal Integrity FAE",
      "title": "High-Speed Interconnect Specialist",
      "content": "The M88RT50208 brings PCIe Gen5 capability to Montage's retimer portfolio. At 32 GT/s, signal integrity challenges are significant, and this retimer provides the advanced equalization needed for reliable Gen5 operation. I recommend this for next-generation server designs, AI accelerators, and storage systems where maximum PCIe bandwidth is required. Early adopters should work closely with Montage FAEs on layout and signal integrity optimization."
    },
    "alternativeParts": [
      {
        "partNumber": "M88RT50816",
        "link": "/montage/products/m88rt50816.html",
        "reason": "16-lane Gen5 version for higher density",
        "brand": "Montage",
        "comparison": "M88RT50208 => M88RT50816: More lanes (8 => 16 lanes)",
        "useCase": "High-density Gen5 applications"
      },
      {
        "partNumber": "M88RT41632",
        "link": "/montage/products/m88rt41632.html",
        "reason": "32-lane Gen4 version for maximum lane count",
        "brand": "Montage",
        "comparison": "M88RT50208 => M88RT41632: More lanes but Gen4 speed",
        "useCase": "High lane count Gen4 applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88RT50816",
        "category": "PCIe Retimer",
        "function": "Signal Conditioning",
        "description": "16-lane PCIe Gen5 retimer",
        "link": "#"
      },
      {
        "partNumber": "M88DR5RCD04",
        "category": "Memory Interface",
        "function": "Memory Clocking",
        "description": "DDR5 RCD for high-speed memory",
        "link": "#"
      },
      {
        "partNumber": "Jintide-C6P",
        "category": "Server CPU",
        "function": "Processing",
        "description": "Jintide server platform with PCIe Gen5 support",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What PCIe generations does M88RT50208 support?",
        "answer": "The M88RT50208 supports all PCIe generations from Gen1 (2.5 GT/s) through Gen5 (32 GT/s). At Gen5 speeds, the retimer provides advanced signal conditioning to compensate for the increased signal integrity challenges. The device automatically detects link speed and configures its circuits accordingly. This comprehensive speed support enables use in mixed-generation systems and provides investment protection for future upgrades.",
        "decisionGuide": "M88RT50208 is ready for Gen5 deployment and backward compatible with existing PCIe devices.",
        "keywords": ["PCIe Gen5", "32 GT/s", "backward compatible"]
      },
      {
        "question": "What are the signal integrity challenges at 32 GT/s?",
        "answer": "At 32 GT/s, signal integrity challenges include: significantly higher channel loss (typically 28-36 dB at Nyquist), increased crosstalk between lanes, tighter jitter requirements, and greater sensitivity to reflections. The M88RT50208 addresses these challenges with advanced CTLE, DFE, and FFE equalization, as well as sophisticated clock data recovery (CDR) circuits. Careful PCB layout and signal integrity simulation are essential for successful Gen5 designs.",
        "decisionGuide": "Work with Montage FAE for channel simulation and layout recommendations.",
        "keywords": ["signal integrity", "32 GT/s", "channel loss", "equalization"]
      },
      {
        "question": "How does M88RT50208 compare to M88RT50816?",
        "answer": "Both devices support PCIe Gen5 (32 GT/s), but M88RT50208 provides 8 lanes while M88RT50816 provides 16 lanes. The 8-lane device is suitable for x8 link applications and smaller form factor designs, while the 16-lane device supports higher density applications. Both devices offer the same Gen5 signal conditioning capabilities and features. Choose based on your lane count requirements and board space constraints.",
        "decisionGuide": "Use M88RT50208 for 8-lane requirements; M88RT50816 for 16-lane applications.",
        "keywords": ["comparison", "8-lane", "16-lane", "lane count"]
      },
      {
        "question": "What is the latency through M88RT50208?",
        "answer": "The M88RT50208 provides low latency retiming with typical latency of less than 4ns at Gen5 speeds. This low latency is achieved through optimized architecture and efficient CDR design. The latency is consistent across operating conditions and contributes minimal additional delay to the PCIe link. For latency-sensitive applications, the retimer's contribution is typically negligible compared to cable or trace delays.",
        "decisionGuide": "Latency is suitable for all standard PCIe applications including latency-sensitive workloads.",
        "keywords": ["latency", "delay", "CDR", "performance"]
      },
      {
        "question": "What thermal management is required?",
        "answer": "The M88RT50208 requires adequate thermal management due to the power dissipation of Gen5 retiming. Typical thermal design requires: thermal vias to inner ground planes, adequate copper area for heat spreading, and potentially a heatsink for high-temperature environments. The device includes thermal monitoring and will throttle performance if junction temperature exceeds safe limits. Thermal simulation is recommended for your specific application conditions.",
        "decisionGuide": "Perform thermal simulation and ensure adequate cooling for your operating environment.",
        "keywords": ["thermal management", "heatsink", "temperature", "power dissipation"]
      }
    ]
  }
];

// New Jintide Server products to add (need 2 more to reach 6)
const newJintideProducts = [
  {
    "id": "jintide-c8p",
    "partNumber": "Jintide-C8P",
    "series": "Jintide C-Series",
    "type": "Server CPU",
    "cores": "96",
    "memory": "DDR5-4800",
    "shortDescription": "High-performance Jintide server CPU with 96 cores, DDR5 support, and advanced security features for data center applications.",
    "descriptionParagraphs": [
      "The Jintide-C8P is a high-performance server CPU featuring 96 cores and comprehensive security monitoring capabilities for demanding data center applications.",
      "This processor supports DDR5-4800 memory and PCIe Gen5 connectivity, delivering exceptional performance for cloud computing, AI/ML, and enterprise workloads.",
      "With integrated Mont-PrC and DSC security technologies, the Jintide-C8P provides hardware-based security monitoring that cannot be bypassed by software attacks."
    ],
    "features": [
      "96 high-performance x86 cores",
      "DDR5-4800 memory support up to 4TB",
      "PCIe Gen5 with 128 lanes",
      "Mont-PrC chip-level security monitoring",
      "DSC dynamic security monitoring",
      "Hardware encryption acceleration",
      "Advanced power management",
      "Full x86 ecosystem compatibility"
    ],
    "applications": [
      "Cloud computing infrastructure",
      "AI/ML training and inference",
      "High-performance computing",
      "Enterprise data centers",
      "Secure cloud services"
    ],
    "datasheet": "/downloads/montage/jintide-c8p.pdf",
    "stock": 500,
    "moq": 10,
    "leadTime": "12-16 weeks",
    "faeReview": {
      "author": "Server Platform FAE",
      "title": "Secure Computing Specialist",
      "content": "The Jintide-C8P represents the flagship of the Jintide server platform lineup. With 96 cores and DDR5 support, it competes with the highest-end x86 server processors while adding unique security capabilities. I recommend this processor for large-scale cloud deployments, AI training clusters, and enterprise data centers where both performance and security are paramount. The hardware security features provide protection that software-only solutions cannot match."
    },
    "alternativeParts": [
      {
        "partNumber": "Jintide-C6P",
        "link": "/montage/products/jintide-c6p.html",
        "reason": "64-core version for mainstream applications",
        "brand": "Montage",
        "comparison": "Jintide-C8P => Jintide-C6P: Fewer cores (96 => 64 cores)",
        "useCase": "Mainstream server applications"
      },
      {
        "partNumber": "Xeon Platinum 8490H",
        "link": "/products/xeon-platinum-8490h.html",
        "reason": "Intel alternative without security monitoring",
        "brand": "Intel",
        "comparison": "Jintide-C8P => Xeon 8490H: Intel alternative without hardware security",
        "useCase": "Standard x86 server applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88DR5RCD04",
        "category": "Memory Interface",
        "function": "Memory Clocking",
        "description": "DDR5 RCD for server memory",
        "link": "#"
      },
      {
        "partNumber": "M88RT50816",
        "category": "PCIe Retimer",
        "function": "Signal Conditioning",
        "description": "PCIe Gen5 retimer for I/O expansion",
        "link": "#"
      },
      {
        "partNumber": "Jintide-E24",
        "category": "Server CPU",
        "function": "Edge Processing",
        "description": "Edge-optimized Jintide processor",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "How many cores does Jintide-C8P have?",
        "answer": "The Jintide-C8P features 96 high-performance x86 cores, making it suitable for the most demanding server workloads. The cores support simultaneous multithreading (SMT) for a total of 192 threads. This core count positions the C8P in the highest tier of server processors, competing with flagship offerings from Intel and AMD. The large core count is ideal for virtualization, container workloads, and massively parallel applications.",
        "decisionGuide": "Use Jintide-C8P for maximum core density requirements; consider C6P for mainstream applications.",
        "keywords": ["cores", "96 cores", "threads", "SMT"]
      },
      {
        "question": "What memory capacity does Jintide-C8P support?",
        "answer": "The Jintide-C8P supports up to 4TB of DDR5-4800 memory across 8 memory channels. This high memory capacity enables large in-memory databases, extensive virtualization, and big data analytics workloads. The DDR5 interface provides high bandwidth and improved power efficiency compared to DDR4. Memory configurations can use RDIMM or LRDIMM modules depending on capacity requirements.",
        "decisionGuide": "Plan memory configuration based on application requirements; use LRDIMM for maximum capacity.",
        "keywords": ["memory capacity", "4TB", "DDR5", "memory channels"]
      },
      {
        "question": "How does the security monitoring work?",
        "answer": "The Jintide-C8P integrates Mont-PrC (Montage Pre-Check) technology that monitors CPU behavior at the hardware level. This monitoring detects anomalous activity such as unauthorized code execution, memory access violations, and other security threats. The DSC (Dynamic Security Monitoring) provides real-time threat detection without impacting performance. Security events are logged and can trigger alerts or automated responses. This hardware-based approach provides protection that cannot be bypassed by software attacks.",
        "decisionGuide": "Enable all security features for maximum protection; integrate with system security management.",
        "keywords": ["security", "Mont-PrC", "DSC", "hardware monitoring"]
      },
      {
        "question": "What PCIe connectivity does Jintide-C8P provide?",
        "answer": "The Jintide-C8P provides 128 lanes of PCIe Gen5 connectivity, enabling extensive I/O expansion. The PCIe lanes can be configured as x16, x8, x4, or x1 links to support various peripherals including GPUs, NICs, SSDs, and custom accelerators. The high lane count and Gen5 speed support multiple high-bandwidth devices simultaneously, making the C8P ideal for GPU-accelerated computing and high-performance storage applications.",
        "decisionGuide": "Configure PCIe lane allocation based on peripheral requirements; use retimers for long traces.",
        "keywords": ["PCIe", "Gen5", "128 lanes", "I/O expansion"]
      },
      {
        "question": "Is Jintide-C8P compatible with existing x86 software?",
        "answer": "Yes, the Jintide-C8P maintains full compatibility with the x86 software ecosystem. It supports all major operating systems including Windows Server, Linux distributions, and VMware. Existing applications run without modification. The security monitoring features are transparent to software unless a security event is detected. This compatibility enables seamless migration from other x86 platforms while adding hardware security capabilities.",
        "decisionGuide": "Validate specific software stack during evaluation; most x86 software runs without modification.",
        "keywords": ["software compatibility", "x86", "operating systems", "migration"]
      }
    ]
  },
  {
    "id": "jintide-e32",
    "partNumber": "Jintide-E32",
    "series": "Jintide E-Series",
    "type": "Edge CPU",
    "cores": "32",
    "memory": "DDR5-4400",
    "shortDescription": "Edge-optimized Jintide processor with 32 cores, integrated security, and efficient power consumption for edge computing deployments.",
    "descriptionParagraphs": [
      "The Jintide-E32 is an edge-optimized processor featuring 32 cores and integrated security monitoring for distributed edge computing applications.",
      "This processor balances performance and power efficiency, making it ideal for edge data centers, telecommunications infrastructure, and industrial edge deployments.",
      "With the same security features as the data center processors, the E32 brings trusted computing capabilities to the edge of the network."
    ],
    "features": [
      "32 x86 cores optimized for edge workloads",
      "DDR5-4400 memory support up to 2TB",
      "PCIe Gen4 with 64 lanes",
      "Integrated Mont-PrC security monitoring",
      "DSC dynamic security monitoring",
      "Enhanced power efficiency",
      "Extended temperature range support",
      "Compact form factor options"
    ],
    "applications": [
      "Edge data centers",
      "Telecommunications infrastructure",
      "Industrial edge computing",
      "Content delivery networks",
      "Distributed AI inference"
    ],
    "datasheet": "/downloads/montage/jintide-e32.pdf",
    "stock": 800,
    "moq": 10,
    "leadTime": "10-14 weeks",
    "faeReview": {
      "author": "Server Platform FAE",
      "title": "Edge Computing Specialist",
      "content": "The Jintide-E32 brings Jintide's security capabilities to edge computing applications. With 32 cores and optimized power consumption, it's well-suited for edge data centers and telecommunications deployments. The integrated security is particularly valuable at the edge where physical security may be less controlled. I recommend this processor for distributed edge applications requiring both performance and security."
    },
    "alternativeParts": [
      {
        "partNumber": "Jintide-E24",
        "link": "/montage/products/jintide-e24.html",
        "reason": "24-core version for lower power requirements",
        "brand": "Montage",
        "comparison": "Jintide-E32 => Jintide-E24: Fewer cores (32 => 24 cores)",
        "useCase": "Power-sensitive edge applications"
      },
      {
        "partNumber": "Jintide-E16",
        "link": "/montage/products/jintide-e16.html",
        "reason": "16-core version for entry-level edge",
        "brand": "Montage",
        "comparison": "Jintide-E32 => Jintide-E16: Fewer cores (32 => 16 cores)",
        "useCase": "Entry-level edge computing"
      }
    ],
    "companionParts": [
      {
        "partNumber": "M88DR5RCD04",
        "category": "Memory Interface",
        "function": "Memory Clocking",
        "description": "DDR5 RCD for edge server memory",
        "link": "#"
      },
      {
        "partNumber": "M88RT41632",
        "category": "PCIe Retimer",
        "function": "Signal Conditioning",
        "description": "PCIe Gen4 retimer for edge I/O",
        "link": "#"
      },
      {
        "partNumber": "Jintide-C6P",
        "category": "Server CPU",
        "function": "Data Center Processing",
        "description": "Data center Jintide processor",
        "link": "#"
      }
    ],
    "faqs": [
      {
        "question": "What makes Jintide-E32 suitable for edge computing?",
        "answer": "The Jintide-E32 is optimized for edge computing through several key features: (1) Balanced 32-core design providing good performance without excessive power consumption; (2) DDR5-4400 support for high memory bandwidth; (3) Extended temperature range support for harsh edge environments; (4) Compact form factor options for space-constrained deployments; (5) The same hardware security features as data center processors. These characteristics make it ideal for edge data centers, telecommunications, and industrial applications.",
        "decisionGuide": "Use Jintide-E32 for mid-range edge applications; consider E24 for lower power or E16 for entry-level.",
        "keywords": ["edge computing", "power efficiency", "temperature range"]
      },
      {
        "question": "What is the power consumption of Jintide-E32?",
        "answer": "The Jintide-E32 has a TDP (Thermal Design Power) of 150W, making it suitable for edge deployments where power and cooling may be limited. The processor includes advanced power management features including dynamic voltage and frequency scaling (DVFS), core parking for idle periods, and fine-grained power control. Under typical edge workloads, average power consumption is often significantly lower than the TDP rating.",
        "decisionGuide": "Design thermal solution for 150W TDP; actual consumption may be lower depending on workload.",
        "keywords": ["power consumption", "TDP", "150W", "power management"]
      },
      {
        "question": "Does Jintide-E32 have the same security features as C-Series?",
        "answer": "Yes, the Jintide-E32 includes the same core security features as the C-Series data center processors: Mont-PrC chip-level security monitoring and DSC dynamic security monitoring. These features provide hardware-based threat detection and trusted computing capabilities at the edge. The security subsystem operates independently of the main CPU cores, ensuring monitoring cannot be bypassed by software attacks.",
        "decisionGuide": "Enable all security features for maximum protection; integrate with edge security management systems.",
        "keywords": ["security", "Mont-PrC", "DSC", "edge security"]
      },
      {
        "question": "What PCIe connectivity does Jintide-E32 provide?",
        "answer": "The Jintide-E32 provides 64 lanes of PCIe Gen4 connectivity, sufficient for typical edge server I/O requirements. The lanes can be configured to support various peripherals such as NICs, SSDs, accelerators, and expansion cards. While Gen4 (vs Gen5 on C-Series), the 64 lanes provide ample bandwidth for edge applications. The PCIe subsystem supports standard PCIe features including SR-IOV for virtualization.",
        "decisionGuide": "Configure PCIe lane allocation based on edge I/O requirements; verify peripheral compatibility.",
        "keywords": ["PCIe", "Gen4", "64 lanes", "I/O connectivity"]
      },
      {
        "question": "What is the operating temperature range?",
        "answer": "The Jintide-E32 supports an extended operating temperature range of 0°C to +70°C for standard configurations, with industrial temperature options (-40°C to +85°C) available for harsh environments. This wide temperature support enables deployment in edge locations without climate control, such as telecommunications huts, factory floors, and outdoor enclosures. Thermal throttling protects the processor if temperature limits are approached.",
        "decisionGuide": "Select appropriate temperature grade for deployment environment; design adequate thermal solution.",
        "keywords": ["temperature range", "industrial grade", "thermal design"]
      }
    ]
  }
];

// Add products to categories
function addProducts() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    if (category.id === 'ddr5-memory-interface') {
      // Add 2 more DDR5 products
      category.products.push(...newDDR5Products);
      console.log(`✓ Added 2 products to DDR5 category (now has ${category.products.length} products)`);
    } else if (category.id === 'ddr4-memory-interface') {
      // Add 2 more DDR4 products
      category.products.push(...newDDR4Products);
      console.log(`✓ Added 2 products to DDR4 category (now has ${category.products.length} products)`);
    } else if (category.id === 'pcie-retimer') {
      // Add 2 more PCIe products
      category.products.push(...newPCIeProducts);
      console.log(`✓ Added 2 products to PCIe Retimer category (now has ${category.products.length} products)`);
    } else if (category.id === 'jintide-server') {
      // Add 2 more Jintide products
      category.products.push(...newJintideProducts);
      console.log(`✓ Added 2 products to Jintide Server category (now has ${category.products.length} products)`);
    }
  });
  
  writeJSON('products.json', data);
  console.log('\n✅ All products added successfully!');
}

// Main execution
console.log('Starting to add Montage products...\n');

addProducts();
