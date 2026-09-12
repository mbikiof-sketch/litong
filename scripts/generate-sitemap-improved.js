const fs = require('fs');
const path = require('path');

// 配置
const DOMAIN = 'https://ic-distributor.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'sitemap.xml');

// 获取所有HTML文件
function getAllHtmlFiles(dir, basePath = '') {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = basePath ? `${basePath}/${item}` : item;
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item.startsWith('_')) continue;
      files.push(...getAllHtmlFiles(fullPath, relativePath));
    } else if (item.endsWith('.html')) {
      files.push({
        path: relativePath,
        mtime: stat.mtime
      });
    }
  }
  
  return files;
}

// 确定页面优先级和更新频率
function getPagePriority(filePath) {
  if (filePath === 'index.html') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  
  if (filePath.split('/').length === 2 && filePath.endsWith('/index.html')) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  
  if (filePath.match(/\/(products|solutions|support|news)\/index\.html$/)) {
    return { priority: '0.7', changefreq: 'weekly' };
  }
  
  if (filePath.includes('/products/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  if (filePath.includes('/solutions/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  if (filePath.includes('/support/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.5', changefreq: 'monthly' };
  }
  
  if (filePath.includes('/news/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.5', changefreq: 'weekly' };
  }
  
  if (filePath.includes('about/')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  if (filePath === 'brands/index.html') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  
  return { priority: '0.5', changefreq: 'monthly' };
}

// 格式化日期为 W3C 格式
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// 生成单个 sitemap XML
function generateSitemap(urls) {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const today = formatDate(new Date());
  
  for (const { url, priority, changefreq, lastmod } of urls) {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${url}</loc>\n`;
    sitemap += `    <lastmod>${lastmod || today}</lastmod>\n`;
    sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemap += `    <priority>${priority}</priority>\n`;
    sitemap += '  </url>\n';
  }
  
  sitemap += '</urlset>\n';
  return sitemap;
}

// 生成 sitemap index
function generateSitemapIndex(sitemaps) {
  let index = '<?xml version="1.0" encoding="UTF-8"?>\n';
  index += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const today = formatDate(new Date());
  
  for (const { url } of sitemaps) {
    index += '  <sitemap>\n';
    index += `    <loc>${url}</loc>\n`;
    index += `    <lastmod>${today}</lastmod>\n`;
    index += '  </sitemap>\n';
  }
  
  index += '</sitemapindex>\n';
  return index;
}

// 主函数
function main() {
  console.log('Generating improved sitemap...');
  
  const htmlFiles = getAllHtmlFiles(OUTPUT_DIR);
  const today = formatDate(new Date());
  
  // 准备 URL 列表
  const urls = [];
  
  // 添加首页
  urls.push({
    url: `${DOMAIN}/`,
    priority: '1.0',
    changefreq: 'daily',
    lastmod: today
  });
  
  // 添加品牌列表页
  urls.push({
    url: `${DOMAIN}/brands/`,
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: today
  });
  
  // 添加关于页面
  urls.push({
    url: `${DOMAIN}/about/`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today
  });
  
  urls.push({
    url: `${DOMAIN}/about/contact/`,
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: today
  });
  
  // 添加新闻首页
  urls.push({
    url: `${DOMAIN}/news/`,
    priority: '0.8',
    changefreq: 'daily',
    lastmod: today
  });
  
  // 处理所有HTML文件
  for (const { path: filePath, mtime } of htmlFiles) {
    if (filePath === 'index.html') continue;
    
    let urlPath = filePath.replace(/\\/g, '/');
    
    if (!urlPath.startsWith('/')) {
      urlPath = '/' + urlPath;
    }
    
    if (urlPath.endsWith('/index.html')) {
      urlPath = urlPath.replace('/index.html', '/');
    } else if (urlPath.endsWith('.html')) {
      urlPath = urlPath.replace(/\.html$/, '');
    }
    
    const { priority, changefreq } = getPagePriority(filePath);
    
    urls.push({
      url: `${DOMAIN}${urlPath}`,
      priority,
      changefreq,
      lastmod: formatDate(mtime)
    });
  }
  
  console.log(`Total URLs: ${urls.length}`);
  
  // 由于 URL 数量太多，拆分成多个 sitemap 文件
  // 每个文件最多 5000 个 URL（Google 限制）
  const MAX_URLS_PER_SITEMAP = 5000;
  const sitemaps = [];
  
  if (urls.length <= MAX_URLS_PER_SITEMAP) {
    // 如果 URL 数量在限制内，生成单个 sitemap
    const sitemap = generateSitemap(urls);
    fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
    console.log(`Sitemap generated: ${SITEMAP_PATH}`);
    console.log(`Size: ${(sitemap.length / 1024).toFixed(2)} KB`);
  } else {
    // 拆分多个 sitemap
    const numSitemaps = Math.ceil(urls.length / MAX_URLS_PER_SITEMAP);
    
    for (let i = 0; i < numSitemaps; i++) {
      const start = i * MAX_URLS_PER_SITEMAP;
      const end = Math.min(start + MAX_URLS_PER_SITEMAP, urls.length);
      const chunk = urls.slice(start, end);
      
      const sitemap = generateSitemap(chunk);
      const sitemapFileName = i === 0 ? 'sitemap.xml' : `sitemap-${i + 1}.xml`;
      const sitemapPath = path.join(OUTPUT_DIR, sitemapFileName);
      
      fs.writeFileSync(sitemapPath, sitemap, 'utf8');
      sitemaps.push({
        url: `${DOMAIN}/${sitemapFileName}`
      });
      
      console.log(`${sitemapFileName} generated: ${chunk.length} URLs, ${(sitemap.length / 1024).toFixed(2)} KB`);
    }
    
    // 生成 sitemap index
    const index = generateSitemapIndex(sitemaps);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-index.xml'), index, 'utf8');
    console.log(`Sitemap index generated: ${sitemaps.length} sitemaps`);
  }
  
  console.log('\nDone!');
}

main();
