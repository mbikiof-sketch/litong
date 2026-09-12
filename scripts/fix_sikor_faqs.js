#!/usr/bin/env node
/**
 * 修复 Sikor 产品 FAQ - 替换占位符内容
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'sikor');
const productsPath = path.join(dataDir, 'products.json');

console.log('========================================');
console.log('🔧 修复 Sikor 产品 FAQ');
console.log('========================================\n');

// 读取 products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 定义每个分类的 FAQ 模板
const faqTemplates = {
  'mosfets': [
    {
      "question": "What is the RDS(on) of this MOSFET and how does it affect efficiency?",
      "answer": "The RDS(on) is specified in the datasheet and represents the drain-source resistance when the device is fully turned on. Lower RDS(on) means lower conduction losses (P = I² × R), resulting in higher efficiency. However, MOSFETs with lower RDS(on) typically have higher gate charge, which increases switching losses. For high-frequency applications, balance RDS(on) with gate charge for optimal total losses.",
      "decisionGuide": "Select the lowest RDS(on) that meets your switching frequency requirements. Contact our FAE team for loss calculations.",
      "keywords": ["RDS(on)", "conduction loss", "efficiency", "MOSFET selection"]
    },
    {
      "question": "What gate voltage is required to fully enhance this MOSFET?",
      "answer": "This MOSFET requires a gate voltage of 4.5V to 10V for full enhancement, depending on the specific model. Logic-level MOSFETs can be fully turned on with 3.3V or 5V, while standard MOSFETs may require 10V. Operating with insufficient gate voltage results in higher RDS(on) and excessive heating. Always verify the VGS(th) specification in the datasheet.",
      "decisionGuide": "Ensure your gate driver can provide sufficient voltage. Use logic-level MOSFETs for 3.3V applications.",
      "keywords": ["gate voltage", "VGS", "logic level", "enhancement"]
    },
    {
      "question": "How do I calculate the power dissipation and thermal requirements?",
      "answer": "Power dissipation consists of conduction losses (Pcond = I² × RDS(on) × D) and switching losses (Psw = 0.5 × V × I × (tr + tf) × fsw). Total power dissipation must not exceed the package thermal capability. Calculate junction temperature using Tj = Ta + Ptotal × RthJA. Ensure Tj stays below the maximum rating (typically 150°C or 175°C) with adequate margin.",
      "decisionGuide": "Perform thermal calculations for your operating conditions. Use heatsinks or copper pours if needed. Contact FAE for thermal analysis.",
      "keywords": ["power dissipation", "thermal design", "junction temperature", "heatsink"]
    },
    {
      "question": "What is the maximum switching frequency for this MOSFET?",
      "answer": "The maximum practical switching frequency depends on gate charge, drive capability, and acceptable switching losses. This MOSFET is suitable for frequencies up to several hundred kHz to MHz range. Higher frequencies require stronger gate drivers and may generate more EMI. For frequencies above 100kHz, consider the total gate charge and ensure your driver can charge/discharge the gate quickly enough.",
      "decisionGuide": "Select MOSFETs with low gate charge for high-frequency applications. Verify driver capability.",
      "keywords": ["switching frequency", "gate charge", "EMI", "high speed"]
    },
    {
      "question": "Can this MOSFET be used in parallel for higher current?",
      "answer": "Yes, MOSFETs can be paralleled to increase current capability. However, careful design is required to ensure current sharing. Use identical MOSFETs from the same production batch, minimize layout asymmetry, and consider using individual gate resistors for each device. The positive temperature coefficient of RDS(on) helps with current sharing as hot devices conduct less current.",
      "decisionGuide": "For parallel operation, use symmetrical layout and matched devices. Contact FAE for parallel design guidelines.",
      "keywords": ["parallel operation", "current sharing", "multiple MOSFETs"]
    },
    {
      "question": "What package options are available and how do I select?",
      "answer": "This MOSFET is available in various packages including SOT-23 for compact designs, SOP-8 for medium power, TO-220 for through-hole applications, and TO-247 for high-power designs. Package selection depends on power dissipation, thermal requirements, manufacturing process (SMT vs through-hole), and board space constraints. Higher power packages have better thermal characteristics.",
      "decisionGuide": "Select package based on power dissipation and thermal requirements. Consider manufacturing process and board space.",
      "keywords": ["package selection", "SOT-23", "TO-220", "thermal", "footprint"]
    }
  ],
  'igbts': [
    {
      "question": "What is the difference between this IGBT and a MOSFET?",
      "answer": "IGBTs combine the high input impedance of MOSFETs with the low conduction losses of bipolar transistors. They are preferred for high-voltage (>300V), high-current applications where conduction losses dominate. MOSFETs are better for lower voltages and high-frequency applications. This IGBT offers lower VCE(sat) than comparable MOSFETs at high currents, making it ideal for motor drives and inverters.",
      "decisionGuide": "Use IGBTs for high-voltage, high-current, moderate frequency applications. Use MOSFETs for lower voltage or high-frequency applications.",
      "keywords": ["IGBT vs MOSFET", "conduction loss", "motor drive", "high voltage"]
    },
    {
      "question": "What is the recommended gate drive voltage for this IGBT?",
      "answer": "This IGBT requires a gate drive voltage of +15V for turn-on to achieve the specified VCE(sat). For turn-off, 0V is typically sufficient, though negative gate voltage (-5V to -8V) can improve switching speed and noise immunity. The gate driver must provide sufficient peak current to charge/discharge the gate capacitance quickly. Under-voltage lockout (UVLO) is recommended to prevent operation with insufficient gate voltage.",
      "decisionGuide": "Use +15V gate drive for optimal performance. Consider negative bias for fast switching. Contact FAE for driver recommendations.",
      "keywords": ["gate drive", "VGE", "turn-on voltage", "negative bias"]
    },
    {
      "question": "How do I protect this IGBT from short circuits?",
      "answer": "This IGBT has a short-circuit withstand time rating (typically 10μs). Protection methods include: desaturation detection monitoring VCE during conduction; current sensing with fast shutdown; soft turn-off to prevent voltage spikes; and proper gate resistor selection. The protection circuit must detect faults and shut down the IGBT within the specified short-circuit withstand time.",
      "decisionGuide": "Implement desaturation detection for short-circuit protection. Ensure shutdown within rated withstand time. Contact FAE for protection circuit design.",
      "keywords": ["short circuit protection", "desaturation", "fault protection", "SOA"]
    },
    {
      "question": "What switching frequency is recommended for this IGBT?",
      "answer": "This IGBT is optimized for switching frequencies up to 20kHz, typical for motor drive applications. Higher frequencies increase switching losses and may require derating. For applications above 20kHz, consider fast IGBT series or SiC MOSFETs. The trade-off is between switching losses (proportional to frequency) and conduction losses (relatively constant).",
      "decisionGuide": "Use standard IGBTs for <20kHz, fast IGBTs for 20-50kHz. Contact FAE for frequency optimization.",
      "keywords": ["switching frequency", "PWM", "motor drive", "switching loss"]
    },
    {
      "question": "How do I design the thermal management for this IGBT?",
      "answer": "Thermal design must keep the junction temperature below the maximum rating (typically 150°C or 175°C). Calculate total losses (conduction + switching), then determine required thermal resistance using RthJA = (Tj_max - Ta) / Ploss. Select heatsink and thermal interface material to achieve required RthJA. For high-power applications, consider forced air cooling or liquid cooling. Always include safety margin.",
      "decisionGuide": "Perform thermal calculations and select appropriate heatsink. Contact FAE for thermal modeling and heatsink recommendations.",
      "keywords": ["thermal design", "heatsink", "junction temperature", "cooling"]
    },
    {
      "question": "What is the difference between trench field-stop and NPT IGBT technology?",
      "answer": "Trench field-stop IGBTs (like this device) offer lower VCE(sat) and faster switching compared to NPT (non-punch-through) technology. The field-stop layer reduces the thickness of the drift region, lowering conduction losses while maintaining blocking voltage. Trench gate structure provides higher cell density and better carrier injection. This technology is preferred for new designs requiring high efficiency.",
      "decisionGuide": "Use trench field-stop IGBTs for new designs requiring high efficiency and fast switching.",
      "keywords": ["trench field-stop", "NPT", "IGBT technology", "VCE(sat)"]
    }
  ],
  'sic-devices': [
    {
      "question": "What are the advantages of SiC devices over silicon devices?",
      "answer": "SiC devices offer several advantages: higher breakdown voltage for same on-resistance; faster switching speeds (3-5x faster than silicon); zero reverse recovery charge in Schottky diodes; higher temperature operation (up to 175°C or 200°C); and lower switching losses enabling higher efficiency. These benefits translate to smaller heatsinks, higher power density, and reduced system cost in many applications.",
      "decisionGuide": "Use SiC for high-frequency, high-temperature, or high-efficiency applications. Contact FAE for SiC vs silicon comparison.",
      "keywords": ["SiC advantages", "silicon carbide", "wide bandgap", "high efficiency"]
    },
    {
      "question": "What gate drive requirements does this SiC MOSFET have?",
      "answer": "SiC MOSFETs typically require +18V to +20V gate drive for full enhancement (higher than silicon MOSFETs). The threshold voltage is lower (2-4V), so negative gate voltage (-2V to -5V) is recommended for turn-off to prevent false triggering from dv/dt. Gate driver must provide sufficient peak current for fast switching. The recommended gate resistance is typically lower than silicon devices.",
      "decisionGuide": "Use +18V to +20V gate drive for optimal performance. Consider negative bias for turn-off. Contact FAE for driver recommendations.",
      "keywords": ["SiC gate drive", "VGS", "negative bias", "threshold voltage"]
    },
    {
      "question": "How do I minimize ringing and EMI with SiC devices?",
      "answer": "SiC devices switch very fast, which can cause ringing and EMI. Minimization techniques include: proper gate resistor selection (typically 5-10Ω); minimizing loop inductance in gate and power circuits; using Kelvin source connection for gate drive; adding ferrite beads or RC snubbers if needed; and careful PCB layout with short traces and proper grounding. Slower switching (larger gate resistor) reduces EMI but increases switching losses.",
      "decisionGuide": "Optimize gate resistance for your EMI requirements. Use Kelvin connection and minimize loop inductance. Contact FAE for layout guidelines.",
      "keywords": ["ringing", "EMI", "gate resistor", "Kelvin connection", "layout"]
    },
    {
      "question": "Can I use standard silicon diode drivers for SiC MOSFETs?",
      "answer": "Standard gate drivers can be used, but must meet specific requirements: sufficient output voltage swing (+18V/-2V or similar); high peak current capability for fast switching; low output impedance; and adequate isolation for high-voltage applications. Some drivers designed specifically for SiC devices offer optimized features. Always verify the driver can deliver required gate charge quickly enough.",
      "decisionGuide": "Verify driver voltage range and peak current capability. Consider SiC-optimized drivers. Contact FAE for driver selection.",
      "keywords": ["gate driver", "driver selection", "peak current", "isolation"]
    },
    {
      "question": "What is the typical application for this SiC device?",
      "answer": "SiC devices are ideal for high-frequency power supplies, EV charging, solar inverters, motor drives, and any application requiring high efficiency and high power density. The fast switching allows smaller magnetics and filters, while low losses reduce cooling requirements. This specific device is suitable for hard-switching applications up to several hundred kHz.",
      "decisionGuide": "Use SiC for high-frequency or high-efficiency applications. Contact FAE for application-specific recommendations.",
      "keywords": ["SiC applications", "EV charging", "solar inverter", "high frequency"]
    },
    {
      "question": "How does temperature affect SiC device performance?",
      "answer": "SiC devices maintain excellent performance at high temperatures. RDS(on) increases with temperature but less than silicon MOSFETs. Switching characteristics remain stable across temperature. The maximum junction temperature is typically 175°C or 200°C, higher than silicon devices. This allows higher power density and simplified cooling in many applications.",
      "decisionGuide": "Take advantage of high-temperature capability for compact designs. Contact FAE for high-temperature operation guidelines.",
      "keywords": ["temperature coefficient", "high temperature", "thermal performance", "RDS(on)"]
    }
  ],
  'power-management': [
    {
      "question": "What is the propagation delay of this gate driver and why does it matter?",
      "answer": "Propagation delay is the time from input signal change to output response. This driver has typical propagation delay of 25ns. Low propagation delay is critical for high-frequency switching and precise timing control. In bridge circuits, matched delay between high-side and low-side drivers is essential to prevent shoot-through. Delay variations with temperature and voltage should also be considered.",
      "decisionGuide": "Select drivers with low propagation delay for high-frequency applications. Ensure matched delays for bridge circuits. Contact FAE for timing analysis.",
      "keywords": ["propagation delay", "timing", "high frequency", "bridge driver"]
    },
    {
      "question": "How much peak drive current does this driver provide?",
      "answer": "This gate driver provides 4A peak source and sink current. Higher peak current charges/discharges the MOSFET/IGBT gate faster, reducing switching time and losses. Required peak current depends on gate charge (Qg) and desired switching time: Ipeak = Qg / t_switch. For example, to switch a 20nC gate in 50ns requires 400mA. The 4A capability handles most power switches with margin.",
      "decisionGuide": "Ensure driver peak current meets your switching speed requirements. Contact FAE for drive capability calculations.",
      "keywords": ["peak current", "gate charge", "switching speed", "drive capability"]
    },
    {
      "question": "What is UVLO and why is it important?",
      "answer": "UVLO (Under-Voltage Lockout) disables the driver output when supply voltage is too low to properly enhance the power switch. This prevents operation with insufficient gate voltage, which would cause high conduction losses and device heating. UVLO threshold is typically 4-4.5V for low-voltage drivers and 10-12V for high-voltage IGBT drivers. Hysteresis prevents chatter near threshold.",
      "decisionGuide": "Ensure driver UVLO threshold matches your supply voltage and switch requirements. Contact FAE for UVLO considerations.",
      "keywords": ["UVLO", "under-voltage lockout", "protection", "gate voltage"]
    },
    {
      "question": "Can this driver be used for high-side switching applications?",
      "answer": "This is a low-side driver designed for ground-referenced switches. For high-side switching (source floating), use a high-side or half-bridge driver with bootstrap or isolated supply. High-side drivers can drive switches with source connected to switching node, requiring voltage translation and floating supply. This driver cannot be directly used for high-side applications.",
      "decisionGuide": "Use low-side drivers for ground-referenced switches. Use high-side or half-bridge drivers for high-side applications. Contact FAE for topology selection.",
      "keywords": ["high-side driver", "low-side driver", "bootstrap", "floating supply"]
    },
    {
      "question": "What is Miller clamp and when do I need it?",
      "answer": "Miller clamp is a feature that prevents false turn-on caused by Miller capacitance (Cgd) during fast switching. When the switch turns on, high dv/dt couples through Cgd to the gate, potentially raising gate voltage above threshold. Miller clamp provides a low-impedance path to ground when gate voltage drops, preventing this effect. It's essential for bridge circuits and applications with high dv/dt.",
      "decisionGuide": "Use Miller clamp for bridge circuits and high dv/dt applications. Contact FAE for Miller effect analysis.",
      "keywords": ["Miller clamp", "Miller capacitance", "false turn-on", "Cgd"]
    },
    {
      "question": "How do I calculate power dissipation in the gate driver?",
      "answer": "Gate driver power dissipation comes from: quiescent power (VCC × IQ) and gate drive power (Qg × VGS × fsw). For example, driving 20nC gate at 12V and 100kHz: Pdrive = 20nC × 12V × 100kHz = 24mW. Total power must not exceed package rating. Thermal design is usually not critical for gate drivers but should be verified for high-frequency applications.",
      "decisionGuide": "Calculate power dissipation for your switching frequency. Contact FAE for thermal verification if needed.",
      "keywords": ["power dissipation", "gate charge", "switching frequency", "thermal"]
    }
  ]
};

// 遍历所有分类
for (const category of productsData.categories) {
  console.log(`📦 处理 ${category.name}...`);
  
  const templates = faqTemplates[category.id];
  if (!templates) {
    console.log(`  ⚠️ 没有找到 ${category.id} 的 FAQ 模板`);
    continue;
  }
  
  for (const product of category.products) {
    // 检查 FAQ 是否是占位符
    const hasPlaceholder = product.faqs && product.faqs.some(faq => 
      faq.question.includes('MOSFETS-') || 
      faq.question.includes('IGBTS-') ||
      faq.question.includes('SIC-') ||
      faq.question.includes('POWER-') ||
      faq.question.includes('maximum voltage for') && faq.question.includes('?')
    );
    
    if (hasPlaceholder || !product.faqs || product.faqs.length < 5) {
      console.log(`  🔄 修复 ${product.partNumber} 的 FAQ`);
      
      // 使用模板创建新的 FAQ
      product.faqs = templates.map((template, index) => ({
        "question": template.question,
        "answer": template.answer,
        "decisionGuide": template.decisionGuide,
        "keywords": template.keywords
      }));
    }
  }
  
  console.log(`  ✅ ${category.name} FAQ 修复完成`);
}

// 保存 products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ products.json 更新完成');

console.log('\n========================================');
console.log('🎉 Sikor 产品 FAQ 修复完成！');
console.log('========================================');
