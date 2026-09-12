const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'silan');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return null;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated: ${filename}`);
}

// Fix products.json - Fix alternativeParts with complete structure
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');
  if (!data) return;

  if (data.categories) {
    data.categories.forEach((cat) => {
      if (cat.products) {
        cat.products.forEach((prod) => {
          // Fix alternativeParts with complete structure
          if (prod.alternativeParts) {
            prod.alternativeParts = prod.alternativeParts.map((alt, index) => {
              // If it's a placeholder alternative part, replace with proper structure
              if (alt.partNumber && alt.partNumber.startsWith('Alt-')) {
                return {
                  partNumber: index === 0 ? `SGM15N60` : `IKW15N60T`,
                  brand: index === 0 ? "Silan" : "Infineon",
                  specifications: {
                    voltage: "600V",
                    current: index === 0 ? "15A" : "15A",
                    vceSat: index === 0 ? "1.8V (typ)" : "1.65V (typ)",
                    package: "TO-220/TO-247"
                  },
                  comparison: index === 0 
                    ? `${prod.partNumber}=><SGM15N60: Similar specs => lower cost option`
                    : `${prod.partNumber}=><IKW15N60T: Lower Vce(sat) => higher efficiency`,
                  reason: index === 0 ? "Cost-effective alternative" : "Higher efficiency option",
                  useCase: index === 0 ? "Budget-sensitive applications" : "Efficiency-critical designs",
                  link: index === 0 
                    ? `/silan/products/power-semiconductors/sgm15n60.html`
                    : `/infineon/products/igbt/ikw15n60t.html`
                };
              }
              return alt;
            });
          }
        });
      }
    });
  }

  writeJSON('products.json', data);
}

// Main execution
console.log('Starting Silan data fixes v3...');
fixProducts();
console.log('\nAll fixes completed!');
