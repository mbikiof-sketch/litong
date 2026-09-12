#!/usr/bin/env node
/**
 * Goertek Brand Data Fix Script - Decision Framework Fix
 * 修复Goertek品牌数据中的decisionFramework字段
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

// 修复solutions.json中的decisionFramework
function fixSolutionsDecisionFramework() {
  console.log('\n=== Fixing solutions.json decisionFramework ===');
  const data = readJSON('solutions.json');
  if (!data) return;
  
  for (const solution of data.solutions) {
    if (!solution.faeInsights) {
      solution.faeInsights = {};
    }
    
    // 确保decisionFramework有steps字段
    if (!solution.faeInsights.decisionFramework || !solution.faeInsights.decisionFramework.steps) {
      // 从现有的decisionFramework字符串创建steps数组
      const existingFramework = solution.faeInsights.decisionFramework || '';
      let steps = [];
      
      if (typeof existingFramework === 'string') {
        // 解析字符串中的步骤（通常格式为 "1) ...; 2) ...;"）
        const stepMatches = existingFramework.match(/\d+\)[^;]+/g);
        if (stepMatches) {
          steps = stepMatches.map(s => s.trim());
        }
      }
      
      // 如果无法解析，创建默认步骤
      if (steps.length === 0) {
        steps = [
          "1) Identify application requirements",
          "2) Select appropriate Goertek components",
          "3) Design schematic and PCB layout",
          "4) Validate performance with testing",
          "5) Optimize based on test results"
        ];
      }
      
      solution.faeInsights.decisionFramework = {
        steps: steps,
        description: existingFramework || "Step-by-step decision framework for implementing this solution"
      };
      
      console.log(`  Fixed decisionFramework for: ${solution.title}`);
    }
  }
  
  writeJSON('solutions.json', data);
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Goertek Brand Data Fix - Decision Framework');
  console.log('========================================');
  
  fixSolutionsDecisionFramework();
  
  console.log('\n========================================');
  console.log('Fix complete!');
  console.log('========================================');
}

main();
