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
    var X = Number(lines[0].split(" ")[2])

    var A = lines[1].split(" ").map(i => Number(i));

    var left = 0; var right = 0;
    for (var i = 0; i < M; i++) {
        if (X < A[i]) { right++; }
        if (X > A[i]) { left++; }
    }

    console.log(Math.min(left, right));
});

