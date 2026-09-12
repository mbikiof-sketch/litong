/**
 * 检查所有品牌的产品数量是否满足要求
 * 每个二级分类至少要有6个产品
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
const brands = fs.readdirSync(DATA_DIR).filter(dir => {
  const dirPath = path.join(DATA_DIR, dir);
  return fs.statSync(dirPath).isDirectory() && 
         fs.existsSync(path.join(dirPath, 'products.json'));
});

console.log(`检查 ${brands.length} 个品牌的产品数量\n`);
console.log('='.repeat(80));

let insufficientBrands = [];

brands.forEach(brand => {
  const productsPath = path.join(DATA_DIR, brand, 'products.json');
  const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  
  if (productsData.categories) {
    let brandIssues = [];
    
    productsData.categories.forEach(category => {
      const productCount = category.products ? category.products.length : 0;
      if (productCount < 6) {
        brandIssues.push({
          category: category.name || category.id,
          count: productCount,
          required: 6
        });
      }
    });
    
    if (brandIssues.length > 0) {
      insufficientBrands.push({
        brand: brand,
        issues: brandIssues
      });
      
      console.log(`\n[不足] ${brand}`);
      brandIssues.forEach(issue => {
        console.log(`  - ${issue.category}: ${issue.count}/${issue.required} 个产品`);
      });
    }
  }
});

console.log('\n' + '='.repeat(80));
console.log(`\n检查结果:`);
console.log(`- 品牌总数: ${brands.length}`);
console.log(`- 产品不足的品牌: ${insufficientBrands.length}`);

if (insufficientBrands.length > 0) {
  console.log(`\n需要补充产品的品牌列表:`);
  insufficientBrands.forEach(({brand, issues}) => {
    console.log(`\n${brand}:`);
    issues.forEach(issue => {
      console.log(`  - ${issue.category}: 需补充 ${issue.required - issue.count} 个产品`);
    });
  });
}

// 保存结果到文件
const resultPath = path.join(__dirname, '..', 'product_count_check_result.json');
fs.writeFileSync(resultPath, JSON.stringify(insufficientBrands, null, 2), 'utf8');
console.log(`\n详细结果已保存到: product_count_check_result.json`);
