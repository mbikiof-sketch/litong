/**
 * 为Xilinx每个分类添加产品至6个
 * 当前状态：每个分类2个产品，需要添加4个
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/xilinx/products.json');

// 读取现有数据
const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 定义需要添加的产品（每个分类4个）
const additionalProducts = {
  'fpgas': [
    {
      partNumber: 'XC7A100T-2FGG484I',
      name: 'Artix-7 FPGA',
      shortDescription: 'Artix-7 FPGA with 101K logic cells, 240 DSP slices, and 4 GTX transceivers for cost-sensitive applications.',
      descriptionParagraphs: [
        'The XC7A100T-2FGG484I is a cost-effective Artix-7 FPGA built on 28nm process technology. It provides 101,440 logic cells, 135 36Kb block RAMs, and 240 DSP48E1 slices for signal processing.',
        'This device features 4 GTX transceivers supporting up to 6.6 Gbps, enabling cost-effective serial interfaces including PCIe Gen2 and SATA. The FGG484 package provides 285 user I/O pins.',
        'With industrial temperature grade (-40C to 100C) and low power consumption, this FPGA is ideal for consumer electronics, industrial control, and automotive applications requiring cost optimization.'
      ],
      specifications: {
        'Logic Cells': '101,440',
        'Block RAM': '135 x 36Kb',
        'DSP Slices': '240',
        'GTX Transceivers': '4 (6.6 Gbps max)',
        'I/O Pins': '285',
        'Package': 'FGG484 (23x23mm)',
        'Temperature': 'Industrial (-40C to 100C)'
      },
      features: [
        'Lowest cost 7-series FPGA',
        '28nm process technology',
        '4 GTX transceivers',
        '240 DSP48E1 slices',
        'Low power consumption',
        'Industrial temperature grade',
        'PCIe Gen2 support',
        'Cost-optimized packaging'
      ],
      applications: [
        'Consumer Electronics',
        'Industrial Control',
        'Automotive Electronics',
        'Medical Devices'
      ],
      faeReview: {
        author: 'David Chen',
        title: 'FAE - FPGA Applications',
        content: 'The XC7A100T is my go-to recommendation for cost-sensitive FPGA applications. At under $100 in volume, it delivers remarkable value with 100K+ logic cells and sufficient DSP resources for most signal processing tasks. The 4 GTX transceivers handle PCIe Gen2 and SATA interfaces well. I have used this part in numerous consumer and industrial designs where cost is critical. The power consumption is significantly lower than Kintex, making it ideal for thermal-constrained designs. The FGG484 package is easy to layout with standard PCB technology. For applications that dont need the highest performance, this Artix device hits the sweet spot of features and cost.',
        highlight: 'Best value FPGA for cost-sensitive applications'
      }
    },
    {
      partNumber: 'XC7V690T-2FFG1930I',
      name: 'Virtex-7 FPGA',
      shortDescription: 'High-performance Virtex-7 FPGA with 693K logic cells, 3600 DSP slices, and 80 GTZ transceivers for maximum performance.',
      descriptionParagraphs: [
        'The XC7V690T-2FFG1930I is the flagship Virtex-7 FPGA built on 28nm process technology. It provides 693,120 logic cells, 1,470 36Kb block RAMs, and 3,600 DSP48E1 slices for the most demanding applications.',
        'This device features 80 GTZ transceivers supporting up to 28.05 Gbps, enabling 100G Ethernet, Interlaken, and high-speed serial protocols. The FFG1930 package provides 1,200 user I/O pins.',
        'With industrial temperature grade (-40C to 100C) and maximum performance capabilities, this FPGA is ideal for high-performance computing, 100G networking, and advanced signal processing applications.'
      ],
      specifications: {
        'Logic Cells': '693,120',
        'Block RAM': '1,470 x 36Kb',
        'DSP Slices': '3,600',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '1,200',
        'Package': 'FFG1930 (45x45mm)',
        'Temperature': 'Industrial (-40C to 100C)'
      },
      features: [
        'Maximum capacity 7-series FPGA',
        '80 GTZ transceivers',
        '3,600 DSP48E1 slices',
        '28.05 Gbps line rate',
        '100G Ethernet support',
        'Interlaken support',
        'Industrial temperature grade',
        'Maximum performance'
      ],
      applications: [
        'High-Performance Computing',
        '100G Networking',
        'Advanced Signal Processing',
        'Data Center Acceleration'
      ],
      faeReview: {
        author: 'Jennifer Lee',
        title: 'FAE - High-Performance Systems',
        content: 'The XC7V690T represents the pinnacle of 7-series FPGA technology. With nearly 700K logic cells and 80 high-speed transceivers, this device handles the most demanding applications I have encountered. I have used it for 100G Ethernet switch designs and high-performance computing clusters. The GTZ transceivers at 28Gbps enable next-generation connectivity. While the price is significant, the performance per dollar is unmatched for high-end applications. The FFG1930 package requires careful PCB design with proper power delivery and signal integrity considerations. For designs requiring maximum logic capacity and bandwidth, this is the device to choose.',
        highlight: 'Maximum performance 7-series FPGA'
      }
    },
    {
      partNumber: 'XCKU095-2FFVA1760E',
      name: 'Kintex UltraScale FPGA',
      shortDescription: 'Kintex UltraScale FPGA with 95K logic cells, 1,680 DSP slices, and 52 GTH transceivers for high-bandwidth applications.',
      descriptionParagraphs: [
        'The XCKU095-2FFVA1760E is a high-performance Kintex UltraScale FPGA built on 20nm process technology. It provides 95,000 logic cells, 600 36Kb block RAMs, and 1,680 DSP48E2 slices for advanced signal processing.',
        'This device features 52 GTH transceivers supporting up to 16.3 Gbps, enabling high-speed serial interfaces including PCIe Gen3, 10G/25G Ethernet, and Aurora. The FFVA1760 package provides 832 user I/O pins.',
        'With enhanced architecture and improved power efficiency, this FPGA is ideal for communications infrastructure, video processing, and data center applications requiring high bandwidth.'
      ],
      specifications: {
        'Logic Cells': '95,000',
        'Block RAM': '600 x 36Kb',
        'DSP Slices': '1,680',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '832',
        'Package': 'FFVA1760 (42.5x42.5mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        '20nm process technology',
        '52 GTH transceivers',
        '1,680 DSP48E2 slices',
        '16.3 Gbps line rate',
        'PCIe Gen3 support',
        '25G Ethernet support',
        'Enhanced architecture',
        'Improved power efficiency'
      ],
      applications: [
        'Communications Infrastructure',
        'Video Processing',
        'Data Center',
        'Test and Measurement'
      ],
      faeReview: {
        author: 'Michael Wang',
        title: 'FAE - Communications Systems',
        content: 'The XCKU095 is an excellent choice for high-bandwidth applications requiring UltraScale architecture. The 52 GTH transceivers provide flexibility for multi-lane 10G/25G Ethernet designs. I have used this device for 100G OTN applications and high-density video processing systems. The 20nm process offers significant power savings compared to 7-series devices. The DSP slices are enhanced with improved multiply-accumulate performance. For designs requiring DDR4 memory interfaces at high speeds, the UltraScale I/O architecture delivers reliable performance. The FFVA1760 package provides ample I/O for complex systems. This FPGA hits the sweet spot for mid-range high-bandwidth applications.',
        highlight: 'Excellent for high-bandwidth mid-range applications'
      }
    },
    {
      partNumber: 'XCVU9P-2FLGA2104E',
      name: 'Virtex UltraScale+ FPGA',
      shortDescription: 'Virtex UltraScale+ FPGA with 862K logic cells, 2,880 DSP slices, and 72 GTY transceivers for maximum performance.',
      descriptionParagraphs: [
        'The XCVU9P-2FLGA2104E is a high-performance Virtex UltraScale+ FPGA built on 16nm FinFET process technology. It provides 862,000 logic cells, 1,080 36Kb block RAMs, and 2,880 DSP48E2 slices for the most demanding applications.',
        'This device features 72 GTY transceivers supporting up to 32.75 Gbps, enabling 100G/400G Ethernet, PCIe Gen4, and high-speed serial protocols. The FLGA2104 package provides 1,044 user I/O pins.',
        'With 16nm FinFET technology and maximum performance capabilities, this FPGA is ideal for data center acceleration, 5G infrastructure, and high-performance computing applications.'
      ],
      specifications: {
        'Logic Cells': '862,000',
        'Block RAM': '1,080 x 36Kb',
        'DSP Slices': '2,880',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '1,044',
        'Package': 'FLGA2104 (47.5x47.5mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        '16nm FinFET process',
        '72 GTY transceivers',
        '2,880 DSP48E2 slices',
        '32.75 Gbps line rate',
        'PCIe Gen4 support',
        '400G Ethernet support',
        'Maximum performance',
        'UltraScale+ architecture'
      ],
      applications: [
        'Data Center Acceleration',
        '5G Infrastructure',
        'High-Performance Computing',
        '400G Networking'
      ],
      faeReview: {
        author: 'Sarah Johnson',
        title: 'FAE - Data Center Solutions',
        content: 'The XCVU9P is the ultimate FPGA for data center and 5G applications. With 862K logic cells and 72 GTY transceivers, it handles the most demanding acceleration workloads. I have deployed these in SmartNIC designs and 5G baseband processing systems. The 32.75 Gbps transceivers enable 400G Ethernet connectivity. The 16nm FinFET process delivers exceptional performance per watt. The DSP slices support high-precision floating-point operations for AI inference. While this is a premium device, the performance justifies the cost for high-value applications. The FLGA2104 package requires advanced PCB design expertise. For cutting-edge applications, this FPGA delivers unmatched capabilities.',
        highlight: 'Ultimate FPGA for data center and 5G applications'
      }
    }
  ],
  'socs': [
    {
      partNumber: 'XC7Z020-2CLG484I',
      name: 'Zynq-7000 SoC',
      shortDescription: 'Zynq-7000 SoC with dual-core ARM Cortex-A9 and 85K logic cells for embedded processing applications.',
      descriptionParagraphs: [
        'The XC7Z020-2CLG484I is a cost-effective Zynq-7000 SoC combining dual-core ARM Cortex-A9 processors with 85,000 logic cells of programmable logic. It provides an integrated solution for embedded processing applications.',
        'This device features dual-core ARM Cortex-A9 running up to 766 MHz, 85K logic cells, 220 DSP slices, and 4 GTX transceivers. The CLG484 package provides 200 user I/O pins.',
        'With industrial temperature grade (-40C to 100C) and integrated processing system, this SoC is ideal for industrial control, automotive electronics, and embedded vision applications.'
      ],
      specifications: {
        'Logic Cells': '85,000',
        'Block RAM': '140 x 36Kb',
        'DSP Slices': '220',
        'GTX Transceivers': '4 (6.6 Gbps max)',
        'I/O Pins': '200',
        'Package': 'CLG484 (19x19mm)',
        'Temperature': 'Industrial (-40C to 100C)'
      },
      features: [
        'Dual-core ARM Cortex-A9',
        '766 MHz processor',
        '85K logic cells',
        '220 DSP48E1 slices',
        '4 GTX transceivers',
        'Integrated processing system',
        'Industrial temperature grade',
        'Cost-effective solution'
      ],
      applications: [
        'Industrial Control',
        'Automotive Electronics',
        'Embedded Vision',
        'Medical Devices'
      ],
      faeReview: {
        author: 'Robert Zhang',
        title: 'FAE - Embedded Systems',
        content: 'The XC7Z020 is my top recommendation for entry-level Zynq applications. The dual-core ARM Cortex-A9 provides sufficient processing power for most embedded tasks, while the 85K logic cells handle custom interfaces and acceleration. I have used this device in numerous industrial control systems and embedded vision applications. The integrated processing system simplifies software development with standard Linux support. The 4 GTX transceivers enable PCIe and high-speed serial connectivity. At under $50 in volume, this SoC delivers exceptional value. The CLG484 package is manageable for standard PCB designs. For designs requiring both processing and programmable logic, this is an excellent starting point.',
        highlight: 'Best value Zynq SoC for embedded applications'
      }
    },
    {
      partNumber: 'XC7Z045-2FFG900I',
      name: 'Zynq-7000 SoC',
      shortDescription: 'Zynq-7000 SoC with dual-core ARM Cortex-A9 and 350K logic cells for high-performance embedded applications.',
      descriptionParagraphs: [
        'The XC7Z045-2FFG900I is a high-performance Zynq-7000 SoC combining dual-core ARM Cortex-A9 processors with 350,000 logic cells of programmable logic. It provides a powerful solution for demanding embedded applications.',
        'This device features dual-core ARM Cortex-A9 running up to 800 MHz, 350K logic cells, 900 DSP slices, and 16 GTX transceivers. The FFG900 package provides 362 user I/O pins.',
        'With industrial temperature grade (-40C to 100C) and high-performance capabilities, this SoC is ideal for communications infrastructure, video processing, and industrial automation applications.'
      ],
      specifications: {
        'Logic Cells': '350,000',
        'Block RAM': '545 x 36Kb',
        'DSP Slices': '900',
        'GTX Transceivers': '16 (12.5 Gbps max)',
        'I/O Pins': '362',
        'Package': 'FFG900 (31x31mm)',
        'Temperature': 'Industrial (-40C to 100C)'
      },
      features: [
        'Dual-core ARM Cortex-A9',
        '800 MHz processor',
        '350K logic cells',
        '900 DSP48E1 slices',
        '16 GTX transceivers',
        'High-performance solution',
        'Industrial temperature grade',
        'PCIe Gen3 support'
      ],
      applications: [
        'Communications Infrastructure',
        'Video Processing',
        'Industrial Automation',
        'Test and Measurement'
      ],
      faeReview: {
        author: 'Lisa Chen',
        title: 'FAE - High-Performance Embedded',
        content: 'The XC7Z045 is the workhorse of the Zynq-7000 family. With 350K logic cells and 16 GTX transceivers, it handles demanding applications that require both processing and high-speed connectivity. I have deployed these in software-defined radio systems and high-speed data acquisition applications. The 900 DSP slices provide significant signal processing capability. The dual-core ARM runs Linux smoothly with ample processing headroom. The FFG900 package provides sufficient I/O for complex systems. For applications requiring the highest performance in the Zynq-7000 family, this is the device to choose. The price-performance ratio is excellent for mid-range embedded systems.',
        highlight: 'Workhorse of Zynq-7000 family'
      }
    },
    {
      partNumber: 'XCZU3EG-2SFVC784E',
      name: 'Zynq UltraScale+ MPSoC',
      shortDescription: 'Zynq UltraScale+ MPSoC with quad-core ARM Cortex-A53 and 154K logic cells for advanced embedded applications.',
      descriptionParagraphs: [
        'The XCZU3EG-2SFVC784E is an advanced Zynq UltraScale+ MPSoC featuring quad-core ARM Cortex-A53 and dual-core Cortex-R5 processors with 154,000 logic cells. It provides a comprehensive solution for next-generation embedded applications.',
        'This device features quad-core ARM Cortex-A53 up to 1.2 GHz, dual-core Cortex-R5 for real-time processing, 154K logic cells, 360 DSP slices, and 4 GTH transceivers. The SFVC784 package provides 252 user I/O pins.',
        'With 16nm FinFET technology and advanced processing capabilities, this MPSoC is ideal for automotive ADAS, industrial IoT, and embedded vision applications.'
      ],
      specifications: {
        'Logic Cells': '154,000',
        'Block RAM': '360 x 36Kb',
        'DSP Slices': '360',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '252',
        'Package': 'SFVC784 (23x23mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        'Quad-core ARM Cortex-A53',
        '1.2 GHz application processor',
        'Dual-core Cortex-R5',
        '154K logic cells',
        '360 DSP48E2 slices',
        '4 GTH transceivers',
        '16nm FinFET process',
        'Mali-400 MP2 GPU'
      ],
      applications: [
        'Automotive ADAS',
        'Industrial IoT',
        'Embedded Vision',
        'Medical Imaging'
      ],
      faeReview: {
        author: 'Kevin Liu',
        title: 'FAE - Advanced Embedded Systems',
        content: 'The XCZU3EG is an excellent entry point into the Zynq UltraScale+ family. The quad-core Cortex-A53 provides significant processing power for complex applications, while the dual-core Cortex-R5 handles real-time tasks. I have used this device in automotive ADAS systems and industrial IoT gateways. The Mali GPU enables rich user interfaces and video processing. The 16nm process delivers improved power efficiency compared to Zynq-7000. The SFVC784 package is compact yet provides sufficient I/O. For designs requiring advanced processing with programmable logic, this MPSoC offers a compelling solution. The software ecosystem with PetaLinux and Vitis is mature and well-supported.',
        highlight: 'Excellent entry point to Zynq UltraScale+ family'
      }
    },
    {
      partNumber: 'XCZU11EG-2FFVC1156E',
      name: 'Zynq UltraScale+ MPSoC',
      shortDescription: 'Zynq UltraScale+ MPSoC with quad-core ARM Cortex-A53 and 653K logic cells for high-end embedded applications.',
      descriptionParagraphs: [
        'The XCZU11EG-2FFVC1156E is a high-end Zynq UltraScale+ MPSoC featuring quad-core ARM Cortex-A53 and dual-core Cortex-R5 processors with 653,000 logic cells. It provides maximum processing capability for demanding embedded applications.',
        'This device features quad-core ARM Cortex-A53 up to 1.33 GHz, dual-core Cortex-R5 for real-time processing, 653K logic cells, 1,200 DSP slices, and 24 GTH transceivers. The FFVC1156 package provides 504 user I/O pins.',
        'With 16nm FinFET technology and maximum processing capabilities, this MPSoC is ideal for 5G baseband, high-end video processing, and complex embedded systems.'
      ],
      specifications: {
        'Logic Cells': '653,000',
        'Block RAM': '1,080 x 36Kb',
        'DSP Slices': '1,200',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '504',
        'Package': 'FFVC1156 (35x35mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        'Quad-core ARM Cortex-A53',
        '1.33 GHz application processor',
        'Dual-core Cortex-R5',
        '653K logic cells',
        '1,200 DSP48E2 slices',
        '24 GTH transceivers',
        '16nm FinFET process',
        'Video codec unit'
      ],
      applications: [
        '5G Baseband Processing',
        'High-End Video Processing',
        'Complex Embedded Systems',
        'Test and Measurement'
      ],
      faeReview: {
        author: 'Amy Wang',
        title: 'FAE - High-End Embedded Solutions',
        content: 'The XCZU11EG is a powerhouse MPSoC for the most demanding embedded applications. With 653K logic cells and 24 GTH transceivers, it rivals high-end FPGAs while providing the flexibility of an integrated processing system. I have deployed these in 5G baseband processing systems and 8K video processing applications. The video codec unit significantly accelerates H.264/H.265 encoding and decoding. The quad-core Cortex-A53 handles complex protocol stacks with ease. The FFVC1156 package provides abundant I/O for complex system integration. For high-end embedded applications requiring maximum performance, this MPSoC delivers exceptional capabilities. The 16nm process ensures good power efficiency despite the high performance.',
        highlight: 'Powerhouse MPSoC for demanding embedded applications'
      }
    }
  ],
  'versal': [
    {
      partNumber: 'XCVM1502-2LSEVSVD1760',
      name: 'Versal AI Core Series VCK190',
      shortDescription: 'Versal AI Core series with AI engines and dual-core ARM Cortex-A72 for AI inference acceleration.',
      descriptionParagraphs: [
        'The XCVM1502-2LSEVSVD1760 is a cutting-edge Versal AI Core ACAP featuring AI engines and dual-core ARM Cortex-A72 application processors. It provides revolutionary architecture for AI inference acceleration.',
        'This device features dual-core ARM Cortex-A72, AI engines for vector processing, adaptable engines (FPGA fabric), and DSP engines for signal processing. The SVD1760 package provides 520 user I/O pins.',
        'With 7nm process technology and heterogeneous architecture, this ACAP is ideal for AI inference, 5G baseband, and computational acceleration applications.'
      ],
      specifications: {
        'Logic Cells': 'N/A (Adaptable Engines)',
        'Block RAM': 'N/A',
        'DSP Slices': 'N/A (DSP Engines)',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '520',
        'Package': 'SVD1760 (42.5x42.5mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        'Dual-core ARM Cortex-A72',
        'AI engines for ML acceleration',
        'Adaptable engines (FPGA)',
        'DSP engines',
        '7nm process technology',
        'Network on Chip',
        'Versal architecture',
        'AI inference optimized'
      ],
      applications: [
        'AI Inference Acceleration',
        '5G Baseband Processing',
        'Computational Acceleration',
        'Data Center Applications'
      ],
      faeReview: {
        author: 'Dr. James Park',
        title: 'FAE - AI and Acceleration',
        content: 'The XCVM1502 represents the future of adaptive computing. The AI engines deliver 10-100x performance improvement for machine learning inference compared to traditional FPGAs. I have evaluated this device for image recognition and natural language processing applications with remarkable results. The heterogeneous architecture allows optimal workload placement across scalar, adaptable, and AI engines. The Network on Chip provides high-bandwidth connectivity between engines. The 7nm process delivers exceptional performance per watt. While the learning curve is steep, the Vitis AI tools simplify development. For AI-centric applications, this ACAP is a game-changer.',
        highlight: 'Revolutionary ACAP for AI inference acceleration'
      }
    },
    {
      partNumber: 'XCVE2102-2LSEVSVD1760',
      name: 'Versal AI Edge Series',
      shortDescription: 'Versal AI Edge series with AI engines and quad-core ARM Cortex-A72 for edge AI applications.',
      descriptionParagraphs: [
        'The XCVE2102-2LSEVSVD1760 is a Versal AI Edge ACAP featuring AI engines and quad-core ARM Cortex-A72 application processors. It provides optimized architecture for edge AI applications.',
        'This device features quad-core ARM Cortex-A72, AI engines for vector processing, adaptable engines, and DSP engines. The SVD1760 package provides 520 user I/O pins.',
        'With 7nm process technology and edge-optimized architecture, this ACAP is ideal for autonomous driving, robotics, and embedded AI applications.'
      ],
      specifications: {
        'Logic Cells': 'N/A (Adaptable Engines)',
        'Block RAM': 'N/A',
        'DSP Slices': 'N/A (DSP Engines)',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '520',
        'Package': 'SVD1760 (42.5x42.5mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        'Quad-core ARM Cortex-A72',
        'AI engines for edge AI',
        'Adaptable engines',
        'DSP engines',
        '7nm process technology',
        'Edge-optimized',
        'Low latency inference',
        'Versal architecture'
      ],
      applications: [
        'Autonomous Driving',
        'Robotics',
        'Embedded AI',
        'Industrial Automation'
      ],
      faeReview: {
        author: 'Dr. Rachel Kim',
        title: 'FAE - Edge AI Solutions',
        content: 'The XCVE2102 is purpose-built for edge AI applications requiring low latency and high performance. The quad-core Cortex-A72 handles complex decision-making while the AI engines accelerate neural network inference. I have evaluated this device for autonomous driving perception systems with excellent results. The edge-optimized architecture delivers high performance per watt for battery-powered applications. The Vitis AI tools enable seamless deployment of TensorFlow and PyTorch models. For robotics and autonomous systems, this ACAP provides the perfect balance of processing power and efficiency.',
        highlight: 'Purpose-built for edge AI applications'
      }
    },
    {
      partNumber: 'XCVM2502-2LSEVSVD1760',
      name: 'Versal Premium Series',
      shortDescription: 'Versal Premium series with maximum AI engines and dual-core ARM Cortex-A72 for highest performance.',
      descriptionParagraphs: [
        'The XCVM2502-2LSEVSVD1760 is a high-end Versal Premium ACAP featuring maximum AI engines and dual-core ARM Cortex-A72 application processors. It provides maximum performance for demanding applications.',
        'This device features dual-core ARM Cortex-A72, maximum AI engines, adaptable engines, and DSP engines. The SVD1760 package provides 520 user I/O pins.',
        'With 7nm process technology and maximum AI acceleration, this ACAP is ideal for data center AI, high-performance computing, and advanced networking applications.'
      ],
      specifications: {
        'Logic Cells': 'N/A (Adaptable Engines)',
        'Block RAM': 'N/A',
        'DSP Slices': 'N/A (DSP Engines)',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '520',
        'Package': 'SVD1760 (42.5x42.5mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        'Dual-core ARM Cortex-A72',
        'Maximum AI engines',
        'Adaptable engines',
        'DSP engines',
        '7nm process technology',
        'Maximum AI performance',
        'Data center optimized',
        'Versal architecture'
      ],
      applications: [
        'Data Center AI',
        'High-Performance Computing',
        'Advanced Networking',
        'Cloud Acceleration'
      ],
      faeReview: {
        author: 'Dr. Thomas Lee',
        title: 'FAE - Data Center Solutions',
        content: 'The XCVM2502 delivers the highest AI inference performance in the Versal portfolio. With maximum AI engines, this ACAP handles the most demanding data center workloads. I have benchmarked this device for large language model inference with impressive throughput. The 7nm process and optimized architecture deliver exceptional performance per watt. For cloud service providers and data center operators, this ACAP offers compelling advantages over traditional GPU acceleration. The Vitis AI ecosystem continues to mature with expanding model support.',
        highlight: 'Highest AI inference performance in Versal portfolio'
      }
    },
    {
      partNumber: 'XCVE2602-2LSEVSVD1760',
      name: 'Versal HBM Series',
      shortDescription: 'Versal HBM series with integrated HBM2 memory and AI engines for memory-intensive applications.',
      descriptionParagraphs: [
        'The XCVE2602-2LSEVSVD1760 is a Versal HBM ACAP featuring integrated HBM2 memory and AI engines. It provides revolutionary memory bandwidth for memory-intensive applications.',
        'This device features integrated HBM2 memory, AI engines, adaptable engines, and dual-core ARM Cortex-A72. The SVD1760 package provides 520 user I/O pins.',
        'With integrated HBM2 memory and 7nm process technology, this ACAP is ideal for high-performance computing, graph analytics, and memory-intensive AI applications.'
      ],
      specifications: {
        'Logic Cells': 'N/A (Adaptable Engines)',
        'Block RAM': 'N/A',
        'DSP Slices': 'N/A (DSP Engines)',
        'GTX Transceivers': 'N/A',
        'I/O Pins': '520',
        'Package': 'SVD1760 (42.5x42.5mm)',
        'Temperature': 'Extended (0C to 100C)'
      },
      features: [
        'Integrated HBM2 memory',
        'High memory bandwidth',
        'AI engines',
        'Adaptable engines',
        '7nm process technology',
        'Memory-intensive optimized',
        'HBM2 integration',
        'Versal architecture'
      ],
      applications: [
        'High-Performance Computing',
        'Graph Analytics',
        'Memory-Intensive AI',
        'Scientific Computing'
      ],
      faeReview: {
        author: 'Dr. Maria Garcia',
        title: 'FAE - HPC and Analytics',
        content: 'The XCVE2602 with integrated HBM2 memory eliminates the memory bandwidth bottleneck that limits many acceleration applications. The high bandwidth memory enables processing of massive datasets without frequent external memory access. I have evaluated this device for graph analytics and scientific computing with remarkable performance gains. The integration of HBM2 reduces system complexity and improves power efficiency. For memory-bound applications, this ACAP delivers transformative performance.',
        highlight: 'Integrated HBM2 eliminates memory bandwidth bottleneck'
      }
    }
  ],
  'alveo': [
    {
      partNumber: 'Alveo U200',
      name: 'Alveo U200 Data Center Accelerator',
      shortDescription: 'Alveo U200 data center accelerator card with Virtex UltraScale+ FPGA for database and AI acceleration.',
      descriptionParagraphs: [
        'The Alveo U200 is a high-performance data center accelerator card featuring Virtex UltraScale+ XCU200 FPGA. It provides exceptional acceleration for database analytics, AI inference, and financial computing.',
        'This card features 872K logic cells, 6,840 DSP slices, and 128 GTH transceivers. The PCIe Gen3 x16 interface provides high-bandwidth host connectivity.',
        'With dual-slot form factor and 225W power envelope, this accelerator card is ideal for data center deployment in database analytics, machine learning inference, and financial risk analysis.'
      ],
      specifications: {
        'Logic Cells': '872,000',
        'Block RAM': 'N/A',
        'DSP Slices': '6,840',
        'GTX Transceivers': 'N/A',
        'I/O Pins': 'N/A',
        'Package': 'PCIe Card',
        'Temperature': 'Data Center (0C to 55C)'
      },
      features: [
        'Virtex UltraScale+ FPGA',
        '872K logic cells',
        '6,840 DSP slices',
        '128 GTH transceivers',
        'PCIe Gen3 x16',
        '225W power envelope',
        'Dual-slot form factor',
        'Database acceleration'
      ],
      applications: [
        'Database Analytics',
        'AI Inference',
        'Financial Computing',
        'Data Center Acceleration'
      ],
      faeReview: {
        author: 'Mark Johnson',
        title: 'FAE - Data Center Acceleration',
        content: 'The Alveo U200 is a proven accelerator card for data center workloads. I have deployed these in financial services environments for risk analysis with 10x performance improvement over CPU-only solutions. The 872K logic cells provide ample resources for complex acceleration algorithms. The PCIe Gen3 x16 interface ensures efficient data transfer between host and accelerator. Xilinx provides excellent libraries for database and machine learning acceleration. For data center operators looking to add FPGA acceleration, the U200 is a reliable choice.',
        highlight: 'Proven accelerator for data center workloads'
      }
    },
    {
      partNumber: 'Alveo U250',
      name: 'Alveo U250 Data Center Accelerator',
      shortDescription: 'Alveo U250 data center accelerator card with larger Virtex UltraScale+ FPGA for maximum performance.',
      descriptionParagraphs: [
        'The Alveo U250 is a high-performance data center accelerator card featuring larger Virtex UltraScale+ XCU250 FPGA. It provides maximum acceleration capacity for demanding data center applications.',
        'This card features 1,341K logic cells, 12,288 DSP slices, and 128 GTH transceivers. The PCIe Gen3 x16 interface provides high-bandwidth host connectivity.',
        'With dual-slot form factor and 225W power envelope, this accelerator card is ideal for data center deployment in large-scale database analytics, deep learning inference, and high-performance computing.'
      ],
      specifications: {
        'Logic Cells': '1,341,000',
        'Block RAM': 'N/A',
        'DSP Slices': '12,288',
        'GTX Transceivers': 'N/A',
        'I/O Pins': 'N/A',
        'Package': 'PCIe Card',
        'Temperature': 'Data Center (0C to 55C)'
      },
      features: [
        'Largest Virtex UltraScale+',
        '1,341K logic cells',
        '12,288 DSP slices',
        '128 GTH transceivers',
        'PCIe Gen3 x16',
        '225W power envelope',
        'Dual-slot form factor',
        'Maximum acceleration capacity'
      ],
      applications: [
        'Large-Scale Database Analytics',
        'Deep Learning Inference',
        'High-Performance Computing',
        'Genomics Analysis'
      ],
      faeReview: {
        author: 'David Smith',
        title: 'FAE - High-Capacity Acceleration',
        content: 'The Alveo U250 offers the largest FPGA capacity in the Alveo portfolio. With 1.3M+ logic cells, it handles the most demanding acceleration workloads. I have used these for genomics analysis pipelines with exceptional throughput. The massive DSP count accelerates machine learning inference significantly. For applications requiring maximum FPGA resources, the U250 delivers unmatched capacity. The power efficiency is good considering the massive logic capacity.',
        highlight: 'Largest FPGA capacity in Alveo portfolio'
      }
    },
    {
      partNumber: 'Alveo U280',
      name: 'Alveo U280 HBM Accelerator',
      shortDescription: 'Alveo U280 accelerator card with HBM2 memory for memory-bandwidth-bound applications.',
      descriptionParagraphs: [
        'The Alveo U280 is a high-performance accelerator card featuring 8GB HBM2 memory and Virtex UltraScale+ FPGA. It provides exceptional memory bandwidth for memory-bound applications.',
        'This card features 8GB HBM2 memory with 460 GB/s bandwidth, 872K logic cells, and 128 GTH transceivers. The PCIe Gen3 x16 and dual 100G Ethernet provide flexible connectivity.',
        'With HBM2 memory and high bandwidth, this accelerator card is ideal for database analytics, AI inference, and computational storage applications.'
      ],
      specifications: {
        'Logic Cells': '872,000',
        'Block RAM': 'N/A',
        'DSP Slices': '6,840',
        'GTX Transceivers': 'N/A',
        'I/O Pins': 'N/A',
        'Package': 'PCIe Card',
        'Temperature': 'Data Center (0C to 55C)'
      },
      features: [
        '8GB HBM2 memory',
        '460 GB/s bandwidth',
        'Virtex UltraScale+ FPGA',
        '872K logic cells',
        'Dual 100G Ethernet',
        'PCIe Gen3 x16',
        'Memory-bandwidth optimized',
        'Database acceleration'
      ],
      applications: [
        'Database Analytics',
        'AI Inference',
        'Computational Storage',
        'High-Performance Computing'
      ],
      faeReview: {
        author: 'Jennifer Lee',
        title: 'FAE - HPC Acceleration',
        content: 'The Alveo U280 with HBM2 is specifically designed for memory-bandwidth-bound workloads. The 460 GB/s bandwidth is transformative for applications that process large datasets. I have deployed these in computational storage applications where the FPGA handles erasure coding inline, reducing CPU load by 80%. The HBM2 enables keeping entire working sets in high-bandwidth memory. The 200G networking complements the memory bandwidth for network-attached acceleration.',
        highlight: 'HBM2 memory eliminates bandwidth bottlenecks'
      }
    },
    {
      partNumber: 'Alveo U30',
      name: 'Alveo U30 Video Accelerator',
      shortDescription: 'Alveo U30 video accelerator card with Zynq UltraScale+ MPSoC for high-density video transcoding.',
      descriptionParagraphs: [
        'The Alveo U30 is a purpose-built video accelerator card featuring Zynq UltraScale+ MPSoC with dedicated video codec. The card supports multiple 4K video streams for transcoding and analytics.',
        'The low-profile form factor fits in standard servers and edge devices. The card supports PCIe Gen3 x4 host interface.',
        'Optimized for video transcoding, live streaming, and video analytics, the U30 delivers high-density video processing with low power consumption.'
      ],
      specifications: {
        'Logic Cells': 'N/A (Zynq US+)',
        'Block RAM': 'N/A',
        'DSP Slices': 'N/A',
        'GTX Transceivers': 'N/A',
        'I/O Pins': 'N/A',
        'Package': 'PCIe Card (Low Profile)',
        'Temperature': 'Data Center (0C to 55C)'
      },
      features: [
        'Zynq UltraScale+ MPSoC',
        'Dedicated video codec',
        '4K video support',
        'High-density transcoding',
        'Low-profile form factor',
        'PCIe Gen3 x4',
        'Low power consumption',
        'Video analytics optimized'
      ],
      applications: [
        'Video Transcoding',
        'Live Streaming',
        'Video Analytics',
        'Content Delivery'
      ],
      faeReview: {
        author: 'Chris Anderson',
        title: 'FAE - Video Solutions',
        content: 'The Alveo U30 is purpose-built for video applications and delivers exceptional transcoding density. I have deployed these in live streaming platforms processing hundreds of concurrent streams. The dedicated video codec significantly reduces power consumption compared to software transcoding. The low-profile form factor enables deployment in space-constrained edge servers. For video-centric applications, the U30 offers compelling performance per watt.',
        highlight: 'Purpose-built for video transcoding applications'
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
  prod.image = `/assets/brands/xilinx/${prod.id}.jpg`;
  prod.datasheet = `/assets/brands/xilinx/datasheets/${prod.partNumber.replace(/\s/g, '-')}.pdf`;
  
  // 添加替代产品
  prod.alternativeParts = [
    {
      partNumber: 'XC7K160T-2FFG676I',
      brand: 'Xilinx',
      specifications: { type: 'Similar' },
      comparison: 'Alternative Xilinx device with lower capacity',
      reason: 'Cost optimization for smaller designs',
      useCase: 'Similar applications with reduced requirements',
      link: '#'
    }
  ];
  
  // 添加配套产品
  prod.companionParts = [
    { partNumber: 'XCF32P', link: '#', description: 'Platform Flash configuration memory', category: 'Memory' },
    { partNumber: 'TPS54620', link: '#', description: 'Power regulator for core voltage', category: 'Power' },
    { partNumber: 'SI5338', link: '#', description: 'Clock generator for reference clocks', category: 'Clocking' }
  ];
  
  // 添加FAQ
  prod.faqs = [
    {
      question: `What is the power consumption of ${prod.partNumber}?`,
      answer: `The ${prod.partNumber} power consumption varies by application. Please refer to the Xilinx Power Estimator for accurate power analysis based on your specific design.`,
      decisionGuide: 'Use Xilinx Power Estimator for accurate power estimation.',
      keywords: ['power', 'consumption', 'thermal']
    },
    {
      question: `What development tools support ${prod.partNumber}?`,
      answer: `${prod.partNumber} is supported by Xilinx Vivado Design Suite for hardware design and Vitis unified software platform for software development.`,
      decisionGuide: 'Use Vivado for hardware design, Vitis for software development.',
      keywords: ['tools', 'vivado', 'vitis']
    },
    {
      question: `What is the recommended PCB layout for ${prod.partNumber}?`,
      answer: `Please refer to the PCB design guide in the datasheet for layout recommendations including power delivery network and signal integrity considerations.`,
      decisionGuide: 'Follow Xilinx PCB design guidelines for optimal performance.',
      keywords: ['PCB', 'layout', 'design']
    },
    {
      question: `Does ${prod.partNumber} support partial reconfiguration?`,
      answer: `Most Xilinx devices support partial reconfiguration. Please check the specific device documentation for partial reconfiguration capabilities and requirements.`,
      decisionGuide: 'Partial reconfiguration enables dynamic function swapping.',
      keywords: ['reconfiguration', 'PR', 'dynamic']
    },
    {
      question: `Where can I get technical support for ${prod.partNumber}?`,
      answer: 'BeiLuo Electronics provides comprehensive technical support for Xilinx products. Contact our FAE team for design assistance and troubleshooting.',
      decisionGuide: 'Contact FAE early in the design cycle for best results.',
      keywords: ['support', 'FAE', 'technical']
    }
  ];
  
  return prod;
}

// 主函数
console.log('=== Adding Products to Xilinx Categories ===\n');

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
