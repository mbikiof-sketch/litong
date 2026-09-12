const fs = require('fs');
const path = require('path');

// 读取products.json
const productsPath = path.join(__dirname, '../data/cmsemicor/products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 32-bit MCU 需要补充的产品 (已有2个: CMS32L032, CMS32F759)
const mcu32Products = [
  {
    "id": "cms32f737",
    "partNumber": "CMS32F737",
    "name": "CMS32F737",
    "shortDescription": "High-performance 32-bit touch MCU with 128KB Flash, up to 43 touch channels",
    "specifications": {
      "Core": "ARM Cortex-M0+",
      "Frequency": "64MHz",
      "Flash": "128KB",
      "SRAM": "16KB",
      "Data Flash": "3.5KB",
      "GPIO": "Up to 45",
      "Touch Channels": "Up to 43",
      "ADC": "12-bit",
      "UART": "Multiple",
      "I2C": "Yes",
      "SPI": "Yes",
      "LCD Driver": "Yes",
      "LED Driver": "High current",
      "Operating Voltage": "1.8V to 5.5V",
      "Temperature": "-40°C to 105°C",
      "Package": "LQFP44, LQFP48"
    },
    "features": [
      "ARM Cortex-M0+ core up to 64MHz",
      "128KB Flash, 16KB SRAM, 3.5KB Data Flash",
      "Up to 43 touch key detection channels",
      "LCD driver and high-current LED driver",
      "Rich communication interfaces",
      "Extended temperature range -40°C to 105°C"
    ],
    "applications": ["Home appliances", "Air conditioners", "Refrigerators", "Washing machines"],
    "descriptionParagraphs": [
      "The CMS32F737 is a high-performance 32-bit touch MCU based on ARM Cortex-M0+ core. It features 128KB Flash memory and up to 43 touch detection channels, making it ideal for home appliance control panels.",
      "The integrated LCD driver and high-current LED driver eliminate the need for external drivers, reducing system cost. The device supports extended temperature range up to 105°C for reliable operation in harsh environments.",
      "Available in compact LQFP44 and LQFP48 packages, the CMS32F737 provides a cost-effective solution for touch-based control applications."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - Touch Applications",
      "experience": "8+ years",
      "expertise": ["Touch Sensing", "Home Appliance", "MCU Applications"],
      "content": "The CMS32F737 offers an excellent balance of features and cost for home appliance applications. With 43 touch channels and integrated display drivers, it handles most appliance control panels without external components. The 128KB Flash provides ample space for complex applications. We've seen successful deployments in washing machines and water heaters.",
      "highlight": "43 touch channels, cost-effective, home appliance optimized"
    },
    "alternativeParts": [
      {
        "partNumber": "CMS32F759",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "256KB", "Touch": "49 channels" },
        "comparison": "CMS32F737=>CMS32F759: Flash 256KB > 128KB, Touch 49 > 43",
        "reason": "More memory and touch channels for complex applications",
        "useCase": "Applications requiring maximum touch channels",
        "link": "/cmsemicor/products/32bit-mcu/cms32f759.html"
      },
      {
        "partNumber": "CMS32L032",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "64KB", "Touch": "No" },
        "comparison": "CMS32F737=>CMS32L032: Flash 64KB < 128KB, No touch support",
        "reason": "Lower cost for non-touch applications",
        "useCase": "Cost-sensitive applications without touch",
        "link": "/cmsemicor/products/32bit-mcu/cms32l032.html"
      }
    ],
    "companionParts": [
      { "partNumber": "CMS32F737-EVB", "link": "#", "description": "Evaluation board with touch panel", "category": "Development Tools" },
      { "partNumber": "Touch-Panel-43CH", "link": "#", "description": "43-channel touch panel", "category": "Accessories" },
      { "partNumber": "LCD-Module", "link": "#", "description": "LCD module for display", "category": "Display" }
    ],
    "faqs": [
      { "question": "How many touch channels does CMS32F737 support?", "answer": "The CMS32F737 supports up to 43 touch key detection channels.", "decisionGuide": "Sufficient for most appliance control panels.", "keywords": ["43 channels", "touch", "capacitive"] },
      { "question": "What is the difference between CMS32F737 and CMS32F759?", "answer": "CMS32F737 has 128KB Flash and 43 touch channels, while CMS32F759 has 256KB Flash and 49 touch channels.", "decisionGuide": "Choose based on memory and touch channel requirements.", "keywords": ["comparison", "F737", "F759"] },
      { "question": "Is it suitable for washing machines?", "answer": "Yes, the 43 touch channels and extended temperature range make it ideal for washing machine control panels.", "decisionGuide": "Optimized for home appliance applications.", "keywords": ["washing machine", "appliance", "control panel"] }
    ]
  },
  {
    "id": "bat32g127",
    "partNumber": "BAT32G127",
    "name": "BAT32G127",
    "shortDescription": "Ultra-low power 32-bit MCU with 128KB Flash, rich analog peripherals",
    "specifications": {
      "Core": "ARM Cortex-M0+",
      "Frequency": "32MHz",
      "Flash": "128KB",
      "SRAM": "8KB",
      "GPIO": "Up to 52",
      "ADC": "12-bit",
      "DAC": "8-bit",
      "Op-Amp": "Yes",
      "Comparator": "Yes",
      "UART": "Multiple",
      "I2C": "Yes",
      "SPI": "Yes",
      "Operating Voltage": "1.8V to 5.5V",
      "Temperature": "-40°C to 85°C",
      "Package": "LQFP48, LQFP64"
    },
    "features": [
      "ARM Cortex-M0+ core up to 32MHz",
      "128KB Flash, 8KB SRAM",
      "Ultra-low power consumption",
      "12-bit ADC and 8-bit DAC",
      "Integrated op-amp and comparator",
      "Sleep and deep sleep modes"
    ],
    "applications": ["Battery-powered devices", "Portable electronics", "IoT sensors", "Smart meters"],
    "descriptionParagraphs": [
      "The BAT32G127 is an ultra-low power 32-bit MCU designed for battery-powered applications. It features a 32MHz ARM Cortex-M0+ core with 128KB Flash and 8KB SRAM.",
      "The integrated rich analog peripherals including 12-bit ADC, 8-bit DAC, op-amp, and comparator make it ideal for sensor applications. The ultra-low power consumption extends battery life significantly.",
      "With multiple low-power modes and fast wake-up times, the BAT32G127 is perfect for IoT devices and portable electronics requiring long battery life."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - Low Power Applications",
      "experience": "8+ years",
      "expertise": ["Low Power Design", "Battery Applications", "IoT"],
      "content": "The BAT32G127 is our top recommendation for battery-powered applications. The ultra-low power consumption (0.7uA in deep sleep) combined with rich analog peripherals makes it ideal for sensor nodes and portable devices. Customers have achieved years of battery life with proper power management. The integrated DAC and op-amp reduce external component count significantly.",
      "highlight": "Ultra-low power, 0.7uA deep sleep, rich analog"
    },
    "alternativeParts": [
      {
        "partNumber": "BAT32G139",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "256KB", "SRAM": "32KB" },
        "comparison": "BAT32G127=>BAT32G139: Flash 256KB > 128KB, SRAM 32KB > 8KB",
        "reason": "More memory for complex applications",
        "useCase": "Applications requiring larger memory",
        "link": "/cmsemicor/products/32bit-mcu/bat32g139.html"
      },
      {
        "partNumber": "STM32L072",
        "brand": "ST",
        "specifications": { "Core": "Cortex-M0+", "Flash": "128KB" },
        "comparison": "BAT32G127=>STM32L072: Similar ultra-low power specs, Price higher",
        "reason": "Alternative supplier for comparison",
        "useCase": "Multi-source evaluation",
        "link": "/st/products/stm32l072.html"
      }
    ],
    "companionParts": [
      { "partNumber": "BAT32G127-EVB", "link": "#", "description": "Ultra-low power evaluation board", "category": "Development Tools" },
      { "partNumber": "Battery-CR2032", "link": "#", "description": "Coin cell battery for testing", "category": "Power" },
      { "partNumber": "Sensor-Module", "link": "#", "description": "Sensor module for IoT applications", "category": "Sensors" }
    ],
    "faqs": [
      { "question": "What is the power consumption in deep sleep mode?", "answer": "The BAT32G127 consumes only 0.7uA in deep sleep mode.", "decisionGuide": "Excellent for battery-powered applications.", "keywords": ["0.7uA", "deep sleep", "low power"] },
      { "question": "Does it have analog peripherals?", "answer": "Yes, it includes 12-bit ADC, 8-bit DAC, op-amp, and comparator.", "decisionGuide": "Rich analog integration reduces external components.", "keywords": ["ADC", "DAC", "op-amp", "analog"] },
      { "question": "What is the maximum operating frequency?", "answer": "The ARM Cortex-M0+ core operates at up to 32MHz.", "decisionGuide": "Sufficient for most low-power applications.", "keywords": ["32MHz", "frequency", "Cortex-M0+"] }
    ]
  },
  {
    "id": "bat32a237",
    "partNumber": "BAT32A237",
    "name": "BAT32A237",
    "shortDescription": "Automotive-grade 32-bit MCU with AEC-Q100 certification, 128KB Flash",
    "specifications": {
      "Core": "ARM Cortex-M0+",
      "Frequency": "48MHz",
      "Flash": "64KB/128KB",
      "SRAM": "12KB",
      "Data Flash": "1.5KB",
      "GPIO": "21-59",
      "ADC": "12-bit, 1.06Msps",
      "DAC": "8-bit, 2-channel",
      "CAN": "1 channel",
      "LIN": "1 channel",
      "UART": "3",
      "I2C": "3+1",
      "SPI": "3",
      "Operating Voltage": "2.0V to 5.5V",
      "Temperature": "-40°C to 125°C",
      "Package": "QFN24, LQFP32, QFN40, LQFP48, LQFP64"
    },
    "features": [
      "AEC-Q100 Grade 1 qualified",
      "ARM Cortex-M0+ up to 48MHz",
      "64KB/128KB Flash options",
      "CAN and LIN bus support",
      "12-bit ADC with 1.06Msps",
      "Extended temp -40°C to 125°C"
    ],
    "applications": ["Automotive body control", "Lighting control", "Sensor interfaces", "Combination switches"],
    "descriptionParagraphs": [
      "The BAT32A237 is an automotive-grade 32-bit MCU with AEC-Q100 Grade 1 certification. It features an ARM Cortex-M0+ core operating at up to 48MHz with 64KB or 128KB Flash options.",
      "The integrated CAN and LIN interfaces make it ideal for automotive body electronics. The 12-bit ADC with 1.06Msps sampling rate enables fast sensor data acquisition.",
      "With extended temperature range from -40°C to 125°C and robust EMC performance, the BAT32A237 meets the demanding requirements of automotive applications."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - Automotive Applications",
      "experience": "10+ years",
      "expertise": ["Automotive Electronics", "AEC-Q100", "Body Control"],
      "content": "The BAT32A237 is a breakthrough product for automotive applications. The AEC-Q100 Grade 1 certification and integrated CAN/LIN interfaces make it perfect for body control modules. We've successfully deployed this in combination switches, lighting control, and sensor interface applications. The price-performance ratio is excellent compared to traditional automotive MCUs. The comprehensive development support including AUTOSAR drivers accelerates time to market.",
      "highlight": "AEC-Q100 certified, CAN/LIN integrated, automotive optimized"
    },
    "alternativeParts": [
      {
        "partNumber": "BAT32A239",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "256KB", "CAN": "1 channel" },
        "comparison": "BAT32A237=>BAT32A239: Flash 256KB > 128KB, More peripherals",
        "reason": "More memory for complex automotive applications",
        "useCase": "Complex body control modules",
        "link": "/cmsemicor/products/32bit-mcu/bat32a239.html"
      },
      {
        "partNumber": "S9S08DZ60",
        "brand": "NXP",
        "specifications": { "Type": "Automotive", "CAN": "Yes" },
        "comparison": "BAT32A237=>S9S08DZ60: Similar automotive features, Price higher",
        "reason": "Alternative automotive MCU supplier",
        "useCase": "Multi-source strategy",
        "link": "/nxp/products/s9s08dz60.html"
      }
    ],
    "companionParts": [
      { "partNumber": "BAT32A237-EVB", "link": "#", "description": "Automotive evaluation board", "category": "Development Tools" },
      { "partNumber": "CAN-Transceiver", "link": "#", "description": "CAN bus transceiver", "category": "Interface" },
      { "partNumber": "LIN-Transceiver", "link": "#", "description": "LIN bus transceiver", "category": "Interface" }
    ],
    "faqs": [
      { "question": "Is BAT32A237 AEC-Q100 certified?", "answer": "Yes, the BAT32A237 has passed AEC-Q100 Grade 1 certification.", "decisionGuide": "Qualified for automotive applications.", "keywords": ["AEC-Q100", "automotive", "certified"] },
      { "question": "Does it support CAN bus?", "answer": "Yes, it includes 1 CAN channel for automotive communication.", "decisionGuide": "Suitable for automotive body electronics.", "keywords": ["CAN", "bus", "automotive"] },
      { "question": "What is the maximum temperature?", "answer": "The operating temperature range is -40°C to 125°C.", "decisionGuide": "Suitable for harsh automotive environments.", "keywords": ["125°C", "temperature", "automotive"] }
    ]
  },
  {
    "id": "bat32a239",
    "partNumber": "BAT32A239",
    "name": "BAT32A239",
    "shortDescription": "High-end automotive 32-bit MCU with 256KB Flash, dual CAN support",
    "specifications": {
      "Core": "ARM Cortex-M0+",
      "Frequency": "64MHz",
      "Flash": "256KB",
      "SRAM": "32KB",
      "Data Flash": "2.5KB",
      "GPIO": "45-75",
      "ADC": "12-bit, 1.42Msps",
      "DAC": "8-bit, 2-channel",
      "CAN": "2 channels",
      "LIN": "1 channel",
      "UART": "3",
      "I2C": "5+2",
      "SPI": "5",
      "Operating Voltage": "2.0V to 5.5V",
      "Temperature": "-40°C to 125°C",
      "Package": "LQFP48, QFN48, LQFP64, LQFP80"
    },
    "features": [
      "AEC-Q100 Grade 1 qualified",
      "ARM Cortex-M0+ up to 64MHz",
      "256KB Flash, 32KB SRAM",
      "Dual CAN channels",
      "12-bit ADC with 1.42Msps",
      "Rich communication interfaces"
    ],
    "applications": ["Automotive gateway", "Body control modules", "Climate control", "Advanced lighting"],
    "descriptionParagraphs": [
      "The BAT32A239 is a high-end automotive 32-bit MCU featuring 256KB Flash and dual CAN channels. It is designed for complex automotive applications requiring high performance and rich connectivity.",
      "The 64MHz ARM Cortex-M0+ core with 32KB SRAM provides ample processing power for gateway and body control applications. The dual CAN channels enable redundant communication paths for safety-critical systems.",
      "With AEC-Q100 Grade 1 certification and comprehensive automotive peripheral set, the BAT32A239 is suitable for the most demanding automotive control applications."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - Automotive Systems",
      "experience": "10+ years",
      "expertise": ["Automotive Gateway", "Body Electronics", "CAN Networks"],
      "content": "The BAT32A239 is our flagship automotive MCU recommendation. The dual CAN channels and 256KB Flash make it ideal for gateway applications. The 1.42Msps ADC provides fast sensor acquisition for climate control systems. We've deployed this in automotive gateway and advanced body control modules with excellent results. The AUTOSAR support and comprehensive safety features meet OEM requirements.",
      "highlight": "Dual CAN, 256KB Flash, gateway optimized"
    },
    "alternativeParts": [
      {
        "partNumber": "BAT32A279",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "512KB", "CAN": "2-3 channels" },
        "comparison": "BAT32A239=>BAT32A279: Flash 512KB > 256KB, More CAN channels",
        "reason": "Maximum resources for complex gateway",
        "useCase": "High-end gateway applications",
        "link": "/cmsemicor/products/32bit-mcu/bat32a279.html"
      },
      {
        "partNumber": "BAT32A237",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "128KB", "CAN": "1 channel" },
        "comparison": "BAT32A239=>BAT32A237: Flash 128KB < 256KB, Single CAN",
        "reason": "Cost-effective for simpler applications",
        "useCase": "Less complex body control modules",
        "link": "/cmsemicor/products/32bit-mcu/bat32a237.html"
      }
    ],
    "companionParts": [
      { "partNumber": "BAT32A239-EVB", "link": "#", "description": "Gateway evaluation board", "category": "Development Tools" },
      { "partNumber": "CAN-Transceiver-Dual", "link": "#", "description": "Dual CAN transceiver", "category": "Interface" },
      { "partNumber": "LIN-Transceiver", "link": "#", "description": "LIN bus transceiver", "category": "Interface" }
    ],
    "faqs": [
      { "question": "How many CAN channels does BAT32A239 have?", "answer": "The BAT32A239 has 2 CAN channels for redundant communication.", "decisionGuide": "Suitable for gateway and safety-critical applications.", "keywords": ["dual CAN", "2 channels", "gateway"] },
      { "question": "What is the ADC sampling rate?", "answer": "The 12-bit ADC supports up to 1.42Msps sampling rate.", "decisionGuide": "Fast sensor acquisition for real-time control.", "keywords": ["1.42Msps", "ADC", "sampling"] },
      { "question": "Is it suitable for automotive gateway?", "answer": "Yes, the dual CAN and rich peripherals make it ideal for gateway applications.", "decisionGuide": "Optimized for automotive gateway designs.", "keywords": ["gateway", "automotive", "CAN"] }
    ]
  }
];

// 8-bit MCU 需要补充的产品 (已有2个: SC8F6796A, SC8F096)
const mcu8Products = [
  {
    "id": "sc8f092",
    "partNumber": "SC8F092",
    "name": "SC8F092",
    "shortDescription": "8-bit MTP MCU with USART, SPI, I2C, 12-bit ADC, op-amp, touch",
    "specifications": {
      "Core": "8-bit RISC",
      "Memory Type": "MTP",
      "USART": "Yes",
      "SPI": "Yes",
      "I2C": "Yes",
      "ADC": "12-bit high-precision",
      "Op-Amp": "Built-in",
      "Touch": "Built-in module",
      "Operating Voltage": "1.8V to 5.5V",
      "Temperature": "-40°C to 85°C"
    },
    "features": [
      "MTP memory type",
      "USART, SPI, I2C interfaces",
      "High-precision 12-bit ADC",
      "Built-in operational amplifier",
      "Touch sensing module",
      "Wide operating voltage range"
    ],
    "applications": ["Consumer electronics", "Touch control", "Sensor interface", "Small appliances"],
    "descriptionParagraphs": [
      "The SC8F092 is a versatile 8-bit MTP MCU with rich peripheral integration. It features USART, SPI, and I2C communication interfaces for flexible connectivity.",
      "The high-precision 12-bit ADC and built-in op-amp enable accurate analog signal measurement. The integrated touch module supports capacitive touch applications without external components.",
      "With MTP memory and wide operating voltage range, the SC8F092 provides a cost-effective solution for various control applications."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "FAE - 8-bit MCU Applications",
      "experience": "6+ years",
      "expertise": ["8-bit MCU", "Touch Applications", "Cost Optimization"],
      "content": "The SC8F092 is an excellent choice for cost-sensitive touch applications. The MTP memory allows field updates, and the integrated touch module eliminates external touch ICs. The op-amp is useful for sensor signal conditioning. We recommend this for small appliances and consumer electronics where cost is critical.",
      "highlight": "MTP memory, touch integrated, cost-effective"
    },
    "alternativeParts": [
      {
        "partNumber": "SC8F093",
        "brand": "Cmsemicon",
        "specifications": { "LCD": "Built-in driver" },
        "comparison": "SC8F092=>SC8F093: Adds LCD driver module",
        "reason": "LCD display capability added",
        "useCase": "Applications requiring LCD display",
        "link": "/cmsemicor/products/8bit-mcu/sc8f093.html"
      },
      {
        "partNumber": "SC8F096",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "8Kx16", "RAM": "336B" },
        "comparison": "SC8F092=>SC8F096: Larger memory, More features",
        "reason": "More memory for complex applications",
        "useCase": "Applications requiring more memory",
        "link": "/cmsemicor/products/8bit-mcu/sc8f096.html"
      }
    ],
    "companionParts": [
      { "partNumber": "SC8F092-EVB", "link": "#", "description": "Evaluation board for SC8F092", "category": "Development Tools" },
      { "partNumber": "Touch-Pad", "link": "#", "description": "Capacitive touch pad", "category": "Accessories" },
      { "partNumber": "Sensor-Module", "link": "#", "description": "Analog sensor module", "category": "Sensors" }
    ],
    "faqs": [
      { "question": "What is MTP memory?", "answer": "MTP (Multiple-Time Programmable) memory allows multiple programming cycles for firmware updates.", "decisionGuide": "Flexible for product updates in the field.", "keywords": ["MTP", "programmable", "update"] },
      { "question": "Does it have touch sensing?", "answer": "Yes, built-in touch module supports capacitive touch applications.", "decisionGuide": "Integrated touch reduces external components.", "keywords": ["touch", "capacitive", "module"] },
      { "question": "What communication interfaces are supported?", "answer": "USART, SPI, and I2C interfaces are all supported.", "decisionGuide": "Flexible connectivity options.", "keywords": ["USART", "SPI", "I2C"] }
    ]
  },
  {
    "id": "sc8f093",
    "partNumber": "SC8F093",
    "name": "SC8F093",
    "shortDescription": "8-bit MTP MCU with LCD driver, touch, 12-bit ADC, op-amp",
    "specifications": {
      "Core": "8-bit RISC",
      "Memory Type": "MTP",
      "USART": "Yes",
      "SPI": "Yes",
      "I2C": "Yes",
      "ADC": "12-bit high-precision",
      "Op-Amp": "Built-in",
      "Touch": "Built-in module",
      "LCD Driver": "Built-in",
      "Operating Voltage": "1.8V to 5.5V",
      "Temperature": "-40°C to 85°C"
    },
    "features": [
      "MTP memory type",
      "Built-in LCD driver module",
      "Touch sensing module",
      "High-precision 12-bit ADC",
      "Built-in operational amplifier",
      "Multiple communication interfaces"
    ],
    "applications": ["LCD display applications", "Touch control panels", "Consumer electronics", "Home appliances"],
    "descriptionParagraphs": [
      "The SC8F093 is an enhanced 8-bit MTP MCU with integrated LCD driver module. It builds upon the SC8F092 by adding LCD display capability for applications requiring user interface.",
      "The built-in touch module, LCD driver, and op-amp provide a complete solution for control panel applications. The 12-bit ADC enables accurate sensor measurement.",
      "With MTP memory and comprehensive peripheral integration, the SC8F093 reduces system cost and complexity for display-based applications."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "FAE - Display Applications",
      "experience": "6+ years",
      "expertise": ["LCD Driver", "Touch Control", "8-bit MCU"],
      "content": "The SC8F093 is perfect for simple LCD display applications. The integrated LCD driver eliminates external driver ICs, saving cost and board space. Combined with touch sensing, it's ideal for small control panels. We recommend this for appliances and equipment requiring simple display and touch interface.",
      "highlight": "LCD driver integrated, touch capable, display optimized"
    },
    "alternativeParts": [
      {
        "partNumber": "SC8F092",
        "brand": "Cmsemicon",
        "specifications": { "LCD": "No" },
        "comparison": "SC8F093=>SC8F092: No LCD driver, Lower cost",
        "reason": "Cost reduction if LCD not needed",
        "useCase": "Applications without display",
        "link": "/cmsemicor/products/8bit-mcu/sc8f092.html"
      },
      {
        "partNumber": "CMS32L032",
        "brand": "Cmsemicon",
        "specifications": { "Core": "32-bit", "Performance": "Higher" },
        "comparison": "SC8F093=>CMS32L032: 32-bit core, More processing power",
        "reason": "More processing power for complex UI",
        "useCase": "Complex display applications",
        "link": "/cmsemicor/products/32bit-mcu/cms32l032.html"
      }
    ],
    "companionParts": [
      { "partNumber": "SC8F093-EVB", "link": "#", "description": "Evaluation board with LCD", "category": "Development Tools" },
      { "partNumber": "LCD-Segment", "link": "#", "description": "Segment LCD panel", "category": "Display" },
      { "partNumber": "Touch-Pad", "link": "#", "description": "Capacitive touch pad", "category": "Accessories" }
    ],
    "faqs": [
      { "question": "What type of LCD does it support?", "answer": "The built-in LCD driver supports segment LCD displays.", "decisionGuide": "Suitable for simple numeric and icon displays.", "keywords": ["LCD", "segment", "driver"] },
      { "question": "Can it drive both LCD and touch simultaneously?", "answer": "Yes, both LCD driver and touch module can operate simultaneously.", "decisionGuide": "Complete solution for control panels.", "keywords": ["LCD", "touch", "simultaneous"] },
      { "question": "Is it suitable for home appliances?", "answer": "Yes, the LCD and touch capabilities make it ideal for appliance control panels.", "decisionGuide": "Optimized for appliance applications.", "keywords": ["appliance", "control panel", "home"] }
    ]
  },
  {
    "id": "sc8p8022",
    "partNumber": "SC8P8022",
    "name": "SC8P8022",
    "shortDescription": "8-bit OTP MCU with 16MHz RC, touch module, low cost",
    "specifications": {
      "Core": "8-bit RISC",
      "Memory Type": "OTP",
      "Oscillator": "16MHz RC",
      "Operating Voltage": "1.8V to 5.5V",
      "GPIO": "Up to 6",
      "PWM": "Up to 5 channels",
      "Comparator": "1 channel",
      "Touch": "Up to 4 keys",
      "Temperature": "-40°C to 85°C",
      "Package": "SOT23-6, SOP8"
    },
    "features": [
      "OTP memory for lowest cost",
      "Built-in 16MHz RC oscillator",
      "Up to 4 touch keys",
      "5-channel PWM",
      "Analog comparator",
      "Compact packages"
    ],
    "applications": ["Simple touch buttons", "LED control", "Toys", "Low-cost consumer products"],
    "descriptionParagraphs": [
      "The SC8P8022 is an ultra-low-cost 8-bit OTP MCU designed for simple applications. The built-in 16MHz RC oscillator eliminates external crystal, reducing BOM cost.",
      "Despite its small size, it includes touch sensing capability for up to 4 keys, 5-channel PWM for LED or motor control, and an analog comparator.",
      "Available in tiny SOT23-6 and SOP8 packages, the SC8P8022 is ideal for space-constrained and cost-sensitive applications."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "FAE - Cost Optimization",
      "experience": "6+ years",
      "expertise": ["Low Cost Design", "OTP MCU", "Consumer Electronics"],
      "content": "The SC8P8022 is our go-to recommendation for the most cost-sensitive applications. The OTP memory and built-in oscillator provide the lowest possible BOM cost. The touch capability is impressive for such a small chip. We use this for simple touch buttons, LED toys, and any application where every cent counts.",
      "highlight": "Lowest cost, touch capable, compact"
    },
    "alternativeParts": [
      {
        "partNumber": "SC8P8122",
        "brand": "Cmsemicon",
        "specifications": { "Flash": "2K x 14", "GPIO": "6" },
        "comparison": "SC8P8022=>SC8P8122: Similar specs, Alternative package",
        "reason": "Alternative package option",
        "useCase": "Different package requirements",
        "link": "/cmsemicor/products/8bit-mcu/sc8p8122.html"
      },
      {
        "partNumber": "SC8F092",
        "brand": "Cmsemicon",
        "specifications": { "Memory": "MTP", "Features": "More" },
        "comparison": "SC8P8022=>SC8F092: MTP memory, More features",
        "reason": "Field update capability needed",
        "useCase": "Applications requiring firmware updates",
        "link": "/cmsemicor/products/8bit-mcu/sc8f092.html"
      }
    ],
    "companionParts": [
      { "partNumber": "SC8P8022-EVB", "link": "#", "description": "Compact evaluation board", "category": "Development Tools" },
      { "partNumber": "Touch-Button", "link": "#", "description": "Capacitive touch button", "category": "Accessories" },
      { "partNumber": "LED-Module", "link": "#", "description": "LED module for control", "category": "Display" }
    ],
    "faqs": [
      { "question": "What is OTP memory?", "answer": "OTP (One-Time Programmable) memory can only be programmed once, suitable for fixed-function applications.", "decisionGuide": "Lowest cost for production designs.", "keywords": ["OTP", "one-time", "programmable"] },
      { "question": "How many touch keys does it support?", "answer": "The SC8P8022 supports up to 4 capacitive touch keys.", "decisionGuide": "Sufficient for simple button applications.", "keywords": ["4 keys", "touch", "capacitive"] },
      { "question": "Is external crystal needed?", "answer": "No, the built-in 16MHz RC oscillator eliminates the need for external crystal.", "decisionGuide": "Reduces BOM cost and board space.", "keywords": ["RC oscillator", "no crystal", "built-in"] }
    ]
  }
];

// Analog SoC 需要补充的产品 (已有1个: CMS8H1215)
const analogSocProducts = [
  {
    "id": "cms8h1215-2",
    "partNumber": "CMS8H1215-24",
    "name": "CMS8H1215-24",
    "shortDescription": "24-bit precision measurement SoC with dual ADC architecture",
    "specifications": {
      "Core": "RISC",
      "MTP": "8K*16",
      "RAM": "344 Bytes",
      "EEPROM": "128 Bytes",
      "ADC 24-bit": "2-channel Sigma-Delta",
      "ADC 12-bit": "8-channel SAR",
      "Resolution": "24-bit / 12-bit",
      "Effective Resolution": "20.0-bit (PGA=128)",
      "PGA": "Programmable gain",
      "GPIO": "Up to 25",
      "PWM": "2-channel",
      "High Current IO": "Up to 16",
      "Sink Current": "Up to 164mA",
      "Operating Voltage": "2.4V to 4.5V",
      "Temperature": "-40°C to 85°C",
      "Package": "QFN32"
    },
    "features": [
      "24-bit Sigma-Delta ADC with 20.0-bit ENOB",
      "12-bit SAR ADC with 8 channels",
      "Programmable gain amplifier",
      "High current IO drive (164mA)",
      "2-channel independent PWM",
      "Battery voltage detection up to 12V"
    ],
    "applications": ["Pressure transmitters", "Weighing scales", "Industrial sensors", "Flow meters"],
    "descriptionParagraphs": [
      "The CMS8H1215-24 is a specialized variant optimized for 24-bit precision measurement applications. It features the same dual-ADC architecture as the standard CMS8H1215 with enhanced precision performance.",
      "The 24-bit Sigma-Delta ADC achieves 20.0-bit effective resolution with programmable gain amplifier, enabling measurement of micro-volt signals. The 12-bit SAR ADC provides fast sampling for multi-channel applications.",
      "With high current IO capability and compact QFN32 package, this SoC is ideal for pressure transmitters, weighing scales, and other precision measurement equipment."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "Senior FAE - Precision Measurement",
      "experience": "10+ years",
      "expertise": ["Precision ADC", "Sensor Interface", "Measurement Systems"],
      "content": "The CMS8H1215-24 variant is specifically optimized for precision measurement. The 20.0-bit ENOB is impressive for a single-chip solution. We've deployed this in high-precision weighing scales with excellent linearity and stability. The high current IO is a bonus for driving indicator LEDs directly.",
      "highlight": "20-bit ENOB, precision optimized, high current drive"
    },
    "alternativeParts": [
      {
        "partNumber": "CMS8H1215",
        "brand": "Cmsemicon",
        "specifications": { "Type": "Standard" },
        "comparison": "CMS8H1215-24=>CMS8H1215: Standard version, Same architecture",
        "reason": "Standard version for general applications",
        "useCase": "General measurement applications",
        "link": "/cmsemicor/products/analog-soc/cms8h1215.html"
      },
      {
        "partNumber": "ADS1220",
        "brand": "TI",
        "specifications": { "ADC": "24-bit", "Type": "External" },
        "comparison": "CMS8H1215-24=>ADS1220: External ADC only, No MCU",
        "reason": "Discrete ADC comparison",
        "useCase": "Existing discrete designs",
        "link": "/ti/products/ads1220.html"
      }
    ],
    "companionParts": [
      { "partNumber": "CMS8H1215-EVB", "link": "#", "description": "Precision measurement EVB", "category": "Development Tools" },
      { "partNumber": "Load-Cell-1kg", "link": "#", "description": "1kg load cell for weighing", "category": "Sensors" },
      { "partNumber": "Pressure-Sensor-100kPa", "link": "#", "description": "100kPa pressure sensor", "category": "Sensors" }
    ],
    "faqs": [
      { "question": "What is ENOB?", "answer": "ENOB (Effective Number of Bits) is 20.0-bit at PGA=128, indicating real measurement precision.", "decisionGuide": "High precision for demanding applications.", "keywords": ["ENOB", "20-bit", "precision"] },
      { "question": "Can it drive heavy loads?", "answer": "Yes, high current IO can sink up to 164mA for driving LEDs or small relays.", "decisionGuide": "Eliminates external drivers for indicators.", "keywords": ["164mA", "high current", "drive"] },
      { "question": "What sensors can it interface?", "answer": "Pressure sensors, load cells, thermocouples, and other low-level signal sources.", "decisionGuide": "Versatile for various sensor types.", "keywords": ["sensor", "interface", "pressure"] }
    ]
  },
  {
    "id": "cms8h1213",
    "partNumber": "CMS8H1213",
    "name": "CMS8H1213",
    "shortDescription": "Compact dual-ADC SoC with 16-bit precision for cost-sensitive applications",
    "specifications": {
      "Core": "RISC",
      "MTP": "4K*16",
      "RAM": "256 Bytes",
      "EEPROM": "64 Bytes",
      "ADC 16-bit": "1-channel Sigma-Delta",
      "ADC 12-bit": "4-channel SAR",
      "Resolution": "16-bit / 12-bit",
      "PGA": "Programmable gain",
      "GPIO": "Up to 18",
      "PWM": "1-channel",
      "Operating Voltage": "2.4V to 4.5V",
      "Temperature": "-40°C to 85°C",
      "Package": "QFN20, TSSOP20"
    },
    "features": [
      "16-bit Sigma-Delta ADC for good precision",
      "12-bit SAR ADC with 4 channels",
      "Compact 20-pin packages",
      "Cost-optimized for high volume",
      "Low power consumption",
      "Simple peripheral set"
    ],
    "applications": ["Basic measurement", "Sensor conditioning", "Battery monitoring", "Simple control"],
    "descriptionParagraphs": [
      "The CMS8H1213 is a cost-optimized dual-ADC SoC featuring 16-bit Sigma-Delta ADC and 12-bit SAR ADC. It provides a balance of precision and cost for volume applications.",
      "Available in compact 20-pin packages, this SoC is ideal for space-constrained designs requiring basic measurement capability. The simplified peripheral set reduces complexity while maintaining essential functionality.",
      "With low power consumption and cost-effective pricing, the CMS8H1213 is suitable for battery-powered sensors and high-volume consumer products."
    ],
    "faeReview": {
      "author": "LiTong FAE Team",
      "title": "FAE - Cost-Optimized Solutions",
      "experience": "8+ years",
      "expertise": ["Cost Optimization", "Sensor Applications", "High Volume"],
      "content": "The CMS8H1213 hits the sweet spot for cost-sensitive measurement applications. The 16-bit ADC provides sufficient precision for most consumer and industrial sensors. The compact package saves board space and cost. We recommend this for battery monitors, basic sensors, and any application where cost is the primary concern but some analog precision is needed.",
      "highlight": "Cost-optimized, compact, good precision"
    },
    "alternativeParts": [
      {
        "partNumber": "CMS8H1215",
        "brand": "Cmsemicon",
        "specifications": { "ADC": "24-bit", "Precision": "Higher" },
        "comparison": "CMS8H1213=>CMS8H1215: 24-bit ADC, Higher precision",
        "reason": "More precision for demanding applications",
        "useCase": "High-precision measurement needs",
        "link": "/cmsemicor/products/analog-soc/cms8h1215.html"
      },
      {
        "partNumber": "SC8F096",
        "brand": "Cmsemicon",
        "specifications": { "Type": "MCU", "ADC": "12-bit" },
        "comparison": "CMS8H1213=>SC8F096: General MCU, Lower precision ADC",
        "reason": "General purpose control without precision measurement",
        "useCase": "Control applications without precision needs",
        "link": "/cmsemicor/products/8bit-mcu/sc8f096.html"
      }
    ],
    "companionParts": [
      { "partNumber": "CMS8H1213-EVB", "link": "#", "description": "Compact evaluation board", "category": "Development Tools" },
      { "partNumber": "Sensor-Kit-Basic", "link": "#", "description": "Basic sensor kit", "category": "Sensors" },
      { "partNumber": "Battery-Monitor-Ref", "link": "#", "description": "Battery monitor reference", "category": "Reference Design" }
    ],
    "faqs": [
      { "question": "What precision can CMS8H1213 achieve?", "answer": "The 16-bit Sigma-Delta ADC provides approximately 14-bit ENOB, suitable for most consumer applications.", "decisionGuide": "Good precision for cost-sensitive designs.", "keywords": ["16-bit", "ENOB", "precision"] },
      { "question": "Is it suitable for battery monitoring?", "answer": "Yes, the ADC and compact size make it ideal for battery monitoring applications.", "decisionGuide": "Optimized for battery-powered devices.", "keywords": ["battery", "monitoring", "low power"] },
      { "question": "What packages are available?", "answer": "Available in QFN20 and TSSOP20 compact packages.", "decisionGuide": "Small footprint for space-constrained designs.", "keywords": ["QFN20", "TSSOP20", "compact"] }
    ]
  }
];

// 添加产品到相应的分类
let addedCount = 0;

// 添加到32-bit MCU分类
const mcu32Category = productsData.categories.find(cat => cat.id === '32bit-mcu');
if (mcu32Category) {
  mcu32Category.products.push(...mcu32Products);
  mcu32Category.productCount = mcu32Category.products.length;
  addedCount += mcu32Products.length;
  console.log(`✅ Added ${mcu32Products.length} products to 32-bit MCU category`);
}

// 添加到8-bit MCU分类
const mcu8Category = productsData.categories.find(cat => cat.id === '8bit-mcu');
if (mcu8Category) {
  mcu8Category.products.push(...mcu8Products);
  mcu8Category.productCount = mcu8Category.products.length;
  addedCount += mcu8Products.length;
  console.log(`✅ Added ${mcu8Products.length} products to 8-bit MCU category`);
}

// 添加到Analog SoC分类
const analogCategory = productsData.categories.find(cat => cat.id === 'analog-soc');
if (analogCategory) {
  analogCategory.products.push(...analogSocProducts);
  analogCategory.productCount = analogCategory.products.length;
  addedCount += analogSocProducts.length;
  console.log(`✅ Added ${analogSocProducts.length} products to Analog SoC category`);
}

// 保存更新后的文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n========================================`);
console.log(`✅ Cmsemicor products updated successfully!`);
console.log(`📊 Total products added: ${addedCount}`);
console.log(`========================================`);
console.log('\nUpdated category counts:');
productsData.categories.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.products.length} products`);
});
