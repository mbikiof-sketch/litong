const fs = require('fs');

const filePath = 'c:/Users/ymlt/Desktop/3/data/semikron/support.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Helper to apply transforms to string fields
function transformString(obj, path, transformFn) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (current === undefined || current === null) return;
    const part = parts[i];
    if (part === '*') {
      if (Array.isArray(current)) {
        current.forEach((item, idx) => {
          transformString(item, parts.slice(i + 1).join('.'), transformFn);
        });
      }
      return;
    }
    current = current[part];
  }
  const last = parts[parts.length - 1];
  if (last === '*') {
    if (Array.isArray(current)) {
      current.forEach((item, idx) => {
        if (typeof item === 'string') {
          current[idx] = transformFn(item);
        }
      });
    }
  } else if (current && typeof current[last] === 'string') {
    current[last] = transformFn(current[last]);
  } else if (current && Array.isArray(current[last])) {
    current[last] = current[last].map(item => {
      if (typeof item === 'string') return transformFn(item);
      return item;
    });
  }
}

// --- Transform functions ---

function humanizeDescription(s) {
  return s
    .replace(/Comprehensive guides to help you/, 'Guides for')
    .replace(/Detailed technical notes on/, 'Technical notes on')
    .replace(/Common issues and solutions for Semikron component-related problems/, 'Common issues and solutions for Semikron component problems')
    .replace(/In-depth technical reviews and evaluations of Semikron products/, 'Technical reviews and evaluations of Semikron products')
    .replace(/Answers to common questions about Semikron products and applications/, 'Answers to common questions about Semikron products and applications');
}

function humanizeSummary(s) {
  return s
    .replace(/Comprehensive guide to/, 'Guide to')
    .replace(/Essential design considerations for/, 'Design considerations for')
    .replace(/Comprehensive analysis of/, 'Analysis of')
    .replace(/Best practices for mounting and assembling/, 'How to mount and assemble')
    .replace(/PCB layout best practices for power electronics including/, 'PCB layout tips for power electronics:')
    .replace(/Learn how to select the optimal Semikron IGBT module based on/, 'How to select the right Semikron IGBT module for')
    .replace(/with practical examples/, 'with examples')
    .replace(/\. Practical design guidelines with Semikron SKYPER examples\./, '. Includes Semikron SKYPER examples.')
    .replace(/\. Practical calculations and examples\./, '. Includes calculations and examples.')
    .replace(/Performance analysis and application guidelines\./, 'Performance analysis and application guidelines.');
}

function humanizeTopLevelFaqAnswer(s) {
  // Remove list formats with bold headers if any
  s = s.replace(/\*\*(.+?)\*\*\s*-\s*/g, '$1: ');
  
  // Specific rewrites for top-level FAQs
  if (s.startsWith('Verify our authorization through multiple channels:')) {
    return 'You can verify our authorization in several ways. Check Semikron\'s distributor locator, where BeiLuo Electronics is listed as a core distributor. We can provide our current authorization certificate on request. You can also contact Semikron directly to confirm our status. All products from BeiLuo include original manufacturer certificates of conformance and traceability. As a core distributor, we have direct supply agreements with Semikron and access to their full product portfolio, technical resources, and factory support. Our 20+ year partnership means reliable supply and competitive pricing.';
  }
  if (s.startsWith('Semikron product MOQ policies:')) {
    return 'MOQ policies vary by product. Many popular IGBT modules and gate drivers have no MOQ, and we accept single-piece orders for evaluation or small production runs. Volume pricing kicks in at 100, 500, 1000, and 5000+ pieces, with better pricing at higher volumes. Specialized configurations or high-voltage modules may require 50-100 piece MOQs due to manufacturing batch sizes. Free samples are available for qualified projects and volume production plans, contact our FAE for sample requests. For high-volume customers, we offer bonded inventory programs with no MOQ for scheduled releases. Stock items like SKM100GB12T4, SKM200GB12T4, and SKYPER32PRO can be ordered in any quantity. Contact sales for specific MOQ and pricing.';
  }
  if (s.startsWith('Request a quote through multiple convenient channels:')) {
    return 'You can request a quote several ways. Submit an RFQ through our website contact form with part numbers and quantities. Email your BOM to hk@elec-distributor.com with project details and target delivery. Call +86 15013702378 for urgent requirements. Message us on WhatsApp or WeChat for quick quotes on standard products. We need part numbers, quantities, required delivery date, target price if known, end application, and annual forecast for volume pricing. Standard products: 1-2 business days response. Special configurations: 3-5 business days. We offer competitive tiered pricing and can match or beat competitor pricing for qualified opportunities. Our FAE team can also review your BOM for optimization and alternatives.';
  }
  if (s.startsWith('Semikron product lead times vary by product type:')) {
    return 'Lead times vary by product. Popular products like SKM100GB12T4, SKM200GB12T4, and SKYPER32PRO ship same-day or next-day from our warehouse. Standard factory lead time is 4-8 weeks for most IGBT modules and gate drivers. Specialized high-voltage modules (>1700V) and custom configurations take 12-16 weeks. Air freight is available for urgent requirements at extra cost. For high-volume customers, we maintain dedicated stock with immediate availability. Current market conditions may affect lead times. Contact us for real-time availability and lead time confirmation for your specific requirements. We recommend forecasting and placing orders in advance for critical production schedules.';
  }
  if (s.startsWith('BeiLuo Electronics offers flexible payment terms:')) {
    return 'We offer flexible payment terms. First-time customers pay via T/T (Wire Transfer) in advance. Established customers may qualify for Net 30 terms after credit approval. We accept bank wire transfer (T/T), Letter of Credit (L/C) for large orders, and secure online payment options. We accept USD, EUR, and CNY (RMB). Net 30-60 terms are available for qualified customers with a credit application and references. High-volume, long-term partners get special payment terms and pricing. Large or custom orders may require a 30-50% deposit with balance before shipment. We provide proforma invoices on request for payment planning and approval. All prices are FCA Hong Kong unless otherwise specified. Contact our sales team to discuss payment terms that work for your business.';
  }
  if (s.startsWith('BeiLuo Electronics provides comprehensive shipping services:')) {
    return 'We ship through DHL, FedEx, and UPS for express delivery (2-5 days worldwide), air freight for larger shipments, and sea freight for cost-sensitive bulk orders. All semiconductor products use ESD-safe packaging, and moisture-sensitive devices include desiccant and humidity indicators. We ship from Hong Kong (primary), Shenzhen, or Shanghai depending on product availability and customer location. We handle export documentation; customers are responsible for import duties and taxes in the destination country. Full-value shipping insurance is included, and we provide detailed tracking information for all shipments. In-stock items dispatch same-day with express shipping, with scheduled shipments for production orders. Temperature-controlled shipping is available for sensitive components, contact us for special handling requirements.';
  }
  if (s.startsWith('BeiLuo Electronics return and warranty policies:')) {
    return 'Standard products carry a 12-month warranty from date of shipment, and certain industrial-grade products carry 24-36 months per manufacturer warranty. Report defects within 30 days of discovery; RMA is required for returns. Products are tested and replaced if a manufacturing defect is confirmed. Products must be unused, in original packaging, and returned within 90 days of shipment for standard returns; custom or programmed products are non-returnable. Non-defective returns incur a 15-25% restocking fee depending on product condition and packaging. Contact support to obtain an RMA number before returning, and include a detailed failure description for defective claims. The customer pays return shipping; BeiLuo pays replacement shipping for confirmed defects. Warranty covers manufacturing defects only; damage from misuse, overvoltage, improper handling, or unauthorized modification is not covered.';
  }
  if (s.startsWith('Identify counterfeit Semikron products with these checks:')) {
    return 'Check the packaging: authentic products use Semikron-branded anti-static bags with proper logos and part number labels; counterfeits often have poor print quality or generic packaging. Check the markings: genuine products have clear, consistent laser markings; counterfeits may have uneven, misspelled, or smudged markings. Check physical quality: authentic products have uniform molding, consistent color, and precise dimensions; counterfeits often show poor manufacturing quality. Check documentation: genuine products include manufacturer CoC and traceability documentation. Price is also a clue: prices significantly below market rate are a red flag. Source matters: only purchase from authorized distributors like BeiLuo Electronics. If you suspect counterfeit products, contact us immediately with photos, batch numbers, and supplier information. We can verify authenticity through Semikron\'s traceability systems.';
  }
  if (s.startsWith('BeiLuo Electronics provides comprehensive technical support:')) {
    return 'We offer dedicated Field Application Engineers with deep Semikron product expertise, schematic review, PCB layout guidance, thermal analysis, and component selection. We also provide troubleshooting, failure analysis, and optimization recommendations, plus access to Semikron reference designs and evaluation kits. You\'ll get datasheets, application notes, simulation models, and software libraries. Product training and application workshops are available. Technical inquiries are typically answered within 24-48 hours, and on-site support is available for major customers and complex projects. Reach us by email at hk@elec-distributor.com, phone at +86 15013702378, or WhatsApp/WeChat. Our FAE team has extensive experience with motor drives, power supplies, renewable energy, and industrial applications using Semikron components.';
  }
  if (s.startsWith('Yes, BeiLuo Electronics provides samples for qualified projects:')) {
    return 'Yes, we provide free samples for qualified projects. We typically supply 1-5 pieces per part number depending on product value and availability. We need project information including end application, estimated annual usage, and target production timeline. In-stock samples ship within 1-2 business days; factory samples may take 2-4 weeks. We also offer complete reference design kits for motor drives, power supplies, and industrial applications. Standard samples are free; the customer pays shipping. Special evaluation kits may have a nominal cost. Samples are limited to qualified business customers and are not available for personal projects or resale. To request samples, contact our FAE team with your project details and required part numbers. We prioritize requests with clear production intent and volume potential.';
  }
  if (s.startsWith('Access Semikron technical documentation through multiple channels:')) {
    return 'You can find datasheets, application notes, and reference designs on our product pages. Semikron\'s website at www.semikron.com has a complete documentation library including datasheets, app notes, simulation models, and software. Contact our support team for specific documentation not readily available. Complete design packages including schematics, PCB layouts, and BOMs are available for qualified projects. SPICE models and thermal simulation files are available for power devices, along with driver libraries, example code, and configuration tools. All documentation is free. Proprietary or restricted documents such as detailed reliability reports may require an NDA. Our FAE team can help locate specific documents and provide application-specific guidance.';
  }
  if (s.startsWith('Yes, BeiLuo Electronics offers comprehensive volume programs:')) {
    return 'Yes, we offer volume pricing with tiers at 100+, 500+, 1000+, 5000+, and 10000+ pieces, with significant discounts at higher volumes. We match or beat competitor pricing for qualified opportunities. Long-Term Agreements (LTA) provide fixed pricing and guaranteed supply for 12-24 month periods. We maintain dedicated bonded inventory for your forecasted requirements with scheduled releases. Share your production forecast for allocation priority and better pricing. We also offer consignment inventory held at your location or nearby hub, billed upon consumption, and blanket orders with scheduled deliveries to optimize logistics and pricing. Benefits include price stability, supply security, priority allocation during shortages, and dedicated FAE support. Contact our sales team to discuss your volume requirements and negotiate a supply agreement tailored to your business.';
  }
  return s;
}

function humanizeTopLevelFaqDecisionGuide(s) {
  return s
    .replace(/Contact our sales team to request authorization documentation or place your order with confidence in our genuine Semikron products\./, 'Contact our sales team for authorization documentation.')
    .replace(/Request a quote for your required quantities - we accommodate orders from single pieces to high-volume production\./, 'Request a quote for your quantities. We handle orders from single pieces to high volume.')
    .replace(/Submit your RFQ now through any channel above - our team is ready to provide competitive pricing and delivery schedules\./, 'Submit your RFQ through any channel above. We\'ll provide competitive pricing and delivery schedules.')
    .replace(/Contact sales for current lead times and stock availability, or inquire about our bonded inventory program for guaranteed supply\./, 'Contact sales for current lead times and stock availability, or ask about our bonded inventory program.')
    .replace(/Contact our sales team to discuss payment terms and establish credit terms for your organization\./, 'Contact our sales team to discuss payment and credit terms.')
    .replace(/Specify your preferred shipping method when placing your order, or let us recommend the best option for your delivery requirements\./, 'Specify your preferred shipping method when ordering, or let us recommend the best option.')
    .replace(/Contact our support team immediately if you encounter any product issues - we're committed to resolving warranty claims quickly\./, 'Contact our support team immediately if you encounter product issues. We resolve warranty claims quickly.')
    .replace(/Purchase only from BeiLuo Electronics to ensure 100% genuine Semikron products with full documentation and warranty\./, 'Buy from BeiLuo Electronics to get genuine Semikron products with full documentation and warranty.')
    .replace(/Contact our technical support team for design assistance, troubleshooting, or application guidance for your Semikron-based designs\./, 'Contact our technical support team for design help, troubleshooting, or application guidance.')
    .replace(/Contact our FAE team with your project details to request samples for evaluation and prototyping\./, 'Contact our FAE team with your project details to request samples.')
    .replace(/Browse product pages for datasheets, or contact our support team for specific technical documentation requests\./, 'Browse product pages for datasheets, or contact our support team for specific documents.')
    .replace(/Contact our sales team to discuss volume pricing, long-term agreements, and customized supply programs for your production needs\./, 'Contact our sales team to discuss volume pricing, long-term agreements, and supply programs.');
}

function humanizeArticleContent(s) {
  if (typeof s !== 'string') return s;
  // First article content
  if (s.includes('Selecting the right IGBT module is critical')) {
    return s
      .replace(/Selecting the right IGBT module is critical for your application's performance and reliability\. This comprehensive guide covers key selection criteria including voltage rating, current rating, switching frequency, package type, and thermal management\./, 'Selecting the right IGBT module matters for performance and reliability. This guide covers voltage rating, current rating, switching frequency, package type, and thermal management.')
      .replace(/SEMiTRANS 4 is ideal for industrial applications\./, 'SEMiTRANS 4 suits industrial applications.')
      .replace(/Calculate power losses and ensure adequate heat sinking for your operating conditions\./, 'Calculate power losses and make sure your heatsink can handle your operating conditions.');
  }
  // Second article content
  if (s.includes('Proper gate driver design is essential')) {
    return s
      .replace(/Proper gate driver design is essential for reliable IGBT operation\. This application note covers gate drive voltage selection, peak current requirements, isolation considerations, and protection features specific to Semikron modules\./, 'Proper gate driver design is essential for reliable IGBT operation. This note covers gate drive voltage, peak current, isolation, and protection features for Semikron modules.')
      .replace(/The SKYPER family provides this voltage with integrated isolation\./, 'The SKYPER family provides this voltage with built-in isolation.')
      .replace(/The SKYPER32PRO provides 23A peak current for fast switching of large IGBT modules\./, 'The SKYPER32PRO delivers 23A peak current for fast switching of large IGBT modules.')
      .replace(/Electrical isolation protects low-voltage control circuits\. SKYPER drivers provide 4000VAC isolation for safety\./, 'Electrical isolation protects low-voltage control circuits. SKYPER drivers provide 4000VAC isolation for safety.');
  }
  // Fifth article content (common-igbt-failures)
  if (s.includes('Understanding IGBT failure modes is essential')) {
    return s
      .replace(/Understanding IGBT failure modes is essential for reliable system design\. This article analyzes common failure mechanisms including overcurrent failure, overvoltage failure, thermal failure, and ESD damage, with practical prevention strategies\./, 'Understanding IGBT failure modes helps you design more reliable systems. This article looks at overcurrent, overvoltage, thermal failure, and ESD damage, with practical prevention strategies.');
  }
  return s;
}

function humanizeArticleFaqAnswer(s, articleTitle) {
  if (s.includes('This guide provides comprehensive information about')) {
    return `This guide covers ${articleTitle} with practical information from real field experience. It includes selection criteria, design considerations, and best practices that go beyond datasheets.`;
  }
  if (s.includes('This guide is designed for: (1)')) {
    return 'This guide is for hardware engineers, system architects, application engineers, procurement professionals, and engineering managers. It assumes basic electronics knowledge and explains advanced concepts clearly.';
  }
  if (s.includes('The key takeaways include: (1)')) {
    return "You'll learn which parameters matter most, how to select components for your application, common pitfalls to avoid, best practices for design, and where to find further support.";
  }
  if (s.includes('We offer multiple support channels: (1)')) {
    return 'You can find technical documentation and application notes on our website, browse our knowledge base, or contact our FAE team for design consultation. We also offer training, samples, and evaluation programs.';
  }
  if (s.includes('When working with') && s.includes('consider the application requirements')) {
    return `Consider your application requirements, thermal management, and component selection when working with ${articleTitle}. For more details, check our application notes or contact our technical support team.`;
  }
  return s;
}

function humanizeFaeInsightsContent(s, title) {
  return s
    .replace(/Based on years of experience, this .+? article addresses common challenges engineers face in project development\. Based on extensive field experience, we recommend following these guidelines for optimal results\. Our FAE team is available to provide additional guidance and support for your specific application requirements\./, "We've seen these challenges firsthand across many projects. These guidelines come from real field experience. If you need help with your specific application, our FAE team can assist.");
}

function humanizeFaeInsightsInsightLogic(s) {
  return s.replace(/Recommendations from analysis of successful product deployment projects across industries\./, 'These recommendations come from analyzing successful deployments across different industries.');
}

function humanizeCustomerCaseChallenge(s) {
  return s.replace(/Customer required optimized power solution with improved efficiency and thermal performance\./, 'The customer needed a power solution with better efficiency and thermal performance.');
}

function humanizeCustomerCaseFeedback(s) {
  return s.replace(/Customer reported significant performance improvement and satisfaction with the solution\./, 'The customer was satisfied with the performance improvement.');
}

function humanizeFaeBio(s) {
  return s
    .replace(/He holds a Master's degree in Electrical Engineering from Tsinghua University and has supported hundreds of design-in projects\./, 'He holds a Master\'s in Electrical Engineering from Tsinghua University and has supported hundreds of design-in projects.')
    .replace(/He has supported numerous designs in solar inverters, EV charging, and industrial power supplies using Semikron products\./, 'He has supported designs in solar inverters, EV charging, and industrial power supplies using Semikron products.');
}

function humanizeFaeInsightsInsight(s) {
  return s
    .replace(/is often underestimated in power electronics systems, yet it directly impacts/, 'is often underestimated in power electronics, yet it directly impacts')
    .replace(/I've seen that proper gate drive design can make the difference between a system that runs for years without issues and one that fails within months\./, 'I\'ve seen proper gate drive design make the difference between a system that runs for years and one that fails within months.')
    .replace(/The key is understanding that gate drive is not just about providing voltage and current - it's about controlling the switching trajectory to minimize losses while maintaining safe operating margins\./, 'Gate drive isn\'t just about voltage and current. It\'s about controlling the switching trajectory to minimize losses while maintaining safe operating margins.')
    .replace(/Through my work on failure analysis for hundreds of field returns, I've found that over 60% of power module failures are directly or indirectly related to thermal issues\./, 'Through failure analysis on hundreds of field returns, I\'ve found that over 60% of power module failures relate to thermal issues.')
    .replace(/The challenge is that thermal design requires a systems approach - it's not just about selecting a heatsink, but about understanding the complete thermal path from junction to ambient, including interface materials, mounting pressure, airflow patterns, and long-term thermal stability\./, 'Thermal design requires a systems approach. It\'s not just about picking a heatsink, but understanding the complete thermal path from junction to ambient, including interface materials, mounting pressure, airflow, and long-term stability.')
    .replace(/Many designers focus on steady-state thermal resistance but neglect transient thermal behavior, which is equally important for applications with pulsed loads\./, 'Many designers focus on steady-state thermal resistance but neglect transient behavior, which matters just as much for pulsed loads.')
    .replace(/I've seen numerous field failures that could have been prevented with proper mounting procedures\./, 'I\'ve seen field failures that proper mounting could have prevented.')
    .replace(/The interface between module and heatsink is particularly critical - thermal interface material application, mounting torque, and surface flatness all significantly impact thermal resistance\./, 'The interface between module and heatsink is critical. TIM application, mounting torque, and surface flatness all affect thermal resistance.')
    .replace(/Additionally, mechanical stress from improper mounting can lead to substrate cracking and electrical failures over time\./, 'Improper mounting can also cause mechanical stress, leading to substrate cracking and electrical failures over time.')
    .replace(/The good news is that following proper procedures and using appropriate tools can virtually eliminate these issues\./, 'Following proper procedures and using the right tools can virtually eliminate these issues.')
    .replace(/Through years of reviewing customer designs, I've identified common layout mistakes that cause significant problems\./, 'After years of reviewing customer designs, I\'ve seen common layout mistakes that cause real problems.')
    .replace(/The key principles are minimizing loop inductance in high-current paths, providing clean gate drive signals, and ensuring proper grounding\./, 'The key principles are minimizing loop inductance in high-current paths, providing clean gate drive signals, and ensuring proper grounding.')
    .replace(/These principles sound simple but require careful attention to detail in implementation\./, 'These principles sound simple but require attention to detail.')
    .replace(/Good layout practices not only improve reliability but can also reduce EMI filtering requirements and improve overall system efficiency\./, 'Good layout practices improve reliability, reduce EMI filtering requirements, and improve overall efficiency.')
    .replace(/is often the difference between a power electronics design that works reliably and one that suffers from EMI issues, noise problems, or unexpected failures\./, 'often makes the difference between a reliable design and one with EMI issues, noise problems, or unexpected failures.')
    .replace(/The SKiiP3 intelligent power module represents a significant advancement in power integration, combining IGBTs, drivers, and protection in a single package\./, 'The SKiiP3 module combines IGBTs, drivers, and protection in one package.')
    .replace(/Having supported numerous designs migrating from discrete solutions to SKiiP modules, I've observed that the benefits extend far beyond just reduced component count\./, 'I\'ve supported many designs moving from discrete solutions to SKiiP modules, and the benefits go beyond reduced component count.')
    .replace(/The integrated approach eliminates many common failure modes associated with discrete designs, such as gate drive layout issues, protection circuit inconsistencies, and thermal mismatch between devices\./, 'Integration eliminates many common failure modes from discrete designs, such as gate drive layout issues, protection inconsistencies, and thermal mismatch.')
    .replace(/However, designers need to understand that IPMs have specific requirements and limitations that differ from discrete implementations, particularly regarding switching frequency, fault handling, and thermal management\./, 'However, IPMs have specific requirements that differ from discrete implementations, particularly around switching frequency, fault handling, and thermal management.')
    .replace(/Understanding IGBT failure modes is essential not just for troubleshooting, but for designing robust systems that prevent failures in the first place\./, 'Understanding IGBT failure modes helps you design robust systems that prevent failures, not just troubleshoot them.')
    .replace(/Through my work in failure analysis, I've identified patterns that distinguish between design-related failures, application-related failures, and component quality issues\./, 'Through failure analysis, I\'ve identified patterns that distinguish design-related failures, application-related failures, and component quality issues.')
    .replace(/The majority of field failures are actually preventable through proper design practices - things like adequate protection circuits, proper thermal management, and robust gate drive design\./, 'Most field failures are preventable through proper design practices like adequate protection circuits, proper thermal management, and robust gate drive design.')
    .replace(/When failures do occur, systematic analysis can usually identify root causes and prevent recurrence\./, 'When failures do occur, systematic analysis usually finds root causes and prevents recurrence.')
    .replace(/The key is approaching failures as learning opportunities rather than just warranty issues\./, 'Treat failures as learning opportunities rather than just warranty issues.');
}

function humanizeFaeInsightsLogic(s) {
  return s
    .replace(/IGBT selection should follow a systematic approach: First, determine your DC bus voltage and select a module with at least 1\.5x voltage margin\. Second, calculate your RMS current requirements including overload conditions, then select a module with 30-50% current margin\. Third, evaluate switching frequency requirements - higher frequencies favor modules with lower switching losses\. Fourth, assess thermal constraints and ensure your heatsink can maintain junction temperature below 125°C under worst-case conditions\. Finally, consider package compatibility with your existing designs and manufacturing capabilities\./, 'Start by determining your DC bus voltage and selecting a module with at least 1.5x voltage margin. Then calculate your RMS current requirements including overloads, and select a module with 30-50% current margin. Evaluate switching frequency needs, higher frequencies favor modules with lower switching losses. Check thermal constraints and make sure your heatsink keeps junction temperature below 125°C under worst-case conditions. Finally, consider package compatibility with your existing designs and manufacturing.')
    .replace(/Gate driver selection should be based on IGBT requirements and application constraints: First, determine required gate voltage \(\+15V\/-8V for standard IGBTs\) and ensure driver can provide this with adequate margin\. Second, calculate peak gate current needed for desired switching speed - larger IGBTs require higher peak current\. Third, evaluate isolation requirements based on system voltage and safety standards\. Fourth, assess protection needs including desaturation detection, soft turn-off, and fault reporting\. Finally, consider practical factors like PCB space, power supply compatibility, and cost constraints\./, 'Select a gate driver based on your IGBT and application. Standard IGBTs need +15V/-8V, so make sure the driver provides this with margin. Calculate peak gate current for your desired switching speed, larger IGBTs need more peak current. Evaluate isolation requirements based on system voltage and safety standards. Assess protection needs like desaturation detection, soft turn-off, and fault reporting. Finally, consider practical factors like PCB space, power supply compatibility, and cost.')
    .replace(/Effective thermal management requires systematic analysis: First, calculate total power losses under all operating conditions including overload scenarios\. Second, determine maximum allowable junction temperature based on reliability requirements and datasheet limits\. Third, calculate required thermal resistance from junction to ambient using Rth\(j-a\) = \(Tj_max - Ta\) \/ P_loss\. Fourth, allocate thermal budget between module, interface material, and heatsink based on practical constraints\. Fifth, verify design through thermal simulation and validation testing under worst-case conditions\./, 'Effective thermal management requires systematic analysis. Calculate total power losses under all operating conditions including overloads. Determine your maximum allowable junction temperature based on reliability requirements and datasheet limits. Calculate required thermal resistance from junction to ambient using Rth(j-a) = (Tj_max - Ta) / P_loss. Allocate thermal budget between module, interface material, and heatsink based on practical constraints. Verify your design through thermal simulation and validation testing under worst-case conditions.')
    .replace(/Power module mounting should follow established best practices: First, verify heatsink surface flatness and cleanliness before module installation\. Second, apply thermal interface material using recommended method and quantity - too little creates voids, too much increases thermal resistance\. Third, use proper torque sequence and values - typically torque in stages to ensure even pressure distribution\. Fourth, verify electrical isolation after mounting if required\. Fifth, implement quality control checks including torque verification and visual inspection\./, 'Follow established best practices for power module mounting. Verify heatsink surface flatness and cleanliness before installation. Apply thermal interface material using the recommended method and quantity, too little creates voids and too much increases thermal resistance. Use proper torque sequence and values, typically torquing in stages for even pressure distribution. Verify electrical isolation after mounting if required. Implement quality control checks including torque verification and visual inspection.')
    .replace(/Effective PCB layout for power electronics follows key principles: First, minimize loop inductance in switching current paths by keeping high-current traces short and wide\. Second, separate power and control ground planes, connecting at a single point to prevent noise coupling\. Third, provide dedicated, low-inductance gate drive paths with Kelvin connections where possible\. Fourth, place decoupling capacitors close to power devices to minimize switching noise\. Fifth, consider thermal management in component placement and copper area allocation\./, 'Effective PCB layout for power electronics follows key principles. Minimize loop inductance in switching current paths by keeping high-current traces short and wide. Separate power and control ground planes, connecting at a single point to prevent noise coupling. Provide dedicated, low-inductance gate drive paths with Kelvin connections where possible. Place decoupling capacitors close to power devices to minimize switching noise. Consider thermal management in component placement and copper area allocation.')
    .replace(/SKiiP module selection and application should consider: First, evaluate power requirements and select appropriate current rating with adequate margin\. Second, assess switching frequency needs - SKiiP modules are optimized for 4-16kHz operation\. Third, understand protection features and fault handling requirements of your application\. Fourth, consider thermal management - integrated temperature sensing enables advanced protection but requires proper heatsink design\. Fifth, evaluate development timeline and resource constraints - SKiiP can significantly accelerate time-to-market compared to discrete designs\./, 'When selecting and applying SKiiP modules, evaluate your power requirements and select a current rating with adequate margin. Assess switching frequency needs, SKiiP modules are optimized for 4-16kHz operation. Understand the protection features and fault handling your application needs. Consider thermal management, integrated temperature sensing enables advanced protection but requires proper heatsink design. Evaluate your development timeline and resources, SKiiP can significantly accelerate time-to-market compared to discrete designs.')
    .replace(/Failure analysis should follow a systematic methodology: First, document failure symptoms and operating conditions at time of failure\. Second, perform visual inspection for obvious damage patterns like burn marks, cracks, or discoloration\. Third, electrical testing to identify failed components and failure modes\. Fourth, analyze circuit design and operating conditions to identify stress factors\. Fifth, correlate findings with known failure mechanisms to determine root cause\. Sixth, implement corrective actions and verify effectiveness through testing\./, 'Failure analysis should follow a systematic methodology. Document failure symptoms and operating conditions at the time of failure. Perform visual inspection for obvious damage patterns like burn marks, cracks, or discoloration. Do electrical testing to identify failed components and failure modes. Analyze circuit design and operating conditions to identify stress factors. Correlate findings with known failure mechanisms to determine root cause. Implement corrective actions and verify effectiveness through testing.');
}

// Apply transforms

// Categories descriptions
data.categories.forEach(cat => {
  if (cat.description) cat.description = humanizeDescription(cat.description);
});

// Top-level FAQs
data.faqs.forEach(faq => {
  if (faq.answer) faq.answer = humanizeTopLevelFaqAnswer(faq.answer);
  if (faq.decisionGuide) faq.decisionGuide = humanizeTopLevelFaqDecisionGuide(faq.decisionGuide);
});

// Articles
data.articles.forEach(article => {
  if (article.summary) article.summary = humanizeSummary(article.summary);
  if (article.content) {
    if (typeof article.content === 'string') {
      article.content = humanizeArticleContent(article.content);
    } else if (Array.isArray(article.content)) {
      article.content = article.content.map(humanizeArticleContent);
    }
  }
  
  if (article.faqs) {
    article.faqs.forEach(faq => {
      if (faq.answer) faq.answer = humanizeArticleFaqAnswer(faq.answer, article.title);
      if (faq.decisionGuide) {
        faq.decisionGuide = faq.decisionGuide
          .replace(/Continue reading for detailed technical information or contact our FAE team for personalized guidance\./, 'Continue reading for technical details, or contact our FAE team for personalized guidance.')
          .replace(/Share this guide with your team or contact us for team training sessions\./, 'Share this guide with your team, or contact us for team training.')
          .replace(/Apply these insights to your current project or contact our FAE team for implementation support\./, 'Apply these insights to your current project, or contact our FAE team for implementation support.')
          .replace(/Contact our FAE team directly for personalized technical support on your specific application\./, 'Contact our FAE team directly for technical support on your specific application.')
          .replace(/Contact our FAE team for additional guidance on .+?\./, `Contact our FAE team for additional guidance on ${article.title}.`);
      }
    });
  }
  
  if (article.faeInsights) {
    if (article.faeInsights.insight) {
      article.faeInsights.insight = humanizeFaeInsightsInsight(article.faeInsights.insight);
    }
    if (article.faeInsights.logic) {
      article.faeInsights.logic = humanizeFaeInsightsLogic(article.faeInsights.logic);
    }
    if (article.faeInsights.content) {
      article.faeInsights.content = humanizeFaeInsightsContent(article.faeInsights.content, article.title);
    }
    if (article.faeInsights.insightLogic) {
      article.faeInsights.insightLogic = humanizeFaeInsightsInsightLogic(article.faeInsights.insightLogic);
    }
  }
  
  if (article.customerCases) {
    article.customerCases.forEach(cc => {
      if (cc.challenge) cc.challenge = humanizeCustomerCaseChallenge(cc.challenge);
      if (cc.feedback) cc.feedback = humanizeCustomerCaseFeedback(cc.feedback);
    });
  }
});

// FAE bios
data.fae.forEach(fae => {
  if (fae.bio) fae.bio = humanizeFaeBio(fae.bio);
});

// FAQ section (the simple faq array at the end)
if (data.faq) {
  data.faq.forEach(f => {
    if (f.answer) {
      f.answer = f.answer
        .replace(/SEMiTRANS are standard IGBT modules requiring external gate drivers\. SKiiP modules are intelligent power modules \(IPMs\) with integrated gate drivers and protection\. Choose SEMiTRANS for flexibility, SKiiP for compact designs and faster development\./, 'SEMiTRANS are standard IGBT modules that need external gate drivers. SKiiP modules are intelligent power modules (IPMs) with built-in gate drivers and protection. Choose SEMiTRANS for flexibility, SKiiP for compact designs and faster development.')
        .replace(/Select IGBT voltage rating with at least 1\.5-2× margin over maximum expected voltage\. For 400VAC input \(540VDC\), use 1200V modules\. For 690VAC input \(900VDC\), use 1700V modules\. Always consider voltage spikes from switching transients\./, 'Select an IGBT voltage rating with at least 1.5-2x margin over your maximum expected voltage. For 400VAC input (540VDC), use 1200V modules. For 690VAC input (900VDC), use 1700V modules. Always account for voltage spikes from switching transients.')
        .replace(/Recommended gate drive voltage is \+15V\/-8V for standard Semikron IGBTs\. The SKYPER gate driver family provides this voltage with integrated isolation and protection features\./, 'Standard Semikron IGBTs need +15V/-8V gate drive voltage. The SKYPER gate driver family provides this with built-in isolation and protection.')
        .replace(/Yes, Semikron IGBT modules can be paralleled\. Key considerations: matched Vce\(sat\) characteristics, symmetrical layout for equal current sharing, individual gate resistors for each IGBT, and adequate thermal coupling\. Semikron IGBTs have positive temperature coefficient for natural current sharing\./, 'Yes, you can parallel Semikron IGBT modules. Match Vce(sat) characteristics, use symmetrical layout for equal current sharing, add individual gate resistors for each IGBT, and ensure adequate thermal coupling. Semikron IGBTs have a positive temperature coefficient for natural current sharing.')
        .replace(/SKiiP intelligent power modules integrate gate drivers, protection features, and sensors in one package\. Benefits include faster development, compact design, built-in protection \(overcurrent, overtemperature, undervoltage\), and reduced component count\./, 'SKiiP intelligent power modules integrate gate drivers, protection, and sensors in one package. You get faster development, compact design, built-in protection (overcurrent, overtemperature, undervoltage), and fewer components.')
        .replace(/Use desaturation detection to detect overcurrent within 3-10μs\. SKYPER gate drivers include this protection\. Implement soft shutdown to limit voltage spikes during fault turn-off\. Add fast-acting fuses for catastrophic faults\./, 'Use desaturation detection to catch overcurrent within 3-10μs. SKYPER gate drivers include this protection. Implement soft shutdown to limit voltage spikes during fault turn-off. Add fast-acting fuses for catastrophic faults.')
        .replace(/Semikron IGBT modules are designed for 100,000\+ hours of operation \(over 10 years\) when operated within specifications\. Key factors affecting lifetime include junction temperature \(keep Tj <125°C\), thermal cycling, and operating voltage\./, 'Semikron IGBT modules are designed for 100,000+ hours (over 10 years) when operated within specifications. Key lifetime factors are junction temperature (keep Tj <125°C), thermal cycling, and operating voltage.')
        .replace(/Yes, we provide samples of Semikron products for qualified evaluation projects\. Contact our sales team at info@ic-distributor\.com or \+86 15013702378 with your requirements\. Sample availability depends on product type and quantity\./, 'Yes, we provide Semikron samples for qualified evaluation projects. Contact our sales team at info@elec-distributor.com or +86 15013702378 with your requirements. Availability depends on product type and quantity.')
        .replace(/Standard Semikron products are typically in stock and available for same-day shipping\. For larger quantities or specialized products, lead time ranges from 4-12 weeks depending on the product family and order quantity\. Contact us for current availability\./, 'Standard Semikron products are usually in stock for same-day shipping. Larger quantities or specialized products take 4-12 weeks depending on product family and order quantity. Contact us for current availability.')
        .replace(/Yes, our FAE team provides comprehensive design-in support including component selection, schematic review, thermal analysis, PCB layout guidance, and troubleshooting\. Contact our technical support at support@ic-distributor\.com\./, 'Yes, our FAE team provides design-in support including component selection, schematic review, thermal analysis, PCB layout guidance, and troubleshooting. Contact our technical support at support@elec-distributor.com.');
    }
  });
}

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('Humanization complete.');
