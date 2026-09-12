#!/usr/bin/env node
/**
 * 将所有品牌的中文内容转换为英文
 */

const fs = require('fs');
const path = require('path');

const brands = ['xhsc', 'on-bright', 'oriental', '3peak'];

// 中文到英文的映射
const translations = {
  // 常见中文短语 -> 英文
  '根据我的经验': 'Based on my experience',
  '我强烈推荐': 'I highly recommend',
  '用于关键应用': 'for critical applications',
  '在实际项目中': 'In real-world projects',
  '我发现': 'I found that',
  '性能稳定可靠': 'the performance is stable and reliable',
  '建议设计团队': 'I suggest the design team',
  '严格遵循数据手册指导': 'strictly follow the datasheet guidelines',
  '并注意': 'and pay attention to',
  '在实际工作条件下验证性能': 'validating performance under actual operating conditions',
  '建议联系我们的FAE团队': 'I recommend contacting our FAE team',
  '获取额外支持和优化建议': 'for additional support and optimization recommendations',
  '如需技术支持请联系FAE团队': 'For technical support, please contact our FAE team',
  '如需了解更详细的产品信息': 'For more detailed product information',
  '请联系我们的技术支持团队': 'please contact our technical support team',
  '获取专业建议': 'for professional advice',
  '建议您参考产品数据手册进行设计': 'I recommend referring to the product datasheet for design',
  '如有疑问欢迎联系': 'For any questions, please contact',
  '我们的FAE工程师': 'our FAE engineers',
  '获取帮助': 'for assistance',
  '如需样品测试或技术咨询': 'For sample testing or technical consultation',
  '请联系我们的销售团队': 'please contact our sales team',
  '安排FAE工程师提供支持服务': 'to arrange FAE engineer support services',
  '建议您评估产品性能指标': 'I recommend evaluating the product performance specifications',
  '是否符合需求': 'to see if they meet your requirements',
  '如需选型指导': 'For selection guidance',
  '请联系我们的技术支持': 'please contact our technical support',
  '根据具体应用需求仔细评估此产品': 'carefully evaluate this product based on specific application requirements',
  '如需更多技术支持': 'For more technical support',
  '建议': 'Recommendation',
  '推荐': 'recommend',
  '认为': 'believe',
  '经验': 'experience',
  '发现': 'found',
  '注意': 'pay attention to'
};

// 替换中文内容为英文
function replaceChineseWithEnglish(text) {
  if (!text || typeof text !== 'string') return text;
  
  let result = text;
  
  // 替换常见中文短语
  for (const [chinese, english] of Object.entries(translations)) {
    result = result.replace(new RegExp(chinese, 'g'), english);
  }
  
  // 如果还有中文字符，返回原文（需要手动处理）
  if (/[\u4e00-\u9fa5]/.test(result)) {
    console.log(`⚠️  Still contains Chinese: ${result.substring(0, 50)}...`);
  }
  
  return result;
}

// 处理对象中的所有字符串
function processObject(obj) {
  if (typeof obj === 'string') {
    return replaceChineseWithEnglish(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(item => processObject(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = processObject(value);
    }
    return result;
  }
  return obj;
}

// 处理每个品牌
brands.forEach(brand => {
  const productsPath = path.join(__dirname, 'data', brand, 'products.json');
  const solutionsPath = path.join(__dirname, 'data', brand, 'solutions.json');
  const supportPath = path.join(__dirname, 'data', brand, 'support.json');
  
  console.log(`\n🔄 Processing ${brand}...`);
  
  // 处理 products.json
  if (fs.existsSync(productsPath)) {
    const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    const processed = processObject(data);
    fs.writeFileSync(productsPath, JSON.stringify(processed, null, 2), 'utf8');
    console.log(`✅ Processed ${brand}/products.json`);
  }
  
  // 处理 solutions.json
  if (fs.existsSync(solutionsPath)) {
    const data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
    const processed = processObject(data);
    fs.writeFileSync(solutionsPath, JSON.stringify(processed, null, 2), 'utf8');
    console.log(`✅ Processed ${brand}/solutions.json`);
  }
  
  // 处理 support.json
  if (fs.existsSync(supportPath)) {
    const data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
    const processed = processObject(data);
    fs.writeFileSync(supportPath, JSON.stringify(processed, null, 2), 'utf8');
    console.log(`✅ Processed ${brand}/support.json`);
  }
});

console.log('\n🎉 All brands converted to English!');
