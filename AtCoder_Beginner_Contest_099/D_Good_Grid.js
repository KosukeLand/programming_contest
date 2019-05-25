var lines = [];

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', function (x) {
    lines.push(x);
});

rl.on("close", function () {
    var N = Number(lines[0].split(" ")[0]);
    var C = Number(lines[0].split(" ")[1]);

    lines.shift();

    var D = Array(C).fill(0).map(value => value = Array(C).fill(0));
    for (var i = 0; i < C; i++) {
        D[i] = lines[0].split(" ").map(value => Number(value));
        lines.shift();
    }

    var c = Array(N).fill(0).map(value => value = Array(N).fill(0));
    for (var i = 0; i < N; i++) {
        c[i] = lines[0].split(" ").map(value => Number(value));
        lines.shift();
    }

    // 違和感の最小値を代入
    var dp = Array(N).fill(0);

    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; i++) {
            if ((i + j % 3) === 0) {

            }
            dp[i] = dp[i - 1]
        }
    }

});