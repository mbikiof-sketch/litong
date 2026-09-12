#!/usr/bin/env node
/**
 * Narada Brand Data Quick Fix Script
 * Fixes validation issues - Product count and SEO keywords
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'narada');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

console.log('\n=== Fixing Narada Data ===\n');

// Fix products.json
const productsData = readJSON('products.json');

// Add SEO keywords
const currentKeywords = productsData.seoKeywords || [];
if (!currentKeywords.some(k => k.toLowerCase().includes('distributor'))) {
  productsData.seoKeywords.push('Narada battery distributor', 'Narada authorized distributor');
  console.log('✓ Added distributor keywords');
}
if (!currentKeywords.some(k => k.toLowerCase().includes('selection'))) {
  productsData.seoKeywords.push('Narada battery selection guide', 'Narada product selection');
  console.log('✓ Added selection keywords');
}

// Add selectionGuideLink for all categories
productsData.categories.forEach(category => {
  if (!category.selectionGuideLink) {
    category.selectionGuideLink = {
      url: `/narada/support/${category.slug}-selection-guide.html`,
      text: `${category.name} Selection Guide - Complete guide for selecting Narada ${category.name}`
    };
    console.log(`✓ Added selectionGuideLink for ${category.id}`);
  }
});

// Check product counts
productsData.categories.forEach(category => {
  const currentCount = category.products.length;
  if (currentCount < 6) {
    console.log(`⚠ ${category.id}: ${currentCount} products (need ${6 - currentCount} more)`);
  } else {
    console.log(`✓ ${category.id}: ${currentCount} products`);
  }
});

writeJSON('products.json', productsData);

// Fix solutions.json
const solutionsData = readJSON('solutions.json');

const solKeywords = solutionsData.seoKeywords || [];
if (!solKeywords.some(k => k.toLowerCase().includes('distributor'))) {
  solutionsData.seoKeywords.push('Narada solutions distributor', 'Narada authorized distributor');
  console.log('✓ Added distributor keywords to solutions');
}
if (!solKeywords.some(k => k.toLowerCase().includes('selection'))) {
  solutionsData.seoKeywords.push('Narada solution selection', 'Narada system selection guide');
  console.log('✓ Added selection keywords to solutions');
}

writeJSON('solutions.json', solutionsData);

// Fix support.json
const supportData = readJSON('support.json');

// Ensure seoKeywords exists
if (!supportData.seoKeywords) {
  supportData.seoKeywords = [];
}

const supKeywords = supportData.seoKeywords;
if (!supKeywords.some(k => k.toLowerCase().includes('distributor'))) {
  supportData.seoKeywords.push('Narada support distributor', 'Narada authorized distributor');
  console.log('✓ Added distributor keywords to support');
}
if (!supKeywords.some(k => k.toLowerCase().includes('selection'))) {
  supportData.seoKeywords.push('Narada selection guide', 'Narada product selection');
  console.log('✓ Added selection keywords to support');
}

writeJSON('support.json', supportData);

console.log('\n=== Basic fixes complete ===');
console.log('Product count fix requires adding new products - see fix-narada-products.js');
