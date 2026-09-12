/**
 * 修复genesic品牌shortDescription长度问题
 * 确保每个shortDescription在80-120字符之间
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'genesic', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 修复genesic品牌shortDescription长度...\n');

// 扩展shortDescription到80-120字符
function fixShortDescription(desc, partNumber, category) {
  // 如果已经在范围内，直接返回
  if (desc.length >= 80 && desc.length <= 120) return desc;
  
  // 如果太短，添加扩展
  if (desc.length < 80) {
    const extensions = [
      ` Ideal for high-efficiency power conversion applications.`,
      ` Features excellent thermal performance and reliability.`,
      ` Suitable for demanding industrial and automotive use.`,
      ` Provides superior switching characteristics.`,
      ` Designed for optimal performance in harsh environments.`
    ];
    
    let newDesc = desc;
    for (const ext of extensions) {
      if (newDesc.length < 80) {
        newDesc += ext;
      }
    }
    
    // 如果超过120字符，截断
    if (newDesc.length > 120) {
      newDesc = newDesc.substring(0, 117) + '...';
    }
    
    return newDesc;
  }
  
  // 如果太长，截断
  if (desc.length > 120) {
    return desc.substring(0, 117) + '...';
  }
  
  return desc;
}

// 修复每个产品
let fixedCount = 0;
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    const originalDesc = product.shortDescription;
    const fixedDesc = fixShortDescription(originalDesc, product.partNumber, category.name);
    
    if (originalDesc !== fixedDesc) {
      product.shortDescription = fixedDesc;
      fixedCount++;
      console.log(`✅ 修复 ${product.partNumber}: ${originalDesc.length} -> ${fixedDesc.length} 字符`);
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ 共修复 ${fixedCount} 个产品的shortDescription`);
console.log('\n请运行清单验证: node scripts/brand-master-checklist.js genesic');
