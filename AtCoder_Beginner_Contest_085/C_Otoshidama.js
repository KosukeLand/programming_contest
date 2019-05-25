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
    var N = Number(lines[0].split(" ")[0]);
    var Y = Number(lines[0].split(" ")[1]);

    for (var i = 0; i <= 2000; i++) {
        for (var j = 0; j <= 2000; j++) {
            if (N - i - j < 0) { break; }
            if (10000 * i + 5000 * j + 1000 * (N - i - j) === Y) { console.log(i, j, N - i - j); return (0) }
        }
    }
    console.log(-1, -1, -1);
});