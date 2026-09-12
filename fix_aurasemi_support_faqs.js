const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'aurasemi');
const supportPath = path.join(dataDir, 'support.json');

// Read support.json
let support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix article 1: aurasemi-clock-selection-guide
const article1 = support.articles.find(a => a.id === 'aurasemi-clock-selection-guide');
if (article1 && article1.faqs.length < 5) {
  article1.faqs.push({
    "question": "What is the typical lead time for Aurasemi clock products?",
    "answer": "Standard lead times for Aurasemi clock products: (1) Samples - 1-2 weeks from stock; (2) Production orders (1K-10K) - 4-6 weeks; (3) Large volume orders (>10K) - 8-10 weeks; (4) Custom configurations - 10-12 weeks. Lead times may vary based on current demand and factory capacity. Contact LiTong sales for current lead time estimates and to discuss expedited delivery options for urgent projects.",
    "decisionGuide": "Plan for 4-6 weeks standard lead time; contact sales for expedited options.",
    "keywords": ["lead time", "delivery", "sample availability", "production schedule"]
  });
  console.log('Added FAQ to aurasemi-clock-selection-guide');
}

// Fix article 2: aurasemi-power-selection-guide
const article2 = support.articles.find(a => a.id === 'aurasemi-power-selection-guide');
if (article2 && article2.faqs.length < 5) {
  article2.faqs.push({
    "question": "What thermal management is required for high-current power management ICs?",
    "answer": "Thermal management for high-current power ICs: (1) Copper area - provide 1-2 square inches of copper on top layer for heat dissipation; (2) Thermal vias - use 9-16 vias under the IC pad to spread heat to inner layers; (3) Airflow - ensure adequate airflow in enclosure; (4) Heatsinks - consider external heatsinks for >10A applications; (5) Temperature monitoring - implement thermal shutdown in software. Calculate junction temperature using: Tj = Ta + (Ploss × θja). Keep Tj below 125°C for reliable operation.",
    "decisionGuide": "Provide adequate copper area and thermal vias; calculate junction temperature.",
    "keywords": ["thermal management", "heatsink", "junction temperature", "power dissipation"]
  });
  console.log('Added FAQ to aurasemi-power-selection-guide');
}

// Fix article 3: aurasemi-wireless-selection-guide
const article3 = support.articles.find(a => a.id === 'aurasemi-wireless-selection-guide');
if (article3 && article3.faqs.length < 5) {
  article3.faqs.push({
    "question": "What antenna options are available for Aurasemi wireless transceivers?",
    "answer": "Antenna options for Aurasemi wireless products: (1) PCB trace antennas - lowest cost, integrated on main PCB, suitable for compact designs; (2) Chip antennas - small SMD package, minimal PCB area, good for 2.4GHz; (3) Wire antennas - simple monopole or dipole, excellent performance, requires more space; (4) External antennas - SMA or U.FL connector, best range and flexibility; (5) Ceramic antennas - compact, good performance, moderate cost. Antenna selection depends on: frequency band, size constraints, range requirements, and cost budget. Contact LiTong FAE for antenna design assistance and matching network optimization.",
    "decisionGuide": "Select antenna based on size constraints, range needs, and cost budget.",
    "keywords": ["antenna selection", "PCB antenna", "chip antenna", "matching network"]
  });
  console.log('Added FAQ to aurasemi-wireless-selection-guide');
}

// Write back
fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('\nFixed aurasemi support.json FAQ counts successfully!');
