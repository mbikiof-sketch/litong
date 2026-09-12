const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/tdk/solutions.json', 'utf8'));

console.log('Current TDK solutions count:', data.solutions ? data.solutions.length : 0);

if (!data.solutions || data.solutions.length < 3) {
  const newSolution = {
    id: 'renewable-energy-solutions',
    title: 'Renewable Energy System Solutions',
    shortDescription: 'High-reliability passive components for solar inverters, wind turbine converters, and energy storage systems.',
    description: 'TDK\'s passive components provide the reliability and performance required for renewable energy applications. Our film capacitors offer long lifetime for DC link applications, while aluminum electrolytic capacitors provide bulk energy storage. Power inductors enable efficient power conversion in inverters and converters.',
    coreAdvantages: [
      {
        title: 'Long Lifetime Design',
        description: 'Film capacitors rated for 100,000+ hours, aluminum electrolytic for 10,000-20,000 hours at rated temperature.'
      },
      {
        title: 'High Ripple Current',
        description: 'Components designed to handle high ripple currents in inverter applications.'
      },
      {
        title: 'Wide Voltage Range',
        description: 'Capacitors available up to 1500V+ for high-voltage DC link applications.'
      },
      {
        title: 'Self-Healing Film Capacitors',
        description: 'Metallized film capacitors with self-healing properties for enhanced reliability.'
      },
      {
        title: 'Environmental Resistance',
        description: 'Components rated for outdoor operation with wide temperature ranges.'
      }
    ],
    products: [
      {
        partNumber: 'B32774D8205K',
        name: '2µF 1100V DC Link Film Capacitor',
        category: 'Film Capacitors',
        link: '/tdk/products/film-capacitors/b32774d8205k.html'
      },
      {
        partNumber: 'B43700A5687M',
        name: '680µF 400V Aluminum Electrolytic',
        category: 'Aluminum Electrolytic Capacitors',
        link: '/tdk/products/aluminum-electrolytic-capacitors/b43700a5687m.html'
      },
      {
        partNumber: 'SLF12575T-100M3R2-PF',
        name: '10µH 3.2A Power Inductor',
        category: 'Inductors',
        link: '/tdk/products/inductors/slf12575t-100m3r2-pf.html'
      }
    ],
    bomList: [
      {
        category: 'DC Link Capacitors',
        items: [
          {
            partNumber: 'B32774D8205K',
            description: '2µF 1100V Film Capacitor',
            quantity: 6,
            link: '/tdk/products/film-capacitors/b32774d8205k.html'
          }
        ]
      },
      {
        category: 'Bulk Capacitance',
        items: [
          {
            partNumber: 'B43700A5687M',
            description: '680µF 400V Aluminum Electrolytic',
            quantity: 4,
            link: '/tdk/products/aluminum-electrolytic-capacitors/b43700a5687m.html'
          }
        ]
      }
    ],
    technicalSpecs: {
      'Operating Temperature': '-40°C to +85°C ambient',
      'Humidity': '0-95% RH non-condensing',
      'Protection Rating': 'IP65 recommended enclosure'
    },
    customerCases: [
      {
        customer: 'Solar Inverter Manufacturer',
        industry: 'Renewable Energy',
        challenge: 'Needed reliable DC link capacitors for 1500V inverters with 25-year lifetime',
        solution: 'TDK B3277x series film capacitors with voltage derating',
        result: 'Eliminated DC link reliability concerns for remote installations'
      }
    ],
    faeInsights: {
      author: {
        name: 'Senior FAE',
        title: 'Applications Engineer',
        experience: '10+ years'
      },
      content: 'For renewable energy applications, component lifetime is critical due to the difficulty of maintenance in remote installations. We recommend film capacitors for DC link applications where possible, as they offer 100,000+ hour lifetime. When using aluminum electrolytic capacitors, apply significant voltage derating (30-40%) to extend lifetime. Thermal management is also crucial - ensure adequate cooling to keep capacitor temperatures below 70°C for maximum life.',
      keyTakeaways: [
        'Use film capacitors for DC link when possible',
        'Apply 30-40% voltage derating to electrolytic capacitors',
        'Design for capacitor temperatures below 70°C',
        'Consider maintenance access in remote locations'
      ],
      decisionFramework: {
        steps: [
          'Define system voltage and power requirements',
          'Select DC link capacitor type (film vs electrolytic)',
          'Calculate required capacitance and ripple current',
          'Apply voltage derating for lifetime',
          'Design thermal management system'
        ],
        decisionPoints: [
          'Film vs electrolytic for DC link',
          'Voltage derating strategy',
          'Cooling method selection'
        ]
      }
    },
    slug: 'renewable-energy-solutions',
    longDescription: 'The Renewable Energy System Solutions from TDK provides comprehensive passive component solutions for solar, wind, and energy storage applications. This solution integrates high-reliability film capacitors, long-life aluminum electrolytic capacitors, and power inductors optimized for renewable energy systems.',
    benefits: [
      'Long Lifetime Design',
      'High Ripple Current',
      'Wide Voltage Range',
      'Self-Healing Film Capacitors',
      'Environmental Resistance'
    ],
    faqs: [
      {
        question: 'What are the key components in the Renewable Energy System Solutions?',
        answer: 'The Renewable Energy System Solutions utilizes TDK\'s high-reliability passive components including film capacitors for DC link applications, aluminum electrolytic capacitors for bulk energy storage, and power inductors for filtering and conversion.',
        decisionGuide: 'Review the BOM list and contact our FAE team for component selection assistance.',
        keywords: ['solution components', 'BOM', 'component selection']
      }
    ],
    name: 'Renewable Energy System Solutions'
  };
  
  data.solutions.push(newSolution);
  fs.writeFileSync('./data/tdk/solutions.json', JSON.stringify(data, null, 2));
  console.log('Added 1 solution. New count:', data.solutions.length);
} else {
  console.log('No changes needed');
}
