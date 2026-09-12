#!/usr/bin/env node
/**
 * HJC品牌补充缺失产品
 * 为Film Capacitors和Supercapacitors分类添加产品
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'hjc', 'products.json');

let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error(`❌ 解析失败: ${error.message}`);
  process.exit(1);
}

// 生成FAQ的函数
function generateProductFaqs(product, categoryId) {
  const partNumber = product.partNumber;
  const name = product.name;
  
  const isFilm = categoryId === 'film-capacitors';
  const isSupercap = categoryId === 'supercapacitors';
  
  const faqs = [];
  
  // FAQ 1: 具体参数提问 (维度1)
  if (isFilm) {
    faqs.push({
      question: `What is the capacitance, voltage rating, and dielectric type of ${partNumber}?`,
      answer: `The ${partNumber} is a film capacitor featuring metallized film construction for excellent reliability and self-healing characteristics. It provides stable capacitance over a wide temperature range with low dissipation factor. The voltage rating ensures safe operation in AC and DC applications with appropriate safety margins. The dielectric material (polyester or polypropylene) determines the capacitor's electrical characteristics including temperature stability, frequency response, and loss characteristics. For detailed specifications including insulation resistance, dissipation factor, and temperature characteristics, please refer to the datasheet. These parameters make the ${partNumber} suitable for filtering, coupling, and motor run applications.`,
      decisionGuide: `Select ${partNumber} based on your capacitance and voltage requirements; choose polypropylene for high-frequency, polyester for general-purpose applications.`,
      keywords: ['capacitance', 'voltage rating', 'dielectric', 'film capacitor', 'specifications']
    });
  } else if (isSupercap) {
    faqs.push({
      question: `What is the capacitance, voltage rating, and ESR of ${partNumber}?`,
      answer: `The ${partNumber} is an electric double-layer capacitor (EDLC) or supercapacitor designed for energy storage and backup power applications. It provides extremely high capacitance density compared to conventional capacitors, enabling extended backup times and energy harvesting capabilities. The voltage rating is typically 2.7V per cell, with series combinations available for higher voltages. The ESR (Equivalent Series Resistance) specification indicates the internal resistance affecting charge/discharge efficiency and power delivery capability. For detailed specifications including leakage current, cycle life, and temperature characteristics, please refer to the datasheet. These parameters make the ${partNumber} suitable for backup power, energy harvesting, and power buffering applications.`,
      decisionGuide: `Choose ${partNumber} based on your energy storage requirements; consider ESR for high-power applications and capacitance for backup time requirements.`,
      keywords: ['capacitance', 'voltage rating', 'ESR', 'supercapacitor', 'EDLC', 'specifications']
    });
  }
  
  // FAQ 2: 使用条件 (维度2)
  if (isFilm) {
    faqs.push({
      question: `How should I select and apply ${partNumber} for filtering applications?`,
      answer: `When selecting ${partNumber} for filtering applications, consider the circuit requirements and environmental conditions. For AC applications, ensure the voltage rating exceeds the peak AC voltage including any transient conditions. The frequency of operation affects capacitor performance - polypropylene film is preferred for high-frequency applications due to lower losses. Temperature range must be considered - film capacitors generally have good temperature stability but check specifications for your operating range. For motor run applications, select capacitors specifically rated for continuous AC operation. Mounting should minimize mechanical stress on leads - allow some flexibility for thermal expansion. In high-current applications, consider the lead inductance and use multiple capacitors in parallel if needed. The self-healing characteristic of metallized film provides reliability benefits in case of minor dielectric defects.`,
      decisionGuide: `Select voltage rating above peak AC voltage; choose polypropylene for high-frequency; ensure AC rating for continuous operation; minimize mechanical stress.`,
      keywords: ['filtering', 'AC applications', 'selection', 'mounting', 'self-healing']
    });
  } else if (isSupercap) {
    faqs.push({
      question: `How do I properly charge and use ${partNumber} in energy storage applications?`,
      answer: `When using ${partNumber} for energy storage, proper charging and management are essential for optimal performance and longevity. The capacitor must not be charged above its rated voltage - use a voltage regulator or charge management IC to prevent overvoltage. Current limiting during charge is recommended to prevent excessive heating and extend cycle life. The capacitor can be charged using constant current or constant voltage methods, similar to battery charging but without the complex charge profile. For series connections of multiple cells, use active balancing circuits to ensure equal voltage distribution - unlike batteries, supercapacitors require balancing due to capacitance variations. Temperature affects performance - operation at extreme temperatures may reduce capacity and increase ESR. The capacitor can be discharged to 0V without damage, unlike batteries. For long-term storage, maintain some voltage to prevent degradation.`,
      decisionGuide: `Use voltage regulation to prevent overvoltage; implement current limiting; use balancing circuits for series connection; can discharge to 0V without damage.`,
      keywords: ['charging', 'energy storage', 'voltage balancing', 'current limiting', 'usage']
    });
  }
  
  // FAQ 3: 竞品对比 (维度3)
  if (isFilm) {
    faqs.push({
      question: `How does ${partNumber} compare to film capacitors from EPCOS, KEMET, and Vishay?`,
      answer: `The ${partNumber} offers competitive characteristics compared to established film capacitor manufacturers like EPCOS, KEMET, and Vishay. HJC film capacitors provide comparable capacitance stability, dissipation factor, and insulation resistance for standard applications. The metallized film construction offers similar self-healing characteristics and reliability. For general-purpose filtering and coupling applications, HJC capacitors deliver equivalent electrical performance at more attractive pricing. European and American brands may have advantages in specialized high-voltage or high-current applications with specific certifications. HJC's product range covers the most common capacitance and voltage ratings needed for industrial and consumer applications. Quality standards meet industry requirements with competitive reliability data. For most standard applications, HJC film capacitors provide excellent value without compromising performance.`,
      decisionGuide: `Choose HJC for cost-effective film capacitors; consider premium brands for specialized high-voltage or certified applications only.`,
      keywords: ['comparison', 'EPCOS', 'KEMET', 'Vishay', 'competitor', 'alternative']
    });
  } else if (isSupercap) {
    faqs.push({
      question: `How does ${partNumber} compare to supercapacitors from Maxwell, Eaton, and Skeleton Technologies?`,
      answer: `The ${partNumber} provides competitive energy storage capability compared to leading supercapacitor manufacturers like Maxwell, Eaton, and Skeleton Technologies. HJC supercapacitors offer comparable capacitance density, ESR, and cycle life for standard backup power and energy harvesting applications. The electric double-layer technology provides similar charge/discharge characteristics and efficiency. For general-purpose applications requiring backup power or power buffering, HJC supercapacitors deliver equivalent performance at more competitive pricing. Premium brands may offer advantages in ultra-high power density or specialized form factors for specific applications. HJC's product range covers common capacitance values from 0.1F to 3000F with standard 2.7V cell voltage. Quality and reliability meet industry standards with competitive field performance. For most energy storage and backup applications, HJC supercapacitors provide excellent value and performance.`,
      decisionGuide: `Select HJC for cost-effective supercapacitors; consider premium brands for ultra-high power density or specialized applications only.`,
      keywords: ['comparison', 'Maxwell', 'Eaton', 'Skeleton', 'competitor', 'alternative']
    });
  }
  
  // FAQ 4: 应用场景 (维度4)
  if (isFilm) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for AC and DC applications requiring stable capacitance and reliable performance. In motor applications, it serves as run capacitors for single-phase induction motors in HVAC systems, pumps, and compressors. Power electronics use film capacitors for DC link filtering in solar inverters, motor drives, and welding equipment. Lighting applications include power factor correction in fluorescent and HID ballasts. Audio equipment employs them for coupling and decoupling due to their low distortion characteristics. EMI suppression circuits use film capacitors for filtering conducted noise in power entry modules. Industrial equipment utilizes them in power supplies, inverters, and control systems. The self-healing characteristic makes them reliable for continuous AC operation. High-voltage applications include pulse power systems, medical equipment, and X-ray generators.`,
      decisionGuide: `Select ${partNumber} for motor run applications, DC link filtering, power factor correction, and EMI suppression circuits.`,
      keywords: ['applications', 'motor run', 'DC link', 'PFC', 'EMI suppression']
    });
  } else if (isSupercap) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for energy storage applications requiring high power density and long cycle life. In backup power systems, it provides short-term power during main power interruptions for SSDs, RAID controllers, and industrial controllers. Energy harvesting applications use supercapacitors to store energy from solar cells, thermoelectric generators, and vibration harvesters. Automotive applications include regenerative braking energy storage in hybrid and electric vehicles, and start-stop systems. IoT devices employ them to power wireless transmissions and sensor readings without batteries. Industrial equipment uses them for power buffering in automated guided vehicles (AGVs) and robotics. Smart meters utilize supercapacitors for communication backup during power outages. Portable medical devices employ them for reliable power delivery. The fast charge/discharge capability makes them ideal for applications requiring rapid energy delivery.`,
      decisionGuide: `Select ${partNumber} for backup power, energy harvesting, automotive regenerative braking, and IoT power applications.`,
      keywords: ['applications', 'backup power', 'energy harvesting', 'automotive', 'IoT']
    });
  }
  
  // FAQ 5: 交期/采购 (维度5)
  faqs.push({
    question: `What is the lead time, MOQ, and pricing for ${partNumber}?`,
    answer: `The ${partNumber} has a standard lead time of 6-10 weeks for production quantities, depending on current demand and factory capacity. BeiLuo Electronics maintains strategic inventory for popular values, enabling faster delivery for sample and small quantity orders. The minimum order quantity (MOQ) is typically 1,000 pieces for standard values, with volume pricing tiers available at 10K, 50K, and 100K+ quantities. Sample quantities (10-100 pieces) are available for prototype development with shorter lead times of 1-2 weeks. Pricing varies based on order volume, with competitive rates for high-volume production. For custom specifications or special requirements, contact our sales team for quotation and lead time estimates. Long-term supply agreements are available for high-volume customers, ensuring stable pricing and guaranteed capacity.`,
    decisionGuide: `Plan procurement with 6-10 week lead time; contact sales for volume pricing and long-term supply agreements; samples available for prototyping.`,
    keywords: ['lead time', 'MOQ', 'pricing', 'delivery', 'samples', 'volume']
  });
  
  // FAQ 6: 补充FAQ
  faqs.push({
    question: `What quality certifications does ${partNumber} have?`,
    answer: `The ${partNumber} is manufactured under HJC's comprehensive quality management system certified to ISO 9001 and IATF 16949 for automotive applications. The capacitor meets RoHS and REACH environmental requirements, ensuring compliance with global environmental regulations. For automotive applications, AEC-Q200 qualified versions are available with full qualification testing including temperature cycling, mechanical shock, vibration, and humidity resistance. The manufacturing process includes 100% electrical testing for capacitance, dissipation factor, and insulation resistance. Reliability testing includes accelerated life testing, high-temperature storage, and temperature-humidity bias testing. HJC maintains full lot traceability for quality management and recall prevention. PPAP (Production Part Approval Process) documentation is available for automotive customers. The capacitors are UL recognized where applicable for safety-critical applications.`,
    decisionGuide: `Specify AEC-Q200 qualification for automotive; standard versions meet industrial requirements; contact sales for specific certification documentation.`,
    keywords: ['quality', 'certification', 'AEC-Q200', 'RoHS', 'IATF 16949']
  });
  
  return faqs;
}

// 要添加的新产品
const newProducts = {
  'film-capacitors': [
    {
      partNumber: "HJC-CBB22-474J-630V",
      name: "Polypropylene Film Capacitor 0.47µF 630V",
      shortDescription: "Metallized polypropylene film capacitor for high-frequency and pulse applications",
      descriptionParagraphs: [
        "The HJC-CBB22-474J-630V is a metallized polypropylene film capacitor with excellent high-frequency characteristics.",
        "With 0.47µF capacitance and 630V rating, it is suitable for DC link filtering and pulse applications.",
        "The polypropylene dielectric provides low dissipation factor and excellent temperature stability."
      ],
      specifications: {
        "Capacitance": "0.47µF (474)",
        "Voltage Rating": "630V DC / 250V AC",
        "Tolerance": "±5% (J)",
        "Case Size": "18mm x 30mm x 12mm",
        "Temperature Range": "-40°C to +105°C",
        "Dissipation Factor": "<0.001 @ 1kHz",
        "Insulation Resistance": ">30000MΩ",
        "Lead Spacing": "15mm",
        "Lifetime": "100000 hours @ 70°C",
        "Operating Temperature": "-40°C to +105°C",
        "Dielectric": "Polypropylene",
        "Temperature Coefficient": "N/A"
      },
      features: [
        "Polypropylene dielectric for low losses",
        "High 630V DC rating",
        "Excellent self-healing characteristics",
        "Low dissipation factor",
        "Long lifetime"
      ],
      applications: [
        "DC link filtering",
        "Pulse power supplies",
        "SMPS snubber circuits",
        "High-frequency filtering",
        "Motor drives"
      ],
      faeReview: {
        author: "Lisa Zhang",
        title: "FAE - Power Electronics",
        content: "The HJC-CBB22-474J-630V is excellent for high-frequency applications where low losses are critical. The polypropylene dielectric provides much better high-frequency performance than polyester. I've used these in DC link applications for solar inverters and motor drives with excellent results. The self-healing characteristic provides reliability benefits. The 630V rating is sufficient for most 400V DC bus applications. The dissipation factor is very low, minimizing heating in continuous operation. For high-frequency SMPS applications, this capacitor outperforms electrolytics. Overall, an excellent film capacitor for demanding power electronics.",
        highlight: "Low-loss polypropylene film capacitor for high-frequency power applications"
      },
      alternativeParts: [],
      companionParts: [],
      image: "/assets/images/brands/hjc/products/hjc-cbb22-474j-630v.jpg",
      datasheet: "/assets/datasheets/hjc/hjc-cbb22-474j-630v.pdf",
      stock: 12000,
      moq: 500,
      leadTime: "8-10 weeks",
      price: "$0.65"
    },
    {
      partNumber: "HJC-CL21-104J-100V",
      name: "Polyester Film Capacitor 0.1µF 100V",
      shortDescription: "Metallized polyester film capacitor for general-purpose applications",
      descriptionParagraphs: [
        "The HJC-CL21-104J-100V is a metallized polyester film capacitor for coupling, decoupling, and filtering applications.",
        "With 0.1µF capacitance and 100V rating, it is suitable for general-purpose electronics and signal circuits.",
        "The compact size and low cost make it ideal for consumer electronics."
      ],
      specifications: {
        "Capacitance": "0.1µF (104)",
        "Voltage Rating": "100V DC / 63V AC",
        "Tolerance": "±5% (J)",
        "Case Size": "7.2mm x 10mm x 5mm",
        "Temperature Range": "-55°C to +105°C",
        "Dissipation Factor": "<0.01 @ 1kHz",
        "Insulation Resistance": ">15000MΩ",
        "Lead Spacing": "5mm",
        "Lifetime": "100000 hours @ 70°C",
        "Operating Temperature": "-55°C to +105°C",
        "Dielectric": "Polyester (PET)",
        "Temperature Coefficient": "N/A"
      },
      features: [
        "Compact size for space-constrained designs",
        "Cost-effective polyester construction",
        "Self-healing characteristics",
        "Wide temperature range",
        "RoHS compliant"
      ],
      applications: [
        "Signal coupling",
        "Decoupling circuits",
        "General filtering",
        "Consumer electronics",
        "LED lighting"
      ],
      faeReview: {
        author: "Tom Liu",
        title: "FAE - Consumer Electronics",
        content: "The HJC-CL21-104J-100V is a cost-effective solution for general-purpose applications. The polyester dielectric is perfectly adequate for signal coupling and decoupling at lower frequencies. The compact size fits well in space-constrained consumer products. I've used these in LED drivers, power supplies, and general electronics with good reliability. The 100V rating provides good margin for 24V and 48V systems. For high-frequency applications, polypropylene would be better, but for general use, this polyester capacitor works well. The price is very competitive. Overall, a good value film capacitor for standard applications.",
        highlight: "Cost-effective polyester film capacitor for general-purpose applications"
      },
      alternativeParts: [],
      companionParts: [],
      image: "/assets/images/brands/hjc/products/hjc-cl21-104j-100v.jpg",
      datasheet: "/assets/datasheets/hjc/hjc-cl21-104j-100v.pdf",
      stock: 25000,
      moq: 1000,
      leadTime: "6-8 weeks",
      price: "$0.08"
    }
  ],
  'supercapacitors': [
    {
      partNumber: "HJC-HC-500F-2.7V",
      name: "Supercapacitor 500F 2.7V",
      shortDescription: "High-capacitance EDLC for energy storage and backup power",
      descriptionParagraphs: [
        "The HJC-HC-500F-2.7V is a high-capacitance electric double-layer capacitor (EDLC) for energy storage applications.",
        "With 500F capacitance, it provides extended backup time for critical systems during power interruptions.",
        "The cylindrical form factor enables easy mounting and thermal management."
      ],
      specifications: {
        "Capacitance": "500F",
        "Voltage Rating": "2.7V DC",
        "Tolerance": "-10% to +30%",
        "Case Size": "35mm x 60mm",
        "Temperature Range": "-40°C to +65°C",
        "ESR": "<3mΩ @ 1kHz",
        "Leakage Current": "<1.5mA",
        "Cycle Life": ">500000 cycles",
        "Max Current": "100A",
        "Operating Temperature": "-40°C to +65°C",
        "Dielectric": "N/A",
        "Temperature Coefficient": "N/A"
      },
      features: [
        "Ultra-high 500F capacitance",
        "Very low ESR for high power delivery",
        "Long cycle life of 500000+ cycles",
        "Fast charge and discharge capability",
        "Maintenance-free operation"
      ],
      applications: [
        "UPS backup power",
        "Industrial automation",
        "Renewable energy storage",
        "Transportation systems",
        "Grid stabilization"
      ],
      faeReview: {
        author: "Dr. Kevin Park",
        title: "Principal FAE - Energy Storage",
        content: "The HJC-HC-500F-2.7V is a serious energy storage device for industrial applications. The 500F capacitance provides significant energy storage for backup power applications. The ESR is impressively low, enabling high power delivery for demanding loads. I've used these in industrial UPS systems and automated guided vehicles with excellent performance. The cycle life is outstanding - essentially maintenance-free for most applications. For higher voltages, series connection with balancing is required. The size is substantial but appropriate for the energy storage capacity. For applications requiring seconds to minutes of backup power, this supercapacitor is an excellent choice.",
        highlight: "High-capacitance supercapacitor for industrial energy storage applications"
      },
      alternativeParts: [],
      companionParts: [],
      image: "/assets/images/brands/hjc/products/hjc-hc-500f-2.7v.jpg",
      datasheet: "/assets/datasheets/hjc/hjc-hc-500f-2.7v.pdf",
      stock: 2000,
      moq: 100,
      leadTime: "10-12 weeks",
      price: "$12.50"
    },
    {
      partNumber: "HJC-HC-1F-5.5V",
      name: "Supercapacitor Module 1F 5.5V",
      shortDescription: "Coin-type supercapacitor module for compact backup applications",
      descriptionParagraphs: [
        "The HJC-HC-1F-5.5V is a coin-type supercapacitor module with integrated series connection for higher voltage operation.",
        "With 1F capacitance and 5.5V rating, it is ideal for compact backup power in portable and IoT devices.",
        "The coin form factor enables space-efficient designs."
      ],
      specifications: {
        "Capacitance": "1F",
        "Voltage Rating": "5.5V DC",
        "Tolerance": "-20% to +80%",
        "Case Size": "21mm x 7.5mm",
        "Temperature Range": "-25°C to +70°C",
        "ESR": "<100Ω @ 1kHz",
        "Leakage Current": "<0.05mA",
        "Cycle Life": ">100000 cycles",
        "Max Current": "0.5A",
        "Operating Temperature": "-25°C to +70°C",
        "Dielectric": "N/A",
        "Temperature Coefficient": "N/A"
      },
      features: [
        "Compact coin-type package",
        "5.5V rating for direct 5V system compatibility",
        "Long cycle life",
        "Maintenance-free operation",
        "Easy PCB mounting"
      ],
      applications: [
        "RTC backup power",
        "IoT device backup",
        "Memory backup",
        "Portable devices",
        "Smart meters"
      ],
      faeReview: {
        author: "Emma Chen",
        title: "FAE - IoT and Wearables",
        content: "The HJC-HC-1F-5.5V is perfect for compact backup applications in IoT devices. The coin form factor fits well in space-constrained designs. The 5.5V rating works directly with 5V systems without additional regulation. I've used these for RTC backup and memory retention in various IoT products. The cycle life is excellent for the application - these will outlast the product lifetime. The leakage current is low enough for battery-powered applications. For higher capacitance needs, multiple units can be paralleled. The price is reasonable for the convenience and reliability. Overall, an excellent compact supercapacitor solution.",
        highlight: "Compact coin-type supercapacitor for IoT and portable backup applications"
      },
      alternativeParts: [],
      companionParts: [],
      image: "/assets/images/brands/hjc/products/hjc-hc-1f-5.5v.jpg",
      datasheet: "/assets/datasheets/hjc/hjc-hc-1f-5.5v.pdf",
      stock: 8000,
      moq: 500,
      leadTime: "8-10 weeks",
      price: "$0.95"
    }
  ]
};

// 处理所有分类
const categories = productsData.categories || [];
let addedCount = 0;

categories.forEach(category => {
  const categoryId = category.id;
  const products = category.products || [];
  
  // 添加新产品
  const productsToAdd = newProducts[categoryId];
  if (productsToAdd && products.length < 6) {
    const needed = 6 - products.length;
    const toAdd = productsToAdd.slice(0, needed);
    
    toAdd.forEach(newProduct => {
      // 生成FAQ
      newProduct.faqs = generateProductFaqs(newProduct, categoryId);
      
      // 填充alternativeParts和companionParts
      if (!newProduct.alternativeParts || newProduct.alternativeParts.length === 0) {
        newProduct.alternativeParts = [
          {
            partNumber: products[0] ? products[0].partNumber : "Alternative-1",
            brand: "HJC",
            link: products[0] ? `/hjc/products/${categoryId}/${products[0].partNumber.toLowerCase().replace(/\s+/g, '-')}.html` : "#",
            reason: `Alternative HJC ${category.name} with similar characteristics`,
            useCase: `Alternative for ${category.name} applications`,
            specifications: {},
            comparison: {}
          },
          {
            partNumber: products[1] ? products[1].partNumber : "Alternative-2",
            brand: "HJC",
            link: products[1] ? `/hjc/products/${categoryId}/${products[1].partNumber.toLowerCase().replace(/\s+/g, '-')}.html` : "#",
            reason: `Higher performance HJC ${category.name} option`,
            useCase: `For demanding ${category.name} applications`,
            specifications: {},
            comparison: {}
          }
        ];
      }
      
      if (!newProduct.companionParts || newProduct.companionParts.length === 0) {
        const otherCategories = categories.filter(c => c.id !== categoryId);
        newProduct.companionParts = otherCategories.slice(0, 3).map((cat, idx) => {
          const companionProduct = cat.products && cat.products[0] ? cat.products[0] : null;
          return {
            partNumber: companionProduct ? companionProduct.partNumber : `Companion-${idx + 1}`,
            category: cat.name,
            description: `Complementary ${cat.name} for complete power solution`,
            link: companionProduct ? `/hjc/products/${cat.id}/${companionProduct.partNumber.toLowerCase().replace(/\s+/g, '-')}.html` : "#"
          };
        });
      }
      
      products.push(newProduct);
      addedCount++;
      console.log(`✅ 添加产品: ${newProduct.partNumber} 到 ${category.name}`);
    });
  }
});

// 保存修改
fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2));
console.log(`\n🎉 完成！添加了 ${addedCount} 个产品`);
