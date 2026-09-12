const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

console.log('🔍 批量检查所有品牌产品数据完整性');
console.log('====================================\n');

// 获取所有品牌目录
const brands = fs.readdirSync(dataDir).filter(item => {
  const itemPath = path.join(dataDir, item);
  return fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'products.json'));
});

console.log(`发现 ${brands.length} 个品牌需要检查\n`);

const results = {
  passed: [],
  failed: [],
  errors: {}
};

// 检查每个品牌
brands.forEach((brand, index) => {
  console.log(`\n[${index + 1}/${brands.length}] 检查品牌: ${brand}`);
  
  try {
    const productsFile = path.join(dataDir, brand, 'products.json');
    const content = fs.readFileSync(productsFile, 'utf8');
    const data = JSON.parse(content);
    
    let brandErrors = [];
    let productCount = 0;
    let categoryCount = data.categories ? data.categories.length : 0;
    
    // 检查每个分类
    if (data.categories) {
      data.categories.forEach((category, catIndex) => {
        if (category.products) {
          category.products.forEach((product, prodIndex) => {
            productCount++;
            
            // 检查必填字段
            const requiredFields = [
              'partNumber', 'name', 'shortDescription', 'descriptionParagraphs',
              'specifications', 'features', 'applications', 'faeReview',
              'alternativeParts', 'companionParts', 'faqs'
            ];
            
            requiredFields.forEach(field => {
              if (!product[field]) {
                brandErrors.push(`${category.name} - ${product.partNumber || `产品${prodIndex}`}: 缺少字段 ${field}`);
              }
            });
            
            // 检查字段内容
            if (product.shortDescription) {
              const len = product.shortDescription.length;
              if (len < 80 || len > 120) {
                brandErrors.push(`${category.name} - ${product.partNumber}: shortDescription长度${len}不在80-120范围内`);
              }
            }
            
            // 检查alternativeParts数量
            if (product.alternativeParts && product.alternativeParts.length < 2) {
              brandErrors.push(`${category.name} - ${product.partNumber}: alternativeParts数量不足(${product.alternativeParts.length} < 2)`);
            }
            
            // 检查companionParts数量
            if (product.companionParts && product.companionParts.length < 3) {
              brandErrors.push(`${category.name} - ${product.partNumber}: companionParts数量不足(${product.companionParts.length} < 3)`);
            }
            
            // 检查FAQs数量
            if (product.faqs && product.faqs.length < 5) {
              brandErrors.push(`${category.name} - ${product.partNumber}: FAQs数量不足(${product.faqs.length} < 5)`);
            }
            
            // 检查faeReview
            if (product.faeReview) {
              if (!product.faeReview.author || !product.faeReview.title || !product.faeReview.content) {
                brandErrors.push(`${category.name} - ${product.partNumber}: faeReview字段不完整`);
              } else if (product.faeReview.content.length < 200) {
                brandErrors.push(`${category.name} - ${product.partNumber}: faeReview内容长度不足(${product.faeReview.content.length} < 200)`);
              }
            }
            
            // 检查虚假产品
            if (product.partNumber && (
              product.partNumber.includes('SEMIKRON-') ||
              product.partNumber.includes('FAKE-') ||
              product.partNumber.includes('DUMMY-') ||
              product.partNumber.match(/^\d+$/)
            )) {
              brandErrors.push(`${category.name} - ${product.partNumber}: 可能是虚假/无效产品型号`);
            }
          });
        }
      });
    }
    
    if (brandErrors.length === 0) {
      console.log(`  ✅ 通过 - ${categoryCount}个分类, ${productCount}个产品`);
      results.passed.push(brand);
    } else {
      console.log(`  ❌ 失败 - ${brandErrors.length}个问题`);
      results.failed.push(brand);
      results.errors[brand] = brandErrors;
    }
    
  } catch (error) {
    console.log(`  ❌ 错误 - ${error.message}`);
    results.failed.push(brand);
    results.errors[brand] = [`读取或解析错误: ${error.message}`];
  }
});

// 输出总结
console.log('\n\n====================================');
console.log('📊 检查结果总结');
console.log('====================================');
console.log(`✅ 通过: ${results.passed.length} 个品牌`);
console.log(`❌ 失败: ${results.failed.length} 个品牌`);

if (results.failed.length > 0) {
  console.log('\n❌ 失败品牌列表:');
  results.failed.forEach(brand => {
    console.log(`\n  📛 ${brand}:`);
    const errors = results.errors[brand];
    if (errors) {
      errors.slice(0, 10).forEach(err => {
        console.log(`     - ${err}`);
      });
      if (errors.length > 10) {
        console.log(`     ... 还有 ${errors.length - 10} 个问题`);
      }
    }
  });
}

// 保存结果到文件
const resultFile = path.join(__dirname, '..', 'batch-check-results.json');
fs.writeFileSync(resultFile, JSON.stringify(results, null, 2));
console.log(`\n💾 详细结果已保存到: batch-check-results.json`);
