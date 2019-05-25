var lines = [];
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

    // 最大公約数をkとする
    // k + k + k + ... + k + (k * m) = M = k * n となれば良い

    var ans = 1;
    for (var k = 1; k * k < M; k++) {

        // Mがkの倍数でない場合，コンテニュー
        if (M % k !== 0) { continue }
        else {
            var n = M / k;

            // kの出現個数(N)がnよりも小さくないといけない
            // k * N <= k * n = M
            if (N <= n) ans = Math.max(ans, k)
            
            // Mの約数のN倍よりも小さくないといけない
            // n * N <= k * n = M
            if (N <= k) ans = Math.max(ans, n)

        }
    }
    console.log(ans)
});