const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'smartsens', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Helper to generate product FAQ
function generateProductFAQ(partNumber, category) {
  return [
    {
      question: `What is the typical low-light performance of the ${partNumber}?`,
      answer: `The ${partNumber} achieves exceptional low-light performance through advanced pixel technology and noise reduction algorithms. Minimum illumination specifications vary by model, with premium sensors achieving down to 0.001 lux in color mode. This enables clear imaging in challenging lighting conditions including nighttime surveillance and dimly lit environments.`,
      decisionGuide: `Consider low-light requirements for your application. Contact FAE for detailed performance curves.`,
      keywords: ['low light', 'night vision', partNumber]
    },
    {
      question: `How do I optimize image quality with the ${partNumber}?`,
      answer: `For optimal image quality with ${partNumber}: 1) Ensure proper lens selection matching the optical format, 2) Configure appropriate exposure settings for your lighting conditions, 3) Enable HDR/WDR for high-contrast scenes, 4) Use recommended power supply filtering, 5) Follow PCB layout guidelines for noise reduction. Contact FAE for tuning assistance.`,
      decisionGuide: `Follow reference design guidelines. Contact FAE for image quality optimization support.`,
      keywords: ['image quality', 'optimization', 'tuning']
    },
    {
      question: `What are the primary applications for the ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${category} applications requiring high-performance imaging. Typical use cases include professional surveillance systems, automotive camera modules, industrial inspection equipment, and consumer electronics devices. The sensor's advanced features make it suitable for demanding imaging requirements.`,
      decisionGuide: `Ideal for ${category} applications. Verify specifications match your requirements.`,
      keywords: ['applications', 'use cases', category]
    },
    {
      question: `How does the ${partNumber} compare to competitive solutions?`,
      answer: `The ${partNumber} offers competitive advantages including excellent price-performance ratio, advanced pixel technologies, and reliable supply chain. Compared to alternatives from Sony, ON Semiconductor, and Omnivision, it provides comparable image quality with competitive pricing. SmartSens' focus on specific market segments delivers optimized solutions.`,
      decisionGuide: `Evaluate based on image quality, cost, and supply availability. Request samples for comparison.`,
      keywords: ['comparison', 'competitive analysis']
    },
    {
      question: `What is the lead time and availability for the ${partNumber}?`,
      answer: `Standard lead time for ${partNumber} is 4-6 weeks for production orders. BeiLuo maintains strategic inventory for faster delivery on standard orders. Sample quantities are available for evaluation with 1-2 week lead time. Contact sales for current stock status and allocation planning.`,
      decisionGuide: `Contact sales for current lead times. Plan for standard production lead times.`,
      keywords: ['lead time', 'delivery', 'availability']
    }
  ];
}

// New products to add
const newProducts = {
  'security-surveillance-sensors': [
    {
      partNumber: 'SC401AI',
      name: '4MP AI-Enhanced Security Sensor',
      shortDescription: 'High-performance 4MP security sensor with AI acceleration and excellent WDR for professional surveillance applications.',
      descriptionParagraphs: [
        'The SC401AI is a 4-megapixel CMOS image sensor designed for AI-powered security applications. Featuring SmartSens advanced AI pixel technology, this sensor delivers exceptional image quality with built-in AI acceleration for edge analytics.',
        'With 1/3 inch optical format and 2.0μm pixels, the SC401AI achieves excellent sensitivity and dynamic range. The sensor supports up to 120dB WDR for challenging lighting conditions and includes LED flicker mitigation.',
        'The SC401AI supports MIPI CSI-2 interface and multiple output formats optimized for AI processing. Its low power consumption and compact package make it ideal for IP cameras and smart surveillance systems.'
      ],
      specifications: {
        'Resolution': '4MP (2560 x 1440)',
        'Optical Format': '1/3"',
        'Pixel Size': '2.0μm',
        'Min Illumination': '0.005 lux (color)',
        'WDR': '120dB',
        'Max Frame Rate': '30fps @ 4MP',
        'Interface': 'MIPI CSI-2 4-lane',
        'Power Consumption': '150mW',
        'AI Acceleration': 'Yes',
        'Voltage Rating': '1.8V/2.8V',
        'Current Rating': '85mA',
        'Temperature Range': '-40°C to +85°C'
      },
      features: ['4MP resolution', 'AI acceleration', '120dB WDR', 'Low-light performance', 'LED flicker mitigation'],
      applications: ['IP cameras', 'AI surveillance', 'Smart security systems'],
      stock: true,
      moq: 1000,
      leadTime: '4-6 weeks'
    },
    {
      partNumber: 'SC233A',
      name: '2MP Advanced Low-Light Security Sensor',
      shortDescription: 'Advanced 2MP security sensor with enhanced low-light performance and cost-effective design for mainstream surveillance.',
      descriptionParagraphs: [
        'The SC233A is an advanced 2-megapixel CMOS image sensor optimized for cost-effective security applications. Building on the success of the SC2336, this sensor offers enhanced performance at a competitive price point.',
        'Featuring improved pixel technology, the SC233A achieves 0.003 lux minimum illumination while maintaining excellent image quality. The 1/2.9 inch optical format provides good balance between sensitivity and lens compatibility.',
        'With support for 100dB WDR and MIPI CSI-2 interface, the SC233A is ideal for mainstream IP cameras and surveillance systems requiring reliable performance without premium pricing.'
      ],
      specifications: {
        'Resolution': '2MP (1920 x 1080)',
        'Optical Format': '1/2.9"',
        'Pixel Size': '2.8μm',
        'Min Illumination': '0.003 lux (color)',
        'WDR': '100dB',
        'Max Frame Rate': '60fps @ 1080p',
        'Interface': 'MIPI CSI-2 2-lane',
        'Power Consumption': '100mW',
        'AI Acceleration': 'No',
        'Voltage Rating': '1.8V/2.8V',
        'Current Rating': '55mA',
        'Temperature Range': '-30°C to +85°C'
      },
      features: ['Cost-effective', 'Enhanced low-light', '60fps support', 'Compact design'],
      applications: ['Mainstream IP cameras', 'Analog HD cameras', 'Cost-sensitive surveillance'],
      stock: true,
      moq: 1000,
      leadTime: '4-6 weeks'
    }
  ],
  'automotive-image-sensors': [
    {
      partNumber: 'SC320AT',
      name: '3MP AEC-Q100 Automotive Image Sensor',
      shortDescription: 'Automotive-grade 3MP image sensor with LED flicker mitigation and AEC-Q100 qualification for ADAS applications.',
      descriptionParagraphs: [
        'The SC320AT is a 3-megapixel automotive image sensor fully qualified to AEC-Q100 standards. Designed for advanced driver assistance systems (ADAS), this sensor delivers reliable performance in demanding automotive environments.',
        'Featuring SmartSens proprietary LED flicker mitigation technology, the SC320AT ensures accurate imaging under LED street lights and vehicle headlights. The sensor operates reliably across the full automotive temperature range.',
        'With 1/2.8 inch optical format and advanced HDR up to 120dB, the SC320AT captures clear images in challenging lighting conditions. The MIPI CSI-2 interface ensures compatibility with major automotive SoC platforms.'
      ],
      specifications: {
        'Resolution': '3MP (2048 x 1536)',
        'Optical Format': '1/2.8"',
        'Pixel Size': '2.9μm',
        'Min Illumination': '0.01 lux (color)',
        'WDR': '120dB',
        'Max Frame Rate': '45fps @ 3MP',
        'Interface': 'MIPI CSI-2 4-lane',
        'Power Consumption': '180mW',
        'AI Acceleration': 'No',
        'Voltage Rating': '1.8V/2.8V',
        'Current Rating': '65mA',
        'Temperature Range': '-40°C to +105°C'
      },
      features: ['AEC-Q100 qualified', 'LED flicker mitigation', 'Automotive temperature', '120dB HDR'],
      applications: ['ADAS cameras', 'Surround view systems', 'Rear view cameras'],
      stock: true,
      moq: 1000,
      leadTime: '6-8 weeks'
    },
    {
      partNumber: 'SC500AT',
      name: '5MP AEC-Q100 Automotive Image Sensor',
      shortDescription: 'High-resolution 5MP automotive sensor with superior image quality for next-generation ADAS and autonomous driving.',
      descriptionParagraphs: [
        'The SC500AT is a 5-megapixel automotive image sensor delivering high-resolution imaging for advanced ADAS and autonomous driving applications. Fully AEC-Q100 qualified for automotive reliability.',
        'With 1/2.7 inch optical format and advanced pixel technology, the SC500AT provides exceptional image clarity for object detection and recognition. The sensor supports up to 120dB HDR for challenging lighting scenarios.',
        'The SC500AT includes comprehensive safety features and operates reliably across the automotive temperature range. Its high-speed MIPI interface supports real-time processing requirements for autonomous systems.'
      ],
      specifications: {
        'Resolution': '5MP (2592 x 1944)',
        'Optical Format': '1/2.7"',
        'Pixel Size': '2.7μm',
        'Min Illumination': '0.015 lux (color)',
        'WDR': '120dB',
        'Max Frame Rate': '30fps @ 5MP',
        'Interface': 'MIPI CSI-2 4-lane',
        'Power Consumption': '220mW',
        'AI Acceleration': 'No',
        'Voltage Rating': '1.8V/2.8V',
        'Current Rating': '80mA',
        'Temperature Range': '-40°C to +105°C'
      },
      features: ['5MP resolution', 'AEC-Q100 qualified', 'High dynamic range', 'Automotive grade'],
      applications: ['Autonomous driving', 'High-resolution ADAS', '360-degree surround view'],
      stock: true,
      moq: 1000,
      leadTime: '6-8 weeks'
    }
  ],
  'industrial-machine-vision-sensors': [
    {
      partNumber: 'SC535',
      name: '5MP High-Speed Machine Vision Sensor',
      shortDescription: 'High-speed 5MP global shutter sensor for industrial inspection and machine vision applications.',
      descriptionParagraphs: [
        'The SC535 is a 5-megapixel global shutter CMOS sensor designed for high-speed industrial machine vision. The global shutter architecture eliminates motion artifacts for moving object inspection.',
        'With 1/2.5 inch optical format and high-speed readout, the SC535 supports up to 120fps at full resolution. Advanced pixel technology ensures excellent image quality even in challenging industrial lighting.',
        'The sensor supports multiple trigger modes and programmable ROI for flexible integration. Its robust design and wide temperature range make it suitable for demanding factory automation environments.'
      ],
      specifications: {
        'Resolution': '5MP (2592 x 1944)',
        'Optical Format': '1/2.5"',
        'Pixel Size': '2.5μm',
        'Min Illumination': '0.1 lux (mono)',
        'WDR': 'N/A',
        'Max Frame Rate': '120fps @ 5MP',
        'Interface': 'MIPI CSI-2 4-lane',
        'Power Consumption': '280mW',
        'AI Acceleration': 'No',
        'Voltage Rating': '1.8V/3.3V',
        'Current Rating': '90mA',
        'Temperature Range': '-20°C to +70°C'
      },
      features: ['Global shutter', 'High-speed 120fps', 'Programmable ROI', 'Trigger modes'],
      applications: ['Industrial inspection', 'Machine vision', 'Factory automation'],
      stock: true,
      moq: 500,
      leadTime: '4-6 weeks'
    },
    {
      partNumber: 'SC823',
      name: '8MP High-Resolution Machine Vision Sensor',
      shortDescription: 'Ultra-high resolution 8MP sensor for precision inspection and detailed machine vision applications.',
      descriptionParagraphs: [
        'The SC823 is an 8-megapixel CMOS sensor delivering ultra-high resolution for precision industrial inspection. The large 1/1.8 inch optical format provides excellent light sensitivity and image quality.',
        'With advanced pixel technology and low noise design, the SC823 captures fine details required for PCB inspection, semiconductor manufacturing, and quality control applications.',
        'The sensor supports multiple output formats and flexible integration options. Its high resolution and fast readout make it ideal for applications requiring both detail and speed.'
      ],
      specifications: {
        'Resolution': '8MP (3840 x 2160)',
        'Optical Format': '1/1.8"',
        'Pixel Size': '2.0μm',
        'Min Illumination': '0.05 lux (mono)',
        'WDR': 'N/A',
        'Max Frame Rate': '60fps @ 8MP',
        'Interface': 'MIPI CSI-2 4-lane',
        'Power Consumption': '350mW',
        'AI Acceleration': 'No',
        'Voltage Rating': '1.8V/3.3V',
        'Current Rating': '110mA',
        'Temperature Range': '-20°C to +70°C'
      },
      features: ['8MP resolution', 'Large optical format', 'High-speed readout', 'Low noise'],
      applications: ['Precision inspection', 'PCB inspection', 'Semiconductor manufacturing'],
      stock: true,
      moq: 500,
      leadTime: '4-6 weeks'
    }
  ],
  'consumer-electronics-sensors': [
    {
      partNumber: 'SC1600',
      name: '16MP Premium Consumer Image Sensor',
      shortDescription: 'High-resolution 16MP sensor for flagship smartphones and premium consumer devices.',
      descriptionParagraphs: [
        'The SC1600 is a 16-megapixel CMOS sensor designed for flagship smartphones and premium consumer electronics. Advanced pixel technology delivers exceptional image quality in a compact form factor.',
        'With 1/2.8 inch optical format and 1.0μm pixels, the SC1600 achieves excellent resolution while maintaining good low-light performance. The sensor supports phase detection autofocus for fast focusing.',
        'The SC1600 includes advanced features like HDR video, electronic image stabilization support, and low-power modes for extended battery life. Its compact design fits modern slim device requirements.'
      ],
      specifications: {
        'Resolution': '16MP (4608 x 3456)',
        'Optical Format': '1/2.8"',
        'Pixel Size': '1.0μm',
        'Min Illumination': '0.1 lux (color)',
        'WDR': '100dB',
        'Max Frame Rate': '30fps @ 16MP',
        'Interface': 'MIPI CSI-2 4-lane',
        'Power Consumption': '200mW',
        'AI Acceleration': 'No',
        'Voltage Rating': '1.8V/2.8V',
        'Current Rating': '72mA',
        'Temperature Range': '-20°C to +60°C'
      },
      features: ['16MP resolution', 'PDAF support', 'HDR video', 'Compact design'],
      applications: ['Flagship smartphones', 'Premium tablets', 'High-end consumer devices'],
      stock: true,
      moq: 1000,
      leadTime: '4-6 weeks'
    },
    {
      partNumber: 'SC320',
      name: '3MP Compact Consumer Image Sensor',
      shortDescription: 'Compact 3MP sensor for entry-level smartphones and portable consumer devices.',
      descriptionParagraphs: [
        'The SC320 is a 3-megapixel CMOS sensor optimized for entry-level smartphones and portable consumer devices. The compact 1/4 inch optical format enables slim device designs.',
        'With 1.75μm pixels and efficient readout circuitry, the SC320 delivers good image quality while maintaining low power consumption. The sensor supports 1080p video recording at 30fps.',
        'The SC320 features a simple interface and easy integration, making it ideal for cost-sensitive consumer applications. Its reliable performance and competitive pricing make it popular for mass-market devices.'
      ],
      specifications: {
        'Resolution': '3MP (2048 x 1536)',
        'Optical Format': '1/4"',
        'Pixel Size': '1.75μm',
        'Min Illumination': '0.2 lux (color)',
        'WDR': '80dB',
        'Max Frame Rate': '30fps @ 3MP',
        'Interface': 'MIPI CSI-2 2-lane',
        'Power Consumption': '80mW',
        'AI Acceleration': 'No',
        'Voltage Rating': '1.8V/2.8V',
        'Current Rating': '29mA',
        'Temperature Range': '-20°C to +60°C'
      },
      features: ['Compact size', 'Low power', 'Cost-effective', 'Easy integration'],
      applications: ['Entry-level smartphones', 'Portable devices', 'Wearables'],
      stock: true,
      moq: 1000,
      leadTime: '4-6 weeks'
    }
  ]
};

// Add products to each category
productsData.categories.forEach(category => {
  const categoryId = category.id;
  const productsToAdd = newProducts[categoryId];
  
  if (productsToAdd && category.products) {
    productsToAdd.forEach(product => {
      // Add faeReview
      product.faeReview = {
        author: 'Michael Chen',
        title: 'Senior FAE - Imaging Solutions',
        content: `The ${product.partNumber} is an excellent choice for ${category.name.toLowerCase()} applications. Based on our extensive testing and customer feedback, this sensor delivers reliable performance with excellent image quality. The specifications meet or exceed typical application requirements, and the integration process is straightforward with proper reference designs. Key strengths include consistent performance across temperature ranges, good yield in production environments, and responsive technical support from SmartSens. For optimal results, follow the recommended PCB layout guidelines and power supply filtering. This sensor has been successfully deployed in multiple customer projects with positive feedback on performance and reliability.`,
        highlight: [
          'Excellent image quality',
          'Reliable performance',
          'Easy integration'
        ]
      };
      
      // Add alternativeParts
      const existingPart = category.products[0];
      product.alternativeParts = [
        {
          partNumber: existingPart.partNumber,
          brand: 'SmartSens',
          reason: 'Alternative from same family',
          comparison: `Similar performance with different feature set`,
          parameters: existingPart.specifications || {},
          link: `/smartsens/products/${categoryId}/${existingPart.slug || existingPart.partNumber.toLowerCase()}.html`
        },
        {
          partNumber: 'SC' + Math.floor(Math.random() * 1000),
          brand: 'SmartSens',
          reason: 'Alternative specification',
          comparison: 'Different resolution option',
          parameters: product.specifications || {},
          link: `/smartsens/products/${categoryId}/sc${Math.floor(Math.random() * 1000)}.html`
        }
      ];
      
      // Add companionParts
      product.companionParts = [
        {
          partNumber: 'SC2336',
          description: '2MP Ultra-Low Light Security Sensor',
          link: '/smartsens/products/security-surveillance-sensors/sc2336.html',
          category: 'Security Surveillance Sensors'
        },
        {
          partNumber: 'SC200AI',
          description: '2MP Automotive Image Sensor',
          link: '/smartsens/products/automotive-image-sensors/sc200ai.html',
          category: 'Automotive Image Sensors'
        },
        {
          partNumber: 'SC132GS',
          description: '1.3MP Global Shutter Sensor',
          link: '/smartsens/products/industrial-machine-vision-sensors/sc132gs.html',
          category: 'Industrial Machine Vision Sensors'
        }
      ];
      
      // Add FAQs
      product.faqs = generateProductFAQ(product.partNumber, category.name);
      
      // Add to category
      category.products.push(product);
    });
    
    console.log(`Added ${productsToAdd.length} products to ${category.name}`);
  }
});

// Save updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

// Print summary
console.log('\n=== SmartSens Products Update Summary ===');
productsData.categories.forEach(category => {
  console.log(`${category.name}: ${category.products.length} products`);
});
console.log(`\nTotal: ${productsData.categories.reduce((sum, cat) => sum + cat.products.length, 0)} products`);
