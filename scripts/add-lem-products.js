#!/usr/bin/env node
/**
 * LEM品牌添加产品脚本
 * 为每个类别添加产品，确保每个类别至少有6个产品
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'lem', 'products.json');

// 读取产品数据
let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取products.json失败:', error.message);
  process.exit(1);
}

// 要添加的新产品模板
const newProducts = {
  'current-transducers': [
    {
      "id": "hlsr-32-p",
      "partNumber": "HLSR 32-P",
      "name": "HLSR 32-P Open-Loop Current Transducer",
      "shortDescription": "32A rated open-loop Hall effect current transducer with voltage output for industrial applications",
      "descriptionParagraphs": [
        "The HLSR 32-P is a compact open-loop Hall effect current transducer designed for industrial applications requiring reliable current measurement up to 32A.",
        "Based on open-loop Hall effect technology, the HLSR series offers non-contact current measurement with galvanic isolation between primary and secondary circuits.",
        "The HLSR 32-P is particularly well-suited for applications such as motor drives, power supplies, and industrial automation where cost-effective current monitoring is required."
      ],
      "specifications": {
        "Rated Current": "32A",
        "Measurement Range": "±80A",
        "Supply Voltage": "3.3V or 5V",
        "Output Type": "Voltage (0.5V-4.5V)",
        "Accuracy": "±1%",
        "Response Time": "3.5 μs",
        "Bandwidth": "100 kHz",
        "Isolation Voltage": "2.5 kV",
        "Operating Temperature": "-40°C to +105°C"
      },
      "image": "/assets/images/brands/lem/products/hlsr-32-p.jpg",
      "datasheet": "/assets/datasheets/lem/hlsr-series.pdf",
      "stock": 980,
      "moq": 10,
      "leadTime": "1-2 weeks",
      "price": "$4.20"
    },
    {
      "id": "cas-25-np",
      "partNumber": "CAS 25-NP",
      "name": "CAS 25-NP Closed-Loop Current Transducer",
      "shortDescription": "25A rated closed-loop Hall effect current transducer with high accuracy for precision applications",
      "descriptionParagraphs": [
        "The CAS 25-NP is a high-precision closed-loop Hall effect current transducer designed for applications requiring accurate current measurement up to 25A.",
        "Based on closed-loop Hall effect technology with magnetic flux compensation, the CAS series offers superior accuracy and linearity compared to open-loop alternatives.",
        "The CAS 25-NP is ideal for precision applications such as servo drives, power analyzers, and medical equipment where accuracy is critical."
      ],
      "specifications": {
        "Rated Current": "25A",
        "Measurement Range": "±50A",
        "Supply Voltage": "±15V",
        "Output Type": "Current (25mA @ 25A)",
        "Accuracy": "±0.5%",
        "Response Time": "<1 μs",
        "Bandwidth": "200 kHz",
        "Isolation Voltage": "3.0 kV",
        "Operating Temperature": "-40°C to +85°C"
      },
      "image": "/assets/images/brands/lem/products/cas-25-np.jpg",
      "datasheet": "/assets/datasheets/lem/cas-series.pdf",
      "stock": 650,
      "moq": 5,
      "leadTime": "2-3 weeks",
      "price": "$12.50"
    }
  ],
  'voltage-transducers': [
    {
      "id": "lv-50",
      "partNumber": "LV 50",
      "name": "LV 50 Voltage Transducer",
      "shortDescription": "50V rated voltage transducer for isolated voltage measurement in industrial applications",
      "descriptionParagraphs": [
        "The LV 50 is a compact voltage transducer designed for isolated voltage measurement up to 50V in industrial applications.",
        "Based on Hall effect technology, the LV series offers galvanic isolation between primary and secondary circuits with excellent linearity.",
        "The LV 50 is ideal for applications such as battery monitoring, power supply feedback, and voltage monitoring in industrial control systems."
      ],
      "specifications": {
        "Rated Voltage": "50V",
        "Measurement Range": "±100V",
        "Supply Voltage": "±15V",
        "Output Type": "Voltage (±10V)",
        "Accuracy": "±0.8%",
        "Response Time": "10 μs",
        "Bandwidth": "10 kHz",
        "Isolation Voltage": "2.5 kV",
        "Operating Temperature": "-40°C to +85°C"
      },
      "image": "/assets/images/brands/lem/products/lv-50.jpg",
      "datasheet": "/assets/datasheets/lem/lv-series.pdf",
      "stock": 820,
      "moq": 5,
      "leadTime": "2-3 weeks",
      "price": "$18.00"
    },
    {
      "id": "dvl-50",
      "partNumber": "DVL 50",
      "name": "DVL 50 Voltage Transducer",
      "shortDescription": "50V rated voltage transducer with dual output for redundant measurement systems",
      "descriptionParagraphs": [
        "The DVL 50 is a voltage transducer with dual output designed for redundant voltage measurement systems requiring high reliability.",
        "Features dual isolated outputs for redundant measurement, making it ideal for safety-critical applications.",
        "The DVL 50 is commonly used in railway systems, renewable energy, and industrial automation where reliability is paramount."
      ],
      "specifications": {
        "Rated Voltage": "50V",
        "Measurement Range": "±150V",
        "Supply Voltage": "±12V to ±15V",
        "Output Type": "Dual Voltage (±10V)",
        "Accuracy": "±0.5%",
        "Response Time": "40 μs",
        "Bandwidth": "10 kHz",
        "Isolation Voltage": "4.0 kV",
        "Operating Temperature": "-40°C to +85°C"
      },
      "image": "/assets/images/brands/lem/products/dvl-50.jpg",
      "datasheet": "/assets/datasheets/lem/dvl-series.pdf",
      "stock": 450,
      "moq": 5,
      "leadTime": "3-4 weeks",
      "price": "$35.00"
    }
  ],
  'industrial-sensors': [
    {
      "id": "htfs-200-p",
      "partNumber": "HTFS 200-P",
      "name": "HTFS 200-P High Temperature Current Sensor",
      "shortDescription": "200A rated high temperature current sensor for harsh industrial environments",
      "descriptionParagraphs": [
        "The HTFS 200-P is a high temperature current sensor designed for harsh industrial environments with operating temperatures up to 125°C.",
        "Features robust construction and high isolation voltage, making it ideal for heavy industrial applications.",
        "The HTFS 200-P is commonly used in welding equipment, induction heating, and industrial motor drives."
      ],
      "specifications": {
        "Rated Current": "200A",
        "Measurement Range": "±400A",
        "Supply Voltage": "±15V",
        "Output Type": "Current (100mA @ 200A)",
        "Accuracy": "±0.5%",
        "Response Time": "<1 μs",
        "Bandwidth": "100 kHz",
        "Isolation Voltage": "5.0 kV",
        "Operating Temperature": "-40°C to +125°C"
      },
      "image": "/assets/images/brands/lem/products/htfs-200-p.jpg",
      "datasheet": "/assets/datasheets/lem/htfs-series.pdf",
      "stock": 320,
      "moq": 5,
      "leadTime": "3-4 weeks",
      "price": "$45.00"
    },
    {
      "id": "htfs-1000-p",
      "partNumber": "HTFS 1000-P",
      "name": "HTFS 1000-P High Current Sensor",
      "shortDescription": "1000A rated high current sensor for heavy industrial and power distribution applications",
      "descriptionParagraphs": [
        "The HTFS 1000-P is a high current sensor designed for heavy industrial and power distribution applications requiring measurement up to 1000A.",
        "Features panel mount design and high isolation voltage for safe operation in high-power systems.",
        "The HTFS 1000-P is ideal for applications such as power distribution, grid-tied inverters, and large motor drives."
      ],
      "specifications": {
        "Rated Current": "1000A",
        "Measurement Range": "±2000A",
        "Supply Voltage": "±15V",
        "Output Type": "Current (100mA @ 1000A)",
        "Accuracy": "±0.5%",
        "Response Time": "<1 μs",
        "Bandwidth": "100 kHz",
        "Isolation Voltage": "6.0 kV",
        "Operating Temperature": "-40°C to +125°C"
      },
      "image": "/assets/images/brands/lem/products/htfs-1000-p.jpg",
      "datasheet": "/assets/datasheets/lem/htfs-series.pdf",
      "stock": 180,
      "moq": 2,
      "leadTime": "4-6 weeks",
      "price": "$120.00"
    },
    {
      "id": "hais-200-p",
      "partNumber": "HAIS 200-P",
      "name": "HAIS 200-P High Accuracy Industrial Sensor",
      "shortDescription": "200A rated high accuracy current sensor for precision industrial measurement",
      "descriptionParagraphs": [
        "The HAIS 200-P is a high accuracy current sensor designed for precision industrial measurement applications.",
        "Features closed-loop Hall effect technology with 0.1% accuracy for demanding measurement requirements.",
        "The HAIS 200-P is ideal for applications such as power quality analyzers, calibration equipment, and precision motor control."
      ],
      "specifications": {
        "Rated Current": "200A",
        "Measurement Range": "±400A",
        "Supply Voltage": "±15V",
        "Output Type": "Current (100mA @ 200A)",
        "Accuracy": "±0.1%",
        "Response Time": "<1 μs",
        "Bandwidth": "200 kHz",
        "Isolation Voltage": "5.0 kV",
        "Operating Temperature": "-40°C to +85°C"
      },
      "image": "/assets/images/brands/lem/products/hais-200-p.jpg",
      "datasheet": "/assets/datasheets/lem/hais-series.pdf",
      "stock": 250,
      "moq": 2,
      "leadTime": "4-6 weeks",
      "price": "$85.00"
    },
    {
      "id": "hais-600-p",
      "partNumber": "HAIS 600-P",
      "name": "HAIS 600-P High Accuracy High Current Sensor",
      "shortDescription": "600A rated high accuracy current sensor for precision high-current measurement",
      "descriptionParagraphs": [
        "The HAIS 600-P is a high accuracy current sensor designed for precision high-current measurement applications.",
        "Features closed-loop Hall effect technology with 0.1% accuracy for demanding measurement requirements up to 600A.",
        "The HAIS 600-P is ideal for applications such as power quality analyzers, grid monitoring, and precision industrial control."
      ],
      "specifications": {
        "Rated Current": "600A",
        "Measurement Range": "±1200A",
        "Supply Voltage": "±15V",
        "Output Type": "Current (100mA @ 600A)",
        "Accuracy": "±0.1%",
        "Response Time": "<1 μs",
        "Bandwidth": "200 kHz",
        "Isolation Voltage": "6.0 kV",
        "Operating Temperature": "-40°C to +85°C"
      },
      "image": "/assets/images/brands/lem/products/hais-600-p.jpg",
      "datasheet": "/assets/datasheets/lem/hais-series.pdf",
      "stock": 150,
      "moq": 2,
      "leadTime": "4-6 weeks",
      "price": "$150.00"
    }
  ],
  'automotive-sensors': [
    {
      "id": "ho-250-p",
      "partNumber": "HO 250-P",
      "name": "HO 250-P Automotive Current Sensor",
      "shortDescription": "250A rated AEC-Q100 qualified current sensor for automotive applications",
      "descriptionParagraphs": [
        "The HO 250-P is an AEC-Q100 qualified current sensor designed for automotive applications requiring measurement up to 250A.",
        "Features automotive-grade reliability with wide operating temperature range and high immunity to electromagnetic interference.",
        "The HO 250-P is ideal for applications such as EV motor control, battery management systems, and DC-DC converters in electric vehicles."
      ],
      "specifications": {
        "Rated Current": "250A",
        "Measurement Range": "±500A",
        "Supply Voltage": "5V",
        "Output Type": "Voltage (0.5V-4.5V)",
        "Accuracy": "±1%",
        "Response Time": "3.5 μs",
        "Bandwidth": "100 kHz",
        "Isolation Voltage": "4.0 kV",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100"
      },
      "image": "/assets/images/brands/lem/products/ho-250-p.jpg",
      "datasheet": "/assets/datasheets/lem/ho-series.pdf",
      "stock": 420,
      "moq": 50,
      "leadTime": "6-8 weeks",
      "price": "$22.00"
    },
    {
      "id": "ho-60-p",
      "partNumber": "HO 60-P",
      "name": "HO 60-P Compact Automotive Current Sensor",
      "shortDescription": "60A rated compact AEC-Q100 qualified current sensor for space-constrained automotive applications",
      "descriptionParagraphs": [
        "The HO 60-P is a compact AEC-Q100 qualified current sensor designed for space-constrained automotive applications.",
        "Features small form factor with high accuracy, making it ideal for applications where space is limited.",
        "The HO 60-P is commonly used in auxiliary systems, DC-DC converters, and battery monitoring in hybrid and electric vehicles."
      ],
      "specifications": {
        "Rated Current": "60A",
        "Measurement Range": "±150A",
        "Supply Voltage": "5V",
        "Output Type": "Voltage (0.5V-4.5V)",
        "Accuracy": "±1%",
        "Response Time": "3.5 μs",
        "Bandwidth": "100 kHz",
        "Isolation Voltage": "4.0 kV",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100"
      },
      "image": "/assets/images/brands/lem/products/ho-60-p.jpg",
      "datasheet": "/assets/datasheets/lem/ho-series.pdf",
      "stock": 580,
      "moq": 50,
      "leadTime": "6-8 weeks",
      "price": "$18.50"
    },
    {
      "id": "hmsr-20-sm",
      "partNumber": "HMSR 20-SM",
      "name": "HMSR 20-SM Surface Mount Automotive Sensor",
      "shortDescription": "20A rated surface mount AEC-Q100 qualified current sensor for PCB automotive applications",
      "descriptionParagraphs": [
        "The HMSR 20-SM is a surface mount AEC-Q100 qualified current sensor designed for PCB-mounted automotive applications.",
        "Features compact surface mount package with single 5V supply operation for easy integration into automotive electronics.",
        "The HMSR 20-SM is ideal for applications such as low-current monitoring, auxiliary systems, and distributed control modules in vehicles."
      ],
      "specifications": {
        "Rated Current": "20A",
        "Measurement Range": "±50A",
        "Supply Voltage": "5V",
        "Output Type": "Voltage (0.5V-4.5V)",
        "Accuracy": "±1%",
        "Response Time": "3.5 μs",
        "Bandwidth": "100 kHz",
        "Isolation Voltage": "3.0 kV",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100"
      },
      "image": "/assets/images/brands/lem/products/hmsr-20-sm.jpg",
      "datasheet": "/assets/datasheets/lem/hmsr-series.pdf",
      "stock": 750,
      "moq": 50,
      "leadTime": "6-8 weeks",
      "price": "$8.50"
    },
    {
      "id": "hmsr-6-sm",
      "partNumber": "HMSR 6-SM",
      "name": "HMSR 6-SM Compact Surface Mount Sensor",
      "shortDescription": "6A rated compact surface mount current sensor for low-current automotive applications",
      "descriptionParagraphs": [
        "The HMSR 6-SM is a compact surface mount current sensor designed for low-current automotive applications.",
        "Features ultra-compact package with high accuracy for precision current monitoring in space-constrained designs.",
        "The HMSR 6-SM is ideal for applications such as sensor monitoring, control circuits, and low-power subsystem monitoring."
      ],
      "specifications": {
        "Rated Current": "6A",
        "Measurement Range": "±15A",
        "Supply Voltage": "5V",
        "Output Type": "Voltage (0.5V-4.5V)",
        "Accuracy": "±1%",
        "Response Time": "3.5 μs",
        "Bandwidth": "100 kHz",
        "Isolation Voltage": "3.0 kV",
        "Operating Temperature": "-40°C to +125°C",
        "Qualification": "AEC-Q100"
      },
      "image": "/assets/images/brands/lem/products/hmsr-6-sm.jpg",
      "datasheet": "/assets/datasheets/lem/hmsr-series.pdf",
      "stock": 920,
      "moq": 50,
      "leadTime": "6-8 weeks",
      "price": "$6.50"
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

// 保存修改后的数据
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 成功添加 ${totalAdded} 个产品`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
