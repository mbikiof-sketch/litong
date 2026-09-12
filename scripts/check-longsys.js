#!/usr/bin/env node
/**
 * 检查Longsys品牌数据
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'longsys', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('========================================');
console.log('Longsys Brand Data Check');
console.log('========================================\n');

let totalProducts = 0;
let compliantProducts = 0;
let nonCompliantProducts = 0;

const dimensionStats = {
  dimension1: { passed: 0, total: 0 },
  dimension2: { passed: 0, total: 0 },
  dimension3: { passed: 0, total: 0 },
  dimension4: { passed: 0, total: 0 },
  dimension5: { passed: 0, total: 0 }
};

productsData.categories.forEach(category => {
  console.log(`\n📁 Category: ${category.name} (${category.id})`);
  console.log(`   Products: ${category.products.length}`);
  totalProducts += category.products.length;
  
  category.products.forEach(product => {
    const faqs = product.faqs || [];
    const hasEnoughFaqs = faqs.length >= 5;
    
    // Check dimensions
    let d1 = faqs.some(f => f.question.toLowerCase().includes('spec') || f.question.toLowerCase().includes('parameter') || f.question.toLowerCase().includes('speed') || f.question.toLowerCase().includes('capacity'));
    let d2 = faqs.some(f => f.question.toLowerCase().includes('use') || f.question.toLowerCase().includes('how') || f.question.toLowerCase().includes('condition') || f.question.toLowerCase().includes('temperature'));
    let d3 = faqs.some(f => f.question.toLowerCase().includes('compare') || f.question.toLowerCase().includes('vs') || f.question.toLowerCase().includes('difference') || f.question.toLowerCase().includes('alternative'));
    let d4 = faqs.some(f => f.question.toLowerCase().includes('application') || f.question.toLowerCase().includes('use case') || f.question.toLowerCase().includes('scenario'));
    let d5 = faqs.some(f => f.question.toLowerCase().includes('price') || f.question.toLowerCase().includes('lead time') || f.question.toLowerCase().includes('stock') || f.question.toLowerCase().includes('delivery') || f.question.toLowerCase().includes('moq'));
    
    dimensionStats.dimension1.total++;
    dimensionStats.dimension2.total++;
    dimensionStats.dimension3.total++;
    dimensionStats.dimension4.total++;
    dimensionStats.dimension5.total++;
    
    if (d1) dimensionStats.dimension1.passed++;
    if (d2) dimensionStats.dimension2.passed++;
    if (d3) dimensionStats.dimension3.passed++;
    if (d4) dimensionStats.dimension4.passed++;
    if (d5) dimensionStats.dimension5.passed++;
    
    const isCompliant = hasEnoughFaqs && d1 && d2 && d3 && d4 && d5;
    
    if (isCompliant) {
      compliantProducts++;
    } else {
      nonCompliantProducts++;
      console.log(`   ⚠️  ${product.partNumber}: FAQ=${faqs.length}, D1=${d1}, D2=${d2}, D3=${d3}, D4=${d4}, D5=${d5}`);
    }
  });
});

console.log('\n========================================');
console.log('Summary');
console.log('========================================');
console.log(`Total Products: ${totalProducts}`);
console.log(`✅ Compliant: ${compliantProducts}`);
console.log(`⚠️  Non-compliant: ${nonCompliantProducts}`);
console.log(`Compliance Rate: ${(compliantProducts/totalProducts*100).toFixed(1)}%`);

console.log('\n📊 Dimension Coverage:');
console.log(`   D1 (Parameters): ${dimensionStats.dimension1.passed}/${dimensionStats.dimension1.total} (${(dimensionStats.dimension1.passed/dimensionStats.dimension1.total*100).toFixed(1)}%)`);
console.log(`   D2 (Conditions): ${dimensionStats.dimension2.passed}/${dimensionStats.dimension2.total} (${(dimensionStats.dimension2.passed/dimensionStats.dimension2.total*100).toFixed(1)}%)`);
console.log(`   D3 (Comparison): ${dimensionStats.dimension3.passed}/${dimensionStats.dimension3.total} (${(dimensionStats.dimension3.passed/dimensionStats.dimension3.total*100).toFixed(1)}%)`);
console.log(`   D4 (Applications): ${dimensionStats.dimension4.passed}/${dimensionStats.dimension4.total} (${(dimensionStats.dimension4.passed/dimensionStats.dimension4.total*100).toFixed(1)}%)`);
console.log(`   D5 (Procurement): ${dimensionStats.dimension5.passed}/${dimensionStats.dimension5.total} (${(dimensionStats.dimension5.passed/dimensionStats.dimension5.total*100).toFixed(1)}%)`);
