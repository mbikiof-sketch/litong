#!/usr/bin/env node

/**
 * Fix remaining issues in HCI brand data
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hci');
const productsFile = path.join(dataDir, 'products.json');
const supportFile = path.join(dataDir, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

console.log('Fixing remaining issues...\n');

// Fix 1: Truncate shortDescriptions that are too long
const descriptionsToFix = {
  'HCI-AN001': 'Dual precision op amp with 1MHz bandwidth, 0.5mV offset, and rail-to-rail output for sensor signal conditioning.',
  'HCI-AN002': 'High-speed op amp with 10MHz bandwidth, 10V/µs slew rate, and low distortion for audio systems.',
  'HCI-IN001': 'RS-485 transceiver with 20Mbps data rate, ±15kV ESD protection, and wide common-mode range.',
  'HCI-IN002': 'High-speed CAN transceiver with ISO 11898-2 compliance, 1Mbps rate, and ±8kV ESD protection.',
  'HCI-SE001': 'Digital temperature sensor with ±0.5°C accuracy, I2C interface, and alert functionality for monitoring.'
};

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (descriptionsToFix[product.partNumber]) {
      product.shortDescription = descriptionsToFix[product.partNumber];
      console.log(`✓ Fixed shortDescription for ${product.partNumber}`);
    }
  });
});

// Fix 2: Add selectionGuideLink for categories
productsData.categories.forEach(category => {
  if (!category.selectionGuideLink || category.selectionGuideLink.length === 0) {
    category.selectionGuideLink = [
      {
        title: `${category.name} Selection Guide`,
        url: `/hci/products/${category.slug}/selection-guide`,
        description: `Complete selection guide for ${category.name} products`
      },
      {
        title: 'Cross Reference Tool',
        url: '/hci/support/cross-reference',
        description: 'Find compatible alternative parts'
      }
    ];
    console.log(`✓ Added selectionGuideLink for ${category.name}`);
  }
});

// Fix 3: Fix support.json FAQ #6
if (supportData.faqs && supportData.faqs[5]) {
  supportData.faqs[5].answer = 'HCI products are available through our authorized distributors including DigiKey, Mouser, and Arrow Electronics. You can also contact our sales team directly for volume pricing and technical support. We offer samples for qualified projects and provide comprehensive technical documentation to support your design-in process.';
  console.log('✓ Fixed support.json FAQ #6');
}

// Save updated files
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');
fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2), 'utf8');

console.log('\n✅ Successfully fixed remaining issues!');
