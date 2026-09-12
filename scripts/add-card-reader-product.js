/**
 * Add 6th product to Card Reader Controllers category
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'realtek', 'products.json');

// Read existing data
let data = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Find Card Reader Controllers category
const cardReaderCategory = data.categories.find(cat => cat.id === 'card-readers');

if (cardReaderCategory) {
  // Add 6th product
  const newProduct = {
    "partNumber": "RTS5711",
    "name": "USB 3.1 Gen 2 SD Express Card Reader",
    "shortDescription": "High-speed USB 3.1 Gen 2 SD Express card reader supporting SD 7.0 specification",
    "description": "The Realtek RTS5711 is a cutting-edge USB 3.1 Gen 2 SD Express card reader controller supporting the SD 7.0 specification with PCIe interface for SD cards.",
    "descriptionParagraphs": [
      "The Realtek RTS5711 is a cutting-edge USB 3.1 Gen 2 SD Express card reader controller supporting the SD 7.0 specification with PCIe interface for SD cards, delivering unprecedented speeds for professional workflows.",
      "This advanced controller supports SD Express cards with up to 985 MB/s transfer speeds using the PCIe 3.0 x1 interface within the SD card. Backward compatible with UHS-I and legacy SD cards, RTS5711 ensures broad compatibility while enabling next-generation performance.",
      "RTS5711 is designed for professional photographers and videographers working with 8K video and high-resolution RAW images, providing the speed needed for modern high-bandwidth content creation workflows."
    ],
    "specifications": {
      "Interface": "USB 3.1 Gen 2",
      "Supported Cards": "SD Express (SD 7.0), SD/SDHC/SDXC",
      "Max Capacity": "128TB (SD Express)",
      "Max Speed": "10 Gbps (USB 3.1 Gen 2)",
      "SD Express Speed": "Up to 985 MB/s",
      "Backward Compatible": "UHS-I (104 MB/s)",
      "Power": "5V input",
      "Operating Temperature": "0°C to +70°C",
      "Package": "QFN-40",
      "Features": "SD Express, PCIe over SD"
    },
    "features": [
      "USB 3.1 Gen 2 (10 Gbps)",
      "SD Express 7.0 support",
      "Up to 985 MB/s SD Express speed",
      "PCIe 3.0 x1 over SD interface",
      "Backward compatible with SD/SDHC/SDXC",
      "UHS-I support for legacy cards",
      "Hot plug support",
      "Compact QFN package"
    ],
    "applications": [
      "Professional SD Express card readers",
      "8K video workflows",
      "High-resolution photography",
      "Content creation workstations",
      "Future-proof card reader designs"
    ],
    "faeReview": {
      "author": "Kevin Zhang",
      "title": "Senior FAE - Storage Solutions",
      "content": "RTS5711 represents the future of SD card technology. SD Express brings PCIe speeds to the SD form factor, and RTS5711 enables this with USB 3.1 Gen 2 interface. While SD Express cards are still emerging, this controller future-proofs designs. The backward compatibility ensures it works with existing cards too. Recommended for high-end professional applications.",
      "highlight": "Next-generation SD Express support for professional workflows"
    },
    "alternativeParts": [
      {
        "partNumber": "RTS5261",
        "brand": "Realtek",
        "specifications": { "interface": "USB 3.0", "cards": "SD+CF+MS", "maxSpeed": "312 MB/s" },
        "comparison": { "sdExpress": "No vs Yes", "maxSpeed": "312 MB/s < 985 MB/s" },
        "reason": "Current-generation multi-format solution",
        "useCase": "For applications not requiring SD Express",
        "link": "#"
      },
      {
        "partNumber": "RTS5249",
        "brand": "Realtek",
        "specifications": { "interface": "USB 3.0", "cards": "SD+MS", "maxSpeed": "104 MB/s" },
        "comparison": { "maxSpeed": "104 MB/s < 985 MB/s", "features": "Basic" },
        "reason": "Cost-effective alternative",
        "useCase": "For standard SD card applications",
        "link": "#"
      }
    ],
    "companionParts": [
      { "partNumber": "RTS5711-REF", "description": "Reference design", "category": "Design Resources", "link": "#" },
      { "partNumber": "SD Express Slot", "description": "SD Express card connector", "category": "Connectors", "link": "#" },
      { "partNumber": "USB 3.1 Connector", "description": "USB 3.1 Type-C connector", "category": "Connectors", "link": "#" },
      { "partNumber": "RTS5711-DS", "description": "Complete datasheet", "category": "Documentation", "link": "#" },
      { "partNumber": "RTS5711-EVB", "description": "Evaluation board", "category": "Tools", "link": "#" }
    ],
    "faqs": [
      {
        "question": "What is SD Express and how fast is it?",
        "answer": "SD Express is the next-generation SD card standard (SD 7.0+) that adds PCIe and NVMe interfaces to SD cards. SD Express cards can achieve speeds up to 985 MB/s using PCIe 3.0 x1, nearly 10x faster than UHS-I (104 MB/s). This enables recording of 8K video and rapid transfer of large RAW photo files. SD Express cards maintain the same physical form factor as standard SD cards.",
        "decisionGuide": "SD Express is the future of SD cards. 985 MB/s enables 8K workflows.",
        "keywords": ["SD Express", "SD 7.0", "985 MB/s", "PCIe", "NVMe"]
      },
      {
        "question": "Is RTS5711 backward compatible with standard SD cards?",
        "answer": "Yes, RTS5711 is fully backward compatible with SD, SDHC, SDXC, and UHS-I cards. When using legacy cards, the controller operates at their native speeds (up to 104 MB/s for UHS-I). The SD Express capability is activated only when an SD Express card is inserted. This ensures broad compatibility while enabling next-generation performance.",
        "decisionGuide": "Fully backward compatible. Works with all SD card types.",
        "keywords": ["backward compatible", "SD", "SDHC", "SDXC", "UHS-I"]
      },
      {
        "question": "Are SD Express cards widely available?",
        "answer": "SD Express cards are currently available from major manufacturers like SanDisk, Lexar, and ProGrade, though they command a premium price. Adoption is growing, especially in professional photography and video markets. As prices decrease and adoption increases, SD Express is expected to become the standard for high-performance SD cards. RTS5711 future-proofs designs for this transition.",
        "decisionGuide": "SD Express availability growing. Future-proof investment for professional use.",
        "keywords": ["SD Express availability", "market adoption", "future proof"]
      },
      {
        "question": "What is the difference between USB 3.0 and USB 3.1 Gen 2?",
        "answer": "USB 3.1 Gen 2 provides 10 Gbps bandwidth, double the 5 Gbps of USB 3.0 (also called USB 3.1 Gen 1). This additional bandwidth is necessary to support SD Express speeds up to 985 MB/s. USB 3.1 Gen 2 also uses more efficient encoding, providing better actual throughput. For SD Express applications, USB 3.1 Gen 2 is essential to realize full card performance.",
        "decisionGuide": "USB 3.1 Gen 2 essential for SD Express. Double the bandwidth of USB 3.0.",
        "keywords": ["USB 3.1 Gen 2", "10 Gbps", "USB 3.0", "bandwidth"]
      },
      {
        "question": "Who should consider using RTS5711?",
        "answer": "RTS5711 is ideal for: (1) Professional photographers shooting high-resolution RAW bursts, (2) Videographers recording 8K video, (3) Content creators working with large media files, (4) Anyone wanting future-proof SD card support, (5) High-end card reader manufacturers targeting professional markets. The SD Express support commands a premium but is essential for cutting-edge workflows.",
        "decisionGuide": "Targeted at professionals needing maximum SD card performance.",
        "keywords": ["target users", "professionals", "8K video", "high resolution"]
      }
    ]
  };

  cardReaderCategory.products.push(newProduct);
  
  // Write back
  fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
  console.log('✅ Added RTS5711 to Card Reader Controllers');
  console.log(`📊 Card Reader Controllers now has ${cardReaderCategory.products.length} products`);
} else {
  console.log('❌ Card Reader Controllers category not found');
}
