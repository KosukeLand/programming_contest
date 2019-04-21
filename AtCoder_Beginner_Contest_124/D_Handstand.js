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
    var N = Number(lines[0].split(" ")[0]);
    var K = Number(lines[0].split(" ")[1]);
    var S = lines[1].split("").map(value => Number(value));

    var v = [0]; var sum = [];
    var now = 1;

    if (S[0] === now) { j = 0; v[j] = 1; }
    else { now = 0; j = 1; v[j] = 1; }

    // 1-0-1-0-...-1って感じの配列がほしい
    for (var i = 1; i < N; i++) {
        if (S[i] === now) {
            v[j]++;
        }
        else {
            now = 1 - now;
            j++; v[j] = 1;
        }
    }
    if (v.length % 2 === 0) { v.push(0) }

    console.log(v);

    // 1-0-1...の1から始まるので，偶数番目のみチェック
    for (var i = 0; i < v.length; i = i + 2) {
        var left = i; var cnt = 0;
        var right = Math.min(i + 2 * K, v.length - 1);

        for (var j = left; j <= right; j++) {
            cnt += v[j];
        }
        result = Math.max(cnt, result);
    }
    console.log(result);
});
