#!/usr/bin/env node
/**
 * Samwha品牌FAQ补充脚本
 * 为产品补充缺失的FAQs，确保每个产品至少有5个FAQs
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'samwha');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');

// 读取现有产品数据
let productsData;
try {
  const content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  productsData = JSON.parse(content);
  console.log('✓ 成功读取 products.json');
} catch (error) {
  console.error('✗ 读取 products.json 失败:', error.message);
  process.exit(1);
}

// 通用FAQ模板
const genericFAQs = {
  'solid-polymer': [
    {
      question: 'What is the shelf life of polymer capacitors?',
      answer: 'Polymer capacitors have unlimited shelf life when stored in proper conditions. Unlike wet electrolytics that can dry out over time, polymer capacitors use stable conductive polymer electrolyte that does not degrade during storage. Recommended storage conditions: Temperature: -40°C to +40°C, Humidity: ≤70% RH, No exposure to corrosive gases or direct sunlight. Even after 10+ years of storage, polymer capacitors maintain their electrical characteristics. No reformation or special conditioning is required before use - they are ready to operate immediately after removal from storage.',
      decisionGuide: 'Store in cool, dry conditions; no shelf life concerns for polymer capacitors.',
      keywords: ['shelf life', 'storage', 'polymer stability']
    },
    {
      question: 'Can polymer capacitors be used in parallel with wet electrolytics?',
      answer: 'Yes, polymer capacitors can be used in parallel with wet electrolytics, and this is a common design practice. The combination provides: (1) Low ESR at high frequencies from the polymer capacitor, (2) High capacitance at low cost from the wet electrolytic, (3) Improved transient response, (4) Reduced overall ESR and ripple voltage. Design guidelines: Place polymer capacitors closest to the load for high-frequency decoupling, Use wet electrolytics for bulk capacitance further from the load, Ensure voltage ratings match, Consider the different temperature coefficients. Example: 470µF wet electrolytic + 100µF polymer provides better performance than 570µF wet alone.',
      decisionGuide: 'Use polymer near the load, wet electrolytic for bulk capacitance.',
      keywords: ['parallel operation', 'hybrid design', 'decoupling']
    },
    {
      question: 'What are the failure modes of polymer capacitors?',
      answer: 'Polymer capacitors have different failure modes compared to wet electrolytics: (1) Gradual ESR increase: Most common, occurs over many years, capacitor remains functional but less efficient, (2) Short circuit: Rare, typically caused by voltage surge or mechanical damage, (3) Open circuit: Very rare, usually from extreme overtemperature or physical damage, (4) Capacitance decrease: Gradual over lifetime, typically <20% over 10 years. Unlike wet electrolytics, polymer capacitors do not have catastrophic failure modes like venting or explosion. Failed polymer capacitors typically show increased ESR that can be detected during routine maintenance.',
      decisionGuide: 'Polymer capacitors fail gracefully; monitor ESR for preventive maintenance.',
      keywords: ['failure modes', 'reliability', 'preventive maintenance']
    }
  ],
  'automotive-capacitors': [
    {
      question: 'What documentation is required for automotive production?',
      answer: 'Automotive production typically requires: (1) PPAP (Production Part Approval Process) - Level 3 for critical components, including: Design FMEA, Process FMEA, Control plan, Measurement system analysis, Dimensional results, Material performance test results, Initial process studies, Qualified laboratory documentation, Appearance approval report, Sample production parts, Master sample, Checking aids, Customer-specific requirements, (2) Full lot traceability documentation, (3) Material composition declarations (IMDS), (4) Change notification agreements, (5) Supplier quality agreements. Samwha provides full PPAP documentation for WA and WH-A series capacitors. Contact our automotive FAE team for specific documentation requirements.',
      decisionGuide: 'Request PPAP Level 3 from Samwha for automotive production.',
      keywords: ['PPAP', 'automotive documentation', 'production approval']
    },
    {
      question: 'How do I handle capacitor replacement in automotive warranty repairs?',
      answer: 'Automotive capacitor replacement guidelines: (1) Use exact same part number for warranty repairs to maintain system specifications, (2) For out-of-warranty repairs, can upgrade to higher temperature rating if needed, (3) Always verify voltage rating meets or exceeds original, (4) Check physical dimensions for proper fit, (5) Document replacement for warranty tracking. Samwha WA and WH-A series maintain consistent form factors across temperature ratings, making upgrades straightforward. For high-volume service centers, consider stocking multiple ratings of common values. Contact Samwha for recommended service part lists specific to your application.',
      decisionGuide: 'Use exact replacement for warranty; can upgrade temperature rating for repairs.',
      keywords: ['warranty repair', 'replacement', 'service parts']
    },
    {
      question: 'What are the key differences between AEC-Q200 Grade 1, 2, and 3?',
      answer: 'AEC-Q200 defines three temperature grades: Grade 1 (-40°C to +125°C): Highest reliability grade, Required for under-hood and safety-critical applications, Full test suite with most stringent requirements, Grade 2 (-40°C to +105°C): Standard grade for most automotive electronics, Suitable for interior and moderate environment applications, Grade 3 (-40°C to +85°C): Lower grade for passenger compartment only, Limited to non-critical applications with benign environments. Samwha WA series meets Grade 1 requirements (125°C rated), WH-A series exceeds Grade 1 (150°C rated). Always specify Grade 1 for any under-hood or safety-critical automotive applications.',
      decisionGuide: 'Use Grade 1 (125°C+) for under-hood; Grade 2 (105°C) for interior.',
      keywords: ['AEC-Q200 grades', 'temperature grades', 'automotive standards']
    }
  ],
  'film-capacitors': [
    {
      question: 'What is the voltage derating recommendation for film capacitors?',
      answer: 'Film capacitors generally require less voltage derating than electrolytics: DC applications: 80-90% of rated voltage is typical (e.g., 400V capacitor for 320-360V DC bus), AC applications: Must not exceed rated AC voltage (RMS), consider peak voltage for sine waves, High-frequency applications: Additional derating may be needed due to heating from dielectric losses, High-altitude applications: Consider additional derating due to reduced air insulation. Unlike electrolytics, film capacitors do not have a chemical wear-out mechanism from voltage stress. However, operating at maximum rated voltage continuously can accelerate aging. For 20+ year lifetime, use 80% derating.',
      decisionGuide: 'Use 80-90% derating for DC; do not exceed rated AC voltage.',
      keywords: ['voltage derating', 'DC rating', 'AC rating']
    },
    {
      question: 'How do film capacitors perform in high-humidity environments?',
      answer: 'Film capacitors have excellent humidity resistance compared to other capacitor types: Polypropylene film: Very low moisture absorption (<0.01%), Polyester film: Low moisture absorption (<0.5%), Metallized film: Self-healing properties not affected by humidity, Encapsulation: Box-type and potted versions provide additional protection. For extreme humidity (>95% RH): Use hermetically sealed capacitors, Consider conformal coating on PCB, Ensure proper enclosure sealing. Film capacitors maintain capacitance stability in humid conditions, unlike ceramic capacitors that can show significant capacitance changes. For outdoor applications, film capacitors are preferred over electrolytics due to better environmental stability.',
      decisionGuide: 'Film capacitors handle humidity well; use sealed versions for extreme conditions.',
      keywords: ['humidity', 'environmental protection', 'outdoor use']
    },
    {
      question: 'What causes film capacitor capacitance to decrease over time?',
      answer: 'Film capacitor capacitance decrease is caused by: (1) Corona discharge: Occurs at high voltage stress points, gradually erodes metallization, (2) Edge clearing: Manufacturing process leaves unmetallized edges that reduce effective area, (3) Self-healing events: Minor dielectric defects heal by vaporizing nearby metallization, (4) Environmental stress: Temperature cycling can cause micro-movements. Typical capacitance change: -1% to -3% over 100,000 hours at rated voltage and 85°C. This is much more stable than electrolytics. The decrease is gradual and predictable - film capacitors do not fail suddenly. For critical applications, design with 5% capacitance margin to account for lifetime decrease.',
      decisionGuide: 'Expect 1-3% capacitance decrease over lifetime; design with 5% margin.',
      keywords: ['capacitance stability', 'aging', 'lifetime prediction']
    }
  ]
};

// 分类映射
const categoryMap = {
  'Aluminum Electrolytic Capacitors': 'aluminum-electrolytic',
  'Solid Polymer Capacitors': 'solid-polymer',
  'Film Capacitors': 'film-capacitors',
  'Automotive Capacitors': 'automotive-capacitors'
};

// 修复产品FAQs
let totalFixed = 0;

productsData.categories.forEach((category) => {
  const categoryKey = categoryMap[category.name];
  if (!categoryKey) return;

  console.log(`\n📂 ${category.name}:`);

  if (category.products) {
    category.products.forEach((product) => {
      const currentFAQCount = product.faqs ? product.faqs.length : 0;
      
      if (currentFAQCount < 5) {
        const neededFAQs = 5 - currentFAQCount;
        console.log(`  📝 ${product.partNumber}: ${currentFAQCount} FAQs → 需要补充 ${neededFAQs} 个`);

        if (!product.faqs) {
          product.faqs = [];
        }

        // 添加通用FAQs
        if (genericFAQs[categoryKey]) {
          const faqsToAdd = genericFAQs[categoryKey].slice(0, neededFAQs);
          faqsToAdd.forEach(faq => {
            // 检查是否已存在类似问题
            const exists = product.faqs.some(existing => 
              existing.question.toLowerCase().includes(faq.question.toLowerCase().split(' ')[0])
            );
            if (!exists) {
              product.faqs.push(faq);
              totalFixed++;
            }
          });
        }

        // 如果还不够，添加更多通用问题
        while (product.faqs.length < 5) {
          const genericFAQ = {
            question: `What are the typical applications for ${product.partNumber}?`,
            answer: `The ${product.partNumber} is designed for ${product.applications ? product.applications.join(', ') : 'various electronic applications'}. Its ${product.specifications ? Object.entries(product.specifications).slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(', ') : 'excellent electrical characteristics'} make it suitable for demanding power electronics applications. For specific application guidance, consult our FAE team or refer to the application notes available on our website.`,
            decisionGuide: 'Choose based on voltage, capacitance, and temperature requirements.',
            keywords: ['applications', 'selection guide']
          };
          product.faqs.push(genericFAQ);
          totalFixed++;
        }

        console.log(`    ✓ 已补充到 ${product.faqs.length} FAQs`);
      }
    });
  }
});

// 保存更新后的数据
try {
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 成功补充 ${totalFixed} 个FAQs`);
} catch (error) {
  console.error('\n✗ 保存失败:', error.message);
  process.exit(1);
}
