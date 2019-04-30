var lines = [];
var match = [0, 2, 5, 5, 4, 5, 6, 3, 7, 6];

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {

    var N = Number(lines[0].split(" ")[0]);
    var M = Number(lines[0].split(" ")[1]);

    var A = lines[1].split(" ").map(value => Number(value));

    // 文字数
    // dpに入るモノは最大の文字列
    var dp = Array(N + 1).fill("");

    // dp配列初期化
    for (var i = 0; i < M; i++) {
        // 本数match[A[i]]使える時，A[i]は作れる
        if (dp[match[A[i]]] === "" || dp[match[A[i]]] < A[i].toString()) { dp[match[A[i]]] = A[i].toString(); }
    }

    for (var i = 1; i <= N; i++) {
        for (var j = 0; j < M; j++) {

            // 数字を作るためにマッチをi本よりも多く使うなら，その数字は作れない
            if (i - match[A[j]] < 0) { continue; }
            // マッチi本で文字列を作成できない場合は，continue(なぜなら，i本ぴったり利用する必要があるので)
            if (dp[i - match[A[j]]] === "") { continue; }

            else {
                // A[j]を追加したxを作成
                var x = dp[i - match[A[j]]] + A[j];
                // 現在最大値のdp[i]とxを比較して，xの方が大きければdp[i]=xとする
                if (dp[i].length < x.length || (dp[i].length === x.length && dp[i] < x)) { dp[i] = x; }
            }
        }
    }

    console.log(dp[N]);
});
