const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/songle/solutions.json', 'utf8'));

console.log('Fixing Songle solutions - adding technicalSpecs...');

// Add technicalSpecs field to each solution
data.solutions.forEach((solution, index) => {
  if (!solution.technicalSpecs) {
    // Add technicalSpecs based on solution type
    if (solution.id === 'industrial-control-panel') {
      solution.technicalSpecs = {
        'Operating Voltage': '5VDC, 12VDC, 24VDC',
        'Contact Rating': 'Up to 30A',
        'Operating Temperature': '-25°C to +70°C',
        'Mechanical Life': '10 million operations',
        'Electrical Life': '100,000 operations',
        'Dielectric Strength': '4000Vrms'
      };
    } else if (solution.id === 'automotive-power-distribution') {
      solution.technicalSpecs = {
        'Operating Voltage': '12VDC, 24VDC',
        'Contact Rating': 'Up to 70A',
        'Operating Temperature': '-40°C to +125°C',
        'Vibration Resistance': '5G',
        'Mechanical Life': '5 million operations',
        'Electrical Life': '50,000 operations'
      };
    } else if (solution.id === 'hvac-control-system') {
      solution.technicalSpecs = {
        'Operating Voltage': '24VDC',
        'Load Current': 'Up to 40A',
        'Operating Temperature': '-20°C to +80°C',
        'Switching Type': 'Zero-cross or random',
        'Isolation Voltage': '2500Vrms',
        'LED Indicator': 'Yes'
      };
    } else {
      solution.technicalSpecs = {
        'Operating Voltage': '5VDC - 48VDC',
        'Contact Rating': 'Varies by model',
        'Operating Temperature': '-25°C to +70°C',
        'Mechanical Life': '10 million operations'
      };
    }
    console.log(`Added technicalSpecs to solution ${index + 1}: ${solution.id}`);
  }
});

fs.writeFileSync('./data/songle/solutions.json', JSON.stringify(data, null, 2));
console.log('Solutions fixed!');
