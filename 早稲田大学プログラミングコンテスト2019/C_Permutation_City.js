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
    var N = Number(tmp[0]);
    var M = Number(tmp[1]);

    var u = Array(M); var v = Array(M);

    for (var i = 0; i < M; i++) {
        var tmp = lines[i].split(" ");
        u[i] = Number(tmp[0]);
        v[i] = Number(tmp[1]);
    }
    var result = "";
    if (N === M + 1 || nCm(n, 2) <= M) { for (var i = 0; i < N; i++) { result += i; } console.log(result); }


    // 解き方がわからぬ！！！
    for (var i = 0; i < N; i++) {

    }
});

function nCm(n, m) {
    return (nPm(n, m) / nPm(m, m));
}

function nPm(n, m) {
    var result = 1;
    for (var i = n; i >= m; i--) {
        result *= i;
    }
    return(result);
}