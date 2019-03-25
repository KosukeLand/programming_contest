var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {

    var tmp = lines.shift().split(" ");
    var N = Number(tmp[0]); var Q = Number(tmp[1]);

    var S = lines.shift();
    var X = ["A", "C"];

    var l = Array(Q); var r = Array(Q);
    for (var i = 0; i < Q; i++) {
        tmp = lines[i].split(" ");
        l[i] = Number(tmp[0]);
        r[i] = Number(tmp[1]);
    }

    var result = 0;

    for (var a = 0; a < Q; a++) {
        var Moji = S.slice(l[a] - 1, r[a]);

        var dp = Array(3).fill(0);
        for (var i = 0; i <= 2; i++) {
            dp[i] = Array(Moji.length + 1).fill(0);
        }


        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < Moji.length; j++) {
                if (X[i] === Moji[j]) {
                    dp[i + 1][j + 1] = dp[i][j] + 1;
                    if (dp[i + 1][j + 1] === 2) { result++; }
                }
                else {
                    dp[i + 1][j + 1] = 0;
                }
            }
        }
        console.log(result);
        result = 0;
    }
});