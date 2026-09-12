#!/usr/bin/env node
/**
 * AnalogySemi Brand Data Completion Script
 * Adds missing products to meet requirements
 * 
 * Requirements:
 * - 4 secondary product categories with at least 4 products each
 * - At least 3 solution detail pages (already satisfied)
 * - At least 5 technical support articles (already satisfied)
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'analogysemi');

console.log('🔧 AnalogySemi Brand Data Completion Script\n');

// Read existing data files
const productsPath = path.join(DATA_DIR, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('📊 Current Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name}: ${productCount} products`);
});

// ==================== ADD PRODUCTS TO MOTOR DRIVERS ====================
console.log('\n📦 Adding products to Motor Drivers category...');
const motorCategory = productsData.categories.find(cat => cat.id === 'motor-drivers');
const additionalMotorProducts = [
  {
    partNumber: "ANB8200",
    name: "Three-Phase BLDC Motor Driver",
    shortDescription: "High-performance three-phase BLDC motor driver with integrated gate drivers and comprehensive protection features for industrial applications.",
    description: "The ANB8200 is a high-performance three-phase BLDC motor driver designed for industrial and automotive applications requiring reliable motor control.",
    descriptionParagraphs: [
      "The ANB8200 integrates three-phase gate drivers, current sensing, and comprehensive protection features in a compact package. It supports both sensored and sensorless control algorithms.",
      "Key features include: integrated bootstrap diodes, adjustable dead-time control, overcurrent and thermal protection, and SPI interface for configuration and diagnostics.",
      "This driver is ideal for industrial pumps, fans, compressors, and automotive auxiliary motors requiring high reliability and performance."
    ],
    specifications: {
      "Motor Type": "Three-Phase BLDC",
      "Supply Voltage": "8V - 60V",
      "Output Current": "2A continuous, 5A peak",
      "Gate Drive Voltage": "10V - 15V",
      "PWM Frequency": "Up to 100kHz",
      "Protection": "OCP, OTP, UVLO, Shoot-through",
      "Interface": "SPI, PWM",
      "Package": "QFN-48",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-40°C to +125°C"
    },
    applications: [
      "Industrial Pumps",
      "HVAC Systems",
      "Automotive Auxiliary Motors",
      "Power Tools"
    ],
    features: [
      "Integrated three-phase gate drivers",
      "Sensored and sensorless control",
      "Comprehensive protection features",
      "SPI configuration interface",
      "Adjustable dead-time control"
    ],
    stock: {
      status: "in_stock",
      quantity: 5000,
      leadTime: "4-6 weeks"
    },
    pricing: {
      currency: "USD",
      priceRange: "$2.50 - $3.50"
    }
  }
];
motorCategory.products.push(...additionalMotorProducts);
console.log(`   Motor Drivers分类现在有 ${motorCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO POWER MANAGEMENT ====================
console.log('\n📦 Adding products to Power Management category...');
const powerCategory = productsData.categories.find(cat => cat.id === 'power-management');
const additionalPowerProducts = [
  {
    partNumber: "ANP3100",
    name: "High-Efficiency Buck Converter",
    shortDescription: "3A synchronous buck converter with wide input voltage range and high efficiency for industrial and automotive applications.",
    description: "The ANP3100 is a high-efficiency synchronous buck converter delivering up to 3A output current with excellent load and line regulation.",
    descriptionParagraphs: [
      "The ANP3100 features a wide input voltage range of 4.5V to 36V, making it suitable for 12V and 24V industrial systems. The synchronous rectification achieves efficiency up to 95%.",
      "Key features include: adjustable switching frequency (300kHz - 2MHz), soft-start capability, power-good indicator, and comprehensive protection features.",
      "This converter is ideal for industrial control systems, automotive electronics, and telecom equipment requiring reliable power conversion."
    ],
    specifications: {
      "Topology": "Synchronous Buck",
      "Input Voltage": "4.5V - 36V",
      "Output Voltage": "0.8V - 24V adjustable",
      "Output Current": "3A max",
      "Efficiency": "Up to 95%",
      "Switching Frequency": "300kHz - 2MHz",
      "Protection": "OCP, OVP, OTP, UVLO",
      "Package": "TSSOP-16",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-40°C to +125°C"
    },
    applications: [
      "Industrial Control Systems",
      "Automotive Electronics",
      "Telecom Equipment",
      "Distributed Power Systems"
    ],
    features: [
      "Wide input voltage range",
      "High efficiency up to 95%",
      "Adjustable switching frequency",
      "Synchronous rectification",
      "Comprehensive protection"
    ],
    stock: {
      status: "in_stock",
      quantity: 8000,
      leadTime: "4-6 weeks"
    },
    pricing: {
      currency: "USD",
      priceRange: "$1.80 - $2.50"
    }
  },
  {
    partNumber: "ANP3200",
    name: "Low-IQ LDO Regulator",
    shortDescription: "Ultra-low quiescent current LDO with high PSRR for battery-powered and noise-sensitive applications.",
    description: "The ANP3200 is an ultra-low quiescent current LDO regulator designed for battery-powered applications requiring long standby time and clean power.",
    descriptionParagraphs: [
      "The ANP3200 features extremely low quiescent current of only 1.5μA, making it ideal for battery-powered devices. High PSRR ensures clean output even with noisy input.",
      "Key features include: low dropout voltage (200mV at 200mA), high PSRR (70dB at 1kHz), current limit protection, and thermal shutdown.",
      "This LDO is perfect for sensor power, microcontroller supplies, and portable electronics requiring long battery life."
    ],
    specifications: {
      "Type": "Low-IQ LDO",
      "Input Voltage": "2.5V - 5.5V",
      "Output Voltage": "1.2V - 3.3V fixed",
      "Output Current": "200mA max",
      "Quiescent Current": "1.5μA typical",
      "Dropout Voltage": "200mV at 200mA",
      "PSRR": "70dB at 1kHz",
      "Package": "SOT-23-5",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-40°C to +85°C"
    },
    applications: [
      "Battery-Powered Devices",
      "Sensor Power Supplies",
      "Microcontroller Supplies",
      "Portable Electronics"
    ],
    features: [
      "Ultra-low quiescent current",
      "High PSRR for noise rejection",
      "Low dropout voltage",
      "Current limit protection",
      "Small SOT-23 package"
    ],
    stock: {
      status: "in_stock",
      quantity: 12000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$0.45 - $0.65"
    }
  }
];
powerCategory.products.push(...additionalPowerProducts);
console.log(`   Power Management分类现在有 ${powerCategory.products.length} 个产品`);

// ==================== ADD PRODUCTS TO SIGNAL CONDITIONING ====================
console.log('\n📦 Adding products to Signal Conditioning category...');
const signalCategory = productsData.categories.find(cat => cat.id === 'signal-conditioning');
const additionalSignalProducts = [
  {
    partNumber: "ANS2100",
    name: "Precision Operational Amplifier",
    shortDescription: "Low-offset, low-noise precision op-amp for sensor signal conditioning and measurement applications.",
    description: "The ANS2100 is a precision operational amplifier featuring ultra-low offset voltage and low noise for high-accuracy signal conditioning.",
    descriptionParagraphs: [
      "The ANS2100 delivers exceptional DC precision with 50μV max offset voltage and 0.01μV/°C drift. Low noise (8nV/√Hz) ensures clean signal amplification.",
      "Key features include: rail-to-rail input and output, wide bandwidth (10MHz), high open-loop gain (120dB), and low supply current.",
      "This op-amp is ideal for sensor signal conditioning, precision measurements, medical instrumentation, and data acquisition systems."
    ],
    specifications: {
      "Type": "Precision Op-Amp",
      "Supply Voltage": "2.7V - 5.5V",
      "Offset Voltage": "50μV max",
      "Offset Drift": "0.01μV/°C",
      "Input Noise": "8nV/√Hz",
      "Bandwidth": "10MHz",
      "Slew Rate": "6V/μs",
      "Package": "SOIC-8",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-40°C to +125°C"
    },
    applications: [
      "Sensor Signal Conditioning",
      "Precision Measurements",
      "Medical Instrumentation",
      "Data Acquisition"
    ],
    features: [
      "Ultra-low offset voltage",
      "Low noise performance",
      "Rail-to-rail I/O",
      "High open-loop gain",
      "Wide bandwidth"
    ],
    stock: {
      status: "in_stock",
      quantity: 6000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$0.85 - $1.20"
    }
  },
  {
    partNumber: "ANS2200",
    name: "High-Speed Comparator",
    shortDescription: "Fast response comparator with push-pull output for high-speed switching and zero-crossing detection applications.",
    description: "The ANS2200 is a high-speed voltage comparator featuring fast propagation delay and rail-to-rail input for demanding switching applications.",
    descriptionParagraphs: [
      "The ANS2200 offers a fast 40ns propagation delay with only 1mV hysteresis for accurate switching. The push-pull output eliminates need for external pull-up resistor.",
      "Key features include: rail-to-rail input range, low supply current (150μA), push-pull output stage, and wide operating temperature range.",
      "This comparator is perfect for zero-crossing detection, PWM applications, overvoltage protection, and high-speed switching circuits."
    ],
    specifications: {
      "Type": "High-Speed Comparator",
      "Supply Voltage": "2.7V - 5.5V",
      "Propagation Delay": "40ns typical",
      "Hysteresis": "1mV",
      "Input Offset": "±5mV max",
      "Supply Current": "150μA typical",
      "Output Type": "Push-Pull",
      "Package": "SOT-23-5",
      "Voltage Rating": "N/A",
      "Current Rating": "N/A",
      "Temperature Range": "-40°C to +125°C"
    },
    applications: [
      "Zero-Crossing Detection",
      "PWM Applications",
      "Overvoltage Protection",
      "High-Speed Switching"
    ],
    features: [
      "Fast 40ns response",
      "Rail-to-rail input",
      "Push-pull output",
      "Low supply current",
      "Small SOT-23 package"
    ],
    stock: {
      status: "in_stock",
      quantity: 10000,
      leadTime: "Stock available"
    },
    pricing: {
      currency: "USD",
      priceRange: "$0.35 - $0.50"
    }
  }
];
signalCategory.products.push(...additionalSignalProducts);
console.log(`   Signal Conditioning分类现在有 ${signalCategory.products.length} 个产品`);

// Save updated data file
console.log('\n💾 Saving updated data file...');
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n✅ AnalogySemi brand data completion finished!');
console.log('\n📊 Final Data Status:');
console.log(`   Products: ${productsData.categories.length} categories`);
productsData.categories.forEach(cat => {
  const productCount = cat.products ? cat.products.length : 0;
  console.log(`     - ${cat.name}: ${productCount} products`);
});
