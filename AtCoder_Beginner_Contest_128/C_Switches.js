var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on('line', (x) => {
    lines.push(x)
});

rl.on('close', () => {
    var N = Number(lines[0].split(" ")[0])
    var M = Number(lines[0].split(" ")[1])
    var ans = 0;
    lines.shift()

    // 電球と繋がっているスイッチの関係性を保存
    var a = [];
    for (var i = 0; i < M; i++) {
        var t = lines[i].split(" ");

        // i番目の電球と繋がっているスイッチをa[i]に格納
        for (var j = 1; j <= Number(t[0]); j++) {
            a[t[j] - 1] |= 1 << i;
        }
    }
    console.log(a)
    var p = 0; var t = lines[M].split(" ");

    for (var i = 0; i < M; i++) {
        var x = Number(t[i]);
        p |= x << i;
    }

    // 電球on or 電球off全パターンを検索
    // 000,001,010,011, ... ,111
    for (var index = 0; index < (1 << N); index++) {
        var t = 0;

        // スイッチ
        for (i = 0; i < M; i++) {
            // indexのiビット目が1か判定
            if (index >> i & 1) {
                t ^= a[i]
            }
        }
        if (t === p) { ans++ }
    }
    console.log(ans)
});