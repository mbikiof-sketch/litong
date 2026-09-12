/**
 * Fix Chinese content in aowei products.json
 * Replace all Chinese text with English equivalents
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'aowei', 'products.json');

console.log('Reading products.json...');
let content = fs.readFileSync(productsPath, 'utf8');

// Translation mappings for Chinese to English
const translations = {
  // Short descriptions
  '3000F 2.7V圆柱形超级电容，适用于有轨电车、地铁、混合动力汽车': '3000F 2.7V cylindrical supercapacitor for trams, metro, and hybrid vehicles',
  '6800F 2.8-4.0V高能量密度圆柱形超级电容，适用于城市客车': '6800F 2.8-4.0V high energy density cylindrical supercapacitor for city buses',
  '9000F 2.8-4.0V方形超级电容，高能量密度78Wh/kg': '9000F 2.8-4.0V prismatic supercapacitor with 78Wh/kg energy density',
  '28000F 2.8-4.0V超大容量方形超级电容，适用于高能量应用': '28000F 2.8-4.0V ultra-high capacity prismatic supercapacitor for high-energy applications',

  // Descriptions
  'UCR27V3000B是奥威科技推出的高容量圆柱形超级电容，具有3000F标称容量和2.7V工作电压。': 'UCR27V3000B is a high-capacity cylindrical supercapacitor from Aowei Technology, featuring 3000F nominal capacitance and 2.7V working voltage.',
  'UCK42V6800C是奥威科技推出的高能量密度超级电容，专为城市客车设计。': 'UCK42V6800C is a high energy density supercapacitor from Aowei Technology, designed for city bus applications.',
  'UCK42V9000是奥威科技推出的方形超级电容，具有9000F超大容量和78Wh/kg能量密度。': 'UCK42V9000 is a prismatic supercapacitor from Aowei Technology, featuring 9000F ultra-high capacity and 78Wh/kg energy density.',
  'UCK42V28000是奥威科技推出的超大容量方形超级电容，容量达28000F。': 'UCK42V28000 is an ultra-high capacity prismatic supercapacitor from Aowei Technology with 28000F capacitance.',

  // Description paragraphs
  'UCR27V3000B采用先进的双电层电容技术，提供高功率密度和长循环寿命。': 'UCR27V3000B utilizes advanced electric double-layer capacitor technology, providing high power density and long cycle life.',
  '该产品具有低内阻、高能量密度的特点，适用于需要快速充放电的应用场景。': 'This product features low ESR and high energy density, suitable for applications requiring rapid charge/discharge.',
  '通过CE、RoHS认证，工作温度范围-25°C至+55°C，确保在各种环境下稳定运行。': 'CE and RoHS certified, with operating temperature range of -25°C to +55°C, ensuring stable operation in various environments.',
  'UCK42V6800C采用先进的电极材料和电解液配方，实现高达54Wh/kg的能量密度。': 'UCK42V6800C uses advanced electrode materials and electrolyte formulation, achieving energy density up to 54Wh/kg.',
  '支持5C充放电，循环寿命达5万次（2.8-4.0V），满足城市公交频繁启停需求。': 'Supports 5C charge/discharge with 50,000 cycle life (2.8-4.0V), meeting frequent start-stop requirements of city buses.',
  '宽工作温度窗口-25°C至+55°C，内置多重防护设计，确保安全可靠运行。': 'Wide operating temperature window of -25°C to +55°C with built-in multi-protection design ensures safe and reliable operation.',
  'UCK42V9000采用方形设计，便于模组集成和空间优化。': 'UCK42V9000 features prismatic design for easy module integration and space optimization.',
  '9000F容量配合2.8-4.0V工作电压，储存能量达36Wh（2.8-4.0V）。': '9000F capacitance with 2.8-4.0V working voltage stores energy up to 36Wh (2.8-4.0V).',
  '标准充放电电流100A，最大200A（<20s），满足高功率应用需求。': 'Standard charge/discharge current 100A, maximum 200A (<20s), meeting high-power application requirements.',
  'UCK42V28000具有28000F超大容量，储存能量达112Wh（2.8-4.0V）。': 'UCK42V28000 features 28000F ultra-high capacity, storing energy up to 112Wh (2.8-4.0V).',
  '能量密度80Wh/kg，功率密度高，支持快速充放电。': 'Energy density of 80Wh/kg with high power density supports rapid charge/discharge.',
  '适用于对能量和功率要求较高的工况，如船舶电源、重型牵引车等。': 'Suitable for applications with high energy and power requirements, such as marine power and heavy-duty traction vehicles.',

  // Features
  '3000F高容量设计': '3000F high-capacity design',
  '超低内阻≤0.8mΩ': 'Ultra-low ESR ≤0.8mΩ',
  '10万次以上循环寿命': '100,000+ cycle life',
  '宽工作温度范围': 'Wide operating temperature range',
  '通过CE、RoHS认证': 'CE and RoHS certified',
  '高功率密度': 'High power density',
  '6800F超大容量': '6800F ultra-high capacity',
  '54Wh/kg高能量密度': '54Wh/kg high energy density',
  '5C高倍率充放电': '5C high-rate charge/discharge',
  '5万次循环寿命': '50,000 cycle life',
  '多重安全防护': 'Multiple safety protections',
  '宽温度范围': 'Wide temperature range',
  '9000F超大容量': '9000F ultra-high capacity',
  '78Wh/kg高能量密度': '78Wh/kg high energy density',
  '方形设计便于集成': 'Prismatic design for easy integration',
  '低内阻≤0.5mΩ': 'Low ESR ≤0.5mΩ',
  '高功率输出': 'High power output',
  '28000F超大容量': '28000F ultra-high capacity',
  '112Wh高能量储存': '112Wh high energy storage',
  '80Wh/kg能量密度': '80Wh/kg energy density',
  '超低内阻≤0.35mΩ': 'Ultra-low ESR ≤0.35mΩ',
  '长循环寿命': 'Long cycle life',

  // Applications
  '有轨电车': 'Trams',
  '地铁': 'Metro/Subway',
  '混合动力汽车': 'Hybrid Vehicles',
  '节能电梯': 'Energy-saving Elevators',
  '应急电源': 'Emergency Power',
  '城市客车': 'City Buses',
  '隧道机车': 'Tunnel Locomotives',
  '矿用机车': 'Mining Locomotives',
  '码头车': 'Port Vehicles',
  '船用电源': 'Marine Power',
  '智能电网': 'Smart Grid',
  '可再生能源储能': 'Renewable Energy Storage',
  '重型牵引车': 'Heavy-duty Traction Vehicles',
  '大功率储能': 'High-power Energy Storage',

  // Companion parts descriptions
  '方形超级电容模组': 'Prismatic Supercapacitor Module',
  '24V超级电容模组': '24V Supercapacitor Module',
  '电容管理系统': 'Capacitor Management System',
  '9000F超级电容': '9000F Supercapacitor',
  '城市客车电容系统': 'City Bus Capacitor System',
  '28000F大容量电容': '28000F High-capacity Capacitor',
  '72V超级电容模组': '72V Supercapacitor Module',
  '有轨电车电容系统': 'Tram Capacitor System',
  '大容量电容管理系统': 'High-capacity Capacitor Management System',
  '电机车电容系统': 'Electric Locomotive Capacitor System',

  // FAQ Questions
  'UCR27V3000B的循环寿命是多少？': 'What is the cycle life of UCR27V3000B?',
  '工作温度范围是多少？': 'What is the operating temperature range?',
  '如何正确使用和维护？': 'How to properly use and maintain?',
  '内阻是多少？': 'What is the ESR?',
  '有哪些安全认证？': 'What safety certifications are available?',
  'UCK42V6800C的能量密度是多少？': 'What is the energy density of UCK42V6800C?',
  '支持多大的充放电电流？': 'What charge/discharge current is supported?',
  '循环寿命如何？': 'How is the cycle life?',
  '有哪些安全保护措施？': 'What safety protection measures are included?',
  '适合哪些应用场景？': 'What applications is it suitable for?',
  'UCK42V9000的容量和能量是多少？': 'What is the capacitance and energy of UCK42V9000?',
  '能量密度是多少？': 'What is the energy density?',
  '充放电性能如何？': 'How is the charge/discharge performance?',
  '方形设计有什么优势？': 'What are the advantages of prismatic design?',
  '循环寿命是多少？': 'What is the cycle life?',
  'UCK42V28000的容量是多少？': 'What is the capacitance of UCK42V28000?',

  // FAQ Answers
  'UCR27V3000B的循环寿命可达10万次以上（25°C，额定电压充放电）。': 'UCR27V3000B cycle life reaches 100,000+ cycles (25°C, rated voltage charge/discharge).',
  '工作温度范围为-25°C至+55°C，储存温度-30°C至+60°C。': 'Operating temperature range is -25°C to +55°C, storage temperature -30°C to +60°C.',
  '避免超过额定电压、防止短路、定期检查电压，长期存储需定期补电。': 'Avoid exceeding rated voltage, prevent short circuits, check voltage regularly, and recharge periodically during long-term storage.',
  '直流内阻≤0.8mΩ，低内阻确保高功率输出能力。': 'DC ESR ≤0.8mΩ, low ESR ensures high power output capability.',
  '通过CE、RoHS认证，符合国际安全标准。': 'CE and RoHS certified, meeting international safety standards.',
  '能量密度高达54Wh/kg，在超级电容领域处于领先水平。': 'Energy density up to 54Wh/kg, leading in the supercapacitor field.',
  '标准充放电电流70A，最大电流140A（<20s）。': 'Standard charge/discharge current 70A, maximum current 140A (<20s).',
  '在2.8-4.0V电压区间循环寿命达5万次。': '50,000 cycle life in 2.8-4.0V voltage range.',
  '采用多重防护设计，包括过压、过流、过热保护。': 'Multi-protection design includes over-voltage, over-current, and over-temperature protection.',
  '特别适合城市公交、轨道交通等频繁启停应用。': 'Particularly suitable for frequent start-stop applications such as city buses and rail transit.',
  '容量9000F，在2.8-4.0V区间储存能量36Wh。': '9000F capacitance, storing 36Wh energy in 2.8-4.0V range.',
  '能量密度达78Wh/kg，处于行业领先水平。': 'Energy density reaches 78Wh/kg, leading in the industry.',
  '标准电流100A，最大200A（<20s），支持快速充放电。': 'Standard current 100A, maximum 200A (<20s), supporting rapid charge/discharge.',
  '方形设计便于模组集成，空间利用率高，散热性能好。': 'Prismatic design facilitates module integration with high space utilization and good heat dissipation.',
  '容量达28000F，是奥威最大容量的单体超级电容之一。': '28000F capacitance, one of Aowei\'s highest capacity single supercapacitors.',

  // FAQ Decision Guides
  '长循环寿命适合频繁充放电应用。': 'Long cycle life suitable for frequent charge/discharge applications.',
  '宽温度范围适应各种环境。': 'Wide temperature range adapts to various environments.',
  '遵循使用规范确保产品寿命。': 'Follow usage guidelines to ensure product life.',
  '低内阻适合大功率应用。': 'Low ESR suitable for high-power applications.',
  '认证齐全，可放心使用。': 'Full certifications for reliable use.',
  '高能量密度适合空间受限的应用。': 'High energy density suitable for space-constrained applications.',
  '高倍率适合快速充放电场景。': 'High rate suitable for rapid charge/discharge scenarios.',
  '长寿命降低总拥有成本。': 'Long life reduces total cost of ownership.',
  '完善保护确保系统安全。': 'Complete protection ensures system safety.',
  '根据功率和能量需求选择。': 'Select based on power and energy requirements.',
  '大容量适合高能量需求应用。': 'Large capacity suitable for high-energy demand applications.',
  '高能量密度减少系统重量。': 'High energy density reduces system weight.',
  '高倍率性能适合大功率应用。': 'High-rate performance suitable for high-power applications.',
  '方形适合模组化应用。': 'Prismatic suitable for modular applications.',
  '长寿命降低维护成本。': 'Long life reduces maintenance costs.',
  '超大容量适合高能量需求。': 'Ultra-high capacity suitable for high-energy demands.',

  // FAQ Keywords
  '循环寿命': 'cycle life',
  '充放电': 'charge discharge',
  '寿命': 'life',
  '温度范围': 'temperature range',
  '工作环境': 'operating environment',
  '储存': 'storage',
  '使用规范': 'usage guidelines',
  '维护': 'maintenance',
  '内阻': 'ESR',
  '功率': 'power',
  '认证': 'certification',
  '能量密度': 'energy density',
  'Wh/kg': 'Wh/kg',
  '高能量': 'high energy',
  '充放电电流': 'charge/discharge current',
  '倍率': 'rate',
  '充放电次数': 'charge/discharge cycles',
  '安全保护': 'safety protection',
  '过压保护': 'over-voltage protection',
  '多重防护': 'multi-protection',
  '应用场景': 'applications',
  '轨道交通': 'rail transit',
  '容量': 'capacity',
  '能量': 'energy',
  '轻量化': 'lightweight',
  '方形设计': 'prismatic design',
  '模组集成': 'module integration',
  '散热': 'heat dissipation',

  // FAE Review summaries
  'UCR27V3000B是奥威圆柱形超级电容的主力产品，性能稳定可靠。': 'UCR27V3000B is Aowei\'s flagship cylindrical supercapacitor product with stable and reliable performance.',
  'UCK42V6800C是奥威高能量密度超级电容的代表产品，在城市公交领域广泛应用。': 'UCK42V6800C is Aowei\'s representative high energy density supercapacitor, widely used in city bus applications.',
  'UCK42V9000是奥威方形超级电容的主力产品，高能量密度和方形设计使其在系统集成中具有优势。': 'UCK42V9000 is Aowei\'s flagship prismatic supercapacitor, with high energy density and prismatic design providing integration advantages.',

  // FAE Review key points
  '高容量3000F满足大能量需求': '3000F high capacity meets large energy demands',
  '低内阻确保高功率输出': 'Low ESR ensures high power output',
  '长循环寿命降低使用成本': 'Long cycle life reduces operating costs',
  '54Wh/kg高能量密度': '54Wh/kg high energy density',
  '5C高倍率性能': '5C high-rate performance',
  '5万次循环寿命': '50,000 cycle life',
  '9000F大容量': '9000F large capacity',
  '78Wh/kg高能量密度': '78Wh/kg high energy density',
  '方形设计便于集成': 'Prismatic design for easy integration',

  // FAE Review design considerations
  '注意单体均衡': 'Ensure cell balancing',
  '考虑散热设计': 'Consider thermal design',
  '预留安全余量': 'Reserve safety margin',
  '注意电压管理': 'Ensure voltage management',
  '合理设计散热': 'Proper thermal design',
  '配置适当CMS': 'Configure appropriate CMS',
  '合理设计模组结构': 'Proper module structure design',
  '注意热管理': 'Ensure thermal management',
  '配置均衡电路': 'Configure balancing circuits',

  // FAE Review common issues
  '长期低压存储影响性能': 'Long-term low-voltage storage affects performance',
  '高温环境加速老化': 'High-temperature environments accelerate aging',
  '电压超限影响寿命': 'Voltage exceeding limits affects life',
  '高温环境性能衰减': 'High-temperature environment performance degradation',
  '模组内单体压差过大': 'Excessive cell voltage difference in module',
  '散热不足影响性能': 'Insufficient heat dissipation affects performance',

  // FAE Review recommended applications
  '城市公交': 'City Buses',
  '轨道交通': 'Rail Transit',
  '工业储能': 'Industrial Energy Storage',
  '隧道机车': 'Tunnel Locomotives',
  '矿用机车': 'Mining Locomotives',
  '储能系统': 'Energy Storage Systems',
};

let replaceCount = 0;

// Replace all Chinese text with English
for (const [chinese, english] of Object.entries(translations)) {
  const regex = new RegExp(chinese.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, english);
    replaceCount += matches.length;
    console.log(`✓ Replaced: "${chinese.substring(0, 40)}..." (${matches.length} times)`);
  }
}

// Write back
fs.writeFileSync(productsPath, content, 'utf8');

console.log(`\n========================================`);
console.log(`Chinese to English translation complete!`);
console.log(`Total replacements: ${replaceCount}`);
console.log(`========================================`);
