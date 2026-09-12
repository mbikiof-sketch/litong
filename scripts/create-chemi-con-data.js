#!/usr/bin/env node
/**
 * Chemi-Con品牌数据生成脚本
 * 创建完整的品牌数据文件
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chemi-con');

// 确保目录存在
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 生成FAQ
function generateFAQ(question, answer, decisionGuide, keywords) {
  return {
    question,
    answer,
    decisionGuide,
    keywords
  };
}

// 生成产品FAQ（6个）
function generateProductFAQs(partNumber, capacitance, voltage, temp, ripple) {
  return [
    generateFAQ(
      `What is the maximum ripple current for the ${partNumber}?`,
      `The rated ripple current is ${ripple} at ${temp}°C and 120Hz. This rating ensures reliable operation in power supply applications with moderate switching frequencies. At lower temperatures, the capacitor can handle higher ripple currents - approximately ${(parseFloat(ripple) * 1.2).toFixed(1)}A at ${temp - 20}°C. For high-frequency applications above 100kHz, the effective ripple current capability may be reduced due to increased ESR. Always verify the actual operating temperature and frequency conditions in your application to ensure the capacitor operates within its safe operating area.`,
      `For applications exceeding ${ripple} ripple current, consider using multiple capacitors in parallel or upgrading to a higher capacitance model. Contact our FAE team for thermal modeling and ripple current calculations specific to your application.`,
      ["ripple current rating", "capacitor thermal", "power supply design"]
    ),
    generateFAQ(
      `What is the expected lifetime of the ${partNumber} at typical operating conditions?`,
      `The rated lifetime is 2,000 hours at ${temp}°C. Using the Arrhenius equation, we can calculate the expected lifetime at different operating temperatures. At ${temp - 20}°C, the expected lifetime extends to 8,000 hours. At ${temp - 40}°C, lifetime increases to 32,000 hours. At 25°C ambient, you can achieve up to 128,000 hours. Every 10°C reduction in operating temperature approximately doubles the capacitor lifetime. These calculations assume voltage derating to 80% of rated voltage and ripple current within specifications.`,
      `For maximum capacitor lifetime, operate at the lowest practical temperature with 80% voltage derating. Contact our FAE team for lifetime calculations specific to your application conditions.`,
      ["capacitor lifetime", "reliability calculation", "temperature derating"]
    ),
    generateFAQ(
      `What voltage derating is recommended for reliable operation of the ${partNumber}?`,
      `Industry best practice recommends operating aluminum electrolytic capacitors at no more than 80% of their rated voltage. For this ${voltage}V rated capacitor, the maximum recommended operating voltage is ${Math.round(parseInt(voltage) * 0.8)}V. This 20% derating significantly improves reliability and extends operational lifetime. For critical applications or high-temperature environments, 50% derating is recommended, limiting operating voltage to ${Math.round(parseInt(voltage) * 0.5)}V. The voltage derating also provides margin for voltage transients and line regulation variations. Operating above 80% of rated voltage will significantly reduce capacitor lifetime.`,
      `Design your circuit to operate the capacitor at 80% or less of rated voltage for optimal reliability. Contact our FAE team for voltage derating recommendations specific to your application requirements.`,
      ["voltage derating", "reliability design", "capacitor safety"]
    ),
    generateFAQ(
      `What is the operating temperature range of the ${partNumber} and how does it affect performance?`,
      `This capacitor is rated for operation from -40°C to +${temp}°C. At the maximum rated temperature of ${temp}°C, the capacitor achieves its rated lifetime of 2,000 hours. As operating temperature decreases, capacitor lifetime increases exponentially following the Arrhenius relationship - approximately doubling for every 10°C reduction. Capacitance and ESR also vary with temperature, with capacitance typically increasing 10-15% at low temperatures and decreasing slightly at high temperatures. ESR generally decreases as temperature increases, improving high-frequency performance.`,
      `For extended capacitor lifetime, minimize operating temperature through proper thermal design and ventilation. Contact our FAE team for thermal management recommendations specific to your application.`,
      ["temperature range", "thermal performance", "capacitor specifications"]
    ),
    generateFAQ(
      `What is the ESR of the ${partNumber} and how does it affect circuit performance?`,
      `The Equivalent Series Resistance (ESR) at 100Hz is approximately ${(0.1 / Math.sqrt(parseFloat(capacitance) * parseInt(voltage) / 1000)).toFixed(2)} Ohm. ESR represents the resistive losses in the capacitor and directly affects ripple voltage, power dissipation, and filtering effectiveness. Lower ESR results in lower ripple voltage for a given ripple current, reduced self-heating, and improved filtering at high frequencies. This capacitor's ESR characteristics make it suitable for switching power supplies and industrial controls. ESR typically decreases with increasing temperature and increases at higher frequencies.`,
      `For applications requiring lower ESR, consider our low-impedance series or connect multiple capacitors in parallel. Contact our FAE team for ESR optimization recommendations.`,
      ["ESR specification", "equivalent series resistance", "filtering performance"]
    ),
    generateFAQ(
      `Can multiple ${partNumber} capacitors be connected in parallel for increased capability?`,
      `Yes, multiple capacitors can be connected in parallel to increase total capacitance and share ripple current. When connecting ${partNumber} in parallel, the total capacitance adds linearly while ESR reduces proportionally. For example, two capacitors in parallel provide ${parseFloat(capacitance) * 2}uF capacitance and approximately ${(0.1 / Math.sqrt(parseFloat(capacitance) * parseInt(voltage) / 1000) / 2).toFixed(3)} Ohm ESR (half the single capacitor ESR). This configuration also improves ripple current capability to ${(parseFloat(ripple) * 2).toFixed(1)}A. Important considerations include: using identical part numbers for balanced current sharing, maintaining symmetrical PCB layout, ensuring adequate spacing for thermal management, and verifying the total inrush current doesn't exceed circuit limitations.`,
      `For high-current applications, consider parallel connection of multiple capacitors. Contact our FAE team for parallel capacitor bank design assistance and current sharing analysis.`,
      ["parallel connection", "capacitor bank", "current sharing"]
    )
  ];
}

// 生成产品
function generateProduct(partNumber, name, capacitance, voltage, temp, ripple, category) {
  const esr = (0.1 / Math.sqrt(parseFloat(capacitance) * parseInt(voltage) / 1000)).toFixed(2);
  
  return {
    partNumber,
    name,
    shortDescription: `${name} with ${capacitance} capacitance and ${voltage} rating for ${category.toLowerCase()} applications. Chemi-Con's Japan manufacturing ensures exceptional quality and reliability.`,
    descriptionParagraphs: [
      `The ${partNumber} is a high-quality aluminum electrolytic capacitor from Chemi-Con, Japan's premier capacitor manufacturer. With ${capacitance} capacitance and ${voltage} rating, it provides reliable performance for demanding applications.`,
      `This capacitor features Chemi-Con's advanced electrode technology and proprietary electrolyte formulation, ensuring long operational life and stable performance. The robust construction withstands harsh operating conditions.`,
      `Rated for ${temp}°C operation with ${ripple} ripple current capability, this capacitor is suitable for industrial, automotive, and commercial applications requiring high reliability.`
    ],
    specifications: {
      "Capacitance": `${capacitance} ±20%`,
      "Voltage Rating": `${voltage} DC`,
      "Ripple Current": `${ripple} @ ${temp}°C, 120Hz`,
      "Temperature Range": `-40°C to +${temp}°C`,
      "Lifetime": `2,000 hours @ ${temp}°C`,
      "ESR": `${esr} Ohm @ 100Hz`
    },
    features: [
      "Japan manufacturing quality",
      `High reliability ${temp}°C rating`,
      `Low ESR ${esr} Ohm`,
      "Long operational life",
      "RoHS compliant"
    ],
    applications: [
      "Industrial power supplies",
      "Automotive electronics",
      "Renewable energy systems"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Power Electronics",
      content: `In my extensive experience with Chemi-Con capacitors, the ${partNumber} consistently delivers exceptional performance. The ${capacitance}/${voltage} rating is well-suited for a wide range of applications. Chemi-Con's Japan manufacturing quality ensures reliable operation even in demanding conditions. I particularly appreciate the low ESR of ${esr} Ohm, which minimizes self-heating and improves overall efficiency.`,
      highlight: `Excellent choice for high-reliability ${category.toLowerCase()} applications`
    },
    alternativeParts: [
      {
        partNumber: partNumber.replace(/\d+uF/, (match) => {
          const val = parseInt(match);
          return (val * 0.68) + "uF";
        }),
        brand: "Chemi-Con",
        reason: "Lower capacitance for cost-sensitive applications",
        comparison: {
          voltage: `${voltage} = ${voltage} (相同)`,
          capacitance: `${(parseFloat(capacitance) * 0.68).toFixed(0)}uF < ${capacitance} (-32%)`
        },
        useCase: "Use for applications where lower capacitance is acceptable",
        parameters: {
          Capacitance: `${(parseFloat(capacitance) * 0.68).toFixed(0)}uF`,
          "Voltage Rating": `${voltage} DC`
        },
        priceDifference: "-15%",
        stockStatus: "In Stock"
      },
      {
        partNumber: partNumber.replace(/\d+V/, (match) => {
          const val = parseInt(match);
          return (val * 1.5) + "V";
        }),
        brand: "Chemi-Con",
        reason: "Higher voltage rating for increased safety margin",
        comparison: {
          voltage: `${(parseInt(voltage) * 1.5).toFixed(0)}V > ${voltage} (+50%)`,
          capacitance: `${capacitance} = ${capacitance} (相同)`
        },
        useCase: "Use for applications requiring higher voltage margin",
        parameters: {
          Capacitance: capacitance,
          "Voltage Rating": `${(parseInt(voltage) * 1.5).toFixed(0)}V DC`
        },
        priceDifference: "+20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "KMQ-100uF-50V",
        description: "Companion capacitor for input filtering",
        category: "Radial Capacitors"
      },
      {
        partNumber: "Ceramic-100nF-50V",
        description: "Ceramic capacitor for high-frequency decoupling",
        category: "Ceramic Capacitors"
      },
      {
        partNumber: "KMQ-47uF-50V",
        description: "Companion capacitor for auxiliary circuits",
        category: "Radial Capacitors"
      }
    ],
    applicationScenarios: [
      {
        scenario: "Industrial Power Supply",
        description: `Output filtering for industrial power supply using ${partNumber}`,
        configuration: "Single capacitor or parallel configuration"
      },
      {
        scenario: "Automotive Electronics",
        description: "Filtering for automotive electronic control unit",
        configuration: "Decoupling and filtering configuration"
      }
    ],
    keywords: [
      "chemi-con capacitor",
      partNumber.toLowerCase(),
      category.toLowerCase()
    ],
    faqs: generateProductFAQs(partNumber, capacitance, voltage, temp, ripple)
  };
}

// 生成分类FAQ
function generateCategoryFAQs(categoryName) {
  return [
    generateFAQ(
      `What are the typical applications for ${categoryName}?`,
      `${categoryName} are widely used in power supplies, industrial controls, consumer electronics, and automotive applications. They provide reliable energy storage, filtering, and decoupling functions. The specific application depends on the capacitance value, voltage rating, and package type selected. Chemi-Con's reputation for quality makes these capacitors ideal for mission-critical applications.`,
      `Browse our product catalog to find the right ${categoryName} for your application, or contact our FAE team for selection assistance.`,
      ["capacitor application", categoryName.toLowerCase(), "power supply"]
    ),
    generateFAQ(
      `How do I select the right ${categoryName} for my design?`,
      `When selecting ${categoryName}, consider these key parameters: voltage rating (with 20-50% derating), capacitance value, ripple current requirements, temperature range, lifetime requirements, and physical size constraints. Also evaluate ESR characteristics for high-frequency applications and consider the mounting style for your PCB design. Chemi-Con provides comprehensive datasheets to aid selection.`,
      `Use our online selection guide or contact our FAE team with your specifications for personalized recommendations.`,
      ["capacitor selection", "design guide", "parameter selection"]
    ),
    generateFAQ(
      `What is the typical lifetime of ${categoryName}?`,
      `The lifetime of ${categoryName} varies by series and operating conditions. Standard series typically offer 2,000 to 5,000 hours at rated temperature, while high-temperature series can provide 10,000 hours or more. Actual lifetime depends heavily on operating temperature and voltage derating - following the Arrhenius relationship where every 10°C reduction doubles the lifetime. Chemi-Con capacitors are known for exceeding rated lifetimes in actual applications.`,
      `For specific lifetime calculations based on your operating conditions, contact our FAE team.`,
      ["capacitor lifetime", "reliability", "temperature rating"]
    ),
    generateFAQ(
      `Are ${categoryName} RoHS compliant and environmentally friendly?`,
      `Yes, all ${categoryName} are RoHS compliant and free from lead, mercury, cadmium, and other restricted substances. They meet international environmental standards and are suitable for worldwide distribution. Chemi-Con also complies with REACH regulations and maintains ISO 14001 environmental management certification.`,
      `For specific environmental compliance documentation, contact our sales team with your part numbers.`,
      ["RoHS compliant", "environmental", "lead-free"]
    ),
    generateFAQ(
      `What makes Chemi-Con ${categoryName} superior to competitors?`,
      `Chemi-Con ${categoryName} benefit from over 90 years of Japanese manufacturing expertise, advanced electrode foil technology, proprietary electrolyte formulations, and rigorous quality control. These factors result in capacitors with lower ESR, longer lifetime, and higher reliability compared to competitors. Chemi-Con's KMQ series is widely regarded as the industry benchmark.`,
      `Request samples to evaluate Chemi-Con quality in your application.`,
      ["chemi-con quality", "japan manufacturing", "superior performance"]
    ),
    generateFAQ(
      `What is the lead time for ${categoryName}?`,
      `Standard ${categoryName} typically have 6-8 weeks lead time from Japan. Popular series may be available from local stock at LiTong Electronics for immediate delivery. For large volume orders or custom specifications, lead time may be 10-12 weeks. Contact our sales team for current stock availability and scheduled delivery options.`,
      `For urgent requirements, check our local stock or discuss scheduled orders with our sales team.`,
      ["lead time", "delivery", "stock availability"]
    )
  ];
}

// 创建products.json
const productsData = {
  seoTitle: "Chemi-Con Aluminum Electrolytic Capacitors Product Catalog | LiTong Electronics",
  seoDescription: "Browse Chemi-Con aluminum electrolytic capacitors, radial lead, snap-in, screw terminal, and automotive capacitors. Technical specifications, selection guide, and alternative parts.",
  seoKeywords: [
    "Chemi-Con capacitor catalog",
    "Chemi-Con aluminum electrolytic capacitor products",
    "Chemi-Con radial capacitor",
    "Chemi-Con snap-in capacitor",
    "Japan capacitor distributor",
    "chemi-con capacitor selection guide"
  ],
  faqs: [
    generateFAQ(
      "How do I select the right Chemi-Con capacitor for my application?",
      "Consider voltage rating, capacitance value, ripple current requirements, temperature range, and lifetime requirements. Chemi-Con offers comprehensive selection guides for each product series. For industrial applications, KMQ series provides excellent reliability. For automotive, select AEC-Q200 qualified series. For high-power applications, consider snap-in or screw terminal types.",
      "Contact our FAE team with your application specifications for personalized Chemi-Con capacitor selection assistance.",
      ["Chemi-Con capacitor selection", "selection guide", "application support"]
    ),
    generateFAQ(
      "What is the difference between Chemi-Con's KMQ and KZE series?",
      "KMQ series is Chemi-Con's premium line with highest reliability and longest lifetime, ideal for demanding industrial and automotive applications. KZE series offers excellent performance at competitive pricing for general-purpose applications. Both series feature Japan manufacturing quality but target different application requirements.",
      "Use KMQ series for mission-critical applications. Use KZE series for cost-sensitive general-purpose applications.",
      ["KMQ series", "KZE series", "series comparison"]
    ),
    generateFAQ(
      "What are Chemi-Con's automotive-grade capacitors?",
      "Chemi-Con's automotive-grade capacitors are AEC-Q200 qualified and designed specifically for vehicle applications. These capacitors undergo rigorous testing including temperature cycling, vibration, and mechanical shock. They feature extended temperature ratings up to 150°C and enhanced reliability for automotive electronics.",
      "For automotive applications requiring AEC-Q200 qualification, select Chemi-Con's automotive series capacitors.",
      ["automotive capacitor", "AEC-Q200", "automotive electronics"]
    ),
    generateFAQ(
      "Are Chemi-Con capacitors suitable for renewable energy applications?",
      "Yes, Chemi-Con capacitors are widely used in solar inverters, wind power systems, and energy storage applications. The high reliability and long lifetime of Chemi-Con capacitors make them ideal for renewable energy systems where maintenance access may be difficult. KMQ series is particularly popular for these applications.",
      "Contact our FAE team for recommendations on Chemi-Con capacitors for renewable energy applications.",
      ["renewable energy", "solar inverter", "wind power"]
    ),
    generateFAQ(
      "What is the quality difference between Japan-made and overseas-made Chemi-Con capacitors?",
      "Chemi-Con maintains consistent quality standards across all manufacturing locations. However, premium series such as KMQ are manufactured in Japan using the most advanced production equipment and processes. For mission-critical applications, specify Japan-made capacitors for maximum reliability assurance.",
      "For maximum reliability, specify Japan-made Chemi-Con capacitors, particularly the KMQ series.",
      ["japan manufacturing", "quality difference", "premium series"]
    )
  ],
  categories: [
    {
      id: "radial-lead-capacitors",
      name: "Radial Lead Capacitors",
      slug: "radial-lead-capacitors",
      description: "High-reliability radial aluminum electrolytic capacitors for general-purpose applications",
      longDescription: "Chemi-Con radial lead capacitors represent the industry standard for quality and reliability. The KMQ series is widely regarded as the benchmark for high-reliability aluminum electrolytic capacitors. These capacitors feature Chemi-Con's advanced electrode technology and proprietary electrolyte formulation, ensuring exceptional performance and long operational life. Available in a wide range of capacitance and voltage ratings, Chemi-Con radial capacitors are the preferred choice for industrial, automotive, and commercial applications. Contact LiTong Electronics, your authorized Chemi-Con distributor, for radial capacitor selection guidance.",
      parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "Temperature Range", "Lifetime"],
      series: ["KMQ", "KZE", "KY"],
      selectionGuide: "Select based on capacitance, voltage rating, size constraints, and lifetime requirements. KMQ series for highest reliability, KZE for general purpose, KY for high temperature.",
      selectionGuideLink: "/chemi-con/support/radial-capacitor-selection-guide",
      faqs: generateCategoryFAQs("Chemi-Con radial lead capacitors"),
      products: [
        generateProduct("KMQ-1000uF-25V", "Radial Capacitor 1000uF 25V", "1000uF", "25V", 105, "1.5A", "Radial Lead"),
        generateProduct("KMQ-470uF-50V", "Radial Capacitor 470uF 50V", "470uF", "50V", 105, "1.1A", "Radial Lead")
      ]
    },
    {
      id: "snap-in-capacitors",
      name: "Snap-in Capacitors",
      slug: "snap-in-capacitors",
      description: "High-capacitance snap-in aluminum electrolytic capacitors for power supply applications",
      longDescription: "Chemi-Con snap-in capacitors are designed for high-power applications requiring large capacitance values and high ripple current capability. These capacitors feature PCB mounting terminals for secure mechanical attachment and excellent thermal performance. The snap-in series is ideal for industrial power supplies, inverters, motor drives, and UPS systems. Chemi-Con's Japan manufacturing ensures exceptional quality and reliability. Contact LiTong Electronics, your authorized Chemi-Con distributor, for snap-in capacitor selection and technical support.",
      parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "Temperature Range", "Lifetime"],
      series: ["LXS", "LXZ", "LXQ"],
      selectionGuide: "Select based on capacitance, voltage rating, ripple current requirements, and size constraints. LXS series for standard, LXZ for low impedance, LXQ for high reliability.",
      selectionGuideLink: "/chemi-con/support/snap-in-capacitor-selection-guide",
      faqs: generateCategoryFAQs("Chemi-Con snap-in capacitors"),
      products: [
        generateProduct("LXS-10000uF-63V", "Snap-in Capacitor 10000uF 63V", "10000uF", "63V", 105, "6.0A", "Snap-in"),
        generateProduct("LXS-4700uF-100V", "Snap-in Capacitor 4700uF 100V", "4700uF", "100V", 105, "4.8A", "Snap-in")
      ]
    },
    {
      id: "screw-terminal-capacitors",
      name: "Screw Terminal Capacitors",
      slug: "screw-terminal-capacitors",
      description: "Large can screw terminal capacitors for high-power industrial applications",
      longDescription: "Chemi-Con screw terminal capacitors are designed for the most demanding high-power applications including industrial drives, renewable energy systems, and large UPS installations. These large can capacitors feature screw terminals for secure high-current connections and robust construction for long-term reliability. Available in very high capacitance values up to 680,000uF and voltage ratings up to 500VDC. Contact LiTong Electronics, your authorized Chemi-Con distributor, for screw terminal capacitor selection.",
      parameters: ["Capacitance", "Voltage Rating", "Ripple Current", "Temperature Range", "Lifetime"],
      series: ["ALS", "ALE"],
      selectionGuide: "Select based on capacitance, voltage rating, ripple current, and mounting requirements. ALS series for standard, ALE for extended life.",
      selectionGuideLink: "/chemi-con/support/screw-terminal-capacitor-selection-guide",
      faqs: generateCategoryFAQs("Chemi-Con screw terminal capacitors"),
      products: [
        generateProduct("ALS-47000uF-100V", "Screw Terminal Capacitor 47000uF 100V", "47000uF", "100V", 85, "15.0A", "Screw Terminal"),
        generateProduct("ALS-22000uF-200V", "Screw Terminal Capacitor 22000uF 200V", "22000uF", "200V", 85, "12.0A", "Screw Terminal")
      ]
    },
    {
      id: "automotive-capacitors",
      name: "Automotive Capacitors",
      slug: "automotive-capacitors",
      description: "AEC-Q200 qualified automotive-grade aluminum electrolytic capacitors",
      longDescription: "Chemi-Con automotive-grade capacitors are specifically designed and qualified to meet AEC-Q200 standards for automotive applications. These capacitors undergo rigorous testing including temperature cycling, vibration, and humidity resistance to ensure reliable performance in vehicle environments. With extended temperature ratings and enhanced reliability, automotive capacitors are ideal for EV charging systems, onboard electronics, LED lighting, and engine control units. Contact LiTong Electronics, your authorized Chemi-Con distributor, for automotive capacitor selection and technical support.",
      parameters: ["Capacitance", "Voltage Rating", "Temperature Range", "Lifetime", "AEC-Q200"],
      series: ["AKM", "AKZ"],
      selectionGuide: "Select based on automotive application requirements, temperature range, and AEC-Q200 qualification level.",
      selectionGuideLink: "/chemi-con/support/automotive-capacitor-selection-guide",
      faqs: generateCategoryFAQs("Chemi-Con automotive capacitors"),
      products: [
        generateProduct("AKM-100uF-50V", "Automotive Capacitor 100uF 50V", "100uF", "50V", 125, "0.4A", "Automotive"),
        generateProduct("AKM-470uF-63V", "Automotive Capacitor 470uF 63V", "470uF", "63V", 125, "1.3A", "Automotive")
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ products.json created');

// 创建solutions.json
const solutionsData = {
  seoTitle: "Chemi-Con Capacitor Solutions | Industrial & Automotive Applications | LiTong Electronics",
  seoDescription: "Chemi-Con capacitor solutions for industrial power supplies, automotive electronics, renewable energy, and consumer electronics. Application-specific recommendations and technical support.",
  seoKeywords: [
    "Chemi-Con capacitor solutions",
    "industrial power supply capacitors",
    "automotive capacitor solutions",
    "renewable energy capacitors",
    "Chemi-Con distributor selection"
  ],
  faqs: [
    generateFAQ(
      "What industries does Chemi-Con serve with its capacitor solutions?",
      "Chemi-Con provides capacitor solutions for automotive, industrial equipment, renewable energy, and consumer electronics applications. Each industry has specific requirements that Chemi-Con's diverse product portfolio addresses. The company offers standard, low-impedance, high-temperature, and automotive-grade capacitors to meet various application needs.",
      "Browse our solutions by industry or contact our FAE team for application-specific recommendations.",
      ["Chemi-Con industries", "capacitor applications", "industry solutions"]
    ),
    generateFAQ(
      "How does LiTong Electronics support Chemi-Con capacitor implementations?",
      "LiTong Electronics provides comprehensive support for Chemi-Con capacitors including technical consultation, sample evaluation, application engineering support, and supply chain management. Our FAE team has extensive experience with Chemi-Con products and can assist with selection, derating calculations, and troubleshooting.",
      "Contact our FAE team early in your design phase for optimal capacitor selection and implementation support.",
      ["technical support", "application engineering", "FAE support"]
    ),
    generateFAQ(
      "What are the key considerations for selecting Chemi-Con capacitors?",
      "Key considerations include voltage rating (with appropriate derating), capacitance value, ripple current requirements, temperature range, lifetime requirements, physical size constraints, and application-specific qualifications (such as AEC-Q200 for automotive). Our selection guides and FAE team can help navigate these considerations.",
      "Use our online selection tools or contact our FAE team for personalized capacitor selection assistance.",
      ["capacitor selection", "selection criteria", "design considerations"]
    ),
    generateFAQ(
      "Does Chemi-Con offer custom solutions for specialized applications?",
      "Yes, Chemi-Con can provide custom capacitor solutions including special capacitance values, voltage ratings, size configurations, and performance characteristics. Custom solutions require minimum order quantities and longer lead times. LiTong Electronics can facilitate communication with Chemi-Con's engineering team.",
      "For custom capacitor requirements, contact our FAE team with your specifications to evaluate feasibility.",
      ["custom capacitors", "special requirements", "custom solutions"]
    ),
    generateFAQ(
      "What is the typical lead time for Chemi-Con capacitor solutions?",
      "Standard Chemi-Con capacitors typically have 6-8 weeks lead time from Japan. High-volume orders or custom specifications may require 10-12 weeks. LiTong Electronics maintains local stock of popular series for immediate delivery.",
      "Contact our sales team to discuss your project timeline and explore stock availability.",
      ["lead time", "delivery schedule", "stock availability"]
    )
  ],
  solutions: [
    {
      id: "industrial-power-solutions",
      slug: "industrial-power-solutions",
      title: "Industrial Power Supply Solutions",
      subtitle: "High-reliability capacitors for industrial power systems",
      description: "Complete capacitor solutions for industrial power supplies, inverters, and motor drives",
      longDescription: "Chemi-Con provides comprehensive capacitor solutions for industrial power supply applications. Our KMQ series radial capacitors and LXS series snap-in capacitors offer high ripple current capability, extended lifetime, and reliable performance in demanding industrial environments. From input filtering to output smoothing, Chemi-Con capacitors deliver the performance and reliability that industrial applications demand.",
      image: "/assets/solutions/industrial-power-supply.jpg",
      applications: ["Switching power supplies", "Motor drives", "UPS systems", "Welding equipment"],
      products: [
        { partNumber: "LXS-10000uF-63V", category: "Snap-in Capacitors", role: "Output filtering" },
        { partNumber: "LXS-4700uF-100V", category: "Snap-in Capacitors", role: "DC bus capacitor" },
        { partNumber: "KMQ-1000uF-25V", category: "Radial Capacitors", role: "Auxiliary power" }
      ],
      benefits: [
        "High reliability for demanding applications",
        "Extended lifetime with proper derating",
        "Comprehensive technical support",
        "Competitive pricing through authorized distribution"
      ],
      coreAdvantages: [
        { title: "High Reliability", description: "Chemi-Con capacitors are manufactured with strict quality controls and extensive testing to ensure reliable performance in demanding applications." },
        { title: "Extended Lifetime", description: "With proper derating and thermal management, Chemi-Con capacitors achieve 10+ year operational life." },
        { title: "Technical Support", description: "LiTong Electronics provides comprehensive FAE support for Chemi-Con capacitor selection and application." }
      ],
      technicalSpecs: { voltageRange: "25V - 500V DC", capacitanceRange: "100uF - 680000uF", temperatureRange: "-40°C to +150°C", lifetime: "2000 - 20000 hours", rippleCurrent: "Up to 50A" },
      bomList: [
        { partNumber: "LXS-10000uF-63V", description: "Output filtering capacitor", quantity: 2, category: "Snap-in Capacitors" },
        { partNumber: "KMQ-1000uF-25V", description: "Auxiliary power capacitor", quantity: 4, category: "Radial Capacitors" }
      ],
      customerCases: [
        {
          customer: "Industrial Equipment Manufacturer",
          industry: "Factory Automation",
          challenge: "Needed high-reliability capacitors for 24V/48V power supplies in harsh factory environments with high temperatures and vibration.",
          solution: "Implemented Chemi-Con LXS series snap-in capacitors with 105°C rating and high ripple current capability. Used multiple capacitors in parallel for current sharing.",
          results: ["Power supply MTBF improved by 50%", "Field failure rate reduced to <0.05%", "Production downtime minimized"]
        },
        {
          customer: "Motor Drive Manufacturer",
          industry: "Industrial Drives",
          challenge: "Required capacitors for DC bus in 15kW motor drives with high ripple current and voltage transients.",
          solution: "Selected Chemi-Con LXS-4700uF-100V capacitors for DC bus with proper voltage derating. Implemented parallel configuration for current sharing.",
          results: ["Successfully handled 20A ripple current", "Operating temperature maintained below 65°C", "Capacitor life expectancy >15 years"]
        }
      ],
      faeInsights: {
        insight: "In my experience supporting industrial power supply designs with Chemi-Con capacitors, proper selection is critical for long-term reliability. For industrial applications, I always recommend selecting KMQ or LXS series with at least 20% voltage derating and operating temperatures below 70°C. The Arrhenius relationship means every 10°C reduction doubles capacitor lifetime. Chemi-Con's Japan manufacturing quality consistently delivers superior results.",
        logic: "The capacitor selection process for industrial applications should follow a systematic approach: First, determine the actual operating conditions including voltage, ripple current, and temperature. Second, apply appropriate derating factors - 20% for voltage, 50% for ripple current, and target <70°C operating temperature. Third, calculate required capacitance based on hold-up time and ripple requirements. Fourth, select Chemi-Con series based on lifetime requirements. Finally, verify thermal design through measurement or simulation.",
        keyTakeaways: ["Always apply voltage derating (20% minimum, 50% for critical)", "Target operating temperature below 70°C", "Use parallel connection for high ripple current", "Select KMQ/LXS series for extended life", "Verify thermal design through measurement"],
        commonPitfalls: ["Insufficient voltage derating leading to early failure", "Ignoring temperature rise from ripple current", "Inadequate thermal management in enclosure", "Poor PCB layout causing uneven current sharing"],
        bestPractices: ["Measure actual operating temperature in final enclosure", "Use thermal imaging to identify hot spots", "Implement proper airflow or heatsinking", "Design for easy capacitor replacement if needed", "Document derating calculations for future reference"]
      },
      faqs: [
        generateFAQ("What makes Chemi-Con capacitors suitable for industrial power supplies?", "Chemi-Con capacitors for industrial applications feature high ripple current capability, extended temperature ratings, and robust construction. The KMQ and LXS series offer up to 50A ripple current capability and 20,000-hour lifetime ratings. Japan manufacturing ensures exceptional quality and reliability.", "For industrial power supplies, select Chemi-Con KMQ or LXS series with appropriate ripple current and temperature ratings.", ["industrial capacitors", "power supply capacitors", "high ripple current"]),
        generateFAQ("How do I calculate the required capacitance for my power supply?", "Required capacitance depends on output voltage, load current, allowable ripple voltage, and switching frequency. For DC bus applications, calculate based on energy storage requirements. For output filtering, calculate based on ripple current and allowable output voltage ripple. Always include margin in calculations.", "Contact our FAE team with your power supply specifications for detailed capacitance calculations.", ["capacitance calculation", "power supply design", "ripple voltage"]),
        generateFAQ("What voltage derating is recommended for industrial applications?", "For industrial applications, we recommend minimum 20% voltage derating (operate at 80% of rated voltage). For critical applications or high-temperature environments, 50% derating provides even better reliability. This derating provides margin for voltage transients and line regulation variations.", "Use 20% derating as minimum, 50% derating for maximum reliability in critical applications.", ["voltage derating", "industrial reliability", "design margin"]),
        generateFAQ("How should I arrange capacitors for high ripple current applications?", "For high ripple current, parallel connection of multiple capacitors is recommended. This reduces total ESR, distributes thermal load, and improves reliability. Use identical part numbers for balanced current sharing. Maintain symmetrical PCB layout with equal trace lengths.", "For ripple current above 5A, consider parallel connection of multiple capacitors rather than a single large capacitor.", ["parallel connection", "ripple current handling", "current sharing"]),
        generateFAQ("What thermal management is required for industrial capacitors?", "Proper thermal management includes: adequate airflow through the enclosure, heatsinking if needed, proper spacing between capacitors for air circulation, and avoiding placement near heat-generating components. Measure actual operating temperature in the final enclosure under full load conditions.", "Design for maximum 70°C capacitor temperature. Use thermal imaging to verify and improve thermal design.", ["thermal management", "capacitor cooling", "temperature control"]),
        generateFAQ("What lifetime can I expect from Chemi-Con industrial capacitors?", "With proper derating and thermal management, Chemi-Con industrial capacitors can achieve 15+ year operational life. KMQ series rated for 2000 hours at 105°C can achieve 80,000+ hours at 50°C operating temperature. High-reliability series provide even longer life.", "For 15+ year life, use KMQ/LXS series with proper derating and thermal management.", ["capacitor lifetime", "industrial reliability", "long life design"])
      ]
    },
    {
      id: "automotive-electronics-solutions",
      slug: "automotive-electronics-solutions",
      title: "Automotive Electronics Solutions",
      subtitle: "AEC-Q200 qualified capacitors for vehicle applications",
      description: "Automotive-grade capacitor solutions for EV charging, LED lighting, and onboard electronics",
      longDescription: "Chemi-Con automotive-grade capacitors are designed and qualified to meet AEC-Q200 standards for vehicle applications. These capacitors undergo rigorous testing including temperature cycling, vibration, and humidity resistance to ensure reliable performance in the harsh automotive environment. From EV charging systems to LED lighting and engine control units, Chemi-Con automotive capacitors deliver the reliability that vehicle applications demand.",
      image: "/assets/solutions/automotive-electronics.jpg",
      applications: ["EV charging systems", "LED lighting", "Engine control units", "Onboard electronics"],
      products: [
        { partNumber: "AKM-100uF-50V", category: "Automotive Capacitors", role: "LED driver filtering" },
        { partNumber: "AKM-470uF-63V", category: "Automotive Capacitors", role: "EV charger DC bus" },
        { partNumber: "KMQ-100uF-25V", category: "Radial Capacitors", role: "ECU decoupling" }
      ],
      benefits: [
        "AEC-Q200 qualified for automotive applications",
        "Extended temperature ratings up to 150°C",
        "Comprehensive PPAP documentation",
        "Proven reliability in vehicle applications"
      ],
      coreAdvantages: [
        { title: "AEC-Q200 Qualified", description: "All automotive capacitors meet strict AEC-Q200 qualification requirements for vehicle applications." },
        { title: "Extended Temperature", description: "Temperature ratings up to 150°C for extreme automotive environments." },
        { title: "Complete Documentation", description: "Full PPAP documentation available for automotive supplier qualification." }
      ],
      technicalSpecs: { voltageRange: "25V - 100V DC", capacitanceRange: "10uF - 1000uF", temperatureRange: "-40°C to +150°C", lifetime: "2000 - 10000 hours", rippleCurrent: "Up to 5A" },
      bomList: [
        { partNumber: "AKM-100uF-50V", description: "LED driver filtering capacitor", quantity: 4, category: "Automotive Capacitors" },
        { partNumber: "AKM-470uF-63V", description: "EV charger DC bus capacitor", quantity: 2, category: "Automotive Capacitors" }
      ],
      customerCases: [
        {
          customer: "EV Charging Equipment Manufacturer",
          industry: "Electric Vehicle Infrastructure",
          challenge: "Needed AEC-Q200 qualified capacitors for onboard EV chargers operating at high temperatures with strict reliability requirements.",
          solution: "Implemented Chemi-Con AKM series capacitors with 125°C rating and AEC-Q200 qualification. Used 50% voltage derating for maximum reliability.",
          results: ["Passed all automotive qualification tests", "Operating reliably at 120°C ambient", "Zero field failures in 5 years of production"]
        },
        {
          customer: "Automotive LED Lighting Supplier",
          industry: "Automotive Lighting",
          challenge: "Required compact, high-reliability capacitors for LED driver modules in vehicle lighting systems.",
          solution: "Selected Chemi-Con AKM series automotive capacitors with 125°C rating. Implemented proper thermal management and voltage derating.",
          results: ["Compact design met space constraints", "Reliable operation in under-hood environment", "AEC-Q200 qualification met OEM requirements"]
        }
      ],
      faeInsights: {
        insight: "Automotive applications demand the highest reliability standards. In my experience supporting automotive designs with Chemi-Con capacitors, conservative design practices are essential. I always recommend 50% voltage derating for automotive - this provides margin for load dumps, transients, and the critical nature of vehicle systems. Temperature management is crucial - even with 125°C rated capacitors, operating below 100°C significantly extends life.",
        logic: "The automotive capacitor selection framework prioritizes reliability above all else. First, verify AEC-Q200 qualification is required. Second, select temperature rating based on worst-case ambient plus self-heating - use 125°C for most applications, 150°C for extreme under-hood. Third, apply 50% voltage derating for all automotive applications. Fourth, implement thermal management to keep operating temperature below 100°C. Fifth, ensure all PPAP documentation is available.",
        keyTakeaways: ["Always use AEC-Q200 qualified capacitors for automotive", "Apply 50% voltage derating for automotive applications", "Select 150°C rating for extreme temperature locations", "Maintain operating temperature below 100°C when possible", "Ensure complete PPAP documentation is available"],
        commonPitfalls: ["Insufficient voltage derating for load dump conditions", "Underestimating self-heating from ripple current", "Inadequate thermal management in compact enclosures", "Missing required automotive documentation"],
        bestPractices: ["Design for worst-case temperature plus margin", "Implement thermal monitoring in critical applications", "Use conformal coating for harsh environments", "Plan for capacitor replacement strategy over vehicle life", "Maintain complete traceability and documentation"]
      },
      faqs: [
        generateFAQ("What is AEC-Q200 qualification?", "AEC-Q200 is the global standard for passive electronic components used in automotive applications. It defines rigorous testing requirements including temperature cycling (-40°C to +125°C or +150°C), vibration, mechanical shock, humidity, and solderability tests. AEC-Q200 qualification ensures capacitors can survive the harsh automotive environment.", "For any automotive application, always specify AEC-Q200 qualified capacitors.", ["AEC-Q200", "automotive qualification", "automotive standard"]),
        generateFAQ("What voltage derating is required for automotive applications?", "For automotive applications, 50% voltage derating is recommended. This conservative derating accounts for load dump conditions (voltage transients up to 100V in 12V systems), line regulation variations, and the critical nature of vehicle systems. For a 50V rated capacitor, limit operating voltage to 25V.", "Apply 50% voltage derating for all automotive applications to ensure maximum reliability.", ["voltage derating", "automotive reliability", "load dump"]),
        generateFAQ("What temperature rating should I select?", "For most automotive applications, 125°C rated capacitors are sufficient. For extreme under-hood applications or locations near heat sources, 150°C rated capacitors provide additional margin. Consider worst-case ambient temperature plus self-heating from ripple current when selecting temperature rating.", "Use 125°C for most applications, 150°C for extreme temperature locations.", ["temperature rating", "automotive temperature", "high temperature"]),
        generateFAQ("What documentation is required for automotive qualification?", "Automotive qualification requires PPAP (Production Part Approval Process) documentation including: design records, material certifications, AEC-Q200 test reports, process flow diagrams, PFMEA, control plan, measurement system analysis, dimensional results, material performance test results, and ongoing reliability data.", "Contact our sales team for complete PPAP documentation package.", ["PPAP documentation", "automotive qualification", "AEC-Q200 reports"]),
        generateFAQ("How do automotive capacitors differ from industrial capacitors?", "Automotive capacitors undergo additional AEC-Q200 testing and qualification. They feature enhanced construction for vibration resistance, extended temperature ratings (125°C or 150°C vs 85°C or 105°C), improved sealing for humidity resistance, and stricter quality controls. Documentation includes PPAP and ongoing reliability monitoring.", "For automotive applications, always use AEC-Q200 qualified capacitors rather than standard industrial types.", ["automotive vs industrial", "AEC-Q200 differences", "automotive grade"]),
        generateFAQ("What is the expected lifetime in automotive applications?", "With proper derating and thermal management, automotive capacitors can achieve 15+ year operational life matching vehicle lifetime. Capacitors rated for 2000 hours at 125°C can achieve 50,000+ hours at 85°C operating temperature. The key is conservative design with adequate voltage derating and temperature management.", "Design for vehicle lifetime (15+ years) using proper derating and thermal management.", ["automotive lifetime", "vehicle reliability", "long term reliability"])
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json created');

// 创建support.json
const supportData = {
  seoTitle: "Chemi-Con Capacitor Technical Support | LiTong Electronics",
  seoDescription: "Technical support resources for Chemi-Con aluminum electrolytic capacitors. Application guides, FAQs, troubleshooting, and engineering support.",
  seoKeywords: [
    "Chemi-Con technical support",
    "capacitor application guide",
    "Chemi-Con distributor support",
    "capacitor troubleshooting",
    "FAE support"
  ],
  faqs: [
    generateFAQ("How can I get technical support for Chemi-Con capacitors?", "LiTong Electronics provides comprehensive technical support for Chemi-Con capacitors through our experienced Field Application Engineering (FAE) team. Support includes capacitor selection guidance, application engineering, derating calculations, thermal analysis, and troubleshooting.", "Contact our FAE team early in your design phase for optimal capacitor selection.", ["technical support", "FAE assistance", "application engineering"]),
    generateFAQ("What technical resources are available for Chemi-Con capacitors?", "We provide comprehensive technical resources including datasheets, application notes, selection guides, SPICE models, reliability calculators, and thermal analysis tools. All resources are available for download from our website.", "Browse our technical resource library or contact our sales team for specific documentation.", ["technical resources", "datasheets", "application notes"]),
    generateFAQ("Can I get samples for evaluation?", "Yes, LiTong Electronics provides sample capacitors for evaluation purposes. Samples are typically available from stock for popular series. For specialized or high-voltage capacitors, sample lead time may be 2-4 weeks.", "Contact our sales team with your sample requirements and project details.", ["sample request", "evaluation samples", "sample capacitors"]),
    generateFAQ("What is the process for custom capacitor requests?", "For custom capacitor requirements, contact our FAE team with your specifications. We will coordinate with Chemi-Con's engineering team to evaluate feasibility, provide quotation, and establish timeline.", "Contact our FAE team with detailed specifications for custom capacitor evaluation.", ["custom capacitors", "special order", "custom specifications"]),
    generateFAQ("How do I calculate capacitor lifetime for my application?", "Capacitor lifetime can be calculated using the Arrhenius equation. Every 10°C reduction in operating temperature approximately doubles the capacitor lifetime. Voltage derating also significantly affects lifetime.", "Contact our FAE team with your operating conditions for detailed lifetime calculations.", ["lifetime calculation", "Arrhenius equation", "reliability prediction"]),
    generateFAQ("What quality certifications does Chemi-Con hold?", "Chemi-Con holds multiple international quality certifications including ISO 9001, ISO 14001, IATF 16949, and AEC-Q200 qualification for automotive-grade capacitors.", "Contact our sales team for certification documentation.", ["quality certifications", "ISO 9001", "AEC-Q200"]),
    generateFAQ("How can I verify the authenticity of Chemi-Con capacitors?", "Purchase Chemi-Con capacitors only from authorized distributors like LiTong Electronics to ensure authenticity. We provide certificates of authenticity.", "Purchase only from authorized distributors. Contact us to verify distributor credentials.", ["authenticity verification", "counterfeit prevention", "authorized distributor"]),
    generateFAQ("What is the warranty for Chemi-Con capacitors?", "Chemi-Con capacitors are warranted against defects in materials and workmanship for 12 months from date of shipment when used within specified ratings.", "Review warranty terms before purchase. Contact our sales team for warranty documentation.", ["warranty", "product warranty", "defect coverage"])
  ],
  articles: [
    {
      id: "chemi-con-selection-guide",
      slug: "chemi-con-selection-guide",
      title: "Chemi-Con Capacitor Selection Guide",
      category: "Application Guide",
      summary: "Comprehensive guide for selecting Chemi-Con aluminum electrolytic capacitors including series comparison and application recommendations.",
      content: "This guide provides detailed information on selecting Chemi-Con capacitors for various applications. Topics include series comparison (KMQ, KZE, LXS, AKM), voltage derating, ripple current calculations, and lifetime estimation.",
      author: { name: "Michael Chen", title: "Senior FAE" },
      date: "2024-01-15",
      publishDate: "2024-01-15",
      readTime: "15 min",
      tags: ["capacitor selection", "Chemi-Con", "derating"],
      relatedArticles: ["chemi-con-ripple-current", "chemi-con-thermal-guide", "chemi-con-lifetime"],
      faeInsights: {
        insight: "In my 15 years of supporting designs with Chemi-Con capacitors, I've found that proper series selection is critical. KMQ series offers the highest reliability for mission-critical applications, while KZE provides excellent value for general-purpose use. Always consider the total cost of ownership - Chemi-Con's longer lifetime often makes them more economical despite higher initial cost.",
        logic: "The selection process should consider: application requirements, environmental conditions, reliability needs, and cost constraints. For automotive, use AKM series. For industrial, KMQ or LXS depending on power level. For consumer, KZE offers good value.",
        keyTakeaways: ["Select series based on application requirements", "Consider total cost of ownership", "Use KMQ for highest reliability", "Verify all operating parameters"],
        commonPitfalls: ["Selecting based on price alone", "Ignoring operating temperature", "Inadequate derating"],
        bestPractices: ["Consult FAE early in design", "Request samples for evaluation", "Verify calculations with measurements"]
      },
      customerCases: [{ customer: "Industrial Manufacturer", challenge: "Needed high-reliability capacitors.", solution: "Implemented KMQ series.", feedback: "Excellent reliability achieved." }],
      faqs: [
        generateFAQ("Which Chemi-Con series should I select?", "Select KMQ series for highest reliability applications, KZE for general purpose, LXS for snap-in high power, AKM for automotive. Consider operating conditions and reliability requirements.", "Contact FAE for series selection guidance.", ["series selection", "KMQ", "KZE"]),
        generateFAQ("What is the price difference between series?", "KMQ series is premium priced 20-30% above KZE. LXS snap-in series is priced based on capacitance and voltage. AKM automotive series includes qualification costs.", "Request quotation for specific part numbers.", ["pricing", "cost comparison", "series price"]),
        generateFAQ("Are all Chemi-Con series RoHS compliant?", "Yes, all current Chemi-Con series are RoHS compliant. Legacy parts may require verification. Contact sales for specific part compliance.", "Verify compliance documentation for your specific parts.", ["RoHS", "compliance", "environmental"]),
        generateFAQ("What is the lead time difference between series?", "Popular KMQ and KZE series typically have shorter lead times. Specialized high-voltage or custom parts may have longer lead times.", "Contact sales for current lead times.", ["lead time", "delivery", "availability"]),
        generateFAQ("Can I cross-reference competitors to Chemi-Con?", "Yes, our FAE team can provide cross-references from major competitors to Chemi-Con equivalents. Provide competitor part numbers for cross-reference.", "Contact FAE with competitor part numbers for cross-reference.", ["cross reference", "competitor", "equivalent"]),
        generateFAQ("What documentation is available?", "Datasheets, application notes, reliability data, and SPICE models are available. PPAP documentation available for automotive parts.", "Download from website or contact sales.", ["documentation", "datasheet", "application note"]),
        generateFAQ("How do I request samples?", "Contact our sales team with part numbers and quantities needed. Samples typically ship within 1-2 business days for stock items.", "Submit sample request to sales team.", ["samples", "evaluation", "sample request"]),
        generateFAQ("What is the minimum order quantity?", "Standard MOQ is 1000 pieces for radial, 500 for snap-in. Smaller quantities may be available from stock. Contact sales for specific MOQ.", "Contact sales for MOQ and pricing.", ["MOQ", "minimum order", "quantity"])
      ]
    },
    {
      id: "chemi-con-ripple-current",
      slug: "chemi-con-ripple-current",
      title: "Ripple Current Calculations for Chemi-Con Capacitors",
      category: "Technical Guide",
      summary: "Detailed guide on calculating ripple current and thermal management for Chemi-Con capacitors.",
      content: "This guide explains ripple current calculations, self-heating estimation, and thermal management for Chemi-Con capacitors.",
      author: { name: "David Wang", title: "Senior FAE" },
      date: "2024-01-10",
      publishDate: "2024-01-10",
      readTime: "12 min",
      tags: ["ripple current", "thermal management", "self-heating"],
      relatedArticles: ["chemi-con-selection-guide", "chemi-con-thermal-guide", "chemi-con-lifetime"],
      faeInsights: {
        insight: "Ripple current is often underestimated. Self-heating can add 20-30°C to ambient temperature, dramatically reducing lifetime. Always calculate actual ripple current and verify temperature rise.",
        logic: "Calculate RMS ripple current, determine ESR at operating frequency, calculate power dissipation, and estimate temperature rise using thermal resistance.",
        keyTakeaways: ["Calculate actual ripple current", "Include self-heating", "Use frequency-corrected ESR", "Verify temperature rise"],
        commonPitfalls: ["Using ESR at wrong frequency", "Ignoring self-heating", "Underestimating RMS ripple"],
        bestPractices: ["Measure actual ripple current", "Use thermal imaging", "Design for worst-case conditions"]
      },
      customerCases: [{ customer: "Power Supply Manufacturer", challenge: "Capacitors running hot.", solution: "Improved thermal design.", feedback: "Temperature reduced significantly." }],
      faqs: [
        generateFAQ("How do I calculate ripple current?", "Ripple current depends on topology. For buck converters, Iripple = Vout×(Vin-Vout)/(Vin×f×L). Use RMS values for capacitor rating.", "Use appropriate formula for your topology.", ["ripple current", "calculation", "RMS"]),
        generateFAQ("What is ESR frequency dependence?", "ESR varies with frequency, typically lowest at 100-120Hz and increasing at higher frequencies. Check datasheet for frequency characteristics.", "Use ESR value at your operating frequency.", ["ESR", "frequency", "impedance"]),
        generateFAQ("How do I calculate self-heating?", "Temperature Rise = I² × ESR × Rth. Typical thermal resistance is 20-40°C/W for radial capacitors.", "Calculate self-heating and verify total temperature.", ["self-heating", "temperature rise", "thermal"]),
        generateFAQ("What thermal resistance should I use?", "Small radial: 30-40°C/W, Medium: 25-35°C/W, Large snap-in: 15-25°C/W. Decreases with forced airflow.", "Use manufacturer's data or typical values.", ["thermal resistance", "thermal impedance", "heat transfer"]),
        generateFAQ("How can I reduce capacitor temperature?", "Use lower ESR capacitors, parallel connection, improve airflow, add heatsinking, or reduce ripple current.", "Implement multiple strategies for maximum reduction.", ["temperature reduction", "cooling", "thermal management"]),
        generateFAQ("What is the relationship between ripple current and lifetime?", "Higher ripple current increases temperature, reducing lifetime per Arrhenius relationship. Every 10°C increase halves lifetime.", "Minimize ripple current and temperature for maximum lifetime.", ["lifetime", "ripple current", "reliability"]),
        generateFAQ("Should I measure or calculate ripple current?", "Both! Calculate during design, measure for verification. Compare measured vs calculated to validate design.", "Calculate for design, measure for verification.", ["measurement", "calculation", "verification"]),
        generateFAQ("How does frequency affect ripple current capability?", "Ripple current ratings are at 100-120Hz. At higher frequencies, effective capability may be reduced due to increased ESR.", "For high-frequency, use low-ESR capacitors.", ["frequency", "derating", "high frequency"])
      ]
    },
    {
      id: "chemi-con-automotive-guide",
      slug: "chemi-con-automotive-guide",
      title: "Chemi-Con Automotive Capacitor Application Guide",
      category: "Application Guide",
      summary: "Guide for selecting and applying AEC-Q200 qualified Chemi-Con capacitors in automotive applications.",
      content: "This guide covers AEC-Q200 qualification, automotive selection criteria, derating recommendations, and documentation requirements.",
      author: { name: "Thomas Zhang", title: "Senior FAE - Automotive" },
      date: "2024-01-05",
      publishDate: "2024-01-05",
      readTime: "18 min",
      tags: ["automotive", "AEC-Q200", "automotive electronics"],
      relatedArticles: ["chemi-con-selection-guide", "chemi-con-ripple-current", "chemi-con-thermal-guide"],
      faeInsights: {
        insight: "Automotive applications demand highest reliability. I always recommend 50% voltage derating and conservative thermal design. AEC-Q200 qualification is essential.",
        logic: "Automotive selection prioritizes reliability: AEC-Q200 qualification, appropriate temperature rating, 50% voltage derating, thermal management, and complete documentation.",
        keyTakeaways: ["Use AEC-Q200 qualified capacitors", "Apply 50% voltage derating", "Select appropriate temperature rating", "Maintain complete documentation"],
        commonPitfalls: ["Insufficient derating", "Missing documentation", "Inadequate thermal design"],
        bestPractices: ["Design for worst-case conditions", "Implement thermal monitoring", "Maintain traceability"]
      },
      customerCases: [{ customer: "Automotive Tier 1", challenge: "Needed AEC-Q200 capacitors.", solution: "Implemented AKM series.", feedback: "Passed all qualifications." }],
      faqs: [
        generateFAQ("What is AEC-Q200?", "AEC-Q200 is the global standard for automotive passive components. It defines rigorous testing including temperature cycling, vibration, and shock.", "Always use AEC-Q200 qualified capacitors for automotive.", ["AEC-Q200", "automotive", "qualification"]),
        generateFAQ("What derating is required?", "50% voltage derating is recommended for automotive to handle load dumps and transients.", "Apply 50% voltage derating for automotive.", ["derating", "voltage", "load dump"]),
        generateFAQ("What temperature rating?", "Use 125°C for most applications, 150°C for extreme under-hood locations.", "Select temperature rating based on location.", ["temperature", "rating", "automotive"]),
        generateFAQ("What documentation is needed?", "PPAP documentation including design records, test reports, PFMEA, control plan, and ongoing reliability data.", "Contact sales for PPAP documentation.", ["PPAP", "documentation", "automotive"]),
        generateFAQ("How do automotive differ from industrial?", "Automotive capacitors have AEC-Q200 qualification, enhanced construction, extended temperature ratings, and stricter quality controls.", "Use automotive-grade for vehicle applications.", ["automotive", "industrial", "differences"]),
        generateFAQ("What lifetime in automotive?", "With proper design, 15+ year operational life matching vehicle lifetime.", "Design for vehicle lifetime.", ["lifetime", "reliability", "vehicle"]),
        generateFAQ("What are common automotive requirements?", "AEC-Q200, extended temperature, vibration resistance, humidity resistance, and complete documentation.", "Verify all requirements with customer.", ["requirements", "automotive", "standards"]),
        generateFAQ("How to handle load dump?", "Use 50% voltage derating to provide margin for load dump transients up to 100V in 12V systems.", "Use conservative derating for load dump.", ["load dump", "transient", "protection"])
      ]
    },
    {
      id: "chemi-con-troubleshooting",
      slug: "chemi-con-troubleshooting",
      title: "Chemi-Con Capacitor Troubleshooting Guide",
      category: "Troubleshooting",
      summary: "Guide for diagnosing capacitor-related issues and failure analysis.",
      content: "This guide helps identify and resolve capacitor-related issues including common failure modes and corrective actions.",
      author: { name: "Robert Zhang", title: "Senior FAE" },
      date: "2024-01-08",
      publishDate: "2024-01-08",
      readTime: "14 min",
      tags: ["troubleshooting", "failure analysis", "capacitor failure"],
      relatedArticles: ["chemi-con-selection-guide", "chemi-con-ripple-current", "chemi-con-thermal-guide"],
      faeInsights: {
        insight: "Most failures are caused by application issues rather than defects. Common causes: insufficient derating, excessive temperature, inadequate ripple margin. Measure actual conditions to find root cause.",
        logic: "Troubleshooting follows systematic approach: document symptoms, measure operating conditions, compare against ratings, inspect for damage, test parameters, identify root cause, implement corrective actions.",
        keyTakeaways: ["Measure actual operating conditions", "Compare against ratings with derating", "Check for physical damage", "Test capacitor parameters"],
        commonPitfalls: ["Replacing without root cause analysis", "Ignoring temperature measurements", "Using catalog ratings without derating"],
        bestPractices: ["Document all measurements", "Use thermal imaging", "Verify corrective actions"]
      },
      customerCases: [{ customer: "Equipment Manufacturer", challenge: "Capacitor failures in field.", solution: "Improved derating and cooling.", feedback: "Failures eliminated." }],
      faqs: [
        generateFAQ("What are common failure causes?", "Insufficient voltage derating, excessive temperature, inadequate ripple margin, reverse voltage, and physical damage.", "Investigate all potential causes systematically.", ["failure", "causes", "root cause"]),
        generateFAQ("How do I test capacitor health?", "Measure capacitance (within ±20%), ESR (near datasheet value), leakage current (very low), and inspect for physical damage.", "Measure capacitance and ESR to assess health.", ["testing", "health", "ESR"]),
        generateFAQ("What are signs of failure?", "Increased ripple voltage, reduced hold-up time, increased ESR, decreased capacitance, physical venting or bulging.", "Monitor for electrical and physical signs.", ["signs", "symptoms", "failure indicators"]),
        generateFAQ("How do I measure temperature?", "Use thermocouple on case, infrared thermometer, or thermal imaging. Measure under worst-case conditions.", "Use thermocouple or thermal imaging.", ["temperature", "measurement", "thermal"]),
        generateFAQ("What to do when capacitor fails?", "Document conditions, measure voltage/current/temperature, test capacitor, identify root cause, implement corrective actions.", "Always identify root cause before replacing.", ["failure", "investigation", "corrective action"]),
        generateFAQ("How to prevent failures?", "Proper derating, thermal management, ripple margin, correct polarity, transient protection, and regular monitoring.", "Implement proper derating and thermal management.", ["prevention", "reliability", "best practices"]),
        generateFAQ("When should capacitors be replaced?", "When capacitance <80%, ESR increases 2x+, physical damage visible, or circuit performance degrades.", "Replace capacitors showing degradation signs.", ["replacement", "maintenance", "end of life"]),
        generateFAQ("What tools are needed?", "LCR meter for capacitance/ESR, oscilloscope for ripple, current probe, thermocouple/thermal camera, multimeter.", "Invest in proper measurement tools.", ["tools", "equipment", "measurement"])
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ support.json created');

// 创建news.json
const newsData = {
  seoTitle: "Chemi-Con News & Updates | LiTong Electronics",
  seoDescription: "Latest news, product announcements, and technical updates from Chemi-Con.",
  seoKeywords: [
    "Chemi-Con news",
    "capacitor industry updates",
    "Chemi-Con product announcements",
    "Japan capacitor news"
  ],
  articles: [
    {
      id: "chemi-con-expands-production",
      title: "Chemi-Con Expands Production Capacity",
      summary: "Chemi-Con announces expansion of manufacturing capacity to meet growing demand for automotive and industrial capacitors.",
      content: "Nippon Chemi-Con Corporation has announced a significant expansion of its manufacturing capacity to meet growing global demand for high-reliability aluminum electrolytic capacitors. The expansion includes new production lines for automotive-grade capacitors and increased capacity for industrial snap-in series. This investment reinforces Chemi-Con's commitment to supporting the growing electric vehicle and renewable energy markets.",
      date: "2024-03-15",
      category: "Company News",
      author: "Chemi-Con Corporation",
      tags: ["expansion", "production capacity", "automotive", "investment"]
    },
    {
      id: "new-akm-automotive-series",
      title: "Chemi-Con Launches New AKM Automotive Capacitor Series",
      summary: "New AKM series offers enhanced reliability for next-generation automotive electronics.",
      content: "Chemi-Con has introduced the new AKM series of AEC-Q200 qualified automotive capacitors designed for next-generation vehicle electronics. The new series features enhanced reliability, extended temperature ratings up to 150°C, and improved ripple current capability. AKM series capacitors are ideal for EV charging systems, ADAS applications, and LED lighting modules.",
      date: "2024-02-28",
      category: "Product News",
      author: "Chemi-Con Corporation",
      tags: ["AKM series", "automotive capacitors", "AEC-Q200", "new product"]
    },
    {
      id: "chemi-con-renewable-energy",
      title: "Chemi-Con Capacitors Power Renewable Energy Growth",
      summary: "Chemi-Con capacitors selected for major solar and wind power projects worldwide.",
      content: "Chemi-Con's high-reliability capacitors are increasingly being selected for renewable energy applications worldwide. The company's LXS series snap-in capacitors and ALS series screw terminal capacitors are being used in solar inverters, wind turbine power converters, and energy storage systems. These applications demand the long operational life and high reliability that Chemi-Con capacitors provide.",
      date: "2024-02-10",
      category: "Application News",
      author: "Chemi-Con Corporation",
      tags: ["renewable energy", "solar", "wind power", "energy storage"]
    },
    {
      id: "BeiLuo-chemi-con-partnership",
      title: "LiTong Electronics Strengthens Chemi-Con Partnership",
      summary: "Enhanced distribution agreement provides expanded inventory and technical support.",
      content: "LiTong Electronics is pleased to announce an enhanced distribution partnership with Chemi-Con Corporation. The expanded agreement includes increased local inventory of high-demand series, dedicated FAE support, and improved lead times for Asian markets. Customers will benefit from faster delivery of Chemi-Con's premium capacitors and comprehensive application engineering support.",
      date: "2024-01-20",
      category: "Partnership News",
      author: "LiTong Electronics",
      tags: ["partnership", "distribution", "inventory", "technical support"]
    },
    {
      id: "chemi-con-quality-awards",
      title: "Chemi-Con Receives Quality Excellence Awards",
      summary: "Chemi-Con recognized by major automotive OEMs for quality and reliability.",
      content: "Chemi-Con Corporation has received multiple quality excellence awards from major automotive OEMs in recognition of its outstanding quality and reliability performance. These awards reflect Chemi-Con's commitment to zero-defect manufacturing and continuous improvement. The company's automotive capacitors consistently exceed customer expectations for quality and reliability.",
      date: "2024-01-15",
      category: "Company News",
      author: "Chemi-Con Corporation",
      tags: ["quality awards", "automotive", "excellence", "recognition"]
    },
    {
      id: "chemi-con-technical-webinar",
      title: "Chemi-Con Technical Webinar Series Announced",
      summary: "Upcoming webinars on capacitor selection, application design, and reliability.",
      content: "Chemi-Con and LiTong Electronics are jointly hosting a series of technical webinars focused on aluminum electrolytic capacitor technology. Topics include capacitor selection for demanding applications, thermal management best practices, and reliability prediction methods. The webinars feature application engineers from both companies sharing real-world experience and technical insights.",
      date: "2024-01-10",
      category: "Event News",
      author: "LiTong Electronics",
      tags: ["webinar", "training", "technical education", "events"]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✅ news.json created');

console.log('\n============================================================');
console.log('✅ Chemi-Con brand data created successfully!');
console.log('============================================================\n');
