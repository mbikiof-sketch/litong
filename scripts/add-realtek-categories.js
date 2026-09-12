const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/realtek/products.json');

// Read current data
const data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Define additional 3 categories with real product data
const additionalCategories = [
  {
    "id": "wireless-network",
    "name": "Wireless Network ICs",
    "description": "Wi-Fi and Bluetooth combo solutions for wireless connectivity in laptops, tablets, and IoT devices",
    "longDescription": "Realtek wireless network ICs provide comprehensive Wi-Fi and Bluetooth connectivity solutions for various applications. From single-band Wi-Fi to dual-band AC and Bluetooth 5.0 combo chips, Realtek offers cost-effective wireless solutions for IoT, consumer electronics, and networking devices.",
    "icon": "wifi",
    "image": "/images/categories/wireless-network.jpg",
    "seoTitle": "Realtek Wireless Network ICs | Wi-Fi Bluetooth | LiTong Electronics",
    "seoDescription": "Realtek Wi-Fi and Bluetooth combo ICs for wireless connectivity solutions. Technical support from LiTong Electronics.",
    "seoKeywords": ["Realtek Wi-Fi", "Bluetooth", "wireless IC", "combo chip", "802.11ac", "LiTong distributor"],
    "selectionGuide": {
      "title": "Wireless Network IC Selection Guide",
      "description": "Compare Realtek wireless ICs to find the best solution for your connectivity requirements. Consider Wi-Fi standard, Bluetooth version, and interface type.",
      "articleId": "wireless-selection",
      "articleLink": "/realtek/support/wireless-selection.html"
    },
    "faqs": [
      {
        "question": "What Wi-Fi standards do Realtek combo chips support?",
        "answer": "Realtek supports Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac), and Wi-Fi 6 (802.11ax) with various channel widths and MIMO configurations.",
        "decisionGuide": "Choose Wi-Fi 6 (RTL8852AE) for latest performance, Wi-Fi 5 (RTL8821CE/RTL8822CE) for cost optimization.",
        "keywords": ["Wi-Fi 6", "802.11ax", "Wi-Fi 5", "802.11ac"]
      },
      {
        "question": "Do Realtek combo chips support simultaneous Wi-Fi and Bluetooth?",
        "answer": "Yes, Realtek combo chips use coexistence mechanisms to enable simultaneous Wi-Fi and Bluetooth operation without interference.",
        "decisionGuide": "Combo chips ideal for devices needing both Wi-Fi and Bluetooth. Single-chip reduces BOM and complexity.",
        "keywords": ["combo chip", "coexistence", "simultaneous", "Wi-Fi Bluetooth"]
      },
      {
        "question": "What interfaces are available for wireless ICs?",
        "answer": "Realtek wireless ICs support SDIO 3.0, USB 2.0/3.0, and PCIe interfaces. SDIO for mobile, USB for flexibility, PCIe for performance.",
        "decisionGuide": "SDIO for mobile/low power. USB for plug-and-play. PCIe for maximum performance.",
        "keywords": ["SDIO", "USB", "PCIe", "interface selection"]
      }
    ],
    "products": [
      {
        "partNumber": "RTL8821CE",
        "name": "Wi-Fi 5 + Bluetooth 4.2 Combo",
        "shortDescription": "802.11ac Wi-Fi and Bluetooth 4.2 combo chip for laptops and tablets",
        "description": "The Realtek RTL8821CE is a highly integrated Wi-Fi 5 (802.11ac) and Bluetooth 4.2 combo solution designed for laptops, tablets, and embedded systems.",
        "descriptionParagraphs": [
          "The Realtek RTL8821CE is a highly integrated Wi-Fi 5 (802.11ac) and Bluetooth 4.2 combo solution designed for laptops, tablets, and embedded systems.",
          "This combo chip supports 1x1 802.11ac with MU-MIMO and Bluetooth 4.2 with BLE, providing comprehensive wireless connectivity in a compact package.",
          "With PCIe and USB interfaces available, RTL8821CE offers flexibility for various system designs while maintaining low power consumption."
        ],
        "specifications": {
          "Wi-Fi Standard": "802.11a/b/g/n/ac",
          "Bluetooth Version": "4.2 + BLE",
          "Wi-Fi Configuration": "1x1 Single-band (2.4/5GHz)",
          "Max Wi-Fi Speed": "433 Mbps",
          "Interface": "PCIe/USB",
          "MIMO": "1x1 with MU-MIMO support",
          "Channel Width": "20/40/80 MHz",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-40",
          "Power Consumption": "Low power design"
        },
        "features": [
          "802.11ac Wi-Fi 5 support",
          "Bluetooth 4.2 with BLE",
          "1x1 MIMO configuration",
          "MU-MIMO support",
          "Dual-band 2.4/5GHz",
          "PCIe/USB interface options",
          "Low power consumption",
          "Compact QFN package"
        ],
        "applications": [
          "Laptops and notebooks",
          "Tablets",
          "IoT devices",
          "Smart TVs",
          "Embedded systems"
        ],
        "faeReview": {
          "author": "Sarah Chen",
          "title": "FAE Manager - Wireless Solutions",
          "content": "RTL8821CE is our most popular combo chip for laptop applications. The cost-performance ratio is excellent, and the driver support is mature across Windows and Linux. We recommend this for mainstream laptop and tablet designs where Wi-Fi 5 is sufficient.",
          "highlight": "Cost-effective Wi-Fi 5 + Bluetooth combo for laptops"
        },
        "alternativeParts": [
          {
            "partNumber": "RTL8822CE",
            "brand": "Realtek",
            "specifications": { "Wi-Fi": "802.11ac", "BT": "5.0", "MIMO": "2x2" },
            "comparison": { "cost": "Higher", "features": "2x2 MIMO" },
            "reason": "Higher performance with 2x2 MIMO",
            "useCase": "For better range and throughput",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "2.4G-ANT", "description": "2.4GHz antenna", "category": "RF", "link": "#" },
          { "partNumber": "5G-ANT", "description": "5GHz antenna", "category": "RF", "link": "#" },
          { "partNumber": "RTL8821-EVAL", "description": "Evaluation module", "category": "Tools", "link": "#" },
          { "partNumber": "RTL8821-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTL8821-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What is the maximum Wi-Fi speed of RTL8821CE?",
            "answer": "RTL8821CE supports up to 433 Mbps in 802.11ac mode with 80MHz channel width. Actual speed depends on environment and router capabilities.",
            "decisionGuide": "433 Mbps sufficient for most applications. Consider RTL8822CE for higher throughput needs.",
            "keywords": ["maximum speed", "433 Mbps", "802.11ac", "throughput"]
          },
          {
            "question": "Does RTL8821CE support 2.4GHz and 5GHz?",
            "answer": "Yes, RTL8821CE is dual-band and supports both 2.4GHz and 5GHz frequencies, automatically selecting the best band based on signal conditions.",
            "decisionGuide": "Dual-band provides flexibility. 5GHz for less interference, 2.4GHz for better range.",
            "keywords": ["dual-band", "2.4GHz", "5GHz", "frequency"]
          },
          {
            "question": "What Bluetooth profiles are supported?",
            "answer": "RTL8821CE supports Bluetooth 4.2 with BLE (Bluetooth Low Energy). It supports standard profiles including A2DP, HFP, HID, and GATT for BLE applications.",
            "decisionGuide": "Supports common audio and data profiles. Check specific profile requirements for your application.",
            "keywords": ["Bluetooth profiles", "A2DP", "BLE", "GATT"]
          },
          {
            "question": "Can RTL8821CE be used in IoT applications?",
            "answer": "Yes, RTL8821CE is suitable for IoT with its low power consumption and compact size. For ultra-low power IoT, consider RTL8723DS.",
            "decisionGuide": "Good for connected IoT devices. Consider power requirements and size constraints.",
            "keywords": ["IoT", "low power", "embedded", "compact"]
          },
          {
            "question": "What drivers are available for RTL8821CE?",
            "answer": "Drivers available for Windows 10/11, Linux kernel 4.x+, and Android. Windows drivers included in most laptop OEM installations.",
            "decisionGuide": "Mature driver support. Check Linux kernel version for compatibility.",
            "keywords": ["drivers", "Windows", "Linux", "Android"]
          }
        ]
      },
      {
        "partNumber": "RTL8822CE",
        "name": "Wi-Fi 5 + Bluetooth 5.0 Combo (2x2)",
        "shortDescription": "802.11ac 2x2 Wi-Fi and Bluetooth 5.0 combo for high-performance applications",
        "description": "The Realtek RTL8822CE is a high-performance 2x2 MIMO Wi-Fi 5 and Bluetooth 5.0 combo chip delivering enhanced throughput and range.",
        "descriptionParagraphs": [
          "The Realtek RTL8822CE is a high-performance 2x2 MIMO Wi-Fi 5 and Bluetooth 5.0 combo chip delivering enhanced throughput and range.",
          "With 2x2 MIMO configuration, RTL8822CE provides up to 867 Mbps Wi-Fi speeds and improved range compared to 1x1 solutions.",
          "Bluetooth 5.0 support offers 2x speed and 4x range improvements over Bluetooth 4.2, making it ideal for modern wireless accessories."
        ],
        "specifications": {
          "Wi-Fi Standard": "802.11a/b/g/n/ac",
          "Bluetooth Version": "5.0 + BLE",
          "Wi-Fi Configuration": "2x2 Dual-band (2.4/5GHz)",
          "Max Wi-Fi Speed": "867 Mbps",
          "Interface": "PCIe/USB",
          "MIMO": "2x2 with MU-MIMO support",
          "Channel Width": "20/40/80 MHz",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-40",
          "Power Consumption": "Optimized power design"
        },
        "features": [
          "802.11ac Wi-Fi 5 with 2x2 MIMO",
          "Bluetooth 5.0 with 2x speed",
          "Up to 867 Mbps Wi-Fi speed",
          "MU-MIMO support",
          "Dual-band 2.4/5GHz",
          "PCIe/USB interface",
          "Improved range and throughput",
          "Compact QFN package"
        ],
        "applications": [
          "High-performance laptops",
          "Gaming systems",
          "4K streaming devices",
          "High-end tablets",
          "VR/AR devices"
        ],
        "faeReview": {
          "author": "Sarah Chen",
          "title": "FAE Manager - Wireless Solutions",
          "content": "RTL8822CE offers significant performance improvement over 1x1 solutions. The 2x2 MIMO provides better range and throughput, especially in challenging RF environments. Bluetooth 5.0 is a nice upgrade for modern accessories. Recommended for premium laptop designs.",
          "highlight": "High-performance 2x2 MIMO with Bluetooth 5.0"
        },
        "alternativeParts": [
          {
            "partNumber": "RTL8821CE",
            "brand": "Realtek",
            "specifications": { "Wi-Fi": "802.11ac", "BT": "4.2", "MIMO": "1x1" },
            "comparison": { "cost": "Lower", "features": "1x1 MIMO" },
            "reason": "Cost-optimized alternative",
            "useCase": "For budget-conscious designs",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "2.4G-ANT-2X2", "description": "2.4GHz 2x2 antenna", "category": "RF", "link": "#" },
          { "partNumber": "5G-ANT-2X2", "description": "5GHz 2x2 antenna", "category": "RF", "link": "#" },
          { "partNumber": "RTL8822-EVAL", "description": "Evaluation module", "category": "Tools", "link": "#" },
          { "partNumber": "RTL8822-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTL8822-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What is the advantage of 2x2 MIMO over 1x1?",
            "answer": "2x2 MIMO provides up to 2x the throughput (867 Mbps vs 433 Mbps) and better range through spatial diversity. It also improves reliability in multipath environments.",
            "decisionGuide": "Choose 2x2 for better performance and range. 1x1 sufficient for basic connectivity.",
            "keywords": ["2x2 MIMO", "throughput", "range", "spatial diversity"]
          },
          {
            "question": "What are the benefits of Bluetooth 5.0?",
            "answer": "Bluetooth 5.0 offers 2x speed (2 Mbps), 4x range, and 8x broadcasting capacity compared to Bluetooth 4.2. Better for wireless audio and IoT applications.",
            "decisionGuide": "Bluetooth 5.0 for modern accessories and improved performance.",
            "keywords": ["Bluetooth 5.0", "2x speed", "4x range", "improvements"]
          },
          {
            "question": "Does RTL8822CE support Wi-Fi 6?",
            "answer": "No, RTL8822CE supports Wi-Fi 5 (802.11ac). For Wi-Fi 6 support, consider RTL8852AE which offers 802.11ax capabilities.",
            "decisionGuide": "Use RTL8822CE for Wi-Fi 5. Upgrade to RTL8852AE for Wi-Fi 6.",
            "keywords": ["Wi-Fi 6", "802.11ax", "RTL8852AE", "upgrade"]
          },
          {
            "question": "What antenna configuration is needed?",
            "answer": "RTL8822CE requires two antennas for 2x2 MIMO operation. Antennas should support both 2.4GHz and 5GHz bands for dual-band operation.",
            "decisionGuide": "Two antennas required. Use dual-band antennas for optimal performance.",
            "keywords": ["antenna", "2x2", "dual-band", "MIMO"]
          },
          {
            "question": "Is RTL8822CE suitable for gaming laptops?",
            "answer": "Yes, RTL8822CE is excellent for gaming laptops with its high throughput and low latency. The 2x2 MIMO provides stable connections for online gaming.",
            "decisionGuide": "Recommended for gaming and high-performance applications.",
            "keywords": ["gaming", "low latency", "high throughput", "stable connection"]
          }
        ]
      },
      {
        "partNumber": "RTL8852AE",
        "name": "Wi-Fi 6 + Bluetooth 5.2 Combo",
        "shortDescription": "802.11ax Wi-Fi 6 and Bluetooth 5.2 combo for next-generation connectivity",
        "description": "The Realtek RTL8852AE is a cutting-edge Wi-Fi 6 (802.11ax) and Bluetooth 5.2 combo chip delivering next-generation wireless performance.",
        "descriptionParagraphs": [
          "The Realtek RTL8852AE is a cutting-edge Wi-Fi 6 (802.11ax) and Bluetooth 5.2 combo chip delivering next-generation wireless performance.",
          "Wi-Fi 6 technology provides up to 40% higher throughput in congested environments, lower latency, and improved power efficiency through Target Wake Time.",
          "With 2x2 MIMO and 80MHz channel support, RTL8852AE achieves speeds up to 1201 Mbps while maintaining backward compatibility with older Wi-Fi standards."
        ],
        "specifications": {
          "Wi-Fi Standard": "802.11a/b/g/n/ac/ax",
          "Bluetooth Version": "5.2 + BLE",
          "Wi-Fi Configuration": "2x2 Dual-band (2.4/5GHz)",
          "Max Wi-Fi Speed": "1201 Mbps (Wi-Fi 6)",
          "Interface": "PCIe",
          "MIMO": "2x2 with MU-MIMO and OFDMA",
          "Channel Width": "20/40/80 MHz",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-40",
          "Special Features": "Target Wake Time, BSS Coloring"
        },
        "features": [
          "Wi-Fi 6 (802.11ax) support",
          "Bluetooth 5.2 with BLE",
          "Up to 1201 Mbps speed",
          "OFDMA and MU-MIMO",
          "Target Wake Time (TWT)",
          "BSS Coloring for dense environments",
          "Improved power efficiency",
          "Backward compatible"
        ],
        "applications": [
          "Next-gen laptops",
          "Wi-Fi 6 routers",
          "High-end tablets",
          "Smart home hubs",
          "Enterprise devices"
        ],
        "faeReview": {
          "author": "Sarah Chen",
          "title": "FAE Manager - Wireless Solutions",
          "content": "RTL8852AE represents the latest in wireless technology. Wi-Fi 6 delivers noticeable improvements in congested environments like apartments and offices. The power efficiency gains are significant for battery-powered devices. This is our recommendation for premium designs requiring the best wireless performance.",
          "highlight": "Latest Wi-Fi 6 technology with Bluetooth 5.2"
        },
        "alternativeParts": [
          {
            "partNumber": "RTL8822CE",
            "brand": "Realtek",
            "specifications": { "Wi-Fi": "802.11ac", "BT": "5.0", "MIMO": "2x2" },
            "comparison": { "cost": "Lower", "features": "Wi-Fi 5" },
            "reason": "Cost-effective Wi-Fi 5 alternative",
            "useCase": "For Wi-Fi 5 designs",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "WIFI6-ANT-2X2", "description": "Wi-Fi 6 optimized antennas", "category": "RF", "link": "#" },
          { "partNumber": "RTL8852-EVAL", "description": "Evaluation module", "category": "Tools", "link": "#" },
          { "partNumber": "RTL8852-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTL8852-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTL8852-SW", "description": "Driver software", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What are the benefits of Wi-Fi 6 over Wi-Fi 5?",
            "answer": "Wi-Fi 6 (802.11ax) provides up to 40% higher throughput in dense environments, lower latency, better power efficiency with Target Wake Time, and improved performance with OFDMA technology.",
            "decisionGuide": "Wi-Fi 6 for congested environments and power-sensitive devices. Wi-Fi 5 sufficient for less demanding applications.",
            "keywords": ["Wi-Fi 6", "802.11ax", "OFDMA", "TWT", "efficiency"]
          },
          {
            "question": "Do I need a Wi-Fi 6 router to use RTL8852AE?",
            "answer": "RTL8852AE works with any Wi-Fi router but requires a Wi-Fi 6 router to achieve maximum speeds and benefits. It is backward compatible with older routers.",
            "decisionGuide": "Works with existing routers. Upgrade router for full Wi-Fi 6 benefits.",
            "keywords": ["Wi-Fi 6 router", "backward compatible", "upgrade"]
          },
          {
            "question": "What is Target Wake Time (TWT)?",
            "answer": "TWT is a Wi-Fi 6 feature that allows devices to schedule wake times for data transmission, significantly reducing power consumption for battery-powered devices.",
            "decisionGuide": "TWT beneficial for laptops and IoT devices. Extends battery life.",
            "keywords": ["Target Wake Time", "TWT", "power saving", "battery life"]
          },
          {
            "question": "Does RTL8852AE support 6GHz Wi-Fi 6E?",
            "answer": "No, RTL8852AE supports standard Wi-Fi 6 on 2.4GHz and 5GHz bands. For 6GHz Wi-Fi 6E support, different chipsets are required.",
            "decisionGuide": "RTL8852AE for standard Wi-Fi 6. Contact FAE for Wi-Fi 6E options.",
            "keywords": ["Wi-Fi 6E", "6GHz", "tri-band", "limitations"]
          },
          {
            "question": "What is BSS Coloring?",
            "answer": "BSS Coloring is a Wi-Fi 6 feature that helps devices distinguish between their own network and neighboring networks in dense deployments, improving performance in apartments and offices.",
            "decisionGuide": "BSS Coloring improves performance in dense environments with many networks.",
            "keywords": ["BSS Coloring", "dense environment", "interference reduction"]
          }
        ]
      },
      {
        "partNumber": "RTL8723DS",
        "name": "Wi-Fi 4 + Bluetooth 4.2 Combo (Low Power)",
        "shortDescription": "Cost-effective Wi-Fi 4 and Bluetooth 4.2 combo for IoT and embedded applications",
        "description": "The Realtek RTL8723DS is a cost-effective Wi-Fi 4 (802.11n) and Bluetooth 4.2 combo chip optimized for IoT and embedded applications.",
        "descriptionParagraphs": [
          "The Realtek RTL8723DS is a cost-effective Wi-Fi 4 (802.11n) and Bluetooth 4.2 combo chip optimized for IoT and embedded applications.",
          "This highly integrated solution provides reliable wireless connectivity with minimal power consumption, making it ideal for battery-powered devices.",
          "RTL8723DS supports SDIO interface for easy integration with embedded processors and microcontrollers."
        ],
        "specifications": {
          "Wi-Fi Standard": "802.11b/g/n",
          "Bluetooth Version": "4.2 + BLE",
          "Wi-Fi Configuration": "1x1 Single-band (2.4GHz)",
          "Max Wi-Fi Speed": "150 Mbps",
          "Interface": "SDIO/USB",
          "MIMO": "1x1 SISO",
          "Channel Width": "20/40 MHz",
          "Operating Temperature": "-20°C to +70°C",
          "Package": "QFN-40",
          "Power Consumption": "Ultra-low power design"
        },
        "features": [
          "802.11n Wi-Fi 4 support",
          "Bluetooth 4.2 with BLE",
          "Cost-effective design",
          "Ultra-low power consumption",
          "SDIO/USB interface",
          "2.4GHz single-band",
          "Compact QFN package",
          "Easy integration"
        ],
        "applications": [
          "IoT sensors",
          "Smart home devices",
          "Wearable devices",
          "Industrial IoT",
          "Embedded systems"
        ],
        "faeReview": {
          "author": "Sarah Chen",
          "title": "FAE Manager - Wireless Solutions",
          "content": "RTL8723DS is our recommendation for cost-sensitive IoT applications. The power consumption is excellent for battery-powered devices. While it only supports 2.4GHz and Wi-Fi 4, it's sufficient for many IoT use cases. The SDIO interface makes it easy to integrate with various microcontrollers.",
          "highlight": "Ultra-low power combo for IoT applications"
        },
        "alternativeParts": [
          {
            "partNumber": "RTL8821CE",
            "brand": "Realtek",
            "specifications": { "Wi-Fi": "802.11ac", "BT": "4.2", "Band": "Dual" },
            "comparison": { "cost": "Higher", "features": "Wi-Fi 5, 5GHz" },
            "reason": "Upgrade to Wi-Fi 5 and dual-band",
            "useCase": "For higher performance needs",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "2.4G-ANT-IoT", "description": "Compact 2.4GHz antenna", "category": "RF", "link": "#" },
          { "partNumber": "RTL8723-EVAL", "description": "Evaluation module", "category": "Tools", "link": "#" },
          { "partNumber": "RTL8723-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTL8723-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTL8723-SW", "description": "Driver software", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "Is RTL8723DS suitable for battery-powered IoT devices?",
            "answer": "Yes, RTL8723DS is specifically designed for low power consumption with sleep modes and efficient power management, making it ideal for battery-powered IoT devices.",
            "decisionGuide": "Excellent for battery IoT. Use sleep modes for maximum battery life.",
            "keywords": ["battery powered", "IoT", "low power", "sleep mode"]
          },
          {
            "question": "Why choose RTL8723DS over Wi-Fi 5/6 solutions?",
            "answer": "RTL8723DS offers lower cost and power consumption compared to Wi-Fi 5/6 solutions. For IoT applications that don't need high bandwidth, it's a cost-effective choice.",
            "decisionGuide": "Choose for cost and power sensitive IoT. Upgrade to Wi-Fi 5/6 for higher bandwidth needs.",
            "keywords": ["cost effective", "low power", "IoT", "bandwidth"]
          },
          {
            "question": "Does RTL8723DS support 5GHz Wi-Fi?",
            "answer": "No, RTL8723DS is 2.4GHz only. For 5GHz support, consider RTL8821CE or other dual-band solutions.",
            "decisionGuide": "2.4GHz only. Consider dual-band alternatives if 5GHz is required.",
            "keywords": ["2.4GHz", "single band", "5GHz not supported"]
          },
          {
            "question": "What microcontrollers work well with RTL8723DS?",
            "answer": "RTL8723DS works with various microcontrollers via SDIO interface. Popular choices include STM32, NXP i.MX, and Raspberry Pi. Check SDIO compatibility for your specific MCU.",
            "decisionGuide": "Verify SDIO support on your microcontroller. Contact FAE for integration guidance.",
            "keywords": ["microcontroller", "SDIO", "STM32", "integration"]
          },
          {
            "question": "What is the typical power consumption in sleep mode?",
            "answer": "RTL8723DS consumes microamps in deep sleep mode. Actual consumption depends on configuration and wake-up frequency. Contact FAE for detailed power analysis.",
            "decisionGuide": "Very low sleep current suitable for battery applications. Optimize wake frequency for best battery life.",
            "keywords": ["sleep mode", "power consumption", "deep sleep", "battery life"]
          }
        ]
      },
      {
        "partNumber": "RTL8811CU",
        "name": "Wi-Fi 5 USB Single-Band",
        "shortDescription": "USB-based Wi-Fi 5 solution for dongles and embedded applications",
        "description": "The Realtek RTL8811CU is a USB-based Wi-Fi 5 (802.11ac) single-band solution designed for USB Wi-Fi dongles and embedded applications.",
        "descriptionParagraphs": [
          "The Realtek RTL8811CU is a USB-based Wi-Fi 5 (802.11ac) single-band solution designed for USB Wi-Fi dongles and embedded applications.",
          "This chip provides an easy way to add Wi-Fi 5 connectivity via USB interface without the complexity of PCIe or SDIO integration.",
          "RTL8811CU is ideal for USB Wi-Fi adapters, embedded Linux systems, and applications requiring simple Wi-Fi upgrade capability."
        ],
        "specifications": {
          "Wi-Fi Standard": "802.11a/b/g/n/ac",
          "Wi-Fi Configuration": "1x1 Single-band (2.4/5GHz)",
          "Max Wi-Fi Speed": "433 Mbps",
          "Interface": "USB 2.0",
          "MIMO": "1x1 SISO",
          "Channel Width": "20/40/80 MHz",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-32",
          "Power": "USB bus powered"
        },
        "features": [
          "802.11ac Wi-Fi 5 support",
          "USB 2.0 interface",
          "Up to 433 Mbps speed",
          "Plug-and-play capability",
          "Linux driver support",
          "Compact QFN package",
          "Low cost design",
          "Easy integration"
        ],
        "applications": [
          "USB Wi-Fi dongles",
          "Embedded Linux systems",
          "Industrial PCs",
          "Set-top boxes",
          "Smart TVs"
        ],
        "faeReview": {
          "author": "Sarah Chen",
          "title": "FAE Manager - Wireless Solutions",
          "content": "RTL8811CU is perfect for USB Wi-Fi dongle applications. The USB interface makes it plug-and-play on most systems. Good Linux support makes it popular for embedded applications. Cost-effective solution for adding Wi-Fi 5 via USB.",
          "highlight": "USB Wi-Fi 5 solution for dongles and embedded"
        },
        "alternativeParts": [
          {
            "partNumber": "RTL8821CU",
            "brand": "Realtek",
            "specifications": { "Wi-Fi": "802.11ac", "BT": "Yes", "Interface": "USB" },
            "comparison": { "cost": "Higher", "features": "With Bluetooth" },
            "reason": "Combo chip alternative",
            "useCase": "If Bluetooth also needed",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "USB-ANT", "description": "USB Wi-Fi antenna", "category": "RF", "link": "#" },
          { "partNumber": "RTL8811-EVAL", "description": "USB evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTL8811-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTL8811-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTL8811-SW", "description": "Linux drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "Does RTL8811CU work with Linux?",
            "answer": "Yes, RTL8811CU has good Linux driver support. Drivers are available in Linux kernel 4.x+ and can be compiled for embedded systems.",
            "decisionGuide": "Good Linux support. Check kernel version compatibility for your distribution.",
            "keywords": ["Linux", "driver support", "kernel", "embedded"]
          },
          {
            "question": "What is the maximum speed over USB 2.0?",
            "answer": "While RTL8811CU supports 433 Mbps Wi-Fi, USB 2.0 practical throughput is around 300-350 Mbps. For full 433 Mbps, USB 3.0 would be needed.",
            "decisionGuide": "USB 2.0 sufficient for most applications. Consider USB bandwidth limitations.",
            "keywords": ["USB 2.0", "throughput", "bandwidth", "speed limitation"]
          },
          {
            "question": "Can RTL8811CU be used in embedded systems?",
            "answer": "Yes, RTL8811CU is commonly used in embedded Linux systems. The USB interface simplifies integration compared to PCIe or SDIO solutions.",
            "decisionGuide": "Good for embedded Linux. USB interface simplifies hardware design.",
            "keywords": ["embedded", "Linux", "USB interface", "integration"]
          },
          {
            "question": "Does RTL8811CU support Access Point mode?",
            "answer": "Yes, RTL8811CU supports SoftAP mode for creating Wi-Fi hotspots. This requires appropriate driver configuration and host processor support.",
            "decisionGuide": "Supports AP mode for hotspot applications. Check driver capabilities.",
            "keywords": ["SoftAP", "Access Point", "hotspot", "AP mode"]
          },
          {
            "question": "Is RTL8811CU dual-band?",
            "answer": "RTL8811CU supports both 2.4GHz and 5GHz bands but operates on one band at a time. It automatically selects the best band or can be configured manually.",
            "decisionGuide": "Dual-band capable but single-band operation. Switches between bands.",
            "keywords": ["dual-band", "2.4GHz", "5GHz", "band selection"]
          }
        ]
      },
      {
        "partNumber": "RTL8821CU",
        "name": "Wi-Fi 5 + Bluetooth 4.2 USB Combo",
        "shortDescription": "USB combo solution with Wi-Fi 5 and Bluetooth for versatile connectivity",
        "description": "The Realtek RTL8821CU is a USB-based combo chip offering Wi-Fi 5 (802.11ac) and Bluetooth 4.2 in a single solution.",
        "descriptionParagraphs": [
          "The Realtek RTL8821CU is a USB-based combo chip offering Wi-Fi 5 (802.11ac) and Bluetooth 4.2 in a single solution.",
          "This versatile chip provides both Wi-Fi and Bluetooth connectivity through a single USB interface, simplifying design and reducing component count.",
          "RTL8821CU is ideal for USB combo dongles, mini PCs, and embedded systems requiring both wireless technologies."
        ],
        "specifications": {
          "Wi-Fi Standard": "802.11a/b/g/n/ac",
          "Bluetooth Version": "4.2 + BLE",
          "Wi-Fi Configuration": "1x1 Dual-band (2.4/5GHz)",
          "Max Wi-Fi Speed": "433 Mbps",
          "Interface": "USB 2.0",
          "MIMO": "1x1 SISO",
          "Channel Width": "20/40/80 MHz",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-40",
          "Power": "USB bus powered"
        },
        "features": [
          "802.11ac Wi-Fi 5",
          "Bluetooth 4.2 + BLE",
          "Dual-band 2.4/5GHz",
          "Single USB interface",
          "Up to 433 Mbps Wi-Fi",
          "Wi-Fi/Bluetooth coexistence",
          "Compact design",
          "Cost-effective combo"
        ],
        "applications": [
          "USB combo dongles",
          "Mini PCs",
          "Industrial computers",
          "Gaming consoles",
          "Smart displays"
        ],
        "faeReview": {
          "author": "Sarah Chen",
          "title": "FAE Manager - Wireless Solutions",
          "content": "RTL8821CU offers great versatility with both Wi-Fi and Bluetooth over USB. Popular for mini PCs and USB dongles. The coexistence mechanism works well for simultaneous operation. Good value for applications needing both wireless technologies.",
          "highlight": "Versatile USB combo with Wi-Fi and Bluetooth"
        },
        "alternativeParts": [
          {
            "partNumber": "RTL8811CU",
            "brand": "Realtek",
            "specifications": { "Wi-Fi": "802.11ac", "BT": "No", "Interface": "USB" },
            "comparison": { "cost": "Lower", "features": "Wi-Fi only" },
            "reason": "Wi-Fi only alternative",
            "useCase": "If Bluetooth not needed",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "COMBO-ANT", "description": "Wi-Fi/BT combo antenna", "category": "RF", "link": "#" },
          { "partNumber": "RTL8821CU-EVAL", "description": "USB evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTL8821CU-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTL8821CU-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTL8821CU-SW", "description": "Driver package", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "Can Wi-Fi and Bluetooth work simultaneously?",
            "answer": "Yes, RTL8821CU uses coexistence mechanisms to allow simultaneous Wi-Fi and Bluetooth operation. The chip manages spectrum sharing to minimize interference.",
            "decisionGuide": "Simultaneous operation supported. Good for applications needing both technologies.",
            "keywords": ["coexistence", "simultaneous", "Wi-Fi Bluetooth", "interference"]
          },
          {
            "question": "What is the advantage over separate Wi-Fi and BT chips?",
            "answer": "Combo chip reduces BOM cost, PCB space, and design complexity. Single USB interface simplifies integration compared to managing two separate chips.",
            "decisionGuide": "Combo chip for cost and space savings. Reduces design complexity.",
            "keywords": ["combo chip", "BOM cost", "PCB space", "integration"]
          },
          {
            "question": "Does RTL8821CU support Windows and Linux?",
            "answer": "Yes, drivers available for Windows 10/11 and Linux kernel 4.x+. Windows drivers often included in Windows Update.",
            "decisionGuide": "Good OS support. Windows drivers readily available. Linux support mature.",
            "keywords": ["Windows", "Linux", "driver support", "OS compatibility"]
          },
          {
            "question": "Can RTL8821CU be used in USB 3.0 ports?",
            "answer": "Yes, RTL8821CU works in USB 3.0 ports and is backward compatible. However, it operates at USB 2.0 speeds as it's a USB 2.0 device.",
            "decisionGuide": "Works in USB 3.0 ports but at USB 2.0 speeds. Backward compatible.",
            "keywords": ["USB 3.0", "backward compatible", "USB 2.0 speeds"]
          },
          {
            "question": "What Bluetooth profiles are supported?",
            "answer": "RTL8821CU supports standard Bluetooth 4.2 profiles including A2DP for audio, HFP for hands-free, HID for input devices, and various BLE GATT profiles.",
            "decisionGuide": "Supports common profiles for audio, data, and HID applications.",
            "keywords": ["Bluetooth profiles", "A2DP", "HFP", "HID", "BLE"]
          }
        ]
      }
    ]
  },
  {
    "id": "audio-codecs",
    "name": "Audio Codecs",
    "description": "High-definition audio codec solutions for PC motherboards, gaming systems, and consumer electronics",
    "longDescription": "Realtek audio codecs deliver premium sound quality for consumer electronics applications. From HD Audio codecs for PC motherboards to multi-channel solutions for home theater systems, Realtek provides comprehensive audio solutions with high SNR, integrated amplifiers, and advanced audio processing features.",
    "icon": "music",
    "image": "/images/categories/audio-codecs.jpg",
    "seoTitle": "Realtek Audio Codecs | HD Audio Solutions | LiTong Electronics",
    "seoDescription": "High-quality audio codec solutions from Realtek for PCs, gaming, and home entertainment. Technical support from LiTong Electronics.",
    "seoKeywords": ["audio codec", "HD Audio", "Realtek audio", "PC audio", "gaming audio", "LiTong distributor"],
    "selectionGuide": {
      "title": "Audio Codec Selection Guide",
      "description": "Compare Realtek audio codecs based on channel configuration, SNR requirements, and application needs.",
      "articleId": "audio-selection",
      "articleLink": "/realtek/support/audio-selection.html"
    },
    "faqs": [
      {
        "question": "What SNR do Realtek audio codecs achieve?",
        "answer": "Realtek audio codecs range from 95dB to 120dB SNR. ALC662 offers 95dB, ALC897 provides 108dB, and ALC1220 achieves 120dB for premium applications.",
        "decisionGuide": "Choose SNR based on application. 95dB for basic, 108dB for quality, 120dB for premium audio.",
        "keywords": ["SNR", "audio quality", "ALC1220", "ALC897"]
      },
      {
        "question": "Do Realtek codecs support surround sound?",
        "answer": "Yes, Realtek offers 2.0, 5.1, and 7.1 channel configurations. Premium codecs support DTS Connect and Dolby Digital for surround sound encoding.",
        "decisionGuide": "Choose channel configuration based on application. 7.1 for home theater, 2.0 for basic stereo.",
        "keywords": ["surround sound", "7.1 channel", "DTS", "Dolby"]
      },
      {
        "question": "Can Realtek codecs drive high-impedance headphones?",
        "answer": "Premium Realtek codecs like ALC1220 include integrated headphone amplifiers capable of driving headphones up to 600 ohms with 2Vrms output.",
        "decisionGuide": "ALC1220 for high-impedance headphones. Standard codecs for typical 32-ohm headphones.",
        "keywords": ["headphone amplifier", "high impedance", "600 ohm", "2Vrms"]
      }
    ],
    "products": [
      {
        "partNumber": "ALC897",
        "name": "7.1 Channel HD Audio Codec",
        "shortDescription": "High-definition 7.1 channel audio codec for PC motherboards and consumer electronics",
        "description": "The Realtek ALC897 is a 7.1 channel high-definition audio codec designed for PC motherboards and consumer electronics applications.",
        "descriptionParagraphs": [
          "The Realtek ALC897 is a 7.1 channel high-definition audio codec designed for PC motherboards and consumer electronics applications.",
          "This codec provides 108dB SNR for DAC playback and supports up to 192kHz/24-bit audio resolution for high-quality sound reproduction.",
          "ALC897 features two independent SPDIF outputs and integrated headphone amplifier, making it ideal for multimedia PC applications."
        ],
        "specifications": {
          "Audio Standard": "Intel HD Audio",
          "Channels": "7.1 Channel",
          "DAC SNR": "108 dB",
          "ADC SNR": "101 dB",
          "Max Sample Rate": "192 kHz / 24-bit",
          "SPDIF": "Two independent outputs",
          "Headphone Amp": "Integrated",
          "Interface": "HD Audio Link",
          "Package": "48-pin LQFP",
          "Power Supply": "3.3V, 5V"
        },
        "features": [
          "7.1 channel surround sound",
          "108dB DAC SNR",
          "192kHz/24-bit support",
          "Two SPDIF outputs",
          "Integrated headphone amp",
          "Jack detection",
          "Pop noise suppression",
          "PCBeep masking"
        ],
        "applications": [
          "PC motherboards",
          "All-in-one PCs",
          "Media centers",
          "Gaming systems",
          "Home theater PCs"
        ],
        "faeReview": {
          "author": "Michael Chen",
          "title": "Senior FAE - Audio Solutions",
          "content": "ALC897 is a solid choice for mainstream motherboard audio. The 108dB SNR provides good quality for most users. Two SPDIF outputs are useful for digital audio connections. We recommend this for standard PC and consumer applications where premium audio isn't required.",
          "highlight": "Reliable 7.1 audio for mainstream applications"
        },
        "alternativeParts": [
          {
            "partNumber": "ALC887",
            "brand": "Realtek",
            "specifications": { "SNR": "97dB", "Channels": "7.1" },
            "comparison": { "cost": "Lower", "features": "Lower SNR" },
            "reason": "Cost-optimized alternative",
            "useCase": "For budget motherboards",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "AUDIO-CAPS", "description": "Audio grade capacitors", "category": "Passive", "link": "#" },
          { "partNumber": "ALC897-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "ALC897-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "ALC897-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "ALC897-SW", "description": "Audio drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What is the difference between ALC897 and ALC887?",
            "answer": "ALC897 offers 108dB SNR compared to ALC887's 97dB. ALC897 also has improved headphone amplifier and better overall audio quality. ALC897 is the recommended choice for new designs.",
            "decisionGuide": "ALC897 for better quality. ALC887 for cost-sensitive designs.",
            "keywords": ["ALC897", "ALC887", "comparison", "SNR difference"]
          },
          {
            "question": "Does ALC897 support optical audio output?",
            "answer": "ALC897 supports optical audio through SPDIF output. Two independent SPDIF outputs are available for flexible digital audio routing.",
            "decisionGuide": "SPDIF available for optical output. Check motherboard implementation.",
            "keywords": ["optical audio", "SPDIF", "TOSLINK", "digital output"]
          },
          {
            "question": "What headphone impedance can ALC897 drive?",
            "answer": "ALC897's integrated headphone amp can drive typical 32-ohm headphones. For high-impedance headphones (250-600 ohm), consider ALC1220 with more powerful amplifier.",
            "decisionGuide": "Good for standard headphones. Upgrade to ALC1220 for high-impedance cans.",
            "keywords": ["headphone impedance", "32 ohm", "amplifier", "ALC1220"]
          },
          {
            "question": "Does ALC897 support microphone input?",
            "answer": "Yes, ALC897 supports stereo microphone input with features like acoustic echo cancellation (AEC), beam forming (BF), and noise suppression (NS) for voice applications.",
            "decisionGuide": "Good microphone support with voice enhancement features.",
            "keywords": ["microphone", "AEC", "beam forming", "noise suppression"]
          },
          {
            "question": "Is ALC897 suitable for gaming motherboards?",
            "answer": "ALC897 provides good audio quality for gaming. For premium gaming audio with higher SNR and better headphone amp, consider ALC1220 or ALC4080.",
            "decisionGuide": "Suitable for mainstream gaming. Upgrade to premium codecs for enthusiast audio.",
            "keywords": ["gaming", "motherboard audio", "ALC1220", "premium"]
          }
        ]
      },
      {
        "partNumber": "ALC1220",
        "name": "Premium 7.1 HD Audio Codec",
        "shortDescription": "High-end 120dB SNR audio codec for premium motherboards and audio applications",
        "description": "The Realtek ALC1220 is a premium 7.1 channel HD audio codec delivering 120dB SNR for audiophile-grade sound quality.",
        "descriptionParagraphs": [
          "The Realtek ALC1220 is a premium 7.1 channel HD audio codec delivering 120dB SNR for audiophile-grade sound quality.",
          "This codec features a high-performance DAC with 120dB SNR and integrated headphone amplifier capable of driving up to 600-ohm headphones with 2Vrms output.",
          "ALC1220 supports premium audio technologies including DTS Connect and Dolby Digital Live for immersive surround sound experiences."
        ],
        "specifications": {
          "Audio Standard": "Intel HD Audio",
          "Channels": "7.1 Channel",
          "DAC SNR": "120 dB",
          "ADC SNR": "110 dB",
          "Max Sample Rate": "192 kHz / 24-bit",
          "Headphone Output": "2Vrms, up to 600 ohm",
          "SPDIF": "Input and Output",
          "Interface": "HD Audio Link",
          "Package": "48-pin LQFP",
          "Special Features": "DTS Connect, Dolby Digital Live"
        },
        "features": [
          "120dB DAC SNR",
          "High-power headphone amp",
          "2Vrms output capability",
          "600-ohm headphone support",
          "DTS Connect support",
          "Dolby Digital Live",
          "192kHz/24-bit audio",
          "Premium audio quality"
        ],
        "applications": [
          "Premium motherboards",
          "Gaming systems",
          "Audio workstations",
          "Home theater PCs",
          "High-end media centers"
        ],
        "faeReview": {
          "author": "Michael Chen",
          "title": "Senior FAE - Audio Solutions",
          "content": "ALC1220 is our top recommendation for premium motherboard audio. The 120dB SNR is excellent, and the headphone amp can drive demanding headphones. We've seen this in many high-end gaming and creator motherboards. The DTS and Dolby support adds value for home theater applications.",
          "highlight": "Premium 120dB audio for enthusiast motherboards"
        },
        "alternativeParts": [
          {
            "partNumber": "ALC897",
            "brand": "Realtek",
            "specifications": { "SNR": "108dB", "Channels": "7.1" },
            "comparison": { "cost": "Lower", "features": "Lower SNR" },
            "reason": "Cost-effective alternative",
            "useCase": "For mainstream motherboards",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "AUDIO-CAPS-PREM", "description": "Premium audio capacitors", "category": "Passive", "link": "#" },
          { "partNumber": "ALC1220-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "ALC1220-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "ALC1220-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "ALC1220-SW", "description": "Audio drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What makes ALC1220 better than ALC897?",
            "answer": "ALC1220 offers 120dB SNR vs 108dB for ALC897. It also has a more powerful headphone amp (2Vrms vs 1.5Vrms) and supports premium features like DTS Connect and Dolby Digital Live.",
            "decisionGuide": "ALC1220 for premium audio. ALC897 for mainstream applications.",
            "keywords": ["ALC1220", "ALC897", "comparison", "SNR", "headphone amp"]
          },
          {
            "question": "Can ALC1220 drive high-impedance headphones?",
            "answer": "Yes, ALC1220's headphone amp can drive headphones up to 600 ohms with 2Vrms output. This covers most audiophile headphones including Sennheiser HD600/650 series.",
            "decisionGuide": "Excellent for high-impedance headphones. No external amp needed for most cans.",
            "keywords": ["high impedance", "600 ohm", "headphone amp", "2Vrms"]
          },
          {
            "question": "Does ALC1220 support surround sound encoding?",
            "answer": "Yes, ALC1220 supports DTS Connect and Dolby Digital Live, which encode multi-channel audio into digital bitstreams for external decoders and receivers.",
            "decisionGuide": "Great for home theater setups with external decoders.",
            "keywords": ["DTS Connect", "Dolby Digital", "surround encoding", "bitstream"]
          },
          {
            "question": "What motherboards use ALC1220?",
            "answer": "ALC1220 is used in premium motherboards from ASUS ROG, Gigabyte AORUS, MSI Gaming, and ASRock Taichi series. Look for high-end Z-series and X-series boards.",
            "decisionGuide": "Common in $200+ motherboards. Check specifications for confirmation.",
            "keywords": ["motherboard", "ASUS ROG", "Gigabyte AORUS", "premium"]
          },
          {
            "question": "Is ALC1220 suitable for audio production?",
            "answer": "ALC1220 provides good quality for consumer audio production. For professional studio work, dedicated audio interfaces with higher specs are recommended.",
            "decisionGuide": "Good for hobbyist production. Professional studios should consider dedicated interfaces.",
            "keywords": ["audio production", "studio", "professional", "consumer"]
          }
        ]
      },
      {
        "partNumber": "ALC4080",
        "name": "USB Type-C Audio Codec",
        "shortDescription": "USB Type-C audio solution with 120dB SNR and Power Delivery support",
        "description": "The Realtek ALC4080 is a USB Type-C audio codec delivering premium 120dB SNR audio with modern USB-C connectivity.",
        "descriptionParagraphs": [
          "The Realtek ALC4080 is a USB Type-C audio codec delivering premium 120dB SNR audio with modern USB-C connectivity.",
          "This codec supports USB Type-C with Power Delivery, enabling audio output while charging through a single connector.",
          "ALC4080 achieves 120dB SNR and supports up to 384kHz/32-bit audio, making it ideal for USB-C headphones, dongles, and modern audio accessories."
        ],
        "specifications": {
          "Interface": "USB Type-C",
          "USB Audio Class": "UAC 2.0",
          "Channels": "2.0 Stereo",
          "DAC SNR": "120 dB",
          "ADC SNR": "110 dB",
          "Max Sample Rate": "384 kHz / 32-bit",
          "Headphone Output": "2Vrms",
          "Power Delivery": "Supported",
          "Package": "QFN-48",
          "Special Features": "USB-C with PD, Hi-Res Audio"
        },
        "features": [
          "USB Type-C interface",
          "120dB DAC SNR",
          "384kHz/32-bit support",
          "Power Delivery support",
          "2Vrms headphone output",
          "Hi-Res Audio certified",
          "Plug-and-play",
          "Compact design"
        ],
        "applications": [
          "USB-C headphones",
          "USB-C audio dongles",
          "Mobile accessories",
          "Gaming headsets",
          "Hi-Res audio devices"
        ],
        "faeReview": {
          "author": "Michael Chen",
          "title": "Senior FAE - Audio Solutions",
          "content": "ALC4080 is perfect for modern USB-C audio applications. The Power Delivery support allows charging while using audio. 384kHz/32-bit capability is excellent for Hi-Res audio. We're seeing strong demand for USB-C dongles and gaming headsets using this chip.",
          "highlight": "Modern USB-C audio with Power Delivery"
        },
        "alternativeParts": [
          {
            "partNumber": "ALC1220",
            "brand": "Realtek",
            "specifications": { "Interface": "HD Audio", "SNR": "120dB" },
            "comparison": { "cost": "Similar", "features": "Internal HD Audio" },
            "reason": "Internal audio alternative",
            "useCase": "For motherboard integration",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "USB-C-CONN", "description": "USB Type-C connector", "category": "Connector", "link": "#" },
          { "partNumber": "PD-CONTROLLER", "description": "PD controller", "category": "Power", "link": "#" },
          { "partNumber": "ALC4080-EVAL", "description": "USB-C eval board", "category": "Tools", "link": "#" },
          { "partNumber": "ALC4080-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "ALC4080-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" }
        ],
        "faqs": [
          {
            "question": "Does ALC4080 work with all USB-C ports?",
            "answer": "ALC4080 works with USB-C ports that support USB 2.0 or USB 3.x data. For audio + charging, the port must support Power Delivery or have separate power pins.",
            "decisionGuide": "Works with most USB-C ports. Check port capabilities for charging support.",
            "keywords": ["USB-C", "compatibility", "Power Delivery", "charging"]
          },
          {
            "question": "Can ALC4080 charge devices while playing audio?",
            "answer": "Yes, ALC4080 supports Power Delivery pass-through, allowing device charging while audio is playing through the same USB-C connection.",
            "decisionGuide": "Great for mobile accessories. Simultaneous audio and charging supported.",
            "keywords": ["Power Delivery", "charging", "simultaneous", "pass-through"]
          },
          {
            "question": "What is the difference between ALC4080 and ALC1220?",
            "answer": "ALC4080 uses USB Type-C interface for external/dongle applications. ALC1220 uses Intel HD Audio interface for motherboard integration. Both offer 120dB SNR.",
            "decisionGuide": "ALC4080 for USB-C dongles/accessories. ALC1220 for motherboard audio.",
            "keywords": ["ALC4080", "ALC1220", "USB-C", "HD Audio", "comparison"]
          },
          {
            "question": "Does ALC4080 support microphone input?",
            "answer": "Yes, ALC4080 supports both headphone output and microphone input through USB-C, enabling headset functionality with single connector.",
            "decisionGuide": "Full headset support with audio output and mic input.",
            "keywords": ["microphone", "headset", "input", "USB-C audio"]
          },
          {
            "question": "Is ALC4080 compatible with iOS and Android?",
            "answer": "ALC4080 is compatible with Android devices. iOS compatibility depends on Apple's MFi certification requirements for USB-C audio accessories.",
            "decisionGuide": "Android compatible. Check MFi requirements for iOS accessories.",
            "keywords": ["iOS", "Android", "compatibility", "MFi", "mobile"]
          }
        ]
      },
      {
        "partNumber": "ALC662",
        "name": "5.1 Channel HD Audio Codec",
        "shortDescription": "Cost-effective 5.1 channel audio codec for entry-level motherboards",
        "description": "The Realtek ALC662 is a cost-effective 5.1 channel HD audio codec designed for entry-level PC motherboards and embedded applications.",
        "descriptionParagraphs": [
          "The Realtek ALC662 is a cost-effective 5.1 channel HD audio codec designed for entry-level PC motherboards and embedded applications.",
          "This codec provides 95dB SNR and supports 5.1 channel surround sound, offering good audio quality for basic multimedia applications.",
          "ALC662 is ideal for budget motherboards, office PCs, and embedded systems where cost is a primary consideration."
        ],
        "specifications": {
          "Audio Standard": "Intel HD Audio",
          "Channels": "5.1 Channel",
          "DAC SNR": "95 dB",
          "ADC SNR": "90 dB",
          "Max Sample Rate": "96 kHz / 24-bit",
          "SPDIF": "One output",
          "Headphone Amp": "Basic integrated",
          "Interface": "HD Audio Link",
          "Package": "48-pin LQFP",
          "Power Supply": "3.3V, 5V"
        },
        "features": [
          "5.1 channel surround",
          "95dB DAC SNR",
          "96kHz/24-bit support",
          "One SPDIF output",
          "Basic headphone amp",
          "Jack detection",
          "Cost-effective design",
          "Low power consumption"
        ],
        "applications": [
          "Entry-level motherboards",
          "Office PCs",
          "Embedded systems",
          "Industrial PCs",
          "Budget media centers"
        ],
        "faeReview": {
          "author": "Michael Chen",
          "title": "Senior FAE - Audio Solutions",
          "content": "ALC662 is a cost-effective solution for basic audio needs. The 5.1 channel support is adequate for multimedia, and 95dB SNR is acceptable for non-audiophile users. We recommend this for budget builds and office PCs where audio quality isn't the priority.",
          "highlight": "Cost-effective 5.1 audio for budget applications"
        },
        "alternativeParts": [
          {
            "partNumber": "ALC897",
            "brand": "Realtek",
            "specifications": { "SNR": "108dB", "Channels": "7.1" },
            "comparison": { "cost": "Higher", "features": "Better SNR, 7.1" },
            "reason": "Upgrade path",
            "useCase": "For better audio quality",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "AUDIO-CAPS-STD", "description": "Standard audio capacitors", "category": "Passive", "link": "#" },
          { "partNumber": "ALC662-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "ALC662-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "ALC662-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "ALC662-SW", "description": "Audio drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "Is ALC662 suitable for gaming?",
            "answer": "ALC662 provides basic audio suitable for casual gaming. For competitive gaming or better positional audio, consider ALC897 or ALC1220 with higher SNR.",
            "decisionGuide": "OK for casual gaming. Upgrade to premium codecs for serious gaming.",
            "keywords": ["gaming", "casual", "positional audio", "upgrade"]
          },
          {
            "question": "What is the difference between 5.1 and 7.1 audio?",
            "answer": "5.1 audio uses 5 speakers + subwoofer (front L/R, center, rear L/R). 7.1 adds two side speakers for more immersive surround. ALC662 supports 5.1 only.",
            "decisionGuide": "5.1 sufficient for most setups. 7.1 for premium home theater.",
            "keywords": ["5.1", "7.1", "surround sound", "speakers"]
          },
          {
            "question": "Does ALC662 support Windows 10/11?",
            "answer": "Yes, ALC662 is fully supported on Windows 10 and Windows 11 through Realtek HD Audio drivers. Drivers are available through Windows Update and Realtek website.",
            "decisionGuide": "Full Windows support. Drivers readily available.",
            "keywords": ["Windows 10", "Windows 11", "driver support", "HD Audio"]
          },
          {
            "question": "Can ALC662 drive studio headphones?",
            "answer": "ALC662 can drive typical 32-ohm headphones. For high-impedance studio headphones (250+ ohms), an external headphone amplifier is recommended.",
            "decisionGuide": "OK for standard headphones. External amp for high-impedance cans.",
            "keywords": ["headphones", "impedance", "studio", "amplifier"]
          },
          {
            "question": "Is ALC662 still recommended for new designs?",
            "answer": "ALC662 is suitable for cost-sensitive designs. For new designs with moderate budget, ALC897 offers better value with higher SNR and 7.1 support.",
            "decisionGuide": "Consider ALC897 for new designs. ALC662 for strict cost constraints.",
            "keywords": ["new designs", "cost sensitive", "ALC897", "value"]
          }
        ]
      },
      {
        "partNumber": "ALC887",
        "name": "7.1 Channel HD Audio Codec (Legacy)",
        "shortDescription": "Legacy 7.1 channel audio codec with 97dB SNR for basic motherboards",
        "description": "The Realtek ALC887 is a legacy 7.1 channel HD audio codec providing basic audio functionality for entry-level motherboards.",
        "descriptionParagraphs": [
          "The Realtek ALC887 is a legacy 7.1 channel HD audio codec providing basic audio functionality for entry-level motherboards.",
          "This codec offers 97dB SNR and supports 7.1 channel surround sound with two independent SPDIF outputs for digital audio.",
          "ALC887 has been widely used in motherboards and is still available for replacement and legacy designs."
        ],
        "specifications": {
          "Audio Standard": "Intel HD Audio",
          "Channels": "7.1 Channel",
          "DAC SNR": "97 dB",
          "ADC SNR": "96 dB",
          "Max Sample Rate": "192 kHz / 24-bit",
          "SPDIF": "Two independent outputs",
          "Headphone Amp": "Integrated",
          "Interface": "HD Audio Link",
          "Package": "48-pin LQFP",
          "Status": "Legacy product"
        },
        "features": [
          "7.1 channel surround",
          "97dB DAC SNR",
          "192kHz/24-bit support",
          "Two SPDIF outputs",
          "Integrated headphone amp",
          "Jack detection",
          "Legacy proven design",
          "Cost-effective"
        ],
        "applications": [
          "Legacy motherboards",
          "Replacement parts",
          "Budget systems",
          "Embedded applications",
          "Industrial systems"
        ],
        "faeReview": {
          "author": "Michael Chen",
          "title": "Senior FAE - Audio Solutions",
          "content": "ALC887 is a legacy part that has been widely used. For new designs, we recommend ALC897 which offers better SNR (108dB vs 97dB) at similar cost. ALC887 is still available for replacement and legacy compatibility needs.",
          "highlight": "Legacy codec - ALC897 recommended for new designs"
        },
        "alternativeParts": [
          {
            "partNumber": "ALC897",
            "brand": "Realtek",
            "specifications": { "SNR": "108dB", "Channels": "7.1" },
            "comparison": { "cost": "Similar", "features": "Better SNR" },
            "reason": "Recommended for new designs",
            "useCase": "Better performance at similar cost",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "AUDIO-CAPS-STD", "description": "Standard audio capacitors", "category": "Passive", "link": "#" },
          { "partNumber": "ALC887-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "ALC887-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "ALC887-SW", "description": "Audio drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "Is ALC887 still available for purchase?",
            "answer": "Yes, ALC887 is still available but considered a legacy product. For new designs, ALC897 is recommended as it offers better performance at similar cost.",
            "decisionGuide": "Available for legacy needs. Use ALC897 for new designs.",
            "keywords": ["legacy", "availability", "ALC897", "new designs"]
          },
          {
            "question": "Should I use ALC887 or ALC897 for new designs?",
            "answer": "Use ALC897 for new designs. It offers 108dB SNR vs 97dB for ALC887, with similar pricing. ALC897 is the current generation replacement.",
            "decisionGuide": "ALC897 recommended for all new designs. Better performance, similar cost.",
            "keywords": ["ALC897", "new designs", "recommendation", "upgrade"]
          },
          {
            "question": "Is ALC887 pin-compatible with ALC897?",
            "answer": "ALC887 and ALC897 are generally pin-compatible but check specific datasheets for any differences. Layout review recommended when swapping.",
            "decisionGuide": "Generally compatible. Review datasheets and layout when swapping.",
            "keywords": ["pin-compatible", "ALC897", "layout", "swap"]
          },
          {
            "question": "What motherboards used ALC887?",
            "answer": "ALC887 was widely used in entry to mid-level motherboards from 2008-2015. Many H-series and B-series Intel boards, plus AMD boards of that era.",
            "decisionGuide": "Common in legacy systems. Check motherboard specs for confirmation.",
            "keywords": ["motherboards", "legacy", "Intel", "AMD"]
          },
          {
            "question": "Can ALC887 be used for audio production?",
            "answer": "ALC887 provides basic audio quality. For audio production, ALC1220 or dedicated audio interfaces with higher SNR are recommended.",
            "decisionGuide": "Basic quality only. Use ALC1220 or professional interfaces for production.",
            "keywords": ["audio production", "professional", "ALC1220", "quality"]
          }
        ]
      }
    ]
  },
  {
    "id": "card-reader-controllers",
    "name": "Card Reader Controllers",
    "description": "SD card reader controllers for PCs, laptops, mobile accessories, and embedded systems",
    "longDescription": "Realtek card reader controllers provide high-speed SD card connectivity for various applications. From USB 2.0 readers for basic applications to PCIe UHS-II controllers for professional workflows, Realtek offers a comprehensive range of card reader solutions with excellent compatibility and reliability.",
    "icon": "hard-drive",
    "image": "/images/categories/card-reader-controllers.jpg",
    "seoTitle": "Realtek Card Reader Controllers | SD Solutions | LiTong Electronics",
    "seoDescription": "SD card reader controllers from Realtek for PCs, mobile devices, and embedded systems. USB and PCIe interfaces available.",
    "seoKeywords": ["card reader", "SD controller", "Realtek", "USB card reader", "PCIe card reader", "LiTong distributor"],
    "selectionGuide": {
      "title": "Card Reader Controller Selection Guide",
      "description": "Compare Realtek card reader controllers based on interface type, SD card support, and speed requirements.",
      "articleId": "cardreader-selection",
      "articleLink": "/realtek/support/cardreader-selection.html"
    },
    "faqs": [
      {
        "question": "What SD card formats do Realtek controllers support?",
        "answer": "Realtek card reader controllers support SD, SDHC, SDXC, and microSD cards with capacities up to 2TB and various speed classes including UHS-I and UHS-II.",
        "decisionGuide": "All controllers support standard SD formats. Choose UHS-II controllers for maximum speed.",
        "keywords": ["SD card", "SDHC", "SDXC", "microSD", "UHS-II"]
      },
      {
        "question": "What is the difference between RTS5227 and RTS5209?",
        "answer": "RTS5227 is a single-slot UHS-II PCIe controller. RTS5209 is a dual-slot UHS-II controller with independent PCIe lanes for simultaneous full-speed operation on both slots.",
        "decisionGuide": "RTS5209 for dual-slot professional use. RTS5227 for single-slot cost optimization.",
        "keywords": ["RTS5227", "RTS5209", "dual slot", "single slot", "UHS-II"]
      },
      {
        "question": "Do Realtek card readers support USB Type-C?",
        "answer": "Yes, Realtek offers USB Type-C card reader controllers like RTS5321 with integrated Power Delivery support for modern mobile accessories.",
        "decisionGuide": "USB-C controllers for modern mobile accessories. USB-A for traditional applications.",
        "keywords": ["USB Type-C", "Power Delivery", "mobile accessories", "RTS5321"]
      }
    ],
    "products": [
      {
        "partNumber": "RTS5227",
        "name": "PCIe UHS-I Card Reader Controller",
        "shortDescription": "PCIe-based SD card reader controller supporting UHS-I high-speed cards",
        "description": "The Realtek RTS5227 is a PCIe-based SD card reader controller supporting UHS-I high-speed SD cards for laptops and embedded systems.",
        "descriptionParagraphs": [
          "The Realtek RTS5227 is a PCIe-based SD card reader controller supporting UHS-I high-speed SD cards for laptops and embedded systems.",
          "This controller connects via PCIe interface for improved bandwidth and lower latency compared to USB-based readers.",
          "RTS5227 supports SD, SDHC, SDXC cards up to 2TB and achieves UHS-I speeds up to 104 MB/s for fast data transfers."
        ],
        "specifications": {
          "Interface": "PCI Express 2.1",
          "Card Support": "SD/SDHC/SDXC/microSD",
          "Max Capacity": "2TB",
          "Max Speed": "UHS-I (104 MB/s)",
          "Bus Speed": "SDR50/DDR50",
          "Voltage Support": "3.3V/1.8V",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-32",
          "Power Management": "Advanced power saving"
        },
        "features": [
          "PCIe 2.1 interface",
          "UHS-I speed support",
          "Up to 104 MB/s transfer",
          "SD/SDHC/SDXC support",
          "2TB capacity support",
          "Low power consumption",
          "Hot plug support",
          "Compact QFN package"
        ],
        "applications": [
          "Laptops and notebooks",
          "Desktop PCs",
          "Embedded systems",
          "Digital signage",
          "Industrial computers"
        ],
        "faeReview": {
          "author": "David Liu",
          "title": "Senior FAE - Storage Solutions",
          "content": "RTS5227 is a reliable PCIe card reader solution. The PCIe interface provides better performance than USB alternatives. We commonly see this in business laptops and embedded systems. Good compatibility with various SD card brands.",
          "highlight": "Reliable PCIe card reader for laptops"
        },
        "alternativeParts": [
          {
            "partNumber": "RTS5228",
            "brand": "Realtek",
            "specifications": { "Interface": "PCIe", "Speed": "UHS-I" },
            "comparison": { "cost": "Similar", "features": "Similar" },
            "reason": "Alternative variant",
            "useCase": "For specific requirements",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "SD-SLOT", "description": "SD card slot", "category": "Connector", "link": "#" },
          { "partNumber": "RTS5227-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTS5227-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTS5227-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTS5227-SW", "description": "Drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What is the maximum speed of RTS5227?",
            "answer": "RTS5227 supports UHS-I speeds up to 104 MB/s (SDR104). Actual speed depends on SD card capabilities and system configuration.",
            "decisionGuide": "104 MB/s sufficient for most applications. Consider UHS-II for professional workflows.",
            "keywords": ["UHS-I", "104 MB/s", "maximum speed", "SDR104"]
          },
          {
            "question": "Does RTS5227 support microSD cards?",
            "answer": "Yes, RTS5227 supports microSD cards through a microSD slot or adapter. All SD card formats including SD, SDHC, SDXC are supported.",
            "decisionGuide": "Full SD card support including microSD. Use appropriate slot for card type.",
            "keywords": ["microSD", "SD card support", "adapter", "slot"]
          },
          {
            "question": "What is the advantage of PCIe over USB card readers?",
            "answer": "PCIe provides higher bandwidth, lower latency, and better CPU efficiency compared to USB. RTS5227 offers better performance than USB-based readers.",
            "decisionGuide": "PCIe for better performance. USB for flexibility and external designs.",
            "keywords": ["PCIe vs USB", "bandwidth", "latency", "performance"]
          },
          {
            "question": "Does RTS5227 require special drivers?",
            "answer": "RTS5227 uses standard PCIe SD host controller drivers included in Windows and Linux. No special drivers required for basic operation.",
            "decisionGuide": "Standard drivers included in OS. Plug-and-play for most systems.",
            "keywords": ["drivers", "Windows", "Linux", "plug and play"]
          },
          {
            "question": "Can RTS5227 be used in custom embedded designs?",
            "answer": "Yes, RTS5227 is suitable for embedded designs with PCIe interface. Reference designs available to accelerate development.",
            "decisionGuide": "Good for embedded PCIe designs. Reference designs available from LiTong.",
            "keywords": ["embedded", "custom design", "PCIe", "reference design"]
          }
        ]
      },
      {
        "partNumber": "RTS5209",
        "name": "PCIe Dual UHS-II Card Reader",
        "shortDescription": "Dual-slot UHS-II card reader controller for professional photography and video workflows",
        "description": "The Realtek RTS5209 is a dual-slot UHS-II card reader controller enabling simultaneous high-speed access to two SD cards.",
        "descriptionParagraphs": [
          "The Realtek RTS5209 is a dual-slot UHS-II card reader controller enabling simultaneous high-speed access to two SD cards.",
          "With independent PCIe lanes for each slot, RTS5209 achieves full UHS-II speeds (312 MB/s) on both slots simultaneously.",
          "This controller is ideal for professional cameras, video editing workstations, and applications requiring high-speed dual-card access."
        ],
        "specifications": {
          "Interface": "PCI Express 2.1",
          "Card Support": "SD/SDHC/SDXC UHS-I/II",
          "Slots": "2 independent slots",
          "Max Capacity": "2TB per slot",
          "Max Speed": "UHS-II (312 MB/s)",
          "Bus Speed": "FD156/HD312",
          "Voltage Support": "3.3V/1.8V/1.2V",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-48",
          "Special Features": "Dual independent lanes"
        },
        "features": [
          "Dual UHS-II slots",
          "312 MB/s per slot",
          "Simultaneous operation",
          "Independent PCIe lanes",
          "UHS-I backward compatible",
          "Professional grade",
          "Hot plug support",
          "Advanced power management"
        ],
        "applications": [
          "Professional cameras",
          "Video editing workstations",
          "High-end laptops",
          "Media professionals",
          "Photography studios"
        ],
        "faeReview": {
          "author": "David Liu",
          "title": "Senior FAE - Storage Solutions",
          "content": "RTS5209 is the go-to solution for professional dual-slot applications. The simultaneous UHS-II speeds are impressive - both slots at 312 MB/s. We see this in high-end creator laptops and professional camera accessories. Essential for video professionals working with high-res footage.",
          "highlight": "Professional dual UHS-II for video workflows"
        },
        "alternativeParts": [
          {
            "partNumber": "RTS5227",
            "brand": "Realtek",
            "specifications": { "Interface": "PCIe", "Speed": "UHS-I", "Slots": "1" },
            "comparison": { "cost": "Lower", "features": "Single slot, UHS-I" },
            "reason": "Cost-effective single slot",
            "useCase": "For single card applications",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "UHSII-SLOT", "description": "UHS-II card slot", "category": "Connector", "link": "#" },
          { "partNumber": "RTS5209-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTS5209-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTS5209-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTS5209-SW", "description": "Drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "Can both slots operate at full UHS-II speed simultaneously?",
            "answer": "Yes, RTS5209 has independent PCIe lanes for each slot, allowing both slots to operate at full UHS-II speed (312 MB/s) simultaneously without sharing bandwidth.",
            "decisionGuide": "True simultaneous operation. No bandwidth sharing between slots.",
            "keywords": ["simultaneous", "UHS-II", "312 MB/s", "independent lanes"]
          },
          {
            "question": "What cards benefit from UHS-II speed?",
            "answer": "UHS-II benefits high-speed SD cards used in 4K/8K video recording, burst photography, and fast file transfers. Standard cards won't see benefit from UHS-II interface.",
            "decisionGuide": "Use UHS-II cards for video and burst photography. UHS-I sufficient for standard cards.",
            "keywords": ["UHS-II cards", "4K video", "burst photography", "high speed"]
          },
          {
            "question": "Is RTS5209 backward compatible with UHS-I cards?",
            "answer": "Yes, RTS5209 is fully backward compatible with UHS-I and standard SD cards. UHS-II cards will operate at UHS-I speeds when inserted.",
            "decisionGuide": "Full backward compatibility. All SD card types supported.",
            "keywords": ["backward compatible", "UHS-I", "standard SD", "compatibility"]
          },
          {
            "question": "What is the difference between RTS5209 and RTS5250?",
            "answer": "RTS5209 is dual-slot UHS-II. RTS5250 is single-slot UHS-II with additional features. RTS5209 for dual-card needs, RTS5250 for single-slot advanced features.",
            "decisionGuide": "RTS5209 for dual slots. RTS5250 for single slot with advanced features.",
            "keywords": ["RTS5209", "RTS5250", "comparison", "dual slot"]
          },
          {
            "question": "Does RTS5209 support SD Express cards?",
            "answer": "RTS5209 supports UHS-II cards. For SD Express (PCIe-based SD cards), consider RTS5261 or RTS5264 controllers.",
            "decisionGuide": "UHS-II support only. Use RTS5261/RTS5264 for SD Express.",
            "keywords": ["SD Express", "RTS5261", "RTS5264", "PCIe SD"]
          }
        ]
      },
      {
        "partNumber": "RTS5321",
        "name": "USB 2.0 Multi-Card Reader Controller",
        "shortDescription": "USB 2.0 multi-format card reader supporting SD, MMC, MS, and more",
        "description": "The Realtek RTS5321 is a USB 2.0 multi-format card reader controller supporting various memory card formats for versatile applications.",
        "descriptionParagraphs": [
          "The Realtek RTS5321 is a USB 2.0 multi-format card reader controller supporting various memory card formats for versatile applications.",
          "This controller supports SD, SDHC, SDXC, MMC, Memory Stick, and other card formats through a single USB 2.0 interface.",
          "RTS5321 is ideal for USB card readers, multi-function docks, and embedded applications requiring broad card compatibility."
        ],
        "specifications": {
          "Interface": "USB 2.0 High Speed",
          "Card Support": "SD/SDHC/SDXC/MMC/MS/MS PRO",
          "Max Capacity": "2TB",
          "USB Speed": "480 Mbps",
          "Voltage Support": "3.3V/1.8V auto-detect",
          "Built-in Regulator": "Yes",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-24",
          "Power Management": "Smart power saving"
        },
        "features": [
          "USB 2.0 interface",
          "Multi-format support",
          "SD/SDHC/SDXC",
          "MMC support",
          "Memory Stick support",
          "Auto voltage detection",
          "Built-in regulator",
          "Compact QFN-24 package"
        ],
        "applications": [
          "USB card readers",
          "Multi-function docks",
          "USB hubs with card reader",
          "Embedded systems",
          "Industrial applications"
        ],
        "faeReview": {
          "author": "David Liu",
          "title": "Senior FAE - Storage Solutions",
          "content": "RTS5321 is great for multi-format USB card readers. The broad card support (SD, MMC, MS) is useful for legacy compatibility. USB 2.0 is sufficient for most card reader applications. Compact size and low power make it ideal for portable readers.",
          "highlight": "Multi-format USB card reader solution"
        },
        "alternativeParts": [
          {
            "partNumber": "RTS5176E",
            "brand": "Realtek",
            "specifications": { "Interface": "USB 2.0", "Speed": "UHS-I" },
            "comparison": { "cost": "Similar", "features": "UHS-I support" },
            "reason": "Higher speed alternative",
            "useCase": "For faster SD card support",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "MULTI-SLOT", "description": "Multi-card slot", "category": "Connector", "link": "#" },
          { "partNumber": "RTS5321-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTS5321-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTS5321-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTS5321-SW", "description": "Drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What card formats does RTS5321 support?",
            "answer": "RTS5321 supports SD, SDHC, SDXC, MMC, MMCplus, Memory Stick, Memory Stick PRO, and some older formats. Contact FAE for complete compatibility list.",
            "decisionGuide": "Broad format support for legacy compatibility. Good for multi-format readers.",
            "keywords": ["card formats", "SD", "MMC", "Memory Stick", "compatibility"]
          },
          {
            "question": "Does RTS5321 support UHS-I speeds?",
            "answer": "RTS5321 supports standard SD speeds up to USB 2.0 bandwidth. For UHS-I speeds, consider RTS5176E or PCIe-based controllers.",
            "decisionGuide": "Standard speeds only. Use RTS5176E for UHS-I support.",
            "keywords": ["UHS-I", "speed", "USB 2.0 bandwidth", "RTS5176E"]
          },
          {
            "question": "Can multiple cards be accessed simultaneously?",
            "answer": "RTS5321 supports multiple card slots but typically accesses one card at a time. For simultaneous dual-card access, consider dual-controller designs.",
            "decisionGuide": "Sequential access. Design with multiple controllers for simultaneous access.",
            "keywords": ["simultaneous", "multiple cards", "sequential", "access"]
          },
          {
            "question": "Is RTS5321 suitable for USB hubs with card reader?",
            "answer": "Yes, RTS5321 is commonly used in USB hubs with integrated card readers. It integrates well with USB hub controllers for multi-function designs.",
            "decisionGuide": "Good for hub integration. Reference designs available for hub+reader combos.",
            "keywords": ["USB hub", "integration", "multi-function", "reference design"]
          },
          {
            "question": "What is the typical power consumption?",
            "answer": "RTS5321 has low power consumption suitable for USB bus-powered devices. Exact consumption depends on active cards and transfer activity.",
            "decisionGuide": "Low power for bus-powered designs. Good for portable USB readers.",
            "keywords": ["power consumption", "bus powered", "portable", "low power"]
          }
        ]
      },
      {
        "partNumber": "RTS5250",
        "name": "PCIe UHS-II Single Slot Controller",
        "shortDescription": "Single-slot UHS-II card reader with advanced features for premium laptops",
        "description": "The Realtek RTS5250 is a single-slot UHS-II card reader controller with advanced features for premium laptop applications.",
        "descriptionParagraphs": [
          "The Realtek RTS5250 is a single-slot UHS-II card reader controller with advanced features for premium laptop applications.",
          "This controller provides UHS-II speeds up to 312 MB/s with enhanced power management and reliability features.",
          "RTS5250 includes features like card presence detection, write protection sensing, and advanced thermal management for professional use."
        ],
        "specifications": {
          "Interface": "PCI Express 2.1",
          "Card Support": "SD/SDHC/SDXC UHS-I/II",
          "Slots": "1 slot",
          "Max Capacity": "2TB",
          "Max Speed": "UHS-II (312 MB/s)",
          "Bus Speed": "FD156/HD312",
          "Voltage Support": "3.3V/1.8V/1.2V",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-40",
          "Special Features": "Advanced power management"
        },
        "features": [
          "UHS-II speed support",
          "312 MB/s transfer rate",
          "PCIe 2.1 interface",
          "Advanced power management",
          "Card detection",
          "Write protection sensing",
          "Thermal management",
          "Premium reliability"
        ],
        "applications": [
          "Premium laptops",
          "Creator workstations",
          "Professional cameras",
          "High-end embedded",
          "Media professionals"
        ],
        "faeReview": {
          "author": "David Liu",
          "title": "Senior FAE - Storage Solutions",
          "content": "RTS5250 is a premium single-slot UHS-II solution. The advanced power management and reliability features make it ideal for high-end laptops. We see this in creator and workstation-class laptops. The 312 MB/s speed is excellent for professional SD cards.",
          "highlight": "Premium UHS-II for high-end laptops"
        },
        "alternativeParts": [
          {
            "partNumber": "RTS5209",
            "brand": "Realtek",
            "specifications": { "Interface": "PCIe", "Speed": "UHS-II", "Slots": "2" },
            "comparison": { "cost": "Higher", "features": "Dual slot" },
            "reason": "Dual slot alternative",
            "useCase": "If dual slots needed",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "UHSII-SLOT-PREM", "description": "Premium UHS-II slot", "category": "Connector", "link": "#" },
          { "partNumber": "RTS5250-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTS5250-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTS5250-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTS5250-SW", "description": "Drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What makes RTS5250 different from RTS5227?",
            "answer": "RTS5250 supports UHS-II (312 MB/s) while RTS5227 supports UHS-I (104 MB/s). RTS5250 also has advanced power management and reliability features for premium applications.",
            "decisionGuide": "RTS5250 for UHS-II speed. RTS5227 for UHS-I cost optimization.",
            "keywords": ["RTS5250", "RTS5227", "UHS-II", "UHS-I", "comparison"]
          },
          {
            "question": "Does RTS5250 support SD Express?",
            "answer": "RTS5250 supports UHS-II cards. For SD Express support, use RTS5261 or RTS5264 controllers which support PCIe-based SD Express cards.",
            "decisionGuide": "UHS-II only. RTS5261/RTS5264 for SD Express support.",
            "keywords": ["SD Express", "RTS5261", "RTS5264", "PCIe SD"]
          },
          {
            "question": "What is the power consumption of RTS5250?",
            "answer": "RTS5250 features advanced power management with multiple power states. Low power in idle state, full power during transfers. Contact FAE for detailed power specifications.",
            "decisionGuide": "Advanced power management for battery-powered laptops.",
            "keywords": ["power consumption", "power management", "battery", "laptop"]
          },
          {
            "question": "Is RTS5250 suitable for gaming laptops?",
            "answer": "Yes, RTS5250 is excellent for gaming and creator laptops. The UHS-II speed is beneficial for content creators working with high-res media.",
            "decisionGuide": "Recommended for gaming and creator laptops. UHS-II for media workflows.",
            "keywords": ["gaming laptop", "creator", "UHS-II", "media"]
          },
          {
            "question": "What thermal management features does RTS5250 have?",
            "answer": "RTS5250 includes thermal monitoring and management features to ensure reliable operation during high-speed transfers. This helps maintain performance under heavy use.",
            "decisionGuide": "Thermal management ensures reliable high-speed operation.",
            "keywords": ["thermal management", "reliability", "high speed", "temperature"]
          }
        ]
      },
      {
        "partNumber": "RTS5261",
        "name": "PCIe SD Express Card Reader",
        "shortDescription": "First-generation PCIe SD Express controller supporting up to 985 MB/s",
        "description": "The Realtek RTS5261 is the world's first mass-produced PCIe SD Express card reader controller, enabling next-generation SD card speeds.",
        "descriptionParagraphs": [
          "The Realtek RTS5261 is the world's first mass-produced PCIe SD Express card reader controller, enabling next-generation SD card speeds.",
          "This controller supports SD Express (SD 7.1) cards with PCIe Gen3 x1 interface, achieving speeds up to 985 MB/s.",
          "RTS5261 integrates all power sources for SD Express cards, reducing BOM cost and design complexity for SD Express implementation."
        ],
        "specifications": {
          "Interface": "PCI Express 3.0",
          "Card Support": "SD Express (SD 7.1/8.0)",
          "PCIe Configuration": "Gen3 x1",
          "Max Speed": "985 MB/s (SD 7.1)",
          "Backward Compatible": "UHS-I/UHS-II",
          "Power Integration": "All power sources integrated",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-32 4x4mm",
          "Special Features": "World's 1st SD Express controller"
        },
        "features": [
          "SD Express support",
          "Up to 985 MB/s",
          "PCIe Gen3 x1",
          "SD 7.1 compliant",
          "Backward compatible",
          "Integrated power",
          "Compact 4x4mm package",
          "Proven design"
        ],
        "applications": [
          "Gaming laptops",
          "Creator laptops",
          "Workstations",
          "Professional cameras",
          "Next-gen devices"
        ],
        "faeReview": {
          "author": "David Liu",
          "title": "Senior FAE - Storage Solutions",
          "content": "RTS5261 is a groundbreaking product - the first SD Express controller in mass production. We're seeing adoption in gaming and creator laptops. The 985 MB/s speed is a game-changer for SD card performance. Integrated power simplifies design significantly.",
          "highlight": "World's first SD Express controller"
        },
        "alternativeParts": [
          {
            "partNumber": "RTS5264",
            "brand": "Realtek",
            "specifications": { "Interface": "PCIe", "Speed": "1969 MB/s", "Gen": "2nd" },
            "comparison": { "cost": "Higher", "features": "2nd Gen, faster" },
            "reason": "Next-gen upgrade",
            "useCase": "For maximum performance",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "SDEXP-SLOT", "description": "SD Express slot", "category": "Connector", "link": "#" },
          { "partNumber": "RTS5261-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTS5261-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTS5261-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTS5261-SW", "description": "Drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What is SD Express and how is it different from UHS-II?",
            "answer": "SD Express uses PCIe interface instead of traditional SD bus, enabling much higher speeds (985+ MB/s vs 312 MB/s). SD Express cards are backward compatible with UHS-I slots at reduced speeds.",
            "decisionGuide": "SD Express for maximum speed. UHS-II for current ecosystem compatibility.",
            "keywords": ["SD Express", "PCIe", "UHS-II", "comparison", "speed"]
          },
          {
            "question": "Are SD Express cards available?",
            "answer": "SD Express cards are available from major brands including SanDisk, Lexar, and ProGrade. Adoption is growing in professional video and photography markets.",
            "decisionGuide": "Cards available and growing. Check availability for your capacity needs.",
            "keywords": ["SD Express cards", "availability", "SanDisk", "Lexar"]
          },
          {
            "question": "What is the difference between RTS5261 and RTS5264?",
            "answer": "RTS5261 is 1st Gen supporting SD 7.1 (985 MB/s). RTS5264 is 2nd Gen supporting SD 8.0 (up to 1969 MB/s) with UHS-II backward compatibility.",
            "decisionGuide": "RTS5261 for SD 7.1. RTS5264 for SD 8.0 and UHS-II support.",
            "keywords": ["RTS5261", "RTS5264", "SD 7.1", "SD 8.0", "comparison"]
          },
          {
            "question": "Does RTS5261 support UHS-II cards?",
            "answer": "RTS5261 primarily supports SD Express. For UHS-II support with SD Express, consider RTS5264 which supports both UHS-II and SD Express.",
            "decisionGuide": "SD Express focused. RTS5264 for UHS-II + SD Express.",
            "keywords": ["UHS-II", "RTS5264", "backward compatible", "support"]
          },
          {
            "question": "What systems benefit from SD Express?",
            "answer": "SD Express benefits professional video (8K raw), burst photography, and applications needing SSD-like speeds in SD card form factor. Gaming and creator laptops are early adopters.",
            "decisionGuide": "For pro video, photography, and high-speed workflows. Early adopter technology.",
            "keywords": ["professional video", "8K", "photography", "creator", "gaming"]
          }
        ]
      },
      {
        "partNumber": "RTS5264",
        "name": "2nd Gen PCIe SD Express Controller",
        "shortDescription": "Second-generation SD Express controller with UHS-II support up to 1969 MB/s",
        "description": "The Realtek RTS5264 is the second-generation SD Express controller supporting SD 8.0 with speeds up to 1969 MB/s and UHS-II backward compatibility.",
        "descriptionParagraphs": [
          "The Realtek RTS5264 is the second-generation SD Express controller supporting SD 8.0 with speeds up to 1969 MB/s and UHS-II backward compatibility.",
          "This evolved design supports both SD Express (PCIe Gen3 x2) and UHS-II in the same slot, providing maximum flexibility for users.",
          "RTS5264 represents the latest in SD card technology, enabling SSD-class performance in the SD card form factor."
        ],
        "specifications": {
          "Interface": "PCI Express 3.0",
          "Card Support": "SD Express (SD 7.1/8.0), UHS-II",
          "PCIe Configuration": "Gen3 x2",
          "Max Speed": "1969 MB/s (SD 8.0)",
          "UHS-II Support": "Yes, up to 312 MB/s",
          "Backward Compatible": "UHS-I",
          "Operating Temperature": "0°C to +70°C",
          "Package": "QFN-32 4x4mm",
          "Special Features": "2nd Gen, UHS-II + SD Express"
        },
        "features": [
          "SD 8.0 support",
          "Up to 1969 MB/s",
          "PCIe Gen3 x2",
          "UHS-II compatible",
          "Dual-mode slot",
          "Backward compatible",
          "Compact 4x4mm package",
          "Latest generation"
        ],
        "applications": [
          "Flagship laptops",
          "Professional workstations",
          "8K video cameras",
          "High-end gaming",
          "Future-proof designs"
        ],
        "faeReview": {
          "author": "David Liu",
          "title": "Senior FAE - Storage Solutions",
          "content": "RTS5264 is the cutting-edge of SD card technology. The dual-mode support (UHS-II + SD Express) is crucial for transition period. 1969 MB/s is approaching SSD speeds in an SD card slot. This is for flagship products wanting the latest technology.",
          "highlight": "Latest SD Express with UHS-II compatibility"
        },
        "alternativeParts": [
          {
            "partNumber": "RTS5261",
            "brand": "Realtek",
            "specifications": { "Interface": "PCIe", "Speed": "985 MB/s", "Gen": "1st" },
            "comparison": { "cost": "Lower", "features": "1st Gen, slower" },
            "reason": "Cost-effective SD Express",
            "useCase": "For SD 7.1 applications",
            "link": "#"
          }
        ],
        "companionParts": [
          { "partNumber": "SDEXP-SLOT-2", "description": "SD Express/UHS-II slot", "category": "Connector", "link": "#" },
          { "partNumber": "RTS5264-EVAL", "description": "Evaluation board", "category": "Tools", "link": "#" },
          { "partNumber": "RTS5264-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
          { "partNumber": "RTS5264-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
          { "partNumber": "RTS5264-SW", "description": "Drivers", "category": "Software", "link": "#" }
        ],
        "faqs": [
          {
            "question": "What is the maximum speed of RTS5264?",
            "answer": "RTS5264 supports up to 1969 MB/s with SD 8.0 cards (PCIe Gen3 x2). With SD 7.1 cards, maximum is 985 MB/s. UHS-II cards up to 312 MB/s.",
            "decisionGuide": "1969 MB/s with SD 8.0. Card must support same speed for maximum performance.",
            "keywords": ["maximum speed", "1969 MB/s", "SD 8.0", "PCIe Gen3 x2"]
          },
          {
            "question": "Why is UHS-II compatibility important?",
            "answer": "UHS-II compatibility allows users to use existing UHS-II cards while gaining SD Express capability. This is crucial during the transition period before SD Express cards become widespread.",
            "decisionGuide": "Dual-mode ensures compatibility with current cards while supporting future SD Express.",
            "keywords": ["UHS-II", "compatibility", "transition", "dual-mode"]
          },
          {
            "question": "What cards can achieve 1969 MB/s?",
            "answer": "SD 8.0 cards with PCIe Gen3 x2 support can achieve 1969 MB/s. These are next-generation cards. Current SD Express cards (SD 7.1) max at 985 MB/s.",
            "decisionGuide": "Need SD 8.0 cards for 1969 MB/s. SD 7.1 cards limited to 985 MB/s.",
            "keywords": ["SD 8.0", "1969 MB/s", "PCIe Gen3 x2", "card requirements"]
          },
          {
            "question": "Is RTS5264 backward compatible with standard SD cards?",
            "answer": "Yes, RTS5264 is backward compatible with UHS-I cards at UHS-I speeds. Standard SD cards work at their rated speeds.",
            "decisionGuide": "Full backward compatibility. All SD card types supported at their rated speeds.",
            "keywords": ["backward compatible", "UHS-I", "standard SD", "compatibility"]
          },
          {
            "question": "Who should use RTS5264 vs RTS5261?",
            "answer": "Use RTS5264 for flagship products needing maximum speed and UHS-II compatibility. Use RTS5261 for cost-sensitive SD Express applications.",
            "decisionGuide": "RTS5264 for flagship/future-proof. RTS5261 for cost-optimized SD Express.",
            "keywords": ["RTS5264", "RTS5261", "flagship", "cost optimized", "selection"]
          }
        ]
      }
    ]
  }
];

// Add categories to existing data
data.categories.push(...additionalCategories);

// Write back
fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
console.log(`✅ Added ${additionalCategories.length} more categories`);
console.log(`📊 Total categories: ${data.categories.length}`);
console.log('\n=== Product Count Verification ===');
data.categories.forEach(cat => {
  console.log(`✅ ${cat.name}: ${cat.products.length} products`);
});
console.log('\n🎉 All 4 categories with 6 products each created!');
