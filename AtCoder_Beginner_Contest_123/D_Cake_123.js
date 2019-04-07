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
    var tmp = lines.shift().split(" ");

    var X = Number(tmp[0]);
    var Y = Number(tmp[1]);
    var Z = Number(tmp[2]);
    var K = Number(tmp[3]);

    tmp = lines.shift().split(" ");
    var A = Array(tmp.length)
    for (var i = 0; i < A.length; i++) {
        A[i] = Number(tmp[i]);
    }

    tmp = lines.shift().split(" ");
    var B = Array(tmp.length)
    for (var i = 0; i < B.length; i++) {
        B[i] = Number(tmp[i]);
    }

    tmp = lines.shift().split(" ");
    var C = Array(tmp.length)
    for (var i = 0; i < C.length; i++) {
        C[i] = Number(tmp[i]);
    }

    var result = [];

    A.sort(function (a, b) { return (b - a); });
    B.sort(function (a, b) { return (b - a); });
    C.sort(function (a, b) { return (b - a); });

    for (var a = 0; a < A.length; a++) {
        for (var b = 0; b < B.length; b++) {
            // 組み合わせパターン K以下のみ調査すればよい
            if ((a + 1) * (b + 1) > K) { break; }

            for (var c = 0; c < C.length; c++) {

                // 組み合わせパターン K以下のみ調査すればよい 
                if ((a + 1) * (b + 1) * (c + 1) > K) { break; }

                result.push(A[a] + B[b] + C[c]);
            }
        }
    }
    // 結果を降順にソート
    result.sort(function (a, b) { return (b - a); });

    for (var i = 0; i < Math.min(3000, K); i++) {
        console.log(result[i]);
    }
});