const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'chemi-con', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing Chemi-Con issues...\n');

// Fix alternativeParts for products with insufficient quantity
const productsNeedingAlternativeParts = [
  { partNumber: 'KZE-2200uF-16V', category: 'Radial Lead Capacitors' },
  { partNumber: 'KY-100uF-100V', category: 'Radial Lead Capacitors' },
  { partNumber: 'LNC-47000uF-63V', category: 'Screw Terminal Capacitors' },
  { partNumber: 'LNC-22000uF-150V', category: 'Screw Terminal Capacitors' },
  { partNumber: 'AEC-KMQ-330uF-63V', category: 'Automotive Capacitors' },
  { partNumber: 'AEC-KY-150uF-100V', category: 'Automotive Capacitors' }
];

let fixedAlternativeParts = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    const needsFix = productsNeedingAlternativeParts.find(p => p.partNumber === product.partNumber);
    if (needsFix && (!product.alternativeParts || product.alternativeParts.length < 2)) {
      if (!product.alternativeParts) product.alternativeParts = [];
      
      // Add second alternative part based on product type
      if (product.partNumber === 'KZE-2200uF-16V') {
        product.alternativeParts.push({
          partNumber: "KZE-3300uF-16V",
          brand: "Chemi-Con",
          specifications: {
            capacitance: "3300uF",
            voltage: "16V"
          },
          comparison: "KZE-2200uF-16V=><KZE-3300uF-16V: Higher capacitance same voltage, suitable for applications requiring more filtering",
          reason: "Higher capacitance for better filtering performance",
          useCase: "Applications requiring lower ripple voltage",
          link: "/chemi-con/products/radial-lead-capacitors/kze-3300uf-16v.html"
        });
      } else if (product.partNumber === 'KY-100uF-100V') {
        product.alternativeParts.push({
          partNumber: "KY-150uF-100V",
          brand: "Chemi-Con",
          specifications: {
            capacitance: "150uF",
            voltage: "100V"
          },
          comparison: "KY-100uF-100V=><KY-150uF-100V: Higher capacitance same voltage, suitable for high-voltage applications",
          reason: "More capacitance for high-voltage filtering",
          useCase: "High-voltage power supply applications",
          link: "/chemi-con/products/radial-lead-capacitors/ky-150uf-100v.html"
        });
      } else if (product.partNumber === 'LNC-47000uF-63V') {
        product.alternativeParts.push({
          partNumber: "LNC-68000uF-63V",
          brand: "Chemi-Con",
          specifications: {
            capacitance: "68000uF",
            voltage: "63V"
          },
          comparison: "LNC-47000uF-63V=><LNC-68000uF-63V: Higher capacitance same voltage, suitable for high-current applications",
          reason: "More capacitance for energy storage",
          useCase: "High-power industrial applications",
          link: "/chemi-con/products/screw-terminal-capacitors/lnc-68000uf-63v.html"
        });
      } else if (product.partNumber === 'LNC-22000uF-150V') {
        product.alternativeParts.push({
          partNumber: "LNC-33000uF-150V",
          brand: "Chemi-Con",
          specifications: {
            capacitance: "33000uF",
            voltage: "150V"
          },
          comparison: "LNC-22000uF-150V=><LNC-33000uF-150V: Higher capacitance same voltage, suitable for high-voltage high-power applications",
          reason: "More capacitance for high-voltage systems",
          useCase: "High-voltage motor drives and inverters",
          link: "/chemi-con/products/screw-terminal-capacitors/lnc-33000uf-150v.html"
        });
      } else if (product.partNumber === 'AEC-KMQ-330uF-63V') {
        product.alternativeParts.push({
          partNumber: "AEC-KMQ-470uF-63V",
          brand: "Chemi-Con",
          specifications: {
            capacitance: "470uF",
            voltage: "63V"
          },
          comparison: "AEC-KMQ-330uF-63V=><AEC-KMQ-470uF-63V: Higher capacitance same voltage, AEC-Q200 qualified",
          reason: "More capacitance for automotive applications",
          useCase: "48V mild hybrid systems",
          link: "/chemi-con/products/automotive-capacitors/aec-kmq-470uf-63v.html"
        });
      } else if (product.partNumber === 'AEC-KY-150uF-100V') {
        product.alternativeParts.push({
          partNumber: "AEC-KY-220uF-100V",
          brand: "Chemi-Con",
          specifications: {
            capacitance: "220uF",
            voltage: "100V"
          },
          comparison: "AEC-KY-150uF-100V=><AEC-KY-220uF-100V: Higher capacitance same voltage, AEC-Q200 qualified",
          reason: "More capacitance for automotive high-voltage applications",
          useCase: "Automotive LED headlight drivers",
          link: "/chemi-con/products/automotive-capacitors/aec-ky-220uf-100v.html"
        });
      }
      
      fixedAlternativeParts++;
      console.log(`✓ Fixed alternativeParts for ${product.partNumber}`);
    }
  });
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Fixed alternativeParts for ${fixedAlternativeParts} products.`);
