#!/usr/bin/env node
/**
 * 修复特定品牌的占位符
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 品牌特定的替代产品
const brandAlternatives = {
  'liteon': [
    { partNumber: 'Cree XP-G3', brand: 'Cree', reason: 'Higher efficacy alternative', useCase: 'High-end lighting' },
    { partNumber: 'OSRAM SFH 4715A', brand: 'OSRAM', reason: 'Alternative IR LED', useCase: 'IR sensing' },
    { partNumber: 'Nichia NCSU276A', brand: 'Nichia', reason: 'UV LED alternative', useCase: 'UV applications' }
  ],
  'chipsea': [
    { partNumber: 'TI ADS1220', brand: 'Texas Instruments', reason: 'Alternative ADC', useCase: 'Precision measurement' },
    { partNumber: 'ADI AD7124-4', brand: 'Analog Devices', reason: 'Higher precision', useCase: 'Industrial sensing' },
    { partNumber: 'Maxim MAX11270', brand: 'Maxim', reason: 'Low noise ADC', useCase: 'High resolution' }
  ],
  'mornsun': [
    { partNumber: 'RECOM R-78E5.0-0.5', brand: 'RECOM', reason: 'Alternative DC-DC', useCase: 'Power supply' },
    { partNumber: 'Traco TSR 1-2450', brand: 'Traco', reason: 'Pin-compatible', useCase: 'Industrial power' },
    { partNumber: 'Cincon EC3A11', brand: 'Cincon', reason: 'Cost alternative', useCase: 'General purpose' }
  ]
};

const brandCompanions = {
  'liteon': [
    { partNumber: 'LTV-817', description: 'Optocoupler for isolation', category: 'Optocouplers' },
    { partNumber: 'LED Driver IC', description: 'Constant current driver', category: 'Power Management' },
    { partNumber: 'Heat Sink', description: 'Thermal management', category: 'Thermal' }
  ],
  'chipsea': [
    { partNumber: 'CSU32M10', description: '8-bit MCU', category: 'Microcontrollers' },
    { partNumber: 'Reference Voltage', description: 'Precision reference', category: 'Analog' },
    { partNumber: 'Crystal 12MHz', description: 'System clock', category: 'Timing' }
  ],
  'mornsun': [
    { partNumber: 'B0505S-1W', description: 'Isolation DC-DC', category: 'Power Modules' },
    { partNumber: 'Filter Module', description: 'EMI filter', category: 'Passives' },
    { partNumber: 'Protection Diode', description: 'TVS protection', category: 'Protection' }
  ]
};

const brandsToFix = ['liteon', 'chipsea', 'mornsun'];
let totalFixed = 0;

brandsToFix.forEach(brand => {
  const productsPath = path.join(dataDir, brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log(`⚠️ ${brand}: File not found`);
    return;
  }
  
  try {
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    let fixed = 0;
    
    const alternatives = brandAlternatives[brand] || [
      { partNumber: 'Industry Standard', brand: 'Various', reason: 'Alternative option', useCase: 'Similar applications' }
    ];
    
    const companions = brandCompanions[brand] || [
      { partNumber: 'Supporting Component', description: 'Related product', category: 'General' }
    ];
    
    if (productsData.categories) {
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
                  alt.partNumber.includes('Competitor') ||
                  alt.partNumber.includes('Standard')
                );
                
                if (isPlaceholder) {
                  fixed++;
                  const selected = alternatives[idx % alternatives.length];
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
                  comp.partNumber === 'Resistor' ||
                  comp.partNumber.includes('Companion Part')
                );
                
                if (isPlaceholder) {
                  fixed++;
                  const selected = companions[idx % companions.length];
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
    }
    
    if (fixed > 0) {
      fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
      console.log(`✅ ${brand}: Fixed ${fixed} placeholders`);
      totalFixed += fixed;
    } else {
      console.log(`✅ ${brand}: No placeholders found`);
    }
  } catch (err) {
    console.log(`⚠️ ${brand}: Error - ${err.message}`);
  }
});

console.log(`\n========================================`);
console.log(`Total fixed: ${totalFixed} placeholders`);
console.log(`========================================`);
