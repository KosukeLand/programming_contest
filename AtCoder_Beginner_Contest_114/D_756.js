var lines = []; var div = [];
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
    var div_t = Array(N).fill(0)

    // [約数, 個数]の二次元配列を作成
    for (var i = 2; i <= N; i++) {
        var t = calc(i);
        for (var value of t) {
            div_t[value[0]] += value[1];
        }
    }
    div = [];
    for (var i = 0; i < N; i++) {
        if (div_t[i] !== 0) { div.push([i + 1, div_t[i]]) }
    }

    // 結果を表示
    console.log(dfs(div.concat(), 0, 75));

});

// 75数を全パターン深さ優先探索
function dfs(p, index, mul) {

    if (p[index] === div[div.length - 1]) {
        if (mul === 1) { return (1); }
        else { return (0) }
    }

    var res = 0;
    for (var i = 0; i < p[index][1] + 1; i++) {
        if (mul % (i + 1) === 0) {
            res += dfs(p.concat(), index + 1, mul / (i + 1));
        }
    }
    return (res);
}

function calc(n) {
    var arr = []

    // 約数を検索
    for (var i = 2; i * i <= n; i++) {
        if (n % i !== 0) { continue }

        var cnt = 0;
        while (n % i === 0) { cnt++; n /= i; }

        arr.push([i, cnt])
    }

    if (n !== 1) { arr.push([n, 1]) }
    return (arr);
}