var lines = []; var N = 0; var result = Infinity;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', function (x) {
    lines.push(x);
});

rl.on("close", function () {
    N = Number(lines[0]);

    var dp = Array(Math.max(N, Math.pow(9, 5))).fill(0);

    dp[0] = 0;
    dp[1] = 1;
    dp[Math.pow(6, 1)] = 1; dp[Math.pow(6, 2)] = 1; dp[Math.pow(6, 3)] = 1; dp[Math.pow(6, 4)] = 1; dp[Math.pow(6, 5)] = 1; dp[Math.pow(6, 6)] = 1;
    dp[Math.pow(9, 1)] = 1; dp[Math.pow(9, 2)] = 1; dp[Math.pow(9, 3)] = 1; dp[Math.pow(9, 4)] = 1; dp[Math.pow(9, 5)] = 1;


    for (var index = 1; index <= N; index++) {
        var a = Infinity;
        var b = Infinity, c = Infinity, d = Infinity, e = Infinity, f = Infinity; g = Infinity;
        var h = Infinity, i = Infinity, j = Infinity, k = Infinity, l = Infinity

        if (1 <= index) a = dp[index - 1] + dp[1];

        if (Math.pow(6, 1) <= index) b = dp[index - Math.pow(6, 1)] + dp[Math.pow(6, 1)];
        if (Math.pow(6, 2) <= index) c = dp[index - Math.pow(6, 2)] + dp[Math.pow(6, 2)];
        if (Math.pow(6, 3) <= index) d = dp[index - Math.pow(6, 3)] + dp[Math.pow(6, 3)];
        if (Math.pow(6, 4) <= index) e = dp[index - Math.pow(6, 4)] + dp[Math.pow(6, 4)];
        if (Math.pow(6, 5) <= index) f = dp[index - Math.pow(6, 5)] + dp[Math.pow(6, 5)];
        if (Math.pow(6, 6) <= index) g = dp[index - Math.pow(6, 6)] + dp[Math.pow(6, 6)];

        if (Math.pow(9, 1) <= index) h = dp[index - Math.pow(9, 1)] + dp[Math.pow(9, 1)];
        if (Math.pow(9, 2) <= index) i = dp[index - Math.pow(9, 2)] + dp[Math.pow(9, 2)];
        if (Math.pow(9, 3) <= index) j = dp[index - Math.pow(9, 3)] + dp[Math.pow(9, 3)];
        if (Math.pow(9, 4) <= index) k = dp[index - Math.pow(9, 4)] + dp[Math.pow(9, 4)];
        if (Math.pow(9, 5) <= index) l = dp[index - Math.pow(9, 5)] + dp[Math.pow(9, 5)];

        dp[index] = Math.min(a, b, c, d, e, f, g, h, i, j, k, l);
    }

    console.log(dp[N]);
});
