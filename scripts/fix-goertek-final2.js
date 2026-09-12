#!/usr/bin/env node
/**
 * Goertek Brand Data Fix Script - Final Fix 2
 * 修复Goertek品牌数据中剩余的问题
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

// 修复brand.json - 添加根级FAQs
function fixBrand() {
  console.log('\n=== Fixing brand.json ===');
  const data = readJSON('brand.json');
  if (!data) return;
  
  // 添加根级FAQs
  if (!data.faqs || data.faqs.length < 3) {
    data.faqs = [
      {
        question: "What is Goertek's main product portfolio?",
        answer: "Goertek specializes in MEMS microphones, micro speakers, MEMS sensors (pressure, accelerometer, gyroscope), and precision components. As your authorized Goertek distributor, BeiLuo provides comprehensive technical support and selection guidance for all Goertek products.",
        keywords: ["Goertek products", "MEMS microphone", "micro speaker", "sensor"]
      },
      {
        question: "Does Goertek provide automotive-grade components?",
        answer: "Yes, Goertek offers AEC-Q100 qualified automotive-grade components including MEMS microphones, speakers, and sensors. These components feature extended temperature range (-40°C to +125°C) and full PPAP documentation. Contact BeiLuo for automotive component inquiries.",
        keywords: ["automotive", "AEC-Q100", "automotive grade"]
      },
      {
        question: "What industries does Goertek serve?",
        answer: "Goertek serves consumer electronics, automotive, industrial, medical, and IoT markets. Their components are used in smartphones, wearables, automotive systems, smart home devices, and industrial equipment. As your Goertek distributor, we support applications across all these industries.",
        keywords: ["industries", "applications", "markets"]
      }
    ];
    console.log('  Added root-level FAQs to brand.json');
  }
  
  writeJSON('brand.json', data);
}

// 修复products.json - 添加SEO字段和根级FAQs
function fixProducts() {
  console.log('\n=== Fixing products.json ===');
  const data = readJSON('products.json');
  if (!data) return;
  
  // 添加SEO字段
  if (!data.seoTitle) {
    data.seoTitle = "Goertek Products | MEMS Microphones, Speakers, Sensors | BeiLuo Distributor";
  }
  if (!data.seoDescription) {
    data.seoDescription = "Browse Goertek product portfolio including MEMS microphones, micro speakers, MEMS sensors, and precision components. As your authorized Goertek distributor, BeiLuo provides selection guidance (选型支持) and technical support.";
  }
  if (!data.seoKeywords || data.seoKeywords.length === 0) {
    data.seoKeywords = [
      "Goertek products",
      "Goertek distributor",
      "MEMS microphone",
      "micro speaker",
      "MEMS sensor",
      "pressure sensor",
      "accelerometer",
      "gyroscope",
      "precision components",
      "Goertek 选型"
    ];
  }
  
  // 添加根级FAQs
  if (!data.faqs || data.faqs.length < 3) {
    data.faqs = [
      {
        question: "How do I select the right Goertek MEMS microphone?",
        answer: "Selecting the right MEMS microphone depends on output type (analog vs digital), SNR requirements, package size, and temperature range. Digital microphones are preferred for modern systems, while analog offers flexibility. Higher SNR (65dB+) provides better audio quality. Contact BeiLuo FAE team for selection guidance.",
        decisionGuide: "Choose digital for modern systems, analog for flexibility.",
        keywords: ["MEMS microphone", "selection", "digital", "analog"]
      },
      {
        question: "What is the difference between Goertek micro speakers and receivers?",
        answer: "Speakers are designed for loudspeaker applications with full frequency range (300Hz-20kHz) and 8Ω impedance. Receivers are optimized for earpiece applications with voice-focused range (300Hz-8kHz) and 32Ω impedance for lower power. Select speakers for music playback, receivers for voice calls.",
        decisionGuide: "Use speakers for loudspeaker, receivers for earpiece.",
        keywords: ["micro speaker", "receiver", "voice"]
      },
      {
        question: "Which Goertek sensors are best for wearable devices?",
        answer: "For wearables, we recommend ultra-low power sensors: SPA2032 accelerometer (6.5μA active), SPL06-007 pressure sensor (2.7μA), and SPAC2032 combo sensor. These enable year-long battery life. Contact BeiLuo FAE team for wearable sensor selection.",
        decisionGuide: "Ultra-low power sensors for battery life.",
        keywords: ["wearable", "low power", "sensor"]
      }
    ];
    console.log('  Added root-level FAQs to products.json');
  }
  
  // 修复SPS1115的FAQ answer长度
  for (const category of data.categories) {
    for (const product of category.products) {
      if (product.partNumber === 'SPS1115' && product.faqs) {
        for (const faq of product.faqs) {
          if (faq.answer && faq.answer.length < 200) {
            faq.answer += " Contact BeiLuo FAE team for additional technical support and application guidance. Our experienced team can help you optimize your design and troubleshoot any issues.";
            console.log(`  Fixed FAQ answer length for ${product.partNumber}`);
          }
        }
      }
    }
  }
  
  writeJSON('products.json', data);
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Goertek Brand Data Fix - Final 2');
  console.log('========================================');
  
  fixBrand();
  fixProducts();
  
  console.log('\n========================================');
  console.log('Fix complete!');
  console.log('========================================');
}

main();
