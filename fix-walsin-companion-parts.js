#!/usr/bin/env node
/**
 * Walsin Brand Data Companion Parts Fix
 * Adds real companion parts data for all products
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'walsin');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Updated: ${filename}`);
}

// ==================== COMPANION PARTS DATA ====================
const companionPartsData = {
  // MLCC Products
  '0402B104K160CT': [
    {
      partNumber: "0402B103K160CT",
      link: "/walsin/products/mlcc/0402b103k160ct.html",
      description: "10nF decoupling capacitor for multi-stage filtering",
      category: "MLCC"
    },
    {
      partNumber: "WR04X1002FTL",
      link: "/walsin/products/resistors/wr04x1002ftl.html",
      description: "10kΩ precision resistor for RC timing circuits",
      category: "Resistor"
    },
    {
      partNumber: "WIP252012P-1R0ML",
      link: "/walsin/products/inductors/wip252012p-1r0ml.html",
      description: "1µH inductor for LC filter applications",
      category: "Inductor"
    }
  ],
  '0805B104K500AT': [
    {
      partNumber: "0805B103K500AT",
      link: "/walsin/products/mlcc/0805b103k500at.html",
      description: "10nF capacitor for high-frequency decoupling",
      category: "MLCC"
    },
    {
      partNumber: "WR08X1002FTL",
      link: "/walsin/products/resistors/wr08x1002ftl.html",
      description: "10kΩ resistor for pull-up/pull-down applications",
      category: "Resistor"
    },
    {
      partNumber: "WIP252012P-2R2ML",
      link: "/walsin/products/inductors/wip252012p-2r2ml.html",
      description: "2.2µH inductor for power supply filtering",
      category: "Inductor"
    }
  ],
  '0603B104K500CT': [
    {
      partNumber: "0603B103K500CT",
      link: "/walsin/products/mlcc/0603b103k500ct.html",
      description: "10nF capacitor for broadband decoupling",
      category: "MLCC"
    },
    {
      partNumber: "WR06X1002FTL",
      link: "/walsin/products/resistors/wr06x1002ftl.html",
      description: "10kΩ precision resistor for signal conditioning",
      category: "Resistor"
    },
    {
      partNumber: "TAJA106K016RNJ",
      link: "/walsin/products/tantalum/taja106k016rnj.html",
      description: "10µF tantalum for bulk decoupling",
      category: "Tantalum"
    }
  ],
  '1206B475K160CT': [
    {
      partNumber: "1206B474K160CT",
      link: "/walsin/products/mlcc/1206b474k160ct.html",
      description: "470nF capacitor for input filtering",
      category: "MLCC"
    },
    {
      partNumber: "WR12X1002FTL",
      link: "/walsin/products/resistors/wr12x1002ftl.html",
      description: "10kΩ resistor for current limiting",
      category: "Resistor"
    },
    {
      partNumber: "TAJB226K016RNJ",
      link: "/walsin/products/tantalum/tajb226k016rnj.html",
      description: "22µF tantalum for output smoothing",
      category: "Tantalum"
    }
  ],
  '0805B105K250AT': [
    {
      partNumber: "0805B104K250AT",
      link: "/walsin/products/mlcc/0805b104k250at.html",
      description: "100nF capacitor for high-frequency bypass",
      category: "MLCC"
    },
    {
      partNumber: "WR08X1002FTL",
      link: "/walsin/products/resistors/wr08x1002ftl.html",
      description: "10kΩ resistor for feedback networks",
      category: "Resistor"
    },
    {
      partNumber: "WIP252012P-1R0ML",
      link: "/walsin/products/inductors/wip252012p-1r0ml.html",
      description: "1µH inductor for DC-DC converter",
      category: "Inductor"
    }
  ],
  '1210B226K160CT': [
    {
      partNumber: "1210B106K160CT",
      link: "/walsin/products/mlcc/1210b106k160ct.html",
      description: "10µF capacitor for parallel combination",
      category: "MLCC"
    },
    {
      partNumber: "WR12X1002FTL",
      link: "/walsin/products/resistors/wr12x1002ftl.html",
      description: "10kΩ resistor for discharge circuit",
      category: "Resistor"
    },
    {
      partNumber: "TAJB226K016RNJ",
      link: "/walsin/products/tantalum/tajb226k016rnj.html",
      description: "22µF tantalum alternative for backup",
      category: "Tantalum"
    }
  ],
  // Chip Resistors
  'WR04X1002FTL': [
    {
      partNumber: "WR04X1001FTL",
      link: "/walsin/products/resistors/wr04x1001ftl.html",
      description: "1kΩ resistor for voltage divider",
      category: "Resistor"
    },
    {
      partNumber: "0402B104K160CT",
      link: "/walsin/products/mlcc/0402b104k160ct.html",
      description: "100nF capacitor for RC filter",
      category: "MLCC"
    },
    {
      partNumber: "WIP201610P-1R0ML",
      link: "/walsin/products/inductors/wip201610p-1r0ml.html",
      description: "1µH inductor for RF choke",
      category: "Inductor"
    }
  ],
  'WR06X103JTL': [
    {
      partNumber: "WR06X102JTL",
      link: "/walsin/products/resistors/wr06x102jtl.html",
      description: "1kΩ resistor for pull-up circuit",
      category: "Resistor"
    },
    {
      partNumber: "0603B104K500CT",
      link: "/walsin/products/mlcc/0603b104k500ct.html",
      description: "100nF capacitor for decoupling",
      category: "MLCC"
    },
    {
      partNumber: "TAJA106K016RNJ",
      link: "/walsin/products/tantalum/taja106k016rnj.html",
      description: "10µF capacitor for power filtering",
      category: "Tantalum"
    }
  ],
  'WR08X1002FTL': [
    {
      partNumber: "WR08X1001FTL",
      link: "/walsin/products/resistors/wr08x1001ftl.html",
      description: "1kΩ resistor for current sensing",
      category: "Resistor"
    },
    {
      partNumber: "0805B104K500AT",
      link: "/walsin/products/mlcc/0805b104k500at.html",
      description: "100nF capacitor for noise filtering",
      category: "MLCC"
    },
    {
      partNumber: "WIP252012P-2R2ML",
      link: "/walsin/products/inductors/wip252012p-2r2ml.html",
      description: "2.2µH inductor for EMI filter",
      category: "Inductor"
    }
  ],
  'WR12X1002FTL': [
    {
      partNumber: "WR12X1001FTL",
      link: "/walsin/products/resistors/wr12x1001ftl.html",
      description: "1kΩ resistor for power divider",
      category: "Resistor"
    },
    {
      partNumber: "1206B475K160CT",
      link: "/walsin/products/mlcc/1206b475k160ct.html",
      description: "4.7µF capacitor for bulk filtering",
      category: "MLCC"
    },
    {
      partNumber: "TAJB226K016RNJ",
      link: "/walsin/products/tantalum/tajb226k016rnj.html",
      description: "22µF tantalum for hold-up circuit",
      category: "Tantalum"
    }
  ],
  'WR06X1002FTL': [
    {
      partNumber: "WR06X1001FTL",
      link: "/walsin/products/resistors/wr06x1001ftl.html",
      description: "1kΩ resistor for bias network",
      category: "Resistor"
    },
    {
      partNumber: "0603B104K500CT",
      link: "/walsin/products/mlcc/0603b104k500ct.html",
      description: "100nF capacitor for bypass",
      category: "MLCC"
    },
    {
      partNumber: "WIP252012P-1R0ML",
      link: "/walsin/products/inductors/wip252012p-1r0ml.html",
      description: "1µH inductor for filter",
      category: "Inductor"
    }
  ],
  'WR06X472JTL': [
    {
      partNumber: "WR06X471JTL",
      link: "/walsin/products/resistors/wr06x471jtl.html",
      description: "470Ω resistor for LED current limiting",
      category: "Resistor"
    },
    {
      partNumber: "0603B104K500CT",
      link: "/walsin/products/mlcc/0603b104k500ct.html",
      description: "100nF capacitor for coupling",
      category: "MLCC"
    },
    {
      partNumber: "TAJA106K016RNJ",
      link: "/walsin/products/tantalum/taja106k016rnj.html",
      description: "10µF capacitor for decoupling",
      category: "Tantalum"
    }
  ],
  // Tantalum Capacitors
  'TAJA106K016RNJ': [
    {
      partNumber: "TAJA226K016RNJ",
      link: "/walsin/products/tantalum/taja226k016rnj.html",
      description: "22µF tantalum for higher capacitance",
      category: "Tantalum"
    },
    {
      partNumber: "WR06X1002FTL",
      link: "/walsin/products/resistors/wr06x1002ftl.html",
      description: "10kΩ resistor for discharge",
      category: "Resistor"
    },
    {
      partNumber: "0603B104K500CT",
      link: "/walsin/products/mlcc/0603b104k500ct.html",
      description: "100nF MLCC for high-frequency bypass",
      category: "MLCC"
    }
  ],
  'TAJB226K016RNJ': [
    {
      partNumber: "TAJB476K016RNJ",
      link: "/walsin/products/tantalum/tajb476k016rnj.html",
      description: "47µF tantalum for bulk storage",
      category: "Tantalum"
    },
    {
      partNumber: "WR08X1002FTL",
      link: "/walsin/products/resistors/wr08x1002ftl.html",
      description: "10kΩ resistor for bleed",
      category: "Resistor"
    },
    {
      partNumber: "0805B104K500AT",
      link: "/walsin/products/mlcc/0805b104k500at.html",
      description: "100nF MLCC for ripple filtering",
      category: "MLCC"
    }
  ],
  // Inductors
  'WIP252012P-1R0ML': [
    {
      partNumber: "WIP252012P-2R2ML",
      link: "/walsin/products/inductors/wip252012p-2r2ml.html",
      description: "2.2µH inductor for higher inductance",
      category: "Inductor"
    },
    {
      partNumber: "0805B105K250AT",
      link: "/walsin/products/mlcc/0805b105k250at.html",
      description: "1µF capacitor for LC filter",
      category: "MLCC"
    },
    {
      partNumber: "WR08X1002FTL",
      link: "/walsin/products/resistors/wr08x1002ftl.html",
      description: "10kΩ resistor for damping",
      category: "Resistor"
    }
  ],
  'WIP252012P-2R2ML': [
    {
      partNumber: "WIP252012P-1R0ML",
      link: "/walsin/products/inductors/wip252012p-1r0ml.html",
      description: "1µH inductor for lower inductance",
      category: "Inductor"
    },
    {
      partNumber: "1210B226K160CT",
      link: "/walsin/products/mlcc/1210b226k160ct.html",
      description: "22µF capacitor for output filter",
      category: "MLCC"
    },
    {
      partNumber: "WR08X1002FTL",
      link: "/walsin/products/resistors/wr08x1002ftl.html",
      description: "10kΩ resistor for snubber",
      category: "Resistor"
    }
  ]
};

// ==================== MAIN FIX FUNCTION ====================
function fixCompanionParts() {
  console.log('========================================');
  console.log('Walsin Brand Data Companion Parts Fix');
  console.log('========================================\n');

  // Fix products.json
  console.log('Fixing products.json...');
  const productsData = readJSON('products.json');
  let fixedCount = 0;

  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      const partNumber = product.partNumber;
      
      if (companionPartsData[partNumber]) {
        product.companionParts = companionPartsData[partNumber];
        fixedCount++;
        console.log(`  Fixed companionParts for ${partNumber}`);
      }
    });
  });

  writeJSON('products.json', productsData);
  console.log(`\n  Total fixed: ${fixedCount} products\n`);

  console.log('========================================');
  console.log('Companion parts fix completed successfully!');
  console.log('========================================');
  console.log('\nNext steps:');
  console.log('1. Run: node scripts/brand-master-checklist.js walsin --strict');
  console.log('2. Generate website: npm run generate:brand walsin');
}

// Run the fix
fixCompanionParts();
