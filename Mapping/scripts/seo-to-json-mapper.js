const fs = require('fs');
const path = require('path');

const brand = process.argv[2]?.split('=')[1] || 'qinheng';
const reportPath = path.join(__dirname, 'seo-reports', `${brand}-seo-report.json`);
const outputDir = path.join(__dirname, '..', 'brands', brand);

if (!fs.existsSync(reportPath)) {
  console.error(`Report not found: ${reportPath}`);
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
fs.mkdirSync(outputDir, { recursive: true });

// Map SEO report to JSON fields
const mappedData = {
  brand: report.brand,
  seo: {
    title: report.keywords.core[0]?.keyword || `${brand} distributor`,
    keywords: [
      ...report.keywords.core.map(k => k.keyword),
      ...report.keywords.product.slice(0, 3).map(k => k.keyword)
    ]
  },
  products: {
    categories: report.keywords.product.slice(0, 4).map(k => ({
      name: k.keyword.split(' ').slice(0, 2).join(' '),
      keywords: [k.keyword]
    })),
    count: report.keywords.product.length
  },
  solutions: {
    industries: report.keywords.application.map(k => ({
      name: k.keyword,
      keywords: [k.keyword]
    })),
    count: report.keywords.application.length
  },
  support: {
    articles: report.contentGaps.articles.map(title => ({ title })),
    faqs: report.contentGaps.faqs.map(q => ({ question: q })),
    selectionGuide: report.painPoints.selection_difficulty
  },
  trustSignals: {
    clientExamples: report.contentGaps.cases.map(c => ({ title: c })),
    authorizedDistributor: true
  },
  geo: {
    aiCitable: report.geoOptimization.ai_citable,
    targetQueries: report.geoOptimization.target_queries
  }
};

fs.writeFileSync(path.join(outputDir, 'mapped-data.json'), JSON.stringify(mappedData, null, 2));
console.log(`✅ mapped-data.json created`);

// Generate AI prompts
const aiPrompts = {
  contentGeneration: [
    {
      type: 'about',
      prompt: `Write a brand introduction for ${brand} distributor page including history, core products, and trust signals.`
    },
    {
      type: 'products',
      prompt: `Write product descriptions for ${brand} ${report.keywords.product.slice(0, 3).map(k => k.keyword).join(', ')}. Include features and applications.`
    },
    {
      type: 'comparison',
      prompt: `Write a detailed comparison: ${report.geoOptimization.target_queries.join(' vs ')}. Include a comparison table.`
    },
    {
      type: 'guide',
      prompt: `Write a selection guide for ${brand} USB interface chips covering ${report.keywords.product.slice(0, 4).map(k => k.keyword).join(', ')}.`
    },
    {
      type: 'faq',
      prompt: `Answer these FAQs: ${report.contentGaps.faqs.join('; ')}`
    }
  ],
  seoOptimization: [
    {
      type: 'meta-tags',
      prompt: `Generate SEO meta titles and descriptions for ${brand} distributor pages.`
    },
    {
      type: 'schema',
      prompt: `Generate JSON-LD schema for ${brand} distributor with Product and Organization types.`
    }
  ]
};

fs.writeFileSync(path.join(outputDir, 'ai-prompts.json'), JSON.stringify(aiPrompts, null, 2));
console.log(`✅ ai-prompts.json created`);

// Coverage check
const coverage = {
  coreKeywords: { count: report.keywords.core.length, threshold: 1, pass: report.keywords.core.length >= 1 },
  productKeywords: { count: report.keywords.product.length, threshold: 10, pass: report.keywords.product.length >= 10 },
  longTailKeywords: { count: report.keywords.product.length + report.keywords.application.length + report.keywords.problem.length, threshold: 30, pass: (report.keywords.product.length + report.keywords.application.length + report.keywords.problem.length) >= 30 },
  solutions: { count: report.keywords.application.length, threshold: 4, pass: report.keywords.application.length >= 4 },
  articles: { count: report.contentGaps.articles.length, threshold: 8, pass: report.contentGaps.articles.length >= 8 },
  faqs: { count: report.contentGaps.faqs.length, threshold: 10, pass: report.contentGaps.faqs.length >= 10 },
  cases: { count: report.contentGaps.cases.length, threshold: 5, pass: report.contentGaps.cases.length >= 5 }
};

coverage.allPass = Object.values(coverage).every(c => c.pass !== undefined ? c.pass : true);

fs.writeFileSync(path.join(outputDir, 'coverage-report.json'), JSON.stringify(coverage, null, 2));
console.log(`✅ coverage-report.json created`);

// Print results
console.log(`\n=== Coverage Report for ${brand} ===`);
Object.entries(coverage).forEach(([key, val]) => {
  if (key === 'allPass') return;
  console.log(`${key}: ${val.count}/${val.threshold} ${val.pass ? '✅' : '❌'}`);
});
console.log(`Overall: ${coverage.allPass ? '✅ ALL PASS' : '❌ SOME FAILED'}`);