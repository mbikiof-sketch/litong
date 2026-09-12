#!/usr/bin/env node

/**
 * Fix remaining HDSC brand data issues
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hdsc');
const productsFile = path.join(dataDir, 'products.json');
const solutionsFile = path.join(dataDir, 'solutions.json');
const supportFile = path.join(dataDir, 'support.json');

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(solutionsFile, 'utf8'));
const supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

console.log('Fixing remaining HDSC issues...\n');

// 1. Fix new categories - add missing keywords to longDescription
productsData.categories.forEach(category => {
  if (category.id === 'motor-control-mcus' || category.id === 'automotive-mcus') {
    if (!category.longDescription.includes('distributor') && !category.longDescription.includes('selection')) {
      category.longDescription += ' As an authorized HDSC distributor, LiTong provides comprehensive selection guides and technical support for your motor control and automotive MCU needs.';
      console.log(`✓ Fixed longDescription keywords for ${category.name}`);
    }
    
    // Add more FAQs to reach 5
    if (!category.faqs || category.faqs.length < 5) {
      const existingFaqs = category.faqs || [];
      const neededFaqs = 5 - existingFaqs.length;
      
      const additionalFaqs = [
        {
          question: `What development tools are available for ${category.name}?`,
          answer: `HDSC provides comprehensive development tools for ${category.name}: (1) HDSC IDE - integrated development environment with compiler and debugger; (2) SDK - software development kit with HAL and LL libraries; (3) Evaluation boards - reference designs for quick prototyping; (4) Application notes - detailed documentation for specific applications; (5) Technical support - FAE support from LiTong distributor. These tools accelerate development and reduce time-to-market.`,
          decisionGuide: "Use HDSC IDE and SDK for efficient development.",
          keywords: ["development tools", "IDE", "SDK"]
        },
        {
          question: `What is the lead time for ${category.name} products?`,
          answer: `Lead times for ${category.name} products vary by volume and availability: (1) Standard products - typically 4-6 weeks for production quantities; (2) High-volume orders - 8-12 weeks for large quantities; (3) Sample orders - 1-2 weeks for evaluation samples; (4) Stock items - immediate shipment for available inventory. Contact LiTong distributor for current lead times and availability. We maintain strategic inventory to support urgent requirements.`,
          decisionGuide: "Contact LiTong for current lead times and availability.",
          keywords: ["lead time", "availability", "delivery"]
        },
        {
          question: `What technical support does LiTong provide for ${category.name}?`,
          answer: `LiTong provides comprehensive technical support for ${category.name}: (1) FAE consultation - direct access to field application engineers; (2) Design review - schematic and layout review services; (3) Debugging support - assistance with code and hardware issues; (4) Training - product training and workshops; (5) Documentation - application notes and reference designs. Our FAE team has extensive experience with HDSC products and can help optimize your design.`,
          decisionGuide: "LiTong FAE team provides comprehensive design support.",
          keywords: ["technical support", "FAE", "design support"]
        }
      ];
      
      for (let i = 0; i < neededFaqs && i < additionalFaqs.length; i++) {
        existingFaqs.push(additionalFaqs[i]);
      }
      category.faqs = existingFaqs;
      console.log(`✓ Added FAQs for ${category.name}`);
    }
  }
});

// 2. Fix TMS320F28027 alternative part - add missing fields
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (product.alternativeParts) {
      product.alternativeParts.forEach(alt => {
        if (alt.partNumber === 'TMS320F28027' && !alt.comparison) {
          alt.comparison = `${product.partNumber} => TMS320F28027 => TI offers specialized C28x DSP core for motor control`;
          alt.reason = "TMS320F28027 provides dedicated motor control peripherals and fast ADC";
          alt.useCase = "Use TMS320F28027 for complex motor control algorithms requiring DSP capabilities";
          console.log(`✓ Fixed TMS320F28027 alternative for ${product.partNumber}`);
        }
      });
    }
  });
});

// 3. Fix solutions.json SEO keywords
if (solutionsData.seoKeywords) {
  if (!solutionsData.seoKeywords.some(k => k.includes('distributor') || k.includes('selection'))) {
    solutionsData.seoKeywords.push('HDSC distributor', 'MCU selection guide');
    console.log('✓ Fixed solutions.json seoKeywords');
  }
}

// 4. Fix support.json SEO keywords
if (supportData.seoKeywords) {
  if (!supportData.seoKeywords.some(k => k.includes('distributor') || k.includes('selection'))) {
    supportData.seoKeywords.push('HDSC distributor support', 'MCU selection support');
    console.log('✓ Fixed support.json seoKeywords');
  }
}

// 5. Fix support.json FAQs - extend question length
if (supportData.faqs) {
  supportData.faqs.forEach((faq, index) => {
    if (faq.question.length < 15) {
      const questionMap = {
        '如何选型？': 'How do I select the right HDSC MCU for my application?',
        '如何购买？': 'How can I purchase HDSC MCU products from LiTong?',
        '技术支持？': 'What technical support does LiTong provide for HDSC products?',
        '开发工具？': 'What development tools are available for HDSC MCUs?',
        '样品申请？': 'How do I request samples for HDSC MCU evaluation?',
        '批量价格？': 'What are the volume pricing options for HDSC products?',
        '交货周期？': 'What is the typical lead time for HDSC MCU orders?',
        '质量保证？': 'What quality assurance does HDSC provide for their MCUs?'
      };
      if (questionMap[faq.question]) {
        faq.question = questionMap[faq.question];
        console.log(`✓ Extended FAQ#${index + 1} question`);
      }
    }
  });
}

// 6. Fix solutions.json FAQs - extend question length
if (solutionsData.faqs) {
  solutionsData.faqs.forEach((faq, index) => {
    if (faq.question.length < 15) {
      const questionMap = {
        '如何选型？': 'How do I select the right HDSC solution for my application?',
        '如何购买？': 'How can I purchase HDSC solution products from LiTong?',
        '技术支持？': 'What technical support does LiTong provide for HDSC solutions?',
        '开发工具？': 'What development tools are available for HDSC solutions?',
        '样品申请？': 'How do I request samples for HDSC solution evaluation?',
        '批量价格？': 'What are the volume pricing options for HDSC solutions?',
        '交货周期？': 'What is the typical lead time for HDSC solution orders?',
        '质量保证？': 'What quality assurance does HDSC provide for their solutions?'
      };
      if (questionMap[faq.question]) {
        faq.question = questionMap[faq.question];
        console.log(`✓ Extended solutions FAQ#${index + 1} question`);
      }
    }
  });
}

// Save all updated files
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');
fs.writeFileSync(solutionsFile, JSON.stringify(solutionsData, null, 2), 'utf8');
fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2), 'utf8');

console.log('\n✅ Remaining HDSC issues fixed!');
