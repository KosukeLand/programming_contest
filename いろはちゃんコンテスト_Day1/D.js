var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {
    var N = Number(lines[0].split(" ")[0])
    var X = Number(lines[0].split(" ")[1])
    var Y = Number(lines[0].split(" ")[2])

    var A = lines[1].split(" ").map(value => Number(value))

    A.sort((a, b) => b - a);

    var ans_takahashi = X, ans_aoki = Y;

    for (var i = 0; i < N; i++) {
        if (i % 2 === 0) { ans_takahashi += A[i] }
        else { ans_aoki += A[i] }
    }

    if (ans_aoki < ans_takahashi) { console.log("Takahashi") }
    else if (ans_takahashi < ans_aoki) { console.log("Aoki") }
    else { console.log("Draw") }
});