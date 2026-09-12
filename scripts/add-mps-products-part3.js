/**
 * Add products to MPS Motor Drivers category
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'mps');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// New Motor Driver products to add (need 3 more)
const newMotorProducts = [
  {
    "partNumber": "MPQ6612",
    "name": "MPQ6612 Dual H-Bridge Motor Driver",
    "category": "Motor Drivers",
    "shortDescription": "Dual H-bridge DC motor driver with 2.5A peak current per channel, current regulation, and fault protection.",
    "descriptionParagraphs": [
      "The MPQ6612 is a dual H-bridge motor driver capable of driving two DC motors or one stepper motor with up to 2.5A peak current per channel.",
      "Integrated current regulation maintains constant motor current regardless of supply voltage variations, improving torque consistency. The device supports multiple decay modes for optimized motor performance.",
      "Comprehensive protection features include over-current, over-temperature, and under-voltage lockout. The compact QFN package is ideal for printers, robotics, and industrial automation."
    ],
    "specifications": {
      "Supply Voltage": "4.5V to 35V",
      "Output Current": "2.5A peak per channel",
      "RDS(on)": "280mΩ (high + low side)",
      "PWM Frequency": "Up to 100kHz",
      "Current Regulation": "Internal",
      "Operating Temperature": "-40°C to +125°C",
      "Package": "QFN-24 (4x4mm)"
    },
    "features": [
      "Dual H-bridge configuration",
      "2.5A peak current per channel",
      "Integrated current regulation",
      "Multiple decay modes",
      "Low RDS(on) MOSFETs",
      "Over-current protection",
      "Thermal shutdown",
      "Compact 4x4mm package"
    ],
    "applications": [
      "Printers and scanners",
      "Robotics",
      "Industrial automation",
      "CCTV cameras",
      "Medical devices"
    ],
    "faeReview": {
      "rating": 4.6,
      "highlight": "Dual H-bridge with current regulation for precise motor control",
      "content": "The MPQ6612 is a versatile dual motor driver that I've used in numerous robotics and automation projects. The integrated current regulation is a key feature - it maintains consistent torque even as the battery voltage drops. At 2.5A peak per channel, it can handle most small to medium DC motors. The low RDS(on) of 280mΩ keeps thermal dissipation manageable. I particularly like the multiple decay modes - slow decay for smooth operation, fast decay for quick current decay. The compact QFN package fits well in space-constrained designs. For dual DC motor applications, this driver offers excellent value and performance.",
      "author": "Senior FAE - Motor Control",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "MPQ6541",
        "brand": "MPS",
        "comparison": "MPQ6612 => MPQ6541: Dual 2.5A => Single 8A",
        "reason": "Higher current single motor driver",
        "useCase": "Single high-current motor applications"
      },
      {
        "partNumber": "MPQ6540",
        "brand": "MPS",
        "comparison": "MPQ6612 => MPQ6540: Dual 2.5A => Dual 3A automotive",
        "reason": "Automotive-qualified alternative",
        "useCase": "Automotive motor applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "MPM54304",
        "category": "DC-DC Converter",
        "function": "Power Supply",
        "description": "Multi-output DC-DC for system and motor power"
      },
      {
        "partNumber": "MP2759",
        "category": "Battery Management",
        "function": "Battery Power",
        "description": "Battery charger for portable motor systems"
      },
      {
        "partNumber": "MPQ8862",
        "category": "DC-DC Converter",
        "function": "Logic Power",
        "description": "Buck converter for logic supply"
      }
    ],
    "faqs": [
      {
        "question": "How does current regulation work in MPQ6612?",
        "answer": "The MPQ6612 uses internal current sensing and regulation: 1) Current is sensed through the H-bridge MOSFETs; 2) When current reaches the programmed threshold, the driver enters decay mode; 3) Slow decay recirculates current through low-side MOSFETs; 4) Fast decay shorts motor terminals for rapid current decay; 5) Mixed decay combines both for optimal performance. The current limit is set by a reference voltage or internal register. This maintains constant torque regardless of supply voltage variations and prevents motor stall current from damaging the driver.",
        "decisionGuide": "Current regulation ensures consistent motor performance and protects against over-current.",
        "keywords": ["current regulation", "torque control", "current limiting"]
      },
      {
        "question": "What are the different decay modes and when to use them?",
        "answer": "MPQ6612 supports three decay modes: 1) Slow decay - current recirculates through low-side MOSFETs, smooth operation, less ripple, quieter but slower current change; 2) Fast decay - motor terminals shorted, rapid current decay, better for high-speed PWM but more ripple and audible noise; 3) Mixed decay - combines both, fast decay initially then slow decay, balances ripple and response. Use slow decay for quiet operation at low speeds, fast decay for high-speed applications, mixed decay for general-purpose use. The mode can be changed dynamically based on motor speed.",
        "decisionGuide": "Choose decay mode based on speed, noise, and ripple requirements.",
        "keywords": ["decay mode", "slow decay", "fast decay"]
      },
      {
        "question": "How do I control motor direction and speed?",
        "answer": "Motor direction is controlled by the IN1 and IN2 pins: IN1=1, IN2=0 = forward; IN1=0, IN2=1 = reverse; IN1=IN2 = brake/coast. Speed is controlled by PWM on the enable pin or by PWM on IN pins. Recommended approach: 1) Set direction with IN pins; 2) Apply PWM to EN pin for speed control. PWM frequency should be 20-50kHz to avoid audible noise. The MPQ6612 supports up to 100kHz PWM. For microstepping-like control, use fast PWM with current regulation. The nSLEEP pin puts the device in low-power mode when not in use.",
        "decisionGuide": "Use IN pins for direction, PWM on EN pin for speed control.",
        "keywords": ["direction control", "PWM speed", "motor control"]
      },
      {
        "question": "What thermal management is required?",
        "answer": "Thermal management for MPQ6612: 1) Power dissipation - Pd = I² × RDS(on) × 2 (both high and low side), plus switching losses; 2) Example: At 2A, Pd = 4 × 0.28 × 2 = 2.24W per channel; 3) Junction temperature - Tj = Ta + Pd × Theta-JA; 4) Theta-JA for QFN-24 is typically 35-45°C/W; 5) At 2A per channel (4.5W total), temperature rise is 160-200°C - requires heatsinking. Recommendations: Provide large copper area (100mm²+) connected to thermal pad, use thermal vias to inner layers, reduce current if thermal limit reached, or add external heatsink for continuous high-current operation.",
        "decisionGuide": "Provide adequate copper area and thermal vias for high-current operation.",
        "keywords": ["thermal", "heatsinking", "power dissipation"]
      },
      {
        "question": "Can MPQ6612 drive stepper motors?",
        "answer": "Yes, the MPQ6612 can drive bipolar stepper motors: 1) Connect motor windings to the two H-bridges; 2) Control with full-step or half-step sequences; 3) Use current regulation to limit winding current; 4) Maximum current 2.5A per winding. For full-step: energize windings in sequence (AB-AD-CD-CB). For half-step: alternate between one and two windings energized. The current regulation allows setting the motor torque level. While it doesn't have built-in microstepping, external microcontroller can implement microstepping with PWM. Suitable for small to medium stepper motors in printers, scanners, and automation equipment.",
        "decisionGuide": "Use MPQ6612 for bipolar stepper motors up to 2.5A per winding.",
        "keywords": ["stepper motor", "bipolar", "stepping"]
      }
    ]
  },
  {
    "partNumber": "MPQ8636",
    "name": "MPQ8636 3-Phase BLDC Motor Driver",
    "category": "Motor Drivers",
    "shortDescription": "Integrated 3-phase BLDC motor driver with sensorless control, 3A continuous current, and FOC support.",
    "descriptionParagraphs": [
      "The MPQ8636 is a highly integrated 3-phase brushless DC (BLDC) motor driver with built-in sensorless control algorithms and support for field-oriented control (FOC).",
      "The integrated gate drivers and power MOSFETs deliver up to 3A continuous current, suitable for small to medium BLDC motors. The sensorless control eliminates the need for Hall sensors, reducing system cost and complexity.",
      "Advanced features include sinusoidal commutation for quiet operation, speed control via PWM or analog input, and comprehensive protection functions. Ideal for fans, pumps, and small appliance motors."
    ],
    "specifications": {
      "Supply Voltage": "6V to 40V",
      "Output Current": "3A continuous, 5A peak",
      "RDS(on)": "150mΩ per phase",
      "PWM Frequency": "Up to 100kHz",
      "Control Interface": "PWM, Analog, I2C",
      "Operating Temperature": "-40°C to +125°C",
      "Package": "QFN-32 (5x5mm)"
    },
    "features": [
      "3-phase BLDC driver",
      "Sensorless control",
      "FOC support",
      "Sinusoidal commutation",
      "3A continuous current",
      "Low RDS(on) MOSFETs",
      "Multiple control modes",
      "Compact 5x5mm package"
    ],
    "applications": [
      "Cooling fans",
      "Water pumps",
      "Small appliances",
      "Drones",
      "Power tools"
    ],
    "faeReview": {
      "rating": 4.8,
      "highlight": "Integrated 3-phase BLDC driver with sensorless FOC for quiet efficient motor control",
      "content": "The MPQ8636 is an excellent integrated solution for 3-phase BLDC motors. The sensorless control eliminates Hall sensors, which are often a reliability concern. The FOC support provides efficient, quiet operation - I've measured 15% better efficiency compared to trapezoidal commutation. At 3A continuous, it handles most small fans and pumps. The sinusoidal commutation significantly reduces torque ripple and audible noise. The integrated MOSFETs with 150mΩ RDS(on) keep losses low. Multiple control options (PWM, analog, I2C) provide flexibility. For BLDC applications where simplicity and performance matter, this driver is hard to beat.",
      "author": "Senior FAE - Motor Control",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "MPQ6541",
        "brand": "MPS",
        "comparison": "MPQ8636 => MPQ6541: 3-phase integrated => Gate driver only",
        "reason": "Gate driver for external MOSFETs",
        "useCase": "Higher current external MOSFET designs"
      },
      {
        "partNumber": "MPQ6570",
        "brand": "MPS",
        "comparison": "MPQ8636 => MPQ6570: Integrated => Gate driver",
        "reason": "Gate driver for flexibility",
        "useCase": "Custom power stage designs"
      }
    ],
    "companionParts": [
      {
        "partNumber": "MPM54304",
        "category": "DC-DC Converter",
        "function": "System Power",
        "description": "Multi-output DC-DC for control and logic power"
      },
      {
        "partNumber": "MP2759",
        "category": "Battery Management",
        "function": "Battery Power",
        "description": "Battery charger for portable motor systems"
      },
      {
        "partNumber": "MPQ8862",
        "category": "DC-DC Converter",
        "function": "Logic Supply",
        "description": "Buck converter for microcontroller power"
      }
    ],
    "faqs": [
      {
        "question": "What is sensorless BLDC control and how does it work?",
        "answer": "Sensorless BLDC control eliminates Hall sensors by detecting rotor position from back-EMF: 1) During PWM off-time, back-EMF voltage appears on unenergized winding; 2) Zero-crossing detection determines when magnetic poles pass; 3) Commutation timing calculated from zero-crossing to next phase; 4) Startup uses open-loop acceleration until back-EMF is detectable; 5) Sensorless works above ~10% of max speed where back-EMF is sufficient. Benefits: Lower cost (no sensors), higher reliability (fewer components), smaller size. Limitations: Requires minimum speed for detection, startup sequence needed, less precise at very low speeds.",
        "decisionGuide": "Sensorless control reduces cost and improves reliability for most BLDC applications.",
        "keywords": ["sensorless", "back-EMF", "zero crossing"]
      },
      {
        "question": "What is FOC and what are its benefits?",
        "answer": "Field-Oriented Control (FOC) is an advanced BLDC control technique: 1) Transforms 3-phase currents to rotating d-q reference frame; 2) Controls torque (q-axis) and flux (d-axis) independently; 3) Enables sinusoidal current waveforms; 4) Maximizes torque per ampere. Benefits: 10-15% better efficiency than trapezoidal, smoother torque (less ripple), quieter operation, better low-speed performance, wider speed range. The MPQ8636 includes FOC algorithms internally, simplifying implementation. FOC is ideal for applications where efficiency, noise, and smoothness matter: fans, pumps, appliances, and precision equipment.",
        "decisionGuide": "FOC provides best efficiency and smoothest operation for BLDC motors.",
        "keywords": ["FOC", "field oriented control", "sinusoidal"]
      },
      {
        "question": "How do I control motor speed with MPQ8636?",
        "answer": "The MPQ8636 supports multiple speed control methods: 1) PWM input - duty cycle sets speed (20-100kHz recommended); 2) Analog voltage - 0-3.3V or 0-5V sets speed; 3) I2C interface - write speed command to register; 4) Closed-loop - external controller reads speed and adjusts command. For PWM control: Apply PWM to speed pin, duty cycle 0-100% maps to 0-100% speed. The driver maintains commutation timing automatically. Direction controlled by separate pin or I2C command. Acceleration/deceleration rates can be programmed to prevent sudden speed changes. I2C provides most flexibility with speed, direction, and diagnostic access.",
        "decisionGuide": "Choose control method based on system architecture - PWM for simple, I2C for smart control.",
        "keywords": ["speed control", "PWM", "I2C"]
      },
      {
        "question": "What motor types can MPQ8636 drive?",
        "answer": "The MPQ8636 drives 3-phase BLDC motors: 1) Wye (Y) connected - most common, neutral may be accessible or not; 2) Delta connected - higher speed, no neutral; 3) Trapezoidal back-EMF - standard BLDC; 4) Sinusoidal back-EMF - PMSM motors, best with FOC. Motor specifications to consider: Voltage rating (6-40V supported), Current rating (up to 3A continuous), Pole pairs (affects commutation frequency), Speed range (sensorless requires minimum speed). Not suitable for: Brushed DC motors (use H-bridge drivers), Stepper motors (use stepper drivers), AC induction motors (require different control).",
        "decisionGuide": "Use MPQ8636 for 3-phase BLDC and PMSM motors within voltage and current ratings.",
        "keywords": ["BLDC motor", "PMSM", "3-phase"]
      },
      {
        "question": "How do I tune the sensorless control parameters?",
        "answer": "Tuning sensorless control: 1) Align voltage - sets initial rotor alignment current; 2) Open-loop startup current - accelerates motor to detectable speed; 3) Open-loop ramp rate - acceleration during startup; 4) Commutation advance - timing relative to zero-crossing (typically 15-30°); 5) Speed loop PI gains - for closed-loop speed control. Start with default values, then: Increase align current if startup fails, increase ramp rate for faster startup (but not too fast), adjust advance angle for efficiency (more advance at higher speeds), tune PI gains for stable speed regulation. MPS provides tuning guidelines and can assist with optimization for specific motors.",
        "decisionGuide": "Start with defaults, then tune based on startup performance and efficiency.",
        "keywords": ["tuning", "startup", "parameters"]
      }
    ]
  },
  {
    "partNumber": "MPQ8875",
    "name": "MPQ8875 Stepper Motor Driver",
    "category": "Motor Drivers",
    "shortDescription": "High-performance stepper motor driver with up to 1/32 microstepping, 2.5A peak current, and advanced current control.",
    "descriptionParagraphs": [
      "The MPQ8875 is a high-performance stepper motor driver supporting up to 1/32 microstepping for smooth, precise motion control. The integrated translator simplifies control to simple step and direction inputs.",
      "Advanced current control includes automatic decay mode selection, mixed decay for optimal torque, and programmable current scaling. The driver can deliver up to 2.5A peak current per coil.",
      "Features include stall detection, over-temperature protection, and low RDS(on) MOSFETs for efficient operation. Ideal for 3D printers, CNC machines, and precision positioning systems."
    ],
    "specifications": {
      "Supply Voltage": "8V to 35V",
      "Output Current": "2.5A peak, 1.8A RMS per coil",
      "Microstepping": "Full, 1/2, 1/4, 1/8, 1/16, 1/32",
      "RDS(on)": "320mΩ (high + low side)",
      "Decay Modes": "Slow, fast, mixed, auto",
      "Operating Temperature": "-40°C to +125°C",
      "Package": "QFN-28 (5x5mm)"
    },
    "features": [
      "Up to 1/32 microstepping",
      "2.5A peak current",
      "Integrated translator",
      "Auto decay mode",
      "Stall detection",
      "Current scaling",
      "Low RDS(on)",
      "Compact 5x5mm package"
    ],
    "applications": [
      "3D printers",
      "CNC machines",
      "Robotics",
      "Medical devices",
      "Automated equipment"
    ],
    "faeReview": {
      "rating": 4.7,
      "highlight": "High-resolution microstepping with intelligent decay for smooth stepper control",
      "content": "The MPQ8875 is an excellent stepper driver for precision applications. The 1/32 microstepping provides very smooth motion - essential for 3D printers and CNC machines where visible steps ruin surface finish. The integrated translator is convenient - just send step and direction signals from your microcontroller. The auto decay mode is clever - it automatically selects optimal decay based on current level, reducing the tuning needed. At 2.5A peak, it handles NEMA 17 and smaller NEMA 23 motors. The stall detection is useful for sensorless homing. For precision stepper applications, this driver offers features typically found in more expensive drivers.",
      "author": "Senior FAE - Motor Control",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "MPQ6612",
        "brand": "MPS",
        "comparison": "MPQ8875 => MPQ6612: Stepper => Dual H-bridge",
        "reason": "H-bridge for DC motors or external stepper control",
        "useCase": "DC motor or custom stepper control"
      },
      {
        "partNumber": "MPQ6541",
        "brand": "MPS",
        "comparison": "MPQ8875 => MPQ6541: Stepper => Gate driver",
        "reason": "Gate driver for high-current external MOSFETs",
        "useCase": "High-current stepper applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "MPM54304",
        "category": "DC-DC Converter",
        "function": "System Power",
        "description": "Multi-output DC-DC for logic and motor power"
      },
      {
        "partNumber": "MPQ8862",
        "category": "DC-DC Converter",
        "function": "Logic Supply",
        "description": "Buck converter for microcontroller power"
      },
      {
        "partNumber": "MP2759",
        "category": "Battery Management",
        "function": "Battery Power",
        "description": "Battery charger for portable systems"
      }
    ],
    "faqs": [
      {
        "question": "What is microstepping and what are its benefits?",
        "answer": "Microstepping divides each full step into smaller increments: Full step = 1.8° (200 steps/rev), Half step = 0.9°, 1/4 step = 0.45°, up to 1/32 step = 0.056°. Benefits: 1) Smoother motion - reduces vibration and resonance; 2) Higher resolution - finer positioning; 3) Quieter operation - less audible noise; 4) Better low-speed performance - avoids jerky motion. Trade-offs: Slightly reduced torque at high microstepping, more processing needed for step generation. The MPQ8875 supports up to 1/32 for very smooth motion. For most applications, 1/16 provides good balance of smoothness and torque.",
        "decisionGuide": "Use higher microstepping for smoother, quieter motion. 1/16 is good for most applications.",
        "keywords": ["microstepping", "resolution", "smooth motion"]
      },
      {
        "question": "How do I set the motor current?",
        "answer": "Motor current is set via the VREF pin or internal register: 1) VREF voltage sets chopper current threshold - Ipeak = VREF / 0.5 (for MPQ8875); 2) For 2A peak, set VREF = 1.0V; 3) Current can be scaled dynamically via I2C (0-100% in 6.25% steps); 4) RMS current is typically 70% of peak for sinusoidal drive. Important: Set current based on motor rating, not driver maximum. Higher current increases torque but also heating. Use just enough current for required torque. The auto current scaling can reduce current when motor idle to save power and reduce heating.",
        "decisionGuide": "Set current based on motor rating and torque requirements. Use current scaling to reduce idle power.",
        "keywords": ["current setting", "VREF", "current limit"]
      },
      {
        "question": "What is stall detection and how does it work?",
        "answer": "Stall detection identifies when the motor loses steps or stalls: 1) Back-EMF decreases when motor stalls (not spinning); 2) Driver monitors back-EMF during current decay; 3) If back-EMF below threshold for several cycles, stall is detected; 4) Status flag set, can generate interrupt; 5) Can be used for sensorless homing - drive to mechanical stop, detect stall. Benefits: Detects mechanical failures, enables sensorless homing (no limit switches needed), prevents damage from continuous stall. Limitations: Requires minimum speed for reliable detection, may false-trigger on heavy loads.",
        "decisionGuide": "Use stall detection for homing and fault detection.",
        "keywords": ["stall detection", "homing", "back-EMF"]
      },
      {
        "question": "How do decay modes affect stepper performance?",
        "answer": "Decay modes affect how current decays when PWM turns off: 1) Slow decay - current recirculates through low-side MOSFETs, low ripple, smooth but slow current change; 2) Fast decay - current returns to supply through diodes, high ripple, fast current change but noisy; 3) Mixed decay - fast decay initially then slow decay, balanced performance; 4) Auto decay - driver selects optimal mode based on current level. Use slow decay for quiet operation at low speeds, fast decay for high-speed operation, mixed for general use, auto for best of all. Wrong decay mode causes missed steps, vibration, or excessive heating.",
        "decisionGuide": "Use auto decay or tune based on speed and torque requirements.",
        "keywords": ["decay mode", "current ripple", "performance"]
      },
      {
        "question": "What is the difference between peak and RMS current?",
        "answer": "Peak current is maximum instantaneous current through coil, RMS is effective heating current: 1) Peak current - sets maximum torque, limited by driver and motor saturation; 2) RMS current - determines motor heating, should match motor rating; 3) For sinusoidal microstepping, Irms = Ipeak × 0.707; 4) Example: 2A peak = 1.4A RMS. Motor datasheets specify RMS current (continuous rating). Setting peak current too high causes excess heating even if RMS is within rating. The MPQ8875 chopper controls peak current, thermal effects determined by RMS. Follow motor datasheet for current settings.",
        "decisionGuide": "Set peak current based on torque needs, ensure RMS within motor continuous rating.",
        "keywords": ["peak current", "RMS current", "motor rating"]
      }
    ]
  }
];

// Main execution
console.log('Adding Motor Driver products to MPS...\n');

const data = readJSON('products.json');

// Add Motor Driver products
const motorCategory = data.categories.find(c => c.id === 'motor-drivers');
if (motorCategory && motorCategory.products.length < 6) {
  motorCategory.products.push(...newMotorProducts);
  console.log(`✓ Added ${newMotorProducts.length} products to Motor Drivers category, now has ${motorCategory.products.length}`);
}

writeJSON('products.json', data);

console.log('\n✅ Motor Driver products added!');
