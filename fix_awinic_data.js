const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'awinic');
const productsPath = path.join(dataDir, 'products.json');
const solutionsPath = path.join(dataDir, 'solutions.json');

// Read files
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
let solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix product FAQs - add decisionGuide and keywords
products.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.faqs) {
      product.faqs.forEach(faq => {
        if (!faq.decisionGuide) {
          faq.decisionGuide = "Contact our FAE team for personalized recommendations based on your specific application requirements.";
        }
        if (!faq.keywords || faq.keywords.length === 0) {
          faq.keywords = ["awinic", product.partNumber.toLowerCase(), category.id.replace('-', ' ')];
        }
      });
    }
  });
});

// Fix Solution 4: Awinic Solution 4
const solution4 = solutions.solutions.find(s => s.id === 'awinic-solution-4');
if (solution4) {
  solution4.title = "Smart IoT Sensor Hub Solution";
  solution4.subtitle = "Complete sensor interface and wireless connectivity solution for IoT edge devices";
  solution4.description = "Comprehensive IoT solution featuring Awinic's audio, power, and RF components for smart sensor hubs with voice activation and wireless connectivity.";
  solution4.longDescription = "The Smart IoT Sensor Hub Solution leverages Awinic's diverse analog and mixed-signal portfolio to create intelligent edge devices for IoT applications. This solution combines high-quality audio processing for voice activation, efficient power management for battery operation, and robust RF connectivity for reliable wireless communication.\n\nAt the core of this solution is a carefully selected combination of Awinic components optimized for low-power IoT applications. The AW87318 Class-D audio amplifier enables voice prompt playback and voice recognition wake-word detection. The AW3320 power management IC provides efficient battery charging and multiple regulated supplies for sensors and wireless modules. The AW5012 RF front-end ensures reliable wireless connectivity in crowded spectrum environments.\n\nKey features include: voice activation with always-on microphone processing, multi-sensor interface supporting temperature, humidity, motion, and environmental sensors, Wi-Fi and Bluetooth connectivity with optimized RF performance, battery operation with intelligent power management extending life to 2+ years, and compact design suitable for smart home and industrial IoT applications.\n\nThis solution is ideal for smart home hubs, industrial sensor nodes, environmental monitors, and voice-controlled IoT devices requiring reliable operation and long battery life.";

  solution4.benefits = [
    "Voice activation enables hands-free control and natural user interaction",
    "Multi-sensor interface supports diverse environmental and motion sensing applications",
    "Optimized RF front-end ensures reliable wireless connectivity in challenging environments",
    "Intelligent power management extends battery life to 2+ years for maintenance-free operation",
    "Compact integration reduces system size and cost for space-constrained IoT devices",
    "Complete hardware and software support accelerates time-to-market"
  ];

  solution4.coreAdvantages = [
    {
      "title": "Always-On Voice Processing",
      "description": "Low-power voice activation with <100μA current consumption enables always-on wake-word detection. High-efficiency Class-D amplifier provides clear audio feedback with minimal power impact."
    },
    {
      "title": "Multi-Sensor Integration",
      "description": "Flexible sensor interface supports I2C, SPI, and analog sensors. Integrated ADC with programmable gain enables direct connection to various environmental and motion sensors without external components."
    },
    {
      "title": "Optimized RF Performance",
      "description": "High-linearity RF front-end with integrated filtering minimizes interference in crowded 2.4GHz spectrum. Adaptive impedance matching maintains performance across temperature and voltage variations."
    },
    {
      "title": "Intelligent Power Management",
      "description": "Multi-rail power management with dynamic voltage scaling optimizes efficiency across operating modes. Battery charger supports Li-Ion and Li-Polymer chemistries with JEITA safety compliance."
    },
    {
      "title": "Rapid Development Support",
      "description": "Complete reference design with schematics, PCB layout, and software examples reduces development time. FAE support includes sensor integration assistance and RF optimization guidance."
    }
  ];

  solution4.bomList = [
    {
      "category": "Audio Processing",
      "items": [
        {
          "partNumber": "AW87318",
          "description": "Class-D audio amplifier for voice prompts and feedback",
          "quantity": 1,
          "specifications": "5.5W, I2S input, <0.1% THD"
        },
        {
          "partNumber": "AW8737",
          "description": "Smart PA for voice recognition wake-word processing",
          "quantity": 1,
          "specifications": "Boost converter integrated, 4.5W, low EMI"
        }
      ]
    },
    {
      "category": "Power Management",
      "items": [
        {
          "partNumber": "AW3320",
          "description": "Multi-channel PMIC for battery and system power",
          "quantity": 1,
          "specifications": "3 buck, 2 LDO, battery charger, I2C control"
        },
        {
          "partNumber": "AW3710",
          "description": "Low-noise LDO for sensor analog power",
          "quantity": 1,
          "specifications": "300mA, <20μVrms noise, high PSRR"
        }
      ]
    },
    {
      "category": "RF Connectivity",
      "items": [
        {
          "partNumber": "AW5012",
          "description": "2.4GHz RF front-end for Wi-Fi/Bluetooth",
          "quantity": 1,
          "specifications": "High linearity, integrated filtering, low noise"
        }
      ]
    }
  ];

  solution4.technicalSpecs = {
    "Audio Output": "5.5W Class-D amplifier",
    "Voice Activation": "<100μA always-on power",
    "Battery Life": "2+ years (2xAA Li-Ion)",
    "Sensor Interface": "I2C, SPI, Analog (4 channels)",
    "Wireless": "Wi-Fi + Bluetooth 5.0",
    "Operating Temperature": "-20°C to +60°C",
    "Standby Power": "<50μA with wake-on-sensor"
  };

  solution4.customerCases = [
    {
      "customerName": "Smart Home Device Manufacturer",
      "industry": "Consumer IoT",
      "application": "Voice-Controlled Sensor Hub",
      "challenge": "Needed compact, battery-powered hub with voice activation and multi-sensor support for smart home system",
      "solution": "Implemented Awinic audio, power, and RF solution with integrated voice processing",
      "results": "Achieved 18-month battery life, 95% voice recognition accuracy, 30% cost reduction vs discrete solution",
      "feedback": "The integrated solution from Awinic simplified our design and enabled features we couldn't achieve with discrete components.",
      "result": "Product launched successfully with 100K units shipped in first year"
    },
    {
      "customerName": "Industrial Monitoring Company",
      "industry": "Industrial IoT",
      "application": "Environmental Sensor Node",
      "challenge": "Required reliable wireless sensor node for factory environmental monitoring with 2-year battery life",
      "solution": "Used Awinic power management and RF front-end with external MCU and sensors",
      "results": "Achieved 24-month battery life, 99.5% wireless reliability in industrial environment",
      "feedback": "The power management efficiency and RF performance exceeded our requirements for industrial deployment.",
      "result": "Deployed 5000+ nodes across manufacturing facilities with minimal maintenance"
    }
  ];

  solution4.faeInsights = {
    "author": {
      "name": "Senior FAE",
      "title": "IoT Applications Engineer",
      "experience": "10 years"
    },
    "insight": "In my experience supporting IoT sensor hub designs, power management and RF integration are the critical challenges. The Awinic solution offers an excellent balance of performance and integration for battery-powered IoT devices. Key design considerations include: power sequencing - ensure proper startup sequence for reliable operation; RF layout - follow reference design closely for optimal wireless performance; and sensor interface - use shielded cables for analog sensors to minimize noise. For voice applications, microphone placement and acoustic design are as important as the electronics. I always recommend prototyping with the reference design before customizing, as this validates the baseline performance and identifies any application-specific issues early.",
    "logic": "The Smart IoT Sensor Hub Solution combines Awinic's analog and RF expertise with IoT system design best practices. The decision framework prioritizes power efficiency and wireless reliability while maintaining flexibility for diverse sensor applications. System design starts with defining sensor requirements and duty cycle, then optimizing power management and RF performance.",
    "keyTakeaways": [
      "Follow reference design PCB layout closely for optimal RF performance",
      "Implement proper power sequencing with appropriate delays between rails",
      "Use shielded cables and proper grounding for analog sensor connections",
      "Optimize voice recognition with proper microphone placement and acoustic design",
      "Validate battery life with actual duty cycle measurements, not just calculations"
    ],
    "commonPitfalls": [
      "Inadequate power supply decoupling causing noise issues with sensitive sensors",
      "Poor RF layout resulting in reduced wireless range and reliability",
      "Insufficient thermal management leading to overheating in compact enclosures",
      "Overlooking battery self-discharge in long-life calculations",
      "Inadequate ESD protection for user-accessible connectors"
    ],
    "bestPractices": [
      "Use 4-layer PCB with dedicated ground plane for optimal performance",
      "Implement comprehensive power sequencing with programmable delays",
      "Follow RF layout guidelines including via fencing and impedance control",
      "Include test points for all power rails and critical signals",
      "Design for manufacturing with accessible programming and test interfaces"
    ],
    "content": "Based on extensive experience in IoT sensor hub applications, I recommend this solution for any battery-powered IoT device requiring audio, sensors, and wireless connectivity. The integration level significantly reduces development time while meeting demanding power and performance requirements. Early engagement with our FAE team can help optimize the design for your specific application.",
    "decisionFramework": {
      "title": "IoT Sensor Hub Design Framework",
      "steps": [
        "Define sensor requirements, sampling rates, and duty cycle",
        "Calculate power budget and battery life requirements",
        "Select wireless protocol based on range and data rate needs",
        "Design PCB following reference layout for RF and power sections",
        "Implement power sequencing and sensor interface circuits",
        "Optimize voice processing with acoustic design if applicable",
        "Validate battery life and wireless performance with prototypes"
      ],
      "decisionPoints": [
        "Sensor types and interface requirements (I2C, SPI, analog)",
        "Wireless protocol selection (Wi-Fi, Bluetooth, Zigbee, LoRa)",
        "Battery chemistry and capacity based on life requirements",
        "Voice activation requirements and microphone configuration",
        "Enclosure design for thermal management and RF performance"
      ]
    }
  };

  solution4.faqs = [
    {
      "question": "What battery life can I expect with the Smart IoT Sensor Hub Solution?",
      "answer": "Battery life depends heavily on duty cycle and sensor configuration. Typical performance: (1) Always-on voice activation only - 12-18 months on 2xAA Li-Ion; (2) Voice + environmental sensors (1 reading/hour) - 18-24 months; (3) Voice + motion detection + sensors - 12-15 months. Key factors affecting battery life: sensor sampling frequency, wireless transmission duty cycle, voice processing activity, and battery self-discharge. The AW3320 PMIC includes multiple power modes to optimize efficiency. For maximum battery life, implement aggressive duty cycling with the lowest acceptable sensor sampling rate. Use the power calculator tool provided by Awinic to estimate battery life for your specific use case.",
      "decisionGuide": "Expect 12-24 months battery life depending on duty cycle. Use power calculator tool for accurate estimates.",
      "keywords": ["battery life", "power consumption", "duty cycle", "IoT sensors"]
    },
    {
      "question": "How do I optimize voice recognition performance?",
      "answer": "Voice recognition performance depends on both hardware and acoustic design: (1) Microphone selection - use digital MEMS microphone with good SNR (>65dB); (2) Microphone placement - position away from speaker to minimize acoustic feedback; (3) Acoustic design - include sound ports and acoustic isolation in enclosure design; (4) Signal processing - use beamforming with multiple microphones for noise rejection; (5) Wake-word tuning - optimize detection threshold for your environment. The AW87318 provides clean audio output for voice prompts, while the AW8737 offers low-noise microphone amplification. For best results, work with microphone supplier on acoustic design and follow Awinic's reference design for audio circuit layout. Test voice recognition in actual deployment environment with expected background noise levels.",
      "decisionGuide": "Use quality digital MEMS microphone, optimize acoustic design, and test in actual environment.",
      "keywords": ["voice recognition", "microphone", "acoustic design", "wake word"]
    },
    {
      "question": "What wireless range can I achieve with the AW5012 RF front-end?",
      "answer": "Wireless range depends on multiple factors: (1) Protocol - Wi-Fi typically 50-100m indoors, Bluetooth 10-30m; (2) Environment - walls and interference reduce range significantly; (3) Antenna design - proper matching and placement critical; (4) Data rate - lower rates provide longer range; (5) Output power - regulatory limits vary by region. With AW5012 and proper antenna design: Wi-Fi 802.11n (MCS0) achieves 100m+ line-of-sight, 30-50m indoors; Bluetooth 5.0 with LE Coded PHY achieves 200m+ line-of-sight. For extended range, consider external PA or directional antennas. The AW5012's high linearity helps maintain performance in crowded 2.4GHz environments. Always certify final design for regulatory compliance in target markets.",
      "decisionGuide": "Expect 30-50m indoor Wi-Fi range with proper antenna design. Test in actual deployment environment.",
      "keywords": ["wireless range", "RF performance", "Wi-Fi", "Bluetooth", "antenna"]
    },
    {
      "question": "How do I interface different types of sensors to the solution?",
      "answer": "The solution supports multiple sensor interface types: (1) I2C sensors - direct connection to AW3320 I2C bus, supports multiple devices with different addresses; (2) SPI sensors - high-speed interface for data-intensive sensors like image sensors; (3) Analog sensors - use AW3710 LDO for clean analog reference, AW3320 ADC for conversion; (4) Digital sensors - GPIO with interrupt support for PIR, Hall effect sensors. For each sensor type: I2C - ensure unique addresses, use 4.7kΩ pull-ups; SPI - keep traces short for high-speed operation; Analog - use shielded cables, proper grounding; Digital - implement debouncing in software. The reference design includes examples for temperature, humidity, motion, and light sensors. Contact FAE for guidance on specific sensor integration.",
      "decisionGuide": "Use I2C for most sensors, SPI for high-speed, analog with proper shielding. Follow reference design examples.",
      "keywords": ["sensor interface", "I2C", "SPI", "analog sensors", "sensor integration"]
    },
    {
      "question": "What certifications are required for IoT products using this solution?",
      "answer": "Required certifications vary by target markets and wireless protocols: (1) RF regulatory - FCC (USA), CE (Europe), SRRC (China), TELEC (Japan) for wireless transmitters; (2) Safety - UL, CE, CCC depending on voltage and application; (3) Environmental - RoHS, REACH, WEEE for materials compliance; (4) Battery - UN38.3 for lithium battery transportation, IEC 62133 for safety. The AW5012 RF front-end is pre-certified for FCC and CE when used with reference antenna design. Awinic provides test reports and documentation to support certification. Plan 2-3 months for certification process including testing and documentation review. Budget $10K-50K depending on number of certifications and test lab selection. Contact FAE for certification support and recommended test labs.",
      "decisionGuide": "Plan for FCC/CE RF certification, safety, and environmental compliance. Budget $10K-50K and 2-3 months.",
      "keywords": ["certification", "FCC", "CE", "RF regulatory", "safety compliance"]
    }
  ];

  console.log('Fixed Solution 4: Smart IoT Sensor Hub Solution');
}

// Write back
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('\nFixed awinic data successfully!');
