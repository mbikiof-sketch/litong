#!/usr/bin/env node

/**
 * 修复cosmo目录中的guanxi文件名链接
 */

const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'output', 'cosmo');

// 递归获取所有HTML文件
function getHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// 修复文件中的链接
function fixLinks(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // 替换 guanxi- 为 cosmo-
  if (content.includes('guanxi-')) {
    content = content.replace(/guanxi-/g, 'cosmo-');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${path.relative(outputDir, filePath)}`);
    return true;
  }
  
  return false;
}

// 主函数
function main() {
  console.log('Fixing guanxi- filenames in cosmo output...\n');
  
  if (!fs.existsSync(outputDir)) {
    console.log('❌ cosmo output directory not found');
    return;
  }
  
  const htmlFiles = getHtmlFiles(outputDir);
  let fixedCount = 0;
  
  for (const file of htmlFiles) {
    if (fixLinks(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
}

main();
