const fs = require('fs');
const path = require('path');

const outputDir = 'c:\\Users\\ymlt\\Desktop\\3\\output';

// 常见的UTF-8乱码映射
const garbledMap = {
  '响应�?': '响应式',
  '导航�?': '导航栏',
  '面包屑导�?': '面包屑导航',
  'Learn More �?': 'Learn More →',
  'Read Article �?': 'Read Article →',
  'Learn More �': 'Learn More →',
  'Read Article �': 'Read Article →'
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    
    // 替换所有已知的乱码
    for (const [garbled, correct] of Object.entries(garbledMap)) {
      content = content.split(garbled).join(correct);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (err) {
    console.error(`Error fixing ${filePath}: ${err.message}`);
  }
  return false;
}

function walkDir(dir, callback) {
  let fixedCount = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fixedCount += walkDir(filePath, callback);
      } else if (file.endsWith('.html')) {
        if (callback(filePath)) {
          fixedCount++;
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}: ${err.message}`);
  }
  
  return fixedCount;
}

console.log('Starting to fix all UTF-8 garbled characters...');
const fixedCount = walkDir(outputDir, fixFile);
console.log(`\nTotal files fixed: ${fixedCount}`);
