const fs = require('fs');

// 修复函数：确保对象有指定字段
function ensureFields(obj, fields, defaultValues = {}) {
  fields.forEach(field => {
    if (obj[field] === undefined) {
      obj[field] = defaultValues[field] !== undefined ? defaultValues[field] : [];
    }
  });
}

// 修复 st 品牌
function fixST() {
  console.log('\n修复 st 品牌...');
  
  // 修复 solutions.json
  const solutionsData = JSON.parse(fs.readFileSync('./data/st/solutions.json', 'utf8'));
  solutionsData.solutions.forEach(sol => {
    ensureFields(sol, ['coreProducts', 'keyFeatures', 'benefits']);
    if (!sol.longDescription) sol.longDescription = sol.description || '';
  });
  fs.writeFileSync('./data/st/solutions.json', JSON.stringify(solutionsData, null, 2));
  
  // 修复 support.json
  const supportData = JSON.parse(fs.readFileSync('./data/st/support.json', 'utf8'));
  supportData.articles.forEach(art => {
    if (!art.description) art.description = art.summary || '';
    if (!art.contentParagraphs) art.contentParagraphs = art.content || [''];
  });
  fs.writeFileSync('./data/st/support.json', JSON.stringify(supportData, null, 2));
  
  console.log('st 品牌修复完成');
}

// 修复 songle 品牌
function fixSongle() {
  console.log('\n修复 songle 品牌...');
  
  // 修复 products.json
  const productsData = JSON.parse(fs.readFileSync('./data/songle/products.json', 'utf8'));
  productsData.categories.forEach(cat => {
    cat.products.forEach(prod => {
      ensureFields(prod, ['alternativeParts', 'companionParts']);
    });
  });
  fs.writeFileSync('./data/songle/products.json', JSON.stringify(productsData, null, 2));
  
  // 修复 solutions.json
  const solutionsData = JSON.parse(fs.readFileSync('./data/songle/solutions.json', 'utf8'));
  solutionsData.solutions.forEach(sol => {
    ensureFields(sol, ['coreProducts', 'keyFeatures', 'faqs']);
    if (!sol.longDescription) sol.longDescription = sol.description || '';
  });
  fs.writeFileSync('./data/songle/solutions.json', JSON.stringify(solutionsData, null, 2));
  
  // 修复 support.json
  const supportData = JSON.parse(fs.readFileSync('./data/songle/support.json', 'utf8'));
  supportData.articles.forEach(art => {
    if (!art.description) art.description = art.summary || '';
    if (!art.contentParagraphs) art.contentParagraphs = art.content || [''];
  });
  fs.writeFileSync('./data/songle/support.json', JSON.stringify(supportData, null, 2));
  
  console.log('songle 品牌修复完成');
}

// 修复 starpower 品牌
function fixStarpower() {
  console.log('\n修复 starpower 品牌...');
  
  // 修复 products.json
  const productsData = JSON.parse(fs.readFileSync('./data/starpower/products.json', 'utf8'));
  productsData.categories.forEach(cat => {
    cat.products.forEach(prod => {
      if (!prod.name) prod.name = prod.partNumber || 'Unknown Product';
      if (!prod.specifications) prod.specifications = {};
    });
  });
  fs.writeFileSync('./data/starpower/products.json', JSON.stringify(productsData, null, 2));
  
  // 修复 solutions.json
  const solutionsData = JSON.parse(fs.readFileSync('./data/starpower/solutions.json', 'utf8'));
  solutionsData.solutions.forEach(sol => {
    ensureFields(sol, ['coreProducts', 'keyFeatures']);
    if (!sol.longDescription) sol.longDescription = sol.description || '';
  });
  fs.writeFileSync('./data/starpower/solutions.json', JSON.stringify(solutionsData, null, 2));
  
  // 修复 support.json
  const supportData = JSON.parse(fs.readFileSync('./data/starpower/support.json', 'utf8'));
  supportData.articles.forEach(art => {
    if (!art.description) art.description = art.summary || '';
    if (!art.contentParagraphs) art.contentParagraphs = art.content || [''];
  });
  fs.writeFileSync('./data/starpower/support.json', JSON.stringify(supportData, null, 2));
  
  console.log('starpower 品牌修复完成');
}

// 修复 starrystonetech 品牌
function fixStarrystonetech() {
  console.log('\n修复 starrystonetech 品牌...');
  
  // 修复 solutions.json
  const solutionsData = JSON.parse(fs.readFileSync('./data/starrystonetech/solutions.json', 'utf8'));
  solutionsData.solutions.forEach(sol => {
    ensureFields(sol, ['coreProducts', 'keyFeatures']);
    if (!sol.longDescription) sol.longDescription = sol.description || '';
  });
  fs.writeFileSync('./data/starrystonetech/solutions.json', JSON.stringify(solutionsData, null, 2));
  
  // 修复 support.json
  const supportData = JSON.parse(fs.readFileSync('./data/starrystonetech/support.json', 'utf8'));
  supportData.articles.forEach(art => {
    if (!art.description) art.description = art.summary || '';
    if (!art.contentParagraphs) art.contentParagraphs = art.content || [''];
  });
  fs.writeFileSync('./data/starrystonetech/support.json', JSON.stringify(supportData, null, 2));
  
  console.log('starrystonetech 品牌修复完成');
}

// 修复 superchip 品牌
function fixSuperchip() {
  console.log('\n修复 superchip 品牌...');
  
  // 修复 solutions.json
  const solutionsData = JSON.parse(fs.readFileSync('./data/superchip/solutions.json', 'utf8'));
  solutionsData.solutions.forEach(sol => {
    ensureFields(sol, ['coreProducts', 'keyFeatures']);
    if (!sol.longDescription) sol.longDescription = sol.description || '';
  });
  fs.writeFileSync('./data/superchip/solutions.json', JSON.stringify(solutionsData, null, 2));
  
  // 修复 support.json
  const supportData = JSON.parse(fs.readFileSync('./data/superchip/support.json', 'utf8'));
  supportData.articles.forEach(art => {
    if (!art.description) art.description = art.summary || '';
    if (!art.contentParagraphs) art.contentParagraphs = art.content || [''];
    if (!art.publishDate) art.publishDate = '2024-01-15';
  });
  fs.writeFileSync('./data/superchip/support.json', JSON.stringify(supportData, null, 2));
  
  console.log('superchip 品牌修复完成');
}

// 修复 tdk 品牌
function fixTDK() {
  console.log('\n修复 tdk 品牌...');
  
  // 修复 solutions.json
  const solutionsData = JSON.parse(fs.readFileSync('./data/tdk/solutions.json', 'utf8'));
  solutionsData.solutions.forEach(sol => {
    ensureFields(sol, ['coreProducts', 'keyFeatures']);
    if (!sol.longDescription) sol.longDescription = sol.description || '';
  });
  fs.writeFileSync('./data/tdk/solutions.json', JSON.stringify(solutionsData, null, 2));
  
  // 修复 support.json
  const supportData = JSON.parse(fs.readFileSync('./data/tdk/support.json', 'utf8'));
  supportData.articles.forEach(art => {
    if (!art.description) art.description = art.summary || '';
    if (!art.contentParagraphs) art.contentParagraphs = art.content || [''];
  });
  fs.writeFileSync('./data/tdk/support.json', JSON.stringify(supportData, null, 2));
  
  console.log('tdk 品牌修复完成');
}

// 修复 tdk-lambda 品牌
function fixTDKLambda() {
  console.log('\n修复 tdk-lambda 品牌...');
  
  // 修复 solutions.json
  const solutionsData = JSON.parse(fs.readFileSync('./data/tdk-lambda/solutions.json', 'utf8'));
  solutionsData.solutions.forEach(sol => {
    ensureFields(sol, ['coreProducts', 'keyFeatures']);
    if (!sol.longDescription) sol.longDescription = sol.description || '';
  });
  fs.writeFileSync('./data/tdk-lambda/solutions.json', JSON.stringify(solutionsData, null, 2));
  
  // 修复 support.json
  const supportData = JSON.parse(fs.readFileSync('./data/tdk-lambda/support.json', 'utf8'));
  supportData.articles.forEach(art => {
    if (!art.description) art.description = art.summary || '';
    if (!art.contentParagraphs) art.contentParagraphs = art.content || [''];
  });
  fs.writeFileSync('./data/tdk-lambda/support.json', JSON.stringify(supportData, null, 2));
  
  console.log('tdk-lambda 品牌修复完成');
}

// 执行所有修复
console.log('开始修复所有品牌数据...');

fixST();
fixSongle();
fixStarpower();
fixStarrystonetech();
fixSuperchip();
fixTDK();
fixTDKLambda();

console.log('\n========================================');
console.log('所有品牌数据修复完成！');
console.log('========================================');
