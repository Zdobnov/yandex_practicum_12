const path = require('path');
const fs = require('fs');

const readFile = filePath => new Promise((resolve, reject) => {
  fs.readFile(
    path.join(__dirname, filePath),
    {
      encoding: 'utf8',
    },
    (error, data) => {
      if (error) {
        reject(error);
      };

      resolve(JSON.parse(data));
    }
  );
});

module.exports = readFile;
