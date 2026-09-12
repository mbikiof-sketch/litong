const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'tdk', 'support.json');

console.log('Reading support.json...');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Add 3 more articles
const newArticles = [
  {
    id: "aluminum-capacitor-lifetime",
    title: "Aluminum Electrolytic Capacitor Lifetime Prediction",
    category: "Technical Analysis",
    shortDescription: "Understanding lifetime factors and calculation methods for aluminum electrolytic capacitors in power applications.",
    content: "## Introduction to Capacitor Lifetime\n\nAluminum electrolytic capacitors are essential components in power supplies, motor drives, and energy storage applications. Understanding their lifetime characteristics is crucial for designing reliable systems.\n\n## Primary Failure Mechanism\n\nThe primary wear-out mechanism in aluminum electrolytic capacitors is electrolyte evaporation through the seal. As electrolyte is lost over time, capacitance decreases gradually and ESR increases.\n\n## Temperature Effects\n\nTemperature has the most significant impact on capacitor lifetime. The relationship follows the Arrhenius equation where lifetime approximately doubles for every 10C decrease in temperature.\n\n## Voltage Effects\n\nOperating voltage also affects lifetime. Operating at 80% of rated voltage typically doubles the expected lifetime compared to full rated voltage operation.\n\n## Ripple Current Effects\n\nRipple current causes internal heating due to I squared R losses in the ESR. This self-heating adds to ambient temperature, reducing lifetime.\n\n## Design Recommendations\n\nApply voltage derating and thermal management to maximize capacitor lifetime. TDK provides detailed lifetime calculation tools.",
    tags: ["aluminum electrolytic", "lifetime", "reliability", "thermal management"],
    relatedProducts: ["B43501A9107M", "B43700A5687M"],
    author: {
      name: "David Park",
      title: "Senior FAE - Power Systems",
      email: "d.park@BeiLuo.com",
      image: "/assets/team/david-park.jpg"
    },
    publishedDate: "2024-02-01",
    lastUpdated: "2024-03-15",
    readTime: "20 minutes",
    difficulty: "Advanced",
    faeInsights: {
      author: "LiTong FAE Team",
      content: "In industrial power supply applications, we frequently see designs that don't account for the combined effects of temperature and voltage on capacitor lifetime. We recommend designing for worst-case conditions including maximum ambient temperature and ripple current. For 24/7 industrial applications, we typically target 100,000+ hour lifetime.",
      keyTakeaways: [
        "Temperature has the greatest impact on lifetime",
        "Voltage derating of 20% typically doubles lifetime",
        "Ripple current causes self-heating",
        "Design for worst-case conditions"
      ],
      decisionFramework: {
        steps: [
          "Determine required operational lifetime",
          "Identify worst-case operating conditions",
          "Calculate expected lifetime",
          "Apply safety margin"
        ],
        decisionPoints: [
          "Acceptable lifetime vs cost trade-off",
          "Thermal management approach",
          "Voltage derating strategy"
        ]
      }
    },
    faqs: [
      {
        question: "What is the typical end-of-life criteria for aluminum electrolytic capacitors?",
        answer: "End-of-life is typically defined as when capacitance drops below 80% of initial value OR when ESR increases above 200% of initial value. These criteria ensure the capacitor can still perform its basic function.",
        decisionGuide: "Monitor capacitance and ESR during maintenance; plan replacement before reaching end-of-life criteria.",
        keywords: ["end-of-life", "capacitance degradation", "ESR increase"]
      },
      {
        question: "How does frequency affect ripple current capability?",
        answer: "ESR of aluminum electrolytic capacitors decreases with increasing frequency, allowing higher ripple current capability at higher frequencies. At 10kHz-20kHz, ESR is typically 30-50% lower than at 100Hz.",
        decisionGuide: "Use frequency-specific ESR data for accurate ripple current calculations.",
        keywords: ["ESR frequency", "ripple current rating"]
      },
      {
        question: "Can capacitor lifetime be extended by reducing voltage?",
        answer: "Yes, voltage derating significantly extends capacitor lifetime. Operating at 80% of rated voltage typically doubles lifetime. Operating at 70% can provide 3-4x lifetime extension.",
        decisionGuide: "Apply 20-30% voltage derating for significant lifetime improvement.",
        keywords: ["voltage derating", "lifetime extension"]
      },
      {
        question: "What is the shelf life of aluminum electrolytic capacitors?",
        answer: "TDK recommends a maximum storage period of 3 years at room temperature. During storage, the electrolyte can slowly evaporate and the oxide layer may degrade slightly.",
        decisionGuide: "Use capacitors within 3 years of manufacture; perform reformation if stored longer.",
        keywords: ["shelf life", "storage conditions"]
      },
      {
        question: "How do I measure capacitor health in the field?",
        answer: "Field measurement involves measuring capacitance and ESR using an LCR meter. Compare measured values to initial specifications: capacitance should be within plus or minus 20% of nominal, ESR should not exceed datasheet maximum.",
        decisionGuide: "Measure capacitance and ESR during maintenance; track trends over time.",
        keywords: ["capacitor testing", "ESR measurement"]
      }
    ],
    customerCases: [
      {
        customer: "Industrial Drive Manufacturer",
        industry: "Industrial Automation",
        challenge: "Capacitor failures in motor drives operating in high-temperature environments",
        solution: "Redesigned with improved thermal management and applied 30% voltage derating",
        result: "Went from 3-year failures to expected 15+ year lifetime"
      }
    ],
    slug: "aluminum-capacitor-lifetime",
    publishDate: "2024-02-01",
    summary: "Understanding lifetime factors and calculation methods for aluminum electrolytic capacitors in power applications.",
    relatedArticles: [
      {
        id: "mlcc-selection-guide",
        title: "MLCC Selection Guide for Power Applications",
        summary: "Comprehensive guide for selecting multilayer ceramic capacitors"
      },
      {
        id: "film-capacitor-applications",
        title: "Film Capacitor Applications in Power Electronics",
        summary: "Application guide for film capacitors"
      },
      {
        id: "inductor-selection-guide",
        title: "Power Inductor Selection for DC-DC Converters",
        summary: "Guide for selecting power inductors"
      }
    ]
  },
  {
    id: "film-capacitor-applications",
    title: "Film Capacitor Applications in Power Electronics",
    category: "Application Guide",
    shortDescription: "Application guide for film capacitors in inverters, motor drives, and power conversion systems.",
    content: "## Introduction to Film Capacitors\n\nFilm capacitors are essential components in high-performance power electronics applications. Their unique characteristics including self-healing properties and excellent frequency response make them ideal for demanding applications.\n\n## Film Capacitor Technology\n\nFilm capacitors consist of thin plastic film dielectric with metal electrodes. Polypropylene film provides the lowest losses and best frequency characteristics.\n\n## DC Link Applications\n\nDC link capacitors serve as energy storage between rectifier and inverter stages. Key requirements include high capacitance, low ESR, and high ripple current capability.\n\n## Snubber Applications\n\nSnubber capacitors protect power semiconductors from voltage transients. Design considerations include low ESL and high dV/dt capability.\n\n## Self-Healing Properties\n\nMetallized film capacitors exhibit unique self-healing behavior where localized dielectric breakdowns are automatically cleared without catastrophic failure.\n\n## Conclusion\n\nFilm capacitors provide superior performance for high-power electronics applications with their self-healing properties and long lifetime.",
    tags: ["film capacitor", "DC link", "snubber", "power electronics"],
    relatedProducts: ["B32774D8205K", "B32652A1154J"],
    author: {
      name: "Jennifer Liu",
      title: "Senior FAE - Renewable Energy",
      email: "j.liu@BeiLuo.com",
      image: "/assets/team/jennifer-liu.jpg"
    },
    publishedDate: "2024-02-15",
    lastUpdated: "2024-03-10",
    readTime: "18 minutes",
    difficulty: "Advanced",
    faeInsights: {
      author: "LiTong FAE Team",
      content: "In renewable energy applications, we frequently see designers underestimating the importance of ESL in DC link capacitors. With modern SiC MOSFETs switching at high speeds, even small ESL can cause significant voltage overshoot.",
      keyTakeaways: [
        "ESL is critical for high-frequency applications",
        "Self-healing provides reliability advantage",
        "Voltage derating extends lifetime",
        "Minimize connection inductance"
      ],
      decisionFramework: {
        steps: [
          "Define application requirements",
          "Calculate required capacitance",
          "Select capacitor type",
          "Verify ESL and ESR",
          "Design thermal management"
        ],
        decisionPoints: [
          "Polypropylene vs polyester",
          "Single vs multiple capacitors"
        ]
      }
    },
    faqs: [
      {
        question: "When should I choose film capacitors over aluminum electrolytic?",
        answer: "Choose film capacitors when high ripple current, long lifetime, or high-frequency switching is needed. Choose aluminum electrolytic for highest capacitance density or cost-sensitive applications.",
        decisionGuide: "Select film for high-reliability applications; electrolytic for cost-sensitive needs.",
        keywords: ["film vs electrolytic", "capacitor selection"]
      },
      {
        question: "What is the self-healing process?",
        answer: "When dielectric breakdown occurs, a small arc vaporizes the thin metallization around the fault site, isolating the defect. The capacitor continues operating with slightly reduced capacitance.",
        decisionGuide: "Use metallized film capacitors for safety-critical applications.",
        keywords: ["self-healing", "metallized film"]
      },
      {
        question: "How do I calculate required DC link capacitance?",
        answer: "DC link capacitance is calculated based on allowable voltage ripple. The formula is C equals I ripple divided by (8 times f switching times V ripple).",
        decisionGuide: "Calculate based on ripple requirements; verify thermal capability.",
        keywords: ["DC link calculation", "capacitance sizing"]
      },
      {
        question: "What is dV/dt rating?",
        answer: "dV/dt specifies the maximum rate of voltage change a capacitor can withstand. Modern SiC devices create very high dV/dt which can stress capacitors.",
        decisionGuide: "Verify dV/dt rating exceeds application requirements.",
        keywords: ["dV/dt rating", "fast switching"]
      },
      {
        question: "Can film capacitors be connected in parallel?",
        answer: "Yes, film capacitors can be paralleled to increase capacitance and current handling. Current sharing is naturally balanced with symmetrical layout.",
        decisionGuide: "Parallel capacitors for increased capacitance; use symmetrical layout.",
        keywords: ["parallel connection", "current sharing"]
      }
    ],
    customerCases: [
      {
        customer: "Solar Inverter Manufacturer",
        industry: "Renewable Energy",
        challenge: "Needed reliable DC link capacitors for 1500V inverters with 25-year lifetime",
        solution: "TDK B3277x series film capacitors with voltage derating",
        result: "Eliminated DC link reliability concerns for remote installations"
      }
    ],
    slug: "film-capacitor-applications",
    publishDate: "2024-02-15",
    summary: "Application guide for film capacitors in inverters and power conversion systems.",
    relatedArticles: [
      {
        id: "mlcc-selection-guide",
        title: "MLCC Selection Guide",
        summary: "Guide for MLCC selection"
      },
      {
        id: "aluminum-capacitor-lifetime",
        title: "Aluminum Capacitor Lifetime",
        summary: "Lifetime prediction guide"
      },
      {
        id: "inductor-selection-guide",
        title: "Power Inductor Selection",
        summary: "Inductor selection guide"
      }
    ]
  },
  {
    id: "inductor-selection-guide",
    title: "Power Inductor Selection for DC-DC Converters",
    category: "Design Guide",
    shortDescription: "Comprehensive guide for selecting power inductors including saturation current and thermal considerations.",
    content: "## Introduction to Power Inductor Selection\n\nPower inductors are critical components in DC-DC converters. Proper selection requires understanding inductance requirements, current ratings, and core materials.\n\n## Inductance Calculation\n\nThe required inductance is calculated based on allowable ripple current. The formula considers input voltage, output voltage, switching frequency, and desired ripple.\n\n## Current Ratings\n\nRated current is based on thermal limitations. Saturation current is the current at which inductance drops significantly. Both must be considered.\n\n## Core Material Selection\n\nFerrite cores offer low losses at high frequencies. Metal composite cores provide soft saturation and higher saturation flux density.\n\n## Shielded vs Unshielded\n\nShielded inductors minimize EMI radiation. Unshielded inductors are smaller and lower cost but produce more EMI.\n\n## Conclusion\n\nProper power inductor selection requires balancing multiple parameters. TDK's portfolio offers solutions for every application.",
    tags: ["power inductor", "DC-DC converter", "inductor selection"],
    relatedProducts: ["SLF7055T-100M2R0-PF", "SLF12575T-100M3R2-PF"],
    author: {
      name: "Lisa Wang",
      title: "FAE Manager - Power Applications",
      email: "l.wang@BeiLuo.com",
      image: "/assets/team/lisa-wang.jpg"
    },
    publishedDate: "2024-03-01",
    lastUpdated: "2024-03-25",
    readTime: "18 minutes",
    difficulty: "Intermediate",
    faeInsights: {
      author: "LiTong FAE Team",
      content: "The most common mistake is focusing only on inductance while ignoring current ratings. Peak current must stay below saturation current. We recommend at least 30% margin on saturation current.",
      keyTakeaways: [
        "Calculate both average and peak currents",
        "Select saturation current with 30% margin",
        "Account for temperature effects",
        "Verify SRF is above switching frequency"
      ],
      decisionFramework: {
        steps: [
          "Calculate required inductance",
          "Determine peak current",
          "Select core material",
          "Verify ratings",
          "Check SRF"
        ],
        decisionPoints: [
          "Ferrite vs metal composite",
          "Shielded vs unshielded"
        ]
      }
    },
    faqs: [
      {
        question: "What is inductor saturation?",
        answer: "Saturation occurs when the core material reaches maximum flux density and inductance drops dramatically. This causes increased ripple current and potential converter instability.",
        decisionGuide: "Design for peak current 30% below saturation rating.",
        keywords: ["inductor saturation", "magnetic saturation"]
      },
      {
        question: "How do ferrite and metal composite compare?",
        answer: "Ferrite offers low losses at high frequencies with sharp saturation. Metal composite provides soft saturation and higher flux density but higher losses.",
        decisionGuide: "Select ferrite for high frequency; metal composite for high current.",
        keywords: ["ferrite core", "metal composite"]
      },
      {
        question: "What is the difference between rated and saturation current?",
        answer: "Rated current is thermal limitation. Saturation current is where inductance drops. In converters, saturation current is usually the limiting factor.",
        decisionGuide: "Design for both limits; saturation is typically limiting.",
        keywords: ["rated current", "saturation current"]
      },
      {
        question: "How does temperature affect inductors?",
        answer: "DCR increases with temperature. Saturation current decreases at high temperatures. Core losses may change with temperature.",
        decisionGuide: "Account for temperature effects on DCR and saturation.",
        keywords: ["temperature effects", "thermal derating"]
      },
      {
        question: "Can inductors be paralleled?",
        answer: "Yes, but current sharing depends on inductance matching. Practical designs should use only 1.6-1.8x single inductor rating.",
        decisionGuide: "Use single higher-current inductor when possible.",
        keywords: ["parallel inductors", "current sharing"]
      }
    ],
    customerCases: [
      {
        customer: "Telecom Equipment Manufacturer",
        industry: "Communications",
        challenge: "Inductor saturation causing instability in high-temperature equipment",
        solution: "Redesigned with metal composite inductors having better temperature characteristics",
        result: "Eliminated field issues with soft saturation characteristic"
      }
    ],
    slug: "inductor-selection-guide",
    publishDate: "2024-03-01",
    summary: "Comprehensive guide for selecting power inductors including saturation current and thermal considerations.",
    relatedArticles: [
      {
        id: "mlcc-selection-guide",
        title: "MLCC Selection Guide",
        summary: "MLCC guide"
      },
      {
        id: "aluminum-capacitor-lifetime",
        title: "Aluminum Capacitor Lifetime",
        summary: "Lifetime guide"
      },
      {
        id: "film-capacitor-applications",
        title: "Film Capacitor Applications",
        summary: "Film capacitor guide"
      }
    ]
  }
];

// Add new articles
support.articles.push(...newArticles);

// Save
fs.writeFileSync(supportPath, JSON.stringify(support, null, 2), 'utf8');
console.log('Added 3 articles to support.json');
console.log('Total articles:', support.articles.length);
