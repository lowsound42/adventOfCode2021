if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

let fileData;
let numberOfIncreases = 0;
var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    fileData = data.toString().split('\n');
    for (let i = 0; i < fileData.length; i++) {
        if (parseInt(fileData[i + 1]) > parseInt(fileData[i])) {
            numberOfIncreases++;
        }
    }
    console.log(fileData.length / 3);
});
