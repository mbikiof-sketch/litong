#!/usr/bin/env node
/**
 * Jingwei-Qili特定产品FAQ修复脚本
 * 修复HME-P3A100和HME-A7C500的FAQ
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'jingwei-qili', 'products.json');

// 读取产品数据
let productsData;
try {
  productsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (error) {
  console.error('读取products.json失败:', error.message);
  process.exit(1);
}

// 维度5 FAQ（交期/采购决策）
const dim5FaqP3A100 = {
  question: "What is the typical lead time and MOQ for the HME-P3A100?",
  answer: "Standard lead time for HME-P3A100 is 8-12 weeks from manufacturing. BeiLuo Electronics maintains strategic inventory for this popular high-performance FPGA, enabling 3-5 day delivery for sample and small quantity orders (up to 50 pieces). Standard MOQ is 500 pieces with volume pricing tiers at 1,000, 5,000, and 10,000 pieces. Volume discounts range from 10% to 25% off standard pricing depending on quantity and commitment. For high-volume production (50,000+ pieces annually), we offer scheduled delivery programs with 6-8 week lead time and preferential pricing. Emergency delivery options include air freight (3-4 weeks) and expedited processing. We also support consignment inventory programs for qualified customers with predictable demand patterns.",
  decisionGuide: "Plan for 10-week lead time for production orders. For immediate prototyping needs, check our local stock availability. For high-volume projects, contact our sales team for volume pricing and scheduled delivery programs to optimize your supply chain.",
  keywords: ["lead time", "MOQ", "pricing", "delivery schedule", "FPGA inventory"]
};

const dim5FaqA7C500 = {
  question: "What is the typical lead time and pricing for the HME-A7C500?",
  answer: "Standard lead time for HME-A7C500 is 12-16 weeks due to its advanced 3D IC packaging and HBM2 integration. BeiLuo Electronics provides priority allocation for this flagship device, with sample quantities (1-10 pieces) typically available from stock for qualified customers. Standard MOQ is 100 pieces with volume pricing tiers at 500, 1,000, and 5,000 pieces. Volume discounts range from 15% to 30% off standard pricing. For strategic high-volume customers (10,000+ pieces annually), we offer dedicated allocation, scheduled delivery programs with 8-10 week lead time, and customized pricing. Given the device's premium positioning and manufacturing complexity, early engagement with our sales team is recommended for production planning. We also provide evaluation boards and reference designs to accelerate your development cycle.",
  decisionGuide: "Contact our sales team early for HME-A7C500 production planning due to longer lead times. For evaluation and prototyping, request sample units and evaluation boards. For high-volume projects, discuss strategic allocation and scheduled delivery programs.",
  keywords: ["lead time", "MOQ", "HME-A7C500 pricing", "delivery schedule", "flagship FPGA"]
};

// 维度3 FAQ（竞品对比）for A7C500
const dim3FaqA7C500 = {
  question: "How does the HME-A7C500 compare to Xilinx Versal and Intel Stratix 10?",
  answer: "The HME-A7C500 positions as a competitive alternative to Xilinx Versal AI Core and Intel Stratix 10 DX for high-end applications. With 500K LUT6, it matches the logic capacity of mid-range Versal devices while offering superior cost-effectiveness - typically 40-50% lower price than equivalent international offerings. The integrated HBM2e provides memory bandwidth comparable to Versal HBM series. The 56Gbps PAM4 transceivers enable 800G Ethernet support, matching the latest generation FPGAs. Key advantages include: domestic supply chain security, localized technical support, and compliance with procurement requirements. Compared to Versal's AI engines, HME-A7C500 uses a different AI acceleration architecture but achieves competitive performance for many workloads. For applications not requiring specific proprietary features, HME-A7C500 offers an excellent balance of capability, cost, and supply security.",
  decisionGuide: "Choose HME-A7C500 for high-capacity FPGA applications where cost-effectiveness and supply security are priorities. For applications requiring specific ecosystem compatibility or proprietary features, evaluate both options. Contact our FAE team for detailed technical comparison.",
  keywords: ["FPGA comparison", "Versal alternative", "Stratix 10 comparison", "high-end FPGA"]
};

// 查找并修复产品
let fixedCount = 0;
const categories = productsData.categories || [];

categories.forEach(category => {
  const products = category.products || [];
  
  products.forEach(product => {
    if (product.partNumber === 'HME-P3A100') {
      console.log('修复 HME-P3A100...');
      // 添加维度5 FAQ
      const hasDim5 = product.faqs.some(f => 
        f.question.toLowerCase().includes('lead time') || 
        f.question.toLowerCase().includes('moq')
      );
      if (!hasDim5) {
        product.faqs.push(dim5FaqP3A100);
        fixedCount++;
      }
    }
    
    if (product.partNumber === 'HME-A7C500') {
      console.log('修复 HME-A7C500...');
      // 添加维度3 FAQ
      const hasDim3 = product.faqs.some(f => 
        f.question.toLowerCase().includes('compare') || 
        f.question.toLowerCase().includes('versal') ||
        f.question.toLowerCase().includes('intel')
      );
      if (!hasDim3) {
        product.faqs.push(dim3FaqA7C500);
        fixedCount++;
      }
      
      // 添加维度5 FAQ
      const hasDim5 = product.faqs.some(f => 
        f.question.toLowerCase().includes('lead time') || 
        f.question.toLowerCase().includes('pricing')
      );
      if (!hasDim5) {
        product.faqs.push(dim5FaqA7C500);
        fixedCount++;
      }
    }
  });
});

// 保存修复后的数据
try {
  fs.writeFileSync(dataPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log(`\n✅ 修复完成! 共添加 ${fixedCount} 个FAQ`);
} catch (error) {
  console.error('保存失败:', error.message);
  process.exit(1);
}
