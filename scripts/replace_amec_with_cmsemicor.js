const fs = require('fs');
const path = require('path');

// 删除amec目录
const amecDir = path.join(__dirname, '../data/amec');
if (fs.existsSync(amecDir)) {
  fs.rmSync(amecDir, { recursive: true, force: true });
  console.log('✅ Deleted amec directory');
}

// 创建cmsemicor目录
const cmsemicorDir = path.join(__dirname, '../data/cmsemicor');
if (!fs.existsSync(cmsemicorDir)) {
  fs.mkdirSync(cmsemicorDir, { recursive: true });
  console.log('✅ Created cmsemicor directory');
}

// 创建brand.json
const brandData = {
  "name": "cmsemicor",
  "displayName": "Cmsemicon (中微半导体)",
  "logo": "/assets/brands/cmsemicor/logo.svg",
  "tagline": "Leading MCU and Analog IC Manufacturer - 32-bit and 8-bit Microcontrollers",
  "description": "Cmsemicon is a leading Chinese semiconductor company specializing in MCU (microcontroller), analog IC, and power management chips. The company provides comprehensive solutions for consumer electronics, industrial control, automotive, and IoT applications.",
  "longDescription": "Cmsemicon (China Micro Semicon Co., Ltd., stock code: 688380.SH) is a leading Chinese semiconductor design company headquartered in Shenzhen. Founded in 2001, Cmsemicon has established itself as a key player in the MCU and analog IC market, with products widely used in consumer electronics, home appliances, industrial control, automotive electronics, and IoT applications. The company's product portfolio includes 32-bit ARM Cortex-M0+ MCUs, 8-bit Flash MCUs, touch sensing ICs, analog ICs, and power management chips. Cmsemicon is known for its high cost-performance ratio, excellent technical support, and fast delivery. As an authorized distributor, LiTong Electronics provides comprehensive technical support, product selection guidance, and after-sales service for Cmsemicon products.",
  "coreProducts": [
    "CMS32L032",
    "CMS32F759",
    "SC8F6796A",
    "SC8F096",
    "CMS8H1215"
  ],
  "industries": [
    {
      "name": "Consumer Electronics",
      "description": "Home appliances, smart home devices, personal electronics",
      "keywords": ["home appliance", "smart home", "consumer"]
    },
    {
      "name": "Industrial Control",
      "description": "Motor control, power management, industrial automation",
      "keywords": ["motor control", "industrial", "automation"]
    },
    {
      "name": "Automotive Electronics",
      "description": "Automotive control systems, sensors, lighting",
      "keywords": ["automotive", "AEC-Q100", "vehicle"]
    },
    {
      "name": "IoT Applications",
      "description": "Smart connected devices, wireless applications",
      "keywords": ["IoT", "smart device", "wireless"]
    }
  ],
  "certifications": [
    {
      "name": "ISO 9001",
      "description": "Quality Management System Certification"
    },
    {
      "name": "AEC-Q100",
      "description": "Automotive Electronics Council Qualification"
    }
  ],
  "yearFounded": 2001,
  "headquarters": "Shenzhen, China",
  "employees": "Over 1,000",
  "website": "https://www.mcu.com.cn",
  "distributorStatus": "Authorized Distributor",
  "seoTitle": "Cmsemicon MCU Distributor | 32-bit 8-bit Microcontrollers Selection",
  "seoDescription": "Authorized distributor of Cmsemicon MCUs including ARM Cortex-M0+ 32-bit and 8-bit Flash microcontrollers. Technical support and selection guide available.",
  "seoKeywords": [
    "Cmsemicon distributor",
    "Cmsemicon MCU",
    "CMS32L032 distributor",
    "32-bit MCU selection",
    "8-bit microcontroller",
    "ARM Cortex-M0+ MCU"
  ],
  "faqs": [
    {
      "question": "Is LiTong an authorized distributor of Cmsemicon products?",
      "answer": "Yes, LiTong Electronics is an authorized distributor of Cmsemicon semiconductor products. As an authorized distributor, we provide genuine Cmsemicon ICs with full factory warranty, technical support, and after-sales service. Our FAE team has received direct training from Cmsemicon engineers and can provide expert guidance on product selection, application development, and production optimization.",
      "decisionGuide": "Contact LiTong Electronics for Cmsemicon product inquiries. We provide authorized sales and technical support for all Cmsemicon product lines.",
      "keywords": ["Cmsemicon authorized distributor", "LiTong Cmsemicon partnership", "genuine Cmsemicon"]
    },
    {
      "question": "What are Cmsemicon's core product categories?",
      "answer": "Cmsemicon's core product categories include: 1) 32-bit ARM Cortex-M0+ MCUs - High-performance microcontrollers with rich peripherals for complex applications. 2) 8-bit Flash MCUs - Cost-effective solutions for general-purpose applications with touch sensing, ADC, and communication interfaces. 3) Touch Sensing ICs - Dedicated chips for capacitive touch applications with high sensitivity. 4) Analog ICs - Including high-precision ADCs, operational amplifiers, and power management chips. 5) Automotive MCUs - AEC-Q100 qualified products for automotive applications.",
      "decisionGuide": "Cmsemicon offers comprehensive MCU and analog solutions. Contact us for detailed product recommendations based on your application requirements.",
      "keywords": ["Cmsemicon product categories", "MCU portfolio", "analog IC"]
    },
    {
      "question": "How do I select the right Cmsemicon MCU for my application?",
      "answer": "Selecting the right Cmsemicon MCU depends on several factors: 1) Processing requirements - Choose 32-bit ARM Cortex-M0+ (CMS32 series) for complex applications requiring high performance, or 8-bit (SC8F series) for simpler, cost-sensitive applications. 2) Memory requirements - Flash size ranges from 8KB to 256KB depending on application code size. 3) Peripheral requirements - Consider needed interfaces (UART, SPI, I2C), ADC resolution, PWM channels, and touch sensing capabilities. 4) Package preferences - Various packages available from QFN20 to LQFP64. 5) Operating conditions - Industrial grade (-40°C to 85°C) or extended temperature range options. Our FAE team can help evaluate these factors and recommend the optimal Cmsemicon MCU for your specific needs.",
      "decisionGuide": "Work with LiTong FAE team to evaluate application requirements and select optimal Cmsemicon MCU.",
      "keywords": ["MCU selection", "Cmsemicon MCU guide", "product selection"]
    },
    {
      "question": "What development tools are available for Cmsemicon MCUs?",
      "answer": "Cmsemicon provides comprehensive development tools: 1) IDE - Keil MDK and IAR Embedded Workbench support for ARM Cortex-M0+ MCUs. For 8-bit MCUs, Cmsemicon provides dedicated IDE. 2) Programmers - USB programmers and in-circuit debuggers for code download and debugging. 3) Evaluation boards - Development kits with comprehensive peripheral demonstrations. 4) Software libraries - HAL libraries, example codes, and application notes. 5) Technical documentation - Detailed datasheets, user manuals, and reference designs. LiTong Electronics can provide development tools and technical support to accelerate your product development.",
      "decisionGuide": "Contact LiTong for development tools and starter kits to begin your Cmsemicon MCU development.",
      "keywords": ["development tools", "IDE", "programmer", "evaluation kit"]
    },
    {
      "question": "Does Cmsemicon provide automotive-grade products?",
      "answer": "Yes, Cmsemicon provides AEC-Q100 qualified automotive-grade MCUs. The BAT32A2 series has passed AEC-Q100 Grade 1 certification, making them suitable for automotive applications including body control modules, lighting control, and sensor interfaces. These automotive MCUs feature enhanced reliability, wider temperature ranges (-40°C to 125°C), and robust EMC performance required for automotive environments.",
      "decisionGuide": "For automotive applications, select Cmsemicon AEC-Q100 qualified products. Contact us for automotive product recommendations.",
      "keywords": ["automotive MCU", "AEC-Q100", "BAT32A2"]
    }
  ]
};

fs.writeFileSync(path.join(cmsemicorDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('✅ Created brand.json');

// 创建products.json
const productsData = {
  "seoTitle": "Cmsemicon MCU Products | 32-bit 8-bit Microcontrollers Distributor",
  "seoDescription": "Complete Cmsemicon MCU portfolio including ARM Cortex-M0+ 32-bit and 8-bit Flash microcontrollers. Technical specifications and selection guide from authorized distributor.",
  "seoKeywords": [
    "Cmsemicon distributor",
    "Cmsemicon MCU selection",
    "CMS32L032 distributor",
    "32-bit ARM MCU",
    "8-bit Flash MCU",
    "touch MCU"
  ],
  "categories": [
    {
      "id": "32bit-mcu",
      "name": "32-bit ARM Cortex-M0+ MCU",
      "shortDescription": "High-performance 32-bit microcontrollers based on ARM Cortex-M0+ core",
      "longDescription": "Cmsemicon's 32-bit ARM Cortex-M0+ MCU series offers high performance, low power consumption, and rich peripherals for complex embedded applications. These MCUs feature up to 64MHz clock speed, large Flash memory up to 256KB, and comprehensive communication interfaces.",
      "productCount": 6,
      "parameters": ["Core", "Frequency", "Flash", "SRAM", "GPIO", "ADC", "Package"],
      "products": [
        {
          "id": "cms32l032",
          "partNumber": "CMS32L032",
          "name": "CMS32L032",
          "shortDescription": "Mainstream 32-bit MCU with 64KB Flash, 64MHz ARM Cortex-M0+",
          "specifications": {
            "Core": "ARM Cortex-M0+",
            "Frequency": "64MHz",
            "Flash": "64KB",
            "SRAM": "4KB",
            "Data Flash": "1KB",
            "GPIO": "Up to 22",
            "ADC": "12-bit, 500Ksps",
            "PWM": "8-channel enhanced",
            "UART": "2-channel",
            "SPI": "1-channel",
            "I2C": "1-channel",
            "Operating Voltage": "1.8V to 5.5V",
            "Temperature": "-40°C to 85°C",
            "Package": "SSOP24, QFN24, TSSOP20, QFN20"
          },
          "features": [
            "ARM Cortex-M0+ core up to 64MHz",
            "64KB Flash, 4KB SRAM, 1KB Data Flash",
            "12-bit ADC with 500Ksps sampling rate",
            "Internal temperature sensor",
            "8-channel enhanced PWM",
            "Event linkage controller for hardware automation",
            "Wide operating voltage 1.8V-5.5V",
            "Industrial temperature range -40°C to 85°C"
          ],
          "applications": ["Consumer electronics", "Industrial control", "Smart home", "IoT devices"],
          "descriptionParagraphs": [
            "The CMS32L032 is Cmsemicon's mainstream 32-bit MCU based on ARM Cortex-M0+ core, operating at up to 64MHz. It features 64KB Flash memory, 4KB SRAM, and 1KB Data Flash for non-volatile data storage.",
            "The integrated 12-bit ADC provides 500Ksps sampling rate with high accuracy, suitable for various sensor applications. The 8-channel enhanced PWM supports motor control and power management applications.",
            "With wide operating voltage range from 1.8V to 5.5V and industrial temperature range, the CMS32L032 is ideal for battery-powered and industrial applications requiring reliable performance."
          ],
          "faeReview": {
            "author": "LiTong FAE Team",
            "title": "Senior FAE - MCU Applications",
            "experience": "8+ years",
            "expertise": ["MCU Design", "Embedded Systems", "IoT Applications"],
            "content": "The CMS32L032 is our most popular 32-bit MCU for general-purpose applications. The ARM Cortex-M0+ core provides excellent performance while maintaining low power consumption. Customers particularly appreciate the rich peripheral set including the high-speed ADC and enhanced PWM. The event linkage controller is a unique feature that reduces CPU overhead in complex applications. Highly recommended for cost-sensitive applications requiring 32-bit performance.",
            "highlight": "64MHz ARM Cortex-M0+, 64KB Flash, rich peripherals"
          },
          "alternativeParts": [
            {
              "partNumber": "CMS32F759",
              "brand": "Cmsemicon",
              "specifications": { "Flash": "256KB", "Touch": "49 channels" },
              "comparison": "CMS32L032=>CMS32F759: Flash 256KB > 64KB, Touch support added",
              "reason": "More memory and touch sensing capability",
              "useCase": "Applications requiring touch interface and larger memory",
              "link": "/cmsemicor/products/32bit-mcu/cms32f759.html"
            },
            {
              "partNumber": "STM32F030",
              "brand": "ST",
              "specifications": { "Core": "Cortex-M0", "Flash": "64KB" },
              "comparison": "CMS32L032=>STM32F030: Similar specs, Price higher",
              "reason": "Alternative supplier for risk mitigation",
              "useCase": "Multi-source strategy",
              "link": "/st/products/stm32f030.html"
            }
          ],
          "companionParts": [
            { "partNumber": "CMS32L032-EVB", "link": "#", "description": "Evaluation board for CMS32L032", "category": "Development Tools" },
            { "partNumber": "USB-Programmer", "link": "#", "description": "USB programmer for Cmsemicon MCUs", "category": "Development Tools" },
            { "partNumber": "LDO-3.3V", "link": "#", "description": "3.3V LDO regulator for power supply", "category": "Power Management" }
          ],
          "faqs": [
            { "question": "What is the maximum clock frequency of CMS32L032?", "answer": "The CMS32L032 operates at up to 64MHz with the ARM Cortex-M0+ core.", "decisionGuide": "Sufficient for most embedded applications.", "keywords": ["64MHz", "clock frequency", "Cortex-M0+"] },
            { "question": "Does CMS32L032 support 5V operation?", "answer": "Yes, the operating voltage range is 1.8V to 5.5V, supporting both 3.3V and 5V systems.", "decisionGuide": "Flexible for different system voltages.", "keywords": ["5V", "operating voltage", "1.8V-5.5V"] },
            { "question": "What development tools support CMS32L032?", "answer": "Keil MDK and IAR Embedded Workbench are supported. Cmsemicon also provides SDK and example codes.", "decisionGuide": "Standard ARM development tools compatible.", "keywords": ["Keil", "IAR", "development tools"] },
            { "question": "Is CMS32L032 suitable for motor control?", "answer": "Yes, with 8-channel enhanced PWM and high-speed ADC, it is suitable for basic motor control applications.", "decisionGuide": "Good for simple motor control applications.", "keywords": ["motor control", "PWM", "ADC"] },
            { "question": "What is the ADC sampling rate?", "answer": "The 12-bit ADC provides 500Ksps sampling rate for fast signal acquisition.", "decisionGuide": "High-speed ADC for demanding applications.", "keywords": ["ADC", "500Ksps", "sampling rate"] }
          ]
        },
        {
          "id": "cms32f759",
          "partNumber": "CMS32F759",
          "name": "CMS32F759",
          "shortDescription": "High-performance 32-bit touch MCU with 256KB Flash, up to 49 touch channels",
          "specifications": {
            "Core": "ARM Cortex-M0+",
            "Frequency": "64MHz",
            "Flash": "256KB",
            "SRAM": "16KB",
            "Data Flash": "3.5KB",
            "GPIO": "Up to 60",
            "Touch Channels": "Up to 49",
            "ADC": "12-bit",
            "UART": "Multiple",
            "I2C": "Yes",
            "SPI": "Yes",
            "LCD Driver": "Yes",
            "LED Driver": "High current",
            "Operating Voltage": "1.8V to 5.5V",
            "Temperature": "-40°C to 105°C",
            "Package": "LQFP44, LQFP48, LQFP64"
          },
          "features": [
            "ARM Cortex-M0+ core up to 64MHz",
            "256KB Flash, 16KB SRAM, 3.5KB Data Flash",
            "Up to 49 touch key detection channels",
            "LCD driver and high-current LED driver",
            "Rich communication interfaces",
            "Extended temperature range -40°C to 105°C",
            "Suitable for home appliance applications"
          ],
          "applications": ["Home appliances", "Air conditioners", "Refrigerators", "Washing machines", "Water heaters"],
          "descriptionParagraphs": [
            "The CMS32F759 is a high-performance 32-bit touch MCU based on ARM Cortex-M0+ core, supporting up to 64MHz clock speed. It features large 256KB Flash memory and up to 49 touch detection channels.",
            "The integrated LCD driver and high-current LED driver make it ideal for home appliance applications. The high touch sensitivity and large LED drive current provide excellent user interface capabilities.",
            "With extended temperature range up to 105°C and industrial-grade reliability, the CMS32F759 is widely used in major home appliances from leading manufacturers."
          ],
          "faeReview": {
            "author": "LiTong FAE Team",
            "title": "Senior FAE - Touch Applications",
            "experience": "8+ years",
            "expertise": ["Touch Sensing", "Home Appliance", "MCU Applications"],
            "content": "The CMS32F759 is our go-to recommendation for home appliance applications requiring touch interface. The 49 touch channels can handle complex control panels, and the high-current LED driver eliminates the need for external drivers. We've seen successful deployments in air conditioners, washing machines, and water heaters from major brands. The extended temperature range ensures reliable operation in harsh environments.",
            "highlight": "49 touch channels, LCD/LED drivers, home appliance optimized"
          },
          "alternativeParts": [
            {
              "partNumber": "CMS32L032",
              "brand": "Cmsemicon",
              "specifications": { "Flash": "64KB", "Touch": "No" },
              "comparison": "CMS32F759=>CMS32L032: Flash 64KB < 256KB, No touch support",
              "reason": "Lower cost for applications not requiring touch",
              "useCase": "Cost-sensitive applications without touch interface",
              "link": "/cmsemicor/products/32bit-mcu/cms32l032.html"
            },
            {
              "partNumber": "STM32F072",
              "brand": "ST",
              "specifications": { "Core": "Cortex-M0", "Touch": "Yes" },
              "comparison": "CMS32F759=>STM32F072: Similar touch capability, Price higher",
              "reason": "Alternative supplier comparison",
              "useCase": "Multi-source evaluation",
              "link": "/st/products/stm32f072.html"
            }
          ],
          "companionParts": [
            { "partNumber": "CMS32F759-EVB", "link": "#", "description": "Evaluation board with touch panel", "category": "Development Tools" },
            { "partNumber": "Touch-Panel-49CH", "link": "#", "description": "49-channel touch panel for evaluation", "category": "Accessories" },
            { "partNumber": "LCD-Module", "link": "#", "description": "LCD module for display applications", "category": "Display" }
          ],
          "faqs": [
            { "question": "How many touch channels does CMS32F759 support?", "answer": "The CMS32F759 supports up to 49 touch key detection channels.", "decisionGuide": "Sufficient for complex control panels.", "keywords": ["49 channels", "touch", "capacitive"] },
            { "question": "Is CMS32F759 suitable for home appliances?", "answer": "Yes, it is specifically designed for home appliance applications with LCD and LED drivers.", "decisionGuide": "Optimized for home appliance applications.", "keywords": ["home appliance", "air conditioner", "washing machine"] },
            { "question": "What is the maximum operating temperature?", "answer": "The extended temperature range is -40°C to 105°C.", "decisionGuide": "Suitable for high-temperature environments.", "keywords": ["105°C", "temperature range", "industrial"] },
            { "question": "Does it support LCD display?", "answer": "Yes, integrated LCD driver supports various LCD panel types.", "decisionGuide": "Built-in LCD driver reduces external components.", "keywords": ["LCD driver", "display", "segment LCD"] },
            { "question": "What packages are available?", "answer": "Available in LQFP44, LQFP48, and LQFP64 packages.", "decisionGuide": "Multiple package options for different board sizes.", "keywords": ["LQFP", "package", "pin count"] }
          ]
        }
      ]
    },
    {
      "id": "8bit-mcu",
      "name": "8-bit Flash MCU",
      "shortDescription": "Cost-effective 8-bit microcontrollers for general-purpose applications",
      "longDescription": "Cmsemicon's 8-bit Flash MCU series offers cost-effective solutions for general-purpose embedded applications. These MCUs feature integrated touch sensing, high-precision ADC, and various communication interfaces.",
      "productCount": 6,
      "parameters": ["Core", "Flash", "RAM", "GPIO", "ADC", "Touch", "Package"],
      "products": [
        {
          "id": "sc8f6796a",
          "partNumber": "SC8F6796A",
          "name": "SC8F6796A",
          "shortDescription": "8-bit Flash MCU with 16MHz/32MHz RC oscillator, up to 26 GPIO",
          "specifications": {
            "Core": "8-bit RISC",
            "Oscillator": "16MHz/32MHz RC",
            "Operating Voltage": "2.0V to 5.5V",
            "GPIO": "Up to 26",
            "USART": "1",
            "MSSP": "1 (SPI/I2C)",
            "PWM": "Built-in",
            "LED Driver": "Yes",
            "Temperature": "-40°C to 85°C",
            "Package": "SOP28, SSOP24"
          },
          "features": [
            "8-bit RISC core with 16MHz/32MHz RC oscillator",
            "Up to 26 GPIO pins",
            "Built-in PWM and LED driver modules",
            "USART and MSSP (SPI/I2C) interfaces",
            "Wide operating voltage 2.0V-5.5V",
            "Industrial temperature range"
          ],
          "applications": ["LED lighting", "Consumer electronics", "Small appliances", "Toys"],
          "descriptionParagraphs": [
            "The SC8F6796A is a versatile 8-bit Flash MCU with built-in 16MHz/32MHz RC oscillator. It requires no external crystal, reducing BOM cost and board space.",
            "With up to 26 GPIO pins, built-in PWM, and LED driver module, it is ideal for LED lighting and display applications. The integrated communication interfaces enable easy connectivity.",
            "The wide operating voltage range and industrial temperature grade make it suitable for various consumer and industrial applications."
          ],
          "faeReview": {
            "author": "LiTong FAE Team",
            "title": "FAE - 8-bit MCU Applications",
            "experience": "6+ years",
            "expertise": ["8-bit MCU", "LED Applications", "Cost Optimization"],
            "content": "The SC8F6796A is an excellent choice for cost-sensitive LED lighting applications. The built-in RC oscillator eliminates the need for external crystal, saving cost. The integrated LED driver module can directly drive LED displays without external drivers. We recommend this MCU for simple LED lighting, small appliances, and toys where cost is critical.",
            "highlight": "Built-in oscillator, LED driver, cost-effective"
          },
          "alternativeParts": [
            {
              "partNumber": "SC8F096",
              "brand": "Cmsemicon",
              "specifications": { "Flash": "8Kx16", "Touch": "Yes" },
              "comparison": "SC8F6796A=>SC8F096: Flash larger, Touch support added",
              "reason": "More features for complex applications",
              "useCase": "Applications requiring touch sensing",
              "link": "/cmsemicor/products/8bit-mcu/sc8f096.html"
            },
            {
              "partNumber": "PIC16F877A",
              "brand": "Microchip",
              "specifications": { "Core": "8-bit", "GPIO": "33" },
              "comparison": "SC8F6796A=>PIC16F877A: Similar capability, Price higher",
              "reason": "Alternative for specific requirements",
              "useCase": "Existing PIC-based designs",
              "link": "/microchip/products/pic16f877a.html"
            }
          ],
          "companionParts": [
            { "partNumber": "SC8F6796A-EVB", "link": "#", "description": "Evaluation board for SC8F6796A", "category": "Development Tools" },
            { "partNumber": "LED-Matrix", "link": "#", "description": "LED matrix for display applications", "category": "Display" },
            { "partNumber": "Power-Adapter", "link": "#", "description": "5V power adapter", "category": "Power" }
          ],
          "faqs": [
            { "question": "Does SC8F6796A need external crystal?", "answer": "No, it has built-in 16MHz/32MHz RC oscillator, no external crystal needed.", "decisionGuide": "Reduces BOM cost and board space.", "keywords": ["RC oscillator", "no crystal", "built-in"] },
            { "question": "What is the maximum GPIO count?", "answer": "Up to 26 GPIO pins are available.", "decisionGuide": "Sufficient for most 8-bit applications.", "keywords": ["26 GPIO", "pin count", "I/O"] },
            { "question": "Does it support SPI and I2C?", "answer": "Yes, the MSSP module supports both SPI and I2C protocols.", "decisionGuide": "Flexible communication options.", "keywords": ["SPI", "I2C", "MSSP"] },
            { "question": "Is it suitable for LED lighting?", "answer": "Yes, with built-in LED driver module and PWM, it is ideal for LED applications.", "decisionGuide": "Optimized for LED lighting control.", "keywords": ["LED driver", "lighting", "PWM"] },
            { "question": "What packages are available?", "answer": "Available in SOP28 and SSOP24 packages.", "decisionGuide": "Standard packages for easy assembly.", "keywords": ["SOP28", "SSOP24", "package"] }
          ]
        },
        {
          "id": "sc8f096",
          "partNumber": "SC8F096",
          "name": "SC8F096",
          "shortDescription": "8-bit Flash MCU with touch key, 12-bit ADC, and operational amplifier",
          "specifications": {
            "Core": "8-bit RISC",
            "Flash": "8Kx16Bit",
            "RAM": "336B",
            "Oscillator": "16MHz RC",
            "Operating Voltage": "1.8V to 5.5V",
            "GPIO": "Up to 30",
            "Touch": "Built-in touch key",
            "ADC": "12-bit high-precision",
            "Op-Amp": "Integrated",
            "Comparators": "2",
            "LCD Driver": "Yes",
            "LED Driver": "Yes",
            "PWM": "5-channel",
            "USART": "Yes",
            "I2C": "Yes",
            "Temperature": "-40°C to 85°C"
          },
          "features": [
            "8Kx16Bit Flash, 336B RAM",
            "Built-in touch key functionality",
            "High-precision 12-bit ADC",
            "Integrated operational amplifier",
            "2 comparators",
            "LCD and LED driver modules",
            "5-channel PWM",
            "RGB lighting communication module",
            "PD/QC communication module"
          ],
          "applications": ["Touch control", "Consumer electronics", "Home appliances", "Battery management"],
          "descriptionParagraphs": [
            "The SC8F096 is a feature-rich 8-bit Flash MCU with integrated touch key functionality, high-precision 12-bit ADC, and operational amplifier. It provides a comprehensive solution for touch control applications.",
            "The built-in LCD and LED driver modules, along with RGB lighting and PD/QC communication modules, make it ideal for modern consumer electronics with advanced user interfaces.",
            "With 5-channel PWM and rich analog peripherals, the SC8F096 can handle complex control tasks while maintaining the cost advantage of 8-bit architecture."
          ],
          "faeReview": {
            "author": "LiTong FAE Team",
            "title": "FAE - Touch and Analog Applications",
            "experience": "6+ years",
            "expertise": ["Touch Sensing", "Analog Design", "8-bit MCU"],
            "content": "The SC8F096 is one of our most popular 8-bit MCUs for touch control applications. The integrated touch module, high-precision ADC, and op-amp provide a complete analog front-end solution. The RGB lighting and PD/QC modules are unique features for this price range. We recommend this MCU for touch panels, battery management, and consumer electronics requiring analog signal processing.",
            "highlight": "Touch key, 12-bit ADC, op-amp, RGB/PD-QC modules"
          },
          "alternativeParts": [
            {
              "partNumber": "SC8F6796A",
              "brand": "Cmsemicon",
              "specifications": { "Flash": "Smaller", "Touch": "No" },
              "comparison": "SC8F096=>SC8F6796A: Fewer features, Lower cost",
              "reason": "Cost reduction for simpler applications",
              "useCase": "Applications not requiring touch or analog",
              "link": "/cmsemicor/products/8bit-mcu/sc8f6796a.html"
            },
            {
              "partNumber": "CMS32L032",
              "brand": "Cmsemicon",
              "specifications": { "Core": "32-bit", "Performance": "Higher" },
              "comparison": "SC8F096=>CMS32L032: 32-bit core, More processing power",
              "reason": "More processing power for complex algorithms",
              "useCase": "Applications requiring 32-bit performance",
              "link": "/cmsemicor/products/32bit-mcu/cms32l032.html"
            }
          ],
          "companionParts": [
            { "partNumber": "SC8F096-EVB", "link": "#", "description": "Evaluation board with touch panel", "category": "Development Tools" },
            { "partNumber": "Touch-Pad-Module", "link": "#", "description": "Capacitive touch pad module", "category": "Accessories" },
            { "partNumber": "LCD-Segment", "link": "#", "description": "Segment LCD for display", "category": "Display" }
          ],
          "faqs": [
            { "question": "How many touch keys can SC8F096 support?", "answer": "The built-in touch module supports multiple touch keys depending on application configuration.", "decisionGuide": "Flexible touch key configuration.", "keywords": ["touch key", "capacitive", "multi-touch"] },
            { "question": "What is the ADC resolution?", "answer": "The integrated ADC provides 12-bit resolution for precise analog measurement.", "decisionGuide": "High-precision analog measurement capability.", "keywords": ["12-bit ADC", "resolution", "analog"] },
            { "question": "Does it have built-in op-amp?", "answer": "Yes, integrated operational amplifier for signal conditioning.", "decisionGuide": "Reduces external analog components.", "keywords": ["op-amp", "operational amplifier", "analog"] },
            { "question": "What communication protocols are supported?", "answer": "USART, I2C, and dedicated RGB lighting and PD/QC modules.", "decisionGuide": "Rich communication options for various applications.", "keywords": ["USART", "I2C", "RGB", "PD/QC"] },
            { "question": "Is it suitable for battery management?", "answer": "Yes, with high-precision ADC and comparators, it is suitable for battery monitoring applications.", "decisionGuide": "Good for battery management systems.", "keywords": ["battery", "management", "monitoring"] }
          ]
        }
      ]
    },
    {
      "id": "analog-soc",
      "name": "Analog SoC",
      "shortDescription": "High-precision analog SoC with dual ADC for measurement applications",
      "longDescription": "Cmsemicon's Analog SoC series integrates high-precision 24-bit Sigma-Delta ADC and high-speed 12-bit SAR ADC in a single chip, providing complete measurement solutions for pressure sensing, industrial measurement, and medical applications.",
      "productCount": 6,
      "parameters": ["ADC Type", "Resolution", "Channels", "PGA", "Package"],
      "products": [
        {
          "id": "cms8h1215",
          "partNumber": "CMS8H1215",
          "name": "CMS8H1215",
          "shortDescription": "Multi-channel dual-AD high-precision SoC with 24-bit Sigma-Delta ADC",
          "specifications": {
            "Core": "RISC",
            "MTP": "8K*16",
            "RAM": "344 Bytes",
            "EEPROM": "128 Bytes",
            "ADC 24-bit": "2-channel Sigma-Delta",
            "ADC 12-bit": "8-channel SAR",
            "Resolution": "24-bit / 12-bit",
            "Effective Resolution": "20.0-bit (PGA=128, ODR=10Hz)",
            "PGA": "Programmable gain",
            "GPIO": "Up to 25",
            "PWM": "2-channel",
            "High Current IO": "Up to 16",
            "Sink Current": "Up to 164mA",
            "Source Current": "Up to 45mA",
            "Operating Voltage": "2.4V to 4.5V",
            "Temperature": "-40°C to 85°C",
            "Package": "QFN32"
          },
          "features": [
            "First multi-channel dual-AD high-precision SoC in China",
            "24-bit Sigma-Delta ADC with 20.0-bit effective resolution",
            "12-bit SAR ADC with up to 8 channels",
            "Programmable gain amplifier (PGA)",
            "High current IO drive capability (164mA sink)",
            "2-channel PWM with independent duty cycle",
            "Battery voltage detection up to 12V",
            "Compact QFN32 package"
          ],
          "applications": ["Pressure sensing", "Industrial measurement", "Home medical", "Consumer electronics"],
          "descriptionParagraphs": [
            "The CMS8H1215 is China's first multi-channel dual-AD high-precision SoC, featuring both 24-bit Sigma-Delta ADC and 12-bit SAR ADC. This unique combination enables high-precision measurement of micro-signals and high-speed sampling of multiple channels.",
            "The 24-bit Sigma-Delta ADC provides 20.0-bit effective resolution at PGA=128 and ODR=10Hz, ideal for pressure sensor applications. The 12-bit SAR ADC can sample at high speed for applications requiring fast response.",
            "With high current IO drive capability and compact QFN32 package, the CMS8H1215 is a competitive single-chip solution for measurement applications, significantly reducing system complexity and BOM cost."
          ],
          "faeReview": {
            "author": "LiTong FAE Team",
            "title": "Senior FAE - Analog and Sensor Applications",
            "experience": "10+ years",
            "expertise": ["Precision ADC", "Sensor Interface", "Analog Design"],
            "content": "The CMS8H1215 is a breakthrough product for precision measurement applications. The dual-ADC architecture is unique in this market segment - the 24-bit Sigma-Delta ADC provides exceptional resolution for pressure sensors, while the 12-bit SAR ADC handles high-speed requirements. We've seen excellent results in pressure transmitter applications with accuracies better than 0.1%. The high current IO drive is a bonus feature that eliminates external drivers for LED indicators.",
            "highlight": "First dual-AD SoC in China, 24-bit precision, high current drive"
          },
          "alternativeParts": [
            {
              "partNumber": "ADS1232",
              "brand": "TI",
              "specifications": { "ADC": "24-bit", "Type": "Sigma-Delta" },
              "comparison": "CMS8H1215=>ADS1232: External ADC only, No MCU",
              "reason": "Discrete ADC solution comparison",
              "useCase": "Existing discrete designs",
              "link": "/ti/products/ads1232.html"
            },
            {
              "partNumber": "CMS32L032",
              "brand": "Cmsemicon",
              "specifications": { "ADC": "12-bit", "Type": "MCU" },
              "comparison": "CMS8H1215=>CMS32L032: Lower ADC resolution, General purpose",
              "reason": "General purpose MCU without precision ADC",
              "useCase": "Applications not requiring 24-bit precision",
              "link": "/cmsemicor/products/32bit-mcu/cms32l032.html"
            }
          ],
          "companionParts": [
            { "partNumber": "CMS8H1215-EVB", "link": "#", "description": "Evaluation board for pressure sensing", "category": "Development Tools" },
            { "partNumber": "Pressure-Sensor", "link": "#", "description": "Pressure sensor for evaluation", "category": "Sensors" },
            { "partNumber": "Load-Cell", "link": "#", "description": "Load cell for weighing applications", "category": "Sensors" }
          ],
          "faqs": [
            { "question": "What makes CMS8H1215 unique?", "answer": "It is the first multi-channel dual-AD high-precision SoC in China, combining 24-bit Sigma-Delta and 12-bit SAR ADCs.", "decisionGuide": "Unique dual-ADC architecture for versatile measurement.", "keywords": ["first in China", "dual-AD", "unique"] },
            { "question": "What is the effective resolution of 24-bit ADC?", "answer": "The effective resolution is 20.0-bit at PGA=128, ODR=10Hz, LDO=3V.", "decisionGuide": "High effective resolution for precision measurement.", "keywords": ["20.0-bit", "effective resolution", "ENOB"] },
            { "question": "Can it directly drive LEDs?", "answer": "Yes, high current IO can sink up to 164mA, sufficient for direct LED driving.", "decisionGuide": "Eliminates external LED drivers.", "keywords": ["164mA", "high current", "LED drive"] },
            { "question": "What applications is it suitable for?", "answer": "Pressure sensing, industrial measurement, home medical devices, and consumer electronics requiring precision measurement.", "decisionGuide": "Ideal for precision measurement applications.", "keywords": ["pressure sensor", "measurement", "weighing"] },
            { "question": "What is the package type?", "answer": "Available in compact QFN32 package.", "decisionGuide": "Compact package for space-constrained designs.", "keywords": ["QFN32", "package", "compact"] }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(cmsemicorDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ Created products.json');

// 创建solutions.json
const solutionsData = {
  "seoTitle": "Cmsemicon Solutions | MCU Applications | Industrial Consumer Automotive",
  "seoDescription": "Cmsemicon MCU solutions for home appliances, industrial control, automotive electronics, and IoT applications. Complete BOM and technical support.",
  "solutions": [
    {
      "id": "home-appliance-solution",
      "title": "Home Appliance Control Solution",
      "industry": "Home Appliances",
      "description": "Complete MCU solution for home appliance control with touch interface, display drivers, and motor control",
      "longDescription": "Cmsemicon provides comprehensive MCU solutions for home appliance applications including air conditioners, refrigerators, washing machines, and water heaters. The solution features touch sensing, LCD/LED display drivers, and motor control capabilities.",
      "image": "/assets/solutions/home-appliance.jpg",
      "features": [
        "Touch panel interface with up to 49 channels",
        "LCD and LED display drivers",
        "Motor control with high-resolution PWM",
        "Temperature sensing and control",
        "Communication interfaces for smart connectivity"
      ],
      "products": ["CMS32F759", "CMS32L032", "SC8F096"],
      "applications": ["Air conditioners", "Refrigerators", "Washing machines", "Water heaters", "Dishwashers"],
      "bom": {
        "mainController": { "partNumber": "CMS32F759", "quantity": 1, "description": "Main control MCU with touch and display" },
        "displayModule": { "partNumber": "LCD-Panel", "quantity": 1, "description": "LCD display panel" },
        "touchPanel": { "partNumber": "Touch-Module", "quantity": 1, "description": "Capacitive touch panel" },
        "powerSupply": { "partNumber": "LDO-5V", "quantity": 1, "description": "5V LDO regulator" }
      },
      "faeInsights": "The CMS32F759 is particularly popular for home appliance applications due to its integrated touch and display drivers. The high current LED drive capability eliminates external drivers, reducing BOM cost.",
      "cases": [
        { "customer": "Major Appliance Brand A", "application": "Air conditioner control panel", "quantity": "500K units/year" },
        { "customer": "Appliance Manufacturer B", "application": "Washing machine controller", "quantity": "300K units/year" }
      ],
      "faqs": [
        { "question": "How many touch channels are needed for typical appliances?", "answer": "Most appliances require 10-20 touch channels for control panels. The CMS32F759 supports up to 49 channels, providing ample headroom.", "keywords": ["touch channels", "appliance", "control panel"] },
        { "question": "Can the solution support WiFi connectivity?", "answer": "Yes, the MCU provides UART/SPI interfaces for connecting to WiFi modules for smart home integration.", "keywords": ["WiFi", "smart home", "connectivity"] }
      ]
    },
    {
      "id": "motor-control-solution",
      "title": "Motor Control Solution",
      "industry": "Industrial Control",
      "description": "High-performance motor control solution with precise PWM and analog sensing",
      "longDescription": "Cmsemicon MCUs provide cost-effective motor control solutions for BLDC motors, stepper motors, and AC induction motors. The integrated high-speed ADC and enhanced PWM enable precise speed and torque control.",
      "image": "/assets/solutions/motor-control.jpg",
      "features": [
        "High-resolution PWM for precise control",
        "High-speed ADC for current sensing",
        "Integrated comparators for overcurrent protection",
        "Multiple communication interfaces",
        "Low-cost solution compared to dedicated motor control ICs"
      ],
      "products": ["CMS32L032", "SC8F6796A", "SC8F096"],
      "applications": ["BLDC motor control", "Stepper motor drivers", "Fan control", "Pump control"],
      "bom": {
        "mainController": { "partNumber": "CMS32L032", "quantity": 1, "description": "Motor control MCU" },
        "gateDriver": { "partNumber": "Gate-Driver-IC", "quantity": 1, "description": "MOSFET gate driver" },
        "currentSense": { "partNumber": "Shunt-Resistor", "quantity": 1, "description": "Current sensing resistor" },
        "powerSupply": { "partNumber": "Buck-Converter", "quantity": 1, "description": "DC-DC buck converter" }
      },
      "faeInsights": "For cost-sensitive motor control applications, the CMS32L032 provides an excellent balance of performance and price. The 500Ksps ADC enables fast current sampling for FOC algorithms.",
      "cases": [
        { "customer": "Motor Manufacturer C", "application": "BLDC fan controller", "quantity": "1M units/year" }
      ],
      "faqs": [
        { "question": "What PWM resolution is available?", "answer": "The enhanced PWM provides high resolution suitable for most motor control applications. The exact resolution depends on the operating frequency.", "keywords": ["PWM", "resolution", "motor control"] },
        { "question": "Can it implement FOC control?", "answer": "Yes, with the 64MHz ARM Cortex-M0+ core and fast ADC, basic FOC algorithms can be implemented for BLDC motors.", "keywords": ["FOC", "BLDC", "field oriented control"] }
      ]
    },
    {
      "id": "automotive-solution",
      "title": "Automotive Electronics Solution",
      "industry": "Automotive",
      "description": "AEC-Q100 qualified MCUs for automotive body control and sensor applications",
      "longDescription": "Cmsemicon's BAT32A2 series has passed AEC-Q100 Grade 1 certification, making them suitable for automotive applications including body control modules, lighting control, and sensor interfaces.",
      "image": "/assets/solutions/automotive.jpg",
      "features": [
        "AEC-Q100 Grade 1 qualified",
        "Extended temperature range -40°C to 125°C",
        "LIN bus communication support",
        "Sleep and wake-up functionality",
        "High EMC performance"
      ],
      "products": ["BAT32A237", "BAT32A279"],
      "applications": ["Body control modules", "Lighting control", "Sensor interfaces", "Combination switches"],
      "bom": {
        "mainController": { "partNumber": "BAT32A237", "quantity": 1, "description": "Automotive MCU with LIN" },
        "linTransceiver": { "partNumber": "LIN-Transceiver", "quantity": 1, "description": "LIN bus transceiver" },
        "voltageRegulator": { "partNumber": "LDO-5V-Auto", "quantity": 1, "description": "Automotive grade LDO" }
      },
      "faeInsights": "The BAT32A2 series provides a cost-effective alternative to traditional automotive MCUs while meeting all AEC-Q100 requirements. The integrated LIN interface is particularly useful for body electronics.",
      "cases": [
        { "customer": "Automotive Tier-1 Supplier", "application": "Combination switch controller", "quantity": "200K units/year" }
      ],
      "faqs": [
        { "question": "What automotive certification does it have?", "answer": "The BAT32A2 series has passed AEC-Q100 Grade 1 certification, suitable for automotive applications.", "keywords": ["AEC-Q100", "automotive", "certification"] },
        { "question": "Does it support LIN protocol?", "answer": "Yes, the integrated LIN module supports LIN bus communication commonly used in automotive body electronics.", "keywords": ["LIN", "automotive bus", "communication"] }
      ]
    },
    {
      "id": "pressure-sensing-solution",
      "title": "Pressure Sensing Solution",
      "industry": "Industrial Measurement",
      "description": "High-precision pressure measurement solution with 24-bit ADC",
      "longDescription": "The CMS8H1215 provides a complete single-chip solution for pressure sensing applications. The dual-ADC architecture enables both high-precision measurement and high-speed sampling.",
      "image": "/assets/solutions/pressure-sensing.jpg",
      "features": [
        "24-bit Sigma-Delta ADC for high precision",
        "20.0-bit effective resolution",
        "Programmable gain amplifier",
        "Single-chip solution reduces BOM cost",
        "Compact QFN32 package"
      ],
      "products": ["CMS8H1215"],
      "applications": ["Pressure transmitters", "Weighing scales", "Industrial sensors", "Medical devices"],
      "bom": {
        "mainController": { "partNumber": "CMS8H1215", "quantity": 1, "description": "Precision measurement SoC" },
        "pressureSensor": { "partNumber": "Pressure-Element", "quantity": 1, "description": "Pressure sensing element" },
        "voltageReference": { "partNumber": "Vref-3V", "quantity": 1, "description": "Precision voltage reference" }
      },
      "faeInsights": "The CMS8H1215 has been successfully deployed in pressure transmitter applications with accuracies better than 0.1% FS. The dual-ADC architecture is unique in this price range.",
      "cases": [
        { "customer": "Sensor Manufacturer D", "application": "Industrial pressure transmitter", "quantity": "100K units/year" }
      ],
      "faqs": [
        { "question": "What accuracy can be achieved?", "answer": "With proper calibration, accuracies better than 0.1% full scale can be achieved in pressure transmitter applications.", "keywords": ["accuracy", "0.1%", "precision"] },
        { "question": "Is it suitable for load cell applications?", "answer": "Yes, the high-precision 24-bit ADC and PGA make it ideal for load cell and weighing applications.", "keywords": ["load cell", "weighing", "scale"] }
      ]
    }
  ]
};

fs.writeFileSync(path.join(cmsemicorDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ Created solutions.json');

// 创建support.json
const supportData = {
  "seoTitle": "Cmsemicon Technical Support | MCU Development Resources",
  "seoDescription": "Cmsemicon MCU technical support including datasheets, application notes, development tools, and FAE support from authorized distributor.",
  "categories": [
    {
      "id": "mcu-selection",
      "title": "MCU Selection Guide",
      "description": "How to select the right Cmsemicon MCU for your application",
      "articles": [
        {
          "id": "32bit-vs-8bit",
          "title": "32-bit vs 8-bit MCU Selection Guide",
          "summary": "Guidelines for choosing between 32-bit ARM Cortex-M0+ and 8-bit MCUs based on application requirements",
          "author": "LiTong FAE Team",
          "date": "2024-01-15",
          "readTime": 8,
          "faeReview": {
            "content": "This guide helps customers navigate the selection between 32-bit and 8-bit MCUs. Key decision factors include processing requirements, memory needs, peripheral requirements, and cost targets.",
            "highlight": "Practical selection criteria with application examples"
          },
          "cases": [
            { "title": "Smart home device using CMS32L032", "description": "Customer selected 32-bit MCU for WiFi connectivity and complex UI" },
            { "title": "LED lighting using SC8F6796A", "description": "Customer selected 8-bit MCU for cost-sensitive simple control" }
          ],
          "faqs": [
            { "question": "When should I choose 32-bit over 8-bit?", "answer": "Choose 32-bit when you need complex algorithms, large memory, or high processing speed. Choose 8-bit for simple, cost-sensitive applications.", "keywords": ["32-bit", "8-bit", "selection"] },
            { "question": "Is 8-bit MCU still relevant?", "answer": "Yes, 8-bit MCUs remain popular for simple applications due to their low cost, low power consumption, and ease of use.", "keywords": ["8-bit relevance", "cost", "power"] }
          ]
        },
        {
          "id": "touch-mcu-selection",
          "title": "Touch MCU Selection and Design Guide",
          "summary": "Best practices for selecting and designing with Cmsemicon touch MCUs",
          "author": "LiTong FAE Team",
          "date": "2024-02-20",
          "readTime": 10,
          "faeReview": {
            "content": "Touch sensing requires careful PCB layout and software tuning. This guide covers sensor design, layout guidelines, and software configuration for reliable touch operation.",
            "highlight": "Comprehensive touch design guidelines"
          },
          "cases": [
            { "title": "Washing machine control panel", "description": "Successful implementation with 25 touch keys using CMS32F759" }
          ],
          "faqs": [
            { "question": "What is the typical touch sensitivity?", "answer": "Cmsemicon touch MCUs can detect touch through typical overlay materials up to 3mm thick with proper tuning.", "keywords": ["touch sensitivity", "overlay", "tuning"] },
            { "question": "How to handle water interference?", "answer": "Use water rejection algorithms and proper sensor layout to minimize water interference in appliance applications.", "keywords": ["water rejection", "interference", "appliance"] }
          ]
        }
      ]
    },
    {
      "id": "development-tools",
      "title": "Development Tools and Resources",
      "description": "Development tools, software libraries, and programming guides for Cmsemicon MCUs",
      "articles": [
        {
          "id": "ide-setup",
          "title": "IDE Setup and Configuration Guide",
          "summary": "Step-by-step guide for setting up Keil MDK and IAR for Cmsemicon ARM MCUs",
          "author": "LiTong FAE Team",
          "date": "2024-01-10",
          "readTime": 6,
          "faeReview": {
            "content": "Setting up the development environment is the first step. This guide covers IDE installation, device pack installation, and project configuration.",
            "highlight": "Clear step-by-step instructions"
          },
          "cases": [],
          "faqs": [
            { "question": "Which IDE is recommended?", "answer": "Both Keil MDK and IAR Embedded Workbench are supported. Keil is recommended for beginners due to its ease of use.", "keywords": ["IDE", "Keil", "IAR"] },
            { "question": "Is there a free version?", "answer": "Keil MDK-Lite is free for code size up to 32KB. For larger projects, a license is required.", "keywords": ["free", "Keil Lite", "license"] }
          ]
        },
        {
          "id": "programming-guide",
          "title": "MCU Programming and Debugging Guide",
          "summary": "Programming methods, debugging techniques, and troubleshooting tips",
          "author": "LiTong FAE Team",
          "date": "2024-03-05",
          "readTime": 12,
          "faeReview": {
            "content": "This guide covers various programming methods including ISP, IAP, and debugger-based programming. Common debugging issues and solutions are also included.",
            "highlight": "Practical debugging tips"
          },
          "cases": [],
          "faqs": [
            { "question": "What programmer is needed?", "answer": "Cmsemicon provides dedicated USB programmers. Third-party programmers supporting ARM Cortex-M can also be used for 32-bit MCUs.", "keywords": ["programmer", "ISP", "debugging"] },
            { "question": "How to protect code?", "answer": "Cmsemicon MCUs support code protection features including read protection and write protection. Enable these in the option bytes.", "keywords": ["code protection", "security", "read protection"] }
          ]
        }
      ]
    },
    {
      "id": "application-notes",
      "title": "Application Notes",
      "description": "Detailed application notes for specific use cases and peripheral configurations",
      "articles": [
        {
          "id": "adc-application",
          "title": "High-Precision ADC Application Guide",
          "summary": "Best practices for achieving high accuracy with Cmsemicon ADCs",
          "author": "LiTong FAE Team",
          "date": "2024-02-10",
          "readTime": 15,
          "faeReview": {
            "content": "Achieving high ADC accuracy requires attention to reference voltage, PCB layout, and software filtering. This guide covers all aspects of precision ADC design.",
            "highlight": "Comprehensive ADC accuracy optimization"
          },
          "cases": [
            { "title": "Temperature measurement system", "description": "Achieved ±0.1°C accuracy using CMS8H1215" }
          ],
          "faqs": [
            { "question": "How to improve ADC accuracy?", "answer": "Use stable reference voltage, proper PCB layout with ground plane, and software filtering techniques like averaging.", "keywords": ["ADC accuracy", "reference voltage", "layout"] },
            { "question": "What is the ADC sampling rate?", "answer": "The 12-bit ADC in CMS32L032 supports up to 500Ksps. The 24-bit ADC in CMS8H1215 supports lower rates optimized for precision.", "keywords": ["sampling rate", "500Ksps", "precision"] }
          ]
        },
        {
          "id": "low-power-design",
          "title": "Low Power Design Guide",
          "summary": "Techniques for minimizing power consumption in battery-powered applications",
          "author": "LiTong FAE Team",
          "date": "2024-03-20",
          "readTime": 10,
          "faeReview": {
            "content": "Low power design is critical for battery applications. This guide covers clock management, sleep modes, and peripheral optimization.",
            "highlight": "Practical power optimization techniques"
          },
          "cases": [
            { "title": "Battery-powered sensor node", "description": "Achieved 2-year battery life with proper low power design" }
          ],
          "faqs": [
            { "question": "What sleep modes are available?", "answer": "Cmsemicon MCUs support multiple sleep modes including Sleep, Deep Sleep, and Stop modes with varying wake-up times and power consumption.", "keywords": ["sleep mode", "low power", "wake-up"] },
            { "question": "How to minimize standby current?", "answer": "Disable unused peripherals, use low-frequency clock in standby, and optimize wake-up sources.", "keywords": ["standby current", "power saving", "optimization"] }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(cmsemicorDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ Created support.json');

console.log('\n========================================');
console.log('✅ Successfully replaced amec with cmsemicor!');
console.log('📊 New brand: Cmsemicon (中微半导体)');
console.log('📝 Product categories:');
console.log('  - 32-bit ARM Cortex-M0+ MCU');
console.log('  - 8-bit Flash MCU');
console.log('  - Analog SoC');
console.log('========================================');
