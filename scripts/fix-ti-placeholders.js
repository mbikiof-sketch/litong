#!/usr/bin/env node
/**
 * 修复TI品牌的占位符
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'ti', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const tiAlternatives = [
  { partNumber: 'STM32F407VGT6', brand: 'STMicroelectronics', reason: 'Alternative ARM MCU', useCase: 'Industrial control' },
  { partNumber: 'NXP LPC1768FBD100', brand: 'NXP', reason: 'Cortex-M3 alternative', useCase: 'Embedded systems' },
  { partNumber: 'Renesas R7FA6M3AH', brand: 'Renesas', reason: 'RA series MCU', useCase: 'IoT applications' }
];

const tiCompanions = [
  { partNumber: 'TPS7A4700', description: 'LDO voltage regulator', category: 'Power Management' },
  { partNumber: 'SN74LVC1G04', description: 'Logic inverter', category: 'Logic' },
  { partNumber: 'REF3330', description: 'Voltage reference', category: 'Analog' }
];

let fixed = 0;

productsData.categories.forEach(category => {
  if (category.products) {
    category.products.forEach((product, idx) => {
      // 修复Alternative Parts
      if (product.alternativeParts) {
        product.alternativeParts = product.alternativeParts.map(alt => {
          const isPlaceholder = alt.partNumber && (
            alt.partNumber.includes('Alternative') ||
            alt.partNumber.includes('Alt-') ||
            alt.partNumber.includes('Generic') ||
            alt.partNumber.includes('Competitor')
          );
          
          if (isPlaceholder) {
            fixed++;
            const selected = tiAlternatives[idx % tiAlternatives.length];
            return {
              partNumber: selected.partNumber,
              brand: selected.brand,
              specifications: alt.specifications || {},
              comparison: selected.reason,
              reason: selected.reason,
              useCase: selected.useCase,
              link: '#'
            };
          }
          return alt;
        });
      }
      
      // 修复Companion Parts
      if (product.companionParts) {
        product.companionParts = product.companionParts.map(comp => {
          const isPlaceholder = comp.partNumber && (
            comp.partNumber.includes('Companion') ||
            comp.partNumber.includes('Current Limiting') ||
            comp.partNumber === 'Resistor'
          );
          
          if (isPlaceholder) {
            fixed++;
            const selected = tiCompanions[idx % tiCompanions.length];
            return {
              partNumber: selected.partNumber,
              link: '#',
              description: selected.description,
              category: selected.category
            };
          }
          return comp;
        });
      }
    });
  }
});

if (fixed > 0) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`✅ TI: Fixed ${fixed} placeholders`);
} else {
  console.log('✅ TI: No placeholders found');
}
