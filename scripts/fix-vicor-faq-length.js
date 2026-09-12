#!/usr/bin/env node
/**
 * Vicor品牌FAQ长度修复脚本
 * 修复FAQ答案长度不足的问题
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'vicor', 'products.json');

// 读取产品数据
let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取products.json失败:', error.message);
  process.exit(1);
}

// 需要修复的产品列表
const productsToFix = [
  'VTM48EF040T200A00',
  'PRM48NF480T200A00',
  'PFM48AF480T016A00',
  'BCM48BF240T1K6A00',
  'PSU-48V-1KW-RACK',
  'PSU-48V-3KW-CHASSIS',
  'PSU-48V-6KW-RACK'
];

// 扩展的FAQ答案
const extendedAnswers = {
  'VTM48EF040T200A00': `The VTM48EF040T200A00 is ideally suited for high-density power applications including data center servers, telecommunications equipment, industrial automation, and high-performance computing. Specific applications include: AI/ML accelerator power delivery, high-performance server processors, data center computing infrastructure, FPGA and ASIC power, and telecom infrastructure equipment. The module's high efficiency and density make it particularly valuable in space-constrained applications and systems where cooling is limited. For data center applications, the high efficiency directly translates to reduced operating costs and lower PUE.`,
  'PRM48NF480T200A00': `The PRM48NF480T200A00 is ideally suited for high-density power applications including data center servers, telecommunications equipment, industrial automation, and high-performance computing. Specific applications include: data center power distribution systems, telecom infrastructure power, industrial equipment power supplies, test and measurement systems, and medical device power. The module's high efficiency and density make it particularly valuable in space-constrained applications.`,
  'PFM48AF480T016A00': `The PFM48AF480T016A00 is ideally suited for industrial and commercial power applications including industrial controls, telecommunications equipment, LED lighting systems, test equipment, and medical devices. The module's universal AC input capability and high efficiency make it particularly valuable for applications requiring reliable 48V power from standard AC mains.`,
  'BCM48BF240T1K6A00': `The BCM48BF240T1K6A00 is ideally suited for high-power 24V distribution systems including industrial power distribution, data center infrastructure, telecom power systems, and high-power computing applications. The module's high efficiency and isolation make it particularly valuable for applications requiring reliable voltage conversion.`,
  'PSU-48V-1KW-RACK': `The PSU-48V-1KW-RACK is ideally suited for data center and telecommunications applications requiring reliable 48V power. Specific applications include: data center server racks, telecom infrastructure, enterprise server rooms, cloud computing facilities, and network equipment rooms. The system's N+1 redundancy and hot-swappable design ensure maximum uptime for critical applications.`,
  'PSU-48V-3KW-CHASSIS': `The PSU-48V-3KW-CHASSIS is ideally suited for industrial and commercial applications requiring high-power 48V supplies. Specific applications include: industrial automation systems, semiconductor manufacturing equipment, test and measurement systems, medical imaging equipment, and research facilities. The modular design and redundant cooling ensure reliable operation in demanding environments.`,
  'PSU-48V-6KW-RACK': `The PSU-48V-6KW-RACK is ideally suited for hyperscale data centers and high-performance computing clusters. Specific applications include: AI training farms, deep learning clusters, high-performance computing facilities, cloud infrastructure, and enterprise data centers. The system's high efficiency and N+1 redundancy ensure maximum availability for critical computing workloads.`
};

let fixedCount = 0;

// 遍历所有类别
const categories = productsData.categories || [];
categories.forEach(category => {
  const products = category.products || [];
  
  products.forEach(product => {
    if (productsToFix.includes(product.partNumber)) {
      console.log(`修复产品: ${product.partNumber}`);
      
      // 找到FAQ 6（应用场景问题）并扩展答案
      if (product.faqs && product.faqs.length >= 6) {
        const faq6 = product.faqs[5]; // 第6个FAQ（索引5）
        if (faq6.question.includes('applications') || faq6.question.includes('应用')) {
          const extendedAnswer = extendedAnswers[product.partNumber];
          if (extendedAnswer) {
            faq6.answer = extendedAnswer;
            fixedCount++;
            console.log(`  FAQ 6答案已扩展至 ${extendedAnswer.length} 字符`);
          }
        }
      }
    }
  });
});

// 保存修复后的数据
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 修复完成! 共修复 ${fixedCount} 个产品的FAQ长度`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
