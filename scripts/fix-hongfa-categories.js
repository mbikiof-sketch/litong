// 修复Hongfa分类数据 - 补充longDescription、selectionGuide、分类FAQs
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hongfa');
const productsPath = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 分类详细描述（≥300字）
const longDescriptions = {
  'power-relays': `Hongfa Power Relays are designed for general switching applications in home appliances, industrial equipment, and building automation systems. As an authorized distributor of Hongfa products, BeiLuo Electronics offers comprehensive selection support for power relays ranging from 5A to 30A contact ratings. The product series includes HF3F, HF32F, HF33F, HF35F, HF36F, and HF105F, each optimized for specific application requirements. These relays feature robust contact construction, stable coil characteristics, and excellent electrical life. Available in various contact configurations (SPST, SPDT, DPDT) and coil voltages (5VDC to 48VDC), they provide flexible solutions for diverse switching needs. The HF35F series offers sealed construction for washability, while the HF105F features quick connect terminals for easy installation. All power relays are UL, VDE, and TÜV certified for global market compliance.`,
  
  'automotive-relays': `Hongfa Automotive Relays are specifically designed for vehicle electrical systems, meeting stringent automotive quality standards including AEC-Q200 qualification. As a trusted distributor of Hongfa automotive products, BeiLuo Electronics provides expert selection guidance for relays used in BCM, lighting, HVAC, and power distribution applications. The product series includes HFV4, HFV6, HFV7, HFV11, and HFV21, offering contact ratings from 20A to 70A. These relays feature enhanced vibration resistance (10G, 10-2000Hz), extended temperature range (-40°C to +125°C), and high inrush current capability for lamp and motor loads. The robust construction ensures reliable operation in harsh automotive environments. Available in PCB mount and plug-in configurations with 12VDC and 24VDC coil options. All automotive relays undergo rigorous testing to meet OEM quality requirements.`,
  
  'high-voltage-dc-relays': `Hongfa High Voltage DC Relays are engineered for new energy applications including electric vehicles, charging stations, and energy storage systems. As an authorized distributor of Hongfa HVDC products, BeiLuo Electronics offers specialized selection support for high voltage switching solutions. The product series includes HFE82, HFE85, HFE88, HFE90, HFE95, and HFE100, with DC switching capability from 450V to 1000V and current ratings from 80A to 250A. These relays feature advanced arc suppression technology using magnetic blowout and specialized contact materials to safely extinguish DC arcs. The hermetically sealed ceramic construction ensures reliable operation in demanding environments. Available with 12VDC and 24VDC coils, these relays are UL, TÜV, and CQC certified for EV applications. Essential for battery management systems, precharge circuits, and main contactors.`,
  
  'latching-relays': `Hongfa Latching Relays feature bistable operation that maintains contact state without continuous coil power, making them ideal for power-sensitive applications. As a distributor of Hongfa latching relay products, BeiLuo Electronics provides selection guidance for smart meters, energy management systems, and battery-powered devices. The product series includes HFE10, HFE19, HFE20, HFE21, HFE22, and HFE25, offering contact ratings from 3A to 20A. These relays use permanent magnets to maintain contact position after a coil pulse, resulting in zero standby power consumption. Available in single-coil and dual-coil configurations with various coil voltages (5VDC to 48VDC). The compact size is ideal for space-constrained applications. Long mechanical life and precious metal contacts ensure reliable operation over the product lifetime.`,
  
  'signal-relays': `Hongfa Signal Relays are compact electromechanical switches designed for low-level switching applications in telecommunications, test equipment, and data acquisition systems. As an authorized distributor of Hongfa signal products, BeiLuo Electronics offers selection support for high-density PCB applications. The product series includes HFD23, HFD27, HFD31, HFD41, HFD43, and HFD45, with contact ratings from 0.5A to 3A. These ultra-miniature relays feature precious metal contacts for excellent signal integrity and low contact resistance. The high sensitivity coil minimizes power consumption while ensuring reliable operation. Available in various contact configurations and coil voltages (3VDC to 24VDC). The sealed construction provides protection against environmental contaminants. Ideal for audio switching, telecommunications interfaces, and instrumentation multiplexers.`,
  
  'industrial-relays': `Hongfa Industrial Relays are designed for control systems and automation equipment, featuring robust construction with LED indicators and protection features. As a distributor of Hongfa industrial products, BeiLuo Electronics provides selection guidance for PLC interfacing and motor control applications. The product series includes HF18F, HF41F, HF42F, HF43F, HF44F, and HF45F, offering contact ratings from 6A to 16A. These relays support DIN rail mounting for easy installation in control panels and feature built-in LED status indicators and coil protection diodes. High inrush current capability handles motor starting currents without contact welding. Available in AC and DC coil options (12V to 240V). Extended temperature range (-40°C to +85°C) ensures reliable operation in industrial environments. Compatible with standard PLC output modules for seamless system integration.`
};

// 选型指南
const selectionGuides = {
  'power-relays': {
    text: "Download our comprehensive Power Relay Selection Guide to choose the right relay for your application based on contact rating, coil voltage, and mounting requirements.",
    link: "/assets/resources/hongfa/power-relay-selection-guide.pdf"
  },
  'automotive-relays': {
    text: "Download our Automotive Relay Selection Guide for detailed information on AEC-Q200 qualification, vibration resistance, and application-specific recommendations.",
    link: "/assets/resources/hongfa/automotive-relay-selection-guide.pdf"
  },
  'high-voltage-dc-relays': {
    text: "Download our HVDC Relay Selection Guide for EV and energy storage applications, covering voltage ratings, current capacity, and arc suppression technology.",
    link: "/assets/resources/hongfa/hvdc-relay-selection-guide.pdf"
  },
  'latching-relays': {
    text: "Download our Latching Relay Selection Guide for smart meter and energy management applications, covering bistable operation and power consumption considerations.",
    link: "/assets/resources/hongfa/latching-relay-selection-guide.pdf"
  },
  'signal-relays': {
    text: "Download our Signal Relay Selection Guide for telecommunications and test equipment applications, covering contact materials and signal integrity considerations.",
    link: "/assets/resources/hongfa/signal-relay-selection-guide.pdf"
  },
  'industrial-relays': {
    text: "Download our Industrial Relay Selection Guide for control system applications, covering DIN rail mounting, PLC compatibility, and protection features.",
    link: "/assets/resources/hongfa/industrial-relay-selection-guide.pdf"
  }
};

// 分类级别FAQs（每个分类≥2个，符合铁律14）
const categoryFaqs = {
  'power-relays': [
    {
      question: "How do I select the right Hongfa power relay for my appliance application?",
      answer: "Selecting the right Hongfa power relay involves several considerations: 1) Contact Rating - choose a relay with contact rating at least 20% higher than your load current; for resistive loads use the rated current, for inductive loads apply higher derating, 2) Coil Voltage - match the relay coil voltage to your control circuit voltage (5VDC, 12VDC, 24VDC, etc.), 3) Contact Configuration - select SPST for simple on/off switching, SPDT for changeover applications, or DPDT for dual circuit control, 4) Mounting Type - choose PCB mount for circuit board installation or panel mount for chassis mounting, 5) Environmental Requirements - consider sealed relays (HF35F) for washability or high-temperature versions for hot environments, 6) Safety Certifications - verify UL, VDE, or TÜV certifications match your market requirements. Our FAE team can assist with selection based on your specific load characteristics and application requirements.",
      decisionGuide: "Use our Power Relay Selection Guide or contact our FAE team with your load specifications for personalized recommendations.",
      keywords: ["power relay selection", "Hongfa relay guide", "appliance relay"]
    },
    {
      question: "What is the difference between HF3F, HF32F, and HF36F power relay series?",
      answer: "The HF3F, HF32F, and HF36F series are all miniature power relays but optimized for different applications: HF3F is a general-purpose 5A relay with compact 19.2mm size, ideal for space-constrained designs in small appliances; HF32F offers 10A capacity with subminiature footprint, suitable for higher current applications while maintaining compact size; HF36F provides 16A switching capacity with reinforced contact construction for demanding industrial loads. Key differences include: Contact Rating - HF3F: 5A, HF32F: 10A, HF36F: 16A; Dimensions - HF3F: 19.2x15.5mm, HF32F: 20.5x10.5mm, HF36F: 24x18mm; Coil Power - all series offer 400-500mW options; Applications - HF3F for small appliances, HF32F for general purpose, HF36F for industrial equipment. All series share common features like 4000VAC dielectric strength, 10M mechanical life, and global safety certifications.",
      decisionGuide: "Choose HF3F for compact 5A applications, HF32F for 10A general purpose, HF36F for 16A industrial loads.",
      keywords: ["HF3F vs HF32F", "HF36F comparison", "power relay series"]
    }
  ],
  'automotive-relays': [
    {
      question: "What AEC-Q200 qualification does Hongfa automotive relays meet?",
      answer: "Hongfa automotive relays meet AEC-Q200 qualification requirements, which is the automotive industry's standard for passive component quality. Key qualification aspects include: Temperature Cycling - tested for 1000 cycles from -40°C to +125°C to ensure thermal reliability; Vibration Resistance - verified to withstand 10G vibration from 10-2000Hz simulating vehicle road conditions; Mechanical Shock - tested to 50G shock pulses representing pothole impacts; Humidity Resistance - 85°C/85%RH testing for 1000 hours to verify moisture protection; High Temperature Operating Life - 1000 hours at maximum rated temperature; Electrostatic Discharge - ESD protection verification. The AEC-Q200 qualification ensures relays are suitable for under-hood installations and critical vehicle systems. Hongfa automotive relays also comply with OEM-specific requirements from major manufacturers including VW, GM, and Ford. All automotive relays are traceable with date codes and lot numbers for quality tracking.",
      decisionGuide: "Hongfa automotive relays are AEC-Q200 qualified and suitable for all vehicle applications; contact our FAE for OEM-specific qualification documents.",
      keywords: ["AEC-Q200", "automotive qualification", "Hongfa automotive relay"]
    },
    {
      question: "How do I choose between HFV4, HFV6, and HFV7 automotive relay series?",
      answer: "The HFV4, HFV6, and HFV7 series are automotive relays with different current ratings and applications: HFV4 is a 20A PCB mount relay ideal for BCM, lighting, and auxiliary circuits; HFV6 offers 35A capacity with plug-in terminals for power distribution and HVAC applications; HFV7 provides 50A switching for high-current loads like cooling fans and fuel pumps. Key selection factors: Current Requirements - HFV4: 20A, HFV6: 35A, HFV7: 50A; Mounting - HFV4 is PCB mount, HFV6/HFV7 are plug-in with brackets; Coil Voltage - all support 12VDC and 24VDC; Contact Material - all use silver alloy for high inrush capability; Temperature Range - all rated -40°C to +125°C; Vibration Resistance - all meet automotive vibration standards. For body control modules and lighting, HFV4 is typically sufficient. For HVAC compressors and power distribution, HFV6 provides the right balance. For cooling fans and heavy loads, HFV7 offers the highest capacity.",
      decisionGuide: "Select HFV4 for 20A BCM/lighting, HFV6 for 35A HVAC/power distribution, HFV7 for 50A cooling fans/heavy loads.",
      keywords: ["HFV4 vs HFV6", "automotive relay selection", "Hongfa automotive"]
    }
  ],
  'high-voltage-dc-relays': [
    {
      question: "How do Hongfa HVDC relays handle arc suppression for safe DC switching?",
      answer: "Hongfa HVDC relays employ multiple arc suppression technologies for safe DC switching up to 1000V: Magnetic Blowout - permanent magnets create a magnetic field that stretches and extinguishes the arc quickly; Contact Gap Design - large contact gaps (≥2.4mm) provide adequate distance to prevent arc restriking; Contact Materials - specialized silver alloys with high melting points and low erosion rates; Hermetic Sealing - ceramic-to-metal seals contain arcs and prevent external ignition; Gas Filling - some models use inert gas to suppress arc formation; Dual Contact Design - make-before-break or break-before-make configurations for specific applications. The arc suppression is critical because DC arcs are more difficult to extinguish than AC arcs due to the absence of zero-crossings. For series-connected applications, voltage sharing circuits ensure equal voltage distribution across multiple relays. All HVDC relays undergo 100% testing for dielectric strength and contact resistance. The arc suppression design allows these relays to safely switch high voltage DC loads in EV battery management systems.",
      decisionGuide: "Hongfa HVDC relays with magnetic blowout are suitable for EV battery management; contact our FAE for series connection guidance.",
      keywords: ["HVDC arc suppression", "DC relay switching", "EV relay safety"]
    },
    {
      question: "What is the difference between HFE82, HFE85, and HFE88 HVDC relay series?",
      answer: "The HFE82, HFE85, and HFE88 series are high voltage DC relays with different voltage and current ratings: HFE82 supports 450VDC at 100A, suitable for lower voltage EV and energy storage applications; HFE85 handles 750VDC at 150A, ideal for standard EV battery systems; HFE88 switches 1000VDC at 250A, designed for high voltage fast charging and heavy-duty applications. Key differences: Voltage Rating - HFE82: 450VDC, HFE85: 750VDC, HFE88: 1000VDC; Current Rating - HFE82: 100A, HFE85: 150A, HFE88: 250A; Contact Gap - increases with voltage rating (2.4mm to 3.6mm); Coil Voltage - all support 12VDC and 24VDC; Mounting - all use busbar connections for high current; Safety Certifications - all are UL, TÜV, and CQC certified. For 400V EV platforms, HFE82 is cost-effective. For 800V EV platforms, HFE85 provides the right balance. For ultra-fast charging and grid storage, HFE88 offers maximum capacity.",
      decisionGuide: "Choose HFE82 for 450V/100A, HFE85 for 750V/150A, HFE88 for 1000V/250A applications.",
      keywords: ["HFE82 vs HFE85", "HVDC relay comparison", "EV relay selection"]
    }
  ],
  'latching-relays': [
    {
      question: "How does bistable operation in Hongfa latching relays save power?",
      answer: "Hongfa latching relays use bistable operation to maintain contact state without continuous coil power, resulting in significant power savings: Operating Principle - a permanent magnet holds the contacts in position after a brief coil pulse (typically 50-100ms), eliminating the need for continuous coil current; Power Consumption - standard relays consume 400-500mW continuously, while latching relays consume zero power in steady state; Pulse Operation - only requires a short pulse (20-50ms) to switch states, consuming minimal energy per operation; Battery Applications - ideal for battery-powered devices and smart meters where power budget is critical; Smart Grid - enables zero-standby-power load switching in smart meters; Energy Savings - over a 10-year meter life, latching relays can save significant energy compared to standard relays. The trade-off is slightly more complex drive circuitry requiring polarity reversal or dual coils. For single-coil versions, polarity reversal switches the state. For dual-coil versions, separate set and reset coils are used. The power savings make latching relays essential for energy-conscious applications.",
      decisionGuide: "Use latching relays for battery-powered and smart meter applications where zero standby power is required.",
      keywords: ["latching relay power saving", "bistable relay", "smart meter relay"]
    },
    {
      question: "What is the difference between single-coil and dual-coil latching relays?",
      answer: "Hongfa offers both single-coil and dual-coil latching relay configurations with different drive requirements: Single-Coil - uses one coil with polarity reversal to set and reset; applying positive voltage sets the relay, negative voltage resets it; simpler drive circuit with fewer components; lower coil resistance; suitable for most smart meter applications; examples include HFE10-1 and HFE19-1. Dual-Coil - uses separate set and reset coils; energizing the set coil closes contacts, energizing the reset coil opens contacts; more flexible control with independent set/reset inputs; higher coil resistance per coil; allows for redundant control schemes; examples include HFE20-2 and HFE22-2. Selection considerations: Drive Complexity - single-coil requires polarity reversal circuit (H-bridge), dual-coil uses simple switches; Control Flexibility - dual-coil allows independent set/reset control; Power Consumption - single-coil typically has lower overall resistance; Reliability - both offer equivalent mechanical life. For simple applications, single-coil is cost-effective. For complex control systems, dual-coil offers more flexibility.",
      decisionGuide: "Choose single-coil for simple polarity-reversal drive, dual-coil for independent set/reset control flexibility.",
      keywords: ["single coil vs dual coil", "latching relay drive", "relay coil configuration"]
    }
  ],
  'signal-relays': [
    {
      question: "How do I select a Hongfa signal relay for low-level switching applications?",
      answer: "Selecting a Hongfa signal relay for low-level switching requires attention to different parameters than power relays: Contact Material - precious metal contacts (gold or silver alloy) are essential for reliable low-level switching below 1A; gold-plated contacts prevent oxidation and ensure consistent contact resistance; Contact Resistance - look for low contact resistance (50-100mΩ) to minimize signal attenuation; signal relays typically have lower contact resistance than power relays; Thermal EMF - low thermal EMF is critical for thermocouple and measurement applications; select relays designed for instrumentation; Coil Sensitivity - high sensitivity coils (100-200mW) reduce power consumption in multi-relay designs; Size Constraints - ultra-miniature packages enable high-density layouts; consider height restrictions for compact equipment; Contact Configuration - DPDT relays provide more switching flexibility for multiplexers; Signal Integrity - sealed construction prevents contamination that could affect contact performance. For audio applications, consider relays with low capacitance between contacts. For telecommunications, verify the relay meets relevant industry standards.",
      decisionGuide: "Select signal relays with precious metal contacts and low contact resistance for reliable low-level switching.",
      keywords: ["signal relay selection", "low level switching", "precious metal contacts"]
    },
    {
      question: "What is the difference between HFD23 and HFD41 signal relay series?",
      answer: "The HFD23 and HFD41 are both Hongfa signal relays but with different specifications and applications: HFD23 is an ultra-miniature relay (10.0x6.5x5.65mm) with 1A contact rating, ideal for high-density PCB applications; HFD41 is a standard miniature relay (20.0x10.0x11.0mm) with 2A contact rating, suitable for higher current signal switching. Key differences: Dimensions - HFD23: 10.0x6.5mm, HFD41: 20.0x10.0mm; Contact Rating - HFD23: 1A, HFD41: 2A; Contact Configuration - HFD23: SPST or SPDT, HFD41: DPDT standard; Coil Power - HFD23: 100-140mW, HFD41: 200mW; Contact Material - both use precious metal contacts; Applications - HFD23 for ultra-compact designs, HFD41 for general signal switching; Mounting - both are PCB mount. For telecommunications line cards with high relay count, HFD23 enables maximum density. For test equipment requiring DPDT switching, HFD41 provides the right configuration. Both series offer excellent signal integrity with low contact resistance and stable characteristics.",
      decisionGuide: "Choose HFD23 for ultra-miniature 1A applications, HFD41 for 2A DPDT signal switching.",
      keywords: ["HFD23 vs HFD41", "signal relay comparison", "miniature relay"]
    }
  ],
  'industrial-relays': [
    {
      question: "How do Hongfa industrial relays interface with PLC output modules?",
      answer: "Hongfa industrial relays are designed for seamless integration with PLC output modules: Coil Voltage Compatibility - available in 12VDC, 24VDC, 48VDC, 24VAC, and 120VAC to match common PLC output voltages; 24VDC is the most common for modern PLCs; Coil Current - low coil current (15-30mA) allows direct drive from PLC transistor outputs without external relays; Protection Features - built-in freewheeling diodes (DC coils) protect PLC outputs from back-EMF; LED Indicators - visual status indication helps with troubleshooting and maintenance; Mounting Options - DIN rail mounting allows installation in standard industrial enclosures alongside PLCs; Terminal Types - screw terminals or spring terminals for reliable field wiring; Contact Ratings - 6A to 16A ratings handle typical industrial loads (solenoids, contactors, lights); Response Time - fast operate/release times (10-20ms) suitable for PLC scan cycles. For high-density applications, slim relays (HF41F) save DIN rail space. For motor loads, select relays with high inrush capability. All industrial relays are designed for 100k+ electrical life in industrial environments.",
      decisionGuide: "Select 24VDC coil relays with built-in diodes for direct PLC interfacing; use DIN rail mounting for control panel installation.",
      keywords: ["PLC relay interface", "industrial relay", "PLC output module"]
    },
    {
      question: "What is the difference between HF18F and HF41F industrial relay series?",
      answer: "The HF18F and HF41F are both Hongfa industrial relays but with different form factors and applications: HF18F is a standard industrial relay (29.0x12.8x15.7mm) with 8A contact rating, suitable for general control applications; HF41F is a slim industrial relay (29.0x6.4x15.7mm) with 12A rating, designed for high-density installations. Key differences: Width - HF18F: 12.8mm, HF41F: 6.4mm (50% space savings); Contact Rating - HF18F: 8A, HF41F: 12A; Height - both 15.7mm for consistent panel layout; Coil Options - both available in AC and DC; Features - both include LED indicators and protection diodes; Mounting - both support DIN rail and PCB mounting; Applications - HF18F for standard control panels, HF41F for compact designs; Price - HF41F typically has slight premium for space savings. For new designs with space constraints, HF41F enables 50% more relays per DIN rail length. For existing HF18F installations, HF41F can be mixed on the same rail. Both series offer equivalent reliability and protection features.",
      decisionGuide: "Choose HF18F for standard installations, HF41F for high-density applications requiring maximum relays per DIN rail.",
      keywords: ["HF18F vs HF41F", "slim industrial relay", "DIN rail relay"]
    }
  ]
};

// 修复分类数据
productsData.categories.forEach(category => {
  const catId = category.id;
  
  // 1. 修复longDescription
  if (!category.longDescription || category.longDescription.length < 300) {
    category.longDescription = longDescriptions[catId];
    console.log(`Fixed longDescription for: ${catId}`);
  }
  
  // 2. 添加selectionGuide
  if (!category.selectionGuide) {
    category.selectionGuide = selectionGuides[catId]?.text || "";
    category.selectionGuideLink = selectionGuides[catId]?.link || "";
    console.log(`Added selectionGuide for: ${catId}`);
  }
  
  // 3. 添加分类级别FAQs
  if (!category.faqs || category.faqs.length < 2) {
    category.faqs = categoryFaqs[catId] || [];
    console.log(`Added ${category.faqs.length} FAQs for: ${catId}`);
  }
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`\n✅ Categories fixed and saved to ${productsPath}`);
