const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'rubycon');

// Read existing products.json
const productsPath = path.join(brandDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add more product categories
const additionalCategories = [
  {
    "id": "snap-in-capacitors",
    "name": "Snap-in Capacitors",
    "slug": "snap-in-capacitors",
    "description": "High-capacitance snap-in aluminum electrolytic capacitors for power supplies and industrial applications.",
    "longDescription": "Rubycon's snap-in aluminum electrolytic capacitors are designed for high-power applications requiring substantial capacitance values. These capacitors feature quick-connect snap-in terminals for secure mounting on PCBs or busbars. The USF and USG series offer high capacitance values ranging from 100uF to 100,000uF with voltage ratings up to 500V. These capacitors are ideal for switch-mode power supplies, motor drives, inverters, and industrial control systems. With operational lifetimes up to 12,000 hours at 105C and high ripple current capability, Rubycon snap-in capacitors provide reliable performance in demanding applications. The robust construction includes high-quality seals and pressure relief vents for safety.",
    "series": [
      "USF Series - 105C, 5000-8000 hours",
      "USG Series - 105C, 8000-12000 hours",
      "USC Series - 85C, High Capacitance"
    ],
    "parameters": ["Capacitance", "Voltage Rating", "Temperature Range", "Lifetime", "Ripple Current"],
    "selectionGuide": "Select USF for general purpose, USG for extended life, USC for cost-sensitive high-capacitance needs.",
    "selectionGuideLink": {
      "url": "/rubycon/support/snap-in-capacitor-selection-guide.html",
      "text": "View Snap-in Capacitor Selection Guide"
    },
    "faqs": [
      {
        "question": "What is the difference between snap-in and radial lead capacitors?",
        "answer": "Snap-in capacitors are designed for higher capacitance and current applications compared to radial lead types. Snap-in terminals provide secure mounting and better electrical connection for high-current applications. Snap-in capacitors are available in larger case sizes (22mm to 35mm diameter) and higher capacitance values (up to 100,000uF). They are ideal for power supplies, inverters, and motor drives. Radial lead capacitors are better suited for lower current, PCB-mounted applications. Snap-in capacitors require appropriate mounting holes on the PCB, while radial lead capacitors use standard through-hole mounting.",
        "decisionGuide": "Choose snap-in for high-power applications above 100W; select radial lead for lower power PCB-mounted designs.",
        "keywords": ["snap-in vs radial", "capacitor mounting", "high power capacitors"]
      },
      {
        "question": "What ripple current can snap-in capacitors handle?",
        "answer": "Rubycon snap-in capacitors are designed for high ripple current applications. Ripple current ratings range from 2A to over 20A RMS depending on capacitance, voltage rating, and case size. Larger case sizes and lower ESR series (USG) offer higher ripple current capability. For example, a 10,000uF 100V capacitor in 35x50mm size might have 8-10A ripple current rating. The ripple current capability must be derated at higher ambient temperatures. At 85C, the rating is typically 70-80% of the 105C rating. For very high ripple current applications, multiple capacitors can be paralleled.",
        "decisionGuide": "Select USG series for highest ripple current; parallel capacitors for extremely high ripple requirements.",
        "keywords": ["ripple current", "snap-in capacitor", "high current"]
      },
      {
        "question": "What mounting orientation is recommended for snap-in capacitors?",
        "answer": "Rubycon snap-in capacitors can be mounted in any orientation - vertical (terminals up), horizontal, or inverted (terminals down). However, vertical mounting with terminals facing upward is generally recommended. This orientation allows any gas generated during operation to vent through the pressure relief vent at the top. Horizontal mounting is acceptable but may slightly reduce ripple current capability due to altered thermal convection. Inverted mounting is generally not recommended for long-life applications. Always ensure adequate clearance for the pressure relief vent and proper retention of the capacitor in the mounting holes.",
        "decisionGuide": "Mount vertically with terminals up for optimal reliability; ensure proper mechanical retention.",
        "keywords": ["capacitor mounting", "snap-in installation", "orientation"]
      },
      {
        "question": "How do I select the right snap-in capacitor for inverter applications?",
        "answer": "Selecting snap-in capacitors for inverter DC link applications requires calculating the required capacitance based on allowable voltage ripple and load current. The formula is C = I_ripple / (8 * f_switching * V_ripple). Next, verify the ripple current rating exceeds your calculated requirement with appropriate margin. Select voltage rating 1.2-1.5x your maximum DC bus voltage. Consider the USG series for extended life in critical applications. Ensure the case size fits your mechanical constraints. For high-voltage inverters (380-480V AC input), select 450-500V rated capacitors. Our FAE team can assist with detailed calculations for your specific application.",
        "decisionGuide": "Calculate capacitance and ripple current requirements; select USG series for critical applications.",
        "keywords": ["inverter capacitor", "DC link", "capacitor selection"]
      },
      {
        "question": "What is the typical lifetime of snap-in capacitors?",
        "answer": "Rubycon snap-in capacitor lifetime varies by series. The USF series typically offers 5,000-8,000 hours at 105C. The USG series provides extended life of 8,000-12,000 hours at 105C. Lifetime follows the Arrhenius equation - approximately doubling for every 10C decrease in temperature. Operating at 80% of rated voltage typically doubles the expected life. For example, a USG series capacitor rated for 10,000 hours at 105C can achieve 40,000 hours at 85C. Proper thermal management and voltage derating are essential for maximizing lifetime in industrial applications.",
        "decisionGuide": "Apply voltage derating and thermal management to maximize capacitor lifetime.",
        "keywords": ["snap-in lifetime", "capacitor reliability", "USG series"]
      }
    ],
    "products": [
      {
        "partNumber": "400USG680M25X30",
        "name": "680uF 400V USG Snap-in Capacitor",
        "shortDescription": "680uF 400V snap-in capacitor, USG series, 105C rated, 10000 hour life, 25x30mm size.",
        "descriptionParagraphs": [
          "The 400USG680M25X30 is a high-performance snap-in aluminum electrolytic capacitor from Rubycon's USG series. This 680uF capacitor with 400V rating is designed for demanding power supply and inverter applications.",
          "Featuring Rubycon's advanced USG series construction with high-purity aluminum foil and optimized electrolyte, this capacitor delivers 10,000 hours operational life at 105C. The snap-in terminals provide secure mounting and excellent electrical connection.",
          "The 25mm diameter x 30mm length case size provides excellent volumetric efficiency for high-voltage filtering applications. This capacitor is ideal for PFC circuits, DC link applications, and high-voltage power supplies."
        ],
        "specifications": {
          "Capacitance": "680uF plus or minus 20%",
          "Rated Voltage": "400V DC",
          "Temperature Range": "-25C to +105C",
          "Lifetime": "10000 hours at 105C",
          "Ripple Current": "2.8A rms at 105C, 100Hz",
          "ESR": "0.35 ohm max at 20C, 100Hz",
          "Case Size": "25mm D x 30mm L",
          "Termination": "Snap-in"
        },
        "features": [
          "High voltage rating: 400V DC",
          "Long life: 10000 hours at 105C",
          "High ripple current capability",
          "Low ESR for reduced heating",
          "Snap-in terminals for secure mounting",
          "Pressure relief vent"
        ],
        "applications": [
          "PFC output filtering",
          "DC link capacitors",
          "High-voltage power supplies",
          "Motor drive inverters",
          "Welding equipment"
        ],
        "faeReview": {
          "author": "Michael Chen",
          "title": "Senior FAE - Power Systems",
          "content": "The 400USG680M25X30 is my standard recommendation for 380-480VAC three-phase rectifier applications. The 400V rating provides good margin for 380-480VAC systems after rectification. In my experience with industrial power supply designs, this capacitor offers excellent reliability and value. The 10,000-hour lifetime at 105C provides good margin for most industrial applications when properly derated. I typically recommend operating at 80% of rated voltage (320V) which effectively doubles the expected lifetime. The 2.8A ripple current rating is adequate for PFC applications up to about 2kW.",
          "highlight": "Reliable choice for industrial PFC and DC link applications"
        },
        "alternativeParts": [
          {
            "partNumber": "400USF680M25X25",
            "brand": "Rubycon",
            "specifications": {
              "Capacitance": "680uF plus or minus 20%",
              "Rated Voltage": "400V DC",
              "Lifetime": "5000 hours at 105C"
            },
            "comparison": {
              "Capacitance": "680uF = 680uF (same)",
              "Voltage": "400V = 400V (same)",
              "Lifetime": "5000h < 10000h (shorter)",
              "Case Size": "25x25mm < 25x30mm (shorter)",
              "Cost": "USF typically 15-20% lower"
            },
            "reason": "Standard lifetime series for cost-sensitive applications",
            "useCase": "Commercial equipment with shorter expected service life",
            "link": "/rubycon/products/snap-in-capacitors/400usf680m25x25.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "400USG1000M30X35",
            "link": "/rubycon/products/snap-in-capacitors/400usg1000m30x35.html",
            "description": "1000uF 400V for higher capacitance requirements",
            "category": "Snap-in Capacitors"
          },
          {
            "partNumber": "450USG470M25X30",
            "link": "/rubycon/products/snap-in-capacitors/450usg470m25x30.html",
            "description": "470uF 450V for higher voltage margin",
            "category": "Snap-in Capacitors"
          }
        ],
        "faqs": [
          {
            "question": "What is the expected lifetime at different temperatures?",
            "answer": "The 400USG680M25X30 is rated for 10000 hours at 105C. Following the Arrhenius equation, lifetime approximately doubles for every 10C decrease in temperature. Expected lifetimes: 20000 hours at 95C, 40000 hours at 85C, 80000 hours at 75C. Voltage derating further extends lifetime - operating at 80% of rated voltage (320V) typically doubles the expected life.",
            "decisionGuide": "Use temperature derating and voltage derating to maximize capacitor lifetime.",
            "keywords": ["capacitor lifetime", "temperature derating"]
          },
          {
            "question": "How much ripple current can this capacitor handle?",
            "answer": "The 400USG680M25X30 has a rated ripple current of 2.8A rms at 100Hz and 105C ambient temperature. At lower temperatures, higher ripple currents are permissible. The ripple current capability decreases at higher frequencies. Exceeding the ripple current rating causes internal heating, accelerating electrolyte evaporation.",
            "decisionGuide": "Calculate expected ripple current and verify thermal design.",
            "keywords": ["ripple current", "thermal management"]
          }
        ]
      },
      {
        "partNumber": "200USG2200M30X40",
        "name": "2200uF 200V USG Snap-in Capacitor",
        "shortDescription": "2200uF 200V snap-in capacitor, USG series, 105C rated, 10000 hour life, 30x40mm size.",
        "descriptionParagraphs": [
          "The 200USG2200M30X40 is a high-capacitance snap-in aluminum electrolytic capacitor from Rubycon's USG series. This 2200uF capacitor with 200V rating is designed for high-energy storage applications.",
          "Featuring Rubycon's USG series construction with optimized electrolyte formulation, this capacitor delivers 10,000 hours operational life at 105C. The larger 30mm diameter case provides excellent heat dissipation.",
          "This capacitor is ideal for DC link applications in motor drives, solar inverters, and industrial power supplies requiring high capacitance and reliability."
        ],
        "specifications": {
          "Capacitance": "2200uF plus or minus 20%",
          "Rated Voltage": "200V DC",
          "Temperature Range": "-25C to +105C",
          "Lifetime": "10000 hours at 105C",
          "Ripple Current": "4.2A rms at 105C, 100Hz",
          "ESR": "0.18 ohm max at 20C, 100Hz",
          "Case Size": "30mm D x 40mm L",
          "Termination": "Snap-in"
        },
        "features": [
          "High capacitance: 2200uF",
          "High ripple current: 4.2A rms",
          "Long life: 10000 hours at 105C",
          "Low ESR for reduced heating",
          "Snap-in terminals",
          "Pressure relief vent"
        ],
        "applications": [
          "DC link capacitors for inverters",
          "Motor drive power supplies",
          "Solar inverter DC bus",
          "Industrial power supplies",
          "Energy storage systems"
        ],
        "faeReview": {
          "author": "David Park",
          "title": "FAE - Industrial Power",
          "content": "The 200USG2200M30X40 is an excellent choice for DC link applications in 10-20kW motor drives and inverters. The 2200uF capacitance provides good energy storage for handling load transients. The 200V rating is well-suited for 180-200V DC bus systems. The 4.2A ripple current rating handles the switching ripple effectively.",
          "highlight": "Excellent capacitance density for DC link applications"
        },
        "alternativeParts": [
          {
            "partNumber": "200USF2200M30X35",
            "brand": "Rubycon",
            "specifications": {
              "Capacitance": "2200uF plus or minus 20%",
              "Rated Voltage": "200V DC",
              "Lifetime": "5000 hours at 105C"
            },
            "comparison": {
              "Capacitance": "2200uF = 2200uF (same)",
              "Voltage": "200V = 200V (same)",
              "Lifetime": "5000h < 10000h (shorter)",
              "Case Size": "30x35mm < 30x40mm (shorter)"
            },
            "reason": "Shorter lifetime for cost-sensitive applications",
            "useCase": "Applications with shorter expected service life",
            "link": "/rubycon/products/snap-in-capacitors/200usf2200m30x35.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "200USG3300M35X45",
            "link": "/rubycon/products/snap-in-capacitors/200usg3300m35x45.html",
            "description": "3300uF 200V for higher capacitance",
            "category": "Snap-in Capacitors"
          }
        ],
        "faqs": [
          {
            "question": "What is the self-discharge rate?",
            "answer": "The 200USG2200M30X40 has a typical self-discharge time constant of several hours due to its high capacitance and insulation resistance. After charging to rated voltage and disconnected, the capacitor will retain approximately 63% of its charge after one time constant. For safety, always assume capacitors may retain dangerous voltages for extended periods.",
            "decisionGuide": "Always discharge capacitors before handling; use discharge resistors.",
            "keywords": ["self-discharge", "safety", "stored energy"]
          }
        ]
      }
    ]
  }
];

// Add categories to products
products.categories.push(...additionalCategories);

// Save updated products.json
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('Added snap-in capacitors category');

// Create solutions.json
const solutionsData = {
  "seoTitle": "Rubycon Capacitor Solutions | Application Designs",
  "seoDescription": "Rubycon aluminum electrolytic capacitor solutions for automotive, industrial, renewable energy, and power supply applications.",
  "seoKeywords": [
    "Rubycon solutions",
    "Rubycon application designs",
    "Rubycon automotive solutions",
    "Rubycon industrial solutions",
    "Rubycon power supply"
  ],
  "faqs": [
    {
      "question": "What complete solutions does Rubycon offer through LiTong?",
      "answer": "Through LiTong Electronics, Rubycon offers comprehensive aluminum electrolytic capacitor solutions for multiple industries. For automotive applications, we provide AEC-Q200 qualified capacitors for EV powertrains, LED lighting, and ADAS systems. Industrial solutions include high-reliability capacitors for motor drives, power supplies, and automation systems. Renewable energy solutions feature long-life capacitors for solar inverters and wind turbines. Power supply solutions include capacitors optimized for switching power supplies, PFC circuits, and DC-DC converters. Each solution includes component recommendations, reference designs, BOM optimization, and technical support.",
      "decisionGuide": "Browse our solution categories to find application-specific recommendations, or contact our FAE team for custom solutions.",
      "keywords": ["Rubycon solutions", "application designs", "capacitor solutions"]
    },
    {
      "question": "How does LiTong support Rubycon solution implementation?",
      "answer": "LiTong Electronics provides comprehensive support for implementing Rubycon-based solutions. Our technical services include component selection guidance, lifetime calculations, and thermal analysis. We offer BOM analysis and optimization to ensure cost-effectiveness while maintaining reliability. Our FAE team can review your designs and provide recommendations for capacitor selection, derating, and thermal management. We provide sample kits for prototyping and evaluation. For high-volume customers, we offer demand forecasting support and inventory management programs.",
      "decisionGuide": "Contact our FAE team early in your design cycle for optimal component selection.",
      "keywords": ["Rubycon technical support", "solution implementation", "FAE support"]
    },
    {
      "question": "What industries benefit most from Rubycon capacitor solutions?",
      "answer": "Rubycon capacitor solutions benefit a wide range of industries. The automotive industry relies on Rubycon's AEC-Q200 qualified capacitors for EV/HEV systems, LED lighting, and ADAS. Industrial automation uses Rubycon capacitors for motor drives, power supplies, and control systems. Renewable energy applications including solar inverters and wind turbines utilize Rubycon's long-life capacitors. Consumer electronics manufacturers depend on Rubycon's compact capacitors for TVs, monitors, and appliances. Telecommunications infrastructure also benefits from Rubycon's power supply components.",
      "decisionGuide": "Identify your industry and application requirements to find the most suitable Rubycon solution.",
      "keywords": ["Rubycon industries", "automotive", "industrial", "renewable energy"]
    }
  ],
  "solutions": [
    {
      "id": "industrial-power-supplies",
      "title": "Industrial Power Supply Solutions",
      "slug": "industrial-power-supplies",
      "shortDescription": "High-reliability Rubycon capacitors for industrial AC-DC and DC-DC power supplies.",
      "description": "Rubycon's comprehensive capacitor portfolio provides solutions for demanding industrial power supply applications. From input filtering and PFC stages to DC link and output filtering, Rubycon capacitors deliver the reliability required for industrial environments.",
      "longDescription": "Industrial power supplies require capacitors that can withstand harsh operating conditions including high temperatures, high ripple currents, and long operational hours. Rubycon's aluminum electrolytic capacitors are specifically designed for these demanding applications. The YXF and YXJ series provide reliable performance for general-purpose power supplies, while the USG snap-in series offers high capacitance and extended life for high-power applications. Our solutions include proper derating guidelines, thermal management recommendations, and lifetime calculations to ensure reliable operation.",
      "coreAdvantages": [
        {
          "title": "Long Operational Life",
          "description": "Capacitors rated for 10,000-12,000 hours at 105C with proper derating extending lifetime significantly."
        },
        {
          "title": "High Ripple Current Capability",
          "description": "Designed to handle high ripple currents in switching power supplies without excessive heating."
        },
        {
          "title": "Wide Temperature Range",
          "description": "Operating temperatures from -40C to +105C or +150C for automotive series."
        },
        {
          "title": "High Voltage Ratings",
          "description": "Capacitors available up to 500V for high-voltage industrial applications."
        },
        {
          "title": "Proven Reliability",
          "description": "Decades of proven performance in industrial applications worldwide."
        }
      ],
      "benefits": ["Long life", "High ripple current", "Wide temperature range", "High voltage", "Proven reliability"],
      "products": [
        {
          "partNumber": "25YXF1000M10X16",
          "name": "1000uF 25V YXF Radial Capacitor",
          "category": "Radial Lead Capacitors",
          "link": "/rubycon/products/radial-lead-capacitors/25yxf1000m10x16.html"
        },
        {
          "partNumber": "400USG680M25X30",
          "name": "680uF 400V USG Snap-in Capacitor",
          "category": "Snap-in Capacitors",
          "link": "/rubycon/products/snap-in-capacitors/400usg680m25x30.html"
        }
      ],
      "bomList": [
        {
          "category": "Input Filtering",
          "items": [
            {
              "partNumber": "25YXF1000M10X16",
              "description": "1000uF 25V YXF Radial",
              "quantity": 2,
              "link": "/rubycon/products/radial-lead-capacitors/25yxf1000m10x16.html"
            }
          ]
        },
        {
          "category": "PFC Output",
          "items": [
            {
              "partNumber": "400USG680M25X30",
              "description": "680uF 400V USG Snap-in",
              "quantity": 2,
              "link": "/rubycon/products/snap-in-capacitors/400usg680m25x30.html"
            }
          ]
        }
      ],
      "technicalSpecs": {
        "Input Voltage": "380-480VAC three-phase",
        "Output Power": "Up to 5kW",
        "Efficiency": ">93% at full load",
        "Operating Temperature": "-25C to +60C ambient",
        "Cooling": "Natural convection or forced air"
      },
      "customerCases": [
        {
          "customer": "Industrial Equipment Manufacturer",
          "industry": "Industrial Automation",
          "challenge": "Needed reliable capacitors for 24/7 manufacturing equipment",
          "solution": "Rubycon USG series with voltage derating and thermal management",
          "result": "Achieved 15+ year expected lifetime with zero field failures"
        }
      ],
      "faeInsights": {
        "author": "LiTong Industrial FAE Team",
        "content": "For industrial power supplies, we recommend operating Rubycon capacitors at 80% of rated voltage and keeping core temperature below 85C. The USG series is preferred for high-power applications requiring long life. Always calculate ripple current requirements and ensure adequate thermal management.",
        "keyTakeaways": [
          "Apply 20% voltage derating",
          "Use USG series for high-power applications",
          "Design for 30% ripple current margin",
          "Implement thermal management"
        ],
        "decisionFramework": {
          "steps": [
            "Define power requirements",
            "Calculate capacitor values",
            "Select appropriate series",
            "Apply derating",
            "Design thermal management"
          ],
          "decisionPoints": [
            "YXF vs USG series selection",
            "Voltage derating strategy",
            "Thermal management approach"
          ]
        }
      },
      "faqs": [
        {
          "question": "What capacitors are recommended for PFC output?",
          "answer": "For PFC output filtering, we recommend Rubycon USG series snap-in capacitors. The 400-450V ratings are suitable for 380-480VAC input systems. Select capacitance based on hold-up time and ripple current requirements. The USG series provides 10,000-hour life at 105C.",
          "decisionGuide": "Select USG series for PFC output; calculate capacitance based on hold-up requirements.",
          "keywords": ["PFC capacitor", "USG series", "power factor correction"]
        },
        {
          "question": "How do I calculate capacitor lifetime for my application?",
          "answer": "Capacitor lifetime follows the Arrhenius equation. For Rubycon capacitors, lifetime approximately doubles for every 10C decrease in temperature. Voltage derating also extends lifetime - operating at 80% of rated voltage typically doubles life. Contact our FAE team for detailed calculations.",
          "decisionGuide": "Provide operating conditions to our FAE team for lifetime calculations.",
          "keywords": ["lifetime calculation", "reliability prediction"]
        },
        {
          "question": "What is the recommended voltage derating?",
          "answer": "We recommend operating Rubycon capacitors at 70-80% of rated voltage for optimal lifetime. For example, use 400V capacitors for 300-320V DC bus applications. Higher derating provides longer lifetime but requires larger capacitors.",
          "decisionGuide": "Apply 20-30% voltage derating for extended lifetime.",
          "keywords": ["voltage derating", "lifetime extension"]
        },
        {
          "question": "Can I use radial lead capacitors for high-power applications?",
          "answer": "Radial lead capacitors are suitable for power supplies up to approximately 200W. For higher power applications, snap-in capacitors are recommended due to their higher ripple current capability and larger case sizes for better heat dissipation.",
          "decisionGuide": "Use radial lead for low-medium power; snap-in for high power applications.",
          "keywords": ["radial vs snap-in", "power rating"]
        },
        {
          "question": "What thermal management is recommended?",
          "answer": "Ensure adequate airflow around capacitors. Position capacitors away from heat sources. Use thermal calculations to verify capacitor temperature stays within ratings. For high-power applications, consider forced air cooling.",
          "decisionGuide": "Perform thermal analysis and ensure adequate cooling.",
          "keywords": ["thermal management", "cooling", "temperature"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2), 'utf8');
console.log('Created solutions.json');

// Create support.json
const supportData = {
  "seoTitle": "Rubycon Technical Support | Capacitor Application Guides",
  "seoDescription": "Technical support resources for Rubycon aluminum electrolytic capacitors including application guides, selection tools, FAQs, and engineering documentation.",
  "seoKeywords": [
    "Rubycon technical support",
    "Rubycon application guide",
    "Rubycon capacitor selection",
    "Rubycon design support",
    "Rubycon distributor support"
  ],
  "faqs": [
    {
      "question": "What technical support does LiTong provide for Rubycon products?",
      "answer": "LiTong Electronics provides comprehensive technical support for Rubycon capacitors through our experienced FAE team. Our support includes component selection guidance, lifetime calculations, thermal analysis, and design review services. We can assist with ripple current calculations, derating recommendations, and application-specific solutions. Our team has extensive experience with Rubycon products and can provide practical advice based on real-world applications.",
      "decisionGuide": "Contact our FAE team for personalized technical assistance with your Rubycon capacitor needs.",
      "keywords": ["Rubycon technical support", "FAE support", "design assistance"]
    },
    {
      "question": "How do I access Rubycon datasheets and documentation?",
      "answer": "Rubycon datasheets are available on our website for all stocked products. Technical articles and application notes covering capacitor selection, lifetime prediction, and thermal management are available in our support section. For specialized documentation, our FAE team can request materials directly from Rubycon.",
      "decisionGuide": "Browse our product pages for datasheets, or visit the support section for technical articles.",
      "keywords": ["Rubycon datasheets", "technical documentation"]
    },
    {
      "question": "Can LiTong provide samples of Rubycon capacitors?",
      "answer": "Yes, we provide sample kits of Rubycon capacitors for evaluation. Samples of popular YXF, YXJ, and USG series are typically available from stock. For specialized samples, we can coordinate with Rubycon's factory. Sample requests can be submitted through our website.",
      "decisionGuide": "Submit sample requests through our online form.",
      "keywords": ["Rubycon samples", "component samples"]
    },
    {
      "question": "Does LiTong offer design review services?",
      "answer": "Yes, our FAE team offers design review services for Rubycon-based designs. We can review your schematics, PCB layouts, and BOMs to ensure optimal capacitor selection and application. Design reviews typically take 3-5 business days.",
      "decisionGuide": "Submit your design files through our support portal for review.",
      "keywords": ["design review", "schematic review"]
    },
    {
      "question": "What is the typical response time for technical inquiries?",
      "answer": "Standard technical questions receive a response within 24 business hours. Urgent production issues are prioritized and typically receive a response within 4 hours during business hours. Complex technical questions may require 2-3 business days.",
      "decisionGuide": "Use the support portal for standard inquiries; call for urgent issues.",
      "keywords": ["support response time", "technical inquiry"]
    },
    {
      "question": "Can LiTong provide lifetime calculations?",
      "answer": "Yes, our FAE team can provide detailed lifetime calculations for your specific operating conditions. We use Rubycon's official lifetime models and can calculate expected life based on voltage, temperature, and ripple current.",
      "decisionGuide": "Provide your operating conditions to our FAE team for lifetime calculations.",
      "keywords": ["lifetime calculation", "reliability prediction"]
    },
    {
      "question": "What training resources are available?",
      "answer": "We offer webinars and technical seminars on capacitor selection, application design, and reliability. Recordings of past webinars are available in our support section. On-site training can be arranged for customers with specific needs.",
      "decisionGuide": "Check our events page for upcoming webinars.",
      "keywords": ["Rubycon training", "webinars", "technical seminars"]
    },
    {
      "question": "How do I calculate ripple current requirements?",
      "answer": "Ripple current depends on your application's load current and switching frequency. Our FAE team can help calculate requirements and select appropriate capacitors. We can also provide thermal analysis to ensure selected capacitors operate within safe temperature limits.",
      "decisionGuide": "Contact our FAE team with your application details for ripple current calculations.",
      "keywords": ["ripple current", "thermal analysis"]
    }
  ],
  "articles": [
    {
      "id": "aluminum-capacitor-selection",
      "title": "Aluminum Electrolytic Capacitor Selection Guide",
      "category": "Design Guide",
      "shortDescription": "Comprehensive guide for selecting aluminum electrolytic capacitors for power applications.",
      "content": "## Introduction to Aluminum Electrolytic Capacitors\n\nAluminum electrolytic capacitors are essential components in power supplies, motor drives, and energy storage applications. This guide covers key selection criteria.\n\n## Key Parameters\n\n### Capacitance\nSelect capacitance based on energy storage or filtering requirements. Higher capacitance provides better filtering and longer hold-up time.\n\n### Voltage Rating\nAlways apply voltage derating. We recommend operating at 70-80% of rated voltage for optimal lifetime.\n\n### Temperature Rating\nSelect temperature rating based on your application's ambient and self-heating. 105C rated capacitors are standard for industrial applications.\n\n### Ripple Current\nCalculate expected ripple current and select capacitors with adequate margin. Ripple current causes self-heating.\n\n### Lifetime\nConsider operational lifetime requirements. Standard series offer 2000-5000 hours, while long-life series provide 10000-20000 hours at rated temperature.\n\n## Series Selection\n\n### YXF Series\nGeneral-purpose 105C rated capacitors with 10000-hour life. Ideal for consumer and industrial applications.\n\n### YXJ Series\nExtended life 105C rated capacitors with 12000-hour life. Preferred for applications requiring higher reliability.\n\n### USG Series\nSnap-in capacitors for high-power applications. High ripple current capability and extended life.\n\n## Application Guidelines\n\n### Power Supplies\nUse YXF or YXJ series for output filtering. Calculate ripple current requirements carefully.\n\n### Motor Drives\nUSG series recommended for DC link applications. Ensure adequate voltage margin.\n\n### Automotive\nSelect AEC-Q200 qualified series only. Apply additional derating for reliability.\n\n## Conclusion\n\nProper capacitor selection requires balancing multiple parameters. Contact our FAE team for application-specific recommendations.",
      "tags": ["aluminum electrolytic", "capacitor selection", "design guide"],
      "relatedProducts": ["25YXF1000M10X16", "400USG680M25X30"],
      "author": {
        "name": "James Wilson",
        "title": "Senior FAE - Power Electronics",
        "email": "j.wilson@BeiLuo.com",
        "image": "/assets/team/james-wilson.jpg"
      },
      "publishedDate": "2024-01-15",
      "lastUpdated": "2024-03-20",
      "readTime": "15 minutes",
      "difficulty": "Intermediate",
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "The most common mistake we see is insufficient voltage derating. Operating capacitors at or near rated voltage significantly reduces lifetime. We always recommend at least 20% voltage derating for general applications and 30% for high-reliability designs.",
        "keyTakeaways": [
          "Apply 20-30% voltage derating",
          "Calculate ripple current requirements",
          "Consider temperature effects",
          "Select appropriate series for application"
        ],
        "decisionFramework": {
          "steps": [
            "Define electrical requirements",
            "Calculate capacitance and voltage",
            "Select appropriate series",
            "Verify ripple current capability",
            "Apply derating"
          ],
          "decisionPoints": [
            "Series selection based on lifetime needs",
            "Voltage derating strategy",
            "Thermal management approach"
          ]
        },
        "insightLogic": "Based on extensive field experience with Rubycon capacitors in various applications."
      },
      "faqs": [
        {
          "question": "How much voltage derating should I apply?",
          "answer": "We recommend operating Rubycon capacitors at 70-80% of rated voltage. This provides 20-30% derating which typically doubles the capacitor lifetime compared to full-rated operation.",
          "decisionGuide": "Apply 20-30% voltage derating for optimal lifetime.",
          "keywords": ["voltage derating", "lifetime extension"]
        },
        {
          "question": "What is the difference between YXF and YXJ series?",
          "answer": "YXF is rated for 10000 hours at 105C while YXJ extends this to 12000 hours. YXJ uses an enhanced electrolyte formulation for longer life. Both are suitable for general-purpose applications.",
          "decisionGuide": "Choose YXF for standard applications; YXJ for extended lifetime requirements.",
          "keywords": ["YXF vs YXJ", "series comparison"]
        },
        {
          "question": "How do I calculate required capacitance?",
          "answer": "For filtering applications, capacitance depends on ripple voltage requirements. For energy storage, calculate based on hold-up time requirements. Our FAE team can assist with detailed calculations.",
          "decisionGuide": "Contact our FAE team with your requirements for capacitance calculations.",
          "keywords": ["capacitance calculation", "filtering", "energy storage"]
        },
        {
          "question": "What temperature rating do I need?",
          "answer": "For industrial applications, 105C rated capacitors are standard. For automotive under-hood applications, 150C rated capacitors (BXA series) are required. Consumer electronics may use 85C rated capacitors.",
          "decisionGuide": "Select 105C for industrial, 150C for automotive, 85C for consumer.",
          "keywords": ["temperature rating", "105C capacitor", "150C capacitor"]
        },
        {
          "question": "Can I use aluminum electrolytic capacitors in series?",
          "answer": "Yes, but voltage balancing resistors are required to ensure equal voltage distribution. Use identical part numbers and add parallel resistors (100k-1M ohm) for balancing.",
          "decisionGuide": "Use balancing resistors; derate the series combination.",
          "keywords": ["series connection", "voltage balancing"]
        }
      ],
      "customerCases": [
        {
          "customer": "Power Supply Manufacturer",
          "industry": "Industrial",
          "challenge": "Capacitor failures due to insufficient derating",
          "solution": "Implemented proper voltage derating and thermal management",
          "feedback": "Following the selection guide eliminated field failures"
        }
      ],
      "slug": "aluminum-capacitor-selection",
      "publishDate": "2024-01-15",
      "summary": "Comprehensive guide for selecting aluminum electrolytic capacitors for power applications.",
      "relatedArticles": [
        {
          "id": "capacitor-lifetime-calculation",
          "title": "Capacitor Lifetime Calculation",
          "summary": "Understanding lifetime factors and calculation methods"
        },
        {
          "id": "ripple-current-thermal",
          "title": "Ripple Current and Thermal Management",
          "summary": "Managing capacitor heating in switching applications"
        },
        {
          "id": "automotive-capacitor-selection",
          "title": "Automotive Capacitor Selection",
          "summary": "Selecting capacitors for automotive applications"
        }
      ]
    },
    {
      "id": "capacitor-lifetime-calculation",
      "title": "Capacitor Lifetime Calculation",
      "category": "Technical Analysis",
      "shortDescription": "Understanding lifetime factors and calculation methods for aluminum electrolytic capacitors.",
      "content": "## Introduction to Capacitor Lifetime\n\nUnderstanding capacitor lifetime is essential for designing reliable systems. This guide explains the factors affecting lifetime and calculation methods.\n\n## Primary Failure Mechanism\n\nThe primary wear-out mechanism is electrolyte evaporation through the seal. As electrolyte is lost, capacitance decreases and ESR increases.\n\n## Temperature Effects\n\nTemperature has the most significant impact on lifetime. The relationship follows the Arrhenius equation where lifetime approximately doubles for every 10C decrease.\n\n## Voltage Effects\n\nOperating voltage affects lifetime following an inverse power law. Operating at 80% of rated voltage typically doubles lifetime.\n\n## Ripple Current Effects\n\nRipple current causes internal heating. The temperature rise is proportional to I squared times ESR.\n\n## Calculation Example\n\nA capacitor rated for 10000 hours at 105C will have 40000 hours at 85C and 160000 hours at 65C, assuming voltage derating is applied.\n\n## Design Recommendations\n\nApply voltage derating and thermal management to maximize lifetime. Monitor capacitor health in critical applications.",
      "tags": ["lifetime", "reliability", "thermal management"],
      "relatedProducts": ["25YXF1000M10X16"],
      "author": {
        "name": "David Park",
        "title": "Senior FAE - Power Systems",
        "email": "d.park@BeiLuo.com",
        "image": "/assets/team/david-park.jpg"
      },
      "publishedDate": "2024-02-01",
      "lastUpdated": "2024-03-15",
      "readTime": "20 minutes",
      "difficulty": "Advanced",
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "We frequently see designs that don't account for the combined effects of temperature and voltage. A capacitor operated at high temperature AND high voltage will have significantly shorter life than calculations considering only one factor.",
        "keyTakeaways": [
          "Temperature has greatest impact on lifetime",
          "Voltage derating doubles lifetime",
          "Ripple current causes self-heating",
          "Design for worst-case conditions"
        ],
        "decisionFramework": {
          "steps": [
            "Determine required lifetime",
            "Identify operating conditions",
            "Calculate expected lifetime",
            "Apply safety margin"
          ],
          "decisionPoints": [
            "Acceptable lifetime vs cost",
            "Thermal management approach",
            "Voltage derating strategy"
          ]
        },
        "insightLogic": "Based on field data and Rubycon's lifetime models."
      },
      "faqs": [
        {
          "question": "What is end-of-life criteria?",
          "answer": "End-of-life is defined as when capacitance drops below 80% of initial or ESR increases above 200% of initial.",
          "decisionGuide": "Monitor capacitance and ESR; replace before reaching end-of-life.",
          "keywords": ["end-of-life", "capacitance degradation"]
        },
        {
          "question": "How does temperature affect lifetime?",
          "answer": "Lifetime approximately doubles for every 10C decrease in temperature following the Arrhenius equation.",
          "decisionGuide": "Minimize operating temperature through proper thermal design.",
          "keywords": ["temperature effect", "Arrhenius equation"]
        },
        {
          "question": "How much does voltage derating help?",
          "answer": "Operating at 80% of rated voltage typically doubles lifetime. Operating at 70% can provide 3-4x extension.",
          "decisionGuide": "Apply 20-30% voltage derating for significant lifetime improvement.",
          "keywords": ["voltage derating", "lifetime extension"]
        },
        {
          "question": "What is the shelf life?",
          "answer": "Maximum storage period is 3 years at room temperature. Capacitors may require reformation after extended storage.",
          "decisionGuide": "Use within 3 years; perform reformation if stored longer.",
          "keywords": ["shelf life", "storage"]
        },
        {
          "question": "How do I monitor capacitor health?",
          "answer": "Measure capacitance and ESR periodically. Track trends over time to predict remaining life.",
          "decisionGuide": "Implement periodic testing for critical applications.",
          "keywords": ["capacitor testing", "predictive maintenance"]
        }
      ],
      "customerCases": [
        {
          "customer": "Industrial Drive Manufacturer",
          "industry": "Industrial",
          "challenge": "Capacitor failures in high-temperature environment",
          "solution": "Applied proper derating and thermal management based on lifetime calculations",
          "result": "Achieved expected 15+ year lifetime"
        }
      ],
      "slug": "capacitor-lifetime-calculation",
      "publishDate": "2024-02-01",
      "summary": "Understanding lifetime factors and calculation methods for aluminum electrolytic capacitors.",
      "relatedArticles": [
        {
          "id": "aluminum-capacitor-selection",
          "title": "Aluminum Electrolytic Capacitor Selection Guide",
          "summary": "Comprehensive selection guide"
        },
        {
          "id": "ripple-current-thermal",
          "title": "Ripple Current and Thermal Management",
          "summary": "Managing capacitor heating"
        },
        {
          "id": "automotive-capacitor-selection",
          "title": "Automotive Capacitor Selection",
          "summary": "Automotive applications"
        }
      ]
    },
    {
      "id": "ripple-current-thermal",
      "title": "Ripple Current and Thermal Management",
      "category": "Technical Analysis",
      "shortDescription": "Managing capacitor heating in switching power supply applications.",
      "content": "## Introduction to Ripple Current\n\nRipple current is the AC component of current flowing through a capacitor. In switching power supplies, ripple current causes capacitor heating.\n\n## Ripple Current Effects\n\nRipple current causes power dissipation in the capacitor's ESR. The power loss is I squared times ESR. This heating reduces capacitor lifetime.\n\n## Thermal Management\n\nProper thermal management is essential for reliable operation. Capacitor temperature is the sum of ambient temperature and self-heating.\n\n## Calculating Temperature Rise\n\nTemperature rise equals power dissipation times thermal resistance. Power dissipation is I squared times ESR.\n\n## Design Guidelines\n\nKeep capacitor temperature well below maximum rating. Use multiple capacitors in parallel for high ripple current applications. Ensure adequate airflow.\n\n## Measurement Techniques\n\nUse current probes and temperature sensors to verify calculations. Measure under worst-case operating conditions.",
      "tags": ["ripple current", "thermal management", "heating"],
      "relatedProducts": ["25YXF1000M10X16", "400USG680M25X30"],
      "author": {
        "name": "Sarah Johnson",
        "title": "FAE Manager - Industrial",
        "email": "s.johnson@BeiLuo.com",
        "image": "/assets/team/sarah-johnson.jpg"
      },
      "publishedDate": "2024-02-15",
      "lastUpdated": "2024-03-10",
      "readTime": "18 minutes",
      "difficulty": "Intermediate",
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "Ripple current is often underestimated in power supply designs. We recommend measuring actual ripple current under full load conditions and ensuring at least 30% margin below capacitor ratings.",
        "keyTakeaways": [
          "Calculate ripple current accurately",
          "Include 30% margin below ratings",
          "Verify thermal design",
          "Measure under worst-case conditions"
        ],
        "decisionFramework": {
          "steps": [
            "Calculate expected ripple current",
            "Select capacitors with adequate margin",
            "Design thermal management",
            "Verify with measurements"
          ],
          "decisionPoints": [
            "Single vs parallel capacitors",
            "Natural vs forced cooling"
          ]
        },
        "insightLogic": "Based on field experience with power supply thermal issues."
      },
      "faqs": [
        {
          "question": "How do I calculate ripple current?",
          "answer": "Ripple current depends on load current, duty cycle, and switching frequency. For buck converters, Iripple equals Vout times (1-D) divided by L times fsw.",
          "decisionGuide": "Calculate based on converter topology and operating conditions.",
          "keywords": ["ripple current calculation", "switching power supply"]
        },
        {
          "question": "What is the temperature rise formula?",
          "answer": "Temperature rise equals I squared times ESR times Rth, where Rth is thermal resistance.",
          "decisionGuide": "Calculate temperature rise and verify it stays within ratings.",
          "keywords": ["temperature rise", "thermal calculation"]
        },
        {
          "question": "Should I use multiple capacitors in parallel?",
          "answer": "Yes, paralleling capacitors distributes ripple current and reduces ESR. Use identical part numbers for best current sharing.",
          "decisionGuide": "Parallel capacitors for high ripple current applications.",
          "keywords": ["parallel capacitors", "current sharing"]
        },
        {
          "question": "How important is airflow?",
          "answer": "Airflow significantly affects capacitor temperature. Natural convection is adequate for low power. Forced air may be needed for high power.",
          "decisionGuide": "Ensure adequate airflow; consider forced cooling for high power.",
          "keywords": ["airflow", "cooling", "thermal management"]
        },
        {
          "question": "How do I measure capacitor temperature?",
          "answer": "Use thermocouples attached to the capacitor case near the top. Measure under full load and maximum ambient conditions.",
          "decisionGuide": "Measure case temperature under worst-case operating conditions.",
          "keywords": ["temperature measurement", "thermal testing"]
        }
      ],
      "customerCases": [
        {
          "customer": "Power Supply OEM",
          "industry": "Industrial",
          "challenge": "Capacitor overheating in compact power supply",
          "solution": "Implemented parallel capacitors and improved airflow",
          "result": "Reduced capacitor temperature by 20C"
        }
      ],
      "slug": "ripple-current-thermal",
      "publishDate": "2024-02-15",
      "summary": "Managing capacitor heating in switching power supply applications.",
      "relatedArticles": [
        {
          "id": "aluminum-capacitor-selection",
          "title": "Aluminum Electrolytic Capacitor Selection Guide",
          "summary": "Selection guide"
        },
        {
          "id": "capacitor-lifetime-calculation",
          "title": "Capacitor Lifetime Calculation",
          "summary": "Lifetime calculation"
        },
        {
          "id": "automotive-capacitor-selection",
          "title": "Automotive Capacitor Selection",
          "summary": "Automotive applications"
        }
      ]
    },
    {
      "id": "automotive-capacitor-selection",
      "title": "Automotive Capacitor Selection",
      "category": "Application Guide",
      "shortDescription": "Selecting aluminum electrolytic capacitors for automotive applications.",
      "content": "## Introduction to Automotive Capacitors\n\nAutomotive applications require capacitors that meet stringent reliability and quality standards. This guide covers selection criteria for automotive use.\n\n## AEC-Q200 Qualification\n\nAutomotive capacitors must be qualified to AEC-Q200 standards. This includes rigorous testing for temperature, vibration, and mechanical shock.\n\n## Temperature Requirements\n\nAutomotive under-hood applications can reach 150C. Select capacitors rated for maximum expected temperature with appropriate margin.\n\n## Voltage Derating\n\nApply additional voltage derating for automotive applications. We recommend 30% derating for critical safety systems.\n\n## Vibration Resistance\n\nAutomotive capacitors must withstand significant vibration. Select capacitors with appropriate mounting and construction.\n\n## Series Selection\n\nRubycon's BXA series is specifically designed for automotive applications with 150C rating and AEC-Q200 qualification.",
      "tags": ["automotive", "AEC-Q200", "BXA series"],
      "relatedProducts": ["BXA series"],
      "author": {
        "name": "Michael Chen",
        "title": "Senior FAE - Automotive",
        "email": "m.chen@BeiLuo.com",
        "image": "/assets/team/michael-chen.jpg"
      },
      "publishedDate": "2024-03-01",
      "lastUpdated": "2024-03-25",
      "readTime": "15 minutes",
      "difficulty": "Intermediate",
      "faeInsights": {
        "author": "LiTong FAE Team",
        "content": "Automotive applications demand the highest reliability. We always recommend AEC-Q200 qualified capacitors with additional derating margins. Never use commercial-grade capacitors in safety-critical automotive systems.",
        "keyTakeaways": [
          "Use only AEC-Q200 qualified capacitors",
          "Apply 30% voltage derating",
          "Consider 150C rating for under-hood",
          "Verify vibration resistance"
        ],
        "decisionFramework": {
          "steps": [
            "Identify application requirements",
            "Select AEC-Q200 qualified series",
            "Apply automotive derating",
            "Verify environmental ratings"
          ],
          "decisionPoints": [
            "Temperature rating selection",
            "Voltage derating margin",
            "Vibration requirements"
          ]
        },
        "insightLogic": "Based on automotive industry requirements and field experience."
      },
      "faqs": [
        {
          "question": "What is AEC-Q200?",
          "answer": "AEC-Q200 is the Automotive Electronics Council qualification standard for passive components. It includes rigorous testing for temperature, vibration, and mechanical stress.",
          "decisionGuide": "Always select AEC-Q200 qualified capacitors for automotive applications.",
          "keywords": ["AEC-Q200", "automotive qualification"]
        },
        {
          "question": "What temperature rating do I need?",
          "answer": "For under-hood applications, select 150C rated capacitors. For cabin applications, 125C or 105C may be adequate depending on location.",
          "decisionGuide": "Select 150C for under-hood, 125C or 105C for cabin.",
          "keywords": ["temperature rating", "150C capacitor"]
        },
        {
          "question": "Can I use commercial capacitors in automotive?",
          "answer": "No, commercial-grade capacitors should not be used in automotive applications. Always use AEC-Q200 qualified capacitors.",
          "decisionGuide": "Use only AEC-Q200 qualified capacitors for all automotive applications.",
          "keywords": ["automotive grade", "commercial vs automotive"]
        },
        {
          "question": "What is PPAP?",
          "answer": "PPAP (Production Part Approval Process) is documentation required by automotive OEMs. It includes dimensional data, material certifications, and test results.",
          "decisionGuide": "Request PPAP documentation from your distributor for automotive applications.",
          "keywords": ["PPAP", "automotive documentation"]
        },
        {
          "question": "What derating is required for automotive?",
          "answer": "We recommend 30% voltage derating for critical automotive applications. This provides additional margin for reliability.",
          "decisionGuide": "Apply 30% voltage derating for automotive applications.",
          "keywords": ["automotive derating", "voltage margin"]
        }
      ],
      "customerCases": [
        {
          "customer": "Automotive Tier 1 Supplier",
          "industry": "Automotive",
          "challenge": "Needed reliable capacitors for LED driver module",
          "solution": "Implemented Rubycon BXA series with proper derating",
          "result": "Passed all automotive qualification requirements"
        }
      ],
      "slug": "automotive-capacitor-selection",
      "publishDate": "2024-03-01",
      "summary": "Selecting aluminum electrolytic capacitors for automotive applications.",
      "relatedArticles": [
        {
          "id": "aluminum-capacitor-selection",
          "title": "Aluminum Electrolytic Capacitor Selection Guide",
          "summary": "General selection guide"
        },
        {
          "id": "capacitor-lifetime-calculation",
          "title": "Capacitor Lifetime Calculation",
          "summary": "Lifetime calculation"
        },
        {
          "id": "ripple-current-thermal",
          "title": "Ripple Current and Thermal Management",
          "summary": "Thermal management"
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'support.json'), JSON.stringify(supportData, null, 2), 'utf8');
console.log('Created support.json with 4 articles');

// Create news.json
const newsData = {
  "seoTitle": "Rubycon News | Product Updates and Industry Insights",
  "seoDescription": "Latest news from Rubycon including new product releases, technology updates, and industry trends in aluminum electrolytic capacitors.",
  "seoKeywords": [
    "Rubycon news",
    "Rubycon product updates",
    "capacitor industry",
    "aluminum electrolytic updates"
  ],
  "articles": [
    {
      "id": "rubycon-expands-yxj-series",
      "title": "Rubycon Expands YXJ Extended Life Series",
      "summary": "Rubycon announces expansion of YXJ series with new voltage and capacitance ratings for industrial applications.",
      "content": "Rubycon Corporation has announced the expansion of its YXJ extended life aluminum electrolytic capacitor series. The expanded portfolio includes new voltage ratings up to 100V and capacitance values up to 22,000uF.