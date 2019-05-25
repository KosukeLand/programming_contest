var lines = [];

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var b = lines[0];
    switch (b) {
        case "A": console.log("T"); break;
        case "T": console.log("A"); break;
        case "C": console.log("G"); break;
        case "G": console.log("C"); break;
    }
});