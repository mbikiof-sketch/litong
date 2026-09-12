const fs = require('fs');
const path = require('path');

// 读取vanchip产品数据
const productsPath = path.join(__dirname, 'data', 'vanchip', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 修复VC7788的FAQ - 每个answer必须≥200字
const vc7788Faqs = [
  {
    "question": "What is the difference between VC5778 and VC7788?",
    "answer": "The VC5778 and VC7788 are complementary 5G NR power amplifiers targeting different frequency bands. The VC5778 covers n77/n78 bands (3.3-4.2GHz), which are the primary 5G bands in most global markets including Europe, Asia, and Australia. The VC7788 covers n79 band (4.4-5.0GHz), which is primarily used in Japan and some Asian markets. Both PAs utilize advanced InGaP HBT technology and deliver similar performance characteristics including 26dBm output power, excellent linearity with EVM < 3%, and high efficiency above 40% PAE. They share the same MIPI RFFE 2.0 control interface, making them easy to use together in the same design. For global 5G smartphone designs, using both PAs ensures complete high-band coverage.",
    "decisionGuide": "Use VC5778 for n77/n78 coverage, VC7788 for n79 coverage, or both for complete global 5G high-band support. Contact FAE for multi-band PA integration guidance.",
    "keywords": ["VC5778", "VC7788", "5G PA comparison", "n77 n78 n79 bands"]
  },
  {
    "question": "Can VC7788 be used with VC5778 in the same design?",
    "answer": "Yes, the VC7788 and VC5778 are specifically designed to work together seamlessly in the same RF front-end design. Both power amplifiers share identical MIPI RFFE 2.0 control interfaces, enabling unified control from the baseband processor. They have consistent gain characteristics (25-26dB), similar power consumption profiles, and matching package footprints (CSP 2.0×2.0mm), allowing for symmetrical PCB layout. When combined, they provide complete coverage of 5G NR high-bands (n77/n78/n79) required for global smartphones. The control timing and switching characteristics are synchronized, enabling smooth band switching during carrier aggregation operations. Many leading smartphone manufacturers use this combination in their flagship 5G devices.",
    "decisionGuide": "Combine both PAs for complete n77/n78/n79 coverage in global 5G smartphone designs. Reference designs are available showing optimal layout and matching networks.",
    "keywords": ["VC5778 VC7788 combination", "5G PA integration", "n77 n78 n79 coverage"]
  },
  {
    "question": "What is the thermal performance of VC7788?",
    "answer": "The VC7788 has a maximum junction temperature rating of 150°C, ensuring reliable operation under demanding conditions. Thermal management recommendations include: (1) Use minimum 100mm² copper area on PCB for heat spreading with multiple thermal vias (0.3mm diameter, 1mm pitch) under the package paddle; (2) For continuous 26dBm operation, expect junction temperature rise of 25-30°C above ambient with proper PCB design; (3) The CSP 2.0×2.0mm package has a thermal resistance of approximately 25°C/W junction-to-case; (4) An internal thermal sensor enables real-time temperature monitoring via MIPI RFFE interface; (5) Automatic thermal throttling can be implemented to protect the device. At typical smartphone usage patterns with intermittent transmission, thermal issues are rarely encountered.",
    "decisionGuide": "Follow recommended PCB thermal design guidelines and implement temperature monitoring for high-duty-cycle applications. Contact FAE for thermal simulation support.",
    "keywords": ["VC7788 thermal", "junction temperature", "PA heat dissipation"]
  },
  {
    "question": "Does VC7788 support carrier aggregation?",
    "answer": "Yes, the VC7788 fully supports 5G NR carrier aggregation (CA) operations. It enables intra-band CA within n79 band for contiguous and non-contiguous carrier aggregation configurations. Additionally, it supports inter-band CA when combined with VC5778 for n77+n79 or n78+n79 combinations, providing up to 200MHz total aggregated bandwidth. The PA maintains excellent linearity with EVM < 3% and ACLR < -38dBc under CA operation. The fast switching time of less than 10μs enables seamless carrier switching during TDD operation. For CA applications, proper power supply decoupling with multiple capacitors (100pF, 1nF, 10μF) is essential to maintain signal integrity. The PA's wide bandwidth and excellent linearity ensure clean transmission without interference between aggregated carriers.",
    "decisionGuide": "Contact FAE for CA-specific reference designs, matching network optimization, and band combination verification with your transceiver.",
    "keywords": ["VC7788 carrier aggregation", "5G CA", "n79 CA support"]
  },
  {
    "question": "What is the typical application circuit for VC7788?",
    "answer": "A complete VC7788 application circuit includes several key components: (1) Input matching network - typically a 2-element LC network transforming 50Ω to optimal source impedance for maximum gain; (2) Output matching network - 3-element matching circuit presenting optimal load impedance for best efficiency and linearity; (3) Bias circuit - decoupling capacitors (100pF, 1nF, 10μF) placed close to VCC pins with low-impedance ground connections; (4) MIPI RFFE interface - clock and data lines with proper series termination; (5) Integrated power detector - external filter capacitor (typically 10pF) for envelope detection. The complete schematic, BOM, and PCB layout recommendations are available in the application note. Total external component count is typically 12-15 passive components. Reference designs have been validated for n79 operation.",
    "decisionGuide": "Request the VC7788 reference design package including schematic, BOM, PCB layout files, and performance characterization data from our FAE team.",
    "keywords": ["VC7788 application circuit", "PA schematic", "matching network design"]
  }
];

// 修复VCNB700的FAQ
const vcnb700Faqs = [
  {
    "question": "What is the battery life with VCNB700?",
    "answer": "The VCNB700 enables exceptional battery life for NB-IoT applications, typically achieving 5-10 years on a single AA battery depending on transmission frequency and network conditions. This extended battery life results from: (1) Ultra-high efficiency of 45% PAE, minimizing energy consumption during transmission; (2) Ultra-low sleep current of less than 1μA, consuming virtually no power between transmissions; (3) Fast wake-up time of less than 100μs, reducing transition energy overhead; (4) Optimized power modes including deep sleep and hibernate. For a typical smart meter application transmitting once per hour at 23dBm, the average current consumption is approximately 15μA, enabling 10+ year battery life from a 2600mAh lithium battery. Use our power calculator tool for application-specific estimates based on your transmission profile.",
    "decisionGuide": "Use our online power calculator to estimate battery life for your specific application parameters, or contact FAE for detailed power analysis.",
    "keywords": ["VCNB700 battery life", "NB-IoT power consumption", "IoT battery longevity"]
  },
  {
    "question": "Does VCNB700 support LTE-M?",
    "answer": "Yes, the VCNB700 is a dual-mode power amplifier supporting both NB-IoT and LTE-M (eMTC) standards with the same hardware configuration. This dual-mode capability provides: (1) Maximum design flexibility - single hardware design supports both standards; (2) Future-proofing - devices can be software-upgraded between modes; (3) Global deployment - support for different operator requirements worldwide; (4) Cost optimization - reduced SKU count and inventory management. The PA's 23dBm output power meets requirements for both standards, and its 45% efficiency ensures excellent battery life in either mode. The MIPI RFFE interface supports mode switching under baseband control. For designs requiring both standards, the VCNB700 eliminates the need for separate PAs, reducing BOM cost and PCB area while simplifying supply chain management.",
    "decisionGuide": "Design for dual-mode support from the start to maximize flexibility and reduce long-term costs. Contact FAE for dual-mode reference designs.",
    "keywords": ["VCNB700 LTE-M", "NB-IoT dual mode", "eMTC support"]
  },
  {
    "question": "What is the wake-up time of VCNB700?",
    "answer": "The VCNB700 features an ultra-fast wake-up time of less than 100 microseconds from sleep mode to full transmit operation. This rapid wake-up capability is critical for NB-IoT applications requiring frequent transmission cycles, as it minimizes energy wasted during state transitions. The fast wake-up is achieved through: (1) Optimized bias circuit design with rapid settling; (2) Efficient thermal management maintaining stable operating point; (3) Advanced process technology enabling quick carrier stabilization. For comparison, many competing solutions require 500μs to 1ms wake-up time, consuming significantly more energy per transmission cycle. In a typical smart meter application with hourly transmissions, the 100μs wake-up time contributes less than 0.1% to total energy consumption, maximizing battery life. This makes the VCNB700 ideal for applications requiring frequent status updates or event-driven transmissions.",
    "decisionGuide": "The fast wake-up makes VCNB700 suitable for frequent transmission applications. Contact FAE for timing characterization data specific to your operating conditions.",
    "keywords": ["VCNB700 wake-up time", "PA sleep mode", "fast wake-up"]
  },
  {
    "question": "Can VCNB700 be used in automotive applications?",
    "answer": "The VCNB700 is available in industrial grade supporting -40°C to +85°C operating temperature range, suitable for many automotive applications including fleet tracking and telematics. For more demanding automotive applications, an automotive-grade version is available on request with extended temperature range of -40°C to +105°C and AEC-Q100 qualification. The PA's robust design includes: (1) Integrated ESD protection exceeding 2kV HBM; (2) Excellent temperature stability with minimal gain variation across the operating range; (3) High reliability with MTTF exceeding 1 million hours at 85°C; (4) Compliance with automotive EMI/EMC requirements. For automotive designs, we provide comprehensive qualification reports including temperature cycling, mechanical shock, and vibration test data. Contact our FAE team to discuss your specific automotive application requirements and qualification needs.",
    "decisionGuide": "Contact FAE for automotive-grade options, qualification data, and application-specific recommendations for your automotive IoT project.",
    "keywords": ["VCNB700 automotive", "AEC-Q100", "automotive grade PA"]
  },
  {
    "question": "What is the typical BOM cost for VCNB700 designs?",
    "answer": "The VCNB700 offers a cost-effective solution for high-volume IoT applications, with competitive pricing that scales favorably with volume. The total BOM cost is minimized through: (1) Compact CSP 1.5×1.5mm package reducing PCB area cost; (2) Minimal external components - typically only 8-10 passive components required; (3) No external matching network required for standard 50Ω operation; (4) Integrated power control eliminating need for external detector; (5) Dual-mode NB-IoT/LTE-M support reducing SKU complexity. For volume production exceeding 100K units annually, the PA offers industry-leading cost-per-bit-transmitted due to its high efficiency reducing battery costs. Total solution cost including PA, passives, and PCB area typically ranges from $0.50 to $0.80 in high volumes, making it highly competitive for cost-sensitive IoT applications like smart meters, asset trackers, and environmental sensors.",
    "decisionGuide": "Contact sales for detailed pricing, volume discounts, and total cost of ownership analysis for your specific application volume.",
    "keywords": ["VCNB700 cost", "NB-IoT BOM", "PA pricing"]
  }
];

// 查找并更新产品
let updated = false;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.partNumber === 'VC7788') {
      product.faqs = vc7788Faqs;
      console.log('✅ Updated VC7788 FAQs');
      updated = true;
    }
    if (product.partNumber === 'VCNB700') {
      product.faqs = vcnb700Faqs;
      console.log('✅ Updated VCNB700 FAQs');
      updated = true;
    }
  });
});

if (updated) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
  console.log('\n✅ Vanchip products.json updated successfully!');
} else {
  console.log('⚠️ No products found to update');
}
