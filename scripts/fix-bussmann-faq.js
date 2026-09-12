const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'bussmann', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix FAQ answers that are too short
const fixes = [
  // Low Voltage Fuses - FRN-R-100
  {
    category: 'Low Voltage Fuses',
    product: 'FRN-R-100',
    faqIndex: 3,
    newAnswer: 'No, the FRN-R-100 is rated for 250V AC only. For 480V systems, you must use FRN-R-100 fuses with 600V rating (FRS-R series) or Class J fuses rated for 600V. Using underrated voltage fuses can result in unsafe operation, failure to clear faults, and potential fire hazards. Always verify voltage rating matches your system requirements.',
    newDecisionGuide: 'Verify voltage rating matches your system. Use 600V rated fuses for 480V systems.'
  },
  // Semiconductor Fuses - 170M5815
  {
    category: 'Semiconductor Fuses',
    product: '170M5815',
    faqIndex: 1,
    newAnswer: 'The 170M5815 is rated for 125A continuous current and is ideal for protecting 125A-150A IGBT modules. The 170M5816 handles 160A for larger 160A-200A IGBT modules. Both have the same 700V rating and ultra-low I2t characteristics essential for semiconductor protection. Select based on your IGBT current rating and verify I2t coordination.',
    newDecisionGuide: 'Select based on IGBT current rating. 170M5815 for 125-150A modules, 170M5816 for 160-200A modules.'
  },
  // Semiconductor Fuses - FWP-150A
  {
    category: 'Semiconductor Fuses',
    product: 'FWP-150A',
    faqIndex: 0,
    newAnswer: 'The FWP-150A is suitable for protecting IGBT modules rated 150A-200A at 600V-690V. It is critical to verify I2t coordination with your specific IGBT datasheet to ensure reliable protection. The fuse clearing I2t must be less than 80% of the IGBT withstand I2t for proper coordination.',
    newDecisionGuide: 'Perform I2t coordination analysis with your IGBT module datasheet before selection.'
  },
  // EV Fuses - EV100-250-1
  {
    category: 'EV Fuses',
    product: 'EV100-250-1',
    faqIndex: 2,
    newAnswer: 'M8 mounting bolts should be torqued to 12-15 Nm (9-11 ft-lb). Use a calibrated torque wrench and verify torque after installation and thermal cycling. Proper torque ensures reliable electrical contact and prevents overheating.',
    newDecisionGuide: 'Use 12-15 Nm torque for M8 bolts. Verify after installation and thermal cycling.'
  },
  {
    category: 'EV Fuses',
    product: 'EV100-250-1',
    faqIndex: 3,
    newAnswer: 'Yes, the 1000V rating is suitable for 400V systems with excellent margin. However, for 400V-only applications, 500V or 600V rated fuses may be more cost-effective. Consider your future system architecture when selecting voltage rating.',
    newDecisionGuide: 'Can be used for 400V systems. Consider lower voltage fuses for cost optimization if 800V upgrade is not planned.'
  },
  {
    category: 'EV Fuses',
    product: 'EV100-250-1',
    faqIndex: 4,
    newAnswer: 'The EV100-250-1 has a compact design suitable for small battery packs. Exact dimensions are available in the datasheet. The compact size allows integration into space-constrained battery enclosures while providing 250A protection capacity.',
    newDecisionGuide: 'Verify physical dimensions in datasheet for your battery pack design requirements.'
  },
  // EV Fuses - EV100-700-1
  {
    category: 'EV Fuses',
    product: 'EV100-700-1',
    faqIndex: 2,
    newAnswer: 'M12 mounting bolts for 700A fuses should be torqued to 40-50 Nm (30-37 ft-lb). Use a calibrated torque wrench and verify torque after installation and thermal cycling. Proper torque is critical for reliable electrical contact at high currents.',
    newDecisionGuide: 'Use 40-50 Nm torque for M12 bolts. Verify after installation and thermal cycling.'
  },
  // Solar Fuses - PV-25A-1500
  {
    category: 'Solar Fuses',
    product: 'PV-25A-1500',
    faqIndex: 2,
    newAnswer: 'Yes, the 1500V rating is suitable for 1000V systems with excellent margin. The higher voltage rating also allows for future system upgrades to 1500V without changing fuses, providing investment protection for system expansion.',
    newDecisionGuide: 'Suitable for 1000V systems with margin for future expansion to 1500V.'
  },
  {
    category: 'Solar Fuses',
    product: 'PV-25A-1500',
    faqIndex: 3,
    newAnswer: 'The PV-25A-1500 has a breaking capacity of 20kA at 1500V DC. This is adequate for most PV string fault conditions. The gPV certification verifies safe DC interruption at PV voltages up to 1500V.',
    newDecisionGuide: 'Verify breaking capacity is adequate for your system fault current calculations.'
  },
  // Solar Fuses - PV-8A-1500
  {
    category: 'Solar Fuses',
    product: 'PV-8A-1500',
    faqIndex: 1,
    newAnswer: 'The PV-8A-1500 uses a compact 10x38mm size, smaller than the 10x85mm size used for 15A and larger fuses. This compact size fits standard 10x38mm PV fuse holders and saves valuable space in combiner boxes.',
    newDecisionGuide: 'Verify fuse holder compatibility. Compact size saves space in combiner boxes.'
  },
  {
    category: 'Solar Fuses',
    product: 'PV-8A-1500',
    faqIndex: 2,
    newAnswer: 'Upgrading from 8A to 10A fuses is typically straightforward as both use the same 10x38mm size. Always verify the fuse holder is rated for at least 10A continuous current and check module Isc to ensure proper sizing.',
    newDecisionGuide: 'Verify fuse holder current rating and module Isc before upgrading fuse sizes.'
  },
  {
    category: 'Solar Fuses',
    product: 'PV-8A-1500',
    faqIndex: 4,
    newAnswer: 'The PV-8A-1500 is rated for -40°C to +90°C ambient temperature. This wide range accommodates outdoor installations in various climates. Above 70°C ambient, current derating may be required to maintain safe operation.',
    newDecisionGuide: 'Verify operating temperature range for your installation location. Apply derating if needed.'
  }
];

let fixedCount = 0;

// Apply fixes
fixes.forEach(fix => {
  const category = productsData.categories.find(c => c.name === fix.category);
  if (category) {
    const product = category.products.find(p => p.partNumber === fix.product);
    if (product && product.faqs[fix.faqIndex]) {
      product.faqs[fix.faqIndex].answer = fix.newAnswer;
      product.faqs[fix.faqIndex].decisionGuide = fix.newDecisionGuide;
      fixedCount++;
      console.log(`✓ Fixed ${fix.category} - ${fix.product} FAQ #${fix.faqIndex + 1}`);
    }
  }
});

// Fix selectionGuideLink for all categories
productsData.categories.forEach(category => {
  if (category.selectionGuide && category.selectionGuide.articleLink) {
    category.selectionGuideLink = category.selectionGuide.articleLink;
    console.log(`✓ Fixed selectionGuideLink for ${category.name}`);
  }
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Fixed ${fixedCount} FAQ answers and updated selectionGuideLink for all categories.`);
