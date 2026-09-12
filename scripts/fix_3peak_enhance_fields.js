const fs = require('fs');
const path = require('path');

const brand = '3peak';
const dataDir = path.join(__dirname, '..', 'data', brand);

console.log(`========================================`);
console.log(`🔧 修复品牌: ${brand} - 增强字段内容`);
console.log(`========================================\n`);

// 读取products.json
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 需要增强字段的产品
const fieldsToEnhance = {
  'TP1581': {
    alternativeParts: [
      {
        partNumber: "TP1561",
        manufacturer: "3peak",
        comparison: "TP1581=><TP1561: Noise: 10nV/√Hz < 25nV/√Hz (TP1581 lower noise), Offset: 20μV < 50μV (TP1581 better), Use case: TP1581 for ultra-low noise, TP1561 for general precision",
        reason: "Lower noise alternative for less demanding applications",
        useCase: "Cost-sensitive precision applications"
      },
      {
        partNumber: "LM321",
        manufacturer: "TI",
        comparison: "TP1581=><LM321: TP1581 has lower noise and better precision, LM321 is more cost-effective for basic applications",
        reason: "Industry standard low-power op-amp",
        useCase: "General purpose amplification"
      }
    ],
    companionParts: [
      {
        partNumber: "TPC1610",
        relationship: "16-bit ADC for digitizing low-noise signals",
        notes: "Complete low-noise signal chain"
      },
      {
        partNumber: "TPR1025",
        relationship: "Precision voltage reference for sensor excitation",
        notes: "Use with TP1581 for complete sensor interface"
      },
      {
        partNumber: "TPC5173",
        relationship: "High-precision ADC for data acquisition",
        notes: "Ideal for precision measurement systems"
      }
    ],
    faqs: [
      {
        question: "What makes TP1581 different from TP1561?",
        answer: "The TP1581 is optimized for ultra-low noise performance with 10nV/√Hz noise density compared to 25nV/√Hz for TP1561. It also has better offset voltage (20μV vs 50μV) and wider bandwidth (5MHz vs 2.5MHz). However, it consumes more power (800μA vs 450μA) and costs more. Choose TP1581 for high-sensitivity applications, TP1561 for general precision.",
        decisionGuide: "TP1581 for ultra-low noise requirements, TP1561 for general precision applications.",
        keywords: ["low noise", "TP1581 vs TP1561", "noise density", "precision"]
      },
      {
        question: "What is the noise performance of TP1581?",
        answer: "The TP1581 features exceptional noise performance with 10nV/√Hz voltage noise density at 1kHz, 0.1Hz to 10Hz peak-to-peak noise of 0.5μV, and current noise of 0.5pA/√Hz. This makes it ideal for high-sensitivity sensor applications where signal integrity is critical.",
        decisionGuide: "10nV/√Hz noise density is excellent for precision applications. Consider chopper amps for even lower offset.",
        keywords: ["noise density", "voltage noise", "current noise", "low noise"]
      },
      {
        question: "What is the bandwidth and slew rate?",
        answer: "The TP1581 offers 5MHz gain bandwidth product and 2.5V/μs slew rate. This provides good AC performance for a precision amplifier, allowing it to handle signals up to several hundred kHz with good fidelity. The slew rate ensures fast settling for step inputs.",
        decisionGuide: "5MHz bandwidth is suitable for most sensor and audio applications. Use TP167x series for higher bandwidth needs.",
        keywords: ["bandwidth", "slew rate", "GBW", "frequency response"]
      },
      {
        question: "How do I minimize noise in my circuit design?",
        answer: "To minimize noise with TP1581: 1) Use low-value resistors in feedback network (<10kΩ), 2) Add bypass capacitors (0.1μF + 10μF) close to power pins, 3) Keep input traces short and shielded, 4) Use star grounding, 5) Consider guard rings for high-impedance nodes, 6) Maintain clean power supply with adequate filtering.",
        decisionGuide: "Follow best practices for low-noise PCB layout. Minimize resistor values and use proper decoupling.",
        keywords: ["noise reduction", "PCB layout", "decoupling", "shielding"]
      },
      {
        question: "Is TP1581 suitable for photodiode amplification?",
        answer: "Yes, TP1581 is excellent for photodiode transimpedance amplifiers. Its low voltage noise (10nV/√Hz) and low current noise (0.5pA/√Hz) minimize total noise in high-gain configurations. The 5MHz bandwidth supports reasonably fast photodiode applications. Use low capacitance photodiodes and minimize parasitic capacitance for best performance.",
        decisionGuide: "Excellent for photodiode applications. Minimize parasitic capacitance and use appropriate feedback compensation.",
        keywords: ["photodiode", "transimpedance", "TIA", "optical sensor"]
      }
    ]
  },
  'TP1592': {
    alternativeParts: [
      {
        partNumber: "TP1561",
        manufacturer: "3peak",
        comparison: "TP1592=><TP1561: TP1592 has better offset (5μV vs 50μV) and drift (0.01μV/°C vs 0.5μV/°C), but higher noise due to chopper",
        reason: "Lower cost alternative with good precision",
        useCase: "General precision applications"
      },
      {
        partNumber: "MCP6002",
        manufacturer: "Microchip",
        comparison: "TP1592=><MCP6002: TP1592 has much better DC precision, MCP6002 is lower cost and lower power",
        reason: "Popular low-power op-amp alternative",
        useCase: "Battery-powered applications"
      }
    ],
    companionParts: [
      {
        partNumber: "TPC1610",
        relationship: "16-bit ADC for precision data acquisition",
        notes: "Complete precision measurement chain"
      },
      {
        partNumber: "TPR1025",
        relationship: "Precision voltage reference",
        notes: "Stable reference for bridge sensors"
      },
      {
        partNumber: "TPC5121Q",
        relationship: "12-bit ADC for cost-sensitive applications",
        notes: "Good companion for lower resolution systems"
      }
    ],
    faqs: [
      {
        question: "What is chopper stabilization and how does it work?",
        answer: "Chopper stabilization is a technique that eliminates offset voltage and drift by continuously modulating the input signal, amplifying it, then demodulating. TP1592 uses internal chopping at high frequency to achieve 5μV offset and 0.01μV/°C drift. The trade-off is slightly higher noise at the chopping frequency, which is filtered internally.",
        decisionGuide: "Chopper amps are ideal for DC precision. Use conventional amps if noise at chopping frequency is a concern.",
        keywords: ["chopper", "zero drift", "offset cancellation", "auto-zero"]
      },
      {
        question: "What is the difference between TP1592 and TP1561?",
        answer: "TP1592 uses chopper stabilization for ultra-low offset (5μV) and drift (0.01μV/°C), making it ideal for precision DC measurements. TP1561 is a conventional precision op-amp with 50μV offset. TP1592 has slightly higher noise due to chopping. Choose TP1592 for extreme DC precision, TP1561 for lower noise AC applications.",
        decisionGuide: "TP1592 for DC precision, TP1561 for low-noise AC applications.",
        keywords: ["chopper vs conventional", "DC precision", "offset voltage"]
      },
      {
        question: "What are the noise characteristics of TP1592?",
        answer: "TP1592 has 25nV/√Hz broadband noise density and exhibits chopper-induced noise peaks at the chopping frequency (typically tens of kHz). The internal filter reduces these peaks. For DC to 10Hz, the noise is approximately 0.5μV peak-to-peak. Consider external filtering if sensitive to chopping artifacts.",
        decisionGuide: "Good for DC applications. Add external filtering if chopping noise affects your application.",
        keywords: ["chopper noise", "noise density", "low frequency noise"]
      },
      {
        question: "How do I select feedback resistors for best precision?",
        answer: "For best precision with TP1592: 1) Use precision resistors (0.1% or better), 2) Keep resistor values moderate (1kΩ to 100kΩ) to minimize thermal noise and bias current effects, 3) Match resistor temperature coefficients, 4) Use balanced differential configurations when possible, 5) Consider resistor self-heating effects in high-gain circuits.",
        decisionGuide: "Use precision resistors with good TC matching. Keep values moderate for best performance.",
        keywords: ["feedback resistors", "precision resistors", "temperature coefficient"]
      },
      {
        question: "What applications benefit most from TP1592?",
        answer: "TP1592 excels in: 1) Precision weigh scales and load cells, 2) Thermocouple and RTD measurement, 3) Bridge sensor conditioning, 4) Precision current sensing, 5) Battery test equipment, 6) Industrial process control. Any application requiring microvolt-level DC precision over temperature will benefit from TP1592's zero-drift performance.",
        decisionGuide: "Ideal for precision DC measurement applications requiring microvolt accuracy.",
        keywords: ["weigh scale", "load cell", "thermocouple", "bridge sensor"]
      }
    ]
  },
  'TPM8847': {
    alternativeParts: [
      {
        partNumber: "TPM8866",
        manufacturer: "3peak",
        comparison: "TPM8847=><TPM8866: TPM8847 is H-bridge for motor control, TPM8866 is low-side driver array",
        reason: "Different driver architecture for various loads",
        useCase: "Relay and solenoid driving"
      },
      {
        partNumber: "DRV8847",
        manufacturer: "TI",
        comparison: "TPM8847=><DRV8847: Similar dual H-bridge functionality, TPM8847 offers competitive performance",
        reason: "Industry standard motor driver",
        useCase: "Stepper and DC motor control"
      }
    ],
    companionParts: [
      {
        partNumber: "TPM8866",
        relationship: "8-channel low-side driver for additional loads",
        notes: "Comprehensive motor and load control system"
      },
      {
        partNumber: "TPM27517",
        relationship: "Gate driver for external MOSFETs",
        notes: "For higher power motor applications"
      },
      {
        partNumber: "TPP361080",
        relationship: "DC-DC converter for motor supply",
        notes: "Efficient power supply for motor systems"
      }
    ],
    faqs: [
      {
        question: "What types of motors can TPM8847 drive?",
        answer: "TPM8847 can drive: 1) DC brushed motors (bidirectional control), 2) Single bipolar stepper motor, 3) Two unipolar stepper motors, 4) Solenoids and inductive loads. Each H-bridge supports 1.5A continuous and 2.5A peak current. The integrated protection features make it suitable for various motor control applications.",
        decisionGuide: "Versatile driver for DC motors and steppers. Check current requirements against specifications.",
        keywords: ["DC motor", "stepper motor", "H-bridge", "motor types"]
      },
      {
        question: "What protection features does TPM8847 include?",
        answer: "TPM8847 includes comprehensive protection: 1) Overcurrent protection with programmable threshold, 2) Over-temperature shutdown with hysteresis, 3) Under-voltage lockout (UVLO), 4) Shoot-through protection preventing simultaneous high-side and low-side conduction, 5) Short-circuit protection to ground and supply. These features ensure reliable operation and protect the device and motor.",
        decisionGuide: "Comprehensive protection built-in. Still recommend external fuses for catastrophic failure protection.",
        keywords: ["overcurrent protection", "thermal shutdown", "UVLO", "shoot-through"]
      },
      {
        question: "How do I control motor speed with TPM8847?",
        answer: "Motor speed is controlled using PWM (Pulse Width Modulation): 1) Apply PWM to IN1/IN2 inputs for DC motor speed and direction, 2) PWM frequency typically 20-50kHz to avoid audible noise, 3) Duty cycle determines average voltage and speed, 4) Use microcontroller PWM outputs or dedicated motor control ICs, 5) TPM8847 supports up to 100kHz PWM frequency for fine control.",
        decisionGuide: "Use 20-50kHz PWM frequency. Higher frequencies reduce ripple but increase switching losses.",
        keywords: ["PWM control", "speed control", "duty cycle", "motor speed"]
      },
      {
        question: "What is the current sense feature and how do I use it?",
        answer: "TPM8847 integrates current sense resistors and amplifiers for real-time motor current monitoring: 1) Proportional voltage output represents motor current, 2) Use for stall detection and overcurrent protection, 3) Implement torque control in software, 4) Detect end-of-travel in mechanical systems, 5) Monitor for fault conditions. Current sense enables intelligent motor control and protection.",
        decisionGuide: "Use current sense for stall detection and torque control. Add filtering to sense output if needed.",
        keywords: ["current sense", "stall detection", "torque control", "motor current"]
      },
      {
        question: "How do I handle inductive kickback from motors?",
        answer: "TPM8847 includes internal clamp diodes for inductive kickback protection. For additional protection: 1) Add external fast recovery diodes across motor terminals for high-current applications, 2) Use TVS diodes for transient suppression, 3) Add bulk capacitance (100-470μF) near driver to absorb energy, 4) Implement slow decay mode in PWM to reduce voltage spikes, 5) Ensure adequate PCB copper area for heat dissipation.",
        decisionGuide: "Internal protection is sufficient for most applications. Add external diodes for high-power or safety-critical systems.",
        keywords: ["inductive kickback", "flyback diode", "transient protection", "EMI"]
      }
    ]
  }
};

// 更新产品数据
let modified = false;

for (const category of productsData.categories) {
  const categoryId = category.id;
  const currentProducts = category.products || [];
  
  console.log(`\n📂 分类: ${category.name} (${categoryId})`);
  
  // 增强字段
  for (const product of currentProducts) {
    const partNumber = product.partNumber;
    if (fieldsToEnhance[partNumber]) {
      let productModified = false;
      
      // 增强alternativeParts（确保至少有2个）
      if (fieldsToEnhance[partNumber].alternativeParts) {
        const existingAlts = product.alternativeParts || [];
        if (existingAlts.length < 2) {
          product.alternativeParts = fieldsToEnhance[partNumber].alternativeParts;
          console.log(`   ✅ ${partNumber}: 更新 alternativeParts (${product.alternativeParts.length}个)`);
          productModified = true;
        }
      }
      
      // 增强companionParts（确保至少有3个）
      if (fieldsToEnhance[partNumber].companionParts) {
        const existingComps = product.companionParts || [];
        if (existingComps.length < 3) {
          product.companionParts = fieldsToEnhance[partNumber].companionParts;
          console.log(`   ✅ ${partNumber}: 更新 companionParts (${product.companionParts.length}个)`);
          productModified = true;
        }
      }
      
      // 增强faqs（确保至少有5个）
      if (fieldsToEnhance[partNumber].faqs) {
        const existingFaqs = product.faqs || [];
        if (existingFaqs.length < 5) {
          product.faqs = fieldsToEnhance[partNumber].faqs;
          console.log(`   ✅ ${partNumber}: 更新 faqs (${product.faqs.length}个)`);
          productModified = true;
        }
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
