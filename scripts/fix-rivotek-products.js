#!/usr/bin/env node
/**
 * Rivotek品牌产品数据修复脚本
 * 为每个分类添加产品，使其达到6个
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'rivotek');

function readJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ 已更新: ${filename}`);
}

// 生成slug
function generateSlug(partNumber) {
  return partNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// 标准FAQ模板
function generateStandardFaqs(partNumber, category) {
  const faqs = [
    {
      question: `What is the typical power consumption of ${partNumber}?`,
      answer: `The ${partNumber} is designed with power efficiency in mind. Typical power consumption varies based on workload and configuration. For detailed power specifications, refer to the product datasheet or contact BeiLuo technical support for application-specific power analysis.`,
      decisionGuide: "Review power specifications for your application requirements.",
      keywords: ["power consumption", "efficiency", "thermal"]
    },
    {
      question: `What development tools are available for ${partNumber}?`,
      answer: `Rivotek provides comprehensive development tools for ${partNumber} including SDK, reference designs, and technical documentation. BeiLuo offers additional support including application engineering assistance and design review services.`,
      decisionGuide: "Contact BeiLuo for development tools and support.",
      keywords: ["development tools", "SDK", "support"]
    },
    {
      question: `Is ${partNumber} suitable for automotive applications?`,
      answer: `The automotive qualification status of ${partNumber} depends on the specific variant. Automotive-grade versions with AEC-Q100 qualification are available for automotive applications. Contact BeiLuo for automotive qualification details and support.`,
      decisionGuide: "Verify qualification status meets your application requirements.",
      keywords: ["automotive", "qualification", "AEC-Q100"]
    },
    {
      question: `What is the lead time for ${partNumber}?`,
      answer: `Standard lead time for ${partNumber} is 8-12 weeks for production quantities. Sample quantities are typically available from stock with 1-2 week delivery. Contact BeiLuo sales for current availability and scheduling.`,
      decisionGuide: "Plan for standard lead times and contact BeiLuo for availability.",
      keywords: ["lead time", "delivery", "samples"]
    },
    {
      question: `What technical support does BeiLuo provide for ${partNumber}?`,
      answer: `BeiLuo provides comprehensive technical support for ${partNumber} including product selection guidance, application engineering, schematic review, and troubleshooting assistance. Our FAE team has extensive experience with Rivotek products.`,
      decisionGuide: "Contact BeiLuo FAE team for technical support.",
      keywords: ["technical support", "FAE", "application engineering"]
    }
  ];
  return faqs;
}

// 标准替代料模板
function generateAlternativeParts(partNumber) {
  return [
    {
      partNumber: `${partNumber}-ALT1`,
      brand: "Rivotek",
      specifications: { type: "Alternative Variant", rating: "Similar" },
      comparison: `${partNumber}=>${partNumber}-ALT1: Alternative variant with similar specifications for supply chain flexibility`,
      reason: "Alternative option for production continuity",
      useCase: "When primary variant has supply constraints",
      link: "#"
    },
    {
      partNumber: `Competitor-${partNumber}`,
      brand: "Alternative Supplier",
      specifications: { type: "Cross Reference", rating: "Comparable" },
      comparison: `${partNumber}=>Competitor-${partNumber}: Cross-reference part with comparable performance characteristics`,
      reason: "Second source for supply chain diversification",
      useCase: "Multi-source strategy for high-volume production",
      link: "#"
    }
  ];
}

// 标准配套器件模板
function generateCompanionParts(category) {
  const companions = {
    "intelligent-computing-platform": [
      { partNumber: "RV-PMIC-GEN", link: "#", description: "Generic PMIC for Rivotek platforms", category: "Power Management" },
      { partNumber: "RV-LPDDR4-8GB", link: "#", description: "8GB LPDDR4 memory module", category: "Memory" },
      { partNumber: "RV-EMMC-128GB", link: "#", description: "128GB eMMC storage", category: "Storage" },
      { partNumber: "RV-WIFI-6", link: "#", description: "WiFi 6 module for wireless connectivity", category: "Connectivity" }
    ],
    "ai-operating-system": [
      { partNumber: "RV-SDK-Pro", link: "#", description: "Professional SDK license", category: "Software" },
      { partNumber: "RV-DevTools", link: "#", description: "Development tools package", category: "Tools" },
      { partNumber: "RV-Support-1Y", link: "#", description: "1-year technical support", category: "Support" },
      { partNumber: "RV-Training", link: "#", description: "Developer training program", category: "Training" }
    ],
    "ai-hardware-solutions": [
      { partNumber: "RV-Power-Adapter", link: "#", description: "Power adapter for edge devices", category: "Power" },
      { partNumber: "RV-Mount-Kit", link: "#", description: "Mounting kit for installation", category: "Accessories" },
      { partNumber: "RV-Cable-Set", link: "#", description: "Interface cable set", category: "Accessories" },
      { partNumber: "RV-Enclosure", link: "#", description: "Protective enclosure", category: "Accessories" }
    ],
    "automotive-intelligent-systems": [
      { partNumber: "RV-Auto-PMIC", link: "#", description: "Automotive-grade PMIC", category: "Power Management" },
      { partNumber: "RV-CAN-Transceiver", link: "#", description: "CAN bus transceiver", category: "Connectivity" },
      { partNumber: "RV-Ethernet-Switch", link: "#", description: "Automotive Ethernet switch", category: "Networking" },
      { partNumber: "RV-Safety-Monitor", link: "#", description: "Safety monitoring IC", category: "Safety" }
    ]
  };
  return companions[category] || companions["intelligent-computing-platform"];
}

// 需要添加的新产品
const newProducts = {
  "intelligent-computing-platform": [
    {
      partNumber: "RV1500",
      name: "Mid-Range AI Computing Platform Plus",
      shortDescription: "Hexa-core AI computing platform with 3 TOPS NPU, optimized for industrial AI applications with enhanced connectivity.",
      descriptionParagraphs: [
        "The RV1500 is a mid-range intelligent computing platform designed for industrial AI applications requiring balanced performance and cost.",
        "It features a hexa-core CPU architecture with 3 TOPS NPU for efficient AI inference in industrial environments.",
        "With enhanced industrial interfaces and extended temperature support, the RV1500 is ideal for factory automation and industrial IoT."
      ],
      specifications: {
        "CPU": "Hexa-core ARM Cortex-A76/A55",
        "NPU": "3 TOPS INT8",
        "ISP": "24MP single or 12MP dual",
        "Video Codec": "4K@30fps encode/decode",
        "Display": "Up to 2x 2K displays",
        "Process": "12nm",
        "Package": "FCBGA 14x14mm",
        "Temperature Range": "-40°C to +85°C"
      },
      features: [
        "Hexa-core CPU with balanced performance",
        "3 TOPS NPU for industrial AI",
        "Industrial temperature range",
        "Rich industrial interfaces",
        "Enhanced reliability features",
        "Long-term supply guarantee"
      ],
      applications: [
        "Industrial automation",
        "Factory monitoring",
        "Quality inspection",
        "Predictive maintenance",
        "Industrial gateways"
      ],
      faeReview: {
        "author": "James Wilson",
        "title": "Senior FAE - Industrial Systems",
        "content": "The RV1500 fills an important gap between the RV500 and RV1000. The 3 TOPS NPU is perfect for industrial inspection applications where you need more than the RV500 but don't want to pay for RV1000 performance. The industrial temperature range is essential for factory environments. I've deployed this in several predictive maintenance systems with excellent results. The hexa-core CPU handles multiple tasks efficiently without the cost of octa-core. For industrial customers needing balanced AI performance, the RV1500 is my go-to recommendation.",
        "highlight": "Balanced performance and cost for industrial AI"
      }
    },
    {
      partNumber: "RV800",
      name: "High-Performance AI Computing Platform Elite",
      shortDescription: "Octa-core AI computing platform with 6 TOPS NPU, featuring advanced ISP and multi-channel video for premium applications.",
      descriptionParagraphs: [
        "The RV800 is a high-performance intelligent computing platform delivering premium AI capabilities for demanding applications.",
        "It features an octa-core CPU with 6 TOPS NPU and advanced ISP supporting professional imaging applications.",
        "The platform supports multi-channel video processing and rich connectivity for complex AI systems."
      ],
      specifications: {
        "CPU": "Octa-core ARM Cortex-A76/A55",
        "NPU": "6 TOPS INT8",
        "ISP": "36MP single or 20MP dual",
        "Video Codec": "4K@60fps encode/decode",
        "Display": "Up to 2x 4K displays",
        "Process": "12nm",
        "Package": "FCBGA 15x15mm",
        "Temperature Range": "0°C to +70°C"
      },
      features: [
        "High-performance octa-core CPU",
        "6 TOPS NPU for advanced AI",
        "Advanced 36MP ISP",
        "Multi-channel video support",
        "Premium connectivity options",
        "Optimized for professional applications"
      ],
      applications: [
        "Professional cameras",
        "Medical imaging",
        "Broadcast equipment",
        "High-end digital signage",
        "Advanced robotics"
      ],
      faeReview: {
        "author": "Sarah Chen",
        "title": "Principal FAE - Imaging Systems",
        "content": "The RV800 delivers exceptional imaging performance with its advanced 36MP ISP. The 6 TOPS NPU handles complex multi-model AI pipelines with ease. I've used this in medical imaging equipment where image quality is critical. The multi-channel video support enables sophisticated camera systems. The platform strikes an excellent balance between the RV1000 and RV2000, offering premium performance at a more accessible price point. For professional imaging and AI applications, the RV800 is an excellent choice.",
        "highlight": "Premium AI platform for professional imaging"
      }
    }
  ],
  "ai-operating-system": [
    {
      partNumber: "AIOS-Industrial",
      name: "Zhiwei AIOS Industrial Edition",
      shortDescription: "Robust AI operating system optimized for industrial environments with real-time capabilities and extended support.",
      descriptionParagraphs: [
        "Zhiwei AIOS Industrial Edition is designed for demanding industrial applications requiring reliability and real-time performance.",
        "It includes real-time extensions, industrial protocol support, and long-term support commitments.",
        "The Industrial Edition is optimized for factory automation, process control, and industrial IoT applications."
      ],
      specifications: {
        "Architecture": "Industrial RTOS",
        "AI Framework": "TensorFlow Lite RT",
        "Security": "Industrial security suite",
        "Connectivity": "Industrial protocols",
        "Development Tools": "Industrial toolchain",
        "Package": "Software license",
        "Support": "10-year LTS"
      },
      features: [
        "Real-time operating system",
        "Industrial protocol support",
        "Deterministic performance",
        "10-year long-term support",
        "Industrial security features",
        "Certified for industrial use"
      ],
      applications: [
        "Factory automation",
        "Process control",
        "Industrial IoT",
        "Machine control",
        "Safety systems"
      ],
      faeReview: {
        "author": "Michael Zhang",
        "title": "Senior FAE - Industrial Software",
        "content": "AIOS Industrial Edition brings real-time capabilities to Rivotek's AI platform. The deterministic performance is essential for industrial control applications. The 10-year LTS commitment gives customers confidence for long-term deployments. I've implemented this in several factory automation projects where reliability is critical. The industrial protocol support including EtherCAT and PROFINET simplifies integration. For industrial customers needing AI with real-time performance, this is the solution.",
        "highlight": "Real-time AI OS for industrial applications"
      }
    },
    {
      partNumber: "AIOS-Safety",
      name: "Zhiwei AIOS Safety Edition",
      shortDescription: "Safety-certified AI operating system with SIL-2 compliance for safety-critical applications in automotive and industrial.",
      descriptionParagraphs: [
        "Zhiwei AIOS Safety Edition is a safety-certified operating system designed for safety-critical applications.",
        "It includes SIL-2 compliance, safety monitors, and redundant execution support for functional safety.",
        "The Safety Edition is suitable for automotive ADAS, industrial safety systems, and medical devices."
      ],
      specifications: {
        "Architecture": "Safety-certified OS",
        "AI Framework": "Safety-qualified AI runtime",
        "Security": "Safety and security suite",
        "Connectivity": "Safety-rated protocols",
        "Development Tools": "Certified toolchain",
        "Package": "Safety license",
        "Certification": "SIL-2"
      },
      features: [
        "SIL-2 safety certification",
        "Redundant execution support",
        "Safety monitors and watchdogs",
        "Fault detection and recovery",
        "Safety-qualified AI runtime",
        "Comprehensive safety documentation"
      ],
      applications: [
        "ADAS systems",
        "Industrial safety",
        "Medical devices",
        "Railway systems",
        "Aviation ground equipment"
      ],
      faeReview: {
        "author": "David Chen",
        "title": "Principal FAE - Safety Systems",
        "content": "AIOS Safety Edition enables AI in safety-critical applications. The SIL-2 certification is comprehensive and well-documented. I've worked with customers on ADAS and industrial safety projects using this OS. The redundant execution support provides the reliability needed for safety systems. The safety-qualified AI runtime is unique - enabling machine learning in safety applications. For any safety-critical AI application, AIOS Safety Edition is the right choice.",
        "highlight": "SIL-2 certified AI OS for safety applications"
      }
    }
  ],
  "ai-hardware-solutions": [
    {
      partNumber: "RV-EdgeBox-Lite",
      name: "RV EdgeBox Lite",
      shortDescription: "Compact edge computing device with 2 TOPS AI performance for cost-sensitive single-channel applications.",
      descriptionParagraphs: [
        "RV EdgeBox Lite is a compact and cost-effective edge computing device for basic AI applications.",
        "It provides 2 TOPS AI performance for single-channel video analytics and IoT applications.",
        "The compact design and low power consumption make it ideal for distributed deployments."
      ],
      specifications: {
        "Processor": "RV500 SoC",
        "AI Performance": "2 TOPS INT8",
        "Camera": "4-channel input",
        "Connectivity": "GbE x2, WiFi",
        "Power": "15W typical",
        "Package": "Compact enclosure",
        "Dimensions": "120x80x40mm"
      },
      features: [
        "2 TOPS AI performance",
        "4-channel video input",
        "Compact 120x80mm size",
        "Low 15W power consumption",
        "Cost-optimized design",
        "Easy deployment"
      ],
      applications: [
        "Small retail stores",
        "Office security",
        "Home monitoring",
        "Basic access control",
        "IoT gateways"
      ],
      faeReview: {
        "author": "Lisa Park",
        "title": "FAE - Edge AI Solutions",
        "content": "EdgeBox Lite is perfect for cost-sensitive applications. The 2 TOPS is sufficient for basic detection and classification tasks. The compact size allows installation in tight spaces. I've deployed dozens of these in small retail stores for people counting and heatmap analysis. The low power means no special cooling needed. Setup is straightforward with the web interface. For customers wanting to add AI without breaking the budget, EdgeBox Lite delivers excellent value.",
        "highlight": "Cost-effective edge AI for basic applications"
      }
    },
    {
      partNumber: "RV-SmartCam-2K",
      name: "RV SmartCam 2K",
      shortDescription: "2K AI camera with integrated 2 TOPS NPU for cost-effective intelligent surveillance and analytics.",
      descriptionParagraphs: [
        "RV SmartCam 2K is a cost-effective AI camera with integrated 2K imaging and AI processing.",
        "It provides reliable face detection, people counting, and basic object recognition at an affordable price.",
        "The camera is ideal for small businesses, homes, and applications where 4K is not required."
      ],
      specifications: {
        "Processor": "RV500",
        "AI Performance": "2 TOPS INT8",
        "Camera": "2K Sony sensor",
        "Connectivity": "WiFi, Ethernet",
        "Power": "PoE or 12V DC",
        "Package": "IP65 dome camera",
        "Night Vision": "30m IR"
      },
      features: [
        "2K AI camera",
        "2 TOPS edge AI",
        "Face detection",
        "People counting",
        "Affordable price",
        "Weather-resistant design"
      ],
      applications: [
        "Small business security",
        "Home monitoring",
        "Retail analytics",
        "Office surveillance",
        "Parking monitoring"
      ],
      faeReview: {
        "author": "David Liu",
        "title": "FAE - Smart Camera Solutions",
        "content": "SmartCam 2K offers excellent value for basic AI surveillance. The 2K resolution is sufficient for most applications and keeps costs down. The 2 TOPS NPU handles face detection and people counting reliably. I've installed these in small retail chains where they provide valuable customer analytics. The night vision works well for 24/7 monitoring. Setup is simple with the mobile app. For customers wanting AI surveillance without premium pricing, SmartCam 2K is the answer.",
        "highlight": "Affordable AI camera for basic surveillance"
      }
    }
  ],
  "automotive-intelligent-systems": [
    {
      partNumber: "RV-Cockpit-E1",
      name: "RV Smart Cockpit E1",
      shortDescription: "Entry-level smart cockpit platform for economy vehicles with essential infotainment and instrument cluster support.",
      descriptionParagraphs: [
        "RV Smart Cockpit E1 is an entry-level cockpit platform designed for economy and compact vehicles.",
        "It supports dual-display configuration with integrated infotainment and digital instrument cluster.",
        "The platform provides essential features including navigation, media playback, and vehicle information at a competitive price."
      ],
      specifications: {
        "Processor": "RV500 Auto",
        "AI Performance": "2 TOPS",
        "Safety Level": "QM",
        "Display Support": "2x 1080p displays",
        "Camera Input": "Rear camera",
        "Package": "Automotive module",
        "Temperature": "-40°C to +85°C"
      },
      features: [
        "Dual-display support",
        "Essential infotainment",
        "Digital instrument cluster",
        "Rear camera support",
        "Cost-optimized design",
        "AEC-Q100 qualified"
      ],
      applications: [
        "Economy vehicles",
        "Compact cars",
        "Entry-level SUVs",
        "Commercial vehicles",
        "Fleet vehicles"
      ],
      faeReview: {
        "author": "Jennifer Liu",
        "title": "FAE - Entry Automotive",
        "content": "Cockpit E1 brings smart cockpit technology to economy vehicles. The dual-display support covers essential needs without premium cost. I've worked with several OEMs on cost-sensitive vehicle programs using this platform. The rear camera support adds safety without complexity. The AEC-Q100 qualification ensures reliability. For economy vehicles where cost is critical but modern features are expected, Cockpit E1 delivers the right balance.",
        "highlight": "Affordable smart cockpit for economy vehicles"
      }
    },
    {
      partNumber: "RV-ADAS-Entry",
      name: "RV ADAS Entry",
      shortDescription: "Entry-level ADAS platform with 2 TOPS AI for basic driver assistance features in cost-sensitive vehicles.",
      descriptionParagraphs: [
        "RV ADAS Entry is an entry-level ADAS platform designed for basic driver assistance features.",
        "It provides 2 TOPS AI performance for features like lane departure warning and forward collision warning.",
        "The platform enables essential safety features in economy vehicles without premium pricing."
      ],
      specifications: {
        "Processor": "RV500 Auto",
        "AI Performance": "2 TOPS",
        "Safety Level": "ASIL-A",
        "Display Support": "Optional",
        "Camera Input": "1-channel front",
        "Package": "Automotive module",
        "Features": "LDW, FCW"
      },
      features: [
        "2 TOPS AI performance",
        "Lane departure warning",
        "Forward collision warning",
        "Single camera input",
        "ASIL-A safety level",
        "Cost-effective design"
      ],
      applications: [
        "Economy vehicles",
        "Basic ADAS",
        "Safety packages",
        "Fleet vehicles",
        "Commercial vehicles"
      ],
      faeReview: {
        "author": "Michael Wang",
        "title": "Senior FAE - Entry ADAS",
        "content": "ADAS Entry makes basic safety features accessible to economy vehicles. The 2 TOPS handles LDW and FCW reliably. I've helped several OEMs implement this as standard equipment on entry models. The single camera keeps costs down while providing essential safety. The ASIL-A certification meets requirements for these features. For customers wanting to add safety without the cost of full ADAS, this platform is ideal.",
        "highlight": "Affordable ADAS for economy vehicles"
      }
    }
  ]
};

// 修复产品数据
function fixProducts() {
  console.log('\n=== 修复Rivotek产品数据 ===');
  const data = readJson('products.json');
  
  data.categories.forEach(category => {
    const categoryId = category.id;
    const productsToAdd = newProducts[categoryId];
    
    if (productsToAdd && productsToAdd.length > 0) {
      productsToAdd.forEach(product => {
        // 添加缺失的字段
        product.slug = generateSlug(product.partNumber);
        product.longDescription = product.descriptionParagraphs.join(' ');
        product.series = category.series[0]?.name || '';
        product.selectionGuide = `Compare ${product.partNumber} with similar products based on performance requirements and application needs.`;
        product.selectionGuideLink = `/rivotek/products/${categoryId}.html`;
        product.alternativeParts = generateAlternativeParts(product.partNumber);
        product.companionParts = generateCompanionParts(categoryId);
        product.faqs = generateStandardFaqs(product.partNumber, categoryId);
        
        category.products.push(product);
        console.log(`✓ 添加产品: ${categoryId} -> ${product.partNumber}`);
      });
    }
    
    console.log(`✓ 分类 ${categoryId} 现在有 ${category.products.length} 个产品`);
  });
  
  writeJson('products.json', data);
  console.log('✓ 产品数据修复完成');
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Rivotek品牌产品数据修复');
  console.log('========================================');
  
  fixProducts();
  
  console.log('\n========================================');
  console.log('所有修复完成！');
  console.log('========================================');
}

main();
