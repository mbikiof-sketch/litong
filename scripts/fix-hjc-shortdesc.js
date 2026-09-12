// 修复HJC产品shortDescription长度问题
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hjc');
const productsPath = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要修复的产品和正确的shortDescription
const fixes = {
  'HJCF 105K400V': 'HJC HJCF 105K400V film capacitor with 1µF capacitance and 400V rating. Ideal for DC filtering and coupling applications.',
  'HJCF 155K400V': 'HJC HJCF 155K400V film capacitor with 1.5µF capacitance and 400V rating. Suitable for motor run and power supply applications.',
  'HJC-CL21-104J-100V': 'HJC CL21 104J 100V polyester film capacitor for general purpose applications. Cost-effective solution for DC filtering.',
  'HJC-HC-500F-2.7V': 'HJC HC-500F-2.7V supercapacitor with 500F capacitance for extended backup power. High energy density EDLC technology.',
  'HJC-HC-1F-5.5V': 'HJC HC-1F-5.5V supercapacitor module with 5.5V rating for 3.3V/5V system backup. Series connected cells.'
};

let fixedCount = 0;

productsData.categories.forEach(category => {
  category.products.forEach(product => {
    const pn = product.partNumber;
    if (fixes[pn] && product.shortDescription !== fixes[pn]) {
      product.shortDescription = fixes[pn];
      console.log(`Fixed shortDescription for: ${pn}`);
      fixedCount++;
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`\n✅ Fixed ${fixedCount} shortDescription issues in HJC products`);
