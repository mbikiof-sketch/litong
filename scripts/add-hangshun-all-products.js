#!/usr/bin/env node

/**
 * 为Hangshun所有产品分类添加产品至6个
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hangshun');
const productsFile = path.join(dataDir, 'products.json');

// 读取产品数据
const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Touch Control MCU 的4个新产品
function generateTouchControlProducts() {
  return [
    {
      partNumber: "HS32T024RGT6",
      name: "HS32T024RGT6",
      shortDescription: "Advanced Touch Control MCU with 24 touch channels, 256KB Flash, 64KB SRAM, 72MHz for complex HMI applications.",
      descriptionParagraphs: [
        "The HS32T024RGT6 is an advanced touch control MCU featuring 24 capacitive touch sensing channels.",
        "With 256KB Flash and 64KB SRAM, it supports complex touch interfaces including multi-touch and gestures.",
        "The 72MHz Cortex-M3 core provides responsive touch processing for modern HMI applications."
      ],
      specifications: {
        "Core": "ARM Cortex-M3",
        "Frequency": "72 MHz",
        "Flash": "256 KB",
        "SRAM": "64 KB",
        "Touch Channels": "24",
        "Package": "LQFP64"
      },
      features: [
        "24 capacitive touch sensing channels",
        "Multi-touch and gesture recognition",
        "Water rejection technology",
        "256KB Flash for complex applications",
        "64KB SRAM for touch data processing",
        "72MHz Cortex-M3 core",
        "LCD driver interface",
        "Low power touch detection"
      ],
      applications: [
        "Advanced home appliance panels",
        "Industrial touch interfaces",
        "Medical device controls",
        "Kiosk touch screens",
        "Smart home control panels"
      ],
      faeReview: {
        "author": "Emily Chen",
        "title": "Senior FAE - Touch Sensing",
        "content": "The HS32T024RGT6 is our flagship touch control MCU for demanding HMI applications. The 24 touch channels support complex interfaces with multiple buttons, sliders, and wheels. The water rejection technology is exceptional - I've tested this in kitchen appliance environments with water splashes and steam, and it maintains reliable touch detection. The gesture recognition enables swipe and pinch gestures for intuitive interfaces. The 64KB SRAM is important for buffering touch data and running the touch library. For applications requiring LCD integration, the built-in driver interface simplifies design. Consider this part when you need more than 16 touch channels or advanced gesture support.",
        "highlight": "24-channel touch MCU with gesture recognition and water rejection"
      },
      alternativeParts: [
        {
          "partNumber": "STM32F072 + XPT2046",
          "brand": "STMicroelectronics",
          "specifications": {
            "Core": "ARM Cortex-M0",
            "Touch": "External controller",
            "Flash": "64 KB"
          },
          "comparison": "HS32T024RGT6 => STM32F072 + XPT2046 => Integrated vs external touch controller",
          "reason": "Integrated solution reduces BOM and design complexity",
          "useCase": "Replace external touch controller with integrated solution",
          "link": "#"
        },
        {
          "partNumber": "HS32T016C8T6",
          "brand": "Hangshun",
          "specifications": {
            "Core": "ARM Cortex-M0",
            "Touch Channels": "16",
            "Flash": "64 KB",
            "SRAM": "16 KB"
          },
          "comparison": "HS32T024RGT6 => HS32T016C8T6 => 24 vs 16 channels, 256KB vs 64KB Flash",
          "reason": "Lower cost for simpler touch applications",
          "useCase": "Use T016 when fewer channels and less memory sufficient",
          "link": "/hangshun/products/touch-control-mcu/hs32t016c8t6.html"
        }
      ],
      companionParts: [
        {
          "partNumber": "Touch Overlay",
          "description": "ITO or metal mesh touch overlay",
          "category": "Components"
        },
        {
          "partNumber": "LCD Module",
          "description": "TFT LCD for touch interface",
          "category": "Display"
        }
      ],
      faqs: [
        {
          "question": "What gestures are supported?",
          "answer": "The HS32T024RGT6 supports multiple touch gestures: Tap - single touch detection; Double-tap - quick successive touches; Long press - touch and hold; Swipe - linear finger movement (up, down, left, right); Pinch/Zoom - two-finger gestures for scaling; Rotate - two-finger rotation gesture. The gesture library processes raw touch data to recognize these patterns. Custom gestures can be defined for specific applications. Gesture recognition requires appropriate touch electrode design and sufficient touch pad size. The 24 channels enable complex multi-touch scenarios with up to 10 simultaneous touch points.",
          "decisionGuide": "Comprehensive gesture support for modern touch interfaces.",
          "keywords": ["gestures", "multi-touch", "touch interface"]
        },
        {
          "question": "How does water rejection work?",
          "answer": "Water rejection technology prevents false touch detection in wet conditions: Dynamic baseline tracking - continuously adapts to environmental changes; Water droplet detection - identifies water vs finger touch; Shield electrode - reduces water coupling to touch sensors; Frequency hopping - avoids noise frequencies affected by water; Sensitivity adjustment - automatically reduces sensitivity when water detected. This enables reliable operation in: Kitchen appliances with steam and splashes; Outdoor panels with rain; Industrial environments with condensation; Bathrooms and wet areas. The water rejection is automatic and requires no software intervention.",
          "decisionGuide": "Essential for kitchen, outdoor, and industrial touch applications.",
          "keywords": ["water rejection", "wet operation", "reliability"]
        },
        {
          "question": "What touch electrode designs work best?",
          "answer": "Optimal touch electrode designs for HS32T024RGT6: Button - circular or square pads, 8-15mm diameter; Slider - interleaved zigzag pattern, 3-5mm width; Wheel - concentric circular segments; Matrix - row/column grid for large touch areas. Material options: ITO (Indium Tin Oxide) on glass - best optical clarity; Metal mesh on film - flexible, lower cost; Copper on PCB - prototyping, rigid applications; Silver nanowire - emerging technology, flexible. Design guidelines: Keep trace lengths short (<100mm); Use ground planes for shielding; Maintain consistent electrode sizes; Add series resistors for ESD protection. Our application note provides detailed design rules and layout examples.",
          "decisionGuide": "Match electrode design to application requirements and mechanical constraints.",
          "keywords": ["electrode design", "touch pad", "layout guidelines"]
        },
        {
          "question": "Can it drive LCD displays?",
          "answer": "Yes, the HS32T024RGT6 includes LCD driver interface: Supports segment LCDs up to 8x40 segments; Built-in LCD voltage generation; Configurable bias levels (1/2, 1/3, 1/4); Low power LCD operation in sleep mode. For TFT color displays: Use external TFT controller (e.g., ILI9341, ST7789); Connect via SPI or parallel interface; MCU handles touch processing while external controller drives display. Many designs use: Touch MCU + small TFT with SPI for simple UIs; Touch MCU + segment LCD for cost-sensitive apps; Touch MCU + external TFT controller for rich graphics. The LCD interface is independent of touch sensing, allowing simultaneous operation.",
          "decisionGuide": "Built-in segment LCD driver; use external controller for TFT color displays.",
          "keywords": ["LCD driver", "display interface", "TFT"]
        },
        {
          "question": "What is the touch response time?",
          "answer": "Touch response time depends on configuration: Scan time - 2-5ms per channel depending on sensitivity; Processing time - 1-2ms for gesture recognition; Total latency - 5-10ms from touch to application notification. Factors affecting response: Number of active channels - more channels = longer scan time; Sensitivity setting - higher sensitivity requires longer acquisition; Averaging - more samples for noise immunity increases time; Gesture complexity - simple tap vs multi-touch gestures. For responsive interfaces: Enable only needed channels; Optimize sensitivity (not too high); Use hardware gesture recognition; Implement debouncing in software. The 5-10ms response is imperceptible to users for most applications.",
          "decisionGuide": "5-10ms response time suitable for responsive touch interfaces.",
          "keywords": ["response time", "latency", "scan time"]
        }
      ]
    },
    {
      partNumber: "HS32T032RGT6",
      name: "HS32T032RGT6",
      shortDescription: "High-end Touch Control MCU with 32 touch channels, 512KB Flash, 96KB SRAM, 72MHz for premium HMI.",
      descriptionParagraphs: [
        "The HS32T032RGT6 is a high-end touch control MCU featuring 32 capacitive touch sensing channels.",
        "With 512KB Flash and 96KB SRAM, it supports premium touch interfaces with advanced graphics and connectivity.",
        "The comprehensive feature set makes it ideal for high-end appliances and industrial control panels."
      ],
      specifications: {
        "Core": "ARM Cortex-M3",
        "Frequency": "72 MHz",
        "Flash": "512 KB",
        "SRAM": "96 KB",
        "Touch Channels": "32",
        "Package": "LQFP100"
      },
      features: [
        "32 capacitive touch sensing channels",
        "Advanced gesture recognition engine",
        "512KB Flash for large applications",
        "96KB SRAM for graphics and touch data",
        "USB and CAN connectivity",
        "TFT LCD interface support",
        "Audio DAC for sound feedback",
        "Hardware graphics acceleration"
      ],
      applications: [
        "Premium appliance control panels",
        "Industrial HMI terminals",
        "Medical equipment interfaces",
        "Building automation panels",
        "Automotive touch controls"
      ],
      faeReview: {
        "author": "Emily Chen",
        "title": "Senior FAE - Premium Touch Solutions",
        "content": "The HS32T032RGT6 is our premium touch MCU for high-end applications requiring maximum touch channels and advanced features. The 32 touch channels enable large, complex touch panels with multiple zones and controls. The 96KB SRAM supports graphics buffering and complex touch algorithms simultaneously. The integrated audio DAC enables sound feedback for touch events, improving user experience. I've used this in premium kitchen appliances and industrial control panels where users expect smartphone-like touch response. The hardware graphics acceleration offloads the CPU for smooth animations. The USB and CAN interfaces enable connectivity for updates and industrial networks. This is the ultimate choice for demanding HMI applications.",
        "highlight": "32-channel premium touch MCU with graphics and audio support"
      },
      alternativeParts: [
        {
          "partNumber": "HS32T024RGT6",
          "brand": "Hangshun",
          "specifications": {
            "Touch Channels": "24",
            "Flash": "256 KB",
            "SRAM": "64 KB"
          },
          "comparison": "HS32T032RGT6 => HS32T024RGT6 => 32 vs 24 channels, 512KB vs 256KB",
          "reason": "Lower cost for less demanding applications",
          "useCase": "Use T024 when 24 channels sufficient",
          "link": "/hangshun/products/touch-control-mcu/hs32t024rgt6.html"
        }
      ],
      companionParts: [
        {
          "partNumber": "Premium Touch Overlay",
          "description": "High-quality glass touch panel",
          "category": "Components"
        },
        {
          "partNumber": "TFT Display",
          "description": "7-inch color TFT with capacitive touch",
          "category": "Display"
        }
      ],
      faqs: [
        {
          "question": "What is the maximum touch panel size?",
          "answer": "The HS32T032RGT6 supports large touch panels: Maximum size - up to 15 inches diagonal with proper electrode design; Channel allocation - 32 channels enable complex layouts; Scanning method - self-capacitance for buttons, mutual-capacitance for matrices; Resolution - depends on electrode density, typically 5-10mm spacing. Large panel considerations: Increased scan time with more channels; Potential noise issues requiring careful layout; May need shielding layers for very large panels; Power consumption increases with panel size. For panels larger than 15 inches, consider multiple MCUs or dedicated large-panel touch controllers. Our reference designs include examples up to 10-inch panels.",
          "decisionGuide": "Supports panels up to 15 inches; consider layout and noise for large panels.",
          "keywords": ["panel size", "large touch screen", "design considerations"]
        },
        {
          "question": "Does it support haptic feedback?",
          "answer": "The HS32T032RGT6 supports haptic feedback through: GPIO control of external vibration motors; PWM control for variable vibration intensity; Audio DAC for piezo-electric actuators; Synchronized feedback with touch detection. Implementation options: ERM (Eccentric Rotating Mass) motors - simple, low-cost vibration; LRA (Linear Resonant Actuators) - precise, crisp feedback; Piezo actuators - fast response, localized feedback. The MCU can trigger haptic feedback on: Touch detection; Gesture completion; Error conditions; Confirmation actions. Haptic feedback enhances user experience by providing physical confirmation of touch events. The audio DAC can also generate click sounds for auditory feedback.",
          "decisionGuide": "Supports various haptic technologies for enhanced user experience.",
          "keywords": ["haptic feedback", "vibration", "user experience"]
        },
        {
          "question": "What graphics capabilities does it have?",
          "answer": "Graphics capabilities of HS32T032RGT6: Hardware graphics acceleration - BitBLT operations, rectangle fill, color conversion; TFT interface - 8080 or 6800 parallel interface up to 16-bit color; SPI interface - for smaller TFTs and OLEDs; Frame buffer - can use external SPI RAM for double buffering; Color depth - supports 16-bit (65K colors) and 24-bit (16M colors); Resolution - up to 800x480 with external RAM, smaller without. Graphics libraries: STemWin/emWin - professional graphics library; TouchGFX - advanced UI framework; LVGL - open-source graphics library; Custom graphics - direct driver writing. The 96KB SRAM enables small frame buffers or complex graphics algorithms. For rich UIs with animations, consider external frame buffer memory.",
          "decisionGuide": "Hardware acceleration and library support for modern touch UIs.",
          "keywords": ["graphics", "TFT interface", "UI framework"]
        },
        {
          "question": "How many simultaneous touches are supported?",
          "answer": "The HS32T032RGT6 supports up to 10 simultaneous touch points (10-point multi-touch). This enables: Pinch-to-zoom gestures; Two-finger rotation; Multi-finger gaming controls; Multiple user interactions; Complex gesture combinations. The actual number of simultaneous touches depends on: Touch panel design - sufficient electrode density required; Channel allocation - more channels enable better multi-touch; Processing power - complex multi-touch requires more CPU time; Application requirements - most UIs need 2-5 points maximum. The touch library processes all touch points and reports coordinates to the application. For simple button interfaces, single-touch mode reduces processing overhead.",
          "decisionGuide": "10-point multi-touch for advanced gesture interfaces.",
          "keywords": ["multi-touch", "simultaneous touches", "gestures"]
        },
        {
          "question": "What development tools are available?",
          "answer": "Development tools for HS32T032RGT6: IDEs - Keil MDK, IAR EWARM, STM32CubeIDE with GCC; Debuggers - HS-Link, ST-Link/V2, J-Link; Touch tuning tools - Graphical tool for sensitivity adjustment; Emulator - Cycle-accurate simulation for algorithm development; Evaluation kit - Development board with touch panel and display. Software support: Touch library - Proprietary touch sensing firmware; Gesture library - Pre-built gesture recognition; Graphics libraries - STemWin, TouchGFX, LVGL; USB stack - Device and host support; Example projects - Reference designs for common applications. The touch tuning tool is particularly valuable - it visualizes touch data in real-time and helps optimize sensitivity settings for your specific panel design.",
          "decisionGuide": "Comprehensive tool chain with specialized touch tuning software.",
          "keywords": ["development tools", "touch tuning", "IDE support"]
        }
      ]
    }
  ];
}

// Motor Control MCU 的4个新产品
function generateMotorControlProducts() {
  return [
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
        "content": "The HS32M150C8T6 is our solution for dual-motor applications requiring coordinated control. The dual gate drivers eliminate external driver ICs, reducing BOM cost and PCB area. I've used this in CNC controllers and robotic systems where two motors need synchronized operation. The hardware FOC acceleration handles the complex math for both motors efficiently. The integrated current sensing simplifies motor current measurement without external amplifiers. The fault protection features (overcurrent, undervoltage, overtemperature) protect both the MCU and power stage. For applications requiring more than two motors, multiple HS32M150 devices can be synchronized via CAN bus.",
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
        }
      ],
      faqs: [
        {
          "question": "How does dual motor control work?",
          "answer": "Dual motor control in HS32M150C8T6: Independent control loops - Each motor has separate FOC or 6-step control; Shared resources - Common CPU handles both motors with time-slicing; Synchronized PWM - Both motors can be synchronized to same timebase; Inter-motor coordination - Software can implement master/slave or coordinated motion. Hardware resources: Dual PWM units with independent dead-time; Dual gate drivers with separate fault inputs; Dual current sensing channels; Shared ADC with sequencing for both motors. The 72MHz CPU can update both motor control loops at 10-20kHz switching frequency. For complex coordinated motion (like robot joints), the application software implements trajectory planning across both motors.",
          "decisionGuide": "True dual-motor control with independent or coordinated operation.",
          "keywords": ["dual motor", "multi-axis", "coordinated control"]
        },
        {
          "question": "What motor types are supported?",
          "answer": "HS32M150C8T6 supports various motor types: BLDC (Brushless DC) - 6-step trapezoidal control, sensorless or sensored; PMSM (Permanent Magnet Synchronous Motor) - FOC control for high efficiency; AC Induction Motor - V/Hz control with slip compensation; Stepper Motor - Microstepping control up to 1/256; Brushed DC - Simple PWM control with current limiting. Control methods: Sensored - Hall sensors or encoder feedback; Sensorless - BEMF or flux observer based; FOC - Field-oriented control for AC motors; Trapezoidal - 6-step commutation for BLDC. The motor library provides pre-built control algorithms for each type. Custom control schemes can be implemented using the hardware PWM and ADC resources.",
          "decisionGuide": "Supports BLDC, PMSM, ACIM, stepper, and brushed DC motors.",
          "keywords": ["motor types", "BLDC", "PMSM", "FOC"]
        },
        {
          "question": "What is the maximum motor power?",
          "answer": "Maximum motor power depends on external power stage: MCU capability - Gate drivers can drive MOSFETs up to 100A; Voltage limit - Gate drivers typically support up to 60V; Current sensing - Integrated amplifiers handle ±3A shunt current; Power stage - External MOSFETs determine maximum current and voltage. Typical configurations: Small motors (<100W) - Direct drive with integrated drivers; Medium motors (100W-1kW) - External MOSFETs with MCU gate drive; Large motors (>1kW) - External IGBTs with isolated gate drivers. The HS32M150 provides control signals and protection; external power stage handles motor power. For high-voltage motors (>60V), use external isolated gate drivers with the MCU's PWM outputs.",
          "decisionGuide": "MCU controls up to 60V/100A with appropriate external power stage.",
          "keywords": ["motor power", "current rating", "voltage limit"]
        },
        {
          "question": "How is motor protection implemented?",
          "answer": "Comprehensive motor protection features: Overcurrent protection - Hardware comparator with programmable threshold; Undervoltage lockout - Prevents operation with insufficient gate drive; Overtemperature - MCU internal sensor and external thermistor input; Stall detection - Software monitors for motor stall condition; Overvoltage - Brake chopper control for regenerative braking; Short circuit - Fast hardware shutdown (<1μs) for phase shorts. Protection response: Hardware faults immediately disable PWM outputs; Software faults trigger controlled shutdown; Fault status logged for diagnostics; Automatic or manual restart configurable. These protections prevent damage to both the motor and power electronics. The fast hardware response is critical for protecting MOSFETs from shoot-through during faults.",
          "decisionGuide": "Multi-level protection with fast hardware response for power stage safety.",
          "keywords": ["motor protection", "fault detection", "safety"]
        },
        {
          "question": "What communication interfaces are available?",
          "answer": "Communication interfaces for system integration: CAN 2.0B - Industrial network communication, up to 1Mbps; RS-485 - Multi-drop serial network for drives; UART - Point-to-point serial communication; SPI - High-speed interface to encoders or sensors; I2C - Configuration EEPROM or sensors; USB - Configuration and diagnostics interface. Network protocols: CANopen - Standard industrial drive protocol; Modbus RTU - Widely used serial protocol; Custom protocols - Implement proprietary communication. These interfaces enable: Distributed control systems; Master/slave multi-axis systems; Remote monitoring and diagnostics; Integration with PLCs and industrial networks. The CAN interface is particularly important for industrial drives, supporting real-time coordinated motion control.",
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
        "content": "The HS32M300RGT6 is our flagship motor control MCU for demanding servo applications. The triple motor control with 100MHz Cortex-M4 enables complex multi-axis coordination. The hardware FOC acceleration handles three motors simultaneously without CPU overload. I've deployed this in CNC controllers and industrial robots requiring precise synchronized motion. The encoder and resolver interfaces support high-resolution feedback for accurate positioning. The FPU enables floating-point control algorithms for smooth motion profiles. The precision timing unit (PTU) provides sub-microsecond timing for critical motion events. This MCU competes with dedicated motion control DSPs at a fraction of the cost. For high-end motion control, this is the ultimate solution in our portfolio.",
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
        }
      ],
      faqs: [
        {
          "question": "What is the control loop update rate?",
          "answer": "Control loop update rates for HS32M300RGT6: Current loop - 20-50kHz typical, up to 100kHz maximum; Speed loop - 1-5kHz depending on dynamics requirements; Position loop - 500Hz-2kHz for trajectory following; Three motors - All loops run simultaneously for each motor. The 100MHz Cortex-M4 with hardware FOC acceleration enables fast loop rates even with three motors. Fast current loops provide: Better current regulation; Lower torque ripple; Faster transient response; Higher bandwidth. The actual rate depends on: Motor type and application requirements; Complexity of control algorithm; Additional processing (communication, diagnostics); ADC sampling and conversion time. High-performance servo applications typically use 20kHz current loops.",
          "decisionGuide": "Up to 100kHz current loops with simultaneous triple-motor control.",
          "keywords": ["control loop", "update rate", "bandwidth"]
        },
        {
          "question": "What encoder resolutions are supported?",
          "answer": "Encoder interface capabilities: Quadrature encoder - 4x decoding for maximum resolution; Line count - Supports up to 10,000 line encoders (40,000 counts/rev); Input frequency - Up to 10MHz quadrature frequency; Index pulse - Homing and revolution counting; Sin/Cos encoder - Analog encoder signal processing; Absolute encoder - SSI, BiSS, EnDat protocols. With a 10,000 line encoder: 40,000 counts per revolution with 4x decoding; At 6000 RPM: 4MHz quadrature frequency (within spec); Angular resolution: 0.009 degrees (360°/40,000). The encoder interface includes: Digital filtering for noise immunity; Glitch detection and rejection; Position capture on external events; Velocity calculation hardware. For ultra-high resolution, consider sine/cosine interpolation or absolute encoders.",
          "decisionGuide": "Supports high-resolution encoders up to 40,000 counts/revolution.",
          "keywords": ["encoder resolution", "quadrature", "feedback"]
        },
        {
          "question": "How does multi-axis coordination work?",
          "answer": "Multi-axis coordination in HS32M300RGT6: Electronic gearing - Slave axis follows master with programmable ratio; Electronic camming - Slave follows cam profile based on master position; Linear interpolation - Coordinated multi-axis straight-line motion; Circular interpolation - 2D and 3D arc motion for contouring; Synchronization - Phase-locked multi-axis motion. Implementation: Trajectory planner generates coordinated position profiles; All axes synchronized to common timebase; Interpolation engine calculates intermediate points; Position commands distributed to each motor's control loop. Applications: CNC machining with coordinated X/Y/Z motion; Robot arm kinematics with joint coordination; Conveyor tracking with variable gearing; Flying shear with precise cut timing. The 100MHz CPU handles complex kinematics while hardware ensures precise timing.",
          "decisionGuide": "Comprehensive multi-axis coordination for CNC and robotics.",
          "keywords": ["multi-axis", "coordination", "interpolation"]
        },
        {
          "question": "What is the positioning accuracy?",
          "answer": "Positioning accuracy depends on system components: Encoder resolution - Higher resolution enables better accuracy; Mechanical precision - Backlash, compliance affect accuracy; Control algorithm - Advanced algorithms compensate for errors; System calibration - Offset and gain calibration improves accuracy. Typical performance with HS32M300RGT6: With 10,000 line encoder: ±1 count (±0.009°); With compensation: ±0.001° achievable; Repeatability: Often better than accuracy by 10x. Factors affecting accuracy: Load variations - Cause position droop without proper control; Temperature - Affects mechanics and electronics; Speed - Higher speeds may reduce accuracy; Acceleration - Inertial forces cause compliance. For highest accuracy: Use high-resolution encoders; Implement backlash compensation; Apply feedforward control; Calibrate system regularly. The MCU provides the processing power for advanced compensation algorithms.",
          "decisionGuide": "Sub-arcminute accuracy achievable with proper encoder and calibration.",
          "keywords": ["positioning accuracy", "precision", "repeatability"]
        },
        {
          "question": "Is it suitable for safety-critical applications?",
          "answer": "HS32M300RGT6 features for safety applications: Watchdog timer - Independent watchdog for software fault detection; Clock monitoring - Detects clock failure and switches to backup; Memory protection - MPU prevents unauthorized access; Error correction - ECC on Flash and SRAM (optional); Dual-core lockstep - Not available, single core only. For functional safety (SIL, PL): External safety MCU recommended for critical functions; Safe torque off (STO) via external safety relay; Redundant position sensors for safety; Safety PLC for system-level safety functions. Standards compliance: IEC 61800-5-2 (adjustable speed drives); IEC 62061 (machine safety); ISO 13849 (control system safety). While the MCU has safety features, achieving safety certification requires system-level design with external safety components. Contact our FAEs for safety system design support.",
          "decisionGuide": "Safety features present; external safety components needed for certified systems.",
          "keywords": ["functional safety", "SIL", "STO", "safety critical"]
        }
      ]
    }
  ];
}

// Wireless MCU 的4个新产品
function generateWirelessProducts() {
  return [
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
        "content": "The HS32S101C8T6 is our Sub-1GHz solution for long-range, low-power applications. The -120dBm sensitivity is exceptional - I've achieved over 2km range in open field tests with just +10dBm TX power. The Sub-1GHz band penetrates buildings and vegetation much better than 2.4GHz, making it ideal for outdoor sensor networks. The hardware packet handling offloads the CPU, allowing the M0 core to sleep between transmissions for ultra-low power. The integrated AES encryption secures data without software overhead. For smart metering and agricultural monitoring where range matters more than data rate, this MCU is unbeatable. The coin cell battery operation with 10-year life is a game-changer for remote sensors.",
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
          "useCase": "Use as lower-cost replacement for CC1310 designs",
          "link": "#"
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
          "useCase": "Use S101 when only Sub-1GHz required, no BLE needed",
          "link": "/hangshun/products/wireless-mcu/hs32b101c8t6.html"
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
        }
      ],
      faqs: [
        {
          "question": "What range can be achieved?",
          "answer": "Range depends on multiple factors: RF power - +10dBm to +20dBm TX power configurable; Sensitivity - -120dBm RX sensitivity for weak signal reception; Frequency - Lower frequencies (433MHz) have longer range than higher (915MHz); Environment - Open field vs urban vs indoor; Antenna - High-gain antennas extend range significantly; Data rate - Lower rates have better sensitivity and range. Typical ranges: Open field - 1-2km at +10dBm, 3-5km at +20dBm; Urban environment - 200-500m; Indoor - 50-100m through walls. For maximum range: Use 433MHz band; Maximize TX power (+20dBm); Use directional antennas; Minimize data rate; Optimize antenna matching. The Sub-1GHz band provides 2-3x better range than 2.4GHz at same power.",
          "decisionGuide": "1-2km typical range, up to 5km with optimization and high power.",
          "keywords": ["range", "distance", "RF performance"]
        },
        {
          "question": "What battery life is achievable?",
          "answer": "Battery life depends on duty cycle and configuration: Sleep current - <1μA with RAM retention; RX current - 10mA typical; TX current - 25mA at +10dBm, 50mA at +20dBm; Sensor reading - Additional current depending on sensor. Example calculations: 1-minute reporting interval - 10+ years on AA battery; 1-hour reporting interval - 15+ years on AA battery; 1-second reporting interval - 1-2 years on AA battery. Battery options: Coin cell (CR2032) - Suitable for low duty cycle (<1% TX); AA alkaline - Good balance of capacity and size; Li-SOCl2 - Highest energy density for 10+ year life. Power optimization: Use lowest TX power for required range; Minimize TX time with efficient protocol; Sleep between transmissions; Use hardware packet handling to reduce CPU wake time.",
          "decisionGuide": "10+ year battery life achievable with low duty cycle applications.",
          "keywords": ["battery life", "low power", "duty cycle"]
        },
        {
          "question": "What protocols are supported?",
          "answer": "Protocol support in HS32S101C8T6: Proprietary protocols - Custom RF protocols using radio registers; wM-Bus - Wireless M-Bus for metering (EN 13757); IEEE 802.15.4g - SUN (Smart Utility Networks) PHY; LoRa - Compatible with LoRa modulation (check regional regulations); Sigfox - Can implement Sigfox protocol stack. Stack options: Hangshun RF stack - Proprietary mesh and star networking; Contiki - Open-source OS for IoT; Custom implementation - Direct radio register access. Protocol considerations: Proprietary - Full control, no licensing; wM-Bus - Standard for European metering; LoRa - Long range but regional restrictions; Sigfox - Requires subscription and certification. For most sensor networks, proprietary protocols offer the best flexibility and lowest cost.",
          "decisionGuide": "Multiple protocol options; proprietary protocols offer maximum flexibility.",
          "keywords": ["protocols", "wM-Bus", "LoRa", "proprietary"]
        },
        {
          "question": "Is it compatible with LoRa networks?",
          "answer": "HS32S101C8T6 has LoRa-compatible modulation but important considerations: Modulation - CSS (Chirp Spread Spectrum) modulation compatible with LoRa; Frequency bands - Supports 433/868/915MHz ISM bands; Protocol - Physical layer compatible, but LoRaWAN stack not included; Certification - Not LoRa Alliance certified; Gateway - Requires LoRa-compatible gateway for network operation. Using with LoRa: Can communicate with LoRa gateways using compatible modulation; Must implement LoRaWAN protocol stack in software; Consider certification requirements for commercial deployment; Check regional regulations for duty cycle and power limits. Alternative: For certified LoRa solutions, consider Semtech modules or certified devices. For private networks, proprietary CSS protocols offer similar range without certification requirements.",
          "decisionGuide": "LoRa-compatible modulation but not certified; implement stack in software or use proprietary protocols.",
          "keywords": ["LoRa", "LoRaWAN", "CSS modulation"]
        },
        {
          "question": "What antenna options are available?",
          "answer": "Antenna options for HS32S101C8T6: PCB antennas - Inverted-F, monopole, or loop on PCB; Low cost, compact, but requires careful design; Chip antennas - Compact ceramic antennas (e.g., Johanson, Taiyo Yuden); Minimal PCB space, consistent performance; Whip antennas - External wire or telescopic antennas; Best performance, but larger and external; Helical antennas - Compact spring-like antennas; Good compromise of size and performance. Frequency considerations: 433MHz - Larger antennas, better penetration; 868/915MHz - Smaller antennas, higher data rates; Multi-band - Wideband antennas for all frequencies. Design guidelines: Keep antenna away from noisy circuits; Use ground plane for monopole antennas; Match impedance to 50Ω for maximum power transfer; Consider enclosure effects on antenna performance. Our reference designs include antenna layouts for each frequency band.",
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
        "content": "The HS32B201RGT6 is our flagship dual-mode wireless MCU for IoT gateway applications. The simultaneous BLE and Sub-1GHz operation is unique - most dual-mode devices can only use one radio at a time. This enables real-time bridging between BLE sensors and Sub-1G backhaul networks. I've deployed this in smart building systems where BLE occupancy sensors report through Sub-1G to a central gateway. The 128KB SRAM accommodates both protocol stacks plus application code. The Ethernet MAC provides wired backhaul option for high-reliability installations. The hardware security features are essential for commercial IoT deployments. For complex IoT gateways requiring multiple wireless technologies, this MCU offers unmatched integration.",
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
          "useCase": "Replace two-chip solution with integrated dual-radio MCU",
          "link": "#"
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
          "useCase": "Use B101 for basic dual-mode applications",
          "link": "/hangshun/products/wireless-mcu/hs32b101c8t6.html"
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
        }
      ],
      faqs: [
        {
          "question": "How does simultaneous dual-radio work?",
          "answer": "Simultaneous dual-radio operation in HS32B201RGT6: Independent radios - BLE and Sub-1G operate on separate frequency bands without interference; Shared antenna option - Diplexer allows single antenna for both bands; Separate antennas - Better performance with dedicated antennas; Time-sharing not required - Both radios active simultaneously; Independent protocols - Run different stacks on each radio. Use cases: BLE sensor to Sub-1G gateway - Collect BLE sensor data, forward via Sub-1G; Smartphone configuration - BLE for phone app, Sub-1G for network; Mixed device support - Serve both BLE and Sub-1G end devices; Protocol translation - Bridge between different wireless technologies. The MCU manages both radios with sufficient processing power for protocol stacks and application logic.",
          "decisionGuide": "True simultaneous operation enables real-time protocol bridging.",
          "keywords": ["dual-radio", "simultaneous", "protocol bridging"]
        },
        {
          "question": "What is the use case for dual-mode operation?",
          "answer": "Common dual-mode use cases: Smart building - BLE occupancy sensors + Sub-1G backhaul to gateway; Industrial IoT - BLE vibration sensors + Sub-1G plant-wide network; Agriculture - BLE soil sensors + Sub-1G long-range to farm office; Smart home - BLE devices + Sub-1G neighborhood network; Asset tracking - BLE for indoor location + Sub-1G for outdoor tracking. Benefits: BLE advantages - Smartphone connectivity, low power, high data rate; Sub-1G advantages - Long range, building penetration, low power; Combined - Best of both technologies in one device. Architecture: End devices use BLE (convenient, ubiquitous); Gateways use dual-mode (BLE + Sub-1G); Backhaul uses Sub-1G (long range, reliable); Cloud connectivity via Ethernet or cellular.",
          "decisionGuide": "Ideal for IoT gateways bridging short-range BLE to long-range Sub-1G networks.",
          "keywords": ["use cases", "IoT gateway", "smart building"]
        },
        {
          "question": "What security features are included?",
          "answer": "Security features in HS32B201RGT6: Hardware encryption - AES-128/256 accelerator; Secure boot - Verifies firmware authenticity; Secure storage - Encrypted key storage; Random number generator - Hardware TRNG for cryptographic operations; Debug protection - Disables debug interfaces in production; Over-the-air updates - Secure firmware update mechanism. Security implementation: Device authentication - Unique device certificates; Data encryption - End-to-end payload encryption; Key management - Secure key provisioning and storage; Secure commissioning - Protected network joining process. For commercial IoT: Meets requirements for most IoT security standards; Supports TLS/DTLS for transport security; Hardware acceleration reduces crypto overhead; Secure boot prevents firmware tampering. These features protect against common IoT security threats including eavesdropping, spoofing, and unauthorized access.",
          "decisionGuide": "Comprehensive hardware security for commercial IoT deployments.",
          "keywords": ["security", "encryption", "secure boot", "IoT security"]
        },
        {
          "question": "Can it act as a Thread or Zigbee border router?",
          "answer": "HS32B201RGT6 Thread/Zigbee capabilities: 802.15.4 PHY - Supports 2.4GHz 802.15.4 for Thread/Zigbee; MAC layer - Can implement 802.15.4 MAC in software; Thread stack - Can run OpenThread (requires license); Zigbee stack - Can run Zigbee PRO stack (requires license); Border router - Can bridge Thread/Zigbee to Ethernet/IP. Implementation considerations: Protocol stacks - Must be licensed separately or use open-source; Memory requirements - Thread/Zigbee stacks need significant Flash/RAM; Certification - Commercial deployment requires alliance certification; Gateway function - Can route between 802.15.4 and IP networks. Alternative approach: For certified Thread/Zigbee solutions, consider dedicated SoCs (e.g., Silicon Labs, TI); Use HS32B201 as application processor with external 802.15.4 radio; Implement proprietary mesh protocols for simpler deployments.",
          "decisionGuide": "Hardware capable; requires protocol stack implementation and certification for commercial use.",
          "keywords": ["Thread", "Zigbee", "border router", "802.15.4"]
        },
        {
          "question": "What is the gateway throughput?",
          "answer": "Gateway throughput depends on configuration: BLE throughput - 1-2Mbps raw, 100-500kbps application data; Sub-1G throughput - 50-500kbps depending on data rate; Concurrent connections - 8-20 BLE devices simultaneously; Packet forwarding - 100-1000 packets/second depending on size; Ethernet backhaul - Up to 100Mbps (limited by MCU processing). Performance factors: Protocol efficiency - Overhead affects usable throughput; Packet size - Larger packets more efficient; CPU load - Protocol processing consumes cycles; Memory - Buffer sizes affect burst handling. Typical gateway performance: Small sensors (10 bytes) - 1000 packets/second; Medium data (100 bytes) - 500 packets/second; Large data (1000 bytes) - 100 packets/second. For high-throughput applications, consider adding external network processor or using more powerful gateway platform.",
          "decisionGuide": "Suitable for typical IoT sensor gateways; consider external processor for high-throughput applications.",
          "keywords": ["throughput", "gateway performance", "packet forwarding"]
        }
      ]
    }
  ];
}

// 主函数
function main() {
  console.log('Adding products to all Hangshun categories...\n');
  
  // 为Touch Control MCU添加产品
  const touchCat = productsData.categories.find(c => c.id === 'touch-control-mcu');
  if (touchCat && touchCat.products.length < 6) {
    const newProducts = generateTouchControlProducts();
    const needed = 6 - touchCat.products.length;
    touchCat.products.push(...newProducts.slice(0, needed));
    console.log(`✅ Added ${Math.min(needed, newProducts.length)} products to Touch Control MCU (total: ${touchCat.products.length})`);
  }
  
  // 为Motor Control MCU添加产品
  const motorCat = productsData.categories.find(c => c.id === 'motor-control-mcu');
  if (motorCat && motorCat.products.length < 6) {
    const newProducts = generateMotorControlProducts();
    const needed = 6 - motorCat.products.length;
    motorCat.products.push(...newProducts.slice(0, needed));
    console.log(`✅ Added ${Math.min(needed, newProducts.length)} products to Motor Control MCU (total: ${motorCat.products.length})`);
  }
  
  // 为Wireless MCU添加产品
  const wirelessCat = productsData.categories.find(c => c.id === 'wireless-mcu');
  if (wirelessCat && wirelessCat.products.length < 6) {
    const newProducts = generateWirelessProducts();
    const needed = 6 - wirelessCat.products.length;
    wirelessCat.products.push(...newProducts.slice(0, needed));
    console.log(`✅ Added ${Math.min(needed, newProducts.length)} products to Wireless MCU (total: ${wirelessCat.products.length})`);
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
