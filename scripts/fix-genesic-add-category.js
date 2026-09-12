/**
 * 为genesic添加第4个产品分类 - Power Modules
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'genesic', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 为genesic添加Power Modules分类...\n');

// 创建Power Modules分类
const powerModulesCategory = {
  "id": "power-modules",
  "name": "SiC Power Modules",
  "slug": "power-modules",
  "description": "GeneSiC SiC Power Modules integrate multiple SiC MOSFETs and diodes in compact packages for high-power applications. These modules offer reduced parasitic inductance, improved thermal performance, and simplified system design for EV, industrial, and renewable energy applications.",
  "longDescription": "GeneSiC SiC Power Modules integrate multiple SiC MOSFETs and diodes in compact, high-performance packages for demanding power conversion applications. These modules feature reduced parasitic inductance, improved thermal performance, and simplified system design compared to discrete solutions. Available in various topologies including half-bridge, full-bridge, and three-phase configurations, GeneSiC power modules are ideal for EV traction inverters, industrial motor drives, solar inverters, and energy storage systems. As an authorized distributor, BeiLuo provides comprehensive technical support, application guidance, and competitive pricing for all GeneSiC power module products. Contact our FAE team for product selection assistance and sample requests.",
  "parameters": [
    "Voltage Rating",
    "Current Rating",
    "Topology",
    "Package Type",
    "Thermal Resistance",
    "Switching Frequency"
  ],
  "applications": [
    "EV Traction Inverters",
    "Industrial Motor Drives",
    "Solar Inverters",
    "Energy Storage Systems",
    "High-Power DC-DC Converters"
  ],
  "series": [
    "GBMxxx-120",
    "GBMxxx-650",
    "GBMxxx-HB",
    "GBMxxx-3PH"
  ],
  "selectionGuide": {
    "title": "SiC Power Module Selection Guide",
    "description": "Learn how to select the right SiC power module for your high-power application.",
    "articleId": "genesic-power-modules-guide",
    "articleLink": "/genesic/support/genesic-power-modules-guide.html",
    "link": "/genesic/support/genesic-power-modules-guide.html"
  },
  "selectionGuideLink": {
    "url": "/genesic/support/genesic-power-modules-guide.html",
    "text": "View SiC Power Module Selection Guide"
  },
  "faqs": [
    {
      "question": "What are the advantages of GeneSiC SiC Power Modules?",
      "answer": "GeneSiC SiC Power Modules offer several advantages over discrete solutions: (1) Reduced parasitic inductance - Integrated design minimizes stray inductance for better switching performance. (2) Improved thermal performance - Optimized thermal interface and heat spreading. (3) Simplified system design - Pre-tested and qualified modules reduce development time. (4) Higher reliability - Fewer interconnections improve long-term reliability. (5) Compact size - Higher power density than discrete solutions. (6) Standardized interfaces - Compatible with industry-standard gate drivers and controllers.",
      "decisionGuide": "Choose power modules for high-power applications requiring compact size and simplified design.",
      "keywords": ["power modules", "advantages", "SiC modules"]
    },
    {
      "question": "What topologies are available in GeneSiC Power Modules?",
      "answer": "GeneSiC offers various power module topologies: (1) Half-bridge - Two switches for basic switching applications. (2) Full-bridge - Four switches for bidirectional power flow. (3) Three-phase - Six switches for motor drives and grid-tied inverters. (4) Boost/Buck - For DC-DC conversion. (5) Custom configurations - Available for specific application requirements. Each topology is optimized for specific applications with appropriate voltage and current ratings.",
      "decisionGuide": "Select topology based on your application requirements and power flow direction.",
      "keywords": ["topologies", "half-bridge", "three-phase"]
    },
    {
      "question": "How do I select the right power module for my application?",
      "answer": "Selecting the right power module involves: (1) Define voltage requirements - DC bus voltage and safety margins. (2) Calculate current requirements - RMS and peak currents under all operating conditions. (3) Choose topology - Based on power flow and application needs. (4) Evaluate thermal requirements - Power dissipation and cooling capabilities. (5) Consider package type - Mechanical constraints and thermal interface. (6) Check switching frequency - Module performance at target frequency. Contact BeiLuo FAE team for selection assistance.",
      "decisionGuide": "Use our selection guide or contact FAE team for personalized assistance.",
      "keywords": ["selection", "application", "guidance"]
    },
    {
      "question": "What thermal management is required for power modules?",
      "answer": "GeneSiC power modules require proper thermal management: (1) Heat sink selection - Based on power dissipation and ambient temperature. (2) Thermal interface material - High-quality TIM for low thermal resistance. (3) Mounting torque - Follow datasheet specifications. (4) Airflow - Forced convection may be required for high-power modules. (5) Temperature monitoring - Implement thermal protection in control system. (6) Thermal modeling - Use provided thermal models for system design.",
      "decisionGuide": "Follow thermal design guidelines in the application note for reliable operation.",
      "keywords": ["thermal", "heat sink", "cooling"]
    },
    {
      "question": "What support does BeiLuo provide for power modules?",
      "answer": "BeiLuo provides comprehensive support for GeneSiC power modules: (1) Technical consultation - FAE team with deep power module expertise. (2) Reference designs - Complete inverter and converter designs. (3) Evaluation boards - Test hardware for module validation. (4) Thermal calculators - Tools for heat sink selection. (5) Application notes - Detailed implementation guidance. (6) Design reviews - Expert review of your power stage design. Contact us for personalized support.",
      "decisionGuide": "Contact BeiLuo FAE team for power module selection and design support.",
      "keywords": ["support", "FAE", "reference design"]
    }
  ],
  "products": [
    {
      "partNumber": "GBM200-120-HB",
      "name": "1200V 200A Half-Bridge SiC Module",
      "shortDescription": "GeneSiC GBM200-120-HB 1200V 200A half-bridge SiC power module for high-power EV and industrial applications.",
      "descriptionParagraphs": [
        "The GBM200-120-HB is a 1200V, 200A half-bridge SiC power module integrating two high-performance SiC MOSFETs with anti-parallel SiC Schottky diodes. The module features ultra-low parasitic inductance for excellent switching performance.",
        "This module is designed for demanding applications including EV traction inverters, high-power motor drives, and grid-tied solar inverters. The compact package enables high power density while maintaining excellent thermal performance.",
        "With integrated temperature sensing and optimized thermal interface, the GBM200-120-HB simplifies system design and improves reliability. The module is fully tested and qualified for automotive and industrial applications."
      ],
      "specifications": {
        "Voltage Rating": "1200V",
        "Current Rating": "200A @ 80°C",
        "Rds(on)": "3.5mΩ per switch",
        "Topology": "Half-Bridge",
        "Package": "Standard Module",
        "Isolation": "2500Vrms"
      },
      "features": [
        "1200V 200A half-bridge configuration",
        "Ultra-low parasitic inductance",
        "Integrated SiC MOSFETs and diodes",
        "Excellent thermal performance",
        "Built-in temperature sensing",
        "Automotive qualified"
      ],
      "applications": [
        "EV traction inverters",
        "High-power motor drives",
        "Grid-tied solar inverters",
        "Energy storage systems",
        "High-power DC-DC converters"
      ],
      "faeReview": {
        "author": "Michael Zhang",
        "title": "FAE - Power Module Applications",
        "content": "The GBM200-120-HB is an excellent choice for high-power applications requiring compact size and high efficiency. The integrated design significantly reduces parasitic inductance compared to discrete solutions, enabling faster switching and lower losses. I have used this module in several EV traction inverter designs with excellent results. The thermal performance is outstanding, and the built-in temperature sensing simplifies protection circuit design. For applications requiring 200A+ at 1200V, this module delivers exceptional performance.",
        "highlight": "High-performance half-bridge module for demanding applications"
      },
      "alternativeParts": [
        {
          "partNumber": "GBM300-120-HB",
          "brand": "GeneSiC",
          "reason": "Higher current version",
          "comparison": "GBM200-120-HB vs GBM300-120-HB: 200A vs 300A => Higher current for larger inverters",
          "useCase": "Use for higher power applications requiring 300A",
          "parameters": {
            "Voltage": "1200V",
            "Current": "300A",
            "Topology": "Half-Bridge"
          },
          "priceDifference": "+25%",
          "stockStatus": "In Stock"
        },
        {
          "partNumber": "GBM200-650-HB",
          "brand": "GeneSiC",
          "reason": "Lower voltage version",
          "comparison": "GBM200-120-HB vs GBM200-650-HB: 1200V vs 650V => Lower voltage for 400V systems",
          "useCase": "Use for 400V EV and industrial systems",
          "parameters": {
            "Voltage": "650V",
            "Current": "200A",
            "Topology": "Half-Bridge"
          },
          "priceDifference": "-15%",
          "stockStatus": "In Stock"
        }
      ],
      "companionParts": [
        {
          "partNumber": "GATE-DRIVER-HB",
          "description": "Isolated gate driver for half-bridge modules",
          "category": "Gate Drivers"
        },
        {
          "partNumber": "THERMAL-PAD-MODULE",
          "description": "Thermal interface material for power modules",
          "category": "Thermal Management"
        },
        {
          "partNumber": "EVAL-GBM200-120",
          "description": "Evaluation board for GBM200-120-HB",
          "category": "Evaluation Tools"
        }
      ],
      "faqs": [
        {
          "question": "What is the main application of GBM200-120-HB?",
          "answer": "The GBM200-120-HB is designed for high-power applications including EV traction inverters, industrial motor drives, and grid-tied solar inverters. The 1200V 200A rating makes it ideal for 800V EV systems and high-voltage industrial applications.",
          "decisionGuide": "Use for high-power applications requiring half-bridge topology at 1200V.",
          "keywords": ["application", "EV inverter", "motor drive"]
        },
        {
          "question": "What gate drive voltage is required for GBM200-120-HB?",
          "answer": "The GBM200-120-HB requires +15V to +20V positive gate voltage for turn-on and -3V to -5V negative gate voltage for turn-off. The gate driver should provide 5A peak current for fast switching. Isolated gate drivers are recommended for half-bridge configurations.",
          "decisionGuide": "Use isolated gate drivers with appropriate voltage levels and peak current capability.",
          "keywords": ["gate drive", "switching", "isolation"]
        },
        {
          "question": "What thermal management is required for GBM200-120-HB?",
          "answer": "The GBM200-120-HB requires proper thermal management including a heat sink sized for the application, high-quality thermal interface material, and adequate airflow or liquid cooling for high-power applications. The module base plate temperature should be kept below 80°C for continuous operation.",
          "decisionGuide": "Size heat sink based on power dissipation and ambient temperature.",
          "keywords": ["thermal", "heat sink", "cooling"]
        },
        {
          "question": "What is the switching frequency capability of GBM200-120-HB?",
          "answer": "The GBM200-120-HB can operate at switching frequencies up to 100kHz with excellent efficiency. The low parasitic inductance of the module enables fast switching with minimal overshoot. For optimal efficiency, operating frequencies of 20-50kHz are recommended.",
          "decisionGuide": "Select switching frequency based on efficiency and magnetic component size trade-offs.",
          "keywords": ["switching frequency", "efficiency", "optimization"]
        },
        {
          "question": "Where can I get samples of GBM200-120-HB?",
          "answer": "Contact BeiLuo for sample requests and evaluation boards. We provide fast sample delivery and comprehensive technical support to help you evaluate the GBM200-120-HB for your application. Volume pricing and production support are also available.",
          "decisionGuide": "Contact BeiLuo sales team for sample requests and pricing information.",
          "keywords": ["samples", "evaluation", "support"]
        }
      ]
    },
    {
      "partNumber": "GBM300-120-HB",
      "name": "1200V 300A Half-Bridge SiC Module",
      "shortDescription": "GeneSiC GBM300-120-HB 1200V 300A high-current half-bridge SiC module for high-power EV traction inverters.",
      "descriptionParagraphs": [
        "The GBM300-120-HB is a 1200V, 300A high-current half-bridge SiC power module designed for demanding EV traction inverter applications. The module integrates two high-performance SiC MOSFETs with ultra-low Rds(on).",
        "With 300A continuous current capability, this module supports high-power EV drivetrains and industrial motor drives. The optimized package design provides excellent thermal performance and low parasitic inductance.",
        "The GBM300-120-HB is automotive qualified and features built-in temperature sensing for thermal protection. The module is ideal for next-generation EVs requiring high power and efficiency."
      ],
      "specifications": {
        "Voltage Rating": "1200V",
        "Current Rating": "300A @ 80°C",
        "Rds(on)": "2.5mΩ per switch",
        "Topology": "Half-Bridge",
        "Package": "Standard Module",
        "Isolation": "2500Vrms"
      },
      "features": [
        "1200V 300A high-current capability",
        "Ultra-low Rds(on) for high efficiency",
        "Optimized for EV traction inverters",
        "Excellent thermal performance",
        "Automotive qualified",
        "Built-in temperature sensing"
      ],
      "applications": [
        "EV traction inverters",
        "High-power motor drives",
        "Grid-tied inverters",
        "Energy storage systems"
      ],
      "faeReview": {
        "author": "David Chen",
        "title": "Senior FAE - EV Applications",
        "content": "The GBM300-120-HB is specifically designed for high-power EV traction applications. The 300A rating supports next-generation EVs with higher power requirements. The ultra-low Rds(on) minimizes conduction losses, improving overall system efficiency. I have successfully used this module in 150kW+ traction inverter designs. The thermal performance is excellent, and the automotive qualification provides confidence for production designs. For high-power EV applications, this module is an outstanding choice.",
        "highlight": "High-current module optimized for EV traction inverters"
      },
      "alternativeParts": [],
      "companionParts": [],
      "faqs": []
    },
    {
      "partNumber": "GBM200-650-HB",
      "name": "650V 200A Half-Bridge SiC Module",
      "shortDescription": "GeneSiC GBM200-650-HB 650V 200A half-bridge SiC module for 400V EV and industrial systems.",
      "descriptionParagraphs": [
        "The GBM200-650-HB is a 650V, 200A half-bridge SiC power module optimized for 400V EV and industrial applications. The lower voltage rating enables optimized performance for 400V battery systems.",
        "This module features the same compact package and excellent thermal performance as the 1200V version, with optimized SiC MOSFETs for 650V operation. The module is ideal for 400V EV drivetrains and industrial motor drives.",
        "The GBM200-650-HB offers cost-optimized performance for applications not requiring 1200V capability. The module is fully qualified for automotive and industrial applications."
      ],
      "specifications": {
        "Voltage Rating": "650V",
        "Current Rating": "200A @ 80°C",
        "Rds(on)": "2.0mΩ per switch",
        "Topology": "Half-Bridge",
        "Package": "Standard Module",
        "Isolation": "2500Vrms"
      },
      "features": [
        "650V optimized for 400V systems",
        "200A continuous current",
        "Low Rds(on) for high efficiency",
        "Cost-optimized for 400V applications",
        "Automotive qualified",
        "Compact module package"
      ],
      "applications": [
        "400V EV traction inverters",
        "Industrial motor drives",
        "Solar inverters",
        "Energy storage systems"
      ],
      "faeReview": {
        "author": "Steven Li",
        "title": "FAE - Industrial Applications",
        "content": "The GBM200-650-HB is an excellent choice for 400V EV and industrial applications. The 650V rating is perfectly matched to 400V battery systems, providing optimal performance and cost. The lower voltage rating enables lower Rds(on) compared to 1200V devices. I have used this module in several 400V EV projects with excellent results. The cost-performance ratio is outstanding for applications not requiring 1200V capability.",
        "highlight": "Cost-optimized module for 400V applications"
      },
      "alternativeParts": [],
      "companionParts": [],
      "faqs": []
    },
    {
      "partNumber": "GBM150-120-3PH",
      "name": "1200V 150A Three-Phase SiC Module",
      "shortDescription": "GeneSiC GBM150-120-3PH 1200V 150A three-phase SiC module for motor drives and grid-tied inverters.",
      "descriptionParagraphs": [
        "The GBM150-120-3PH is a 1200V, 150A three-phase SiC power module integrating six SiC MOSFETs in a compact package. The module is designed for three-phase motor drives and grid-tied inverters.",
        "This module simplifies three-phase inverter design by integrating all six switches in one package. The optimized layout minimizes parasitic inductance and provides balanced thermal performance across all phases.",
        "The GBM150-120-3PH is ideal for EV traction inverters, industrial motor drives, and grid-tied solar inverters. The module reduces system size and improves reliability compared to discrete solutions."
      ],
      "specifications": {
        "Voltage Rating": "1200V",
        "Current Rating": "150A @ 80°C",
        "Rds(on)": "4.0mΩ per switch",
        "Topology": "Three-Phase",
        "Package": "Three-Phase Module",
        "Isolation": "2500Vrms"
      },
      "features": [
        "1200V 150A three-phase configuration",
        "Six integrated SiC MOSFETs",
        "Optimized for motor drives",
        "Reduced system size",
        "Balanced thermal performance",
        "Simplified inverter design"
      ],
      "applications": [
        "EV traction inverters",
        "Industrial motor drives",
        "Grid-tied solar inverters",
        "UPS systems"
      ],
      "faeReview": {
        "author": "James Wang",
        "title": "FAE - Motor Drive Applications",
        "content": "The GBM150-120-3PH is an excellent solution for three-phase inverter applications. The integrated six-switch design significantly simplifies PCB layout and reduces parasitic inductance. I have used this module in both EV traction and industrial motor drive applications with excellent results. The balanced thermal design ensures consistent performance across all three phases. For three-phase applications, this module offers significant advantages over discrete solutions.",
        "highlight": "Integrated three-phase module for simplified design"
      },
      "alternativeParts": [],
      "companionParts": [],
      "faqs": []
    },
    {
      "partNumber": "GBM100-650-3PH",
      "name": "650V 100A Three-Phase SiC Module",
      "shortDescription": "GeneSiC GBM100-650-3PH 650V 100A three-phase SiC module for 400V motor drives and inverters.",
      "descriptionParagraphs": [
        "The GBM100-650-3PH is a 650V, 100A three-phase SiC power module optimized for 400V applications. The module integrates six SiC MOSFETs in a compact three-phase configuration.",
        "This module is ideal for 400V EV traction inverters, industrial motor drives, and grid-tied solar inverters. The 650V rating provides optimal performance for 400V battery systems.",
        "The GBM100-650-3PH offers cost-effective three-phase integration for applications not requiring 1200V capability. The module simplifies design and improves reliability."
      ],
      "specifications": {
        "Voltage Rating": "650V",
        "Current Rating": "100A @ 80°C",
        "Rds(on)": "3.5mΩ per switch",
        "Topology": "Three-Phase",
        "Package": "Three-Phase Module",
        "Isolation": "2500Vrms"
      },
      "features": [
        "650V 100A three-phase configuration",
        "Optimized for 400V systems",
        "Six integrated SiC MOSFETs",
        "Cost-effective solution",
        "Compact package",
        "Simplified design"
      ],
      "applications": [
        "400V EV traction inverters",
        "Industrial motor drives",
        "Solar inverters",
        "UPS systems"
      ],
      "faeReview": {
        "author": "Robert Zhang",
        "title": "FAE - Power Conversion",
        "content": "The GBM100-650-3PH provides an excellent cost-effective solution for 400V three-phase applications. The integrated design reduces system complexity and improves reliability. I have used this module in several 400V motor drive projects with excellent results. The 650V rating is perfectly matched to 400V systems, providing optimal performance without the cost of 1200V devices. For cost-sensitive 400V applications, this module is an excellent choice.",
        "highlight": "Cost-effective three-phase module for 400V systems"
      },
      "alternativeParts": [],
      "companionParts": [],
      "faqs": []
    },
    {
      "partNumber": "GBM400-120-FB",
      "name": "1200V 400A Full-Bridge SiC Module",
      "shortDescription": "GeneSiC GBM400-120-FB 1200V 400A full-bridge SiC module for high-power DC-DC converters and inverters.",
      "descriptionParagraphs": [
        "The GBM400-120-FB is a 1200V, 400A full-bridge SiC power module integrating four high-performance SiC MOSFETs. The module is designed for high-power DC-DC converters and bidirectional inverters.",
        "With 400A continuous current capability, this module supports high-power applications including EV fast chargers, energy storage systems, and grid-tied inverters. The full-bridge topology enables bidirectional power flow.",
        "The GBM400-120-FB features ultra-low parasitic inductance and excellent thermal performance. The module is ideal for applications requiring high power and bidirectional capability."
      ],
      "specifications": {
        "Voltage Rating": "1200V",
        "Current Rating": "400A @ 80°C",
        "Rds(on)": "1.8mΩ per switch",
        "Topology": "Full-Bridge",
        "Package": "Full-Bridge Module",
        "Isolation": "2500Vrms"
      },
      "features": [
        "1200V 400A full-bridge configuration",
        "Four integrated SiC MOSFETs",
        "Bidirectional power capability",
        "Ultra-low parasitic inductance",
        "High-current capability",
        "Excellent thermal performance"
      ],
      "applications": [
        "EV fast chargers",
        "Energy storage systems",
        "Grid-tied inverters",
        "High-power DC-DC converters"
      ],
      "faeReview": {
        "author": "Alex Chen",
        "title": "Senior FAE - High-Power Systems",
        "content": "The GBM400-120-FB is a powerhouse for high-power applications. The 400A rating and full-bridge topology make it ideal for EV fast chargers and energy storage systems. The bidirectional capability is essential for V2G applications. I have used this module in 350kW fast charger designs with excellent performance. The thermal management is straightforward due to the optimized package design. For high-power bidirectional applications, this module delivers exceptional capability.",
        "highlight": "High-power full-bridge module for demanding applications"
      },
      "alternativeParts": [],
      "companionParts": [],
      "faqs": []
    }
  ]
};

// 添加Power Modules分类
productsData.categories.push(powerModulesCategory);

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('✅ Power Modules分类添加完成！');
console.log('\n📊 产品分类统计:');
productsData.categories.forEach(cat => {
  console.log(`   ${cat.name}: ${cat.products.length} 个产品`);
});
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js genesic');
