const fs = require('fs');

const solutionsPath = 'data/jingwei-qili/solutions.json';
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add 4th solution
solutions.solutions.push({
  "id": "industrial-communication-gateway",
  "slug": "industrial-communication-gateway",
  "title": "Industrial Communication Gateway Solution",
  "subtitle": "Multi-protocol industrial gateway platform using HME FPGAs for seamless connectivity",
  "description": "Complete industrial communication gateway solution enabling seamless protocol conversion between industrial networks, fieldbuses, and Ethernet-based systems.",
  "longDescription": "The Industrial Communication Gateway Solution from Jingwei Qili provides a comprehensive platform for bridging diverse industrial communication protocols. Built on HME's H series FPGAs, this solution enables real-time protocol conversion between legacy fieldbuses (Modbus, Profibus, CAN) and modern Ethernet-based systems (Profinet, EtherCAT, Ethernet/IP). The FPGA-based architecture provides deterministic low-latency communication, flexible protocol support, and reliable operation in harsh industrial environments. The solution supports multiple simultaneous protocols, enabling complex multi-network architectures. Comprehensive software stack includes protocol stacks, configuration tools, and diagnostic utilities. As your authorized HME distributor, we provide complete technical support from system design to deployment.",
  "benefits": [
    "Multi-protocol support in single device",
    "Real-time protocol conversion with <1ms latency",
    "Industrial temperature grade (-40°C to +85°C)",
    "Flexible FPGA architecture for custom protocols",
    "Redundant network support for high availability",
    "Local technical support and customization"
  ],
  "coreAdvantages": [
    {
      "title": "Protocol Flexibility",
      "description": "Support for 10+ industrial protocols simultaneously with FPGA reconfigurability",
      "icon": "settings"
    },
    {
      "title": "Low Latency",
      "description": "Deterministic <1ms protocol conversion for time-critical applications",
      "icon": "timer"
    },
    {
      "title": "Industrial Grade",
      "description": "Robust design for harsh environments with wide temperature range",
      "icon": "shield"
    },
    {
      "title": "Scalable Architecture",
      "description": "From simple 2-port gateways to complex multi-network systems",
      "icon": "scale"
    },
    {
      "title": "Local Support",
      "description": "Responsive technical support from local FAE team",
      "icon": "support"
    }
  ],
  "bomList": {
    "title": "Industrial Gateway BOM",
    "description": "Key components for industrial communication gateway",
    "items": [
      {
        "category": "FPGA",
        "items": [
          {
            "partNumber": "HME-H3C25",
            "description": "Main processing FPGA for protocol conversion",
            "quantity": 1,
            "alternatives": [
              "HME-H3C36"
            ]
          }
        ]
      },
      {
        "category": "Interface",
        "items": [
          {
            "partNumber": "CAN Transceiver",
            "description": "Isolated CAN bus interface",
            "quantity": 2
          },
          {
            "partNumber": "RS-485 Transceiver",
            "description": "Modbus/Profibus physical layer",
            "quantity": 2
          },
          {
            "partNumber": "Ethernet PHY",
            "description": "Industrial Ethernet interface",
            "quantity": 2
          }
        ]
      },
      {
        "category": "Power",
        "items": [
          {
            "partNumber": "Isolated DC-DC",
            "description": "24V industrial power supply",
            "quantity": 1
          }
        ]
      }
    ]
  },
  "technicalSpecs": {
    "title": "Technical Specifications",
    "specs": [
      {
        "name": "Supported Protocols",
        "value": "Modbus RTU/TCP, Profibus DP, Profinet, EtherCAT, CANopen, Ethernet/IP"
      },
      {
        "name": "Max Protocols",
        "value": "Up to 4 simultaneous protocols"
      },
      {
        "name": "Conversion Latency",
        "value": "< 1ms typical"
      },
      {
        "name": "Ethernet Ports",
        "value": "2x Gigabit Ethernet"
      },
      {
        "name": "Serial Ports",
        "value": "4x RS-485/RS-232, 2x CAN"
      },
      {
        "name": "Operating Temperature",
        "value": "-40°C to +85°C"
      }
    ]
  },
  "customerCases": [
    {
      "title": "Smart Factory Integration",
      "customer": "Automotive Parts Manufacturer",
      "challenge": "Needed to integrate legacy Modbus devices with new Profinet-based MES system",
      "solution": "Deployed HME-H3C25 based multi-protocol gateway",
      "results": [
        "Seamless integration of 50+ legacy devices",
        "Sub-millisecond protocol conversion latency",
        "Reduced integration cost by 60% vs proprietary gateways"
      ],
      "result": "Successfully modernized factory communication without replacing existing equipment."
    },
    {
      "title": "Oil Field Monitoring System",
      "customer": "Energy Equipment Vendor",
      "challenge": "Required reliable gateway for remote oil well monitoring across multiple protocols",
      "solution": "Implemented HME-H3C36 based ruggedized gateway with redundant Ethernet",
      "results": [
        "99.9% uptime in harsh desert environment",
        "Support for 3 simultaneous protocols (Modbus, CAN, Ethernet/IP)",
        "Remote diagnostics capability reduced maintenance visits by 70%"
      ],
      "result": "Improved operational efficiency and reduced maintenance costs significantly."
    }
  ],
  "faeInsights": {
    "overview": "Our FAE team has extensive experience in industrial communication systems. The key to successful gateway implementation is proper protocol timing analysis and buffer sizing.",
    "keyPoints": [
      "Analyze protocol timing requirements before selecting FPGA size",
      "Use HME hard IP for Ethernet MAC to save logic resources",
      "Implement proper galvanic isolation for industrial interfaces",
      "Design adequate message buffering for protocol mismatch scenarios"
    ],
    "decisionGuide": "Start with H3C25 for simple 2-protocol gateways. Use H3C36 or larger for multi-protocol or high-throughput applications.",
    "contactInfo": "Contact our industrial communication specialist FAE for protocol compatibility and architecture review.",
    "author": {
      "name": "Wang Tao",
      "title": "Senior Industrial FAE",
      "experience": "12+ years"
    },
    "content": "Based on extensive experience supporting industrial communication gateway implementations, this solution delivers reliable protocol conversion through proven FPGA architecture. The HME H series provides the perfect balance of logic capacity, industrial features, and cost-effectiveness for gateway applications. Key success factors include proper protocol stack implementation, adequate timing analysis, and robust hardware design for industrial environments. Our FAE team can assist with protocol selection, system architecture, and optimization for your specific application requirements.",
    "keyTakeaways": [
      "Proven architecture for industrial protocol conversion",
      "Flexible FPGA platform supports custom protocols",
      "Comprehensive technical support available"
    ],
    "decisionFramework": {
      "title": "Decision Framework",
      "steps": [
        "Identify protocols to bridge",
        "Select appropriate FPGA capacity",
        "Design and validate gateway"
      ]
    }
  },
  "faqs": [
    {
      "question": "What industrial protocols are supported?",
      "answer": "Supported protocols include: Fieldbuses - Modbus RTU/ASCII/TCP, Profibus DP, CAN 2.0B, CANopen, DeviceNet. Industrial Ethernet - Profinet IO, EtherCAT, Ethernet/IP, Modbus TCP, POWERLINK. Serial protocols - RS-232, RS-485, RS-422 with various baud rates. Custom protocols - FPGA flexibility allows implementation of proprietary protocols. Protocol conversion - any-to-any conversion supported between implemented protocols.",
      "decisionGuide": "Contact us for specific protocol requirements and compatibility verification.",
      "keywords": [
        "industrial protocols",
        "fieldbus",
        "protocol conversion"
      ]
    },
    {
      "question": "How many protocols can run simultaneously?",
      "answer": "The gateway supports up to 4 simultaneous protocols depending on FPGA capacity and protocol complexity. Typical configurations: H3C25 - 2-3 protocols (e.g., Modbus + CAN + Ethernet). H3C36 - 3-4 protocols with higher throughput. H3C50 - 4+ protocols or complex custom implementations. Limitations depend on protocol processing requirements and data throughput.",
      "decisionGuide": "Select FPGA capacity based on number of protocols and required throughput.",
      "keywords": [
        "multi-protocol",
        "simultaneous protocols",
        "gateway capacity"
      ]
    },
    {
      "question": "What is the protocol conversion latency?",
      "answer": "Protocol conversion latency depends on protocol types and data size: Simple protocols (Modbus RTU to TCP) - <1ms typical. Complex protocols (Profibus to Profinet) - 2-5ms typical. Deterministic timing - FPGA implementation provides consistent latency. Factors affecting latency: Protocol processing complexity, message size, network loading, FPGA utilization. Optimization techniques: Pipeline architecture, priority scheduling, dedicated hardware accelerators.",
      "decisionGuide": "FPGA-based gateway provides deterministic low latency suitable for time-critical applications.",
      "keywords": [
        "latency",
        "conversion time",
        "deterministic"
      ]
    },
    {
      "question": "Is the gateway suitable for harsh industrial environments?",
      "answer": "Yes, the gateway is designed for industrial environments: Temperature range - -40°C to +85°C operating. Isolation - galvanic isolation on all industrial interfaces. Protection - surge protection, overvoltage protection. EMI/EMC - compliant with industrial EMC standards. Reliability - MTBF > 100,000 hours. Certifications - CE, FCC, UL available. Enclosure options - DIN rail mount, IP20 to IP65 ratings.",
      "decisionGuide": "Industrial-grade design suitable for factory automation, oil & gas, and other harsh environments.",
      "keywords": [
        "industrial grade",
        "harsh environment",
        "reliability"
      ]
    },
    {
      "question": "How do I configure and manage the gateway?",
      "answer": "Gateway configuration options: Web interface - browser-based configuration for basic settings. Configuration software - Windows tool for advanced protocol configuration. Command line - SSH access for scripting and automation. Protocol-specific - native configuration tools for each protocol stack. Management features: SNMP monitoring, syslog logging, remote firmware updates, diagnostic tools. Training: Configuration training available from FAE team.",
      "decisionGuide": "Multiple configuration options available from simple web interface to advanced scripting.",
      "keywords": [
        "configuration",
        "management",
        "setup"
      ]
    },
    {
      "question": "What support is available for custom protocol development?",
      "answer": "Custom protocol support services: Feasibility analysis - assess protocol requirements and FPGA suitability. Protocol implementation - custom RTL development for proprietary protocols. Testing and validation - comprehensive testing with customer equipment. Documentation - protocol specifications and implementation guides. Maintenance - ongoing support and updates. Engagement: Fixed-price for well-defined protocols. Time-and-materials for exploratory development.",
      "decisionGuide": "Contact us for custom protocol development requirements and quotation.",
      "keywords": [
        "custom protocol",
        "protocol development",
        "proprietary"
      ]
    }
  ],
  "name": "Industrial Communication Gateway Solution"
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Solutions updated successfully!');
console.log('Total solutions: ' + solutions.solutions.length);
