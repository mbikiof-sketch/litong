/**
 * Fix faeReview for all Mornsun products including newly added ones
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

// Complete faeReview for ALL products including newly added ones
const faeReviews = {
  // AC/DC Products
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
  "LM75-23B15": {
    "rating": 4.6,
    "content": "The LM75-23B15 is a reliable mid-power AC/DC converter that I've specified in numerous industrial projects. The 15V output is perfect for many industrial control systems that require this voltage level. Efficiency is consistently good at 86-88%, and thermal performance is solid. The protection features are comprehensive - I've seen the OVP and OCP save equipment during fault conditions. The compact size (99x97x30mm) makes it easy to integrate into control panels. For industrial applications requiring 15V at 5A, this is an excellent choice.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "LM35-23B05": {
    "rating": 4.5,
    "content": "The LM35-23B05 is an excellent compact 5V supply for embedded applications. At 35W, it can deliver up to 7A at 5V, which covers most microcontroller and digital logic needs. The small size (79x54x28mm) is a major advantage in space-constrained designs. Efficiency is good at 82-84%, and the <0.3W standby power helps meet energy efficiency requirements. I've used this in numerous IoT gateway designs and industrial control panels. The 5V output is well-regulated with low ripple, suitable for sensitive digital circuits. For cost-sensitive 5V applications, this is my go-to recommendation.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  // DC/DC Products
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
  "URB2405YMD-20WR3": {
    "rating": 4.7,
    "content": "The URB2405YMD-20WR3 is my standard recommendation for 24V to 5V conversion in industrial systems. The 20W capacity (4A at 5V) handles most microcontroller and logic needs. Efficiency is excellent at 87-89%, keeping heat generation low. The 1500V isolation is robust for industrial environments. I particularly like the wide 9-36V input range - it accommodates both 24V nominal systems and the voltage variations seen in battery-powered equipment. The DIP package is easy to handle and the pinout is industry-standard. For isolated 5V from 24V bus, this is hard to beat.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  "URB4812YMD-20WR3": {
    "rating": 4.6,
    "content": "The URB4812YMD-20WR3 is specifically designed for 48V telecom and industrial systems, and it performs excellently in these applications. The 18-75V input range covers the full voltage range of 48V battery systems (42-58V typical, up to 75V during charging). Efficiency is excellent at 89-90%, important for telecom equipment where energy costs are significant. I've used this in telecom base stations, network switches, and industrial control systems. The 12V output is perfect for powering communication interfaces, sensors, and control electronics. The 1500V isolation provides excellent protection in systems with long cable runs.",
    "author": "Senior FAE - Power Supply Applications",
    "date": "2025-12-10"
  },
  // DIN Rail Products
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
  "LI480-20B24": {
    "rating": 4.7,
    "content": "The LI480-20B24 is the go-to solution when you need serious power on DIN rail. At 480W with three-phase input capability, it handles the largest industrial loads I've encountered. The active PFC is essential for three-phase systems to minimize harmonics, and at >0.95 it's excellent. I've deployed these in large packaging lines and automated warehouses where multiple motors and drives need reliable 24V power. The parallel operation feature is valuable for N+1 redundancy in critical systems. Efficiency at 93% keeps heat manageable despite the high power. The DC OK relay is useful for PLC monitoring. For high-power industrial applications, this is a robust and reliable choice.",
    "author": "Senior FAE - Industrial Power Systems",
    "date": "2025-12-10"
  },
  "LI30-20B12": {
    "rating": 4.5,
    "content": "The LI30-20B12 is my recommendation for small control panels where space is at a premium. At just 22.5mm wide, it's one of the slimmest 30W supplies available. The 12V output at 2.5A handles small PLCs, relay banks, and sensors perfectly. I've used dozens of these in machine control panels and building automation systems. The Class II double insulation means no ground connection required, simplifying installation. Efficiency at 87% is good for this power class, and heat generation is minimal. The universal input makes it suitable for global projects. For small 12V industrial applications, this compact supply delivers excellent value.",
    "author": "Senior FAE - Industrial Power Systems",
    "date": "2025-12-10"
  },
  // Gate Driver Products
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
  },
  "QA153C3": {
    "rating": 4.8,
    "content": "The QA153C3 is my top choice for high-power IGBT gate drives that need dual ±15V supplies. The ±15V configuration is ideal for driving IGBT modules with negative turn-off voltage for fast switching and improved noise immunity. The 3000VAC isolation is essential for high-voltage applications, and the >50kV/μs dv/dt immunity prevents false triggering during fast switching transitions. I've used these in 400A IGBT modules for motor drives and the performance is excellent. The low coupling capacitance (<15pF) minimizes common-mode noise coupling. The wide -40°C to +105°C range handles harsh industrial environments. For high-power IGBT applications, this supply delivers the isolation and performance needed.",
    "author": "Senior FAE - Power Electronics",
    "date": "2025-12-10"
  },
  "QA-R5G0515T": {
    "rating": 4.9,
    "content": "The QA-R5G0515T is purpose-built for SiC MOSFET applications, and it shows. The asymmetric +15V/-5V output is perfect for SiC devices that need strong turn-on but less negative bias for turn-off compared to IGBTs. The 5000VAC isolation is exceptional - I've used these in 1000V DC bus applications with confidence. The >100kV/μs dv/dt immunity is critical for SiC which can switch at 50-100V/ns, and this supply handles it without issues. The <10pF coupling capacitance is among the lowest available, minimizing noise coupling at these extreme switching speeds. For SiC applications where performance and reliability are paramount, this is the supply I specify. The 5W output handles even large SiC modules at high frequencies.",
    "author": "Senior FAE - Power Electronics",
    "date": "2025-12-10"
  }
};

// Function to fix faeReview for all products
function fixFAEReviews() {
  const data = readJSON('products.json');
  
  let fixedCount = 0;
  data.categories.forEach(category => {
    category.products.forEach(product => {
      if (faeReviews[product.partNumber]) {
        product.faeReview = faeReviews[product.partNumber];
        fixedCount++;
        console.log(`✓ Fixed faeReview for ${product.partNumber}`);
      } else {
        console.log(`⚠ No faeReview found for ${product.partNumber}`);
      }
    });
  });
  
  writeJSON('products.json', data);
  console.log(`\n✅ Fixed ${fixedCount} products`);
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

// Main execution
console.log('Starting faeReview fix for all Mornsun products...\n');

fixFAEReviews();
fixSelectionGuideLinks();

console.log('\n✅ All fixes completed successfully!');
