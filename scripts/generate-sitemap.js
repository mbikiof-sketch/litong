const fs = require('fs');
const path = require('path');
const sitemapLib = require('./sitemap-lib');

const DOMAIN = sitemapLib.DOMAIN;
const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'sitemap.xml');

function main() {
  console.log('Generating sitemap...');
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Domain: ${DOMAIN}`);

  const { xml, urls } = sitemapLib.generateSitemapXml(OUTPUT_DIR, DOMAIN);
  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');

  console.log(`Sitemap generated: ${SITEMAP_PATH}`);
  console.log(`\nStatistics:`);
  console.log(`- Total URLs: ${urls.length}`);
  console.log(`- Domain: ${DOMAIN}`);
  console.log(`- Sitemap size: ${(xml.length / 1024).toFixed(2)} KB`);
}

main();
