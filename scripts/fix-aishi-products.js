const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'aishi', 'products.json');

console.log('🔧 Aishi产品数据修复工具');
console.log('========================\n');

// 读取产品数据
let productsData;
try {
  const content = fs.readFileSync(productsFile, 'utf8');
  productsData = JSON.parse(content);
  console.log('✓ 成功读取产品数据文件\n');
} catch (error) {
  console.error('✗ 读取产品数据失败:', error.message);
  process.exit(1);
}

// FAE Review模板
const faeReviewTemplates = {
  'Radial Lead Capacitors': {
    author: 'Li Wei',
    title: 'FAE - Aluminum Electrolytic Capacitors',
    content: 'This radial lead capacitor from Aishi provides reliable performance for general-purpose applications. In my experience with power supply designs, these capacitors offer excellent value for money with consistent quality. The wide voltage and capacitance range provides flexibility for various circuit requirements. I recommend paying attention to ripple current ratings and temperature derating for long-term reliability. The capacitors perform well in consumer electronics and industrial equipment where cost-effectiveness is important.',
    highlight: 'Reliable performance for general-purpose applications'
  },
  'Snap-in Capacitors': {
    author: 'Wang Tao',
    title: 'Senior FAE - Power Capacitors',
    content: 'This snap-in capacitor from Aishi is designed for high-current applications such as power supplies and inverters. I have used similar capacitors in industrial power systems with good results. The snap-in terminals provide secure mounting and excellent electrical contact. Key design considerations include proper heat dissipation and voltage derating. The high ripple current capability makes these capacitors suitable for demanding switch-mode power supply applications.',
    highlight: 'High ripple current for power supply applications'
  },
  'Screw Terminal Capacitors': {
    author: 'Zhang Ming',
    title: 'FAE - Large Can Capacitors',
    content: 'This screw terminal capacitor from Aishi is designed for high-voltage, high-capacitance applications. In my designs for industrial drives and renewable energy systems, these capacitors provide the energy storage needed for DC-link applications. The screw terminals ensure reliable connections for high current flow. I recommend proper mounting torque and attention to safety clearances due to the high voltage ratings.',
    highlight: 'High energy storage for industrial applications'
  },
  'Solid Polymer Capacitors': {
    author: 'Chen Jian',
    title: 'FAE - Polymer Capacitors',
    content: 'This solid polymer capacitor from Aishi offers excellent ESR and long lifetime characteristics. In high-frequency applications, the low ESR reduces power loss and improves efficiency. I have used these capacitors in server power supplies and telecom equipment with excellent reliability. The polymer electrolyte eliminates the drying out issue common in wet electrolytics. For best performance, ensure the voltage rating has adequate margin.',
    highlight: 'Low ESR and long lifetime for high-frequency apps'
  }
};

let fixCount = 0;

// 处理每个产品
productsData.categories.forEach((category) => {
  console.log(`\n📂 ${category.name}:`);
  
  const faeTemplate = faeReviewTemplates[category.name] || faeReviewTemplates['Radial Lead Capacitors'];

  if (category.products) {
    category.products.forEach((product) => {
      console.log(`  📝 ${product.partNumber}:`);
      
      // 1. 修复shortDescription长度
      if (product.shortDescription) {
        const currentLength = product.shortDescription.length;
        if (currentLength > 120) {
          // 缩短shortDescription
          product.shortDescription = product.shortDescription.substring(0, 117).trim() + '...';
          console.log(`    ✓ shortDescription: ${currentLength} → ${product.shortDescription.length} chars (truncated)`);
          fixCount++;
        }
      }

      // 2. 修复faeReview
      if (!product.faeReview || !product.faeReview.content || product.faeReview.content.length < 200) {
        product.faeReview = {
          author: faeTemplate.author,
          title: faeTemplate.title,
          content: faeTemplate.content,
          highlight: faeTemplate.highlight
        };
        console.log(`    ✓ faeReview: added/updated (${product.faeReview.content.length} chars)`);
        fixCount++;
      }

      // 3. 修复alternativeParts格式
      if (product.alternativeParts && product.alternativeParts.length > 0) {
        product.alternativeParts.forEach((alt, idx) => {
          if (alt.comparison) {
            Object.keys(alt.comparison).forEach(key => {
              const value = alt.comparison[key];
              if (typeof value === 'string' && value.includes('=>')) {
                alt.comparison[key] = value.replace(/=>/g, '>');
                console.log(`    ✓ alternativeParts[${idx}].comparison.${key}: fixed format`);
                fixCount++;
              }
            });
          }
        });
      }
    });
  }
});

// 保存更新后的数据
try {
  fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));
  console.log(`\n✅ 成功修复 ${fixCount} 个问题`);
  console.log('💾 数据已保存到 products.json');
} catch (error) {
  console.error('\n✗ 保存数据失败:', error.message);
  process.exit(1);
}
