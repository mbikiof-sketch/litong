const fs = require('fs');
const path = require('path');

// 读取当前的products.json
const productsPath = path.join(__dirname, '../data/anlogic/products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 找到SWIFT系列并添加第6个产品
const swiftCategory = productsData.categories.find(cat => cat.id === 'swift-series');

if (swiftCategory && swiftCategory.products.length < 6) {
  const newProduct = {
    "id": "sf1s20",
    "name": "SF1S20",
    "partNumber": "SF1S20",
    "shortDescription": "20K LUTs SWIFT FPSoC optimized for industrial IoT",
    "specifications": {
      "LUTs": "20,000",
      "Processor": "ARM Cortex-A9 Dual Core @ 800MHz",
      "Package": "FBGA400",
      "I/O Pins": "175",
      "FPGA-Processor Interface": "AXI",
      "Multipliers": "35",
      "Memory": "512MB DDR3"
    },
    "features": [
      "20K LUTs FPGA fabric",
      "ARM Cortex-A9 dual core @ 800MHz",
      "AXI interface",
      "175 user I/O pins",
      "35 hardware multipliers",
      "512MB DDR3 memory",
      "Industrial IoT optimized"
    ],
    "applications": [
      "Industrial IoT",
      "Smart Manufacturing",
      "Edge Gateway",
      "Protocol Translation"
    ],
    "descriptionParagraphs": [
      "SF1S20 is a 20K LUTs SWIFT FPSoC optimized for industrial IoT applications. The device combines FPGA flexibility with ARM processing power for smart manufacturing and edge computing.",
      "The FBGA400 package provides 175 user I/O pins with AXI interface between FPGA and processor. 512MB DDR3 memory supports industrial software stacks and real-time data processing.",
      "This device is specifically designed for Industry 4.0 applications requiring both hardware acceleration and software flexibility."
    ],
    "faeReview": {
      "author": "BeiLuo FAE Team",
      "title": "Senior FAE - Industrial IoT",
      "experience": "11+ years",
      "expertise": ["Industrial IoT", "Edge Computing", "Protocol Translation"],
      "content": "SF1S20 is purpose-built for industrial IoT. The 20K LUTs handles industrial protocols while 800MHz ARM runs IoT software stacks. Excellent for smart manufacturing and edge gateways. Popular for Industry 4.0 deployments.",
      "highlight": "Industrial IoT optimized, 20K LUTs, 800MHz ARM"
    },
    "alternativeParts": [
      {
        "partNumber": "SF1S25",
        "brand": "Anlogic",
        "specifications": { "LUTs": "25,000", "processor": "ARM Cortex-A9 @ 800MHz" },
        "comparison": "SF1S20=><SF1S25: LUTs 25K > 20K (+25%), Package FBGA484 > FBGA400",
        "reason": "More LUTs and I/O for growth",
        "useCase": "Applications needing more FPGA resources",
        "link": "/anlogic/products/swift-series/sf1s25.html"
      },
      {
        "partNumber": "SF1S15",
        "brand": "Anlogic",
        "specifications": { "LUTs": "15,000", "processor": "ARM Cortex-A9 Single Core @ 667MHz" },
        "comparison": "SF1S20=><SF1S15: LUTs 15K < 20K (-25%), Processor single-core < dual-core",
        "reason": "Lower cost for simpler applications",
        "useCase": "Cost-sensitive IoT applications",
        "link": "/anlogic/products/swift-series/sf1s15.html"
      }
    ],
    "companionParts": [
      { "partNumber": "SWIFT-DK", "link": "#", "description": "SWIFT Development Kit", "category": "Development Tools" },
      { "partNumber": "JTAG-Debugger", "link": "#", "description": "ARM JTAG debugger", "category": "Development Tools" },
      { "partNumber": "USB-Programmer", "link": "/anlogic/products/development-tools/usb-programmer.html", "description": "USB programmer", "category": "Development Tools" }
    ],
    "faqs": [
      { "question": "What makes SF1S20 ideal for industrial IoT?", "answer": "SF1S20 balances 20K LUTs with dual-core ARM, optimized for industrial protocols and edge processing.", "decisionGuide": "Purpose-built for Industry 4.0.", "keywords": ["industrial IoT", "Industry 4.0", "optimized"] },
      { "question": "What industrial protocols are supported?", "answer": "FPGA can implement Modbus, Profinet, EtherCAT, and other industrial protocols alongside ARM software stacks.", "decisionGuide": "Flexible for various industrial networks.", "keywords": ["industrial protocols", "Modbus", "EtherCAT"] },
      { "question": "Is it suitable for edge gateway applications?", "answer": "Yes, 20K LUTs and dual-core ARM provide good resources for edge data processing and protocol translation.", "decisionGuide": "Good for industrial edge gateways.", "keywords": ["edge gateway", "protocol translation", "processing"] },
      { "question": "How does it compare to SF1S25?", "answer": "SF1S20 has 20% fewer LUTs but same processor, making it more cost-effective for moderate FPGA needs.", "decisionGuide": "Cost-optimized alternative to SF1S25.", "keywords": ["comparison", "SF1S25", "cost-effective"] },
      { "question": "What is the typical power consumption?", "answer": "Typical 2-4W depending on FPGA utilization, suitable for industrial environments.", "decisionGuide": "Efficient for industrial deployment.", "keywords": ["power", "consumption", "industrial"] }
    ]
  };
  
  swiftCategory.products.push(newProduct);
  swiftCategory.productCount = swiftCategory.products.length;
  
  // 保存更新后的products.json
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
  
  console.log('✅ Added SF1S20 to SWIFT series!');
  console.log(`📊 SWIFT series now has ${swiftCategory.products.length} products`);
} else {
  console.log('SWIFT series already has 6 or more products');
}
