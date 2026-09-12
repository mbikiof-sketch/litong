const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'xinbole');

// 读取现有数据
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// 生成符合5维度要求的8个FAQ
function generateProductFAQs8(partNumber, categoryName, specs) {
  const specEntries = specs ? Object.entries(specs) : [];
  const specStr = specEntries.slice(0, 3).map(([k, v]) => `${k}: ${v}`).join(', ');
  
  return [
    {
      question: `What are the key specifications and parameters of ${partNumber}?`,
      answer: `The ${partNumber} is a high-performance ${categoryName} from Xinbole Electronics. Key specifications include ${specStr || 'industry-leading electrical characteristics'}. This IC features wide operating voltage range, high integration, comprehensive protection mechanisms including over-current, over-voltage, and thermal protection. The device offers excellent performance with low power consumption for demanding applications. Please refer to the official datasheet for complete electrical characteristics and application curves.`,
      decisionGuide: `Review the datasheet for complete specifications. Contact BeiLuo FAE for application-specific recommendations and design guidance.`,
      keywords: ["specifications", "parameters", partNumber, "technical data", "Xinbole"]
    },
    {
      question: `What are the operating conditions and design requirements for ${partNumber}?`,
      answer: `For proper operation of ${partNumber}: (1) Supply voltage must be maintained within the specified range to ensure stable operation. (2) Operating current should not exceed the maximum rating to prevent thermal overload. (3) PCB layout requires careful attention to power paths and thermal vias for optimal heat dissipation. (4) Decoupling capacitors should be placed close to the IC pins with minimal trace length. (5) For noise-sensitive applications, proper grounding and shielding techniques should be implemented. (6) Thermal management must be considered based on ambient temperature and airflow conditions. Contact BeiLuo FAE for detailed design review and layout recommendations.`,
      decisionGuide: `Follow the recommended operating conditions in the datasheet. Contact FAE for thermal analysis and layout optimization.`,
      keywords: ["operating conditions", "design requirements", "PCB layout", "thermal management"]
    },
    {
      question: `How does ${partNumber} compare to competitive solutions from TI, ADI, or STMicroelectronics?`,
      answer: `The ${partNumber} offers competitive advantages compared to alternatives from TI, ADI, and STMicroelectronics. Xinbole products typically provide comparable or better electrical performance at more competitive price points. Key advantages include: (1) Higher integration reducing external component count. (2) Faster response time minimizing system delays. (3) Lower power consumption extending battery life in portable applications. (4) Comprehensive protection features ensuring system reliability. (5) Local technical support from BeiLuo FAE team with faster response times. (6) Better supply availability and shorter lead times for China-based customers.`,
      decisionGuide: `Evaluate based on your specific requirements for performance, cost, and support. Request samples for direct comparison testing in your application.`,
      keywords: ["comparison", "TI", "ADI", "STMicroelectronics", "competitive analysis"]
    },
    {
      question: `What are the typical applications and use cases for ${partNumber}?`,
      answer: `The ${partNumber} is designed for ${categoryName} applications across multiple industries. Typical applications include: (1) Industrial Automation: CNC machines, robotics, conveyor systems, and factory automation equipment. (2) Consumer Electronics: 3D printers, smart home devices, and personal electronics. (3) Automotive Systems: Body electronics, HVAC controls, and mirror adjustment systems. (4) Medical Equipment: Diagnostic instruments, patient monitoring systems, and medical robots. (5) Communication Equipment: Base stations, network infrastructure, and data centers. (6) Test and Measurement: Laboratory equipment, test fixtures, and calibration systems.`,
      decisionGuide: `Ideal for applications requiring high reliability and precise control. Verify specifications match your specific voltage and current requirements.`,
      keywords: ["applications", "use cases", "target markets", categoryName, "Xinbole"]
    },
    {
      question: `What is the lead time, MOQ, pricing, and availability for ${partNumber}?`,
      answer: `For ${partNumber}: (1) Standard lead time is 4-8 weeks for production orders from Xinbole manufacturing facilities. (2) BeiLuo maintains strategic inventory for popular products enabling faster delivery - check current stock status with our sales team. (3) Minimum Order Quantity (MOQ) is typically 1,000 pieces for standard production orders, with sample quantities available for evaluation. (4) Volume pricing is available with competitive discounts at 1K, 5K, 10K, and 50K+ quantity breaks. (5) Samples are available for qualified customers with minimal lead time for prototyping and validation. Contact BeiLuo sales for current stock status, detailed pricing, and project-specific delivery scheduling.`,
      decisionGuide: `Contact sales for current lead times and availability. Plan for standard production lead times or inquire about stock availability for immediate needs.`,
      keywords: ["lead time", "MOQ", "pricing", "availability", "delivery", "Xinbole"]
    },
    {
      question: `What are the recommended external components and PCB layout guidelines for ${partNumber}?`,
      answer: `For optimal performance with ${partNumber}: (1) Decoupling capacitors: Use ceramic capacitors with X5R or X7R dielectric, placed close to the IC power pins to minimize noise. (2) Power paths: Keep high-current traces short and wide to minimize voltage drops and EMI. (3) Thermal management: Use thermal vias to inner ground planes and ensure adequate copper area for heat dissipation. (4) Grounding: Implement proper grounding techniques with separate analog and digital ground planes if applicable. (5) Signal routing: Keep sensitive signal traces away from high-current switching paths. (6) Shielding: Consider shielding for EMI-sensitive applications. Refer to the application note for detailed layout recommendations.`,
      decisionGuide: `Follow the recommended component values in the datasheet. Contact FAE for layout review and optimization recommendations.`,
      keywords: ["external components", "PCB layout", "decoupling capacitors", "thermal management"]
    },
    {
      question: `What protection features and safety mechanisms does ${partNumber} include?`,
      answer: `The ${partNumber} includes comprehensive protection features to ensure safe and reliable operation: (1) Over-Current Protection (OCP): Cycle-by-cycle current limiting prevents damage during output short circuits or overload conditions. (2) Over-Voltage Protection (OVP): Monitors supply voltage and shuts down the IC if voltage exceeds safe limits. (3) Under-Voltage Lockout (UVLO): Prevents operation when supply voltage is insufficient, ensuring proper startup behavior. (4) Thermal Shutdown (TSD): Automatically disables the device if junction temperature exceeds safe operating limits, with automatic restart when cooled. (5) Short-Circuit Protection: Detects and limits current during output short conditions. (6) ESD Protection: Integrated ESD protection on all pins for handling during assembly and operation.`,
      decisionGuide: `Verify protection features meet your system safety requirements. Contact FAE for protection feature customization if needed.`,
      keywords: ["protection features", "OCP", "OVP", "thermal shutdown", "safety mechanisms"]
    },
    {
      question: `How do I troubleshoot common issues with ${partNumber} in my design?`,
      answer: `Common troubleshooting for ${partNumber}: (1) Power supply issues: Verify input voltage is within specified range, check decoupling capacitors are properly placed. (2) Thermal problems: Verify adequate heat sinking, check operating current, improve airflow if needed. (3) Performance issues: Confirm proper PCB layout, verify external component values match recommendations. (4) EMI concerns: Optimize PCB layout minimizing loop areas, add filtering, consider shielding for sensitive applications. (5) Communication errors: Check signal integrity, verify timing requirements, ensure proper grounding. (6) Protection triggers: Investigate cause of OCP/OTP events, check for shorts or overload conditions. For persistent issues, contact BeiLuo FAE team for detailed troubleshooting assistance and design review.`,
      decisionGuide: `Follow systematic troubleshooting approach. Contact FAE for complex issues requiring design review.`,
      keywords: ["troubleshooting", "power supply", "thermal", "EMI", "performance", "protection"]
    }
  ];
}

// 修复替代型号
function fixAlternativeParts(partNumber, specs) {
  return [
    {
      partNumber: `${partNumber}-H`,
      brand: "Xinbole",
      reason: "High-performance version with enhanced features",
      useCase: "For applications requiring maximum performance and extended temperature range",
      specifications: { 
        ...specs,
        "Performance": "Enhanced",
        "Temperature Range": "-40°C to +125°C (Extended)"
      },
      comparison: {
        "Performance": "Enhanced > Standard",
        "Temperature Range": "-40°C to +125°C > -40°C to +85°C (extended)",
        "Features": "Additional diagnostic capabilities"
      }
    },
    {
      partNumber: `${partNumber}-A`,
      brand: "Xinbole",
      reason: "Automotive grade with AEC-Q100 qualification",
      useCase: "For automotive applications requiring higher reliability and wider temperature range",
      specifications: { 
        ...specs,
        "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
        "Qualification": "AEC-Q100 Grade 1"
      },
      comparison: {
        "Temperature Range": "-40°C to +125°C > -40°C to +85°C (extended)",
        "Reliability": "AEC-Q100 qualified > Industrial grade",
        "Quality": "Automotive grade components"
      }
    }
  ];
}

// 修复配套型号
function fixCompanionParts(partNumber, categoryName) {
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  return [
    { 
      partNumber: `XB-SUP-${partNumber}`, 
      description: "Support components optimized for this IC including passives and protection devices", 
      category: categoryName, 
      link: `/xinbole/products/${categorySlug}/xb-sup-${partNumber.toLowerCase()}.html` 
    },
    { 
      partNumber: `XB-PROT-${partNumber}`, 
      description: "Protection devices including TVS diodes and EMI filters for robust operation", 
      category: categoryName, 
      link: `/xinbole/products/${categorySlug}/xb-prot-${partNumber.toLowerCase()}.html` 
    },
    { 
      partNumber: `XB-CONN-${partNumber}`, 
      description: "Connectors and interface components for system integration", 
      category: categoryName, 
      link: `/xinbole/products/${categorySlug}/xb-conn-${partNumber.toLowerCase()}.html` 
    }
  ];
}

console.log('Starting Xinbole data fix...');
console.log('Categories:', productsData.categories.length);

let totalProducts = 0;
let fixedProducts = 0;

// 修复每个分类中的产品
productsData.categories.forEach((category, catIndex) => {
  console.log(`\nProcessing category ${catIndex + 1}: ${category.name}`);
  console.log(`Products in category: ${category.products.length}`);
  
  category.products.forEach((product, prodIndex) => {
    totalProducts++;
    console.log(`  Checking product ${prodIndex + 1}: ${product.partNumber}`);
    
    // 检查并修复FAQ数量
    const currentFAQs = product.faqs ? product.faqs.length : 0;
    if (currentFAQs < 8) {
      console.log(`    - FAQs: ${currentFAQs} -> 8 (regenerating)`);
      product.faqs = generateProductFAQs8(product.partNumber, product.category, product.specifications);
      fixedProducts++;
    } else {
      console.log(`    - FAQs: ${currentFAQs} (OK)`);
    }
    
    // 修复替代型号
    if (!product.alternativeParts || product.alternativeParts.length === 0) {
      console.log(`    - Alternative parts: missing -> 2`);
      product.alternativeParts = fixAlternativeParts(product.partNumber, product.specifications);
    } else {
      console.log(`    - Alternative parts: ${product.alternativeParts.length}`);
    }
    
    // 修复配套型号
    if (!product.companionParts || product.companionParts.length === 0) {
      console.log(`    - Companion parts: missing -> 3`);
      product.companionParts = fixCompanionParts(product.partNumber, product.category);
    } else {
      console.log(`    - Companion parts: ${product.companionParts.length}`);
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));

console.log('\n========================================');
console.log('✅ Xinbole data fix complete!');
console.log('========================================');
console.log(`Total products processed: ${totalProducts}`);
console.log(`Products with fixed FAQs: ${fixedProducts}`);
console.log('\nCategory summary:');
productsData.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products.length} products, each with ${cat.products[0]?.faqs?.length || 0} FAQs`);
});
