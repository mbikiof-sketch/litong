#!/usr/bin/env node
/**
 * Fix Nichicon customerCases format
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

console.log('\n=== Fixing Nichicon customerCases ===\n');

const solutionsData = readJSON('solutions.json');

// Fix Industrial Power Supply Solution customerCases
const powerSolution = solutionsData.solutions.find(s => s.id === 'industrial-power-supply');
if (powerSolution && powerSolution.customerCases) {
  powerSolution.customerCases = powerSolution.customerCases.map(cs => {
    // Ensure all required fields exist with proper names
    return {
      customer: cs.customer || "Customer",
      industry: cs.industry || "Industrial",
      challenge: cs.challenge || "Required reliable capacitor solution",
      solution: cs.solution || "Implemented Nichicon solution",
      results: cs.results || cs.result || "Achieved reliable performance"
    };
  });
  console.log('✓ Fixed customerCases for Industrial Power Supply Solution');
}

writeJSON('solutions.json', solutionsData);

console.log('\n=== Nichicon customerCases Fix Done ===');
