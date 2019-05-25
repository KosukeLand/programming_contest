var lines = []; var result = 0; var ans = 0;
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
    var S = lines[1].split("");

    var dp = Array(N + 1).fill(0);

    for (var i = 1; i < N; i++) {
        // アルファベットの種類
        for (var j = 1; j < 26; j++) {
            if (i - 1 < j - 1) { continue; }
            else {
                var x = dp[i - 1][j - 1] + 1
            }
        }
    }
});