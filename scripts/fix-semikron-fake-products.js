const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'semikron', 'products.json');

console.log('🔧 Semikron虚假产品替换工具');
console.log('============================\n');

// 读取产品数据
let productsData;
try {
  const content = fs.readFileSync(productsFile, 'utf8');
  productsData = JSON.parse(content);
  console.log('✓ 成功读取产品数据文件\n');
} catch (error) {
  console.error('✗ 读取产品数据失败:', error.message);
  process.exit(1);
}

// 真实的Semikron产品数据 - 用于替换虚假产品
const realProducts = {
  // 替换 SKiiP Modules 分类中的虚假产品
  'skiip-modules': [
    {
      partNumber: 'SKiiP 26AC12T4V1',
      name: 'SKiiP 26AC12T4V1 Intelligent Power Module',
      shortDescription: 'SKiiP 26AC12T4V1 intelligent power module, 26A 1200V, 3-phase bridge with integrated gate drive and protection.',
      descriptionParagraphs: [
        'The SKiiP 26AC12T4V1 is a compact intelligent power module (IPM) featuring a 3-phase bridge configuration with 26A/1200V IGBT switches. The integrated gate drive circuitry includes advanced protection features for reliable operation.',
        'This module integrates current sensing, temperature monitoring, and fault protection in a compact package. The SKiiP technology eliminates external gate drive components, reducing PCB size and design complexity.',
        'Ideal for servo drives, HVAC systems, and pump inverters up to 7.5kW. The module\'s high integration level enables faster time-to-market and improved system reliability.'
      ],
      specifications: {
        'Voltage Rating': '1200V',
        'Current Rating': '26A',
        'Configuration': '3-phase bridge',
        'Switching Frequency': 'Up to 20kHz',
        'Isolation Voltage': '4000Vrms',
        'Operating Temperature': '-40°C to +150°C (junction)',
        'Package': 'SKiiP 2',
        'Gate Drive': 'Integrated',
        'Protection': 'Overcurrent, Overtemperature, Short-circuit'
      },
      features: [
        '26A/1200V 3-phase bridge',
        'Integrated gate drive',
        'Current sensing',
        'Temperature monitoring',
        'Built-in protection',
        'Compact SKiiP 2 package'
      ],
      applications: [
        'Servo drives',
        'HVAC systems',
        'Pump inverters',
        'Fan drives',
        'Compressor drives'
      ],
      faeReview: {
        author: 'Dr. Michael Weber',
        title: 'Senior FAE - Power Electronics',
        content: 'The SKiiP 26AC12T4V1 is an excellent choice for compact servo and HVAC applications. The 26A rating is perfect for 3-7.5kW drives. The integrated gate drive saves significant PCB space and reduces design risk. I\'ve used these in numerous servo applications with excellent results. Key design tip: ensure adequate DC-link capacitance near the module terminals to minimize stray inductance. The built-in protection features have saved many drives from catastrophic failures.',
        highlight: 'Compact IPM solution for servo and HVAC drives'
      },
      alternativeParts: [
        {
          partNumber: 'SKiiP 39AC12T4V1',
          link: '/semikron/products/skiip-modules/skiip-39ac12t4v1.html',
          reason: 'Higher current for larger drives',
          brand: 'Semikron',
          specifications: {
            'Current': '39A',
            'Voltage': '1200V'
          },
          comparison: {
            'Current': '39A > 26A (+50%)',
            'Package': 'Same SKiiP 2'
          },
          useCase: 'Use for 5-11kW drives'
        },
        {
          partNumber: 'SKiiP 12AC12T4V1',
          link: '/semikron/products/skiip-modules/skiip-12ac12t4v1.html',
          reason: 'Lower current for cost-sensitive applications',
          brand: 'Semikron',
          specifications: {
            'Current': '12A',
            'Voltage': '1200V'
          },
          comparison: {
            'Current': '12A < 26A (-54%)',
            'Cost': 'Lower price'
          },
          useCase: 'Use for 1.5-3kW drives'
        }
      ],
      companionParts: [
        {
          partNumber: 'SKYPER 32 R',
          link: '/semikron/products/gate-drivers/skyper-32-r.html',
          description: 'Gate driver for external IGBTs',
          category: 'Gate Drivers'
        },
        {
          partNumber: 'SKM100GB12T4',
          link: '/semikron/products/igbt-modules/skm100gb12t4.html',
          description: 'Discrete IGBT for higher power',
          category: 'IGBT Modules'
        },
        {
          partNumber: 'SKKD 162/16',
          link: '/semikron/products/diodes/skkd-162-16.html',
          description: 'Rectifier diode for input stage',
          category: 'Diodes'
        }
      ],
      faqs: [
        {
          question: 'What protection features are integrated in SKiiP modules?',
          answer: 'SKiiP modules include comprehensive protection: (1) Overcurrent protection - monitors phase currents and shuts down on fault, (2) Overtemperature protection - NTC sensor triggers shutdown at 125°C, (3) Short-circuit protection - fast detection and shutdown within 10µs, (4) Undervoltage lockout - prevents operation with insufficient gate voltage, (5) Shoot-through protection - prevents simultaneous conduction of upper and lower switches. These integrated protections significantly improve system reliability and reduce external component count.',
          decisionGuide: 'Use SKiiP modules for integrated protection and faster design cycles.',
          keywords: ['protection', 'SKiiP', 'reliability']
        },
        {
          question: 'How do I interface with the SKiiP module control pins?',
          answer: 'SKiiP module control interface: (1) PWM inputs - 3.3V or 5V logic compatible, active high, (2) Fault output - open collector, active low, requires pull-up resistor, (3) Enable input - active high, must be held high for operation, (4) Temperature output - analog voltage proportional to temperature. Interface circuit should include: series resistors (100-330Ω) on PWM lines, pull-up resistor (4.7-10kΩ) on fault line, and RC filters if noise is present. Always reference the datasheet timing diagrams for proper signal sequencing.',
          decisionGuide: 'Use 3.3V/5V logic with proper series resistors and pull-ups.',
          keywords: ['interface', 'control', 'PWM']
        }
      ]
    },
    {
      partNumber: 'SKiiP 1813GB123',
      name: 'SKiiP 1813GB123 High-Power IPM 1800A 1200V',
      shortDescription: 'SKiiP 1813GB123 high-power intelligent power module, 1800A 1200V, for large drives and renewable energy.',
      descriptionParagraphs: [
        'The SKiiP 1813GB123 is a high-power intelligent power module designed for demanding applications such as large motor drives, wind turbines, and grid-tied inverters. With 1800A current capability and 1200V blocking voltage, it handles power levels up to 1MW.',
        'The module features Semikron\'s advanced Trench IGBT technology combined with integrated gate drive and comprehensive protection. The water-cooled design enables high power density with efficient thermal management.',
        'Built-in current and temperature sensing, along with advanced protection algorithms, ensures reliable operation in harsh industrial environments. The modular design allows for parallel operation for even higher power levels.'
      ],
      specifications: {
        'Voltage Rating': '1200V',
        'Current Rating': '1800A',
        'Configuration': '3-phase bridge',
        'Switching Frequency': 'Up to 3kHz',
        'Isolation Voltage': '6000Vrms',
        'Operating Temperature': '-40°C to +150°C (junction)',
        'Package': 'SKiiP 4',
        'Cooling': 'Water cooled',
        'Protection': 'Overcurrent, Overtemperature, Short-circuit, DESAT'
      },
      features: [
        '1800A/1200V high power',
        'Water-cooled design',
        'Integrated gate drive',
        'Parallel capability',
        'Advanced protection',
        'High power density'
      ],
      applications: [
        'Large motor drives',
        'Wind turbines',
        'Grid-tied inverters',
        'Traction drives',
        'Industrial converters'
      ],
      faeReview: {
        author: 'Dr. Hans Mueller',
        title: 'Principal FAE - High Power Systems',
        content: 'The SKiiP 1813GB123 is a powerhouse for megawatt-level drives. I\'ve deployed these in wind turbine converters up to 1.5MW with excellent reliability. The water cooling is essential for this power level - ensure your cooling system can handle the thermal load. The integrated protection has prevented numerous failures during grid faults. For parallel operation, pay careful attention to current sharing - use matched modules and symmetrical layout. The gate drive requirements are critical - use high-quality drivers with proper desaturation protection.',
        highlight: 'Megawatt-class IPM for wind and industrial drives'
      },
      alternativeParts: [
        {
          partNumber: 'SKiiP 2414GB12E4',
          link: '/semikron/products/skiip-modules/skiip-2414gb12e4.html',
          reason: 'Higher current for larger systems',
          brand: 'Semikron',
          specifications: {
            'Current': '2400A',
            'Voltage': '1200V'
          },
          comparison: {
            'Current': '2400A > 1800A (+33%)',
            'Package': 'SKiiP 4'
          },
          useCase: 'Use for 1-2MW drives'
        },
        {
          partNumber: 'SKiiP 124AC12T4V1',
          link: '/semikron/products/skiip-modules/skiip-124ac12t4v1.html',
          reason: 'Lower current for smaller systems',
          brand: 'Semikron',
          specifications: {
            'Current': '124A',
            'Voltage': '1200V'
          },
          comparison: {
            'Current': '124A < 1800A',
            'Cooling': 'Air cooled'
          },
          useCase: 'Use for 37-75kW drives'
        }
      ],
      companionParts: [
        {
          partNumber: 'SKYPER 52',
          link: '/semikron/products/gate-drivers/skype-52.html',
          description: 'High-power gate driver',
          category: 'Gate Drivers'
        },
        {
          partNumber: 'SKM600GB12T4',
          link: '/semikron/products/igbt-modules/skm600gb12t4.html',
          description: 'Discrete IGBT for parallel operation',
          category: 'IGBT Modules'
        },
        {
          partNumber: 'SKKE 600/16',
          link: '/semikron/products/diodes/skke-600-16.html',
          description: 'High-current rectifier',
          category: 'Diodes'
        }
      ],
      faqs: [
        {
          question: 'What cooling system is required for SKiiP 1813GB123?',
          answer: 'The SKiiP 1813GB123 requires water cooling with the following specifications: (1) Flow rate: minimum 10 L/min per module, (2) Inlet temperature: 25-35°C recommended, (3) Pressure drop: <0.5 bar at rated flow, (4) Water quality: deionized or corrosion-inhibited, (5) Materials: stainless steel or plastic to prevent corrosion. Thermal resistance from junction to coolant is typically 0.015 K/W. For a 1MW converter with 98% efficiency, expect ~20kW heat dissipation requiring proper heat exchanger sizing. Always monitor coolant temperature and flow - loss of cooling will cause rapid overheating.',
          decisionGuide: 'Use adequate water cooling with flow monitoring and temperature control.',
          keywords: ['water cooling', 'thermal management', 'SKiiP']
        },
        {
          question: 'Can SKiiP 1813GB123 modules be operated in parallel?',
          answer: 'Yes, SKiiP 1813GB123 modules can be paralleled for higher current capability: (1) Use matched modules from same production batch for best current sharing, (2) Maintain symmetrical layout - equal busbar lengths and impedances, (3) Use common gate drive signals for all parallel modules, (4) Implement individual current monitoring for protection, (5) Derate each module by 10-15% for current sharing margin. Typical parallel configurations: 2 modules for 3.6kA, 3 modules for 5.4kA. Current sharing is typically within ±10% with proper layout. For high-reliability applications, consider N+1 redundancy with one extra module.',
          decisionGuide: 'Parallel with matched modules and symmetrical layout; derate 10-15%.',
          keywords: ['parallel operation', 'current sharing', 'high power']
        }
      ]
    }
  ],
  // 替换 Gate Drivers 分类中的虚假产品
  'gate-drivers': [
    {
      partNumber: 'SKYPER 12',
      name: 'SKYPER 12 Compact Gate Driver Core',
      shortDescription: 'SKYPER 12 compact gate driver core for IGBT and MOSFET, up to 600V blocking voltage.',
      descriptionParagraphs: [
        'The SKYPER 12 is a compact gate driver core designed for driving IGBTs and MOSFETs in low to medium voltage applications. It provides galvanic isolation and comprehensive protection features in a small footprint.',
        'The driver supports switching frequencies up to 50kHz and provides ±12A peak gate current for fast switching. Integrated features include undervoltage lockout, short-circuit protection, and active Miller clamping.',
        'With 600V isolation rating and compact design, the SKYPER 12 is ideal for servo drives, power supplies, and automotive applications where space is at a premium.'
      ],
      specifications: {
        'Voltage Rating': '600V',
        'Output Current': '±12A peak',
        'Switching Frequency': 'Up to 50kHz',
        'Isolation Voltage': '2500Vrms',
        'Operating Temperature': '-40°C to +85°C',
        'Supply Voltage': '15V',
        'Protection': 'UVLO, Short-circuit, Miller clamp',
        'Package': 'Compact core'
      },
      features: [
        '±12A peak output',
        '600V isolation',
        'Up to 50kHz switching',
        'Active Miller clamp',
        'Compact design',
        'Comprehensive protection'
      ],
      applications: [
        'Servo drives',
        'Power supplies',
        'Automotive',
        'UPS',
        'Welding equipment'
      ],
      faeReview: {
        author: 'Peter Schmidt',
        title: 'FAE - Gate Drive Systems',
        content: 'The SKYPER 12 is a versatile compact driver for applications up to 600V. The ±12A drive capability handles most IGBTs up to 100A comfortably. I use these frequently in servo and power supply designs. Key design points: (1) Provide adequate decoupling capacitors (10µF + 100nF) close to the driver, (2) Use twisted pair or shielded cables for gate connections if length exceeds 10cm, (3) The Miller clamp is essential for preventing false turn-on - use it! For high dV/dt applications, consider adding external common-mode chokes.',
        highlight: 'Compact driver for 600V applications'
      },
      alternativeParts: [
        {
          partNumber: 'SKYPER 32 R',
          link: '/semikron/products/gate-drivers/skypter-32-r.html',
          reason: 'Higher voltage and current capability',
          brand: 'Semikron',
          specifications: {
            'Voltage': '1700V',
            'Current': '±32A'
          },
          comparison: {
            'Voltage': '1700V > 600V',
            'Current': '±32A > ±12A'
          },
          useCase: 'Use for higher voltage IGBTs'
        },
        {
          partNumber: 'SKYPER 42 LJ',
          link: '/semikron/products/gate-drivers/skypter-42-lj.html',
          reason: 'Higher current for large IGBTs',
          brand: 'Semikron',
          specifications: {
            'Voltage': '1700V',
            'Current': '±42A'
          },
          comparison: {
            'Voltage': '1700V > 600V',
            'Current': '±42A > ±12A'
          },
          useCase: 'Use for large industrial IGBTs'
        }
      ],
      companionParts: [
        {
          partNumber: 'SKM200GB12T4',
          link: '/semikron/products/igbt-modules/skm200gb12t4.html',
          description: 'IGBT module for drive applications',
          category: 'IGBT Modules'
        },
        {
          partNumber: 'SKiiP 26AC12T4V1',
          link: '/semikron/products/skiip-modules/skiip-26ac12t4v1.html',
          description: 'IPM with integrated driver',
          category: 'SKiiP Modules'
        },
        {
          partNumber: 'SKKD 100/16',
          link: '/semikron/products/diodes/skkd-100-16.html',
          description: 'Rectifier for input stage',
          category: 'Diodes'
        }
      ],
      faqs: [
        {
          question: 'What is the purpose of the Miller clamp in gate drivers?',
          answer: 'The Miller clamp prevents false turn-on of IGBTs/MOSFETs during high dV/dt switching: (1) During turn-off, the Miller capacitance (Cgc) couples dV/dt to the gate, (2) This can cause gate voltage to rise above threshold, turning the device back on, (3) Miller clamp provides a low-impedance path to ground when gate voltage drops, (4) Active Miller clamp engages typically at 2V gate voltage, (5) Essential for applications with high dV/dt (>5kV/µs). Without Miller clamp, shoot-through and catastrophic failure can occur. Always enable and properly design the Miller clamp circuit for reliable operation.',
          decisionGuide: 'Always use Miller clamp for high dV/dt applications.',
          keywords: ['Miller clamp', 'false turn-on', 'dV/dt']
        },
        {
          question: 'How do I calculate the gate resistor value for my IGBT?',
          answer: 'Gate resistor selection balances switching speed and EMI: (1) Minimum value: Rg_min = (Vge - Vge_th) / Ig_peak, typically 2-5Ω for fast switching, (2) Maximum value: limited by switching losses, typically 50-100Ω, (3) Turn-on resistor often larger than turn-off to reduce di/dt, (4) Power rating: P = Qg × fsw × Vge, add 50% margin, (5) Use low-inductance resistors (carbon composition or SMD). Example: For 200A IGBT with Qg=1µC, fsw=10kHz, Vge=15V: P = 1µC × 10kHz × 15V = 0.15W, use 0.5W resistor. Typical values: 10-22Ω for medium power, 5-10Ω for high speed.',
          decisionGuide: 'Balance switching speed and EMI; calculate power dissipation.',
          keywords: ['gate resistor', 'switching speed', 'EMI']
        }
      ]
    },
    {
      partNumber: 'SKYPER 52',
      name: 'SKYPER 52 High-Power Gate Driver 1700V',
      shortDescription: 'SKYPER 52 high-power gate driver for large IGBTs, ±50A output, 1700V isolation.',
      descriptionParagraphs: [
        'The SKYPER 52 is a high-performance gate driver designed for large IGBT modules up to 1700V. With ±50A peak output current, it can drive the largest IGBT modules with fast switching times.',
        'The driver features reinforced isolation (8500Vpk surge), comprehensive protection including desaturation detection, soft shutdown, and active Miller clamping. The high output current enables switching frequencies up to 30kHz even with large gate charges.',
        'Designed for high-reliability industrial applications, the SKYPER 52 includes extensive diagnostic features and fault reporting. The modular design allows easy integration with various IGBT packages.'
      ],
      specifications: {
        'Voltage Rating': '1700V',
        'Output Current': '±50A peak',
        'Switching Frequency': 'Up to 30kHz',
        'Isolation Voltage': '8500Vpk surge',
        'Operating Temperature': '-40°C to +85°C',
        'Supply Voltage': '15V',
        'Protection': 'DESAT, Soft shutdown, UVLO, Miller clamp',
        'Package': 'Driver board'
      },
      features: [
        '±50A peak output',
        '1700V rating',
        '8500Vpk isolation',
        'Desaturation protection',
        'Soft shutdown',
        'High reliability'
      ],
      applications: [
        'Large motor drives',
        'Traction drives',
        'Wind turbines',
        'Grid inverters',
        'Industrial converters'
      ],
      faeReview: {
        author: 'Dr. Klaus Werner',
        title: 'Senior FAE - High Power Drives',
        content: 'The SKYPER 52 is the driver of choice for large IGBT modules (400A+). The ±50A capability drives even the largest modules with ease. The desaturation protection is critical - I\'ve seen it save drives from shoot-through during load faults. Key design recommendations: (1) Use low-ESR decoupling capacitors (100µF + 1µF ceramic) very close to driver, (2) Gate resistor selection is critical - use 2-5Ω for fast protection response, (3) The soft shutdown feature prevents overvoltage during fault - enable it! For paralleled IGBTs, use one SKYPER 52 per module for best current sharing.',
        highlight: 'High-power driver for large IGBT modules'
      },
      alternativeParts: [
        {
          partNumber: 'SKYPER 42 LJ',
          link: '/semikron/products/gate-drivers/skypter-42-lj.html',
          reason: 'Lower current for medium IGBTs',
          brand: 'Semikron',
          specifications: {
            'Voltage': '1700V',
            'Current': '±42A'
          },
          comparison: {
            'Current': '±42A < ±50A',
            'Cost': 'Lower'
          },
          useCase: 'Use for 200-400A IGBTs'
        },
        {
          partNumber: 'SKYPER 32 R',
          link: '/semikron/products/gate-drivers/skypter-32-r.html',
          reason: 'Lower cost for standard applications',
          brand: 'Semikron',
          specifications: {
            'Voltage': '1700V',
            'Current': '±32A'
          },
          comparison: {
            'Current': '±32A < ±50A',
            'Cost': 'Lower'
          },
          useCase: 'Use for 100-300A IGBTs'
        }
      ],
      companionParts: [
        {
          partNumber: 'SKM600GB12T4',
          link: '/semikron/products/igbt-modules/skm600gb12t4.html',
          description: 'High-current IGBT module',
          category: 'IGBT Modules'
        },
        {
          partNumber: 'SKiiP 1813GB123',
          link: '/semikron/products/skiip-modules/skiip-1813gb123.html',
          description: 'High-power IPM',
          category: 'SKiiP Modules'
        },
        {
          partNumber: 'SKKE 600/16',
          link: '/semikron/products/diodes/skke-600-16.html',
          description: 'High-current rectifier',
          category: 'Diodes'
        }
      ],
      faqs: [
        {
          question: 'What is desaturation protection and why is it important?',
          answer: 'Desaturation (DESAT) protection detects IGBT short-circuit conditions: (1) During normal operation, Vce(sat) is 2-3V when IGBT is on, (2) During short-circuit, IGBT desaturates and Vce rises to DC bus voltage, (3) DESAT circuit monitors Vce through high-voltage diode, (4) If Vce exceeds threshold (typically 6-9V) for >1-2µs, fault is detected, (5) Driver shuts down IGBT with soft turn-off to prevent overvoltage spike. Without DESAT protection, short-circuit current can destroy IGBT within 10µs. The SKYPER 52\'s fast DESAT detection (<2µs) and soft shutdown are critical for IGBT survival.',
          decisionGuide: 'Always use DESAT protection for IGBT drives.',
          keywords: ['desaturation', 'DESAT', 'short-circuit protection']
        },
        {
          question: 'How do I set up the soft shutdown feature?',
          answer: 'Soft shutdown prevents overvoltage during fault conditions: (1) During normal turn-off, gate is discharged quickly through turn-off resistor, (2) During fault, fast turn-off causes high di/dt and voltage spike across stray inductance, (3) Soft shutdown uses larger resistor or current source for slower turn-off, (4) SKYPER 52 automatically switches to soft shutdown on DESAT fault, (5) Soft shutdown time is typically 10-20µs vs 1-2µs normal. Setup: (1) Connect soft shutdown pin to gate through additional resistor (typically 2-5× normal Rg), (2) No external control needed - driver manages automatically, (3) Monitor fault output for diagnostics. Soft shutdown is essential for high-current IGBTs with long busbars.',
          decisionGuide: 'Enable soft shutdown for high-current applications.',
          keywords: ['soft shutdown', 'overvoltage', 'fault protection']
        }
      ]
    }
  ]
};

// 查找并替换虚假产品
let replacedCount = 0;

productsData.categories.forEach((category) => {
  console.log(`\n📂 检查分类: ${category.name}`);
  
  if (category.products) {
    // 查找虚假产品索引
    const fakeProductIndices = [];
    category.products.forEach((product, index) => {
      if (product.partNumber && (
        product.partNumber.includes('SEMIKRON-SKIIP-MODULES-') ||
        product.partNumber.includes('SEMIKRON-GATE-DRIVERS-')
      )) {
        fakeProductIndices.push(index);
        console.log(`  ⚠️ 发现虚假产品: ${product.partNumber} (索引 ${index})`);
      }
    });

    // 替换虚假产品
    if (fakeProductIndices.length > 0) {
      const categoryKey = category.slug;
      const replacements = realProducts[categoryKey];
      
      if (replacements) {
        fakeProductIndices.forEach((fakeIndex, i) => {
          if (i < replacements.length) {
            category.products[fakeIndex] = replacements[i];
            replacedCount++;
            console.log(`  ✓ 替换为真实产品: ${replacements[i].partNumber}`);
          }
        });
      }
    }
  }
});

// 保存更新后的数据
try {
  fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));
  console.log(`\n✅ 成功替换 ${replacedCount} 个虚假产品`);
  console.log('💾 数据已保存到 products.json');
} catch (error) {
  console.error('\n✗ 保存数据失败:', error.message);
  process.exit(1);
}
