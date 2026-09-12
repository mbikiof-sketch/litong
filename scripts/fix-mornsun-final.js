/**
 * Final fix script for Mornsun - fix remaining issues
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

// Fix selectionGuideLink for Gate Driver category
function fixGateDriverSelectionGuideLink() {
  const data = readJSON('products.json');
  
  data.categories.forEach(category => {
    if (category.id === 'igbt-sic-gate-driver-power-supplies') {
      category.selectionGuideLink = {
        'url': '/support/gate-driver-power-supply-selection-guide',
        'title': 'Gate Driver Power Supply Selection Guide',
        'description': 'Technical guide for selecting gate driver power supplies for IGBT and SiC MOSFET applications'
      };
      console.log(`✓ Fixed selectionGuideLink for ${category.id}`);
    }
  });
  
  writeJSON('products.json', data);
}

// Fix solutions faeInsights
function fixSolutionsFAEInsights() {
  const data = readJSON('solutions.json');
  
  data.solutions.forEach(solution => {
    if (solution.id === 'renewable-energy-power-solutions') {
      solution.faeInsights = {
        "overview": "Renewable energy systems present unique power supply challenges including wide input voltage ranges from solar panels or batteries, high reliability requirements for remote installations, and compliance with grid connection standards. Based on my experience with solar inverters, wind turbine controls, and energy storage systems, proper power supply selection is critical for system performance and longevity.",
        "technicalConsiderations": "Key considerations for renewable energy power supplies: (1) Wide input voltage range - solar panels and batteries have voltage variations of 2:1 or more; (2) High efficiency - every percentage point matters for overall system efficiency; (3) Reliability - remote installations make maintenance difficult and expensive; (4) Environmental tolerance - outdoor installations require wide temperature range and humidity resistance; (5) Grid compliance - power supplies must not interfere with grid connection requirements.",
        "selectionLogic": "For solar applications, I recommend high-efficiency AC/DC supplies with active PFC for the grid-tie inverter control power. For battery energy storage, wide input range DC/DC converters handle the battery voltage variation. For wind applications, robust DIN rail supplies withstand the harsh turbine environment. All power supplies should have 5+ year warranties and demonstrated field reliability.",
        "commonPitfalls": "Common mistakes in renewable energy power supply design: (1) Underestimating voltage variation - battery systems range from 42V (discharged) to 58V (charging); (2) Ignoring standby power - supplies must meet efficiency requirements at light load; (3) Inadequate protection - outdoor systems need surge protection and environmental sealing; (4) Poor thermal design - solar inverters can reach 60°C+ ambient; (5) Insufficient isolation - grid-tie systems need proper isolation for safety.",
        "bestPractices": "Best practices I've learned from successful renewable energy projects: (1) Always use supplies rated for at least 125% of calculated load to handle peak demands; (2) Implement redundant power for critical monitoring and control functions; (3) Use conformal coating on PCBs for humidity protection; (4) Include surge protection devices (SPDs) on all external connections; (5) Design for 20-year system lifetime with 10+ year power supply MTBF; (6) Plan for worst-case temperature conditions with adequate derating."
      };
      console.log(`✓ Fixed faeInsights for ${solution.id}`);
    }
  });
  
  writeJSON('solutions.json', data);
}

// Fix support articles faeInsights
function fixSupportFAEInsights() {
  const data = readJSON('support.json');
  
  data.articles.forEach(article => {
    if (article.id === 'renewable-energy-power-supply-design-guide') {
      article.faeInsights = {
        "overview": "Designing power supplies for renewable energy applications requires understanding the unique challenges of solar, wind, and energy storage systems. Having worked on numerous renewable energy projects, I've learned that power supply design can make or break system performance and reliability.",
        "technicalConsiderations": "Renewable energy power supplies must handle: (1) Extreme input voltage variations - solar panels range from 0V (dark) to open-circuit voltage; battery systems vary 30-40% between charge states; (2) Environmental stress - outdoor temperatures from -40°C to +85°C, humidity, salt air, dust; (3) Long lifetime requirements - 20-25 year system life with minimal maintenance; (4) Grid interconnection requirements - power quality, anti-islanding, fault ride-through; (5) Safety standards - UL 1741, IEEE 1547, IEC 62109 for grid-tie systems.",
        "selectionLogic": "My approach to renewable energy power supply selection: First, characterize the input source - solar I-V curve, battery voltage range, wind turbine output. Second, determine output requirements - voltage rails, power levels, sequencing needs. Third, assess environmental conditions - temperature range, humidity, altitude, pollution degree. Fourth, select topology - AC/DC for grid-tie, DC/DC for battery systems, DIN rail for control panels. Fifth, verify certifications - UL 1741-SA for smart inverters, IEC 62109 for safety.",
        "commonPitfalls": "Pitfalls I've encountered in renewable energy designs: (1) Inadequate input voltage range - battery systems need 2:1 input range minimum; (2) Poor thermal design - inverters can reach 70°C+ internal temperature; (3) Insufficient surge protection - lightning strikes are common in solar farms; (4) Wrong isolation grade - grid-tie systems need reinforced insulation; (5) Ignoring light-load efficiency - inverters spend much time at partial load; (6) Inadequate filtering - switching noise can affect MPPT accuracy.",
        "bestPractices": "Best practices for reliable renewable energy power supplies: (1) Use 85°C rated capacitors for long life in hot environments; (2) Implement active PFC for any supply >75W to meet IEC 61000-3-2; (3) Design for 50% derating at maximum ambient temperature; (4) Include input fuses and MOVs for surge protection; (5) Use conformal coating for outdoor PCB assemblies; (6) Plan for thermal management - heatsinks, fans, or natural convection; (7) Validate design with HALT testing (Highly Accelerated Life Test); (8) Include remote monitoring capabilities for predictive maintenance."
      };
      console.log(`✓ Fixed faeInsights for ${article.id}`);
    }
  });
  
  writeJSON('support.json', data);
}

// Main execution
console.log('Starting final Mornsun fixes...\n');

fixGateDriverSelectionGuideLink();
fixSolutionsFAEInsights();
fixSupportFAEInsights();

console.log('\n✅ All final fixes completed successfully!');
