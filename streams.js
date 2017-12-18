var fs = require('fs');

inputFile = './users.json';
outputFile = './out.json';

var readable = fs.createReadStream(inputFile);
var writeable = fs.createWriteStream(outputFile);

readable.pipe(writeable);
