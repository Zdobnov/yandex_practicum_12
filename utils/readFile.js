const path = require('path');
const fs = require('fs').promises;

const readFile = filePath => fs.readFile(path.join(__dirname, filePath), { encoding: 'utf8' })
  .then(data => JSON.parse(data))
  .catch(error => ({
    error: `No such file or directory: ${error.path}`,
  }));

module.exports = readFile;
