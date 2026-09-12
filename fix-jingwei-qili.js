const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'jingwei-qili');

// 1. Fix brand.json
console.log('Fixing brand.json...');
const brandPath = path.join(dataDir, 'brand.json');
const brand = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

// Fix coreProducts format
brand.coreProducts = [
  {
    "name": "HME-P Series (Pegasus)",
    "description": "High-performance FPGA series with LUT6 architecture, high-speed transceivers up to 12.5Gbps, and rich hard IP cores for demanding applications",
    "keywords": ["high-performance FPGA", "12.5Gbps transceiver", "PCIe Gen3", "LUT6 architecture"]
  },
  {
    "name": "HME-H Series (Hercules)",
    "description": "Cost-effective 22nm FPGA series offering excellent performance-to-price ratio for mainstream industrial and consumer applications",
    "keywords": ["cost-effective FPGA", "22nm process", "low power", "industrial FPGA"]
  },
  {
    "name": "HME-M Series (Mars)",
    "description": "Ultra-low power FPGA series designed for battery-powered and portable applications with advanced power management",
    "keywords": ["ultra-low power", "battery-powered", "IoT FPGA", "power management"]
  },
  {
    "name": "HME-A Series (Apollo)",
    "description": "High-end FPGA series with maximum logic capacity exceeding 500K LUT6, 28Gbps transceivers, and HBM support for data center applications",
    "keywords": ["high-end FPGA", "500K LUT6", "HBM memory", "data center", "AI acceleration"]
  }
];

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2));
console.log('brand.json fixed!');

// 2. Check products.json structure
console.log('\nChecking products.json...');
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Categories:', products.categories.length);
products.categories.forEach((cat, idx) => {
  console.log(`  Category ${idx + 1}: ${cat.name} - ${cat.products.length} products`);
});

// 3. Check solutions.json
console.log('\nChecking solutions.json...');
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
console.log('Solutions:', solutions.solutions.length);

// Check for placeholder content in customerCases
let placeholderCount = 0;
solutions.solutions.forEach(sol => {
  if (sol.customerCases) {
    sol.customerCases.forEach((c, idx) => {
      if (c.challenge && c.challenge.includes('[Data Pending]')) {
        console.log(`  Solution "${sol.title}" - Case ${idx + 1} has placeholder challenge`);
        placeholderCount++;
      }
    });
  }
});

// 4. Check support.json
console.log('\nChecking support.json...');
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
console.log('Articles:', support.articles ? support.articles.length : 0);

console.log('\n========================================');
console.log('Summary:');
console.log(`- Products: ${products.categories.reduce((sum, cat) => sum + cat.products.length, 0)} total (need 24)`);
console.log(`- Solutions: ${solutions.solutions.length} (need 4+)`);
console.log(`- Support Articles: ${support.articles ? support.articles.length : 0} (need 5+)`);
console.log(`- Placeholder Cases: ${placeholderCount}`);
console.log('========================================');
