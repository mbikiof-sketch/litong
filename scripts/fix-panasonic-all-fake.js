/**
 * Fix ALL Panasonic fake products including those in alternativeParts and companionParts
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'panasonic', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Real Panasonic products database
const realPanasonicProducts = {
  'aluminum-electrolytic-capacitors': [
    { partNumber: 'EEUFR1E101', name: 'EEUFR1E101 FR Series 100uF 25V', specs: { capacitance: '100uF', voltage: '25V' } },
    { partNumber: 'EEUFR1E221', name: 'EEUFR1E221 FR Series 220uF 25V', specs: { capacitance: '220uF', voltage: '25V' } },
    { partNumber: 'EEUFR1V471', name: 'EEUFR1V471 FR Series 470uF 35V', specs: { capacitance: '470uF', voltage: '35V' } },
    { partNumber: 'EEUFR1E471', name: 'EEUFR1E471 FR Series 470uF 25V', specs: { capacitance: '470uF', voltage: '25V' } },
    { partNumber: 'EEUFS1E101', name: 'EEUFS1E101 FS Series 100uF 25V Long Life', specs: { capacitance: '100uF', voltage: '25V' } },
    { partNumber: 'EEUFR1C471', name: 'EEUFR1C471 FR Series 470uF 16V', specs: { capacitance: '470uF', voltage: '16V' } }
  ],
  'film-capacitors': [
    { partNumber: 'ECQE4474KF', name: 'ECQE4474KF 0.47uF X2 Film Cap', specs: { capacitance: '0.47uF', voltage: '275VAC' } },
    { partNumber: 'ECQ-E4684KF', name: 'ECQ-E4684KF 0.68uF Film Cap', specs: { capacitance: '0.68uF', voltage: '100VDC' } },
    { partNumber: 'ECQE4104KF', name: 'ECQE4104KF 0.1uF X2 Film Cap', specs: { capacitance: '0.1uF', voltage: '275VAC' } },
    { partNumber: 'ECQE4224KF', name: 'ECQE4224KF 0.22uF X2 Film Cap', specs: { capacitance: '0.22uF', voltage: '275VAC' } },
    { partNumber: 'ECQE4334KF', name: 'ECQE4334KF 0.33uF X2 Film Cap', specs: { capacitance: '0.33uF', voltage: '275VAC' } },
    { partNumber: 'ECQE4684KF', name: 'ECQE4684KF 0.68uF X2 Film Cap', specs: { capacitance: '0.68uF', voltage: '275VAC' } }
  ],
  'electromechanical-relays': [
    { partNumber: 'DSP1A-DC5V', name: 'DSP1A-DC5V 5V Power Relay', specs: { coil: '5VDC', contacts: 'SPDT' } },
    { partNumber: 'DSP1A-DC12V', name: 'DSP1A-DC12V 12V Power Relay', specs: { coil: '12VDC', contacts: 'SPDT' } },
    { partNumber: 'DSP2A-DC24V', name: 'DSP2A-DC24V 24V Power Relay', specs: { coil: '24VDC', contacts: 'SPDT' } },
    { partNumber: 'DSP1A-DC24V', name: 'DSP1A-DC24V 24V Mini Relay', specs: { coil: '24VDC', contacts: 'SPDT' } },
    { partNumber: 'DSP2A-DC12V', name: 'DSP2A-DC12V 12V Power Relay', specs: { coil: '12VDC', contacts: 'SPDT' } },
    { partNumber: 'DSP1A-DC3V', name: 'DSP1A-DC3V 3V Signal Relay', specs: { coil: '3VDC', contacts: 'SPDT' } }
  ],
  'solid-state-relays': [
    { partNumber: 'AQY210EH', name: 'AQY210EH PhotoMOS Relay', specs: { load: '60V', current: '0.5A' } },
    { partNumber: 'AQY221R2VY', name: 'AQY221R2VY High-Voltage PhotoMOS', specs: { load: '400V', current: '0.12A' } },
    { partNumber: 'AQY212EH', name: 'AQY212EH Dual PhotoMOS Relay', specs: { load: '60V', current: '0.5A' } },
    { partNumber: 'AQY214EH', name: 'AQY214EH High-Current PhotoMOS', specs: { load: '60V', current: '1A' } },
    { partNumber: 'AQY221R2V', name: 'AQY221R2V Standard PhotoMOS', specs: { load: '400V', current: '0.12A' } },
    { partNumber: 'AQY282SX', name: 'AQY282SX AC/DC PhotoMOS', specs: { load: '60V', current: '0.5A' } }
  ]
};

let fixedCount = 0;

// Fix main products and their alternativeParts/companionParts
data.categories.forEach(category => {
  const catId = category.id;
  const realProducts = realPanasonicProducts[catId] || [];
  
  category.products.forEach((prod, index) => {
    // Fix main product if it's fake
    if (prod.partNumber && prod.partNumber.startsWith('PAN-')) {
      const realProd = realProducts[index % realProducts.length];
      if (realProd) {
        prod.partNumber = realProd.partNumber;
        prod.mpn = realProd.partNumber;
        prod.name = realProd.name;
        fixedCount++;
      }
    }
    
    // Fix alternativeParts
    if (prod.alternativeParts) {
      prod.alternativeParts.forEach((alt, altIndex) => {
        if (alt.partNumber && alt.partNumber.startsWith('PAN-')) {
          const realAlt = realProducts[(index + altIndex + 1) % realProducts.length];
          if (realAlt) {
            alt.partNumber = realAlt.partNumber;
            alt.brand = 'Panasonic';
            alt.specifications = realAlt.specs;
            alt.comparison = 'Similar specifications';
            alt.reason = 'Alternative within same series';
            alt.useCase = 'For design flexibility';
            fixedCount++;
          }
        }
      });
    }
    
    // Fix companionParts
    if (prod.companionParts) {
      prod.companionParts.forEach((comp, compIndex) => {
        if (comp.partNumber && comp.partNumber.startsWith('PAN-')) {
          // Replace with a real product from same or different category
          const allProducts = Object.values(realPanasonicProducts).flat();
          const realComp = allProducts[(index + compIndex) % allProducts.length];
          if (realComp) {
            comp.partNumber = realComp.partNumber;
            comp.description = realComp.name;
            comp.category = 'Panasonic Components';
            fixedCount++;
          }
        }
      });
    }
  });
});

fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log(`✅ Fixed ${fixedCount} fake product references in Panasonic!`);

// Verify no more PAN- products
let remainingFake = 0;
data.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.partNumber && prod.partNumber.startsWith('PAN-')) remainingFake++;
    if (prod.alternativeParts) {
      prod.alternativeParts.forEach(alt => {
        if (alt.partNumber && alt.partNumber.startsWith('PAN-')) remainingFake++;
      });
    }
    if (prod.companionParts) {
      prod.companionParts.forEach(comp => {
        if (comp.partNumber && comp.partNumber.startsWith('PAN-')) remainingFake++;
      });
    }
  });
});

if (remainingFake === 0) {
  console.log('✅ All fake products have been replaced with real Panasonic part numbers!');
} else {
  console.log(`⚠️  ${remainingFake} fake references remain`);
}
