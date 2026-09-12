const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'changdian', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Adding more Changdian products...\n');

// Additional products to add
const additionalProducts = {
  'Diodes': [
    {
      partNumber: "FR607",
      name: "快恢复二极管 6A 1000V",
      shortDescription: "FR607是6A大电流快恢复二极管，反向耐压1000V，反向恢复时间500ns，适用于大功率高频开关电源。",
      category: "二极管",
      series: "FR",
      specifications: {
        "Type": "Fast Recovery",
        "Forward Current": "6A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.3V max",
        "Reverse Recovery Time": "500ns max",
        "Package": "TO-220AC",
        "Operating Temperature": "-65°C to +150°C"
      },
      slug: "fr607"
    },
    {
      partNumber: "MUR1100",
      name: "超快恢复二极管 1A 1000V",
      shortDescription: "MUR1100是超快恢复二极管，反向恢复时间仅50ns，适用于高频开关电源和PFC电路。",
      category: "二极管",
      series: "MUR",
      specifications: {
        "Type": "Ultra Fast Recovery",
        "Forward Current": "1A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.7V max",
        "Reverse Recovery Time": "50ns max",
        "Package": "DO-41",
        "Operating Temperature": "-65°C to +175°C"
      },
      slug: "mur1100"
    },
    {
      partNumber: "MUR3100",
      name: "超快恢复二极管 3A 1000V",
      shortDescription: "MUR3100是3A超快恢复二极管，反向恢复时间50ns，适用于高频大电流开关电源。",
      category: "二极管",
      series: "MUR",
      specifications: {
        "Type": "Ultra Fast Recovery",
        "Forward Current": "3A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.7V max",
        "Reverse Recovery Time": "50ns max",
        "Package": "TO-220AC",
        "Operating Temperature": "-65°C to +150°C"
      },
      slug: "mur3100"
    },
    {
      partNumber: "6A10",
      name: "标准整流二极管 6A 1000V",
      shortDescription: "6A10是6A大电流标准整流二极管，采用R-6封装，适用于大电流工频整流应用。",
      category: "二极管",
      series: "6A",
      specifications: {
        "Type": "Standard Rectifier",
        "Forward Current": "6A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "0.95V max",
        "Reverse Recovery Time": "2μs typ",
        "Package": "R-6",
        "Operating Temperature": "-65°C to +175°C"
      },
      slug: "6a10"
    }
  ],
  'Rectifiers': [
    {
      partNumber: "GBJ3510",
      name: "单相桥式整流器 35A 1000V",
      shortDescription: "GBJ3510是35A超大电流单相桥式整流器，适用于大功率工业电源和焊接设备。",
      category: "整流器",
      series: "GBJ",
      specifications: {
        "Type": "Single Phase Bridge",
        "Forward Current": "35A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.05V per element",
        "Package": "GBJ",
        "Operating Temperature": "-55°C to +150°C"
      },
      slug: "gbj3510"
    },
    {
      partNumber: "KBPC1510",
      name: "单相桥式整流器 15A 1000V 金属壳",
      shortDescription: "KBPC1510是15A单相桥式整流器，采用金属壳封装，散热性能优异，适合 chassis 安装。",
      category: "整流器",
      series: "KBPC",
      specifications: {
        "Type": "Single Phase Bridge",
        "Forward Current": "15A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.1V per element",
        "Package": "KBPC",
        "Operating Temperature": "-55°C to +150°C"
      },
      slug: "kbpc1510"
    },
    {
      partNumber: "KBPC2510",
      name: "单相桥式整流器 25A 1000V 金属壳",
      shortDescription: "KBPC2510是25A大电流单相桥式整流器，金属壳封装，适合高功率工业应用。",
      category: "整流器",
      series: "KBPC",
      specifications: {
        "Type": "Single Phase Bridge",
        "Forward Current": "25A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.1V per element",
        "Package": "KBPC",
        "Operating Temperature": "-55°C to +150°C"
      },
      slug: "kbpc2510"
    },
    {
      partNumber: "GBJ1506",
      name: "单相桥式整流器 15A 600V",
      shortDescription: "GBJ1506是15A单相桥式整流器，600V耐压，适合110V交流输入应用。",
      category: "整流器",
      series: "GBJ",
      specifications: {
        "Type": "Single Phase Bridge",
        "Forward Current": "15A",
        "Reverse Voltage": "600V",
        "Forward Voltage": "1.0V per element",
        "Package": "GBJ",
        "Operating Temperature": "-55°C to +150°C"
      },
      slug: "gbj1506"
    }
  ],
  'MOSFETs': [
    {
      partNumber: "IRF640N",
      name: "N沟道功率MOSFET 18A 200V",
      shortDescription: "IRF640N是200V N沟道功率MOSFET，适合高压应用如PFC电路和逆变器。",
      category: "MOSFET",
      series: "IRF",
      specifications: {
        "Type": "N-Channel",
        "VDS": "200V",
        "ID": "18A",
        "RDS(on)": "180mΩ",
        "Qg": "67nC",
        "Package": "TO-220",
        "Operating Temperature": "-55°C to +175°C"
      },
      slug: "irf640n"
    },
    {
      partNumber: "IRF1405",
      name: "N沟道功率MOSFET 169A 169V",
      shortDescription: "IRF1405是169A超大电流N沟道功率MOSFET，5mΩ超低导通电阻，适合超大电流应用。",
      category: "MOSFET",
      series: "IRF",
      specifications: {
        "Type": "N-Channel",
        "VDS": "169V",
        "ID": "169A",
        "RDS(on)": "5mΩ",
        "Qg": "250nC",
        "Package": "TO-220",
        "Operating Temperature": "-55°C to +175°C"
      },
      slug: "irf1405"
    },
    {
      partNumber: "IRF9540N",
      name: "P沟道功率MOSFET 23A 100V",
      shortDescription: "IRF9540N是100V P沟道功率MOSFET，适合高边开关应用，与IRF540N配对使用。",
      category: "MOSFET",
      series: "IRF",
      specifications: {
        "Type": "P-Channel",
        "VDS": "100V",
        "ID": "23A",
        "RDS(on)": "117mΩ",
        "Qg": "91nC",
        "Package": "TO-220",
        "Operating Temperature": "-55°C to +175°C"
      },
      slug: "irf9540n"
    },
    {
      partNumber: "IRLZ44N",
      name: "逻辑电平N沟道MOSFET 47A 55V",
      shortDescription: "IRLZ44N是逻辑电平N沟道MOSFET，4.5V栅极驱动即可完全导通，适合单片机直接驱动。",
      category: "MOSFET",
      series: "IRL",
      specifications: {
        "Type": "N-Channel Logic Level",
        "VDS": "55V",
        "ID": "47A",
        "RDS(on)": "22mΩ @ VGS=5V",
        "Qg": "48nC",
        "Package": "TO-220",
        "Operating Temperature": "-55°C to +175°C"
      },
      slug: "irlz44n"
    }
  ]
};

// Add products to each category
let addedCount = 0;

productsData.categories.forEach((category) => {
  const categoryKey = category.name === 'Diodes' ? 'Diodes' : 
                      category.name === 'Rectifiers' ? 'Rectifiers' : 
                      category.name === 'MOSFET' ? 'MOSFETs' : null;
  
  if (categoryKey && additionalProducts[categoryKey]) {
    const currentCount = category.products.length;
    const neededCount = 6 - currentCount;
    
    if (neededCount > 0) {
      const productsToAdd = additionalProducts[categoryKey].slice(0, neededCount);
      
      // Add minimal required fields for each product
      productsToAdd.forEach(product => {
        const fullProduct = {
          ...product,
          descriptionParagraphs: [
            `${product.name}是长电科技生产的优质半导体器件。`,
            `采用${product.specifications.Package}封装，具有良好的散热性能和可靠性。`,
            `广泛应用于电源、工业控制、汽车电子等领域。`
          ],
          features: [
            `${product.specifications['Forward Current'] || product.specifications['ID']}额定值`,
            `${product.specifications['Reverse Voltage'] || product.specifications['VDS']}耐压`,
            `${product.specifications.Package}封装`,
            "高可靠性",
            "符合RoHS标准"
          ],
          applications: [
            "开关电源",
            "工业控制",
            "汽车电子",
            "消费电子"
          ],
          datasheet: `/datasheets/${product.partNumber}.pdf`,
          stock: "In Stock",
          moq: 100,
          leadTime: "2-4 weeks",
          faqs: [
            {
              question: `${product.partNumber}的主要参数是什么？`,
              answer: `${product.name}，采用${product.specifications.Package}封装。具体参数请参考数据手册。`,
              decisionGuide: "根据应用需求选择合适规格。",
              keywords: [product.partNumber, "参数", "规格"]
            }
          ],
          faeReview: {
            author: "FAE工程师",
            content: `${product.partNumber}是常用的半导体器件，性能稳定可靠。适合各种应用场景。`,
            highlight: `${product.name}，性能稳定可靠，适合各种应用场景。具有良好的性价比和供货稳定性。`
          },
          alternativeParts: [
            {
              partNumber: category.products[0].partNumber,
              brand: "Changdian",
              specifications: category.products[0].specifications,
              comparison: `${product.partNumber}=><${category.products[0].partNumber}: Similar specifications, alternative option`,
              reason: "替代选项",
              useCase: "相似应用",
              link: `/changdian/products/${category.slug}/${category.products[0].slug}.html`
            }
          ],
          companionParts: [
            {
              partNumber: category.products[0].partNumber,
              description: "配套产品",
              link: `/changdian/products/${category.slug}/${category.products[0].slug}.html`,
              category: category.name
            }
          ]
        };
        
        category.products.push(fullProduct);
      });
      
      addedCount += productsToAdd.length;
      console.log(`✓ Added ${productsToAdd.length} products to ${category.name}`);
    } else {
      console.log(`✓ ${category.name} already has ${currentCount} products`);
    }
  }
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Added ${addedCount} products total.`);
console.log('\n📊 Final product counts per category:');
productsData.categories.forEach((category) => {
  console.log(`   ${category.name}: ${category.products.length} products`);
});
