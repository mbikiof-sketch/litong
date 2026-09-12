const testStr = "CA-IS3720支持宽电压输入范围，具体工作电压取决于具体型号，通常为2.5V至5.5V。该器件设计用于工业级应用，具有良好的电压容差能力，能够在电源波动的情况下保持稳定工作。详细的电压规格请参考数据手册中的电气特性表。该宽电压范围使其适用于多种电源环境。";

console.log('Test string:', testStr);
console.log('Length:', testStr.length);
console.log('Byte length:', Buffer.byteLength(testStr, 'utf8'));
