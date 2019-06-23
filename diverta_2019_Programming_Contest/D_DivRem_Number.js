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
    var N = Number(lines[0]);
    var ans = 0;

    // mで割った余りがrなので　m > r
    // N = m * r + r > r^2
    // (N-r)/r = m > r

    for (var r = 1; r * r <= N; r++) {
        if ((N - r) % r === 0 && (N - r) / r > r) { ans += (N - r) / r }
    }
    console.log(ans)
});