#!/usr/bin/env node

/**
 * Fix selectionGuideLink format for HCI brand - correct format
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hci');
const productsFile = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('Fixing selectionGuideLink format to correct object structure...\n');

productsData.categories.forEach(category => {
  // Replace with correct object format
  category.selectionGuideLink = {
    url: `/hci/support/selection-guide-${category.slug}`,
    text: `${category.name} Selection Guide - Choose the right product for your application`
  };
  console.log(`✓ Fixed selectionGuideLink for ${category.name}`);
});

// Save updated file
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');

console.log('\n✅ Successfully fixed all selectionGuideLink fields!');
