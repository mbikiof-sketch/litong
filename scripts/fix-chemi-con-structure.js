/**
 * 修复chemi-con品牌LXS-4700uF-100V产品结构问题
 * 第1182行的FAQ数组没有正确结束，直接开始了下一个产品
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chemi-con');
const productsPath = path.join(dataDir, 'products.json');

console.log('🔧 修复chemi-con LXS-4700uF-100V产品结构问题...\n');

// 读取products.json
const content = fs.readFileSync(productsPath, 'utf8');
const productsData = JSON.parse(content);

// 找到Snap-in Capacitors分类
const snapInCategory = productsData.categories.find(cat => cat.slug === 'snap-in-capacitors');
if (!snapInCategory) {
  console.log('❌ 未找到Snap-in Capacitors分类');
  process.exit(1);
}

// 找到LXS-4700uF-100V产品
const lxs4700Product = snapInCategory.products.find(p => p.partNumber === 'LXS-4700uF-100V');
if (!lxs4700Product) {
  console.log('❌ 未找到LXS-4700uF-100V产品');
  process.exit(1);
}

console.log('📋 修复前FAQ数量:', lxs4700Product.faqs.length);

// 修复FAQ数组 - 只保留前6个正确的FAQ
// 第7个元素（索引6）开始是错误嵌套的产品数据
if (lxs4700Product.faqs.length > 6) {
  // 检查第7个元素是否是产品对象（有partNumber字段）
  const seventhItem = lxs4700Product.faqs[6];
  if (seventhItem && seventhItem.partNumber) {
    console.log('⚠️ 发现嵌套的产品对象:', seventhItem.partNumber);
    // 只保留前6个FAQ
    lxs4700Product.faqs = lxs4700Product.faqs.slice(0, 6);
    console.log('✓ 已移除嵌套的产品对象');
  }
}

console.log('📋 修复后FAQ数量:', lxs4700Product.faqs.length);

// 保存修复后的文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');

console.log('\n✅ 修复完成！');
console.log('💾 已保存到:', productsPath);
