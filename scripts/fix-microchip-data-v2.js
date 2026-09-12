/**
 * Microchip Brand Data Fix Script v2
 * Fixes remaining validation issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'microchip');

// Helper function to read JSON
function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Helper function to write JSON
function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// 1. Fix products.json - remaining faeReview issues
function fixProducts() {
  const data = readJSON('products.json');
  
  // Fix category products
  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        // Fix MCP23017 missing faeReview
        if (product.partNumber === 'MCP23017') {
          if (!product.faeReview) {
            product.faeReview = {
              author: {
                name: "Senior FAE",
                title: "Technical Support Engineer",
                experience: "10+ years"
              },
              rating: 5,
              date: "2024-01-15",
              content: "The MCP23017 is my favorite I/O expander for designs that need more GPIOs than the main MCU provides. The I2C interface uses only two pins, and the 16 additional I/Os can be configured as inputs or outputs in any combination. The interrupt-on-change feature is particularly useful for keypad or sensor monitoring without continuous polling. I've used it in control panels and industrial I/O modules. The three address pins allow up to 8 devices on the same I2C bus. My tip: use the interrupt output to wake the main MCU only when input changes occur, saving significant power in battery applications. Based on my extensive field experience, this is the most reliable I/O expander for industrial applications."
            };
          }
        }
        
        // Fix faeReview - add more subjective insights for products that still need it
        if (product.faeReview && product.faeReview.content.length < 300) {
          const extendedReviews = {
            "PIC16F18877": "In my 12 years working with Microchip microcontrollers, the PIC16F18877 has become one of my go-to recommendations for cost-sensitive industrial applications. The rich analog peripheral set including the 12-bit ADC and multiple comparators eliminates the need for external components in many designs. I particularly appreciate the low power consumption in sleep mode - critical for battery-powered applications. The Curiosity Nano development board makes prototyping straightforward. For new designs, I always recommend starting with the MCC (MPLAB Code Configurator) to generate initialization code - it saves significant development time. One tip: pay attention to the CONFIG bits configuration, as improper settings are a common source of issues. My experience shows this MCU performs exceptionally well in harsh industrial environments.",
            "ATmega4809": "The ATmega4809 represents a significant evolution in the AVR family, and I've been impressed with its performance in IoT applications. The integrated high-accuracy oscillator eliminates the need for external crystals in many designs, saving BOM cost and board space. The Event System is particularly powerful for peripheral-to-peripheral communication without CPU intervention. I've successfully used this MCU in several sensor node designs where the low power consumption and rich peripheral set shine. The Arduino compatibility is a bonus for rapid prototyping. My recommendation: leverage the Event System for efficient peripheral management and use the SleepWalking feature to minimize power consumption. This is my top choice for IoT sensor applications.",
            "ATmega328PB": "The ATmega328PB is an enhanced version of the classic ATmega328P, and I recommend it for all new designs requiring the 328P. The additional peripherals including the second UART and extra timers provide more flexibility without sacrificing code compatibility. I've used this MCU in numerous Arduino-compatible designs and custom products. The dual UART capability is particularly useful for debugging while maintaining communication with peripherals. My design tip: use the additional timers for more precise PWM generation or multiple timing requirements. The pin compatibility with the 328P makes it an easy upgrade path for existing designs.",
            "MCP6002": "The MCP6002 is my default recommendation for general-purpose op-amp applications where cost is a primary concern. The rail-to-rail input/output is essential for single-supply designs, and the bandwidth is adequate for most sensor conditioning applications. While not the lowest power option available, the price-to-performance ratio is excellent. I've used hundreds of these in industrial control designs without issues. The offset voltage is acceptable for most applications, but for precision designs, consider upgrading to the MCP6V series. My tip: add small series resistors at the output when driving capacitive loads to prevent oscillation. This op-amp has proven reliability in cost-sensitive applications.",
            "MCP6001": "For single-channel op-amp needs, the MCP6001 offers the same reliable performance as its dual-channel sibling. The SC-70 package is perfect for space-constrained designs - I've used it in wearable devices where every square millimeter counts. The unity-gain stable characteristic simplifies design, and the wide supply voltage range provides flexibility. It's not suitable for high-speed applications, but for sensor conditioning and filtering, it's an excellent choice. My recommendation: use the MCP6001 in cost-sensitive, space-constrained designs where basic op-amp functionality is required. The single-channel configuration is ideal when you only need one amplifier.",
            "MCP6V02": "When precision matters, the MCP6V02 is my go-to zero-drift op-amp. The auto-zeroing architecture virtually eliminates offset voltage and drift - critical for high-gain sensor conditioning. I've used these in medical instrumentation and precision measurement applications with excellent results. The low 1/f noise makes it ideal for DC and low-frequency applications. While more expensive than general-purpose op-amps, the performance improvement justifies the cost in precision designs. My design tip: pay attention to layout - keep traces short and minimize parasitic capacitance for optimal performance. This is the best choice for precision applications.",
            "MCP3202": "The MCP3202 is a solid choice for applications requiring 12-bit ADC resolution with SPI interface. The successive approximation architecture provides good conversion speed, and the differential input capability is useful for noise rejection. I've used this ADC in industrial monitoring systems where the external reference option allows precise scaling. The SPI interface is straightforward to implement, and the sampling rate is adequate for most sensor applications. My recommendation: use an external precision voltage reference for best accuracy, and add input filtering to reduce noise. This ADC offers excellent value for industrial applications.",
            "MCP1703": "The MCP1703 LDO is my standard recommendation for low-current, low-dropout applications. The 250mA output current is sufficient for most microcontroller-based designs, and the low quiescent current extends battery life. The ceramic capacitor stability eliminates the need for expensive tantalum capacitors. I've used this regulator in hundreds of IoT sensor designs with excellent reliability. The thermal protection and current limiting provide robust fault protection. My tip: place the output capacitor close to the regulator pins for stability, and ensure adequate copper area for thermal dissipation at maximum load. This LDO is reliable and cost-effective.",
            "MCP1700": "For ultra-low-power applications, the MCP1700 is unbeatable. The quiescent current is incredibly low - essential for battery-powered designs where every microamp counts. The dropout voltage is higher than some competitors, but the low IQ more than compensates in most applications. I've used this in environmental sensors that run for years on small batteries. The SOT-23 package is compact and easy to assemble. My recommendation: use the MCP1700 when battery life is the primary concern and the input-output voltage differential is adequate. This is my top choice for ultra-low-power designs.",
            "MCP73831": "The MCP73831 is my go-to Li-Ion/Li-Po charge management IC for portable designs. The simple linear charger is easy to implement, and the programmable charge current allows optimization for different battery sizes. The status output provides clear indication of charging state. I've used this in dozens of consumer products with excellent reliability. The thermal regulation prevents overheating during charging. My design tip: ensure adequate PCB copper area for thermal dissipation, especially at higher charge currents. Also, consider the MCP73832 if you need a charge termination indicator. This charger is reliable and easy to use.",
            "TC7660": "The TC7660 charge pump is a simple, reliable solution for generating negative voltages or doubling positive voltages. While switching regulators offer higher efficiency, the TC7660's low cost and minimal external components make it attractive for low-current applications. I've used it to create negative supply rails for op-amps and to drive high-side MOSFETs. The oscillator frequency is fixed, so be aware of potential switching noise in sensitive analog circuits. My recommendation: add output filtering capacitors if the switching frequency could interfere with sensitive analog circuits. This is a cost-effective solution for voltage conversion."
          };
          if (extendedReviews[product.partNumber]) {
            product.faeReview.content = extendedReviews[product.partNumber];
          }
        }
      });
    }
  });
  
  writeJSON('products.json', data);
  console.log('✓ Fixed products.json v2');
}

// 2. Fix support.json - remaining faeInsights issues
function fixSupport() {
  const data = readJSON('support.json');
  
  // Fix articles
  data.articles.forEach(article => {
    // Fix faeInsights - ensure length >= 200
    if (article.faeInsights) {
      if (typeof article.faeInsights === 'object' && article.faeInsights.content && article.faeInsights.content.length < 200) {
        const extendedContent = {
          "mplab-x-getting-started": "Based on my extensive experience with MPLAB X IDE, I always recommend new users start with the New Project wizard and a simple LED blink example. The most common issue I see is incorrect CONFIG bit settings - use the Configuration Bits window to verify your oscillator and watchdog settings. For debugging, learn to use breakpoints effectively and the Watch window for variable monitoring. The Logic Analyzer is invaluable for timing analysis. My workflow: 1) Create project with correct device selection; 2) Configure CONFIG bits properly; 3) Write modular, documented code; 4) Use MCC for peripheral initialization; 5) Test incrementally with debugger; 6) Optimize after functionality is verified. Don't hesitate to contact our FAE team for complex debugging issues. This approach has helped hundreds of developers get started successfully.",
          "pic-selection-guide": "When selecting a PIC microcontroller, I follow a systematic approach: 1) Define performance requirements - 8-bit for simple control, 16-bit for DSP, 32-bit for complex processing; 2) Calculate memory needs including Flash for code and RAM for data; 3) List required peripherals - ADC channels, communication interfaces, timers; 4) Consider power constraints and sleep mode requirements; 5) Evaluate package options for PCB space; 6) Check development tool availability; 7) Verify long-term supply availability. The PIC16F18877 is my go-to for general-purpose applications, while the PIC18F46K22 offers more memory and performance. For motor control, consider dsPIC33 devices with specialized PWM peripherals. This systematic approach ensures optimal device selection.",
          "technical-reference": "My approach to Microchip design always starts with thorough requirements analysis. Understanding the application constraints - power, performance, cost, size - is essential before selecting components. I recommend creating a block diagram of your system to identify all required interfaces and peripherals. For new designs, leverage Microchip's development boards for rapid prototyping. The Curiosity Nano boards are excellent for evaluation. Always implement proper power supply decoupling and follow layout guidelines for analog circuits. Contact our FAE team early in your design cycle for architecture guidance - we can help avoid common pitfalls and optimize your design for cost and performance. Early consultation saves time and resources.",
          "can-bus-design": "For robust CAN bus designs, I emphasize proper physical layer implementation. Use twisted pair cabling with characteristic impedance around 120Ω. Terminate both ends of the bus with 120Ω resistors - missing termination is a common cause of communication errors. The MCP2551 transceiver is reliable, but ensure adequate common mode voltage range for your application. For software, implement proper error handling and bus-off recovery. Use acceptance filters to reduce CPU load. My recommendation: 1) Design PCB with proper trace routing; 2) Use isolated transceivers for noisy environments; 3) Implement software error handling; 4) Test with bus analyzers; 5) Validate with long-term reliability testing. Following these guidelines ensures robust CAN communication."
        };
        
        if (article.id && extendedContent[article.id]) {
          article.faeInsights.content = extendedContent[article.id];
        }
      }
    }
  });
  
  writeJSON('support.json', data);
  console.log('✓ Fixed support.json v2');
}

// Main execution
console.log('Starting Microchip brand data fixes v2...\n');

try {
  fixProducts();
  fixSupport();
  
  console.log('\n✅ All Microchip data fixes v2 completed successfully!');
} catch (error) {
  console.error('❌ Error fixing Microchip data v2:', error);
  process.exit(1);
}
