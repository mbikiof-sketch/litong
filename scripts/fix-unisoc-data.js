#!/usr/bin/env node

/**
 * UNISOC Brand Data Fix Script
 * Fixes coreProducts to use valid product categories
 */

const fs = require('fs');
const path = require('path');

const BRAND = 'unisoc';
const DATA_DIR = path.join(__dirname, '..', 'data', BRAND);

console.log(`🔧 Fixing ${BRAND} brand data...\n`);

// Read brand.json
const brandPath = path.join(DATA_DIR, 'brand.json');
const brand = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

console.log('Current coreProducts:', brand.coreProducts);

// Fix coreProducts - use valid categories based on actual pages
brand.coreProducts = [
  "FPGA",
  "Industrial Communication",
  "Motor Control",
  "IoT Solutions"
];

console.log('Updated coreProducts:', brand.coreProducts);

// Save brand.json
fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2), 'utf8');
console.log('\n✅ brand.json updated successfully!');

console.log('\n🎉 All fixes completed!');
