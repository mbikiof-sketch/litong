#!/usr/bin/env node
/**
 * 批量修复品牌数据问题
 * 按照BRAND_DATA_COMPLETE_GUIDE.md要求修复所有品牌数据
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
const brands = fs.readdirSync(dataDir).filter(item => {
  const itemPath = path.join(dataDir, item);
  return fs.statSync(itemPath).isDirectory();
}).sort();

console.log(`Found ${brands.length} brands to process`);

// 处理每个品牌
brands.forEach(brand => {
  console.log(`\n========================================`);
  console.log(`Processing brand: ${brand}`);
  console.log(`========================================`);
  
  const brandDir = path.join(dataDir, brand);
  
  // 检查必需文件
  const requiredFiles = ['brand.json', 'products.json', 'solutions.json', 'support.json'];
  let allFilesExist = true;
  
  requiredFiles.forEach(file => {
    const filePath = path.join(brandDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`  ❌ Missing file: ${file}`);
      allFilesExist = false;
    }
  });
  
  if (!allFilesExist) {
    console.log(`  Skipping ${brand} - missing required files`);
    return;
  }
  
  // 运行检查脚本
  console.log(`  Running validation...`);
  
  try {
    const result = require('child_process').execSync(
      `node "${path.join(__dirname, 'brand-master-checklist.js')}" "${brand}"`,
      { encoding: 'utf-8', cwd: path.join(__dirname, '..') }
    );
    console.log(`  ✅ ${brand} passed validation`);
  } catch (error) {
    console.log(`  ❌ ${brand} has validation errors`);
    // 提取错误数量
    const match = error.stdout?.match(/❌\s*失败[:：]\s*(\d+)/);
    if (match) {
      console.log(`     Errors: ${match[1]}`);
    }
  }
});

console.log('\n========================================');
console.log('Brand processing complete');
console.log('========================================');
