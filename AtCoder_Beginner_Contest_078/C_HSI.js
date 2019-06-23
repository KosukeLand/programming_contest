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
    
    var p = Math.pow(0.5, M)
    var t = 1900 * M + 100 * (N - M)

    // ans = (100 * (N - M) + 1900 * M) + (1 - 1/2^M) * ans
    console.log(t / p)
});
