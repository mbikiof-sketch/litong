#!/usr/bin/env node
/**
 * Add remaining categories to Panjit products.json
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'panjit', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Define additional categories
const additionalCategories = [
  {
    "id": "fast-recovery-diodes",
    "name": "Fast Recovery Diodes",
    "slug": "fast-recovery-diodes",
    "description": "Panjit fast recovery diodes offer ultra-fast reverse recovery time (25-100ns) for high-frequency switching applications. Available from 50V to 1200V with various current ratings.",
    "longDescription": "Panjit's fast recovery diode portfolio is engineered for high-frequency power conversion applications where switching speed is critical. Our ultra-fast and hyperfast recovery diodes feature reverse recovery times as low as 25ns, minimizing switching losses and EMI in modern power supplies. The product range spans voltage ratings from 600V to 1200V and current ratings from 1A to 30A, serving applications from consumer electronics to industrial motor drives. Key series include UF series for general-purpose fast recovery, MUR series for ultra-fast applications, and RHRP series for hyperfast high-voltage requirements. All products feature soft recovery characteristics to reduce EMI and are available in through-hole and surface-mount packages.",
    "parameters": ["VRRM (V)", "IF(AV) (A)", "trr (ns)", "VFM (V)", "Package"],
    "applications": ["High-Frequency SMPS", "Inverters", "Welding Equipment", "Motor Drives", "PFC Circuits"],
    "series": [
      {
        "name": "UF Series",
        "description": "General-purpose fast recovery diodes with 75ns recovery time, available in 1000V rating for high-voltage applications."
      },
      {
        "name": "MUR Series",
        "description": "Ultra-fast recovery diodes with 50-60ns recovery time for high-frequency switching power supplies."
      },
      {
        "name": "RHRP Series",
        "description": "Hyperfast recovery diodes with 40-60ns recovery time for demanding high-voltage applications up to 1200V."
      }
    ],
    "selectionGuide": {
      "title": "How to Select Fast Recovery Diodes",
      "description": "Learn about reverse recovery time and selection criteria for high-frequency applications",
      "articleId": "fast-recovery-selection",
      "articleLink": "/panjit/support/fast-recovery-selection.html"
    },
    "faqs": [
      {
        "question": "What is reverse recovery time and why is it important?",
        "answer": "Reverse recovery time (trr) is the time required for a diode to switch from forward conducting state to reverse blocking state. When a diode switches off, stored charge must be removed before it can block reverse voltage. This recovery process creates a reverse current spike that causes switching losses and EMI. Shorter recovery times mean: (1) Lower switching losses - critical for high-frequency operation above 100kHz; (2) Reduced EMI - less noise generated during switching transitions; (3) Higher efficiency - less power wasted during switching; (4) Smaller magnetic components - higher frequency allows smaller transformers and inductors. For applications below 20kHz, standard recovery diodes are sufficient. For 20-100kHz, fast recovery (75ns) is recommended. For 100-500kHz, ultra-fast (50ns) or hyperfast (40ns) diodes are required.",
        "decisionGuide": "Select recovery time based on your switching frequency. Faster recovery costs more but enables higher frequency operation.",
        "keywords": ["reverse recovery", "switching losses", "EMI"]
      },
      {
        "question": "How do I calculate switching losses in fast recovery diodes?",
        "answer": "Switching losses in fast recovery diodes can be estimated using: Psw = 0.5 × VR × IRRM × trr × fsw, where VR is reverse voltage, IRRM is peak reverse recovery current, trr is reverse recovery time, and fsw is switching frequency. For example, a diode with 100ns trr switching 300V at 100kHz might have switching losses of 1-2W. To minimize losses: (1) Select diodes with shortest trr for your frequency; (2) Use soft recovery diodes to reduce IRRM; (3) Implement snubber circuits to control switching; (4) Consider SiC Schottky diodes for highest frequency applications. At frequencies above 100kHz, switching losses often exceed conduction losses, making diode selection critical for thermal design.",
        "decisionGuide": "Calculate switching losses for your application. If losses are excessive, consider faster diodes or soft switching topologies.",
        "keywords": ["switching losses", "thermal design", "high frequency"]
      },
      {
        "question": "What is the difference between fast, ultra-fast, and hyperfast recovery?",
        "answer": "The classification refers to reverse recovery time ranges: Fast Recovery: 75-150ns trr, suitable for switching frequencies up to 100kHz, commonly used in general-purpose power supplies and motor drives. Ultra-Fast Recovery: 50-75ns trr, suitable for frequencies up to 200kHz, used in high-density power supplies and PFC circuits. Hyperfast Recovery: 25-50ns trr, suitable for frequencies up to 500kHz or higher, used in high-frequency resonant converters and EV chargers. The faster the recovery, the lower the switching losses but typically higher cost. Soft recovery characteristics (gradual current transition) are preferred over snappy recovery (abrupt transition) as they generate less EMI and voltage overshoot.",
        "decisionGuide": "Match recovery speed to your switching frequency. Use fast for <100kHz, ultra-fast for 100-200kHz, hyperfast for >200kHz.",
        "keywords": ["recovery time", "fast vs ultra-fast", "hyperfast"]
      },
      {
        "question": "Can I use fast recovery diodes in bridge rectifier applications?",
        "answer": "Fast recovery diodes are generally not needed for bridge rectifier applications at line frequency (50/60Hz) because switching losses are negligible at these frequencies. Standard recovery diodes are sufficient and more cost-effective for line-frequency rectification. However, fast recovery diodes are beneficial in: (1) High-frequency inverter output rectification; (2) Secondary side rectification in high-frequency transformers; (3) Freewheeling diodes in high-frequency switching circuits; (4) PFC boost diode applications. For bridge rectifiers on the AC input side, use standard bridge rectifiers. For output rectification in switching supplies, use Schottky (low voltage) or fast recovery (high voltage) depending on voltage requirements.",
        "decisionGuide": "Use standard rectifiers for line frequency bridges. Use fast recovery for high-frequency secondary rectification.",
        "keywords": ["bridge rectifier", "line frequency", "application selection"]
      },
      {
        "question": "What causes diode snappy recovery and how can I prevent it?",
        "answer": "Snappy recovery occurs when a diode turns off abruptly, causing high di/dt and voltage overshoot due to circuit inductance. This can damage the diode and generate excessive EMI. Causes include: (1) High circuit inductance in the commutation loop; (2) Fast switching transistors driving the diode; (3) Diodes with abrupt recovery characteristics. Prevention methods: (1) Use soft recovery diodes designed for gradual current transition; (2) Minimize loop inductance with tight PCB layout; (3) Add RC snubbers across the diode to dampen voltage spikes; (4) Use saturable reactors or small inductors to slow current transitions; (5) Select diodes with specified soft recovery characteristics. Panjit's fast recovery diodes feature soft recovery design to minimize snappy behavior.",
        "decisionGuide": "Use soft recovery diodes and minimize loop inductance. Add snubbers if voltage overshoot is observed.",
        "keywords": ["snappy recovery", "soft recovery", "EMI reduction"]
      },
      {
        "question": "How do I select the voltage rating for fast recovery diodes?",
        "answer": "Voltage rating selection for fast recovery diodes follows similar principles to other diodes: VRRM should be at least 1.5-2x the maximum reverse voltage seen in the application. For PFC circuits, consider the peak output voltage plus margin. For inverter applications, consider DC bus voltage plus switching transients. Key considerations: (1) High-voltage applications (>600V) require fast recovery diodes as Schottky diodes are limited to ~200V; (2) Higher voltage diodes typically have longer recovery times - select the lowest voltage rating that meets your needs; (3) Temperature derating - maximum voltage decreases at high temperatures; (4) Safety standards may require specific voltage margins. Panjit offers fast recovery diodes from 600V to 1200V to cover most high-voltage power supply applications.",
        "decisionGuide": "Select VRRM at least 1.5x maximum operating voltage. Use lowest voltage rating that meets requirements for best performance.",
        "keywords": ["voltage rating", "PFC", "inverter"]
      }
    ],
    "products": []
  },
  {
    "id": "bridge-rectifiers",
    "name": "Bridge Rectifiers",
    "slug": "bridge-rectifiers",
    "description": "Panjit bridge rectifiers provide full-wave AC-DC conversion in compact packages. Available from 1A to 50A with various voltage ratings and mounting options.",
    "longDescription": "Panjit's bridge rectifier portfolio offers reliable AC-DC conversion solutions for power supply input stages. Our bridge rectifiers feature high surge current capability for inrush handling and are available in various packages from compact SMD for space-constrained designs to high-power chassis-mount for industrial applications. The product range covers current ratings from 0.5A to 50A and voltage ratings from 600V to 1000V, suitable for applications ranging from small adapters to large industrial power supplies. Key series include MB series for compact SMD applications, GBU series for medium-power through-hole mounting, and KBPC series for high-power chassis-mount applications. All bridge rectifiers feature low forward voltage drop and high reliability for long service life.",
    "parameters": ["VRRM (V)", "IF(AV) (A)", "IFSM (A)", "Package", "Mounting"],
    "applications": ["AC-DC Power Supplies", "Battery Chargers", "Industrial Controls", "Home Appliances", "LED Drivers"],
    "series": [
      {
        "name": "MB Series",
        "description": "Compact SMD bridge rectifiers for low-power applications up to 1A in SOIC and low-profile MBF packages."
      },
      {
        "name": "GBU Series",
        "description": "Through-hole bridge rectifiers for medium-power applications from 4A to 15A with good thermal performance."
      },
      {
        "name": "KBPC Series",
        "description": "Chassis-mount bridge rectifiers for high-power applications from 25A to 50A with threaded stud mounting."
      }
    ],
    "selectionGuide": {
      "title": "How to Select Bridge Rectifiers",
      "description": "Learn about voltage, current, and thermal considerations for AC-DC rectification",
      "articleId": "bridge-rectifier-selection",
      "articleLink": "/panjit/support/bridge-rectifier-selection.html"
    },
    "faqs": [
      {
        "question": "How do I calculate the power dissipation in a bridge rectifier?",
        "answer": "Power dissipation in a bridge rectifier is calculated as P = 2 × VF × Idc, where VF is forward voltage drop per diode and Idc is DC output current. The factor of 2 accounts for two diodes conducting simultaneously in a full-wave bridge. For example, with 1V forward drop and 5A output: P = 2 × 1V × 5A = 10W. Thermal considerations: (1) Junction temperature Tj = Ta + (P × RthJA); (2) Must keep Tj below maximum rating (typically 150°C); (3) Heat sinking required for currents above 2-3A; (4) Bridge rectifiers run hot - ensure adequate cooling. For high-current applications, consider Schottky bridges (lower VF) or chassis-mount packages with heat sinks.",
        "decisionGuide": "Calculate power dissipation and ensure adequate thermal management. Use heat sinks for currents above 3A.",
        "keywords": ["power dissipation", "thermal calculation", "heat sinking"]
      },
      {
        "question": "What voltage rating do I need for my bridge rectifier?",
        "answer": "Bridge rectifier voltage rating depends on input voltage: For 115VAC input: Use 400-600V bridges. Peak voltage is 115V × √2 = 163V, plus margin for line transients. For 230VAC or universal input (90-264VAC): Use 1000V bridges. Peak at 264V is 373V, plus margin for PFC boost if applicable. Key considerations: (1) Include 50-100% voltage margin for reliability; (2) PFC circuits may see higher voltages (400V DC bus); (3) Line transients can exceed nominal voltage; (4) Higher voltage bridges have slightly higher forward voltage. Panjit offers 600V bridges for 115V applications and 1000V bridges for universal input applications.",
        "decisionGuide": "Use 600V for 115V input, 1000V for 230V or universal input. Include margin for transients and PFC if applicable.",
        "keywords": ["voltage rating", "AC input", "PFC"]
      },
      {
        "question": "How do I handle inrush current with bridge rectifiers?",
        "answer": "Inrush current occurs at power-on when capacitors charge from zero voltage. This can be 10-50x normal current for a few milliseconds. Bridge rectifiers have IFSM (surge current) ratings for this: (1) Select bridge with IFSM rating higher than expected inrush; (2) Use NTC thermistors to limit inrush current; (3) Add series resistors or active current limit circuits; (4) Use soft-start circuits for large power supplies. Typical IFSM ratings: MB6S: 30A, GBU406: 120A, KBPC2510: 400A. For high-power supplies, consider phase-controlled soft-start or active PFC to eliminate inrush issues. Always verify inrush current with oscilloscope measurements during prototype testing.",
        "decisionGuide": "Select bridge with adequate IFSM rating. Consider inrush limiters for high-capacitance power supplies.",
        "keywords": ["inrush current", "IFSM", "soft start"]
      },
      {
        "question": "What is the difference between SMD and through-hole bridge rectifiers?",
        "answer": "SMD bridge rectifiers (MB series) offer: (1) Compact size for space-constrained designs; (2) Automated assembly compatibility; (3) Lower profile for slim designs; (4) Limited current capability (0.5-1A) due to thermal constraints; (5) Suitable for low-power adapters and LED drivers. Through-hole bridge rectifiers (GBU, KBPC series) offer: (1) Better thermal performance for higher currents; (2) Mechanical stability for heavy components; (3) Higher current capability (4-50A); (4) Chassis mounting options for high power; (5) Easier manual assembly and replacement. Selection depends on power level, thermal requirements, and assembly process. High-power applications (>10A) typically require through-hole or chassis-mount packages.",
        "decisionGuide": "Use SMD for low power (<2A) and space constraints. Use through-hole for higher power and better thermal performance.",
        "keywords": ["SMD vs through-hole", "package selection", "thermal performance"]
      },
      {
        "question": "How do I mount KBPC chassis-mount bridge rectifiers?",
        "answer": "KBPC chassis-mount bridge rectifiers require proper mounting for thermal performance: (1) Mounting surface - attach to metal chassis or heat sink using the threaded stud; (2) Thermal interface - use thermal compound or pad between bridge and mounting surface; (3) Torque - tighten to manufacturer specification (typically 0.8-1.2 Nm); (4) Isolation - use insulating washer if electrical isolation required; (5) Wire connections - use appropriate gauge wire for current rating. Thermal design: Calculate power dissipation P = 2 × VF × Idc. Ensure mounting surface can dissipate heat to maintain Tj < 150°C. For high-current applications, use forced air cooling or large heat sinks. Always verify temperature with thermocouple during testing.",
        "decisionGuide": "Mount to metal chassis or heat sink with thermal compound. Ensure adequate thermal capacity for power dissipation.",
        "keywords": ["chassis mount", "thermal management", "heat sink"]
      },
      {
        "question": "Can I parallel bridge rectifiers for higher current?",
        "answer": "Paralleling bridge rectifiers is generally not recommended due to current sharing issues. Unlike single diodes, bridge rectifiers have multiple diodes with variations in forward voltage that make current sharing unpredictable. Better alternatives: (1) Use single higher-current bridge (e.g., KBPC5010 instead of two KBPC2510s); (2) Use separate bridges for independent outputs; (3) Use Schottky output rectifiers after single bridge for higher current capability. If paralleling is necessary: (1) Use matched bridges from same production lot; (2) Add small series resistors (0.01-0.1 ohm) to improve sharing; (3) Monitor temperatures to detect imbalance; (4) Derate by 30-40% to account for uneven sharing. For most applications, selecting a single adequately-rated bridge is more reliable.",
        "decisionGuide": "Avoid paralleling bridges. Use single higher-current bridge or Schottky secondary rectifiers instead.",
        "keywords": ["parallel operation", "current sharing", "high current"]
      }
    ],
    "products": []
  },
  {
    "id": "protection-devices",
    "name": "Protection Devices",
    "slug": "protection-devices",
    "description": "Panjit TVS diodes and protection devices safeguard circuits against voltage transients, ESD, and surge events. Available in unidirectional and bidirectional configurations.",
    "longDescription": "Panjit's TVS (Transient Voltage Suppressor) diode portfolio provides fast, effective protection against voltage transients, ESD, and surge events. Our TVS diodes feature sub-nanosecond response times and high surge current capability to protect sensitive electronics from damage. The product range includes surface-mount devices for signal line protection and high-power through-hole devices for power input protection. Available in unidirectional and bidirectional configurations, with standoff voltages from 5V to 48V and peak pulse power ratings from 400W to 5000W. Key series include P4KE/P6KE/1.5KE for through-hole protection, SMBJ/SMCJ for surface-mount applications, and 5KP for high-power surge protection. All TVS diodes meet IEC 61000-4-2 ESD and IEC 61000-4-5 surge standards.",
    "parameters": ["Vrwm (V)", "Vbr (V)", "IPP (A)", "Vc (V)", "Package"],
    "applications": ["ESD Protection", "Surge Suppression", "Load Dump Protection", "Communication Lines", "Power Supply Protection"],
    "series": [
      {
        "name": "P4KE/P6KE/1.5KE Series",
        "description": "Through-hole TVS diodes with 400W/600W/1500W peak power for power line and signal protection."
      },
      {
        "name": "SMBJ/SMCJ Series",
        "description": "Surface-mount TVS diodes with 600W/1500W peak power for compact ESD and surge protection."
      },
      {
        "name": "5KP Series",
        "description": "High-power TVS diodes with 5000W peak power for severe surge and load dump protection."
      }
    ],
    "selectionGuide": {
      "title": "How to Select TVS Diodes",
      "description": "Learn about standoff voltage, clamping voltage, and power rating for effective circuit protection",
      "articleId": "tvs-selection-guide",
      "articleLink": "/panjit/support/tvs-selection-guide.html"
    },
    "faqs": [
      {
        "question": "How do I select the right standoff voltage for a TVS diode?",
        "answer": "Standoff voltage (Vrwm) is the maximum voltage the TVS can withstand in normal operation without conducting. Selection guidelines: (1) Vrwm must be higher than maximum normal operating voltage; (2) Include margin for voltage tolerances and transients; (3) For 5V circuits: use 5.0V or 6.0V TVS; (4) For 12V circuits: use 15V TVS; (5) For 24V circuits: use 24V or 27V TVS; (6) For 48V circuits: use 48V or 51V TVS. If Vrwm is too low, TVS will conduct during normal operation causing failure. If Vrwm is too high, clamping voltage may exceed protected circuit rating. Always check both Vrwm and Vc (clamping voltage) specifications.",
        "decisionGuide": "Select Vrwm above maximum normal voltage but ensure Vc is below circuit damage threshold.",
        "keywords": ["standoff voltage", "Vrwm", "selection"]
      },
      {
        "question": "What is clamping voltage and why is it important?",
        "answer": "Clamping voltage (Vc) is the maximum voltage across the TVS during a transient event when conducting peak pulse current. This is the voltage that your protected circuit will see during the surge. Critical considerations: (1) Vc must be below the damage threshold of protected components; (2) Check IC datasheets for absolute maximum voltage ratings; (3) Include safety margin - typically 10-20% below max rating; (4) Higher power TVS diodes generally have lower clamping voltage for same standoff voltage; (5) Bidirectional TVS have slightly higher Vc than unidirectional. Example: For protecting a 5V logic IC with 6V absolute max, select TVS with Vc < 5.5V at expected surge current.",
        "decisionGuide": "Ensure Vc is below your circuit's maximum voltage rating with safety margin.",
        "keywords": ["clamping voltage", "Vc", "circuit protection"]
      },
      {
        "question": "What power rating TVS diode do I need?",
        "answer": "TVS power rating (PPPM) determines surge current capability: 400W (P4KE): Suitable for ESD protection and low-energy transients on signal lines. 600W (P6KE/SMBJ): General-purpose protection for power lines and I/O ports. 1500W (1.5KE/SMCJ): Higher surge capability for industrial and automotive applications. 5000W (5KP): Severe surge protection for load dump, lightning, and industrial transients. Selection depends on: (1) Expected transient energy; (2) Source impedance of transient; (3) Standards requirements (IEC, ISO); (4) PCB layout and trace inductance. When in doubt, use higher power rating for margin. Automotive applications typically require 1500W-5000W for load dump protection.",
        "decisionGuide": "Match TVS power rating to expected transient severity. Use higher rating for automotive and industrial applications.",
        "keywords": ["power rating", "surge capability", "PPPM"]
      },
      {
        "question": "Where should I place TVS diodes for best protection?",
        "answer": "TVS placement is critical for effective protection: (1) Place as close as possible to the connector or entry point - minimizes inductance between transient source and TVS; (2) Minimize trace length between TVS and protected line - reduces voltage overshoot due to trace inductance; (3) Use ground planes for low-impedance return path - reduces ground bounce during surge; (4) For differential pairs, place TVS across each line to ground and between lines; (5) Avoid vias between TVS and protected circuit if possible. Layout guidelines: Keep traces short and wide; Use Kelvin connections; Place TVS on same layer as protected traces when possible. Poor layout can reduce effective protection by 50% or more.",
        "decisionGuide": "Place TVS at connector with minimal trace length. Use good grounding practices.",
        "keywords": ["layout", "placement", "PCB design"]
      },
      {
        "question": "What is the difference between unidirectional and bidirectional TVS?",
        "answer": "Unidirectional TVS: Conducts in reverse direction only; Suitable for DC circuits with known polarity; Lower clamping voltage for positive transients; Cathode connects to protected line, anode to ground. Bidirectional TVS: Conducts in both directions; Suitable for AC circuits or bipolar signals; Same clamping voltage for positive and negative transients; Can be used on any signal polarity. Selection: Use unidirectional for DC power rails (5V, 12V, 24V) for best protection. Use bidirectional for AC lines, data lines, and differential signals. In bidirectional TVS, two diodes are connected back-to-back, providing symmetrical protection. Clamping voltage is typically 10-15% higher than unidirectional for same standoff voltage.",
        "decisionGuide": "Use unidirectional for DC, bidirectional for AC and data lines. Unidirectional provides better protection for known polarities.",
        "keywords": ["unidirectional", "bidirectional", "polarity"]
      },
      {
        "question": "How do I protect against automotive load dump transients?",
        "answer": "Automotive load dump is a severe transient (ISO 7637-2 Pulse 5) caused by battery disconnect while alternator is charging. Characteristics: 12V system: up to 100V for 400ms; 24V system: up to 200V for 400ms; Source impedance: 0.5-4 ohms. Protection strategy: (1) Use 5000W TVS diodes (5KP series) for primary protection; (2) Place TVS at power entry point with short traces; (3) Use unidirectional TVS for DC lines; (4) Add series resistance or inductance to limit current; (5) Consider TVS + fuse combination for complete protection. TVS selection: 12V systems: 5KP22A or 5KP24A; 24V systems: 5KP36A or 5KP48A. Verify clamping voltage at expected surge current is below circuit maximum rating.",
        "decisionGuide": "Use 5000W TVS diodes for load dump protection. Place at power entry with good layout.",
        "keywords": ["load dump", "automotive", "ISO 7637"]
      }
    ],
    "products": []
  }
];

// Add products to each category
additionalCategories.forEach(cat => {
  // Find products for this category
  const catProducts = [];
  
  // Read existing products from first category and filter
  if (data.categories.length > 0 && data.categories[0].products) {
    data.categories[0].products.forEach(prod => {
      // Assign products to appropriate category based on part number prefix
      if (cat.id === 'fast-recovery-diodes' && 
          (prod.partNumber.startsWith('UF') || prod.partNumber.startsWith('MUR') || prod.partNumber.startsWith('RHRP'))) {
        catProducts.push(prod);
      } else if (cat.id === 'bridge-rectifiers' && 
          (prod.partNumber.startsWith('MB') || prod.partNumber.startsWith('GBU') || prod.partNumber.startsWith('KBPC'))) {
        catProducts.push(prod);
      } else if (cat.id === 'protection-devices' && 
          (prod.partNumber.startsWith('P') || prod.partNumber.startsWith('SM') || prod.partNumber.startsWith('1.5KE') || prod.partNumber.startsWith('5KP'))) {
        catProducts.push(prod);
      }
    });
  }
  
  cat.products = catProducts;
  data.categories.push(cat);
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));

console.log('✅ Added 3 additional categories with complete data');
console.log(`Total categories: ${data.categories.length}`);
data.categories.forEach((cat, i) => {
  console.log(`${i + 1}. ${cat.name} - ${cat.products.length} products, ${cat.faqs.length} FAQs`);
});
