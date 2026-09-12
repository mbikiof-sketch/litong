/**
 * Fix missing fields in newly added biwin products
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'biwin', 'products.json');

console.log('Reading products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixCount = 0;

// Helper function to generate FAQs for storage products
function generateStorageFAQs(product, category) {
  const faqs = [];
  
  const commonFAQs = [
    {
      question: `What is the warranty period for ${product.partNumber}?`,
      answer: `${product.partNumber} comes with a ${product.specifications.Warranty || '3-5 year'} warranty covering manufacturing defects and premature wear under normal operating conditions.`,
      decisionGuide: 'For long-term projects, verify warranty terms. Extended warranty options may be available for industrial products.',
      keywords: ['warranty', 'guarantee', 'support', 'service']
    },
    {
      question: `What is the expected lifespan of ${product.partNumber}?`,
      answer: `${product.partNumber} has a MTBF (Mean Time Between Failures) of ${product.specifications.MTBF || '1.5 million hours'} and a TBW (Total Bytes Written) rating of ${product.specifications.TBW || 'varies by capacity'}, ensuring long-term reliability.`,
      decisionGuide: 'For write-intensive applications, verify TBW rating matches your usage pattern. For read-heavy applications, MTBF is the primary concern.',
      keywords: ['lifespan', 'MTBF', 'TBW', 'endurance', 'reliability']
    },
    {
      question: `Is ${product.partNumber} compatible with my system?`,
      answer: `${product.partNumber} features a ${product.specifications['Form Factor'] || 'standard'} form factor and ${product.specifications.Interface || 'standard'} interface. Please verify your system supports these specifications before purchase.`,
      decisionGuide: 'Check your system manual for compatible interfaces and form factors. Contact our FAE team for compatibility verification.',
      keywords: ['compatibility', 'interface', 'form factor', 'system requirements']
    },
    {
      question: `What is the operating temperature range of ${product.partNumber}?`,
      answer: `${product.partNumber} operates within a temperature range of ${product.specifications['Operating Temperature'] || '0°C to 70°C (standard) or -40°C to 85°C (industrial)'}.`,
      decisionGuide: 'For industrial or outdoor applications, choose industrial temperature range variants. Standard range is sufficient for consumer applications.',
      keywords: ['temperature', 'operating range', 'industrial grade', 'thermal']
    },
    {
      question: `Does ${product.partNumber} support encryption?`,
      answer: `${product.partNumber} ${product.specifications['Hardware Encryption'] ? 'supports hardware-based AES-256 encryption' : 'does not include hardware encryption. Software-based encryption solutions can be used if required'}.`,
      decisionGuide: 'For sensitive data, consider models with hardware encryption. Software encryption is suitable for less critical applications.',
      keywords: ['encryption', 'security', 'AES', 'data protection']
    },
    {
      question: `What is the difference between consumer and industrial grade ${product.name}?`,
      answer: `Industrial grade variants feature extended temperature ranges (-40°C to 85°C), higher TBW ratings, power loss protection, and enhanced reliability testing compared to consumer grade products.`,
      decisionGuide: 'Choose industrial grade for mission-critical, harsh environment, or 24/7 operation applications. Consumer grade is suitable for standard computing.',
      keywords: ['consumer vs industrial', 'grade selection', 'reliability', 'temperature']
    }
  ];
  
  // Return 5-6 FAQs
  return commonFAQs.slice(0, Math.min(6, commonFAQs.length));
}

// Helper function to generate alternative parts
function generateAlternativeParts(product, category) {
  const alternatives = [];
  
  if (category === 'consumer-ssds') {
    alternatives.push(
      {
        partNumber: 'Samsung 980 PRO 2TB',
        link: '/samsung/products/980-pro-2tb',
        reason: 'High-performance NVMe SSD with similar specifications',
        brand: 'Samsung',
        comparison: 'Samsung 980 PRO: PCIe 4.0, up to 7000MB/s read => Higher performance but more expensive than ' + product.partNumber
      },
      {
        partNumber: 'WD Blue SN570 2TB',
        link: '/wd/products/sn570-2tb',
        reason: 'Reliable NVMe SSD for mainstream applications',
        brand: 'Western Digital',
        comparison: 'WD SN570: PCIe 3.0, up to 3500MB/s read => Similar performance tier, competitive pricing'
      }
    );
  } else if (category === 'industrial-ssds') {
    alternatives.push(
      {
        partNumber: 'Transcend SSD510K 1TB',
        link: '/transcend/products/ssd510k-1tb',
        reason: 'Industrial-grade SATA SSD with wide temperature range',
        brand: 'Transcend',
        comparison: 'Transcend SSD510K: -40°C to 85°C, SATA III => Comparable industrial features, established brand'
      },
      {
        partNumber: 'Innodisk 3IE4 1TB',
        link: '/innodisk/products/3ie4-1tb',
        reason: 'Industrial NVMe SSD with power loss protection',
        brand: 'Innodisk',
        comparison: 'Innodisk 3IE4: PCIe 3.0, industrial grade => Similar industrial features, competitive pricing'
      }
    );
  } else if (category === 'memory-modules') {
    alternatives.push(
      {
        partNumber: 'Crucial CT32G4SFD832A',
        link: '/crucial/products/ct32g4sfd832a',
        reason: 'High-capacity DDR4 SO-DIMM module',
        brand: 'Crucial',
        comparison: 'Crucial 32GB DDR4: 3200MT/s, CL22 => Similar specifications, widely available'
      },
      {
        partNumber: 'Corsair CMK32GX4M2E3200C16',
        link: '/corsair/products/cmk32gx4m2e3200c16',
        reason: 'High-performance DDR4 memory kit',
        brand: 'Corsair',
        comparison: 'Corsair 32GB DDR4: 3200MT/s, XMP support => Gaming-oriented with XMP profiles'
      }
    );
  } else if (category === 'embedded-storage') {
    alternatives.push(
      {
        partNumber: 'SanDisk SDINBDG4-128G',
        link: '/sandisk/products/sdinbdg4-128g',
        reason: 'Automotive-grade eMMC with AEC-Q100 qualification',
        brand: 'SanDisk',
        comparison: 'SanDisk eMMC: AEC-Q100 Grade 3, HS400 => Comparable automotive qualification'
      },
      {
        partNumber: 'Samsung KLUDG4U1EA-B0C1',
        link: '/samsung/products/kludg4u1ea-b0c1',
        reason: 'High-performance automotive UFS storage',
        brand: 'Samsung',
        comparison: 'Samsung UFS: 128GB, UFS 2.1 => Similar performance, premium brand'
      }
    );
  }
  
  return alternatives;
}

// Helper function to generate companion parts
function generateCompanionParts(product, category) {
  const companions = [];
  
  if (category === 'consumer-ssds') {
    companions.push(
      {
        partNumber: 'HP300-2TB',
        link: '/biwin/products/consumer-ssds/hp300-2tb',
        description: '2TB variant of the same NVMe SSD series',
        category: 'Consumer SSD'
      },
      {
        partNumber: 'AP200-1TB',
        link: '/biwin/products/consumer-ssds/ap200-1tb',
        description: 'SATA SSD for secondary storage',
        category: 'Consumer SSD'
      },
      {
        partNumber: 'BD4D16G32',
        link: '/biwin/products/memory-modules/bd4d16g32',
        description: 'DDR4 memory for complete system upgrade',
        category: 'Memory Module'
      }
    );
  } else if (category === 'industrial-ssds') {
    companions.push(
      {
        partNumber: 'IX200-512GB',
        link: '/biwin/products/industrial-ssds/ix200-512gb',
        description: 'Industrial SATA SSD for backup storage',
        category: 'Industrial SSD'
      },
      {
        partNumber: 'IX-NVMe-512GB',
        link: '/biwin/products/industrial-ssds/ix-nvme-512gb',
        description: 'Lower capacity NVMe variant',
        category: 'Industrial SSD'
      },
      {
        partNumber: 'BWEMMC64G',
        link: '/biwin/products/embedded-storage/bwemmc64g',
        description: 'eMMC for embedded applications',
        category: 'Embedded Storage'
      }
    );
  } else if (category === 'memory-modules') {
    companions.push(
      {
        partNumber: 'BD4D16G32',
        link: '/biwin/products/memory-modules/bd4d16g32',
        description: '16GB variant for mixed capacity setups',
        category: 'Memory Module'
      },
      {
        partNumber: 'DDR4-3200-16GB',
        link: '/biwin/products/memory-modules/ddr4-3200-16gb',
        description: 'Desktop memory for complete system',
        category: 'Memory Module'
      },
      {
        partNumber: 'HP300-1TB',
        link: '/biwin/products/consumer-ssds/hp300-1tb',
        description: 'NVMe SSD for storage upgrade',
        category: 'Consumer SSD'
      }
    );
  } else if (category === 'embedded-storage') {
    companions.push(
      {
        partNumber: 'BWEMMC64G',
        link: '/biwin/products/embedded-storage/bwemmc64g',
        description: 'Lower capacity eMMC option',
        category: 'Embedded Storage'
      },
      {
        partNumber: 'BWUFS128G',
        link: '/biwin/products/embedded-storage/bwufs128g',
        description: 'UFS storage for high-performance needs',
        category: 'Embedded Storage'
      },
      {
        partNumber: 'IX200-256GB',
        link: '/biwin/products/industrial-ssds/ix200-256gb',
        description: 'Industrial SSD for external storage',
        category: 'Industrial SSD'
      }
    );
  }
  
  return companions;
}

// Process each category
productsData.categories.forEach((category) => {
  console.log(`\n📂 Processing category: ${category.name}`);
  
  category.products.forEach((product) => {
    // Check if product is newly added (last 2 products in each category)
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
        product.faqs = generateStorageFAQs(product, category.slug);
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
