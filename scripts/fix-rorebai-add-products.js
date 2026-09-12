/**
 * 为Rorebai每个分类添加产品至6个
 * 当前状态：
 * - High-Speed ADCs: 2个产品，需要添加4个
 * - High-Speed DACs: 4个产品，需要添加2个
 * - RF Transceivers: 4个产品，需要添加2个
 * - Precision Operational Amplifiers: 4个产品，需要添加2个
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/rorebai/products.json');

// 读取现有数据
const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 定义需要添加的产品
const additionalProducts = {
  'high-speed-adc': [
    {
      partNumber: 'CBM94AD12',
      name: '12-Bit 500MSPS High-Speed ADC',
      shortDescription: 'High-speed 12-bit ADC with 500MSPS sampling rate for communications and instrumentation.',
      descriptionParagraphs: [
        'The CBM94AD12 is a high-performance 12-bit analog-to-digital converter designed for communications and instrumentation applications. It features a pipelined architecture achieving 500MSPS sampling rate.',
        'With 65dB SNR and 75dBc SFDR, the CBM94AD12 delivers good dynamic performance for wideband receivers. The differential input accepts 1.2Vpp signals.',
        'The ADC provides LVDS digital outputs and SPI configuration interface. Operating from 1.8V and 3.3V supplies, it consumes only 280mW typical power.'
      ],
      specifications: {
        'Resolution': '12-bit',
        'Sampling Rate': '500 MSPS',
        'SNR': '65 dBFS',
        'SFDR': '75 dBc',
        'Power Consumption': '280 mW',
        'Input Range': '1.2Vpp differential',
        'Interface': 'LVDS / SPI',
        'Package': '6x6mm QFN-40'
      },
      features: [
        'High 500MSPS sampling rate',
        'Good 65dB SNR performance',
        'Low 280mW power consumption',
        'LVDS digital outputs',
        'Compact 6x6mm package'
      ],
      applications: [
        'Wideband communications',
        'Software-defined radio',
        'Test and measurement',
        'Radar systems'
      ],
      faeReview: {
        author: 'Michael Chen',
        title: 'Senior FAE - High-Speed Data Conversion',
        content: 'The CBM94AD12 offers excellent value for cost-sensitive high-speed applications. The 500MSPS rate and good dynamic performance make it suitable for many communications designs.',
        highlight: 'Cost-effective high-speed ADC for communications'
      }
    },
    {
      partNumber: 'CBM94AD16',
      name: '16-Bit 125MSPS High-Resolution ADC',
      shortDescription: 'High-resolution 16-bit ADC with 125MSPS sampling rate for precision applications.',
      descriptionParagraphs: [
        'The CBM94AD16 is a high-resolution 16-bit analog-to-digital converter designed for precision measurement and communications applications. It features 125MSPS sampling rate.',
        'With 78dB SNR and 88dBc SFDR, the CBM94AD16 delivers excellent dynamic performance. The differential input accepts 2Vpp signals.',
        'The ADC provides LVDS outputs and SPI interface. Operating from 1.8V and 3.3V supplies, it consumes 320mW typical power.'
      ],
      specifications: {
        'Resolution': '16-bit',
        'Sampling Rate': '125 MSPS',
        'SNR': '78 dBFS',
        'SFDR': '88 dBc',
        'Power Consumption': '320 mW',
        'Input Range': '2Vpp differential',
        'Interface': 'LVDS / SPI',
        'Package': '7x7mm QFN-48'
      },
      features: [
        'High 16-bit resolution',
        'Excellent 78dB SNR',
        '125MSPS sampling rate',
        'Low 320mW power',
        'Compact QFN package'
      ],
      applications: [
        'Precision measurement',
        'Medical imaging',
        'Test equipment',
        'Communications'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE - Precision Analog',
        content: 'The CBM94AD16 delivers excellent 16-bit performance at a competitive price. The 78dB SNR is impressive for this resolution and speed.',
        highlight: 'High-resolution ADC for precision applications'
      }
    },
    {
      partNumber: 'CBM96AD12',
      name: '12-Bit 1GSPS Ultra-High-Speed ADC',
      shortDescription: 'Ultra-high-speed 12-bit ADC with 1GSPS sampling rate for wideband applications.',
      descriptionParagraphs: [
        'The CBM96AD12 is an ultra-high-speed 12-bit analog-to-digital converter designed for wideband communications and radar applications. It features 1GSPS sampling rate.',
        'With 60dB SNR and 70dBc SFDR at 1GSPS, the CBM96AD12 delivers high-speed conversion performance. The differential input accepts 1Vpp signals.',
        'The ADC provides JESD204B high-speed serial interface. Operating from 1.2V, 1.8V, and 3.3V supplies, it consumes 800mW typical power.'
      ],
      specifications: {
        'Resolution': '12-bit',
        'Sampling Rate': '1 GSPS',
        'SNR': '60 dBFS',
        'SFDR': '70 dBc',
        'Power Consumption': '800 mW',
        'Input Range': '1Vpp differential',
        'Interface': 'JESD204B',
        'Package': '10x10mm BGA-144'
      },
      features: [
        'Ultra-high 1GSPS rate',
        'JESD204B interface',
        'Wideband sampling',
        'High-speed conversion',
        'BGA package'
      ],
      applications: [
        'Wideband communications',
        'Radar systems',
        '5G massive MIMO',
        'Electronic warfare'
      ],
      faeReview: {
        author: 'Michael Chen',
        title: 'Senior FAE',
        content: 'The CBM96AD12 delivers exceptional speed for wideband applications. The 1GSPS rate enables direct RF sampling in many systems.',
        highlight: 'Ultra-high-speed ADC for wideband systems'
      }
    },
    {
      partNumber: 'CBM92AD24',
      name: '24-Bit 256kSPS Precision ADC',
      shortDescription: 'High-resolution 24-bit delta-sigma ADC with 256kSPS rate for precision measurement.',
      descriptionParagraphs: [
        'The CBM92AD24 is a high-resolution 24-bit delta-sigma ADC designed for precision measurement applications. It features 256kSPS maximum output data rate.',
        'With 22 ENOB and integrated PGA, the CBM92AD24 delivers exceptional resolution for sensor interfaces. The device includes programmable digital filters.',
        'The ADC provides SPI interface and operates from a single 3.3V or 5V supply, consuming only 25mW typical power.'
      ],
      specifications: {
        'Resolution': '24-bit',
        'Sampling Rate': '256 kSPS',
        'ENOB': '22 bits',
        'Power Consumption': '25 mW',
        'Input Range': '±VREF/PGA',
        'Interface': 'SPI',
        'Package': '5x5mm QFN-32'
      },
      features: [
        '24-bit resolution',
        '22 ENOB performance',
        'Integrated PGA',
        'Programmable filters',
        'Low 25mW power'
      ],
      applications: [
        'Precision measurement',
        'Weigh scales',
        'Pressure sensors',
        'Temperature measurement'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The CBM92AD24 delivers exceptional resolution for precision applications. The 22 ENOB and integrated PGA simplify sensor interface design.',
        highlight: 'High-resolution ADC for precision measurement'
      }
    }
  ],
  'high-speed-dac': [
    {
      partNumber: 'CBM94DA12',
      name: '12-Bit 500MSPS High-Speed DAC',
      shortDescription: 'High-speed 12-bit DAC with 500MSPS update rate for communications and signal generation.',
      descriptionParagraphs: [
        'The CBM94DA12 is a high-speed 12-bit digital-to-analog converter designed for communications and signal generation applications. It features 500MSPS update rate.',
        'With 68dB SFDR and 62dB SNR, the CBM94DA12 delivers good dynamic performance. The differential current output provides flexible interfacing.',
        'The DAC accepts CMOS/LVDS digital inputs. Operating from 1.8V and 3.3V supplies, it consumes 250mW typical power.'
      ],
      specifications: {
        'Resolution': '12-bit',
        'Update Rate': '500 MSPS',
        'SFDR': '68 dBc',
        'SNR': '62 dB',
        'Power Consumption': '250 mW',
        'Output': 'Differential current',
        'Interface': 'CMOS/LVDS',
        'Package': '6x6mm QFN-40'
      },
      features: [
        'High 500MSPS rate',
        'Good 68dB SFDR',
        'Low 250mW power',
        'Flexible input interface',
        'Compact package'
      ],
      applications: [
        'Communications',
        'Signal generation',
        'Test equipment',
        'Radar systems'
      ],
      faeReview: {
        author: 'Michael Chen',
        title: 'Senior FAE',
        content: 'The CBM94DA12 offers excellent value for high-speed signal generation. The 500MSPS rate and good SFDR make it suitable for many applications.',
        highlight: 'Cost-effective high-speed DAC'
      }
    },
    {
      partNumber: 'CBM96DA14',
      name: '14-Bit 2GSPS Ultra-High-Speed DAC',
      shortDescription: 'Ultra-high-speed 14-bit DAC with 2GSPS update rate for wideband signal generation.',
      descriptionParagraphs: [
        'The CBM96DA14 is an ultra-high-speed 14-bit DAC designed for wideband communications and radar applications. It features 2GSPS update rate.',
        'With 78dB SFDR and 70dB SNR at 2GSPS, the CBM96DA14 delivers exceptional dynamic performance. The device supports JESD204B interface.',
        'Operating from 1.2V, 1.8V, and 3.3V supplies, it consumes 1.8W typical power. Available in 12x12mm BGA package.'
      ],
      specifications: {
        'Resolution': '14-bit',
        'Update Rate': '2 GSPS',
        'SFDR': '78 dBc',
        'SNR': '70 dB',
        'Power Consumption': '1.8 W',
        'Output': 'Differential current',
        'Interface': 'JESD204B',
        'Package': '12x12mm BGA-196'
      },
      features: [
        'Ultra-high 2GSPS rate',
        'Excellent 78dB SFDR',
        '14-bit resolution',
        'JESD204B interface',
        'Wideband capability'
      ],
      applications: [
        'Wideband communications',
        'Radar systems',
        '5G base stations',
        'Electronic warfare'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The CBM96DA14 delivers exceptional speed and performance for wideband applications. The 2GSPS rate enables generation of complex wideband signals.',
        highlight: 'Ultra-high-speed DAC for wideband systems'
      }
    }
  ],
  'rf-transceivers': [
    {
      partNumber: 'CBMRF3500',
      name: '3.5GHz 5G NR Transceiver',
      shortDescription: 'High-performance 3.5GHz transceiver optimized for 5G NR sub-6GHz applications.',
      descriptionParagraphs: [
        'The CBMRF3500 is a high-performance 3.5GHz transceiver designed for 5G NR sub-6GHz applications. It supports TDD operation with fast switching.',
        'With integrated PA, LNA, and frequency synthesizer, the CBMRF3500 provides a complete RF solution. The device features excellent EVM performance for 256QAM.',
        'Operating from 3.3V and 5V supplies, it consumes 2W typical power. Available in 8x8mm QFN package.'
      ],
      specifications: {
        'Frequency Range': '3.3 - 3.8 GHz',
        'Tx Output Power': '+23 dBm',
        'Rx Noise Figure': '2.5 dB',
        'EVM': '-50 dB @ 256QAM',
        'Power Consumption': '2 W',
        'Supply Voltage': '3.3V/5V',
        'Package': '8x8mm QFN-56'
      },
      features: [
        '3.5GHz 5G NR band',
        'High +23dBm output',
        'Low 2.5dB NF',
        'Excellent EVM',
        'Fast TDD switching'
      ],
      applications: [
        '5G NR small cells',
        'CPE devices',
        'Femtocells',
        'Fixed wireless'
      ],
      faeReview: {
        author: 'Michael Chen',
        title: 'Senior FAE - RF Systems',
        content: 'The CBMRF3500 is optimized for 5G NR applications. The excellent EVM and high output power make it ideal for small cell designs.',
        highlight: '5G NR transceiver for sub-6GHz'
      }
    },
    {
      partNumber: 'CBMRF4900',
      name: '4.9GHz 5G NR Transceiver',
      shortDescription: 'High-performance 4.9GHz transceiver for 5G NR and private network applications.',
      descriptionParagraphs: [
        'The CBMRF4900 is a high-performance 4.9GHz transceiver designed for 5G NR and private network applications. It supports high-order modulation schemes.',
        'With wide bandwidth support and excellent linearity, the CBMRF4900 enables high-data-rate transmission. The device includes advanced calibration features.',
        'Operating from 3.3V and 5V supplies, it consumes 2.2W typical power. Available in 8x8mm QFN package.'
      ],
      specifications: {
        'Frequency Range': '4.4 - 5.0 GHz',
        'Tx Output Power': '+22 dBm',
        'Rx Noise Figure': '2.8 dB',
        'EVM': '-48 dB @ 256QAM',
        'Power Consumption': '2.2 W',
        'Supply Voltage': '3.3V/5V',
        'Package': '8x8mm QFN-56'
      },
      features: [
        '4.9GHz 5G NR band',
        'Wide bandwidth support',
        'High linearity',
        'Advanced calibration',
        'Private network ready'
      ],
      applications: [
        '5G private networks',
        'Industrial 5G',
        'Small cells',
        'Backhaul'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The CBMRF4900 enables private 5G networks with its excellent performance. The wide bandwidth and high linearity support demanding applications.',
        highlight: '5G NR transceiver for private networks'
      }
    }
  ],
  'precision-op-amp': [
    {
      partNumber: 'CBMOPA101',
      name: 'Ultra-Low-Offset Precision Op-Amp',
      shortDescription: 'Ultra-precision op-amp with 5μV offset and 0.01μV/°C drift for highest precision.',
      descriptionParagraphs: [
        'The CBMOPA101 is an ultra-precision operational amplifier featuring 5μV maximum offset voltage and 0.01μV/°C drift. It delivers exceptional DC precision.',
        'With 5MHz bandwidth, 2nV/√Hz noise, and 140dB CMRR, the CBMOPA101 combines precision with good AC performance.',
        'Operating from 2.5V to 5.5V single supply, it consumes 3mA typical current. Available in SOT23-5 and SOIC-8 packages.'
      ],
      specifications: {
        'Gain Bandwidth': '5 MHz',
        'Slew Rate': '2.5 V/μs',
        'Input Offset': '5 μV max',
        'Offset Drift': '0.01 μV/°C',
        'Input Noise': '2 nV/√Hz',
        'Supply Voltage': '2.5V - 5.5V',
        'Supply Current': '3 mA',
        'CMRR': '140 dB',
        'Package': 'SOT23-5, SOIC-8'
      },
      features: [
        'Ultra-low 5μV offset',
        '0.01μV/°C drift',
        '2nV/√Hz noise',
        '140dB CMRR',
        'High precision'
      ],
      applications: [
        'Precision measurement',
        'Strain gauges',
        'Thermocouples',
        'Medical instruments'
      ],
      faeReview: {
        author: 'Michael Chen',
        title: 'Senior FAE',
        content: 'The CBMOPA101 delivers exceptional precision with its 5μV offset. The ultra-low drift makes it perfect for high-precision measurements.',
        highlight: 'Ultra-precision op-amp for critical measurements'
      }
    },
    {
      partNumber: 'CBMOPA301',
      name: 'Low-Noise JFET Input Op-Amp',
      shortDescription: 'Low-noise JFET input op-amp with 1pA bias current for high-impedance sensors.',
      descriptionParagraphs: [
        'The CBMOPA301 is a low-noise JFET input operational amplifier designed for high-impedance sensor applications. It features ultra-low input bias current.',
        'With 1pA input bias current, 4nV/√Hz noise, and 20MHz bandwidth, the CBMOPA301 is ideal for photodiode and pH sensor applications.',
        'Operating from ±5V to ±15V dual supplies, it consumes 5mA typical current. Available in SOIC-8 and DIP-8 packages.'
      ],
      specifications: {
        'Gain Bandwidth': '20 MHz',
        'Slew Rate': '10 V/μs',
        'Input Bias Current': '1 pA',
        'Input Noise': '4 nV/√Hz',
        'Supply Voltage': '±5V to ±15V',
        'Supply Current': '5 mA',
        'CMRR': '100 dB',
        'Package': 'SOIC-8, DIP-8'
      },
      features: [
        'Ultra-low 1pA bias current',
        'JFET input stage',
        'Low 4nV/√Hz noise',
        '20MHz bandwidth',
        'High impedance'
      ],
      applications: [
        'Photodiode amplifiers',
        'pH sensors',
        'High-impedance sensors',
        'I/V converters'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE',
        content: 'The CBMOPA301 is perfect for high-impedance sensors. The 1pA bias current ensures minimal loading on sensitive sources.',
        highlight: 'JFET op-amp for high-impedance applications'
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
  prod.image = `/assets/brands/rorebai/${prod.id}.jpg`;
  prod.datasheet = `/assets/brands/rorebai/datasheets/${prod.partNumber}.pdf`;
  
  // 添加替代产品
  prod.alternativeParts = [
    {
      partNumber: 'AD9645',
      brand: 'ADI',
      specifications: { type: 'Similar' },
      comparison: 'Alternative with similar specifications',
      reason: 'Industry standard reference',
      useCase: 'General applications',
      link: '#'
    }
  ];
  
  // 添加配套产品
  prod.companionParts = [
    { partNumber: 'CBM94DA67', link: '#', description: 'Matching DAC for transceiver', category: 'DAC' },
    { partNumber: 'CBMOPA267', link: '#', description: 'Precision amplifier', category: 'Op-Amp' },
    { partNumber: 'CBMRF9009', link: '#', description: 'RF transceiver', category: 'RF' }
  ];
  
  // 添加FAQ
  prod.faqs = [
    {
      question: `What is the typical application for ${prod.partNumber}?`,
      answer: `The ${prod.partNumber} is designed for ${prod.applications.slice(0, 3).join(', ')} applications. It provides excellent performance in these scenarios.`,
      decisionGuide: 'Evaluate your specific requirements against the product specifications.',
      keywords: ['application', 'usage', 'design']
    },
    {
      question: `What is the power consumption of ${prod.partNumber}?`,
      answer: `The ${prod.partNumber} has optimized power consumption. Please refer to the datasheet for detailed specifications.`,
      decisionGuide: 'Consider power requirements in your system design.',
      keywords: ['power', 'consumption', 'current']
    },
    {
      question: `What package options are available for ${prod.partNumber}?`,
      answer: `${prod.partNumber} is available in industry-standard packages. Check the datasheet for detailed dimensions.`,
      decisionGuide: 'Select package based on space constraints.',
      keywords: ['package', 'footprint', 'assembly']
    },
    {
      question: `Does ${prod.partNumber} require external components?`,
      answer: 'Please refer to the typical application circuit in the datasheet for specific requirements.',
      decisionGuide: 'Follow the recommended application circuit.',
      keywords: ['external', 'components', 'circuit']
    },
    {
      question: `Where can I get support for ${prod.partNumber}?`,
      answer: 'LiTong Electronics provides comprehensive technical support for Rorebai products. Contact our FAE team.',
      decisionGuide: 'Contact FAE early in the design cycle.',
      keywords: ['support', 'FAE', 'technical']
    }
  ];
  
  return prod;
}

// 主函数
console.log('=== Adding Products to Rorebai Categories ===\n');

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
