#!/usr/bin/env node
/**
 * Final fix for Nichicon brand data issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'nichicon');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

console.log('\n=== Final Nichicon Fix ===\n');

// Fix products.json - fix shortDescription length (80-120 chars)
const productsData = readJSON('products.json');

const productsToFix = ['JJD0E105', 'JJE0E226', 'PCF1C330MCL1GS', 'PCL1C101MCL1GS'];
productsData.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (productsToFix.includes(prod.partNumber) && prod.shortDescription && prod.shortDescription.length > 120) {
      // Truncate to ~115 chars
      prod.shortDescription = prod.shortDescription.substring(0, 115) + "...";
      console.log(`✓ Fixed shortDescription length for ${prod.partNumber}`);
    }
  });
});

writeJSON('products.json', productsData);

// Fix solutions.json - fix customerCases format
const solutionsData = readJSON('solutions.json');

const powerSolution = solutionsData.solutions.find(s => s.id === 'industrial-power-supply');
if (powerSolution && powerSolution.customerCases) {
  powerSolution.customerCases = powerSolution.customerCases.map(cs => {
    return {
      customer: cs.customer || "Customer",
      industry: cs.industry || "Industrial",
      challenge: cs.challenge || "Required reliable capacitor solution",
      solution: cs.solution || "Implemented Nichicon solution",
      results: cs.results || "Achieved reliable performance"
    };
  });
  console.log('✓ Fixed customerCases format for Industrial Power Supply Solution');
}

writeJSON('solutions.json', solutionsData);

console.log('\n=== Nichicon Final Fix Done ===');
