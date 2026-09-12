#!/usr/bin/env node

/**
 * 将Guanxi替换为Cosmo
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'guanxi');

// 需要处理的文件
const files = ['products.json', 'solutions.json', 'support.json', 'news.json'];

// 替换规则（按顺序执行）
const replacements = [
  // SEO相关内容
  { from: /Guanxi Products/g, to: 'Cosmo Products' },
  { from: /Guanxi Solutions/g, to: 'Cosmo Solutions' },
  { from: /Guanxi Support/g, to: 'Cosmo Support' },
  { from: /Guanxi News/g, to: 'Cosmo News' },
  
  // 描述中的Guanxi (Cosmo) 或 Guanxi
  { from: /Guanxi \(Cosmo\)/g, to: 'Cosmo' },
  { from: /Browse Guanxi/g, to: 'Browse Cosmo' },
  { from: /authorized Guanxi/g, to: 'authorized Cosmo' },
  { from: /Guanxi distributor/g, to: 'Cosmo distributor' },
  { from: /Guanxi 选型/g, to: 'Cosmo 选型' },
  
  // keywords
  { from: /"Guanxi products"/g, to: '"Cosmo products"' },
  { from: /"Guanxi distributor"/g, to: '"Cosmo distributor"' },
  { from: /"Guanxi solutions"/g, to: '"Cosmo solutions"' },
  { from: /"Guanxi support"/g, to: '"Cosmo support"' },
  
  // FAQ问题
  { from: /does Guanxi/g, to: 'does Cosmo' },
  { from: /of Guanxi/g, to: 'of Cosmo' },
  { from: /for Guanxi/g, to: 'for Cosmo' },
  { from: /Guanxi offer/g, to: 'Cosmo offer' },
  { from: /Guanxi SSR/g, to: 'Cosmo SSR' },
  { from: /Guanxi photocoupler/g, to: 'Cosmo photocoupler' },
  { from: /Guanxi reed relay/g, to: 'Cosmo reed relay' },
  { from: /Guanxi solid state relay/g, to: 'Cosmo solid state relay' },
  { from: /Guanxi's/g, to: "Cosmo's" },
  { from: /Guanxi products/g, to: 'Cosmo products' },
  { from: /Guanxi serve/g, to: 'Cosmo serve' },
  { from: /Guanxi maintain/g, to: 'Cosmo maintain' },
  { from: /Guanxi provide/g, to: 'Cosmo provide' },
  
  // 长描述
  { from: /Guanxi Electronics/g, to: 'Cosmo Electronics' },
  { from: /Guanxi optocoupler/g, to: 'Cosmo optocoupler' },
  { from: /Guanxi photocouplers/g, to: 'Cosmo photocouplers' },
  { from: /Guanxi SSRs/g, to: 'Cosmo SSRs' },
  { from: /Guanxi reed relays/g, to: 'Cosmo reed relays' },
  { from: /Guanxi solid state relays/g, to: 'Cosmo solid state relays' },
  
  // 其他常见形式
  { from: /Guanxi, also known as Cosmo/g, to: 'Cosmo' },
  { from: /also known as Cosmo Electronics/g, to: '' },
  { from: /\(also known as Cosmo Electronics\)/g, to: '' },
  
  // 单独出现的Guanxi（作为品牌名）
  { from: /"Guanxi"/g, to: '"Cosmo"' },
];

files.forEach(filename => {
  const filePath = path.join(dataDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ File not found: ${filename}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  replacements.forEach(({ from, to }) => {
    if (from.test(content)) {
      content = content.replace(from, to);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filename}`);
  } else {
    console.log(`⏭️ No changes: ${filename}`);
  }
});

console.log('\n✅ All files processed!');
