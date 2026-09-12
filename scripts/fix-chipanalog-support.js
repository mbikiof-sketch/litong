/**
 * 修复chipanalog品牌技术支持文章数据问题
 * - 添加PCB Layout Guidelines的relatedArticles
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chipanalog');
const supportPath = path.join(dataDir, 'support.json');

console.log('🔧 修复chipanalog品牌技术支持文章数据问题...\n');

const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 找到PCB Layout Guidelines for Isolation Applications
const pcbArticle = supportData.articles.find(a => a.slug === 'chipanalog-pcb-layout-isolation');
if (pcbArticle) {
  console.log('📋 修复技术支持文章: PCB Layout Guidelines for Isolation Applications');
  
  // 添加第三个relatedArticle
  if (!pcbArticle.relatedArticles || pcbArticle.relatedArticles.length < 3) {
    pcbArticle.relatedArticles = pcbArticle.relatedArticles || [];
    pcbArticle.relatedArticles.push({
      title: 'Isolated Gate Driver Application Guide',
      link: '/chipanalog/support/isolated-gate-driver-guide.html'
    });
    console.log(`  ✓ 添加relatedArticle: 现在有 ${pcbArticle.relatedArticles.length} 个`);
  }
}

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2), 'utf8');

console.log('\n✅ 技术支持文章数据修复完成！');
console.log(`💾 已保存到: ${supportPath}`);
