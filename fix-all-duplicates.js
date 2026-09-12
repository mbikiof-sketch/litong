const fs = require('fs');
const path = require('path');

const brand = 'unisemicon';
const dataDir = path.join(__dirname, 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('修复所有重复产品...\n');

// ==================== NOR Flash - 修复重复 ====================
console.log('1. NOR Flash 分类 - 修复重复...');
const norFlashCategory = products.categories.find(c => c.id === 'nor-flash');
// 保留唯一产品
const norUnique = [];
const norSeen = new Set();
norFlashCategory.products.forEach(p => {
  if (!norSeen.has(p.partNumber)) {
    norSeen.add(p.partNumber);
    norUnique.push(p);
  }
});
norFlashCategory.products = norUnique;
// 添加2个新产品
norFlashCategory.products.push(
  {
    "partNumber": "UN25N016",
    "name": "16Mb SPI NOR Flash Memory",
    "nameCn": "16Mb SPI NOR Flash Memory",
    "shortDescription": "16Mb entry-level SPI NOR Flash with 80MHz clock for simple bootloader and small firmware storage.",
    "description": "The UN25N016 is a 16Mb serial NOR Flash memory designed for simple bootloader and small firmware storage applications.",
    "descriptionParagraphs": [
      "The UN25N016 provides 16Mb (2MB) of non-volatile storage with SPI interface supporting up to 80MHz clock. It is the most cost-effective solution for simple bootloaders and minimal firmware requirements.",
      "The device features uniform 4KB sector erase, hardware and software write protection, and low-power modes. It is ideal for cost-sensitive applications with basic storage needs.",
      "Operating from 2.7V to 3.6V supply, the device supports industrial temperature range (-40C to +85C). Available in compact SOP-8 and DIP-8 packages for easy prototyping."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["NOR Flash", "SPI Flash", "16Mb", "entry level", "bootloader", "cost effective"],
    "specifications": {
      "Density": "16Mb (2MB)",
      "Interface": "SPI",
      "Clock Rate": "Up to 80MHz",
      "Read Speed": "Up to 10MB/s",
      "Supply Voltage": "2.7V to 3.6V",
      "Operating Temperature": "-40C to +85C",
      "Package": "SOP-8, DIP-8"
    },
    "applications": ["Simple bootloader", "Small firmware", "Configuration storage", "Basic IoT devices", "Legacy systems"],
    "features": ["16Mb density", "80MHz SPI", "Cost effective", "Low power", "Compact packages"],
    "stock": { "status": "in_stock", "quantity": 150000, "minOrderQty": 1000, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 1000, "price": 0.22 },
        { "minQty": 5000, "price": 0.18 },
        { "minQty": 10000, "price": 0.14 },
        { "minQty": 50000, "price": 0.11 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN25N032",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n032.html",
        "reason": "Higher density version for growth margin",
        "useCase": "Use when 2MB may be insufficient for future firmware updates",
        "specifications": { "Density": "32Mb (4MB)", "Interface": "SPI", "Clock Rate": "104MHz" },
        "comparison": "UN25N016=>UN25N032: Density: 32Mb > 16Mb (+100%), Interface: SPI = SPI (same), Clock Rate: 104MHz > 80MHz (+30%), Price: Approximately 40% higher"
      },
      {
        "partNumber": "UN25N064",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n064.html",
        "reason": "Standard density for most embedded applications",
        "useCase": "Use for typical embedded firmware with room for growth",
        "specifications": { "Density": "64Mb (8MB)", "Interface": "SPI", "Clock Rate": "104MHz" },
        "comparison": "UN25N016=>UN25N064: Density: 64Mb > 16Mb (+300%), Interface: SPI = SPI (same), Clock Rate: 104MHz > 80MHz (+30%), Price: Approximately 80% higher"
      }
    ],
    "companionParts": [
      { "partNumber": "UN32F051", "link": "/unisemicon/products/mcu/un32f051.html", "description": "Ultra-low-power ARM Cortex-M0 MCU", "category": "MCU" },
      { "partNumber": "UN25N016-EVB", "link": "#", "description": "Basic evaluation board", "category": "Evaluation Board" },
      { "partNumber": "SPI-Programmer-Basic", "link": "#", "description": "Basic SPI Flash programmer", "category": "Programming Tool" }
    ],
    "faeReview": {
      "rating": 4.4,
      "author": "Liu Ming",
      "title": "FAE - Cost-Sensitive Applications",
      "content": "The UN25N016 is the most economical NOR Flash option in the UNISemicon portfolio. At under $0.15 in volume, it is perfect for cost-sensitive applications requiring minimal storage. I have used this in simple sensor nodes, basic remote controls, and legacy system upgrades. The 2MB capacity handles most simple bootloaders and basic firmware images. The DIP-8 package option is particularly useful for prototyping and low-volume production. While the 80MHz clock is slower than higher-end options, it is adequate for simple boot applications. For projects where every penny counts and storage needs are minimal, the UN25N016 provides excellent value.",
      "highlight": "Most cost-effective NOR Flash for simple bootloader applications"
    },
    "faqs": [
      {
        "question": "Is 16Mb (2MB) sufficient for a modern bootloader?",
        "answer": "The UN25N016 with 16Mb (2MB) is sufficient for many bootloader applications: 1) Simple first-stage bootloader: 16-32KB. 2) Second-stage bootloader with drivers: 128-256KB. 3) Recovery firmware: 512KB-1MB. 4) Configuration data: 64-128KB. Total typical usage: 700KB-1.5MB with 500KB-1.3MB margin. 2MB accommodates: U-Boot bootloader (256-512KB). RT-Thread Nano (100KB). Application code (256-512KB). Configuration and logs (128KB). For Linux-based systems or complex bootloaders, consider 32Mb or 64Mb options.",
        "decisionGuide": "2MB is sufficient for simple bootloaders. Choose 32Mb+ for complex bootloaders or Linux.",
        "keywords": ["16Mb capacity", "2MB storage", "bootloader sizing", "memory requirements"]
      },
      {
        "question": "What is the cost advantage compared to higher density options?",
        "answer": "UN25N016 cost comparison: UN25N016 price: approximately $0.14 in 10K quantity. UN25N032 price: approximately $0.22 in 10K quantity. Cost savings: approximately 36% per device. For high-volume production (100K units): Annual savings: $8,000 vs UN25N032. Over 3-year product life: $24,000 savings. When to choose UN25N016: Cost is critical factor. Storage needs are minimal (<1.5MB). Performance requirements are modest. Legacy system compatibility needed. When to choose higher density: Future firmware growth expected. Performance is priority. Price difference is acceptable for headroom.",
        "decisionGuide": "Choose UN25N016 for maximum cost savings when storage needs are minimal.",
        "keywords": ["cost advantage", "price comparison", "cost savings", "budget design"]
      },
      {
        "question": "What packages are available for prototyping?",
        "answer": "UN25N016 package options: SOP-8: 150-mil body width. 1.27mm pitch. Standard surface-mount package. Good for production. DIP-8: 300-mil body width. 2.54mm pitch. Through-hole package. Ideal for prototyping. Easy hand soldering. Compatible with breadboards. Package comparison: SOP-8: Smaller, better for production. DIP-8: Easier for prototyping and rework. Both packages have identical electrical characteristics. The DIP-8 option is particularly valuable for: Prototype development. Low-volume production. Educational projects. Legacy system replacement.",
        "decisionGuide": "Use DIP-8 for prototyping, SOP-8 for production.",
        "keywords": ["package options", "DIP-8", "SOP-8", "prototyping", "through-hole"]
      },
      {
        "question": "What is the programming time for the full device?",
        "answer": "UN25N016 programming characteristics: Page program time: 0.5-3ms per 256-byte page. Pages per device: 8,192 (16Mb / 256 bytes per page). Sequential programming: 4-24 seconds for full device. Using continuous page program: 3-15 seconds for full device. Erase operations: 4KB sector erase: 50-200ms. 64KB block erase: 300-800ms. Full chip erase: 2-5 seconds. Production programming: Gang programmers can program multiple devices. Typical throughput: 100-200 devices/hour per programmer. In-system programming: Via MCU SPI interface. Typical time: 10-30 seconds for full device.",
        "decisionGuide": "Full device programming takes 3-15 seconds depending on method.",
        "keywords": ["programming time", "erase time", "production programming", "in-system programming"]
      },
      {
        "question": "Can this device be used for firmware updates in the field?",
        "answer": "UN25N016 field update capabilities: In-system programming: MCU can reprogram via SPI interface. Bootloader can update application firmware. Dual-bank option with external memory. Update methods: Full image replacement: Simple but requires sufficient downtime. Delta updates: Only changed sectors programmed. Reduces update time and wear. Rollback capability: Keep previous firmware version. Switch back if update fails. Considerations: 2MB capacity limits dual-bank storage. May need external staging area for updates. Erase cycles: 100K per sector sufficient for typical update frequency. For frequent updates (weekly): 100K cycles = 1,923 years lifetime.",
        "decisionGuide": "Suitable for field updates with proper bootloader design. Consider dual-bank needs.",
        "keywords": ["field update", "firmware update", "OTA", "in-system programming"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN25N016.pdf" }
  },
  {
    "partNumber": "UN25N512",
    "name": "512Mb SPI NOR Flash Memory",
    "nameCn": "512Mb SPI NOR Flash Memory",
    "shortDescription": "512Mb ultra-high-density SPI NOR Flash with 133MHz clock for large Linux systems and complex embedded applications.",
    "description": "The UN25N512 is a 512Mb serial NOR Flash memory designed for ultra-high-density code storage and complex embedded systems.",
    "descriptionParagraphs": [
      "The UN25N512 provides 512Mb (64MB) of non-volatile storage with advanced SPI interface supporting up to 133MHz clock and quad I/O operations. It is ideal for large Linux-based systems and complex firmware applications.",
      "The device features uniform 4KB sector erase, 32KB/64KB block erase, and fast page program capabilities. Advanced security features include hardware write protection, software block protection, and OTP security registers.",
      "Low-power operation modes including deep power-down make it suitable for various applications. The device operates from 2.7V to 3.6V supply and supports industrial (-40C to +85C) and automotive (-40C to +125C) temperature grades."
    ],
    "status": "active",
    "isPopular": true,
    "keywords": ["NOR Flash", "SPI Flash", "512Mb", "ultra high density", "Linux storage", "64MB"],
    "specifications": {
      "Density": "512Mb (64MB)",
      "Interface": "SPI (Single/Dual/Quad)",
      "Clock Rate": "Up to 133MHz",
      "Read Speed": "Up to 66MB/s (Quad mode)",
      "Supply Voltage": "2.7V to 3.6V",
      "Operating Temperature": "-40C to +85C (Industrial), -40C to +125C (Automotive)",
      "Package": "SOP-16, WSON-8, BGA-24"
    },
    "applications": ["Large Linux systems", "Complex firmware", "Industrial gateways", "Automotive infotainment", "Network equipment"],
    "features": ["512Mb ultra-high density", "133MHz SPI", "Quad I/O", "Hardware protection", "Automotive grade"],
    "stock": { "status": "in_stock", "quantity": 8000, "minOrderQty": 100, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 100, "price": 3.5 },
        { "minQty": 500, "price": 2.8 },
        { "minQty": 2000, "price": 2.25 },
        { "minQty": 10000, "price": 1.85 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN25N256",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n256.html",
        "reason": "Lower density version for cost-sensitive large storage applications",
        "useCase": "Use when 32MB is sufficient and cost is priority",
        "specifications": { "Density": "256Mb (32MB)", "Interface": "SPI", "Clock Rate": "133MHz" },
        "comparison": "UN25N512=>UN25N256: Density: 256Mb < 512Mb (-50%), Interface: SPI = SPI (same), Clock Rate: 133MHz = 133MHz (same), Price: Approximately 50% lower"
      },
      {
        "partNumber": "UN34N32G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n32g.html",
        "reason": "NAND Flash alternative for data storage applications",
        "useCase": "Use NAND when primarily storing data rather than executing code",
        "specifications": { "Density": "32Gb (4GB)", "Interface": "ONFI", "Cell Type": "SLC" },
        "comparison": "UN25N512=>UN34N32G: Technology: NAND vs NOR, Density: 4GB > 64MB (+6300%), Interface: ONFI vs SPI, Use Case: Data storage vs Code execution"
      }
    ],
    "companionParts": [
      { "partNumber": "UN32F407", "link": "/unisemicon/products/mcu/un32f407.html", "description": "High-performance ARM Cortex-M4 MCU", "category": "MCU" },
      { "partNumber": "UN25N512-EVB", "link": "#", "description": "High-density evaluation board", "category": "Evaluation Board" },
      { "partNumber": "SPI-Adapter-Pro", "link": "#", "description": "Professional SPI programming adapter", "category": "Programming Tool" }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - High-Density Memory",
      "content": "The UN25N512 is the flagship NOR Flash in UNISemicon's portfolio, offering an impressive 64MB of code storage. This capacity is sufficient for complete Linux embedded systems with file system, multiple application components, and over-the-air update storage. I have successfully deployed this in industrial IoT gateways, automotive infotainment systems, and complex network equipment. The 133MHz quad SPI interface delivers excellent read performance - sustained 60+ MB/s throughput enables fast boot times even with large 20MB+ firmware images. The automotive-grade option (-40C to +125C) makes it suitable for under-hood applications. For applications requiring maximum NOR Flash capacity, the UN25N512 is the ultimate solution.",
      "highlight": "Ultra-high-density 512Mb NOR Flash for large Linux systems and complex applications"
    },
    "faqs": [
      {
        "question": "What can be stored in 512Mb (64MB) of NOR Flash?",
        "answer": "The UN25N512 with 512Mb (64MB) can store: 1) Complete Linux embedded system: Linux kernel (3-5MB). Root file system (10-15MB). Application packages (5-10MB). Configuration files (1-2MB). 2) Dual-bank firmware for updates: Active firmware (15MB). Backup firmware (15MB). 3) Additional storage: Bootloader with recovery (2MB). OTA update staging area (10MB). User data and logs (5MB). Total usable: approximately 55-60MB after file system overhead. This capacity supports: Full Linux distributions (Buildroot, Yocto). Complex industrial applications. Multi-component firmware systems. Robust OTA update capability.",
        "decisionGuide": "64MB supports complete Linux systems with file system and applications.",
        "keywords": ["512Mb capacity", "64MB storage", "Linux system", "large firmware"]
      },
      {
        "question": "How long does it take to boot a Linux system from this device?",
        "answer": "Linux boot time from UN25N512: Typical Linux system: Kernel: 5MB. Root FS: 12MB. Total: 17MB to load. Boot time calculation: At 60MB/s quad SPI: 17MB / 60MB/s = 283ms read time. Add decompression: 100-200ms for typical kernel. Add initialization: 500ms-1s for drivers and services. Total boot time: 1-2 seconds to application start. Optimization options: Use compressed kernel (faster load). Optimize init sequence. Use initramfs for critical services. Parallel device initialization. Comparison: eMMC boot: 0.5-1s (faster but more complex). NAND boot: 2-4s (slower due to ECC). The NOR Flash boot is fast and reliable.",
        "decisionGuide": "1-2 second Linux boot time achievable with optimization.",
        "keywords": ["boot time", "Linux boot", "startup time", "system initialization"]
      },
      {
        "question": "Is this device suitable for automotive applications?",
        "answer": "UN25N512 automotive suitability: AEC-Q100 qualification: Available for automotive grade version. Temperature range: -40C to +125C (Grade 1). Meets automotive reliability requirements. Automotive applications: Infotainment systems. Instrument clusters. ADAS processing units. Gateway modules. Body control modules. Benefits for automotive: Fast boot time for safety-critical systems. Reliable code storage with 20-year retention. Wide temperature operation. High endurance for firmware updates. Considerations: Higher cost than industrial grade. Longer lead times for automotive qualification. Requires AEC-Q100 documentation. The automotive grade version is specifically designed and tested for vehicle applications.",
        "decisionGuide": "Automotive grade available with AEC-Q100 qualification for vehicle applications.",
        "keywords": ["automotive", "AEC-Q100", "Grade 1", "infotainment", "ADAS"]
      },
      {
        "question": "What is the full device programming time?",
        "answer": "UN25N512 programming time: Page program time: 0.5-3ms per 256-byte page. Total pages: 262,144 (512Mb / 256 bytes). Sequential programming: 2-13 minutes for full device. Using continuous page program: 1.5-8 minutes for full device. Production programming: Gang programmers: 4-8 devices simultaneously. Throughput: 20-40 devices/hour. In-system programming: Via MCU QSPI interface. Typical time: 5-10 minutes for full device. Erase operations: 4KB sector erase: 50-200ms. 64KB block erase: 300-800ms. Full chip erase: 30-60 seconds. For production: Use pre-programmed devices from factory. In-field updates: Program only changed sectors. Typical update: 10-30 seconds for partial updates.",
        "decisionGuide": "Full programming takes 1.5-8 minutes. Use factory programming for production.",
        "keywords": ["programming time", "production programming", "erase time", "gang programming"]
      },
      {
        "question": "How does this compare to using eMMC for storage?",
        "answer": "UN25N512 NOR vs eMMC comparison: NOR Flash advantages: Simple SPI interface. Direct code execution (XIP). Deterministic read latency. No wear leveling needed. Lower power for read operations. Easier to debug and verify. eMMC advantages: Much higher capacity (4GB+). Faster write performance. Lower cost per GB. Standard interface across vendors. Built-in management. When to choose NOR: Code execution required (XIP). Simple interface preferred. Deterministic timing needed. Moderate capacity sufficient. When to choose eMMC: Large data storage needed. Cost per GB is priority. Write performance critical. Standard interface required. Hybrid approach: NOR for boot code (XIP). eMMC for data storage. Best of both worlds.",
        "decisionGuide": "Use NOR for code execution and simple interface. Use eMMC for large data storage.",
        "keywords": ["NOR vs eMMC", "storage comparison", "XIP", "code execution"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN25N512.pdf" }
  }
);
console.log(`   NOR Flash: ${norFlashCategory.products.length} 个产品`);

// ==================== NAND Flash - 修复重复 ====================
console.log('2. NAND Flash 分类 - 修复重复...');
const nandFlashCategory = products.categories.find(c => c.id === 'nand-flash');
// 保留唯一产品
const nandUnique = [];
const nandSeen = new Set();
nandFlashCategory.products.forEach(p => {
  if (!nandSeen.has(p.partNumber)) {
    nandSeen.add(p.partNumber);
    nandUnique.push(p);
  }
});
nandFlashCategory.products = nandUnique;
// 添加1个新产品替换重复的UN34N04G
nandFlashCategory.products.push(
  {
    "partNumber": "UN34N32G",
    "name": "32Gb SLC NAND Flash Memory",
    "nameCn": "32Gb SLC NAND Flash Memory",
    "shortDescription": "Ultra-high-capacity 32Gb SLC NAND Flash for enterprise storage and high-end industrial applications requiring maximum reliability.",
    "description": "The UN34N32G is a 32Gb SLC NAND Flash memory designed for high-end industrial and enterprise storage applications.",
    "descriptionParagraphs": [
      "The UN34N32G provides 32Gb (4GB) of SLC NAND storage with 100,000 program/erase cycle endurance. This ultra-high capacity enables large-scale industrial SSDs and enterprise-grade storage systems.",
      "The ONFI 4.0 interface with toggle DDR 2.0 provides maximum performance. Industrial temperature range (-40C to +85C) and enhanced reliability features meet demanding enterprise requirements.",
      "Advanced features include multi-plane operation, cache programming, and enhanced ECC support. Available in BGA-107 package for high-density integration."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["SLC NAND", "32Gb", "ultra high capacity", "enterprise", "4GB", "industrial SSD"],
    "specifications": {
      "Density": "32Gb (4GB)",
      "Cell Type": "SLC",
      "Interface": "ONFI 4.0 (Toggle DDR 2.0)",
      "Page Size": "16KB + 1KB spare",
      "Block Size": "4MB + 256KB spare",
      "Endurance": "100,000 P/E cycles",
      "Data Retention": "10 years",
      "Operating Temperature": "-40C to +85C",
      "Package": "BGA-107"
    },
    "applications": ["Enterprise industrial SSD", "High-end data loggers", "Medical imaging", "Aerospace systems", "Military equipment"],
    "features": ["32Gb ultra-high density", "SLC reliability", "100K endurance", "ONFI 4.0", "Toggle DDR 2.0"],
    "stock": { "status": "in_stock", "quantity": 5000, "minOrderQty": 50, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 50, "price": 12.5 },
        { "minQty": 250, "price": 9.95 },
        { "minQty": 1000, "price": 7.85 },
        { "minQty": 5000, "price": 6.55 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN34N16G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n16g.html",
        "reason": "Lower density alternative for cost optimization",
        "useCase": "Use when 2GB capacity is sufficient and cost is priority",
        "specifications": { "Density": "16Gb (2GB)", "Cell Type": "SLC", "Interface": "ONFI 3.2" },
        "comparison": "UN34N32G=>UN34N16G: Density: 16Gb < 32Gb (-50%), Cell Type: SLC = SLC (same), Interface: ONFI 3.2 < ONFI 4.0 (slower), Price: Approximately 45% lower"
      },
      {
        "partNumber": "UN34N08G",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nand-flash/un34n08g.html",
        "reason": "Standard density for mainstream applications",
        "useCase": "Use for standard industrial applications with 1GB storage needs",
        "specifications": { "Density": "8Gb (1GB)", "Cell Type": "SLC", "Interface": "ONFI 3.2" },
        "comparison": "UN34N32G=>UN34N08G: Density: 8Gb < 32Gb (-75%), Cell Type: SLC = SLC (same), Price: Approximately 70% lower, Package: TSOP-48 available"
      }
    ],
    "companionParts": [
      { "partNumber": "Enterprise-SSD-Controller", "link": "#", "description": "Enterprise-grade SSD controller with 72-bit LDPC", "category": "Controller" },
      { "partNumber": "UN25N256", "link": "/unisemicon/products/nor-flash/un25n256.html", "description": "256Mb NOR Flash for boot and firmware", "category": "NOR Flash" },
      { "partNumber": "UN34N32G-Enterprise-Kit", "link": "#", "description": "Enterprise SSD reference design", "category": "Reference Design" }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - Enterprise Storage",
      "content": "The UN34N32G represents the pinnacle of UNISemicon's SLC NAND portfolio. With 4GB raw capacity per device, it enables high-capacity industrial SSDs with minimal component count. I have used this in enterprise-grade industrial SSDs, high-speed data acquisition systems, and medical imaging storage. The ONFI 4.0 interface with toggle DDR 2.0 delivers exceptional performance - sustained 80+ MB/s per device. The large 16KB page size optimizes for modern file systems and large data transfers. For high-end industrial SSD applications, this device reduces component count by 50% compared to using 16Gb devices. The BGA-107 package enables professional SSD module designs. While the price is higher, the total system cost is competitive when considering reduced component count and PCB area.",
      "highlight": "Ultra-high-capacity 32Gb SLC NAND for enterprise industrial storage"
    },
    "faqs": [
      {
        "question": "What SSD capacities can be built with the UN34N32G?",
        "answer": "The UN34N32G enables high-capacity industrial SSD configurations: Single device: 4GB raw (approximately 3.6GB usable). 4-device array: 16GB raw (approximately 14.4GB usable). 8-device array: 32GB raw (approximately 28.8GB usable) - high-capacity industrial SSD. 16-device array: 64GB raw (approximately 57.6GB usable) - enterprise-grade storage. Performance scaling with device count: 4-device array: 250-320 MB/s sequential read. 8-device array: 500-600 MB/s sequential read. 16-device array: 1+ GB/s sequential read. The high per-device capacity reduces component count, PCB complexity, and power consumption compared to lower-density alternatives.",
        "decisionGuide": "Use UN34N32G for high-capacity SSDs to minimize component count and maximize density.",
        "keywords": ["32Gb capacity", "4GB per device", "high capacity SSD", "enterprise storage"]
      },
      {
        "question": "What is the performance advantage of ONFI 4.0 and toggle DDR 2.0?",
        "answer": "ONFI 4.0 with toggle DDR 2.0 performance benefits: Interface speed: Up to 400MB/s theoretical (vs 200MB/s for ONFI 3.2). Actual sustained throughput: 80-100 MB/s per device. Comparison with previous generations: ONFI 2.3 async: 20-30 MB/s. ONFI 3.2 toggle DDR: 40-60 MB/s. ONFI 4.0 toggle DDR 2.0: 80-100 MB/s. Additional ONFI 4.0 features: Enhanced multi-plane operation (up to 4 planes). Improved cache programming. Better power management. Advanced status reporting. For high-performance industrial SSDs, ONFI 4.0 provides significant advantages in throughput and latency.",
        "decisionGuide": "Use ONFI 4.0 for maximum performance. Ensure controller supports ONFI 4.0 features.",
        "keywords": ["ONFI 4.0", "toggle DDR 2.0", "interface performance", "high speed NAND"]
      },
      {
        "question": "What are the benefits of the larger 16KB page size?",
        "answer": "16KB page size advantages and considerations: Advantages: Higher sequential throughput - more data per program operation. Reduced command overhead for large transfers. Better write amplification for large files (video, images). Optimized for modern file systems with large block sizes. Considerations: Higher write amplification for small random writes. Less efficient for small file systems. May require write caching for small random I/O. Best suited for: Video recording and streaming. Large file storage. Database applications. High-speed data logging. Sequential access patterns. The 16KB page size is optimized for enterprise and high-performance applications with primarily sequential or large-block access patterns.",
        "decisionGuide": "16KB pages optimize sequential performance. Use write aggregation for small random writes.",
        "keywords": ["16KB page", "page size", "sequential performance", "write amplification"]
      },
      {
        "question": "What thermal management is required for this high-density device?",
        "answer": "UN34N32G thermal considerations: Power consumption: Active: 120-150mA at 3.3V = 0.4-0.5W. Standby: 15-25mA = 0.05-0.08W. Higher power density than lower-capacity devices. Thermal management recommendations: Use BGA package with good PCB copper area for heat spreading. Implement thermal vias under the BGA pad. Consider heatsink for sustained high-performance operation. Ensure adequate airflow in system enclosure. Monitor junction temperature via controller. Maximum junction temperature: +85C for industrial grade. Recommended operating: below +75C for best reliability. For high-performance SSDs with multiple devices, thermal design is critical for sustained performance.",
        "decisionGuide": "Design adequate thermal management for high-density NAND. Monitor operating temperature.",
        "keywords": ["thermal management", "power consumption", "heat dissipation", "BGA thermal design"]
      },
      {
        "question": "What is the expected service life for enterprise applications?",
        "answer": "Enterprise service life calculation: Example: 32GB SSD (8x UN34N32G), 100K endurance. Total write capacity: 8 devices x 4GB x 100K = 3.2 PB. Enterprise workload: 500GB writes per day. Daily cycles: 500GB / 32GB = 15.6. Service life: 100K / 15.6 = 6,410 days = 17.5 years theoretical. With write amplification (2x typical for enterprise): 17.5 years / 2 = 8.75 years practical. For heavy enterprise workload (2TB/day): 3.2 PB / 2TB/day = 1,600 days = 4.4 years. Still adequate for typical enterprise equipment refresh cycle (3-5 years). The 32Gb capacity provides excellent endurance for enterprise applications with high write volumes.",
        "decisionGuide": "Service life is excellent for typical enterprise applications. Calculate based on your write workload.",
        "keywords": ["enterprise endurance", "service life", "write workload", "32Gb capacity"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN34N32G.pdf" }
  }
);
console.log(`   NAND Flash: ${nandFlashCategory.products.length} 个产品`);

// ==================== FPGA - 修复重复 ====================
console.log('3. FPGA & CPLD 分类 - 修复重复...');
const fpgaCategory = products.categories.find(c => c.id === 'fpga');
// 保留唯一产品
const fpgaUnique = [];
const fpgaSeen = new Set();
fpgaCategory.products.forEach(p => {
  if (!fpgaSeen.has(p.partNumber)) {
    fpgaSeen.add(p.partNumber);
    fpgaUnique.push(p);
  }
});
fpgaCategory.products = fpgaUnique;
// 添加1个新产品替换重复的UN5F200
fpgaCategory.products.push(
  {
    "partNumber": "UN6C128",
    "name": "128 Macrocell CPLD",
    "nameCn": "128 Macrocell CPLD",
    "shortDescription": "Compact flash-based CPLD with 128 macrocells for simple glue logic and small control applications.",
    "description": "The UN6C128 is a compact flash-based CPLD with 128 macrocells designed for simple glue logic and small control applications.",
    "descriptionParagraphs": [
      "The UN6C128 provides 128 macrocells with 80 user I/Os. The flash-based architecture provides instant-on capability and non-volatile configuration storage.",
      "The device is ideal for simple glue logic, basic bus interfacing, and small control functions. It offers a cost-effective alternative to discrete logic ICs.",
      "No external configuration memory is required. Available in small TQFP-100 package for space-constrained designs."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["CPLD", "128 macrocells", "compact", "glue logic", "simple control"],
    "specifications": {
      "Logic Capacity": "128 macrocells",
      "User I/Os": "80",
      "Propagation Delay": "6ns typical",
      "Standby Power": "40uA typical",
      "Operating Voltage": "1.8V to 3.3V",
      "Configuration": "Internal Flash (non-volatile)",
      "Package": "TQFP-100, QFN-80"
    },
    "applications": ["Simple glue logic", "Basic bus interfacing", "Reset generation", "Clock division", "Small control"],
    "features": ["128 macrocells", "Instant-on", "Non-volatile", "Ultra low power", "6ns delay", "Small package"],
    "stock": { "status": "in_stock", "quantity": 35000, "minOrderQty": 200, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 200, "price": 1.85 },
        { "minQty": 1000, "price": 1.48 },
        { "minQty": 5000, "price": 1.18 },
        { "minQty": 20000, "price": 0.95 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN6C256",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un6c256.html",
        "reason": "Higher capacity CPLD for more complex logic",
        "useCase": "Use when 128 macrocells is insufficient",
        "specifications": { "Logic Capacity": "256 macrocells", "User I/Os": "144", "Propagation Delay": "5ns" },
        "comparison": "UN6C128=>UN6C256: Macrocells: 256 > 128 (+100%), I/Os: 144 > 80 (+80%), Delay: 5ns < 6ns (faster), Price: Approximately 45% higher"
      },
      {
        "partNumber": "UN5F50",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un5f50.html",
        "reason": "FPGA alternative for more flexibility",
        "useCase": "Use FPGA when more logic or reprogrammability is needed",
        "specifications": { "Logic Capacity": "5K LUT4", "Type": "FPGA", "Power": "Higher" },
        "comparison": "UN6C128=>UN5F50: Type: FPGA vs CPLD, Capacity: Much higher vs Lower, Power: Higher vs Lower, Instant-on: No vs Yes"
      }
    ],
    "companionParts": [
      { "partNumber": "JTAG-Programmer", "link": "#", "description": "CPLD programming cable", "category": "Programming Tool" },
      { "partNumber": "UN6C128-EVB", "link": "#", "description": "Compact CPLD evaluation board", "category": "Evaluation Board" },
      { "partNumber": "Logic-Analyzer", "link": "#", "description": "Basic logic analyzer for debugging", "category": "Debug Tool" }
    ],
    "faeReview": {
      "rating": 4.5,
      "author": "Chen Min",
      "title": "FAE - Small Logic Applications",
      "content": "The UN6C128 is an excellent entry-level CPLD for simple logic replacement. At under $1.20 in volume, it often costs less than the multiple discrete logic ICs it replaces. I have used this for: simple address decoding, LED control, basic power sequencing, and reset generation. The 128 macrocells is sufficient for most small logic requirements - typically replacing 4-8 discrete logic packages. The instant-on feature is valuable for power sequencing applications. The QFN-80 package (9x9mm) is very compact. The ultra-low standby power (40uA) makes it suitable for battery-powered devices. For simple logic that would otherwise use 74-series ICs or small discrete logic, the UN6C128 provides integration, flexibility, and often lower total cost.",
      "highlight": "Cost-effective 128 macrocell CPLD for simple glue logic applications"
    },
    "faqs": [
      {
        "question": "What simple logic functions can 128 macrocells implement?",
        "answer": "128 macrocell typical applications: 1) Address decoding: 4-8 chip select signals. 2) Simple bus interface: Basic protocol conversion. 3) LED control: LED drivers and blinking patterns. 4) Reset logic: Power-on reset, reset distribution. 5) Clock division: Multiple clock frequencies from single source. 6) Simple state machines: Up to 8-16 states. 7) Basic arithmetic: Small counters, adders. Typical capacity: 4-8 simple state machines. 10-16 combinational logic functions. Multiple frequency dividers. Simple arbitration logic. The 128 macrocells is perfect for replacing small logic ICs and discrete gates.",
        "decisionGuide": "128 macrocells handles simple glue logic. Use 256 macrocells for more complex requirements.",
        "keywords": ["128 macrocells", "simple logic", "glue logic", "small CPLD"]
      },
      {
        "question": "How does this compare to using discrete logic ICs?",
        "answer": "CPLD vs discrete logic comparison: Cost: CPLD: $1.18 @ 5K. 74HC series ICs: $0.15-0.30 each. 4-8 ICs often cost more than CPLD. Board space: CPLD QFN-80: 81mm². 8 SOIC ICs: approximately 200mm². CPLD saves 60% board area. Power: CPLD standby: 40uA. 8 CMOS ICs: 80-160uA typical. CPLD uses less power. Flexibility: CPLD: Reprogrammable, easy design changes. Discrete: Fixed function, board changes required. Reliability: CPLD: Single device, fewer solder joints. Discrete: Multiple devices, more failure points. Design time: CPLD: Software design, simulation. Discrete: Schematic entry, more complex. For most small logic applications, CPLD offers advantages in cost, space, and flexibility.",
        "decisionGuide": "CPLD often provides better value than discrete logic for 4+ logic functions.",
        "keywords": ["CPLD vs discrete", "logic ICs", "cost comparison", "board space"]
      },
      {
        "question": "What is the programming and configuration process?",
        "answer": "UN6C128 programming process: Development: Design entry in UniLogic software. Compile and fit design to device. Simulate and verify functionality. Programming: Connect JTAG programmer to device. Download configuration via JTAG. Configuration stored in internal flash. Device is immediately active. In-system programming: Can reprogram in circuit. No device removal required. Configuration retained in flash. No external memory needed. Programming time: Typically 5-10 seconds. One-time programming for production. Field updates possible if needed. The flash-based configuration eliminates external memory and enables instant-on operation.",
        "decisionGuide": "Simple JTAG programming process. Configuration stored internally in flash memory.",
        "keywords": ["programming", "configuration", "JTAG", "flash-based", "in-system programming"]
      },
      {
        "question": "What packages are available for space-constrained designs?",
        "answer": "UN6C128 package options: QFN-80: 9mm x 9mm x 0.9mm. 0.4mm pitch. Exposed pad for thermal. Smallest option. TQFP-100: 14mm x 14mm x 1.4mm. 0.5mm pitch. Easier for prototyping. Package comparison: QFN-80: 81mm² PCB area. TQFP-100: 196mm² PCB area. QFN saves 59% board space. QFN considerations: Requires careful PCB layout. X-ray inspection recommended. Good for high-volume production. TQFP advantages: Easier hand soldering. Visible leads for inspection. Better for prototypes and low volume. Both packages support all 80 I/Os and full functionality.",
        "decisionGuide": "Use QFN-80 for minimum board space. Use TQFP-100 for easier prototyping.",
        "keywords": ["package options", "QFN-80", "TQFP-100", "board space", "small package"]
      },
      {
        "question": "Is the CPLD suitable for battery-powered applications?",
        "answer": "UN6C128 for battery applications: Power consumption: Standby: 40uA typical. Active: 1-3mA (depends on switching). Battery life calculation: 1000mAh coin cell. Standby only: 1000mAh / 0.04mA = 25,000 hours = 2.9 years. With 10% active: Approximately 2.5 years. Comparison with alternatives: MCU sleep: 1-10uA (lower). FPGA static: 10-50mA (much higher). Discrete CMOS: 10-20uA per IC. The CPLD is suitable for: Always-on monitoring. Power sequencing. Low-frequency control. Battery life of 1-3 years typical. For longer battery life: Consider MCU with sleep modes. Use CPLD only for functions requiring instant-on. Power gate the CPLD when not needed.",
        "decisionGuide": "Suitable for 1-3 year battery life applications. Consider MCU for longer battery life.",
        "keywords": ["battery power", "low power", "CPLD power", "battery life"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN6C128.pdf" }
  }
);
console.log(`   FPGA & CPLD: ${fpgaCategory.products.length} 个产品`);

// ==================== MCU - 修复重复 ====================
console.log('4. MCU 分类 - 修复重复...');
const mcuCategory = products.categories.find(c => c.id === 'mcu');
// 保留唯一产品
const mcuUnique = [];
const mcuSeen = new Set();
mcuCategory.products.forEach(p => {
  if (!mcuSeen.has(p.partNumber)) {
    mcuSeen.add(p.partNumber);
    mcuUnique.push(p);
  }
});
mcuCategory.products = mcuUnique;
// 添加2个新产品替换重复的UN32F051和UN32F407
mcuCategory.products.push(
  {
    "partNumber": "UN32F767",
    "name": "ARM Cortex-M7 MCU with 2MB Flash",
    "nameCn": "ARM Cortex-M7 MCU with 2MB Flash",
    "shortDescription": "High-performance ARM Cortex-M7 MCU with double-precision FPU, 2MB Flash, 512KB RAM for advanced DSP and real-time applications.",
    "description": "The UN32F767 is a high-performance 32-bit ARM Cortex-M7 microcontroller designed for demanding applications requiring maximum processing power.",
    "descriptionParagraphs": [
      "The UN32F767 features a 216MHz ARM Cortex-M7 core with double-precision FPU and DSP instructions. With 2MB Flash memory and 512KB SRAM, it handles the most complex algorithms and large data sets.",
      "The comprehensive peripheral set includes Ethernet MAC, USB OTG HS, multiple UARTs/SPI/I2C, CAN, SDIO, and advanced timers. The device supports external memory interface for SDRAM and NOR Flash expansion.",
      "Operating from 1.8V to 3.6V supply with industrial temperature range (-40C to +85C). Available in LQFP-144 and BGA-176 packages."
    ],
    "status": "active",
    "isPopular": true,
    "keywords": ["MCU", "ARM Cortex-M7", "2MB Flash", "FPU", "DSP", "high performance"],
    "specifications": {
      "Core": "ARM Cortex-M7 with DP FPU",
      "Flash": "2MB",
      "RAM": "512KB",
      "Speed": "216MHz",
      "GPIO": "140",
      "UART": "8",
      "SPI": "6",
      "I2C": "4",
      "USB": "USB 2.0 HS OTG",
      "CAN": "3",
      "ADC": "12-bit, 24 channels",
      "Package": "LQFP-144, BGA-176"
    },
    "applications": ["Advanced motor control", "Digital power supplies", "High-end audio", "Industrial automation", "Medical devices"],
    "features": ["Cortex-M7", "2MB Flash", "DP FPU", "DSP", "216MHz", "Ethernet", "USB HS"],
    "stock": { "status": "in_stock", "quantity": 12000, "minOrderQty": 25, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 25, "price": 8.5 },
        { "minQty": 100, "price": 6.8 },
        { "minQty": 500, "price": 5.4 },
        { "minQty": 2000, "price": 4.25 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN32F407",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f407.html",
        "reason": "Lower cost M4 version for less demanding applications",
        "useCase": "Use when M4 performance is sufficient and cost is priority",
        "specifications": { "Core": "ARM Cortex-M4", "Flash": "1MB", "RAM": "192KB", "Speed": "168MHz" },
        "comparison": "UN32F767=>UN32F407: Core: M4 < M7 (lower performance), Flash: 1MB < 2MB (-50%), RAM: 192KB < 512KB (-62%), Price: Approximately 50% lower"
      },
      {
        "partNumber": "UN32F103",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f103.html",
        "reason": "Entry-level M3 version for cost-sensitive applications",
        "useCase": "Use for basic applications with modest requirements",
        "specifications": { "Core": "ARM Cortex-M3", "Flash": "128KB", "RAM": "20KB", "Speed": "72MHz" },
        "comparison": "UN32F767=>UN32F103: Core: M3 < M7 (much lower performance), Flash: 128KB < 2MB (-94%), RAM: 20KB < 512KB (-96%), Price: Approximately 80% lower"
      }
    ],
    "companionParts": [
      { "partNumber": "UN25N512", "link": "/unisemicon/products/nor-flash/un25n512.html", "description": "512Mb NOR Flash for external storage", "category": "NOR Flash" },
      { "partNumber": "UN32F767-EVB", "link": "#", "description": "High-performance evaluation board with Ethernet", "category": "Evaluation Board" },
      { "partNumber": "ST-Link-V3", "link": "#", "description": "High-speed debug/programming tool", "category": "Programming Tool" }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - High-Performance MCU",
      "content": "The UN32F767 is the flagship MCU in UNISemicon's portfolio, featuring the powerful Cortex-M7 core at 216MHz. The double-precision FPU and comprehensive DSP instructions make it ideal for complex control algorithms and signal processing. I have used this in advanced motor control with FOC, digital power supplies with complex control loops, and high-end audio processing. The 2MB Flash accommodates very large applications with extensive data logging capability. The 512KB SRAM enables large buffers and complex data structures for real-time processing. The high-speed USB and Ethernet interfaces support demanding connectivity requirements. While the price is higher than M4 options, the performance advantage is significant for compute-intensive applications. For projects requiring maximum MCU performance, the UN32F767 delivers exceptional capability.",
      "highlight": "Flagship Cortex-M7 MCU with 2MB Flash for demanding real-time applications"
    },
    "faqs": [
      {
        "question": "What is the performance advantage of Cortex-M7 over M4?",
        "answer": "Cortex-M7 vs M4 performance comparison: CoreMark score: M7: 2000+ at 216MHz. M4: 600+ at 168MHz. Approximately 2.5x better performance per MHz. DSP performance: M7: Double-precision FPU. M4: Single-precision FPU only. M7: Faster DSP instructions. M7: Better branch prediction. Memory performance: M7: Dual-issue instruction fetch. M7: Data and instruction cache support. M7: Tightly-coupled memory (TCM). Applications benefiting from M7: Advanced motor control with complex observers. Digital power with multi-loop control. High-end audio processing. Real-time analytics. Machine learning inference. When to choose M7: Maximum performance required. Complex algorithms. Heavy DSP workload. When to choose M4: Cost is priority. Performance requirements moderate. Power consumption critical.",
        "decisionGuide": "M7 provides 2.5x+ performance over M4. Choose M7 for compute-intensive applications.",
        "keywords": ["Cortex-M7", "Cortex-M4", "performance comparison", "DSP", "FPU"]
      },
      {
        "question": "What advanced motor control applications can this MCU handle?",
        "answer": "UN32F767 motor control capabilities: Advanced algorithms: Field Oriented Control (FOC) with full observers. Sensorless control with extended Kalman filters. Model predictive control (MPC). Multi-axis synchronized control. Adaptive parameter estimation. Hardware features: Advanced timers with 2ns resolution. High-resolution PWM (up to 168MHz). Multiple ADCs with 3MSPS each. Encoder interfaces with index pulse. Hall sensor inputs. Performance: 216MHz enables very fast control loops (50kHz+). Double-precision FPU for accurate calculations. DSP instructions for fast Clarke/Park transforms. Parallel processing of multiple axes. Applications: Servo drives with high dynamics. CNC machine tools. Robotics with multiple joints. Electric vehicle powertrains. High-speed spindles. The M7 performance enables advanced control strategies not possible with slower MCUs.",
        "decisionGuide": "M7 enables advanced motor control with complex observers and high loop rates.",
        "keywords": ["motor control", "FOC", "sensorless", "servo", "CNC"]
      },
      {
        "question": "How does the double-precision FPU benefit applications?",
        "answer": "Double-precision FPU advantages: Precision: 64-bit floating point vs 32-bit. 15-17 decimal digits vs 7-8 digits. Better for numerical stability. Applications benefiting: Matrix operations and linear algebra. Complex control algorithms. Kalman filters and state estimation. Physics simulations. Financial calculations. Comparison with single-precision: Double-precision: Slower but more accurate. Single-precision: Faster but less accurate. M7 FPU performance: Double-precision: 2 cycles per operation. Single-precision: 1 cycle per operation. DSP instructions: Single-cycle MAC. Recommendation: Use double-precision for: Critical calculations. Accumulating operations. Matrix inversions. Use single-precision for: Real-time DSP. When speed is critical. Non-critical calculations.",
        "decisionGuide": "DP FPU provides superior precision for critical calculations. Use SP for maximum speed.",
        "keywords": ["double precision", "FPU", "floating point", "numerical accuracy"]
      },
      {
        "question": "What is the maximum external memory capacity?",
        "answer": "UN32F767 external memory capabilities: FMC (Flexible Memory Controller): SDRAM: Up to 32-bit data bus. Up to 512MB address space. 100MHz maximum clock. NOR Flash: Up to 32-bit data bus. Up to 512MB address space. PSRAM: Up to 32-bit data bus. NAND Flash: Up to 8-bit data bus. With ECC support. Typical configurations: 64MB SDRAM (32-bit) for large buffers. 128MB NOR Flash for code expansion. External SRAM for lookup tables. Maximum practical: 512MB total external memory. Limited by address space. Limited by PCB complexity. Use cases: Large frame buffers for displays. Extensive lookup tables. Big data buffers. Complex application code. External memory is essential for applications exceeding internal 512KB SRAM.",
        "decisionGuide": "Up to 512MB external memory supported. Essential for large buffer applications.",
        "keywords": ["external memory", "SDRAM", "FMC", "memory expansion"]
      },
      {
        "question": "What development tools support the Cortex-M7?",
        "answer": "UN32F767 development ecosystem: IDEs: STM32CubeIDE (free, recommended). Keil MDK-ARM Professional. IAR Embedded Workbench. Debug tools: ST-Link/V3 (high-speed). J-Link Ultra+. ULINKpro. Software: STM32CubeH7 HAL and LL drivers. FreeRTOS with M7 optimizations. DSP libraries optimized for M7. Middleware: lwIP TCP/IP stack. USB Device/Host stack. File systems (FAT, exFAT). Development boards: Nucleo-F767ZI (affordable). Discovery board with peripherals. Custom evaluation boards. The extensive ecosystem provides everything needed for M7 development. Many examples and application notes available.",
        "decisionGuide": "STM32CubeIDE recommended. Use ST-Link/V3 for high-speed debugging.",
        "keywords": ["development tools", "STM32CubeIDE", "debug", "M7 support"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN32F767.pdf" }
  },
  {
    "partNumber": "UN32F030",
    "name": "ARM Cortex-M0 MCU with 32KB Flash",
    "nameCn": "ARM Cortex-M0 MCU with 32KB Flash",
    "shortDescription": "Entry-level ARM Cortex-M0 MCU with 32KB Flash, 4KB RAM for basic embedded applications and cost-sensitive designs.",
    "description": "The UN32F030 is an entry-level 32-bit ARM Cortex-M0 microcontroller designed for basic embedded applications requiring minimal resources.",
    "descriptionParagraphs": [
      "The UN32F030 features a 48MHz ARM Cortex-M0 core with 32KB Flash memory and 4KB SRAM. It is the most cost-effective solution for simple control applications and basic IoT devices.",
      "The peripheral set includes basic UARTs, SPI, I2C, and 12-bit ADC. The device is ideal for cost-sensitive applications where minimal functionality is required.",
      "Operating from 2.4V to 3.6V supply with industrial temperature range (-40C to +85C). Available in compact TSSOP-20 and QFN-32 packages."
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
      "ADC": "12-bit, 10 channels",
      "Package": "TSSOP-20, QFN-32"
    },
    "applications": ["Simple sensors", "Basic controllers", "LED drivers", "Switch interfaces", "Minimal IoT devices"],
    "features": ["Cortex-M0", "32KB Flash", "Ultra low cost", "48MHz", "Compact package"],
    "stock": { "status": "in_stock", "quantity": 100000, "minOrderQty": 500, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 500, "price": 0.55 },
        { "minQty": 2000, "price": 0.44 },
        { "minQty": 10000, "price": 0.35 },
        { "minQty": 50000, "price": 0.28 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN32F051",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f051.html",
        "reason": "Higher capacity version with more peripherals",
        "useCase": "Use when 64KB Flash and more peripherals are needed",
        "specifications": { "Core": "ARM Cortex-M0", "Flash": "64KB", "RAM": "8KB", "Speed": "48MHz" },
        "comparison": "UN32F030=>UN32F051: Flash: 64KB > 32KB (+100%), RAM: 8KB > 4KB (+100%), Peripherals: More, Price: Approximately 40% higher"
      },
      {
        "partNumber": "UN32F103",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f103.html",
        "reason": "M3 version for higher performance requirements",
        "useCase": "Use when M0 performance is insufficient",
        "specifications": { "Core": "ARM Cortex-M3", "Flash": "128KB", "RAM": "20KB", "Speed": "72MHz" },
        "comparison": "UN32F030=>UN32F103: Core: M3 > M0 (higher performance), Flash: 128KB > 32KB (+300%), RAM: 20KB > 4KB (+400%), Price: Approximately 100% higher"
      }
    ],
    "companionParts": [
      { "partNumber": "UN25N016", "link": "/unisemicon/products/nor-flash/un25n016.html", "description": "16Mb NOR Flash for external storage", "category": "NOR Flash" },
      { "partNumber": "UN32F030-EVB", "link": "#", "description": "Basic evaluation board", "category": "Evaluation Board" },
      { "partNumber": "ST-Link-V2", "link": "#", "description": "Debug/programming tool", "category": "Programming Tool" }
    ],
    "faeReview": {
      "rating": 4.3,
      "author": "Wang Hua",
      "title": "FAE - Cost-Critical Applications",
      "content": "The UN32F030 is the most economical 32-bit MCU in UNISemicon's lineup. At under $0.35 in volume, it competes with 8-bit MCUs while offering 32-bit ARM architecture. I have used this in simple LED controllers, basic sensor interfaces, and minimal IoT endpoints. The 32KB Flash and 4KB RAM is sufficient for simple control loops and basic communication. The compact TSSOP-20 package is ideal for space-constrained designs. While the peripheral set is basic, it covers the essentials for simple applications. For projects where cost is the primary concern and requirements are minimal, the UN32F030 provides excellent value as an entry point to 32-bit ARM development.",
      "highlight": "Most cost-effective ARM Cortex-M0 MCU for basic embedded applications"
    },
    "faqs": [
      {
        "question": "Is 32KB Flash and 4KB RAM sufficient for basic applications?",
        "answer": "UN32F030 capacity analysis for basic applications: Typical usage: Bootloader: 4-8KB. Application code: 12-20KB. Configuration data: 2-4KB. Total Flash: 18-32KB (at limit). RAM usage: Stack: 512B-1KB. Global variables: 1-2KB. Heap: 512B-1KB. Total RAM: 2-4KB (at limit). 32KB/4KB is sufficient for: Simple state machines. Basic sensor reading. Simple LED control. Basic UART communication. Simple timing applications. Not suitable for: RTOS (needs more RAM). Complex algorithms. Multiple communication protocols. Large data buffers. Consider UN32F051 (64KB/8KB) for growth margin.",
        "decisionGuide": "32KB/4KB is minimal. Choose 64KB/8KB for any complexity or growth.",
        "keywords": ["32KB Flash", "4KB RAM", "minimal MCU", "basic applications"]
      },
      {
        "question": "How does this compare to 8-bit MCUs in price?",
        "answer": "UN32F030 vs 8-bit MCU price comparison: UN32F030 price: approximately $0.35 in 10K quantity. Popular 8-bit MCUs: PIC16F: $0.40-0.60. ATmega328P: $1.50-2.00. 8051-based: $0.20-0.40. Price advantage: UN32F030 is competitive with mid-range 8-bit MCUs. Cheaper than many popular 8-bit options. Only slightly more than basic 8051. Additional value: 32-bit architecture. Better development tools. Larger ecosystem. Easier to find engineers. Upgrade path within ARM family. Recommendation: Choose UN32F030 over 8-bit for new designs. Similar or lower price. Better long-term value. Easier development.",
        "decisionGuide": "UN32F030 is price-competitive with 8-bit MCUs while offering 32-bit advantages.",
        "keywords": ["price comparison", "8-bit vs 32-bit", "cost effective", "ARM MCU price"]
      },
      {
        "question": "What is the power consumption in active and sleep modes?",
        "answer": "UN32F030 power consumption: Active mode (48MHz): 3-4mA typical. Sleep mode: 0.5-1mA. Stop mode: 5-10uA. Standby mode: 2-5uA. Comparison with similar MCUs: Similar to other M0 MCUs. Lower than M3/M4 MCUs. Higher than specialized low-power MCUs. Battery life example: CR2032 coin cell (225mAh). Active 1% duty cycle: 225mAh / 0.04mA = 5,625 hours = 234 days. Sleep with periodic wake: 225mAh / 0.01mA = 22,500 hours = 2.6 years. For long battery life: Minimize active time. Use stop mode between operations. Disable unused peripherals.",
        "decisionGuide": "Power consumption is reasonable for basic M0. Use sleep modes for battery applications.",
        "keywords": ["power consumption", "battery life", "sleep mode", "low power"]
      },
      {
        "question": "What peripherals are included?",
        "answer": "UN32F030 peripheral set: Communication: 1x UART (up to 3Mbps). 1x SPI (up to 18Mbps). 1x I2C (Standard/Fast mode). Timers: 1x 16-bit advanced timer (motor control). 1x 16-bit basic timer. SysTick timer. Analog: 12-bit ADC (1Msps). 10 channels. Temperature sensor. Internal reference. GPIO: Up to 26 GPIOs. 5V tolerant inputs. External interrupts. Other: Watchdog timer. Real-time clock. CRC calculation unit. Debug: SWD interface. No JTAG. Limitations: No USB. No CAN. No Ethernet. No DAC. Single UART/SPI/I2C. For more peripherals, consider UN32F051.",
        "decisionGuide": "Basic peripherals for simple applications. Choose UN32F051 for more features.",
        "keywords": ["peripherals", "UART", "SPI", "I2C", "ADC", "GPIO"]
      },
      {
        "question": "What is the development environment?",
        "answer": "UN32F030 development tools: IDEs: STM32CubeIDE (free, recommended). Keil MDK-ARM (limited free version). IAR Embedded Workbench. PlatformIO. Debug tools: ST-Link/V2. J-Link (EDU version available). Low-cost debuggers. Software support: STM32CubeF0 HAL drivers. Standard peripheral library. Example projects. Application notes. Limitations: Smaller community than F1/F4 series. Fewer third-party libraries. Less example code. Still sufficient for: Basic applications. Learning ARM development. Simple product designs. For extensive support, consider UN32F051 or UN32F103.",
        "decisionGuide": "Basic development support available. STM32CubeIDE recommended for development.",
        "keywords": ["development tools", "IDE", "STM32CubeIDE", "debug", "programming"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN32F030.pdf" }
  }
);
console.log(`   MCU: ${mcuCategory.products.length} 个产品`);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('\n文件已保存！');

// 验证
console.log('\n=== 验证结果 ===');
products.categories.forEach(cat => {
  const seen = new Set();
  const dups = [];
  cat.products.forEach((p, i) => {
    if (seen.has(p.partNumber)) {
      dups.push({idx: i+1, part: p.partNumber});
    } else {
      seen.add(p.partNumber);
    }
  });
  const ok = cat.products.length >= 6 && dups.length === 0;
  console.log(`${cat.name}: ${cat.products.length} 个产品 ${ok ? '✓' : '✗'}`);
  if (dups.length > 0) {
    dups.forEach(d => console.log(`  重复: 位置${d.idx} - ${d.part}`));
  }
});
