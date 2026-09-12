const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\ymlt\\Desktop\\3';
let processedCount = 0;
let errorFiles = [];

function fixSEOInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    // Get relative path for canonical URL
    const relativePath = filePath.replace(targetDir, '').replace(/\\/g, '/');
    const canonicalUrl = `https://ic-distributor.com${relativePath}`;
    
    // Check if file has canonical tag
    if (!content.includes('rel="canonical"')) {
      // Add canonical tag before </head>
      const canonicalTag = `  <link rel="canonical" href="${canonicalUrl}">\n`;
      content = content.replace('</head>', canonicalTag + '</head>');
      modified = true;
    }
    
    // Check if file has viewport meta
    if (!content.includes('viewport')) {
      const viewportTag = '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
      content = content.replace('<head>', '<head>\n' + viewportTag);
      modified = true;
    }
    
    // Check if file has charset
    if (!content.includes('charset=')) {
      const charsetTag = '  <meta charset="UTF-8">\n';
      content = content.replace('<head>', '<head>\n' + charsetTag);
      modified = true;
    }
    
    // Check if file has robots meta
    if (!content.includes('name="robots"')) {
      const robotsTag = '  <meta name="robots" content="index, follow">\n';
      content = content.replace('</head>', robotsTag + '</head>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      processedCount++;
      console.log(`Fixed: ${relativePath}`);
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
      // Skip excluded directories
      if (!['node_modules', '.git', 'data', 'scripts', 'assets'].includes(file)) {
        walkDir(fullPath);
      }
    } else if (file.endsWith('.html')) {
      fixSEOInFile(fullPath);
    }
  }
}

console.log('Starting SEO fix for all HTML pages...');
walkDir(targetDir);
console.log(`\nCompleted! Fixed ${processedCount} files.`);
if (errorFiles.length > 0) {
  console.log(`\nErrors in ${errorFiles.length} files:`);
  errorFiles.forEach(f => console.log(`  - ${f}`));
}
