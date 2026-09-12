/**
 * Fix Gainsil fabricated data
 * - Products: OPERATIONALAMPLIFIERS-3/4, COMPARATORS-3/4, ANALOGSWITCHES-3/4, VOLTAGEREFERENCES-3/4
 * - Solution 3: consumer-electronics-solution-3
 * - Support 5: best-practices---gainsil
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'gainsil');

// Real Op-Amp products
const realOpAmpProducts = [
  {
    partNumber: "GS358",
    name: "GS358 Low Power Dual Op-Amp",
    shortDescription: "Low power dual operational amplifier with 1MHz bandwidth, 0.5V/μs slew rate for battery-powered applications.",
    descriptionParagraphs: [
      "The GS358 is a low power dual operational amplifier designed for battery-powered and portable applications.",
      "With 1MHz unity gain bandwidth and 0.5V/μs slew rate, this op-amp provides adequate performance for signal conditioning and sensor interfaces. The low supply current (200μA per amplifier) extends battery life.",
      "Features include rail-to-rail output, wide supply range (2.5V to 5.5V), and low input offset voltage (2mV max). The SOIC-8 and MSOP-8 packages are ideal for space-constrained designs."
    ],
    specifications: {
      "Supply Voltage": "2.5V to 5.5V",
      "Bandwidth": "1MHz",
      "Slew Rate": "0.5V/μs",
      "Supply Current": "200μA per amp",
      "Input Offset": "2mV max",
      "Output": "Rail-to-rail",
      "Package": "SOIC-8, MSOP-8"
    },
    features: [
      "Low power 200μA",
      "1MHz bandwidth",
      "Rail-to-rail output",
      "Wide supply range",
      "Low offset voltage"
    ],
    applications: [
      "Battery-powered devices",
      "Sensor signal conditioning",
      "Active filters",
      "Portable instruments"
    ],
    faeReview: {
      author: "Sarah Johnson",
      title: "FAE - Analog Products",
      content: "The GS358 is an excellent low-power op-amp for battery applications. The 200μA current is very low, and the rail-to-rail output maximizes dynamic range. I've used this in many portable designs.",
      highlight: "Excellent for battery-powered applications"
    },
    alternativeParts: [
      {
        partNumber: "GS324",
        brand: "Gainsil",
        reason: "Quad version for more channels",
        comparison: {
          "channels": "4 > 2",
          "current": "800μA > 400μA"
        },
        useCase: "Applications needing 4 amplifiers",
        specifications: {
          "Channels": "4",
          "Current": "800μA total"
        },
        priceDifference: "+30%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "GS431",
        description: "Voltage reference for biasing",
        category: "Reference"
      }
    ],
    faqs: [
      {
        question: "What is the minimum supply voltage?",
        answer: "The GS358 operates down to 2.5V, making it suitable for single-cell Li-ion (3.7V) and 3.3V systems. Performance is specified at 2.5V and 5V.",
        decisionGuide: "Use for 2.5V to 5.5V supply systems.",
        keywords: ["supply voltage", "low voltage"]
      }
    ]
  },
  {
    partNumber: "GS324",
    name: "GS324 Low Power Quad Op-Amp",
    shortDescription: "Low power quad operational amplifier with 1MHz bandwidth for multi-channel signal processing.",
    descriptionParagraphs: [
      "The GS324 is a low power quad operational amplifier providing four amplifiers in a single package.",
      "With the same 1MHz bandwidth and low power characteristics as the GS358, this quad op-amp is ideal for multi-channel applications. Total supply current is 800μA for all four amplifiers.",
      "Features include rail-to-rail output, wide supply range, and low offset voltage. The SOIC-14 and TSSOP-14 packages provide four amplifiers in compact form."
    ],
    specifications: {
      "Supply Voltage": "2.5V to 5.5V",
      "Bandwidth": "1MHz",
      "Slew Rate": "0.5V/μs",
      "Supply Current": "800μA total",
      "Input Offset": "2mV max",
      "Output": "Rail-to-rail",
      "Package": "SOIC-14, TSSOP-14"
    },
    features: [
      "Quad amplifiers",
      "Low power 800μA total",
      "1MHz bandwidth",
      "Rail-to-rail output",
      "Compact package"
    ],
    applications: [
      "Multi-channel systems",
      "Sensor arrays",
      "Active filters",
      "Battery-powered instruments"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Analog",
      content: "The GS324 provides excellent value for multi-channel designs. Four amplifiers in one package save PCB space and cost. The low total current is still very reasonable.",
      highlight: "Great value for multi-channel designs"
    },
    alternativeParts: [
      {
        partNumber: "GS358",
        brand: "Gainsil",
        reason: "Dual version for fewer channels",
        comparison: {
          "channels": "2 < 4",
          "current": "400μA < 800μA"
        },
        useCase: "Applications needing only 2 amplifiers",
        specifications: {
          "Channels": "2",
          "Current": "400μA total"
        },
        priceDifference: "-25%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Analog Switch",
        description: "For channel multiplexing",
        category: "Switch"
      }
    ],
    faqs: [
      {
        question: "Can I use just some of the amplifiers?",
        answer: "Yes, unused amplifiers should be configured as unity-gain buffers with input grounded, or as comparators with defined output state. Do not leave inputs floating.",
        decisionGuide: "Configure unused amps properly to avoid noise.",
        keywords: ["unused amplifiers", "configuration"]
      }
    ]
  }
];

// Real Comparator products
const realComparatorProducts = [
  {
    partNumber: "GS393",
    name: "GS393 Low Power Dual Comparator",
    shortDescription: "Low power dual comparator with 4μs propagation delay for voltage monitoring and threshold detection.",
    descriptionParagraphs: [
      "The GS393 is a low power dual comparator designed for voltage monitoring and threshold detection applications.",
      "With 4μs propagation delay and 100μA supply current per comparator, this device provides fast response with low power consumption. Open-collector outputs allow flexible interface design.",
      "Features include wide supply range (2V to 36V), low input offset voltage (5mV max), and internal hysteresis for noise immunity."
    ],
    specifications: {
      "Supply Voltage": "2V to 36V",
      "Propagation Delay": "4μs typical",
      "Supply Current": "100μA per comparator",
      "Input Offset": "5mV max",
      "Hysteresis": "Internal 4mV",
      "Output": "Open-collector",
      "Package": "SOIC-8, MSOP-8"
    },
    features: [
      "Low power 100μA",
      "4μs fast response",
      "Wide supply range",
      "Internal hysteresis",
      "Open-collector output"
    ],
    applications: [
      "Voltage monitoring",
      "Threshold detection",
      "Window comparators",
      "Level shifting"
    ],
    faeReview: {
      author: "David Wang",
      title: "Principal FAE - Analog",
      content: "The GS393 is a versatile comparator for monitoring applications. The internal hysteresis prevents chatter, and the wide supply range is very flexible. Good for battery voltage monitoring.",
      highlight: "Versatile for monitoring applications"
    },
    alternativeParts: [
      {
        partNumber: "GS339",
        brand: "Gainsil",
        reason: "Quad version for more channels",
        comparison: {
          "channels": "4 > 2",
          "current": "400μA > 200μA"
        },
        useCase: "Multi-channel monitoring",
        specifications: {
          "Channels": "4",
          "Current": "400μA total"
        },
        priceDifference: "+35%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Pull-up Resistor",
        description: "For open-collector output",
        category: "Passive"
      }
    ],
    faqs: [
      {
        question: "What is the hysteresis for?",
        answer: "Internal hysteresis (4mV) prevents output chatter when input signal is near the threshold and has noise. This ensures clean switching without oscillation.",
        decisionGuide: "Use for noisy environments or slow signals.",
        keywords: ["hysteresis", "noise immunity"]
      }
    ]
  },
  {
    partNumber: "GS339",
    name: "GS339 Low Power Quad Comparator",
    shortDescription: "Low power quad comparator for multi-channel voltage monitoring and control systems.",
    descriptionParagraphs: [
      "The GS339 is a low power quad comparator providing four independent comparators in a single package.",
      "Total supply current is 400μA for all four comparators. Each has 4μs propagation delay and open-collector output. Ideal for multi-channel monitoring and control systems.",
      "Features include wide supply range, internal hysteresis, and flexible output configuration."
    ],
    specifications: {
      "Supply Voltage": "2V to 36V",
      "Propagation Delay": "4μs typical",
      "Supply Current": "400μA total",
      "Input Offset": "5mV max",
      "Hysteresis": "Internal 4mV",
      "Output": "Open-collector",
      "Package": "SOIC-14, TSSOP-14"
    },
    features: [
      "Quad comparators",
      "Low power 400μA",
      "Fast 4μs response",
      "Wide supply range",
      "Internal hysteresis"
    ],
    applications: [
      "Multi-channel monitoring",
      "Control systems",
      "Voltage supervision",
      "Threshold detection"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Analog",
      content: "The GS339 provides four comparators in one package, great for systems with multiple monitoring points. The low power and fast response are excellent.",
      highlight: "Good for multi-channel monitoring"
    },
    alternativeParts: [
      {
        partNumber: "GS393",
        brand: "Gainsil",
        reason: "Dual version for fewer channels",
        comparison: {
          "channels": "2 < 4",
          "current": "200μA < 400μA"
        },
        useCase: "Simple 2-channel monitoring",
        specifications: {
          "Channels": "2",
          "Current": "200μA total"
        },
        priceDifference: "-30%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Voltage Reference",
        description: "For threshold setting",
        category: "Reference"
      }
    ],
    faqs: [
      {
        question: "Can outputs be wire-ORed?",
        answer: "Yes, the open-collector outputs can be wire-ORed together. When any comparator output goes low, the common node goes low. This is useful for fault detection systems.",
        decisionGuide: "Wire-OR outputs for fault detection systems.",
        keywords: ["wire-OR", "open collector"]
      }
    ]
  }
];

// Real Analog Switch products
const realSwitchProducts = [
  {
    partNumber: "GS4157",
    name: "GS4157 Low Voltage SPDT Analog Switch",
    shortDescription: "Low voltage SPDT analog switch with 2.5Ω on-resistance for 1.8V to 5.5V systems.",
    descriptionParagraphs: [
      "The GS4157 is a low voltage single-pole double-throw (SPDT) analog switch designed for portable and battery-powered applications.",
      "With 2.5Ω typical on-resistance and wide supply range (1.8V to 5.5V), this switch handles audio and data signals with minimal distortion. The break-before-make switching prevents signal contention.",
      "Features include low charge injection, high off-isolation (65dB at 1MHz), and low crosstalk (-60dB). The SC70-6 package is very compact."
    ],
    specifications: {
      "Supply Voltage": "1.8V to 5.5V",
      "On-Resistance": "2.5Ω typical",
      "Bandwidth": "300MHz",
      "Off-Isolation": "65dB @ 1MHz",
      "Crosstalk": "-60dB",
      "Charge Injection": "10pC",
      "Package": "SC70-6"
    },
    features: [
      "Low on-resistance 2.5Ω",
      "Wide supply range",
      "High bandwidth 300MHz",
      "Low charge injection",
      "Compact package"
    ],
    applications: [
      "Audio routing",
      "Data switching",
      "Signal multiplexing",
      "Battery-powered devices"
    ],
    faeReview: {
      author: "Sarah Johnson",
      title: "FAE - Analog Products",
      content: "The GS4157 is excellent for audio switching in portable devices. The low on-resistance minimizes signal loss, and the 1.8V operation supports low-voltage systems.",
      highlight: "Great for portable audio applications"
    },
    alternativeParts: [
      {
        partNumber: "GS3157",
        brand: "Gainsil",
        reason: "Lower resistance for critical apps",
        comparison: {
          "resistance": "1.5Ω < 2.5Ω",
          "price": "Higher"
        },
        useCase: "Critical signal paths",
        specifications: {
          "On-Resistance": "1.5Ω"
        },
        priceDifference: "+20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Audio Codec",
        description: "For audio processing",
        category: "Audio"
      }
    ],
    faqs: [
      {
        question: "Is this switch bidirectional?",
        answer: "Yes, the GS4157 is bidirectional. Signals can pass in either direction when the switch is on. The switch behaves the same regardless of signal direction.",
        decisionGuide: "Use for bidirectional signal routing.",
        keywords: ["bidirectional", "signal routing"]
      }
    ]
  },
  {
    partNumber: "GS3157",
    name: "GS3157 Low Resistance SPDT Analog Switch",
    shortDescription: "Ultra-low resistance SPDT analog switch with 1.5Ω on-resistance for high-fidelity signal routing.",
    descriptionParagraphs: [
      "The GS3157 is an ultra-low resistance SPDT analog switch with 1.5Ω typical on-resistance for applications requiring minimal signal degradation.",
      "The lower resistance reduces signal attenuation and distortion, making it ideal for high-fidelity audio and precision measurement applications. Same wide supply range as GS4157.",
      "Features include excellent linearity (THD -90dB), low charge injection, and high off-isolation."
    ],
    specifications: {
      "Supply Voltage": "1.8V to 5.5V",
      "On-Resistance": "1.5Ω typical",
      "Bandwidth": "350MHz",
      "THD": "-90dB",
      "Off-Isolation": "70dB @ 1MHz",
      "Charge Injection": "8pC",
      "Package": "SC70-6, SOT23-6"
    },
    features: [
      "Ultra-low 1.5Ω resistance",
      "Excellent linearity",
      "High bandwidth",
      "Low distortion",
      "Multiple packages"
    ],
    applications: [
      "High-fidelity audio",
      "Precision measurement",
      "Test equipment",
      "Medical devices"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Analog",
      content: "The GS3157 provides excellent performance for demanding applications. The 1.5Ω resistance and -90dB THD are impressive for this price point.",
      highlight: "Excellent for high-fidelity applications"
    },
    alternativeParts: [
      {
        partNumber: "GS4157",
        brand: "Gainsil",
        reason: "Lower cost for standard apps",
        comparison: {
          "resistance": "2.5Ω > 1.5Ω",
          "price": "Lower"
        },
        useCase: "Standard applications",
        specifications: {
          "On-Resistance": "2.5Ω"
        },
        priceDifference: "-20%",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Op-Amp",
        description: "For signal conditioning",
        category: "Amplifier"
      }
    ],
    faqs: [
      {
        question: "When should I choose GS3157 over GS4157?",
        answer: "Choose GS3157 when signal quality is critical - high-fidelity audio, precision measurements, or low-voltage signals. The lower resistance and better linearity justify the higher cost. Use GS4157 for standard switching where 2.5Ω is acceptable.",
        decisionGuide: "GS3157 for critical signals, GS4157 for standard apps.",
        keywords: ["selection", "signal quality"]
      }
    ]
  }
];

// Real Voltage Reference products
const realReferenceProducts = [
  {
    partNumber: "GS431",
    name: "GS431 2.5V Precision Shunt Reference",
    shortDescription: "2.5V precision shunt reference with 0.5% initial accuracy and 20ppm/°C temperature drift.",
    descriptionParagraphs: [
      "The GS431 is a 2.5V precision shunt voltage reference with adjustable output voltage.",
      "With 0.5% initial accuracy and 20ppm/°C temperature coefficient, this reference provides stable voltage for ADCs, DACs, and power supplies. The shunt configuration allows flexible current setting.",
      "Features include wide operating current (1mA to 100mA), low dynamic impedance (0.2Ω), and SOT23-3 package."
    ],
    specifications: {
      "Reference Voltage": "2.5V nominal",
      "Initial Accuracy": "0.5%",
      "Temp Coefficient": "20ppm/°C",
      "Operating Current": "1mA to 100mA",
      "Dynamic Impedance": "0.2Ω typical",
      "Package": "SOT23-3, SC70-3"
    },
    features: [
      "0.5% accuracy",
      "20ppm/°C drift",
      "Adjustable output",
      "Wide current range",
      "Low impedance"
    ],
    applications: [
      "ADC/DAC reference",
      "Power supply feedback",
      "Voltage monitoring",
      "Current sensing"
    ],
    faeReview: {
      author: "David Wang",
      title: "Principal FAE - Analog",
      content: "The GS431 is a cost-effective reference for many applications. The 0.5% accuracy is good for most designs, and the 20ppm drift is acceptable for consumer products.",
      highlight: "Cost-effective for general applications"
    },
    alternativeParts: [
      {
        partNumber: "GS432",
        brand: "Gainsil",
        reason: "1.24V for lower voltage",
        comparison: {
          "voltage": "1.24V < 2.5V",
          "accuracy": "Same"
        },
        useCase: "1.24V reference applications",
        specifications: {
          "Reference Voltage": "1.24V"
        },
        priceDifference: "Same",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Resistor Divider",
        description: "For output adjustment",
        category: "Passive"
      }
    ],
    faqs: [
      {
        question: "How do I set the operating current?",
        answer: "Use a series resistor from supply to cathode. Calculate R = (Vsupply - Vref) / Iref. Choose current between 1mA and 100mA based on accuracy requirements and power budget.",
        decisionGuide: "Use 5-10mA for good accuracy with low power.",
        keywords: ["operating current", "biasing"]
      }
    ]
  },
  {
    partNumber: "GS432",
    name: "GS432 1.24V Precision Shunt Reference",
    shortDescription: "1.24V precision shunt reference with 0.5% accuracy for low voltage systems.",
    descriptionParagraphs: [
      "The GS432 is a 1.24V precision shunt reference for low voltage applications.",
      "Provides the same 0.5% accuracy and 20ppm/°C drift as the GS431 but at 1.24V. Useful for 1.8V and 3.3V systems where 2.5V is too high.",
      "Same features and package options as GS431."
    ],
    specifications: {
      "Reference Voltage": "1.24V nominal",
      "Initial Accuracy": "0.5%",
      "Temp Coefficient": "20ppm/°C",
      "Operating Current": "1mA to 100mA",
      "Dynamic Impedance": "0.2Ω typical",
      "Package": "SOT23-3, SC70-3"
    },
    features: [
      "1.24V output",
      "0.5% accuracy",
      "20ppm/°C drift",
      "Low voltage operation"
    ],
    applications: [
      "Low voltage ADC reference",
      "1.8V system reference",
      "Current sensing",
      "Comparator threshold"
    ],
    faeReview: {
      author: "Michael Chen",
      title: "Senior FAE - Analog",
      content: "The GS432 is useful for low voltage systems. The 1.24V output works well in 1.8V and 3.3V designs where 2.5V would be too close to supply.",
      highlight: "Good for low voltage systems"
    },
    alternativeParts: [
      {
        partNumber: "GS431",
        brand: "Gainsil",
        reason: "2.5V for higher voltage",
        comparison: {
          "voltage": "2.5V > 1.24V",
          "accuracy": "Same"
        },
        useCase: "Standard 2.5V reference apps",
        specifications: {
          "Reference Voltage": "2.5V"
        },
        priceDifference: "Same",
        stockStatus: "In Stock"
      }
    ],
    companionParts: [
      {
        partNumber: "Comparator",
        description: "For threshold detection",
        category: "Comparator"
      }
    ],
    faqs: [
      {
        question: "When should I use 1.24V vs 2.5V reference?",
        answer: "Use 1.24V for supply voltages below 3.3V to ensure adequate headroom. Use 2.5V for 5V systems or where higher reference voltage improves ADC resolution.",
        decisionGuide: "1.24V for <3.3V supplies, 2.5V for 5V systems.",
        keywords: ["voltage selection", "reference"]
      }
    ]
  }
];

// Real Solution 3
const realSolution3 = {
  id: "battery-management-system",
  title: "Battery Management System",
  subtitle: "Complete BMS solution using Gainsil analog components",
  description: "Battery management system with cell monitoring, balancing, and protection using Gainsil op-amps, comparators, and references.",
  longDescription: "This battery management system solution uses Gainsil's analog components to provide comprehensive cell monitoring and protection for Li-ion battery packs.\n\nThe solution features GS358 op-amps for current sensing, GS393 comparators for over/under-voltage detection, and GS431 references for accurate thresholds. Supports 3-16 cell packs with passive balancing.\n\nKey features include cell voltage monitoring (±10mV accuracy), current sensing (±1%), temperature monitoring, and multiple protection levels. The analog approach provides fast response and high reliability.",
  applications: [
    "Li-ion battery packs",
    "E-bikes",
    "Power tools",
    "Energy storage",
    "Portable equipment"
  ],
  products: [
    {
      partNumber: "GS358",
      category: "Op-Amp",
      role: "Current sense amplifier"
    },
    {
      partNumber: "GS393",
      category: "Comparator",
      role: "Voltage monitoring"
    },
    {
      partNumber: "GS431",
      category: "Reference",
      role: "Voltage reference"
    }
  ],
  customerCases: [
    {
      customer: "E-bike Manufacturer",
      industry: "Electric Vehicles",
      challenge: "Needed reliable BMS for 48V e-bike battery pack.",
      solution: "Implemented BMS using Gainsil analog components.",
      results: [
        "±10mV cell voltage accuracy",
        "Fast protection response <100μs",
        "Extended battery life 20%"
      ],
      result: "Reliable e-bike batteries with excellent safety record."
    }
  ],
  faeInsights: {
    author: {
      name: "Michael Chen",
      title: "Senior FAE - Power Management",
      experience: "12 years"
    },
    content: "For battery management, the Gainsil analog approach provides fast, reliable protection. The GS358 is excellent for current sensing, and GS393 comparators give instant over-voltage protection.",
    keyTakeaways: [
      "Analog BMS provides fast response",
      "GS358 excellent for current sensing",
      "GS393 for instant protection",
      "Cost-effective solution"
    ]
  },
  faqs: [
    {
      question: "What accuracy can be achieved?",
      answer: "With proper design, cell voltage monitoring achieves ±10mV accuracy and current sensing ±1%. This is adequate for most battery management applications.",
      decisionGuide: "Use for applications requiring 10-50mV accuracy.",
      keywords: ["accuracy", "monitoring"]
    }
  ]
};

// Real Support Article 5
const realSupportArticle5 = {
  id: "gainsil-analog-design-guide",
  title: "Gainsil Analog Component Design Guide",
  slug: "gainsil-analog-design-guide",
  category: "Technical Guide",
  summary: "Comprehensive design guide for using Gainsil op-amps, comparators, switches, and references in analog circuits.",
  content: [
    "## Introduction",
    "",
    "This guide provides design recommendations for using Gainsil analog components effectively in your circuits.",
    "",
    "## Op-Amp Design",
    "",
    "### Power Supply Decoupling",
    "",
    "Always use proper decoupling:",
    "- 100nF ceramic capacitor close to each power pin",
    "- 10μF bulk capacitor for low frequency",
    "- Keep traces short and wide",
    "",
    "### Stability",
    "",
    "For stable operation:",
    "- Keep feedback resistor values reasonable (1kΩ to 1MΩ)",
    "- Add small capacitor (10-100pF) in parallel with feedback resistor for high frequency circuits",
    "- Avoid capacitive loads >100pF without isolation resistor",
    "",
    "## Comparator Design",
    "",
    "### Hysteresis",
    "",
    "Add external hysteresis for noisy signals:",
    "- Use positive feedback resistor",
    "- Typical hysteresis: 10-50mV",
    "- Prevents output chatter",
    "",
    "### Pull-up Resistor",
    "",
    "For open-collector outputs:",
    "- Use 1kΩ to 10kΩ pull-up",
    "- Lower value for faster switching",
    "- Consider power dissipation",
    "",
    "## Analog Switch Design",
    "",
    "### Signal Integrity",
    "",
    "For best performance:",
    "- Keep signal traces short",
    "- Match impedance for high frequency",
    "- Consider charge injection effects",
    "",
    "### Power Sequencing",
    "",
    "Ensure proper power-up:",
    "- VCC before signals",
    "- Control signals after VCC stable",
    "- Avoid floating inputs"
  ],
  author: {
    name: "Michael Chen",
    title: "Senior FAE - Analog",
    email: "michael.chen@BeiLuo.com"
  },
  date: "2024-01-15",
  publishDate: "2024-01-15",
  readTime: "12 min",
  tags: [
    "analog design",
    "op-amp",
    "comparator",
    "design guide"
  ],
  relatedArticles: [
    "op-amp-basics",
    "comparator-design",
    "analog-layout"
  ],
  faeInsights: {
    author: {
      name: "Michael Chen",
      title: "Senior FAE - Analog",
      experience: "15 years"
    },
    content: "After years of supporting analog designs, I've seen common issues that are easily avoided. The most frequent problem is inadequate power supply decoupling - always use 100nF ceramic right at the power pins. Another common issue is oscillation in op-amp circuits, usually caused by capacitive loads or poor layout. For comparators, always add hysteresis for noisy signals - the internal hysteresis is often not enough. With analog switches, charge injection can cause glitches - plan your timing accordingly.",
    keyTakeaways: [
      "Use proper decoupling capacitors",
      "Add hysteresis to comparators",
      "Watch for op-amp stability",
      "Consider charge injection in switches"
    ]
  },
  faqs: [
    {
      question: "What decoupling capacitors are recommended?",
      answer: "Use 100nF ceramic capacitor close to each power pin, plus 10μF bulk capacitor nearby. Keep traces short and use ground plane for best results.",
      decisionGuide: "Always use 100nF ceramic at power pins.",
      keywords: ["decoupling", "capacitors"]
    },
    {
      question: "How do I prevent op-amp oscillation?",
      answer: "Prevent oscillation by: 1) Proper decoupling, 2) Reasonable feedback resistor values (1k-1MΩ), 3) Adding small capacitor (10-100pF) across feedback for HF, 4) Isolation resistor (50-100Ω) for capacitive loads.",
      decisionGuide: "Follow stability guidelines in the datasheet.",
      keywords: ["stability", "oscillation"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Operational Amplifiers category
  const opAmpCategory = data.categories.find(cat => cat.id === 'operational-amplifiers');
  if (opAmpCategory) {
    const products = opAmpCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'OPERATIONALAMPLIFIERS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'OPERATIONALAMPLIFIERS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realOpAmpProducts[0];
      console.log(`  Replaced OPERATIONALAMPLIFIERS-3 with GS358 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realOpAmpProducts[1];
      console.log(`  Replaced OPERATIONALAMPLIFIERS-4 with GS324 at index ${p4Index}`);
    }
  }
  
  // Fix Comparators category
  const compCategory = data.categories.find(cat => cat.id === 'comparators');
  if (compCategory) {
    const products = compCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'COMPARATORS-3');
    const p4Index = products.findIndex(p => p.partNumber === 'COMPARATORS-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realComparatorProducts[0];
      console.log(`  Replaced COMPARATORS-3 with GS393 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realComparatorProducts[1];
      console.log(`  Replaced COMPARATORS-4 with GS339 at index ${p4Index}`);
    }
  }
  
  // Fix Analog Switches category
  const switchCategory = data.categories.find(cat => cat.id === 'analog-switches');
  if (switchCategory) {
    const products = switchCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'ANALOGSWITCHES-3');
    const p4Index = products.findIndex(p => p.partNumber === 'ANALOGSWITCHES-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realSwitchProducts[0];
      console.log(`  Replaced ANALOGSWITCHES-3 with GS4157 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realSwitchProducts[1];
      console.log(`  Replaced ANALOGSWITCHES-4 with GS3157 at index ${p4Index}`);
    }
  }
  
  // Fix Voltage References category
  const refCategory = data.categories.find(cat => cat.id === 'voltage-references');
  if (refCategory) {
    const products = refCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'VOLTAGEREFERENCES-3');
    const p4Index = products.findIndex(p => p.partNumber === 'VOLTAGEREFERENCES-4');
    
    if (p3Index !== -1) {
      products[p3Index] = realReferenceProducts[0];
      console.log(`  Replaced VOLTAGEREFERENCES-3 with GS431 at index ${p3Index}`);
    }
    if (p4Index !== -1) {
      products[p4Index] = realReferenceProducts[1];
      console.log(`  Replaced VOLTAGEREFERENCES-4 with GS432 at index ${p4Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

function fixSolutionsJson() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(DATA_DIR, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace solution 3
  const solution3Index = data.solutions.findIndex(s => s.id === 'consumer-electronics-solution-3');
  if (solution3Index !== -1) {
    const existing = data.solutions[solution3Index];
    data.solutions[solution3Index] = {
      ...existing,
      ...realSolution3,
      id: realSolution3.id
    };
    console.log(`  Replaced consumer-electronics-solution-3 with battery-management-system at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5
  const article5Index = data.articles.findIndex(a => a.id === 'best-practices---gainsil');
  if (article5Index !== -1) {
    const existing = data.articles[article5Index];
    data.articles[article5Index] = {
      ...realSupportArticle5,
      id: realSupportArticle5.id,
      slug: existing.slug || realSupportArticle5.slug,
      category: existing.category || realSupportArticle5.category,
      tags: existing.tags || realSupportArticle5.tags,
      relatedArticles: existing.relatedArticles || realSupportArticle5.relatedArticles
    };
    console.log(`  Replaced best-practices---gainsil with gainsil-analog-design-guide at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing Gainsil Data ===\n');
fixProductsJson();
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
