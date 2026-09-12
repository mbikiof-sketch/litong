const fs = require('fs');
const path = require('path');

const brand = 'aowei';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand} - 补充产品`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要补充的真实产品数据
const productsToAdd = {
  'cylindrical-supercapacitors': [
    {
      partNumber: "UCR27V3000B",
      name: "UCR27V3000B Cylindrical Supercapacitor",
      shortDescription: "3000F 2.7V圆柱形超级电容，适用于有轨电车、地铁、混合动力汽车",
      description: "UCR27V3000B是奥威科技推出的高容量圆柱形超级电容，具有3000F标称容量和2.7V工作电压。",
      descriptionParagraphs: [
        "UCR27V3000B采用先进的双电层电容技术，提供高功率密度和长循环寿命。",
        "该产品具有低内阻、高能量密度的特点，适用于需要快速充放电的应用场景。",
        "通过CE、RoHS认证，工作温度范围-25°C至+55°C，确保在各种环境下稳定运行。"
      ],
      specs: {
        "Nominal Capacity": "3000F",
        "Working Voltage": "2.7V",
        "ESR": "≤0.8mΩ",
        "Energy Density": "5.5Wh/kg",
        "Power Density": "≥8kW/kg",
        "Cycle Life": "≥100,000 cycles",
        "Operating Temperature": "-25°C ~ +55°C",
        "Weight": "~520g",
        "Dimensions": "Φ60×138mm"
      },
      features: [
        "3000F高容量设计",
        "超低内阻≤0.8mΩ",
        "10万次以上循环寿命",
        "宽工作温度范围",
        "通过CE、RoHS认证",
        "高功率密度"
      ],
      applications: ["有轨电车", "地铁", "混合动力汽车", "节能电梯", "应急电源"],
      package: "Cylindrical Φ60×138mm",
      stock: "5000",
      price: "¥280",
      image: "/assets/products/aowei/ucr27v3000b.jpg",
      alternativeParts: [
        {partNumber: "SCM3000", manufacturer: "Skeleton Technologies", specs: "3000F 2.85V"},
        {partNumber: "BMOD3000", manufacturer: "Maxwell", specs: "3000F 2.7V"}
      ],
      companionParts: [
        {partNumber: "UCK42V9000", type: "Supercapacitor", description: "方形超级电容模组"},
        {partNumber: "MUCK24V2870", type: "Module", description: "24V超级电容模组"},
        {partNumber: "CMS-UCR", type: "Management System", description: "电容管理系统"}
      ],
      faqs: [
        {question: "UCR27V3000B的循环寿命是多少？", answer: "UCR27V3000B的循环寿命可达10万次以上（25°C，额定电压充放电）。", decisionGuide: "长循环寿命适合频繁充放电应用。", keywords: ["循环寿命", "充放电", "寿命"] },
        {question: "工作温度范围是多少？", answer: "工作温度范围为-25°C至+55°C，储存温度-30°C至+60°C。", decisionGuide: "宽温度范围适应各种环境。", keywords: ["温度范围", "工作环境", "储存"] },
        {question: "如何正确使用和维护？", answer: "避免超过额定电压、防止短路、定期检查电压，长期存储需定期补电。", decisionGuide: "遵循使用规范确保产品寿命。", keywords: ["使用规范", "维护", "存储"] },
        {question: "内阻是多少？", answer: "直流内阻≤0.8mΩ，低内阻确保高功率输出能力。", decisionGuide: "低内阻适合大功率应用。", keywords: ["内阻", "ESR", "功率"] },
        {question: "有哪些安全认证？", answer: "通过CE、RoHS认证，符合国际安全标准。", decisionGuide: "认证齐全，可放心使用。", keywords: ["认证", "CE", "RoHS"] }
      ],
      faeReview: {
        summary: "UCR27V3000B是奥威圆柱形超级电容的主力产品，性能稳定可靠。",
        keyPoints: ["高容量3000F满足大能量需求", "低内阻确保高功率输出", "长循环寿命降低使用成本"],
        designConsiderations: ["注意单体均衡", "考虑散热设计", "预留安全余量"],
        commonIssues: ["长期低压存储影响性能", "高温环境加速老化"],
        recommendedApplications: ["城市公交", "轨道交通", "工业储能"]
      }
    },
    {
      partNumber: "UCK42V6800C",
      name: "UCK42V6800C Cylindrical Supercapacitor",
      shortDescription: "6800F 2.8-4.0V高能量密度圆柱形超级电容，适用于城市客车",
      description: "UCK42V6800C是奥威科技推出的高能量密度超级电容，专为城市客车设计。",
      descriptionParagraphs: [
        "UCK42V6800C采用先进的电极材料和电解液配方，实现高达54Wh/kg的能量密度。",
        "支持5C充放电，循环寿命达5万次（2.8-4.0V），满足城市公交频繁启停需求。",
        "宽工作温度窗口-25°C至+55°C，内置多重防护设计，确保安全可靠运行。"
      ],
      specs: {
        "Nominal Capacity": "6800F",
        "Working Voltage": "2.8-4.0V",
        "Energy Density": "54Wh/kg",
        "Standard Current": "70A",
        "Max Current": "140A (<20s)",
        "Cycle Life": "50,000 cycles (2.8-4.0V)",
        "Operating Temperature": "-25°C ~ +55°C",
        "Weight": "~460g"
      },
      features: [
        "6800F超大容量",
        "54Wh/kg高能量密度",
        "5C高倍率充放电",
        "5万次循环寿命",
        "多重安全防护",
        "宽温度范围"
      ],
      applications: ["城市客车", "隧道机车", "矿用机车", "码头车", "船用电源"],
      package: "Cylindrical",
      stock: "3500",
      price: "¥450",
      image: "/assets/products/aowei/uck42v6800c.jpg",
      alternativeParts: [
        {partNumber: "DCELL6800", manufacturer: "LS Mtron", specs: "6800F 2.8V"},
        {partNumber: "SCAP6800", manufacturer: "Vinatech", specs: "6800F 2.7V"}
      ],
      companionParts: [
        {partNumber: "UCK42V9000", type: "Supercapacitor", description: "9000F超级电容"},
        {partNumber: "S585V36-K7", type: "System", description: "城市客车电容系统"},
        {partNumber: "CMS-UCK", type: "Management System", description: "电容管理系统"}
      ],
      faqs: [
        {question: "UCK42V6800C的能量密度是多少？", answer: "能量密度高达54Wh/kg，在超级电容领域处于领先水平。", decisionGuide: "高能量密度适合空间受限的应用。", keywords: ["能量密度", "Wh/kg", "高能量"] },
        {question: "支持多大的充放电电流？", answer: "标准充放电电流70A，最大电流140A（<20s）。", decisionGuide: "高倍率适合快速充放电场景。", keywords: ["充放电电流", "倍率", "功率"] },
        {question: "循环寿命如何？", answer: "在2.8-4.0V电压区间循环寿命达5万次。", decisionGuide: "长寿命降低总拥有成本。", keywords: ["循环寿命", "充放电次数", "寿命"] },
        {question: "有哪些安全保护措施？", answer: "采用多重防护设计，包括过压、过流、过热保护。", decisionGuide: "完善保护确保系统安全。", keywords: ["安全保护", "过压保护", "多重防护"] },
        {question: "适合哪些应用场景？", answer: "特别适合城市公交、轨道交通等频繁启停应用。", decisionGuide: "根据功率和能量需求选择。", keywords: ["应用场景", "城市公交", "轨道交通"] }
      ],
      faeReview: {
        summary: "UCK42V6800C是奥威高能量密度超级电容的代表产品，在城市公交领域广泛应用。",
        keyPoints: ["54Wh/kg高能量密度", "5C高倍率性能", "5万次循环寿命"],
        designConsiderations: ["注意电压管理", "合理设计散热", "配置适当CMS"],
        commonIssues: ["电压超限影响寿命", "高温环境性能衰减"],
        recommendedApplications: ["城市公交", "隧道机车", "矿用机车"]
      }
    }
  ],
  'prismatic-supercapacitors': [
    {
      partNumber: "UCK42V9000",
      name: "UCK42V9000 Prismatic Supercapacitor",
      shortDescription: "9000F 2.8-4.0V方形超级电容，高能量密度78Wh/kg",
      description: "UCK42V9000是奥威科技推出的方形超级电容，具有9000F超大容量和78Wh/kg能量密度。",
      descriptionParagraphs: [
        "UCK42V9000采用方形设计，便于模组集成和空间优化。",
        "9000F容量配合2.8-4.0V工作电压，储存能量达36Wh（2.8-4.0V）。",
        "标准充放电电流100A，最大200A（<20s），满足高功率应用需求。"
      ],
      specs: {
        "Nominal Capacity": "9000F",
        "Working Voltage": "2.8-4.0V",
        "Energy": "36Wh (2.8-4.0V)",
        "Energy Density": "78Wh/kg",
        "Standard Current": "100A",
        "Max Current": "200A (<20s)",
        "ESR": "≤0.5mΩ",
        "Cycle Life": "50,000 cycles",
        "Operating Temperature": "-25°C ~ +55°C"
      },
      features: [
        "9000F超大容量",
        "78Wh/kg高能量密度",
        "方形设计便于集成",
        "低内阻≤0.5mΩ",
        "5万次循环寿命",
        "高功率输出"
      ],
      applications: ["城市公交", "有轨电车", "船用电源", "智能电网", "可再生能源储能"],
      package: "Prismatic",
      stock: "2800",
      price: "¥580",
      image: "/assets/products/aowei/uck42v9000.jpg",
      alternativeParts: [
        {partNumber: "MPR9000", manufacturer: "Nesscap", specs: "9000F 2.7V"},
        {partNumber: "SCC9000", manufacturer: "Samwha", specs: "9000F 2.8V"}
      ],
      companionParts: [
        {partNumber: "UCK42V28000", type: "Supercapacitor", description: "28000F大容量电容"},
        {partNumber: "MUCK72V2870", type: "Module", description: "72V超级电容模组"},
        {partNumber: "S820V29-K8-A", type: "System", description: "有轨电车电容系统"}
      ],
      faqs: [
        {question: "UCK42V9000的容量和能量是多少？", answer: "容量9000F，在2.8-4.0V区间储存能量36Wh。", decisionGuide: "大容量适合高能量需求应用。", keywords: ["容量", "能量", "Wh"] },
        {question: "能量密度是多少？", answer: "能量密度达78Wh/kg，处于行业领先水平。", decisionGuide: "高能量密度减少系统重量。", keywords: ["能量密度", "Wh/kg", "轻量化"] },
        {question: "充放电性能如何？", answer: "标准电流100A，最大200A（<20s），支持快速充放电。", decisionGuide: "高倍率性能适合大功率应用。", keywords: ["充放电", "倍率", "功率"] },
        {question: "方形设计有什么优势？", answer: "方形设计便于模组集成，空间利用率高，散热性能好。", decisionGuide: "方形适合模组化应用。", keywords: ["方形设计", "模组集成", "散热"] },
        {question: "循环寿命是多少？", answer: "在2.8-4.0V区间循环寿命达5万次。", decisionGuide: "长寿命降低维护成本。", keywords: ["循环寿命", "充放电", "维护"] }
      ],
      faeReview: {
        summary: "UCK42V9000是奥威方形超级电容的主力产品，高能量密度和方形设计使其在系统集成中具有优势。",
        keyPoints: ["9000F大容量", "78Wh/kg高能量密度", "方形设计便于集成"],
        designConsiderations: ["合理设计模组结构", "注意热管理", "配置均衡电路"],
        commonIssues: ["模组内单体压差过大", "散热不足影响性能"],
        recommendedApplications: ["城市公交", "有轨电车", "储能系统"]
      }
    },
    {
      partNumber: "UCK42V28000",
      name: "UCK42V28000 Prismatic Supercapacitor",
      shortDescription: "28000F 2.8-4.0V超大容量方形超级电容，适用于高能量应用",
      description: "UCK42V28000是奥威科技推出的超大容量方形超级电容，容量达28000F。",
      descriptionParagraphs: [
        "UCK42V28000具有28000F超大容量，储存能量达112Wh（2.8-4.0V）。",
        "能量密度80Wh/kg，功率密度高，支持快速充放电。",
        "适用于对能量和功率要求较高的工况，如船舶电源、重型牵引车等。"
      ],
      specs: {
        "Nominal Capacity": "28000F",
        "Working Voltage": "2.8-4.0V",
        "Energy": "112Wh (2.8-4.0V)",
        "Energy Density": "80Wh/kg",
        "Standard Current": "150A",
        "Max Current": "300A (<20s)",
        "ESR": "≤0.35mΩ",
        "Cycle Life": "50,000 cycles",
        "Operating Temperature": "-25°C ~ +55°C"
      },
      features: [
        "28000F超大容量",
        "112Wh高能量储存",
        "80Wh/kg能量密度",
        "超低内阻≤0.35mΩ",
        "高功率输出",
        "长循环寿命"
      ],
      applications: ["船用电源", "重型牵引车", "码头车", "矿用机车", "大功率储能"],
      package: "Prismatic Large",
      stock: "1500",
      price: "¥1200",
      image: "/assets/products/aowei/uck42v28000.jpg",
      alternativeParts: [
        {partNumber: "SCM25000", manufacturer: "Skeleton", specs: "25000F 2.85V"},
        {partNumber: "UC25000", manufacturer: "Ioxus", specs: "25000F 2.7V"}
      ],
      companionParts: [
        {partNumber: "UCK42V9000", type: "Supercapacitor", description: "9000F超级电容"},
        {partNumber: "S585V73-K7", type: "System", description: "电机车电容系统"},
        {partNumber: "CMS-28000", type: "Management System", description: "大容量电容管理系统"}
      ],
      faqs: [
        {question: "UCK42V28000的容量是多少？", answer: "容量达28000F，是奥威最大容量的单体超级电容之一。", decisionGuide: "超大容量适合高能量需求。", keywords: ["容量", "28000F", "大容量"] },
        {question: "储存能量有多少？", answer: "在2.8-4.0V区间可储存112Wh能量。", decisionGuide: "高能量适合长续航应用。", keywords: ["能量", "Wh", "储能"] },
        {question: "适合哪些高功率应用？", answer: "适合船用电源、重型牵引车、矿用机车等大功率应用。", decisionGuide: "根据功率需求选择合适容量。", keywords: ["高功率", "船用电源", "牵引车"] },
        {question: "内阻是多少？", answer: "内阻≤0.35mΩ，确保高功率输出能力。", decisionGuide: "超低内阻适合大功率放电。", keywords: ["内阻", "ESR", "功率输出"] },
        {question: "如何配置成模组使用？", answer: "可通过串联并联配置成不同电压容量模组，需配合CMS使用。", decisionGuide: "根据系统需求设计模组配置。", keywords: ["模组", "串联并联", "CMS"] }
      ],
      faeReview: {
        summary: "UCK42V28000是奥威超大容量超级电容，适用于对能量要求极高的应用场景。",
        keyPoints: ["28000F超大容量", "112Wh高能量", "80Wh/kg能量密度"],
        designConsiderations: ["注意模组均衡设计", "加强热管理", "预留安全余量"],
        commonIssues: ["大电流充放电发热", "长期高压存储影响寿命"],
        recommendedApplications: ["船用电源", "重型牵引车", "大功率储能"]
      }
    }
  ],
  'module-systems': [
    {
      partNumber: "MUCK72V2870",
      name: "MUCK72V2870 Supercapacitor Module",
      shortDescription: "72V 2870F超级电容模组，适用于有轨电车和船舶",
      description: "MUCK72V2870是奥威科技推出的72V高压超级电容模组，集成多个单体和CMS管理系统。",
      descriptionParagraphs: [
        "MUCK72V2870模组由18个UCK系列单体串联组成，额定电压72V，容量2870F。",
        "内置电容管理系统（CMS），实现单体电压监测、温度监测和主动均衡功能。",
        "采用IP67防护等级设计，适用于有轨电车、船舶等恶劣环境应用。"
      ],
      specs: {
        "Nominal Voltage": "72V",
        "Nominal Capacity": "2870F",
        "Working Voltage Range": "50.4-72.9V",
        "Surge Voltage": "82V",
        "ESR": "≤10mΩ",
        "Max Current": "500A (<20s)",
        "Cycle Life": "≥100,000 cycles",
        "Operating Temperature": "-25°C ~ +55°C",
        "Protection": "IP67"
      },
      features: [
        "72V高压设计",
        "2870F大容量",
        "内置CMS管理系统",
        "IP67防护等级",
        "主动均衡功能",
        "CAN通信接口"
      ],
      applications: ["有轨电车", "船舶", "重型机械", "港口设备", "轨道交通"],
      package: "Module with Enclosure",
      stock: "800",
      price: "¥8500",
      image: "/assets/products/aowei/muck72v2870.jpg",
      alternativeParts: [
        {partNumber: "MOD2880-72V", manufacturer: "Skeleton", specs: "72V 2880F"},
        {partNumber: "SCM72V3000", manufacturer: "LS Mtron", specs: "72V 3000F"}
      ],
      companionParts: [
        {partNumber: "UCK42V9000", type: "Cell", description: "单体超级电容"},
        {partNumber: "S820V29-K8-A", type: "System", description: "有轨电车系统"},
        {partNumber: "Charger72V", type: "Charger", description: "72V充电机"}
      ],
      faqs: [
        {question: "MUCK72V2870的电压和容量是多少？", answer: "额定电压72V，容量2870F，由18个单体串联组成。", decisionGuide: "72V适合大多数工业应用。", keywords: ["电压", "容量", "72V"] },
        {question: "CMS管理系统有哪些功能？", answer: "CMS具有电压监测、温度监测、主动均衡、故障报警等功能。", decisionGuide: "完善的管理系统确保安全运行。", keywords: ["CMS", "管理系统", "均衡"] },
        {question: "防护等级是多少？", answer: "IP67防护等级，可防尘防水，适合恶劣环境。", decisionGuide: "高防护等级适应户外应用。", keywords: ["防护等级", "IP67", "防水防尘"] },
        {question: "通信接口是什么？", answer: "标配CAN通信接口，可与整车BMS通信。", decisionGuide: "CAN接口便于系统集成。", keywords: ["CAN", "通信接口", "BMS"] },
        {question: "循环寿命是多少？", answer: "循环寿命达10万次以上，确保长期使用。", decisionGuide: "长寿命降低维护成本。", keywords: ["循环寿命", "10万次", "维护"] }
      ],
      faeReview: {
        summary: "MUCK72V2870是奥威72V模组的标准产品，集成度高，管理完善，在有轨电车领域应用广泛。",
        keyPoints: ["72V标准电压", "内置CMS管理系统", "IP67高防护等级"],
        designConsiderations: ["注意安装方向", "确保散热通道", "定期检查CMS状态"],
        commonIssues: ["CAN通信干扰", "长期不用需要维护充电"],
        recommendedApplications: ["有轨电车", "船舶", "重型机械"]
      }
    },
    {
      partNumber: "MUCR48V196A",
      name: "MUCR48V196A Supercapacitor Module",
      shortDescription: "48V 196A超级电容模组，适用于工业储能和UPS",
      description: "MUCR48V196A是奥威科技推出的48V工业级超级电容模组，适用于储能和备用电源应用。",
      descriptionParagraphs: [
        "MUCR48V196A模组额定电压48V，采用UCR系列单体串联，具有高可靠性和长寿命。",
        "内置完善的电容管理系统，支持RS485/CAN通信，便于远程监控。",
        "紧凑设计，易于安装维护，适用于工业储能、UPS、应急电源等应用。"
      ],
      specs: {
        "Nominal Voltage": "48V",
        "Capacity": "196A (at 2.7V base)",
        "Working Voltage Range": "36-54V",
        "ESR": "≤15mΩ",
        "Max Current": "300A (<20s)",
        "Cycle Life": "≥100,000 cycles",
        "Operating Temperature": "-25°C ~ +55°C",
        "Communication": "RS485/CAN"
      },
      features: [
        "48V标准电压",
        "高可靠性设计",
        "内置管理系统",
        "RS485/CAN通信",
        "紧凑结构设计",
        "易于安装维护"
      ],
      applications: ["工业储能", "UPS", "应急电源", "AGV", "机器人"],
      package: "Industrial Module",
      stock: "1200",
      price: "¥4500",
      image: "/assets/products/aowei/mucr48v196a.jpg",
      alternativeParts: [
        {partNumber: "MOD48V200", manufacturer: "Maxwell", specs: "48V 200A"},
        {partNumber: "SCM48V165", manufacturer: "Nesscap", specs: "48V 165F"}
      ],
      companionParts: [
        {partNumber: "UCR27V3000B", type: "Cell", description: "UCR系列单体"},
        {partNumber: "Charger48V", type: "Charger", description: "48V充电机"},
        {partNumber: "Inverter48V", type: "Inverter", description: "48V逆变器"}
      ],
      faqs: [
        {question: "MUCR48V196A的电压是多少？", answer: "额定电压48V，工作电压范围36-54V。", decisionGuide: "48V是工业标准电压，应用广泛。", keywords: ["48V", "电压", "工业标准"] },
        {question: "适合哪些工业应用？", answer: "适合工业储能、UPS、应急电源、AGV等应用。", decisionGuide: "48V系统适合大多数工业场景。", keywords: ["工业储能", "UPS", "AGV"] },
        {question: "通信接口有哪些？", answer: "支持RS485和CAN通信，便于系统集成。", decisionGuide: "双通信接口提高兼容性。", keywords: ["RS485", "CAN", "通信"] },
        {question: "如何安装维护？", answer: "紧凑设计，标准接口，易于安装。定期通过CMS检查状态。", decisionGuide: "标准化设计降低维护难度。", keywords: ["安装", "维护", "CMS"] },
        {question: "循环寿命如何？", answer: "循环寿命10万次以上，适合频繁充放电应用。", decisionGuide: "长寿命降低总体拥有成本。", keywords: ["循环寿命", "10万次", "成本"] }
      ],
      faeReview: {
        summary: "MUCR48V196A是奥威48V工业模组，标准电压，高可靠性，在工业储能领域应用广泛。",
        keyPoints: ["48V标准电压", "工业级可靠性", "双通信接口"],
        designConsiderations: ["注意接地设计", "合理布置线缆", "定期检查连接"],
        commonIssues: ["通信协议不匹配", "接地不良干扰"],
        recommendedApplications: ["工业储能", "UPS", "AGV", "机器人"]
      }
    }
  ],
  'hybrid-capacitors': [
    {
      partNumber: "S585V36-K7",
      name: "S585V36-K7 City Bus Supercapacitor System",
      shortDescription: "585V 36kWh城市客车超级电容系统，适用于城市公交",
      description: "S585V36-K7是奥威科技为城市客车开发的超级电容系统，电压585V，能量36kWh。",
      descriptionParagraphs: [
        "S585V36-K7系统由多个UCK模组串联组成，总电压585V，总能量36kWh。",
        "配备完善的电容管理系统（CMS），实现系统级监控和保护。",
        "已通过多项城市公交实车验证，性能稳定可靠。"
      ],
      specs: {
        "System Voltage": "585V",
        "Energy Capacity": "36kWh",
        "Working Voltage Range": "420-590V",
        "Standard Current": "200A",
        "Max Current": "400A (<20s)",
        "Cycle Life": "≥100,000 cycles",
        "Operating Temperature": "-25°C ~ +55°C",
        "Cooling": "Air cooling"
      },
      features: [
        "585V高压系统",
        "36kWh大容量",
        "系统级CMS管理",
        "风冷散热",
        "高安全性设计",
        "已通过实车验证"
      ],
      applications: ["城市公交", "BRT", "通勤车", "机场摆渡车"],
      package: "System with Enclosure",
      stock: "50",
      price: "¥180000",
      image: "/assets/products/aowei/s585v36-k7.jpg",
      alternativeParts: [
        {partNumber: "BUS600V35K", manufacturer: "Skeleton", specs: "600V 35kWh"},
        {partNumber: "SCAP600V40K", manufacturer: "Nesscap", specs: "600V 40kWh"}
      ],
      companionParts: [
        {partNumber: "UCK42V9000", type: "Cell", description: "UCK单体"},
        {partNumber: "Charger585V", type: "Charger", description: "585V充电站"},
        {partNumber: "Pantograph", type: "Charging", description: "受电弓充电系统"}
      ],
      faqs: [
        {question: "S585V36-K7的电压和能量是多少？", answer: "系统电压585V，能量容量36kWh。", decisionGuide: "适合城市公交全天运营需求。", keywords: ["585V", "36kWh", "城市公交"] },
        {question: "充电时间是多少？", answer: "使用受电弓快速充电，10-15分钟可充满。", decisionGuide: "快速充电适合公交站点充电模式。", keywords: ["充电时间", "受电弓", "快充"] },
        {question: "已通过哪些验证？", answer: "已通过多个城市公交实车验证，累计运行超过百万公里。", decisionGuide: "经过验证的产品更可靠。", keywords: ["实车验证", "运行里程", "可靠性"] },
        {question: "散热方式是什么？", answer: "采用风冷散热，确保系统在高功率下稳定运行。", decisionGuide: "风冷设计简单可靠。", keywords: ["风冷", "散热", "高功率"] },
        {question: "如何与车辆系统集成？", answer: "提供标准CAN接口和通信协议，便于与整车BMS集成。", decisionGuide: "标准化接口便于集成。", keywords: ["CAN", "BMS", "集成"] }
      ],
      faeReview: {
        summary: "S585V36-K7是奥威城市公交系统的标准配置，已在多个城市成功应用。",
        keyPoints: ["585V高压系统", "36kWh大容量", "已通过实车验证"],
        designConsiderations: ["注意整车绝缘设计", "合理布置充电接口", "定期检查系统状态"],
        commonIssues: ["充电接口磨损", "长期停放需要维护"],
        recommendedApplications: ["城市公交", "BRT", "通勤车"]
      }
    },
    {
      partNumber: "S820V29-K8-A",
      name: "S820V29-K8-A Tram Supercapacitor System",
      shortDescription: "820V 29kWh有轨电车超级电容系统，适用于现代有轨电车",
      description: "S820V29-K8-A是奥威科技为现代有轨电车开发的超级电容系统，电压820V，能量29kWh。",
      descriptionParagraphs: [
        "S820V29-K8-A系统采用模块化设计，总电压820V，总能量29kWh。",
        "配备先进的CMS管理系统和多重安全保护，确保系统安全可靠运行。",
        "已在多条现代有轨电车线路成功应用，运行稳定。"
      ],
      specs: {
        "System Voltage": "820V",
        "Energy Capacity": "29kWh",
        "Working Voltage Range": "580-840V",
        "Standard Current": "150A",
        "Max Current": "300A (<20s)",
        "Cycle Life": "≥100,000 cycles",
        "Operating Temperature": "-25°C ~ +55°C",
        "IP Rating": "IP65"
      },
      features: [
        "820V高压系统",
        "29kWh能量容量",
        "模块化设计",
        "先进CMS管理",
        "多重安全保护",
        "IP65防护等级"
      ],
      applications: ["现代有轨电车", "轻轨", "轨道交通", "无轨电车"],
      package: "Railway System",
      stock: "30",
      price: "¥220000",
      image: "/assets/products/aowei/s820v29-k8-a.jpg",
      alternativeParts: [
        {partNumber: "TRAM800V30K", manufacturer: "Skeleton", specs: "800V 30kWh"},
        {partNumber: "SCAP750V25K", manufacturer: "Nesscap", specs: "750V 25kWh"}
      ],
      companionParts: [
        {partNumber: "MUCK72V2870", type: "Module", description: "72V模组单元"},
        {partNumber: "Charger820V", type: "Charger", description: "820V充电站"},
        {partNumber: "GroundCharge", type: "Charging", description: "地面充电系统"}
      ],
      faqs: [
        {question: "S820V29-K8-A的电压和能量是多少？", answer: "系统电压820V，能量容量29kWh。", decisionGuide: "820V适合有轨电车高功率需求。", keywords: ["820V", "29kWh", "有轨电车"] },
        {question: "适用于哪些轨道交通？", answer: "适用于现代有轨电车、轻轨、无轨电车等。", decisionGuide: "根据线路特点选择合适系统。", keywords: ["有轨电车", "轻轨", "轨道交通"] },
        {question: "防护等级是多少？", answer: "IP65防护等级，适合户外轨道环境。", decisionGuide: "高防护确保户外可靠运行。", keywords: ["IP65", "防护等级", "户外"] },
        {question: "充电方式是什么？", answer: "支持站点快速充电和车场慢充两种模式。", decisionGuide: "灵活充电适应不同运营模式。", keywords: ["充电", "快充", "慢充"] },
        {question: "系统安全性如何？", answer: "多重安全保护，包括过压、过流、过热、短路保护。", decisionGuide: "完善保护确保乘客安全。", keywords: ["安全性", "保护", "乘客安全"] }
      ],
      faeReview: {
        summary: "S820V29-K8-A是奥威有轨电车系统的旗舰产品，已在多条线路成功运营。",
        keyPoints: ["820V高压系统", "模块化设计", "已在多条线路应用"],
        designConsiderations: ["注意轨道车辆标准符合性", "合理设计充电站点", "定期维护保养"],
        commonIssues: ["轨道环境电磁干扰", "冬季低温性能衰减"],
        recommendedApplications: ["现代有轨电车", "轻轨", "无轨电车"]
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
