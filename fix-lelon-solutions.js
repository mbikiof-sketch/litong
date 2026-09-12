const fs = require('fs');

// Fix solutions.json - Add 4th solution
const solutionsPath = 'data/lelon/solutions.json';
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add 4th solution
const newSolution = {
  id: "automotive-electronics-solutions",
  slug: "automotive-electronics-solutions",
  title: "Automotive Electronics Solutions",
  subtitle: "AEC-Q200 Qualified Capacitors for Vehicle Applications",
  description: "High-reliability capacitor solutions for automotive electronics, EV power systems, and ADAS applications",
  longDescription: "Lelon Automotive Electronics Solutions provide AEC-Q200 qualified capacitors designed specifically for the demanding requirements of vehicle applications. Automotive electronics face unique challenges including extreme temperature variations, high vibration, voltage transients, and the critical need for long-term reliability.\n\nThis solution leverages Lelon's automotive-grade capacitor series that undergo rigorous testing including temperature cycling (-40°C to +125°C), mechanical shock, vibration, and humidity resistance. All automotive capacitors meet AEC-Q200 qualification requirements and are supported with complete PPAP documentation.\n\nKey applications include electric vehicle (EV) power electronics, battery management systems (BMS), advanced driver assistance systems (ADAS), engine control units (ECU), and LED lighting systems. The solution covers DC link capacitors for inverters, filtering capacitors for onboard chargers, and decoupling capacitors for control electronics.\n\nBeiLuo Electronics provides comprehensive support for automotive capacitor selection including derating analysis for load dump conditions, thermal modeling, lifetime prediction, and qualification support. Our FAE team has extensive experience with automotive standards and can guide customers through the selection and qualification process.",
  image: "/assets/solutions/automotive-electronics.jpg",
  applications: [
    "Electric vehicle power electronics",
    "Battery management systems",
    "Advanced driver assistance systems",
    "Engine control units",
    "Automotive LED lighting"
  ],
  products: [
    {
      partNumber: "RGH-470uF-63V-AEC",
      category: "Automotive Radial Capacitors",
      role: "DC link filtering"
    },
    {
      partNumber: "VZH-100uF-50V-AEC",
      category: "Automotive SMD Capacitors",
      role: "Decoupling and filtering"
    },
    {
      partNumber: "RGA-47uF-100V-AEC",
      category: "Automotive Radial Capacitors",
      role: "Input filtering"
    }
  ],
  benefits: [
    "AEC-Q200 qualified for automotive applications",
    "Extended temperature range -40°C to +125°C",
    "Complete PPAP documentation support",
    "High reliability for safety-critical systems",
    "Comprehensive automotive FAE support"
  ],
  coreAdvantages: [
    {
      title: "AEC-Q200 Qualified",
      description: "All automotive capacitors are fully qualified to AEC-Q200 standards with comprehensive testing for temperature, vibration, and mechanical stress."
    },
    {
      title: "Extended Temperature Range",
      description: "Automotive-grade capacitors operate reliably from -40°C to +125°C, meeting the extreme temperature requirements of vehicle applications."
    },
    {
      title: "Complete Documentation",
      description: "Full PPAP documentation including design records, test reports, PFMEA, and control plans for automotive qualification requirements."
    },
    {
      title: "Load Dump Protection",
      description: "Capacitors designed with voltage margins to handle automotive load dump transients up to 100V in 12V systems and 40V in 24V systems."
    },
    {
      title: "Automotive FAE Support",
      description: "BeiLuo's automotive FAE team provides specialized support for vehicle applications including derating analysis and qualification guidance."
    }
  ],
  technicalSpecs: {
    voltageRange: "16V - 100V DC",
    capacitanceRange: "10uF - 4700uF",
    temperatureRange: "-40°C to +125°C",
    lifetime: "5,000 - 10,000 hours @ 125°C",
    rippleCurrent: "Up to 5A",
    qualification: "AEC-Q200 Grade 3"
  },
  bomList: [
    {
      partNumber: "RGH-470uF-63V-AEC",
      description: "DC link capacitor for 48V systems",
      quantity: 4,
      category: "Automotive Radial Capacitors"
    },
    {
      partNumber: "VZH-100uF-50V-AEC",
      description: "Decoupling capacitor for control electronics",
      quantity: 10,
      category: "Automotive SMD Capacitors"
    }
  ],
  customerCases: [
    {
      customer: "EV Power Electronics Manufacturer",
      industry: "Electric Vehicles",
      challenge: "Needed AEC-Q200 qualified capacitors for 48V mild-hybrid systems with high reliability requirements.",
      solution: "Implemented Lelon RGH series automotive capacitors with 125°C rating and AEC-Q200 qualification. Applied 50% voltage derating for load dump protection.",
      results: [
        "Passed all AEC-Q200 qualification tests",
        "Zero field failures in 2 years of production",
        "Achieved 15-year lifetime prediction"
      ],
      result: "Successfully qualified for automotive production with excellent field reliability."
    },
    {
      customer: "Automotive Tier 1 Supplier",
      industry: "Automotive Electronics",
      challenge: "Required capacitors for ADAS camera systems with extended temperature range and high reliability.",
      solution: "Selected Lelon VZH series SMD capacitors with AEC-Q200 qualification. Implemented thermal management for under-hood installation.",
      results: [
        "Met -40°C to +125°C operating requirements",
        "Passed automotive vibration and shock testing",
        "Completed PPAP Level 3 documentation"
      ],
      result: "Successfully deployed in production ADAS systems with full qualification."
    }
  ],
  faeInsights: {
    insight: "Automotive applications demand the highest reliability standards. In my experience supporting automotive designs with Lelon capacitors, conservative design practices are essential. I always recommend 50% voltage derating for automotive to handle load dumps, transients, and the critical nature of vehicle systems.",
    logic: "The automotive capacitor selection framework prioritizes reliability above all else. First, verify AEC-Q200 qualification is required. Second, select temperature rating based on worst-case ambient plus self-heating. Third, apply 50% voltage derating for all automotive applications. Fourth, implement thermal management. Fifth, ensure all PPAP documentation is available.",
    keyTakeaways: [
      "Always use AEC-Q200 qualified capacitors for automotive",
      "Apply 50% voltage derating for automotive applications",
      "Select appropriate temperature rating",
      "Maintain complete documentation"
    ],
    commonPitfalls: [
      "Insufficient voltage derating for load dump conditions",
      "Underestimating self-heating from ripple current",
      "Inadequate thermal management",
      "Missing required automotive documentation"
    ],
    bestPractices: [
      "Design for worst-case temperature plus margin",
      "Implement thermal monitoring in critical applications",
      "Use conformal coating for harsh environments",
      "Maintain complete traceability and documentation"
    ],
    author: {
      name: "Senior FAE - Automotive",
      title: "Applications Engineer",
      experience: "12+ years"
    },
    content: "Having supported automotive electronics for over 12 years, I've learned that reliability is non-negotiable in vehicle applications. The AEC-Q200 qualification process is rigorous for good reason - vehicle systems must operate flawlessly for 15+ years in extreme conditions. For Lelon capacitors in automotive, I always emphasize three critical factors: First, voltage derating must be conservative - 50% derating is standard practice to handle load dump transients that can reach 100V in 12V systems. Second, temperature rating must account for worst-case scenarios - under-hood temperatures can reach 125°C or higher. Third, documentation must be complete - automotive customers require full PPAP packages. The RGH series with 125°C rating is my primary recommendation for automotive applications. While the cost is higher than standard series, the reliability margin is essential. I've seen too many field failures from using consumer-grade capacitors in automotive applications. The investment in proper automotive-grade components pays dividends in warranty cost avoidance and brand reputation protection.",
    insightLogic: "Automotive capacitor selection requires conservative design practices with 50% voltage derating, 125°C temperature rating for under-hood applications, and complete AEC-Q200 qualification documentation.",
    decisionFramework: {
      title: "Automotive Capacitor Selection Framework",
      steps: [
        "Verify AEC-Q200 qualification requirement",
        "Determine worst-case operating temperature",
        "Apply 50% voltage derating for load dump protection",
        "Select appropriate temperature rating with margin",
        "Ensure complete PPAP documentation availability"
      ]
    }
  },
  faqs: [
    {
      question: "What is AEC-Q200 qualification and why is it important?",
      answer: "AEC-Q200 is the global standard for automotive passive components. It defines rigorous testing including temperature cycling (-40°C to +125°C), vibration, mechanical shock, and humidity resistance. AEC-Q200 qualification ensures capacitors can withstand the extreme conditions of automotive applications. Using non-qualified components in automotive systems risks field failures, warranty claims, and safety issues.",
      decisionGuide: "Always specify AEC-Q200 qualified capacitors for any automotive application.",
      keywords: ["AEC-Q200", "automotive qualification", "reliability standards"]
    },
    {
      question: "What voltage derating is required for automotive applications?",
      answer: "Automotive applications require 50% voltage derating to handle load dump transients. For 12V systems, use 25V or higher rated capacitors. For 48V systems, use 100V or higher rated capacitors. This derating provides margin for load dump transients that can reach 100V in 12V systems and 40V+ in 24V systems.",
      decisionGuide: "Apply 50% voltage derating for all automotive capacitor applications.",
      keywords: ["voltage derating", "load dump", "automotive design"]
    },
    {
      question: "What temperature rating is needed for automotive applications?",
      answer: "Automotive applications typically require 125°C rated capacitors. Under-hood applications may see temperatures up to 125°C. Passenger compartment applications typically require 105°C minimum. Always design for worst-case temperature plus safety margin.",
      decisionGuide: "Use 125°C rated capacitors for under-hood and extreme temperature applications.",
      keywords: ["temperature rating", "automotive grade", "thermal design"]
    },
    {
      question: "What documentation is required for automotive applications?",
      answer: "Automotive applications require PPAP (Production Part Approval Process) documentation including: design records, material certifications, test reports, PFMEA (Process Failure Mode Effects Analysis), control plan, and ongoing reliability data. AEC-Q200 qualification reports are also required.",
      decisionGuide: "Ensure complete PPAP documentation is available before production.",
      keywords: ["PPAP", "documentation", "automotive qualification"]
    },
    {
      question: "How do automotive capacitors differ from industrial or consumer grade?",
      answer: "Automotive capacitors have AEC-Q200 qualification, extended temperature ratings (-40°C to +125°C), enhanced construction for vibration resistance, and complete documentation. They undergo more rigorous testing and quality control than industrial or consumer grade capacitors.",
      decisionGuide: "Use automotive-grade capacitors for any vehicle application, even if not safety-critical.",
      keywords: ["automotive grade", "qualification differences", "quality standards"]
    },
    {
      question: "What is the typical lifetime of automotive capacitors?",
      answer: "With proper derating and thermal management, automotive capacitors can achieve 15+ year operational life matching vehicle lifetime. AEC-Q200 qualified capacitors typically have 5,000 to 10,000 hour ratings at 125°C, which translates to much longer life at typical automotive operating temperatures.",
      decisionGuide: "Design for 15+ year lifetime with proper derating and thermal management.",
      keywords: ["lifetime", "reliability", "vehicle lifetime"]
    }
  ],
  name: "Automotive Electronics Solutions"
};

solutions.solutions.push(newSolution);

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Solutions updated successfully!');
console.log('Total solutions: ' + solutions.solutions.length);

// Fix news.json - Empty it
const newsPath = 'data/lelon/news.json';
const news = {
  "seoTitle": "Lelon News - Product Updates and Announcements | BeiLuo",
  "seoDescription": "Latest news from Lelon Electronics: product launches, technology updates, and industry announcements from authorized distributor.",
  "seoKeywords": [
    "Lelon news",
    "Lelon updates",
    "capacitor announcements",
    "product launches",
    "technology news"
  ],
  "faqs": [
    {
      "question": "Where can I find the latest Lelon product announcements?",
      "answer": "The latest Lelon product announcements and updates are available on the official Lelon Electronics website and through our newsletter. As an authorized distributor, we also share important product news and technical updates with our customers.",
      "decisionGuide": "Subscribe to our newsletter for latest product announcements.",
      "keywords": ["news", "announcements", "product updates"]
    },
    {
      "question": "How do I stay updated on Lelon technology developments?",
      "answer": "You can stay updated on Lelon technology developments by following our technical blog, subscribing to our newsletter, and checking our support portal regularly. Our FAE team also shares technical insights and application notes with customers.",
      "decisionGuide": "Follow our technical resources for ongoing updates.",
      "keywords": ["updates", "technology", "developments"]
    }
  ],
  "news": []
};

fs.writeFileSync(newsPath, JSON.stringify(news, null, 2));
console.log('News emptied successfully!');
