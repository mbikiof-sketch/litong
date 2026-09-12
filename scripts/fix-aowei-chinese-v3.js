/**
 * Fix remaining Chinese content in aowei products.json - Final pass
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'aowei', 'products.json');

console.log('Reading products.json...');
let content = fs.readFileSync(productsPath, 'utf8');

// Final translation mappings
const translations = {
  // Single words and short phrases
  '存储': 'storage',
  '注意modulebalancing设计': 'Ensure module balancing design',
  'modulebalancing': 'module balancing',
  '超级电容module': 'supercapacitor module',
  'module': 'module',
  '适用于Trams和Marine': 'for trams and marine',
  'management system': 'management system',
  'module由': 'module consists of',
  '系列单体串联组成': 'series cells in series',
  '额定voltage': 'rated voltage',
  'voltage监测': 'voltage monitoring',
  '主动balancing': 'active balancing',
  'protection rating': 'protection rating',
  '可防尘防水': 'dustproof and waterproof',
  '适合恶劣环境': 'suitable for harsh environments',
  '标配CAN communication interface': 'Standard CAN communication interface',
  '可与整车BMS通信': 'can communicate with vehicle BMS',
  '标准voltage': 'standard voltage',
  '高protection rating': 'high protection rating',
  '适用于Industrial Energy Storage和UPS': 'for industrial energy storage and UPS',
  '适用于energy storage和备用电源应用': 'for energy storage and backup power applications',
  'module额定voltage': 'module rated voltage',
  '采用UCR系列单体串联': 'uses UCR series cells in series',
  '具有高可靠性和长life': 'with high reliability and long life',
  '内置management system': 'built-in management system',
  '紧凑结构设计': 'compact structural design',
  '机器人': 'Robotics',
  'UCR系列单体': 'UCR series cells',
  '48V充电机': '48V charger',
  '48V逆变器': '48V inverter',
  'MUCR48V196A的voltage是多少？': 'What is the voltage of MUCR48V196A?',
  '额定voltage48V': 'rated voltage 48V',
  '工作voltage范围': 'operating voltage range',
  '48V是工业标准voltage': '48V is industrial standard voltage',
  '应用广泛': 'widely used',
  '适合哪些工业应用？': 'What industrial applications is it suitable for?',
  '适合Industrial Energy Storage、UPS、Emergency Power、AGV等应用': 'Suitable for industrial energy storage, UPS, emergency power, AGV applications',
  '48V系统适合大多数工业场景': '48V system suitable for most industrial scenarios',
  'communication interface有哪些？': 'What communication interfaces are available?',
  '支持RS485和CAN通信': 'Supports RS485 and CAN communication',
  '便于系统集成': 'facilitates system integration',
  '双communication interface提高兼容性': 'Dual communication interface improves compatibility',
  '通信': 'communication',
  '如何安装maintenance？': 'How to install and maintain?',
  '紧凑设计，标准接口，易于安装': 'Compact design, standard interface, easy to install',
  '定期通过CMS检查状态': 'Regularly check status through CMS',
  '标准化设计降低maintenance难度': 'Standardized design reduces maintenance difficulty',
  '安装': 'installation',
  'cycle life100,000 cycles以上': 'Cycle life exceeds 100,000 cycles',
  '适合频繁charge discharge应用': 'suitable for frequent charge/discharge applications',
  '长life降低总体拥有成本': 'Long life reduces total cost of ownership',
  '成本': 'cost',
  'MUCR48V196A是奥威48V工业module': 'MUCR48V196A is Aowei\'s 48V industrial module',
  '标准voltage，高可靠性': 'standard voltage, high reliability',
  '在Industrial Energy Storage领域应用广泛': 'widely used in industrial energy storage',
  '工业级可靠性': 'industrial-grade reliability',
  '双communication interface': 'dual communication interface',
  '注意接地设计': 'ensure grounding design',
  '合理布置线缆': 'proper cable arrangement',
  '通信协议不匹配': 'communication protocol mismatch',
  '接地不良干扰': 'poor grounding interference',
  
  // S585V36-K7 related
  '585V 36kWhCity Buses超级电容系统': '585V 36kWh City Bus supercapacitor system',
  '适用于City Buses': 'for city buses',
  'S585V36-K7是奥威科技为City Buses开发的超级电容系统': 'S585V36-K7 is a supercapacitor system developed by Aowei Technology for city buses',
  'voltage585V': 'voltage 585V',
  'energy36kWh': 'energy 36kWh',
  '系统由多个UCKmodule串联组成': 'system consists of multiple UCK modules in series',
  '总voltage585V': 'total voltage 585V',
  '总energy36kWh': 'total energy 36kWh',
  '配备完善的Capacitor Management System（CMS）': 'equipped with comprehensive Capacitor Management System (CMS)',
  '实现系统级监控和保护': 'enables system-level monitoring and protection',
  '已通过多项City Buses实车验证': 'has passed multiple city bus vehicle validations',
  '性能稳定可靠': 'stable and reliable performance',
  '585V高压系统': '585V high-voltage system',
  '系统级CMS管理': 'system-level CMS management',
  '风冷heat dissipation': 'air-cooled heat dissipation',
  '高安全性设计': 'high safety design',
  '已通过实车验证': 'has passed vehicle validation',
  '通勤车': 'Commuter buses',
  '机场摆渡车': 'Airport shuttle buses',
  'UCK单体': 'UCK cells',
  '585V充电站': '585V charging station',
  '受电弓充电系统': 'pantograph charging system',
  'S585V36-K7的voltage和energy是多少？': 'What is the voltage and energy of S585V36-K7?',
  '系统voltage585V': 'system voltage 585V',
  'energycapacity36kWh': 'energy capacity 36kWh',
  '适合City Buses全天运营需求': 'suitable for city bus all-day operation requirements',
  '充电时间是多少？': 'What is the charging time?',
  '使用受电弓快速充电': 'uses pantograph fast charging',
  '10-15分钟可充满': 'can be fully charged in 10-15 minutes',
  '快速充电适合公交站点充电模式': 'fast charging suitable for bus station charging mode',
  '充电时间': 'charging time',
  '受电弓': 'pantograph',
  '快充': 'fast charging',
  '已通过哪些验证？': 'What validations has it passed?',
  '已通过多个City Buses实车验证': 'has passed multiple city bus vehicle validations',
  '累计运行超过百万公里': 'accumulated operation exceeds one million kilometers',
  '经过验证的产品更可靠': 'validated products are more reliable',
  '实车验证': 'vehicle validation',
  '运行里程': 'operating mileage',
  '可靠性': 'reliability',
  'heat dissipation方式是什么？': 'What is the heat dissipation method?',
  '采用风冷heat dissipation': 'uses air-cooled heat dissipation',
  '确保系统在high power下稳定运行': 'ensures stable system operation under high power',
  '风冷设计简单可靠': 'air-cooled design is simple and reliable',
  '风冷': 'air cooling',
  '如何与车辆系统集成？': 'How to integrate with vehicle systems?',
  '提供标准CAN接口和通信协议': 'provides standard CAN interface and communication protocol',
  '便于与整车BMS集成': 'facilitates integration with vehicle BMS',
  '标准化接口便于集成': 'standardized interface facilitates integration',
  '集成': 'integration',
  'S585V36-K7是奥威City Buses系统的标准配置': 'S585V36-K7 is Aowei\'s standard city bus system configuration',
  '已在多个城市成功应用': 'has been successfully applied in multiple cities',
  '注意整车绝缘设计': 'ensure vehicle insulation design',
  '合理布置充电接口': 'proper charging interface arrangement',
  '定期检查系统状态': 'regularly check system status',
  '充电接口磨损': 'charging interface wear',
  '长期停放需要maintenance': 'long-term parking requires maintenance',
  
  // S820V29-K8-A related
  '820V 29kWhTrams超级电容系统': '820V 29kWh tram supercapacitor system',
  '适用于现代Trams': 'for modern trams',
  'S820V29-K8-A是奥威科技为现代Trams开发的超级电容系统': 'S820V29-K8-A is a supercapacitor system developed by Aowei Technology for modern trams',
  'voltage820V': 'voltage 820V',
  'energy29kWh': 'energy 29kWh',
  '系统采用Modular design': 'system uses modular design',
  '总voltage820V': 'total voltage 820V',
  '总energy29kWh': 'total energy 29kWh',
  '配备先进的CMSmanagement system和多重safety protection': 'equipped with advanced CMS management system and multiple safety protections',
  '确保系统安全可靠运行': 'ensures safe and reliable system operation',
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
console.log(`Final Chinese translation complete!`);
console.log(`Total replacements: ${replaceCount}`);
console.log(`========================================`);
