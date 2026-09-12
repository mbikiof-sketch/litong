#!/usr/bin/env node
/**
 * 为 crmicro 缺失的产品生成详情页
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const dataDir = path.join(__dirname, '..', 'data', 'crmicro');
const outputDir = path.join(__dirname, '..', 'output', 'crmicro');
const templatePath = path.join(__dirname, '..', 'templates', 'brands', 'product-detail.html');

// 确保目录存在
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 生成slug
function generateSlug(partNumber) {
  return partNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

console.log('========================================');
console.log('🔧 生成 crmicro 缺失的产品详情页');
console.log('========================================\n');

// 读取数据
const brandData = JSON.parse(fs.readFileSync(path.join(dataDir, 'brand.json'), 'utf8'));
const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'solutions.json'), 'utf8'));
const supportData = JSON.parse(fs.readFileSync(path.join(dataDir, 'support.json'), 'utf8'));

// 读取模板
const template = fs.readFileSync(templatePath, 'utf8');

// 缺失的产品列表
const missingProducts = [
  'CSJ20N65A', 'CRG40T60AN3H', 'CRG75T65AN3H', 'SMBJ12A', 
  'PESD5V0S1UB', 'PESD3V3S1UB', 'SMBJ24A', 'CR5224', 'CR5228', 'CR6880'
];

let generatedCount = 0;
let errorCount = 0;

for (const category of productsData.categories) {
  for (const product of category.products) {
    if (!missingProducts.includes(product.partNumber)) continue;
    
    try {
      const slug = generateSlug(product.partNumber);
      const categoryDir = path.join(outputDir, 'products', category.id);
      ensureDir(categoryDir);
      
      const outputPath = path.join(categoryDir, slug + '.html');
      
      // 准备模板数据
      const templateData = {
        brand: brandData,
        category: category,
        product: product,
        solutions: solutionsData,
        support: supportData,
        helpers: {
          generateSlug: generateSlug
        }
      };
      
      // 渲染模板
      const html = ejs.render(template, templateData, {
        filename: templatePath
      });
      
      fs.writeFileSync(outputPath, html);
      console.log(`✅ 生成: ${product.partNumber} -> ${path.relative(outputDir, outputPath)}`);
      generatedCount++;
    } catch (error) {
      console.log(`❌ 错误: ${product.partNumber} - ${error.message}`);
      errorCount++;
    }
  }
}

console.log('\n========================================');
console.log(`🎉 完成！生成了 ${generatedCount} 个页面，${errorCount} 个错误`);
console.log('========================================');
