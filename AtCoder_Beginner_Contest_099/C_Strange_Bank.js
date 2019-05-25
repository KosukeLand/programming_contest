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
    var N = Number(lines[0]);
    var dp = Array(Math.max(N, Math.pow(9, 5))).fill(0);
        
    dp[Math.pow(6, 6)] = 1;
    dp[Math.pow(9, 5)] = 1, dp[Math.pow(6, 5)] = 1;
    dp[Math.pow(9, 4)] = 1, dp[Math.pow(6, 4)] = 1;
    dp[Math.pow(9, 3)] = 1, dp[Math.pow(6, 3)] = 1;
    dp[Math.pow(9, 2)] = 1, dp[Math.pow(6, 2)] = 1;
    dp[Math.pow(9, 1)] = 1, dp[Math.pow(6, 1)] = 1;
    dp[1] = 1, dp[0] = 0;

    for (var index = 1; index <= N; index++) {
        var a = Infinity; var b = Infinity; var c = Infinity; var d = Infinity;
        var e = Infinity; var f = Infinity; var g = Infinity; var h = Infinity;
        var i = Infinity; var j = Infinity; var k = Infinity; var l = Infinity;

        if (0 <= index - Math.pow(6, 6)) a = dp[index - Math.pow(6, 6)] + dp[Math.pow(6, 6)];
        if (0 <= index - Math.pow(9, 5)) b = dp[index - Math.pow(9, 5)] + dp[Math.pow(9, 5)];
        if (0 <= index - Math.pow(6, 5)) c = dp[index - Math.pow(6, 5)] + dp[Math.pow(6, 5)];
        if (0 <= index - Math.pow(9, 4)) d = dp[index - Math.pow(9, 4)] + dp[Math.pow(9, 4)];
        if (0 <= index - Math.pow(6, 4)) e = dp[index - Math.pow(6, 4)] + dp[Math.pow(6, 4)];
        if (0 <= index - Math.pow(9, 3)) f = dp[index - Math.pow(9, 3)] + dp[Math.pow(9, 3)];
        if (0 <= index - Math.pow(6, 3)) g = dp[index - Math.pow(6, 3)] + dp[Math.pow(6, 3)];
        if (0 <= index - Math.pow(9, 2)) h = dp[index - Math.pow(9, 2)] + dp[Math.pow(9, 2)];
        if (0 <= index - Math.pow(6, 2)) i = dp[index - Math.pow(6, 2)] + dp[Math.pow(6, 2)];
        if (0 <= index - Math.pow(9, 1)) j = dp[index - Math.pow(9, 1)] + dp[Math.pow(9, 1)];
        if (0 <= index - Math.pow(6, 1)) k = dp[index - Math.pow(6, 1)] + dp[Math.pow(6, 1)];
        if (0 <= index - 1) l = dp[index - 1] + dp[1]

        dp[index] = Math.min(a, b, c, d, e, f, g, h, i, j, k, l);
    }

    console.log(dp[N]);
});