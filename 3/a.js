let fileData;
let numOfDigits = 0;
let tallyArray = [];
let filterArray = [];
let tempFilterArray = [];
let finalArray = 0;

const processBits = (element) => {
    for (let i = 0; i < element.length; i++) {
        if (parseInt(element[i]) > 0) {
            tallyArray[i]++;
        } else {
            tallyArray[i]--;
        }
    }
};

const processBitsForOxygen = (filter, checkingFor, index) => {
    filter.forEach((element) => {
        if (parseInt(element[index]) === checkingFor) {
            tempFilterArray.push(element);
        }
    });
    console.log(tempFilterArray);
    filterArray = tempFilterArray;
    tempFilterArray = [];
};

const processData = (data) => {
    numOfDigits = data[0].length;
    tallyArray = Array.apply(null, Array(numOfDigits)).map(function (x) {
        return 0;
    });
    data.forEach((element) => {
        processBits(element);
    });
    tallyArray = tallyArray.map((element) => {
        if (element > 0) return 1;
        else return 0;
    });
    let gammaRate = tallyArray.map((element) => {
        if (element > 0) {
            return 1;
        } else {
            return 0;
        }
    });
    let epsilon = gammaRate.map((element) => {
        if (element === 0) return 1;
        else return 0;
    });
    console.log(
        parseInt(gammaRate.join(''), 2) * parseInt(epsilon.join(''), 2)
    );
    console.log(tallyArray);
    data.forEach((element) => {
        filterArray.push(element);
    });
    for (let i = 0; i < tallyArray.length; i++) {
        processBitsForOxygen(filterArray, tallyArray[i], i);
    }
    console.log(filterArray);
};

var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    fileData = data.toString().split('\n');
    console.log(fileData);
    processData(fileData);
});
