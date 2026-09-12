const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/tdk/solutions.json', 'utf8'));

console.log('Fixing TDK solutions...');

// Add applications field to each solution
data.solutions.forEach((solution, index) => {
  if (!solution.applications) {
    // Add applications based on solution type
    if (solution.id === 'automotive-powertrain') {
      solution.applications = [
        'EV/HEV battery management systems',
        'DC-DC converters for electric vehicles',
        'Motor drive inverters',
        'Onboard chargers',
        'ADAS power supplies'
      ];
    } else if (solution.id === 'industrial-power-supplies') {
      solution.applications = [
        'Industrial AC-DC power supplies',
        'Motor drive power stages',
        'Automation system power',
        'PLC power supplies',
        'Industrial control systems'
      ];
    } else if (solution.id === 'renewable-energy-solutions') {
      solution.applications = [
        'Solar inverter DC link',
        'Wind turbine converters',
        'Energy storage systems',
        'Grid-tie inverters',
        'Battery energy storage'
      ];
    } else {
      solution.applications = [
        'Industrial automation',
        'Power electronics',
        'Motor drives',
        'Renewable energy systems'
      ];
    }
    console.log(`Added applications to solution ${index + 1}: ${solution.id}`);
  }
});

fs.writeFileSync('./data/tdk/solutions.json', JSON.stringify(data, null, 2));
console.log('Solutions fixed!');
