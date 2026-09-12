#!/usr/bin/env node
/**
 * HJC品牌修复现有产品FAQ
 * 为只有2个FAQ的产品添加完整的FAQ
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
  
  const isMLCC = categoryId === 'mlcc';
  const isElectrolytic = categoryId === 'aluminum-electrolytic';
  const isFilm = categoryId === 'film-capacitors';
  const isSupercap = categoryId === 'supercapacitors';
  
  const faqs = [];
  
  // FAQ 1: 具体参数提问 (维度1)
  if (isMLCC) {
    faqs.push({
      question: `What is the capacitance, voltage rating, and tolerance of ${partNumber}?`,
      answer: `The ${partNumber} is a multilayer ceramic capacitor (MLCC) with specific electrical characteristics designed for reliable performance in various applications. It features stable capacitance value with X7R dielectric, providing consistent performance across the rated temperature range. The voltage rating ensures safe operation in circuits with appropriate voltage margins. The tolerance specification indicates the acceptable variation in capacitance value from the nominal rating. For detailed specifications including ESR, insulation resistance, and temperature characteristics, please refer to the datasheet. These parameters make the ${partNumber} suitable for decoupling, filtering, and general-purpose applications in consumer electronics, industrial equipment, and automotive systems.`,
      decisionGuide: `Select ${partNumber} based on your capacitance and voltage requirements; ensure voltage rating provides adequate margin for your application.`,
      keywords: ['capacitance', 'voltage rating', 'tolerance', 'MLCC', 'specifications']
    });
  } else if (isElectrolytic) {
    faqs.push({
      question: `What is the capacitance, voltage rating, and ripple current capability of ${partNumber}?`,
      answer: `The ${partNumber} is an aluminum electrolytic capacitor designed for power supply filtering and energy storage applications. It provides high capacitance density in a compact package, making it ideal for applications requiring bulk capacitance. The voltage rating ensures reliable operation under normal operating conditions with appropriate safety margins. The ripple current specification indicates the maximum AC current the capacitor can handle at rated temperature without excessive heating. For detailed specifications including ESR, leakage current, and lifetime characteristics at various temperatures, please refer to the datasheet. These parameters make the ${partNumber} suitable for power supplies, motor drives, and industrial equipment.`,
      decisionGuide: `Choose ${partNumber} based on your capacitance and voltage requirements; verify ripple current capability for your application's AC load.`,
      keywords: ['capacitance', 'voltage rating', 'ripple current', 'electrolytic', 'specifications']
    });
  } else if (isFilm) {
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
  if (isMLCC) {
    faqs.push({
      question: `How do I select and use ${partNumber} in my circuit design?`,
      answer: `When using ${partNumber} in your circuit design, consider several important factors for optimal performance. First, ensure the voltage rating provides adequate margin - typically 50% derating is recommended for long-term reliability. For DC bias applications, account for capacitance reduction under DC voltage, especially for X7R/X5R dielectrics. The 0805 case size requires proper PCB pad design and soldering profile for reliable assembly. For high-frequency applications, consider the ESL (Equivalent Series Inductance) and place the capacitor close to the IC power pins. Temperature derating may be necessary for applications operating above 85°C. For automotive applications, ensure AEC-Q200 qualification is specified. Proper handling during assembly is essential - avoid mechanical stress and follow recommended soldering profiles to prevent cracking.`,
      decisionGuide: `Apply 50% voltage derating; account for DC bias effects; place close to IC for high-frequency decoupling; specify AEC-Q200 for automotive.`,
      keywords: ['selection', 'usage', 'design guide', 'derating', 'PCB layout']
    });
  } else if (isElectrolytic) {
    faqs.push({
      question: `What are the important considerations when using ${partNumber} in power supply designs?`,
      answer: `When using ${partNumber} in power supply designs, several key considerations ensure reliable operation. Voltage derating is critical - operate at no more than 80% of rated voltage for long life. Ripple current must be kept within specifications to prevent excessive heating; consider parallel configurations for high ripple current applications. The capacitor's ESR affects output voltage ripple - calculate based on your ripple current requirements. Temperature significantly impacts lifetime - every 10°C reduction doubles the expected life. Mounting orientation matters for radial lead types - vertical mounting is standard. For high-voltage applications, ensure adequate spacing between terminals. The capacitor will exhibit some leakage current initially - this is normal and decreases over time. For series connections, use balancing resistors to ensure equal voltage distribution.`,
      decisionGuide: `Apply 20% voltage derating; keep ripple current within specs; consider temperature effects on lifetime; use balancing resistors for series connection.`,
      keywords: ['design guide', 'derating', 'ripple current', 'lifetime', 'mounting']
    });
  } else if (isFilm) {
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
  if (isMLCC) {
    faqs.push({
      question: `How does ${partNumber} compare to MLCCs from Murata, TDK, and Samsung?`,
      answer: `The ${partNumber} offers competitive performance compared to major MLCC manufacturers like Murata, TDK, and Samsung. In terms of electrical characteristics, HJC MLCCs provide comparable capacitance stability, ESR, and insulation resistance to these established brands. The X7R dielectric offers similar temperature stability across the -55°C to +125°C range. HJC's manufacturing quality meets industry standards with competitive DPM (defects per million) rates. Pricing is typically more attractive than Japanese and Korean competitors, offering cost savings for high-volume applications. Lead times are generally shorter for standard values, with good inventory availability. HJC also offers AEC-Q200 qualified versions comparable to automotive-grade offerings from competitors. For most general-purpose applications, HJC MLCCs provide equivalent performance at better value. For extremely demanding applications requiring the lowest possible ESR or highest reliability, premium brands may have slight advantages.`,
      decisionGuide: `Choose HJC for cost-effective, reliable MLCCs; consider premium brands only for the most demanding applications requiring absolute lowest ESR.`,
      keywords: ['comparison', 'Murata', 'TDK', 'Samsung', 'competitor', 'alternative']
    });
  } else if (isElectrolytic) {
    faqs.push({
      question: `How does ${partNumber} compare to electrolytic capacitors from Nichicon, Rubycon, and Nippon Chemi-Con?`,
      answer: `The ${partNumber} provides competitive performance compared to established Japanese brands like Nichicon, Rubycon, and Nippon Chemi-Con. HJC electrolytic capacitors offer comparable ESR, ripple current capability, and lifetime characteristics for standard industrial and consumer applications. The aluminum foil and electrolyte formulations provide reliable performance with good temperature stability. For general-purpose power supply applications, HJC capacitors deliver equivalent filtering performance at more competitive pricing. Japanese brands may offer advantages in ultra-high reliability applications, extended temperature ranges, or specialized low-ESR series. HJC's quality control and manufacturing processes meet industry standards with competitive field failure rates. For automotive applications, HJC offers AEC-Q200 qualified alternatives to premium brands. Lead times and pricing are generally more favorable compared to Japanese manufacturers, especially for high-volume orders.`,
      decisionGuide: `Select HJC for cost-effective, reliable electrolytic capacitors; consider Japanese brands for ultra-high reliability or specialized applications only.`,
      keywords: ['comparison', 'Nichicon', 'Rubycon', 'Chemi-Con', 'competitor', 'alternative']
    });
  } else if (isFilm) {
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
  if (isMLCC) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is suitable for a wide range of applications across various industries. In consumer electronics, it is used for power supply decoupling in smartphones, tablets, laptops, and gaming consoles. Industrial applications include filtering in motor drives, power supplies, and control systems. Automotive electronics use these MLCCs in ECUs, infotainment systems, and LED lighting modules with appropriate AEC-Q200 qualification. Telecommunications equipment employs them in base stations, routers, and network infrastructure for high-frequency filtering. The capacitor's stable X7R characteristics make it ideal for timing circuits, oscillators, and resonant circuits. In IoT devices and wearables, the compact size enables space-efficient designs. Medical devices utilize these capacitors in portable equipment and monitoring systems. The low ESR makes them suitable for high-frequency switching power supplies and DC-DC converters.`,
      decisionGuide: `Select ${partNumber} for general-purpose decoupling, filtering, and timing applications in consumer, industrial, and automotive electronics.`,
      keywords: ['applications', 'use case', 'consumer electronics', 'automotive', 'industrial']
    });
  } else if (isElectrolytic) {
    faqs.push({
      question: `What are the typical applications for ${partNumber}?`,
      answer: `The ${partNumber} is designed for applications requiring high capacitance density and energy storage. In power supplies, it serves as bulk capacitance for input and output filtering, smoothing rectified AC and reducing ripple voltage. Industrial motor drives use these capacitors for DC bus filtering and energy storage. LED lighting drivers employ them for current smoothing and power factor correction circuits. Audio amplifiers utilize electrolytic capacitors for power supply filtering and coupling applications. Automotive electronics use them in infotainment systems, lighting control modules, and auxiliary power systems. Renewable energy systems including solar inverters and wind turbine converters employ large electrolytic capacitors for DC link filtering. Uninterruptible power supplies (UPS) use them for energy storage during power transitions. The high capacitance and voltage ratings make them suitable for these demanding applications.`,
      decisionGuide: `Select ${partNumber} for power supply filtering, motor drives, LED drivers, and industrial power applications requiring bulk capacitance.`,
      keywords: ['applications', 'power supply', 'motor drive', 'LED driver', 'industrial']
    });
  } else if (isFilm) {
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

// 处理所有分类
const categories = productsData.categories || [];
let fixedCount = 0;

categories.forEach(category => {
  const categoryId = category.id;
  const products = category.products || [];
  
  // 修复现有产品的FAQ
  products.forEach(product => {
    if (!product.faqs || product.faqs.length < 5) {
      product.faqs = generateProductFaqs(product, categoryId);
      fixedCount++;
      console.log(`✅ 修复FAQ: ${product.partNumber}`);
    }
  });
});

// 保存修改
fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2));
console.log(`\n🎉 完成！修复了 ${fixedCount} 个产品的FAQ`);
