const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'aowei');
const solutionsPath = path.join(dataDir, 'solutions.json');

// Read solutions.json
let solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix Solution 3: Renewable Energy Storage Solution
const solution3 = solutions.solutions.find(s => s.id === 'renewable-energy-storage');
if (solution3) {
  // Add more customer cases
  solution3.customerCases = [
    {
      "customerName": "Solar Farm Operator",
      "industry": "Renewable Energy",
      "application": "Grid-Scale Solar Storage",
      "challenge": "Needed energy storage with long life and rapid response for grid stabilization. Battery systems required frequent replacement and had slow response times.",
      "solution": "Implemented Aowei supercapacitor storage system with 500kWh capacity and integrated monitoring for real-time performance tracking.",
      "results": "Achieved >99% availability with zero capacity degradation over 3 years. Response time under 100ms for grid frequency regulation.",
      "feedback": "The supercapacitor solution eliminated our battery replacement concerns and provided superior grid stabilization performance.",
      "result": "Successful grid integration with minimal maintenance requirements and 40% reduction in total cost of ownership."
    },
    {
      "customerName": "Wind Energy Developer",
      "industry": "Renewable Energy",
      "application": "Wind Turbine Pitch Control",
      "challenge": "Pitch control system backup power needed high reliability and instant response for emergency blade positioning during grid failures.",
      "solution": "Deployed Aowei 48V supercapacitor modules as backup power for pitch control systems across 50 wind turbines.",
      "results": "100% reliability in emergency operations over 2 years. Eliminated battery maintenance and replacement costs.",
      "feedback": "Supercapacitor backup provides peace of mind with instant response and zero maintenance requirements.",
      "result": "Improved turbine availability by 2% and reduced maintenance costs by €150,000 annually."
    }
  ];

  // Expand FAE insights
  solution3.faeInsights = {
    "author": {
      "name": "Dr. Michael Chen",
      "title": "Senior FAE - Energy Storage",
      "experience": "12 years",
      "expertise": ["Energy Storage", "Renewable Energy", "Power Systems"]
    },
    "insight": "Based on my 12 years of experience in energy storage systems, I have found that supercapacitors excel in renewable energy applications requiring high cycle life and rapid response. The key to successful implementation is proper sizing for the specific application requirements, considering both power and energy needs. Unlike batteries, supercapacitors can handle unlimited deep discharge cycles without degradation, making them ideal for frequency regulation and short-term power smoothing applications.",
    "logic": "The Renewable Energy Storage Solution combines Aowei's high-performance supercapacitor technology with system-level integration expertise. The decision framework starts with analyzing the duty cycle and power requirements, then selecting appropriate modules and configuring the system for optimal performance. Critical factors include voltage matching, thermal management, and monitoring system design.",
    "keyTakeaways": [
      "Size system for power requirements first, then verify energy capacity meets backup time needs",
      "Consider duty cycle and temperature effects on performance in the design phase",
      "Plan for future expansion with modular architecture to protect investment",
      "Implement comprehensive monitoring for predictive maintenance and performance optimization",
      "Design for 20-year service life with proper derating and thermal management"
    ],
    "commonPitfalls": [
      "Undersizing for peak power demands - always include 20-30% safety margin",
      "Ignoring temperature effects on ESR and capacitance",
      "Inadequate monitoring and protection systems leading to premature failure",
      "Poor thermal design causing accelerated aging in high-temperature environments"
    ],
    "bestPractices": [
      "Conduct thorough load analysis including peak power and duty cycle",
      "Include safety margins in voltage, current, and temperature ratings",
      "Implement cell-level monitoring for early fault detection",
      "Design modular systems for easy maintenance and future expansion",
      "Validate design through accelerated life testing before deployment"
    ],
    "content": "Based on extensive field experience in renewable energy applications, I recommend this solution for any application requiring high cycle life, rapid response, and minimal maintenance. The key is proper system sizing and thermal management. Always oversize by 20-30% for power requirements and ensure adequate cooling for continuous operation.",
    "decisionFramework": {
      "title": "Renewable Energy Storage Selection Framework",
      "steps": [
        "Analyze power and energy requirements including peak power and backup time",
        "Determine duty cycle and cycling frequency for sizing calculations",
        "Select appropriate supercapacitor modules based on voltage and capacitance",
        "Design monitoring and protection system for safe operation",
        "Implement thermal management for expected operating conditions",
        "Validate system performance through testing before deployment"
      ],
      "decisionPoints": [
        "Power rating vs system requirements with safety margin",
        "Capacitance sizing for required backup time at load current",
        "Thermal management approach for operating environment",
        "Monitoring granularity - system-level vs cell-level monitoring",
        "Redundancy requirements for critical applications"
      ]
    }
  };

  // Add more FAQs
  solution3.faqs = [
    {
      "question": "How does supercapacitor storage compare to batteries for renewable energy applications?",
      "answer": "Supercapacitors offer several advantages over batteries for specific renewable energy applications. They provide unlimited cycle life (500,000+ vs 3,000-5,000 for batteries), rapid response time (<100ms vs seconds for batteries), and excellent performance across wide temperature ranges (-40°C to +65°C). However, supercapacitors have lower energy density, making them ideal for short-duration, high-cycle applications like power smoothing and frequency regulation rather than long-term energy storage. For applications requiring 4+ hours of backup, batteries may be more cost-effective. Many optimal designs use a hybrid approach with supercapacitors handling high-power, high-cycle demands and batteries providing long-duration storage.",
      "decisionGuide": "Use supercapacitors for power smoothing, frequency regulation, and short-term storage (< 5 minutes). Consider hybrid systems combining supercapacitors and batteries for applications requiring both high power and long duration.",
      "keywords": ["supercapacitor vs battery", "renewable storage comparison", "energy storage selection"]
    },
    {
      "question": "What is the typical payback period for supercapacitor energy storage systems?",
      "answer": "The payback period for supercapacitor energy storage depends heavily on the application and cycling frequency. For high-cycle applications such as frequency regulation or solar smoothing with 100+ cycles per day, supercapacitors typically achieve payback in 3-5 years due to eliminated replacement costs and reduced maintenance. Battery systems in such applications require replacement every 3-5 years, while supercapacitors last 15-20 years. For lower cycle applications (< 10 cycles/day), the payback period may extend to 7-10 years. Factors affecting payback include: cycling frequency, operating temperature, electricity rates for grid services, maintenance costs, and avoided downtime. Our FAE team can provide detailed ROI calculations based on your specific application parameters.",
      "decisionGuide": "Calculate total cost of ownership over 15-20 years including replacement costs, maintenance, and downtime for accurate comparison with battery alternatives.",
      "keywords": ["payback period", "ROI calculation", "cost analysis", "total cost of ownership"]
    },
    {
      "question": "How do I size a supercapacitor system for my renewable energy application?",
      "answer": "Sizing a supercapacitor system requires analyzing both power and energy requirements. For power sizing, calculate the maximum power demand (Pmax) and select modules with continuous power rating of at least 1.3x Pmax. For energy sizing, determine the required backup time (t) at average power (Pavg) and calculate required capacitance: C = 2 × E / (V²max - V²min), where E = Pavg × t. Consider voltage drop during discharge - typically design for 50% voltage drop from rated voltage. For solar applications, size for 1-5 minutes of smoothing; for wind pitch control, size for 30-60 seconds of emergency operation. Temperature effects must be considered - capacitance decreases and ESR increases at low temperatures. Always include 20-30% safety margin and consult our FAE team for critical applications.",
      "decisionGuide": "Contact our FAE team with your power profile, backup time requirements, and operating conditions for professional sizing assistance and simulation modeling.",
      "keywords": ["system sizing", "capacitance calculation", "power requirements", "energy storage design"]
    },
    {
      "question": "What monitoring and maintenance is required for supercapacitor energy storage systems?",
      "answer": "Supercapacitor systems require minimal maintenance compared to batteries, but proper monitoring is essential for optimal performance and longevity. Recommended monitoring includes: cell-level voltage monitoring to detect imbalance (target < 50mV deviation), temperature monitoring at module level (operating range -40°C to +65°C), ESR trending to track aging (measure quarterly), and capacitance verification annually. Unlike batteries, supercapacitors do not require electrolyte replacement, cell replacement, or periodic equalization charges. Maintenance tasks are limited to: annual inspection of connections and torques, cleaning of enclosures and heat sinks, and verification of protection system functionality. Remote monitoring systems can provide early warning of potential issues and enable predictive maintenance. Expected service life is 15-20 years with proper monitoring and operation within specifications.",
      "decisionGuide": "Implement comprehensive monitoring system with cell-level voltage and temperature measurement for early fault detection and predictive maintenance capabilities.",
      "keywords": ["monitoring system", "maintenance requirements", "predictive maintenance", "system health"]
    },
    {
      "question": "Can supercapacitor systems be integrated with existing solar inverters and wind turbine controls?",
      "answer": "Yes, Aowei supercapacitor systems are designed for seamless integration with existing renewable energy infrastructure. For solar applications, our systems interface with standard solar inverters through DC bus connection with appropriate voltage matching. The fast response of supercapacitors (<100ms) complements inverter control loops for optimal power smoothing. For wind applications, our 48V modules directly replace or supplement existing battery backup systems for pitch control. Communication interfaces include Modbus RTU/TCP, CAN bus, and analog signals for integration with turbine controllers. Our FAE team provides integration support including: system architecture review, interface design, control algorithm recommendations, and commissioning assistance. Custom interface solutions are available for specialized requirements. The modular design allows phased integration - start with a small system and expand as needed without replacing existing equipment.",
      "decisionGuide": "Contact our FAE team to review your existing system architecture and develop an integration plan that minimizes disruption and maximizes performance improvement.",
      "keywords": ["system integration", "solar inverter", "wind turbine", "interface design"]
    }
  ];

  console.log('Fixed Solution 3: Renewable Energy Storage Solution');
}

// Fix Solution 4: Aowei Solution 4
const solution4 = solutions.solutions.find(s => s.id === 'aowei-solution-4');
if (solution4) {
  // Update with complete data
  solution4.title = "Smart Grid Energy Management Solution";
  solution4.subtitle = "Advanced supercapacitor systems for grid stabilization and power quality";
  solution4.description = "Comprehensive supercapacitor-based energy storage solution for smart grid applications including voltage regulation, frequency response, and power quality improvement.";
  solution4.longDescription = "The Smart Grid Energy Management Solution leverages Aowei's advanced supercapacitor technology to address critical challenges in modern electrical grids. As renewable energy penetration increases and grid stability becomes more challenging, fast-response energy storage is essential for maintaining power quality and reliability.\n\nThis solution provides sub-second response to grid frequency deviations, voltage sag compensation, and peak shaving capabilities. Unlike traditional battery storage, supercapacitors can handle unlimited charge/discharge cycles without degradation, making them ideal for high-frequency grid services.\n\nKey applications include: primary frequency response with <1 second reaction time, voltage support during transient events, black start capability for grid restoration, and integration with smart inverters for distributed energy resources. The system integrates with utility SCADA systems through standard communication protocols.\n\nAowei's modular architecture allows deployment from 100kW to 10MW+ systems, with containerized solutions for rapid installation. Comprehensive monitoring and predictive analytics optimize performance and enable condition-based maintenance.";

  solution4.benefits = [
    "Sub-second response for primary frequency regulation services",
    "Unlimited cycle life for continuous grid balancing operations",
    "Voltage sag compensation to protect sensitive industrial loads",
    "Black start capability for grid restoration after outages",
    "Modular scalability from 100kW to 10MW+ installations"
  ];

  solution4.coreAdvantages = [
    {
      "title": "Ultra-Fast Response",
      "description": "Sub-100ms response time enables primary frequency regulation and rapid grid stabilization, capturing revenue opportunities that slower battery systems cannot access."
    },
    {
      "title": "Unlimited Cycling",
      "description": "Handle 1000+ charge/discharge cycles per day without capacity degradation, ideal for continuous grid balancing and arbitrage applications."
    },
    {
      "title": "Wide Operating Range",
      "description": "Maintain full performance from -40°C to +65°C without heating or cooling systems, reducing auxiliary power consumption and complexity."
    },
    {
      "title": "High Round-Trip Efficiency",
      "description": ">95% round-trip efficiency minimizes energy losses and maximizes revenue from grid services."
    },
    {
      "title": "Long Service Life",
      "description": "20+ year service life with minimal degradation eliminates replacement costs and reduces total cost of ownership by 40-60% versus batteries."
    }
  ];

  solution4.bomList = [
    {
      "category": "Energy Storage",
      "items": [
        {
          "partNumber": "SM-48V-100F",
          "description": "High-power supercapacitor module",
          "quantity": 20,
          "specifications": "48V, 100F, 10kW peak power"
        },
        {
          "partNumber": "AW-2R7-J227UY",
          "description": "High-capacity cylindrical cell",
          "quantity": 120,
          "specifications": "2.7V, 220F, low ESR"
        }
      ]
    },
    {
      "category": "Power Conversion",
      "items": [
        {
          "partNumber": "Grid-Tie Inverter",
          "description": "Bidirectional grid-tie inverter",
          "quantity": 1,
          "specifications": "500kW, 480V AC, 98% efficiency"
        },
        {
          "partNumber": "DC-DC Converter",
          "description": "High-efficiency DC-DC converter",
          "quantity": 4,
          "specifications": "125kW each, 800V DC bus"
        }
      ]
    },
    {
      "category": "Control & Monitoring",
      "items": [
        {
          "partNumber": "SCADA Interface",
          "description": "Grid SCADA communication gateway",
          "quantity": 1,
          "specifications": "DNP3, IEC 61850, Modbus TCP"
        },
        {
          "partNumber": "Energy Management",
          "description": "Energy management system controller",
          "quantity": 1,
          "specifications": "Real-time optimization, forecasting"
        }
      ]
    }
  ];

  solution4.technicalSpecs = {
    "System Rating": "500kW / 250kWh",
    "Response Time": "< 100 milliseconds",
    "Round-Trip Efficiency": "> 95%",
    "Cycle Life": "Unlimited (>1M cycles)",
    "Operating Temperature": "-40°C to +65°C",
    "Grid Connection": "480V AC, 3-phase",
    "Communication": "DNP3, IEC 61850, Modbus TCP",
    "Enclosure": "IP54 outdoor rated container"
  };

  solution4.customerCases = [
    {
      "customerName": "Regional Utility Company",
      "industry": "Electric Utility",
      "application": "Primary Frequency Response",
      "challenge": "Increasing renewable penetration causing grid frequency instability. Needed fast-response resource for primary frequency regulation.",
      "solution": "Deployed 2MW supercapacitor system for primary frequency response with <1 second reaction time.",
      "results": "Successfully provided frequency regulation with 99.8% availability. Captured premium pricing for fast-response services.",
      "feedback": "The supercapacitor system outperforms our battery resources for frequency regulation and requires virtually no maintenance.",
      "result": "Generated $450,000 annual revenue from frequency regulation services with minimal operating costs."
    },
    {
      "customerName": "Industrial Microgrid Operator",
      "industry": "Industrial",
      "application": "Power Quality and Backup",
      "challenge": "Voltage sags from utility causing production line shutdowns and equipment damage. Needed fast voltage support.",
      "solution": "Installed 500kW supercapacitor system for voltage sag compensation and ride-through capability.",
      "results": "Eliminated production downtime from voltage sags. Improved power quality to meet sensitive equipment requirements.",
      "feedback": "The system responds instantly to voltage events, protecting our production lines and eliminating costly downtime.",
      "result": "Avoided $2M in annual downtime costs and improved production yield by 3%."
    }
  ];

  solution4.faeInsights = {
    "author": {
      "name": "Dr. Sarah Johnson",
      "title": "Principal FAE - Grid Storage",
      "experience": "15 years",
      "expertise": ["Grid Energy Storage", "Power Quality", "Utility Applications"]
    },
    "insight": "In my 15 years working with utility-scale energy storage, I have consistently seen supercapacitors outperform batteries for high-power, short-duration applications. The key advantage is the ability to capture fast-frequency response market premiums that slower resources cannot access. Utilities are increasingly valuing response time over energy capacity for grid stabilization services. Supercapacitors also excel in power quality applications where instantaneous response is critical for protecting sensitive industrial loads. The business case is strongest when the full value stack is captured including frequency regulation, voltage support, and power quality services.",
    "logic": "The Smart Grid Energy Management Solution is designed to capture maximum value from multiple grid services. The decision framework prioritizes response speed and cycle capability over energy density. System sizing starts with power requirements for the primary application, then optimizes energy capacity for secondary services. Revenue optimization considers market rules, response time requirements, and duty cycles for each service.",
    "keyTakeaways": [
      "Design for response speed to capture premium pricing for fast-frequency services",
      "Size power rating based on most demanding service; energy for aggregate duty cycle",
      "Implement advanced controls to stack multiple value streams simultaneously",
      "Plan for 20-year service life with minimal degradation in financial models",
      "Consider hybrid designs combining supercapacitors and batteries for optimal economics"
    ],
    "commonPitfalls": [
      "Undersizing power rating limits access to high-value grid services",
      "Inadequate controls prevent capturing multiple revenue streams",
      "Poor thermal design reduces performance and service life",
      "Insufficient monitoring limits optimization and preventive maintenance"
    ],
    "bestPractices": [
      "Conduct detailed market analysis to identify highest-value applications",
      "Design controls for seamless switching between multiple grid services",
      "Implement predictive analytics for condition-based maintenance",
      "Size for 20-year life with appropriate safety margins",
      "Engage utility early to understand interconnection requirements"
    ],
    "content": "For utility and industrial grid applications, I strongly recommend this solution for any high-power, high-cycle requirement. The ability to provide sub-second response opens revenue streams unavailable to battery systems. Proper controls design is critical for maximizing value from multiple grid services.",
    "decisionFramework": {
      "title": "Grid Storage System Design Framework",
      "steps": [
        "Analyze target markets and revenue streams for grid services",
        "Determine power and response time requirements for each service",
        "Size system for primary application with secondary service capability",
        "Design controls for seamless multi-service operation",
        "Implement comprehensive monitoring and analytics",
        "Develop maintenance plan based on condition monitoring"
      ],
      "decisionPoints": [
        "Primary revenue source - frequency regulation vs voltage support vs backup",
        "Power rating based on maximum simultaneous service requirements",
        "Energy capacity for duty cycle and backup time requirements",
        "Controls architecture for multi-service optimization",
        "Monitoring granularity for predictive maintenance"
      ]
    }
  };

  solution4.faqs = [
    {
      "question": "What grid services can supercapacitor systems provide?",
      "answer": "Supercapacitor systems excel at high-power, fast-response grid services including: Primary frequency response with <1 second reaction time, capturing premium pricing in markets that value speed. Voltage support and sag compensation to maintain power quality during grid disturbances. Black start capability for grid restoration after widespread outages. Peak shaving to reduce demand charges and defer infrastructure upgrades. Renewable firming to smooth output from solar and wind resources. Power quality improvement including harmonic filtering and reactive power support. The fast response and unlimited cycling of supercapacitors make them ideal for services requiring frequent charge/discharge cycles. Many systems stack multiple services simultaneously to maximize revenue and value.",
      "decisionGuide": "Identify your highest-value grid services based on local market rules and design the system to capture those opportunities with appropriate controls.",
      "keywords": ["grid services", "frequency response", "voltage support", "energy arbitrage"]
    },
    {
      "question": "How does the economics of supercapacitor grid storage compare to batteries?",
      "answer": "Supercapacitor grid storage economics differ significantly from batteries due to different performance characteristics and cost structures. For high-power, short-duration applications (<15 minutes), supercapacitors often provide superior economics despite higher upfront cost per kWh. Key economic advantages include: 20+ year service life versus 10-15 years for batteries, eliminating replacement costs. Unlimited cycling capability allows capturing high-value fast-frequency regulation premiums. >95% round-trip efficiency reduces energy losses. Minimal maintenance requirements reduce operating costs. No thermal management systems needed in most climates. However, for long-duration storage (>1 hour), batteries typically have lower cost per kWh. Optimal economics often come from hybrid systems using supercapacitors for high-power response and batteries for energy capacity. Detailed ROI analysis should consider all revenue streams, operating costs, and replacement schedules over 20-year project life.",
      "decisionGuide": "Conduct comprehensive economic analysis considering all revenue streams, operating costs, and replacement schedules over full project life for accurate comparison.",
      "keywords": ["economics", "ROI", "cost comparison", "hybrid storage"]
    },
    {
      "question": "What are the interconnection requirements for utility-scale supercapacitor systems?",
      "answer": "Utility-scale supercapacitor systems must meet standard interconnection requirements for energy storage resources. Key requirements typically include: IEEE 1547 compliance for distributed energy resources including anti-islanding protection, voltage and frequency ride-through, and reactive power capability. Utility-specific interconnection studies including fault analysis, protection coordination, and power quality assessment. SCADA integration for monitoring and control by utility operations center. Metering for revenue-grade measurement of energy and power services. Safety systems including emergency shutdown, fire suppression, and personnel protection. Depending on size and location, requirements may include: Feeder impact study for systems >1MW, transmission interconnection agreement for large systems, and participation in wholesale markets requiring additional certifications. Aowei provides complete documentation and engineering support for interconnection process. Typical timeline is 6-12 months from application to approval.",
      "decisionGuide": "Engage utility early in project development to understand specific interconnection requirements and timeline for your location and system size.",
      "keywords": ["interconnection", "grid connection", "IEEE 1547", "utility requirements"]
    },
    {
      "question": "How do supercapacitor systems integrate with utility SCADA and control systems?",
      "answer": "Supercapacitor systems integrate with utility SCADA through standard communication protocols and interfaces. Supported protocols include: DNP3 (Distributed Network Protocol) for North American utilities, IEC 61850 for substation automation and modern grid systems, Modbus TCP/RTU for industrial and legacy systems, and IEEE 2030.5 (Smart Energy Profile 2.0) for smart grid applications. Integration points include: Real-time monitoring of system status, power output, state of charge, and alarms. Remote control for start/stop, mode selection, and power setpoints. Automatic generation control (AGC) signals for frequency regulation services. Market signals for energy arbitrage and demand response. Historical data logging for performance analysis and settlement. Cybersecurity features include encrypted communications, authentication, and access control. Aowei systems include protocol gateways and can be configured for specific utility requirements. Our engineering team provides integration support and testing.",
      "decisionGuide": "Coordinate with utility operations and IT teams early to define communication requirements and ensure compatibility with existing SCADA infrastructure.",
      "keywords": ["SCADA integration", "DNP3", "IEC 61850", "grid communication"]
    },
    {
      "question": "What maintenance is required for utility-scale supercapacitor systems?",
      "answer": "Utility-scale supercapacitor systems require minimal maintenance compared to batteries, contributing to lower operating costs and higher availability. Routine maintenance includes: Annual visual inspection of enclosures, connections, and cooling systems. Torque verification of electrical connections per manufacturer specifications. Cleaning of air filters and heat sinks for cooling systems. Verification of protection system functionality through testing. Remote monitoring system health through SCADA interface. Unlike batteries, supercapacitors do not require: Electrolyte replacement or topping, cell balancing maintenance, capacity testing and recalibration, or periodic replacement of degraded cells. Condition monitoring includes: Continuous monitoring of cell voltages and temperatures. ESR trending to track aging (quarterly measurements recommended). Capacitance verification (annual testing). Expected service life is 20+ years with proper operation and monitoring. Availability typically exceeds 99% with minimal scheduled maintenance.",
      "decisionGuide": "Implement comprehensive remote monitoring for condition-based maintenance and minimal scheduled outages.",
      "keywords": ["maintenance", "condition monitoring", "system availability", "service life"]
    }
  ];

  console.log('Fixed Solution 4: Smart Grid Energy Management Solution');
}

// Write back
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('\nFixed aowei solutions.json successfully!');
