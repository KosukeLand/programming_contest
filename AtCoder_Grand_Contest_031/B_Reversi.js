var lines = []; var MOD = Math.pow(10, 9) + 7;
var result = 0;

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines[0]); lines.shift();
    var C = lines.map(value => Number(value));
    var a = Array(2e5).fill(0).map(value => []);


    for (var i = 0; i < N; i++) {
        a[C[i] - 1].push(i);
    }

    for (var i = 0; i < 2e5; i++) {
        a[i].reverse(); // 配列を反転   
        a[i].pop();
        //a[i].unshift()
    }

    console.log(a);
    var dp = Array(N).fill(0);
    dp[0] = 1;

    var t = a[C[0] - 1].pop(); if (0 < t) { dp[t] = 1; }

    for (var i = 1; i < N; i++) {
        dp[i] += dp[i - 1];
        dp[i] %= MOD;
        
        t = a[C[i] - 1].pop();
        console.log(i, C[i] - 1, t);
        
        if (i + 1 < t) { dp[t] = dp[i] }
    }
    console.log(dp)

});