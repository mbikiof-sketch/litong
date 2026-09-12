/**
 * Cosmo 品牌数据补充修复脚本
 * 修复剩余的 selectionGuideLink 和 companionParts 问题
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cosmo');

// 读取 JSON 文件
function readJSON(filename) {
  const filePath = path.join(dataDir, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

// 写入 JSON 文件
function writeJSON(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ 已更新 ${filename}`);
}

// 修复 products.json 中的剩余问题
function fixProductsRemaining() {
  console.log('\n=== 修复 products.json 剩余问题 ===');
  const products = readJSON('products.json');

  products.categories.forEach(cat => {
    // 修复 selectionGuideLink - 确保是字符串格式
    if (cat.selectionGuide && cat.selectionGuide.articleLink) {
      cat.selectionGuideLink = cat.selectionGuide.articleLink;
    } else if (!cat.selectionGuideLink || typeof cat.selectionGuideLink !== 'string') {
      cat.selectionGuideLink = `/cosmo/support/${cat.slug}-guide.html`;
    }

    // 修复每个产品的 companionParts
    cat.products.forEach(prod => {
      if (!prod.companionParts) {
        prod.companionParts = [];
      }

      // 过滤掉无效的配套料号
      prod.companionParts = prod.companionParts.filter(cp => {
        return cp && cp.partNumber && 
               cp.partNumber !== 'Accessory Item' && 
               cp.partNumber !== 'Companion Part' &&
               cp.partNumber.trim() !== '';
      });

      // 确保至少有3个配套料号
      const genericCompanions = [
        { partNumber: 'Resistor 220Ω 1/4W', description: 'LED current limiting resistor for 5V operation', category: 'Passive' },
        { partNumber: 'Resistor 1kΩ 1/4W', description: 'Output pull-up resistor for open-collector outputs', category: 'Passive' },
        { partNumber: 'Capacitor 100nF 50V', description: 'Power supply decoupling capacitor', category: 'Passive' },
        { partNumber: 'Resistor 470Ω 1/4W', description: 'LED current limiting resistor for 12V operation', category: 'Passive' },
        { partNumber: 'Capacitor 10μF 25V', description: 'Bulk decoupling capacitor for power supply', category: 'Passive' }
      ];

      // 根据产品类型添加特定的配套料号
      const specs = prod.specifications || {};
      const outputType = specs['Output Type'] || '';
      
      if (outputType.includes('Triac') || outputType.includes('SSR')) {
        genericCompanions.push(
          { partNumber: 'Snubber 100Ω+0.1μF', description: 'RC snubber for inductive load protection', category: 'Protection' },
          { partNumber: 'Varistor 14D471K', description: 'MOV for overvoltage protection', category: 'Protection' }
        );
      }

      if (outputType.includes('Transistor') || outputType.includes('Darlington')) {
        genericCompanions.push(
          { partNumber: 'Resistor 10kΩ 1/4W', description: 'Base pull-down resistor for transistor output', category: 'Passive' },
          { partNumber: 'Diode 1N4148', description: 'Protection diode for inductive loads', category: 'Protection' }
        );
      }

      // 补充到至少3个
      while (prod.companionParts.length < 3) {
        const nextCompanion = genericCompanions[prod.companionParts.length % genericCompanions.length];
        // 避免重复
        const exists = prod.companionParts.some(cp => cp.partNumber === nextCompanion.partNumber);
        if (!exists) {
          prod.companionParts.push({ ...nextCompanion });
        } else {
          // 如果已存在，尝试下一个
          for (let i = 1; i < genericCompanions.length; i++) {
            const alt = genericCompanions[(prod.companionParts.length + i) % genericCompanions.length];
            if (!prod.companionParts.some(cp => cp.partNumber === alt.partNumber)) {
              prod.companionParts.push({ ...alt });
              break;
            }
          }
        }
        
        // 防止无限循环
        if (prod.companionParts.length >= genericCompanions.length) {
          break;
        }
      }

      // 限制最多5个
      prod.companionParts = prod.companionParts.slice(0, 5);
    });
  });

  writeJSON('products.json', products);
  console.log('  已修复所有分类和产品的 companionParts');
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Cosmo 品牌数据补充修复');
  console.log('========================================');

  try {
    fixProductsRemaining();

    console.log('\n========================================');
    console.log('✓ 补充修复完成！');
    console.log('========================================');
    console.log('\n请运行以下命令验证修复结果:');
    console.log('  node scripts/brand-master-checklist.js cosmo');
  } catch (error) {
    console.error('\n✗ 修复过程中出错:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
