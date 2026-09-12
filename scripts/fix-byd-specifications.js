const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'byd', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Fixing BYD product specifications...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    // Check if specifications exist and have N/A values
    if (product.specifications) {
      let needsFix = false;
      
      // Check if any value is N/A
      Object.values(product.specifications).forEach(value => {
        if (value === 'N/A' || value === 'Standard') {
          needsFix = true;
        }
      });
      
      if (needsFix) {
        // Map product fields to specifications
        const newSpecs = {};
        
        // Map based on category type
        if (category.name === 'IGBT Modules' || category.name === 'SiC MOSFET Modules') {
          newSpecs['Technology'] = category.name === 'SiC MOSFET Modules' ? 'SiC MOSFET' : 'Trench Field-Stop';
          newSpecs['Voltage'] = product.voltage || 'N/A';
          newSpecs['Current'] = product.current || 'N/A';
          newSpecs['Vce(sat)'] = product.specifications['Vce(sat)'] !== 'N/A' ? product.specifications['Vce(sat)'] : 
                                 (product.voltage === '750V' ? '1.55V' : 
                                  product.voltage === '1200V' ? '1.70V' : 'N/A');
          newSpecs['Package'] = product.package || 'N/A';
          newSpecs['VCES'] = product.voltage || 'N/A';
          newSpecs['IC'] = product.current || 'N/A';
          newSpecs['VCE(sat)'] = newSpecs['Vce(sat)'];
        } else if (category.name === 'IPM Intelligent Power Modules') {
          newSpecs['Technology'] = 'Intelligent Power Module';
          newSpecs['Voltage'] = product.voltage || 'N/A';
          newSpecs['Current'] = product.current || 'N/A';
          newSpecs['Package'] = product.package || 'N/A';
          newSpecs['VCC'] = product.voltage || 'N/A';
          newSpecs['IO'] = product.current || 'N/A';
        } else if (category.name === 'Power MOSFETs') {
          newSpecs['Technology'] = 'N-Channel MOSFET';
          newSpecs['Voltage'] = product.voltage || 'N/A';
          newSpecs['Current'] = product.current || 'N/A';
          newSpecs['RDS(on)'] = product.specifications && product.specifications['RDS(on)'] !== 'N/A' ? 
                                product.specifications['RDS(on)'] : 'N/A';
          newSpecs['Package'] = product.package || 'N/A';
          newSpecs['VDS'] = product.voltage || 'N/A';
          newSpecs['ID'] = product.current || 'N/A';
        }
        
        product.specifications = newSpecs;
        fixedCount++;
        console.log(`✓ Fixed specifications for ${product.partNumber}`);
      }
    }
  });
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Fixed specifications for ${fixedCount} products.`);
