const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/songle/solutions.json', 'utf8'));

console.log('Fixing Songle solutions...');

// Add coreAdvantages field to each solution
data.solutions.forEach((solution, index) => {
  if (!solution.coreAdvantages) {
    // Add coreAdvantages based on solution type
    if (solution.id === 'industrial-control-panel') {
      solution.coreAdvantages = [
        {
          title: 'High Reliability',
          description: 'Industrial-grade relays designed for 24/7 operation with long mechanical and electrical life.'
        },
        {
          title: 'Easy Maintenance',
          description: 'Standardized relay sockets and modular design enable quick replacement and reduced downtime.'
        },
        {
          title: 'Flexible Configuration',
          description: 'Mix of power and signal relays allows flexible panel design for various control requirements.'
        },
        {
          title: 'Cost Effective',
          description: 'Optimized BOM cost with reliable performance for industrial automation applications.'
        },
        {
          title: 'Wide Voltage Range',
          description: 'Relays available in 5V, 12V, 24V, and 48V coil options for different control systems.'
        }
      ];
    } else if (solution.id === 'automotive-power-distribution') {
      solution.coreAdvantages = [
        {
          title: 'Automotive Grade',
          description: 'Relays meet automotive industry standards for temperature, vibration, and reliability.'
        },
        {
          title: 'High Vibration Resistance',
          description: 'Designed to withstand vehicle vibration and shock for reliable operation on the road.'
        },
        {
          title: 'Wide Temperature Range',
          description: 'Operating temperature from -40°C to +125°C for under-hood and cabin applications.'
        },
        {
          title: 'Safety Certified',
          description: 'Compliant with automotive safety standards for critical vehicle systems.'
        },
        {
          title: 'Compact Design',
          description: 'Space-efficient relays for modern vehicle electrical distribution systems.'
        }
      ];
    } else if (solution.id === 'hvac-control-system') {
      solution.coreAdvantages = [
        {
          title: 'Silent Operation',
          description: 'Solid state relays provide silent switching for noise-sensitive HVAC applications.'
        },
        {
          title: 'High Current Capacity',
          description: 'Power relays handle high current loads for compressors and heating elements.'
        },
        {
          title: 'Long Life',
          description: 'Solid state relays offer virtually unlimited mechanical life for continuous operation.'
        },
        {
          title: 'Energy Efficient',
          description: 'Low power consumption and efficient switching reduce overall system energy use.'
        },
        {
          title: 'Low Maintenance',
          description: 'Reduced maintenance requirements compared to electromechanical alternatives.'
        }
      ];
    } else {
      solution.coreAdvantages = [
        {
          title: 'High Reliability',
          description: 'Proven relay technology for reliable switching performance.'
        },
        {
          title: 'Long Service Life',
          description: 'Extended mechanical and electrical life for reduced maintenance.'
        },
        {
          title: 'Cost Effective',
          description: 'Optimized design for cost-sensitive applications.'
        },
        {
          title: 'Easy Integration',
          description: 'Standard packages and pinouts for simple PCB integration.'
        },
        {
          title: 'Technical Support',
          description: 'Comprehensive FAE support for design and application assistance.'
        }
      ];
    }
    console.log(`Added coreAdvantages to solution ${index + 1}: ${solution.id}`);
  }
});

fs.writeFileSync('./data/songle/solutions.json', JSON.stringify(data, null, 2));
console.log('Solutions fixed!');
