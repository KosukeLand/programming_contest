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
    var N = Number(lines[0].split(" ")[0]);
    var M = Number(lines[0].split(" ")[1]);
    var X = Number(lines[0].split(" ")[2]);
    var Y = Number(lines[0].split(" ")[3]);

    var x = lines[1].split(" ").map(i => Number(i));
    var y = lines[2].split(" ").map(i => Number(i));

    x.sort((a, b) => b - a)
    y.sort((a, b) => a - b)

    var Z = y[0];
    if (x[0] < Z && X < Z && Z <= Y) { console.log("No War") }
    else { console.log("War") }

});