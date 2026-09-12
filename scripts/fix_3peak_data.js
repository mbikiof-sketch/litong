const fs = require('fs');
const path = require('path');

const brand = '3peak';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand}`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要补充的真实产品数据
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
  'interface-chips': [
    {
      partNumber: "TPT75176HL1",
      name: "TPT75176HL1 Enhanced RS-485 Transceiver",
      shortDescription: "增强型RS-485收发器，支持3.0V~5.5V供电，速率高达10Mbps，±15kV ESD保护",
      description: "TPT75176HL1是一款高性能RS-485收发器，具有宽供电范围、高速率和强ESD保护能力。",
      descriptionParagraphs: [
        "TPT75176HL1是思瑞浦推出的增强型RS-485收发器，支持3.0V至5.5V宽供电范围，数据传输速率高达10Mbps。",
        "该器件提供±15kV HBM ESD保护和±12kV IEC61000-4-2接触放电保护，适用于恶劣的工业环境。",
        "支持-40℃至+125℃扩展工业温度范围，支持多达256个节点（1/8单位负载），非常适合PROFIBUS网络和工业控制系统。"
      ],
      specs: {
        "Interface": "RS-485/RS-422",
        "Supply Voltage": "3.0V ~ 5.5V",
        "Data Rate": "10 Mbps",
        "ESD Protection (HBM)": "±15kV",
        "ESD Protection (IEC)": "±12kV Contact",
        "Nodes on Bus": "Up to 256",
        "Operating Temperature": "-40°C ~ +125°C"
      },
      features: [
        "宽供电范围3.0V~5.5V",
        "高达10Mbps数据传输速率",
        "±15kV HBM ESD保护",
        "±12kV IEC接触放电保护",
        "支持256个总线节点",
        "全故障安全接收器",
        "热插拔保护"
      ],
      applications: ["PROFIBUS网络", "工业控制", "电机控制器", "楼宇自动化", "安防系统"],
      package: "SOP-8",
      stock: "45000",
      price: "¥3.20",
      image: "/assets/products/3peak/tpt75176hl1.jpg",
      alternativeParts: [
        {partNumber: "MAX485", manufacturer: "Maxim", specs: "RS-485, 2.5Mbps"},
        {partNumber: "SN75176", manufacturer: "Texas Instruments", specs: "RS-485, 10Mbps"}
      ],
      companionParts: [
        {partNumber: "TP8485E", type: "RS-485", description: "RS-485收发器"},
        {partNumber: "TPT3232E", type: "RS-232", description: "RS-232收发器"},
        {partNumber: "TPT1042", type: "CAN", description: "CAN收发器"}
      ],
      faqs: [
        {question: "TPT75176HL1支持的最大节点数是多少？", answer: "TPT75176HL1采用1/8单位负载设计，单总线可支持多达256个节点，远超标准RS-485的32节点限制。"},
        {question: "ESD保护等级如何？", answer: "TPT75176HL1提供±15kV HBM人体模型保护和±12kV IEC61000-4-2接触放电保护，可有效防止静电损坏。"},
        {question: "如何实现故障安全？", answer: "TPT75176HL1内置全故障安全电路，当总线开路、短路或空闲时，接收器输出保持确定状态，避免误触发。"},
        {question: "支持热插拔吗？", answer: "支持，TPT75176HL1具有热插拔保护功能，上电和断电期间收发器输出保持三态，避免总线干扰。"},
        {question: "与标准75176有何区别？", answer: "TPT75176HL1在标准75176基础上增强了ESD保护、扩展了温度范围、提高了节点驱动能力，是工业级增强版本。"}
      ],
      faeReview: {
        summary: "TPT75176HL1是思瑞浦RS-485产品线的明星产品，以其卓越的可靠性和性价比在工业通信领域广泛应用。",
        keyPoints: ["高ESD保护等级适应恶劣环境", "256节点能力支持大规模网络", "宽温范围确保工业级可靠性"],
        designConsiderations: ["总线终端电阻匹配很重要", "注意信号地和电源地的处理", "长距离通信建议使用屏蔽双绞线"],
        commonIssues: ["总线冲突导致通信失败", "终端电阻不匹配引起信号反射"],
        recommendedApplications: ["工业现场总线", "楼宇自动化网络", "安防监控系统"]
      }
    },
    {
      partNumber: "TPT3232E",
      name: "TPT3232E RS-232 Transceiver",
      shortDescription: "3.0V至5.5V供电RS-232收发器，速率250kbps，±15kV HBM ESD保护，符合IEC61000标准",
      description: "TPT3232E是一款高性能RS-232收发器，支持宽电压供电和高ESD保护，适用于工业HMI等应用。",
      descriptionParagraphs: [
        "TPT3232E是思瑞浦推出的IEC61000 ESD保护RS-232收发器，支持3.0V至5.5V宽电源电压范围，兼容多种供电系统。",
        "该器件符合RS-232标准，数据传输速率可达250kbps，接收器具有1.25V典型阈值和0.3V迟滞，可接受±15V输入。",
        "提供±15kV HBM ESD保护和±12kV IEC61000-4-2接触放电保护，适用于电池供电设备、工业HMI调试接口等应用。"
      ],
      specs: {
        "Interface": "RS-232",
        "Supply Voltage": "3.0V ~ 5.5V",
        "Data Rate": "250 kbps",
        "ESD Protection (HBM)": "±15kV",
        "ESD Protection (IEC)": "±12kV Contact",
        "Drivers": "2",
        "Receivers": "2",
        "Operating Temperature": "-40°C ~ +125°C"
      },
      features: [
        "3.0V至5.5V宽供电范围",
        "250kbps数据传输速率",
        "±15kV HBM ESD保护",
        "±12kV IEC接触放电保护",
        "2路驱动器和2路接收器",
        "接受±15V输入",
        "符合TIA/EIA-232标准"
      ],
      applications: ["电池供电设备", "工业HMI调试接口", "笔记本电脑", "打印机", "通信设备"],
      package: "SOP-16",
      stock: "32000",
      price: "¥4.50",
      image: "/assets/products/3peak/tpt3232e.jpg",
      alternativeParts: [
        {partNumber: "MAX3232", manufacturer: "Maxim", specs: "RS-232, 3.3V/5V"},
        {partNumber: "SP3232", manufacturer: "Sipex", specs: "RS-232, 3.3V/5V"}
      ],
      companionParts: [
        {partNumber: "TPT75176HL1", type: "RS-485", description: "RS-485收发器"},
        {partNumber: "TPT1042", type: "CAN", description: "CAN收发器"},
        {partNumber: "TPL8033", type: "LDO", description: "稳压器"}
      ],
      faqs: [
        {question: "TPT3232E需要外部电荷泵电容吗？", answer: "需要，TPT3232E使用内部电荷泵产生RS-232电平，需要外接4个0.1μF电容作为电荷泵电容。"},
        {question: "最低工作电压是多少？", answer: "TPT3232E最低可在3.0V电压下正常工作，适合3.3V和5V供电系统。"},
        {question: "ESD保护能力如何？", answer: "TPT3232E提供±15kV HBM保护和±12kV IEC61000-4-2接触放电保护，可有效防止静电损坏。"},
        {question: "支持自动关断功能吗？", answer: "标准版TPT3232E不支持自动关断，如需低功耗应用，建议选择带自动关断功能的型号。"},
        {question: "与MAX3232兼容吗？", answer: "TPT3232E引脚和功能与MAX3232兼容，可直接替换使用，且具有更强的ESD保护能力。"}
      ],
      faeReview: {
        summary: "TPT3232E是思瑞浦RS-232产品线的经典产品，以其高兼容性和强ESD保护能力在工业和消费电子领域广泛应用。",
        keyPoints: ["宽电压范围适应多种供电", "高ESD保护确保可靠性", "与主流产品引脚兼容"],
        designConsiderations: ["电荷泵电容选择影响性能", "注意RS-232线缆长度限制", "收发切换需要适当延时"],
        commonIssues: ["电荷泵电容漏液导致故障", "长距离通信信号衰减"],
        recommendedApplications: ["工业调试接口", "串口通信设备", "便携式仪器"]
      }
    }
  ],
  'motor-drivers': [
    {
      partNumber: "TPM8866",
      name: "TPM8866 48V 8-Channel Smart Low-Side Driver",
      shortDescription: "48V 8通道智能低边驱动器阵列，带诊断和CRC校验功能，每通道支持1.2A输出",
      description: "TPM8866是一款高集成度8通道智能低边驱动器，具有完善的诊断功能和CRC校验，适用于驱动继电器、电磁阀等负载。",
      descriptionParagraphs: [
        "TPM8866是思瑞浦推出的48V 8通道智能低边驱动器阵列，每通道可支持1.2A输出电流，集成完善的诊断和保护功能。",
        "该器件支持SPI接口进行配置和诊断，具有开路检测、短路保护、过温保护等功能，并支持CRC校验确保通信可靠性。",
        "工作电压范围4.5V至60V，支持PWM调光，适用于汽车电子、工业控制中的继电器驱动、电磁阀驱动等应用。"
      ],
      specs: {
        "Channels": "8",
        "Supply Voltage": "4.5V ~ 60V",
        "Output Current": "1.2A per channel",
        "Interface": "SPI",
        "Diagnostic": "Open-load, Short-circuit, Overtemp",
        "Protection": "Overcurrent, Overtemperature",
        "Features": "CRC check, PWM dimming",
        "Operating Temperature": "-40°C ~ +125°C"
      },
      features: [
        "8通道独立控制",
        "每通道1.2A输出能力",
        "4.5V至60V宽工作电压",
        "SPI接口配置和诊断",
        "开路/短路检测",
        "过温保护",
        "CRC通信校验",
        "支持PWM调光"
      ],
      applications: ["汽车电子", "工业控制", "继电器驱动", "电磁阀驱动", "LED驱动"],
      package: "TSSOP-24",
      stock: "18000",
      price: "¥18.90",
      image: "/assets/products/3peak/tpm8866.jpg",
      alternativeParts: [
        {partNumber: "TLE8108", manufacturer: "Infineon", specs: "8-ch low-side driver"},
        {partNumber: "L9826", manufacturer: "STMicroelectronics", specs: "8-ch low-side driver"}
      ],
      companionParts: [
        {partNumber: "TPM8803", type: "Driver", description: "低边驱动器"},
        {partNumber: "TPM27517", type: "Gate Driver", description: "栅极驱动器"},
        {partNumber: "TPP36108", type: "DC-DC", description: "降压转换器"}
      ],
      faqs: [
        {question: "TPM8866支持哪些诊断功能？", answer: "TPM8866支持开路检测、对电源短路检测、对地短路检测、过温检测等多种诊断功能，通过SPI接口读取诊断状态。"},
        {question: "CRC校验如何工作？", answer: "TPM8866在SPI通信中支持CRC校验，发送数据时附加CRC字节，接收端验证CRC确保数据传输正确性。"},
        {question: "PWM调光功能如何使用？", answer: "通过配置PWM寄存器，可设置各通道的PWM占空比，实现LED亮度调节或电磁阀比例控制。"},
        {question: "输出电流如何限制？", answer: "TPM8866内部集成电流限制电路，当输出电流超过1.2A时自动限流，保护器件和负载。"},
        {question: "适合汽车应用吗？", answer: "TPM8866支持-40°C至+125°C工作温度，具有完善的诊断和保护功能，非常适合汽车电子应用。"}
      ],
      faeReview: {
        summary: "TPM8866是思瑞浦电机驱动产品线的重要产品，以其高集成度和完善的诊断功能在工业和汽车领域广泛应用。",
        keyPoints: ["8通道高集成度设计", "完善的诊断和保护功能", "SPI接口便于系统集成"],
        designConsiderations: ["注意散热设计，多通道同时工作时会发热", "感性负载需要续流二极管", "SPI通信建议加CRC校验"],
        commonIssues: ["感性负载关断时的反电动势", "多通道同时开启的电流冲击"],
        recommendedApplications: ["汽车车身控制", "工业继电器控制", "电磁阀驱动"]
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

// 更新产品数据
let modified = false;

for (const category of productsData.categories) {
  const categoryId = category.id;
  const currentProducts = category.products || [];
  
  console.log(`\n📂 分类: ${category.name} (${categoryId})`);
  console.log(`   当前产品数: ${currentProducts.length}`);
  
  if (productsToAdd[categoryId]) {
    const newProducts = productsToAdd[categoryId];
    console.log(`   需要补充: ${newProducts.length} 个产品`);
    
    // 添加新产品
    for (const newProduct of newProducts) {
      // 检查是否已存在
      const exists = currentProducts.some(p => p.partNumber === newProduct.partNumber);
      if (!exists) {
        currentProducts.push(newProduct);
        console.log(`   ✅ 添加: ${newProduct.partNumber}`);
        modified = true;
      } else {
        console.log(`   ⏭️ 已存在: ${newProduct.partNumber}`);
      }
    }
    
    category.products = currentProducts;
    console.log(`   更新后产品数: ${currentProducts.length}`);
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
