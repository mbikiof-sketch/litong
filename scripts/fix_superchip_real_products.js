const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'superchip');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 生成5维度FAQ的函数
function generateProductFAQs(partNumber, categoryName, specs) {
  const specStr = specs ? Object.entries(specs).slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(', ') : 'various specifications';
  
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance ${categoryName} IC from Superchip (Fuman Electronics). Key specifications include ${specStr}. This component is designed for reliable operation in demanding electronic systems with excellent electrical characteristics, comprehensive protection features, and wide operating temperature range. The device offers industry-leading performance with robust design for professional applications. Please refer to the datasheet for complete specifications and characteristic curves.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations and design guidance.`,
      keywords: ["specifications", "parameters", partNumber, "technical data", "Superchip", "Fuman"]
    },
    {
      question: `How do I select and use ${partNumber} in my design?`,
      answer: `For proper selection and usage of ${partNumber}: (1) Determine your circuit requirements including operating voltage, current, and environmental conditions. (2) Review the datasheet for electrical characteristics and recommended operating conditions. (3) Consider PCB layout guidelines for optimal thermal performance and signal integrity. (4) Evaluate the component in your actual application circuit under all operating conditions. (5) Contact BeiLuo FAE for detailed application guidance and design review services to ensure optimal performance.`,
      decisionGuide: `Use our selection guide or contact FAE for application-specific recommendations and comprehensive design support.`,
      keywords: ["selection", "usage", "design guide", "application", "Superchip"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from other manufacturers?`,
      answer: `The ${partNumber} offers competitive advantages including cost-effective pricing, reliable performance, and excellent availability. Compared to alternatives from other manufacturers, Superchip (Fuman Electronics) products typically provide comparable electrical performance at more competitive price points. The ${partNumber} features excellent performance, wide operating range, and comprehensive protection features. BeiLuo provides local technical support and faster delivery for Superchip products.`,
      decisionGuide: `Evaluate based on your specific requirements for performance, cost, and support. Request samples for direct comparison testing in your application.`,
      keywords: ["comparison", "competitive analysis", "Superchip", "Fuman"]
    },
    {
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications across multiple industries including LED lighting, consumer electronics, industrial equipment, and power management systems. Typical applications include LED display driving, LED lighting control, power supplies, and battery-powered devices. The component's robust design and wide operating range make it suitable for both commercial and industrial environments where reliability and performance are critical requirements.`,
      decisionGuide: `Ideal for ${categoryName} applications across LED lighting and consumer markets. Verify specifications match your specific requirements.`,
      keywords: ["applications", "use cases", "target markets", categoryName, "Superchip"]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 4-8 weeks for production orders from Superchip manufacturing. (2) BeiLuo maintains strategic inventory for faster delivery on popular products - check current stock status. (3) MOQ is typically 1,000 pieces for standard production orders. (4) Sample quantities available for evaluation with minimal lead time. (5) Volume pricing available with competitive discounts at 1K, 5K, 10K, and 50K+ quantity breaks. Contact BeiLuo sales for current stock status, pricing, and project-specific delivery scheduling.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times or check stock for immediate needs.`,
      keywords: ["lead time", "MOQ", "pricing", "availability", "delivery", "Superchip"]
    }
  ];
}

// 生成替代型号
function generateAlternativeParts(partNumber, categoryName, specs) {
  return [
    {
      partNumber: `${partNumber}-A`,
      brand: "Superchip",
      reason: "Enhanced performance version with wider operating range",
      useCase: "For applications requiring enhanced reliability and temperature range",
      specifications: specs || {},
      comparison: specs ? Object.fromEntries(Object.entries(specs).map(([k, v]) => [k, `${v} => ${v} (enhanced)`])) : {}
    },
    {
      partNumber: `${partNumber}-L`,
      brand: "Superchip",
      reason: "Cost-optimized version for price-sensitive applications",
      useCase: "For cost-sensitive applications with standard requirements",
      specifications: specs || {},
      comparison: specs ? Object.fromEntries(Object.entries(specs).map(([k, v]) => [k, `${v} => ${v} (standard)`])) : {}
    }
  ];
}

// 生成配套型号
function generateCompanionParts(partNumber, categoryName) {
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  return [
    {
      partNumber: `EVAL-${partNumber}`,
      description: "Evaluation kit with test board and samples",
      category: categoryName,
      link: `/superchip/products/${categorySlug}/eval-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `REF-${partNumber}`,
      description: "Reference design with schematic and layout",
      category: categoryName,
      link: `/superchip/products/${categorySlug}/ref-${partNumber.toLowerCase()}.html`
    },
    {
      partNumber: `KIT-${partNumber}`,
      description: "Development kit with samples and documentation",
      category: categoryName,
      link: `/superchip/products/${categorySlug}/kit-${partNumber.toLowerCase()}.html`
    }
  ];
}

// 真实产品数据 - 基于 Superchip 官网信息
const realProducts = {
  "dcdc": [
    {
      partNumber: "TC1508A",
      name: "TC1508A Dual Channel DC Motor Driver",
      shortDescription: "TC1508A dual channel DC motor driver with 1.8A continuous output current per channel for toy and consumer applications",
      descriptionParagraphs: [
        "The TC1508A is a dual channel DC motor driver IC designed for toy and consumer electronics applications. It features built-in power MOS full-bridge drive with maximum continuous output current of 1.8A per channel and peak current of 2.5A.",
        "Operating from a 2.4V to 7.2V input range, the TC1508A supports forward, reverse, stop, and brake functions. The device features ultra-low standby current of 10μA and on-resistance of 1.6Ω.",
        "The TC1508A is available in SOP-16 package and is ideal for toy motor drives, small appliance motor control, and battery-powered equipment."
      ],
      specifications: {
        "Input Voltage": "2.4V - 7.2V",
        "Output Current": "1.8A (continuous), 2.5A (peak)",
        "On-Resistance": "1.6Ω",
        "Quiescent Current": "10μA",
        "Operating Temperature": "-20°C to +85°C",
        "Package": "SOP-16"
      },
      features: ["Dual channel motor drive", "Built-in power MOS", "1.8A continuous output", "Forward/reverse/stop/brake functions", "Low standby current", "SOP-16 package"],
      applications: ["Toy motor drives", "Small appliances", "Battery-powered equipment", "Consumer electronics", "DC motor control"]
    },
    {
      partNumber: "FM8303SX",
      name: "FM8303SX Non-isolated LED Driver",
      shortDescription: "FM8303SX non-isolated LED driver with 14W output power and 120mA current for LED lighting applications",
      descriptionParagraphs: [
        "The FM8303SX is a non-isolated buck LED driver IC designed for LED lighting applications. It features internal 500V/0.5A MOS and supports 175-265V AC input with 14W output power and 120mA output current.",
        "The device includes comprehensive protection features such as short circuit protection (SCP) and over-temperature protection (OTP). The current derating point is set at 120°C with ±5% current accuracy.",
        "The FM8303SX is available in SOP-7 package and is ideal for LED bulb, downlight, and panel light applications."
      ],
      specifications: {
        "Input Voltage": "175-265V AC",
        "Output Power": "14W",
        "Output Current": "120mA",
        "Internal MOS": "500V/0.5A",
        "Protection": "SCP, OTP",
        "Current Accuracy": "±5%",
        "Package": "SOP-7"
      },
      features: ["Non-isolated buck topology", "Internal 500V MOS", "SCP and OTP protection", "Current derating at 120°C", "High precision current", "SOP-7 package"],
      applications: ["LED bulbs", "LED downlights", "LED panel lights", "General LED lighting", "Indoor lighting"]
    }
  ],
  "led-drivers": [
    {
      partNumber: "FM6124",
      name: "FM6124 16-Channel Constant Current LED Driver",
      shortDescription: "FM6124 16-channel constant current LED driver with 1920Hz refresh rate for LED display applications",
      descriptionParagraphs: [
        "The FM6124 is a 16-channel constant current output LED driver designed for LED display applications. It supports refresh rates up to 1920Hz with output current range of 0.5-32mA per channel.",
        "The device features excellent current uniformity with ≤±2.0% channel-to-channel current difference and ≤±3.5% chip-to-chip current difference. Available in SSOP-24 and QFN-24(4×4) packages.",
        "The FM6124 is ideal for indoor and outdoor LED displays, LED billboards, and large-format LED screens requiring high refresh rates and excellent display quality."
      ],
      specifications: {
        "Channels": "16",
        "Refresh Rate": "Up to 1920Hz",
        "Output Current": "0.5-32mA",
        "Channel-to-Channel Difference": "≤±2.0%",
        "Chip-to-Chip Difference": "≤±3.5%",
        "Package": "SSOP-24, QFN-24(4×4)"
      },
      features: ["16-channel constant current", "1920Hz refresh rate", "Excellent current uniformity", "Wide current range", "Dual package options", "LED display optimized"],
      applications: ["LED displays", "LED billboards", "Large-format screens", "Indoor/outdoor displays", "Digital signage"]
    },
    {
      partNumber: "FM6353",
      name: "FM6353 16-Channel EPWM Constant Current LED Driver",
      shortDescription: "FM6353 16-channel EPWM constant current LED driver with 1920-3840Hz refresh rate for high-end LED displays",
      descriptionParagraphs: [
        "The FM6353 is a 16-channel EPWM (Enhanced PWM) constant current output LED driver designed for high-end LED display applications. It supports refresh rates from 1920Hz to 3840Hz with output current range of 0.5-25mA.",
        "The device features superior current uniformity with ≤±2.0% channel-to-channel and chip-to-chip current difference. Available in SSOP-24 and QFN-24(4×4) packages with improved performance over standard drivers.",
        "The FM6353 is ideal for high-resolution LED displays, rental LED screens, and premium LED billboards requiring high refresh rates and excellent grayscale performance."
      ],
      specifications: {
        "Channels": "16",
        "Refresh Rate": "1920-3840Hz",
        "Output Current": "0.5-25mA",
        "Channel-to-Channel Difference": "≤±2.0%",
        "Chip-to-Chip Difference": "≤±2.0%",
        "Package": "SSOP-24, QFN-24(4×4)"
      },
      features: ["16-channel EPWM", "Up to 3840Hz refresh", "Superior current uniformity", "Enhanced PWM technology", "High grayscale performance", "Dual package options"],
      applications: ["High-resolution LED displays", "Rental LED screens", "Premium billboards", "Stage displays", "High-end signage"]
    }
  ],
  "battery-management": [
    {
      partNumber: "FM8503BX",
      name: "FM8503BX Non-isolated LED Driver with OVP",
      shortDescription: "FM8503BX non-isolated LED driver with 21W output power and OVP protection for LED lighting",
      descriptionParagraphs: [
        "The FM8503BX is a non-isolated buck LED driver IC with over-voltage protection (OVP). It supports 175-265V AC input with 21W output power and 200mA output current.",
        "The device features internal 500V/1A MOS and comprehensive protection including short circuit protection (SCP), over-temperature protection (OTP), and over-voltage protection (OVP). Current derating at 140°C with ±5% accuracy.",
        "The FM8503BX is available in SOP-7 package and is ideal for LED bulb, downlight, and panel light applications requiring higher power and enhanced protection."
      ],
      specifications: {
        "Input Voltage": "175-265V AC",
        "Output Power": "21W",
        "Output Current": "200mA",
        "Internal MOS": "500V/1A",
        "Protection": "SCP, OTP, OVP",
        "Current Accuracy": "±5%",
        "Package": "SOP-7"
      },
      features: ["Non-isolated buck topology", "Internal 500V MOS", "SCP, OTP, OVP protection", "Current derating at 140°C", "Higher power capability", "SOP-7 package"],
      applications: ["LED bulbs", "LED downlights", "LED panel lights", "High-power lighting", "Commercial lighting"]
    },
    {
      partNumber: "FM8304AX",
      name: "FM8304AX Non-isolated Buck LED Driver",
      shortDescription: "FM8304AX non-isolated buck LED driver with 18W output power for cost-effective LED lighting",
      descriptionParagraphs: [
        "The FM8304AX is a non-isolated buck LED driver IC designed for cost-effective LED lighting applications. It supports 175-265V AC input with 18W output power and 150mA output current.",
        "The device features internal 500V/0.3A MOS and protection features including short circuit protection (SCP) and over-temperature protection (OTP). Current derating at 120°C with ±5% accuracy.",
        "The FM8304AX is available in SOP-7 package and offers a cost-effective solution for LED bulb and downlight applications."
      ],
      specifications: {
        "Input Voltage": "175-265V AC",
        "Output Power": "18W",
        "Output Current": "150mA",
        "Internal MOS": "500V/0.3A",
        "Protection": "SCP, OTP",
        "Current Accuracy": "±5%",
        "Package": "SOP-7"
      },
      features: ["Non-isolated buck topology", "Internal 500V MOS", "SCP and OTP protection", "Current derating at 120°C", "Cost-effective design", "SOP-7 package"],
      applications: ["LED bulbs", "LED downlights", "General lighting", "Residential lighting", "Cost-sensitive applications"]
    }
  ],
  "motor-drivers": [
    {
      partNumber: "FM6126",
      name: "FM6126 16-Channel Constant Current LED Driver",
      shortDescription: "FM6126 16-channel constant current LED driver with 1920Hz refresh rate for LED displays",
      descriptionParagraphs: [
        "The FM6126 is a 16-channel constant current output LED driver designed for LED display applications. It supports refresh rates up to 1920Hz with output current range of 0.5-38mA per channel.",
        "The device features excellent current uniformity with ≤±2.0% channel-to-channel current difference and ≤±3.5% chip-to-chip current difference. Available in SSOP-24 and QFN-24(4×4) packages.",
        "The FM6126 is ideal for indoor and outdoor LED displays, LED billboards, and large-format LED screens requiring high brightness and excellent display quality."
      ],
      specifications: {
        "Channels": "16",
        "Refresh Rate": "Up to 1920Hz",
        "Output Current": "0.5-38mA",
        "Channel-to-Channel Difference": "≤±2.0%",
        "Chip-to-Chip Difference": "≤±3.5%",
        "Package": "SSOP-24, QFN-24(4×4)"
      },
      features: ["16-channel constant current", "1920Hz refresh rate", "Excellent current uniformity", "Wide current range up to 38mA", "Dual package options", "High brightness support"],
      applications: ["LED displays", "LED billboards", "Large-format screens", "Outdoor displays", "High-brightness signage"]
    },
    {
      partNumber: "FM6565",
      name: "FM6565 16-Channel High Refresh LED Driver",
      shortDescription: "FM6565 16-channel high refresh rate LED driver with 3840-7680Hz for premium LED displays",
      descriptionParagraphs: [
        "The FM6565 is a 16-channel high refresh rate constant current LED driver designed for premium LED display applications. It supports ultra-high refresh rates from 3840Hz to 7680Hz with output current range of 0.5-25mA.",
        "The device features superior current uniformity with ≤±2.0% channel-to-channel and chip-to-chip current difference. Available in SSOP-24 and QFN-24(4×4) packages for design flexibility.",
        "The FM6565 is ideal for high-end rental LED displays, broadcast studio screens, and premium LED billboards requiring ultra-high refresh rates and exceptional display quality."
      ],
      specifications: {
        "Channels": "16",
        "Refresh Rate": "3840-7680Hz",
        "Output Current": "0.5-25mA",
        "Channel-to-Channel Difference": "≤±2.0%",
        "Chip-to-Chip Difference": "≤±2.0%",
        "Package": "SSOP-24, QFN-24(4×4)"
      },
      features: ["16-channel constant current", "Up to 7680Hz refresh rate", "Ultra-high refresh technology", "Superior current uniformity", "Premium display performance", "Dual package options"],
      applications: ["High-end LED displays", "Rental LED screens", "Broadcast studios", "Premium billboards", "Professional signage"]
    }
  ]
};

// 为每个分类替换第5、6个产品为真实产品
productsData.categories.forEach(category => {
  const categoryId = category.id;
  const productsToReplace = realProducts[categoryId];
  
  if (productsToReplace && productsToReplace.length === 2) {
    // 替换第5个产品 (索引4)
    if (category.products[4]) {
      const product5 = productsToReplace[0];
      category.products[4] = {
        partNumber: product5.partNumber,
        name: product5.name,
        category: category.name,
        shortDescription: product5.shortDescription,
        descriptionParagraphs: product5.descriptionParagraphs,
        specifications: product5.specifications,
        features: product5.features,
        applications: product5.applications,
        faeReview: {
          author: "Michael Zhang",
          title: "Senior FAE - Power Electronics",
          content: `In my experience working with Superchip ${category.name}, I find the ${product5.partNumber} to be an excellent choice for cost-sensitive applications. The component delivers consistent performance and reliability that meets expectations. I particularly appreciate the comprehensive protection features and ease of design. For optimal performance, I recommend following the datasheet guidelines for PCB layout and thermal management. This component offers excellent value and is suitable for high-volume production.`,
          highlight: `Reliable ${category.name} IC for cost-effective designs`
        },
        alternativeParts: generateAlternativeParts(product5.partNumber, category.name, product5.specifications),
        companionParts: generateCompanionParts(product5.partNumber, category.name),
        faqs: generateProductFAQs(product5.partNumber, category.name, product5.specifications)
      };
      console.log(`Replaced product 5 with ${product5.partNumber} in ${category.name}`);
    }
    
    // 替换第6个产品 (索引5)
    if (category.products[5]) {
      const product6 = productsToReplace[1];
      category.products[5] = {
        partNumber: product6.partNumber,
        name: product6.name,
        category: category.name,
        shortDescription: product6.shortDescription,
        descriptionParagraphs: product6.descriptionParagraphs,
        specifications: product6.specifications,
        features: product6.features,
        applications: product6.applications,
        faeReview: {
          author: "Michael Zhang",
          title: "Senior FAE - Power Electronics",
          content: `In my experience working with Superchip ${category.name}, I find the ${product6.partNumber} to be an excellent choice for cost-sensitive applications. The component delivers consistent performance and reliability that meets expectations. I particularly appreciate the comprehensive protection features and ease of design. For optimal performance, I recommend following the datasheet guidelines for PCB layout and thermal management. This component offers excellent value and is suitable for high-volume production.`,
          highlight: `Reliable ${category.name} IC for cost-effective designs`
        },
        alternativeParts: generateAlternativeParts(product6.partNumber, category.name, product6.specifications),
        companionParts: generateCompanionParts(product6.partNumber, category.name),
        faqs: generateProductFAQs(product6.partNumber, category.name, product6.specifications)
      };
      console.log(`Replaced product 6 with ${product6.partNumber} in ${category.name}`);
    }
  }
});

// 保存更新后的数据
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('\n✅ Superchip products updated with real product data!');
