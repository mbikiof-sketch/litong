const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'infineon');

// 修复 seoKeywords 函数
function fixSeoKeywords(obj, context = '') {
  if (obj.seoKeywords && Array.isArray(obj.seoKeywords)) {
    // 检查是否是字符数组（格式错误）- 如果大部分元素是单个字符，则需要修复
    const singleCharCount = obj.seoKeywords.filter(k => typeof k === 'string' && k.length === 1).length;
    const totalCount = obj.seoKeywords.length;

    // 如果超过 80% 是单字符，则认为需要修复
    if (singleCharCount > totalCount * 0.8 && totalCount > 50) {
      // 将字符数组合并成字符串
      const fullString = obj.seoKeywords.join('');
      // 按逗号分割并清理
      let keywords = fullString.split(',').map(s => s.trim()).filter(s => s.length > 0);

      // 处理可能连接在一起的额外关键词（如 "design supportinfineon distributor"）
      const additionalKeywords = [
        'infineon distributor',
        'infineon authorized distributor',
        'infineon 选型',
        'infineon 选型指南'
      ];

      // 检查最后一个元素是否包含连接的关键词
      const lastKeyword = keywords[keywords.length - 1];
      if (lastKeyword) {
        for (const ak of additionalKeywords) {
          if (lastKeyword.includes(ak) && !keywords.includes(ak)) {
            // 分割连接的关键词
            const parts = lastKeyword.split(ak);
            if (parts[0] && parts[0].trim()) {
              keywords[keywords.length - 1] = parts[0].trim();
            } else {
              keywords.pop();
            }
            if (!keywords.includes(ak)) {
              keywords.push(ak);
            }
            // 处理剩余部分
            if (parts[1] && parts[1].trim()) {
              const remaining = parts[1].trim();
              for (const ak2 of additionalKeywords) {
                if (remaining.includes(ak2) && !keywords.includes(ak2)) {
                  const parts2 = remaining.split(ak2);
                  if (parts2[0] && parts2[0].trim()) {
                    keywords.push(parts2[0].trim());
                  }
                  keywords.push(ak2);
                  if (parts2[1] && parts2[1].trim() && !keywords.includes(parts2[1].trim())) {
                    keywords.push(parts2[1].trim());
                  }
                }
              }
            }
          }
        }
      }

      // 确保额外的关键词都在列表中
      for (const ak of additionalKeywords) {
        if (!keywords.includes(ak)) {
          keywords.push(ak);
        }
      }

      obj.seoKeywords = keywords;
      console.log(`  Fixed ${context}seoKeywords: ${totalCount} chars -> ${obj.seoKeywords.length} keywords`);
      return true;
    }
  }
  return false;
}

// 处理文件
function processFile(filename) {
  const filePath = path.join(brandDir, filename);
  console.log(`\nProcessing: ${filename}`);

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    let modified = false;

    // 修复主对象的 seoKeywords
    if (fixSeoKeywords(data, '')) {
      modified = true;
    }

    // 修复 solutions 数组中的 seoKeywords
    if (data.solutions && Array.isArray(data.solutions)) {
      data.solutions.forEach((solution, idx) => {
        if (fixSeoKeywords(solution, `solution[${idx}].`)) {
          modified = true;
        }
      });
    }

    // 修复 articles 数组中的 seoKeywords
    if (data.articles && Array.isArray(data.articles)) {
      data.articles.forEach((article, idx) => {
        if (fixSeoKeywords(article, `article[${idx}].`)) {
          modified = true;
        }
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`  Saved: ${filename}`);
    } else {
      console.log(`  No changes needed`);
    }

    return true;
  } catch (err) {
    console.error(`  Error processing ${filename}:`, err.message);
    return false;
  }
}

// 处理所有文件
const files = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];

console.log('Fixing Infineon data files...\n');

let successCount = 0;
for (const file of files) {
  if (processFile(file)) {
    successCount++;
  }
}

console.log(`\n\nCompleted: ${successCount}/${files.length} files processed successfully`);
