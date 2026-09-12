const fs = require('fs');

const filePath = 'c:/Users/ymlt/Desktop/3/data/semikron/support.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Fix 1: Capitalization issue from removing "The reality is that"
data.articles.forEach(article => {
  if (article.faeInsights && article.faeInsights.insight) {
    article.faeInsights.insight = article.faeInsights.insight
      .replace(/switching characteristics\. an IGBT's/, 'switching characteristics. An IGBT\'s');
  }
});

// Fix 2: "comprehensive protection" in customer case diagnosis
data.articles.forEach(article => {
  if (article.customerCases) {
    article.customerCases.forEach(cc => {
      if (cc.diagnosis) {
        cc.diagnosis = cc.diagnosis.replace(/comprehensive protection/, 'full protection');
      }
    });
  }
});

// Fix 3: "comprehensive protection" in bestPractices
data.articles.forEach(article => {
  if (article.faeInsights && article.faeInsights.bestPractices) {
    article.faeInsights.bestPractices = article.faeInsights.bestPractices.map(bp =>
      bp.replace(/Implement comprehensive protection/, 'Implement full protection')
    );
  }
});

// Fix 4: "not only...but also" in content array
data.articles.forEach(article => {
  if (Array.isArray(article.content)) {
    article.content = article.content.map(item => {
      if (typeof item === 'string') {
        return item.replace(
          /Component selection should consider not only electrical specifications but also supply chain factors such as availability, lead time, and lifecycle status\. Work with BeiLuo to identify optimal alternatives and second sources where appropriate\./,
          'Component selection should consider both electrical specifications and supply chain factors like availability, lead time, and lifecycle status. Work with BeiLuo to find optimal alternatives and second sources where appropriate.'
        );
      }
      return item;
    });
  }
});

// Fix 5: "crucial" in keyTakeaways
data.articles.forEach(article => {
  if (article.faeInsights && article.faeInsights.keyTakeaways) {
    article.faeInsights.keyTakeaways = article.faeInsights.keyTakeaways.map(kt =>
      kt.replace(/is crucial for/, 'matters for')
    );
  }
});

// Fix 6: "provides" in simple faq answers
if (data.faq) {
  data.faq.forEach(f => {
    if (f.answer) {
      f.answer = f.answer
        .replace(/The SKYPER gate driver family provides this with built-in isolation and protection\./, 'The SKYPER gate driver family delivers this with built-in isolation and protection.')
        .replace(/Yes, our FAE team provides design-in support/, 'Yes, our FAE team offers design-in support');
    }
  });
}

// Fix 7: "provides" in article content strings
data.articles.forEach(article => {
  if (typeof article.content === 'string') {
    article.content = article.content
      .replace(/The SKYPER family provides this voltage with built-in isolation\./, 'The SKYPER family delivers this voltage with built-in isolation.')
      .replace(/SKYPER drivers provide 4000VAC isolation for safety\./, 'SKYPER drivers deliver 4000VAC isolation for safety.');
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('Third pass complete.');
