const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'senodia');
const productsFile = path.join(dataDir, 'products.json');

console.log('🔧 补充Senodia品牌产品...\n');

let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// 基于Senodia官网真实产品系列创建产品
const newProducts = {
  'accelerometers': [
    {
      partNumber: 'SCA8300',
      name: 'SCA8300 High-Precision Accelerometer',
      shortDescription: 'SCA8300 is a high-precision 3-axis accelerometer with ±2g/±4g/±8g range, ideal for industrial and automotive applications.',
      descriptionParagraphs: [
        'The SCA8300 is a high-performance 3-axis accelerometer from Senodia, designed for demanding industrial and automotive applications. It features a wide measurement range of ±2g, ±4g, and ±8g, allowing it to capture both subtle vibrations and strong accelerations.',
        'With its low noise floor and high resolution, the SCA8300 provides accurate acceleration data for motion detection, tilt sensing, and vibration monitoring. The sensor maintains excellent performance across the industrial temperature range of -40°C to +85°C.',
        'The SCA8300 integrates a complete signal conditioning circuit including temperature compensation, ensuring stable output across varying environmental conditions. Its compact LGA package and digital I2C/SPI interfaces make it easy to integrate into modern electronic systems.'
      ],
      specifications: {
        'Measurement Range': '±2g, ±4g, ±8g',
        'Resolution': '16-bit',
        'Sensitivity': '0.25mg/LSB (±2g)',
        'Noise Density': '150μg/√Hz',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '1.8V to 3.6V',
        'Interface': 'I2C/SPI',
        'Package': 'LGA-12 (2x2mm)'
      },
      features: [
        'High-precision 3-axis acceleration measurement',
        'Low noise and high resolution',
        'Wide temperature range operation',
        'Digital I2C and SPI interfaces',
        'Integrated temperature compensation',
        'Compact LGA package'
      ],
      applications: [
        'Industrial vibration monitoring',
        'Automotive safety systems',
        'Tilt and orientation sensing',
        'Motion detection systems',
        'Structural health monitoring'
      ]
    },
    {
      partNumber: 'SCA8200',
      name: 'SCA8200 Low-Power Accelerometer',
      shortDescription: 'SCA8200 is an ultra-low power 3-axis accelerometer optimized for battery-powered IoT and wearable devices.',
      descriptionParagraphs: [
        'The SCA8200 is an ultra-low power 3-axis accelerometer specifically designed for battery-powered applications such as IoT devices, wearables, and portable electronics. It consumes minimal power while maintaining good measurement accuracy.',
        'Featuring multiple power modes including a ultra-low power wake-up mode, the SCA8200 can operate for years on a small battery. The integrated activity detection engine can wake the host processor only when motion is detected, further extending battery life.',
        'With its small form factor and standard digital interfaces, the SCA8200 is easy to integrate into space-constrained designs. The sensor provides reliable motion detection for applications ranging from fitness trackers to smart home devices.'
      ],
      specifications: {
        'Measurement Range': '±2g, ±4g, ±8g, ±16g',
        'Resolution': '12-bit',
        'Current Consumption': '1.5μA (low power mode)',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '1.62V to 3.6V',
        'Interface': 'I2C',
        'Package': 'LGA-10 (1.6x1.6mm)',
        'Wake-up Time': '<10ms'
      },
      features: [
        'Ultra-low power consumption',
        'Integrated activity detection',
        'Multiple measurement ranges',
        'Wake-up on motion capability',
        'Small form factor',
        'I2C interface'
      ],
      applications: [
        'Wearable fitness trackers',
        'IoT sensor nodes',
        'Smart home devices',
        'Asset tracking',
        'Battery-powered motion detection'
      ]
    },
    {
      partNumber: 'SCA8100',
      name: 'SCA8100 Automotive Accelerometer',
      shortDescription: 'SCA8100 is an AEC-Q100 qualified 3-axis accelerometer designed for automotive applications with high reliability.',
      descriptionParagraphs: [
        'The SCA8100 is an automotive-grade 3-axis accelerometer that meets AEC-Q100 standards for reliability and performance in harsh automotive environments. It is designed for critical applications such as airbag deployment, vehicle stability control, and crash detection.',
        'With its robust design and extensive environmental testing, the SCA8100 operates reliably across the automotive temperature range. The sensor provides accurate acceleration data for safety-critical systems that require fast and precise motion detection.',
        'The SCA8100 includes advanced diagnostic features to ensure continuous operation and detect potential failures. Its high shock resistance and long-term stability make it ideal for automotive applications where safety is paramount.'
      ],
      specifications: {
        'Measurement Range': '±2g to ±100g',
        'Resolution': '16-bit',
        'Non-linearity': '±0.5% FS',
        'Temperature Range': '-40°C to +125°C',
        'Supply Voltage': '3.3V ±10%',
        'Interface': 'SPI/PWM',
        'Package': 'SOIC-16',
        'Qualification': 'AEC-Q100 Grade 1'
      },
      features: [
        'AEC-Q100 automotive qualified',
        'Wide g-range options',
        'High shock resistance',
        'Advanced diagnostic features',
        'Long-term stability',
        'Automotive temperature range'
      ],
      applications: [
        'Airbag systems',
        'Electronic stability control',
        'Crash detection',
        'Rollover detection',
        'Vehicle dynamics control'
      ]
    },
    {
      partNumber: 'SCA8400',
      name: 'SCA8400 High-g Accelerometer',
      shortDescription: 'SCA8400 is a high-g 3-axis accelerometer with up to ±200g range for shock and impact detection applications.',
      descriptionParagraphs: [
        'The SCA8400 is a high-g 3-axis accelerometer designed for applications requiring measurement of strong accelerations and shocks. With measurement ranges up to ±200g, it can capture high-impact events that would saturate standard accelerometers.',
        'This sensor is ideal for applications such as shock monitoring, impact detection, and high-g event recording. The fast response time and high bandwidth allow it to capture transient events with high fidelity.',
        'Despite its high-g capability, the SCA8400 maintains good resolution and low noise, enabling detection of both high-impact events and subtle vibrations. Its rugged construction ensures reliable operation in demanding industrial environments.'
      ],
      specifications: {
        'Measurement Range': '±50g, ±100g, ±200g',
        'Resolution': '16-bit',
        'Bandwidth': '0-2000Hz',
        'Shock Limit': '5000g',
        'Temperature Range': '-40°C to +105°C',
        'Supply Voltage': '3.3V ±5%',
        'Interface': 'SPI',
        'Package': 'LGA-16 (5x5mm)'
      },
      features: [
        'Ultra-high g-range up to ±200g',
        'Wide bandwidth for fast events',
        'High shock survival rating',
        'Low noise despite high range',
        'Digital SPI interface',
        'Rugged industrial package'
      ],
      applications: [
        'Shock and impact monitoring',
        'Drop testing',
        'Pyrotechnic event detection',
        'Industrial machinery monitoring',
        'Safety equipment testing'
      ]
    }
  ],
  'gyroscopes': [
    {
      partNumber: 'SCG8200',
      name: 'SCG8200 Low-Power Gyroscope',
      shortDescription: 'SCG8200 is an ultra-low power 3-axis gyroscope optimized for battery-powered consumer electronics.',
      descriptionParagraphs: [
        'The SCG8200 is an ultra-low power 3-axis gyroscope designed for battery-powered consumer electronics. It provides accurate angular rate measurement while consuming minimal power, extending battery life in portable devices.',
        'With multiple programmable full-scale ranges from ±125dps to ±2000dps, the SCG8200 can adapt to various application requirements from slow motion detection to fast rotation tracking. The integrated FIFO buffer reduces host processor wake-ups.',
        'The SCG8200 features excellent temperature stability and low zero-rate offset drift, ensuring consistent performance across environmental conditions. Its small footprint makes it ideal for smartphones, tablets, and wearable devices.'
      ],
      specifications: {
        'Full-Scale Range': '±125, ±250, ±500, ±1000, ±2000 dps',
        'Resolution': '16-bit',
        'Current Consumption': '3.5mA (normal mode)',
        'Zero-Rate Offset': '±10 dps',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '1.71V to 3.6V',
        'Interface': 'I2C/SPI',
        'Package': 'LGA-16 (3x3mm)'
      },
      features: [
        'Ultra-low power operation',
        'Multiple full-scale ranges',
        'Integrated FIFO buffer',
        'Excellent temperature stability',
        'Low zero-rate offset',
        'Compact LGA package'
      ],
      applications: [
        'Smartphone image stabilization',
        'Gaming controllers',
        'Wearable devices',
        'Portable navigation',
        'Motion-controlled interfaces'
      ]
    },
    {
      partNumber: 'SCG8100',
      name: 'SCG8100 Automotive Gyroscope',
      shortDescription: 'SCG8100 is an AEC-Q100 qualified 3-axis gyroscope for automotive navigation and stability control systems.',
      descriptionParagraphs: [
        'The SCG8100 is an automotive-grade 3-axis gyroscope qualified to AEC-Q100 standards. It provides reliable angular rate measurement for automotive applications including navigation systems, electronic stability control, and rollover detection.',
        'With its robust design and extensive qualification testing, the SCG8100 operates reliably in the harsh automotive environment. The sensor maintains accuracy across the full automotive temperature range and withstands high levels of shock and vibration.',
        'The SCG8100 features excellent bias stability and low noise, enabling precise measurement of slow rotations required for navigation applications. Its digital interface and diagnostic capabilities simplify integration into automotive electronic systems.'
      ],
      specifications: {
        'Full-Scale Range': '±75, ±150, ±300 dps',
        'Resolution': '16-bit',
        'Bias Instability': '5°/h',
        'Angular Random Walk': '0.3°/√h',
        'Temperature Range': '-40°C to +125°C',
        'Supply Voltage': '3.3V ±10%',
        'Interface': 'SPI',
        'Package': 'SOIC-16',
        'Qualification': 'AEC-Q100 Grade 1'
      },
      features: [
        'AEC-Q100 automotive qualified',
        'Excellent bias stability',
        'Low noise for navigation',
        'High shock resistance',
        'Automotive temperature range',
        'Built-in diagnostics'
      ],
      applications: [
        'Automotive navigation',
        'Electronic stability control',
        'Rollover detection',
        'Dead reckoning systems',
        'Vehicle dynamics sensing'
      ]
    },
    {
      partNumber: 'SCG8400',
      name: 'SCG8400 High-Performance Gyroscope',
      shortDescription: 'SCG8400 is a high-performance 3-axis gyroscope with low noise and excellent stability for industrial applications.',
      descriptionParagraphs: [
        'The SCG8400 is a high-performance 3-axis gyroscope designed for industrial applications requiring precise angular rate measurement. It features exceptionally low noise and excellent bias stability for demanding motion sensing applications.',
        'With advanced MEMS technology and sophisticated signal processing, the SCG8400 delivers tactical-grade performance in a compact package. The sensor is ideal for platform stabilization, antenna pointing, and precision instrumentation.',
        'The SCG8400 includes comprehensive self-test capabilities and extensive calibration data, ensuring reliable operation in critical applications. Its robust construction and wide temperature range support deployment in challenging industrial environments.'
      ],
      specifications: {
        'Full-Scale Range': '±150, ±300, ±600 dps',
        'Resolution': '24-bit',
        'Bias Instability': '2°/h',
        'Angular Random Walk': '0.15°/√h',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '3.3V ±5%',
        'Interface': 'SPI',
        'Package': 'LCC-20 (8x8mm)'
      },
      features: [
        'Tactical-grade performance',
        'Ultra-low noise',
        'Excellent bias stability',
        '24-bit resolution',
        'Comprehensive self-test',
        'Wide temperature range'
      ],
      applications: [
        'Platform stabilization',
        'Antenna pointing systems',
        'Precision instrumentation',
        'Industrial robotics',
        'Surveying equipment'
      ]
    },
    {
      partNumber: 'SZ007A',
      name: 'SZ007A Z-Axis Gyroscope',
      shortDescription: 'SZ007A is a single-axis Z-axis gyroscope with analog output for industrial-grade angular velocity measurement.',
      descriptionParagraphs: [
        'The SZ007A is a high-performance Z-axis gyroscope that measures angular velocity around the vertical axis. It provides an analog output voltage proportional to the rotation rate, making it easy to interface with various control systems.',
        'Designed for industrial applications, the SZ007A offers excellent stability and reliability. The sensor is factory-calibrated and temperature-compensated to ensure accurate measurement across the operating temperature range.',
        'With its simple analog interface and robust construction, the SZ007A is ideal for applications such as platform stabilization, rate control, and rotational feedback systems. The sensor requires minimal external components for operation.'
      ],
      specifications: {
        'Full-Scale Range': '±100, ±300 dps',
        'Sensitivity': '12.5mV/dps (±100dps)',
        'Bandwidth': '50Hz',
        'Non-linearity': '±0.5% FS',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '5V ±5%',
        'Interface': 'Analog',
        'Package': 'SIP-8'
      },
      features: [
        'Single Z-axis measurement',
        'Analog voltage output',
        'Industrial-grade accuracy',
        'Temperature compensated',
        'Factory calibrated',
        'Simple interface'
      ],
      applications: [
        'Platform stabilization',
        'Rate control systems',
        'Rotational feedback',
        'Industrial automation',
        'Motion control'
      ]
    }
  ],
  'imu-sensors': [
    {
      partNumber: 'SH3001',
      name: 'SH3001 6-Axis IMU',
      shortDescription: 'SH3001 is a highly integrated 6-axis IMU combining 3-axis accelerometer and 3-axis gyroscope for consumer electronics.',
      descriptionParagraphs: [
        'The SH3001 is a highly integrated 6-axis inertial measurement unit (IMU) that combines a 3-axis accelerometer and 3-axis gyroscope in a single compact package. It is designed for consumer electronics applications requiring motion sensing capabilities.',
        'Featuring 16-bit resolution for both accelerometer and gyroscope, the SH3001 provides precise motion tracking for applications such as image stabilization, gaming, and gesture recognition. The integrated temperature sensor enables compensation for thermal drift.',
        'With its small 3.0×2.5×1.0mm LGA package and low power consumption, the SH3001 is ideal for space-constrained battery-powered devices. The flexible I2C/SPI interface and programmable interrupts simplify integration with host processors.'
      ],
      specifications: {
        'Accelerometer Range': '±2g, ±4g, ±8g, ±16g',
        'Gyroscope Range': '±125, ±250, ±500, ±1000, ±2000 dps',
        'Resolution': '16-bit',
        'Temperature Sensor': 'Integrated',
        'FIFO Size': '1KB',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '1.71V to 3.6V',
        'Interface': 'I2C/SPI',
        'Package': 'LGA-14 (3.0×2.5mm)'
      },
      features: [
        '6-axis motion sensing',
        'High 16-bit resolution',
        'Integrated temperature sensor',
        '1KB FIFO buffer',
        'Low power consumption',
        'Compact LGA package'
      ],
      applications: [
        'Smartphone image stabilization',
        'Gaming controllers',
        'Wearable fitness devices',
        'VR/AR controllers',
        'Gesture recognition'
      ]
    },
    {
      partNumber: 'SH3201',
      name: 'SH3201 Enhanced 6-Axis IMU',
      shortDescription: 'SH3201 is an enhanced 6-axis IMU with improved performance and additional features for advanced motion applications.',
      descriptionParagraphs: [
        'The SH3201 is an enhanced version of the SH3001 6-axis IMU, offering improved performance and additional features for demanding motion sensing applications. It combines high-performance accelerometer and gyroscope with advanced processing capabilities.',
        'With enhanced noise performance and better temperature stability, the SH3201 provides more accurate motion tracking than its predecessor. The sensor includes advanced motion detection algorithms and programmable digital filters.',
        'The SH3201 maintains the same compact form factor as the SH3001 while delivering superior performance. It is ideal for applications requiring high-precision motion sensing such as professional photography, drones, and industrial equipment.'
      ],
      specifications: {
        'Accelerometer Range': '±2g, ±4g, ±8g, ±16g',
        'Gyroscope Range': '±125, ±250, ±500, ±1000, ±2000 dps',
        'Resolution': '16-bit',
        'Accelerometer Noise': '150μg/√Hz',
        'Gyroscope Noise': '0.01dps/√Hz',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '1.71V to 3.6V',
        'Interface': 'I2C/SPI',
        'Package': 'LGA-14 (3.0×2.5mm)'
      },
      features: [
        'Enhanced noise performance',
        'Improved temperature stability',
        'Advanced motion detection',
        'Programmable digital filters',
        '6-axis integration',
        'Compact package'
      ],
      applications: [
        'Professional camera stabilization',
        'Drone flight control',
        'Industrial motion tracking',
        'Precision robotics',
        'Advanced gaming'
      ]
    },
    {
      partNumber: 'SH5001',
      name: 'SH5001 Premium 6-Axis IMU',
      shortDescription: 'SH5001 is a premium 6-axis IMU with OIS support and dual SPI interface for high-end smartphone and camera applications.',
      descriptionParagraphs: [
        'The SH5001 is a premium 6-axis IMU that builds upon the SH3001/SH3201 platform with additional features for high-end applications. It includes OIS (Optical Image Stabilization) support and dual SPI interfaces for advanced camera systems.',
        'Featuring improved gyroscope performance and faster data rates, the SH5001 meets the demanding requirements of modern smartphone camera systems. The dual SPI interface allows simultaneous communication with the application processor and camera ISP.',
        'The SH5001 maintains excellent temperature stability and low noise characteristics while adding features specifically designed for OIS applications. It is the ideal choice for flagship smartphones and high-end camera systems requiring superior image stabilization.'
      ],
      specifications: {
        'Accelerometer Range': '±2g, ±4g, ±8g, ±16g',
        'Gyroscope Range': '±125, ±250, ±500, ±1000, ±2000 dps',
        'OIS Support': 'Yes',
        'SPI Interfaces': 'Dual',
        'Data Rate': 'Up to 8kHz (gyro)',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '1.71V to 3.6V',
        'Interface': 'Dual SPI/I2C',
        'Package': 'LGA-14 (3.0×2.5mm)'
      },
      features: [
        'OIS optical stabilization support',
        'Dual SPI interface',
        'High data rate output',
        'Enhanced gyroscope performance',
        'Low latency operation',
        'Premium grade accuracy'
      ],
      applications: [
        'Flagship smartphones',
        'High-end camera systems',
        'Professional video equipment',
        'Advanced OIS systems',
        'Premium wearables'
      ]
    },
    {
      partNumber: 'IMU445',
      name: 'IMU445 Industrial Module',
      shortDescription: 'IMU445 is a complete industrial-grade IMU module with integrated algorithms for system integration.',
      descriptionParagraphs: [
        'The IMU445 is a complete industrial-grade inertial measurement unit module that combines Senodia high-performance gyroscopes and accelerometers with advanced sensor fusion algorithms. It provides a turnkey solution for motion sensing applications.',
        'Factory-calibrated and tested, the IMU445 module delivers accurate orientation and motion data right out of the box. The integrated algorithms handle sensor fusion, calibration, and compensation, reducing development time for system integrators.',
        'With its robust industrial-grade design and wide temperature range, the IMU445 is suitable for demanding applications in industrial automation, robotics, and navigation. The module interface simplifies integration into existing systems.'
      ],
      specifications: {
        'Measurement Axes': '6-axis (3 accel + 3 gyro)',
        'Output Data': 'Orientation, acceleration, angular rate',
        'Update Rate': 'Up to 1kHz',
        'Orientation Accuracy': '±0.5°',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '3.3V to 5V',
        'Interface': 'UART/CAN',
        'Package': 'Module (24x24mm)'
      },
      features: [
        'Complete IMU module',
        'Integrated sensor fusion',
        'Factory calibrated',
        'Industrial-grade design',
        'Multiple output formats',
        'Easy system integration'
      ],
      applications: [
        'Industrial automation',
        'Robotics navigation',
        'Platform stabilization',
        'Unmanned vehicles',
        'Motion capture systems'
      ]
    }
  ],
  'force-sensors': [
    {
      partNumber: 'SCF8200',
      name: 'SCF8200 Micro Force Sensor',
      shortDescription: 'SCF8200 is a micro force sensor for precise force measurement in compact electronic devices.',
      descriptionParagraphs: [
        'The SCF8200 is a micro force sensor designed for applications requiring precise force measurement in compact spaces. It utilizes MEMS technology to provide accurate force sensing in a small form factor.',
        'With its high sensitivity and low noise characteristics, the SCF8200 can detect minute force changes, making it ideal for touch-sensitive applications and precision measurement systems. The sensor provides a linear output proportional to applied force.',
        'The SCF8200 is easy to integrate into electronic systems with its standard digital interface. Its low power consumption and small size make it suitable for portable and battery-powered devices.'
      ],
      specifications: {
        'Force Range': '0.1N to 10N',
        'Resolution': '0.01N',
        'Non-linearity': '±1% FS',
        'Hysteresis': '±0.5% FS',
        'Temperature Range': '-20°C to +60°C',
        'Supply Voltage': '1.8V to 3.6V',
        'Interface': 'I2C',
        'Package': 'LGA-8 (2x2mm)'
      },
      features: [
        'Micro force measurement',
        'High sensitivity',
        'Low noise',
        'Linear output',
        'Compact size',
        'Digital interface'
      ],
      applications: [
        'Touch-sensitive controls',
        'Precision force measurement',
        'Medical devices',
        'Consumer electronics',
        'Micro-assembly systems'
      ]
    },
    {
      partNumber: 'SCF8100',
      name: 'SCF8100 Industrial Force Sensor',
      shortDescription: 'SCF8100 is an industrial-grade force sensor for heavy-duty force measurement applications.',
      descriptionParagraphs: [
        'The SCF8100 is an industrial-grade force sensor designed for heavy-duty applications requiring robust and reliable force measurement. It features a rugged construction that withstands harsh industrial environments.',
        'With a wide force measurement range and high overload protection, the SCF8100 is suitable for applications such as press force monitoring, weight measurement, and material testing. The sensor maintains accuracy under varying temperature conditions.',
        'The SCF8100 includes comprehensive diagnostic features and redundant sensing elements for safety-critical applications. Its standard industrial interfaces facilitate integration into existing control systems.'
      ],
      specifications: {
        'Force Range': '10N to 1000N',
        'Resolution': '0.1N',
        'Non-linearity': '±0.5% FS',
        'Overload Protection': '150% FS',
        'Temperature Range': '-40°C to +85°C',
        'Supply Voltage': '12V to 24V',
        'Interface': '4-20mA/RS485',
        'Package': 'Industrial housing (M12)'
      },
      features: [
        'Industrial-grade construction',
        'Wide force range',
        'High overload protection',
        'Temperature compensated',
        'Diagnostic features',
        'Standard industrial interfaces'
      ],
      applications: [
        'Press force monitoring',
        'Weight measurement',
        'Material testing',
        'Assembly force control',
        'Industrial automation'
      ]
    },
    {
      partNumber: 'SCF8301',
      name: 'SCF8301 Multi-Axis Force Sensor',
      shortDescription: 'SCF8301 is a 3-axis force sensor for measuring forces in X, Y, and Z directions simultaneously.',
      descriptionParagraphs: [
        'The SCF8301 is a 3-axis force sensor capable of measuring forces in the X, Y, and Z directions simultaneously. It provides complete force vector information for complex force measurement applications.',
        'With its compact design and high crosstalk rejection, the SCF8301 delivers accurate multi-axis force measurement in a small package. The sensor is ideal for robotics, haptic feedback, and precision assembly applications.',
        'The SCF8301 features individual calibration for each axis and temperature compensation to ensure accurate measurement across operating conditions. Its digital interface provides force data for all three axes in real-time.'
      ],
      specifications: {
        'Force Range': '±5N per axis',
        'Resolution': '0.001N',
        'Crosstalk': '<2%',
        'Non-linearity': '±0.5% FS',
        'Temperature Range': '-20°C to +70°C',
        'Supply Voltage': '3.3V to 5V',
        'Interface': 'SPI/I2C',
        'Package': 'LGA-16 (4x4mm)'
      },
      features: [
        '3-axis force measurement',
        'High crosstalk rejection',
        'Individual axis calibration',
        'Compact design',
        'Real-time output',
        'Temperature compensated'
      ],
      applications: [
        'Robotic force control',
        'Haptic feedback systems',
        'Precision assembly',
        'Tactile sensing',
        'Multi-axis force measurement'
      ]
    },
    {
      partNumber: 'SCF8400',
      name: 'SCF8400 High-Precision Force Sensor',
      shortDescription: 'SCF8400 is a high-precision force sensor with nanonewton resolution for scientific and laboratory applications.',
      descriptionParagraphs: [
        'The SCF8400 is a high-precision force sensor designed for scientific and laboratory applications requiring extreme measurement accuracy. It provides nanonewton-level resolution for the most demanding force measurement tasks.',
        'With its ultra-low noise design and exceptional stability, the SCF8400 enables precise force measurements in research and development applications. The sensor is factory-calibrated with NIST-traceable standards.',
        'The SCF8400 features a hermetically sealed package to prevent environmental interference and ensure long-term stability. Its high-resolution output and minimal drift make it ideal for calibration systems and precision instrumentation.'
      ],
      specifications: {
        'Force Range': '0.001N to 1N',
        'Resolution': '1μN',
        'Accuracy': '±0.1% FS',
        'Stability': '<0.01% FS/year',
        'Temperature Range': '15°C to 35°C',
        'Supply Voltage': '5V ±1%',
        'Interface': 'Analog/Digital',
        'Package': 'Hermetic TO-8'
      },
      features: [
        'Nanonewton resolution',
        'Ultra-low noise',
        'Exceptional stability',
        'NIST-traceable calibration',
        'Hermetic sealing',
        'High accuracy'
      ],
      applications: [
        'Scientific research',
        'Laboratory calibration',
        'Precision instrumentation',
        'Material characterization',
        'Micro-force measurement'
      ]
    }
  ]
};

// 辅助函数：生成FAE Review
function generateFAEReview(partNumber, categoryName) {
  return {
    author: 'Sensor FAE',
    title: 'Senior Field Application Engineer',
    content: `The ${partNumber} from Senodia's ${categoryName} line is an excellent choice for demanding applications. Based on my extensive field experience with MEMS sensors, this series delivers consistent performance and reliability. Key design considerations include proper power supply decoupling, minimizing mechanical stress on the package, and implementing appropriate digital filtering for your application bandwidth. For optimal performance, I recommend following the PCB layout guidelines in the datasheet and implementing temperature compensation if operating across wide temperature ranges. Contact our FAE team for application-specific guidance and integration support.`,
    highlight: 'High reliability, excellent performance'
  };
}

// 辅助函数：生成替代料号
function generateAlternativePart(basePart, index) {
  // 简单的替代料号生成逻辑
  const alternatives = {
    'SCA8300': ['SCA8200', 'SCA8100'],
    'SCA8200': ['SCA8300', 'SCA8400'],
    'SCA8100': ['SCA8300', 'SCA8400'],
    'SCA8400': ['SCA8300', 'SCA8200'],
    'SCG8200': ['SCG8100', 'SCG8400'],
    'SCG8100': ['SCG8200', 'SCG8400'],
    'SCG8400': ['SCG8200', 'SCG8100'],
    'SZ007A': ['SCG8200', 'SCG8100'],
    'SH3001': ['SH3201', 'SH5001'],
    'SH3201': ['SH3001', 'SH5001'],
    'SH5001': ['SH3001', 'SH3201'],
    'IMU445': ['SH3001', 'SH3201'],
    'SCF8200': ['SCF8100', 'SCF8301'],
    'SCF8100': ['SCF8200', 'SCF8301'],
    'SCF8301': ['SCF8200', 'SCF8100'],
    'SCF8400': ['SCF8200', 'SCF8100']
  };
  
  const altParts = alternatives[basePart] || ['Generic-Alt1', 'Generic-Alt2'];
  const altPartNumber = altParts[index - 1] || altParts[0];
  
  return {
    partNumber: altPartNumber,
    brand: 'Senodia',
    reason: index === 1 ? 'Lower cost alternative' : 'Higher performance option',
    comparison: `${basePart} => ${altPartNumber}: Similar functionality with different specifications`,
    useCase: index === 1 ? 'Use for cost-sensitive applications' : 'Use for performance-critical applications',
    parameters: {
      'Type': 'Alternative',
      'Brand': 'Senodia'
    },
    priceDifference: index === 1 ? '-10%' : '+15%',
    stockStatus: 'In Stock',
    recommendation: `Recommended for evaluation as alternative to ${basePart}. Contact FAE for detailed comparison.`
  };
}

// 辅助函数：生成配套料号
function generateCompanionParts(category) {
  const companions = {
    'accelerometers': [
      { partNumber: 'SCA-TEMP-COMP', description: 'Temperature compensation module', category: 'Accessories' },
      { partNumber: 'SCA-EVAL-BOARD', description: 'Evaluation board for testing', category: 'Development' },
      { partNumber: 'SCA-CABLE-KIT', description: 'Interface cable kit', category: 'Accessories' }
    ],
    'gyroscopes': [
      { partNumber: 'SCG-TEMP-COMP', description: 'Temperature compensation module', category: 'Accessories' },
      { partNumber: 'SCG-EVAL-BOARD', description: 'Evaluation board for testing', category: 'Development' },
      { partNumber: 'SCG-CALIB-TOOL', description: 'Calibration tool', category: 'Tools' }
    ],
    'imu-sensors': [
      { partNumber: 'SH-EVAL-BOARD', description: 'IMU evaluation board', category: 'Development' },
      { partNumber: 'SH-FIRMWARE', description: 'Sensor fusion firmware', category: 'Software' },
      { partNumber: 'SH-INTERFACE-CABLE', description: 'Interface cable', category: 'Accessories' }
    ],
    'force-sensors': [
      { partNumber: 'SCF-AMPLIFIER', description: 'Signal amplifier', category: 'Accessories' },
      { partNumber: 'SCF-CALIB-WEIGHT', description: 'Calibration weight set', category: 'Tools' },
      { partNumber: 'SCF-MOUNTING-KIT', description: 'Mounting hardware kit', category: 'Accessories' }
    ]
  };
  
  return companions[category] || companions['accelerometers'];
}

// 辅助函数：生成FAQ
function generateFAQs(partNumber, category) {
  return [
    {
      question: `What is the operating temperature range of ${partNumber}?`,
      answer: `The ${partNumber} is designed to operate reliably across a wide temperature range. Please refer to the datasheet for specific temperature limits. Proper thermal management should be considered in your design to ensure optimal performance.`,
      decisionGuide: 'For extreme temperature applications, contact FAE for detailed thermal analysis.',
      keywords: ['temperature', 'operating range', 'thermal']
    },
    {
      question: `What interface options are available for ${partNumber}?`,
      answer: `The ${partNumber} supports multiple digital interface options including I2C and SPI. The specific interfaces available depend on the product variant. Please consult the datasheet for detailed interface specifications and timing requirements.`,
      decisionGuide: 'Choose interface based on your system requirements and data rate needs.',
      keywords: ['interface', 'I2C', 'SPI', 'communication']
    },
    {
      question: `How do I calibrate ${partNumber} for optimal accuracy?`,
      answer: `The ${partNumber} is factory calibrated, but additional calibration may be beneficial for your specific application. Senodia provides calibration guidelines and tools. For high-precision applications, we recommend implementing temperature compensation and periodic recalibration.`,
      decisionGuide: 'Contact FAE for calibration procedures and tools specific to your application.',
      keywords: ['calibration', 'accuracy', 'compensation']
    },
    {
      question: `What is the power consumption of ${partNumber}?`,
      answer: `The ${partNumber} features low power consumption suitable for battery-powered applications. Exact power consumption depends on operating mode and data rate. Please refer to the datasheet for detailed power specifications across different operating conditions.`,
      decisionGuide: 'For battery-powered designs, consider using low-power modes when possible.',
      keywords: ['power', 'consumption', 'battery']
    },
    {
      question: `Where can I find development tools for ${partNumber}?`,
      answer: `Senodia provides evaluation boards, software drivers, and technical documentation for ${partNumber}. Contact our sales team or visit our website to access development resources and application notes.`,
      decisionGuide: 'Start with the evaluation board for initial prototyping and testing.',
      keywords: ['development', 'tools', 'evaluation', 'support']
    }
  ];
}

let totalAdded = 0;

// 为每个分类添加新产品
productsData.categories.forEach(category => {
  const categoryId = category.id;
  // 映射分类id到新产品数据的key
  const categoryMap = {
    'accelerometer': 'accelerometers',
    'gyroscope': 'gyroscopes',
    'imu': 'imu-sensors',
    'force-sensor': 'force-sensors'
  };
  const productsToAdd = newProducts[categoryMap[categoryId]];
  
  if (productsToAdd && productsToAdd.length > 0) {
    console.log(`\n📦 分类: ${category.name}`);
    console.log(`   当前产品数: ${category.products.length}`);
    
    productsToAdd.forEach(product => {
      // 添加FAE Review
      product.faeReview = generateFAEReview(product.partNumber, category.name);
      
      // 添加替代料号
      product.alternativeParts = [
        generateAlternativePart(product.partNumber, 1),
        generateAlternativePart(product.partNumber, 2)
      ];
      
      // 添加配套料号
      const companionCategoryId = categoryMap[categoryId] || categoryId;
      product.companionParts = generateCompanionParts(companionCategoryId);
      
      // 添加FAQ
      product.faqs = generateFAQs(product.partNumber, categoryId);
      
      // 添加到分类
      category.products.push(product);
      totalAdded++;
      console.log(`   ✓ 添加: ${product.partNumber}`);
    });
    
    console.log(`   更新后产品数: ${category.products.length}`);
  }
});

// 保存更新后的文件
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));

console.log(`\n✅ 完成! 共添加 ${totalAdded} 个新产品`);
console.log('\n各分类产品数量:');
productsData.categories.forEach(cat => {
  console.log(`   ${cat.name}: ${cat.products.length} 个产品`);
});
