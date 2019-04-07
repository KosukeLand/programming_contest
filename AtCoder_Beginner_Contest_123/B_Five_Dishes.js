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
    var v = [];
    for (var i = 0; i < 5; i++) {
        v[i] = Number(lines[i]);
    }
    var result = Infinity;
    var NextTime = Array(5);

    for (var i = 0; i < 5; i++) {
        if (v[i] % 10 === 0) { NextTime[i] = v[i]; }
        // 一桁目が1-9ならば，一桁目を0にして10を加える
        else { NextTime[i] = v[i] - v[i] % 10 + 10 }
    }

    for (var i = 0; i < 5; i++) {
        var Time = 0;
        // 最後に注文する商品を全パターン探索
        for (var j = 0; j < 5; j++) {
            i === j ? Time += v[j] : Time += NextTime[j];
        }
        result = Math.min(result, Time);
    }
    console.log(result);
});