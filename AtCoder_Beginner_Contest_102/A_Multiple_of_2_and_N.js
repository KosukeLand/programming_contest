var lines = [];
var result = 0;
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]);

    if (N % 2 === 0) { console.log(N) }
    else { console.log(N * 2) }
});