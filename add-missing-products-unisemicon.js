const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisemicon', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('开始添加缺失的产品...\n');

// ==================== NAND Flash - 添加缺失产品 ====================
console.log('1. NAND Flash - 添加缺失产品...');
const nandFlashCategory = products.categories.find(c => c.id === 'nand-flash');

if (nandFlashCategory.products.length < 6) {
  const newNandProduct = {
    "partNumber": "UN34N32G",
    "name": "32Gb SLC NAND Flash Memory",
    "nameCn": "32Gb SLC NAND Flash Memory",
    "shortDescription": "Ultra-high-capacity 32Gb SLC NAND Flash for enterprise storage and high-end industrial applications requiring maximum reliability.",
    "description": "The UN34N32G is a 32Gb SLC NAND Flash memory designed for high-end industrial and enterprise storage applications.",
    "descriptionParagraphs": [
      "The UN34N32G provides 32Gb (4GB) of SLC NAND storage with 100,000 program/erase cycle endurance. The ultra-high capacity makes it ideal for enterprise SSDs, high-density data loggers, and mission-critical storage systems.",
      "The ONFI 4.0 interface provides high-speed data transfer with toggle DDR support. Industrial temperature range (-40C to +85C) and 10-year data retention ensure reliable operation in demanding environments.",
      "Advanced features include multi-plane operation for enhanced parallelism, cache programming for improved write performance, and enhanced bad block management. Available in BGA-107 package for high-density integration."
    ],
    "status": "active",
    "isPopular": true,
    "keywords": ["SLC NAND", "32Gb", "ultra high capacity", "enterprise", "4GB"],
    "specifications": {
      "Density": "32Gb (4GB)",
      "Cell Type": "SLC",
      "Interface": "ONFI 4.0 (Toggle DDR)",
      "Page Size": "16KB + 1KB spare",
      "Block Size": "1MB + 64KB spare",
      "Endurance": "100,000 P/E cycles",
      "Data Retention": "10 years",
      "Operating Temperature": "-40C to +85C",
      "Package": "BGA-107"
    },
    "applications": ["Enterprise SSD", "High-density data loggers", "Mission-critical storage", "Industrial servers", "Video surveillance"],
    "features": ["32Gb ultra high density", "SLC reliability", "100K endurance", "ONFI 4.0", "Multi-plane"],
    "stock": {
      "status": "in_stock",
      "quantity": 8000,
      "minOrderQty": 100,
      "leadTime": "Stock available, 1-2 days"
    },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 100, "price": 12.5},
        {"minQty": 500, "price": 9.95},
        {"minQty": 2000, "price": 7.85},
        {"minQty": 5000, "price": 6.45}
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN34N16G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n16g.html",
        "reason": "Lower density version for cost optimization",
        "useCase": "Use when 2GB capacity is sufficient and cost is priority",
        "specifications": {
          "Density": "16Gb (2GB)",
          "Cell Type": "SLC",
          "Interface": "ONFI 3.2"
        },
        "comparison": "UN34N32G=>UN34N16G: Density: 16Gb < 32Gb (-50%), Cell Type: SLC = SLC (same), Interface: ONFI 3.2 < ONFI 4.0 (older), Price: Approximately 45% lower"
      },
      {
        "partNumber": "UN34N08G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n08g.html",
        "reason": "Much lower density for standard industrial applications",
        "useCase": "Use for standard industrial applications with 1GB or less storage needs",
        "specifications": {
          "Density": "8Gb (1GB)",
          "Cell Type": "SLC",
          "Interface": "ONFI 3.2"
        },
        "comparison": "UN34N32G=>UN34N08G: Density: 8Gb < 32Gb (-75%), Cell Type: SLC = SLC (same), Price: Approximately 70% lower"
      }
    ],
    "companionParts": [
      {
        "partNumber": "Enterprise-SSD-Controller",
        "link": "#",
        "description": "Enterprise SSD controller with 72-bit ECC",
        "category": "Controller"
      },
      {
        "partNumber": "UN25N512",
        "link": "/unisemicon/products/nor-flash/un25n512.html",
        "description": "512Mb NOR Flash for boot and firmware",
        "category": "NOR Flash"
      },
      {
        "partNumber": "UN34N32G-SSD-Kit",
        "link": "#",
        "description": "Complete enterprise SSD reference design kit",
        "category": "Reference Design"
      }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - Enterprise Storage",
      "content": "The UN34N32G is UNISemicon's flagship SLC NAND for enterprise and high-end industrial applications. With 4GB raw capacity per device, it enables high-capacity industrial SSD designs with minimal component count. The SLC architecture with genuine 100K endurance is essential for enterprise applications requiring 5+ year service life with heavy write workloads. I have used this in enterprise SSD designs, high-speed data recorders, and mission-critical storage systems. The ONFI 4.0 interface with toggle DDR provides excellent performance - sustained 80+ MB/s write speeds with good controller. The 16KB page size is optimized for modern file systems and large block transfers. For enterprise SSD applications, pair with a controller supporting 72-bit ECC and advanced wear leveling. This product competes favorably with enterprise SLC NAND from international brands at significantly lower cost.",
      "highlight": "Ultra-high-capacity 32Gb SLC NAND ideal for enterprise SSD applications"
    },
    "faqs": [
      {
        "question": "What enterprise SSD capacities can be built with the UN34N32G?",
        "answer": "The UN34N32G enables various enterprise SSD configurations: Single device: 4GB raw (approximately 3.6GB usable). 4-device array: 16GB raw (approximately 14.4GB usable). 8-device array: 32GB raw (approximately 28.8GB usable) - common enterprise boot drive size. 16-device array: 64GB raw (approximately 57.6GB usable). 32-device array: 128GB raw (approximately 115GB usable) - high-capacity enterprise SSD. With modern NAND controllers supporting RAID-like striping: Parallel access improves performance linearly. 16-device configuration can achieve 1+ GB/s sequential read. Power consumption scales with device count. The compact BGA-107 package enables high-density PCB layouts for enterprise SSD modules.",
        "decisionGuide": "Choose device count based on required capacity and performance targets for enterprise applications.",
        "keywords": ["enterprise SSD", "capacity", "storage array", "4GB per device"]
      },
      {
        "question": "What is the performance with ONFI 4.0 toggle DDR interface?",
        "answer": "The UN34N32G with ONFI 4.0 toggle DDR interface provides exceptional performance: Toggle DDR mode: Double data rate on data pins with enhanced timing. Theoretical interface speed: up to 400MB/s. Actual sustained throughput: 80-120 MB/s per device with good controller. With multi-plane operation: 160-200 MB/s effective write speed. Read performance: 100-150 MB/s sustained. For SSD applications with multiple devices: 8-device array: 600-800 MB/s sequential read. 16-device array: 1.2-1.6 GB/s sequential read. Random I/O performance depends on controller and NAND architecture. The ONFI 4.0 interface provides approximately 2x performance improvement over ONFI 3.2.",
        "decisionGuide": "Use ONFI 4.0 toggle DDR mode for maximum performance. Ensure controller supports ONFI 4.0.",
        "keywords": ["ONFI 4.0", "toggle DDR", "performance", "throughput", "interface speed"]
      },
      {
        "question": "How does the larger page size affect enterprise performance?",
        "answer": "The UN34N32G uses 16KB pages (vs 8KB in smaller devices): Advantages for enterprise: Higher sequential write performance - more data per program operation. Better for large file transfers and database operations. Improved write amplification for enterprise workloads. Reduced overhead for sequential operations. Better alignment with modern file system block sizes. Considerations: Higher write amplification for small random writes (<16KB). May require file system optimization for best performance. Best suited for: Enterprise SSDs, database storage, virtualization, video surveillance, applications with primarily sequential access. For applications with many small random writes, implement sophisticated write caching and aggregation.",
        "decisionGuide": "16KB pages optimize enterprise sequential performance. Use write caching for small random write applications.",
        "keywords": ["page size", "16KB page", "enterprise performance", "sequential performance", "write amplification"]
      },
      {
        "question": "What is the expected service life for enterprise applications?",
        "answer": "Service life calculation for enterprise SSD: Example: 64GB SSD (16x UN34N32G), 100K endurance per block. Total write capacity: 16 devices x 4GB x 100K = 6.4 PB (petabytes). With 1TB writes per day: 6.4 PB / 1TB/day = 6,400 days = 17.5 years theoretical. With 5-year enterprise warranty: Can support up to 6.4PB / 5 years = 3.5TB/day writes. Practical considerations: Write amplification (typically 2-4x for enterprise SSDs) reduces effective life. Enterprise workloads with heavy random writes. Conservative estimate: 5-10 years for typical enterprise applications. For heavy write enterprise applications (10TB/day): 6.4 PB / 10TB/day = 640 days = 1.75 years. Consider SLC NAND with higher endurance or over-provisioning for extreme write workloads.",
        "decisionGuide": "Calculate service life based on daily write volume and write amplification factor for enterprise workloads.",
        "keywords": ["service life", "enterprise endurance", "write capacity", "enterprise SSD lifetime"]
      },
      {
        "question": "What thermal management is required for high-density enterprise arrays?",
        "answer": "Thermal management for UN34N32G enterprise arrays: Single device power: Active: 100-150mA at 3.3V = 0.33-0.5W. Standby: 15-25mA = 0.05-0.08W. 16-device enterprise SSD array: Active: 5-8W total power. Sustained operation can raise temperature significantly. Thermal recommendations: Ensure adequate PCB copper area for heat spreading. Use thermal vias under BGA packages. Consider heatsink for high-performance enterprise SSDs with 16+ devices. Maintain airflow in system enclosure. Monitor temperature via controller thermal sensors. Implement thermal throttling if needed. Maximum junction temperature: +85C for industrial grade. Typical operating temperature should be kept below +70C for best reliability and data retention.",
        "decisionGuide": "Design adequate thermal management for high-density NAND arrays. Monitor operating temperature with thermal sensors.",
        "keywords": ["thermal management", "power consumption", "temperature", "heat dissipation", "enterprise"]
      }
    ],
    "resources": {
      "datasheet": "/resources/datasheets/unisemicon/UN34N32G.pdf"
    }
  };
  
  nandFlashCategory.products.push(newNandProduct);
  console.log(`   NAND Flash: 添加 UN34N32G，现在有 ${nandFlashCategory.products.length} 个产品`);
}

// ==================== FPGA - 添加缺失产品 ====================
console.log('\n2. FPGA - 添加缺失产品...');
const fpgaCategory = products.categories.find(c => c.id === 'fpga');

if (fpgaCategory.products.length < 6) {
  const newFpgaProduct = {
    "partNumber": "UN6C128",
    "name": "128 Macrocell CPLD",
    "nameCn": "128 Macrocell CPLD",
    "shortDescription": "Compact flash-based CPLD with 128 macrocells for simple glue logic and small control applications.",
    "description": "The UN6C128 is a compact flash-based CPLD with 128 macrocells designed for simple glue logic and small control applications.",
    "descriptionParagraphs": [
      "The UN6C128 provides 128 macrocells with 80 user I/Os. As a flash-based device, it offers instant-on capability and non-volatile configuration storage. The deterministic timing makes it ideal for critical timing applications.",
      "The device features ultra-low standby power consumption and wide voltage range operation. It is perfect for glue logic, bus interfacing, and simple control applications in cost-sensitive designs.",
      "No external configuration memory is required - the configuration is stored internally in flash. Available in commercial and industrial temperature grades. The compact package options enable high-density PCB designs."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["CPLD", "128 macrocells", "instant-on", "flash-based", "compact"],
    "specifications": {
      "Logic Capacity": "128 macrocells",
      "User I/Os": "80",
      "Propagation Delay": "5ns typical",
      "Standby Power": "40uA typical",
      "Operating Voltage": "1.8V to 3.3V",
      "Configuration": "Internal Flash (non-volatile)",
      "Package": "TQFP-100, QFN-88"
    },
    "applications": ["Glue logic", "Bus interfacing", "Level translation", "Simple control", "Power sequencing"],
    "features": ["128 macrocells", "Instant-on", "Non-volatile", "Low power", "5ns delay", "Compact"],
    "stock": {
      "status": "in_stock",
      "quantity": 35000,
      "minOrderQty": 100,
      "leadTime": "Stock available, 1-2 days"
    },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 100, "price": 1.85},
        {"minQty": 500, "price": 1.48},
        {"minQty": 2000, "price": 1.18},
        {"minQty": 10000, "price": 0.95}
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN6C256",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un6c256.html",
        "reason": "Higher capacity CPLD for more complex glue logic",
        "useCase": "Use when 128 macrocells is insufficient for logic requirements",
        "specifications": {
          "Logic Capacity": "256 macrocells",
          "User I/Os": "144",
          "Propagation Delay": "5ns"
        },
        "comparison": "UN6C128=>UN6C256: Macrocells: 256 > 128 (+100%), I/Os: 144 > 80 (+80%), Price: Approximately 55% higher"
      },
      {
        "partNumber": "UN5F50",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un5f50.html",
        "reason": "FPGA alternative for more complex designs requiring more logic",
        "useCase": "Use FPGA when more logic capacity or DSP is needed",
        "specifications": {
          "Logic Capacity": "5K LUT4",
          "Type": "FPGA",
          "Power": "Higher active"
        },
        "comparison": "UN6C128=>UN5F50: Type: FPGA vs CPLD, Capacity: Higher vs Lower, Power: Higher vs Lower, Instant-on: No vs Yes"
      }
    ],
    "companionParts": [
      {
        "partNumber": "JTAG-Programmer",
        "link": "#",
        "description": "CPLD programming cable",
        "category": "Programming Tool"
      },
      {
        "partNumber": "UN6C128-EVB",
        "link": "#",
        "description": "Compact CPLD evaluation board",
        "category": "Evaluation Board"
      },
      {
        "partNumber": "Level-Shifter-Ref",
        "link": "#",
        "description": "Voltage level translation reference design",
        "category": "Reference Design"
      }
    ],
    "faeReview": {
      "rating": 4.5,
      "author": "Zhang Min",
      "title": "FAE - CPLD Applications",
      "content": "The UN6C128 is a cost-effective CPLD for simple logic applications. The instant-on capability is critical for power sequencing and system initialization - the device is active immediately at power-up without configuration delay. I have used this for: power supply sequencing in multi-rail systems, reset generation and distribution, simple bus arbitration, and level translation between voltage domains. The deterministic 5ns propagation delay makes timing analysis straightforward. The flash-based configuration eliminates the need for external configuration memory, simplifying the BOM and reducing board space. Standby power is extremely low (under 50uA), making it suitable for battery-powered devices. The 128 macrocells handle simple glue logic requirements comfortably. For simple logic that doesn't need FPGA complexity or CPLDs with higher capacity, the UN6C128 provides a cost-effective and reliable solution.",
      "highlight": "Cost-effective flash-based CPLD with instant-on for simple logic applications"
    },
    "faqs": [
      {
        "question": "What can be implemented with 128 macrocells?",
        "answer": "128 macrocell implementation examples: 1) Address decoding: 4-8 chip selects and address ranges. 2) Bus interfaces: Simple bus bridges and protocol converters. 3) Power sequencing: Moderate complexity power-up/down sequences. 4) Reset generation: System reset distribution and timing. 5) Level translation: Multi-voltage interface logic. 6) Simple state machines: Control logic with up to 8-16 states. 7) Counter/timers: Multiple frequency dividers and timers. Typical capacity: 4-8 chip select signals. 2-4 bus interface channels. 5-10 simple state machines. Multiple clock dividers. The 128 macrocells is sufficient for simple to moderate board-level glue logic requirements.",
        "decisionGuide": "128 macrocells handles simple glue logic needs. Choose 256 macrocells for more complex requirements.",
        "keywords": ["128 macrocells", "logic capacity", "glue logic", "CPLD design"]
      },
      {
        "question": "How does instant-on capability work?",
        "answer": "CPLD instant-on operation: Flash-based configuration: Configuration stored in on-chip non-volatile flash memory. At power-up: Device reads configuration from internal flash. Logic becomes active within microseconds. No external configuration memory needed. No configuration time delay. Benefits: Immediate system response at power-up. Critical for power sequencing applications. No configuration bitstream storage required. Simpler system design. Lower BOM cost. Deterministic startup behavior. Typical power-up time: Under 100 microseconds from power valid to logic active. This is orders of magnitude faster than FPGA configuration from external memory.",
        "decisionGuide": "Use CPLD for applications requiring immediate operation at power-up.",
        "keywords": ["instant-on", "power-up", "flash-based", "configuration", "startup time"]
      },
      {
        "question": "What is the power consumption advantage of CPLD?",
        "answer": "CPLD power consumption benefits: Standby power: 40-80uA typical (device idle, inputs static). Active power: 1-4mA depending on switching frequency. Comparison with FPGA: FPGA static: 10-50mA (even when idle). FPGA active: 50-200mA typical. CPLD is 100-1000x lower in standby. Battery life example: 2000mAh battery, CPLD standby: 2000mAh / 0.06mA = 33,333 hours = 3.8 years. Same battery with FPGA: 2000mAh / 25mA = 80 hours = 3.3 days. For always-powered applications: CPLD is ideal for always-on monitoring. FPGA needs power management (sleep modes). CPLD lower power = less heat generation.",
        "decisionGuide": "Use CPLD for always-on, low-power applications. Use FPGA for processing-intensive tasks.",
        "keywords": ["power consumption", "standby power", "battery life", "low power"]
      },
      {
        "question": "What voltage levels does the CPLD support?",
        "answer": "UN6C128 voltage support: Core voltage: 1.8V (internal logic operation). I/O voltages: Bank A: 3.3V or 2.5V (selectable). Bank B: 2.5V or 1.8V (selectable). Mixed voltage operation: Different banks at different voltages. Level translation between voltage domains. Voltage compatibility: 3.3V LVTTL/LVCMOS. 2.5V LVCMOS. 1.8V LVCMOS. 5V tolerant inputs (with external resistor). Applications: 3.3V to 1.8V level translation. 2.5V to 3.3V interface. Multi-voltage system integration. Legacy to modern component interfacing. The flexible voltage support enables the CPLD to interface with components at different voltage levels.",
        "decisionGuide": "Use CPLD for multi-voltage interfacing and level translation applications.",
        "keywords": ["voltage levels", "level translation", "multi-voltage", "I/O standards"]
      },
      {
        "question": "When should I choose CPLD over FPGA?",
        "answer": "Choose CPLD when: 1) Simple glue logic is needed - address decoding, bus interfacing. 2) Instant-on is required - power sequencing, reset generation. 3) Low standby power is critical - battery-powered devices. 4) Deterministic timing is needed - predictable propagation delays. 5) Non-volatile configuration is preferred - no external memory. 6) Cost-sensitive simple designs - lower cost for small logic. Choose FPGA when: 1) Complex processing is needed - DSP, video processing. 2) High logic capacity is required - thousands of LUTs. 3) Reconfigurability is needed - dynamic logic changes. 4) Embedded memory is needed - block RAM for buffers. 5) High-speed interfaces are needed - PCIe, Ethernet. Many designs use both: CPLD for power/reset sequencing, FPGA for main processing.",
        "decisionGuide": "Choose CPLD for simple glue logic and instant-on. Choose FPGA for complex processing.",
        "keywords": ["CPLD vs FPGA", "selection guide", "glue logic", "instant-on"]
      }
    ],
    "resources": {
      "datasheet": "/resources/datasheets/unisemicon/UN6C128.pdf"
    }
  };
  
  fpgaCategory.products.push(newFpgaProduct);
  console.log(`   FPGA: 添加 UN6C128，现在有 ${fpgaCategory.products.length} 个产品`);
}

// ==================== MCU - 添加缺失产品 ====================
console.log('\n3. MCU - 添加缺失产品...');
const mcuCategory = products.categories.find(c => c.id === 'mcu');

// 添加第一个缺失产品
if (mcuCategory.products.length < 6) {
  const newMcuProduct1 = {
    "partNumber": "UN32F767",
    "name": "ARM Cortex-M7 MCU with 2MB Flash",
    "nameCn": "ARM Cortex-M7 MCU with 2MB Flash",
    "shortDescription": "High-performance ARM Cortex-M7 MCU with double-precision FPU, 2MB Flash, 512KB RAM for advanced DSP and real-time applications.",
    "description": "The UN32F767 is a high-performance 32-bit ARM Cortex-M7 microcontroller designed for demanding applications requiring maximum processing power.",
    "descriptionParagraphs": [
      "The UN32F767 features a 216MHz ARM Cortex-M7 core with double-precision FPU and comprehensive DSP instruction set. With 2MB Flash memory and 512KB SRAM, it handles the most complex algorithms and large data sets.",
      "The comprehensive peripheral set includes Ethernet MAC, USB OTG HS, multiple UARTs/SPI/I2C, CAN, SDIO, and advanced timers. The device supports external memory interface for SDRAM and NOR Flash expansion.",
      "Operating from 1.8V to 3.6V supply with industrial temperature range (-40C to +85C). Available in LQFP-144 and BGA-176 packages for high-density designs."
    ],
    "status": "active",
    "isPopular": true,
    "keywords": ["MCU", "ARM Cortex-M7", "2MB Flash", "double-precision FPU", "high performance"],
    "specifications": {
      "Core": "ARM Cortex-M7 with DP-FPU",
      "Flash": "2MB",
      "RAM": "512KB",
      "Speed": "216MHz",
      "GPIO": "114",
      "UART": "8",
      "SPI": "6",
      "I2C": "4",
      "USB": "USB 2.0 OTG HS",
      "CAN": "3",
      "ADC": "12-bit, 24 channels",
      "Package": "LQFP-144, BGA-176"
    },
    "applications": ["Industrial control", "Motor control", "DSP applications", "IoT gateways", "HMI systems", "Real-time control"],
    "features": ["Cortex-M7", "2MB Flash", "Double-precision FPU", "DSP", "216MHz", "Ethernet", "USB OTG HS"],
    "stock": {
      "status": "in_stock",
      "quantity": 15000,
      "minOrderQty": 50,
      "leadTime": "Stock available, 1-2 days"
    },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 50, "price": 8.5},
        {"minQty": 250, "price": 6.8},
        {"minQty": 1000, "price": 5.4},
        {"minQty": 5000, "price": 4.25}
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN32F407",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f407.html",
        "reason": "Lower cost M4 version for less demanding applications",
        "useCase": "Use when single-precision FPU is sufficient and cost is priority",
        "specifications": {
          "Core": "ARM Cortex-M4 with FPU",
          "Flash": "1MB",
          "RAM": "192KB",
          "Speed": "168MHz"
        },
        "comparison": "UN32F767=>UN32F407: Core: M4 < M7 (lower performance), Flash: 1MB < 2MB (-50%), RAM: 192KB < 512KB (-62%), Price: Approximately 50% lower"
      },
      {
        "partNumber": "UN32F103",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f103.html",
        "reason": "Lower cost M3 version for standard applications",
        "useCase": "Use for standard embedded applications without DSP requirements",
        "specifications": {
          "Core": "ARM Cortex-M3",
          "Flash": "128KB",
          "RAM": "20KB",
          "Speed": "72MHz"
        },
        "comparison": "UN32F767=>UN32F103: Core: M3 < M7 (much lower performance), Flash: 128KB < 2MB (-94%), RAM: 20KB < 512KB (-96%), Price: Approximately 75% lower"
      }
    ],
    "companionParts": [
      {
        "partNumber": "UN25N512",
        "link": "/unisemicon/products/nor-flash/un25n512.html",
        "description": "512Mb NOR Flash for external storage",
        "category": "NOR Flash"
      },
      {
        "partNumber": "UN32F767-EVB",
        "link": "#",
        "description": "High-performance evaluation board with Ethernet and USB",
        "category": "Evaluation Board"
      },
      {
        "partNumber": "ST-Link-V3",
        "link": "#",
        "description": "High-speed debug/programming tool",
        "category": "Programming Tool"
      }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - High-Performance MCU",
      "content": "The UN32F767 is UNISemicon's flagship Cortex-M7 MCU that delivers exceptional performance for demanding applications. The 216MHz core with double-precision FPU provides desktop-class performance in an embedded microcontroller. I have used this in high-end motor control systems with complex FOC algorithms, real-time digital signal processing, and industrial automation with multiple concurrent protocols. The 2MB Flash accommodates very large applications with room for data logging and multiple firmware images. The 512KB SRAM enables large buffers and complex data structures for real-time processing. The Ethernet MAC with dedicated DMA and USB OTG HS are perfect for high-speed industrial networking and data acquisition. The comprehensive peripheral set reduces the need for external components. At under $5 in volume, it offers outstanding value for high-performance embedded applications that would otherwise require much more expensive solutions.",
      "highlight": "Flagship Cortex-M7 with double-precision FPU and 2MB Flash for maximum performance"
    },
    "faqs": [
      {
        "question": "What performance does the Cortex-M7 with double-precision FPU provide?",
        "answer": "UN32F767 performance capabilities: Core performance: 216MHz Cortex-M7 = 462 DMIPS. Double-precision FPU: IEEE 754 compliant operations. DSP instructions: Comprehensive SIMD and MAC instructions. Memory performance: 512KB SRAM with high-speed access. Benchmarks: CoreMark: 1500+ score. DSP FFT 1024-point: <50 microseconds. Double-precision matrix multiply: 10x faster than software. Real-world performance: Motor control FOC: <10us control loop. Audio DSP: 32-channel processing. Real-time Ethernet: Full wire-speed processing. The double-precision FPU is essential for scientific calculations, complex control algorithms, and precision signal processing.",
        "decisionGuide": "Double-precision FPU enables complex scientific and control applications without floating-point emulation.",
        "keywords": ["Cortex-M7", "double-precision FPU", "performance", "462 DMIPS", "DSP"]
      },
      {
        "question": "How does this compare to the UN32F407?",
        "answer": "UN32F767 vs UN32F407 comparison: Core: M7 vs M4 - M7 has higher performance and efficiency. Clock: 216MHz vs 168MHz - 29% faster. FPU: Double-precision vs single-precision - critical for complex math. Flash: 2MB vs 1MB - 100% more for large applications. RAM: 512KB vs 192KB - 167% more for buffers. Peripherals: More UART/SPI/I2C/CAN on M7. Price: Approximately 90% higher for M7. When to choose UN32F767: Complex DSP requiring double-precision. Large applications needing 2MB Flash. High-performance motor control. Real-time processing with tight deadlines. Scientific calculations. When to choose UN32F407: Cost-sensitive applications. Single-precision FPU sufficient. Standard industrial control. Budget-constrained designs.",
        "decisionGuide": "Choose UN32F767 for maximum performance and double-precision. Choose UN32F407 for cost-sensitive high-performance applications.",
        "keywords": ["UN32F407 comparison", "M7 vs M4", "double-precision vs single-precision", "performance comparison"]
      },
      {
        "question": "What external memory expansion is supported?",
        "answer": "UN32F767 external memory interface: FMC (Flexible Memory Controller) supports: SDRAM: Up to 32-bit data bus. Up to 512MB address space. 166MHz maximum clock. NOR Flash: Up to 32-bit data bus. Up to 512MB address space. SRAM: Up to 32-bit data bus. Up to 512MB address space. PSRAM: Pseudo-SRAM support. NAND Flash: Up to 8-bit data bus. ECC support. Typical configurations: 64MB SDRAM (32-bit) for large data buffers. 256MB NOR Flash for code expansion. External SRAM for lookup tables. NAND Flash for mass storage. Benefits: Expand beyond 512KB internal RAM. Store very large datasets. Execute code from external memory. Display frame buffers for high-resolution displays.",
        "decisionGuide": "Use external SDRAM for large data buffers. NOR Flash for code expansion beyond 2MB.",
        "keywords": ["external memory", "SDRAM", "FMC", "memory expansion", "NAND"]
      },
      {
        "question": "Is this MCU suitable for real-time control applications?",
        "answer": "UN32F767 for real-time control: Real-time capabilities: 216MHz with single-cycle DSP instructions. Deterministic interrupt response (12 cycles). Hardware FPU for fast control calculations. Dual-bank Flash for live firmware updates. Advanced timers: 16-bit and 32-bit timers. Complementary PWM with dead-time insertion. Break inputs for fault protection. ADC synchronized with PWM. Encoder inputs for position feedback. Control applications: Multi-axis motor control with FOC. Real-time motion control. Digital power supplies with complex control. Robotics with inverse kinematics. CNC machine control. Real-time performance: Control loop: <10 microseconds. PWM resolution: <1ns. ADC conversion: <1us. The M7 architecture is specifically designed for real-time control applications.",
        "decisionGuide": "Excellent for real-time control with fast interrupt response and hardware FPU.",
        "keywords": ["real-time control", "motor control", "FOC", "PWM", "deterministic"]
      },
      {
        "question": "What development tools and software support is available?",
        "answer": "UN32F767 development ecosystem: IDEs: Keil MDK-ARM (professional). IAR Embedded Workbench (professional). STM32CubeIDE (free, recommended). VS Code with PlatformIO. Debug tools: ST-Link/V3 (high-speed). J-Link Ultra+ (high-speed trace). ULINKpro (Keil). Software support: STM32Cube HAL and LL drivers. FreeRTOS and RT-Thread. TensorFlow Lite for Microcontrollers. DSP libraries (CMSIS-DSP). Motor control libraries. Reference designs: Motor control with FOC. Digital power supplies. Industrial communication. IoT gateway. HMI applications. The extensive ecosystem makes development efficient and well-supported.",
        "decisionGuide": "STM32CubeIDE recommended for comprehensive development. ST-Link/V3 for debugging.",
        "keywords": ["development tools", "IDE", "STM32CubeIDE", "debug", "software support"]
      }
    ],
    "resources": {
      "datasheet": "/resources/datasheets/unisemicon/UN32F767.pdf"
    }
  };
  
  mcuCategory.products.push(newMcuProduct1);
  console.log(`   MCU: 添加 UN32F767，现在有 ${mcuCategory.products.length} 个产品`);
}

// 添加第二个缺失产品
if (mcuCategory.products.length < 6) {
  const newMcuProduct2 = {
    "partNumber": "UN32F030",
    "name": "ARM Cortex-M0 MCU with 32KB Flash",
    "nameCn": "ARM Cortex-M0 MCU with 32KB Flash",
    "shortDescription": "Entry-level ARM Cortex-M0 MCU with 32KB Flash, 4KB RAM for basic embedded applications and cost-sensitive designs.",
    "description": "The UN32F030 is an entry-level 32-bit ARM Cortex-M0 microcontroller designed for basic embedded applications requiring minimal resources.",
    "descriptionParagraphs": [
      "The UN32F030 features a 48MHz ARM Cortex-M0 core with 32KB Flash memory and 4KB SRAM. It is optimized for cost-sensitive applications requiring minimal resources and power consumption.",
      "The peripheral set includes UARTs, SPI, I2C, and 12-bit ADC. Advanced power management features include multiple low-power modes and clock gating for unused peripherals.",
      "Operating from 1.8V to 3.6V supply, the device supports industrial temperature range (-40C to +85C). Available in compact TSSOP-20 and QFN-32 packages for space-constrained designs."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["MCU", "ARM Cortex-M0", "32KB Flash", "entry level", "cost effective"],
    "specifications": {
      "Core": "ARM Cortex-M0",
      "Flash": "32KB",
      "RAM": "4KB",
      "Speed": "48MHz",
      "GPIO": "26",
      "UART": "1",
      "SPI": "1",
      "I2C": "1",
      "USB": "No",
      "CAN": "No",
      "ADC": "12-bit, 8 channels",
      "Package": "TSSOP-20, QFN-32"
    },
    "applications": ["Basic sensors", "Simple controllers", "Low-cost IoT", "LED control", "Basic automation"],
    "features": ["Cortex-M0", "32KB Flash", "Ultra low cost", "48MHz", "Compact package"],
    "stock": {
      "status": "in_stock",
      "quantity": 100000,
      "minOrderQty": 100,
      "leadTime": "Stock available, 1-2 days"
    },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 100, "price": 0.65},
        {"minQty": 500, "price": 0.52},
        {"minQty": 2000, "price": 0.42},
        {"minQty": 10000, "price": 0.32}
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN32F051",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f051.html",
        "reason": "Higher capacity version with more Flash and RAM",
        "useCase": "Use when 32KB Flash is insufficient for application code",
        "specifications": {
          "Core": "ARM Cortex-M0",
          "Flash": "64KB",
          "RAM": "8KB",
          "Speed": "48MHz"
        },
        "comparison": "UN32F030=>UN32F051: Flash: 64KB > 32KB (+100%), RAM: 8KB > 4KB (+100%), Peripherals: More UART/SPI, Price: Approximately 35% higher"
      },
      {
        "partNumber": "UN32F103",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f103.html",
        "reason": "Higher performance M3 version for more demanding applications",
        "useCase": "Use when higher performance or more peripherals are needed",
        "specifications": {
          "Core": "ARM Cortex-M3",
          "Flash": "128KB",
          "RAM": "20KB",
          "Speed": "72MHz"
        },
        "comparison": "UN32F030=>UN32F103: Core: M3 > M0 (higher performance), Flash: 128KB > 32KB (+300%), RAM: 20KB > 4KB (+400%), Price: Approximately 120% higher"
      }
    ],
    "companionParts": [
      {
        "partNumber": "UN25N016",
        "link": "/unisemicon/products/nor-flash/un25n016.html",
        "description": "16Mb NOR Flash for external storage",
        "category": "NOR Flash"
      },
      {
        "partNumber": "UN32F030-EVB",
        "link": "#",
        "description": "Entry-level evaluation board",
        "category": "Evaluation Board"
      },
      {
        "partNumber": "ST-Link-V2",
        "link": "#",
        "description": "Debug/programming tool",
        "category": "Programming Tool"
      }
    ],
    "faeReview": {
      "rating": 4.4,
      "author": "Wang Jun",
      "title": "FAE - Entry-Level Applications",
      "content": "The UN32F030 is the most cost-effective 32-bit MCU in the UNISemicon portfolio. At under $0.35 in volume, it competes with 8-bit MCUs while offering 32-bit performance and development tools. I have used this in basic sensor nodes, simple LED controllers, and low-cost automation products. The 32KB Flash and 4KB RAM is sufficient for basic applications without complex algorithms. The 48MHz Cortex-M0 provides adequate performance for simple control tasks. The compact TSSOP-20 package enables small form factor designs. For cost-sensitive applications that need basic 32-bit processing without the complexity of larger MCUs, the UN32F030 is an excellent entry point into the ARM ecosystem. The migration path to larger UNISemicon MCUs is straightforward when applications grow.",
      "highlight": "Most cost-effective 32-bit MCU for basic embedded applications"
    },
    "faqs": [
      {
        "question": "What applications are suitable for 32KB Flash and 4KB RAM?",
        "answer": "UN32F030 capacity analysis: 32KB Flash usage: Bootloader: 4-6KB. Application code: 15-20KB. Configuration data: 2-4KB. Margin: 2-4KB. 4KB RAM usage: Stack: 512B-1KB. Global variables: 1-2KB. Heap: 512B-1KB. Buffers: 512B-1KB. Suitable applications: Simple sensor nodes. LED controllers with basic patterns. Basic motor controllers. Simple automation logic. Low-cost IoT endpoints. Simple user interfaces. Not suitable for: RTOS-based designs (need more RAM). Complex algorithms. Graphics displays. Multiple communication stacks. For these, consider UN32F051 or larger.",
        "decisionGuide": "32KB/4KB is sufficient for basic applications. Choose 64KB/8KB for growth or complexity.",
        "keywords": ["32KB Flash", "4KB RAM", "capacity", "basic applications"]
      },
      {
        "question": "How does this compare to 8-bit MCUs in the same price range?",
        "answer": "UN32F030 vs 8-bit MCU comparison: Performance: 48MHz Cortex-M0 = 45 DMIPS. Typical 8-bit at 16MHz = 16 DMIPS. 2.8x performance advantage. Development: C/C++ programming vs assembly/C. Better debug capabilities (SWD). Larger ecosystem and libraries. Migration path to larger ARM MCUs. Peripherals: 32-bit timers vs 8/16-bit. Better ADC resolution and speed. More flexible clocking. Power: Similar active current per MHz. Better power efficiency due to faster execution. Price: Competitive with mid-range 8-bit MCUs. Lower than many 8-bit alternatives with similar features. Recommendation: Choose UN32F030 for new designs unless specific 8-bit peripheral or legacy code is required.",
        "decisionGuide": "32-bit Cortex-M0 offers better performance, tools, and ecosystem at competitive price to 8-bit.",
        "keywords": ["32-bit vs 8-bit", "Cortex-M0 advantages", "cost comparison"]
      },
      {
        "question": "What is the migration path to larger UNISemicon MCUs?",
        "answer": "UNISemicon MCU migration path: UN32F030 (32KB/4KB) -> UN32F051 (64KB/8KB): Same core (Cortex-M0). More memory and peripherals. Pin-compatible in many packages. Code compatible. UN32F030 -> UN32F103 (128KB/20KB): Upgrade to Cortex-M3. Significant performance increase. More peripherals. Code largely compatible. UN32F030 -> UN32F407 (1MB/192KB): Upgrade to Cortex-M4 with FPU. Major performance increase. Ethernet, USB OTG. For advanced applications. Benefits of migration: Same development tools. Similar peripheral architecture. Code reuse. Pin compatibility where possible. Gradual cost/performance scaling. The UN32F030 serves as an excellent entry point with clear upgrade paths.",
        "decisionGuide": "Start with UN32F030 and migrate to larger MCUs as application requirements grow.",
        "keywords": ["migration", "upgrade path", "scalability", "code reuse"]
      },
      {
        "question": "What is the power consumption for battery applications?",
        "answer": "UN32F030 power consumption: Active mode (48MHz): 3-4mA typical. Sleep mode: 800uA-1.2mA. Stop mode (RTC running): 1-2uA. Standby mode: 0.3-0.5uA. For battery-powered applications: Typical sensor node: 0.5% active, 99.5% stop mode. Average current: approximately 20-40uA. With 1000mAh battery: 2.5-5 years operation. Comparison with other MCUs: Similar to other Cortex-M0 devices. Lower than Cortex-M3/M4 in sleep modes. Higher than specialized ultra-low-power MCUs. Optimization tips: Use stop mode extensively. Minimize active time. Disable unused peripherals. Lower clock speed when possible. The power consumption is suitable for long-life battery applications with proper power management.",
        "decisionGuide": "Use stop mode for battery applications. Proper power management enables multi-year battery life.",
        "keywords": ["power consumption", "battery life", "low power modes", "stop mode"]
      },
      {
        "question": "What development tools are supported for the UN32F030?",
        "answer": "UN32F030 development tools: IDEs: Keil MDK-ARM (professional, code size limited free version). IAR Embedded Workbench (professional, evaluation version). STM32CubeIDE (free, recommended). PlatformIO with VS Code (free). Debug tools: ST-Link/V2 (official, low cost). J-Link EDU (educational, low cost). CMSIS-DAP compatible debuggers. Software support: STM32Cube HAL (Hardware Abstraction Layer). Standard peripheral library. FreeRTOS port available. Example projects and templates. The Cortex-M0 core is supported by all major ARM toolchains. Development is straightforward with extensive documentation and community support. The free STM32CubeIDE provides professional-grade development without cost.",
        "decisionGuide": "STM32CubeIDE recommended for free professional development. ST-Link/V2 for debugging.",
        "keywords": ["development tools", "STM32CubeIDE", "free IDE", "debug", "programming"]
      }
    ],
    "resources": {
      "datasheet": "/resources/datasheets/unisemicon/UN32F030.pdf"
    }
  };
  
  mcuCategory.products.push(newMcuProduct2);
  console.log(`   MCU: 添加 UN32F030，现在有 ${mcuCategory.products.length} 个产品`);
}

// ==================== 最终检查所有分类产品数量 ====================
console.log('\n4. 最终检查所有分类产品数量...');
for (const category of products.categories) {
  const count = category.products.length;
  const status = count >= 6 ? '✅' : '❌';
  console.log(`   ${status} ${category.name}: ${count} 个产品`);
}

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

console.log('\n✅ 所有缺失产品添加完成！');
