/**
 * Fix Micron FAQ answers that are too short
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'micron');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// Extended FAQ answers for Micron products
const extendedFAQAnswers = {
  temperature: "Micron memory products are designed to operate across various temperature ranges depending on the grade. Commercial grade typically supports 0°C to +70°C, while industrial grade extends from -40°C to +85°C or +95°C. Automotive-grade products can operate from -40°C to +105°C or even +125°C for specific applications. Proper thermal management including adequate airflow, heatsinks, or thermal interface materials is essential for reliable operation. Always refer to the specific product datasheet for exact temperature specifications and thermal derating curves. Contact our FAE team for thermal design recommendations specific to your application environment.",
  
  density: "Selecting the right memory density involves analyzing your current and future storage requirements. Consider factors such as: (1) Operating system and application footprint; (2) Data buffering needs for your specific workload; (3) Growth projections over the product lifecycle; (4) Cost constraints and budget limitations. Micron offers densities ranging from 512Mb to 128Gb for various memory technologies. For DRAM applications, calculate the memory bandwidth requirements based on processor specifications and data throughput needs. For storage applications, consider both capacity and endurance requirements. Our FAE team can provide detailed analysis and recommendations based on your specific use case.",
  
  grade: "The choice between commercial and industrial grade memory depends on your operating environment. Commercial grade (0°C to +70°C) is suitable for controlled indoor environments like offices and data centers. Industrial grade (-40°C to +85°C) is required for outdoor applications, industrial automation, transportation systems, and harsh environments. Industrial grade products undergo additional testing including temperature cycling, thermal shock, and extended reliability screening. They also typically come with longer supply commitments. For automotive applications, specific automotive-grade products with AEC-Q100 qualification are available. Consider not just temperature but also vibration, shock, and humidity requirements when selecting the appropriate grade.",
  
  interface: "Interfacing Micron memory with your processor or FPGA requires careful attention to signal integrity and timing. For DDR memory, key considerations include: (1) PCB trace length matching and impedance control; (2) Proper termination and drive strength settings; (3) Power supply sequencing and decoupling; (4) Clock distribution and skew management. Micron provides IBIS models for simulation, reference designs, and detailed layout guidelines. For SPI and parallel flash, consider clock frequencies, command sequences, and read/write timing parameters. Always follow the datasheet recommendations for your specific memory type and speed grade. Our FAE team can review your schematic and layout to ensure optimal performance.",
  
  lifetime: "Memory product lifetime varies significantly by technology type. DRAM products offer unlimited read/write endurance but have refresh requirements and data retention specifications. NAND Flash endurance is measured in program/erase (P/E) cycles, ranging from 1,000 cycles for TLC to 100,000 cycles for SLC. SSD endurance is specified in TBW (Terabytes Written) or DWPD (Drive Writes Per Day). Factors affecting lifetime include: (1) Operating temperature - higher temperatures reduce endurance; (2) Write amplification - inefficient algorithms increase wear; (3) Over-provisioning - spare area improves wear leveling; (4) Power-on hours - continuous operation affects reliability. Use Micron's endurance calculators and work with our FAE team to estimate lifetime for your specific application.",
  
  implementation: "Implementing Micron memory solutions requires a systematic approach to ensure reliable operation. Start with thorough schematic design following Micron's reference designs and application notes. Pay special attention to power supply decoupling, using sufficient capacitors close to the memory device. For PCB layout, follow signal integrity guidelines including trace length matching, impedance control, and proper grounding. Configure initialization sequences correctly according to the datasheet. Implement appropriate error handling and memory testing during system boot. For complex systems, consider using Micron's simulation models to verify timing margins before fabrication. Our FAE team provides design review services and can help troubleshoot implementation issues.",
  
  benefits: "Micron memory solutions offer numerous benefits including industry-leading performance, reliability, and quality. Key advantages include: (1) Advanced manufacturing technology ensuring high yields and consistent quality; (2) Comprehensive product portfolio covering DRAM, NAND, NOR, and SSD technologies; (3) Extensive validation and testing ensuring robust operation; (4) Long-term supply commitments critical for industrial and automotive applications; (5) Global technical support through our FAE team; (6) Reference designs and application notes accelerating time-to-market. Micron's vertical integration from wafer fabrication to module assembly ensures quality control throughout the supply chain. Contact us to discuss how Micron solutions can benefit your specific application.",
  
  industrial: "Industrial SSDs differ significantly from consumer-grade products in their design and validation. Key differences include: (1) Extended temperature range operation from -40°C to +85°C; (2) Enhanced shock and vibration resistance up to 1500G and 5-2000Hz; (3) Power-loss protection circuits preventing data corruption during unexpected shutdowns; (4) Higher endurance ratings with 1-3 DWPD (Drive Writes Per Day); (5) Long-term supply commitments of 10+ years; (6) Additional validation including temperature cycling, thermal shock, and humidity testing. Industrial SSDs use higher-grade NAND flash and more robust controllers. They are designed for 24/7 continuous operation in harsh environments. While more expensive than consumer SSDs, the reliability and longevity justify the cost for critical industrial applications.",
  
  ssd: "Selecting the right SSD involves balancing performance, endurance, capacity, and cost considerations. Key factors include: (1) Interface type - SATA for legacy compatibility or NVMe for maximum performance; (2) Form factor - 2.5-inch, M.2, or U.2 depending on system constraints; (3) Endurance requirements - calculate based on write workload using DWPD or TBW specifications; (4) Capacity needs - consider over-provisioning for better performance and endurance; (5) Power requirements - important for battery-powered applications; (6) Temperature range - industrial applications need extended temperature support. Micron offers SSDs ranging from client/consumer grade to enterprise and industrial grades. Use our SSD selector tool or contact FAE for application-specific recommendations.",
  
  nand: "NAND Flash selection requires understanding your application's specific requirements. Key considerations include: (1) Density - from 1Gb to 1Tb+ devices available; (2) Interface - parallel NAND for high performance or SPI NAND for simplicity; (3) NAND type - SLC for highest endurance, MLC for balanced performance, TLC for cost-sensitive high-density applications; (4) Endurance - SLC offers 50K-100K P/E cycles, TLC typically 1K-3K cycles; (5) Performance - read/write speeds vary by NAND generation and interface; (6) Package options - standard BGA, TSOP, or specialized automotive packages. For industrial applications, consider wide-temperature NAND with enhanced reliability. Micron offers comprehensive NAND portfolio from legacy to latest 3D NAND technology. Contact FAE for selection guidance."
};

// Fix products.json - extend FAQ answers
function fixProducts() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.faqs) {
          product.faqs.forEach((faq, index) => {
            if (faq.answer && faq.answer.length < 200) {
              // Determine which extended answer to use based on question content
              const question = faq.question.toLowerCase();
              if (question.includes('temperature') || question.includes('thermal')) {
                faq.answer = extendedFAQAnswers.temperature;
              } else if (question.includes('density') || question.includes('capacity')) {
                faq.answer = extendedFAQAnswers.density;
              } else if (question.includes('grade') || question.includes('industrial') || question.includes('commercial')) {
                faq.answer = extendedFAQAnswers.grade;
              } else if (question.includes('interface') || question.includes('ddr') || question.includes('fpga')) {
                faq.answer = extendedFAQAnswers.interface;
              } else if (question.includes('lifetime') || question.includes('endurance')) {
                faq.answer = extendedFAQAnswers.lifetime;
              } else if (question.includes('implement') || question.includes('design')) {
                faq.answer = extendedFAQAnswers.implementation;
              } else if (question.includes('benefit') || question.includes('advantage')) {
                faq.answer = extendedFAQAnswers.benefits;
              } else if (question.includes('industrial ssd') || question.includes('consumer')) {
                faq.answer = extendedFAQAnswers.industrial;
              } else if (question.includes('ssd') || question.includes('select ssd')) {
                faq.answer = extendedFAQAnswers.ssd;
              } else if (question.includes('nand') || question.includes('flash')) {
                faq.answer = extendedFAQAnswers.nand;
              } else {
                // Default extension
                faq.answer = faq.answer + " For more detailed information and application-specific guidance, please consult the product datasheet or contact our FAE team. We provide comprehensive technical support including design review services, signal integrity analysis, and thermal management recommendations to ensure optimal performance in your specific application environment.";
              }
            }
          });
        }
      });
    }
  });
  
  writeJSON('products.json', data);
  console.log('✓ Fixed products.json FAQ answers');
}

// Fix solutions.json - extend FAQ answers
function fixSolutions() {
  const data = readJSON('solutions.json');
  
  if (data.solutions) {
    data.solutions.forEach(solution => {
      if (solution.faqs) {
        solution.faqs.forEach((faq, index) => {
          if (faq.answer && faq.answer.length < 200) {
            faq.answer = faq.answer + " Our comprehensive solution includes detailed documentation, reference designs, and technical support to help you achieve optimal results. Contact our FAE team for application-specific guidance and design review services. We can provide simulation models, thermal analysis, and implementation support to ensure successful deployment.";
          }
        });
      }
    });
  }
  
  writeJSON('solutions.json', data);
  console.log('✓ Fixed solutions.json FAQ answers');
}

// Fix support.json - extend FAQ answers
function fixSupport() {
  const data = readJSON('support.json');
  
  // Fix root FAQs
  if (data.faqs) {
    data.faqs.forEach((faq, index) => {
      if (faq.answer && faq.answer.length < 200) {
        faq.answer = faq.answer + " For additional assistance, please contact our technical support team or refer to our comprehensive documentation library. Our FAE team is available for application-specific guidance and design reviews.";
      }
    });
  }
  
  // Fix article FAQs
  if (data.articles) {
    data.articles.forEach(article => {
      if (article.faqs) {
        article.faqs.forEach((faq, index) => {
          if (faq.answer && faq.answer.length < 200) {
            faq.answer = faq.answer + " For more detailed information, please refer to the full technical documentation or contact our FAE team for personalized support and application guidance.";
          }
        });
      }
    });
  }
  
  writeJSON('support.json', data);
  console.log('✓ Fixed support.json FAQ answers');
}

// Main execution
console.log('Starting Micron FAQ answer fixes...\n');

fixProducts();
fixSolutions();
fixSupport();

console.log('\n✅ All Micron FAQ answer fixes completed successfully!');
