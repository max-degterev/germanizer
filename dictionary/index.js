const fs = require('fs');

module.exports = fs.readdirSync(__dirname).reduce((acc, fileName) => {
  const filePath = `${__dirname}/${fileName}`;

  if (!fs.statSync(filePath).isDirectory()) return acc;
  acc[fileName] = require(filePath);

  return acc;
}, {});
