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
    content: "## Introduction to Capacitor Lifetime\n\nAluminum electrolytic capacitors are essential components in power supplies, motor drives, and energy storage applications. Understanding their lifetime characteristics is crucial for designing reliable systems.\n\n## Primary Failure Mechanism\n\nThe primary wear-out mechanism in aluminum electrolytic capacitors is electrolyte evaporation through the seal. As electrolyte is lost over time, capacitance decreases gradually and ESR increases.\n\n## Temperature Effects\n\nTemperature has the most significant impact on capacitor lifetime. The relationship follows the Arrhenius equation where lifetime approximately doubles for every 10C decrease in temperature.\n\n## Voltage Effects\n\nOperating voltage also affects lifetime. Operating at 80% of rated voltage typically doubles the expected lifetime compared to full rated voltage operation.\n\n## Ripple Current Effects\n\nRipple current causes internal heating due to I squared R losses in the ESR. This self-heating adds to ambient temperature, reducing lifetime.\n\n## Design Recommendations\n\nApply voltage derating and ensure adequate thermal management to maximize capacitor lifetime. Use multiple capacitors in parallel to distribute ripple current for high-current applications.",
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
      content: "In industrial power supply applications, we frequently see designs that do not account for the combined effects of temperature and voltage on capacitor lifetime. We recommend designing for worst-case conditions including maximum ambient temperature and ripple current.",
      keyTakeaways: [
        "Temperature has the greatest impact on lifetime",
        "Voltage derating of 20% typically doubles lifetime",
        "Ripple current causes self-heating that must be added to ambient temperature",
        "Design for worst-case conditions"
      ],
      decisionFramework: {
        steps: [
          "Determine required operational lifetime",
          "Identify worst-case operating conditions",
          "Calculate expected lifetime using Arrhenius equation",
          "Apply safety margin and adjust design if needed"
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
        answer: "ESR of aluminum electrolytic capacitors decreases with increasing frequency, allowing higher ripple current capability at higher frequencies. At switching frequencies of 10-20kHz, ripple current capability is typically 40-70% higher than at 100Hz.",
        decisionGuide: "Use frequency-specific ESR data for accurate ripple current calculations in switching applications.",
        keywords: ["ESR frequency", "ripple current rating", "switching frequency"]
      },
      {
        question: "Can capacitor lifetime be extended by reducing voltage?",
        answer: "Yes, voltage derating significantly extends capacitor lifetime. Operating at 80% of rated voltage typically doubles lifetime. Operating at 70% can provide 3-4x lifetime extension.",
        decisionGuide: "Apply 20-30% voltage derating for significant lifetime improvement.",
        keywords: ["voltage derating", "lifetime extension", "reliability improvement"]
      },
      {
        question: "What is the shelf life of aluminum electrolytic capacitors?",
        answer: "TDK recommends a maximum storage period of 3 years at room temperature. Capacitors stored beyond this period may require reformation before use.",
        decisionGuide: "Use capacitors within 3 years of manufacture; check date codes on receipt.",
        keywords: ["shelf life", "storage conditions", "capacitor aging"]
      },
      {
        question: "How do I measure capacitor health in the field?",
        answer: "Field measurement involves measuring capacitance and ESR using an LCR meter. Compare measured values to initial specifications and track trends over time.",
        decisionGuide: "Measure capacitance and ESR during maintenance; track trends over time.",
        keywords: ["capacitor testing", "ESR measurement", "predictive maintenance"]
      }
    ],
    customerCases: [
      {
        customer: "Industrial Drive Manufacturer",
        industry: "Industrial Automation",
        challenge: "Capacitor failures in motor drives operating in high-temperature environments",
        solution: "Redesigned with improved thermal management and applied 30% voltage derating",
        result: "We went from 3-year failures to expected 15+ year lifetime."
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
    content: "## Introduction to Film Capacitors\n\nFilm capacitors are essential components in high-performance power electronics applications. Their unique characteristics including self-healing properties, excellent frequency response, and long operational life make them ideal for demanding applications.\n\n## Film Capacitor Technology\n\n### Construction Types\nFoil-film construction offers higher current handling while metallized film provides self-healing properties and cost-effectiveness.\n\n### Dielectric Materials\nPolypropylene provides lowest losses and best frequency characteristics. Polyester offers higher capacitance density for general-purpose applications.\n\n## DC Link Applications\n\nDC link capacitors serve as energy storage between rectifier and inverter stages. Key requirements include high capacitance, low ESR, and high ripple current capability.\n\n## Snubber Applications\n\nSnubber capacitors protect power semiconductors from voltage transients. Design considerations include low ESL and high dV/dt capability.\n\n## Self-Healing Properties\n\nMetallized film capacitors exhibit unique self-healing behavior where localized dielectric breakdowns are automatically cleared without catastrophic failure.\n\n## Conclusion\n\nFilm capacitors provide superior performance and reliability for high-power electronics applications. Their self-healing properties and long lifetime make them the preferred choice for demanding applications.",
    tags: ["film capacitor", "DC link", "snubber", "inverter", "power electronics"],
    relatedProducts: ["B32774D8205K", "B32652A1154J"],
    author: {
      name: "Jennifer Liu",
      title: "Senior FAE - Renewable Energy",
      email: "j