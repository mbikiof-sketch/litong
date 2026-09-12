const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'output', 'about', 'contact', 'index.html');

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/info@elec-distributor\.com/g, 'hk@ic-distributor.com');
fs.writeFileSync(filePath, content, 'utf8');

console.log('✓ Updated: Email changed to hk@ic-distributor.com');
