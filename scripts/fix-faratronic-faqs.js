/**
 * 修复Faratronic产品FAQ数量不足的问题
 * 为第5、6个产品添加更多FAQ
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'faratronic', 'products.json');

// 读取产品数据
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复Faratronic产品FAQ数量...\n');

// 额外的FAQ模板
const additionalFaqs = {
  emi: [
    {
      "question": "What are the recommended soldering conditions for this capacitor?",
      "answer": "The recommended soldering conditions are: Wave soldering - Preheat: 100-120°C for 60-90 seconds, Solder bath: 260±5°C for 5 seconds maximum. Hand soldering - Soldering iron tip temperature: 350±10°C, Contact time: 3 seconds maximum. Always ensure the capacitor body is at least 5mm away from the solder joint to prevent thermal damage. After soldering, allow the capacitor to cool naturally without forced cooling to avoid thermal shock. For reflow soldering, please consult the datasheet as not all film capacitors are suitable for reflow processes.",
      "decisionGuide": "For high-volume production, wave soldering is recommended. For prototyping or repair, hand soldering is acceptable with proper temperature control.",
      "keywords": ["soldering", "assembly", "manufacturing"]
    },
    {
      "question": "How should this capacitor be stored before use?",
      "answer": "Store capacitors in their original packaging at 20±5°C and 65±5% relative humidity. Avoid exposure to direct sunlight, corrosive gases, or high humidity environments. The recommended shelf life is 24 months from the date of manufacture when stored under proper conditions. Before use, inspect the capacitor for any visible damage or corrosion. If stored beyond 24 months, perform an insulation resistance test before assembly to ensure the capacitor meets specifications. For long-term storage, consider using moisture barrier bags with desiccant.",
      "decisionGuide": "For storage beyond 24 months, test insulation resistance before use. Always follow first-in-first-out inventory management for electronic components.",
      "keywords": ["storage", "shelf life", "handling"]
    },
    {
      "question": "What is the self-healing mechanism in metallized film capacitors?",
      "answer": "Self-healing is a key feature of metallized film capacitors. When a dielectric defect or weak point occurs, the thin metal electrode (typically 10-50nm thick) around the defect vaporizes due to localized heating, effectively isolating the fault. This process occurs in microseconds and clears the short circuit, allowing the capacitor to continue normal operation. The capacitance loss per healing event is minimal (typically nanofarads), so the overall capacitance remains stable over the capacitor's lifetime. This self-healing mechanism provides inherent reliability and prevents catastrophic failures common in other capacitor types. The number of possible self-healing events is virtually unlimited under normal operating conditions.",
      "decisionGuide": "Self-healing makes metallized film capacitors ideal for high-reliability applications. For critical applications, specify capacitors with proven self-healing performance.",
      "keywords": ["self-healing", "reliability", "failure mode"]
    }
  ],
  automotive: [
    {
      "question": "What is the difference between AEC-Q200 Grade 1 and Grade 3?",
      "answer": "AEC-Q200 defines different grades based on temperature range: Grade 1 (-40°C to +125°C) is for under-hood applications with the highest temperature requirements, Grade 2 (-40°C to +105°C) is for passenger compartment applications, Grade 3 (-40°C to +85°C) is for general automotive applications. The C3A3K156K9AHA01 meets Grade 2 requirements with its 105°C rating, suitable for most EV powertrain applications. For applications requiring Grade 1, Faratronic offers the C4V(Z) series with 125°C rating. Each grade has specific test requirements for temperature cycling, humidity resistance, and mechanical stress that reflect the expected operating environment.",
      "decisionGuide": "Choose Grade 1 for under-hood applications, Grade 2 for EV powertrain, Grade 3 for passenger compartment. Verify the grade matches your application's worst-case temperature.",
      "keywords": ["AEC-Q200 grades", "automotive temperature", "reliability"]
    },
    {
      "question": "How does voltage derating affect capacitor lifetime in automotive applications?",
      "answer": "Voltage derating significantly improves capacitor lifetime in automotive applications. Operating at 80% of rated voltage typically doubles the lifetime compared to full-rated voltage operation. For the C3A3K156K9AHA01 (900V rated), operating at 720V (80% derating) can extend the 100,000-hour lifetime to over 200,000 hours. This is particularly important in EV applications where the capacitor must last the vehicle's entire service life (typically 15 years). The relationship follows a power law: Lifetime ∝ (Vrated/Vapplied)^n, where n is typically 7-9 for film capacitors. Combined with temperature derating, proper voltage derating can achieve exceptional reliability in automotive applications.",
      "decisionGuide": "For maximum reliability in EV applications, operate DC-Link capacitors at 80% of rated voltage. This provides both safety margin and extended lifetime.",
      "keywords": ["voltage derating", "lifetime", "reliability"]
    },
    {
      "question": "What are the key considerations for capacitor placement in EV onboard chargers?",
      "answer": "Proper capacitor placement in EV onboard chargers is critical for performance and reliability: 1) Place the DC-Link capacitor as close as possible to the power module (IGBT/SiC) to minimize stray inductance and voltage overshoots. 2) Ensure adequate clearance for thermal management - allow at least 5mm from other heat-generating components. 3) Orient the capacitor so that the terminals are easily accessible for inspection and maintenance. 4) Consider vibration resistance - use appropriate mounting techniques and conformal coating if required. 5) Ensure the PCB copper area connected to the capacitor terminals is sufficient to handle the ripple current without excessive heating. 6) For parallel configurations, maintain symmetry in layout to ensure equal current sharing.",
      "decisionGuide": "Minimize loop inductance by placing capacitors close to power devices. Ensure adequate thermal management and vibration resistance for automotive environments.",
      "keywords": ["PCB layout", "thermal management", "EV design"]
    }
  ],
  power: [
    {
      "question": "How do I calculate the required DC-Link capacitance for my inverter application?",
      "answer": "The required DC-Link capacitance depends on several factors: 1) Allowable DC bus voltage ripple (typically 5-10% of DC voltage), 2) Load current and power factor, 3) Switching frequency, and 4) DC source impedance. The basic formula is: C = Iload / (2 × π × fsw × ΔV), where Iload is the load current, fsw is the switching frequency, and ΔV is the allowable voltage ripple. For a 30kW inverter at 400V DC with 5% ripple (20V) and 10kHz switching: C ≈ 75A / (2 × π × 10kHz × 20V) ≈ 60μF. In practice, select a capacitor 20-30% larger to account for capacitance tolerance, temperature effects, and aging. For three-phase inverters, also consider the ripple current distribution across the DC-Link capacitors.",
      "decisionGuide": "Calculate based on allowable voltage ripple, then add 20-30% margin. For high-power applications, consider using multiple capacitors in parallel for better ripple current handling.",
      "keywords": ["DC-Link sizing", "capacitance calculation", "inverter design"]
    },
    {
      "question": "What is the impact of ESR on capacitor performance in high-frequency applications?",
      "answer": "ESR (Equivalent Series Resistance) significantly impacts capacitor performance in high-frequency applications: 1) Power loss: Ploss = Irms² × ESR, which generates heat and reduces efficiency. 2) Voltage ripple: Higher ESR increases the resistive component of voltage ripple. 3) Thermal management: ESR losses must be dissipated, affecting capacitor temperature and lifetime. For the C3P3K306K11AHA01 with ESR <3mΩ at 10kHz, the power loss at 15A ripple current is <0.675W. At 100kHz, ESR typically increases due to skin effect and dielectric losses. When selecting capacitors for high-frequency applications, consider both the nominal ESR and its frequency characteristics. Parallel connection of multiple capacitors reduces effective ESR and improves ripple current capability.",
      "decisionGuide": "For high-frequency applications, select capacitors with low ESR and consider parallel configurations to minimize losses and heating.",
      "keywords": ["ESR", "power loss", "high frequency"]
    },
    {
      "question": "How should I protect DC-Link capacitors from voltage transients?",
      "answer": "DC-Link capacitors should be protected from voltage transients through several methods: 1) Proper snubber circuits - Use RC snubbers across switching devices to limit dv/dt and voltage overshoots. 2) DC-Link capacitor placement - Place capacitors as close as possible to power devices to minimize stray inductance. 3) Pre-charge circuits - Use pre-charge resistors or circuits to limit inrush current during startup. 4) Overvoltage protection - Implement active clamping or TVS diodes to limit transient voltages. 5) Proper grounding - Ensure low-impedance ground connections to minimize common-mode noise. 6) Shielding - For high-power applications, consider electromagnetic shielding to reduce induced voltages. The C3P series capacitors have high dv/dt ratings (>1000V/μs), but proper circuit design is still essential for reliable operation.",
      "decisionGuide": "Implement snubber circuits and proper layout to minimize transients. Use pre-charge circuits to limit inrush current during startup.",
      "keywords": ["transient protection", "snubber circuits", "reliability"]
    }
  ]
};

// 修复EMI Suppression Capacitors分类的第5、6个产品
const emiCategory = productsData.categories.find(c => c.id === 'emi-suppression-capacitors');
if (emiCategory && emiCategory.products.length >= 6) {
  console.log(`📦 修复 EMI Suppression Capacitors 分类的FAQ...`);
  
  // 第5个产品添加更多FAQ
  if (emiCategory.products[4].faqs && emiCategory.products[4].faqs.length < 5) {
    emiCategory.products[4].faqs.push(...additionalFaqs.emi.slice(0, 5 - emiCategory.products[4].faqs.length));
    console.log(`   ✅ 第5个产品 FAQ数量: ${emiCategory.products[4].faqs.length}`);
  }
  
  // 第6个产品添加更多FAQ
  if (emiCategory.products[5].faqs && emiCategory.products[5].faqs.length < 5) {
    emiCategory.products[5].faqs.push(...additionalFaqs.emi.slice(0, 5 - emiCategory.products[5].faqs.length));
    console.log(`   ✅ 第6个产品 FAQ数量: ${emiCategory.products[5].faqs.length}`);
  }
}

// 修复Automotive Capacitors分类的第5、6个产品
const autoCategory = productsData.categories.find(c => c.id === 'automotive-capacitors');
if (autoCategory && autoCategory.products.length >= 6) {
  console.log(`\n📦 修复 Automotive Capacitors 分类的FAQ...`);
  
  // 第5个产品添加更多FAQ
  if (autoCategory.products[4].faqs && autoCategory.products[4].faqs.length < 5) {
    autoCategory.products[4].faqs.push(...additionalFaqs.automotive.slice(0, 5 - autoCategory.products[4].faqs.length));
    console.log(`   ✅ 第5个产品 FAQ数量: ${autoCategory.products[4].faqs.length}`);
  }
  
  // 第6个产品添加更多FAQ
  if (autoCategory.products[5].faqs && autoCategory.products[5].faqs.length < 5) {
    autoCategory.products[5].faqs.push(...additionalFaqs.automotive.slice(0, 5 - autoCategory.products[5].faqs.length));
    console.log(`   ✅ 第6个产品 FAQ数量: ${autoCategory.products[5].faqs.length}`);
  }
}

// 修复Power Capacitors分类的第5、6个产品
const powerCategory = productsData.categories.find(c => c.id === 'power-capacitors');
if (powerCategory && powerCategory.products.length >= 6) {
  console.log(`\n📦 修复 Power Capacitors 分类的FAQ...`);
  
  // 第5个产品添加更多FAQ
  if (powerCategory.products[4].faqs && powerCategory.products[4].faqs.length < 5) {
    powerCategory.products[4].faqs.push(...additionalFaqs.power.slice(0, 5 - powerCategory.products[4].faqs.length));
    console.log(`   ✅ 第5个产品 FAQ数量: ${powerCategory.products[4].faqs.length}`);
  }
  
  // 第6个产品添加更多FAQ
  if (powerCategory.products[5].faqs && powerCategory.products[5].faqs.length < 5) {
    powerCategory.products[5].faqs.push(...additionalFaqs.power.slice(0, 5 - powerCategory.products[5].faqs.length));
    console.log(`   ✅ 第6个产品 FAQ数量: ${powerCategory.products[5].faqs.length}`);
  }
}

// 保存修改后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('\n✅ Faratronic产品FAQ修复完成！');
