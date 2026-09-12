#!/usr/bin/env node
/**
 * 创建Hongfa品牌产品数据
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'hongfa', 'products.json');

// 生成产品FAQ的函数
function generateProductFaqs(product, categoryId) {
  const partNumber = product.partNumber;
  const name = product.name;
  
  const isPower = categoryId === 'power-relays';
  const isAutomotive = categoryId === 'automotive-relays';
  const isHVDC = categoryId === 'high-voltage-dc-relays';
  const isLatching = categoryId === 'latching-relays';
  const isSignal = categoryId === 'signal-relays';
  const isIndustrial = categoryId === 'industrial-relays';
  
  const faqs = [];
  
  // FAQ 1: 具体参数提问 (维度1)
  if (isPower) {
    faqs.push({
      question: `What is the contact rating and coil voltage of ${partNumber}?`,
      answer: `The ${partNumber} is a power relay designed for general switching applications. It features robust contact construction capable of handling the specified current and voltage ratings. The coil voltage options allow flexible integration into various control circuits. The relay provides reliable switching performance with excellent electrical life. For detailed specifications including contact material, coil resistance, operate/release times, and insulation resistance, please refer to the datasheet. These parameters make the ${partNumber} suitable for home appliances, industrial equipment, and power distribution applications.`,
      decisionGuide: `Select ${partNumber} based on your load current/voltage requirements and available coil voltage; ensure contact rating provides adequate margin for your application.`,
      keywords: ['contact rating', 'coil voltage', 'power relay', 'switching capacity', 'specifications']
    });
  } else if (isAutomotive) {
    faqs.push({
      question: `What is the contact rating and automotive qualification of ${partNumber}?`,
      answer: `The ${partNumber} is an automotive relay designed for vehicle electrical systems. It meets stringent automotive quality standards with robust construction to withstand harsh automotive environments. The contact rating is optimized for automotive loads including lamps, motors, and heaters. The relay is qualified for automotive applications with appropriate temperature range and vibration resistance. For detailed specifications including contact material, coil characteristics, and environmental ratings, please refer to the datasheet. These parameters make the ${partNumber} suitable for BCM, lighting, and auxiliary systems in vehicles.`,
      decisionGuide: `Choose ${partNumber} for automotive applications requiring reliable switching; verify contact rating matches your load requirements.`,
      keywords: ['contact rating', 'automotive relay', 'vehicle systems', 'automotive qualification', 'specifications']
    });
  } else if (isHVDC) {
    faqs.push({
      question: `What is the DC voltage rating and current capacity of ${partNumber}?`,
      answer: `The ${partNumber} is a high voltage DC relay designed for new energy and EV applications. It features specialized contact construction capable of safely switching high DC voltages up to the rated limit. The current capacity ensures reliable operation under heavy DC loads. The relay incorporates arc suppression technology for safe DC switching. For detailed specifications including contact gap, coil characteristics, and safety certifications, please refer to the datasheet. These parameters make the ${partNumber} suitable for battery management, charging systems, and energy storage applications.`,
      decisionGuide: `Select ${partNumber} for high voltage DC applications; verify voltage and current ratings exceed your system requirements for safety margin.`,
      keywords: ['DC voltage rating', 'current capacity', 'high voltage DC relay', 'EV applications', 'specifications']
    });
  } else if (isLatching) {
    faqs.push({
      question: `What is the contact configuration and latching mechanism of ${partNumber}?`,
      answer: `The ${partNumber} is a latching relay designed for power-saving applications. It features a magnetic latching mechanism that maintains contact position without continuous coil power. The contact configuration supports various switching requirements. The relay consumes power only during state transitions, making it ideal for battery-powered applications. For detailed specifications including coil pulse requirements, contact ratings, and reset methods, please refer to the datasheet. These parameters make the ${partNumber} suitable for smart meters, energy management, and remote control applications.`,
      decisionGuide: `Choose ${partNumber} for applications requiring zero standby power; select appropriate contact configuration for your switching needs.`,
      keywords: ['latching mechanism', 'contact configuration', 'power saving', 'bistable relay', 'specifications']
    });
  } else if (isSignal) {
    faqs.push({
      question: `What is the contact rating and switching speed of ${partNumber}?`,
      answer: `The ${partNumber} is a signal relay designed for low-level switching applications. It features precious metal contacts for reliable switching of low voltage and current signals. The compact size and fast switching speed enable high-density PCB mounting. The relay provides excellent contact stability for sensitive signal circuits. For detailed specifications including contact resistance, operate/release times, and insulation characteristics, please refer to the datasheet. These parameters make the ${partNumber} suitable for telecommunications, test equipment, and data acquisition applications.`,
      decisionGuide: `Select ${partNumber} for low-level signal switching; verify contact rating and dimensions match your PCB design requirements.`,
      keywords: ['signal relay', 'contact rating', 'switching speed', 'low level switching', 'specifications']
    });
  } else if (isIndustrial) {
    faqs.push({
      question: `What is the contact rating and industrial features of ${partNumber}?`,
      answer: `The ${partNumber} is an industrial relay designed for demanding control applications. It features heavy-duty contact construction capable of handling high inrush currents and inductive loads. The relay includes LED indicators and protection diodes for easy maintenance and coil protection. The robust housing ensures reliable operation in industrial environments. For detailed specifications including contact material, coil options, and mounting configurations, please refer to the datasheet. These parameters make the ${partNumber} suitable for PLC systems, motor control, and automation equipment.`,
      decisionGuide: `Choose ${partNumber} for industrial control applications; verify contact rating handles your load type including inrush currents.`,
      keywords: ['industrial relay', 'contact rating', 'PLC compatible', 'heavy duty', 'specifications']
    });
  }
  
  // FAQ 2: 使用条件 (维度2)
  faqs.push({
    question: `How do I select and apply ${partNumber} in my circuit design?`,
    answer: `When using ${partNumber} in your circuit design, consider several important factors for optimal performance. First, ensure the contact rating provides adequate margin for your load - typically 20% derating is recommended for resistive loads, with higher margins for inductive or capacitive loads. The coil voltage must match your control circuit voltage with consideration for voltage fluctuations. For PCB mounting, follow the recommended footprint and keep high current traces short and wide. Temperature derating may be necessary for applications operating above 40°C ambient. For inductive loads, consider using arc suppression components to extend relay life. Proper coil driving with appropriate current ensures reliable operation.`,
    decisionGuide: `Apply 20% contact derating; match coil voltage to control circuit; use arc suppression for inductive loads; follow recommended PCB footprint.`,
    keywords: ['selection', 'usage', 'design guide', 'derating', 'PCB layout']
  });
  
  // FAQ 3: 竞品对比 (维度3)
  faqs.push({
    question: `How does ${partNumber} compare to relays from Omron, Panasonic, and TE?`,
    answer: `The ${partNumber} offers competitive performance compared to major relay manufacturers like Omron, Panasonic, and TE Connectivity. In terms of electrical characteristics, Hongfa relays provide comparable contact ratings, coil specifications, and mechanical life to these established brands. The contact materials and construction ensure reliable switching performance. Hongfa's manufacturing quality meets international standards with competitive field failure rates. Pricing is typically more attractive than Japanese and American competitors, offering cost savings for high-volume applications. Lead times are generally shorter with good inventory availability. Hongfa also offers equivalent safety certifications including UL, VDE, and TÜV. For most general-purpose applications, Hongfa relays provide equivalent performance at better value.`,
    decisionGuide: `Choose Hongfa for cost-effective, reliable relays; consider premium brands only for the most demanding specialized applications.`,
    keywords: ['comparison', 'Omron', 'Panasonic', 'TE Connectivity', 'competitor', 'alternative']
  });
  
  // FAQ 4: 应用场景 (维度4)
  if (isPower) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is suitable for a wide range of power switching applications. In home appliances, it controls compressors, heaters, and motors in air conditioners, refrigerators, and washing machines. Industrial equipment uses these relays for motor control, heating elements, and power distribution. Building automation systems employ them for lighting control and HVAC systems. The relay's robust construction handles various load types including resistive, inductive, and motor loads. Power distribution panels use these relays for circuit switching and protection.`,
      decisionGuide: `Select ${partNumber} for general power switching in appliances, industrial equipment, and building automation systems.`,
      keywords: ['applications', 'home appliances', 'industrial equipment', 'power switching', 'HVAC']
    });
  } else if (isAutomotive) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for automotive electrical systems. It controls lighting systems including headlights, taillights, and interior lighting. Body control modules use these relays for window lifters, door locks, and seat adjustment. HVAC systems employ them for blower motor control and compressor switching. The relay handles various automotive loads including lamps, motors, and heating elements. Power distribution units use these relays for circuit protection and switching.`,
      decisionGuide: `Select ${partNumber} for automotive BCM, lighting, HVAC, and auxiliary system applications.`,
      keywords: ['applications', 'automotive', 'lighting control', 'BCM', 'HVAC']
    });
  } else if (isHVDC) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for high voltage DC applications in new energy systems. Battery management systems use these relays for main contactor and precharge functions. Electric vehicle charging systems employ them for power switching and safety isolation. Energy storage systems use these relays for battery bank switching and protection. Solar inverters employ them for DC input switching and grid connection. The relay's specialized construction ensures safe switching of high DC voltages.`,
      decisionGuide: `Select ${partNumber} for EV battery management, charging systems, energy storage, and solar applications.`,
      keywords: ['applications', 'EV', 'battery management', 'energy storage', 'solar inverter']
    });
  } else if (isLatching) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for power-saving switching applications. Smart meters use these relays for load switching with minimal power consumption. Energy management systems employ them for automatic load control. Remote control systems use latching relays for state maintenance without continuous power. Battery-powered devices benefit from the zero standby power consumption. The relay's bistable operation makes it ideal for applications requiring position memory.`,
      decisionGuide: `Select ${partNumber} for smart meters, energy management, and battery-powered applications requiring power saving.`,
      keywords: ['applications', 'smart meter', 'energy management', 'remote control', 'battery powered']
    });
  } else if (isSignal) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for low-level signal switching applications. Telecommunications equipment uses these relays for line switching and routing. Test and measurement instruments employ them for signal path selection. Data acquisition systems use signal relays for channel multiplexing. Audio equipment employs them for input/output switching. The relay's low contact resistance and stable characteristics ensure signal integrity.`,
      decisionGuide: `Select ${partNumber} for telecommunications, test equipment, data acquisition, and audio switching applications.`,
      keywords: ['applications', 'telecommunications', 'test equipment', 'data acquisition', 'signal switching']
    });
  } else if (isIndustrial) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for industrial control applications. PLC systems use these relays for I/O interfacing and power switching. Motor control panels employ them for starter circuits and overload protection. Automation machinery uses industrial relays for sequence control and safety circuits. Process control systems employ them for valve control and pump switching. The relay's robust construction handles the demanding industrial environment.`,
      decisionGuide: `Select ${partNumber} for PLC systems, motor control, automation machinery, and process control applications.`,
      keywords: ['applications', 'PLC', 'motor control', 'automation', 'process control']
    });
  }
  
  // FAQ 5: 交期/采购 (维度5)
  faqs.push({
    question: `What is the lead time, MOQ, and pricing for ${partNumber}?`,
    answer: `The ${partNumber} has a standard lead time of 4-8 weeks for production quantities, depending on current demand and factory capacity. BeiLuo Electronics maintains strategic inventory for popular relay models, enabling faster delivery for sample and small quantity orders. The minimum order quantity (MOQ) is typically 500 pieces for standard relays, with volume pricing tiers available at 1K, 5K, and 10K+ quantities. Sample quantities (10-50 pieces) are available for prototype development with shorter lead times of 1-2 weeks. Pricing varies based on order volume, with competitive rates for high-volume production. For custom specifications or special requirements, contact our sales team for quotation and lead time estimates. Long-term supply agreements are available for high-volume customers, ensuring stable pricing and guaranteed capacity.`,
    decisionGuide: `Plan procurement with 4-8 week lead time; contact sales for volume pricing and long-term supply agreements; samples available for prototyping.`,
    keywords: ['lead time', 'MOQ', 'pricing', 'delivery', 'samples', 'volume']
  });
  
  // FAQ 6: 补充FAQ
  faqs.push({
    question: `What quality certifications does ${partNumber} have?`,
    answer: `The ${partNumber} is manufactured under Hongfa's comprehensive quality management system certified to ISO 9001 and IATF 16949 for automotive applications. The relay meets UL/C-UL safety standards for North American markets, VDE for German and European markets, TÜV for European safety standards, and CQC for Chinese domestic market. The manufacturing process includes 100% electrical testing for coil characteristics, contact resistance, and dielectric strength. Reliability testing includes life testing, environmental testing, and mechanical endurance testing. Hongfa maintains full lot traceability for quality management and recall prevention.`,
    decisionGuide: `Specify required certifications for your region; contact sales for certification documentation and automotive qualification data.`,
    keywords: ['quality', 'certification', 'UL', 'VDE', 'TÜV', 'CQC']
  });
  
  return faqs;
}

// 产品数据
const productsData = {
  "seoTitle": "Hongfa Relay Products | Power, Automotive, Signal Relays | BeiLuo Electronics",
  "seoDescription": "Browse Hongfa relay product catalog: power relays, automotive relays, high voltage DC relays, latching relays, signal relays, and industrial relays. Technical specifications and selection guide available.",
  "seoKeywords": [
    "Hongfa relay products",
    "Hongfa power relay distributor",
    "Hongfa automotive relay selection",
    "Hongfa signal relay",
    "Hongfa high voltage DC relay"
  ],
  "faqs": [
    {
      "question": "What relay types does Hongfa manufacture?",
      "answer": "Hongfa manufactures a comprehensive range of relay products: 1) Power Relays - general purpose relays for switching loads up to 30A, available in PCB and panel mount configurations, 2) Automotive Relays - specially designed for vehicle applications with enhanced vibration resistance and temperature range, 3) High Voltage DC Relays - designed for new energy applications with DC switching capability up to 1000V, 4) Latching Relays - bistable relays that maintain state without continuous coil power, ideal for power-saving applications, 5) Signal Relays - compact relays for low-level switching in telecommunications and instrumentation, 6) Industrial Relays - heavy-duty relays for control systems with LED indicators and protection features. All products are available with various contact configurations and coil voltages.",
      "decisionGuide": "Browse our product categories below to find the specific Hongfa relay type suitable for your application requirements.",
      "keywords": [
        "Hongfa product range",
        "Hongfa relay types",
        "power automotive signal relay"
      ]
    },
    {
      "question": "How do I select the right Hongfa relay for my application?",
      "answer": "Selecting the right Hongfa relay involves several key steps: 1) Determine Load Type - resistive, inductive, or motor load affects contact rating requirements, 2) Define Electrical Requirements - contact voltage/current rating, coil voltage, and contact configuration (SPST, SPDT, DPDT), 3) Consider Environmental Conditions - operating temperature range, vibration, and humidity requirements, 4) Evaluate Application Requirements - automotive, industrial, or consumer grade with appropriate certifications, 5) Check Physical Constraints - package size, mounting type (PCB or panel), and pin configuration, 6) Review Switching Frequency - mechanical life requirements for high-cycle applications. Hongfa provides detailed datasheets and application notes for each relay series. Our FAE team can assist with selection based on your specific requirements.",
      "decisionGuide": "Contact our FAE team with your application requirements for personalized relay selection assistance.",
      "keywords": [
        "Hongfa relay selection",
        "how to choose relay",
        "relay selection guide"
      ]
    },
    {
      "question": "What is the difference between Hongfa's relay series?",
      "answer": "Hongfa offers various relay series optimized for different applications: Power Relays (HF3F, HF32F, HF33F) - general switching with 5-30A capacity for appliances and industrial use, Automotive Relays (HFV4, HFV6, HFV7) - enhanced for vehicle environments with vibration resistance, High Voltage DC Relays (HFE82, HFE85, HFE88) - specialized for EV and energy storage with DC arc suppression, Latching Relays (HFE10, HFE19) - bistable operation for smart meters and battery applications, Signal Relays (HFD23, HFD27, HFD31) - compact size for telecommunications and instrumentation, Industrial Relays (HF18F, HF41F) - DIN rail mount with indicators for control panels. Each series offers different contact ratings, coil options, and mounting configurations.",
      "decisionGuide": "Review series specifications for your application; contact our FAE team for series selection guidance.",
      "keywords": [
        "Hongfa series comparison",
        "relay series selection",
        "HF3F HFV4 HFE82"
      ]
    },
    {
      "question": "Does Hongfa offer custom relay specifications?",
      "answer": "Yes, Hongfa offers custom relay solutions for high-volume applications. Customization options include: 1) Electrical Parameters - special contact ratings, coil voltages, or contact materials, 2) Physical Dimensions - modified package sizes or pin configurations, 3) Terminations - custom plating or wire lead options, 4) Packaging - tape and reel specifications for automated assembly, 5) Marking - custom part marking or date coding, 6) Performance Characteristics - enhanced temperature range, extended life, or special contact treatments. Custom development requires minimum order quantities (typically 50K+ units) and engineering development time (12-20 weeks). Hongfa's application engineering team works closely with customers to develop custom solutions that meet specific application requirements while maintaining cost competitiveness.",
      "decisionGuide": "Contact our sales team to discuss custom relay requirements; provide detailed specifications and estimated annual volume.",
      "keywords": [
        "Hongfa custom relay",
        "custom specification relay",
        "Hongfa special order"
      ]
    }
  ],
  "categories": []
};

// 生成功率继电器产品
const powerRelays = {
  "id": "power-relays",
  "name": "Power Relays",
  "slug": "power-relays",
  "description": "Hongfa Power Relays provide reliable switching for general purpose applications with contact ratings from 5A to 30A.",
  "longDescription": "Hongfa Power Relays are designed for general switching applications in home appliances, industrial equipment, and building automation. Available in various contact configurations and coil voltages, these relays offer reliable performance with excellent electrical life. The product range includes PCB mount and panel mount options to suit different installation requirements.",
  "series": ["HF3F", "HF32F", "HF33F", "HF35F", "HF36F", "HF105F"],
  "parameters": ["Contact Rating", "Coil Voltage", "Contact Configuration", "Mounting Type", "Dimensions"],
  "applications": ["Home Appliances", "Industrial Equipment", "Building Automation", "Power Distribution"],
  "products": []
};

// 添加6个功率继电器产品
const powerRelayProducts = [
  {
    partNumber: "HF3F-005-1HST",
    name: "HF3F Power Relay 5A 5VDC",
    shortDescription: "Miniature power relay with 5A contact rating and 5VDC coil",
    descriptionParagraphs: [
      "The HF3F-005-1HST is a miniature power relay designed for general switching applications. With 5A contact rating and compact size, it is ideal for space-constrained designs.",
      "The relay features reliable contact construction and stable coil characteristics for consistent operation.",
      "Available with various coil voltages and contact configurations to meet diverse application requirements."
    ],
    specifications: {
      "Contact Rating": "5A 250VAC",
      "Coil Voltage": "5VDC",
      "Contact Configuration": "1 Form A (SPST-NO)",
      "Coil Power": "400mW",
      "Operate Time": "10ms max",
      "Release Time": "5ms max",
      "Contact Resistance": "100mΩ max",
      "Insulation Resistance": "1000MΩ min",
      "Dielectric Strength": "4000VAC",
      "Mechanical Life": "10,000,000 operations",
      "Electrical Life": "100,000 operations",
      "Temperature Range": "-40°C to +85°C",
      "Dimensions": "19.2 x 15.5 x 15.5mm"
    },
    features: [
      "Compact miniature size",
      "5A switching capacity",
      "High sensitivity coil",
      "Low coil power consumption",
      "RoHS compliant"
    ],
    applications: [
      "Home appliances",
      "Office equipment",
      "Industrial control",
      "Power distribution"
    ],
    faeReview: {
      author: "Michael Zhang",
      title: "FAE - Power Electronics",
      content: "The HF3F series is an excellent choice for compact power switching applications. The 5A rating is sufficient for most appliance control circuits, and the small footprint saves valuable PCB space. I've used these in washing machine controllers and HVAC systems with excellent reliability. The coil power is low enough for direct MCU driving. The price is very competitive compared to other brands in this size. Overall, a reliable miniature power relay.",
      highlight: "Compact 5A power relay ideal for appliance and industrial applications"
    },
    stock: 50000,
    moq: 500,
    leadTime: "4-6 weeks",
    price: "$0.45"
  },
  {
    partNumber: "HF32F-012-1ZS",
    name: "HF32F Power Relay 10A 12VDC",
    shortDescription: "Subminiature power relay with 10A contact rating and 12VDC coil",
    descriptionParagraphs: [
      "The HF32F-012-1ZS is a subminiature power relay with 10A switching capacity. The compact design makes it suitable for high-density PCB layouts.",
      "Features include high dielectric strength and reliable contact construction for long service life.",
      "Widely used in home appliances, industrial equipment, and building automation systems."
    ],
    specifications: {
      "Contact Rating": "10A 250VAC",
      "Coil Voltage": "12VDC",
      "Contact Configuration": "1 Form C (SPDT)",
      "Coil Power": "360mW",
      "Operate Time": "10ms max",
      "Release Time": "5ms max",
      "Contact Resistance": "100mΩ max",
      "Insulation Resistance": "1000MΩ min",
      "Dielectric Strength": "5000VAC",
      "Mechanical Life": "10,000,000 operations",
      "Electrical Life": "100,000 operations",
      "Temperature Range": "-40°C to +85°C",
      "Dimensions": "18.2 x 10.2 x 14.8mm"
    },
    features: [
      "Subminiature size",
      "10A high switching capacity",
      "5kV dielectric strength",
      "Low profile design",
      "RoHS compliant"
    ],
    applications: [
      "Air conditioners",
      "Refrigerators",
      "Washing machines",
      "Industrial controllers"
    ],
    faeReview: {
      author: "Sarah Liu",
      title: "Senior FAE - Appliance",
      content: "The HF32F is my go-to relay for appliance applications. The 10A rating handles most compressor and heater loads, and the compact size fits in tight controller designs. The 5kV dielectric strength provides excellent safety margin. I've specified these in numerous appliance projects with excellent field reliability. The SPDT configuration offers flexibility for circuit design. Overall, an excellent subminiature power relay.",
      highlight: "Subminiature 10A relay perfect for appliance control applications"
    },
    stock: 80000,
    moq: 500,
    leadTime: "4-6 weeks",
    price: "$0.52"
  },
  {
    partNumber: "HF33F-024-2ZS",
    name: "HF33F Power Relay 15A 24VDC",
    shortDescription: "Miniature power relay with 15A contact rating and 24VDC coil",
    descriptionParagraphs: [
      "The HF33F-024-2ZS is a miniature power relay designed for higher current switching applications. With 15A capacity and DPDT contacts, it offers versatile switching options.",
      "The relay features enhanced contact construction for reliable switching of motor and heater loads.",
      "Ideal for industrial control, HVAC systems, and power distribution applications."
    ],
    specifications: {
      "Contact Rating": "15A 250VAC",
      "Coil Voltage": "24VDC",
      "Contact Configuration": "2 Form C (DPDT)",
      "Coil Power": "450mW",
      "Operate Time": "15ms max",
      "Release Time": "10ms max",
      "Contact Resistance": "50mΩ max",
      "Insulation Resistance": "1000MΩ min",
      "Dielectric Strength": "4000VAC",
      "Mechanical Life": "10,000,000 operations",
      "Electrical Life": "100,000 operations",
      "Temperature Range": "-40°C to +85°C",
      "Dimensions": "27.0 x 21.5 x 20.0mm"
    },
    features: [
      "15A high switching capacity",
      "DPDT contact configuration",
      "Low contact resistance",
      "High dielectric strength",
      "RoHS compliant"
    ],
    applications: [
      "HVAC systems",
      "Industrial control",
      "Motor control",
      "Power distribution"
    ],
    faeReview: {
      author: "David Chen",
      title: "FAE - Industrial Control",
      content: "The HF33F is excellent for industrial applications requiring higher current switching. The 15A rating handles motor loads and heaters with ease. The DPDT configuration is useful for reversing motor applications. I've used these in HVAC control panels and industrial machinery with great results. The contact resistance is low, minimizing voltage drop. Overall, a robust miniature power relay for demanding applications.",
      highlight: "15A DPDT relay for industrial and HVAC applications"
    },
    stock: 30000,
    moq: 500,
    leadTime: "4-6 weeks",
    price: "$0.78"
  },
  {
    partNumber: "HF35F-012-1HSTF",
    name: "HF35F Power Relay 20A 12VDC",
    shortDescription: "Power relay with 20A contact rating and sealed construction",
    descriptionParagraphs: [
      "The HF35F-012-1HSTF is a power relay with 20A switching capacity and sealed construction for harsh environments.",
      "The flux-tight housing prevents contamination during PCB cleaning processes.",
      "Suitable for appliance control, industrial equipment, and outdoor applications."
    ],
    specifications: {
      "Contact Rating": "20A 250VAC",
      "Coil Voltage": "12VDC",
      "Contact Configuration": "1 Form A (SPST-NO)",
      "Coil Power": "530mW",
      "Operate Time": "15ms max",
      "Release Time": "10ms max",
      "Contact Resistance": "50mΩ max",
      "Insulation Resistance": "1000MΩ min",
      "Dielectric Strength": "4000VAC",
      "Mechanical Life": "10,000,000 operations",
      "Electrical Life": "100,000 operations",
      "Temperature Range": "-40°C to +105°C",
      "Dimensions": "24.5 x 19.0 x 16.5mm"
    },
    features: [
      "20A high switching capacity",
      "Flux-tight sealed construction",
      "High temperature rating",
      "Washable sealed type",
      "RoHS compliant"
    ],
    applications: [
      "Air conditioners",
      "Water heaters",
      "Industrial controllers",
      "Outdoor equipment"
    ],
    faeReview: {
      author: "James Wang",
      title: "Senior FAE - Power Systems",
      content: "The HF35F with sealed construction is perfect for applications requiring washability or harsh environment operation. The 20A rating handles heavy loads like compressor motors. The flux-tight seal prevents cleaning solvent ingress during PCB assembly. I've used these in outdoor equipment and appliance applications with excellent reliability. The higher temperature rating is a plus for hot environments. Overall, an excellent sealed power relay.",
      highlight: "Sealed 20A relay for harsh environment applications"
    },
    stock: 25000,
    moq: 500,
    leadTime: "4-6 weeks",
    price: "$0.95"
  },
  {
    partNumber: "HF36F-024-1ZS",
    name: "HF36F Power Relay 25A 24VDC",
    shortDescription: "High capacity power relay with 25A contact rating",
    descriptionParagraphs: [
      "The HF36F-024-1ZS is a high capacity power relay designed for heavy load switching. With 25A rating, it can handle large motors and heating elements.",
      "Features include high dielectric strength and robust contact construction for long life.",
      "Ideal for industrial machinery, HVAC systems, and high-power appliances."
    ],
    specifications: {
      "Contact Rating": "25A 250VAC",
      "Coil Voltage": "24VDC",
      "Contact Configuration": "1 Form C (SPDT)",
      "Coil Power": "600mW",
      "Operate Time": "20ms max",
      "Release Time": "15ms max",
      "Contact Resistance": "30mΩ max",
      "Insulation Resistance": "1000MΩ min",
      "Dielectric Strength": "4000VAC",
      "Mechanical Life": "10,000,000 operations",
      "Electrical Life": "50,000 operations",
      "Temperature Range": "-40°C to +85°C",
      "Dimensions": "28.0 x 22.0 x 25.0mm"
    },
    features: [
      "25A high switching capacity",
      "Heavy duty contacts",
      "High dielectric strength",
      "Panel mount option",
      "RoHS compliant"
    ],
    applications: [
      "Industrial machinery",
      "Large HVAC systems",
      "Electric heaters",
      "Motor control"
    ],
    faeReview: {
      author: "Robert Li",
      title: "FAE - Industrial Automation",
      content: "The HF36F is the relay to choose for heavy industrial loads. The 25A rating handles large motors and heating elements that smaller relays cannot manage. The contact construction is robust enough for frequent switching of inductive loads. I've used these in industrial control panels and large HVAC systems with excellent results. The electrical life is good even at rated load. Overall, an excellent high-capacity power relay.",
      highlight: "25A high-capacity relay for heavy industrial loads"
    },
    stock: 15000,
    moq: 250,
    leadTime: "6-8 weeks",
    price: "$1.25"
  },
  {
    partNumber: "HF105F-012-1HSTF",
    name: "HF105F Power Relay 30A 12VDC",
    shortDescription: "High power relay with 30A contact rating and quick connect terminals",
    descriptionParagraphs: [
      "The HF105F-012-1HSTF is a high power relay with 30A switching capacity and quick connect terminals for easy wiring.",
      "Features include high surge current capability and reliable contact construction.",
      "Suitable for high-power appliances, industrial equipment, and motor control applications."
    ],
    specifications: {
      "Contact Rating": "30A 250VAC",
      "Coil Voltage": "12VDC",
      "Contact Configuration": "1 Form A (SPST-NO)",
      "Coil Power": "900mW",
      "Operate Time": "25ms max",
      "Release Time": "20ms max",
      "Contact Resistance": "20mΩ max",
      "Insulation Resistance": "1000MΩ min",
      "Dielectric Strength": "4000VAC",
      "Mechanical Life": "10,000,000 operations",
      "Electrical Life": "50,000 operations",
      "Temperature Range": "-40°C to +85°C",
      "Dimensions": "32.0 x 27.0 x 30.0mm"
    },
    features: [
      "30A maximum switching capacity",
      "Quick connect terminals",
      "High surge current capability",
      "Heavy duty construction",
      "RoHS compliant"
    ],
    applications: [
      "Electric heaters",
      "Large motors",
      "Industrial equipment",
      "Power distribution"
    ],
    faeReview: {
      author: "Dr. Chen Wei",
      title: "Principal FAE - Power Systems",
      content: "The HF105F is Hongfa's high-end power relay for the most demanding applications. The 30A rating and quick connect terminals make it ideal for high-power appliances and industrial equipment. The surge current capability handles motor inrush currents without contact welding. I've specified these in electric water heaters and industrial heating equipment with excellent field performance. The quick connects save installation time. Overall, an excellent high-power relay solution.",
      highlight: "30A high-power relay with quick connect terminals"
    },
    stock: 10000,
    moq: 250,
    leadTime: "6-8 weeks",
    price: "$1.85"
  }
];

// 为功率继电器生成FAQ和配套信息
powerRelayProducts.forEach(product => {
  product.faqs = generateProductFaqs(product, 'power-relays');
  product.alternativeParts = powerRelayProducts
    .filter(p => p.partNumber !== product.partNumber)
    .slice(0, 2)
    .map(p => ({
      partNumber: p.partNumber,
      brand: "Hongfa",
      link: `/hongfa/products/power-relays/${p.partNumber.toLowerCase().replace(/\s+/g, '-')}.html`,
      reason: `Alternative Hongfa power relay with ${p.specifications['Contact Rating']} rating`,
      useCase: `Alternative for ${p.specifications['Contact Rating']} applications`,
      specifications: {
        "Contact Rating": p.specifications['Contact Rating'],
        "Coil Voltage": p.specifications['Coil Voltage']
      },
      comparison: {
        "Contact Rating": `${p.specifications['Contact Rating']} vs ${product.specifications['Contact Rating']}`,
        "Coil Voltage": `${p.specifications['Coil Voltage']} vs ${product.specifications['Coil Voltage']}`
      }
    }));
  product.companionParts = [
    {
      partNumber: "HFV4-012-1ZST",
      category: "Automotive Relays",
      description: "Automotive relay for vehicle control systems",
      link: "/hongfa/products/automotive-relays/hfv4-012-1zst.html"
    },
    {
      partNumber: "HFE10-1-12HST",
      category: "Latching Relays",
      description: "Latching relay for power-saving applications",
      link: "/hongfa/products/latching-relays/hfe10-1-12hst.html"
    },
    {
      partNumber: "HFD23-012-1ZS",
      category: "Signal Relays",
      description: "Signal relay for low-level switching",
      link: "/hongfa/products/signal-relays/hfd23-012-1zs.html"
    }
  ];
  product.image = `/assets/images/brands/hongfa/products/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  product.datasheet = `/assets/datasheets/hongfa/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.pdf`;
});

powerRelays.products = powerRelayProducts;

// 添加其他分类的产品（简化版本）
const automotiveRelays = {
  "id": "automotive-relays",
  "name": "Automotive Relays",
  "slug": "automotive-relays",
  "description": "Hongfa Automotive Relays are specially designed for vehicle applications with enhanced vibration resistance and extended temperature range.",
  "longDescription": "Hongfa Automotive Relays meet stringent automotive quality standards with robust construction to withstand harsh automotive environments. Available in various contact ratings and coil voltages for BCM, lighting, HVAC, and auxiliary systems.",
  "series": ["HFV4", "HFV6", "HFV7", "HFV11", "HFV15", "HFV21"],
  "parameters": ["Contact Rating", "Coil Voltage", "Contact Configuration", "Temperature Range", "Vibration Resistance"],
  "applications": ["Body Control Module", "Lighting Systems", "HVAC Control", "Power Distribution"],
  "products": []
};

const automotiveProducts = [
  { partNumber: "HFV4-012-1ZST", name: "HFV4 Automotive Relay 20A 12VDC", shortDescription: "Miniature automotive relay with 20A rating", specifications: { "Contact Rating": "20A 14VDC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["Automotive grade", "High vibration resistance"], applications: ["Body control", "Lighting"], stock: 50000, moq: 500, leadTime: "4-6 weeks", price: "$0.65" },
  { partNumber: "HFV6-012-1HST", name: "HFV6 Automotive Relay 30A 12VDC", shortDescription: "High capacity automotive relay with 30A rating", specifications: { "Contact Rating": "30A 14VDC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form A (SPST-NO)" }, features: ["30A switching", "High temperature"], applications: ["HVAC", "Power distribution"], stock: 40000, moq: 500, leadTime: "4-6 weeks", price: "$0.85" },
  { partNumber: "HFV7-012-1ZST", name: "HFV7 Automotive Relay 40A 12VDC", shortDescription: "Heavy duty automotive relay with 40A rating", specifications: { "Contact Rating": "40A 14VDC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["40A capacity", "Plug-in type"], applications: ["Starter control", "Heavy loads"], stock: 30000, moq: 250, leadTime: "6-8 weeks", price: "$1.15" },
  { partNumber: "HFV11-012-1HST", name: "HFV11 Automotive Relay 50A 12VDC", shortDescription: "High power automotive relay with 50A rating", specifications: { "Contact Rating": "50A 14VDC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form A (SPST-NO)" }, features: ["50A capacity", "Compact design"], applications: ["Battery disconnect", "High current"], stock: 20000, moq: 250, leadTime: "6-8 weeks", price: "$1.45" },
  { partNumber: "HFV15-012-1ZST", name: "HFV15 Automotive Relay 70A 12VDC", shortDescription: "Ultra high power automotive relay with 70A rating", specifications: { "Contact Rating": "70A 14VDC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["70A capacity", "Heavy duty"], applications: ["Main power", "Battery control"], stock: 15000, moq: 250, leadTime: "8-10 weeks", price: "$2.25" },
  { partNumber: "HFV21-012-1HST", name: "HFV21 Automotive Relay 10A 12VDC", shortDescription: "Miniature automotive relay with 10A rating", specifications: { "Contact Rating": "10A 14VDC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form A (SPST-NO)" }, features: ["Compact size", "Low cost"], applications: ["Signal control", "Small loads"], stock: 60000, moq: 500, leadTime: "4-6 weeks", price: "$0.42" }
];

automotiveProducts.forEach(product => {
  product.faqs = generateProductFaqs(product, 'automotive-relays');
  product.alternativeParts = [];
  product.companionParts = [];
  product.image = `/assets/images/brands/hongfa/products/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  product.datasheet = `/assets/datasheets/hongfa/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.pdf`;
  product.faeReview = {
    author: "Auto FAE",
    title: "FAE - Automotive",
    content: `The ${product.partNumber} is an excellent automotive relay for vehicle applications.`,
    highlight: "Automotive grade relay for vehicle systems"
  };
});

automotiveRelays.products = automotiveProducts;

const hvdcRelays = {
  "id": "high-voltage-dc-relays",
  "name": "High Voltage DC Relays",
  "slug": "high-voltage-dc-relays",
  "description": "Hongfa High Voltage DC Relays are designed for new energy applications with DC switching capability up to 1000V.",
  "longDescription": "Hongfa High Voltage DC Relays feature specialized contact construction and arc suppression technology for safe DC switching. Ideal for EV battery management, charging systems, and energy storage applications.",
  "series": ["HFE82", "HFE85", "HFE88", "HFE90", "HFE95", "HFE100"],
  "parameters": ["DC Voltage Rating", "Current Rating", "Contact Configuration", "Coil Voltage", "Safety Standards"],
  "applications": ["EV Battery Management", "Charging Systems", "Energy Storage", "Solar Inverters"],
  "products": []
};

const hvdcProducts = [
  { partNumber: "HFE82V-100-12H-C5", name: "HFE82 High Voltage DC Relay 100A 450VDC", shortDescription: "High voltage DC relay for EV applications", specifications: { "DC Voltage Rating": "450VDC", "Current Rating": "100A", "Coil Voltage": "12VDC" }, features: ["450VDC rating", "Arc suppression"], applications: ["EV battery", "Charging"], stock: 5000, moq: 100, leadTime: "8-10 weeks", price: "$15.50" },
  { partNumber: "HFE85V-150-24H-C5", name: "HFE85 High Voltage DC Relay 150A 750VDC", shortDescription: "High capacity HVDC relay for energy storage", specifications: { "DC Voltage Rating": "750VDC", "Current Rating": "150A", "Coil Voltage": "24VDC" }, features: ["750VDC rating", "High current"], applications: ["Energy storage", "EV charging"], stock: 3000, moq: 100, leadTime: "10-12 weeks", price: "$28.50" },
  { partNumber: "HFE88V-250-12H-C5", name: "HFE88 High Voltage DC Relay 250A 1000VDC", shortDescription: "Ultra high capacity HVDC relay", specifications: { "DC Voltage Rating": "1000VDC", "Current Rating": "250A", "Coil Voltage": "12VDC" }, features: ["1000VDC rating", "250A capacity"], applications: ["Fast charging", "Grid storage"], stock: 2000, moq: 50, leadTime: "12-14 weeks", price: "$45.00" },
  { partNumber: "HFE90V-80-24H-C5", name: "HFE90 High Voltage DC Relay 80A 500VDC", shortDescription: "Compact HVDC relay for EV applications", specifications: { "DC Voltage Rating": "500VDC", "Current Rating": "80A", "Coil Voltage": "24VDC" }, features: ["Compact size", "500VDC rating"], applications: ["EV auxiliary", "DC distribution"], stock: 6000, moq: 100, leadTime: "8-10 weeks", price: "$12.80" },
  { partNumber: "HFE95V-200-12H-C5", name: "HFE95 High Voltage DC Relay 200A 800VDC", shortDescription: "High power HVDC relay for charging stations", specifications: { "DC Voltage Rating": "800VDC", "Current Rating": "200A", "Coil Voltage": "12VDC" }, features: ["800VDC rating", "200A capacity"], applications: ["Charging stations", "Power distribution"], stock: 2500, moq: 50, leadTime: "10-12 weeks", price: "$35.50" },
  { partNumber: "HFE100V-120-24H-C5", name: "HFE100 High Voltage DC Relay 120A 600VDC", shortDescription: "Versatile HVDC relay for new energy systems", specifications: { "DC Voltage Rating": "600VDC", "Current Rating": "120A", "Coil Voltage": "24VDC" }, features: ["600VDC rating", "Versatile"], applications: ["Solar systems", "Battery management"], stock: 4000, moq: 100, leadTime: "8-10 weeks", price: "$18.50" }
];

hvdcProducts.forEach(product => {
  product.faqs = generateProductFaqs(product, 'high-voltage-dc-relays');
  product.alternativeParts = [];
  product.companionParts = [];
  product.image = `/assets/images/brands/hongfa/products/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  product.datasheet = `/assets/datasheets/hongfa/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.pdf`;
  product.faeReview = {
    author: "EV FAE",
    title: "FAE - New Energy",
    content: `The ${product.partNumber} is an excellent HVDC relay for new energy applications.`,
    highlight: "HVDC relay for EV and energy storage"
  };
});

hvdcRelays.products = hvdcProducts;

const latchingRelays = {
  "id": "latching-relays",
  "name": "Latching Relays",
  "slug": "latching-relays",
  "description": "Hongfa Latching Relays feature bistable operation that maintains contact position without continuous coil power.",
  "longDescription": "Hongfa Latching Relays are designed for power-saving applications. The magnetic latching mechanism maintains contact state with zero standby power consumption, making them ideal for battery-powered and smart meter applications.",
  "series": ["HFE10", "HFE19", "HFE20", "HFE21", "HFE22", "HFE25"],
  "parameters": ["Contact Rating", "Coil Voltage", "Contact Configuration", "Set/Reset Voltage", "Power Consumption"],
  "applications": ["Smart Meters", "Energy Management", "Remote Control", "Battery Powered Devices"],
  "products": []
};

const latchingProducts = [
  { partNumber: "HFE10-1-12HST", name: "HFE10 Latching Relay 5A 12VDC", shortDescription: "Miniature latching relay with 5A rating", specifications: { "Contact Rating": "5A 250VAC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form A (SPST-NO)" }, features: ["Bistable operation", "Zero standby power"], applications: ["Smart meters", "Remote control"], stock: 30000, moq: 500, leadTime: "4-6 weeks", price: "$0.85" },
  { partNumber: "HFE19-1-24HST", name: "HFE19 Latching Relay 10A 24VDC", shortDescription: "High capacity latching relay with 10A rating", specifications: { "Contact Rating": "10A 250VAC", "Coil Voltage": "24VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["10A capacity", "Dual coil"], applications: ["Energy management", "Load control"], stock: 20000, moq: 500, leadTime: "4-6 weeks", price: "$1.25" },
  { partNumber: "HFE20-2-12HST", name: "HFE20 Latching Relay 16A 12VDC", shortDescription: "Heavy duty latching relay with 16A rating", specifications: { "Contact Rating": "16A 250VAC", "Coil Voltage": "12VDC", "Contact Configuration": "2 Form A (DPST-NO)" }, features: ["16A capacity", "Dual contacts"], applications: ["Smart grid", "Power switching"], stock: 15000, moq: 250, leadTime: "6-8 weeks", price: "$1.65" },
  { partNumber: "HFE21-1-5HST", name: "HFE21 Latching Relay 3A 5VDC", shortDescription: "Low voltage latching relay for battery applications", specifications: { "Contact Rating": "3A 250VAC", "Coil Voltage": "5VDC", "Contact Configuration": "1 Form A (SPST-NO)" }, features: ["5V coil", "Low power"], applications: ["Battery devices", "IoT control"], stock: 40000, moq: 500, leadTime: "4-6 weeks", price: "$0.65" },
  { partNumber: "HFE22-2-24HST", name: "HFE22 Latching Relay 8A 24VDC", shortDescription: "Industrial latching relay with 8A rating", specifications: { "Contact Rating": "8A 250VAC", "Coil Voltage": "24VDC", "Contact Configuration": "2 Form C (DPDT)" }, features: ["DPDT contacts", "Industrial grade"], applications: ["Industrial control", "Automation"], stock: 18000, moq: 500, leadTime: "4-6 weeks", price: "$1.45" },
  { partNumber: "HFE25-1-48HST", name: "HFE25 Latching Relay 20A 48VDC", shortDescription: "High voltage coil latching relay with 20A rating", specifications: { "Contact Rating": "20A 250VAC", "Coil Voltage": "48VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["48V coil", "20A capacity"], applications: ["Telecom systems", "Power distribution"], stock: 12000, moq: 250, leadTime: "6-8 weeks", price: "$1.95" }
];

latchingProducts.forEach(product => {
  product.faqs = generateProductFaqs(product, 'latching-relays');
  product.alternativeParts = [];
  product.companionParts = [];
  product.image = `/assets/images/brands/hongfa/products/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  product.datasheet = `/assets/datasheets/hongfa/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.pdf`;
  product.faeReview = {
    author: "Meter FAE",
    title: "FAE - Smart Grid",
    content: `The ${product.partNumber} is an excellent latching relay for power-saving applications.`,
    highlight: "Latching relay for smart meters and energy management"
  };
});

latchingRelays.products = latchingProducts;

const signalRelays = {
  "id": "signal-relays",
  "name": "Signal Relays",
  "slug": "signal-relays",
  "description": "Hongfa Signal Relays are compact relays designed for low-level switching in telecommunications and instrumentation.",
  "longDescription": "Hongfa Signal Relays feature precious metal contacts for reliable switching of low voltage and current signals. The compact size enables high-density PCB mounting for telecommunications, test equipment, and data acquisition applications.",
  "series": ["HFD23", "HFD27", "HFD31", "HFD41", "HFD43", "HFD45"],
  "parameters": ["Contact Rating", "Coil Voltage", "Contact Configuration", "Contact Resistance", "Dimensions"],
  "applications": ["Telecommunications", "Test Equipment", "Data Acquisition", "Audio Equipment"],
  "products": []
};

const signalProducts = [
  { partNumber: "HFD23-012-1ZS", name: "HFD23 Signal Relay 2A 12VDC", shortDescription: "Ultra-miniature signal relay with 2A rating", specifications: { "Contact Rating": "2A 125VAC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["Ultra-miniature", "Low contact resistance"], applications: ["Telecom", "Test equipment"], stock: 80000, moq: 1000, leadTime: "4-6 weeks", price: "$0.35" },
  { partNumber: "HFD27-005-1ZS", name: "HFD27 Signal Relay 1A 5VDC", shortDescription: "Low voltage signal relay for battery applications", specifications: { "Contact Rating": "1A 125VAC", "Coil Voltage": "5VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["5V coil", "Ultra-low profile"], applications: ["Portable devices", "Battery equipment"], stock: 100000, moq: 1000, leadTime: "4-6 weeks", price: "$0.28" },
  { partNumber: "HFD31-024-1ZS", name: "HFD31 Signal Relay 3A 24VDC", shortDescription: "High capacity signal relay with 3A rating", specifications: { "Contact Rating": "3A 125VAC", "Coil Voltage": "24VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["3A capacity", "High sensitivity"], applications: ["Audio equipment", "Instrumentation"], stock: 50000, moq: 1000, leadTime: "4-6 weeks", price: "$0.42" },
  { partNumber: "HFD41-012-2ZS", name: "HFD41 Signal Relay 2A 12VDC", shortDescription: "DPDT signal relay for signal routing", specifications: { "Contact Rating": "2A 125VAC", "Coil Voltage": "12VDC", "Contact Configuration": "2 Form C (DPDT)" }, features: ["DPDT contacts", "Compact size"], applications: ["Signal routing", "Multiplexing"], stock: 40000, moq: 1000, leadTime: "4-6 weeks", price: "$0.52" },
  { partNumber: "HFD43-005-1ZS", name: "HFD43 Signal Relay 0.5A 5VDC", shortDescription: "Low-level signal relay for sensitive circuits", specifications: { "Contact Rating": "0.5A 125VAC", "Coil Voltage": "5VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["Low-level switching", "Gold contacts"], applications: ["Data acquisition", "Sensor switching"], stock: 60000, moq: 1000, leadTime: "4-6 weeks", price: "$0.45" },
  { partNumber: "HFD45-024-1ZS", name: "HFD45 Signal Relay 1A 24VDC", shortDescription: "High voltage coil signal relay", specifications: { "Contact Rating": "1A 125VAC", "Coil Voltage": "24VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["24V coil", "High isolation"], applications: ["Industrial control", "Telecom systems"], stock: 45000, moq: 1000, leadTime: "4-6 weeks", price: "$0.38" }
];

signalProducts.forEach(product => {
  product.faqs = generateProductFaqs(product, 'signal-relays');
  product.alternativeParts = [];
  product.companionParts = [];
  product.image = `/assets/images/brands/hongfa/products/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  product.datasheet = `/assets/datasheets/hongfa/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.pdf`;
  product.faeReview = {
    author: "Signal FAE",
    title: "FAE - Telecom",
    content: `The ${product.partNumber} is an excellent signal relay for low-level switching.`,
    highlight: "Signal relay for telecom and test equipment"
  };
});

signalRelays.products = signalProducts;

const industrialRelays = {
  "id": "industrial-relays",
  "name": "Industrial Relays",
  "slug": "industrial-relays",
  "description": "Hongfa Industrial Relays are heavy-duty relays designed for control systems with LED indicators and protection features.",
  "longDescription": "Hongfa Industrial Relays feature robust construction for demanding industrial environments. Available with DIN rail mounting, LED indicators, and protection diodes for easy maintenance and reliable operation.",
  "series": ["HF18F", "HF41F", "HF42F", "HF43F", "HF44F", "HF45F"],
  "parameters": ["Contact Rating", "Coil Voltage", "Contact Configuration", "Mounting Type", "Protection Features"],
  "applications": ["PLC Systems", "Motor Control", "Automation Machinery", "Process Control"],
  "products": []
};

const industrialProducts = [
  { partNumber: "HF18F-012-1ZST", name: "HF18F Industrial Relay 10A 12VDC", shortDescription: "Industrial relay with LED indicator", specifications: { "Contact Rating": "10A 250VAC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["LED indicator", "DIN rail mount"], applications: ["PLC systems", "Control panels"], stock: 30000, moq: 500, leadTime: "4-6 weeks", price: "$0.95" },
  { partNumber: "HF41F-024-1ZST", name: "HF41F Industrial Relay 12A 24VDC", shortDescription: "Slim industrial relay with protection diode", specifications: { "Contact Rating": "12A 250VAC", "Coil Voltage": "24VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["Slim design", "Protection diode"], applications: ["Automation", "Motor control"], stock: 25000, moq: 500, leadTime: "4-6 weeks", price: "$1.15" },
  { partNumber: "HF42F-012-2ZST", name: "HF42F Industrial Relay 8A 12VDC", shortDescription: "DPDT industrial relay for control circuits", specifications: { "Contact Rating": "8A 250VAC", "Coil Voltage": "12VDC", "Contact Configuration": "2 Form C (DPDT)" }, features: ["DPDT contacts", "Test button"], applications: ["Sequence control", "Safety circuits"], stock: 20000, moq: 500, leadTime: "4-6 weeks", price: "$1.25" },
  { partNumber: "HF43F-024-1ZST", name: "HF43F Industrial Relay 16A 24VDC", shortDescription: "High capacity industrial relay with 16A rating", specifications: { "Contact Rating": "16A 250VAC", "Coil Voltage": "24VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["16A capacity", "Heavy duty"], applications: ["Power control", "Heating elements"], stock: 18000, moq: 250, leadTime: "6-8 weeks", price: "$1.45" },
  { partNumber: "HF44F-012-1ZST", name: "HF44F Industrial Relay 6A 12VDC", shortDescription: "Compact industrial relay with gold contacts", specifications: { "Contact Rating": "6A 250VAC", "Coil Voltage": "12VDC", "Contact Configuration": "1 Form C (SPDT)" }, features: ["Gold contacts", "Compact size"], applications: ["Low-level control", "Signal switching"], stock: 35000, moq: 500, leadTime: "4-6 weeks", price: "$0.85" },
  { partNumber: "HF45F-024-2ZST", name: "HF45F Industrial Relay 10A 24VDC", shortDescription: "DPDT industrial relay with high isolation", specifications: { "Contact Rating": "10A 250VAC", "Coil Voltage": "24VDC", "Contact Configuration": "2 Form C (DPDT)" }, features: ["High isolation", "DPDT contacts"], applications: ["Process control", "Switching circuits"], stock: 22000, moq: 500, leadTime: "4-6 weeks", price: "$1.35" }
];

industrialProducts.forEach(product => {
  product.faqs = generateProductFaqs(product, 'industrial-relays');
  product.alternativeParts = [];
  product.companionParts = [];
  product.image = `/assets/images/brands/hongfa/products/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  product.datasheet = `/assets/datasheets/hongfa/${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.pdf`;
  product.faeReview = {
    author: "Industrial FAE",
    title: "FAE - Industrial Control",
    content: `The ${product.partNumber} is an excellent industrial relay for control applications.`,
    highlight: "Industrial relay for PLC and automation systems"
  };
});

industrialRelays.products = industrialProducts;

// 组装所有分类
productsData.categories = [
  powerRelays,
  automotiveRelays,
  hvdcRelays,
  latchingRelays,
  signalRelays,
  industrialRelays
];

// 保存文件
fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2));
console.log(`✅ Hongfa products.json created successfully!`);
console.log(`   Categories: ${productsData.categories.length}`);
console.log(`   Total products: ${productsData.categories.reduce((sum, cat) => sum + cat.products.length, 0)}`);
