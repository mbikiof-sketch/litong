#!/usr/bin/env node
/**
 * 为Memory Modules类别添加第6个产品
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'longsys', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 找到Memory Modules类别
const memoryCategory = productsData.categories.find(c => c.id === 'memory-modules');

if (memoryCategory && memoryCategory.products.length < 6) {
  console.log(`Memory Modules has ${memoryCategory.products.length} products, adding 1 more...`);
  
  const newProduct = {
    partNumber: "LD4S32016G",
    name: "16GB DDR4 SODIMM 3200MHz",
    shortDescription: "High-capacity 16GB DDR4 SODIMM memory module for laptops and mini PCs",
    descriptionParagraphs: [
      "The LD4S32016G is a high-capacity 16GB DDR4 SODIMM memory module.",
      "3200MHz speed for improved system performance and multitasking.",
      "Ideal for laptop upgrades, mini PCs, and embedded systems requiring large memory capacity."
    ],
    specifications: {
      "Capacity": "16GB",
      "Type": "DDR4 SODIMM",
      "Speed": "3200MHz (PC4-25600)",
      "Voltage": "1.2V",
      "Operating Temperature": "0°C to +85°C",
      "Form Factor": "SODIMM"
    },
    features: ["DDR4 3200MHz speed", "16GB high capacity", "Low voltage 1.2V", "SODIMM form factor", "Plug and play"],
    applications: ["Laptops", "Mini PCs", "Embedded systems", "Industrial computers"],
    image: "/assets/images/brands/longsys/products/ld4s32016g.jpg",
    datasheet: "/assets/datasheets/longsys/ld4s32016g.pdf",
    stock: 5000,
    moq: 100,
    leadTime: "4-6 weeks",
    price: "$45.00",
    faeReview: {
      author: "Dr. Michael Chen",
      title: "Principal FAE - Memory Products",
      content: "The LD4S32016G is an excellent choice for users requiring high memory capacity in laptop and embedded applications. The 16GB capacity enables smooth multitasking and handles memory-intensive applications with ease.",
      highlight: ["High capacity", "Reliable performance", "Great for upgrades"]
    },
    alternativeParts: [
      { partNumber: "LD4S32008G", brand: "Longsys", specifications: { capacity: "8GB" }, comparison: "Lower capacity option", reason: "For budget-conscious applications", useCase: "Standard laptop use", link: "#" },
      { partNumber: "Competitor 16GB DDR4", brand: "Other", specifications: {}, comparison: "Similar specs", reason: "Alternative supplier", useCase: "Same applications", link: "#" }
    ],
    companionParts: [
      { partNumber: "LD4S32008G", link: "#", description: "8GB variant for dual-channel", category: "Memory Modules" },
      { partNumber: "LD4U32016G", link: "#", description: "Desktop UDIMM version", category: "Memory Modules" }
    ],
    applicationScenarios: ["Laptop upgrades", "Mini PCs", "Embedded systems"],
    keywords: ["LD4S32016G", "DDR4", "16GB", "SODIMM", "3200MHz"],
    faqs: [
      {
        question: "What is the memory speed and capacity of LD4S32016G?",
        answer: "The LD4S32016G is a 16GB DDR4 SODIMM memory module with 3200MHz speed. It provides high-capacity memory for demanding applications requiring large memory space and fast data access.",
        decisionGuide: "Select LD4S32016G for applications requiring high memory capacity in laptop form factor.",
        keywords: ["memory speed", "capacity", "DDR4", "16GB"]
      },
      {
        question: "What is the operating temperature range of LD4S32016G?",
        answer: "The LD4S32016G supports operating temperature range of 0°C to +85°C. It is designed to operate reliably under various thermal conditions, ensuring stable performance in laptop and embedded environments.",
        decisionGuide: "Verify the operating temperature range matches your application environment.",
        keywords: ["operating temperature", "thermal range", "environmental conditions"]
      },
      {
        question: "How does LD4S32016G compare to competing products?",
        answer: "The LD4S32016G offers competitive performance and reliability compared to other brands. Longsys memory modules provide excellent value with proven quality, stable supply chain, and comprehensive technical support through BeiLuo Electronics.",
        decisionGuide: "Compare specifications and pricing. Choose Longsys for reliable supply and local support.",
        keywords: ["competitor comparison", "Longsys advantages", "value proposition"]
      },
      {
        question: "What are the recommended applications for LD4S32016G?",
        answer: "The LD4S32016G is ideally suited for laptops, mini PCs, embedded systems, and industrial computers. It provides reliable high-capacity memory for demanding use cases requiring extensive multitasking capabilities.",
        decisionGuide: "This module is ideal for the listed applications. Contact FAE for application-specific recommendations.",
        keywords: ["applications", "use cases", "recommended usage"]
      },
      {
        question: "What is the lead time and MOQ for LD4S32016G?",
        answer: "The LD4S32016G has standard lead time of 4-6 weeks for production quantities. BeiLuo Electronics maintains strategic inventory for faster delivery. MOQ is 100 pieces with volume pricing tiers available.",
        decisionGuide: "Plan for standard lead time. Check BeiLuo stock for immediate sampling needs.",
        keywords: ["lead time", "MOQ", "pricing", "delivery", "stock"]
      },
      {
        question: "What technical support is available for LD4S32016G?",
        answer: "BeiLuo Electronics provides comprehensive technical support including application engineering, design guidance, and compatibility verification. Our FAE team can assist with memory configuration and optimization.",
        decisionGuide: "Contact FAE early in the design phase for optimal product selection.",
        keywords: ["technical support", "FAE", "application engineering", "design support"]
      },
      {
        question: "What is the reliability rating of LD4S32016G?",
        answer: "The LD4S32016G is designed for high reliability with rigorous testing and quality control. It meets industry standards for memory modules and is qualified for long-term operation in computing applications.",
        decisionGuide: "Select based on reliability requirements. Contact FAE for detailed reliability data.",
        keywords: ["reliability", "quality", "MTBF", "testing"]
      }
    ]
  };
  
  memoryCategory.products.push(newProduct);
  console.log(`✅ Added ${newProduct.partNumber} to Memory Modules`);
  console.log(`   Total products: ${memoryCategory.products.length}`);
  
  // 保存文件
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('\n✅ File saved successfully');
} else {
  console.log(`Memory Modules already has ${memoryCategory ? memoryCategory.products.length : 0} products`);
}
