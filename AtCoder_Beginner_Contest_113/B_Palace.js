var lines = []; var result = Infinity;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines[0]);
    var T = Number(lines[1].split(" ")[0]);
    var A = Number(lines[1].split(" ")[1]);

    var H = lines[2].split(" ").map(value => Number(value));

    for (var i = 0; i < N; i++) {
        if (Math.abs(result - A) > Math.abs(T - H[i] * 0.006 - A)) {
            result = T - H[i] * 0.006;
            cnt = i;

        }
    }
    console.log(cnt + 1);
});