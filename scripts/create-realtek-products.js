#!/usr/bin/env node
/**
 * Create complete realtek products.json with 4 categories x 6 products
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'realtek', 'products.json');

const productsData = {
  "categories": [
    {
      "id": "ethernet-controllers",
      "name": "Ethernet Controllers",
      "description": "High-performance Ethernet controllers for PC, networking, and embedded applications",
      "longDescription": "Realtek Ethernet controllers provide reliable, high-speed network connectivity for various applications. From Gigabit Ethernet for PCs to multi-port solutions for switches and routers, Realtek offers a comprehensive portfolio of Ethernet ICs with advanced features and excellent cost-performance ratio.",
      "icon": "network",
      "image": "/images/categories/ethernet-controllers.jpg",
      "seoTitle": "Realtek Ethernet Controllers | Network ICs | LiTong Electronics",
      "seoDescription": "Realtek Ethernet controllers including Gigabit Ethernet, PCIe Ethernet, and USB Ethernet solutions. Technical support from LiTong Electronics.",
      "seoKeywords": ["Realtek Ethernet", "Gigabit Ethernet", "PCIe Ethernet", "USB Ethernet", "network controller", "LiTong distributor"],
      "selectionGuide": {
        "title": "Ethernet Controller Selection Guide",
        "description": "Compare Realtek Ethernet controllers to find the best solution for your networking requirements. Consider interface type, speed, and power consumption.",
        "articleId": "ethernet-selection",
        "articleLink": "/realtek/support/ethernet-selection.html"
      },
      "faqs": [
        {
          "question": "What types of Ethernet controllers does Realtek offer?",
          "answer": "Realtek offers a comprehensive range of Ethernet controllers including PCIe Gigabit Ethernet, USB Ethernet, and multi-port Ethernet solutions for various applications.",
          "decisionGuide": "Contact LiTong FAE for Ethernet controller selection guidance.",
          "keywords": ["Ethernet controller", "PCIe", "USB", "Gigabit"]
        },
        {
          "question": "How do I select the right Ethernet controller for my application?",
          "answer": "Consider interface type (PCIe, USB, MII), speed requirements (10/100/1000Mbps), power consumption, and operating temperature range.",
          "decisionGuide": "Use selection guide or contact FAE for application-specific recommendations.",
          "keywords": ["selection", "interface", "speed", "power"]
        },
        {
          "question": "What is the difference between PCIe and USB Ethernet controllers?",
          "answer": "PCIe Ethernet offers higher performance and lower latency for desktop applications. USB Ethernet provides plug-and-play convenience for laptops and embedded systems.",
          "decisionGuide": "PCIe for performance. USB for flexibility and portability.",
          "keywords": ["PCIe", "USB", "comparison", "performance"]
        }
      ],
      "products": [
        {
          "partNumber": "RTL8111H",
          "name": "PCIe Gigabit Ethernet Controller",
          "shortDescription": "High-performance PCIe Gigabit Ethernet controller for desktop and server applications",
          "description": "High-performance PCIe Gigabit Ethernet controller for desktop and server applications",
          "descriptionParagraphs": [
            "RTL8111H is a high-performance PCIe Gigabit Ethernet controller designed for desktop, server, and embedded applications requiring reliable network connectivity.",
            "This controller features advanced power management, Wake-on-LAN support, and comprehensive operating system driver support including Windows and Linux.",
            "With its integrated switching regulator and low power consumption, RTL8111H is ideal for energy-efficient designs while maintaining full Gigabit Ethernet performance."
          ],
          "specifications": {
            "Interface": "PCI Express 2.1",
            "Speed": "10/100/1000Mbps",
            "Auto-Negotiation": "Yes",
            "Wake-on-LAN": "Supported",
            "VLAN": "802.1Q",
            "Jumbo Frame": "Up to 9KB",
            "Power Management": "ACPI 3.0, D3 cold",
            "Operating Temperature": "0°C to +70°C",
            "Package": "QFN-32",
            "ESD Protection": "4kV contact, 8kV air"
          },
          "features": [
            "PCIe 2.1 interface",
            "10/100/1000Mbps auto-negotiation",
            "Advanced power management",
            "Wake-on-LAN support",
            "VLAN tagging support",
            "Jumbo frame support",
            "Integrated switching regulator",
            "Cross-platform driver support"
          ],
          "applications": [
            "Desktop PCs",
            "Servers",
            "Embedded systems",
            "Industrial computers",
            "Network appliances"
          ],
          "faeReview": {
            "author": "David Liu",
            "title": "Senior FAE - Network Solutions",
            "content": "RTL8111H is the most popular Gigabit Ethernet controller for desktop applications. The driver support is excellent across all major operating systems. The power management features make it suitable for energy-efficient designs.",
            "highlight": "Reliable PCIe Gigabit Ethernet with excellent driver support"
          },
          "alternativeParts": [
            {
              "partNumber": "I210",
              "brand": "Intel",
              "specifications": { "interface": "PCIe", "speed": "1Gbps" },
              "comparison": { "cost": "Higher", "features": "More advanced" },
              "reason": "Higher performance alternative",
              "useCase": "For enterprise applications",
              "link": "#"
            },
            {
              "partNumber": "BCM5719",
              "brand": "Broadcom",
              "specifications": { "interface": "PCIe", "speed": "1Gbps" },
              "comparison": { "cost": "Similar", "ecosystem": "Different" },
              "reason": "Alternative supplier",
              "useCase": "For supply chain diversification",
              "link": "#"
            }
          ],
          "companionParts": [
            { "partNumber": "RT-MAGNETICS", "description": "Ethernet magnetics", "category": "Interface", "link": "#" },
            { "partNumber": "RT-EVAL-ETH", "description": "Ethernet evaluation board", "category": "Tools", "link": "#" },
            { "partNumber": "RT-DATASHEET", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
            { "partNumber": "RT-REF-DESIGN", "description": "Reference design", "category": "Design Resources", "link": "#" },
            { "partNumber": "RT-DRIVERS", "description": "Driver package", "category": "Software", "link": "#" }
          ],
          "faqs": [
            {
              "question": "What operating systems are supported by RTL8111H?",
              "answer": "RTL8111H supports Windows 10/11, Windows Server, Linux kernel 2.6+, and FreeBSD. Realtek provides comprehensive driver support with regular updates.",
              "decisionGuide": "Check OS compatibility. Drivers available for all major platforms.",
              "keywords": ["driver", "Windows", "Linux", "operating system"]
            },
            {
              "question": "What is the power consumption of RTL8111H?",
              "answer": "RTL8111H has typical active power consumption of 0.5W and supports advanced power management features including D3 cold state for minimal standby power.",
              "decisionGuide": "Low power suitable for energy-efficient designs. Use power management for best efficiency.",
              "keywords": ["power consumption", "low power", "D3 cold", "energy efficient"]
            },
            {
              "question": "Does RTL8111H support Wake-on-LAN?",
              "answer": "Yes, RTL8111H supports Wake-on-LAN (WoL) with magic packet detection. This allows remote wake-up of systems for maintenance and management.",
              "decisionGuide": "Enable WoL for remote management capabilities.",
              "keywords": ["Wake-on-LAN", "WoL", "magic packet", "remote wake-up"]
            },
            {
              "question": "What is the maximum cable length supported?",
              "answer": "RTL8111H supports standard Ethernet cable lengths up to 100 meters for Cat5e/Cat6 cables at Gigabit speeds. Performance may vary with cable quality.",
              "decisionGuide": "Standard 100m Ethernet distance. Use quality cables for best performance.",
              "keywords": ["cable length", "100 meters", "Cat5e", "Cat6"]
            },
            {
              "question": "Where can I get technical support for RTL8111H?",
              "answer": "LiTong Electronics provides comprehensive technical support for RTL8111H including schematic review, layout guidance, and driver assistance. Contact our FAE team.",
              "decisionGuide": "Contact LiTong FAE for design support and driver assistance.",
              "keywords": ["technical support", "FAE", "schematic review", "layout"]
            }
          ]
        },
        {
          "partNumber": "RTL8153",
          "name": "USB 3.0 to Gigabit Ethernet Controller",
          "shortDescription": "USB 3.0 to Gigabit Ethernet bridge controller for USB dongles and docking stations",
          "description": "USB 3.0 to Gigabit Ethernet bridge controller for USB dongles and docking stations",
          "descriptionParagraphs": [
            "RTL8153 is a USB 3.0 to Gigabit Ethernet controller that provides high-speed network connectivity through USB interface.",
            "This controller is ideal for USB Ethernet dongles, docking stations, and embedded systems requiring network connectivity via USB.",
            "With plug-and-play support and cross-platform compatibility, RTL8153 offers convenient network expansion for laptops and tablets."
          ],
          "specifications": {
            "Interface": "USB 3.0 / USB 2.0",
            "Speed": "10/100/1000Mbps",
            "USB Compliance": "USB 3.0, 2.0, 1.1",
            "Auto-Negotiation": "Yes",
            "Wake-on-LAN": "Supported",
            "VLAN": "802.1Q",
            "Power": "USB bus powered",
            "Operating Temperature": "0°C to +70°C",
            "Package": "QFN-24"
          },
          "features": [
            "USB 3.0 SuperSpeed support",
            "Backward compatible with USB 2.0/1.1",
            "10/100/1000Mbps auto-negotiation",
            "Plug-and-play support",
            "Wake-on-LAN capability",
            "VLAN tagging support",
            "Low power consumption",
            "Cross-platform drivers"
          ],
          "applications": [
            "USB Ethernet dongles",
            "Docking stations",
            "Laptops and tablets",
            "Embedded systems",
            "Industrial PCs"
          ],
          "faeReview": {
            "author": "David Liu",
            "title": "Senior FAE - Network Solutions",
            "content": "RTL8153 is the go-to solution for USB Ethernet applications. The USB 3.0 interface provides full Gigabit speeds. The plug-and-play support makes it ideal for consumer products.",
            "highlight": "USB 3.0 Gigabit Ethernet with plug-and-play convenience"
          },
          "alternativeParts": [
            {
              "partNumber": "AX88179",
              "brand": "ASIX",
              "specifications": { "interface": "USB 3.0", "speed": "1Gbps" },
              "comparison": { "cost": "Similar", "availability": "Good" },
              "reason": "Alternative supplier",
              "useCase": "For supply chain diversification",
              "link": "#"
            },
            {
              "partNumber": "LAN7500",
              "brand": "Microchip",
              "specifications": { "interface": "USB 3.0", "speed": "1Gbps" },
              "comparison": { "cost": "Higher", "features": "More integrated" },
              "reason": "Alternative with more features",
              "useCase": "For feature-rich applications",
              "link": "#"
            }
          ],
          "companionParts": [
            { "partNumber": "RT-USB-CONN", "description": "USB connector", "category": "Connectors", "link": "#" },
            { "partNumber": "RT-EVAL-USB", "description": "USB evaluation board", "category": "Tools", "link": "#" },
            { "partNumber": "RT-DATASHEET", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
            { "partNumber": "RT-REF-DESIGN", "description": "Reference design", "category": "Design Resources", "link": "#" },
            { "partNumber": "RT-DRIVERS", "description": "USB drivers", "category": "Software", "link": "#" }
          ],
          "faqs": [
            {
              "question": "Is RTL8153 compatible with USB 2.0 ports?",
              "answer": "Yes, RTL8153 is backward compatible with USB 2.0 and USB 1.1 ports. However, maximum Gigabit speed requires USB 3.0. USB 2.0 will limit speed to 480Mbps.",
              "decisionGuide": "USB 3.0 required for full Gigabit speed. USB 2.0 compatible at reduced speed.",
              "keywords": ["USB 2.0", "backward compatible", "speed limit"]
            },
            {
              "question": "Does RTL8153 require external power?",
              "answer": "No, RTL8153 is bus-powered from the USB port. It consumes less than 2W during operation, well within USB 3.0 power delivery specifications.",
              "decisionGuide": "Bus-powered, no external power needed. Low power consumption.",
              "keywords": ["bus powered", "USB power", "low power", "no external power"]
            },
            {
              "question": "What drivers are needed for RTL8153?",
              "answer": "RTL8153 uses standard USB CDC-NCM drivers built into most operating systems. Realtek also provides optimized drivers for Windows, macOS, and Linux.",
              "decisionGuide": "Built-in CDC-NCM drivers work. Realtek drivers available for optimization.",
              "keywords": ["driver", "CDC-NCM", "built-in driver", "Windows", "macOS", "Linux"]
            },
            {
              "question": "Can RTL8153 be used in USB hubs?",
              "answer": "Yes, RTL8153 can be integrated into USB hubs with Ethernet functionality. Many USB-C docking stations use RTL8153 for wired Ethernet connectivity.",
              "decisionGuide": "Suitable for USB hubs and docking stations. Common in USB-C docks.",
              "keywords": ["USB hub", "docking station", "USB-C", "Ethernet"]
            },
            {
              "question": "Where can I get technical support for RTL8153?",
              "answer": "LiTong Electronics provides technical support for RTL8153 including PCB layout guidance and driver assistance. Contact our FAE team for design support.",
              "decisionGuide": "Contact LiTong FAE for USB Ethernet design support.",
              "keywords": ["technical support", "FAE", "PCB layout", "USB design"]
            }
          ]
        },
        {
          "partNumber": "RTL8211E",
          "name": "RGMII to 1000BASE-T Ethernet PHY",
          "shortDescription": "RGMII to Gigabit Ethernet PHY for embedded and networking applications",
          "description": "RGMII to Gigabit Ethernet PHY for embedded and networking applications",
          "descriptionParagraphs": [
            "RTL8211E is a RGMII to 1000BASE-T Ethernet PHY transceiver designed for embedded systems, switches, and routers.",
            "This PHY supports RGMII interface to MAC and provides complete 10/100/1000Mbps Ethernet physical layer functionality.",
            "With advanced features like auto-MDIX, LED control, and cable diagnostics, RTL8211E simplifies Ethernet design for networking equipment."
          ],
          "specifications": {
            "Interface": "RGMII to MAC",
            "Speed": "10/100/1000Mbps",
            "Standard": "IEEE 802.3ab",
            "Auto-MDIX": "Supported",
            "Cable Diagnostics": "Built-in",
            "LED Control": "Programmable",
            "Power": "Low power mode",
            "Operating Temperature": "0°C to +70°C, -40°C to +85°C",
            "Package": "QFN-48"
          },
          "features": [
            "RGMII interface to MAC",
            "10/100/1000Mbps support",
            "IEEE 802.3ab compliant",
            "Auto-MDIX support",
            "Built-in cable diagnostics",
            "Programmable LED control",
            "Low power modes",
            "Industrial temperature option"
          ],
          "applications": [
            "Network switches",
            "Routers",
            "Embedded systems",
            "Industrial Ethernet",
            "IP cameras"
          ],
          "faeReview": {
            "author": "Michael Zhang",
            "title": "Senior FAE - Ethernet PHY",
            "content": "RTL8211E is a reliable Ethernet PHY with excellent interoperability. The cable diagnostics feature helps with troubleshooting. The RGMII interface is widely supported by SoCs.",
            "highlight": "Reliable RGMII PHY with cable diagnostics"
          },
          "alternativeParts": [
            {
              "partNumber": "KSZ9031",
              "brand": "Microchip",
              "specifications": { "interface": "RGMII", "speed": "1Gbps" },
              "comparison": { "cost": "Similar", "features": "Comparable" },
              "reason": "Alternative PHY",
              "useCase": "For supply chain diversification",
              "link": "#"
            },
            {
              "partNumber": "DP83867",
              "brand": "Texas Instruments",
              "specifications": { "interface": "RGMII", "speed": "1Gbps" },
              "comparison": { "cost": "Higher", "temperature": "Extended" },
              "reason": "Higher grade alternative",
              "useCase": "For industrial applications",
              "link": "#"
            }
          ],
          "companionParts": [
            { "partNumber": "RT-MAGNETICS", "description": "Ethernet magnetics", "category": "Interface", "link": "#" },
            { "partNumber": "RT-EVAL-PHY", "description": "PHY evaluation board", "category": "Tools", "link": "#" },
            { "partNumber": "RT-DATASHEET", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
            { "partNumber": "RT-REF-DESIGN", "description": "Reference design", "category": "Design Resources", "link": "#" },
            { "partNumber": "RT-SDK", "description": "Software SDK", "category": "Software", "link": "#" }
          ],
          "faqs": [
            {
              "question": "What MAC interfaces does RTL8211E support?",
              "answer": "RTL8211E supports RGMII interface to the MAC. RGMII is the most common interface for Gigabit Ethernet PHYs and is supported by most modern Ethernet MACs and SoCs.",
              "decisionGuide": "RGMII interface. Verify MAC compatibility with your SoC.",
              "keywords": ["RGMII", "MAC interface", "SoC", "Gigabit Ethernet"]
            },
            {
              "question": "What is cable diagnostics and how does it work?",
              "answer": "Cable diagnostics detects cable faults, open circuits, and short circuits. It can estimate cable length and identify fault locations, helping with network troubleshooting.",
              "decisionGuide": "Use cable diagnostics for troubleshooting. Helps identify cable issues.",
              "keywords": ["cable diagnostics", "fault detection", "cable length", "troubleshooting"]
            },
            {
              "question": "Does RTL8211E support industrial temperature?",
              "answer": "Yes, RTL8211E is available in industrial temperature grade (-40°C to +85°C) suitable for industrial and automotive applications.",
              "decisionGuide": "Industrial grade available. Specify when ordering for harsh environments.",
              "keywords": ["industrial temperature", "automotive", "harsh environment"]
            },
            {
              "question": "What is Auto-MDIX and why is it important?",
              "answer": "Auto-MDIX automatically detects and corrects for straight-through or crossover cables. This eliminates the need for specific cable types and simplifies installation.",
              "decisionGuide": "Auto-MDIX simplifies installation. Any cable type works automatically.",
              "keywords": ["Auto-MDIX", "crossover cable", "straight-through", "installation"]
            },
            {
              "question": "Where can I get technical support for RTL8211E?",
              "answer": "LiTong Electronics provides technical support for RTL8211E including schematic review, PCB layout guidance, and MAC interface configuration. Contact our FAE team.",
              "decisionGuide": "Contact LiTong FAE for PHY design support and MAC integration.",
              "keywords": ["technical support", "FAE", "PHY design", "MAC integration"]
            }
          ]
        },
        {
          "partNumber": "RTL8305",
          "name": "5-Port 10/100 Ethernet Switch Controller",
          "shortDescription": "5-port Fast Ethernet switch controller for SMB and home networking",
          "description": "5-port Fast Ethernet switch controller for SMB and home networking",
          "descriptionParagraphs": [
            "RTL8305 is a 5-port 10/100Mbps Ethernet switch controller designed for small office and home networking applications.",
            "This switch controller provides complete Layer 2 switching functionality with automatic MAC address learning and aging.",
            "With integrated PHYs and low power consumption, RTL8305 enables cost-effective Ethernet switch designs."
          ],
          "specifications": {
            "Ports": "5-port 10/100Mbps",
            "Switching Capacity": "1Gbps",
            "MAC Table": "1K entries",
            "VLAN": "Port-based VLAN",
            "QoS": "4-level priority",
            "Power": "Low power design",
            "Operating Temperature": "0°C to +70°C",
            "Package": "LQFP-128"
          },
          "features": [
            "5-port 10/100Mbps switching",
            "Integrated PHYs",
            "Automatic MAC learning",
            "Port-based VLAN",
            "4-level QoS priority",
            "Broadcast storm protection",
            "Low power consumption",
            "Simple management interface"
          ],
          "applications": [
            "SOHO switches",
            "Home routers",
            "Embedded switches",
            "Industrial switches",
            "IP camera systems"
          ],
          "faeReview": {
            "author": "Michael Zhang",
            "title": "Senior FAE - Switch Solutions",
            "content": "RTL8305 is a cost-effective solution for 5-port switches. The integrated PHYs reduce BOM cost. The simple management interface makes it easy to configure.",
            "highlight": "Cost-effective 5-port switch with integrated PHYs"
          },
          "alternativeParts": [
            {
              "partNumber": "KSZ8873",
              "brand": "Microchip",
              "specifications": { "ports": "3-port", "speed": "100Mbps" },
              "comparison": { "cost": "Similar", "ports": "Fewer" },
              "reason": "Alternative switch",
              "useCase": "For 3-port applications",
              "link": "#"
            },
            {
              "partNumber": "IP175D",
              "brand": "IC+",
              "specifications": { "ports": "5-port", "speed": "100Mbps" },
              "comparison": { "cost": "Similar", "availability": "Good" },
              "reason": "Alternative supplier",
              "useCase": "For supply chain diversification",
              "link": "#"
            }
          ],
          "companionParts": [
            { "partNumber": "RT-MAGNETICS", "description": "Ethernet magnetics", "category": "Interface", "link": "#" },
            { "partNumber": "RT-EVAL-SWITCH", "description": "Switch evaluation board", "category": "Tools", "link": "#" },
            { "partNumber": "RT-DATASHEET", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
            { "partNumber": "RT-REF-DESIGN", "description": "Reference design", "category": "Design Resources", "link": "#" },
            { "partNumber": "RT-FIRMWARE", "description": "Switch firmware", "category": "Software", "link": "#" }
          ],
          "faqs": [
            {
              "question": "What is the switching capacity of RTL8305?",
              "answer": "RTL8305 provides 1Gbps non-blocking switching capacity across all 5 ports. Each port supports full 100Mbps duplex operation simultaneously.",
              "decisionGuide": "1Gbps switching capacity. Non-blocking architecture for full performance.",
              "keywords": ["switching capacity", "1Gbps", "non-blocking", "full duplex"]
            },
            {
              "question": "Does RTL8305 support VLAN?",
              "answer": "Yes, RTL8305 supports port-based VLAN. This allows network segmentation for security and traffic isolation. Up to 4 VLAN groups can be configured.",
              "decisionGuide": "Port-based VLAN supported. Configure for network segmentation.",
              "keywords": ["VLAN", "port-based VLAN", "network segmentation", "isolation"]
            },
            {
              "question": "What QoS features does RTL8305 provide?",
              "answer": "RTL8305 supports 4-level priority queues per port. Traffic can be prioritized based on port, VLAN tag, or DSCP for better quality of service.",
              "decisionGuide": "4-level QoS. Prioritize critical traffic for better performance.",
              "keywords": ["QoS", "priority queue", "traffic prioritization", "DSCP"]
            },
            {
              "question": "Is RTL8305 suitable for industrial applications?",
              "answer": "RTL8305 is designed for commercial temperature (0°C to +70°C). For industrial applications, consider industrial-grade alternatives or extended temperature versions.",
              "decisionGuide": "Commercial grade. Check industrial alternatives for harsh environments.",
              "keywords": ["industrial", "temperature range", "commercial grade"]
            },
            {
              "question": "Where can I get technical support for RTL8305?",
              "answer": "LiTong Electronics provides technical support for RTL8305 including switch design guidance and configuration assistance. Contact our FAE team.",
              "decisionGuide": "Contact LiTong FAE for switch design and configuration support.",
              "keywords": ["technical support", "FAE", "switch design", "configuration"]
            }
          ]
        },
        {
          "partNumber": "RTL8367",
          "name": "7-Port Gigabit Ethernet Switch Controller",
          "shortDescription": "7-port Gigabit Ethernet switch with advanced management features",
          "description": "7-port Gigabit Ethernet switch with advanced management features",
          "descriptionParagraphs": [
            "RTL8367 is a 7-port Gigabit Ethernet switch controller with advanced Layer 2 management features.",
            "This switch supports 5 Gigabit ports and 2 Gigabit SFP/RGMII uplink ports for flexible network configurations.",
            "With comprehensive VLAN, QoS, and security features, RTL8367 is ideal for SMB switches and industrial applications."
          ],
          "specifications": {
            "Ports": "5x GE + 2x SFP/RGMII",
            "Switching Capacity": "14Gbps",
            "MAC Table": "4K entries",
            "VLAN": "802.1Q, port-based",
            "QoS": "8-level priority, rate limiting",
            "Management": "Web, SNMP, CLI",
            "Operating Temperature": "0°C to +70°C",
            "Package": "LQFP-216"
          },
          "features": [
            "7-port Gigabit switching",
            "14Gbps switching capacity",
            "SFP/RGMII uplink support",
            "802.1Q VLAN support",
            "8-level QoS priority",
            "Rate limiting",
            "Web/SNMP/CLI management",
            "Advanced security features"
          ],
          "applications": [
            "SMB switches",
            "Industrial switches",
            "Enterprise access switches",
            "IP surveillance systems",
            "Network appliances"
          ],
          "faeReview": {
            "author": "Michael Zhang",
            "title": "Senior FAE - Switch Solutions",
            "content": "RTL8367 provides excellent features for managed switches. The SFP uplink flexibility is valuable for fiber connectivity. The management interfaces are comprehensive.",
            "highlight": "Feature-rich 7-port Gigabit switch with SFP uplinks"
          },
          "alternativeParts": [
            {
              "partNumber": "KSZ9897",
              "brand": "Microchip",
              "specifications": { "ports": "7-port", "speed": "1Gbps" },
              "comparison": { "cost": "Higher", "features": "More advanced" },
              "reason": "Higher performance alternative",
              "useCase": "For premium switches",
              "link": "#"
            },
            {
              "partNumber": "BCM53134",
              "brand": "Broadcom",
              "specifications": { "ports": "5-port", "speed": "1Gbps" },
              "comparison": { "cost": "Similar", "ports": "Fewer" },
              "reason": "Alternative supplier",
              "useCase": "For supply chain diversification",
              "link": "#"
            }
          ],
          "companionParts": [
            { "partNumber": "RT-SFP-MODULE", "description": "SFP transceivers", "category": "Interface", "link": "#" },
            { "partNumber": "RT-EVAL-GSWITCH", "description": "Gigabit switch eval board", "category": "Tools", "link": "#" },
            { "partNumber": "RT-DATASHEET", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
            { "partNumber": "RT-REF-DESIGN", "description": "Reference design", "category": "Design Resources", "link": "#" },
            { "partNumber": "RT-MGMT-SW", "description": "Management software", "category": "Software", "link": "#" }
          ],
          "faqs": [
            {
              "question": "What uplink options does RTL8367 support?",
              "answer": "RTL8367 supports 2 Gigabit uplink ports configurable as SFP (fiber) or RGMII (copper). This provides flexibility for fiber or copper uplink connections.",
              "decisionGuide": "SFP for fiber uplinks. RGMII for copper or additional ports.",
              "keywords": ["SFP", "RGMII", "uplink", "fiber", "copper"]
            },
            {
              "question": "What management interfaces does RTL8367 provide?",
              "answer": "RTL8367 supports Web UI, SNMP v1/v2c, and CLI management. This allows flexible management options from simple web configuration to enterprise SNMP monitoring.",
              "decisionGuide": "Web for simple setup. SNMP for enterprise management. CLI for advanced users.",
              "keywords": ["Web UI", "SNMP", "CLI", "management interface"]
            },
            {
              "question": "Does RTL8367 support rate limiting?",
              "answer": "Yes, RTL8367 supports ingress and egress rate limiting per port. This allows bandwidth control and traffic shaping for QoS management.",
              "decisionGuide": "Use rate limiting for bandwidth control and QoS management.",
              "keywords": ["rate limiting", "bandwidth control", "traffic shaping", "QoS"]
            },
            {
              "question": "What security features does RTL8367 offer?",
              "answer": "RTL8367 provides port security, MAC address filtering, 802.1X authentication, and storm control. These features help secure the network against unauthorized access.",
              "decisionGuide": "Enable security features for network protection. Configure 802.1X for authentication.",
              "keywords": ["port security", "MAC filtering", "802.1X", "storm control"]
            },
            {
              "question": "Where can I get technical support for RTL8367?",
              "answer": "LiTong Electronics provides technical support for RTL8367 including switch design, configuration, and management setup. Contact our FAE team.",
              "decisionGuide": "Contact LiTong FAE for managed switch design support.",
              "keywords": ["technical support", "FAE", "managed switch", "configuration"]
            }
          ]
        },
        {
          "partNumber": "RTL8111EP",
          "name": "Industrial PCIe Gigabit Ethernet Controller",
          "shortDescription": "Industrial-grade PCIe Gigabit Ethernet controller for harsh environments",
          "description": "Industrial-grade PCIe Gigabit Ethernet controller for harsh environments",
          "descriptionParagraphs": [
            "RTL8111EP is an industrial-grade PCIe Gigabit Ethernet controller designed for harsh environments and extended temperature operation.",
            "This controller features enhanced ESD protection, wide temperature range, and robust operation for industrial automation and automotive applications.",
            "With the same driver support as standard RTL8111 series, RTL8111EP provides reliable Ethernet connectivity in demanding conditions."
          ],
          "specifications": {
            "Interface": "PCI Express 2.1",
            "Speed": "10/100/1000Mbps",
            "Temperature Range": "-40°C to +85°C",
            "ESD Protection": "8kV contact, 15kV air",
            "Wake-on-LAN": "Supported",
            "VLAN": "802.1Q",
            "Power": "Industrial power management",
            "Package": "QFN-32",
            "Reliability": "Industrial grade"
          },
          "features": [
            "Industrial temperature range",
            "Enhanced ESD protection",
            "PCIe 2.1 interface",
            "10/100/1000Mbps support",
            "Wake-on-LAN capability",
            "Wide voltage tolerance",
            "Robust EMI/EMC performance",
            "Industrial driver support"
          ],
          "applications": [
            "Industrial automation",
            "Automotive systems",
            "Railway systems",
            "Marine equipment",
            "Outdoor networking"
          ],
          "faeReview": {
            "author": "David Liu",
            "title": "Senior FAE - Industrial Network",
            "content": "RTL8111EP is the industrial version of the popular RTL8111H. The extended temperature and enhanced ESD protection make it suitable for harsh environments. Driver compatibility simplifies software development.",
            "highlight": "Industrial-grade Ethernet for harsh environments"
          },
          "alternativeParts": [
            {
              "partNumber": "I210-IT",
              "brand": "Intel",
              "specifications": { "interface": "PCIe", "temperature": "Industrial" },
              "comparison": { "cost": "Higher", "features": "More advanced" },
              "reason": "Higher performance industrial alternative",
              "useCase": "For demanding industrial apps",
              "link": "#"
            },
            {
              "partNumber": "VSC8258",
              "brand": "Microchip",
              "specifications": { "interface": "PCIe", "temperature": "Industrial" },
              "comparison": { "cost": "Higher", "reliability": "High" },
              "reason": "Alternative industrial PHY",
              "useCase": "For high-reliability applications",
              "link": "#"
            }
          ],
          "companionParts": [
            { "partNumber": "RT-IND-MAG", "description": "Industrial magnetics", "category": "Interface", "link": "#" },
            { "partNumber": "RT-EVAL-IND", "description": "Industrial eval board", "category": "Tools", "link": "#" },
            { "partNumber": "RT-DATASHEET", "description": "Industrial datasheet", "category": "Documentation", "link": "#" },
            { "partNumber": "RT-REF-DESIGN", "description": "Industrial reference design", "category": "Design Resources", "link": "#" },
            { "partNumber": "RT-IND-DRIVERS", "description": "Industrial drivers", "category": "Software", "link": "#" }
          ],
          "faqs": [
            {
              "question": "What makes RTL8111EP suitable for industrial applications?",
              "answer": "RTL8111EP features extended temperature range (-40°C to +85°C), enhanced ESD protection (8kV/15kV), and robust EMI/EMC performance. These features ensure reliable operation in harsh industrial environments.",
              "decisionGuide": "Industrial grade for harsh environments. Enhanced protection for reliability.",
              "keywords": ["industrial", "temperature range", "ESD protection", "EMI/EMC"]
            },
            {
              "question": "Are drivers compatible with standard RTL8111H?",
              "answer": "Yes, RTL8111EP uses the same drivers as RTL8111H. This simplifies software development and allows easy migration from commercial to industrial applications.",
              "decisionGuide": "Driver compatible with RTL8111H. Easy migration path.",
              "keywords": ["driver compatibility", "RTL8111H", "migration", "software"]
            },
            {
              "question": "What ESD protection does RTL8111EP provide?",
              "answer": "RTL8111EP provides enhanced ESD protection of 8kV contact discharge and 15kV air discharge, meeting industrial and automotive ESD requirements.",
              "decisionGuide": "High ESD protection suitable for industrial and automotive use.",
              "keywords": ["ESD protection", "8kV", "15kV", "automotive"]
            },
            {
              "question": "Is RTL8111EP suitable for automotive applications?",
              "answer": "RTL8111EP meets industrial temperature and ESD requirements. For automotive, verify specific AEC-Q100 qualification requirements with LiTong FAE.",
              "decisionGuide": "Industrial grade suitable for many automotive apps. Verify AEC-Q100 if required.",
              "keywords": ["automotive", "AEC-Q100", "industrial grade"]
            },
            {
              "question": "Where can I get technical support for RTL8111EP?",
              "answer": "LiTong Electronics provides specialized industrial Ethernet support including design review for harsh environments. Contact our industrial FAE team.",
              "decisionGuide": "Contact LiTong industrial FAE for harsh environment design support.",
              "keywords": ["technical support", "industrial FAE", "harsh environment", "design review"]
            }
          ]
        }
      ]
    }
  ]
};

// Write the file
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));
console.log('✅ Created products.json with first category (Ethernet Controllers)');
console.log('📊 Total categories: 1 (need 4 total with 6 products each)');
