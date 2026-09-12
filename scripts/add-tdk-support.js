const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/tdk/support.json', 'utf8'));

console.log('Current TDK support articles count:', data.articles ? data.articles.length : 0);

if (!data.articles || data.articles.length < 5) {
  const newArticle = {
    id: 'emi-filtering-guide',
    title: 'EMI Filtering Design Guide for Power Supplies',
    category: 'Design Guide',
    shortDescription: 'Comprehensive guide for designing EMI filters using common mode chokes and capacitors.',
    content: '## Introduction to EMI Filtering\n\nElectromagnetic interference (EMI) filtering is essential for meeting regulatory requirements and ensuring reliable operation of power supplies. This guide covers the design of effective EMI filters using TDK components.\n\n## Common Mode vs Differential Mode Noise\n\nEMI consists of common mode and differential mode components. Common mode noise flows in the same direction on both lines, while differential mode noise flows between the lines. Different filter components are required for each type.\n\n## Common Mode Choke Selection\n\nCommon mode chokes provide high impedance to common mode noise while presenting low impedance to differential signals. Key selection parameters include impedance at the switching frequency, rated current, and DCR.\n\n## Capacitor Selection\n\nX capacitors are used for differential mode filtering, while Y capacitors provide common mode filtering. Selection considerations include capacitance value, voltage rating, and safety approvals.\n\n## Filter Design Procedure\n\n1. Measure conducted emissions to identify frequency ranges\n2. Calculate required attenuation\n3. Select filter topology (single-stage or multi-stage)\n4. Calculate component values\n5. Verify design through simulation and testing\n\n## Conclusion\n\nProper EMI filter design requires understanding the noise characteristics and selecting appropriate components. TDK\'s comprehensive portfolio provides solutions for all EMI filtering needs.',
    tags: [
      'EMI filtering',
      'common mode choke',
      'power supply design',
      'EMC compliance'
    ],
    relatedProducts: [
      'ACM2012-900-2P-T002',
      'C2012X7R1H475K125AC'
    ],
    author: {
      name: 'Jennifer Liu',
      title: 'Senior FAE - Power Applications',
      email: 'j.liu@BeiLuo.com',
      image: '/assets/team/jennifer-liu.jpg'
    },
    publishedDate: '2024-03-15',
    lastUpdated: '2024-04-01',
    readTime: '20 minutes',
    difficulty: 'Advanced',
    faeInsights: {
      author: {
        name: 'Technical FAE',
        title: 'Support Engineer',
        experience: '8+ years'
      },
      content: 'In my experience, the most common EMI filtering mistake is inadequate common mode impedance at the switching frequency harmonics. Many designers select chokes based on datasheet values at 100MHz, but switching power supplies generate significant noise at lower frequencies (100kHz-10MHz). I always recommend measuring the actual conducted emissions first, then selecting components based on the specific frequency ranges where attenuation is needed.',
      keyTakeaways: [
        'Measure emissions before designing filter',
        'Select chokes based on impedance at switching harmonics',
        'Consider both common and differential mode noise',
        'Use multi-stage filters for high attenuation requirements'
      ],
      decisionFramework: {
        steps: [
          'Measure conducted emissions',
          'Identify frequency ranges requiring attenuation',
          'Select filter topology',
          'Calculate component values',
          'Verify through testing'
        ],
        decisionPoints: [
          'Single-stage vs multi-stage filter',
          'Common mode choke impedance selection',
          'X and Y capacitor values'
        ]
      },
      insightLogic: 'Based on extensive field experience supporting power supply designs and EMI troubleshooting.'
    },
    faqs: [
      {
        question: 'What is the difference between common mode and differential mode noise?',
        answer: 'Common mode noise flows in the same direction on both power lines and returns through ground. Differential mode noise flows between the power lines. Common mode chokes filter common mode noise, while X capacitors filter differential mode noise.',
        decisionGuide: 'Use common mode chokes for common noise; X capacitors for differential noise.',
        keywords: ['common mode', 'differential mode', 'EMI types']
      },
      {
        question: 'How do I select the right common mode choke?',
        answer: 'Select common mode choke based on: 1) Impedance at switching frequency harmonics, 2) Rated current (with margin), 3) DCR for voltage drop considerations, 4) Package size constraints.',
        decisionGuide: 'Match impedance to noise frequency; use 30% current margin.',
        keywords: ['common mode choke', 'choke selection', 'impedance']
      },
      {
        question: 'What are X and Y capacitors?',
        answer: 'X capacitors are connected line-to-line for differential mode filtering. Y capacitors are connected line-to-ground for common mode filtering. Y capacitors must meet stricter safety requirements.',
        decisionGuide: 'Use X caps between lines; Y caps to ground.',
        keywords: ['X capacitor', 'Y capacitor', 'safety capacitors']
      },
      {
        question: 'How many filter stages do I need?',
        answer: 'Single-stage filters provide 20-40dB attenuation. Multi-stage filters can achieve 60dB+ attenuation. The number of stages depends on the required attenuation and the noise spectrum.',
        decisionGuide: 'Use single-stage for <40dB; multi-stage for higher attenuation.',
        keywords: ['filter stages', 'attenuation', 'filter design']
      },
      {
        question: 'What causes filter resonance?',
        answer: 'Filter resonance occurs when the filter\'s LC components form a resonant circuit at certain frequencies. This can amplify noise rather than attenuate it. Damping resistors or careful component selection can prevent resonance.',
        decisionGuide: 'Add damping resistors or select components to avoid resonance.',
        keywords: ['filter resonance', 'LC filter', 'damping']
      }
    ],
    customerCases: [
      {
        customer: 'Power Supply Manufacturer',
        industry: 'Industrial',
        challenge: 'Failed EMC compliance testing for new industrial power supply',
        solution: 'Redesigned EMI filter using TDK common mode chokes and capacitors',
        feedback: 'The EMI filtering guide helped us achieve 10dB margin on EMC testing'
      }
    ],
    slug: 'emi-filtering-guide',
    publishDate: '2024-03-15',
    summary: 'Comprehensive guide for designing EMI filters using common mode chokes and capacitors for power supply applications.',
    relatedArticles: [
      {
        id: 'mlcc-selection-guide',
        title: 'MLCC Selection Guide',
        summary: 'Guide for selecting MLCCs'
      },
      {
        id: 'inductor-selection-guide',
        title: 'Power Inductor Selection',
        summary: 'Guide for selecting power inductors'
      }
    ]
  };
  
  data.articles.push(newArticle);
  fs.writeFileSync('./data/tdk/support.json', JSON.stringify(data, null, 2));
  console.log('Added 1 article. New count:', data.articles.length);
} else {
  console.log('No changes needed');
}
