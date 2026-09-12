/**
 * CPS品牌数据最终修复脚本
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'cps');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated: ${filename}`);
}

// 截断shortDescription到120字以内
function truncateShortDescription(desc) {
  if (desc.length <= 120) return desc;
  return desc.substring(0, 117) + '...';
}

function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const products = readJSON('products.json');
  
  const productsToFix = ['CS50N65', 'CPS800H12E4', 'PR100A12', 'PR50A12', 'TYN120A16'];
  
  products.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (productsToFix.includes(product.partNumber)) {
          if (product.shortDescription.length > 120) {
            product.shortDescription = truncateShortDescription(product.shortDescription);
            console.log(`  ✓ Truncated ${product.partNumber} shortDescription`);
          }
        }
      });
    }
  });
  
  writeJSON('products.json', products);
}

function fixSolutions() {
  console.log('\n=== Fixing solutions.json ===');
  const solutions = readJSON('solutions.json');
  
  if (solutions.solutions) {
    solutions.solutions.forEach(solution => {
      if (solution.title === "Industrial Inverter Power Solution") {
        if (!solution.faeInsights) {
          solution.faeInsights = {
            insightLogic: "Industrial inverter applications require careful balancing of switching frequency, efficiency, and EMI. CPS IGBT modules offer excellent performance trade-offs for these demanding applications.",
            decisionFramework: "Select IGBT voltage rating with 30% margin above DC bus voltage. Choose current rating based on thermal calculations at maximum load."
          };
          console.log(`  ✓ Fixed faeInsights for ${solution.title}`);
        }
      }
    });
  }
  
  writeJSON('solutions.json', solutions);
}

function fixSupport() {
  console.log('\n=== Fixing support.json ===');
  const support = readJSON('support.json');
  
  if (support.articles) {
    support.articles.forEach(article => {
      if (article.title === "IGBT Thermal Management and Heatsink Design Guide") {
        if (!article.faeInsights) {
          article.faeInsights = {
            insightLogic: "IGBT junction temperature is the primary factor affecting reliability and lifetime. Proper heatsink design can reduce junction temperature by 20-30°C.",
            decisionFramework: "Calculate power dissipation and select heatsink based on required thermal resistance."
          };
          console.log(`  ✓ Fixed faeInsights for ${article.title}`);
        }
      }
    });
  }
  
  writeJSON('support.json', support);
}

function main() {
  console.log('========================================');
  console.log('🚀 CPS Brand Data Final Fix');
  console.log('========================================');
  
  try {
    fixProducts();
    fixSolutions();
    fixSupport();
    
    console.log('\n========================================');
    console.log('✅ Final fixes completed!');
    console.log('========================================');
  } catch (error) {
    console.error('\n❌ Error during fix:', error.message);
    process.exit(1);
  }
}

main();
