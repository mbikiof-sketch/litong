/**
 * INFINEON Brand Data Fix - ShortDescription Length V2
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

// 需要修复的产品及其正确的shortDescription（确保80-120字符）
const fixes = {
  "FF450R12ME4_B11": "450A 1200V IGBT module with Trench/Fieldstop technology for industrial motor drives and power conversion.",
  "FF225R12ME4_B11": "225A 1200V IGBT module in compact EconoDUAL 3 package for medium power drives and inverters.",
  "IPB017N10N5": "100V 195A OptiMOS 5 MOSFET featuring ultra-low 1.7mΩ on-resistance for high-efficiency DC-DC converters.",
  "IPB014N06N": "60V 100A OptiMOS 3 MOSFET with 1.4mΩ Rds(on) and logic-level compatibility for DC-DC applications.",
  "TLE4946-2K": "Unipolar Hall effect switch with high sensitivity and temperature stability for position sensing applications.",
  "TLE4966-3K": "Bipolar Hall latch for BLDC motor commutation featuring high jitter accuracy and reliable operation.",
  "1EDI60I12AF": "Single-channel isolated gate driver with 6A output current and reinforced isolation for IGBT/SiC MOSFETs.",
  "2EDF7275K": "Dual-channel gate driver with integrated interlock and shoot-through protection for half-bridge applications."
};

function main() {
  console.log('========================================');
  console.log('🔧 INFINEON ShortDescription Fix V2');
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
        const newDesc = fixes[product.partNumber];
        const len = newDesc.length;
        if (len >= 80 && len <= 120) {
          product.shortDescription = newDesc;
          console.log(`  ✓ Fixed ${product.partNumber}: ${len} chars`);
          fixedCount++;
        } else {
          console.log(`  ⚠️ ${product.partNumber}: length ${len} still not in range 80-120`);
        }
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
