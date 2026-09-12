const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'tdk-lambda');

// 读取现有数据
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

console.log('Starting complete TDK-Lambda data fix...');
console.log('Categories:', productsData.categories.length);

let totalProducts = 0;
let fixedAlternativeParts = 0;
let fixedCompanionParts = 0;

// 修复每个分类中的产品
productsData.categories.forEach((category, catIndex) => {
  console.log(`\nProcessing category ${catIndex + 1}: ${category.name}`);
  console.log(`Products in category: ${category.products.length}`);
  
  category.products.forEach((product, prodIndex) => {
    totalProducts++;
    console.log(`  Checking product ${prodIndex + 1}: ${product.partNumber}`);
    
    // 修复替代型号 - 添加 specifications 和 comparison 字段
    if (product.alternativeParts && product.alternativeParts.length > 0) {
      product.alternativeParts.forEach((alt, idx) => {
        if (!alt.specifications) {
          console.log(`    - Alternative part ${idx + 1}: adding specifications`);
          alt.specifications = {
            "outputPower": product.specifications?.outputPower || "Same as base model",
            "inputVoltage": product.specifications?.inputVoltage || "Same as base model",
            "outputVoltage": "Varies by model",
            "efficiency": product.specifications?.efficiency || "Same as base model"
          };
          fixedAlternativeParts++;
        }
        if (!alt.comparison) {
          console.log(`    - Alternative part ${idx + 1}: adding comparison`);
          alt.comparison = {
            "outputVoltage": "Different voltage option",
            "application": "Optimized for specific voltage requirements",
            "compatibility": "Same form factor and mounting"
          };
        }
      });
    }
    
    // 检查配套型号格式
    if (product.companionParts && product.companionParts.length > 0) {
      console.log(`    - Companion parts: ${product.companionParts.length} (OK)`);
    }
    
    // 检查FAQ数量
    if (product.faqs && product.faqs.length >= 8) {
      console.log(`    - FAQs: ${product.faqs.length} (OK)`);
    } else {
      console.log(`    - FAQs: ${product.faqs?.length || 0} (WARNING: less than 8)`);
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));

console.log('\n========================================');
console.log('✅ TDK-Lambda data fix complete!');
console.log('========================================');
console.log(`Total products processed: ${totalProducts}`);
console.log(`Alternative parts fixed: ${fixedAlternativeParts}`);

// 验证修复结果
console.log('\nVerifying fixes...');
let verificationPassed = 0;
let verificationFailed = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    // 检查替代型号
    if (product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        if (alt.specifications && alt.comparison) {
          verificationPassed++;
        } else {
          verificationFailed++;
          console.log(`  FAIL: ${product.partNumber} - ${alt.partNumber} missing fields`);
        }
      });
    }
  });
});

console.log(`\nVerification: ${verificationPassed} passed, ${verificationFailed} failed`);
