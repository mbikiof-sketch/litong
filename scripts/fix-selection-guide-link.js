#!/usr/bin/env node

/**
 * Fix selectionGuideLink format for HCI brand
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hci');
const productsFile = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log('Fixing selectionGuideLink format...\n');

productsData.categories.forEach(category => {
  // Replace string with array format
  category.selectionGuideLink = [
    {
      title: `${category.name} Selection Guide`,
      url: `/hci/products/${category.slug}/selection-guide`,
      description: `Complete selection guide for ${category.name} products including specifications, applications, and recommendations.`
    },
    {
      title: 'Cross Reference Tool',
      url: '/hci/support/cross-reference',
      description: 'Find compatible alternative parts from other manufacturers.'
    }
  ];
  console.log(`✓ Fixed selectionGuideLink for ${category.name}`);
});

// Save updated file
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');

console.log('\n✅ Successfully fixed all selectionGuideLink fields!');
