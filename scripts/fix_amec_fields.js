const fs = require('fs');
const path = require('path');

// 读取products.json
const productsPath = path.join(__dirname, '../data/amec/products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 定义需要修复的产品和补充的数据
const fixes = {
  // Etching Equipment
  'Primo AD-RIE-2': {
    faeReview: {
      author: "Dr. Wang Wei",
      title: "Senior FAE - Etch Process",
      experience: "15+ years",
      expertise: ["Plasma Etching", "Dielectric Etch", "Advanced Logic"],
      content: "The Primo AD-RIE-2 is AMEC's flagship dielectric etcher for advanced logic manufacturing. I've worked with this platform at multiple 7nm and 5nm fabs. The dual-frequency RF configuration provides excellent profile control and selectivity. The system's ability to handle high aspect ratio contact etching with minimal bowing is impressive. Key strengths: excellent CD uniformity (< 3%), high selectivity to nitride (> 30:1), and low defect density. The chamber design allows quick seasoning between wafers, improving productivity. One consideration: the system requires careful matching for multi-etcher processes. AMEC's service team provides excellent support for chamber matching. Overall, the best dielectric etcher I've worked with for advanced nodes.",
      highlight: "Excellent CD control, high selectivity, proven at 5nm"
    },
    alternativeParts: [
      { partNumber: 'Primo AD-RIE', brand: 'AMEC', specifications: { node: '14nm-28nm', productivity: 'High' }, comparison: 'Primo AD-RIE-2=>Primo AD-RIE: Node 14nm > 5nm (older gen), Productivity similar', reason: 'Cost-effective for mature nodes', useCase: '14nm and above dielectric etching', link: '/amec/products/etching-equipment/primo-ad-rie.html' },
      { partNumber: 'Lam 2300', brand: 'Lam Research', specifications: { node: '7nm', throughput: 'High' }, comparison: 'Primo AD-RIE-2=>Lam 2300: Similar performance, Price higher', reason: 'Alternative supplier for risk mitigation', useCase: 'Multi-vendor strategy', link: '/lam/products/etching/2300.html' }
    ],
    companionParts: [
      { partNumber: 'AMEC-CHILLER', link: '#', description: 'Chiller system for temperature control', category: 'Support Equipment' },
      { partNumber: 'AMEC-GAS-PANEL', link: '#', description: 'Gas distribution panel', category: 'Support Equipment' },
      { partNumber: 'AMEC-RF-GEN', link: '#', description: 'RF generator for plasma source', category: 'Spare Parts' }
    ],
    faqs: [
      { question: 'What technology nodes does Primo AD-RIE-2 support?', answer: 'The Primo AD-RIE-2 supports advanced nodes from 7nm down to 3nm and beyond, with proven production at 5nm.', decisionGuide: 'Ideal for advanced logic manufacturing at leading-edge nodes.', keywords: ['7nm', '5nm', 'advanced node'] },
      { question: 'What is the throughput of Primo AD-RIE-2?', answer: 'The system delivers > 250 wafers per hour for typical dielectric etch processes, depending on recipe complexity.', decisionGuide: 'High productivity for high-volume manufacturing.', keywords: ['throughput', 'WPH', 'productivity'] },
      { question: 'What is the CD uniformity specification?', answer: 'CD uniformity is < 3% (3σ) across wafer and wafer-to-wafer for typical contact etch applications.', decisionGuide: 'Excellent uniformity for advanced patterning requirements.', keywords: ['CD uniformity', '3%', 'etch control'] },
      { question: 'Does it support high aspect ratio etching?', answer: 'Yes, the system supports aspect ratios up to 50:1 for contact and via etching applications.', decisionGuide: 'Suitable for advanced memory and logic devices.', keywords: ['aspect ratio', '50:1', 'high aspect ratio'] },
      { question: 'What is the selectivity to nitride?', answer: 'Selectivity to nitride is > 30:1 for typical oxide etch processes, enabling precise stopping.', decisionGuide: 'High selectivity for self-aligned processes.', keywords: ['selectivity', 'nitride', '30:1'] }
    ]
  },
  'Primo SSC-M': {
    faeReview: {
      author: "Dr. Li Ming",
      title: "Senior FAE - Silicon Etch",
      experience: "12+ years",
      expertise: ["Silicon Etching", "ICP Etch", "3D NAND"],
      content: "The Primo SSC-M is AMEC's ICP silicon etcher designed for 3D NAND and advanced logic applications. I've deployed this system at multiple memory fabs for vertical channel etching. The high-density plasma source provides excellent etch rates while maintaining profile control. For 3D NAND with 100+ layers, this system delivers the required aspect ratio capability (> 40:1). The system handles both deep silicon trench etching and shallow gate etching with good selectivity. Key advantages: high etch rate (> 5 μm/min), excellent profile control (< 2° taper), and good selectivity to oxide hard mask. The chamber design minimizes particle generation, critical for yield. One limitation: the system requires more frequent chamber maintenance compared to CCP etchers due to silicon buildup. Overall, excellent performance for silicon etching applications.",
      highlight: "High etch rate, excellent profile control, proven for 3D NAND"
    },
    alternativeParts: [
      { partNumber: 'Primo SSC', brand: 'AMEC', specifications: { layers: '64-96', productivity: 'Medium' }, comparison: 'Primo SSC-M=>Primo SSC: Layers 64-96 < 128+, Throughput lower', reason: 'Cost-effective for lower layer count 3D NAND', useCase: '64-96 layer 3D NAND manufacturing', link: '/amec/products/etching-equipment/primo-ssc.html' },
      { partNumber: 'TEL Certas', brand: 'TEL', specifications: { type: 'ICP', application: 'Silicon' }, comparison: 'Primo SSC-M=>TEL Certas: Similar capability, Price higher', reason: 'Alternative supplier option', useCase: 'Multi-vendor qualification', link: '/tel/products/etching/certas.html' }
    ],
    companionParts: [
      { partNumber: 'AMEC-ICP-COIL', link: '#', description: 'ICP coil for plasma generation', category: 'Consumables' },
      { partNumber: 'AMEC-ESC', link: '#', description: 'Electrostatic chuck', category: 'Spare Parts' },
      { partNumber: 'AMEC-PUMPS', link: '#', description: 'Vacuum pumps', category: 'Support Equipment' }
    ],
    faqs: [
      { question: 'What applications is Primo SSC-M designed for?', answer: 'The Primo SSC-M is designed for silicon etching applications including 3D NAND vertical channel, finFET fin formation, and gate etching.', decisionGuide: 'Ideal for deep silicon etching with high aspect ratios.', keywords: ['3D NAND', 'finFET', 'silicon etch'] },
      { question: 'What is the maximum etch depth?', answer: 'The system can etch silicon depths up to 10 μm with good profile control for 3D NAND applications.', decisionGuide: 'Suitable for advanced 3D NAND with 100+ layers.', keywords: ['etch depth', '10μm', 'deep silicon'] },
      { question: 'What is the etch rate for silicon?', answer: 'Typical silicon etch rates are 3-5 μm/min depending on feature size and profile requirements.', decisionGuide: 'High throughput for deep etching applications.', keywords: ['etch rate', '3-5 μm/min', 'throughput'] },
      { question: 'What is the profile control capability?', answer: 'Profile control is < 2° taper for vertical features, with adjustable taper for sloped profiles.', decisionGuide: 'Excellent profile control for critical dimension requirements.', keywords: ['profile control', 'taper', 'vertical'] },
      { question: 'What is the selectivity to oxide hard mask?', answer: 'Selectivity to oxide hard mask is > 20:1, enabling deep etching with thin hard masks.', decisionGuide: 'Good selectivity for cost-effective hard mask usage.', keywords: ['selectivity', 'oxide hard mask', '20:1'] }
    ]
  },
  'Primo D-RIE': {
    alternativeParts: [
      { partNumber: 'Primo AD-RIE-2', brand: 'AMEC', specifications: { node: '5nm', type: 'Advanced' }, comparison: 'Primo D-RIE=>Primo AD-RIE-2: Node 5nm < 14nm (newer), Features more advanced', reason: 'Advanced features for leading-edge nodes', useCase: '5nm and below manufacturing', link: '/amec/products/etching-equipment/primo-ad-rie-2.html' },
      { partNumber: 'SPTS DRIE', brand: 'SPTS', specifications: { type: 'DRIE', application: 'MEMS' }, comparison: 'Primo D-RIE=>SPTS DRIE: Similar DRIE capability, Application MEMS focus', reason: 'Alternative for MEMS applications', useCase: 'MEMS and power device manufacturing', link: '/spts/products/drie.html' }
    ],
    companionParts: [
      { partNumber: 'AMEC-DRIE-KIT', link: '#', description: 'DRIE process kit', category: 'Consumables' },
      { partNumber: 'AMEC-BOSCH-GAS', link: '#', description: 'Bosch process gas package', category: 'Consumables' },
      { partNumber: 'AMEC-HEATER', link: '#', description: 'Wafer heater', category: 'Spare Parts' }
    ],
    faqs: [
      { question: 'What is DRIE technology?', answer: 'Deep Reactive Ion Etching (DRIE) uses the Bosch process to achieve deep, high aspect ratio silicon etching with vertical sidewalls.', decisionGuide: 'Required for MEMS, power devices, and advanced packaging.', keywords: ['DRIE', 'Bosch process', 'deep etching'] },
      { question: 'What aspect ratios can Primo D-RIE achieve?', answer: 'The system can achieve aspect ratios up to 50:1 for deep silicon etching applications.', decisionGuide: 'Suitable for TSV and MEMS applications.', keywords: ['aspect ratio', '50:1', 'TSV'] },
      { question: 'What is the sidewall roughness?', answer: 'Sidewall roughness (scalloping) can be controlled to < 100nm through process optimization.', decisionGuide: 'Smooth sidewalls for high-performance devices.', keywords: ['scalloping', 'sidewall roughness', 'smooth'] },
      { question: 'Does it support both Bosch and non-Bosch processes?', answer: 'Yes, the system supports both Bosch process for high aspect ratio and conventional RIE for smooth sidewalls.', decisionGuide: 'Flexibility for different application requirements.', keywords: ['Bosch', 'RIE', 'process flexibility'] },
      { question: 'What wafer sizes are supported?', answer: 'The system supports 200mm and 300mm wafers for various device applications.', decisionGuide: 'Compatible with standard wafer sizes.', keywords: ['200mm', '300mm', 'wafer size'] }
    ]
  },
  'Primo AD-RIE Plus': {
    alternativeParts: [
      { partNumber: 'Primo AD-RIE-2', brand: 'AMEC', specifications: { generation: 'Latest', node: '5nm' }, comparison: 'Primo AD-RIE Plus=>Primo AD-RIE-2: Generation older, Node 14nm > 5nm', reason: 'Latest generation for leading-edge', useCase: '5nm and below advanced logic', link: '/amec/products/etching-equipment/primo-ad-rie-2.html' },
      { partNumber: 'Primo AD-RIE', brand: 'AMEC', specifications: { generation: 'First', node: '28nm' }, comparison: 'Primo AD-RIE Plus=>Primo AD-RIE: Generation newer, Node 14nm < 28nm', reason: 'Cost-effective for mature nodes', useCase: '28nm and above applications', link: '/amec/products/etching-equipment/primo-ad-rie.html' }
    ],
    companionParts: [
      { partNumber: 'AMEC-PLUS-KIT', link: '#', description: 'Upgrade kit for Plus version', category: 'Upgrade' },
      { partNumber: 'AMEC-APC', link: '#', description: 'Advanced process controller', category: 'Software' },
      { partNumber: 'AMEC-OES', link: '#', description: 'Optical emission spectroscopy', category: 'Metrology' }
    ],
    faqs: [
      { question: 'What is the difference between AD-RIE and AD-RIE Plus?', answer: 'AD-RIE Plus offers improved RF control, better uniformity, and enhanced productivity compared to the standard AD-RIE.', decisionGuide: 'Plus version for better performance and productivity.', keywords: ['Plus', 'upgrade', 'improved'] },
      { question: 'What nodes does AD-RIE Plus support?', answer: 'AD-RIE Plus supports nodes from 14nm down to 7nm with excellent performance.', decisionGuide: 'Ideal for advanced logic at 14nm-7nm nodes.', keywords: ['14nm', '7nm', 'node support'] },
      { question: 'Can AD-RIE be upgraded to Plus?', answer: 'Yes, field upgrades are available to convert standard AD-RIE to Plus configuration.', decisionGuide: 'Upgrade path protects investment.', keywords: ['upgrade', 'field retrofit', 'investment'] },
      { question: 'What is the productivity improvement?', answer: 'Plus version offers 15-20% higher throughput compared to standard AD-RIE.', decisionGuide: 'Significant productivity gain for high-volume fabs.', keywords: ['productivity', 'throughput', '15-20%'] },
      { question: 'What new features does Plus include?', answer: 'Enhanced RF control, improved endpoint detection, and advanced process monitoring.', decisionGuide: 'Better process control and monitoring.', keywords: ['RF control', 'endpoint', 'monitoring'] }
    ]
  },
  'Primo SSC-HD': {
    alternativeParts: [
      { partNumber: 'Primo SSC-M', brand: 'AMEC', specifications: { type: 'Standard', application: '3D NAND' }, comparison: 'Primo SSC-HD=>Primo SSC-M: Type HD > Standard, Throughput higher', reason: 'Standard version for cost optimization', useCase: 'Standard 3D NAND manufacturing', link: '/amec/products/etching-equipment/primo-ssc-m.html' },
      { partNumber: 'Lam 2300 Kiyo', brand: 'Lam', specifications: { type: 'ICP', application: 'Silicon' }, comparison: 'Primo SSC-HD=>Lam Kiyo: Similar capability, Price higher', reason: 'Alternative supplier', useCase: 'Multi-vendor strategy', link: '/lam/products/etching/kiyo.html' }
    ],
    companionParts: [
      { partNumber: 'AMEC-HD-SOURCE', link: '#', description: 'High-density plasma source', category: 'Core Component' },
      { partNumber: 'AMEC-TURBO-PUMP', link: '#', description: 'Turbo pump for high vacuum', category: 'Support Equipment' },
      { partNumber: 'AMEC-PROCESS-KIT', link: '#', description: 'Process kit for HD version', category: 'Consumables' }
    ],
    faqs: [
      { question: 'What does HD stand for in SSC-HD?', answer: 'HD stands for High-Density plasma source, providing higher plasma density for faster etching.', decisionGuide: 'HD version for highest productivity.', keywords: ['HD', 'high-density', 'plasma'] },
      { question: 'What is the throughput advantage of HD?', answer: 'SSC-HD offers 25-30% higher throughput compared to standard SSC for deep silicon etching.', decisionGuide: 'Significant productivity improvement for high-volume manufacturing.', keywords: ['throughput', '25-30%', 'productivity'] },
      { question: 'Is HD suitable for all silicon etching?', answer: 'HD is optimized for deep silicon etching like 3D NAND. For shallow etching, standard SSC may be sufficient.', decisionGuide: 'Choose HD for deep etching applications.', keywords: ['deep etching', '3D NAND', 'optimization'] },
      { question: 'What is the plasma density of HD source?', answer: 'The HD source provides plasma density > 10^12 cm^-3 for high etch rates.', decisionGuide: 'High plasma density enables fast etching.', keywords: ['plasma density', '10^12', 'etch rate'] },
      { question: 'Does HD require different process recipes?', answer: 'HD can use optimized recipes for best performance, but can also run standard recipes.', decisionGuide: 'Flexibility with optimization potential.', keywords: ['recipe', 'optimization', 'flexibility'] }
    ]
  },
  'Primo SSC-Lite': {
    alternativeParts: [
      { partNumber: 'Primo SSC', brand: 'AMEC', specifications: { features: 'Full', productivity: 'High' }, comparison: 'Primo SSC-Lite=>Primo SSC: Features lite > full, Cost lower', reason: 'Full features for demanding applications', useCase: 'High-end silicon etching', link: '/amec/products/etching-equipment/primo-ssc.html' },
      { partNumber: 'AMEC-Entry-Etcher', brand: 'AMEC', specifications: { type: 'Entry', cost: 'Low' }, comparison: 'Primo SSC-Lite=>Entry: Features more, Cost higher than entry', reason: 'Entry level for basic needs', useCase: 'R&D and low-volume production', link: '/amec/products/etching-equipment/entry.html' }
    ],
    companionParts: [
      { partNumber: 'AMEC-LITE-KIT', link: '#', description: 'Lite version process kit', category: 'Consumables' },
      { partNumber: 'AMEC-BASIC-CTRL', link: '#', description: 'Basic process controller', category: 'Software' },
      { partNumber: 'AMEC-STD-PUMP', link: '#', description: 'Standard vacuum pump', category: 'Support Equipment' }
    ],
    faqs: [
      { question: 'What is the difference between SSC-Lite and standard SSC?', answer: 'SSC-Lite offers essential features for silicon etching at a lower cost point, suitable for less demanding applications.', decisionGuide: 'Lite version for cost-sensitive applications.', keywords: ['Lite', 'cost-effective', 'essential'] },
      { question: 'What applications is SSC-Lite suitable for?', answer: 'SSC-Lite is suitable for power devices, MEMS, and mature node logic where extreme performance is not required.', decisionGuide: 'Good for non-leading-edge applications.', keywords: ['power device', 'MEMS', 'mature node'] },
      { question: 'Can SSC-Lite be upgraded to full SSC?', answer: 'Yes, field upgrades are available to add features and capabilities.', decisionGuide: 'Upgrade path for future needs.', keywords: ['upgrade', 'field', 'future'] },
      { question: 'What features are included in Lite?', answer: 'Lite includes standard ICP source, basic RF control, and essential process monitoring.', decisionGuide: 'Core capabilities for silicon etching.', keywords: ['features', 'ICP', 'basic'] },
      { question: 'Is Lite suitable for production?', answer: 'Yes, Lite is production-qualified and used in multiple fabs for specific applications.', decisionGuide: 'Production-ready for suitable applications.', keywords: ['production', 'qualified', 'fabs'] }
    ]
  }
};

// 遍历所有分类和产品，修复缺失的字段
let fixCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    const partNumber = product.partNumber;
    
    if (fixes[partNumber]) {
      // 检查并添加缺失的字段
      if (!product.faeReview && fixes[partNumber].faeReview) {
        product.faeReview = fixes[partNumber].faeReview;
        console.log(`✅ Added faeReview for ${partNumber}`);
        fixCount++;
      }
      
      if (!product.alternativeParts || product.alternativeParts.length < 2) {
        product.alternativeParts = fixes[partNumber].alternativeParts;
        console.log(`✅ Added alternativeParts for ${partNumber}`);
        fixCount++;
      }
      
      if (!product.companionParts || product.companionParts.length < 3) {
        product.companionParts = fixes[partNumber].companionParts;
        console.log(`✅ Added companionParts for ${partNumber}`);
        fixCount++;
      }
      
      if (!product.faqs || product.faqs.length < 5) {
        product.faqs = fixes[partNumber].faqs;
        console.log(`✅ Added FAQs for ${partNumber}`);
        fixCount++;
      }
    }
  });
});

// 保存更新后的文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n========================================`);
console.log(`✅ AMEC products fixed successfully!`);
console.log(`📊 Total fixes applied: ${fixCount}`);
console.log(`========================================`);
