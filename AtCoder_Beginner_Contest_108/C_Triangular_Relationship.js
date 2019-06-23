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
    var K = Number(lines[0].split(" ")[1]);

    var ans = 0;
    var num = Array(1000000).fill(0)

    for (var i = 1; i <= N; i++) { num[i % K]++ }
    for (var a = 0; a < K; a++) {
        var b = (K - a) % K
        var c = (K - a) % K
        if ((b + c) % K === 0) { ans += num[a] * num[b] * num[c]; }
    }
    console.log(ans)
}); 