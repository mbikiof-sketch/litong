/**
 * 补充Silan Smart Lighting Solution的FAQ到5-6个
 */

const fs = require('fs');
const path = require('path');

const brand = 'silan';
const dataDir = path.join(__dirname, '..', 'data', brand);
const solutionsPath = path.join(dataDir, 'solutions.json');

// 读取solutions.json
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 找到Smart Lighting Control Solution
const smartLightingSolution = solutionsData.solutions.find(sol => sol.id === 'smart-lighting-solution');

if (smartLightingSolution) {
  console.log(`当前Smart Lighting Solution有 ${smartLightingSolution.faqs?.length || 0} 个FAQ`);

  // 如果FAQ少于5个，补充到5-6个
  if (!smartLightingSolution.faqs || smartLightingSolution.faqs.length < 5) {
    const additionalFaqs = [
      {
        "question": "How does the daylight harvesting feature work?",
        "answer": "The daylight harvesting feature uses ambient light sensors to automatically adjust artificial lighting based on natural light availability: (1) Light sensing - ambient light sensor (SC7A20 or similar) measures available daylight in the space. (2) Dimming algorithm - as natural light increases, the LED driver (SD6956) gradually dims artificial lighting to maintain constant total illumination. (3) Energy savings - can reduce artificial lighting energy consumption by 30-50% during daylight hours. (4) Comfort - maintains consistent light levels for occupant comfort regardless of external conditions. (5) Calibration - system can be calibrated for target lux levels at different times of day. (6) Override - manual override available for special circumstances. This feature is particularly effective in perimeter zones with windows and skylights.",
        "decisionGuide": "Ideal for spaces with significant natural light; expect 30-50% additional energy savings.",
        "keywords": ["daylight harvesting", "ambient light", "energy savings"]
      },
      {
        "question": "What communication protocols are supported for smart home integration?",
        "answer": "The Smart Lighting Solution supports multiple communication protocols for smart home and building automation integration: (1) Bluetooth Low Energy (BLE) - direct control from smartphones and tablets using Silan's integrated BLE modules. Range: 10-30m. (2) Zigbee 3.0 - mesh networking for whole-home control, compatible with major ecosystems (Philips Hue, SmartThings, etc.). (3) Wi-Fi - direct cloud connectivity for remote control and monitoring. (4) DALI-2 - standard protocol for commercial building lighting control. (5) 0-10V analog - traditional dimming interface compatible with existing systems. (6) PWM - direct PWM control from microcontrollers. The solution can be configured with one or multiple protocols depending on application requirements. Silan provides reference designs for each protocol implementation.",
        "decisionGuide": "Choose BLE for simple smartphone control; Zigbee for whole-home systems; DALI for commercial buildings.",
        "keywords": ["communication protocols", "smart home", "BLE", "Zigbee", "DALI"]
      },
      {
        "question": "How is occupancy detection implemented in this solution?",
        "answer": "Occupancy detection in the Smart Lighting Solution uses multiple sensor technologies: (1) PIR (Passive Infrared) - detects body heat and movement. Best for general occupancy detection with 5-10m range. (2) MEMS accelerometer (SC7A20) - detects vibration and motion. Can be used for secondary confirmation or specific applications. (3) Microwave radar - more sensitive than PIR, can detect motion through obstacles. Good for bathrooms and behind fixtures. (4) Ultrasonic - detects air movement and Doppler shift. Excellent for detecting small movements like typing. (5) Sensor fusion - combining multiple sensor types reduces false triggers and improves reliability. (6) Adjustable sensitivity - detection thresholds can be configured for different applications. (7) Timeout settings - lights turn off after configurable delay (typically 5-30 minutes) after no occupancy detected.",
        "decisionGuide": "Use PIR for general applications; combine with microwave for challenging spaces; ultrasonic for office areas.",
        "keywords": ["occupancy detection", "motion sensor", "PIR", "presence detection"]
      },
      {
        "question": "What is the typical installation and commissioning process?",
        "answer": "Installation and commissioning process for Smart Lighting Solution: (1) Hardware installation - mount LED drivers and fixtures, install sensors in optimal locations (PIR: ceiling center; light sensor: near window). (2) Wiring - connect AC power to drivers, wire sensors to control module via I2C/SPI. (3) Network setup - configure wireless connection (BLE pairing or Zigbee joining) using mobile app. (4) Calibration - set target lux levels for daylight harvesting, adjust occupancy timeout, configure dimming curves. (5) Zone configuration - group lights into zones for coordinated control. (6) Scene programming - create lighting scenes for different activities (work, relax, presentation). (7) Testing - verify all functions: on/off, dimming, occupancy response, daylight response. (8) Documentation - record settings and provide user training. Typical installation time: 30-60 minutes per room for retrofit; 15-30 minutes for new construction.",
        "decisionGuide": "Plan sensor locations carefully; allow time for calibration and user training.",
        "keywords": ["installation", "commissioning", "setup", "configuration"]
      }
    ];

    // 确保faqs数组存在
    if (!smartLightingSolution.faqs) {
      smartLightingSolution.faqs = [];
    }

    // 添加新的FAQs
    smartLightingSolution.faqs.push(...additionalFaqs);

    console.log(`✅ Smart Lighting Solution FAQ已补充到 ${smartLightingSolution.faqs.length} 个`);

    // 保存solutions.json
    fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
    console.log('✅ solutions.json 已保存');
  } else {
    console.log(`✅ Smart Lighting Solution已有 ${smartLightingSolution.faqs.length} 个FAQ，满足要求`);
  }
} else {
  console.log('❌ 未找到Smart Lighting Control Solution');
}
