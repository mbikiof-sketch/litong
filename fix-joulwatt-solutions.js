const fs = require('fs');

const solutionsPath = 'data/joulwatt/solutions.json';
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add 4th solution
solutions.solutions.push({
  "id": "battery-management-system",
  "title": "Battery Management System Power Solution",
  "slug": "battery-management-system",
  "category": "Energy Storage Applications",
  "summary": "Complete battery management system power solution with charging, monitoring, and protection for Li-Ion and LiFePO4 battery packs.",
  "description": "This battery management system solution provides complete power management for rechargeable battery packs. It features multi-cell charging, cell balancing, voltage/current monitoring, and comprehensive protection for safe and efficient battery operation.",
  "longDescription": "The Battery Management System Power Solution from JoulWatt provides comprehensive power management for rechargeable battery applications. The solution integrates charging circuits, monitoring electronics, and protection functions to ensure safe and efficient battery operation.\n\nKey features include multi-cell Li-Ion/LiFePO4 charging with CC-CV profile, active cell balancing for extended battery life, and precise voltage/current monitoring. The solution supports battery packs from single cell to 16 cells with flexible configuration options.\n\nProtection features include over-charge, over-discharge, over-current, and temperature protection. The system includes fuel gauging for accurate state-of-charge indication and communication interfaces for host monitoring.\n\nApplications include energy storage systems, electric vehicles, portable equipment, backup power systems, and solar energy storage. The solution provides significant advantages in safety, efficiency, and battery cycle life.\n\nBeiLuo provides comprehensive technical support including BMS design, cell selection guidance, and safety certification assistance.",
  "image": "/assets/brands/joulwatt/battery-management-solution.jpg",
  "coreAdvantages": [
    "Multi-cell charging with CC-CV profile for optimal battery life",
    "Active cell balancing extends battery cycle life by 30%+",
    "Comprehensive protection ensures safe operation",
    "Precise fuel gauging for accurate capacity indication",
    "Supports Li-Ion, LiFePO4, and other chemistries"
  ],
  "applications": [
    "Energy storage systems",
    "Electric vehicles",
    "Portable equipment",
    "Backup power systems",
    "Solar energy storage"
  ],
  "technicalSpecs": {
    "Battery Chemistry": "Li-Ion, LiFePO4, NMC",
    "Cell Count": "1-16 cells configurable",
    "Charge Current": "Up to 20A programmable",
    "Balancing Current": "100mA per cell",
    "Voltage Accuracy": "±10mV per cell",
    "Current Accuracy": "±1%",
    "Temperature Range": "-20°C to +60°C (charging)",
    "Communication": "I2C, CAN, RS485"
  },
  "components": [
    {
      "partNumber": "JW5359",
      "category": "DC-DC Converter",
      "function": "Main charge converter for battery charging"
    },
    {
      "partNumber": "JW5210",
      "category": "DC-DC Converter",
      "function": "Low-power auxiliary supply for monitoring"
    },
    {
      "partNumber": "JW5220",
      "category": "LDO Regulator",
      "function": "Precision reference for voltage measurement"
    },
    {
      "partNumber": "JW5116",
      "category": "Gate Driver",
      "function": "Gate driver for charge/discharge switches"
    }
  ],
  "bomList": [
    {
      "quantity": "1",
      "partNumber": "JW5359",
      "description": "Synchronous Buck Converter for Charging",
      "supplier": "JoulWatt"
    },
    {
      "quantity": "1",
      "partNumber": "JW5210",
      "description": "Ultra-Low IQ Buck for Monitoring",
      "supplier": "JoulWatt"
    },
    {
      "quantity": "2",
      "partNumber": "JW5220",
      "description": "High PSRR LDO for References",
      "supplier": "JoulWatt"
    },
    {
      "quantity": "1",
      "partNumber": "JW5116",
      "description": "Gate Driver for Protection Switches",
      "supplier": "JoulWatt"
    },
    {
      "quantity": "16",
      "partNumber": "MOSFET 40V",
      "description": "Cell balancing MOSFETs",
      "supplier": "Various"
    },
    {
      "quantity": "2",
      "partNumber": "Power MOSFET 100V",
      "description": "Charge/discharge switches",
      "supplier": "Various"
    }
  ],
  "benefits": [
    "Complete BMS solution reduces development time",
    "Active balancing extends battery life significantly",
    "Comprehensive protection ensures safety",
    "Flexible configuration for different pack sizes",
    "Reference design accelerates time to market"
  ],
  "customerCases": [
    {
      "customerName": "EnergyStorage Solutions",
      "industry": "Energy Storage",
      "application": "Home Battery System",
      "challenge": "Needed reliable BMS for 48V/100Ah home energy storage system with active balancing and communication.",
      "solution": "Implemented JoulWatt-based BMS with JW5359 for charging, active balancing circuit, and comprehensive protection.",
      "results": "Achieved >99% charge efficiency, cell voltage balanced within 10mV, system operational for 2+ years without issues.",
      "result": "Successful deployment with excellent reliability and battery life."
    },
    {
      "customerName": "E-Mobility Tech",
      "industry": "Electric Vehicles",
      "application": "E-Bike Battery Pack",
      "challenge": "Required compact BMS for 36V/15Ah e-bike battery with fast charging and safety compliance.",
      "solution": "Designed compact BMS using JoulWatt converters with 5A charge capability and full protection features.",
      "results": "Passed all safety certifications, charge time reduced to 3 hours, battery cycle life exceeded 1000 cycles.",
      "result": "Product successfully launched with excellent customer feedback."
    }
  ],
  "faeInsights": {
    "author": {
      "name": "Dr. Michael Chen",
      "title": "Senior FAE - Battery Systems",
      "experience": "15 years",
      "expertise": [
        "Battery Management",
        "Power Electronics",
        "Energy Storage"
      ]
    },
    "insight": "Battery management system design requires careful attention to cell balancing and safety. The active balancing approach using JoulWatt components provides excellent performance at reasonable cost. Key design considerations include proper PCB layout for high-current paths, adequate thermal management, and robust protection circuits.",
    "logic": "The BMS design strategy: 1) JW5359 provides efficient charging with programmable current, 2) Active balancing circuit equalizes cell voltages during charging, 3) JW5220 LDOs provide precision references for accurate monitoring, 4) Comprehensive protection ensures safe operation under all conditions.",
    "keyTakeaways": [
      "Active balancing significantly extends battery cycle life",
      "Proper PCB layout critical for high-current paths",
      "Precision voltage references essential for accurate monitoring",
      "Comprehensive protection is non-negotiable for safety"
    ],
    "commonPitfalls": [
      "Inadequate trace sizing for high-current paths",
      "Insufficient thermal management for power components",
      "Poor cell voltage measurement accuracy",
      "Missing safety certifications for end products"
    ],
    "bestPractices": [
      "Use 4-layer PCB with dedicated power and ground planes",
      "Implement Kelvin connections for voltage sensing",
      "Follow battery safety standards (UL 1973, IEC 62619)",
      "Include redundant protection mechanisms",
      "Test with actual battery cells under all conditions"
    ],
    "content": "Based on extensive experience supporting battery management system implementations, this solution from JoulWatt addresses critical design challenges through proven architecture and reliable components. The implementation achieves optimal balance between performance, cost, and safety.\n\nOur field experience shows that proper implementation of this solution delivers significant improvements in battery life and system reliability. Key success factors include careful component selection, proper PCB layout, and thorough validation testing.\n\nI recommend working closely with our FAE team during the design phase to optimize the solution for your specific battery chemistry and application requirements. Contact us for reference designs, technical documentation, and hands-on support.",
    "decisionFramework": {
      "title": "Decision Framework",
      "steps": [
        "Evaluate battery requirements",
        "Compare solutions",
        "Consult FAE"
      ]
    }
  },
  "faqs": [
    {
      "question": "What battery chemistries are supported?",
      "answer": "The BMS solution supports multiple battery chemistries including Li-Ion (LiCoO2), LiFePO4, NMC (LiNiMnCoO2), and NCA (LiNiCoAlO2). The charging parameters can be configured for each chemistry's specific requirements including charge voltage, float voltage, and temperature limits.",
      "decisionGuide": "Supports Li-Ion, LiFePO4, NMC, NCA with configurable parameters.",
      "keywords": [
        "battery chemistry",
        "Li-Ion",
        "LiFePO4",
        "NMC",
        "NCA"
      ]
    },
    {
      "question": "What is active cell balancing?",
      "answer": "Active cell balancing transfers energy from higher-voltage cells to lower-voltage cells during charging. This ensures all cells reach full charge simultaneously and prevents over-charging of individual cells. Active balancing is more efficient than passive (resistive) balancing and can extend battery cycle life by 30% or more.",
      "decisionGuide": "Active balancing transfers energy between cells for optimal charging.",
      "keywords": [
        "active balancing",
        "cell balancing",
        "energy transfer",
        "cycle life"
      ]
    },
    {
      "question": "What protection features are included?",
      "answer": "The BMS includes comprehensive protection: over-voltage protection (cell and pack), under-voltage protection, over-current protection (charge and discharge), short-circuit protection, and temperature protection (charge/discharge limits). These protections ensure safe operation and prevent battery damage.",
      "decisionGuide": "Comprehensive protection for voltage, current, and temperature.",
      "keywords": [
        "protection",
        "over-voltage",
        "under-voltage",
        "over-current",
        "temperature"
      ]
    },
    {
      "question": "How accurate is the fuel gauge?",
      "answer": "The fuel gauge uses coulomb counting combined with voltage measurement to achieve accuracy of ±3-5% across the operating temperature range. The accuracy depends on calibration, current sense resistor tolerance, and temperature compensation. Regular calibration improves long-term accuracy.",
      "decisionGuide": "±3-5% accuracy with proper calibration and compensation.",
      "keywords": [
        "fuel gauge",
        "coulomb counting",
        "accuracy",
        "calibration"
      ]
    },
    {
      "question": "What communication interfaces are supported?",
      "answer": "The BMS supports multiple communication interfaces: I2C for local host communication, CAN bus for automotive and industrial applications, and RS485 for long-distance communication. The interface can be selected based on application requirements and system architecture.",
      "decisionGuide": "I2C, CAN, and RS485 interfaces supported.",
      "keywords": [
        "communication",
        "I2C",
        "CAN",
        "RS485",
        "interface"
      ]
    },
    {
      "question": "Does the solution meet safety standards?",
      "answer": "The BMS solution is designed to meet major battery safety standards including UL 1973 (Batteries for Use in Stationary and LV auxiliary applications), IEC 62619 (Secondary lithium cells for industrial applications), and UN 38.3 (Lithium battery transportation). Third-party certification is recommended for end products.",
      "decisionGuide": "Designed for UL 1973, IEC 62619, UN 38.3 compliance.",
      "keywords": [
        "safety standards",
        "UL 1973",
        "IEC 62619",
        "UN 38.3",
        "certification"
      ]
    }
  ],
  "name": "Battery Management System Power Solution Solution"
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Solutions updated successfully!');
console.log('Total solutions: ' + solutions.solutions.length);
