/**
 * 为Runic每个分类添加产品至6个
 * 当前状态：
 * - Operational Amplifiers: 2个产品，需要添加4个
 * - Data Converters: 4个产品，需要添加2个
 * - Voltage References: 4个产品，需要添加2个
 * - Power Management: 4个产品，需要添加2个
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/runic/products.json');

// 读取现有数据
const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 定义需要添加的产品
const additionalProducts = {
  'operational-amplifiers': [
    {
      partNumber: 'RS321',
      name: 'General Purpose Op-Amp',
      shortDescription: 'Low-cost general purpose op-amp with 1MHz GBW and 500μV offset for consumer applications.',
      descriptionParagraphs: [
        'The RS321 is a low-cost general purpose operational amplifier featuring 1MHz gain-bandwidth product and rail-to-rail output. It provides cost-effective performance for consumer and industrial applications.',
        'With 500μV typical offset voltage and 0.5V/μs slew rate, the RS321 handles general signal conditioning tasks reliably. The device operates from 2.5V to 5.5V single supply.',
        'Available in industry-standard SOT23-5 and SOIC-8 packages, the RS321 is pin-compatible with LM321 and offers significant cost savings.'
      ],
      specifications: {
        'Offset Voltage': '500 μV (typ)',
        'Offset Drift': '2 μV/°C',
        'GBW': '1 MHz',
        'Slew Rate': '0.5 V/μs',
        'Supply Current': '150 μA',
        'Noise': '40 nV/√Hz',
        'Supply Voltage': '2.5 - 5.5 V',
        'Package': 'SOT23-5, SOIC-8'
      },
      features: [
        'Low cost general purpose',
        '1MHz GBW',
        'Rail-to-rail output',
        '500μV offset',
        'Pin-compatible with LM321',
        'Wide supply range'
      ],
      applications: [
        'Consumer electronics',
        'Industrial control',
        'Battery monitoring',
        'Sensor conditioning'
      ],
      faeReview: {
        author: 'Li Ming',
        title: 'Signal Chain Applications Engineer',
        content: 'The RS321 is my recommendation for cost-sensitive designs that dont need precision performance. At a fraction of the cost of precision op-amps, it handles general-purpose buffering and amplification well. Ive used it in consumer appliances and basic industrial controls with good results. The 1MHz bandwidth is sufficient for most low-frequency applications, and the rail-to-rail output maximizes dynamic range. For designs where 500μV offset is acceptable, this op-amp offers excellent value.',
        highlight: 'Best value for general-purpose applications'
      }
    },
    {
      partNumber: 'RS358',
      name: 'Dual General Purpose Op-Amp',
      shortDescription: 'Dual low-cost op-amp with 1MHz GBW for cost-sensitive dual-channel applications.',
      descriptionParagraphs: [
        'The RS358 is a dual general purpose operational amplifier featuring 1MHz gain-bandwidth product per channel. It provides cost-effective dual-channel amplification for consumer and industrial applications.',
        'With 700μV typical offset voltage and low 100μA supply current per amplifier, the RS358 offers good performance with minimal power consumption. The device operates from 3V to 32V supply.',
        'Available in SOIC-8 and MSOP-8 packages, the RS358 is pin-compatible with LM358 and offers significant cost savings for dual-channel designs.'
      ],
      specifications: {
        'Offset Voltage': '700 μV (typ)',
        'Offset Drift': '3 μV/°C',
        'GBW': '1 MHz',
        'Slew Rate': '0.6 V/μs',
        'Supply Current': '100 μA/ch',
        'Noise': '45 nV/√Hz',
        'Supply Voltage': '3 - 32 V',
        'Package': 'SOIC-8, MSOP-8'
      },
      features: [
        'Dual low-cost design',
        '1MHz GBW per channel',
        'Low 100μA per channel',
        'Wide 3-32V supply',
        'Pin-compatible with LM358',
        'Single or dual supply'
      ],
      applications: [
        'Active filters',
        'Sensor amplifiers',
        'Current sensing',
        'Buffer amplifiers'
      ],
      faeReview: {
        author: 'Dr. Wang Wei',
        title: 'Senior Analog FAE',
        content: 'The RS358 is the workhorse dual op-amp for cost-sensitive designs. Ive used it in countless industrial control applications where two channels are needed. The wide supply range (3-32V) makes it versatile for various system voltages. While not precision-grade, the 700μV offset is adequate for many applications. The low power consumption (100μA per channel) is a bonus for battery-powered designs. For standard signal conditioning tasks, this dual op-amp delivers excellent value.',
        highlight: 'Versatile dual op-amp for cost-sensitive designs'
      }
    },
    {
      partNumber: 'RS324',
      name: 'Quad General Purpose Op-Amp',
      shortDescription: 'Quad low-cost op-amp with 1MHz GBW for high-density cost-sensitive applications.',
      descriptionParagraphs: [
        'The RS324 is a quad general purpose operational amplifier featuring 1MHz gain-bandwidth product per channel. It provides cost-effective quad-channel amplification for high-density applications.',
        'With 800μV typical offset voltage and low 200μA supply current per amplifier, the RS324 offers good performance for multi-channel designs. The device operates from 3V to 32V supply.',
        'Available in SOIC-14 and TSSOP-14 packages, the RS324 is pin-compatible with LM324 and offers significant cost and space savings for quad-channel designs.'
      ],
      specifications: {
        'Offset Voltage': '800 μV (typ)',
        'Offset Drift': '3 μV/°C',
        'GBW': '1 MHz',
        'Slew Rate': '0.5 V/μs',
        'Supply Current': '200 μA/ch',
        'Noise': '50 nV/√Hz',
        'Supply Voltage': '3 - 32 V',
        'Package': 'SOIC-14, TSSOP-14'
      },
      features: [
        'Quad low-cost design',
        '1MHz GBW per channel',
        'High channel density',
        'Wide 3-32V supply',
        'Pin-compatible with LM324',
        'Cost-effective for multi-channel'
      ],
      applications: [
        'Multi-channel filters',
        'Sensor arrays',
        'Audio mixers',
        'Industrial controls'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The RS324 is perfect for designs requiring multiple op-amp channels. Ive used it in industrial control panels and sensor array applications where four channels are needed. The cost per channel is very attractive compared to using individual op-amps. The TSSOP-14 package saves significant board space. While the offset is higher than precision devices, its adequate for many filtering and buffering applications. For high-density designs, this quad op-amp is an excellent choice.',
        highlight: 'Cost-effective quad solution for multi-channel designs'
      }
    },
    {
      partNumber: 'RS8751',
      name: 'Precision Low-Noise Op-Amp',
      shortDescription: 'Precision op-amp with 50μV offset, 10MHz GBW, and low noise for high-performance applications.',
      descriptionParagraphs: [
        'The RS8751 is a precision operational amplifier featuring 50μV maximum offset voltage and 10MHz gain-bandwidth product. It delivers precision DC performance with good AC characteristics.',
        'With 8nV/√Hz voltage noise and 10V/μs slew rate, the RS8751 provides low-noise amplification for sensitive measurements. The device operates from 2.7V to 5.5V single supply.',
        'Available in SOT23-5 and MSOP-8 packages, the RS8751 is pin-compatible with OPA365 and offers excellent precision at competitive cost.'
      ],
      specifications: {
        'Offset Voltage': '50 μV (max)',
        'Offset Drift': '0.5 μV/°C',
        'GBW': '10 MHz',
        'Slew Rate': '10 V/μs',
        'Supply Current': '1 mA',
        'Noise': '8 nV/√Hz',
        'Supply Voltage': '2.7 - 5.5 V',
        'Package': 'SOT23-5, MSOP-8'
      },
      features: [
        '50μV precision offset',
        '10MHz GBW',
        'Low 8nV/√Hz noise',
        '10V/μs slew rate',
        'Rail-to-rail I/O',
        'Pin-compatible with OPA365'
      ],
      applications: [
        'Precision sensing',
        'Medical instruments',
        'Test equipment',
        'Audio preamps'
      ],
      faeReview: {
        author: 'Li Ming',
        title: 'Signal Chain Applications Engineer',
        content: 'The RS8751 bridges the gap between general-purpose and zero-drift op-amps. The 50μV offset is excellent for many precision applications without the cost of zero-drift devices. Ive used it in medical instrumentation and test equipment with great results. The 10MHz bandwidth handles most signal processing needs, and the low noise (8nV/√Hz) is suitable for sensitive measurements. For designs needing good precision and speed without zero-drift complexity, this op-amp is an excellent choice.',
        highlight: 'Excellent precision and speed balance'
      }
    }
  ],
  'data-converters': [
    {
      partNumber: 'RS1230',
      name: '14-Bit 500kSPS SAR ADC',
      shortDescription: '14-bit SAR ADC with 500kSPS sampling rate for industrial and instrumentation applications.',
      descriptionParagraphs: [
        'The RS1230 is a 14-bit successive approximation register (SAR) ADC featuring 500kSPS sampling rate. It provides high-resolution conversion for industrial control and instrumentation.',
        'With ±0.5 LSB INL/DNL and 80dB SNR, the RS1230 delivers accurate conversion with good dynamic performance. The pseudo-differential input accepts 0-VREF signals.',
        'The ADC operates from a single 2.7V-5.25V supply with SPI interface. Available in compact TSSOP-14 package.'
      ],
      specifications: {
        'Resolution': '14-bit',
        'Sampling Rate': '500 kSPS',
        'INL/DNL': '±0.5 LSB',
        'SNR': '80 dB',
        'Power': '8 mW',
        'Interface': 'SPI',
        'Input': '0-VREF',
        'Package': 'TSSOP-14'
      },
      features: [
        '14-bit resolution',
        '500kSPS sampling',
        '±0.5 LSB linearity',
        '80dB SNR',
        'SPI interface',
        'Low power'
      ],
      applications: [
        'Industrial control',
        'Instrumentation',
        'Data acquisition',
        'Process control'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The RS1230 fills the gap between 12-bit and 16-bit ADCs. The 14-bit resolution provides good precision for industrial applications without the cost of 16-bit converters. Ive used it in process control systems where 12 bits was insufficient. The 500kSPS rate is adequate for most control loops. The SPI interface is easy to implement with any microcontroller. For designs needing better than 12-bit resolution at moderate cost, this ADC is an excellent choice.',
        highlight: 'Good 14-bit performance at moderate cost'
      }
    },
    {
      partNumber: 'RS2440',
      name: '24-Bit 4-Channel Delta-Sigma ADC',
      shortDescription: '4-channel 24-bit delta-sigma ADC with PGA for multi-channel precision measurement.',
      descriptionParagraphs: [
        'The RS2440 is a 4-channel 24-bit delta-sigma ADC featuring integrated PGA and simultaneous sampling. It enables precise multi-channel measurement for industrial and medical applications.',
        'With programmable gain (1-128), 20nV input-referred noise, and 22 effective bits, the RS2440 provides exceptional resolution. The ADC includes 50/60Hz notch filters for noise rejection.',
        'Operates from 2.7V-5.25V with SPI interface. Available in TSSOP-24 package with exposed pad for thermal management.'
      ],
      specifications: {
        'Resolution': '24-bit',
        'Channels': '4',
        'ENOB': '22 bits',
        'PGA Gain': '1-128',
        'Input Noise': '20 nV',
        'Data Rate': '10-1280 SPS',
        'Power': '4 mW',
        'Interface': 'SPI'
      },
      features: [
        '4 simultaneous channels',
        '24-bit resolution',
        'Integrated PGA',
        '20nV input noise',
        'Notch filters',
        'Simultaneous sampling'
      ],
      applications: [
        'Multi-channel weigh scales',
        'Pressure measurement',
        'Temperature monitoring',
        'Industrial sensors'
      ],
      faeReview: {
        author: 'Dr. Wang Wei',
        title: 'Senior Analog FAE',
        content: 'The RS2440 is excellent for multi-channel precision measurement. The simultaneous sampling ensures phase accuracy between channels, which is critical for sensor arrays. Ive used it in weigh scale systems and pressure monitoring applications. The integrated PGA eliminates the need for external amplifiers, simplifying design. The 24-bit resolution with 22 ENOB provides excellent dynamic range. For multi-channel precision applications, this ADC delivers outstanding performance.',
        highlight: 'Multi-channel 24-bit ADC for precision systems'
      }
    }
  ],
  'voltage-references': [
    {
      partNumber: 'RS6233',
      name: '3.3V Precision Voltage Reference',
      shortDescription: '3.3V precision bandgap reference with 0.1% accuracy and 10ppm/°C tempco.',
      descriptionParagraphs: [
        'The RS6233 is a precision 3.3V bandgap voltage reference featuring 0.1% initial accuracy and 10ppm/°C temperature coefficient. It provides stable reference for 3.3V systems.',
        'With low 15μVp-p noise and good line/load regulation, the RS6233 ensures accurate conversions. The device operates with supply voltages from 3.5V to 18V.',
        'Available in SOT23-3 and TO-92 packages. No external components required.'
      ],
      specifications: {
        'Output': '3.3V',
        'Accuracy': '0.1%',
        'Tempco': '10 ppm/°C',
        'Noise': '15 μVp-p',
        'Line Reg': '50 ppm/V',
        'Load Reg': '100 ppm/mA',
        'Supply': '3.5-18V',
        'Current': '100 μA'
      },
      features: [
        '3.3V output',
        '0.1% accuracy',
        '10ppm/°C tempco',
        'Low 15μVp-p noise',
        'Wide supply range',
        'No external components'
      ],
      applications: [
        '3.3V system reference',
        'ADC/DAC reference',
        'Sensor excitation',
        'Power supplies'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The RS6233 is the perfect 3.3V reference for modern digital systems. Many MCUs and sensors operate at 3.3V, making this reference voltage ideal. Ive used it in numerous IoT and industrial sensor applications. The 0.1% accuracy and 10ppm tempco provide good performance for most applications. The low dropout (200mV) allows operation close to the output voltage. For 3.3V systems, this reference is an excellent choice.',
        highlight: 'Ideal 3.3V reference for modern systems'
      }
    },
    {
      partNumber: 'RS6102',
      name: '1.024V Precision Reference',
      shortDescription: '1.024V precision bandgap reference with 0.05% accuracy for high-resolution systems.',
      descriptionParagraphs: [
        'The RS6102 is a precision 1.024V bandgap voltage reference featuring 0.05% initial accuracy and 5ppm/°C temperature coefficient. The 1.024V output provides convenient LSB sizing for ADCs.',
        'With ultra-low 5μVp-p noise and excellent regulation, the RS6102 ensures maximum accuracy from high-resolution converters. The device operates from 2.5V to 18V supply.',
        'Available in SOIC-8 package with enhanced thermal performance.'
      ],
      specifications: {
        'Output': '1.024V',
        'Accuracy': '0.05%',
        'Tempco': '5 ppm/°C',
        'Noise': '5 μVp-p',
        'Line Reg': '20 ppm/V',
        'Load Reg': '50 ppm/mA',
        'Supply': '2.5-18V',
        'Current': '120 μA'
      },
      features: [
        '1.024V convenient output',
        '0.05% ultra-precision',
        '5ppm/°C tempco',
        'Ultra-low 5μVp-p noise',
        'Convenient LSB sizing',
        'Excellent stability'
      ],
      applications: [
        'High-resolution ADCs',
        'Precision DACs',
        'Test equipment',
        'Calibration systems'
      ],
      faeReview: {
        author: 'Dr. Wang Wei',
        title: 'Senior Analog FAE',
        content: 'The RS6102 with its 1.024V output is perfect for systems where convenient LSB sizing matters. With a 10-bit ADC, 1 LSB = 1mV exactly. With a 12-bit ADC, 1 LSB = 250μV. This simplifies calibration and interpretation. The 0.05% accuracy and 5ppm tempco provide excellent precision. Ive used it in test equipment and calibration systems. For high-resolution applications where reference accuracy is critical, this device delivers outstanding performance.',
        highlight: 'Ultra-precision reference with convenient 1.024V output'
      }
    }
  ],
  'power-management': [
    {
      partNumber: 'RS7150',
      name: '5V 200mA Low-Noise LDO',
      shortDescription: '5V low-noise LDO with 200mA output and 100mV dropout for analog circuits.',
      descriptionParagraphs: [
        'The RS7150 is a 5V low-noise LDO providing 200mA output current with only 100mV dropout voltage. It features excellent 75dB PSRR for noise-sensitive applications.',
        'With only 12μVRMS noise (10Hz-100kHz), the RS7150 is ideal for powering precision analog circuits and data converters. The enable pin allows power sequencing.',
        'Operates from 5.5V to 12V input. Available in SOT23-5 package.'
      ],
      specifications: {
        'Output': '5.0V',
        'Current': '200 mA',
        'Dropout': '100 mV',
        'Noise': '12 μVRMS',
        'PSRR': '75 dB',
        'Iq': '60 μA',
        'Input': '5.5-12V'
      },
      features: [
        '5V fixed output',
        'Low 100mV dropout',
        '75dB PSRR',
        'Low 12μV noise',
        '200mA output',
        'Enable pin'
      ],
      applications: [
        '5V analog power',
        'Sensor power',
        'Reference circuits',
        'Precision analog'
      ],
      faeReview: {
        author: 'Li Ming',
        title: 'Signal Chain Applications Engineer',
        content: 'The RS7150 is my go-to 5V LDO for analog circuits. Many precision analog devices require 5V supply, and this LDO delivers clean power with minimal noise. The 100mV dropout allows efficient regulation from 6V or higher inputs. Ive used it in sensor systems and data acquisition applications. The 75dB PSRR ensures supply noise doesnt affect sensitive measurements. For 5V analog power, this LDO is an excellent choice.',
        highlight: 'Clean 5V power for analog circuits'
      }
    },
    {
      partNumber: 'RS8205',
      name: '5V 500mA Buck-Boost Converter',
      shortDescription: 'Buck-boost converter with 500mA output for battery applications with variable input.',
      descriptionParagraphs: [
        'The RS8205 is a synchronous buck-boost converter featuring seamless mode transition and up to 500mA output current. It maintains regulated output when input is above, below, or equal to output voltage.',
        'With up to 92% efficiency and 2.5MHz switching frequency, the RS8205 maximizes battery life while using small external components. The device includes soft-start and protection features.',
        'Operates from 2.5V to 5.5V input with fixed or adjustable 3.3V/5V output. Available in QFN-16 package.'
      ],
      specifications: {
        'Topology': 'Buck-Boost',
        'Frequency': '2.5 MHz',
        'Output': '3.3V/5V',
        'Current': '500 mA',
        'Efficiency': '92%',
        'Input': '2.5-5.5V'
      },
      features: [
        'Buck-boost topology',
        'Seamless mode transition',
        '92% efficiency',
        '2.5MHz switching',
        '500mA output',
        'Small components'
      ],
      applications: [
        'Battery-powered devices',
        'USB power',
        'Portable electronics',
        'Li-Ion battery apps'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The RS8205 is essential for battery applications where the input voltage varies above and below the output. With Li-Ion batteries (3.0V-4.2V), maintaining a stable 3.3V output requires buck-boost topology. This converter handles the transition seamlessly without glitches. The 92% efficiency is excellent for battery life. Ive used it in portable medical devices and IoT sensors. For battery applications with variable input, this buck-boost converter is the perfect solution.',
        highlight: 'Essential buck-boost for battery applications'
      }
    }
  ]
};

// 添加完整字段到产品
function addCompleteFields(prod, categoryName) {
  // 添加ID
  prod.id = prod.partNumber.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  // 添加分类
  prod.category = categoryName;
  
  // 添加图片和数据手册
  prod.image = `/assets/brands/runic/${prod.id}.jpg`;
  prod.datasheet = `/assets/brands/runic/datasheets/${prod.partNumber}.pdf`;
  
  // 添加替代产品
  prod.alternativeParts = [
    {
      partNumber: 'LM321',
      brand: 'TI',
      specifications: { type: 'General Purpose' },
      comparison: 'Pin-compatible alternative with similar specifications',
      reason: 'Industry standard reference',
      useCase: 'General purpose applications',
      link: '#'
    }
  ];
  
  // 添加配套产品
  prod.companionParts = [
    { partNumber: 'RS6220', link: '#', description: '2.5V precision reference', category: 'Reference' },
    { partNumber: 'RS1240', link: '#', description: '16-bit precision ADC', category: 'ADC' },
    { partNumber: 'RS7118', link: '#', description: '1.8V LDO regulator', category: 'Power' }
  ];
  
  // 添加FAQ
  prod.faqs = [
    {
      question: `What is the typical application for ${prod.partNumber}?`,
      answer: `The ${prod.partNumber} is designed for ${prod.applications.slice(0, 3).join(', ')} applications. It provides excellent performance in these scenarios with proper circuit design.`,
      decisionGuide: 'Evaluate your specific requirements against the product specifications.',
      keywords: ['application', 'usage', 'design']
    },
    {
      question: `What is the power consumption of ${prod.partNumber}?`,
      answer: `The ${prod.partNumber} has optimized power consumption suitable for its performance class. Please refer to the datasheet for detailed power specifications under various operating conditions.`,
      decisionGuide: 'Consider power requirements in your system design.',
      keywords: ['power', 'consumption', 'current']
    },
    {
      question: `What package options are available for ${prod.partNumber}?`,
      answer: `${prod.partNumber} is available in industry-standard packages suitable for various assembly requirements. Check the datasheet for detailed package dimensions and thermal characteristics.`,
      decisionGuide: 'Select package based on space constraints and thermal requirements.',
      keywords: ['package', 'footprint', 'assembly']
    },
    {
      question: `Does ${prod.partNumber} require external components?`,
      answer: 'Most Runic products are designed for minimal external component count. Please refer to the typical application circuit in the datasheet for specific requirements.',
      decisionGuide: 'Follow the recommended application circuit for optimal performance.',
      keywords: ['external', 'components', 'circuit']
    },
    {
      question: `Where can I get support for ${prod.partNumber}?`,
      answer: 'LiTong Electronics provides comprehensive technical support for Runic products. Contact our FAE team for design assistance, application guidance, and troubleshooting.',
      decisionGuide: 'Contact FAE early in the design cycle for best results.',
      keywords: ['support', 'FAE', 'technical']
    }
  ];
  
  return prod;
}

// 主函数
console.log('=== Adding Products to Runic Categories ===\n');

data.categories.forEach((cat, idx) => {
  const catKey = cat.id;
  const productsToAdd = additionalProducts[catKey];
  
  if (productsToAdd) {
    console.log(`Category: ${cat.name}`);
    console.log(`Current products: ${cat.products?.length || 0}`);
    console.log(`Products to add: ${productsToAdd.length}`);
    
    // 确保products数组存在
    if (!cat.products) {
      cat.products = [];
    }
    
    // 添加产品
    productsToAdd.forEach(prod => {
      const completeProd = addCompleteFields(prod, cat.name);
      cat.products.push(completeProd);
      console.log(`  + Added: ${prod.partNumber}`);
    });
    
    console.log(`Total products now: ${cat.products.length}\n`);
  }
});

// 保存更新后的数据
fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));
console.log('Products added successfully!');

// 统计信息
const totalProducts = data.categories.reduce((sum, cat) => sum + (cat.products?.length || 0), 0);
console.log(`\n=== Summary ===`);
console.log(`Total categories: ${data.categories.length}`);
console.log(`Total products: ${totalProducts}`);
data.categories.forEach(cat => {
  console.log(`  ${cat.name}: ${cat.products?.length || 0} products`);
});
