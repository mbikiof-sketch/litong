const fs = require('fs');
const path = require('path');

const brand = '3peak';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔍 详细检查品牌: ${brand} 产品字段`);
console.log(`========================================\n`);

// 读取products.json
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));

// BRAND_DATA_COMPLETE_GUIDE.md 要求的字段
const requiredFields = [
  'partNumber',
  'name',
  'shortDescription',
  'description',
  'descriptionParagraphs',
  'specs',
  'features',
  'applications',
  'package',
  'stock',
  'price',
  'image',
  'alternativeParts',
  'companionParts',
  'faqs',
  'faeReview'
];

// 检查每个分类的每个产品
for (const category of productsData.categories) {
  console.log(`\n📂 分类: ${category.name} (${category.id})`);
  console.log(`   产品数量: ${category.products.length}`);
  
  for (const product of category.products) {
    console.log(`\n   🔍 检查产品: ${product.partNumber}`);
    
    const missingFields = [];
    const incompleteFields = [];
    
    // 检查必填字段
    for (const field of requiredFields) {
      if (!(field in product) || product[field] === null || product[field] === undefined) {
        missingFields.push(field);
      } else {
        // 检查字段内容完整性
        switch (field) {
          case 'descriptionParagraphs':
            if (!Array.isArray(product[field]) || product[field].length < 3) {
              incompleteFields.push(`${field}(需要3段,实际${product[field]?.length || 0}段)`);
            }
            break;
          case 'alternativeParts':
            if (!Array.isArray(product[field]) || product[field].length < 2) {
              incompleteFields.push(`${field}(需要≥2个,实际${product[field]?.length || 0}个)`);
            } else {
              // 检查每个alternativePart的字段
              product[field].forEach((part, idx) => {
                if (!part.partNumber) incompleteFields.push(`alternativeParts[${idx}].partNumber`);
                if (!part.manufacturer) incompleteFields.push(`alternativeParts[${idx}].manufacturer`);
              });
            }
            break;
          case 'companionParts':
            if (!Array.isArray(product[field]) || product[field].length < 3) {
              incompleteFields.push(`${field}(需要≥3个,实际${product[field]?.length || 0}个)`);
            } else {
              // 检查每个companionPart的字段
              product[field].forEach((part, idx) => {
                if (!part.partNumber) incompleteFields.push(`companionParts[${idx}].partNumber`);
                if (!part.type) incompleteFields.push(`companionParts[${idx}].type`);
                if (!part.description) incompleteFields.push(`companionParts[${idx}].description`);
              });
            }
            break;
          case 'faqs':
            if (!Array.isArray(product[field]) || product[field].length < 5) {
              incompleteFields.push(`${field}(需要5-8个,实际${product[field]?.length || 0}个)`);
            } else {
              // 检查每个FAQ的字段
              product[field].forEach((faq, idx) => {
                if (!faq.question) incompleteFields.push(`faqs[${idx}].question`);
                if (!faq.answer) incompleteFields.push(`faqs[${idx}].answer`);
              });
            }
            break;
          case 'faeReview':
            if (typeof product[field] !== 'object') {
              incompleteFields.push(`${field}(需要是对象)`);
            } else {
              if (!product[field].summary) incompleteFields.push('faeReview.summary');
              if (!product[field].keyPoints || !Array.isArray(product[field].keyPoints)) {
                incompleteFields.push('faeReview.keyPoints');
              }
            }
            break;
          case 'specs':
            if (typeof product[field] !== 'object' || Object.keys(product[field]).length === 0) {
              incompleteFields.push(`${field}(需要规格参数对象)`);
            }
            break;
          case 'features':
            if (!Array.isArray(product[field]) || product[field].length === 0) {
              incompleteFields.push(`${field}(需要特性数组)`);
            }
            break;
          case 'applications':
            if (!Array.isArray(product[field]) || product[field].length === 0) {
              incompleteFields.push(`${field}(需要应用场景数组)`);
            }
            break;
        }
      }
    }
    
    if (missingFields.length > 0) {
      console.log(`   ❌ 缺失字段: ${missingFields.join(', ')}`);
    }
    
    if (incompleteFields.length > 0) {
      console.log(`   ⚠️  不完整字段: ${incompleteFields.join(', ')}`);
    }
    
    if (missingFields.length === 0 && incompleteFields.length === 0) {
      console.log(`   ✅ 所有字段完整`);
    }
  }
}

console.log('\n========================================');
console.log('检查完成');
console.log('========================================');
