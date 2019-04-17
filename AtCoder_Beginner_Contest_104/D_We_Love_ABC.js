var line; var S;
var MOD = Math.pow(10, 9) + 7;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    line = x;
});

rl.on('close', function () {
    var S = line.split("");
    var dp = Array(S.length + 1).fill(0).map(function (value) { value = Array(4).fill(0); return (value); })

    for (var i = S.length; 0 <= i; i--) {
        for (var j = 3; 0 <= j; j--) {

            // 最後の文字，jが3以外なら'ABC'は存在しない
            if (i === S.length) { dp[i][j] = (j === 3 ? 1 : 0); }

            // 最後の文字以外
            else {
                // ?が出現した場合，文字数パターンが3倍(AB?: ABA,ABB,ABC)になる．?以外なら，パターン数は変わらず
                dp[i][j] = dp[i + 1][j] * (S[i] === '?' ? 3 : 1);
                
                // ’ABC’が完成していない状態で ? || 'ABC'が完成していな状態で，適切な箇所に'A' or 'B' or 'C'が出現 
                if (j < 3 && S[i] === '?' || S[i] === "ABC"[j]) {
                    // 文字数も状態も1進む
                    dp[i][j] += dp[i + 1][j + 1];
                }
                dp[i][j] %= MOD;
            }
        }
    }
    console.log(dp[0][0]);
});
