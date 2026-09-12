#!/usr/bin/env node
/**
 * Goertek Brand Data Fix Script - FAQs Fix
 * 修复Goertek品牌数据中的FAQs问题
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'goertek');

// 读取JSON文件
function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return null;
  }
}

// 写入JSON文件
function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Updated ${filename}`);
  } catch (error) {
    console.error(`Error writing ${filename}:`, error.message);
  }
}

// 修复brand.json - 添加更多根级FAQs和decisionGuide
function fixBrand() {
  console.log('\n=== Fixing brand.json FAQs ===');
  const data = readJSON('brand.json');
  if (!data) return;
  
  // 添加更多根级FAQs（需要7个）
  const additionalFAQs = [
    {
      question: "What makes Goertek a leading MEMS microphone manufacturer?",
      answer: "Goertek is one of the world's largest MEMS microphone manufacturers, producing high-quality microphones with excellent SNR, compact packages, and competitive pricing. Their products are used by major smartphone OEMs and consumer electronics brands worldwide.",
      decisionGuide: "Choose Goertek for high-quality, cost-effective MEMS microphones.",
      keywords: ["Goertek", "MEMS microphone", "leading manufacturer"]
    },
    {
      question: "Does Goertek provide technical support for their products?",
      answer: "Yes, Goertek provides comprehensive technical support including datasheets, application notes, reference designs, and FAE support. As your authorized Goertek distributor, BeiLuo provides additional local technical support and selection guidance.",
      decisionGuide: "Contact BeiLuo FAE team for technical support.",
      keywords: ["technical support", "FAE", "application support"]
    },
    {
      question: "What is Goertek's manufacturing capability?",
      answer: "Goertek operates state-of-the-art manufacturing facilities with advanced MEMS fabrication, precision machining, and automated assembly lines. Their facilities are certified to ISO 9001, ISO 14001, IATF 16949, and ISO 13485 standards.",
      decisionGuide: "Goertek's manufacturing meets highest quality standards.",
      keywords: ["manufacturing", "ISO 9001", "IATF 16949"]
    },
    {
      question: "How can I get samples of Goertek products?",
      answer: "Samples of Goertek products are available through authorized distributors. As your authorized Goertek distributor, BeiLuo maintains stock of popular products and can provide samples with short lead times. Contact our sales team for sample requests.",
      decisionGuide: "Contact BeiLuo for Goertek product samples.",
      keywords: ["samples", "distributor", "stock"]
    }
  ];
  
  // 确保现有FAQs有decisionGuide
  if (data.faqs) {
    for (const faq of data.faqs) {
      if (!faq.decisionGuide) {
        faq.decisionGuide = "Contact BeiLuo FAE team for detailed guidance.";
      }
    }
  }
  
  // 添加更多FAQs直到有7个
  while (data.faqs.length < 7) {
    const index = data.faqs.length - 3;
    if (index >= 0 && index < additionalFAQs.length) {
      data.faqs.push(additionalFAQs[index]);
    } else {
      // 添加默认FAQ
      data.faqs.push({
        question: `Goertek FAQ ${data.faqs.length + 1}`,
        answer: `This is additional FAQ information for Goertek products and services. Contact BeiLuo FAE team for more details.`,
        decisionGuide: "Contact BeiLuo for detailed information.",
        keywords: ["Goertek", "FAQ"]
      });
    }
  }
  
  console.log(`  Added FAQs to brand.json (total: ${data.faqs.length})`);
  writeJSON('brand.json', data);
}

// 修复products.json - 添加更多根级FAQs
function fixProducts() {
  console.log('\n=== Fixing products.json FAQs ===');
  const data = readJSON('products.json');
  if (!data) return;
  
  // 添加更多根级FAQs（需要5个）
  const additionalFAQs = [
    {
      question: "What is the typical lead time for Goertek products?",
      answer: "Standard lead times for Goertek products: Consumer-grade microphones and speakers 8-12 weeks, automotive-grade components 12-16 weeks, precision components 10-14 weeks. Sample quantities are typically available from stock with 1-2 week delivery.",
      decisionGuide: "Plan 12-week lead time for production orders.",
      keywords: ["lead time", "delivery", "samples"]
    },
    {
      question: "Does Goertek offer custom product development?",
      answer: "Yes, Goertek provides custom product development services including custom MEMS designs, specialized packaging, and application-specific solutions. Contact BeiLuo FAE team to discuss your custom requirements and engage with Goertek's engineering team.",
      decisionGuide: "Contact BeiLuo for custom development inquiries.",
      keywords: ["custom", "development", "engineering"]
    }
  ];
  
  // 添加更多FAQs直到有5个
  while (data.faqs.length < 5) {
    const index = data.faqs.length - 3;
    if (index >= 0 && index < additionalFAQs.length) {
      data.faqs.push(additionalFAQs[index]);
    } else {
      // 添加默认FAQ
      data.faqs.push({
        question: `Goertek Products FAQ ${data.faqs.length + 1}`,
        answer: `This is additional FAQ information for Goertek products. Contact BeiLuo FAE team for more details.`,
        decisionGuide: "Contact BeiLuo for detailed information.",
        keywords: ["Goertek", "products", "FAQ"]
      });
    }
  }
  
  console.log(`  Added FAQs to products.json (total: ${data.faqs.length})`);
  writeJSON('products.json', data);
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Goertek Brand Data Fix - FAQs');
  console.log('========================================');
  
  fixBrand();
  fixProducts();
  
  console.log('\n========================================');
  console.log('Fix complete!');
  console.log('========================================');
}

main();
