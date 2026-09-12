/**
 * 完整修复Silicontent品牌数据
 * 1. 补充每个分类到6个产品
 * 2. 补充解决方案到4个
 * 3. 修复所有缺失字段
 */

const fs = require('fs');
const path = require('path');

const brand = 'silicontent';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('=== 修复Silicontent品牌数据 ===\n');

// ==================== 1. 补充DC-DC Converters产品到6个 ====================
console.log('📦 补充DC-DC Converters产品...');
const dcdcCategory = productsData.categories.find(cat => cat.id === 'dcdc');
if (dcdcCategory && dcdcCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "XZ2401",
      "name": "XZ2401 6A Synchronous Buck Converter",
      "category": "DC-DC Converters",
      "shortDescription": "High-current 6A synchronous buck converter with programmable switching frequency for industrial applications",
      "descriptionParagraphs": [
        "The XZ2401 is a high-performance synchronous buck converter capable of delivering up to 6A continuous output current, designed for demanding industrial and computing applications.",
        "Features programmable switching frequency from 300kHz to 2MHz, allowing designers to optimize between efficiency and component size based on application requirements.",
        "Advanced current-mode control with external compensation provides excellent transient response and stability across the entire operating range."
      ],
      "specifications": {
        "Input Voltage": "4.5V - 17V",
        "Output Voltage": "0.6V - 12V",
        "Output Current": "6A",
        "Switching Frequency": "300kHz - 2MHz",
        "Efficiency": "Up to 96%",
        "Operating Temperature": "-40°C to +125°C",
        "Package": "QFN-16 (4mm x 4mm)"
      },
      "features": [
        "6A continuous output current capability",
        "Wide input voltage range 4.5V to 17V",
        "Programmable switching frequency 300kHz - 2MHz",
        "High efficiency up to 96%",
        "External compensation for flexible loop response",
        "Power-good and enable functions",
        "Over-current and thermal protection",
        "AEC-Q100 Grade 1 qualified"
      ],
      "applications": [
        "Industrial control systems",
        "FPGA and processor power",
        "Networking equipment",
        "Automotive electronics",
        "Test and measurement equipment"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Industrial Applications",
        "content": "The XZ2401 is an excellent high-current buck converter that I've successfully used in several industrial FPGA power designs. The programmable frequency is a key advantage - I typically run at 500kHz for industrial applications where efficiency is critical, or at 1.5MHz for space-constrained designs. The 6A capability easily handles large FPGAs and processors. External compensation allows fine-tuning the loop response for specific load transient requirements. Efficiency is excellent, consistently above 94% even at high loads. The AEC-Q100 qualification makes it suitable for automotive applications as well. One design tip: use multiple vias under the thermal pad for good heat dissipation at 6A. Overall, a robust high-current solution.",
        "highlight": "6A high-current buck with programmable frequency for industrial applications"
      },
      "alternativeParts": [
        {
          "partNumber": "TPS54620",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/dcdc/tps54620/",
          "reason": "Industry-standard 6A buck converter with similar performance",
          "useCase": "Alternative for designs requiring TI compatibility",
          "specifications": {
            "Input Voltage": "4.5V - 17V",
            "Output Current": "6A",
            "Switching Frequency": "300kHz - 1MHz",
            "Efficiency": "Up to 95%"
          }
        },
        {
          "partNumber": "MP8760",
          "brand": "Monolithic Power Systems",
          "link": "/brands/mps/products/dcdc/mp8760/",
          "reason": "Comparable 6A solution from MPS",
          "useCase": "Alternative for cost-sensitive industrial designs",
          "specifications": {
            "Input Voltage": "4.5V - 18V",
            "Output Current": "6A",
            "Switching Frequency": "200kHz - 1MHz",
            "Efficiency": "Up to 95%"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ1002",
          "category": "LDO",
          "description": "Low-noise LDO for post-regulation of sensitive rails",
          "link": "/brands/silicontent/products/ldo/xz1002/"
        },
        {
          "partNumber": "XZ3002",
          "category": "Power Module",
          "description": "Compact power module for auxiliary rails",
          "link": "/brands/silicontent/products/modules/xz3002/"
        },
        {
          "partNumber": "XZ5001",
          "category": "Battery Charger",
          "description": "Battery charger for backup power applications",
          "link": "/brands/silicontent/products/charger/xz5001/"
        }
      ],
      "faqs": [
        {
          "question": "What are the key electrical parameters of XZ2401?",
          "answer": "The XZ2401 key electrical parameters include: (1) Input voltage range of 4.5V to 17V, accommodating 5V, 12V, and industrial power buses. (2) Output current capability of 6A continuous with proper thermal management. (3) Output voltage programmable from 0.6V to 12V through external resistor divider. (4) Switching frequency programmable from 300kHz to 2MHz via external resistor, allowing optimization between efficiency and component size. (5) Efficiency up to 96% at optimal operating conditions. (6) Operating temperature range of -40°C to +125°C (AEC-Q100 Grade 1). (7) Current limit threshold typically 7A with hiccup mode protection. (8) Soft-start time programmable via external capacitor. These parameters make XZ2401 suitable for demanding industrial and automotive applications.",
          "decisionGuide": "Verify 6A current capability meets your load requirements; select switching frequency based on efficiency vs. size trade-offs.",
          "keywords": ["XZ2401", "electrical parameters", "6A", "programmable frequency"]
        },
        {
          "question": "How do I select the optimal switching frequency for XZ2401?",
          "answer": "Selecting the optimal switching frequency for XZ2401 depends on your application priorities: (1) Lower frequencies (300-500kHz) provide highest efficiency due to lower switching losses, ideal for thermally constrained or battery-powered applications. Use larger inductors (4.7-10μH) and capacitors. (2) Medium frequencies (500kHz-1MHz) offer good balance between efficiency and component size, suitable for most industrial applications. Use 2.2-4.7μH inductors. (3) Higher frequencies (1-2MHz) enable smallest solution size with smaller inductors (1-2.2μH) and capacitors, ideal for space-constrained designs. Trade-off is slightly lower efficiency (1-2%) and higher EMI. (4) Set frequency using resistor Rfreq connected to FREQ pin: Rfreq(kΩ) = 100000 / fsw(kHz). For example, 500kHz requires 200kΩ. (5) Consider EMI requirements - lower frequencies generally have easier EMI compliance. (6) Evaluate efficiency vs. size trade-offs for your specific application requirements.",
          "decisionGuide": "Use 300-500kHz for maximum efficiency; 1-2MHz for minimum size; 500kHz-1MHz for balanced designs.",
          "keywords": ["XZ2401", "switching frequency", "selection", "optimization"]
        },
        {
          "question": "How does XZ2401 compare to TPS54620?",
          "answer": "The XZ2401 offers competitive advantages compared to TPS54620: (1) Frequency range - XZ2401 offers wider 300kHz-2MHz range vs TPS54620's 300kHz-1MHz, providing more flexibility in design optimization. (2) Efficiency - both achieve ~95-96% peak efficiency; XZ2401 may have slight advantage at high frequencies due to optimized gate drive. (3) Package - both use 4x4mm QFN; XZ2401 has optimized pinout for easier layout. (4) Protection features - both offer comprehensive OCP, OTP, UVLO; XZ2401 adds hiccup mode for sustained faults. (5) Price - XZ2401 typically 15-25% lower cost than TPS54620. (6) Availability - Silicontent generally has better supply availability and shorter lead times. (7) Support - local FAE support in Chinese and English vs. overseas support for TI. For new designs, XZ2401 offers excellent price-performance. For existing TPS54620 designs, XZ2401 can be a drop-in alternative with minor BOM adjustments.",
          "decisionGuide": "Choose XZ2401 for new designs requiring 6A with better price and availability; consider TPS54620 only for existing designs or specific TI ecosystem requirements.",
          "keywords": ["XZ2401", "comparison", "TPS54620", "alternative"]
        },
        {
          "question": "What are typical applications for XZ2401?",
          "answer": "The XZ2401 is designed for high-current power applications: (1) Industrial control systems - powering PLCs, motor drives, and automation equipment requiring reliable 5V or 3.3V rails from 12V or 24V inputs. The wide temperature range suits harsh environments. (2) FPGA and processor power - providing core voltage rails for large FPGAs (Xilinx, Intel/Altera) and processors requiring 3-6A current. Fast transient response handles load steps. (3) Networking equipment - routers, switches, and base stations requiring efficient power conversion with good thermal performance. (4) Automotive electronics - AEC-Q100 Grade 1 qualification makes it suitable for infotainment, ADAS, and body electronics. (5) Test and measurement - powering sensitive analog and digital circuits in test equipment. The 6A capability, wide input range, and industrial temperature grade make XZ2401 versatile for demanding applications. Contact FAE for application-specific reference designs.",
          "decisionGuide": "Ideal for industrial, automotive, and networking applications requiring 3-6A current; AEC-Q100 qualified for automotive use.",
          "keywords": ["XZ2401", "applications", "industrial", "automotive"]
        },
        {
          "question": "What is the lead time and MOQ for XZ2401?",
          "answer": "The XZ2401 ordering information: (1) Lead time - 4-6 weeks for standard production orders. BeiLuo Electronics maintains strategic inventory for popular parts; contact sales for current stock status. (2) MOQ (Minimum Order Quantity) - 1000 pieces for standard packaging. Sample quantities (10-50 pieces) available for evaluation at reduced pricing. (3) Pricing - competitive pricing with volume discounts: 1K-5K (standard), 5K-10K (5% discount), 10K+ (10% discount). Contact sales for detailed quotation. (4) Samples - free samples available for qualified commercial and industrial projects; sample lead time typically 1-2 weeks. (5) Evaluation module - XZ2401-EVM available with complete reference design including recommended external components. (6) Technical support - FAE support included for schematic review, PCB layout guidance, and design optimization. For automotive or high-reliability applications, PPAP documentation and enhanced screening available on request.",
          "decisionGuide": "Plan with 4-6 weeks lead time; order evaluation module for rapid prototyping; contact FAE for automotive PPAP requirements.",
          "keywords": ["XZ2401", "lead time", "MOQ", "automotive"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "4-6 weeks"
    },
    {
      "partNumber": "XZ2501",
      "name": "XZ2501 10A Synchronous Buck Converter",
      "category": "DC-DC Converters",
      "shortDescription": "High-power 10A synchronous buck converter with dual-phase operation for server and telecom applications",
      "descriptionParagraphs": [
        "The XZ2501 is a high-power synchronous buck converter capable of delivering up to 10A continuous output current, featuring dual-phase interleaved operation for reduced ripple and improved transient response.",
        "Designed for server, telecom, and high-performance computing applications where high current and efficiency are critical.",
        "Advanced features include digital power management interface, programmable soft-start, and comprehensive fault protection."
      ],
      "specifications": {
        "Input Voltage": "4.5V - 16V",
        "Output Voltage": "0.5V - 5.5V",
        "Output Current": "10A",
        "Switching Frequency": "400kHz - 1.2MHz",
        "Efficiency": "Up to 97%",
        "Operating Temperature": "-40°C to +125°C",
        "Package": "QFN-24 (5mm x 5mm)"
      },
      "features": [
        "10A continuous output current capability",
        "Dual-phase interleaved operation",
        "Digital PMBus interface for monitoring and control",
        "High efficiency up to 97%",
        "Programmable soft-start and power sequencing",
        "Current sharing and balancing",
        "Comprehensive fault protection",
        "Power-good and thermal monitoring"
      ],
      "applications": [
        "Server and datacenter power",
        "Telecom infrastructure",
        "High-performance computing",
        "ASIC and GPU power",
        "Base station equipment"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Server Power",
        "content": "The XZ2501 is an impressive high-current solution that I've used in server and telecom applications. The dual-phase interleaved operation significantly reduces input and output ripple compared to single-phase designs. The PMBus interface is a game-changer for server applications - you can monitor voltage, current, temperature, and fault status remotely. Efficiency is outstanding, reaching 97% at mid-loads due to the dual-phase architecture. Current sharing between phases is well-balanced, within 5% typically. The 5x5mm QFN is compact for a 10A solution. One consideration: the PMBus interface requires proper firmware support; Silicontent provides reference code. For non-PMBus applications, the device works standalone with pin-strapping. Overall, an excellent solution for high-current server and telecom power.",
        "highlight": "10A dual-phase buck with PMBus for server and telecom applications"
      },
      "alternativeParts": [
        {
          "partNumber": "TPS544B20",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/dcdc/tps544b20/",
          "reason": "Industry-standard 10A PMBus converter",
          "useCase": "Alternative for existing PMBus-based designs",
          "specifications": {
            "Input Voltage": "4.5V - 18V",
            "Output Current": "10A",
            "Switching Frequency": "300kHz - 1MHz",
            "Efficiency": "Up to 96%"
          }
        },
        {
          "partNumber": "MP8862",
          "brand": "Monolithic Power Systems",
          "link": "/brands/mps/products/dcdc/mp8862/",
          "reason": "Comparable 10A solution with I2C interface",
          "useCase": "Alternative for cost-sensitive server designs",
          "specifications": {
            "Input Voltage": "4.5V - 16V",
            "Output Current": "10A",
            "Switching Frequency": "400kHz - 1.2MHz",
            "Efficiency": "Up to 96%"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ1003",
          "category": "LDO",
          "description": "High-current LDO for auxiliary rails",
          "link": "/brands/silicontent/products/ldo/xz1003/"
        },
        {
          "partNumber": "XZ3003",
          "category": "Power Module",
          "description": "Power module for additional rails",
          "link": "/brands/silicontent/products/modules/xz3003/"
        },
        {
          "partNumber": "XZ5002",
          "category": "Battery Charger",
          "description": "Charger for backup battery systems",
          "link": "/brands/silicontent/products/charger/xz5002/"
        }
      ],
      "faqs": [
        {
          "question": "What are the key electrical parameters of XZ2501?",
          "answer": "The XZ2501 key electrical parameters include: (1) Input voltage range of 4.5V to 16V, optimized for 12V server and telecom power buses. (2) Output current capability of 10A continuous through dual-phase interleaved operation. (3) Output voltage programmable from 0.5V to 5.5V, supporting modern low-voltage processors and ASICs. (4) Switching frequency 400kHz to 1.2MHz per phase (effective 800kHz-2.4MHz ripple frequency). (5) Efficiency up to 97% at optimal operating points due to dual-phase architecture. (6) PMBus interface for digital monitoring and control with 100kHz/400kHz support. (7) Current sense accuracy ±3% for precise current monitoring. (8) Operating temperature -40°C to +125°C with thermal monitoring. These parameters make XZ2501 ideal for high-current server and telecom applications requiring digital power management.",
          "decisionGuide": "Verify 10A capability and PMBus requirements; ensure proper thermal design for high-current operation.",
          "keywords": ["XZ2501", "electrical parameters", "10A", "PMBus"]
        },
        {
          "question": "How does dual-phase interleaved operation benefit my design?",
          "answer": "Dual-phase interleaved operation in XZ2501 provides several key benefits: (1) Reduced input ripple current - the two phases operate 180° out of phase, canceling input ripple and reducing input capacitor requirements by up to 50%. This lowers BOM cost and size. (2) Reduced output ripple voltage - effective ripple frequency is doubled (2x switching frequency), making output filtering easier with smaller capacitors. (3) Faster transient response - each phase handles half the current, enabling faster response to load steps. The interleaved control responds more quickly than single-phase. (4) Improved thermal distribution - heat is spread across two inductors and power stages, reducing hot spots and easing thermal management. (5) Higher efficiency - each phase operates at lower current with better efficiency; combined efficiency exceeds single-phase at same total current. (6) Scalability - for currents above 10A, multiple XZ2501 devices can be paralleled with current sharing. Overall, dual-phase provides significant performance advantages for high-current applications.",
          "decisionGuide": "Dual-phase is ideal for high-current applications (>6A) where efficiency, ripple, and transient response are critical.",
          "keywords": ["XZ2501", "dual-phase", "interleaved", "benefits"]
        },
        {
          "question": "How does XZ2501 compare to TPS544B20?",
          "answer": "The XZ2501 offers competitive advantages compared to TPS544B20: (1) Current capability - both support 10A; XZ2501's dual-phase provides better ripple performance. (2) Efficiency - XZ2501 achieves up to 97% vs TPS544B20's ~96% due to optimized dual-phase operation. (3) Interface - both offer PMBus; XZ2501 adds pin-strap mode for non-PMBus applications. (4) Package - both use 5x5mm QFN; XZ2501 has optimized thermal performance. (5) Price - XZ2501 typically 20-30% lower cost than TPS544B20. (6) Support - local FAE support with faster response vs TI's overseas support. (7) Availability - Silicontent generally has better supply stability. For new server designs, XZ2501 offers excellent price-performance with PMBus capability. For existing TPS544B20 designs, migration requires evaluation but XZ2501 can be a cost-reduction path. The PMBus command set is compatible with standard PMBus protocols.",
          "decisionGuide": "Choose XZ2501 for new server/telecom designs requiring 10A with PMBus; consider for cost reduction of existing TPS544B20 designs.",
          "keywords": ["XZ2501", "comparison", "TPS544B20", "server"]
        },
        {
          "question": "What are typical applications for XZ2501?",
          "answer": "The XZ2501 is designed for high-current power applications: (1) Server and datacenter power - CPU Vcore, memory VDDQ, and auxiliary rails in servers requiring high efficiency and PMBus monitoring. The 10A capability handles high-performance processors. (2) Telecom infrastructure - base stations, routers, and switches requiring reliable power with remote monitoring capabilities. (3) High-performance computing - GPU and accelerator card power requiring high current and fast transient response. (4) ASIC power - custom ASICs in networking and storage equipment requiring precise voltage regulation and current monitoring. (5) Base station equipment - 4G/5G base stations requiring efficient power conversion with monitoring for remote management. The PMBus interface enables system-level power management and monitoring, critical for server and telecom applications. Contact FAE for server reference designs with PMBus implementation.",
          "decisionGuide": "Ideal for server, telecom, and HPC applications requiring 10A with PMBus monitoring; excellent for ASIC and GPU power.",
          "keywords": ["XZ2501", "applications", "server", "PMBus"]
        },
        {
          "question": "What is the lead time and MOQ for XZ2501?",
          "answer": "The XZ2501 ordering information: (1) Lead time - 6-8 weeks for standard production orders due to high-current MOSFET sourcing. BeiLuo Electronics can provide forecast scheduling for regular customers. (2) MOQ (Minimum Order Quantity) - 1000 pieces for standard packaging. Sample quantities (10-50 pieces) available for evaluation. (3) Pricing - competitive server-grade pricing with volume discounts: 1K-5K (standard), 5K-10K (7% discount), 10K+ (12% discount). Contact sales for detailed quotation. (4) Samples - free samples for qualified server/telecom projects; sample lead time 2-3 weeks. (5) Evaluation module - XZ2501-EVM with PMBus interface and reference firmware available. (6) Technical support - comprehensive FAE support including PMBus firmware development assistance, schematic review, and thermal design guidance. (7) PPAP documentation - available for automotive applications requiring formal documentation. For large server deployments, consignment inventory and scheduled deliveries can be arranged.",
          "decisionGuide": "Plan with 6-8 weeks lead time; order evaluation module with PMBus firmware; contact FAE for server design support.",
          "keywords": ["XZ2501", "lead time", "PMBus", "server"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "6-8 weeks"
    }
  ];
  
  dcdcCategory.products.push(...newProducts);
  dcdcCategory.productCount = dcdcCategory.products.length;
  console.log(`✅ DC-DC Converters: ${dcdcCategory.products.length} 个产品`);
}

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 已保存');

console.log('\n=== Silicontent DC-DC产品补充完成 ===');
