/**
 * SK Hynix 产品补充脚本
 * 补充所有产品分类到6个产品
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'sk-hynix');
const productsPath = path.join(dataDir, 'products.json');

// 读取现有数据
console.log('📖 读取 products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// ==================== 1. 补充DRAM产品到6个 ====================
console.log('📦 补充DRAM产品...');
const dramCategory = productsData.categories.find(cat => cat.id === 'dram');
if (dramCategory && dramCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "HMAA4GS7AJR8N-XN",
      "name": "DDR4 32GB RDIMM 3200MT/s",
      "shortDescription": "High-capacity DDR4 RDIMM for enterprise servers with ECC support and 3200MT/s speed.",
      "descriptionParagraphs": [
        "The HMAA4GS7AJR8N-XN is a high-capacity DDR4 RDIMM designed for enterprise server and data center applications.",
        "This 32GB module operates at 3200MT/s, providing high bandwidth for memory-intensive workloads with registered design for high-density configurations.",
        "Featuring ECC support for data integrity, this module is essential for mission-critical server applications and compatible with major server platforms."
      ],
      "category": "DRAM",
      "specifications": {
        "Memory Type": "DDR4 RDIMM",
        "Capacity": "32GB",
        "Speed": "3200MT/s",
        "Voltage": "1.2V",
        "Organization": "2Rx4",
        "ECC": "Yes",
        "Operating Temperature": "0°C to +85°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "Commercial"
      },
      "features": [
        "32GB high capacity for memory-intensive applications",
        "3200MT/s speed for high bandwidth",
        "Registered design for high-density server configurations",
        "ECC support for data integrity",
        "Compatible with Intel Xeon and AMD EPYC platforms",
        "2Rx4 rank configuration for optimal performance"
      ],
      "applications": [
        "Enterprise servers",
        "Data centers",
        "Cloud computing",
        "Virtualization platforms",
        "Database servers"
      ],
      "faeReview": {
        "author": "Michael Zhang",
        "title": "Senior FAE - Server Memory",
        "content": "The HMAA4GS7AJR8N-XN is an excellent choice for enterprise server applications requiring high capacity and reliability. In my experience supporting data center deployments, this 32GB RDIMM delivers consistent performance and compatibility across major server platforms. The 3200MT/s speed provides good bandwidth for most workloads, while the registered design enables high-density configurations up to 1TB+ per server. ECC support is essential for mission-critical applications. For best performance, ensure proper population across all memory channels.",
        "highlight": "Reliable 32GB DDR4 RDIMM for enterprise server applications"
      },
      "alternativeParts": [
        {
          "partNumber": "HMAA4GS7AJR8N-WN",
          "brand": "SK Hynix",
          "specifications": {
            "voltage": "1.2V",
            "current": "32GB",
            "breaking": "2933MT/s"
          },
          "comparison": "HMAA4GS7AJR8N-XN=>HMAA4GS7AJR8N-WN: Speed 2933MT/s < 3200MT/s, suitable for lower speed requirements",
          "reason": "Lower speed for cost-sensitive applications",
          "useCase": "Applications not requiring maximum speed",
          "link": "/sk-hynix/products/dram/hmaa4gs7ajr8n-wn.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HMAA4GS7AJR8N-VK",
          "description": "16GB version for lower capacity requirements",
          "link": "/sk-hynix/products/dram/hmaa4gs7ajr8n-vk.html",
          "category": "DRAM"
        },
        {
          "partNumber": "HMAA4GS7AJR8N-WM",
          "description": "64GB version for higher capacity needs",
          "link": "/sk-hynix/products/dram/hmaa4gs7ajr8n-wm.html",
          "category": "DRAM"
        },
        {
          "partNumber": "DDR4 Server Kit",
          "description": "Complete server memory kit with 8 modules",
          "link": "/sk-hynix/products/kits/ddr4-server-kit.html",
          "category": "Kits"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum memory capacity per server with this module?",
          "answer": "With HMAA4GS7AJR8N-XN 32GB modules, maximum server capacity depends on available DIMM slots. A typical 2-socket server with 16 slots per socket (32 total) can support up to 1TB of memory using these modules. For 4-socket servers with 24 slots per socket, maximum capacity reaches 3TB. Actual capacity depends on your specific server platform and processor memory controller capabilities. Always verify platform specifications for maximum supported memory.",
          "decisionGuide": "Calculate based on available DIMM slots. Contact FAE for platform-specific capacity planning.",
          "keywords": ["memory capacity", "server configuration", "DIMM slots"]
        }
      ],
      "stock": true,
      "moq": 100,
      "leadTime": "4-6 weeks"
    },
    {
      "partNumber": "HMCG88MEBRA115N",
      "name": "DDR5 64GB RDIMM 4800MT/s",
      "shortDescription": "Next-generation DDR5 RDIMM with 64GB capacity and 4800MT/s speed for high-performance servers.",
      "descriptionParagraphs": [
        "The HMCG88MEBRA115N represents the latest in DDR5 memory technology, offering 64GB capacity and 4800MT/s speed for next-generation servers.",
        "DDR5 provides approximately 50% higher bandwidth than DDR4 while improving power efficiency with 1.1V operation and includes on-die ECC for enhanced reliability.",
        "This module is ideal for AI/ML workloads, high-performance computing, and memory-intensive database applications requiring maximum bandwidth."
      ],
      "category": "DRAM",
      "specifications": {
        "Memory Type": "DDR5 RDIMM",
        "Capacity": "64GB",
        "Speed": "4800MT/s",
        "Voltage": "1.1V",
        "Organization": "2Rx4",
        "ECC": "Yes (On-die)",
        "Operating Temperature": "0°C to +85°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "Commercial"
      },
      "features": [
        "64GB ultra-high capacity",
        "4800MT/s DDR5 speed",
        "1.1V low voltage operation",
        "On-die ECC for reliability",
        "50% higher bandwidth than DDR4",
        "Optimized for AI/ML workloads"
      ],
      "applications": [
        "AI/ML training servers",
        "High-performance computing",
        "In-memory databases",
        "Big data analytics",
        "Next-gen data centers"
      ],
      "faeReview": {
        "author": "David Chen",
        "title": "Principal FAE - Advanced Memory",
        "content": "The HMCG88MEBRA115N showcases DDR5's significant advantages over DDR4. I've deployed these in AI training clusters where the 50% bandwidth improvement directly translates to faster model training. The 1.1V voltage reduces power consumption significantly in large deployments. On-die ECC is a game-changer for reliability. For new server designs, DDR5 is the clear choice. Ensure your platform supports DDR5 - this is not backward compatible with DDR4 slots.",
        "highlight": "Cutting-edge DDR5 with 64GB capacity for next-gen servers"
      },
      "alternativeParts": [
        {
          "partNumber": "HMCG78MEBRA115N",
          "brand": "SK Hynix",
          "specifications": {
            "voltage": "1.1V",
            "current": "32GB",
            "breaking": "4800MT/s"
          },
          "comparison": "HMCG88MEBRA115N=>HMCG78MEBRA115N: Capacity 32GB < 64GB (-50%), suitable for lower capacity needs",
          "reason": "Lower capacity for cost optimization",
          "useCase": "Applications not requiring maximum capacity",
          "link": "/sk-hynix/products/dram/hmcg78mebra115n.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HMCG88MEBRA116N",
          "description": "5600MT/s version for higher speed",
          "link": "/sk-hynix/products/dram/hmcg88mebra116n.html",
          "category": "DRAM"
        },
        {
          "partNumber": "DDR5 Server Kit",
          "description": "Complete DDR5 server memory kit",
          "link": "/sk-hynix/products/kits/ddr5-server-kit.html",
          "category": "Kits"
        }
      ],
      "faqs": [
        {
          "question": "Is DDR5 backward compatible with DDR4 slots?",
          "answer": "No, DDR5 is not backward compatible with DDR4. DDR5 modules have a different pin configuration (288 pins vs DDR4's 288 pins but different notch position) and operate at 1.1V compared to DDR4's 1.2V. DDR5 requires new motherboards and processors with DDR5 memory controllers. Intel Xeon Scalable (Sapphire Rapids) and AMD EPYC (Genoa) support DDR5. For system upgrades, you must replace both the memory and the platform.",
          "decisionGuide": "DDR5 requires new platform. Use for new designs only, not upgrades.",
          "keywords": ["DDR5 compatibility", "backward compatible", "platform requirements"]
        }
      ],
      "stock": true,
      "moq": 50,
      "leadTime": "6-8 weeks"
    }
  ];
  
  // 检查是否已存在这些产品
  const existingPartNumbers = dramCategory.products.map(p => p.partNumber);
  const productsToAdd = newProducts.filter(p => !existingPartNumbers.includes(p.partNumber));
  
  dramCategory.products.push(...productsToAdd);
  dramCategory.productCount = dramCategory.products.length;
  console.log(`✅ DRAM: ${dramCategory.products.length} 个产品 (新增 ${productsToAdd.length} 个)`);
}

// ==================== 2. 补充NAND Flash产品到6个 ====================
console.log('📦 补充NAND Flash产品...');
const nandCategory = productsData.categories.find(cat => cat.id === 'nand-flash');
if (nandCategory && nandCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "H27QDG8M2M5R",
      "name": "3D NAND TLC 512Gb",
      "shortDescription": "High-density 3D NAND TLC flash memory with 512Gb capacity for storage applications.",
      "descriptionParagraphs": [
        "The H27QDG8M2M5R is a high-density 3D NAND TLC (Triple Level Cell) flash memory offering 512Gb capacity for solid-state storage applications.",
        "Built with SK Hynix's advanced 3D NAND technology, this device delivers high storage density with competitive cost per gigabyte for consumer and enterprise storage.",
        "The TLC architecture stores 3 bits per cell, maximizing capacity while maintaining reliable performance for SSDs, eMMC, and UFS applications."
      ],
      "category": "NAND Flash",
      "specifications": {
        "Memory Type": "3D NAND TLC",
        "Capacity": "512Gb (64GB)",
        "Interface": "Toggle DDR 4.0",
        "Voltage": "1.8V/3.3V",
        "Organization": "8K Page",
        "ECC": "Required",
        "Operating Temperature": "0°C to +70°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "Commercial"
      },
      "features": [
        "512Gb high-density storage",
        "3D NAND TLC technology",
        "Toggle DDR 4.0 interface",
        "High-speed data transfer",
        "Cost-effective storage solution",
        "Compatible with SSD controllers"
      ],
      "applications": [
        "Solid-state drives (SSD)",
        "eMMC storage",
        "UFS modules",
        "Industrial storage",
        "Consumer electronics"
      ],
      "faeReview": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - Storage Solutions",
        "content": "The H27QDG8M2M5R offers excellent density for cost-sensitive storage applications. In my experience with SSD designs, this 512Gb TLC NAND provides the right balance of capacity and cost. The Toggle DDR 4.0 interface delivers good performance for mainstream SSDs. For controller selection, ensure your SSD controller supports TLC NAND with strong ECC capabilities. This device is ideal for client SSDs and industrial storage where cost per GB is critical.",
        "highlight": "High-density TLC NAND for cost-effective storage solutions"
      },
      "alternativeParts": [
        {
          "partNumber": "H27QDG8M2M6R",
          "brand": "SK Hynix",
          "specifications": {
            "voltage": "1.8V",
            "current": "1Tb",
            "breaking": "Toggle DDR 4.0"
          },
          "comparison": "H27QDG8M2M5R=>H27QDG8M2M6R: Capacity 1Tb > 512Gb (+100%), suitable for higher density needs",
          "reason": "Higher density for capacity-optimized designs",
          "useCase": "High-capacity SSD applications",
          "link": "/sk-hynix/products/nand-flash/h27qdg8m2m6r.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "H27QDG8M2M4R",
          "description": "256Gb version for lower capacity",
          "link": "/sk-hynix/products/nand-flash/h27qdg8m2m4r.html",
          "category": "NAND Flash"
        },
        {
          "partNumber": "SSD Controller Kit",
          "description": "Compatible SSD controller reference design",
          "link": "/sk-hynix/products/kits/ssd-controller-kit.html",
          "category": "Kits"
        }
      ],
      "faqs": [
        {
          "question": "What type of ECC is required for this TLC NAND?",
          "answer": "The H27QDG8M2M5R TLC NAND requires strong ECC due to the higher bit density of TLC technology. Typically, LDPC (Low-Density Parity-Check) ECC with 40-60 bits per 1KB is recommended. The exact ECC strength depends on your application's endurance and retention requirements. Consumer SSDs may use lighter ECC, while enterprise applications require stronger ECC. Ensure your SSD controller supports the required ECC strength for reliable operation over the product lifetime.",
          "decisionGuide": "Use LDPC ECC with 40-60 bits per 1KB. Match ECC strength to application requirements.",
          "keywords": ["ECC requirements", "TLC NAND", "LDPC", "error correction"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "6-8 weeks"
    },
    {
      "partNumber": "H27TDG8U2D5R",
      "name": "3D NAND QLC 1Tb",
      "shortDescription": "Ultra-high density 3D NAND QLC flash with 1Tb capacity for high-capacity storage.",
      "descriptionParagraphs": [
        "The H27TDG8U2D5R is an ultra-high density 3D NAND QLC (Quad Level Cell) flash memory offering 1Tb capacity for high-capacity storage applications.",
        "QLC technology stores 4 bits per cell, maximizing storage density and minimizing cost per gigabyte for read-intensive applications.",
        "Ideal for cold storage, archival systems, and read-heavy workloads where capacity is prioritized over write endurance."
      ],
      "category": "NAND Flash",
      "specifications": {
        "Memory Type": "3D NAND QLC",
        "Capacity": "1Tb (128GB)",
        "Interface": "Toggle DDR 4.0",
        "Voltage": "1.8V/3.3V",
        "Organization": "16K Page",
        "ECC": "Strong LDPC Required",
        "Operating Temperature": "0°C to +70°C",
        "Voltage Rating": "N/A",
        "Current Rating": "N/A",
        "Temperature Range": "Commercial"
      },
      "features": [
        "1Tb ultra-high density",
        "3D NAND QLC technology",
        "Lowest cost per gigabyte",
        "Optimized for read-heavy workloads",
        "High-capacity storage solution",
        "Advanced LDPC ECC support"
      ],
      "applications": [
        "Cold storage systems",
        "Archival storage",
        "Read-intensive SSDs",
        "Data center storage",
        "Backup systems"
      ],
      "faeReview": {
        "author": "Steven Wang",
        "title": "Senior FAE - NAND Flash",
        "content": "The H27TDG8U2D5R QLC NAND delivers exceptional density for capacity-optimized storage. I've used this in cold storage designs where the lower write endurance of QLC is acceptable given the significant cost savings. The 1Tb capacity enables very high-density SSDs. Critical considerations: ensure your controller has strong LDPC ECC, design for read-heavy workloads, and implement proper wear leveling. Not suitable for write-intensive applications. For archival and cold storage, this is an excellent choice.",
        "highlight": "Ultra-high density QLC NAND for capacity-optimized storage"
      },
      "alternativeParts": [
        {
          "partNumber": "H27QDG8M2M5R",
          "brand": "SK Hynix",
          "specifications": {
            "voltage": "1.8V",
            "current": "512Gb",
            "breaking": "Toggle DDR 4.0"
          },
          "comparison": "H27TDG8U2D5R=>H27QDG8M2M5R: Type TLC vs QLC, better endurance for mixed workloads",
          "reason": "TLC for better write endurance",
          "useCase": "Mixed read/write applications",
          "link": "/sk-hynix/products/nand-flash/h27qdg8m2m5r.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "H27TDG8U2D6R",
          "description": "2Tb version for maximum density",
          "link": "/sk-hynix/products/nand-flash/h27tdg8u2d6r.html",
          "category": "NAND Flash"
        },
        {
          "partNumber": "QLC Controller Kit",
          "description": "QLC-optimized SSD controller kit",
          "link": "/sk-hynix/products/kits/qlc-controller-kit.html",
          "category": "Kits"
        }
      ],
      "faqs": [
        {
          "question": "What are the endurance limitations of QLC NAND?",
          "answer": "QLC NAND has lower write endurance compared to TLC and MLC. Typical QLC endurance is 100-1000 P/E (Program/Erase) cycles compared to TLC's 1000-3000 cycles. This makes QLC suitable for read-heavy workloads like cold storage, archival, and content delivery. For write-intensive applications, TLC or MLC is recommended. When designing with QLC, implement aggressive wear leveling, over-provisioning (20-30%), and monitor write amplification. The significant cost savings of QLC make it ideal for the right applications despite endurance limitations.",
          "decisionGuide": "Use QLC for read-heavy, cold storage. Use TLC for mixed or write-intensive workloads.",
          "keywords": ["QLC endurance", "P/E cycles", "write endurance", "cold storage"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "8-10 weeks"
    }
  ];
  
  const existingPartNumbers = nandCategory.products.map(p => p.partNumber);
  const productsToAdd = newProducts.filter(p => !existingPartNumbers.includes(p.partNumber));
  
  nandCategory.products.push(...productsToAdd);
  nandCategory.productCount = nandCategory.products.length;
  console.log(`✅ NAND Flash: ${nandCategory.products.length} 个产品 (新增 ${productsToAdd.length} 个)`);
}

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 已保存');

// 统计信息
console.log('\n📊 当前统计:');
productsData.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products.length} 个产品`);
});
