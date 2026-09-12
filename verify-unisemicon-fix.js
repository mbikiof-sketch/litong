const fs = require('fs');
const path = require('path');

// 读取产品数据
const productsPath = path.join(__dirname, 'data', 'unisemicon', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('=== UNISEMICON 产品数据验证报告 ===\n');

let allPassed = true;

// 检查每个分类
for (const category of products.categories) {
  console.log(`\n【${category.name}】`);
  console.log(`产品数量: ${category.products.length}`);
  
  // 检查产品数量
  if (category.products.length < 6) {
    console.log(`  ❌ 产品数量不足6个`);
    allPassed = false;
  } else {
    console.log(`  ✅ 产品数量满足要求`);
  }
  
  // 检查重复产品
  const partNumbers = category.products.map(p => p.partNumber);
  const duplicates = partNumbers.filter((item, index) => partNumbers.indexOf(item) !== index);
  if (duplicates.length > 0) {
    console.log(`  ❌ 发现重复产品: ${duplicates.join(', ')}`);
    allPassed = false;
  } else {
    console.log(`  ✅ 无重复产品`);
  }
  
  // 检查每个产品的字段完整性
  let categoryIssues = 0;
  for (let i = 0; i < category.products.length; i++) {
    const product = category.products[i];
    const issues = [];
    
    // 检查必填字段
    if (!product.partNumber) issues.push('partNumber');
    if (!product.name) issues.push('name');
    if (!product.description) issues.push('description');
    if (!product.specifications) issues.push('specifications');
    if (!product.alternativeParts || product.alternativeParts.length === 0) issues.push('alternativeParts');
    if (!product.companionParts || product.companionParts.length === 0) issues.push('companionParts');
    if (!product.faeReview) issues.push('faeReview');
    if (!product.faqs || product.faqs.length === 0) issues.push('faqs');
    
    // 检查alternativeParts是否有编造信息
    if (product.alternativeParts) {
      for (const alt of product.alternativeParts) {
        if (alt.partNumber.includes('ALT1') || alt.partNumber.includes('ALT2')) {
          issues.push(`编造alternativePart: ${alt.partNumber}`);
        }
      }
    }
    
    // 检查companionParts是否有编造信息
    if (product.companionParts) {
      for (const comp of product.companionParts) {
        if (comp.partNumber.includes('UNISEMICON') && comp.partNumber.includes('-')) {
          // 可能是编造的，检查是否存在
          const exists = category.products.some(p => p.partNumber === comp.partNumber);
          if (!exists && !comp.partNumber.includes('EVB') && !comp.partNumber.includes('Programmer')) {
            issues.push(`编造companionPart: ${comp.partNumber}`);
          }
        }
      }
    }
    
    if (issues.length > 0) {
      console.log(`  产品 ${i + 1} (${product.partNumber}): ❌ ${issues.join(', ')}`);
      categoryIssues++;
    }
  }
  
  if (categoryIssues === 0) {
    console.log(`  ✅ 所有产品字段完整，无编造信息`);
  } else {
    console.log(`  ❌ ${categoryIssues} 个产品存在问题`);
    allPassed = false;
  }
}

console.log('\n=== 验证总结 ===');
if (allPassed) {
  console.log('✅ 所有检查通过！unisemicon 产品数据已完全修复。');
} else {
  console.log('❌ 仍有部分问题需要修复。');
}

// 显示每个分类的产品列表
console.log('\n=== 产品列表 ===');
for (const category of products.categories) {
  console.log(`\n${category.name}:`);
  category.products.forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.partNumber} - ${p.name}`);
  });
}
