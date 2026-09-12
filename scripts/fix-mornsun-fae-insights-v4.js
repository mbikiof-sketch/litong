/**
 * Fix faeInsights for Mornsun support articles - Version 4
 * Convert commonPitfalls and bestPractices to arrays for template compatibility
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'mornsun');

function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// Fix support articles faeInsights - convert strings to arrays
function fixSupportFAEInsights() {
  const data = readJSON('support.json');
  
  data.articles.forEach(article => {
    if (article.id === 'mornsun-renewable-energy-design-guide') {
      article.faeInsights = {
        "author": "Senior FAE - Renewable Energy Systems",
        "content": "Designing power supplies for renewable energy applications requires understanding the unique challenges of solar, wind, and energy storage systems. Having worked on numerous renewable energy projects, I've learned that power supply design can make or break system performance and reliability. Renewable energy power supplies must handle extreme input voltage variations - solar panels range from 0V (dark) to open-circuit voltage; battery systems vary 30-40% between charge states. Environmental stress includes outdoor temperatures from -40°C to +85°C, humidity, salt air, and dust. Long lifetime requirements demand 20-25 year system life with minimal maintenance. Grid interconnection requirements include power quality, anti-islanding, and fault ride-through capabilities. Safety standards such as UL 1741, IEEE 1547, and IEC 62109 apply to grid-tie systems. My approach to renewable energy power supply selection starts with characterizing the input source - solar I-V curve, battery voltage range, and wind turbine output. Then determine output requirements including voltage rails, power levels, and sequencing needs. Assess environmental conditions including temperature range, humidity, altitude, and pollution degree. Select topology - AC/DC for grid-tie, DC/DC for battery systems, DIN rail for control panels. Finally, verify certifications - UL 1741-SA for smart inverters, IEC 62109 for safety.",
        "insightLogic": "Start with input source characterization, then output requirements, environmental assessment, topology selection, and certification verification.",
        "overview": "Designing power supplies for renewable energy applications requires understanding the unique challenges of solar, wind, and energy storage systems. Having worked on numerous renewable energy projects, I've learned that power supply design can make or break system performance and reliability.",
        "technicalConsiderations": "Renewable energy power supplies must handle: (1) Extreme input voltage variations - solar panels range from 0V (dark) to open-circuit voltage; battery systems vary 30-40% between charge states; (2) Environmental stress - outdoor temperatures from -40°C to +85°C, humidity, salt air, dust; (3) Long lifetime requirements - 20-25 year system life with minimal maintenance; (4) Grid interconnection requirements - power quality, anti-islanding, fault ride-through; (5) Safety standards - UL 1741, IEEE 1547, IEC 62109 for grid-tie systems.",
        "selectionLogic": "My approach to renewable energy power supply selection: First, characterize the input source - solar I-V curve, battery voltage range, wind turbine output. Second, determine output requirements - voltage rails, power levels, sequencing needs. Third, assess environmental conditions - temperature range, humidity, altitude, pollution degree. Fourth, select topology - AC/DC for grid-tie, DC/DC for battery systems, DIN rail for control panels. Fifth, verify certifications - UL 1741-SA for smart inverters, IEC 62109 for safety.",
        "commonPitfalls": [
          "Inadequate input voltage range - battery systems need 2:1 input range minimum",
          "Poor thermal design - inverters can reach 70°C+ internal temperature",
          "Insufficient surge protection - lightning strikes are common in solar farms",
          "Wrong isolation grade - grid-tie systems need reinforced insulation",
          "Ignoring light-load efficiency - inverters spend much time at partial load",
          "Inadequate filtering - switching noise can affect MPPT accuracy"
        ],
        "bestPractices": [
          "Use 85°C rated capacitors for long life in hot environments",
          "Implement active PFC for any supply >75W to meet IEC 61000-3-2",
          "Design for 50% derating at maximum ambient temperature",
          "Include input fuses and MOVs for surge protection",
          "Use conformal coating for outdoor PCB assemblies",
          "Plan for thermal management - heatsinks, fans, or natural convection",
          "Validate design with HALT testing (Highly Accelerated Life Test)",
          "Include remote monitoring capabilities for predictive maintenance"
        ]
      };
      console.log(`✓ Fixed faeInsights for article: ${article.id}`);
    }
  });
  
  writeJSON('support.json', data);
}

// Main execution
console.log('Starting faeInsights fix for Mornsun (v4)...\n');

fixSupportFAEInsights();

console.log('\n✅ All faeInsights fixes completed successfully!');
