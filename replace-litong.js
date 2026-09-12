const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\ymlt\\Desktop\\3';
let replacedCount = 0;
let errorFiles = [];

function replaceInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('BeiLuo')) {
      const newContent = content.replace(/BeiLuo/g, 'BeiLuo');
      fs.writeFileSync(filePath, newContent, 'utf-8');
      replacedCount++;
      console.log(`Replaced: ${filePath}`);
    }
  } catch (err) {
    errorFiles.push(filePath);
    console.error(`Error processing ${filePath}: ${err.message}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file !== 'node_modules' && file !== '.git') {
        walkDir(fullPath);
      }
    } else {
      // Process text files
      const ext = path.extname(file).toLowerCase();
      if (['.js', '.json', '.html', '.md', '.txt', '.css', '.xml', '.toml', '.ps1'].includes(ext)) {
        replaceInFile(fullPath);
      }
    }
  }
}

console.log('Starting replacement...');
walkDir(targetDir);
console.log(`\nCompleted! Replaced in ${replacedCount} files.`);
if (errorFiles.length > 0) {
  console.log(`\nErrors in ${errorFiles.length} files:`);
  errorFiles.forEach(f => console.log(`  - ${f}`));
}
