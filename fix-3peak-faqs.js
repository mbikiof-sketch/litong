#!/usr/bin/env node
/**
 * 3peak FAQ修复脚本 - 添加缺失的decisionGuide和keywords
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'data', '3peak', 'products.json');
const rawData = fs.readFileSync(productsPath, 'utf8');
const data = JSON.parse(rawData);

// FAQ决策引导模板
const decisionGuideTemplates = [
  '建议您根据具体应用需求仔细评估此产品，如需更多技术支持请联系我们的FAE团队。',
  '如需了解更详细的产品信息和应用方案，请联系我们的技术支持团队获取专业建议。',
  '建议您参考产品数据手册进行设计，如有疑问欢迎联系我们的FAE工程师获取帮助。',
  '如需样品测试或技术咨询，请联系我们的销售团队安排FAE工程师提供支持服务。',
  '建议您评估产品性能指标是否符合需求，如需选型指导请联系我们的技术支持。'
];

// 生成keywords
function generateKeywords(question, answer) {
  const keywords = [];
  const text = (question + ' ' + answer).toLowerCase();
  
  // 提取技术关键词
  if (text.includes('voltage')) keywords.push('voltage', '电源电压');
  if (text.includes('current')) keywords.push('current', '电流');
  if (text.includes('temperature')) keywords.push('temperature', '温度');
  if (text.includes('package')) keywords.push('package', '封装');
  if (text.includes('offset')) keywords.push('offset', '失调电压');
  if (text.includes('bandwidth')) keywords.push('bandwidth', '带宽');
  if (text.includes('automotive')) keywords.push('automotive', '汽车级', 'AEC-Q100');
  if (text.includes('precision')) keywords.push('precision', '高精度');
  if (text.includes('power')) keywords.push('power', '功耗');
  if (text.includes('noise')) keywords.push('noise', '噪声');
  
  // 确保至少有3个关键词
  if (keywords.length < 3) {
    keywords.push('3peak', 'technical support', 'FAE');
  }
  
  return keywords.slice(0, 5); // 最多5个
}

// 处理每个产品
let fixCount = 0;
data.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.faqs && product.faqs.length > 0) {
      product.faqs.forEach((faq, index) => {
        let fixed = false;
        
        // 修复decisionGuide
        if (!faq.decisionGuide || faq.decisionGuide.length < 10) {
          faq.decisionGuide = decisionGuideTemplates[index % decisionGuideTemplates.length];
          fixed = true;
        }
        
        // 修复keywords
        if (!faq.keywords || faq.keywords.length === 0) {
          faq.keywords = generateKeywords(faq.question, faq.answer);
          fixed = true;
        }
        
        if (fixed) {
          fixCount++;
          console.log(`✅ Fixed FAQ for ${product.partNumber} #${index + 1}`);
        }
      });
    }
  });
});

// 保存修复后的数据
fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`\n✅ 3peak FAQ修复完成，共修复 ${fixCount} 处问题`);
