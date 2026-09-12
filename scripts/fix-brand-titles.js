const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const brands = fs.readdirSync(dataDir);

let fixed = 0;
let skipped = 0;

brands.forEach(brand => {
  if (brand.startsWith('.') || brand.startsWith('_')) return;
  
  const brandJsonPath = path.join(dataDir, brand, 'brand.json');
  if (!fs.existsSync(brandJsonPath)) return;
  
  let content = fs.readFileSync(brandJsonPath, 'utf-8');
  let original = content;
  
  // === Fix seoTitle ===
  content = content.replace(/"seoTitle":\s*"([^"]+)"/g, (match, title) => {
    // Remove LiTong/Litong from the title
    let clean = title.replace(/[-–—]\s*LiTong\s*(Electronics)?\s*(?:|)?/gi, '').trim();
    clean = clean.replace(/[-–—]\s*Litong\s*(Electronics)?\s*(?:|)?/gi, '').trim();
    clean = clean.replace(/\|\s*LiTong\s*(Electronics)?/gi, '|').trim();
    clean = clean.replace(/\|\s*Litong\s*(Electronics)?/gi, '|').trim();
    clean = clean.replace(/\s*\|$/, '').trim();
    clean = clean.replace(/\s*-\s*$/, '').trim();
    
    // Remove Core Distributor 
    clean = clean.replace(/\|\s*Core\s*Distributor\s*/gi, '|').trim();
    clean = clean.replace(/[-–—]\s*Core\s*Distributor/gi, '').trim();
    
    // Remove Technical Support & Selection Guide
    clean = clean.replace(/\|\s*Technical\s*Support\s*&\s*Selection\s*Guide/gi, '|').trim();
    
    // Add BeiLuo at the end
    clean = clean.replace(/\s*\|?\s*(BeiLuo)?\s*$/i, '').trim();
    clean = clean.replace(/\s*$/, '');
    
    // Ensure Distributor is in the title
    if (!clean.toLowerCase().includes('distributor')) {
      clean = clean + ' Distributor';
    }
    
    return `"seoTitle": "${clean} | BeiLuo"`;
  });
  
  // === Fix description and longDescription ===
  content = content.replace(/"description":\s*"([^"]+)"/g, (match, desc) => {
    let clean = desc.replace(/\bLiTong\s*Electronics\b/gi, 'BeiLuo Electronics');
    clean = clean.replace(/\bLiTong\b(?!\s*Electronics)/gi, 'BeiLuo');
    if (clean !== desc) {
      return `"description": "${clean}"`;
    }
    return match;
  });
  
  content = content.replace(/"longDescription":\s*"([^"]+)"/g, (match, desc) => {
    let clean = desc.replace(/\bLiTong\s*Electronics\b/gi, 'BeiLuo Electronics');
    clean = clean.replace(/\bLiTong\b(?!\s*Electronics)/gi, 'BeiLuo');
    if (clean !== desc) {
      return `"longDescription": "${clean}"`;
    }
    return match;
  });
  
  // === Fix FAQ content ===
  content = content.replace(/"question":\s*"([^"]+)"/g, (match, question) => {
    let clean = question.replace(/\bLiTong\s*Electronics\b/gi, 'BeiLuo Electronics');
    clean = clean.replace(/\bLiTong\b(?!\s*Electronics)/gi, 'BeiLuo');
    if (clean !== question) {
      return `"question": "${clean}"`;
    }
    return match;
  });
  
  content = content.replace(/"answer":\s*"([^"]+)"/g, (match, answer) => {
    let clean = answer.replace(/\bLiTong\s*Electronics\b/gi, 'BeiLuo Electronics');
    clean = clean.replace(/\bLiTong\b(?!\s*Electronics)/gi, 'BeiLuo');
    if (clean !== answer) {
      return `"answer": "${clean}"`;
    }
    return match;
  });
  
  content = content.replace(/"decisionGuide":\s*"([^"]+)"/g, (match, guide) => {
    let clean = guide.replace(/\bLiTong\s*Electronics\b/gi, 'BeiLuo Electronics');
    clean = clean.replace(/\bLiTong\b(?!\s*Electronics)/gi, 'BeiLuo');
    if (clean !== guide) {
      return `"decisionGuide": "${clean}"`;
    }
    return match;
  });
  
  content = content.replace(/"keywords":\s*"([^"]+)"/g, (match, kw) => {
    let clean = kw.replace(/\bLiTong\b/gi, 'BeiLuo');
    if (clean !== kw) {
      return `"keywords": "${clean}"`;
    }
    return match;
  });
  
  if (content !== original) {
    fs.writeFileSync(brandJsonPath, content, 'utf-8');
    fixed++;
    console.log(`✓ Fixed: ${brand}`);
  } else {
    skipped++;
  }
});

console.log(`\n✅ Done! Fixed: ${fixed}, Skipped: ${skipped}`);