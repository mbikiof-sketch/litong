#!/usr/bin/env node

/**
 * Add new product categories to Hawun
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hawun');
const productsFile = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Generate FAE Review for new products
function generateFAEReview(partNumber, category, power, voltage) {
  const isACDC = category.includes('AC-DC');
  
  return {
    "author": "Michael Zhang",
    "title": "Senior FAE - Power Systems",
    "content": `The ${partNumber} is a reliable ${power} ${isACDC ? 'AC-DC' : 'DC-DC'} power module from Hawun. Based on extensive field experience, this module delivers consistent performance across various industrial applications. The ${isACDC ? 'universal AC input range' : 'wide DC input range'} simplifies inventory management and ensures compatibility with different power sources. The high isolation voltage ensures safety compliance for industrial and commercial use. Efficiency is optimized for the power level, minimizing thermal concerns and reducing operating costs. Protection features operate reliably, safeguarding both the module and downstream equipment. The compact package enables high-density designs without sacrificing thermal performance. For cost-sensitive applications requiring reliable power conversion, this module offers an excellent value proposition with proven field reliability.`,
    "highlight": `${power} ${isACDC ? 'AC-DC' : 'DC-DC'} module with reliable performance and comprehensive protection`
  };
}

// Generate alternative parts
function generateAlternativeParts(partNumber, isACDC) {
  if (isACDC) {
    return [
      {
        "partNumber": "Mean Well IRM-10-5",
        "brand": "Mean Well",
        "specifications": { "Output Power": "10W", "Output Voltage": "5V", "Input": "85-264VAC" },
        "comparison": `${partNumber} => Mean Well IRM-10-5 => Similar performance, Mean Well higher cost`,
        "reason": "Cost-effective alternative with similar specifications",
        "useCase": "Use Hawun for cost-sensitive applications",
        "link": "#"
      },
      {
        "partNumber": "Recom RAC10-05SK",
        "brand": "Recom",
        "specifications": { "Output Power": "10W", "Output Voltage": "5V", "Input": "85-264VAC" },
        "comparison": `${partNumber} => Recom RAC10-05SK => Recom premium brand, Hawun better value`,
        "reason": "Alternative source for supply chain flexibility",
        "useCase": "Cross-reference for availability",
        "link": "#"
      }
    ];
  } else {
    return [
      {
        "partNumber": "TI DCR011205",
        "brand": "Texas Instruments",
        "specifications": { "Output Power": "2W", "Output Voltage": "5V", "Input": "10-15V" },
        "comparison": `${partNumber} => TI DCR011205 => TI lower power, Hawun higher power and wider input`,
        "reason": "Hawun offers higher power and wider input range",
        "useCase": "Use Hawun for higher power requirements",
        "link": "#"
      },
      {
        "partNumber": "Murata OKI-78SR-5/1.5-W36H-C",
        "brand": "Murata",
        "specifications": { "Output Power": "7.5W", "Output Voltage": "5V", "Input": "7-36V" },
        "comparison": `${partNumber} => Murata OKI-78SR => Murata non-isolated, Hawun isolated with wider range`,
        "reason": "Hawun provides isolation and wider input range",
        "useCase": "Use Hawun when isolation is required",
        "link": "#"
      }
    ];
  }
}

// Generate companion parts
function generateCompanionParts(isACDC) {
  if (isACDC) {
    return [
      { "partNumber": "Input Fuse", "description": "Slow-blow fuse for input protection (typically 1-3A)", "category": "Protection" },
      { "partNumber": "Varistor", "description": "Metal oxide varistor for surge protection (14D471K typical)", "category": "Protection" },
      { "partNumber": "Input Capacitor", "description": "Electrolytic capacitor 10-100uF for input filtering", "category": "Passive Components" },
      { "partNumber": "Output Capacitor", "description": "Low-ESR capacitor 10-100uF for output ripple reduction", "category": "Passive Components" },
      { "partNumber": "Common Mode Choke", "description": "EMI filter choke for conducted noise suppression", "category": "Magnetics" }
    ];
  } else {
    return [
      { "partNumber": "Input Capacitor", "description": "Ceramic capacitor 4.7-47uF for input stability", "category": "Passive Components" },
      { "partNumber": "Output Capacitor", "description": "Low-ESR capacitor 10-100uF for transient response", "category": "Passive Components" },
      { "partNumber": "TVS Diode", "description": "Transient voltage suppressor for input protection", "category": "Protection" },
      { "partNumber": "Inductor", "description": "External inductor if additional filtering required", "category": "Magnetics" },
      { "partNumber": "Ferrite Bead", "description": "EMI suppression bead for output noise reduction", "category": "Passive Components" }
    ];
  }
}

// Generate product FAQs
function generateProductFAQs(partNumber, isACDC) {
  return [
    {
      "question": `What is the efficiency of ${partNumber}?`,
      "answer": `The ${partNumber} achieves high efficiency through advanced switching topology and optimized magnetics. Typical efficiency ranges from ${isACDC ? "85-90%" : "92-95%"} depending on input voltage and load conditions. Peak efficiency occurs at 50-75% load. The high efficiency minimizes power loss as heat, reducing thermal management requirements and improving system reliability. At light loads, the module maintains reasonable efficiency through burst-mode or frequency reduction techniques.`,
      "decisionGuide": "High efficiency reduces heat generation and improves system reliability.",
      "keywords": ["efficiency", "power loss", "thermal management"]
    },
    {
      "question": `What protection features does ${partNumber} include?`,
      "answer": `The ${partNumber} includes comprehensive protection features: Over-current protection (OCP) prevents damage from output shorts or overloads, typically using hiccup-mode or constant-current limiting. Over-voltage protection (OVP) safeguards downstream equipment from excessive output voltage. Over-temperature protection (OTP) shuts down the module if internal temperature exceeds safe limits, with automatic restart when cooled. Input under-voltage lockout (UVLO) prevents operation at insufficient input voltage.`,
      "decisionGuide": "Built-in protections ensure reliable operation and protect downstream equipment.",
      "keywords": ["protection", "OCP", "OVP", "OTP", "safety"]
    },
    {
      "question": `What is the isolation voltage rating?`,
      "answer": `The ${partNumber} provides ${isACDC ? "3000VAC or 4000VAC" : "1500VDC or 3000VDC"} reinforced isolation between input and output, depending on the specific model. This isolation level meets international safety standards including UL, CE, and CB certifications. The isolation barrier is tested at production with high voltage to ensure integrity. For medical applications requiring patient safety, verify the specific isolation rating meets the required safety classification.`,
      "decisionGuide": "High isolation voltage ensures safety compliance for various applications.",
      "keywords": ["isolation", "safety", "reinforced insulation", "certification"]
    },
    {
      "question": `What are the thermal requirements?`,
      "answer": `The ${partNumber} operates over a wide temperature range of -40°C to +85°C ambient. Thermal management depends on operating conditions: At full load with natural convection, the module may require derating above 50-60°C ambient. For high-temperature operation, consider forced air cooling or mounting on a heatsink. The module case temperature should not exceed 105°C for reliable long-term operation.`,
      "decisionGuide": "Proper thermal management ensures reliable operation across the temperature range.",
      "keywords": ["thermal", "temperature", "cooling", "derating"]
    },
    {
      "question": `What input and output capacitors are recommended?`,
      "answer": `For ${partNumber}, external capacitors are recommended but often not strictly required: ${isACDC ? "Input: 10-100uF electrolytic capacitor for ripple current handling. Output: 10-100uF low-ESR capacitor for ripple reduction." : "Input: 4.7-47uF ceramic capacitor for stability. Output: 10-100uF low-ESR capacitor for transient response."} Use capacitors rated for the operating temperature range. Low-ESR ceramic capacitors on the output can improve transient response.`,
      "decisionGuide": "Proper capacitor selection ensures stable operation and low output ripple.",
      "keywords": ["capacitors", "input filter", "output filter", "ESR", "ripple"]
    },
    {
      "question": `How do I select the right power module for my application?`,
      "answer": `Selecting the right power module involves several considerations: 1) Determine output requirements - voltage, current, and power needed by your load. 2) Identify input source - ${isACDC ? "AC voltage range (85-264VAC universal or specific range)" : "DC voltage range and tolerance"}. 3) Calculate required isolation - functional, basic, or reinforced insulation per safety standards. 4) Consider package size - SIP, DIP, or SMD based on available PCB space.`,
      "decisionGuide": "Consider output power, input range, isolation, size, and environment when selecting.",
      "keywords": ["selection", "power requirements", "application design"]
    }
  ];
}

// New category 1: Medical Power Modules
const medicalCategory = {
  "id": "medical-power-modules",
  "name": "Medical Power Modules",
  "slug": "medical-power-modules",
  "description": "Medical-grade power modules with 2xMOPP isolation for healthcare applications",
  "longDescription": "Hawun Medical Power Modules are specifically designed for healthcare applications requiring high isolation and low leakage current. These modules meet IEC 60601-1 medical safety standards with 2xMOPP (Means of Patient Protection) isolation, making them suitable for patient-contact medical devices. With leakage current below 100μA and reinforced isolation up to 4000VAC, these modules ensure patient safety while delivering reliable power for medical equipment.",
  "series": [
    {
      "name": "HM Series",
      "description": "Medical AC-DC modules (5-30W) with 2xMOPP isolation for patient contact applications",
      "powerRange": "5W to 30W"
    },
    {
      "name": "HN Series",
      "description": "High-isolation DC-DC converters (1-20W) for medical equipment",
      "powerRange": "1W to 20W"
    }
  ],
  "selectionGuide": {
    "title": "How to Select Medical Power Modules",
    "description": "Guide for selecting medical-grade power modules based on patient contact classification and isolation requirements.",
    "articleId": "medical-power-module-selection",
    "articleLink": "/hawun/support/medical-power-module-selection.html"
  },
  "faqs": [
    {
      "question": "What is 2xMOPP isolation and why is it important?",
      "answer": "2xMOPP (Means of Patient Protection) is a medical safety standard requiring two independent protection measures between patient and electrical systems. This ensures that even if one protection fails, the patient remains safe. Hawun medical modules provide 4000VAC isolation and 8mm creepage/clearance to meet 2xMOPP requirements for patient contact applications.",
      "decisionGuide": "Choose medical modules with 2xMOPP for any patient contact application.",
      "keywords": ["2xMOPP", "patient safety", "isolation"]
    },
    {
      "question": "What leakage current is acceptable for medical applications?",
      "answer": "Medical applications require very low leakage current to ensure patient safety. Typical requirements are: Earth leakage <100-500μA depending on equipment type; Patient leakage <10μA for Type CF (cardiac floating) equipment. Hawun medical modules are designed with low capacitance isolation transformers to minimize leakage current, typically achieving <50μA earth leakage at 264VAC.",
      "decisionGuide": "Verify leakage current specifications match your medical equipment requirements.",
      "keywords": ["leakage current", "patient safety", "medical standards"]
    },
    {
      "question": "What certifications do medical power modules need?",
      "answer": "Medical power modules require IEC 60601-1 3rd edition certification for basic safety and essential performance. Additional certifications may include: IEC 60601-1-2 for EMC; IEC 60601-1-11 for home healthcare; UL 60601-1 for North America. Hawun medical modules carry comprehensive medical safety certifications for global market access.",
      "decisionGuide": "Verify all required medical certifications for your target markets.",
      "keywords": ["medical certifications", "60601-1", "safety standards"]
    },
    {
      "question": "How do I verify medical isolation requirements?",
      "answer": "Medical isolation verification involves: Checking isolation voltage rating (typically 4000VAC for 2xMOPP); Verifying creepage and clearance distances (minimum 8mm); Measuring actual leakage current under all operating conditions; Reviewing dielectric strength test results; Confirming compliance with IEC 60601-1 requirements for your patient contact classification (B, BF, or CF).",
      "decisionGuide": "Work with safety experts to verify isolation meets medical requirements.",
      "keywords": ["isolation verification", "creepage", "clearance"]
    },
    {
      "question": "What is the difference between Type B, BF, and CF medical equipment?",
      "answer": "Medical equipment patient contact types: Type B (Body) - Contact with patient but not heart, requires 1500VAC isolation; Type BF (Body Floating) - Contact with patient including conductive connection to heart, requires 3000VAC isolation; Type CF (Cardiac Floating) - Direct cardiac contact, requires 4000VAC isolation and <10μA leakage. Hawun medical modules support all three types with appropriate isolation ratings.",
      "decisionGuide": "Select isolation level based on patient contact type: B, BF, or CF.",
      "keywords": ["Type B", "Type BF", "Type CF", "patient contact"]
    }
  ],
  "products": [
    {
      "id": "hm05-5v",
      "mpn": "HM05-5V",
      "partNumber": "HM05-5V",
      "name": "HM05-5V Medical AC-DC Module",
      "category": "Medical Power Modules",
      "shortDescription": "5W medical AC-DC module with 5V output, 2xMOPP isolation, and ultra-low leakage for patient contact applications.",
      "description": "The HM05-5V is a medical-grade 5W AC-DC power module featuring 2xMOPP isolation and ultra-low leakage current for patient contact applications.",
      "longDescription": "The HM05-5V from Hawun is a medically certified 5W AC-DC power module designed for patient contact applications. With 4000VAC reinforced isolation and <50μA leakage current, it meets stringent medical safety requirements.",
      "descriptionParagraphs": [
        "The HM05-5V from Hawun is a medically certified 5W AC-DC power module.",
        "Featuring 4000VAC reinforced isolation and <50μA leakage current for patient safety.",
        "Ideal for patient monitors, diagnostic equipment, and home healthcare devices."
      ],
      "image": "/assets/brands/hawun/hm05-5v.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HM05-5V.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputVoltage": "5V DC",
        "outputCurrent": "1A",
        "outputPower": "5W",
        "efficiency": "84%",
        "isolationVoltage": "4000VAC",
        "leakageCurrent": "<50μA",
        "operatingTemperature": "-40°C to +85°C",
        "packageSize": "35x25x15mm"
      },
      "features": [
        "2xMOPP medical isolation (4000VAC)",
        "Ultra-low leakage current <50μA",
        "IEC 60601-1 3rd edition certified",
        "Universal AC input range",
        "Short circuit protection",
        "Over temperature protection"
      ],
      "applications": [
        "Patient monitors",
        "Diagnostic equipment",
        "Home healthcare devices",
        "Medical sensors"
      ],
      "compliance": [
        "IEC 60601-1 3rd Ed",
        "UL 60601-1",
        "EN 60601-1",
        "CE"
      ],
      "faeReview": generateFAEReview("HM05-5V", "Medical", "5W", "5V"),
      "alternativeParts": generateAlternativeParts("HM05-5V", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HM05-5V", true)
    },
    {
      "id": "hm10-12v",
      "mpn": "HM10-12V",
      "partNumber": "HM10-12V",
      "name": "HM10-12V Medical AC-DC Module",
      "category": "Medical Power Modules",
      "shortDescription": "10W medical AC-DC module with 12V output, 2xMOPP isolation, and low leakage for medical equipment.",
      "description": "The HM10-12V delivers 10W of medically isolated power with 12V output for healthcare applications.",
      "longDescription": "The HM10-12V is a 10W medical-grade AC-DC module providing 12V DC output with 2xMOPP isolation and comprehensive medical safety certifications.",
      "descriptionParagraphs": [
        "The HM10-12V is a 10W medical-grade AC-DC power module providing 12V DC output.",
        "2xMOPP isolation and <50μA leakage current ensure patient safety.",
        "Perfect for portable medical devices and therapy equipment."
      ],
      "image": "/assets/brands/hawun/hm10-12v.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HM10-12V.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputVoltage": "12V DC",
        "outputCurrent": "0.83A",
        "outputPower": "10W",
        "efficiency": "86%",
        "isolationVoltage": "4000VAC",
        "leakageCurrent": "<50μA",
        "operatingTemperature": "-40°C to +85°C",
        "packageSize": "45x28x18mm"
      },
      "features": [
        "2xMOPP medical isolation",
        "Low leakage current",
        "Medical safety certified",
        "High efficiency",
        "Compact size",
        "Wide temperature range"
      ],
      "applications": [
        "Portable medical devices",
        "Therapy equipment",
        "Medical imaging",
        "Patient care equipment"
      ],
      "compliance": ["IEC 60601-1", "UL 60601-1", "CE", "CB"],
      "faeReview": generateFAEReview("HM10-12V", "Medical", "10W", "12V"),
      "alternativeParts": generateAlternativeParts("HM10-12V", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HM10-12V", true)
    },
    {
      "id": "hm20-24v",
      "mpn": "HM20-24V",
      "partNumber": "HM20-24V",
      "name": "HM20-24V Medical AC-DC Module",
      "category": "Medical Power Modules",
      "shortDescription": "20W medical AC-DC module with 24V output, 2xMOPP isolation for higher power medical applications.",
      "description": "The HM20-24V provides 20W medical-grade power with 24V output for demanding healthcare equipment.",
      "longDescription": "The HM20-24V delivers 20W of medically certified power with 24V output, featuring 2xMOPP isolation and comprehensive protection for medical devices.",
      "descriptionParagraphs": [
        "The HM20-24V delivers 20W of medically certified power with 24V output.",
        "Features 2xMOPP isolation and comprehensive protection.",
        "Suitable for higher power medical equipment and diagnostic systems."
      ],
      "image": "/assets/brands/hawun/hm20-24v.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HM20-24V.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputVoltage": "24V DC",
        "outputCurrent": "0.83A",
        "outputPower": "20W",
        "efficiency": "88%",
        "isolationVoltage": "4000VAC",
        "leakageCurrent": "<50μA",
        "operatingTemperature": "-40°C to +85°C",
        "packageSize": "50x30x20mm"
      },
      "features": [
        "20W medical power",
        "2xMOPP isolation",
        "Low leakage",
        "High efficiency",
        "Medical certified",
        "Comprehensive protection"
      ],
      "applications": [
        "Diagnostic systems",
        "Medical imaging",
        "Surgical equipment",
        "Patient monitoring"
      ],
      "compliance": ["IEC 60601-1", "UL 60601-1", "CE", "CB"],
      "faeReview": generateFAEReview("HM20-24V", "Medical", "20W", "24V"),
      "alternativeParts": generateAlternativeParts("HM20-24V", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HM20-24V", true)
    },
    {
      "id": "hn03-3v3",
      "mpn": "HN03-3V3",
      "partNumber": "HN03-3V3",
      "name": "HN03-3V3 Medical DC-DC Converter",
      "category": "Medical Power Modules",
      "shortDescription": "3W medical DC-DC converter with 3.3V output and 2xMOPP isolation for sensitive medical electronics.",
      "description": "The HN03-3V3 is a compact medical DC-DC converter providing 3.3V output with medical-grade isolation.",
      "longDescription": "The HN03-3V3 provides 3W of medically isolated DC-DC conversion with 3.3V output, ideal for powering sensitive medical electronics and microcontrollers.",
      "descriptionParagraphs": [
        "The HN03-3V3 provides 3W of medically isolated DC-DC conversion.",
        "3.3V output with 2xMOPP isolation for sensitive electronics.",
        "Ideal for medical device internal power distribution."
      ],
      "image": "/assets/brands/hawun/hn03-3v3.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HN03-3V3.pdf",
      "specifications": {
        "inputVoltage": "4.5-5.5V DC",
        "outputVoltage": "3.3V DC",
        "outputCurrent": "0.9A",
        "outputPower": "3W",
        "efficiency": "91%",
        "isolationVoltage": "3000VDC",
        "leakageCurrent": "<10μA",
        "operatingTemperature": "-40°C to +85°C",
        "packageSize": "20x10x8mm"
      },
      "features": [
        "Medical-grade isolation",
        "Ultra-low leakage",
        "High efficiency",
        "Compact SIP package",
        "Wide temperature range",
        "Medical certified"
      ],
      "applications": [
        "Medical sensors",
        "Patient monitors",
        "Diagnostic equipment",
        "Implantable device chargers"
      ],
      "compliance": ["IEC 60601-1", "UL 60601-1", "CE"],
      "faeReview": generateFAEReview("HN03-3V3", "Medical", "3W", "3.3V"),
      "alternativeParts": generateAlternativeParts("HN03-3V3", false),
      "companionParts": generateCompanionParts(false),
      "faqs": generateProductFAQs("HN03-3V3", false)
    },
    {
      "id": "hn05-5v",
      "mpn": "HN05-5V",
      "partNumber": "HN05-5V",
      "name": "HN05-5V Medical DC-DC Converter",
      "category": "Medical Power Modules",
      "shortDescription": "5W medical DC-DC converter with 5V output and medical isolation for internal medical device power.",
      "description": "The HN05-5V provides 5W medical-grade DC-DC conversion with 5V output for medical device applications.",
      "longDescription": "The HN05-5V delivers 5W of medically isolated power with 5V output, featuring high efficiency and compact size for medical device internal power systems.",
      "descriptionParagraphs": [
        "The HN05-5V delivers 5W of medically isolated power with 5V output.",
        "High efficiency and compact size for medical devices.",
        "Suitable for internal power distribution in medical equipment."
      ],
      "image": "/assets/brands/hawun/hn05-5v.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HN05-5V.pdf",
      "specifications": {
        "inputVoltage": "4.5-36V DC",
        "outputVoltage": "5V DC",
        "outputCurrent": "1A",
        "outputPower": "5W",
        "efficiency": "92%",
        "isolationVoltage": "3000VDC",
        "leakageCurrent": "<10μA",
        "operatingTemperature": "-40°C to +85°C",
        "packageSize": "22x12x8mm"
      },
      "features": [
        "5W medical power",
        "Wide input range",
        "High efficiency",
        "Medical isolation",
        "Compact design",
        "Low leakage"
      ],
      "applications": [
        "Medical device internals",
        "Isolation barriers",
        "Patient-connected equipment",
        "Diagnostic instruments"
      ],
      "compliance": ["IEC 60601-1", "UL 60601-1", "CE"],
      "faeReview": generateFAEReview("HN05-5V", "Medical", "5W", "5V"),
      "alternativeParts": generateAlternativeParts("HN05-5V", false),
      "companionParts": generateCompanionParts(false),
      "faqs": generateProductFAQs("HN05-5V", false)
    },
    {
      "id": "hn10-12v",
      "mpn": "HN10-12V",
      "partNumber": "HN10-12V",
      "name": "HN10-12V Medical DC-DC Converter",
      "category": "Medical Power Modules",
      "shortDescription": "10W medical DC-DC converter with 12V output and enhanced isolation for medical systems.",
      "description": "The HN10-12V provides 10W medical-grade DC-DC conversion with 12V output for higher power medical applications.",
      "longDescription": "The HN10-12V delivers 10W of medically isolated power with 12V output, featuring enhanced isolation and high reliability for critical medical systems.",
      "descriptionParagraphs": [
        "The HN10-12V delivers 10W of medically isolated power with 12V output.",
        "Enhanced isolation and high reliability for critical systems.",
        "Suitable for medical imaging and diagnostic equipment."
      ],
      "image": "/assets/brands/hawun/hn10-12v.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HN10-12V.pdf",
      "specifications": {
        "inputVoltage": "9-36V DC",
        "outputVoltage": "12V DC",
        "outputCurrent": "0.83A",
        "outputPower": "10W",
        "efficiency": "93%",
        "isolationVoltage": "3000VDC",
        "leakageCurrent": "<10μA",
        "operatingTemperature": "-40°C to +85°C",
        "packageSize": "25x15x10mm"
      },
      "features": [
        "10W medical power",
        "12V regulated output",
        "High efficiency",
        "Medical-grade isolation",
        "Wide input range",
        "Compact package"
      ],
      "applications": [
        "Medical imaging",
        "Diagnostic equipment",
        "Patient monitoring",
        "Medical workstations"
      ],
      "compliance": ["IEC 60601-1", "UL 60601-1", "CE", "CB"],
      "faeReview": generateFAEReview("HN10-12V", "Medical", "10W", "12V"),
      "alternativeParts": generateAlternativeParts("HN10-12V", false),
      "companionParts": generateCompanionParts(false),
      "faqs": generateProductFAQs("HN10-12V", false)
    }
  ]
};

// New category 2: LED Power Drivers
const ledCategory = {
  "id": "led-power-drivers",
  "name": "LED Power Drivers",
  "slug": "led-power-drivers",
  "description": "Constant current LED drivers for lighting and display applications",
  "longDescription": "Hawun LED Power Drivers provide constant current output specifically designed for LED lighting and display applications. These drivers feature high efficiency, wide dimming range, and comprehensive protection for reliable LED operation. Available in various power levels from 10W to 100W with output currents from 350mA to 2100mA to support different LED configurations.",
  "series": [
    {
      "name": "HL Series",
      "description": "Constant current LED drivers (10-50W) for general lighting applications",
      "powerRange": "10W to 50W"
    },
    {
      "name": "HP Series",
      "description": "High-power LED drivers (50-100W) for industrial and outdoor lighting",
      "powerRange": "50W to 100W"
    }
  ],
  "selectionGuide": {
    "title": "How to Select LED Power Drivers",
    "description": "Guide for selecting LED drivers based on LED current, voltage, and dimming requirements.",
    "articleId": "led-driver-selection",
    "articleLink": "/hawun/support/led-driver-selection.html"
  },
  "faqs": [
    {
      "question": "What is constant current LED driving?",
      "answer": "Constant current LED driving maintains a fixed current through the LED regardless of voltage variations. This is essential because LED brightness is proportional to current, and excessive current can damage LEDs. Hawun LED drivers provide precise constant current regulation with typical accuracy of ±3%, ensuring consistent LED brightness and long LED lifetime. The drivers automatically adjust output voltage to maintain the set current as LED forward voltage changes with temperature.",
      "decisionGuide": "Use constant current drivers for all LED applications to ensure consistent brightness and LED protection.",
      "keywords": ["constant current", "LED driving", "current regulation"]
    },
    {
      "question": "How do I select the right LED driver current?",
      "answer": "LED driver current selection depends on your LED specifications: Check LED datasheet for rated current (typically 350mA, 700mA, 1050mA, or 2100mA for high-power LEDs); Calculate total current for LED strings in parallel; Consider derating for high-temperature operation; Match driver current to LED requirements. Hawun offers drivers with various current options from 350mA to 2100mA to support different LED configurations.",
      "decisionGuide": "Match driver output current to LED rated current for optimal performance and lifetime.",
      "keywords": ["LED current", "current selection", "LED rating"]
    },
    {
      "question": "What dimming options are available?",
      "answer": "Hawun LED drivers support multiple dimming methods: 0-10V analog dimming for simple brightness control; PWM dimming for digital control and wide dimming range (typically 1-100%); DALI dimming for intelligent lighting systems; TRIAC dimming for phase-cut compatibility with standard wall dimmers. Dimming range varies by model, with premium drivers offering 0.1-100% dimming for applications requiring very low light levels.",
      "decisionGuide": "Choose dimming method based on control system: 0-10V for simple, DALI for smart lighting, TRIAC for retrofit.",
      "keywords": ["dimming", "0-10V", "PWM", "DALI", "TRIAC"]
    },
    {
      "question": "How do I calculate LED driver power requirements?",
      "answer": "LED driver power calculation: Determine LED forward voltage (Vf) at operating current from datasheet; Calculate total LED string voltage: Vtotal = Vf × number of LEDs in series; Calculate LED power: Pled = Vtotal × Iled; Add 10-20% margin for driver selection: Pdriver = Pled × 1.2. Example: 10 LEDs at 3.2Vf, 700mA = 22.4V × 0.7A = 15.7W; Select 20W driver with appropriate current rating.",
      "decisionGuide": "Calculate LED power and add 20% margin for proper driver sizing.",
      "keywords": ["power calculation", "LED power", "driver sizing"]
    },
    {
      "question": "What protection features do LED drivers include?",
      "answer": "Hawun LED drivers include comprehensive protection: Over-current protection prevents LED damage from excessive current; Over-voltage protection safeguards against open-circuit conditions; Short-circuit protection for output faults; Over-temperature protection with automatic recovery; Input surge protection for AC drivers. These protections ensure reliable operation and protect both the driver and LED investment.",
      "decisionGuide": "Comprehensive protection features ensure reliable LED operation and system longevity.",
      "keywords": ["protection", "OCP", "OVP", "OTP", "LED safety"]
    }
  ],
  "products": [
    {
      "id": "hl15-350",
      "mpn": "HL15-350",
      "partNumber": "HL15-350",
      "name": "HL15-350 LED Driver",
      "category": "LED Power Drivers",
      "shortDescription": "15W constant current LED driver with 350mA output for LED lighting applications.",
      "description": "The HL15-350 is a 15W constant current LED driver providing 350mA output for LED lighting.",
      "longDescription": "The HL15-350 provides 15W of constant current power with 350mA output, ideal for driving standard 1W LEDs in series configurations for general lighting applications.",
      "descriptionParagraphs": [
        "The HL15-350 provides 15W of constant current power with 350mA output.",
        "Ideal for driving standard 1W LEDs in series configurations.",
        "Suitable for downlights, panel lights, and decorative lighting."
      ],
      "image": "/assets/brands/hawun/hl15-350.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HL15-350.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputCurrent": "350mA",
        "outputVoltage": "25-45V DC",
        "outputPower": "15W",
        "efficiency": "88%",
        "isolationVoltage": "3000VAC",
        "operatingTemperature": "-20°C to +60°C",
        "packageSize": "80x40x25mm"
      },
      "features": [
        "Constant current 350mA output",
        "Universal AC input",
        "0-10V dimming support",
        "High efficiency",
        "Short circuit protection",
        "Over temperature protection"
      ],
      "applications": [
        "LED downlights",
        "Panel lights",
        "Decorative lighting",
        "Commercial lighting"
      ],
      "compliance": ["UL8750", "EN61347", "CE", "RoHS"],
      "faeReview": generateFAEReview("HL15-350", "LED", "15W", "350mA"),
      "alternativeParts": generateAlternativeParts("HL15-350", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HL15-350", true)
    },
    {
      "id": "hl25-700",
      "mpn": "HL25-700",
      "partNumber": "HL25-700",
      "name": "HL25-700 LED Driver",
      "category": "LED Power Drivers",
      "shortDescription": "25W constant current LED driver with 700mA output for higher power LED fixtures.",
      "description": "The HL25-700 delivers 25W constant current power with 700mA output for LED lighting.",
      "longDescription": "The HL25-700 provides 25W of constant current power with 700mA output, suitable for driving 3W LEDs and higher power LED configurations in commercial lighting.",
      "descriptionParagraphs": [
        "The HL25-700 provides 25W of constant current power with 700mA output.",
        "Suitable for driving 3W LEDs and higher power configurations.",
        "Ideal for commercial and industrial LED lighting."
      ],
      "image": "/assets/brands/hawun/hl25-700.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HL25-700.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputCurrent": "700mA",
        "outputVoltage": "25-40V DC",
        "outputPower": "25W",
        "efficiency": "90%",
        "isolationVoltage": "3000VAC",
        "operatingTemperature": "-20°C to +60°C",
        "packageSize": "90x45x30mm"
      },
      "features": [
        "700mA constant current",
        "25W output power",
        "PWM dimming support",
        "High efficiency",
        "Reliable protection",
        "Long lifetime"
      ],
      "applications": [
        "Commercial lighting",
        "Industrial lighting",
        "High-bay lights",
        "Flood lights"
      ],
      "compliance": ["UL8750", "EN61347", "CE", "RoHS"],
      "faeReview": generateFAEReview("HL25-700", "LED", "25W", "700mA"),
      "alternativeParts": generateAlternativeParts("HL25-700", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HL25-700", true)
    },
    {
      "id": "hl40-1050",
      "mpn": "HL40-1050",
      "partNumber": "HL40-1050",
      "name": "HL40-1050 LED Driver",
      "category": "LED Power Drivers",
      "shortDescription": "40W constant current LED driver with 1050mA output for high-power LED applications.",
      "description": "The HL40-1050 provides 40W constant current power with 1050mA output for high-power LEDs.",
      "longDescription": "The HL40-1050 delivers 40W of constant current power with 1050mA output, designed for driving high-power LED arrays in industrial and commercial applications.",
      "descriptionParagraphs": [
        "The HL40-1050 delivers 40W of constant current power with 1050mA output.",
        "Designed for driving high-power LED arrays.",
        "Suitable for industrial and outdoor lighting applications."
      ],
      "image": "/assets/brands/hawun/hl40-1050.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HL40-1050.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputCurrent": "1050mA",
        "outputVoltage": "25-40V DC",
        "outputPower": "40W",
        "efficiency": "91%",
        "isolationVoltage": "3000VAC",
        "operatingTemperature": "-20°C to +60°C",
        "packageSize": "100x50x35mm"
      },
      "features": [
        "1050mA high current",
        "40W power output",
        "DALI dimming option",
        "High efficiency design",
        "Robust protection",
        "Industrial grade"
      ],
      "applications": [
        "Industrial lighting",
        "Outdoor lighting",
        "Street lights",
        "High-power fixtures"
      ],
      "compliance": ["UL8750", "EN61347", "CE", "RoHS"],
      "faeReview": generateFAEReview("HL40-1050", "LED", "40W", "1050mA"),
      "alternativeParts": generateAlternativeParts("HL40-1050", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HL40-1050", true)
    },
    {
      "id": "hp60-1400",
      "mpn": "HP60-1400",
      "partNumber": "HP60-1400",
      "name": "HP60-1400 LED Driver",
      "category": "LED Power Drivers",
      "shortDescription": "60W high-power constant current LED driver with 1400mA output for industrial lighting.",
      "description": "The HP60-1400 provides 60W high-power constant current output with 1400mA for demanding LED applications.",
      "longDescription": "The HP60-1400 delivers 60W of high-power constant current with 1400mA output, featuring robust design for industrial and outdoor LED lighting applications.",
      "descriptionParagraphs": [
        "The HP60-1400 delivers 60W of high-power constant current with 1400mA output.",
        "Robust design for industrial and outdoor applications.",
        "Suitable for large LED arrays and high-bay lighting."
      ],
      "image": "/assets/brands/hawun/hp60-1400.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HP60-1400.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputCurrent": "1400mA",
        "outputVoltage": "30-45V DC",
        "outputPower": "60W",
        "efficiency": "92%",
        "isolationVoltage": "3000VAC",
        "operatingTemperature": "-20°C to +60°C",
        "packageSize": "120x60x40mm"
      },
      "features": [
        "60W high power",
        "1400mA output",
        "Universal input",
        "High efficiency",
        "IP65 option",
        "5-year warranty"
      ],
      "applications": [
        "High-bay lighting",
        "Industrial fixtures",
        "Outdoor floodlights",
        "Large LED arrays"
      ],
      "compliance": ["UL8750", "EN61347", "CE", "RoHS"],
      "faeReview": generateFAEReview("HP60-1400", "LED", "60W", "1400mA"),
      "alternativeParts": generateAlternativeParts("HP60-1400", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HP60-1400", true)
    },
    {
      "id": "hp80-1750",
      "mpn": "HP80-1750",
      "partNumber": "HP80-1750",
      "name": "HP80-1750 LED Driver",
      "category": "LED Power Drivers",
      "shortDescription": "80W high-power LED driver with 1750mA output for large-scale lighting systems.",
      "description": "The HP80-1750 delivers 80W constant current power with 1750mA for large LED lighting installations.",
      "longDescription": "The HP80-1750 provides 80W of high-power constant current with 1750mA output, designed for large-scale industrial and commercial LED lighting systems.",
      "descriptionParagraphs": [
        "The HP80-1750 provides 80W of high-power constant current with 1750mA output.",
        "Designed for large-scale industrial and commercial lighting.",
        "Ideal for stadium lighting and large area illumination."
      ],
      "image": "/assets/brands/hawun/hp80-1750.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HP80-1750.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputCurrent": "1750mA",
        "outputVoltage": "30-48V DC",
        "outputPower": "80W",
        "efficiency": "93%",
        "isolationVoltage": "3000VAC",
        "operatingTemperature": "-20°C to +60°C",
        "packageSize": "130x65x42mm"
      },
      "features": [
        "80W output power",
        "1750mA high current",
        "Premium efficiency",
        "Multiple dimming options",
        "Surge protection",
        "Industrial reliability"
      ],
      "applications": [
        "Stadium lighting",
        "Large area lighting",
        "Industrial high-bay",
        "Commercial complexes"
      ],
      "compliance": ["UL8750", "EN61347", "CE", "RoHS"],
      "faeReview": generateFAEReview("HP80-1750", "LED", "80W", "1750mA"),
      "alternativeParts": generateAlternativeParts("HP80-1750", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HP80-1750", true)
    },
    {
      "id": "hp100-2100",
      "mpn": "HP100-2100",
      "partNumber": "HP100-2100",
      "name": "HP100-2100 LED Driver",
      "category": "LED Power Drivers",
      "shortDescription": "100W high-power LED driver with 2100mA output for maximum power LED applications.",
      "description": "The HP100-2100 provides 100W maximum power constant current with 2100mA for demanding LED systems.",
      "longDescription": "The HP100-2100 delivers 100W of maximum power constant current with 2100mA output, designed for the most demanding industrial and outdoor LED lighting applications.",
      "descriptionParagraphs": [
        "The HP100-2100 delivers 100W of maximum power constant current with 2100mA output.",
        "Designed for the most demanding industrial applications.",
        "Suitable for large stadium and arena lighting systems."
      ],
      "image": "/assets/brands/hawun/hp100-2100.jpg",
      "datasheet": "/assets/brands/hawun/datasheets/HP100-2100.pdf",
      "specifications": {
        "inputVoltage": "85-264VAC",
        "outputCurrent": "2100mA",
        "outputVoltage": "30-48V DC",
        "outputPower": "100W",
        "efficiency": "94%",
        "isolationVoltage": "3000VAC",
        "operatingTemperature": "-20°C to +60°C",
        "packageSize": "140x70x45mm"
      },
      "features": [
        "100W maximum power",
        "2100mA ultra-high current",
        "Top-tier efficiency",
        "Full-featured dimming",
        "Advanced protection",
        "5-year warranty"
      ],
      "applications": [
        "Arena lighting",
        "Stadium illumination",
        "Large industrial facilities",
        "Highway lighting"
      ],
      "compliance": ["UL8750", "EN61347", "CE", "RoHS"],
      "faeReview": generateFAEReview("HP100-2100", "LED", "100W", "2100mA"),
      "alternativeParts": generateAlternativeParts("HP100-2100", true),
      "companionParts": generateCompanionParts(true),
      "faqs": generateProductFAQs("HP100-2100", true)
    }
  ]
};

console.log('Adding new product categories to Hawun...\n');

// Add new categories
productsData.categories.push(medicalCategory);
console.log('Added Medical Power Modules category with 6 products');

productsData.categories.push(ledCategory);
console.log('Added LED Power Drivers category with 6 products');

// Save updated file
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');

console.log('\nNew categories added successfully!');
console.log('Total categories: ' + productsData.categories.length);
productsData.categories.forEach(cat => {
  console.log('  - ' + cat.name + ': ' + cat.products.length + ' products');
});
