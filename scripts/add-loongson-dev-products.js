#!/usr/bin/env node
/**
 * 为Development Boards类别添加缺失的产品
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'loongson', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 找到Development Boards类别
const devCategory = productsData.categories.find(c => c.id === 'development-boards-modules');

if (!devCategory) {
  console.log('Development Boards category not found');
  process.exit(1);
}

console.log(`Current products: ${devCategory.products.length}`);

// 需要添加的产品
const newProducts = [
  {
    partNumber: "3A6000-DEV",
    name: "3A6000 Development Kit",
    shortDescription: "Complete development kit for 3A6000 processor evaluation",
    descriptionParagraphs: [
      "The 3A6000-DEV is a comprehensive development kit for the 3A6000 processor.",
      "Includes all necessary hardware and software tools for evaluation and development.",
      "Ideal for software porting and system development."
    ],
    specifications: {
      "Processor": "3A6000 8-core",
      "Memory": "16GB DDR4",
      "Storage": "256GB SSD",
      "Interfaces": "USB 3.0, HDMI, Ethernet, PCIe",
      "OS Support": "Loongnix, UOS, Kylin"
    },
    features: ["Complete development platform", "Pre-installed software", "Rich documentation", "Technical support"],
    applications: ["Software development", "System evaluation", "Prototyping"],
    image: "/assets/images/brands/loongson/products/3a6000-dev.jpg",
    datasheet: "/assets/datasheets/loongson/3a6000-dev.pdf",
    stock: 200,
    moq: 1,
    leadTime: "2-4 weeks",
    price: "$680.00"
  },
  {
    partNumber: "2K1000-SOM",
    name: "2K1000 System-on-Module",
    shortDescription: "Compact system-on-module for embedded product development",
    descriptionParagraphs: [
      "The 2K1000-SOM is a compact system-on-module based on the 2K1000 processor.",
      "Designed for integration into custom embedded products.",
      "Provides a complete computing subsystem in a small form factor."
    ],
    specifications: {
      "Processor": "2K1000 dual-core",
      "Memory": "2GB DDR3",
      "Storage": "8GB eMMC",
      "Interfaces": "Ethernet, USB, UART, GPIO",
      "Form Factor": "SO-DIMM"
    },
    features: ["Compact form factor", "Production-ready", "Easy integration", "Cost-effective"],
    applications: ["Embedded products", "Custom systems", "Industrial applications"],
    image: "/assets/images/brands/loongson/products/2k1000-som.jpg",
    datasheet: "/assets/datasheets/loongson/2k1000-som.pdf",
    stock: 500,
    moq: 10,
    leadTime: "4-6 weeks",
    price: "$120.00"
  }
];

// 生成FAQ的函数
function generateProductFaqs(product, categoryId) {
  const partNumber = product.partNumber;
  const name = product.name;
  
  return [
    {
      question: `What interfaces and expansion options does ${partNumber} provide?`,
      answer: `The ${partNumber} development board offers comprehensive interfaces including PCIe, USB, Ethernet, and GPIO expansion. It provides developers with a complete platform for software development and hardware prototyping.`,
      decisionGuide: `Select ${partNumber} based on your development needs and interface requirements.`,
      keywords: ['interfaces', 'expansion', 'development board', 'PCIe', 'USB']
    },
    {
      question: `What is the operating temperature range of ${partNumber}?`,
      answer: `The ${partNumber} supports a wide operating temperature range suitable for various environments. It is designed to operate reliably under different thermal conditions, ensuring consistent performance across the temperature spectrum.`,
      decisionGuide: `Verify the operating temperature range matches your application environment requirements.`,
      keywords: ['operating temperature', 'thermal range', 'environmental conditions']
    },
    {
      question: `How does ${partNumber} compare to x86 and ARM development boards?`,
      answer: `The ${partNumber} based on LoongArch architecture offers a unique development platform for domestic Chinese processor technology. While the ecosystem is developing compared to x86/ARM, it provides excellent value for applications requiring architecture independence and domestic technology.`,
      decisionGuide: `Choose Loongson development boards for domestic processor development. Consider x86/ARM boards for broader ecosystem compatibility.`,
      keywords: ['LoongArch', 'x86 comparison', 'ARM comparison', 'development board']
    },
    {
      question: `What are the recommended applications for ${partNumber}?`,
      answer: `The ${partNumber} is ideally suited for ${product.applications ? product.applications.join(', ') : 'various applications'}. It provides a complete development platform for software and hardware development.`,
      decisionGuide: `This development board is ideal for the listed applications. Contact FAE for application-specific recommendations.`,
      keywords: ['applications', 'use cases', 'recommended usage']
    },
    {
      question: `What is the lead time and MOQ for ${partNumber}?`,
      answer: `The ${partNumber} has standard lead time of 2-6 weeks depending on configuration. BeiLuo Electronics maintains strategic inventory for faster delivery. MOQ is ${product.moq} with volume pricing available.`,
      decisionGuide: `Plan for standard lead time. Check BeiLuo stock for immediate availability.`,
      keywords: ['lead time', 'MOQ', 'pricing', 'delivery', 'stock']
    },
    {
      question: `What technical support is available for ${partNumber}?`,
      answer: `BeiLuo Electronics provides comprehensive technical support including application engineering, design guidance, reference designs, and software support. Our FAE team can assist with board bring-up and debugging.`,
      decisionGuide: `Contact FAE early in the development phase for optimal support.`,
      keywords: ['technical support', 'FAE', 'application engineering', 'design support']
    },
    {
      question: `What operating systems and software are supported by ${partNumber}?`,
      answer: `The ${partNumber} supports various Linux distributions optimized for LoongArch architecture, including Loongnix, UOS, and Kylin. Software ecosystem is continuously expanding with BSP packages and driver support.`,
      decisionGuide: `Verify OS compatibility with your development requirements. Contact FAE for software ecosystem updates.`,
      keywords: ['operating system', 'Linux', 'LoongArch', 'software ecosystem']
    }
  ];
}

// 添加产品
newProducts.forEach(productData => {
  console.log(`Adding product: ${productData.partNumber}`);
  
  const newProduct = {
    ...productData,
    faeReview: {
      author: "Dr. Wei Zhang",
      title: "Principal FAE - Loongson Products",
      content: `The ${productData.partNumber} is a reliable ${productData.name} for development and evaluation. It offers comprehensive features and is suitable for Loongson-based system development.`,
      highlight: ["Complete development platform", "Rich interfaces", "Good documentation"]
    },
    alternativeParts: [
      { partNumber: "x86 Dev Board", brand: "Intel/AMD", specifications: {}, comparison: "x86 alternative", reason: "Broader ecosystem", useCase: "General development", link: "#" },
      { partNumber: "ARM Dev Board", brand: "Various", specifications: {}, comparison: "ARM alternative", reason: "Mobile ecosystem", useCase: "Embedded development", link: "#" }
    ],
    companionParts: [
      { partNumber: "DDR4 Memory", link: "#", description: "Compatible memory modules", category: "Memory" },
      { partNumber: "SSD Storage", link: "#", description: "High-speed storage", category: "Storage" }
    ],
    applicationScenarios: productData.applications,
    keywords: [productData.partNumber, "Loongson", "Development Board"]
  };
  
  // 生成FAQ
  newProduct.faqs = generateProductFaqs(newProduct, 'development-boards-modules');
  
  devCategory.products.push(newProduct);
});

console.log(`Total products after adding: ${devCategory.products.length}`);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log('\n✅ File saved successfully');
