const fs = require('fs');
const path = require('path');

const outputDir = 'c:\\Users\\ymlt\\Desktop\\3\\output';

// 扩展的乱码映射表
const garbledMap = {
  // 中文乱码
  '响应�?': '响应式',
  '导航�?': '导航栏',
  '面包屑导�?': '面包屑导航',
  '产品�?': '产品中心',
  '解决方�?': '解决方案',
  '技术支�?': '技术支持',
  '关于我�?': '关于我们',
  '联系我�?': '联系我们',
  '新闻�?': '新闻中心',
  '品牌列�?': '品牌列表',
  
  // 英文链接乱码
  'Learn More �?': 'Learn More →',
  'Read Article �?': 'Read Article →',
  'Learn More �': 'Learn More →',
  'Read Article �': 'Read Article →',
  
  // CSS内容乱码
  "content: '�?": "content: '-'",
  '�?In Stock': '✓ In Stock',
  '�?Out of Stock': '✗ Out of Stock',
  
  // 其他常见乱码
  '�?': '',  // 单独的替换字符直接删除
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    let hasFix = false;
    
    // 替换所有已知的乱码
    for (const [garbled, correct] of Object.entries(garbledMap)) {
      if (content.includes(garbled)) {
        content = content.split(garbled).join(correct);
        hasFix = true;
      }
    }
    
    // 处理单独的 � 字符（如果不是上面已经处理的）
    // 这些通常是UTF-8编码错误导致的替换字符
    if (content.includes('�')) {
      // 替换常见的模式
      content = content.replace(/�\?/g, '');
      hasFix = true;
    }
    
    if (hasFix && content !== originalContent) {
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

console.log('Starting to fix all garbled characters...');
const fixedCount = walkDir(outputDir, fixFile);
console.log(`\nTotal files fixed: ${fixedCount}`);
