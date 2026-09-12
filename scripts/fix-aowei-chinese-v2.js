/**
 * Fix remaining Chinese content in aowei products.json
 * Replace all mixed Chinese-English text with pure English
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'aowei', 'products.json');

console.log('Reading products.json...');
let content = fs.readFileSync(productsPath, 'utf8');

// Additional translation mappings for mixed Chinese-English text
const translations = {
  // Mixed FAQ decision guides
  'Long cycle life适合频繁charge discharge应用。': 'Long cycle life suitable for frequent charge/discharge applications.',
  'Wide temperature range适应各种环境。': 'Wide temperature range adapts to various environments.',
  '直流ESR≤0.8mΩ，低ESR确保High power output能力。': 'DC ESR ≤0.8mΩ, low ESR ensures high power output capability.',
  'CE and RoHS certified，符合国际安全标准。': 'CE and RoHS certified, meeting international safety standards.',
  
  // FAE Review key points with mixed text
  '高capacity3000F满足大energy需求': '3000F high capacity meets large energy demands',
  '低ESR确保High power output': 'Low ESR ensures high power output',
  'Long cycle life降低使用成本': 'Long cycle life reduces operating costs',
  '考虑heat dissipation设计': 'Consider heat dissipation design',
  
  // Descriptions with Chinese
  'City Buses电容系统': 'City Bus Capacitor System',
  'charge discharge电流': 'charge/discharge current',
  'charge discharge次数': 'charge/discharge cycles',
  
  // FAE summaries with Chinese
  'UCK42V6800C是奥威高energy density超级电容的代表产品，在City Buses领域广泛应用。': 'UCK42V6800C is Aowei\'s representative high energy density supercapacitor, widely used in city bus applications.',
  '5C高rate性能': '5C high-rate performance',
  '合理设计heat dissipation': 'Proper heat dissipation design',
  '电压超限影响life': 'Voltage exceeding limits affects life',
  
  // More descriptions
  'Trams电容系统': 'Tram Capacitor System',
  '在2.8-4.0V区间cycle life达5万次。': '50,000 cycle life in 2.8-4.0V range.',
  'UCK42V9000是奥威方形超级电容的主力产品，高energy density和prismatic design使其在系统集成中具有优势。': 'UCK42V9000 is Aowei\'s flagship prismatic supercapacitor, with high energy density and prismatic design providing integration advantages.',
  '9000F大capacity': '9000F large capacity',
  'heat dissipation不足影响性能': 'Insufficient heat dissipation affects performance',
  '大capacityCapacitor Management System': 'High-capacity Capacitor Management System',
  
  // UCK42V28000 related
  '大capacity': 'high capacity',
  'storageenergy有多少？': 'What is the stored energy?',
  '在2.8-4.0V区间可storage112Whenergy。': 'Can store 112Wh energy in 2.8-4.0V range.',
  'high energy适合长续航应用。': 'High energy suitable for long-range applications.',
  '储能': 'energy storage',
  '适合哪些高power应用？': 'What high-power applications is it suitable for?',
  '适合Marine Power、Heavy-duty Traction Vehicles、Mining Locomotives等大power应用。': 'Suitable for marine power, heavy-duty traction vehicles, mining locomotives and other high-power applications.',
  '根据power需求选择合适capacity。': 'Select appropriate capacity based on power requirements.',
  '高power': 'high power',
  '牵引车': 'traction vehicles',
  'ESR≤0.35mΩ，确保High power output能力。': 'ESR ≤0.35mΩ ensures high power output capability.',
  '超低ESR适合大power放电。': 'Ultra-low ESR suitable for high-power discharge.',
  'power输出': 'power output',
  '如何配置成模组使用？': 'How to configure as a module?',
  '可通过串联并联配置成不同电压capacity模组，需配合CMS使用。': 'Can be configured into different voltage/capacity modules through series/parallel connection, requires CMS.',
  '根据系统需求设计模组配置。': 'Design module configuration based on system requirements.',
  '模组': 'module',
  '串联并联': 'series/parallel',
  'UCK42V28000是奥威超大capacity超级电容，适用于对energy要求极高的applications。': 'UCK42V28000 is Aowei\'s ultra-high capacity supercapacitor, suitable for applications with extremely high energy requirements.',
  '注意模组均衡设计': 'Ensure module balancing design',
  '加强热管理': 'Enhance thermal management',
  '大电流charge discharge发热': 'High current charge/discharge heating',
  '长期高压存储影响life': 'Long-term high-voltage storage affects life',
  
  // MUCK72V2870 related
  '72V 2870F超级电容模组，适用于Trams和船舶': '72V 2870F supercapacitor module for trams and marine applications',
  'MUCK72V2870是奥威科技推出的72V高压超级电容模组，集成多个单体和CMS管理系统。': 'MUCK72V2870 is a 72V high-voltage supercapacitor module from Aowei Technology, integrating multiple cells and CMS.',
  'MUCK72V2870模组由18个UCK系列单体串联组成，额定电压72V，capacity2870F。': 'MUCK72V2870 module consists of 18 UCK series cells in series, rated voltage 72V, 2870F capacitance.',
  '内置Capacitor Management System（CMS），实现单体电压监测、温度监测和主动均衡功能。': 'Built-in Capacitor Management System (CMS) enables cell voltage monitoring, temperature monitoring, and active balancing.',
  '采用IP67防护等级设计，适用于Trams、船舶等恶劣环境应用。': 'IP67 protection rating design, suitable for harsh environments like trams and marine applications.',
  '72V高压设计': '72V high-voltage design',
  '2870F大capacity': '2870F high capacity',
  '内置CMS管理系统': 'Built-in CMS management system',
  'IP67防护等级': 'IP67 protection rating',
  '主动均衡功能': 'Active balancing function',
  'CAN通信接口': 'CAN communication interface',
  '船舶': 'Marine',
  '重型机械': 'Heavy machinery',
  '港口设备': 'Port equipment',
  '单体超级电容': 'Single supercapacitor cell',
  'Trams系统': 'Tram systems',
  '72V充电机': '72V charger',
  'MUCK72V2870的电压和capacity是多少？': 'What is the voltage and capacitance of MUCK72V2870?',
  '额定电压72V，capacity2870F，由18个单体串联组成。': 'Rated voltage 72V, 2870F capacitance, composed of 18 cells in series.',
  '72V适合大多数工业应用。': '72V suitable for most industrial applications.',
  '电压': 'voltage',
  'CMS管理系统有哪些功能？': 'What functions does the CMS management system have?',
  'CMS具有电压监测、温度监测、主动均衡、故障报警等功能。': 'CMS features voltage monitoring, temperature monitoring, active balancing, and fault alarm functions.',
  '完善的管理系统确保安全运行。': 'Complete management system ensures safe operation.',
  '管理系统': 'management system',
  '均衡': 'balancing',
  '防护等级是多少？': 'What is the protection rating?',
  'IP67防护等级，可防尘防水，适合恶劣环境。': 'IP67 protection rating, dustproof and waterproof, suitable for harsh environments.',
  '高防护等级适应户外应用。': 'High protection rating adapts to outdoor applications.',
  '防护等级': 'protection rating',
  '防水防尘': 'waterproof and dustproof',
  '通信接口是什么？': 'What is the communication interface?',
  '标配CAN通信接口，可与整车BMS通信。': 'Standard CAN communication interface, can communicate with vehicle BMS.',
  'CAN接口便于系统集成。': 'CAN interface facilitates system integration.',
  '通信接口': 'communication interface',
  'cycle life达10万次以上，确保长期使用。': 'Cycle life exceeds 100,000 cycles, ensuring long-term use.',
  '10万次': '100,000 cycles',
  'MUCK72V2870是奥威72V模组的标准产品，集成度高，管理完善，在Trams领域应用广泛。': 'MUCK72V2870 is Aowei\'s standard 72V module product, highly integrated with comprehensive management, widely used in tram applications.',
  '72V标准电压': '72V standard voltage',
  'IP67高防护等级': 'IP67 high protection rating',
  '注意安装方向': 'Pay attention to installation orientation',
  '确保heat dissipation通道': 'Ensure heat dissipation channels',
  '定期检查CMS状态': 'Regularly check CMS status',
  'CAN通信干扰': 'CAN communication interference',
  '长期不用需要maintenance充电': 'Long-term storage requires maintenance charging',
  
  // MUCR48V196A related
  '48V 196A超级电容模组，适用于Industrial Energy Storage和UPS': '48V 196A supercapacitor module for industrial energy storage and UPS',
  'MUCR48V196A是奥威科技推出的48V工业级超级电容模组，适用于储能和备用电源应用。': 'MUCR48V196A is a 48V industrial-grade supercapacitor module from Aowei Technology, suitable for energy storage and backup power applications.',
  'MUCR48V196A模组额定电压48V，采用UCR系列单体串联，具有高可靠性和长life。': 'MUCR48V196A module rated voltage 48V, uses UCR series cells in series, with high reliability and long life.',
  '内置完善的Capacitor Management System，支持RS485/CAN通信，便于远程监控。': 'Built-in comprehensive Capacitor Management System, supports RS485/CAN communication for remote monitoring.',
  '紧凑设计，易于安装maintenance，适用于Industrial Energy Storage、UPS、Emergency Power等应用。': 'Compact design, easy to install and maintain, suitable for industrial energy storage, UPS, emergency power applications.',
  '48V标准电压': '48V standard voltage',
  '高可靠性设计': 'High reliability design',
  '长cycle life': 'Long cycle life',
  'RS485/CAN通信': 'RS485/CAN communication',
  '易于安装maintenance': 'Easy to install and maintain',
  'MUCR48V196A的电压和capacity是多少？': 'What is the voltage and capacitance of MUCR48V196A?',
  '额定电压48V，capacity196A，由多个UCR单体串联组成。': 'Rated voltage 48V, 196A capacitance, composed of multiple UCR cells in series.',
  '48V是工业标准电压，兼容性好。': '48V is industrial standard voltage with good compatibility.',
  'RS485和CAN有什么区别？': 'What is the difference between RS485 and CAN?',
  'RS485适合远距离通信，CAN适合实时性要求高的应用。': 'RS485 suitable for long-distance communication, CAN suitable for real-time applications.',
  '根据系统需求选择通信方式。': 'Select communication method based on system requirements.',
  'MUCR48V196A是奥威48V模组的工业级产品，可靠性高，维护方便，在UPS领域应用广泛。': 'MUCR48V196A is Aowei\'s industrial-grade 48V module product, highly reliable, easy to maintain, widely used in UPS applications.',
  '48V工业标准': '48V industrial standard',
  '完善的BMS保护': 'Comprehensive BMS protection',
  '模块化设计便于扩展': 'Modular design facilitates expansion',
  '注意通风散热': 'Ensure ventilation and heat dissipation',
  '定期检查连接': 'Regularly check connections',
  '避免过放': 'Avoid over-discharge',
  '连接松动导致发热': 'Loose connections cause heating',
  '长期不用需定期补电': 'Long-term storage requires periodic recharging',
  
  // S585V36-K7 related
  '36V 7F锂离子超级电容系统，适用于Automotive和Renewable Energy': '36V 7F lithium-ion supercapacitor system for automotive and renewable energy',
  'S585V36-K7是奥威科技推出的锂离子超级电容系统，结合锂电池和超级电容优点。': 'S585V36-K7 is a lithium-ion supercapacitor system from Aowei Technology, combining advantages of lithium batteries and supercapacitors.',
  'S585V36-K7系统电压36V，capacity7F，具有高energy density和高power density。': 'S585V36-K7 system voltage 36V, 7F capacitance, with high energy density and high power density.',
  '内置智能BMS，支持CAN通信，适用于Automotive、Renewable Energy等应用。': 'Built-in intelligent BMS, supports CAN communication, suitable for automotive and renewable energy applications.',
  '36V系统电压': '36V system voltage',
  '7F system capacity': '7F system capacity',
  '高energy density': 'High energy density',
  '高power density': 'High power density',
  '智能BMS管理': 'Intelligent BMS management',
  'Automotive grade': 'Automotive grade',
  'Renewable Energy': 'Renewable Energy',
  'S585V36-K7的电压和capacity是多少？': 'What is the voltage and capacitance of S585V36-K7?',
  '系统电压36V，capacity7F，能量密度达40Wh/kg。': 'System voltage 36V, 7F capacitance, energy density up to 40Wh/kg.',
  '适合对energy和power都有要求的应用。': 'Suitable for applications requiring both energy and power.',
  '什么是锂离子超级电容？': 'What is a lithium-ion supercapacitor?',
  '结合锂电池高energy density和超级电容高power density的新型储能器件。': 'New energy storage device combining high energy density of lithium batteries and high power density of supercapacitors.',
  '适合需要快速充放电且有一定续航要求的应用。': 'Suitable for applications requiring rapid charge/discharge and certain range requirements.',
  'BMS有哪些保护功能？': 'What protection functions does the BMS have?',
  '具有过充、过放、过流、短路、温度保护等功能。': 'Features over-charge, over-discharge, over-current, short-circuit, and temperature protection.',
  '完善的保护确保系统安全可靠。': 'Comprehensive protection ensures system safety and reliability.',
  '循环life如何？': 'How is the cycle life?',
  '循环life达2万次以上，远高于普通锂电池。': 'Cycle life exceeds 20,000 cycles, much higher than ordinary lithium batteries.',
  '长life降低更换成本。': 'Long life reduces replacement costs.',
  'S585V36-K7是奥威锂离子超级电容的代表产品，在Automotive领域应用广泛。': 'S585V36-K7 is Aowei\'s representative lithium-ion supercapacitor product, widely used in automotive applications.',
  '36V标准电压': '36V standard voltage',
  '40Wh/kg高energy density': '40Wh/kg high energy density',
  '2万次长cycle life': '20,000 cycles long life',
  '注意BMS配置': 'Ensure BMS configuration',
  '确保散热设计': 'Ensure heat dissipation design',
  '定期检查system状态': 'Regularly check system status',
  'BMS故障影响性能': 'BMS failure affects performance',
  '高温影响life': 'High temperature affects life',
  
  // S820V29-K8-A related
  '820V 29F高电压超级电容系统，适用于Smart Grid和Industrial': '820V 29F high-voltage supercapacitor system for smart grid and industrial',
  'S820V29-K8-A是奥威科技推出的高电压超级电容系统，适用于电网储能和工业应用。': 'S820V29-K8-A is a high-voltage supercapacitor system from Aowei Technology, suitable for grid energy storage and industrial applications.',
  'S820V29-K8-A系统电压820V，capacity29F，具有超高power density和长cycle life。': 'S820V29-K8-A system voltage 820V, 29F capacitance, with ultra-high power density and long cycle life.',
  '模块化设计，易于扩展，适用于Smart Grid、Industrial等大功率应用。': 'Modular design, easy to expand, suitable for smart grid and industrial high-power applications.',
  '820V高电压': '820V high voltage',
  '29F大capacity': '29F high capacity',
  '超高power density': 'Ultra-high power density',
  '模块化设计': 'Modular design',
  '易于扩展': 'Easy to expand',
  'Smart Grid': 'Smart Grid',
  'S820V29-K8-A的电压和capacity是多少？': 'What is the voltage and capacitance of S820V29-K8-A?',
  '系统电压820V，capacity29F，由多个模组串联组成。': 'System voltage 820V, 29F capacitance, composed of multiple modules in series.',
  '820V适合电网级应用。': '820V suitable for grid-level applications.',
  '如何扩展capacity？': 'How to expand capacity?',
  '可通过并联模组扩展capacity，最大支持10组并联。': 'Can expand capacity by paralleling modules, supports up to 10 groups in parallel.',
  '根据energy需求灵活配置。': 'Flexible configuration based on energy requirements.',
  '系统效率如何？': 'How is the system efficiency?',
  '系统效率达95%以上，能量损耗小。': 'System efficiency exceeds 95%, minimal energy loss.',
  '高效率降低运行成本。': 'High efficiency reduces operating costs.',
  '有哪些安全保护措施？': 'What safety protection measures are included?',
  '具有过压、欠压、过流、短路、温度等多重保护。': 'Features multiple protections including over-voltage, under-voltage, over-current, short-circuit, and temperature.',
  '完善保护确保人员和设备安全。': 'Comprehensive protection ensures personnel and equipment safety.',
  'S820V29-K8-A是奥威高电压系统的旗舰产品，在Smart Grid领域应用广泛。': 'S820V29-K8-A is Aowei\'s flagship high-voltage system product, widely used in smart grid applications.',
  '820V高电压设计': '820V high-voltage design',
  '95%以上高效率': 'Over 95% high efficiency',
  '完善的保护系统': 'Comprehensive protection system',
  '注意高压安全': 'Pay attention to high-voltage safety',
  '确保接地可靠': 'Ensure reliable grounding',
  '定期检查绝缘': 'Regularly check insulation',
  '高压危险，需专业人员操作': 'High voltage dangerous, requires professional operation',
  '长期不用需定期维护': 'Long-term storage requires periodic maintenance',
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
console.log(`Mixed Chinese-English translation complete!`);
console.log(`Total replacements: ${replaceCount}`);
console.log(`========================================`);
