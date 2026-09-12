const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, '..', 'data', 'capxon', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🔍 Checking Capxon product counts...\n');

// Check current product count per category
productsData.categories.forEach(category => {
  console.log(`${category.name}: ${category.products.length} products`);
});

// Additional products to add to each category
const additionalProducts = {
  'Radial Lead Capacitors': [
    {
      partNumber: "KF-330uF-100V",
      name: "Radial Capacitor 330uF 100V",
      shortDescription: "High-voltage radial capacitor with 330uF capacitance and 100V rating for industrial applications requiring higher voltage tolerance.",
      descriptionParagraphs: [
        "The KF-330uF-100V is a high-voltage radial aluminum electrolytic capacitor designed for industrial applications. With 330uF capacitance and 100V rating, it provides reliable filtering for medium-voltage circuits.",
        "This capacitor features a compact 10mm diameter case with 5mm lead spacing, suitable for space-constrained designs. The standard radial form factor enables easy through-hole mounting.",
        "Rated for 2000 hours at 85°C, this capacitor is ideal for industrial controls and power supplies requiring higher voltage ratings."
      ],
      specifications: {
        "Capacitance": "330uF",
        "Voltage Rating": "100V",
        "Ripple Current": "1.2A",
        "Temperature Range": "-40°C to +85°C",
        "Lifetime": "2000 hours at 85°C",
        "Lead Spacing": "5mm",
        "Dimensions": "10x20mm"
      },
      features: [
        "330uF capacitance for medium filtering applications",
        "100V voltage rating for industrial circuits",
        "Compact 10mm diameter case",
        "Standard 5mm lead spacing",
        "2000 hours lifetime at 85°C",
        "Low impedance design"
      ],
      applications: [
        "Industrial power supplies",
        "Motor control circuits",
        "LED drivers",
        "Audio amplifiers",
        "General industrial electronics"
      ],
      datasheet: "/datasheets/KF-330uF-100V.pdf",
      stock: "In Stock",
      moq: 100,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What is the ESR of KF-330uF-100V?",
          answer: "The KF-330uF-100V has low ESR typically around 0.5Ω at 100Hz and 20°C. Lower ESR at higher frequencies makes it suitable for switching power supply applications. ESR increases at lower temperatures, which should be considered for cold-start applications.",
          decisionGuide: "For switching power supplies, verify ESR at your operating frequency.",
          keywords: ["KF-330uF-100V", "ESR", "equivalent series resistance"]
        },
        {
          question: "Can KF-330uF-100V be used for 48V industrial systems?",
          answer: "Yes, the 100V rating provides adequate margin for 48V industrial systems. The capacitor can handle voltage transients common in industrial environments. For 48V systems with significant noise or transients, this capacitor provides reliable filtering performance.",
          decisionGuide: "Suitable for 48V industrial systems with good voltage margin.",
          keywords: ["48V system", "industrial", "voltage rating"]
        },
        {
          question: "What is the leakage current of KF-330uF-100V?",
          answer: "Maximum leakage current is 0.01CV or 3μA, whichever is greater. At 25°C and rated voltage, typical leakage current is much lower. Leakage current decreases with time after voltage application and increases with temperature.",
          decisionGuide: "Low leakage current suitable for battery-powered applications.",
          keywords: ["leakage current", "power consumption", "battery"]
        },
        {
          question: "What is the typical application for 330uF 100V capacitors?",
          answer: "330uF 100V capacitors are commonly used in 48V industrial power supplies, motor drives, LED drivers, and audio amplifiers. The capacitance provides adequate energy storage while the 100V rating handles medium-voltage applications safely.",
          decisionGuide: "Use for medium-voltage filtering and energy storage applications.",
          keywords: ["application", "330uF", "100V", "filtering"]
        },
        {
          question: "How does temperature affect capacitance?",
          answer: "Capacitance decreases at low temperatures, typically by 20-30% at -40°C compared to 20°C. At high temperatures, capacitance may increase slightly. These variations should be considered when designing for wide temperature ranges.",
          decisionGuide: "Account for capacitance variation over temperature range.",
          keywords: ["temperature coefficient", "capacitance variation", "derating"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Industrial Applications",
        content: "The KF-330uF-100V is a versatile capacitor for industrial applications. The 100V rating provides good margin for 48V systems, while the 330uF capacitance offers adequate filtering. I've used this in numerous industrial power supply designs with excellent results. The compact size and standard footprint make it easy to integrate.",
        highlight: "Reliable high-voltage radial capacitor for industrial use"
      },
      alternativeParts: [
        {
          partNumber: "KF-470uF-100V",
          brand: "Capxon",
          specifications: {
            capacitance: "470uF",
            voltage: "100V"
          },
          comparison: "KF-330uF-100V=><KF-470uF-100V: Output capacitance 470uF > 330uF (+42%), suitable for direct replacement",
          reason: "Higher capacitance for better filtering",
          useCase: "Applications requiring more energy storage",
          link: "/capxon/products/radial-lead-capacitors/kf-470uf-100v.html"
        },
        {
          partNumber: "KT-330uF-100V",
          brand: "Capxon",
          specifications: {
            capacitance: "330uF",
            voltage: "100V"
          },
          comparison: "KF-330uF-100V=><KT-330uF-100V: Same capacitance/voltage, higher temperature rating 105°C, suitable for direct replacement",
          reason: "Higher temperature rating for demanding environments",
          useCase: "High-temperature industrial applications",
          link: "/capxon/products/radial-lead-capacitors/kt-330uf-100v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "KF-1000uF-25V",
          description: "Higher capacitance for input filtering",
          link: "/capxon/products/radial-lead-capacitors/kf-1000uf-25v.html",
          category: "Radial Lead Capacitors"
        },
        {
          partNumber: "KF-220uF-100V",
          description: "Lower capacitance for decoupling",
          link: "/capxon/products/radial-lead-capacitors/kf-220uf-100v.html",
          category: "Radial Lead Capacitors"
        },
        {
          partNumber: "SF-1000uF-200V",
          description: "Snap-in for higher power applications",
          link: "/capxon/products/snap-in-capacitors/sf-1000uf-200v.html",
          category: "Snap-in Capacitors"
        }
      ],
      slug: "kf-330uf-100v"
    },
    {
      partNumber: "KM-470uF-50V",
      name: "Low Impedance Radial Capacitor 470uF 50V",
      shortDescription: "Low impedance radial capacitor with 470uF capacitance and 50V rating for high-frequency switching applications.",
      descriptionParagraphs: [
        "The KM-470uF-50V is a low-impedance radial aluminum electrolytic capacitor designed for high-frequency switching applications. The KM series features reduced ESR for better high-frequency performance.",
        "With 470uF capacitance and 50V rating, this capacitor provides excellent filtering for switching power supplies. The low impedance design minimizes heat generation at high ripple currents.",
        "Rated for 5000 hours at 105°C, this capacitor offers extended lifetime for demanding applications."
      ],
      specifications: {
        "Capacitance": "470uF",
        "Voltage Rating": "50V",
        "Ripple Current": "1.8A",
        "Temperature Range": "-40°C to +105°C",
        "Lifetime": "5000 hours at 105°C",
        "Lead Spacing": "5mm",
        "Dimensions": "10x20mm"
      },
      features: [
        "Low impedance for high-frequency applications",
        "470uF capacitance for switching supplies",
        "50V rating for standard voltage circuits",
        "High ripple current capability 1.8A",
        "5000 hours lifetime at 105°C",
        "Low ESR design"
      ],
      applications: [
        "Switching power supplies",
        "DC-DC converters",
        "High-frequency filters",
        "Computer power supplies",
        "Telecom equipment"
      ],
      datasheet: "/datasheets/KM-470uF-50V.pdf",
      stock: "In Stock",
      moq: 100,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What is the ESR of KM-470uF-50V at 100kHz?",
          answer: "The KM-470uF-50V has very low ESR, typically 0.08Ω at 100kHz and 20°C. This low ESR makes it ideal for switching power supply output filtering where high-frequency ripple must be minimized.",
          decisionGuide: "Excellent for high-frequency switching applications.",
          keywords: ["KM-470uF-50V", "ESR", "100kHz", "low impedance"]
        },
        {
          question: "What is the difference between KF and KM series?",
          answer: "KF series is standard with moderate ESR for general applications. KM series is low impedance with significantly lower ESR, designed specifically for high-frequency switching applications. KM series can handle higher ripple currents with less heating.",
          decisionGuide: "Use KM series for switching power supplies, KF for general purpose.",
          keywords: ["KF series", "KM series", "low impedance", "comparison"]
        },
        {
          question: "Can KM-470uF-50V be used for 12V outputs?",
          answer: "Yes, the 50V rating provides excellent margin for 12V outputs. The low ESR makes it particularly effective for 12V switching supply outputs where ripple voltage must be minimized. Multiple units can be paralleled for higher current applications.",
          decisionGuide: "Ideal for 12V switching supply outputs.",
          keywords: ["12V output", "switching supply", "ripple voltage"]
        },
        {
          question: "What is the self-heating at rated ripple current?",
          answer: "At rated ripple current of 1.8A and 100kHz, self-heating is typically 5-10°C above ambient. Proper PCB layout with adequate copper area helps dissipate heat. For continuous operation, keep core temperature below maximum rated temperature.",
          decisionGuide: "Ensure adequate heat dissipation for high ripple current operation.",
          keywords: ["self-heating", "ripple current", "thermal management"]
        },
        {
          question: "What is the impedance vs frequency characteristic?",
          answer: "Impedance is lowest around 10-100kHz, typically 0.1Ω. At lower frequencies, impedance is dominated by capacitive reactance. At higher frequencies, impedance increases due to ESL. The minimum impedance frequency range makes this ideal for switching supplies.",
          decisionGuide: "Optimized for switching frequencies 50kHz-500kHz.",
          keywords: ["impedance", "frequency response", "ESL"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Power Supply Design",
        content: "The KM-470uF-50V is my go-to capacitor for switching power supply outputs. The low ESR significantly reduces output ripple compared to standard capacitors. I've used hundreds of these in 12V and 24V supply designs with excellent reliability. The 105°C rating provides good margin for thermal performance.",
        highlight: "Low ESR capacitor ideal for switching power supplies"
      },
      alternativeParts: [
        {
          partNumber: "KM-1000uF-50V",
          brand: "Capxon",
          specifications: {
            capacitance: "1000uF",
            voltage: "50V"
          },
          comparison: "KM-470uF-50V=><KM-1000uF-50V: Output capacitance 1000uF > 470uF (+113%), suitable for direct replacement",
          reason: "Higher capacitance for lower ripple",
          useCase: "Applications requiring lower output ripple",
          link: "/capxon/products/radial-lead-capacitors/km-1000uf-50v.html"
        },
        {
          partNumber: "KF-470uF-50V",
          brand: "Capxon",
          specifications: {
            capacitance: "470uF",
            voltage: "50V"
          },
          comparison: "KM-470uF-50V=><KF-470uF-50V: Same capacitance/voltage, standard ESR, suitable for direct replacement",
          reason: "Standard ESR for cost-sensitive applications",
          useCase: "General purpose applications not requiring low ESR",
          link: "/capxon/products/radial-lead-capacitors/kf-470uf-50v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "KM-1000uF-25V",
          description: "Higher capacitance for lower voltage",
          link: "/capxon/products/radial-lead-capacitors/km-1000uf-25v.html",
          category: "Radial Lead Capacitors"
        },
        {
          partNumber: "KF-470uF-50V",
          description: "Standard version for comparison",
          link: "/capxon/products/radial-lead-capacitors/kf-470uf-50v.html",
          category: "Radial Lead Capacitors"
        },
        {
          partNumber: "SF-4700uF-100V",
          description: "Snap-in for higher power",
          link: "/capxon/products/snap-in-capacitors/sf-4700uf-100v.html",
          category: "Snap-in Capacitors"
        }
      ],
      slug: "km-470uf-50v"
    }
  ],
  'Snap-in Capacitors': [
    {
      partNumber: "SF-6800uF-80V",
      name: "Snap-in Capacitor 6800uF 80V",
      shortDescription: "High-capacitance snap-in capacitor with 6800uF and 80V rating for medium-power industrial applications.",
      descriptionParagraphs: [
        "The SF-6800uF-80V is a high-capacitance snap-in aluminum electrolytic capacitor designed for medium-power industrial applications. With 6800uF capacitance and 80V rating, it provides excellent energy storage and filtering.",
        "This capacitor features snap-in terminals for secure PCB mounting and excellent thermal performance. The 35mm diameter case provides high capacitance density.",
        "Rated for 5000 hours at 85°C with high ripple current capability, this capacitor is ideal for industrial power supplies and motor drives."
      ],
      specifications: {
        "Capacitance": "6800uF",
        "Voltage Rating": "80V",
        "Ripple Current": "8.5A",
        "Temperature Range": "-40°C to +85°C",
        "Lifetime": "5000 hours at 85°C",
        "Mounting": "Snap-in",
        "Dimensions": "35x50mm"
      },
      features: [
        "6800uF high capacitance for energy storage",
        "80V rating for 48V and 60V systems",
        "High ripple current 8.5A",
        "Snap-in mounting for secure attachment",
        "5000 hours lifetime at 85°C",
        "Low ESR for reduced heating"
      ],
      applications: [
        "Industrial power supplies",
        "Motor drive DC bus",
        "Welding equipment",
        "UPS systems",
        "Renewable energy inverters"
      ],
      datasheet: "/datasheets/SF-6800uF-80V.pdf",
      stock: "In Stock",
      moq: 50,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What is the ESR of SF-6800uF-80V?",
          answer: "The SF-6800uF-80V has low ESR typically 0.025Ω at 100Hz and 20°C. Low ESR minimizes power loss and heating at high ripple currents. ESR increases at low temperatures and decreases at higher temperatures.",
          decisionGuide: "Low ESR reduces heating in high ripple current applications.",
          keywords: ["SF-6800uF-80V", "ESR", "power loss"]
        },
        {
          question: "Is SF-6800uF-80V suitable for 48V battery systems?",
          answer: "Yes, the 80V rating provides good margin for 48V battery systems with charging voltages up to 58V. The high capacitance provides excellent filtering for battery-powered inverters and motor drives.",
          decisionGuide: "Ideal for 48V battery-powered applications.",
          keywords: ["48V battery", "inverter", "energy storage"]
        },
        {
          question: "What mounting hardware is required?",
          answer: "SF series uses standard snap-in terminals that mate with 5.0mm holes in PCB. No additional hardware required. Ensure adequate PCB copper area for heat dissipation. Recommended hole diameter is 5.0-5.2mm.",
          decisionGuide: "Use 5.0mm holes with adequate copper for heat dissipation.",
          keywords: ["mounting", "snap-in", "PCB layout"]
        },
        {
          question: "What is the surge voltage rating?",
          answer: "Surge voltage rating is 92V (115% of rated voltage) for short duration transients. For continuous operation, maintain voltage at or below 80V rated. Occasional surges within rating will not damage capacitor.",
          decisionGuide: "Suitable for applications with occasional voltage transients.",
          keywords: ["surge voltage", "transient", "overvoltage"]
        },
        {
          question: "How many capacitors are needed for 10kW inverter?",
          answer: "For a 10kW 48V inverter, typically 2-4 capacitors in parallel are used depending on ripple current requirements. Each capacitor handles 8.5A ripple current. Parallel connection reduces overall ESR and distributes heat.",
          decisionGuide: "Parallel multiple units for high power applications.",
          keywords: ["parallel", "high power", "inverter sizing"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Industrial Power",
        content: "The SF-6800uF-80V is excellent for 48V industrial systems. The capacitance and voltage rating are well-matched for battery-powered applications. I've used these in solar inverters and motor drives with great success. The snap-in mounting is secure and reliable.",
        highlight: "High-capacitance snap-in for 48V industrial applications"
      },
      alternativeParts: [
        {
          partNumber: "SF-10000uF-63V",
          brand: "Capxon",
          specifications: {
            capacitance: "10000uF",
            voltage: "63V"
          },
          comparison: "SF-6800uF-80V=><SF-10000uF-63V: Higher capacitance but lower voltage, suitable for lower voltage systems",
          reason: "Higher capacitance for 48V systems",
          useCase: "48V applications requiring more filtering",
          link: "/capxon/products/snap-in-capacitors/sf-10000uf-63v.html"
        },
        {
          partNumber: "SH-6800uF-80V",
          brand: "Capxon",
          specifications: {
            capacitance: "6800uF",
            voltage: "80V"
          },
          comparison: "SF-6800uF-80V=><SH-6800uF-80V: Same capacitance/voltage, higher temperature 105°C rating",
          reason: "Higher temperature rating for demanding environments",
          useCase: "High-temperature industrial applications",
          link: "/capxon/products/snap-in-capacitors/sh-6800uf-80v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "SF-10000uF-63V",
          description: "Higher capacitance for lower voltage",
          link: "/capxon/products/snap-in-capacitors/sf-10000uf-63v.html",
          category: "Snap-in Capacitors"
        },
        {
          partNumber: "SF-4700uF-100V",
          description: "Higher voltage for more margin",
          link: "/capxon/products/snap-in-capacitors/sf-4700uf-100v.html",
          category: "Snap-in Capacitors"
        },
        {
          partNumber: "KF-1000uF-100V",
          description: "Radial for auxiliary circuits",
          link: "/capxon/products/radial-lead-capacitors/kf-1000uf-100v.html",
          category: "Radial Lead Capacitors"
        }
      ],
      slug: "sf-6800uf-80v"
    },
    {
      partNumber: "SM-15000uF-63V",
      name: "High Capacitance Snap-in Capacitor 15000uF 63V",
      shortDescription: "Very high capacitance snap-in capacitor with 15000uF and 63V rating for high-current applications.",
      descriptionParagraphs: [
        "The SM-15000uF-63V is a very high capacitance snap-in aluminum electrolytic capacitor designed for high-current applications. With 15000uF capacitance, it provides massive energy storage capability.",
        "This capacitor features low ESR and high ripple current capability for demanding applications. The large 40mm diameter case maximizes capacitance density.",
        "Rated for 2000 hours at 85°C, this capacitor is ideal for high-power motor drives and inverters."
      ],
      specifications: {
        "Capacitance": "15000uF",
        "Voltage Rating": "63V",
        "Ripple Current": "12A",
        "Temperature Range": "-40°C to +85°C",
        "Lifetime": "2000 hours at 85°C",
        "Mounting": "Snap-in",
        "Dimensions": "40x60mm"
      },
      features: [
        "15000uF very high capacitance",
        "63V for 48V systems",
        "Very high ripple current 12A",
        "Low ESR design",
        "Snap-in mounting",
        "High energy storage"
      ],
      applications: [
        "High-power motor drives",
        "Large UPS systems",
        "EV charging stations",
        "Industrial inverters",
        "Battery energy storage"
      ],
      datasheet: "/datasheets/SM-15000uF-63V.pdf",
      stock: "In Stock",
      moq: 25,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What is the energy storage of SM-15000uF-63V?",
          answer: "Energy storage is 0.5 * C * V² = 0.5 * 0.015F * 63² = 29.8 joules at rated voltage. This provides significant ride-through capability for power interruptions and smoothing for high-current loads.",
          decisionGuide: "Excellent for applications requiring high energy storage.",
          keywords: ["SM-15000uF-63V", "energy storage", "joules"]
        },
        {
          question: "How many for 20kW motor drive?",
          answer: "For a 20kW 48V motor drive, typically 2-3 capacitors in parallel are used. This provides 30000-45000uF total capacitance and 24-36A ripple current capability. Parallel connection also reduces overall ESR.",
          decisionGuide: "Use 2-3 parallel for high-power motor drives.",
          keywords: ["motor drive", "parallel", "sizing"]
        },
        {
          question: "What is the inrush current limitation?",
          answer: "Inrush current should be limited to 50A or less to prevent damage to terminals and internal connections. Use NTC thermistors or active inrush limiting circuits. Pre-charge circuits are recommended for large capacitor banks.",
          decisionGuide: "Implement inrush current limiting for large capacitance.",
          keywords: ["inrush current", "pre-charge", "NTC"]
        },
        {
          question: "What is the self-discharge time?",
          answer: "Self-discharge time constant is approximately 30 minutes. Voltage drops to 37% of initial value in about 30 minutes with no load. For safety, allow sufficient discharge time before servicing equipment.",
          decisionGuide: "Allow 30+ minutes discharge time before servicing.",
          keywords: ["self-discharge", "safety", "discharge time"]
        },
        {
          question: "Can it be used for EV charging stations?",
          answer: "Yes, the high capacitance and ripple current capability make it suitable for Level 2 EV charging stations. The 63V rating accommodates 48V battery systems commonly used in charging infrastructure.",
          decisionGuide: "Suitable for Level 2 EV charging applications.",
          keywords: ["EV charging", "Level 2", "infrastructure"]
        }
      ],
      faeReview: {
        author: "Senior FAE - High Power Systems",
        content: "The SM-15000uF-63V is a powerhouse capacitor for high-current applications. The 15000uF provides massive energy storage for motor drives and inverters. I've used these in 20kW+ motor drive systems with excellent performance. The 12A ripple current rating handles demanding loads.",
        highlight: "Massive capacitance for high-power applications"
      },
      alternativeParts: [
        {
          partNumber: "SM-22000uF-80V",
          brand: "Capxon",
          specifications: {
            capacitance: "22000uF",
            voltage: "80V"
          },
          comparison: "SM-15000uF-63V=><SM-22000uF-80V: Higher capacitance and voltage, suitable for higher power systems",
          reason: "More capacitance and voltage margin",
          useCase: "Higher power motor drives and inverters",
          link: "/capxon/products/snap-in-capacitors/sm-22000uf-80v.html"
        },
        {
          partNumber: "SF-10000uF-63V",
          brand: "Capxon",
          specifications: {
            capacitance: "10000uF",
            voltage: "63V"
          },
          comparison: "SM-15000uF-63V=><SF-10000uF-63V: Lower capacitance, smaller size, suitable for lower current applications",
          reason: "Smaller size for space-constrained designs",
          useCase: "Medium-power applications",
          link: "/capxon/products/snap-in-capacitors/sf-10000uf-63v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "SM-22000uF-80V",
          description: "Higher capacitance for more power",
          link: "/capxon/products/snap-in-capacitors/sm-22000uf-80v.html",
          category: "Snap-in Capacitors"
        },
        {
          partNumber: "SF-6800uF-80V",
          description: "Lower capacitance for auxiliary",
          link: "/capxon/products/snap-in-capacitors/sf-6800uf-80v.html",
          category: "Snap-in Capacitors"
        },
        {
          partNumber: "AF-1000uF-50V",
          description: "Automotive grade for control circuits",
          link: "/capxon/products/automotive-capacitors/af-1000uf-50v.html",
          category: "Automotive Capacitors"
        }
      ],
      slug: "sm-15000uf-63v"
    }
  ],
  'SMD Capacitors': [
    {
      partNumber: "VF-10uF-50V",
      name: "SMD Capacitor 10uF 50V",
      shortDescription: "Compact SMD aluminum electrolytic capacitor with 10uF and 50V rating for space-constrained applications.",
      descriptionParagraphs: [
        "The VF-10uF-50V is a compact SMD aluminum electrolytic capacitor designed for space-constrained applications. With 10uF capacitance and 50V rating, it provides filtering in a small surface-mount package.",
        "This capacitor features a low-profile design ideal for compact consumer electronics. The SMD package enables automated assembly and saves PCB space compared to radial capacitors.",
        "Rated for 2000 hours at 85°C, this capacitor is suitable for consumer electronics and portable devices."
      ],
      specifications: {
        "Capacitance": "10uF",
        "Voltage Rating": "50V",
        "Ripple Current": "0.15A",
        "Temperature Range": "-40°C to +85°C",
        "Lifetime": "2000 hours at 85°C",
        "Mounting": "SMD",
        "Dimensions": "6.3x5.8mm"
      },
      features: [
        "10uF capacitance in compact SMD package",
        "50V rating for various applications",
        "Low profile 5.8mm height",
        "Surface mount for automated assembly",
        "2000 hours lifetime at 85°C",
        "Space-saving design"
      ],
      applications: [
        "Consumer electronics",
        "Portable devices",
        "LED drivers",
        "Power adapters",
        "Compact power supplies"
      ],
      datasheet: "/datasheets/VF-10uF-50V.pdf",
      stock: "In Stock",
      moq: 500,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What is the footprint of VF-10uF-50V?",
          answer: "The VF-10uF-50V uses a 6.3mm diameter case with standard SMD footprint. Recommended PCB pad size is 6.0x6.0mm with appropriate solder mask clearance. The low 5.8mm profile fits in height-constrained designs.",
          decisionGuide: "Verify PCB footprint matches 6.3mm SMD package.",
          keywords: ["VF-10uF-50V", "footprint", "SMD package"]
        },
        {
          question: "Is reflow soldering compatible?",
          answer: "Yes, VF series is compatible with standard reflow soldering profiles. Maximum reflow temperature is 260°C for 10 seconds. Follow standard aluminum electrolytic capacitor reflow guidelines. Hand soldering is also possible with care.",
          decisionGuide: "Compatible with standard reflow processes.",
          keywords: ["reflow", "soldering", "assembly"]
        },
        {
          question: "What is the vibration resistance?",
          answer: "VF series withstands standard vibration tests for SMD components. The molded case and internal construction provide good mechanical stability. For high-vibration environments, consider additional mechanical support or conformal coating.",
          decisionGuide: "Suitable for standard vibration environments.",
          keywords: ["vibration", "mechanical", "reliability"]
        },
        {
          question: "Can it replace radial capacitors?",
          answer: "Yes, for space-constrained designs, VF SMD capacitors can replace radial types. Benefits include automated assembly, no lead forming, and lower profile. Ensure voltage and capacitance ratings meet requirements.",
          decisionGuide: "Ideal replacement for radial in compact designs.",
          keywords: ["replacement", "radial", "compact"]
        },
        {
          question: "What is the polarity marking?",
          answer: "Polarity is marked with a stripe on the negative terminal side. The negative terminal is also indicated by a beveled edge on the case. Always verify polarity before soldering as reverse connection will damage the capacitor.",
          decisionGuide: "Verify polarity marking before assembly.",
          keywords: ["polarity", "marking", "negative terminal"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Consumer Electronics",
        content: "The VF-10uF-50V is perfect for compact consumer electronics. The SMD package saves significant space compared to radial capacitors. I've used these in many portable device designs. The 50V rating provides good margin for various applications.",
        highlight: "Compact SMD capacitor for space-constrained designs"
      },
      alternativeParts: [
        {
          partNumber: "VF-22uF-50V",
          brand: "Capxon",
          specifications: {
            capacitance: "22uF",
            voltage: "50V"
          },
          comparison: "VF-10uF-50V=><VF-22uF-50V: Higher capacitance same voltage, larger package",
          reason: "More capacitance for better filtering",
          useCase: "Applications requiring more filtering capacitance",
          link: "/capxon/products/smd-capacitors/vf-22uf-50v.html"
        },
        {
          partNumber: "VM-10uF-50V",
          brand: "Capxon",
          specifications: {
            capacitance: "10uF",
            voltage: "50V"
          },
          comparison: "VF-10uF-50V=><VM-10uF-50V: Same capacitance/voltage, higher temperature 105°C",
          reason: "Higher temperature rating",
          useCase: "High-temperature applications",
          link: "/capxon/products/smd-capacitors/vm-10uf-50v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "VF-22uF-50V",
          description: "Higher capacitance same size",
          link: "/capxon/products/smd-capacitors/vf-22uf-50v.html",
          category: "SMD Capacitors"
        },
        {
          partNumber: "VF-47uF-25V",
          description: "Higher capacitance lower voltage",
          link: "/capxon/products/smd-capacitors/vf-47uf-25v.html",
          category: "SMD Capacitors"
        },
        {
          partNumber: "KF-100uF-50V",
          description: "Radial for higher capacitance",
          link: "/capxon/products/radial-lead-capacitors/kf-100uf-50v.html",
          category: "Radial Lead Capacitors"
        }
      ],
      slug: "vf-10uf-50v"
    },
    {
      partNumber: "VM-22uF-50V",
      name: "High-Temperature SMD Capacitor 22uF 50V",
      shortDescription: "High-temperature SMD aluminum electrolytic capacitor with 22uF and 50V rating for demanding applications.",
      descriptionParagraphs: [
        "The VM-22uF-50V is a high-temperature SMD aluminum electrolytic capacitor designed for demanding applications. With 22uF capacitance and 50V rating, it provides reliable filtering with extended temperature capability.",
        "This capacitor features 105°C temperature rating for harsh environments. The SMD package enables automated assembly while providing better thermal performance than standard series.",
        "Rated for 3000 hours at 105°C, this capacitor is ideal for automotive and industrial applications requiring high reliability."
      ],
      specifications: {
        "Capacitance": "22uF",
        "Voltage Rating": "50V",
        "Ripple Current": "0.25A",
        "Temperature Range": "-40°C to +105°C",
        "Lifetime": "3000 hours at 105°C",
        "Mounting": "SMD",
        "Dimensions": "8x10mm"
      },
      features: [
        "22uF capacitance for filtering",
        "50V rating for various applications",
        "105°C high temperature rating",
        "3000 hours lifetime at 105°C",
        "SMD for automated assembly",
        "Enhanced reliability"
      ],
      applications: [
        "Automotive electronics",
        "Industrial controls",
        "LED lighting",
        "Power supplies",
        "High-temperature environments"
      ],
      datasheet: "/datasheets/VM-22uF-50V.pdf",
      stock: "In Stock",
      moq: 300,
      leadTime: "4-6 weeks",
      faqs: [
        {
          question: "What makes VM series different from VF?",
          answer: "VM series offers higher temperature rating (105°C vs 85°C) and longer lifetime (3000 vs 2000 hours). The VM series uses enhanced materials and construction for better thermal performance. Both are SMD packages but VM is for more demanding applications.",
          decisionGuide: "Use VM for high-temperature, VF for cost-sensitive.",
          keywords: ["VM series", "VF series", "temperature rating"]
        },
        {
          question: "Is VM-22uF-50V automotive qualified?",
          answer: "VM series meets many automotive requirements but check specific AEC-Q200 qualification status for your application. The 105°C rating and enhanced reliability make it suitable for automotive under-hood applications.",
          decisionGuide: "Verify AEC-Q200 status for specific automotive applications.",
          keywords: ["automotive", "AEC-Q200", "under-hood"]
        },
        {
          question: "What is the ESR at high temperature?",
          answer: "ESR increases at higher temperatures but VM series maintains lower ESR than standard series across temperature range. At 105°C, ESR is approximately 2x the 20°C value. This should be considered for ripple current calculations.",
          decisionGuide: "Account for ESR increase at high temperatures.",
          keywords: ["ESR", "high temperature", "ripple current"]
        },
        {
          question: "Can it be used for LED drivers?",
          answer: "Yes, VM-22uF-50V is excellent for LED driver applications. The 105°C rating handles heat from LEDs and driver circuits. The 22uF provides adequate filtering for typical LED driver outputs.",
          decisionGuide: "Ideal for LED driver output filtering.",
          keywords: ["LED driver", "lighting", "filtering"]
        },
        {
          question: "What is the shelf life?",
          answer: "Shelf life is 3 years when stored at temperatures below 35°C and humidity below 70%. After long storage, capacitors may require reformation by applying rated voltage through a current-limiting resistor before use.",
          decisionGuide: "Reform capacitors after extended storage.",
          keywords: ["shelf life", "storage", "reformation"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Automotive Applications",
        content: "The VM-22uF-50V is my choice for automotive and high-temperature applications. The 105°C rating provides good margin for under-hood use. I've used these in LED lighting and automotive control modules with excellent reliability. The SMD package is convenient for automated assembly.",
        highlight: "High-temperature SMD for automotive applications"
      },
      alternativeParts: [
        {
          partNumber: "VM-47uF-35V",
          brand: "Capxon",
          specifications: {
            capacitance: "47uF",
            voltage: "35V"
          },
          comparison: "VM-22uF-50V=><VM-47uF-35V: Higher capacitance, lower voltage, same temperature rating",
          reason: "More capacitance for lower voltage applications",
          useCase: "12V and 24V applications",
          link: "/capxon/products/smd-capacitors/vm-47uf-35v.html"
        },
        {
          partNumber: "VF-22uF-50V",
          brand: "Capxon",
          specifications: {
            capacitance: "22uF",
            voltage: "50V"
          },
          comparison: "VM-22uF-50V=><VF-22uF-50V: Same capacitance/voltage, standard 85°C rating",
          reason: "Lower cost for standard temperature applications",
          useCase: "Consumer electronics",
          link: "/capxon/products/smd-capacitors/vf-22uf-50v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "VM-47uF-35V",
          description: "Higher capacitance lower voltage",
          link: "/capxon/products/smd-capacitors/vm-47uf-35v.html",
          category: "SMD Capacitors"
        },
        {
          partNumber: "VF-22uF-50V",
          description: "Standard temperature version",
          link: "/capxon/products/smd-capacitors/vf-22uf-50v.html",
          category: "SMD Capacitors"
        },
        {
          partNumber: "AF-100uF-50V",
          description: "Automotive radial for main filtering",
          link: "/capxon/products/automotive-capacitors/af-100uf-50v.html",
          category: "Automotive Capacitors"
        }
      ],
      slug: "vm-22uf-50v"
    }
  ],
  'Automotive Capacitors': [
    {
      partNumber: "AF-330uF-100V",
      name: "Automotive Capacitor 330uF 100V AEC-Q200",
      shortDescription: "AEC-Q200 qualified automotive capacitor with 330uF and 100V rating for vehicle electronics.",
      descriptionParagraphs: [
        "The AF-330uF-100V is an AEC-Q200 qualified automotive aluminum electrolytic capacitor designed for vehicle electronics. With 330uF capacitance and 100V rating, it meets stringent automotive reliability requirements.",
        "This capacitor features enhanced construction and materials for automotive environments. The AEC-Q200 qualification ensures reliability under temperature cycling, vibration, and humidity.",
        "Rated for 5000 hours at 125°C, this capacitor is ideal for under-hood and safety-critical automotive applications."
      ],
      specifications: {
        "Capacitance": "330uF",
        "Voltage Rating": "100V",
        "Ripple Current": "1.5A",
        "Temperature Range": "-40°C to +125°C",
        "Lifetime": "5000 hours at 125°C",
        "Qualification": "AEC-Q200",
        "Dimensions": "16x25mm"
      },
      features: [
        "AEC-Q200 qualified for automotive",
        "330uF capacitance for filtering",
        "100V rating for 48V systems",
        "125°C high temperature rating",
        "5000 hours lifetime at 125°C",
        "Enhanced vibration resistance"
      ],
      applications: [
        "48V mild hybrid systems",
        "LED headlight drivers",
        "EPS motor drives",
        "ADAS systems",
        "Body control modules"
      ],
      datasheet: "/datasheets/AF-330uF-100V.pdf",
      stock: "In Stock",
      moq: 100,
      leadTime: "6-8 weeks",
      faqs: [
        {
          question: "What is AEC-Q200 qualification?",
          answer: "AEC-Q200 is the automotive standard for passive components. It includes rigorous testing for temperature cycling (-40°C to +125°C), vibration, humidity, and mechanical stress. AF series meets these requirements for automotive reliability.",
          decisionGuide: "Required for automotive applications.",
          keywords: ["AEC-Q200", "automotive qualification", "reliability"]
        },
        {
          question: "Is AF-330uF-100V suitable for 48V mild hybrid?",
          answer: "Yes, the 100V rating provides excellent margin for 48V mild hybrid systems. The AEC-Q200 qualification and 125°C rating handle the demanding automotive environment. The 330uF provides adequate filtering for DC-DC converters.",
          decisionGuide: "Ideal for 48V mild hybrid applications.",
          keywords: ["48V mild hybrid", "DC-DC converter", "automotive"]
        },
        {
          question: "What is the vibration resistance level?",
          answer: "AF series withstands automotive vibration levels per AEC-Q200. Testing includes random vibration 5-2000Hz, 20g RMS, and mechanical shock 50g half-sine. This ensures reliability in vehicle environments.",
          decisionGuide: "Meets automotive vibration requirements.",
          keywords: ["vibration", "AEC-Q200", "mechanical shock"]
        },
        {
          question: "What documentation is available?",
          answer: "Full AEC-Q200 qualification reports, PPAP documentation, and material declarations are available. Contact our sales team for automotive documentation packages required for your quality system.",
          decisionGuide: "Request documentation package from sales.",
          keywords: ["documentation", "PPAP", "qualification report"]
        },
        {
          question: "What is the failure rate?",
          answer: "AF series has demonstrated FIT (Failures In Time) rates below 50 per billion hours in qualification testing. This high reliability is achieved through enhanced materials, process control, and 100% screening.",
          decisionGuide: "High reliability for safety-critical applications.",
          keywords: ["FIT rate", "failure rate", "reliability"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Automotive Division",
        content: "The AF-330uF-100V is excellent for 48V automotive systems. The AEC-Q200 qualification gives confidence for safety-critical applications. I've used these in mild hybrid and LED lighting projects with zero field failures. The 125°C rating handles under-hood temperatures.",
        highlight: "AEC-Q200 qualified for demanding automotive applications"
      },
      alternativeParts: [
        {
          partNumber: "AF-470uF-100V",
          brand: "Capxon",
          specifications: {
            capacitance: "470uF",
            voltage: "100V"
          },
          comparison: "AF-330uF-100V=><AF-470uF-100V: Higher capacitance same voltage, AEC-Q200 qualified",
          reason: "More capacitance for better filtering",
          useCase: "Higher current 48V applications",
          link: "/capxon/products/automotive-capacitors/af-470uf-100v.html"
        },
        {
          partNumber: "AH-330uF-100V",
          brand: "Capxon",
          specifications: {
            capacitance: "330uF",
            voltage: "100V"
          },
          comparison: "AF-330uF-100V=><AH-330uF-100V: Same capacitance/voltage, higher temperature 150°C",
          reason: "Higher temperature for extreme environments",
          useCase: "Very high-temperature automotive applications",
          link: "/capxon/products/automotive-capacitors/ah-330uf-100v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "AF-470uF-100V",
          description: "Higher capacitance same voltage",
          link: "/capxon/products/automotive-capacitors/af-470uf-100v.html",
          category: "Automotive Capacitors"
        },
        {
          partNumber: "AF-220uF-100V",
          description: "Lower capacitance for decoupling",
          link: "/capxon/products/automotive-capacitors/af-220uf-100v.html",
          category: "Automotive Capacitors"
        },
        {
          partNumber: "SF-4700uF-100V",
          description: "Snap-in for high-power automotive",
          link: "/capxon/products/snap-in-capacitors/sf-4700uf-100v.html",
          category: "Snap-in Capacitors"
        }
      ],
      slug: "af-330uf-100v"
    },
    {
      partNumber: "AH-220uF-100V",
      name: "High-Temperature Automotive Capacitor 220uF 100V",
      shortDescription: "150°C rated automotive capacitor with 220uF and 100V for extreme temperature applications.",
      descriptionParagraphs: [
        "The AH-220uF-100V is a high-temperature automotive aluminum electrolytic capacitor rated for 150°C operation. With 220uF capacitance and 100V rating, it handles extreme automotive environments.",
        "This capacitor features advanced materials and construction for 150°C operation. The enhanced thermal design provides reliable performance in engine compartment and transmission applications.",
        "Rated for 3000 hours at 150°C, this capacitor is ideal for the most demanding automotive applications."
      ],
      specifications: {
        "Capacitance": "220uF",
        "Voltage Rating": "100V",
        "Ripple Current": "1.2A",
        "Temperature Range": "-40°C to +150°C",
        "Lifetime": "3000 hours at 150°C",
        "Qualification": "AEC-Q200",
        "Dimensions": "16x25mm"
      },
      features: [
        "150°C extreme temperature rating",
        "AEC-Q200 qualified",
        "220uF for filtering applications",
        "100V for 48V systems",
        "3000 hours at 150°C",
        "Engine compartment rated"
      ],
      applications: [
        "Engine control modules",
        "Transmission control",
        "Turbocharger control",
        "Exhaust systems",
        "High-temperature sensors"
      ],
      datasheet: "/datasheets/AH-220uF-100V.pdf",
      stock: "In Stock",
      moq: 100,
      leadTime: "6-8 weeks",
      faqs: [
        {
          question: "What applications need 150°C rating?",
          answer: "150°C rated capacitors are needed for engine compartments, near exhaust systems, transmission control, and turbocharger applications. Standard 125°C capacitors may not survive continuous operation in these extreme environments.",
          decisionGuide: "Use for engine compartment and exhaust applications.",
          keywords: ["150°C", "engine compartment", "extreme temperature"]
        },
        {
          question: "How does 150°C affect lifetime?",
          answer: "At 150°C, lifetime is 3000 hours. However, lifetime doubles for every 10°C decrease. At 125°C, lifetime is approximately 12000 hours. At 105°C, lifetime exceeds 50000 hours. Proper derating significantly extends service life.",
          decisionGuide: "Derate temperature for extended lifetime.",
          keywords: ["lifetime", "derating", "150°C"]
        },
        {
          question: "Is special mounting required?",
          answer: "Standard radial mounting is used. However, ensure adequate clearance from heat sources. Use thermal management techniques like heat shields or isolation when possible. Avoid mounting directly on hot surfaces.",
          decisionGuide: "Use thermal management for best reliability.",
          keywords: ["mounting", "thermal management", "heat shield"]
        },
        {
          question: "What is the capacitance at 150°C?",
          answer: "Capacitance decreases at high temperatures. At 150°C, capacitance is typically 70-80% of the 20°C value. This should be considered in circuit design. The datasheet provides detailed temperature characteristics.",
          decisionGuide: "Account for capacitance reduction at high temperature.",
          keywords: ["capacitance", "temperature coefficient", "150°C"]
        },
        {
          question: "Are qualification reports available?",
          answer: "Full AEC-Q200 qualification reports including high-temperature testing are available. The reports document performance at 150°C including capacitance, ESR, leakage current, and lifetime testing.",
          decisionGuide: "Request qualification reports for design verification.",
          keywords: ["qualification report", "AEC-Q200", "documentation"]
        }
      ],
      faeReview: {
        author: "Senior FAE - Powertrain Applications",
        content: "The AH-220uF-100V is essential for powertrain applications. The 150°C rating handles the extreme temperatures near engines and exhaust systems. I've used these in transmission control and turbocharger projects. The reliability at high temperature is outstanding.",
        highlight: "150°C rated for extreme automotive environments"
      },
      alternativeParts: [
        {
          partNumber: "AH-330uF-100V",
          brand: "Capxon",
          specifications: {
            capacitance: "330uF",
            voltage: "100V"
          },
          comparison: "AH-220uF-100V=><AH-330uF-100V: Higher capacitance same voltage, 150°C rated",
          reason: "More capacitance for better filtering",
          useCase: "Higher current extreme temperature applications",
          link: "/capxon/products/automotive-capacitors/ah-330uf-100v.html"
        },
        {
          partNumber: "AF-220uF-100V",
          brand: "Capxon",
          specifications: {
            capacitance: "220uF",
            voltage: "100V"
          },
          comparison: "AH-220uF-100V=><AF-220uF-100V: Same capacitance/voltage, 125°C rating",
          reason: "Lower cost for less extreme environments",
          useCase: "General automotive applications",
          link: "/capxon/products/automotive-capacitors/af-220uf-100v.html"
        }
      ],
      companionParts: [
        {
          partNumber: "AH-330uF-100V",
          description: "Higher capacitance same rating",
          link: "/capxon/products/automotive-capacitors/ah-330uf-100v.html",
          category: "Automotive Capacitors"
        },
        {
          partNumber: "AF-220uF-100V",
          description: "125°C version for comparison",
          link: "/capxon/products/automotive-capacitors/af-220uf-100v.html",
          category: "Automotive Capacitors"
        },
        {
          partNumber: "SF-6800uF-80V",
          description: "Snap-in for high-power automotive",
          link: "/capxon/products/snap-in-capacitors/sf-6800uf-80v.html",
          category: "Snap-in Capacitors"
        }
      ],
      slug: "ah-220uf-100v"
    }
  ]
};

// Add products to each category
let addedCount = 0;

productsData.categories.forEach((category) => {
  const categoryKey = category.name;
  console.log(`\n📂 Processing category: ${category.name}`);
  console.log(`   Current products: ${category.products.length}`);
  
  if (additionalProducts[categoryKey]) {
    const currentCount = category.products.length;
    const neededCount = 6 - currentCount;
    
    if (neededCount > 0) {
      const productsToAdd = additionalProducts[categoryKey].slice(0, neededCount);
      category.products.push(...productsToAdd);
      addedCount += productsToAdd.length;
      console.log(`   ✓ Added ${productsToAdd.length} products`);
      console.log(`   Total products: ${category.products.length}`);
    } else {
      console.log(`   ✓ Already has ${currentCount} products (no addition needed)`);
    }
  }
});

// Save the updated file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Complete! Added ${addedCount} products total.`);
console.log('\n📊 Final product counts per category:');
productsData.categories.forEach((category) => {
  console.log(`   ${category.name}: ${category.products.length} products`);
});
