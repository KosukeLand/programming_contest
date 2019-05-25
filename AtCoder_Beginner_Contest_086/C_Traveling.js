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
    var N = Number(lines[0]); lines.shift();
    var txy = lines.map(i => i.split(" ").map(i => Number(i)));

    var t = txy[0][0], x = txy[0][1], y = txy[0][2]
    if (t < x + y || (t - (x + y)) % 2 !== 0) { console.log("No"); return (0); }

    for (var i = 1; i < N; i++) {
        t = Math.abs(t - txy[i][0]), x = Math.abs(x - txy[i][1]), y = Math.abs(y - txy[i][2]);

        if (t < x + y || (t - (x + y)) % 2 !== 0) { console.log("No"); return (0) }
    }

    console.log("Yes")
});
