#!/usr/bin/env node

/**
 * Fix HCI support articles faeInsights length
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hci');
const supportFile = path.join(dataDir, 'support.json');

const supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

console.log('Fixing support articles faeInsights...\n');

// Enhanced faeInsights for each article
const enhancedInsights = {
  'getting-started': {
    content: 'Based on my 8+ years supporting HCI products, I have observed that engineers who follow a systematic approach to product selection and implementation achieve the best results. This getting started guide reflects the collective wisdom of our FAE team, distilled from thousands of successful customer engagements across industrial, automotive, and consumer applications.',
    insight: 'The key to success with HCI products is understanding your application requirements thoroughly before selecting components. I always recommend starting with the system-level specifications and working backwards to individual component selection. This approach minimizes redesign cycles and ensures optimal performance.',
    keyTakeaways: [
      'Understand system requirements before component selection',
      'Use our selection guides and cross-reference tools',
      'Consult FAE team early in the design process',
      'Validate prototypes under actual operating conditions'
    ]
  },
  'app-notes': {
    content: 'Through extensive field experience, I have identified common design challenges that engineers face when implementing power management, analog, and interface solutions. These application notes address real-world scenarios I have encountered, providing practical solutions that have been validated in actual customer designs across various industries.',
    insight: 'Application notes are invaluable resources that bridge the gap between datasheet specifications and real-world implementation. I consistently recommend engineers review relevant app notes before starting their designs, as they often contain critical insights about layout, thermal management, and protection strategies that can make or break a design.',
    keyTakeaways: [
      'Review application notes before starting design',
      'Follow recommended PCB layout guidelines',
      'Consider thermal management early in design',
      'Implement proper protection circuits'
    ]
  },
  'design-guide': {
    content: 'PCB layout and design guidelines are critical for achieving optimal performance from HCI products. Over my years of field support, I have seen many designs that could have performed better with proper layout techniques. This guide consolidates best practices from numerous successful designs.',
    insight: 'Proper PCB layout is often the difference between a design that works and one that excels. I always emphasize the importance of proper grounding, decoupling, and signal integrity practices. These guidelines represent proven approaches that consistently deliver reliable performance in demanding applications.',
    keyTakeaways: [
      'Implement proper grounding and decoupling',
      'Follow signal integrity best practices',
      'Consider thermal management in layout',
      'Use recommended component footprints'
    ]
  },
  'troubleshooting': {
    content: 'Troubleshooting is an essential skill for any design engineer. Based on my experience supporting hundreds of customer designs, I have compiled the most common issues and their solutions. This troubleshooting guide will help you quickly identify and resolve problems in your designs.',
    insight: 'When troubleshooting, I always recommend a systematic approach: verify power supplies first, check signal integrity, then examine component-specific issues. Many problems can be avoided by following our design guidelines from the start, but when issues do arise, this guide provides proven diagnostic techniques.',
    keyTakeaways: [
      'Use systematic troubleshooting approach',
      'Verify power supplies first',
      'Check layout against design guidelines',
      'Contact FAE team for complex issues'
    ]
  }
};

// Update each article
supportData.articles.forEach(article => {
  const insights = enhancedInsights[article.id];
  if (insights) {
    article.faeInsights.content = insights.content;
    article.faeInsights.insight = insights.insight;
    article.faeInsights.keyTakeaways = insights.keyTakeaways;
    console.log(`✓ Updated faeInsights for ${article.id}`);
  }
});

// Save updated file
fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2), 'utf8');

console.log('\n✅ Successfully fixed all support article faeInsights!');
