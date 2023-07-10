const fs = require('fs');

function generateFile(sizeInBytes, fileName) {
  const buffer = Buffer.alloc(sizeInBytes);
  fs.writeFile(fileName, buffer, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been generated with size ${sizeInBytes} bytes.`);
  });
}

generateFile(61 * 1024, 'test.txt');
