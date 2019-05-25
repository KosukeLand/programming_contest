var lines = [];
var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var X = Number(lines[0].split(" ")[0]);
    var Y = Number(lines[0].split(" ")[1]);

    while (X <= Y) { X *= 2; result++; }

    console.log(result);
});