const fs = require('fs');

// Fix solutions.json - Add 4th solution
const solutionsPath = 'data/lattice/solutions.json';
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add 4th solution
const newSolution = {
  id: "5g-infrastructure-acceleration",
  title: "5G Infrastructure Acceleration",
  subtitle: "High-Performance FPGA Acceleration for 5G Baseband Processing",
  description: "Accelerate 5G baseband processing with Lattice FPGAs. Enable flexible, high-performance signal processing for small cells, massive MIMO, and ORAN applications with ultra-low power consumption.",
  industry: [
    "Telecommunications",
    "5G Infrastructure",
    "Data Center",
    "Edge Computing"
  ],
  applications: [
    "5G small cell baseband",
    "Massive MIMO processing",
    "ORAN fronthaul acceleration",
    "LDPC encoding/decoding",
    "Beamforming and precoding"
  ],
  features: [
    {
      title: "High Throughput",
      description: "Support for 100+ Gbps data rates with parallel processing architecture"
    },
    {
      title: "Low Latency",
      description: "Sub-microsecond processing latency for real-time 5G applications"
    },
    {
      title: "Flexible Architecture",
      description: "Programmable logic enables adaptation to evolving 5G standards"
    },
    {
      title: "Power Efficient",
      description: "Ultra-low power consumption enables deployment in space-constrained base stations"
    }
  ],
  products: [
    "LFD4NX-100",
    "LFD2NX-40",
    "LCMXO5-1200"
  ],
  resources: {
    documentation: [
      {
        title: "5G Solution Guide",
        url: "https://www.latticesemi.com/5G"
      },
      {
        title: "ORAN Implementation Guide",
        url: "https://www.latticesemi.com/5G"
      }
    ],
    software: [
      {
        title: "Lattice Radiant",
        url: "https://www.latticesemi.com/Radiant"
      }
    ]
  },
  slug: "5g-infrastructure-acceleration",
  longDescription: "Lattice 5G Infrastructure Acceleration Solution provides high-performance FPGA-based processing for next-generation 5G networks. This solution addresses the demanding requirements of 5G baseband processing including massive MIMO, beamforming, and ORAN fronthaul acceleration.\n\nThe solution leverages Lattice's high-capacity Nexus FPGAs to deliver the processing power required for 5G applications while maintaining the ultra-low power consumption essential for deployment in space-constrained base stations. Key capabilities include LDPC encoding and decoding for data channels, Polar coding for control channels, FFT/iFFT processing for OFDM, and digital pre-distortion for power amplifier linearization.\n\nFor ORAN (Open Radio Access Network) applications, Lattice FPGAs provide the flexible, high-performance processing needed for fronthaul interface handling, including eCPRI compression and decompression, timing synchronization, and data flow management. The programmable nature of FPGAs enables operators to adapt to evolving 5G standards and deploy new features through software updates.\n\nThe solution delivers significant advantages over traditional processor-based implementations including deterministic latency, parallel processing capabilities, and the ability to implement custom algorithms optimized for specific deployment scenarios. Power consumption is typically 50-70% lower than equivalent processor-based solutions, reducing cooling requirements and enabling deployment in challenging environments.\n\nLattice provides comprehensive reference designs, IP cores, and software tools to accelerate 5G product development. Our FAE team has extensive experience with 5G system design and can provide guidance on architecture optimization, signal processing implementation, and system integration.",
  benefits: [
    "Support for 100+ Gbps data rates with parallel processing",
    "Sub-microsecond latency for real-time 5G applications",
    "Flexible architecture adapts to evolving 5G standards",
    "50-70% lower power than processor-based solutions",
    "Deterministic performance for critical timing applications",
    "Comprehensive ORAN fronthaul support"
  ],
  coreAdvantages: [
    {
      title: "High Performance",
      description: "Parallel processing architecture delivers the computational throughput required for 5G baseband processing including massive MIMO and advanced beamforming algorithms."
    },
    {
      title: "Ultra-Low Power",
      description: "FD-SOI technology enables high-performance processing with power consumption 50-70% lower than competing solutions, critical for space-constrained base station deployments."
    },
    {
      title: "Standard Flexibility",
      description: "Programmable FPGA architecture enables adaptation to evolving 5G standards (3GPP Release 16, 17, and beyond) without hardware redesign, protecting long-term investments."
    }
  ],
  bomList: [
    {
      component: "Lattice FPGA (LFD4NX-100/LFD2NX-40)",
      quantity: "1-2",
      description: "Baseband processing accelerator"
    },
    {
      component: "High-Speed Memory (DDR4)",
      quantity: "2-4",
      description: "Data buffering and lookup tables"
    },
    {
      component: "10G/25G Ethernet PHY",
      quantity: "2-4",
      description: "ORAN fronthaul connectivity"
    },
    {
      component: "Clock Synchronization IC",
      quantity: "1",
      description: "IEEE 1588/SyncE timing"
    }
  ],
  technicalSpecs: {
    "Data Rate": "Up to 100 Gbps",
    "Latency": "<1 microsecond",
    "Power": "<5W typical",
    "ORAN Support": "eCPRI, 7-2x split",
    "Coding": "LDPC, Polar, Turbo",
    "Development Tool": "Lattice Radiant"
  },
  customerCases: [
    {
      customer: "5G Small Cell Manufacturer",
      application: "Indoor small cell baseband processing",
      challenge: "Need high-performance baseband processing in power-constrained form factor",
      solution: "Implemented LDPC decoder and FFT processing on LFD4NX-100",
      results: "Achieved 100MHz channel bandwidth support with <3W power consumption",
      result: "Enabled high-performance small cell with 60% lower power than competing solutions."
    },
    {
      customer: "Telecommunications Equipment Vendor",
      application: "ORAN fronthaul acceleration",
      challenge: "Required flexible fronthaul processing for multi-vendor ORAN deployment",
      solution: "Deployed LFD4NX-100 for eCPRI compression and timing synchronization",
      results: "Achieved 3:1 compression ratio with <100μs latency, enabling cost-effective fronthaul",
      result: "Successfully deployed ORAN infrastructure with 70% reduction in fronthaul bandwidth requirements."
    }
  ],
  faeInsights: {
    decisionLogic: "When to choose Lattice for 5G: (1) Power budget <5W for baseband processing, (2) Need deterministic latency for timing-critical functions, (3) Require flexibility to adapt to evolving standards, (4) ORAN fronthaul acceleration needed, (5) Space-constrained deployment environment.",
    keyConsiderations: "5G baseband processing requires careful partitioning between hardware acceleration and software control. Critical algorithms (LDPC, FFT) should be implemented in FPGA fabric while higher-layer processing runs on host processor. Timing synchronization is critical - implement IEEE 1588v2 with hardware timestamping.",
    commonPitfalls: "Underestimating memory bandwidth requirements for high-throughput processing. Insufficient attention to clock domain crossing and timing closure at high frequencies. Not planning for thermal management in compact base station enclosures.",
    recommendation: "Start with Lattice reference designs for LDPC and FFT processing. Use high-level synthesis tools for algorithm development. Engage FAE team early for architecture review and timing analysis.",
    author: {
      name: "Senior FAE",
      title: "Applications Engineer",
      experience: "10+ years"
    },
    content: "5G baseband processing represents one of the most demanding FPGA applications I've worked with. The combination of high throughput, low latency, and tight power constraints requires careful system architecture. Through multiple 5G deployments, I've learned that success depends on three factors: efficient algorithm implementation, proper memory architecture, and robust timing closure. The LFD4NX-100 is particularly well-suited for 5G with its high DSP count and PCIe Gen3 connectivity. For ORAN applications, the key is implementing efficient eCPRI compression - our reference designs achieve 3:1 compression with minimal latency. One critical insight: 5G standards are still evolving, so flexibility is essential. The FPGA's reprogrammability allows operators to upgrade to new 3GPP releases without hardware changes. Thermal design is often overlooked - even at 3-5W, proper heatsinking is essential in compact base stations. Always validate with real 5G waveforms early in development - simulation models don't capture all the corner cases.",
    keyTakeaways: [
      "Efficient algorithm implementation is critical for meeting performance targets",
      "Plan memory architecture carefully - bandwidth is often the bottleneck",
      "Leverage FPGA flexibility to adapt to evolving 5G standards",
      "Don't overlook thermal design even for 'low power' implementations"
    ],
    decisionFramework: {
      title: "5G Solution Selection Framework",
      steps: [
        "Define throughput and latency requirements",
        "Select FPGA based on processing requirements",
        "Design memory architecture for bandwidth needs"
      ]
    }
  },
  faqs: [
    {
      question: "What 5G standards does Lattice support?",
      answer: "Lattice FPGAs support 3GPP 5G NR standards including Release 15, 16, and 17. The programmable architecture enables updates for future releases without hardware changes. Supported features include LDPC coding for data channels, Polar coding for control channels, massive MIMO processing, and beamforming algorithms."
    },
    {
      question: "What ORAN split options are supported?",
      answer: "Lattice solutions support ORAN 7-2x split for fronthaul applications, enabling efficient distribution of processing between centralized and distributed units. The FPGA handles eCPRI compression/decompression, timing synchronization, and data flow management. Lower split options (8-9) can also be implemented depending on application requirements."
    },
    {
      question: "How does power consumption compare to processor-based solutions?",
      answer: "Lattice FPGA solutions typically consume 50-70% less power than equivalent processor-based implementations for 5G baseband processing. For example, a small cell baseband implementation on LFD4NX-100 consumes approximately 3W compared to 8-10W for processor-based solutions. This power advantage reduces cooling requirements and enables deployment in space-constrained environments."
    },
    {
      question: "What development tools are available?",
      answer: "Lattice Radiant design software provides comprehensive support for 5G application development including synthesis, implementation, and debugging. The solution includes pre-verified IP cores for common 5G functions (LDPC, FFT, digital front-end), reference designs for typical applications, and simulation models for algorithm verification. High-level synthesis tools enable rapid algorithm development in C/C++."
    },
    {
      question: "Can Lattice FPGAs handle massive MIMO processing?",
      answer: "Yes, Lattice high-capacity FPGAs (LFD4NX-100) can handle massive MIMO processing for up to 64x64 antenna configurations. The parallel processing architecture is well-suited for matrix operations required in MIMO precoding and detection. For very large arrays (128+ elements), multiple FPGAs can be cascaded to scale processing capacity."
    }
  ],
  name: "5G Infrastructure Acceleration Solution"
};

solutions.solutions.push(newSolution);

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Solutions updated successfully!');
console.log('Total solutions: ' + solutions.solutions.length);

// Fix news.json - Empty it
const newsPath = 'data/lattice/news.json';
const news = {
  "seoTitle": "Lattice News - Product Updates and Announcements | BeiLuo",
  "seoDescription": "Latest news from Lattice Semiconductor: product launches, technology updates, and industry announcements from authorized distributor.",
  "seoKeywords": [
    "Lattice news",
    "Lattice updates",
    "FPGA announcements",
    "product launches",
    "technology news"
  ],
  "faqs": [
    {
      "question": "Where can I find the latest Lattice product announcements?",
      "answer": "The latest Lattice product announcements and updates are available on the official Lattice Semiconductor website and through our newsletter. As an authorized distributor, we also share important product news and technical updates with our customers.",
      "decisionGuide": "Subscribe to our newsletter for latest product announcements.",
      "keywords": ["news", "announcements", "product updates"]
    },
    {
      "question": "How do I stay updated on Lattice technology developments?",
      "answer": "You can stay updated on Lattice technology developments by following our technical blog, subscribing to our newsletter, and checking our support portal regularly. Our FAE team also shares technical insights and application notes with customers.",
      "decisionGuide": "Follow our technical resources for ongoing updates.",
      "keywords": ["updates", "technology", "developments"]
    }
  ],
  "news": []
};

fs.writeFileSync(newsPath, JSON.stringify(news, null, 2));
console.log('News emptied successfully!');
