const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/songle/solutions.json', 'utf8'));

console.log('Fixing Songle solutions - adding bomList...');

// Add bomList field to each solution
data.solutions.forEach((solution, index) => {
  if (!solution.bomList) {
    // Add bomList based on solution type
    if (solution.id === 'industrial-control-panel') {
      solution.bomList = [
        {
          category: 'Power Relays',
          items: [
            {
              partNumber: 'SLA-12VDC-SL-A',
              description: '20A Power Relay, 12V Coil',
              quantity: 4,
              link: '/songle/products/power-relays/sla-12vdc-sl-a.html'
            },
            {
              partNumber: 'SLC-24VDC-SL-C',
              description: '30A Power Relay, 24V Coil',
              quantity: 2,
              link: '/songle/products/power-relays/slc-24vdc-sl-c.html'
            }
          ]
        },
        {
          category: 'Signal Relays',
          items: [
            {
              partNumber: 'SRA-12VDC-CL',
              description: '2A Signal Relay, 12V Coil',
              quantity: 8,
              link: '/songle/products/signal-relays/sra-12vdc-cl.html'
            },
            {
              partNumber: 'SRB-05VDC-SL-C',
              description: '1A Signal Relay, 5V Coil',
              quantity: 6,
              link: '/songle/products/signal-relays/srb-05vdc-sl-c.html'
            }
          ]
        },
        {
          category: 'Solid State Relays',
          items: [
            {
              partNumber: 'SSR-25DA',
              description: '25A Solid State Relay, DC-AC',
              quantity: 2,
              link: '/songle/products/solid-state-relays/ssr-25da.html'
            }
          ]
        }
      ];
    } else if (solution.id === 'automotive-power-distribution') {
      solution.bomList = [
        {
          category: 'Automotive Relays',
          items: [
            {
              partNumber: 'SV-12VDC-SL-A',
              description: '40A Automotive Relay, 12V Coil',
              quantity: 6,
              link: '/songle/products/automotive-relays/sv-12vdc-sl-a.html'
            },
            {
              partNumber: 'SV-24VDC-SL-A',
              description: '40A Automotive Relay, 24V Coil',
              quantity: 4,
              link: '/songle/products/automotive-relays/sv-24vdc-sl-a.html'
            },
            {
              partNumber: 'SA-12VDC-SL-C',
              description: '70A Automotive Relay, 12V Coil',
              quantity: 2,
              link: '/songle/products/automotive-relays/sa-12vdc-sl-c.html'
            }
          ]
        }
      ];
    } else if (solution.id === 'hvac-control-system') {
      solution.bomList = [
        {
          category: 'Solid State Relays',
          items: [
            {
              partNumber: 'SSR-25DA',
              description: '25A Solid State Relay, DC-AC',
              quantity: 4,
              link: '/songle/products/solid-state-relays/ssr-25da.html'
            },
            {
              partNumber: 'SSR-40DA',
              description: '40A Solid State Relay, DC-AC',
              quantity: 2,
              link: '/songle/products/solid-state-relays/ssr-40da.html'
            }
          ]
        },
        {
          category: 'Power Relays',
          items: [
            {
              partNumber: 'SLA-24VDC-SL-C',
              description: '20A Power Relay, 24V Coil',
              quantity: 3,
              link: '/songle/products/power-relays/sla-24vdc-sl-c.html'
            }
          ]
        }
      ];
    } else {
      solution.bomList = [
        {
          category: 'Relays',
          items: [
            {
              partNumber: 'SLA-12VDC-SL-A',
              description: '20A Power Relay, 12V Coil',
              quantity: 4,
              link: '/songle/products/power-relays/sla-12vdc-sl-a.html'
            }
          ]
        }
      ];
    }
    console.log(`Added bomList to solution ${index + 1}: ${solution.id}`);
  }
});

fs.writeFileSync('./data/songle/solutions.json', JSON.stringify(data, null, 2));
console.log('Solutions fixed!');
