/**
 * Fix missing tags field in cmsemicor support.json
 */

const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'cmsemicor', 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

console.log('🔧 Fixing missing tags in support.json...\n');

// 为每篇文章添加tags
supportData.articles.forEach((article, index) => {
  if (!article.tags) {
    // 根据文章标题和分类生成tags
    const baseTags = [
      'Cmsemicon',
      'MCU',
      'Technical Support',
      article.category || 'General'
    ];
    
    // 根据标题添加特定tags
    const titleLower = article.title.toLowerCase();
    if (titleLower.includes('32-bit') || titleLower.includes('8-bit')) {
      baseTags.push('32-bit MCU', '8-bit MCU', 'Selection Guide');
    }
    if (titleLower.includes('touch')) {
      baseTags.push('Touch MCU', 'Capacitive Touch');
    }
    if (titleLower.includes('ide') || titleLower.includes('programming')) {
      baseTags.push('Development Tools', 'IDE', 'Programming');
    }
    if (titleLower.includes('adc')) {
      baseTags.push('ADC', 'Precision Measurement');
    }
    if (titleLower.includes('low power')) {
      baseTags.push('Low Power', 'Battery Applications');
    }
    
    article.tags = [...new Set(baseTags)]; // 去重
    console.log(`✅ Added tags to: ${article.title}`);
    console.log(`   Tags: ${article.tags.join(', ')}`);
  }
});

// 同时修复categories中的articles
supportData.categories.forEach(category => {
  if (category.articles) {
    category.articles.forEach(article => {
      if (!article.tags) {
        const baseTags = [
          'Cmsemicon',
          'MCU',
          category.title || 'Technical Support'
        ];
        
        const titleLower = article.title.toLowerCase();
        if (titleLower.includes('32-bit') || titleLower.includes('8-bit')) {
          baseTags.push('32-bit MCU', '8-bit MCU');
        }
        if (titleLower.includes('touch')) {
          baseTags.push('Touch MCU');
        }
        if (titleLower.includes('ide')) {
          baseTags.push('IDE', 'Development Tools');
        }
        if (titleLower.includes('adc')) {
          baseTags.push('ADC');
        }
        if (titleLower.includes('low power')) {
          baseTags.push('Low Power');
        }
        
        article.tags = [...new Set(baseTags)];
      }
    });
  }
});

// 保存更新后的文件
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('\n✅ Tags added successfully!');
