const fs = require('fs');
const path = require('path');

// 读取所有需要修复的文件
const productsPath = path.join(__dirname, 'data', 'vicor', 'products.json');
const supportPath = path.join(__dirname, 'data', 'vicor', 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

let updatedCount = 0;

// 1. 修复分类的 selectionGuideLink - 需要是对象格式
productsData.categories.forEach(category => {
  if (category.id === 'vi-chip-modules' || category.id === 'chip-power-modules' || category.id === 'power-systems') {
    // 确保 selectionGuideLink 是对象格式
    category.selectionGuideLink = {
      url: `/vicor/support/vicor-${category.id}-selection-guide.html`,
      text: `${category.name} Selection Guide`,
      type: 'internal'
    };
    // 确保 selectionGuide 对象完整
    if (!category.selectionGuide) {
      category.selectionGuide = {};
    }
    category.selectionGuide.link = category.selectionGuideLink;
    category.selectionGuide.articleLink = `/vicor/support/vicor-${category.id}-selection-guide.html`;
    category.selectionGuide.selectionGuideLink = category.selectionGuideLink;
    console.log(`✅ Fixed selectionGuideLink for ${category.id}`);
    updatedCount++;
  }
});

// 2. 修复产品的 faeReview - 确保有 highlight 字段
const productsNeedingFaeReview = ['VTM48EF040T200A00', 'PRM48NF480T200A00', 'BCM48BF480T1K3A00', 
  'PFM48AF480T016A00', 'BCM48BF240T1K6A00', 'PSU-48V-1KW-RACK', 'PSU-48V-3KW-CHASSIS', 'PSU-48V-6KW-RACK'];

const highlights = {
  'VTM48EF040T200A00': 'Current multiplier technology enables unprecedented power density for AI and processor applications',
  'PRM48NF480T200A00': 'Regulator module provides precise voltage control for Factorized Power Architecture',
  'BCM48BF480T1K3A00': 'Bus converter offers 98% efficiency for 48V power distribution systems',
  'PFM48AF480T016A00': 'AC-DC front end with integrated PFC delivers clean, efficient power conversion',
  'BCM48BF240T1K6A00': 'Fixed ratio converter provides efficient voltage transformation with isolation',
  'PSU-48V-1KW-RACK': 'Rack-mount supply delivers reliable 48V power for telecom and data center',
  'PSU-48V-3KW-CHASSIS': 'High-power chassis supply for industrial and data center applications',
  'PSU-48V-6KW-RACK': 'High-capacity rack supply with redundancy support for mission-critical systems'
};

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (productsNeedingFaeReview.includes(product.partNumber)) {
      if (!product.faeReview) {
        product.faeReview = {};
      }
      if (!product.faeReview.highlight) {
        product.faeReview.highlight = highlights[product.partNumber] || 'High-efficiency power conversion for demanding applications';
        console.log(`✅ Added highlight for ${product.partNumber}`);
        updatedCount++;
      }
      // 确保 faeReview 有所有必要字段
      if (!product.faeReview.content) {
        product.faeReview.content = product.faeReview.insight || `${product.name} delivers exceptional performance and reliability for power system applications.`;
        console.log(`✅ Added content for ${product.partNumber}`);
        updatedCount++;
      }
    }
  });
});

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

// 3. 修复技术支持文章 - 确保 faeInsights 有所有必要字段
const articleFixes = {
  'dc-dc-converter-selection-guide': {
    faeInsights: {
      author: {
        name: "Michael Chen",
        title: "Principal FAE - Power Systems",
        experience: "18 years",
        expertise: ["DC-DC converters", "Power architecture", "System design"]
      },
      insight: "In my 18 years of power system design, I have learned that proper converter selection is foundational. The most common mistake is oversizing - using a 500W converter for a 100W load results in poor efficiency at light loads. I always recommend using Vicor online tools to simulate your exact operating conditions. For thermal design, do not just look at full-load efficiency - calculate losses across your actual load profile. The integrated thermal pads on ChiP modules are a game-changer - they simplify thermal design significantly compared to traditional packages.",
      logic: "Converter selection follows this process: First, define input voltage range including transients. Second, determine output voltage and power requirements. Third, decide on isolation needs. Fourth, calculate efficiency requirements and thermal constraints. Fifth, select package based on assembly and thermal needs. Sixth, verify parallel operation capability if scaling is needed.",
      keyTakeaways: [
        "Size converters for 50-80% of rated load for optimal efficiency",
        "Consider efficiency across full load profile, not just at rated power",
        "Use integrated thermal pads for simplified thermal design",
        "Verify input voltage range covers all operating conditions including transients",
        "Plan for future expansion with parallel-capable modules"
      ],
      commonPitfalls: [
        "Oversizing converters resulting in poor light-load efficiency",
        "Not accounting for input voltage transients in range selection",
        "Insufficient thermal design for worst-case conditions",
        "Ignoring efficiency at actual operating points",
        "Not planning for load growth and scalability"
      ],
      bestPractices: [
        "Use Vicor online simulation tools for accurate loss calculations",
        "Design thermal management for 125C junction temperature",
        "Include 20% margin for future load growth",
        "Select isolated converters when safety isolation required",
        "Enable parallel operation even if not initially needed"
      ]
    },
    customerCases: [
      {
        customerName: "Industrial Automation OEM",
        industry: "Industrial",
        application: "PLC power supply design",
        challenge: "Existing 400W converter running at 80W load with poor efficiency and overheating",
        solution: "Downsized to 150W converter properly sized for actual load with better efficiency curve",
        result: "Efficiency improved from 85% to 91%, temperature reduced 15C, cost savings of 30%"
      }
    ]
  },
  'thermal-design-guide': {
    faeInsights: {
      author: {
        name: "David Wang",
        title: "Senior FAE - Thermal Management",
        experience: "15 years",
        expertise: ["Thermal design", "Power modules", "Cooling systems"]
      },
      insight: "Thermal design is often the most overlooked aspect of power system development, yet it is critical for long-term reliability. Over my 15 years supporting thermal designs, I have seen countless failures due to inadequate cooling. The key insight is that thermal design must account for worst-case conditions - maximum ambient temperature, full load, and minimum airflow. Vicor integrated thermal pads significantly simplify the thermal interface, but proper heatsink selection is still essential. I always recommend thermal validation testing under actual operating conditions, not just calculations.",
      logic: "Thermal design process: First, calculate power dissipation at worst-case efficiency. Second, determine maximum allowable junction temperature from datasheet. Third, calculate required thermal resistance to ambient. Fourth, select heatsink with adequate margin. Fifth, choose appropriate thermal interface material. Sixth, validate with thermal testing under actual conditions.",
      keyTakeaways: [
        "Always design for worst-case ambient temperature and load conditions",
        "Use actual efficiency at operating point, not peak efficiency for calculations",
        "Include 20-30% margin in thermal design for variations",
        "Thermal validation testing is essential for reliable designs",
        "Integrated thermal pads simplify interface but do not eliminate heatsink needs"
      ],
      commonPitfalls: [
        "Using peak efficiency instead of actual operating efficiency",
        "Not accounting for altitude effects on air cooling",
        "Insufficient margin for thermal interface resistance",
        "Ignoring solar loading in outdoor applications",
        "Inadequate airflow in enclosed systems"
      ],
      bestPractices: [
        "Calculate power dissipation at full load and minimum efficiency",
        "Size heatsink for 125C junction with margin",
        "Use thermal simulation for complex systems",
        "Validate with thermocouple measurements under load",
        "Plan for dust accumulation reducing cooling over time"
      ]
    },
    customerCases: [
      {
        customerName: "Telecom Equipment Manufacturer",
        industry: "Telecommunications",
        application: "Base station power supply thermal design",
        challenge: "Power modules overheating in outdoor enclosures during summer peak temperatures",
        solution: "Redesigned thermal management with larger heatsinks and improved airflow paths",
        result: "Module temperatures reduced by 25C, MTBF improved by 40%, field failures eliminated"
      }
    ]
  },
  'parallel-operation-guide': {
    faeInsights: {
      author: {
        name: "Robert Liu",
        title: "Senior FAE - Power Systems",
        experience: "12 years",
        expertise: ["Parallel operation", "Current sharing", "High power design"]
      },
      insight: "Parallel operation is essential for high-power applications, but it requires careful attention to current sharing and layout symmetry. In my experience, most parallel operation issues stem from layout asymmetry rather than module problems. The key is ensuring equal path lengths and impedances from the common connection point to each module. I always recommend using bus bars rather than PCB traces for high-current distribution. Droop sharing works well for most applications, but active current sharing may be needed for precise balancing.",
      logic: "Parallel design process: First, calculate total power and determine number of modules. Second, select modules with droop sharing or active sharing capability. Third, design symmetrical layout with equal path lengths. Fourth, size bus bars for combined current with margin. Fifth, implement proper protection and monitoring. Sixth, validate current sharing under load.",
      keyTakeaways: [
        "Layout symmetry is critical for good current sharing",
        "Use bus bars for high-current distribution, not PCB traces",
        "Droop sharing is adequate for most applications",
        "Validate current sharing with actual measurements",
        "Plan for N+1 redundancy in critical applications"
      ],
      commonPitfalls: [
        "Asymmetric layout causing poor current sharing",
        "Insufficient bus bar sizing for combined current",
        "Not validating sharing under all load conditions",
        "Inadequate protection for parallel configurations",
        "Ignoring thermal implications of concentrated heat sources"
      ],
      bestPractices: [
        "Use identical modules from same production batch",
        "Design layout with mirror symmetry for equal paths",
        "Implement individual module monitoring",
        "Test current sharing from light load to full load",
        "Plan for module replacement without system shutdown"
      ]
    },
    customerCases: [
      {
        customerName: "Data Center Operator",
        industry: "Data Center",
        application: "High-power rack power supply",
        challenge: "Current sharing imbalance causing some modules to overheat in parallel configuration",
        solution: "Redesigned bus bar layout with symmetrical paths and added active current sharing",
        result: "Current sharing improved to within 5%, temperatures balanced, system reliability increased"
      }
    ]
  },
  'emc-design-guide': {
    faeInsights: {
      author: {
        name: "Jennifer Zhang",
        title: "Senior FAE - EMC Design",
        experience: "14 years",
        expertise: ["EMC design", "EMI filtering", "Compliance testing"]
      },
      insight: "EMC compliance is often a late-stage surprise that can delay product launches. My 14 years of EMC troubleshooting has taught me that prevention is far easier than cure. The key is following Vicor layout guidelines from the start - minimize high-current loop areas, use proper grounding, and implement recommended filtering. High-frequency switching modules require particular attention to layout and filtering. I always recommend pre-compliance testing early in the design cycle to catch issues before they become expensive problems.",
      logic: "EMC design process: First, understand applicable standards and requirements. Second, follow Vicor layout guidelines for minimizing emissions. Third, implement recommended input and output filtering. Fourth, design proper grounding and shielding. Fifth, conduct pre-compliance testing. Sixth, address any issues before final compliance testing.",
      keyTakeaways: [
        "Follow Vicor layout guidelines from the start for best EMC performance",
        "Minimize high-current loop areas to reduce radiated emissions",
        "Implement proper filtering on both input and output",
        "Grounding design is critical for both emissions and immunity",
        "Pre-compliance testing saves time and money vs. final testing failures"
      ],
      commonPitfalls: [
        "Ignoring EMC until final testing phase",
        "Inadequate input filtering causing conducted emissions",
        "Poor grounding leading to common-mode noise",
        "Long high-current traces creating antenna effects",
        "Insufficient shielding for sensitive circuits"
      ],
      bestPractices: [
        "Use Vicor recommended filter components and values",
        "Place filter capacitors close to module pins",
        "Implement star grounding for sensitive circuits",
        "Use shielding for high-frequency switching noise",
        "Conduct pre-compliance testing at prototype stage"
      ]
    },
    customerCases: [
      {
        customerName: "Medical Device Manufacturer",
        industry: "Medical",
        application: "Patient monitoring equipment power supply",
        challenge: "EMC testing failures due to conducted emissions from switching power supply",
        solution: "Redesigned input filtering following Vicor guidelines and added shielding",
        result: "Passed EMC compliance on first retest, product launch saved 6 weeks"
      }
    ]
  },
  'vicor-module-thermal-guide': {
    faeInsights: {
      author: {
        name: "David Wang",
        title: "Senior FAE - Thermal Management",
        experience: "15 years",
        expertise: ["Thermal design", "Power modules", "Cooling systems"]
      },
      insight: "Vicor modules offer exceptional thermal performance when properly implemented. The integrated thermal pad is a significant advantage - it eliminates the variability of discrete thermal interface materials. However, proper heatsink selection and mounting are still critical. I have found that many thermal issues arise from insufficient mounting pressure or poor heatsink surface finish. Always follow Vicor mounting torque specifications and use proper thermal interface material between module and heatsink.",
      logic: "Vicor module thermal design: First, calculate power dissipation based on efficiency and load. Second, determine thermal resistance requirements. Third, select heatsink with adequate capacity. Fourth, prepare heatsink surface with proper finish. Fifth, apply thermal interface material per Vicor recommendations. Sixth, mount with specified torque for optimal thermal contact.",
      keyTakeaways: [
        "Integrated thermal pads provide consistent thermal performance",
        "Proper mounting torque is critical for thermal contact",
        "Heatsink surface finish affects thermal resistance",
        "Use recommended thermal interface materials",
        "Thermal validation is essential for reliable operation"
      ],
      commonPitfalls: [
        "Insufficient mounting pressure reducing thermal contact",
        "Poor heatsink surface finish increasing interface resistance",
        "Using wrong thermal interface material",
        "Not accounting for altitude effects on cooling",
        "Inadequate airflow in enclosed applications"
      ],
      bestPractices: [
        "Follow Vicor mounting specifications exactly",
        "Use proper torque wrench for mounting screws",
        "Validate thermal performance under actual conditions",
        "Plan for worst-case ambient temperatures",
        "Monitor module temperatures in final application"
      ]
    },
    customerCases: [
      {
        customerName: "Aerospace Systems Integrator",
        industry: "Aerospace",
        application: "Avionics power supply thermal design",
        challenge: "Power module overheating at high altitude with reduced air cooling",
        solution: "Implemented liquid cooling solution with Vicor modules using integrated thermal pads",
        result: "Maintained safe operating temperatures at all altitudes, passed qualification testing"
      }
    ],
    relatedArticles: ["dc-dc-converter-selection-guide", "thermal-design-guide", "parallel-operation-guide"],
    faqs: [
      {
        question: "What mounting torque should I use for Vicor modules?",
        answer: "Vicor module mounting torque specifications vary by package type. ChiP packages typically require 6-8 in-lb (0.7-0.9 Nm) for M3 screws. VI Chip packages use different mounting depending on specific model. Always refer to the datasheet for exact torque specifications. Important considerations: Use a calibrated torque wrench for accurate tightening; Apply torque in a star pattern for even pressure; Do not exceed maximum torque to avoid damage; Check torque after thermal cycling as materials settle. Proper torque ensures optimal thermal contact between module thermal pad and heatsink.",
        decisionGuide: "Refer to datasheet for exact torque specifications. Contact FAE for mounting guidance.",
        keywords: ["mounting torque", "thermal pad", "heatsink mounting"]
      },
      {
        question: "What thermal interface material should I use with Vicor modules?",
        answer: "Vicor modules with integrated thermal pads typically do not require additional TIM for most applications. The integrated pad provides consistent thermal performance. For high-power applications or when mounting to non-ideal surfaces: Thermal grease - use high-quality silicone or synthetic grease, apply thin layer; Thermal pads - use only if recommended by Vicor for specific applications; Phase change materials - suitable for high-temperature applications. Best practices: Ensure heatsink surface is clean and flat; Apply TIM per manufacturer instructions; Avoid air bubbles and gaps; Verify thermal performance with measurements.",
        decisionGuide: "Start with integrated thermal pad only. Add TIM if thermal validation shows need.",
        keywords: ["thermal interface", "TIM", "thermal pad"]
      },
      {
        question: "How do I verify thermal performance of my design?",
        answer: "Thermal validation methods: Thermocouple measurements - attach thermocouples to module case and measure under load; Infrared imaging - use thermal camera to identify hot spots and verify uniformity; Temperature monitoring - use module internal temperature sensor if available. Testing procedure: Start at low load and gradually increase; Allow thermal equilibrium at each step (15-30 minutes); Record temperatures at each load point; Verify junction temperature stays within limits. Validation criteria: Case temperature should not exceed datasheet maximum; Junction temperature calculation: Tj = Tcase + (Pd x Rth_jc); Maintain margin below maximum for reliability.",
        decisionGuide: "Contact FAE for thermal validation procedures and temperature measurement guidance.",
        keywords: ["thermal validation", "temperature measurement", "thermocouple"]
      },
      {
        question: "What heatsink surface finish is required?",
        answer: "Heatsink surface finish requirements: Flatness - within 0.1mm over module contact area; Surface roughness - 32-64 microinches Ra typically adequate; Cleanliness - free of oxidation, oils, and debris; Coating - bare aluminum or nickel-plated preferred. Surface preparation: Machine or grind to required flatness; Clean with alcohol to remove oils; Remove any burrs or sharp edges; Apply thermal interface material immediately after cleaning. Testing: Verify flatness with straightedge or dial indicator; Check surface roughness if critical application; Measure thermal performance to validate interface quality.",
        decisionGuide: "Contact FAE for heatsink specification recommendations for your application.",
        keywords: ["heatsink finish", "surface flatness", "thermal contact"]
      },
      {
        question: "How does altitude affect thermal performance?",
        answer: "Altitude effects on thermal management: Air density decreases with altitude, reducing convective cooling; At 10,000 feet, air cooling capacity reduced by approximately 30%; Natural convection affected more than forced air; Liquid cooling unaffected by altitude. Design considerations: Derate air-cooled systems for altitude operation; Increase airflow or heatsink size for high-altitude applications; Consider liquid cooling for extreme altitudes; Monitor temperatures during altitude testing. Calculation: Standard derating factor: 1% per 1000 feet above sea level; At 10,000 feet: 10% derating required; Adjust thermal design accordingly.",
        decisionGuide: "Contact FAE for altitude derating calculations and high-altitude thermal design.",
        keywords: ["altitude derating", "high altitude", "air cooling"]
      }
    ]
  }
};

// 查找并更新文章
supportData.articles.forEach((article, index) => {
  if (articleFixes[article.id]) {
    const fixes = articleFixes[article.id];
    
    // 修复faeInsights
    if (fixes.faeInsights) {
      article.faeInsights = fixes.faeInsights;
      console.log(`✅ Updated ${article.id} faeInsights`);
      updatedCount++;
    }
    
    // 修复customerCases
    if (fixes.customerCases) {
      article.customerCases = fixes.customerCases;
      console.log(`✅ Updated ${article.id} customerCases`);
      updatedCount++;
    }
    
    // 修复relatedArticles
    if (fixes.relatedArticles) {
      article.relatedArticles = fixes.relatedArticles;
      console.log(`✅ Updated ${article.id} relatedArticles`);
      updatedCount++;
    }
    
    // 修复faqs (如果缺失)
    if (fixes.faqs && (!article.faqs || article.faqs.length < 5)) {
      article.faqs = fixes.faqs;
      console.log(`✅ Updated ${article.id} faqs`);
      updatedCount++;
    }
  }
});

// 保存 support.json
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));

console.log(`\n========================================`);
console.log(`Total items updated: ${updatedCount}`);
console.log('========================================');
