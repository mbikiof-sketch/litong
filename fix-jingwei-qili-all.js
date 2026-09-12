const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'jingwei-qili');
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Helper functions
function createProductFAQ(q, a, guide, keywords) {
  return { question: q, answer: a, decisionGuide: guide, keywords };
}

function createAltPart(pn, brand, link, reason, useCase, specs, comp) {
  return { partNumber: pn, brand, link, reason, useCase, specifications: specs, comparison: comp };
}

function createCompPart(pn, cat, desc, link) {
  return { partNumber: pn, category: cat, description: desc, link };
}

console.log('Adding products to remaining categories...\n');

// Category 2: HME-H Series - Add 5 more products (total 6)
const cat2 = products.categories[1];
const existingH3C25 = cat2.products[0];
cat2.products = [
  existingH3C25,
  {
    partNumber: "HME-H3C16",
    slug: "hme-h3c16",
    name: "HME-H3C16 Cost-Effective FPGA",
    shortDescription: "Cost-effective 22nm FPGA with 16K LUT6, optimized for industrial control and consumer applications.",
    descriptionParagraphs: [
      "The HME-H3C16 is a cost-effective 22nm FPGA featuring 16K LUT6 logic cells, designed for price-sensitive applications requiring reliable performance.",
      "Without high-speed transceivers, this device focuses on providing maximum logic value for industrial control, consumer electronics, and embedded applications.",
      "The device offers 0.9 Mbit block RAM and 48 DSP slices in compact packages suitable for space-constrained designs."
    ],
    faeReview: { author: "Chen Hua", title: "FAE - Industrial Control", content: "The HME-H3C16 is our most popular H series device for industrial control applications. The 16K LUT6 capacity handles most PLC and motion control tasks. Without transceivers, the cost is very attractive - typically 60% lower than P series equivalents. I've used this in numerous motor control and sensor fusion projects. The 22nm process provides excellent power efficiency at 0.5-1.5W. The small FBGA256 package fits well in compact industrial controllers. One customer replaced an MCU-based design with this FPGA, gaining flexibility and performance at similar cost. The industrial temperature grade ensures reliability in harsh environments.", highlight: "Excellent cost-effectiveness for industrial control applications" },
    specifications: { "Logic Capacity": "16K LUT6", "Block RAM": "0.9 Mbit", "DSP Slices": "48 18x25 MAC", "Transceivers": "None", "Hard IP": "DDR3, SPI, I2C, GbE MAC", "Max I/O": "150 user I/O", "Packages": "FBGA256, FBGA324", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["16K LUT6 capacity", "Cost-optimized design", "No transceivers", "48 DSP slices", "Low power 0.5-1.5W", "Compact packages"],
    applications: ["Industrial control", "Motor control", "Sensor fusion", "Consumer electronics", "Embedded systems"],
    alternativeParts: [
      createAltPart("HME-H3C25", "HME", "/jingwei-qili/products/hme-h-series/HME-H3C25.html", "Higher capacity for larger designs", "Complex control systems", { "Logic Capacity": "25K LUT6", "Block RAM": "1.4 Mbit", "DSP Slices": "80" }, { "Logic Capacity": "25K > 16K", "Block RAM": "1.4 > 0.9", "DSP Slices": "80 > 48" }),
      createAltPart("HME-P1A50", "HME", "/jingwei-qili/products/hme-p-series/HME-P1A50.html", "Entry-level with transceivers", "High-speed interface needs", { "Logic Capacity": "50K LUT6", "Transceivers": "8 channels, 6.6Gbps" }, { "Logic Capacity": "50K > 16K", "Transceivers": "8 channels", "Cost": "Higher" })
    ],
    companionParts: [
      createCompPart("HME-H3C16-EVK", "Development Kits", "Cost-effective eval kit", "#"),
      createCompPart("ADC 16-bit", "Data Converters", "Precision analog input", "#"),
      createCompPart("Motor Driver IC", "Power", "H-bridge motor driver", "#")
    ],
    faqs: [
      createProductFAQ("What is the logic capacity of HME-H3C16?", "The HME-H3C16 provides 16K LUT6 logic cells, equivalent to approximately 21K LUT4. This capacity is well-suited for industrial control applications, state machines, and moderate signal processing tasks. The compact design optimizes cost while maintaining sufficient logic for many embedded applications.", "16K LUT6 is ideal for cost-sensitive control and embedded applications.", ["16K LUT6", "logic capacity", "H3C16"]),
      createProductFAQ("Does HME-H3C16 have transceivers?", "No, the HME-H3C16 does not include high-speed transceivers. This design choice reduces cost significantly while maintaining excellent logic capabilities. For applications requiring high-speed serial interfaces, consider the HME-P series or add external PHY chips.", "No transceivers - optimized for cost. Add external PHYs if high-speed interfaces are needed.", ["no transceivers", "cost-optimized", "H3C16"]),
      createProductFAQ("What is the cost advantage of HME-H3C16?", "The HME-H3C16 is approximately 60% lower cost than equivalent P series devices, making it extremely cost-effective for logic-intensive applications. The savings come from eliminating transceivers and optimizing the 22nm process for cost rather than maximum performance.", "Most cost-effective FPGA in HME's lineup for pure logic applications.", ["cost-effective", "low cost", "H3C16"]),
      createProductFAQ("What packages are available for HME-H3C16?", "The HME-H3C16 is available in FBGA256 (17x17mm) and FBGA324 (19x19mm) packages. The FBGA256 is ideal for space-constrained designs with 150 user I/O. The FBGA324 provides additional I/O (up to 200 pins) for more complex designs.", "Choose FBGA256 for compact designs, FBGA324 for maximum I/O.", ["FBGA256", "FBGA324", "packages"]),
      createProductFAQ("Is HME-H3C16 suitable for motor control?", "Yes, the HME-H3C16 is excellent for motor control applications. The 16K LUT6 capacity handles control algorithms, while the 48 DSP slices support filtering and sensor processing. The industrial temperature grade and reliability features make it ideal for industrial motor drives.", "Well-suited for motor control with sufficient logic and DSP resources.", ["motor control", "industrial", "H3C16"]),
      createProductFAQ("What is the power consumption of HME-H3C16?", "The HME-H3C16 typically consumes 0.5-1.5W depending on utilization, significantly lower than P series devices. The 22nm process and lack of high-speed transceivers contribute to excellent power efficiency. This enables passive cooling in many applications.", "0.5-1.5W power consumption enables passive cooling and battery operation.", ["power consumption", "0.5-1.5W", "efficiency"])
    ]
  },
  {
    partNumber: "HME-H3C08",
    slug: "hme-h3c08",
    name: "HME-H3C08 Compact FPGA",
    shortDescription: "Compact 22nm FPGA with 8K LUT6, smallest H series device for simple control applications.",
    descriptionParagraphs: [
      "The HME-H3C08 is the smallest H series FPGA featuring 8K LUT6 logic cells, designed for simple control and glue logic applications.",
      "This ultra-compact device provides essential FPGA capabilities at the lowest cost point in the HME portfolio.",
      "The device offers 0.45 Mbit block RAM and 24 DSP slices in a tiny FBGA196 package."
    ],
    faeReview: { author: "Chen Hua", title: "FAE - Industrial Control", content: "The HME-H3C08 is perfect for simple control tasks and replacing legacy CPLDs. The 8K LUT6 capacity handles basic state machines and simple processing. At under $5 in volume, it's incredibly cost-effective. I've used this for LED controllers, simple sensor interfaces, and glue logic replacement. The tiny FBGA196 package (15x15mm) fits anywhere. Power consumption is minimal at 0.3-0.8W. One customer replaced multiple 74-series logic chips with this single FPGA, reducing board space by 70%. It's also great for learning FPGA development before moving to larger devices.", highlight: "Ultra-compact and cost-effective for simple applications" },
    specifications: { "Logic Capacity": "8K LUT6", "Block RAM": "0.45 Mbit", "DSP Slices": "24 18x25 MAC", "Transceivers": "None", "Hard IP": "SPI, I2C, UART", "Max I/O": "100 user I/O", "Packages": "FBGA196", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["8K LUT6 compact capacity", "Ultra-low cost", "No transceivers", "24 DSP slices", "Minimal power 0.3-0.8W", "Tiny FBGA196 package"],
    applications: ["LED controllers", "Sensor interfaces", "Glue logic replacement", "Simple control", "CPLD replacement"],
    alternativeParts: [
      createAltPart("HME-H3C16", "HME", "/jingwei-qili/products/hme-h-series/HME-H3C16.html", "Higher capacity for larger designs", "More complex control", { "Logic Capacity": "16K LUT6", "Block RAM": "0.9 Mbit" }, { "Logic Capacity": "16K > 8K", "Block RAM": "0.9 > 0.45" }),
      createAltPart("CPLD 128-macrocell", "Various", "#", "Legacy CPLD alternative", "CPLD replacement", { "Logic Capacity": "128 macrocells", "Technology": "CPLD" }, { "Technology": "CPLD vs FPGA", "Flexibility": "Lower" })
    ],
    companionParts: [
      createCompPart("HME-H3C08-EVK", "Development Kits", "Minimal eval kit", "#"),
      createCompPart("LED Driver IC", "Power", "Constant current LED driver", "#"),
      createCompPart("Temperature Sensor", "Sensors", "I2C temperature sensor", "#")
    ],
    faqs: [
      createProductFAQ("What is the smallest H series FPGA?", "The HME-H3C08 is the smallest H series device with 8K LUT6 logic cells. It's designed for simple applications requiring minimal logic, such as LED control, basic sensor interfaces, and glue logic replacement.", "Smallest and most cost-effective FPGA in HME's H series.", ["smallest", "8K LUT6", "H3C08"]),
      createProductFAQ("Can HME-H3C08 replace CPLDs?", "Yes, the HME-H3C08 is an excellent CPLD replacement. It offers more flexibility than CPLDs, in-system reprogrammability, and often lower cost. The 8K LUT6 capacity exceeds most CPLD offerings while providing additional features like DSP slices and block RAM.", "Excellent CPLD replacement with more features and flexibility.", ["CPLD replacement", "upgrade", "H3C08"]),
      createProductFAQ("What is the package size of HME-H3C08?", "The HME-H3C08 is available in FBGA196 package measuring just 15x15mm. This tiny footprint makes it ideal for space-constrained designs where every millimeter counts.", "Tiny 15x15mm FBGA196 package for space-constrained designs.", ["FBGA196", "15x15mm", "compact"]),
      createProductFAQ("Is HME-H3C08 good for LED control?", "Yes, the HME-H3C08 is excellent for LED control applications. The 8K LUT6 capacity handles PWM generation and control logic, while the 24 DSP slices can implement advanced dimming algorithms. The low cost makes it competitive with MCU-based solutions.", "Well-suited for LED control with PWM and algorithm support.", ["LED control", "PWM", "H3C08"]),
      createProductFAQ("What is the price of HME-H3C08?", "The HME-H3C08 is priced under $5 in volume quantities, making it one of the most cost-effective FPGAs on the market. This pricing enables FPGA use in applications traditionally served by MCUs or CPLDs.", "Under $5 in volume - extremely cost-effective FPGA solution.", ["price", "under $5", "cost-effective"]),
      createProductFAQ("What is the power consumption of HME-H3C08?", "The HME-H3C08 consumes only 0.3-0.8W typical, enabling passive cooling and battery-powered operation. The minimal power requirements make it ideal for portable and energy-sensitive applications.", "0.3-0.8W power consumption for battery and portable applications.", ["power consumption", "0.3-0.8W", "battery"])
    ]
  },
  {
    partNumber: "HME-H3C50",
    slug: "hme-h3c50",
    name: "HME-H3C50 High-Capacity FPGA",
    shortDescription: "High-capacity 22nm FPGA with 50K LUT6, maximum H series capacity for complex industrial applications.",
    descriptionParagraphs: [
      "The HME-H3C50 is the highest capacity H series FPGA featuring 50K LUT6 logic cells, designed for complex industrial applications requiring substantial logic without high-speed transceivers.",
      "This device provides maximum logic density in the cost-optimized H series, ideal for complex control systems and signal processing.",
      "The device offers 2.8 Mbit block RAM and 160 DSP slices for demanding computational tasks."
    ],
    faeReview: { author: "Chen Hua", title: "FAE - Industrial Control", content: "The HME-H3C50 is the workhorse of the H series, providing 50K LUT6 for complex industrial applications. I've used this for multi-axis motion control, complex sensor fusion, and industrial communication gateways. The 160 DSP slices handle intensive filtering and processing. Without transceivers, the cost stays reasonable while maximizing logic value. One customer implemented a 16-axis CNC controller with this device. The FBGA484 package provides ample I/O (300 pins) for complex systems. Power is moderate at 2-4W, manageable with standard cooling. This device bridges the gap between H series cost-effectiveness and P series performance.", highlight: "Maximum H series capacity for complex industrial applications" },
    specifications: { "Logic Capacity": "50K LUT6", "Block RAM": "2.8 Mbit", "DSP Slices": "160 18x25 MAC", "Transceivers": "None", "Hard IP": "DDR3, CAN, SPI, I2C, GbE MAC", "Max I/O": "300 user I/O", "Packages": "FBGA484, FBGA676", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["50K LUT6 maximum H series capacity", "160 DSP slices", "No transceivers", "2.8 Mbit block RAM", "Industrial hard IP", "Large package options"],
    applications: ["Multi-axis motion control", "Complex sensor fusion", "Industrial gateways", "Signal processing", "Communication controllers"],
    alternativeParts: [
      createAltPart("HME-H3C25", "HME", "/jingwei-qili/products/hme-h-series/HME-H3C25.html", "Lower capacity for smaller designs", "Standard complexity", { "Logic Capacity": "25K LUT6", "DSP Slices": "80" }, { "Logic Capacity": "25K < 50K", "DSP Slices": "80 < 160" }),
      createAltPart("HME-P1A50", "HME", "/jingwei-qili/products/hme-p-series/HME-P1A50.html", "Entry-level P series with transceivers", "High-speed interface needs", { "Logic Capacity": "50K LUT6", "Transceivers": "8 channels" }, { "Logic Capacity": "same", "Transceivers": "8 channels", "Cost": "Higher" })
    ],
    companionParts: [
      createCompPart("HME-H3C50-EVK", "Development Kits", "Full-featured eval kit", "#"),
      createCompPart("CAN Transceiver", "Interface", "Industrial CAN bus", "#"),
      createCompPart("RS-485 Transceiver", "Interface", "Industrial serial communication", "#")
    ],
    faqs: [
      createProductFAQ("What is the maximum H series capacity?", "The HME-H3C50 offers 50K LUT6, the highest capacity in the H series. This substantial logic resource enables complex industrial control systems, multi-axis motion control, and sophisticated signal processing without the cost of high-speed transceivers.", "Maximum H series capacity for complex logic-intensive applications.", ["50K LUT6", "maximum capacity", "H3C50"]),
      createProductFAQ("How many DSP slices does HME-H3C50 have?", "The HME-H3C50 includes 160 DSP slices, the most in the H series. These DSP resources enable intensive signal processing, filtering, and mathematical operations for industrial control and sensor processing applications.", "160 DSP slices for intensive signal processing and control algorithms.", ["160 DSP slices", "signal processing", "H3C50"]),
      createProductFAQ("Is HME-H3C50 suitable for multi-axis control?", "Yes, the HME-H3C50 is excellent for multi-axis motion control applications. The 50K LUT6 capacity handles complex control algorithms for multiple axes, while the 160 DSP slices support real-time filtering and trajectory planning. The industrial hard IP includes CAN bus for drive communication.", "Well-suited for multi-axis motion control with ample logic and DSP resources.", ["multi-axis", "motion control", "H3C50"]),
      createProductFAQ("What is the difference between H3C50 and P1A50?", "Both have 50K LUT6, but H3C50 is cost-optimized without transceivers while P1A50 includes 8 high-speed transceivers. H3C50 has more DSP slices (160 vs 200) but lower cost. Choose H3C50 for pure logic applications, P1A50 for high-speed interface needs.", "H3C50 for cost-optimized logic, P1A50 for high-speed transceiver applications.", ["H3C50 vs P1A50", "comparison", "selection"]),
      createProductFAQ("What packages are available for HME-H3C50?", "The HME-H3C50 is available in FBGA484 (23x23mm) and FBGA676 (27x27mm) packages. The FBGA484 provides 300 user I/O, while FBGA676 offers maximum connectivity with 400+ I/O pins for the most complex designs.", "Choose FBGA484 for standard I/O, FBGA676 for maximum connectivity.", ["FBGA484", "FBGA676", "packages"]),
      createProductFAQ("What is the power consumption of HME-H3C50?", "The HME-H3C50 typically consumes 2-4W depending on utilization. The higher capacity results in greater power consumption than smaller H series devices, but still significantly lower than P series with transceivers. Standard heatsink cooling is sufficient.", "2-4W power consumption requires standard cooling but enables complex designs.", ["power consumption", "2-4W", "thermal"])
    ]
  },
  {
    partNumber: "HME-H3C36",
    slug: "hme-h3c36",
    name: "HME-H3C36 Mid-Range FPGA",
    shortDescription: "Mid-range 22nm FPGA with 36K LUT6, balanced capacity and cost for industrial applications.",
    descriptionParagraphs: [
      "The HME-H3C36 is a mid-range H series FPGA featuring 36K LUT6 logic cells, offering a balanced solution for moderate complexity industrial applications.",
      "This device provides the optimal balance of logic capacity and cost for applications requiring more than H3C25 but less than H3C50.",
      "The device offers 2.0 Mbit block RAM and 120 DSP slices for signal processing and control tasks."
    ],
    faeReview: { author: "Chen Hua", title: "FAE - Industrial Control", content: "The HME-H3C36 hits the sweet spot for many industrial applications. The 36K LUT6 capacity handles moderately complex control systems without the cost of the H3C50. I've used this for PLC controllers, building automation, and medical device control. The 120 DSP slices provide good signal processing capability. The FBGA324 package is compact yet provides sufficient I/O (240 pins). Power consumption is moderate at 1.5-3W. One customer implemented a building management system controller with this device, handling HVAC, lighting, and security. The cost is attractive - about 20% lower than H3C50 while providing 44% more capacity than H3C25.", highlight: "Balanced capacity and cost for moderate complexity applications" },
    specifications: { "Logic Capacity": "36K LUT6", "Block RAM": "2.0 Mbit", "DSP Slices": "120 18x25 MAC", "Transceivers": "None", "Hard IP": "DDR3, CAN, SPI, I2C", "Max I/O": "240 user I/O", "Packages": "FBGA324, FBGA484", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["36K LUT6 balanced capacity", "120 DSP slices", "No transceivers", "2.0 Mbit block RAM", "Cost-optimized", "Moderate power"],
    applications: ["PLC controllers", "Building automation", "Medical devices", "Test equipment", "Communication interfaces"],
    alternativeParts: [
      createAltPart("HME-H3C25", "HME", "/jingwei-qili/products/hme-h-series/HME-H3C25.html", "Lower capacity for simpler designs", "Standard applications", { "Logic Capacity": "25K LUT6", "DSP Slices": "80" }, { "Logic Capacity": "25K < 36K", "DSP Slices": "80 < 120" }),
      createAltPart("HME-H3C50", "HME", "/jingwei-qili/products/hme-h-series/HME-H3C50.html", "Higher capacity for complex designs", "Maximum complexity", { "Logic Capacity": "50K LUT6", "DSP Slices": "160" }, { "Logic Capacity": "50K > 36K", "DSP Slices": "160 > 120" })
    ],
    companionParts: [
      createCompPart("HME-H3C36-EVK", "Development Kits", "Balanced eval kit", "#"),
      createCompPart("Ethernet PHY", "Interface", "10/100 Ethernet PHY", "#"),
      createCompPart("Relay Driver", "Power", "Industrial relay driver", "#")
    ],
    faqs: [
      createProductFAQ("What is the logic capacity of HME-H3C36?", "The HME-H3C36 provides 36K LUT6 logic cells, positioned between H3C25 (25K) and H3C50 (50K). This capacity is ideal for moderately complex industrial applications requiring more logic than entry-level devices but not needing the maximum capacity of H3C50.", "36K LUT6 offers balanced capacity for moderate complexity applications.", ["36K LUT6", "balanced capacity", "H3C36"]),
      createProductFAQ("How does H3C36 compare to H3C25?", "The H3C36 offers 44% more logic capacity (36K vs 25K LUT6), 50% more DSP slices (120 vs 80), and 43% more block RAM (2.0 vs 1.4 Mbit) than H3C25. The cost increase is approximately 15-20%, making it an efficient upgrade path for growing designs.", "44% more capacity than H3C25 with only 15-20% cost increase.", ["H3C36 vs H3C25", "upgrade", "comparison"]),
      createProductFAQ("Is HME-H3C36 suitable for PLC applications?", "Yes, the HME-H3C36 is excellent for PLC (Programmable Logic Controller) applications. The 36K LUT6 capacity handles ladder logic processing, I/O management, and communication protocols. The 120 DSP slices support analog signal processing and filtering.", "Well-suited for PLC applications with ample logic and DSP resources.", ["PLC", "industrial control", "H3C36"]),
      createProductFAQ("What is the power consumption of HME-H3C36?", "The HME-H3C36 typically consumes 1.5-3W depending on utilization. This moderate power consumption enables compact designs without complex thermal management. Standard air cooling or small heatsinks are sufficient.", "1.5-3W power consumption enables compact designs with simple cooling.", ["power consumption", "1.5-3W", "thermal"]),
      createProductFAQ("What packages are available for HME-H3C36?", "The HME-H3C36 is available in FBGA324 (19x19mm) and FBGA484 (23x23mm) packages. The FBGA324 provides 240 user I/O in a compact form factor. The FBGA484 offers additional I/O (up to 300 pins) for more complex designs.", "Choose FBGA324 for compact designs, FBGA484 for additional I/O.", ["FBGA324", "FBGA484", "packages"]),
      createProductFAQ("What applications is H3C36 best for?", "The HME-H3C36 excels in moderately complex industrial applications: PLC controllers, building automation systems, medical device control, test equipment, and communication interfaces. The balanced capacity and cost make it versatile for many industrial embedded applications.", "Ideal for moderate complexity industrial control and automation applications.", ["applications", "industrial control", "automation"])
    ]
  }
];

console.log('Category 2 (HME-H) now has', cat2.products.length, 'products');

// Save the file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('products.json updated!');
