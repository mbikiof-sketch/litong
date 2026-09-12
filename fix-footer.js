const fs = require('fs');
const path = require('path');

// 需要修复的目录
const outputDirs = ['output', 'output-root', 'output-batch1', 'output-batch2', 'output-all', 'output-assets'];

// 递归查找所有 HTML 文件
function findHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

// 修复单个文件
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;

  // 移除 ShanDong Headquarters 地址行
  content = content.replace(/\s*<li><strong>ShanDong Headquarters<\/strong><\/li>\n/g, '');
  content = content.replace(/\s*<li>No\. 290, Litianlou Township, Shanxian County, Shandong Province<\/li>\n/g, '');
  
  // 修改邮箱
  content = content.replace(/info@(core|elec)-distributor\.com/g, 'hk@ic-distributor.com');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// 主函数
let totalFixed = 0;

for (const dir of outputDirs) {
  const fullDir = path.join(__dirname, dir);
  if (!fs.existsSync(fullDir)) {
    console.log(`Directory not found: ${fullDir}`);
    continue;
  }

  console.log(`\nProcessing directory: ${dir}`);
  const htmlFiles = findHtmlFiles(fullDir);

  for (const file of htmlFiles) {
    if (fixFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);
