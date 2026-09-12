#!/usr/bin/env node

/**
 * Add missing products to HCI brand to meet the requirement of 6 products per category
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hci');
const productsFile = path.join(dataDir, 'products.json');

const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// New products to add for each category
const newProducts = {
  'power-management': [
    {
      partNumber: 'HCI-PM005',
      name: 'Power Management HCI-PM005',
      shortDescription: 'Ultra-low quiescent current LDO regulator ideal for battery-powered IoT devices with excellent transient response.',
      descriptionParagraphs: [
        'The HCI-PM005 is an ultra-low quiescent current LDO regulator designed specifically for battery-powered IoT applications.',
        'With quiescent current as low as 1µA and excellent load transient response, it maximizes battery life while maintaining stable output.',
        'The device features enable pin control, thermal shutdown, and current limit protection in a compact SOT-23 package.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'Based on extensive field experience with battery-powered designs, this LDO delivers exceptional performance. The ultra-low quiescent current significantly extends battery life in IoT sensors and wearable devices. Customers consistently report meeting their aggressive power budgets with this device.',
        highlight: '1µA quiescent current, ideal for IoT'
      },
      alternativeParts: [
        {
          partNumber: 'TPS7A02',
          brand: 'Texas Instruments',
          specifications: {
            'Input Voltage': '1.5V-6.0V',
            'Output Current': '200mA',
            'Quiescent Current': '1µA',
            'Package': 'SOT-23'
          },
          comparison: 'HCI-PM005 => TPS7A02 => TI offers lower noise and better PSRR',
          reason: 'TPS7A02 provides ultra-low noise performance for sensitive analog circuits',
          useCase: 'Use TPS7A02 for noise-sensitive sensor applications requiring ultra-low power'
        },
        {
          partNumber: 'AP2112',
          brand: 'Diodes Inc',
          specifications: {
            'Input Voltage': '2.5V-6.0V',
            'Output Current': '300mA',
            'Quiescent Current': '55µA',
            'Package': 'SOT-23'
          },
          comparison: 'HCI-PM005 => AP2112 => Diodes Inc offers higher current with cost advantage',
          reason: 'AP2112 provides cost-effective solution with good performance',
          useCase: 'Use AP2112 for cost-sensitive consumer electronics'
        }
      ],
      companionParts: [
        { partNumber: 'CAP-1uF', description: 'Input bypass capacitor', category: 'Components' },
        { partNumber: 'CAP-2.2uF', description: 'Output stabilization capacitor', category: 'Components' },
        { partNumber: 'RES-100K', description: 'Enable pin pull-up resistor', category: 'Components' }
      ],
      slug: 'hci-pm005',
      specifications: {
        'Input Voltage': '2.0V-5.5V',
        'Output Voltage': '1.2V-3.3V',
        'Output Current': '200mA',
        'Quiescent Current': '1µA',
        'Dropout Voltage': '250mV@200mA',
        'PSRR': '60dB@1kHz',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'SOT-23-5'
      },
      faqs: [
        {
          question: 'What makes HCI-PM005 ideal for battery-powered applications?',
          answer: 'The HCI-PM005 features ultra-low quiescent current of just 1µA, which minimizes battery drain during standby. Combined with excellent transient response and compact package, it is perfect for IoT sensors, wearables, and other battery-powered devices where every microamp counts.',
          decisionGuide: 'Choose HCI-PM005 when battery life is critical in your design.',
          keywords: ['battery life', 'quiescent current', 'IoT']
        },
        {
          question: 'What is the dropout voltage of HCI-PM005?',
          answer: 'The HCI-PM005 has a typical dropout voltage of 250mV at 200mA load current. This low dropout allows the regulator to maintain regulation even when the input voltage is close to the output voltage, maximizing usable battery capacity.',
          decisionGuide: 'Low dropout voltage maximizes battery utilization.',
          keywords: ['dropout voltage', 'efficiency', 'battery']
        },
        {
          question: 'Does HCI-PM005 support enable pin control?',
          answer: 'Yes, HCI-PM005 includes an enable pin that allows the system to shut down the regulator when not needed, reducing quiescent current to less than 0.1µA in shutdown mode. This feature is essential for power cycling in battery-powered applications.',
          decisionGuide: 'Use enable pin for power management in battery applications.',
          keywords: ['enable pin', 'shutdown', 'power management']
        },
        {
          question: 'What protection features does HCI-PM005 include?',
          answer: 'HCI-PM005 includes comprehensive protection features: thermal shutdown to prevent damage from overheating, current limit protection to prevent damage during short circuits, and reverse current protection. These features ensure reliable operation in various conditions.',
          decisionGuide: 'Built-in protection ensures reliable operation.',
          keywords: ['protection', 'thermal shutdown', 'current limit']
        },
        {
          question: 'What is the recommended PCB layout for HCI-PM005?',
          answer: 'For optimal performance: Place input and output capacitors close to the device pins, use short traces for power connections, implement adequate copper area for heat dissipation, and keep the enable pin trace away from noise sources. Refer to the application note for detailed layout guidelines.',
          decisionGuide: 'Follow layout guidelines for best performance and stability.',
          keywords: ['PCB layout', 'capacitors', 'thermal']
        },
        {
          question: 'Can I use HCI-PM005 for automotive applications?',
          answer: 'HCI-PM005 is rated for -40°C to +85°C operation, making it suitable for many automotive applications. However, for safety-critical automotive systems, please consult our FAE team to ensure compliance with specific automotive standards and requirements.',
          decisionGuide: 'Consult FAE for automotive qualification requirements.',
          keywords: ['automotive', 'temperature range', 'qualification']
        }
      ]
    },
    {
      partNumber: 'HCI-PM006',
      name: 'Power Management HCI-PM006',
      shortDescription: 'High-efficiency synchronous boost converter with integrated power switch and programmable current limit for portable devices.',
      descriptionParagraphs: [
        'The HCI-PM006 is a high-efficiency synchronous boost converter designed for portable electronics powered by single-cell batteries.',
        'With integrated low-RDS(on) power switches and programmable current limit, it delivers up to 95% efficiency while protecting the system.',
        'The device supports input voltages from 0.9V to 5.5V, making it ideal for applications ranging from single-cell alkaline to Li-Ion batteries.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'This boost converter is my go-to recommendation for single-cell battery applications. The integrated synchronous rectification eliminates the need for external diodes, reducing BOM cost and improving efficiency. The programmable current limit is particularly useful for protecting battery cells.',
        highlight: '95% efficiency, integrated synchronous rectification'
      },
      alternativeParts: [
        {
          partNumber: 'TPS61022',
          brand: 'Texas Instruments',
          specifications: {
            'Input Voltage': '0.9V-5.5V',
            'Output Voltage': 'Up to 5.5V',
            'Output Current': '6A',
            'Efficiency': 'Up to 96%'
          },
          comparison: 'HCI-PM006 => TPS61022 => TI offers higher output current capability',
          reason: 'TPS61022 provides industry-leading efficiency with high current capability',
          useCase: 'Use TPS61022 for high-power portable applications'
        },
        {
          partNumber: 'LTC3103',
          brand: 'Analog Devices',
          specifications: {
            'Input Voltage': '1.8V-5.5V',
            'Output Voltage': 'Up to 5.5V',
            'Output Current': '1A',
            'Features': 'Burst Mode operation'
          },
          comparison: 'HCI-PM006 => LTC3103 => ADI offers Burst Mode for light load efficiency',
          reason: 'LTC3103 provides excellent light-load efficiency with Burst Mode',
          useCase: 'Use LTC3103 for applications with varying load conditions'
        }
      ],
      companionParts: [
        { partNumber: 'IND-4.7uH', description: 'Power inductor', category: 'Components' },
        { partNumber: 'CAP-22uF', description: 'Output capacitor', category: 'Components' },
        { partNumber: 'RES-10K', description: 'Current limit programming', category: 'Components' }
      ],
      slug: 'hci-pm006',
      specifications: {
        'Input Voltage': '0.9V-5.5V',
        'Output Voltage': '1.8V-5.5V',
        'Output Current': '2A',
        'Efficiency': 'Up to 95%',
        'Switching Frequency': '1.2MHz',
        'Current Limit': 'Programmable',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'QFN-16'
      },
      faqs: [
        {
          question: 'What is the minimum input voltage for HCI-PM006?',
          answer: 'HCI-PM006 can operate with input voltages as low as 0.9V, making it ideal for single-cell alkaline or NiMH battery applications. This wide input range allows the device to extract maximum energy from the battery before it is fully discharged.',
          decisionGuide: 'Minimum 0.9V input enables single-cell battery operation.',
          keywords: ['input voltage', 'single cell', 'battery']
        },
        {
          question: 'What is the maximum output current of HCI-PM006?',
          answer: 'HCI-PM006 can deliver up to 2A output current, depending on the input-output voltage ratio. At higher step-up ratios, the available output current decreases. Refer to the datasheet for detailed derating curves based on your specific operating conditions.',
          decisionGuide: 'Maximum 2A output with voltage-ratio derating.',
          keywords: ['output current', 'power', 'derating']
        },
        {
          question: 'How does the programmable current limit work?',
          answer: 'The current limit is programmed using an external resistor connected to the ILIM pin. This allows designers to set the maximum inductor current, protecting the battery from excessive current draw and allowing optimization for specific battery types and application requirements.',
          decisionGuide: 'Program current limit to match battery capabilities.',
          keywords: ['current limit', 'programming', 'protection']
        },
        {
          question: 'What is the switching frequency of HCI-PM006?',
          answer: 'HCI-PM006 operates at a fixed 1.2MHz switching frequency, allowing the use of small external components while maintaining good efficiency. The high frequency enables compact designs with minimal board area for portable applications.',
          decisionGuide: '1.2MHz frequency enables compact component selection.',
          keywords: ['switching frequency', 'components', 'compact']
        },
        {
          question: 'Can HCI-PM006 operate in pass-through mode?',
          answer: 'Yes, when the input voltage is higher than the regulated output voltage, HCI-PM006 enters pass-through mode where the high-side switch remains on continuously. This maximizes efficiency by eliminating switching losses when boost operation is not required.',
          decisionGuide: 'Pass-through mode maximizes efficiency at high input voltages.',
          keywords: ['pass-through', 'efficiency', 'operation mode']
        },
        {
          question: 'What inductor value is recommended for HCI-PM006?',
          answer: 'A 4.7µH inductor is recommended for most applications. The inductor should have a saturation current rating higher than the programmed current limit. For very light loads, a larger inductor may improve efficiency, while smaller inductors enable more compact designs.',
          decisionGuide: '4.7µH inductor recommended with adequate saturation current.',
          keywords: ['inductor', 'component selection', 'design']
        }
      ]
    }
  ],
  'analog-ics': [
    {
      partNumber: 'HCI-AN005',
      name: 'Analog ICs HCI-AN005',
      shortDescription: 'Precision low-noise operational amplifier with rail-to-rail input/output and ultra-low offset voltage for sensor signal conditioning.',
      descriptionParagraphs: [
        'The HCI-AN005 is a precision low-noise operational amplifier designed for high-accuracy sensor signal conditioning applications.',
        'Featuring rail-to-rail input and output, ultra-low offset voltage of 5µV, and low noise density of 8nV/√Hz, it delivers exceptional precision.',
        'The device operates from 2.7V to 5.5V supplies, making it suitable for both battery-powered and industrial applications.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'This op-amp is exceptional for precision sensor applications. The combination of ultra-low offset and low noise makes it ideal for strain gauge and thermocouple amplification. I have used it successfully in medical instrumentation and industrial sensor designs with excellent results.',
        highlight: '5µV offset, 8nV/√Hz noise, rail-to-rail'
      },
      alternativeParts: [
        {
          partNumber: 'OPA333',
          brand: 'Texas Instruments',
          specifications: {
            'Offset Voltage': '2µV',
            'Noise': '55nV/√Hz',
            'Bandwidth': '350kHz',
            'Supply': '1.8V-5.5V'
          },
          comparison: 'HCI-AN005 => OPA333 => TI offers lower offset but higher noise',
          reason: 'OPA333 provides zero-drift architecture for minimal offset drift',
          useCase: 'Use OPA333 for applications requiring minimal offset drift over temperature'
        },
        {
          partNumber: 'ADA4522',
          brand: 'Analog Devices',
          specifications: {
            'Offset Voltage': '5µV',
            'Noise': '5.8nV/√Hz',
            'Bandwidth': '2.7MHz',
            'Supply': '4.5V-55V'
          },
          comparison: 'HCI-AN005 => ADA4522 => ADI offers higher voltage operation',
          reason: 'ADA4522 provides precision performance with wide supply range',
          useCase: 'Use ADA4522 for industrial applications requiring higher voltage supplies'
        }
      ],
      companionParts: [
        { partNumber: 'HCI-AN003', description: 'Precision voltage reference', category: 'Analog' },
        { partNumber: 'RES-10K', description: 'Gain setting resistor', category: 'Components' },
        { partNumber: 'CAP-100nF', description: 'Decoupling capacitor', category: 'Components' }
      ],
      slug: 'hci-an005',
      specifications: {
        'Offset Voltage': '5µV',
        'Offset Drift': '0.02µV/°C',
        'Noise Density': '8nV/√Hz',
        'Bandwidth': '3MHz',
        'Slew Rate': '2V/µs',
        'Supply Voltage': '2.7V-5.5V',
        'Input Bias Current': '10pA',
        'Package': 'SOIC-8'
      },
      faqs: [
        {
          question: 'What makes HCI-AN005 suitable for precision sensor applications?',
          answer: 'HCI-AN005 combines ultra-low offset voltage of 5µV, low noise density of 8nV/√Hz, and rail-to-rail input/output operation. These characteristics make it ideal for amplifying small sensor signals with minimal error and maximum dynamic range.',
          decisionGuide: 'Choose for precision sensor signal conditioning.',
          keywords: ['precision', 'sensor', 'low noise']
        },
        {
          question: 'What is the input offset voltage drift of HCI-AN005?',
          answer: 'HCI-AN005 features excellent offset voltage drift of just 0.02µV/°C. This minimal drift ensures consistent accuracy across the operating temperature range, eliminating the need for frequent calibration in precision applications.',
          decisionGuide: 'Low drift ensures accuracy across temperature range.',
          keywords: ['offset drift', 'temperature', 'accuracy']
        },
        {
          question: 'Can HCI-AN005 operate with single supply?',
          answer: 'Yes, HCI-AN005 supports single-supply operation from 2.7V to 5.5V. The rail-to-rail input and output capability maximizes signal swing in single-supply applications, which is essential for battery-powered and low-voltage systems.',
          decisionGuide: 'Single-supply compatible with rail-to-rail operation.',
          keywords: ['single supply', 'rail-to-rail', 'battery']
        },
        {
          question: 'What is the input bias current of HCI-AN005?',
          answer: 'HCI-AN005 has a very low input bias current of 10pA typical. This makes it suitable for applications with high source impedance, such as pH sensors and photodiode amplifiers, where input bias current could cause significant errors.',
          decisionGuide: 'Low bias current ideal for high-impedance sources.',
          keywords: ['bias current', 'high impedance', 'sensors']
        },
        {
          question: 'What package options are available for HCI-AN005?',
          answer: 'HCI-AN005 is available in SOIC-8 package for easy prototyping and manufacturing. The industry-standard pinout ensures compatibility with alternative devices and simplifies PCB layout. Contact us for information about additional package options.',
          decisionGuide: 'SOIC-8 package for easy integration.',
          keywords: ['package', 'SOIC', 'footprint']
        },
        {
          question: 'How do I minimize noise in my HCI-AN005 circuit?',
          answer: 'To minimize noise: Use proper power supply decoupling with ceramic capacitors close to the supply pins, minimize trace lengths on sensitive input nodes, use guard rings for very high impedance applications, and ensure clean ground references. Our application note provides detailed noise optimization guidelines.',
          decisionGuide: 'Follow layout guidelines for minimal noise.',
          keywords: ['noise', 'layout', 'decoupling']
        }
      ]
    },
    {
      partNumber: 'HCI-AN006',
      name: 'Analog ICs HCI-AN006',
      shortDescription: 'High-speed voltage comparator with fast response time and push-pull output for power management and signal detection.',
      descriptionParagraphs: [
        'The HCI-AN006 is a high-speed voltage comparator designed for fast signal detection and power management applications.',
        'With propagation delay of just 40ns and push-pull output stage, it provides fast switching without external pull-up resistors.',
        'The device features low power consumption, wide supply range, and rail-to-rail input for versatile application support.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'This comparator delivers excellent speed-power trade-off. The 40ns propagation delay is consistent across temperature, and the push-pull output eliminates the need for external pull-up resistors, saving BOM cost and board space. Great for over-current detection and zero-crossing detection.',
        highlight: '40ns delay, push-pull output, low power'
      },
      alternativeParts: [
        {
          partNumber: 'LMV7219',
          brand: 'Texas Instruments',
          specifications: {
            'Propagation Delay': '7ns',
            'Supply Current': '1.1mA',
            'Output Type': 'Push-Pull',
            'Package': 'SOT-23'
          },
          comparison: 'HCI-AN006 => LMV7219 => TI offers faster response time',
          reason: 'LMV7219 provides ultra-fast 7ns propagation delay',
          useCase: 'Use LMV7219 for ultra-fast switching applications'
        },
        {
          partNumber: 'TS391',
          brand: 'STMicroelectronics',
          specifications: {
            'Propagation Delay': '300ns',
            'Supply Current': '0.2mA',
            'Output Type': 'Open-Drain',
            'Package': 'SOT-23'
          },
          comparison: 'HCI-AN006 => TS391 => ST offers lower power consumption',
          reason: 'TS391 provides micropower operation for battery applications',
          useCase: 'Use TS391 for battery-powered applications requiring minimal power'
        }
      ],
      companionParts: [
        { partNumber: 'RES-10K', description: 'Hysteresis resistor', category: 'Components' },
        { partNumber: 'CAP-100nF', description: 'Supply decoupling', category: 'Components' },
        { partNumber: 'HCI-PM001', description: 'Power supply', category: 'Power' }
      ],
      slug: 'hci-an006',
      specifications: {
        'Propagation Delay': '40ns',
        'Supply Voltage': '2.7V-5.5V',
        'Supply Current': '0.5mA',
        'Input Offset': '5mV',
        'Output Type': 'Push-Pull',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'SOT-23-5'
      },
      faqs: [
        {
          question: 'What is the propagation delay of HCI-AN006?',
          answer: 'HCI-AN006 features a fast propagation delay of 40ns typical. This quick response time makes it suitable for over-current protection, zero-crossing detection, and other time-critical applications where rapid signal detection is essential.',
          decisionGuide: '40ns delay suitable for time-critical applications.',
          keywords: ['propagation delay', 'speed', 'response time']
        },
        {
          question: 'What is the advantage of push-pull output?',
          answer: 'Push-pull output eliminates the need for external pull-up resistors required by open-drain comparators. This reduces BOM cost, board space, and power consumption while providing faster output transitions and better drive capability for capacitive loads.',
          decisionGuide: 'Push-pull output saves components and improves performance.',
          keywords: ['push-pull', 'output', 'BOM cost']
        },
        {
          question: 'How do I add hysteresis to HCI-AN006?',
          answer: 'Hysteresis can be added using positive feedback through an external resistor network. This creates different threshold voltages for rising and falling inputs, preventing output chatter when the input signal is near the threshold. Our application note provides recommended resistor values for various hysteresis levels.',
          decisionGuide: 'Add hysteresis to prevent output chatter.',
          keywords: ['hysteresis', 'feedback', 'chatter']
        },
        {
          question: 'What is the power consumption of HCI-AN006?',
          answer: 'HCI-AN006 consumes just 0.5mA typical supply current at 5V. This low power consumption makes it suitable for battery-powered applications while still delivering fast response times. The power consumption scales with supply voltage.',
          decisionGuide: 'Low 0.5mA current suitable for battery applications.',
          keywords: ['power consumption', 'current', 'battery']
        },
        {
          question: 'Can HCI-AN006 handle rail-to-rail input signals?',
          answer: 'Yes, HCI-AN006 features rail-to-rail input capability, allowing the input signals to extend to both supply rails. This maximizes the usable input range and makes the device suitable for applications with large signal swings or limited headroom.',
          decisionGuide: 'Rail-to-rail input maximizes usable range.',
          keywords: ['rail-to-rail', 'input range', 'signal swing']
        },
        {
          question: 'What are typical applications for HCI-AN006?',
          answer: 'Common applications include over-current/over-voltage protection circuits, zero-crossing detectors for AC power control, window comparators for voltage monitoring, oscillator circuits, and threshold detectors. The fast response time makes it ideal for protection circuits.',
          decisionGuide: 'Ideal for protection circuits and signal detection.',
          keywords: ['applications', 'protection', 'detection']
        }
      ]
    }
  ],
  'interface': [
    {
      partNumber: 'HCI-IN005',
      name: 'Interface HCI-IN005',
      shortDescription: 'High-speed USB-to-UART bridge controller with integrated voltage regulator and configurable GPIO for embedded systems.',
      descriptionParagraphs: [
        'The HCI-IN005 is a high-speed USB-to-UART bridge controller designed for easy serial communication in embedded systems.',
        'Featuring integrated 3.3V voltage regulator, configurable GPIO pins, and data rates up to 3Mbps, it simplifies USB connectivity.',
        'The device requires minimal external components and supports various operating systems with royalty-free drivers.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'This USB-to-UART bridge is incredibly easy to use. The integrated regulator eliminates the need for external LDO, and the configurable GPIOs are great for status LEDs or flow control. Customers love the plug-and-play compatibility with Windows, Linux, and macOS.',
        highlight: 'Integrated regulator, 3Mbps, easy integration'
      },
      alternativeParts: [
        {
          partNumber: 'CP2102',
          brand: 'Silicon Labs',
          specifications: {
            'Data Rate': '1Mbps',
            'GPIO': '4',
            'Integrated EEPROM': 'Yes',
            'Package': 'QFN-28'
          },
          comparison: 'HCI-IN005 => CP2102 => Silicon Labs offers integrated EEPROM',
          reason: 'CP2102 provides EEPROM for storing configuration',
          useCase: 'Use CP2102 when device configuration storage is needed'
        },
        {
          partNumber: 'CH340',
          brand: 'WCH',
          specifications: {
            'Data Rate': '2Mbps',
            'GPIO': '0',
            'Cost': 'Low',
            'Package': 'SOP-16'
          },
          comparison: 'HCI-IN005 => CH340 => WCH offers lower cost solution',
          reason: 'CH340 provides cost-effective USB-to-UART conversion',
          useCase: 'Use CH340 for cost-sensitive consumer applications'
        }
      ],
      companionParts: [
        { partNumber: 'HCI-PM001', description: 'Optional external power', category: 'Power' },
        { partNumber: 'CAP-4.7uF', description: 'Regulator output cap', category: 'Components' },
        { partNumber: 'LED-GREEN', description: 'Status indicator', category: 'Components' }
      ],
      slug: 'hci-in005',
      specifications: {
        'USB Speed': 'Full Speed 12Mbps',
        'UART Data Rate': 'Up to 3Mbps',
        'GPIO': '4 configurable',
        'Integrated Regulator': '3.3V 100mA',
        'Supply Voltage': '5V (USB) or 3.3V',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'QFN-24'
      },
      faqs: [
        {
          question: 'What operating systems are supported by HCI-IN005?',
          answer: 'HCI-IN005 supports Windows 7/8/10/11, Linux (kernel 2.6+), and macOS (10.9+) with royalty-free drivers. The device appears as a standard COM port on Windows or ttyUSB device on Linux, requiring no special software for basic operation.',
          decisionGuide: 'Compatible with all major operating systems.',
          keywords: ['drivers', 'OS support', 'compatibility']
        },
        {
          question: 'What is the maximum UART data rate?',
          answer: 'HCI-IN005 supports UART data rates up to 3Mbps. This high speed enables fast firmware updates and high-throughput data logging applications. The actual achievable rate depends on the USB host and application software.',
          decisionGuide: '3Mbps maximum for high-speed applications.',
          keywords: ['data rate', 'baud rate', 'speed']
        },
        {
          question: 'Can the GPIO pins be used for status LEDs?',
          answer: 'Yes, the 4 configurable GPIO pins can be used for status LEDs, flow control signals (RTS/CTS), or general-purpose I/O. The pins can be configured through the device driver or API for various functions including TX/RX activity indicators.',
          decisionGuide: 'GPIOs configurable for LEDs or flow control.',
          keywords: ['GPIO', 'LED', 'configuration']
        },
        {
          question: 'Does HCI-IN005 require external crystal?',
          answer: 'No, HCI-IN005 integrates the USB clock generation and does not require an external crystal. This reduces BOM cost and board space while ensuring reliable USB communication across temperature and voltage variations.',
          decisionGuide: 'No crystal required - integrated clock generation.',
          keywords: ['crystal', 'clock', 'BOM']
        },
        {
          question: 'What is the purpose of the integrated voltage regulator?',
          answer: 'The integrated 3.3V regulator provides power for external circuitry up to 100mA. This eliminates the need for a separate LDO when powering 3.3V sensors or microcontrollers, simplifying the design and reducing cost.',
          decisionGuide: 'Integrated regulator powers external 3.3V circuits.',
          keywords: ['regulator', 'power', '3.3V']
        },
        {
          question: 'Can HCI-IN005 be used for firmware updates?',
          answer: 'Yes, HCI-IN005 is ideal for in-system firmware updates. The high data rate and reliable USB connection enable fast programming of microcontrollers and FPGAs. Many customers use it as the primary programming interface for their embedded products.',
          decisionGuide: 'Suitable for firmware updates and programming.',
          keywords: ['firmware', 'programming', 'updates']
        }
      ]
    },
    {
      partNumber: 'HCI-IN006',
      name: 'Interface HCI-IN006',
      shortDescription: 'Isolated CAN transceiver with integrated DC-DC converter and 2.5kV isolation for industrial and automotive networks.',
      descriptionParagraphs: [
        'The HCI-IN006 is an isolated CAN transceiver providing 2.5kV galvanic isolation for robust industrial and automotive communication.',
        'Featuring integrated isolated DC-DC converter, it eliminates the need for external isolation power supplies, simplifying design.',
        'The device supports CAN FD up to 2Mbps, features bus fault protection, and operates over extended temperature range.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'This isolated CAN transceiver is a game-changer for industrial designs. The integrated DC-DC converter saves significant board space and BOM cost compared to discrete isolation solutions. The 2.5kV isolation provides excellent protection in noisy industrial environments.',
        highlight: '2.5kV isolation, integrated DC-DC, CAN FD support'
      },
      alternativeParts: [
        {
          partNumber: 'ADM3050',
          brand: 'Analog Devices',
          specifications: {
            'Isolation': '5kV',
            'Data Rate': '12Mbps',
            'Integrated DC-DC': 'Yes',
            'Package': 'SOIC-20'
          },
          comparison: 'HCI-IN006 => ADM3050 => ADI offers higher isolation and CAN FD',
          reason: 'ADM3050 provides 5kV isolation and high-speed CAN FD support',
          useCase: 'Use ADM3050 for applications requiring higher isolation ratings'
        },
        {
          partNumber: 'ISO1050',
          brand: 'Texas Instruments',
          specifications: {
            'Isolation': '2.5kV',
            'Data Rate': '1Mbps',
            'Integrated DC-DC': 'No',
            'Package': 'SOIC-16'
          },
          comparison: 'HCI-IN006 => ISO1050 => TI offers lower cost without integrated power',
          reason: 'ISO1050 provides cost-effective isolation without DC-DC',
          useCase: 'Use ISO1050 when external isolated power is already available'
        }
      ],
      companionParts: [
        { partNumber: 'HCI-PM001', description: 'Primary side power', category: 'Power' },
        { partNumber: 'RES-120', description: 'CAN termination', category: 'Components' },
        { partNumber: 'CAP-100nF', description: 'Decoupling', category: 'Components' }
      ],
      slug: 'hci-in006',
      specifications: {
        'Isolation Voltage': '2.5kVrms',
        'CAN Data Rate': 'Up to 2Mbps (CAN FD)',
        'Integrated DC-DC': 'Yes, 5V to 5V',
        'Bus Fault Protection': '±58V',
        'Temperature Range': '-40°C to +125°C',
        'ESD Protection': '±8kV',
        'Package': 'SOIC-16'
      },
      faqs: [
        {
          question: 'What is the isolation rating of HCI-IN006?',
          answer: 'HCI-IN006 provides 2.5kVrms galvanic isolation between the CAN bus and logic sides. This isolation protects sensitive control electronics from ground loops and high-voltage transients common in industrial environments, ensuring reliable communication.',
          decisionGuide: '2.5kV isolation protects against ground loops.',
          keywords: ['isolation', 'protection', 'ground loop']
        },
        {
          question: 'Does HCI-IN006 support CAN FD?',
          answer: 'Yes, HCI-IN006 supports CAN FD (Flexible Data-rate) with data rates up to 2Mbps. This enables higher throughput for modern automotive and industrial networks while maintaining backward compatibility with classic CAN 2.0B.',
          decisionGuide: 'CAN FD support for modern networks.',
          keywords: ['CAN FD', 'data rate', 'compatibility']
        },
        {
          question: 'How does the integrated DC-DC converter work?',
          answer: 'The integrated DC-DC converter generates isolated 5V power for the CAN transceiver side from the primary 5V supply. This eliminates the need for a separate isolated power supply, significantly reducing board space, cost, and design complexity.',
          decisionGuide: 'Integrated power eliminates external isolated supply.',
          keywords: ['DC-DC', 'isolated power', 'integration']
        },
        {
          question: 'What bus fault protection does HCI-IN006 provide?',
          answer: 'HCI-IN006 features ±58V bus fault protection, safeguarding the device against accidental short circuits to power supplies or ground. This robust protection is essential for industrial applications where wiring faults may occur.',
          decisionGuide: '±58V fault protection for robust operation.',
          keywords: ['fault protection', 'bus protection', 'robustness']
        },
        {
          question: 'What is the maximum operating temperature?',
          answer: 'HCI-IN006 operates over an extended temperature range of -40°C to +125°C, making it suitable for automotive under-hood applications and harsh industrial environments. The device maintains all specifications across this range.',
          decisionGuide: '-40°C to +125°C for harsh environments.',
          keywords: ['temperature', 'automotive', 'industrial']
        },
        {
          question: 'What termination resistor is recommended?',
          answer: 'A 120Ω termination resistor should be placed at each end of the CAN bus. HCI-IN006 does not include internal termination, allowing flexible network configuration. The resistor should be rated for at least 0.25W to handle worst-case bus contention.',
          decisionGuide: '120Ω termination at each bus end.',
          keywords: ['termination', 'resistor', 'bus']
        }
      ]
    }
  ],
  'sensors': [
    {
      partNumber: 'HCI-SE005',
      name: 'Sensors HCI-SE005',
      shortDescription: 'High-precision digital temperature sensor with ±0.5°C accuracy and I2C interface for industrial and consumer applications.',
      descriptionParagraphs: [
        'The HCI-SE005 is a high-precision digital temperature sensor offering ±0.5°C accuracy from -40°C to +125°C.',
        'Featuring I2C interface, programmable resolution up to 16-bit, and alert functionality, it provides versatile temperature monitoring.',
        'The low power consumption and wide supply range make it suitable for both battery-powered and industrial applications.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'This temperature sensor delivers excellent accuracy at a competitive price point. The ±0.5°C accuracy is maintained across the entire industrial temperature range, and the I2C interface makes integration straightforward. The alert pin is great for interrupt-driven systems.',
        highlight: '±0.5°C accuracy, I2C interface, alert function'
      },
      alternativeParts: [
        {
          partNumber: 'TMP117',
          brand: 'Texas Instruments',
          specifications: {
            'Accuracy': '±0.1°C',
            'Interface': 'I2C',
            'Resolution': '16-bit',
            'Supply': '1.8V-5.5V'
          },
          comparison: 'HCI-SE005 => TMP117 => TI offers higher accuracy',
          reason: 'TMP117 provides medical-grade ±0.1°C accuracy',
          useCase: 'Use TMP117 for medical or high-precision applications'
        },
        {
          partNumber: 'ADT7410',
          brand: 'Analog Devices',
          specifications: {
            'Accuracy': '±0.5°C',
            'Interface': 'I2C/SPI',
            'Resolution': '16-bit',
            'Supply': '2.7V-5.5V'
          },
          comparison: 'HCI-SE005 => ADT7410 => ADI offers dual interface',
          reason: 'ADT7410 provides both I2C and SPI interface options',
          useCase: 'Use ADT7410 when SPI interface is preferred'
        }
      ],
      companionParts: [
        { partNumber: 'HCI-IN004', description: 'I2C level translator', category: 'Interface' },
        { partNumber: 'CAP-100nF', description: 'Supply decoupling', category: 'Components' },
        { partNumber: 'RES-10K', description: 'Pull-up resistors', category: 'Components' }
      ],
      slug: 'hci-se005',
      specifications: {
        'Accuracy': '±0.5°C (-40°C to +125°C)',
        'Resolution': '9-16 bit programmable',
        'Interface': 'I2C/SMBus',
        'Supply Voltage': '1.8V-5.5V',
        'Quiescent Current': '50µA',
        'Alert Function': 'Yes, programmable thresholds',
        'Temperature Range': '-55°C to +150°C',
        'Package': 'SOIC-8'
      },
      faqs: [
        {
          question: 'What is the accuracy of HCI-SE005?',
          answer: 'HCI-SE005 provides ±0.5°C accuracy across the -40°C to +125°C temperature range. This high accuracy makes it suitable for industrial monitoring, HVAC systems, and consumer electronics requiring reliable temperature measurement.',
          decisionGuide: '±0.5°C accuracy for reliable temperature monitoring.',
          keywords: ['accuracy', 'temperature', 'specification']
        },
        {
          question: 'What resolution options are available?',
          answer: 'HCI-SE005 offers programmable resolution from 9-bit to 16-bit. Higher resolution provides finer temperature measurements but requires longer conversion time. For most applications, 12-bit resolution provides a good balance of precision and response time.',
          decisionGuide: 'Programmable 9-16 bit resolution.',
          keywords: ['resolution', 'precision', 'conversion time']
        },
        {
          question: 'How does the alert function work?',
          answer: 'The alert pin activates when temperature exceeds programmable high or low thresholds. This enables interrupt-driven monitoring without continuous polling. The alert can be configured for comparator mode (for thermostat control) or interrupt mode (for microcontroller notification).',
          decisionGuide: 'Alert pin enables interrupt-driven monitoring.',
          keywords: ['alert', 'interrupt', 'threshold']
        },
        {
          question: 'What is the conversion time at different resolutions?',
          answer: 'Conversion time varies with resolution: 9-bit takes 25ms, 10-bit takes 50ms, 11-bit takes 100ms, 12-bit takes 200ms, and 16-bit takes 750ms. Choose resolution based on your application requirements for speed versus precision.',
          decisionGuide: 'Conversion time increases with resolution.',
          keywords: ['conversion time', 'speed', 'resolution']
        },
        {
          question: 'Can HCI-SE005 operate with 3.3V or 5V supplies?',
          answer: 'Yes, HCI-SE005 operates from 1.8V to 5.5V, making it compatible with both 3.3V and 5V systems. The wide supply range provides flexibility for various microcontroller platforms without level translation.',
          decisionGuide: '1.8V-5.5V operation for versatile compatibility.',
          keywords: ['supply voltage', '3.3V', '5V']
        },
        {
          question: 'What is the recommended PCB layout for HCI-SE005?',
          answer: 'Place the sensor away from heat sources like power regulators or processors. Use a ground plane under the sensor for thermal coupling to the PCB. Keep decoupling capacitor close to the supply pin. For ambient sensing, position the sensor at the board edge away from heat-generating components.',
          decisionGuide: 'Keep away from heat sources for accurate ambient sensing.',
          keywords: ['layout', 'thermal', 'accuracy']
        }
      ]
    },
    {
      partNumber: 'HCI-SE006',
      name: 'Sensors HCI-SE006',
      shortDescription: '3-axis MEMS accelerometer with ±16g range, digital I2C/SPI interface, and embedded motion detection for wearables and IoT.',
      descriptionParagraphs: [
        'The HCI-SE006 is a low-power 3-axis MEMS accelerometer designed for motion sensing in wearable and IoT applications.',
        'Featuring ±2g/±4g/±8g/±16g selectable ranges, 12-bit resolution, and embedded motion detection algorithms, it provides versatile motion sensing.',
        'The ultra-low power consumption and small package make it ideal for battery-powered portable devices.'
      ],
      faeReview: {
        author: 'Senior FAE Team',
        content: 'This accelerometer hits the sweet spot for wearable applications. The embedded motion detection algorithms offload the microcontroller, significantly extending battery life. The tap and orientation detection work reliably without constant host processing.',
        highlight: 'Embedded algorithms, low power, reliable motion detection'
      },
      alternativeParts: [
        {
          partNumber: 'ADXL345',
          brand: 'Analog Devices',
          specifications: {
            'Range': '±2g/±4g/±8g/±16g',
            'Resolution': '13-bit',
            'Interface': 'SPI/I2C',
            'Supply': '2.0V-3.6V'
          },
          comparison: 'HCI-SE006 => ADXL345 => ADI offers higher resolution',
          reason: 'ADXL345 provides 13-bit resolution and free-fall detection',
          useCase: 'Use ADXL345 for applications requiring higher resolution'
        },
        {
          partNumber: 'MMA8452Q',
          brand: 'NXP',
          specifications: {
            'Range': '±2g/±4g/±8g',
            'Resolution': '12-bit',
            'Interface': 'I2C',
            'Supply': '1.95V-3.6V'
          },
          comparison: 'HCI-SE006 => MMA8452Q => NXP offers similar embedded functions',
          reason: 'MMA8452Q provides comparable embedded motion detection',
          useCase: 'Use MMA8452Q as alternative with similar functionality'
        }
      ],
      companionParts: [
        { partNumber: 'HCI-IN004', description: 'I2C level translator', category: 'Interface' },
        { partNumber: 'HCI-PM002', description: 'Low-noise LDO', category: 'Power' },
        { partNumber: 'CAP-100nF', description: 'Supply decoupling', category: 'Components' }
      ],
      slug: 'hci-se006',
      specifications: {
        'Measurement Range': '±2g/±4g/±8g/±16g',
        'Resolution': '12-bit',
        'Interface': 'I2C/SPI',
        'Supply Voltage': '1.8V-3.6V',
        'Power Consumption': '10µA',
        'Embedded Functions': 'Tap, orientation, free-fall detection',
        'Temperature Range': '-40°C to +85°C',
        'Package': 'LGA-16'
      },
      faqs: [
        {
          question: 'What measurement ranges are available?',
          answer: 'HCI-SE006 offers four selectable ranges: ±2g for high-sensitivity applications like tilt sensing, ±4g for general motion detection, ±8g for activity monitoring, and ±16g for high-impact detection. The range can be changed dynamically via the interface.',
          decisionGuide: 'Select range based on expected acceleration levels.',
          keywords: ['range', 'sensitivity', 'measurement']
        },
        {
          question: 'What embedded motion detection is included?',
          answer: 'HCI-SE006 includes embedded algorithms for single-tap, double-tap detection, orientation detection (portrait/landscape), and free-fall detection. These functions operate autonomously, generating interrupts without requiring continuous host processor polling.',
          decisionGuide: 'Embedded algorithms reduce host processor load.',
          keywords: ['embedded', 'motion detection', 'tap']
        },
        {
          question: 'What is the power consumption?',
          answer: 'HCI-SE006 consumes just 10µA in active mode at 50Hz data rate. In sleep mode, consumption drops to 2µA. The low power consumption makes it ideal for battery-powered wearables and IoT sensors requiring long battery life.',
          decisionGuide: '10µA active consumption for battery applications.',
          keywords: ['power consumption', 'battery', 'low power']
        },
        {
          question: 'Can HCI-SE006 wake up a sleeping microcontroller?',
          answer: 'Yes, the interrupt pin can wake a sleeping microcontroller when motion is detected. This enables event-driven operation where the system remains in ultra-low power sleep until motion activity triggers an interrupt, dramatically extending battery life.',
          decisionGuide: 'Interrupt pin enables wake-on-motion operation.',
          keywords: ['interrupt', 'wake', 'sleep mode']
        },
        {
          question: 'What is the output data rate?',
          answer: 'HCI-SE006 supports output data rates from 1Hz to 2000Hz, selectable via the interface. Lower rates reduce power consumption for slow-changing applications, while higher rates capture rapid motion. The data rate can be changed dynamically based on application needs.',
          decisionGuide: '1Hz-2000Hz selectable data rate.',
          keywords: ['data rate', 'ODR', 'bandwidth']
        },
        {
          question: 'How do I calibrate HCI-SE006?',
          answer: 'Factory calibration provides good accuracy out of the box. For higher precision, perform a simple 6-point calibration by placing the device in known orientations (±X, ±Y, ±Z facing down). Store offset values in host processor memory and subtract from readings.',
          decisionGuide: 'Factory calibrated; 6-point calibration for higher precision.',
          keywords: ['calibration', 'accuracy', 'offset']
        }
      ]
    }
  ]
};

console.log('Adding missing products to HCI brand...\n');

let addedCount = 0;

productsData.categories.forEach(category => {
  const categoryId = category.id;
  const productsToAdd = newProducts[categoryId];
  
  if (productsToAdd) {
    console.log(`Processing ${category.name}...`);
    console.log(`  Current products: ${category.products.length}`);
    
    productsToAdd.forEach(product => {
      category.products.push(product);
      addedCount++;
      console.log(`  ✓ Added ${product.partNumber}`);
    });
    
    console.log(`  Total products: ${category.products.length}\n`);
  }
});

// Save updated file
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');

console.log(`✅ Successfully added ${addedCount} products!`);
console.log('Each category now has at least 6 products.');
