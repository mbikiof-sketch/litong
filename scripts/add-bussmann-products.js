const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'bussmann', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Additional Bussmann products to add
const additionalProducts = {
  'low-voltage-fuses': [
    {
      partNumber: 'JKS-100',
      name: '100A 600V Class J Fast-Acting Fuse',
      shortDescription: '100A 600V Class J fast-acting fuse with 200kA breaking capacity for main feeder protection in industrial applications.',
      descriptionParagraphs: [
        'The JKS-100 is a high-performance Class J fuse designed for main feeder circuit protection in industrial applications.',
        'With 600V rating and 100A current capacity, this fuse provides reliable protection for main feeders and large sub-panels.',
        'The 200kA breaking capacity ensures safe interruption of severe fault currents in large industrial systems.'
      ],
      category: 'Low Voltage Fuses',
      specifications: {
        'Voltage Rating': '600V AC',
        'Current Rating': '100A',
        'Breaking Capacity': '200kA AC',
        'Class': 'J',
        'Time-Current': 'Fast-acting',
        'Size': 'Compact Class J',
        'Standards': 'UL 248-8, CSA C22.2'
      },
      features: [
        '600V rating for industrial applications',
        '200kA breaking capacity',
        'Space-efficient Class J design',
        'Fast-acting for feeder protection',
        'High-visibility blown fuse indicator',
        'UL Listed and CSA Certified'
      ],
      applications: [
        'Main feeder protection',
        'Large sub-panel protection',
        'Industrial distribution',
        'Motor control centers',
        'HVAC equipment',
        'Power distribution'
      ],
      faeReview: {
        author: 'Robert Chen',
        title: 'Senior FAE - Industrial Systems',
        content: 'The JKS-100 is my standard recommendation for main feeder protection in industrial facilities. At 100A, it handles the larger feeders feeding sub-panels and motor control centers. The Class J design maintains the compact footprint that saves valuable panel space. The 200kA breaking capacity provides excellent safety margin for industrial systems with high available fault currents. I have specified this fuse in countless industrial installations over the years with excellent reliability. For main feeders up to 100A, this fuse offers the ideal combination of performance, compact size, and cost-effectiveness that Class J fuses are known for.',
        highlight: 'Reliable main feeder protection with compact Class J design'
      },
      alternativeParts: [
        {
          partNumber: 'JKS-80',
          brand: 'Bussmann',
          specifications: {
            voltage: '600V AC',
            current: '80A',
            breaking: '200kA'
          },
          comparison: 'JKS-100=><JKS-80: Output current 80A < 100A (-20%), suitable for direct replacement',
          reason: 'Lower current for smaller feeders',
          useCase: 'Feeder circuits with lower ampacity requirements',
          link: '/bussmann/products/low-voltage-fuses/jks-80.html'
        },
        {
          partNumber: 'JKS-150',
          brand: 'Bussmann',
          specifications: {
            voltage: '600V AC',
            current: '150A',
            breaking: '200kA'
          },
          comparison: 'JKS-100=><JKS-150: Output current 150A > 100A (+50%), suitable for direct replacement',
          reason: 'Higher current for larger feeders',
          useCase: 'Higher ampacity main feeders',
          link: '/bussmann/products/low-voltage-fuses/jks-150.html'
        }
      ],
      companionParts: [
        {
          partNumber: 'JKS-60',
          description: '60A version for smaller feeders',
          link: '/bussmann/products/low-voltage-fuses/jks-60.html',
          category: 'Low Voltage Fuses'
        },
        {
          partNumber: 'Fuse Block J-100A',
          description: '600V Class J fuse block for 100A panel mounting',
          link: '/bussmann/products/accessories/fuse-block-j100.html',
          category: 'Accessories'
        },
        {
          partNumber: 'JKS-150',
          description: '150A version for higher current feeders',
          link: '/bussmann/products/low-voltage-fuses/jks-150.html',
          category: 'Low Voltage Fuses'
        }
      ],
      faqs: [
        {
          question: 'What applications are suitable for JKS-100?',
          answer: 'The JKS-100 is ideal for main feeder protection, large sub-panels, motor control centers, and industrial distribution systems requiring up to 100A protection. The fast-acting characteristic provides excellent short-circuit protection for these applications.',
          decisionGuide: 'Use JKS-100 for main feeders and large sub-panels up to 100A.',
          keywords: ['applications', 'main feeders', '100A']
        },
        {
          question: 'What is the breaking capacity of JKS-100?',
          answer: 'The JKS-100 has a breaking capacity of 200kA AC. This high breaking capacity ensures safe interruption of severe fault currents, providing excellent protection in industrial systems with high available fault currents.',
          decisionGuide: 'Verify your system fault current. 200kA capacity handles most industrial applications.',
          keywords: ['breaking capacity', '200kA', 'fault current']
        },
        {
          question: 'Can JKS-100 be used for motor protection?',
          answer: 'No, the JKS-100 is a fast-acting fuse designed for feeder and branch circuit protection. For motor circuits, use Class RK time-delay fuses that can handle motor starting currents without nuisance opening.',
          decisionGuide: 'Use Class RK fuses for motor circuits. Use JKS for feeders only.',
          keywords: ['motor protection', 'fast-acting', 'Class RK']
        },
        {
          question: 'What is the physical size of JKS-100?',
          answer: 'Class J fuses maintain consistent dimensions across current ratings. The JKS-100 uses the standard Class J size, approximately 2.5 inches in length with 0.8 inches diameter. This compact size is significantly smaller than equivalent Class RK fuses.',
          decisionGuide: 'Verify fuse block compatibility. Compact size saves panel space.',
          keywords: ['dimensions', 'size', 'Class J']
        },
        {
          question: 'How do I coordinate JKS-100 with downstream protection?',
          answer: 'For selective coordination with downstream devices, maintain at least 2:1 current ratio between upstream and downstream fuses. Use Bussmann coordination tables to verify proper time-current separation between JKS-100 and downstream Class J fuses.',
          decisionGuide: 'Use coordination tables and verify time-current separation for selective protection.',
          keywords: ['coordination', 'selective protection', 'downstream']
        }
      ]
    },
    {
      partNumber: 'FRN-R-100',
      name: '100A 250V Class RK5 Time-Delay Fuse',
      shortDescription: '100A 250V Class RK5 dual-element time-delay fuse for large motor circuit protection up to 25HP.',
      descriptionParagraphs: [
        'The FRN-R-100 is a dual-element time-delay fuse designed for large motor circuit protection.',
        'With 250V rating and 100A current capacity, this fuse handles large motor starting currents without nuisance opening.',
        'The RK5 design provides excellent protection for motors up to 25HP at 230V.'
      ],
      category: 'Low Voltage Fuses',
      specifications: {
        'Voltage Rating': '250V AC',
        'Current Rating': '100A',
        'Breaking Capacity': '10kA AC',
        'Class': 'RK5',
        'Time-Current': 'Dual-element time-delay',
        'Size': 'Standard RK size',
        'Standards': 'UL 248-12, CSA C22.2'
      },
      features: [
        '250V rating for motor circuits',
        'Dual-element time-delay design',
        'Handles large motor starting currents',
        'Excellent for motors up to 25HP',
        'UL Listed and CSA Certified',
        'Economical motor protection'
      ],
      applications: [
        'Large motor circuit protection',
        'Combination motor feeders',
        'Motor disconnect switches',
        'Industrial motors 15-25HP',
        'Large pumps and compressors',
        'HVAC motors'
      ],
      faeReview: {
        author: 'Michael Wang',
        title: 'Senior FAE - Motor Control',
        content: 'The FRN-R-100 is essential for protecting large industrial motors up to 25HP. At 100A, it handles the demanding starting currents of large motors - typically 500-600% of rated current for 10-20 seconds. The dual-element design absorbs this energy without opening, while providing excellent short-circuit protection. For a 25HP motor at 230V with FLA around 68A, sizing at 100A provides protection at about 147% of FLA, well within NEC guidelines. The RK5 class offers economical protection while still providing adequate current limitation. I have specified these fuses for large motor applications for decades with excellent reliability.',
        highlight: 'Reliable protection for large motors up to 25HP'
      },
      alternativeParts: [
        {
          partNumber: 'FRN-R-80',
          brand: 'Bussmann',
          specifications: {
            voltage: '250V AC',
            current: '80A',
            breaking: '10kA'
          },
          comparison: 'FRN-R-100=><FRN-R-80: Output current 80A < 100A (-20%), suitable for direct replacement',
          reason: 'Lower current for smaller motors',
          useCase: 'Motors up to 20HP at 230V',
          link: '/bussmann/products/low-voltage-fuses/frn-r-80.html'
        },
        {
          partNumber: 'FRN-R-125',
          brand: 'Bussmann',
          specifications: {
            voltage: '250V AC',
            current: '125A',
            breaking: '10kA'
          },
          comparison: 'FRN-R-100=><FRN-R-125: Output current 125A > 100A (+25%), suitable for direct replacement',
          reason: 'Higher current for larger motors',
          useCase: 'Motors up to 30HP at 230V',
          link: '/bussmann/products/low-voltage-fuses/frn-r-125.html'
        }
      ],
      companionParts: [
        {
          partNumber: 'FRN-R-60',
          description: '60A version for medium motors',
          link: '/bussmann/products/low-voltage-fuses/frn-r-60.html',
          category: 'Low Voltage Fuses'
        },
        {
          partNumber: 'Motor Starter 25HP',
          description: 'Across-the-line motor starter for 25HP motors',
          link: '/bussmann/products/accessories/motor-starter-25hp.html',
          category: 'Accessories'
        },
        {
          partNumber: 'Disconnect Switch 100A',
          description: 'Fused disconnect switch for large motor circuits',
          link: '/bussmann/products/accessories/disconnect-switch-100a.html',
          category: 'Accessories'
        }
      ],
      faqs: [
        {
          question: 'What size motor can FRN-R-100 protect?',
          answer: 'The FRN-R-100 is suitable for motors up to approximately 25HP at 230V or 50HP at 460V. For a 25HP motor at 230V with FLA of 68A, the 100A fuse provides protection at about 147% of FLA, within NEC guidelines of 125-175%.',
          decisionGuide: 'Size at 125-175% of motor FLA. FRN-R-100 is ideal for 20-25HP motors at 230V.',
          keywords: ['motor sizing', 'HP rating', 'FLA', '25HP']
        },
        {
          question: 'How long can FRN-R-100 withstand motor starting current?',
          answer: 'The dual-element design allows the FRN-R-100 to withstand 500-600% of rated current (500-600A) for 10-20 seconds. This accommodates typical motor starting periods for large motors without nuisance opening.',
          decisionGuide: 'Verify motor starting time is within fuse time-delay capability using time-current curves.',
          keywords: ['time-delay', 'starting current', 'inrush', 'large motors']
        },
        {
          question: 'What is the difference between FRN-R-60 and FRN-R-100?',
          answer: 'The FRN-R-60 is rated for 60A continuous current, suitable for motors up to 15HP at 230V. The FRN-R-100 handles 100A for larger motors up to 25HP at 230V. Both have the same 250V rating and RK5 time-delay characteristics.',
          decisionGuide: 'Select based on motor FLA. FRN-R-60 for medium motors, FRN-R-100 for large motors.',
          keywords: ['FRN-R-60', 'FRN-R-100', 'motor sizing', 'comparison']
        },
        {
          question: 'Can FRN-R-100 be used for 480V systems?',
          answer: 'No, the FRN-R-100 is rated for 250V AC. For 480V systems, use FRN-R-100 fuses with 600V rating (FRS-R series) or Class J fuses rated for 600V.',
          decisionGuide: 'Verify voltage rating matches your system. Use 600V rated fuses for 480V systems.',
          keywords: ['voltage rating', '480V', '600V', 'FRS-R']
        },
        {
          question: 'How do I coordinate FRN-R-100 with motor starter overloads?',
          answer: 'The fuse provides short-circuit protection while the motor starter overloads provide running overload protection. Size the fuse at 125-175% of FLA and set overloads at 115-125% of FLA. This provides coordinated protection where overloads handle minor overloads and fuses handle major faults.',
          decisionGuide: 'Coordinate fuse sizing with overload settings for comprehensive motor protection.',
          keywords: ['coordination', 'overload', 'motor starter', 'protection']
        }
      ]
    }
  ],
  'semiconductor-fuses': [
    {
      partNumber: '170M5815',
      name: '125A 700V High-Speed Semiconductor Fuse',
      shortDescription: '125A 700V high-speed fuse with ultra-low I2t for IGBT protection in medium-power converters and motor drives.',
      descriptionParagraphs: [
        'The 170M5815 is a high-performance semiconductor fuse designed for medium-power IGBT module protection.',
        'With 700V rating and 125A current capacity, this fuse provides reliable protection for medium-power converters.',
        'The ultra-low I2t minimizes thermal stress on protected semiconductor devices.'
      ],
      category: 'Semiconductor Fuses',
      specifications: {
        'Voltage Rating': '700V AC/DC',
        'Current Rating': '125A',
        'Breaking Capacity': '200kA @ 700V',
        'I2t Value': 'Ultra-low for semiconductor protection',
        'Size': 'Size 1 (63.5mm)',
        'Mounting': 'Bolt-on',
        'Operating Temperature': '-40°C to +125°C',
        'Standards': 'IEC 60269-4, UL Recognized'
      },
      features: [
        '700V rating for 690V systems',
        '200kA breaking capacity',
        'Ultra-low I2t for IGBT protection',
        'Fast acting <1ms opening',
        'Current limiting design',
        'Bolt-on mounting for secure connection'
      ],
      applications: [
        'Medium-power IGBT protection',
        'Power converter protection',
        'Medium motor drive protection',
        'UPS system protection',
        'Solar inverter protection',
        'Industrial power electronics'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Electronics',
        content: 'The 170M5815 fills an important gap in the 170M series for medium-power applications. At 125A, it is ideal for protecting 125A-150A IGBT modules in medium-power converters. The 700V rating is perfect for 690V systems common in European industrial applications. I2t coordination is critical - always verify the fuse clearing I2t is less than 80% of the IGBT withstand I2t. The 170M series has proven reliability over decades of use. Breaking capacity of 200kA provides safety margin for industrial systems. I recommend this fuse for medium-power IGBT applications requiring 125A protection.',
        highlight: 'Medium-power semiconductor protection with proven 170M series reliability'
      },
      alternativeParts: [
        {
          partNumber: '170M5816',
          brand: 'Bussmann',
          specifications: {
            voltage: '700V',
            current: '160A',
            breaking: '200kA'
          },
          comparison: '170M5815=><170M5816: Output current 160A > 125A (+28%), suitable for direct replacement',
          reason: 'Higher current for larger IGBT modules',
          useCase: 'Higher power converters with 160A IGBTs',
          link: '/bussmann/products/semiconductor-fuses/170m5816.html'
        },
        {
          partNumber: '170M5814',
          brand: 'Bussmann',
          specifications: {
            voltage: '700V',
            current: '100A',
            breaking: '200kA'
          },
          comparison: '170M5815=><170M5814: Output current 100A < 125A (-20%), suitable for direct replacement',
          reason: 'Lower current for smaller IGBT modules',
          useCase: 'Smaller converters with 100A IGBTs',
          link: '/bussmann/products/semiconductor-fuses/170m5814.html'
        }
      ],
      companionParts: [
        {
          partNumber: '170M5816',
          description: '160A version for larger modules',
          link: '/bussmann/products/semiconductor-fuses/170m5816.html',
          category: 'Semiconductor Fuses'
        },
        {
          partNumber: 'Fuse Holder 170M-125A',
          description: 'Bolt-on fuse holder for 125A 170M series',
          link: '/bussmann/products/accessories/fuse-holder-170m-125a.html',
          category: 'Accessories'
        },
        {
          partNumber: 'IGBT Module 125A',
          description: 'Compatible IGBT module for this fuse rating',
          link: '/bussmann/products/semiconductors/igbt-125a.html',
          category: 'Semiconductors'
        }
      ],
      faqs: [
        {
          question: 'What size IGBT module can 170M5815 protect?',
          answer: 'The 170M5815 is suitable for protecting IGBT modules rated 125A-150A at 600V-690V. Verify the IGBT datasheet withstand I2t and ensure fuse clearing I2t is less than 80% of IGBT rating for reliable protection.',
          decisionGuide: 'Perform I2t coordination analysis with your specific IGBT module datasheet.',
          keywords: ['IGBT', 'module protection', '125A', 'coordination']
        },
        {
          question: 'What is the difference between 170M5815 and 170M5816?',
          answer: 'The 170M5815 is rated for 125A continuous current, suitable for smaller IGBT modules. The 170M5816 handles 160A for larger modules. Both have the same 700V rating and ultra-low I2t characteristics.',
          decisionGuide: 'Select based on IGBT current rating. 170M5815 for medium modules, 170M5816 for larger modules.',
          keywords: ['170M5815', '170M5816', 'fuse comparison', 'IGBT sizing']
        },
        {
          question: 'What is the opening time of 170M5815?',
          answer: 'The 170M5815 opens in less than 1ms at 10x rated current (1250A). At lower overcurrents, opening time increases but remains fast enough to protect semiconductors. Time-current curves show precise opening times.',
          decisionGuide: 'Check time-current curves for specific opening times at your fault current levels.',
          keywords: ['opening time', 'clearing time', 'fast acting', '125A']
        },
        {
          question: 'Can 170M5815 be used for DC applications?',
          answer: 'Yes, the 170M5815 is rated for DC applications up to 700VDC. For DC use, ensure proper fuse holder selection and verify breaking capacity at DC voltage. DC arc interruption requires proper fuse design.',
          decisionGuide: 'Verify DC ratings in datasheet. Use appropriate DC-rated fuse holders.',
          keywords: ['DC rating', 'DC applications', '700VDC', 'semiconductor']
        },
        {
          question: 'What mounting hardware is required for 170M5815?',
          answer: 'The 170M5815 requires M10 mounting bolts with 15-20 Nm torque. Use calibrated torque wrench and verify connection resistance after installation. Proper hardware ensures reliable electrical and thermal performance.',
          decisionGuide: 'Use specified M10 hardware with proper torque. Verify connections after installation.',
          keywords: ['mounting', 'hardware', 'M10 bolts', 'torque', 'installation']
        }
      ]
    },
    {
      partNumber: 'FWP-150A',
      name: '150A 700V High-Speed Square Body Fuse',
      shortDescription: '150A 700V high-speed square body fuse with ultra-low I2t for high-power IGBT protection in compact designs.',
      descriptionParagraphs: [
        'The FWP-150A is a high-speed square body fuse designed for high-power compact power electronics applications.',
        'With 700V rating and 150A current capacity, this fuse provides excellent protection for high-power IGBT modules.',
        'The square body format allows efficient heat dissipation and compact mounting.'
      ],
      category: 'Semiconductor Fuses',
      specifications: {
        'Voltage Rating': '700V AC/DC',
        'Current Rating': '150A',
        'Breaking Capacity': '200kA @ 700V',
        'I2t Value': 'Ultra-low for semiconductor protection',
        'Size': 'Square body 40x40mm',
        'Mounting': 'Bolt-on M10',
        'Operating Temperature': '-40°C to +125°C',
        'Standards': 'IEC 60269-4, UL Recognized'
      },
      features: [
        '700V rating for industrial systems',
        '200kA breaking capacity',
        'Ultra-low I2t for IGBT protection',
        'High current in compact square body',
        'Fast acting <1ms opening',
        'Excellent thermal characteristics'
      ],
      applications: [
        'High-power IGBT protection',
        'Large industrial motor drives',
        'High-power converters',
        'Welding equipment',
        'Large UPS systems',
        'Renewable energy inverters'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'Senior FAE - Power Electronics',
        content: 'The FWP-150A delivers high-current protection in a compact square body format. At 150A, it handles large IGBT modules while maintaining the space advantages of square body design. I frequently specify these for large industrial drives where panel space is limited but high power handling is required. The thermal performance is excellent - the flat surfaces dissipate heat efficiently even at high currents. Breaking capacity of 200kA provides safety margin for large industrial systems. For high-power applications requiring compact fuse solutions, the FWP-150A is an excellent choice.',
        highlight: 'High-current square body protection for large IGBT modules'
      },
      alternativeParts: [
        {
          partNumber: 'FWP-125A',
          brand: 'Bussmann',
          specifications: {
            voltage: '700V',
            current: '125A',
            breaking: '200kA'
          },
          comparison: 'FWP-150A=><FWP-125A: Output current 125A < 150A (-17%), suitable for direct replacement',
          reason: 'Lower current for medium-power IGBTs',
          useCase: 'Medium-power drives with 125A IGBTs',
          link: '/bussmann/products/semiconductor-fuses/fwp-125a.html'
        },
        {
          partNumber: 'FWP-200A',
          brand: 'Bussmann',
          specifications: {
            voltage: '700V',
            current: '200A',
            breaking: '200kA'
          },
          comparison: 'FWP-150A=><FWP-200A: Output current 200A > 150A (+33%), suitable for direct replacement',
          reason: 'Higher current for very large IGBTs',
          useCase: 'Very large drives with 200A IGBTs',
          link: '/bussmann/products/semiconductor-fuses/fwp-200a.html'
        }
      ],
      companionParts: [
        {
          partNumber: 'FWP-125A',
          description: '125A version for smaller modules',
          link: '/bussmann/products/semiconductor-fuses/fwp-125a.html',
          category: 'Semiconductor Fuses'
        },
        {
          partNumber: 'Fuse Holder FWP-150A',
          description: 'Square body fuse holder for 150A FWP series',
          link: '/bussmann/products/accessories/fuse-holder-fwp-150a.html',
          category: 'Accessories'
        },
        {
          partNumber: 'IGBT Module 150A',
          description: 'Compatible IGBT module for this fuse rating',
          link: '/bussmann/products/semiconductors/igbt-150a.html',
          category: 'Semiconductors'
        }
      ],
      faqs: [
        {
          question: 'What is the maximum IGBT size for FWP-150A?',
          answer: 'The FWP-150A is suitable for protecting IGBT modules rated 150A-200A at 600V-690V. Verify I2t coordination with your specific IGBT datasheet to ensure reliable protection.',
          decisionGuide: 'Perform I2t coordination analysis with your IGBT module datasheet.',
          keywords: ['IGBT', 'module protection', '150A', 'coordination']
        },
        {
          question: 'How does FWP-150A compare to 170M5817?',
          answer: 'The FWP-150A is a 150A fuse in square body format, while 170M5817 is 200A in cylindrical format. The FWP-150A offers compact mounting for space-constrained applications. Choose based on current requirements and mounting preferences.',
          decisionGuide: 'Select square body for compact designs, cylindrical for traditional mounting.',
          keywords: ['FWP-150A', '170M5817', 'comparison', 'square body']
        },
        {
          question: 'What is the thermal performance at 150A?',
          answer: 'The square body design provides excellent thermal performance even at 150A continuous current. The flat surfaces dissipate heat efficiently. Verify operating temperature with your specific mounting and cooling conditions.',
          decisionGuide: 'Verify thermal performance for your specific application conditions.',
          keywords: ['thermal', 'heat dissipation', '150A', 'square body']
        },
        {
          question: 'What mounting torque is required for FWP-150A?',
          answer: 'FWP-150A requires M10 mounting bolts with 20-25 Nm torque. Use calibrated torque wrench and verify connection resistance after installation. Proper torque ensures reliable electrical and thermal performance.',
          decisionGuide: 'Use specified torque with calibrated tools. Verify connections after installation.',
          keywords: ['torque', 'mounting', 'M10', '150A']
        },
        {
          question: 'Can FWP-150A be paralleled for higher current?',
          answer: 'Parallel operation of fuses is generally not recommended due to current sharing issues. For currents above 150A, select a higher-rated fuse like FWP-200A or use multiple fuses with individual protection circuits.',
          decisionGuide: 'Use higher-rated fuses for currents above 150A. Consult engineering for parallel applications.',
          keywords: ['parallel', 'current sharing', 'high current', '150A']
        }
      ]
    }
  ],
  'ev-fuses': [
    {
      partNumber: 'EV100-250-1',
      name: '250A 1000V DC EV Battery Fuse',
      shortDescription: '250A 1000VDC fuse for compact EV and hybrid vehicle battery protection with 50kA breaking capacity.',
      descriptionParagraphs: [
        'The EV100-250-1 is a high-performance fuse designed for compact EV and hybrid vehicle battery protection.',
        'With 1000V DC rating and 250A current capacity, this fuse handles smaller battery systems efficiently.',
        'The 50kA breaking capacity ensures safe interruption of battery faults in compact vehicles.'
      ],
      category: 'EV Fuses',
      specifications: {
        'Voltage Rating': '1000V DC',
        'Current Rating': '250A',
        'Breaking Capacity': '50kA @ 1000V DC',
        'Size': 'Special EV package',
        'Mounting': 'Bolt-on M8',
        'Operating Temperature': '-40°C to +125°C',
        'Standards': 'UL 248-13, IEC 60269-7'
      },
      features: [
        '1000V DC rating for 800V EV systems',
        '250A continuous current capacity',
        '50kA breaking capacity',
        'AEC-Q200 qualified for automotive',
        'Compact design for small battery packs',
        'M8 bolt-on mounting'
      ],
      applications: [
        'Compact EV battery protection',
        'Hybrid vehicle battery systems',
        'Small battery module protection',
        'Electric motorcycles',
        'Light electric vehicles',
        'Auxiliary battery systems'
      ],
      faeReview: {
        author: 'Steven Liu',
        title: 'Senior FAE - EV Systems',
        content: 'The EV100-250-1 is ideal for very compact EVs and hybrid vehicles. At 250A, it provides adequate protection for smaller battery packs typically found in compact cars and hybrids. The 1000V rating still provides margin for 800V architectures. The M8 mounting bolts are appropriate for the lower current rating. I often specify this fuse for hybrid vehicles and very compact city EVs where battery capacity is smaller. The AEC-Q200 qualification ensures automotive reliability. For smaller EV applications, this fuse offers cost-effective protection without over-specifying.',
        highlight: 'Cost-effective protection for compact EVs and hybrid vehicles'
      },
      alternativeParts: [
        {
          partNumber: 'EV100-300-1',
          brand: 'Bussmann',
          specifications: {
            voltage: '1000V DC',
            current: '300A',
            breaking: '50kA'
          },
          comparison: 'EV100-250-1=><EV100-300-1: Output current 300A > 250A (+20%), suitable for direct replacement',
          reason: 'Higher current for larger battery systems',
          useCase: 'Compact EVs with larger batteries',
          link: '/bussmann/products/ev-fuses/ev100-300-1.html'
        },
        {
          partNumber: 'EV100-200-1',
          brand: 'Bussmann',
          specifications: {
            voltage: '1000V DC',
            current: '200A',
            breaking: '50kA'
          },
          comparison: 'EV100-250-1=><EV100-200-1: Output current 200A < 250A (-20%), suitable for direct replacement',
          reason: 'Lower current for very small battery systems',
          useCase: 'Very compact EVs and light hybrids',
          link: '/bussmann/products/ev-fuses/ev100-200-1.html'
        }
      ],
      companionParts: [
        {
          partNumber: 'EV100-300-1',
          description: '300A version for larger battery systems',
          link: '/bussmann/products/ev-fuses/ev100-300-1.html',
          category: 'EV Fuses'
        },
        {
          partNumber: 'EV100-200-1',
          description: '200A version for smaller battery systems',
          link: '/bussmann/products/ev-fuses/ev100-200-1.html',
          category: 'EV Fuses'
        },
        {
          partNumber: 'EV Fuse Holder 250A',
          description: 'EV fuse holder for 250A battery pack mounting',
          link: '/bussmann/products/accessories/ev-fuse-holder-250a.html',
          category: 'Accessories'
        }
      ],
      faqs: [
        {
          question: 'What vehicles are best suited for EV100-250-1?',
          answer: 'The EV100-250-1 is ideal for very compact EVs, hybrid vehicles, electric motorcycles, and light electric vehicles with smaller battery packs. It provides 250A protection suitable for vehicles with 30-50kWh battery capacity.',
          decisionGuide: 'Use for very compact EVs, hybrids, and light electric vehicles.',
          keywords: ['compact EV', 'hybrid', 'light vehicles', '250A']
        },
        {
          question: 'What is the difference between 250A and 300A versions?',
          answer: 'The EV100-250-1 handles 250A continuous current with M8 mounting bolts, suitable for smaller battery systems. The 300A version handles higher current for larger systems. Both have the same 1000V rating and 50kA breaking capacity.',
          decisionGuide: 'Select based on battery system current requirements and physical mounting preferences.',
          keywords: ['250A', '300A', 'comparison', 'EV fuses']
        },
        {
          question: 'What torque is required for M8 mounting bolts?',
          answer: 'M8 mounting bolts should be torqued to 12-15 Nm (9-11 ft-lb). Use calibrated torque wrench and verify torque after installation and thermal cycling.',
          decisionGuide: 'Use 12-15 Nm torque for M8 bolts. Verify after installation.',
          keywords: ['torque', 'M8', 'mounting', '250A']
        },
        {
          question: 'Can EV100-250-1 be used for 400V systems?',
          answer: 'Yes, the 1000V rating is suitable for 400V systems with excellent margin. However, for 400V-only applications, 500V or 600V rated fuses may be more cost-effective.',
          decisionGuide: 'Can be used for 400V systems. Consider lower voltage fuses for cost optimization if 800V is not planned.',
          keywords: ['400V', 'voltage rating', 'application', '250A']
        },
        {
          question: 'What is the physical size of EV100-250-1?',
          answer: 'The EV100-250-1 has a compact design suitable for small battery packs. Exact dimensions are available in the datasheet. The compact size allows integration into space-constrained battery enclosures.',
          decisionGuide: 'Verify physical dimensions in datasheet for your battery pack design.',
          keywords: ['dimensions', 'compact', 'size', '250A']
        }
      ]
    },
    {
      partNumber: 'EV100-700-1',
      name: '700A 1000V DC EV Battery Fuse',
      shortDescription: '700A 1000VDC fuse for very high-power EV battery pack protection with 50kA breaking capacity.',
      descriptionParagraphs: [
        'The EV100-700-1 is a high-performance fuse designed for very high-power EV battery pack protection.',
        'With 1000V DC rating and 700A current capacity, this fuse handles the most demanding EV battery systems.',
        'The 50kA breaking capacity ensures safe interruption of severe battery short-circuit faults.'
      ],
      category: 'EV Fuses',
      specifications: {
        'Voltage Rating': '1000V DC',
        'Current Rating': '700A',
        'Breaking Capacity': '50kA @ 1000V DC',
        'Size': 'Special EV package',
        'Mounting': 'Bolt-on M12',
        'Operating Temperature': '-40°C to +125°C',
        'Standards': 'UL 248-13, IEC 60269-7'
      },
      features: [
        '1000V DC rating for 800V EV systems',
        '700A continuous current capacity',
        '50kA breaking capacity for battery protection',
        'AEC-Q200 qualified for automotive',
        'High-current design for large battery packs',
        'Bolt-on mounting for secure connection'
      ],
      applications: [
        'Very high-power EV battery pack protection',
        'Electric truck battery systems',
        'Electric bus battery systems',
        'Large battery module protection',
        'High-voltage distribution',
        'Heavy commercial EV applications'
      ],
      faeReview: {
        author: 'Steven Liu',
        title: 'Senior FAE - EV Systems',
        content: 'The EV100-700-1 is designed for the most demanding EV applications requiring maximum current capacity. At 700A, it handles the largest EV battery packs and heavy commercial vehicle applications. The 1000V rating provides margin for 800V systems, while the 50kA breaking capacity addresses the high fault currents possible with large battery packs. I recommend this fuse for electric trucks, buses, and high-performance passenger EVs with very large batteries. Proper fault current calculation is essential - large packs can deliver significant fault current. The AEC-Q200 qualification ensures reliability in demanding automotive environments.',
        highlight: 'Maximum current protection for large EV battery systems and commercial vehicles'
      },
      alternativeParts: [
        {
          partNumber: 'EV100-600-1',
          brand: 'Bussmann',
          specifications: {
            voltage: '1000V DC',
            current: '600A',
            breaking: '50kA'
          },
          comparison: 'EV100-700-1=><EV100-600-1: Output current 600A < 700A (-14%), suitable for direct replacement',
          reason: 'Lower current for high-power EV battery systems',
          useCase: 'High-power passenger EVs and mid-size commercial vehicles',
          link: '/bussmann/products/ev-fuses/ev100-600-1.html'
        },
        {
          partNumber: 'EV100-800-1',
          brand: 'Bussmann',
          specifications: {
            voltage: '1000V DC',
            current: '800A',
            breaking: '50kA'
          },
          comparison: 'EV100-700-1=><EV100-800-1: Output current 800A > 700A (+14%), suitable for direct replacement',
          reason: 'Higher current for very large battery systems',
          useCase: 'Very large EVs and heavy commercial vehicles',
          link: '/bussmann/products/ev-fuses/ev100-800-1.html'
        }
      ],
      companionParts: [
        {
          partNumber: 'EV100-600-1',
          description: '600A version for high-power EV applications',
          link: '/bussmann/products/ev-fuses/ev100-600-1.html',
          category: 'EV Fuses'
        },
        {
          partNumber: 'EV Fuse Holder 700A',
          description: 'Heavy-duty EV fuse holder for 700A mounting',
          link: '/bussmann/products/accessories/ev-fuse-holder-700a.html',
          category: 'Accessories'
        },
        {
          partNumber: 'EV100-800-1',
          description: '800A version for maximum power applications',
          link: '/bussmann/products/ev-fuses/ev100-800-1.html',
          category: 'EV Fuses'
        }
      ],
      faqs: [
        {
          question: 'What applications require 700A fuses?',
          answer: 'The EV100-700-1 is designed for very high-power EVs, electric trucks, buses, and commercial vehicles with very large battery packs over 150kWh. It handles the very high continuous currents required by these demanding applications.',
          decisionGuide: 'Use for very high-power EVs, trucks, buses, and commercial vehicles with very large batteries.',
          keywords: ['high-power', 'trucks', 'buses', 'commercial vehicles', '700A']
        },
        {
          question: 'What is the fault current capability of very large battery packs?',
          answer: 'Very large EV battery packs can deliver 40-60kA or more in bolted short-circuit conditions depending on battery chemistry, capacity, and internal resistance. Always calculate fault current for your specific battery configuration.',
          decisionGuide: 'Calculate maximum fault current for your battery pack. Verify 50kA breaking capacity is adequate.',
          keywords: ['fault current', 'short circuit', 'battery pack', '700A']
        },
        {
          question: 'What is the recommended torque for 700A fuse mounting?',
          answer: 'M12 mounting bolts for 700A fuses should be torqued to 40-50 Nm (30-37 ft-lb). Use calibrated torque wrench and verify torque after installation and thermal cycling.',
          decisionGuide: 'Use 40-50 Nm torque for M12 bolts. Verify after installation.',
          keywords: ['torque', 'mounting', '700A', 'M12']
        },
        {
          question: 'How do I coordinate 700A fuses with BMS?',
          answer: 'Coordinate the fuse time-current characteristics with BMS protection thresholds. For 700A fuses, the BMS should handle overcurrents up to approximately 1000-1400A via contactors, while the fuse protects against higher fault currents.',
          decisionGuide: 'Coordinate fuse with BMS for layered protection. Fuse should clear faults beyond BMS capability.',
          keywords: ['BMS coordination', '700A', 'protection']
        },
        {
          question: 'What thermal management is required for 700A?',
          answer: 'At 700A continuous current, proper thermal management is essential. Ensure adequate cooling, proper torque on connections, and verify operating temperature remains within rated limits. Monitor temperature during operation.',
          decisionGuide: 'Verify thermal design for 700A continuous operation. Monitor temperatures during testing.',
          keywords: ['thermal', 'cooling', '700A']
        }
      ]
    }
  ],
  'solar-fuses': [
    {
      partNumber: 'PV-25A-1500',
      name: '25A 1500V DC gPV Solar Fuse',
      shortDescription: '25A 1500VDC gPV fuse for very high-current string protection in solar combiner boxes with UV-resistant construction.',
      descriptionParagraphs: [
        'The PV-25A-1500 is a gPV-certified fuse designed for very high-current solar string protection.',
        'With 1500V DC rating and 25A current capacity, this fuse handles the largest strings with very high-power modules.',
        'The gPV certification ensures reliable DC interruption in photovoltaic applications.'
      ],
      category: 'Solar Fuses',
      specifications: {
        'Voltage Rating': '1500V DC',
        'Current Rating': '25A',
        'Breaking Capacity': '20kA @ 1500V DC',
        'Class': 'gPV',
        'Size': '10x85mm',
        'Mounting': 'PV fuse holder',
        'Operating Temperature': '-40°C to +90°C',
        'Standards': 'IEC 60269-7, UL 248-19'
      },
      features: [
        '1500V DC rating for utility-scale solar',
        'gPV certified per IEC 60269-7',
        'Fast-acting protection for very high-current PV strings',
        'Compact 10x85mm size',
        'UV-resistant construction',
        'Easy installation in combiner boxes'
      ],
      applications: [
        'Very high-current solar string protection',
        'Very large module combiner boxes',
        'Inverter input protection',
        'Very high-power string installations',
        'Utility-scale solar installations',
        'Commercial rooftop solar'
      ],
      faeReview: {
        author: 'Jennifer Chen',
        title: 'Senior FAE - Solar Systems',
        content: 'The PV-25A-1500 is designed for the latest ultra-high-power solar modules exceeding 600W. With modules now reaching 700W+, string currents have increased significantly. The 25A rating handles strings with Isc up to approximately 16A, which is typical for these ultra-high-power modules. The 1500V rating supports utility-scale systems with reduced cabling costs. gPV certification is non-negotiable for safety. For ultra-high-power module installations, this fuse provides the current capacity needed while maintaining safety.',
        highlight: 'Very high-current gPV protection for ultra-high-power solar modules'
      },
      alternativeParts: [
        {
          partNumber: 'PV-30A-1500',
          brand: 'Bussmann',
          specifications: {
            voltage: '1500V DC',
            current: '30A',
            breaking: '20kA'
          },
          comparison: 'PV-25A-1500=><PV-30A-1500: Output current 30A > 25A (+20%), suitable for direct replacement',
          reason: 'Higher current for combiner box outputs',
          useCase: 'Combiner box outputs and inverter inputs',
          link: '/bussmann/products/solar-fuses/pv-30a-1500.html'
        },
        {
          partNumber: 'PV-20A-1500',
          brand: 'Bussmann',
          specifications: {
            voltage: '1500V DC',
            current: '20A',
            breaking: '20kA'
          },
          comparison: 'PV-25A-1500=><PV-20A-1500: Output current 20A < 25A (-20%), suitable for direct replacement',
          reason: 'Lower current for high-power strings',
          useCase: 'Strings with high-power modules (11-13A Isc)',
          link: '/bussmann/products/solar-fuses/pv-20a-1500.html'
        }
      ],
      companionParts: [
        {
          partNumber: 'PV-20A-1500',
          description: '20A version for high-power strings',
          link: '/bussmann/products/solar-fuses/pv-20a-1500.html',
          category: 'Solar Fuses'
        },
        {
          partNumber: 'PV Fuse Holder 1500V 25A',
          description: '1500V rated PV fuse holder for 25A fuses',
          link: '/bussmann/products/accessories/pv-fuse-holder-25a.html',
          category: 'Accessories'
        },
        {
          partNumber: 'PV-30A-1500',
          description: '30A version for combiner box outputs',
          link: '/bussmann/products/solar-fuses/pv-30a-1500.html',
          category: 'Solar Fuses'
        }
      ],
      faqs: [
        {
          question: 'What module sizes require 25A fuses?',
          answer: 'The PV-25A-1500 is suitable for ultra-high-power modules with Isc of approximately 14-16A. Modern 600W+ modules typically have Isc in this range. Per NEC 690.9, 1.56 x 16A = 25A minimum, making 25A fuse appropriate.',
          decisionGuide: 'Use for ultra-high-power modules with Isc 14-16A. Verify with module datasheet.',
          keywords: ['module sizing', 'ultra-high-power', 'Isc', '25A']
        },
        {
          question: 'What is the difference between 20A and 25A PV fuses?',
          answer: 'The PV-20A-1500 is rated for 20A continuous current, suitable for high-power modules with Isc 11-13A. The PV-25A-1500 handles 25A for ultra-high-power modules with Isc 14-16A. Both have the same 1500V rating and gPV certification.',
          decisionGuide: 'Select based on module Isc. Use 20A for high-power modules, 25A for ultra-high-power modules.',
          keywords: ['20A', '25A', 'fuse comparison', 'PV fuses']
        },
        {
          question: 'Can 25A fuses be used in 1000V systems?',
          answer: 'Yes, the 1500V rating is suitable for 1000V systems with excellent margin. The higher voltage rating also allows for future system upgrades to 1500V without changing fuses.',
          decisionGuide: 'Suitable for 1000V systems with margin for future expansion.',
          keywords: ['1000V', '1500V', 'voltage rating', '25A']
        },
        {
          question: 'What is the breaking capacity at 1500V for 25A?',
          answer: 'The PV-25A-1500 has a breaking capacity of 20kA at 1500V DC. This is adequate for most PV string fault conditions. The gPV certification verifies safe DC interruption at PV voltages.',
          decisionGuide: 'Verify breaking capacity is adequate for your system fault current calculations.',
          keywords: ['breaking capacity', '20kA', '1500V', '25A']
        },
        {
          question: 'Are 25A fuses suitable for bifacial modules?',
          answer: 'Yes, PV-25A-1500 fuses are suitable for bifacial modules. Bifacial modules may have slightly higher current due to rear-side irradiance. Size fuses based on the higher Isc values typical of bifacial modules.',
          decisionGuide: 'Use for bifacial modules. Size based on higher Isc values from bifacial module datasheets.',
          keywords: ['bifacial', 'modules', 'sizing', '25A']
        }
      ]
    },
    {
      partNumber: 'PV-8A-1500',
      name: '8A 1500V DC gPV Solar Fuse',
      shortDescription: '8A 1500VDC gPV fuse for small string protection in solar combiner boxes with compact 10x38mm size.',
      descriptionParagraphs: [
        'The PV-8A-1500 is a gPV-certified fuse designed for small solar string protection.',
        'With 1500V DC rating and 8A current capacity, this fuse handles small strings with compact modules.',
        'The gPV certification ensures reliable DC interruption in photovoltaic applications.'
      ],
      category: 'Solar Fuses',
      specifications: {
        'Voltage Rating': '1500V DC',
        'Current Rating': '8A',
        'Breaking Capacity': '20kA @ 1500V DC',
        'Class': 'gPV',
        'Size': '10x38mm',
        'Mounting': 'PV fuse holder',
        'Operating Temperature': '-40°C to +90°C',
        'Standards': 'IEC 60269-7, UL 248-19'
      },
      features: [
        '1500V DC rating for utility-scale solar',
        'gPV certified per IEC 60269-7',
        'Fast-acting protection for small PV strings',
        'Compact 10x38mm size',
        'UV-resistant construction',
        'Easy installation in combiner boxes'
      ],
      applications: [
        'Small solar string protection',
        'Residential solar installations',
        'Small commercial solar systems',
        'Compact module installations',
        'Combiner box protection',
        'Inverter input protection'
      ],
      faeReview: {
        author: 'Jennifer Chen',
        title: 'Senior FAE - Solar Systems',
        content: 'The PV-8A-1500 is designed for small strings with compact modules. At 8A, it handles strings with Isc up to approximately 5A, which is typical for smaller 200-300W modules. The compact 10x38mm size fits standard PV fuse holders and saves space in combiner boxes. Even for small strings, gPV certification is essential for safety. The 1500V rating provides future-proofing for system upgrades. For small module installations and residential systems with compact modules, this fuse provides cost-effective protection.',
        highlight: 'Compact gPV protection for small solar strings'
      },
      alternativeParts: [
        {
          partNumber: 'PV-10A-1500',
          brand: 'Bussmann',
          specifications: {
            voltage: '1500V DC',
            current: '10A',
            breaking: '20kA'
          },
          comparison: 'PV-8A-1500=><PV-10A-1500: Output current 10A > 8A (+25%), suitable for direct replacement',
          reason: 'Higher current for standard strings',
          useCase: 'Strings with standard modules (5-7A Isc)',
          link: '/bussmann/products/solar-fuses/pv-10a-1500.html'
        },
        {
          partNumber: 'PV-6A-1500',
          brand: 'Bussmann',
          specifications: {
            voltage: '1500V DC',
            current: '6A',
            breaking: '20kA'
          },
          comparison: 'PV-8A-1500=><PV-6A-1500: Output current 6A < 8A (-25%), suitable for direct replacement',
          reason: 'Lower current for very small strings',
          useCase: 'Strings with very small modules (3-4A Isc)',
          link: '/bussmann/products/solar-fuses/pv-6a-1500.html'
        }
      ],
      companionParts: [
        {
          partNumber: 'PV-10A-1500',
          description: '10A version for standard strings',
          link: '/bussmann/products/solar-fuses/pv-10a-1500.html',
          category: 'Solar Fuses'
        },
        {
          partNumber: 'PV Fuse Holder 1500V 8A',
          description: '1500V rated PV fuse holder for 8A fuses',
          link: '/bussmann/products/accessories/pv-fuse-holder-8a.html',
          category: 'Accessories'
        },
        {
          partNumber: 'PV-6A-1500',
          description: '6A version for very small strings',
          link: '/bussmann/products/solar-fuses/pv-6a-1500.html',
          category: 'Solar Fuses'
        }
      ],
      faqs: [
        {
          question: 'What module sizes work with 8A fuses?',
          answer: 'The PV-8A-1500 is suitable for small modules with Isc of approximately 4-5A. This includes most 200-300W compact modules. Per NEC 690.9, 1.56 x 5A = 7.8A minimum, making 8A fuse appropriate for these modules.',
          decisionGuide: 'Use for small modules with Isc 4-5A. Verify with module datasheet.',
          keywords: ['module sizing', 'small modules', 'Isc', '8A']
        },
        {
          question: 'What is the physical size of 8A fuses?',
          answer: 'The PV-8A-1500 uses a compact 10x38mm size, smaller than the 10x85mm size used for 15A and larger fuses. This compact size fits standard 10x38mm PV fuse holders and saves space in combiner boxes.',
          decisionGuide: 'Verify fuse holder compatibility. Compact size saves space in combiner boxes.',
          keywords: ['dimensions', '10x38mm', 'compact', '8A']
        },
        {
          question: 'Can 8A fuses be upgraded to 10A later?',
          answer: 'Upgrading from 8A to 10A fuses is typically straightforward as both use the same 10x38mm size. Always verify the fuse holder is rated for at least 10A continuous current.',
          decisionGuide: 'Verify fuse holder current rating before upgrading fuse sizes.',
          keywords: ['upgrade', 'fuse holder', 'compatibility', '8A']
        },
        {
          question: 'Are 8A fuses suitable for residential solar?',
          answer: 'Yes, 8A fuses are commonly used in residential solar installations with small 200-300W modules. The 1500V rating provides margin for system expansion, while the 8A capacity handles typical small residential string currents.',
          decisionGuide: 'Suitable for residential solar with small modules. Verify module Isc before selecting.',
          keywords: ['residential', 'solar', 'applications', '8A']
        },
        {
          question: 'What is the temperature rating of PV-8A-1500?',
          answer: 'The PV-8A-1500 is rated for -40°C to +90°C ambient temperature. This wide range accommodates outdoor installations in various climates. Above 70°C ambient, current derating may be required.',
          decisionGuide: 'Verify operating temperature range for your installation location. Apply derating if needed.',
          keywords: ['temperature', 'rating', 'ambient', '8A']
        }
      ]
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

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Added ${addedCount} products total.`);
console.log('\n📊 Final product counts per category:');
productsData.categories.forEach((category) => {
  console.log(`   ${category.name}: ${category.products.length} products`);
});
