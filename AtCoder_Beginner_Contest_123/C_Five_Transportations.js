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
    var A = Number(lines[1]);
    var B = Number(lines[2]);
    var C = Number(lines[3]);
    var D = Number(lines[4]);
    var E = Number(lines[5]);

    var min = Math.min(A, B, C, D, E);

    console.log(4 + Math.ceil(N / min));
});