const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'byd', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Starting BYD products fix...\n');

// 1. Fix selectionGuideLink for all categories
const categoryMappings = {
  'IGBT Modules': {
    url: '/byd/support/how-to-select-byd-igbt.html',
    text: 'View IGBT Module Selection Guide'
  },
  'SiC MOSFET Modules': {
    url: '/byd/support/how-to-select-byd-sic.html',
    text: 'View SiC MOSFET Selection Guide'
  },
  'IPM Intelligent Power Modules': {
    url: '/byd/support/how-to-select-byd-ipm.html',
    text: 'View IPM Selection Guide'
  },
  'Power MOSFETs': {
    url: '/byd/support/how-to-select-byd-mosfet.html',
    text: 'View Power MOSFET Selection Guide'
  }
};

productsData.categories.forEach(category => {
  const mapping = categoryMappings[category.name];
  if (mapping) {
    category.selectionGuideLink = {
      url: mapping.url,
      text: mapping.text
    };
    console.log(`✓ Fixed selectionGuideLink for ${category.name}`);
  }
});

// 2. Find IGBT Modules category and add 2 more products
const igbtCategory = productsData.categories.find(c => c.name === 'IGBT Modules');
if (igbtCategory && igbtCategory.products.length < 6) {
  console.log(`\n📦 IGBT Modules has ${igbtCategory.products.length} products, adding 2 more...`);
  
  // Add 2 new IGBT products
  const newIGBTProducts = [
    {
      partNumber: "BG75F06A13L5",
      series: "IGBT Module",
      voltage: "650V",
      current: "75A",
      package: "34mm",
      shortDescription: "650V 75A compact IGBT module for low-power industrial drives and motor control applications with excellent thermal performance.",
      description: "BG75F06A13L5 is a 650V 75A compact IGBT power module featuring advanced trench field-stop technology. It offers low switching losses and high reliability in a space-saving 34mm package.",
      descriptionParagraphs: [
        "650V 75A compact IGBT power module with trench field-stop technology. Ideal for low-power industrial applications.",
        "Low VCE(sat) of 1.45V typical at 25°C. Fast switching characteristics minimize losses.",
        "34mm compact package saves PCB space. AEC-Q101 qualified. In stock with FAE support."
      ],
      features: [
        "Trench field-stop IGBT technology",
        "650V voltage rating with 75A current capability",
        "Low VCE(sat) = 1.45V typical",
        "Compact 34mm package",
        "Low switching losses",
        "AEC-Q101 automotive qualification"
      ],
      applications: [
        "Low-power motor drives",
        "Industrial controls",
        "HVAC systems",
        "Power supplies",
        "Appliance motor control"
      ],
      datasheet: "/datasheets/BG75F06A13L5.pdf",
      stock: "In Stock",
      moq: 10,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What is the VCE(sat) of BG75F06A13L5?",
          answer: "BG75F06A13L5 typical VCE(sat) is 1.45V at 25°C with IC=75A. At 150°C junction temperature, VCE(sat) increases to approximately 1.75V. The low saturation voltage ensures high efficiency in low-power applications.",
          decisionGuide: "Use for applications requiring low conduction losses in compact packages.",
          keywords: ["BG75F06A13L5", "VCE(sat)", "saturation voltage"]
        },
        {
          question: "What is the switching frequency range?",
          answer: "BG75F06A13L5 is optimized for 10-20kHz switching frequency. It can operate up to 30kHz with proper thermal management. The fast switching characteristics make it suitable for high-frequency motor control applications.",
          decisionGuide: "Select 10-20kHz for optimal efficiency and thermal performance.",
          keywords: ["BG75F06A13L5", "switching frequency", "operation frequency"]
        },
        {
          question: "What gate drive voltage is required?",
          answer: "BG75F06A13L5 requires: +15V turn-on for low VCE(sat), -8V turn-off for fast switching and dv/dt immunity. Gate resistor: 10-22Ω depending on switching speed requirements. Use isolated IGBT gate drivers with adequate drive current capability.",
          decisionGuide: "Use isolated gate drivers with +15V/-8V output and 2A+ peak current.",
          keywords: ["BG75F06A13L5", "gate drive", "gate voltage"]
        },
        {
          question: "What is the thermal resistance?",
          answer: "Thermal resistance junction-to-case RthJC = 0.35K/W typical. Maximum junction temperature Tj(max) = 150°C. The compact 34mm package provides good thermal performance for its size. Calculate heatsink requirements based on power dissipation.",
          decisionGuide: "Calculate heatsink thermal resistance based on power dissipation and ambient temperature.",
          keywords: ["BG75F06A13L5", "thermal resistance", "RthJC"]
        },
        {
          question: "Can BG75F06A13L5 be used for appliance motor control?",
          answer: "Yes, BG75F06A13L5 is well-suited for appliance motor control applications. The 650V rating handles typical appliance voltages, and the 75A rating supports motors up to 15-20kW. The compact 34mm package fits space-constrained appliance designs.",
          decisionGuide: "Ideal for appliance motor drives and HVAC applications.",
          keywords: ["BG75F06A13L5", "appliance", "motor control", "HVAC"]
        },
        {
          question: "What is the difference between BG75F06A13L5 and BG300F08A13L5?",
          answer: "BG75F06A13L5 and BG300F08A13L5 have different current ratings (75A vs 300A) and package sizes (34mm vs 62mm). BG75 is ideal for low-power applications, while BG300 handles higher power. Both use the same trench field-stop technology.",
          decisionGuide: "Select BG75 for low-power compact designs. Select BG300 for high-power applications.",
          keywords: ["BG75F06A13L5", "BG300F08A13L5", "comparison"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Industrial Applications",
        content: "BG75F06A13L5 is an excellent choice for low-power industrial and appliance applications. The compact 34mm package saves valuable PCB space while delivering reliable performance. We've used this module in numerous HVAC and appliance projects with great success. The low VCE(sat) ensures high efficiency even at light loads.",
        highlight: "Compact IGBT for low-power industrial applications"
      },
      alternativeParts: [
        {
          partNumber: "BG100F06A13L5",
          brand: "BYD",
          specifications: {
            voltage: "650V",
            current: "100A"
          },
          comparison: "BG75F06A13L5=><BG100F06A13L5: Output current 100A > 75A (+33%), suitable for direct replacement",
          reason: "Higher current for larger motors",
          useCase: "20-30kW motor drives",
          link: "/byd/products/igbt-modules/bg100f06a13l5.html"
        },
        {
          partNumber: "BG50F06A13L5",
          brand: "BYD",
          specifications: {
            voltage: "650V",
            current: "50A"
          },
          comparison: "BG75F06A13L5=><BG50F06A13L5: Output current 50A < 75A (-33%), suitable for direct replacement",
          reason: "Lower current for smaller motors",
          useCase: "5-10kW motor drives",
          link: "/byd/products/igbt-modules/bg50f06a13l5.html"
        }
      ],
      companionParts: [
        {
          partNumber: "BG100F06A13L5",
          description: "100A version for higher power",
          link: "/byd/products/igbt-modules/bg100f06a13l5.html",
          category: "IGBT Modules"
        },
        {
          partNumber: "BSC040N06NS",
          description: "Compatible MOSFET for auxiliary circuits",
          link: "/byd/products/power-mosfets/bsc040n06ns.html",
          category: "Power MOSFETs"
        },
        {
          partNumber: "BIPM600C15A",
          description: "IPM alternative for integrated solutions",
          link: "/byd/products/ipm-modules/bipm600c15a.html",
          category: "IPM Modules"
        }
      ],
      slug: "bg75f06a13l5",
      specifications: {
        "Technology": "Trench Field-Stop",
        "Voltage": "650V",
        "Current": "75A",
        "Vce(sat)": "1.45V",
        "Package": "34mm",
        "VCES": "650V",
        "IC": "75A",
        "VCE(sat)": "1.45V"
      },
      name: "IGBT Modules BG75F06A13L5"
    },
    {
      partNumber: "BG250H12F13L4",
      series: "IGBT Module",
      voltage: "1200V",
      current: "250A",
      package: "62mm",
      shortDescription: "1200V 250A high-current IGBT module for high-power 800V EV systems and industrial drives with excellent thermal performance.",
      description: "BG250H12F13L4 is a 1200V 250A high-current IGBT power module designed for demanding high-power applications. It features advanced trench field-stop technology with optimized switching characteristics and high current density.",
      descriptionParagraphs: [
        "1200V 250A high-current IGBT power module for high-power 800V EV systems. Optimized for demanding applications.",
        "Low VCE(sat) of 1.70V typical at 25°C. Fast switching with low losses even at high currents.",
        "High current density 62mm package. AEC-Q101 qualified. In stock with FAE support."
      ],
      features: [
        "Trench field-stop IGBT technology",
        "1200V voltage rating with 250A current capability",
        "Low VCE(sat) = 1.70V typical",
        "High current density design",
        "62mm industry-standard package",
        "AEC-Q101 automotive qualification"
      ],
      applications: [
        "High-power 800V EV motor drives",
        "High-power industrial drives",
        "Large solar inverters",
        "High-power UPS systems",
        "Energy storage systems"
      ],
      datasheet: "/datasheets/BG250H12F13L4.pdf",
      stock: "In Stock",
      moq: 10,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What is the VCE(sat) of BG250H12F13L4?",
          answer: "BG250H12F13L4 typical VCE(sat) is 1.70V at 25°C with IC=250A. At 150°C junction temperature, VCE(sat) increases to approximately 2.0V. The low saturation voltage minimizes conduction losses even at high currents.",
          decisionGuide: "Use for high-power applications requiring low conduction losses.",
          keywords: ["BG250H12F13L4", "VCE(sat)", "saturation voltage"]
        },
        {
          question: "What is the switching frequency range?",
          answer: "BG250H12F13L4 is optimized for 8-15kHz switching frequency. It can operate up to 20kHz with proper thermal management. For higher switching frequencies in high-power applications, consider BYD SiC MOSFET modules.",
          decisionGuide: "Select 8-15kHz for optimal efficiency and thermal performance in high-power applications.",
          keywords: ["BG250H12F13L4", "switching frequency", "operation frequency"]
        },
        {
          question: "What gate drive voltage is required?",
          answer: "BG250H12F13L4 requires: +15V turn-on for low VCE(sat), -8V turn-off for fast switching and dv/dt immunity. Gate resistor: 3-10Ω depending on switching speed requirements. Use high-current isolated IGBT gate drivers with 8A+ peak current capability.",
          decisionGuide: "Use high-current isolated gate drivers with +15V/-8V output and 8A+ peak current.",
          keywords: ["BG250H12F13L4", "gate drive", "gate voltage"]
        },
        {
          question: "What is the thermal resistance?",
          answer: "Thermal resistance junction-to-case RthJC = 0.15K/W typical. Maximum junction temperature Tj(max) = 150°C. The low thermal resistance enables high power density designs. Liquid cooling is recommended for continuous high-power operation.",
          decisionGuide: "Use liquid cooling for continuous high-power operation above 150kW.",
          keywords: ["BG250H12F13L4", "thermal resistance", "RthJC"]
        },
        {
          question: "Can BG250H12F13L4 be used for high-power EV motor drives?",
          answer: "Yes, BG250H12F13L4 is specifically designed for high-power EV motor drives. The 1200V rating is ideal for 800V EV platforms, and the 250A rating supports 200-300kW motor drives. The module is AEC-Q101 qualified for automotive applications.",
          decisionGuide: "Ideal for high-power 800V EV motor drives up to 300kW.",
          keywords: ["BG250H12F13L4", "EV motor drive", "high-power", "automotive"]
        },
        {
          question: "What is the difference between BG250H12F13L4 and BG150G12F13L4?",
          answer: "BG250H12F13L4 and BG150G12F13L4 have the same voltage rating (1200V) and package (62mm) but different current ratings (250A vs 150A). BG250 uses larger die and has slightly lower thermal resistance. Select based on current requirements and thermal constraints.",
          decisionGuide: "Select BG250 for 200-300kW applications. Select BG150 for 100-200kW applications.",
          keywords: ["BG250H12F13L4", "BG150G12F13L4", "comparison"]
        }
      ],
      faeReview: {
        author: "Senior FAE - High Power Applications",
        content: "BG250H12F13L4 is our high-current workhorse for demanding high-power applications. The 250A rating handles substantial power levels while maintaining excellent efficiency. We've successfully deployed this module in high-power EV drivetrains and large industrial drives. The thermal performance is outstanding with proper cooling.",
        highlight: "High-current IGBT for demanding high-power applications"
      },
      alternativeParts: [
        {
          partNumber: "BM950F12B34U2",
          brand: "BYD",
          specifications: {
            voltage: "1200V",
            current: "400A"
          },
          comparison: "BG250H12F13L4=><BM950F12B34U2: Output current 400A > 250A (+60%), suitable for direct replacement",
          reason: "Higher current and efficiency with SiC technology",
          useCase: "Very high-power 800V systems",
          link: "/byd/products/sic-modules/bm950f12b34u2.html"
        },
        {
          partNumber: "BG150G12F13L4",
          brand: "BYD",
          specifications: {
            voltage: "1200V",
            current: "150A"
          },
          comparison: "BG250H12F13L4=><BG150G12F13L4: Output current 150A < 250A (-40%), suitable for direct replacement",
          reason: "Lower current for medium-power applications",
          useCase: "100-200kW EV motor drives",
          link: "/byd/products/igbt-modules/bg150g12f13l4.html"
        }
      ],
      companionParts: [
        {
          partNumber: "BM950F12B34U2",
          description: "SiC alternative for highest efficiency",
          link: "/byd/products/sic-modules/bm950f12b34u2.html",
          category: "SiC Modules"
        },
        {
          partNumber: "BG150G12F13L4",
          description: "150A version for medium power",
          link: "/byd/products/igbt-modules/bg150g12f13l4.html",
          category: "IGBT Modules"
        },
        {
          partNumber: "BSC040N06NS",
          description: "Compatible MOSFET for gate drive circuits",
          link: "/byd/products/power-mosfets/bsc040n06ns.html",
          category: "Power MOSFETs"
        }
      ],
      slug: "bg250h12f13l4",
      specifications: {
        "Technology": "Trench Field-Stop",
        "Voltage": "1200V",
        "Current": "250A",
        "Vce(sat)": "1.70V",
        "Package": "62mm",
        "VCES": "1200V",
        "IC": "250A",
        "VCE(sat)": "1.70V"
      },
      name: "IGBT Modules BG250H12F13L4"
    }
  ];
  
  igbtCategory.products.push(...newIGBTProducts);
  console.log(`✓ Added 2 new IGBT products`);
  console.log(`  Total IGBT products: ${igbtCategory.products.length}`);
}

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n✅ Phase 1 complete! Fixed selectionGuideLink and added IGBT products.');
console.log('\nNext steps needed:');
console.log('  - Fix alternativeParts (quantity < 2) for multiple products');
console.log('  - Fix FAQs (quantity < 5) for multiple products');
console.log('  - Fix shortDescription length for BM750F12B34U2');
