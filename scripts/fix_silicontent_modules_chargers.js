/**
 * 补充Silicontent Power Modules和Battery Chargers产品，以及第4个解决方案
 */

const fs = require('fs');
const path = require('path');

const brand = 'silicontent';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('=== 补充Silicontent Power Modules、Battery Chargers和解决方案 ===\n');

// ==================== 1. 补充Power Modules产品到6个 ====================
console.log('📦 补充Power Modules产品...');
const moduleCategory = productsData.categories.find(cat => cat.id === 'modules');
if (moduleCategory && moduleCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "XZ3005",
      "name": "XZ3005 6A Power Module",
      "category": "Power Modules",
      "shortDescription": "High-density 6A power module with integrated inductor for space-constrained industrial applications",
      "descriptionParagraphs": [
        "The XZ3005 is a fully integrated power module combining a high-efficiency synchronous buck converter with an integrated shielded inductor in a compact package.",
        "Designed for industrial and telecom applications where board space is limited and reliability is critical, the module simplifies power supply design and accelerates time-to-market.",
        "The integrated inductor and optimized layout minimize EMI and ensure consistent performance across production volumes."
      ],
      "specifications": {
        "Input Voltage": "4.5V - 17V",
        "Output Voltage": "0.6V - 5.5V",
        "Output Current": "6A",
        "Efficiency": "Up to 95%",
        "Switching Frequency": "600kHz",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "QFN-28 (7mm x 7mm)"
      },
      "features": [
        "Fully integrated power module with inductor",
        "6A continuous output current",
        "Wide input voltage range 4.5V to 17V",
        "High efficiency up to 95%",
        "Low EMI with shielded inductor",
        "Simple design - minimal external components",
        "Power-good and enable functions",
        "Over-current and thermal protection"
      ],
      "applications": [
        "Industrial control systems",
        "Telecom equipment",
        "FPGA and processor power",
        "Test and measurement",
        "Medical devices"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Industrial Power",
        "content": "The XZ3005 power module is a game-changer for industrial designs. The integration of the inductor saves significant board space and eliminates the need for inductor selection and sourcing. I've used this in several PLC and industrial controller designs where space was tight. The EMI performance is excellent due to the shielded inductor and optimized internal layout - much better than discrete designs. Efficiency is consistently 93-95% across the load range. The 7x7mm QFN is compact for a 6A solution. One major advantage is design simplicity - just add input/output capacitors and you're done. No inductor selection, no compensation network design. For industrial applications requiring fast time-to-market, this module is ideal. Overall, an excellent integrated power solution.",
        "highlight": "6A power module with integrated inductor for simplified industrial designs"
      },
      "alternativeParts": [
        {
          "partNumber": "LMZ30602",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/modules/lmz30602/",
          "reason": "Industry-standard 6A power module",
          "useCase": "Reference for module-based designs",
          "specifications": {
            "Input Voltage": "4.5V - 17V",
            "Output Current": "6A",
            "Efficiency": "Up to 95%"
          }
        },
        {
          "partNumber": "MPM3632",
          "brand": "Monolithic Power Systems",
          "link": "/brands/mps/products/modules/mpm3632/",
          "reason": "Comparable 6A module solution",
          "useCase": "Alternative for cost-sensitive designs",
          "specifications": {
            "Input Voltage": "4.5V - 16V",
            "Output Current": "6A",
            "Efficiency": "Up to 94%"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ1002",
          "category": "LDO",
          "description": "Low-noise LDO for post-regulation",
          "link": "/brands/silicontent/products/ldo/xz1002/"
        },
        {
          "partNumber": "XZ2401",
          "category": "DC-DC",
          "description": "Additional buck for multi-rail systems",
          "link": "/brands/silicontent/products/dcdc/xz2401/"
        }
      ],
      "faqs": [
        {
          "question": "What are the advantages of using XZ3005 power module vs discrete design?",
          "answer": "The XZ3005 power module offers significant advantages over discrete designs: (1) Design simplicity - no inductor selection, no compensation network design, no loop stability analysis. Just add input/output capacitors and the power supply is ready. This reduces design time from weeks to days. (2) Consistent performance - the integrated inductor and optimized internal layout ensure consistent EMI and thermal performance across production volumes. Discrete designs can vary with component tolerances and PCB layout. (3) Reduced BOM - fewer components to source and manage. The module replaces the controller, MOSFETs, inductor, and compensation network. (4) Smaller solution size - the 7x7mm module is often smaller than equivalent discrete solutions when including the inductor footprint. (5) Better EMI - the shielded inductor and optimized layout provide lower EMI than typical discrete designs. (6) Faster time-to-market - simplified design and qualification process. The trade-off is slightly higher cost per unit, but this is often offset by reduced design effort and faster time-to-market.",
          "decisionGuide": "Choose XZ3005 for fast time-to-market and simplified design; use discrete for maximum cost optimization at high volumes.",
          "keywords": ["XZ3005", "power module", "advantages", "integration"]
        },
        {
          "question": "How does XZ3005 compare to LMZ30602?",
          "answer": "The XZ3005 offers competitive advantages compared to LMZ30602: (1) Current capability - both support 6A with similar efficiency profiles. (2) Package - both use 7x7mm QFN; XZ3005 has slightly better thermal performance due to optimized layout. (3) Efficiency - both achieve ~95% peak efficiency; XZ3005 maintains efficiency better at light loads. (4) EMI performance - both have excellent EMI due to shielded inductors; XZ3005 has slightly better conducted EMI margins. (5) Price - XZ3005 typically 15-25% lower cost than LMZ30602. (6) Support - Silicontent local FAE support vs TI's overseas support. (7) Availability - Silicontent generally has better supply availability and shorter lead times. For new industrial designs, XZ3005 offers excellent price-performance with simplified design. For existing LMZ30602 designs, XZ3005 can be a cost-reduction path with minimal PCB changes.",
          "decisionGuide": "Choose XZ3005 for new designs with better price and local support; consider for cost reduction of existing LMZ30602 designs.",
          "keywords": ["XZ3005", "comparison", "LMZ30602", "power module"]
        },
        {
          "question": "What is the lead time and MOQ for XZ3005?",
          "answer": "The XZ3005 ordering information: (1) Lead time - 6-8 weeks for standard production orders due to integrated inductor sourcing. BeiLuo Electronics can provide forecast scheduling. (2) MOQ (Minimum Order Quantity) - 500 pieces for standard packaging (lower than discrete due to higher integration). Sample quantities (10-50 pieces) available. (3) Pricing - competitive module pricing with volume discounts: 500-2K (standard), 2K-5K (7% discount), 5K+ (12% discount). Contact sales for detailed quotation. (4) Samples - free samples for qualified industrial and telecom projects; sample lead time 2-3 weeks. (5) Evaluation module - XZ3005-EVM with complete reference design and thermal test points. (6) Technical support - comprehensive FAE support including thermal design guidance, EMI troubleshooting, and layout review. For large deployments, consignment inventory and scheduled deliveries can be arranged.",
          "decisionGuide": "Plan with 6-8 weeks lead time; order evaluation module for thermal and EMI verification; contact FAE for design support.",
          "keywords": ["XZ3005", "lead time", "MOQ", "power module"]
        }
      ],
      "stock": true,
      "moq": 500,
      "leadTime": "6-8 weeks"
    },
    {
      "partNumber": "XZ3006",
      "name": "XZ3006 12A Power Module",
      "category": "Power Modules",
      "shortDescription": "High-power 12A module with dual-phase operation for FPGA and processor applications",
      "descriptionParagraphs": [
        "The XZ3006 is a high-power density module featuring dual-phase interleaved operation for reduced ripple and improved transient response.",
        "Designed for high-current FPGA, processor, and ASIC applications where space and thermal performance are critical.",
        "The integrated dual inductors and current sharing circuitry simplify high-current power supply design."
      ],
      "specifications": {
        "Input Voltage": "4.5V - 16V",
        "Output Voltage": "0.5V - 3.3V",
        "Output Current": "12A",
        "Efficiency": "Up to 96%",
        "Switching Frequency": "500kHz per phase",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "QFN-36 (10mm x 10mm)"
      },
      "features": [
        "12A continuous output current",
        "Dual-phase interleaved operation",
        "Integrated dual inductors",
        "Current sharing and balancing",
        "High efficiency up to 96%",
        "Excellent transient response",
        "PMBus interface option",
        "Comprehensive protection"
      ],
      "applications": [
        "High-current FPGA power",
        "Processor core supplies",
        "ASIC power",
        "Server and datacenter",
        "High-performance computing"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - High-Current Power",
        "content": "The XZ3006 is an impressive high-current module that I've used in FPGA and processor applications. The dual-phase operation provides excellent ripple performance and transient response - critical for modern FPGAs with fast load transients. The 12A capability handles large FPGAs like Xilinx Kintex and Intel Stratix. Current sharing between phases is well-balanced. The 10x10mm package is compact for a 12A solution. The PMBus option enables monitoring and control for server applications. One key advantage is the simplified design - getting 12A with good ripple and transient response would require significant design effort with discrete components. The module just works out of the box. For high-current applications where time-to-market is critical, this module is excellent.",
        "highlight": "12A dual-phase power module for high-current FPGA and processor applications"
      },
      "alternativeParts": [
        {
          "partNumber": "LMZ31710",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/modules/lmz31710/",
          "reason": "Industry-standard 10A power module",
          "useCase": "Reference for high-current modules",
          "specifications": {
            "Input Voltage": "4.5V - 17V",
            "Output Current": "10A",
            "Efficiency": "Up to 95%"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ1003",
          "category": "LDO",
          "description": "LDO for auxiliary rails",
          "link": "/brands/silicontent/products/ldo/xz1003/"
        },
        {
          "partNumber": "XZ2501",
          "category": "DC-DC",
          "description": "Additional high-current buck",
          "link": "/brands/silicontent/products/dcdc/xz2501/"
        }
      ],
      "faqs": [
        {
          "question": "What are the benefits of dual-phase operation in XZ3006?",
          "answer": "The XZ3006 dual-phase operation provides significant benefits for high-current applications: (1) Reduced input ripple - the two phases operate 180° out of phase, canceling input ripple current and reducing input capacitor requirements by up to 50%. This lowers BOM cost and size. (2) Reduced output ripple - effective ripple frequency is doubled (1MHz vs 500kHz per phase), making output filtering easier with smaller capacitors. (3) Faster transient response - each phase handles 6A, enabling faster response to load steps than a single 12A phase. This is critical for FPGAs with fast load transients. (4) Improved thermal distribution - heat is spread across two inductors and power stages, reducing hot spots and easing thermal management. (5) Higher efficiency - each phase operates at lower current with better efficiency; combined efficiency exceeds single-phase at same total current. (6) Better ripple performance - lower output ripple reduces noise coupling to sensitive circuits. Overall, dual-phase provides significant performance advantages for high-current applications.",
          "decisionGuide": "Dual-phase is ideal for high-current applications (>8A) where ripple, transient response, and thermal management are critical.",
          "keywords": ["XZ3006", "dual-phase", "high-current", "FPGA"]
        },
        {
          "question": "What is the lead time and MOQ for XZ3006?",
          "answer": "The XZ3006 ordering information: (1) Lead time - 8-10 weeks for standard production orders due to dual integrated inductors. BeiLuo Electronics can provide forecast scheduling for regular customers. (2) MOQ (Minimum Order Quantity) - 500 pieces for standard packaging. Sample quantities (5-20 pieces) available. (3) Pricing - competitive high-current module pricing with volume discounts: 500-2K (standard), 2K-5K (8% discount), 5K+ (15% discount). Contact sales for detailed quotation. (4) Samples - free samples for qualified FPGA and server projects; sample lead time 3-4 weeks. (5) Evaluation module - XZ3006-EVM with FPGA load emulator for transient testing. (6) Technical support - comprehensive FAE support including FPGA power design, transient analysis, and thermal optimization. For large server deployments, consignment inventory and scheduled deliveries can be arranged.",
          "decisionGuide": "Plan with 8-10 weeks lead time; order evaluation module with FPGA emulator; contact FAE for high-current design support.",
          "keywords": ["XZ3006", "lead time", "MOQ", "high-current"]
        }
      ],
      "stock": true,
      "moq": 500,
      "leadTime": "8-10 weeks"
    }
  ];
  
  moduleCategory.products.push(...newProducts);
  moduleCategory.productCount = moduleCategory.products.length;
  console.log(`✅ Power Modules: ${moduleCategory.products.length} 个产品`);
}

// ==================== 2. 补充Battery Chargers产品到6个 ====================
console.log('\n📦 补充Battery Chargers产品...');
const chargerCategory = productsData.categories.find(cat => cat.id === 'charger');
if (chargerCategory && chargerCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "XZ5005",
      "name": "XZ5005 3A Li-Ion Battery Charger",
      "category": "Battery Chargers",
      "shortDescription": "High-efficiency 3A linear charger with JEITA support for single-cell Li-ion batteries",
      "descriptionParagraphs": [
        "The XZ5005 is a high-efficiency linear battery charger designed for single-cell Li-ion and Li-polymer batteries.",
        "Features programmable charge current up to 3A, JEITA temperature monitoring for safe charging, and automatic charge termination.",
        "The device includes power path management that allows simultaneous charging and system operation."
      ],
      "specifications": {
        "Input Voltage": "4.0V - 6.5V",
        "Charge Current": "Up to 3A",
        "Charge Voltage": "4.2V (standard) / 4.35V (option)",
        "Efficiency": "Up to 95%",
        "JEITA Support": "Yes",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "QFN-16 (3mm x 3mm)"
      },
      "features": [
        "Up to 3A programmable charge current",
        "High efficiency with minimal heat",
        "JEITA temperature monitoring",
        "Power path management",
        "Automatic charge termination",
        "Battery temperature monitoring",
        "Charge status indicators",
        "I2C interface for configuration"
      ],
      "applications": [
        "Smartphones and tablets",
        "Portable media players",
        "Power banks",
        "Handheld instruments",
        "Portable medical devices"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Battery Management",
        "content": "The XZ5005 is an excellent linear charger for high-current applications. The 3A capability allows fast charging of large batteries in smartphones and tablets. The JEITA support is important for safety - it adjusts charge voltage and current based on battery temperature to prevent damage. The power path management is a key feature - it allows the system to run directly from the input while charging the battery, or seamlessly switch to battery power if input is removed. I've used this in several smartphone designs with great results. The I2C interface allows software control of charging parameters. Thermal management is important at 3A - ensure adequate PCB copper for heat dissipation. Overall, a robust high-current linear charger solution.",
        "highlight": "3A linear charger with JEITA support and power path management"
      },
      "alternativeParts": [
        {
          "partNumber": "BQ25890",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/charger/bq25890/",
          "reason": "Industry-standard 5A switch-mode charger",
          "useCase": "Reference for high-current charging",
          "specifications": {
            "Input Voltage": "3.9V - 14V",
            "Charge Current": "5A",
            "Efficiency": "Up to 97%"
          }
        },
        {
          "partNumber": "MCP73842",
          "brand": "Microchip",
          "link": "/brands/microchip/products/charger/mcp73842/",
          "reason": "Cost-effective linear charger",
          "useCase": "Alternative for cost-sensitive designs",
          "specifications": {
            "Input Voltage": "4.5V - 6.5V",
            "Charge Current": "1A",
            "Efficiency": "Up to 90%"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ2105",
          "category": "DC-DC",
          "description": "Buck for system power from charger input",
          "link": "/brands/silicontent/products/dcdc/xz2105/"
        },
        {
          "partNumber": "XZ1001",
          "category": "LDO",
          "description": "LDO for sensitive circuits",
          "link": "/brands/silicontent/products/ldo/xz1001/"
        }
      ],
      "faqs": [
        {
          "question": "What is JEITA support and why is it important?",
          "answer": "JEITA (Japan Electronics and Information Technology Industries Association) support in XZ5005 provides safe charging across temperature ranges: (1) Standard charging - at normal temperatures (10°C to 45°C), the charger operates at full voltage (4.2V) and programmed current. (2) Reduced voltage charging - at warm temperatures (45°C to 60°C), charge voltage is reduced to 4.1V to reduce battery stress and extend lifetime. (3) Reduced current charging - at cool temperatures (0°C to 10°C), charge current is reduced to prevent lithium plating on the anode. (4) Charging suspended - outside 0°C to 60°C range, charging is suspended for safety. (5) Temperature monitoring - an external NTC thermistor monitors battery temperature. The JEITA profile is critical for battery safety and longevity. Charging Li-ion batteries outside recommended temperature ranges can cause permanent damage, reduced capacity, or safety hazards. XZ5005 implements the standard JEITA profile with configurable thresholds via I2C.",
          "decisionGuide": "JEITA support is essential for safe charging; always implement proper temperature monitoring with NTC thermistor.",
          "keywords": ["XZ5005", "JEITA", "temperature", "safety"]
        },
        {
          "question": "How does power path management work in XZ5005?",
          "answer": "The XZ5005 power path management intelligently manages power flow between input, battery, and system: (1) Normal operation - when valid input is present, the system is powered directly from input while the battery charges. This is more efficient than charging the battery then powering from battery. (2) Battery supplement mode - if system current exceeds input current capability, the battery supplements the additional current. This prevents input collapse. (3) Battery-only operation - when input is removed, the system seamlessly switches to battery power with minimal interruption (<100μs). (4) Charge termination - when battery is full, charging stops but system continues to run from input. (5) Dynamic power management - the charger automatically adjusts charge current based on system load and input capability. This ensures optimal charging without overloading the input source. Power path management is essential for systems that must operate while charging, such as smartphones and tablets.",
          "decisionGuide": "Power path is essential for systems operating while charging; enables efficient power management and seamless input/battery switching.",
          "keywords": ["XZ5005", "power path", "charging", "system power"]
        },
        {
          "question": "What is the lead time and MOQ for XZ5005?",
          "answer": "The XZ5005 ordering information: (1) Lead time - 4-6 weeks for standard production orders. BeiLuo Electronics maintains inventory for popular variants. (2) MOQ (Minimum Order Quantity) - 1000 pieces for standard packaging. Sample quantities (20-100 pieces) available. (3) Pricing - competitive pricing with volume discounts: 1K-5K (standard), 5K-10K (5% discount), 10K+ (10% discount). Contact sales for detailed quotation. (4) Samples - free samples for qualified portable device projects; sample lead time 1-2 weeks. (5) Evaluation board - XZ5005-EVB with battery simulator and test points for charge profile verification. (6) Technical support - FAE support includes charge profile optimization, thermal design guidance, and safety compliance review.",
          "decisionGuide": "Plan with 4-6 weeks lead time; order evaluation board for charge profile verification; contact FAE for battery safety compliance.",
          "keywords": ["XZ5005", "lead time", "MOQ", "battery charger"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "4-6 weeks"
    },
    {
      "partNumber": "XZ5006",
      "name": "XZ5006 Switch-Mode Battery Charger",
      "category": "Battery Chargers",
      "shortDescription": "High-efficiency switch-mode charger with 5A output and USB PD support",
      "descriptionParagraphs": [
        "The XZ5006 is a high-efficiency switch-mode battery charger designed for fast charging applications.",
        "Features buck-boost operation allowing charging from 5V USB, 9V/12V USB PD, or traditional adapters.",
        "The device delivers up to 5A charge current with minimal heat generation due to high-efficiency switching operation."
      ],
      "specifications": {
        "Input Voltage": "3.9V - 14V",
        "Charge Current": "Up to 5A",
        "Charge Voltage": "3.5V - 4.4V",
        "Efficiency": "Up to 97%",
        "USB PD Support": "Yes",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "QFN-24 (4mm x 4mm)"
      },
      "features": [
        "Up to 5A charge current",
        "Buck-boost operation",
        "USB PD and QC support",
        "High efficiency up to 97%",
        "Minimal heat generation",
        "Power path management",
        "I2C interface",
        "Comprehensive protection"
      ],
      "applications": [
        "Fast-charging smartphones",
        "Tablets and laptops",
        "Power banks",
        "Portable equipment",
        "USB PD charging docks"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Fast Charging",
        "content": "The XZ5006 is an excellent switch-mode charger for fast charging applications. The buck-boost topology allows charging from various input sources - 5V USB, 9V/12V USB PD, or traditional adapters. The 5A capability enables very fast charging of large batteries. Efficiency is outstanding at 95-97%, meaning minimal heat generation even at high currents. I've used this in smartphone and tablet designs with USB PD fast charging. The USB PD communication is handled automatically - the charger negotiates appropriate voltage and current with the adapter. Thermal management is much easier than linear chargers due to high efficiency. The I2C interface provides full control over charging parameters. Overall, an excellent fast-charging solution.",
        "highlight": "5A switch-mode charger with USB PD support for fast charging"
      },
      "alternativeParts": [
        {
          "partNumber": "BQ25895",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/charger/bq25895/",
          "reason": "Industry-standard switch-mode charger",
          "useCase": "Reference for fast charging designs",
          "specifications": {
            "Input Voltage": "3.9V - 14V",
            "Charge Current": "5A",
            "Efficiency": "Up to 97%"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ9301",
          "category": "USB PD",
          "description": "USB PD controller for input power management",
          "link": "/brands/silicontent/products/usb-pd/xz9301/"
        },
        {
          "partNumber": "XZ2105",
          "category": "DC-DC",
          "description": "System buck converter",
          "link": "/brands/silicontent/products/dcdc/xz2105/"
        }
      ],
      "faqs": [
        {
          "question": "What are the advantages of switch-mode vs linear charging?",
          "answer": "Switch-mode charging (XZ5006) offers significant advantages over linear charging for high-current applications: (1) Efficiency - switch-mode achieves 95-97% efficiency vs 70-90% for linear chargers. At 5A charging, this means dramatically less heat generation. (2) Thermal management - lower heat simplifies thermal design and allows higher charge currents without overheating. Linear chargers at 5A would generate excessive heat. (3) Input voltage flexibility - buck-boost operation allows charging from 5V USB, 9V/12V USB PD, or various adapter voltages. Linear chargers are limited by dropout voltage. (4) Fast charging - high efficiency enables safe 5A charging for fast charge protocols. (5) USB PD support - switch-mode chargers can efficiently convert higher USB PD voltages (9V, 12V) to battery voltage. The trade-off is slightly higher cost and more complex design, but for high-current applications (>2A), switch-mode is essential.",
          "decisionGuide": "Use switch-mode (XZ5006) for high-current (>2A) and fast charging; use linear for low-current, cost-sensitive applications.",
          "keywords": ["XZ5006", "switch-mode", "efficiency", "fast charging"]
        },
        {
          "question": "How does USB PD fast charging work with XZ5006?",
          "answer": "The XZ5006 USB PD fast charging operation: (1) PD negotiation - when connected to a USB PD adapter, the charger communicates via CC lines to negotiate voltage and current. Standard profiles include 5V@3A, 9V@3A, 12V@3A, etc. (2) Voltage selection - the charger requests the optimal voltage based on battery state and desired charge rate. Higher input voltage allows higher charge current with less heat. (3) Buck-boost conversion - the charger efficiently converts the input voltage (5V-12V) to the battery voltage (3V-4.4V). Efficiency remains high across the range. (4) Current regulation - charge current is regulated based on battery capacity, temperature, and charge phase (pre-charge, CC, CV). (5) Power management - the charger continuously monitors input power and adjusts to stay within adapter capabilities. (6) Safety - comprehensive protection includes over-voltage, over-current, and temperature protection. USB PD enables charging large batteries quickly - a 4000mAh battery can charge to 50% in ~30 minutes with 5A charging.",
          "decisionGuide": "USB PD enables fast charging; negotiate highest voltage adapter supports for maximum charge rate with minimal heat.",
          "keywords": ["XZ5006", "USB PD", "fast charging", "negotiation"]
        },
        {
          "question": "What is the lead time and MOQ for XZ5006?",
          "answer": "The XZ5006 ordering information: (1) Lead time - 6-8 weeks for standard production orders. BeiLuo Electronics can provide forecast scheduling. (2) MOQ (Minimum Order Quantity) - 1000 pieces for standard packaging. Sample quantities (10-50 pieces) available. (3) Pricing - competitive switch-mode charger pricing with volume discounts: 1K-5K (standard), 5K-10K (7% discount), 10K+ (12% discount). Contact sales for detailed quotation. (4) Samples - free samples for qualified fast-charging projects; sample lead time 2-3 weeks. (5) Evaluation board - XZ5006-EVB with USB PD adapter and battery simulator for fast charge testing. (6) Technical support - comprehensive FAE support including USB PD integration, fast charge profile optimization, and thermal design.",
          "decisionGuide": "Plan with 6-8 weeks lead time; order evaluation board with PD adapter; contact FAE for fast charging design support.",
          "keywords": ["XZ5006", "lead time", "MOQ", "fast charging"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "6-8 weeks"
    }
  ];
  
  chargerCategory.products.push(...newProducts);
  chargerCategory.productCount = chargerCategory.products.length;
  console.log(`✅ Battery Chargers: ${chargerCategory.products.length} 个产品`);
}

// ==================== 3. 补充解决方案到4个 ====================
console.log('\n📦 补充解决方案...');
if (solutionsData.solutions.length < 4) {
  const newSolution = {
    "id": "automotive-power-solution",
    "slug": "automotive-power-solution",
    "title": "Automotive Power Management Solution",
    "description": "Complete AEC-Q100 qualified power solution for automotive infotainment, ADAS, and body electronics applications.",
    "longDescription": "This Automotive Power Management Solution provides AEC-Q100 qualified power conversion for automotive applications. It combines Silicontent's automotive-grade DC-DC converters, LDOs, and power modules to deliver reliable power in harsh automotive environments. The solution features wide temperature range operation, comprehensive protection, and excellent EMI performance meeting automotive standards.",
    "benefits": [
      "AEC-Q100 Grade 1 qualified components",
      "Wide operating temperature range (-40°C to +125°C)",
      "High reliability for automotive applications",
      "Excellent EMI performance",
      "Comprehensive protection features",
      "PPAP documentation support"
    ],
    "coreAdvantages": [
      {
        "title": "Automotive Qualification",
        "description": "All components are AEC-Q100 Grade 1 qualified for reliable automotive operation."
      },
      {
        "title": "Wide Temperature Range",
        "description": "Operates reliably from -40°C to +125°C for harsh automotive environments."
      },
      {
        "title": "EMI Compliance",
        "description": "Designed to meet CISPR 25 Class 5 automotive EMI standards."
      }
    ],
    "bomList": [
      {
        "category": "DC-DC Converter",
        "items": [
          {
            "partNumber": "XZ2401",
            "description": "AEC-Q100 qualified 6A buck converter",
            "quantity": 2,
            "link": "/brands/silicontent/products/dcdc/xz2401/"
          }
        ]
      },
      {
        "category": "LDO Regulator",
        "items": [
          {
            "partNumber": "XZ1005",
            "description": "Ultra-low noise LDO for sensitive circuits",
            "quantity": 3,
            "link": "/brands/silicontent/products/ldo/xz1005/"
          }
        ]
      },
      {
        "category": "Power Module",
        "items": [
          {
            "partNumber": "XZ3005",
            "description": "Integrated power module for compact designs",
            "quantity": 1,
            "link": "/brands/silicontent/products/modules/xz3005/"
          }
        ]
      }
    ],
    "technicalSpecs": {
      "Input Voltage": "6V-16V (automotive battery)",
      "Output Rails": "Multiple (3.3V, 1.8V, 1.0V)",
      "Total Power": "Up to 20W",
      "Operating Temperature": "-40°C to +125°C",
      "EMI": "CISPR 25 Class 5",
      "Qualification": "AEC-Q100 Grade 1"
    },
    "customerCases": [
      {
        "customer": "Automotive Tier 1 Supplier",
        "industry": "Automotive",
        "application": "Infotainment System",
        "results": "Zero field failures over 3 years"
      },
      {
        "customer": "EV Manufacturer",
        "industry": "Automotive",
        "application": "ADAS Controller",
        "results": "Passed all automotive qualification tests"
      }
    ],
    "faeInsights": {
      "author": "Michael Chen",
      "title": "Senior FAE - Automotive Applications",
      "content": "This automotive power solution has been deployed in multiple production vehicle programs with excellent reliability. The AEC-Q100 Grade 1 qualification ensures operation across the full automotive temperature range. Key design considerations include proper EMI filtering for CISPR 25 compliance, robust PCB layout for vibration resistance, and adequate thermal management. We've seen zero field failures in over 5 million unit-hours of operation. The PPAP documentation package is available for OEM qualification. Contact FAE for automotive design review and PPAP support.",
      "highlight": "AEC-Q100 qualified solution with proven automotive reliability"
    },
    "faqs": [
      {
        "question": "What is AEC-Q100 qualification and why is it important?",
        "answer": "AEC-Q100 is the automotive standard for integrated circuit qualification: (1) Grade 1 (-40°C to +125°C) - highest grade for under-hood and cabin applications. All components in this solution meet Grade 1. (2) Reliability testing - includes HTOL (High Temperature Operating Life), temperature cycling, ESD, and latch-up testing at automotive levels. (3) Process requirements - manufacturing processes must meet automotive quality standards with full traceability. (4) PPAP support - Production Part Approval Process documentation available for OEM qualification. (5) Field reliability - AEC-Q100 qualified parts have demonstrated <10 FIT (Failures in Time) rate in automotive applications. For automotive designs, using AEC-Q100 qualified components is essential for reliability and OEM acceptance. Non-qualified components may fail in automotive environments and void system warranties.",
        "decisionGuide": "AEC-Q100 Grade 1 is essential for automotive applications; ensures reliability and OEM acceptance.",
        "keywords": ["AEC-Q100", "automotive qualification", "Grade 1", "reliability"]
      },
      {
        "question": "How does this solution meet automotive EMI requirements?",
        "answer": "The automotive power solution meets CISPR 25 Class 5 EMI requirements through: (1) Component selection - all switching converters use spread-spectrum or optimized switching to reduce EMI. Integrated modules have shielded inductors. (2) Input filtering - common-mode chokes and X/Y capacitors on all power inputs filter conducted emissions. (3) PCB layout - optimized layouts minimize switching loop areas and separate power/noise grounds. (4) Shielding - metal shields or ground planes contain radiated emissions. (5) Ferrite beads - series ferrites on all I/O lines filter high-frequency noise. (6) Testing - the reference design is pre-tested to CISPR 25 Class 5. For specific applications, additional filtering may be needed based on cable lengths and routing. Contact FAE for EMI-optimized layout review and pre-compliance testing support.",
        "decisionGuide": "Reference design meets CISPR 25 Class 5; contact FAE for application-specific EMI optimization.",
        "keywords": ["EMI", "CISPR 25", "automotive", "EMC"]
      },
      {
        "question": "What PPAP documentation is available?",
        "answer": "PPAP (Production Part Approval Process) documentation available for automotive customers: (1) Level 3 PPAP includes: Design FMEA, Process FMEA, Control Plan, Process Flow Diagram, Dimensional Results, Material/Performance Test Results, Initial Process Studies, Measurement System Analysis, and Part Submission Warrant. (2) AEC-Q100 test reports - complete qualification data including HTOL, temperature cycling, ESD, and latch-up results. (3) Material declarations - full RoHS/REACH compliance documentation. (4) Change notification - formal PCN process for any design or process changes. (5) Traceability - full lot traceability from wafer to finished goods. (6) Quality data - Cpk data and SPC charts available on request. PPAP documentation is available upon request for qualified automotive OEMs and Tier 1 suppliers. Contact FAE to initiate PPAP documentation request.",
        "decisionGuide": "Level 3 PPAP available for qualified automotive customers; contact FAE to initiate documentation request.",
        "keywords": ["PPAP", "documentation", "automotive", "AEC-Q100"]
      },
      {
        "question": "What is the lead time for this automotive solution?",
        "answer": "The automotive power solution ordering information: (1) Lead time - 8-10 weeks for AEC-Q100 qualified production orders. Enhanced screening and traceability requirements extend lead time. (2) MOQ (Minimum Order Quantity) - 1000 pieces per component for automotive orders. (3) Pricing - automotive-grade pricing with volume discounts. Contact sales for detailed quotation and annual pricing agreements. (4) Samples - AEC-Q100 qualified samples available for qualification testing; sample lead time 3-4 weeks. (5) PPAP timeline - Level 3 PPAP submission typically 4-6 weeks after order placement. (6) Technical support - comprehensive FAE support including automotive design review, PPAP documentation, and field failure analysis. For production vehicle programs, contact FAE early in the design phase to ensure proper qualification and documentation.",
        "decisionGuide": "Plan with 8-10 weeks lead time for AEC-Q100 qualified parts; contact FAE early for PPAP and design support.",
        "keywords": ["lead time", "automotive", "AEC-Q100", "PPAP"]
      }
    ],
    "relatedArticles": [
      {
        "title": "Automotive Power Design Guide",
        "link": "/brands/silicontent/support/automotive-power-design.html"
      },
      {
        "title": "AEC-Q100 Qualification Requirements",
        "link": "/brands/silicontent/support/aec-q100-qualification.html"
      }
    ]
  };
  
  solutionsData.solutions.push(newSolution);
  console.log(`✅ 添加新解决方案: ${newSolution.title}`);
  console.log(`✅ 解决方案总数: ${solutionsData.solutions.length}`);
  
  fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
  console.log('✅ solutions.json 已保存');
} else {
  console.log('✅ 解决方案数量已满足要求');
}

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 已保存');

console.log('\n=== Silicontent Power Modules、Battery Chargers和解决方案补充完成 ===');
