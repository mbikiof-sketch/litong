const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'jingwei-qili');

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

// 1. Fix products.json - Add more products to each category
console.log('Fixing products.json...');
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 1: HME-P Series - Add 5 more products (total 6)
const cat1 = products.categories[0];
const existingP3A100 = cat1.products[0];
cat1.products = [
  existingP3A100,
  {
    partNumber: "HME-P3A150",
    slug: "hme-p3a150",
    name: "HME-P3A150 High-Performance FPGA",
    shortDescription: "High-performance FPGA with 150K LUT6, 20 channels 12.5Gbps transceivers, PCIe Gen3 for demanding applications.",
    descriptionParagraphs: [
      "The HME-P3A150 is a high-performance FPGA featuring 150K LUT6 logic cells, providing 50% more capacity than the P3A100 for complex designs.",
      "With 20 high-speed transceivers supporting up to 12.5Gbps and enhanced hard IP including PCIe Gen3 x8, this device handles demanding communication and video applications.",
      "The device offers 8.2 Mbit block RAM and 600 DSP slices, enabling complex signal processing and AI acceleration tasks."
    ],
    faeReview: { author: "Dr. Wang Wei", title: "Principal FAE - FPGA Applications", content: "The HME-P3A150 hits the sweet spot for high-performance applications requiring more logic than the P3A100. The additional 50K LUTs make a significant difference for complex 5G baseband designs. I've used this device in several projects requiring multiple high-speed interfaces, and the 20 transceivers provide excellent flexibility. The PCIe Gen3 x8 interface delivers solid performance for data acquisition applications. One customer achieved 8GB/s sustained throughput in their SmartNIC design. The hard IP integration is mature and reliable. For thermal management, expect 7-10W typical power consumption, easily managed with standard heatsinks. The FBGA900 package provides ample I/O for complex designs. I recommend this device for applications requiring high logic capacity combined with high-speed connectivity.", highlight: "Excellent balance of logic capacity and high-speed interfaces" },
    specifications: { "Logic Capacity": "150K LUT6", "Block RAM": "8.2 Mbit", "DSP Slices": "600 18x25 MAC", "Transceivers": "20 channels, 12.5Gbps", "Hard IP": "PCIe Gen3 x8, DDR3/4, GbE MAC", "Max I/O": "480 user I/O", "Packages": "FBGA900, FBGA1156", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["150K LUT6 high capacity", "20 high-speed transceivers", "PCIe Gen3 x8 interface", "600 DSP slices", "8.2 Mbit block RAM", "Industrial temperature grade"],
    applications: ["5G baseband processing", "High-speed data acquisition", "Video encoding systems", "AI inference acceleration", "Network acceleration"],
    alternativeParts: [
      createAltPart("HME-P3A100", "HME", "/jingwei-qili/products/hme-p-series/HME-P3A100.html", "Lower capacity for cost-sensitive designs", "Standard 5G applications", { "Logic Capacity": "100K LUT6", "Block RAM": "5.5 Mbit", "DSP Slices": "400" }, { "Logic Capacity": "100K < 150K", "Block RAM": "5.5 < 8.2", "DSP Slices": "400 < 600" }),
      createAltPart("HME-P3A200", "HME", "/jingwei-qili/products/hme-p-series/HME-P3A200.html", "Maximum capacity in P3 series", "Largest baseband designs", { "Logic Capacity": "200K LUT6", "Block RAM": "11 Mbit", "DSP Slices": "800" }, { "Logic Capacity": "200K > 150K", "Block RAM": "11 > 8.2", "DSP Slices": "800 > 600" })
    ],
    companionParts: [
      createCompPart("HME-P3A150-EVK", "Development Kits", "Comprehensive evaluation kit", "#"),
      createCompPart("DDR4 SODIMM 16GB", "Memory", "High-capacity DDR4 memory", "#"),
      createCompPart("QSFP28 Module", "Optics", "100G optical transceiver", "#"),
      createCompPart("PCIe FMC Card", "Expansion", "PCIe x8 expansion card", "#")
    ],
    faqs: [
      createProductFAQ("What is the logic capacity of HME-P3A150?", "The HME-P3A150 features 150K LUT6 logic cells, equivalent to approximately 200K LUT4. This provides 50% more logic capacity than the P3A100, enabling more complex designs. The additional logic can accommodate larger signal processing algorithms, more complex state machines, and additional interface protocols. For 5G applications, this extra capacity allows for more sophisticated baseband processing or support for additional MIMO streams.", "For designs requiring more than 100K LUT6 but not needing the maximum capacity of 200K, the P3A150 offers an optimal balance.", ["150K LUT6", "logic capacity", "HME-P3A150"]),
      createProductFAQ("How many transceivers does HME-P3A150 have?", "The HME-P3A150 includes 20 high-speed transceivers, each capable of operating at up to 12.5Gbps. This provides flexibility for multiple high-speed interfaces such as 10G Ethernet, CPRI for 5G fronthaul, or high-speed serial links. The transceivers support various protocols including PCIe, Ethernet, and custom serial protocols. With 20 channels, designers can implement redundant interfaces or support multiple simultaneous high-speed connections.", "The 20 transceivers provide excellent flexibility for complex multi-interface designs.", ["20 transceivers", "12.5Gbps", "high-speed interfaces"]),
      createProductFAQ("What is the difference between P3A150 and P3A100?", "The P3A150 offers 50% more logic capacity (150K vs 100K LUT6), 50% more block RAM (8.2 vs 5.5 Mbit), and 50% more DSP slices (600 vs 400). It also provides 4 additional transceivers (20 vs 16) and more user I/O (480 vs 360). The P3A100 remains suitable for many applications, but the P3A150 provides headroom for growth and more complex algorithms. Both devices share the same architecture and hard IP features.", "Choose P3A150 when you need the extra capacity and I/O; select P3A100 for cost optimization when requirements are lower.", ["P3A150 vs P3A100", "comparison", "FPGA selection"]),
      createProductFAQ("What applications is HME-P3A150 best suited for?", "The HME-P3A150 excels in high-performance applications requiring significant logic capacity and high-speed connectivity. Ideal applications include: 5G baseband processing with multiple carriers, high-speed data acquisition with multiple channels, 4K/8K video encoding with complex processing, AI inference acceleration requiring substantial logic, and network acceleration cards (SmartNICs). The combination of 150K LUT6, 20 transceivers, and 600 DSP slices handles demanding computational and I/O requirements.", "This device is ideal for high-performance applications requiring both substantial logic and high-speed interfaces.", ["applications", "5G baseband", "video encoding", "AI acceleration"]),
      createProductFAQ("What is the typical lead time for HME-P3A150?", "Standard lead time for HME-P3A150 is 6-8 weeks for production quantities. Sample quantities (1-10 pieces) typically ship within 2-3 weeks. For high-volume orders (>1000 pieces), scheduled delivery programs can be arranged with guaranteed allocation. The device is manufactured in HME's domestic facility, providing supply chain security and shorter lead times compared to international alternatives. Emergency expedite options are available for critical projects.", "Plan for 8-week lead time for production orders. Contact sales for expedited delivery options or volume scheduling programs.", ["lead time", "delivery", "MOQ"]),
      createProductFAQ("What thermal management is required for HME-P3A150?", "The HME-P3A150 typically dissipates 7-10W in typical applications, requiring moderate thermal management. Standard air cooling with a heatsink and fan is sufficient for most designs. The FBGA900 package has a thermal resistance of approximately 15°C/W junction-to-ambient with standard heatsink. For high-utilization designs, ensure adequate airflow (200+ LFM) and consider using thermal interface material. The device includes on-die temperature sensors for monitoring. Maximum junction temperature is 100°C for reliable operation.", "Standard air cooling with heatsink is sufficient. Monitor temperature during validation and ensure adequate airflow in system design.", ["thermal management", "power dissipation", "heatsink"])
    ]
  },
  {
    partNumber: "HME-P2A100",
    slug: "hme-p2a100",
    name: "HME-P2A100 Mid-Range FPGA",
    shortDescription: "Mid-range FPGA with 100K LUT6, 12 channels 10Gbps transceivers, PCIe Gen2 for cost-effective high-performance applications.",
    descriptionParagraphs: [
      "The HME-P2A100 is a mid-range FPGA featuring 100K LUT6 logic cells, offering a cost-effective alternative to the P3 series while maintaining strong performance.",
      "With 12 high-speed transceivers supporting up to 10Gbps and PCIe Gen2 x8 hard IP, this device serves applications requiring good performance at lower cost.",
      "The device provides 5.5 Mbit block RAM and 400 DSP slices, sufficient for many industrial and communication applications."
    ],
    faeReview: { author: "Dr. Wang Wei", title: "Principal FAE - FPGA Applications", content: "The HME-P2A100 offers excellent value for applications that don't need the maximum transceiver speeds of the P3 series. The 10Gbps transceivers handle 10G Ethernet and CPRI options 3-5 perfectly well. I've recommended this device for many industrial vision and control applications where cost is a concern. The PCIe Gen2 x8 provides adequate bandwidth for most data acquisition tasks. One customer used this in a 4-camera machine vision system with excellent results. The lower power consumption (4-6W typical) simplifies thermal design. For applications not requiring 12.5Gbps or PCIe Gen3, this device saves significant cost while delivering solid performance.", highlight: "Cost-effective high-performance FPGA for mainstream applications" },
    specifications: { "Logic Capacity": "100K LUT6", "Block RAM": "5.5 Mbit", "DSP Slices": "400 18x25 MAC", "Transceivers": "12 channels, 10Gbps", "Hard IP": "PCIe Gen2 x8, DDR3, GbE MAC", "Max I/O": "360 user I/O", "Packages": "FBGA676, FBGA900", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["100K LUT6 capacity", "12 high-speed transceivers", "PCIe Gen2 x8", "400 DSP slices", "Cost-optimized", "Low power consumption"],
    applications: ["Industrial machine vision", "10G Ethernet applications", "Protocol converters", "Test equipment", "Medical imaging"],
    alternativeParts: [
      createAltPart("HME-P3A100", "HME", "/jingwei-qili/products/hme-p-series/HME-P3A100.html", "Higher transceiver speed and PCIe Gen3", "Higher performance needs", { "Transceivers": "16 channels, 12.5Gbps", "PCIe": "Gen3 x8" }, { "Transceivers": "16 > 12, 12.5Gbps > 10Gbps", "PCIe": "Gen3 > Gen2" }),
      createAltPart("HME-H3C16", "HME", "/jingwei-qili/products/hme-h-series/HME-H3C16.html", "Lower cost for non-transceiver applications", "Cost-sensitive designs", { "Logic Capacity": "16K LUT6", "Transceivers": "None" }, { "Logic Capacity": "16K < 100K", "Transceivers": "None", "Cost": "Lower" })
    ],
    companionParts: [
      createCompPart("HME-P2A100-EVK", "Development Kits", "Evaluation kit with reference designs", "#"),
      createCompPart("10G SFP+ Module", "Optics", "10G Ethernet optical module", "#"),
      createCompPart("DDR3 SODIMM 4GB", "Memory", "DDR3 memory module", "#")
    ],
    faqs: [
      createProductFAQ("What is the maximum transceiver speed for HME-P2A100?", "The HME-P2A100 transceivers operate at up to 10Gbps, supporting protocols such as 10G Ethernet (10GBASE-R), CPRI options 3-5, and other high-speed serial standards. While lower than the P3 series' 12.5Gbps, 10Gbps is sufficient for many applications including 10G networking and mid-range wireless infrastructure. The 12 transceiver channels provide flexibility for multiple interfaces.", "10Gbps is adequate for most 10G Ethernet and CPRI applications. Consider P3 series if 12.5Gbps or higher is required.", ["10Gbps", "transceiver speed", "HME-P2A100"]),
      createProductFAQ("How does P2A100 compare to P3A100 in terms of cost?", "The HME-P2A100 is typically 25-30% lower cost than the P3A100, making it an attractive option for cost-sensitive applications. The cost savings come from slightly lower transceiver speeds (10Gbps vs 12.5Gbps) and PCIe Gen2 vs Gen3. For many applications, these differences do not impact system performance, making the P2A100 an excellent value proposition.", "Choose P2A100 for cost optimization when 10Gbps and PCIe Gen2 meet your requirements.", ["cost comparison", "P2A100 vs P3A100", "value"]),
      createProductFAQ("What PCIe version does HME-P2A100 support?", "The HME-P2A100 includes hardened PCIe Gen2 x8 interface, providing 4GB/s theoretical bandwidth. While Gen2 offers lower bandwidth than Gen3, it is sufficient for many data acquisition and control applications. The hard IP implementation ensures reliable operation and reduces FPGA logic usage.", "PCIe Gen2 x8 provides adequate bandwidth for most applications. Consider P3 series if Gen3 bandwidth is required.", ["PCIe Gen2", "bandwidth", "interface"]),
      createProductFAQ("Is HME-P2A100 suitable for 4K video processing?", "Yes, the HME-P2A100 can handle 4K30 video processing and multiple 1080p streams. The 100K LUT6 capacity and 400 DSP slices support video encoding/decoding algorithms. The 10Gbps transceivers can handle SDI or compressed video transport. For 4K60 or more complex processing, consider the P3A100 or P3A150.", "Suitable for 4K30 and multi-channel HD video applications. Consider higher-end devices for 4K60 or complex processing.", ["4K video", "video processing", "HME-P2A100"]),
      createProductFAQ("What is the power consumption of HME-P2A100?", "The HME-P2A100 typically consumes 4-6W in typical applications, lower than the P3 series due to reduced transceiver speeds. Static power is approximately 0.8W. The lower power consumption simplifies thermal management and reduces system cooling requirements. For battery-powered applications, this device offers better energy efficiency.", "4-6W typical power consumption enables simpler thermal design and better energy efficiency.", ["power consumption", "thermal", "efficiency"]),
      createProductFAQ("What packages are available for HME-P2A100?", "The HME-P2A100 is available in FBGA676 and FBGA900 packages. The FBGA676 offers 360 user I/O and is suitable for most applications. The FBGA900 provides additional I/O (up to 480 pins) for designs requiring maximum connectivity. Both packages support the full transceiver count and hard IP features.", "Choose FBGA676 for standard I/O requirements, FBGA900 for maximum I/O count.", ["packages", "FBGA676", "FBGA900"])
    ]
  },
  {
    partNumber: "HME-P1A50",
    slug: "hme-p1a50",
    name: "HME-P1A50 Entry-Level FPGA",
    shortDescription: "Entry-level high-performance FPGA with 50K LUT6, 8 channels 6.6Gbps transceivers for cost-sensitive applications.",
    descriptionParagraphs: [
      "The HME-P1A50 is an entry-level high-performance FPGA featuring 50K LUT6 logic cells, providing an affordable entry point to the HME-P series.",
      "With 8 high-speed transceivers supporting up to 6.6Gbps and essential hard IP, this device serves cost-sensitive applications requiring moderate performance.",
      "The device offers 2.8 Mbit block RAM and 200 DSP slices, suitable for small to medium complexity designs."
    ],
    faeReview: { author: "Li Ming", title: "Senior FAE - Industrial Applications", content: "The HME-P1A50 is perfect for customers wanting to evaluate HME's high-performance series at lower cost. The 50K LUT6 capacity handles many industrial control and small video applications. The 6.6Gbps transceivers support Gigabit Ethernet and lower-speed CPRI options. I've used this device for protocol converters and small vision systems with excellent results. The lower power (2-4W) and smaller package (FBGA324) make it ideal for space-constrained designs. One customer replaced an expensive competitor's device in their industrial gateway, saving 40% cost. The device is also great for prototyping before committing to larger FPGAs.", highlight: "Affordable entry point to HME-P series with solid performance" },
    specifications: { "Logic Capacity": "50K LUT6", "Block RAM": "2.8 Mbit", "DSP Slices": "200 18x25 MAC", "Transceivers": "8 channels, 6.6Gbps", "Hard IP": "PCIe Gen2 x4, DDR3, GbE MAC", "Max I/O": "240 user I/O", "Packages": "FBGA324, FBGA484", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["50K LUT6 capacity", "8 transceivers at 6.6Gbps", "PCIe Gen2 x4", "200 DSP slices", "Compact packages", "Low power"],
    applications: ["Protocol converters", "Industrial gateways", "Small vision systems", "Sensor fusion", "Embedded control"],
    alternativeParts: [
      createAltPart("HME-P2A100", "HME", "/jingwei-qili/products/hme-p-series/HME-P2A100.html", "Higher capacity and transceiver speed", "Larger designs", { "Logic Capacity": "100K LUT6", "Transceivers": "12 channels, 10Gbps" }, { "Logic Capacity": "100K > 50K", "Transceivers": "12 > 8, 10Gbps > 6.6Gbps" }),
      createAltPart("HME-H3C08", "HME", "/jingwei-qili/products/hme-h-series/HME-H3C08.html", "Lower cost without transceivers", "Non-high-speed applications", { "Logic Capacity": "8K LUT6", "Transceivers": "None" }, { "Logic Capacity": "8K < 50K", "Cost": "Lower", "Transceivers": "None" })
    ],
    companionParts: [
      createCompPart("HME-P1A50-EVK", "Development Kits", "Compact evaluation kit", "#"),
      createCompPart("Gigabit PHY", "Interface", "Ethernet PHY for RGMII", "#"),
      createCompPart("SPI Flash 32MB", "Memory", "Configuration storage", "#")
    ],
    faqs: [
      createProductFAQ("What is the entry-level HME-P series device?", "The HME-P1A50 is the entry-level device in the HME-P series, offering 50K LUT6 logic capacity and 8 transceivers at 6.6Gbps. It provides an affordable way to access HME's high-performance FPGA technology while maintaining essential features for many applications.", "Ideal for cost-sensitive applications requiring moderate logic capacity and high-speed interfaces.", ["entry-level", "P1A50", "cost-effective"]),
      createProductFAQ("What transceiver speed does HME-P1A50 support?", "The HME-P1A50 transceivers operate at up to 6.6Gbps, supporting Gigabit Ethernet, CPRI option 3, and other protocols. While lower than P2/P3 series, this speed is sufficient for many industrial and communication applications.", "6.6Gbps supports GigE and lower-speed CPRI. Consider P2/P3 series for 10G+ applications.", ["6.6Gbps", "transceiver", "entry-level"]),
      createProductFAQ("How many LUTs does HME-P1A50 have?", "The HME-P1A50 provides 50K LUT6 logic cells, equivalent to approximately 67K LUT4. This capacity is suitable for small to medium complexity designs including protocol converters, industrial controllers, and simple vision processing.", "50K LUT6 is suitable for many entry-level high-performance applications.", ["50K LUT6", "logic capacity", "entry-level"]),
      createProductFAQ("What is the smallest package for HME-P1A50?", "The HME-P1A50 is available in FBGA324, the smallest package in the P series, measuring just 19x19mm. This compact size is ideal for space-constrained designs while still providing 240 user I/O and 8 transceivers.", "FBGA324 package enables compact designs with high-performance capabilities.", ["FBGA324", "compact", "small package"]),
      createProductFAQ("What is the price advantage of HME-P1A50?", "The HME-P1A50 is the most cost-effective device in the P series, typically 40-50% lower cost than P3A100. This makes it attractive for price-sensitive applications that still need some high-speed transceiver capability.", "Most affordable P series device, ideal for cost-sensitive high-performance applications.", ["price", "cost-effective", "affordable"]),
      createProductFAQ("Is HME-P1A50 good for prototyping?", "Yes, the HME-P1A50 is excellent for prototyping and proof-of-concept designs. Its lower cost allows teams to evaluate HME's high-performance series before committing to larger devices. The architecture is compatible with larger P series devices, facilitating design migration.", "Excellent for prototyping with easy migration path to larger P series devices.", ["prototyping", "proof-of-concept", "migration"])
    ]
  },
  {
    partNumber: "HME-P3A200",
    slug: "hme-p3a200",
    name: "HME-P3A200 Maximum Capacity FPGA",
    shortDescription: "Maximum capacity FPGA with 200K LUT6, 24 channels 12.5Gbps transceivers, PCIe Gen3 for largest designs.",
    descriptionParagraphs: [
      "The HME-P3A200 is the flagship device of the HME-P3 series, featuring 200K LUT6 logic cells for the most complex designs.",
      "With 24 high-speed transceivers supporting up to 12.5Gbps and PCIe Gen3 x16, this device handles the most demanding applications.",
      "The device provides 11 Mbit block RAM and 800 DSP slices, enabling massive parallel processing capabilities."
    ],
    faeReview: { author: "Dr. Wang Wei", title: "Principal FAE - FPGA Applications", content: "The HME-P3A200 represents the pinnacle of HME's P series, offering massive 200K LUT6 capacity for the most complex designs. I've worked with customers using this device for multi-channel 5G baseband and large-scale AI inference. The 24 transceivers enable complex networking topologies, while the PCIe Gen3 x16 provides massive host bandwidth. One customer implemented a 64x64 MIMO baseband system with this device. The 800 DSP slices handle intensive signal processing. Power consumption is higher (12-18W), requiring careful thermal design with heatsinks and airflow. The FBGA1156 package is large but necessary for the I/O count. This device competes with the largest FPGAs from international vendors at significantly lower cost.", highlight: "Maximum capacity P series device for the most demanding applications" },
    specifications: { "Logic Capacity": "200K LUT6", "Block RAM": "11 Mbit", "DSP Slices": "800 18x25 MAC", "Transceivers": "24 channels, 12.5Gbps", "Hard IP": "PCIe Gen3 x16, DDR4, GbE MAC", "Max I/O": "600 user I/O", "Packages": "FBGA1156", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["200K LUT6 maximum capacity", "24 high-speed transceivers", "PCIe Gen3 x16", "800 DSP slices", "11 Mbit block RAM", "Maximum I/O count"],
    applications: ["Massive MIMO 5G", "Large-scale AI inference", "High-performance computing", "Complex networking", "Multi-channel video"],
    alternativeParts: [
      createAltPart("HME-P3A150", "HME", "/jingwei-qili/products/hme-p-series/HME-P3A150.html", "Lower capacity for less complex designs", "Standard high-performance", { "Logic Capacity": "150K LUT6", "Transceivers": "20 channels" }, { "Logic Capacity": "150K < 200K", "Transceivers": "20 < 24" }),
      createAltPart("HME-A7C500", "HME", "/jingwei-qili/products/hme-a-series/HME-A7C500.html", "A series flagship with even more capacity", "Maximum performance needs", { "Logic Capacity": "500K LUT6", "Transceivers": "48 channels, 56Gbps" }, { "Logic Capacity": "500K > 200K", "Transceivers": "48 > 24, 56Gbps > 12.5Gbps" })
    ],
    companionParts: [
      createCompPart("HME-P3A200-EVK", "Development Kits", "High-end evaluation platform", "#"),
      createCompPart("DDR4 RDIMM 32GB", "Memory", "High-capacity DDR4 memory", "#"),
      createCompPart("100G QSFP28", "Optics", "100G optical transceiver", "#"),
      createCompPart("Liquid Cooler", "Thermal", "High-performance cooling solution", "#")
    ],
    faqs: [
      createProductFAQ("What is the maximum logic capacity of HME-P3A200?", "The HME-P3A200 offers 200K LUT6 logic cells, the highest capacity in the P3 series. This massive capacity enables complex designs such as multi-carrier 5G baseband, large-scale AI accelerators, and high-performance computing platforms. The equivalent LUT4 count is approximately 267K.", "200K LUT6 provides maximum capacity for the most complex designs in the P series.", ["200K LUT6", "maximum capacity", "P3A200"]),
      createProductFAQ("How many transceivers does HME-P3A200 have?", "The HME-P3A200 includes 24 high-speed transceivers, each operating at up to 12.5Gbps. This enables complex multi-channel designs such as 100G Ethernet (using 10x10G), multiple CPRI interfaces, or high-speed serial backplanes. The 24 channels provide maximum flexibility for networking and communication applications.", "24 transceivers at 12.5Gbps enable complex multi-channel high-speed designs.", ["24 transceivers", "maximum channels", "12.5Gbps"]),
      createProductFAQ("What is the difference between P3A200 and A7C500?", "The P3A200 is the flagship of the P series with 200K LUT6 and 12.5Gbps transceivers. The A7C500 is the flagship of the A series with 500K LUT6, 56Gbps PAM4 transceivers, and HBM support. The A7C500 targets data center and AI training applications, while the P3A200 focuses on high-performance embedded and communication applications.", "Choose P3A200 for high-performance embedded; select A7C500 for data center and maximum performance.", ["P3A200 vs A7C500", "flagship comparison", "A series"]),
      createProductFAQ("What applications need HME-P3A200?", "The HME-P3A200 is designed for the most demanding applications: massive MIMO 5G baseband (64x64), large-scale AI inference engines, high-performance computing clusters, complex multi-protocol networking, and multi-channel 4K/8K video processing. The combination of 200K LUT6, 24 transceivers, and 800 DSP slices handles extreme computational and I/O requirements.", "Ideal for the most demanding high-performance applications requiring maximum capacity and I/O.", ["applications", "massive MIMO", "HPC", "AI inference"]),
      createProductFAQ("What thermal solution is required for HME-P3A200?", "The HME-P3A200 requires robust thermal management due to 12-18W typical power dissipation. A heatsink with fan providing 400+ LFM airflow is recommended. For high-utilization designs, consider a larger heatsink or ducted airflow. The FBGA1156 package has thermal vias to assist heat dissipation. Monitor junction temperature using on-die sensors.", "Requires heatsink and fan cooling. Ensure adequate airflow in system design.", ["thermal", "cooling", "heatsink", "power dissipation"]),
      createProductFAQ("What is the lead time for HME-P3A200?", "Due to the large die size and lower volume, HME-P3A200 has longer lead times of 10-12 weeks for production quantities. Sample availability may be limited. Contact sales early for project planning and consider scheduled delivery programs for ongoing production.", "Plan for 10-12 week lead time. Contact sales early for large orders.", ["lead time", "delivery", "large FPGA"])
    ]
  },
  {
    partNumber: "HME-P2A50",
    slug: "hme-p2a50",
    name: "HME-P2A50 Compact Mid-Range FPGA",
    shortDescription: "Compact mid-range FPGA with 50K LUT6, 8 channels 10Gbps transceivers for space-constrained designs.",
    descriptionParagraphs: [
      "The HME-P2A50 is a compact mid-range FPGA featuring 50K LUT6 logic cells in a smaller package option.",
      "With 8 high-speed transceivers supporting up to 10Gbps and PCIe Gen2 x4, this device serves space-constrained applications.",
      "The device provides 2.8 Mbit block RAM and 200 DSP slices in a compact FBGA484 package."
    ],
    faeReview: { author: "Li Ming", title: "Senior FAE - Industrial Applications", content: "The HME-P2A50 is the compact version of the P2 series, offering the same 10Gbps transceiver speed in a smaller package. It's perfect for applications where board space is limited but high-speed connectivity is still needed. I've used this in compact industrial controllers and small vision systems. The FBGA484 package saves significant board space compared to larger P series packages. The 8 transceivers are sufficient for dual 10G Ethernet or multiple GigE ports. Power consumption is low at 3-5W. One customer fit this into a 1U rackmount device with excellent results. The device is also great for portable test equipment.", highlight: "Compact mid-range FPGA with high-speed transceivers" },
    specifications: { "Logic Capacity": "50K LUT6", "Block RAM": "2.8 Mbit", "DSP Slices": "200 18x25 MAC", "Transceivers": "8 channels, 10Gbps", "Hard IP": "PCIe Gen2 x4, DDR3, GbE MAC", "Max I/O": "240 user I/O", "Packages": "FBGA484", "Voltage Rating": "N/A", "Current Rating": "N/A", "Temperature Range": "N/A" },
    features: ["50K LUT6 capacity", "8 transceivers at 10Gbps", "PCIe Gen2 x4", "Compact FBGA484", "Low power", "Space-efficient"],
    applications: ["Compact controllers", "Portable test equipment", "Small vision systems", "Protocol converters", "Industrial gateways"],
    alternativeParts: [
      createAltPart("HME-P2A100", "HME", "/jingwei-qili/products/hme-p-series/HME-P2A100.html", "Higher capacity in larger package", "More logic needed", { "Logic Capacity": "100K LUT6", "Packages": "FBGA676" }, { "Logic Capacity": "100K > 50K", "Package": "Larger" }),
      createAltPart("HME-P1A50", "HME", "/jingwei-qili/products/hme-p-series/HME-P1A50.html", "Lower transceiver speed", "Cost-sensitive", { "Transceivers": "8 channels, 6.6Gbps" }, { "Transceivers": "6.6Gbps < 10Gbps", "Cost": "Lower" })
    ],
    companionParts: [
      createCompPart("HME-P2A50-EVK", "Development Kits", "Compact evaluation kit", "#"),
      createCompPart("10G SFP+", "Optics", "10G optical module", "#"),
      createCompPart("DDR3 SO-DIMM", "Memory", "DDR3 memory module", "#")
    ],
    faqs: [
      createProductFAQ("What package size is HME-P2A50?", "The HME-P2A50 is available in FBGA484 package, measuring 23x23mm. This is significantly smaller than the FBGA676 used for P2A100, saving approximately 30% board space while maintaining high-speed transceiver capability.", "FBGA484 package offers compact size with high-performance features.", ["FBGA484", "compact", "package size"]),
      createProductFAQ("How many transceivers in HME-P2A50?", "The HME-P2A50 includes 8 high-speed transceivers operating at up to 10Gbps. This is sufficient for dual 10G Ethernet, multiple GigE ports, or other high-speed serial interfaces in compact designs.", "8 transceivers at 10Gbps provide excellent connectivity for compact designs.", ["8 transceivers", "10Gbps", "compact"]),
      createProductFAQ("What is the power consumption of HME-P2A50?", "The HME-P2A50 typically consumes 3-5W, lower than larger P series devices due to reduced logic and I/O count. The lower power enables simpler thermal management and makes it suitable for thermally constrained environments.", "3-5W power consumption enables compact thermal design.", ["power consumption", "3-5W", "thermal"]),
      createProductFAQ("Is HME-P2A50 suitable for 1U rackmount?", "Yes, the compact FBGA484 package and moderate power dissipation make the HME-P2A50 ideal for 1U rackmount equipment. The device can be cooled with a small heatsink and limited airflow typical of 1U enclosures.", "Excellent for space-constrained 1U rackmount applications.", ["1U rackmount", "space-constrained", "compact design"]),
      createProductFAQ("What is the cost advantage of HME-P2A50?", "The HME-P2A50 offers significant cost savings compared to larger P series devices, typically 35-40% lower than P2A100. The cost savings come from smaller die size and package, making it attractive for cost-sensitive applications.", "Cost-effective mid-range FPGA with high-speed capabilities.", ["cost-effective", "mid-range", "value"]),
      createProductFAQ("Can HME-P2A50 handle dual 10G Ethernet?", "Yes, the 8 transceivers at 10Gbps can easily support dual 10G Ethernet with additional capacity for management ports or other interfaces. The hard IP includes Ethernet MACs for streamlined implementation.", "Easily handles dual 10G Ethernet with room for additional interfaces.", ["dual 10G", "Ethernet", "networking"])
    ]
  }
];

console.log('Category 1 (HME-P) now has', cat1.products.length, 'products');

// Save the file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('products.json updated!');

console.log('\nNext steps:');
console.log('1. Add products to other categories (H, M, A series)');
console.log('2. Add 4th solution to solutions.json');
console.log('3. Fix placeholder content in customerCases');
