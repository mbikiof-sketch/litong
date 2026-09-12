const fs = require('fs');
const path = require('path');

const brand = 'unisemicon';
const dataDir = path.join(__dirname, 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('修复重复产品...\n');

// ==================== NOR Flash - 修复位置5,6的重复 ====================
console.log('1. NOR Flash 分类 - 替换重复产品...');
const norFlashCategory = products.categories.find(c => c.id === 'nor-flash');

// 移除重复的产品（保留前4个唯一产品）
norFlashCategory.products = norFlashCategory.products.filter((p, index, self) => 
  self.findIndex(t => t.partNumber === p.partNumber) === index
);

// 添加2个新的唯一产品
const newNorFlashProducts = [
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
];

norFlashCategory.products.push(...newNorFlashProducts);
console.log(`   NOR Flash 分类现在有 ${norFlashCategory.products.length} 个产品`);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('\n文件已保存！');

// 验证
console.log('\n验证结果:');
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
  console.log(`   ${cat.name}: ${cat.products.length} 个产品 ${dups.length === 0 ? '✓' : '✗ (有重复)'}`);
  if (dups.length > 0) {
    dups.forEach(d => console.log(`      位置${d.idx}: ${d.part}`));
  }
});
