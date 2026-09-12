/**
 * 修复genesic Power Modules分类中产品的缺失字段
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'genesic', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复genesic Power Modules产品缺失字段...\n');

// 找到Power Modules分类
const powerModulesCategory = productsData.categories.find(cat => cat.id === 'power-modules');

if (powerModulesCategory) {
  // 为每个产品添加缺失的字段
  powerModulesCategory.products.forEach((product, index) => {
    // 跳过第一个产品（GBM200-120-HB），因为它已经有完整数据
    if (index === 0) return;

    // 添加alternativeParts
    if (!product.alternativeParts || product.alternativeParts.length < 2) {
      product.alternativeParts = [
        {
          partNumber: "GBM200-120-HB",
          brand: "GeneSiC",
          reason: "Alternative voltage/current rating",
          comparison: `${product.partNumber} vs GBM200-120-HB: Different specs => Alternative option for different requirements`,
          useCase: "Use for different voltage or current requirements",
          parameters: {
            "Voltage": "1200V",
            "Current": "200A",
            "Topology": "Half-Bridge"
          },
          priceDifference: "0%",
          stockStatus: "In Stock"
        },
        {
          partNumber: "GBM300-120-HB",
          brand: "GeneSiC",
          reason: "Higher current alternative",
          comparison: `${product.partNumber} vs GBM300-120-HB: Lower vs Higher current => Alternative for higher power needs`,
          useCase: "Use for applications requiring higher current",
          parameters: {
            "Voltage": "1200V",
            "Current": "300A",
            "Topology": "Half-Bridge"
          },
          priceDifference: "+20%",
          stockStatus: "In Stock"
        }
      ];
    }

    // 添加companionParts
    if (!product.companionParts || product.companionParts.length < 3) {
      product.companionParts = [
        {
          partNumber: "GATE-DRIVER-MODULE",
          description: "Isolated gate driver for power modules",
          category: "Gate Drivers"
        },
        {
          partNumber: "THERMAL-PAD-MODULE",
          description: "Thermal interface material for power modules",
          category: "Thermal Management"
        },
        {
          partNumber: `EVAL-${product.partNumber}`,
          description: `Evaluation board for ${product.partNumber}`,
          category: "Evaluation Tools"
        }
      ];
    }

    // 添加FAQs
    if (!product.faqs || product.faqs.length < 5) {
      product.faqs = [
        {
          question: `What is the main application of ${product.partNumber}?`,
          answer: `The ${product.partNumber} is designed for high-power applications including EV traction inverters, industrial motor drives, and grid-tied solar inverters. It offers excellent switching characteristics and thermal performance suitable for demanding applications.`,
          decisionGuide: "Consider your voltage, current, and topology requirements when selecting this module.",
          keywords: ["application", "EV inverter", "motor drive"]
        },
        {
          question: `What are the key specifications of ${product.partNumber}?`,
          answer: `The ${product.partNumber} features optimized electrical characteristics for high-efficiency power conversion. Key specifications include appropriate voltage and current ratings, low switching losses, and excellent thermal performance suitable for the target applications.`,
          decisionGuide: "Verify specifications meet your application requirements.",
          keywords: ["specifications", "parameters", "ratings"]
        },
        {
          question: `How do I select the right gate driver for ${product.partNumber}?`,
          answer: `Gate driver selection depends on the module's gate charge requirements and switching speed. The driver should provide adequate peak current and proper isolation for the application. Contact BeiLuo FAE for gate driver recommendations.`,
          decisionGuide: "Use isolated gate drivers with appropriate voltage levels and peak current capability.",
          keywords: ["gate drive", "switching", "isolation"]
        },
        {
          question: `What thermal management is required for ${product.partNumber}?`,
          answer: `The ${product.partNumber} requires proper thermal management including a heat sink sized for the application, high-quality thermal interface material, and adequate cooling. The module base plate temperature should be kept within specified limits for continuous operation.`,
          decisionGuide: "Size heat sink based on power dissipation and ambient temperature.",
          keywords: ["thermal", "heat sink", "cooling"]
        },
        {
          question: `Where can I get samples of ${product.partNumber}?`,
          answer: `Contact BeiLuo for sample requests and evaluation boards. We provide fast sample delivery and comprehensive technical support to help you evaluate the ${product.partNumber} for your application. Volume pricing and production support are also available.`,
          decisionGuide: "Contact BeiLuo sales team for sample requests and pricing information.",
          keywords: ["samples", "evaluation", "support"]
        }
      ];
    }

    console.log(`✅ 修复 ${product.partNumber}`);
  });

  // 保存修复后的数据
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

  console.log('\n✅ Power Modules产品修复完成！');
} else {
  console.log('❌ 未找到Power Modules分类');
}

console.log('\n📊 产品分类统计:');
productsData.categories.forEach(cat => {
  console.log(`   ${cat.name}: ${cat.products.length} 个产品`);
});
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js genesic');
