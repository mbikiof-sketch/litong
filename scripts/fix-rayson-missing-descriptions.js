#!/usr/bin/env node
/**
 * Fix missing description fields in rayson products
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'rayson', 'products.json');
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Product descriptions
const productDescriptions = {
  // DDR Memory
  'RS1G44G': 'High-performance DDR4 4Gb memory for data-intensive applications',
  'RS1G88G': 'Ultra-high-speed DDR4 8Gb memory for performance-critical systems',
  'RS256M16': 'DDR4 256Mb memory for embedded systems',
  'RS2G168': 'DDR4 2Gb memory for industrial applications',
  'RS4G16D': 'High-density DDR4 4Gb memory for data-intensive applications',
  'RS8G32D': 'Ultra-high-speed DDR4 8Gb memory for performance-critical systems',
  // LPDDR Memory
  'RS2G88L': 'LPDDR4 2Gb memory for mobile devices',
  'RS1G44L': 'LPDDR4 1Gb memory for portable electronics',
  'RS2G85L': 'LPDDR4X 2Gb ultra-low power memory',
  'RS1G44X': 'LPDDR4X 1Gb memory for wearables',
  'RS4G86L': 'LPDDR4X 4Gb ultra-low power memory for mobile and IoT devices',
  'RS16G65L': 'LPDDR5 16Gb next-gen mobile memory with revolutionary speed',
  // NAND Flash
  'RS1GSLC': 'High-reliability SLC NAND Flash with 100K P/E cycles',
  'RS2GMLC': 'Cost-effective MLC NAND Flash for consumer applications',
  'RS4GTLC': 'High-density TLC NAND Flash for cost-optimized storage',
  'RS8GTLC': 'Ultra-high-density TLC NAND Flash for maximum storage capacity',
  'RS16GTLC': 'Ultra-high-density TLC NAND Flash for maximum storage capacity',
  'RS512MSLC': 'Compact SLC NAND Flash for embedded boot and code storage',
  // eMMC
  'RS08GEMMC': 'High-performance 8GB eMMC 5.1 for mobile applications',
  'RS16GEMMC': 'High-capacity 16GB eMMC 5.1 for demanding storage applications',
  'RS32GEMMC': 'Ultra-high-capacity 32GB eMMC 5.1 for maximum storage needs',
  'RS04GEMMC': 'Cost-effective 4GB eMMC 5.0 for budget-conscious applications',
  'RS64GEMMC': 'Ultra-high-capacity 64GB eMMC 5.1 for maximum storage needs',
  'RS128GEMMC': 'Maximum-capacity 128GB eMMC 5.1 for enterprise storage applications'
};

// Category long descriptions
const categoryLongDescriptions = {
  'ddr-memory': 'Rayson DDR Memory products offer high-performance, reliable memory solutions for desktop, server, and embedded applications. Our DDR3 and DDR4 SDRAM products feature industry-standard interfaces, multiple speed grades, and various capacity options to meet diverse application requirements.',
  'lpddr-memory': 'Rayson LPDDR Memory products provide ultra-low-power memory solutions optimized for mobile devices, IoT applications, and battery-powered systems. Our LPDDR4 and LPDDR4X products deliver high performance with minimal power consumption.',
  'nand-flash': 'Rayson NAND Flash Memory products offer high-density storage solutions for embedded systems, SSDs, and consumer electronics. Our SLC, MLC, and TLC NAND Flash products provide various endurance and cost options to meet different application needs.',
  'emmc-storage': 'Rayson eMMC Storage products provide integrated embedded storage solutions with built-in controllers for simplified system design. Our eMMC 5.0 and 5.1 products offer high capacity, reliability, and security features for mobile and industrial applications.'
};

let fixedCount = 0;

// Fix products
 data.categories.forEach(cat => {
  // Fix category longDescription
  if (!cat.longDescription && categoryLongDescriptions[cat.id]) {
    cat.longDescription = categoryLongDescriptions[cat.id];
    fixedCount++;
    console.log(`✅ Added longDescription to ${cat.name}`);
  }

  // Fix product descriptions
  cat.products.forEach(prod => {
    if (!prod.description && productDescriptions[prod.partNumber]) {
      prod.description = productDescriptions[prod.partNumber];
      fixedCount++;
      console.log(`✅ Added description to ${prod.partNumber}`);
    }
  });
});

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log(`\n🎉 Fixed ${fixedCount} missing descriptions!`);
