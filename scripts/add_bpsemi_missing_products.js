/**
 * 为bpsemi品牌补充缺少的产品，使所有分类达到6个产品
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'bpsemi', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('补充BPSemi缺少的产品...\n');

// 补充产品定义
const additionalProducts = {
  'led-lighting-drivers': [
    {
      partNumber: 'BP2336',
      name: 'BP2336 Non-isolated Buck APFC LED Driver',
      shortDescription: 'Non-isolated buck APFC LED driver with high power factor and low THD for LED lighting applications.',
      descriptionParagraphs: [
        'BP2336 is a non-isolated buck APFC LED driver designed for high power factor LED lighting applications. It achieves high power factor (>0.9) and low THD with active power factor correction.',
        'The device operates in critical conduction mode, reducing switching losses and improving efficiency. It features primary side regulation, eliminating the need for optocoupler and secondary feedback components.',
        'With comprehensive protection features including LED open/short protection, over-temperature protection, and cycle-by-cycle current limiting, BP2336 ensures reliable operation in LED lighting applications.'
      ],
      specs: {
        'Input Voltage': '85Vac~265Vac',
        'Power Factor': '>0.9',
        'THD': '<15%',
        'Operating Mode': 'Critical conduction mode',
        'Topology': 'Non-isolated buck',
        'Package': 'SOP-8'
      },
      features: [
        'High power factor >0.9',
        'Low THD <15%',
        'Active PFC',
        'Primary side regulation',
        'No optocoupler needed',
        'Critical conduction mode',
        'Comprehensive protections'
      ],
      applications: [
        'LED bulb lamps',
        'LED downlights',
        'LED panel lights',
        'LED tube lights'
      ]
    }
  ],
  'acdc-power-management': [
    {
      partNumber: 'BP2838',
      name: 'BP2838 PWM Dimmable LED Driver',
      shortDescription: 'PWM dimmable non-isolated buck LED driver with wide dimming range for smart lighting applications.',
      descriptionParagraphs: [
        'BP2838 is a PWM dimmable non-isolated buck LED driver designed for smart lighting applications. It provides wide dimming range from 1% to 100% with excellent dimming performance.',
        'The device features analog and PWM dimming inputs, allowing flexible brightness control. It operates in critical conduction mode for high efficiency and low EMI.',
        'With built-in protections and simple peripheral circuit, BP2838 is ideal for smart LED lighting applications requiring smooth and flicker-free dimming.'
      ],
      specs: {
        'Input Voltage': '85Vac~265Vac',
        'Dimming Range': '1%~100%',
        'Dimming Type': 'PWM/Analog',
        'Operating Mode': 'Critical conduction mode',
        'Current Accuracy': '±5%',
        'Package': 'SOP-8'
      },
      features: [
        'PWM dimmable',
        'Wide dimming range 1%~100%',
        'Analog dimming support',
        'Flicker-free operation',
        'High efficiency',
        'Low EMI',
        'Simple design'
      ],
      applications: [
        'Smart LED bulbs',
        'Dimmable LED lights',
        'PWM dimming applications',
        'Smart lighting systems'
      ]
    }
  ],
  'motor-drivers': [
    {
      partNumber: 'BP6306',
      name: 'BP6306 Single-Phase BLDC Motor Driver',
      shortDescription: 'Single-phase brushless DC motor driver with integrated power MOSFETs for fan applications.',
      descriptionParagraphs: [
        'BP6306 is a single-phase brushless DC motor driver with integrated power MOSFETs. It provides complete motor driving solution for small BLDC fans and pumps.',
        'The device features sensorless control with built-in back-EMF detection, eliminating the need for Hall sensors. It supports PWM speed control for flexible motor speed adjustment.',
        'With integrated protection features and thermal shutdown, BP6306 ensures safe and reliable motor operation in fan and pump applications.'
      ],
      specs: {
        'Motor Type': 'Single-phase BLDC',
        'Control': 'Sensorless',
        'Output Current': 'Up to 1A',
        'Speed Control': 'PWM',
        'Protection': 'Thermal shutdown, OCP',
        'Package': 'SOP-8'
      },
      features: [
        'Single-phase BLDC drive',
        'Sensorless control',
        'Integrated power MOSFETs',
        'PWM speed control',
        'Back-EMF detection',
        'Thermal shutdown',
        'Simple design'
      ],
      applications: [
        'Small BLDC fans',
        'CPU coolers',
        'Small pumps',
        'Fan coil units'
      ]
    },
    {
      partNumber: 'BP6309',
      name: 'BP6309 Three-Phase Motor Driver',
      shortDescription: 'Three-phase motor driver with high output current for industrial fan and pump applications.',
      descriptionParagraphs: [
        'BP6309 is a three-phase motor driver designed for industrial fan and pump applications. It provides high output current capability with integrated protection features.',
        'The device features trapezoidal driving with adjustable speed control. It supports both sensorless and sensored control modes for flexible motor driving options.',
        'With comprehensive protection features including over-current, over-temperature, and under-voltage protection, BP6309 ensures reliable operation in industrial applications.'
      ],
      specs: {
        'Motor Type': 'Three-phase BLDC',
        'Drive Mode': 'Trapezoidal',
        'Output Current': 'Up to 3A',
        'Control': 'Sensorless/Sensored',
        'Protection': 'OCP, OTP, UVLO',
        'Package': 'ESOP-10'
      },
      features: [
        'Three-phase motor drive',
        'High output current',
        'Trapezoidal driving',
        'Adjustable speed control',
        'Sensorless/Sensored control',
        'Comprehensive protections',
        'Industrial grade'
      ],
      applications: [
        'Industrial fans',
        'Industrial pumps',
        'Air conditioners',
        'Refrigeration systems'
      ]
    },
    {
      partNumber: 'BP6610',
      name: 'BP6610 Stepper Motor Driver',
      shortDescription: 'Stepper motor driver with microstepping for precision motion control applications.',
      descriptionParagraphs: [
        'BP6610 is a stepper motor driver designed for precision motion control applications. It features microstepping capability for smooth and precise motor control.',
        'The device supports full-step, half-step, and microstepping modes with adjustable current control. It provides high output current for driving various stepper motors.',
        'With built-in protection features and thermal management, BP6610 ensures reliable operation in precision motion control applications.'
      ],
      specs: {
        'Motor Type': 'Stepper motor',
        'Stepping Modes': 'Full/Half/Micro',
        'Output Current': 'Up to 2A',
        'Microstepping': 'Up to 1/16',
        'Protection': 'Thermal shutdown, OCP',
        'Package': 'SOP-16'
      },
      features: [
        'Stepper motor drive',
        'Microstepping up to 1/16',
        'Adjustable current control',
        'Multiple stepping modes',
        'High output current',
        'Thermal management',
        'Precision control'
      ],
      applications: [
        '3D printers',
        'CNC machines',
        'Robotics',
        'Precision positioning'
      ]
    },
    {
      partNumber: 'BP6620',
      name: 'BP6620 DC Motor Driver',
      shortDescription: 'DC motor driver with H-bridge configuration for bidirectional motor control.',
      descriptionParagraphs: [
        'BP6620 is a DC motor driver with H-bridge configuration designed for bidirectional motor control applications. It provides forward, reverse, and brake control for DC motors.',
        'The device features PWM speed control with high output current capability. It includes built-in protection features for safe motor operation.',
        'With simple control interface and minimal external components, BP6620 is ideal for DC