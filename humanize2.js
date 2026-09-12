const fs = require('fs');

const filePath = 'c:/Users/ymlt/Desktop/3/data/semikron/support.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Fix 1: categories description typo
if (data.categories && data.categories[0]) {
  data.categories[0].description = data.categories[0].description.replace('Guides for select the right', 'Guides for selecting the right');
}

// Fix 2: Remove "Comprehensive" from article summaries and seoDescriptions
data.articles.forEach(article => {
  if (article.summary) {
    article.summary = article.summary.replace(/Comprehensive guide with examples/, 'Guide with examples');
    article.summary = article.summary.replace(/Comprehensive guide to/, 'Guide to');
    article.summary = article.summary.replace(/Comprehensive analysis of/, 'Analysis of');
  }
  if (article.seoDescription) {
    article.seoDescription = article.seoDescription.replace(/Comprehensive guide to/, 'Guide to');
    article.seoDescription = article.seoDescription.replace(/Comprehensive IGBT failure analysis:/, 'IGBT failure analysis:');
  }
  
  // Fix 3: Humanize generic content arrays
  if (Array.isArray(article.content)) {
    const title = article.title;
    if (title === 'Thermal Management for Semikron Power Modules') {
      article.content = [
        "This reference covers Semikron product specs, characteristics, and performance parameters to support your design work.",
        "Electrical characteristics apply across the operating temperature range unless noted otherwise. Parameters are guaranteed by design, testing, or statistical analysis. Typical values show the most likely parametric norm at 25°C.",
        "Pay close attention to thermal characteristics during system design. Junction-to-ambient thermal resistance depends on mounting configuration, PCB copper area, and airflow. Use thermal simulation tools to predict operating temperatures under real conditions.",
        "Reliability data comes from accelerated life testing and field failure analysis. MTBF calculations follow industry-standard methods. Contact BeiLuo for detailed reliability reports and qualification data."
      ];
    } else if (title === 'Semikron SKiiP3 Intelligent Power Module Technical Review') {
      article.content = [
        "This reference covers Semikron product specs, characteristics, and performance parameters to support your design work.",
        "Electrical characteristics apply across the operating temperature range unless noted otherwise. Parameters are guaranteed by design, testing, or statistical analysis. Typical values show the most likely parametric norm at 25°C.",
        "Pay close attention to thermal characteristics during system design. Junction-to-ambient thermal resistance depends on mounting configuration, PCB copper area, and airflow. Use thermal simulation tools to predict operating temperatures under real conditions.",
        "Reliability data comes from accelerated life testing and field failure analysis. MTBF calculations follow industry-standard methods. Contact BeiLuo for detailed reliability reports and qualification data."
      ];
    } else if (title === 'Power Module Mounting and Assembly Best Practices') {
      article.content = [
        "This document outlines best practices for using Semikron products based on extensive field experience and customer feedback. Following these recommendations will help optimize performance and reliability.",
        "Component selection should consider not only electrical specifications but also supply chain factors such as availability, lead time, and lifecycle status. Work with BeiLuo to identify optimal alternatives and second sources where appropriate.",
        "Design validation should include both laboratory testing and real-world evaluation. Develop test plans that cover normal operation, boundary conditions, and stress scenarios. Document all test procedures and results thoroughly.",
        "Manufacturing considerations include proper handling, storage, and assembly procedures. Follow recommended soldering profiles and cleaning processes. Implement quality control checks to ensure consistent production results."
      ];
    } else if (title === 'PCB Layout Guidelines for Power Electronics with Semikron Components') {
      article.content = [
        "This reference covers Semikron product specs, characteristics, and performance parameters to support your design work.",
        "Electrical characteristics apply across the operating temperature range unless noted otherwise. Parameters are guaranteed by design, testing, or statistical analysis. Typical values show the most likely parametric norm at 25°C.",
        "Pay close attention to thermal characteristics during system design. Junction-to-ambient thermal resistance depends on mounting configuration, PCB copper area, and airflow. Use thermal simulation tools to predict operating temperatures under real conditions.",
        "Reliability data comes from accelerated life testing and field failure analysis. MTBF calculations follow industry-standard methods. Contact BeiLuo for detailed reliability reports and qualification data."
      ];
    }
  }
  
  // Fix remaining AI patterns in faeInsights.insight
  if (article.faeInsights && article.faeInsights.insight) {
    let insight = article.faeInsights.insight;
    // Remove "I've observed that" pattern
    insight = insight.replace(/I've observed that /g, 'I\'ve noticed ');
    // Remove "The reality is that"
    insight = insight.replace(/The reality is that /g, 'In practice, ');
    article.faeInsights.insight = insight;
  }
});

// Fix top-level seoDescription
data.seoDescription = data.seoDescription.replace(/Comprehensive /, 'Detailed ');

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('Second pass complete.');
