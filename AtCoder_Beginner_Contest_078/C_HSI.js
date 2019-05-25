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
    var N = Number(lines[0].split(" ")[0])
    var M = Number(lines[0].split(" ")[1])
    
    // ans = (100 * (N - M) + 1900 * M) + (1 - 1/2^M) * ans
    console.log(Math.pow(2, M) * (1900 * M + 100 * (N - M)))
});
