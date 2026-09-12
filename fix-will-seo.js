/**
 * Fix Will Semiconductor SEO Keywords
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'will');

console.log('🔧 Fixing Will Semiconductor SEO Keywords\n');

// Fix solutions.json
const solutionsFile = path.join(dataDir, 'solutions.json');
let solutionsData = JSON.parse(fs.readFileSync(solutionsFile, 'utf8'));

// Check and fix seoKeywords
if (!solutionsData.seoKeywords.some(k => k.includes('distributor') || k.includes('distributor'))) {
  solutionsData.seoKeywords.push('Will Semiconductor distributor');
  console.log('✓ Added distributor keyword to solutions.json');
}
if (!solutionsData.seoKeywords.some(k => k.includes('selection') || k.includes('selection'))) {
  solutionsData.seoKeywords.push('Will Semiconductor selection guide');
  console.log('✓ Added selection keyword to solutions.json');
}

fs.writeFileSync(solutionsFile, JSON.stringify(solutionsData, null, 2));
console.log('✓ Updated solutions.json\n');

// Fix support.json
const supportFile = path.join(dataDir, 'support.json');
let supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

// Check and fix seoKeywords
if (!supportData.seoKeywords) {
  supportData.seoKeywords = [];
}
if (!supportData.seoKeywords.some(k => k.includes('distributor') || k.includes('distributor'))) {
  supportData.seoKeywords.push('Will Semiconductor distributor');
  console.log('✓ Added distributor keyword to support.json');
}
if (!supportData.seoKeywords.some(k => k.includes('selection') || k.includes('selection'))) {
  supportData.seoKeywords.push('Will Semiconductor selection guide');
  console.log('✓ Added selection keyword to support.json');
}

fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2));
console.log('✓ Updated support.json\n');

console.log('✅ SEO keywords fix complete!');
