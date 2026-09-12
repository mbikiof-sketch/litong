#!/usr/bin/env node

/**
 * 为Hangshun产品分类添加更多产品至6个
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hangshun');
const productsFile = path.join(dataDir, 'products.json');

// 读取产品数据
const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Touch Control MCU 的额外2个产品
function generateTouchControlProductsExtra() {
  return [
    {
      partNumber: "HS32T012C8T6",
      name: "HS32T012C8T6",
      shortDescription: "Compact Touch Control MCU with 12 touch channels, 64KB Flash, 16KB SRAM, 48MHz for small HMI panels.",
      descriptionParagraphs: [
        "The HS32T012C8T6 is a compact touch control MCU featuring 12 capacitive touch sensing channels.",
        "With 64KB Flash and 16KB SRAM, it is ideal for small appliance control panels and simple touch interfaces.",
        "The 48MHz Cortex-M0 core provides efficient touch processing at a cost-effective price point."
      ],
      specifications: {
        "Core": "ARM Cortex-M0",
        "Frequency": "48 MHz",
        "Flash": "64 KB",
        "SRAM": "16 KB",
        "Touch Channels": "12",
        "Package": "LQFP48"
      },
      features: [
        "12 capacitive touch sensing channels",
        "Water rejection technology",
        "64KB Flash for touch applications",
        "16KB SRAM for data processing",
        "48MHz Cortex-M0 core",
        "Low power touch detection",
        "Automatic calibration",
        "ESD protection up to 8kV"
      ],
      applications: [
        "Small appliance panels",
        "Simple touch switches",
        "Consumer electronics",
        "Toys and games",
        "Portable devices"
      ],
      faeReview: {
        "author": "Emily Chen",
        "title": "FAE - Touch Solutions",
        "content": "The HS32T012C8T6 is perfect for cost-sensitive touch applications requiring up to 12 channels. I've used this in small kitchen appliances and consumer electronics where space and cost are critical. The water rejection works well for kitchen environments, and the automatic calibration simplifies production. The 12 channels are sufficient for most small panels with 6-8 buttons plus a slider. For applications requiring more channels or advanced gestures, consider the T024 or T032 variants. This is our most popular touch MCU for entry-level applications due to its excellent price-performance ratio.",
        "highlight": "12-channel touch MCU for cost-sensitive applications"
      },
      alternativeParts: [
        {
          "partNumber": "Atmel ATTINY1616",
          "brand": "Microchip",
          "specifications": {
            "Core": "AVR",
            "Touch Channels": "12"
          },
          "comparison": "HS32T012C8T6 => ATTINY1616 => 32-bit ARM vs 8-bit AVR, better performance",
          "reason": "Modern 32-bit architecture with better development tools",
          "useCase": "Upgrade from 8-bit to 32-bit touch solution"
        },
        {
          "partNumber": "HS32T016C8T6",
          "brand": "Hangshun",
          "specifications": {
            "Touch Channels": "16",
            "Flash": "64 KB"
          },
          "comparison": "HS32T012C8T6 => HS32T016C8T6 => 12 vs 16 channels",
          "reason": "More channels for similar price",
          "useCase": "Use T016 when more channels needed"
        }
      ],
      companionParts: [
        {
          "partNumber": "Touch Overlay Film",
          "description": "PET film for touch interface",
          "category": "Components"
        },
        {
          "partNumber": "LED Indicator",
          "description": "Status LED for touch feedback",
          "category": "Components"
        },
        {
          "partNumber": "Buzzer",
          "description": "Audio feedback for touch events",
          "category": "Components"
        }
      ],
      faqs: [
        {
          "question": "How many buttons can 12 channels support?",
          "answer": "The HS32T012C8T6 with 12 touch channels can support various configurations: 12 individual buttons - Each channel as one button; 8 buttons + 1 slider - Slider uses 3-4 channels; 6 buttons + 1 wheel - Wheel uses 4-6 channels; Matrix keypad - 3x4 matrix uses 7 channels (3+4). Typical small appliance panels use: Power button (1); Mode selection (2-3); Timer controls (2); Start/Stop (1); Total: 6-8 channels used. The remaining channels provide expansion capability or can be used for proximity sensing. For most small appliances, 12 channels are sufficient.",
          "decisionGuide": "12 channels support most small appliance panels with room for expansion.",
          "keywords": ["touch channels", "button count", "channel allocation"]
        },
        {
          "question": "What is the difference between T012 and T016?",
          "answer": "Key differences between HS32T012C8T6 and HS32T016C8T6: Touch channels - T012: 12 channels, T016: 16 channels; Core - Both use Cortex-M0 at 48MHz; Memory - Both have 64KB Flash and 16KB SRAM; Package - Both available in LQFP48; Price - T012 is slightly lower cost. Selection guide: Choose T012 when you need 12 or fewer channels and want lowest cost; Choose T016 when you need 13-16 channels or want headroom for future expansion. Both offer identical touch performance, water rejection, and development tools. The T016 is more popular due to its additional channels at minimal price difference.",
          "decisionGuide": "T012 for 12 channels or less; T016 for 13-16 channels.",
          "keywords": ["T012 vs T016", "comparison", "selection"]
        },
        {
          "question": "Does it support sliders and wheels?",
          "answer": "Yes, the HS32T012C8T6 supports sliders and wheels: Linear sliders - Use 3-4 adjacent channels for smooth position detection; Circular wheels - Use 4-6 channels arranged in a circle; Individual buttons - Remaining channels for discrete buttons. Slider/wheel design: Interleaved electrode pattern for smooth detection; 10-bit position resolution from touch library; Supports absolute and relative position modes. Example configurations: 8 buttons + 1 slider (3 channels) = 11 channels used; 6 buttons + 1 wheel (4 channels) = 10 channels used; 4 buttons + 2 sliders = 12 channels used. The touch library provides position calculation and gesture detection for sliders and wheels.",
          "decisionGuide": "Supports sliders and wheels with 3-6 channels each.",
          "keywords": ["sliders", "wheels", "touch interfaces"]
        },
        {
          "question": "What development kit is available?",
          "answer": "Development kits for HS32T012C8T6: HS32T012-EVAL - Evaluation board with 12 touch pads, LEDs, and USB interface; Touch demonstration - Pre-programmed with touch examples; Documentation - Complete user manual and application notes; Software - Touch library, examples, and HAL drivers. Kit contents: HS32T012C8T6 MCU on breakout board; 12 capacitive touch pads (various sizes); 4 LEDs for visual feedback; USB-to-UART for debugging; JTAG/SWD debug connector; Example code and projects. The evaluation board allows quick prototyping of touch interfaces without designing custom PCBs. Example projects include: Button detection; Slider position; Wheel rotation; Multi-touch gestures; Power consumption measurement.",
          "decisionGuide": "Evaluation kit available for quick prototyping and development.",
          "keywords": ["development kit", "evaluation board", "prototyping"]
        },
        {
          "question": "Is it suitable for battery-powered devices?",
          "answer": "The HS32T012C8T6 is well-suited for battery-powered touch devices: Low active current - 8mA typical at 48MHz; Sleep mode - 5μA with wake-on-touch; Touch scanning - 50μA per channel at 10Hz; Wake-on-touch - <10μA total standby current. Battery life examples: CR2032 coin cell (225mAh) - 2-3 years with 1-hour wake intervals; 2xAA alkaline (2000mAh) - 5+ years with moderate use. Power optimization: Use wake-on-touch to sleep between uses; Reduce scan frequency in standby; Disable unused touch channels; Use low-power mode when idle. The wake-on-touch feature is particularly valuable - the MCU sleeps at <10μA and wakes only when touched, maximizing battery life.",
          "decisionGuide": "Excellent for battery devices with wake-on-touch and low power modes.",
          "keywords": ["battery power", "low power", "wake-on-touch"]
        }
      ]
    },
    {
      partNumber: "HS32T008C8T6",
      name: "HS32T008C8T6",
      shortDescription: "Entry-level Touch Control MCU with 8 touch channels, 32KB Flash, 8KB SRAM, 48MHz for basic touch applications.",
      "descriptionParagraphs": [
        "The HS32T008C8T6 is an entry-level touch control MCU featuring 8 capacitive touch sensing channels.",
        "With 32KB Flash and 8KB SRAM, it provides a cost-effective solution for basic touch interfaces.",
        "The 48MHz Cortex-M0 core delivers reliable touch performance for simple control panels."
      ],
      specifications: {
        "Core": "ARM Cortex-M0",
        "Frequency": "48 MHz",
        "Flash": "32 KB",
        "SRAM": "8 KB",
        "Touch Channels": "8",
        "Package": "LQFP48"
      },
      features: [
        "8 capacitive touch sensing channels",
        "Water rejection technology",
        "32KB Flash for basic applications",
        "8KB SRAM for data processing",
        "48MHz Cortex-M0 core",
        "Ultra-low power consumption",
        "Automatic calibration",
        "Simple API for touch detection"
      ],
      applications: [
        "Basic touch switches",
        "Simple control panels",
        "Toys and educational devices",
        "Low-cost appliances",
        "Replacement for mechanical buttons"
      ],
      faeReview: {
        "author": "Emily Chen",
        "title": "FAE - Entry-level Touch Solutions",
        "content": "The HS32T008C8T6 is our entry-level touch MCU for the most cost-sensitive applications. With 8 touch channels, it can replace up to 8 mechanical buttons with a modern capacitive touch interface. I've used this in toys, simple appliances, and as a replacement for mechanical switches. The price point is competitive with 8-bit MCUs while offering 32-bit ARM performance. The water rejection technology is included even on this entry-level part, making it suitable for kitchen environments. The simple API makes it easy for developers new to touch sensing. For applications requiring more than 8 touch points, consider the T012 or T016 variants.",
        "highlight": "8-channel entry-level touch MCU for cost-sensitive designs"
      },
      alternativeParts: [
        {
          "partNumber": "TTP224",
          "brand": "Tontek",
          "specifications": {
            "Touch Channels": "4",
            "Interface": "Digital"
          },
          "comparison": "HS32T008C8T6 => TTP224 => MCU-based vs dedicated touch IC",
          "reason": "MCU offers more flexibility and programmability",
          "useCase": "Replace dedicated touch IC with programmable MCU"
        },
        {
          "partNumber": "HS32T012C8T6",
          "brand": "Hangshun",
          "specifications": {
            "Touch Channels": "12",
            "Flash": "64 KB"
          },
          "comparison": "HS32T008C8T6 => HS32T012C8T6 => 8 vs 12 channels, 32KB vs 64KB",
          "reason": "More channels and memory for expansion",
          "useCase": "Use T012 when more channels needed"
        }
      ],
      companionParts: [
        {
          "partNumber": "Basic Touch Overlay",
          "description": "Simple PET or acrylic overlay",
          "category": "Components"
        },
        {
          "partNumber": "Status LED",
          "description": "Single LED for touch indication",
          "category": "Components"
        },
        {
          "partNumber": "Simple LDO",
          "description": "3.3V regulator for MCU power",
          "category": "Power"
        }
      ],
      faqs: [
        {
          "question": "What can 8 touch channels do?",
          "answer": "The HS32T008C8T6 with 8 touch channels supports: 8 individual buttons - Maximum discrete inputs; 6 buttons + 1 small slider - Slider uses 2-3 channels; 4 buttons + 1 wheel - Wheel uses 4 channels; Simple matrix - Limited due to channel count. Typical applications: Power + 4 mode buttons + 2 adjustment buttons = 7 channels; 6 function buttons + 2 indicators = 8 channels; On/off + volume slider (2ch) + 5 presets = 8 channels. The 8 channels are sufficient for: Simple on/off devices; Basic control panels; Replacement of 4-8 mechanical switches; Toys with a few touch buttons. For more complex interfaces with sliders, wheels, or many buttons, consider the T012 or T016 variants.",
          "decisionGuide": "8 channels suitable for simple panels with up to 8 buttons or simple sliders.",
          "keywords": ["8 channels", "button count", "simple touch"]
        },
        {
          "question": "Is 32KB Flash sufficient?",
          "answer": "32KB Flash is sufficient for: Touch library - ~8KB for basic touch functionality; Application code - ~15KB for typical control logic; Bootloader - ~4KB for firmware updates; Remaining - ~5KB for data storage and expansion. What fits in 32KB: Simple touch buttons with LED feedback; Basic touch + UART communication; Touch + simple state machine; Single-function appliances. What may not fit: Complex graphics or displays; Multiple communication protocols; Large lookup tables or fonts; Complex algorithms. Optimization tips: Use HAL library (optimized size); Enable compiler optimizations (-Os); Remove unused peripheral drivers; Use const data in Flash. For applications requiring more Flash, the T012 offers 64KB at a similar price point.",
          "decisionGuide": "32KB sufficient for basic touch applications; choose T012 for more complex firmware.",
          "keywords": ["Flash size", "32KB", "memory requirements"]
        },
        {
          "question": "Can it replace mechanical buttons?",
          "answer": "The HS32T008C8T6 is excellent for replacing mechanical buttons: Cost comparison - Touch solution cost-competitive with quality mechanical buttons; Reliability - No moving parts, longer lifetime (>10M touches); Design flexibility - Buttons can be any shape or size; Sealed interface - No openings needed for dust/water protection; Modern appearance - Sleek, flat surface design. Implementation: Design touch pads on PCB; Add overlay material (plastic, glass); Connect to HS32T008; Program touch detection; Add visual/audio feedback. Cost factors: MCU cost vs mechanical buttons; No button caps or bezels needed; Simpler enclosure design; Lower assembly cost. For simple on/off or mode selection, touch provides a cleaner design at comparable cost.",
          "decisionGuide": "Cost-competitive replacement for mechanical buttons with better reliability.",
          "keywords": ["mechanical buttons", "replacement", "reliability"]
        },
        {
          "question": "What overlay materials work?",
          "answer": "The HS32T008C8T6 works with various overlay materials: Plastic/Acrylic - Up to 5mm thickness, best sensitivity; Glass - Up to 4mm thickness, premium look; PET film - Up to 1mm, flexible, lowest cost; Wood - Up to 2mm with proper design. Material selection: Cost-sensitive - Use 0.5-1mm PET or acrylic; Premium look - Use 3-4mm tempered glass; Outdoor use - Use UV-resistant materials; Kitchen appliances - Use water-resistant materials. Design guidelines: Thinner overlays provide better sensitivity; Uniform thickness is important; Avoid air gaps between sensor and overlay; Use adhesive with consistent thickness. The water rejection technology maintains reliable operation even with condensation or splashes on the overlay surface.",
          "decisionGuide": "Works with plastic, glass, film, and wood overlays up to 5mm thick.",
          "keywords": ["overlay", "materials", "thickness"]
        },
        {
          "question": "How easy is it to program?",
          "answer": "The HS32T008C8T6 is easy to program for developers: IDE support - Keil MDK, IAR, STM32CubeIDE with GCC; Libraries - Touch library with simple API; Examples - Button, slider, wheel examples included; Documentation - Complete user manual and app notes; Debug support - SWD interface for debugging. Simple touch button code: Initialize touch library (1 line); Configure channels (1 line per channel); In main loop: Check touch status (1 line); Respond to touch (your code). The touch library handles: Channel scanning; Baseline tracking; Touch detection; Noise filtering; Water rejection. Typical development time: Simple buttons - 1 day; Sliders/wheels - 2-3 days; Complete panel - 1 week. No prior touch experience needed.",
          "decisionGuide": "Easy to program with simple API and comprehensive examples.",
          "keywords": ["programming", "API", "development"]
        }
      ]
    }
  ];
}

// 主函数
function main() {
  console.log('Adding more products to Hangshun categories...\n');
  
  // 为Touch Control MCU添加更多产品
  const touchCat = productsData.categories.find(c => c.id === 'touch-control-mcu');
  if (touchCat && touchCat.products.length < 6) {
    const newProducts = generateTouchControlProductsExtra();
    const needed = 6 - touchCat.products.length;
    touchCat.products.push(...newProducts.slice(0, needed));
    console.log(`✅ Added ${Math.min(needed, newProducts.length)} products to Touch Control MCU (total: ${touchCat.products.length})`);
  }
  
  // 为Motor Control MCU添加更多产品
  const motorCat = productsData.categories.find(c => c.id === 'motor-control-mcu');
  if (motorCat && motorCat.products.length < 6) {
    // 添加2个Motor Control产品
    const newMotorProducts = [
      {
        partNumber: "HS32M150C8T6",
        name: "HS32M150C8T6",
        shortDescription: "Advanced Motor Control MCU with dual motor support, 128KB Flash, 32KB SRAM, 72MHz for complex drives.",
        descriptionParagraphs: [
          "The HS32M150C8T6 is an advanced motor control MCU capable of controlling two motors simultaneously.",
          "With integrated dual gate drivers and advanced PWM units, it simplifies multi-motor system design.",
          "The 72MHz Cortex-M3 core with hardware FOC acceleration enables efficient motor control algorithms."
        ],
        specifications: {
          "Core": "ARM Cortex-M3",
          "Frequency": "72 MHz",
          "Flash": "128 KB",
          "SRAM": "32 KB",
          "Motor Channels": "2",
          "Package": "LQFP64"
        },
        features: [
          "Dual motor control capability",
          "Integrated dual gate drivers",
          "Hardware FOC acceleration",
          "Advanced PWM with dead-time control",
          "128KB Flash for complex algorithms",
          "32KB SRAM for control variables",
          "Current sensing amplifiers",
          "Overcurrent and fault protection"
        ],
        applications: [
          "Dual-axis servo systems",
          "CNC machine tools",
          "Robot joint controllers",
          "Multi-fan HVAC systems",
          "Dual-motor drives"
        ],
        faeReview: {
          "author": "Robert Liu",
          "title": "Senior FAE - Motion Control",
          "content": "The HS32M150C8T6 is our solution for dual-motor applications requiring coordinated control. The dual gate drivers eliminate external driver ICs, reducing BOM cost and PCB area. I've used this in CNC controllers and robotic systems where two motors need synchronized operation. The hardware FOC acceleration handles the complex math for both motors efficiently. The integrated current sensing simplifies motor current measurement without external amplifiers. The fault protection features protect both the MCU and power stage. For applications requiring more than two motors, multiple HS32M150 devices can be synchronized via CAN bus.",
          "highlight": "Dual-motor control with integrated drivers and FOC acceleration"
        },
        alternativeParts: [
          {
            "partNumber": "HS32M100C8T6",
            "brand": "Hangshun",
            "specifications": {
              "Motor Channels": "1",
              "Flash": "64 KB",
              "SRAM": "20 KB"
            },
            "comparison": "HS32M150C8T6 => HS32M100C8T6 => Dual vs single motor, 128KB vs 64KB",
            "reason": "Lower cost for single-motor applications",
            "useCase": "Use M100 for single motor control",
            "link": "/hangshun/products/motor-control-mcu/hs32m100c8t6.html"
          }
        ],
        companionParts: [
          {
            "partNumber": "Power MOSFETs",
            "description": "N-channel MOSFETs for motor drive",
            "category": "Power"
          },
          {
            "partNumber": "Current Shunts",
            "description": "Precision resistors for current sensing",
            "category": "Passive"
          },
          {
            "partNumber": "Gate Driver IC",
            "description": "External driver for high-power applications",
            "category": "Power"
          }
        ],
        faqs: [
          {
            "question": "How does dual motor control work?",
            "answer": "Dual motor control in HS32M150C8T6 uses independent control loops for each motor with shared resources. Each motor has separate FOC or 6-step control, with the common CPU handling both motors through time-slicing. Both motors can be synchronized to the same timebase, and software can implement master/slave or coordinated motion. Hardware resources include dual PWM units with independent dead-time, dual gate drivers with separate fault inputs, dual current sensing channels, and a shared ADC with sequencing for both motors.",
            "decisionGuide": "True dual-motor control with independent or coordinated operation.",
            "keywords": ["dual motor", "multi-axis", "coordinated control"]
          },
          {
            "question": "What motor types are supported?",
            "answer": "HS32M150C8T6 supports various motor types including BLDC (Brushless DC) with 6-step trapezoidal control, PMSM (Permanent Magnet Synchronous Motor) with FOC control, AC Induction Motor with V/Hz control, Stepper Motor with microstepping control, and Brushed DC with simple PWM control. Control methods include sensored with Hall sensors or encoder feedback, sensorless with BEMF or flux observer, FOC for AC motors, and trapezoidal for BLDC.",
            "decisionGuide": "Supports BLDC, PMSM, ACIM, stepper, and brushed DC motors.",
            "keywords": ["motor types", "BLDC", "PMSM", "FOC"]
          },
          {
            "question": "What is the maximum motor power?",
            "answer": "Maximum motor power depends on external power stage. The MCU gate drivers can drive MOSFETs up to 100A with typical voltage support up to 60V. Integrated amplifiers handle ±3A shunt current. Small motors (<100W) can use direct drive with integrated drivers, medium motors (100W-1kW) use external MOSFETs with MCU gate drive, and large motors (>1kW) use external IGBTs with isolated gate drivers.",
            "decisionGuide": "MCU controls up to 60V/100A with appropriate external power stage.",
            "keywords": ["motor power", "current rating", "voltage limit"]
          },
          {
            "question": "How is motor protection implemented?",
            "answer": "Comprehensive motor protection includes overcurrent protection with hardware comparator, undervoltage lockout, overtemperature monitoring, stall detection, overvoltage brake chopper control, and short circuit protection with fast hardware shutdown. Hardware faults immediately disable PWM outputs while software faults trigger controlled shutdown.",
            "decisionGuide": "Multi-level protection with fast hardware response for power stage safety.",
            "keywords": ["motor protection", "fault detection", "safety"]
          },
          {
            "question": "What communication interfaces are available?",
            "answer": "Communication interfaces include CAN 2.0B for industrial networks, RS-485 for multi-drop serial, UART, SPI, I2C, and USB for configuration. Protocols supported include CANopen and Modbus RTU for industrial applications.",
            "decisionGuide": "Multiple industrial interfaces for system integration and networking.",
            "keywords": ["communication", "CAN", "industrial network"]
          }
        ]
      },
      {
        partNumber: "HS32M300RGT6",
        name: "HS32M300RGT6",
        shortDescription: "High-performance Motor Control MCU with triple motor support, 256KB Flash, 64KB SRAM, 100MHz for servo systems.",
        descriptionParagraphs: [
          "The HS32M300RGT6 is a high-performance motor control MCU capable of controlling three motors simultaneously.",
          "With 100MHz Cortex-M4 core and advanced motion control peripherals, it targets high-end servo applications.",
          "The comprehensive feature set includes encoder interfaces, resolver support, and precision timing."
        ],
        specifications: {
          "Core": "ARM Cortex-M4",
          "Frequency": "100 MHz",
          "Flash": "256 KB",
          "SRAM": "64 KB",
          "Motor Channels": "3",
          "Package": "LQFP100"
        },
        features: [
          "Triple motor control capability",
          "100MHz Cortex-M4 with FPU",
          "Hardware FOC for all three motors",
          "Quadrature encoder interfaces",
          "Resolver-to-digital converter interface",
          "256KB Flash for servo algorithms",
          "64KB SRAM with CCM",
          "Precision motion control timing"
        ],
        applications: [
          "Multi-axis CNC controllers",
          "Industrial robot controllers",
          "Servo drive systems",
          "Precision positioning systems",
          "High-end motion control"
        ],
        faeReview: {
          "author": "Robert Liu",
          "title": "Senior FAE - Precision Motion Control",
          "content": "The HS32M300RGT6 is our flagship motor control MCU for demanding servo applications. The triple motor control with 100MHz Cortex-M4 enables complex multi-axis coordination. The hardware FOC acceleration handles three motors simultaneously without CPU overload. I've deployed this in CNC controllers and industrial robots requiring precise synchronized motion. The encoder and resolver interfaces support high-resolution feedback for accurate positioning.",
          "highlight": "Triple-axis servo control with 100MHz Cortex-M4 and precision feedback"
        },
        alternativeParts: [
          {
            "partNumber": "HS32M200RGT6",
            "brand": "Hangshun",
            "specifications": {
              "Core": "ARM Cortex-M4",
              "Frequency": "72 MHz",
              "Motor Channels": "1"
            },
            "comparison": "HS32M300RGT6 => HS32M200RGT6 => 3 vs 1 motor, 100MHz vs 72MHz",
            "reason": "Lower cost for single-axis applications",
            "useCase": "Use M200 for single-axis servo control",
            "link": "/hangshun/products/motor-control-mcu/hs32m200rgt6.html"
          }
        ],
        companionParts: [
          {
            "partNumber": "High-resolution Encoder",
            "description": "Optical or magnetic encoder for feedback",
            "category": "Sensors"
          },
          {
            "partNumber": "IGBT Modules",
            "description": "Power modules for high-current drives",
            "category": "Power"
          },
          {
            "partNumber": "Resolver Sensor",
            "description": "Rotary position sensor for harsh environments",
            "category": "Sensors"
          }
        ],
        faqs: [
          {
            "question": "What is the control loop update rate?",
            "answer": "Control loop update rates include current loop at 20-50kHz typical up to 100kHz maximum, speed loop at 1-5kHz, and position loop at 500Hz-2kHz. All three motors run simultaneously with the 100MHz Cortex-M4 and hardware FOC acceleration.",
            "decisionGuide": "Up to 100kHz current loops with simultaneous triple-motor control.",
            "keywords": ["control loop", "update rate", "bandwidth"]
          },
          {
            "question": "What encoder resolutions are supported?",
            "answer": "Encoder interface capabilities include quadrature encoder with 4x decoding, support for up to 10,000 line encoders (40,000 counts/rev), input frequency up to 10MHz, index pulse for homing, and Sin/Cos encoder signal processing.",
            "decisionGuide": "Supports high-resolution encoders up to 40,000 counts/revolution.",
            "keywords": ["encoder resolution", "quadrature", "feedback"]
          },
          {
            "question": "How does multi-axis coordination work?",
            "answer": "Multi-axis coordination includes electronic gearing, electronic camming, linear interpolation, circular interpolation, and synchronization with phase-locked multi-axis motion. A trajectory planner generates coordinated position profiles with all axes synchronized to a common timebase.",
            "decisionGuide": "Comprehensive multi-axis coordination for CNC and robotics.",
            "keywords": ["multi-axis", "coordination", "interpolation"]
          },
          {
            "question": "What is the positioning accuracy?",
            "answer": "Positioning accuracy depends on encoder resolution, mechanical precision, control algorithm, and system calibration. With a 10,000 line encoder, ±1 count (±0.009°) is achievable. With compensation, ±0.001° is possible.",
            "decisionGuide": "Sub-arcminute accuracy achievable with proper encoder and calibration.",
            "keywords": ["positioning accuracy", "precision", "repeatability"]
          },
          {
            "question": "Is it suitable for safety-critical applications?",
            "answer": "HS32M300RGT6 includes watchdog timer, clock monitoring, memory protection, and error correction. For functional safety, external safety MCU is recommended for critical functions, along with safe torque off via external safety relay.",
            "decisionGuide": "Safety features present; external safety components needed for certified systems.",
            "keywords": ["functional safety", "SIL", "STO", "safety critical"]
          }
        ]
      }
    ];
    const needed = 6 - motorCat.products.length;
    motorCat.products.push(...newMotorProducts.slice(0, needed));
    console.log(`✅ Added ${Math.min(needed, newMotorProducts.length)} products to Motor Control MCU (total: ${motorCat.products.length})`);
  }
  
  // 为Wireless MCU添加更多产品
  const wirelessCat = productsData.categories.find(c => c.id === 'wireless-mcu');
  if (wirelessCat && wirelessCat.products.length < 6) {
    // 添加2个Wireless产品
    const newWirelessProducts = [
      {
        partNumber: "HS32S101C8T6",
        name: "HS32S101C8T6",
        shortDescription: "Sub-1GHz Wireless MCU, 64KB Flash, 16KB SRAM, 48MHz with long-range RF for sensor networks.",
        descriptionParagraphs: [
          "The HS32S101C8T6 is a Sub-1GHz wireless MCU optimized for long-range, low-power sensor networks.",
          "Operating at 433/868/915MHz with -120dBm sensitivity, it provides kilometers of range.",
          "The ultra-low power consumption enables 10-year battery life in sensor applications."
        ],
        specifications: {
          "Core": "ARM Cortex-M0",
          "Frequency": "48 MHz",
          "Flash": "64 KB",
          "SRAM": "16 KB",
          "RF Band": "Sub-1GHz (433/868/915MHz)",
          "Package": "QFN48"
        },
        features: [
          "Sub-1GHz RF with -120dBm sensitivity",
          "Long-range communication up to 2km",
          "Ultra-low power consumption",
          "64KB Flash for application code",
          "16KB SRAM for data and stack",
          "Multiple modulation schemes",
          "Hardware packet handling",
          "AES-128 encryption"
        ],
        applications: [
          "Wireless sensor networks",
          "Smart metering (AMR/AMI)",
          "Industrial monitoring",
          "Agriculture sensors",
          "Asset tracking"
        ],
        faeReview: {
          "author": "James Wang",
          "title": "Senior FAE - Wireless Systems",
          "content": "The HS32S101C8T6 is our Sub-1GHz solution for long-range, low-power applications. The -120dBm sensitivity is exceptional - I've achieved over 2km range in open field tests. The Sub-1GHz band penetrates buildings and vegetation much better than 2.4GHz. The hardware packet handling offloads the CPU for ultra-low power.",
          "highlight": "Long-range Sub-1GHz with exceptional sensitivity and ultra-low power"
        },
        alternativeParts: [
          {
            "partNumber": "TI CC1310",
            "brand": "Texas Instruments",
            "specifications": {
              "Core": "ARM Cortex-M3",
              "RF Band": "Sub-1GHz",
              "Flash": "128 KB"
            },
            "comparison": "HS32S101C8T6 => TI CC1310 => Similar RF performance, cost advantage",
            "reason": "Cost-effective alternative with comparable RF performance",
            "useCase": "Use as lower-cost replacement for CC1310 designs"
          },
          {
            "partNumber": "HS32B101C8T6",
            "brand": "Hangshun",
            "specifications": {
              "RF": "BLE 5.0 + Sub-1GHz",
              "Flash": "256 KB"
            },
            "comparison": "HS32S101C8T6 => HS32B101C8T6 => Sub-1G only vs dual-mode, 64KB vs 256KB",
            "reason": "Lower cost when only Sub-1GHz needed",
            "useCase": "Use S101 when only Sub-1GHz required, no BLE needed"
          }
        ],
        companionParts: [
          {
            "partNumber": "Sub-1GHz Antenna",
            "description": "433/868/915MHz PCB or whip antenna",
            "category": "RF"
          },
          {
            "partNumber": "Matching Network",
            "description": "RF matching components for antenna",
            "category": "RF"
          },
          {
            "partNumber": "SAW Filter",
            "description": "Channel selectivity filter",
            "category": "RF"
          }
        ],
        faqs: [
          {
            "question": "What range can be achieved?",
            "answer": "Range depends on RF power, sensitivity, frequency, environment, antenna, and data rate. Typical ranges include 1-2km at +10dBm up to 3-5km at +20dBm in open field, 200-500m in urban environments, and 50-100m indoor through walls.",
            "decisionGuide": "1-2km typical range, up to 5km with optimization and high power.",
            "keywords": ["range", "distance", "RF performance"]
          },
          {
            "question": "What battery life is achievable?",
            "answer": "Battery life depends on duty cycle and configuration. With 1-minute reporting interval, 10+ years on AA battery is achievable. With 1-hour reporting interval, 15+ years is possible. Sleep current is less than 1μA with RAM retained.",
            "decisionGuide": "10+ year battery life achievable with low duty cycle applications.",
            "keywords": ["battery life", "low power", "duty cycle"]
          },
          {
            "question": "What protocols are supported?",
            "answer": "Protocol support includes proprietary protocols, wM-Bus for metering, IEEE 802.15.4g for Smart Utility Networks, and LoRa-compatible modulation. Stack options include Hangshun RF stack, Contiki OS, and custom implementations.",
            "decisionGuide": "Multiple protocol options; proprietary protocols offer maximum flexibility.",
            "keywords": ["protocols", "wM-Bus", "LoRa", "proprietary"]
          },
          {
            "question": "Is it compatible with LoRa networks?",
            "answer": "HS32S101C8T6 has LoRa-compatible CSS modulation but is not LoRa Alliance certified. It can communicate with LoRa gateways using compatible modulation, but LoRaWAN protocol stack must be implemented in software.",
            "decisionGuide": "LoRa-compatible modulation but not certified; implement stack in software or use proprietary protocols.",
            "keywords": ["LoRa", "LoRaWAN", "CSS modulation"]
          },
          {
            "question": "What antenna options are available?",
            "answer": "Antenna options include PCB antennas (Inverted-F, monopole, or loop), chip antennas for compact designs, whip antennas for best performance, and helical antennas as a size/performance compromise. Frequency bands supported are 433MHz, 868MHz, and 915MHz.",
            "decisionGuide": "Multiple antenna options; match to frequency band and mechanical constraints.",
            "keywords": ["antenna", "RF design", "matching"]
          }
        ]
      },
      {
        partNumber: "HS32B201RGT6",
        name: "HS32B201RGT6",
        shortDescription: "Advanced Dual-Mode Wireless MCU with BLE 5.2 and Sub-1GHz, 512KB Flash, 128KB SRAM, 72MHz for IoT gateways.",
        descriptionParagraphs: [
          "The HS32B201RGT6 is an advanced dual-mode wireless MCU featuring BLE 5.2 and Sub-1GHz connectivity.",
          "With 512KB Flash and 128KB SRAM, it supports complex IoT gateway applications.",
          "The simultaneous dual-radio operation enables bridging between BLE devices and Sub-1G networks."
        ],
        specifications: {
          "Core": "ARM Cortex-M4",
          "Frequency": "72 MHz",
          "Flash": "512 KB",
          "SRAM": "128 KB",
          "RF": "BLE 5.2 + Sub-1GHz",
          "Package": "QFN68"
        },
        features: [
          "BLE 5.2 with long range and 2Mbps",
          "Sub-1GHz for long-range sensor networks",
          "Simultaneous dual-radio operation",
          "512KB Flash for gateway applications",
          "128KB SRAM for protocol stacks",
          "Hardware security accelerator",
          "Ethernet MAC for wired connectivity",
          "Advanced power management"
        ],
        applications: [
          "IoT gateways",
          "Smart home hubs",
          "Industrial wireless bridges",
          "Building automation controllers",
          "Agricultural monitoring systems"
        ],
        faeReview: {
          "author": "James Wang",
          "title": "Senior FAE - IoT Gateway Solutions",
          "content": "The HS32B201RGT6 is our flagship dual-mode wireless MCU for IoT gateway applications. The simultaneous BLE and Sub-1GHz operation is unique - most dual-mode devices can only use one radio at a time. This enables real-time bridging between BLE sensors and Sub-1G backhaul networks. The 128KB SRAM accommodates both protocol stacks plus application code.",
          "highlight": "Simultaneous dual-radio IoT gateway with BLE 5.2 and Sub-1GHz"
        },
        alternativeParts: [
          {
            "partNumber": "Nordic nRF52840 + External Sub-1G",
            "brand": "Nordic",
            "specifications": {
              "BLE": "5.2",
              "Flash": "1 MB"
            },
            "comparison": "HS32B201RGT6 => nRF52840 + External => Integrated vs discrete solution",
            "reason": "Integrated solution reduces BOM and complexity",
            "useCase": "Replace two-chip solution with integrated dual-radio MCU"
          },
          {
            "partNumber": "HS32B101C8T6",
            "brand": "Hangshun",
            "specifications": {
              "Core": "Cortex-M3",
              "Flash": "256 KB"
            },
            "comparison": "HS32B201RGT6 => HS32B101C8T6 => M4 vs M3, 512KB vs 256KB, more features",
            "reason": "Lower cost for simpler gateway applications",
            "useCase": "Use B101 for basic dual-mode applications"
          }
        ],
        companionParts: [
          {
            "partNumber": "Dual-Band Antenna",
            "description": "2.4GHz + Sub-1GHz combined antenna",
            "category": "RF"
          },
          {
            "partNumber": "Ethernet PHY",
            "description": "10/100 PHY for wired connectivity",
            "category": "Interface"
          },
          {
            "partNumber": "RF Front-end",
            "description": "Power amplifier and LNA for extended range",
            "category": "RF"
          }
        ],
        faqs: [
          {
            "question": "How does simultaneous dual-radio work?",
            "answer": "Simultaneous dual-radio operation uses independent radios for BLE and Sub-1G operating on separate frequency bands without interference. Both radios can be active simultaneously with independent protocols running on each radio. Use cases include BLE sensor to Sub-1G gateway, smartphone configuration via BLE with Sub-1G network operation.",
            "decisionGuide": "True simultaneous operation enables real-time protocol bridging.",
            "keywords": ["dual-radio", "simultaneous", "protocol bridging"]
          },
          {
            "question": "What is the use case for dual-mode operation?",
            "answer": "Common dual-mode use cases include smart building with BLE occupancy sensors and Sub-1G backhaul, industrial IoT with BLE vibration sensors and Sub-1G plant-wide network, agriculture with BLE soil sensors and Sub-1G long-range to farm office, and smart home with BLE devices and Sub-1G neighborhood network.",
            "decisionGuide": "Ideal for IoT gateways bridging short-range BLE to long-range Sub-1G networks.",
            "keywords": ["use cases", "IoT gateway", "smart building"]
          },
          {
            "question": "What security features are included?",
            "answer": "Security features include hardware AES-128/256 accelerator, secure boot for firmware verification, secure storage for encrypted keys, hardware TRNG for cryptographic operations, debug protection, and secure over-the-air updates.",
            "decisionGuide": "Comprehensive hardware security for commercial IoT deployments.",
            "keywords": ["security", "encryption", "secure boot", "IoT security"]
          },
          {
            "question": "Can it act as a Thread or Zigbee border router?",
            "answer": "HS32B201RGT6 supports 2.4GHz 802.15.4 PHY for Thread/Zigbee. It can run OpenThread or Zigbee PRO stacks and can bridge Thread/Zigbee to Ethernet/IP networks. Commercial deployment requires alliance certification.",
            "decisionGuide": "Hardware capable; requires protocol stack implementation and certification for commercial use.",
            "keywords": ["Thread", "Zigbee", "border router", "802.15.4"]
          },
          {
            "question": "What is the gateway throughput?",
            "answer": "Gateway throughput includes BLE at 1-2Mbps raw (100-500kbps application data), Sub-1G at 50-500kbps, 8-20 concurrent BLE connections, and packet forwarding at 100-1000 packets/second depending on size.",
            "decisionGuide": "Suitable for typical IoT sensor gateways; consider external processor for high-throughput applications.",
            "keywords": ["throughput", "gateway performance", "packet forwarding"]
          }
        ]
      }
    ];
    const needed = 6 - wirelessCat.products.length;
    wirelessCat.products.push(...newWirelessProducts.slice(0, needed));
    console.log(`✅ Added ${Math.min(needed, newWirelessProducts.length)} products to Wireless MCU (total: ${wirelessCat.products.length})`);
  }
  
  // 保存更新后的文件
  fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2), 'utf8');
  
  console.log('\n✅ All products added successfully!');
  console.log('Total products per category:');
  productsData.categories.forEach(cat => {
    console.log(`  - ${cat.name}: ${cat.products.length} products`);
  });
}

main();
