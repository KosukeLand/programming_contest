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

    // ....##### か ######## になる必要がある
    // S[i]までの部分文字列時点での最小変換数を計算する

    // S[i]よりも左を，全て#に変換するか，全て.に変換する
    var sharp = []; sharp[0] = (S[0] === "#" ? 1 : 0);
    var dp = []; dp[0] = (S[0] === "." ? 1 : 0);

    for (var i = 1; i < N; i++) {
        sharp[i] = sharp[i - 1] + (S[i] === "#" ? 1 : 0);
        dp[i] = dp[i - 1] + (S[i] === "." ? 1 : 0);

        // sharpとdot少ない方を，変換する
        dp[i] = Math.min(sharp[i], dp[i]);
    }
    console.log(dp[N - 1]);
});
