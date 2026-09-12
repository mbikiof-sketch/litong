const fs = require('fs');

// Read the products.json file
const productsPath = 'data/aipu/products.json';
const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Find categories
const fixedInputCategory = data.categories.find(cat => cat.id === 'dc-dc-fixed-input');
const wideInputCategory = data.categories.find(cat => cat.id === 'dc-dc-wide-input');
const acDcCategory = data.categories.find(cat => cat.id === 'ac-dc-power-modules');
const transceiverCategory = data.categories.find(cat => cat.id === 'isolated-transceiver-modules');

// New Fixed Input DC-DC products to add (need 3 more to reach 6)
const fixedInputProducts = [
  {
    partNumber: "A0512S-1W",
    name: "A0512S-1W Fixed Input DC-DC Power Module",
    description: "5V input to 12V output 1W isolated DC-DC power module, SIP package, suitable for analog circuit power supply",
    shortDescription: "5V to 12V isolated 1W DC-DC power module with 1500VDC isolation, SIP7 package, 84% efficiency for analog circuits",
    descriptionParagraphs: [
      "The A0512S-1W is a fixed input DC-DC power module in Aipu Electronics' A series, specifically designed for 5V to 12V step-up applications.",
      "This module uses high-efficiency power conversion technology to achieve 5V input to 12V output isolation conversion in a compact SIP package. Isolation voltage reaches 1500VDC.",
      "The A0512S-1W is particularly suitable for providing 12V power supply to analog circuits, sensors, and communication modules from 5V systems."
    ],
    features: [
      "Input voltage 5VDC (4.5-5.5V)",
      "Output voltage 12VDC, power 1W",
      "Isolation voltage 1500VDC",
      "High efficiency 84%",
      "SIP7 package",
      "Industrial temperature range -40C to +85C",
      "Short circuit protection"
    ],
    specifications: {
      "Input Voltage": "5VDC (4.5-5.5V)",
      "Output Voltage": "12VDC",
      "Output Power": "1W",
      "Output Current": "83mA",
      "Isolation Voltage": "1500VDC",
      "Efficiency": "84% typ",
      "Ripple Noise": "80mVp-p max",
      "Operating Temperature": "-40C ~ +85C",
      "Package": "SIP7",
      "Dimensions": "11.5x6.0x10mm"
    },
    applications: [
      "Analog circuit power supply",
      "Sensor power supply",
      "Communication module power",
      "Industrial control systems"
    ],
    faqs: [
      {
        question: "What is the efficiency of A0512S-1W?",
        answer: "The A0512S-1W typical efficiency is 84%, which is excellent for a 5V to 12V step-up conversion module. High efficiency means lower power loss and minimal heat generation.",
        decisionGuide: "84% efficiency provides excellent power conversion with minimal heat generation.",
        keywords: ["efficiency", "84%", "step-up"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The A0512S-1W is a reliable step-up converter for 5V to 12V applications. It performs excellently in sensor power supply applications.",
      highlight: "Reliable step-up conversion, excellent for sensors"
    },
    stockStatus: "In Stock",
    moq: 10,
    leadTime: "2-4 weeks",
    price: "$2.50"
  },
  {
    partNumber: "A0524S-2W",
    name: "A0524S-2W Fixed Input DC-DC Power Module",
    description: "5V input to 24V output 2W isolated DC-DC power module, SIP package, suitable for high voltage analog circuits",
    shortDescription: "5V to 24V isolated 2W DC-DC power module with 1500VDC isolation, SIP7 package, 83% efficiency for high voltage circuits",
    descriptionParagraphs: [
      "The A0524S-2W is a fixed input DC-DC power module in Aipu Electronics' A series, specifically designed for 5V to 24V step-up applications.",
      "This module uses advanced power conversion technology to achieve efficient 5V to 24V conversion in a compact SIP package. Isolation voltage reaches 1500VDC.",
      "The A0524S-2W is particularly suitable for providing 24V power supply to analog circuits, industrial sensors, and relay drivers from 5V systems."
    ],
    features: [
      "Input voltage 5VDC (4.5-5.5V)",
      "Output voltage 24VDC, power 2W",
      "Isolation voltage 1500VDC",
      "High efficiency 83%",
      "SIP7 package",
      "Industrial temperature range -40C to +85C",
      "Short circuit protection"
    ],
    specifications: {
      "Input Voltage": "5VDC (4.5-5.5V)",
      "Output Voltage": "24VDC",
      "Output Power": "2W",
      "Output Current": "83mA",
      "Isolation Voltage": "1500VDC",
      "Efficiency": "83% typ",
      "Ripple Noise": "100mVp-p max",
      "Operating Temperature": "-40C ~ +85C",
      "Package": "SIP7"
    },
    applications: [
      "High voltage analog circuits",
      "Industrial sensors",
      "Relay drivers",
      "Communication interfaces"
    ],
    faqs: [
      {
        question: "What is the output current of A0524S-2W?",
        answer: "The A0524S-2W output current is 83mA at 24V output (2W power). This is sufficient for most analog circuits and sensor applications.",
        decisionGuide: "83mA output current suitable for analog circuits and sensors.",
        keywords: ["output current", "83mA", "24V"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The A0524S-2W provides reliable 24V from 5V systems. Excellent for industrial sensor applications.",
      highlight: "Reliable 24V generation from 5V input"
    },
    stockStatus: "In Stock",
    moq: 10,
    leadTime: "2-4 weeks",
    price: "$3.20"
  },
  {
    partNumber: "A1205S-1W",
    name: "A1205S-1W Fixed Input DC-DC Power Module",
    description: "12V input to 5V output 1W isolated DC-DC power module, SIP package, suitable for digital circuit power supply",
    shortDescription: "12V to 5V isolated 1W DC-DC power module with 1500VDC isolation, SIP7 package, 85% efficiency for digital circuits",
    descriptionParagraphs: [
      "The A1205S-1W is a fixed input DC-DC power module in Aipu Electronics' A series, specifically designed for 12V to 5V step-down applications.",
      "This module uses high-efficiency power conversion technology to achieve 12V input to 5V output isolation conversion in a compact SIP package. Isolation voltage reaches 1500VDC.",
      "The A1205S-1W is particularly suitable for providing 5V power supply to digital circuits, microcontrollers, and communication interfaces from 12V systems."
    ],
    features: [
      "Input voltage 12VDC (10.8-13.2V)",
      "Output voltage 5VDC, power 1W",
      "Isolation voltage 1500VDC",
      "High efficiency 85%",
      "SIP7 package",
      "Industrial temperature range -40C to +85C",
      "Short circuit protection"
    ],
    specifications: {
      "Input Voltage": "12VDC (10.8-13.2V)",
      "Output Voltage": "5VDC",
      "Output Power": "1W",
      "Output Current": "200mA",
      "Isolation Voltage": "1500VDC",
      "Efficiency": "85% typ",
      "Ripple Noise": "70mVp-p max",
      "Operating Temperature": "-40C ~ +85C",
      "Package": "SIP7"
    },
    applications: [
      "Digital circuit power supply",
      "Microcontroller power",
      "Communication interfaces",
      "Industrial control systems"
    ],
    faqs: [
      {
        question: "What is the efficiency of A1205S-1W?",
        answer: "The A1205S-1W typical efficiency is 85%, which is excellent for a 12V to 5V conversion module. High efficiency means low heat generation.",
        decisionGuide: "85% efficiency provides excellent power conversion with minimal heat.",
        keywords: ["efficiency", "85%", "step-down"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The A1205S-1W is widely used for powering 5V digital circuits from 12V systems. Reliable and cost-effective.",
      highlight: "Reliable 12V to 5V conversion for digital circuits"
    },
    stockStatus: "In Stock",
    moq: 10,
    leadTime: "2-4 weeks",
    price: "$2.30"
  }
];

// New Wide Input DC-DC products to add (need 4 more to reach 6)
const wideInputProducts = [
  {
    partNumber: "B0505S-1W",
    name: "B0505S-1W Wide Input DC-DC Power Module",
    description: "4.5-9V input to 5V output 1W isolated DC-DC power module, SIP package, suitable for battery power applications",
    shortDescription: "4.5-9V to 5V isolated 1W DC-DC power module with 1500VDC isolation, SIP7 package, 80% efficiency for battery apps",
    descriptionParagraphs: [
      "The B0505S-1W is a wide input DC-DC power module in Aipu Electronics' B series, specifically designed for battery power applications.",
      "This module accepts 4.5-9V input range, making it ideal for 6V and 12V battery systems. Isolation voltage reaches 1500VDC.",
      "The B0505S-1W is particularly suitable for battery-powered devices, portable equipment, and applications with voltage fluctuations."
    ],
    features: [
      "Input voltage 4.5-9VDC (2:1 range)",
      "Output voltage 5VDC, power 1W",
      "Isolation voltage 1500VDC",
      "High efficiency 80%",
      "SIP7 package",
      "Industrial temperature range -40C to +85C",
      "Short circuit protection"
    ],
    specifications: {
      "Input Voltage": "4.5-9VDC",
      "Output Voltage": "5VDC",
      "Output Power": "1W",
      "Output Current": "200mA",
      "Isolation Voltage": "1500VDC",
      "Efficiency": "80% typ",
      "Ripple Noise": "75mVp-p max",
      "Operating Temperature": "-40C ~ +85C",
      "Package": "SIP7"
    },
    applications: [
      "Battery-powered devices",
      "Portable equipment",
      "Voltage fluctuating systems",
      "Industrial control"
    ],
    faqs: [
      {
        question: "What battery voltages can B0505S-1W support?",
      answer: "The B0505S-1W supports 6V and 12V battery systems with its 4.5-9V input range. It can handle battery voltage variations during charge/discharge cycles.",
        decisionGuide: "Ideal for 6V and 12V battery-powered applications.",
        keywords: ["battery", "6V", "12V", "wide input"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The B0505S-1W is perfect for battery applications. The wide input range handles battery voltage variations well.",
      highlight: "Excellent for battery-powered applications"
    },
    stockStatus: "In Stock",
    moq: 10,
    leadTime: "2-4 weeks",
    price: "$2.80"
  },
  {
    partNumber: "B1212S-2W",
    name: "B1212S-2W Wide Input DC-DC Power Module",
    description: "9-18V input to 12V output 2W isolated DC-DC power module, SIP package, suitable for 12V battery systems",
    shortDescription: "9-18V to 12V isolated 2W DC-DC power module with 1500VDC isolation, SIP7 package, 83% efficiency for 12V battery apps",
    descriptionParagraphs: [
      "The B1212S-2W is a wide input DC-DC power module in Aipu Electronics' B series, specifically designed for 12V battery applications.",
      "This module accepts 9-18V input range, covering the full range of 12V lead-acid and lithium battery voltages. Isolation voltage reaches 1500VDC.",
      "The B1212S-2W is particularly suitable for automotive applications, solar systems, and 12V battery-powered industrial equipment."
    ],
    features: [
      "Input voltage 9-18VDC (2:1 range)",
      "Output voltage 12VDC, power 2W",
      "Isolation voltage 1500VDC",
      "High efficiency 83%",
      "SIP7 package",
      "Industrial temperature range -40C to +85C",
      "Short circuit protection"
    ],
    specifications: {
      "Input Voltage": "9-18VDC",
      "Output Voltage": "12VDC",
      "Output Power": "2W",
      "Output Current": "167mA",
      "Isolation Voltage": "1500VDC",
      "Efficiency": "83% typ",
      "Ripple Noise": "80mVp-p max",
      "Operating Temperature": "-40C ~ +85C",
      "Package": "SIP7"
    },
    applications: [
      "12V battery systems",
      "Automotive electronics",
      "Solar power systems",
      "Industrial equipment"
    ],
    faqs: [
      {
        question: "Is B1212S-2W suitable for automotive applications?",
        answer: "Yes, the B1212S-2W is suitable for automotive 12V systems. Its 9-18V input range covers typical automotive voltage variations (10.5-14.5V).",
        decisionGuide: "Suitable for automotive 12V systems with voltage variations.",
        keywords: ["automotive", "12V battery", "voltage range"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The B1212S-2W is widely used in automotive and solar applications. Handles battery voltage variations excellently.",
      highlight: "Perfect for 12V battery systems"
    },
    stockStatus: "In Stock",
    moq: 10,
    leadTime: "2-4 weeks",
    price: "$3.50"
  },
  {
    partNumber: "B2405S-1W",
    name: "B2405S-1W Wide Input DC-DC Power Module",
    description: "18-36V input to 5V output 1W isolated DC-DC power module, SIP package, suitable for 24V industrial systems",
    shortDescription: "18-36V to 5V isolated 1W DC-DC power module with 1500VDC isolation, SIP7 package, 82% efficiency for 24V systems",
    descriptionParagraphs: [
      "The B2405S-1W is a wide input DC-DC power module in Aipu Electronics' B series, specifically designed for 24V industrial systems.",
      "This module accepts 18-36V input range, covering typical 24V industrial voltage variations. Isolation voltage reaches 1500VDC.",
      "The B2405S-1W is particularly suitable for industrial automation, PLC systems, and 24V industrial control applications."
    ],
    features: [
      "Input voltage 18-36VDC (2:1 range)",
      "Output voltage 5VDC, power 1W",
      "Isolation voltage 1500VDC",
      "High efficiency 82%",
      "SIP7 package",
      "Industrial temperature range -40C to +85C",
      "Short circuit protection"
    ],
    specifications: {
      "Input Voltage": "18-36VDC",
      "Output Voltage": "5VDC",
      "Output Power": "1W",
      "Output Current": "200mA",
      "Isolation Voltage": "1500VDC",
      "Efficiency": "82% typ",
      "Ripple Noise": "75mVp-p max",
      "Operating Temperature": "-40C ~ +85C",
      "Package": "SIP7"
    },
    applications: [
      "24V industrial systems",
      "PLC power supply",
      "Industrial automation",
      "Control systems"
    ],
    faqs: [
      {
        question: "What is the input range for 24V systems?",
        answer: "The B2405S-1W accepts 18-36V input, which covers typical 24V industrial voltage variations (20-30V) with margin.",
        decisionGuide: "Perfect for 24V industrial systems with voltage fluctuations.",
        keywords: ["24V", "industrial", "input range"]
      }
    ],
    faeReview: {
      author: "BeiLuo FAE Team",
      content: "The B2405S-1W is widely used in 24V industrial systems. Reliable performance in PLC and automation applications.",
      highlight: "Ideal for 24V industrial applications"
    },
    stockStatus: "In Stock",
    moq: 10,
    leadTime: "2-4 weeks",
    price: "$2.90"
  },
  {
    partNumber: "B4824S-2W",
    name: "B4824S-2W Wide Input DC-DC Power Module",
    description: "36-75V input to 24V output 2W isolated DC-DC power module, SIP package, suitable for 48V telecom systems",
