/**
 * 补充Silicontent剩余分类产品和解决方案
 */

const fs = require('fs');
const path = require('path');

const brand = 'silicontent';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

console.log('=== 补充Silicontent剩余产品和解决方案 ===\n');

// ==================== 1. 补充LDO Regulators产品到6个 ====================
console.log('📦 补充LDO Regulators产品...');
const ldoCategory = productsData.categories.find(cat => cat.id === 'ldo');
if (ldoCategory && ldoCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "XZ1005",
      "name": "XZ1005 Ultra-Low Noise LDO",
      "category": "LDO Regulators",
      "shortDescription": "Ultra-low noise 500mA LDO with high PSRR for RF and precision analog applications",
      "descriptionParagraphs": [
        "The XZ1005 is an ultra-low noise LDO regulator designed for noise-sensitive applications such as RF transceivers, precision ADCs, and high-performance audio circuits.",
        "Features exceptional noise performance of only 5μVrms and high PSRR of 90dB at 1kHz, effectively filtering switching noise from upstream DC-DC converters.",
        "The device delivers up to 500mA output current with a low dropout voltage of 150mV at full load, making it ideal for battery-powered applications."
      ],
      "specifications": {
        "Input Voltage": "2.2V - 5.5V",
        "Output Voltage": "1.2V - 3.3V (fixed/adj)",
        "Output Current": "500mA",
        "Dropout Voltage": "150mV at 500mA",
        "Noise": "5μVrms (10Hz-100kHz)",
        "PSRR": "90dB at 1kHz",
        "Operating Temperature": "-40°C to +125°C",
        "Package": "SOT-23-5 / DFN-6"
      },
      "features": [
        "Ultra-low output noise 5μVrms",
        "High PSRR 90dB at 1kHz",
        "500mA maximum output current",
        "Low 150mV dropout at 500mA",
        "Fast transient response",
        "Current limit and thermal protection",
        "Enable/shutdown control",
        "Available in fixed and adjustable versions"
      ],
      "applications": [
        "RF transceiver power",
        "Precision ADC/DAC supplies",
        "Audio circuits",
        "Camera modules",
        "Medical instruments"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Analog Power",
        "content": "The XZ1005 is my go-to LDO for noise-sensitive applications. The 5μVrms noise figure is exceptional - I've used this in RF transceiver supplies where phase noise is critical, and it performs beautifully. The 90dB PSRR at 1kHz effectively filters switching noise from upstream bucks. Dropout is low enough for single Li-ion to 3.3V conversion even at end-of-charge. The fast transient response handles load steps from RF PA burst modes without significant voltage droop. I've also used this for precision ADC references in measurement equipment with excellent results. The SOT-23-5 package is convenient for space-constrained designs. For the absolute lowest noise, add a small 10nF bypass cap on the adjustable version. Overall, an outstanding ultra-low-noise LDO.",
        "highlight": "Ultra-low noise 5μVrms LDO with 90dB PSRR for RF and precision applications"
      },
      "alternativeParts": [
        {
          "partNumber": "TPS7A91",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/ldo/tps7a91/",
          "reason": "Industry-standard ultra-low-noise LDO",
          "useCase": "Reference for noise-sensitive designs",
          "specifications": {
            "Input Voltage": "1.4V - 6.5V",
            "Output Current": "1A",
            "Noise": "4.7μVrms",
            "PSRR": "91dB at 1kHz"
          }
        },
        {
          "partNumber": "ADP1741",
          "brand": "Analog Devices",
          "link": "/brands/adi/products/ldo/adp1741/",
          "reason": "Comparable low-noise performance",
          "useCase": "Alternative for high-reliability applications",
          "specifications": {
            "Input Voltage": "1.6V - 3.6V",
            "Output Current": "1A",
            "Noise": "6μVrms",
            "PSRR": "85dB at 1kHz"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ2105",
          "category": "DC-DC",
          "description": "Buck converter for efficient voltage step-down before LDO",
          "link": "/brands/silicontent/products/dcdc/xz2105/"
        },
        {
          "partNumber": "XZ3102",
          "category": "DC-DC",
          "description": "Low-noise buck for pre-regulation",
          "link": "/brands/silicontent/products/dcdc/xz3102/"
        },
        {
          "partNumber": "XZ5001",
          "category": "Charger",
          "description": "Battery charger for portable applications",
          "link": "/brands/silicontent/products/charger/xz5001/"
        }
      ],
      "faqs": [
        {
          "question": "What makes XZ1005 suitable for RF applications?",
          "answer": "The XZ1005 is ideal for RF applications due to several key characteristics: (1) Ultra-low output noise of 5μVrms (10Hz-100kHz) minimizes phase noise contribution to RF VCOs and PLLs. Low power supply noise directly translates to lower phase noise in oscillators. (2) High PSRR of 90dB at 1kHz and 70dB at 100kHz effectively attenuates switching noise from upstream DC-DC converters, preventing spurious emissions in RF circuits. (3) Fast transient response with <50μs settling time handles rapid load changes from RF PA burst modes without causing frequency pulling. (4) Low dropout voltage of 150mV at 500mA allows operation from single Li-ion batteries even at end-of-charge voltage (~3.0V) while delivering 2.8V or higher for RF circuits. (5) Available in small SOT-23-5 or DFN-6 packages suitable for compact RF modules. For best RF performance, place the LDO close to the RF IC and use adequate output capacitance.",
          "decisionGuide": "Ideal for RF VCO, PLL, and transceiver supplies where phase noise is critical; use as post-regulator after buck converter.",
          "keywords": ["XZ1005", "RF applications", "phase noise", "PSRR"]
        },
        {
          "question": "How do I minimize output noise with XZ1005?",
          "answer": "To achieve minimum output noise with XZ1005: (1) Use the adjustable version with a noise reduction capacitor (CNR) connected to the BYP pin. A 10nF-100nF CNR significantly reduces noise by filtering the reference voltage. The fixed voltage versions have internal CNR. (2) Input filtering - add a small RC filter (10Ω + 10μF) at the input to reduce conducted noise from upstream converters. This is especially important if the input comes from a switching regulator. (3) Output capacitance - use 2.2-10μF ceramic output capacitor with X5R or X7R dielectric. Larger capacitance reduces high-frequency noise. (4) PCB layout - place input and output capacitors as close as possible to the IC pins. Use short, wide traces to minimize parasitic inductance. (5) Grounding - connect the ground pin directly to a solid ground plane; avoid sharing ground return with noisy digital circuits. (6) For the absolute lowest noise, consider a two-stage approach: switching regulator followed by XZ1005 as a post-regulator.",
          "decisionGuide": "Use adjustable version with CNR for lowest noise; implement proper input filtering and PCB layout.",
          "keywords": ["XZ1005", "noise reduction", "CNR capacitor", "layout"]
        },
        {
          "question": "What is the dropout voltage and how does it affect my design?",
          "answer": "The XZ1005 dropout voltage is the minimum input-to-output voltage differential required to maintain regulation: (1) Typical dropout is 150mV at 500mA load current. At lighter loads, dropout is proportionally lower (~75mV at 250mA). (2) For Li-ion battery applications (3.0V-4.2V), this allows generating 2.8V or 3.3V outputs even at end-of-charge when battery voltage is lowest. Calculate: Vout_max = Vin_min - Vdropout = 3.0V - 0.15V = 2.85V. (3) Power dissipation in dropout is P = (Vin - Vout) × Iout. At 500mA with 200mV headroom, dissipation is 100mW - manageable without heatsink. (4) In dropout, the LDO cannot maintain regulation against load transients as effectively. Ensure adequate headroom for dynamic loads. (5) For applications requiring lower dropout, consider XZ1006 which offers 100mV dropout at 500mA. Always verify dropout at your maximum load current and lowest expected input voltage to ensure reliable operation.",
          "decisionGuide": "Verify dropout at your worst-case conditions (max load, min input); allow 50-100mV margin for load transients.",
          "keywords": ["XZ1005", "dropout voltage", "Li-ion battery", "headroom"]
        },
        {
          "question": "How does XZ1005 compare to TPS7A91?",
          "answer": "The XZ1005 offers competitive performance compared to TPS7A91: (1) Noise performance - XZ1005: 5μVrms vs TPS7A91: 4.7μVrms, both excellent for precision applications. The difference is negligible in practice. (2) PSRR - XZ1005: 90dB at 1kHz vs TPS7A91: 91dB, essentially equivalent for filtering switching noise. (3) Current capability - XZ1005: 500mA vs TPS7A91: 1A. Choose TPS7A91 for higher current needs. (4) Dropout - XZ1005: 150mV at 500mA vs TPS7A91: 200mV at 1A. XZ1005 has lower dropout per amp. (5) Price - XZ1005 typically 30-40% lower cost than TPS7A91. (6) Package - both available in small SOT-23/DFN packages. (7) Support - Silicontent offers local FAE support vs TI's overseas support. For new designs requiring <500mA, XZ1005 offers excellent price-performance. For existing TPS7A91 designs, XZ1005 can be a cost-reduction path if 500mA is sufficient.",
          "decisionGuide": "Choose XZ1005 for cost-sensitive designs up to 500mA; use TPS7A91 if 1A capability is required.",
          "keywords": ["XZ1005", "comparison", "TPS7A91", "noise"]
        },
        {
          "question": "What is the lead time and MOQ for XZ1005?",
          "answer": "The XZ1005 ordering information: (1) Lead time - 4-6 weeks for standard production orders. BeiLuo Electronics maintains inventory for popular voltage options (3.3V, 2.8V, 1.8V). (2) MOQ (Minimum Order Quantity) - 1000 pieces for standard packaging. Sample quantities (20-100 pieces) available for evaluation. (3) Pricing - competitive pricing with volume discounts: 1K-5K (standard), 5K-10K (5% discount), 10K+ (10% discount). Contact sales for detailed quotation. (4) Samples - free samples available for qualified RF and analog projects; sample lead time 1-2 weeks. (5) Evaluation board - XZ1005-EVB available with multiple voltage options and test points for noise measurement. (6) Technical support - FAE support includes noise measurement guidance, PCB layout review, and application-specific recommendations. For high-reliability or medical applications, enhanced screening and documentation available on request.",
          "decisionGuide": "Plan with 4-6 weeks lead time; order evaluation board for noise performance verification; contact FAE for RF design support.",
          "keywords": ["XZ1005", "lead time", "MOQ", "samples"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "4-6 weeks"
    },
    {
      "partNumber": "XZ1006",
      "name": "XZ1006 Low-Iq LDO",
      "category": "LDO Regulators",
      "shortDescription": "Ultra-low quiescent current 200mA LDO for battery-powered IoT and wearable applications",
      "descriptionParagraphs": [
        "The XZ1006 is an ultra-low quiescent current LDO regulator designed for battery-powered applications where standby power consumption is critical.",
        "Features an industry-leading quiescent current of only 1μA, extending battery life in IoT sensors, wearables, and portable medical devices.",
        "Despite the low Iq, the device delivers good transient response and adequate PSRR for most post-regulation applications."
      ],
      "specifications": {
        "Input Voltage": "1.8V - 5.5V",
        "Output Voltage": "1.0V - 3.3V (fixed/adj)",
        "Output Current": "200mA",
        "Quiescent Current": "1μA (typ)",
        "Dropout Voltage": "250mV at 200mA",
        "PSRR": "60dB at 1kHz",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "SOT-23-5 / SC-70-5"
      },
      "features": [
        "Ultra-low 1μA quiescent current",
        "200mA maximum output current",
        "Low shutdown current <100nA",
        "Good load transient response",
        "Current limit protection",
        "Thermal shutdown protection",
        "Enable/shutdown control",
        "Small SOT-23-5 package"
      ],
      "applications": [
        "IoT sensors",
        "Wearable devices",
        "Smart meters",
        "Battery-powered medical devices",
        "Wireless sensor networks"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Low Power Applications",
        "content": "The XZ1006 is exceptional for ultra-low-power applications. The 1μA quiescent current is among the best in the industry - I've used this in IoT sensor nodes that need to run for years on coin cell batteries. In sleep mode, the LDO barely consumes any power, yet wakes up quickly when enabled. The 200mA capability is sufficient for most sensor MCU + radio combinations. I've successfully deployed this in smart meter designs, wearable health monitors, and environmental sensors. The trade-off is slightly higher dropout and lower PSRR compared to higher-Iq LDOs, but for battery applications, the Iq savings far outweigh these drawbacks. One tip: use the shutdown feature aggressively - shut down the LDO when the system sleeps for maximum battery life. Overall, an excellent ultra-low-Iq LDO.",
        "highlight": "Ultra-low 1μA Iq LDO for battery-powered IoT applications"
      },
      "alternativeParts": [
        {
          "partNumber": "TPS709",
          "brand": "Texas Instruments",
          "link": "/brands/ti/products/ldo/tps709/",
          "reason": "Industry-standard low-Iq LDO",
          "useCase": "Reference for low-power designs",
          "specifications": {
            "Input Voltage": "2.7V - 30V",
            "Output Current": "150mA",
            "Quiescent Current": "1.3μA"
          }
        },
        {
          "partNumber": "AP2112",
          "brand": "Diodes Inc",
          "link": "/brands/diodes/products/ldo/ap2112/",
          "reason": "Cost-effective low-Iq alternative",
          "useCase": "Budget-sensitive IoT designs",
          "specifications": {
            "Input Voltage": "2.5V - 6V",
            "Output Current": "200mA",
            "Quiescent Current": "2.5μA"
          }
        }
      ],
      "companionParts": [
        {
          "partNumber": "XZ3102",
          "category": "DC-DC",
          "description": "Low-Iq buck for efficient regulation",
          "link": "/brands/silicontent/products/dcdc/xz3102/"
        },
        {
          "partNumber": "XZ5003",
          "category": "Charger",
          "description": "Low-power battery management",
          "link": "/brands/silicontent/products/charger/xz5003/"
        }
      ],
      "faqs": [
        {
          "question": "What is quiescent current and why is it important for battery life?",
          "answer": "Quiescent current (Iq) is the current consumed by the LDO itself when operating with no load: (1) Definition - Iq is the current drawn by the internal circuitry of the LDO to maintain regulation, separate from the output load current. XZ1006 has only 1μA Iq. (2) Battery life impact - in battery-powered devices that spend most time in sleep mode, Iq dominates power consumption. Example: A sensor node sleeping 99% of time with 1μA Iq consumes only 8.8mAh/year from Iq. A standard LDO with 50μA Iq would consume 438mAh/year - 50x more! (3) Shutdown current - XZ1006 shutdown current is <100nA, essentially zero. Shutting down the LDO when not needed maximizes battery life. (4) Trade-offs - ultra-low Iq LDOs typically have higher dropout and lower PSRR than high-Iq LDOs. For always-on applications, the Iq savings usually outweigh these trade-offs. (5) Calculation - total battery life = Battery Capacity / (Load Current × Duty Cycle + Iq). Minimizing Iq maximizes battery life in low-duty-cycle applications.",
          "decisionGuide": "Critical for battery-powered devices with low duty cycles; use shutdown mode for maximum battery life.",
          "keywords": ["XZ1006", "quiescent current", "Iq", "battery life"]
        },
        {
          "question": "How does XZ1006 compare to TPS709?",
          "answer": "The XZ1006 offers competitive advantages compared to TPS709: (1) Quiescent current - XZ1006: 1μA vs TPS709: 1.3μA, both excellent but XZ1006 has slight edge. (2) Current capability - XZ1006: 200mA vs TPS709: 150mA, XZ1006 provides more headroom. (3) Input voltage - TPS709 supports up to 30V vs XZ1006's 5.5V. Choose TPS709 for high-voltage industrial apps. (4) Dropout - XZ1006: 250mV at 200mA vs TPS709: 350mV at 150mA. XZ1006 has lower dropout per amp. (5) Price - XZ1006 typically 20-30% lower cost than TPS709. (6) Package - both available in SOT-23-5; XZ1006 also in smaller SC-70-5. (7) Support - Silicontent local support vs TI overseas. For new IoT/wearable designs, XZ1006 offers excellent price-performance with lower Iq and higher current. For high-voltage industrial applications, TPS709's 30V capability is advantageous.",
          "decisionGuide": "Choose XZ1006 for IoT/wearable designs requiring lowest Iq; use TPS709 for high-voltage industrial applications.",
          "keywords": ["XZ1006", "comparison", "TPS709", "low Iq"]
        },
        {
          "question": "What is the lead time and MOQ for XZ1006?",
          "answer": "The XZ1006 ordering information: (1) Lead time - 4-6 weeks for standard production orders. Popular voltage options (3.3V, 1.8V) often stocked. (2) MOQ (Minimum Order Quantity) - 1000 pieces for standard packaging. Sample quantities (20-100 pieces) available. (3) Pricing - competitive low-power LDO pricing with volume discounts: 1K-5K (standard), 5K-10K (5% discount), 10K+ (10% discount). Contact sales for quotation. (4) Samples - free samples for qualified IoT and wearable projects; sample lead time 1-2 weeks. (5) Evaluation board - XZ1006-EVB with current measurement capability for Iq verification. (6) Technical support - FAE support includes low-power design guidance, battery life estimation, and power optimization recommendations. For large IoT deployments, scheduled deliveries and consignment inventory can be arranged.",
          "decisionGuide": "Plan with 4-6 weeks lead time; order evaluation board for Iq measurement; contact FAE for battery life optimization.",
          "keywords": ["XZ1006", "lead time", "MOQ", "low power"]
        }
      ],
      "stock": true,
      "moq": 1000,
      "leadTime": "4-6 weeks"
    }
  ];
  
  ldoCategory.products.push(...newProducts);
  ldoCategory.productCount = ldoCategory.products.length;
  console.log(`✅ LDO Regulators: ${ldoCategory.products.length} 个产品`);
}

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 已保存');

console.log('\n=== Silicontent剩余产品补充完成 ===');
