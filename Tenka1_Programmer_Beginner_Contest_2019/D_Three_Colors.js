var lines = []; var MOD = 998244353;

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
    var a = lines.map(value => Number(value));

    var dp = Array(N + 1).fill(0);

    var ans = Math.pow(3,n);
    
    for (var i = 0; i < N; i++) {
        a[i]
        dp[i] = dp[i - 1]
    }
});

