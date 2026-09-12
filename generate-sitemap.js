const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://ic-distributor.com';
const OUTPUT_DIR = path.join(__dirname, 'output');

// 递归获取所有HTML文件
function getHtmlFiles(dir, files = [], basePath = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const relativePath = basePath ? `${basePath}/${item}` : item;
    
    if (stat.isDirectory()) {
      if (item.startsWith('_')) continue;
      getHtmlFiles(fullPath, files, relativePath);
    } else if (item.endsWith('.html')) {
      files.push(relativePath);
    }
  }
  
  return files;
}

// 确定页面优先级和更新频率
function getPageInfo(filePath) {
  const parts = filePath.split('/');
  const depth = parts.length - 1;
  
  // 首页
  if (filePath === 'index.html') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  
  // 品牌首页
  if (parts.length === 2 && parts[1] === 'index.html') {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  
  // 主要页面 (brands, news, about)
  if (parts[0] === 'brands' || parts[0] === 'news') {
    return { priority: '0.8', changefreq: 'daily' };
  }
  
  if (parts[0] === 'about') {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // 品牌子页面
  if (parts.length >= 2) {
    const section = parts[1];
    if (section === 'products') {
      return { priority: '0.7', changefreq: 'weekly' };
    }
    if (section === 'solutions') {
      return { priority: '0.7', changefreq: 'weekly' };
    }
    if (section === 'support') {
      return { priority: '0.6', changefreq: 'weekly' };
    }
    if (section === 'news') {
      return { priority: '0.6', changefreq: 'weekly' };
    }
  }
  
  // 默认
  return { priority: '0.5', changefreq: 'monthly' };
}

// 生成网站地图
function generateSitemap() {
  console.log('正在扫描HTML文件...');
  const htmlFiles = getHtmlFiles(OUTPUT_DIR);
  console.log(`找到 ${htmlFiles.length} 个HTML文件`);
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const file of htmlFiles) {
    // 将文件路径转换为URL，仅保留一种规范形态：
    // - 目录 index.html -> 目录形式（/a/b/）
    // - 普通 .html -> 无扩展名形式（/a/b/x）
    // - 若同时存在 X.html 与 X/index.html，只保留目录形式（canonical 指向目录形式）
    let urlPath = file.replace(/\\/g, '/');
    if (urlPath === 'index.html') {
      urlPath = '';
    } else if (urlPath.endsWith('/index.html')) {
      urlPath = urlPath.replace('/index.html', '');
    } else {
      const base = urlPath.replace(/\.html$/, '');
      if (htmlFiles.includes(`${base}/index.html`)) continue;
      urlPath = base;
    }
    const fullUrl = `${BASE_URL}/${urlPath}`;
    const { priority, changefreq } = getPageInfo(file);
    
    sitemap += '  <url>\n';
    sitemap += `    <loc>${fullUrl}</loc>\n`;
    sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemap += `    <priority>${priority}</priority>\n`;
    sitemap += '  </url>\n';
  }
  
  sitemap += '</urlset>\n';
  
  // 写入文件
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf-8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap, 'utf-8');
  
  console.log('\n网站地图生成完成！');
  console.log(`- 根目录: ${path.join(__dirname, 'sitemap.xml')}`);
  console.log(`- 输出目录: ${path.join(OUTPUT_DIR, 'sitemap.xml')}`);
  console.log(`\n总共包含 ${htmlFiles.length} 个页面`);
  
  // 统计信息
  const stats = {
    '首页': htmlFiles.filter(f => f === 'index.html').length,
    '品牌首页': htmlFiles.filter(f => f.split('/').length === 2 && f.endsWith('index.html')).length,
    '产品页面': htmlFiles.filter(f => f.includes('/products/')).length,
    '解决方案': htmlFiles.filter(f => f.includes('/solutions/')).length,
    '支持文档': htmlFiles.filter(f => f.includes('/support/')).length,
    '新闻文章': htmlFiles.filter(f => f.includes('/news/') && f !== 'news/index.html').length,
    '其他页面': 0
  };
  
  console.log('\n页面分布:');
  for (const [key, value] of Object.entries(stats)) {
    if (value > 0) {
      console.log(`  ${key}: ${value}`);
    }
  }
}

generateSitemap();
