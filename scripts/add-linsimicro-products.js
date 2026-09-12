#!/usr/bin/env node
/**
 * Linsimicro品牌添加产品脚本
 * 为每个类别添加产品，确保每个类别至少有6个产品
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'linsimicro', 'products.json');

let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取失败:', error.message);
  process.exit(1);
}

// 要添加的新产品
const newProducts = {
  'data-converters': [
    {
      partNumber: "LSC1612",
      name: "12-bit High-Speed SAR ADC",
      shortDescription: "12-bit 1MSPS SAR ADC with SPI interface for industrial applications",
      descriptionParagraphs: [
        "The LSC1612 is a high-speed 12-bit SAR ADC designed for industrial data acquisition applications.",
        "Features 1MSPS sampling rate with low power consumption and excellent dynamic performance.",
        "The SPI interface enables easy integration with microcontrollers and DSPs."
      ],
      specifications: {
        Resolution: "12-bit",
        SamplingRate: "1 MSPS",
        Channels: "8 single-ended / 4 differential",
        Interface: "SPI",
        INL: "±1 LSB",
        DNL: "±0.5 LSB",
        SNR: "70 dB",
        PowerSupply: "2.7V to 5.25V",
        Temperature: "-40°C to +85°C"
      },
      features: [
        "1MSPS high-speed sampling",
        "8-channel multiplexed input",
        "Low power consumption",
        "SPI serial interface",
        "Internal reference voltage",
        "Industrial temperature range"
      ],
      applications: [
        "Industrial control systems",
        "Data acquisition modules",
        "Test and measurement",
        "Motor control",
        "Power monitoring"
      ],
      image: "/assets/images/brands/linsimicro/products/lsc1612.jpg",
      datasheet: "/assets/datasheets/linsimicro/lsc1612.pdf",
      stock: 850,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$2.50"
    },
    {
      partNumber: "LSC2420",
      name: "20-bit Precision Sigma-Delta ADC",
      shortDescription: "20-bit precision sigma-delta ADC with programmable gain amplifier",
      descriptionParagraphs: [
        "The LSC2420 is a high-resolution 20-bit sigma-delta ADC for precision measurement applications.",
        "Features programmable gain amplifier (PGA) with gains from 1x to 128x.",
        "The low noise design enables accurate measurement of small signals."
      ],
      specifications: {
        Resolution: "20-bit",
        OutputDataRate: "10 SPS to 2k SPS",
        Channels: "4 differential",
        PGA: "1x to 128x",
        INL: "±0.0015% FSR",
        Noise: "40nV RMS @ 16x gain",
        Interface: "SPI",
        Temperature: "-40°C to +85°C"
      },
      features: [
        "20-bit high resolution",
        "Programmable gain amplifier",
        "Ultra-low noise design",
        "Multiple data rates",
        "Internal reference",
        "4 differential channels"
      ],
      applications: [
        "Precision measurement",
        "Weight scales",
        "Pressure sensors",
        "Temperature measurement",
        "Strain gauge interfaces"
      ],
      image: "/assets/images/brands/linsimicro/products/lsc2420.jpg",
      datasheet: "/assets/datasheets/linsimicro/lsc2420.pdf",
      stock: 620,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$4.80"
    }
  ],
  'power-management': [
    {
      partNumber: "LSP3410",
      name: "3A Synchronous Buck Converter",
      shortDescription: "3A synchronous buck converter with 95% efficiency for industrial power",
      descriptionParagraphs: [
        "The LSP3410 is a high-efficiency 3A synchronous buck converter for industrial applications.",
        "Features 95% peak efficiency and wide input voltage range from 4.5V to 28V.",
        "The adjustable output voltage supports various load requirements."
      ],
      specifications: {
        InputVoltage: "4.5V to 28V",
        OutputVoltage: "0.8V to 24V adjustable",
        OutputCurrent: "3A",
        Efficiency: "Up to 95%",
        SwitchingFrequency: "500kHz",
        Package: "ESOP-8",
        Temperature: "-40°C to +85°C"
      },
      features: [
        "3A output current",
        "95% peak efficiency",
        "Wide input voltage range",
        "Synchronous rectification",
        "Internal compensation",
        "Soft-start function"
      ],
      applications: [
        "Industrial power supplies",
        "Distributed power systems",
        "FPGA power",
        "DSP power",
        "Communication equipment"
      ],
      image: "/assets/images/brands/linsimicro/products/lsp3410.jpg",
      datasheet: "/assets/datasheets/linsimicro/lsp3410.pdf",
      stock: 1200,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$1.80"
    },
    {
      partNumber: "LSP6208",
      name: "Dual Output LDO Regulator",
      shortDescription: "Dual output low-dropout regulator with 300mA per channel",
      descriptionParagraphs: [
        "The LSP6208 is a dual-channel low-dropout regulator providing two independent regulated outputs.",
        "Each channel supports up to 300mA output current with low dropout voltage.",
        "The device features excellent load and line regulation for sensitive analog circuits."
      ],
      specifications: {
        InputVoltage: "2.5V to 5.5V",
        OutputVoltage1: "3.3V fixed",
        OutputVoltage2: "1.8V fixed",
        OutputCurrent: "300mA per channel",
        Dropout: "200mV at 300mA",
        PSRR: "70dB at 1kHz",
        Package: "SOT23-6",
        Temperature: "-40°C to +85°C"
      },
      features: [
        "Dual independent outputs",
        "Low dropout voltage",
        "High PSRR",
        "Low noise",
        "Current limit protection",
        "Thermal shutdown"
      ],
      applications: [
        "MCU power supply",
        "Sensor power",
        "Analog circuit power",
        "RF circuit power",
        "Battery-powered devices"
      ],
      image: "/assets/images/brands/linsimicro/products/lsp6208.jpg",
      datasheet: "/assets/datasheets/linsimicro/lsp6208.pdf",
      stock: 1500,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$0.85"
    }
  ],
  'sensor-interfaces': [
    {
      partNumber: "LSA6202",
      name: "Precision Low-Noise Op-Amp",
      shortDescription: "Precision operational amplifier with 50μV offset and low noise",
      descriptionParagraphs: [
        "The LSA6202 is a precision operational amplifier with ultra-low offset voltage.",
        "Features 50μV max input offset and low noise density of 8nV/√Hz.",
        "The rail-to-rail input and output maximize dynamic range."
      ],
      specifications: {
        OffsetVoltage: "50μV max",
        OffsetDrift: "0.5μV/°C",
        Bandwidth: "2MHz",
        SlewRate: "1.5V/μs",
        Noise: "8nV/√Hz",
        SupplyVoltage: "2.7V to 5.5V",
        Package: "SOT23-5",
        Temperature: "-40°C to +125°C"
      },
      features: [
        "Ultra-low offset voltage",
        "Low noise density",
        "Rail-to-rail I/O",
        "High open-loop gain",
        "Low power consumption",
        "Automotive grade available"
      ],
      applications: [
        "Sensor signal conditioning",
        "Precision amplification",
        "Active filters",
        "Current sensing",
        "Medical instruments"
      ],
      image: "/assets/images/brands/linsimicro/products/lsa6202.jpg",
      datasheet: "/assets/datasheets/linsimicro/lsa6202.pdf",
      stock: 2000,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$0.65"
    },
    {
      partNumber: "LSI8241",
      name: "Instrumentation Amplifier",
      shortDescription: "High-precision instrumentation amplifier with programmable gain",
      descriptionParagraphs: [
        "The LSI8241 is a precision instrumentation amplifier for sensor signal conditioning.",
        "Features programmable gain from 1 to 1000 with single external resistor.",
        "The high CMRR ensures accurate measurement in noisy environments."
      ],
      specifications: {
        GainRange: "1 to 1000",
        OffsetVoltage: "100μV max",
        CMRR: "100dB min",
        Bandwidth: "1MHz at G=1",
        InputBias: "5nA max",
        SupplyVoltage: "2.7V to 5.5V",
        Package: "MSOP-8",
        Temperature: "-40°C to +85°C"
      },
      features: [
        "Programmable gain",
        "High CMRR",
        "Low offset voltage",
        "Low input bias current",
        "Wide bandwidth",
        "Single resistor gain setting"
      ],
      applications: [
        "Bridge sensor interfaces",
        "Strain gauge amplifiers",
        "Temperature sensors",
        "Pressure sensors",
        "Industrial measurement"
      ],
      image: "/assets/images/brands/linsimicro/products/lsi8241.jpg",
      datasheet: "/assets/datasheets/linsimicro/lsi8241.pdf",
      stock: 980,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$1.20"
    }
  ],
  'interface-ics': [
    {
      partNumber: "LCN1040",
      name: "Isolated CAN Transceiver",
      shortDescription: "Isolated CAN transceiver with 2.5kV isolation and high ESD protection",
      descriptionParagraphs: [
        "The LCN1040 is an isolated CAN transceiver with integrated galvanic isolation.",
        "Features 2.5kV isolation voltage and high ESD protection up to 8kV.",
        "The device supports CAN FD data rates up to 5Mbps."
      ],
      specifications: {
        Isolation: "2.5kV RMS",
        DataRate: "Up to 5Mbps CAN FD",
        ESDProtection: "±8kV contact, ±15kV air",
        CommonMode: "±30V",
        SupplyVoltage: "3.3V or 5V",
        Package: "SOIC-16",
        Temperature: "-40°C to +125°C"
      },
      features: [
        "2.5kV galvanic isolation",
        "CAN FD support",
        "High ESD protection",
        "Wide common-mode range",
        "Thermal shutdown",
        "Fail-safe features"
      ],
      applications: [
        "Industrial automation",
        "Automotive systems",
        "Building automation",
        "Medical equipment",
        "Isolated communication"
      ],
      image: "/assets/images/brands/linsimicro/products/lcn1040.jpg",
      datasheet: "/assets/datasheets/linsimicro/lcn1040.pdf",
      stock: 750,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$2.80"
    },
    {
      partNumber: "LLN1022",
      name: "RS-232 Transceiver",
      shortDescription: "3.3V RS-232 transceiver with 1μA shutdown current",
      descriptionParagraphs: [
        "The LLN1022 is a low-power RS-232 transceiver for serial communication.",
        "Features 1μA shutdown current and 250kbps data rate.",
        "The device operates from a single 3.3V supply with internal charge pump."
      ],
      specifications: {
        DataRate: "250kbps",
        Drivers: "2",
        Receivers: "2",
        ShutdownCurrent: "1μA",
        ESDProtection: "±15kV IEC61000-4-2",
        SupplyVoltage: "3.0V to 3.6V",
        Package: "TSSOP-16",
        Temperature: "-40°C to +85°C"
      },
      features: [
        "250kbps data rate",
        "Ultra-low shutdown current",
        "Single 3.3V supply",
        "High ESD protection",
        "Auto-shutdown feature",
        "Small package"
      ],
      applications: [
        "Serial communication",
        "Industrial control",
        "POS terminals",
        "Test equipment",
        "Battery-powered devices"
      ],
      image: "/assets/images/brands/linsimicro/products/lln1022.jpg",
      datasheet: "/assets/datasheets/linsimicro/lln1022.pdf",
      stock: 1500,
      moq: 100,
      leadTime: "4-6 weeks",
      price: "$0.95"
    }
  ]
};

// 添加产品到对应类别
const categories = productsData.categories || [];
let totalAdded = 0;

categories.forEach(category => {
  const products = category.products || [];
  const currentCount = products.length;
  
  if (currentCount < 6) {
    const productsToAdd = newProducts[category.id];
    if (productsToAdd) {
      const neededCount = 6 - currentCount;
      const productsToInsert = productsToAdd.slice(0, neededCount);
      
      productsToInsert.forEach(product => {
        category.products.push(product);
        totalAdded++;
        console.log(`添加产品: ${product.partNumber} -> ${category.name}`);
      });
    }
  }
});

// 保存
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 成功添加 ${totalAdded} 个产品`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
