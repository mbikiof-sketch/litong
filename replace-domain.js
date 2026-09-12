const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\ymlt\\Desktop\\3';
let replacedCount = 0;
let errorFiles = [];

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if file contains the old domain
    if (content.includes('ic-distributor.com')) {
      // Replace all occurrences
      const newContent = content.replace(/elec-distributor\.com/g, 'ic-distributor.com');
      fs.writeFileSync(filePath, newContent, 'utf-8');
      replacedCount++;
      console.log(`Replaced: ${filePath.replace(targetDir, '')}`);
    }
  } catch (err) {
    errorFiles.push(filePath);
    console.error(`Error processing ${filePath}: ${err.message}`);
  }
}

function walkDir(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    return;
  }
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (err) {
      continue;
    }
    
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

console.log('Starting domain replacement...');
walkDir(targetDir);
console.log(`\nCompleted! Replaced in ${replacedCount} files.`);
if (errorFiles.length > 0) {
  console.log(`\nErrors in ${errorFiles.length} files:`);
  errorFiles.forEach(f => console.log(`  - ${f}`));
}
