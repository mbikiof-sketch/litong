const fs = require('fs');
const path = require('path');

const cmsemicorDir = path.join(__dirname, '../data/cmsemicor');

// 读取solutions.json并添加coreAdvantages
const solutionsPath = path.join(cmsemicorDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 为每个solution添加coreAdvantages
solutionsData.solutions.forEach(solution => {
  if (!solution.coreAdvantages) {
    solution.coreAdvantages = solution.features.map((feature, index) => ({
      title: feature.split(' ').slice(0, 3).join(' '),
      description: feature
    }));
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ Fixed solutions.json - added coreAdvantages');

// 创建news.json
const newsData = {
  "seoTitle": "Cmsemicon News | Product Releases Company Updates",
  "seoDescription": "Latest news and updates from Cmsemicon including new product releases, technology announcements, and company news.",
  "news": [
    {
      "id": "cms32l032-release",
      "title": "Cmsemicon Releases CMS32L032 Mainstream 32-bit MCU",
      "date": "2023-07-14",
      "category": "Product Release",
      "summary": "New ARM Cortex-M0+ MCU with 64KB Flash and rich peripherals for general-purpose applications",
      "content": "Cmsemicon announced the release of CMS32L032, a mainstream 32-bit MCU based on ARM Cortex-M0+ core. The device features 64KB Flash, 4KB SRAM, and operates at up to 64MHz. With integrated 12-bit ADC, enhanced PWM, and multiple communication interfaces, the CMS32L032 is ideal for consumer electronics, industrial control, and IoT applications.",
      "image": "/assets/news/cms32l032-release.jpg"
    },
    {
      "id": "cms8h1215-release",
      "title": "Cmsemicon Unveils CMS8H1215 - China's First Dual-AD High-Precision SoC",
      "date": "2023-05-26",
      "category": "Product Release",
      "summary": "Revolutionary SoC combines 24-bit Sigma-Delta and 12-bit SAR ADCs for precision measurement",
      "content": "Cmsemicon officially released CMS8H1215, China's first multi-channel dual-AD high-precision SoC. The chip integrates 24-bit Sigma-Delta ADC and 12-bit SAR ADC, providing 20.0-bit effective resolution. This breakthrough product is designed for pressure sensing, industrial measurement, and medical applications.",
      "image": "/assets/news/cms8h1215-release.jpg"
    },
    {
      "id": "automotive-certification",
      "title": "BAT32A2 Series Passes AEC-Q100 Automotive Certification",
      "date": "2023-06-15",
      "category": "Certification",
      "summary": "Six new models achieve AEC-Q100 Grade 1 qualification for automotive applications",
      "content": "Cmsemicon announced that six new models of the BAT32A2 series have successfully passed AEC-Q100 Grade 1 automotive certification. These MCUs are now qualified for automotive applications including body control modules, lighting control, and sensor interfaces. The certification validates Cmsemicon's commitment to quality and reliability in demanding automotive environments.",
      "image": "/assets/news/automotive-certification.jpg"
    },
    {
      "id": "touch-mcu-expansion",
      "title": "Cmsemicon Expands Touch MCU Portfolio with CMS32F759",
      "date": "2023-08-20",
      "category": "Product Release",
      "summary": "New 32-bit touch MCU supports up to 49 channels for home appliance applications",
      "content": "Cmsemicon expanded its touch MCU portfolio with the CMS32F759, featuring up to 49 touch detection channels. The device integrates LCD and LED drivers, making it ideal for home appliance control panels. With 256KB Flash and extended temperature range up to 105°C, the CMS32F759 meets the demanding requirements of major appliance manufacturers.",
      "image": "/assets/news/touch-mcu-expansion.jpg"
    },
    {
      "id": "distributor-partnership",
      "title": "LiTong Electronics Becomes Authorized Cmsemicon Distributor",
      "date": "2024-01-10",
      "category": "Partnership",
      "summary": "Strategic partnership expands Cmsemicon product availability and technical support",
      "content": "Cmsemicon and LiTong Electronics announced a strategic partnership making LiTong an authorized distributor of Cmsemicon products. This partnership provides customers with access to genuine Cmsemicon MCUs, comprehensive technical support, and value-added services including FAE support, product selection guidance, and development tools.",
      "image": "/assets/news/distributor-partnership.jpg"
    }
  ]
};

fs.writeFileSync(path.join(cmsemicorDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✅ Created news.json');

// 修复support.json - 添加articles数组
const supportPath = path.join(cmsemicorDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 将categories转换为articles格式
if (!supportData.articles && supportData.categories) {
  supportData.articles = [];
  supportData.categories.forEach(category => {
    if (category.articles) {
      category.articles.forEach(article => {
        article.category = category.title;
        supportData.articles.push(article);
      });
    }
  });
}

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ Fixed support.json - added articles array');

console.log('\n========================================');
console.log('✅ Cmsemicor data files fixed successfully!');
console.log('========================================');
