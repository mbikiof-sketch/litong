const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'aowei', 'support.json');

console.log('Reading support.json...');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Add 3 more articles
const newArticles = [
  {
    id: "module-system-design",
    title: "Supercapacitor Module System Design Guide",
    category: "Design Guide",
    shortDescription: "Comprehensive guide for designing supercapacitor module systems including balancing, thermal management, and safety considerations.",
    content: "## Module Design Fundamentals\n\nSupercapacitor modules combine multiple cells in series and parallel configurations to achieve required voltage and capacitance ratings. This guide covers essential design considerations for reliable module systems.\n\n## Cell Balancing\n\nActive balancing is essential for series-connected supercapacitors to prevent overvoltage on individual cells. Aowei modules incorporate sophisticated balancing circuits that maintain voltage equilibrium across all cells.\n\n## Thermal Management\n\nProper thermal design ensures consistent performance and long lifetime. Consider heat dissipation from ESR losses and environmental temperature extremes.\n\n## Safety Considerations\n\nInclude appropriate overvoltage protection, thermal monitoring, and fault detection in your module design.",
    tags: ["module design", "balancing", "thermal management", "safety"],
    relatedProducts: ["AW-MOD-16V-33F", "AW-MOD-48V-11F", "AW-MOD-96V-5F5"],
    author: {
      name: "James Wilson",
      title: "Applications Engineer",
      email: "j.wilson@BeiLuo.com",
      image: "/assets/team/james-wilson.jpg"
    },
    publishedDate: "2024-02-10",
    lastUpdated: "2024-03-15",
    readTime: "20 minutes",
    difficulty: "Advanced",
    faeInsights: {
      author: "LiTong FAE Team",
      content: "Module design requires careful attention to cell balancing and thermal management. Always include safety margins in voltage and temperature ratings. The most common failure mode in supercapacitor modules is cell imbalance leading to overvoltage on individual cells.",
      keyTakeaways: [
        "Active balancing is essential for series configurations",
        "Thermal management affects both performance and lifetime",
        "Include comprehensive monitoring and protection circuits"
      ],
      decisionFramework: {
        steps: [
          "Determine voltage and capacitance requirements",
          "Calculate series and parallel configuration",
          "Design balancing circuit",
          "Plan thermal management strategy",
          "Implement monitoring and protection"
        ],
        decisionPoints: [
          "Active vs passive balancing",
          "Natural vs forced cooling",
          "Monitoring granularity level"
        ]
      }
    },
    faqs: [
      {
        question: "Why is cell balancing necessary in supercapacitor modules?",
        answer: "Cell balancing prevents overvoltage on individual cells in series configurations. Without balancing, cell voltage variations can cause some cells to exceed their rated voltage while others remain undercharged.",
        decisionGuide: "Always use active balancing for applications with more than 3 cells in series.",
        keywords: ["cell balancing", "overvoltage protection", "series connection"]
      },
      {
        question: "What is the difference between active and passive balancing?",
        answer: "Passive balancing uses resistors to dissipate excess energy from higher-voltage cells. Active balancing transfers energy between cells, improving efficiency and reducing heat generation.",
        decisionGuide: "Use active balancing for high-cycle applications and where efficiency is critical.",
        keywords: ["active balancing", "passive balancing", "energy transfer"]
      },
      {
        question: "How do I calculate the thermal requirements for a supercapacitor module?",
        answer: "Calculate heat generation from I²R losses where I is current and R is ESR. Consider both continuous operation and peak current conditions. Ensure adequate heat dissipation to maintain cell temperatures within specifications.",
        decisionGuide: "Perform thermal analysis for worst-case operating conditions.",
        keywords: ["thermal analysis", "heat dissipation", "temperature management"]
      },
      {
        question: "What safety protections should be included in module design?",
        answer: "Essential protections include overvoltage protection, undervoltage protection, overcurrent protection, and overtemperature protection. Consider adding cell-level monitoring for critical applications.",
        decisionGuide: "Implement all basic protections plus application-specific safety features.",
        keywords: ["safety protection", "overvoltage", "temperature protection"]
      },
      {
        question: "How do I select the right module voltage rating?",
        answer: "Select a module with a voltage rating at least 20% higher than your maximum operating voltage. This provides margin for transients and ensures long-term reliability.",
        decisionGuide: "Calculate maximum operating voltage and add 20-30% safety margin.",
        keywords: ["voltage rating", "safety margin", "module selection"]
      }
    ],
    customerCases: [
      {
        customer: "Renewable Energy Systems Inc",
        industry: "Energy Storage",
        challenge: "Needed reliable energy storage module for solar microgrid application",
        solution: "Custom 48V module with enhanced balancing and monitoring",
        feedback: "The module has operated flawlessly for over 2 years with minimal maintenance required."
      }
    ],
    slug: "module-system-design",
    publishDate: "2024-02-10",
    summary: "Comprehensive guide for designing supercapacitor module systems including balancing, thermal management, and safety considerations.",
    relatedArticles: [
      {
        id: "supercapacitor-basics",
        title: "Supercapacitor Basics and Selection Guide",
        summary: "Introduction to supercapacitor technology and selection criteria"
      },
      {
        id: "automotive-applications",
        title: "Supercapacitors in Automotive Applications",
        summary: "Automotive applications and design considerations"
      },
      {
        id: "lifetime-analysis",
        title: "Supercapacitor Lifetime and Reliability Analysis",
        summary: "Understanding supercapacitor lifetime factors"
      }
    ]
  },
  {
    id: "automotive-applications",
    title: "Supercapacitors in Automotive Applications",
    category: "Application Guide",
    shortDescription: "Explore how supercapacitors are transforming automotive systems from start-stop to regenerative braking and emergency power.",
    content: "## Automotive Applications Overview\n\nSupercapacitors are increasingly adopted in automotive applications due to their high power density, wide temperature range, and exceptional cycle life. This guide explores key applications and design considerations.\n\n## Start-Stop Systems\n\nSupercapacitors provide the burst power needed for engine restart in micro-hybrid vehicles. Their rapid charge acceptance makes them ideal for capturing regenerative braking energy.\n\n## Regenerative Braking\n\nThe high power density of supercapacitors enables efficient capture of braking energy that would otherwise be lost as heat. This improves overall vehicle efficiency.\n\n## Emergency Power\n\nSupercapacitors provide reliable backup power for critical safety systems including power steering and braking assistance.",
    tags: ["automotive", "start-stop", "regenerative braking", "emergency power"],
    relatedProducts: ["AW-2R7-J227UY", "AW-MOD-16V-33F", "AW-LIC-3R8-150"],
    author: {
      name: "Dr. Sarah Kim",
      title: "Automotive Applications Specialist",
      email: "s.kim@BeiLuo.com",
      image: "/assets/team/sarah-kim.jpg"
    },
    publishedDate: "2024-02-25",
    lastUpdated: "2024-03-18",
    readTime: "18 minutes",
    difficulty: "Intermediate",
    faeInsights: {
      author: "LiTong FAE Team",
      content: "Automotive applications demand the highest reliability and widest temperature range. Aowei's IATF 16949 certification and -40°C to +65°C operating range make them ideal for automotive use. Always consider vibration resistance and electromagnetic compatibility in automotive designs.",
      keyTakeaways: [
        "Temperature range is critical for automotive applications",
        "Vibration resistance must be verified",
        "EMC compliance is essential"
      ],
      decisionFramework: {
        steps: [
          "Define power and energy requirements",
          "Determine operating temperature range",
          "Assess vibration and shock requirements",
          "Verify EMC compliance needs",
          "Select appropriate product series"
        ],
        decisionPoints: [
          "Power density vs energy density needs",
          "Operating temperature extremes",
          "Cycle life requirements"
        ]
      }
    },
    faqs: [
      {
        question: "What makes supercapacitors suitable for automotive applications?",
        answer: "Supercapacitors excel in automotive applications due to their high power density for rapid charge/discharge, wide operating temperature range, long cycle life, and high reliability required by automotive standards.",
        decisionGuide: "Consider supercapacitors for high-power, frequent cycling automotive applications.",
        keywords: ["automotive", "high power", "temperature range"]
      },
      {
        question: "How do supercapacitors improve start-stop system performance?",
        answer: "Supercapacitors provide the high burst power needed for engine restart without stressing the battery. They also capture regenerative braking energy more efficiently than batteries alone.",
        decisionGuide: "Size supercapacitors based on restart power requirements and braking energy capture.",
        keywords: ["start-stop", "engine restart", "regenerative braking"]
      },
      {
        question: "What temperature range do automotive supercapacitors need?",
        answer: "Automotive applications typically require -40°C to +65°C operating range. Aowei supercapacitors are qualified for this range with appropriate derating at temperature extremes.",
        decisionGuide: "Verify temperature requirements for your specific application and location.",
        keywords: ["temperature range", "automotive grade", "operating conditions"]
      },
      {
        question: "Are Aowei supercapacitors qualified for automotive use?",
        answer: "Yes, Aowei supercapacitors carry IATF 16949 certification for automotive quality management and are tested to automotive reliability standards including AEC-Q200 where applicable.",
        decisionGuide: "Request automotive qualification documentation for your specific application.",
        keywords: ["IATF 16949", "automotive qualification", "AEC-Q200"]
      },
      {
        question: "How do supercapacitors handle automotive vibration requirements?",
        answer: "Aowei supercapacitors are designed and tested to meet automotive vibration standards. Cylindrical cells with welded terminals offer the best vibration resistance for severe environments.",
        decisionGuide: "Select cylindrical cells for high-vibration applications.",
        keywords: ["vibration resistance", "automotive testing", "mechanical reliability"]
      }
    ],
    customerCases: [
      {
        customer: "European Automotive OEM",
        industry: "Automotive",
        challenge: "Needed reliable energy storage for start-stop system in commercial vehicles",
        solution: "Aowei module system with active balancing and automotive-grade components",
        feedback: "The system has operated reliably across extreme temperatures from -30°C to +50°C."
      }
    ],
    slug: "automotive-applications",
    publishDate: "2024-02-25",
    summary: "Explore how supercapacitors are transforming automotive systems from start-stop to regenerative braking and emergency power.",
    relatedArticles: [
      {
        id: "supercapacitor-basics",
        title: "Supercapacitor Basics and Selection Guide",
        summary: "Introduction to supercapacitor technology"
      },
      {
        id: "module-system-design",
        title: "Supercapacitor Module System Design Guide",
        summary: "Module design fundamentals"
      },
      {
        id: "lifetime-analysis",
        title: "Supercapacitor Lifetime and Reliability Analysis",
        summary: "Understanding lifetime factors"
      }
    ]
  },
  {
    id: "lifetime-analysis",
    title: "Supercapacitor Lifetime and Reliability Analysis",
    category: "Technical Analysis",
    shortDescription: "Deep dive into supercapacitor lifetime factors, prediction methods, and strategies for maximizing operational life.",
    content: "## Understanding Supercapacitor Aging\n\nSupercapacitor lifetime is determined by both calendar life and cycle life. Understanding the factors that affect aging helps designers maximize operational life.\n\n## Calendar Life Factors\n\n### Operating Voltage\nHigher operating voltages accelerate aging. Operating at 80% of rated voltage can extend calendar life by 2-3x compared to full rated voltage operation.\n\n### Operating Temperature\nTemperature has an exponential effect on aging following the Arrhenius equation. Every 10°C reduction in operating temperature approximately doubles the calendar life.\n\n## Cycle Life Considerations\n\nSupercapacitors can achieve 500,000 to 1,000,000 cycles under ideal conditions. Deep discharges and high currents reduce cycle life.",
    tags: ["lifetime", "reliability", "aging", "prediction"],
    relatedProducts: ["AW-2R7-J107UY", "AW-2R7-J227UY", "AW-LIC-3R8-70"],
    author: {
      name: "Dr. Robert Zhang",
      title: "Reliability Engineer",
      email: "r.zhang@BeiLuo.com",
      image: "/assets/team/robert-zhang.jpg"
    },
    publishedDate: "2024-03-05",
    lastUpdated: "2024-03-22",
    readTime: "25 minutes",
    difficulty: "Advanced",
    faeInsights: {
      author: "LiTong FAE Team",
      content: "Lifetime prediction requires understanding both calendar life and cycle life factors. Voltage derating and temperature control are the most effective methods for extending supercapacitor life. Always design for end-of-life capacitance (typically 80% of initial value) rather than initial specifications.",
      keyTakeaways: [
        "Voltage derating significantly extends calendar life",
        "Temperature control is critical for longevity",
        "Design for end-of-life, not initial specifications"
      ],
      decisionFramework: {
        steps: [
          "Determine required operational lifetime",
          "Assess voltage and temperature operating conditions",
          "Calculate expected capacitance degradation",
          "Apply appropriate safety margins",
          "Implement monitoring for preventive maintenance"
        ],
        decisionPoints: [
          "Acceptable capacitance degradation",
          "Voltage derating strategy",
          "Temperature management approach"
        ]
      }
    },
    faqs: [
      {
        question: "What is the typical lifetime of a supercapacitor?",
        answer: "Under normal operating conditions (rated voltage, room temperature), supercapacitors typically last 10-15 years with minimal degradation. High-temperature or high-voltage operation reduces lifetime.",
        decisionGuide: "Use voltage derating and thermal management to maximize lifetime.",
        keywords: ["lifetime", "calendar life", "degradation"]
      },
      {
        question: "How does temperature affect supercapacitor lifetime?",
        answer: "Temperature follows the Arrhenius relationship - every 10°C increase approximately halves the lifetime. Conversely, reducing temperature extends lifetime. Operating at 25°C instead of 45°C can increase lifetime by 4x.",
        decisionGuide: "Minimize operating temperature through proper thermal design.",
        keywords: ["temperature", "Arrhenius", "thermal aging"]
      },
      {
        question: "What is voltage derating and why is it important?",
        answer: "Voltage derating means operating at less than the rated voltage. Operating at 80% of rated voltage can extend lifetime by 2-3x. This is one of the most effective methods for maximizing calendar life.",
        decisionGuide: "Apply 20% voltage derating where system requirements allow.",
        keywords: ["voltage derating", "lifetime extension", "reliability"]
      },
      {
        question: "How many cycles can a supercapacitor withstand?",
        answer: "Supercapacitors can typically achieve 500,000 to 1,000,000 cycles under ideal conditions. Deep discharges and high currents reduce cycle life. Shallow cycles (10-20% depth of discharge) enable maximum cycle life.",
        decisionGuide: "Minimize depth of discharge for maximum cycle life.",
        keywords: ["cycle life", "depth of discharge", "cycling"]
      },
      {
        question: "How do I predict supercapacitor end-of-life?",
        answer: "End-of-life is typically defined as 80% of initial capacitance or 200% of initial ESR. Use Arrhenius modeling for calendar life prediction and cycle count tracking for cycle life prediction.",
        decisionGuide: "Implement capacitance monitoring for predictive maintenance.",
        keywords: ["end-of-life", "prediction", "monitoring"]
      }
    ],
    customerCases: [
      {
        customer: "Wind Turbine Manufacturer",
        industry: "Renewable Energy",
        challenge: "Needed 15-year lifetime for pitch control backup power system",
        solution: "Aowei supercapacitors with voltage derating and thermal management",
        feedback: "After 8 years of operation, the system shows only 12% capacitance degradation, well within predictions."
      }
    ],
    slug: "lifetime-analysis",
    publishDate: "2024-03-05",
    summary: "Deep dive into supercapacitor lifetime factors, prediction methods, and strategies for maximizing operational life.",
    relatedArticles: [
      {
        id: "supercapacitor-basics",
        title: "Supercapacitor Basics and Selection Guide",
        summary: "Introduction to supercapacitor technology"
      },
      {
        id: "module-system-design",
        title: "Supercapacitor Module System Design Guide",
        summary: "Module design fundamentals"
      },
      {
        id: "automotive-applications",
        title: "Supercapacitors in Automotive Applications",
        summary: "Automotive applications guide"
      }
    ]
  }
];

// Add new articles to the articles array
support.articles.push(...newArticles);

// Save the file
fs.writeFileSync(supportPath, JSON.stringify(support, null, 2), 'utf8');
console.log('✅ Added 3 new articles to support.json');
console.log('  - Module System Design Guide');
console.log('  - Automotive Applications');
console.log('  - Lifetime and Reliability Analysis');
console.log(`Total articles: ${support.articles.length}`);
