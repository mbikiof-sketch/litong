/**
 * Create complete Wurth Elektronik brand data
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'wurth');

console.log('🔧 Creating Wurth Elektronik brand data...\n');

// Create directory if not exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// EMC Components - 6 products
const emcProducts = [
  {
    partNumber: "7427155",
    name: "WE-CMB Common Mode Choke",
    shortDescription: "High current common mode choke for EMI filtering with 10A rating and 1mH inductance, ideal for power line applications.",
    descriptionParagraphs: [
      "The WE-CMB 7427155 is a high-performance common mode choke designed for EMI filtering in power supply and motor drive applications. It features a toroidal construction with bifilar windings to minimize differential mode inductance while maximizing common mode impedance.",
      "This choke offers 1mH common mode inductance with 10A current rating, making it suitable for high-power applications. The low DC resistance of 8mΩ minimizes power loss and heating. The component is rated for -40°C to +125°C operation.",
      "Applications include switching power supplies, motor drives, inverters, and industrial equipment. The choke meets AEC-Q200 requirements for automotive applications and is RoHS compliant."
    ],
    specs: { inductance: "1mH", current: "10A", resistance: "8mΩ", temperature: "-40°C to +125°C" }
  },
  {
    partNumber: "7427154",
    name: "WE-CMB High Current Choke",
    shortDescription: "15A common mode choke with 0.5mH inductance for high-power industrial and automotive applications.",
    descriptionParagraphs: [
      "The WE-CMB 7427154 delivers exceptional performance for high-current EMI filtering applications. With a robust 15A current rating and 0.5mH common mode inductance, it provides effective noise suppression in demanding industrial environments.",
      "Featuring ultra-low DC resistance of just 5mΩ, this choke minimizes power dissipation even at full rated current. The toroidal core design ensures excellent magnetic coupling and minimal stray magnetic fields.",
      "Ideal for three-phase motor drives, high-power inverters, and industrial power supplies. The component is AEC-Q200 qualified and supports operating temperatures from -40°C to +125°C."
    ],
    specs: { inductance: "0.5mH", current: "15A", resistance: "5mΩ", temperature: "-40°C to +125°C" }
  },
  {
    partNumber: "7427153",
    name: "WE-CMB Compact Choke",
    shortDescription: "Compact common mode choke with 5A rating and 2.2mH inductance for space-constrained designs.",
    descriptionParagraphs: [
      "The WE-CMB 7427153 offers high inductance in a compact package, making it ideal for applications where PCB space is limited. The 2.2mH common mode inductance provides excellent noise attenuation at lower frequencies.",
      "Despite its compact size, this choke maintains a 5A current rating with 12mΩ DC resistance. The optimized winding geometry ensures minimal differential mode inductance for signal integrity.",
      "Perfect for LED drivers, medical equipment, and compact power supplies. The choke is RoHS compliant and halogen-free, meeting environmental requirements for consumer electronics."
    ],
    specs: { inductance: "2.2mH", current: "5A", resistance: "12mΩ", temperature: "-40°C to +105°C" }
  },
  {
    partNumber: "74270057",
    name: "WE-FC Ferrite Core",
    shortDescription: "Snap-on ferrite core for cable EMI suppression with 10mm inner diameter, effective up to 300MHz.",
    descriptionParagraphs: [
      "The WE-FC 74270057 is a split ferrite core designed for easy installation on cables and wire harnesses. The snap-on design allows retrofitting of EMI suppression without disconnecting cables.",
      "With a 10mm inner diameter, this core accommodates common power and signal cable bundles. The NiZn ferrite material provides effective impedance from 10MHz to 300MHz for radiated EMI suppression.",
      "Applications include computer peripherals, industrial cables, and consumer electronics. The UL94 V-0 rated plastic housing ensures safety in all applications."
    ],
    specs: { innerDiameter: "10mm", material: "NiZn", frequency: "10-300MHz", impedance: "80Ω @ 100MHz" }
  },
  {
    partNumber: "74270064",
    name: "WE-FC Large Ferrite Core",
    shortDescription: "Large snap-on ferrite core with 16mm inner diameter for power cable EMI suppression.",
    descriptionParagraphs: [
      "The WE-FC 74270064 provides EMI suppression for larger cable bundles and power cords. The 16mm inner diameter accommodates multiple conductors or larger gauge wires.",
      "The MnZn ferrite material offers high permeability for effective suppression of conducted noise in the 1-30MHz range. The split-core design enables easy installation without cable disassembly.",
      "Ideal for industrial power cables, motor leads, and appliance power cords. The robust construction withstands harsh industrial environments."
    ],
    specs: { innerDiameter: "16mm", material: "MnZn", frequency: "1-30MHz", impedance: "120Ω @ 10MHz" }
  },
  {
    partNumber: "354012",
    name: "WE-FSFS Ferrite Sheet",
    shortDescription: "Flexible ferrite sheet 100x100x0.5mm for near-field EMI shielding and absorption.",
    descriptionParagraphs: [
      "The WE-FSFS 354012 is a thin, flexible ferrite sheet that can be cut to shape for custom EMI shielding applications. The material absorbs electromagnetic radiation and converts it to heat.",
      "At just 0.5mm thick, this sheet fits in tight spaces where traditional shielding cannot be used. The material provides effective absorption from 10MHz to 1GHz.",
      "Applications include shielding between digital and analog circuits, reducing crosstalk in high-speed designs, and absorbing radiation from displays and traces."
    ],
    specs: { dimensions: "100x100x0.5mm", material: "MnZn", frequency: "10MHz-1GHz", permeability: "1500" }
  }
];

// Capacitors - 6 products
const capacitorProducts = [
  {
    partNumber: "865230542002",
    name: "WCAP-ASLL Aluminum Capacitor",
    shortDescription: "Low-ESR aluminum electrolytic capacitor 100uF/50V with 5000h lifetime for power supply applications.",
    descriptionParagraphs: [
      "The WCAP-ASLL 865230542002 is a high-reliability aluminum electrolytic capacitor designed for switching power supplies and industrial applications. The low ESR design minimizes ripple voltage and heating.",
      "With 100µF capacitance and 50V rating, this capacitor is ideal for output filtering in DC-DC converters. The 5000-hour lifetime at 105°C ensures long-term reliability.",
      "Features include high ripple current capability, wide temperature range, and AEC-Q200 qualification for automotive use. The compact SMD package saves PCB space."
    ],
    specs: { capacitance: "100µF", voltage: "50V", esr: "180mΩ", lifetime: "5000h @ 105°C" }
  },
  {
    partNumber: "865230543003",
    name: "WCAP-ASLL High Capacitance",
    shortDescription: "High-capacitance aluminum electrolytic 470uF/35V with extended 8000h lifetime.",
    descriptionParagraphs: [
      "The WCAP-ASLL 865230543003 offers high capacitance density for bulk capacitance applications. The 470µF rating provides excellent hold-up time and ripple filtering.",
      "Designed for industrial and automotive applications, this capacitor features an extended 8000-hour lifetime at 105°C. The low-profile design fits height-constrained applications.",
      "Applications include input filtering, bulk capacitance, and energy storage in power supplies and inverters."
    ],
    specs: { capacitance: "470µF", voltage: "35V", esr: "120mΩ", lifetime: "8000h @ 105°C" }
  },
  {
    partNumber: "890334024005",
    name: "WCAP-FTXX Film Capacitor",
    shortDescription: "X2 safety-rated film capacitor 0.47uF/305VAC for EMI filter applications.",
    descriptionParagraphs: [
      "The WCAP-FTXX 890334024005 is a metallized polyester film capacitor with X2 safety rating for across-the-line applications. The self-healing properties ensure long-term reliability.",
      "With 0.47µF capacitance and 305VAC rating, this capacitor is ideal for EMI filters in power entry modules. The low dissipation factor minimizes self-heating.",
      "Features include high dv/dt capability, excellent frequency characteristics, and compliance with IEC 60384-14. The compact box format saves PCB space."
    ],
    specs: { capacitance: "0.47µF", voltage: "305VAC", type: "X2", standard: "IEC 60384-14" }
  },
  {
    partNumber: "890334025006",
    name: "WCAP-FTXX High Voltage Film",
    shortDescription: "High-voltage DC-link film capacitor 10uF/450VDC for inverter applications.",
    descriptionParagraphs: [
      "The WCAP-FTXX 890334025006 is a high-performance DC-link capacitor using metallized polypropylene film. The low ESR and ESL make it ideal for high-frequency switching applications.",
      "With 10µF capacitance and 450VDC rating, this capacitor handles the DC-link requirements of motor drives and inverters. The high ripple current capability supports demanding applications.",
      "Applications include solar inverters, motor drives, and UPS systems. The long lifetime and self-healing properties ensure reliability in critical systems."
    ],
    specs: { capacitance: "10µF", voltage: "450VDC", type: "DC-Link", rippleCurrent: "5A" }
  },
  {
    partNumber: "885012205001",
    name: "WCAP-CSGP Ceramic Capacitor",
    shortDescription: "High-capacitance MLCC 10uF/25V X5R in 0805 package for decoupling applications.",
    descriptionParagraphs: [
      "The WCAP-CSGP 885012205001 is a high-capacitance multilayer ceramic capacitor in a compact 0805 package. The X5R dielectric provides stable capacitance across temperature.",
      "With 10µF capacitance, this capacitor is ideal for decoupling and filtering in digital circuits. The low ESR provides excellent high-frequency performance.",
      "Applications include processor decoupling, power supply filtering, and general-purpose coupling. AEC-Q200 qualified for automotive applications."
    ],
    specs: { capacitance: "10µF", voltage: "25V", dielectric: "X5R", package: "0805" }
  },
  {
    partNumber: "885012206002",
    name: "WCAP-CSGP High Voltage MLCC",
    shortDescription: "High-voltage MLCC 1uF/100V X7R for power supply and snubber applications.",
    descriptionParagraphs: [
      "The WCAP-CSGP 885012206002 provides high capacitance at elevated voltages in a compact package. The X7R dielectric offers better temperature stability than X5R.",
      "With 1µF at 100V, this capacitor is suitable for snubber circuits, power supply filtering, and high-voltage coupling applications.",
      "The 1206 package provides good voltage withstand capability while maintaining compact size. RoHS compliant and halogen-free."
    ],
    specs: { capacitance: "1µF", voltage: "100V", dielectric: "X7R", package: "1206" }
  }
];

// Inductors - 6 products
const inductorProducts = [
  {
    partNumber: "74437349100",
    name: "WE-HCI Power Inductor",
    shortDescription: "High current power inductor 10uH/9.5A with shielded construction for DC-DC converters.",
    descriptionParagraphs: [
      "The WE-HCI 74437349100 is a high-performance power inductor featuring a composite iron powder core for high saturation current and stable inductance characteristics.",
      "With 10µH inductance and 9.5A saturation current, this inductor is ideal for buck and boost converters in industrial and automotive applications. The shielded construction minimizes EMI.",
      "Features include low DCR of 15mΩ for high efficiency, AEC-Q200 qualification, and operating temperature range of -40°C to +125°C."
    ],
    specs: { inductance: "10µH", saturationCurrent: "9.5A", dcr: "15mΩ", temperature: "-40°C to +125°C" }
  },
  {
    partNumber: "74437349220",
    name: "WE-HCI High Inductance",
    shortDescription: "Power inductor 22uH/7A with soft saturation characteristic for PFC applications.",
    descriptionParagraphs: [
      "The WE-HCI 74437349220 offers higher inductance for applications requiring more energy storage. The soft saturation characteristic provides graceful performance degradation under overload.",
      "With 22µH inductance and 7A saturation current, this inductor is suitable for PFC circuits, flyback converters, and energy storage applications.",
      "The shielded construction and low EMI design make it ideal for noise-sensitive applications. AEC-Q200 qualified for automotive use."
    ],
    specs: { inductance: "22µH", saturationCurrent: "7A", dcr: "28mΩ", temperature: "-40°C to +125°C" }
  },
  {
    partNumber: "74437349470",
    name: "WE-HCI Large Inductance",
    shortDescription: "High-inductance power inductor 47uH/5A for filter and energy storage applications.",
    descriptionParagraphs: [
      "The WE-HCI 74437349470 provides high inductance for output filters, resonant circuits, and energy storage applications. The composite core ensures stable inductance over temperature.",
      "With 47µH inductance and 5A saturation current, this inductor handles moderate current requirements while providing significant energy storage.",
      "Applications include output filters for switching supplies, resonant converters, and current limiting circuits."
    ],
    specs: { inductance: "47µH", saturationCurrent: "5A", dcr: "55mΩ", temperature: "-40°C to +125°C" }
  },
  {
    partNumber: "7447602100",
    name: "WE-TPC SMD Power Inductor",
    shortDescription: "Compact SMD power inductor 10uH/3.2A in 7.3x7.3mm package for space-constrained designs.",
    descriptionParagraphs: [
      "The WE-TPC 7447602100 is a compact SMD power inductor designed for portable electronics and space-constrained applications. The ferrite core provides high inductance density.",
      "With 10µH inductance and 3.2A saturation current, this inductor is ideal for point-of-load converters and battery-powered devices.",
      "The shielded construction minimizes magnetic coupling to adjacent components. Low profile of 3mm fits height-limited designs."
    ],
    specs: { inductance: "10µH", saturationCurrent: "3.2A", dcr: "85mΩ", package: "7.3x7.3x3mm" }
  },
  {
    partNumber: "7447602220",
    name: "WE-TPC Mid-Range Inductor",
    shortDescription: "SMD power inductor 22uH/2.4A with ferrite core for DC-DC converters.",
    descriptionParagraphs: [
      "The WE-TPC 7447602220 offers higher inductance for lower-current applications. The ferrite core provides stable inductance and low core losses at switching frequencies.",
      "With 22µH inductance and 2.4A saturation current, this inductor is suitable for low-power DC-DC converters and filter applications.",
      "The compact package and shielded design make it ideal for portable electronics and IoT devices."
    ],
    specs: { inductance: "22µH", saturationCurrent: "2.4A", dcr: "160mΩ", package: "7.3x7.3x3mm" }
  },
  {
    partNumber: "744045001",
    name: "WE-KI RF Inductor",
    shortDescription: "High-frequency RF inductor 1uH with high Q factor for RF and matching circuits.",
    descriptionParagraphs: [
      "The WE-KI 744045001 is a high-quality RF inductor designed for RF circuits, matching networks, and filter applications. The air-core construction provides high Q factor.",
      "With 1µH inductance and high Q at RF frequencies, this inductor is ideal for antenna matching, RF filters, and oscillator circuits.",
      "The ceramic body and precision winding ensure consistent performance across temperature. Suitable for frequencies up to 1GHz."
    ],
    specs: { inductance: "1µH", qFactor: "60 @ 100MHz", srf: "800MHz", package: "0603" }
  }
];

// Connectors - 6 products
const connectorProducts = [
  {
    partNumber: "691137710002",
    name: "WR-TBL Terminal Block",
    shortDescription: "2-position PCB terminal block 5.08mm pitch with screw connection for 24-12AWG wire.",
    descriptionParagraphs: [
      "The WR-TBL 691137710002 is a reliable PCB terminal block for industrial and commercial applications. The screw connection ensures secure wire retention.",
      "With 5.08mm pitch and 2 positions, this terminal block accommodates wire gauges from 24AWG to 12AWG. The rated current is 16A at 300V.",
      "Features include rising cage clamp design for vibration resistance, flammability rating UL94 V-0, and operating temperature of -40°C to +105°C."
    ],
    specs: { positions: "2", pitch: "5.08mm", wireRange: "24-12AWG", current: "16A" }
  },
  {
    partNumber: "691137710003",
    name: "WR-TBL 3-Position Block",
    shortDescription: "3-position PCB terminal block 5.08mm pitch for power distribution applications.",
    descriptionParagraphs: [
      "The WR-TBL 691137710003 provides three connection points for power distribution and signal routing. The robust construction ensures reliable connections.",
      "With 5.08mm pitch and 3 positions, this terminal block is ideal for three-phase connections or multi-circuit applications.",
      "The green color coding aids identification, and the modular design allows ganging multiple blocks together."
    ],
    specs: { positions: "3", pitch: "5.08mm", wireRange: "24-12AWG", current: "16A" }
  },
  {
    partNumber: "691352710003",
    name: "WR-PHD Header",
    shortDescription: "2.54mm pitch pin header 1x10 position for board-to-board and wire-to-board connections.",
    descriptionParagraphs: [
      "The WR-PHD 691352710003 is a standard 2.54mm pitch pin header for general-purpose connections. The gold-plated pins ensure reliable contact.",
      "With 10 positions in a single row, this header is suitable for signal routing, programming interfaces, and expansion connections.",
      "Features include high-temperature plastic rated for 260°C reflow, gold flash plating for corrosion resistance, and compatibility with standard sockets."
    ],
    specs: { positions: "10", pitch: "2.54mm", rows: "1", plating: "Gold flash" }
  },
  {
    partNumber: "691352720002",
    name: "WR-PHD Dual Row Header",
    shortDescription: "2.54mm pitch dual row pin header 2x5 position for high-density connections.",
    descriptionParagraphs: [
      "The WR-PHD 691352720002 provides high-density connectivity in a compact footprint. The dual-row configuration doubles connection density.",
      "With 2x5 positions, this header is ideal for data buses, parallel interfaces, and compact module connections.",
      "The shrouded option provides polarization to prevent mis-mating. Compatible with standard IDC connectors and sockets."
    ],
    specs: { positions: "10 (2x5)", pitch: "2.54mm", rows: "2", plating: "Gold flash" }
  },
  {
    partNumber: "692112030002",
    name: "WR-MJ Modular Jack",
    shortDescription: "RJ45 modular jack with integrated magnetics for 10/100/1000Base-T Ethernet.",
    descriptionParagraphs: [
      "The WR-MJ 692112030002 is a high-performance RJ45 connector with integrated magnetics for Ethernet applications. The integrated magnetics simplify PCB design.",
      "Supporting 10/100/1000Base-T speeds, this jack provides reliable network connectivity. The shielded design ensures EMI compliance.",
      "Features include integrated common mode chokes and isolation transformers, LED indicators for link status, and tab-up orientation."
    ],
    specs: { type: "RJ45", speed: "10/100/1000Base-T", magnetics: "Integrated", shielding: "Yes" }
  },
  {
    partNumber: "692112040003",
    name: "WR-MJ USB Connector",
    shortDescription: "USB Type-A receptacle with shielding for USB 2.0 and 3.0 applications.",
    descriptionParagraphs: [
      "The WR-MJ 692112040003 is a high-quality USB Type-A receptacle for host-side connections. The through-hole mounting provides mechanical stability.",
      "Supporting USB 2.0 (480Mbps) and USB 3.0 (5Gbps) speeds, this connector handles high-speed data transmission.",
      "Features include full metal shielding for EMI protection, high retention force for connection reliability, and 5000 insertion cycles minimum."
    ],
    specs: { type: "USB Type-A", speed: "USB 2.0/3.0", mounting: "Through-hole", cycles: "5000" }
  }
];

console.log(`Created product arrays:`);
console.log(`  - EMC Components: ${emcProducts.length} products`);
console.log(`  - Capacitors: ${capacitorProducts.length} products`);
console.log(`  - Inductors: ${inductorProducts.length} products`);
console.log(`  - Connectors: ${connectorProducts.length} products`);
console.log(`  - Total: ${emcProducts.length + capacitorProducts.length + inductorProducts.length + connectorProducts.length} products`);

console.log('\n✅ Product data prepared successfully!');
console.log('\nNext: Create complete products.json with all products and categories');
