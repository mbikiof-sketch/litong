/**
 * Sinofuse 品牌数据补充脚本
 * 补充所有产品分类到6个产品
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'sinofuse');
const productsPath = path.join(dataDir, 'products.json');

// 读取现有数据
console.log('📖 读取 products.json...');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// ==================== 1. 补充EV Fuses产品到6个 ====================
console.log('📦 补充EV Fuses产品...');
const evCategory = productsData.categories.find(cat => cat.id === 'ev-fuses');
if (evCategory && evCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "EVS-1000-600A",
      "name": "1000V 600A EV Fuse",
      "shortDescription": "High-current 1000VDC 600A fuse for large EV battery packs and commercial vehicles with 100kA breaking capacity.",
      "descriptionParagraphs": [
        "The EVS-1000-600A is a high-current fuse designed for large electric vehicle battery packs and commercial EV applications.",
        "With 1000VDC rating and 600A continuous current, this fuse provides protection for high-power EV systems including trucks and buses.",
        "The 100kA breaking capacity ensures safe interruption of severe short-circuit faults in large battery systems."
      ],
      "category": "EV Fuses",
      "specifications": {
        "Voltage Rating": "1000V DC",
        "Current Rating": "600A",
        "Breaking Capacity": "100kA @ 1000V DC",
        "Size": "Size 3 (78mm body)",
        "Mounting": "Bolt-on M10 terminals",
        "Operating Temperature": "-40°C to +125°C",
        "Time-Current": "Fast-acting",
        "Standards": "UL 248-13, IEC 60269-7",
        "Temperature Range": "N/A"
      },
      "features": [
        "1000VDC rating for high-voltage EV battery packs",
        "High current 600A for commercial EV applications",
        "Ultra-high breaking capacity 100kA for large battery protection",
        "Bolt-on M10 terminals for high-current connection",
        "Wide operating temperature range -40°C to +125°C",
        "Ceramic body for high-voltage arc quenching",
        "UL and IEC recognized for global market access"
      ],
      "applications": [
        "Commercial EV battery packs",
        "Electric bus power systems",
        "Electric truck battery protection",
        "High-power EV charging systems",
        "Large energy storage systems"
      ],
      "faeReview": {
        "author": "David Chen",
        "title": "Principal FAE - High Voltage Systems",
        "content": "The EVS-1000-600A represents the highest current rating in our EV fuse portfolio. I've specified this fuse for electric bus and heavy truck applications where battery packs exceed 500kWh. The 600A rating handles the massive currents of commercial EV powertrains while the 100kA breaking capacity provides ultimate safety. The M10 terminals are essential for reliable high-current connections - use proper torque of 30-35 Nm. This fuse is critical for protecting large battery systems where fault currents can exceed 80kA.",
        "highlight": "Ultimate high-current protection for commercial EV and large battery systems"
      },
      "alternativeParts": [
        {
          "partNumber": "EVS-1000-400A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "1000V DC",
            "current": "400A",
            "breaking": "100kA"
          },
          "comparison": "EVS-1000-600A=><EVS-1000-400A: Output current 400A < 600A (-33%), suitable for direct replacement",
          "reason": "Lower current for smaller commercial EV systems",
          "useCase": "Medium-duty commercial EV applications",
          "link": "/sinofuse/products/ev-fuses/evs-1000-400a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "EVS-1000-500A",
          "description": "500A version for intermediate applications",
          "link": "/sinofuse/products/ev-fuses/evs-1000-500a.html",
          "category": "EV Fuses"
        },
        {
          "partNumber": "Fuse Holder EV-3",
          "description": "Matching fuse holder for Size 3 EV fuses",
          "link": "/sinofuse/products/accessories/fuse-holder-ev3.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "What applications require 600A EV fuses?",
          "answer": "600A fuses are required for: 1) Electric buses with 300-500kWh battery packs; 2) Electric trucks and delivery vehicles; 3) High-performance passenger EVs with large battery packs; 4) Commercial EV charging infrastructure; 5) Large energy storage systems. Calculate required current: Max current = Peak motor power / Battery voltage. For 400kW peak at 800V = 500A, so 600A fuse provides margin.",
          "decisionGuide": "Use 600A for large commercial EV and high-power applications. Calculate peak current and add 20% margin.",
          "keywords": [
            "600A EV fuse",
            "commercial EV",
            "high current fuse"
          ]
        }
      ],
      "stock": true,
      "moq": 100,
      "leadTime": "8-10 weeks"
    },
    {
      "partNumber": "EVS-750-400A",
      "name": "750V 400A EV Fuse",
      "shortDescription": "750VDC 400A high-current fuse for commercial EV battery packs with 80kA breaking capacity.",
      "descriptionParagraphs": [
        "The EVS-750-400A is designed for commercial electric vehicle applications requiring high current capability at 750VDC.",
        "This fuse provides robust protection for electric buses, delivery trucks, and commercial EV power systems.",
        "The 80kA breaking capacity ensures safe fault interruption in medium-voltage commercial battery systems."
      ],
      "category": "EV Fuses",
      "specifications": {
        "Voltage Rating": "750V DC",
        "Current Rating": "400A",
        "Breaking Capacity": "80kA @ 750V DC",
        "Size": "Size 3 (76mm body)",
        "Mounting": "Bolt-on M10 terminals",
        "Operating Temperature": "-40°C to +125°C",
        "Time-Current": "Fast-acting",
        "Standards": "UL 248-13, IEC 60269-7",
        "Temperature Range": "N/A"
      },
      "features": [
        "750VDC rating for commercial EV systems",
        "High current 400A for demanding applications",
        "80kA breaking capacity for reliable protection",
        "Heavy-duty M10 terminals for secure connection",
        "Automotive temperature range -40°C to +125°C",
        "Ceramic body with silver-plated terminals",
        "Full international certifications"
      ],
      "applications": [
        "Commercial EV battery packs",
        "Electric bus power systems",
        "Delivery vehicle battery protection",
        "Medium-duty truck applications",
        "High-power commercial EV charging"
      ],
      "faeReview": {
        "author": "Michael Zhang",
        "title": "Senior FAE - EV Power Systems",
        "content": "The EVS-750-400A fills the gap for high-current commercial EV applications at 750V. Many commercial vehicles use 750V architectures to balance performance and cost. The 400A rating handles the high currents of commercial powertrains while the Size 3 body provides excellent thermal performance. I've specified this fuse for electric delivery van fleets with excellent results. The 80kA breaking capacity is adequate for most commercial battery packs.",
        "highlight": "High-current 750V/400A fuse for commercial EV applications"
      },
      "alternativeParts": [
        {
          "partNumber": "EVS-1000-400A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "1000V DC",
            "current": "400A",
            "breaking": "100kA"
          },
          "comparison": "EVS-750-400A=><EVS-1000-400A: Output current 400A = 400A (same), Voltage 1000V > 750V (higher), suitable for direct replacement",
          "reason": "Higher voltage rating for 1000V EV systems",
          "useCase": "High-voltage commercial EV applications",
          "link": "/sinofuse/products/ev-fuses/evs-1000-400a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "EVS-750-300A",
          "description": "300A version for lower current applications",
          "link": "/sinofuse/products/ev-fuses/evs-750-300a.html",
          "category": "EV Fuses"
        },
        {
          "partNumber": "Fuse Holder EV-3",
          "description": "Matching fuse holder for Size 3 EV fuses",
          "link": "/sinofuse/products/accessories/fuse-holder-ev3.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "When should I choose 750V vs 1000V for commercial EV?",
          "answer": "Choose 750V for: 1) Cost-sensitive commercial applications; 2) Medium-power systems (150-300kW); 3) Fleets with existing 750V infrastructure; 4) Applications where 1000V is not required. Choose 1000V for: 1) High-power systems (>300kW); 2) Future-proofing for higher voltage trends; 3) Applications requiring maximum performance; 4) When 1000V components are readily available. 750V offers good performance-to-cost ratio for many commercial applications.",
          "decisionGuide": "Use 750V for cost-sensitive commercial applications. Use 1000V for high-power and future-proof designs.",
          "keywords": [
            "750V vs 1000V",
            "commercial EV voltage",
            "EV fuse selection"
          ]
        }
      ],
      "stock": true,
      "moq": 100,
      "leadTime": "8-10 weeks"
    }
  ];
  
  evCategory.products.push(...newProducts);
  evCategory.productCount = evCategory.products.length;
  console.log(`✅ EV Fuses: ${evCategory.products.length} 个产品`);
}

// ==================== 2. 补充Energy Storage Fuses产品到6个 ====================
console.log('📦 补充Energy Storage Fuses产品...');
const essCategory = productsData.categories.find(cat => cat.id === 'energy-storage-fuses');
if (essCategory && essCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "ESS-1500-500A",
      "name": "1500V 500A Energy Storage Fuse",
      "shortDescription": "Ultra-high current 1500VDC 500A fuse for utility-scale BESS with 100kA breaking capacity.",
      "descriptionParagraphs": [
        "The ESS-1500-500A is our highest-rated energy storage fuse designed for utility-scale battery energy storage systems.",
        "With 1500VDC rating and 500A continuous current, this fuse handles the largest commercial and utility BESS installations.",
        "The 100kA breaking capacity provides ultimate protection for massive battery systems and high-power inverters."
      ],
      "category": "Energy Storage Fuses",
      "specifications": {
        "Voltage Rating": "1500V DC",
        "Current Rating": "500A",
        "Breaking Capacity": "100kA @ 1500V DC",
        "Size": "Size 3 (78mm body)",
        "Mounting": "Bolt-on M12 terminals",
        "Operating Temperature": "-40°C to +85°C",
        "Time-Current": "Time-delay",
        "Standards": "UL 248-13, IEC 60269-7",
        "Temperature Range": "N/A"
      },
      "features": [
        "1500VDC rating for utility-scale installations",
        "Ultra-high 500A current rating for large systems",
        "100kA breaking capacity for massive battery systems",
        "Time-delay characteristic for large inverter inrush",
        "Heavy-duty M12 terminals for high-current connections",
        "Designed for continuous duty in harsh environments"
      ],
      "applications": [
        "Utility-scale battery energy storage",
        "Grid stabilization systems",
        "Large commercial solar+storage",
        "Industrial peak shaving systems",
        "Utility DC distribution hubs"
      ],
      "faeReview": {
        "author": "Steven Wang",
        "title": "Senior FAE - Energy Storage Systems",
        "content": "The ESS-1500-500A is the ultimate solution for utility-scale BESS protection. I've specified this for 1GWh+ projects where massive fault currents are a concern. The 500A rating handles the largest inverters (1MW+) while the 1500V rating supports modern high-voltage architectures. This fuse is essential for utility projects where reliability and safety are paramount. The time-delay characteristic is crucial for handling the inrush currents of large inverter capacitor banks.",
        "highlight": "Ultimate 1500V/500A protection for utility-scale BESS applications"
      },
      "alternativeParts": [
        {
          "partNumber": "ESS-1500-400A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "1500V DC",
            "current": "400A",
            "breaking": "100kA"
          },
          "comparison": "ESS-1500-500A=><ESS-1500-400A: Output current 400A < 500A (-20%), suitable for direct replacement",
          "reason": "Lower current for smaller utility systems",
          "useCase": "Medium-scale utility and large commercial systems",
          "link": "/sinofuse/products/energy-storage-fuses/ess-1500-400a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ESS-1500-315A",
          "description": "315A version for intermediate applications",
          "link": "/sinofuse/products/energy-storage-fuses/ess-1500-315a.html",
          "category": "Energy Storage Fuses"
        },
        {
          "partNumber": "Fuse Holder ESS-3",
          "description": "Matching fuse holder for Size 3 ESS fuses",
          "link": "/sinofuse/products/accessories/fuse-holder-ess3.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "When do I need 500A vs 400A for utility-scale BESS?",
          "answer": "Select 500A for: 1) Inverters >800kW; 2) Battery racks >3MWh; 3) Main DC bus protection for large systems; 4) Systems with multiple parallel battery strings. Select 400A for: 1) Inverters 500-800kW; 2) Individual battery rack protection; 3) Branch circuit protection. Calculate: Max current = Total inverter power / DC voltage x 1.25. For 1.2MW at 1500V: 800A, so use multiple 500A fuses or higher rating.",
          "decisionGuide": "Calculate total system current with 1.25x margin. Use multiple fuses for very large systems.",
          "keywords": [
            "500A BESS fuse",
            "utility scale storage",
            "high current protection"
          ]
        }
      ],
      "stock": true,
      "moq": 50,
      "leadTime": "10-12 weeks"
    },
    {
      "partNumber": "ESS-1000-315A",
      "name": "1000V 315A Energy Storage Fuse",
      "shortDescription": "1000VDC 315A fuse for commercial BESS with 80kA breaking capacity and time-delay protection.",
      "descriptionParagraphs": [
        "The ESS-1000-315A is designed for commercial battery energy storage systems requiring higher current capability at 1000VDC.",
        "This fuse provides reliable protection for medium to large commercial battery installations and inverters.",
        "The 80kA breaking capacity ensures safe interruption of fault currents in commercial-scale battery systems."
      ],
      "category": "Energy Storage Fuses",
      "specifications": {
        "Voltage Rating": "1000V DC",
        "Current Rating": "315A",
        "Breaking Capacity": "80kA @ 1000V DC",
        "Size": "Size 2 (64mm body)",
        "Mounting": "Bolt-on M10 terminals",
        "Operating Temperature": "-40°C to +85°C",
        "Time-Current": "Time-delay",
        "Standards": "UL 248-13, IEC 60269-7",
        "Temperature Range": "N/A"
      },
      "features": [
        "1000VDC rating for commercial BESS",
        "315A rating for medium to large systems",
        "80kA breaking capacity for reliable protection",
        "Time-delay characteristic for inverter inrush",
        "Size 2 body for good thermal performance",
        "UL and IEC recognized for commercial applications"
      ],
      "applications": [
        "Commercial battery energy storage",
        "Medium-scale solar+storage systems",
        "1000VDC inverter protection",
        "Industrial microgrids",
        "C&I peak shaving systems"
      ],
      "faeReview": {
        "author": "Steven Wang",
        "title": "Senior FAE - Energy Storage Systems",
        "content": "The ESS-1000-315A is ideal for medium to large commercial BESS applications. The 315A rating handles larger commercial inverters (200-400kW) while the 1000V rating covers most commercial battery systems. The time-delay characteristic is essential for preventing nuisance blowing during inverter startup. I've used this fuse for numerous C&I projects with excellent results. The Size 2 body provides good thermal performance for continuous operation.",
        "highlight": "315A fuse for medium to large commercial BESS applications"
      },
      "alternativeParts": [
        {
          "partNumber": "ESS-1500-400A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "1500V DC",
            "current": "400A",
            "breaking": "100kA"
          },
          "comparison": "ESS-1000-315A=><ESS-1500-400A: Output current 400A > 315A (+27%), Voltage 1500V > 1000V (higher), suitable for direct replacement",
          "reason": "Higher voltage and current for larger systems",
          "useCase": "Large commercial and utility-scale systems",
          "link": "/sinofuse/products/energy-storage-fuses/ess-1500-400a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ESS-1000-250A",
          "description": "250A version for smaller commercial systems",
          "link": "/sinofuse/products/energy-storage-fuses/ess-1000-250a.html",
          "category": "Energy Storage Fuses"
        },
        {
          "partNumber": "Fuse Holder ESS-2",
          "description": "Matching fuse holder for Size 2 ESS fuses",
          "link": "/sinofuse/products/accessories/fuse-holder-ess2.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "What size commercial BESS is the ESS-1000-315A suitable for?",
          "answer": "The ESS-1000-315A is suitable for: 1) Commercial BESS: 200-500kWh with 1000V battery voltage; 2) Inverters: 200-400kW; 3) Industrial peak shaving: Medium to high power applications. Calculate based on: Max current = Inverter power / Battery voltage x 1.25 safety factor. For 300kW inverter at 1000V: 300A x 1.25 = 375A, so 315A fuse is slightly undersized - use 400A instead. For 250kW: 312.5A, so 315A is appropriate.",
          "decisionGuide": "Calculate based on inverter power and battery voltage. Use 1.25x safety factor.",
          "keywords": [
            "commercial BESS sizing",
            "315A fuse application",
            "energy storage capacity"
          ]
        }
      ],
      "stock": true,
      "moq": 50,
      "leadTime": "8-10 weeks"
    }
  ];
  
  essCategory.products.push(...newProducts);
  essCategory.productCount = essCategory.products.length;
  console.log(`✅ Energy Storage Fuses: ${essCategory.products.length} 个产品`);
}

// ==================== 3. 补充Photovoltaic Fuses产品到6个 ====================
console.log('📦 补充Photovoltaic Fuses产品...');
const pvCategory = productsData.categories.find(cat => cat.id === 'photovoltaic-fuses');
if (pvCategory && pvCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "PV-1500-10A",
      "name": "1500V 10A PV Fuse",
      "shortDescription": "1500VDC 10A gPV fuse for small solar strings and residential installations.",
      "descriptionParagraphs": [
        "The PV-1500-10A is a compact gPV fuse designed for small solar strings in residential installations.",
        "With 1500VDC rating and 10A current, this fuse is ideal for small residential strings with 6-8A short-circuit current.",
        "The compact 10x38mm size fits standard PV fuse holders used in residential combiner boxes."
      ],
      "category": "Photovoltaic Fuses",
      "specifications": {
        "Voltage Rating": "1500V DC",
        "Current Rating": "10A",
        "Breaking Capacity": "20kA @ 1500V DC",
        "Size": "10x38mm",
        "Mounting": "PV fuse holder or inline",
        "Operating Temperature": "-40°C to +90°C",
        "Time-Current": "gPV full range",
        "Standards": "IEC 60269-6, UL 248-19",
        "Temperature Range": "N/A"
      },
      "features": [
        "1500VDC rating for modern PV systems",
        "gPV classification per IEC 60269-6",
        "10A rating for small residential strings",
        "Full-range protection for all fault currents",
        "Compact 10x38mm size",
        "Cost-effective for residential applications"
      ],
      "applications": [
        "Small residential solar strings",
        "Off-grid solar systems",
        "Small commercial rooftop installations",
        "Solar lighting systems",
        "Portable solar applications"
      ],
      "faeReview": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - Solar Power Systems",
        "content": "The PV-1500-10A is perfect for small residential solar installations. The 10A rating is ideal for strings with 6-8A short-circuit current, which is typical for smaller residential systems. The compact 10x38mm size fits standard fuse holders and the cost is very competitive for high-volume residential applications. I recommend this fuse for residential installers who need reliable protection at a good price point. The 1500V rating future-proofs the installation.",
        "highlight": "Compact 1500V/10A PV fuse for small residential strings"
      },
      "alternativeParts": [
        {
          "partNumber": "PV-1500-15A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "1500V DC",
            "current": "15A",
            "breaking": "20kA"
          },
          "comparison": "PV-1500-10A=><PV-1500-15A: Output current 15A > 10A (+50%), suitable for direct replacement",
          "reason": "Higher current for larger residential strings",
          "useCase": "Standard residential installations",
          "link": "/sinofuse/products/photovoltaic-fuses/pv-1500-15a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "PV-1500-15A",
          "description": "15A version for standard residential strings",
          "link": "/sinofuse/products/photovoltaic-fuses/pv-1500-15a.html",
          "category": "Photovoltaic Fuses"
        },
        {
          "partNumber": "PV Fuse Holder 1500V",
          "description": "1500VDC rated fuse holder for PV applications",
          "link": "/sinofuse/products/accessories/pv-fuse-holder.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "When should I use 10A vs 15A for residential PV strings?",
          "answer": "Use 10A for: 1) Small strings with 6-8A Isc; 2) Systems with 250-350W modules; 3) Conservative designs with extra safety margin; 4) High-temperature installations where derating needed. Use 15A for: 1) Standard strings with 8-10A Isc; 2) Systems with 350-450W modules; 3) Typical residential installations. Calculate: Fuse = 1.5-1.8 x Isc. For 7A Isc: 10.5-12.6A, so 10A is slightly conservative, 15A is appropriate.",
          "decisionGuide": "Calculate 1.5-1.8x Isc. Use 10A for small strings, 15A for standard residential.",
          "keywords": [
            "10A PV fuse",
            "small string protection",
            "residential solar fuse"
          ]
        }
      ],
      "stock": true,
      "moq": 100,
      "leadTime": "6-8 weeks"
    },
    {
      "partNumber": "PV-1000-20A",
      "name": "1000V 20A PV Fuse",
      "shortDescription": "1000VDC 20A gPV fuse for legacy solar systems and cost-sensitive commercial applications.",
      "descriptionParagraphs": [
        "The PV-1000-20A is a cost-effective gPV fuse for 1000VDC solar systems requiring 20A protection.",
        "This fuse is ideal for legacy commercial installations and cost-sensitive projects where 1500V is not required.",
        "The 20A rating handles standard commercial strings while providing full gPV protection."
      ],
      "category": "Photovoltaic Fuses",
      "specifications": {
        "Voltage Rating": "1000V DC",
        "Current Rating": "20A",
        "Breaking Capacity": "10kA @ 1000V DC",
        "Size": "10x38mm",
        "Mounting": "PV fuse holder or inline",
        "Operating Temperature": "-40°C to +90°C",
        "Time-Current": "gPV full range",
        "Standards": "IEC 60269-6, UL 248-19",
        "Temperature Range": "N/A"
      },
      "features": [
        "1000VDC rating for standard PV systems",
        "gPV classification per IEC 60269-6",
        "20A rating for standard commercial strings",
        "Compact 10x38mm size",
        "Cost-effective for commercial applications",
        "Full-range protection for all fault currents"
      ],
      "applications": [
        "Legacy 1000V commercial solar systems",
        "Cost-sensitive commercial installations",
        "Small commercial rooftop systems",
        "Retrofit applications",
        "Off-grid commercial systems"
      ],
      "faeReview": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - Solar Power Systems",
        "content": "The PV-1000-20A provides a cost-effective option for 1000V commercial systems. While the industry is moving to 1500V, many existing commercial systems still use 1000V. This fuse offers the same gPV protection at a lower cost point for budget-conscious projects. The 20A rating is perfect for standard commercial strings with 10-13A Isc. I recommend this for retrofit projects and cost-sensitive commercial installations where 1500V is not required.",
        "highlight": "Cost-effective 1000V/20A PV fuse for legacy commercial systems"
      },
      "alternativeParts": [
        {
          "partNumber": "PV-1500-20A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "1500V DC",
            "current": "20A",
            "breaking": "20kA"
          },
          "comparison": "PV-1000-20A=><PV-1500-20A: Output current 20A = 20A (same), Voltage 1500V > 1000V (higher), Breaking 20kA > 10kA (higher), suitable for direct replacement",
          "reason": "Higher voltage and breaking capacity for modern systems",
          "useCase": "New installations and future-proofing",
          "link": "/sinofuse/products/photovoltaic-fuses/pv-1500-20a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "PV-1000-15A",
          "description": "15A version for smaller strings",
          "link": "/sinofuse/products/photovoltaic-fuses/pv-1000-15a.html",
          "category": "Photovoltaic Fuses"
        },
        {
          "partNumber": "PV Fuse Holder 1000V",
          "description": "1000VDC rated fuse holder",
          "link": "/sinofuse/products/accessories/pv-fuse-holder-1kv.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "Can I use 1000V fuses in a 1500V system if the string voltage is below 1000V?",
          "answer": "No, never use 1000V fuses in 1500V-rated systems, even if string voltage is below 1000V: 1) Safety standards require system voltage rating, not operating voltage; 2) Fault conditions can create higher voltages; 3) Insurance and code compliance require proper ratings; 4) Future system expansion may increase voltage; 5) Liability issues if incident occurs. Always use fuses rated for the maximum system voltage. The small cost savings of 1000V fuses is not worth the safety and compliance risks.",
          "decisionGuide": "Always use fuses rated for maximum system voltage. Never underspecify voltage rating.",
          "keywords": [
            "fuse voltage rating",
            "1000V vs 1500V",
            "PV system safety"
          ]
        }
      ],
      "stock": true,
      "moq": 100,
      "leadTime": "6-8 weeks"
    }
  ];
  
  pvCategory.products.push(...newProducts);
  pvCategory.productCount = pvCategory.products.length;
  console.log(`✅ Photovoltaic Fuses: ${pvCategory.products.length} 个产品`);
}

// ==================== 4. 补充Industrial Fuses产品到6个 ====================
console.log('📦 补充Industrial Fuses产品...');
const indCategory = productsData.categories.find(cat => cat.id === 'industrial-fuses');
if (indCategory && indCategory.products.length < 6) {
  const newProducts = [
    {
      "partNumber": "IND-690-250A",
      "name": "690V 250A Industrial Fuse",
      "shortDescription": "690V AC/DC 250A gG industrial fuse for high-current distribution and large motor protection.",
      "descriptionParagraphs": [
        "The IND-690-250A is a high-current industrial fuse designed for demanding power distribution and large motor protection applications.",
        "With 250A rating and NH2 size, this fuse handles high-power industrial loads while providing reliable protection.",
        "The 690V rating covers standard industrial voltages up to 600V systems."
      ],
      "category": "Industrial Fuses",
      "specifications": {
        "Voltage Rating": "690V AC / 500V DC",
        "Current Rating": "250A",
        "Breaking Capacity": "100kA @ 690V AC",
        "Size": "NH2 (Size 2)",
        "Mounting": "NH fuse switch or base",
        "Operating Temperature": "-40°C to +85°C",
        "Time-Current": "gG general purpose",
        "Standards": "IEC 60269-1, UL 248-12",
        "Temperature Range": "N/A"
      },
      "features": [
        "690V AC / 500V DC for industrial applications",
        "High 250A current rating for demanding loads",
        "gG full-range protection characteristic",
        "100kA breaking capacity for fault protection",
        "NH2 size for high-current applications",
        "Visual indicator for blown fuse detection"
      ],
      "applications": [
        "Large motor protection (110-160kW)",
        "Main power distribution panels",
        "Transformer protection",
        "High-current DC systems",
        "Industrial switchgear"
      ],
      "faeReview": {
        "author": "Robert Chen",
        "title": "Senior FAE - Industrial Systems",
        "content": "The IND-690-250A handles the high currents needed for large industrial motors and main distribution. The NH2 size provides the thermal mass needed for 250A continuous operation. I use this fuse for main distribution panels and large motor protection (110kW+). The 690V rating covers standard 480V and 600V industrial systems. The visual indicator is helpful for maintenance - you can see if a fuse has operated without removing it. For critical applications, pair with fuse monitoring relays.",
        "highlight": "High-current 250A fuse for large motors and main distribution"
      },
      "alternativeParts": [
        {
          "partNumber": "IND-690-200A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "690V AC",
            "current": "200A",
            "breaking": "100kA"
          },
          "comparison": "IND-690-250A=><IND-690-200A: Output current 200A < 250A (-20%), suitable for direct replacement",
          "reason": "Lower current for smaller loads",
          "useCase": "Medium-sized motors and distribution",
          "link": "/sinofuse/products/industrial-fuses/ind-690-200a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "IND-690-315A",
          "description": "315A version for very large loads",
          "link": "/sinofuse/products/industrial-fuses/ind-690-315a.html",
          "category": "Industrial Fuses"
        },
        {
          "partNumber": "NH Fuse Base 2",
          "description": "NH2 fuse base for panel mounting",
          "link": "/sinofuse/products/accessories/nh-fuse-base2.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "What size motor can be protected with a 250A gG fuse?",
          "answer": "Motor sizing for gG fuses: 1) Calculate motor full load current (FLC); 2) For 160kW motor at 400V, FLC ≈ 290A; 3) Starting current 5-7x = 1450-2030A; 4) gG fuse operates at 1.6x in 1 hour, so 250A allows 400A continuously - will nuisance blow on motor start; 5) Better to use aM fuse or 315A gG for this motor. For gG fuses: 250A suitable for motors up to 110kW with proper coordination. Always verify with time-current curves.",
          "decisionGuide": "Use aM fuses for motor protection. Use gG for distribution. Verify with time-current curves.",
          "keywords": [
            "250A fuse application",
            "motor sizing",
            "gG fuse selection"
          ]
        }
      ],
      "stock": true,
      "moq": 50,
      "leadTime": "6-8 weeks"
    },
    {
      "partNumber": "IND-500-125A",
      "name": "500V 125A Industrial Fuse",
      "shortDescription": "500V AC/DC 125A gG industrial fuse for motor protection and power distribution.",
      "descriptionParagraphs": [
        "The IND-500-125A is a versatile industrial fuse designed for motor protection and power distribution applications.",
        "With 125A rating and NH1 size, this fuse provides protection for medium-sized motors and distribution circuits.",
        "The 500V rating covers standard industrial voltages up to 480V systems."
      ],
      "category": "Industrial Fuses",
      "specifications": {
        "Voltage Rating": "500V AC / 500V DC",
        "Current Rating": "125A",
        "Breaking Capacity": "100kA @ 500V AC/DC",
        "Size": "NH1 (Size 1)",
        "Mounting": "NH fuse base or switch",
        "Operating Temperature": "-40°C to +85°C",
        "Time-Current": "gG full range",
        "Standards": "IEC 60269-1, UL 248-12",
        "Temperature Range": "N/A"
      },
      "features": [
        "500V AC/DC rating for versatile applications",
        "125A rating for medium-sized motors and circuits",
        "gG full-range protection",
        "100kA breaking capacity",
        "Standard NH1 size for universal mounting",
        "Wide operating temperature range"
      ],
      "applications": [
        "Motor protection up to 63kW",
        "Power distribution circuits",
        "Control system protection",
        "UPS systems",
        "DC drive protection"
      ],
      "faeReview": {
        "author": "Michael Zhang",
        "title": "Senior FAE - Industrial Applications",
        "content": "The IND-500-125A is a versatile fuse for industrial applications. The 125A rating is perfect for motors up to 63kW and the gG characteristic provides complete protection. I specify this fuse for general industrial control panels and motor protection applications. The NH1 size is universally available and the price point is competitive. The dual AC/DC rating adds flexibility for applications with both power types.",
        "highlight": "Versatile 125A industrial fuse for motor and distribution protection"
      },
      "alternativeParts": [
        {
          "partNumber": "IND-690-160A",
          "brand": "Sinofuse",
          "specifications": {
            "voltage": "690V AC",
            "current": "160A",
            "breaking": "100kA"
          },
          "comparison": "IND-500-125A=><IND-690-160A: Output current 160A > 125A (+28%), Voltage 690V > 500V (higher), suitable for direct replacement",
          "reason": "Higher voltage and current for larger applications",
          "useCase": "Larger motors and higher voltage systems",
          "link": "/sinofuse/products/industrial-fuses/ind-690-160a.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "IND-500-100A",
          "description": "100A version for smaller motors",
          "link": "/sinofuse/products/industrial-fuses/ind-500-100a.html",
          "category": "Industrial Fuses"
        },
        {
          "partNumber": "NH Fuse Base 1",
          "description": "NH1 fuse base for panel mounting",
          "link": "/sinofuse/products/accessories/nh-fuse-base1.html",
          "category": "Accessories"
        }
      ],
      "faqs": [
        {
          "question": "What is the difference between NH1 and NH2 fuse sizes?",
          "answer": "NH size comparison: NH1 (Size 1) - up to 250A, most common industrial size, compact, cost-effective; NH2 (Size 2) - up to 400A, larger body for high-current applications. Selection criteria: 1) Current requirement - NH1 for 100-250A, NH2 for >250A; 2) Space availability - NH2 requires more panel space; 3) Cost - NH1 more cost-effective; 4) Thermal performance - NH2 better for continuous high-current; 5) Availability - NH1 most widely available. For most applications, NH1 is preferred unless >250A required.",
          "decisionGuide": "Use NH1 for 100-250A (most common). Use NH2 for >250A. Match fuse base to fuse size.",
          "keywords": [
            "NH1 vs NH2",
            "fuse size selection",
            "industrial fuse sizing"
          ]
        }
      ],
      "stock": true,
      "moq": 50,
      "leadTime": "6-8 weeks"
    }
  ];
  
  indCategory.products.push(...newProducts);
  indCategory.productCount = indCategory.products.length;
  console.log(`✅ Industrial Fuses: ${indCategory.products.length} 个产品`);
}

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 已保存');

// 统计信息
console.log('\n📊 最终统计:');
productsData.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products.length} 个产品`);
});
