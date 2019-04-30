var lines = [];
var result = 0;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    N = Number(lines[0]);
    A = lines[1].split(" ").map(value => Number(value));

    // 配列Aの先頭からgcd
    var x = Array(N - 1).fill(0); x[0] = A[0];
    for (var i = 1; i < N; i++) {
        x[i] = gcd(x[i - 1], A[i]);
    }

    // 配列Aの後方からgcd
    var y = Array(0).fill(0); y[N - 1] = A[N - 1]
    for (var i = N - 2; 0 <= i; i--) {
        y[i] = gcd(y[i + 1], A[i]);
    }

    // 配列Aの先頭要素を取り除いた際の最大公約数計算
    result = Math.max(y[1], result);

    for (var i = 0; i < N - 2; i++) {
        var m = x[i]
        var n = y[i + 2]

        result = Math.max(gcd(m, n), result);
    }
    
    // 配列Aの末尾要素を取り除いた際の最大公約数計算
    result = Math.max(x[N - 2], result);

    console.log(result);
});

// 最大公約数計算
function gcd(a, b) {
    r = a % b;
    if (r === 0) { return (b); }
    else { return (gcd(b, r)); }
}