/**
 * Sinofuse 解决方案补充脚本
 * 补充第4个解决方案
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'sinofuse');
const solutionsPath = path.join(dataDir, 'solutions.json');

// 读取现有数据
console.log('📖 读取 solutions.json...');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 添加第4个解决方案
console.log('📦 添加 Industrial Power Distribution Solution...');

const newSolution = {
  "id": "industrial-power-distribution",
  "name": "Industrial Power Distribution Protection Solution",
  "description": "Comprehensive protection solution for industrial power distribution systems featuring Sinofuse NH industrial fuses with ratings up to 690V AC/DC and 100kA breaking capacity. Provides reliable protection for motor circuits, distribution panels, and control systems.",
  "features": [
    "690V AC / 500V DC rating for industrial applications",
    "100kA breaking capacity for high fault current protection",
    "gG full-range protection for general circuits",
    "aM motor protection fuses available",
    "Standard NH sizes for universal mounting",
    "Visual indicator for blown fuse detection"
  ],
  "applications": [
    "Industrial power distribution panels",
    "Motor protection circuits",
    "Control system protection",
    "UPS and rectifier systems",
    "DC drive protection"
  ],
  "keyComponents": [
    {
      "partNumber": "IND-690-160A",
      "description": "690V 160A industrial fuse for motor protection",
      "link": "/sinofuse/products/industrial-fuses/ind-690-160a.html"
    },
    {
      "partNumber": "IND-690-250A",
      "description": "690V 250A industrial fuse for high-current distribution",
      "link": "/sinofuse/products/industrial-fuses/ind-690-250a.html"
    },
    {
      "partNumber": "NH Fuse Base 1",
      "description": "NH1 fuse base for panel mounting",
      "link": "/sinofuse/products/accessories/nh-fuse-base1.html"
    }
  ],
  "technicalSpecs": {
    "Voltage Rating": "690V AC / 500V DC",
    "Current Range": "50A to 400A",
    "Breaking Capacity": "100kA @ 690V AC",
    "Operating Temperature": "-40°C to +85°C",
    "Time-Current": "gG general purpose / aM motor",
    "Mounting": "NH fuse base or switch",
    "Standards": "IEC 60269-1, UL 248-12"
  },
  "coreAdvantages": [
    {
      "title": "Dual AC/DC Rating",
      "description": "690V AC and 500V DC ratings provide versatile protection for industrial systems with both power types, reducing inventory complexity."
    },
    {
      "title": "High Breaking Capacity",
      "description": "100kA breaking capacity handles severe fault currents in industrial environments, ensuring safe interruption and equipment protection."
    },
    {
      "title": "Standard NH Mounting",
      "description": "Industry-standard NH sizes ensure compatibility with existing fuse bases and switch disconnectors, simplifying installation and maintenance."
    },
    {
      "title": "Visual Indication",
      "description": "Built-in visual indicator shows fuse status without removal, reducing maintenance time and improving safety."
    }
  ],
  "bomList": [
    {
      "designator": "F1-F3",
      "partNumber": "IND-690-250A",
      "description": "Main Distribution Fuses, 690V, 250A",
      "quantity": 3
    },
    {
      "designator": "F4-F9",
      "partNumber": "IND-690-160A",
      "description": "Motor Protection Fuses, 690V, 160A",
      "quantity": 6
    },
    {
      "designator": "FH1-FH9",
      "partNumber": "NH Fuse Base 1",
      "description": "NH1 Fuse Bases for Panel Mounting",
      "quantity": 9
    }
  ],
  "customerCases": [
    {
      "customerName": "Manufacturing Plant",
      "industry": "Industrial",
      "application": "Motor Control Center Protection",
      "challenge": "The plant needed reliable protection for their motor control center with multiple motor circuits up to 132kW, requiring coordination with motor starters and 100kA breaking capacity.",
      "solution": "BeiLuo provided IND-690 series fuses with gG characteristics for distribution and aM characteristics for motor protection. Our FAE team assisted with coordination studies and fuse sizing.",
      "results": "The protection system has operated reliably for 3+ years with zero nuisance operations. Motor starting currents are accommodated without fuse blowing, while fault protection is maintained.",
      "result": "Achieved reliable motor protection with proper coordination and 100kA breaking capacity."
    },
    {
      "customerName": "Data Center",
      "industry": "Infrastructure",
      "application": "UPS and Distribution Protection",
      "challenge": "A data center required protection for their UPS systems and DC distribution with both AC and DC ratings, compact size, and high reliability.",
      "solution": "BeiLuo supplied IND-690 series fuses with dual AC/DC ratings. The NH mounting system provided easy installation and maintenance access.",
      "results": "The protection system has maintained 99.999% availability. The visual indicators allow quick maintenance checks without system shutdown.",
      "result": "Achieved high availability with reliable protection and easy maintenance."
    }
  ],
  "faeInsights": {
    "author": {
      "name": "Robert Chen",
      "title": "Senior FAE - Industrial Systems",
      "experience": "15 years",
      "expertise": [
        "Industrial Protection",
        "Motor Control",
        "Power Distribution"
      ]
    },
    "insight": "Industrial power distribution protection requires careful consideration of load characteristics and coordination. The most common mistake I see is using gG fuses for motor protection without proper sizing. Motors have high inrush currents (5-7x FLA) during startup, and gG fuses sized for FLA will nuisance blow. For motor circuits, either use aM fuses (which allow high inrush) or oversize gG fuses appropriately. For distribution circuits, gG fuses provide excellent protection. The dual AC/DC rating of IND series is valuable for modern industrial systems that often have both power types. Breaking capacity is rarely an issue in industrial systems - 100kA is more than adequate for most applications. One important consideration is fuse monitoring - in critical applications, implement fuse monitoring relays to provide remote indication of blown fuses. This is especially important in unmanned facilities or where rapid response to faults is required.",
    "logic": "Industrial protection design follows these principles: First, identify load type - motor or general distribution. Second, for motors, choose between aM fuses (short-circuit only) with overload relays, or oversized gG fuses. Third, calculate full load current and apply appropriate multiplier (1.25x for general, 2x+ for motors with gG). Fourth, verify breaking capacity exceeds available fault current. Fifth, coordinate with upstream and downstream protection devices. Sixth, consider fuse monitoring for critical applications. The decision matrix considers load type, fault current level, coordination requirements, and maintenance access.",
    "keyTakeaways": [
      "Use aM fuses or oversized gG for motor protection to avoid nuisance blowing",
      "Dual AC/DC rating simplifies inventory for mixed power systems",
      "100kA breaking capacity is adequate for most industrial applications",
      "Implement fuse monitoring for critical unmanned installations",
      "Standard NH sizes ensure compatibility with existing infrastructure"
    ],
    "commonPitfalls": [
      "Using undersized gG fuses for motor circuits causing nuisance blowing",
      "Not coordinating with upstream breakers and downstream devices",
      "Ignoring DC rating requirements in mixed AC/DC systems",
      "Poor fuse base selection not rated for fault current",
      "Lack of fuse monitoring in critical applications"
    ],
    "bestPractices": [
      "Perform coordination study with all protection devices in the system",
      "Use aM fuses for motor circuits with separate overload protection",
      "Verify fuse base ratings match or exceed fuse ratings",
      "Implement fuse monitoring for critical and unmanned installations",
      "Maintain spare fuses on-site for rapid replacement"
    ],
    "content": "Based on extensive experience supporting industrial power distribution implementations, this solution addresses the most common protection challenges in industrial environments. The key to successful implementation is proper load analysis and coordination. For motor circuits, always consider inrush currents and choose appropriate fuse types. For distribution circuits, gG fuses provide excellent full-range protection. The dual AC/DC rating of the IND series simplifies system design for modern industrial applications. Always verify coordination with other protection devices and consider fuse monitoring for critical applications. Our FAE team can assist with coordination studies, fault current calculations, and system optimization.",
    "decisionFramework": {
      "title": "Industrial Protection Decision Framework",
      "steps": [
        "Identify load type (motor vs general distribution)",
        "Calculate full load current and inrush characteristics",
        "Select fuse type (gG for general, aM or oversized gG for motors)",
        "Verify breaking capacity exceeds available fault current",
        "Coordinate with upstream and downstream protection",
        "Consider fuse monitoring for critical applications"
      ]
    }
  },
  "faqs": [
    {
      "question": "When should I use aM vs gG fuses for motor protection?",
      "answer": "Use aM fuses when: 1) You have separate overload relays (thermal or electronic); 2) You want to avoid any possibility of nuisance blowing during motor starting; 3) Motor starting current exceeds 4x FLA for more than 1 second. Use oversized gG fuses when: 1) You want single-device protection (overload + short-circuit); 2) Motor starting is soft-start or VFD controlled with low inrush; 3) Cost is critical and aM fuses are not readily available. aM fuses are more forgiving for high-inrush applications but require overload relays. gG fuses provide complete protection but must be oversized for motors to avoid nuisance blowing.",
      "decisionGuide": "Use aM fuses with overload relays for high-inrush motors. Use oversized gG for cost-sensitive or soft-start applications.",
      "keywords": [
        "aM fuse",
        "gG fuse",
        "motor protection",
        "fuse selection"
      ]
    },
    {
      "question": "How do I coordinate industrial fuses with circuit breakers?",
      "answer": "Fuse-breaker coordination ensures selective protection: 1) Breaker handles normal overloads and switching up to its interrupt rating; 2) Fuse provides backup protection for fault currents beyond breaker capability; 3) Breaker instantaneous trip should be below fuse melting current for overloads; 4) Fuse should operate faster than breaker for short-circuits above breaker capacity; 5) Typical coordination: 250A fuse with 200A breaker provides good separation. Perform time-current curve analysis to verify coordination. The goal is that only the device closest to the fault operates, maintaining power to unaffected parts of the system.",
      "decisionGuide": "Size breaker at 80% of fuse rating. Perform coordination study with actual time-current curves.",
      "keywords": [
        "fuse coordination",
        "breaker coordination",
        "selective protection"
      ]
    }
  ],
  "title": "Industrial Power Distribution Protection Solution",
  "slug": "industrial-power-distribution",
  "longDescription": "The Industrial Power Distribution Protection Solution from Sinofuse provides comprehensive overcurrent protection for industrial power systems. This solution leverages Sinofuse's NH industrial fuses designed for the demanding requirements of industrial environments.\n\nAt the core of this solution are Sinofuse's IND series fuses available in ratings from 50A to 400A with dual AC/DC capability (690V AC / 500V DC). These fuses feature gG characteristics for general circuit protection and aM characteristics for motor protection applications. The 100kA breaking capacity ensures safe interruption of severe fault currents common in industrial power systems.\n\nThe solution addresses the diverse protection requirements of industrial applications: motor circuits with high inrush currents, distribution panels with multiple feeders, control systems requiring precise protection, and UPS/rectifier systems with both AC and DC components. Standard NH sizes (NH00, NH0, NH1, NH2, NH3) ensure compatibility with existing industrial infrastructure including fuse bases, switch disconnectors, and distribution panels.\n\nKey features include visual indicators for quick status verification, ceramic bodies for reliable arc quenching, and silver-plated contacts for low resistance connections. All fuses comply with international standards including IEC 60269-1 and UL 248-12, ensuring global acceptance and regulatory compliance.\n\nImplementation support includes load analysis, coordination studies, and fuse sizing calculations. Sinofuse's FAE team provides expert assistance for system design, fault current analysis, and protection coordination. The solution is suitable for manufacturing facilities, data centers, infrastructure projects, and any industrial application requiring reliable power distribution protection.\n\nField-proven in thousands of installations worldwide, this protection solution delivers the reliability and safety required for continuous industrial operations. Comprehensive documentation including datasheets, coordination guides, and application notes ensures successful implementation."
};

solutionsData.solutions.push(newSolution);

// 保存solutions.json
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('\n✅ solutions.json 已保存');
console.log(`📊 解决方案总数: ${solutionsData.solutions.length} 个`);
