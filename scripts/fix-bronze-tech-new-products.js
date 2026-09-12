/**
 * Fix missing fields in newly added bronze-tech products
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'bronze-tech', 'products.json');

console.log('Reading products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixCount = 0;

// Helper function to generate FAQs for connector products
function generateConnectorFAQs(product, category) {
  const faqs = [
    {
      question: `What is the mating cycle rating of ${product.partNumber}?`,
      answer: `${product.partNumber} is rated for ${product.specifications['Mating Cycles'] || 'multiple'} mating cycles under normal operating conditions. This ensures long-term reliability in applications requiring frequent connection and disconnection.`,
      decisionGuide: 'For applications with frequent mating, choose connectors with higher cycle ratings. For permanent installations, standard ratings are sufficient.',
      keywords: ['mating cycles', 'durability', 'connection life', 'reliability']
    },
    {
      question: `What tools are required for assembling ${product.partNumber}?`,
      answer: `${product.partNumber} requires standard crimping tools for wire termination. Bronze Tech provides recommended tool part numbers and can supply complete tooling solutions for production volumes.`,
      decisionGuide: 'For prototyping, standard tools are sufficient. For production, consider automated tooling for consistency and efficiency.',
      keywords: ['tools', 'crimping', 'assembly', 'termination']
    },
    {
      question: `Does ${product.partNumber} support RoHS compliance?`,
      answer: `Yes, ${product.partNumber} is fully RoHS compliant and meets environmental regulations for restricted substances. Lead-free plating and halogen-free materials are used in manufacturing.`,
      decisionGuide: 'For export to regulated markets, RoHS compliance is mandatory. All Bronze Tech standard products meet these requirements.',
      keywords: ['RoHS', 'environmental compliance', 'lead-free', 'regulations']
    },
    {
      question: `What is the lead time for ${product.partNumber}?`,
      answer: `Standard lead time for ${product.partNumber} is 4-6 weeks for production quantities. Sample quantities are typically available from stock or with 1-2 week lead time. Contact Bronze Tech sales for current availability.`,
      decisionGuide: 'Plan procurement based on standard lead times. For urgent requirements, check stock availability or consider alternative products.',
      keywords: ['lead time', 'delivery', 'stock', 'procurement']
    },
    {
      question: `Can ${product.partNumber} be customized for specific applications?`,
      answer: `Yes, Bronze Tech offers customization services for ${product.partNumber} including modified housing colors, custom keying, special plating, and private labeling. Minimum order quantities apply for custom configurations.`,
      decisionGuide: 'For unique applications, customization may be cost-effective at volume. For standard applications, catalog products offer best availability and pricing.',
      keywords: ['customization', 'modifications', 'special requirements', 'OEM']
    }
  ];
  
  return faqs;
}

// Helper function to generate alternative parts
function generateAlternativeParts(product, category) {
  const alternatives = [];
  
  if (category === 'board-to-board') {
    alternatives.push(
      {
        partNumber: 'Molex 87831',
        link: '/molex/products/87831',
        reason: 'Similar pitch and configuration from established manufacturer',
        brand: 'Molex',
        comparison: 'Molex 87831: 2.54mm pitch, similar current rating => Established brand with global support'
      },
      {
        partNumber: 'TE 1-215911-0',
        link: '/te/products/1-215911-0',
        reason: 'Comparable specifications with TE quality',
        brand: 'TE Connectivity',
        comparison: 'TE 1-215911-0: Standard pitch, industrial grade => Premium brand with extensive tooling'
      }
    );
  } else if (category === 'wire-to-board') {
    alternatives.push(
      {
        partNumber: 'JST PHR-6',
        link: '/jst/products/phr-6',
        reason: 'Industry standard connector with same pitch',
        brand: 'JST',
        comparison: 'JST PHR-6: 2.0mm pitch, 6 positions => Industry standard with broad availability'
      },
      {
        partNumber: 'Hirose DF13-6P',
        link: '/hirose/products/df13-6p',
        reason: 'High-reliability alternative from Japanese manufacturer',
        brand: 'Hirose',
        comparison: 'Hirose DF13-6P: 1.25mm pitch, compact => Higher density, premium quality'
      }
    );
  } else if (category === 'circular-connectors') {
    alternatives.push(
      {
        partNumber: 'Amphenol M16',
        link: '/amphenol/products/m16',
        reason: 'Similar M16 size with IP67 protection',
        brand: 'Amphenol',
        comparison: 'Amphenol M16: Standard size, IP67 => Established industrial brand'
      },
      {
        partNumber: 'Binder 423',
        link: '/binder/products/423',
        reason: 'European quality circular connector',
        brand: 'Binder',
        comparison: 'Binder 423: M12 size, IP67 => European quality, robust design'
      }
    );
  } else if (category === 'custom-interconnect') {
    alternatives.push(
      {
        partNumber: 'Standard Catalog Product',
        link: '/bronze-tech/products',
        reason: 'Standard product may meet requirements at lower cost',
        brand: 'Bronze Tech',
        comparison: 'Standard products: Lower cost, faster delivery => Consider before custom design'
      },
      {
        partNumber: 'Competitor Custom Solution',
        link: '/contact',
        reason: 'Contact Bronze Tech for competitive custom solutions',
        brand: 'Various',
        comparison: 'Custom solutions: Contact sales => Bronze Tech offers competitive custom capabilities'
      }
    );
  }
  
  return alternatives;
}

// Helper function to generate companion parts
function generateCompanionParts(product, category) {
  const companions = [];
  
  if (category === 'board-to-board') {
    companions.push(
      {
        partNumber: 'WTB-PH-6P-CR',
        link: '/bronze-tech/products/wire-to-board/wtb-ph-6p-cr',
        description: 'Wire-to-board connector for power input',
        category: 'Wire-to-Board'
      },
      {
        partNumber: 'CIR-M12-4P-ANG',
        link: '/bronze-tech/products/circular-connectors/cir-m12-4p-ang',
        description: 'Circular connector for external interface',
        category: 'Circular'
      },
      {
        partNumber: 'BTB-27-80P-VT',
        link: '/bronze-tech/products/board-to-board/btb-27-80p-vt',
        description: 'Additional board-to-board for expansion',
        category: 'Board-to-Board'
      }
    );
  } else if (category === 'wire-to-board') {
    companions.push(
      {
        partNumber: 'BTB-27-80P-VT',
        link: '/bronze-tech/products/board-to-board/btb-27-80p-vt',
        description: 'Board-to-board for PCB interconnection',
        category: 'Board-to-Board'
      },
      {
        partNumber: 'CIR-M12-4P-ANG',
        link: '/bronze-tech/products/circular-connectors/cir-m12-4p-ang',
        description: 'Circular connector for field connection',
        category: 'Circular'
      },
      {
        partNumber: 'WTB-PHD-10P-IDC',
        link: '/bronze-tech/products/wire-to-board/wtb-phd-10p-idc',
        description: 'IDC connector for data signals',
        category: 'Wire-to-Board'
      }
    );
  } else if (category === 'circular-connectors') {
    companions.push(
      {
        partNumber: 'BTB-27-80P-VT',
        link: '/bronze-tech/products/board-to-board/btb-27-80p-vt',
        description: 'Board-to-board for internal PCB connection',
        category: 'Board-to-Board'
      },
      {
        partNumber: 'WTB-PH-6P-CR',
        link: '/bronze-tech/products/wire-to-board/wtb-ph-6p-cr',
        description: 'Wire-to-board for auxiliary signals',
        category: 'Wire-to-Board'
      },
      {
        partNumber: 'CIR-M8-3P-STR',
        link: '/bronze-tech/products/circular-connectors/cir-m8-3p-str',
        description: 'Smaller circular for sensor connections',
        category: 'Circular'
      }
    );
  } else if (category === 'custom-interconnect') {
    companions.push(
      {
        partNumber: 'BTB-27-80P-VT',
        link: '/bronze-tech/products/board-to-board/btb-27-80p-vt',
        description: 'Standard board-to-board for non-critical signals',
        category: 'Board-to-Board'
      },
      {
        partNumber: 'WTB-PH-6P-CR',
        link: '/bronze-tech/products/wire-to-board/wtb-ph-6p-cr',
        description: 'Standard wire-to-board for general use',
        category: 'Wire-to-Board'
      },
      {
        partNumber: 'CIR-M12-4P-ANG',
        link: '/bronze-tech/products/circular-connectors/cir-m12-4p-ang',
        description: 'Standard circular for standard interfaces',
        category: 'Circular'
      }
    );
  }
  
  return companions;
}

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📂 Processing category: ${category.name}`);
  
  category.products.forEach((product) => {
    // Check if product is newly added (last 4 products in each category)
    const productIndex = category.products.indexOf(product);
    const isNewProduct = productIndex >= 2; // Products 3-6 are new
    
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
        product.faqs = generateConnectorFAQs(product, category.slug);
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
