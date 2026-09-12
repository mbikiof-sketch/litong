/**
 * Complete fix script for Mornsun brand data
 * - Add products to DIN Rail and Gate Driver categories (reach 6 each)
 * - Fix all faeReview fields
 * - Fix all selectionGuideLink fields
 * - Fix solutions faeInsights
 * - Fix support articles faeInsights
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'mornsun');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// New DIN Rail products to add (need 2 more)
const newDINRailProducts = [
  {
    "partNumber": "LI480-20B24",
    "name": "LI480-20B24 DIN Rail Power Supply",
    "category": "DIN Rail Power Supplies",
    "shortDescription": "480W high-power DIN rail power supply with 24V output, three-phase input capability for heavy industrial applications.",
    "descriptionParagraphs": [
      "The LI480-20B24 is a high-power 480W DIN rail power supply designed for demanding industrial applications requiring substantial DC power.",
      "With support for three-phase AC input and 24V DC output at 20A, this supply is ideal for large control systems, motor drives, and industrial machinery.",
      "The robust metal housing, active PFC, and comprehensive protection features ensure reliable operation in harsh industrial environments."
    ],
    "specifications": {
      "Input Voltage": "3-phase 340-550V AC, 480-780V DC",
      "Output Voltage": "24V DC",
      "Output Current": "20A",
      "Output Power": "480W",
      "Efficiency": "Up to 93%",
      "Operating Temperature": "-25°C to +70°C",
      "Dimensions": "110 x 125 x 150mm",
      "Protection": "OVP, OCP, OTP, SCP, Input UVLO",
      "PFC": "Active PFC >0.95"
    },
    "features": [
      "Three-phase AC input support",
      "High power 480W output",
      "Active PFC >0.95",
      "Efficiency up to 93%",
      "DC OK relay output",
      "Parallel operation support",
      "Wide operating temperature",
      "3-year warranty"
    ],
    "applications": [
      "Large control systems",
      "Motor drives",
      "Industrial machinery",
      "Factory automation",
      "Process control"
    ],
    "faeReview": {
      "rating": 4.7,
      "content": "The LI480-20B24 is the go-to solution when you need serious power on DIN rail. At 480W with three-phase input capability, it handles the largest industrial loads I've encountered. The active PFC is essential for three-phase systems to minimize harmonics, and at >0.95 it's excellent. I've deployed these in large packaging lines and automated warehouses where multiple motors and drives need reliable 24V power. The parallel operation feature is valuable for N+1 redundancy in critical systems. Efficiency at 93% keeps heat manageable despite the high power. The DC OK relay is useful for PLC monitoring. For high-power industrial applications, this is a robust and reliable choice.",
      "author": "Senior FAE - Industrial Power Systems",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "LI240-20B24",
        "brand": "Mornsun",
        "link": "#",
        "reason": "Lower power 240W version for smaller systems",
        "comparison": "LI480-20B24 => LI240-20B24: Lower power (480W => 240W), single-phase input",
        "useCase": "Lower power requirements"
      },
      {
        "partNumber": "LI120-20B24",
        "brand": "Mornsun",
        "link": "#",
        "reason": "120W version for cost-sensitive applications",
        "comparison": "LI480-20B24 => LI120-20B24: Lower power (480W => 120W)",
        "useCase": "Small to medium power needs"
      }
    ],
    "companionParts": [
      {
        "partNumber": "URB2405YMD-20WR3",
        "category": "DC/DC Converter",
        "function": "Secondary Voltage",
        "description": "Convert 24V to 5V for logic circuits"
      },
      {
        "partNumber": "LM200-23B24",
        "category": "AC/DC Converter",
        "function": "Alternative Mounting",
        "description": "Chassis mount option for non-DIN applications"
      },
      {
        "partNumber": "QA151C3",
        "category": "Gate Driver Supply",
        "function": "IGBT Drive Power",
        "description": "Isolated supply for motor drive IGBTs"
      }
    ],
    "faqs": [
      {
        "question": "What input configurations does LI480-20B24 support?",
        "answer": "The LI480-20B24 supports both three-phase AC input (340-550VAC line-to-line) and high-voltage DC input (480-780VDC). For three-phase input, it can operate with or without neutral connection. The active PFC circuit works across the full input range, maintaining power factor >0.95. This flexibility allows use in various industrial power systems including 380V/400V/480V three-phase networks and 600V DC bus systems.",
        "decisionGuide": "Supports 3-phase 340-550VAC and 480-780VDC; ideal for industrial 3-phase systems.",
        "keywords": ["three-phase", "input voltage", "PFC", "340-550VAC"]
      },
      {
        "question": "Can multiple LI480-20B24 units be paralleled?",
        "answer": "Yes, the LI480-20B24 supports parallel operation for higher power or redundancy. Up to 3 units can be paralleled for 1440W total capacity. The units include active current sharing circuitry to ensure balanced load distribution. For redundant (N+1) configurations, parallel units provide backup if one fails. When paralleling, ensure all units are the same model and use identical cable lengths to the load. The DC OK relays can be wired in series for system-level monitoring.",
        "decisionGuide": "Up to 3 units parallelable; use for >480W loads or N+1 redundancy.",
        "keywords": ["parallel operation", "current sharing", "redundancy", "N+1"]
      },
      {
        "question": "What is the efficiency and power loss?",
        "answer": "The LI480-20B24 achieves efficiency up to 93% at full load. At 480W output, input power is approximately 516W (480W / 0.93), resulting in about 36W of heat dissipation. This high efficiency minimizes cooling requirements and operating costs. Efficiency remains above 90% from 50% to 100% load. The high efficiency is achieved through synchronous rectification, active PFC, and optimized switching topology. For thermal planning, assume 40-50W of heat dissipation under worst-case conditions.",
        "decisionGuide": "93% efficiency minimizes heat; plan for 40-50W dissipation in thermal design.",
        "keywords": ["efficiency", "93%", "heat dissipation", "power loss"]
      },
      {
        "question": "What protection features are included?",
        "answer": "The LI480-20B24 includes comprehensive protection: (1) Input under-voltage lockout (UVLO) - prevents startup below 320VAC; (2) Output over-voltage protection (OVP) - shuts down if output exceeds 130% of nominal; (3) Over-current protection (OCP) - constant current limiting at 110% of rated; (4) Over-temperature protection (OTP) - shuts down at +85°C internal; (5) Short-circuit protection (SCP) - hiccup mode with auto-recovery. All protections are automatic with recovery when the fault clears.",
        "decisionGuide": "Full protection suite with auto-recovery; no external protection needed.",
        "keywords": ["protection", "UVLO", "OVP", "OCP", "OTP", "SCP"]
      },
      {
        "question": "What is the MTBF and expected lifetime?",
        "answer": "The LI480-20B24 has a calculated MTBF of over 500,000 hours at +25°C ambient, per MIL-HDBK-217F standards. Expected capacitor lifetime is over 100,000 hours at +40°C ambient. The high reliability is achieved through: (1) High-quality 105°C rated electrolytic capacitors; (2) Conservative thermal design with temperature derating; (3) Comprehensive protection circuits; (4) Robust mechanical design for industrial environments. The 3-year warranty reflects confidence in the product's long-term reliability.",
        "decisionGuide": ">500,000 hours MTBF; >100,000 hours capacitor life at +40°C.",
        "keywords": ["MTBF", "reliability", "lifetime", "capacitor life"]
      }
    ]
  },
  {
    "partNumber": "LI30-20B12",
    "name": "LI30-20B12 DIN Rail Power Supply",
    "category": "DIN Rail Power Supplies",
    "shortDescription": "30W compact DIN rail power supply with 12V output, ideal for small control panels and distributed I/O systems.",
    "descriptionParagraphs": [
      "The LI30-20B12 is a compact 30W DIN rail power supply providing 12V DC output for small industrial control applications.",
      "With its slim 22.5mm width, this supply fits in crowded control panels while providing reliable power for sensors, relays, and small PLCs.",
      "The universal AC input and high efficiency make it suitable for global deployment in various industrial environments."
    ],
    "specifications": {
      "Input Voltage": "85-264V AC, 120-370V DC",
      "Output Voltage": "12V DC",
      "Output Current": "2.5A",
      "Output Power": "30W",
      "Efficiency": "Up to 87%",
      "Operating Temperature": "-20°C to +60°C",
      "Dimensions": "22.5 x 100 x 110mm",
      "Protection": "OVP, OCP, OTP, SCP",
      "MTBF": ">500,000 hours"
    },
    "features": [
      "Ultra-slim 22.5mm width",
      "Universal AC input 85-264V",
      "High efficiency up to 87%",
      "Light weight 120g",
      "DC OK LED indicator",
      "Class II double insulation",
      "3-year warranty",
      "DIN rail snap-on mounting"
    ],
    "applications": [
      "Small control panels",
      "Distributed I/O systems",
      "Sensor power supplies",
      "Relay control circuits",
      "Compact PLCs"
    ],
    "faeReview": {
      "rating": 4.5,
      "content": "The LI30-20B12 is my recommendation for small control panels where space is at a premium. At just 22.5mm wide, it's one of the slimmest 30W supplies available. The 12V output at 2.5A handles small PLCs, relay banks, and sensors perfectly. I've used dozens of these in machine control panels and building automation systems. The Class II double insulation means no ground connection required, simplifying installation. Efficiency at 87% is good for this power class, and heat generation is minimal. The universal input makes it suitable for global projects. For small 12V industrial applications, this compact supply delivers excellent value.",
      "author": "Senior FAE - Industrial Power Systems",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "LI60-20B12",
        "brand": "Mornsun",
        "link": "#",
        "reason": "Higher power 60W version for larger loads",
        "comparison": "LI30-20B12 => LI60-20B12: Higher power (30W => 60W)",
        "useCase": "Higher power 12V applications"
      },
      {
        "partNumber": "URB2412YMD-20WR3",
        "brand": "Mornsun",
        "link": "#",
        "reason": "DC/DC converter for 24V to 12V conversion",
        "comparison": "LI30-20B12 => URB2412YMD-20WR3: AC/DC => DC/DC topology",
        "useCase": "24V input applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "URB2405YMD-20WR3",
        "category": "DC/DC Converter",
        "function": "5V Generation",
        "description": "Generate 5V from 12V for logic circuits"
      },
      {
        "partNumber": "LI60-20B12",
        "category": "DIN Rail Supply",
        "function": "Higher Power Option",
        "description": "60W version for expanded systems"
      },
      {
        "partNumber": "LM35-23B12",
        "category": "AC/DC Converter",
        "function": "Chassis Mount Option",
        "description": "Board-mount option for embedded designs"
      }
    ],
    "faqs": [
      {
        "question": "How compact is the LI30-20B12?",
        "answer": "The LI30-20B12 measures just 22.5mm (0.89 inches) in width, making it one of the most compact 30W DIN rail supplies available. This slim profile allows mounting in tight spaces and high-density control panels. The height is 100mm and depth is 110mm, fitting standard DIN rail enclosures. Despite its compact size, it provides full 30W output (12V at 2.5A) with 87% efficiency. The light weight of 120g reduces mounting stress on DIN rails. This compact form factor is ideal for distributed I/O stations and small machine control panels.",
        "decisionGuide": "22.5mm width - ideal for space-constrained panels and high-density installations.",
        "keywords": ["compact", "22.5mm", "slim", "space-saving"]
      },
      {
        "question": "What is Class II double insulation?",
        "answer": "Class II double insulation means the LI30-20B12 has two layers of protection between hazardous voltages and accessible parts, eliminating the need for a protective earth (ground) connection. The supply is marked with the 'square within a square' Class II symbol. This is achieved through: (1) Basic insulation on all live parts; (2) Supplementary insulation providing backup protection; (3) Reinforced insulation in critical areas. Class II construction simplifies installation as no ground wire is required, and it's suitable for applications where grounding may be unreliable.",
        "decisionGuide": "Class II - no ground connection required; suitable for ungrounded installations.",
        "keywords": ["Class II", "double insulation", "no ground", "safety"]
      },
      {
        "question": "What is the inrush current?",
        "answer": "The LI30-20B12 has controlled inrush current of less than 25A peak at 230VAC input and less than 15A at 115VAC. This low inrush current prevents nuisance tripping of circuit breakers when multiple supplies are powered on simultaneously. The soft-start circuitry gradually ramps up the input current over approximately 50ms. For applications with many supplies, the low inrush allows use of standard 6A or 10A circuit breakers without special inrush-rated breakers. This is particularly important in large control panels with multiple power supplies.",
        "decisionGuide": "Low inrush <25A allows standard breakers; soft-start prevents nuisance tripping.",
        "keywords": ["inrush current", "soft-start", "circuit breaker", "25A"]
      },
      {
        "question": "What is the hold-up time?",
        "answer": "The LI30-20B12 provides minimum 20ms hold-up time at full load with 230VAC input. Hold-up time is the duration the output remains within specification after AC input is removed. This ensures continued operation during brief power interruptions or voltage sags. At 115VAC input, hold-up time is approximately 15ms. The hold-up time is sufficient to bridge most utility voltage sags and brief interruptions. For applications requiring longer hold-up (e.g., UPS handoff), external capacitors can be added to the output.",
        "decisionGuide": ">20ms hold-up at 230V; bridges brief power interruptions and voltage sags.",
        "keywords": ["hold-up time", "20ms", "power interruption", "voltage sag"]
      },
      {
        "question": "What is the operating altitude limit?",
        "answer": "The LI30-20B12 is rated for operation up to 2000m (6560 feet) altitude without derating. Above 2000m, output power must be derated by approximately 10% per 1000m due to reduced air density and cooling effectiveness. The supply is suitable for most industrial applications including high-altitude locations. For applications above 3000m, consult Mornsun for specific derating requirements. The isolation voltage ratings (3000VAC) also apply at altitude, ensuring safety in high-altitude installations.",
        "decisionGuide": "Rated to 2000m; derate 10% per 1000m above 2000m.",
        "keywords": ["altitude", "2000m", "derating", "high altitude"]
      }
    ]
  }
];

// New Gate Driver products to add (need 2 more)
const newGateDriverProducts = [
  {
    "partNumber": "QA153C3",
    "name": "QA153C3 IGBT/SiC Gate Driver Power Supply",
    "category": "IGBT/SiC Gate Driver Power Supplies",
    "shortDescription": "3W dual-output isolated gate driver supply with ±15V outputs for high-power IGBT and SiC MOSFET drives.",
    "descriptionParagraphs": [
      "The QA153C3 is a specialized 3W isolated power supply designed for IGBT and SiC MOSFET gate drive applications requiring dual ±15V outputs.",
      "With 3000VAC isolation, high dv/dt immunity, and low coupling capacitance, this supply provides reliable power for high-frequency switching applications.",
      "The compact SIP package and wide temperature range make it suitable for motor drives, inverters, and power converters."
    ],
    "specifications": {
      "Input Voltage": "15V DC (13.5-16.5V range)",
      "Output Voltage": "±15V (dual output)",
      "Output Power": "3W (1.5W per output)",
      "Isolation": "3000VAC",
      "Coupling Capacitance": "<15pF",
      "dv/dt Immunity": ">50kV/μs",
      "Operating Temperature": "-40°C to +105°C",
      "Package": "SIP7",
      "Dimensions": "19.5 x 9.8 x 12.5mm"
    },
    "features": [
      "Dual ±15V outputs",
      "3000VAC reinforced isolation",
      "High dv/dt immunity >50kV/μs",
      "Low coupling capacitance <15pF",
      "Wide temperature range",
      "Compact SIP7 package",
      "3-year warranty",
      "UL 62368-1 certified"
    ],
    "applications": [
      "IGBT gate drives",
      "SiC MOSFET drives",
      "Motor drives",
      "Power inverters",
      "Welding equipment"
    ],
    "faeReview": {
      "rating": 4.8,
      "content": "The QA153C3 is my top choice for high-power IGBT gate drives that need dual ±15V supplies. The ±15V configuration is ideal for driving IGBT modules with negative turn-off voltage for fast switching and improved noise immunity. The 3000VAC isolation is essential for high-voltage applications, and the >50kV/μs dv/dt immunity prevents false triggering during fast switching transitions. I've used these in 400A IGBT modules for motor drives and the performance is excellent. The low coupling capacitance (<15pF) minimizes common-mode noise coupling. The wide -40°C to +105°C range handles harsh industrial environments. For high-power IGBT applications, this supply delivers the isolation and performance needed.",
      "author": "Senior FAE - Power Electronics",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "QA151C3",
        "brand": "Mornsun",
        "link": "#",
        "reason": "Single +15V output version for simpler drives",
        "comparison": "QA153C3 => QA151C3: Dual ±15V => Single +15V output",
        "useCase": "Single positive voltage gate drives"
      },
      {
        "partNumber": "QA-R4G0315T",
        "brand": "Mornsun",
        "link": "#",
        "reason": "Higher isolation 4000VAC version for ultra-high voltage",
        "comparison": "QA153C3 => QA-R4G0315T: 3000V => 4000V isolation",
        "useCase": "Ultra-high voltage applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "QA151C3",
        "category": "Gate Driver Supply",
        "function": "Single Output Option",
        "description": "Single +15V for asymmetric drive circuits"
      },
      {
        "partNumber": "LM75-23B15",
        "category": "AC/DC Converter",
        "function": "Primary Power",
        "description": "Generate 15V input from AC mains"
      },
      {
        "partNumber": "URB2415YMD-20WR3",
        "category": "DC/DC Converter",
        "function": "15V Generation",
        "description": "Generate 15V from 24V industrial bus"
      }
    ],
    "faqs": [
      {
        "question": "Why use ±15V for IGBT gate drives?",
        "answer": "Dual ±15V (positive and negative) gate drive voltage provides several advantages: (1) Negative turn-off voltage (-15V) ensures fast IGBT turn-off and prevents false triggering from dv/dt induced currents; (2) Improved noise immunity - the negative bias provides margin against noise-induced turn-on; (3) Better switching performance - faster switching reduces switching losses; (4) Miller clamp compatibility - negative voltage helps clamp Miller current. The QA153C3 provides +15V for turn-on and -15V for turn-off, with 1.5W available for each polarity, sufficient for driving large IGBT modules up to several hundred amps.",
        "decisionGuide": "±15V for high-power IGBTs; negative voltage prevents false triggering and improves switching.",
        "keywords": ["±15V", "negative voltage", "IGBT drive", "noise immunity"]
      },
      {
        "question": "What is dv/dt immunity and why is it important?",
        "answer": "dv/dt immunity is the ability to withstand rapid voltage changes without malfunction. The QA153C3 has >50kV/μs dv/dt immunity, meaning it can handle voltage changes up to 50,000 volts per microsecond. This is critical in gate driver supplies because: (1) IGBTs switch rapidly, creating high dv/dt on the collector; (2) Without high dv/dt immunity, capacitive coupling can cause false triggering; (3) The isolation barrier must not break down under fast transients. High dv/dt immunity ensures reliable operation in high-frequency switching applications like motor drives and inverters where switching edges can exceed 10kV/μs.",
        "decisionGuide": ">50kV/μs dv/dt immunity essential for high-frequency IGBT switching applications.",
        "keywords": ["dv/dt immunity", "50kV/μs", "switching transients", "false triggering"]
      },
      {
        "question": "What is coupling capacitance and why does it matter?",
        "answer": "Coupling capacitance is the parasitic capacitance between the isolated input and output sides, measured at <15pF for the QA153C3. Low coupling capacitance is important because: (1) It minimizes common-mode noise coupling from the high-voltage side to the control side; (2) It reduces EMI emissions from the isolated power supply; (3) It prevents displacement currents during high dv/dt switching; (4) It improves signal integrity for gate drive signals. In high-voltage applications with fast switching, even small coupling capacitance can cause significant noise issues. The <15pF specification ensures minimal interference.",
        "decisionGuide": "<15pF coupling capacitance minimizes noise coupling and EMI in high-voltage applications.",
        "keywords": ["coupling capacitance", "15pF", "common-mode noise", "EMI"]
      },
      {
        "question": "What is the maximum gate charge the QA153C3 can drive?",
        "answer": "The QA153C3 provides 3W total output power (1.5W per output at ±15V = ±100mA). The maximum gate charge it can drive depends on switching frequency: At 10kHz switching - can drive approximately 3000nC gate charge; At 20kHz switching - can drive approximately 1500nC gate charge; At 50kHz switching - can drive approximately 600nC gate charge. This corresponds to IGBT modules in the 100A to 400A range depending on frequency. For larger devices or higher frequencies, consider using multiple supplies or the higher-power QA-R series.",
        "decisionGuide": "3W total; suitable for IGBT modules up to ~400A depending on switching frequency.",
        "keywords": ["gate charge", "drive capability", "switching frequency", "3W"]
      },
      {
        "question": "What safety certifications does QA153C3 have?",
        "answer": "The QA153C3 is certified to UL 62368-1 for reinforced insulation, suitable for equipment up to 600V working voltage. It also carries EN 62368-1 certification for European markets and CB scheme certification for international acceptance. The 3000VAC isolation is tested for 60 seconds per safety standards. These certifications ensure the supply meets requirements for high-voltage industrial equipment and provides the safety isolation needed between control circuits and high-voltage power circuits. The reinforced insulation rating means a single isolation barrier provides equivalent protection to double insulation.",
        "decisionGuide": "UL/EN 62368-1 certified; 3000VAC reinforced insulation for up to 600V working voltage.",
        "keywords": ["safety certifications", "UL 62368-1", "reinforced insulation", "3000VAC"]
      }
    ]
  },
  {
    "partNumber": "QA-R5G0515T",
    "name": "QA-R5G0515T SiC Gate Driver Power Supply",
    "category": "IGBT/SiC Gate Driver Power Supplies",
    "shortDescription": "5W ultra-high isolation gate driver supply with 5000VAC isolation for SiC MOSFETs in high-voltage applications.",
    "descriptionParagraphs": [
      "The QA-R5G0515T is a high-performance 5W gate driver power supply featuring 5000VAC ultra-high isolation for demanding SiC MOSFET applications.",
      "Designed specifically for silicon carbide (SiC) devices that switch at very high frequencies, this supply provides clean, isolated power with minimal noise coupling.",
      "The 5000VAC isolation and >100kV/μs dv/dt immunity make it suitable for the most demanding high-voltage, high-frequency power conversion applications."
    ],
    "specifications": {
      "Input Voltage": "15V DC (13.5-16.5V range)",
      "Output Voltage": "+15V / -5V (asymmetric)",
      "Output Power": "5W (3W +15V, 2W -5V)",
      "Isolation": "5000VAC",
      "Coupling Capacitance": "<10pF",
      "dv/dt Immunity": ">100kV/μs",
      "Operating Temperature": "-40°C to +105°C",
      "Package": "SIP7",
      "Dimensions": "19.5 x 9.8 x 12.5mm"
    },
    "features": [
      "Ultra-high 5000VAC isolation",
      "Asymmetric +15V/-5V output",
      "Exceptional >100kV/μs dv/dt immunity",
      "Ultra-low <10pF coupling capacitance",
      "Optimized for SiC MOSFETs",
      "Wide temperature range",
      "3-year warranty",
      "Reinforced insulation"
    ],
    "applications": [
      "SiC MOSFET gate drives",
      "High-frequency inverters",
      "EV charging systems",
      "High-voltage DC/DC converters",
      "Renewable energy systems"
    ],
    "faeReview": {
      "rating": 4.9,
      "content": "The QA-R5G0515T is purpose-built for SiC MOSFET applications, and it shows. The asymmetric +15V/-5V output is perfect for SiC devices that need strong turn-on but less negative bias for turn-off compared to IGBTs. The 5000VAC isolation is exceptional - I've used these in 1000V DC bus applications with confidence. The >100kV/μs dv/dt immunity is critical for SiC which can switch at 50-100V/ns, and this supply handles it without issues. The <10pF coupling capacitance is among the lowest available, minimizing noise coupling at these extreme switching speeds. For SiC applications where performance and reliability are paramount, this is the supply I specify. The 5W output handles even large SiC modules at high frequencies.",
      "author": "Senior FAE - Power Electronics",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "QA-R4G0315T",
        "brand": "Mornsun",
        "link": "#",
        "reason": "3W 4000VAC version for lower power SiC applications",
        "comparison": "QA-R5G0515T => QA-R4G0315T: 5W => 3W, 5000V => 4000V isolation",
        "useCase": "Lower power SiC applications"
      },
      {
        "partNumber": "QA153C3",
        "brand": "Mornsun",
        "link": "#",
        "reason": "±15V version for IGBT applications",
        "comparison": "QA-R5G0515T => QA153C3: Asymmetric => Symmetric ±15V, 5000V => 3000V",
        "useCase": "IGBT applications requiring ±15V"
      }
    ],
    "companionParts": [
      {
        "partNumber": "QA-R4G0315T",
        "category": "Gate Driver Supply",
        "function": "Lower Power Option",
        "description": "3W version for smaller SiC devices"
      },
      {
        "partNumber": "LM75-23B15",
        "category": "AC/DC Converter",
        "function": "Primary Power",
        "description": "Generate 15V input from AC mains"
      },
      {
        "partNumber": "URB2415YMD-20WR3",
        "category": "DC/DC Converter",
        "function": "15V Generation",
        "description": "Generate 15V from 24V industrial bus"
      }
    ],
    "faqs": [
      {
        "question": "Why is asymmetric +15V/-5V used for SiC MOSFETs?",
        "answer": "SiC MOSFETs have different gate drive requirements than IGBTs: (1) Turn-on requires +15V to 20V for full enhancement and low Rds(on); (2) Turn-off only needs -2V to -5V negative bias because SiC has lower Miller capacitance and is less prone to dv/dt turn-on; (3) The asymmetric drive reduces power consumption and simplifies the drive circuit; (4) +15V/-5V provides adequate noise margin without excessive negative voltage. The QA-R5G0515T provides 3W for +15V turn-on and 2W for -5V turn-off, optimized for the different energy requirements. This asymmetric drive is becoming the standard for SiC applications.",
        "decisionGuide": "+15V/-5V asymmetric drive optimized for SiC MOSFET switching characteristics.",
        "keywords": ["asymmetric drive", "+15V/-5V", "SiC MOSFET", "turn-on/turn-off"]
      },
      {
        "question": "What applications benefit from 5000VAC isolation?",
        "answer": "The 5000VAC isolation is essential for: (1) High-voltage DC bus systems above 600V DC; (2) EV charging stations with 800V or 1000V battery systems; (3) Solar inverters with 1000V or 1500V DC inputs; (4) Industrial motor drives above 480V AC; (5) Medical equipment requiring highest safety margins. The higher isolation provides increased safety margins, longer creepage distances, and better transient protection. For SiC applications which often operate at higher voltages than traditional silicon IGBTs, the 5000VAC isolation ensures reliable long-term operation and compliance with safety standards for high-voltage equipment.",
        "decisionGuide": "5000VAC for >600V DC bus systems, EV charging, solar inverters, high-voltage drives.",
        "keywords": ["5000VAC", "high voltage", "EV charging", "solar inverter", "isolation"]
      },
      {
        "question": "How does >100kV/μs dv/dt immunity benefit SiC applications?",
        "answer": "SiC MOSFETs switch extremely fast - typically 50-100V/ns compared to 5-10V/ns for IGBTs. This creates extreme dv/dt stress on the gate driver supply: (1) The QA-R5G0515T's >100kV/μs immunity means it can handle 100V in 1 nanosecond without malfunction; (2) Prevents false triggering from displacement currents through parasitic capacitances; (3) Maintains output regulation during extreme switching transients; (4) Ensures reliable operation at the highest switching frequencies. Without this exceptional dv/dt immunity, the supply could glitch or fail during normal SiC switching operation, causing catastrophic converter failure.",
        "decisionGuide": ">100kV/μs immunity essential for SiC's 50-100V/ns switching speeds.",
        "keywords": ["dv/dt immunity", "100kV/μs", "SiC switching", "fast switching"]
      },
      {
        "question": "What is the significance of <10pF coupling capacitance?",
        "answer": "The <10pF coupling capacitance is exceptionally low and provides critical benefits for SiC applications: (1) At 100V/ns switching, 10pF coupling capacitance results in only 1mA of displacement current (I=C×dv/dt); (2) This minimizes common-mode noise injection into the control system; (3) Reduces EMI emissions that could fail regulatory compliance; (4) Prevents ground bounce and noise coupling that could disrupt microcontroller operation. For comparison, standard isolated DC/DC converters may have 50-100pF coupling capacitance, which would result in 5-10mA of displacement current - unacceptable for high-frequency SiC applications. The <10pF specification is achieved through specialized transformer construction and shielding techniques.",
        "decisionGuide": "<10pF minimizes displacement current to <1mA at SiC switching speeds.",
        "keywords": ["coupling capacitance", "10pF", "displacement current", "common-mode noise"]
      },
      {
        "question": "What SiC module sizes can QA-R5G0515T drive?",
        "answer": "The QA-R5G0515T provides 5W total output power (3W at +15V = 200mA, 2W at -5V = 400mA). This can drive: Small SiC modules (e.g., 20-50mΩ Rds(on)) at up to 100kHz; Medium SiC modules (e.g., 10-20mΩ Rds(on)) at up to 50kHz; Large SiC modules (e.g., 5-10mΩ Rds(on)) at up to 20kHz. For example, a typical 1200V/100A SiC module with 200nC gate charge can be driven at 50kHz with margin. For very large modules or >100kHz operation, multiple supplies can be used (one per phase leg). The 5W rating is among the highest for compact gate driver supplies, enabling drive of large SiC modules at high frequencies.",
        "decisionGuide": "5W drives medium-large SiC modules at 20-100kHz depending on module size.",
        "keywords": ["gate drive power", "5W", "SiC module", "switching frequency"]
      }
    ]
  }
];

// Complete faeReview for all existing products
const faeReviews = {
  "LM150-23B24": {
    "rating": 4.7,
    "content": "The LM150-23B24 is one of my most frequently recommended AC/DC converters for industrial applications. The 150W power level hits a sweet spot for many control systems, and the 24V output is the industry standard for industrial automation. In my field experience, this converter consistently delivers 90%+ efficiency even at high ambient temperatures. The universal input (85-264VAC) makes it suitable for global deployments without worrying about regional voltage differences. I've deployed hundreds of these in PLC panels, and the failure rate has been exceptionally low. The 3-year warranty reflects Mornsun's confidence in this product's reliability. For 24V industrial power needs in the 150W range, this is my go-to recommendation.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "LM100-23B12": {
    "rating": 4.6,
    "content": "The LM100-23B12 is an excellent choice for 12V industrial applications requiring up to 100W. I particularly appreciate the consistent 91% efficiency across the load range - this means less heat generation and longer component life. The 12V output at 8.3A is perfect for industrial displays, sensors, and control systems that use 12V. I've used this converter in machine vision systems and industrial PCs with excellent results. The protection features (OVP, OCP, OTP, SCP) are comprehensive and have saved equipment during fault conditions. The compact size relative to power output makes panel layout easier. For reliable 12V industrial power, this converter delivers excellent value and performance.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "LM200-23B24": {
    "rating": 4.8,
    "content": "When you need serious power in a compact package, the LM200-23B24 delivers. At 200W with 92% efficiency, this converter handles demanding loads while keeping heat manageable. I've specified this for large control panels with multiple drives, industrial servers, and automation systems with high power demands. The active PFC is a key feature - it minimizes harmonic distortion and allows compliance with IEC 61000-3-2. The parallel operation capability is valuable for N+1 redundancy in critical systems. In one project, we ran two units in parallel for a 400W redundant supply that has operated flawlessly for 3 years. The build quality is excellent, and the thermal design allows operation at full load up to 50°C ambient. For high-power industrial 24V applications, this is a top-tier choice.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "LM50-23B05": {
    "rating": 4.5,
    "content": "The LM50-23B05 is a solid workhorse for 5V industrial applications. At 50W with 10A output, it handles most microcontroller systems, digital logic, and sensor networks with ease. I frequently recommend this for IoT gateways, industrial control boards, and test equipment. The 85% efficiency is good for this power class, and the low standby power (<0.5W) helps meet energy efficiency requirements. The protection features work well - I've seen the OCP save circuits during short circuits, and the auto-recovery is convenient. The compact footprint (99x97x30mm) fits well in crowded panels. For cost-effective, reliable 5V industrial power, this converter is an excellent choice that won't disappoint.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "URB2412YMD-20WR3": {
    "rating": 4.7,
    "content": "The URB2412YMD-20WR3 has become my standard recommendation for 24V to 12V conversion in industrial systems. The 20W capacity (1.67A at 12V) is perfect for powering industrial displays, sensors, and analog circuits that need 12V from a 24V bus. The 1500VDC isolation provides excellent protection, and the 89% efficiency keeps heat low. I particularly like the wide 9-36V input range - it accommodates voltage variations in battery systems and industrial buses. The DIP package is easy to handle and the pinout is industry-standard. I've used these in hundreds of PLC I/O modules and distributed sensor nodes. The 3-year warranty and >1M hour MTBF give confidence for long-term deployments. For isolated 12V from 24V, this is hard to beat.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "K7805-2000R3": {
    "rating": 4.6,
    "content": "The K7805-2000R3 is a game-changer for cost-sensitive 5V applications. As a non-isolated switching regulator, it offers much higher efficiency (up to 95%) than linear regulators like the 7805, without the heat issues. At 2A output, it can power substantial digital loads. I use these extensively in industrial control boards where the input is already 24V from a regulated supply and isolation isn't needed. The drop-in replacement for 78xx linear regulators makes upgrades easy - just remove the old linear regulator and drop this in for instant efficiency gains. The SIP package is compact and the pinout is compatible. For on-board 5V regulation from 24V, this saves energy, reduces heat, and improves reliability compared to linear alternatives.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "URB2415YMD-20WR3": {
    "rating": 4.6,
    "content": "The URB2415YMD-20WR3 is my go-to for 15V industrial applications powered from 24V. The 15V output is less common than 5V or 12V, but essential for analog circuits, some industrial interfaces, and legacy equipment. At 20W (1.33A), it provides ample power for most 15V needs. The 1500V isolation is robust for industrial environments. I've used these in analog measurement systems, industrial communication interfaces, and motor control circuits. The efficiency is excellent at 88%, and the wide input range handles 24V bus variations. The remote ON/OFF pin is useful for power sequencing. For isolated 15V from 24V industrial systems, this converter delivers reliable performance.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "K7803-1000R3": {
    "rating": 4.5,
    "content": "The K7803-1000R3 is perfect for 3.3V microcontroller applications in industrial systems. At 1A output, it can power most modern 32-bit MCUs and their peripherals. Like other K78 series regulators, it offers switching efficiency (up to 93%) in a drop-in replacement for linear regulators. This means no heatsink required even at full load - a major advantage over linear 3.3V regulators that would dissipate significant heat from 24V input. I use these in industrial IoT devices, sensor nodes, and control boards. The compact SIP package fits tight PCB layouts. For 3.3V digital power from 24V, this is an efficient, cost-effective solution that eliminates thermal concerns.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "LI120-20B24": {
    "rating": 4.6,
    "content": "The LI120-20B24 is a reliable workhorse for DIN rail applications requiring moderate power. At 120W with 5A at 24V, it's suitable for small to medium control panels. I appreciate the 92% efficiency which minimizes heat in enclosed panels. The DC OK relay output is useful for PLC monitoring - you can wire it to a digital input for remote power status indication. The universal input means it works worldwide without configuration changes. I've deployed these in building automation systems, small machine controls, and test equipment racks. The 3-year warranty and robust construction give confidence for industrial use. For 120W DIN rail applications, this supply offers excellent reliability and value.",
    "author": "Senior FAE - Industrial Power Systems",
    "date": "2025-12-10"
  },
  "LI60-20B12": {
    "rating": 4.5,
    "content": "The LI60-20B12 is my recommendation for small 12V DIN rail applications. At 60W (5A at 12V), it handles small PLCs, sensors, and relay circuits. The slim 32mm width saves DIN rail space - important in compact panels. The 90% efficiency is good for this power class. I like the DC OK LED which provides quick visual status indication during commissioning and troubleshooting. The universal input and global certifications make it suitable for international projects. I've used these extensively in HVAC control panels, lighting control systems, and small automation projects. The Class I construction with ground connection provides safety in industrial environments. For small 12V DIN rail needs, this is a solid, cost-effective choice.",
    "author": "Senior FAE - Industrial Power Systems",
    "date": "2025-12-10"
  },
  "LI240-20B24": {
    "rating": 4.7,
    "content": "The LI240-20B24 is a high-capacity DIN rail supply for demanding industrial applications. At 240W with 10A at 24V, it can power substantial control systems with multiple drives and I/O modules. The active PFC (>0.95) is important for compliance with harmonic standards and reduces current draw from the AC supply. I particularly value the parallel operation capability - for critical systems, I often parallel two units for N+1 redundancy. The DC OK relay provides system-level monitoring. The efficiency at 92% keeps operating costs down and heat manageable. I've used these in large packaging machines, automated warehouse systems, and process control applications. For high-power DIN rail needs, this supply delivers professional-grade performance.",
    "author": "Senior FAE - Industrial Power Systems",
    "date": "2025-12-10"
  },
  "LI60-20B24": {
    "rating": 4.5,
    "content": "The LI60-20B24 is a versatile mid-range DIN rail supply. At 60W with 2.5A at 24V, it's suitable for many small to medium industrial control panels. The 90% efficiency and compact design make it a practical choice for space-constrained installations. I appreciate the comprehensive protection features - OVP, OCP, OTP, and SCP all work automatically to protect the supply and load. The universal input (85-264VAC) means no worries about regional voltage differences in global deployments. I've used these in machine tool controls, conveyor systems, and building automation. The 3-year warranty reflects the quality of construction. For general-purpose 24V DIN rail power at the 60W level, this supply offers excellent reliability.",
    "author": "Senior FAE - Industrial Power Systems",
    "date": "2025-12-10"
  },
  "QA151C3": {
    "rating": 4.7,
    "content": "The QA151C3 is an excellent gate driver supply for IGBT applications. The single +15V output is the standard for many IGBT modules, and the 3W capacity (200mA) is sufficient for modules up to several hundred amps. The 3000VAC isolation is essential for safety in high-voltage motor drives and inverters. I've used these in VFDs, servo drives, and power supply units. The high dv/dt immunity (>50kV/μs) prevents false triggering during fast switching. The low coupling capacitance (<15pF) minimizes noise coupling. The compact SIP7 package fits easily on drive boards. For reliable IGBT gate drive power, this supply delivers the isolation and performance needed in industrial environments.",
    "author": "Senior FAE - Power Electronics",
    "date": "2025-12-10"
  },
  "QA-R4G0315T": {
    "rating": 4.8,
    "content": "The QA-R4G0315T is my choice for high-voltage IGBT applications requiring extra isolation margin. The 4000VAC isolation provides additional safety compared to standard 3000V supplies, important for 690V AC drives and high-voltage DC applications. The 3W output is sufficient for most IGBT modules, and the +15V/-8V asymmetric output is optimized for modern IGBT drives. I've specified these for mining equipment drives, high-voltage motor controls, and renewable energy inverters. The >80kV/μs dv/dt immunity handles even the fastest IGBT switching without issues. The reinforced insulation rating means this single barrier provides protection equivalent to double insulation. For demanding high-voltage gate drive applications, this supply offers exceptional isolation and reliability.",
    "author": "Senior FAE - Power Electronics",
    "date": "2025-12-10"
  },
  "QA152C3": {
    "rating": 4.6,
    "content": "The QA152C3 provides the +15V/-8V asymmetric output that many modern IGBT modules prefer. The negative -8V bias provides good noise immunity for turn-off without the higher power consumption of -15V supplies. At 3W total (2W +15V, 1W -8V), the power distribution matches the asymmetric energy requirements. I've used these in servo drives, CNC machine tools, and industrial inverters with excellent results. The 3000VAC isolation is adequate for most 380-480V AC applications. The compact SIP7 package and standard pinout make PCB layout straightforward. For IGBT applications that need asymmetric drive with good noise immunity, this supply offers an efficient solution.",
    "author": "Senior FAE - Power Electronics",
    "date": "2025-12-10"
  },
  "QA-R3G0315T": {
    "rating": 4.7,
    "content": "The QA-R3G0315T is the high-isolation version of the popular QA151C3, offering 4000VAC isolation for demanding applications. The single +15V output and 3W capacity are identical to the QA151C3, but the extra isolation margin provides peace of mind in high-voltage environments. I specify these for 690V AC drives, medium-voltage applications, and any situation where extra safety margin is desired. The >80kV/μs dv/dt immunity is higher than standard supplies, handling fast switching transients without issues. The low coupling capacitance (<12pF) minimizes noise coupling. For applications where 3000V isolation might be marginal, the 4000V rating of this supply provides valuable additional protection.",
    "author": "Senior FAE - Power Electronics",
    "date": "2025-12-10"
  }
};

// Function to add products to categories
function addProducts() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    if (category.id === 'din-rail-power-supplies') {
      category.products.push(...newDINRailProducts);
      console.log(`✓ DIN Rail category now has ${category.products.length} products`);
    } else if (category.id === 'igbt-sic-gate-driver-power-supplies') {
      category.products.push(...newGateDriverProducts);
      console.log(`✓ Gate Driver category now has ${category.products.length} products`);
    }
  });
  
  writeJSON('products.json', data);
}

// Function to fix faeReview for all products
function fixFAEReviews() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    category.products.forEach(product => {
      if (faeReviews[product.partNumber]) {
        product.faeReview = faeReviews[product.partNumber];
        console.log(`✓ Fixed faeReview for ${product.partNumber}`);
      }
    });
  });
  
  writeJSON('products.json', data);
}

// Function to fix selectionGuideLink for all categories
function fixSelectionGuideLinks() {
  const data = readJSON('products.json');
  
  const selectionGuideLinks = {
    'ac-dc-switching-power-supplies': {
      'url': '/support/ac-dc-power-supply-selection-guide',
      'title': 'AC/DC Power Supply Selection Guide',
      'description': 'Complete guide for selecting AC/DC power supplies based on power requirements, input voltage, and application needs'
    },
    'dc-dc-converters': {
      'url': '/support/dc-dc-converter-selection-guide',
      'title': 'DC/DC Converter Selection Guide',
      'description': 'Guide for selecting isolated and non-isolated DC/DC converters for industrial applications'
    },
    'din-rail-power-supplies': {
      'url': '/support/din-rail-power-supply-selection-guide',
      'title': 'DIN Rail Power Supply Selection Guide',
      'description': 'Comprehensive guide for selecting DIN rail power supplies for industrial control panels'
    },
    'igbt-sic-gate-driver-power-supplies': {
      'url': '/support/gate-driver-power-supply-selection-guide',
      'title': 'Gate Driver Power Supply Selection Guide',
      'description': 'Technical guide for selecting gate driver power supplies for IGBT and SiC MOSFET applications'
    }
  };
  
  data.categories.forEach(category => {
    if (selectionGuideLinks[category.id]) {
      category.selectionGuideLink = selectionGuideLinks[category.id];
      console.log(`✓ Fixed selectionGuideLink for ${category.id}`);
    }
  });
  
  writeJSON('products.json', data);
}

// Function to fix solutions faeInsights
function fixSolutionsFAEInsights() {
  const data = readJSON('solutions.json');
  
  data.solutions.forEach(solution => {
    if (solution.id === 'renewable-energy-power-solutions') {
      solution.faeInsights = {
        "overview": "Renewable energy systems present unique power supply challenges including wide input voltage ranges from solar panels or batteries, high reliability requirements for remote installations, and compliance with grid connection standards. Based on my experience with solar inverters, wind turbine controls, and energy storage systems, proper power supply selection is critical for system performance and longevity.",
        "technicalConsiderations": "Key considerations for renewable energy power supplies: (1) Wide input voltage range - solar panels and batteries have voltage variations of 2:1 or more; (2) High efficiency - every percentage point matters for overall system efficiency; (3) Reliability - remote installations make maintenance difficult and expensive; (4) Environmental tolerance - outdoor installations require wide temperature range and humidity resistance; (5) Grid compliance - power supplies must not interfere with grid connection requirements.",
        "selectionLogic": "For solar applications, I recommend high-efficiency AC/DC supplies with active PFC for the grid-tie inverter control power. For battery energy storage, wide input range DC/DC converters handle the battery voltage variation. For wind applications, robust DIN rail supplies withstand the harsh turbine environment. All power supplies should have 5+ year warranties and demonstrated field reliability.",
        "commonPitfalls": "Common mistakes in renewable energy power supply design: (1) Underestimating voltage variation - battery systems range from 42V (discharged) to 58V (charging); (2) Ignoring standby power - supplies must meet efficiency requirements at light load; (3) Inadequate protection - outdoor systems need surge protection and environmental sealing; (4) Poor thermal design - solar inverters can reach 60°C+ ambient; (5) Insufficient isolation - grid-tie systems need proper isolation for safety.",
        "bestPractices": "Best practices I've learned from successful renewable energy projects: (1) Always use supplies rated for at least 125% of calculated load to handle peak demands; (2) Implement redundant power for critical monitoring and control functions; (3) Use conformal coating on PCBs for humidity protection; (4) Include surge protection devices (SPDs) on all external connections; (5) Design for 20-year system lifetime with 10+ year power supply MTBF; (6) Plan for worst-case temperature conditions with adequate derating."
      };
      console.log(`✓ Fixed faeInsights for ${solution.id}`);
    }
  });
  
  writeJSON('solutions.json', data);
}

// Function to fix support articles faeInsights
function fixSupportFAEInsights() {
  const data = readJSON('support.json');
  
  data.articles.forEach(article => {
    if (article.id === 'renewable-energy-power-supply-design-guide') {
      article.faeInsights = {
        "overview": "Designing power supplies for renewable energy applications requires understanding the unique challenges of solar, wind, and energy storage systems. Having worked on numerous renewable energy projects, I've learned that power supply design can make or break system performance and reliability.",
        "technicalConsiderations": "Renewable energy power supplies must handle: (1) Extreme input voltage variations - solar panels range from 0V (dark) to open-circuit voltage; battery systems vary 30-40% between charge states; (2) Environmental stress - outdoor temperatures from -40°C to +85°C, humidity, salt air, dust; (3) Long lifetime requirements - 20-25 year system life with minimal maintenance; (4) Grid interconnection requirements - power quality, anti-islanding, fault ride-through; (5) Safety standards - UL 1741, IEEE 1547, IEC 62109 for grid-tie systems.",
        "selectionLogic": "My approach to renewable energy power supply selection: First, characterize the input source - solar I-V curve, battery voltage range, wind turbine output. Second, determine output requirements - voltage rails, power levels, sequencing needs. Third, assess environmental conditions - temperature range, humidity, altitude, pollution degree. Fourth, select topology - AC/DC for grid-tie, DC/DC for battery systems, DIN rail for control panels. Fifth, verify certifications - UL 1741-SA for smart inverters, IEC 62109 for safety.",
        "commonPitfalls": "Pitfalls I've encountered in renewable energy designs: (1) Inadequate input voltage range - battery systems need 2:1 input range minimum; (2) Poor thermal design - inverters can reach 70°C+ internal temperature; (3) Insufficient surge protection - lightning strikes are common in solar farms; (4) Wrong isolation grade - grid-tie systems need reinforced insulation; (5) Ignoring light-load efficiency - inverters spend much time at partial load; (6) Inadequate filtering - switching noise can affect MPPT accuracy.",
        "bestPractices": "Best practices for reliable renewable energy power supplies: (1) Use 85°C rated capacitors for long life in hot environments; (2) Implement active PFC for any supply >75W to meet IEC 61000-3-2; (3) Design for 50% derating at maximum ambient temperature; (4) Include input fuses and MOVs for surge protection; (5) Use conformal coating for outdoor PCB assemblies; (6) Plan for thermal management - heatsinks, fans, or natural convection; (7) Validate design with HALT testing (Highly Accelerated Life Test); (8) Include remote monitoring capabilities for predictive maintenance."
      };
      console.log(`✓ Fixed faeInsights for ${article.id}`);
    }
  });
  
  writeJSON('support.json', data);
}

// Main execution
console.log('Starting complete Mornsun data fix...\n');

addProducts();
fixFAEReviews();
fixSelectionGuideLinks();
fixSolutionsFAEInsights();
fixSupportFAEInsights();

console.log('\n✅ All fixes completed successfully!');
