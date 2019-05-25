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
    var N = Number(lines[0]);
    var S = lines[1]
    var red = 0, blue = 0;

    for (var value of S) {
        if (value === "R") { red++; }
        else { blue++; }
    }
    blue < red ? console.log("Yes") : console.log("No");
});