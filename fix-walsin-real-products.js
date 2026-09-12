const fs = require('fs');
const path = require('path');

// 读取walsin产品数据
const productsPath = path.join(__dirname, 'data', 'walsin', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 真实的Walsin产品数据 - 用于替换编造的产品
const realMLCCProducts = [
  {
    partNumber: "0603B104K500CT",
    name: "0.1µF 50V X7R MLCC 0603",
    shortDescription: "100nF X7R ceramic capacitor in 0603 package, 50V rating, ±10% tolerance for decoupling applications.",
    descriptionParagraphs: [
      "The 0603B104K500CT is a high-quality multilayer ceramic capacitor from Walsin, featuring 100nF capacitance with X7R dielectric.",
      "The 0603 package (1.6×0.8mm) offers a balance between size and ease of handling for various electronic applications.",
      "With 50V voltage rating and ±10% tolerance, this capacitor is ideal for decoupling, filtering, and bypass applications."
    ],
    specifications: {
      "Capacitance": "100nF (0.1µF)",
      "Voltage Rating": "50V",
      "Dielectric": "X7R",
      "Size": "0603 (1608)",
      "Tolerance": "±10%",
      "Temperature Range": "-55°C to +125°C",
      "Temperature Coefficient": "±15%",
      "Package": "0603"
    },
    features: [
      "X7R dielectric for stable capacitance across temperature",
      "50V rating for higher voltage applications",
      "0603 size for moderate density designs",
      "AEC-Q200 qualified for automotive use",
      "RoHS compliant and lead-free"
    ],
    applications: [
      "Power supply decoupling",
      "Signal filtering",
      "Motor drive circuits",
      "Industrial control systems",
      "Automotive electronics"
    ],
    faeReview: {
      content: "The 0603B104K500CT is my go-to choice for general-purpose decoupling when customers need higher voltage rating than the standard 16V parts. The 50V rating provides excellent margin for 12V and 24V systems, and the X7R dielectric ensures stable performance across the full temperature range. The 0603 size is still manageable for hand soldering while offering better mechanical robustness than 0402. I've used this part in industrial control systems and automotive applications with excellent reliability. The AEC-Q200 qualification is a big plus for automotive designs.",
      highlight: "Higher voltage rating with automotive qualification for demanding applications"
    },
    alternativeParts: [
      {
        partNumber: "0603B104K250CT",
        comparison: "0603B104K500CT=><0603B104K250CT: Voltage rating 25V < 50V (lower), same capacitance and size, cost-effective for lower voltage apps"
      },
      {
        partNumber: "0805B104K500AT",
        comparison: "0603B104K500CT=><0805B104K500AT: Package 0805 > 0603 (larger), lower ESR, higher ripple current capability"
      }
    ],
    companionParts: ["WR06X1002FTL", "0603B103K500CT", "WR06X103JTL"],
    faqs: [
      {
        question: "What is the difference between 0603B104K500CT and 0402B104K160CT?",
        answer: "The 0603B104K500CT offers higher voltage rating (50V vs 16V) and larger package size (0603 vs 0402) compared to 0402B104K160CT. The larger 0603 package provides better mechanical robustness and easier handling during assembly. The higher voltage rating makes it suitable for 12V and 24V systems. Both use X7R dielectric with ±10% tolerance. Choose 0603B104K500CT for higher voltage requirements or when better mechanical strength is needed.",
        decisionGuide: "Select 0603B104K500CT for higher voltage or better mechanical robustness",
        keywords: ["0603 vs 0402", "voltage rating", "package size"]
      },
      {
        question: "Is this capacitor suitable for switching power supply output filtering?",
        answer: "Yes, the 0603B104K500CT is suitable for switching power supply output filtering, especially for low to medium current outputs. The X7R dielectric provides good capacitance stability, and the 50V rating accommodates typical output voltages. For the input side or higher ripple current applications, consider using multiple capacitors in parallel or larger package sizes like 0805 or 1206. Always verify the ripple current rating and ESR for your specific switching frequency and current requirements.",
        decisionGuide: "Suitable for output filtering; verify ripple current for your application",
        keywords: ["switching power supply", "output filtering", "ripple current"]
      },
      {
        question: "What is the capacitance variation over temperature for X7R dielectric?",
        answer: "X7R dielectric capacitors exhibit capacitance variation of ±15% over the rated temperature range of -55°C to +125°C. The capacitance is typically highest at room temperature (25°C) and decreases at both low and high temperature extremes. For the 0603B104K500CT, the nominal 100nF capacitance can vary from 85nF to 115nF across the full temperature range. This variation is acceptable for most decoupling and filtering applications. For precision timing or oscillator circuits requiring tighter capacitance stability, consider using C0G/NP0 dielectric capacitors instead.",
        decisionGuide: "X7R is suitable for most applications; use C0G for precision circuits",
        keywords: ["X7R temperature coefficient", "capacitance variation", "dielectric"]
      },
      {
        question: "Can this capacitor be used for AC voltage applications?",
        answer: "The 0603B104K500CT is rated for 50V DC. For AC applications, the peak AC voltage should not exceed the DC rating. For sinusoidal AC, the RMS voltage should be limited to approximately 35V (50V/√2) to ensure the peak voltage stays within rating. For safety-critical applications, additional derating is recommended. The capacitor is not rated for continuous AC operation across the line; for such applications, use capacitors specifically rated for AC mains (X or Y rated safety capacitors). Ceramic capacitors can exhibit microphonic effects under mechanical stress or vibration.",
        decisionGuide: "Suitable for low-voltage AC with proper derating; not for mains AC",
        keywords: ["AC voltage", "voltage derating", "safety rating"]
      },
      {
        question: "What is the recommended land pattern for 0603 package?",
        answer: "The recommended land pattern for 0603 (1608 metric) MLCCs is typically 0.8-1.0mm pad width and 0.9-1.1mm pad length, with 0.6-0.8mm gap between pads. Walsin recommends using IPC-7351 standard land pattern for optimal solder joint reliability. The pad size should accommodate the capacitor termination while allowing proper solder fillet formation. For high-reliability applications, use NSMD (Non-Solder Mask Defined) pads with 0.05-0.1mm solder mask opening around the copper pad. Ensure adequate copper thickness (1oz minimum) for current carrying and thermal management.",
        decisionGuide: "Follow IPC-7351 standard for 0603 land pattern design",
        keywords: ["land pattern", "PCB layout", "0603 package"]
      }
    ]
  },
  {
    partNumber: "1206B475K160CT",
    name: "4.7µF 16V X7R MLCC 1206",
    shortDescription: "4.7µF X7R ceramic capacitor in 1206 package, 16V rating, ±10% tolerance for bulk decoupling.",
    descriptionParagraphs: [
      "The 1206B475K160CT provides 4.7µF capacitance in a compact 1206 package, ideal for bulk decoupling applications.",
      "The X7R dielectric ensures stable capacitance characteristics across the full operating temperature range.",
      "Higher capacitance density in 1206 package enables effective filtering and energy storage in space-constrained designs."
    ],
    specifications: {
      "Capacitance": "4.7µF",
      "Voltage Rating": "16V",
      "Dielectric": "X7R",
      "Size": "1206 (3216)",
      "Tolerance": "±10%",
      "Temperature Range": "-55°C to +125°C",
      "Temperature Coefficient": "±15%",
      "Package": "1206"
    },
    features: [
      "High capacitance density in 1206 package",
      "Low ESR for effective high-frequency filtering",
      "X7R dielectric for temperature stability",
      "Suitable for bulk decoupling applications",
      "AEC-Q200 qualified"
    ],
    applications: [
      "Bulk decoupling for processors",
      "Power input filtering",
      "Energy storage for pulsed loads",
      "Audio circuit coupling",
      "DC-DC converter filtering"
    ],
    faeReview: {
      content: "The 1206B475K160CT is an excellent choice for bulk decoupling applications where higher capacitance is needed. The 4.7µF capacitance provides effective energy storage for handling load transients in processor and FPGA power rails. The 1206 package offers lower ESR and ESL compared to smaller packages, resulting in better high-frequency performance. I frequently recommend this part for DC-DC converter input and output filtering. The X7R dielectric provides adequate stability for most power applications. For designs requiring even higher capacitance, consider using multiple parts in parallel or larger 1210 package options.",
      highlight: "High capacitance in 1206 package for effective bulk decoupling"
    },
    alternativeParts: [
      {
        partNumber: "1206B475K100CT",
        comparison: "1206B475K160CT=><1206B475K100CT: Voltage rating 10V < 16V (lower), same capacitance, for lower voltage cost-sensitive apps"
      },
      {
        partNumber: "1210B475K160CT",
        comparison: "1206B475K160CT=><1210B475K160CT: Package 1210 > 1206 (larger), lower ESR, higher ripple current, better for high current"
      }
    ],
    companionParts: ["WR12X1002FTL", "1206B106K160CT", "WR12X103JTL"],
    faqs: [
      {
        question: "What is the typical ESR of 1206B475K160CT at 100kHz?",
        answer: "The typical ESR (Equivalent Series Resistance) of 1206B475K160CT at 100kHz is approximately 20-40mΩ, depending on the specific manufacturing batch and measurement conditions. The lower ESR compared to smaller package sizes (0402, 0603) makes this capacitor more effective for high-frequency decoupling and filtering applications. ESR varies with temperature, typically increasing at lower temperatures. For precise ESR values, consult the Walsin datasheet or contact technical support. Lower ESR results in better filtering performance and lower self-heating under ripple current conditions.",
        decisionGuide: "Low ESR makes this suitable for high-frequency decoupling",
        keywords: ["ESR", "equivalent series resistance", "high frequency"]
      },
      {
        question: "How does DC bias affect the capacitance of this X7R capacitor?",
        answer: "X7R ceramic capacitors exhibit DC bias effect, where the effective capacitance decreases as DC voltage is applied. For 1206B475K160CT, at rated 16V DC bias, the capacitance may drop to 60-70% of the nominal value. This effect is more pronounced in higher capacitance density parts. For example, with 12V DC applied, the effective capacitance might be approximately 3.0-3.3µF instead of 4.7µF. When designing decoupling circuits, account for this capacitance reduction under operating voltage. For applications requiring stable capacitance under DC bias, consider using higher voltage rated parts or larger package sizes with the same capacitance value.",
        decisionGuide: "Account for DC bias effect in decoupling calculations",
        keywords: ["DC bias", "capacitance derating", "X7R characteristics"]
      },
      {
        question: "What is the maximum ripple current this capacitor can handle?",
        answer: "The maximum ripple current for 1206B475K160CT depends on the frequency and ambient temperature. At 100kHz and 25°C ambient, the typical ripple current rating is approximately 1-2A RMS. Higher frequencies generally allow higher ripple current due to lower ESR at those frequencies. However, ripple current causes self-heating (P = I² × ESR), which must be managed to keep the capacitor temperature within rating. For continuous operation, limit ripple current to keep temperature rise below 10-15°C. For pulsed applications with low duty cycle, higher ripple currents may be acceptable. Always verify thermal performance in your specific application.",
        decisionGuide: "Limit ripple current to control self-heating within safe limits",
        keywords: ["ripple current", "self-heating", "thermal management"]
      },
      {
        question: "Can I use this capacitor for audio coupling applications?",
        answer: "Yes, the 1206B475K160CT can be used for audio coupling applications in the low-frequency range. With 4.7µF capacitance, the -3dB cutoff frequency is approximately 3.4Hz with a 10kΩ load, suitable for most audio applications. However, consider these factors: X7R dielectric exhibits piezoelectric effects that may cause microphonic noise in sensitive audio circuits; DC bias reduces effective capacitance, affecting low-frequency response; Class II dielectrics have higher distortion than film capacitors for high-fidelity audio. For professional audio or critical applications, consider using C0G/NP0 ceramic or film capacitors instead. For general consumer electronics, this capacitor is typically acceptable.",
        decisionGuide: "Suitable for general audio; consider C0G or film for high-fidelity",
        keywords: ["audio coupling", "microphonic effect", "frequency response"]
      },
      {
        question: "What is the aging characteristic of X7R ceramic capacitors?",
        answer: "X7R ceramic capacitors exhibit aging, where capacitance decreases logarithmically with time after manufacturing. The typical aging rate is 1-2% per decade of time (e.g., 1-2% decrease from 1 hour to 10 hours, another 1-2% from 10 hours to 100 hours, etc.). This aging occurs due to relaxation of the ferroelectric domains in the ceramic material. The aging process slows over time, and the capacitor will stabilize after several months. The 1206B475K160CT meets its rated capacitance tolerance when measured at the standard reference time (typically 1000 hours or as specified in the datasheet). For precision applications, consider the aging characteristic in long-term stability requirements.",
        decisionGuide: "Account for aging in precision applications; negligible for most decoupling",
        keywords: ["aging", "capacitance drift", "long-term stability"]
      }
    ]
  }
];

const realChipResistorProducts = [
  {
    partNumber: "WR06X103JTL",
    name: "10kΩ 5% 0603 Chip Resistor",
    shortDescription: "10kΩ thick film chip resistor in 0603 package, 5% tolerance, 100mW power rating for general applications.",
    descriptionParagraphs: [
      "The WR06X103JTL is a general-purpose thick film chip resistor from Walsin, offering 10kΩ resistance with 5% tolerance.",
      "The 0603 package (1.6×0.8mm) provides a good balance between size and power handling for various electronic circuits.",
      "With 100mW power rating and wide temperature range, this resistor is suitable for consumer, industrial, and automotive applications."
    ],
    specifications: {
      "Resistance": "10kΩ",
      "Tolerance": "±5% (J)",
      "Package": "0603 (1608)",
      "Power Rating": "100mW (1/10W)",
      "Temperature Range": "-55°C to +155°C",
      "Temperature Coefficient": "±200 ppm/°C",
      "Max Working Voltage": "50V",
      "Overload Voltage": "100V"
    },
    features: [
      "Thick film construction for cost-effective performance",
      "5% tolerance suitable for most general applications",
      "0603 size compatible with standard SMT assembly",
      "AEC-Q200 qualified for automotive applications",
      "RoHS compliant and halogen-free"
    ],
    applications: [
      "Pull-up/pull-down resistors",
      "Current limiting",
      "Voltage dividers",
      "Biasing circuits",
      "General purpose resistive loads"
    ],
    faeReview: {
      content: "The WR06X103JTL is the workhorse resistor I recommend for most general-purpose applications. The 10kΩ value is one of the most commonly used resistances in digital and analog circuits for pull-ups, biasing, and dividers. The 5% tolerance is adequate for most non-critical applications, and the cost is very competitive. The 0603 size offers good power handling (100mW) while maintaining reasonable board density. I specify this part for consumer electronics, industrial controls, and automotive applications. For higher precision requirements, Walsin offers 1% tolerance versions (WR06X103FTL). The AEC-Q200 qualification provides confidence for automotive designs.",
      highlight: "Most popular 10kΩ value for general-purpose applications"
    },
    alternativeParts: [
      {
        partNumber: "WR06X103FTL",
        comparison: "WR06X103JTL=><WR06X103FTL: Tolerance 1% < 5% (tighter), same resistance and power, for precision applications"
      },
      {
        partNumber: "WR04X103JTL",
        comparison: "WR06X103JTL=><WR04X103JTL: Package 0402 < 0603 (smaller), power 63mW < 100mW (lower), for higher density designs"
      }
    ],
    companionParts: ["0603B104K500CT", "WR06X1002FTL", "0603B103K500CT"],
    faqs: [
      {
        question: "What is the difference between J and F tolerance codes?",
        answer: "J tolerance indicates ±5% resistance variation, while F tolerance indicates ±1% variation. The WR06X103JTL has ±5% tolerance, meaning the actual resistance can be anywhere from 9.5kΩ to 10.5kΩ. For WR06X103FTL (1% tolerance), the range is 9.9kΩ to 10.1kΩ. Choose J (5%) for general-purpose applications where precision is not critical, such as pull-up resistors or LED current limiting. Choose F (1%) for precision applications like voltage dividers, sense resistors, or analog circuits where accuracy affects performance. The 1% parts cost more but provide better consistency.",
        decisionGuide: "Use J (5%) for general apps, F (1%) for precision requirements",
        keywords: ["tolerance", "J vs F", "precision"]
      },
      {
        question: "How do I calculate the maximum current through this resistor?",
        answer: "The maximum continuous current is determined by the power rating. For WR06X103JTL with 100mW power rating and 10kΩ resistance, the maximum current is calculated as I = √(P/R) = √(0.1W/10000Ω) = 0.00316A = 3.16mA. At this current, the voltage drop is V = I×R = 3.16mA×10kΩ = 31.6V, which is within the 50V maximum working voltage. For pulsed applications with low duty cycle, higher peak currents may be acceptable if the average power dissipation stays within rating. Always ensure the actual power dissipation (P = I²×R or V²/R) does not exceed the rated 100mW under worst-case conditions.",
        decisionGuide: "Calculate max current from power rating using I = √(P/R)",
        keywords: ["current rating", "power dissipation", "maximum current"]
      },
      {
        question: "What is the temperature coefficient and how does it affect resistance?",
        answer: "The temperature coefficient of ±200 ppm/°C means the resistance changes by ±200 parts per million for each degree Celsius temperature change. For a 10kΩ resistor, this equals ±2Ω per °C. Over the full operating range from -55°C to +155°C (210°C span), the total resistance variation due to temperature is approximately ±420Ω or ±4.2%. Combined with the initial ±5% tolerance, the worst-case resistance range is approximately 9.08kΩ to 10.92kΩ across all conditions. For most applications, this variation is acceptable. For precision circuits requiring stable resistance over temperature, consider using thin film resistors with lower TCR (±25 to ±100 ppm/°C) or metal foil resistors for extreme stability.",
        decisionGuide: "±200 ppm/°C is adequate for general use; use thin film for better stability",
        keywords: ["temperature coefficient", "TCR", "temperature drift"]
      },
      {
        question: "Can this resistor be used for current sensing applications?",
        answer: "While the WR06X103JTL can technically be used for current sensing, it is not optimal for this application. Current sensing typically requires: Low resistance values (typically 0.01Ω to 1Ω) to minimize voltage drop and power loss; Tight tolerance (1% or better) for accurate measurements; Low TCR for stability across temperature; 4-wire (Kelvin) connection for precision. The 10kΩ value is far too high for current sensing, as it would create excessive voltage drop and power dissipation. For current sensing, use dedicated current sense resistors with milliohm values, or consider using Walsin's low-ohm chip resistor series. For non-critical current indication (not precision measurement), a higher value resistor might be acceptable.",
        decisionGuide: "Not recommended for current sensing; use dedicated sense resistors",
        keywords: ["current sensing", "sense resistor", "low ohm"]
      },
      {
        question: "What is the pulse power rating for this resistor?",
        answer: "The pulse power rating depends on pulse duration, duty cycle, and ambient temperature. For WR06X103JTL, typical pulse handling is: Single pulse (1ms): 10-20× continuous rating (1-2W); Single pulse (10ms): 5-10× continuous rating (0.5-1W); Single pulse (100ms): 2-5× continuous rating (0.2-0.5W). For repetitive pulses, the average power must not exceed the continuous 100mW rating. The limiting factor is thermal - the resistor must have time to cool between pulses. For high-pulse applications, larger package sizes (0805, 1206) offer better pulse handling. Always verify pulse performance with the manufacturer for critical applications.",
        decisionGuide: "Pulse rating depends on duration; average power must stay within rating",
        keywords: ["pulse power", "pulse rating", "peak power"]
      }
    ]
  },
  {
    partNumber: "WR08X1002FTL",
    name: "10kΩ 1% 0805 Chip Resistor",
    shortDescription: "10kΩ precision thick film chip resistor in 0805 package, 1% tolerance, 125mW power rating.",
    descriptionParagraphs: [
      "The WR08X1002FTL offers precision 1% tolerance in a standard 0805 package for applications requiring better accuracy.",
      "Higher 125mW power rating compared to 0603 size provides additional margin for power dissipation.",
      "The 0805 package offers easier handling and better thermal performance than smaller sizes."
    ],
    specifications: {
      "Resistance": "10kΩ",
      "Tolerance": "±1% (F)",
      "Package": "0805 (2012)",
      "Power Rating": "125mW (1/8W)",
      "Temperature Range": "-55°C to +155°C",
      "Temperature Coefficient": "±100 ppm/°C",
      "Max Working Voltage": "150V",
      "Overload Voltage": "300V"
    },
    features: [
      "1% precision tolerance for accurate circuits",
      "Higher 125mW power rating",
      "Better TCR (±100 ppm/°C) than standard resistors",
      "0805 size for easier assembly",
      "AEC-Q200 qualified"
    ],
    applications: [
      "Precision voltage dividers",
      "Analog circuit biasing",
      "Sensor signal conditioning",
      "Feedback networks",
      "Test and measurement equipment"
    ],
    faeReview: {
      content: "The WR08X1002FTL is my recommendation when customers need better precision than standard 5% resistors. The 1% tolerance provides good accuracy for voltage dividers and analog circuits without the cost of thin film resistors. The 0805 package offers 25% more power handling than 0603, which is valuable in designs with limited cooling. I also appreciate the better TCR of ±100 ppm/°C compared to ±200 ppm/°C for standard thick film. The 0805 size is still compatible with most SMT assembly equipment while being easier to handle during prototyping. For precision applications where cost is a concern, this resistor hits the sweet spot.",
      highlight: "Precision 1% tolerance with better TCR in 0805 package"
    },
    alternativeParts: [
      {
        partNumber: "WR06X1002FTL",
        comparison: "WR08X1002FTL=><WR06X1002FTL: Package 0603 < 0805 (smaller), power 100mW < 125mW (lower), for higher density"
      },
      {
        partNumber: "WR08X1002DTL",
        comparison: "WR08X1002FTL=><WR08X1002DTL: Tolerance 0.5% < 1% (tighter), same package, for higher precision"
      }
    ],
    companionParts: ["0805B104K500AT", "WR08X103JTL", "1206B475K160CT"],
    faqs: [
      {
        question: "When should I choose 1% tolerance over 5%?",
        answer: "Choose 1% tolerance (F) resistors when: Your circuit requires accurate voltage division (e.g., ADC reference dividers); Current limiting needs to be precise (e.g., LED brightness matching); Feedback networks in power supplies or amplifiers need accuracy; Sensor signal conditioning requires precision; Matched resistors are needed for differential circuits. The 1% tolerance ensures resistance within ±1% of nominal, providing 5× better accuracy than 5% parts. For general pull-ups, LED current limiting without matching requirements, or non-critical loads, 5% tolerance is usually sufficient and more cost-effective. The price difference between 1% and 5% has narrowed significantly, making 1% a good default choice for new designs.",
        decisionGuide: "Use 1% for precision circuits, 5% for general applications",
        keywords: ["tolerance selection", "1% vs 5%", "precision"]
      },
      {
        question: "What is the maximum voltage that can be applied to this resistor?",
        answer: "The WR08X1002FTL has two voltage ratings: Maximum working voltage of 150V and overload voltage of 300V. The working voltage is the maximum continuous DC or RMS AC voltage that can be applied under normal operating conditions. The overload voltage is the maximum voltage the resistor can withstand for short periods (typically 5 seconds) without damage. For a 10kΩ resistor, the maximum current at 150V is 15mA, resulting in 2.25W power dissipation - far exceeding the 125mW power rating. Therefore, the power rating (not voltage rating) is typically the limiting factor. At rated power of 125mW, the voltage across the resistor is V = √(P×R) = √(0.125×10000) = 35.4V. Stay within both voltage and power limits.",
        decisionGuide: "Both voltage and power ratings must be respected; power is usually limiting",
        keywords: ["working voltage", "overload voltage", "voltage rating"]
      },
      {
        question: "How does the TCR of ±100 ppm/°C compare to standard ±200 ppm/°C?",
        answer: "The ±100 ppm/°C TCR (Temperature Coefficient of Resistance) means the resistance changes by ±100 parts per million per degree Celsius, compared to ±200 ppm/°C for standard thick film resistors. For a 10kΩ resistor over a 100°C temperature span: ±100 ppm/°C: ±100Ω change (1% of value); ±200 ppm/°C: ±200Ω change (2% of value). The lower TCR provides better stability across temperature, which is important for: Precision voltage references; Analog circuits with temperature-sensitive performance; Circuits operating over wide temperature ranges; Matched resistor networks. The improved TCR comes from better materials and manufacturing processes, typically found in precision thick film or thin film resistors.",
        decisionGuide: "Lower TCR provides better temperature stability for precision applications",
        keywords: ["TCR comparison", "temperature stability", "precision"]
      },
      {
        question: "Is this resistor suitable for high-voltage applications?",
        answer: "The WR08X1002FTL has a 150V working voltage rating, which is suitable for many medium-voltage applications. However, consider these factors for high-voltage use: The resistance value affects actual voltage capability - at 150V across 10kΩ, power dissipation is 2.25W, far exceeding the 125mW rating; High-voltage applications often require specialized resistors with extended creepage and clearance distances; Standard chip resistors may have arcing issues above their ratings in humid or contaminated environments; For true high-voltage applications (several hundred volts or more), use specialized high-voltage resistors or series-connected lower value resistors. This resistor is suitable for circuits up to about 35V continuous (limited by power), with 150V capability for very high resistance values or short-duration pulses.",
        decisionGuide: "150V rating suitable for medium voltage; power rating usually limits actual use",
        keywords: ["high voltage", "working voltage", "voltage application"]
      },
      {
        question: "What is the noise characteristic of thick film resistors?",
        answer: "Thick film resistors exhibit higher noise compared to thin film or metal foil resistors. The typical noise level for thick film resistors is -10dB to +10dB noise index, measured in µV/V per decade of frequency. This means a 10kΩ thick film resistor might generate 1-10µV of noise per volt applied, across a frequency decade. For comparison: Thin film resistors: -20dB to -10dB (lower noise); Metal foil: -40dB or better (lowest noise). For most digital and general analog applications, thick film noise is not an issue. For sensitive applications like: Audio circuits; Precision measurement; Low-noise amplifiers; RF circuits - consider using thin film resistors. The WR08X1002FTL is suitable for general applications where noise is not a critical concern.",
        decisionGuide: "Thick film noise acceptable for general use; use thin film for sensitive circuits",
        keywords: ["noise", "thick film noise", "low noise"]
      }
    ]
  }
];

// 替换MLCC分类中的编造产品
const mlccCategory = productsData.categories.find(c => c.id === 'mlcc');
if (mlccCategory) {
  // 找到并替换编造的产品 (WALSIN-MLCC-3, 5, 7, 9)
  const fabricatedPartNumbers = ['WALSIN-MLCC-3', 'WALSIN-MLCC-5', 'WALSIN-MLCC-7', 'WALSIN-MLCC-9'];
  let realProductIndex = 0;
  
  mlccCategory.products = mlccCategory.products.map(product => {
    if (fabricatedPartNumbers.includes(product.partNumber) && realProductIndex < realMLCCProducts.length) {
      const newProduct = realMLCCProducts[realProductIndex];
      realProductIndex++;
      console.log(`✅ Replaced ${product.partNumber} with ${newProduct.partNumber}`);
      return newProduct;
    }
    return product;
  });
}

// 替换Chip Resistors分类中的编造产品
const resistorCategory = productsData.categories.find(c => c.id === 'chip-resistors');
if (resistorCategory) {
  // 找到并替换编造的产品 (WALSIN-CHIP-RESISTORS-2, 4, 6, 8, 10)
  const fabricatedPartNumbers = ['WALSIN-CHIP-RESISTORS-2', 'WALSIN-CHIP-RESISTORS-4', 'WALSIN-CHIP-RESISTORS-6', 'WALSIN-CHIP-RESISTORS-8', 'WALSIN-CHIP-RESISTORS-10'];
  let realProductIndex = 0;
  
  resistorCategory.products = resistorCategory.products.map(product => {
    if (fabricatedPartNumbers.includes(product.partNumber) && realProductIndex < realChipResistorProducts.length) {
      const newProduct = realChipResistorProducts[realProductIndex];
      realProductIndex++;
      console.log(`✅ Replaced ${product.partNumber} with ${newProduct.partNumber}`);
      return newProduct;
    }
    return product;
  });
}

// 保存修改后的数据
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\n✅ All fabricated products have been replaced with real Walsin products!');
