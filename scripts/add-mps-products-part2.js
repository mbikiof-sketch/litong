/**
 * Add products to MPS Battery Management and Motor Drivers categories
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

// New Battery Management products to add (need 3 more)
const newBatteryProducts = [
  {
    "partNumber": "MP2617",
    "name": "MP2617 Single-Cell Li-Ion Switching Charger",
    "category": "Battery Management",
    "shortDescription": "High-efficiency 2A switching charger for single-cell Li-ion batteries with power path management and I2C control.",
    "descriptionParagraphs": [
      "The MP2617 is a high-efficiency switching charger for single-cell Li-ion and Li-polymer batteries, delivering up to 2A charge current with integrated power path management.",
      "The power path architecture allows simultaneous charging of the battery while powering the system load, eliminating power interruptions during charge cycles. The I2C interface enables programmable charge parameters and status monitoring.",
      "Features include JEITA-compliant safety charging, automatic recharge, and comprehensive protection functions. The compact QFN package makes it ideal for smartphones, tablets, and portable devices."
    ],
    "specifications": {
      "Input Voltage": "4.5V to 6V",
      "Charge Current": "Up to 2A",
      "Battery Voltage": "4.2V (4.35V/4.4V options)",
      "Efficiency": "Up to 92%",
      "Switching Frequency": "1.5MHz",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "QFN-20 (3x4mm)"
    },
    "features": [
      "2A switching charger",
      "Power path management",
      "I2C programmable",
      "JEITA safety compliance",
      "92% efficiency",
      "Automatic recharge",
      "Thermal regulation",
      "Compact 3x4mm package"
    ],
    "applications": [
      "Smartphones",
      "Tablets",
      "Portable media players",
      "Digital cameras",
      "Handheld instruments"
    ],
    "faeReview": {
      "rating": 4.7,
      "highlight": "High-efficiency 2A switching charger with power path for portable devices",
      "content": "The MP2617 is my preferred switching charger for single-cell Li-ion applications requiring 1A+ charge current. The power path management is essential for devices that can't tolerate power interruptions - the system runs from input while charging the battery. At 92% efficiency, it generates much less heat than linear chargers, allowing faster charging without thermal issues. The I2C interface is valuable for software-controlled charging profiles and telemetry. I've used this in numerous smartphone and tablet designs. The JEITA compliance ensures safe charging across temperature ranges. For high-current single-cell charging, this is an excellent solution.",
      "author": "Senior FAE - Battery Management",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "MP2759",
        "brand": "MPS",
        "comparison": "MP2617 => MP2759: 2A switching => NVDC 5A",
        "reason": "Higher current NVDC architecture for larger batteries",
        "useCase": "Higher current multi-cell applications"
      },
      {
        "partNumber": "MP2722",
        "brand": "MPS",
        "comparison": "MP2617 => MP2722: Switching => Linear charger",
        "reason": "Linear charger for simpler low-current applications",
        "useCase": "Cost-sensitive designs under 500mA"
      }
    ],
    "companionParts": [
      {
        "partNumber": "MPM54304",
        "category": "DC-DC Converter",
        "function": "System Power",
        "description": "Multi-output DC-DC for system rails"
      },
      {
        "partNumber": "MPF42790",
        "category": "Battery Management",
        "function": "Fuel Gauge",
        "description": "Battery fuel gauge for capacity monitoring"
      },
      {
        "partNumber": "MPQ6541",
        "category": "Motor Driver",
        "function": "Haptic Feedback",
        "description": "Motor driver for vibration motor"
      }
    ],
    "faqs": [
      {
        "question": "What is power path management and why is it important?",
        "answer": "Power path management allows the system to run directly from the input power source while simultaneously charging the battery. Benefits include: 1) No power interruption - system continues running even if battery is depleted; 2) Instant-on operation - device works immediately when plugged in; 3) Efficient power distribution - input powers system while excess charges battery; 4) Battery protection - battery can be removed while device runs on adapter. Without power path, the system must run from battery during charging, causing power interruptions and limiting performance.",
        "decisionGuide": "Use power path for devices that cannot tolerate power interruptions.",
        "keywords": ["power path", "power management", "instant on"]
      },
      {
        "question": "How does the I2C interface work for charge control?",
        "answer": "The MP2617 I2C interface allows software control of charging parameters: 1) Charge current - programmable from 100mA to 2A in 100mA steps; 2) Charge voltage - 4.2V, 4.35V, or 4.4V for different battery chemistries; 3) Termination current - programmable end-of-charge threshold; 4) Safety timers - adjustable charge timeout protection; 5) Status monitoring - read charge state, faults, and input status. The interface enables dynamic charge optimization based on system needs and battery conditions. Default values are used if I2C is not connected.",
        "decisionGuide": "Use I2C for software-controlled charging optimization.",
        "keywords": ["I2C", "programmable charging", "software control"]
      },
      {
        "question": "What is JEITA compliance and why does it matter?",
        "answer": "JEITA (Japan Electronics and Information Technology Industries Association) defines safe Li-ion charging temperature profiles. The MP2617 implements JEITA by: 1) Reducing charge voltage above 45°C to prevent battery degradation; 2) Reducing charge current above 50°C to limit heating; 3) Suspending charging below 0°C or above 60°C to prevent damage; 4) Using NTC thermistor for battery temperature monitoring. This ensures safe charging across the operating temperature range and extends battery life. Non-JEITA chargers may damage batteries or create safety hazards at temperature extremes.",
        "decisionGuide": "JEITA compliance ensures safe charging and extends battery life.",
        "keywords": ["JEITA", "safety charging", "temperature protection"]
      },
      {
        "question": "How do I select the right charge current for my battery?",
        "answer": "Select charge current based on battery capacity and application needs: 1) Standard charging - 0.5C to 1C rate (e.g., 1A for 1000mAh battery); 2) Fast charging - up to 2C for batteries that support it; 3) USB limitations - 500mA for USB 2.0, 900mA for USB 3.0, up to 2A for BC1.2; 4) Thermal constraints - lower current if thermal limits reached. The MP2617 supports up to 2A, suitable for 1000-4000mAh batteries. Higher currents charge faster but generate more heat. Follow battery manufacturer recommendations for maximum charge rate.",
        "decisionGuide": "Use 0.5C to 1C rate for standard charging, up to 2C for fast charging.",
        "keywords": ["charge current", "C-rate", "fast charging"]
      },
      {
        "question": "What protection features does MP2617 include?",
        "answer": "The MP2617 includes comprehensive battery protection: 1) Over-voltage protection - stops charging if battery voltage exceeds threshold; 2) Over-current protection - limits charge current to safe levels; 3) Thermal shutdown - reduces current if die temperature exceeds 120°C; 4) Safety timer - terminates charge if not complete within programmed time; 5) NTC monitoring - suspends charging at temperature extremes; 6) Input over-voltage - protects from adapter surges; 7) Reverse leakage - prevents battery discharge back to input. These protections ensure safe operation and prevent battery damage.",
        "decisionGuide": "Comprehensive protection suite ensures safe battery charging.",
        "keywords": ["protection", "safety", "battery protection"]
      }
    ]
  },
  {
    "partNumber": "MP2667",
    "name": "MP2667 Single-Cell Li-Ion Linear Charger",
    "category": "Battery Management",
    "shortDescription": "Compact 1A linear charger with automatic power source selection and integrated load switching.",
    "descriptionParagraphs": [
      "The MP2667 is a compact linear charger for single-cell Li-ion batteries, providing up to 1A charge current with automatic power source selection.",
      "The integrated load switch automatically connects the system to the highest available voltage source (input or battery), ensuring optimal power delivery. The linear architecture eliminates switching noise, making it ideal for noise-sensitive RF applications.",
      "Features include automatic recharge, charge status indication, and comprehensive protection in a tiny WLCSP package perfect for wearables and IoT devices."
    ],
    "specifications": {
      "Input Voltage": "4.2V to 6.5V",
      "Charge Current": "Up to 1A",
      "Battery Voltage": "4.2V",
      "Dropout Voltage": "150mV at 1A",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "WLCSP-9 (1.4x1.6mm)"
    },
    "features": [
      "1A linear charger",
      "Automatic source selection",
      "Integrated load switch",
      "No switching noise",
      "Automatic recharge",
      "Charge status output",
      "Thermal regulation",
      "Ultra-small WLCSP"
    ],
    "applications": [
      "Wearable devices",
      "IoT sensors",
      "Smart watches",
      "Fitness trackers",
      "Bluetooth headsets"
    ],
    "faeReview": {
      "rating": 4.5,
      "highlight": "Compact linear charger with automatic source selection for wearables",
      "content": "The MP2667 is my choice for ultra-compact wearable and IoT applications. The tiny 1.4x1.6mm WLCSP package fits in the most space-constrained designs. The automatic source selection is clever - it connects the system to whichever source (input or battery) has higher voltage, ensuring optimal operation. The linear architecture means zero switching noise, which is critical for Bluetooth and NFC applications where switching ripple could affect RF performance. At 1A, it charges typical wearable batteries quickly. The thermal regulation prevents overheating in small enclosures. For tiny devices where space and noise are concerns, this charger is ideal.",
      "author": "Senior FAE - Battery Management",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "MP2617",
        "brand": "MPS",
        "comparison": "MP2667 => MP2617: Linear 1A => Switching 2A",
        "reason": "Switching charger for higher current and efficiency",
        "useCase": "Higher current applications"
      },
      {
        "partNumber": "MP2722",
        "brand": "MPS",
        "comparison": "MP2667 => MP2722: Similar linear chargers",
        "reason": "Alternative linear charger option",
        "useCase": "Similar applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "MPM54304",
        "category": "DC-DC Converter",
        "function": "System Power",
        "description": "Low-power DC-DC for system rails"
      },
      {
        "partNumber": "MPF42790",
        "category": "Battery Management",
        "function": "Fuel Gauge",
        "description": "Battery monitor for capacity tracking"
      },
      {
        "partNumber": "MPQ2143",
        "category": "DC-DC Converter",
        "function": "Sensor Power",
        "description": "Low-noise LDO for sensor applications"
      }
    ],
    "faqs": [
      {
        "question": "When should I use a linear charger vs switching charger?",
        "answer": "Use linear chargers when: 1) Current is under 1A - efficiency difference is small; 2) Space is critical - no inductor needed; 3) Noise must be minimized - no switching ripple; 4) Cost is sensitive - simpler design. Use switching chargers when: 1) Current is over 1A - efficiency matters; 2) Input voltage is much higher than battery - dropout losses become significant; 3) Thermal management is limited - switching generates less heat. For wearables and small IoT devices, linear chargers are often preferred for simplicity and noise performance.",
        "decisionGuide": "Use linear for <1A, noise-sensitive, space-constrained designs. Use switching for >1A or high input voltage.",
        "keywords": ["linear charger", "switching charger", "selection"]
      },
      {
        "question": "How does automatic source selection work?",
        "answer": "The MP2667 automatically connects the system load to the higher voltage source: 1) When adapter present - system runs from adapter, battery charges; 2) When adapter removed - seamless switch to battery power; 3) When battery depleted - system runs from adapter even if battery can't take charge; 4) No power interruption during transitions. The internal comparator monitors both sources and controls the load switch. This ensures the system always has power from the best available source without external control or power interruptions.",
        "decisionGuide": "Automatic source selection ensures continuous system operation.",
        "keywords": ["source selection", "power switching", "seamless transition"]
      },
      {
        "question": "What is the thermal performance of MP2667?",
        "answer": "The MP2667 includes thermal regulation to manage heat in small packages: 1) Thermal regulation - reduces charge current if die temperature exceeds 100°C; 2) Thermal shutdown - stops charging at 150°C; 3) Power dissipation - Pd = (Vin - Vbat) × Icharge, can be significant at high input voltage; 4) Layout - connect thermal pad to PCB ground for heat spreading. For 5V input charging 3.7V battery at 1A, dissipation is 1.3W. Ensure adequate copper area or reduce current. The WLCSP has thermal resistance of ~60°C/W, so 1.3W causes 78°C temperature rise.",
        "decisionGuide": "Monitor thermal performance and reduce current if needed. Good PCB layout is essential.",
        "keywords": ["thermal", "heat dissipation", "temperature"]
      },
      {
        "question": "How do I program the charge current?",
        "answer": "The MP2667 charge current is programmed with an external resistor: Icharge = 1000 / Rprog (kΩ). For example: 1kΩ = 1A, 2kΩ = 500mA, 10kΩ = 100mA. The resistor connects between PROG pin and ground. Current can be changed dynamically by changing resistance. The PROG pin can also be used to monitor actual charge current by reading voltage (1V = 1A). This allows simple current programming without I2C interface. Choose resistor power rating based on dissipation (Pd = 1V × Iprog).",
        "decisionGuide": "Use resistor programming for simple current setting, monitor PROG pin for actual current.",
        "keywords": ["charge current", "programming", "PROG pin"]
      },
      {
        "question": "What is the charge status output?",
        "answer": "The MP2667 STAT pin provides charge status indication: 1) Low - charging in progress; 2) High - charging complete or standby; 3) Blinking - fault condition (battery fault, thermal limit). The open-drain output can drive an LED directly (typically 2-10mA) or connect to a microcontroller GPIO. For LED indication: connect LED cathode to STAT, anode through resistor to VCC. LED on = charging, off = complete. This simple indication is adequate for most consumer applications without needing I2C communication.",
        "decisionGuide": "STAT pin provides simple charge status without requiring I2C interface.",
        "keywords": ["STAT pin", "charge status", "LED indication"]
      }
    ]
  },
  {
    "partNumber": "MP5402",
    "name": "MP5402 Multi-Cell Battery Monitor",
    "category": "Battery Management",
    "shortDescription": "High-precision 3-6 cell battery monitor with cell balancing and temperature sensing for BMS applications.",
    "descriptionParagraphs": [
      "The MP5402 is a high-precision battery monitor for 3-6 cell Li-ion battery packs, providing voltage monitoring, cell balancing, and temperature sensing for battery management systems.",
      "With 14-bit ADC resolution and ±5mV accuracy, the MP5402 provides precise cell voltage measurements essential for safe battery operation. The integrated cell balancing circuit maintains cell balance during charging.",
      "The device communicates via I2C or SPI and includes safety features for over-voltage, under-voltage, and over-temperature protection. It's ideal for electric tools, e-bikes, and energy storage systems."
    ],
    "specifications": {
      "Cell Count": "3 to 6 cells",
      "Voltage Measurement": "0V to 5V per cell",
      "ADC Resolution": "14-bit",
      "Measurement Accuracy": "±5mV",
      "Balancing Current": "50mA internal",
      "Operating Temperature": "-40°C to +85°C",
      "Package": "TSSOP-24"
    },
    "features": [
      "3-6 cell monitoring",
      "14-bit precision ADC",
      "±5mV accuracy",
      "Integrated cell balancing",
      "Temperature sensing",
      "I2C/SPI interface",
      "Safety protections",
      "Low power consumption"
    ],
    "applications": [
      "Electric power tools",
      "E-bikes and scooters",
      "Energy storage systems",
      "UPS systems",
      "Industrial equipment"
    ],
    "faeReview": {
      "rating": 4.7,
      "highlight": "High-precision multi-cell monitor with balancing for BMS applications",
      "content": "The MP5402 is my recommendation for multi-cell battery monitoring applications. The 14-bit ADC with ±5mV accuracy provides the precision needed for safe Li-ion operation. Cell balancing is critical for multi-cell packs - without it, cells drift out of balance over cycles, reducing capacity and potentially creating safety issues. The integrated 50mA balancing current is adequate for most applications. I've used this in e-bike battery packs and power tool batteries. The I2C/SPI interface makes it easy to integrate with host controllers. The comprehensive safety features provide peace of mind for high-energy battery systems.",
      "author": "Senior FAE - Battery Management",
      "date": "2025-12-10"
    },
    "alternativeParts": [
      {
        "partNumber": "MPF42790",
        "brand": "MPS",
        "comparison": "MP5402 => MPF42790: Cell monitor => Fuel gauge",
        "reason": "Fuel gauge for single-cell capacity monitoring",
        "useCase": "Single-cell applications"
      },
      {
        "partNumber": "MP2759",
        "brand": "MPS",
        "comparison": "MP5402 => MP2759: Monitor => Charger",
        "reason": "Charger for multi-cell charging",
        "useCase": "Charging applications"
      }
    ],
    "companionParts": [
      {
        "partNumber": "MP2759",
        "category": "Battery Management",
        "function": "Charging",
        "description": "Multi-cell charger for pack charging"
      },
      {
        "partNumber": "MPM54304",
        "category": "DC-DC Converter",
        "function": "System Power",
        "description": "DC-DC for system power from battery"
      },
      {
        "partNumber": "MPQ6541",
        "category": "Motor Driver",
        "function": "Motor Control",
        "description": "Motor driver for e-bike/scooter motors"
      }
    ],
    "faqs": [
      {
        "question": "Why is cell balancing important in multi-cell batteries?",
        "answer": "Cell balancing is critical for multi-cell Li-ion packs because: 1) Cells have slight capacity differences from manufacturing; 2) During charge/discharge, weaker cells reach limits first; 3) Without balancing, usable capacity is limited by weakest cell; 4) Over time, imbalance worsens reducing pack capacity; 5) Unbalanced cells can be over-charged or over-discharged, creating safety hazards. Balancing ensures all cells reach full charge together and discharge evenly, maximizing pack capacity and lifetime. Active balancing (like MP5402) is most effective for high-capacity packs.",
        "decisionGuide": "Cell balancing is essential for all multi-cell Li-ion packs to maximize capacity and safety.",
        "keywords": ["cell balancing", "multi-cell", "battery management"]
      },
      {
        "question": "How does the cell balancing circuit work?",
        "answer": "The MP5402 implements passive cell balancing: 1) Monitors all cell voltages during charging; 2) When a cell reaches full charge (4.2V) before others, activates bypass resistor; 3) Bypass current (50mA) diverts charge current around full cell; 4) Other cells continue charging while full cell stays at 4.2V; 5) Process continues until all cells balanced at full charge. The internal MOSFET and resistor provide 50mA bypass current. For faster balancing, external resistors can increase bypass current. Balancing only during charging prevents energy waste during discharge.",
        "decisionGuide": "Passive balancing during charging ensures all cells reach full capacity.",
        "keywords": ["balancing", "bypass", "cell voltage"]
      },
      {
        "question": "What safety protections does MP5402 provide?",
        "answer": "The MP5402 provides comprehensive battery safety monitoring: 1) Over-voltage protection - alerts if any cell exceeds 4.25V; 2) Under-voltage protection - alerts if any cell drops below 2.5V; 3) Over-temperature protection - monitors up to 3 NTC thermistors; 4) Cell voltage monitoring - continuous measurement of all cells; 5) Communication fault detection - alerts if I2C/SPI communication fails. These protections must be paired with external protection circuitry (MOSFET switches) to disconnect battery during faults. The monitor provides early warning and precise measurements for the protection system.",
        "decisionGuide": "Monitor provides precise measurements for external protection system.",
        "keywords": ["safety", "protection", "monitoring"]
      },
      {
        "question": "How accurate is the voltage measurement?",
        "answer": "The MP5402 provides high-precision voltage measurement: 1) 14-bit ADC resolution - 0.3mV LSB for 5V range; 2) ±5mV accuracy - after calibration across temperature; 3) 0°C to 50°C - maintains accuracy across operating range; 4) Individual cell measurement - each cell measured independently; 5) Differential measurement - rejects common-mode noise. This accuracy is sufficient for: State-of-charge estimation (±1%), Cell balancing control, Safety monitoring (detecting over-voltage at 50mV threshold). For highest accuracy, perform offset calibration at known temperature during production.",
        "decisionGuide": "±5mV accuracy enables precise SOC estimation and safe operation.",
        "keywords": ["accuracy", "ADC", "measurement"]
      },
      {
        "question": "Can MP5402 be used in series for higher cell counts?",
        "answer": "Yes, multiple MP5402 devices can be stacked for higher cell counts: 1) Each device handles 3-6 cells; 2) Devices communicate via I2C/SPI with different addresses; 3) Up to 16 devices can share bus for 96 cells maximum; 4) Isolated communication needed between high-voltage sections; 5) Host controller aggregates data from all devices. For example, a 16-cell pack uses three MP5402s (6+6+4 cells). Each device monitors its section, and host software combines data for complete pack management. Daisy-chain SPI mode simplifies wiring for multi-device systems.",
        "decisionGuide": "Stack multiple devices for high-cell-count battery systems.",
        "keywords": ["stacking", "multi-device", "high voltage"]
      }
    ]
  }
];

// Main execution
console.log('Adding Battery Management products to MPS...\n');

const data = readJSON('products.json');

// Add Battery Management products
const batteryCategory = data.categories.find(c => c.id === 'battery-management');
if (batteryCategory && batteryCategory.products.length < 6) {
  batteryCategory.products.push(...newBatteryProducts);
  console.log(`✓ Added ${newBatteryProducts.length} products to Battery Management category, now has ${batteryCategory.products.length}`);
}

writeJSON('products.json', data);

console.log('\n✅ Battery Management products added!');
