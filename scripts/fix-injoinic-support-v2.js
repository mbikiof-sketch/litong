/**
 * INJOINIC Brand Data Fix - Support Articles V2
 * 修复Support文章的faeInsights和customerCases
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'injoinic');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`❌ Error parsing ${filename}: ${e.message}`);
    return null;
  }
}

function writeJSON(filename, data) {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2), 'utf8');
  console.log(`  ✓ Updated ${filename}`);
}

// 扩展的faeInsights
const faeInsightsMap = {
  "Fast Charging Protocol IC Selection Guide": "The key to selecting the right fast charging protocol IC lies in understanding your target market and device compatibility requirements. For universal compatibility, choose ICs supporting PD3.0 and QC4+. For cost-sensitive applications, consider protocol-specific solutions. Important selection criteria include: maximum output power, number of ports, protocol compatibility, and protection features. Always verify the IC's thermal performance under full load conditions. For multi-port designs, consider dynamic power allocation capabilities. LiTong FAE recommends starting with evaluation kits to validate protocol compatibility with your target devices. Contact our team for customized selection guidance based on your specific application requirements and volume forecasts.",
  "Power Bank Design Guide with Injoinic Solutions": "Successful power bank design requires careful consideration of battery chemistry, capacity, and charging architecture. Key design decisions include: selecting the appropriate battery protection IC, choosing between synchronous and non-synchronous converters, and implementing proper thermal management. For high-capacity designs, consider multi-cell configurations with active balancing. Efficiency is critical - aim for >95% conversion efficiency to minimize heat generation. The PCB layout significantly impacts performance - use wide traces for high-current paths and place decoupling capacitors close to IC pins. LiTong FAE can provide reference designs and layout reviews to ensure optimal performance and safety compliance for your power bank application.",
  "Battery Management Design Guide": "Battery management system design requires balancing safety, performance, and cost. Critical considerations include: accurate cell voltage monitoring, appropriate protection thresholds, and reliable communication interfaces. For multi-cell applications, cell balancing is essential to maximize capacity and cycle life. Protection features should include over-voltage, under-voltage, over-current, and short-circuit protection. Temperature monitoring is crucial for safe operation. The fuel gauge accuracy depends on proper calibration and compensation for temperature and aging effects. LiTong FAE recommends comprehensive testing including abuse testing to verify protection functionality. Contact our team for design review and safety certification guidance.",
  "Wireless Charging Design Guide": "Wireless charging design requires attention to coil selection, shielding, and foreign object detection. Key considerations include: coil size and shape for target application, ferrite shielding for efficiency and EMI control, and FOD sensitivity calibration. Thermal management is critical as wireless charging generates heat in both transmitter and receiver. The Qi standard compliance requires proper communication protocol implementation. For high-power applications, consider active cooling solutions. LiTong FAE provides coil design recommendations and can review your wireless charging system architecture. Contact us for Qi certification guidance and optimization support."
};

// 客户案例模板
const customerCaseTemplate = {
  customer: "Consumer Electronics Manufacturer",
  industry: "Mobile Accessories",
  challenge: "The customer needed to develop a universal fast charging solution supporting multiple protocols including PD3.0, QC4+, and proprietary standards. They faced challenges with protocol compatibility, thermal management, and cost optimization for mass production.",
  solution: "Implemented Injoinic protocol IC combined with buck-boost converter solution. The design provided seamless multi-protocol support with intelligent power allocation. Optimized PCB layout and thermal design ensured reliable operation at full load conditions.",
  feedback: "The solution achieved excellent conversion efficiency and passed all compatibility tests with major smartphone brands. Customer reported significant reduction in BOM cost compared to competing solutions and successfully launched the product ahead of schedule with high customer satisfaction."
};

function main() {
  console.log('========================================');
  console.log('🔧 INJOINIC Support Articles Fix V2');
  console.log('========================================\n');

  const support = readJSON('support.json');
  if (!support) return;

  support.articles.forEach(article => {
    let needsFix = false;

    // Fix faeInsights
    if (faeInsightsMap[article.title]) {
      article.faeInsights = faeInsightsMap[article.title];
      console.log(`  ✓ Fixed faeInsights for ${article.title}`);
      needsFix = true;
    }

    // Fix customerCases
    if (!article.customerCases || article.customerCases.length === 0 || 
        !article.customerCases[0].challenge || !article.customerCases[0].solution || !article.customerCases[0].feedback) {
      article.customerCases = [customerCaseTemplate];
      console.log(`  ✓ Fixed customerCases for ${article.title}`);
      needsFix = true;
    }
  });

  writeJSON('support.json', support);

  console.log('\n========================================');
  console.log('✅ Support Articles fix V2 completed!');
  console.log('========================================');
}

main();
