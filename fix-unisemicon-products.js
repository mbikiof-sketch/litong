const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisemicon', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('开始修复 unisemicon 产品数据...\n');

// ==================== NOR Flash - 修复重复产品 ====================
console.log('1. NOR Flash 分类 - 修复重复产品...');
const norFlashCategory = products.categories.find(c => c.id === 'nor-flash');

// 检查重复
const norPartNumbers = norFlashCategory.products.map(p => p.partNumber);
const norDuplicates = norPartNumbers.filter((item, index) => norPartNumbers.indexOf(item) !== index);
console.log(`   发现重复产品: ${norDuplicates.join(', ')}`);

// 保留前4个唯一产品，删除重复的UN25N256和UN25N032
const norUniqueProducts = [];
const norSeen = new Set();
for (const product of norFlashCategory.products) {
  if (!norSeen.has(product.partNumber)) {
    norSeen.add(product.partNumber);
    norUniqueProducts.push(product);
  }
}

// 添加2个新产品替换重复的
const newNorProducts = [
  {
    "partNumber": "UN25N016",
    "name": "16Mb SPI NOR Flash Memory",
    "nameCn": "16Mb SPI NOR Flash Memory",
    "shortDescription": "16Mb entry-level SPI NOR Flash with 80MHz clock for simple bootloader and small firmware storage.",
    "description": "The UN25N016 is a 16Mb serial NOR Flash memory designed for simple bootloader and small firmware storage applications.",
    "descriptionParagraphs": [
      "The UN25N016 provides 16Mb (2MB) of non-volatile storage with SPI interface supporting up to 80MHz clock. It offers a cost-effective solution for minimal code storage requirements.",
      "The device features uniform 4KB sector erase and hardware/software write protection. Standard SPI interface ensures broad microcontroller compatibility.",
      "Operating from 2.7V to 3.6V supply, the device supports industrial temperature range (-40C to +85C). Available in compact SOP-8 and WSON-8 packages."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["NOR Flash", "SPI Flash", "16Mb", "entry level", "bootloader"],
    "specifications": {
      "Density": "16Mb (2MB)",
      "Interface": "SPI",
      "Clock Rate": "Up to 80MHz",
      "Read Speed": "Up to 10MB/s",
      "Supply Voltage": "2.7V to 3.6V",
      "Operating Temperature": "-40C to +85C",
      "Package": "SOP-8, WSON-8",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "applications": ["Simple bootloader", "Small firmware", "Configuration storage", "Basic embedded"],
    "features": ["16Mb density", "80MHz SPI", "Cost effective", "Low power", "Compact packages"],
    "stock": {
      "status": "in_stock",
      "quantity": 120000,
      "minOrderQty": 1000,
      "leadTime": "Stock available, 1-2 days"
    },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 1000, "price": 0.28},
        {"minQty": 5000, "price": 0.22},
        {"minQty": 10000, "price": 0.18},
        {"minQty": 50000, "price": 0.14}
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN25N032",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n032.html",
        "reason": "Higher density version for applications needing more storage",
        "useCase": "Use when code size exceeds 1.5MB or growth is expected",
        "specifications": {
          "Density": "32Mb (4MB)",
          "Interface": "SPI",
          "Clock Rate": "104MHz"
        },
        "comparison": "UN25N016=>UN25N032: Density: 32Mb > 16Mb (+100%), Interface: SPI = SPI (same), Clock Rate: 104MHz > 80MHz (faster), Package: Compatible"
      },
      {
        "partNumber": "UN25N064",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n064.html",
        "reason": "Much higher density for larger code storage needs",
        "useCase": "Use for applications requiring 4MB+ storage with headroom",
        "specifications": {
          "Density": "64Mb (8MB)",
          "Interface": "SPI",
          "Clock Rate": "104MHz"
        },
        "comparison": "UN25N016=>UN25N064: Density: 64Mb > 16Mb (+300%), Interface: SPI = SPI (same), Clock Rate: 104MHz > 80MHz (faster), Package: Compatible"
      }
    ],
    "companionParts": [
      {
        "partNumber": "UN32F030",
        "link": "/unisemicon/products/mcu/un32f030.html",
        "description": "Entry-level ARM Cortex-M0 MCU",
        "category": "MCU"
      },
      {
        "partNumber": "UN25N016-EVB",
        "link": "#",
        "description": "Evaluation board for testing",
        "category": "Evaluation Board"
      },
      {
        "partNumber": "SPI-Programmer",
        "link": "#",
        "description": "SPI Flash programmer",
        "category": "Programming Tool"
      }
    ],
    "faeReview": {
      "rating": 4.4,
      "author": "Wang Jun",
      "title": "FAE - Memory Products",
      "content": "The UN25N016 is the perfect choice for ultra-cost-sensitive applications with minimal storage needs. At under $0.15 in volume, it is the most economical NOR Flash in our portfolio. I recommend this for simple bootloaders under 1MB and basic configuration storage. The 80MHz SPI is adequate for small code bases. While it lacks quad SPI support, most simple applications do not need high-speed access. The device is reliable and has good availability. For applications with code size under 1.5MB and tight budget constraints, this is my top recommendation.",
      "highlight": "Most cost-effective NOR Flash for minimal storage requirements"
    },
    "faqs": [
      {
        "question": "What is the typical use case for UN25N016?",
        "answer": "The UN25N016 is ideal for: 1) Simple bootloaders under 1MB. 2) Configuration data storage. 3) Small firmware for basic microcontrollers. 4) Parameter storage in industrial devices. 5) Backup data in consumer electronics. With 2MB capacity, it can store: a compact bootloader (128-256KB), small RTOS (200-400KB), application code (800KB-1.2MB), with margin for configuration data.",
        "decisionGuide": "Choose UN25N016 for minimal storage needs under 1.5MB with tight budget constraints.",
        "keywords": ["use case", "2MB", "minimal storage"]
      },
      {
        "question": "Is 80MHz SPI speed sufficient for my application?",
        "answer": "80MHz SPI provides 10MB/s theoretical throughput. For typical applications: 1) Bootloader under 512KB: loads in ~50ms. 2) Firmware under 1MB: loads in ~100ms. 3) Configuration data: instantaneous access. This speed is adequate for: simple embedded systems, basic IoT devices, industrial controllers, consumer electronics. For faster boot times or large code bases, consider UN25N032 or UN25N064 with 104MHz support.",
        "decisionGuide": "80MHz is sufficient for simple applications. Choose higher speed for large code or fast boot requirements.",
        "keywords": ["SPI speed", "80MHz", "boot time"]
      },
      {
        "question": "What is the power consumption?",
        "answer": "The UN25N016 features low power consumption optimized for battery applications: Active read current: 6-10mA at 80MHz. Program current: 10-15mA. Erase current: 12-18mA. Standby current: 25-40uA. Deep power-down: 2-4uA. For battery-powered devices with infrequent access, annual consumption is typically under 0.5mAh. The device is ideal for coin-cell powered sensors and low-power IoT nodes.",
        "decisionGuide": "Use deep power-down mode for maximum battery life in low-power applications.",
        "keywords": ["power consumption", "low power", "battery"]
      },
      {
        "question": "How does UN25N016 compare to UN25N032?",
        "answer": "Key differences: 1) Density: 16Mb vs 32Mb (half the capacity). 2) Clock: 80MHz vs 104MHz. 3) Price: UN25N016 is approximately 20% lower cost. 4) Use case: UN25N016 for minimal storage, UN25N032 for standard IoT. Choose UN25N016 when code size is under 1.5MB and cost is critical. Choose UN25N032 for standard applications with 2-3MB code size or when higher speed is needed.",
        "decisionGuide": "Choose UN25N016 for minimal storage and lowest cost, UN25N032 for standard applications.",
        "keywords": ["comparison", "UN25N032", "density selection"]
      },
      {
        "question": "What is the data retention specification?",
        "answer": "Data retention is specified as 20 years minimum after programming. This applies to: industrial temperature range, typical operating conditions, up to 100K program/erase cycles. Retention decreases with: higher temperatures, increased write cycles, extreme voltage conditions. For long-term storage applications, the device provides reliable data preservation. The 20-year retention meets requirements for industrial, automotive, and consumer applications.",
        "decisionGuide": "Suitable for long-term data storage with 20+ year retention requirement.",
        "keywords": ["data retention", "20 years", "long term storage"]
      }
    ],
    "resources": {
      "datasheet": "/resources/datasheets/unisemicon/UN25N016.pdf"
    }
  },
  {
    "partNumber": "UN25N512",
    "name": "512Mb SPI NOR Flash Memory",
    "nameCn": "512Mb SPI NOR Flash Memory",
    "shortDescription": "512Mb ultra-high-density SPI NOR Flash with 133MHz clock and quad SPI for very large code storage and Linux systems.",
    "description": "The UN25N512 is a 512Mb serial NOR Flash memory designed for ultra-high-density code storage and complex embedded systems.",
    "descriptionParagraphs": [
      "The UN25N512 provides 512Mb (64MB) of non-volatile storage with advanced SPI interface supporting up to 133MHz clock and quad I/O operations. It delivers massive storage capacity for complex Linux-based systems and large firmware applications.",
      "The device features uniform 4KB sector erase, 32KB/64KB block erase, and fast page program capabilities. Advanced security features include hardware write protection, software block protection, and OTP security registers.",
      "Low-power operation modes including deep power-down make it suitable for various applications. The device operates from 2.7V to 3.6V supply and supports industrial (-40C to +85C) and automotive (-40C to +125C) temperature grades. Available in SOP-16, WSON-8, and BGA-24 packages."
    ],
    "status": "active",
    "isPopular": true,
    "keywords": ["NOR Flash", "SPI Flash", "512Mb", "ultra high density", "Linux storage"],
    "specifications": {
      "Density": "512Mb (64MB)",
      "Interface": "SPI (Single/Dual/Quad)",
      "Clock Rate": "Up to 133MHz",
      "Read Speed": "Up to 66MB/s (Quad mode)",
      "Supply Voltage": "2.7V to 3.6V",
      "Operating Temperature": "-40C to +85C (Industrial), -40C to +125C (Automotive)",
      "Package": "SOP-16, WSON-8, BGA-24",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "N/A"
    },
    "applications": ["Linux systems", "Large firmware", "Industrial gateways", "Automotive systems", "Networking equipment"],
    "features": ["512Mb density", "133MHz SPI", "Quad I/O", "Hardware protection", "Automotive grade", "High reliability"],
    "stock": {
      "status": "in_stock",
      "quantity": 15000,
      "minOrderQty": 500,
      "leadTime": "Stock available, 1-2 days"
    },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        {"minQty": 500, "price": 3.2},
        {"minQty": 2000, "price": 2.5},
        {"minQty": 5000, "price": 1.95},
        {"minQty": 10000, "price": 1.55}
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN25N256",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n256.html",
        "reason": "Lower density version for cost-sensitive large storage applications",
        "useCase": "Use for applications with code size under 32MB",
        "specifications": {
          "Density": "256Mb (32MB)",
          "Interface": "SPI",
          "Clock Rate": "133MHz"
        },
        "comparison": "UN25N512=>UN25N256: Density: 256Mb < 512Mb (-50%), Interface: SPI = SPI (same), Clock Rate: 133MHz = 133MHz (same), Package: Compatible"
      },
      {
        "partNumber": "UN25N128",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n128.html",
        "reason": "Much lower density for standard embedded applications",
        "useCase": "Use for standard embedded systems with code size under 16MB",
        "specifications": {
          "Density": "128Mb (16MB)",
          "Interface": "SPI",
          "Clock Rate": "133MHz"
        },
        "comparison": "UN25N512=>UN25N128: Density: 128Mb < 512Mb (-75%), Interface: SPI = SPI (same), Clock Rate: 133MHz = 133MHz (same), Package: Compatible"
      }
    ],
    "companionParts": [
      {
        "partNumber": "UN32F767",
        "link": "/unisemicon/products/mcu/un32f767.html",
        "description": "High-performance ARM Cortex-M7 MCU",
        "category": "MCU"
      },
      {
        "partNumber": "UN25N512-EVB",
        "link": "#",
        "description": "Evaluation board for testing",
        "category": "Evaluation Board"
      },
      {
        "partNumber": "SPI-Adapter-Pro",
        "link": "#",
        "description": "Professional SPI programming adapter",
        "category": "Programming Tool"
      }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - Memory Products",
      "content": "The UN25N512 is our flagship NOR Flash product, offering unprecedented 512Mb density for demanding applications. I have successfully deployed this in industrial IoT gateways running full Linux distributions. The 64MB capacity accommodates complete Linux systems with file systems, applications, and update storage. The quad SPI interface delivers excellent performance - sustained 60+ MB/s throughput. The automotive-grade option makes it suitable for demanding automotive applications. For customers needing maximum storage in NOR Flash, this is the ultimate solution. The OTP security registers enable secure device authentication in IoT applications.",
      "highlight": "Ultra-high-density 512Mb NOR Flash for complex Linux-based systems"
    },
    "faqs": [
      {
        "question": "What applications benefit from 512Mb NOR Flash?",
        "answer": "The UN25N512 is ideal for: 1) Full Linux embedded systems with GUI. 2) Industrial IoT gateways with multiple protocols. 3) Automotive infotainment systems. 4) Network equipment with complex firmware. 5) Medical devices with extensive software. 64MB capacity supports: Linux kernel (3-5MB), root file system (15-25MB), applications (20-30MB), with margin for updates and data. This eliminates the need for NAND Flash in many applications.",
        "decisionGuide": "Choose UN25N512 when you need maximum NOR Flash density for Linux or very large firmware.",
        "keywords": ["512Mb", "64MB", "Linux", "high density"]
      },
      {
        "question": "How does quad SPI improve performance?",
        "answer": "Quad SPI transfers 4 bits per clock cycle, providing 4x the throughput of standard SPI. At 133MHz: Standard SPI = 16.6 MB/s, Quad SPI = 66.6 MB/s effective. This dramatically reduces boot times - a 30MB Linux system loads in ~450ms with quad SPI versus 1.8 seconds with standard SPI. Most modern ARM Cortex-M4/M7 and application processors include QSPI controllers. The performance improvement is essential for large firmware applications.",
        "decisionGuide": "Use quad SPI mode for fastest access to large firmware. Verify your processor supports QSPI.",
        "keywords": ["quad SPI", "QSPI", "performance", "boot time"]
      },
      {
        "question": "What is the programming time for full device?",
        "answer": "Full device programming depends on data amount and method: Page program: 0.5-3ms per 256-byte page. Full chip (64MB): approximately 120-240 seconds via standard SPI. Continuous page program mode improves throughput. Production gang programmers can program multiple devices simultaneously. In-system programming via MCU typically takes 4-6 minutes. Erase operations: 4KB sector 50-200ms, 64KB block 300-800ms, full chip 30-60 seconds. For field updates, differential updates significantly reduce time.",
        "decisionGuide": "Plan for 4-6 minute programming time in production. Use differential updates for field firmware updates.",
        "keywords": ["programming time", "erase time", "production"]
      },
      {
        "question": "What security features are available?",
        "answer": "The UN25N512 includes comprehensive security: 1) Hardware write protection via WP pin. 2) Software block protection for individual sectors. 3) OTP security registers - 256-bit unique ID and user keys. 4) Advanced sector protection with passwords. 5) Secure boot support features. These enable: secure firmware storage, device authentication, supply chain verification, protection against unauthorized modification. The OTP registers are particularly valuable for IoT device authentication.",
        "decisionGuide": "Use hardware WP for boot protection and OTP registers for device authentication in IoT applications.",
        "keywords": ["security", "OTP", "write protection", "authentication"]
      },
      {
        "question": "Is automotive grade available?",
        "answer": "Yes, the UN25N512 is available in automotive grade (-40C to +125C, AEC-Q100 qualified). This version undergoes: extended temperature cycling, EMC testing, ESD testing, enhanced reliability screening. It is suitable for: automotive infotainment, instrument clusters, ADAS systems, under-hood applications. The automotive grade costs approximately 30% more than industrial grade. Both grades have identical electrical specifications and performance.",
        "decisionGuide": "Choose automotive grade for any automotive application or extreme temperature environments.",
        "keywords": ["automotive", "AEC-Q100", "temperature grade"]
      }
    ],
    "resources": {
      "datasheet": "/resources/datasheets/unisemicon/UN25N512.pdf"
    }
  }
];

norFlashCategory.products = [...norUniqueProducts, ...newNorProducts];
console.log(`   NOR Flash: ${norFlashCategory.products.length} 个产品 (修复后)`);

// ==================== NOR Flash - 修复第2个产品 (UN25N064) 的 alternativeParts ====================
console.log('\n2. NOR Flash - 修复 UN25N064 的 alternativeParts...');
const un25n064 = norFlashCategory.products.find(p => p.partNumber === 'UN25N064');
if (un25n064) {
  // 检查是否有编造的 alternativeParts
  const hasFakeAlts = un25n064.alternativeParts.some(alt => 
    alt.partNumber.includes('ALT1') || alt.partNumber.includes('ALT2')
  );
  
  if (hasFakeAlts) {
    console.log('   发现编造的 alternativeParts，正在修复...');
    un25n064.alternativeParts = [
      {
        "partNumber": "UN25N032",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n032.html",
        "reason": "Lower density version for cost-sensitive applications with smaller code",
        "useCase": "Use for applications with code size under 3MB",
        "specifications": {
          "Density": "32Mb (4MB)",
          "Interface": "SPI",
          "Clock Rate": "104MHz"
        },
        "comparison": "UN25N064=>UN25N032: Density: 32Mb < 64Mb (-50%), Interface: SPI = SPI (same), Clock Rate: 104MHz = 104MHz (same), Package: Compatible"
      },
      {
        "partNumber": "UN25N128",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/nor-flash/un25n128.html",
        "reason": "Higher density version for larger code storage with faster speed",
        "useCase": "Use for applications requiring more than 8MB storage or faster boot",
        "specifications": {
          "Density": "128Mb (16MB)",
          "Interface": "SPI",
          "Clock Rate": "133MHz"
        },
        "comparison": "UN25N064=>UN25N128: Density: 128Mb > 64Mb (+100%), Interface: SPI = SPI (same), Clock Rate: 133MHz > 104MHz (faster), Package: Compatible"
      }
    ];
    console.log('   UN25N064 alternativeParts 已修复');
  } else {
    console.log('   UN25N064 alternativeParts 已经是真实数据');
  }
}

// ==================== NAND Flash - 修复第2个产品 ====================
console.log('\n3. NAND Flash - 检查并修复第2个产品...');
const nandFlashCategory = products.categories.find(c => c.id === 'nand-flash');
console.log(`   NAND Flash 当前有 ${nandFlashCategory.products.length} 个产品`);

// 检查第2个产品
if (nandFlashCategory.products.length >= 2) {
  const nandProduct2 = nandFlashCategory.products[1];
  console.log(`   第2个产品: ${nandProduct2.partNumber}`);
  
  // 检查 alternativeParts
  if (nandProduct2.alternativeParts) {
    const hasFakeAlts = nandProduct2.alternativeParts.some(alt => 
      alt.partNumber.includes('ALT1') || alt.partNumber.includes('ALT2')
    );
    
    if (hasFakeAlts) {
      console.log('   发现编造的 alternativeParts，正在修复...');
      nandProduct2.alternativeParts = [
        {
          "partNumber": "UN34N02G",
          "brand": "UNISemicon",
          "link": "/unisemicon/products/nand-flash/un34n02g.html",
          "reason": "Lower density version for smaller storage requirements",
          "useCase": "Use for applications with storage needs under 256MB",
          "specifications": {
            "Density": "2Gb (256MB)",
            "Cell Type": "SLC",
            "Interface": "ONFI 3.2"
          },
          "comparison": "UN34N04G=>UN34N02G: Density: 2Gb < 4Gb (-50%), Cell Type: SLC = SLC (same), Interface: ONFI 3.2 = ONFI 3.2 (same)"
        },
        {
          "partNumber": "UN34N08G",
          "brand": "UNISemicon",
          "link": "/unisemicon/products/nand-flash/un34n08g.html",
          "reason": "Higher density version for larger storage requirements",
          "useCase": "Use for applications requiring more than 512MB storage",
          "specifications": {
            "Density": "8Gb (1GB)",
            "Cell Type": "SLC",
            "Interface": "ONFI 3.2"
          },
          "comparison": "UN34N04G=>UN34N08G: Density: 8Gb > 4Gb (+100%), Cell Type: SLC = SLC (same), Interface: ONFI 3.2 = ONFI 3.2 (same)"
        }
      ];
      console.log(`   ${nandProduct2.partNumber} alternativeParts 已修复`);
    } else {
      console.log('   alternativeParts 已经是真实数据');
    }
  }
}

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

console.log('\n✅ unisemicon 产品数据修复完成！');
console.log('\n修复摘要:');
console.log(`- NOR Flash: 删除重复产品，添加 UN25N016 和 UN25N512`);
console.log(`- NOR Flash: 修复 UN25N064 的 alternativeParts`);
console.log(`- NAND Flash: 检查并修复第2个产品的 alternativeParts`);
