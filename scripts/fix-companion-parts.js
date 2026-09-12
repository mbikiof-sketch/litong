#!/usr/bin/env node
/**
 * Fix companionParts for remaining products
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'novosense');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

console.log('\n=== Fixing Companion Parts ===\n');

const productsData = readJSON('products.json');

// Fix NSi81C85 companionParts
productsData.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.partNumber === 'NSi81C85') {
      console.log('Fixing NSi81C85 companionParts...');
      prod.companionParts = [
        { partNumber: "NSi8220", relationship: "Additional signal isolation" },
        { partNumber: "NSC6264", relationship: "Analog signal conditioning" },
        { partNumber: "NSi1050", relationship: "RS-485 communication interface" }
      ];
      console.log('  ✓ Fixed NSi81C85');
    }
    
    if (prod.partNumber === 'NSC6244') {
      console.log('Fixing NSC6244 companionParts...');
      prod.companionParts = [
        { partNumber: "NSi8220", relationship: "Signal isolation" },
        { partNumber: "NSC2860", relationship: "Current sensing" },
        { partNumber: "NSi1050", relationship: "Communication interface" }
      ];
      console.log('  ✓ Fixed NSC6244');
    }
    
    if (prod.partNumber === 'NSC2870') {
      console.log('Fixing NSC2870 companionParts...');
      prod.companionParts = [
        { partNumber: "NSi8220", relationship: "Isolation for sensed signal" },
        { partNumber: "NSi6230", relationship: "Gate driver for power control" },
        { partNumber: "NSi1050", relationship: "Communication interface" }
      ];
      console.log('  ✓ Fixed NSC2870');
    }
  });
});

writeJSON('products.json', productsData);

console.log('\n=== Companion Parts Fixed ===');
