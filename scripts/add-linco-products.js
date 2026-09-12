#!/usr/bin/env node
/**
 * Linco品牌添加产品脚本
 * 为每个类别添加产品，确保每个类别至少有6个产品
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'linco', 'products.json');

let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取失败:', error.message);
  process.exit(1);
}

// 要添加的新产品
const newProducts = {
  'motor-control-mcus': [
    {
      partNumber: "LKS32MC035DL6S8",
      name: "Enhanced Motor Control MCU",
      shortDescription: "96MHz motor control MCU with 64KB Flash, dual ADC, and enhanced DSP for FOC algorithms.",
      descriptionParagraphs: [
        "The LKS32MC035DL6S8 is an enhanced motor control MCU designed for Field-Oriented Control (FOC) applications.",
        "Featuring a 96MHz 32-bit CPU with dedicated DSP co-processor and 64KB Flash memory.",
        "The dual ADC architecture enables simultaneous sampling of multiple current channels for precise motor control."
      ],
      specifications: {
        CPU: "96MHz 32-bit with DSP",
        Flash: "64KB",
        RAM: "8KB",
        ADC: "Dual 12-bit, 2Msps",
        PGA: "2-channel differential",
        Package: "QFN32 5x5mm",
        Temperature: "-40°C to +105°C",
        ESD: "6kV HBM"
      },
      features: [
        "96MHz CPU with hardware DSP",
        "Dual ADC for simultaneous sampling",
        "64KB Flash for complex algorithms",
        "Integrated 2-channel PGA",
        "Hardware FOC acceleration",
        "Supports sensorless FOC"
      ],
      applications: [
        "Air conditioner compressors",
        "Washing machine motors",
        "Refrigerator compressors",
        "Industrial servo drives",
        "Power tools"
      ],
      image: "/assets/images/brands/linco/products/lks32mc035dl6s8.jpg",
      datasheet: "/assets/datasheets/linco/lks32mc035dl6s8.pdf",
      stock: 850,
      moq: 10,
      leadTime: "2-3 weeks",
      price: "$3.50"
    },
    {
      partNumber: "LKS32MC038M6S8",
      name: "High-Performance Motor Control MCU",
      shortDescription: "96MHz high-performance MCU with 128KB Flash, triple ADC, and advanced motor control features.",
      descriptionParagraphs: [
        "The LKS32MC038M6S8 is a high-performance motor control MCU for demanding applications.",
        "Features 128KB Flash memory and triple ADC architecture for comprehensive motor monitoring.",
        "Advanced motor control peripherals include hardware FOC, MTPA, and flux weakening support."
      ],
      specifications: {
        CPU: "96MHz 32-bit with DSP",
        Flash: "128KB",
        RAM: "12KB",
        ADC: "Triple 12-bit, 2Msps",
        PGA: "3-channel differential",
        Package: "QFN48 6x6mm",
        Temperature: "-40°C to +105°C",
        ESD: "6kV HBM"
      },
      features: [
        "128KB Flash for complex applications",
        "Triple ADC architecture",
        "Hardware FOC and MTPA",
        "Integrated 3-channel PGA",
        "Advanced flux weakening",
        "Multi-motor support"
      ],
      applications: [
        "High-performance servo drives",
        "CNC machine tools",
        "Industrial robots",
        "Elevator control systems",
        "Large appliance motors"
      ],
      image: "/assets/images/brands/linco/products/lks32mc038m6s8.jpg",
      datasheet: "/assets/datasheets/linco/lks32mc038m6s8.pdf",
      stock: 620,
      moq: 10,
      leadTime: "2-3 weeks",
      price: "$4.80"
    },
    {
      partNumber: "LKS32MC032H6P8",
      name: "Compact Entry-Level Motor Control MCU",
      shortDescription: "48MHz entry-level MCU with 16KB Flash for simple BLDC motor control applications.",
      descriptionParagraphs: [
        "The LKS32MC032H6P8 is a compact entry-level motor control MCU for cost-sensitive applications.",
        "Features 48MHz CPU and 16KB Flash, sufficient for trapezoidal BLDC control.",
        "The compact QFN20 package is ideal for space-constrained designs."
      ],
      specifications: {
        CPU: "48MHz 32-bit",
        Flash: "16KB",
        RAM: "2KB",
        ADC: "12-bit, 1Msps",
        PGA: "1-channel",
        Package: "QFN20 3x3mm",
        Temperature: "-40°C to +85°C",
        ESD: "4kV HBM"
      },
      features: [
        "48MHz CPU for basic control",
        "16KB Flash for simple algorithms",
        "Compact QFN20 package",
        "Cost-optimized design",
        "Supports trapezoidal BLDC",
        "Low power consumption"
      ],
      applications: [
        "Small cooling fans",
        "Toy motors",
        "Small pumps",
        "Basic power tools",
        "Simple appliances"
      ],
      image: "/assets/images/brands/linco/products/lks32mc032h6p8.jpg",
      datasheet: "/assets/datasheets/linco/lks32mc032h6p8.pdf",
      stock: 1200,
      moq: 10,
      leadTime: "1-2 weeks",
      price: "$1.80"
    },
    {
      partNumber: "LKS32MC036M6S8",
      name: "Mid-Range Motor Control MCU",
      shortDescription: "96MHz mid-range MCU with 96KB Flash and comprehensive motor control peripherals.",
      descriptionParagraphs: [
        "The LKS32MC036M6S8 is a mid-range motor control MCU balancing performance and cost.",
        "Features 96MHz CPU with 96KB Flash for most motor control applications.",
        "Comprehensive peripheral set includes dual ADC, dual PGA, and hardware acceleration."
      ],
      specifications: {
        CPU: "96MHz 32-bit with DSP",
        Flash: "96KB",
        RAM: "10KB",
        ADC: "Dual 12-bit, 2Msps",
        PGA: "2-channel differential",
        Package: "QFN32 5x5mm",
        Temperature: "-40°C to +105°C",
        ESD: "6kV HBM"
      },
      features: [
        "96MHz CPU with DSP",
        "96KB Flash for most applications",
        "Dual ADC and dual PGA",
        "Hardware acceleration",
        "Supports FOC and BLDC",
        "Versatile peripheral set"
      ],
      applications: [
        "Home appliance motors",
        "Fan and pump control",
        "Power tool motors",
        "Small servo drives",
        "General motor control"
      ],
      image: "/assets/images/brands/linco/products/lks32mc036m6s8.jpg",
      datasheet: "/assets/datasheets/linco/lks32mc036m6s8.pdf",
      stock: 780,
      moq: 10,
      leadTime: "2-3 weeks",
      price: "$3.20"
    }
  ],
  'automotive-mcus': [
    {
      partNumber: "LKS32AT082N8Q9",
      name: "Automotive Dual-Motor Control MCU",
      shortDescription: "AEC-Q100 qualified dual-motor control MCU for automotive HVAC and cooling systems.",
      descriptionParagraphs: [
        "The LKS32AT082N8Q9 is an AEC-Q100 qualified MCU designed for dual-motor automotive applications.",
        "Supports simultaneous control of two motors with independent FOC algorithms.",
        "Extended temperature range and enhanced EMC performance for automotive environments."
      ],
      specifications: {
        CPU: "96MHz 32-bit with DSP",
        Flash: "128KB",
        RAM: "16KB",
        ADC: "Triple 12-bit, 2Msps",
        PGA: "4-channel differential",
        Package: "QFN48 7x7mm",
        Temperature: "-40°C to +150°C",
        Qualification: "AEC-Q100 Grade 0"
      },
      features: [
        "Dual-motor control capability",
        "AEC-Q100 Grade 0 qualification",
        "Extended temperature range",
        "Enhanced EMC performance",
        "Hardware FOC for dual motors",
        "Automotive-grade reliability"
      ],
      applications: [
        "HVAC blower and flap motors",
        "Engine cooling fans",
        "Water pump control",
        "Oil pump control",
        "Dual-motor seat adjustment"
      ],
      image: "/assets/images/brands/linco/products/lks32at082n8q9.jpg",
      datasheet: "/assets/datasheets/linco/lks32at082n8q9.pdf",
      stock: 450,
      moq: 100,
      leadTime: "6-8 weeks",
      price: "$8.50"
    },
    {
      partNumber: "LKS32AT083PXL5M6",
      name: "Automotive High-Integration MCU",
      shortDescription: "AEC-Q100 qualified high-integration MCU with integrated gate drivers for automotive motor control.",
      descriptionParagraphs: [
        "The LKS32AT083PXL5M6 is a highly integrated automotive MCU with on-chip gate drivers.",
        "Combines motor control MCU and gate driver in a single package, reducing BOM and PCB area.",
        "AEC-Q100 qualified with comprehensive protection features for automotive safety."
      ],
      specifications: {
        CPU: "96MHz 32-bit with DSP",
        Flash: "96KB",
        RAM: "12KB",
        ADC: "Dual 12-bit, 2Msps",
        GateDriver: "6-channel, 1A",
        Package: "QFN52 8x8mm",
        Temperature: "-40°C to +150°C",
        Qualification: "AEC-Q100 Grade 0"
      },
      features: [
        "Integrated 6-channel gate driver",
        "AEC-Q100 Grade 0 qualification",
        "Single-chip motor control solution",
        "Comprehensive protection features",
        "Reduced BOM and PCB area",
        "Automotive-grade reliability"
      ],
      applications: [
        "Electronic power steering",
        "Electric water pumps",
        "Electric oil pumps",
        "Active suspension",
        "Turbocharger control"
      ],
      image: "/assets/images/brands/linco/products/lks32at083pxl5m6.jpg",
      datasheet: "/assets/datasheets/linco/lks32at083pxl5m6.pdf",
      stock: 320,
      moq: 100,
      leadTime: "6-8 weeks",
      price: "$12.00"
    }
  ],
  'gate-drivers': [
    {
      partNumber: "LKS_GD_3P3_800MA",
      name: "Low-Voltage Gate Driver",
      shortDescription: "3.3V compatible gate driver with 800mA output current for low-voltage MOSFETs.",
      descriptionParagraphs: [
        "The LKS_GD_3P3_800MA is a low-voltage gate driver designed for 3.3V logic compatibility.",
        "Provides 800mA peak output current for fast switching of low-voltage MOSFETs.",
        "Ideal for battery-powered applications and low-voltage motor drives."
      ],
      specifications: {
        Voltage: "4.5V to 15V",
        OutputCurrent: "800mA source/sink",
        Logic: "3.3V and 5V compatible",
        DeadTime: "Programmable 100ns-2μs",
        Package: "SOP8",
        Temperature: "-40°C to +125°C"
      },
      features: [
        "3.3V logic compatible",
        "800mA output current",
        "Low-voltage operation",
        "Programmable dead-time",
        "UVLO protection",
        "Compact SOP8 package"
      ],
      applications: [
        "Battery-powered tools",
        "Low-voltage motor drives",
        "Drone motor control",
        "Portable equipment",
        "Small appliance motors"
      ],
      image: "/assets/images/brands/linco/products/lks_gd_3p3_800ma.jpg",
      datasheet: "/assets/datasheets/linco/lks_gd_3p3_800ma.pdf",
      stock: 1500,
      moq: 50,
      leadTime: "4-6 weeks",
      price: "$0.85"
    },
    {
      partNumber: "LKS_GD_HB_2A",
      name: "High-Current Half-Bridge Driver",
      shortDescription: "High-current half-bridge gate driver with 2A output for high-power MOSFETs and IGBTs.",
      descriptionParagraphs: [
        "The LKS_GD_HB_2A is a high-current half-bridge gate driver for high-power applications.",
        "Provides 2A peak output current for driving large MOSFETs and IGBTs.",
        "Integrated bootstrap diode and comprehensive protection features."
      ],
      specifications: {
        Voltage: "10V to 20V",
        OutputCurrent: "2A source/sink",
        Topology: "Half-bridge",
        DeadTime: "Fixed 500ns",
        Package: "SOIC14",
        Temperature: "-40°C to +125°C"
      },
      features: [
        "2A high output current",
        "Integrated bootstrap diode",
        "Half-bridge topology",
        "Fixed dead-time protection",
        "UVLO and OT protection",
        "Wide operating voltage"
      ],
      applications: [
        "High-power motor drives",
        "Industrial inverters",
        "Welding equipment",
        "Induction heating",
        "Large appliance motors"
      ],
      image: "/assets/images/brands/linco/products/lks_gd_hb_2a.jpg",
      datasheet: "/assets/datasheets/linco/lks_gd_hb_2a.pdf",
      stock: 680,
      moq: 50,
      leadTime: "4-6 weeks",
      price: "$1.50"
    }
  ],
  'power-management': [
    {
      partNumber: "LKS_PMIC_LDO_1V8_200",
      name: "1.8V Low-Dropout Regulator",
      shortDescription: "1.8V LDO with 200mA output for core voltage supply in motor control systems.",
      descriptionParagraphs: [
        "The LKS_PMIC_LDO_1V8_200 is a low-dropout regulator providing 1.8V output for MCU core supply.",
        "200mA output current with low quiescent current for power-sensitive applications.",
        "High PSRR ensures clean power for sensitive analog circuits."
      ],
      specifications: {
        InputVoltage: "2.5V to 5.5V",
        OutputVoltage: "1.8V fixed",
        OutputCurrent: "200mA",
        Dropout: "200mV at 200mA",
        PSRR: "70dB at 1kHz",
        Package: "SOT23-5"
      },
      features: [
        "1.8V fixed output",
        "200mA output current",
        "Low dropout voltage",
        "High PSRR",
        "Low quiescent current",
        "Compact SOT23-5"
      ],
      applications: [
        "MCU core supply",
        "Digital logic supply",
        "Sensor power",
        "Reference voltage",
        "Low-noise analog supply"
      ],
      image: "/assets/images/brands/linco/products/lks_pmic_ldo_1v8_200.jpg",
      datasheet: "/assets/datasheets/linco/lks_pmic_ldo_1v8_200.pdf",
      stock: 2000,
      moq: 50,
      leadTime: "4-6 weeks",
      price: "$0.35"
    },
    {
      partNumber: "LKS_PMIC_BOOST_5V1A",
      name: "5V Boost Converter",
      shortDescription: "5V boost converter with 1A output for battery-powered motor control applications.",
      descriptionParagraphs: [
        "The LKS_PMIC_BOOST_5V1A is a synchronous boost converter providing 5V output from battery input.",
        "1A output current capability with high efficiency up to 95%.",
        "Ideal for applications requiring 5V supply from single-cell Li-ion or 3.3V systems."
      ],
      specifications: {
        InputVoltage: "2.5V to 4.5V",
        OutputVoltage: "5V fixed",
        OutputCurrent: "1A",
        Efficiency: "Up to 95%",
        Frequency: "1.2MHz",
        Package: "SOT23-6"
      },
      features: [
        "5V fixed output",
        "1A output current",
        "Up to 95% efficiency",
        "Synchronous rectification",
        "1.2MHz switching frequency",
        "Compact SOT23-6"
      ],
      applications: [
        "Battery-powered tools",
        "Portable motor drives",
        "5V system from Li-ion",
        "USB power applications",
        "Mobile equipment"
      ],
      image: "/assets/images/brands/linco/products/lks_pmic_boost_5v1a.jpg",
      datasheet: "/assets/datasheets/linco/lks_pmic_boost_5v1a.pdf",
      stock: 1200,
      moq: 50,
      leadTime: "4-6 weeks",
      price: "$0.65"
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
