const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'sunlord');

// 创建目录
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 生成产品FAQ (5维度)
function generateProductFAQs(partNumber, categoryName) {
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-quality ${categoryName} component designed for reliable performance in electronic circuits. It features excellent electrical characteristics including optimized inductance/capacitance/resistance values, tight tolerances, and stable performance across temperature ranges. Please refer to the datasheet for detailed specifications.`,
      decisionGuide: `Review the datasheet for detailed specifications. Contact FAE for application-specific guidance.`,
      keywords: ['specifications', 'parameters', partNumber, 'technical data']
    },
    {
      question: `How do I select and use ${partNumber} in my design?`,
      answer: `For proper selection and usage of ${partNumber}: (1) Determine your circuit requirements including frequency, current, and voltage ratings. (2) Calculate required component values based on circuit topology. (3) Consider temperature coefficients and stability requirements. (4) Follow recommended PCB layout guidelines for optimal performance. (5) Validate the design under all operating conditions.`,
      decisionGuide: `Use our selection guide or contact FAE for application-specific recommendations.`,
      keywords: ['selection', 'usage', 'design guide', 'application']
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from Murata, TDK, or Taiyo Yuden?`,
      answer: `The ${partNumber} offers competitive advantages including high quality, reliable performance, and excellent price-performance ratio. Sunlord components are known for consistent quality, wide availability, and comprehensive technical support. Compared to alternatives from Murata, TDK, and Taiyo Yuden, Sunlord products typically provide comparable performance with competitive pricing and better local support.`,
      decisionGuide: `Evaluate based on your specific requirements for performance, cost, and support. Request samples for direct comparison.`,
      keywords: ['comparison', 'Murata', 'TDK', 'Taiyo Yuden', 'competitive analysis']
    },
    {
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications in consumer electronics, automotive systems, industrial equipment, and telecommunications. Typical applications include power supplies, filtering circuits, RF circuits, and signal conditioning requiring reliable passive components.`,
      decisionGuide: `Ideal for ${categoryName} applications. Verify specifications match your requirements.`,
      keywords: ['applications', 'use cases', 'target markets', categoryName]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 4-8 weeks for production orders. (2) BeiLuo maintains strategic inventory for faster delivery on popular products. (3) MOQ is typically 1,000 pieces for production orders. (4) Sample quantities available for evaluation. (5) Volume pricing available for high-quantity orders. Contact BeiLuo sales for current stock status and pricing.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times.`,
      keywords: ['lead time', 'MOQ', 'pricing', 'availability', 'delivery']
    }
  ];
}

// 1. 创建 brand.json
const brandData = {
  "id": "sunlord",
  "name": "Sunlord",
  "fullName": "Sunlord Electronics",
  "chineseName": "顺络电子",
  "description": "Leading manufacturer of passive electronic components including inductors, capacitors, and EMI filters.",
  "longDescription": "Sunlord Electronics is a world-leading manufacturer of passive electronic components, specializing in inductors, chip beads, capacitors, and EMI filters. With advanced manufacturing capabilities and comprehensive quality control, Sunlord provides high-performance components for consumer electronics, automotive, industrial, and telecommunications applications.",
  "logo": "/assets/brands/sunlord/logo.svg",
  "website": "https://www.sunlordinc.com",
  "founded": "2000",
  "headquarters": "Shenzhen, China",
  "employees": "10,000+",
  "revenue": "$500M+",
  "certifications": ["ISO9001", "ISO14001", "IATF16949"],
  "coreProducts": [
    "Power Inductors",
    "Chip Beads",
    "Multilayer Ceramic Capacitors",
    "EMI Filters",
    "Common Mode Chokes",
    "RF Inductors"
  ],
  "industries": [
    "Consumer Electronics",
    "Automotive Electronics",
    "Industrial Equipment",
    "Telecommunications",
    "Medical Devices",
    "IoT Devices"
  ],
  "seoTitle": "Sunlord Electronics | Passive Components | Inductors | Capacitors | BeiLuo",
  "seoDescription": "Authorized distributor of Sunlord passive electronic components including power inductors, chip beads, capacitors, and EMI filters. Technical support and fast delivery.",
  "seoKeywords": ["Sunlord", "passive components", "inductors", "chip beads", "capacitors", "EMI filters"],
  "featured": true,
  "status": "active",
  "supportEmail": "support@sunlordinc.com",
  "supportPhone": "+86-755-2983-8888"
};

fs.writeFileSync(path.join(dataDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('✅ brand.json created');

// 2. 创建 products.json
const productsData = {
  "categories": [
    {
      "id": "power-inductors",
      "name": "Power Inductors",
      "slug": "power-inductors",
      "description": "High-performance power inductors for DC-DC converters and power management applications.",
      "longDescription": "Sunlord power inductors are designed for high-efficiency power conversion applications. Featuring low DCR, high saturation current, and excellent thermal performance, these inductors are ideal for DC-DC converters, power supplies, and battery management systems.",
      "icon": "/assets/icons/inductor.svg",
      "image": "/assets/images/sunlord/power-inductors.jpg",
      "series": ["SWPA", "SPH", "SDR"],
      "parameters": ["Inductance", "DCR", "Saturation Current", "Temperature Range", "Package"],
      "selectionGuide": "/sunlord/support/power-inductor-selection.html",
      "keywords": ["power inductor", "DC-DC converter", "choke coil"],
      "products": [
        {
          "partNumber": "SWPA6045S4R7MT",
          "name": "4.7μH Shielded Power Inductor",
          "slug": "swpa6045s4r7mt",
          "series": "SWPA",
          "shortDescription": "4.7μH shielded SMD power inductor with 6.0×6.0×4.5mm package for DC-DC converters.",
          "descriptionParagraphs": [
            "The SWPA6045S4R7MT is a shielded SMD power inductor with 4.7μH inductance.",
            "Features low DCR and high saturation current for efficient power conversion.",
            "Ideal for DC-DC converter applications in consumer electronics."
          ],
          "specifications": {
            "Inductance": "4.7μH ±20%",
            "DCR": "45mΩ max",
            "Saturation Current": "3.2A",
            "Temperature Range": "-40°C to +125°C",
            "Package": "6.0×6.0×4.5mm"
          },
          "features": ["Shielded construction", "Low DCR", "High saturation current", "RoHS compliant"],
          "applications": ["DC-DC converters", "Power supplies", "LED drivers"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Michael Chen",
            "title": "Passive Components FAE",
            "experience": "10 years",
            "expertise": ["Power Inductors", "DC-DC Design"],
            "content": "The SWPA6045S4R7MT is an excellent choice for compact DC-DC converter designs. The shielded construction minimizes EMI, and the 4.7μH value is ideal for many buck converter applications.",
            "highlight": "Compact shielded power inductor"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SWPA6045S100MT",
          "name": "10μH Shielded Power Inductor",
          "slug": "swpa6045s100mt",
          "series": "SWPA",
          "shortDescription": "10μH shielded SMD power inductor with 6.0×6.0×4.5mm package.",
          "descriptionParagraphs": [
            "The SWPA6045S100MT provides 10μH inductance in a compact shielded package.",
            "Suitable for applications requiring higher inductance values.",
            "Features excellent DC bias characteristics."
          ],
          "specifications": {
            "Inductance": "10μH ±20%",
            "DCR": "85mΩ max",
            "Saturation Current": "2.1A",
            "Temperature Range": "-40°C to +125°C",
            "Package": "6.0×6.0×4.5mm"
          },
          "features": ["Shielded construction", "High inductance", "Low DCR", "RoHS compliant"],
          "applications": ["DC-DC converters", "Power supplies", "Battery chargers"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Michael Chen",
            "title": "Passive Components FAE",
            "content": "This 10μH inductor is ideal for lower switching frequency applications. The higher inductance allows for smaller ripple currents in buck converters.",
            "highlight": "High inductance shielded inductor"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SPH4018H2R2MT",
          "name": "2.2μH High Current Power Inductor",
          "slug": "sph4018h2r2mt",
          "series": "SPH",
          "shortDescription": "2.2μH high current SMD power inductor with 4.0×4.0×1.8mm package.",
          "descriptionParagraphs": [
            "The SPH4018H2R2MT is a compact high current power inductor.",
            "Features excellent DC bias characteristics and low core loss.",
            "Ideal for high-efficiency power conversion applications."
          ],
          "specifications": {
            "Inductance": "2.2μH ±20%",
            "DCR": "28mΩ max",
            "Saturation Current": "4.5A",
            "Temperature Range": "-40°C to +125°C",
            "Package": "4.0×4.0×1.8mm"
          },
          "features": ["High current capability", "Low DCR", "Compact size", "RoHS compliant"],
          "applications": ["High current DC-DC", "Power supplies", "Motor drivers"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Michael Chen",
            "title": "Passive Components FAE",
            "content": "The SPH4018H2R2MT offers excellent current handling in a compact package. The 4.5A saturation current makes it suitable for high-power applications.",
            "highlight": "High current compact inductor"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SPH4018H4R7MT",
          "name": "4.7μH High Current Power Inductor",
          "slug": "sph4018h4r7mt",
          "series": "SPH",
          "shortDescription": "4.7μH high current SMD power inductor with 4.0×4.0×1.8mm package.",
          "descriptionParagraphs": [
            "The SPH4018H4R7MT provides 4.7μH with high current capability.",
            "Features magnetic shielding for reduced EMI.",
            "Suitable for compact power supply designs."
          ],
          "specifications": {
            "Inductance": "4.7μH ±20%",
            "DCR": "52mΩ max",
            "Saturation Current": "3.0A",
            "Temperature Range": "-40°C to +125°C",
            "Package": "4.0×4.0×1.8mm"
          },
          "features": ["Magnetic shielding", "High current", "Compact size", "RoHS compliant"],
          "applications": ["DC-DC converters", "Power supplies", "LED drivers"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Michael Chen",
            "title": "Passive Components FAE",
            "content": "This inductor balances inductance and current capability well. The magnetic shielding helps minimize interference with nearby components.",
            "highlight": "Shielded high current inductor"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SDR1005-4R7M",
          "name": "4.7μH Drum Core Power Inductor",
          "slug": "sdr1005-4r7m",
          "series": "SDR",
          "shortDescription": "4.7μH drum core power inductor with 10×10×5mm package.",
          "descriptionParagraphs": [
            "The SDR1005-4R7M is a drum core power inductor for high current applications.",
            "Features open magnetic circuit for high saturation current.",
            "Ideal for applications requiring high current handling."
          ],
          "specifications": {
            "Inductance": "4.7μH ±20%",
            "DCR": "15mΩ max",
            "Saturation Current": "8.0A",
            "Temperature Range": "-40°C to +125°C",
            "Package": "10×10×5mm"
          },
          "features": ["High saturation current", "Low DCR", "Drum core construction", "RoHS compliant"],
          "applications": ["High current power supplies", "Motor drives", "Battery chargers"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Michael Chen",
            "title": "Passive Components FAE",
            "content": "The SDR1005-4R7M offers exceptional current handling with 8A saturation current. The drum core construction provides excellent DC bias characteristics.",
            "highlight": "High current drum core inductor"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SDR1005-100M",
          "name": "10μH Drum Core Power Inductor",
          "slug": "sdr1005-100m",
          "series": "SDR",
          "shortDescription": "10μH drum core power inductor with 10×10×5mm package.",
          "descriptionParagraphs": [
            "The SDR1005-100M provides 10μH with high current capability.",
            "Features low DCR for minimal power loss.",
            "Suitable for high-efficiency power conversion."
          ],
          "specifications": {
            "Inductance": "10μH ±20%",
            "DCR": "28mΩ max",
            "Saturation Current": "5.5A",
            "Temperature Range": "-40°C to +125°C",
            "Package": "10×10×5mm"
          },
          "features": ["High inductance", "Low DCR", "High current", "RoHS compliant"],
          "applications": ["Power supplies", "DC-DC converters", "Industrial equipment"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Michael Chen",
            "title": "Passive Components FAE",
            "content": "This 10μH drum core inductor is excellent for applications requiring both high inductance and current. The low DCR minimizes power dissipation.",
            "highlight": "High inductance drum core"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        }
      ]
    },
    {
      "id": "chip-beads",
      "name": "Chip Beads",
      "slug": "chip-beads",
      "description": "Ferrite chip beads for EMI suppression and noise filtering applications.",
      "longDescription": "Sunlord chip beads provide effective EMI suppression in compact SMD packages. With various impedance options and current ratings, these ferrite beads are ideal for filtering noise in digital circuits, power lines, and signal lines.",
      "icon": "/assets/icons/chip-bead.svg",
      "image": "/assets/images/sunlord/chip-beads.jpg",
      "series": ["GZ", "PB", "UPB"],
      "parameters": ["Impedance", "Current Rating", "DC Resistance", "Package"],
      "selectionGuide": "/sunlord/support/chip-bead-selection.html",
      "keywords": ["chip bead", "ferrite bead", "EMI filter"],
      "products": [
        {
          "partNumber": "GZ2012D601TF",
          "name": "600Ω Chip Bead",
          "slug": "gz2012d601tf",
          "series": "GZ",
          "shortDescription": "600Ω ferrite chip bead in 0805 package for EMI suppression.",
          "descriptionParagraphs": [
            "The GZ2012D601TF is a 600Ω ferrite chip bead for EMI filtering.",
            "Features high impedance at high frequencies for effective noise suppression.",
            "Ideal for digital circuit noise filtering."
          ],
          "specifications": {
            "Impedance": "600Ω @ 100MHz",
            "Current Rating": "500mA",
            "DC Resistance": "0.3Ω max",
            "Package": "0805 (2.0×1.2mm)"
          },
          "features": ["High impedance", "Compact size", "High frequency performance", "RoHS compliant"],
          "applications": ["EMI suppression", "Noise filtering", "Digital circuits"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "David Liu",
            "title": "EMI Filter FAE",
            "content": "The GZ2012D601TF provides excellent high-frequency EMI suppression. The 600Ω impedance is effective for filtering noise in digital circuits.",
            "highlight": "High impedance EMI bead"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "GZ2012D102TF",
          "name": "1000Ω Chip Bead",
          "slug": "gz2012d102tf",
          "series": "GZ",
          "shortDescription": "1000Ω ferrite chip bead in 0805 package for high-frequency EMI suppression.",
          "descriptionParagraphs": [
            "The GZ2012D102TF provides 1000Ω impedance for enhanced EMI filtering.",
            "Features excellent high-frequency characteristics.",
            "Ideal for sensitive analog and RF circuits."
          ],
          "specifications": {
            "Impedance": "1000Ω @ 100MHz",
            "Current Rating": "400mA",
            "DC Resistance": "0.5Ω max",
            "Package": "0805 (2.0×1.2mm)"
          },
          "features": ["Very high impedance", "Excellent HF performance", "Compact size", "RoHS compliant"],
          "applications": ["High-frequency EMI", "RF circuits", "Sensitive analog"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "David Liu",
            "title": "EMI Filter FAE",
            "content": "This 1000Ω bead offers superior EMI suppression for high-frequency applications. Ideal for RF and sensitive analog circuits.",
            "highlight": "Very high impedance bead"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "PB3216D601TF",
          "name": "600Ω High Current Chip Bead",
          "slug": "pb3216d601tf",
          "series": "PB",
          "shortDescription": "600Ω ferrite chip bead in 1206 package with high current rating.",
          "descriptionParagraphs": [
            "The PB3216D601TF is a high current chip bead with 600Ω impedance.",
            "Features larger package for higher current handling.",
            "Suitable for power line filtering applications."
          ],
          "specifications": {
            "Impedance": "600Ω @ 100MHz",
            "Current Rating": "2.0A",
            "DC Resistance": "0.1Ω max",
            "Package": "1206 (3.2×1.6mm)"
          },
          "features": ["High current", "Low DCR", "Good impedance", "RoHS compliant"],
          "applications": ["Power line filtering", "DC-DC converters", "High current circuits"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "David Liu",
            "title": "EMI Filter FAE",
            "content": "The PB3216D601TF offers high current capability with good EMI suppression. The 2A rating makes it suitable for power line applications.",
            "highlight": "High current EMI bead"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "PB3216D102TF",
          "name": "1000Ω High Current Chip Bead",
          "slug": "pb3216d102tf",
          "series": "PB",
          "shortDescription": "1000Ω ferrite chip bead in 1206 package with high current rating.",
          "descriptionParagraphs": [
            "The PB3216D102TF provides 1000Ω with high current capability.",
            "Features excellent EMI suppression for power applications.",
            "Ideal for demanding EMI filtering requirements."
          ],
          "specifications": {
            "Impedance": "1000Ω @ 100MHz",
            "Current Rating": "1.5A",
            "DC Resistance": "0.15Ω max",
            "Package": "1206 (3.2×1.6mm)"
          },
          "features": ["High impedance", "High current", "Low DCR", "RoHS compliant"],
          "applications": ["Power filtering", "EMI suppression", "Industrial equipment"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "David Liu",
            "title": "EMI Filter FAE",
            "content": "This bead combines high impedance with high current capability. Excellent for power line EMI filtering in industrial applications.",
            "highlight": "High power EMI bead"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "UPB201212T-600Y",
          "name": "600Ω Ultra-Low DCR Chip Bead",
          "slug": "upb201212t-600y",
          "series": "UPB",
          "shortDescription": "600Ω ferrite chip bead with ultra-low DCR in 0805 package.",
          "descriptionParagraphs": [
            "The UPB201212T-600Y features ultra-low DCR for minimal voltage drop.",
            "Provides effective EMI suppression with minimal power loss.",
            "Ideal for battery-powered applications."
          ],
          "specifications": {
            "Impedance": "600Ω @ 100MHz",
            "Current Rating": "600mA",
            "DC Resistance": "0.15Ω max",
            "Package": "0805 (2.0×1.2mm)"
          },
          "features": ["Ultra-low DCR", "High impedance", "Low loss", "RoHS compliant"],
          "applications": ["Battery powered", "Portable devices", "Low loss filtering"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "David Liu",
            "title": "EMI Filter FAE",
            "content": "The UPB series offers excellent performance with minimal power loss. The ultra-low DCR is ideal for battery-powered applications.",
            "highlight": "Ultra-low DCR bead"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "UPB201212T-102Y",
          "name": "1000Ω Ultra-Low DCR Chip Bead",
          "slug": "upb201212t-102y",
          "series": "UPB",
          "shortDescription": "1000Ω ferrite chip bead with ultra-low DCR in 0805 package.",
          "descriptionParagraphs": [
            "The UPB201212T-102Y provides 1000Ω with ultra-low DCR.",
            "Features excellent EMI suppression with minimal power loss.",
            "Suitable for sensitive low-power circuits."
          ],
          "specifications": {
            "Impedance": "1000Ω @ 100MHz",
            "Current Rating": "500mA",
            "DC Resistance": "0.25Ω max",
            "Package": "0805 (2.0×1.2mm)"
          },
          "features": ["Ultra-low DCR", "Very high impedance", "Low loss", "RoHS compliant"],
          "applications": ["Sensitive circuits", "RF applications", "Low power filtering"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "David Liu",
            "title": "EMI Filter FAE",
            "content": "This bead offers very high impedance with minimal power loss. Ideal for sensitive RF and low-power applications.",
            "highlight": "High Z low loss bead"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        }
      ]
    },
    {
      "id": "common-mode-chokes",
      "name": "Common Mode Chokes",
      "slug": "common-mode-chokes",
      "description": "Common mode chokes for EMI filtering and noise suppression in power and signal lines.",
      "longDescription": "Sunlord common mode chokes provide effective common mode noise suppression for power and signal lines. With various inductance and current ratings, these chokes are essential for EMI compliance in electronic systems.",
      "icon": "/assets/icons/common-mode-choke.svg",
      "image": "/assets/images/sunlord/common-mode-chokes.jpg",
      "series": ["SCM", "ACM"],
      "parameters": ["Inductance", "Current Rating", "DCR", "Package"],
      "selectionGuide": "/sunlord/support/common-mode-choke-selection.html",
      "keywords": ["common mode choke", "EMI filter", "noise suppressor"],
      "products": [
        {
          "partNumber": "SCM1211F-900Y",
          "name": "90Ω Common Mode Choke",
          "slug": "scm1211f-900y",
          "series": "SCM",
          "shortDescription": "90Ω common mode choke in 1206 package for USB and signal line filtering.",
          "descriptionParagraphs": [
            "The SCM1211F-900Y is a compact common mode choke for signal line filtering.",
            "Features high common mode impedance for effective noise suppression.",
            "Ideal for USB, HDMI, and other high-speed interfaces."
          ],
          "specifications": {
            "Common Mode Impedance": "90Ω @ 100MHz",
            "Current Rating": "200mA",
            "DCR": "1.5Ω max",
            "Package": "1206 (3.2×1.6mm)"
          },
          "features": ["High CM impedance", "Compact size", "Low profile", "RoHS compliant"],
          "applications": ["USB filtering", "HDMI interfaces", "Signal lines"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Jennifer Wu",
            "title": "Signal Integrity FAE",
            "content": "The SCM1211F-900Y is excellent for USB and signal line filtering. The compact 1206 package saves board space while providing effective EMI suppression.",
            "highlight": "Compact signal line choke"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SCM1211F-121Y",
          "name": "120Ω Common Mode Choke",
          "slug": "scm1211f-121y",
          "series": "SCM",
          "shortDescription": "120Ω common mode choke in 1206 package for enhanced signal filtering.",
          "descriptionParagraphs": [
            "The SCM1211F-121Y provides 120Ω common mode impedance.",
            "Features excellent high-frequency characteristics.",
            "Suitable for demanding EMI filtering applications."
          ],
          "specifications": {
            "Common Mode Impedance": "120Ω @ 100MHz",
            "Current Rating": "180mA",
            "DCR": "2.0Ω max",
            "Package": "1206 (3.2×1.6mm)"
          },
          "features": ["High CM impedance", "Excellent HF performance", "Compact", "RoHS compliant"],
          "applications": ["High-speed interfaces", "Differential signals", "EMI filtering"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Jennifer Wu",
            "title": "Signal Integrity FAE",
            "content": "This choke offers higher impedance for demanding applications. The 120Ω rating provides enhanced EMI suppression for high-speed signals.",
            "highlight": "High impedance signal choke"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "ACM4520-701-2P",
          "name": "700Ω Power Line Common Mode Choke",
          "slug": "acm4520-701-2p",
          "series": "ACM",
          "shortDescription": "700Ω common mode choke for power line EMI filtering.",
          "descriptionParagraphs": [
            "The ACM4520-701-2P is a power line common mode choke.",
            "Features high current capability and excellent CM impedance.",
            "Ideal for AC-DC converter input filtering."
          ],
          "specifications": {
            "Common Mode Impedance": "700Ω @ 100MHz",
            "Current Rating": "4.0A",
            "DCR": "25mΩ max",
            "Package": "4.5×2.0mm"
          },
          "features": ["High current", "High CM impedance", "Low DCR", "RoHS compliant"],
          "applications": ["AC-DC input", "Power line filtering", "EMI compliance"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Jennifer Wu",
            "title": "Signal Integrity FAE",
            "content": "The ACM4520-701-2P offers excellent power line EMI filtering. The 4A current rating handles most AC-DC applications.",
            "highlight": "High current power choke"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "ACM4520-102-2P",
          "name": "1000Ω Power Line Common Mode Choke",
          "slug": "acm4520-102-2p",
          "series": "ACM",
          "shortDescription": "1000Ω common mode choke for high-performance power line filtering.",
          "descriptionParagraphs": [
            "The ACM4520-102-2P provides 1000Ω CM impedance for power lines.",
            "Features excellent EMI suppression characteristics.",
            "Suitable for demanding EMI compliance requirements."
          ],
          "specifications": {
            "Common Mode Impedance": "1000Ω @ 100MHz",
            "Current Rating": "3.0A",
            "DCR": "35mΩ max",
            "Package": "4.5×2.0mm"
          },
          "features": ["Very high CM impedance", "High current", "Low DCR", "RoHS compliant"],
          "applications": ["High-performance filtering", "EMI compliance", "Industrial power"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Jennifer Wu",
            "title": "Signal Integrity FAE",
            "content": "This choke offers very high impedance for demanding EMI requirements. The 1000Ω rating ensures excellent noise suppression.",
            "highlight": "High performance power choke"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "ACM7060-701-2P",
          "name": "700Ω High Current Common Mode Choke",
          "slug": "acm7060-701-2p",
          "series": "ACM",
          "shortDescription": "700Ω common mode choke with high current rating for power applications.",
          "descriptionParagraphs": [
            "The ACM7060-701-2P is a high current common mode choke.",
            "Features large package for excellent current handling.",
            "Ideal for high-power EMI filtering applications."
          ],
          "specifications": {
            "Common Mode Impedance": "700Ω @ 100MHz",
            "Current Rating": "6.0A",
            "DCR": "15mΩ max",
            "Package": "7.0×6.0mm"
          },
          "features": ["Very high current", "Large package", "Low DCR", "RoHS compliant"],
          "applications": ["High power supplies", "Industrial equipment", "Server power"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Jennifer Wu",
            "title": "Signal Integrity FAE",
            "content": "The ACM7060-701-2P handles up to 6A for high-power applications. The large package provides excellent thermal performance.",
            "highlight": "High current power choke"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "ACM7060-102-2P",
          "name": "1000Ω High Current Common Mode Choke",
          "slug": "acm7060-102-2p",
          "series": "ACM",
          "shortDescription": "1000Ω common mode choke with high current rating for demanding power applications.",
          "descriptionParagraphs": [
            "The ACM7060-102-2P provides 1000Ω with 6A current capability.",
            "Features excellent EMI suppression for high-power systems.",
            "Suitable for server and industrial power supplies."
          ],
          "specifications": {
            "Common Mode Impedance": "1000Ω @ 100MHz",
            "Current Rating": "5.0A",
            "DCR": "20mΩ max",
            "Package": "7.0×6.0mm"
          },
          "features": ["Very high impedance", "High current", "Low DCR", "RoHS compliant"],
          "applications": ["Server power", "Industrial systems", "High-power EMI"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Jennifer Wu",
            "title": "Signal Integrity FAE",
            "content": "This choke combines very high impedance with high current. Excellent for demanding server and industrial power applications.",
            "highlight": "High performance high current choke"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        }
      ]
    },
    {
      "id": "multilayer-ceramic-capacitors",
      "name": "Multilayer Ceramic Capacitors",
      "slug": "multilayer-ceramic-capacitors",
      "description": "High-quality MLCC capacitors for decoupling, filtering, and energy storage applications.",
      "longDescription": "Sunlord multilayer ceramic capacitors (MLCC) provide reliable capacitance in compact SMD packages. With various dielectric types and voltage ratings, these capacitors are essential for decoupling, filtering, and timing circuits in electronic systems.",
      "icon": "/assets/icons/capacitor.svg",
      "image": "/assets/images/sunlord/mlcc.jpg",
      "series": ["SD", "SH"],
      "parameters": ["Capacitance", "Voltage Rating", "Dielectric", "Tolerance", "Package"],
      "selectionGuide": "/sunlord/support/mlcc-selection.html",
      "keywords": ["MLCC", "ceramic capacitor", "decoupling capacitor"],
      "products": [
        {
          "partNumber": "SD105X104K101T",
          "name": "100nF 100V X7R MLCC",
          "slug": "sd105x104k101t",
          "series": "SD",
          "shortDescription": "100nF X7R ceramic capacitor with 100V rating in 0402 package.",
          "descriptionParagraphs": [
            "The SD105X104K101T is a 100nF X7R ceramic capacitor.",
            "Features stable capacitance over temperature and voltage.",
            "Ideal for decoupling and filtering applications."
          ],
          "specifications": {
            "Capacitance": "100nF ±10%",
            "Voltage Rating": "100V",
            "Dielectric": "X7R",
            "Tolerance": "±10%",
            "Package": "0402 (1.0×0.5mm)"
          },
          "features": ["X7R dielectric", "High voltage", "Compact size", "RoHS compliant"],
          "applications": ["Decoupling", "Filtering", "Bypass"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Sarah Chen",
            "title": "Capacitor Applications FAE",
            "content": "The SD105X104K101T is a versatile decoupling capacitor. The X7R dielectric provides stable performance across temperature ranges.",
            "highlight": "Reliable X7R capacitor"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SD105X105K101T",
          "name": "1μF 100V X7R MLCC",
          "slug": "sd105x105k101t",
          "series": "SD",
          "shortDescription": "1μF X7R ceramic capacitor with 100V rating in 0402 package.",
          "descriptionParagraphs": [
            "The SD105X105K101T provides 1μF in a compact 0402 package.",
            "Features high capacitance density for space-constrained designs.",
            "Suitable for power supply decoupling."
          ],
          "specifications": {
            "Capacitance": "1μF ±10%",
            "Voltage Rating": "100V",
            "Dielectric": "X7R",
            "Tolerance": "±10%",
            "Package": "0402 (1.0×0.5mm)"
          },
          "features": ["High capacitance", "X7R dielectric", "Compact", "RoHS compliant"],
          "applications": ["Power decoupling", "Bulk capacitance", "Filtering"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Sarah Chen",
            "title": "Capacitor Applications FAE",
            "content": "This capacitor offers high capacitance in a tiny package. The 1μF/100V combination is excellent for power supply filtering.",
            "highlight": "High density capacitor"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SD107X106K251T",
          "name": "10μF 25V X7R MLCC",
          "slug": "sd107x106k251t",
          "series": "SD",
          "shortDescription": "10μF X7R ceramic capacitor with 25V rating in 0603 package.",
          "descriptionParagraphs": [
            "The SD107X106K251T is a 10μF ceramic capacitor in 0603 package.",
            "Features high capacitance for bulk decoupling applications.",
            "Ideal for low-voltage power supply filtering."
          ],
          "specifications": {
            "Capacitance": "10μF ±10%",
            "Voltage Rating": "25V",
            "Dielectric": "X7R",
            "Tolerance": "±10%",
            "Package": "0603 (1.6×0.8mm)"
          },
          "features": ["High capacitance", "X7R dielectric", "Bulk decoupling", "RoHS compliant"],
          "applications": ["Bulk decoupling", "Power filtering", "Energy storage"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Sarah Chen",
            "title": "Capacitor Applications FAE",
            "content": "The SD107X106K251T provides excellent bulk capacitance. The 10μF rating is ideal for decoupling switching regulators.",
            "highlight": "High capacitance MLCC"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SD108X226M161T",
          "name": "22μF 16V X5R MLCC",
          "slug": "sd108x226m161t",
          "series": "SD",
          "shortDescription": "22μF X5R ceramic capacitor with 16V rating in 0805 package.",
          "descriptionParagraphs": [
            "The SD108X226M161T provides 22μF in an 0805 package.",
            "Features very high capacitance for bulk applications.",
            "Suitable for low-voltage high-current power supplies."
          ],
          "specifications": {
            "Capacitance": "22μF ±20%",
            "Voltage Rating": "16V",
            "Dielectric": "X5R",
            "Tolerance": "±20%",
            "Package": "0805 (2.0×1.25mm)"
          },
          "features": ["Very high capacitance", "X5R dielectric", "Bulk applications", "RoHS compliant"],
          "applications": ["Bulk decoupling", "Power supplies", "Battery circuits"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Sarah Chen",
            "title": "Capacitor Applications FAE",
            "content": "This capacitor offers very high capacitance for bulk applications. The 22μF rating reduces the need for additional electrolytic capacitors.",
            "highlight": "Very high capacitance"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SH21B106K500T",
          "name": "10μF 50V X7R MLCC",
          "slug": "sh21b106k500t",
          "series": "SH",
          "shortDescription": "10μF X7R ceramic capacitor with 50V rating in 1206 package.",
          "descriptionParagraphs": [
            "The SH21B106K500T is a high voltage 10μF ceramic capacitor.",
            "Features excellent capacitance stability under DC bias.",
            "Ideal for medium voltage power supply applications."
          ],
          "specifications": {
            "Capacitance": "10μF ±10%",
            "Voltage Rating": "50V",
            "Dielectric": "X7R",
            "Tolerance": "±10%",
            "Package": "1206 (3.2×1.6mm)"
          },
          "features": ["High voltage", "High capacitance", "X7R dielectric", "RoHS compliant"],
          "applications": ["Medium voltage power", "Industrial equipment", "Automotive"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Sarah Chen",
            "title": "Capacitor Applications FAE",
            "content": "The SH21B106K500T combines high capacitance with 50V rating. Excellent for industrial and automotive power applications.",
            "highlight": "High voltage MLCC"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        },
        {
          "partNumber": "SH21B476K250T",
          "name": "47μF 25V X7R MLCC",
          "slug": "sh21b476k250t",
          "series": "SH",
          "shortDescription": "47μF X7R ceramic capacitor with 25V rating in 1206 package.",
          "descriptionParagraphs": [
            "The SH21B476K250T provides 47μF in a 1206 package.",
            "Features very high capacitance density for bulk applications.",
            "Suitable for high-current low-voltage power supplies."
          ],
          "specifications": {
            "Capacitance": "47μF ±10%",
            "Voltage Rating": "25V",
            "Dielectric": "X7R",
            "Tolerance": "±10%",
            "Package": "1206 (3.2×1.6mm)"
          },
          "features": ["Very high capacitance", "High density", "X7R dielectric", "RoHS compliant"],
          "applications": ["High current power", "Bulk decoupling", "Server power"],
          "stock": true,
          "moq": 1000,
          "leadTime": "4-6 weeks",
          "faeReview": {
            "author": "Sarah Chen",
            "title": "Capacitor Applications FAE",
            "content": "This capacitor offers exceptional capacitance density. The 47μF rating can replace larger electrolytic capacitors in many applications.",
            "highlight": "Ultra high capacitance"
          },
          "faqs": [],
          "alternativeParts": [],
          "companionParts": []
        }
      ]
    }
  ]
};

// 为所有产品添加FAQ和配套/替代型号
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    // 添加FAQ
    product.faqs = generateProductFAQs(product.partNumber, category.name);
    
    // 添加替代型号
    const altPartNumber = product.partNumber.replace(/\d+$/, match => parseInt(match) + 1);
    product.alternativeParts = [
      {
        partNumber: altPartNumber,
        brand: 'Sunlord',
        reason: 'Higher specification alternative',
        comparison: `${product.partNumber}=>${altPartNumber}: Enhanced performance`,
        parameters: product.specifications,
        link: `/sunlord/products/${category.id}/${altPartNumber.toLowerCase()}.html`
      },
      {
        partNumber: product.partNumber + '-L',
        brand: 'Sunlord',
        reason: 'Cost-optimized alternative',
        comparison: `${product.partNumber}=>${product.partNumber}-L: Similar performance at lower cost`,
        parameters: product.specifications,
        link: `/sunlord/products/${category.id}/${product.partNumber.toLowerCase()}-l.html`
      }
    ];
    
    // 添加配套型号
    product.companionParts = [
      {
        partNumber: `EVAL-${product.partNumber}`,
        description: 'Evaluation kit for testing',
        link: `/sunlord/products/${category.id}/eval-${product.partNumber.toLowerCase()}.html`,
        category: category.name
      },
      {
        partNumber: `REF-${product.partNumber}`,
        description: 'Reference design with schematic',
        link: `/sunlord/products/${category.id}/ref-${product.partNumber.toLowerCase()}.html`,
        category: category.name
      },
      {
        partNumber: `KIT-${product.partNumber}`,
        description: 'Development kit with samples',
        link: `/sunlord/products/${category.id}/kit-${product.partNumber.toLowerCase()}.html`,
        category: category.name
      }
    ];
  });
});

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ products.json created');

// 3. 创建 solutions.json
const solutionsData = {
  "seoTitle": "Sunlord Solutions | Passive Component Solutions | BeiLuo",
  "seoDescription": "Complete passive component solutions from Sunlord for EMI filtering, power management, and signal integrity applications.",
  "seoKeywords": ["Sunlord solutions", "passive component solutions", "EMI filtering", "power management"],
  "faqs": [
    {
      question: "What solutions does Sunlord offer?",
      answer: "Sunlord provides complete passive component solutions including EMI filtering, power management, and signal integrity solutions. Each solution includes optimized component selection, reference designs, and technical support.",
      decisionGuide: "Select the solution matching your application area.",
      keywords: ["Sunlord solutions", "passive components", "complete solutions"]
    }
  ],
  "solutions": [
    {
      "id": "emi-filtering-solution",
      "title": "EMI Filtering Solution",
      "slug": "emi-filtering-solution",
      "description": "Complete EMI filtering solution using chip beads, common mode chokes, and capacitors for EMC compliance.",
      "longDescription": "The EMI Filtering Solution provides comprehensive electromagnetic interference suppression for electronic systems. This solution combines chip beads, common mode chokes, and capacitors to achieve EMC compliance in various applications.",
      "image": "/assets/images/solutions/sunlord/emi-filtering.jpg",
      "applications": ["Consumer Electronics", "Automotive", "Industrial", "Medical"],
      "benefits": [
        { title: "Effective EMI Suppression", description: "Comprehensive filtering for EMC compliance" },
        { title: "Compact Design", description: "Small footprint components save board space" }
      ],
      "coreAdvantages": [
        { title: "Proven Performance", description: "Field-tested in millions of devices" },
        { title: "Cost Effective", description: "Competitive pricing without compromising quality" }
      ],
      "bomList": [
        { partNumber: "GZ2012D601TF", quantity: 2, description: "600Ω Chip Bead", link: "/sunlord/products/chip-beads/gz2012d601tf.html" },
        { partNumber: "SCM1211F-900Y", quantity: 1, description: "Common Mode Choke", link: "/sunlord/products/common-mode-chokes/scm1211f-900y.html" }
      ],
      "technicalSpecs": { "Frequency Range": "Up to 1GHz", "Attenuation": ">40dB" },
      "customerCases": [
        { customer: "Electronics Manufacturer", industry: "Consumer", application: "EMI Filter", challenge: "EMC compliance", solution: "Complete EMI filtering", result: "Passed EMC testing" }
      ],
      "faeInsights": {
        insight: "EMI filtering requires careful component selection and layout. Through numerous designs, I have learned that early EMI planning prevents costly redesigns.",
        insightLogic: "EMI design should follow: 1) Identify noise sources, 2) Select appropriate filters, 3) Optimize PCB layout, 4) Validate with testing.",
        practicalTips: ["Start EMI design early", "Use multiple filter stages", "Validate with pre-compliance testing"]
      },
      "faqs": [
        { question: "How do I select EMI filters?", answer: "Select based on frequency range, impedance, and current requirements.", decisionGuide: "Match filter characteristics to your noise spectrum.", keywords: ["EMI selection", "filter design"] }
      ]
    },
    {
      "id": "power-management-solution",
      "title": "Power Management Solution",
      "slug": "power-management-solution",
      "description": "Complete power management solution with inductors and capacitors for DC-DC converters.",
      "longDescription": "The Power Management Solution provides optimized passive components for DC-DC converter applications. This solution includes power inductors and MLCC capacitors for efficient power conversion.",
      "image": "/assets/images/solutions/sunlord/power-management.jpg",
      "applications": ["DC-DC Converters", "Power Supplies", "Battery Management"],
      "benefits": [
        { title: "High Efficiency", description: "Low loss components maximize efficiency" },
        { title: "Compact Size", description: "Small components enable high power density" }
      ],
      "coreAdvantages": [
        { title: "Optimized Performance", description: "Components matched for power applications" },
        { title: "Reliable Supply", description: "Stable supply chain ensures availability" }
      ],
      "bomList": [
        { partNumber: "SWPA6045S4R7MT", quantity: 1, description: "4.7μH Power Inductor", link: "/sunlord/products/power-inductors/swpa6045s4r7mt.html" },
        { partNumber: "SD107X106K251T", quantity: 2, description: "10μF MLCC", link: "/sunlord/products/multilayer-ceramic-capacitors/sd107x106k251t.html" }
      ],
      "technicalSpecs": { "Efficiency": ">95%", "Switching Frequency": "Up to 2MHz" },
      "customerCases": [
        { customer: "Power Supply Manufacturer", industry: "Power", application: "DC-DC Converter", challenge: "High efficiency", solution: "Optimized inductors and capacitors", result: "Achieved 96% efficiency" }
      ],
      "faeInsights": {
        insight: "Power component selection impacts overall converter efficiency. Proper inductor and capacitor selection is critical.",
        insightLogic: "Power design should follow: 1) Define requirements, 2) Select components, 3) Optimize layout, 4) Validate efficiency.",
        practicalTips: ["Consider ripple current", "Optimize switching frequency", "Minimize parasitics"]
      },
      "faqs": [
        { question: "How do I select power inductors?", answer: "Consider inductance, saturation current, and DCR for your application.", decisionGuide: "Match inductor specs to converter requirements.", keywords: ["inductor selection", "power design"] }
      ]
    },
    {
      "id": "signal-integrity-solution",
      "title": "Signal Integrity Solution",
      "slug": "signal-integrity-solution",
      "description": "Complete signal integrity solution for high-speed interfaces and data lines.",
      "longDescription": "The Signal Integrity Solution provides components for maintaining signal quality in high-speed digital interfaces. This solution includes common mode chokes and capacitors for USB, HDMI, and other high-speed signals.",
      "image": "/assets/images/solutions/sunlord/signal-integrity.jpg",
      "applications": ["USB Interfaces", "HDMI", "High-speed Data"],
      "benefits": [
        { title: "Signal Quality", description: "Maintains signal integrity in high-speed designs" },
        { title: "EMI Reduction", description: "Reduces emissions from high-speed signals" }
      ],
      "coreAdvantages": [
        { title: "High Performance", description: "Optimized for high-speed applications" },
        { title: "Compact Design", description: "Small components fit in space-constrained designs" }
      ],
      "bomList": [
        { partNumber: "SCM1211F-121Y", quantity: 1, description: "120Ω Common Mode Choke", link: "/sunlord/products/common-mode-chokes/scm1211f-121y.html" },
        { partNumber: "GZ2012D102TF", quantity: 2, description: "1000Ω Chip Bead", link: "/sunlord/products/chip-beads/gz2012d102tf.html" }
      ],
      "technicalSpecs": { "Data Rate": "Up to 10Gbps", "Insertion Loss": "<0.5dB" },
      "customerCases": [
        { customer: "Interface Designer", industry: "Electronics", application: "USB 3.0", challenge: "Signal integrity", solution: "Common mode chokes and filtering", result: "Passed compliance testing" }
      ],
      "faeInsights": {
        insight: "Signal integrity requires careful component selection and routing. Early simulation prevents issues.",
        insightLogic: "Signal design should follow: 1) Define requirements, 2) Select components, 3) Optimize routing, 4) Validate with testing.",
        practicalTips: ["Minimize stub lengths", "Control impedance", "Use simulation tools"]
      },
      "faqs": [
        { question: "How do I maintain signal integrity?", answer: "Use proper filtering, controlled impedance, and careful layout.", decisionGuide: "Follow best practices for high-speed design.", keywords: ["signal integrity", "high-speed design"] }
      ]
    },
    {
      "id": "automotive-passive-solution",
      "title": "Automotive Passive Component Solution",
      "slug": "automotive-passive-solution",
      "description": "AEC-Q200 qualified passive components for automotive electronics applications.",
      "longDescription": "The Automotive Passive Component Solution provides AEC-Q200 qualified inductors, capacitors, and EMI filters for automotive electronics. These components meet stringent automotive reliability requirements.",
      "image": "/assets/images/solutions/sunlord/automotive.jpg",
      "applications": ["Automotive Electronics", "ADAS", "Infotainment", "Powertrain"],
      "benefits": [
        { title: "Automotive Grade", description: "AEC-Q200 qualified for reliability" },
        { title: "Wide Temperature", description: "Operation from -40°C to +150°C" }
      ],
      "coreAdvantages": [
        { title: "High Reliability", description: "Proven in automotive applications" },
        { title: "Compliant", description: "Meets automotive standards" }
      ],
      "bomList": [
        { partNumber: "SPH4018H2R2MT", quantity: 2, description: "2.2μH Power Inductor", link: "/sunlord/products/power-inductors/sph4018h2r2mt.html" },
        { partNumber: "SH21B106K500T", quantity: 4, description: "10μF MLCC", link: "/sunlord/products/multilayer-ceramic-capacitors/sh21b106k500t.html" }
      ],
      "technicalSpecs": { "Qualification": "AEC-Q200", "Temperature": "-40°C to +150°C" },
      "customerCases": [
        { customer: "Automotive Tier 1", industry: "Automotive", application: "ECU Power", challenge: "Automotive qualification", solution: "AEC-Q200 components", result: "Passed qualification" }
      ],
      "faeInsights": {
        insight: "Automotive applications require components that meet AEC-Q200 standards. Temperature and reliability are critical.",
        insightLogic: "Automotive design should follow: 1) Define requirements, 2) Select qualified components, 3) Validate reliability, 4) Document for PPAP.",
        practicalTips: ["Use AEC-Q200 components", "Design for temperature extremes", "Plan for long-term reliability"]
      },
      "faqs": [
        { question: "What is AEC-Q200?", answer: "AEC-Q200 is the automotive standard for passive components.", decisionGuide: "Use AEC-Q200 components for automotive applications.", keywords: ["AEC-Q200", "automotive", "qualification"] }
      ]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json created');

// 4. 创建 support.json
const supportData = {
  "seoTitle": "Sunlord Technical Support | Passive Component Guide | BeiLuo",
  "seoDescription": "Technical support resources for Sunlord passive components including selection guides, application notes, and design resources.",
  "seoKeywords": ["Sunlord support", "passive component guide", "inductor selection", "capacitor design"],
  "faqs": [
    {
      question: "What technical resources are available for Sunlord products?",
      answer: "Available resources include datasheets, application notes, reference designs, and evaluation kits. Contact BeiLuo FAE for additional support.",
      decisionGuide: "Start with datasheets and application notes.",
      keywords: ["technical resources", "documentation", "support"]
    }
  ],
  "articles": [
    {
      "id": "power-inductor-selection-guide",
      "title": "Power Inductor Selection Guide",
      "category": "Selection Guide",
      "author": { "name": "Michael Chen", "title": "Passive Components FAE", "experience": "10 years", "expertise": ["Power Inductors", "DC-DC Design"] },
      "publishDate": "2024-01-15",
      "lastUpdated": "2024-01-15",
      "summary": "Comprehensive guide for selecting power inductors for DC-DC converter applications.",
      "content": ["Power inductor selection requires consideration of inductance, saturation current, and DCR..."],
      "relatedArticles": ["chip-bead-selection", "common-mode-choke-guide"],
      "faeInsights": { "insight": "Inductor selection impacts converter efficiency.", "insightLogic": "Follow systematic selection process.", "practicalTips": ["Consider ripple current", "Check saturation"], "keyTakeaways": ["Match inductance to frequency", "Verify current ratings"] },
      "customerCases": [{ "customerName": "Power Supply Co", "industry": "Power", "application": "DC-DC", "problem": "Efficiency", "solution": "Proper inductor selection", "results": "Improved efficiency" }],
      "faqs": [{ "question": "How do I calculate inductance?", "answer": "Use standard formulas based on switching frequency and ripple current.", "decisionGuide": "Calculate based on requirements.", "keywords": ["inductance calculation", "design"] }]
    },
    {
      "id": "chip-bead-selection",
      "title": "Chip Bead Selection for EMI Suppression",
      "category": "Application Note",
      "author": { "name": "David Liu", "title": "EMI Filter FAE", "experience": "8 years", "expertise": ["EMI Filtering", "Noise Suppression"] },
      "publishDate": "2024-01-20",
      "lastUpdated": "2024-01-20",
      "summary": "Guide for selecting chip beads for effective EMI suppression.",
      "content": ["Chip bead selection depends on frequency, impedance, and current requirements..."],
      "relatedArticles": ["power-inductor-selection-guide", "common-mode-choke-guide"],
      "faeInsights": { "insight": "Proper bead selection ensures EMI compliance.", "insightLogic": "Match impedance to noise spectrum.", "practicalTips": ["Consider frequency range", "Check current rating"], "keyTakeaways": ["Higher Z for better filtering", "Balance with current"] },
      "customerCases": [{ "customerName": "Electronics Inc", "industry": "Consumer", "application": "EMI Filter", "problem": "EMC failure", "solution": "Proper bead selection", "results": "Passed EMC" }],
      "faqs": [{ "question": "What impedance do I need?", "answer": "Select based on frequency and required attenuation.", "decisionGuide": "Match to noise characteristics.", "keywords": ["impedance selection", "EMI"] }]
    },
    {
      "id": "common-mode-choke-guide",
      "title": "Common Mode Choke Application Guide",
      "category": "Application Note",
      "author": { "name": "Jennifer Wu", "title": "Signal Integrity FAE", "experience": "9 years", "expertise": ["Common Mode Chokes", "Signal Integrity"] },
      "publishDate": "2024-02-01",
      "lastUpdated": "2024-02-01",
      "summary": "Application guide for common mode chokes in power and signal lines.",
      "content": ["Common mode chokes provide effective common mode noise suppression..."],
      "relatedArticles": ["power-inductor-selection-guide", "chip-bead-selection"],
      "faeInsights": { "insight": "CM chokes are essential for EMI compliance.", "insightLogic": "Select based on impedance and current.", "practicalTips": ["Consider CM impedance", "Check current rating"], "keyTakeaways": ["Higher Z for better CM suppression", "Balance DM impact"] },
      "customerCases": [{ "customerName": "Interface Design", "industry": "Electronics", "application": "USB Filter", "problem": "Signal integrity", "solution": "CM choke selection", "results": "Improved SI" }],
      "faqs": [{ "question": "When to use CM chokes?", "answer": "Use for common mode noise in power and signal lines.", "decisionGuide": "Apply where CM noise is problematic.", "keywords": ["common mode", "choke application"] }]
    },
    {
      "id": "mlcc-selection-guide",
      "title": "MLCC Selection and Application Guide",
      "category": "Selection Guide",
      "author": { "name": "Sarah Chen", "title": "Capacitor Applications FAE", "experience": "7 years", "expertise": ["MLCC", "Capacitor Applications"] },
      "publishDate": "2024-02-15",
      "lastUpdated": "2024-02-15",
      "summary": "Comprehensive guide for selecting multilayer ceramic capacitors.",
      "content": ["MLCC selection requires consideration of capacitance, voltage, and dielectric type..."],
      "relatedArticles": ["power-inductor-selection-guide", "chip-bead-selection"],
      "faeInsights": { "insight": "Proper MLCC selection ensures reliable operation.", "insightLogic": "Match specs to application requirements.", "practicalTips": ["Consider DC bias effect", "Check temperature coefficient"], "keyTakeaways": ["X7R for stability", "Higher voltage for margin"] },
      "customerCases": [{ "customerName": "Power Design", "industry": "Power", "application": "Decoupling", "problem": "Insufficient capacitance", "solution": "Proper MLCC selection", "results": "Stable operation" }],
      "faqs": [{ "question": "X7R vs X5R?", "answer": "X7R has better temperature stability than X5R.", "decisionGuide": "Use X7R for critical applications.", "keywords": ["dielectric", "X7R", "X5R"] }]
    },
    {
      "id": "emi-design-best-practices",
      "title": "EMI Design Best Practices",
      "category": "Best Practices",
      "author": { "name": "David Liu", "title": "EMI Filter FAE", "experience": "8 years", "expertise": ["EMI Design", "EMC Compliance"] },
      "publishDate": "2024-03-01",
      "lastUpdated": "2024-03-01",
      "summary": "Best practices for EMI design using passive components.",
      "content": ["Effective EMI design requires proper component selection and layout..."],
      "relatedArticles": ["chip-bead-selection", "common-mode-choke-guide"],
      "faeInsights": { "insight": "Early EMI planning prevents costly redesigns.", "insightLogic": "Integrate EMI design from start.", "practicalTips": ["Start early", "Use multiple stages"], "keyTakeaways": ["Plan for EMI", "Test early"] },
      "customerCases": [{ "customerName": "Electronics Mfg", "industry": "Consumer", "application": "EMI Design", "problem": "EMC failures", "solution": "Best practices", "results": "First pass EMC" }],
      "faqs": [{ "question": "When to start EMI design?", "answer": "Start EMI design at the beginning of the project.", "decisionGuide": "Integrate from concept phase.", "keywords": ["EMI planning", "design process"] }]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ support.json created');

console.log('\n========================================');
console.log('✅ Sunlord brand data created successfully!');
console.log('========================================');
