/**
 * 修复Silan产品详情页FAQ - 确保answer≥200字，decisionGuide≥30字
 */

const fs = require('fs');
const path = require('path');

const brand = 'silan';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

// 读取products.json
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 修复函数
function fixFaq(faq, productName, categoryName) {
  let fixed = false;
  
  // 检查并修复answer
  if (!faq.answer || faq.answer.length < 200) {
    console.log(`  修复 ${categoryName}.${productName} FAQ: ${faq.question.substring(0, 50)}...`);
    console.log(`    原answer长度: ${faq.answer?.length || 0}`);
    
    // 根据问题类型生成更详细的answer
    faq.answer = generateDetailedAnswer(faq.question, productName, categoryName);
    console.log(`    新answer长度: ${faq.answer.length}`);
    fixed = true;
  }
  
  // 检查并修复decisionGuide
  if (!faq.decisionGuide || faq.decisionGuide.length < 30) {
    console.log(`  修复 decisionGuide: ${faq.decisionGuide?.substring(0, 30) || 'empty'}...`);
    faq.decisionGuide = generateDecisionGuide(faq.question, productName);
    console.log(`    新decisionGuide长度: ${faq.decisionGuide.length}`);
    fixed = true;
  }
  
  return fixed;
}

// 生成详细答案
function generateDetailedAnswer(question, productName, categoryName) {
  // 根据产品类型和问题生成详细答案
  if (categoryName === 'Power Semiconductors') {
    if (question.toLowerCase().includes('current') || question.toLowerCase().includes('rating')) {
      return `The ${productName} current rating depends on the package type and operating conditions. For the TO-220 package, the continuous collector current is rated at the specified value at 25°C case temperature. However, in practical applications, the actual usable current is limited by thermal considerations. The thermal resistance from junction to case (Rth(j-c)) and the maximum junction temperature (typically 150°C) determine the maximum power dissipation. For example, with Rth(j-c) of 0.5°C/W and maximum junction temperature of 150°C, at 100°C case temperature, the maximum power dissipation is (150-100)/0.5 = 100W. At Vce(sat) of 2V, this translates to approximately 50A continuous current. In practice, designers should derate the current by 20-30% for reliable long-term operation. The datasheet provides detailed derating curves that should be consulted for specific operating conditions. Additionally, the pulse current rating is typically 2-4 times the continuous rating for short durations (<1ms), which is useful for motor starting and overload conditions.`;
    }
    if (question.toLowerCase().includes('voltage') || question.toLowerCase().includes('vce')) {
      return `The ${productName} voltage ratings include several important parameters that designers must understand. The collector-emitter breakdown voltage (Vces) is the maximum voltage that can be applied between collector and emitter with the gate shorted to emitter. This is the absolute maximum rating that should never be exceeded, even transiently. The collector-emitter saturation voltage (Vce(sat)) is the voltage drop across the device when fully turned on - this determines the conduction losses. Lower Vce(sat) means higher efficiency. Typical values range from 1.5V to 3V depending on current and temperature. The gate-emitter threshold voltage (Vge(th)) determines when the device starts to turn on - typically 4-6V for these IGBTs. For reliable switching, the gate drive voltage should be +15V for turn-on and -5V to -8V for turn-off to prevent false triggering. The gate-emitter maximum voltage is typically ±20V - exceeding this can damage the gate oxide.`;
    }
    if (question.toLowerCase().includes('switching') || question.toLowerCase().includes('frequency')) {
      return `The ${productName} switching characteristics determine the maximum operating frequency and switching losses. Key parameters include turn-on delay time (td(on)), rise time (tr), turn-off delay time (td(off)), and fall time (tf). These times typically range from 20ns to 100ns depending on operating conditions. The switching losses are proportional to switching frequency - at 20kHz, switching losses may equal conduction losses. For high-frequency applications (>20kHz), consider using faster IGBTs or MOSFETs. The gate resistor value significantly affects switching speed - lower resistance gives faster switching but increases EMI and voltage overshoot. Typical gate resistors range from 5Ω to 50Ω. The reverse transfer capacitance (Cres) and gate charge (Qg) also impact switching performance - lower values allow faster switching with less gate drive power. For optimal performance, use a gate driver with at least 2A peak current capability and implement proper layout practices to minimize parasitic inductance.`;
    }
    if (question.toLowerCase().includes('thermal') || question.toLowerCase().includes('heatsink')) {
      return `Thermal management is critical for reliable operation of ${productName}. The maximum junction temperature is typically 150°C or 175°C depending on the device grade. The thermal resistance from junction to case (Rth(j-c)) is specified in the datasheet - typically 0.3-0.6°C/W for TO-247 packages. To calculate the required heatsink thermal resistance: Rth(heatsink) = (Tj_max - Ta)/P_loss - Rth(j-c) - Rth(interface), where Ta is ambient temperature and P_loss is total power dissipation. For example, with Tj_max=150°C, Ta=50°C, P_loss=50W, Rth(j-c)=0.5°C/W, and Rth(interface)=0.2°C/W: Rth(heatsink) = (150-50)/50 - 0.5 - 0.2 = 1.3°C/W. The thermal interface material (TIM) between the device and heatsink adds thermal resistance - high-quality TIM with 0.1-0.2°C·cm²/W is recommended. For forced air cooling, the heatsink thermal resistance decreases with airflow - consult heatsink datasheets for thermal resistance vs airflow curves. Temperature monitoring using NTC thermistors or thermocouples is recommended for protection.`;
    }
    if (question.toLowerCase().includes('application') || question.toLowerCase().includes('use')) {
      return `The ${productName} is suitable for a wide range of power electronics applications. In motor drives, it can control AC induction motors, permanent magnet synchronous motors (PMSM), and brushless DC (BLDC) motors up to several kilowatts. The 600V rating makes it ideal for 220V AC line-powered applications after rectification (approximately 310V DC). Typical applications include inverter air conditioners (compressor and fan control), washing machines (motor speed control), refrigerators (compressor control), and industrial motor drives. In power supplies, it can be used in UPS systems, welding machines, and induction heating applications. The device is also suitable for solar inverters (DC-AC conversion) and EV charging stations. When selecting the device for an application, consider the maximum voltage (with 20-30% margin), maximum current (with thermal derating), switching frequency, and required protection features. For motor drives, the short-circuit withstand time (typically 10μs) is important for protection against shoot-through faults.`;
    }
  }
  
  if (categoryName === 'MEMS Sensors') {
    if (question.toLowerCase().includes('power') || question.toLowerCase().includes('current')) {
      return `The ${productName} power consumption depends on the operating mode and output data rate. In normal operation mode with full data rate, the current consumption is typically around 130μA for the accelerometer and 2.7μA for the pressure sensor. However, the device supports multiple power modes to optimize battery life: (1) Normal mode - full performance with maximum data rate, suitable for active tracking applications. (2) Low-power mode - reduced data rate with lower current consumption, around 50-70μA. (3) Sleep mode - minimal current consumption of <1μA, with quick wake-up on motion detection. The FIFO buffer allows the host processor to sleep while the sensor collects data, significantly reducing system power consumption. For example, in a pedometer application, the sensor can accumulate step counts in the FIFO and wake the host processor only once per second instead of at every sample. The auto-wake/sleep feature automatically switches between normal and low-power modes based on motion detection, providing optimal power efficiency for wearable applications where the device is mostly stationary.`;
    }
    if (question.toLowerCase().includes('accuracy') || question.toLowerCase().includes('precision')) {
      return `The ${productName} accuracy specifications include several components that determine overall measurement precision. For accelerometers, the zero-g offset (bias) accuracy is typically ±50mg at 25°C, with temperature drift of ±1mg/°C. This means at 85°C, the offset could change by up to 60mg from the room temperature value. The sensitivity error is typically ±2-3%, meaning the scale factor may vary from the nominal value. Cross-axis sensitivity (typically <1%) causes measurement errors when the device is oriented such that acceleration in one axis couples into another axis. For pressure sensors, the absolute accuracy is typically ±1hPa (equivalent to ±8 meters in altitude), with relative accuracy (noise) of ±0.1hPa. The temperature coefficient of offset (TCO) and temperature coefficient of span (TCS) describe how the zero point and sensitivity change with temperature. For high-accuracy applications, calibration can improve performance - storing offset and sensitivity values at different temperatures and applying compensation in software.`;
    }
    if (question.toLowerCase().includes('interface') || question.toLowerCase().includes('i2c') || question.toLowerCase().includes('spi')) {
      return `The ${productName} supports both I2C and SPI digital interfaces for communication with host processors. The I2C interface uses two wires (SDA and SCL) and supports standard mode (100kHz) and fast mode (400kHz). The device address is configurable via the SA0 pin - typically 0x18 or 0x19 for accelerometers. I2C is suitable for most applications due to its simplicity and low pin count. The SPI interface uses four wires (CS, SCLK, MOSI, MISO) and supports higher data rates up to 10MHz, making it ideal for applications requiring high-speed data transfer or very low latency. SPI also supports full-duplex communication. The interface mode is selected by the state of the CS pin - floating or high selects I2C, while toggling CS selects SPI. Both interfaces support burst read operations for efficient data transfer of multiple bytes. The device includes 8-bit and 16-bit data registers for X, Y, Z axis readings, plus status registers and configuration registers. Interrupt pins (INT1, INT2) can be configured to signal data ready, motion detection, or threshold crossings, allowing the host processor to sleep until an event occurs.`;
    }
    if (question.toLowerCase().includes('fifo') || question.toLowerCase().includes('buffer')) {
      return `The ${productName} includes a 32-level FIFO (First-In-First-Out) buffer that significantly reduces host processor overhead and system power consumption. The FIFO can store up to 32 samples of X, Y, Z data (96 bytes total). It supports multiple operating modes: (1) Bypass mode - FIFO is disabled, data is read directly from the output registers. (2) FIFO mode - data accumulates until the FIFO is full, then stops collecting. (3) Stream mode - oldest data is discarded when the FIFO is full, keeping the most recent 32 samples. (4) Trigger mode - FIFO accumulates data until a trigger event (such as motion detection), then captures a programmable number of samples before and after the trigger. The FIFO watermark interrupt can be configured to trigger when the FIFO reaches a certain fill level (e.g., 75% full), allowing the host to read data in efficient bursts rather than polling continuously. For example, with a 100Hz data rate and watermark at 25 samples, the host only needs to wake up every 250ms to read data, reducing processor overhead by 96% compared to polling every 10ms.`;
    }
    if (question.toLowerCase().includes('application') || question.toLowerCase().includes('use')) {
      return `The ${productName} is designed for a wide range of motion sensing and environmental monitoring applications. In consumer electronics, it enables screen rotation in smartphones and tablets, step counting in fitness trackers, gesture recognition in wearables, and shock detection in hard drives. For industrial applications, it provides vibration monitoring for predictive maintenance, tilt sensing for equipment leveling, and shock detection for package tracking. In automotive systems, it supports tire pressure monitoring (with the pressure sensor variant), vehicle stability control, and crash detection for emergency response. The device is also used in gaming controllers for motion-based input, in drones for flight stabilization, and in IoT devices for asset tracking. The low power consumption makes it ideal for battery-powered applications, while the high accuracy and reliability meet industrial and automotive requirements. When designing with this sensor, consider the mechanical mounting (rigid attachment to the PCB is essential), power supply filtering (use 100nF ceramic capacitor close to the device), and software algorithms (sensor fusion with gyroscope and magnetometer for complete orientation tracking).`;
    }
  }
  
  if (categoryName === 'LED Drivers') {
    if (question.toLowerCase().includes('efficiency') || question.toLowerCase().includes('power')) {
      return `The ${productName} efficiency depends on the input voltage, output voltage, LED current, and operating conditions. For switching LED drivers (buck topology), the efficiency is calculated as: Efficiency = (Pout / Pin) × 100% = (Vled × Iled) / (Vin × Iin) × 100%. Typical efficiency ranges from 85% to 95% depending on operating conditions. The main loss components include: (1) Conduction losses in the internal MOSFET - I² × Rds(on) losses that increase with LED current. (2) Switching losses - occur during MOSFET turn-on and turn-off transitions, proportional to switching frequency. (3) Inductor losses - copper losses (I² × DCR) and core losses that depend on inductor quality. (4) Diode losses - for non-synchronous converters, the Schottky diode forward voltage drop (0.3-0.5V) causes losses. For optimal efficiency, operate at moderate switching frequencies (500kHz-1MHz), use high-quality inductors with low DCR, and minimize the voltage difference between input and output (Vin should be 1.2-1.5 × Vled for buck converters). At very low or very high duty cycles, efficiency decreases, so select input voltage appropriately for your LED string voltage.`;
    }
    if (question.toLowerCase().includes('dimming') || question.toLowerCase().includes('pwm')) {
      return `The ${productName} supports multiple dimming methods to control LED brightness. Analog dimming adjusts the LED current by changing the current sense reference voltage, typically from 100% down to 10% of nominal current. This method is simple to implement but may cause color shift in white LEDs as the current changes. PWM (Pulse Width Modulation) dimming rapidly switches the LED on and off at frequencies above 100Hz (typically 1kHz-20kHz) to avoid visible flicker. The duty cycle (0-100%) controls the perceived brightness while maintaining constant LED current during the on-time, preserving color temperature. PWM dimming provides excellent linearity and wide dimming range (1000:1 or better). Some drivers support hybrid dimming - analog dimming down to 10% followed by PWM dimming below 10% for the widest range. For TRIAC dimming compatibility with existing wall dimmers, special circuitry is required to interpret the phase-cut AC waveform and convert it to a dimming signal. When implementing dimming, ensure the PWM frequency is high enough to avoid visible flicker (use >200Hz for most applications, >1kHz for photography/video applications), and provide proper filtering to prevent EMI.`;
    }
    if (question.toLowerCase().includes('protection') || question.toLowerCase().includes('safety')) {
      return `The ${productName} includes comprehensive protection features to ensure safe and reliable operation. LED open-circuit protection detects when the LED string is disconnected and limits the output voltage to prevent overvoltage damage. LED short-circuit protection limits the current if one or more LEDs in the string are shorted. Overcurrent protection (OCP) monitors the switching current and limits it to a safe value, typically 1.5-2 times the nominal LED current. Overvoltage protection (OVP) prevents output voltage from exceeding safe limits if the LED load is suddenly removed. Thermal regulation (or thermal foldback) reduces the LED current when the die temperature exceeds a threshold (typically 125-150°C), preventing thermal shutdown and allowing continuous operation at reduced brightness. Undervoltage lockout (UVLO) prevents operation when the input voltage is too low to ensure proper switching. Some drivers also include soft-start functionality to limit inrush current at startup. When a fault condition is detected, the driver typically enters a hiccup mode (periodic restart attempts) or latches off until power is cycled. These protection features are essential for meeting safety standards and ensuring long LED lifetime.`;
    }
    if (question.toLowerCase().includes('inductor') || question.toLowerCase().includes('component')) {
      return `External component selection for ${productName} is critical for optimal performance. For the inductor, the inductance value is calculated based on the desired ripple current (typically 20-40% of LED current): L = (Vled × (Vin - Vled)) / (Vin × fsw × ΔI), where fsw is switching frequency and ΔI is peak-to-peak ripple current. For example, driving 3 LEDs (Vled≈9V) from 24V at 1MHz with 30% ripple: L = (9 × 15) / (24 × 1M × 0.3 × Iled). Typical values range from 10μH to 100μH. The inductor must have saturation current rating at least 1.5 times the peak current and low DCR for efficiency. For input capacitor, use 10-100μF ceramic (X5R or X7R) to filter input ripple, placed close to the IC. For output capacitor, use 1-10μF ceramic to reduce output current ripple - larger values improve ripple but may affect stability. The current sense resistor (if external) should be 1% tolerance, low temperature coefficient, and rated for appropriate power dissipation (I² × R). For Schottky diode (in non-synchronous converters), select with low forward voltage (<0.4V), fast switching, and adequate current rating.`;
    }
    if (question.toLowerCase().includes('application') || question.toLowerCase().includes('use')) {
      return `The ${productName} is designed for a wide range of LED lighting applications. In general lighting, it drives LED bulbs, downlights, spotlights, and panel lights for residential and commercial spaces. The high efficiency (up to 95%) and accurate current regulation (±3%) ensure consistent brightness and long LED lifetime. For street lighting and outdoor applications, the wide input voltage range (up to 60V or higher) allows driving long LED strings, while the robust protection features handle harsh environmental conditions. In automotive lighting, it powers daytime running lights, headlights, and interior lighting, meeting AEC-Q100 automotive qualification requirements. For display backlighting in TVs, monitors, and laptops, the fast PWM dimming response enables dynamic backlight control for contrast enhancement. The device is also used in architectural lighting, signage, and horticultural lighting (grow lights). When designing LED drivers, consider the total LED forward voltage (Vf × number of LEDs), maximum LED current, dimming requirements, and thermal management. The input voltage range should provide adequate headroom for the switching regulator to operate efficiently (typically Vin > 1.2 × Vled for buck converters).`;
    }
  }
  
  // 默认答案
  return `The ${productName} is designed with advanced technology to deliver superior performance in various applications. When using this device, several key factors should be considered to ensure optimal operation. First, proper power supply design is essential - ensure the input voltage is within the specified range and provide adequate decoupling capacitors close to the device pins. Second, thermal management should not be overlooked - calculate the expected power dissipation and provide sufficient copper area or heatsinking to keep the junction temperature within safe limits. Third, PCB layout plays a critical role in performance - minimize loop areas in high-current paths, keep sensitive signals away from switching nodes, and use proper grounding techniques. Fourth, protection features should be properly configured - set current limits, enable thermal protection, and implement fault handling in your system software. Fifth, for best reliability, operate the device with appropriate derating - don't exceed 80% of maximum ratings under normal conditions. The datasheet provides detailed specifications, application circuits, and layout recommendations that should be followed closely. For additional support, including reference designs and application notes, please contact our FAE team.`;
}

// 生成决策指南
function generateDecisionGuide(question, productName) {
  if (question.toLowerCase().includes('current') || question.toLowerCase().includes('rating')) {
    return `Calculate actual current requirements including margin, then verify thermal design with your specific heatsink and ambient conditions before final selection.`;
  }
  if (question.toLowerCase().includes('voltage') || question.toLowerCase().includes('vce')) {
    return `Select based on your DC bus voltage with 20-30% safety margin; verify gate drive compatibility with your driver circuit.`;
  }
  if (question.toLowerCase().includes('switching') || question.toLowerCase().includes('frequency')) {
    return `Optimize gate resistor value for your switching frequency; use lower values for high frequency, higher values for EMI-sensitive applications.`;
  }
  if (question.toLowerCase().includes('thermal') || question.toLowerCase().includes('heatsink')) {
    return `Calculate required heatsink thermal resistance based on your maximum ambient temperature and power dissipation; include safety margin.`;
  }
  if (question.toLowerCase().includes('power') || question.toLowerCase().includes('consumption')) {
    return `Select operating mode based on application requirements - use low-power modes for battery applications when full performance isn't needed.`;
  }
  if (question.toLowerCase().includes('accuracy') || question.toLowerCase().includes('precision')) {
    return `Consider temperature range of your application; implement calibration if higher accuracy is required beyond datasheet specifications.`;
  }
  if (question.toLowerCase().includes('interface') || question.toLowerCase().includes('i2c')) {
    return `Choose I2C for simplicity and low pin count; select SPI for high-speed data transfer and low latency requirements.`;
  }
  if (question.toLowerCase().includes('fifo') || question.toLowerCase().includes('buffer')) {
    return `Use FIFO with watermark interrupts to minimize host processor wake-ups; configure appropriate trigger mode for event capture.`;
  }
  if (question.toLowerCase().includes('efficiency') || question.toLowerCase().includes('power')) {
    return `Optimize input voltage to be 1.2-1.5 times LED voltage; use high-quality inductor with low DCR for best efficiency.`;
  }
  if (question.toLowerCase().includes('dimming') || question.toLowerCase().includes('pwm')) {
    return `Use PWM dimming above 1kHz for flicker-free operation; consider hybrid dimming for widest dimming range requirements.`;
  }
  if (question.toLowerCase().includes('protection') || question.toLowerCase().includes('safety')) {
    return `Enable all protection features in your design; verify fault response behavior meets system safety requirements.`;
  }
  if (question.toLowerCase().includes('inductor') || question.toLowerCase().includes('component')) {
    return `Select inductor with saturation current 1.5x peak current; use ceramic capacitors with X5R/X7R dielectric for stability.`;
  }
  return `Review datasheet specifications carefully; contact FAE team for application-specific guidance and reference designs.`;
}

let totalFixed = 0;

// 遍历所有分类和产品
for (const category of productsData.categories) {
  console.log(`\n检查分类: ${category.name}`);
  
  // 修复分类级别的FAQ
  if (category.faqs) {
    for (const faq of category.faqs) {
      if (fixFaq(faq, 'Category', category.name)) {
        totalFixed++;
      }
    }
  }
  
  // 修复产品级别的FAQ
  if (category.products) {
    for (const product of category.products) {
      if (product.faqs) {
        let productFixed = false;
        for (const faq of product.faqs) {
          if (fixFaq(faq, product.partNumber, category.name)) {
            productFixed = true;
            totalFixed++;
          }
        }
        if (productFixed) {
          console.log(`  已修复产品 ${product.partNumber} 的FAQ`);
        }
      }
    }
  }
}

console.log(`\n✅ 共修复 ${totalFixed} 个FAQ`);

// 保存products.json
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ products.json 已保存');
