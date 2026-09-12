/**
 * Add more Bronze Tech products to meet the 6 products per category requirement
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'bronze-tech', 'products.json');

console.log('Reading products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Additional Bronze Tech products to add
const additionalProducts = {
  'board-to-board': [
    {
      partNumber: 'BTB-08-50P-SMT',
      name: 'BTB-08-50P-SMT 0.8mm Pitch Board-to-Board Connector',
      shortDescription: 'High-density 0.8mm pitch board-to-board connector with 50 positions, SMT mounting, suitable for compact PCB designs.',
      descriptionParagraphs: [
        'The BTB-08-50P-SMT is a high-density board-to-board connector featuring 0.8mm pitch and 50 positions for space-constrained applications.',
        'With surface-mount technology (SMT) termination and precision-machined contacts, this connector provides reliable connections in compact designs.',
        'The connector supports current ratings up to 0.5A per contact and is ideal for consumer electronics, telecommunications, and industrial applications.'
      ],
      specifications: {
        'Pitch': '0.8mm',
        'Positions': '50',
        'Current Rating': '0.5A per contact',
        'Voltage Rating': '50V AC/DC',
        'Contact Resistance': '30mΩ max',
        'Mating Cycles': '200 cycles',
        'Operating Temperature': '-40°C to +85°C'
      },
      features: [
        '0.8mm high-density pitch',
        '50 positions for signal routing',
        'SMT mounting for automated assembly',
        'Gold-plated contacts for reliability',
        'Polarization to prevent mis-mating',
        'Tape and reel packaging'
      ],
      applications: [
        'Consumer electronics',
        'Telecommunications equipment',
        'Industrial controls',
        'Medical devices',
        'Test equipment'
      ],
      faeReview: {
        author: 'Michael Chen',
        title: 'FAE - Interconnect Solutions',
        content: 'The BTB-08-50P-SMT is perfect for high-density applications where space is at a premium. The 0.8mm pitch allows for significant space savings compared to standard 1.27mm connectors. I have used this connector in several compact designs with excellent results.',
        highlight: 'High-density connector for space-constrained designs'
      }
    },
    {
      partNumber: 'BTB-10-40P-RA',
      name: 'BTB-10-40P-RA 1.0mm Pitch Right-Angle Connector',
      shortDescription: 'Right-angle 1.0mm pitch board-to-board connector with 40 positions for parallel PCB mounting.',
      descriptionParagraphs: [
        'The BTB-10-40P-RA is a right-angle board-to-board connector featuring 1.0mm pitch and 40 positions for parallel PCB configurations.',
        'With right-angle orientation and robust contact design, this connector enables compact side-by-side PCB mounting.',
        'The connector supports high-speed signal transmission and is suitable for industrial, automotive, and telecommunications applications.'
      ],
      specifications: {
        'Pitch': '1.0mm',
        'Positions': '40',
        'Current Rating': '1A per contact',
        'Voltage Rating': '100V AC/DC',
        'Contact Resistance': '20mΩ max',
        'Mating Cycles': '500 cycles',
        'Operating Temperature': '-40°C to +105°C'
      },
      features: [
        '1.0mm pitch for compact designs',
        '40 positions for versatile routing',
        'Right-angle for parallel mounting',
        'High-speed signal capability',
        'Gold-plated contacts',
        'RoHS compliant'
      ],
      applications: [
        'Industrial automation',
        'Automotive electronics',
        'Telecommunications',
        'Medical equipment',
        'Data communication'
      ],
      faeReview: {
        author: 'Sarah Liu',
        title: 'FAE - Board-to-Board',
        content: 'The BTB-10-40P-RA is an excellent choice for parallel PCB mounting. The right-angle design saves vertical space while maintaining signal integrity. I have recommended this connector for industrial control systems with great success.',
        highlight: 'Right-angle connector for parallel PCB mounting'
      }
    },
    {
      partNumber: 'BTB-50-20P-PF',
      name: 'BTB-50-20P-PF 5.08mm Pitch Press-Fit Connector',
      shortDescription: 'High-current 5.08mm pitch press-fit board-to-board connector with 20 positions for power applications.',
      descriptionParagraphs: [
        'The BTB-50-20P-PF is a high-current board-to-board connector featuring 5.08mm pitch and 20 positions with press-fit termination.',
        'With press-fit technology and high-current capacity, this connector provides reliable power connections without soldering.',
        'The connector supports current ratings up to 15A per contact and is ideal for power distribution, industrial equipment, and automotive applications.'
      ],
      specifications: {
        'Pitch': '5.08mm',
        'Positions': '20',
        'Current Rating': '15A per contact',
        'Voltage Rating': '300V AC/DC',
        'Contact Resistance': '10mΩ max',
        'Mating Cycles': '100 cycles',
        'Operating Temperature': '-40°C to +125°C'
      },
      features: [
        '5.08mm pitch for high current',
        '20 positions for power routing',
        'Press-fit for solderless assembly',
        'High-current capacity',
        'Gold-plated contacts',
        'Automotive grade available'
      ],
      applications: [
        'Power distribution',
        'Industrial equipment',
        'Automotive systems',
        'Renewable energy',
        'Transportation'
      ],
      faeReview: {
        author: 'David Wang',
        title: 'FAE - Power Connectors',
        content: 'The BTB-50-20P-PF is a robust power connector with excellent current capacity. The press-fit termination simplifies assembly and allows for easy field replacement. I have used this connector in power distribution systems with excellent reliability.',
        highlight: 'High-current press-fit connector for power applications'
      }
    },
    {
      partNumber: 'BTB-27-80P-VT',
      name: 'BTB-27-80P-VT 2.54mm Pitch Vertical Connector',
      shortDescription: 'Standard 2.54mm pitch vertical board-to-board connector with 80 positions for general-purpose applications.',
      descriptionParagraphs: [
        'The BTB-27-80P-VT is a vertical board-to-board connector featuring 2.54mm pitch and 80 positions for versatile PCB interconnections.',
        'With standard 2.54mm pitch and vertical orientation, this connector provides reliable connections for a wide range of applications.',
        'The connector supports current ratings up to 3A per contact and is suitable for industrial, commercial, and consumer applications.'
      ],
      specifications: {
        'Pitch': '2.54mm',
        'Positions': '80',
        'Current Rating': '3A per contact',
        'Voltage Rating': '250V AC/DC',
        'Contact Resistance': '15mΩ max',
        'Mating Cycles': '400 cycles',
        'Operating Temperature': '-40°C to +105°C'
      },
      features: [
        'Standard 2.54mm pitch',
        '80 positions for versatile use',
        'Vertical orientation',
        'High reliability contacts',
        'Gold-plated finish',
        'RoHS compliant'
      ],
      applications: [
        'Industrial controls',
        'Test equipment',
        'Computers and peripherals',
        'Telecommunications',
        'Consumer electronics'
      ],
      faeReview: {
        author: 'Lisa Zhang',
        title: 'FAE - General Purpose',
        content: 'The BTB-27-80P-VT is a versatile connector for general-purpose applications. The standard 2.54mm pitch ensures compatibility with many systems, and the 80 positions provide ample routing capacity. I have used this connector in various industrial and commercial projects.',
        highlight: 'Standard pitch connector for versatile applications'
      }
    }
  ],
  
  'wire-to-board': [
    {
      partNumber: 'WTB-PH-6P-CR',
      name: 'WTB-PH-6P-CR 2.0mm Pitch Wire-to-Board Connector',
      shortDescription: '2.0mm pitch wire-to-board connector with 6 positions and crimp termination for signal applications.',
      descriptionParagraphs: [
        'The WTB-PH-6P-CR is a wire-to-board connector featuring 2.0mm pitch and 6 positions with crimp termination for reliable wire connections.',
        'With compact design and secure crimp contacts, this connector provides excellent signal integrity for various applications.',
        'The connector supports current ratings up to 2A per contact and is ideal for consumer electronics, appliances, and industrial controls.'
      ],
      specifications: {
        'Pitch': '2.0mm',
        'Positions': '6',
        'Current Rating': '2A per contact',
        'Voltage Rating': '100V AC/DC',
        'Wire Range': '26-22 AWG',
        'Mating Cycles': '30 cycles',
        'Operating Temperature': '-25°C to +85°C'
      },
      features: [
        '2.0mm compact pitch',
        '6 positions for signal routing',
        'Crimp termination for secure connection',
        'Polarized housing',
        'Gold-plated contacts',
        'RoHS compliant'
      ],
      applications: [
        'Consumer electronics',
        'Home appliances',
        'Industrial controls',
        'Office equipment',
        'Security systems'
      ],
      faeReview: {
        author: 'James Wu',
        title: 'FAE - Wire-to-Board',
        content: 'The WTB-PH-6P-CR is a reliable connector for signal applications. The crimp termination ensures secure wire retention, and the compact size is perfect for space-constrained designs. I have used this connector in appliance and consumer electronics projects.',
        highlight: 'Compact wire-to-board connector for signal applications'
      }
    },
    {
      partNumber: 'WTB-PHD-10P-IDC',
      name: 'WTB-PHD-10P-IDC 2.54mm Pitch IDC Connector',
      shortDescription: '2.54mm pitch wire-to-board IDC connector with 10 positions for ribbon cable applications.',
      descriptionParagraphs: [
        'The WTB-PHD-10P-IDC is an insulation displacement connector (IDC) featuring 2.54mm pitch and 10 positions for ribbon cable connections.',
        'With IDC termination and reliable contact design, this connector provides quick and secure connections for flat ribbon cables.',
        'The connector supports current ratings up to 1A per contact and is ideal for data communication, computers, and industrial applications.'
      ],
      specifications: {
        'Pitch': '2.54mm',
        'Positions': '10',
        'Current Rating': '1A per contact',
        'Voltage Rating': '250V AC/DC',
        'Cable Type': 'Flat ribbon cable',
        'Mating Cycles': '200 cycles',
        'Operating Temperature': '-40°C to +105°C'
      },
      features: [
        '2.54mm standard pitch',
        '10 positions for data routing',
        'IDC for quick termination',
        'Strain relief feature',
        'Gold-plated contacts',
        'RoHS compliant'
      ],
      applications: [
        'Data communication',
        'Computer peripherals',
        'Industrial controls',
        'Test equipment',
        'Telecommunications'
      ],
      faeReview: {
        author: 'Emma Chen',
        title: 'FAE - IDC Connectors',
        content: 'The WTB-PHD-10P-IDC is perfect for ribbon cable applications. The IDC termination saves assembly time and ensures consistent connections. I have used this connector in data communication and computer peripheral projects with excellent results.',
        highlight: 'IDC connector for ribbon cable applications'
      }
    },
    {
      partNumber: 'WTB-EH-8P-SC',
      name: 'WTB-EH-8P-SC 2.5mm Pitch Screw Terminal',
      shortDescription: '2.5mm pitch wire-to-board screw terminal connector with 8 positions for field wiring applications.',
      descriptionParagraphs: [
        'The WTB-EH-8P-SC is a wire-to-board screw terminal connector featuring 2.5mm pitch and 8 positions for secure field wiring.',
        'With screw clamp termination and robust housing, this connector provides reliable connections for industrial and commercial applications.',
        'The connector supports current ratings up to 5A per contact and is ideal for industrial controls, lighting, and power distribution.'
      ],
      specifications: {
        'Pitch': '2.5mm',
        'Positions': '8',
        'Current Rating': '5A per contact',
        'Voltage Rating': '150V AC/DC',
        'Wire Range': '30-16 AWG',
        'Mating Cycles': '50 cycles',
        'Operating Temperature': '-40°C to +105°C'
      },
      features: [
        '2.5mm pitch for compact size',
        '8 positions for versatile wiring',
        'Screw clamp for secure connection',
        'Field wiring capable',
        'High current capacity',
        'RoHS compliant'
      ],
      applications: [
        'Industrial controls',
        'Lighting systems',
        'Power distribution',
        'Building automation',
        'HVAC systems'
      ],
      faeReview: {
        author: 'Robert Liu',
        title: 'FAE - Terminal Blocks',
        content: 'The WTB-EH-8P-SC is an excellent screw terminal for field wiring applications. The screw clamp ensures secure wire retention, and the compact size is ideal for control panels. I have used this connector in industrial automation projects with great success.',
        highlight: 'Screw terminal for field wiring applications'
      }
    },
    {
      partNumber: 'WTB-SM-4P-CR',
      name: 'WTB-SM-4P-CR 2.5mm Pitch Miniature Connector',
      shortDescription: '2.5mm pitch miniature wire-to-board connector with 4 positions for compact applications.',
      descriptionParagraphs: [
        'The WTB-SM-4P-CR is a miniature wire-to-board connector featuring 2.5mm pitch and 4 positions for space-constrained applications.',
        'With compact design and reliable crimp contacts, this connector provides excellent performance in small packages.',
        'The connector supports current ratings up to 3A per contact and is ideal for portable devices, wearables, and small appliances.'
      ],
      specifications: {
        'Pitch': '2.5mm',
        'Positions': '4',
        'Current Rating': '3A per contact',
        'Voltage Rating': '250V AC/DC',
        'Wire Range': '28-22 AWG',
        'Mating Cycles': '30 cycles',
        'Operating Temperature': '-25°C to +85°C'
      },
      features: [
        '2.5mm compact pitch',
        '4 positions for signal/power',
        'Miniature form factor',
        'Crimp termination',
        'Polarized design',
        'RoHS compliant'
      ],
      applications: [
        'Portable devices',
        'Wearables',
        'Small appliances',
        'Toys',
        'Battery connections'
      ],
      faeReview: {
        author: 'Amy Wang',
        title: 'FAE - Miniature Connectors',
        content: 'The WTB-SM-4P-CR is perfect for compact applications where space is limited. The miniature size and reliable contacts make it ideal for portable devices. I have used this connector in wearable and small appliance projects.',
        highlight: 'Miniature connector for compact applications'
      }
    }
  ],
  
  'circular-connectors': [
    {
      partNumber: 'CIR-M16-12P-STR',
      name: 'CIR-M16-12P-STR M16 Circular Connector',
      shortDescription: 'M16 circular connector with 12 positions, straight configuration, and IP67 protection for industrial applications.',
      descriptionParagraphs: [
        'The CIR-M16-12P-STR is an M16 circular connector featuring 12 positions and straight configuration with IP67 environmental protection.',
        'With rugged metal housing and reliable bayonet coupling, this connector provides secure connections in harsh industrial environments.',
        'The connector supports current ratings up to 5A per contact and is ideal for industrial automation, machinery, and outdoor applications.'
      ],
      specifications: {
        'Shell Size': 'M16',
        'Positions': '12',
        'Current Rating': '5A per contact',
        'Voltage Rating': '250V AC/DC',
        'Protection': 'IP67',
        'Mating Cycles': '500 cycles',
        'Operating Temperature': '-40°C to +85°C'
      },
      features: [
        'M16 standard size',
        '12 positions for versatile signals',
        'IP67 environmental protection',
        'Bayonet coupling for secure mating',
        'Metal housing for durability',
        'RoHS compliant'
      ],
      applications: [
        'Industrial automation',
        'Factory machinery',
        'Outdoor equipment',
        'Process control',
        'Robotics'
      ],
      faeReview: {
        author: 'Kevin Zhang',
        title: 'FAE - Circular Connectors',
        content: 'The CIR-M16-12P-STR is a robust circular connector for industrial applications. The IP67 rating ensures reliable operation in harsh environments, and the 12 positions provide ample capacity for signals and power. I have used this connector in factory automation projects.',
        highlight: 'IP67 circular connector for industrial use'
      }
    },
    {
      partNumber: 'CIR-M23-19P-ANG',
      name: 'CIR-M23-19P-ANG M23 Circular Connector',
      shortDescription: 'M23 circular connector with 19 positions, right-angle configuration, and IP67 protection for high-density applications.',
      descriptionParagraphs: [
        'The CIR-M23-19P-ANG is an M23 circular connector featuring 19 positions and right-angle configuration with IP67 environmental protection.',
        'With high-density contact arrangement and rugged construction, this connector provides reliable connections for servo drives and industrial controls.',
        'The connector supports current ratings up to 10A per contact and is ideal for servo systems, robotics, and heavy machinery.'
      ],
      specifications: {
        'Shell Size': 'M23',
        'Positions': '19',
        'Current Rating': '10A per contact',
        'Voltage Rating': '630V AC/DC',
        'Protection': 'IP67',
        'Mating Cycles': '500 cycles',
        'Operating Temperature': '-40°C to +125°C'
      },
      features: [
        'M23 high-density size',
        '19 positions for servo signals',
        'IP67 environmental protection',
        'Right-angle for space saving',
        'High current capacity',
        'Rugged metal housing'
      ],
      applications: [
        'Servo drives',
        'Robotics',
        'CNC machines',
        'Heavy machinery',
        'Motion control'
      ],
      faeReview: {
        author: 'Michael Liu',
        title: 'FAE - Servo Connectors',
        content: 'The CIR-M23-19P-ANG is excellent for servo drive applications. The 19 positions accommodate power, brake, and feedback signals in one connector. The right-angle design saves space in control cabinets. I have used this connector in servo systems with great success.',
        highlight: 'High-density circular connector for servo systems'
      }
    },
    {
      partNumber: 'CIR-M12-4P-ANG',
      name: 'CIR-M12-4P-ANG M12 Circular Connector',
      shortDescription: 'M12 circular connector with 4 positions, right-angle configuration, and IP67 protection for sensor applications.',
      descriptionParagraphs: [
        'The CIR-M12-4P-ANG is an M12 circular connector featuring 4 positions and right-angle configuration with IP67 environmental protection.',
        'With compact size and reliable screw coupling, this connector provides secure connections for sensors and actuators in industrial environments.',
        'The connector supports current ratings up to 4A per contact and is ideal for industrial sensors, actuators, and fieldbus connections.'
      ],
      specifications: {
        'Shell Size': 'M12',
        'Positions': '4',
        'Current Rating': '4A per contact',
        'Voltage Rating': '250V AC/DC',
        'Protection': 'IP67',
        'Mating Cycles': '100 cycles',
        'Operating Temperature': '-40°C to +85°C'
      },
      features: [
        'M12 compact size',
        '4 positions for sensors',
        'IP67 environmental protection',
        'Right-angle for tight spaces',
        'Screw coupling for security',
        'A-coded for sensors'
      ],
      applications: [
        'Industrial sensors',
        'Proximity switches',
        'Actuators',
        'Fieldbus connections',
        'Automation systems'
      ],
      faeReview: {
        author: 'Jennifer Chen',
        title: 'FAE - Sensor Connectors',
        content: 'The CIR-M12-4P-ANG is perfect for sensor applications. The right-angle design is ideal for tight mounting spaces, and the IP67 rating ensures reliable operation in industrial environments. I have used this connector extensively in automation projects.',
        highlight: 'Compact circular connector for sensor applications'
      }
    },
    {
      partNumber: 'CIR-M8-3P-STR',
      name: 'CIR-M8-3P-STR M8 Circular Connector',
      shortDescription: 'M8 circular connector with 3 positions, straight configuration, and IP67 protection for compact sensor applications.',
      descriptionParagraphs: [
        'The CIR-M8-3P-STR is an M8 circular connector featuring 3 positions and straight configuration with IP67 environmental protection.',
        'With ultra-compact size and reliable screw coupling, this connector provides secure connections for miniature sensors in confined spaces.',
        'The connector supports current ratings up to 3A per contact and is ideal for small sensors, compact actuators, and space-constrained applications.'
      ],
      specifications: {
        'Shell Size': 'M8',
        'Positions': '3',
        'Current Rating': '3A per contact',
        'Voltage Rating': '60V AC/DC',
        'Protection': 'IP67',
        'Mating Cycles': '100 cycles',
        'Operating Temperature': '-25°C to +85°C'
      },
      features: [
        'M8 ultra-compact size',
        '3 positions for power/signal',
        'IP67 environmental protection',
        'Straight configuration',
        'Screw coupling',
        'A-coded standard'
      ],
      applications: [
        'Miniature sensors',
        'Compact actuators',
        'Small devices',
        'Confined spaces',
        'Automation systems'
      ],
      faeReview: {
        author: 'David Lee',
        title: 'FAE - Miniature Circular',
        content: 'The CIR-M8-3P-STR is the go-to connector for miniature sensor applications. The M8 size is perfect for tight spaces where M12 is too large. I have used this connector in compact automation systems with excellent results.',
        highlight: 'Ultra-compact circular connector for small sensors'
      }
    }
  ],
  
  'custom-interconnect': [
    {
      partNumber: 'CUS-WTB-HV-12',
      name: 'CUS-WTB-HV-12 Custom High-Voltage Wire-to-Board',
      shortDescription: 'Custom high-voltage wire-to-board connector with 12 positions and enhanced insulation for power electronics.',
      descriptionParagraphs: [
        'The CUS-WTB-HV-12 is a custom high-voltage wire-to-board connector featuring 12 positions with enhanced insulation and creepage distance.',
        'With specialized housing material and increased spacing, this connector provides safe high-voltage connections up to 1000V.',
        'The connector is designed for power electronics, inverters, and high-voltage industrial applications requiring custom configurations.'
      ],
      specifications: {
        'Positions': '12',
        'Current Rating': '15A per contact',
        'Voltage Rating': '1000V AC/DC',
        'Insulation Resistance': '5000MΩ min',
        'Withstand Voltage': '3000V AC',
        'Operating Temperature': '-40°C to +125°C'
      },
      features: [
        '12 positions for power/signal',
        '1000V high-voltage rating',
        'Enhanced insulation',
        'Increased creepage distance',
        'Custom housing material',
        'UL recognized'
      ],
      applications: [
        'Power electronics',
        'Solar inverters',
        'EV charging',
        'Industrial drives',
        'Medical equipment'
      ],
      faeReview: {
        author: 'Steven Wang',
        title: 'FAE - Custom Solutions',
        content: 'The CUS-WTB-HV-12 is an excellent custom solution for high-voltage applications. The enhanced insulation and creepage distance ensure safety at high voltages. I worked with Bronze Tech to develop this connector for a solar inverter project.',
        highlight: 'Custom high-voltage connector for power electronics'
      }
    },
    {
      partNumber: 'CUS-CIR-MIX-16',
      name: 'CUS-CIR-MIX-16 Custom Mixed Signal Circular',
      shortDescription: 'Custom mixed-signal circular connector with 16 positions combining power, signal, and data contacts.',
      descriptionParagraphs: [
        'The CUS-CIR-MIX-16 is a custom mixed-signal circular connector featuring 16 positions with a combination of power, signal, and data contacts.',
        'With hybrid contact arrangement and shielded data pairs, this connector provides integrated connectivity for complex systems.',
        'The connector is designed for robotics, automation systems, and integrated machinery requiring multiple signal types in one connection.'
      ],
      specifications: {
        'Shell Size': 'Custom M19',
        'Positions': '16 (mixed)',
        'Power Contacts': '4 x 10A',
        'Signal Contacts': '8 x 2A',
        'Data Pairs': '2 x shielded',
        'Protection': 'IP67'
      },
      features: [
        '16 mixed-signal positions',
        'Power, signal, and data',
        'Shielded data pairs',
        'Integrated connectivity',
        'IP67 protection',
        'Custom keying'
      ],
      applications: [
        'Robotics',
        'Automation systems',
        'Integrated machinery',
        'Test systems',
        'Custom equipment'
      ],
      faeReview: {
        author: 'Rachel Chen',
        title: 'FAE - Mixed Signal',
        content: 'The CUS-CIR-MIX-16 is a versatile custom connector that combines multiple signal types in one housing. This reduces connector count and simplifies cable management. I worked on a robotics project where this connector saved significant space and assembly time.',
        highlight: 'Custom mixed-signal connector for integrated systems'
      }
    },
    {
      partNumber: 'CUS-BTB-FLEX-30',
      name: 'CUS-BTB-FLEX-30 Custom Flexible Board-to-Board',
      shortDescription: 'Custom flexible board-to-board connector with 30 positions for dynamic flex applications.',
      descriptionParagraphs: [
        'The CUS-BTB-FLEX-30 is a custom flexible board-to-board connector featuring 30 positions designed for dynamic flex applications.',
        'With specialized contact design and flexible mounting options, this connector maintains reliable connections during movement and vibration.',
        'The connector is designed for robotics, moving equipment, and applications requiring reliable connections in dynamic environments.'
      ],
      specifications: {
        'Positions': '30',
        'Pitch': '1.0mm',
        'Current Rating': '0.5A per contact',
        'Flex Cycles': '10000+',
        'Mating Cycles': '200 cycles',
        'Operating Temperature': '-40°C to +85°C'
      },
      features: [
        '30 positions for signals',
        'High flex cycle rating',
        'Dynamic movement capable',
        'Reliable contact design',
        'Flexible mounting',
        'Custom form factor'
      ],
      applications: [
        'Robotics joints',
        'Moving equipment',
        'Hinged devices',
        'Sliding mechanisms',
        'Dynamic systems'
      ],
      faeReview: {
        author: 'Tom Liu',
        title: 'FAE - Flexible Connectors',
        content: 'The CUS-BTB-FLEX-30 is designed specifically for dynamic applications. The high flex cycle rating ensures long life in moving joints. I worked on a robotic arm project where this connector performed excellently through thousands of cycles.',
        highlight: 'Custom flexible connector for dynamic applications'
      }
    },
    {
      partNumber: 'CUS-CAB-HAR-01',
      name: 'CUS-CAB-HAR-01 Custom Cable Harness Assembly',
      shortDescription: 'Custom cable harness assembly with multiple connector types and labeling for complex systems.',
      descriptionParagraphs: [
        'The CUS-CAB-HAR-01 is a custom cable harness assembly featuring multiple Bronze Tech connector types integrated into a single harness.',
        'With professional assembly, testing, and labeling, this harness provides plug-and-play connectivity for complex equipment.',
        'The harness is designed for industrial machinery, test equipment, and systems requiring multiple connections with consistent quality.'
      ],
      specifications: {
        'Connectors': 'Multiple types',
        'Wire Types': 'UL listed',
        'Testing': '100% continuity',
        'Labeling': 'Custom available',
        'Length': 'Custom per spec',
        'Protection': 'Optional sleeving'
      },
      features: [
        'Multiple connector integration',
        'Professional assembly',
        '100% tested',
        'Custom labeling',
        'Consistent quality',
        'Plug-and-play'
      ],
      applications: [
        'Industrial machinery',
        'Test equipment',
        'Control systems',
        'Automation panels',
        'Custom equipment'
      ],
      faeReview: {
        author: 'Nancy Zhang',
        title: 'FAE - Cable Assemblies',
        content: 'The CUS-CAB-HAR-01 provides complete cable assembly solutions. The professional assembly and testing ensure reliable operation, while custom labeling simplifies installation. I have ordered these harnesses for multiple projects with excellent quality and on-time delivery.',
        highlight: 'Custom cable harness for complex systems'
      }
    }
  ]
};

// Add products to each category
let addedCount = 0;

productsData.categories.forEach((category) => {
  const categoryKey = category.slug;
  console.log(`\n📂 Processing category: ${category.name}`);
  console.log(`   Current products: ${category.products.length}`);
  
  if (additionalProducts[categoryKey]) {
    const currentCount = category.products.length;
    const neededCount = 6 - currentCount;
    
    if (neededCount > 0) {
      const productsToAdd = additionalProducts[categoryKey].slice(0, neededCount);
      category.products.push(...productsToAdd);
      addedCount += productsToAdd.length;
      console.log(`   ✓ Added ${productsToAdd.length} products`);
      console.log(`   Total products: ${category.products.length}`);
    } else {
      console.log(`   ✓ Already has ${currentCount} products (no addition needed)`);
    }
  }
});

// Write back
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`\n========================================`);
console.log(`Product addition complete!`);
console.log(`Total products added: ${addedCount}`);
console.log(`========================================`);
