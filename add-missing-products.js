const fs = require('fs');
const path = require('path');

const brand = 'unisemicon';
const dataDir = path.join(__dirname, 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('添加缺失的产品...\n');

// ==================== NAND Flash - 需要再添加3个产品 ====================
console.log('1. NAND Flash 分类 - 添加更多产品...');
const nandFlashCategory = products.categories.find(c => c.id === 'nand-flash');

const additionalNandProducts = [
  {
    "partNumber": "UN34N16G",
    "name": "16Gb SLC NAND Flash Memory",
    "nameCn": "16Gb SLC NAND Flash Memory",
    "shortDescription": "High-capacity 16Gb SLC NAND Flash with 100K endurance for industrial SSD and high-reliability storage systems.",
    "description": "The UN34N16G is a 16Gb SLC NAND Flash memory designed for high-capacity industrial storage applications.",
    "descriptionParagraphs": [
      "The UN34N16G provides 16Gb (2GB) of SLC NAND storage with 100,000 program/erase cycle endurance. The high capacity makes it ideal for industrial SSDs, high-density data loggers, and network storage applications.",
      "The ONFI 3.2 interface provides high-speed data transfer with toggle DDR support. Industrial temperature range (-40C to +85C) and 10-year data retention ensure reliable operation in demanding environments.",
      "Advanced features include multi-plane operation for enhanced parallelism, cache programming for improved write performance, and enhanced bad block management. Available in BGA-63 and TSOP-48 packages."
    ],
    "status": "active",
    "isPopular": true,
    "keywords": ["SLC NAND", "16Gb", "high capacity", "industrial SSD", "2GB"],
    "specifications": {
      "Density": "16Gb (2GB)",
      "Cell Type": "SLC",
      "Interface": "ONFI 3.2 (Toggle DDR)",
      "Page Size": "8KB + 512B spare",
      "Block Size": "512KB + 32KB spare",
      "Endurance": "100,000 P/E cycles",
      "Data Retention": "10 years",
      "Operating Temperature": "-40C to +85C",
      "Package": "BGA-63, TSOP-48"
    },
    "applications": ["Industrial SSD", "High-density data loggers", "Network storage", "Video recorders", "Medical imaging"],
    "features": ["16Gb high density", "SLC reliability", "100K endurance", "Toggle DDR", "Multi-plane"],
    "stock": { "status": "in_stock", "quantity": 15000, "minOrderQty": 200, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 200, "price": 6.8 },
        { "minQty": 1000, "price": 5.4 },
        { "minQty": 5000, "price": 4.25 },
        { "minQty": 10000, "price": 3.55 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN34N08G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n08g.html",
        "reason": "Lower density alternative for cost optimization",
        "useCase": "Use when 1GB capacity is sufficient and cost is priority",
        "specifications": { "Density": "8Gb (1GB)", "Cell Type": "SLC", "Interface": "ONFI 3.2" },
        "comparison": "UN34N16G=>UN34N08G: Density: 8Gb < 16Gb (-50%), Cell Type: SLC = SLC (same), Interface: ONFI 3.2 = ONFI 3.2 (same), Price: Approximately 40% lower"
      },
      {
        "partNumber": "UN34N32G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n32g.html",
        "reason": "Higher density version for maximum storage capacity",
        "useCase": "Use for very high capacity industrial SSD applications",
        "specifications": { "Density": "32Gb (4GB)", "Cell Type": "SLC", "Interface": "ONFI 3.2" },
        "comparison": "UN34N16G=>UN34N32G: Density: 32Gb > 16Gb (+100%), Cell Type: SLC = SLC (same), Interface: ONFI 3.2 = ONFI 3.2 (same), Package: BGA-107"
      }
    ],
    "companionParts": [
      { "partNumber": "SSD-Controller-16G", "link": "#", "description": "Industrial SSD controller with 72-bit ECC", "category": "Controller" },
      { "partNumber": "UN25N256", "link": "/unisemicon/products/nor-flash/un25n256.html", "description": "256Mb NOR Flash for boot and firmware", "category": "NOR Flash" },
      { "partNumber": "UN34N16G-SSD-Kit", "link": "#", "description": "Complete SSD reference design kit", "category": "Reference Design" }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - Enterprise Storage",
      "content": "The UN34N16G is an exceptional choice for industrial SSD and high-capacity storage applications. With 2GB raw capacity per device, it enables compact industrial SSD designs - four devices provide 8GB in a small form factor. The SLC architecture with genuine 100K endurance is critical for industrial applications requiring 10+ year service life. I have used this in industrial SSD designs, high-speed data recorders, and medical imaging systems. The toggle DDR interface provides excellent performance - sustained 40+ MB/s write speeds with good controller. The 8KB page size is optimized for modern file systems. For industrial SSD applications, pair with a controller supporting 72-bit ECC and advanced wear leveling. This product competes favorably with industrial SLC NAND from international brands at significantly lower cost.",
      "highlight": "High-capacity 16Gb SLC NAND ideal for industrial SSD applications"
    },
    "faqs": [
      {
        "question": "What SSD capacities can be built with the UN34N16G?",
        "answer": "The UN34N16G enables various industrial SSD configurations: Single device: 2GB raw (approximately 1.8GB usable). 4-device array: 8GB raw (approximately 7.2GB usable) - suitable for industrial boot drives. 8-device array: 16GB raw (approximately 14.4GB usable) - common industrial SSD size. 16-device array: 32GB raw (approximately 28.8GB usable) - high-capacity industrial SSD. With modern NAND controllers supporting RAID-like striping: Parallel access improves performance linearly. 8-device configuration can achieve 300+ MB/s sequential read. Power consumption scales with device count. The compact BGA-63 package enables high-density PCB layouts for industrial SSD modules.",
        "decisionGuide": "Choose device count based on required capacity and performance targets.",
        "keywords": ["SSD capacity", "industrial SSD", "storage array", "2GB per device"]
      },
      {
        "question": "What is the performance with toggle DDR interface?",
        "answer": "The UN34N16G with toggle DDR interface provides enhanced performance: Toggle DDR mode: Double data rate on data pins. Theoretical interface speed: up to 200MB/s. Actual sustained throughput: 40-60 MB/s per device with good controller. With multi-plane operation: 80-100 MB/s effective write speed. Read performance: 50-70 MB/s sustained. For SSD applications with multiple devices: 4-device array: 150-200 MB/s sequential read. 8-device array: 300-400 MB/s sequential read. Random I/O performance depends on controller and NAND architecture. The toggle DDR interface provides approximately 2x performance improvement over asynchronous mode.",
        "decisionGuide": "Use toggle DDR mode for maximum performance. Ensure controller supports toggle DDR.",
        "keywords": ["toggle DDR", "performance", "throughput", "interface speed"]
      },
      {
        "question": "How does the larger page size affect performance?",
        "answer": "The UN34N16G uses 8KB pages (vs 4KB in smaller devices): Advantages: Higher sequential write performance - more data per program operation. Better for large file transfers and streaming applications. Improved write amplification for large files. Reduced overhead for sequential operations. Considerations: Higher write amplification for small random writes (<8KB). Less efficient for small file systems with many small files. May require file system optimization for best performance. Best suited for: Industrial SSDs, video recording, data logging with large records, applications with primarily sequential access. For applications with many small random writes, consider using 4KB page devices or implement sophisticated write caching.",
        "decisionGuide": "8KB pages optimize sequential performance. Use write caching for small random write applications.",
        "keywords": ["page size", "8KB page", "sequential performance", "write amplification"]
      },
      {
        "question": "What is the expected service life for industrial SSD applications?",
        "answer": "Service life calculation for industrial SSD: Example: 16GB SSD (8x UN34N16G), 100K endurance per block. Total write capacity: 8 devices x 2GB x 100K = 1.6 PB (petabytes). With 100GB writes per day: 1.6 PB / 100GB/day = 16,000 days = 43.8 years theoretical. Practical considerations: Write amplification (typically 2-4x for SSDs) reduces effective life. Data retention requirements. Spare block pool consumption. Conservative estimate: 10-15 years for typical industrial applications. For heavy write applications (1TB/day): 1.6 PB / 1TB/day = 1,600 days = 4.4 years. Still adequate for most industrial equipment lifecycle.",
        "decisionGuide": "Calculate service life based on daily write volume and write amplification factor.",
        "keywords": ["service life", "SSD endurance", "write capacity", "industrial SSD lifetime"]
      },
      {
        "question": "What thermal management is required for high-density arrays?",
        "answer": "Thermal management for UN34N16G arrays: Single device power: Active: 80-120mA at 3.3V = 0.26-0.4W. Standby: 10-20mA = 0.03-0.07W. 8-device SSD array: Active: 2-3.2W total power. Sustained operation can raise temperature significantly. Thermal recommendations: Ensure adequate PCB copper area for heat spreading. Use thermal vias under BGA packages. Consider heatsink for high-performance SSDs with 8+ devices. Maintain airflow in system enclosure. Monitor temperature via controller thermal sensors. Maximum junction temperature: +85C for industrial grade. Typical operating temperature should be kept below +70C for best reliability and data retention.",
        "decisionGuide": "Design adequate thermal management for high-density NAND arrays. Monitor operating temperature.",
        "keywords": ["thermal management", "power consumption", "temperature", "heat dissipation"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN34N16G.pdf" }
  },
  {
    "partNumber": "UN34N02G",
    "name": "2Gb SLC NAND Flash Memory",
    "nameCn": "2Gb SLC NAND Flash Memory",
    "shortDescription": "Compact 2Gb SLC NAND Flash for small embedded systems and cost-sensitive industrial applications.",
    "description": "The UN34N02G is a 2Gb SLC NAND Flash memory designed for compact embedded systems requiring reliable storage.",
    "descriptionParagraphs": [
      "The UN34N02G provides 2Gb (256MB) of SLC NAND storage with 100,000 program/erase cycle endurance. The compact capacity is ideal for small embedded systems, sensor nodes, and cost-sensitive industrial applications.",
      "The ONFI 2.3 interface provides broad compatibility with NAND controllers. Industrial temperature range (-40C to +85C) ensures reliable operation in harsh environments.",
      "The device supports standard SLC NAND features and is available in compact TSOP-48 package. It offers an economical entry point for SLC NAND reliability."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["SLC NAND", "2Gb", "compact", "small embedded", "256MB"],
    "specifications": {
      "Density": "2Gb (256MB)",
      "Cell Type": "SLC",
      "Interface": "ONFI 2.3 (Async)",
      "Page Size": "2KB + 64B spare",
      "Block Size": "128KB + 4KB spare",
      "Endurance": "100,000 P/E cycles",
      "Data Retention": "10 years",
      "Operating Temperature": "-40C to +85C",
      "Package": "TSOP-48"
    },
    "applications": ["Sensor nodes", "Small data loggers", "Embedded controllers", "IoT gateways", "Industrial sensors"],
    "features": ["2Gb compact size", "SLC reliability", "100K endurance", "Industrial temp", "Cost effective"],
    "stock": { "status": "in_stock", "quantity": 60000, "minOrderQty": 1000, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 1000, "price": 1.15 },
        { "minQty": 5000, "price": 0.92 },
        { "minQty": 10000, "price": 0.73 },
        { "minQty": 50000, "price": 0.58 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN34N04G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n04g.html",
        "reason": "Higher density version for applications needing more storage",
        "useCase": "Use when 256MB is insufficient for data storage needs",
        "specifications": { "Density": "4Gb (512MB)", "Cell Type": "SLC", "Interface": "ONFI 3.0" },
        "comparison": "UN34N02G=>UN34N04G: Density: 4Gb > 2Gb (+100%), Cell Type: SLC = SLC (same), Interface: ONFI 3.0 > ONFI 2.3 (newer), Price: Approximately 70% higher"
      },
      {
        "partNumber": "UN25N064",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n064.html",
        "reason": "NOR Flash alternative for code storage applications",
        "useCase": "Use NOR Flash instead if primarily storing boot code and firmware",
        "specifications": { "Density": "64Mb (8MB)", "Interface": "SPI", "Cell Type": "NOR" },
        "comparison": "UN34N02G=>UN25N064: Technology: NOR vs NAND, Interface: SPI vs Parallel, Use Case: Code storage vs Data storage, Random Read: Faster in NOR"
      }
    ],
    "companionParts": [
      { "partNumber": "Small-NAND-Controller", "link": "#", "description": "Compact NAND controller with 4-bit ECC", "category": "Controller" },
      { "partNumber": "UN25N032", "link": "/unisemicon/products/nor-flash/un25n032.html", "description": "32Mb NOR Flash for boot code", "category": "NOR Flash" },
      { "partNumber": "UN34N02G-Kit", "link": "#", "description": "Starter kit for evaluation", "category": "Evaluation Kit" }
    ],
    "faeReview": {
      "rating": 4.6,
      "author": "Zhang Wei",
      "title": "FAE - Small Embedded Systems",
      "content": "The UN34N02G is the perfect entry-level SLC NAND for small embedded applications. The 256MB capacity handles data logging and storage needs for sensor nodes, small controllers, and IoT devices. Despite the compact size, it maintains full SLC reliability with 100K endurance. I have used this in wireless sensor networks, small PLCs, and IoT gateway designs. The ONFI 2.3 interface is widely supported by microcontrollers with built-in NAND controllers. At under $0.75 in volume, it provides SLC reliability at an attractive price point. The industrial temperature rating ensures reliable operation in outdoor and industrial environments. For applications needing modest storage (under 200MB) with high reliability, this is an excellent choice.",
      "highlight": "Compact 2Gb SLC NAND ideal for small embedded and IoT applications"
    },
    "faqs": [
      {
        "question": "What applications are best suited for the 2Gb capacity?",
        "answer": "The UN34N02G 2Gb (256MB) capacity is ideal for: 1) Sensor data logging - months to years of sensor data. 2) Small IoT gateways - configuration, logs, and buffered data. 3) Embedded controllers - parameter storage and event logging. 4) Industrial sensors - calibration data and diagnostic logs. 5) Small PLCs - program backup and data logging. Typical storage capacity: 100,000 sensor readings at 1KB each. 1,000,000 event logs at 200 bytes each. 50,000 configuration snapshots at 4KB each. For many small embedded applications, 256MB provides ample storage with room for growth. If your application needs more than 150MB usable storage, consider the 4Gb version.",
        "decisionGuide": "2Gb is ideal for small embedded systems. Choose 4Gb or larger if you need over 150MB usable storage.",
        "keywords": ["2Gb capacity", "256MB storage", "small embedded", "sensor logging"]
      },
      {
        "question": "How does this compare to using NOR Flash for data storage?",
        "answer": "UN34N02G NAND vs NOR Flash comparison: Capacity: NAND provides 256MB vs typical 8-32MB NOR. Cost per MB: NAND is approximately 5x cheaper per MB. Write performance: NAND is 10-50x faster for large writes. Endurance: Both offer 100K cycles (SLC NAND). Interface: NAND needs controller, NOR can be memory-mapped. Boot capability: NOR supports XIP (execute-in-place), NAND does not. Best use cases for NAND: Data logging, mass storage, file systems. Best use cases for NOR: Boot code, firmware, XIP applications. Many designs use both: NOR for boot/firmware, NAND for data storage.",
        "decisionGuide": "Use NAND for data storage, NOR for boot code. Many systems benefit from using both.",
        "keywords": ["NAND vs NOR", "data storage", "boot code", "XIP", "capacity comparison"]
      },
      {
        "question": "What is the typical power consumption?",
        "answer": "UN34N02G power consumption: Active read: 20-30mA at 3.3V. Page program: 25-35mA. Block erase: 25-35mA. Standby: 5-10uA. For battery-powered data logging: Typical operation: 100 writes/day, 1000 reads/day. Daily power consumption: Writes: 100 x 25mA x 0.5ms = 0.35 mAh. Reads: 1000 x 25mA x 0.1ms = 2.5 mAh. Standby: 24h x 0.01mA = 0.24 mAh. Total: approximately 3 mAh per day. With 2000mAh battery: 666 days = 1.8 years operation. Deep sleep between operations can extend battery life significantly.",
        "decisionGuide": "Power consumption is suitable for battery-powered applications with appropriate sleep management.",
        "keywords": ["power consumption", "battery operation", "low power", "energy usage"]
      },
      {
        "question": "Is the ONFI 2.3 interface compatible with modern controllers?",
        "answer": "ONFI 2.3 compatibility: ONFI (Open NAND Flash Interface) is an industry standard. ONFI 2.3 is widely supported and backward compatible. Modern NAND controllers support ONFI 2.3 through 4.0. Many microcontrollers include built-in NAND controllers: NXP i.MX series, TI Sitara, Samsung Exynos, MediaTek SoCs. Check your processor datasheet for NAND controller support. The UN34N02G uses standard asynchronous interface timing. Compatible with most NAND controllers without special configuration. For new designs, ensure your controller supports at least ONFI 2.3.",
        "decisionGuide": "Verify your processor has NAND controller support. ONFI 2.3 is widely compatible.",
        "keywords": ["ONFI 2.3", "interface compatibility", "NAND controller", "processor support"]
      },
      {
        "question": "What is the write performance for data logging applications?",
        "answer": "UN34N02G write performance: Page program: 200-500 microseconds per 2KB page. Block erase: 2-4 milliseconds per 128KB block. Sequential write throughput: 8-15 MB/s with good controller. For data logging applications: 1KB records: approximately 150-300 records/second. 10KB records: approximately 80-150 records/second. Typical sensor logging (1 record/second): Well within device capabilities. Burst logging (100 records/second): Possible with cache programming. The 2KB page size is efficient for small to medium record sizes. For very small records (<512 bytes), consider write caching to improve efficiency.",
        "decisionGuide": "Performance is adequate for typical data logging. Use write caching for burst operations.",
        "keywords": ["write performance", "program time", "data logging speed", "throughput"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN34N02G.pdf" }
  },
  {
    "partNumber": "UN35M08G",
    "name": "8Gb MLC NAND Flash Memory",
    "nameCn": "8Gb MLC NAND Flash Memory",
    "shortDescription": "Cost-effective 8Gb MLC NAND Flash for consumer and commercial applications with balanced performance and reliability.",
    "description": "The UN35M08G is an 8Gb MLC NAND Flash memory offering cost-effective storage for consumer electronics and commercial applications.",
    "descriptionParagraphs": [
      "The UN35M08G provides 8Gb (1GB) of MLC NAND storage at an attractive price point. With 10,000 program/erase cycle endurance, it is well-suited for consumer electronics, commercial equipment, and cost-sensitive applications.",
      "The ONFI 3.2 interface ensures compatibility with a wide range of NAND controllers. Commercial temperature range (0C to +70C) is suitable for consumer and indoor commercial applications.",
      "The device supports standard NAND features including cache programming, copy-back, and multi-plane operation. Available in TSOP-48 package for easy integration."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["MLC NAND", "8Gb", "cost effective", "consumer", "commercial"],
    "specifications": {
      "Density": "8Gb (1GB)",
      "Cell Type": "MLC",
      "Interface": "ONFI 3.2 (Async/Toggle)",
      "Page Size": "8KB + 448B spare",
      "Block Size": "4MB + 224KB spare",
      "Endurance": "10,000 P/E cycles",
      "Data Retention": "5 years",
      "Operating Temperature": "0C to +70C (Commercial)",
      "Package": "TSOP-48"
    },
    "applications": ["Consumer electronics", "Set-top boxes", "Digital signage", "Commercial tablets", "Gaming devices"],
    "features": ["8Gb capacity", "MLC cost advantage", "10K endurance", "ONFI 3.2", "Commercial temp"],
    "stock": { "status": "in_stock", "quantity": 50000, "minOrderQty": 500, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 500, "price": 1.85 },
        { "minQty": 1000, "price": 1.48 },
        { "minQty": 5000, "price": 1.15 },
        { "minQty": 10000, "price": 0.95 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN34N08G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n08g.html",
        "reason": "SLC version for higher reliability requirements",
        "useCase": "Use for industrial or high-reliability applications requiring 100K endurance",
        "specifications": { "Density": "8Gb (1GB)", "Cell Type": "SLC", "Endurance": "100K" },
        "comparison": "UN35M08G=>UN34N08G: Cell Type: SLC > MLC (10x endurance), Endurance: 100K > 10K (+900%), Price: Approximately 60% higher, Operating Temp: Industrial grade available"
      },
      {
        "partNumber": "UN35M04G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un35m04g.html",
        "reason": "Lower density version for smaller storage needs",
        "useCase": "Use for cost-sensitive applications with under 512MB storage requirements",
        "specifications": { "Density": "4Gb (512MB)", "Cell Type": "MLC", "Endurance": "10K" },
        "comparison": "UN35M08G=>UN35M04G: Density: 4Gb < 8Gb (-50%), Cell Type: MLC = MLC (same), Endurance: 10K = 10K (same), Price: Approximately 45% lower"
      }
    ],
    "companionParts": [
      { "partNumber": "MLC-Controller", "link": "#", "description": "MLC NAND controller with 40-bit ECC", "category": "Controller" },
      { "partNumber": "UN25N064", "link": "/unisemicon/products/nor-flash/un25n064.html", "description": "NOR Flash for boot code", "category": "NOR Flash" },
      { "partNumber": "UN35M08G-REF", "link": "#", "description": "Reference design for consumer applications", "category": "Reference Design" }
    ],
    "faeReview": {
      "rating": 4.5,
      "author": "Chen Hua",
      "title": "FAE - Consumer Electronics",
      "content": "The UN35M08G offers excellent value for consumer electronics applications. The MLC architecture provides 1GB capacity at approximately 40% lower cost than equivalent SLC NAND. The 10K endurance is adequate for most consumer applications - set-top boxes, digital signage, tablets, and gaming devices typically have modest write requirements. I have successfully used this in Android TV boxes, digital signage players, and commercial tablet designs. The commercial temperature range (0C to +70C) is sufficient for indoor consumer products. For best results, use with a controller supporting strong ECC (40-bit per 1KB minimum) and implement wear leveling. The cost savings compared to SLC make this attractive for price-sensitive consumer products where extreme reliability is not required.",
      "highlight": "Cost-effective MLC NAND ideal for consumer electronics applications"
    },
    "faqs": [
      {
        "question": "When should I choose MLC over SLC NAND?",
        "answer": "Choose MLC NAND when: 1) Cost is a primary concern - MLC is 40-50% cheaper per GB. 2) Write endurance requirements are moderate - 10K cycles is sufficient. 3) Operating environment is controlled - commercial temperature range. 4) Data retention of 5 years meets requirements. 5) Application is consumer or commercial, not industrial/automotive. Typical MLC applications: Consumer electronics (TVs, tablets, set-top boxes). Digital signage and kiosks. Gaming devices. Commercial tablets and POS systems. Backup and archival storage. Avoid MLC for: Industrial control systems. Automotive applications. Medical devices. Any application requiring >5 year service life with frequent writes.",
        "decisionGuide": "Use MLC for cost-sensitive consumer applications. Use SLC for industrial/high-reliability applications.",
        "keywords": ["MLC vs SLC", "NAND selection", "cost optimization", "consumer applications"]
      },
      {
        "question": "What is the actual cost savings compared to SLC?",
        "answer": "Cost comparison UN35M08G (MLC) vs UN34N08G (SLC): MLC price: approximately $1.15 in 5K quantity. SLC price: approximately $2.20 in 5K quantity. Cost savings: approximately 48% per GB. For a 4GB storage system: MLC solution: approximately $4.60. SLC solution: approximately $8.80. Savings: $4.20 per system. In a product with 100,000 units annual volume: Annual savings: $420,000. Over 3-year product life: $1.26M savings. Considerations: MLC may need stronger ECC (additional controller cost). Shorter service life may affect warranty costs. Evaluate total cost of ownership, not just component cost.",
        "decisionGuide": "MLC provides significant cost savings for high-volume consumer products.",
        "keywords": ["cost savings", "MLC price", "cost comparison", "volume pricing"]
      },
      {
        "question": "What ECC strength is required for MLC NAND?",
        "answer": "MLC NAND requires stronger ECC than SLC due to higher bit error rates: Minimum: 24-bit ECC per 1KB for this generation MLC. Recommended: 40-bit ECC per 1KB for good reliability. Best practice: 72-bit ECC per 1KB for maximum data integrity. Comparison: SLC NAND: 4-8 bit ECC per 512 bytes sufficient. MLC NAND: 24-40 bit ECC per 1KB required. The stronger ECC requirement increases controller complexity and cost. Modern NAND controllers include hardware ECC engines supporting up to 72-bit BCH or LDPC. Ensure your controller supports adequate ECC strength before selecting MLC NAND.",
        "decisionGuide": "Use minimum 40-bit ECC per 1KB for MLC NAND. Verify controller ECC capability.",
        "keywords": ["ECC requirements", "MLC ECC", "error correction strength", "controller requirements"]
      },
      {
        "question": "What is the expected service life in consumer applications?",
        "answer": "MLC NAND service life in typical consumer applications: Set-top box: 100MB firmware + 50MB updates over product life. Total writes: approximately 150MB. 1GB NAND with 10K endurance: 10K x 1GB = 10TB total write capacity. Service life: 10TB / 150MB = 66,667 update cycles - essentially unlimited. Digital signage: 500MB content + 100MB daily updates. Daily cycles: 600MB / 1GB = 0.6. Service life: 10K / 0.6 = 16,667 days = 45 years. Gaming device: 2GB game saves + 50MB daily. Daily cycles: 2.05GB / 1GB = 2.05. Service life: 10K / 2.05 = 4,878 days = 13 years. Typical consumer product life: 3-5 years. MLC NAND is more than adequate for most consumer applications.",
        "decisionGuide": "MLC NAND provides adequate service life for typical 3-5 year consumer products.",
        "keywords": ["service life", "MLC endurance", "consumer product lifetime", "write cycles"]
      },
      {
        "question": "Can MLC NAND be used for industrial applications?",
        "answer": "MLC NAND is generally NOT recommended for industrial applications due to: 1) Limited endurance (10K vs 100K cycles) - insufficient for long service life. 2) Commercial temperature range only - not rated for industrial temperatures. 3) Shorter data retention (5 years vs 10 years). 4) Higher bit error rates requiring stronger ECC. 5) No industrial qualification or AEC-Q100. Exceptions where MLC might be acceptable: Very low-write applications (data logging <1MB/day). Short product lifecycle (<3 years). Controlled environment with moderate temperatures. Non-critical applications where occasional data loss is acceptable. For true industrial applications, always use SLC NAND with industrial temperature rating.",
        "decisionGuide": "Avoid MLC for industrial applications. Use SLC NAND for industrial reliability.",
        "keywords": ["industrial applications", "MLC limitations", "SLC recommendation", "temperature rating"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN35M08G.pdf" }
  }
];

nandFlashCategory.products.push(...additionalNandProducts);
console.log(`   NAND Flash 分类现在有 ${nandFlashCategory.products.length} 个产品`);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('\n文件已保存！');

// 验证
console.log('\n验证结果:');
products.categories.forEach(cat => {
  console.log(`   - ${cat.name}: ${cat.products.length} 个产品 ${cat.products.length >= 6 ? '✓' : '✗'}`);
});
