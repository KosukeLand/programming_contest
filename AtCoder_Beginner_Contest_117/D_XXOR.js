var lines = [];
var result = 0;
var border = Math.pow(10, 9);

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0])
    var K = Number(lines[0].split(" ")[1])
    var A = lines[1].split(" ").map(value => Number(value));

    var max = 0;

    for (var i = 0; i <= K; i++) {
        for (var j = 0; j < N; j++) {
            result = result + (A[j] ^ i)

        }

        max = Math.max(max, result);
        result = 0;
    }
    console.log(max);
});