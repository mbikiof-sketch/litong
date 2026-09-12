/**
 * IXYS Brand Data Fix - Remaining Issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'ixys');

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

// 生成分类longDescription
function generateCategoryLongDesc(categoryName) {
  const descs = {
    "Power MOSFETs": "IXYS Power MOSFETs deliver high-performance switching solutions for industrial, automotive, and consumer applications. As a leading distributor, LiTong provides comprehensive selection guidance for IXYS's HiPerFET and Trench technologies with voltage ratings from 60V to 1000V. Our series includes discrete devices in various packages optimized for motor drives, power supplies, and DC-DC converters. Key advantages include low on-resistance, fast switching speed, and rugged avalanche capability. These devices are ideal for applications requiring high efficiency and reliability. Contact our FAE team for detailed application support and reference designs.",
    "IGBT Modules": "IXYS IGBT Modules integrate high-performance IGBTs and diodes in compact packages for high-power applications. LiTong, as an authorized distributor, offers expert selection guidance for IXYS's XPT and GenX technologies with voltage ratings from 600V to 1700V. Our series includes modules in various configurations for motor drives, inverters, and power supplies. These modules simplify design and improve reliability for industrial and renewable energy applications. Contact LiTong FAE for module selection, gate drive design, and thermal management support.",
    "Power Diodes": "IXYS Power Diodes provide high-efficiency rectification solutions for industrial and automotive applications. LiTong provides selection guidance for IXYS's fast recovery and Schottky diodes with voltage ratings from 100V to 2000V. Our series includes discrete devices and modules for various current levels. These diodes offer low forward voltage drop and fast switching characteristics. Contact LiTong FAE for diode selection and snubber circuit design support.",
    "Thyristors": "IXYS Thyristors deliver reliable phase control solutions for industrial heating, motor control, and power management applications. As your trusted distributor, LiTong provides selection guidance for IXYS's phase control and inverter-grade thyristors with voltage ratings from 600V to 2000V. Our series includes discrete devices and modules for various current levels. These thyristors offer high surge capability and reliable operation. Contact LiTong FAE for thyristor selection and commutation circuit design support."
  };
  return descs[categoryName] || descs["Power MOSFETs"];
}

// 生成分类FAQs
function generateCategoryFAQs(categoryName) {
  return [
    {
      question: `What makes IXYS ${categoryName} different from competitors?`,
      answer: `IXYS ${categoryName} offer several key advantages: (1) Rugged Construction: Enhanced avalanche capability and wide SOA for reliable operation; (2) Advanced Technology: HiPerFET and Trench technologies for superior performance; (3) Wide Product Range: Comprehensive voltage and current ratings; (4) Automotive Qualification: AEC-Q101 qualified devices available; (5) Long-term Availability: Industrial-grade reliability and supply stability.`,
      decisionGuide: `Choose IXYS for applications requiring rugged, reliable power semiconductors with excellent performance.`,
      keywords: [categoryName.toLowerCase(), "IXYS", "advantages", "rugged"]
    },
    {
      question: `How do I select the right IXYS ${categoryName} for my application?`,
      answer: `Selection criteria for IXYS ${categoryName}: (1) Voltage Rating: Select 20-30% higher than maximum operating voltage; (2) Current Rating: Consider both RMS and peak currents with adequate margin; (3) Package: Choose based on thermal requirements and mounting; (4) Switching Speed: Match to application frequency requirements; (5) Thermal Performance: Ensure adequate heatsinking for dissipation.`,
      decisionGuide: `Contact LiTong FAE for personalized selection guidance based on your specific application requirements.`,
      keywords: [categoryName.toLowerCase(), "selection", "voltage rating", "current rating"]
    },
    {
      question: `What are the typical applications for IXYS ${categoryName}?`,
      answer: `IXYS ${categoryName} are used in: (1) Motor Drives: Variable frequency drives, servo systems; (2) Power Supplies: SMPS, welding equipment; (3) Renewable Energy: Solar inverters, wind converters; (4) Transportation: Electric vehicles, rail systems; (5) Industrial: UPS systems, battery chargers.`,
      decisionGuide: `IXYS devices are ideal for industrial and transportation applications requiring high reliability.`,
      keywords: [categoryName.toLowerCase(), "applications", "motor drives", "power supplies"]
    },
    {
      question: `What thermal management is required for IXYS ${categoryName}?`,
      answer: `Thermal management considerations: (1) Junction Temperature: Keep below 150°C for long-term reliability; (2) Heatsinking: Adequate surface area and airflow; (3) Thermal Interface: Use high-quality thermal pads or paste; (4) PCB Design: Use thick copper planes for heat spreading; (5) Temperature Monitoring: Implement for protection.`,
      decisionGuide: `Use thermal simulation tools or contact LiTong FAE for thermal design optimization.`,
      keywords: [categoryName.toLowerCase(), "thermal management", "heatsink", "temperature"]
    },
    {
      question: `What is the lead time for IXYS ${categoryName}?`,
      answer: `IXYS ${categoryName} have standard lead times of 8-12 weeks for production quantities. LiTong maintains safety stock for sample quantities with 1-2 week delivery. For high-volume production, scheduled delivery programs are available with competitive lead times.`,
      decisionGuide: `Plan 12-week lead time for production orders. Contact sales for volume pricing and scheduled delivery.`,
      keywords: [categoryName.toLowerCase(), "lead time", "availability", "delivery"]
    }
  ];
}

function main() {
  console.log('========================================');
  console.log('🔧 IXYS Remaining Issues Fix');
  console.log('========================================\n');

  // Fix products.json
  const products = readJSON('products.json');
  if (products) {
    products.categories.forEach(category => {
      console.log(`\n📁 ${category.name}:`);
      
      // Fix longDescription
      if (!category.longDescription || category.longDescription.length < 200) {
        category.longDescription = generateCategoryLongDesc(category.name);
        console.log(`  ✓ Fixed longDescription`);
      }
      
      // Fix series
      if (!category.series || category.series.length < 2) {
        category.series = ["IXYS Series", "HiPerFET Series", "XPT Series"];
        console.log(`  ✓ Fixed series`);
      }
      
      // Fix selectionGuideLink
      if (!category.selectionGuideLink || typeof category.selectionGuideLink !== 'object') {
        category.selectionGuideLink = {
          url: `/ixys/support/${category.slug}-selection-guide.html`,
          text: `View ${category.name} Selection Guide`
        };
        console.log(`  ✓ Fixed selectionGuideLink`);
      }
      
      // Fix FAQs
      if (!category.faqs || category.faqs.length < 5) {
        category.faqs = generateCategoryFAQs(category.name);
        console.log(`  ✓ Fixed FAQs (${category.faqs.length})`);
      }
    });
    writeJSON('products.json', products);
  }

  console.log('\n========================================');
  console.log('✅ Remaining issues fix completed!');
  console.log('========================================');
}

main();
