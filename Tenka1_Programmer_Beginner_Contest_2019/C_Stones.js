var lines = []; var result = Infinity;
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
    var S = lines[1].split("");

    var dp = Array(N).fill(0)
    var sharp = Array(N).fill(0);

    sharp[0] = (S[0] === "#" ? 1 : 0);
    dp[0] = (S[0] === "." ? 1 : 0);

    for (var i = 1; i < N; i++) {
        // "#"の数を数えているだけ
        sharp[i] = sharp[i - 1] + (S[i] === "#" ? 1 : 0);
        
        // i番目の文字の時点で，dotとsharpを入れ替えの組み合わせの最小を計算
        dp[i] = Math.min(sharp[i - 1], dp[i - 1] + (S[i] === "." ? 1 : 0));
    }
    
    console.log(Math.min(sharp[N - 1], dp[N - 1]));
});
