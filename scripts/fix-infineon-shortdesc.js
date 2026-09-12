/**
 * INFINEON Brand Data Fix - ShortDescription Length
 * 修复shortDescription长度问题（80-120字符）
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

// 需要修复的产品及其正确的shortDescription
const fixes = {
  "FF450R12ME4_B11": "450A 1200V IGBT module for industrial motor drives and power converters.",
  "FF225R12ME4_B11": "225A 1200V IGBT module for medium power drives and inverters.",
  "IPB017N10N5": "100V 195A OptiMOS 5 MOSFET with ultra-low 1.7mΩ on-resistance.",
  "IPB014N06N": "60V 100A OptiMOS 3 MOSFET with 1.4mΩ Rds(on) for DC-DC converters.",
  "TLE4946-2K": "Unipolar Hall effect switch for position sensing with high sensitivity.",
  "TLE4966-3K": "Bipolar Hall latch for BLDC motor commutation and speed sensing.",
  "1EDI60I12AF": "Single-channel isolated gate driver with 6A output for IGBT/SiC.",
  "2EDF7275K": "Dual-channel gate driver with interlock for half-bridge applications."
};

function main() {
  console.log('========================================');
  console.log('🔧 INFINEON ShortDescription Fix');
  console.log('========================================\n');
  
  const products = readJSON('products.json');
  if (!products) {
    console.error('❌ Failed to read products.json');
    return;
  }
  
  let fixedCount = 0;
  
  // 处理每个分类
  products.categories.forEach(category => {
    category.products.forEach(product => {
      if (fixes[product.partNumber]) {
        product.shortDescription = fixes[product.partNumber];
        console.log(`  ✓ Fixed ${product.partNumber}: ${product.shortDescription.length} chars`);
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
