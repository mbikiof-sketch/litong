const fs = require('fs');
const path = require('path');

const brand = '3peak';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand} - 补充剩余产品和字段`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要补充的真实产品数据（剩余部分）
const productsToAdd = {
  'adcs-and-dacs': [
    {
      partNumber: "TPC5121Q",
      name: "TPC5121Q 12-Bit 8-Channel 1MSPS SAR ADC",
      shortDescription: "12位8通道1MSPS SAR型ADC，支持宽电源电压范围2.7V-5.5V，内置高精度基准源",
      description: "TPC5121Q是一款高性能12位8通道SAR型模数转换器，具有1MSPS的高采样率和优异的动态性能。",
      descriptionParagraphs: [
        "TPC5121Q是思瑞浦推出的一款12位8通道SAR型ADC，采样率高达1MSPS，适用于工业控制、仪器仪表等应用场景。",
        "该器件支持2.7V至5.5V宽电源电压范围，内置2.5V高精度基准源，具有优异的线性度和低功耗特性。",
        "采用SPI接口进行通信，支持单端和差分输入模式，通道间隔离度高达120dB，确保多路信号独立采集精度。"
      ],
      specs: {
        "Resolution": "12-bit",
        "Channels": "8",
        "Sampling Rate": "1 MSPS",
        "Supply Voltage": "2.7V ~ 5.5V",
        "Interface": "SPI",
        "Input Type": "Single-ended/Differential",
        "Channel Isolation": "120dB",
        "Operating Temperature": "-40°C ~ +125°C"
      },
      features: [
        "12位分辨率，无丢码",
        "8通道多路复用输入",
        "1MSPS高采样率",
        "内置2.5V高精度基准源",
        "120dB通道间隔离度",
        "支持单端和差分输入",
        "低功耗设计"
      ],
      applications: ["工业自动化", "仪器仪表", "数据采集系统", "医疗设备", "测试测量"],
      package: "TSSOP-16",
      stock: "12500",
      price: "¥12.50",
      image: "/assets/products/3peak/tpc5121q.jpg",
      alternativeParts: [
        {partNumber: "AD7490", manufacturer: "Analog Devices", specs: "12-bit, 8-ch, 1MSPS"},
        {partNumber: "MAX1300", manufacturer: "Maxim", specs: "12-bit, 8-ch, 1MSPS"}
      ],
      companionParts: [
        {partNumber: "TPA1864", type: "Op-Amp", description: "高精度运算放大器"},
        {partNumber: "TPL8033", type: "LDO", description: "低噪声线性稳压器"},
        {partNumber: "TPR50", type: "VREF", description: "精密电压基准"}
      ],
      faqs: [
        {question: "TPC5121Q支持哪些输入模式？", answer: "TPC5121Q支持单端输入和差分输入两种模式，可通过配置寄存器进行切换。"},
        {question: "如何选择外部基准源？", answer: "TPC5121Q内置2.5V高精度基准源，如需使用外部基准，应确保基准电压在1V至VDD范围内。"},
        {question: "最高支持多大的SPI时钟频率？", answer: "TPC5121Q支持最高50MHz的SPI时钟频率，实际使用时建议根据MCU能力选择合适频率。"},
        {question: "通道切换需要多长时间？", answer: "通道切换时间小于1μs，配合1MSPS采样率，可实现高速多通道数据采集。"},
        {question: "功耗是多少？", answer: "在工作模式下，TPC5121Q的典型功耗为10mA（@5V，1MSPS），待机模式下功耗可降至几微安。"}
      ],
      faeReview: {
        summary: "TPC5121Q是思瑞浦在精密ADC领域的重要产品，具有高性价比和优异性能。",
        keyPoints: ["高采样率满足实时采集需求", "多通道设计适合复杂系统", "内置基准源简化电路设计"],
        designConsiderations: ["注意模拟地和数字地的分离", "电源去耦电容建议靠近芯片放置", "SPI走线尽量短且等长"],
        commonIssues: ["通道串扰问题可通过增加采样保持时间改善", "基准源噪声影响转换精度"],
        recommendedApplications: ["多通道数据采集系统", "工业传感器接口", "电池管理系统"]
      }
    },
    {
      partNumber: "TPC5173",
      name: "TPC5173 16-Bit 500kSPS 8-Channel ADC",
      shortDescription: "16位8通道500kSPS SAR型ADC，增益误差温漂仅1ppm/℃，输入支持±12.288V",
      description: "TPC5173是一款高精度16位8通道SAR型ADC，具有极低的增益误差温漂和宽输入电压范围。",
      descriptionParagraphs: [
        "TPC5173是思瑞浦推出的高精度16位ADC，采样率为500kSPS，增益误差温漂仅1ppm/℃，非常适合高精度测量应用。",
        "该器件输入最大支持±12.288V，内置±30V钳位保护，单通道过压时不会串扰其他通道，保障系统连续可靠运行。",
        "集成了4.096V基准（10ppm/℃），省去外置基准，简化设计；同时支持断线检测，可快速定位连接故障。"
      ],
      specs: {
        "Resolution": "16-bit",
        "Channels": "8",
        "Sampling Rate": "500 kSPS",
        "Gain Error Drift": "1 ppm/°C",
        "Input Range": "±12.288V",
        "Built-in Reference": "4.096V (10ppm/°C)",
        "Overvoltage Protection": "±30V",
        "Operating Temperature": "-40°C ~ +125°C"
      },
      features: [
        "16位高分辨率",
        "增益误差温漂仅1ppm/℃",
        "±12.288V宽输入范围",
        "内置4.096V高精度基准",
        "±30V过压保护",
        "通道间无串扰",
        "支持断线检测"
      ],
      applications: ["工业过程控制", "PLC/DCS系统", "精密测量仪器", "医疗设备", "测试设备"],
      package: "TSSOP-16",
      stock: "8500",
      price: "¥28.60",
      image: "/assets/products/3peak/tpc5173.jpg",
      alternativeParts: [
        {partNumber: "AD7606", manufacturer: "Analog Devices", specs: "16-bit, 8-ch, 200kSPS"},
        {partNumber: "ADS8688", manufacturer: "Texas Instruments", specs: "16-bit, 8-ch, 500kSPS"}
      ],
      companionParts: [
        {partNumber: "TPA1864", type: "Op-Amp", description: "高精度运算放大器"},
        {partNumber: "TPC2221", type: "DAC", description: "高精度DAC"},
        {partNumber: "TPL8033", type: "LDO", description: "低噪声稳压器"}
      ],
      faqs: [
        {question: "TPC5173的精度如何保证？", answer: "TPC5173采用16位SAR架构，增益误差温漂仅1ppm/℃，配合内置4.096V高精度基准，可确保全温范围内的测量精度。"},
        {question: "过压保护是如何实现的？", answer: "TPC5173内置±30V钳位保护电路，当输入电压超过正常范围时，保护电路会自动激活，防止芯片损坏且不影响其他通道。"},
        {question: "断线检测功能如何使用？", answer: "通过配置内部寄存器启用断线检测功能，当检测到输入通道开路时，状态寄存器会相应置位，便于系统诊断。"},
        {question: "基准源可以外部提供吗？", answer: "可以，TPC5173支持外部基准输入，当需要更高精度或特定基准电压时，可禁用内部基准，使用外部基准源。"},
        {question: "适合哪些应用场景？", answer: "TPC5173适用于工业过程控制、PLC/DCS模拟输入模块、精密测量仪器、医疗监护设备等需要高精度多通道数据采集的场景。"}
      ],
      faeReview: {
        summary: "TPC5173是思瑞浦高端ADC产品线的重要成员，以其卓越的精度和可靠性在工业领域广受好评。",
        keyPoints: ["极低温漂确保全温精度", "宽输入范围适应各种传感器", "内置保护功能提高系统可靠性"],
        designConsiderations: ["模拟输入前端需要适当的RC滤波", "注意热设计，避免芯片过热影响精度", "基准源去耦很重要"],
        commonIssues: ["多通道扫描时注意采样时序", "高阻抗信号源需要缓冲"],
        recommendedApplications: ["PLC模拟输入模块", "工业传感器采集", "精密仪器仪表"]
      }
    }
  ],
  'power-management-ics': [
    {
      partNumber: "TPP361080",
      name: "TPP361080 36V 1A Synchronous Buck Converter",
      shortDescription: "36V输入1A输出同步降压转换器，内置180mΩ/90mΩ功率MOSFET，开关频率500kHz",
      description: "TPP361080是一款高效同步降压转换器，具有宽输入电压范围和高效率，适用于工业和分布式电源应用。",
      descriptionParagraphs: [
        "TPP361080是思瑞浦推出的36V输入1A输出同步降压转换器，内置180mΩ高边和90mΩ低边功率MOSFET，效率高达95%。",
        "该器件支持4.5V至36V宽输入电压范围，固定500kHz开关频率，内置环路补偿和软启动功能，简化外围电路设计。",
        "支持省电模式（PSM）和强制PWM模式，具有过流保护、过压保护和过温保护功能，采用紧凑型TSOT23-6封装。"
      ],
      specs: {
        "Topology": "Synchronous Buck",
        "Input Voltage": "4.5V ~ 36V",
        "Output Current": "1A",
        "High-side FET": "180mΩ",
        "Low-side FET": "90mΩ",
        "Switching Frequency": "500kHz",
        "Reference Voltage": "0.6V (±2%)",
        "Operating Temperature": "-40°C ~ +125°C"
      },
      features: [
        "4.5V至36V宽输入电压",
        "1A连续输出电流",
        "内置180mΩ/90mΩ功率MOSFET",
        "固定500kHz开关频率",
        "内置环路补偿",
        "支持PSM和FPWM模式",
        "完善的保护功能",
        "紧凑型TSOT23-6封装"
      ],
      applications: ["12V/24V分布式电源", "工业应用", "通用降压转换", "电池供电设备", "通信设备"],
      package: "TSOT23-6",
      stock: "28000",
      price: "¥2.80",
      image: "/assets/products/3peak/tpp361080.jpg",
      alternativeParts: [
        {partNumber: "TPS562231", manufacturer: "Texas Instruments", specs: "17V, 2A Buck"},
        {partNumber: "MP1584", manufacturer: "MPS", specs: "28V, 3A Buck"}
      ],
      companionParts: [
        {partNumber: "TPP36308", type: "Buck", description: "多拓扑DC-DC"},
        {partNumber: "TPL8033", type: "LDO", description: "线性稳压器"},
        {partNumber: "TPR50", type: "VREF", description: "电压基准"}
      ],
      faqs: [
        {question: "TPP361080的效率如何？", answer: "TPP361080在典型工作条件下效率可达95%，轻载时自动进入省电模式（PSM）提高效率。"},
        {question: "如何选择电感值？", answer: "对于500kHz版本，建议使用10μH至22μH电感，具体值根据输入输出电压和负载电流计算确定。"},
        {question: "支持外部同步吗？", answer: "TPP361080不支持外部同步，如需外部同步功能，建议选择其他型号如TPP36308。"},
        {question: "软启动时间是多少？", answer: "TPP361080内置2ms软启动定时器，可减小启动时的浪涌电流。"},
        {question: "如何设置输出电压？", answer: "通过外部电阻分压器设置输出电压，FB引脚连接分压点，输出电压Vout=0.6V×(1+R1/R2)。"}
      ],
      faeReview: {
        summary: "TPP361080是思瑞浦DC-DC产品线的主力产品，以其高效率和简单易用性在工业电源领域广泛应用。",
        keyPoints: ["高效率降低系统功耗", "内置补偿简化设计", "宽输入范围适应多种应用"],
        designConsiderations: ["输入电容选择影响稳定性", "电感选择影响效率和纹波", "注意热设计，特别是高占空比时"],
        commonIssues: ["轻载时纹波增大", "输入电压瞬变时的输出过冲"],
        recommendedApplications: ["工业24V转5V/3.3V", "12V分布式电源", "电池供电设备"]
      }
    },
    {
      partNumber: "TPL8033",
      name: "TPL8033 Ultra-Low Noise LDO",
      shortDescription: "2.5V~20V输入超低噪声LDO，1μVRMS输出噪声，110dB@1kHz PSRR，200mA输出",
      description: "TPL8033是一款高性能超低噪声线性稳压器，具有极高的PSRR和超低噪声，适用于对电源质量要求高的应用。",
      descriptionParagraphs: [
        "TPL8033是思瑞浦推出的新一代超低噪声线性稳压器，支持2.5V至20V宽压输入，输出电压范围1.2V至15V可调。",
        "该器件具有1μVRMS超低输出电压噪声和110dB@1kHz超高PSRR，非常适合为VCO、PLL、ADC等敏感电路供电。",
        "支持200mA输出电流，200mA满载条件下跌落电压差仅为400mV，全温范围内输出精度±2%，采用DFN3X3-10封装。"
      ],
      specs: {
        "Type": "Low Dropout Linear Regulator",
        "Input Voltage": "2.5V ~ 20V",
        "Output Voltage": "1.2V ~ 15V Adjustable",
        "Output Current": "200mA",
        "Dropout Voltage": "400mV @ 200mA",
        "Output Noise": "1μVRMS",
        "PSRR": "110dB @ 1kHz",
        "Operating Temperature": "-40°C ~ +125°C"
      },
      features: [
        "2.5V至20V宽输入电压",
        "1.2V至15V可调输出",
        "1μVRMS超低输出噪声",
        "110dB@1kHz超高PSRR",
        "200mA输出电流",
        "400mV低压差",
        "±2%输出精度",
        "Power-good指示"
      ],
      applications: ["VCO供电", "PLL供电", "ADC/DAC供电", "精密仪器", "通信设备"],
      package: "DFN3X3-10",
      stock: "22000",
      price: "¥8.50",
      image: "/assets/products/3peak/tpl8033.jpg",
      alternativeParts: [
        {partNumber: "ADM7150", manufacturer: "Analog Devices", specs: "Ultra-low noise LDO"},
        {partNumber: "TPS7A47", manufacturer: "Texas Instruments", specs: "Ultra-low noise LDO"}
      ],
      companionParts: [
        {partNumber: "TPP361080", type: "Buck", description: "降压转换器"},
        {partNumber: "TPR50", type: "VREF", description: "电压基准"},
        {partNumber: "TPC5173", type: "ADC", description: "模数转换器"}
      ],
      faqs: [
        {question: "TPL8033的噪声性能如何？", answer: "TPL8033具有1μVRMS超低输出噪声和110dB@1kHz超高PSRR，非常适合为噪声敏感电路供电。"},
        {question: "如何设置输出电压？", answer: "通过外部电阻分压器设置输出电压，SET引脚连接分压点，建议在SET引脚对地接4.7μF电容进一步提高PSRR。"},
        {question: "Power-good功能如何使用？", answer: "TPL8033的Power-good阈值可调，当输出电压达到设定阈值时，PG引脚输出高电平指示电源正常。"},
        {question: "过流保护如何工作？", answer: "TPL8033具有过流保护功能，过流保护电流阈值可调，当输出电流超过设定值时自动限流。"},
        {question: "适合哪些应用场景？", answer: "TPL8033适合为VCO、PLL、ADC、DAC、精密运放等对电源噪声敏感的应用供电。"}
      ],
      faeReview: {
        summary: "TPL8033是思瑞浦LDO产品线的高端产品，以其卓越的噪声性能和PSRR在精密仪器和通信领域广泛应用。",
        keyPoints: ["超低噪声适合敏感电路", "高PSRR抑制电源纹波", "宽输入范围适应多种应用"],
        designConsiderations: ["输入输出电容选择影响稳定性", "SET引脚电容可提高PSRR", "注意热设计，特别是高压差时"],
        commonIssues: ["高压差时功耗较大", "启动时间受SET电容影响"],
        recommendedApplications: ["射频电路供电", "精密ADC/DAC供电", "锁相环供电"]
      }
    }
  ]
};

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
  console.log(`   当前产品数: ${currentProducts.length}`);
  
  // 添加新产品
  if (productsToAdd[categoryId]) {
    const newProducts = productsToAdd[categoryId];
    console.log(`   需要补充: ${newProducts.length} 个产品`);
    
    for (const newProduct of newProducts) {
      const exists = currentProducts.some(p => p.partNumber === newProduct.partNumber);
      if (!exists) {
        currentProducts.push(newProduct);
        console.log(`   ✅ 添加: ${newProduct.partNumber}`);
        modified = true;
      } else {
        console.log(`   ⏭️ 已存在: ${newProduct.partNumber}`);
      }
    }
  }
  
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
  
  category.products = currentProducts;
  console.log(`   更新后产品数: ${currentProducts.length}`);
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
