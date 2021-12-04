let fileData;
let numOfDigits = 0;

const checkMostCommonBit = (arrayOfBits) => {
    let sum = arrayOfBits.reduce((a, b) => a + b);
    if (sum >= Math.round(arrayOfBits.length / 2)) {
        sum = 1;
    } else sum = 0;
    return sum;
};

const processOxy = (data) => {
    let oxyArray = data;
    let j = 0;
    while (j < numOfDigits) {
        let tempArray = [];
        let bitsToCheck = [];
        for (let i = 0; i < oxyArray.length; i++) {
            bitsToCheck.push(parseInt(oxyArray[i][j]));
        }
        let result = checkMostCommonBit(bitsToCheck);
        oxyArray.forEach((element) => {
            if (parseInt(element[j]) === result) {
                tempArray.push(element);
            }
        });
        oxyArray = tempArray;
        j++;
    }
    return oxyArray;
};

const processCo2 = (data) => {
    let coArray = data;
    let j = 0;
    while (coArray.length >= 2) {
        let tempArray = [];
        let bitsToCheck = [];
        for (let i = 0; i < coArray.length; i++) {
            bitsToCheck.push(parseInt(coArray[i][j]));
        }

        let result = checkMostCommonBit(bitsToCheck);
        coArray.forEach((element, index) => {
            if (parseInt(element[j]) != result) {
                tempArray.push(element);
            }
        });
        coArray = tempArray;
        j++;
    }

    return coArray;
};

const processData = (data) => {
    numOfDigits = data[0].length;
    let result1 = processOxy(data);
    let result2 = processCo2(data);
    console.log(parseInt(result1.join(''), 2) * parseInt(result2.join(''), 2));
};

var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    fileData = data.toString().split('\n');
    processData(fileData);
});
