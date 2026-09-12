const fs = require('fs');

const solutionsPath = 'data/jisemi/solutions.json';
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add 4th solution
solutions.solutions.push({
  "id": "smart-sensor-network",
  "slug": "smart-sensor-network",
  "title": "Smart Sensor Network Solution",
  "name": "Smart Sensor Network Solution",
  "shortDescription": "Complete smart sensor network solution for automotive and industrial applications with integrated processing and Ethernet connectivity.",
  "description": "Comprehensive smart sensor network solution utilizing Jisemi's integrated PHY+MCU devices for intelligent edge nodes with local processing and Ethernet connectivity.",
  "longDescription": "The Smart Sensor Network Solution from Jisemi provides a comprehensive platform for deploying intelligent sensor networks in automotive and industrial environments. Built on Jisemi's JL9101 integrated PHY+MCU devices, this solution enables smart sensors with local processing capabilities and Ethernet connectivity. Each sensor node combines sensing, processing, and communication in a compact, cost-effective design. The solution supports various sensor types including temperature, pressure, position, and environmental sensors. The integrated ARM Cortex-M4 processor runs sensor algorithms locally, reducing network traffic and enabling real-time responses. Ethernet connectivity provides high-speed data transmission and seamless integration with existing networks. As your authorized Jisemi distributor, we provide complete technical support from sensor design to network deployment.",
  "benefits": [
    "Integrated processing reduces host processor load",
    "Ethernet connectivity enables high-speed data transmission",
    "Local sensor algorithms enable real-time responses",
    "Compact single-chip design reduces system cost",
    "Scalable from few to hundreds of sensor nodes",
    "Comprehensive diagnostics enable predictive maintenance"
  ],
  "coreAdvantage": "Jisemi's smart sensor solution combines sensing, processing, and communication in a single device, enabling intelligent edge nodes that reduce system complexity and improve response times.",
  "coreAdvantages": [
    "Integrated PHY+MCU eliminates separate processor, reducing BOM cost and PCB area",
    "ARM Cortex-M4 with 512KB Flash enables complex sensor algorithms at the edge",
    "100BASE-T1 Ethernet provides reliable high-speed connectivity over single-pair cable",
    "AEC-Q100 Grade 1 qualification ensures reliable operation in harsh environments",
    "ASIL-B support enables safety-critical sensor applications"
  ],
  "image": "/assets/solutions/jisemi/smart-sensor-network.jpg",
  "icon": "sensors",
  "products": [
    {
      "partNumber": "JL9101",
      "name": "Ethernet PHY with Integrated MCU",
      "role": "Smart sensor node controller and communication",
      "quantity": 16
    },
    {
      "partNumber": "JL9001",
      "name": "Ethernet Switch",
      "role": "Sensor network aggregation and backbone connection",
      "quantity": 4
    },
    {
      "partNumber": "JL1001",
      "name": "100BASE-T1 PHY",
      "role": "Gateway connectivity for legacy integration",
      "quantity": 2
    }
  ],
  "bomList": [
    {
      "partNumber": "JL9101",
      "description": "Ethernet PHY with Integrated MCU",
      "quantity": 16,
      "category": "Smart Sensor Nodes"
    },
    {
      "partNumber": "JL9001",
      "description": "Ethernet Switch",
      "quantity": 4,
      "category": "Network Infrastructure"
    },
    {
      "partNumber": "JL1001",
      "description": "100BASE-T1 PHY",
      "quantity": 2,
      "category": "Gateway Connectivity"
    }
  ],
  "specifications": {
    "Sensor Nodes": "Up to 16 per switch",
    "Network Topology": "Star or tree",
    "Cable Reach": "Up to 15m per node",
    "Data Rate": "100 Mbps per node",
    "Processing": "ARM Cortex-M4 @ 80MHz",
    "Memory": "512KB Flash, 128KB RAM",
    "Operating Temperature": "-40°C to +125°C",
    "Safety Level": "ASIL-B capable"
  },
  "technicalSpecs": {
    "Sensor Nodes": "Up to 16 per switch",
    "Network Topology": "Star or tree",
    "Cable Reach": "Up to 15m per node",
    "Data Rate": "100 Mbps per node",
    "Processing": "ARM Cortex-M4 @ 80MHz",
    "Memory": "512KB Flash, 128KB RAM",
    "Operating Temperature": "-40°C to +125°C",
    "Safety Level": "ASIL-B capable"
  },
  "applications": [
    "Temperature monitoring systems",
    "Pressure sensor networks",
    "Position and motion sensors",
    "Environmental monitoring",
    "Battery management systems",
    "Motor control sensors"
  ],
  "customerCase": {
    "industry": "Automotive",
    "customer": "Electric vehicle manufacturer",
    "challenge": "Needed comprehensive battery monitoring system with 48 temperature sensors, requiring local processing and reliable communication.",
    "solution": "Implemented Jisemi-based smart sensor network with JL9101 at each sensor node for local processing and Ethernet connectivity. JL9001 switches aggregated data to BMS controller.",
    "results": [
      "Deployed 48 smart temperature sensor nodes",
      "Achieved <10ms response time for critical alerts",
      "Reduced wiring harness weight by 40%",
      "Enabled predictive thermal management",
      "Passed AEC-Q100 qualification"
    ],
    "testimonial": "The Jisemi smart sensor solution transformed our battery monitoring system. Local processing at each node reduced network traffic and improved response times significantly.",
    "testimonialAuthor": "Battery Systems Engineer"
  },
  "customerCases": [
    {
      "industry": "Automotive",
      "customer": "Electric vehicle manufacturer",
      "challenge": "Needed comprehensive battery monitoring system with 48 temperature sensors, requiring local processing and reliable communication.",
      "solution": "Implemented Jisemi-based smart sensor network with JL9101 at each sensor node for local processing and Ethernet connectivity. JL9001 switches aggregated data to BMS controller.",
      "result": "Deployed 48 smart sensor nodes with <10ms response time, reduced wiring by 40%, enabled predictive thermal management",
      "results": [
        "Deployed 48 smart temperature sensor nodes",
        "Achieved <10ms response time for critical alerts",
        "Reduced wiring harness weight by 40%",
        "Enabled predictive thermal management",
        "Passed AEC-Q100 qualification"
      ],
      "testimonial": "The Jisemi smart sensor solution transformed our battery monitoring system.",
      "testimonialAuthor": "Battery Systems Engineer",
      "feedback": "Excellent technical support during sensor node design"
    },
    {
      "industry": "Industrial",
      "customer": "Factory automation company",
      "challenge": "Modernizing factory monitoring with intelligent sensors that can preprocess data and reduce load on central PLC.",
      "solution": "Deployed Jisemi smart sensor network with JL9101-based nodes for vibration, temperature, and pressure monitoring. Local FFT processing at each node.",
      "result": "Deployed 32 smart sensors with local processing, reduced PLC load by 60%, enabled predictive maintenance",
      "results": [
        "Deployed 32 smart sensor nodes",
        "Local FFT processing for vibration analysis",
        "Reduced central PLC processing load by 60%",
        "Enabled predictive maintenance alerts",
        "Improved overall equipment effectiveness by 15%"
      ],
      "testimonial": "Local processing at sensor nodes revolutionized our monitoring capabilities.",
      "testimonialAuthor": "Automation Engineer",
      "feedback": "Great solution for distributed intelligence"
    }
  ],
  "faeInsight": {
    "summary": "Smart sensor network design requires balancing processing at the edge with network bandwidth. Key success factors include proper sensor algorithm design, network topology planning, and power management.",
    "decisionLogic": "Determine which processing should be local vs central. Local processing reduces network traffic but requires more capable sensor nodes.",
    "solutionFramework": "Start with sensor requirements, determine processing needs, design network topology, implement and validate.",
    "keyPoints": [
      "Process data locally when response time is critical",
      "Use network bandwidth efficiently with preprocessed data",
      "Design power management for always-on sensor nodes",
      "Plan network topology for scalability"
    ],
    "commonIssues": [
      "Insufficient local processing capability",
      "Network congestion from raw sensor data",
      "Power management in sleep modes",
      "Synchronization between sensor nodes"
    ],
    "bestPractices": [
      "Use Jisemi reference designs for sensor nodes",
      "Implement efficient sensor algorithms",
      "Design for worst-case network loading",
      "Plan for future sensor additions"
    ]
  },
  "faeInsights": {
    "author": {
      "name": "David Zhang",
      "title": "Senior FAE - Sensor Applications",
      "experience": "15+ years"
    },
    "title": "Senior FAE - Smart Sensor Networks",
    "content": "Based on extensive experience supporting smart sensor network implementations, this solution from Jisemi addresses the challenge of distributed intelligence in automotive and industrial systems. The JL9101 integrated PHY+MCU is the key enabler - it provides enough processing for meaningful local algorithms while maintaining single-chip simplicity. I've seen customers achieve 60-80% reduction in network traffic by processing sensor data locally rather than streaming raw samples. The Ethernet connectivity provides reliable high-speed communication with existing infrastructure. Key design considerations include: balancing local vs central processing, managing power in always-on nodes, and ensuring deterministic response for critical alerts. Our FAE team can help optimize sensor algorithms and network architecture for your specific application.",
    "keyTakeaways": [
      "Local processing significantly reduces network traffic",
      "Single-chip design simplifies sensor node implementation",
      "Ethernet provides reliable high-speed connectivity",
      "Scalable architecture supports growth"
    ],
    "keyPoints": [
      "Use JL9101 for integrated sensor node design",
      "Process data locally when possible",
      "Design efficient network topology",
      "Implement proper power management"
    ],
    "commonIssues": [
      "Underestimating processing requirements",
      "Network congestion from too much data",
      "Power consumption in always-on nodes",
      "Synchronization between distributed nodes"
    ],
    "bestPractices": [
      "Start with Jisemi reference designs",
      "Benchmark processing requirements early",
      "Use simulation for network planning",
      "Implement comprehensive diagnostics"
    ],
    "decisionFramework": {
      "steps": [
        "Define sensor requirements and data rates",
        "Determine local vs central processing split",
        "Calculate network bandwidth requirements",
        "Design sensor node hardware",
        "Implement sensor algorithms",
        "Validate network performance",
        "Deploy and optimize"
      ]
    }
  },
  "faqs": [
    {
      "question": "What types of sensors can be used with this solution?",
      "answer": "The smart sensor network solution supports various sensor types: Temperature sensors (thermistors, RTDs, digital), Pressure sensors (analog, digital SPI/I2C), Position sensors (encoders, Hall effect, potentiometers), Environmental sensors (humidity, gas, air quality), Current/voltage sensors for monitoring, Vibration sensors with local FFT processing. The JL9101's rich peripheral set (ADC, SPI, I2C, UART) enables connection to virtually any sensor type.",
      "decisionGuide": "Contact us for specific sensor integration recommendations.",
      "keywords": [
        "sensors",
        "temperature",
        "pressure",
        "position",
        "environmental"
      ]
    },
    {
      "question": "How many sensor nodes can be supported?",
      "answer": "Network capacity depends on switch configuration and data rates: Per JL9001 switch: Up to 16 sensor nodes, Multi-switch networks: 100+ nodes with aggregation, Bandwidth per node: 100 Mbps shared capacity, Typical deployment: 4-8 nodes per switch for optimal performance. For large networks, use hierarchical topology with aggregation switches.",
      "decisionGuide": "Plan network topology based on node count and bandwidth requirements.",
      "keywords": [
        "network capacity",
        "sensor nodes",
        "scalability",
        "topology"
      ]
    },
    {
      "question": "What processing can be done at the sensor node?",
      "answer": "The JL9101's ARM Cortex-M4 enables significant local processing: Sensor calibration and linearization, Filtering and noise reduction, Threshold detection and alarming, FFT for vibration analysis, Statistical analysis (min/max/average), Data compression, Protocol conversion. This local processing reduces network traffic and enables faster response times.",
      "decisionGuide": "Process data locally when response time is critical or to reduce network traffic.",
      "keywords": [
        "local processing",
        "edge computing",
        "algorithms",
        "FFT"
      ]
    },
    {
      "question": "How is power managed in sensor nodes?",
      "answer": "JL9101 supports multiple power modes for efficient operation: Active mode: Full operation with PHY and MCU (~150mW), Sleep mode: MCU sleep with PHY active for wake-on-LAN (~100mW), Deep sleep: Minimal power with periodic wake-up (~10mW), Wake sources: Ethernet wake-on-LAN, timer, GPIO interrupts. Power management is critical for always-on sensor nodes.",
      "decisionGuide": "Use sleep modes when continuous monitoring isn't required.",
      "keywords": [
        "power management",
        "sleep modes",
        "wake-on-LAN",
        "efficiency"
      ]
    },
    {
      "question": "What is the response time for critical alerts?",
      "answer": "Response time depends on processing location and network architecture: Local processing: <1ms from sensor to action, Network to central: 5-20ms depending on loading, End-to-end with cloud: 50-200ms. For safety-critical applications, implement local threshold detection with immediate response, then report to central system.",
      "decisionGuide": "Implement critical alerts locally for fastest response.",
      "keywords": [
        "response time",
        "latency",
        "critical alerts",
        "real-time"
      ]
    },
    {
      "question": "How do I develop software for sensor nodes?",
      "answer": "Jisemi provides comprehensive software support: SDK with peripheral drivers, Ethernet stack and examples, Sensor interface libraries, RTOS integration (FreeRTOS, RT-Thread), Development tools: Keil MDK, IAR, GCC, Debug support: J-Link, ST-Link. Our FAE team provides application notes and code examples for common sensor types.",
      "decisionGuide": "Use Jisemi SDK and reference designs for fastest development.",
      "keywords": [
        "software development",
        "SDK",
        "drivers",
        "RTOS"
      ]
    }
  ]
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Solutions updated successfully!');
console.log('Total solutions: ' + solutions.solutions.length);
