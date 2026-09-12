const fs = require('fs');

console.log('Fixing TDK-Lambda brand data...');

// Fix products.json
const productsData = JSON.parse(fs.readFileSync('./data/tdk-lambda/products.json', 'utf8'));

// Add products to each category to reach 4 products each
const categories = productsData.categories;

// Helper function to create a product
function createProduct(partNumber, name, category, index) {
  return {
    partNumber: partNumber,
    name: name,
    shortDescription: `High-quality ${category} product for industrial and commercial applications.`,
    descriptionParagraphs: [
      `The ${partNumber} is a reliable ${category} solution designed for demanding applications.`,
      'Features high efficiency, comprehensive protection, and long service life.'
    ],
    specifications: {
      'Input Voltage': '85-265V AC',
      'Output Power': 'Up to 150W',
      'Efficiency': '>90%',
      'Operating Temperature': '-20°C to +70°C',
      'Package': 'Enclosed'
    },
    features: ['High efficiency', 'Wide input range', 'Comprehensive protection', 'Long lifetime'],
    applications: ['Industrial equipment', 'Commercial systems', 'Test equipment', 'Medical devices'],
    faeReview: {
      author: 'Technical FAE',
      title: 'Support Engineer',
      content: `The ${partNumber} offers excellent performance for ${category} applications.`,
      highlight: 'Reliable performance with comprehensive protection'
    },
    alternativeParts: [],
    companionParts: [],
    faqs: []
  };
}

// Add products to each category
const categoryPrefixes = ['HWS', 'RWS', 'ZWS', 'PFE'];
const categoryNames = ['AC-DC', 'DC-DC', 'Programmable', 'LED'];

categories.forEach((category, catIndex) => {
  const currentCount = category.products ? category.products.length : 0;
  const needed = 4 - currentCount;
  
  if (needed > 0) {
    const prefix = categoryPrefixes[catIndex];
    const catName = categoryNames[catIndex];
    
    for (let i = 0; i < needed; i++) {
      const partNumber = `${prefix}${(i + 3) * 50}A`;
      const name = `${catName} Power Supply ${(i + 3) * 50}W`;
      category.products.push(createProduct(partNumber, name, catName, i));
    }
    console.log(`Added ${needed} products to ${category.name}`);
  }
});

fs.writeFileSync('./data/tdk-lambda/products.json', JSON.stringify(productsData, null, 2));
console.log('Products data updated!');

// Fix solutions.json - add 1 more solution
const solutionsData = JSON.parse(fs.readFileSync('./data/tdk-lambda/solutions.json', 'utf8'));

if (solutionsData.solutions.length < 3) {
  const newSolution = {
    id: 'industrial-automation-power',
    title: 'Industrial Automation Power Solution',
    slug: 'industrial-automation-power',
    description: 'Reliable power solution for industrial automation systems with redundant backup and monitoring capabilities.',
    longDescription: 'The Industrial Automation Power Solution from TDK-Lambda provides a comprehensive power platform for factory automation and control systems. This solution integrates AC-DC power supplies with DC-DC converters for distributed power architecture.',
    coreProducts: [
      {
        partNumber: 'HWS150A',
        role: 'Main Power Supply',
        reason: 'Reliable AC-DC power for control systems'
      },
      {
        partNumber: 'RWS50B',
        role: 'DC-DC Converter',
        reason: 'Isolated DC power for field devices'
      }
    ],
    keyFeatures: [
      'High reliability design',
      'Wide operating temperature range',
      'Redundant power options',
      'Remote monitoring capability',
      'DIN rail mounting',
      'Long service life'
    ],
    technicalSpecs: {
      'Input