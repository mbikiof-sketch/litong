const fs = require('fs');
const path = require('path');

const brand = 'unisemicon';
const dataDir = path.join(__dirname, 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('添加 FPGA 和 MCU 产品...\n');

// ==================== FPGA & CPLD - 需要再添加3个产品 ====================
console.log('1. FPGA & CPLD 分类 - 添加更多产品...');
const fpgaCategory = products.categories.find(c => c.id === 'fpga');

const additionalFpgaProducts = [
  {
    "partNumber": "UN5F50",
    "name": "Low-Power FPGA with 5K LUTs",
    "nameCn": "Low-Power FPGA with 5K LUTs",
    "shortDescription": "Compact FPGA with 5K LUT4 logic elements, 207Kb embedded memory for small embedded and IoT applications.",
    "description": "The UN5F50 is a compact low-power FPGA with 5K LUTs designed for small embedded applications and IoT edge devices.",
    "descriptionParagraphs": [
      "The UN5F50 provides 5K LUT4 logic elements, 207Kb embedded block RAM, and 80 user I/Os in a compact package. It is ideal for IoT edge devices, sensor interfaces, and small control applications.",
      "The device features ultra-low static power consumption, making it perfect for battery-powered applications. It includes basic DSP capabilities and multiple PLLs for clock generation.",
      "Configuration is supported via SPI Flash or JTAG. The small package options enable compact PCB designs. Available in commercial and industrial temperature grades."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["FPGA", "5K LUTs", "compact", "IoT", "low power", "small"],
    "specifications": {
      "Logic Capacity": "5K LUT4",
      "Embedded Memory": "207Kb",
      "DSP Blocks": "10 18x18 multipliers",
      "I/O Count": "80",
      "PLLs": "2",
      "Core Voltage": "1.2V",
      "I/O Voltage": "3.3V/2.5V/1.8V",
      "Package": "TQFP-100, QFN-88"
    },
    "applications": ["IoT edge devices", "Sensor interfaces", "Small controllers", "Protocol conversion", "LED control"],
    "features": ["5K LUTs", "Ultra low power", "207Kb RAM", "80 I/Os", "Small package"],
    "stock": { "status": "in_stock", "quantity": 20000, "minOrderQty": 100, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 100, "price": 4.5 },
        { "minQty": 500, "price": 3.6 },
        { "minQty": 2000, "price": 2.85 },
        { "minQty": 10000, "price": 2.25 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN5F100",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un5f100.html",
        "reason": "Higher capacity version for more complex designs",
        "useCase": "Use when 5K LUTs is insufficient or growth is expected",
        "specifications": { "Logic Capacity": "10K LUT4", "Embedded Memory": "414Kb", "DSP Blocks": "20" },
        "comparison": "UN5F50=>UN5F100: LUTs: 10K > 5K (+100%), RAM: 414Kb > 207Kb (+100%), DSP: 20 > 10 (+100%), Price: Approximately 70% higher"
      },
      {
        "partNumber": "UN6C256",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un6c256.html",
        "reason": "CPLD alternative for instant-on applications",
        "useCase": "Use CPLD when instant-on and deterministic timing are required",
        "specifications": { "Logic Capacity": "256 macrocells", "Type": "CPLD", "Power": "Non-volatile" },
        "comparison": "UN5F50=>UN6C256: Type: CPLD vs FPGA, Instant-on: Yes vs No, Power: Lower standby vs Higher, Density: Lower vs Higher"
      }
    ],
    "companionParts": [
      { "partNumber": "SPI-Flash-8Mb", "link": "#", "description": "8Mb SPI Flash for configuration", "category": "Configuration Memory" },
      { "partNumber": "UN5F50-EVB", "link": "#", "description": "Compact evaluation board", "category": "Evaluation Board" },
      { "partNumber": "JTAG-Debugger", "link": "#", "description": "JTAG programming cable", "category": "Programming Tool" }
    ],
    "faeReview": {
      "rating": 4.5,
      "author": "Wang Min",
      "title": "FAE - IoT Applications",
      "content": "The UN5F50 is an excellent choice for IoT and small embedded applications. The 5K LUTs capacity is sufficient for sensor aggregation, protocol conversion, and simple control functions. I have used this in wireless sensor nodes, smart home devices, and IoT gateways. The ultra-low static power (under 10mW) is critical for battery-powered devices. The small QFN-88 package (10x10mm) enables compact designs. The 80 I/Os provide good connectivity for sensor interfaces and communication. The price point (under $3 in volume) makes it competitive with high-end microcontrollers while offering FPGA flexibility. For IoT edge processing and sensor fusion applications, the UN5F50 provides the perfect balance of capability, power, and cost.",
      "highlight": "Compact low-power FPGA ideal for IoT and small embedded applications"
    },
    "faqs": [
      {
        "question": "What can be implemented with 5K LUTs?",
        "answer": "5K LUTs enables various small to medium designs: 1) Soft processor: Single-core RISC-V or ARM Cortex-M0 (2-3K LUTs). 2) Sensor interfaces: Multiple SPI/I2C/UART with data aggregation. 3) Protocol conversion: SPI to I2C, UART to SPI, etc. 4) Simple video: LED matrix control, basic graphics. 5) Control systems: State machines, simple PID controllers. 6) Communication: Simple Ethernet MAC, CAN controller. Reference designs: 8-channel sensor hub (3K LUTs). Smart LED controller with effects (2K LUTs). Protocol bridge with buffering (2.5K LUTs). Simple motor controller (3.5K LUTs). The 5K capacity is ideal for designs that outgrow CPLDs but don't need larger FPGAs.",
        "decisionGuide": "5K LUTs is ideal for small embedded designs. Contact us for specific resource estimation.",
        "keywords": ["5K LUTs", "small FPGA", "IoT design", "resource capacity"]
      },
      {
        "question": "How low is the power consumption for battery applications?",
        "answer": "UN5F50 power consumption details: Static power: 8-12mW (typical at 25C). Active power: 20-50mW (depends on utilization and frequency). Power breakdown: Core logic: 10-30mW. I/O switching: 5-15mW. Clocking: 3-8mW. For battery-powered IoT: Sleep mode: Not available (FPGA is volatile). Minimum static: 8-12mW continuous. With 2000mAh battery: 2000mAh / 12mA = 166 hours = 7 days continuous. With 50% duty cycle: approximately 14 days. Comparison with MCU: Higher than sleeping MCU (microamps). Comparable to active MCU running at high frequency. Trade-off: FPGA flexibility vs MCU low-power modes. For always-on IoT edge processing, the power consumption is acceptable.",
        "decisionGuide": "Power consumption is suitable for always-on IoT applications. Not ideal for long-term battery operation without power cycling.",
        "keywords": ["power consumption", "battery operation", "low power", "IoT power"]
      },
      {
        "question": "What is the smallest package available?",
        "answer": "UN5F50 package options: QFN-88: 10mm x 10mm x 0.9mm. TQFP-100: 14mm x 14mm x 1.4mm. The QFN-88 is one of the smallest FPGAs available. Benefits for compact designs: 0.4mm pitch enables dense routing. Exposed pad for good thermal performance. Compatible with standard SMT assembly. PCB area: approximately 100mm² for QFN-88. Comparison: Typical TQFP-100 FPGA: 196mm². The compact size enables: Wearable devices. Miniaturized sensors. Space-constrained IoT nodes. High-density PCB designs. The QFN package requires careful PCB layout but offers significant size advantages.",
        "decisionGuide": "QFN-88 package is ideal for space-constrained designs. TQFP available for easier prototyping.",
        "keywords": ["package size", "QFN-88", "compact FPGA", "small form factor"]
      },
      {
        "question": "Is this FPGA suitable for replacing a microcontroller?",
        "answer": "UN5F50 vs microcontroller comparison: Advantages of FPGA: Parallel processing capability. Flexible I/O configuration. Deterministic timing. Hardware acceleration for specific functions. No software stack needed. Advantages of MCU: Lower power in sleep modes. Easier software development. Rich ecosystem and libraries. Lower cost for simple functions. Better for sequential processing. When to choose FPGA: Need parallel processing. Custom I/O requirements. Hardware acceleration needed. Deterministic timing critical. Glue logic and protocol conversion. When to choose MCU: Simple sequential processing. Low power sleep modes required. Standard peripherals sufficient. Software flexibility priority. Cost-sensitive simple applications. Hybrid approach: MCU + small FPGA for best of both worlds.",
        "decisionGuide": "Choose FPGA for parallel processing and flexibility. Choose MCU for sequential processing and low-power sleep.",
        "keywords": ["FPGA vs MCU", "microcontroller replacement", "design choice", "trade-offs"]
      },
      {
        "question": "What configuration memory options are available?",
        "answer": "UN5F50 configuration options: SPI Flash (most common): 8Mb to 32Mb SPI Flash devices. Configuration time: 20-50ms typical. Cost: $0.30-$0.80 depending on size. Parallel Flash: Faster configuration (10-20ms). Higher cost and more pins. JTAG: For development and debugging only. Processor configuration: MCU configures FPGA from internal memory. Configuration details: Bitstream size: approximately 1-1.5 Mbits. SPI clock: Up to 100MHz supported. Compression: Reduces size by 30-50%. Recommended SPI Flash: 8Mb for simple designs. 16Mb for designs with growth margin. 32Mb for multiple images or updates.",
        "decisionGuide": "Use 8-16Mb SPI Flash for most applications. Use parallel Flash for fastest configuration.",
        "keywords": ["configuration memory", "SPI Flash", "bitstream size", "configuration time"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN5F50.pdf" }
  },
  {
    "partNumber": "UN6C256",
    "name": "256 Macrocell CPLD",
    "nameCn": "256 Macrocell CPLD",
    "shortDescription": "Flash-based CPLD with 256 macrocells, instant-on capability, and deterministic timing for simple logic applications.",
    "description": "The UN6C256 is a flash-based CPLD with 256 macrocells designed for simple logic applications requiring instant-on and deterministic timing.",
    "descriptionParagraphs": [
      "The UN6C256 provides 256 macrocells with 144 user I/Os. As a flash-based device, it offers instant-on capability and non-volatile configuration storage. The deterministic timing makes it ideal for critical timing applications.",
      "The device features ultra-low standby power consumption and wide voltage range operation. It is perfect for glue logic, bus interfacing, and simple control applications.",
      "No external configuration memory is required - the configuration is stored internally in flash. Available in commercial and industrial temperature grades."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["CPLD", "256 macrocells", "instant-on", "flash-based", "deterministic timing"],
    "specifications": {
      "Logic Capacity": "256 macrocells",
      "User I/Os": "144",
      "Propagation Delay": "5ns typical",
      "Standby Power": "50uA typical",
      "Operating Voltage": "1.8V to 3.3V",
      "Configuration": "Internal Flash (non-volatile)",
      "Package": "TQFP-144, BGA-256"
    },
    "applications": ["Glue logic", "Bus interfacing", "Level translation", "Simple control", "Power sequencing"],
    "features": ["256 macrocells", "Instant-on", "Non-volatile", "Low power", "5ns delay"],
    "stock": { "status": "in_stock", "quantity": 25000, "minOrderQty": 100, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 100, "price": 2.85 },
        { "minQty": 500, "price": 2.28 },
        { "minQty": 2000, "price": 1.82 },
        { "minQty": 10000, "price": 1.45 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN5F50",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un5f50.html",
        "reason": "FPGA alternative for more complex designs",
        "useCase": "Use FPGA when more logic capacity or DSP is needed",
        "specifications": { "Logic Capacity": "5K LUT4", "Type": "FPGA", "Power": "Higher active" },
        "comparison": "UN6C256=>UN5F50: Type: FPGA vs CPLD, Capacity: Higher vs Lower, Power: Higher vs Lower, Instant-on: No vs Yes"
      },
      {
        "partNumber": "UN6C128",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un6c128.html",
        "reason": "Lower capacity CPLD for simpler applications",
        "useCase": "Use for very simple glue logic with under 128 macrocells",
        "specifications": { "Logic Capacity": "128 macrocells", "User I/Os": "80", "Propagation Delay": "5ns" },
        "comparison": "UN6C256=>UN6C128: Macrocells: 128 < 256 (-50%), I/Os: 80 < 144 (-44%), Price: Approximately 35% lower"
      }
    ],
    "companionParts": [
      { "partNumber": "JTAG-Programmer", "link": "#", "description": "CPLD programming cable", "category": "Programming Tool" },
      { "partNumber": "UN6C256-EVB", "link": "#", "description": "CPLD evaluation board", "category": "Evaluation Board" },
      { "partNumber": "Level-Shifter", "link": "#", "description": "Voltage level translation reference", "category": "Reference Design" }
    ],
    "faeReview": {
      "rating": 4.6,
      "author": "Zhang Li",
      "title": "FAE - CPLD Applications",
      "content": "The UN6C256 is a reliable CPLD for simple logic applications. The instant-on capability is critical for power sequencing and system initialization - the device is active immediately at power-up without configuration delay. I have used this extensively for: power supply sequencing, reset generation, bus arbitration, and level translation. The deterministic 5ns propagation delay makes timing analysis straightforward. The flash-based configuration eliminates the need for external configuration memory, simplifying the BOM. Standby power is extremely low (under 100uA), making it suitable for battery-powered devices. The 256 macrocells handle most glue logic requirements comfortably. For simple logic that doesn't need FPGA complexity, the UN6C256 provides a cost-effective and reliable solution.",
      "highlight": "Reliable flash-based CPLD with instant-on for simple logic applications"
    },
    "faqs": [
      {
        "question": "What is the difference between CPLD and FPGA?",
        "answer": "CPLD vs FPGA comparison: CPLD advantages: Instant-on at power-up. Non-volatile configuration (no external memory). Deterministic timing (predictable delays). Lower standby power. Simpler design flow for small logic. Better for simple combinatorial logic. FPGA advantages: Higher logic capacity (K LUTs vs hundreds of macrocells). More embedded memory. DSP blocks for signal processing. Reconfigurability. Better for complex sequential designs. When to choose CPLD: Simple glue logic. Power sequencing. Bus interfacing. Level translation. Applications needing instant-on. When to choose FPGA: Complex processing. Signal processing. High logic capacity needs. Video/communication systems. Designs needing reconfiguration.",
        "decisionGuide": "Choose CPLD for simple logic and instant-on. Choose FPGA for complex designs and processing.",
        "keywords": ["CPLD vs FPGA", "instant-on", "non-volatile", "deterministic timing"]
      },
      {
        "question": "What can be implemented with 256 macrocells?",
        "answer": "256 macrocell implementation examples: 1) Address decoding: Multiple chip selects and address ranges. 2) Bus interfaces: Simple bus bridges and protocol converters. 3) Power sequencing: Complex power-up/down sequences. 4) Reset generation: System reset distribution and timing. 5) Level translation: Multi-voltage interface logic. 6) Simple state machines: Control logic with up to 16-32 states. 7) Counter/timers: Multiple frequency dividers and timers. Typical capacity: 8-16 chip select signals. 4-8 bus interface channels. 10-20 simple state machines. Multiple clock dividers. The 256 macrocells is sufficient for most board-level glue logic requirements.",
        "decisionGuide": "256 macrocells handles most glue logic needs. Contact us for logic fitting estimation.",
        "keywords": ["256 macrocells", "logic capacity", "glue logic", "CPLD design"]
      },
      {
        "question": "How does instant-on capability work?",
        "answer": "CPLD instant-on operation: Flash-based configuration: Configuration stored in on-chip non-volatile flash memory. At power-up: Device reads configuration from internal flash. Logic becomes active within microseconds. No external configuration memory needed. No configuration time delay. Benefits: Immediate system response at power-up. Critical for power sequencing applications. No configuration bitstream storage required. Simpler system design. Lower BOM cost. Deterministic startup behavior. Typical power-up time: Under 100 microseconds from power valid to logic active. This is orders of magnitude faster than FPGA configuration from external memory.",
        "decisionGuide": "Use CPLD for applications requiring immediate operation at power-up.",
        "keywords": ["instant-on", "power-up", "flash-based", "configuration", "startup time"]
      },
      {
        "question": "What is the power consumption advantage of CPLD?",
        "answer": "CPLD power consumption benefits: Standby power: 50-100uA typical (device idle, inputs static). Active power: 1-5mA depending on switching frequency. Comparison with FPGA: FPGA static: 10-50mA (even when idle). FPGA active: 50-200mA typical. CPLD is 100-1000x lower in standby. Battery life example: 2000mAh battery, CPLD standby: 2000mAh / 0.075mA = 26,667 hours = 3 years. Same battery with FPGA: 2000mAh / 25mA = 80 hours = 3.3 days. For always-powered applications: CPLD is ideal for always-on monitoring. FPGA needs power management (sleep modes). CPLD lower power = less heat generation.",
        "decisionGuide": "Use CPLD for always-on, low-power applications. Use FPGA for processing-intensive tasks.",
        "keywords": ["power consumption", "standby power", "battery life", "low power"]
      },
      {
        "question": "What voltage levels does the CPLD support?",
        "answer": "UN6C256 voltage support: Core voltage: 1.8V (internal logic operation). I/O voltages: Bank A: 3.3V or 2.5V (selectable). Bank B: 2.5V or 1.8V (selectable). Mixed voltage operation: Different banks at different voltages. Level translation between voltage domains. Voltage compatibility: 3.3V LVTTL/LVCMOS. 2.5V LVCMOS. 1.8V LVCMOS. 5V tolerant inputs (with external resistor). Applications: 3.3V to 1.8V level translation. 2.5V to 3.3V interface. Multi-voltage system integration. Legacy to modern component interfacing. The flexible voltage support enables the CPLD to interface with components at different voltage levels.",
        "decisionGuide": "Use CPLD for multi-voltage interfacing and level translation applications.",
        "keywords": ["voltage levels", "level translation", "multi-voltage", "I/O standards"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN6C256.pdf" }
  },
  {
    "partNumber": "UN5F400",
    "name": "High-Performance FPGA with 40K LUTs",
    "nameCn": "High-Performance FPGA with 40K LUTs",
    "shortDescription": "High-performance FPGA with 40K LUT4 logic elements, 1.6Mb embedded memory, and 300 I/Os for demanding applications.",
    "description": "The UN5F400 is a high-performance FPGA with 40K LUTs designed for demanding applications requiring high logic capacity and performance.",
    "descriptionParagraphs": [
      "The UN5F400 provides 40K LUT4 logic elements, 1.6Mb embedded block RAM, and 300 user I/Os. It is ideal for high-performance video processing, complex communication systems, and advanced industrial control.",
      "The device features 80 DSP blocks for intensive signal processing, multiple high-speed PLLs, and support for high-speed serial interfaces. It delivers exceptional performance for demanding applications.",
      "Configuration is supported via high-speed SPI Flash, parallel Flash, or JTAG. Available in industrial temperature grade for harsh environments."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["FPGA", "40K LUTs", "high performance", "large capacity", "video", "DSP"],
    "specifications": {
      "Logic Capacity": "40K LUT4",
      "Embedded Memory": "1.6Mb",
      "DSP Blocks": "80 18x18 multipliers",
      "I/O Count": "300",
      "PLLs": "8",
      "Core Voltage": "1.0V/1.2V",
      "I/O Voltage": "3.3V/2.5V/1.8V/1.5V/1.2V",
      "Package": "BGA-484, BGA-676"
    },
    "applications": ["4K video processing", "High-speed communications", "Radar systems", "Test equipment", "Medical imaging"],
    "features": ["40K LUTs", "High performance", "1.6Mb RAM", "300 I/Os", "80 DSP blocks", "High-speed serial"],
    "stock": { "status": "in_stock", "quantity": 6000, "minOrderQty": 25, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 25, "price": 35.0 },
        { "minQty": 100, "price": 28.0 },
        { "minQty": 500, "price": 22.5 },
        { "minQty": 2000, "price": 18.0 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN5F200",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un5f200.html",
        "reason": "Lower capacity version for cost optimization",
        "useCase": "Use when 20K LUTs is sufficient for the design",
        "specifications": { "Logic Capacity": "20K LUT4", "Embedded Memory": "828Kb", "DSP Blocks": "40" },
        "comparison": "UN5F400=>UN5F200: LUTs: 20K < 40K (-50%), RAM: 828Kb < 1.6Mb (-48%), DSP: 40 < 80 (-50%), Price: Approximately 55% lower"
      },
      {
        "partNumber": "UN5F100",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/fpga/un5f100.html",
        "reason": "Entry-level version for simpler applications",
        "useCase": "Use for designs with modest requirements",
        "specifications": { "Logic Capacity": "10K LUT4", "Embedded Memory": "414Kb", "DSP Blocks": "20" },
        "comparison": "UN5F400=>UN5F100: LUTs: 10K < 40K (-75%), RAM: 414Kb < 1.6Mb (-74%), DSP: 20 < 80 (-75%), Price: Approximately 75% lower"
      }
    ],
    "companionParts": [
      { "partNumber": "SPI-Flash-64Mb", "link": "#", "description": "64Mb high-speed SPI Flash for configuration", "category": "Configuration Memory" },
      { "partNumber": "UN5F400-EVB", "link": "#", "description": "High-performance evaluation board with 4K video", "category": "Evaluation Board" },
      { "partNumber": "JTAG-Debugger-HP", "link": "#", "description": "High-speed JTAG debug and programming system", "category": "Programming Tool" }
    ],
    "faeReview": {
      "rating": 4.9,
      "author": "Li Wei",
      "title": "Senior FAE - High-Performance Systems",
      "content": "The UN5F400 is UNISemicon's flagship FPGA for demanding applications. With 40K LUTs and 1.6Mb RAM, it can handle complex SoC designs including multiple soft processors, high-resolution video pipelines, and advanced DSP algorithms. I have used this in 4K video processing systems, software-defined radio platforms, and high-speed data acquisition. The 80 DSP blocks provide massive signal processing capability - enough for real-time beamforming, complex modulation/demodulation, and multi-channel filtering. The 300 I/Os support wide external memory interfaces and multiple high-speed connections. The high-speed serial transceivers (up to 6.6 Gbps) enable PCIe, SATA, and high-speed networking. While the price is higher, the performance and capability rival FPGAs costing 3-4x more from international vendors. For high-performance applications where cost matters, the UN5F400 is an excellent choice.",
      "highlight": "High-performance 40K LUT FPGA for demanding video and signal processing applications"
    },
    "faqs": [
      {
        "question": "What high-performance designs can be implemented with 40K LUTs?",
        "answer": "40K LUTs enables high-performance complex designs: 1) Multi-processor SoC: Quad-core RISC-V with cache and peripherals (25K LUTs). 2) 4K video processing: Real-time 4K60 video pipeline with effects (30K LUTs). 3) Software-defined radio: Multi-channel transceiver with DSP (28K LUTs). 4) High-speed data acquisition: 1GSPS+ acquisition with real-time processing (22K LUTs). 5) Industrial vision: Multi-camera system with AI preprocessing (32K LUTs). 6) Network acceleration: 10G packet processing and filtering (20K LUTs). The 40K capacity provides room for: Complex processing pipelines. Multiple interfaces and protocols. Embedded processors with operating systems. Significant DSP acceleration. Debug and monitoring features.",
        "decisionGuide": "40K LUTs handles most high-performance embedded designs. Contact us for architecture consultation.",
        "keywords": ["40K LUTs", "high performance", "complex designs", "SoC implementation"]
      },
      {
        "question": "What 4K video processing capabilities are available?",
        "answer": "UN5F400 4K video capabilities: Supported formats: 4K60 (3840x2160 at 60fps). 4K30 with complex processing. Multiple 1080p60 streams. Video processing functions: Real-time scaling and resizing. Color space conversion. Multi-layer compositing. Advanced filtering and enhancement. HDR tone mapping. Simple encoding/decoding. Memory requirements: 4K frame buffer: 24MB (4K x 2K x 3 bytes). Double buffering: 48MB minimum. Requires external DDR3/DDR4 memory. Interface support: HDMI 2.0 (4K60). DisplayPort 1.2. MIPI DSI/CSI. The 1.6Mb internal RAM handles line buffers and small frame stores. External memory handles full frame storage.",
        "decisionGuide": "Capable of 4K60 video processing with external memory. Contact us for video reference designs.",
        "keywords": ["4K video", "4K60", "video processing", "high resolution"]
      },
      {
        "question": "What is the DSP performance for signal processing?",
        "answer": "UN5F400 DSP performance: 80 DSP blocks, each 18x18 multiplier + 48-bit accumulator. Peak performance: 80 MACs per clock cycle. At 300MHz: 24 billion MACs/second (24 GMACS). DSP application performance: FIR filtering: 500+ tap filters at MHz rates. FFT: 4096-point FFT in <20 microseconds. Complex FFT: 2048-point in <15 microseconds. Matrix multiply: 8x8 matrix in <2 microseconds. FIR interpolation: 10x interpolation at 100MHz sample rate. Radar processing: Real-time pulse compression. Communication: 256-QAM modulation at 100MHz. The 80 DSP blocks provide professional-grade signal processing capability.",
        "decisionGuide": "80 DSP blocks provide substantial processing power for demanding signal processing applications.",
        "keywords": ["DSP performance", "24 GMACS", "signal processing", "FFT performance"]
      },
      {
        "question": "What high-speed interfaces are supported?",
        "answer": "UN5F400 high-speed interface support: High-speed serial transceivers: Up to 6.6 Gbps per lane. 4-8 lanes depending on package. Standards supported: PCIe Gen2 x4 (2.5 GT/s). SATA 3.0 (6 Gbps). Gigabit Ethernet (1G/2.5G/10G). USB 3.0 (5 Gbps). CPRI/OBSAI for wireless infrastructure. Custom high-speed protocols. Parallel interfaces: DDR3/DDR4 memory (up to 800 Mbps/pin). QSPI Flash (up to 100 MHz). Parallel Flash (up to 100 MHz). The high-speed transceivers enable: High-bandwidth data acquisition. Fast network connectivity. High-speed storage interfaces. Video and imaging interfaces. Communication system backhaul.",
        "decisionGuide": "Supports wide range of high-speed interfaces. Contact us for specific interface implementation.",
        "keywords": ["high-speed interfaces", "transceivers", "PCIe", "SATA", "10G Ethernet"]
      },
      {
        "question": "What external memory interfaces are supported?",
        "answer": "UN5F400 memory interface capabilities: DDR3 support: Up to 800 Mbps data rate. 16-bit or 32-bit data width. Up to 2GB addressable memory. DDR4 support: Up to 1200 Mbps data rate. 16-bit or 32-bit data width. Higher density support. QSPI Flash: Up to 100 MHz clock. 1-4 bit modes. For configuration and data storage. Parallel Flash: Up to 100 MHz. 8-bit or 16-bit data width. For fast configuration. Memory performance: 32-bit DDR3-800: 6.4 GB/s theoretical. 32-bit DDR4-1200: 9.6 GB/s theoretical. Typical achieved: 70-80% of theoretical. The external memory interface is crucial for: Large frame buffers. Processor memory. High-speed data buffers. Lookup tables and coefficients.",
        "decisionGuide": "Supports DDR3/DDR4 for high-performance external memory. Contact us for memory interface design.",
        "keywords": ["DDR3", "DDR4", "external memory", "memory interface", "bandwidth"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN5F400.pdf" }
  }
];

fpgaCategory.products.push(...additionalFpgaProducts);
console.log(`   FPGA & CPLD 分类现在有 ${fpgaCategory.products.length} 个产品`);

// ==================== MCU - 需要再添加1个产品 ====================
console.log('2. MCU 分类 - 添加更多产品...');
const mcuCategory = products.categories.find(c => c.id === 'mcu');

const additionalMcuProducts = [
  {
    "partNumber": "UN32L072",
    "name": "Ultra-Low-Power ARM Cortex-M0+ MCU with LCD",
    "nameCn": "Ultra-Low-Power ARM Cortex-M0+ MCU with LCD",
    "shortDescription": "Ultra-low-power ARM Cortex-M0+ MCU with 192KB Flash, 20KB RAM, and integrated LCD driver for battery-powered display applications.",
    "description": "The UN32L072 is an ultra-low-power ARM Cortex-M0+ microcontroller designed for battery-powered applications with display requirements.",
    "descriptionParagraphs": [
      "The UN32L072 features a 32MHz ARM Cortex-M0+ core with 192KB Flash memory and 20KB SRAM. The integrated LCD driver supports up to 8x28 or 4x32 segment displays, making it ideal for handheld devices and meters.",
      "Advanced ultra-low-power features include multiple low-power modes, down to 0.35uA in standby with RTC. The device includes USB 2.0 full-speed interface, multiple communication peripherals, and 12-bit ADC.",
      "Operating from 1.65V to 3.6V supply with industrial temperature range (-40C to +85C/125C). Available in LQFP-64 and LQFP-100 packages with LCD pins."
    ],
    "status": "active",
    "isPopular": false,
    "keywords": ["MCU", "ARM Cortex-M0+", "192KB Flash", "ultra low power", "LCD", "USB"],
    "specifications": {
      "Core": "ARM Cortex-M0+",
      "Flash": "192KB",
      "RAM": "20KB",
      "Speed": "32MHz",
      "GPIO": "84",
      "UART": "2",
      "SPI": "2",
      "I2C": "2",
      "USB": "USB 2.0 FS",
      "LCD": "8x28 or 4x32 segments",
      "ADC": "12-bit, 16 channels",
      "Package": "LQFP-64, LQFP-100"
    },
    "applications": ["Utility meters", "Handheld devices", "Medical devices", "Sensor nodes with display", "Battery-powered IoT"],
    "features": ["Cortex-M0+", "192KB Flash", "Ultra low power", "LCD driver", "USB", "0.35uA standby"],
    "stock": { "status": "in_stock", "quantity": 30000, "minOrderQty": 100, "leadTime": "Stock available, 1-2 days" },
    "pricing": {
      "currency": "USD",
      "unit": "per piece",
      "tiers": [
        { "minQty": 100, "price": 1.65 },
        { "minQty": 500, "price": 1.32 },
        { "minQty": 2000, "price": 1.05 },
        { "minQty": 10000, "price": 0.82 }
      ]
    },
    "alternativeParts": [
      {
        "partNumber": "UN32F051",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f051.html",
        "reason": "Lower cost version without LCD for simpler applications",
        "useCase": "Use when LCD is not needed and cost is priority",
        "specifications": { "Core": "ARM Cortex-M0", "Flash": "64KB", "RAM": "8KB", "LCD": "No" },
        "comparison": "UN32L072=>UN32F051: Core: M0 < M0+ (less efficient), Flash: 64KB < 192KB (-67%), RAM: 8KB < 20KB (-60%), LCD: None, Price: Approximately 50% lower"
      },
      {
        "partNumber": "UN32F103",
        "brand": "UNISemicon",
        "link": "/unisemicon/products/mcu/un32f103.html",
        "reason": "Higher performance M3 version when processing power is priority",
        "useCase": "Use when higher performance is needed and LCD is not required",
        "specifications": { "Core": "ARM Cortex-M3", "Flash": "128KB", "RAM": "20KB", "Speed": "72MHz" },
        "comparison": "UN32L072=>UN32F103: Core: M3 > M0+ (higher performance), Flash: 128KB < 192KB (-33%), LCD: None, USB: No, Price: Approximately same"
      }
    ],
    "companionParts": [
      { "partNumber": "LCD-Module-8x28", "link": "#", "description": "8x28 segment LCD module", "category": "Display" },
      { "partNumber": "UN32L072-EVB", "link": "#", "description": "Evaluation board with LCD", "category": "Evaluation Board" },
      { "partNumber": "ST-Link-V2", "link": "#", "description": "Debug/programming tool", "category": "Programming Tool" }
    ],
    "faeReview": {
      "rating": 4.7,
      "author": "Zhang Hua",
      "title": "FAE - Low-Power Display Applications",
      "content": "The UN32L072 is my top recommendation for battery-powered devices with display requirements. The integrated LCD driver eliminates the need for external display controllers, reducing BOM cost and complexity. I have used this in utility meters, handheld measurement devices, and medical monitors. The ultra-low power consumption is exceptional - 0.35uA in standby with RTC running enables multi-year battery life. The USB interface allows easy firmware updates and data transfer. The 192KB Flash accommodates complex applications with graphics libraries. At under $1 in volume, it offers outstanding value compared to MCU + external LCD controller solutions. For any battery-powered device needing a segment LCD display, the UN32L072 is the ideal choice.",
      "highlight": "Ultra-low-power MCU with integrated LCD driver for battery-powered display applications"
    },
    "faqs": [
      {
        "question": "What types of LCD displays are supported?",
        "answer": "UN32L072 LCD driver capabilities: Display types: 7-segment numeric displays. 14-segment alphanumeric displays. Dot matrix displays (up to 8x28 or 4x32 segments). Custom icon displays. Configuration: 8 common lines x 28 segment lines (224 segments max). 4 common lines x 32 segment lines (128 segments max). Adjustable contrast via software. Multiple bias levels (1/2, 1/3, 1/4). Frame frequency: 32Hz to 1024Hz configurable. Low-power operation: LCD driver operates in sleep mode. Consumes only 3-5uA with LCD active. Supports static and multiplexed displays. The integrated driver eliminates external LCD controller IC.",
        "decisionGuide": "Supports most segment LCD types. Check segment count against your display requirements.",
        "keywords": ["LCD driver", "segment display", "7-segment", "14-segment", "dot matrix"]
      },
      {
        "question": "How long can the device run on a coin cell battery?",
        "answer": "UN32L072 battery life calculation: Typical application: Utility meter with LCD display. Power consumption: Active (1% of time): 3mA x 0.01 = 30uA average. Sleep with LCD: 5uA x 0.99 = 4.95uA average. Total average: approximately 35uA. With CR2032 battery (225mAh): 225mAh / 0.035mA = 6,428 hours = 267 days. With optimized duty cycle (0.1% active): 225mAh / 0.008mA = 28,125 hours = 3.2 years. Factors affecting battery life: Display size and update rate. Sensor measurement frequency. Communication frequency. Temperature (lower at high temps). With careful power management, 3-5 year battery life is achievable.",
        "decisionGuide": "3-5 year battery life achievable with proper power management. Optimize active duty cycle.",
        "keywords": ["battery life", "coin cell", "CR2032", "power consumption", "long life"]
      },
      {
        "question": "What is the difference between Cortex-M0 and M0+?",
        "answer": "Cortex-M0 vs M0+ comparison: M0+ improvements over M0: Single-cycle GPIO access (faster I/O). Improved debug capabilities. Optional MTB (Micro Trace Buffer). Better code density (some instructions). Lower power consumption per MHz. Lower interrupt latency. Single-cycle multiplier (on some implementations). Performance: M0+: 0.93 DMIPS/MHz. M0: 0.84 DMIPS/MHz. Approximately 10% better performance. Power: M0+ is more power efficient. Better for battery-powered applications. Software compatibility: Code compatible between M0 and M0+. Same instruction set. Easy migration path. Recommendation: Choose M0+ for new designs. Better performance and power efficiency. Only choose M0 for cost-critical applications.",
        "decisionGuide": "M0+ offers better efficiency and performance. Recommended for new designs.",
        "keywords": ["Cortex-M0+", "Cortex-M0", "comparison", "power efficiency"]
      },
      {
        "question": "Can the USB interface be used for firmware updates?",
        "answer": "UN32L072 USB firmware update capabilities: USB bootloader: Built-in USB bootloader in ROM. Device enumerates as USB mass storage or DFU. Drag-and-drop firmware updates. No additional hardware needed. Implementation: Hold boot pin during reset to enter bootloader. Copy firmware file to virtual drive. Device programs Flash automatically. Reset to run new firmware. Security: Bootloader can be disabled for production. Write protection for bootloader region. Option bytes for configuration. Development: USB DFU tools available. Custom USB applications supported. USB VCP (virtual COM port) for debugging. The USB interface provides convenient field firmware updates without dedicated programmers.",
        "decisionGuide": "USB bootloader enables easy field updates. Can be disabled for security if needed.",
        "keywords": ["USB bootloader", "firmware update", "DFU", "field update"]
      },
      {
        "question": "What development tools are supported?",
        "answer": "UN32L072 development ecosystem: IDEs: STM32CubeIDE (free, recommended). Keil MDK-ARM. IAR Embedded Workbench. PlatformIO. Debug tools: ST-Link/V2 or V3. J-Link. Software libraries: STM32CubeL0 HAL and LL drivers. FreeRTOS port available. USB Device Library. LCD driver examples. Example projects: Utility meter reference design. Handheld device template. Low-power sensor node. USB device examples. The extensive ecosystem makes development straightforward. Many examples and application notes available.",
        "decisionGuide": "STM32CubeIDE recommended for development. Extensive example code available.",
        "keywords": ["development tools", "STM32CubeIDE", "HAL", "examples"]
      }
    ],
    "resources": { "datasheet": "/resources/datasheets/unisemicon/UN32L072.pdf" }
  }
];

mcuCategory.products.push(...additionalMcuProducts);
console.log(`   MCU 分类现在有 ${mcuCategory.products.length} 个产品`);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('\n文件已保存！');

// 验证
console.log('\n验证结果:');
products.categories.forEach(cat => {
  console.log(`   - ${cat.name}: ${cat.products.length} 个产品 ${cat.products.length >= 6 ? '✓' : '✗'}`);
});
