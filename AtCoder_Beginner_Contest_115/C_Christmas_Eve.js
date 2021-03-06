var lines = []; var result = Infinity;
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
    var K = Number(lines[0].split(" ")[1]);
    lines.shift();

    var h = lines.map(value => Number(value));

    h.sort((a, b) => a - b);

    for (var i = 0; i + K - 1 < N; i++) {
        result = Math.min(result, h[i + K - 1] - h[i]);
    }
    console.log(result);
});