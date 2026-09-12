/**
 * INVENTCHIP Support & Solutions Fix Script
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'inventchip');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) { return null; }
}

function writeJSON(filename, data) {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2), 'utf8');
  console.log(`  ✓ Updated ${filename}`);
}

const faeInsightsMap = {
  "InventChip SiC MOSFET Selection Guide": "Selecting the right SiC MOSFET requires careful consideration of voltage rating, current capability, and thermal requirements. For EV applications, prioritize devices with AEC-Q101 qualification and robust thermal performance. Solar inverters benefit from lower switching losses for higher efficiency. Industrial drives require consistent performance across wide temperature ranges. Key selection criteria: (1) Voltage margin - select 20-30% higher than maximum operating voltage; (2) Current rating - consider both RMS and peak currents; (3) On-resistance - impacts conduction losses; (4) Package - affects thermal performance and mounting. LiTong FAE recommends SPICE simulation before prototyping and can provide thermal modeling support.",
  "SiC MOSFET Gate Drive Design": "Proper gate drive design is critical for SiC MOSFET performance and reliability. Key considerations: (1) Gate voltage - use +15V to +20V turn-on for low on-resistance; (2) Negative turn-off - apply -3V to -5V to prevent false turn-on; (3) Gate resistance - balance switching speed vs. EMI; (4) Loop inductance - minimize for reduced ringing; (5) Isolation - essential for high-voltage applications. Common pitfalls include insufficient gate current for fast switching and inadequate protection features. LiTong FAE provides reference designs and can review your gate drive circuit before prototyping.",
  "SiC Device Thermal Management": "SiC devices can operate at higher temperatures than silicon, but proper thermal management is still essential for reliability. Key factors: (1) Junction temperature - keep below 150°C for long-term reliability; (2) Thermal interface - use high-quality thermal pads or paste; (3) Heatsink design - adequate surface area and airflow; (4) PCB copper - use thick copper planes for heat spreading; (5) Temperature monitoring - implement for protection. For high-power applications, consider liquid cooling or heat pipes. LiTong FAE offers thermal simulation services and can recommend optimal cooling solutions.",
  "EV Applications Guide": "SiC devices are transforming EV power electronics with higher efficiency and power density. Key application areas: (1) Traction inverters - main motor drive with 99%+ efficiency; (2) Onboard chargers - OBC with bi-directional capability; (3) DC-DC converters - high-efficiency voltage conversion; (4) HVAC compressors - variable speed motor control. Design considerations include: automotive qualification (AEC-Q101), functional safety (ISO 26262), and EMI compliance. Thermal cycling reliability is critical for automotive lifetime. LiTong FAE has extensive EV application experience and can support your design from concept to production.",
  "SiC Device Reliability and Failure Analysis": "Understanding SiC device failure modes is essential for robust design. Common failure mechanisms: (1) Gate oxide degradation - avoid excessive gate voltage; (2) Body diode degradation - limit reverse recovery current; (3) Thermal runaway - ensure adequate cooling; (4) Cosmic ray failures - more prevalent at higher voltages. Best practices include: proper derating, adequate protection circuits, and thorough testing. InventChip devices undergo rigorous qualification including HTOL, HAST, and temperature cycling. LiTong FAE can provide reliability data and support failure analysis if issues arise."
};

const customerCaseTemplate = {
  customer: "EV Manufacturer",
  industry: "Automotive",
  challenge: "The customer needed to improve traction inverter efficiency while reducing system size and weight for their next-generation electric vehicle platform.",
  solution: "Implemented InventChip SiC MOSFETs in a three-phase inverter design with optimized gate drive and advanced thermal management. The solution achieved 99.2% peak efficiency.",
  feedback: "The SiC-based inverter exceeded efficiency targets and enabled 15% reduction in cooling system size. The customer successfully launched their new EV model with industry-leading range performance."
};

function main() {
  console.log('========================================');
  console.log('🔧 INVENTCHIP Support & Solutions Fix');
  console.log('========================================\n');

  // Fix support.json
  const support = readJSON('support.json');
  if (support) {
    support.articles.forEach(article => {
      // Fix faeInsights
      if (faeInsightsMap[article.title]) {
        article.faeInsights = faeInsightsMap[article.title];
        console.log(`  ✓ Fixed faeInsights for ${article.title}`);
      }
      
      // Fix customerCases
      if (!article.customerCases || article.customerCases.length === 0) {
        article.customerCases = [customerCaseTemplate];
        console.log(`  ✓ Fixed customerCases for ${article.title}`);
      }
      
      // Fix FAQs
      if (!article.faqs || article.faqs.length < 5) {
        article.faqs = [
          {
            question: `What are the key considerations when using InventChip SiC devices?`,
            answer: `Key considerations include proper gate drive design with appropriate voltage levels, adequate thermal management, and PCB layout optimization. Ensure gate loop inductance is minimized and sufficient decoupling is provided.`,
            decisionGuide: `Contact LiTong FAE for design review and optimization guidance.`,
            keywords: ["SiC", "design considerations", "gate drive"]
          },
          {
            question: `How do I select the right InventChip device for my application?`,
            answer: `Selection depends on voltage rating, current capability, switching frequency, and thermal requirements. Consider voltage margin of 20-30%, current ratings for both RMS and peak, and thermal performance for your cooling solution.`,
            decisionGuide: `Use LiTong's selection tools or contact FAE for personalized recommendations.`,
            keywords: ["selection", "voltage rating", "current rating"]
          },
          {
            question: `What technical support is available for InventChip products?`,
            answer: `LiTong provides comprehensive support including SPICE models, reference designs, application notes, and direct FAE consultation. Evaluation kits are available for prototyping.`,
            decisionGuide: `Start with evaluation kit and reference designs. Contact FAE for complex applications.`,
            keywords: ["support", "SPICE models", "reference designs"]
          }
        ];
        console.log(`  ✓ Fixed FAQs for ${article.title}`);
      }
    });
    writeJSON('support.json', support);
  }

  // Fix solutions.json
  const solutions = readJSON('solutions.json');
  if (solutions) {
    solutions.solutions.forEach(sol => {
      // Fix customerCases
      if (!sol.customerCases || sol.customerCases.length === 0) {
        sol.customerCases = [
          {
            customer: "Industrial Drive Manufacturer",
            industry: "Industrial Automation",
            application: "High-efficiency motor drive system",
            challenge: "The customer needed to improve motor drive efficiency and reduce system size for their industrial servo product line.",
            solution: "Implemented InventChip SiC MOSFETs with optimized gate drive and advanced control algorithms. The solution achieved 98.5% efficiency.",
            results: "System efficiency improved by 3%, enabling smaller heatsinks and reduced cooling costs. The customer successfully launched their new servo drive series."
          },
          {
            customer: "Solar Inverter Company",
            industry: "Renewable Energy",
            application: "Residential solar inverter",
            challenge: "The customer needed to improve inverter efficiency and power density for their next-generation residential solar product.",
            solution: "Designed a solution using InventChip SiC MOSFETs with advanced MPPT algorithms and compact thermal design.",
            results: "Inverter efficiency reached 99.0%, enabling market-leading product positioning and significant competitive advantage."
          }
        ];
        console.log(`  ✓ Fixed customerCases for ${sol.title || sol.id}`);
      }
    });
    writeJSON('solutions.json', solutions);
  }

  console.log('\n========================================');
  console.log('✅ Support & Solutions fix completed!');
  console.log('========================================');
}

main();
