#!/usr/bin/env node

/**
 * 添加Guanxi缺失的产品分类
 * 添加：Solid State Relays, Reed Relays, Automotive Photocouplers
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'guanxi');
const productsFile = path.join(dataDir, 'products.json');

// 读取现有产品数据
const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// 生成Solid State Relays分类的6个产品
function generateSSRProducts() {
  return [
    {
      partNumber: "KAQY214",
      name: "MOSFET Output SSR 60V 400mA",
      shortDescription: "60V 400mA MOSFET output solid state relay with 2500V isolation, low on-resistance 0.5Ω, SOP-4 package for DC switching.",
      descriptionParagraphs: [
        "The KAQY214 is a high-performance MOSFET output solid state relay featuring 60V load voltage and 400mA continuous load current.",
        "With ultra-low on-resistance of 0.5Ω typical, it minimizes power dissipation and heat generation during operation.",
        "The SOP-4 surface-mount package is ideal for automated assembly and space-constrained applications."
      ],
      specifications: {
        "Output Type": "MOSFET",
        "Load Voltage": "60V DC",
        "Load Current": "400mA continuous",
        "Isolation Voltage": "2500Vrms",
        "On-Resistance": "0.5Ω typical",
        "Turn-on Time": "0.5ms typical",
        "Turn-off Time": "0.1ms typical",
        "Package": "SOP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "400mA high current capability",
        "Ultra-low on-resistance 0.5Ω",
        "2500V isolation voltage",
        "Fast switching <1ms",
        "No moving parts - unlimited life",
        "Silent operation",
        "RoHS compliant"
      ],
      applications: [
        "Battery management systems",
        "DC motor control",
        "LED lighting control",
        "Industrial automation",
        "Test equipment",
        "Medical devices"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - DC Power Switching",
        content: "The KAQY214 is my go-to choice for DC switching applications. The 400mA rating handles most small to medium DC loads, and the 0.5Ω on-resistance keeps power dissipation low. I've used this extensively in battery management systems where mechanical relay lifetime is a concern. The MOSFET output provides clean switching with no bounce or arcing. For DC loads up to 60V, this SSR delivers excellent reliability and performance.",
        highlight: "High-current DC SSR with ultra-low on-resistance for reliable switching"
      },
      alternativeParts: [
        {
          partNumber: "KAQY212",
          brand: "Guanxi",
          reason: "Lower current option",
          comparison: "KAQY214 (400mA) vs KAQY212 (200mA) - higher vs lower current",
          useCase: "Use for lower current applications up to 200mA",
          parameters: { "Load Current": "200mA", "On-Resistance": "1.0Ω" },
          priceDifference: "-15%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQY217",
          brand: "Guanxi",
          reason: "Higher voltage option",
          comparison: "KAQY214 (60V) vs KAQY217 (400V) - lower vs higher voltage",
          useCase: "Use for higher voltage DC applications",
          parameters: { "Load Voltage": "400V DC", "Load Current": "100mA" },
          priceDifference: "+10%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor 330Ω", description: "LED input current limiting", category: "Passive" },
        { partNumber: "Heat Sink SOP-4", description: "Thermal management for high current", category: "Thermal" },
        { partNumber: "Bypass Capacitor 100nF", description: "Power supply decoupling", category: "Passive" }
      ],
      faqs: [
        {
          question: "What is the maximum load current for KAQY214?",
          answer: "The KAQY214 supports 400mA continuous load current at 25°C ambient. Current derating may be required at higher temperatures. For reliable operation, ensure proper thermal management and consider using a heat sink for continuous high-current operation.",
          decisionGuide: "400mA continuous, derate at elevated temperatures.",
          keywords: ["load current", "400mA", "current rating" ]
        },
        {
          question: "How do I calculate power dissipation in KAQY214?",
          answer: "Power dissipation is calculated as P = I² × Rds(on). For 400mA load current with 0.5Ω on-resistance: P = 0.4² × 0.5 = 0.08W. Ensure the package can dissipate this power at your operating temperature. Add safety margin for reliable operation.",
          decisionGuide: "Calculate P = I² × Rds(on) for thermal design.",
          keywords: ["power dissipation", "thermal design", "Rds(on)" ]
        },
        {
          question: "Can KAQY214 switch AC loads?",
          answer: "No, KAQY214 is designed for DC loads only. The MOSFET output includes a body diode that would conduct during negative AC half-cycles. For AC switching, use triac output SSRs like KAQY6x series or add an external bridge rectifier for DC conversion.",
          decisionGuide: "Use triac SSRs for AC, MOSFET SSRs for DC only.",
          keywords: ["AC switching", "DC only", "triac SSR" ]
        },
        {
          question: "What is the typical switching speed of KAQY214?",
          answer: "KAQY214 has typical turn-on time of 0.5ms and turn-off time of 0.1ms. This fast switching speed makes it suitable for PWM applications and high-frequency switching. The fast response also minimizes switching losses compared to mechanical relays.",
          decisionGuide: "Fast switching suitable for PWM applications.",
          keywords: ["switching speed", "turn-on time", "PWM" ]
        },
        {
          question: "Does KAQY214 require a heat sink?",
          answer: "At maximum current (400mA), power dissipation is approximately 0.08W, which the SOP-4 package can typically handle without a heat sink at room temperature. However, for high ambient temperatures or continuous operation, a small heat sink or copper pad on PCB is recommended for reliability.",
          decisionGuide: "Heat sink recommended for high temp or continuous operation.",
          keywords: ["heat sink", "thermal management", "cooling" ]
        }
      ]
    },
    {
      partNumber: "KAQY212",
      name: "MOSFET Output SSR 60V 200mA",
      shortDescription: "60V 200mA MOSFET output solid state relay with 2500V isolation, low on-resistance 1.0Ω, SOP-4 package for DC switching.",
      descriptionParagraphs: [
        "The KAQY212 is a compact MOSFET output solid state relay designed for low to medium DC load switching applications.",
        "Features 200mA continuous load current capability with 1.0Ω typical on-resistance for efficient power switching.",
        "The SOP-4 package provides excellent isolation and is suitable for surface-mount assembly processes."
      ],
      specifications: {
        "Output Type": "MOSFET",
        "Load Voltage": "60V DC",
        "Load Current": "200mA continuous",
        "Isolation Voltage": "2500Vrms",
        "On-Resistance": "1.0Ω typical",
        "Turn-on Time": "0.5ms typical",
        "Turn-off Time": "0.1ms typical",
        "Package": "SOP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "200mA load current",
        "Low on-resistance 1.0Ω",
        "2500V isolation",
        "Fast switching",
        "Compact SOP-4 package",
        "Long operational life",
        "RoHS compliant"
      ],
      applications: [
        "Sensor switching",
        "Low-power DC control",
        "Signal routing",
        "Battery-powered devices",
        "Portable equipment"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Low Power DC Switching",
        content: "The KAQY212 is perfect for low-current DC switching where a mechanical relay would be overkill. The 200mA rating covers most sensor and signal switching needs. I often recommend this for battery-powered devices where relay coil current would drain the battery. The SOP-4 package is compact and easy to work with. For low-power DC switching, this is a cost-effective and reliable solution.",
        highlight: "Compact DC SSR for low-current switching applications"
      },
      alternativeParts: [
        {
          partNumber: "KAQY214",
          brand: "Guanxi",
          reason: "Higher current option",
          comparison: "KAQY212 (200mA) vs KAQY214 (400mA) - lower vs higher current",
          useCase: "Use when higher current is needed",
          parameters: { "Load Current": "400mA", "On-Resistance": "0.5Ω" },
          priceDifference: "+15%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQY217",
          brand: "Guanxi",
          reason: "Higher voltage option",
          comparison: "KAQY212 (60V) vs KAQY217 (400V) - different voltage rating",
          useCase: "Use for higher voltage applications",
          parameters: { "Load Voltage": "400V DC" },
          priceDifference: "+10%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor 330Ω", description: "LED input current limiting", category: "Passive" },
        { partNumber: "Pull-down Resistor 10kΩ", description: "Gate pull-down resistor", category: "Passive" },
        { partNumber: "Bypass Capacitor 100nF", description: "Power supply decoupling", category: "Passive" }
      ],
      faqs: [
        {
          question: "What is the maximum load current for KAQY212?",
          answer: "The KAQY212 supports 200mA continuous load current. This is suitable for switching sensors, small DC motors, LEDs, and other low-power DC loads. For higher current requirements, consider the KAQY214 which supports 400mA.",
          decisionGuide: "200mA continuous for low-power DC loads.",
          keywords: ["load current", "200mA", "low power" ]
        },
        {
          question: "Can KAQY212 be used for signal switching?",
          answer: "Yes, KAQY212 is excellent for signal switching applications. The low on-resistance (1.0Ω) minimizes signal attenuation, and the fast switching speed preserves signal integrity. It's commonly used for routing analog and digital signals in test equipment and instrumentation.",
          decisionGuide: "Excellent for signal routing applications.",
          keywords: ["signal switching", "routing", "analog signal" ]
        },
        {
          question: "What is the isolation capacitance of KAQY212?",
          answer: "The KAQY212 has typical isolation capacitance of 1.0pF between input and output. This low capacitance ensures excellent high-frequency isolation and minimizes coupling of noise from the output side to the control circuitry.",
          decisionGuide: "Low 1.0pF isolation capacitance for noise immunity.",
          keywords: ["isolation capacitance", "noise immunity", "high frequency" ]
        },
        {
          question: "Is KAQY212 suitable for battery applications?",
          answer: "Yes, KAQY212 is ideal for battery-powered applications. The LED input requires only 5-20mA, and the MOSFET output has no holding current. This is much more efficient than mechanical relays which require continuous coil current. The low power consumption extends battery life.",
          decisionGuide: "Very suitable for battery-powered devices.",
          keywords: ["battery powered", "low power", "efficiency" ]
        },
        {
          question: "What is the minimum load current for KAQY212?",
          answer: "KAQY212 can switch loads as low as microamps. Unlike some SSRs that have minimum load current requirements, MOSFET output SSRs can switch very small currents reliably. This makes them suitable for switching high-impedance circuits and sensitive measurements.",
          decisionGuide: "No minimum load current - can switch microamp loads.",
          keywords: ["minimum load", "microamp", "sensitive circuits" ]
        }
      ]
    },
    {
      partNumber: "KAQY217",
      name: "High Voltage MOSFET SSR 400V 100mA",
      shortDescription: "400V 100mA MOSFET output solid state relay with 2500V isolation, high voltage capability, SOP-4 package for high-voltage DC switching.",
      descriptionParagraphs: [
        "The KAQY217 is a high-voltage MOSFET output solid state relay capable of switching DC loads up to 400V.",
        "With 100mA continuous load current, it's ideal for high-voltage, low-current applications such as capacitor charging and HV power supplies.",
        "The SOP-4 package provides 2500V isolation between control and load circuits for safety."
      ],
      specifications: {
        "Output Type": "MOSFET",
        "Load Voltage": "400V DC",
        "Load Current": "100mA continuous",
        "Isolation Voltage": "2500Vrms",
        "On-Resistance": "15Ω typical",
        "Turn-on Time": "1.0ms typical",
        "Turn-off Time": "0.5ms typical",
        "Package": "SOP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "400V high voltage capability",
        "100mA load current",
        "2500V isolation",
        "MOSFET output",
        "No moving parts",
        "Fast switching",
        "RoHS compliant"
      ],
      applications: [
        "Capacitor charging",
        "HV power supplies",
        "Solar panel switching",
        "Industrial controls",
        "Test equipment"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - High Voltage DC",
        content: "The KAQY217 fills the need for high-voltage DC switching in a compact package. The 400V rating handles most DC bus voltages, and the 100mA current is sufficient for control and monitoring circuits. I've used this in capacitor charging circuits and solar power systems. The high voltage MOSFETs do have higher on-resistance, but for the voltage capability, it's a trade-off worth making. Always ensure adequate clearance on your PCB for high voltage.",
        highlight: "High-voltage DC SSR for 400V applications"
      },
      alternativeParts: [
        {
          partNumber: "KAQY214",
          brand: "Guanxi",
          reason: "Lower voltage, higher current",
          comparison: "KAQY217 (400V/100mA) vs KAQY214 (60V/400mA) - high voltage vs high current",
          useCase: "Use for lower voltage, higher current applications",
          parameters: { "Load Voltage": "60V", "Load Current": "400mA" },
          priceDifference: "-10%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQY212",
          brand: "Guanxi",
          reason: "Lower voltage option",
          comparison: "KAQY217 vs KAQY212 - different voltage/current trade-offs",
          useCase: "For lower voltage applications",
          parameters: { "Load Voltage": "60V", "Load Current": "200mA" },
          priceDifference: "-15%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor 330Ω", description: "LED input current limiting", category: "Passive" },
        { partNumber: "Varistor 470V", description: "Overvoltage protection", category: "Protection" },
        { partNumber: "Snubber Circuit", description: "RC snubber for protection", category: "Passive" }
      ],
      faqs: [
        {
          question: "What applications need 400V SSR switching?",
          answer: "400V SSRs are needed for switching DC bus voltages in industrial equipment, capacitor charging circuits, solar power systems (panel-level switching), and high-voltage test equipment. They provide isolation and control for circuits operating at elevated DC voltages.",
          decisionGuide: "Use for DC bus voltages and HV applications.",
          keywords: ["400V DC", "high voltage", "capacitor charging" ]
        },
        {
          question: "Why is the on-resistance higher for high-voltage SSRs?",
          answer: "High-voltage MOSFETs require thicker epitaxial layers to withstand high voltages, which increases on-resistance. KAQY217 has 15Ω typical Rds(on) compared to 0.5Ω for low-voltage KAQY214. This is a physical trade-off for voltage capability. Calculate power dissipation accordingly.",
          decisionGuide: "Higher Rds(on) is trade-off for voltage capability.",
          keywords: ["on-resistance", "high voltage", "trade-off" ]
        },
        {
          question: "Can KAQY217 be used for AC switching?",
          answer: "No, KAQY217 is for DC loads only. The MOSFET body diode would conduct during negative AC half-cycles. For AC switching at high voltages, use triac output SSRs or add external rectification to convert AC to DC.",
          decisionGuide: "DC only - use triac SSRs for AC switching.",
          keywords: ["DC only", "AC switching", "triac" ]
        },
        {
          question: "What safety precautions are needed for 400V operation?",
          answer: "For 400V operation: (1) Maintain adequate creepage and clearance distances on PCB (minimum 4-5mm); (2) Use appropriate insulation ratings; (3) Add overvoltage protection (varistors); (4) Ensure proper enclosure for user safety; (5) Follow local electrical safety regulations.",
          decisionGuide: "Maintain 4-5mm clearance, add protection.",
          keywords: ["safety", "creepage", "clearance", "400V" ]
        },
        {
          question: "What is the power dissipation at 100mA?",
          answer: "At 100mA with 15Ω on-resistance: P = 0.1² × 15 = 0.15W. The SOP-4 package can handle this with minimal temperature rise. No heat sink required for continuous operation at rated current.",
          decisionGuide: "0.15W dissipation - no heat sink needed.",
          keywords: ["power dissipation", "100mA", "thermal" ]
        }
      ]
    },
    {
      partNumber: "KAQY602S",
      name: "Triac Output SSR 600V 100mA",
      shortDescription: "600V 100mA triac output solid state relay with 2500V isolation, zero-cross switching, SOP-4 package for AC load control.",
      descriptionParagraphs: [
        "The KAQY602S is a triac output solid state relay designed for AC load switching with zero-cross detection.",
        "Capable of switching AC loads up to 600V and 100mA, suitable for heater control, lighting, and small motor applications.",
        "Zero-cross switching minimizes EMI and extends the life of resistive loads."
      ],
      specifications: {
        "Output Type": "Triac",
        "Load Voltage": "600V AC",
        "Load Current": "100mA continuous",
        "Isolation Voltage": "2500Vrms",
        "On-Voltage": "1.5V typical",
        "Zero-Cross": "Yes",
        "Surge Current": "1.2A (1 cycle)",
        "Package": "SOP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "600V AC switching",
        "100mA load current",
        "Zero-cross switching",
        "2500V isolation",
        "Low EMI emission",
        "Long load life",
        "RoHS compliant"
      ],
      applications: [
        "Heater control",
        "Incandescent lighting",
        "Small AC motors",
        "Solenoid valves",
        "Home appliances"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - AC Power Control",
        content: "The KAQY602S is a versatile AC SSR for low-current applications. The zero-cross switching is essential for minimizing EMI in residential and commercial environments. I've used this in smart home devices, temperature controllers, and lighting systems. The 600V rating handles 240VAC with good safety margin. For resistive AC loads under 100mA, this provides silent, long-life switching that mechanical relays can't match.",
        highlight: "Zero-cross AC SSR for low-current resistive loads"
      },
      alternativeParts: [
        {
          partNumber: "KAQY414",
          brand: "Guanxi",
          reason: "Higher current option",
          comparison: "KAQY602S (100mA) vs KAQY414 (400mA) - lower vs higher current",
          useCase: "Use for higher current AC loads",
          parameters: { "Load Current": "400mA" },
          priceDifference: "+20%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQY214",
          brand: "Guanxi",
          reason: "DC switching option",
          comparison: "KAQY602S (AC) vs KAQY214 (DC) - different load types",
          useCase: "Use for DC load switching",
          parameters: { "Load Voltage": "60V DC", "Type": "MOSFET" },
          priceDifference: "0%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor 330Ω", description: "LED input current limiting", category: "Passive" },
        { partNumber: "Varistor 275V", description: "Overvoltage protection", category: "Protection" },
        { partNumber: "Snubber RC", description: "RC snubber for inductive loads", category: "Passive" }
      ],
      faqs: [
        {
          question: "What is zero-cross switching and why is it important?",
          answer: "Zero-cross switching turns the triac on only when AC voltage crosses zero. This minimizes EMI/RFI generation, reduces inrush current, and extends load life. It's essential for residential/commercial applications where EMI must be minimized. Use non-zero-cross types only for phase-control applications like dimming.",
          decisionGuide: "Zero-cross minimizes EMI - use for most AC loads.",
          keywords: ["zero-cross", "EMI", "switching" ]
        },
        {
          question: "Can KAQY602S drive inductive loads?",
          answer: "KAQY602S can drive small inductive loads, but proper snubber protection is required. Use an RC snubber (typically 100Ω + 0.1μF) across the load to protect against voltage transients. For heavy inductive loads, consider using a larger external triac triggered by the SSR.",
          decisionGuide: "Use snubber circuits for inductive loads.",
          keywords: ["inductive load", "snubber", "protection" ]
        },
        {
          question: "What is the difference between zero-cross and random-fire SSRs?",
          answer: "Zero-cross SSRs switch only at AC zero crossings, minimizing EMI. Random-fire SSRs switch immediately when triggered, allowing phase control for dimming and speed control. KAQY602S is zero-cross type. Use random-fire only when phase control is needed.",
          decisionGuide: "Zero-cross for standard switching, random-fire for phase control.",
          keywords: ["zero-cross", "random-fire", "phase control" ]
        },
        {
          question: "What is the dv/dt rating of KAQY602S?",
          answer: "KAQY602S has a typical dv/dt rating of 1000V/μs. This ensures the triac does not false-trigger due to rapid voltage transients. For applications with high dv/dt, ensure the rating is not exceeded or use additional snubber circuits.",
          decisionGuide: "1000V/μs dv/dt rating for noise immunity.",
          keywords: ["dv/dt", "false trigger", "rating" ]
        },
        {
          question: "Can multiple KAQY602S be used in parallel for higher current?",
          answer: "Parallel operation of triac SSRs is not recommended due to current sharing issues. For higher current requirements, use a single higher-rated SSR or use the SSR to trigger a larger external triac. This ensures proper current distribution and reliable operation.",
          decisionGuide: "Don't parallel - use higher rated SSR or external triac.",
          keywords: ["parallel", "current sharing", "higher current" ]
        }
      ]
    },
    {
      partNumber: "KAQY414",
      name: "High Current Triac SSR 600V 400mA",
      shortDescription: "600V 400mA triac output solid state relay with 2500V isolation, zero-cross switching, DIP-4 package for high-current AC loads.",
      descriptionParagraphs: [
        "The KAQY414 is a high-current triac output solid state relay capable of switching AC loads up to 400mA at 600V.",
        "Features zero-cross switching for EMI-free operation and extended load life.",
        "The DIP-4 package provides robust construction and easy through-hole mounting."
      ],
      specifications: {
        "Output Type": "Triac",
        "Load Voltage": "600V AC",
        "Load Current": "400mA continuous",
        "Isolation Voltage": "2500Vrms",
        "On-Voltage": "1.5V typical",
        "Zero-Cross": "Yes",
        "Surge Current": "4A (1 cycle)",
        "Package": "DIP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "400mA high AC current",
        "600V load voltage",
        "Zero-cross switching",
        "2500V isolation",
        "High surge current",
        "DIP-4 package",
        "RoHS compliant"
      ],
      applications: [
        "Heater control",
        "Motor control",
        "Lighting systems",
        "Industrial automation",
        "Power distribution"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - High Current AC",
        content: "The KAQY414 is a workhorse for AC power control. The 400mA rating handles most small to medium AC loads, and the zero-cross switching eliminates EMI issues. I've used this in temperature controllers, lighting systems, and small motor drives. The high surge current capability handles motor inrush currents well. For AC loads up to 400mA, this is a reliable and cost-effective solution.",
        highlight: "High-current AC SSR with zero-cross switching"
      },
      alternativeParts: [
        {
          partNumber: "KAQY602S",
          brand: "Guanxi",
          reason: "Lower current option",
          comparison: "KAQY414 (400mA) vs KAQY602S (100mA) - higher vs lower current",
          useCase: "Use for lower current AC loads",
          parameters: { "Load Current": "100mA" },
          priceDifference: "-20%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQY214",
          brand: "Guanxi",
          reason: "DC switching option",
          comparison: "KAQY414 (AC) vs KAQY214 (DC) - different load types",
          useCase: "Use for DC load switching",
          parameters: { "Load Voltage": "60V DC", "Type": "MOSFET" },
          priceDifference: "-5%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor 330Ω", description: "LED input current limiting", category: "Passive" },
        { partNumber: "Varistor 275V", description: "Overvoltage protection", category: "Protection" },
        { partNumber: "Heat Sink DIP-4", description: "Thermal management", category: "Thermal" },
        { partNumber: "Snubber RC", description: "RC snubber for inductive loads", category: "Passive" }
      ],
      faqs: [
        {
          question: "What is the maximum AC load for KAQY414?",
          answer: "KAQY414 supports 400mA continuous AC load current at 600V. This translates to approximately 240VA at 600VAC or 96VA at 240VAC. The high surge current rating (4A) handles motor inrush and cold filament currents. Always verify thermal conditions for continuous operation.",
          decisionGuide: "400mA continuous, 4A surge for 1 cycle.",
          keywords: ["load current", "400mA", "surge current" ]
        },
        {
          question: "Does KAQY414 require a heat sink?",
          answer: "At maximum current, power dissipation is approximately 0.6W (1.5V × 0.4A). The DIP-4 package can handle this with moderate temperature rise. For continuous operation at high ambient temperatures, a small heat sink or additional copper area on PCB is recommended for reliability.",
          decisionGuide: "Heat sink recommended for continuous high-current operation.",
          keywords: ["heat sink", "thermal", "power dissipation" ]
        },
        {
          question: "Can KAQY414 switch DC loads?",
          answer: "No, KAQY414 is designed for AC loads only. The triac would latch on and not turn off when switching DC. For DC loads, use MOSFET output SSRs like KAQY214 or KAQY217 depending on voltage requirements.",
          decisionGuide: "AC only - use MOSFET SSRs for DC.",
          keywords: ["AC only", "DC switching", "MOSFET SSR" ]
        },
        {
          question: "What is the holding current of KAQY414?",
          answer: "The triac in KAQY414 has typical holding current of 5-10mA. The load must draw at least this current to keep the triac conducting. For very light loads, a bleeder resistor (typically 10kΩ) across the output ensures proper operation.",
          decisionGuide: "Minimum 5-10mA load or add bleeder resistor.",
          keywords: ["holding current", "bleeder resistor", "light loads" ]
        },
        {
          question: "How do I protect against voltage transients?",
          answer: "For protection: (1) Use varistors (MOV) across the load for surge protection; (2) Add RC snubber for inductive loads; (3) Ensure voltage ratings have margin above peak line voltage; (4) Use fast-acting fuses for overcurrent protection. These measures ensure long-term reliability.",
          decisionGuide: "Use varistors and snubbers for protection.",
          keywords: ["protection", "varistor", "snubber", "transient" ]
        }
      ]
    },
    {
      partNumber: "KAQY6N1",
      name: "Dual MOSFET SSR 60V 200mA",
      shortDescription: "Dual channel 60V 200mA MOSFET output solid state relay with 2500V isolation, SOP-8 package for multi-channel DC switching.",
      descriptionParagraphs: [
        "The KAQY6N1 is a dual-channel MOSFET output solid state relay providing two independent switching channels in one package.",
        "Each channel supports 60V and 200mA, suitable for multi-channel DC control applications.",
        "The SOP-8 package saves board space compared to using two single-channel SSRs."
      ],
      specifications: {
        "Output Type": "MOSFET (Dual)",
        "Load Voltage": "60V DC per channel",
        "Load Current": "200mA per channel",
        "Isolation Voltage": "2500Vrms",
        "On-Resistance": "1.0Ω typical per channel",
        "Turn-on Time": "0.5ms typical",
        "Turn-off Time": "0.1ms typical",
        "Package": "SOP-8",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "Dual independent channels",
        "60V 200mA per channel",
        "Low on-resistance 1.0Ω",
        "2500V isolation",
        "Space-saving SOP-8",
        "Independent channel control",
        "RoHS compliant"
      ],
      applications: [
        "Multi-channel DC control",
        "Battery management",
        "Industrial I/O modules",
        "Test equipment",
        "Automation systems"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Multi-Channel Control",
        content: "The KAQY6N1 is perfect for applications needing multiple isolated switches. Having two channels in one SOP-8 package saves significant board space and reduces component count. I often use this in PLC I/O modules and battery management systems where multiple channels need isolation. Each channel operates independently, providing design flexibility. For multi-channel DC switching, this is a cost-effective solution.",
        highlight: "Dual-channel DC SSR for space-constrained multi-channel applications"
      },
      alternativeParts: [
        {
          partNumber: "KAQY212",
          brand: "Guanxi",
          reason: "Single channel option",
          comparison: "KAQY6N1 (dual) vs KAQY212 (single) - dual vs single channel",
          useCase: "Use single channel when only one switch needed",
          parameters: { "Channels": "1", "Package": "SOP-4" },
          priceDifference: "-40% per channel",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQY214",
          brand: "Guanxi",
          reason: "Higher current single channel",
          comparison: "KAQY6N1 vs KAQY214 - dual lower current vs single higher current",
          useCase: "Use for higher current single channel needs",
          parameters: { "Channels": "1", "Load Current": "400mA" },
          priceDifference: "-30%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistors 330Ω", description: "Two resistors for LED inputs", category: "Passive" },
        { partNumber: "Pull-down Resistors 10kΩ", description: "Two resistors for gate pull-down", category: "Passive" },
        { partNumber: "Bypass Capacitor 100nF", description: "Power supply decoupling", category: "Passive" }
      ],
      faqs: [
        {
          question: "Are the two channels isolated from each other?",
          answer: "The two output channels share a common connection but are isolated from the input side. The channel-to-channel isolation is typically 500-1000V. For complete channel-to-channel isolation, use two separate single-channel SSRs like KAQY212.",
          decisionGuide: "Channels share common - not fully isolated from each other.",
          keywords: ["channel isolation", "common connection", "dual channel" ]
        },
        {
          question: "Can both channels be operated simultaneously?",
          answer: "Yes, both channels can be turned on and off independently and simultaneously. Each channel has its own LED input, allowing complete independent control. The channels do not interfere with each other during operation.",
          decisionGuide: "Channels operate independently - full control flexibility.",
          keywords: ["simultaneous", "independent control", "dual operation" ]
        },
        {
          question: "What is the total power dissipation with both channels on?",
          answer: "With both channels conducting 200mA: P = 2 × (0.2² × 1.0) = 0.08W total. This low power dissipation allows both channels to operate continuously without excessive heating. The SOP-8 package handles this power level easily.",
          decisionGuide: "0.08W total - minimal heating even with both channels on.",
          keywords: ["power dissipation", "both channels", "thermal" ]
        },
        {
          question: "Can channels be wired in parallel for higher current?",
          answer: "Parallel operation is not recommended due to current sharing imbalances between channels. For higher current, use a single higher-rated SSR like KAQY214 (400mA) or add external MOSFETs driven by the SSR.",
          decisionGuide: "Don't parallel - use higher rated SSR for more current.",
          keywords: ["parallel", "current sharing", "higher current" ]
        },
        {
          question: "What are typical applications for dual SSRs?",
          answer: "Common applications include: (1) Battery cell balancing switches; (2) Multi-channel I/O modules; (3) Dual polarity switching; (4) Redundant safety circuits; (5) H-bridge drivers. The dual channel saves space and reduces component count in these applications.",
          decisionGuide: "Ideal for multi-channel control and space-constrained designs.",
          keywords: ["applications", "battery balancing", "I/O modules" ]
        }
      ]
    }
  ];
}

// 生成Reed Relays分类的6个产品
function generateReedRelayProducts() {
  return [
    {
      partNumber: "KRE1A05",
      name: "5V SPST Reed Relay",
      shortDescription: "5V coil SPST reed relay with 200V 0.5A switching, 1000V isolation, SIP package for general-purpose switching.",
      descriptionParagraphs: [
        "The KRE1A05 is a compact SPST reed relay featuring a 5V DC coil and hermetically sealed reed switch.",
        "Capable of switching up to 200V and 0.5A, suitable for general-purpose low-power switching applications.",
        "The SIP package is ideal for PCB mounting and automated assembly processes."
      ],
      specifications: {
        "Contact Form": "SPST-NO",
        "Coil Voltage": "5V DC",
        "Coil Resistance": "500Ω typical",
        "Switching Voltage": "200V DC/AC",
        "Switching Current": "0.5A",
        "Carry Current": "1.0A",
        "Contact Rating": "10W",
        "Isolation Voltage": "1000Vrms",
        "Operate Time": "1.0ms typical",
        "Release Time": "0.5ms typical",
        "Package": "SIP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "Hermetically sealed contacts",
        "Long life >100M operations",
        "Low contact resistance <100mΩ",
        "1000V coil-contact isolation",
        "Compact SIP package",
        "Low coil power 50mW",
        "RoHS compliant"
      ],
      applications: [
        "Test equipment",
        "Medical devices",
        "Security systems",
        "Telecommunications",
        "Industrial controls"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Precision Switching",
        content: "The KRE1A05 is a reliable reed relay for low-power switching. The hermetically sealed contacts provide excellent reliability and long life. I often use this in test equipment and medical devices where clean switching is critical. The 5V coil is compatible with standard logic levels. For applications needing mechanical relay reliability with solid-state life, reed relays are an excellent choice.",
        highlight: "Reliable reed relay with hermetically sealed contacts"
      },
      alternativeParts: [
        {
          partNumber: "KRE1A12",
          brand: "Guanxi",
          reason: "12V coil option",
          comparison: "KRE1A05 (5V) vs KRE1A12 (12V) - different coil voltage",
          useCase: "Use for 12V control systems",
          parameters: { "Coil Voltage": "12V DC", "Coil Resistance": "1000Ω" },
          priceDifference: "0%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KRE1C05",
          brand: "Guanxi",
          reason: "Higher voltage option",
          comparison: "KRE1A05 vs KRE1C05 - standard vs high voltage",
          useCase: "Use for higher voltage switching",
          parameters: { "Switching Voltage": "500V" },
          priceDifference: "+15%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Flyback Diode 1N4148", description: "Coil suppression diode", category: "Protection" },
        { partNumber: "LED Indicator", description: "Status indication", category: "Indicator" },
        { partNumber: "Current Limit Resistor", description: "LED current limiting", category: "Passive" }
      ],
      faqs: [
        {
          question: "What is the typical life expectancy of KRE1A05?",
          answer: "KRE1A05 reed relays typically achieve >100 million operations at rated load, and >1 billion operations at low-level loads (10mA, 10mV). The hermetically sealed contacts prevent contamination, ensuring consistent performance over the relay's lifetime.",
          decisionGuide: "100M+ operations at rated load, 1B+ at low level.",
          keywords: ["life expectancy", "operations", "reliability" ]
        },
        {
          question: "Can KRE1A05 switch AC signals?",
          answer: "Yes, KRE1A05 can switch both AC and DC signals up to 200V. The reed switch is polarity-independent, making it suitable for AC applications. For AC switching, ensure the voltage and current ratings are not exceeded.",
          decisionGuide: "Switches both AC and DC up to 200V.",
          keywords: ["AC switching", "DC switching", "polarity" ]
        },
        {
          question: "What is the contact resistance of KRE1A05?",
          answer: "Initial contact resistance is typically <100mΩ. Over the relay's life, contact resistance may increase slightly but should remain below 200mΩ. Low contact resistance ensures minimal signal attenuation and voltage drop.",
          decisionGuide: "<100mΩ initial, <200mΩ over life.",
          keywords: ["contact resistance", "signal attenuation", "voltage drop" ]
        },
        {
          question: "Does KRE1A05 require a coil suppression diode?",
          answer: "Yes, always use a flyback diode across the coil to suppress voltage spikes when the relay turns off. Without protection, the inductive kickback can damage driving circuits. A standard 1N4148 or 1N4001 diode is sufficient.",
          decisionGuide: "Always use flyback diode for coil protection.",
          keywords: ["flyback diode", "coil suppression", "protection" ]
        },
        {
          question: "What is the difference between reed relays and EMRs?",
          answer: "Reed relays use hermetically sealed reed switches with no moving parts except the contacts, providing longer life and better environmental sealing. EMRs (electromechanical relays) have exposed contacts and mechanical armatures, offering higher current capacity but shorter life and larger size.",
          decisionGuide: "Reed relays for long life/sealing, EMRs for high current.",
          keywords: ["reed relay", "EMR", "comparison" ]
        }
      ]
    },
    {
      partNumber: "KRE1A12",
      name: "12V SPST Reed Relay",
      shortDescription: "12V coil SPST reed relay with 200V 0.5A switching, 1000V isolation, SIP package for industrial control.",
      descriptionParagraphs: [
        "The KRE1A12 is a 12V DC coil reed relay designed for industrial control applications.",
        "Features the same reliable reed switch technology as the 5V version but with 12V coil compatibility.",
        "The SIP package allows easy integration into industrial control systems and PLCs."
      ],
      specifications: {
        "Contact Form": "SPST-NO",
        "Coil Voltage": "12V DC",
        "Coil Resistance": "1000Ω typical",
        "Switching Voltage": "200V DC/AC",
        "Switching Current": "0.5A",
        "Carry Current": "1.0A",
        "Contact Rating": "10W",
        "Isolation Voltage": "1000Vrms",
        "Operate Time": "1.0ms typical",
        "Release Time": "0.5ms typical",
        "Package": "SIP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "12V coil for industrial systems",
        "Hermetically sealed contacts",
        "Long life >100M operations",
        "1000V isolation",
        "Compact SIP package",
        "Low coil power 144mW",
        "RoHS compliant"
      ],
      applications: [
        "Industrial controls",
        "PLC I/O modules",
        "Test equipment",
        "Process control",
        "Automation systems"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Industrial Control",
        content: "The KRE1A12 is the 12V version of our popular reed relay. The higher coil voltage is compatible with standard industrial 12V and 24V control systems. I use this extensively in PLC I/O modules and industrial control panels. The 12V coil draws less current than the 5V version for the same power, reducing load on power supplies. For industrial applications, this is a reliable choice.",
        highlight: "12V reed relay for industrial control systems"
      },
      alternativeParts: [
        {
          partNumber: "KRE1A05",
          brand: "Guanxi",
          reason: "5V coil option",
          comparison: "KRE1A12 (12V) vs KRE1A05 (5V) - different coil voltage",
          useCase: "Use for 5V logic systems",
          parameters: { "Coil Voltage": "5V DC", "Coil Resistance": "500Ω" },
          priceDifference: "0%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KRE1C12",
          brand: "Guanxi",
          reason: "Higher voltage option",
          comparison: "KRE1A12 vs KRE1C12 - standard vs high voltage",
          useCase: "Use for higher voltage switching",
          parameters: { "Switching Voltage": "500V" },
          priceDifference: "+15%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Flyback Diode 1N4148", description: "Coil suppression diode", category: "Protection" },
        { partNumber: "LED Indicator", description: "Status indication", category: "Indicator" },
        { partNumber: "Current Limit Resistor", description: "LED current limiting", category: "Passive" }
      ],
      faqs: [
        {
          question: "Why choose 12V coil over 5V?",
          answer: "12V coils are preferred in industrial environments because: (1) Lower current draw for same power (12mA vs 10mA); (2) Better noise immunity in industrial settings; (3) Compatibility with standard 12V/24V industrial power; (4) Reduced voltage drop in long cable runs.",
          decisionGuide: "12V for industrial, 5V for logic-level systems.",
          keywords: ["12V coil", "industrial", "noise immunity" ]
        },
        {
          question: "What is the coil power consumption?",
          answer: "KRE1A12 consumes approximately 144mW (12V × 12mA). This is slightly higher than the 5V version but still very efficient compared to electromechanical relays. The low power consumption allows multiple relays to be driven from standard power supplies.",
          decisionGuide: "144mW coil power - efficient operation.",
          keywords: ["coil power", "consumption", "efficiency" ]
        },
        {
          question: "Can KRE1A12 be driven directly from PLC outputs?",
          answer: "Yes, most PLC relay outputs can directly drive KRE1A12. The 12mA coil current is within the capability of standard PLC outputs. For transistor outputs, verify the current rating. Always include a flyback diode for protection.",
          decisionGuide: "Compatible with most PLC relay outputs.",
          keywords: ["PLC", "drive capability", "compatibility" ]
        },
        {
          question: "What is the operate time of KRE1A12?",
          answer: "Typical operate time is 1.0ms and release time is 0.5ms. This fast response makes reed relays suitable for high-speed test systems and applications requiring quick switching. The operate time is slightly longer than solid-state relays but much faster than large EMRs.",
          decisionGuide: "1ms operate, 0.5ms release - fast response.",
          keywords: ["operate time", "release time", "speed" ]
        },
        {
          question: "Is KRE1A12 suitable for low-level switching?",
          answer: "Yes, reed relays excel at low-level switching (dry switching) of signals below 10mA and 10mV. The hermetically sealed contacts prevent oxidation, ensuring reliable contact resistance even after billions of operations at low levels.",
          decisionGuide: "Excellent for dry switching applications.",
          keywords: ["low-level switching", "dry switching", "signal" ]
        }
      ]
    },
    {
      partNumber: "KRE1C05",
      name: "High Voltage Reed Relay 5V",
      shortDescription: "5V coil high-voltage reed relay with 500V 0.3A switching, 1500V isolation, SIP package for HV applications.",
      descriptionParagraphs: [
        "The KRE1C05 is a high-voltage reed relay capable of switching up to 500V with 5V coil excitation.",
        "Features enhanced isolation of 1500V between coil and contacts for high-voltage safety.",
        "Ideal for high-voltage test equipment, power supply testing, and industrial HV applications."
      ],
      specifications: {
        "Contact Form": "SPST-NO",
        "Coil Voltage": "5V DC",
        "Coil Resistance": "500Ω typical",
        "Switching Voltage": "500V DC/AC",
        "Switching Current": "0.3A",
        "Carry Current": "0.5A",
        "Contact Rating": "10W",
        "Isolation Voltage": "1500Vrms",
        "Operate Time": "1.5ms typical",
        "Release Time": "0.5ms typical",
        "Package": "SIP-4 HV",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "500V high voltage switching",
        "1500V enhanced isolation",
        "Hermetically sealed contacts",
        "Long operational life",
        "HV SIP package",
        "5V coil compatible",
        "RoHS compliant"
      ],
      applications: [
        "HV test equipment",
        "Power supply testing",
        "Capacitor charging",
        "Insulation testing",
        "Medical equipment"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - High Voltage Applications",
        content: "The KRE1C05 is our high-voltage reed relay for demanding applications. The 500V switching capability handles most HV test requirements, and the 1500V isolation provides safety margin. I've used this in cable testers, insulation testers, and HV power supply controls. The reed switch technology provides clean switching without the contact bounce of mechanical relays. Always ensure adequate PCB spacing for high voltage.",
        highlight: "High-voltage reed relay for 500V switching applications"
      },
      alternativeParts: [
        {
          partNumber: "KRE1A05",
          brand: "Guanxi",
          reason: "Standard voltage option",
          comparison: "KRE1C05 (500V) vs KRE1A05 (200V) - high vs standard voltage",
          useCase: "Use for lower voltage applications",
          parameters: { "Switching Voltage": "200V", "Isolation": "1000V" },
          priceDifference: "-15%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KRE1C12",
          brand: "Guanxi",
          reason: "12V coil HV option",
          comparison: "KRE1C05 vs KRE1C12 - 5V vs 12V coil HV relay",
          useCase: "Use for 12V control systems with HV switching",
          parameters: { "Coil Voltage": "12V DC" },
          priceDifference: "0%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Flyback Diode 1N4148", description: "Coil suppression diode", category: "Protection" },
        { partNumber: "HV Varistor 680V", description: "Overvoltage protection", category: "Protection" },
        { partNumber: "Safety Gap", description: "Arc protection", category: "Protection" }
      ],
      faqs: [
        {
          question: "What safety precautions are needed for 500V operation?",
          answer: "For 500V operation: (1) Maintain minimum 6mm creepage and clearance on PCB; (2) Use appropriate insulation materials; (3) Add overvoltage protection; (4) Ensure proper enclosure for user safety; (5) Follow IEC/UL safety standards for HV equipment.",
          decisionGuide: "Maintain 6mm clearance, follow safety standards.",
          keywords: ["safety", "500V", "creepage", "clearance" ]
        },
        {
          question: "Can KRE1C05 switch capacitive loads?",
          answer: "KRE1C05 can switch capacitive loads within its ratings, but inrush current must be limited. Use series resistors or pre-charge circuits for large capacitors. The reed switch can weld if inrush current exceeds ratings. Typical max inrush is 3x rated current for <10ms.",
          decisionGuide: "Limit inrush current for capacitive loads.",
          keywords: ["capacitive load", "inrush current", "protection" ]
        },
        {
          question: "What is the breakdown voltage of KRE1C05?",
          answer: "The coil-to-contact isolation is rated at 1500Vrms (2121V DC). The contact-to-contact voltage is 500V. These ratings include safety margins. Do not exceed these voltages to prevent insulation breakdown and ensure long-term reliability.",
          decisionGuide: "1500Vrms isolation, 500V contact rating.",
          keywords: ["breakdown voltage", "isolation", "rating" ]
        },
        {
          question: "Is KRE1C05 suitable for RF switching?",
          answer: "While reed relays can switch RF signals, KRE1C05 is not optimized for RF. The long leads and package create parasitic inductance and capacitance. For RF applications above 100MHz, use specialized RF relays with coaxial construction and controlled impedance.",
          decisionGuide: "Not optimized for RF - use specialized RF relays.",
          keywords: ["RF switching", "high frequency", "impedance" ]
        },
        {
          question: "What is the maximum switching frequency?",
          answer: "Maximum recommended switching frequency is 100Hz for KRE1C05. This is limited by the reed switch mechanical response and contact bounce. For higher frequency switching, use solid-state relays. The operate/release times of 1.5/0.5ms limit practical switching rates.",
          decisionGuide: "Max 100Hz switching frequency.",
          keywords: ["switching frequency", "mechanical limit", "speed" ]
        }
      ]
    },
    {
      partNumber: "KRE2A05",
      name: "5V SPDT Reed Relay",
      shortDescription: "5V coil SPDT reed relay with 200V 0.5A switching, 1000V isolation, SIP package for changeover applications.",
      descriptionParagraphs: [
        "The KRE2A05 is an SPDT (changeover) reed relay providing both normally open and normally closed contacts.",
        "The 5V coil and compact SIP package make it ideal for applications requiring changeover switching.",
        "Hermetically sealed contacts ensure reliable operation in various environments."
      ],
      specifications: {
        "Contact Form": "SPDT (1 Form C)",
        "Coil Voltage": "5V DC",
        "Coil Resistance": "500Ω typical",
        "Switching Voltage": "200V DC/AC",
        "Switching Current": "0.5A",
        "Carry Current": "1.0A",
        "Contact Rating": "10W",
        "Isolation Voltage": "1000Vrms",
        "Operate Time": "1.0ms typical",
        "Release Time": "0.5ms typical",
        "Package": "SIP-6",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "SPDT changeover contacts",
        "5V coil operation",
        "Hermetically sealed",
        "Long life >50M operations",
        "1000V isolation",
        "Compact SIP-6 package",
        "RoHS compliant"
      ],
      applications: [
        "Signal routing",
        "Test switching matrices",
        "Audio switching",
        "Data acquisition",
        "Communication systems"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Changeover Applications",
        content: "The KRE2A05 provides SPDT functionality in a compact reed relay package. The changeover action is useful for signal routing, bypass switching, and fail-safe applications. I use this in test systems where signals need to be switched between different paths. The break-before-make action ensures clean switching. For applications needing both NO and NC contacts, this is an excellent solution.",
        highlight: "SPDT reed relay for changeover switching applications"
      },
      alternativeParts: [
        {
          partNumber: "KRE1A05",
          brand: "Guanxi",
          reason: "SPST option",
          comparison: "KRE2A05 (SPDT) vs KRE1A05 (SPST) - changeover vs simple",
          useCase: "Use SPST when only NO contacts needed",
          parameters: { "Contact Form": "SPST", "Package": "SIP-4" },
          priceDifference: "-20%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KRE2A12",
          brand: "Guanxi",
          reason: "12V coil option",
          comparison: "KRE2A05 (5V) vs KRE2A12 (12V) - different coil voltage",
          useCase: "Use for 12V control systems",
          parameters: { "Coil Voltage": "12V DC" },
          priceDifference: "0%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Flyback Diode 1N4148", description: "Coil suppression diode", category: "Protection" },
        { partNumber: "LED Indicator", description: "Status indication", category: "Indicator" },
        { partNumber: "Pull-up Resistor", description: "Signal termination", category: "Passive" }
      ],
      faqs: [
        {
          question: "What is the contact sequence in SPDT reed relays?",
          answer: "SPDT reed relays use break-before-make contact sequence. The normally closed contact opens before the normally open contact closes. This prevents momentary shorting of the two circuits being switched. The break time is typically 0.1-0.2ms.",
          decisionGuide: "Break-before-make prevents circuit shorting.",
          keywords: ["SPDT", "break-before-make", "contact sequence" ]
        },
        {
          question: "Can both contacts carry current simultaneously?",
          answer: "No, the SPDT contacts are mutually exclusive - only one contact is closed at a time. When the coil is energized, the NO contact closes and NC opens. When de-energized, the NC contact closes and NO opens. They cannot both be closed simultaneously.",
          decisionGuide: "Contacts are mutually exclusive - only one closed at a time.",
          keywords: ["SPDT operation", "mutually exclusive", "contacts" ]
        },
        {
          question: "What applications benefit from SPDT reed relays?",
          answer: "Common SPDT applications include: (1) Signal routing between two paths; (2) Bypass switching; (3) Fail-safe circuits; (4) Test system switching matrices; (5) Audio source selection. The changeover capability provides flexibility in circuit design.",
          decisionGuide: "Use for routing, bypass, and selection applications.",
          keywords: ["applications", "routing", "bypass" ]
        },
        {
          question: "Is there contact bounce in reed relays?",
          answer: "Reed relays have minimal contact bounce compared to EMRs. Typical bounce time is <1ms. This makes them suitable for switching sensitive digital circuits without additional debouncing. The hermetic seal also prevents contact contamination that could cause erratic contact resistance.",
          decisionGuide: "Minimal bounce - suitable for digital circuits.",
          keywords: ["contact bounce", "debouncing", "digital" ]
        },
        {
          question: "What is the life expectancy of SPDT vs SPST reed relays?",
          answer: "SPDT reed relays typically have slightly lower life expectancy than SPST due to more complex reed switch construction. Expect >50M operations for SPDT vs >100M for SPST at rated load. For low-level switching, both types achieve >1B operations.",
          decisionGuide: "SPDT: >50M, SPST: >100M at rated load.",
          keywords: ["life expectancy", "SPDT", "SPST" ]
        }
      ]
    },
    {
      partNumber: "KRE3A05",
      name: "5V DPST Reed Relay",
      shortDescription: "5V coil DPST reed relay with dual 200V 0.5A contacts, 1000V isolation, SIP package for dual circuit switching.",
      descriptionParagraphs: [
        "The KRE3A05 is a DPST (double pole single throw) reed relay with two independent SPST contacts in one package.",
        "Both contacts switch simultaneously with a single 5V coil, ideal for switching paired signals or dual circuits.",
        "The compact SIP package saves space compared to using two separate relays."
      ],
      specifications: {
        "Contact Form": "DPST (2 Form A)",
        "Coil Voltage": "5V DC",
        "Coil Resistance": "500Ω typical",
        "Switching Voltage": "200V DC/AC per pole",
        "Switching Current": "0.5A per pole",
        "Carry Current": "1.0A per pole",
        "Contact Rating": "10W per pole",
        "Isolation Voltage": "1000Vrms",
        "Operate Time": "1.0ms typical",
        "Release Time": "0.5ms typical",
        "Package": "SIP-8",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "Dual SPST contacts",
        "Simultaneous switching",
        "5V coil operation",
        "Hermetically sealed",
        "1000V isolation",
        "Space-saving package",
        "RoHS compliant"
      ],
      applications: [
        "Dual signal switching",
        "Differential pair routing",
        "Power rail switching",
        "Balanced audio",
        "Instrumentation"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Dual Circuit Switching",
        content: "The KRE3A05 provides two synchronized contacts in one package. This is ideal for switching differential signals, balanced audio, or paired power rails. I use this in instrumentation and audio equipment where both lines need to switch together. The simultaneous action ensures signal integrity in differential pairs. For dual-circuit switching, this saves board space and component count.",
        highlight: "DPST reed relay for synchronized dual-circuit switching"
      },
      alternativeParts: [
        {
          partNumber: "KRE1A05",
          brand: "Guanxi",
          reason: "Single pole option",
          comparison: "KRE3A05 (DPST) vs KRE1A05 (SPST) - dual vs single",
          useCase: "Use single pole when only one circuit needs switching",
          parameters: { "Contact Form": "SPST", "Package": "SIP-4" },
          priceDifference: "-45%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KRE3A12",
          brand: "Guanxi",
          reason: "12V coil option",
          comparison: "KRE3A05 (5V) vs KRE3A12 (12V) - different coil voltage",
          useCase: "Use for 12V control systems",
          parameters: { "Coil Voltage": "12V DC" },
          priceDifference: "0%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Flyback Diode 1N4148", description: "Coil suppression diode", category: "Protection" },
        { partNumber: "Dual LED Indicator", description: "Status indication", category: "Indicator" },
        { partNumber: "Current Limit Resistor", description: "LED current limiting", category: "Passive" }
      ],
      faqs: [
        {
          question: "Are the two poles electrically isolated?",
          answer: "The two poles share a common connection between them but are isolated from the coil. Pole-to-pole isolation is typically 500-1000V. For complete isolation between switched circuits, use two separate single-pole relays. The common connection is useful for switching circuits with shared grounds.",
          decisionGuide: "Poles share common - not fully isolated from each other.",
          keywords: ["pole isolation", "common connection", "DPST" ]
        },
        {
          question: "Do both contacts switch at exactly the same time?",
          answer: "The contacts switch nearly simultaneously with typical skew of <0.1ms. This is much better than using two separate relays where timing can vary significantly. The synchronized switching is important for differential signals and balanced circuits.",
          decisionGuide: "Near-simultaneous switching with <0.1ms skew.",
          keywords: ["simultaneous", "timing skew", "synchronization" ]
        },
        {
          question: "What is the total power dissipation with both contacts carrying 0.5A?",
          answer: "Contact resistance is <100mΩ per pole. At 0.5A, power dissipation per pole is P = I²R = 0.25 × 0.1 = 0.025W. Total for both poles is 0.05W. This minimal dissipation allows reliable operation without excessive heating.",
          decisionGuide: "0.05W total - minimal power dissipation.",
          keywords: ["power dissipation", "contact resistance", "heating" ]
        },
        {
          question: "Can the two poles switch different voltages?",
          answer: "Yes, each pole can switch independent circuits at different voltages, provided both are within the 200V rating. The common connection means both circuits must share a common reference point. For completely independent circuits, use separate relays.",
          decisionGuide: "Can switch different voltages with common reference.",
          keywords: ["different voltages", "independent circuits", "common" ]
        },
        {
          question: "What is the advantage of DPST over two SPST relays?",
          answer: "Advantages include: (1) Guaranteed simultaneous switching; (2) Lower component count; (3) Smaller PCB footprint; (4) Single coil driver needed; (5) Better matching between channels. The trade-off is less isolation between switched circuits.",
          decisionGuide: "Simultaneous switching, lower component count.",
          keywords: ["advantages", "simultaneous", "component count" ]
        }
      ]
    },
    {
      partNumber: "KRE5A05",
      name: "5V High Frequency Reed Relay",
      shortDescription: "5V coil high-frequency reed relay with 200V 0.5A, optimized for fast switching up to 500Hz, SIP package.",
      descriptionParagraphs: [
        "The KRE5A05 is optimized for high-frequency switching applications with enhanced reed switch design.",
        "Capable of switching up to 500Hz while maintaining long contact life and reliable operation.",
        "The optimized design reduces contact bounce and improves switching consistency at high rates."
      ],
      specifications: {
        "Contact Form": "SPST-NO",
        "Coil Voltage": "5V DC",
        "Coil Resistance": "250Ω typical",
        "Switching Voltage": "200V DC/AC",
        "Switching Current": "0.5A",
        "Carry Current": "1.0A",
        "Contact Rating": "10W",
        "Max Switching Frequency": "500Hz",
        "Isolation Voltage": "1000Vrms",
        "Operate Time": "0.5ms typical",
        "Release Time": "0.3ms typical",
        "Package": "SIP-4",
        "Operating Temperature": "-40°C to +85°C"
      },
      features: [
        "500Hz switching frequency",
        "Fast operate/release",
        "Low contact bounce",
        "Hermetically sealed",
        "200V switching",
        "Optimized for speed",
        "RoHS compliant"
      ],
      applications: [
        "High-speed test systems",
        "Rapid switching",
        "Automated test equipment",
        "Data acquisition",
        "Production testing"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - High Speed Switching",
        content: "The KRE5A05 is designed for applications requiring rapid switching. The 500Hz capability is much higher than standard reed relays. I use this in production test systems and automated equipment where fast cycle times are critical. The faster operate/release times and reduced bounce make it suitable for high-speed digital switching. For applications needing mechanical relay isolation with faster switching, this is the solution.",
        highlight: "High-frequency reed relay for 500Hz switching applications"
      },
      alternativeParts: [
        {
          partNumber: "KRE1A05",
          brand: "Guanxi",
          reason: "Standard speed option",
          comparison: "KRE5A05 (500Hz) vs KRE1A05 (100Hz) - high vs standard frequency",
          useCase: "Use standard version for cost savings if <100Hz needed",
          parameters: { "Max Frequency": "100Hz", "Operate Time": "1.0ms" },
          priceDifference: "-25%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQY214",
          brand: "Guanxi",
          reason: "Solid-state alternative",
          comparison: "KRE5A05 vs KAQY214 - mechanical vs solid-state",
          useCase: "Use SSR for even higher frequency switching",
          parameters: { "Type": "MOSFET SSR", "Max Frequency": "Unlimited" },
          priceDifference: "+10%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Flyback Diode 1N4148", description: "Coil suppression diode", category: "Protection" },
        { partNumber: "Fast Driver Circuit", description: "High-speed coil driver", category: "Driver" },
        { partNumber: "Snubber Circuit", description: "Contact protection", category: "Passive" }
      ],
      faqs: [
        {
          question: "What limits reed relay switching frequency?",
          answer: "Switching frequency is limited by: (1) Reed blade mechanical resonance; (2) Contact bounce time; (3) Coil magnetic field buildup/decay; (4) Contact erosion at high frequency. KRE5A05 optimizes these factors for 500Hz operation vs 100Hz for standard relays.",
          decisionGuide: "Mechanical and magnetic factors limit frequency.",
          keywords: ["frequency limit", "mechanical", "resonance" ]
        },
        {
          question: "Does high-frequency switching reduce relay life?",
          answer: "Life at high frequency depends on load conditions. At low-level loads (dry switching), life remains high even at 500Hz. At rated loads, high-frequency operation increases contact erosion. For maximum life at high frequency, switch lower currents or use solid-state relays.",
          decisionGuide: "Life depends on load - lower current for longer life.",
          keywords: ["relay life", "high frequency", "contact erosion" ]
        },
        {
          question: "What driver circuit is recommended for 500Hz operation?",
          answer: "For 500Hz operation, use a fast coil driver with: (1) Quick current buildup (low coil resistance); (2) Fast current decay (active clamp or Zener diode); (3) Adequate drive current. Standard flyback diodes slow release time - use Zener or TVS for faster switching.",
          decisionGuide: "Use fast driver with active clamp for high frequency.",
          keywords: ["driver circuit", "fast switching", "coil driver" ]
        },
        {
          question: "Can KRE5A05 be used for PWM applications?",
          answer: "While KRE5A05 can switch at 500Hz, it's not ideal for PWM due to mechanical limitations. The contact bounce and finite operate/release times create timing uncertainty. For PWM applications, use solid-state relays which provide precise, bounce-free switching.",
          decisionGuide: "Not ideal for PWM - use SSRs for PWM applications.",
          keywords: ["PWM", "timing", "solid-state" ]
        },
        {
          question: "What is the contact bounce time at high frequency?",
          answer: "KRE5A05 has optimized contact bounce of <0.5ms, compared to <1ms for standard reed relays. This reduced bounce is achieved through reed blade material and geometry optimization. The lower bounce allows faster settling and higher switching rates.",
          decisionGuide: "<0.5ms bounce - optimized for high speed.",
          keywords: ["contact bounce", "settling time", "optimization" ]
        }
      ]
    }
  ];
}

// 生成Automotive Photocouplers分类的6个产品
function generateAutomotiveProducts() {
  return [
    {
      partNumber: "KAQ1010A",
      name: "AEC-Q100 Transistor Photocoupler",
      shortDescription: "AEC-Q100 Grade 1 qualified transistor photocoupler with 2500V isolation, -40°C to +125°C operation for automotive.",
      descriptionParagraphs: [
        "The KAQ1010A is an AEC-Q100 Grade 1 qualified photocoupler designed specifically for automotive applications.",
        "Provides reliable signal isolation with 2500V isolation voltage and guaranteed performance from -40°C to +125°C.",
        "Meets stringent automotive quality requirements for use in vehicle electronics and safety systems."
      ],
      specifications: {
        "Output Type": "Transistor",
        "Isolation Voltage": "2500Vrms",
        "CTR": "50-300% (automotive grade)",
        "Forward Voltage": "1.2V typical",
        "Forward Current": "50mA max",
        "Collector-Emitter Voltage": "80V",
        "Package": "SOP-4",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100 Grade 1",
        "PPAP": "Level 3 available"
      },
      features: [
        "AEC-Q100 Grade 1 qualified",
        "Automotive temperature range",
        "2500V isolation voltage",
        "Tight CTR specification",
        "SOP package for SMT",
        "PPAP Level 3 support",
        "RoHS compliant"
      ],
      applications: [
        "Battery management systems",
        "Motor controllers",
        "On-board chargers",
        "DC-DC converters",
        "Automotive sensors"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Automotive Isolation",
        content: "The KAQ1010A is our entry-level automotive photocoupler. The AEC-Q100 qualification and extended temperature range make it suitable for most automotive isolation needs. I've used this in BMS communication isolation and sensor interfaces. The tight CTR specification over temperature ensures consistent performance. For automotive applications requiring reliable isolation, this is a proven solution with full PPAP support.",
        highlight: "AEC-Q100 qualified photocoupler for automotive applications"
      },
      alternativeParts: [
        {
          partNumber: "KAQ2010A",
          brand: "Guanxi",
          reason: "Higher isolation",
          comparison: "KAQ1010A (2500V) vs KAQ2010A (5000V) - different isolation",
          useCase: "Use for high-voltage EV applications",
          parameters: { "Isolation": "5000Vrms" },
          priceDifference: "+20%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "K1010",
          brand: "Guanxi",
          reason: "Commercial grade",
          comparison: "KAQ1010A vs K1010 - automotive vs commercial",
          useCase: "For non-automotive applications",
          parameters: { "Grade": "Commercial", "Temp": "-40°C to +85°C" },
          priceDifference: "-25%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor", description: "Input current limiting", category: "Passive" },
        { partNumber: "Pull-up Resistor", description: "Output pull-up", category: "Passive" },
        { partNumber: "Bypass Capacitor", description: "Decoupling", category: "Passive" }
      ],
      faqs: [
        {
          question: "What is AEC-Q100 Grade 1 qualification?",
          answer: "AEC-Q100 Grade 1 is the highest automotive qualification grade, requiring operation from -40°C to +125°C ambient. It includes rigorous testing: high-temperature operating life (HTOL), temperature cycling, ESD, and other stress tests. Grade 1 devices are suitable for under-hood and safety-critical applications.",
          decisionGuide: "Grade 1 for under-hood and safety-critical systems.",
          keywords: ["AEC-Q100", "Grade 1", "automotive qualification" ]
        },
        {
          question: "What is PPAP and why is it important?",
          answer: "PPAP (Production Part Approval Process) is an automotive industry standard for validating production processes. Level 3 PPAP includes design records, test results, process studies, and other documentation. It's required by OEMs to ensure consistent quality and traceability.",
          decisionGuide: "PPAP Level 3 required for automotive production.",
          keywords: ["PPAP", "automotive", "approval process" ]
        },
        {
          question: "How does automotive CTR differ from commercial?",
          answer: "Automotive grade photocouplers have tighter CTR specifications over the full -40°C to +125°C range. While commercial devices may specify CTR at 25°C only, automotive devices guarantee performance across the entire temperature range, ensuring reliable operation in all conditions.",
          decisionGuide: "Tighter CTR spec over full temperature range.",
          keywords: ["CTR", "temperature", "automotive grade" ]
        },
        {
          question: "What isolation voltage is needed for EV BMS?",
          answer: "EV battery management systems typically require 5000V isolation between high-voltage battery and low-voltage control circuits. Use KAQ2010A (5000V) for BMS applications. KAQ1010A (2500V) is suitable for lower voltage systems and non-BMS applications.",
          decisionGuide: "5000V for EV BMS, 2500V for other automotive.",
          keywords: ["EV BMS", "isolation voltage", "5000V" ]
        },
        {
          question: "Are automotive photocouppers more expensive?",
          answer: "Yes, automotive grade devices typically cost 20-30% more than commercial equivalents due to additional testing, qualification, and documentation requirements. However, for automotive applications, this cost is necessary to meet reliability and safety requirements.",
          decisionGuide: "20-30% premium for automotive qualification.",
          keywords: ["cost", "automotive grade", "premium" ]
        }
      ]
    },
    {
      partNumber: "KAQ2010A",
      name: "AEC-Q100 High Isolation Photocoupler",
      shortDescription: "AEC-Q100 Grade 1 qualified 5000V isolation photocoupler for high-voltage automotive applications.",
      descriptionParagraphs: [
        "The KAQ2010A provides enhanced 5000V isolation for high-voltage automotive applications such as EV battery management.",
        "AEC-Q100 Grade 1 qualified with full -40°C to +125°C operation and PPAP Level 3 documentation.",
        "The SOP-6 package provides increased creepage distance for high-voltage safety."
      ],
      specifications: {
        "Output Type": "Transistor",
        "Isolation Voltage": "5000Vrms",
        "CTR": "50-300% (automotive grade)",
        "Forward Voltage": "1.2V typical",
        "Forward Current": "50mA max",
        "Collector-Emitter Voltage": "80V",
        "Package": "SOP-6",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100 Grade 1",
        "PPAP": "Level 3 available"
      },
      features: [
        "5000V high isolation",
        "AEC-Q100 Grade 1",
        "Automotive temp range",
        "Enhanced creepage",
        "SOP-6 package",
        "PPAP support",
        "RoHS compliant"
      ],
      applications: [
        "EV battery management",
        "High-voltage isolation",
        "On-board chargers",
        "DC-DC converters",
        "Safety-critical systems"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - EV High Voltage Isolation",
        content: "The KAQ2010A is essential for EV battery management systems. The 5000V isolation meets safety requirements for high-voltage battery packs. I've used this in numerous EV BMS designs with excellent results. The SOP-6 package provides the creepage distance needed for 5000V. For any automotive application with high-voltage isolation needs, this is the part to choose. Full PPAP documentation supports production requirements.",
        highlight: "5000V automotive photocoupler for EV BMS applications"
      },
      alternativeParts: [
        {
          partNumber: "KAQ1010A",
          brand: "Guanxi",
          reason: "Standard isolation",
          comparison: "KAQ2010A (5000V) vs KAQ1010A (2500V) - different isolation",
          useCase: "Use for lower voltage automotive applications",
          parameters: { "Isolation": "2500Vrms", "Package": "SOP-4" },
          priceDifference: "-20%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "K2010",
          brand: "Guanxi",
          reason: "Commercial grade",
          comparison: "KAQ2010A vs K2010 - automotive vs commercial",
          useCase: "For non-automotive high-voltage applications",
          parameters: { "Grade": "Commercial" },
          priceDifference: "-30%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor", description: "Input current limiting", category: "Passive" },
        { partNumber: "Pull-up Resistor", description: "Output pull-up", category: "Passive" },
        { partNumber: "Bypass Capacitor", description: "Decoupling", category: "Passive" }
      ],
      faqs: [
        {
          question: "Why is 5000V isolation needed for EV BMS?",
          answer: "EV battery packs operate at 400V-800V DC. Safety standards require reinforced isolation between high-voltage battery and low-voltage control circuits. 5000V isolation provides necessary safety margin for 800V systems withstanding transient overvoltages and ensuring user safety.",
          decisionGuide: "5000V required for EV high-voltage safety.",
          keywords: ["EV BMS", "5000V", "safety isolation" ]
        },
        {
          question: "What is creepage distance and why does it matter?",
          answer: "Creepage is the shortest path along the insulation surface between conductive parts. For 5000V, adequate creepage (typically >8mm) prevents tracking and flashover. The SOP-6 package provides extended pin spacing for this requirement. PCB layout must also maintain adequate creepage.",
          decisionGuide: ">8mm creepage required for 5000V.",
          keywords: ["creepage", "tracking", "flashover" ]
        },
        {
          question: "How many photocouplers are used in a typical EV BMS?",
          answer: "A typical EV BMS uses 12-24 photocouplers: cell monitoring (1 per 12-16 cells), contactor control (2-4), current sensing (1-2), isolation monitoring (1-2), communication (2-4). A 96-cell pack typically uses ~20-24 photocouplers total.",
          decisionGuide: "12-24 photocouplers per EV BMS system.",
          keywords: ["EV BMS", "photocoupler count", "quantity" ]
        },
        {
          question: "What is the difference between SOP-4 and SOP-6 packages?",
          answer: "SOP-4 has 4 pins with standard spacing. SOP-6 has 6 pins with wider spacing for increased creepage distance. The extra pins in SOP-6 may be no-connect or used for additional shielding. SOP-6 is required for 5000V isolation, while SOP-4 is sufficient for 2500V.",
          decisionGuide: "SOP-6 for 5000V, SOP-4 for 2500V.",
          keywords: ["SOP-4", "SOP-6", "package" ]
        },
        {
          question: "Are there any special handling requirements?",
          answer: "Automotive grade devices should be handled with standard ESD precautions. Store in original packaging until use. Follow IPC/JEDEC J-STD-020 for moisture sensitivity. The devices are qualified for automotive reflow profiles. Contact BeiLuo for specific handling guidelines.",
          decisionGuide: "Standard ESD precautions, follow J-STD-020.",
          keywords: ["handling", "ESD", "moisture sensitivity" ]
        }
      ]
    },
    {
      partNumber: "KAQ5010A",
      name: "AEC-Q100 Darlington Photocoupler",
      shortDescription: "AEC-Q100 Grade 1 qualified Darlington output photocoupler with high CTR 100-300% for automotive.",
      descriptionParagraphs: [
        "The KAQ5010A is an automotive-grade Darlington output photocoupler providing high current gain for low-drive applications.",
        "Features AEC-Q100 Grade 1 qualification with CTR of 100-300% over the full automotive temperature range.",
        "Ideal for interfacing with automotive microcontrollers and low-current drive sources."
      ],
      specifications: {
        "Output Type": "Darlington",
        "Isolation Voltage": "2500Vrms",
        "CTR": "100-300% (automotive grade)",
        "Forward Voltage": "1.2V typical",
        "Forward Current": "60mA max",
        "Collector-Emitter Voltage": "35V",
        "Package": "SOP-6",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100 Grade 1",
        "PPAP": "Level 3 available"
      },
      features: [
        "Darlington high gain output",
        "AEC-Q100 Grade 1",
        "High CTR 100-300%",
        "Low input current need",
        "Automotive temp range",
        "PPAP support",
        "RoHS compliant"
      ],
      applications: [
        "MCU interfacing",
        "Low-drive applications",
        "Sensor isolation",
        "Battery monitoring",
        "Automotive controls"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Automotive Low Drive",
        content: "The KAQ5010A provides high gain for automotive applications with limited drive capability. The Darlington configuration allows direct drive from MCU GPIO pins, reducing component count. I've used this in battery monitoring systems and sensor interfaces where MCU drive current is limited. The automotive qualification ensures reliable operation in vehicle environments. For low-drive automotive isolation, this is an excellent choice.",
        highlight: "High-gain Darlington photocoupler for automotive MCU interfacing"
      },
      alternativeParts: [
        {
          partNumber: "KAQ1010A",
          brand: "Guanxi",
          reason: "Standard transistor",
          comparison: "KAQ5010A (Darlington) vs KAQ1010A (transistor) - different output types",
          useCase: "Use standard transistor for faster switching",
          parameters: { "Output": "Transistor", "CTR": "50-300%" },
          priceDifference: "-5%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KP5010",
          brand: "Guanxi",
          reason: "Commercial grade",
          comparison: "KAQ5010A vs KP5010 - automotive vs commercial",
          useCase: "For non-automotive applications",
          parameters: { "Grade": "Commercial" },
          priceDifference: "-25%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor", description: "Input current limiting", category: "Passive" },
        { partNumber: "Pull-up Resistor", description: "Output pull-up", category: "Passive" },
        { partNumber: "Bypass Capacitor", description: "Decoupling", category: "Passive" }
      ],
      faqs: [
        {
          question: "When should I use Darlington vs standard transistor output?",
          answer: "Use Darlington when: (1) Drive current is limited (MCU GPIO); (2) Higher output current needed; (3) Input current must be minimized. Use standard transistor when: (1) Switching speed is critical; (2) Lower saturation voltage needed; (3) Cost is primary concern.",
          decisionGuide: "Darlington for gain, transistor for speed.",
          keywords: ["Darlington", "transistor", "selection" ]
        },
        {
          question: "What is the trade-off of Darlington output?",
          answer: "Darlington provides higher CTR (100-300% vs 50-300%) but has trade-offs: (1) Higher saturation voltage (~1V vs 0.2V); (2) Slower switching speed; (3) Lower VCEO rating (35V vs 80V). Consider these factors for your specific application requirements.",
          decisionGuide: "Higher gain but slower and higher Vsat.",
          keywords: ["trade-off", "saturation voltage", "switching speed" ]
        },
        {
          question: "Can KAQ5010A be driven directly from 3.3V MCU?",
          answer: "Yes, KAQ5010A can be driven from 3.3V MCU. The high CTR means lower LED current is needed for the same output current. Calculate resistor: R = (3.3V - 1.2V) / If. With 5mA LED current, you get equivalent output to 10mA in standard photocouplers.",
          decisionGuide: "Yes - high CTR reduces input current requirement.",
          keywords: ["3.3V MCU", "drive", "high CTR" ]
        },
        {
          question: "What automotive applications need Darlington photocouplers?",
          answer: "Common applications include: (1) Battery cell monitoring (low current drive); (2) Sensor signal isolation; (3) MCU interfacing with limited GPIO current; (4) Low-power automotive controls. Any application where drive current is limited benefits from Darlington's high gain.",
          decisionGuide: "Use for low-drive automotive isolation needs.",
          keywords: ["applications", "low drive", "automotive" ]
        },
        {
          question: "Is the switching speed adequate for CAN bus isolation?",
          answer: "Darlington photocouplers are generally too slow for CAN bus (1Mbps). Use high-speed photocouplers like KAQ6N138A for CAN bus. Darlington types are suitable for slower signals: status indication, control signals, and low-speed communication (<100kbps).",
          decisionGuide: "Too slow for CAN - use high-speed types.",
          keywords: ["switching speed", "CAN bus", "high speed" ]
        }
      ]
    },
    {
      partNumber: "KAQ6N138A",
      name: "AEC-Q100 High Speed Photocoupler",
      shortDescription: "AEC-Q100 Grade 1 qualified 10Mbps high-speed photocoupler for automotive communication isolation.",
      descriptionParagraphs: [
        "The KAQ6N138A is a high-speed photocoupler qualified to AEC-Q100 Grade 1 for automotive communication applications.",
        "Supports data rates up to 10Mbps with excellent CMTI performance for reliable operation in noisy automotive environments.",
        "Ideal for isolated CAN bus, LIN bus, and other automotive communication protocols."
      ],
      specifications: {
        "Output Type": "Open Collector",
        "Isolation Voltage": "2500Vrms",
        "Data Rate": "10 Mbps",
        "Propagation Delay": "0.5us typical",
        "CMTI": "15kV/us min",
        "Forward Voltage": "1.4V typical",
        "Forward Current": "20mA max",
        "Package": "SOP-8",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100 Grade 1",
        "PPAP": "Level 3 available"
      },
      features: [
        "10 Mbps high speed",
        "AEC-Q100 Grade 1",
        "High CMTI 15kV/us",
        "Low propagation delay",
        "Automotive temp range",
        "SOP-8 package",
        "RoHS compliant"
      ],
      applications: [
        "Isolated CAN bus",
        "LIN bus isolation",
        "Automotive Ethernet",
        "High-speed communication",
        "Gateway modules"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Automotive Communication",
        content: "The KAQ6N138A is essential for isolated automotive communications. The 10Mbps speed handles CAN-FD and other high-speed protocols. The 15kV/us CMTI ensures reliable operation in the electrically noisy automotive environment. I've used this in gateway modules, isolated CAN interfaces, and diagnostic ports. For any automotive communication requiring isolation, this is the go-to solution.",
        highlight: "10Mbps automotive photocoupler for communication isolation"
      },
      alternativeParts: [
        {
          partNumber: "KAQ1010A",
          brand: "Guanxi",
          reason: "Standard speed",
          comparison: "KAQ6N138A (10Mbps) vs KAQ1010A (standard) - high vs standard speed",
          useCase: "Use for low-speed signals only",
          parameters: { "Speed": "Standard", "Package": "SOP-4" },
          priceDifference: "-30%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KPC6N138",
          brand: "Guanxi",
          reason: "Commercial grade",
          comparison: "KAQ6N138A vs KPC6N138 - automotive vs commercial",
          useCase: "For non-automotive high-speed applications",
          parameters: { "Grade": "Commercial" },
          priceDifference: "-25%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor", description: "Input current limiting", category: "Passive" },
        { partNumber: "Pull-up Resistor", description: "Output pull-up", category: "Passive" },
        { partNumber: "Bypass Capacitor", description: "Decoupling", category: "Passive" },
        { partNumber: "CAN Transceiver", description: "CAN bus interface", category: "Interface" }
      ],
      faqs: [
        {
          question: "What communication protocols can KAQ6N138A support?",
          answer: "KAQ6N138A supports: (1) CAN bus up to 1Mbps (including CAN-FD); (2) LIN bus at 20kbps; (3) UART/RS-232 up to 115kbps; (4) SPI up to 10Mbps; (5) General digital isolation. The 10Mbps capability covers most automotive communication needs.",
          decisionGuide: "Supports CAN, LIN, UART, SPI up to 10Mbps.",
          keywords: ["CAN bus", "LIN bus", "communication protocols" ]
        },
        {
          question: "What is CMTI and why is it important in automotive?",
          answer: "CMTI (Common Mode Transient Immunity) measures ability to reject fast voltage transients between input and output. Automotive environments have high electrical noise from ignition, fuel injectors, and motor drives. 15kV/us CMTI ensures reliable communication despite this noise.",
          decisionGuide: "High CMTI critical for automotive noise immunity.",
          keywords: ["CMTI", "noise immunity", "automotive" ]
        },
        {
          question: "Can KAQ6N138A be used for isolated ADC SPI interfaces?",
          answer: "Yes, KAQ6N138A is excellent for isolated SPI interfaces to ADCs. The 10Mbps speed supports high-sample-rate ADCs, and the low propagation delay maintains timing integrity. Use one photocoupler per SPI signal (SCLK, MOSI, MISO, CS) for complete isolation.",
          decisionGuide: "Excellent for isolated SPI to ADCs.",
          keywords: ["SPI", "ADC", "isolation" ]
        },
        {
          question: "What is the typical application circuit for CAN isolation?",
          answer: "For CAN isolation: (1) Connect TX from MCU to photocoupler input; (2) Photocoupler output to CAN transceiver TX; (3) Repeat for RX path; (4) Use pull-up resistors on outputs; (5) Add bypass capacitors; (6) Ensure proper grounding. This provides galvanic isolation for the CAN bus.",
          decisionGuide: "Isolate both TX and RX paths for complete isolation.",
          keywords: ["CAN isolation", "application circuit", "transceiver" ]
        },
        {
          question: "How does temperature affect propagation delay?",
          answer: "Propagation delay increases slightly at temperature extremes. At -40°C, delay may decrease 10-15%. At +125°C, delay may increase 15-20%. This variation is accounted for in the datasheet max specifications. For critical timing, design with margin for temperature variation.",
          decisionGuide: "±20% variation over temperature - design with margin.",
          keywords: ["propagation delay", "temperature", "timing" ]
        }
      ]
    },
    {
      partNumber: "KAQ3053A",
      name: "AEC-Q100 Triac Output Photocoupler",
      shortDescription: "AEC-Q100 Grade 1 qualified triac output photocoupler with zero-cross for automotive AC load control.",
      descriptionParagraphs: [
        "The KAQ3053A is an automotive-grade triac output photocoupler designed for AC load switching in vehicle applications.",
        "Features zero-cross switching to minimize EMI and AEC-Q100 Grade 1 qualification for reliable automotive operation.",
        "Suitable for HVAC controls, heated seats, and other AC load switching in vehicles."
      ],
      specifications: {
        "Output Type": "Triac (Zero-Cross)",
        "Isolation Voltage": "2500Vrms",
        "Blocking Voltage": "800V",
        "Load Current": "100mA continuous",
        "Surge Current": "1A (100us)",
        "Forward Voltage": "1.2V typical",
        "Forward Current": "60mA max",
        "Package": "SOP-6",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100 Grade 1",
        "PPAP": "Level 3 available"
      },
      features: [
        "Triac AC switching",
        "Zero-cross detection",
        "AEC-Q100 Grade 1",
        "800V blocking voltage",
        "Automotive temp range",
        "Low EMI emission",
        "RoHS compliant"
      ],
      applications: [
        "HVAC controls",
        "Heated seats",
        "Mirror heaters",
        "AC load switching",
        "Automotive comfort systems"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Automotive AC Control",
        content: "The KAQ3053A provides isolated AC switching for automotive comfort systems. The zero-cross switching is essential for minimizing EMI in vehicles with sensitive electronics. I've used this in HVAC controls, heated seat modules, and mirror defrosters. The automotive qualification ensures reliable operation across the vehicle's temperature range. For AC load control in vehicles, this is a reliable solution.",
        highlight: "Automotive triac photocoupler for AC load control"
      },
      alternativeParts: [
        {
          partNumber: "KMOC3053",
          brand: "Guanxi",
          reason: "Commercial grade",
          comparison: "KAQ3053A vs KMOC3053 - automotive vs commercial",
          useCase: "For non-automotive AC switching",
          parameters: { "Grade": "Commercial", "Temp": "-40°C to +85°C" },
          priceDifference: "-25%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQ1010A",
          brand: "Guanxi",
          reason: "DC switching option",
          comparison: "KAQ3053A (AC) vs KAQ1010A (DC) - different load types",
          useCase: "Use for DC load switching",
          parameters: { "Output": "Transistor", "Type": "DC" },
          priceDifference: "-10%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor", description: "LED input limiting", category: "Passive" },
        { partNumber: "Snubber Circuit", description: "RC snubber for inductive loads", category: "Passive" },
        { partNumber: "Varistor", description: "Overvoltage protection", category: "Protection" }
      ],
      faqs: [
        {
          question: "What automotive AC loads can KAQ3053A control?",
          answer: "KAQ3053A can control automotive AC loads up to 100mA at 800V. Common applications: (1) HVAC blower control; (2) Heated seats; (3) Mirror/window defrosters; (4) AC motors in comfort systems; (5) Lighting controls. For higher currents, use external triac triggered by KAQ3053A.",
          decisionGuide: "Up to 100mA AC loads - HVAC, heated seats, etc.",
          keywords: ["AC loads", "HVAC", "heated seats" ]
        },
        {
          question: "Why is zero-cross important in automotive applications?",
          answer: "Zero-cross switching minimizes EMI/RFI generation, which is critical in vehicles with: (1) Sensitive ECUs; (2) Radio receivers; (3) Navigation systems; (4) ADAS sensors. Automotive EMI standards are strict - zero-cross helps meet these requirements.",
          decisionGuide: "Zero-cross essential for automotive EMI compliance.",
          keywords: ["zero-cross", "EMI", "automotive" ]
        },
        {
          question: "Can KAQ3053A drive inductive loads like motors?",
          answer: "KAQ3053A can drive small inductive loads but requires protection. Use RC snubber across load (typically 100Ω + 0.1μF) to suppress voltage transients. For larger motors, use KAQ3053A to trigger external power triac. Always verify thermal conditions for continuous operation.",
          decisionGuide: "Use snubbers for inductive loads.",
          keywords: ["inductive load", "motor", "snubber" ]
        },
        {
          question: "What is the difference between zero-cross and random-fire types?",
          answer: "Zero-cross switches only at AC zero crossings, minimizing EMI. Random-fire switches immediately when triggered, allowing phase control for dimming. KAQ3053A is zero-cross type. Use random-fire only when phase control (dimming) is needed - with proper EMI filtering.",
          decisionGuide: "Zero-cross for standard switching, random-fire for dimming.",
          keywords: ["zero-cross", "random-fire", "phase control" ]
        },
        {
          question: "How does KAQ3053A compare to mechanical relays for automotive AC?",
          answer: "Advantages over mechanical relays: (1) Unlimited life (no contact wear); (2) Silent operation; (3) Fast switching; (4) No contact bounce; (5) No arcing; (6) Smaller size. Limitations: (1) Voltage drop when conducting; (2) Heat generation; (3) Limited current vs large EMRs.",
          decisionGuide: "Solid-state advantages for long life, silent operation.",
          keywords: ["comparison", "mechanical relay", "solid-state" ]
        }
      ]
    },
    {
      partNumber: "KAQ214A",
      name: "AEC-Q100 MOSFET Output SSR",
      shortDescription: "AEC-Q100 Grade 1 qualified 60V 400mA MOSFET output SSR for automotive DC load switching.",
      descriptionParagraphs: [
        "The KAQ214A is an automotive-grade MOSFET output solid state relay for DC load switching in vehicle applications.",
        "Capable of switching DC loads up to 60V and 400mA with low on-resistance and AEC-Q100 Grade 1 qualification.",
        "Ideal for battery management, LED lighting, and DC motor control in automotive systems."
      ],
      specifications: {
        "Output Type": "MOSFET",
        "Load Voltage": "60V DC",
        "Load Current": "400mA continuous",
        "Isolation Voltage": "2500Vrms",
        "On-Resistance": "0.5Ω typical",
        "Turn-on Time": "0.5ms typical",
        "Turn-off Time": "0.1ms typical",
        "Package": "SOP-4",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100 Grade 1",
        "PPAP": "Level 3 available"
      },
      features: [
        "400mA DC switching",
        "Low on-resistance 0.5Ω",
        "AEC-Q100 Grade 1",
        "60V load voltage",
        "Fast switching",
        "Unlimited life",
        "RoHS compliant"
      ],
      applications: [
        "Battery management",
        "LED lighting control",
        "DC motor switching",
        "Automotive sensors",
        "Power distribution"
      ],
      faeReview: {
        author: "Senior FAE Team",
        title: "FAE - Automotive DC Switching",
        content: "The KAQ214A provides solid-state DC switching for automotive applications. The 400mA rating handles most small DC loads, and the low on-resistance minimizes power loss. I use this in battery management systems for cell balancing and in LED lighting controls. The automotive qualification ensures reliable operation in the harsh vehicle environment. For DC load switching in vehicles, this is a reliable long-life solution.",
        highlight: "Automotive MOSFET SSR for DC load switching"
      },
      alternativeParts: [
        {
          partNumber: "KAQY214",
          brand: "Guanxi",
          reason: "Commercial grade",
          comparison: "KAQ214A vs KAQY214 - automotive vs commercial",
          useCase: "For non-automotive DC switching",
          parameters: { "Grade": "Commercial", "Temp": "-40°C to +85°C" },
          priceDifference: "-25%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "KAQ1010A",
          brand: "Guanxi",
          reason: "Signal isolation option",
          comparison: "KAQ214A (power) vs KAQ1010A (signal) - different applications",
          useCase: "Use for signal isolation, not power switching",
          parameters: { "Type": "Photocoupler", "Application": "Signal" },
          priceDifference: "-30%",
          stockStatus: "In Stock"
        }
      ],
      companionParts: [
        { partNumber: "Current Limit Resistor", description: "LED input limiting", category: "Passive" },
        { partNumber: "Heat Sink Pad", description: "Thermal management", category: "Thermal" },
        { partNumber: "Bypass Capacitor", description: "Decoupling", category: "Passive" }
      ],
      faqs: [
        {
          question: "What automotive DC loads can KAQ214A switch?",
          answer: "KAQ214A can switch DC loads up to 60V and 400mA. Common automotive applications: (1) LED lighting (interior, exterior); (2) Small DC motors (mirrors, locks); (3) Battery cell balancing; (4) Sensor power switching; (5) Low-power heater elements. Calculate power dissipation for thermal design.",
          decisionGuide: "Up to 60V 400mA DC loads - LEDs, motors, etc.",
          keywords: ["DC loads", "LED", "motor", "automotive" ]
        },
        {
          question: "What is the power dissipation at rated current?",
          answer: "At 400mA with 0.5Ω on-resistance: P = I²R = 0.4² × 0.5 = 0.08W. This low dissipation allows continuous operation without heat sink in most conditions. At high ambient temperatures (>100°C), ensure adequate PCB copper area for heat spreading.",
          decisionGuide: "0.08W at rated current - minimal heating.",
          keywords: ["power dissipation", "thermal", "heat" ]
        },
        {
          question: "Can KAQ214A be used for 12V automotive systems?",
          answer: "Yes, KAQ214A is ideal for 12V automotive systems. The 60V rating provides excellent margin for 12V operation (including load dump transients up to 40V). The 400mA current handles most 12V loads. For 48V mild-hybrid systems, the 60V rating is also adequate.",
          decisionGuide: "Excellent for 12V and 48V automotive systems.",
          keywords: ["12V", "48V", "automotive systems" ]
        },
        {
          question: "How does KAQ214A compare to mechanical relays?",
          answer: "Advantages: (1) Unlimited switching life; (2) Silent operation; (3) Fast <1ms switching; (4) No contact bounce; (5) No arcing; (6) Smaller size. Trade-offs: (1) 0.2V drop at 400mA; (2) Generates some heat; (3) DC only (no AC switching). For high-frequency switching, SSRs are superior.",
          decisionGuide: "SSRs excel in high-frequency, long-life applications.",
          keywords: ["comparison", "mechanical relay", "advantages" ]
        },
        {
          question: "What protection is needed for automotive applications?",
          answer: "For automotive use: (1) Transient protection (TVS diodes) for load dump; (2) Reverse polarity protection; (3) Current limiting for LED loads; (4) Thermal management for continuous operation. The SSR itself has internal protection, but external components ensure system-level reliability.",
          decisionGuide: "Add TVS, reverse polarity, and current limiting.",
          keywords: ["protection", "automotive", "load dump" ]
        }
      ]
    }
  ];
}

// 生成新分类的函数
function generateNewCategories() {
  return [
    {
      id: "solid-state-relays",
      name: "Solid State Relays (SSR)",
      slug: "solid-state-relays",
      description: "High-reliability solid state relays for AC and DC switching with MOSFET and Triac outputs.",
      longDescription: "Guanxi solid state relays provide silent, long-life switching for industrial and consumer applications. Available in MOSFET output for DC loads and Triac output for AC loads. Features include zero-cross switching, high isolation voltage, and compact packages. As your authorized Guanxi distributor, we provide comprehensive technical support and selection guidance for your SSR requirements.",
      series: ["KAQY-MOSFET Series", "KAQY-TRIAC Series"],
      selectionGuide: {
        title: "SSR Selection Guide",
        description: "Learn how to select the right solid state relay for your application.",
        articleId: "guanxi-ssr-guide",
        articleLink: "/guanxi/support/guanxi-ssr-guide.html"
      },
      selectionGuideLink: {
        url: "/guanxi/support/guanxi-ssr-guide.html",
        text: "View SSR Selection Guide"
      },
      faqs: [
        {
          question: "What is the difference between MOSFET and Triac SSRs?",
          answer: "MOSFET output SSRs are designed for DC load switching with low on-resistance and fast response. Triac output SSRs are for AC loads and provide zero-cross switching to minimize EMI. Choose MOSFET for DC, Triac for AC applications.",
          decisionGuide: "Use MOSFET for DC, Triac for AC switching.",
          keywords: ["MOSFET SSR", "Triac SSR", "DC vs AC" ]
        },
        {
          question: "Do SSRs require heat sinks?",
          answer: "SSRs may require heat sinks depending on load current and ambient temperature. Calculate power dissipation: P = I² × Rds(on) for DC, P = Vdrop × I for AC. If case temperature exceeds 85°C, use a heat sink. Contact BeiLuo FAE for thermal design assistance.",
          decisionGuide: "Use heat sink if case temp exceeds 85°C.",
          keywords: ["heat sink", "thermal design", "cooling" ]
        },
        {
          question: "What is zero-cross switching?",
          answer: "Zero-cross switching turns the SSR on only when AC voltage crosses zero. This minimizes EMI/RFI, reduces inrush current, and extends load life. It's ideal for resistive loads. Use random-fire SSRs for phase-control applications like dimming.",
          decisionGuide: "Use zero-cross for resistive loads, random-fire for phase control.",
          keywords: ["zero-cross", "EMI", "switching" ]
        },
        {
          question: "Can SSRs replace mechanical relays?",
          answer: "SSRs can replace mechanical relays in many applications with advantages: unlimited life, silent operation, fast switching, no bounce. However, SSRs have voltage drop (heat generation) and may not suit very low current applications. Evaluate based on your specific requirements.",
          decisionGuide: "SSRs excel in high-frequency, long-life applications.",
          keywords: ["relay replacement", "comparison", "advantages" ]
        },
        {
          question: "What protection is needed for SSRs?",
          answer: "SSRs need protection for inductive loads: use freewheel diodes for DC, RC snubbers or MOVs for AC. Overcurrent protection (fuses) is recommended. Ensure voltage ratings have margin above peak transients. Proper heat sinking prevents thermal damage.",
          decisionGuide: "Use snubbers for inductive loads, fuses for overcurrent.",
          keywords: ["protection", "snubber", "inductive load" ]
        }
      ],
      products: generateSSRProducts()
    },
    {
      id: "reed-relays",
      name: "Reed Relays",
      slug: "reed-relays",
      description: "High-quality reed relays and reed sensors for switching and sensing applications with hermetically sealed contacts.",
      longDescription: "Guanxi reed relays feature hermetically sealed reed switches providing reliable switching for test equipment, medical devices, and industrial controls. Available in SPST, SPDT, and DPST configurations with various coil voltages. The sealed contacts ensure long life and consistent performance. As your authorized Guanxi distributor, we provide comprehensive technical support and selection guidance for your reed relay needs.",
      series: ["KRE Series"],
      selectionGuide: {
        title: "Reed Relay Selection Guide",
        description: "Learn how to select the right reed relay for your application.",
        articleId: "guanxi-reed-relay-guide",
        articleLink: "/guanxi/support/guanxi-reed-relay-guide.html"
      },
      selectionGuideLink: {
        url: "/guanxi/support/guanxi-reed-relay-guide.html",
        text: "View Reed Relay Selection Guide"
      },
      faqs: [
        {
          question: "What are the advantages of reed relays over EMRs?",
          answer: "Reed relays offer: hermetically sealed contacts for long life (>100M operations), smaller size, lower coil power, faster switching, and no contact contamination. EMRs offer higher current capacity and lower contact resistance for high-current applications.",
          decisionGuide: "Reed relays for long life/sealing, EMRs for high current.",
          keywords: ["reed relay", "EMR", "advantages" ]
        },
        {
          question: "What coil voltage should I choose?",
          answer: "Choose coil voltage based on your control system: 5V for logic-level control (MCU, TTL), 12V for industrial controls and PLCs, 24V for industrial systems with long cable runs. Higher voltage coils draw less current for the same power.",
          decisionGuide: "5V for logic, 12V/24V for industrial.",
          keywords: ["coil voltage", "5V", "12V", "24V" ]
        },
        {
          question: "Do reed relays need coil suppression?",
          answer: "Yes, always use a flyback diode across the coil to suppress voltage spikes when the relay turns off. Without protection, inductive kickback can damage driving circuits. A standard 1N4148 or 1N4001 diode is sufficient for most applications.",
          decisionGuide: "Always use flyback diode for protection.",
          keywords: ["coil suppression", "flyback diode", "protection" ]
        },
        {
          question: "Can reed relays switch AC and DC?",
          answer: "Yes, reed relays can switch both AC and DC within their ratings. The reed switch is polarity-independent. For AC switching, ensure voltage and current ratings are not exceeded. Contact life is typically longer for DC switching than AC due to arcing differences.",
          decisionGuide: "Both AC and DC switching supported.",
          keywords: ["AC switching", "DC switching", "polarity" ]
        },
        {
          question: "What is the typical life of reed relays?",
          answer: "Reed relays achieve >100 million operations at rated load and >1 billion operations at low-level loads (dry switching). The hermetically sealed contacts prevent contamination, ensuring consistent contact resistance over the relay's lifetime.",
          decisionGuide: "100M+ at rated load, 1B+ dry switching.",
          keywords: ["relay life", "operations", "reliability" ]
        }
      ],
      products: generateReedRelayProducts()
    },
    {
      id: "automotive-photocouplers",
      name: "Automotive Photocouplers",
      slug: "automotive-photocouplers",
      description: "AEC-Q100 qualified photocouplers for automotive applications including BMS and charging systems.",
      longDescription: "Guanxi automotive photocouplers are AEC-Q100 qualified for reliable operation in vehicle environments. Features include extended temperature range (-40°C to +125°C), high isolation voltage, and enhanced reliability. Ideal for battery management systems, on-board chargers, and motor controllers. As your authorized Guanxi distributor, we provide comprehensive technical support and selection guidance for automotive applications.",
      series: ["KAQ Series"],
      selectionGuide: {
        title: "Automotive Photocoupler Selection Guide",
        description: "Learn how to select the right automotive photocoupler for your application.",
        articleId: "guanxi-automotive-guide",
        articleLink: "/guanxi/support/guanxi-automotive-guide.html"
      },
      selectionGuideLink: {
        url: "/guanxi/support/guanxi-automotive-guide.html",
        text: "View Automotive Selection Guide"
      },
      faqs: [
        {
          question: "What is AEC-Q100 qualification?",
          answer: "AEC-Q100 is the automotive industry standard for integrated circuit qualification. It includes stress tests like HTOL, temperature cycling, and ESD testing. Grade 1 (-40°C to +125°C) is required for under-hood applications. Guanxi automotive photocouplers meet these stringent requirements.",
          decisionGuide: "Specify AEC-Q100 Grade 1 for automotive under-hood.",
          keywords: ["AEC-Q100", "automotive qualification", "Grade 1" ]
        },
        {
          question: "What isolation voltage is needed for EV BMS?",
          answer: "EV battery management systems typically require 5000V isolation between high-voltage battery and low-voltage control circuits. Guanxi KAQ series provides this high isolation with AEC-Q100 qualification. Always verify against your specific safety requirements.",
          decisionGuide: "Use 5000V isolation for EV BMS applications.",
          keywords: ["EV BMS", "isolation voltage", "5000V" ]
        },
        {
          question: "Are PPAP documents available?",
          answer: "Yes, Guanxi provides PPAP Level 3 documentation for automotive customers. This includes design records, test results, process studies, and other required documentation. Contact BeiLuo to request PPAP packages for your automotive projects.",
          decisionGuide: "Request PPAP Level 3 for automotive production.",
          keywords: ["PPAP", "automotive documentation", "Level 3" ]
        },
        {
          question: "What temperature range do automotive photocouplers support?",
          answer: "Guanxi AEC-Q100 Grade 1 photocouplers support -40°C to +125°C operating temperature. This covers under-hood, battery pack, and cabin applications. Some models extend to +150°C for extreme environments. Verify specific model ratings.",
          decisionGuide: "Grade 1 (-40°C to +125°C) for most automotive.",
          keywords: ["temperature range", "Grade 1", "automotive" ]
        },
        {
          question: "How many photocouplers are used in a typical BMS?",
          answer: "A typical EV BMS uses 12-24 photocouplers: cell monitoring (1 per 12-16 cells), contactor control (2-4), current sensing (1-2), isolation monitoring (1-2), communication (2-4). A 96-cell pack typically uses ~24 photocouplers total.",
          decisionGuide: "Plan for 12-24 photocouplers depending on configuration.",
          keywords: ["BMS", "photocoupler count", "EV" ]
        }
      ],
      products: generateAutomotiveProducts()
    }
  ];
}

// 主函数
function main() {
  console.log('Adding missing product categories to Guanxi...\n');
  
  // 生成新分类
  const newCategories = generateNewCategories();
  
  // 添加到现有分类
  productsData.categories.push(...newCategories);
  
  // 保存更新后的文件
  fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');
  
  console.log(`✅ Added ${newCategories.length} new categories:`);
  newCategories.forEach(cat => {
    console.log(`   - ${cat.name} (${cat.products.length} products)`);
  });
  console.log(`\n📊 Total categories: ${productsData.categories.length}`);
  console.log(`📊 Total products: ${productsData.categories.reduce((sum, cat) => sum + cat.products.length, 0)}`);
  console.log('\n✅ Guanxi products.json updated successfully!');
}

main();
