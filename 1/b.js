// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

let fileData;
let numberOfIncreases = 0;
let groupOfThree = 0;
let newArray = [];
// Read the file and print its contents.
var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    fileData = data.toString().split('\n');
    for (let i = 0; i < fileData.length; i++) {
        if (fileData.length - i >= 2) {
            groupOfThree =
                parseInt(fileData[i]) +
                parseInt(fileData[i + 1]) +
                parseInt(fileData[i + 2]);
            newArray.push(groupOfThree);
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        if (parseInt(newArray[i + 1]) > parseInt(newArray[i])) {
            numberOfIncreases++;
        }
    }
    console.log(numberOfIncreases);
});
