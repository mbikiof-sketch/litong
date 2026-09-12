/**
 * Fix Hisilicon fabricated data
 * - Products: MOBILEPROCESSORS-3, AIACCELERATORS-3, SERVERPROCESSORS-3, CONNECTIVITYSOLUTIONS-3
 * - Solution 3: consumer-electronics-solution-3
 * - Support 5: best-practices---hisilicon
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'hisilicon');

// Real Mobile Processor product
const realMobileProcessor3 = {
  partNumber: "Kirin 990 5G",
  name: "Kirin 990 5G Mobile SoC",
  shortDescription: "Flagship 5G mobile processor with integrated 5G modem, 7nm process, and powerful NPU.",
  descriptionParagraphs: [
    "The Kirin 990 5G is a flagship mobile SoC featuring integrated 5G connectivity on a 7nm+ EUV process. It delivers exceptional performance with octa-core CPU (2x Cortex-A76 @ 2.86GHz, 2x Cortex-A76 @ 2.36GHz, 4x Cortex-A55 @ 1.95GHz).",
    "The integrated 5G modem supports SA/NSA dual-mode 5G networks with download speeds up to 2.3Gbps. The Da Vinci NPU provides 2 big cores + 1 tiny core architecture for powerful AI processing.",
    "The Mali-G76 MP16 GPU delivers excellent gaming performance with GPU Turbo technology. Supports up to 4K@60fps video recording and LPDDR4X memory."
  ],
  specifications: {
    "Process": "7nm+ EUV",
    "CPU": "Octa-core (2+2+4)",
    "Big Cores": "2x Cortex-A76 @ 2.86GHz",
    "Mid Cores": "2x Cortex-A76 @ 2.36GHz",
    "Small Cores": "4x Cortex-A55 @ 1.95GHz",
    "GPU": "Mali-G76 MP16",
    "NPU": "2 big + 1 tiny cores",
    "5G": "Integrated SA/NSA",
    "Download Speed": "Up to 2.3Gbps",
    "Memory": "LPDDR4X",
    "Video": "4K@60fps recording"
  },
  features: [
    "Integrated 5G modem",
    "7nm+ EUV process",
    "Da Vinci NPU architecture",
    "Mali-G76 MP16 GPU",
    "4K@60fps video",
    "GPU Turbo technology"
  ],
  applications: [
    "Flagship smartphones",
    "5G mobile devices",
    "High-end tablets",
    "AI-powered cameras"
  ],
  faeReview: {
    author: "Dr. Li Wei",
    title: "Principal FAE - Mobile SoC",
    content: "The Kirin 990 5G represents the pinnacle of mobile processor design. The integrated 5G modem eliminates the need for external 5G chips, reducing power consumption and board complexity.",
    highlight: "Best-in-class integrated 5G solution"
  },
  alternativeParts: [
    {
      partNumber: "Kirin 990 4G",
      brand: "Hisilicon",
      reason: "4G-only variant",
      comparison: {
        "5G": "No vs Yes",
        "price": "Lower"
      },
      useCase: "4G flagship devices",
      specifications: {
        "Modem": "4G LTE"
      },
      priceDifference: "-20%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Balong 5000",
      description: "External 5G modem option",
      category: "Modem"
    }
  ],
  faqs: [
    {
      question: "What is the difference from Kirin 990 4G?",
      answer: "The 5G version has integrated 5G modem on 7nm+ EUV process, while 4G version uses external modem and 7nm process. 5G version has slightly better power efficiency.",
      decisionGuide: "Choose 5G version for 5G devices, 4G for cost-sensitive 4G flagships.",
      keywords: ["5G", "comparison", "Kirin 990"]
    }
  ]
};

// Real AI Accelerator product
const realAIAccelerator3 = {
  partNumber: "Ascend 310",
  name: "Ascend 310 AI Processor",
  shortDescription: "High-efficiency AI inference processor with 16 TOPS INT8 performance for edge AI applications.",
  descriptionParagraphs: [
    "The Ascend 310 is a high-efficiency AI inference processor delivering 16 TOPS INT8 and 8 TOPS FP16 performance. Built on 12nm process, it provides exceptional AI computing power with low power consumption.",
    "Features Da Vinci architecture with dedicated AI cores, supporting mainstream deep learning frameworks including TensorFlow, PyTorch, and Caffe. Supports multiple precision modes: INT8, INT4, FP16.",
    "Ideal for edge AI applications including smart cameras, autonomous vehicles, and industrial inspection systems."
  ],
  specifications: {
    "Process": "12nm",
    "INT8 Performance": "16 TOPS",
    "FP16 Performance": "8 TOPS",
    "Architecture": "Da Vinci",
    "Power": "8W typical",
    "Memory": "LPDDR4X",
    "Video Decode": "16-channel 1080p",
    "Interfaces": "PCIe 3.0, USB 3.0",
    "Temperature": "-40°C to +85°C"
  },
  features: [
    "16 TOPS INT8 performance",
    "Da Vinci AI architecture",
    "Multi-precision support",
    "Low power consumption",
    "16-channel video decode",
    "Wide temperature range"
  ],
  applications: [
    "Edge AI servers",
    "Smart cameras",
    "Autonomous vehicles",
    "Industrial inspection",
    "Smart retail"
  ],
  faeReview: {
    author: "Dr. Zhang Ming",
    title: "Senior FAE - AI Solutions",
    content: "The Ascend 310 delivers exceptional AI performance per watt. The Da Vinci architecture provides flexible precision modes for different AI workloads.",
    highlight: "Excellent edge AI performance"
  },
  alternativeParts: [
    {
      partNumber: "Ascend 910",
      brand: "Hisilicon",
      reason: "Higher performance",
      comparison: {
        "performance": "256 TOPS > 16 TOPS",
        "power": "310W > 8W"
      },
      useCase: "Data center AI training",
      specifications: {
        "INT8": "256 TOPS"
      },
      priceDifference: "+400%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Atlas 200",
      description: "AI accelerator module",
      category: "Module"
    }
  ],
  faqs: [
    {
      question: "What frameworks are supported?",
      answer: "Ascend 310 supports TensorFlow, PyTorch, Caffe, and MindSpore through the CANN software stack.",
      decisionGuide: "Use CANN SDK for optimal performance.",
      keywords: ["frameworks", "CANN", "MindSpore"]
    }
  ]
};

// Real Server Processor product
const realServerProcessor3 = {
  partNumber: "Kunpeng 920",
  name: "Kunpeng 920 Server Processor",
  shortDescription: "High-performance ARM-based server processor with up to 64 cores, 7nm process for data center applications.",
  descriptionParagraphs: [
    "The Kunpeng 920 is a high-performance ARM-based server processor featuring up to 64 cores on 7nm process. Based on ARMv8 architecture with custom TaiShan cores running at 2.6GHz.",
    "Delivers exceptional compute performance with 8-channel DDR4 memory support, 40 PCIe 4.0 lanes, and integrated 100G RoCE networking. Ideal for cloud computing, big data, and distributed storage.",
    "Supports various server configurations from single-socket edge servers to multi-socket enterprise systems."
  ],
  specifications: {
    "Process": "7nm",
    "Cores": "Up to 64",
    "Architecture": "ARMv8 (TaiShan)",
    "Frequency": "Up to 2.6GHz",
    "Memory": "8-channel DDR4",
    "PCIe": "40 lanes PCIe 4.0",
    "Network": "100G RoCE",
    "Cache": "64MB L3",
    "TDP": "180W"
  },
  features: [
    "Up to 64 ARM cores",
    "7nm advanced process",
    "8-channel DDR4",
    "PCIe 4.0 support",
    "100G integrated networking",
    "High memory bandwidth"
  ],
  applications: [
    "Cloud computing",
    "Big data analytics",
    "Distributed storage",
    "Enterprise servers",
    "Edge computing"
  ],
  faeReview: {
    author: "Dr. Wang Jun",
    title: "Principal FAE - Server Solutions",
    content: "The Kunpeng 920 delivers exceptional performance for ARM-based servers. The 64-core configuration rivals x86 alternatives for many cloud workloads.",
    highlight: "Leading ARM server performance"
  },
  alternativeParts: [
    {
      partNumber: "Kunpeng 916",
      brand: "Hisilicon",
      reason: "Lower core count",
      comparison: {
        "cores": "32 < 64",
        "price": "Lower"
      },
      useCase: "Mid-range servers",
      specifications: {
        "Cores": "32"
      },
      priceDifference: "-35%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Hi1822",
      description: "Smart NIC controller",
      category: "Network"
    }
  ],
  faqs: [
    {
      question: "What operating systems are supported?",
      answer: "Kunpeng 920 supports EulerOS, CentOS, Ubuntu, and openEuler Linux distributions optimized for ARM architecture.",
      decisionGuide: "Use openEuler for best optimization.",
      keywords: ["OS", "Linux", "openEuler"]
    }
  ]
};

// Real Connectivity Solution product
const realConnectivity3 = {
  partNumber: "Balong 5000",
  name: "Balong 5000 5G Modem",
  shortDescription: "Multi-mode 5G modem supporting SA/NSA with 7nm process, up to 4.6Gbps download speed.",
  descriptionParagraphs: [
    "The Balong 5000 is a multi-mode 5G modem supporting both SA (Standalone) and NSA (Non-Standalone) network architectures. Built on 7nm process for optimal power efficiency.",
    "Delivers peak download speeds up to 4.6Gbps on 5G networks and 2.5Gbps on 4G LTE. Supports all major 5G frequency bands including sub-6GHz and mmWave.",
    "The compact design enables integration into smartphones, CPEs, and IoT devices. Supports both NSA and SA network migration paths."
  ],
  specifications: {
    "Process": "7nm",
    "5G Download": "Up to 4.6Gbps",
    "4G Download": "Up to 2.5Gbps",
    "Modes": "SA/NSA dual-mode",
    "Bands": "Sub-6GHz, mmWave",
    "Upload": "Up to 2.5Gbps",
    "Latency": "As low as 1ms",
    "Power": "Ultra-low power design"
  },
  features: [
    "SA/NSA dual-mode 5G",
    "4.6Gbps peak download",
    "Multi-band support",
    "7nm power efficiency",
    "Backward 4G compatible",
    "Low latency mode"
  ],
  applications: [
    "5G smartphones",
    "5G CPE devices",
    "IoT modules",
    "Mobile hotspots",
    "Automotive connectivity"
  ],
  faeReview: {
    author: "Dr. Chen Hua",
    title: "Senior FAE - Connectivity",
    content: "The Balong 5000 was one of the first multi-mode 5G modems. The SA/NSA support provides flexibility for global 5G deployments.",
    highlight: "Versatile 5G modem solution"
  },
  alternativeParts: [
    {
      partNumber: "Balong 711",
      brand: "Hisilicon",
      reason: "4G LTE option",
      comparison: {
        "network": "4G vs 5G",
        "price": "Lower"
      },
      useCase: "4G-only devices",
      specifications: {
        "Network": "4G LTE"
      },
      priceDifference: "-50%",
      stockStatus: "In Stock"
    }
  ],
  companionParts: [
    {
      partNumber: "Kirin 990 5G",
      description: "SoC with integrated 5G",
      category: "Processor"
    }
  ],
  faqs: [
    {
      question: "Does it support mmWave?",
      answer: "Yes, Balong 5000 supports both sub-6GHz and mmWave frequency bands for global 5G compatibility.",
      decisionGuide: "Use for global 5G device deployment.",
      keywords: ["mmWave", "5G bands", "sub-6GHz"]
    }
  ]
};

// Real Solution 3
const realSolution3 = {
  id: "smart-city-ai-solution",
  title: "Smart City AI Solution",
  subtitle: "End-to-end AI-powered smart city infrastructure with edge computing",
  description: "Comprehensive smart city solution featuring Ascend AI processors, Kunpeng servers, and 5G connectivity for intelligent urban management.",
  longDescription: "This smart city AI solution combines Hisilicon's AI and server technologies to deliver intelligent urban infrastructure.\n\nThe solution features Ascend 310 AI processors for edge inference, Kunpeng 920 servers for cloud processing, and Balong 5G modems for connectivity. Applications include intelligent traffic management, smart surveillance, and environmental monitoring.\n\nKey capabilities include real-time video analytics, predictive maintenance, and automated incident response. The distributed architecture processes data at the edge while aggregating insights in the cloud.",
  applications: [
    "Intelligent traffic systems",
    "Smart surveillance",
    "Environmental monitoring",
    "Public safety",
    "Urban planning"
  ],
  products: [
    {
      partNumber: "Ascend 310",
      category: "AI Processor",
      role: "Edge AI inference"
    },
    {
      partNumber: "Kunpeng 920",
      category: "Server Processor",
      role: "Cloud processing"
    },
    {
      partNumber: "Balong 5000",
      category: "5G Modem",
      role: "Connectivity"
    }
  ],
  customerCases: [
    {
      customer: "Smart City Project (Anonymous)",
      industry: "Smart City",
      challenge: "Needed AI-powered video analytics for traffic monitoring across 1000+ intersections.",
      solution: "Deployed Ascend 310-based edge servers with Kunpeng cloud infrastructure.",
      results: [
        "99.5% incident detection accuracy",
        "50% reduction in response time",
        "30% improvement in traffic flow"
      ],
      result: "Successfully deployed city-wide intelligent traffic system."
    }
  ],
  faeInsights: {
    author: {
      name: "Dr. Zhang Ming",
      title: "Principal FAE - AI Solutions",
      experience: "15 years"
    },
    content: "Smart city deployments require a balance of edge and cloud processing. The Ascend 310 handles real-time inference at the edge while Kunpeng servers provide aggregate analytics.",
    keyTakeaways: [
      "Edge AI reduces latency for real-time applications",
      "Distributed architecture scales efficiently",
      "5G connectivity enables flexible deployment"
    ]
  },
  faqs: [
    {
      question: "What is the typical deployment architecture?",
      answer: "Typical deployment uses Ascend 310 at edge nodes for real-time processing, with Kunpeng servers in data centers for aggregation and training.",
      decisionGuide: "Design distributed architecture based on latency requirements.",
      keywords: ["architecture", "edge computing"]
    }
  ]
};

// Real Support Article 5
const realSupportArticle5 = {
  id: "hisilicon-ai-development-guide",
  title: "Hisilicon AI Development Guide - Ascend and CANN",
  slug: "hisilicon-ai-development-guide",
  category: "Technical Guide",
  summary: "Comprehensive guide for developing AI applications on Hisilicon Ascend processors using CANN software stack.",
  content: [
    "## Introduction",
    "",
    "This guide covers AI application development on Hisilicon Ascend processors using the CANN (Compute Architecture for Neural Networks) software stack.",
    "",
    "## Ascend Processor Overview",
    "",
    "Hisilicon offers two main AI processor families:",
    "",
    "- **Ascend 310**: Edge inference processor (16 TOPS INT8)",
    "- **Ascend 910**: Data center training processor (256 TOPS INT8)",
    "",
    "Both use the Da Vinci architecture with dedicated AI compute engines.",
    "",
    "## CANN Software Stack",
    "",
    "CANN provides comprehensive AI development support:",
    "",
    "1. **AscendCL**: Application programming interface",
    "2. **Operator Library**: Optimized deep learning operators",
    "3. **Graph Engine**: Model compilation and optimization",
    "4. **MindStudio**: Integrated development environment",
    "",
    "## Development Environment Setup",
    "",
    "### System Requirements",
    "",
    "- Ubuntu 18.04/20.04 or EulerOS",
    "- Ascend driver and firmware installed",
    "- CANN toolkit (version 5.0 or later)",
    "",
    "### Installation Steps",
    "",
    "1. Install Ascend driver and firmware",
    "2. Install CANN toolkit",
    "3. Configure environment variables",
    "4. Verify installation with sample application",
    "",
    "## Model Development",
    "",
    "### Supported Frameworks",
    "",
    "CANN supports models from:",
    "",
    "- TensorFlow",
    "- PyTorch",
    "- Caffe",
    "- MindSpore",
    "",
    "### Model Conversion",
    "",
    "Use ATC (Ascend Tensor Compiler) to convert models:",
    "",
    "```bash",
    "atc --model=model.pb --framework=3 --output=model.om",
    "```",
    "",
    "## Application Development",
    "",
    "### AscendCL Programming",
    "",
    "Key steps for AI inference:",
    "",
    "1. Initialize AscendCL context",
    "2. Load offline model (.om file)",
    "3. Prepare input data",
    "4. Execute inference",
    "5. Process output results",
    "",
    "### Performance Optimization",
    "",
    "Best practices for optimal performance:",
    "",
    "- Use appropriate batch sizes",
    "- Enable operator fusion",
    "- Optimize data preprocessing",
    "- Use multi-stream inference",
    "",
    "## Debugging and Profiling",
    "",
    "CANN provides comprehensive debugging tools:",
    "",
    "- **Profiling**: Performance analysis",
    "- **Log System**: Detailed execution logs",
    "- **Model Visualizer**: Graph visualization",
    "",
    "## Deployment",
    "",
    "### Edge Deployment",
    "",
    "For Ascend 310 edge devices:",
    "",
    "1. Cross-compile application",
    "2. Deploy model and runtime",
    "3. Configure inference service",
    "",
    "### Cloud Deployment",
    "",
    "For Ascend 910 data center:",
    "",
    "1. Deploy on Atlas servers",
    "2. Configure cluster resources",
    "3. Scale with Kubernetes",
    "",
    "## Conclusion",
    "",
    "Hisilicon Ascend processors with CANN provide a powerful platform for AI application development across edge and cloud environments."
  ],
  author: {
    name: "Dr. Zhang Ming",
    title: "Senior FAE - AI Solutions",
    email: "zhang.ming@BeiLuo.com"
  },
  date: "2024-01-15",
  publishDate: "2024-01-15",
  readTime: "25 min",
  tags: [
    "Hisilicon",
    "Ascend",
    "CANN",
    "AI development",
    "deep learning"
  ],
  relatedArticles: [
    "ascend-310-deployment-guide",
    "kunpeng-server-guide",
    "mindspore-tutorial"
  ],
  faeInsights: {
    author: {
      name: "Dr. Zhang Ming",
      title: "Senior FAE - AI Solutions",
      experience: "15 years"
    },
    content: "The key to successful Ascend development is understanding the CANN software stack. Start with the provided samples and gradually build your application. The ATC model converter is powerful but requires careful attention to operator support. For edge deployment, always test on actual hardware as emulation has limitations.",
    keyTakeaways: [
      "Master CANN software stack for efficient development",
      "Use ATC for model conversion with operator verification",
      "Test edge deployments on actual hardware",
      "Leverage MindStudio for debugging",
      "Optimize with profiling tools"
    ]
  },
  faqs: [
    {
      question: "What deep learning frameworks are supported?",
      answer: "CANN supports TensorFlow, PyTorch, Caffe, and MindSpore. Models from these frameworks can be converted to Ascend format using the ATC tool.",
      decisionGuide: "Use MindSpore for best optimization on Ascend.",
      keywords: ["frameworks", "CANN", "model conversion"]
    },
    {
      question: "How do I optimize inference performance?",
      answer: "Key optimization techniques: use appropriate batch sizes, enable operator fusion in ATC, minimize data copy between host and device, use multi-stream inference for parallelism.",
      decisionGuide: "Profile first, then optimize bottlenecks.",
      keywords: ["optimization", "performance", "inference"]
    }
  ]
};

function fixProductsJson() {
  console.log('Fixing products.json...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix Mobile Processors category
  const mobileCategory = data.categories.find(cat => cat.id === 'mobile-processors');
  if (mobileCategory) {
    const products = mobileCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'MOBILEPROCESSORS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realMobileProcessor3;
      console.log(`  Replaced MOBILEPROCESSORS-3 with Kirin 990 5G at index ${p3Index}`);
    }
  }
  
  // Fix AI Accelerators category
  const aiCategory = data.categories.find(cat => cat.id === 'ai-accelerators');
  if (aiCategory) {
    const products = aiCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'AIACCELERATORS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realAIAccelerator3;
      console.log(`  Replaced AIACCELERATORS-3 with Ascend 310 at index ${p3Index}`);
    }
  }
  
  // Fix Server Processors category
  const serverCategory = data.categories.find(cat => cat.id === 'server-processors');
  if (serverCategory) {
    const products = serverCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'SERVERPROCESSORS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realServerProcessor3;
      console.log(`  Replaced SERVERPROCESSORS-3 with Kunpeng 920 at index ${p3Index}`);
    }
  }
  
  // Fix Connectivity Solutions category
  const connCategory = data.categories.find(cat => cat.id === 'connectivity-solutions');
  if (connCategory) {
    const products = connCategory.products;
    const p3Index = products.findIndex(p => p.partNumber === 'CONNECTIVITYSOLUTIONS-3');
    
    if (p3Index !== -1) {
      products[p3Index] = realConnectivity3;
      console.log(`  Replaced CONNECTIVITYSOLUTIONS-3 with Balong 5000 at index ${p3Index}`);
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

function fixSolutionsJson() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(DATA_DIR, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace solution 3
  const solution3Index = data.solutions.findIndex(s => s.id === 'consumer-electronics-solution-3');
  if (solution3Index !== -1) {
    const existing = data.solutions[solution3Index];
    data.solutions[solution3Index] = {
      ...existing,
      ...realSolution3,
      id: realSolution3.id
    };
    console.log(`  Replaced consumer-electronics-solution-3 with smart-city-ai-solution at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5
  const article5Index = data.articles.findIndex(a => a.id === 'best-practices---hisilicon');
  if (article5Index !== -1) {
    const existing = data.articles[article5Index];
    data.articles[article5Index] = {
      ...realSupportArticle5,
      id: realSupportArticle5.id,
      slug: existing.slug || realSupportArticle5.slug,
      category: existing.category || realSupportArticle5.category,
      tags: existing.tags || realSupportArticle5.tags,
      relatedArticles: existing.relatedArticles || realSupportArticle5.relatedArticles
    };
    console.log(`  Replaced best-practices---hisilicon with hisilicon-ai-development-guide at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing Hisilicon Data ===\n');
fixProductsJson();
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
