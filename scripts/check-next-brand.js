/**
 * 检查按字母顺序下一个需要修复的品牌
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
const brands = fs.readdirSync(dataPath)
  .filter(item => {
    const itemPath = path.join(dataPath, item);
    return fs.statSync(itemPath).isDirectory();
  })
  .sort(); // 按字母顺序排序

console.log('🔍 按字母顺序检查品牌...\n');

// 找到ECEC之后需要修复的品牌
let foundECEC = false;
for (const brand of brands) {
  if (brand === 'ecec') {
    foundECEC = true;
    continue;
  }
  
  if (!foundECEC) continue;
  
  const brandPath = path.join(dataPath, brand);
  
  // 检查必需文件
  const requiredFiles = ['brand.json', 'products.json', 'solutions.json', 'support.json'];
  let allFilesExist = true;
  for (const file of requiredFiles) {
    const filePath = path.join(brandPath, file);
    if (!fs.existsSync(filePath)) {
      allFilesExist = false;
      break;
    }
  }
  
  if (!allFilesExist) {
    console.log(`${brand}: 缺少必需文件，跳过`);
    continue;
  }
  
  // 检查产品数据
  const productsPath = path.join(brandPath, 'products.json');
  try {
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    let needsFix = false;
    let issues = [];
    
    if (productsData.categories) {
      productsData.categories.forEach(category => {
        const productCount = category.products ? category.products.length : 0;
        if (productCount < 6) {
          needsFix = true;
          issues.push(`${category.name}(${productCount}/6)`);
        }
      });
    }
    
    // 检查解决方案
    const solutionsPath = path.join(brandPath, 'solutions.json');
    let solutionCount = 0;
    if (fs.existsSync(solutionsPath)) {
      const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
      solutionCount = solutionsData.solutions ? solutionsData.solutions.length : 0;
      if (solutionCount < 4) {
        needsFix = true;
        issues.push(`解决方案(${solutionCount}/4)`);
      }
    }
    
    // 检查支持文章
    const supportPath = path.join(brandPath, 'support.json');
    let articleCount = 0;
    if (fs.existsSync(supportPath)) {
      const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
      articleCount = supportData.articles ? supportData.articles.length : 0;
      if (articleCount < 5) {
        needsFix = true;
        issues.push(`支持文章(${articleCount}/5)`);
      }
    }
    
    if (needsFix) {
      console.log(`📦 ${brand.toUpperCase()}: 需要修复`);
      console.log(`   问题: ${issues.join(', ')}`);
      break; // 只显示第一个需要修复的品牌
    }
  } catch (e) {
    console.log(`${brand}: 数据解析错误`);
  }
}
