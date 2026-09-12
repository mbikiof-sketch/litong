const fs = require('fs');
const path = require('path');

const outputDir = 'c:\\Users\\ymlt\\Desktop\\3\\output';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // 修复乱码箭头
  content = content.replace(/Learn More �\?/g, 'Learn More →');
  content = content.replace(/Read Article �\?/g, 'Read Article →');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
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
  
  return fixedCount;
}

console.log('Starting to fix garbled characters...');
const fixedCount = walkDir(outputDir, fixFile);
console.log(`\nTotal files fixed: ${fixedCount}`);
