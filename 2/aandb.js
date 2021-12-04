// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

let fileData;
let horizontal = 0;
let depth = 0;
let aim = 0;

const processData = (data) => {
    console.log(data);
    data.forEach((element, index) => {
        if (element.slice(0, 1) === 'f') {
            horizontal += parseInt(element.at(-1));
            depth += aim * parseInt(element.at(-1));
        } else if (element.slice(0, 1) === 'u') {
            aim -= parseInt(element.at(-1));
        } else if (element.slice(0, 1) === 'd') aim += parseInt(element.at(-1));
    });

    console.log(horizontal * depth);
};
var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    fileData = data.toString().split('\n');
    processData(fileData);
});
