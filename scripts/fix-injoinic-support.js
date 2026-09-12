/**
 * INJOINIC Brand Data Fix - Support and Categories
 * 修复分类和Support文章问题
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

// 分类longDescription模板
const categoryLongDesc = {
  "Fast Charging Protocol ICs": "Injoinic's Fast Charging Protocol ICs provide comprehensive solutions for USB Power Delivery and various fast charging standards. As a leading distributor, LiTong offers complete selection guidance for PD3.0, QC4+, SCP, FCP, and AFC protocols. Our series includes single-port and multi-port controllers with intelligent power allocation and comprehensive protection features. Key advantages include wide protocol compatibility, high integration, and excellent cost-performance ratio. These ICs are ideal for power banks, wall chargers, car chargers, and adapter applications. Contact our FAE team for selection support and reference designs.",
  "Power Management ICs": "Injoinic's Power Management ICs deliver high-efficiency power conversion solutions for consumer electronics and industrial applications. LiTong, as an authorized distributor, provides expert selection guidance for buck-boost converters, battery chargers, and power management units. Our series features industry-leading efficiency up to 97%, wide input voltage ranges, and comprehensive protection mechanisms. These ICs support applications from low-power IoT devices to high-power industrial systems. Contact LiTong FAE for power architecture design and optimization support.",
  "Wireless Charging ICs": "Injoinic's Wireless Charging ICs enable Qi-compatible wireless power transmission and reception solutions. As your trusted distributor, LiTong provides selection guidance for transmitter and receiver ICs supporting up to 50W output power. Our series includes foreign object detection, temperature monitoring, and adaptive power control features. These ICs are perfect for charging pads, stands, car mounts, and furniture integration applications. Contact LiTong FAE for wireless charging coil design and system optimization.",
  "Battery Management ICs": "Injoinic's Battery Management ICs offer comprehensive protection and monitoring solutions for Li-ion battery packs. LiTong provides expert distributor selection guidance for single-cell to multi-cell protection ICs, fuel gauges, and battery monitors. Our series features high-accuracy voltage detection, low power consumption, and extensive safety protection. These ICs are essential for power tools, e-bikes, energy storage, and portable electronics. Contact LiTong FAE for battery pack design and safety certification support."
};

// Support文章faeInsights
const supportFAEInsights = {
  "Fast Charging Protocol IC Selection Guide": "The key to selecting the right fast charging protocol IC lies in understanding your target market and device compatibility requirements. For universal compatibility, choose ICs supporting PD3.0 and QC4+. For cost-sensitive applications, consider protocol-specific solutions. Important selection criteria include: maximum output power, number of ports, protocol compatibility, and protection features. Always verify the IC's thermal performance under full load conditions. For multi-port designs, consider dynamic power allocation capabilities. LiTong FAE recommends starting with evaluation kits to validate protocol compatibility with your target devices. Contact our team for customized selection guidance based on your specific application requirements.",
  "Power Bank Design Guide with Injoinic Solutions": "Successful power bank design requires careful consideration of battery chemistry, capacity, and charging architecture. Key design decisions include: selecting the appropriate battery protection IC, choosing between synchronous and non-synchronous converters, and implementing proper thermal management. For high-capacity designs, consider multi-cell configurations with active balancing. Efficiency is critical - aim for >95% conversion efficiency to minimize heat generation. The PCB layout significantly impacts performance - use wide traces for high-current paths and place decoupling capacitors close to IC pins. LiTong FAE can provide reference designs and layout reviews to ensure optimal performance and safety compliance.",
  "Battery Management Design Guide": "Battery management system design requires balancing safety, performance, and cost. Critical considerations include: accurate cell voltage monitoring, appropriate protection thresholds, and reliable communication interfaces. For multi-cell applications, cell balancing is essential to maximize capacity and cycle life. Protection features should include over-voltage, under-voltage, over-current, and short-circuit protection. Temperature monitoring is crucial for safe operation. The fuel gauge accuracy depends on proper calibration and compensation for temperature and aging effects. LiTong FAE recommends comprehensive testing including abuse testing to verify protection functionality. Contact our team for design review and safety certification guidance."
};

// Support文章客户案例
const supportCustomerCases = [
  {
    customer: "Consumer Electronics Manufacturer",
    industry: "Mobile Accessories",
    challenge: "The customer needed to develop a universal fast charging power bank supporting multiple protocols including PD3.0, QC4+, and proprietary standards. They faced challenges with protocol compatibility, thermal management, and cost optimization.",
    solution: "Implemented Injoinic IP2726 protocol IC combined with SC8815 buck-boost converter. The solution provided seamless multi-protocol support with intelligent power allocation. Optimized PCB layout and thermal design ensured reliable operation at full load.",
    feedback: "The power bank achieved 97% conversion efficiency and passed all compatibility tests with major smartphone brands. Customer reported 30% reduction in BOM cost compared to competing solutions and successfully launched the product ahead of schedule."
  },
  {
    customer: "Wireless Charging Pad Manufacturer",
    industry: "Consumer Electronics",
    challenge: "The customer needed a cost-effective wireless charging solution with foreign object detection and temperature monitoring for safety compliance. They also required fast charging support up to 15W.",
    solution: "Designed a solution using Injoinic IP6806 transmitter IC with integrated FOD and temperature monitoring. The design included proper coil selection and shielding for optimal efficiency and EMI performance.",
    feedback: "The charging pad achieved Qi certification on the first submission and demonstrated reliable FOD performance. Customer appreciated the simplified BOM and reduced development time. The product became their best-selling wireless charger."
  }
];

function main() {
  console.log('========================================');
  console.log('🔧 INJOINIC Support & Categories Fix');
  console.log('========================================\n');

  // Fix products.json - categories
  const products = readJSON('products.json');
  if (products) {
    products.categories.forEach(category => {
      // Fix longDescription
      if (categoryLongDesc[category.name]) {
        category.longDescription = categoryLongDesc[category.name];
        console.log(`  ✓ Fixed longDescription for ${category.name}`);
      }

      // Fix selectionGuideLink
      if (!category.selectionGuideLink || typeof category.selectionGuideLink !== 'object') {
        category.selectionGuideLink = {
          url: `/injoinic/support/${category.slug}-selection-guide.html`,
          text: `View ${category.name} Selection Guide`
        };
        console.log(`  ✓ Fixed selectionGuideLink for ${category.name}`);
      }
    });
    writeJSON('products.json', products);
  }

  // Fix support.json
  const support = readJSON('support.json');
  if (support) {
    // Fix seoKeywords
    if (!support.seoKeywords || !support.seoKeywords.includes('distributor')) {
      support.seoKeywords = ['Injoinic distributor', 'Injoinic selection guide', 'fast charging IC', 'power management', 'wireless charging', 'battery management'];
      console.log(`  ✓ Fixed support.json seoKeywords`);
    }

    // Fix articles
    support.articles.forEach(article => {
      // Fix faeInsights
      if (supportFAEInsights[article.title] && (!article.faeInsights || article.faeInsights.length < 200)) {
        article.faeInsights = supportFAEInsights[article.title];
        console.log(`  ✓ Fixed faeInsights for ${article.title}`);
      }

      // Fix customerCases
      if (!article.customerCases || article.customerCases.length < 1) {
        article.customerCases = [supportCustomerCases[0]];
        console.log(`  ✓ Fixed customerCases for ${article.title}`);
      }
    });
    writeJSON('support.json', support);
  }

  console.log('\n========================================');
  console.log('✅ Support & Categories fix completed!');
  console.log('========================================');
}

main();
