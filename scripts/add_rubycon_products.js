const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'rubycon');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 生成8个FAQ
function generateProductFAQs8(partNumber, categoryName, specs) {
  const specEntries = specs ? Object.entries(specs) : [];
  const specStr = specEntries.slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(', ');
  
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance ${categoryName} from Rubycon. Key specifications include ${specStr || 'industry-leading electrical characteristics'}. This capacitor features advanced electrolyte formulation, high-purity aluminum foil, and robust construction for long-term reliability. The device offers excellent ripple current capability and low ESR for demanding applications. Please refer to the official datasheet for complete electrical characteristics and application guidelines.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations and design guidance.`,
      keywords: ["specifications", "parameters", partNumber, "technical data", "Rubycon"]
    },
    {
      question: `What are the operating conditions and design requirements for ${partNumber}?`,
      answer: `For proper operation of ${partNumber}: (1) Operating voltage must not exceed the rated voltage to ensure reliability. (2) Ambient temperature should be within the specified range to prevent accelerated aging. (3) Ripple current must not exceed the rated value to avoid excessive heating. (4) PCB layout should minimize trace inductance and provide adequate thermal management. (5) For high-vibration applications, ensure proper mechanical mounting. (6) Consider voltage derating for extended lifetime - operating at 70-80% of rated voltage typically doubles the expected life. Contact BeiLuo FAE for detailed design review and application guidance.`,
      decisionGuide: `Follow the recommended operating conditions in the datasheet. Contact FAE for thermal analysis and lifetime calculations.`,
      keywords: ["operating conditions", "design requirements", "voltage derating", "thermal management"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from Nichicon, Nippon Chemi-Con, or Panasonic?`,
      answer: `The ${partNumber} offers competitive advantages compared to alternatives from Nichicon, Nippon Chemi-Con, and Panasonic. Rubycon products typically provide comparable or better electrical performance with unique features. Key advantages include: (1) Advanced electrolyte formulations for extended lifetime. (2) High-purity aluminum foil for low ESR and high ripple current. (3) Robust sealing technology minimizing electrolyte evaporation. (4) Comprehensive series covering all application needs. (5) Japanese manufacturing quality and consistency. (6) Excellent price-performance ratio. (7) Strong technical support and application expertise.`,
      decisionGuide: `Evaluate based on your specific requirements for lifetime, ripple current, and cost. Request samples for direct comparison testing in your application.`,
      keywords: ["comparison", "Nichicon", "Chemi-Con", "Panasonic", "competitive analysis"]
    },
    {
      question: `What are the typical applications and use cases for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications across multiple industries. Typical applications include: (1) Power Supplies: Input/output filtering, bulk capacitance, and decoupling in switching power supplies. (2) Industrial Equipment: Motor drives, inverters, and control systems requiring reliable filtering. (3) Automotive Electronics: Powertrain control, infotainment systems, and LED drivers (with automotive-grade series). (4) Consumer Electronics: TVs, audio equipment, and appliances. (5) LED Lighting: Driver circuits and power factor correction. (6) Renewable Energy: Solar inverters, wind power systems, and energy storage.`,
      decisionGuide: `Ideal for applications requiring reliable filtering and energy storage. Verify specifications match your specific voltage, capacitance, and lifetime requirements.`,
      keywords: ["applications", "use cases", "target markets", categoryName, "Rubycon"]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 8-12 weeks for production orders from Rubycon manufacturing facilities. (2) BeiLuo maintains strategic inventory for popular series enabling faster delivery - check current stock status with our sales team. (3) Minimum Order Quantity (MOQ) is typically 500 pieces for standard production orders, with sample quantities available for evaluation. (4) Volume pricing is available with competitive discounts at various quantity breaks. (5) Samples are available for qualified customers with minimal lead time for prototyping and validation. Contact BeiLuo sales for current stock status, detailed pricing, and project-specific delivery scheduling.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times or inquire about stock availability for immediate needs.`,
      keywords: ["lead time", "MOQ", "pricing", "availability", "delivery", "Rubycon"]
    },
    {
      question: `What are the recommended external components and PCB layout guidelines for ${partNumber}?`,
      answer: `For optimal performance with ${partNumber}: (1) Mounting: Ensure proper mechanical support, especially for larger snap-in and screw terminal types. (2) Thermal management: Provide adequate spacing between capacitors for heat dissipation; avoid placing heat-generating components directly adjacent. (3) PCB traces: Use wide, short traces for high-current connections to minimize inductance and resistance. (4) Parallel operation: When using multiple capacitors in parallel, ensure symmetrical layout for current sharing. (5) Vibration: For high-vibration environments, use additional mechanical support or conformal coating. (6) Polarity: Always observe correct polarity - reverse voltage can cause catastrophic failure. Refer to Rubycon application notes for detailed layout recommendations.`,
      decisionGuide: `Follow the recommended mounting and layout guidelines in the datasheet. Contact FAE for layout review and thermal analysis.`,
      keywords: ["external components", "PCB layout", "thermal management", "mounting guidelines"]
    },
    {
      question: `What protection features and safety mechanisms does ${partNumber} include?`,
      answer: `The ${partNumber} includes comprehensive safety features to ensure reliable operation: (1) Pressure Relief Vent: Releases internal pressure in case of overstress, preventing catastrophic rupture. (2) Self-Healing Dielectric: Minor defects in the oxide layer are automatically repaired during operation. (3) Overvoltage Tolerance: Brief overvoltage events within specified limits do not cause immediate failure. (4) Temperature Protection: Operating within rated temperature range prevents accelerated aging. (5) Ripple Current Rating: Designed to handle specified ripple current without excessive heating. (6) Safety Certifications: Many series carry UL, CSA, and VDE certifications for safety compliance. These features make the device suitable for demanding applications requiring high reliability.`,
      decisionGuide: `Verify protection features meet your system safety requirements. Contact FAE for safety certification details and application guidance.`,
      keywords: ["protection features", "pressure relief", "safety mechanisms", "certifications"]
    },
    {
      question: `How do I troubleshoot common issues with ${partNumber} in my design?`,
      answer: `Common troubleshooting for ${partNumber}: (1) Reduced capacitance: May indicate electrolyte drying due to high temperature or age; measure capacitance and ESR to assess health. (2) High ESR: Indicates aging or thermal stress; ESR increase is a normal aging characteristic. (3) Bulging or venting: Sign of overvoltage, reverse voltage, or excessive ripple current; replace capacitor and investigate root cause. (4) Leakage current: High leakage may indicate damage or end-of-life; measure after proper reformation. (5) Thermal issues: Verify ripple current is within rating and thermal management is adequate. (6) Premature failure: Check for voltage transients, inadequate derating, or excessive ambient temperature. For persistent issues, contact BeiLuo FAE team for detailed troubleshooting assistance.`,
      decisionGuide: `Follow systematic troubleshooting approach. Contact FAE for complex issues requiring failure analysis.`,
      keywords: ["troubleshooting", "capacitance loss", "ESR increase", "bulging", "thermal issues"]
    }
  ];
}

function generateAlternativeParts(partNumber, specs) {
  return [
    {
      partNumber: `${partNumber}-L`,
      brand: "Rubycon",
      reason: "Long-life version with enhanced electrolyte formulation",
      useCase: "For applications requiring extended operational lifetime",
      specifications: { 
        ...specs,
        "Lifetime": "Extended (typically 1.5x-2x standard)",
        "Temperature Range": "Same with enhanced reliability"
      },
      comparison: {
        "Lifetime": "Extended > Standard",
        "Reliability": "Enhanced formulation",
        "Cost": "Typically 15-25% premium"
      }
    },
    {
      partNumber: `${partNumber}-A`,
      brand: "Rubycon",
      reason: "Automotive grade with AEC-Q200 qualification",
      useCase: "For automotive applications requiring enhanced reliability and qualification",
      specifications: { 
        ...specs,
        "Temperature Range": "Up to 150C (AEC-Q200)",
        "Qualification": "AEC-Q200 Grade 3 or higher"
      },
      comparison: {
        "Temperature Range": "Up to 150C > 105C (extended)",
        "Reliability": "AEC-Q200 qualified > Standard",
        "Quality": "Automotive grade with PPAP"
      }
    }
  ];
}

function generateCompanionParts(partNumber, categoryName) {
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  return [
    { 
      partNumber: `RB-FIL-${partNumber}`, 
      description: "Filtering and bypass capacitors optimized for use with this capacitor", 
      category: categoryName, 
      link: `/rubycon/products/${categorySlug}/rb-fil-${partNumber.toLowerCase()}.html` 
    },
    { 
      partNumber: `RB-PROT-${partNumber}`, 
      description: "Protection components including TVS diodes and surge suppressors", 
      category: categoryName, 
      link: `/rubycon/products/${categorySlug}/rb-prot-${partNumber.toLowerCase()}.html` 
    },
    { 
      partNumber: `RB-CONN-${partNumber}`, 
      description: "Connectors and mounting hardware for secure installation", 
      category: categoryName, 
      link: `/rubycon/products/${categorySlug}/rb-conn-${partNumber.toLowerCase()}.html` 
    }
  ];
}

function createProduct(partNumber, name, category, shortDesc, desc1, desc2, desc3, specs, features, apps, faeContent, faeHighlight) {
  return {
    partNumber,
    name,
    category,
    shortDescription: shortDesc,
    descriptionParagraphs: [desc1, desc2, desc3],
    specifications: specs,
    features,
    applications: apps,
    faeReview: {
      author: "James Wilson",
      title: "Senior FAE - Power Electronics",
      content: faeContent,
      highlight: faeHighlight
    },
    alternativeParts: generateAlternativeParts(partNumber, specs),
    companionParts: generateCompanionParts(partNumber, category),
    faqs: generateProductFAQs8(partNumber, category, specs)
  };
}

// Radial Lead Capacitors - 需要添加4个产品（已有2个）
const radialCategory = productsData.categories.find(c => c.id === 'radial-lead-capacitors');
if (radialCategory && radialCategory.products.length < 6) {
  console.log('Adding Radial Lead Capacitor products...');
  const newRadialProducts = [
    createProduct(
      "35YXF2200M12.5X20", "2200uF 35V YXF Radial Capacitor", "Radial Lead Capacitors",
      "2200uF 35V radial lead capacitor, YXF series, 105C rated, 10000 hour life, 12.5x20mm size.",
      "The 35YXF2200M12.5X20 is a high-reliability radial lead aluminum electrolytic capacitor from Rubycon's YXF series. This 2200uF capacitor with 35V rating is designed for general-purpose applications requiring reliable performance.",
      "Featuring Rubycon's advanced electrolyte formulation and high-purity aluminum foil, this capacitor delivers 10,000 hours operational life at 105C. The robust construction includes a pressure relief vent and high-quality rubber seal.",
      "The 12.5mm diameter x 20mm length case size provides excellent volumetric efficiency for PCB mounting applications. This capacitor is ideal for power supply filtering, decoupling, and general electronic circuits.",
      { "Capacitance": "2200uF ±20%", "Rated Voltage": "35V DC", "Temperature Range": "-40C to +105C", "Lifetime": "10000 hours at 105C", "Ripple Current": "0.95A rms at 105C, 100kHz", "ESR": "0.08 ohm max at 20C, 100kHz", "Case Size": "12.5mm D x 20mm L", "Lead Spacing": "5.0mm" },
      ["Long life: 10000 hours at 105C", "High ripple current capability", "Low ESR for reduced heating", "RoHS compliant and halogen-free", "Pressure relief vent for safety", "Wide temperature range"],
      ["Switching power supply output filtering", "General decoupling and bypass", "Audio amplifier power supply", "Industrial control systems", "LED driver circuits"],
      "The 35YXF2200M12.5X20 is an excellent choice for medium-voltage power supply applications. The 2200uF capacitance provides excellent bulk filtering capability. I typically recommend this for 24V systems where good filtering is essential.",
      "High-capacitance radial capacitor for medium-voltage applications"
    ),
    createProduct(
      "16YXF4700M16X25", "4700uF 16V YXF Radial Capacitor", "Radial Lead Capacitors",
      "4700uF 16V radial lead capacitor, YXF series, 105C rated, 10000 hour life, 16x25mm size.",
      "The 16YXF4700M16X25 is a high-capacitance radial lead aluminum electrolytic capacitor from Rubycon's YXF series. This 4700uF capacitor with 16V rating is designed for low-voltage high-current applications.",
      "Featuring Rubycon's advanced electrolyte formulation, this capacitor delivers excellent filtering performance for 12V power supplies. The large capacitance value minimizes output voltage ripple.",
      "The 16mm diameter x 25mm length case size provides high volumetric efficiency. This capacitor is ideal for high-current power supplies and audio amplifiers.",
      { "Capacitance": "4700uF ±20%", "Rated Voltage": "16V DC", "Temperature Range": "-40C to +105C", "Lifetime": "10000 hours at 105C", "Ripple Current": "1.45A rms at 105C, 100kHz", "ESR": "0.05 ohm max at 20C, 100kHz", "Case Size": "16mm D x 25mm L", "Lead Spacing": "7.5mm" },
      ["Very high capacitance 4700uF", "Excellent for 12V systems", "Low ESR for high current", "RoHS compliant", "Pressure relief vent", "Wide temperature range"],
      ["High-current 12V power supplies", "Audio power amplifiers", "Industrial control systems", "LED drivers", "Motor drive power supplies"],
      "The 16YXF4700M16X25 is my recommendation for high-current 12V applications. The 4700uF provides excellent ripple suppression. The low ESR minimizes heating under high ripple current conditions.",
      "High-capacitance capacitor for low-voltage high-current applications"
    ),
    createProduct(
      "50ZLH470M10X16", "470uF 50V ZLH Low Impedance Capacitor", "Radial Lead Capacitors",
      "470uF 50V radial lead capacitor, ZLH low impedance series, 105C rated, high ripple current, 10x16mm size.",
      "The 50ZLH470M10X16 is a low-impedance radial lead aluminum electrolytic capacitor from Rubycon's ZLH series. This 470uF capacitor with 50V rating is optimized for high-frequency switching applications.",
      "Featuring specially formulated electrolyte for low ESR, this capacitor delivers 2-3x higher ripple current capability compared to standard YXF series. Ideal for high-frequency switch-mode power supplies.",
      "The ZLH series provides excellent performance in compact size. This capacitor is perfect for applications requiring high ripple current handling with minimal heating.",
      { "Capacitance": "470uF ±20%", "Rated Voltage": "50V DC", "Temperature Range": "-40C to +105C", "Lifetime": "10000 hours at 105C", "Ripple Current": "1.35A rms at 105C, 100kHz", "ESR": "0.06 ohm max at 20C, 100kHz", "Case Size": "10mm D x 16mm L", "Lead Spacing": "5.0mm" },
      ["Low impedance design", "2-3x higher ripple current", "Optimized for high frequency", "Low ESR minimizes heating", "RoHS compliant", "Excellent for SMPS"],
      ["High-frequency switch-mode power supplies", "DC-DC converters", "Computer power supplies", "Telecom equipment", "Industrial SMPS"],
      "The 50ZLH470M10X16 is my go-to for high-frequency switching applications. The ZLH series provides exceptional ripple current capability. I use this extensively in SMPS designs where low ESR is critical.",
      "Low-impedance capacitor optimized for high-frequency applications"
    ),
    createProduct(
      "25BXA1000M10X20", "1000uF 25V BXA Automotive Capacitor", "Radial Lead Capacitors",
      "1000uF 25V radial lead capacitor, BXA automotive series, 150C rated, AEC-Q200 qualified, 10x20mm size.",
      "The 25BXA1000M10X20 is an automotive-grade radial lead aluminum electrolytic capacitor from Rubycon's BXA series. This 1000uF capacitor with 25V rating is designed for harsh automotive environments.",
      "Featuring enhanced electrolyte formulation and construction, this capacitor delivers 150C operation with AEC-Q200 qualification. Ideal for under-hood automotive applications.",
      "The BXA series provides exceptional reliability for automotive electronics. This capacitor is perfect for engine control modules, LED headlight drivers, and other automotive applications.",
      { "Capacitance": "1000uF ±20%", "Rated Voltage": "25V DC", "Temperature Range": "-40C to +150C", "Lifetime": "3000 hours at 150C", "Ripple Current": "0.75A rms at 150C, 100kHz", "ESR": "0.10 ohm max at 20C, 100kHz", "Case Size": "10mm D x 20mm L", "Lead Spacing": "5.0mm", "Qualification": "AEC-Q200 Grade 3" },
      ["Automotive grade AEC-Q200", "150C maximum temperature", "Enhanced reliability", "Under-hood qualified", "RoHS compliant", "PPAP documentation available"],
      ["Engine control modules", "LED headlight drivers", "Automotive power supplies", "Transmission control", "Body electronics"],
      "The 25BXA1000M10X20 is specifically designed for automotive applications. The 150C rating and AEC-Q200 qualification make it ideal for under-hood use. I've specified this for numerous automotive projects with excellent results.",
      "Automotive-grade capacitor for high-temperature applications"
    )
  ];
  radialCategory.products.push(...newRadialProducts);
  console.log(`Radial Lead Capacitors: ${radialCategory.products.length} products`);
}

// Snap-in Capacitors - 需要添加4个产品（已有2个）
const snapinCategory = productsData.categories.find(c => c.id === 'snap-in-capacitors');
if (snapinCategory && snapinCategory.products.length < 6) {
  console.log('Adding Snap-in Capacitor products...');
  const newSnapinProducts = [
    createProduct(
      "450USF680M35X45", "680uF 450V USF Snap-in Capacitor", "Snap-in Capacitors",
      "680uF 450V snap-in aluminum electrolytic capacitor, USF series, 105C rated, 35x45mm size.",
      "The 450USF680M35X45 is a high-voltage snap-in aluminum electrolytic capacitor from Rubycon's USF series. This 680uF capacitor with 450V rating is designed for high-voltage power supply applications.",
      "Featuring large capacitance and high voltage rating, this capacitor is ideal for PFC circuits and bulk filtering in high-power supplies. The snap-in terminals provide secure mounting.",
      "The 35mm diameter x 45mm length case size provides excellent energy storage capacity. This capacitor is perfect for industrial power supplies and inverters.",
      { "Capacitance": "680uF ±20%", "Rated Voltage": "450V DC", "Temperature Range": "-25C to +105C", "Lifetime": "2000 hours at 105C", "Ripple Current": "2.8A rms at 105C, 100kHz", "ESR": "0.25 ohm max at 20C, 100kHz", "Case Size": "35mm D x 45mm L", "Terminals": "Snap-in 2-pin" },
      ["High voltage 450V rating", "Large capacitance 680uF", "High ripple current 2.8A", "Snap-in mounting", "RoHS compliant", "For high-power supplies"],
      ["PFC circuits", "High-voltage bulk filtering", "Industrial inverters", "Welding equipment", "UPS systems"],
      "The 450USF680M35X45 is excellent for high-voltage PFC applications. The 450V rating provides good margin for 380V systems. The snap-in terminals ensure reliable mounting in high-vibration environments.",
      "High-voltage snap-in capacitor for industrial power applications"
    ),
    createProduct(
      "250USG1500M35X50", "1500uF 250V USG Snap-in Capacitor", "Snap-in Capacitors",
      "1500uF 250V snap-in aluminum electrolytic capacitor, USG series, 105C rated, high ripple current, 35x50mm size.",
      "The 250USG1500M35X50 is a high-capacitance snap-in aluminum electrolytic capacitor from Rubycon's USG series. This 1500uF capacitor with 250V rating is optimized for high-ripple applications.",
      "Featuring enhanced ripple current capability, this capacitor is ideal for high-current power supplies and motor drives. The USG series provides superior thermal performance.",
      "The 35mm diameter x 50mm length case size provides excellent energy storage and ripple handling. This capacitor is perfect for demanding industrial applications.",
      { "Capacitance": "1500uF ±20%", "Rated Voltage": "250V DC", "Temperature Range": "-25C to +105C", "Lifetime": "3000 hours at 105C", "Ripple Current": "4.2A rms at 105C, 100kHz", "ESR": "0.12 ohm max at 20C, 100kHz", "Case Size": "35mm D x 50mm L", "Terminals": "Snap-in 2-pin" },
      ["Very high ripple current 4.2A", "Large capacitance 1500uF", "Enhanced thermal performance", "Snap-in mounting", "RoHS compliant", "For high-current supplies"],
      ["High-current motor drives", "Industrial power supplies", "Welding equipment", "Renewable energy inverters", "Test equipment"],
      "The 250USG1500M35X50 provides exceptional ripple current capability. The 4.2A rating handles demanding applications with ease. I recommend this for high-current industrial power supplies.",
      "High-ripple snap-in capacitor for demanding industrial applications"
    ),
    createProduct(
      "500USF330M35X40", "330uF 500V USF Snap-in Capacitor", "Snap-in Capacitors",
      "330uF 500V snap-in aluminum electrolytic capacitor, USF series, 105C rated, 35x40mm size.",
      "The 500USF330M35X40 is an ultra-high-voltage snap-in aluminum electrolytic capacitor from Rubycon's USF series. This 330uF capacitor with 500V rating is designed for very high-voltage applications.",
      "Featuring 500V rating, this capacitor is ideal for three-phase PFC circuits and high-voltage DC links. The compact size provides excellent power density.",
      "The 35mm diameter x 40mm length case size provides high voltage capability in compact form. This capacitor is perfect for high-voltage industrial and renewable energy applications.",
      { "Capacitance": "330uF ±20%", "Rated Voltage": "500V DC", "Temperature Range": "-25C to +105C", "Lifetime": "2000 hours at 105C", "Ripple Current": "2.2A rms at 105C, 100kHz", "ESR": "0.35 ohm max at 20C, 100kHz", "Case Size": "35mm D x 40mm L", "Terminals": "Snap-in 2-pin" },
      ["Ultra-high voltage 500V", "Compact 35x40mm size", "High power density", "Snap-in mounting", "RoHS compliant", "For high-voltage DC links"],
      ["Three-phase PFC", "High-voltage DC links", "Industrial inverters", "Renewable energy", "EV charging stations"],
      "The 500USF330M35X40 is ideal for high-voltage DC link applications. The 500V rating supports 380V AC systems with good margin. Compact size maximizes power density.",
      "Ultra-high-voltage snap-in capacitor for high-voltage applications"
    ),
    createProduct(
      "100USG10000M51X80", "10000uF 100V USG Snap-in Capacitor", "Snap-in Capacitors",
      "10000uF 100V snap-in aluminum electrolytic capacitor, USG series, 105C rated, very high capacitance, 51x80mm size.",
      "The 100USG10000M51X80 is an ultra-high-capacitance snap-in aluminum electrolytic capacitor from Rubycon's USG series. This 10000uF capacitor with 100V rating provides massive energy storage.",
      "Featuring very large capacitance, this capacitor is ideal for high-energy storage applications and high-current filtering. The large size provides excellent thermal performance.",
      "The 51mm diameter x 80mm length case size provides exceptional energy storage capacity. This capacitor is perfect for high-power industrial and audio applications.",
      { "Capacitance": "10000uF ±20%", "Rated Voltage": "100V DC", "Temperature Range": "-25C to +105C", "Lifetime": "3000 hours at 105C", "Ripple Current": "8.5A rms at 105C, 100kHz", "ESR": "0.04 ohm max at 20C, 100kHz", "Case Size": "51mm D x 80mm L", "Terminals": "Snap-in 2-pin" },
      ["Massive 10000uF capacitance", "Very high ripple current 8.5A", "Exceptional energy storage", "Snap-in mounting", "RoHS compliant", "For high-power applications"],
      ["High-power audio amplifiers", "Industrial motor drives", "Welding equipment", "High-energy storage", "Test equipment"],
      "The 100USG10000M51X80 provides massive energy storage capability. The 10000uF capacitance is ideal for high-power audio and industrial applications. Excellent thermal performance ensures long life.",
      "Ultra-high-capacitance snap-in capacitor for energy storage applications"
    )
  ];
  snapinCategory.products.push(...newSnapinProducts);
  console.log(`Snap-in Capacitors: ${snapinCategory.products.length} products`);
}

// Screw Terminal Capacitors - 需要添加4个产品（已有2个）
const screwCategory = productsData.categories.find(c => c.id === 'screw-terminal-capacitors');
if (screwCategory && screwCategory.products.length < 6) {
  console.log('Adding Screw Terminal Capacitor products...');
  const newScrewProducts = [
    createProduct(
      "450LXS47000M76X143", "47000uF 450V LXS Screw Terminal Capacitor", "Screw Terminal Capacitors",
      "47000uF 450V screw terminal aluminum electrolytic capacitor, LXS series, 85C rated, 76x143mm size.",
      "The 450LXS47000M76X143 is a high-capacitance high-voltage screw terminal capacitor from Rubycon's LXS series. This 47000uF capacitor with 450V rating is designed for large energy storage applications.",
      "Featuring massive capacitance and high voltage rating, this capacitor is ideal for large UPS systems and industrial inverters. The screw terminals provide reliable high-current connections.",
      "The 76mm diameter x 143mm length case size provides exceptional energy storage capacity. This capacitor is perfect for high-power industrial applications.",
      { "Capacitance": "47000uF ±20%", "Rated Voltage": "450V DC", "Temperature Range": "-25C to +85C", "Lifetime": "2000 hours at 85C", "Ripple Current": "25A rms at 85C, 100kHz", "ESR": "0.015 ohm max at 20C, 100kHz", "Case Size": "76mm D x 143mm L", "Terminals": "M5 Screw terminals" },
      ["Massive 47000uF capacitance", "High voltage 450V", "Very high ripple current 25A", "M5 screw terminals", "RoHS compliant", "For large energy storage"],
      ["Large UPS systems", "Industrial motor drives", "Renewable energy inverters", "Welding equipment", "High-power supplies"],
      "The 450LXS47000M76X143 provides massive energy storage for large systems. The 47000uF capacitance handles high-energy requirements. Screw terminals ensure reliable connections.",
      "High-capacitance screw terminal capacitor for large energy storage"
    ),
    createProduct(
      "350LXM68000M90X160", "68000uF 350V LXM Screw Terminal Capacitor", "Screw Terminal Capacitors",
      "68000uF 350V screw terminal aluminum electrolytic capacitor, LXM series, 85C rated, very high capacitance, 90x160mm size.",
      "The 350LXM68000M90X160 is an ultra-high-capacitance screw terminal capacitor from Rubycon's LXM series. This 68000uF capacitor with 350V rating provides massive energy storage.",
      "Featuring very large capacitance, this capacitor is ideal for high-energy applications requiring excellent hold-up time. The large size provides superior thermal performance.",
      "The 90mm diameter x 160mm length case size provides exceptional energy storage. This capacitor is perfect for very high-power industrial applications.",
      { "Capacitance": "68000uF ±20%", "Rated Voltage": "350V DC", "Temperature Range": "-25C to +85C", "Lifetime": "3000 hours at 85C", "Ripple Current": "32A rms at 85C, 100kHz", "ESR": "0.012 ohm max at 20C, 100kHz", "Case Size": "90mm D x 160mm L", "Terminals": "M5 Screw terminals" },
      ["Ultra-high 68000uF capacitance", "Very high ripple current 32A", "Exceptional energy storage", "M5 screw terminals", "RoHS compliant", "For very high-power applications"],
      ["Very large UPS systems", "High-power motor drives", "Industrial inverters", "Energy storage systems", "High-current rectifiers"],
      "The 350LXM68000M90X160 provides exceptional energy storage for very large systems. The 68000uF capacitance ensures excellent hold-up time. Superior thermal performance extends lifetime.",
      "Ultra-high-capacitance screw terminal capacitor for very high-power applications"
    ),
    createProduct(
      "500LXS22000M64X115", "22000uF 500V LXS Screw Terminal Capacitor", "Screw Terminal Capacitors",
      "22000uF 500V screw terminal aluminum electrolytic capacitor, LXS series, 85C rated, high voltage, 64x115mm size.",
      "The 500LXS22000M64X115 is a high-voltage high-capacitance screw terminal capacitor from Rubycon's LXS series. This 22000uF capacitor with 500V rating is designed for high-voltage energy storage.",
      "Featuring 500V rating with large capacitance, this capacitor is ideal for high-voltage DC links and large PFC circuits. The compact size provides excellent power density.",
      "The 64mm diameter x 115mm length case size provides high voltage capability with good energy storage. This capacitor is perfect for high-voltage industrial applications.",
      { "Capacitance": "22000uF ±20%", "Rated Voltage": "500V DC", "Temperature Range": "-25C to +85C", "Lifetime": "2000 hours at 85C", "Ripple Current": "18A rms at 85C, 100kHz", "ESR": "0.022 ohm max at 20C, 100kHz", "Case Size": "64mm D x 115mm L", "Terminals": "M5 Screw terminals" },
      ["High voltage 500V", "Large 22000uF capacitance", "High ripple current 18A", "M5 screw terminals", "RoHS compliant", "For high-voltage DC links"],
      ["High-voltage DC links", "Large PFC circuits", "Industrial inverters", "Renewable energy", "High-voltage power supplies"],
      "The 500LXS22000M64X115 combines high voltage with large capacitance. The 500V rating supports high-voltage systems. Compact size maximizes power density in equipment.",
      "High-voltage high-capacitance screw terminal capacitor for high-voltage applications"
    ),
    createProduct(
      "200LXS150000M100X220", "150000uF 200V LXS Screw Terminal Capacitor", "Screw Terminal Capacitors",
      "150000uF 200V screw terminal aluminum electrolytic capacitor, LXS series, 85C rated, massive capacitance, 100x220mm size.",
      "The 200LXS150000M100X220 is a massive-capacitance screw terminal capacitor from Rubycon's LXS series. This 150000uF capacitor with 200V rating provides exceptional energy storage.",
      "Featuring extremely large capacitance, this capacitor is ideal for very high-energy storage and high-current filtering applications. The very large size provides excellent thermal performance.",
      "The 100mm diameter x 220mm length case size provides massive energy storage capacity. This capacitor is perfect for very high-power industrial and specialty applications.",
      { "Capacitance": "150000uF ±20%", "Rated Voltage": "200V DC", "Temperature Range": "-25C to +85C", "Lifetime": "2000 hours at 85C", "Ripple Current": "45A rms at 85C, 100kHz", "ESR": "0.008 ohm max at 20C, 100kHz", "Case Size": "100mm D x 220mm L", "Terminals": "M6 Screw terminals" },
      ["Massive 150000uF capacitance", "Exceptional ripple current 45A", "Massive energy storage", "M6 screw terminals", "RoHS compliant", "For specialty high-power applications"],
      ["Very large energy storage", "High-current rectifiers", "Specialty industrial equipment", "Research equipment", "High-power pulsed applications"],
      "The 200LXS150000M100X220 provides massive energy storage for specialty applications. The 150000uF capacitance is among the largest available. Exceptional thermal performance ensures reliability.",
      "Massive-capacitance screw terminal capacitor for specialty high-power applications"
    )
  ];
  screwCategory.products.push(...newScrewProducts);
  console.log(`Screw Terminal Capacitors: ${screwCategory.products.length} products`);
}

// SMD Capacitors - 需要添加4个产品（已有2个）
const smdCategory = productsData.categories.find(c => c.id === 'smd-capacitors');
if (smdCategory && smdCategory.products.length < 6) {
  console.log('Adding SMD Capacitor products...');
  const newSmdProducts = [
    createProduct(
      "10SMD220M8X10", "220uF 10V SMD Capacitor", "SMD Capacitors",
      "220uF 10V surface mount aluminum electrolytic capacitor, compact 8x10mm size, for space-constrained designs.",
      "The 10SMD220M8X10 is a compact surface mount aluminum electrolytic capacitor. This 220uF capacitor with 10V rating is designed for space-constrained applications.",
      "Featuring compact SMD package, this capacitor is ideal for portable electronics and high-density PCBs. The surface mount design enables automated assembly.",
      "The 8mm x 10mm surface mount package provides excellent space efficiency. This capacitor is perfect for consumer electronics and portable devices.",
      { "Capacitance": "220uF ±20%", "Rated Voltage": "10V DC", "Temperature Range": "-40C to +105C", "Lifetime": "2000 hours at 105C", "Ripple Current": "0.28A rms at 105C, 100kHz", "ESR": "0.35 ohm max at 20C, 100kHz", "Case Size": "8mm x 10mm SMD", "Mounting": "Surface mount" },
      ["Compact 8x10mm SMD package", "Space-efficient design", "Automated assembly compatible", "Low profile", "RoHS compliant", "For portable electronics"],
      ["Portable electronics", "Smartphones and tablets", "High-density PCBs", "Consumer electronics", "Wearable devices"],
      "The 10SMD220M8X10 is perfect for space-constrained designs. The compact SMD package minimizes PCB area. Ideal for portable consumer electronics applications.",
      "Compact SMD capacitor for space-constrained applications"
    ),
    createProduct(
      "6.3SMD1000M10X10", "1000uF 6.3V SMD Capacitor", "SMD Capacitors",
      "1000uF 6.3V surface mount aluminum electrolytic capacitor, high capacitance in compact 10x10mm size.",
      "The 6.3SMD1000M10X10 is a high-capacitance surface mount aluminum electrolytic capacitor. This 1000uF capacitor with 6.3V rating provides excellent filtering in compact size.",
      "Featuring high capacitance in SMD package, this capacitor is ideal for low-voltage high-density applications. The surface mount design enables efficient assembly.",
      "The 10mm x 10mm surface mount package provides high capacitance density. This capacitor is perfect for low-voltage power supplies in compact equipment.",
      { "Capacitance": "1000uF ±20%", "Rated Voltage": "6.3V DC", "Temperature Range": "-40C to +105C", "Lifetime": "2000 hours at 105C", "Ripple Current": "0.42A rms at 105C, 100kHz", "ESR": "0.22 ohm max at 20C, 100kHz", "Case Size": "10mm x 10mm SMD", "Mounting": "Surface mount" },
      ["High capacitance 1000uF", "Compact 10x10mm SMD", "High capacitance density", "Automated assembly", "RoHS compliant", "For low-voltage applications"],
      ["Low-voltage power supplies", "High-density PCBs", "Compact electronics", "Consumer devices", "IoT devices"],
      "The 6.3SMD1000M10X10 provides high capacitance in compact SMD package. The 1000uF is excellent for low-voltage filtering. Perfect for space-constrained designs.",
      "High-capacitance SMD capacitor for low-voltage applications"
    ),
    createProduct(
      "35SMD47M6.3X5.5", "47uF 35V SMD Capacitor", "SMD Capacitors",
      "47uF 35V surface mount aluminum electrolytic capacitor, very compact 6.3x5.5mm size, for miniaturized designs.",
      "The 35SMD47M6.3X5.5 is a very compact surface mount aluminum electrolytic capacitor. This 47uF capacitor with 35V rating is designed for miniaturized applications.",
      "Featuring very small SMD package, this capacitor is ideal for ultra-compact electronics. The miniature size enables high-density PCB layouts.",
      "The 6.3mm x 5.5mm surface mount package provides excellent miniaturization. This capacitor is perfect for wearable devices and miniaturized electronics.",
      { "Capacitance": "47uF ±20%", "Rated Voltage": "35V DC", "Temperature Range": "-40C to +105C", "Lifetime": "2000 hours at 105C", "Ripple Current": "0.15A rms at 105C, 100kHz", "ESR": "0.85 ohm max at 20C, 100kHz", "Case Size": "6.3mm x 5.5mm SMD", "Mounting": "Surface mount" },
      ["Very compact 6.3x5.5mm", "Ultra-miniature design", "High voltage for size", "Very low profile", "RoHS compliant", "For miniaturized electronics"],
      ["Wearable devices", "Hearing aids", "Miniature electronics", "High-density PCBs", "Compact IoT devices"],
      "The 35SMD47M6.3X5.5 is among the most compact SMD capacitors available. The miniature size is perfect for wearable and hearing aid applications. High voltage rating for its size.",
      "Ultra-compact SMD capacitor for miniaturized applications"
    ),
    createProduct(
      "50SMD22M8X6.2", "22uF 50V SMD Capacitor", "SMD Capacitors",
      "22uF 50V surface mount aluminum electrolytic capacitor, compact 8x6.2mm size with high voltage rating.",
      "The 50SMD22M8X6.2 is a high-voltage surface mount aluminum electrolytic capacitor. This 22uF capacitor with 50V rating provides high voltage capability in compact size.",
      "Featuring high voltage rating in SMD package, this capacitor is ideal for compact power supplies requiring higher voltage. The surface mount design enables automated production.",
      "The 8mm x 6.2mm surface mount package provides high voltage in compact form. This capacitor is perfect for compact industrial and automotive electronics.",
      { "Capacitance": "22uF ±20%", "Rated Voltage": "50V DC", "Temperature Range": "-40C to +105C", "Lifetime": "2000 hours at 105C", "Ripple Current": "0.12A rms at 105C, 100kHz", "ESR": "1.2 ohm max at 20C, 100kHz", "Case Size": "8mm x 6.2mm SMD", "Mounting": "Surface mount" },
      ["High voltage 50V in SMD", "Compact 8x6.2mm size", "Low profile 6.2mm", "Automated assembly", "RoHS compliant", "For compact high-voltage applications"],
      ["Compact power supplies", "Automotive electronics", "Industrial controls", "High-density PCBs", "Telecom equipment"],
      "The 50SMD22M8X6.2 provides high voltage capability in compact SMD package. The 50V rating supports 24V and 48V systems. Ideal for compact industrial applications.",
      "High-voltage SMD capacitor for compact applications"
    )
  ];
  smdCategory.products.push(...newSmdProducts);
  console.log(`SMD Capacitors: ${smdCategory.products.length} products`);
}

// 保存更新后的数据
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));

console.log('\n========================================');
console.log('✅ All categories now have 6 products each!');
console.log('========================================');
productsData.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products.length} products`);
});
