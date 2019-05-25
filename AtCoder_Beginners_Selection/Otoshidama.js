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
    var Y = Number(lines[0].split(" ")[1])

    for (var i = 0; i <= N; i++) {
        for (var j = 0; j <= N; j++) {
            if (Y < 10000 * i + 5000 * j + 1000 * (N - i - j) || (N - i - j) < 0) { break; }
            if (N === i + j + N - i - j && Y === 10000 * i + 5000 * j + 1000 * (N - i - j)) { console.log(i, j, N - i - j); return (0); }

        }
    }
    console.log(-1, -1, -1);
});