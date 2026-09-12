/**
 * Fix remaining Chinese content in aowei products.json - Final final pass
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'aowei', 'products.json');

console.log('Reading products.json...');
let content = fs.readFileSync(productsPath, 'utf8');

// Final translation mappings
const translations = {
  // Remaining mixed content
  'UCK42V28000是奥威超high capacity超级电容': 'UCK42V28000 is Aowei\'s ultra-high capacity supercapacitor',
  '适用于对energy要求极高的applications': 'suitable for applications with extremely high energy requirements',
  'MUCK72V2870是奥威科技推出的72V高压supercapacitor module': 'MUCK72V2870 is a 72V high-voltage supercapacitor module from Aowei Technology',
  'integration多个单体和CMSmanagement system': 'integrates multiple cells and CMS management system',
  'MUCK72V2870module consists of18个UCKseries cells in series': 'MUCK72V2870 module consists of 18 UCK series cells in series',
  'rated voltage72V': 'rated voltage 72V',
  'capacity2870F': 'capacity 2870F',
  'CMS具有voltage monitoring、温度监测、active balancing、故障报警等功能': 'CMS features voltage monitoring, temperature monitoring, active balancing, and fault alarm functions',
  'MUCK72V2870是奥威72Vmodule的标准产品': 'MUCK72V2870 is Aowei\'s standard 72V module product',
  'integration度高': 'highly integrated',
  '管理完善': 'comprehensive management',
  '在Trams领域widely used': 'widely used in tram applications',
  'MUCR48V196A是奥威科技推出的48V工业级supercapacitor module': 'MUCR48V196A is a 48V industrial-grade supercapacitor module from Aowei Technology',
  '48V是工业standard voltage': '48V is industrial standard voltage',
  '工业标准': 'industrial standard',
  'standard voltage，高reliability': 'standard voltage, high reliability',
  '在Industrial Energy Storage领域widely used': 'widely used in industrial energy storage',
  'communication协议不匹配': 'communication protocol mismatch',
  'S585V36-K7system consists of multiple UCK modules in series': 'S585V36-K7 system consists of multiple UCK modules in series',
  '总voltage 585V': 'total voltage 585V',
  '总energy 36kWh': 'total energy 36kWh',
  '系统voltage 585V': 'system voltage 585V',
  'energy capacity 36kWh': 'energy capacity 36kWh',
  '采用air-cooled heat dissipation': 'uses air-cooled heat dissipation',
  'ensures stable system operation under high power': 'ensures stable system operation under high power',
  '提供标准CAN接口和communication协议': 'provides standard CAN interface and communication protocol',
  'facilitates integration with vehicle BMS': 'facilitates integration with vehicle BMS',
  'S820V29-K8-Asystem uses modular design': 'S820V29-K8-A system uses modular design',
  '总voltage 820V': 'total voltage 820V',
  '总energy 29kWh': 'total energy 29kWh',
  '已在多条现代Trams线路成功应用': 'has been successfully applied on multiple modern tram lines',
  '运行稳定': 'stable operation',
  '820V高压系统': '820V high-voltage system',
  '先进CMS管理': 'advanced CMS management',
  '多重safety protection': 'multiple safety protections',
  '现代Trams': 'Modern trams',
  '轻轨': 'Light rail',
  '无轨电车': 'Trolleybuses',
  '72Vmodule单元': '72V module unit',
  '820V充电站': '820V charging station',
  '地面充电系统': 'Ground charging system',
  'S820V29-K8-A的voltage和energy是多少？': 'What is the voltage and energy of S820V29-K8-A?',
  '系统voltage 820V': 'system voltage 820V',
  'energycapacity29kWh': 'energy capacity 29kWh',
  '820V适合Tramshigh power需求': '820V suitable for tram high-power requirements',
  '适用于哪些Rail Transit？': 'What rail transit applications is it suitable for?',
  'for modern trams、轻轨、无轨电车等': 'for modern trams, light rail, trolleybuses, etc.',
  '根据线路特点选择合适系统': 'select appropriate system based on line characteristics',
  'IP65protection rating': 'IP65 protection rating',
  '适合户外轨道环境': 'suitable for outdoor rail environments',
  '高防护确保户外可靠运行': 'high protection ensures reliable outdoor operation',
  '户外': 'outdoor',
  '充电方式是什么？': 'What is the charging method?',
  '支持站点快速充电和车场慢充两种模式': 'supports both station fast charging and depot slow charging modes',
  '灵活充电适应不同运营模式': 'flexible charging adapts to different operation modes',
  '充电': 'charging',
  '慢充': 'slow charging',
  '系统安全性如何？': 'How is the system safety?',
  '多重safety protection，包括过压、过流、过热、短路保护': 'multiple safety protections including over-voltage, over-current, over-temperature, and short-circuit protection',
  '完善保护确保乘客安全': 'comprehensive protection ensures passenger safety',
  '安全性': 'safety',
  '保护': 'protection',
  '乘客安全': 'passenger safety',
  'S820V29-K8-A是奥威Tram systems的旗舰产品': 'S820V29-K8-A is Aowei\'s flagship tram system product',
  '已在多条线路成功运营': 'has been successfully operated on multiple lines',
  '已在多条线路应用': 'has been applied on multiple lines',
  '注意轨道车辆标准符合性': 'ensure rail vehicle standard compliance',
  '合理设计充电站点': 'proper charging station design',
  '定期maintenance保养': 'regular maintenance',
  '轨道环境电磁干扰': 'rail environment electromagnetic interference',
  '冬季低温性能衰减': 'winter low-temperature performance degradation',
};

let replaceCount = 0;

// Replace all mixed Chinese-English text
for (const [chinese, english] of Object.entries(translations)) {
  const regex = new RegExp(chinese.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, english);
    replaceCount += matches.length;
    console.log(`✓ Replaced: "${chinese.substring(0, 50)}..." (${matches.length} times)`);
  }
}

// Write back
fs.writeFileSync(productsPath, content, 'utf8');

console.log(`\n========================================`);
console.log(`Final final Chinese translation complete!`);
console.log(`Total replacements: ${replaceCount}`);
console.log(`========================================`);
