const fs = require('fs');
const path = require('path');

const brand = '3peak';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand} - 补充缺失字段`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要补充字段的产品
const fieldsToAdd = {
  'TP1581': {
    alternativeParts: [
      {partNumber: "LM321", manufacturer: "TI", specs: "Low-power Op-Amp"},
      {partNumber: "MCP6001", manufacturer: "Microchip", specs: "Low-power Op-Amp"}
    ],
    companionParts: [
      {partNumber: "TP1582", type: "Op-Amp", description: "双通道运算放大器"},
      {partNumber: "TP1584", type: "Op-Amp", description: "四通道运算放大器"},
      {partNumber: "TPC5173", type: "ADC", description: "模数转换器"}
    ],
    faqs: [
      {question: "TP1581的供电电压范围是多少？", answer: "TP1581支持2.5V至5.5V单电源供电，适用于电池供电应用。"},
      {question: "TP1581的带宽是多少？", answer: "TP1581具有1MHz增益带宽积，适合低频信号处理应用。"},
      {question: "TP1581的输入失调电压典型值是多少？", answer: "TP1581的输入失调电压典型值为0.5mV，最大值为3mV。"},
      {question: "TP1581支持轨到轨输出吗？", answer: "是的，TP1581支持轨到轨输出，可以充分利用电源电压范围。"},
      {question: "TP1581适合哪些应用场景？", answer: "TP1581适合传感器信号调理、电池供电设备、便携式医疗设备等低功耗应用。"}
    ]
  },
  'TP1592': {
    alternativeParts: [
      {partNumber: "LMV358", manufacturer: "TI", specs: "Low-voltage Op-Amp"},
      {partNumber: "MCP6002", manufacturer: "Microchip", specs: "Low-power Op-Amp"}
    ],
    companionParts: [
      {partNumber: "TP1581", type: "Op-Amp", description: "单通道运算放大器"},
      {partNumber: "TP1594", type: "Op-Amp", description: "四通道运算放大器"},
      {partNumber: "TPC5121Q", type: "ADC", description: "模数转换器"}
    ],
    faqs: [
      {question: "TP1592是单通道还是双通道？", answer: "TP1592是双通道运算放大器，两个通道独立工作。"},
      {question: "TP1592的静态电流是多少？", answer: "TP1592每个放大器的静态电流典型值为100μA，非常适合低功耗应用。"},
      {question: "TP1592的压摆率是多少？", answer: "TP1592的压摆率为0.5V/μs，适合低频和中频信号处理。"},
      {question: "TP1592支持单电源供电吗？", answer: "是的，TP1592支持2.5V至5.5V单电源供电，也支持双电源供电。"},
      {question: "TP1592与TP1581有什么区别？", answer: "TP1592是双通道版本，TP1581是单通道版本，两者电气性能相似，可根据通道数需求选择。"}
    ]
  },
  'TPM8847': {
    alternativeParts: [
      {partNumber: "DRV8847", manufacturer: "TI", specs: "Dual H-Bridge Driver"},
      {partNumber: "A4950", manufacturer: "Allegro", specs: "Full-Bridge Driver"}
    ],
    companionParts: [
      {partNumber: "TPM8866", type: "Driver", description: "8通道低边驱动器"},
      {partNumber: "TPM27517", type: "Gate Driver", description: "栅极驱动器"},
      {partNumber: "TPP361080", type: "DC-DC", description: "降压转换器"}
    ],
    faqs: [
      {question: "TPM8847支持多大的驱动电流？", answer: "TPM8847每个H桥支持高达1.5A的持续驱动电流和2.5A峰值电流。"},
      {question: "TPM8847支持哪些电机类型？", answer: "TPM8847支持直流电机、步进电机和螺线管等多种负载类型。"},
      {question: "TPM8847有哪些保护功能？", answer: "TPM8847具有过流保护、过温保护、欠压锁定等多种保护功能。"},
      {question: "TPM8847的PWM控制频率最高多少？", answer: "TPM8847支持高达100kHz的PWM控制频率，可实现精细的速度控制。"},
      {question: "TPM8847适合哪些应用场景？", answer: "TPM8847适合打印机、扫描仪、自动售货机、安防摄像头等需要精确电机控制的应用。"}
    ]
  }
};

// 更新产品数据
let modified = false;

for (const category of productsData.categories) {
  const categoryId = category.id;
  const currentProducts = category.products || [];
  
  console.log(`\n📂 分类: ${category.name} (${categoryId})`);
  
  // 补充缺失字段
  for (const product of currentProducts) {
    const partNumber = product.partNumber;
    if (fieldsToAdd[partNumber]) {
      let productModified = false;
      
      if (!product.alternativeParts && fieldsToAdd[partNumber].alternativeParts) {
        product.alternativeParts = fieldsToAdd[partNumber].alternativeParts;
        console.log(`   ✅ ${partNumber}: 添加 alternativeParts`);
        productModified = true;
      }
      
      if (!product.companionParts && fieldsToAdd[partNumber].companionParts) {
        product.companionParts = fieldsToAdd[partNumber].companionParts;
        console.log(`   ✅ ${partNumber}: 添加 companionParts`);
        productModified = true;
      }
      
      if (!product.faqs && fieldsToAdd[partNumber].faqs) {
        product.faqs = fieldsToAdd[partNumber].faqs;
        console.log(`   ✅ ${partNumber}: 添加 faqs`);
        productModified = true;
      }
      
      if (productModified) {
        modified = true;
      }
    }
  }
}

// 保存修改
if (modified) {
  fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
  console.log('\n✅ products.json 已更新');
} else {
  console.log('\n⏭️ 无需更新 products.json');
}

console.log('\n========================================');
console.log('修复完成');
console.log('========================================');
