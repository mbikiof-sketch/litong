/**
 * Fix missing fields in newly added bpsemi products
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'bpsemi', 'products.json');

console.log('Reading products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixCount = 0;

// Helper function to generate FAQs for power IC products
function generatePowerICFAQs(product, category) {
  const faqs = [
    {
      question: `What is the maximum operating temperature of ${product.partNumber}?`,
      answer: `${product.partNumber} is rated for industrial temperature range of -40°C to +105°C or -40°C to +85°C depending on the specific variant. This ensures reliable operation in harsh environments.`,
      decisionGuide: 'For high-temperature applications, verify the specific temperature grade. Standard grade is sufficient for consumer electronics.',
      keywords: ['temperature', 'operating range', 'industrial grade', 'thermal']
    },
    {
      question: `What protection features does ${product.partNumber} include?`,
      answer: `${product.partNumber} includes comprehensive protection features including over-temperature protection, over-current protection, short-circuit protection, and under-voltage lockout to ensure safe and reliable operation.`,
      decisionGuide: 'For safety-critical applications, verify all protection features are enabled. For cost-sensitive designs, essential protections are sufficient.',
      keywords: ['protection', 'over-temperature', 'over-current', 'safety']
    },
    {
      question: `What is the recommended PCB layout for ${product.partNumber}?`,
      answer: `Place input/output capacitors close to the IC pins, use wide traces for power paths, and implement proper thermal vias for heat dissipation. Refer to the datasheet for detailed layout recommendations.`,
      decisionGuide: 'For high-power applications, prioritize thermal design. For compact designs, follow the reference layout closely.',
      keywords: ['PCB layout', 'thermal', 'decoupling', 'EMI']
    },
    {
      question: `How do I select the appropriate external components for ${product.partNumber}?`,
      answer: `Refer to the typical application circuit in the datasheet for recommended external component values. Consider input voltage range, output current requirements, and switching frequency when selecting inductors and capacitors.`,
      decisionGuide: 'For optimal performance, use recommended component values. For cost optimization, verify performance with alternative components.',
      keywords: ['external components', 'BOM', 'inductor', 'capacitor']
    },
    {
      question: `What is the efficiency of ${product.partNumber} at light load?`,
      answer: `${product.partNumber} maintains high efficiency across the load range, with particular optimization for light load conditions to minimize power consumption in standby modes.`,
      decisionGuide: 'For battery-powered applications, light load efficiency is critical. For always-on systems, full load efficiency matters more.',
      keywords: ['efficiency', 'light load', 'power consumption', 'standby']
    }
  ];
  
  return faqs;
}

// Helper function to generate alternative parts
function generateAlternativeParts(product, category) {
  const alternatives = [];
  
  if (category === 'led-lighting-drivers') {
    alternatives.push(
      {
        partNumber: 'BP2836A',
        link: '/bpsemi/products/led-lighting-drivers/bp2836a',
        reason: 'Lower cost variant with similar specifications',
        brand: 'BPSemi',
        comparison: 'BP2836A: Basic PFC, lower cost => Cost-sensitive applications'
      },
      {
        partNumber: 'BP2861',
        link: '/bpsemi/products/led-lighting-drivers/bp2861',
        reason: 'Isolated LED driver with higher power capability',
        brand: 'BPSemi',
        comparison: 'BP2861: Isolated, higher power => Higher power applications'
      }
    );
  } else if (category === 'acdc-power-management') {
    alternatives.push(
      {
        partNumber: 'BP2525B',
        link: '/bpsemi/products/acdc-power-management/bp2525b',
        reason: 'Higher power variant with similar architecture',
        brand: 'BPSemi',
        comparison: 'BP2525B: Higher power, similar feedback => Higher power chargers'
      },
      {
        partNumber: 'BP3339',
        link: '/bpsemi/products/acdc-power-management/bp3339',
        reason: 'Synchronous rectification for higher efficiency',
        brand: 'BPSemi',
        comparison: 'BP3339: Synchronous rectification => Higher efficiency applications'
      }
    );
  } else if (category === 'motor-drivers') {
    alternatives.push(
      {
        partNumber: 'BP6308',
        link: '/bpsemi/products/motor-drivers/bp6308',
        reason: 'Integrated driver with higher current capability',
        brand: 'BPSemi',
        comparison: 'BP6308: Integrated MOSFETs => Simpler design'
      },
      {
        partNumber: 'BP6601',
        link: '/bpsemi/products/motor-drivers/bp6601',
        reason: 'Stepper motor driver for precision control',
        brand: 'BPSemi',
        comparison: 'BP6601: Stepper control => Precision motion applications'
      }
    );
  }
  
  return alternatives;
}

// Helper function to generate companion parts
function generateCompanionParts(product, category) {
  const companions = [];
  
  if (category === 'led-lighting-drivers') {
    companions.push(
      {
        partNumber: 'BP2861',
        link: '/bpsemi/products/led-lighting-drivers/bp2861',
        description: 'Isolated LED driver for higher power applications',
        category: 'LED Driver'
      },
      {
        partNumber: 'BP3319',
        link: '/bpsemi/products/led-lighting-drivers/bp3319',
        description: 'Dimming controller for smart lighting',
        category: 'LED Driver'
      },
      {
        partNumber: 'BP2525B',
        link: '/bpsemi/products/acdc-power-management/bp2525b',
        description: 'AC/DC controller for auxiliary power',
        category: 'Power Management'
      }
    );
  } else if (category === 'acdc-power-management') {
    companions.push(
      {
        partNumber: 'BP2836D',
        link: '/bpsemi/products/led-lighting-drivers/bp2836d',
        description: 'LED driver for power indicator',
        category: 'LED Driver'
      },
      {
        partNumber: 'BP2306',
        link: '/bpsemi/products/dcdc-converters/bp2306',
        description: 'DC/DC converter for secondary rails',
        category: 'DC/DC Converter'
      },
      {
        partNumber: 'BP6308',
        link: '/bpsemi/products/motor-drivers/bp6308',
        description: 'Motor driver for cooling fan',
        category: 'Motor Driver'
      }
    );
  } else if (category === 'motor-drivers') {
    companions.push(
      {
        partNumber: 'BP2306',
        link: '/bpsemi/products/dcdc-converters/bp2306',
        description: 'DC/DC converter for motor power supply',
        category: 'DC/DC Converter'
      },
      {
        partNumber: 'BP2525B',
        link: '/bpsemi/products/acdc-power-management/bp2525b',
        description: 'AC/DC controller for main power',
        category: 'Power Management'
      },
      {
        partNumber: 'BP2836D',
        link: '/bpsemi/products/led-lighting-drivers/bp2836d',
        description: 'LED driver for status indication',
        category: 'LED Driver'
      }
    );
  }
  
  return companions;
}

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📂 Processing category: ${category.name}`);
  
  category.products.forEach((product) => {
    // Check if product is newly added (last products in each category)
    const productIndex = category.products.indexOf(product);
    const isNewProduct = productIndex >= 4; // Products 5 and 6 are new
    
    if (isNewProduct) {
      console.log(`  🔧 Fixing new product: ${product.partNumber}`);
      
      // Add alternativeParts if missing
      if (!product.alternativeParts || product.alternativeParts.length === 0) {
        product.alternativeParts = generateAlternativeParts(product, category.slug);
        fixCount++;
        console.log(`    ✓ Added alternativeParts (${product.alternativeParts.length})`);
      }
      
      // Add companionParts if missing
      if (!product.companionParts || product.companionParts.length === 0) {
        product.companionParts = generateCompanionParts(product, category.slug);
        fixCount++;
        console.log(`    ✓ Added companionParts (${product.companionParts.length})`);
      }
      
      // Add FAQs if missing
      if (!product.faqs || product.faqs.length === 0) {
        product.faqs = generatePowerICFAQs(product, category.slug);
        fixCount++;
        console.log(`    ✓ Added FAQs (${product.faqs.length})`);
      }
    }
  });
});

// Write back
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`\n========================================`);
console.log(`New product field fix complete!`);
console.log(`Total fixes: ${fixCount}`);
console.log(`========================================`);
