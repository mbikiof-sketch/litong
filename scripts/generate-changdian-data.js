const fs = require('fs');
const path = require('path');

// Read existing products.json
const productsPath = path.join(__dirname, '..', 'data', 'changdian', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔧 Generating additional Changdian product data...\n');

// Add Rectifiers category
const rectifiersCategory = {
  "id": "rectifiers",
  "name": "整流器",
  "slug": "rectifiers",
  "description": "桥式整流器、单相整流桥、三相整流模块",
  "longDescription": "长电科技整流器产品线包括桥式整流器、单相整流桥、三相整流模块等多种类型，广泛应用于电源整流、电机驱动、焊接设备等领域。产品具有高电流容量、低正向压降、高可靠性等特点。",
  "series": [
    {
      "name": "GBJ系列",
      "description": "单相桥式整流器，6A-35A电流，600V-1000V耐压",
      "features": ["高电流", "低VF", "紧凑型"]
    },
    {
      "name": "KBPC系列",
      "description": "单相桥式整流器，10A-50A电流，50V-1000V耐压",
      "features": ["大电流", "方型封装", "易于安装"]
    },
    {
      "name": "MDS系列",
      "description": "三相整流模块，高功率应用",
      "features": ["三相整流", "高功率", "工业级"]
    }
  ],
  "selectionGuide": {
    "title": "整流器选型指南",
    "content": "根据应用需求选择合适的整流器：单相桥式整流器适用于一般电源应用；三相整流模块适用于大功率工业应用。考虑电流容量、耐压、封装形式等因素。",
    "articleLink": "/changdian/support/rectifier-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/changdian/support/rectifier-selection-guide.html",
    "text": "查看整流器选型指南"
  },
  "faqs": [
    {
      "question": "桥式整流器和单个二极管有什么区别？",
      "answer": "桥式整流器包含4个二极管组成全桥电路，可以直接将交流转换为直流，不需要中心抽头变压器。单个二极管只能进行半波整流，效率低且纹波大。桥式整流器效率更高，输出纹波更小。",
      "decisionGuide": "全波整流选桥式整流器；简单低成本应用可选单个二极管。",
      "keywords": ["桥式整流器", "全波整流", "半波整流"]
    },
    {
      "question": "如何选择整流器的电流额定值？",
      "answer": "整流器的电流额定值应大于负载直流电流的1.5-2倍。对于容性负载（如滤波电容），冲击电流较大，需要更大的余量。桥式整流器中每个二极管只导通半个周期，实际电流是输出电流的0.5-0.7倍。",
      "decisionGuide": "按输出电流的1.5-2倍选择整流器额定值。",
      "keywords": ["整流器选型", "电流额定值", "余量"]
    },
    {
      "question": "整流器的正向压降对效率有什么影响？",
      "answer": "桥式整流器有两个二极管串联导通，总压降是单个二极管的2倍。例如VF=1V的二极管，桥式整流器压降约2V。在12V输出中，2V压降意味着16.7%的损耗。选择低VF的整流器可以显著提高效率。",
      "decisionGuide": "低压应用优先选择低VF整流器或肖特基整流器。",
      "keywords": ["正向压降", "效率", "桥式整流器"]
    }
  ],
  "products": [
    {
      "partNumber": "GBJ1510",
      "name": "单相桥式整流器 15A 1000V",
      "shortDescription": "GBJ1510是紧凑型单相桥式整流器，额定电流15A，反向耐压1000V，采用GBJ封装，广泛应用于电源整流和电机驱动。",
      "descriptionParagraphs": [
        "GBJ1510是15A单相桥式整流器，反向耐压1000V，采用紧凑型GBJ封装。",
        "内部包含4个高性能整流二极管组成全桥电路，可直接将交流转换为直流。",
        "正向压降约1.05V（每臂），适合电源适配器、电机驱动等应用。"
      ],
      "category": "整流器",
      "series": "GBJ",
      "specifications": {
        "Type": "Single Phase Bridge",
        "Forward Current": "15A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.05V per element",
        "Package": "GBJ",
        "Operating Temperature": "-55°C to +150°C"
      },
      "features": [
        "15A高电流额定值",
        "1000V高反向耐压",
        "紧凑型GBJ封装",
        "低正向压降",
        "高浪涌电流能力",
        "符合RoHS标准"
      ],
      "applications": [
        "开关电源输入整流",
        "电机驱动整流",
        "电池充电器",
        "逆变器",
        "工业控制"
      ],
      "datasheet": "/datasheets/GBJ1510.pdf",
      "stock": "In Stock",
      "moq": 100,
      "leadTime": "2-4 weeks",
      "faqs": [
        {
          "question": "GBJ1510的封装尺寸是多少？",
          "answer": "GBJ1510采用GBJ封装，尺寸约30x30x5mm，引脚间距约5mm。这种紧凑型封装适合PCB安装，散热性能良好。安装时需要确保足够的铜箔面积散热。",
          "decisionGuide": "PCB设计时预留GBJ封装尺寸空间，确保散热。",
          "keywords": ["GBJ1510", "GBJ封装", "尺寸"]
        },
        {
          "question": "GBJ1510可以用于220V交流整流吗？",
          "answer": "可以。220V交流峰值电压约311V，GBJ1510的1000V耐压提供充足余量。输出直流电压约310V（无负载）或约280-300V（带负载）。适合大功率电源应用。",
          "decisionGuide": "220V整流应用选GBJ1510（1000V），110V应用可选GBJ1506（600V）。",
          "keywords": ["GBJ1510", "220V整流", "峰值电压"]
        },
        {
          "question": "GBJ1510需要散热器吗？",
          "answer": "15A满载时功耗约15-20W（取决于VF和波形），需要散热器。结到壳热阻约2°C/W，壳到散热器约1°C/W。建议散热器热阻<3°C/W，或使用强制风冷。",
          "decisionGuide": "大电流应用必须加装散热器，确保结温<150°C。",
          "keywords": ["GBJ1510", "散热器", "热阻"]
        },
        {
          "question": "GBJ1510和KBPC1510有什么区别？",
          "answer": "两者电气参数相同（15A/1000V），但封装不同：GBJ是紧凑型方形封装，适合PCB安装；KBPC是金属壳封装，散热更好，适合 chassis 安装。根据安装方式选择。",
          "decisionGuide": "PCB安装选GBJ1510； chassis 安装选KBPC1510。",
          "keywords": ["GBJ1510", "KBPC1510", "封装对比"]
        },
        {
          "question": "GBJ1510的浪涌电流能力如何？",
          "answer": "GBJ1510的峰值浪涌电流额定值为300A（8.3ms单正弦半波）。这个高浪涌能力可以应对电源启动时滤波电容的充电冲击。",
          "decisionGuide": "大电容负载应用选GBJ1510，浪涌能力强。",
          "keywords": ["GBJ1510", "浪涌电流", "冲击电流"]
        }
      ],
      "faeReview": {
        "author": "刘工程师 - 工业电源",
        "content": "GBJ1510是我们工业电源设计中的常用器件。15A/1000V规格覆盖多数应用，GBJ封装紧凑便于PCB布局。需要注意的是大电流时必须加散热器，否则结温会过高。性价比很高，是中小功率电源的理想选择。",
        "highlight": "紧凑型桥式整流器，15A/1000V规格，GBJ封装便于PCB安装。适合电源适配器、电机驱动等应用。注意大电流时的散热设计。"
      },
      "alternativeParts": [
        {
          "partNumber": "GBJ2510",
          "brand": "Changdian",
          "specifications": {
            "Forward Current": "25A",
            "Reverse Voltage": "1000V"
          },
          "comparison": "GBJ1510=><GBJ2510: Output current 25A > 15A (+67%), suitable for direct replacement",
          "reason": "更大电流容量",
          "useCase": "大电流电源应用",
          "link": "/changdian/products/rectifiers/gbj2510.html"
        },
        {
          "partNumber": "KBPC1510",
          "brand": "Changdian",
          "specifications": {
            "Forward Current": "15A",
            "Reverse Voltage": "1000V"
          },
          "comparison": "GBJ1510=><KBPC1510: Same current/voltage, metal case better heat dissipation",
          "reason": "更好散热性能",
          "useCase": " chassis 安装应用",
          "link": "/changdian/products/rectifiers/kbpc1510.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "GBJ1506",
          "description": "600V耐压版本",
          "link": "/changdian/products/rectifiers/gbj1506.html",
          "category": "整流器"
        },
        {
          "partNumber": "GBJ3510",
          "description": "35A大电流版本",
          "link": "/changdian/products/rectifiers/gbj3510.html",
          "category": "整流器"
        },
        {
          "partNumber": "1N5408",
          "description": "配套二极管",
          "link": "/changdian/products/diodes/1n5408.html",
          "category": "二极管"
        }
      ],
      "slug": "gbj1510"
    },
    {
      "partNumber": "GBJ2510",
      "name": "单相桥式整流器 25A 1000V",
      "shortDescription": "GBJ2510是大电流单相桥式整流器，额定电流25A，反向耐压1000V，采用GBJ封装，适用于大功率电源和电机驱动。",
      "descriptionParagraphs": [
        "GBJ2510是25A大电流单相桥式整流器，反向耐压1000V，适合大功率应用。",
        "采用GBJ封装，与GBJ1510引脚兼容，可直接替换升级。",
        "高浪涌电流能力，适合大电容负载的电源应用。"
      ],
      "category": "整流器",
      "series": "GBJ",
      "specifications": {
        "Type": "Single Phase Bridge",
        "Forward Current": "25A",
        "Reverse Voltage": "1000V",
        "Forward Voltage": "1.05V per element",
        "Package": "GBJ",
        "Operating Temperature": "-55°C to +150°C"
      },
      "features": [
        "25A大电流额定值",
        "1000V高反向耐压",
        "GBJ封装",
        "与GBJ1510引脚兼容",
        "高浪涌电流能力",
        "符合RoHS标准"
      ],
      "applications": [
        "大功率开关电源",
        "电机驱动整流",
        "工业电源",
        "逆变器",
        "焊接设备"
      ],
      "datasheet": "/datasheets/GBJ2510.pdf",
      "stock": "In Stock",
      "moq": 50,
      "leadTime": "2-4 weeks",
      "faqs": [
        {
          "question": "GBJ2510和GBJ1510可以互换吗？",
          "answer": "两者封装和引脚完全相同，GBJ2510电流容量更大（25A vs 15A）。可以用GBJ2510替换GBJ1510，但成本更高。反向替换在>15A时会导致过热。",
          "decisionGuide": "小电流两者都可；大电流必须用GBJ2510。",
          "keywords": ["GBJ2510", "GBJ1510", "互换"]
        },
        {
          "question": "GBJ2510的散热要求是什么？",
          "answer": "25A满载时功耗约25-30W，必须加散热器。建议使用热阻<2°C/W的散热器，并确保良好的热接触。强制风冷可进一步降低结温。",
          "decisionGuide": "大电流应用必须加装散热器，建议热阻<2°C/W。",
          "keywords": ["GBJ2510", "散热", "热阻"]
        }
      ],
      "faeReview": {
        "author": "赵工程师 - 大功率电源",
        "content": "GBJ2510是我们大功率电源的主力器件。25A电流容量配合良好散热可以稳定工作。与GBJ1510引脚兼容，升级方便。浪涌电流能力出色，能应对各种启动冲击。",
        "highlight": "大电流桥式整流器，25A/1000V规格，与GBJ1510引脚兼容。适合大功率电源、电机驱动等应用。注意散热设计。"
      },
      "alternativeParts": [
        {
          "partNumber": "GBJ3510",
          "brand": "Changdian",
          "specifications": {
            "Forward Current": "35A",
            "Reverse Voltage": "1000V"
          },
          "comparison": "GBJ2510=><GBJ3510: Output current 35A > 25A (+40%), suitable for direct replacement",
          "reason": "更大电流容量",
          "useCase": "超大电流应用",
          "link": "/changdian/products/rectifiers/gbj3510.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "GBJ1510",
          "description": "15A版本",
          "link": "/changdian/products/rectifiers/gbj1510.html",
          "category": "整流器"
        }
      ],
      "slug": "gbj2510"
    }
  ]
};

// Add MOSFETs category
const mosfetsCategory = {
  "id": "mosfets",
  "name": "MOSFET",
  "slug": "mosfets",
  "description": "N沟道MOSFET、P沟道MOSFET、功率MOSFET",
  "longDescription": "长电科技MOSFET产品线涵盖N沟道、P沟道功率MOSFET，广泛应用于开关电源、电机驱动、电源管理等领域。产品具有低导通电阻、快速开关、高可靠性等特点。",
  "series": [
    {
      "name": "IRF系列",
      "description": "标准功率MOSFET，TO-220/TO-247封装",
      "features": ["标准封装", "易于替换", "广泛应用"]
    },
    {
      "name": "STP系列",
      "description": "低导通电阻MOSFET",
      "features": ["低RDS(on)", "高效率", "低损耗"]
    }
  ],
  "selectionGuide": {
    "title": "MOSFET选型指南",
    "content": "选择MOSFET时需要考虑：电压额定值（VDS）应大于实际工作电压的1.2-1.5倍；导通电阻（RDS(on)）影响导通损耗；栅极电荷（Qg）影响开关速度和驱动功率。",
    "articleLink": "/changdian/support/mosfet-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/changdian/support/mosfet-selection-guide.html",
    "text": "查看MOSFET选型指南"
  },
  "faqs": [
    {
      "question": "N沟道和P沟道MOSFET有什么区别？",
      "answer": "N沟道MOSFET的载流子是电子，迁移率高，导通电阻低，成本低，是最常用的类型。P沟道MOSFET的载流子是空穴，迁移率低，导通电阻高，成本高，但易于实现高边开关。",
      "decisionGuide": "一般应用选N沟道；高边开关应用可选P沟道。",
      "keywords": ["N沟道", "P沟道", "MOSFET选型"]
    },
    {
      "question": "MOSFET的导通电阻RDS(on)对效率有什么影响？",
      "answer": "导通损耗P = I² × RDS(on)。RDS(on)越小，导通损耗越低，效率越高。但RDS(on)小的MOSFET通常栅极电荷Qg大，开关损耗增加。需要权衡导通损耗和开关损耗。",
      "decisionGuide": "高频应用选低Qg；大电流应用选低RDS(on)。",
      "keywords": ["RDS(on)", "导通电阻", "效率"]
    }
  ],
  "products": [
    {
      "partNumber": "IRF540N",
      "name": "N沟道功率MOSFET 33A 100V",
      "shortDescription": "IRF540N是N沟道功率MOSFET，额定电流33A，耐压100V，导通电阻44mΩ，采用TO-220封装，广泛应用于开关电源和电机驱动。",
      "descriptionParagraphs": [
        "IRF540N是100V N沟道功率MOSFET，连续漏极电流33A，导通电阻44mΩ。",
        "采用TO-220封装，具有良好的散热性能和机械强度。",
        "适合开关电源、电机驱动、DC-DC变换器等应用。"
      ],
      "category": "MOSFET",
      "series": "IRF",
      "specifications": {
        "Type": "N-Channel",
        "VDS": "100V",
        "ID": "33A",
        "RDS(on)": "44mΩ",
        "Qg": "72nC",
        "Package": "TO-220",
        "Operating Temperature": "-55°C to +175°C"
      },
      "features": [
        "100V耐压",
        "33A大电流",
        "44mΩ低导通电阻",
        "TO-220标准封装",
        "低栅极电荷",
        "快速开关"
      ],
      "applications": [
        "开关电源",
        "电机驱动",
        "DC-DC变换器",
        "逆变器",
        "电源管理"
      ],
      "datasheet": "/datasheets/IRF540N.pdf",
      "stock": "In Stock",
      "moq": 100,
      "leadTime": "2-4 weeks",
      "faqs": [
        {
          "question": "IRF540N的栅极驱动电压是多少？",
          "answer": "IRF540N是标准栅极MOSFET，推荐栅极驱动电压10-12V。在5V驱动下RDS(on)会显著增加。逻辑电平MOSFET（如IRL540N）可在4.5V驱动。",
          "decisionGuide": "10-12V驱动选IRF540N；5V驱动选逻辑电平MOSFET。",
          "keywords": ["IRF540N", "栅极驱动", "逻辑电平"]
        },
        {
          "question": "IRF540N和IRF640N有什么区别？",
          "answer": "IRF540N：100V/33A/44mΩ；IRF640N：200V/18A/180mΩ。IRF640N耐压更高但电流和导通性能较差。根据电压需求选择。",
          "decisionGuide": "100V以下选IRF540N；100-200V选IRF640N。",
          "keywords": ["IRF540N", "IRF640N", "对比"]
        }
      ],
      "faeReview": {
        "author": "周工程师 - 电源设计",
        "content": "IRF540N是我们常用的功率MOSFET。100V/33A规格适合多数中功率应用，44mΩ导通电阻提供良好效率。TO-220封装便于安装散热器。栅极电荷适中，开关速度良好。",
        "highlight": "标准功率MOSFET，100V/33A/44mΩ，TO-220封装。适合开关电源、电机驱动等应用。需要10V栅极驱动。"
      },
      "alternativeParts": [
        {
          "partNumber": "IRF640N",
          "brand": "Changdian",
          "specifications": {
            "VDS": "200V",
            "ID": "18A"
          },
          "comparison": "IRF540N=><IRF640N: Higher voltage 200V vs 100V, lower current 18A vs 33A",
          "reason": "更高耐压",
          "useCase": "高压应用",
          "link": "/changdian/products/mosfets/irf640n.html"
        },
        {
          "partNumber": "IRF3205",
          "brand": "Changdian",
          "specifications": {
            "VDS": "55V",
            "ID": "110A"
          },
          "comparison": "IRF540N=><IRF3205: Lower voltage 55V vs 100V, higher current 110A vs 33A, lower RDS(on) 8mΩ vs 44mΩ",
          "reason": "更大电流更低导通电阻",
          "useCase": "大电流低压应用",
          "link": "/changdian/products/mosfets/irf3205.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "IRF9540N",
          "description": "P沟道配对",
          "link": "/changdian/products/mosfets/irf9540n.html",
          "category": "MOSFET"
        }
      ],
      "slug": "irf540n"
    },
    {
      "partNumber": "IRF3205",
      "name": "N沟道功率MOSFET 110A 55V",
      "shortDescription": "IRF3205是大电流N沟道功率MOSFET，额定电流110A，耐压55V，导通电阻仅8mΩ，采用TO-220封装，适用于大电流应用。",
      "descriptionParagraphs": [
        "IRF3205是55V大电流N沟道功率MOSFET，连续漏极电流110A，导通电阻仅8mΩ。",
        "采用TO-220封装，适合大电流应用如电机驱动、电池管理系统等。",
        "超低导通电阻提供极高效率，是大电流应用的理想选择。"
      ],
      "category": "MOSFET",
      "series": "IRF",
      "specifications": {
        "Type": "N-Channel",
        "VDS": "55V",
        "ID": "110A",
        "RDS(on)": "8mΩ",
        "Qg": "146nC",
        "Package": "TO-220",
        "Operating Temperature": "-55°C to +175°C"
      },
      "features": [
        "55V耐压",
        "110A超大电流",
        "8mΩ超低导通电阻",
        "TO-220封装",
        "高效率",
        "大电流应用优化"
      ],
      "applications": [
        "电机驱动",
        "电池管理系统",
        "大电流开关电源",
        "逆变器",
        "汽车电子"
      ],
      "datasheet": "/datasheets/IRF3205.pdf",
      "stock": "In Stock",
      "moq": 100,
      "leadTime": "2-4 weeks",
      "faqs": [
        {
          "question": "IRF3205可以用于12V系统吗？",
          "answer": "IRF3205的55V耐压对12V系统绰绰有余。8mΩ导通电阻在100A时仅0.8V压降，效率极高。是12V大电流应用（如汽车电子、电池管理）的理想选择。",
          "decisionGuide": "12V大电流应用首选IRF3205。",
          "keywords": ["IRF3205", "12V系统", "大电流"]
        },
        {
          "question": "IRF3205的栅极电荷大吗？",
          "answer": "IRF3205的Qg=146nC，比IRF540N（72nC）大。这是低RDS(on)的代价。高频应用（>100kHz）需要更强的栅极驱动能力。低频大电流应用性能出色。",
          "decisionGuide": "低频大电流应用选IRF3205；高频应用选低Qg器件。",
          "keywords": ["IRF3205", "栅极电荷", "Qg"]
        }
      ],
      "faeReview": {
        "author": "吴工程师 - 电机驱动",
        "content": "IRF3205是我们电机驱动设计中的主力器件。110A电流容量和8mΩ导通电阻提供极高效率。适合大电流电机控制、电池管理系统。栅极电荷较大，需要较强的驱动能力。",
        "highlight": "大电流功率MOSFET，110A/55V/8mΩ，超低导通电阻。适合电机驱动、电池管理等大电流应用。注意栅极驱动能力。"
      },
      "alternativeParts": [
        {
          "partNumber": "IRF540N",
          "brand": "Changdian",
          "specifications": {
            "VDS": "100V",
            "ID": "33A"
          },
          "comparison": "IRF3205=><IRF540N: Higher voltage 100V vs 55V, lower current 33A vs 110A, higher RDS(on) 44mΩ vs 8mΩ",
          "reason": "更高耐压",
          "useCase": "高压应用",
          "link": "/changdian/products/mosfets/irf540n.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "IRF1405",
          "description": "169A更大电流版本",
          "link": "/changdian/products/mosfets/irf1405.html",
          "category": "MOSFET"
        }
      ],
      "slug": "irf3205"
    }
  ]
};

// Add categories to products data
productsData.categories.push(rectifiersCategory);
productsData.categories.push(mosfetsCategory);

// Save updated products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log('✅ Added Rectifiers and MOSFETs categories with products');
console.log(`  - Rectifiers: ${rectifiersCategory.products.length} products`);
console.log(`  - MOSFETs: ${mosfetsCategory.products.length} products`);
console.log(`  - Total categories: ${productsData.categories.length}`);
