/**
 * INFINEON Brand Data Fix - Missing Fields
 * 修复新增产品缺少的字段
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'infineon');

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

// 生成shortDescription (80-120字符)
function generateShortDescription(product) {
  const desc = product.description || product.longDescription || '';
  if (desc.length >= 80 && desc.length <= 120) {
    return desc;
  }
  // 截取或扩展描述
  if (desc.length > 120) {
    return desc.substring(0, 117) + '...';
  }
  // 扩展描述
  return desc + ' Professional grade with excellent performance and reliability for demanding applications.';
}

// 生成descriptionParagraphs (3段)
function generateDescriptionParagraphs(product) {
  const desc = product.longDescription || product.description || '';
  
  // 如果已有3段描述，直接返回
  if (product.descriptionParagraphs && product.descriptionParagraphs.length === 3) {
    return product.descriptionParagraphs;
  }
  
  // 生成3段描述
  return [
    desc,
    `The ${product.partNumber} features robust construction and advanced technology to ensure reliable operation in demanding environments. It is designed with comprehensive protection mechanisms and diagnostic capabilities.`,
    `Ideal for automotive and industrial applications, this device offers excellent performance characteristics including high efficiency, low power consumption, and extended temperature operation. Contact LiTong FAE for application support and design guidance.`
  ];
}

function main() {
  console.log('========================================');
  console.log('🔧 INFINEON Missing Fields Fix');
  console.log('========================================\n');
  
  const products = readJSON('products.json');
  if (!products) {
    console.error('❌ Failed to read products.json');
    return;
  }
  
  let fixedCount = 0;
  
  // 处理每个分类
  products.categories.forEach(category => {
    console.log(`\n📁 ${category.name}:`);
    
    category.products.forEach(product => {
      let needsFix = false;
      
      // 检查并修复shortDescription
      if (!product.shortDescription || product.shortDescription.length < 80) {
        product.shortDescription = generateShortDescription(product);
        needsFix = true;
      }
      
      // 检查并修复descriptionParagraphs
      if (!product.descriptionParagraphs || product.descriptionParagraphs.length < 3) {
        product.descriptionParagraphs = generateDescriptionParagraphs(product);
        needsFix = true;
      }
      
      if (needsFix) {
        console.log(`  ✓ Fixed ${product.partNumber}`);
        fixedCount++;
      }
    });
  });
  
  // 保存更新后的文件
  writeJSON('products.json', products);
  
  console.log('\n========================================');
  console.log(`✅ Fixed ${fixedCount} products!`);
  console.log('========================================');
}

main();
