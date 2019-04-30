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
    N = Number(lines[0]);
    A = lines[1].split(" ").map(value => Number(value));

    A.sort((a, b) => Math.abs(b) - Math.abs(a));

    for (var i = 0; i < N - 1; i++) {
        if (A[i] < 0) { A[i] *= (-1); A[i + 1] *= (-1) }
        result += A[i];
    }

    console.log(result + A[N - 1]);
});