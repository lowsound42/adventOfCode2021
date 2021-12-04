let fileData;
let numOfDigits = 0;

const checkMostCommonBit = (arrayOfBits) => {
    let sum = arrayOfBits.reduce((a, b) => a + b);
    if (sum >= Math.round(arrayOfBits.length / 2)) {
        sum = 1;
    } else sum = 0;
    return sum;
};

const processOxyCo2 = (data, index, version) => {
    let oxyArray = data;
    let tempArray = [];
    let bitsToCheck = [];

    for (let i = 0; i < oxyArray.length; i++) {
        bitsToCheck.push(parseInt(oxyArray[i][index]));
    }
    let result = checkMostCommonBit(bitsToCheck);
    oxyArray.forEach((element) => {
        if (version === 'oxy') {
            if (parseInt(element[index]) === result) {
                tempArray.push(element);
            }
        } else {
            if (parseInt(element[index]) != result) {
                tempArray.push(element);
            }
        }
    });
    oxyArray = tempArray;
    if (oxyArray.length > 1) {
        return processOxyCo2(oxyArray, index + 1, version);
    } else {
        return oxyArray;
    }
};

const processData = (data) => {
    numOfDigits = data[0].length;
    // let result1 = processOxy(data, 0);
    let result1 = processOxyCo2(data, 0, 'oxy');
    let result2 = processOxyCo2(data, 0, 'co2');
    console.log(parseInt(result1.join(''), 2) * parseInt(result2.join(''), 2));
};

var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    fileData = data.toString().split('\n');
    processData(fileData);
});
