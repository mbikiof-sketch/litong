const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'superchip');
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 修复 shortDescription 长度不足的产品
const shortDescFixes = {
  "FM3405": "FM3405 High Voltage LED Driver - AC-DC lighting driver for commercial applications up to 100W with high power factor",
  "FM3406": "FM3406 RGB LED Controller - 3-channel intelligent color lighting controller with I2C interface for smart applications",
  "FM5005": "FM5005 Power Bank Charger IC - Integrated charger and boost converter for portable power bank applications",
  "FM5006": "FM5006 Battery Management System - Complete BMS for 2-4 cell Li-ion packs with balancing and protection",
  "FM6005": "FM6005 Brushless DC Motor Driver - 3-phase BLDC driver with sensorless control for fans and pumps",
  "FM6006": "FM6006 Servo Motor Driver - Precision servo driver with position and speed control for robotics applications"
};

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (shortDescFixes[product.partNumber]) {
      product.shortDescription = shortDescFixes[product.partNumber];
      console.log(`Fixed shortDescription for ${product.partNumber}`);
    }
  });
});

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('\n✅ Short descriptions fixed!');
